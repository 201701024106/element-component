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
import calendar from './calendar';
import form from './form';
import modalForm from './modalForm';
import table from './table';
const components = [chooseIcon, trend, notification, list, leftMenu, progress, timeRange, dateRange, citySelect, calendar, form, modalForm, table];
export default {
    install(app: App) {
        components.forEach(component => {
            app.use(component);
        });
    }
};