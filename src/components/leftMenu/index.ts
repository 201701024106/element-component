import { App } from 'vue';
import menu from './src/index.vue';
import InfiniteMenu from './src/menu';
export default {
    install(app: App) {
        app.component('ti-leftmenu', menu);
        app.component('ti-infinite-leftmenu', InfiniteMenu);
    }
};