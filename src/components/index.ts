import { App } from 'vue';
import chooseIcon from './chooseIcon';
import trend from './trend';
const components = [chooseIcon, trend];
export default {
    install(app: App) {
        components.forEach(component => {
            app.use(component);
        });
    }
};