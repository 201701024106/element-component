<template>
    <div class="trend">
        <div class="text" :style="{ color: textColor }">
            <slot v-if="slots.default"></slot>
            <span v-else>{{ props.text }}</span>
        </div>
        <div class="icon">
            <component :is="iconTagName" :style="{ color: iconColor }">
            </component>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, withDefaults, useSlots, computed } from 'vue';
type TrendType = 'up' | 'down' | 'flat';
const props = withDefaults(defineProps<{
    type: TrendType,
    text: string,
    upIconColor: string,
    downIconColor: string,
    upTextColor: string,
    downTextColor: string,
    reverseColor: boolean,
    upIcon: string,
    downIcon: string,
}>(), {
    type: 'up',
    text: '',
    upIcon: 'arrow-up',
    downIcon: 'arrow-down',
    upIconColor: '#67c23a',
    downIconColor: '#f56c6c',
    reverseColor: false,
    upTextColor: '#67c23a',
    downTextColor: '#f56c6c',
});
const slots = useSlots();

const textColor = computed(() => {
    if (props.type === 'up') {
        return props.reverseColor ? props.downTextColor : props.upTextColor;
    } else {
        return props.reverseColor ? props.upTextColor : props.downTextColor;
    }
});
const iconColor = computed(() => {
    if (props.type === 'up') {
        return props.reverseColor ? props.downIconColor : props.upIconColor;
    } else {
        return props.reverseColor ? props.upIconColor : props.downIconColor;
    }
});
const iconTagName = computed(() => {
    return props.type === 'up' ? `el-icon-${props.upIcon}` : `el-icon-${props.downIcon}`
});
</script>

<style scoped lang="scss">
.trend {
    display: flex;
    align-items: center;

    .text {
        font-size: 12px;
        color: #333;
    }

    .icon {
        margin-left: 4px;
        color: #333;

        svg {
            width: 0.8em;
            height: 0.8em;
        }
    }

}
</style>