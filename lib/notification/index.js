import { defineComponent as p, resolveComponent as l, createBlock as i, openBlock as s, withCtx as a, createVNode as d, resolveDynamicComponent as f, renderSlot as m } from "vue";
const u = /* @__PURE__ */ p({
  __name: "index",
  props: {
    icon: { default: "Bell" },
    value: {},
    max: {},
    isDot: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e;
    return (o, c) => {
      const n = l("el-badge"), r = l("el-popover");
      return s(), i(r, {
        trigger: "click",
        "popper-class": "notification-popover",
        placement: "top",
        width: "auto"
      }, {
        default: a(() => [
          m(o.$slots, "default", {}, void 0, !0)
        ]),
        reference: a(() => [
          d(n, {
            class: "bage",
            value: e.value,
            max: e.max,
            "is-dot": e.isDot
          }, {
            default: a(() => [
              (s(), i(f(`el-icon-${o.toLine(t.icon)}`), { class: "icon" }))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value", "max", "is-dot"])
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
}), v = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [c, n] of t)
    o[c] = n;
  return o;
}, _ = /* @__PURE__ */ v(u, [["__scopeId", "data-v-5f72d638"]]), g = {
  install(e) {
    e.component("ti-notification", _);
  }
};
export {
  g as default
};
