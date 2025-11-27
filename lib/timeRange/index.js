import { defineComponent as c, computed as o, resolveComponent as g, createElementBlock as T, openBlock as f, createVNode as r, mergeProps as u } from "vue";
const M = { class: "ti-time-range-container flex flex-wrap gap-4" }, x = /* @__PURE__ */ c({
  __name: "index",
  props: {
    startTime: {
      type: String,
      default: "08:00"
    },
    endTime: {
      type: String,
      default: "24:00"
    },
    step: {
      type: String,
      default: "00:15"
    },
    startModel: {
      type: String,
      default: ""
    },
    endModel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:startModel", "update:endModel", "startChange", "endChange"],
  setup(e, { emit: p }) {
    const m = e, n = p, a = o({
      get() {
        return m.startModel;
      },
      set(t) {
        n("update:startModel", t), n("startChange", {
          startTime: t,
          endTime: l.value
        });
      }
    }), l = o({
      get() {
        return m.endModel;
      },
      set(t) {
        n("update:endModel", t), n("endChange", {
          startTime: a.value,
          endTime: t
        });
      }
    });
    return (t, d) => {
      const i = g("el-time-select");
      return f(), T("div", M, [
        r(i, u(t.$attrs.startOptions, {
          modelValue: a.value,
          "onUpdate:modelValue": d[0] || (d[0] = (s) => a.value = s),
          class: "w-[240px] mr-[4px]",
          "max-time": l.value || e.endTime,
          start: e.startTime,
          step: e.step,
          end: e.endTime
        }), null, 16, ["modelValue", "max-time", "start", "step", "end"]),
        r(i, u(t.$attrs.endOptions, {
          modelValue: l.value,
          "onUpdate:modelValue": d[1] || (d[1] = (s) => l.value = s),
          class: "w-[240px]",
          "min-time": a.value || e.startTime,
          start: e.startTime,
          step: e.step,
          end: e.endTime
        }), null, 16, ["modelValue", "min-time", "start", "step", "end"])
      ]);
    };
  }
}), v = {
  install(e) {
    e.component("ti-time-range", x);
  }
};
export {
  v as default
};
