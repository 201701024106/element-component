<template>
    <div class="">
        <ti-time-range v-model:startModel="startModel" v-model:endModel="endModel" :startOptions="startOptions"
            :endOptions="endOptions" @startChange="onStartChange" @endChange="onEndChange"></ti-time-range>
    </div>
</template>

<script setup lang="ts">
import { on } from 'events';
import { ref, reactive } from 'vue';
const startModel = ref('08:00');
const endModel = ref('09:00');
const startOptions = reactive({
    placeholder: '开始时间',
})
const endOptions = reactive({
    placeholder: '结束时间',
})
const onStartChange = (value) => {
    console.log("开始时间变化", value);
}
const onEndChange = (value) => {
    console.log("结束时间变化", value);
}
</script>

<style scoped lang="scss"></style>