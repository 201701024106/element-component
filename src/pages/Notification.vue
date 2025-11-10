<template>
    <div class="">
        <div>
            <ti-notification :value="888" :max="30">
                <template #default>
                    <ti-list :list="list" :actions="actions" activeName="通知" @itemClick="clickItem"></ti-list>
                </template>
            </ti-notification>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const list = reactive([
    {
        title: '通知', content: [
            { title: 'title1', time: '2025-05-05 11:11:11', tag: 'success', icon: 'add-location' },
            { title: 'title1', time: '2025-05-05 11:11:11' },
            { title: 'title1', time: '2025-05-05 11:11:11' },
            { title: 'title1', time: '2025-05-05 11:11:11' },
            { title: 'title1', time: '2025-05-05 11:11:11' },
            { title: 'title1', time: '2025-05-05 11:11:11' },
            { title: 'title1', time: '2025-05-05 11:11:11' },
        ]
    },
    {
        title: '关注', content: [
            { title: 'title2', time: '2025-05-05 11:11:11' },
            { title: 'title2', time: '2025-05-05 11:11:11' },
            { title: 'title2', time: '2025-05-05 11:11:11' },
            { title: 'title2', time: '2025-05-05 11:11:11' },
        ]
    },
    {
        title: '代办', content: [
            { title: 'title3', time: '2025-05-05 11:11:11' },
            { title: 'title3', time: '2025-05-05 11:11:11' },
            { title: 'title3', time: '2025-05-05 11:11:11' },
            { title: 'title3', time: '2025-05-05 11:11:11' },
        ]
    },
]);
const actions = reactive([
    {
        text: '清空代办', icon: 'check', activeFn: (item) => {
            console.log(item);
        }
    },
    {
        text: '查看更多', icon: 'more-filled', activeFn: (item) => {
            console.log(item);
        }
    },
]);

const clickItem = (item) => {
    console.log(item);
};
</script>

<style scoped lang="scss"></style>