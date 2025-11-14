import { App } from 'vue';
import chooseIcon from './chooseIcon';
import trend from './trend';
import notification from './notification';
import list from './list';
import leftMenu from './leftMenu';
import progress from './progress';
import timeRange from './timeRange';
import dateRange from './dateRange';
import citySelect from './citySelect';
const components = [chooseIcon, trend, notification, list, leftMenu, progress, timeRange, dateRange, citySelect];
export default {
    install(app: App) {
        components.forEach(component => {
            app.use(component);
        });
    }
};