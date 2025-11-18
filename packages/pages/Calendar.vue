<template>
    <div class="">
        <ti-calendar v-model:events="event" :displayEventEnd="true" @dateClick="dateClick" :eventContent="eventContent"
            @eventClick="eventClick"></ti-calendar>
    </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid';
import { EventClickArg } from '@fullcalendar/core';
import { DateClickArg } from '@fullcalendar/interaction';
import { ref, reactive } from 'vue';

const event = reactive([
    {
        id: nanoid(),
        title: 'codeing',
        start: '2025-11-01',
        end: '2025-11-02',
        editable: true
    },
    {
        id: nanoid(),
        title: 'shoping',
        start: '2025-11-03',
        end: '2025-11-04',
        editable: true
    }
]);
const dateClick = (info: DateClickArg) => {
    const newEvent = {
        id: nanoid(),
        start: info.dateStr + ' 12:00',
        end: info.dateStr + ' 18:00',
        title: '新增事件',
        editable: true
    };
    const events = event;
    events.push(newEvent);
    Object.assign(event, events);
};
const eventClick = (info: any) => {
    // 查找要删除的事件索引
    const index = event.findIndex(item => item.id === info.event.id);

    if (index !== -1) {
        // 使用 splice 删除指定索引的元素
        event.splice(index, 1);
    } else {
        console.log('Event not found');
    }
};
const eventContent = (arg) => {
    const timeTextArr = arg.timeText.split('-');
    return {
        html: `
                    <div>
                        <div>标题：${arg.event.title}</div>
                        <div>开始时间：${timeTextArr[0]}</div>
                        <div>结束时间：${timeTextArr[1]}</div>
                    </div>
                    `
    }
}
</script>

<style scoped lang="scss"></style>