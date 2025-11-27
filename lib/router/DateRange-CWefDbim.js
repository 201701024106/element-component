import { defineComponent as w, ref as n, resolveComponent as f, createElementBlock as x, openBlock as b, createCommentVNode as y, createElementVNode as a, createVNode as r } from "vue";
const C = { class: "" }, V = /* @__PURE__ */ w({
  __name: "DateRange",
  setup(E) {
    const d = n(/* @__PURE__ */ new Date()), l = n(/* @__PURE__ */ new Date()), M = n(/* @__PURE__ */ new Date()), u = n(/* @__PURE__ */ new Date()), p = n(/* @__PURE__ */ new Date()), v = n(/* @__PURE__ */ new Date()), i = (o) => o.getTime() < Date.now(), D = (o) => o.getTime() > Date.now(), m = {
      disabled: !0
    }, U = (o) => {
      console.log("开始时间改变", o);
    }, g = (o) => {
      console.log("结束时间改变", o);
    };
    return (o, e) => {
      const s = f("ti-date-range");
      return b(), x("div", C, [
        y(" 默认禁用startModel和endModel的逻辑 "),
        e[10] || (e[10] = a(
          "h5",
          { class: "my-[4px]" },
          "1、默认使用",
          -1
          /* CACHED */
        )),
        r(s, {
          startModel: d.value,
          "onUpdate:startModel": e[0] || (e[0] = (t) => d.value = t),
          endModel: l.value,
          "onUpdate:endModel": e[1] || (e[1] = (t) => l.value = t)
        }, null, 8, ["startModel", "endModel"]),
        e[11] || (e[11] = a(
          "h5",
          { class: "my-[4px]" },
          "2、自定义禁用日期",
          -1
          /* CACHED */
        )),
        r(s, {
          startModel: M.value,
          "onUpdate:startModel": e[2] || (e[2] = (t) => M.value = t),
          endModel: u.value,
          "onUpdate:endModel": e[3] || (e[3] = (t) => u.value = t),
          "start-disabled-date-fn": i,
          "end-disabled-date-fn": D
        }, null, 8, ["startModel", "endModel"]),
        e[12] || (e[12] = a(
          "h5",
          { class: "my-[4px]" },
          "3、禁用开始时间",
          -1
          /* CACHED */
        )),
        r(s, {
          startModel: d.value,
          "onUpdate:startModel": e[4] || (e[4] = (t) => d.value = t),
          endModel: l.value,
          "onUpdate:endModel": e[5] || (e[5] = (t) => l.value = t),
          startOptions: m
        }, null, 8, ["startModel", "endModel"]),
        e[13] || (e[13] = a(
          "h5",
          { class: "my-[4px]" },
          "4、整体禁用",
          -1
          /* CACHED */
        )),
        r(s, {
          startModel: d.value,
          "onUpdate:startModel": e[6] || (e[6] = (t) => d.value = t),
          endModel: l.value,
          "onUpdate:endModel": e[7] || (e[7] = (t) => l.value = t),
          startOptions: m,
          disabled: !0
        }, null, 8, ["startModel", "endModel"]),
        e[14] || (e[14] = a(
          "h5",
          { class: "my-[4px]" },
          "5、时间改变",
          -1
          /* CACHED */
        )),
        r(s, {
          startModel: p.value,
          "onUpdate:startModel": e[8] || (e[8] = (t) => p.value = t),
          endModel: v.value,
          "onUpdate:endModel": e[9] || (e[9] = (t) => v.value = t),
          onStartChange: U,
          onEndChange: g
        }, null, 8, ["startModel", "endModel"])
      ]);
    };
  }
});
export {
  V as default
};
