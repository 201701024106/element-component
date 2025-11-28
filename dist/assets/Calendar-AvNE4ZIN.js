import{d as c,g as v,r as p,c as u,o as m,a as _}from"./index-BYxCtZTd.js";const C="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let s=(d=21)=>{let t="",o=crypto.getRandomValues(new Uint8Array(d|=0));for(;d--;)t+=C[o[d]&63];return t};const b={class:""},k=c({__name:"Calendar",setup(d){const t=v([{id:s(),title:"codeing",start:"2025-11-01",end:"2025-11-02",editable:!0},{id:s(),title:"shoping",start:"2025-11-03",end:"2025-11-04",editable:!0}]),o=n=>{const e={id:s(),start:n.dateStr+" 12:00",end:n.dateStr+" 18:00",title:"新增事件",editable:!0},i=t;i.push(e),Object.assign(t,i)},a=n=>{const e=t.findIndex(i=>i.id===n.event.id);e!==-1?t.splice(e,1):console.log("Event not found")},l=n=>{const e=n.timeText.split("-");return{html:`
                    <div>
                        <div>标题：${n.event.title}</div>
                        <div>开始时间：${e[0]}</div>
                        <div>结束时间：${e[1]}</div>
                    </div>
                    `}};return(n,e)=>{const i=p("ti-calendar");return m(),u("div",b,[_(i,{events:t,"onUpdate:events":e[0]||(e[0]=r=>t=r),displayEventEnd:!0,onDateClick:o,eventContent:l,onEventClick:a},null,8,["events"])])}}});export{k as default};
