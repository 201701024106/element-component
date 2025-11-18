<template>
    <div class="ti-city-select flex align-center">
        <el-popover trigger="click" v-model:visible="visible" width="430" popper-class="notification-popover"
            placement="bottom-start" content="this is content, this is content, this is content">
            <template #reference>
                <div class="ti-city-select-label width-[fit-content] flex items-center cursor-pointer">
                    <span class="ti-city-select-text">{{ (modelValue && modelValue.name) ?? text }}</span>
                    <span class="ml-[4px] ti-city-select-icon relative top-[2px]"
                        :class="{ 'ti-city-select-icon-rotate': visible }">
                        <el-icon-arrow-up></el-icon-arrow-up>
                    </span>
                </div>
            </template>
            <template #default>
                <div class="ti-city-select-content p-[6px]">
                    <el-row class="items-center">
                        <el-col :span="8">
                            <el-radio-group v-model="radioValue" size="small">
                                <el-radio-button :value="0" label="按城市" />
                                <el-radio-button :value="1" label="按省份" />
                            </el-radio-group>
                        </el-col>
                        <el-col :offset="1" :span="15">
                            <el-select v-model="selectValue" placeholder="请搜索城市" filterable size="small"
                                style="width: 240px" :filter-method="filterMethod"
                                @change="($event) => selectChange($event)">
                                <el-option v-for="item in options" :key="item.pinyin" :label="item.name"
                                    :value="item.code" />
                            </el-select>
                        </el-col>
                    </el-row>
                    <div class="index my-[4px] grid grid-cols-16 gap-[4px]">
                        <div class="index-item-title border border-[#eee] text-center cursor-pointer"
                            v-for="(item, index) in citys" :key="index" @click="chatClick(item)">
                            {{ item.initial }}
                        </div>
                    </div>
                    <el-scrollbar height="300">
                        <div class="city" v-if="radioValue === 0">
                            <div class="city-item" v-for="(groupItem, index) in citys" :key="groupItem.initial">
                                <el-row class="mb-[4px]" :id="groupItem.initial">
                                    <el-col :span="2">
                                        <div class="province-item-title cursor-pointer">{{ groupItem.initial }}</div>
                                    </el-col>
                                    <el-col :span="22">
                                        <div class="province-item-content grid grid-cols-6">
                                            <span class="province-item-content-item cursor-pointer" :class="{
                                                'bg-[#1746ff]': item.name === modelValue.name,
                                                'text-[#ffffff]': item.name === modelValue.name,
                                            }" @click="clickCity(item)" v-for="item in groupItem.list"
                                                :key="item.code">
                                                {{ item.name }}
                                            </span>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                        <div class="province" v-else>
                            <div class="province-item" v-for="(groupItem) in provinces" :key="groupItem.initial">
                                <el-row class="mb-[4px]">
                                    <el-col :span="1" :id="groupItem.initial">
                                        <div class="province-item-title cursor-pointer">{{ groupItem.initial }}</div>
                                    </el-col>
                                    <el-col :span="23">
                                        <el-row v-for="(item) in groupItem.list" :key="item.code">
                                            <el-col :span="8">
                                                <div class="province-item-content-item-name text-gray-50">{{ item.name
                                                }}</div>
                                            </el-col>
                                            <el-col :span="16">
                                                <div
                                                    class="province-item-content-item cursor-pointer  grid grid-cols-3">
                                                    <div class="province-item-content-item-childrens" :class="{
                                                        'bg-[#1476ff]': city.name === modelValue.name,
                                                        'text-[#ffffff]': city.name === modelValue.name,
                                                    }" v-for="(city) in item.children" @click="clickCity(city)"
                                                        :key="city.code">
                                                        {{ city.name }}
                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>

                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-scrollbar>
                </div>
            </template>
        </el-popover>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, defineProps, defineEmits, watch, onMounted } from 'vue';
import city from "../../lib/citys.json";
import province from "../../lib/province.json";
import { selectItem } from "./type"
const props = defineProps({
    modelValue: {
        type: Object,
        default: {}
    },
    text: {
        type: String,
        default: '请选择城市'
    },
})
const emit = defineEmits(['update:modelValue'])
const citys = reactive(city);
const provinces = reactive(province);
const result = reactive<selectItem>({});
const visible = ref<boolean>(false);
const radioValue = ref<number>(0);
const selectValue = ref<string>('');
const iconTagName = computed(() => {
    return visible.value ? `el-icon-arrow-up` : `el-icon-arrow-down`
});
const hidePopover = () => {
    visible.value = false;
}
watch(() => props.modelValue, (newValue) => {
    if (newValue) {
        console.log(newValue);

        selectValue.value = newValue.code
    } else {
        selectValue.value = ''
    }
})
const clickCity = (item: selectItem) => {
    visible.value = false;
    Object.assign(result, item)
    emit('update:modelValue', item)
    hidePopover()
}
const clickProvince = (item: selectItem) => {
    visible.value = false;
    Object.assign(result, item)
    emit('update:modelValue', item)
    hidePopover()
}
const chatClick = (item: any) => {
    const el = document.getElementById(item.initial);
    el?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
    });
}
const options = ref([
]);
const allCitys = ref([]);
onMounted(() => {
    const cityOptions = citys.reduce((acc, cur) => {
        acc.push(...cur.list);
        return acc;
    }, []);
    // Object.assign(options, cityOptions);
    allCitys.value = cityOptions;
    options.value = cityOptions;
})
const filterMethod = (value: string) => {
    const cityOptions = citys.reduce((acc, cur) => {
        acc.push(...cur.list);
        return acc;
    }, []);
    if (value === '') {
        options.value = cityOptions;
    } else {
        const result = cityOptions.filter((item) => item.name.includes(value) || item.pinyin.includes(value));
        options.value = result;
    }
};
const selectChange = (value: string) => {
    const city = allCitys.value.find((item) => item.code === value);
    emit('update:modelValue', city)
};
</script>

<style scoped lang="scss">
svg {
    width: 1em;
    height: 1em;
}

.ti-city-select-icon {
    transition: all 0.25s linear;
}

.ti-city-select-icon-rotate {
    transform: rotate(180deg);
}
</style>