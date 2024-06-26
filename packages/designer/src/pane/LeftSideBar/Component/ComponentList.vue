<template>
  <o-menu
    :options="menuOptions"
    :accordion="false"
    :collapsed="!iscollapsed"
    class="h-full o-scroll overflow-auto select-none"
  />
</template>

<script setup lang="ts">
import type { CustomComponent } from '@open-data-v/base'
import type { MenuOption } from '@open-data-v/ui'
import { OMenu } from '@open-data-v/ui'
import { computed, getCurrentInstance, h } from 'vue'

import type { GroupType } from '../../../enum'
import { ComponentGroupList } from '../../../enum'
import { useCanvasState } from '../../../state'
import ComponentItem from './ComponentItem.vue'

withDefaults(
  defineProps<{
    iscollapsed?: boolean
  }>(),
  {
    iscollapsed: true
  }
)

const canvasState = useCanvasState()
const instance = getCurrentInstance()
const XIcon = instance!.appContext.components['XIcon']

const menuOptions = computed<MenuOption[]>(() => {
  const components = canvasState.components
  const groups: { group: string; component: CustomComponent[] } | {} = {}
  Object.keys(components).forEach((key) => {
    const component: CustomComponent = new components[key]()
    const group = component.group
    if (!group || !component.show) {
      return
    }

    if (!groups[group]) {
      groups[group] = []
    }
    groups[group].push(component)
  })
  const menus: MenuOption[] = []
  ComponentGroupList.forEach((item: GroupType) => {
    menus.push({
      label: () => item.name,
      key: item.key,
      icon: () =>
        h(XIcon, {
          name: `${item.icon}`
        }),
      children: groups[item.key]?.map((el) => {
        return {
          label: () =>
            h(ComponentItem, {
              component: el.component,
              name: el.name,
              ondragstart: handleDragStart
            }),
          key: el.component
        }
      })
    })
  })
  return menus
})

const handleDragStart = (e) => {
  e.dataTransfer.setData('componentName', e.target.dataset.component)
}
</script>
<style lang="less" scoped>
@import '../../../css/index.less';
</style>
