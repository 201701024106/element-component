<template>
    <div class="">
        <ti-city-select v-model="model" @update:modelValue="onCityChange"></ti-city-select>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const model = ref({});
const onCityChange = (value) => {
    console.log(value);
};
</script>

<style scoped lang="scss"></style>