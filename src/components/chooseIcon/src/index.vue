<template>
    <div class="">
        <el-button type="primary" @click="handleClick">
            <slot></slot>
        </el-button>
        <el-dialog v-model="propsVisible" :title="props.title" @close="onClose">
            <el-scrollbar height="400px">
                <div class="container">
                    <div class="icon-box" v-for="item in Object.keys(elICons)" @dblclick="() => onItemClick(item)"
                        :key="item">
                        <component :is="`el-icon-${toLine(item)}`" class="icon"></component>
                        <div>{{ item }}</div>
                        <div>el-icon-{{ toLine(item) }}</div>
                    </div>
                </div>
            </el-scrollbar>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, computed } from 'vue';
import * as elICons from '@element-plus/icons-vue';
import { toLine } from '@/utils';
import { useCopy } from '@/components/hooks/useCopy';
const emits = defineEmits(['update:visible']);
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    visible: {
        type: Boolean,
        default: false
    }
});
const propsVisible = computed({
    get() {
        return props.visible;
    },
    set(val) {
        emits('update:visible', val);
    }
});
const handleClick = () => {
    emits('update:visible', true);
};
const onClose = () => {
    emits('update:visible', false);
};
const onItemClick = (item: string) => {
    useCopy(`el-icon-${toLine(item)}`);
    console.log(`<el-icon-${toLine(item)}></el-icon-${toLine(item)}>`);
    emits('update:visible', false);
};
</script>

<style scoped lang="scss">
.dialog {
    max-height: 500px;
    overflow-y: auto;
}

.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 4px;

    svg {
        width: 20px;
        height: 20px;
    }

    .icon-box {
        cursor: pointer;
        border: 1px solid #ccc;
        word-break: break-all;
        padding: 4px 0;
        text-align: center;
    }
}
</style>