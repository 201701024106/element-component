<template>
    <div class="">
        <!-- 图标选择 -->
        <ti-choose-icon :title="title" v-model:visible="visible">
            选择图标
        </ti-choose-icon>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import tiChooseIcon from '@/components/chooseIcon/src/index.vue';
const title = ref('图标选择');
const visible = ref(false);
</script>

<style scoped lang="scss"></style>