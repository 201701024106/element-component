import { defineComponent as l, ref as o, resolveComponent as c, createElementBlock as r, openBlock as a, createCommentVNode as _, createVNode as m, withCtx as p, createTextVNode as d } from "vue";
const v = { class: "" }, x = /* @__PURE__ */ l({
  __name: "IconSelect",
  setup(u) {
    const n = o("图标选择"), t = o(!1);
    return (f, e) => {
      const i = c("ti-choose-icon");
      return a(), r("div", v, [
        _(" 图标选择 "),
        m(i, {
          title: n.value,
          visible: t.value,
          "onUpdate:visible": e[0] || (e[0] = (s) => t.value = s)
        }, {
          default: p(() => [...e[1] || (e[1] = [
            d(
              " 选择图标 ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["title", "visible"])
      ]);
    };
  }
});
export {
  x as default
};
