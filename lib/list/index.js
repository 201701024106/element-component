import { defineComponent as D, computed as F, resolveComponent as l, createElementBlock as s, openBlock as e, createVNode as x, createCommentVNode as i, withCtx as u, Fragment as k, renderList as y, createBlock as b, createElementVNode as a, toDisplayString as r, createTextVNode as $, resolveDynamicComponent as j } from "vue";
const z = { class: "list-tabs__item" }, E = ["onClick"], I = { class: "avatar flex-1 flex items-center" }, L = { class: "content" }, S = {
  key: 0,
  class: "flex justify-between items-center"
}, q = {
  key: 1,
  class: "time"
}, O = {
  key: 2,
  class: "time"
}, T = {
  key: 0,
  class: "flex justify-between h-[36px] items-center border-t-[1px] border-[#ebeef5]"
}, U = ["onClick"], G = { class: "mr-[4px] cursor-pointer" }, H = { class: "text cursor-pointer" }, J = /* @__PURE__ */ D({
  __name: "index",
  props: {
    list: {
      type: Array,
      default: () => [],
      required: !0
    },
    isDot: {
      type: Boolean,
      default: !1
    },
    actions: {
      type: Array,
      default: () => []
    },
    activeName: {
      type: String,
      default: ""
    }
  },
  emits: ["update:activeName", "itemClick"],
  setup(n, { emit: f }) {
    const d = n, m = f, _ = F({
      get() {
        return d.activeName;
      },
      set(c) {
        m("update:activeName", c);
      }
    }), h = (c, p) => {
      m("itemClick", { item: c, index: p });
    }, g = (c) => {
      c.activeFn && c.activeFn(c);
    };
    return (c, p) => {
      const C = l("el-avatar"), N = l("el-tag"), V = l("el-scrollbar"), w = l("el-tab-pane"), B = l("el-tabs");
      return e(), s("div", z, [
        x(B, {
          modelValue: _.value,
          "onUpdate:modelValue": p[0] || (p[0] = (o) => _.value = o),
          class: "list-container w-full"
        }, {
          default: u(() => [
            (e(!0), s(
              k,
              null,
              y(n.list, (o, v) => (e(), b(w, {
                key: v,
                label: o.title,
                name: o.title
              }, {
                default: u(() => [
                  x(
                    V,
                    { "max-height": "200px" },
                    {
                      default: u(() => [
                        (e(!0), s(
                          k,
                          null,
                          y(o.content, (t, A) => (e(), s("div", {
                            class: "container w-[350px] flex items-center mx-[8px] my-[4px] cursor-pointer",
                            onClick: (P) => h(t, A),
                            key: t.time
                          }, [
                            a("div", I, [
                              x(C, {
                                size: "small",
                                src: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                              })
                            ]),
                            a("div", L, [
                              t.title ? (e(), s("div", S, [
                                a(
                                  "p",
                                  null,
                                  r(t.title),
                                  1
                                  /* TEXT */
                                ),
                                t.tag ? (e(), b(
                                  N,
                                  {
                                    key: 0,
                                    size: "mini"
                                  },
                                  {
                                    default: u(() => [
                                      $(
                                        r(t.tag),
                                        1
                                        /* TEXT */
                                      )
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )) : i("v-if", !0)
                              ])) : i("v-if", !0),
                              t.time ? (e(), s(
                                "p",
                                q,
                                r(t.time),
                                1
                                /* TEXT */
                              )) : i("v-if", !0),
                              t.description ? (e(), s(
                                "p",
                                O,
                                r(t.description),
                                1
                                /* TEXT */
                              )) : i("v-if", !0)
                            ])
                          ], 8, E))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label", "name"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        n.actions && n.actions.length > 0 ? (e(), s("div", T, [
          (e(!0), s(
            k,
            null,
            y(n.actions, (o, v) => (e(), s("div", {
              key: v,
              onClick: (t) => g(o),
              class: "h-[30px] flex items-center"
            }, [
              a("div", G, [
                o.icon ? (e(), b(j(`el-icon-${c.toLine(o.icon)}`), {
                  key: 0,
                  class: "ml-[8px]"
                })) : i("v-if", !0)
              ]),
              a(
                "div",
                H,
                r(o.text),
                1
                /* TEXT */
              )
            ], 8, U))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : i("v-if", !0)
      ]);
    };
  }
}), K = (n, f) => {
  const d = n.__vccOpts || n;
  for (const [m, _] of f)
    d[m] = _;
  return d;
}, M = /* @__PURE__ */ K(J, [["__scopeId", "data-v-ef1922bf"]]), R = {
  install(n) {
    n.component("ti-list", M);
  }
};
export {
  R as default
};
