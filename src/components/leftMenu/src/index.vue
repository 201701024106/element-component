<template>
    <div class="">
        <el-menu :default-active="defaultActive" v-bind="$attrs" :router="router" class="el-menu-vertical-demo">
            <template v-for="item in data">
                <el-menu-item v-if="!item[childrenKey] || !item[childrenKey].length" :index="item[indexKey]"
                    :key="item[labelKey]">
                    <component v-if="item[iconKey]" :is='`el-icon-${toLine(item[iconKey])}`' class="mr-[4px]">
                    </component>
                    <span>{{ item[labelKey] }}</span>
                </el-menu-item>
                <el-sub-menu v-if="item[childrenKey] && item[childrenKey].length" :index="item[indexKey]"
                    :key="item[labelKey]">
                    <template #title>
                        <component v-if="item[iconKey]" :is='`el-icon-${toLine(item[iconKey])}`' class="mr-[4px]">
                        </component>
                        <span>{{ item[labelKey] }}</span>
                    </template>
                    <el-menu-item v-for="(item1) in item[childrenKey]" :index="item1[indexKey]" :key="item1[indexKey]">
                        <component v-if="item1[iconKey]" :is='`el-icon-${toLine(item[iconKey])}`' class="mr-[4px]">
                        </component>
                        <span>{{ item1[labelKey] }}</span>
                    </el-menu-item>
                </el-sub-menu>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, PropType } from 'vue';
import { menuItem } from "./types"
const props = defineProps({
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
});

</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

svg {
    width: 1em;
    height: 1em;
}
</style>