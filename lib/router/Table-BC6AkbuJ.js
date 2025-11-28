import { defineComponent as D, ref as a, reactive as I, onMounted as N, resolveComponent as r, createElementBlock as V, openBlock as b, createElementVNode as o, createVNode as i, withCtx as l, createBlock as _, createTextVNode as p, toDisplayString as d } from "vue";
import { _ as L } from "./index-CX_zC-uL.js";
const M = { class: "" }, R = { class: "w-[60px] flex items-center justify-button" }, A = `
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`, O = /* @__PURE__ */ D({
  __name: "Table",
  setup(J) {
    const f = a([]), y = a([
      {
        label: "日期",
        prop: "date",
        width: 180,
        align: "left",
        solt: "dateTemp",
        type: "date",
        editable: !0
      },
      {
        label: "姓名",
        prop: "name",
        width: 180,
        align: "center",
        solt: "nameTemp"
      },
      {
        label: "班级",
        prop: "class",
        align: "center",
        width: 180,
        type: "select",
        useDict: !0,
        editable: !0,
        options: [
          {
            label: "物理171",
            value: "0"
          },
          {
            label: "物理172",
            value: "1"
          },
          {
            label: "数学171",
            value: "2"
          },
          {
            label: "数学172",
            value: "3"
          }
        ]
      },
      {
        label: "电话",
        prop: "tel",
        align: "center",
        editable: !0
      },
      {
        label: "地址",
        prop: "address",
        align: "center",
        editable: !0
      },
      {
        label: "操作",
        actionable: !0,
        width: 140
      }
    ]), c = a(!0), s = a(-1), g = a(1), m = I({
      pageSize: 5,
      total: 100,
      pageSizes: [5, 10],
      layout: "total, sizes, prev, pager, next, jumper"
    }), w = a({
      text: "正在加载中...",
      spinner: A,
      background: "rgba(0, 0, 0, 0.8)",
      svgViewBox: "-10 -10 50 50"
    });
    N(() => {
      v();
    });
    const v = () => {
      c.value = !0, fetch("/api/table/list", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          page: g.value,
          pageSize: m.pageSize
        })
      }).then((t) => t.json()).then((t) => {
        c.value = !1, t.code === 200 && (f.value = t.data);
      });
    }, x = (t) => {
      m.pageSize = t.pageSize, v();
    }, k = (t, e) => {
      console.log("点击编辑按钮", e), s.value = e;
    }, z = (t, e) => {
      console.log(t), s.value = -1;
    }, S = (t) => {
      console.log("onRowConfirm", t);
    }, T = (t) => {
      console.log(t);
    };
    return (t, e) => {
      const u = r("el-button"), E = r("el-icon-calendar"), h = r("el-tag"), P = r("el-popover"), j = r("ti-table");
      return b(), V("div", M, [
        e[5] || (e[5] = o(
          "h5",
          null,
          "功能",
          -1
          /* CACHED */
        )),
        e[6] || (e[6] = o(
          "p",
          null,
          "1、可配置性、可维护性强",
          -1
          /* CACHED */
        )),
        e[7] || (e[7] = o(
          "p",
          null,
          "2、具备element-plus 表格所有功能",
          -1
          /* CACHED */
        )),
        e[8] || (e[8] = o(
          "p",
          null,
          "3、可扩展性强",
          -1
          /* CACHED */
        )),
        i(j, {
          border: "",
          loading: c.value,
          loadingConfig: w.value,
          data: f.value,
          options: y.value,
          rowEditable: "",
          rowEditIndex: s.value,
          onConfirm: S,
          pageConfig: m,
          currentPage: g.value,
          "onUpdate:currentPage": e[0] || (e[0] = (n) => g.value = n),
          onPageChange: x,
          onCancel: T
        }, {
          editCell: l(({ row: n }) => [
            o("div", R, [
              i(u, { size: "small" }, {
                default: l(() => [...e[1] || (e[1] = [
                  p(
                    "取消",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              i(u, {
                size: "small",
                type: "primary"
              }, {
                default: l(() => [...e[2] || (e[2] = [
                  p(
                    "确认",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          dateTemp: l(({ row: n }) => [
            i(E, { class: "font-[12px] mr-4" }),
            o(
              "span",
              null,
              d(n.date),
              1
              /* TEXT */
            )
          ]),
          nameTemp: l(({ row: n }) => [
            i(
              P,
              {
                trigger: "hover",
                placement: "top",
                width: "auto"
              },
              {
                default: l(() => [
                  o(
                    "p",
                    null,
                    "姓名：" + d(n.name),
                    1
                    /* TEXT */
                  ),
                  o(
                    "p",
                    null,
                    "日期：" + d(n.date),
                    1
                    /* TEXT */
                  ),
                  o(
                    "p",
                    null,
                    "地址：" + d(n.address),
                    1
                    /* TEXT */
                  )
                ]),
                reference: l(() => [
                  i(
                    h,
                    { class: "cursor-pointer" },
                    {
                      default: l(() => [
                        p(
                          d(n.name),
                          1
                          /* TEXT */
                        )
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
              },
              1024
              /* DYNAMIC_SLOTS */
            )
          ]),
          action: l(({ row: n, $index: C }) => [
            s.value === -1 || C !== s.value ? (b(), _(u, {
              key: 0,
              type: "primary",
              size: "mini",
              onClick: (B) => k(n, C)
            }, {
              default: l(() => [...e[3] || (e[3] = [
                p(
                  "编辑",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"])) : (b(), _(u, {
              key: 1,
              type: "danger",
              size: "mini",
              onClick: (B) => z(n)
            }, {
              default: l(() => [...e[4] || (e[4] = [
                p(
                  "取消",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["loading", "loadingConfig", "data", "options", "rowEditIndex", "pageConfig", "currentPage"])
      ]);
    };
  }
}), q = /* @__PURE__ */ L(O, [["__scopeId", "data-v-37bb7ace"]]);
export {
  q as default
};
