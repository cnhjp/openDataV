import { cloneDeep } from 'lodash-es'

import { eventBus, useEventBus } from '@/bus'
import { DataType } from '@/enum/data'
import type {
  DataAcceptor,
  RequestDataInstance,
  RequestOptions,
  Response
} from '@/models/requestOption'
import type { AfterScript } from '@/types/component'
import type { CallbackType } from '@/utils/data'
import { makeFunction } from '@/utils/data'

class SubRequestData implements RequestDataInstance {
  public afterScript?: AfterScript
  public channel: string
  public callback?: CallbackType | undefined

  constructor({ channel, script }: { channel: string; script?: AfterScript }) {
    this.channel = channel
    this.afterScript = script
    this.callback =
      this.afterScript && this.afterScript.code
        ? makeFunction(this.afterScript.type, this.afterScript.code, ['resp', 'options'], false)
        : undefined
  }

  public toJSON(): RequestOptions<{ channel: string; script?: AfterScript }> {
    return {
      options: {
        script: cloneDeep(this.afterScript),
        channel: this.channel
      },
      type: DataType.STATIC
    }
  }

  public close() {
    eventBus.off(this.channel)
  }

  public async connect(acceptor: DataAcceptor, options?: Recordable) {
    useEventBus(this.channel, (event) => {
      const response: Response = {
        status: 'SUCCESS',
        data: event,
        afterData:
          this.callback && this.callback.handler
            ? this.callback.handler(event, options || {})
            : event
      }
      acceptor && acceptor(response, 'SUB')
    })
  }
}
export default SubRequestData