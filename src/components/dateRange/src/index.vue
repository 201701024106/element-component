<template>
    <div class="ti-date-range-container">
        <!-- 日期范围选择 -->
        <el-date-picker :disabled="disabled" v-bind="$attrs.startOptions" v-model="startModelValue"
            class="w-[240px] mr-[4px]" :disabled-date="startDisabledDateFn" />
        <el-date-picker :disabled="disabled" v-bind="$attrs.endOptions" v-model="endModelValue" class="w-[240px]"
            :disabled-date="effectiveEndDisabledDateFn" />
    </div>
</template>

<script setup lang="ts">
import { dayjs } from 'element-plus';
import { computed, defineEmits, defineProps, watch } from 'vue';

const props = defineProps({
    startModel: {
        type: String,
        default: ''
    },
    endModel: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    startDisabledDateFn: {
        type: Function,
        default: (date) => date.getTime() < Date.now()
    },
    endDisabledDateFn: {
        type: Function,
        default: null
    }
})
const emit = defineEmits(['update:startModel', 'update:endModel', 'startChange', 'endChange'])
const startModelValue = computed({
    get() {
        return props.startModel;
    },
    set(val) {
        emit('update:startModel', val);
        if (val) {
            const isLater = val > props.endModel;
            if (isLater) {
                emit('update:endModel', dayjs(val));
            }
        } else {
            emit('update:endModel', '');
        }
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
// 创建包装函数来处理默认逻辑
const effectiveEndDisabledDateFn = computed(() => {
    if (props.endDisabledDateFn) {
        return props.endDisabledDateFn;
    }
    return (date) => {
        if (!props.startModel) {
            return props.startDisabledDateFn(date);
        }
        const startTime = new Date(props.startModel).getTime();
        return date.getTime() < (isNaN(startTime) ? Date.now() : startTime);
    };
});
</script>

<style scoped lang="scss"></style>