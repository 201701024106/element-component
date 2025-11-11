import { App } from 'vue';
import timeRange from './src/index.vue';
export default {
    install(app: App) {
        app.component('ti-time-range', timeRange);
    }
};