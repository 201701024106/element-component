<template>
    <el-container>
        <el-container>
            <nav-side :isCollapse="isCollapse"></nav-side>
            <el-main>
                <nav-header :isCollapse="isCollapse" @collapseChange="(e) => isCollapse = e"></nav-header>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import NavSide from './navSide/index.vue';
import NavHeader from './navHeader/index.vue';
import { ref, reactive } from 'vue';
const isCollapse = ref(false);
</script>

<style scoped lang="scss"></style>