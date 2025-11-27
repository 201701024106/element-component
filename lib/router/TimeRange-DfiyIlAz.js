import { defineComponent as m, ref as l, reactive as a, resolveComponent as _, createElementBlock as u, openBlock as M, createVNode as g } from "vue";
const v = { class: "" }, O = /* @__PURE__ */ m({
  __name: "TimeRange",
  setup(f) {
    const n = l("08:00"), s = l("09:00"), d = a({
      placeholder: "开始时间"
    }), r = a({
      placeholder: "结束时间"
    }), p = (e) => {
      console.log("开始时间变化", e);
    }, c = (e) => {
      console.log("结束时间变化", e);
    };
    return (e, o) => {
      const i = _("ti-time-range");
      return M(), u("div", v, [
        g(i, {
          startModel: n.value,
          "onUpdate:startModel": o[0] || (o[0] = (t) => n.value = t),
          endModel: s.value,
          "onUpdate:endModel": o[1] || (o[1] = (t) => s.value = t),
          startOptions: d,
          endOptions: r,
          onStartChange: p,
          onEndChange: c
        }, null, 8, ["startModel", "endModel", "startOptions", "endOptions"])
      ]);
    };
  }
});
export {
  O as default
};
