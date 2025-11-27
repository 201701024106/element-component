import { defineComponent as y, ref as g, computed as S, resolveComponent as d, createBlock as V, openBlock as h, mergeProps as m, toHandlers as C, createSlots as x, withCtx as u, createElementVNode as B, normalizeClass as W, createVNode as $, renderList as k, renderSlot as _ } from "vue";
const w = /* @__PURE__ */ y({
  __name: "index",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "120px"
    },
    autoScroll: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible"],
  setup(e, { emit: p }) {
    const t = g(null), l = e, n = p, a = S({
      get() {
        return l.visible;
      },
      set(o) {
        n("update:visible", o);
      }
    }), c = () => {
      n("update:visible", !1);
    };
    return (o, i) => {
      const f = d("ti-form"), v = d("el-dialog");
      return h(), V(v, m({
        modelValue: a.value,
        "onUpdate:modelValue": i[0] || (i[0] = (s) => a.value = s)
      }, o.$attrs, C(o.$listeners), { onClose: c }), x({
        default: u(() => [
          B(
            "div",
            {
              class: W({
                "overflow-y-auto": e.autoScroll,
                "max-h-[400px]": e.autoScroll
              })
            },
            [
              $(f, {
                ref_key: "dynamicForm",
                ref: t,
                labelWidth: e.labelWidth,
                options: l.options
              }, null, 8, ["labelWidth", "options"])
            ],
            2
            /* CLASS */
          )
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        k(o.$slots, (s, r) => ({
          name: r,
          fn: u((b) => [
            _(o.$slots, r, m(b, { form: t.value }))
          ])
        }))
      ]), 1040, ["modelValue"]);
    };
  }
}), z = {
  install(e) {
    e.component("ti-modal-form", w);
  }
};
export {
  z as default
};
