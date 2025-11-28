import { createApp } from 'vue'
import router from '@/router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import tiElementComponent from '@/components/index';
// import "../lib/index.css";
// import tiTable from '../lib/table/index';
import tiElementComponent from "ti-element-component";
import "ti-element-component/index.css";
// 安装图标包
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/main.css';
import './style.scss'
import App from './App.vue'
import { setUpProdMockServer } from "./mockProdServer.ts"

const app = createApp(App)
// app.use(tiVueUI)
// app.use(tiTable)
app.use(tiElementComponent)
import { toLine } from './utils';
setUpProdMockServer()
app.config.globalProperties.toLine = toLine;
const iconArr = []
// 全局注册图标
for (let i in ElementPlusIconsVue) {
    iconArr.push(`el-icon${toLine(i)}`)
    app.component(`el-icon-${toLine(i)}`, ElementPlusIconsVue[i])
}
app.config.globalProperties.iconArr = iconArr;
app.use(router).use(ElementPlus)
app.mount('#app')