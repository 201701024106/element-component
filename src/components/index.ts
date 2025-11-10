import { App } from 'vue';
import chooseIcon from './chooseIcon';
import trend from './trend';
import notification from './notification';
import list from './list';
import leftMenu from './leftMenu';
const components = [chooseIcon, trend, notification, list, leftMenu];
export default {
    install(app: App) {
        components.forEach(component => {
            app.use(component);
        });
    }
};