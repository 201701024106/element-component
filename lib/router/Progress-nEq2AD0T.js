import { defineComponent as r, ref as s, resolveComponent as n, createElementBlock as c, openBlock as a, createVNode as t, createElementVNode as p } from "vue";
import { _ } from "./index-CX_zC-uL.js";
const i = { class: "" }, l = { class: "demo-progress" }, m = /* @__PURE__ */ r({
  __name: "Progress",
  setup(d) {
    const e = s(60);
    return (g, u) => {
      const o = n("ti-progress");
      return a(), c("div", i, [
        t(o, {
          percentage: e.value,
          isAnimation: ""
        }, null, 8, ["percentage"]),
        p("div", l, [
          t(o, {
            percentage: e.value,
            type: "circle",
            isAnimation: ""
          }, null, 8, ["percentage"])
        ])
      ]);
    };
  }
}), h = /* @__PURE__ */ _(m, [["__scopeId", "data-v-d59d055c"]]);
export {
  h as default
};
