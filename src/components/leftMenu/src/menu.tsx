import { defineComponent, PropType, useAttrs } from 'vue';
import { menuItem } from './types';
import * as Icons from '@element-plus/icons-vue';
import "./styles/index.scss"

export default defineComponent({
    name: 'infiniteMenu',
    props: {
        data: {
            type: Array as PropType<menuItem[]>,
            required: true,
            default: () => []
        },
        defaultActive: {
            type: String,
            default: ''
        },
        // 是否是路由模式
        router: {
            type: Boolean,
            default: false
        },

        // 标题的键名
        labelKey: {
            type: String,
            default: 'name'
        },
        // 标题的键名
        iconKey: {
            type: String,
            default: 'icon'
        },
        // 标题的键名
        indexKey: {
            type: String,
            default: 'index'
        },
        // 子菜单的键名
        childrenKey: {
            type: String,
            default: 'children'
        }
    },
    setup(props, ctx) {
        const attrs = useAttrs();
        const renderMenu = (data: menuItem[]) => {
            return data.map((item: menuItem) => {
                item.i = (Icons as any)[item[props.iconKey]!];
                // 处理插槽
                const solts = {
                    title: () => (
                        <>
                            <item.i class="mr-4"></item.i>
                            <span>{item[props.labelKey]}</span>
                        </>
                    )
                }
                if (item[props.childrenKey] && item[props.childrenKey].length) {
                    return (
                        <el-sub-menu index={item[props.indexKey]} v-slots={solts}>
                            {renderMenu(item[props.childrenKey])}
                        </el-sub-menu>
                    );
                }
                // 渲染普通菜单
                return (<el-menu-item index={item[props.indexKey]}>
                    <item.i></item.i>
                    <span>{item[props.labelKey]}</span>
                </el-menu-item>);
            });
        };

        return () => {
            return (<el-menu default-active={props.defaultActive} router={props.router} {...attrs}>
                {renderMenu(props.data)}
            </el-menu>);
        };
    }
})