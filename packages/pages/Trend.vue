<template>
    <div>
        <h5>1、默认使用</h5>
        <div class="flex">
            <div class="mr-10">
                <ti-trend text="营业额"></ti-trend>
            </div>
            <div class="mr-10">
                <ti-trend type="down" downIconColor="yellow" text="销售额"></ti-trend>
            </div>
        </div>
        <div class="flex">
            <div class="mr-10">
                <ti-trend text="营业额"></ti-trend>
            </div>
            <div class="mr-10">
                <ti-trend type="down" text="销售额"></ti-trend>
            </div>
        </div>
        <h5>2、使用插槽</h5>
        <div class="flex">
            <div class="mr-10">
                <ti-trend>文字</ti-trend>
            </div>
            <div class="mr-10">
                <ti-trend type="down" text="销售额"></ti-trend>
            </div>
        </div>
        <h5>3、颜色反转</h5>
        <ti-trend type="down" reverseColor text="销售额"></ti-trend>
        <h5>4、文字颜色</h5>
        <ti-trend type="down" downTextColor="black" text="销售额"></ti-trend>
        <h5>4、自定义图标</h5>
        <div class="flex">
            <div class="mr-10">
                <ti-trend>文字</ti-trend>
            </div>
            <div class="mr-10">
                <ti-trend type="down" text="销售额"></ti-trend>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
</script>

<style scoped lang="scss">
.flex {
    display: flex;
}

.mr-10 {
    margin-right: 10px;
}
</style>