<template>
    <div class="">
        <el-progress v-bind="$attrs" :percentage="addNumber" />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, onMounted } from 'vue';
const props = defineProps({
    // 当前进度值
    percentage: {
        type: Number,
        default: 0
    },
    // 是否开启动画
    isAnimation: {
        type: Boolean,
        default: false
    },
    // 动画时间 (ms 毫秒)
    animationTime: {
        type: Number,
        default: 1000
    }
});
const addNumber = ref(0);
onMounted(() => {
    if (props.isAnimation) {
        // 加载完成时间
        const duration = Math.ceil(props.animationTime / props.percentage);
        addNumber.value = 0;
        const timer = setInterval(() => {
            addNumber.value += 1;
            if (addNumber.value >= props.percentage) {
                addNumber.value = props.percentage;
                clearInterval(timer);
            }
        }, duration);
    }
})
</script>

<style scoped lang="scss"></style>