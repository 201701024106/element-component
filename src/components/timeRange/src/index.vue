<template>
    <div class="ti-time-range-container flex flex-wrap gap-4">
        <el-time-select v-bind="$attrs.startOptions" v-model="startModelValue" class="w-[240px] mr-[4px]"
            :max-time="endModelValue || endTime" :start="startTime" :step="step" :end="endTime" />
        <el-time-select v-bind="$attrs.endOptions" v-model="endModelValue" class="w-[240px]"
            :min-time="startModelValue || startTime" :start="startTime" :step="step" :end="endTime" />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, defineModel, defineEmits, computed } from 'vue';
const props = defineProps({
    startTime: {
        type: String,
        default: '08:00'
    },
    endTime: {
        type: String,
        default: '24:00'
    },
    step: {
        type: String,
        default: '00:15'
    },
    startModel: {
        type: String,
        default: ''
    },
    endModel: {
        type: String,
        default: ''
    }
});
const emit = defineEmits(['update:startModel', 'update:endModel', 'startChange', 'endChange'])

const startModelValue = computed({
    get() {
        return props.startModel;
    },
    set(val) {
        emit('update:startModel', val);
        emit('startChange', {
            startTime: val,
            endTime: endModelValue.value
        });
    }
});
const endModelValue = computed({
    get() {
        return props.endModel;
    },
    set(val) {
        emit('update:endModel', val);
        emit('endChange', {
            startTime: startModelValue.value,
            endTime: val
        });
    }
});
</script>

<style style scoped lang="scss"></style>