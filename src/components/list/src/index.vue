<template>
    <div class="list-tabs__item">
        <el-tabs v-model="adtivcedName" class="list-container w-full">
            <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title" :name="item.title">
                <el-scrollbar max-height="200px">
                    <div class="container w-[350px] flex items-center mx-[8px] my-[4px] cursor-pointer"
                        v-for="(value, index1) in item.content" @click="clickItem(value, index1)" :key="value.time">
                        <div class="avatar flex-1 flex items-center">
                            <el-avatar size="small"
                                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                        </div>
                        <div class="content">
                            <div class="flex justify-between items-center" v-if="value.title">
                                <p>{{ value.title }}</p>
                                <el-tag v-if="value.tag" size="mini">{{ value.tag }}</el-tag>
                            </div>
                            <p class="time" v-if="value.time">{{ value.time }}</p>
                            <p class="time" v-if="value.description">{{ value.description }}</p>
                        </div>

                    </div>
                </el-scrollbar>
            </el-tab-pane>
        </el-tabs>
        <div v-if="actions && actions.length > 0"
            class="flex justify-between h-[36px] items-center border-t-[1px] border-[#ebeef5]">
            <div v-for="(item, index) in actions" :key="index" @click="clickAction(item)"
                class="h-[30px] flex items-center">
                <div class="mr-[4px]  cursor-pointer">
                    <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`" class="ml-[8px]">
                    </component>
                </div>
                <div class="text  cursor-pointer">{{ item.text }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, withDefaults, defineProps, PropType, defineEmits, computed } from 'vue';
import { listOptions, actionOptions } from './type';
const props = defineProps({
    list: {
        type: Array as PropType<listOptions[]>,
        default: () => [],
        required: true
    },
    isDot: {
        type: Boolean,
        default: false
    },
    actions: {
        type: Array as PropType<actionOptions[]>,
        default: () => []
    },
    activeName: {
        type: String,
        default: ''
    }
});
const emits = defineEmits(['update:activeName', 'itemClick']);
const adtivcedName = computed({
    get() {
        return props.activeName;
    }, set(value) {
        emits('update:activeName', value);
    }
});
const clickItem = (item, index: number) => {
    emits('itemClick', { item, index });
};
const clickAction = (item) => {
    item.activeFn && item.activeFn(item);
};
</script>

<style scoped lang="scss">
.list-container {

    /* 根据实际需要调整 */
    .container {
        &:hover {
            background-color: #e6f6ff;
        }

        .container-item {
            display: flex;
            align-items: center;
        }

        .avatar {
            flex: 1;
        }

        .content {
            flex: 7;

            .time {
                font-size: 12px;
                color: #999;
            }
        }
    }
}

.w-400 {
    width: 400px;
}

.tab-item {
    padding: 8px 0;
}

.demo-tabs {
    width: 100%;
}

.tab-item p {
    margin: 5px 0;
    word-break: break-all;
    /* 长文本自动换行 */
}
</style>