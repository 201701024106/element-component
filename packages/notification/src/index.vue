<template>
    <el-popover trigger="click" popper-class="notification-popover" placement="top" width="auto">
        <template #default>
            <slot></slot>
        </template>
        <template #reference>
            <el-badge class="bage" :value="value" :max="max" :is-dot="isDot">
                <component :is="`el-icon-${toLine(props.icon)}`" class="icon"></component>
            </el-badge>
        </template>
    </el-popover>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
    icon: string,
    value: number | string,
    max: number,
    isDot: boolean,
}>(), {
    icon: 'Bell',
    isDot: false
});
</script>

<style scoped lang="scss">
.bage {
    cursor: pointer;
    margin: 6px;
}
</style>
<style lang="scss">
.el-popover.notification-popover {
    padding-bottom: 0;
    /* 可以添加更多自定义样式 */
    min-width: 300px;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>