import { defineComponent as s, ref as a, resolveComponent as m, createElementBlock as r, openBlock as _, createVNode as i } from "vue";
const d = { class: "" }, f = /* @__PURE__ */ s({
  __name: "CitySelect",
  setup(p) {
    const e = a({}), n = (o) => {
      console.log(o);
    };
    return (o, t) => {
      const l = m("ti-city-select");
      return _(), r("div", d, [
        i(l, {
          modelValue: e.value,
          "onUpdate:modelValue": [
            t[0] || (t[0] = (c) => e.value = c),
            n
          ]
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
export {
  f as default
};
