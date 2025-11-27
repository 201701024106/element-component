import { defineComponent as et, computed as E, resolveComponent as nt, createElementBlock as rt, openBlock as st, createCommentVNode as at, createVNode as P, mergeProps as Q } from "vue";
function it(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var A = { exports: {} }, ut = A.exports, R;
function ot() {
  return R || (R = 1, (function(h, B) {
    (function(M, D) {
      h.exports = D();
    })(ut, (function() {
      var M = 1e3, D = 6e4, C = 36e5, _ = "millisecond", b = "second", d = "minute", m = "hour", g = "day", S = "week", v = "month", J = "quarter", w = "year", F = "date", Z = "Invalid Date", G = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, K = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, X = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
        var n = ["th", "st", "nd", "rd"], t = s % 100;
        return "[" + s + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
      } }, U = function(s, n, t) {
        var r = String(s);
        return !r || r.length >= n ? s : "" + Array(n + 1 - r.length).join(t) + s;
      }, tt = { s: U, z: function(s) {
        var n = -s.utcOffset(), t = Math.abs(n), r = Math.floor(t / 60), e = t % 60;
        return (n <= 0 ? "+" : "-") + U(r, 2, "0") + ":" + U(e, 2, "0");
      }, m: function s(n, t) {
        if (n.date() < t.date()) return -s(t, n);
        var r = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(r, v), a = t - e < 0, i = n.clone().add(r + (a ? -1 : 1), v);
        return +(-(r + (t - e) / (a ? e - i : i - e)) || 0);
      }, a: function(s) {
        return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
      }, p: function(s) {
        return { M: v, y: w, w: S, d: g, D: F, h: m, m: d, s: b, ms: _, Q: J }[s] || String(s || "").toLowerCase().replace(/s$/, "");
      }, u: function(s) {
        return s === void 0;
      } }, V = "en", T = {};
      T[V] = X;
      var q = "$isDayjsObject", I = function(s) {
        return s instanceof N || !(!s || !s[q]);
      }, L = function s(n, t, r) {
        var e;
        if (!n) return V;
        if (typeof n == "string") {
          var a = n.toLowerCase();
          T[a] && (e = a), t && (T[a] = t, e = a);
          var i = n.split("-");
          if (!e && i.length > 1) return s(i[0]);
        } else {
          var o = n.name;
          T[o] = n, e = o;
        }
        return !r && e && (V = e), e || !r && V;
      }, l = function(s, n) {
        if (I(s)) return s.clone();
        var t = typeof n == "object" ? n : {};
        return t.date = s, t.args = arguments, new N(t);
      }, u = tt;
      u.l = L, u.i = I, u.w = function(s, n) {
        return l(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
      };
      var N = (function() {
        function s(t) {
          this.$L = L(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[q] = !0;
        }
        var n = s.prototype;
        return n.parse = function(t) {
          this.$d = (function(r) {
            var e = r.date, a = r.utc;
            if (e === null) return /* @__PURE__ */ new Date(NaN);
            if (u.u(e)) return /* @__PURE__ */ new Date();
            if (e instanceof Date) return new Date(e);
            if (typeof e == "string" && !/Z$/i.test(e)) {
              var i = e.match(G);
              if (i) {
                var o = i[2] - 1 || 0, c = (i[7] || "0").substring(0, 3);
                return a ? new Date(Date.UTC(i[1], o, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, c)) : new Date(i[1], o, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, c);
              }
            }
            return new Date(e);
          })(t), this.init();
        }, n.init = function() {
          var t = this.$d;
          this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, n.$utils = function() {
          return u;
        }, n.isValid = function() {
          return this.$d.toString() !== Z;
        }, n.isSame = function(t, r) {
          var e = l(t);
          return this.startOf(r) <= e && e <= this.endOf(r);
        }, n.isAfter = function(t, r) {
          return l(t) < this.startOf(r);
        }, n.isBefore = function(t, r) {
          return this.endOf(r) < l(t);
        }, n.$g = function(t, r, e) {
          return u.u(t) ? this[r] : this.set(e, t);
        }, n.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, n.valueOf = function() {
          return this.$d.getTime();
        }, n.startOf = function(t, r) {
          var e = this, a = !!u.u(r) || r, i = u.p(t), o = function(x, p) {
            var O = u.w(e.$u ? Date.UTC(e.$y, p, x) : new Date(e.$y, p, x), e);
            return a ? O : O.endOf(g);
          }, c = function(x, p) {
            return u.w(e.toDate()[x].apply(e.toDate("s"), (a ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(p)), e);
          }, f = this.$W, $ = this.$M, y = this.$D, j = "set" + (this.$u ? "UTC" : "");
          switch (i) {
            case w:
              return a ? o(1, 0) : o(31, 11);
            case v:
              return a ? o(1, $) : o(0, $ + 1);
            case S:
              var k = this.$locale().weekStart || 0, Y = (f < k ? f + 7 : f) - k;
              return o(a ? y - Y : y + (6 - Y), $);
            case g:
            case F:
              return c(j + "Hours", 0);
            case m:
              return c(j + "Minutes", 1);
            case d:
              return c(j + "Seconds", 2);
            case b:
              return c(j + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, n.endOf = function(t) {
          return this.startOf(t, !1);
        }, n.$set = function(t, r) {
          var e, a = u.p(t), i = "set" + (this.$u ? "UTC" : ""), o = (e = {}, e[g] = i + "Date", e[F] = i + "Date", e[v] = i + "Month", e[w] = i + "FullYear", e[m] = i + "Hours", e[d] = i + "Minutes", e[b] = i + "Seconds", e[_] = i + "Milliseconds", e)[a], c = a === g ? this.$D + (r - this.$W) : r;
          if (a === v || a === w) {
            var f = this.clone().set(F, 1);
            f.$d[o](c), f.init(), this.$d = f.set(F, Math.min(this.$D, f.daysInMonth())).$d;
          } else o && this.$d[o](c);
          return this.init(), this;
        }, n.set = function(t, r) {
          return this.clone().$set(t, r);
        }, n.get = function(t) {
          return this[u.p(t)]();
        }, n.add = function(t, r) {
          var e, a = this;
          t = Number(t);
          var i = u.p(r), o = function($) {
            var y = l(a);
            return u.w(y.date(y.date() + Math.round($ * t)), a);
          };
          if (i === v) return this.set(v, this.$M + t);
          if (i === w) return this.set(w, this.$y + t);
          if (i === g) return o(1);
          if (i === S) return o(7);
          var c = (e = {}, e[d] = D, e[m] = C, e[b] = M, e)[i] || 1, f = this.$d.getTime() + t * c;
          return u.w(f, this);
        }, n.subtract = function(t, r) {
          return this.add(-1 * t, r);
        }, n.format = function(t) {
          var r = this, e = this.$locale();
          if (!this.isValid()) return e.invalidDate || Z;
          var a = t || "YYYY-MM-DDTHH:mm:ssZ", i = u.z(this), o = this.$H, c = this.$m, f = this.$M, $ = e.weekdays, y = e.months, j = e.meridiem, k = function(p, O, H, W) {
            return p && (p[O] || p(r, a)) || H[O].slice(0, W);
          }, Y = function(p) {
            return u.s(o % 12 || 12, p, "0");
          }, x = j || function(p, O, H) {
            var W = p < 12 ? "AM" : "PM";
            return H ? W.toLowerCase() : W;
          };
          return a.replace(K, (function(p, O) {
            return O || (function(H) {
              switch (H) {
                case "YY":
                  return String(r.$y).slice(-2);
                case "YYYY":
                  return u.s(r.$y, 4, "0");
                case "M":
                  return f + 1;
                case "MM":
                  return u.s(f + 1, 2, "0");
                case "MMM":
                  return k(e.monthsShort, f, y, 3);
                case "MMMM":
                  return k(y, f);
                case "D":
                  return r.$D;
                case "DD":
                  return u.s(r.$D, 2, "0");
                case "d":
                  return String(r.$W);
                case "dd":
                  return k(e.weekdaysMin, r.$W, $, 2);
                case "ddd":
                  return k(e.weekdaysShort, r.$W, $, 3);
                case "dddd":
                  return $[r.$W];
                case "H":
                  return String(o);
                case "HH":
                  return u.s(o, 2, "0");
                case "h":
                  return Y(1);
                case "hh":
                  return Y(2);
                case "a":
                  return x(o, c, !0);
                case "A":
                  return x(o, c, !1);
                case "m":
                  return String(c);
                case "mm":
                  return u.s(c, 2, "0");
                case "s":
                  return String(r.$s);
                case "ss":
                  return u.s(r.$s, 2, "0");
                case "SSS":
                  return u.s(r.$ms, 3, "0");
                case "Z":
                  return i;
              }
              return null;
            })(p) || i.replace(":", "");
          }));
        }, n.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, n.diff = function(t, r, e) {
          var a, i = this, o = u.p(r), c = l(t), f = (c.utcOffset() - this.utcOffset()) * D, $ = this - c, y = function() {
            return u.m(i, c);
          };
          switch (o) {
            case w:
              a = y() / 12;
              break;
            case v:
              a = y();
              break;
            case J:
              a = y() / 3;
              break;
            case S:
              a = ($ - f) / 6048e5;
              break;
            case g:
              a = ($ - f) / 864e5;
              break;
            case m:
              a = $ / C;
              break;
            case d:
              a = $ / D;
              break;
            case b:
              a = $ / M;
              break;
            default:
              a = $;
          }
          return e ? a : u.a(a);
        }, n.daysInMonth = function() {
          return this.endOf(v).$D;
        }, n.$locale = function() {
          return T[this.$L];
        }, n.locale = function(t, r) {
          if (!t) return this.$L;
          var e = this.clone(), a = L(t, r, !0);
          return a && (e.$L = a), e;
        }, n.clone = function() {
          return u.w(this.$d, this);
        }, n.toDate = function() {
          return new Date(this.valueOf());
        }, n.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, n.toISOString = function() {
          return this.$d.toISOString();
        }, n.toString = function() {
          return this.$d.toUTCString();
        }, s;
      })(), z = N.prototype;
      return l.prototype = z, [["$ms", _], ["$s", b], ["$m", d], ["$H", m], ["$W", g], ["$M", v], ["$y", w], ["$D", F]].forEach((function(s) {
        z[s[1]] = function(n) {
          return this.$g(n, s[0], s[1]);
        };
      })), l.extend = function(s, n) {
        return s.$i || (s(n, N, l), s.$i = !0), l;
      }, l.locale = L, l.isDayjs = I, l.unix = function(s) {
        return l(1e3 * s);
      }, l.en = T[V], l.Ls = T, l.p = {}, l;
    }));
  })(A)), A.exports;
}
var dt = ot();
const ct = /* @__PURE__ */ it(dt), lt = { class: "ti-date-range-container" }, ft = /* @__PURE__ */ et({
  __name: "index",
  props: {
    startModel: {
      type: String,
      default: ""
    },
    endModel: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    startDisabledDateFn: {
      type: Function,
      default: (h) => h.getTime() < Date.now()
    },
    endDisabledDateFn: {
      type: Function,
      default: null
    }
  },
  emits: ["update:startModel", "update:endModel", "startChange", "endChange"],
  setup(h, { emit: B }) {
    const M = h, D = B, C = E({
      get() {
        return M.startModel;
      },
      set(d) {
        D("update:startModel", d), d ? d > M.endModel && D("update:endModel", ct(d)) : D("update:endModel", ""), D("startChange", {
          startTime: d,
          endTime: _.value
        });
      }
    }), _ = E({
      get() {
        return M.endModel;
      },
      set(d) {
        D("update:endModel", d), D("endChange", {
          startTime: C.value,
          endTime: d
        });
      }
    }), b = E(() => M.endDisabledDateFn ? M.endDisabledDateFn : (d) => {
      if (!M.startModel)
        return M.startDisabledDateFn(d);
      const m = new Date(M.startModel).getTime();
      return d.getTime() < (isNaN(m) ? Date.now() : m);
    });
    return (d, m) => {
      const g = nt("el-date-picker");
      return st(), rt("div", lt, [
        at(" 日期范围选择 "),
        P(g, Q({ disabled: h.disabled }, d.$attrs.startOptions, {
          modelValue: C.value,
          "onUpdate:modelValue": m[0] || (m[0] = (S) => C.value = S),
          class: "w-[240px] mr-[4px]",
          "disabled-date": h.startDisabledDateFn
        }), null, 16, ["disabled", "modelValue", "disabled-date"]),
        P(g, Q({ disabled: h.disabled }, d.$attrs.endOptions, {
          modelValue: _.value,
          "onUpdate:modelValue": m[1] || (m[1] = (S) => _.value = S),
          class: "w-[240px]",
          "disabled-date": b.value
        }), null, 16, ["disabled", "modelValue", "disabled-date"])
      ]);
    };
  }
}), $t = {
  install(h) {
    h.component("ti-date-range", ft);
  }
};
export {
  $t as default
};
