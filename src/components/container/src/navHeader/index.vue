<template>
    <el-header class="header" @click="() => emit('collapseChange', !props.isCollapse)">
        <el-icon-arrow-right v-if="props.isCollapse"></el-icon-arrow-right>
        <el-icon-arrow-left v-else></el-icon-arrow-left>
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

svg {
    width: 1em;
    height: 1em;
}
</style>