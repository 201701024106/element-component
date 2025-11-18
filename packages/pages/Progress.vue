<template>
    <div class="">
        <ti-progress :percentage="percentage" isAnimation></ti-progress>
        <div class="demo-progress">
            <ti-progress :percentage="percentage" type="circle" isAnimation></ti-progress>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const percentage = ref(60);
</script>

<style scoped lang="scss">
.demo-progress .el-progress--line {
    margin-bottom: 15px;
    max-width: 600px;
}

.demo-progress .el-progress--circle {
    margin-right: 15px;
}

/* 提高特异性的选择器 */
.demo-progress .el-progress--circle :deep(.el-progress-circle svg) {
    width: 126px !important;
    height: 126px !important;
}
</style>