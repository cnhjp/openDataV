<template>
  <o-form-item key="data" label="系统脚本">
    <div class="justify-center flex-row flex-nowrap flex items-center">
      <o-select v-model:value="scriptRef" :options="scriptOptions" @update:value="scriptChange" />
      <o-button type="primary" @click="isShow = true"> 文档 </o-button>
    </div>
  </o-form-item>
  <DynamicForm v-model:data="extendParam" :items="extendParamItems" @change="extendParamChange" />
  <o-modal v-model:show="isShow">
    <o-card
      title="文档"
      :bordered="false"
      size="small"
      role="dialog"
      closable
      aria-modal="true"
      @close="isShow = false"
      >我还没有写文档</o-card
    >
  </o-modal>
</template>

<script lang="ts" setup>
import type { SelectOption } from '@open-data-v/ui'
import { OButton, OCard, OFormItem, OModal, OSelect } from '@open-data-v/ui'
import { computed, onMounted, ref, watch } from 'vue'

import type { Slotter } from '../type'
import DynamicForm from './DynamicFormItem'
import ScriptHandler from './handler'
import funcs from './scripts'
import type { ScriptForm } from './type'

const props = defineProps<{
  slotter: Slotter
}>()
const isShow = ref<boolean>(false)

const scriptOptions = computed<Array<SelectOption>>(() => {
  const keys = Object.keys(funcs)
  return keys.map((el) => {
    const item = funcs[el]
    return {
      label: item.name,
      value: item.key
    }
  })
})

const extendParamItems = ref<Array<ScriptForm>>([])
const extendParam = ref<Record<string, any>>({})
const scriptRef = ref<string | null>(null)

const extendParamChange = (_key: string, _value: any) => {
  setComponentScript()
}
const scriptChange = (script: string) => {
  scriptRef.value = script
  extendParamItems.value = funcs[script]?.extendParams || []
  const data = {}
  extendParamItems.value.forEach((el) => {
    data[el.prop] = el.props?.defaultValue
  })
  extendParam.value = data
  setComponentScript()
}
onMounted(async () => {
  await initData()
})
const setComponentScript = () => {
  if (scriptRef.value && props.slotter) {
    const scriptHandler = new ScriptHandler(scriptRef.value, extendParam.value)
    props.slotter.afterCallbackChange(scriptHandler)
  }
}

const initData = async () => {
  if (props.slotter.scriptConfig && props.slotter.scriptConfig.type === 'System') {
    const scriptConfig = props.slotter.scriptConfig as ScriptHandler
    const key = scriptConfig.key
    scriptRef.value = key
    extendParamItems.value = funcs[key]?.extendParams || []
    extendParam.value = scriptConfig.extendParams || {}
  } else {
    scriptRef.value = null
    extendParamItems.value = []
    extendParam.value = {}
  }
}

watch(
  () => props.slotter,
  (value: Slotter) => {
    if (value) {
      initData()
    }
  }
)
</script>

<style lang="less" scoped></style>
