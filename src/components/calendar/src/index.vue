<template>
    <div>
        <div id="calendar">
        </div>
    </div>
</template>

<script setup lang="ts">
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventClickArg } from '@fullcalendar/core';
import { DateClickArg } from '@fullcalendar/interaction';
import { ref, defineProps, onMounted, nextTick, PropType, defineEmits } from 'vue';
import { EventItem } from './types';
import { watch } from 'vue';

const props = defineProps({
    local: {
        type: String,
        default: 'zh-cn'
    },
    initialView: {
        type: String,
        default: 'dayGridMonth'
    },
    buttonText: {
        type: Object,
        default: () => {
            return {
                today: '今天',
                month: '月',
                week: '周',
                day: '日',
                preYear: '上一年',
                nextYear: '下一年',
                perv: '下一月',
                next: '下一月'
            }
        }
    },
    headerToolbar: {
        type: Object,
        default: () => {
            return {
                start: 'title',
                center: '',
                end: 'prev today next',
            }
        }
    },
    footerToolbar: {
        type: Object,
        default: () => { }
    },
    // 事件源
    events: {
        type: Array as PropType<EventItem[]>,
        default: () => []
    },
    displayEventEnd: {
        type: Boolean,
        default: false
    },
    eventContent: {
        type: Function,
        default: () => { }
    },
});
const emits = defineEmits(['dateClick', 'eventClick', 'update:events']);
const calendar = ref<Calendar>(null);

/**
 * 初始化日历
 
 */
const renderCalendar = () => {
    let el = document.getElementById('calendar');
    if (el) {
        // 如果日历已存在，先销毁
        if (calendar.value) {
            calendar.value.destroy();
        }
        calendar.value = new Calendar(el, {
            plugins: [
                dayGridPlugin,
                interactionPlugin
            ],
            initialView: props.initialView,
            locale: props.local,
            headerToolbar: props.headerToolbar,
            footerToolbar: props.footerToolbar,
            buttonText: props.buttonText,
            events: props.events,
            /* eventSources: [
                {
                    events: function (e, successCallback, failureCallback) {
                        if (props.events.length) {
                            successCallback(props.events);
                        } else {
                            successCallback([]);
                        }
                    }
                }
            ], */
            // 点击日历上的某一天
            dateClick: (info: DateClickArg) => {
                emits('dateClick', info);
            },
            eventClick: (info: EventClickArg) => {
                emits('eventClick', info);
                info.jsEvent.stopPropagation();
            },
            // 显示结束事件
            displayEventEnd: props.displayEventEnd,
            eventContent: props.eventContent
        })
        calendar.value.render();
    }
};

onMounted(() => {
    renderCalendar();
});
watch(() => props.events, () => {
    renderCalendar();
}, { deep: true });
</script>

<style scoped lang="scss"></style>