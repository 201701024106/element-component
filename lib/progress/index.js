import { defineComponent as s, ref as c, onMounted as i, resolveComponent as l, createElementBlock as p, openBlock as m, createVNode as u, mergeProps as d } from "vue";
const f = { class: "" }, g = /* @__PURE__ */ s({
  __name: "index",
  props: {
    // 当前进度值
    percentage: {
      type: Number,
      default: 0
    },
    // 是否开启动画
    isAnimation: {
      type: Boolean,
      default: !1
    },
    // 动画时间 (ms 毫秒)
    animationTime: {
      type: Number,
      default: 1e3
    }
  },
  setup(n) {
    const e = n, t = c(0);
    return i(() => {
      if (e.isAnimation) {
        const o = Math.ceil(e.animationTime / e.percentage);
        t.value = 0;
        const a = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(a));
        }, o);
      }
    }), (o, a) => {
      const r = l("el-progress");
      return m(), p("div", f, [
        u(r, d(o.$attrs, { percentage: t.value }), null, 16, ["percentage"])
      ]);
    };
  }
}), v = {
  install(n) {
    n.component("ti-progress", g);
  }
};
export {
  v as default
};
