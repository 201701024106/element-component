<template>
    <el-dialog v-model="dialogVisible" v-bind="$attrs" v-on="$listeners" @close="onClose">
        <div :class="{
            'overflow-y-auto': autoScroll,
            'max-h-[400px]': autoScroll
        }">
            <ti-form ref="dynamicForm" :labelWidth="labelWidth" :options="props.options">
            </ti-form>
        </div>
        <template v-for="(_, slotName) in $slots" #[slotName]="scopeData">
            <slot :name="slotName" v-bind="scopeData" :form="dynamicForm"></slot>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { tr } from 'element-plus/es/locale';
import { ref, reactive, defineExpose, defineProps, defineEmits, computed } from 'vue';

const dynamicForm = ref(null);
const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
    },
    options: {
        type: Array,
        default: () => [],
    },
    labelWidth: {
        type: String,
        default: '120px',
    },
    autoScroll: {
        type: Boolean,
        default: false,
    }
});

const emit = defineEmits(['update:visible']);

const dialogVisible = computed({
    get() {
        return props.visible;
    },
    set(val) {
        emit('update:visible', val);
    }
})
const onClose = () => {
    emit('update:visible', false);
};
</script>

<style scoped lang="scss"></style>