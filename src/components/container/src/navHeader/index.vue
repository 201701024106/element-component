<template>
    <el-header class="header" @click="() => emit('collapseChange', !props.isCollapse)">
        <el-icon--rrow-ight v-if="props.isCollapse"></el-icon--rrow-ight>
        <el-icon--rrow-eft v-else></el-icon--rrow-eft>
    </el-header>
</template>

<script setup lang="ts">
import { ref, reactive, defineEmits, defineProps } from 'vue';
const props = defineProps({
    isCollapse: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits(['collapseChange']);

</script>

<style scoped lang="scss">
.header {
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
</style>