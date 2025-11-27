import { defineComponent as l, resolveComponent as r, createElementBlock as i, openBlock as _, createElementVNode as t, createVNode as s, withCtx as n, createTextVNode as d } from "vue";
import { _ as m } from "./index-AZgRDC2k.js";
const p = { class: "flex" }, x = { class: "mr-10" }, v = { class: "mr-10" }, c = { class: "flex" }, u = { class: "mr-10" }, a = { class: "mr-10" }, f = { class: "flex" }, w = { class: "mr-10" }, y = { class: "mr-10" }, C = { class: "flex" }, h = { class: "mr-10" }, T = { class: "mr-10" }, k = /* @__PURE__ */ l({
  __name: "Trend",
  setup(N) {
    return (V, o) => {
      const e = r("ti-trend");
      return _(), i("div", null, [
        o[2] || (o[2] = t(
          "h5",
          null,
          "1、默认使用",
          -1
          /* CACHED */
        )),
        t("div", p, [
          t("div", x, [
            s(e, { text: "营业额" })
          ]),
          t("div", v, [
            s(e, {
              type: "down",
              downIconColor: "yellow",
              text: "销售额"
            })
          ])
        ]),
        t("div", c, [
          t("div", u, [
            s(e, { text: "营业额" })
          ]),
          t("div", a, [
            s(e, {
              type: "down",
              text: "销售额"
            })
          ])
        ]),
        o[3] || (o[3] = t(
          "h5",
          null,
          "2、使用插槽",
          -1
          /* CACHED */
        )),
        t("div", f, [
          t("div", w, [
            s(e, null, {
              default: n(() => [...o[0] || (o[0] = [
                d(
                  "文字",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          t("div", y, [
            s(e, {
              type: "down",
              text: "销售额"
            })
          ])
        ]),
        o[4] || (o[4] = t(
          "h5",
          null,
          "3、颜色反转",
          -1
          /* CACHED */
        )),
        s(e, {
          type: "down",
          reverseColor: "",
          text: "销售额"
        }),
        o[5] || (o[5] = t(
          "h5",
          null,
          "4、文字颜色",
          -1
          /* CACHED */
        )),
        s(e, {
          type: "down",
          downTextColor: "black",
          text: "销售额"
        }),
        o[6] || (o[6] = t(
          "h5",
          null,
          "4、自定义图标",
          -1
          /* CACHED */
        )),
        t("div", C, [
          t("div", h, [
            s(e, null, {
              default: n(() => [...o[1] || (o[1] = [
                d(
                  "文字",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          t("div", T, [
            s(e, {
              type: "down",
              text: "销售额"
            })
          ])
        ])
      ]);
    };
  }
}), E = /* @__PURE__ */ m(k, [["__scopeId", "data-v-00bf4c31"]]);
export {
  E as default
};
