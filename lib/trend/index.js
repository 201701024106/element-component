import { defineComponent as i, useSlots as f, computed as l, createElementBlock as s, openBlock as c, createElementVNode as a, normalizeStyle as u, renderSlot as C, unref as _, toDisplayString as v, createBlock as x, resolveDynamicComponent as y } from "vue";
const m = { class: "trend" }, w = { key: 1 }, I = { class: "icon" }, T = /* @__PURE__ */ i({
  __name: "index",
  props: {
    type: { default: "up" },
    text: { default: "" },
    upIconColor: { default: "#67c23a" },
    downIconColor: { default: "#f56c6c" },
    upTextColor: { default: "#67c23a" },
    downTextColor: { default: "#f56c6c" },
    reverseColor: { type: Boolean, default: !1 },
    upIcon: { default: "arrow-up" },
    downIcon: { default: "arrow-down" }
  },
  setup(e) {
    const o = e, t = f(), n = l(() => o.type === "up" ? o.reverseColor ? o.downTextColor : o.upTextColor : o.reverseColor ? o.upTextColor : o.downTextColor), r = l(() => o.type === "up" ? o.reverseColor ? o.downIconColor : o.upIconColor : o.reverseColor ? o.upIconColor : o.downIconColor), d = l(() => o.type === "up" ? `el-icon-${o.upIcon}` : `el-icon-${o.downIcon}`);
    return (p, B) => (c(), s("div", m, [
      a(
        "div",
        {
          class: "text",
          style: u({ color: n.value })
        },
        [
          _(t).default ? C(p.$slots, "default", { key: 0 }, void 0, !0) : (c(), s(
            "span",
            w,
            v(o.text),
            1
            /* TEXT */
          ))
        ],
        4
        /* STYLE */
      ),
      a("div", I, [
        (c(), x(y(d.value), {
          style: u({ color: r.value })
        }, null, 8, ["style"]))
      ])
    ]));
  }
}), k = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, r] of o)
    t[n] = r;
  return t;
}, h = /* @__PURE__ */ k(T, [["__scopeId", "data-v-46c44a7d"]]), g = {
  install(e) {
    e.component("ti-trend", h);
  }
};
export {
  g as default
};
