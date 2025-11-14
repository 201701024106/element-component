<template>
    <div class="w-[200px]">
        <h5>1、一级二级菜单</h5>
        <ti-leftmenu :data="data1" background-color="#f0f0f0" defaultActive="2"></ti-leftmenu>
        <h5>2、key</h5>
        <ti-leftmenu :data="data2" labelKey="a" indexKey="b" iconKey="c" background-color="#f0f0f0"
            defaultActive="2"></ti-leftmenu>
        <h5>2、无限层级菜单</h5>
        <ti-infinite-leftmenu :data="data3" background-color="#f5f5f5" defaultActive="1-1-1-1"
            active-text-color="pink"></ti-infinite-leftmenu>
        <h5>2、无限层级菜单 + key</h5>
        <ti-infinite-leftmenu :data="data4" labelKey="a" indexKey="b" iconKey="c" background-color="#f5f5f5"
            defaultActive="1-1-1-1" active-text-color="pink"></ti-infinite-leftmenu>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const data1 = reactive([
    {
        name: '导航1', path: '/', index: '1', icon: 'document',
        children: [
            { name: '导航1-1', path: '/1-1', index: '1-1', icon: 'document', },
            { name: '导航1-2', path: '/1-2', index: '1-2', icon: 'document', },
            { name: '导航1-3', path: '/1-3', index: '1-3', icon: 'document', },
            { name: '导航1-4', path: '/1-4', index: '1-4', icon: 'document', },
        ]
    },
    { name: '导航2', path: '/', index: '2', icon: 'document', },
    { name: '导航3', path: '/', index: '3', icon: 'document', },
    { name: '导航4', path: '/', index: '4', icon: 'document', },
])
const data2 = reactive([
    {
        a: '导航1', path: '/', b: '1', c: 'document',
        children: [
            { a: '导航1-1', path: '/1-1', b: '1-1', c: 'document', },
            { a: '导航1-2', path: '/1-2', b: '1-2', c: 'document', },
            { a: '导航1-3', path: '/1-3', b: '1-3', c: 'document', },
            { a: '导航1-4', path: '/1-4', b: '1-4', c: 'document', },
        ]
    },
    { a: '导航2', path: '/', b: '2', c: 'document', },
    { a: '导航3', path: '/', b: '3', c: 'document', },
    { a: '导航4', path: '/', b: '4', c: 'document', },
])
const data3 = reactive([
    {
        name: '导航1', path: '/', index: '1', icon: 'Document',
        children: [
            {
                name: '导航1-1', path: '/1-1', index: '1-1', icon: 'Document',
                children: [
                    {
                        name: '导航1-1-1', path: '/1-1-1', index: '1-1-1', icon: 'Document', children: [
                            { name: '导航1-1-1-1', path: '/1-1-1-1', index: '1-1-1-1', icon: 'Document', },
                        ]
                    },
                ]
            },
            { name: '导航1-2', path: '/1-2', index: '1-2', icon: 'Document', },
            { name: '导航1-3', path: '/1-3', index: '1-3', icon: 'Document', },
            { name: '导航1-4', path: '/1-4', index: '1-4', icon: 'Document', },
        ]
    },
    { name: '导航2', path: '/', index: '2', icon: 'Document', },
    { name: '导航3', path: '/', index: '3', icon: 'Document', },
    { name: '导航4', path: '/', index: '4', icon: 'Document', },
])
const data4 = reactive([
    {
        a: '导航1', path: '/', b: '1', c: 'Document',
        children: [
            {
                a: '导航1-1', path: '/1-1', b: '1-1', c: 'Document',
                children: [
                    {
                        a: '导航1-1-1', path: '/1-1-1', b: '1-1-1', c: 'Document', children: [
                            { a: '导航1-1-1-1', path: '/1-1-1-1', b: '1-1-1-1', c: 'Document', },
                        ]
                    },
                ]
            },
            { a: '导航1-2', path: '/1-2', b: '1-2', c: 'Document', },
            { a: '导航1-3', path: '/1-3', b: '1-3', c: 'Document', },
            { a: '导航1-4', path: '/1-4', b: '1-4', c: 'Document', },
        ]
    },
    { a: '导航2', path: '/', b: '2', c: 'Document', },
    { a: '导航3', path: '/', b: '3', c: 'Document', },
    { a: '导航4', path: '/', index: '4', c: 'Document', },
])
</script>

<style scoped lang="scss"></style>