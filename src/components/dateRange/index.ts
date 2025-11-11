import { App } from 'vue';
import dateRange from './src/index.vue';
export default {
    install(app: App) {
        app.component('ti-date-range', dateRange);
    }
};