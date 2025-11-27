import { createApp } from 'vue'
import router from '@/router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import tiVueUI from '@/components/index';
import tiVueUI from '../lib/index.es';
// import tiTable from '../lib/table/index';
import "../lib/ti-vue-ui.css";
// 安装图标包
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/main.css';
import './style.scss'
import App from './App.vue'

const app = createApp(App)
app.use(tiVueUI)
// app.use(tiTable)
import { toLine } from './utils';
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