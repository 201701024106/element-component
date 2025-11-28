import { useRouter as k, createRouter as b, createWebHistory as S } from "vue-router";
import { defineComponent as x, resolveComponent as r, createElementBlock as h, openBlock as t, createVNode as m, mergeProps as $, withCtx as o, Fragment as f, renderList as C, createBlock as i, createCommentVNode as p, createElementVNode as y, resolveDynamicComponent as g, toDisplayString as v, reactive as w, ref as B } from "vue";
const R = { class: "" }, L = /* @__PURE__ */ x({
  __name: "index",
  props: {
    data: {
      type: Array,
      required: !0,
      default: () => []
    },
    defaultActive: {
      type: String,
      default: ""
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: !1
    },
    // 标题的键名
    labelKey: {
      type: String,
      default: "name"
    },
    // 标题的键名
    iconKey: {
      type: String,
      default: "icon"
    },
    // 标题的键名
    indexKey: {
      type: String,
      default: "index"
    },
    // 子菜单的键名
    childrenKey: {
      type: String,
      default: "children"
    }
  },
  setup(e) {
    return (l, c) => {
      const a = r("el-menu-item"), d = r("el-sub-menu"), u = r("el-menu");
      return t(), h("div", R, [
        m(u, $({ "default-active": e.defaultActive }, l.$attrs, {
          router: e.router,
          class: "el-menu-vertical-demo"
        }), {
          default: o(() => [
            (t(!0), h(
              f,
              null,
              C(e.data, (n) => (t(), h(
                f,
                null,
                [
                  !n[e.childrenKey] || !n[e.childrenKey].length ? (t(), i(a, {
                    index: n[e.indexKey],
                    key: n[e.labelKey]
                  }, {
                    default: o(() => [
                      n[e.iconKey] ? (t(), i(g(`el-icon-${l.toLine(n[e.iconKey])}`), {
                        key: 0,
                        class: "mr-[4px]"
                      })) : p("v-if", !0),
                      y(
                        "span",
                        null,
                        v(n[e.labelKey]),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["index"])) : p("v-if", !0),
                  n[e.childrenKey] && n[e.childrenKey].length ? (t(), i(d, {
                    index: n[e.indexKey],
                    key: n[e.labelKey]
                  }, {
                    title: o(() => [
                      n[e.iconKey] ? (t(), i(g(`el-icon-${l.toLine(n[e.iconKey])}`), {
                        key: 0,
                        class: "mr-[4px]"
                      })) : p("v-if", !0),
                      y(
                        "span",
                        null,
                        v(n[e.labelKey]),
                        1
                        /* TEXT */
                      )
                    ]),
                    default: o(() => [
                      (t(!0), h(
                        f,
                        null,
                        C(n[e.childrenKey], (s) => (t(), i(a, {
                          index: s[e.indexKey],
                          key: s[e.indexKey]
                        }, {
                          default: o(() => [
                            s[e.iconKey] ? (t(), i(g(`el-icon-${l.toLine(n[e.iconKey])}`), {
                              key: 0,
                              class: "mr-[4px]"
                            })) : p("v-if", !0),
                            y(
                              "span",
                              null,
                              v(s[e.labelKey]),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["index"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["index"])) : p("v-if", !0)
                ],
                64
                /* STABLE_FRAGMENT */
              ))),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 16, ["default-active", "router"])
      ]);
    };
  }
}), _ = (e, l) => {
  const c = e.__vccOpts || e;
  for (const [a, d] of l)
    c[a] = d;
  return c;
}, N = /* @__PURE__ */ _(L, [["__scopeId", "data-v-4247b754"]]), A = /* @__PURE__ */ x({
  __name: "index",
  props: {
    isCollapse: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    k();
    const l = w([
      {
        name: "首页",
        icon: "house",
        index: "/"
      },
      {
        name: "图标选择器",
        icon: "select",
        index: "/icon-select"
      },
      {
        name: "趋势标记",
        icon: "trend-charts",
        index: "/trend"
      },
      {
        name: "通知菜单",
        icon: "trend-charts",
        index: "/notification"
      },
      {
        name: "左侧菜单",
        icon: "trend-charts",
        index: "/leftmenu"
      },
      {
        name: "进度条",
        icon: "trend-charts",
        index: "/progress"
      },
      {
        name: "时间选择器",
        icon: "trend-charts",
        index: "/timeRange"
      },
      {
        name: "日期选择器",
        icon: "trend-charts",
        index: "/dateRange"
      },
      {
        name: "城市选择器",
        icon: "trend-charts",
        index: "/citySelect"
      },
      {
        name: "日历选择器",
        icon: "trend-charts",
        index: "/calendar"
      },
      {
        name: "表单组件",
        icon: "trend-charts",
        index: "/dynamicForm"
      },
      {
        name: "表格组件",
        icon: "trend-charts",
        index: "/table"
      }
    ]), c = e;
    return (a, d) => (t(), h(
      f,
      null,
      [
        p(` <el-menu :default-active="$route.path" :collapse="props.isCollapse" class="el-menu-vertical-demo">\r
        <el-menu-item index="/" @click="handleClick('/')">\r
            <el-icon-house></el-icon-house>\r
            <span>首页</span>\r
        </el-menu-item>\r
        <el-menu-item index="/icon-select" @click="handleClick('/icon-select')">\r
            <el-icon-select></el-icon-select>\r
            <span>图标选择器</span>\r
        </el-menu-item>\r
        <el-menu-item index="/trend" @click="handleClick('/trend')">\r
            <el-icon-trend-charts></el-icon-trend-charts>\r
            <span>趋势标记</span>\r
        </el-menu-item>\r
        <el-menu-item index="/notification" @click="handleClick('/notification')">\r
            <el-icon-trend-charts></el-icon-trend-charts>\r
            <span>通知菜单</span>\r
        </el-menu-item>\r
        <el-menu-item index="/leftmenu" @click="handleClick('/leftmenu')">\r
            <el-icon-trend-charts></el-icon-trend-charts>\r
            <span>左侧菜单</span>\r
        </el-menu-item>\r
    </el-menu> `),
        m(N, {
          data: l,
          router: "",
          collapse: c.isCollapse,
          "default-active": a.$route.path
        }, null, 8, ["data", "collapse", "default-active"])
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    ));
  }
}), F = /* @__PURE__ */ _(A, [["__scopeId", "data-v-324d7db0"]]), I = /* @__PURE__ */ x({
  __name: "index",
  props: {
    isCollapse: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["collapseChange"],
  setup(e, { emit: l }) {
    const c = e, a = l;
    return (d, u) => {
      const n = r("el-icon-arrow-right"), s = r("el-icon-arrow-left"), K = r("el-header");
      return t(), i(K, { class: "header" }, {
        default: o(() => [
          y("div", {
            class: "w-[100px]",
            onClick: u[0] || (u[0] = () => a("collapseChange", !c.isCollapse))
          }, [
            c.isCollapse ? (t(), i(n, { key: 0 })) : (t(), i(s, { key: 1 }))
          ])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
}), V = /* @__PURE__ */ _(I, [["__scopeId", "data-v-daf7a805"]]), D = /* @__PURE__ */ x({
  __name: "index",
  setup(e) {
    const l = B(!1);
    return (c, a) => {
      const d = r("router-view"), u = r("el-main"), n = r("el-container");
      return t(), i(n, null, {
        default: o(() => [
          m(n, null, {
            default: o(() => [
              m(F, { isCollapse: l.value }, null, 8, ["isCollapse"]),
              m(u, null, {
                default: o(() => [
                  m(V, {
                    isCollapse: l.value,
                    onCollapseChange: a[0] || (a[0] = (s) => l.value = s)
                  }, null, 8, ["isCollapse"]),
                  m(d)
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
}), E = [
  {
    path: "/",
    component: D,
    children: [
      {
        path: "",
        component: () => import("./Home-PefxzIA_.js"),
        meta: {
          title: "首页",
          icon: "el-icon-rice-ag"
        }
      },
      {
        path: "/icon-select",
        component: () => import("./IconSelect-mX9ndPlp.js"),
        meta: {
          title: "图标选择器",
          icon: "el-icon-rice-ag"
        }
      },
      {
        path: "/trend",
        component: () => import("./Trend-Dh-IdHJx.js"),
        meta: {
          title: "图标选择器",
          icon: "el-icon-rice-ag"
        }
      },
      {
        path: "/notification",
        component: () => import("./Notification-DpeLik6b.js"),
        meta: {
          title: "通知菜单",
          icon: "el-icon-rice-ag"
        }
      },
      {
        path: "/leftmenu",
        component: () => import("./Leftmenu-VgVJCb5o.js"),
        meta: {
          title: "左侧菜单",
          icon: "el-icon-rice-ag"
        }
      },
      {
        path: "/progress",
        component: () => import("./Progress-nEq2AD0T.js"),
        meta: {
          title: "进度条",
          icon: "el-icon-rice-ag"
        }
      },
      {
        path: "/timeRange",
        component: () => import("./TimeRange-DfiyIlAz.js"),
        meta: {
          title: "时间选择器",
          icon: "el-icon-rice-ag"
        }
      },
      {
        path: "/dateRange",
        component: () => import("./DateRange-CWefDbim.js"),
        meta: {
          title: "日期选择器",
          icon: "el-icon-rice-ag"
        }
      },
      {
        path: "/citySelect",
        component: () => import("./CitySelect-7cZPinoo.js"),
        meta: {
          title: "城市选择器",
          icon: "el-icon-rice-ag"
        }
      },
      {
        path: "/calendar",
        component: () => import("./Calendar-BVWE4Xk1.js"),
        meta: {
          title: "日历选择器",
          icon: "el-icon-rice-ag"
        }
      },
      {
        path: "/dynamicForm",
        component: () => import("./DynamicForm-Cvxiol1a.js"),
        meta: {
          title: "表单组件",
          icon: "el-icon-rice-ag"
        }
      },
      {
        path: "/table",
        component: () => import("./Table-BC6AkbuJ.js"),
        meta: {
          title: "表格组件",
          icon: "el-icon-rice-ag"
        }
      }
    ]
  }
], O = b({
  history: S(),
  routes: E
});
export {
  _,
  O as r
};
