<template>
    <div class="">
        <!-- 默认禁用startModel和endModel的逻辑 -->
        <h5 class="my-[4px]">1、默认使用</h5>
        <ti-date-range v-model:startModel="startModel" v-model:endModel="endModel"></ti-date-range>
        <h5 class="my-[4px]">2、自定义禁用日期</h5>
        <ti-date-range v-model:startModel="startModel1" v-model:endModel="endModel1"
            :start-disabled-date-fn="customStartDisabledFn" :end-disabled-date-fn="customEndDisabledFn"></ti-date-range>
        <h5 class="my-[4px]">3、禁用开始时间</h5>
        <ti-date-range v-model:startModel="startModel" v-model:endModel="endModel"
            :startOptions="startOptions"></ti-date-range>
        <h5 class="my-[4px]">4、整体禁用</h5>
        <ti-date-range v-model:startModel="startModel" v-model:endModel="endModel" :startOptions="startOptions"
            :disabled="true"></ti-date-range>
        <h5 class="my-[4px]">5、时间改变</h5>
        <ti-date-range v-model:startModel="startModel2" v-model:endModel="endModel2" @startChange="onStartChange"
            @endChange="onEndChange"></ti-date-range>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const startModel = ref(new Date());
const endModel = ref(new Date());
const startModel1 = ref(new Date());
const endModel1 = ref(new Date());
const startModel2 = ref(new Date());
const endModel2 = ref(new Date());
const customStartDisabledFn = (date) => {
    // 自定义开始日期禁用逻辑
    // 例如：禁用今天之前的日期
    return date.getTime() < Date.now();
};

const customEndDisabledFn = (date) => {
    // 自定义结束日期禁用逻辑
    // 例如：禁用今天之后的日期
    return date.getTime() > Date.now();
};
const startOptions = {
    disabled: true
}
const onStartChange = (date) => {
    console.log('开始时间改变', date);
}
const onEndChange = (date) => {
    console.log('结束时间改变', date);
}
</script>

<style scoped lang="scss"></style>