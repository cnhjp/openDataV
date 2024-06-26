import type { ToolBarItemType } from './components'
import { CodeEditor, Group, ToolBar, ToolBarItem, XIcon } from './components'
import DemoDataPlugin from './data/DemoData'
import type { StoreComponentData } from './db'
import Editor from './editor'
import Shape from './editor/Shape'
import { ComponentGroupList, DataMode, EditMode, GroupType, PixelEnum } from './enum'
import useComponentPlugin from './loadPlugin'
import { Container, useEmpty } from './modules'
import Canvas from './pages/designer/Canvas.vue'
import Designer from './pages/designer/Designer.vue'
import Previewer from './pages/perviewer/viewer.vue'
import LeftSideBar from './pane/LeftSideBar'
import RightSideBar from './pane/RightSideBar'
import ToolsBar from './pane/Toolsbar'
import Directive from './plugins/directive'
import type { CanvasData, CanvasStyleData } from './state'
import {
  DataSlotter,
  useActionState,
  useCanvasState,
  useClipBoardState,
  useDataState,
  useScriptState,
  useSnapshotState
} from './state'
import { exportCanvas, importCanvas, recoveryDraft, setShowEm, undo } from './toolbars'
import type {
  ComponentDataType,
  ComponentItem,
  ComponentStyle,
  ContextmenuItem,
  DOMRectStyle,
  GroupStyle,
  Location,
  Position,
  Vector
} from './type'
import {
  createComponent,
  filterStyle,
  getComponentStyle,
  getInnerComponentShapeStyle,
  handleLogger,
  toPercent
} from './utils'

export {
  Canvas,
  CodeEditor,
  ComponentGroupList,
  Container,
  createComponent,
  DataMode,
  DataSlotter,
  DemoDataPlugin,
  Designer,
  Directive,
  EditMode,
  Editor,
  exportCanvas,
  filterStyle,
  getComponentStyle,
  getInnerComponentShapeStyle,
  Group,
  GroupType,
  handleLogger,
  importCanvas,
  LeftSideBar,
  PixelEnum,
  Previewer,
  recoveryDraft,
  RightSideBar,
  setShowEm,
  Shape,
  ToolBar,
  ToolBarItem,
  ToolsBar,
  toPercent,
  undo,
  useActionState,
  useCanvasState,
  useClipBoardState,
  useComponentPlugin,
  useDataState,
  useEmpty,
  useScriptState,
  useSnapshotState,
  XIcon
}
export type {
  CanvasData,
  CanvasStyleData,
  ComponentDataType,
  ComponentItem,
  ComponentStyle,
  ContextmenuItem,
  DOMRectStyle,
  GroupStyle,
  Location,
  Position,
  StoreComponentData,
  ToolBarItemType,
  Vector
}

export default {
  Canvas,
  CodeEditor,
  ComponentGroupList,
  Container,
  createComponent,
  DataMode,
  DataSlotter,
  DemoDataPlugin,
  Designer,
  Directive,
  EditMode,
  Editor,
  exportCanvas,
  Group,
  GroupType,
  handleLogger,
  importCanvas,
  LeftSideBar,
  PixelEnum,
  Previewer,
  recoveryDraft,
  RightSideBar,
  setShowEm,
  Shape,
  ToolBar,
  ToolBarItem,
  ToolsBar,
  undo,
  useActionState,
  useCanvasState,
  useClipBoardState,
  useComponentPlugin,
  useDataState,
  useEmpty,
  useScriptState,
  useSnapshotState,
  XIcon
}
