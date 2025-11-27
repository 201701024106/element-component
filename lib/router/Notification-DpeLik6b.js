import { defineComponent as a, reactive as e, resolveComponent as i, createElementBlock as _, openBlock as r, createElementVNode as d, createVNode as l, withCtx as p } from "vue";
const f = { class: "" }, k = /* @__PURE__ */ a({
  __name: "Notification",
  setup(u) {
    const o = e([
      {
        title: "通知",
        content: [
          { title: "title1", time: "2025-05-05 11:11:11", tag: "success", icon: "add-location" },
          { title: "title1", time: "2025-05-05 11:11:11" },
          { title: "title1", time: "2025-05-05 11:11:11" },
          { title: "title1", time: "2025-05-05 11:11:11" },
          { title: "title1", time: "2025-05-05 11:11:11" },
          { title: "title1", time: "2025-05-05 11:11:11" },
          { title: "title1", time: "2025-05-05 11:11:11" }
        ]
      },
      {
        title: "关注",
        content: [
          { title: "title2", time: "2025-05-05 11:11:11" },
          { title: "title2", time: "2025-05-05 11:11:11" },
          { title: "title2", time: "2025-05-05 11:11:11" },
          { title: "title2", time: "2025-05-05 11:11:11" }
        ]
      },
      {
        title: "代办",
        content: [
          { title: "title3", time: "2025-05-05 11:11:11" },
          { title: "title3", time: "2025-05-05 11:11:11" },
          { title: "title3", time: "2025-05-05 11:11:11" },
          { title: "title3", time: "2025-05-05 11:11:11" }
        ]
      }
    ]), n = e([
      {
        text: "清空代办",
        icon: "check",
        activeFn: (t) => {
          console.log(t);
        }
      },
      {
        text: "查看更多",
        icon: "more-filled",
        activeFn: (t) => {
          console.log(t);
        }
      }
    ]), c = (t) => {
      console.log(t);
    };
    return (t, v) => {
      const m = i("ti-list"), s = i("ti-notification");
      return r(), _("div", f, [
        d("div", null, [
          l(s, {
            value: 888,
            max: 30
          }, {
            default: p(() => [
              l(m, {
                list: o,
                actions: n,
                activeName: "通知",
                onItemClick: c
              }, null, 8, ["list", "actions"])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]);
    };
  }
});
export {
  k as default
};
