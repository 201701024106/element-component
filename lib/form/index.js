import { defineComponent as Gt, ref as Bt, reactive as Kt, onMounted as Jt, nextTick as Dt, watch as Wt, resolveComponent as Qt, createElementBlock as mt, openBlock as rt, createVNode as wt, mergeProps as Ot, withCtx as Tt, Fragment as Ft, renderList as $t, createCommentVNode as Rt, createBlock as Pt, resolveDynamicComponent as Ut, renderSlot as Xt } from "vue";
function Zt(ot) {
  return ot && ot.__esModule && Object.prototype.hasOwnProperty.call(ot, "default") ? ot.default : ot;
}
var bt = { exports: {} }, zt;
function kt() {
  return zt || (zt = 1, (function(ot, Yt) {
    (function(n, t) {
      ot.exports = t();
    })(window, function() {
      return (
        /******/
        (function(f) {
          var n = {};
          function t(e) {
            if (n[e])
              return n[e].exports;
            var a = n[e] = {
              /******/
              i: e,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return f[e].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
          }
          return t.m = f, t.c = n, t.d = function(e, a, r) {
            t.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: r });
          }, t.r = function(e) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
          }, t.t = function(e, a) {
            if (a & 1 && (e = t(e)), a & 8 || a & 4 && typeof e == "object" && e && e.__esModule) return e;
            var r = /* @__PURE__ */ Object.create(null);
            if (t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), a & 2 && typeof e != "string") for (var o in e) t.d(r, o, (function(v) {
              return e[v];
            }).bind(null, o));
            return r;
          }, t.n = function(e) {
            var a = e && e.__esModule ? (
              /******/
              function() {
                return e.default;
              }
            ) : (
              /******/
              function() {
                return e;
              }
            );
            return t.d(a, "a", a), a;
          }, t.o = function(e, a) {
            return Object.prototype.hasOwnProperty.call(e, a);
          }, t.p = "", t(t.s = 141);
        })([
          /* 0 */
          /***/
          (function(f, n) {
            function t(e) {
              return e && e.__esModule ? e : {
                default: e
              };
            }
            f.exports = t;
          }),
          /* 1 */
          /***/
          (function(f, n, t) {
            f.exports = t(142);
          }),
          /* 2 */
          /***/
          (function(f, n, t) {
            t.r(n), t.d(n, "__extends", function() {
              return a;
            }), t.d(n, "__assign", function() {
              return r;
            }), t.d(n, "__rest", function() {
              return o;
            }), t.d(n, "__decorate", function() {
              return v;
            }), t.d(n, "__param", function() {
              return A;
            }), t.d(n, "__metadata", function() {
              return c;
            }), t.d(n, "__awaiter", function() {
              return g;
            }), t.d(n, "__generator", function() {
              return s;
            }), t.d(n, "__createBinding", function() {
              return i;
            }), t.d(n, "__exportStar", function() {
              return u;
            }), t.d(n, "__values", function() {
              return l;
            }), t.d(n, "__read", function() {
              return p;
            }), t.d(n, "__spread", function() {
              return d;
            }), t.d(n, "__spreadArrays", function() {
              return h;
            }), t.d(n, "__spreadArray", function() {
              return m;
            }), t.d(n, "__await", function() {
              return y;
            }), t.d(n, "__asyncGenerator", function() {
              return x;
            }), t.d(n, "__asyncDelegator", function() {
              return S;
            }), t.d(n, "__asyncValues", function() {
              return T;
            }), t.d(n, "__makeTemplateObject", function() {
              return R;
            }), t.d(n, "__importStar", function() {
              return E;
            }), t.d(n, "__importDefault", function() {
              return D;
            }), t.d(n, "__classPrivateFieldGet", function() {
              return P;
            }), t.d(n, "__classPrivateFieldSet", function() {
              return M;
            });
            var e = function(I, N) {
              return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(B, F) {
                B.__proto__ = F;
              } || function(B, F) {
                for (var O in F) Object.prototype.hasOwnProperty.call(F, O) && (B[O] = F[O]);
              }, e(I, N);
            };
            function a(I, N) {
              if (typeof N != "function" && N !== null)
                throw new TypeError("Class extends value " + String(N) + " is not a constructor or null");
              e(I, N);
              function B() {
                this.constructor = I;
              }
              I.prototype = N === null ? Object.create(N) : (B.prototype = N.prototype, new B());
            }
            var r = function() {
              return r = Object.assign || function(N) {
                for (var B, F = 1, O = arguments.length; F < O; F++) {
                  B = arguments[F];
                  for (var H in B) Object.prototype.hasOwnProperty.call(B, H) && (N[H] = B[H]);
                }
                return N;
              }, r.apply(this, arguments);
            };
            function o(I, N) {
              var B = {};
              for (var F in I) Object.prototype.hasOwnProperty.call(I, F) && N.indexOf(F) < 0 && (B[F] = I[F]);
              if (I != null && typeof Object.getOwnPropertySymbols == "function")
                for (var O = 0, F = Object.getOwnPropertySymbols(I); O < F.length; O++)
                  N.indexOf(F[O]) < 0 && Object.prototype.propertyIsEnumerable.call(I, F[O]) && (B[F[O]] = I[F[O]]);
              return B;
            }
            function v(I, N, B, F) {
              var O = arguments.length, H = O < 3 ? N : F === null ? F = Object.getOwnPropertyDescriptor(N, B) : F, L;
              if (typeof Reflect == "object" && typeof Reflect.decorate == "function") H = Reflect.decorate(I, N, B, F);
              else for (var U = I.length - 1; U >= 0; U--) (L = I[U]) && (H = (O < 3 ? L(H) : O > 3 ? L(N, B, H) : L(N, B)) || H);
              return O > 3 && H && Object.defineProperty(N, B, H), H;
            }
            function A(I, N) {
              return function(B, F) {
                N(B, F, I);
              };
            }
            function c(I, N) {
              if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(I, N);
            }
            function g(I, N, B, F) {
              function O(H) {
                return H instanceof B ? H : new B(function(L) {
                  L(H);
                });
              }
              return new (B || (B = Promise))(function(H, L) {
                function U(K) {
                  try {
                    j(F.next(K));
                  } catch (V) {
                    L(V);
                  }
                }
                function z(K) {
                  try {
                    j(F.throw(K));
                  } catch (V) {
                    L(V);
                  }
                }
                function j(K) {
                  K.done ? H(K.value) : O(K.value).then(U, z);
                }
                j((F = F.apply(I, N || [])).next());
              });
            }
            function s(I, N) {
              var B = { label: 0, sent: function() {
                if (H[0] & 1) throw H[1];
                return H[1];
              }, trys: [], ops: [] }, F, O, H, L;
              return L = { next: U(0), throw: U(1), return: U(2) }, typeof Symbol == "function" && (L[Symbol.iterator] = function() {
                return this;
              }), L;
              function U(j) {
                return function(K) {
                  return z([j, K]);
                };
              }
              function z(j) {
                if (F) throw new TypeError("Generator is already executing.");
                for (; B; ) try {
                  if (F = 1, O && (H = j[0] & 2 ? O.return : j[0] ? O.throw || ((H = O.return) && H.call(O), 0) : O.next) && !(H = H.call(O, j[1])).done) return H;
                  switch (O = 0, H && (j = [j[0] & 2, H.value]), j[0]) {
                    case 0:
                    case 1:
                      H = j;
                      break;
                    case 4:
                      return B.label++, { value: j[1], done: !1 };
                    case 5:
                      B.label++, O = j[1], j = [0];
                      continue;
                    case 7:
                      j = B.ops.pop(), B.trys.pop();
                      continue;
                    default:
                      if (H = B.trys, !(H = H.length > 0 && H[H.length - 1]) && (j[0] === 6 || j[0] === 2)) {
                        B = 0;
                        continue;
                      }
                      if (j[0] === 3 && (!H || j[1] > H[0] && j[1] < H[3])) {
                        B.label = j[1];
                        break;
                      }
                      if (j[0] === 6 && B.label < H[1]) {
                        B.label = H[1], H = j;
                        break;
                      }
                      if (H && B.label < H[2]) {
                        B.label = H[2], B.ops.push(j);
                        break;
                      }
                      H[2] && B.ops.pop(), B.trys.pop();
                      continue;
                  }
                  j = N.call(I, B);
                } catch (K) {
                  j = [6, K], O = 0;
                } finally {
                  F = H = 0;
                }
                if (j[0] & 5) throw j[1];
                return { value: j[0] ? j[1] : void 0, done: !0 };
              }
            }
            var i = Object.create ? (function(I, N, B, F) {
              F === void 0 && (F = B), Object.defineProperty(I, F, { enumerable: !0, get: function() {
                return N[B];
              } });
            }) : (function(I, N, B, F) {
              F === void 0 && (F = B), I[F] = N[B];
            });
            function u(I, N) {
              for (var B in I) B !== "default" && !Object.prototype.hasOwnProperty.call(N, B) && i(N, I, B);
            }
            function l(I) {
              var N = typeof Symbol == "function" && Symbol.iterator, B = N && I[N], F = 0;
              if (B) return B.call(I);
              if (I && typeof I.length == "number") return {
                next: function() {
                  return I && F >= I.length && (I = void 0), { value: I && I[F++], done: !I };
                }
              };
              throw new TypeError(N ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function p(I, N) {
              var B = typeof Symbol == "function" && I[Symbol.iterator];
              if (!B) return I;
              var F = B.call(I), O, H = [], L;
              try {
                for (; (N === void 0 || N-- > 0) && !(O = F.next()).done; ) H.push(O.value);
              } catch (U) {
                L = { error: U };
              } finally {
                try {
                  O && !O.done && (B = F.return) && B.call(F);
                } finally {
                  if (L) throw L.error;
                }
              }
              return H;
            }
            function d() {
              for (var I = [], N = 0; N < arguments.length; N++)
                I = I.concat(p(arguments[N]));
              return I;
            }
            function h() {
              for (var I = 0, N = 0, B = arguments.length; N < B; N++) I += arguments[N].length;
              for (var F = Array(I), O = 0, N = 0; N < B; N++)
                for (var H = arguments[N], L = 0, U = H.length; L < U; L++, O++)
                  F[O] = H[L];
              return F;
            }
            function m(I, N) {
              for (var B = 0, F = N.length, O = I.length; B < F; B++, O++)
                I[O] = N[B];
              return I;
            }
            function y(I) {
              return this instanceof y ? (this.v = I, this) : new y(I);
            }
            function x(I, N, B) {
              if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
              var F = B.apply(I, N || []), O, H = [];
              return O = {}, L("next"), L("throw"), L("return"), O[Symbol.asyncIterator] = function() {
                return this;
              }, O;
              function L(Q) {
                F[Q] && (O[Q] = function($) {
                  return new Promise(function(G, X) {
                    H.push([Q, $, G, X]) > 1 || U(Q, $);
                  });
                });
              }
              function U(Q, $) {
                try {
                  z(F[Q]($));
                } catch (G) {
                  V(H[0][3], G);
                }
              }
              function z(Q) {
                Q.value instanceof y ? Promise.resolve(Q.value.v).then(j, K) : V(H[0][2], Q);
              }
              function j(Q) {
                U("next", Q);
              }
              function K(Q) {
                U("throw", Q);
              }
              function V(Q, $) {
                Q($), H.shift(), H.length && U(H[0][0], H[0][1]);
              }
            }
            function S(I) {
              var N, B;
              return N = {}, F("next"), F("throw", function(O) {
                throw O;
              }), F("return"), N[Symbol.iterator] = function() {
                return this;
              }, N;
              function F(O, H) {
                N[O] = I[O] ? function(L) {
                  return (B = !B) ? { value: y(I[O](L)), done: O === "return" } : H ? H(L) : L;
                } : H;
              }
            }
            function T(I) {
              if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
              var N = I[Symbol.asyncIterator], B;
              return N ? N.call(I) : (I = typeof l == "function" ? l(I) : I[Symbol.iterator](), B = {}, F("next"), F("throw"), F("return"), B[Symbol.asyncIterator] = function() {
                return this;
              }, B);
              function F(H) {
                B[H] = I[H] && function(L) {
                  return new Promise(function(U, z) {
                    L = I[H](L), O(U, z, L.done, L.value);
                  });
                };
              }
              function O(H, L, U, z) {
                Promise.resolve(z).then(function(j) {
                  H({ value: j, done: U });
                }, L);
              }
            }
            function R(I, N) {
              return Object.defineProperty ? Object.defineProperty(I, "raw", { value: N }) : I.raw = N, I;
            }
            var C = Object.create ? (function(I, N) {
              Object.defineProperty(I, "default", { enumerable: !0, value: N });
            }) : function(I, N) {
              I.default = N;
            };
            function E(I) {
              if (I && I.__esModule) return I;
              var N = {};
              if (I != null) for (var B in I) B !== "default" && Object.prototype.hasOwnProperty.call(I, B) && i(N, I, B);
              return C(N, I), N;
            }
            function D(I) {
              return I && I.__esModule ? I : { default: I };
            }
            function P(I, N) {
              if (!N.has(I))
                throw new TypeError("attempted to get private field on non-instance");
              return N.get(I);
            }
            function M(I, N, B) {
              if (!N.has(I))
                throw new TypeError("attempted to set private field on non-instance");
              return N.set(I, B), B;
            }
          }),
          /* 3 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(89)), o = e(t(4)), v = e(t(26)), A = e(t(17)), c = e(t(121)), g = e(t(27)), s = e(t(91)), i = e(t(70)), u = e(t(28)), l = e(t(57));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.DomElement = void 0;
            var p = t(2), d = t(6), h = [];
            function m(C) {
              var E = document.createElement("div");
              E.innerHTML = C;
              var D = E.children;
              return d.toArray(D);
            }
            function y(C) {
              return C ? C instanceof HTMLCollection || C instanceof NodeList : !1;
            }
            function x(C) {
              var E = document.querySelectorAll(C);
              return d.toArray(E);
            }
            function S(C) {
              var E = [], D = [];
              return (0, r.default)(C) ? E = C : E = C.split(";"), (0, o.default)(E).call(E, function(P) {
                var M, I = (0, v.default)(M = P.split(":")).call(M, function(N) {
                  return (0, A.default)(N).call(N);
                });
                I.length === 2 && D.push(I[0] + ":" + I[1]);
              }), D;
            }
            var T = (
              /** @class */
              (function() {
                function C(E) {
                  if (this.elems = [], this.length = this.elems.length, this.dataSource = new c.default(), !!E) {
                    if (E instanceof C)
                      return E;
                    var D = [], P = E instanceof Node ? E.nodeType : -1;
                    if (this.selector = E, P === 1 || P === 9)
                      D = [E];
                    else if (y(E))
                      D = d.toArray(E);
                    else if (E instanceof Array)
                      D = E;
                    else if (typeof E == "string") {
                      var M, I = (0, A.default)(M = E.replace(`/
/mg`, "")).call(M);
                      (0, g.default)(I).call(I, "<") === 0 ? D = m(I) : D = x(I);
                    }
                    var N = D.length;
                    if (!N)
                      return this;
                    for (var B = 0; B < N; B++)
                      this.elems.push(D[B]);
                    this.length = N;
                  }
                }
                return (0, a.default)(C.prototype, "id", {
                  /**
                   * 获取元素 id
                   */
                  get: function() {
                    return this.elems[0].id;
                  },
                  enumerable: !1,
                  configurable: !0
                }), C.prototype.forEach = function(E) {
                  for (var D = 0; D < this.length; D++) {
                    var P = this.elems[D], M = E.call(P, P, D);
                    if (M === !1)
                      break;
                  }
                  return this;
                }, C.prototype.clone = function(E) {
                  var D;
                  E === void 0 && (E = !1);
                  var P = [];
                  return (0, o.default)(D = this.elems).call(D, function(M) {
                    P.push(M.cloneNode(!!E));
                  }), R(P);
                }, C.prototype.get = function(E) {
                  E === void 0 && (E = 0);
                  var D = this.length;
                  return E >= D && (E = E % D), R(this.elems[E]);
                }, C.prototype.first = function() {
                  return this.get(0);
                }, C.prototype.last = function() {
                  var E = this.length;
                  return this.get(E - 1);
                }, C.prototype.on = function(E, D, P) {
                  var M;
                  return E ? (typeof D == "function" && (P = D, D = ""), (0, o.default)(M = this).call(M, function(I) {
                    if (!D) {
                      I.addEventListener(E, P);
                      return;
                    }
                    var N = function(F) {
                      var O = F.target;
                      O.matches(D) && P.call(O, F);
                    };
                    I.addEventListener(E, N), h.push({
                      elem: I,
                      selector: D,
                      fn: P,
                      agentFn: N
                    });
                  })) : this;
                }, C.prototype.off = function(E, D, P) {
                  var M;
                  return E ? (typeof D == "function" && (P = D, D = ""), (0, o.default)(M = this).call(M, function(I) {
                    if (D) {
                      for (var N = -1, B = 0; B < h.length; B++) {
                        var F = h[B];
                        if (F.selector === D && F.fn === P && F.elem === I) {
                          N = B;
                          break;
                        }
                      }
                      if (N !== -1) {
                        var O = (0, s.default)(h).call(h, N, 1)[0].agentFn;
                        I.removeEventListener(E, O);
                      }
                    } else
                      I.removeEventListener(E, P);
                  })) : this;
                }, C.prototype.attr = function(E, D) {
                  var P;
                  return D == null ? this.elems[0].getAttribute(E) || "" : (0, o.default)(P = this).call(P, function(M) {
                    M.setAttribute(E, D);
                  });
                }, C.prototype.removeAttr = function(E) {
                  var D;
                  (0, o.default)(D = this).call(D, function(P) {
                    P.removeAttribute(E);
                  });
                }, C.prototype.addClass = function(E) {
                  var D;
                  return E ? (0, o.default)(D = this).call(D, function(P) {
                    if (P.className) {
                      var M = P.className.split(/\s/);
                      M = (0, i.default)(M).call(M, function(I) {
                        return !!(0, A.default)(I).call(I);
                      }), (0, g.default)(M).call(M, E) < 0 && M.push(E), P.className = M.join(" ");
                    } else
                      P.className = E;
                  }) : this;
                }, C.prototype.removeClass = function(E) {
                  var D;
                  return E ? (0, o.default)(D = this).call(D, function(P) {
                    if (P.className) {
                      var M = P.className.split(/\s/);
                      M = (0, i.default)(M).call(M, function(I) {
                        return I = (0, A.default)(I).call(I), !(!I || I === E);
                      }), P.className = M.join(" ");
                    }
                  }) : this;
                }, C.prototype.hasClass = function(E) {
                  if (!E)
                    return !1;
                  var D = this.elems[0];
                  if (!D.className)
                    return !1;
                  var P = D.className.split(/\s/);
                  return (0, u.default)(P).call(P, E);
                }, C.prototype.css = function(E, D) {
                  var P, M;
                  return D == "" ? M = "" : M = E + ":" + D + ";", (0, o.default)(P = this).call(P, function(I) {
                    var N, B = (0, A.default)(N = I.getAttribute("style") || "").call(N);
                    if (B) {
                      var F = S(B);
                      F = (0, v.default)(F).call(F, function(O) {
                        return (0, g.default)(O).call(O, E) === 0 ? M : O;
                      }), M != "" && (0, g.default)(F).call(F, M) < 0 && F.push(M), M == "" && (F = S(F)), I.setAttribute("style", F.join("; "));
                    } else
                      I.setAttribute("style", M);
                  });
                }, C.prototype.getBoundingClientRect = function() {
                  var E = this.elems[0];
                  return E.getBoundingClientRect();
                }, C.prototype.show = function() {
                  return this.css("display", "block");
                }, C.prototype.hide = function() {
                  return this.css("display", "none");
                }, C.prototype.children = function() {
                  var E = this.elems[0];
                  return E ? R(E.children) : null;
                }, C.prototype.childNodes = function() {
                  var E = this.elems[0];
                  return E ? R(E.childNodes) : null;
                }, C.prototype.replaceChildAll = function(E) {
                  for (var D = this.getNode(), P = this.elems[0]; P.hasChildNodes(); )
                    D.firstChild && P.removeChild(D.firstChild);
                  this.append(E);
                }, C.prototype.append = function(E) {
                  var D;
                  return (0, o.default)(D = this).call(D, function(P) {
                    (0, o.default)(E).call(E, function(M) {
                      P.appendChild(M);
                    });
                  });
                }, C.prototype.remove = function() {
                  var E;
                  return (0, o.default)(E = this).call(E, function(D) {
                    if (D.remove)
                      D.remove();
                    else {
                      var P = D.parentElement;
                      P && P.removeChild(D);
                    }
                  });
                }, C.prototype.isContain = function(E) {
                  var D = this.elems[0], P = E.elems[0];
                  return D.contains(P);
                }, C.prototype.getNodeName = function() {
                  var E = this.elems[0];
                  return E.nodeName;
                }, C.prototype.getNode = function(E) {
                  E === void 0 && (E = 0);
                  var D;
                  return D = this.elems[E], D;
                }, C.prototype.find = function(E) {
                  var D = this.elems[0];
                  return R(D.querySelectorAll(E));
                }, C.prototype.text = function(E) {
                  if (E) {
                    var P;
                    return (0, o.default)(P = this).call(P, function(M) {
                      M.innerHTML = E;
                    });
                  } else {
                    var D = this.elems[0];
                    return D.innerHTML.replace(/<[^>]+>/g, function() {
                      return "";
                    });
                  }
                }, C.prototype.html = function(E) {
                  var D = this.elems[0];
                  return E ? (D.innerHTML = E, this) : D.innerHTML;
                }, C.prototype.val = function() {
                  var E, D = this.elems[0];
                  return (0, A.default)(E = D.value).call(E);
                }, C.prototype.focus = function() {
                  var E;
                  return (0, o.default)(E = this).call(E, function(D) {
                    D.focus();
                  });
                }, C.prototype.prev = function() {
                  var E = this.elems[0];
                  return R(E.previousElementSibling);
                }, C.prototype.next = function() {
                  var E = this.elems[0];
                  return R(E.nextElementSibling);
                }, C.prototype.getNextSibling = function() {
                  var E = this.elems[0];
                  return R(E.nextSibling);
                }, C.prototype.parent = function() {
                  var E = this.elems[0];
                  return R(E.parentElement);
                }, C.prototype.parentUntil = function(E, D) {
                  var P = D || this.elems[0];
                  if (P.nodeName === "BODY")
                    return null;
                  var M = P.parentElement;
                  return M === null ? null : M.matches(E) ? R(M) : this.parentUntil(E, M);
                }, C.prototype.parentUntilEditor = function(E, D, P) {
                  var M = P || this.elems[0];
                  if (R(M).equal(D.$textContainerElem) || R(M).equal(D.$toolbarElem))
                    return null;
                  var I = M.parentElement;
                  return I === null ? null : I.matches(E) ? R(I) : this.parentUntilEditor(E, D, I);
                }, C.prototype.equal = function(E) {
                  return E instanceof C ? this.elems[0] === E.elems[0] : E instanceof HTMLElement ? this.elems[0] === E : !1;
                }, C.prototype.insertBefore = function(E) {
                  var D, P = R(E), M = P.elems[0];
                  return M ? (0, o.default)(D = this).call(D, function(I) {
                    var N = M.parentNode;
                    N?.insertBefore(I, M);
                  }) : this;
                }, C.prototype.insertAfter = function(E) {
                  var D, P = R(E), M = P.elems[0], I = M && M.nextSibling;
                  return M ? (0, o.default)(D = this).call(D, function(N) {
                    var B = M.parentNode;
                    I ? B.insertBefore(N, I) : B.appendChild(N);
                  }) : this;
                }, C.prototype.data = function(E, D) {
                  if (D != null)
                    this.dataSource.set(E, D);
                  else
                    return this.dataSource.get(E);
                }, C.prototype.getNodeTop = function(E) {
                  if (this.length < 1)
                    return this;
                  var D = this.parent();
                  return E.$textElem.equal(this) || E.$textElem.equal(D) ? this : (D.prior = this, D.getNodeTop(E));
                }, C.prototype.getOffsetData = function() {
                  var E = this.elems[0];
                  return {
                    top: E.offsetTop,
                    left: E.offsetLeft,
                    width: E.offsetWidth,
                    height: E.offsetHeight,
                    parent: E.offsetParent
                  };
                }, C.prototype.scrollTop = function(E) {
                  var D = this.elems[0];
                  D.scrollTo({
                    top: E
                  });
                }, C;
              })()
            );
            n.DomElement = T;
            function R() {
              for (var C = [], E = 0; E < arguments.length; E++)
                C[E] = arguments[E];
              return new ((0, l.default)(T).apply(T, p.__spreadArrays([void 0], C)))();
            }
            n.default = R;
          }),
          /* 4 */
          /***/
          (function(f, n, t) {
            f.exports = t(180);
          }),
          /* 5 */
          /***/
          (function(f, n, t) {
            var e = t(8), a = t(71).f, r = t(101), o = t(9), v = t(40), A = t(19), c = t(16), g = function(s) {
              var i = function(u, l, p) {
                if (this instanceof s) {
                  switch (arguments.length) {
                    case 0:
                      return new s();
                    case 1:
                      return new s(u);
                    case 2:
                      return new s(u, l);
                  }
                  return new s(u, l, p);
                }
                return s.apply(this, arguments);
              };
              return i.prototype = s.prototype, i;
            };
            f.exports = function(s, i) {
              var u = s.target, l = s.global, p = s.stat, d = s.proto, h = l ? e : p ? e[u] : (e[u] || {}).prototype, m = l ? o : o[u] || (o[u] = {}), y = m.prototype, x, S, T, R, C, E, D, P, M;
              for (R in i)
                x = r(l ? R : u + (p ? "." : "#") + R, s.forced), S = !x && h && c(h, R), E = m[R], S && (s.noTargetGet ? (M = a(h, R), D = M && M.value) : D = h[R]), C = S && D ? D : i[R], !(S && typeof E == typeof C) && (s.bind && S ? P = v(C, e) : s.wrap && S ? P = g(C) : d && typeof C == "function" ? P = v(Function.call, C) : P = C, (s.sham || C && C.sham || E && E.sham) && A(P, "sham", !0), m[R] = P, d && (T = u + "Prototype", c(o, T) || A(o, T, {}), o[T][R] = C, s.real && y && !y[R] && A(y, R, C)));
            };
          }),
          /* 6 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(92)), r = e(t(1)), o = e(t(256)), v = e(t(45)), A = e(t(46)), c = e(t(89)), g = e(t(26));
            (0, r.default)(n, "__esModule", {
              value: !0
            }), n.hexToRgb = n.getRandomCode = n.toArray = n.deepClone = n.isFunction = n.debounce = n.throttle = n.arrForEach = n.forEach = n.replaceSpecialSymbol = n.replaceHtmlSymbol = n.getRandom = n.UA = void 0;
            var s = t(2), i = (
              /** @class */
              (function() {
                function E() {
                  this._ua = navigator.userAgent;
                  var D = this._ua.match(/(Edge?)\/(\d+)/);
                  this.isOldEdge = !!(D && D[1] == "Edge" && (0, o.default)(D[2]) < 19), this.isFirefox = !!(/Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua));
                }
                return E.prototype.isIE = function() {
                  return "ActiveXObject" in window;
                }, E.prototype.isWebkit = function() {
                  return /webkit/i.test(this._ua);
                }, E;
              })()
            );
            n.UA = new i();
            function u(E) {
              var D;
              return E === void 0 && (E = ""), E + (0, v.default)(D = Math.random().toString()).call(D, 2);
            }
            n.getRandom = u;
            function l(E) {
              return E.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
            }
            n.replaceHtmlSymbol = l;
            function p(E) {
              return E.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
            }
            n.replaceSpecialSymbol = p;
            function d(E, D) {
              for (var P in E)
                if (Object.prototype.hasOwnProperty.call(E, P)) {
                  var M = D(P, E[P]);
                  if (M === !1)
                    break;
                }
            }
            n.forEach = d;
            function h(E, D) {
              var P, M, I, N = E.length || 0;
              for (P = 0; P < N && (M = E[P], I = D.call(E, M, P), I !== !1); P++)
                ;
            }
            n.arrForEach = h;
            function m(E, D) {
              D === void 0 && (D = 200);
              var P = !1;
              return function() {
                for (var M = this, I = [], N = 0; N < arguments.length; N++)
                  I[N] = arguments[N];
                P || (P = !0, (0, A.default)(function() {
                  P = !1, E.call.apply(E, s.__spreadArrays([M], I));
                }, D));
              };
            }
            n.throttle = m;
            function y(E, D) {
              D === void 0 && (D = 200);
              var P = 0;
              return function() {
                for (var M = this, I = [], N = 0; N < arguments.length; N++)
                  I[N] = arguments[N];
                P && window.clearTimeout(P), P = (0, A.default)(function() {
                  P = 0, E.call.apply(E, s.__spreadArrays([M], I));
                }, D);
              };
            }
            n.debounce = y;
            function x(E) {
              return typeof E == "function";
            }
            n.isFunction = x;
            function S(E) {
              if ((0, a.default)(E) !== "object" || typeof E == "function" || E === null)
                return E;
              var D;
              (0, c.default)(E) && (D = []), (0, c.default)(E) || (D = {});
              for (var P in E)
                Object.prototype.hasOwnProperty.call(E, P) && (D[P] = S(E[P]));
              return D;
            }
            n.deepClone = S;
            function T(E) {
              return (0, v.default)(Array.prototype).call(E);
            }
            n.toArray = T;
            function R() {
              var E;
              return (0, v.default)(E = Math.random().toString(36)).call(E, -5);
            }
            n.getRandomCode = R;
            function C(E) {
              var D = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(E);
              if (D == null) return null;
              var P = (0, g.default)(D).call(D, function(B) {
                return (0, o.default)(B, 16);
              }), M = P[1], I = P[2], N = P[3];
              return "rgb(" + M + ", " + I + ", " + N + ")";
            }
            n.hexToRgb = C;
          }),
          /* 7 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.EMPTY_P_REGEX = n.EMPTY_P_LAST_REGEX = n.EMPTY_P = n.urlRegex = n.EMPTY_FN = void 0;
            function r() {
            }
            n.EMPTY_FN = r, n.urlRegex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/g, n.EMPTY_P = '<p data-we-empty-p=""><br></p>', n.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim, n.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;
          }),
          /* 8 */
          /***/
          (function(f, n, t) {
            (function(e) {
              var a = function(r) {
                return r && r.Math == Math && r;
              };
              f.exports = // eslint-disable-next-line no-undef
              a(typeof globalThis == "object" && globalThis) || a(typeof window == "object" && window) || a(typeof self == "object" && self) || a(typeof e == "object" && e) || // eslint-disable-next-line no-new-func
              Function("return this")();
            }).call(this, t(145));
          }),
          /* 9 */
          /***/
          (function(f, n) {
            f.exports = {};
          }),
          /* 10 */
          /***/
          (function(f, n, t) {
            var e = t(8), a = t(74), r = t(16), o = t(64), v = t(76), A = t(106), c = a("wks"), g = e.Symbol, s = A ? g : g && g.withoutSetter || o;
            f.exports = function(i) {
              return r(c, i) || (v && r(g, i) ? c[i] = g[i] : c[i] = s("Symbol." + i)), c[i];
            };
          }),
          /* 11 */
          /***/
          (function(f, n) {
            f.exports = function(t) {
              try {
                return !!t();
              } catch {
                return !0;
              }
            };
          }),
          /* 12 */
          /***/
          (function(f, n, t) {
            var e = t(9), a = t(16), r = t(93), o = t(18).f;
            f.exports = function(v) {
              var A = e.Symbol || (e.Symbol = {});
              a(A, v) || o(A, v, {
                value: r.f(v)
              });
            };
          }),
          /* 13 */
          /***/
          (function(f, n) {
            f.exports = function(t) {
              return typeof t == "object" ? t !== null : typeof t == "function";
            };
          }),
          /* 14 */
          /***/
          (function(f, n, t) {
            var e = t(11);
            f.exports = !e(function() {
              return Object.defineProperty({}, 1, { get: function() {
                return 7;
              } })[1] != 7;
            });
          }),
          /* 15 */
          /***/
          (function(f, n, t) {
            var e = t(9);
            f.exports = function(a) {
              return e[a + "Prototype"];
            };
          }),
          /* 16 */
          /***/
          (function(f, n) {
            var t = {}.hasOwnProperty;
            f.exports = function(e, a) {
              return t.call(e, a);
            };
          }),
          /* 17 */
          /***/
          (function(f, n, t) {
            f.exports = t(192);
          }),
          /* 18 */
          /***/
          (function(f, n, t) {
            var e = t(14), a = t(100), r = t(25), o = t(60), v = Object.defineProperty;
            n.f = e ? v : function(c, g, s) {
              if (r(c), g = o(g, !0), r(s), a) try {
                return v(c, g, s);
              } catch {
              }
              if ("get" in s || "set" in s) throw TypeError("Accessors not supported");
              return "value" in s && (c[g] = s.value), c;
            };
          }),
          /* 19 */
          /***/
          (function(f, n, t) {
            var e = t(14), a = t(18), r = t(48);
            f.exports = e ? function(o, v, A) {
              return a.f(o, v, r(1, A));
            } : function(o, v, A) {
              return o[v] = A, o;
            };
          }),
          /* 20 */
          /***/
          (function(f, n, t) {
            var e = /* @__PURE__ */ (function() {
              var h;
              return function() {
                return typeof h > "u" && (h = !!(window && document && document.all && !window.atob)), h;
              };
            })(), a = /* @__PURE__ */ (function() {
              var h = {};
              return function(y) {
                if (typeof h[y] > "u") {
                  var x = document.querySelector(y);
                  if (window.HTMLIFrameElement && x instanceof window.HTMLIFrameElement)
                    try {
                      x = x.contentDocument.head;
                    } catch {
                      x = null;
                    }
                  h[y] = x;
                }
                return h[y];
              };
            })(), r = [];
            function o(d) {
              for (var h = -1, m = 0; m < r.length; m++)
                if (r[m].identifier === d) {
                  h = m;
                  break;
                }
              return h;
            }
            function v(d, h) {
              for (var m = {}, y = [], x = 0; x < d.length; x++) {
                var S = d[x], T = h.base ? S[0] + h.base : S[0], R = m[T] || 0, C = "".concat(T, " ").concat(R);
                m[T] = R + 1;
                var E = o(C), D = {
                  css: S[1],
                  media: S[2],
                  sourceMap: S[3]
                };
                E !== -1 ? (r[E].references++, r[E].updater(D)) : r.push({
                  identifier: C,
                  updater: p(D, h),
                  references: 1
                }), y.push(C);
              }
              return y;
            }
            function A(d) {
              var h = document.createElement("style"), m = d.attributes || {};
              if (typeof m.nonce > "u") {
                var y = t.nc;
                y && (m.nonce = y);
              }
              if (Object.keys(m).forEach(function(S) {
                h.setAttribute(S, m[S]);
              }), typeof d.insert == "function")
                d.insert(h);
              else {
                var x = a(d.insert || "head");
                if (!x)
                  throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                x.appendChild(h);
              }
              return h;
            }
            function c(d) {
              if (d.parentNode === null)
                return !1;
              d.parentNode.removeChild(d);
            }
            var g = /* @__PURE__ */ (function() {
              var h = [];
              return function(y, x) {
                return h[y] = x, h.filter(Boolean).join(`
`);
              };
            })();
            function s(d, h, m, y) {
              var x = m ? "" : y.media ? "@media ".concat(y.media, " {").concat(y.css, "}") : y.css;
              if (d.styleSheet)
                d.styleSheet.cssText = g(h, x);
              else {
                var S = document.createTextNode(x), T = d.childNodes;
                T[h] && d.removeChild(T[h]), T.length ? d.insertBefore(S, T[h]) : d.appendChild(S);
              }
            }
            function i(d, h, m) {
              var y = m.css, x = m.media, S = m.sourceMap;
              if (x ? d.setAttribute("media", x) : d.removeAttribute("media"), S && typeof btoa < "u" && (y += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(S)))), " */")), d.styleSheet)
                d.styleSheet.cssText = y;
              else {
                for (; d.firstChild; )
                  d.removeChild(d.firstChild);
                d.appendChild(document.createTextNode(y));
              }
            }
            var u = null, l = 0;
            function p(d, h) {
              var m, y, x;
              if (h.singleton) {
                var S = l++;
                m = u || (u = A(h)), y = s.bind(null, m, S, !1), x = s.bind(null, m, S, !0);
              } else
                m = A(h), y = i.bind(null, m, h), x = function() {
                  c(m);
                };
              return y(d), function(R) {
                if (R) {
                  if (R.css === d.css && R.media === d.media && R.sourceMap === d.sourceMap)
                    return;
                  y(d = R);
                } else
                  x();
              };
            }
            f.exports = function(d, h) {
              h = h || {}, !h.singleton && typeof h.singleton != "boolean" && (h.singleton = e()), d = d || [];
              var m = v(d, h);
              return function(x) {
                if (x = x || [], Object.prototype.toString.call(x) === "[object Array]") {
                  for (var S = 0; S < m.length; S++) {
                    var T = m[S], R = o(T);
                    r[R].references--;
                  }
                  for (var C = v(x, h), E = 0; E < m.length; E++) {
                    var D = m[E], P = o(D);
                    r[P].references === 0 && (r[P].updater(), r.splice(P, 1));
                  }
                  m = C;
                }
              };
            };
          }),
          /* 21 */
          /***/
          (function(f, n, t) {
            f.exports = function(r) {
              var o = [];
              return o.toString = function() {
                return this.map(function(A) {
                  var c = e(A, r);
                  return A[2] ? "@media ".concat(A[2], " {").concat(c, "}") : c;
                }).join("");
              }, o.i = function(v, A, c) {
                typeof v == "string" && (v = [[null, v, ""]]);
                var g = {};
                if (c)
                  for (var s = 0; s < this.length; s++) {
                    var i = this[s][0];
                    i != null && (g[i] = !0);
                  }
                for (var u = 0; u < v.length; u++) {
                  var l = [].concat(v[u]);
                  c && g[l[0]] || (A && (l[2] ? l[2] = "".concat(A, " and ").concat(l[2]) : l[2] = A), o.push(l));
                }
              }, o;
            };
            function e(r, o) {
              var v = r[1] || "", A = r[3];
              if (!A)
                return v;
              if (o && typeof btoa == "function") {
                var c = a(A), g = A.sources.map(function(s) {
                  return "/*# sourceURL=".concat(A.sourceRoot || "").concat(s, " */");
                });
                return [v].concat(g).concat([c]).join(`
`);
              }
              return [v].join(`
`);
            }
            function a(r) {
              var o = btoa(unescape(encodeURIComponent(JSON.stringify(r)))), v = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o);
              return "/*# ".concat(v, " */");
            }
          }),
          /* 22 */
          /***/
          (function(f, n, t) {
            var e = t(14), a = t(11), r = t(16), o = Object.defineProperty, v = {}, A = function(c) {
              throw c;
            };
            f.exports = function(c, g) {
              if (r(v, c)) return v[c];
              g || (g = {});
              var s = [][c], i = r(g, "ACCESSORS") ? g.ACCESSORS : !1, u = r(g, 0) ? g[0] : A, l = r(g, 1) ? g[1] : void 0;
              return v[c] = !!s && !a(function() {
                if (i && !e) return !0;
                var p = { length: -1 };
                i ? o(p, 1, { enumerable: !0, get: A }) : p[1] = 1, s.call(p, u, l);
              });
            };
          }),
          /* 23 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(95)), v = (
              /** @class */
              (function(A) {
                r.__extends(c, A);
                function c(g, s) {
                  return A.call(this, g, s) || this;
                }
                return c;
              })(o.default)
            );
            n.default = v;
          }),
          /* 24 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(46));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var v = t(2), A = v.__importDefault(t(3)), c = v.__importDefault(t(95)), g = v.__importDefault(t(134)), s = (
              /** @class */
              (function(i) {
                v.__extends(u, i);
                function u(l, p, d) {
                  var h = i.call(this, l, p) || this;
                  d.title = p.i18next.t("menus.dropListMenu." + d.title);
                  var m = p.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
                  if (m !== "" && d.type === "list") {
                    var y;
                    (0, r.default)(y = d.list).call(y, function(S) {
                      var T = S.$elem, R = A.default(T.children());
                      if (R.length > 0) {
                        var C = R?.getNodeName();
                        C && C === "I" && T.addClass(m);
                      }
                    });
                  }
                  var x = new g.default(h, d);
                  return h.dropList = x, l.on("click", function() {
                    var S;
                    p.selection.getRange() != null && (l.css("z-index", p.zIndex.get("menu")), (0, r.default)(S = p.txt.eventHooks.dropListMenuHoverEvents).call(S, function(T) {
                      return T();
                    }), x.show());
                  }).on("mouseleave", function() {
                    l.css("z-index", "auto"), x.hideTimeoutId = (0, o.default)(function() {
                      x.hide();
                    });
                  }), h;
                }
                return u;
              })(c.default)
            );
            n.default = s;
          }),
          /* 25 */
          /***/
          (function(f, n, t) {
            var e = t(13);
            f.exports = function(a) {
              if (!e(a))
                throw TypeError(String(a) + " is not an object");
              return a;
            };
          }),
          /* 26 */
          /***/
          (function(f, n, t) {
            f.exports = t(188);
          }),
          /* 27 */
          /***/
          (function(f, n, t) {
            f.exports = t(201);
          }),
          /* 28 */
          /***/
          (function(f, n, t) {
            f.exports = t(213);
          }),
          /* 29 */
          /***/
          (function(f, n, t) {
            f.exports = t(283);
          }),
          /* 30 */
          /***/
          (function(f, n, t) {
            var e = t(72), a = t(49);
            f.exports = function(r) {
              return e(a(r));
            };
          }),
          /* 31 */
          /***/
          (function(f, n, t) {
            var e = t(49);
            f.exports = function(a) {
              return Object(e(a));
            };
          }),
          /* 32 */
          /***/
          (function(f, n, t) {
            var e = t(40), a = t(72), r = t(31), o = t(35), v = t(88), A = [].push, c = function(g) {
              var s = g == 1, i = g == 2, u = g == 3, l = g == 4, p = g == 6, d = g == 5 || p;
              return function(h, m, y, x) {
                for (var S = r(h), T = a(S), R = e(m, y, 3), C = o(T.length), E = 0, D = x || v, P = s ? D(h, C) : i ? D(h, 0) : void 0, M, I; C > E; E++) if ((d || E in T) && (M = T[E], I = R(M, E, S), g)) {
                  if (s) P[E] = I;
                  else if (I) switch (g) {
                    case 3:
                      return !0;
                    // some
                    case 5:
                      return M;
                    // find
                    case 6:
                      return E;
                    // findIndex
                    case 2:
                      A.call(P, M);
                  }
                  else if (l) return !1;
                }
                return p ? -1 : u || l ? l : P;
              };
            };
            f.exports = {
              // `Array.prototype.forEach` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
              forEach: c(0),
              // `Array.prototype.map` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.map
              map: c(1),
              // `Array.prototype.filter` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.filter
              filter: c(2),
              // `Array.prototype.some` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.some
              some: c(3),
              // `Array.prototype.every` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.every
              every: c(4),
              // `Array.prototype.find` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.find
              find: c(5),
              // `Array.prototype.findIndex` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
              findIndex: c(6)
            };
          }),
          /* 33 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(29)), v = e(t(132));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var A = t(2), c = A.__importDefault(t(3)), g = t(7), s = (
              /** @class */
              (function() {
                function i(u, l) {
                  this.menu = u, this.conf = l, this.$container = c.default('<div class="w-e-panel-container"></div>');
                  var p = u.editor;
                  p.txt.eventHooks.clickEvents.push(i.hideCurAllPanels), p.txt.eventHooks.toolbarClickEvents.push(i.hideCurAllPanels), p.txt.eventHooks.dropListMenuHoverEvents.push(i.hideCurAllPanels);
                }
                return i.prototype.create = function() {
                  var u = this, l = this.menu;
                  if (!i.createdMenus.has(l)) {
                    var p = this.conf, d = this.$container, h = p.width || 300, m = l.editor.$toolbarElem.getBoundingClientRect(), y = l.$elem.getBoundingClientRect(), x = m.height + m.top - y.top, S = (m.width - h) / 2 + m.left - y.left, T = 300;
                    Math.abs(S) > T && (y.left < document.documentElement.clientWidth / 2 ? S = -y.width / 2 : S = -h + y.width / 2), d.css("width", h + "px").css("margin-top", x + "px").css("margin-left", S + "px").css("z-index", l.editor.zIndex.get("panel"));
                    var R = c.default('<i class="w-e-icon-close w-e-panel-close"></i>');
                    d.append(R), R.on("click", function() {
                      u.remove();
                    });
                    var C = c.default('<ul class="w-e-panel-tab-title"></ul>'), E = c.default('<div class="w-e-panel-tab-content"></div>');
                    d.append(C).append(E);
                    var D = p.height;
                    D && E.css("height", D + "px").css("overflow-y", "auto");
                    var P = p.tabs || [], M = [], I = [];
                    (0, r.default)(P).call(P, function(B, F) {
                      if (B) {
                        var O = B.title || "", H = B.tpl || "", L = c.default('<li class="w-e-item">' + O + "</li>");
                        C.append(L);
                        var U = c.default(H);
                        E.append(U), M.push(L), I.push(U), F === 0 ? (L.data("active", !0), L.addClass("w-e-active")) : U.hide(), L.on("click", function() {
                          L.data("active") || ((0, r.default)(M).call(M, function(z) {
                            z.data("active", !1), z.removeClass("w-e-active");
                          }), (0, r.default)(I).call(I, function(z) {
                            z.hide();
                          }), L.data("active", !0), L.addClass("w-e-active"), U.show());
                        });
                      }
                    }), d.on("click", function(B) {
                      B.stopPropagation();
                    }), l.$elem.append(d), p.setLinkValue && p.setLinkValue(d, "text"), p.setLinkValue && p.setLinkValue(d, "link"), (0, r.default)(P).call(P, function(B, F) {
                      if (B) {
                        var O = B.events || [];
                        (0, r.default)(O).call(O, function(H) {
                          var L, U = H.selector, z = H.type, j = H.fn || g.EMPTY_FN, K = I[F], V = (L = H.bindEnter) !== null && L !== void 0 ? L : !1, Q = function(G) {
                            return A.__awaiter(u, void 0, void 0, function() {
                              var X;
                              return A.__generator(this, function(tt) {
                                switch (tt.label) {
                                  case 0:
                                    return G.stopPropagation(), [
                                      4,
                                      j(G)
                                      // 执行完事件之后，是否要关闭 panel
                                    ];
                                  case 1:
                                    return X = tt.sent(), X && this.remove(), [
                                      2
                                      /*return*/
                                    ];
                                }
                              });
                            });
                          };
                          (0, o.default)(K).call(K, U).on(z, Q), V && z === "click" && K.on("keyup", function($) {
                            $.keyCode == 13 && Q($);
                          });
                        });
                      }
                    });
                    var N = (0, o.default)(d).call(d, "input[type=text],textarea");
                    N.length && N.get(0).focus(), i.hideCurAllPanels(), l.setPanel(this), i.createdMenus.add(l);
                  }
                }, i.prototype.remove = function() {
                  var u = this.menu, l = this.$container;
                  l && l.remove(), i.createdMenus.delete(u);
                }, i.hideCurAllPanels = function() {
                  var u;
                  i.createdMenus.size !== 0 && (0, r.default)(u = i.createdMenus).call(u, function(l) {
                    var p = l.panel;
                    p && p.remove();
                  });
                }, i.createdMenus = new v.default(), i;
              })()
            );
            n.default = s;
          }),
          /* 34 */
          /***/
          (function(f, n) {
            var t = {}.toString;
            f.exports = function(e) {
              return t.call(e).slice(8, -1);
            };
          }),
          /* 35 */
          /***/
          (function(f, n, t) {
            var e = t(62), a = Math.min;
            f.exports = function(r) {
              return r > 0 ? a(e(r), 9007199254740991) : 0;
            };
          }),
          /* 36 */
          /***/
          (function(f, n, t) {
            var e = t(9), a = t(8), r = function(o) {
              return typeof o == "function" ? o : void 0;
            };
            f.exports = function(o, v) {
              return arguments.length < 2 ? r(e[o]) || r(a[o]) : e[o] && e[o][v] || a[o] && a[o][v];
            };
          }),
          /* 37 */
          /***/
          (function(f, n, t) {
            var e = t(81), a = t(18).f, r = t(19), o = t(16), v = t(170), A = t(10), c = A("toStringTag");
            f.exports = function(g, s, i, u) {
              if (g) {
                var l = i ? g : g.prototype;
                o(l, c) || a(l, c, { configurable: !0, value: s }), u && !e && r(l, "toString", v);
              }
            };
          }),
          /* 38 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(95)), v = (
              /** @class */
              (function(A) {
                r.__extends(c, A);
                function c(g, s) {
                  return A.call(this, g, s) || this;
                }
                return c.prototype.setPanel = function(g) {
                  this.panel = g;
                }, c;
              })(o.default)
            );
            n.default = v;
          }),
          /* 39 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(57));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var v = t(2), A = v.__importDefault(t(3)), c = (
              /** @class */
              (function() {
                function g(s, i, u) {
                  this.editor = s, this.$targetElem = i, this.conf = u, this._show = !1, this._isInsertTextContainer = !1;
                  var l = A.default("<div></div>");
                  l.addClass("w-e-tooltip"), this.$container = l;
                }
                return g.prototype.getPositionData = function() {
                  var s = this.$container, i = 0, u = 0, l = 20, p = document.documentElement.scrollTop, d = this.$targetElem.getBoundingClientRect(), h = this.editor.$textElem.getBoundingClientRect(), m = this.$targetElem.getOffsetData(), y = A.default(m.parent), x = this.editor.$textElem.elems[0].scrollTop;
                  if (this._isInsertTextContainer = y.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
                    var S = y.getBoundingClientRect().height, T = m.top, R = m.left, C = m.height, E = T - x;
                    E > l + 5 ? (i = E - l - 15, s.addClass("w-e-tooltip-up")) : E + C + l < S ? (i = E + C + 10, s.addClass("w-e-tooltip-down")) : (i = (E > 0 ? E : 0) + l + 10, s.addClass("w-e-tooltip-down")), R < 0 ? u = 0 : u = R;
                  } else
                    d.top < l || d.top - h.top < l ? (i = d.bottom + p + 5, s.addClass("w-e-tooltip-down")) : (i = d.top + p - l - 15, s.addClass("w-e-tooltip-up")), d.left < 0 ? u = 0 : u = d.left;
                  return {
                    top: i,
                    left: u
                  };
                }, g.prototype.appendMenus = function() {
                  var s = this, i = this.conf, u = this.editor, l = this.$targetElem, p = this.$container;
                  (0, r.default)(i).call(i, function(d, h) {
                    var m = d.$elem, y = A.default("<div></div>");
                    y.addClass("w-e-tooltip-item-wrapper "), y.append(m), p.append(y), m.on("click", function(x) {
                      x.preventDefault();
                      var S = d.onClick(u, l);
                      S && s.remove();
                    });
                  });
                }, g.prototype.create = function() {
                  var s, i, u = this.editor, l = this.$container;
                  this.appendMenus();
                  var p = this.getPositionData(), d = p.top, h = p.left;
                  l.css("top", d + "px"), l.css("left", h + "px"), l.css("z-index", u.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(l) : A.default("body").append(l), this._show = !0, u.beforeDestroy((0, o.default)(s = this.remove).call(s, this)), u.txt.eventHooks.onBlurEvents.push((0, o.default)(i = this.remove).call(i, this));
                }, g.prototype.remove = function() {
                  this.$container.remove(), this._show = !1;
                }, (0, a.default)(g.prototype, "isShow", {
                  /**
                   * 是否显示
                   */
                  get: function() {
                    return this._show;
                  },
                  enumerable: !1,
                  configurable: !0
                }), g;
              })()
            );
            n.default = c;
          }),
          /* 40 */
          /***/
          (function(f, n, t) {
            var e = t(41);
            f.exports = function(a, r, o) {
              if (e(a), r === void 0) return a;
              switch (o) {
                case 0:
                  return function() {
                    return a.call(r);
                  };
                case 1:
                  return function(v) {
                    return a.call(r, v);
                  };
                case 2:
                  return function(v, A) {
                    return a.call(r, v, A);
                  };
                case 3:
                  return function(v, A, c) {
                    return a.call(r, v, A, c);
                  };
              }
              return function() {
                return a.apply(r, arguments);
              };
            };
          }),
          /* 41 */
          /***/
          (function(f, n) {
            f.exports = function(t) {
              if (typeof t != "function")
                throw TypeError(String(t) + " is not a function");
              return t;
            };
          }),
          /* 42 */
          /***/
          (function(f, n, t) {
            var e = t(165), a = t(8), r = t(13), o = t(19), v = t(16), A = t(63), c = t(51), g = a.WeakMap, s, i, u, l = function(S) {
              return u(S) ? i(S) : s(S, {});
            }, p = function(S) {
              return function(T) {
                var R;
                if (!r(T) || (R = i(T)).type !== S)
                  throw TypeError("Incompatible receiver, " + S + " required");
                return R;
              };
            };
            if (e) {
              var d = new g(), h = d.get, m = d.has, y = d.set;
              s = function(S, T) {
                return y.call(d, S, T), T;
              }, i = function(S) {
                return h.call(d, S) || {};
              }, u = function(S) {
                return m.call(d, S);
              };
            } else {
              var x = A("state");
              c[x] = !0, s = function(S, T) {
                return o(S, x, T), T;
              }, i = function(S) {
                return v(S, x) ? S[x] : {};
              }, u = function(S) {
                return v(S, x);
              };
            }
            f.exports = {
              set: s,
              get: i,
              has: u,
              enforce: l,
              getterFor: p
            };
          }),
          /* 43 */
          /***/
          (function(f, n) {
            f.exports = !0;
          }),
          /* 44 */
          /***/
          (function(f, n) {
            f.exports = {};
          }),
          /* 45 */
          /***/
          (function(f, n, t) {
            f.exports = t(261);
          }),
          /* 46 */
          /***/
          (function(f, n, t) {
            f.exports = t(265);
          }),
          /* 47 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.createElementFragment = n.createDocumentFragment = n.createElement = n.insertBefore = n.getEndPoint = n.getStartPoint = n.updateRange = n.filterSelectionNodes = void 0;
            var o = t(2), v = t(137), A = o.__importDefault(t(3));
            function c(h) {
              var m = [];
              return (0, r.default)(h).call(h, function(y) {
                var x = y.getNodeName();
                if (x !== v.ListType.OrderedList && x !== v.ListType.UnorderedList)
                  m.push(y);
                else if (y.prior)
                  m.push(y.prior);
                else {
                  var S = y.children();
                  S == null || (0, r.default)(S).call(S, function(T) {
                    m.push(A.default(T));
                  });
                }
              }), m;
            }
            n.filterSelectionNodes = c;
            function g(h, m, y) {
              var x = h.selection, S = document.createRange();
              m.length > 1 ? (S.setStart(m.elems[0], 0), S.setEnd(m.elems[m.length - 1], m.elems[m.length - 1].childNodes.length)) : S.selectNodeContents(m.elems[0]), y && S.collapse(!1), x.saveRange(S), x.restoreSelection();
            }
            n.updateRange = g;
            function s(h) {
              var m;
              return h.prior ? h.prior : A.default((m = h.children()) === null || m === void 0 ? void 0 : m.elems[0]);
            }
            n.getStartPoint = s;
            function i(h) {
              var m;
              return h.prior ? h.prior : A.default((m = h.children()) === null || m === void 0 ? void 0 : m.last().elems[0]);
            }
            n.getEndPoint = i;
            function u(h, m, y) {
              y === void 0 && (y = null), h.parent().elems[0].insertBefore(m, y);
            }
            n.insertBefore = u;
            function l(h) {
              return document.createElement(h);
            }
            n.createElement = l;
            function p() {
              return document.createDocumentFragment();
            }
            n.createDocumentFragment = p;
            function d(h, m, y) {
              return y === void 0 && (y = "li"), (0, r.default)(h).call(h, function(x) {
                var S = l(y);
                S.innerHTML = x.html(), m.appendChild(S), x.remove();
              }), m;
            }
            n.createElementFragment = d;
          }),
          /* 48 */
          /***/
          (function(f, n) {
            f.exports = function(t, e) {
              return {
                enumerable: !(t & 1),
                configurable: !(t & 2),
                writable: !(t & 4),
                value: e
              };
            };
          }),
          /* 49 */
          /***/
          (function(f, n) {
            f.exports = function(t) {
              if (t == null) throw TypeError("Can't call method on " + t);
              return t;
            };
          }),
          /* 50 */
          /***/
          (function(f, n, t) {
            var e = t(164).charAt, a = t(42), r = t(75), o = "String Iterator", v = a.set, A = a.getterFor(o);
            r(String, "String", function(c) {
              v(this, {
                type: o,
                string: String(c),
                index: 0
              });
            }, function() {
              var g = A(this), s = g.string, i = g.index, u;
              return i >= s.length ? { value: void 0, done: !0 } : (u = e(s, i), g.index += u.length, { value: u, done: !1 });
            });
          }),
          /* 51 */
          /***/
          (function(f, n) {
            f.exports = {};
          }),
          /* 52 */
          /***/
          (function(f, n, t) {
            var e = t(107), a = t(80);
            f.exports = Object.keys || function(o) {
              return e(o, a);
            };
          }),
          /* 53 */
          /***/
          (function(f, n, t) {
            var e = t(19);
            f.exports = function(a, r, o, v) {
              v && v.enumerable ? a[r] = o : e(a, r, o);
            };
          }),
          /* 54 */
          /***/
          (function(f, n, t) {
            t(173);
            var e = t(174), a = t(8), r = t(65), o = t(19), v = t(44), A = t(10), c = A("toStringTag");
            for (var g in e) {
              var s = a[g], i = s && s.prototype;
              i && r(i) !== c && o(i, c, g), v[g] = v.Array;
            }
          }),
          /* 55 */
          /***/
          (function(f, n, t) {
            var e = t(34);
            f.exports = Array.isArray || function(r) {
              return e(r) == "Array";
            };
          }),
          /* 56 */
          /***/
          (function(f, n, t) {
            var e = t(11), a = t(10), r = t(86), o = a("species");
            f.exports = function(v) {
              return r >= 51 || !e(function() {
                var A = [], c = A.constructor = {};
                return c[o] = function() {
                  return { foo: 1 };
                }, A[v](Boolean).foo !== 1;
              });
            };
          }),
          /* 57 */
          /***/
          (function(f, n, t) {
            f.exports = t(222);
          }),
          /* 58 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.ListHandle = void 0;
            var r = t(2), o = r.__importDefault(t(373)), v = (
              /** @class */
              /* @__PURE__ */ (function() {
                function A(c) {
                  this.options = c, this.selectionRangeElem = new o.default();
                }
                return A;
              })()
            );
            n.ListHandle = v;
          }),
          /* 59 */
          /***/
          (function(f, n, t) {
            var e = {}.propertyIsEnumerable, a = Object.getOwnPropertyDescriptor, r = a && !e.call({ 1: 2 }, 1);
            n.f = r ? function(v) {
              var A = a(this, v);
              return !!A && A.enumerable;
            } : e;
          }),
          /* 60 */
          /***/
          (function(f, n, t) {
            var e = t(13);
            f.exports = function(a, r) {
              if (!e(a)) return a;
              var o, v;
              if (r && typeof (o = a.toString) == "function" && !e(v = o.call(a)) || typeof (o = a.valueOf) == "function" && !e(v = o.call(a)) || !r && typeof (o = a.toString) == "function" && !e(v = o.call(a))) return v;
              throw TypeError("Can't convert object to primitive value");
            };
          }),
          /* 61 */
          /***/
          (function(f, n) {
          }),
          /* 62 */
          /***/
          (function(f, n) {
            var t = Math.ceil, e = Math.floor;
            f.exports = function(a) {
              return isNaN(a = +a) ? 0 : (a > 0 ? e : t)(a);
            };
          }),
          /* 63 */
          /***/
          (function(f, n, t) {
            var e = t(74), a = t(64), r = e("keys");
            f.exports = function(o) {
              return r[o] || (r[o] = a(o));
            };
          }),
          /* 64 */
          /***/
          (function(f, n) {
            var t = 0, e = Math.random();
            f.exports = function(a) {
              return "Symbol(" + String(a === void 0 ? "" : a) + ")_" + (++t + e).toString(36);
            };
          }),
          /* 65 */
          /***/
          (function(f, n, t) {
            var e = t(81), a = t(34), r = t(10), o = r("toStringTag"), v = a(/* @__PURE__ */ (function() {
              return arguments;
            })()) == "Arguments", A = function(c, g) {
              try {
                return c[g];
              } catch {
              }
            };
            f.exports = e ? a : function(c) {
              var g, s, i;
              return c === void 0 ? "Undefined" : c === null ? "Null" : typeof (s = A(g = Object(c), o)) == "string" ? s : v ? a(g) : (i = a(g)) == "Object" && typeof g.callee == "function" ? "Arguments" : i;
            };
          }),
          /* 66 */
          /***/
          (function(f, n, t) {
            var e = t(25), a = t(112), r = t(35), o = t(40), v = t(113), A = t(114), c = function(s, i) {
              this.stopped = s, this.result = i;
            }, g = f.exports = function(s, i, u, l, p) {
              var d = o(i, u, l ? 2 : 1), h, m, y, x, S, T, R;
              if (p)
                h = s;
              else {
                if (m = v(s), typeof m != "function") throw TypeError("Target is not iterable");
                if (a(m)) {
                  for (y = 0, x = r(s.length); x > y; y++)
                    if (S = l ? d(e(R = s[y])[0], R[1]) : d(s[y]), S && S instanceof c) return S;
                  return new c(!1);
                }
                h = m.call(s);
              }
              for (T = h.next; !(R = T.call(h)).done; )
                if (S = A(h, d, R.value, l), typeof S == "object" && S && S instanceof c) return S;
              return new c(!1);
            };
            g.stop = function(s) {
              return new c(!0, s);
            };
          }),
          /* 67 */
          /***/
          (function(f, n, t) {
            var e = t(11);
            f.exports = function(a, r) {
              var o = [][a];
              return !!o && e(function() {
                o.call(null, r || function() {
                  throw 1;
                }, 1);
              });
            };
          }),
          /* 68 */
          /***/
          (function(f, n) {
            f.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
          }),
          /* 69 */
          /***/
          (function(f, n, t) {
            var e = t(60), a = t(18), r = t(48);
            f.exports = function(o, v, A) {
              var c = e(v);
              c in o ? a.f(o, c, r(0, A)) : o[c] = A;
            };
          }),
          /* 70 */
          /***/
          (function(f, n, t) {
            f.exports = t(209);
          }),
          /* 71 */
          /***/
          (function(f, n, t) {
            var e = t(14), a = t(59), r = t(48), o = t(30), v = t(60), A = t(16), c = t(100), g = Object.getOwnPropertyDescriptor;
            n.f = e ? g : function(i, u) {
              if (i = o(i), u = v(u, !0), c) try {
                return g(i, u);
              } catch {
              }
              if (A(i, u)) return r(!a.f.call(i, u), i[u]);
            };
          }),
          /* 72 */
          /***/
          (function(f, n, t) {
            var e = t(11), a = t(34), r = "".split;
            f.exports = e(function() {
              return !Object("z").propertyIsEnumerable(0);
            }) ? function(o) {
              return a(o) == "String" ? r.call(o, "") : Object(o);
            } : Object;
          }),
          /* 73 */
          /***/
          (function(f, n, t) {
            var e = t(8), a = t(13), r = e.document, o = a(r) && a(r.createElement);
            f.exports = function(v) {
              return o ? r.createElement(v) : {};
            };
          }),
          /* 74 */
          /***/
          (function(f, n, t) {
            var e = t(43), a = t(103);
            (f.exports = function(r, o) {
              return a[r] || (a[r] = o !== void 0 ? o : {});
            })("versions", []).push({
              version: "3.6.4",
              mode: e ? "pure" : "global",
              copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            });
          }),
          /* 75 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(167), r = t(105), o = t(171), v = t(37), A = t(19), c = t(53), g = t(10), s = t(43), i = t(44), u = t(104), l = u.IteratorPrototype, p = u.BUGGY_SAFARI_ITERATORS, d = g("iterator"), h = "keys", m = "values", y = "entries", x = function() {
              return this;
            };
            f.exports = function(S, T, R, C, E, D, P) {
              a(R, T, C);
              var M = function(j) {
                if (j === E && O) return O;
                if (!p && j in B) return B[j];
                switch (j) {
                  case h:
                    return function() {
                      return new R(this, j);
                    };
                  case m:
                    return function() {
                      return new R(this, j);
                    };
                  case y:
                    return function() {
                      return new R(this, j);
                    };
                }
                return function() {
                  return new R(this);
                };
              }, I = T + " Iterator", N = !1, B = S.prototype, F = B[d] || B["@@iterator"] || E && B[E], O = !p && F || M(E), H = T == "Array" && B.entries || F, L, U, z;
              if (H && (L = r(H.call(new S())), l !== Object.prototype && L.next && (!s && r(L) !== l && (o ? o(L, l) : typeof L[d] != "function" && A(L, d, x)), v(L, I, !0, !0), s && (i[I] = x))), E == m && F && F.name !== m && (N = !0, O = function() {
                return F.call(this);
              }), (!s || P) && B[d] !== O && A(B, d, O), i[T] = O, E)
                if (U = {
                  values: M(m),
                  keys: D ? O : M(h),
                  entries: M(y)
                }, P) for (z in U)
                  (p || N || !(z in B)) && c(B, z, U[z]);
                else e({ target: T, proto: !0, forced: p || N }, U);
              return U;
            };
          }),
          /* 76 */
          /***/
          (function(f, n, t) {
            var e = t(11);
            f.exports = !!Object.getOwnPropertySymbols && !e(function() {
              return !String(Symbol());
            });
          }),
          /* 77 */
          /***/
          (function(f, n, t) {
            var e = t(25), a = t(169), r = t(80), o = t(51), v = t(108), A = t(73), c = t(63), g = ">", s = "<", i = "prototype", u = "script", l = c("IE_PROTO"), p = function() {
            }, d = function(S) {
              return s + u + g + S + s + "/" + u + g;
            }, h = function(S) {
              S.write(d("")), S.close();
              var T = S.parentWindow.Object;
              return S = null, T;
            }, m = function() {
              var S = A("iframe"), T = "java" + u + ":", R;
              return S.style.display = "none", v.appendChild(S), S.src = String(T), R = S.contentWindow.document, R.open(), R.write(d("document.F=Object")), R.close(), R.F;
            }, y, x = function() {
              try {
                y = document.domain && new ActiveXObject("htmlfile");
              } catch {
              }
              x = y ? h(y) : m();
              for (var S = r.length; S--; ) delete x[i][r[S]];
              return x();
            };
            o[l] = !0, f.exports = Object.create || function(T, R) {
              var C;
              return T !== null ? (p[i] = e(T), C = new p(), p[i] = null, C[l] = T) : C = x(), R === void 0 ? C : a(C, R);
            };
          }),
          /* 78 */
          /***/
          (function(f, n, t) {
            var e = t(30), a = t(35), r = t(79), o = function(v) {
              return function(A, c, g) {
                var s = e(A), i = a(s.length), u = r(g, i), l;
                if (v && c != c) {
                  for (; i > u; )
                    if (l = s[u++], l != l) return !0;
                } else for (; i > u; u++)
                  if ((v || u in s) && s[u] === c) return v || u || 0;
                return !v && -1;
              };
            };
            f.exports = {
              // `Array.prototype.includes` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.includes
              includes: o(!0),
              // `Array.prototype.indexOf` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
              indexOf: o(!1)
            };
          }),
          /* 79 */
          /***/
          (function(f, n, t) {
            var e = t(62), a = Math.max, r = Math.min;
            f.exports = function(o, v) {
              var A = e(o);
              return A < 0 ? a(A + v, 0) : r(A, v);
            };
          }),
          /* 80 */
          /***/
          (function(f, n) {
            f.exports = [
              "constructor",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "toLocaleString",
              "toString",
              "valueOf"
            ];
          }),
          /* 81 */
          /***/
          (function(f, n, t) {
            var e = t(10), a = e("toStringTag"), r = {};
            r[a] = "z", f.exports = String(r) === "[object z]";
          }),
          /* 82 */
          /***/
          (function(f, n) {
            f.exports = function() {
            };
          }),
          /* 83 */
          /***/
          (function(f, n) {
            f.exports = function(t, e, a) {
              if (!(t instanceof e))
                throw TypeError("Incorrect " + (a ? a + " " : "") + "invocation");
              return t;
            };
          }),
          /* 84 */
          /***/
          (function(f, n, t) {
            var e = t(36);
            f.exports = e("navigator", "userAgent") || "";
          }),
          /* 85 */
          /***/
          (function(f, n, t) {
            var e = t(41), a = function(r) {
              var o, v;
              this.promise = new r(function(A, c) {
                if (o !== void 0 || v !== void 0) throw TypeError("Bad Promise constructor");
                o = A, v = c;
              }), this.resolve = e(o), this.reject = e(v);
            };
            f.exports.f = function(r) {
              return new a(r);
            };
          }),
          /* 86 */
          /***/
          (function(f, n, t) {
            var e = t(8), a = t(84), r = e.process, o = r && r.versions, v = o && o.v8, A, c;
            v ? (A = v.split("."), c = A[0] + A[1]) : a && (A = a.match(/Edge\/(\d+)/), (!A || A[1] >= 74) && (A = a.match(/Chrome\/(\d+)/), A && (c = A[1]))), f.exports = c && +c;
          }),
          /* 87 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = t(6), c = o.__importDefault(t(267)), g = o.__importDefault(t(280)), s = o.__importDefault(t(281)), i = o.__importDefault(t(282)), u = o.__importDefault(t(301)), l = o.__importStar(t(416)), p = o.__importDefault(t(417)), d = o.__importDefault(t(418)), h = o.__importDefault(t(419)), m = o.__importStar(t(420)), y = o.__importDefault(t(423)), x = o.__importDefault(t(424)), S = o.__importDefault(t(425)), T = o.__importDefault(t(427)), R = o.__importDefault(t(437)), C = o.__importDefault(t(440)), E = o.__importStar(t(441)), D = o.__importDefault(t(23)), P = o.__importDefault(t(134)), M = o.__importDefault(t(24)), I = o.__importDefault(t(33)), N = o.__importDefault(t(38)), B = o.__importDefault(t(39)), F = 1, O = (
              /** @class */
              (function() {
                function H(L, U) {
                  this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + F++, this.toolbarSelector = L, this.textSelector = U, l.selectorValidator(this), this.config = A.deepClone(c.default), this.$toolbarElem = v.default("<div></div>"), this.$textContainerElem = v.default("<div></div>"), this.$textElem = v.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new g.default(this), this.cmd = new s.default(this), this.txt = new i.default(this), this.menus = new u.default(this), this.zIndex = new x.default(), this.change = new S.default(this), this.history = new T.default(this), this.onSelectionChange = new C.default(this);
                  var z = R.default(this), j = z.disable, K = z.enable;
                  this.disable = j, this.enable = K, this.isEnable = !0;
                }
                return H.prototype.initSelection = function(L) {
                  p.default(this, L);
                }, H.prototype.create = function() {
                  this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), h.default(this), l.default(this), this.txt.init(), this.menus.init(), m.default(this), this.initSelection(!0), d.default(this), this.change.observe(), this.history.observe(), E.default(this);
                }, H.prototype.beforeDestroy = function(L) {
                  return this.beforeDestroyHooks.push(L), this;
                }, H.prototype.destroy = function() {
                  var L, U = this;
                  (0, r.default)(L = this.beforeDestroyHooks).call(L, function(z) {
                    return z.call(U);
                  }), this.$toolbarElem.remove(), this.$textContainerElem.remove();
                }, H.prototype.fullScreen = function() {
                  m.setFullScreen(this);
                }, H.prototype.unFullScreen = function() {
                  m.setUnFullScreen(this);
                }, H.prototype.scrollToHead = function(L) {
                  y.default(this, L);
                }, H.registerMenu = function(L, U) {
                  !U || typeof U != "function" || (H.globalCustomMenuConstructorList[L] = U);
                }, H.prototype.registerPlugin = function(L, U) {
                  E.registerPlugin(L, U, this.pluginsFunctionList);
                }, H.registerPlugin = function(L, U) {
                  E.registerPlugin(L, U, H.globalPluginsFunctionList);
                }, H.$ = v.default, H.BtnMenu = D.default, H.DropList = P.default, H.DropListMenu = M.default, H.Panel = I.default, H.PanelMenu = N.default, H.Tooltip = B.default, H.globalCustomMenuConstructorList = {}, H.globalPluginsFunctionList = {}, H;
              })()
            );
            n.default = O;
          }),
          /* 88 */
          /***/
          (function(f, n, t) {
            var e = t(13), a = t(55), r = t(10), o = r("species");
            f.exports = function(v, A) {
              var c;
              return a(v) && (c = v.constructor, typeof c == "function" && (c === Array || a(c.prototype)) ? c = void 0 : e(c) && (c = c[o], c === null && (c = void 0))), new (c === void 0 ? Array : c)(A === 0 ? 0 : A);
            };
          }),
          /* 89 */
          /***/
          (function(f, n, t) {
            f.exports = t(185);
          }),
          /* 90 */
          /***/
          (function(f, n, t) {
            var e = t(49), a = t(68), r = "[" + a + "]", o = RegExp("^" + r + r + "*"), v = RegExp(r + r + "*$"), A = function(c) {
              return function(g) {
                var s = String(e(g));
                return c & 1 && (s = s.replace(o, "")), c & 2 && (s = s.replace(v, "")), s;
              };
            };
            f.exports = {
              // `String.prototype.{ trimLeft, trimStart }` methods
              // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
              start: A(1),
              // `String.prototype.{ trimRight, trimEnd }` methods
              // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
              end: A(2),
              // `String.prototype.trim` method
              // https://tc39.github.io/ecma262/#sec-string.prototype.trim
              trim: A(3)
            };
          }),
          /* 91 */
          /***/
          (function(f, n, t) {
            f.exports = t(205);
          }),
          /* 92 */
          /***/
          (function(f, n, t) {
            var e = t(227), a = t(230);
            function r(o) {
              "@babel/helpers - typeof";
              return typeof a == "function" && typeof e == "symbol" ? f.exports = r = function(A) {
                return typeof A;
              } : f.exports = r = function(A) {
                return A && typeof a == "function" && A.constructor === a && A !== a.prototype ? "symbol" : typeof A;
              }, r(o);
            }
            f.exports = r;
          }),
          /* 93 */
          /***/
          (function(f, n, t) {
            var e = t(10);
            n.f = e;
          }),
          /* 94 */
          /***/
          (function(f, n, t) {
            f.exports = t(306);
          }),
          /* 95 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(33)), A = (
              /** @class */
              (function() {
                function c(g, s) {
                  var i = this;
                  this.$elem = g, this.editor = s, this._active = !1, g.on("click", function(u) {
                    var l;
                    v.default.hideCurAllPanels(), (0, r.default)(l = s.txt.eventHooks.menuClickEvents).call(l, function(p) {
                      return p();
                    }), u.stopPropagation(), s.selection.getRange() != null && i.clickHandler(u);
                  });
                }
                return c.prototype.clickHandler = function(g) {
                }, c.prototype.active = function() {
                  this._active = !0, this.$elem.addClass("w-e-active");
                }, c.prototype.unActive = function() {
                  this._active = !1, this.$elem.removeClass("w-e-active");
                }, (0, a.default)(c.prototype, "isActive", {
                  /**
                   * 是否处于激活状态
                   */
                  get: function() {
                    return this._active;
                  },
                  enumerable: !1,
                  configurable: !0
                }), c;
              })()
            );
            n.default = A;
          }),
          /* 96 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(28));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.getParentNodeA = n.EXTRA_TAG = void 0, n.EXTRA_TAG = ["B", "FONT", "I", "STRIKE"];
            function o(A) {
              for (var c = A.elems[0]; c && (0, r.default)(g = n.EXTRA_TAG).call(g, c.nodeName); ) {
                var g;
                if (c = c.parentElement, c.nodeName === "A")
                  return c;
              }
            }
            n.getParentNodeA = o;
            function v(A) {
              var c, g = A.selection.getSelectionContainerElem();
              if (!(!((c = g?.elems) === null || c === void 0) && c.length))
                return !1;
              if (g.getNodeName() === "A")
                return !0;
              var s = o(g);
              return !!(s && s.nodeName === "A");
            }
            n.default = v;
          }),
          /* 97 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(57)), o = e(t(4)), v = e(t(27));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var A = t(2), c = t(6), g = A.__importDefault(t(135)), s = A.__importDefault(t(136)), i = (
              /** @class */
              (function() {
                function u(l) {
                  this.editor = l;
                }
                return u.prototype.insertImg = function(l, p, d) {
                  var h = this.editor, m = h.config, y = "validate.", x = function(D, P) {
                    return P === void 0 && (P = y), h.i18next.t(P + D);
                  }, S = l.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                  S = S.replace("'", '"');
                  var T = "";
                  d && (T = d.replace("'", '"'), T = "data-href='" + encodeURIComponent(T) + "' ");
                  var R = "";
                  p && (R = p.replace(/</g, "&lt;").replace(/>/g, "&gt;"), R = R.replace("'", '"'), R = "alt='" + R + "' "), h.cmd.do("insertHTML", "<img src='" + S + "' " + R + T + 'style="max-width:100%;" contenteditable="false"/>'), m.linkImgCallback(l, p, d);
                  var C = document.createElement("img");
                  C.onload = function() {
                    C = null;
                  }, C.onerror = function() {
                    m.customAlert(x("插入图片错误"), "error", "wangEditor: " + x("插入图片错误") + "，" + x("图片链接") + ' "' + l + '"，' + x("下载链接失败")), C = null;
                  }, C.onabort = function() {
                    return C = null;
                  }, C.src = l;
                }, u.prototype.uploadImg = function(l) {
                  var p = this;
                  if (l.length) {
                    var d = this.editor, h = d.config, m = "validate.", y = function(Q) {
                      return d.i18next.t(m + Q);
                    }, x = h.uploadImgServer, S = h.uploadImgShowBase64, T = h.uploadImgMaxSize, R = T / 1024 / 1024, C = h.uploadImgMaxLength, E = h.uploadFileName, D = h.uploadImgParams, P = h.uploadImgParamsWithUrl, M = h.uploadImgHeaders, I = h.uploadImgHooks, N = h.uploadImgTimeout, B = h.withCredentials, F = h.customUploadImg;
                    if (!(!F && !x && !S)) {
                      var O = [], H = [];
                      if (c.arrForEach(l, function(V) {
                        if (V) {
                          var Q = V.name || V.type.replace("/", "."), $ = V.size;
                          if (!(!Q || !$)) {
                            var G = d.config.uploadImgAccept.join("|"), X = ".(" + G + ")$", tt = new RegExp(X, "i");
                            if (tt.test(Q) === !1) {
                              H.push("【" + Q + "】" + y("不是图片"));
                              return;
                            }
                            if (T < $) {
                              H.push("【" + Q + "】" + y("大于") + " " + R + "M");
                              return;
                            }
                            O.push(V);
                          }
                        }
                      }), H.length) {
                        h.customAlert(y("图片验证未通过") + `: 
` + H.join(`
`), "warning");
                        return;
                      }
                      if (O.length === 0) {
                        h.customAlert(y("传入的文件不合法"), "warning");
                        return;
                      }
                      if (O.length > C) {
                        h.customAlert(y("一次最多上传") + C + y("张图片"), "warning");
                        return;
                      }
                      if (F && typeof F == "function") {
                        var L;
                        F(O, (0, r.default)(L = this.insertImg).call(L, this));
                        return;
                      }
                      var U = new FormData();
                      if ((0, o.default)(O).call(O, function(V, Q) {
                        var $ = E || V.name;
                        O.length > 1 && ($ = $ + (Q + 1)), U.append($, V);
                      }), x) {
                        var z = x.split("#");
                        x = z[0];
                        var j = z[1] || "";
                        (0, o.default)(c).call(c, D, function(V, Q) {
                          P && ((0, v.default)(x).call(x, "?") > 0 ? x += "&" : x += "?", x = x + V + "=" + Q), U.append(V, Q);
                        }), j && (x += "#" + j);
                        var K = g.default(x, {
                          timeout: N,
                          formData: U,
                          headers: M,
                          withCredentials: !!B,
                          beforeSend: function(Q) {
                            if (I.before) return I.before(Q, d, O);
                          },
                          onTimeout: function(Q) {
                            h.customAlert(y("上传图片超时"), "error"), I.timeout && I.timeout(Q, d);
                          },
                          onProgress: function(Q, $) {
                            var G = new s.default(d);
                            $.lengthComputable && (Q = $.loaded / $.total, G.show(Q));
                          },
                          onError: function(Q) {
                            h.customAlert(y("上传图片错误"), "error", y("上传图片错误") + "，" + y("服务器返回状态") + ": " + Q.status), I.error && I.error(Q, d);
                          },
                          onFail: function(Q, $) {
                            h.customAlert(y("上传图片失败"), "error", y("上传图片返回结果错误") + ("，" + y("返回结果") + ": ") + $), I.fail && I.fail(Q, d, $);
                          },
                          onSuccess: function(Q, $) {
                            if (I.customInsert) {
                              var G;
                              I.customInsert((0, r.default)(G = p.insertImg).call(G, p), $, d);
                              return;
                            }
                            if ($.errno != "0") {
                              h.customAlert(y("上传图片失败"), "error", y("上传图片返回结果错误") + "，" + y("返回结果") + " errno=" + $.errno), I.fail && I.fail(Q, d, $);
                              return;
                            }
                            var X = $.data;
                            (0, o.default)(X).call(X, function(tt) {
                              typeof tt == "string" ? p.insertImg(tt) : p.insertImg(tt.url, tt.alt, tt.href);
                            }), I.success && I.success(Q, d, $);
                          }
                        });
                        typeof K == "string" && h.customAlert(K, "error");
                        return;
                      }
                      S && c.arrForEach(l, function(V) {
                        var Q = p, $ = new FileReader();
                        $.readAsDataURL(V), $.onload = function() {
                          if (this.result) {
                            var G = this.result.toString();
                            Q.insertImg(G, G);
                          }
                        };
                      });
                    }
                  }
                }, u;
              })()
            );
            n.default = i;
          }),
          /* 98 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(410)), o = e(t(4)), v = e(t(45));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.dealTextNode = n.isAllTodo = n.isTodo = n.getCursorNextNode = void 0;
            function A(u) {
              return u.length ? u.attr("class") === "w-e-todo" : !1;
            }
            n.isTodo = A;
            function c(u) {
              var l = u.selection.getSelectionRangeTopNodes();
              if (l.length !== 0)
                return (0, r.default)(l).call(l, function(p) {
                  return A(p);
                });
            }
            n.isAllTodo = c;
            function g(u, l, p) {
              var d;
              if (u.hasChildNodes()) {
                var h = u.cloneNode(), m = !1;
                l.nodeValue === "" && (m = !0);
                var y = [];
                return (0, o.default)(d = u.childNodes).call(d, function(x) {
                  if (!s(x, l) && m && (h.appendChild(x.cloneNode(!0)), x.nodeName !== "BR" && y.push(x)), s(x, l)) {
                    if (x.nodeType === 1) {
                      var S = g(x, l, p);
                      S && S.textContent !== "" && h?.appendChild(S);
                    }
                    if (x.nodeType === 3 && l.isEqualNode(x)) {
                      var T = i(x, p);
                      h.textContent = T;
                    }
                    m = !0;
                  }
                }), (0, o.default)(y).call(y, function(x) {
                  var S = x;
                  S.remove();
                }), h;
              }
            }
            n.getCursorNextNode = g;
            function s(u, l) {
              return u.nodeType === 3 ? u.nodeValue === l.nodeValue : u.contains(l);
            }
            function i(u, l, p) {
              p === void 0 && (p = !0);
              var d = u.nodeValue, h = d == null ? void 0 : (0, v.default)(d).call(d, 0, l);
              if (d = d == null ? void 0 : (0, v.default)(d).call(d, l), !p) {
                var m = d;
                d = h, h = m;
              }
              return u.nodeValue = h, d;
            }
            n.dealTextNode = i;
          }),
          /* 99 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(430), o = (
              /** @class */
              (function() {
                function v(A) {
                  this.maxSize = A, this.isRe = !1, this.data = new r.CeilStack(A), this.revokeData = new r.CeilStack(A);
                }
                return (0, a.default)(v.prototype, "size", {
                  /**
                   * 返回当前栈中的数据长度。格式为：[正常的数据的条数，被撤销的数据的条数]
                   */
                  get: function() {
                    return [this.data.size, this.revokeData.size];
                  },
                  enumerable: !1,
                  configurable: !0
                }), v.prototype.resetMaxSize = function(A) {
                  this.data.resetMax(A), this.revokeData.resetMax(A);
                }, v.prototype.save = function(A) {
                  return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(A), this;
                }, v.prototype.revoke = function(A) {
                  !this.isRe && (this.isRe = !0);
                  var c = this.data.outstack();
                  return c ? (this.revokeData.instack(c), A(c), !0) : !1;
                }, v.prototype.restore = function(A) {
                  !this.isRe && (this.isRe = !0);
                  var c = this.revokeData.outstack();
                  return c ? (this.data.instack(c), A(c), !0) : !1;
                }, v;
              })()
            );
            n.default = o;
          }),
          /* 100 */
          /***/
          (function(f, n, t) {
            var e = t(14), a = t(11), r = t(73);
            f.exports = !e && !a(function() {
              return Object.defineProperty(r("div"), "a", {
                get: function() {
                  return 7;
                }
              }).a != 7;
            });
          }),
          /* 101 */
          /***/
          (function(f, n, t) {
            var e = t(11), a = /#|\.prototype\./, r = function(g, s) {
              var i = v[o(g)];
              return i == c ? !0 : i == A ? !1 : typeof s == "function" ? e(s) : !!s;
            }, o = r.normalize = function(g) {
              return String(g).replace(a, ".").toLowerCase();
            }, v = r.data = {}, A = r.NATIVE = "N", c = r.POLYFILL = "P";
            f.exports = r;
          }),
          /* 102 */
          /***/
          (function(f, n, t) {
            var e = t(103), a = Function.toString;
            typeof e.inspectSource != "function" && (e.inspectSource = function(r) {
              return a.call(r);
            }), f.exports = e.inspectSource;
          }),
          /* 103 */
          /***/
          (function(f, n, t) {
            var e = t(8), a = t(166), r = "__core-js_shared__", o = e[r] || a(r, {});
            f.exports = o;
          }),
          /* 104 */
          /***/
          (function(f, n, t) {
            var e = t(105), a = t(19), r = t(16), o = t(10), v = t(43), A = o("iterator"), c = !1, g = function() {
              return this;
            }, s, i, u;
            [].keys && (u = [].keys(), "next" in u ? (i = e(e(u)), i !== Object.prototype && (s = i)) : c = !0), s == null && (s = {}), !v && !r(s, A) && a(s, A, g), f.exports = {
              IteratorPrototype: s,
              BUGGY_SAFARI_ITERATORS: c
            };
          }),
          /* 105 */
          /***/
          (function(f, n, t) {
            var e = t(16), a = t(31), r = t(63), o = t(168), v = r("IE_PROTO"), A = Object.prototype;
            f.exports = o ? Object.getPrototypeOf : function(c) {
              return c = a(c), e(c, v) ? c[v] : typeof c.constructor == "function" && c instanceof c.constructor ? c.constructor.prototype : c instanceof Object ? A : null;
            };
          }),
          /* 106 */
          /***/
          (function(f, n, t) {
            var e = t(76);
            f.exports = e && !Symbol.sham && typeof Symbol.iterator == "symbol";
          }),
          /* 107 */
          /***/
          (function(f, n, t) {
            var e = t(16), a = t(30), r = t(78).indexOf, o = t(51);
            f.exports = function(v, A) {
              var c = a(v), g = 0, s = [], i;
              for (i in c) !e(o, i) && e(c, i) && s.push(i);
              for (; A.length > g; ) e(c, i = A[g++]) && (~r(s, i) || s.push(i));
              return s;
            };
          }),
          /* 108 */
          /***/
          (function(f, n, t) {
            var e = t(36);
            f.exports = e("document", "documentElement");
          }),
          /* 109 */
          /***/
          (function(f, n, t) {
            var e = t(8);
            f.exports = e.Promise;
          }),
          /* 110 */
          /***/
          (function(f, n, t) {
            var e = t(53);
            f.exports = function(a, r, o) {
              for (var v in r)
                o && o.unsafe && a[v] ? a[v] = r[v] : e(a, v, r[v], o);
              return a;
            };
          }),
          /* 111 */
          /***/
          (function(f, n, t) {
            var e = t(36), a = t(18), r = t(10), o = t(14), v = r("species");
            f.exports = function(A) {
              var c = e(A), g = a.f;
              o && c && !c[v] && g(c, v, {
                configurable: !0,
                get: function() {
                  return this;
                }
              });
            };
          }),
          /* 112 */
          /***/
          (function(f, n, t) {
            var e = t(10), a = t(44), r = e("iterator"), o = Array.prototype;
            f.exports = function(v) {
              return v !== void 0 && (a.Array === v || o[r] === v);
            };
          }),
          /* 113 */
          /***/
          (function(f, n, t) {
            var e = t(65), a = t(44), r = t(10), o = r("iterator");
            f.exports = function(v) {
              if (v != null) return v[o] || v["@@iterator"] || a[e(v)];
            };
          }),
          /* 114 */
          /***/
          (function(f, n, t) {
            var e = t(25);
            f.exports = function(a, r, o, v) {
              try {
                return v ? r(e(o)[0], o[1]) : r(o);
              } catch (c) {
                var A = a.return;
                throw A !== void 0 && e(A.call(a)), c;
              }
            };
          }),
          /* 115 */
          /***/
          (function(f, n, t) {
            var e = t(10), a = e("iterator"), r = !1;
            try {
              var o = 0, v = {
                next: function() {
                  return { done: !!o++ };
                },
                return: function() {
                  r = !0;
                }
              };
              v[a] = function() {
                return this;
              }, Array.from(v, function() {
                throw 2;
              });
            } catch {
            }
            f.exports = function(A, c) {
              if (!c && !r) return !1;
              var g = !1;
              try {
                var s = {};
                s[a] = function() {
                  return {
                    next: function() {
                      return { done: g = !0 };
                    }
                  };
                }, A(s);
              } catch {
              }
              return g;
            };
          }),
          /* 116 */
          /***/
          (function(f, n, t) {
            var e = t(25), a = t(41), r = t(10), o = r("species");
            f.exports = function(v, A) {
              var c = e(v).constructor, g;
              return c === void 0 || (g = e(c)[o]) == null ? A : a(g);
            };
          }),
          /* 117 */
          /***/
          (function(f, n, t) {
            var e = t(8), a = t(11), r = t(34), o = t(40), v = t(108), A = t(73), c = t(118), g = e.location, s = e.setImmediate, i = e.clearImmediate, u = e.process, l = e.MessageChannel, p = e.Dispatch, d = 0, h = {}, m = "onreadystatechange", y, x, S, T = function(D) {
              if (h.hasOwnProperty(D)) {
                var P = h[D];
                delete h[D], P();
              }
            }, R = function(D) {
              return function() {
                T(D);
              };
            }, C = function(D) {
              T(D.data);
            }, E = function(D) {
              e.postMessage(D + "", g.protocol + "//" + g.host);
            };
            (!s || !i) && (s = function(P) {
              for (var M = [], I = 1; arguments.length > I; ) M.push(arguments[I++]);
              return h[++d] = function() {
                (typeof P == "function" ? P : Function(P)).apply(void 0, M);
              }, y(d), d;
            }, i = function(P) {
              delete h[P];
            }, r(u) == "process" ? y = function(D) {
              u.nextTick(R(D));
            } : p && p.now ? y = function(D) {
              p.now(R(D));
            } : l && !c ? (x = new l(), S = x.port2, x.port1.onmessage = C, y = o(S.postMessage, S, 1)) : e.addEventListener && typeof postMessage == "function" && !e.importScripts && !a(E) && g.protocol !== "file:" ? (y = E, e.addEventListener("message", C, !1)) : m in A("script") ? y = function(D) {
              v.appendChild(A("script"))[m] = function() {
                v.removeChild(this), T(D);
              };
            } : y = function(D) {
              setTimeout(R(D), 0);
            }), f.exports = {
              set: s,
              clear: i
            };
          }),
          /* 118 */
          /***/
          (function(f, n, t) {
            var e = t(84);
            f.exports = /(iphone|ipod|ipad).*applewebkit/i.test(e);
          }),
          /* 119 */
          /***/
          (function(f, n, t) {
            var e = t(25), a = t(13), r = t(85);
            f.exports = function(o, v) {
              if (e(o), a(v) && v.constructor === o) return v;
              var A = r.f(o), c = A.resolve;
              return c(v), A.promise;
            };
          }),
          /* 120 */
          /***/
          (function(f, n) {
            f.exports = function(t) {
              try {
                return { error: !1, value: t() };
              } catch (e) {
                return { error: !0, value: e };
              }
            };
          }),
          /* 121 */
          /***/
          (function(f, n, t) {
            f.exports = t(197);
          }),
          /* 122 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(8), r = t(123), o = t(11), v = t(19), A = t(66), c = t(83), g = t(13), s = t(37), i = t(18).f, u = t(32).forEach, l = t(14), p = t(42), d = p.set, h = p.getterFor;
            f.exports = function(m, y, x) {
              var S = m.indexOf("Map") !== -1, T = m.indexOf("Weak") !== -1, R = S ? "set" : "add", C = a[m], E = C && C.prototype, D = {}, P;
              if (!l || typeof C != "function" || !(T || E.forEach && !o(function() {
                new C().entries().next();
              })))
                P = x.getConstructor(y, m, S, R), r.REQUIRED = !0;
              else {
                P = y(function(I, N) {
                  d(c(I, P, m), {
                    type: m,
                    collection: new C()
                  }), N != null && A(N, I[R], I, S);
                });
                var M = h(m);
                u(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(I) {
                  var N = I == "add" || I == "set";
                  I in E && !(T && I == "clear") && v(P.prototype, I, function(B, F) {
                    var O = M(this).collection;
                    if (!N && T && !g(B)) return I == "get" ? void 0 : !1;
                    var H = O[I](B === 0 ? 0 : B, F);
                    return N ? this : H;
                  });
                }), T || i(P.prototype, "size", {
                  configurable: !0,
                  get: function() {
                    return M(this).collection.size;
                  }
                });
              }
              return s(P, m, !1, !0), D[m] = P, e({ global: !0, forced: !0 }, D), T || x.setStrong(P, m, S), P;
            };
          }),
          /* 123 */
          /***/
          (function(f, n, t) {
            var e = t(51), a = t(13), r = t(16), o = t(18).f, v = t(64), A = t(200), c = v("meta"), g = 0, s = Object.isExtensible || function() {
              return !0;
            }, i = function(h) {
              o(h, c, { value: {
                objectID: "O" + ++g,
                // object ID
                weakData: {}
                // weak collections IDs
              } });
            }, u = function(h, m) {
              if (!a(h)) return typeof h == "symbol" ? h : (typeof h == "string" ? "S" : "P") + h;
              if (!r(h, c)) {
                if (!s(h)) return "F";
                if (!m) return "E";
                i(h);
              }
              return h[c].objectID;
            }, l = function(h, m) {
              if (!r(h, c)) {
                if (!s(h)) return !0;
                if (!m) return !1;
                i(h);
              }
              return h[c].weakData;
            }, p = function(h) {
              return A && d.REQUIRED && s(h) && !r(h, c) && i(h), h;
            }, d = f.exports = {
              REQUIRED: !1,
              fastKey: u,
              getWeakData: l,
              onFreeze: p
            };
            e[c] = !0;
          }),
          /* 124 */
          /***/
          (function(f, n, t) {
            var e = t(18).f, a = t(77), r = t(110), o = t(40), v = t(83), A = t(66), c = t(75), g = t(111), s = t(14), i = t(123).fastKey, u = t(42), l = u.set, p = u.getterFor;
            f.exports = {
              getConstructor: function(d, h, m, y) {
                var x = d(function(C, E) {
                  v(C, x, h), l(C, {
                    type: h,
                    index: a(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                  }), s || (C.size = 0), E != null && A(E, C[y], C, m);
                }), S = p(h), T = function(C, E, D) {
                  var P = S(C), M = R(C, E), I, N;
                  return M ? M.value = D : (P.last = M = {
                    index: N = i(E, !0),
                    key: E,
                    value: D,
                    previous: I = P.last,
                    next: void 0,
                    removed: !1
                  }, P.first || (P.first = M), I && (I.next = M), s ? P.size++ : C.size++, N !== "F" && (P.index[N] = M)), C;
                }, R = function(C, E) {
                  var D = S(C), P = i(E), M;
                  if (P !== "F") return D.index[P];
                  for (M = D.first; M; M = M.next)
                    if (M.key == E) return M;
                };
                return r(x.prototype, {
                  // 23.1.3.1 Map.prototype.clear()
                  // 23.2.3.2 Set.prototype.clear()
                  clear: function() {
                    for (var E = this, D = S(E), P = D.index, M = D.first; M; )
                      M.removed = !0, M.previous && (M.previous = M.previous.next = void 0), delete P[M.index], M = M.next;
                    D.first = D.last = void 0, s ? D.size = 0 : E.size = 0;
                  },
                  // 23.1.3.3 Map.prototype.delete(key)
                  // 23.2.3.4 Set.prototype.delete(value)
                  delete: function(C) {
                    var E = this, D = S(E), P = R(E, C);
                    if (P) {
                      var M = P.next, I = P.previous;
                      delete D.index[P.index], P.removed = !0, I && (I.next = M), M && (M.previous = I), D.first == P && (D.first = M), D.last == P && (D.last = I), s ? D.size-- : E.size--;
                    }
                    return !!P;
                  },
                  // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                  // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                  forEach: function(E) {
                    for (var D = S(this), P = o(E, arguments.length > 1 ? arguments[1] : void 0, 3), M; M = M ? M.next : D.first; )
                      for (P(M.value, M.key, this); M && M.removed; ) M = M.previous;
                  },
                  // 23.1.3.7 Map.prototype.has(key)
                  // 23.2.3.7 Set.prototype.has(value)
                  has: function(E) {
                    return !!R(this, E);
                  }
                }), r(x.prototype, m ? {
                  // 23.1.3.6 Map.prototype.get(key)
                  get: function(E) {
                    var D = R(this, E);
                    return D && D.value;
                  },
                  // 23.1.3.9 Map.prototype.set(key, value)
                  set: function(E, D) {
                    return T(this, E === 0 ? 0 : E, D);
                  }
                } : {
                  // 23.2.3.1 Set.prototype.add(value)
                  add: function(E) {
                    return T(this, E = E === 0 ? 0 : E, E);
                  }
                }), s && e(x.prototype, "size", {
                  get: function() {
                    return S(this).size;
                  }
                }), x;
              },
              setStrong: function(d, h, m) {
                var y = h + " Iterator", x = p(h), S = p(y);
                c(d, h, function(T, R) {
                  l(this, {
                    type: y,
                    target: T,
                    state: x(T),
                    kind: R,
                    last: void 0
                  });
                }, function() {
                  for (var T = S(this), R = T.kind, C = T.last; C && C.removed; ) C = C.previous;
                  return !T.target || !(T.last = C = C ? C.next : T.state.first) ? (T.target = void 0, { value: void 0, done: !0 }) : R == "keys" ? { value: C.key, done: !1 } : R == "values" ? { value: C.value, done: !1 } : { value: [C.key, C.value], done: !1 };
                }, m ? "entries" : "values", !m, !0), g(h);
              }
            };
          }),
          /* 125 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("iterator");
          }),
          /* 126 */
          /***/
          (function(f, n, t) {
            var e = t(107), a = t(80), r = a.concat("length", "prototype");
            n.f = Object.getOwnPropertyNames || function(v) {
              return e(v, r);
            };
          }),
          /* 127 */
          /***/
          (function(f, n) {
            n.f = Object.getOwnPropertySymbols;
          }),
          /* 128 */
          /***/
          (function(f, n, t) {
            f.exports = t(268);
          }),
          /* 129 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.default = {
              zIndex: 1e4
            };
          }),
          /* 130 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.default = {
              focus: !0,
              height: 300,
              placeholder: "请输入正文",
              zIndexFullScreen: 10002,
              showFullScreen: !0
            };
          }),
          /* 131 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.getPasteImgs = n.getPasteHtml = n.getPasteText = void 0;
            var o = t(2), v = t(6), A = o.__importDefault(t(292));
            function c(i) {
              var u = i.clipboardData, l = "";
              return u == null ? l = window.clipboardData && window.clipboardData.getData("text") : l = u.getData("text/plain"), v.replaceHtmlSymbol(l);
            }
            n.getPasteText = c;
            function g(i, u, l) {
              u === void 0 && (u = !0), l === void 0 && (l = !1);
              var p = i.clipboardData, d = "";
              if (p && (d = p.getData("text/html")), !d) {
                var h = c(i);
                if (!h)
                  return "";
                d = "<p>" + h + "</p>";
              }
              return d = d.replace(/<(\d)/gm, function(m, y) {
                return "&lt;" + y;
              }), d = d.replace(/<(\/?meta.*?)>/gim, ""), d = A.default(d, u, l), d;
            }
            n.getPasteHtml = g;
            function s(i) {
              var u, l = [], p = c(i);
              if (p)
                return l;
              var d = (u = i.clipboardData) === null || u === void 0 ? void 0 : u.items;
              return d && (0, r.default)(v).call(v, d, function(h, m) {
                var y = m.type;
                /image/i.test(y) && l.push(m.getAsFile());
              }), l;
            }
            n.getPasteImgs = s;
          }),
          /* 132 */
          /***/
          (function(f, n, t) {
            f.exports = t(294);
          }),
          /* 133 */
          /***/
          (function(f, n, t) {
            f.exports = t(310);
          }),
          /* 134 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(46));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var v = t(2), A = v.__importDefault(t(3)), c = t(7), g = (
              /** @class */
              (function() {
                function s(i, u) {
                  var l = this;
                  this.hideTimeoutId = 0, this.menu = i, this.conf = u;
                  var p = A.default('<div class="w-e-droplist"></div>'), d = A.default("<p>" + u.title + "</p>");
                  d.addClass("w-e-dp-title"), p.append(d);
                  var h = u.list || [], m = u.type || "list", y = u.clickHandler || c.EMPTY_FN, x = A.default('<ul class="' + (m === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
                  (0, r.default)(h).call(h, function(S) {
                    var T = S.$elem, R = S.value, C = A.default('<li class="w-e-item"></li>');
                    T && (C.append(T), x.append(C), C.on("click", function(E) {
                      y(R), E.stopPropagation(), l.hideTimeoutId = (0, o.default)(function() {
                        l.hide();
                      });
                    }));
                  }), p.append(x), p.on("mouseleave", function() {
                    l.hideTimeoutId = (0, o.default)(function() {
                      l.hide();
                    });
                  }), this.$container = p, this.rendered = !1, this._show = !1;
                }
                return s.prototype.show = function() {
                  this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
                  var i = this.menu, u = i.$elem, l = this.$container;
                  if (!this._show) {
                    if (this.rendered)
                      l.show();
                    else {
                      var p = u.getBoundingClientRect().height || 0, d = this.conf.width || 100;
                      l.css("margin-top", p + "px").css("width", d + "px"), u.append(l), this.rendered = !0;
                    }
                    this._show = !0;
                  }
                }, s.prototype.hide = function() {
                  var i = this.$container;
                  this._show && (i.hide(), this._show = !1);
                }, (0, a.default)(s.prototype, "isShow", {
                  get: function() {
                    return this._show;
                  },
                  enumerable: !1,
                  configurable: !0
                }), s;
              })()
            );
            n.default = g;
          }),
          /* 135 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(92)), r = e(t(1)), o = e(t(4));
            (0, r.default)(n, "__esModule", {
              value: !0
            });
            var v = t(6);
            function A(c, g) {
              var s = new XMLHttpRequest();
              if (s.open("POST", c), s.timeout = g.timeout || 10 * 1e3, s.ontimeout = function() {
                console.error("wangEditor - 请求超时"), g.onTimeout && g.onTimeout(s);
              }, s.upload && (s.upload.onprogress = function(u) {
                var l = u.loaded / u.total;
                g.onProgress && g.onProgress(l, u);
              }), g.headers && (0, o.default)(v).call(v, g.headers, function(u, l) {
                s.setRequestHeader(u, l);
              }), s.withCredentials = !!g.withCredentials, g.beforeSend) {
                var i = g.beforeSend(s);
                if (i && (0, a.default)(i) === "object" && i.prevent)
                  return i.msg;
              }
              return s.onreadystatechange = function() {
                if (s.readyState === 4) {
                  var u = s.status;
                  if (!(u < 200) && !(u >= 300 && u < 400)) {
                    if (u >= 400) {
                      console.error("wangEditor - XHR 报错，状态码 " + u), g.onError && g.onError(s);
                      return;
                    }
                    var l = s.responseText, p;
                    if ((0, a.default)(l) !== "object")
                      try {
                        p = JSON.parse(l);
                      } catch {
                        console.error("wangEditor - 返回结果不是 JSON 格式", l), g.onFail && g.onFail(s, l);
                        return;
                      }
                    else
                      p = l;
                    g.onSuccess(s, p);
                  }
                }
              }, s.send(g.formData || null), s;
            }
            n.default = A;
          }),
          /* 136 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(342)), o = e(t(46));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var v = t(2), A = v.__importDefault(t(3)), c = (
              /** @class */
              (function() {
                function g(s) {
                  this.editor = s, this.$textContainer = s.$textContainerElem, this.$bar = A.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
                }
                return g.prototype.show = function(s) {
                  var i = this;
                  if (!this.isShow) {
                    this.isShow = !0;
                    var u = this.$bar, l = this.$textContainer;
                    l.append(u), (0, r.default)() - this.time > 100 && s <= 1 && (u.css("width", s * 100 + "%"), this.time = (0, r.default)());
                    var p = this.timeoutId;
                    p && clearTimeout(p), this.timeoutId = (0, o.default)(function() {
                      i.hide();
                    }, 500);
                  }
                }, g.prototype.hide = function() {
                  var s = this.$bar;
                  s.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
                }, g;
              })()
            );
            n.default = c;
          }),
          /* 137 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.ListType = void 0;
            var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(24)), A = t(47), c = r.__importStar(t(371)), g;
            (function(i) {
              i.OrderedList = "OL", i.UnorderedList = "UL";
            })(g = n.ListType || (n.ListType = {}));
            var s = (
              /** @class */
              (function(i) {
                r.__extends(u, i);
                function u(l) {
                  var p = this, d = o.default(`<div class="w-e-menu" data-title="序列">
                <i class="w-e-icon-list2"></i>
            </div>`), h = {
                    width: 130,
                    title: "序列",
                    type: "list",
                    list: [{
                      $elem: o.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + l.i18next.t("menus.dropListMenu.list.无序列表") + `
                        <p>`),
                      value: g.UnorderedList
                    }, {
                      $elem: o.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + l.i18next.t("menus.dropListMenu.list.有序列表") + `
                        <p>`),
                      value: g.OrderedList
                    }],
                    clickHandler: function(y) {
                      p.command(y);
                    }
                  };
                  return p = i.call(this, d, l, h) || this, p;
                }
                return u.prototype.command = function(l) {
                  var p = this.editor, d = p.selection.getSelectionContainerElem();
                  d !== void 0 && (this.handleSelectionRangeNodes(l), this.tryChangeActive());
                }, u.prototype.validator = function(l, p, d) {
                  return !(!l.length || !p.length || d.equal(l) || d.equal(p));
                }, u.prototype.handleSelectionRangeNodes = function(l) {
                  var p = this.editor, d = p.selection, h = l.toLowerCase(), m = d.getSelectionContainerElem(), y = d.getSelectionStartElem().getNodeTop(p), x = d.getSelectionEndElem().getNodeTop(p);
                  if (this.validator(y, x, p.$textElem)) {
                    var S = d.getRange(), T = S?.collapsed;
                    p.$textElem.equal(m) || (m = m.getNodeTop(p));
                    var R = {
                      editor: p,
                      listType: l,
                      listTarget: h,
                      $selectionElem: m,
                      $startElem: y,
                      $endElem: x
                    }, C;
                    this.isOrderElem(m) ? C = c.ClassType.Wrap : this.isOrderElem(y) && this.isOrderElem(x) ? C = c.ClassType.Join : this.isOrderElem(y) ? C = c.ClassType.StartJoin : this.isOrderElem(x) ? C = c.ClassType.EndJoin : C = c.ClassType.Other;
                    var E = new c.default(c.createListHandle(C, R, S));
                    A.updateRange(p, E.getSelectionRangeElem(), !!T);
                  }
                }, u.prototype.isOrderElem = function(l) {
                  var p = l.getNodeName();
                  return p === g.OrderedList || p === g.UnorderedList;
                }, u.prototype.tryChangeActive = function() {
                }, u;
              })(v.default)
            );
            n.default = s;
          }),
          /* 138 */
          /***/
          (function(f, n, t) {
            f.exports = t(395);
          }),
          /* 139 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            function r(o) {
              var v = o.selection.getSelectionContainerElem();
              return v?.length ? !!(v.getNodeName() == "CODE" || v.getNodeName() == "PRE" || v.parent().getNodeName() == "CODE" || v.parent().getNodeName() == "PRE" || /hljs/.test(v.parent().attr("class"))) : !1;
            }
            n.default = r;
          }),
          /* 140 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(29));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.todo = void 0;
            var o = t(2), v = o.__importDefault(t(3)), A = (
              /** @class */
              (function() {
                function g(s) {
                  var i;
                  this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = v.default(this.template), this.$child = (i = s?.childNodes()) === null || i === void 0 ? void 0 : i.clone(!0);
                }
                return g.prototype.init = function() {
                  var s = this.$child, i = this.getInputContainer();
                  s && s.insertAfter(i);
                }, g.prototype.getInput = function() {
                  var s = this.$todo, i = (0, r.default)(s).call(s, "input");
                  return i;
                }, g.prototype.getInputContainer = function() {
                  var s = this.getInput().parent();
                  return s;
                }, g.prototype.getTodo = function() {
                  return this.$todo;
                }, g;
              })()
            );
            n.todo = A;
            function c(g) {
              var s = new A(g);
              return s.init(), s;
            }
            n.default = c;
          }),
          /* 141 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2);
            t(146), t(148), t(152), t(154), t(156), t(158), t(160);
            var o = r.__importDefault(t(87));
            r.__exportStar(t(442), n), n.default = o.default;
          }),
          /* 142 */
          /***/
          (function(f, n, t) {
            var e = t(143);
            f.exports = e;
          }),
          /* 143 */
          /***/
          (function(f, n, t) {
            t(144);
            var e = t(9), a = e.Object, r = f.exports = function(v, A, c) {
              return a.defineProperty(v, A, c);
            };
            a.defineProperty.sham && (r.sham = !0);
          }),
          /* 144 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(14), r = t(18);
            e({ target: "Object", stat: !0, forced: !a, sham: !a }, {
              defineProperty: r.f
            });
          }),
          /* 145 */
          /***/
          (function(f, n) {
            var t;
            t = /* @__PURE__ */ (function() {
              return this;
            })();
            try {
              t = t || new Function("return this")();
            } catch {
              typeof window == "object" && (t = window);
            }
            f.exports = t;
          }),
          /* 146 */
          /***/
          (function(f, n, t) {
            var e = t(20), a = t(147);
            a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
            var r = {};
            r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
          }),
          /* 147 */
          /***/
          (function(f, n, t) {
            var e = t(21);
            n = e(!1), n.push([f.i, `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*表情菜单样式*/
  /*分割线样式*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`, ""]), f.exports = n;
          }),
          /* 148 */
          /***/
          (function(f, n, t) {
            var e = t(20), a = t(149);
            a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
            var r = {};
            r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
          }),
          /* 149 */
          /***/
          (function(f, n, t) {
            var e = t(21), a = t(150), r = t(151);
            n = e(!1);
            var o = a(r);
            n.push([f.i, `@font-face {
  font-family: 'w-e-icon';
  src: url(` + o + `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`, ""]), f.exports = n;
          }),
          /* 150 */
          /***/
          (function(f, n, t) {
            f.exports = function(e, a) {
              return a || (a = {}), e = e && e.__esModule ? e.default : e, typeof e != "string" ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), a.hash && (e += a.hash), /["'() \t\n]/.test(e) || a.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e);
            };
          }),
          /* 151 */
          /***/
          (function(f, n, t) {
            t.r(n), n.default = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
          }),
          /* 152 */
          /***/
          (function(f, n, t) {
            var e = t(20), a = t(153);
            a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
            var r = {};
            r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
          }),
          /* 153 */
          /***/
          (function(f, n, t) {
            var e = t(21);
            n = e(!1), n.push([f.i, `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* 单个菜单 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`, ""]), f.exports = n;
          }),
          /* 154 */
          /***/
          (function(f, n, t) {
            var e = t(20), a = t(155);
            a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
            var r = {};
            r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
          }),
          /* 155 */
          /***/
          (function(f, n, t) {
            var e = t(21);
            n = e(!1), n.push([f.i, `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`, ""]), f.exports = n;
          }),
          /* 156 */
          /***/
          (function(f, n, t) {
            var e = t(20), a = t(157);
            a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
            var r = {};
            r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
          }),
          /* 157 */
          /***/
          (function(f, n, t) {
            var e = t(21);
            n = e(!1), n.push([f.i, `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* 为 emotion panel 定制的样式 */
  /* 上传图片、上传视频的 panel 定制样式 */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* 输入框的样式 */
  /* 按钮的样式 */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`, ""]), f.exports = n;
          }),
          /* 158 */
          /***/
          (function(f, n, t) {
            var e = t(20), a = t(159);
            a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
            var r = {};
            r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
          }),
          /* 159 */
          /***/
          (function(f, n, t) {
            var e = t(21);
            n = e(!1), n.push([f.i, `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`, ""]), f.exports = n;
          }),
          /* 160 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(161));
            Element.prototype.matches || (Element.prototype.matches = function(r) {
              var o = this.ownerDocument.querySelectorAll(r), v = o.length;
              for (v; v >= 0 && o.item(v) !== this; v--)
                ;
              return v > -1;
            }), a.default || (window.Promise = a.default);
          }),
          /* 161 */
          /***/
          (function(f, n, t) {
            f.exports = t(162);
          }),
          /* 162 */
          /***/
          (function(f, n, t) {
            var e = t(163);
            f.exports = e;
          }),
          /* 163 */
          /***/
          (function(f, n, t) {
            t(61), t(50), t(54), t(175), t(178), t(179);
            var e = t(9);
            f.exports = e.Promise;
          }),
          /* 164 */
          /***/
          (function(f, n, t) {
            var e = t(62), a = t(49), r = function(o) {
              return function(v, A) {
                var c = String(a(v)), g = e(A), s = c.length, i, u;
                return g < 0 || g >= s ? o ? "" : void 0 : (i = c.charCodeAt(g), i < 55296 || i > 56319 || g + 1 === s || (u = c.charCodeAt(g + 1)) < 56320 || u > 57343 ? o ? c.charAt(g) : i : o ? c.slice(g, g + 2) : (i - 55296 << 10) + (u - 56320) + 65536);
              };
            };
            f.exports = {
              // `String.prototype.codePointAt` method
              // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
              codeAt: r(!1),
              // `String.prototype.at` method
              // https://github.com/mathiasbynens/String.prototype.at
              charAt: r(!0)
            };
          }),
          /* 165 */
          /***/
          (function(f, n, t) {
            var e = t(8), a = t(102), r = e.WeakMap;
            f.exports = typeof r == "function" && /native code/.test(a(r));
          }),
          /* 166 */
          /***/
          (function(f, n, t) {
            var e = t(8), a = t(19);
            f.exports = function(r, o) {
              try {
                a(e, r, o);
              } catch {
                e[r] = o;
              }
              return o;
            };
          }),
          /* 167 */
          /***/
          (function(f, n, t) {
            var e = t(104).IteratorPrototype, a = t(77), r = t(48), o = t(37), v = t(44), A = function() {
              return this;
            };
            f.exports = function(c, g, s) {
              var i = g + " Iterator";
              return c.prototype = a(e, { next: r(1, s) }), o(c, i, !1, !0), v[i] = A, c;
            };
          }),
          /* 168 */
          /***/
          (function(f, n, t) {
            var e = t(11);
            f.exports = !e(function() {
              function a() {
              }
              return a.prototype.constructor = null, Object.getPrototypeOf(new a()) !== a.prototype;
            });
          }),
          /* 169 */
          /***/
          (function(f, n, t) {
            var e = t(14), a = t(18), r = t(25), o = t(52);
            f.exports = e ? Object.defineProperties : function(A, c) {
              r(A);
              for (var g = o(c), s = g.length, i = 0, u; s > i; ) a.f(A, u = g[i++], c[u]);
              return A;
            };
          }),
          /* 170 */
          /***/
          (function(f, n, t) {
            var e = t(81), a = t(65);
            f.exports = e ? {}.toString : function() {
              return "[object " + a(this) + "]";
            };
          }),
          /* 171 */
          /***/
          (function(f, n, t) {
            var e = t(25), a = t(172);
            f.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
              var r = !1, o = {}, v;
              try {
                v = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, v.call(o, []), r = o instanceof Array;
              } catch {
              }
              return function(c, g) {
                return e(c), a(g), r ? v.call(c, g) : c.__proto__ = g, c;
              };
            })() : void 0);
          }),
          /* 172 */
          /***/
          (function(f, n, t) {
            var e = t(13);
            f.exports = function(a) {
              if (!e(a) && a !== null)
                throw TypeError("Can't set " + String(a) + " as a prototype");
              return a;
            };
          }),
          /* 173 */
          /***/
          (function(f, n, t) {
            var e = t(30), a = t(82), r = t(44), o = t(42), v = t(75), A = "Array Iterator", c = o.set, g = o.getterFor(A);
            f.exports = v(Array, "Array", function(s, i) {
              c(this, {
                type: A,
                target: e(s),
                // target
                index: 0,
                // next index
                kind: i
                // kind
              });
            }, function() {
              var s = g(this), i = s.target, u = s.kind, l = s.index++;
              return !i || l >= i.length ? (s.target = void 0, { value: void 0, done: !0 }) : u == "keys" ? { value: l, done: !1 } : u == "values" ? { value: i[l], done: !1 } : { value: [l, i[l]], done: !1 };
            }, "values"), r.Arguments = r.Array, a("keys"), a("values"), a("entries");
          }),
          /* 174 */
          /***/
          (function(f, n) {
            f.exports = {
              CSSRuleList: 0,
              CSSStyleDeclaration: 0,
              CSSValueList: 0,
              ClientRectList: 0,
              DOMRectList: 0,
              DOMStringList: 0,
              DOMTokenList: 1,
              DataTransferItemList: 0,
              FileList: 0,
              HTMLAllCollection: 0,
              HTMLCollection: 0,
              HTMLFormElement: 0,
              HTMLSelectElement: 0,
              MediaList: 0,
              MimeTypeArray: 0,
              NamedNodeMap: 0,
              NodeList: 1,
              PaintRequestList: 0,
              Plugin: 0,
              PluginArray: 0,
              SVGLengthList: 0,
              SVGNumberList: 0,
              SVGPathSegList: 0,
              SVGPointList: 0,
              SVGStringList: 0,
              SVGTransformList: 0,
              SourceBufferList: 0,
              StyleSheetList: 0,
              TextTrackCueList: 0,
              TextTrackList: 0,
              TouchList: 0
            };
          }),
          /* 175 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(43), r = t(8), o = t(36), v = t(109), A = t(53), c = t(110), g = t(37), s = t(111), i = t(13), u = t(41), l = t(83), p = t(34), d = t(102), h = t(66), m = t(115), y = t(116), x = t(117).set, S = t(176), T = t(119), R = t(177), C = t(85), E = t(120), D = t(42), P = t(101), M = t(10), I = t(86), N = M("species"), B = "Promise", F = D.get, O = D.set, H = D.getterFor(B), L = v, U = r.TypeError, z = r.document, j = r.process, K = o("fetch"), V = C.f, Q = V, $ = p(j) == "process", G = !!(z && z.createEvent && r.dispatchEvent), X = "unhandledrejection", tt = "rejectionhandled", et = 0, st = 1, Ht = 2, it = 1, It = 2, At, lt, dt, yt, ct = P(B, function() {
              var J = d(L) !== String(L);
              if (!J && (I === 66 || !$ && typeof PromiseRejectionEvent != "function") || a && !L.prototype.finally) return !0;
              if (I >= 51 && /native code/.test(L)) return !1;
              var w = L.resolve(1), Z = function(Y) {
                Y(function() {
                }, function() {
                });
              }, q = w.constructor = {};
              return q[N] = Z, !(w.then(function() {
              }) instanceof Z);
            }), jt = ct || !m(function(J) {
              L.all(J).catch(function() {
              });
            }), Et = function(J) {
              var w;
              return i(J) && typeof (w = J.then) == "function" ? w : !1;
            }, ht = function(J, w, Z) {
              if (!w.notified) {
                w.notified = !0;
                var q = w.reactions;
                S(function() {
                  for (var Y = w.value, b = w.state == st, W = 0; q.length > W; ) {
                    var k = q[W++], _ = b ? k.ok : k.fail, nt = k.resolve, ut = k.reject, ft = k.domain, at, Nt, Lt;
                    try {
                      _ ? (b || (w.rejection === It && Ct(J, w), w.rejection = it), _ === !0 ? at = Y : (ft && ft.enter(), at = _(Y), ft && (ft.exit(), Lt = !0)), at === k.promise ? ut(U("Promise-chain cycle")) : (Nt = Et(at)) ? Nt.call(at, nt, ut) : nt(at)) : ut(Y);
                    } catch (Vt) {
                      ft && !Lt && ft.exit(), ut(Vt);
                    }
                  }
                  w.reactions = [], w.notified = !1, Z && !w.rejection && Mt(J, w);
                });
              }
            }, xt = function(J, w, Z) {
              var q, Y;
              G ? (q = z.createEvent("Event"), q.promise = w, q.reason = Z, q.initEvent(J, !1, !0), r.dispatchEvent(q)) : q = { promise: w, reason: Z }, (Y = r["on" + J]) ? Y(q) : J === X && R("Unhandled promise rejection", Z);
            }, Mt = function(J, w) {
              x.call(r, function() {
                var Z = w.value, q = St(w), Y;
                if (q && (Y = E(function() {
                  $ ? j.emit("unhandledRejection", Z, J) : xt(X, J, Z);
                }), w.rejection = $ || St(w) ? It : it, Y.error))
                  throw Y.value;
              });
            }, St = function(J) {
              return J.rejection !== it && !J.parent;
            }, Ct = function(J, w) {
              x.call(r, function() {
                $ ? j.emit("rejectionHandled", J) : xt(tt, J, w.value);
              });
            }, vt = function(J, w, Z, q) {
              return function(Y) {
                J(w, Z, Y, q);
              };
            }, pt = function(J, w, Z, q) {
              w.done || (w.done = !0, q && (w = q), w.value = Z, w.state = Ht, ht(J, w, !0));
            }, gt = function(J, w, Z, q) {
              if (!w.done) {
                w.done = !0, q && (w = q);
                try {
                  if (J === Z) throw U("Promise can't be resolved itself");
                  var Y = Et(Z);
                  Y ? S(function() {
                    var b = { done: !1 };
                    try {
                      Y.call(
                        Z,
                        vt(gt, J, b, w),
                        vt(pt, J, b, w)
                      );
                    } catch (W) {
                      pt(J, b, W, w);
                    }
                  }) : (w.value = Z, w.state = st, ht(J, w, !1));
                } catch (b) {
                  pt(J, { done: !1 }, b, w);
                }
              }
            };
            ct && (L = function(w) {
              l(this, L, B), u(w), At.call(this);
              var Z = F(this);
              try {
                w(vt(gt, this, Z), vt(pt, this, Z));
              } catch (q) {
                pt(this, Z, q);
              }
            }, At = function(w) {
              O(this, {
                type: B,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: et,
                value: void 0
              });
            }, At.prototype = c(L.prototype, {
              // `Promise.prototype.then` method
              // https://tc39.github.io/ecma262/#sec-promise.prototype.then
              then: function(w, Z) {
                var q = H(this), Y = V(y(this, L));
                return Y.ok = typeof w == "function" ? w : !0, Y.fail = typeof Z == "function" && Z, Y.domain = $ ? j.domain : void 0, q.parent = !0, q.reactions.push(Y), q.state != et && ht(this, q, !1), Y.promise;
              },
              // `Promise.prototype.catch` method
              // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
              catch: function(J) {
                return this.then(void 0, J);
              }
            }), lt = function() {
              var J = new At(), w = F(J);
              this.promise = J, this.resolve = vt(gt, J, w), this.reject = vt(pt, J, w);
            }, C.f = V = function(J) {
              return J === L || J === dt ? new lt(J) : Q(J);
            }, !a && typeof v == "function" && (yt = v.prototype.then, A(v.prototype, "then", function(w, Z) {
              var q = this;
              return new L(function(Y, b) {
                yt.call(q, Y, b);
              }).then(w, Z);
            }, { unsafe: !0 }), typeof K == "function" && e({ global: !0, enumerable: !0, forced: !0 }, {
              // eslint-disable-next-line no-unused-vars
              fetch: function(w) {
                return T(L, K.apply(r, arguments));
              }
            }))), e({ global: !0, wrap: !0, forced: ct }, {
              Promise: L
            }), g(L, B, !1, !0), s(B), dt = o(B), e({ target: B, stat: !0, forced: ct }, {
              // `Promise.reject` method
              // https://tc39.github.io/ecma262/#sec-promise.reject
              reject: function(w) {
                var Z = V(this);
                return Z.reject.call(void 0, w), Z.promise;
              }
            }), e({ target: B, stat: !0, forced: a || ct }, {
              // `Promise.resolve` method
              // https://tc39.github.io/ecma262/#sec-promise.resolve
              resolve: function(w) {
                return T(a && this === dt ? L : this, w);
              }
            }), e({ target: B, stat: !0, forced: jt }, {
              // `Promise.all` method
              // https://tc39.github.io/ecma262/#sec-promise.all
              all: function(w) {
                var Z = this, q = V(Z), Y = q.resolve, b = q.reject, W = E(function() {
                  var k = u(Z.resolve), _ = [], nt = 0, ut = 1;
                  h(w, function(ft) {
                    var at = nt++, Nt = !1;
                    _.push(void 0), ut++, k.call(Z, ft).then(function(Lt) {
                      Nt || (Nt = !0, _[at] = Lt, --ut || Y(_));
                    }, b);
                  }), --ut || Y(_);
                });
                return W.error && b(W.value), q.promise;
              },
              // `Promise.race` method
              // https://tc39.github.io/ecma262/#sec-promise.race
              race: function(w) {
                var Z = this, q = V(Z), Y = q.reject, b = E(function() {
                  var W = u(Z.resolve);
                  h(w, function(k) {
                    W.call(Z, k).then(q.resolve, Y);
                  });
                });
                return b.error && Y(b.value), q.promise;
              }
            });
          }),
          /* 176 */
          /***/
          (function(f, n, t) {
            var e = t(8), a = t(71).f, r = t(34), o = t(117).set, v = t(118), A = e.MutationObserver || e.WebKitMutationObserver, c = e.process, g = e.Promise, s = r(c) == "process", i = a(e, "queueMicrotask"), u = i && i.value, l, p, d, h, m, y, x, S;
            u || (l = function() {
              var T, R;
              for (s && (T = c.domain) && T.exit(); p; ) {
                R = p.fn, p = p.next;
                try {
                  R();
                } catch (C) {
                  throw p ? h() : d = void 0, C;
                }
              }
              d = void 0, T && T.enter();
            }, s ? h = function() {
              c.nextTick(l);
            } : A && !v ? (m = !0, y = document.createTextNode(""), new A(l).observe(y, { characterData: !0 }), h = function() {
              y.data = m = !m;
            }) : g && g.resolve ? (x = g.resolve(void 0), S = x.then, h = function() {
              S.call(x, l);
            }) : h = function() {
              o.call(e, l);
            }), f.exports = u || function(T) {
              var R = { fn: T, next: void 0 };
              d && (d.next = R), p || (p = R, h()), d = R;
            };
          }),
          /* 177 */
          /***/
          (function(f, n, t) {
            var e = t(8);
            f.exports = function(a, r) {
              var o = e.console;
              o && o.error && (arguments.length === 1 ? o.error(a) : o.error(a, r));
            };
          }),
          /* 178 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(41), r = t(85), o = t(120), v = t(66);
            e({ target: "Promise", stat: !0 }, {
              allSettled: function(c) {
                var g = this, s = r.f(g), i = s.resolve, u = s.reject, l = o(function() {
                  var p = a(g.resolve), d = [], h = 0, m = 1;
                  v(c, function(y) {
                    var x = h++, S = !1;
                    d.push(void 0), m++, p.call(g, y).then(function(T) {
                      S || (S = !0, d[x] = { status: "fulfilled", value: T }, --m || i(d));
                    }, function(T) {
                      S || (S = !0, d[x] = { status: "rejected", reason: T }, --m || i(d));
                    });
                  }), --m || i(d);
                });
                return l.error && u(l.value), s.promise;
              }
            });
          }),
          /* 179 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(43), r = t(109), o = t(11), v = t(36), A = t(116), c = t(119), g = t(53), s = !!r && o(function() {
              r.prototype.finally.call({ then: function() {
              } }, function() {
              });
            });
            e({ target: "Promise", proto: !0, real: !0, forced: s }, {
              finally: function(i) {
                var u = A(this, v("Promise")), l = typeof i == "function";
                return this.then(
                  l ? function(p) {
                    return c(u, i()).then(function() {
                      return p;
                    });
                  } : i,
                  l ? function(p) {
                    return c(u, i()).then(function() {
                      throw p;
                    });
                  } : i
                );
              }
            }), !a && typeof r == "function" && !r.prototype.finally && g(r.prototype, "finally", v("Promise").prototype.finally);
          }),
          /* 180 */
          /***/
          (function(f, n, t) {
            t(54);
            var e = t(181), a = t(65), r = Array.prototype, o = {
              DOMTokenList: !0,
              NodeList: !0
            };
            f.exports = function(v) {
              var A = v.forEach;
              return v === r || v instanceof Array && A === r.forEach || o.hasOwnProperty(a(v)) ? e : A;
            };
          }),
          /* 181 */
          /***/
          (function(f, n, t) {
            var e = t(182);
            f.exports = e;
          }),
          /* 182 */
          /***/
          (function(f, n, t) {
            t(183);
            var e = t(15);
            f.exports = e("Array").forEach;
          }),
          /* 183 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(184);
            e({ target: "Array", proto: !0, forced: [].forEach != a }, {
              forEach: a
            });
          }),
          /* 184 */
          /***/
          (function(f, n, t) {
            var e = t(32).forEach, a = t(67), r = t(22), o = a("forEach"), v = r("forEach");
            f.exports = !o || !v ? function(c) {
              return e(this, c, arguments.length > 1 ? arguments[1] : void 0);
            } : [].forEach;
          }),
          /* 185 */
          /***/
          (function(f, n, t) {
            var e = t(186);
            f.exports = e;
          }),
          /* 186 */
          /***/
          (function(f, n, t) {
            t(187);
            var e = t(9);
            f.exports = e.Array.isArray;
          }),
          /* 187 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(55);
            e({ target: "Array", stat: !0 }, {
              isArray: a
            });
          }),
          /* 188 */
          /***/
          (function(f, n, t) {
            var e = t(189);
            f.exports = e;
          }),
          /* 189 */
          /***/
          (function(f, n, t) {
            var e = t(190), a = Array.prototype;
            f.exports = function(r) {
              var o = r.map;
              return r === a || r instanceof Array && o === a.map ? e : o;
            };
          }),
          /* 190 */
          /***/
          (function(f, n, t) {
            t(191);
            var e = t(15);
            f.exports = e("Array").map;
          }),
          /* 191 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(32).map, r = t(56), o = t(22), v = r("map"), A = o("map");
            e({ target: "Array", proto: !0, forced: !v || !A }, {
              map: function(g) {
                return a(this, g, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          }),
          /* 192 */
          /***/
          (function(f, n, t) {
            var e = t(193);
            f.exports = e;
          }),
          /* 193 */
          /***/
          (function(f, n, t) {
            var e = t(194), a = String.prototype;
            f.exports = function(r) {
              var o = r.trim;
              return typeof r == "string" || r === a || r instanceof String && o === a.trim ? e : o;
            };
          }),
          /* 194 */
          /***/
          (function(f, n, t) {
            t(195);
            var e = t(15);
            f.exports = e("String").trim;
          }),
          /* 195 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(90).trim, r = t(196);
            e({ target: "String", proto: !0, forced: r("trim") }, {
              trim: function() {
                return a(this);
              }
            });
          }),
          /* 196 */
          /***/
          (function(f, n, t) {
            var e = t(11), a = t(68), r = "​᠎";
            f.exports = function(o) {
              return e(function() {
                return !!a[o]() || r[o]() != r || a[o].name !== o;
              });
            };
          }),
          /* 197 */
          /***/
          (function(f, n, t) {
            var e = t(198);
            f.exports = e;
          }),
          /* 198 */
          /***/
          (function(f, n, t) {
            t(199), t(61), t(50), t(54);
            var e = t(9);
            f.exports = e.Map;
          }),
          /* 199 */
          /***/
          (function(f, n, t) {
            var e = t(122), a = t(124);
            f.exports = e("Map", function(r) {
              return function() {
                return r(this, arguments.length ? arguments[0] : void 0);
              };
            }, a);
          }),
          /* 200 */
          /***/
          (function(f, n, t) {
            var e = t(11);
            f.exports = !e(function() {
              return Object.isExtensible(Object.preventExtensions({}));
            });
          }),
          /* 201 */
          /***/
          (function(f, n, t) {
            var e = t(202);
            f.exports = e;
          }),
          /* 202 */
          /***/
          (function(f, n, t) {
            var e = t(203), a = Array.prototype;
            f.exports = function(r) {
              var o = r.indexOf;
              return r === a || r instanceof Array && o === a.indexOf ? e : o;
            };
          }),
          /* 203 */
          /***/
          (function(f, n, t) {
            t(204);
            var e = t(15);
            f.exports = e("Array").indexOf;
          }),
          /* 204 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(78).indexOf, r = t(67), o = t(22), v = [].indexOf, A = !!v && 1 / [1].indexOf(1, -0) < 0, c = r("indexOf"), g = o("indexOf", { ACCESSORS: !0, 1: 0 });
            e({ target: "Array", proto: !0, forced: A || !c || !g }, {
              indexOf: function(i) {
                return A ? v.apply(this, arguments) || 0 : a(this, i, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          }),
          /* 205 */
          /***/
          (function(f, n, t) {
            var e = t(206);
            f.exports = e;
          }),
          /* 206 */
          /***/
          (function(f, n, t) {
            var e = t(207), a = Array.prototype;
            f.exports = function(r) {
              var o = r.splice;
              return r === a || r instanceof Array && o === a.splice ? e : o;
            };
          }),
          /* 207 */
          /***/
          (function(f, n, t) {
            t(208);
            var e = t(15);
            f.exports = e("Array").splice;
          }),
          /* 208 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(79), r = t(62), o = t(35), v = t(31), A = t(88), c = t(69), g = t(56), s = t(22), i = g("splice"), u = s("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), l = Math.max, p = Math.min, d = 9007199254740991, h = "Maximum allowed length exceeded";
            e({ target: "Array", proto: !0, forced: !i || !u }, {
              splice: function(y, x) {
                var S = v(this), T = o(S.length), R = a(y, T), C = arguments.length, E, D, P, M, I, N;
                if (C === 0 ? E = D = 0 : C === 1 ? (E = 0, D = T - R) : (E = C - 2, D = p(l(r(x), 0), T - R)), T + E - D > d)
                  throw TypeError(h);
                for (P = A(S, D), M = 0; M < D; M++)
                  I = R + M, I in S && c(P, M, S[I]);
                if (P.length = D, E < D) {
                  for (M = R; M < T - D; M++)
                    I = M + D, N = M + E, I in S ? S[N] = S[I] : delete S[N];
                  for (M = T; M > T - D + E; M--) delete S[M - 1];
                } else if (E > D)
                  for (M = T - D; M > R; M--)
                    I = M + D - 1, N = M + E - 1, I in S ? S[N] = S[I] : delete S[N];
                for (M = 0; M < E; M++)
                  S[M + R] = arguments[M + 2];
                return S.length = T - D + E, P;
              }
            });
          }),
          /* 209 */
          /***/
          (function(f, n, t) {
            var e = t(210);
            f.exports = e;
          }),
          /* 210 */
          /***/
          (function(f, n, t) {
            var e = t(211), a = Array.prototype;
            f.exports = function(r) {
              var o = r.filter;
              return r === a || r instanceof Array && o === a.filter ? e : o;
            };
          }),
          /* 211 */
          /***/
          (function(f, n, t) {
            t(212);
            var e = t(15);
            f.exports = e("Array").filter;
          }),
          /* 212 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(32).filter, r = t(56), o = t(22), v = r("filter"), A = o("filter");
            e({ target: "Array", proto: !0, forced: !v || !A }, {
              filter: function(g) {
                return a(this, g, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          }),
          /* 213 */
          /***/
          (function(f, n, t) {
            var e = t(214);
            f.exports = e;
          }),
          /* 214 */
          /***/
          (function(f, n, t) {
            var e = t(215), a = t(217), r = Array.prototype, o = String.prototype;
            f.exports = function(v) {
              var A = v.includes;
              return v === r || v instanceof Array && A === r.includes ? e : typeof v == "string" || v === o || v instanceof String && A === o.includes ? a : A;
            };
          }),
          /* 215 */
          /***/
          (function(f, n, t) {
            t(216);
            var e = t(15);
            f.exports = e("Array").includes;
          }),
          /* 216 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(78).includes, r = t(82), o = t(22), v = o("indexOf", { ACCESSORS: !0, 1: 0 });
            e({ target: "Array", proto: !0, forced: !v }, {
              includes: function(c) {
                return a(this, c, arguments.length > 1 ? arguments[1] : void 0);
              }
            }), r("includes");
          }),
          /* 217 */
          /***/
          (function(f, n, t) {
            t(218);
            var e = t(15);
            f.exports = e("String").includes;
          }),
          /* 218 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(219), r = t(49), o = t(221);
            e({ target: "String", proto: !0, forced: !o("includes") }, {
              includes: function(A) {
                return !!~String(r(this)).indexOf(a(A), arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          }),
          /* 219 */
          /***/
          (function(f, n, t) {
            var e = t(220);
            f.exports = function(a) {
              if (e(a))
                throw TypeError("The method doesn't accept regular expressions");
              return a;
            };
          }),
          /* 220 */
          /***/
          (function(f, n, t) {
            var e = t(13), a = t(34), r = t(10), o = r("match");
            f.exports = function(v) {
              var A;
              return e(v) && ((A = v[o]) !== void 0 ? !!A : a(v) == "RegExp");
            };
          }),
          /* 221 */
          /***/
          (function(f, n, t) {
            var e = t(10), a = e("match");
            f.exports = function(r) {
              var o = /./;
              try {
                "/./"[r](o);
              } catch {
                try {
                  return o[a] = !1, "/./"[r](o);
                } catch {
                }
              }
              return !1;
            };
          }),
          /* 222 */
          /***/
          (function(f, n, t) {
            var e = t(223);
            f.exports = e;
          }),
          /* 223 */
          /***/
          (function(f, n, t) {
            var e = t(224), a = Function.prototype;
            f.exports = function(r) {
              var o = r.bind;
              return r === a || r instanceof Function && o === a.bind ? e : o;
            };
          }),
          /* 224 */
          /***/
          (function(f, n, t) {
            t(225);
            var e = t(15);
            f.exports = e("Function").bind;
          }),
          /* 225 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(226);
            e({ target: "Function", proto: !0 }, {
              bind: a
            });
          }),
          /* 226 */
          /***/
          (function(f, n, t) {
            var e = t(41), a = t(13), r = [].slice, o = {}, v = function(A, c, g) {
              if (!(c in o)) {
                for (var s = [], i = 0; i < c; i++) s[i] = "a[" + i + "]";
                o[c] = Function("C,a", "return new C(" + s.join(",") + ")");
              }
              return o[c](A, g);
            };
            f.exports = Function.bind || function(c) {
              var g = e(this), s = r.call(arguments, 1), i = function() {
                var l = s.concat(r.call(arguments));
                return this instanceof i ? v(g, l.length, l) : g.apply(c, l);
              };
              return a(g.prototype) && (i.prototype = g.prototype), i;
            };
          }),
          /* 227 */
          /***/
          (function(f, n, t) {
            f.exports = t(228);
          }),
          /* 228 */
          /***/
          (function(f, n, t) {
            var e = t(229);
            f.exports = e;
          }),
          /* 229 */
          /***/
          (function(f, n, t) {
            t(125), t(50), t(54);
            var e = t(93);
            f.exports = e.f("iterator");
          }),
          /* 230 */
          /***/
          (function(f, n, t) {
            f.exports = t(231);
          }),
          /* 231 */
          /***/
          (function(f, n, t) {
            var e = t(232);
            t(251), t(252), t(253), t(254), t(255), f.exports = e;
          }),
          /* 232 */
          /***/
          (function(f, n, t) {
            t(233), t(61), t(234), t(236), t(237), t(238), t(239), t(125), t(240), t(241), t(242), t(243), t(244), t(245), t(246), t(247), t(248), t(249), t(250);
            var e = t(9);
            f.exports = e.Symbol;
          }),
          /* 233 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(11), r = t(55), o = t(13), v = t(31), A = t(35), c = t(69), g = t(88), s = t(56), i = t(10), u = t(86), l = i("isConcatSpreadable"), p = 9007199254740991, d = "Maximum allowed index exceeded", h = u >= 51 || !a(function() {
              var S = [];
              return S[l] = !1, S.concat()[0] !== S;
            }), m = s("concat"), y = function(S) {
              if (!o(S)) return !1;
              var T = S[l];
              return T !== void 0 ? !!T : r(S);
            }, x = !h || !m;
            e({ target: "Array", proto: !0, forced: x }, {
              concat: function(T) {
                var R = v(this), C = g(R, 0), E = 0, D, P, M, I, N;
                for (D = -1, M = arguments.length; D < M; D++)
                  if (N = D === -1 ? R : arguments[D], y(N)) {
                    if (I = A(N.length), E + I > p) throw TypeError(d);
                    for (P = 0; P < I; P++, E++) P in N && c(C, E, N[P]);
                  } else {
                    if (E >= p) throw TypeError(d);
                    c(C, E++, N);
                  }
                return C.length = E, C;
              }
            });
          }),
          /* 234 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(8), r = t(36), o = t(43), v = t(14), A = t(76), c = t(106), g = t(11), s = t(16), i = t(55), u = t(13), l = t(25), p = t(31), d = t(30), h = t(60), m = t(48), y = t(77), x = t(52), S = t(126), T = t(235), R = t(127), C = t(71), E = t(18), D = t(59), P = t(19), M = t(53), I = t(74), N = t(63), B = t(51), F = t(64), O = t(10), H = t(93), L = t(12), U = t(37), z = t(42), j = t(32).forEach, K = N("hidden"), V = "Symbol", Q = "prototype", $ = O("toPrimitive"), G = z.set, X = z.getterFor(V), tt = Object[Q], et = a.Symbol, st = r("JSON", "stringify"), Ht = C.f, it = E.f, It = T.f, At = D.f, lt = I("symbols"), dt = I("op-symbols"), yt = I("string-to-symbol-registry"), ct = I("symbol-to-string-registry"), jt = I("wks"), Et = a.QObject, ht = !Et || !Et[Q] || !Et[Q].findChild, xt = v && g(function() {
              return y(it({}, "a", {
                get: function() {
                  return it(this, "a", { value: 7 }).a;
                }
              })).a != 7;
            }) ? function(Y, b, W) {
              var k = Ht(tt, b);
              k && delete tt[b], it(Y, b, W), k && Y !== tt && it(tt, b, k);
            } : it, Mt = function(Y, b) {
              var W = lt[Y] = y(et[Q]);
              return G(W, {
                type: V,
                tag: Y,
                description: b
              }), v || (W.description = b), W;
            }, St = c ? function(Y) {
              return typeof Y == "symbol";
            } : function(Y) {
              return Object(Y) instanceof et;
            }, Ct = function(b, W, k) {
              b === tt && Ct(dt, W, k), l(b);
              var _ = h(W, !0);
              return l(k), s(lt, _) ? (k.enumerable ? (s(b, K) && b[K][_] && (b[K][_] = !1), k = y(k, { enumerable: m(0, !1) })) : (s(b, K) || it(b, K, m(1, {})), b[K][_] = !0), xt(b, _, k)) : it(b, _, k);
            }, vt = function(b, W) {
              l(b);
              var k = d(W), _ = x(k).concat(Z(k));
              return j(_, function(nt) {
                (!v || gt.call(k, nt)) && Ct(b, nt, k[nt]);
              }), b;
            }, pt = function(b, W) {
              return W === void 0 ? y(b) : vt(y(b), W);
            }, gt = function(b) {
              var W = h(b, !0), k = At.call(this, W);
              return this === tt && s(lt, W) && !s(dt, W) ? !1 : k || !s(this, W) || !s(lt, W) || s(this, K) && this[K][W] ? k : !0;
            }, J = function(b, W) {
              var k = d(b), _ = h(W, !0);
              if (!(k === tt && s(lt, _) && !s(dt, _))) {
                var nt = Ht(k, _);
                return nt && s(lt, _) && !(s(k, K) && k[K][_]) && (nt.enumerable = !0), nt;
              }
            }, w = function(b) {
              var W = It(d(b)), k = [];
              return j(W, function(_) {
                !s(lt, _) && !s(B, _) && k.push(_);
              }), k;
            }, Z = function(b) {
              var W = b === tt, k = It(W ? dt : d(b)), _ = [];
              return j(k, function(nt) {
                s(lt, nt) && (!W || s(tt, nt)) && _.push(lt[nt]);
              }), _;
            };
            if (A || (et = function() {
              if (this instanceof et) throw TypeError("Symbol is not a constructor");
              var b = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), W = F(b), k = function(_) {
                this === tt && k.call(dt, _), s(this, K) && s(this[K], W) && (this[K][W] = !1), xt(this, W, m(1, _));
              };
              return v && ht && xt(tt, W, { configurable: !0, set: k }), Mt(W, b);
            }, M(et[Q], "toString", function() {
              return X(this).tag;
            }), M(et, "withoutSetter", function(Y) {
              return Mt(F(Y), Y);
            }), D.f = gt, E.f = Ct, C.f = J, S.f = T.f = w, R.f = Z, H.f = function(Y) {
              return Mt(O(Y), Y);
            }, v && (it(et[Q], "description", {
              configurable: !0,
              get: function() {
                return X(this).description;
              }
            }), o || M(tt, "propertyIsEnumerable", gt, { unsafe: !0 }))), e({ global: !0, wrap: !0, forced: !A, sham: !A }, {
              Symbol: et
            }), j(x(jt), function(Y) {
              L(Y);
            }), e({ target: V, stat: !0, forced: !A }, {
              // `Symbol.for` method
              // https://tc39.github.io/ecma262/#sec-symbol.for
              for: function(Y) {
                var b = String(Y);
                if (s(yt, b)) return yt[b];
                var W = et(b);
                return yt[b] = W, ct[W] = b, W;
              },
              // `Symbol.keyFor` method
              // https://tc39.github.io/ecma262/#sec-symbol.keyfor
              keyFor: function(b) {
                if (!St(b)) throw TypeError(b + " is not a symbol");
                if (s(ct, b)) return ct[b];
              },
              useSetter: function() {
                ht = !0;
              },
              useSimple: function() {
                ht = !1;
              }
            }), e({ target: "Object", stat: !0, forced: !A, sham: !v }, {
              // `Object.create` method
              // https://tc39.github.io/ecma262/#sec-object.create
              create: pt,
              // `Object.defineProperty` method
              // https://tc39.github.io/ecma262/#sec-object.defineproperty
              defineProperty: Ct,
              // `Object.defineProperties` method
              // https://tc39.github.io/ecma262/#sec-object.defineproperties
              defineProperties: vt,
              // `Object.getOwnPropertyDescriptor` method
              // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
              getOwnPropertyDescriptor: J
            }), e({ target: "Object", stat: !0, forced: !A }, {
              // `Object.getOwnPropertyNames` method
              // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
              getOwnPropertyNames: w,
              // `Object.getOwnPropertySymbols` method
              // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
              getOwnPropertySymbols: Z
            }), e({ target: "Object", stat: !0, forced: g(function() {
              R.f(1);
            }) }, {
              getOwnPropertySymbols: function(b) {
                return R.f(p(b));
              }
            }), st) {
              var q = !A || g(function() {
                var Y = et();
                return st([Y]) != "[null]" || st({ a: Y }) != "{}" || st(Object(Y)) != "{}";
              });
              e({ target: "JSON", stat: !0, forced: q }, {
                // eslint-disable-next-line no-unused-vars
                stringify: function(b, W, k) {
                  for (var _ = [b], nt = 1, ut; arguments.length > nt; ) _.push(arguments[nt++]);
                  if (ut = W, !(!u(W) && b === void 0 || St(b)))
                    return i(W) || (W = function(ft, at) {
                      if (typeof ut == "function" && (at = ut.call(this, ft, at)), !St(at)) return at;
                    }), _[1] = W, st.apply(null, _);
                }
              });
            }
            et[Q][$] || P(et[Q], $, et[Q].valueOf), U(et, V), B[K] = !0;
          }),
          /* 235 */
          /***/
          (function(f, n, t) {
            var e = t(30), a = t(126).f, r = {}.toString, o = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], v = function(A) {
              try {
                return a(A);
              } catch {
                return o.slice();
              }
            };
            f.exports.f = function(c) {
              return o && r.call(c) == "[object Window]" ? v(c) : a(e(c));
            };
          }),
          /* 236 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("asyncIterator");
          }),
          /* 237 */
          /***/
          (function(f, n) {
          }),
          /* 238 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("hasInstance");
          }),
          /* 239 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("isConcatSpreadable");
          }),
          /* 240 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("match");
          }),
          /* 241 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("matchAll");
          }),
          /* 242 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("replace");
          }),
          /* 243 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("search");
          }),
          /* 244 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("species");
          }),
          /* 245 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("split");
          }),
          /* 246 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("toPrimitive");
          }),
          /* 247 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("toStringTag");
          }),
          /* 248 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("unscopables");
          }),
          /* 249 */
          /***/
          (function(f, n, t) {
            var e = t(37);
            e(Math, "Math", !0);
          }),
          /* 250 */
          /***/
          (function(f, n, t) {
            var e = t(8), a = t(37);
            a(e.JSON, "JSON", !0);
          }),
          /* 251 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("asyncDispose");
          }),
          /* 252 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("dispose");
          }),
          /* 253 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("observable");
          }),
          /* 254 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("patternMatch");
          }),
          /* 255 */
          /***/
          (function(f, n, t) {
            var e = t(12);
            e("replaceAll");
          }),
          /* 256 */
          /***/
          (function(f, n, t) {
            f.exports = t(257);
          }),
          /* 257 */
          /***/
          (function(f, n, t) {
            var e = t(258);
            f.exports = e;
          }),
          /* 258 */
          /***/
          (function(f, n, t) {
            t(259);
            var e = t(9);
            f.exports = e.parseInt;
          }),
          /* 259 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(260);
            e({ global: !0, forced: parseInt != a }, {
              parseInt: a
            });
          }),
          /* 260 */
          /***/
          (function(f, n, t) {
            var e = t(8), a = t(90).trim, r = t(68), o = e.parseInt, v = /^[+-]?0[Xx]/, A = o(r + "08") !== 8 || o(r + "0x16") !== 22;
            f.exports = A ? function(g, s) {
              var i = a(String(g));
              return o(i, s >>> 0 || (v.test(i) ? 16 : 10));
            } : o;
          }),
          /* 261 */
          /***/
          (function(f, n, t) {
            var e = t(262);
            f.exports = e;
          }),
          /* 262 */
          /***/
          (function(f, n, t) {
            var e = t(263), a = Array.prototype;
            f.exports = function(r) {
              var o = r.slice;
              return r === a || r instanceof Array && o === a.slice ? e : o;
            };
          }),
          /* 263 */
          /***/
          (function(f, n, t) {
            t(264);
            var e = t(15);
            f.exports = e("Array").slice;
          }),
          /* 264 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(13), r = t(55), o = t(79), v = t(35), A = t(30), c = t(69), g = t(10), s = t(56), i = t(22), u = s("slice"), l = i("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), p = g("species"), d = [].slice, h = Math.max;
            e({ target: "Array", proto: !0, forced: !u || !l }, {
              slice: function(y, x) {
                var S = A(this), T = v(S.length), R = o(y, T), C = o(x === void 0 ? T : x, T), E, D, P;
                if (r(S) && (E = S.constructor, typeof E == "function" && (E === Array || r(E.prototype)) ? E = void 0 : a(E) && (E = E[p], E === null && (E = void 0)), E === Array || E === void 0))
                  return d.call(S, R, C);
                for (D = new (E === void 0 ? Array : E)(h(C - R, 0)), P = 0; R < C; R++, P++) R in S && c(D, P, S[R]);
                return D.length = P, D;
              }
            });
          }),
          /* 265 */
          /***/
          (function(f, n, t) {
            t(266);
            var e = t(9);
            f.exports = e.setTimeout;
          }),
          /* 266 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(8), r = t(84), o = [].slice, v = /MSIE .\./.test(r), A = function(c) {
              return function(g, s) {
                var i = arguments.length > 2, u = i ? o.call(arguments, 2) : void 0;
                return c(i ? function() {
                  (typeof g == "function" ? g : Function(g)).apply(this, u);
                } : g, s);
              };
            };
            e({ global: !0, bind: !0, forced: v }, {
              // `setTimeout` method
              // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
              setTimeout: A(a.setTimeout),
              // `setInterval` method
              // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
              setInterval: A(a.setInterval)
            });
          }),
          /* 267 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(128));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(272)), A = o.__importDefault(t(273)), c = o.__importDefault(t(129)), g = o.__importDefault(t(274)), s = o.__importDefault(t(275)), i = o.__importDefault(t(276)), u = o.__importDefault(t(130)), l = o.__importDefault(t(277)), p = o.__importDefault(t(278)), d = o.__importDefault(t(279)), h = (0, r.default)(
              {},
              v.default,
              A.default,
              c.default,
              s.default,
              g.default,
              i.default,
              u.default,
              l.default,
              p.default,
              d.default,
              //链接校验的配置函数
              {
                linkCheck: function(y, x) {
                  return !0;
                }
              }
            );
            n.default = h;
          }),
          /* 268 */
          /***/
          (function(f, n, t) {
            var e = t(269);
            f.exports = e;
          }),
          /* 269 */
          /***/
          (function(f, n, t) {
            t(270);
            var e = t(9);
            f.exports = e.Object.assign;
          }),
          /* 270 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(271);
            e({ target: "Object", stat: !0, forced: Object.assign !== a }, {
              assign: a
            });
          }),
          /* 271 */
          /***/
          (function(f, n, t) {
            var e = t(14), a = t(11), r = t(52), o = t(127), v = t(59), A = t(31), c = t(72), g = Object.assign, s = Object.defineProperty;
            f.exports = !g || a(function() {
              if (e && g({ b: 1 }, g(s({}, "a", {
                enumerable: !0,
                get: function() {
                  s(this, "b", {
                    value: 3,
                    enumerable: !1
                  });
                }
              }), { b: 2 })).b !== 1) return !0;
              var i = {}, u = {}, l = Symbol(), p = "abcdefghijklmnopqrst";
              return i[l] = 7, p.split("").forEach(function(d) {
                u[d] = d;
              }), g({}, i)[l] != 7 || r(g({}, u)).join("") != p;
            }) ? function(u, l) {
              for (var p = A(u), d = arguments.length, h = 1, m = o.f, y = v.f; d > h; )
                for (var x = c(arguments[h++]), S = m ? r(x).concat(m(x)) : r(x), T = S.length, R = 0, C; T > R; )
                  C = S[R++], (!e || y.call(x, C)) && (p[C] = x[C]);
              return p;
            } : g;
          }),
          /* 272 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.default = {
              menus: [
                "head",
                "bold",
                "fontSize",
                // 'customFontSize',
                "fontName",
                "italic",
                "underline",
                "strikeThrough",
                "indent",
                "lineHeight",
                "foreColor",
                "backColor",
                "link",
                "list",
                "todo",
                "justify",
                "quote",
                "emoticon",
                "image",
                "video",
                "table",
                "code",
                "splitLine",
                "undo",
                "redo"
              ],
              fontNames: ["黑体", "仿宋", "楷体", "标楷体", "华文仿宋", "华文楷体", "宋体", "微软雅黑", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"],
              //  fontNames: [{ name: '宋体', value: '宋体' }],
              fontSizes: {
                "x-small": {
                  name: "10px",
                  value: "1"
                },
                small: {
                  name: "13px",
                  value: "2"
                },
                normal: {
                  name: "16px",
                  value: "3"
                },
                large: {
                  name: "18px",
                  value: "4"
                },
                "x-large": {
                  name: "24px",
                  value: "5"
                },
                "xx-large": {
                  name: "32px",
                  value: "6"
                },
                "xxx-large": {
                  name: "48px",
                  value: "7"
                }
              },
              // customFontSize: [ // 该菜单暂时不用 - 王福朋 20200924
              //     { value: '9px', text: '9' },
              //     { value: '10px', text: '10' },
              //     { value: '12px', text: '12' },
              //     { value: '14px', text: '14' },
              //     { value: '16px', text: '16' },
              //     { value: '20px', text: '20' },
              //     { value: '42px', text: '42' },
              //     { value: '72px', text: '72' },
              // ],
              colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b"],
              //插入代码语言配置
              languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"],
              languageTab: "　　　　",
              /**
               * 表情配置菜单
               * 如果为emoji表情直接作为元素插入
               * emoticon:Array<EmotionsType>
               */
              emotions: [{
                // tab 的标题
                title: "表情",
                // type -> 'emoji' / 'image'
                type: "emoji",
                // content -> 数组
                content: "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😛 😝 😜 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😢 😭 😤 😠 😡 😳 😱 😨 🤗 🤔 😶 😑 😬 🙄 😯 😴 😷 🤑 😈 🤡 💩 👻 💀 👀 👣".split(/\s/)
              }, {
                // tab 的标题
                title: "手势",
                // type -> 'emoji' / 'image'
                type: "emoji",
                // content -> 数组
                content: "👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🙏".split(/\s/)
              }],
              lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
              undoLimit: 20,
              indentation: "2em",
              showMenuTooltips: !0,
              // 菜单栏tooltip为上标还是下标
              menuTooltipPosition: "up"
            };
          }),
          /* 273 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(7);
            function o(v, A, c) {
              window.alert(v), c && console.error("wangEditor: " + c);
            }
            n.default = {
              onchangeTimeout: 200,
              onchange: null,
              onfocus: r.EMPTY_FN,
              onblur: r.EMPTY_FN,
              onCatalogChange: null,
              customAlert: o
            };
          }),
          /* 274 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.default = {
              // 粘贴过滤样式，默认开启
              pasteFilterStyle: !0,
              // 粘贴内容时，忽略图片。默认关闭
              pasteIgnoreImg: !1,
              // 对粘贴的文字进行自定义处理，返回处理后的结果。编辑器会将处理后的结果粘贴到编辑区域中。
              // IE 暂时不支持
              pasteTextHandle: function(o) {
                return o;
              }
            };
          }),
          /* 275 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.default = {
              styleWithCSS: !1
            };
          }),
          /* 276 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(7);
            n.default = {
              // 网络图片校验的配置函数
              linkImgCheck: function(v, A, c) {
                return !0;
              },
              // 显示“插入网络图片”
              showLinkImg: !0,
              // 显示“插入图片alt”
              showLinkImgAlt: !0,
              // 显示“插入图片href”
              showLinkImgHref: !0,
              // 插入图片成功之后的回调函数
              linkImgCallback: r.EMPTY_FN,
              // accept
              uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
              // 服务端地址
              uploadImgServer: "",
              // 使用 base64 存储图片
              uploadImgShowBase64: !1,
              // 上传图片的最大体积，默认 5M
              uploadImgMaxSize: 5 * 1024 * 1024,
              // 一次最多上传多少个图片
              uploadImgMaxLength: 100,
              // 自定义上传图片的名称
              uploadFileName: "",
              // 上传图片自定义参数
              uploadImgParams: {},
              // 自定义参数拼接到 url 中
              uploadImgParamsWithUrl: !1,
              // 上传图片自定义 header
              uploadImgHeaders: {},
              // 钩子函数
              uploadImgHooks: {},
              // 上传图片超时时间 ms
              uploadImgTimeout: 10 * 1e3,
              // 跨域带 cookie
              withCredentials: !1,
              // 自定义上传
              customUploadImg: null,
              // 从媒体库上传
              uploadImgFromMedia: null
            };
          }),
          /* 277 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.default = {
              lang: "zh-CN",
              languages: {
                "zh-CN": {
                  wangEditor: {
                    重置: "重置",
                    插入: "插入",
                    默认: "默认",
                    创建: "创建",
                    修改: "修改",
                    如: "如",
                    请输入正文: "请输入正文",
                    menus: {
                      title: {
                        标题: "标题",
                        加粗: "加粗",
                        字号: "字号",
                        字体: "字体",
                        斜体: "斜体",
                        下划线: "下划线",
                        删除线: "删除线",
                        缩进: "缩进",
                        行高: "行高",
                        文字颜色: "文字颜色",
                        背景色: "背景色",
                        链接: "链接",
                        序列: "序列",
                        对齐: "对齐",
                        引用: "引用",
                        表情: "表情",
                        图片: "图片",
                        视频: "视频",
                        表格: "表格",
                        代码: "代码",
                        分割线: "分割线",
                        恢复: "恢复",
                        撤销: "撤销",
                        全屏: "全屏",
                        取消全屏: "取消全屏",
                        待办事项: "待办事项"
                      },
                      dropListMenu: {
                        设置标题: "设置标题",
                        背景颜色: "背景颜色",
                        文字颜色: "文字颜色",
                        设置字号: "设置字号",
                        设置字体: "设置字体",
                        设置缩进: "设置缩进",
                        对齐方式: "对齐方式",
                        设置行高: "设置行高",
                        序列: "序列",
                        head: {
                          正文: "正文"
                        },
                        indent: {
                          增加缩进: "增加缩进",
                          减少缩进: "减少缩进"
                        },
                        justify: {
                          靠左: "靠左",
                          居中: "居中",
                          靠右: "靠右",
                          两端: "两端"
                        },
                        list: {
                          无序列表: "无序列表",
                          有序列表: "有序列表"
                        }
                      },
                      panelMenus: {
                        emoticon: {
                          默认: "默认",
                          新浪: "新浪",
                          emoji: "emoji",
                          手势: "手势"
                        },
                        image: {
                          上传图片: "上传图片",
                          网络图片: "网络图片",
                          图片地址: "图片地址",
                          图片文字说明: "图片文字说明",
                          跳转链接: "跳转链接"
                        },
                        link: {
                          链接: "链接",
                          链接文字: "链接文字",
                          取消链接: "取消链接",
                          查看链接: "查看链接"
                        },
                        video: {
                          插入视频: "插入视频",
                          上传视频: "上传视频"
                        },
                        table: {
                          行: "行",
                          列: "列",
                          的: "的",
                          表格: "表格",
                          添加行: "添加行",
                          删除行: "删除行",
                          添加列: "添加列",
                          删除列: "删除列",
                          设置表头: "设置表头",
                          取消表头: "取消表头",
                          插入表格: "插入表格",
                          删除表格: "删除表格"
                        },
                        code: {
                          删除代码: "删除代码",
                          修改代码: "修改代码",
                          插入代码: "插入代码"
                        }
                      }
                    },
                    validate: {
                      张图片: "张图片",
                      大于: "大于",
                      图片链接: "图片链接",
                      不是图片: "不是图片",
                      返回结果: "返回结果",
                      上传图片超时: "上传图片超时",
                      上传图片错误: "上传图片错误",
                      上传图片失败: "上传图片失败",
                      插入图片错误: "插入图片错误",
                      一次最多上传: "一次最多上传",
                      下载链接失败: "下载链接失败",
                      图片验证未通过: "图片验证未通过",
                      服务器返回状态: "服务器返回状态",
                      上传图片返回结果错误: "上传图片返回结果错误",
                      请替换为支持的图片类型: "请替换为支持的图片类型",
                      您插入的网络图片无法识别: "您插入的网络图片无法识别",
                      您刚才插入的图片链接未通过编辑器校验: "您刚才插入的图片链接未通过编辑器校验",
                      插入视频错误: "插入视频错误",
                      视频链接: "视频链接",
                      不是视频: "不是视频",
                      视频验证未通过: "视频验证未通过",
                      个视频: "个视频",
                      上传视频超时: "上传视频超时",
                      上传视频错误: "上传视频错误",
                      上传视频失败: "上传视频失败",
                      上传视频返回结果错误: "上传视频返回结果错误"
                    }
                  }
                },
                en: {
                  wangEditor: {
                    重置: "reset",
                    插入: "insert",
                    默认: "default",
                    创建: "create",
                    修改: "edit",
                    如: "like",
                    请输入正文: "please enter the text",
                    menus: {
                      title: {
                        标题: "head",
                        加粗: "bold",
                        字号: "font size",
                        字体: "font family",
                        斜体: "italic",
                        下划线: "underline",
                        删除线: "strikethrough",
                        缩进: "indent",
                        行高: "line heihgt",
                        文字颜色: "font color",
                        背景色: "background",
                        链接: "link",
                        序列: "numbered list",
                        对齐: "align",
                        引用: "quote",
                        表情: "emoticons",
                        图片: "image",
                        视频: "media",
                        表格: "table",
                        代码: "code",
                        分割线: "split line",
                        恢复: "redo",
                        撤销: "undo",
                        全屏: "fullscreen",
                        取消全屏: "cancel fullscreen",
                        待办事项: "todo"
                      },
                      dropListMenu: {
                        设置标题: "title",
                        背景颜色: "background",
                        文字颜色: "font color",
                        设置字号: "font size",
                        设置字体: "font family",
                        设置缩进: "indent",
                        对齐方式: "align",
                        设置行高: "line heihgt",
                        序列: "list",
                        head: {
                          正文: "text"
                        },
                        indent: {
                          增加缩进: "indent",
                          减少缩进: "outdent"
                        },
                        justify: {
                          靠左: "left",
                          居中: "center",
                          靠右: "right",
                          两端: "justify"
                        },
                        list: {
                          无序列表: "unordered",
                          有序列表: "ordered"
                        }
                      },
                      panelMenus: {
                        emoticon: {
                          表情: "emoji",
                          手势: "gesture"
                        },
                        image: {
                          上传图片: "upload image",
                          网络图片: "network image",
                          图片地址: "image link",
                          图片文字说明: "image alt",
                          跳转链接: "hyperlink"
                        },
                        link: {
                          链接: "link",
                          链接文字: "link text",
                          取消链接: "unlink",
                          查看链接: "view links"
                        },
                        video: {
                          插入视频: "insert video",
                          上传视频: "upload local video"
                        },
                        table: {
                          行: "rows",
                          列: "columns",
                          的: " ",
                          表格: "table",
                          添加行: "insert row",
                          删除行: "delete row",
                          添加列: "insert column",
                          删除列: "delete column",
                          设置表头: "set header",
                          取消表头: "cancel header",
                          插入表格: "insert table",
                          删除表格: "delete table"
                        },
                        code: {
                          删除代码: "delete code",
                          修改代码: "edit code",
                          插入代码: "insert code"
                        }
                      }
                    },
                    validate: {
                      张图片: "images",
                      大于: "greater than",
                      图片链接: "image link",
                      不是图片: "is not image",
                      返回结果: "return results",
                      上传图片超时: "upload image timeout",
                      上传图片错误: "upload image error",
                      上传图片失败: "upload image failed",
                      插入图片错误: "insert image error",
                      一次最多上传: "once most at upload",
                      下载链接失败: "download link failed",
                      图片验证未通过: "image validate failed",
                      服务器返回状态: "server return status",
                      上传图片返回结果错误: "upload image return results error",
                      请替换为支持的图片类型: "please replace with a supported image type",
                      您插入的网络图片无法识别: "the network picture you inserted is not recognized",
                      您刚才插入的图片链接未通过编辑器校验: "the image link you just inserted did not pass the editor verification",
                      插入视频错误: "insert video error",
                      视频链接: "video link",
                      不是视频: "is not video",
                      视频验证未通过: "video validate failed",
                      个视频: "videos",
                      上传视频超时: "upload video timeout",
                      上传视频错误: "upload video error",
                      上传视频失败: "upload video failed",
                      上传视频返回结果错误: "upload video return results error"
                    }
                  }
                }
              }
            };
          }),
          /* 278 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(6);
            function o() {
              return !!(r.UA.isIE() || r.UA.isOldEdge);
            }
            n.default = {
              compatibleMode: o,
              historyMaxSize: 30
            };
          }),
          /* 279 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(7);
            n.default = {
              // 插入网络视频前的回调函数
              onlineVideoCheck: function(v) {
                return !0;
              },
              // 插入网络视频成功之后的回调函数
              onlineVideoCallback: r.EMPTY_FN,
              // 显示“插入视频”
              showLinkVideo: !0,
              // accept
              uploadVideoAccept: ["mp4"],
              // 服务端地址
              uploadVideoServer: "",
              // 上传视频的最大体积，默认 1024M
              uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
              // 一次最多上传多少个视频
              // uploadVideoMaxLength: 2,
              // 自定义上传视频的名称
              uploadVideoName: "",
              // 上传视频自定义参数
              uploadVideoParams: {},
              // 自定义参数拼接到 url 中
              uploadVideoParamsWithUrl: !1,
              // 上传视频自定义 header
              uploadVideoHeaders: {},
              // 钩子函数
              uploadVideoHooks: {},
              // 上传视频超时时间 ms 默认2个小时
              uploadVideoTimeout: 1e3 * 60 * 60 * 2,
              // 跨域带 cookie
              withVideoCredentials: !1,
              // 自定义上传
              customUploadVideo: null,
              // 自定义插入视频
              customInsertVideo: null
            };
          }),
          /* 280 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(17));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = t(6), c = t(7), g = (
              /** @class */
              (function() {
                function s(i) {
                  this._currentRange = null, this.editor = i;
                }
                return s.prototype.getRange = function() {
                  return this._currentRange;
                }, s.prototype.saveRange = function(i) {
                  if (i) {
                    this._currentRange = i;
                    return;
                  }
                  var u = window.getSelection();
                  if (u.rangeCount !== 0) {
                    var l = u.getRangeAt(0), p = this.getSelectionContainerElem(l);
                    if (p?.length && !(p.attr("contenteditable") === "false" || p.parentUntil("[contenteditable=false]"))) {
                      var d = this.editor, h = d.$textElem;
                      if (h.isContain(p)) {
                        if (h.elems[0] === p.elems[0]) {
                          var m;
                          if ((0, r.default)(m = h.html()).call(m) === c.EMPTY_P) {
                            var y = h.children(), x = y?.last();
                            d.selection.createRangeByElem(x, !0, !0), d.selection.restoreSelection();
                          }
                        }
                        this._currentRange = l;
                      }
                    }
                  }
                }, s.prototype.collapseRange = function(i) {
                  i === void 0 && (i = !1);
                  var u = this._currentRange;
                  u && u.collapse(i);
                }, s.prototype.getSelectionText = function() {
                  var i = this._currentRange;
                  return i ? i.toString() : "";
                }, s.prototype.getSelectionContainerElem = function(i) {
                  var u;
                  u = i || this._currentRange;
                  var l;
                  if (u)
                    return l = u.commonAncestorContainer, v.default(l.nodeType === 1 ? l : l.parentNode);
                }, s.prototype.getSelectionStartElem = function(i) {
                  var u;
                  u = i || this._currentRange;
                  var l;
                  if (u)
                    return l = u.startContainer, v.default(l.nodeType === 1 ? l : l.parentNode);
                }, s.prototype.getSelectionEndElem = function(i) {
                  var u;
                  u = i || this._currentRange;
                  var l;
                  if (u)
                    return l = u.endContainer, v.default(l.nodeType === 1 ? l : l.parentNode);
                }, s.prototype.isSelectionEmpty = function() {
                  var i = this._currentRange;
                  return !!(i && i.startContainer && i.startContainer === i.endContainer && i.startOffset === i.endOffset);
                }, s.prototype.restoreSelection = function() {
                  var i = window.getSelection(), u = this._currentRange;
                  i && u && (i.removeAllRanges(), i.addRange(u));
                }, s.prototype.createEmptyRange = function() {
                  var i = this.editor, u = this.getRange(), l;
                  if (u && this.isSelectionEmpty())
                    try {
                      A.UA.isWebkit() ? (i.cmd.do("insertHTML", "&#8203;"), u.setEnd(u.endContainer, u.endOffset + 1), this.saveRange(u)) : (l = v.default("<strong>&#8203;</strong>"), i.cmd.do("insertElem", l), this.createRangeByElem(l, !0));
                    } catch {
                    }
                }, s.prototype.createRangeByElems = function(i, u) {
                  var l = window.getSelection ? window.getSelection() : document.getSelection();
                  l?.removeAllRanges();
                  var p = document.createRange();
                  p.setStart(i, 0), p.setEnd(u, u.childNodes.length || 1), this.saveRange(p), this.restoreSelection();
                }, s.prototype.createRangeByElem = function(i, u, l) {
                  if (i.length) {
                    var p = i.elems[0], d = document.createRange();
                    l ? d.selectNodeContents(p) : d.selectNode(p), u != null && (d.collapse(u), u || (this.saveRange(d), this.editor.selection.moveCursor(p))), this.saveRange(d);
                  }
                }, s.prototype.getSelectionRangeTopNodes = function() {
                  var i, u, l, p = (i = this.getSelectionStartElem()) === null || i === void 0 ? void 0 : i.getNodeTop(this.editor), d = (u = this.getSelectionEndElem()) === null || u === void 0 ? void 0 : u.getNodeTop(this.editor);
                  return l = this.recordSelectionNodes(v.default(p), v.default(d)), l;
                }, s.prototype.moveCursor = function(i, u) {
                  var l, p = this.getRange(), d = i.nodeType === 3 ? (l = i.nodeValue) === null || l === void 0 ? void 0 : l.length : i.childNodes.length;
                  (A.UA.isFirefox || A.UA.isIE()) && d !== 0 && (i.nodeType === 3 || i.childNodes[d - 1].nodeName === "BR") && (d = d - 1);
                  var h = u ?? d;
                  p && i && (p.setStart(i, h), p.setEnd(i, h), this.restoreSelection());
                }, s.prototype.getCursorPos = function() {
                  var i = window.getSelection();
                  return i?.anchorOffset;
                }, s.prototype.clearWindowSelectionRange = function() {
                  var i = window.getSelection();
                  i && i.removeAllRanges();
                }, s.prototype.recordSelectionNodes = function(i, u) {
                  var l = [], p = !0;
                  try {
                    for (var d = i, h = this.editor.$textElem; p; ) {
                      var m = d?.getNodeTop(this.editor);
                      m.getNodeName() === "BODY" && (p = !1), m.length > 0 && (l.push(v.default(d)), u?.equal(m) || h.equal(m) ? p = !1 : d = m.getNextSibling());
                    }
                  } catch {
                    p = !1;
                  }
                  return l;
                }, s.prototype.setRangeToElem = function(i) {
                  var u = this.getRange();
                  u?.setStart(i, 0), u?.setEnd(i, 0);
                }, s;
              })()
            );
            n.default = g;
          }),
          /* 281 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(3)), v = (
              /** @class */
              (function() {
                function A(c) {
                  this.editor = c;
                }
                return A.prototype.do = function(c, g) {
                  var s = this.editor;
                  s.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
                  var i = s.selection;
                  if (i.getRange()) {
                    switch (i.restoreSelection(), c) {
                      case "insertHTML":
                        this.insertHTML(g);
                        break;
                      case "insertElem":
                        this.insertElem(g);
                        break;
                      default:
                        this.execCommand(c, g);
                        break;
                    }
                    s.menus.changeActive(), i.saveRange(), i.restoreSelection();
                  }
                }, A.prototype.insertHTML = function(c) {
                  var g = this.editor, s = g.selection.getRange();
                  if (s != null) {
                    if (this.queryCommandSupported("insertHTML"))
                      this.execCommand("insertHTML", c);
                    else if (s.insertNode) {
                      if (s.deleteContents(), o.default(c).elems.length > 0)
                        s.insertNode(o.default(c).elems[0]);
                      else {
                        var i = document.createElement("p");
                        i.appendChild(document.createTextNode(c)), s.insertNode(i);
                      }
                      g.selection.collapseRange();
                    }
                  }
                }, A.prototype.insertElem = function(c) {
                  var g = this.editor, s = g.selection.getRange();
                  s != null && s.insertNode && (s.deleteContents(), s.insertNode(c.elems[0]));
                }, A.prototype.execCommand = function(c, g) {
                  document.execCommand(c, !1, g);
                }, A.prototype.queryCommandValue = function(c) {
                  return document.queryCommandValue(c);
                }, A.prototype.queryCommandState = function(c) {
                  return document.queryCommandState(c);
                }, A.prototype.queryCommandSupported = function(c) {
                  return document.queryCommandSupported(c);
                }, A;
              })()
            );
            n.default = v;
          }),
          /* 282 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(29)), o = e(t(4)), v = e(t(17)), A = e(t(27)), c = e(t(46));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var g = t(2), s = g.__importDefault(t(3)), i = g.__importDefault(t(287)), u = t(6), l = g.__importDefault(t(299)), p = g.__importDefault(t(300)), d = t(7), h = (
              /** @class */
              (function() {
                function m(y) {
                  this.editor = y, this.eventHooks = {
                    onBlurEvents: [],
                    changeEvents: [],
                    dropEvents: [],
                    clickEvents: [],
                    keydownEvents: [],
                    keyupEvents: [],
                    tabUpEvents: [],
                    tabDownEvents: [],
                    enterUpEvents: [],
                    enterDownEvents: [],
                    deleteUpEvents: [],
                    deleteDownEvents: [],
                    pasteEvents: [],
                    linkClickEvents: [],
                    codeClickEvents: [],
                    textScrollEvents: [],
                    toolbarClickEvents: [],
                    imgClickEvents: [],
                    imgDragBarMouseDownEvents: [],
                    tableClickEvents: [],
                    menuClickEvents: [],
                    dropListMenuHoverEvents: [],
                    splitLineEvents: [],
                    videoClickEvents: []
                  };
                }
                return m.prototype.init = function() {
                  this._saveRange(), this._bindEventHooks(), i.default(this);
                }, m.prototype.togglePlaceholder = function() {
                  var y, x = this.html(), S = (0, r.default)(y = this.editor.$textContainerElem).call(y, ".placeholder");
                  S.hide(), !this.editor.isComposing && (!x || x === " ") && S.show();
                }, m.prototype.clear = function() {
                  this.html(d.EMPTY_P);
                }, m.prototype.html = function(y) {
                  var x = this.editor, S = x.$textElem;
                  if (y == null) {
                    var T = S.html();
                    T = T.replace(/\u200b/gm, ""), T = T.replace(/<p><\/p>/gim, ""), T = T.replace(d.EMPTY_P_LAST_REGEX, ""), T = T.replace(d.EMPTY_P_REGEX, "<p>");
                    var R = T.match(/<(img|br|hr|input)[^>]*>/gi);
                    return R !== null && (0, o.default)(R).call(R, function(C) {
                      C.match(/\/>/) || (T = T.replace(C, C.substring(0, C.length - 1) + "/>"));
                    }), T;
                  }
                  y = (0, v.default)(y).call(y), y === "" && (y = d.EMPTY_P), (0, A.default)(y).call(y, "<") !== 0 && (y = "<p>" + y + "</p>"), S.html(y), x.initSelection();
                }, m.prototype.setJSON = function(y) {
                  var x = p.default(y).children(), S = this.editor, T = S.$textElem;
                  x && T.replaceChildAll(x);
                }, m.prototype.getJSON = function() {
                  var y = this.editor, x = y.$textElem;
                  return l.default(x);
                }, m.prototype.text = function(y) {
                  var x = this.editor, S = x.$textElem;
                  if (y == null) {
                    var T = S.text();
                    return T = T.replace(/\u200b/gm, ""), T;
                  }
                  S.text("<p>" + y + "</p>"), x.initSelection();
                }, m.prototype.append = function(y) {
                  var x = this.editor;
                  (0, A.default)(y).call(y, "<") !== 0 && (y = "<p>" + y + "</p>"), this.html(this.html() + y), x.initSelection();
                }, m.prototype._saveRange = function() {
                  var y = this.editor, x = y.$textElem, S = s.default(document);
                  function T() {
                    y.selection.saveRange(), y.menus.changeActive();
                  }
                  x.on("keyup", T);
                  function R() {
                    T(), x.off("click", R);
                  }
                  x.on("click", R);
                  function C() {
                    T(), S.off("mouseup", C);
                  }
                  function E() {
                    S.on("mouseup", C), x.off("mouseleave", E);
                  }
                  x.on("mousedown", function() {
                    x.on("mouseleave", E);
                  }), x.on("mouseup", function(D) {
                    x.off("mouseleave", E), (0, c.default)(function() {
                      var P = y.selection, M = P.getRange();
                      M !== null && T();
                    }, 0);
                  });
                }, m.prototype._bindEventHooks = function() {
                  var y = this.editor, x = y.$textElem, S = this.eventHooks;
                  x.on("click", function(R) {
                    var C = S.clickEvents;
                    (0, o.default)(C).call(C, function(E) {
                      return E(R);
                    });
                  }), x.on("keyup", function(R) {
                    if (R.keyCode === 13) {
                      var C = S.enterUpEvents;
                      (0, o.default)(C).call(C, function(E) {
                        return E(R);
                      });
                    }
                  }), x.on("keyup", function(R) {
                    var C = S.keyupEvents;
                    (0, o.default)(C).call(C, function(E) {
                      return E(R);
                    });
                  }), x.on("keydown", function(R) {
                    var C = S.keydownEvents;
                    (0, o.default)(C).call(C, function(E) {
                      return E(R);
                    });
                  }), x.on("keyup", function(R) {
                    if (!(R.keyCode !== 8 && R.keyCode !== 46)) {
                      var C = S.deleteUpEvents;
                      (0, o.default)(C).call(C, function(E) {
                        return E(R);
                      });
                    }
                  }), x.on("keydown", function(R) {
                    if (!(R.keyCode !== 8 && R.keyCode !== 46)) {
                      var C = S.deleteDownEvents;
                      (0, o.default)(C).call(C, function(E) {
                        return E(R);
                      });
                    }
                  }), x.on("paste", function(R) {
                    if (!u.UA.isIE()) {
                      R.preventDefault();
                      var C = S.pasteEvents;
                      (0, o.default)(C).call(C, function(E) {
                        return E(R);
                      });
                    }
                  }), x.on("keydown", function(R) {
                    // 编辑器处于聚焦状态下（多编辑器实例） || 当前处于兼容模式（兼容模式撤销/恢复后不聚焦，所以直接过，但会造成多编辑器同时撤销/恢复）
                    (y.isFocus || y.isCompatibleMode) && (R.ctrlKey || R.metaKey) && R.keyCode === 90 && (R.preventDefault(), R.shiftKey ? y.history.restore() : y.history.revoke());
                  }), x.on("keyup", function(R) {
                    if (R.keyCode === 9) {
                      R.preventDefault();
                      var C = S.tabUpEvents;
                      (0, o.default)(C).call(C, function(E) {
                        return E(R);
                      });
                    }
                  }), x.on("keydown", function(R) {
                    if (R.keyCode === 9) {
                      R.preventDefault();
                      var C = S.tabDownEvents;
                      (0, o.default)(C).call(C, function(E) {
                        return E(R);
                      });
                    }
                  }), x.on(
                    "scroll",
                    // 使用节流
                    u.throttle(function(R) {
                      var C = S.textScrollEvents;
                      (0, o.default)(C).call(C, function(E) {
                        return E(R);
                      });
                    }, 100)
                  );
                  function T(R) {
                    R.preventDefault();
                  }
                  s.default(document).on("dragleave", T).on("drop", T).on("dragenter", T).on("dragover", T), y.beforeDestroy(function() {
                    s.default(document).off("dragleave", T).off("drop", T).off("dragenter", T).off("dragover", T);
                  }), x.on("drop", function(R) {
                    R.preventDefault();
                    var C = S.dropEvents;
                    (0, o.default)(C).call(C, function(E) {
                      return E(R);
                    });
                  }), x.on("click", function(R) {
                    var C = null, E = R.target, D = s.default(E);
                    if (D.getNodeName() === "A")
                      C = D;
                    else {
                      var P = D.parentUntil("a");
                      P != null && (C = P);
                    }
                    if (C) {
                      var M = S.linkClickEvents;
                      (0, o.default)(M).call(M, function(I) {
                        return I(C);
                      });
                    }
                  }), x.on("click", function(R) {
                    var C = null, E = R.target, D = s.default(E);
                    if (D.getNodeName() === "IMG" && !D.elems[0].getAttribute("data-emoji") && (R.stopPropagation(), C = D), !!C) {
                      var P = S.imgClickEvents;
                      (0, o.default)(P).call(P, function(M) {
                        return M(C);
                      });
                    }
                  }), x.on("click", function(R) {
                    var C = null, E = R.target, D = s.default(E);
                    if (D.getNodeName() === "PRE")
                      C = D;
                    else {
                      var P = D.parentUntil("pre");
                      P !== null && (C = P);
                    }
                    if (C) {
                      var M = S.codeClickEvents;
                      (0, o.default)(M).call(M, function(I) {
                        return I(C);
                      });
                    }
                  }), x.on("click", function(R) {
                    var C = null, E = R.target, D = s.default(E);
                    if (D.getNodeName() === "HR" && (C = D), !!C) {
                      y.selection.createRangeByElem(C), y.selection.restoreSelection();
                      var P = S.splitLineEvents;
                      (0, o.default)(P).call(P, function(M) {
                        return M(C);
                      });
                    }
                  }), y.$toolbarElem.on("click", function(R) {
                    var C = S.toolbarClickEvents;
                    (0, o.default)(C).call(C, function(E) {
                      return E(R);
                    });
                  }), y.$textContainerElem.on("mousedown", function(R) {
                    var C = R.target, E = s.default(C);
                    if (E.hasClass("w-e-img-drag-rb")) {
                      var D = S.imgDragBarMouseDownEvents;
                      (0, o.default)(D).call(D, function(P) {
                        return P();
                      });
                    }
                  }), x.on("click", function(R) {
                    var C = null, E = R.target;
                    if (C = s.default(E).parentUntilEditor("TABLE", y, E), !!C) {
                      var D = S.tableClickEvents;
                      (0, o.default)(D).call(D, function(P) {
                        return P(C, R);
                      });
                    }
                  }), x.on("keydown", function(R) {
                    if (R.keyCode === 13) {
                      var C = S.enterDownEvents;
                      (0, o.default)(C).call(C, function(E) {
                        return E(R);
                      });
                    }
                  }), x.on("click", function(R) {
                    var C = null, E = R.target, D = s.default(E);
                    if (D.getNodeName() === "VIDEO" && (R.stopPropagation(), C = D), !!C) {
                      var P = S.videoClickEvents;
                      (0, o.default)(P).call(P, function(M) {
                        return M(C);
                      });
                    }
                  });
                }, m;
              })()
            );
            n.default = h;
          }),
          /* 283 */
          /***/
          (function(f, n, t) {
            var e = t(284);
            f.exports = e;
          }),
          /* 284 */
          /***/
          (function(f, n, t) {
            var e = t(285), a = Array.prototype;
            f.exports = function(r) {
              var o = r.find;
              return r === a || r instanceof Array && o === a.find ? e : o;
            };
          }),
          /* 285 */
          /***/
          (function(f, n, t) {
            t(286);
            var e = t(15);
            f.exports = e("Array").find;
          }),
          /* 286 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(32).find, r = t(82), o = t(22), v = "find", A = !0, c = o(v);
            v in [] && Array(1)[v](function() {
              A = !1;
            }), e({ target: "Array", proto: !0, forced: A || !c }, {
              find: function(s) {
                return a(this, s, arguments.length > 1 ? arguments[1] : void 0);
              }
            }), r(v);
          }),
          /* 287 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(288)), v = r.__importStar(t(289)), A = r.__importDefault(t(290)), c = r.__importDefault(t(291)), g = r.__importDefault(t(298));
            function s(i) {
              var u = i.editor, l = i.eventHooks;
              o.default(u, l.enterUpEvents, l.enterDownEvents), v.default(u, l.deleteUpEvents, l.deleteDownEvents), v.cutToKeepP(u, l.keyupEvents), A.default(u, l.tabDownEvents), c.default(u, l.pasteEvents), g.default(u, l.imgClickEvents);
            }
            n.default = s;
          }),
          /* 288 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(27));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = t(7), A = o.__importDefault(t(3));
            function c(g, s, i) {
              function u(d) {
                var h, m = A.default(v.EMPTY_P);
                if (m.insertBefore(d), (0, r.default)(h = d.html()).call(h, "<img") >= 0) {
                  m.remove();
                  return;
                }
                g.selection.createRangeByElem(m, !0, !0), g.selection.restoreSelection(), d.remove();
              }
              function l() {
                var d = g.$textElem, h = g.selection.getSelectionContainerElem(), m = h.parent();
                if (m.html() === "<code><br></code>") {
                  u(m);
                  return;
                }
                if (h.getNodeName() === "FONT" && h.text() === "" && h.attr("face") === "monospace") {
                  u(m);
                  return;
                }
                if (m.equal(d)) {
                  var y = h.getNodeName();
                  y === "P" && h.attr("data-we-empty-p") === null || h.text() || u(h);
                }
              }
              s.push(l);
              function p(d) {
                var h;
                g.selection.saveRange((h = getSelection()) === null || h === void 0 ? void 0 : h.getRangeAt(0));
                var m = g.selection.getSelectionContainerElem();
                m.id === g.textElemId && (d.preventDefault(), g.cmd.do("insertHTML", "<p><br></p>"));
              }
              i.push(p);
            }
            n.default = c;
          }),
          /* 289 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(17)), o = e(t(28));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.cutToKeepP = void 0;
            var v = t(2), A = t(7), c = v.__importDefault(t(3));
            function g(i, u, l) {
              function p() {
                var h = i.$textElem, m = i.$textElem.html(), y = i.$textElem.text(), x = (0, r.default)(m).call(m), S = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', A.EMPTY_P];
                if (/^\s*$/.test(y) && (!x || (0, o.default)(S).call(S, x))) {
                  h.html(A.EMPTY_P);
                  var T = h.getNode();
                  i.selection.createRangeByElems(T.childNodes[0], T.childNodes[0]);
                  var R = i.selection.getSelectionContainerElem();
                  i.selection.restoreSelection(), i.selection.moveCursor(R.getNode(), 0);
                }
              }
              u.push(p);
              function d(h) {
                var m, y = i.$textElem, x = (0, r.default)(m = y.html().toLowerCase()).call(m);
                if (x === A.EMPTY_P) {
                  h.preventDefault();
                  return;
                }
              }
              l.push(d);
            }
            function s(i, u) {
              function l(p) {
                var d;
                if (p.keyCode === 88) {
                  var h = i.$textElem, m = (0, r.default)(d = h.html().toLowerCase()).call(d);
                  if (!m || m === "<br>") {
                    var y = c.default(A.EMPTY_P);
                    h.html(" "), h.append(y), i.selection.createRangeByElem(y, !1, !0), i.selection.restoreSelection(), i.selection.moveCursor(y.getNode(), 0);
                  }
                }
              }
              u.push(l);
            }
            n.cutToKeepP = s, n.default = g;
          }),
          /* 290 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            function r(o, v) {
              function A() {
                if (o.cmd.queryCommandSupported("insertHTML")) {
                  var c = o.selection.getSelectionContainerElem();
                  if (c) {
                    var g = c.parent(), s = c.getNodeName(), i = g.getNodeName();
                    s == "CODE" || i === "CODE" || i === "PRE" || /hljs/.test(i) ? o.cmd.do("insertHTML", o.config.languageTab) : o.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
                  }
                }
              }
              v.push(A);
            }
            n.default = r;
          }),
          /* 291 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(17)), o = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var v = t(131), A = t(6), c = t(7);
            function g(p) {
              var d, h = (0, r.default)(d = p.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(d), m = document.createElement("div");
              return m.innerHTML = h, m.innerHTML.replace(/<p><\/p>/gim, "");
            }
            function s(p) {
              var d = p.replace(/<br>|<br\/>/gm, `
`).replace(/<[^>]+>/gm, "");
              return d;
            }
            function i(p) {
              var d;
              if (p === "") return !1;
              var h = document.createElement("div");
              return h.innerHTML = p, ((d = h.firstChild) === null || d === void 0 ? void 0 : d.nodeName) === "P";
            }
            function u(p) {
              if (!p?.length) return !1;
              var d = p.elems[0];
              return d.nodeName === "P" && d.innerHTML === "<br>";
            }
            function l(p, d) {
              function h(m) {
                var y = p.config, x = y.pasteFilterStyle, S = y.pasteIgnoreImg, T = y.pasteTextHandle, R = v.getPasteHtml(m, x, S), C = v.getPasteText(m);
                C = C.replace(/\n/gm, "<br>");
                var E = p.selection.getSelectionContainerElem();
                if (E) {
                  var D = E?.getNodeName(), P = E?.getNodeTop(p), M = "";
                  if (P.elems[0] && (M = P?.getNodeName()), D === "CODE" || M === "PRE") {
                    T && A.isFunction(T) && (C = "" + (T(C) || "")), p.cmd.do("insertHTML", s(C));
                    return;
                  }
                  if (c.urlRegex.test(C) && x) {
                    T && A.isFunction(T) && (C = "" + (T(C) || ""));
                    var I = C.replace(c.urlRegex, function(z) {
                      return '<a href="' + z + '" target="_blank">' + z + "</a>";
                    }), N = p.selection.getRange(), B = document.createElement("div"), F = document.createDocumentFragment();
                    if (B.innerHTML = I, N == null) return;
                    for (; B.childNodes.length; )
                      F.append(B.childNodes[0]);
                    var O = F.querySelectorAll("a");
                    (0, o.default)(O).call(O, function(z) {
                      z.innerText = z.href;
                    }), N.insertNode && (N.deleteContents(), N.insertNode(F)), p.selection.clearWindowSelectionRange();
                    return;
                  }
                  if (R)
                    try {
                      T && A.isFunction(T) && (R = "" + (T(R) || ""));
                      var H = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(R);
                      if (H && x)
                        p.cmd.do("insertHTML", "" + g(C));
                      else {
                        var L = g(R);
                        if (i(L)) {
                          var U = p.$textElem;
                          if (p.cmd.do("insertHTML", L), U.equal(E)) {
                            p.selection.createEmptyRange();
                            return;
                          }
                          u(P) && P.remove();
                        } else
                          p.cmd.do("insertHTML", L);
                      }
                    } catch {
                      T && A.isFunction(T) && (C = "" + (T(C) || "")), p.cmd.do("insertHTML", "" + g(C));
                    }
                }
              }
              d.push(h);
            }
            n.default = l;
          }),
          /* 292 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(17)), o = e(t(4)), v = e(t(28));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var A = t(2), c = t(293), g = A.__importDefault(t(297));
            function s(d) {
              var h = /<span>.*?<\/span>/gi, m = /<span>(.*?)<\/span>/;
              return d.replace(h, function(y) {
                var x = y.match(m);
                return x == null ? "" : x[1];
              });
            }
            function i(d, h) {
              var m;
              return d = (0, r.default)(m = d.toLowerCase()).call(m), !!(c.IGNORE_TAGS.has(d) || h && d === "img");
            }
            function u(d, h) {
              var m = "";
              m = "<" + d;
              var y = [];
              (0, o.default)(h).call(h, function(S) {
                y.push(S.name + '="' + S.value + '"');
              }), y.length > 0 && (m = m + " " + y.join(" "));
              var x = c.EMPTY_TAGS.has(d);
              return m = m + (x ? "/" : "") + ">", m;
            }
            function l(d) {
              return "</" + d + ">";
            }
            function p(d, h, m) {
              h === void 0 && (h = !0), m === void 0 && (m = !1);
              var y = [], x = "";
              function S(E) {
                E = (0, r.default)(E).call(E), E && (c.EMPTY_TAGS.has(E) || (x = E));
              }
              function T() {
                x = "";
              }
              var R = new g.default();
              R.parse(d, {
                startElement: function(D, P) {
                  if (S(D), !i(D, m)) {
                    var M = c.NECESSARY_ATTRS.get(D) || [], I = [];
                    (0, o.default)(P).call(P, function(B) {
                      var F = B.name;
                      if (F === "style") {
                        h || I.push(B);
                        return;
                      }
                      (0, v.default)(M).call(M, F) !== !1 && I.push(B);
                    });
                    var N = u(D, I);
                    y.push(N);
                  }
                },
                characters: function(D) {
                  D && (i(x, m) || y.push(D));
                },
                endElement: function(D) {
                  if (!i(D, m)) {
                    var P = l(D);
                    y.push(P), T();
                  }
                },
                comment: function(D) {
                  S(D);
                }
              });
              var C = y.join("");
              return C = s(C), C;
            }
            n.default = p;
          }),
          /* 293 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(132)), o = e(t(121));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.TOP_LEVEL_TAGS = n.EMPTY_TAGS = n.NECESSARY_ATTRS = n.IGNORE_TAGS = void 0, n.IGNORE_TAGS = new r.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center", "o:p"]), n.NECESSARY_ATTRS = new o.default([["img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]], ["th", ["colspan", "rowspan"]]]), n.EMPTY_TAGS = new r.default(["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]), n.TOP_LEVEL_TAGS = new r.default(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]);
          }),
          /* 294 */
          /***/
          (function(f, n, t) {
            var e = t(295);
            f.exports = e;
          }),
          /* 295 */
          /***/
          (function(f, n, t) {
            t(296), t(61), t(50), t(54);
            var e = t(9);
            f.exports = e.Set;
          }),
          /* 296 */
          /***/
          (function(f, n, t) {
            var e = t(122), a = t(124);
            f.exports = e("Set", function(r) {
              return function() {
                return r(this, arguments.length ? arguments[0] : void 0);
              };
            }, a);
          }),
          /* 297 */
          /***/
          (function(f, n) {
            function t() {
            }
            t.prototype = {
              handler: null,
              // regexps
              startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
              endTagRe: /^<\/([^>\s]+)[^>]*>/m,
              attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
              parse: function(e, a) {
                a && (this.contentHandler = a);
                for (var r, o, v, A = !1, c = this; e.length > 0; )
                  e.substring(0, 4) == "<!--" ? (v = e.indexOf("-->"), v != -1 ? (this.contentHandler.comment(e.substring(4, v)), e = e.substring(v + 3), A = !1) : A = !0) : e.substring(0, 2) == "</" ? this.endTagRe.test(e) ? (r = RegExp.lastMatch, o = RegExp.rightContext, r.replace(this.endTagRe, function() {
                    return c.parseEndTag.apply(c, arguments);
                  }), e = o, A = !1) : A = !0 : e.charAt(0) == "<" && (this.startTagRe.test(e) ? (r = RegExp.lastMatch, o = RegExp.rightContext, r.replace(this.startTagRe, function() {
                    return c.parseStartTag.apply(c, arguments);
                  }), e = o, A = !1) : A = !0), A && (v = e.indexOf("<"), v == -1 ? (this.contentHandler.characters(e), e = "") : (this.contentHandler.characters(e.substring(0, v)), e = e.substring(v))), A = !0;
              },
              parseStartTag: function(e, a, r) {
                var o = this.parseAttributes(a, r);
                this.contentHandler.startElement(a, o);
              },
              parseEndTag: function(e, a) {
                this.contentHandler.endElement(a);
              },
              parseAttributes: function(e, a) {
                var r = this, o = [];
                return a.replace(this.attrRe, function(v, A, c, g, s, i, u, l) {
                  o.push(r.parseAttribute(e, v, A, c, g, s, i, u, l));
                }), o;
              },
              parseAttribute: function(e, a, r) {
                var o = "";
                arguments[7] ? o = arguments[8] : arguments[5] ? o = arguments[6] : arguments[3] && (o = arguments[4]);
                var v = !o && !arguments[3];
                return { name: r, value: v ? null : o };
              }
            }, f.exports = t;
          }),
          /* 298 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            function r(o, v) {
              function A(c) {
                o.selection.createRangeByElem(c), o.selection.restoreSelection();
              }
              v.push(A);
            }
            n.default = r;
          }),
          /* 299 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = t(6), A = o.__importDefault(t(3));
            function c(g) {
              var s = [], i = g.childNodes() || [];
              return (0, r.default)(i).call(i, function(u) {
                var l, p = u.nodeType;
                if (p === 3 && (l = u.textContent || "", l = v.replaceHtmlSymbol(l)), p === 1) {
                  l = {}, l = l, l.tag = u.nodeName.toLowerCase();
                  for (var d = [], h = u.attributes, m = h.length || 0, y = 0; y < m; y++) {
                    var x = h[y];
                    d.push({
                      name: x.name,
                      value: x.value
                    });
                  }
                  l.attrs = d, l.children = c(A.default(u));
                }
                l && s.push(l);
              }), s;
            }
            n.default = c;
          }),
          /* 300 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(92)), r = e(t(1)), o = e(t(4));
            (0, r.default)(n, "__esModule", {
              value: !0
            });
            var v = t(2), A = v.__importDefault(t(3));
            function c(g, s) {
              s === void 0 && (s = document.createElement("div"));
              var i = s;
              return (0, o.default)(g).call(g, function(u) {
                var l;
                if (typeof u == "string" && (l = document.createTextNode(u)), (0, a.default)(u) === "object") {
                  var p;
                  l = document.createElement(u.tag), (0, o.default)(p = u.attrs).call(p, function(d) {
                    A.default(l).attr(d.name, d.value);
                  }), u.children && u.children.length > 0 && c(u.children, l.getRootNode());
                }
                l && i.appendChild(l);
              }), A.default(i);
            }
            n.default = c;
          }),
          /* 301 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(89)), o = e(t(70)), v = e(t(28)), A = e(t(302)), c = e(t(4)), g = e(t(94)), s = e(t(133)), i = e(t(46)), u = e(t(57));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var l = t(2), p = l.__importDefault(t(87)), d = l.__importDefault(t(314)), h = l.__importDefault(t(3)), m = (
              /** @class */
              (function() {
                function y(x) {
                  this.editor = x, this.menuList = [], this.constructorList = d.default;
                }
                return y.prototype.extend = function(x, S) {
                  !S || typeof S != "function" || (this.constructorList[x] = S);
                }, y.prototype.init = function() {
                  var x, S, T = this, R = this.editor.config, C = R.excludeMenus;
                  (0, r.default)(C) === !1 && (C = []), R.menus = (0, o.default)(x = R.menus).call(x, function(F) {
                    return (0, v.default)(C).call(C, F) === !1;
                  });
                  var E = (0, A.default)(p.default.globalCustomMenuConstructorList);
                  E = (0, o.default)(E).call(E, function(F) {
                    return (0, v.default)(C).call(C, F);
                  }), (0, c.default)(E).call(E, function(F) {
                    delete p.default.globalCustomMenuConstructorList[F];
                  }), (0, c.default)(S = R.menus).call(S, function(F) {
                    var O = T.constructorList[F];
                    T._initMenuList(F, O);
                  });
                  for (var D = 0, P = (0, g.default)(p.default.globalCustomMenuConstructorList); D < P.length; D++) {
                    var M = P[D], I = M[0], N = M[1], B = N;
                    this._initMenuList(I, B);
                  }
                  this._addToToolbar(), R.showMenuTooltips && this._bindMenuTooltips();
                }, y.prototype._initMenuList = function(x, S) {
                  var T;
                  if (!(S == null || typeof S != "function"))
                    if ((0, s.default)(T = this.menuList).call(T, function(C) {
                      return C.key === x;
                    }))
                      console.warn("菜单名称重复:" + x);
                    else {
                      var R = new S(this.editor);
                      R.key = x, this.menuList.push(R);
                    }
                }, y.prototype._bindMenuTooltips = function() {
                  var x = this.editor, S = x.$toolbarElem, T = x.config, R = T.menuTooltipPosition, C = h.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + R + `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`);
                  C.css("visibility", "hidden"), S.append(C), C.css("z-index", x.zIndex.get("tooltip"));
                  var E = 0;
                  function D() {
                    E && clearTimeout(E);
                  }
                  function P() {
                    D(), C.css("visibility", "hidden");
                  }
                  S.on("mouseover", function(M) {
                    var I = M.target, N = h.default(I), B, F;
                    if (N.isContain(S)) {
                      P();
                      return;
                    }
                    if (N.parentUntil(".w-e-droplist") != null)
                      P();
                    else if (N.attr("data-title"))
                      B = N.attr("data-title"), F = N;
                    else {
                      var O = N.parentUntil(".w-e-menu");
                      O != null && (B = O.attr("data-title"), F = O);
                    }
                    if (B && F) {
                      D();
                      var H = F.getOffsetData();
                      C.text(x.i18next.t("menus.title." + B));
                      var L = C.getOffsetData(), U = H.left + H.width / 2 - L.width / 2;
                      C.css("left", U + "px"), R === "up" ? C.css("top", H.top - L.height - 8 + "px") : R === "down" && C.css("top", H.top + H.height + 8 + "px"), E = (0, i.default)(function() {
                        C.css("visibility", "visible");
                      }, 200);
                    } else
                      P();
                  }).on("mouseleave", function() {
                    P();
                  });
                }, y.prototype._addToToolbar = function() {
                  var x, S = this.editor, T = S.$toolbarElem;
                  (0, c.default)(x = this.menuList).call(x, function(R) {
                    var C = R.$elem;
                    C && T.append(C);
                  });
                }, y.prototype.menuFind = function(x) {
                  for (var S = this.menuList, T = 0, R = S.length; T < R; T++)
                    if (S[T].key === x) return S[T];
                  return S[0];
                }, y.prototype.changeActive = function() {
                  var x;
                  (0, c.default)(x = this.menuList).call(x, function(S) {
                    var T;
                    (0, i.default)((0, u.default)(T = S.tryChangeActive).call(T, S), 100);
                  });
                }, y;
              })()
            );
            n.default = m;
          }),
          /* 302 */
          /***/
          (function(f, n, t) {
            f.exports = t(303);
          }),
          /* 303 */
          /***/
          (function(f, n, t) {
            var e = t(304);
            f.exports = e;
          }),
          /* 304 */
          /***/
          (function(f, n, t) {
            t(305);
            var e = t(9);
            f.exports = e.Object.keys;
          }),
          /* 305 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(31), r = t(52), o = t(11), v = o(function() {
              r(1);
            });
            e({ target: "Object", stat: !0, forced: v }, {
              keys: function(c) {
                return r(a(c));
              }
            });
          }),
          /* 306 */
          /***/
          (function(f, n, t) {
            var e = t(307);
            f.exports = e;
          }),
          /* 307 */
          /***/
          (function(f, n, t) {
            t(308);
            var e = t(9);
            f.exports = e.Object.entries;
          }),
          /* 308 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(309).entries;
            e({ target: "Object", stat: !0 }, {
              entries: function(o) {
                return a(o);
              }
            });
          }),
          /* 309 */
          /***/
          (function(f, n, t) {
            var e = t(14), a = t(52), r = t(30), o = t(59).f, v = function(A) {
              return function(c) {
                for (var g = r(c), s = a(g), i = s.length, u = 0, l = [], p; i > u; )
                  p = s[u++], (!e || o.call(g, p)) && l.push(A ? [p, g[p]] : g[p]);
                return l;
              };
            };
            f.exports = {
              // `Object.entries` method
              // https://tc39.github.io/ecma262/#sec-object.entries
              entries: v(!0),
              // `Object.values` method
              // https://tc39.github.io/ecma262/#sec-object.values
              values: v(!1)
            };
          }),
          /* 310 */
          /***/
          (function(f, n, t) {
            var e = t(311);
            f.exports = e;
          }),
          /* 311 */
          /***/
          (function(f, n, t) {
            var e = t(312), a = Array.prototype;
            f.exports = function(r) {
              var o = r.some;
              return r === a || r instanceof Array && o === a.some ? e : o;
            };
          }),
          /* 312 */
          /***/
          (function(f, n, t) {
            t(313);
            var e = t(15);
            f.exports = e("Array").some;
          }),
          /* 313 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(32).some, r = t(67), o = t(22), v = r("some"), A = o("some");
            e({ target: "Array", proto: !0, forced: !v || !A }, {
              some: function(g) {
                return a(this, g, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          }),
          /* 314 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(315)), v = r.__importDefault(t(316)), A = r.__importDefault(t(321)), c = r.__importDefault(t(326)), g = r.__importDefault(t(327)), s = r.__importDefault(t(328)), i = r.__importDefault(t(329)), u = r.__importDefault(t(331)), l = r.__importDefault(t(333)), p = r.__importDefault(t(334)), d = r.__importDefault(t(337)), h = r.__importDefault(t(338)), m = r.__importDefault(t(339)), y = r.__importDefault(t(350)), x = r.__importDefault(t(365)), S = r.__importDefault(t(369)), T = r.__importDefault(t(137)), R = r.__importDefault(t(378)), C = r.__importDefault(t(380)), E = r.__importDefault(t(381)), D = r.__importDefault(t(382)), P = r.__importDefault(t(401)), M = r.__importDefault(t(406)), I = r.__importDefault(t(409));
            n.default = {
              bold: o.default,
              head: v.default,
              italic: c.default,
              link: A.default,
              underline: g.default,
              strikeThrough: s.default,
              fontName: i.default,
              fontSize: u.default,
              justify: l.default,
              quote: p.default,
              backColor: d.default,
              foreColor: h.default,
              video: m.default,
              image: y.default,
              indent: x.default,
              emoticon: S.default,
              list: T.default,
              lineHeight: R.default,
              undo: C.default,
              redo: E.default,
              table: D.default,
              code: P.default,
              splitLine: M.default,
              todo: I.default
            };
          }),
          /* 315 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(23)), v = r.__importDefault(t(3)), A = (
              /** @class */
              (function(c) {
                r.__extends(g, c);
                function g(s) {
                  var i = this, u = v.default(`<div class="w-e-menu" data-title="加粗">
                <i class="w-e-icon-bold"></i>
            </div>`);
                  return i = c.call(this, u, s) || this, i;
                }
                return g.prototype.clickHandler = function() {
                  var s = this.editor, i = s.selection.isSelectionEmpty();
                  i && s.selection.createEmptyRange(), s.cmd.do("bold"), i && (s.selection.collapseRange(), s.selection.restoreSelection());
                }, g.prototype.tryChangeActive = function() {
                  var s = this.editor;
                  s.cmd.queryCommandState("bold") ? this.active() : this.unActive();
                }, g;
              })(o.default)
            );
            n.default = A;
          }),
          /* 316 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(27)), o = e(t(29)), v = e(t(4)), A = e(t(317)), c = e(t(28));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var g = t(2), s = g.__importDefault(t(24)), i = g.__importDefault(t(3)), u = t(6), l = t(7), p = (
              /** @class */
              (function(d) {
                g.__extends(h, d);
                function h(m) {
                  var y = this, x = i.default('<div class="w-e-menu" data-title="标题"><i class="w-e-icon-header"></i></div>'), S = {
                    width: 100,
                    title: "设置标题",
                    type: "list",
                    list: [{
                      $elem: i.default("<h1>H1</h1>"),
                      value: "<h1>"
                    }, {
                      $elem: i.default("<h2>H2</h2>"),
                      value: "<h2>"
                    }, {
                      $elem: i.default("<h3>H3</h3>"),
                      value: "<h3>"
                    }, {
                      $elem: i.default("<h4>H4</h4>"),
                      value: "<h4>"
                    }, {
                      $elem: i.default("<h5>H5</h5>"),
                      value: "<h5>"
                    }, {
                      $elem: i.default("<p>" + m.i18next.t("menus.dropListMenu.head.正文") + "</p>"),
                      value: "<p>"
                    }],
                    clickHandler: function(C) {
                      y.command(C);
                    }
                  };
                  y = d.call(this, x, m, S) || this;
                  var T = m.config.onCatalogChange;
                  return T && (y.oldCatalogs = [], y.addListenerCatalog(), y.getCatalogs()), y;
                }
                return h.prototype.command = function(m) {
                  var y = this.editor, x = y.selection.getSelectionContainerElem();
                  if (x && y.$textElem.equal(x))
                    this.setMultilineHead(m);
                  else {
                    var S;
                    if ((0, r.default)(S = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(S, i.default(x).getNodeName()) > -1)
                      return;
                    y.cmd.do("formatBlock", m);
                  }
                  m !== "<p>" && this.addUidForSelectionElem();
                }, h.prototype.addUidForSelectionElem = function() {
                  var m = this.editor, y = m.selection.getSelectionContainerElem(), x = u.getRandomCode();
                  i.default(y).attr("id", x);
                }, h.prototype.addListenerCatalog = function() {
                  var m = this, y = this.editor;
                  y.txt.eventHooks.changeEvents.push(function() {
                    m.getCatalogs();
                  });
                }, h.prototype.getCatalogs = function() {
                  var m = this.editor, y = this.editor.$textElem, x = m.config.onCatalogChange, S = (0, o.default)(y).call(y, "h1,h2,h3,h4,h5"), T = [];
                  (0, v.default)(S).call(S, function(R, C) {
                    var E = i.default(R), D = E.attr("id"), P = E.getNodeName(), M = E.text();
                    D || (D = u.getRandomCode(), E.attr("id", D)), M && T.push({
                      tag: P,
                      id: D,
                      text: M
                    });
                  }), (0, A.default)(this.oldCatalogs) !== (0, A.default)(T) && (this.oldCatalogs = T, x && x(T));
                }, h.prototype.setMultilineHead = function(m) {
                  var y = this, x, S, T = this.editor, R = T.selection, C = (x = R.getSelectionContainerElem()) === null || x === void 0 ? void 0 : x.elems[0], E = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"], D = i.default(R.getSelectionStartElem()), P = i.default(R.getSelectionEndElem());
                  P.elems[0].outerHTML === i.default(l.EMPTY_P).elems[0].outerHTML && !P.elems[0].nextSibling && (P = P.prev());
                  var M = [];
                  M.push(D.getNodeTop(T));
                  var I = [], N = (S = R.getRange()) === null || S === void 0 ? void 0 : S.commonAncestorContainer.childNodes;
                  N == null || (0, v.default)(N).call(N, function(O, H) {
                    O === M[0].getNode() && I.push(H), O === P.getNodeTop(T).getNode() && I.push(H);
                  });
                  for (var B = 0; M[B].getNode() !== P.getNodeTop(T).getNode(); ) {
                    if (!M[B].elems[0]) return;
                    var F = i.default(M[B].next().getNode());
                    M.push(F), B++;
                  }
                  M == null || (0, v.default)(M).call(M, function(O, H) {
                    if (!y.hasTag(O, E)) {
                      var L = i.default(m), U = O.parent().getNode();
                      L.html("" + O.html()), U.insertBefore(L.getNode(), O.getNode()), O.remove();
                    }
                  }), R.createRangeByElems(C.children[I[0]], C.children[I[1]]);
                }, h.prototype.hasTag = function(m, y) {
                  var x = this, S;
                  if (!m) return !1;
                  if ((0, c.default)(y).call(y, m?.getNodeName())) return !0;
                  var T = !1;
                  return (S = m.children()) === null || S === void 0 || (0, v.default)(S).call(S, function(R) {
                    T = x.hasTag(i.default(R), y);
                  }), T;
                }, h.prototype.tryChangeActive = function() {
                  var m = this.editor, y = /^h/i, x = m.cmd.queryCommandValue("formatBlock");
                  y.test(x) ? this.active() : this.unActive();
                }, h;
              })(s.default)
            );
            n.default = p;
          }),
          /* 317 */
          /***/
          (function(f, n, t) {
            f.exports = t(318);
          }),
          /* 318 */
          /***/
          (function(f, n, t) {
            var e = t(319);
            f.exports = e;
          }),
          /* 319 */
          /***/
          (function(f, n, t) {
            t(320);
            var e = t(9);
            e.JSON || (e.JSON = { stringify: JSON.stringify }), f.exports = function(r, o, v) {
              return e.JSON.stringify.apply(null, arguments);
            };
          }),
          /* 320 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(36), r = t(11), o = a("JSON", "stringify"), v = /[\uD800-\uDFFF]/g, A = /^[\uD800-\uDBFF]$/, c = /^[\uDC00-\uDFFF]$/, g = function(i, u, l) {
              var p = l.charAt(u - 1), d = l.charAt(u + 1);
              return A.test(i) && !c.test(d) || c.test(i) && !A.test(p) ? "\\u" + i.charCodeAt(0).toString(16) : i;
            }, s = r(function() {
              return o("\uDF06\uD834") !== '"\\udf06\\ud834"' || o("\uDEAD") !== '"\\udead"';
            });
            o && e({ target: "JSON", stat: !0, forced: s }, {
              // eslint-disable-next-line no-unused-vars
              stringify: function(u, l, p) {
                var d = o.apply(null, arguments);
                return typeof d == "string" ? d.replace(v, g) : d;
              }
            });
          }),
          /* 321 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(17));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(38)), A = o.__importDefault(t(3)), c = o.__importDefault(t(322)), g = o.__importStar(t(96)), s = o.__importDefault(t(33)), i = o.__importDefault(t(324)), u = t(7), l = (
              /** @class */
              (function(p) {
                o.__extends(d, p);
                function d(h) {
                  var m = this, y = A.default('<div class="w-e-menu" data-title="链接"><i class="w-e-icon-link"></i></div>');
                  return m = p.call(this, y, h) || this, i.default(h), m;
                }
                return d.prototype.clickHandler = function() {
                  var h = this.editor, m, y = h.selection.getSelectionContainerElem(), x = h.$textElem, S = x.html(), T = (0, r.default)(S).call(S);
                  if (T === u.EMPTY_P) {
                    var R = x.children();
                    h.selection.createRangeByElem(R, !0, !0), y = h.selection.getSelectionContainerElem();
                  }
                  if (!(y && h.$textElem.equal(y)))
                    if (this.isActive) {
                      var C = "", E = "";
                      if (m = h.selection.getSelectionContainerElem(), !m)
                        return;
                      if (m.getNodeName() !== "A") {
                        var D = g.getParentNodeA(m);
                        m = A.default(D);
                      }
                      C = m.elems[0].innerText, E = m.attr("href"), this.createPanel(C, E);
                    } else
                      h.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(h.selection.getSelectionText(), "");
                }, d.prototype.createPanel = function(h, m) {
                  var y = c.default(this.editor, h, m), x = new s.default(this, y);
                  x.create();
                }, d.prototype.tryChangeActive = function() {
                  var h = this.editor;
                  g.default(h) ? this.active() : this.unActive();
                }, d;
              })(v.default)
            );
            n.default = l;
          }),
          /* 322 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(28)), o = e(t(17)), v = e(t(29));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var A = t(2), c = t(6), g = A.__importDefault(t(3)), s = A.__importStar(t(96)), i = t(323);
            function u(l, p, d) {
              var h = c.getRandom("input-link"), m = c.getRandom("input-text"), y = c.getRandom("btn-ok"), x = c.getRandom("btn-del"), S = s.default(l) ? "inline-block" : "none", T;
              function R() {
                if (s.default(l)) {
                  var M = l.selection.getSelectionContainerElem();
                  M && (l.selection.createRangeByElem(M), l.selection.restoreSelection(), T = M);
                }
              }
              function C(M, I) {
                var N = M.replace(/</g, "&lt;").replace(/>/g, "&gt;"), B = g.default('<a target="_blank">' + N + "</a>"), F = B.elems[0];
                F.innerText = M, F.href = I, s.default(l) && R(), l.cmd.do("insertElem", B);
              }
              function E() {
                if (s.default(l))
                  if (R(), T.getNodeName() === "A") {
                    var M, I = T.elems[0], N = I.parentElement;
                    N && (0, r.default)(M = s.EXTRA_TAG).call(M, N.nodeName) ? N.innerHTML = I.innerHTML : l.cmd.do("insertHTML", "<span>" + I.innerHTML + "</span>");
                  } else {
                    var B = s.getParentNodeA(T), F = B.innerHTML;
                    l.cmd.do("insertHTML", "<span>" + F + "</span>");
                  }
              }
              function D(M, I) {
                var N = l.config.linkCheck(M, I);
                if (N !== void 0) {
                  if (N === !0)
                    return !0;
                  l.config.customAlert(N, "warning");
                }
                return !1;
              }
              var P = {
                width: 300,
                height: 0,
                // 拼接字符串的：xss 攻击：
                //    如值为："><img src=1 onerror=alert(/xss/)>， 插入后：value=""><img src=1 onerror=alert(/xss/)>", 插入一个img元素
                // panel 中可包含多个 tab
                tabs: [{
                  // tab 的标题
                  title: l.i18next.t("menus.panelMenus.link.链接"),
                  // 模板
                  tpl: `<div>
                        <input
                            id="` + m + `"
                            type="text"
                            class="block"
                            placeholder="` + l.i18next.t("menus.panelMenus.link.链接文字") + `"/>
                        </td>
                        <input
                            id="` + h + `"
                            type="text"
                            class="block"
                            placeholder="` + l.i18next.t("如") + ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` + y + `" class="right">
                                ` + l.i18next.t("插入") + `
                            </button>
                            <button type="button" id="` + x + '" class="gray right" style="display:' + S + `">
                                ` + l.i18next.t("menus.panelMenus.link.取消链接") + `
                            </button>
                        </div>
                    </div>`,
                  // 事件绑定
                  events: [
                    // 插入链接
                    {
                      selector: "#" + y,
                      type: "click",
                      fn: function() {
                        var I, N, B, F, O, H = l.selection.getSelectionContainerElem(), L = H?.elems[0];
                        l.selection.restoreSelection();
                        var U = l.selection.getSelectionRangeTopNodes()[0].getNode(), z = window.getSelection(), j = g.default("#" + h), K = g.default("#" + m), V = (0, o.default)(I = j.val()).call(I), Q = (0, o.default)(N = K.val()).call(N), $ = "";
                        z && !z?.isCollapsed && ($ = (F = i.insertHtml(z, U)) === null || F === void 0 ? void 0 : (0, o.default)(F).call(F));
                        var G = $?.replace(/<.*?>/g, ""), X = (O = G?.length) !== null && O !== void 0 ? O : 0;
                        if (X <= Q.length) {
                          var tt = Q.substring(0, X), et = Q.substring(X);
                          G === tt && (Q = G + et);
                        }
                        if (V && (Q || (Q = V), !!D(Q, V))) {
                          if (L?.nodeName === "A")
                            return L.setAttribute("href", V), L.innerText = Q, !0;
                          if (L?.nodeName !== "A" && (0, r.default)(B = s.EXTRA_TAG).call(B, L.nodeName)) {
                            var st = s.getParentNodeA(H);
                            if (st)
                              return st.setAttribute("href", V), L.innerText = Q, !0;
                          }
                          return C(Q, V), !0;
                        }
                      },
                      bindEnter: !0
                    },
                    // 取消链接
                    {
                      selector: "#" + x,
                      type: "click",
                      fn: function() {
                        return E(), !0;
                      }
                    }
                  ]
                }],
                /**
                 * 设置input的值，分别为文案和链接地址设置值
                 *
                 * 利用dom 设置链接文案的值，防止回填拼接引号问题, 出现xss攻击
                 *
                 * @param $container 对应上面生成的dom容器
                 * @param type text | link
                 */
                setLinkValue: function(I, N) {
                  var B = "", F = "", O;
                  N === "text" && (B = "#" + m, F = p), N === "link" && (B = "#" + h, F = d), O = (0, v.default)(I).call(I, B).elems[0], O.value = F;
                }
              };
              return P;
            }
            n.default = u;
          }),
          /* 323 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.insertHtml = n.createPartHtml = n.makeHtmlString = n.getTopNode = void 0;
            function o(i, u) {
              var l = i, p = i;
              do {
                if (l.textContent === u) break;
                p = l, l.parentNode && (l = l?.parentNode);
              } while (l?.nodeName !== "P");
              return p;
            }
            n.getTopNode = o;
            function v(i, u) {
              var l = i.nodeName, p = "";
              if (i.nodeType === 3 || /^(h|H)[1-6]$/.test(l))
                return u;
              if (i.nodeType === 1) {
                var d = i.getAttribute("style"), h = i.getAttribute("face"), m = i.getAttribute("color");
                d && (p = p + (' style="' + d + '"')), h && (p = p + (' face="' + h + '"')), m && (p = p + (' color="' + m + '"'));
              }
              return l = l.toLowerCase(), "<" + l + p + ">" + u + "</" + l + ">";
            }
            n.makeHtmlString = v;
            function A(i, u, l, p) {
              var d, h = (d = u.textContent) === null || d === void 0 ? void 0 : d.substring(l, p), m = u, y = "";
              do
                y = v(m, h ?? ""), h = y, m = m?.parentElement;
              while (m && m.textContent !== i);
              return y;
            }
            n.createPartHtml = A;
            function c(i, u) {
              var l, p, d, h, m, y = i.anchorNode, x = i.focusNode, S = i.anchorOffset, T = i.focusOffset, R = (l = u.textContent) !== null && l !== void 0 ? l : "", C = g(u), E = "", D = "", P = "", M = "", I = y, N = x, B = y;
              if (y?.isEqualNode(x ?? null)) {
                var F = A(R, y, S, T);
                return F = s(C, F), F;
              }
              for (y && (D = A(R, y, S ?? 0)), x && (M = A(R, x, 0, T)), y && (I = o(y, R)), x && (N = o(x, R)), B = (p = I?.nextSibling) !== null && p !== void 0 ? p : y; !B?.isEqualNode(N ?? null); ) {
                var O = B?.nodeName;
                if (O === "#text")
                  P = P + B?.textContent;
                else {
                  var H = (h = (d = B?.firstChild) === null || d === void 0 ? void 0 : d.parentElement) === null || h === void 0 ? void 0 : h.innerHTML;
                  B && (P = P + v(B, H ?? ""));
                }
                var L = (m = B?.nextSibling) !== null && m !== void 0 ? m : B;
                if (L === B) break;
                B = L;
              }
              return E = "" + D + P + M, E = s(C, E), E;
            }
            n.insertHtml = c;
            function g(i) {
              for (var u, l = (u = i.textContent) !== null && u !== void 0 ? u : "", p = []; i?.textContent === l; )
                i.nodeName !== "P" && i.nodeName !== "TABLE" && p.push(i), i = i.childNodes[0];
              return p;
            }
            function s(i, u) {
              return (0, r.default)(i).call(i, function(l) {
                u = v(l, u);
              }), u;
            }
          }),
          /* 324 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(325));
            function v(A) {
              o.default(A);
            }
            n.default = v;
          }),
          /* 325 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(28));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = o.__importDefault(t(39)), c = t(96);
            function g(i) {
              var u;
              function l(d) {
                var h = [{
                  $elem: v.default("<span>" + i.i18next.t("menus.panelMenus.link.查看链接") + "</span>"),
                  onClick: function(y, x) {
                    var S = x.attr("href");
                    return window.open(S, "_target"), !0;
                  }
                }, {
                  $elem: v.default("<span>" + i.i18next.t("menus.panelMenus.link.取消链接") + "</span>"),
                  onClick: function(y, x) {
                    var S, T;
                    y.selection.createRangeByElem(x), y.selection.restoreSelection();
                    var R = x.childNodes();
                    if (R?.getNodeName() === "IMG") {
                      var C = (T = (S = y.selection.getSelectionContainerElem()) === null || S === void 0 ? void 0 : S.children()) === null || T === void 0 ? void 0 : T.elems[0].children[0];
                      y.cmd.do("insertHTML", `<img 
                                src=` + C?.getAttribute("src") + ` 
                                style=` + C?.getAttribute("style") + ">");
                    } else {
                      var E, D = x.elems[0], P = D.innerHTML, M = D.parentElement;
                      M && (0, r.default)(E = c.EXTRA_TAG).call(E, M.nodeName) ? M.innerHTML = P : y.cmd.do("insertHTML", "<span>" + P + "</span>");
                    }
                    return !0;
                  }
                }];
                u = new A.default(i, d, h), u.create();
              }
              function p() {
                u && (u.remove(), u = null);
              }
              return {
                showLinkTooltip: l,
                hideLinkTooltip: p
              };
            }
            function s(i) {
              var u = g(i), l = u.showLinkTooltip, p = u.hideLinkTooltip;
              i.txt.eventHooks.linkClickEvents.push(l), i.txt.eventHooks.clickEvents.push(p), i.txt.eventHooks.keyupEvents.push(p), i.txt.eventHooks.toolbarClickEvents.push(p), i.txt.eventHooks.menuClickEvents.push(p), i.txt.eventHooks.textScrollEvents.push(p);
            }
            n.default = s;
          }),
          /* 326 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(23)), v = r.__importDefault(t(3)), A = (
              /** @class */
              (function(c) {
                r.__extends(g, c);
                function g(s) {
                  var i = this, u = v.default(`<div class="w-e-menu" data-title="斜体">
                <i class="w-e-icon-italic"></i>
            </div>`);
                  return i = c.call(this, u, s) || this, i;
                }
                return g.prototype.clickHandler = function() {
                  var s = this.editor, i = s.selection.isSelectionEmpty();
                  i && s.selection.createEmptyRange(), s.cmd.do("italic"), i && (s.selection.collapseRange(), s.selection.restoreSelection());
                }, g.prototype.tryChangeActive = function() {
                  var s = this.editor;
                  s.cmd.queryCommandState("italic") ? this.active() : this.unActive();
                }, g;
              })(o.default)
            );
            n.default = A;
          }),
          /* 327 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(23)), v = r.__importDefault(t(3)), A = (
              /** @class */
              (function(c) {
                r.__extends(g, c);
                function g(s) {
                  var i = this, u = v.default(`<div class="w-e-menu" data-title="下划线">
                <i class="w-e-icon-underline"></i>
            </div>`);
                  return i = c.call(this, u, s) || this, i;
                }
                return g.prototype.clickHandler = function() {
                  var s = this.editor, i = s.selection.isSelectionEmpty();
                  i && s.selection.createEmptyRange(), s.cmd.do("underline"), i && (s.selection.collapseRange(), s.selection.restoreSelection());
                }, g.prototype.tryChangeActive = function() {
                  var s = this.editor;
                  s.cmd.queryCommandState("underline") ? this.active() : this.unActive();
                }, g;
              })(o.default)
            );
            n.default = A;
          }),
          /* 328 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(23)), v = r.__importDefault(t(3)), A = (
              /** @class */
              (function(c) {
                r.__extends(g, c);
                function g(s) {
                  var i = this, u = v.default(`<div class="w-e-menu" data-title="删除线">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
                  return i = c.call(this, u, s) || this, i;
                }
                return g.prototype.clickHandler = function() {
                  var s = this.editor, i = s.selection.isSelectionEmpty();
                  i && s.selection.createEmptyRange(), s.cmd.do("strikeThrough"), i && (s.selection.collapseRange(), s.selection.restoreSelection());
                }, g.prototype.tryChangeActive = function() {
                  var s = this.editor;
                  s.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
                }, g;
              })(o.default)
            );
            n.default = A;
          }),
          /* 329 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(24)), v = r.__importDefault(t(3)), A = r.__importDefault(t(330)), c = (
              /** @class */
              (function(g) {
                r.__extends(s, g);
                function s(i) {
                  var u = this, l = v.default(`<div class="w-e-menu" data-title="字体">
                <i class="w-e-icon-font"></i>
            </div>`), p = new A.default(i.config.fontNames), d = {
                    width: 100,
                    title: "设置字体",
                    type: "list",
                    list: p.getItemList(),
                    clickHandler: function(m) {
                      u.command(m);
                    }
                  };
                  return u = g.call(this, l, i, d) || this, u;
                }
                return s.prototype.command = function(i) {
                  var u, l = this.editor, p = l.selection.isSelectionEmpty(), d = (u = l.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
                  if (d != null) {
                    var h = d?.nodeName.toLowerCase() !== "p", m = d?.getAttribute("face") === i;
                    if (p) {
                      if (h && !m) {
                        var y = l.selection.getSelectionRangeTopNodes();
                        l.selection.createRangeByElem(y[0]), l.selection.moveCursor(y[0].elems[0]);
                      }
                      l.selection.setRangeToElem(d), l.selection.createEmptyRange();
                    }
                    l.cmd.do("fontName", i), p && (l.selection.collapseRange(), l.selection.restoreSelection());
                  }
                }, s.prototype.tryChangeActive = function() {
                }, s;
              })(o.default)
            );
            n.default = c;
          }),
          /* 330 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = (
              /** @class */
              (function() {
                function c(g) {
                  var s = this;
                  this.itemList = [], (0, r.default)(g).call(g, function(i) {
                    var u = typeof i == "string" ? i : i.value, l = typeof i == "string" ? i : i.name;
                    s.itemList.push({
                      $elem: v.default(`<p style="font-family:'` + u + `'">` + l + "</p>"),
                      value: l
                    });
                  });
                }
                return c.prototype.getItemList = function() {
                  return this.itemList;
                }, c;
              })()
            );
            n.default = A;
          }),
          /* 331 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(24)), v = r.__importDefault(t(3)), A = r.__importDefault(t(332)), c = (
              /** @class */
              (function(g) {
                r.__extends(s, g);
                function s(i) {
                  var u = this, l = v.default(`<div class="w-e-menu" data-title="字号">
                <i class="w-e-icon-text-heigh"></i>
            </div>`), p = new A.default(i.config.fontSizes), d = {
                    width: 160,
                    title: "设置字号",
                    type: "list",
                    list: p.getItemList(),
                    clickHandler: function(m) {
                      u.command(m);
                    }
                  };
                  return u = g.call(this, l, i, d) || this, u;
                }
                return s.prototype.command = function(i) {
                  var u, l = this.editor, p = l.selection.isSelectionEmpty(), d = (u = l.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
                  d != null && (l.cmd.do("fontSize", i), p && (l.selection.collapseRange(), l.selection.restoreSelection()));
                }, s.prototype.tryChangeActive = function() {
                }, s;
              })(o.default)
            );
            n.default = c;
          }),
          /* 332 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(3)), v = (
              /** @class */
              (function() {
                function A(c) {
                  this.itemList = [];
                  for (var g in c) {
                    var s = c[g];
                    this.itemList.push({
                      $elem: o.default('<p style="font-size:' + g + '">' + s.name + "</p>"),
                      value: s.value
                    });
                  }
                }
                return A.prototype.getItemList = function() {
                  return this.itemList;
                }, A;
              })()
            );
            n.default = v;
          }),
          /* 333 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(27));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var v = t(2), A = v.__importDefault(t(24)), c = v.__importDefault(t(3)), g = ["LI"], s = ["BLOCKQUOTE"], i = (
              /** @class */
              (function(u) {
                v.__extends(l, u);
                function l(p) {
                  var d = this, h = c.default('<div class="w-e-menu" data-title="对齐"><i class="w-e-icon-paragraph-left"></i></div>'), m = {
                    width: 100,
                    title: "对齐方式",
                    type: "list",
                    list: [{
                      $elem: c.default(`<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` + p.i18next.t("menus.dropListMenu.justify.靠左") + `
                        </p>`),
                      value: "left"
                    }, {
                      $elem: c.default(`<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` + p.i18next.t("menus.dropListMenu.justify.居中") + `
                        </p>`),
                      value: "center"
                    }, {
                      $elem: c.default(`<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` + p.i18next.t("menus.dropListMenu.justify.靠右") + `
                        </p>`),
                      value: "right"
                    }, {
                      $elem: c.default(`<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` + p.i18next.t("menus.dropListMenu.justify.两端") + `
                        </p>`),
                      value: "justify"
                    }],
                    clickHandler: function(x) {
                      d.command(x);
                    }
                  };
                  return d = u.call(this, h, p, m) || this, d;
                }
                return l.prototype.command = function(p) {
                  var d = this.editor, h = d.selection, m = h.getSelectionContainerElem();
                  h.saveRange();
                  var y = d.selection.getSelectionRangeTopNodes();
                  if (m?.length)
                    if (this.isSpecialNode(m, y[0]) || this.isSpecialTopNode(y[0])) {
                      var x = this.getSpecialNodeUntilTop(m, y[0]);
                      if (x == null) return;
                      c.default(x).css("text-align", p);
                    } else
                      (0, r.default)(y).call(y, function(S) {
                        S.css("text-align", p);
                      });
                  h.restoreSelection();
                }, l.prototype.getSpecialNodeUntilTop = function(p, d) {
                  for (var h = p.elems[0], m = d.elems[0]; h != null; ) {
                    if ((0, o.default)(g).call(g, h?.nodeName) !== -1 || h.parentNode === m)
                      return h;
                    h = h.parentNode;
                  }
                  return h;
                }, l.prototype.isSpecialNode = function(p, d) {
                  var h = this.getSpecialNodeUntilTop(p, d);
                  return h == null ? !1 : (0, o.default)(g).call(g, h.nodeName) !== -1;
                }, l.prototype.isSpecialTopNode = function(p) {
                  var d;
                  return p == null ? !1 : (0, o.default)(s).call(s, (d = p.elems[0]) === null || d === void 0 ? void 0 : d.nodeName) !== -1;
                }, l.prototype.tryChangeActive = function() {
                }, l;
              })(A.default)
            );
            n.default = i;
          }),
          /* 334 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = o.__importDefault(t(23)), c = o.__importDefault(t(335)), g = o.__importDefault(t(336)), s = t(7), i = (
              /** @class */
              (function(u) {
                o.__extends(l, u);
                function l(p) {
                  var d = this, h = v.default(`<div class="w-e-menu" data-title="引用">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
                  return d = u.call(this, h, p) || this, c.default(p), d;
                }
                return l.prototype.clickHandler = function() {
                  var p, d, h = this.editor, m = h.selection.isSelectionEmpty(), y = h.selection.getSelectionRangeTopNodes(), x = y[y.length - 1], S = this.getTopNodeName();
                  if (S === "BLOCKQUOTE") {
                    var T = v.default(x.childNodes()), R = T.length, C = x;
                    (0, r.default)(T).call(T, function(M) {
                      var I = v.default(M);
                      I.insertAfter(C), C = I;
                    }), x.remove(), h.selection.moveCursor(T.elems[R - 1]), this.tryChangeActive();
                  } else {
                    var E = g.default(y);
                    if (h.$textElem.equal(x)) {
                      var D = (p = h.selection.getSelectionContainerElem()) === null || p === void 0 ? void 0 : p.elems[0];
                      h.selection.createRangeByElems(D.children[0], D.children[0]), y = h.selection.getSelectionRangeTopNodes(), E = g.default(y), x.append(E);
                    } else
                      E.insertAfter(x);
                    this.delSelectNode(y);
                    var P = (d = E.childNodes()) === null || d === void 0 ? void 0 : d.last().getNode();
                    if (P == null) return;
                    P.textContent ? h.selection.moveCursor(P) : h.selection.moveCursor(P, 0), this.tryChangeActive(), v.default(s.EMPTY_P).insertAfter(E);
                    return;
                  }
                  m && (h.selection.collapseRange(), h.selection.restoreSelection());
                }, l.prototype.tryChangeActive = function() {
                  var p, d = this.editor, h = (p = d.selection.getSelectionRangeTopNodes()[0]) === null || p === void 0 ? void 0 : p.getNodeName();
                  h === "BLOCKQUOTE" ? this.active() : this.unActive();
                }, l.prototype.getTopNodeName = function() {
                  var p = this.editor, d = p.selection.getSelectionRangeTopNodes()[0], h = d?.getNodeName();
                  return h;
                }, l.prototype.delSelectNode = function(p) {
                  (0, r.default)(p).call(p, function(d) {
                    d.remove();
                  });
                }, l;
              })(A.default)
            );
            n.default = i;
          }),
          /* 335 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = t(7), v = r.__importDefault(t(3));
            function A(c) {
              function g(s) {
                var i, u = c.selection.getSelectionContainerElem(), l = c.selection.getSelectionRangeTopNodes()[0];
                if (l?.getNodeName() === "BLOCKQUOTE") {
                  if (u.getNodeName() === "BLOCKQUOTE") {
                    var p = (i = u.childNodes()) === null || i === void 0 ? void 0 : i.getNode();
                    c.selection.moveCursor(p);
                  }
                  if (u.text() === "") {
                    s.preventDefault(), u.remove();
                    var d = v.default(o.EMPTY_P);
                    d.insertAfter(l), c.selection.moveCursor(d.getNode(), 0);
                  }
                  l.text() === "" && l.remove();
                }
              }
              c.txt.eventHooks.enterDownEvents.push(g);
            }
            n.default = A;
          }),
          /* 336 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3));
            function A(c) {
              var g = v.default("<blockquote></blockquote>");
              return (0, r.default)(c).call(c, function(s) {
                g.append(s.clone(!0));
              }), g;
            }
            n.default = A;
          }),
          /* 337 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(26));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(24)), A = o.__importDefault(t(3)), c = t(6), g = (
              /** @class */
              (function(s) {
                o.__extends(i, s);
                function i(u) {
                  var l, p = this, d = A.default(`<div class="w-e-menu" data-title="背景色">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), h = {
                    width: 120,
                    title: "背景颜色",
                    // droplist 内容以 block 形式展示
                    type: "inline-block",
                    list: (0, r.default)(l = u.config.colors).call(l, function(m) {
                      return {
                        $elem: A.default('<i style="color:' + m + ';" class="w-e-icon-paint-brush"></i>'),
                        value: m
                      };
                    }),
                    clickHandler: function(y) {
                      p.command(y);
                    }
                  };
                  return p = s.call(this, d, u, h) || this, p;
                }
                return i.prototype.command = function(u) {
                  var l, p = this.editor, d = p.selection.isSelectionEmpty(), h = (l = p.selection.getSelectionContainerElem()) === null || l === void 0 ? void 0 : l.elems[0];
                  if (h != null) {
                    var m = h?.nodeName.toLowerCase() !== "p", y = h?.style.backgroundColor, x = c.hexToRgb(u) === y;
                    if (d) {
                      if (m && !x) {
                        var S = p.selection.getSelectionRangeTopNodes();
                        p.selection.createRangeByElem(S[0]), p.selection.moveCursor(S[0].elems[0]);
                      }
                      p.selection.createEmptyRange();
                    }
                    p.cmd.do("backColor", u), d && (p.selection.collapseRange(), p.selection.restoreSelection());
                  }
                }, i.prototype.tryChangeActive = function() {
                }, i;
              })(v.default)
            );
            n.default = g;
          }),
          /* 338 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(26));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(24)), A = o.__importDefault(t(3)), c = (
              /** @class */
              (function(g) {
                o.__extends(s, g);
                function s(i) {
                  var u, l = this, p = A.default(`<div class="w-e-menu" data-title="文字颜色">
                <i class="w-e-icon-pencil2"></i>
            </div>`), d = {
                    width: 120,
                    title: "文字颜色",
                    // droplist 内容以 block 形式展示
                    type: "inline-block",
                    list: (0, r.default)(u = i.config.colors).call(u, function(h) {
                      return {
                        $elem: A.default('<i style="color:' + h + ';" class="w-e-icon-pencil2"></i>'),
                        value: h
                      };
                    }),
                    clickHandler: function(m) {
                      l.command(m);
                    }
                  };
                  return l = g.call(this, p, i, d) || this, l;
                }
                return s.prototype.command = function(i) {
                  var u, l = this.editor, p = l.selection.isSelectionEmpty(), d = (u = l.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
                  if (d != null) {
                    var h = l.selection.getSelectionText();
                    if (d.nodeName === "A" && d.textContent === h) {
                      var m = A.default("<span>&#8203;</span>").getNode();
                      d.appendChild(m);
                    }
                    l.cmd.do("foreColor", i), p && (l.selection.collapseRange(), l.selection.restoreSelection());
                  }
                }, s.prototype.tryChangeActive = function() {
                }, s;
              })(v.default)
            );
            n.default = c;
          }),
          /* 339 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(33)), A = r.__importDefault(t(38)), c = r.__importDefault(t(340)), g = r.__importDefault(t(346)), s = (
              /** @class */
              (function(i) {
                r.__extends(u, i);
                function u(l) {
                  var p = this, d = o.default(`<div class="w-e-menu" data-title="视频">
                <i class="w-e-icon-play"></i>
            </div>`);
                  return p = i.call(this, d, l) || this, g.default(l), p;
                }
                return u.prototype.clickHandler = function() {
                  this.createPanel("");
                }, u.prototype.createPanel = function(l) {
                  var p = c.default(this.editor, l), d = new v.default(this, p);
                  d.create();
                }, u.prototype.tryChangeActive = function() {
                }, u;
              })(A.default)
            );
            n.default = s;
          }),
          /* 340 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(17));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = t(6), A = o.__importDefault(t(3)), c = o.__importDefault(t(341)), g = t(7);
            function s(i, u) {
              var l = i.config, p = new c.default(i), d = v.getRandom("input-iframe"), h = v.getRandom("btn-ok"), m = v.getRandom("input-upload"), y = v.getRandom("btn-local-ok");
              function x(C) {
                i.cmd.do("insertHTML", C + g.EMPTY_P), i.config.onlineVideoCallback(C);
              }
              function S(C) {
                var E = i.config.onlineVideoCheck(C);
                return E === !0 ? !0 : (typeof E == "string" && i.config.customAlert(E, "error"), !1);
              }
              var T = [{
                // tab 的标题
                title: i.i18next.t("menus.panelMenus.video.上传视频"),
                tpl: `<div class="w-e-up-video-container">
                    <div id="` + y + `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` + m + `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
                events: [
                  // 触发选择视频
                  {
                    selector: "#" + y,
                    type: "click",
                    fn: function() {
                      var E = A.default("#" + m), D = E.elems[0];
                      if (D)
                        D.click();
                      else
                        return !0;
                    }
                  },
                  // 选择视频完毕
                  {
                    selector: "#" + m,
                    type: "change",
                    fn: function() {
                      var E = A.default("#" + m), D = E.elems[0];
                      if (!D)
                        return !0;
                      var P = D.files;
                      return P.length && p.uploadVideo(P), !0;
                    }
                  }
                ]
              }, {
                // tab 的标题
                title: i.i18next.t("menus.panelMenus.video.插入视频"),
                // 模板
                tpl: `<div>
                    <input 
                        id="` + d + `" 
                        type="text" 
                        class="block" 
                        placeholder="` + i.i18next.t("如") + `：<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` + h + `" class="right">
                            ` + i.i18next.t("插入") + `
                        </button>
                    </div>
                </div>`,
                // 事件绑定
                events: [
                  // 插入视频
                  {
                    selector: "#" + h,
                    type: "click",
                    fn: function() {
                      var E, D = A.default("#" + d), P = (0, r.default)(E = D.val()).call(E);
                      if (P && S(P))
                        return x(P), !0;
                    },
                    bindEnter: !0
                  }
                ]
              }], R = {
                width: 300,
                height: 0,
                // panel 中可包含多个 tab
                tabs: []
              };
              return window.FileReader && (l.uploadVideoServer || l.customUploadVideo) && R.tabs.push(T[0]), l.showLinkVideo && R.tabs.push(T[1]), R;
            }
            n.default = s;
          }),
          /* 341 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(133)), o = e(t(57)), v = e(t(4)), A = e(t(27));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var c = t(2), g = t(6), s = c.__importDefault(t(135)), i = c.__importDefault(t(136)), u = t(7), l = t(6), p = (
              /** @class */
              (function() {
                function d(h) {
                  this.editor = h;
                }
                return d.prototype.uploadVideo = function(h) {
                  var m = this;
                  if (h.length) {
                    var y = this.editor, x = y.config, S = "validate.", T = function(G) {
                      return y.i18next.t(S + G);
                    }, R = x.uploadVideoServer, C = x.uploadVideoMaxSize, E = C / 1024, D = x.uploadVideoName, P = x.uploadVideoParams, M = x.uploadVideoParamsWithUrl, I = x.uploadVideoHeaders, N = x.uploadVideoHooks, B = x.uploadVideoTimeout, F = x.withVideoCredentials, O = x.customUploadVideo, H = x.uploadVideoAccept, L = [], U = [];
                    if (g.arrForEach(h, function($) {
                      var G = $.name, X = $.size / 1024 / 1024;
                      if (!(!G || !X)) {
                        if (!(H instanceof Array)) {
                          U.push("【" + H + "】" + T("uploadVideoAccept 不是Array"));
                          return;
                        }
                        if (!(0, r.default)(H).call(H, function(tt) {
                          return tt === G.split(".")[G.split(".").length - 1];
                        })) {
                          U.push("【" + G + "】" + T("不是视频"));
                          return;
                        }
                        if (E < X) {
                          U.push("【" + G + "】" + T("大于") + " " + E + "M");
                          return;
                        }
                        L.push($);
                      }
                    }), U.length) {
                      x.customAlert(T("视频验证未通过") + `: 
` + U.join(`
`), "warning");
                      return;
                    }
                    if (L.length === 0) {
                      x.customAlert(T("传入的文件不合法"), "warning");
                      return;
                    }
                    if (O && typeof O == "function") {
                      var z;
                      O(L, (0, o.default)(z = this.insertVideo).call(z, this));
                      return;
                    }
                    var j = new FormData();
                    if ((0, v.default)(L).call(L, function($, G) {
                      var X = D || $.name;
                      L.length > 1 && (X = X + (G + 1)), j.append(X, $);
                    }), R) {
                      var K = R.split("#");
                      R = K[0];
                      var V = K[1] || "";
                      (0, v.default)(g).call(g, P, function($, G) {
                        M && ((0, A.default)(R).call(R, "?") > 0 ? R += "&" : R += "?", R = R + $ + "=" + G), j.append($, G);
                      }), V && (R += "#" + V);
                      var Q = s.default(R, {
                        timeout: B,
                        formData: j,
                        headers: I,
                        withCredentials: !!F,
                        beforeSend: function(G) {
                          if (N.before) return N.before(G, y, L);
                        },
                        onTimeout: function(G) {
                          x.customAlert(T("上传视频超时"), "error"), N.timeout && N.timeout(G, y);
                        },
                        onProgress: function(G, X) {
                          var tt = new i.default(y);
                          X.lengthComputable && (G = X.loaded / X.total, tt.show(G));
                        },
                        onError: function(G) {
                          x.customAlert(T("上传视频错误"), "error", T("上传视频错误") + "，" + T("服务器返回状态") + ": " + G.status), N.error && N.error(G, y);
                        },
                        onFail: function(G, X) {
                          x.customAlert(T("上传视频失败"), "error", T("上传视频返回结果错误") + ("，" + T("返回结果") + ": ") + X), N.fail && N.fail(G, y, X);
                        },
                        onSuccess: function(G, X) {
                          if (N.customInsert) {
                            var tt;
                            N.customInsert((0, o.default)(tt = m.insertVideo).call(tt, m), X, y);
                            return;
                          }
                          if (X.errno != "0") {
                            x.customAlert(T("上传视频失败"), "error", T("上传视频返回结果错误") + "，" + T("返回结果") + " errno=" + X.errno), N.fail && N.fail(G, y, X);
                            return;
                          }
                          var et = X.data;
                          m.insertVideo(et.url), N.success && N.success(G, y, X);
                        }
                      });
                      typeof Q == "string" && x.customAlert(Q, "error");
                    }
                  }
                }, d.prototype.insertVideo = function(h) {
                  var m = this.editor, y = m.config, x = "validate.", S = function(C, E) {
                    return E === void 0 && (E = x), m.i18next.t(E + C);
                  };
                  if (!y.customInsertVideo)
                    l.UA.isFirefox ? m.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + h + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : m.cmd.do("insertHTML", '<video src="' + h + '" controls="controls" style="max-width:100%"></video>' + u.EMPTY_P);
                  else {
                    y.customInsertVideo(h);
                    return;
                  }
                  var T = document.createElement("video");
                  T.onload = function() {
                    T = null;
                  }, T.onerror = function() {
                    y.customAlert(S("插入视频错误"), "error", "wangEditor: " + S("插入视频错误") + "，" + S("视频链接") + ' "' + h + '"，' + S("下载链接失败")), T = null;
                  }, T.onabort = function() {
                    return T = null;
                  }, T.src = h;
                }, d;
              })()
            );
            n.default = p;
          }),
          /* 342 */
          /***/
          (function(f, n, t) {
            f.exports = t(343);
          }),
          /* 343 */
          /***/
          (function(f, n, t) {
            var e = t(344);
            f.exports = e;
          }),
          /* 344 */
          /***/
          (function(f, n, t) {
            t(345);
            var e = t(9);
            f.exports = e.Date.now;
          }),
          /* 345 */
          /***/
          (function(f, n, t) {
            var e = t(5);
            e({ target: "Date", stat: !0 }, {
              now: function() {
                return (/* @__PURE__ */ new Date()).getTime();
              }
            });
          }),
          /* 346 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(347)), v = r.__importDefault(t(349));
            function A(c) {
              o.default(c), v.default(c);
            }
            n.default = A;
          }),
          /* 347 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.createShowHideFn = void 0;
            var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(39)), A = r.__importDefault(t(348));
            function c(s) {
              var i, u = function(h, m) {
                return m === void 0 && (m = ""), s.i18next.t(m + h);
              };
              function l(d) {
                var h = [{
                  $elem: o.default("<span class='w-e-icon-trash-o'></span>"),
                  onClick: function(y, x) {
                    return x.remove(), !0;
                  }
                }, {
                  $elem: o.default("<span>100%</span>"),
                  onClick: function(y, x) {
                    return x.attr("width", "100%"), x.removeAttr("height"), !0;
                  }
                }, {
                  $elem: o.default("<span>50%</span>"),
                  onClick: function(y, x) {
                    return x.attr("width", "50%"), x.removeAttr("height"), !0;
                  }
                }, {
                  $elem: o.default("<span>30%</span>"),
                  onClick: function(y, x) {
                    return x.attr("width", "30%"), x.removeAttr("height"), !0;
                  }
                }, {
                  $elem: o.default("<span>" + u("重置") + "</span>"),
                  onClick: function(y, x) {
                    return x.removeAttr("width"), x.removeAttr("height"), !0;
                  }
                }, {
                  $elem: o.default("<span>" + u("menus.justify.靠左") + "</span>"),
                  onClick: function(y, x) {
                    return A.default(x, "left"), !0;
                  }
                }, {
                  $elem: o.default("<span>" + u("menus.justify.居中") + "</span>"),
                  onClick: function(y, x) {
                    return A.default(x, "center"), !0;
                  }
                }, {
                  $elem: o.default("<span>" + u("menus.justify.靠右") + "</span>"),
                  onClick: function(y, x) {
                    return A.default(x, "right"), !0;
                  }
                }];
                i = new v.default(s, d, h), i.create();
              }
              function p() {
                i && (i.remove(), i = null);
              }
              return {
                showVideoTooltip: l,
                hideVideoTooltip: p
              };
            }
            n.createShowHideFn = c;
            function g(s) {
              var i = c(s), u = i.showVideoTooltip, l = i.hideVideoTooltip;
              s.txt.eventHooks.videoClickEvents.push(u), s.txt.eventHooks.clickEvents.push(l), s.txt.eventHooks.keyupEvents.push(l), s.txt.eventHooks.toolbarClickEvents.push(l), s.txt.eventHooks.menuClickEvents.push(l), s.txt.eventHooks.textScrollEvents.push(l), s.txt.eventHooks.changeEvents.push(l);
            }
            n.default = g;
          }),
          /* 348 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(28));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3));
            function A(g, s) {
              var i = ["P"], u = c(g, i);
              u && v.default(u).css("text-align", s);
            }
            n.default = A;
            function c(g, s) {
              for (var i, u = g.elems[0]; u != null; ) {
                if ((0, r.default)(s).call(s, u?.nodeName))
                  return u;
                if (((i = u?.parentNode) === null || i === void 0 ? void 0 : i.nodeName) === "BODY")
                  return null;
                u = u.parentNode;
              }
              return u;
            }
          }),
          /* 349 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(6);
            function o(v) {
              if (r.UA.isFirefox) {
                var A = v.txt, c = v.selection, g = A.eventHooks.keydownEvents;
                g.push(function(s) {
                  var i = c.getSelectionContainerElem();
                  if (i) {
                    var u = i.getNodeTop(v), l = u.length && u.prev().length ? u.prev() : null;
                    l && l.attr("data-we-video-p") && c.getCursorPos() === 0 && s.keyCode === 8 && l.remove();
                  }
                });
              }
            }
            n.default = o;
          }),
          /* 350 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(26));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = t(7), A = o.__importDefault(t(3)), c = o.__importDefault(t(33)), g = o.__importDefault(t(38)), s = o.__importDefault(t(351)), i = o.__importDefault(t(364)), u = (
              /** @class */
              (function(l) {
                o.__extends(p, l);
                function p(d) {
                  var h = this, m = A.default('<div class="w-e-menu" data-title="图片"><i class="w-e-icon-image"></i></div>'), y = i.default(d);
                  if (y.onlyUploadConf) {
                    var x;
                    m = y.onlyUploadConf.$elem, (0, r.default)(x = y.onlyUploadConf.events).call(x, function(S) {
                      var T = S.type, R = S.fn || v.EMPTY_FN;
                      m.on(T, function(C) {
                        C.stopPropagation(), R(C);
                      });
                    });
                  }
                  return h = l.call(this, m, d) || this, h.imgPanelConfig = y, s.default(d), h;
                }
                return p.prototype.clickHandler = function() {
                  this.imgPanelConfig.onlyUploadConf || this.createPanel();
                }, p.prototype.createPanel = function() {
                  var d = this.imgPanelConfig, h = new c.default(this, d);
                  this.setPanel(h), h.create();
                }, p.prototype.tryChangeActive = function() {
                }, p;
              })(g.default)
            );
            n.default = u;
          }),
          /* 351 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(352)), v = r.__importDefault(t(353)), A = r.__importDefault(t(354)), c = r.__importDefault(t(362)), g = r.__importDefault(t(363));
            function s(i) {
              o.default(i), v.default(i), A.default(i), c.default(i), g.default(i);
            }
            n.default = s;
          }),
          /* 352 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = t(131), v = r.__importDefault(t(97));
            function A(i, u) {
              var l = i.config, p = l.pasteFilterStyle, d = l.pasteIgnoreImg, h = o.getPasteHtml(u, p, d);
              if (h) return !0;
              var m = o.getPasteText(u);
              return !!m;
            }
            function c(i, u) {
              for (var l, p = ((l = u.clipboardData) === null || l === void 0 ? void 0 : l.types) || [], d = 0; d < p.length; d++) {
                var h = p[d];
                if (h === "Files")
                  return !0;
              }
              return !1;
            }
            function g(i, u) {
              if (!(!c(u, i) && A(u, i))) {
                var l = o.getPasteImgs(i);
                if (l.length) {
                  var p = new v.default(u);
                  p.uploadImg(l);
                }
              }
            }
            function s(i) {
              i.txt.eventHooks.pasteEvents.unshift(function(u) {
                g(u, i);
              });
            }
            n.default = s;
          }),
          /* 353 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(97));
            function v(A) {
              function c(g) {
                var s = g.dataTransfer && g.dataTransfer.files;
                if (!(!s || !s.length)) {
                  var i = new o.default(A);
                  i.uploadImg(s);
                }
              }
              A.txt.eventHooks.dropEvents.push(c);
            }
            n.default = v;
          }),
          /* 354 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(29)), o = e(t(355));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.createShowHideFn = void 0;
            var v = t(2), A = v.__importDefault(t(3));
            t(360);
            var c = t(6);
            function g(p, d, h, m, y) {
              p.attr("style", "width:" + d + "px; height:" + h + "px; left:" + m + "px; top:" + y + "px;");
            }
            function s(p, d) {
              var h = A.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
              return h.hide(), d.append(h), h;
            }
            function i(p, d, h) {
              var m = p.getBoundingClientRect(), y = h.getBoundingClientRect(), x = y.width.toFixed(2), S = y.height.toFixed(2);
              (0, r.default)(d).call(d, ".w-e-img-drag-show-size").text(x + "px * " + S + "px"), g(d, (0, o.default)(x), (0, o.default)(S), y.left - m.left, y.top - m.top), d.show();
            }
            function u(p) {
              var d = p.$textContainerElem, h, m = s(p, d);
              function y(T, R) {
                T.on("click", function(C) {
                  C.stopPropagation();
                }), T.on("mousedown", ".w-e-img-drag-rb", function(C) {
                  if (C.preventDefault(), !h) return;
                  var E = C.clientX, D = C.clientY, P = R.getBoundingClientRect(), M = h.getBoundingClientRect(), I = M.width, N = M.height, B = M.left - P.left, F = M.top - P.top, O = I / N, H = I, L = N, U = A.default(document);
                  function z() {
                    U.off("mousemove", j), U.off("mouseup", K);
                  }
                  function j(V) {
                    V.stopPropagation(), V.preventDefault(), H = I + (V.clientX - E), L = N + (V.clientY - D), H / L != O && (L = H / O), H = (0, o.default)(H.toFixed(2)), L = (0, o.default)(L.toFixed(2)), (0, r.default)(T).call(T, ".w-e-img-drag-show-size").text(H.toFixed(2).replace(".00", "") + "px * " + L.toFixed(2).replace(".00", "") + "px"), g(T, H, L, B, F);
                  }
                  U.on("mousemove", j);
                  function K() {
                    h.attr("width", H + ""), h.attr("height", L + "");
                    var V = h.getBoundingClientRect();
                    g(T, H, L, V.left - P.left, V.top - P.top), z();
                  }
                  U.on("mouseup", K), U.on("mouseleave", z);
                });
              }
              function x(T) {
                if (c.UA.isIE()) return !1;
                T && (h = T, i(d, m, h));
              }
              function S() {
                (0, r.default)(d).call(d, ".w-e-img-drag-mask").hide();
              }
              return y(m, d), A.default(document).on("click", S), p.beforeDestroy(function() {
                A.default(document).off("click", S);
              }), {
                showDrag: x,
                hideDrag: S
              };
            }
            n.createShowHideFn = u;
            function l(p) {
              var d = u(p), h = d.showDrag, m = d.hideDrag;
              p.txt.eventHooks.imgClickEvents.push(h), p.txt.eventHooks.textScrollEvents.push(m), p.txt.eventHooks.keyupEvents.push(m), p.txt.eventHooks.toolbarClickEvents.push(m), p.txt.eventHooks.menuClickEvents.push(m), p.txt.eventHooks.changeEvents.push(m);
            }
            n.default = l;
          }),
          /* 355 */
          /***/
          (function(f, n, t) {
            f.exports = t(356);
          }),
          /* 356 */
          /***/
          (function(f, n, t) {
            var e = t(357);
            f.exports = e;
          }),
          /* 357 */
          /***/
          (function(f, n, t) {
            t(358);
            var e = t(9);
            f.exports = e.parseFloat;
          }),
          /* 358 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(359);
            e({ global: !0, forced: parseFloat != a }, {
              parseFloat: a
            });
          }),
          /* 359 */
          /***/
          (function(f, n, t) {
            var e = t(8), a = t(90).trim, r = t(68), o = e.parseFloat, v = 1 / o(r + "-0") !== -1 / 0;
            f.exports = v ? function(c) {
              var g = a(String(c)), s = o(g);
              return s === 0 && g.charAt(0) == "-" ? -0 : s;
            } : o;
          }),
          /* 360 */
          /***/
          (function(f, n, t) {
            var e = t(20), a = t(361);
            a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
            var r = {};
            r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
          }),
          /* 361 */
          /***/
          (function(f, n, t) {
            var e = t(21);
            n = e(!1), n.push([f.i, `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`, ""]), f.exports = n;
          }),
          /* 362 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.createShowHideFn = void 0;
            var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(39));
            function A(g) {
              var s, i = function(d, h) {
                return h === void 0 && (h = ""), g.i18next.t(h + d);
              };
              function u(p) {
                var d = [{
                  $elem: o.default("<span class='w-e-icon-trash-o'></span>"),
                  onClick: function(m, y) {
                    return m.selection.createRangeByElem(y), m.selection.restoreSelection(), m.cmd.do("delete"), !0;
                  }
                }, {
                  $elem: o.default("<span>30%</span>"),
                  onClick: function(m, y) {
                    return y.attr("width", "30%"), y.removeAttr("height"), !0;
                  }
                }, {
                  $elem: o.default("<span>50%</span>"),
                  onClick: function(m, y) {
                    return y.attr("width", "50%"), y.removeAttr("height"), !0;
                  }
                }, {
                  $elem: o.default("<span>100%</span>"),
                  onClick: function(m, y) {
                    return y.attr("width", "100%"), y.removeAttr("height"), !0;
                  }
                }];
                d.push({
                  $elem: o.default("<span>" + i("重置") + "</span>"),
                  onClick: function(m, y) {
                    return y.removeAttr("width"), y.removeAttr("height"), !0;
                  }
                }), p.attr("data-href") && d.push({
                  $elem: o.default("<span>" + i("查看链接") + "</span>"),
                  onClick: function(m, y) {
                    var x = y.attr("data-href");
                    return x && (x = decodeURIComponent(x), window.open(x, "_target")), !0;
                  }
                }), s = new v.default(g, p, d), s.create();
              }
              function l() {
                s && (s.remove(), s = null);
              }
              return {
                showImgTooltip: u,
                hideImgTooltip: l
              };
            }
            n.createShowHideFn = A;
            function c(g) {
              var s = A(g), i = s.showImgTooltip, u = s.hideImgTooltip;
              g.txt.eventHooks.imgClickEvents.push(i), g.txt.eventHooks.clickEvents.push(u), g.txt.eventHooks.keyupEvents.push(u), g.txt.eventHooks.toolbarClickEvents.push(u), g.txt.eventHooks.menuClickEvents.push(u), g.txt.eventHooks.textScrollEvents.push(u), g.txt.eventHooks.imgDragBarMouseDownEvents.push(u), g.txt.eventHooks.changeEvents.push(u);
            }
            n.default = c;
          }),
          /* 363 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            function r(o) {
              var v = o.txt, A = o.selection, c = v.eventHooks.keydownEvents;
              c.push(function(g) {
                var s = A.getSelectionContainerElem(), i = A.getRange();
                if (!(!i || !s || g.keyCode !== 8 || !A.isSelectionEmpty())) {
                  var u = i.startContainer, l = i.startOffset, p = null;
                  if (l === 0)
                    for (; u !== s.elems[0] && s.elems[0].contains(u) && u.parentNode && !p; ) {
                      if (u.previousSibling) {
                        p = u.previousSibling;
                        break;
                      }
                      u = u.parentNode;
                    }
                  else u.nodeType !== 3 && (p = u.childNodes[l - 1]);
                  if (p) {
                    for (var d = p; d.childNodes.length; )
                      d = d.childNodes[d.childNodes.length - 1];
                    d instanceof HTMLElement && d.tagName === "IMG" && (d.remove(), g.preventDefault());
                  }
                }
              });
            }
            n.default = r;
          }),
          /* 364 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(26)), o = e(t(17));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var v = t(2), A = v.__importDefault(t(3)), c = t(6), g = v.__importDefault(t(97));
            function s(i) {
              var u, l = i.config, p = new g.default(i), d = c.getRandom("up-trigger-id"), h = c.getRandom("up-file-id"), m = c.getRandom("input-link-url"), y = c.getRandom("input-link-url-alt"), x = c.getRandom("input-link-url-href"), S = c.getRandom("btn-link"), T = "menus.panelMenus.image.", R = function(O, H) {
                return H === void 0 && (H = T), i.i18next.t(H + O);
              };
              function C(F, O, H) {
                var L = l.linkImgCheck(F);
                return L === !0 ? !0 : (typeof L == "string" && l.customAlert(L, "error"), !1);
              }
              var E = l.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"', D = (0, r.default)(u = l.uploadImgAccept).call(u, function(F) {
                return "image/" + F;
              }).join(","), P = function(O, H, L) {
                return '<div class="' + O + '" data-title="' + L + `">
            <div id="` + d + `" class="w-e-up-btn">
                <i class="` + H + `"></i>
            </div>
            <div style="display:none;">
                <input id="` + h + '" type="file" ' + E + ' accept="' + D + `"/>
            </div>
        </div>`;
              }, M = [
                // 触发选择图片
                {
                  selector: "#" + d,
                  type: "click",
                  fn: function() {
                    var O = l.uploadImgFromMedia;
                    if (O && typeof O == "function")
                      return O(), !0;
                    var H = A.default("#" + h), L = H.elems[0];
                    if (L)
                      L.click();
                    else
                      return !0;
                  }
                },
                // 选择图片完毕
                {
                  selector: "#" + h,
                  type: "change",
                  fn: function() {
                    var O = A.default("#" + h), H = O.elems[0];
                    if (!H)
                      return !0;
                    var L = H.files;
                    return L?.length && p.uploadImg(L), H && (H.value = ""), !0;
                  }
                }
              ], I = [`<input
            id="` + m + `"
            type="text"
            class="block"
            placeholder="` + R("图片地址") + '"/>'];
              l.showLinkImgAlt && I.push(`
        <input
            id="` + y + `"
            type="text"
            class="block"
            placeholder="` + R("图片文字说明") + '"/>'), l.showLinkImgHref && I.push(`
        <input
            id="` + x + `"
            type="text"
            class="block"
            placeholder="` + R("跳转链接") + '"/>');
              var N = [
                // first tab
                {
                  // 标题
                  title: R("上传图片"),
                  // 模板
                  tpl: P("w-e-up-img-container", "w-e-icon-upload2", ""),
                  // 事件绑定
                  events: M
                },
                // second tab
                {
                  title: R("网络图片"),
                  tpl: `<div>
                    ` + I.join("") + `
                    <div class="w-e-button-container">
                        <button type="button" id="` + S + '" class="right">' + R("插入", "") + `</button>
                    </div>
                </div>`,
                  events: [{
                    selector: "#" + S,
                    type: "click",
                    fn: function() {
                      var O, H = A.default("#" + m), L = (0, o.default)(O = H.val()).call(O);
                      if (L) {
                        var U;
                        if (l.showLinkImgAlt) {
                          var z;
                          U = (0, o.default)(z = A.default("#" + y).val()).call(z);
                        }
                        var j;
                        if (l.showLinkImgHref) {
                          var K;
                          j = (0, o.default)(K = A.default("#" + x).val()).call(K);
                        }
                        if (C(L))
                          return p.insertImg(L, U, j), !0;
                      }
                    },
                    bindEnter: !0
                  }]
                }
              ], B = {
                width: 300,
                height: 0,
                tabs: [],
                onlyUploadConf: {
                  $elem: A.default(P("w-e-menu", "w-e-icon-image", "图片")),
                  events: M
                }
              };
              return window.FileReader && (l.uploadImgShowBase64 || l.uploadImgServer || l.customUploadImg || l.uploadImgFromMedia) && B.tabs.push(N[0]), l.showLinkImg && (B.tabs.push(N[1]), B.onlyUploadConf = void 0), B;
            }
            n.default = s;
          }),
          /* 365 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = o.__importDefault(t(24)), c = o.__importDefault(t(366)), g = (
              /** @class */
              (function(s) {
                o.__extends(i, s);
                function i(u) {
                  var l = this, p = v.default(`<div class="w-e-menu" data-title="缩进">
                <i class="w-e-icon-indent-increase"></i>
            </div>`), d = {
                    width: 130,
                    title: "设置缩进",
                    type: "list",
                    list: [{
                      $elem: v.default(`<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` + u.i18next.t("menus.dropListMenu.indent.增加缩进") + `
                        <p>`),
                      value: "increase"
                    }, {
                      $elem: v.default(`<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` + u.i18next.t("menus.dropListMenu.indent.减少缩进") + `
                        <p>`),
                      value: "decrease"
                    }],
                    clickHandler: function(m) {
                      l.command(m);
                    }
                  };
                  return l = s.call(this, p, u, d) || this, l;
                }
                return i.prototype.command = function(u) {
                  var l = this.editor, p = l.selection.getSelectionContainerElem();
                  if (p && l.$textElem.equal(p)) {
                    var d = l.selection.getSelectionRangeTopNodes();
                    d.length > 0 && (0, r.default)(d).call(d, function(h) {
                      c.default(v.default(h), u, l);
                    });
                  } else
                    p && p.length > 0 && (0, r.default)(p).call(p, function(h) {
                      c.default(v.default(h), u, l);
                    });
                  l.selection.restoreSelection(), this.tryChangeActive();
                }, i.prototype.tryChangeActive = function() {
                  var u = this.editor, l = u.selection.getSelectionStartElem(), p = v.default(l).getNodeTop(u);
                  p.length <= 0 || (p.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
                }, i;
              })(A.default)
            );
            n.default = g;
          }),
          /* 366 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(45)), o = e(t(17));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var v = t(2), A = v.__importDefault(t(367)), c = v.__importDefault(t(368)), g = /^(\d+)(\w+)$/, s = /^(\d+)%$/;
            function i(l) {
              var p = l.config.indentation;
              if (typeof p == "string") {
                if (g.test(p)) {
                  var d, h = (0, r.default)(d = (0, o.default)(p).call(p).match(g)).call(d, 1, 3), m = h[0], y = h[1];
                  return {
                    value: Number(m),
                    unit: y
                  };
                } else if (s.test(p))
                  return {
                    value: Number((0, o.default)(p).call(p).match(s)[1]),
                    unit: "%"
                  };
              } else if (p.value !== void 0 && p.unit)
                return p;
              return {
                value: 2,
                unit: "em"
              };
            }
            function u(l, p, d) {
              var h = l.getNodeTop(d), m = /^(P|H[0-9]*)$/;
              m.test(h.getNodeName()) && (p === "increase" ? A.default(h, i(d)) : p === "decrease" && c.default(h, i(d)));
            }
            n.default = u;
          }),
          /* 367 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(45));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            function o(v, A) {
              var c = v.elems[0];
              if (c.style.paddingLeft === "")
                v.css("padding-left", A.value + A.unit);
              else {
                var g = c.style.paddingLeft, s = (0, r.default)(g).call(g, 0, g.length - A.unit.length), i = Number(s) + A.value;
                v.css("padding-left", "" + i + A.unit);
              }
            }
            n.default = o;
          }),
          /* 368 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(45));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            function o(v, A) {
              var c = v.elems[0];
              if (c.style.paddingLeft !== "") {
                var g = c.style.paddingLeft, s = (0, r.default)(g).call(g, 0, g.length - A.unit.length), i = Number(s) - A.value;
                i > 0 ? v.css("padding-left", "" + i + A.unit) : v.css("padding-left", "");
              }
            }
            n.default = o;
          }),
          /* 369 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(38)), A = r.__importDefault(t(33)), c = r.__importDefault(t(370)), g = (
              /** @class */
              (function(s) {
                r.__extends(i, s);
                function i(u) {
                  var l = this, p = o.default(`<div class="w-e-menu" data-title="表情">
                <i class="w-e-icon-happy"></i>
            </div>`);
                  return l = s.call(this, p, u) || this, l;
                }
                return i.prototype.createPanel = function() {
                  var u = c.default(this.editor), l = new A.default(this, u);
                  l.create();
                }, i.prototype.clickHandler = function() {
                  this.createPanel();
                }, i.prototype.tryChangeActive = function() {
                }, i;
              })(v.default)
            );
            n.default = g;
          }),
          /* 370 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(26)), o = e(t(70)), v = e(t(17));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var A = t(2), c = A.__importDefault(t(3));
            function g(s) {
              var i = s.config.emotions;
              function u(d) {
                var h = [];
                if (d.type == "image") {
                  var m;
                  h = (0, r.default)(m = d.content).call(m, function(x) {
                    return typeof x == "string" ? "" : '<span  title="' + x.alt + `">
                    <img class="eleImg" data-emoji="` + x.alt + '" style src="' + x.src + '" alt="[' + x.alt + `]">
                </span>`;
                  }), h = (0, o.default)(h).call(h, function(x) {
                    return x !== "";
                  });
                } else {
                  var y;
                  h = (0, r.default)(y = d.content).call(y, function(x) {
                    return '<span class="eleImg" title="' + x + '">' + x + "</span>";
                  });
                }
                return h.join("").replace(/&nbsp;/g, "");
              }
              var l = (0, r.default)(i).call(i, function(d) {
                return {
                  title: s.i18next.t("menus.panelMenus.emoticon." + d.title),
                  // 判断type类型如果是image则以img的形式插入否则以内容
                  tpl: "<div>" + u(d) + "</div>",
                  events: [{
                    selector: ".eleImg",
                    type: "click",
                    fn: function(m) {
                      var y = c.default(m.target), x = y.getNodeName(), S;
                      if (x === "IMG") {
                        var T;
                        S = (0, v.default)(T = y.parent().html()).call(T);
                      } else
                        S = "<span>" + y.html() + "</span>";
                      return s.cmd.do("insertHTML", S), !0;
                    }
                  }]
                };
              }), p = {
                width: 300,
                height: 230,
                tabs: l
              };
              return p;
            }
            n.default = g;
          }),
          /* 371 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.createListHandle = n.ClassType = void 0;
            var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(372)), A = r.__importDefault(t(374)), c = r.__importDefault(t(375)), g = r.__importDefault(t(376)), s = r.__importDefault(t(377)), i;
            (function(d) {
              d.Wrap = "WrapListHandle", d.Join = "JoinListHandle", d.StartJoin = "StartJoinListHandle", d.EndJoin = "EndJoinListHandle", d.Other = "OtherListHandle";
            })(i = n.ClassType || (n.ClassType = {}));
            var u = {
              WrapListHandle: v.default,
              JoinListHandle: A.default,
              StartJoinListHandle: c.default,
              EndJoinListHandle: g.default,
              OtherListHandle: s.default
            };
            function l(d, h, m) {
              if (d === i.Other && m === void 0)
                throw new Error("other 类需要传入 range");
              return d !== i.Other ? new u[d](h) : new u[d](h, m);
            }
            n.createListHandle = l;
            var p = (
              /** @class */
              (function() {
                function d(h) {
                  this.handle = h, this.handle.exec();
                }
                return d.prototype.getSelectionRangeElem = function() {
                  return o.default(this.handle.selectionRangeElem.get());
                }, d;
              })()
            );
            n.default = p;
          }),
          /* 372 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = t(58), c = t(47), g = (
              /** @class */
              (function(s) {
                o.__extends(i, s);
                function i(u) {
                  return s.call(this, u) || this;
                }
                return i.prototype.exec = function() {
                  var u = this.options, l = u.listType, p = u.listTarget, d = u.$selectionElem, h = u.$startElem, m = u.$endElem, y, x = [], S = d?.getNodeName(), T = h.prior, R = m.prior;
                  if (!h.prior && !m.prior || !T?.prev().length && !R?.next().length) {
                    var C;
                    (0, r.default)(C = d?.children()).call(C, function(B) {
                      x.push(v.default(B));
                    }), S === l ? y = c.createElementFragment(
                      x,
                      c.createDocumentFragment(),
                      // 创建 文档片段
                      "p"
                    ) : (y = c.createElement(p), (0, r.default)(x).call(x, function(B) {
                      y.appendChild(B.elems[0]);
                    })), this.selectionRangeElem.set(y), c.insertBefore(d, y, d.elems[0]), d.remove();
                  } else {
                    for (var E = T; E.length; )
                      x.push(E), R?.equal(E) ? E = v.default(void 0) : (
                        // 结束
                        E = E.next()
                      );
                    var D = T.prev(), P = R.next();
                    if (S === l ? y = c.createElementFragment(
                      x,
                      c.createDocumentFragment(),
                      // 创建 文档片段
                      "p"
                    ) : (y = c.createElement(p), (0, r.default)(x).call(x, function(B) {
                      y.append(B.elems[0]);
                    })), D.length && P.length) {
                      for (var M = []; P.length; )
                        M.push(P), P = P.next();
                      var I = c.createElement(S);
                      (0, r.default)(M).call(M, function(B) {
                        I.append(B.elems[0]);
                      }), v.default(I).insertAfter(d), this.selectionRangeElem.set(y);
                      var N = d.next();
                      N.length ? c.insertBefore(d, y, N.elems[0]) : d.parent().elems[0].append(y);
                    } else if (!D.length)
                      this.selectionRangeElem.set(y), c.insertBefore(d, y, d.elems[0]);
                    else {
                      this.selectionRangeElem.set(y);
                      var N = d.next();
                      N.length ? c.insertBefore(d, y, N.elems[0]) : d.parent().elems[0].append(y);
                    }
                  }
                }, i;
              })(A.ListHandle)
            );
            n.default = g;
          }),
          /* 373 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = (
              /** @class */
              (function() {
                function v() {
                  this._element = null;
                }
                return v.prototype.set = function(A) {
                  if (A instanceof DocumentFragment) {
                    var c, g = [];
                    (0, r.default)(c = A.childNodes).call(c, function(s) {
                      g.push(s);
                    }), A = g;
                  }
                  this._element = A;
                }, v.prototype.get = function() {
                  return this._element;
                }, v.prototype.clear = function() {
                  this._element = null;
                }, v;
              })()
            );
            n.default = o;
          }),
          /* 374 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = t(58), c = t(47), g = (
              /** @class */
              (function(s) {
                o.__extends(i, s);
                function i(u) {
                  return s.call(this, u) || this;
                }
                return i.prototype.exec = function() {
                  var u, l, p, d, h, m, y, x = this.options, S = x.editor, T = x.listType, R = x.listTarget, C = x.$startElem, E = x.$endElem, D, P = S.selection.getSelectionRangeTopNodes(), M = C?.getNodeName(), I = E?.getNodeName();
                  if (M === I)
                    if (P.length > 2)
                      if (P.shift(), P.pop(), D = c.createElementFragment(
                        c.filterSelectionNodes(P),
                        // 过滤 $nodes 获取到符合要求的选中元素节点
                        c.createDocumentFragment()
                        // 创建 文档片段
                      ), M === T)
                        (u = E.children()) === null || u === void 0 || (0, r.default)(u).call(u, function(V) {
                          D.append(V);
                        }), E.remove(), this.selectionRangeElem.set(D), C.elems[0].append(D);
                      else {
                        for (var N = document.createDocumentFragment(), B = document.createDocumentFragment(), F = c.getStartPoint(C); F.length; ) {
                          var O = F.elems[0];
                          F = F.next(), N.append(O);
                        }
                        for (var H = c.getEndPoint(E), L = []; H.length; )
                          L.unshift(H.elems[0]), H = H.prev();
                        (0, r.default)(L).call(L, function(V) {
                          B.append(V);
                        });
                        var U = c.createElement(R);
                        U.append(N), U.append(D), U.append(B), D = U, this.selectionRangeElem.set(D), v.default(U).insertAfter(C), !(!((l = C.children()) === null || l === void 0) && l.length) && C.remove(), !(!((p = E.children()) === null || p === void 0) && p.length) && E.remove();
                      }
                    else {
                      P.length = 0;
                      for (var F = c.getStartPoint(C); F.length; )
                        P.push(F), F = F.next();
                      for (var H = c.getEndPoint(E), L = []; H.length; )
                        L.unshift(H), H = H.prev();
                      P.push.apply(P, L), M === T ? (D = c.createElementFragment(P, c.createDocumentFragment(), "p"), this.selectionRangeElem.set(D), c.insertBefore(C, D, E.elems[0])) : (D = c.createElement(R), (0, r.default)(P).call(P, function(G) {
                        D.append(G.elems[0]);
                      }), this.selectionRangeElem.set(D), v.default(D).insertAfter(C)), !(!((d = C.children()) === null || d === void 0) && d.length) && E.remove(), !(!((h = E.children()) === null || h === void 0) && h.length) && E.remove();
                    }
                  else {
                    for (var z = [], H = c.getEndPoint(E); H.length; )
                      z.unshift(H), H = H.prev();
                    for (var j = [], F = c.getStartPoint(C); F.length; )
                      j.push(F), F = F.next();
                    if (D = c.createDocumentFragment(), P.shift(), P.pop(), (0, r.default)(j).call(j, function($) {
                      return D.append($.elems[0]);
                    }), D = c.createElementFragment(
                      c.filterSelectionNodes(P),
                      // 序列中间的数据 - 进行数据过滤
                      D
                    ), (0, r.default)(z).call(z, function($) {
                      return D.append($.elems[0]);
                    }), this.selectionRangeElem.set(D), M === T)
                      C.elems[0].append(D), !(!((m = E.children()) === null || m === void 0) && m.length) && E.remove();
                    else if (!((y = E.children()) === null || y === void 0) && y.length) {
                      var K = E.children();
                      c.insertBefore(K, D, K.elems[0]);
                    } else
                      E.elems[0].append(D);
                  }
                }, i;
              })(A.ListHandle)
            );
            n.default = g;
          }),
          /* 375 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = t(58), c = t(47), g = (
              /** @class */
              (function(s) {
                o.__extends(i, s);
                function i(u) {
                  return s.call(this, u) || this;
                }
                return i.prototype.exec = function() {
                  var u, l = this.options, p = l.editor, d = l.listType, h = l.listTarget, m = l.$startElem, y, x = p.selection.getSelectionRangeTopNodes(), S = m?.getNodeName();
                  x.shift();
                  for (var T = [], R = c.getStartPoint(m); R.length; )
                    T.push(R), R = R.next();
                  S === d ? (y = c.createDocumentFragment(), (0, r.default)(T).call(T, function(C) {
                    return y.append(C.elems[0]);
                  }), y = c.createElementFragment(
                    c.filterSelectionNodes(x),
                    // 过滤元素节点数据
                    y
                  ), this.selectionRangeElem.set(y), m.elems[0].append(y)) : (y = c.createElement(h), (0, r.default)(T).call(T, function(C) {
                    return y.append(C.elems[0]);
                  }), y = c.createElementFragment(
                    c.filterSelectionNodes(x),
                    // 过滤普通节点
                    y
                  ), this.selectionRangeElem.set(y), v.default(y).insertAfter(m), !(!((u = m.children()) === null || u === void 0) && u.length) && m.remove());
                }, i;
              })(A.ListHandle)
            );
            n.default = g;
          }),
          /* 376 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = t(58), c = t(47), g = (
              /** @class */
              (function(s) {
                o.__extends(i, s);
                function i(u) {
                  return s.call(this, u) || this;
                }
                return i.prototype.exec = function() {
                  var u, l, p = this.options, d = p.editor, h = p.listType, m = p.listTarget, y = p.$endElem, x, S = d.selection.getSelectionRangeTopNodes(), T = y?.getNodeName();
                  S.pop();
                  for (var R = [], C = c.getEndPoint(y); C.length; )
                    R.unshift(C), C = C.prev();
                  if (T === h)
                    if (x = c.createElementFragment(
                      c.filterSelectionNodes(S),
                      // 过滤元素节点数据
                      c.createDocumentFragment()
                      // 创建 文档片段
                    ), (0, r.default)(R).call(R, function(P) {
                      return x.append(P.elems[0]);
                    }), this.selectionRangeElem.set(x), !((u = y.children()) === null || u === void 0) && u.length) {
                      var E = y.children();
                      c.insertBefore(E, x, E.elems[0]);
                    } else
                      y.elems[0].append(x);
                  else {
                    var D = c.filterSelectionNodes(S);
                    D.push.apply(D, R), x = c.createElementFragment(
                      D,
                      c.createElement(m)
                      // 创建 序列节点
                    ), this.selectionRangeElem.set(x), v.default(x).insertBefore(y), !(!((l = y.children()) === null || l === void 0) && l.length) && y.remove();
                  }
                }, i;
              })(A.ListHandle)
            );
            n.default = g;
          }),
          /* 377 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = t(58), v = t(47), A = (
              /** @class */
              (function(c) {
                r.__extends(g, c);
                function g(s, i) {
                  var u = c.call(this, s) || this;
                  return u.range = i, u;
                }
                return g.prototype.exec = function() {
                  var s = this.options, i = s.editor, u = s.listTarget, l = i.selection.getSelectionRangeTopNodes(), p = v.createElementFragment(
                    v.filterSelectionNodes(l),
                    // 过滤选取的元素
                    v.createElement(u)
                    // 创建 序列节点
                  );
                  this.selectionRangeElem.set(p), this.range.insertNode(p);
                }, g;
              })(o.ListHandle)
            );
            n.default = A;
          }),
          /* 378 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(27));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var v = t(2), A = v.__importDefault(t(24)), c = v.__importDefault(t(3)), g = v.__importDefault(t(379)), s = (
              /** @class */
              (function(i) {
                v.__extends(u, i);
                function u(l) {
                  var p = this, d = c.default(`<div class="w-e-menu" data-title="行高">
                    <i class="w-e-icon-row-height"></i>
                </div>`), h = new g.default(l, l.config.lineHeights), m = {
                    width: 100,
                    title: "设置行高",
                    type: "list",
                    list: h.getItemList(),
                    clickHandler: function(x) {
                      l.selection.saveRange(), p.command(x);
                    }
                  };
                  return p = i.call(this, d, l, m) || this, p;
                }
                return u.prototype.command = function(l) {
                  var p = this.editor;
                  p.selection.restoreSelection();
                  var d = c.default(p.selection.getSelectionContainerElem());
                  if (d.elems.length) {
                    if (d && p.$textElem.equal(d)) {
                      for (var h = !1, m = c.default(p.selection.getSelectionStartElem()).elems[0], y = c.default(p.selection.getSelectionEndElem()).elems[0], x = this.getDom(m), S = this.getDom(y), T = d.elems[0].children, R = 0; R < T.length; R++) {
                        var C = T[R];
                        if (c.default(C).getNodeName() === "P" && (C === x && (h = !0), h && (c.default(C).css("line-height", l), C === S))) {
                          h = !1;
                          return;
                        }
                      }
                      p.selection.createRangeByElems(m, y);
                      return;
                    }
                    var E = d.elems[0], D = this.getDom(E);
                    c.default(D).getNodeName() === "P" && (c.default(D).css("line-height", l), p.selection.createRangeByElems(D, D));
                  }
                }, u.prototype.getDom = function(l) {
                  var p = c.default(l).elems[0];
                  if (!p.parentNode)
                    return p;
                  function d(h, m) {
                    var y = c.default(h.parentNode);
                    return m.$textElem.equal(y) ? h : d(y.elems[0], m);
                  }
                  return p = d(p, this.editor), p;
                }, u.prototype.styleProcessing = function(l) {
                  var p = "";
                  return (0, r.default)(l).call(l, function(d) {
                    d !== "" && (0, o.default)(d).call(d, "line-height") === -1 && (p = p + d + ";");
                  }), p;
                }, u.prototype.setRange = function(l, p) {
                  var d = this.editor, h = window.getSelection ? window.getSelection() : document.getSelection();
                  h?.removeAllRanges();
                  var m = document.createRange(), y = l, x = p;
                  m.setStart(y, 0), m.setEnd(x, 1), h?.addRange(m), d.selection.saveRange(), h?.removeAllRanges(), d.selection.restoreSelection();
                }, u.prototype.tryChangeActive = function() {
                  var l = this.editor, p = l.selection.getSelectionContainerElem();
                  if (!(p && l.$textElem.equal(p))) {
                    var d = c.default(l.selection.getSelectionStartElem());
                    if (d.length !== 0) {
                      d = this.getDom(d.elems[0]);
                      var h = d.getAttribute("style") ? d.getAttribute("style") : "";
                      h && (0, o.default)(h).call(h, "line-height") !== -1 ? this.active() : this.unActive();
                    }
                  }
                }, u;
              })(A.default)
            );
            n.default = s;
          }),
          /* 379 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = (
              /** @class */
              (function() {
                function c(g, s) {
                  var i = this;
                  this.itemList = [{
                    $elem: v.default("<span>" + g.i18next.t("默认") + "</span>"),
                    value: ""
                  }], (0, r.default)(s).call(s, function(u) {
                    i.itemList.push({
                      $elem: v.default("<span>" + u + "</span>"),
                      value: u
                    });
                  });
                }
                return c.prototype.getItemList = function() {
                  return this.itemList;
                }, c;
              })()
            );
            n.default = A;
          }),
          /* 380 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(23)), A = (
              /** @class */
              (function(c) {
                r.__extends(g, c);
                function g(s) {
                  var i = this, u = o.default(`<div class="w-e-menu" data-title="撤销">
                <i class="w-e-icon-undo"></i>
            </div>`);
                  return i = c.call(this, u, s) || this, i;
                }
                return g.prototype.clickHandler = function() {
                  var s = this.editor;
                  s.history.revoke();
                  var i = s.$textElem.children();
                  if (i?.length) {
                    var u = i.last();
                    s.selection.createRangeByElem(u, !1, !0), s.selection.restoreSelection();
                  }
                }, g.prototype.tryChangeActive = function() {
                  this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
                }, g;
              })(v.default)
            );
            n.default = A;
          }),
          /* 381 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(23)), A = (
              /** @class */
              (function(c) {
                r.__extends(g, c);
                function g(s) {
                  var i = this, u = o.default(`<div class="w-e-menu" data-title="恢复">
                <i class="w-e-icon-redo"></i>
            </div>`);
                  return i = c.call(this, u, s) || this, i;
                }
                return g.prototype.clickHandler = function() {
                  var s = this.editor;
                  s.history.restore();
                  var i = s.$textElem.children();
                  if (i?.length) {
                    var u = i.last();
                    s.selection.createRangeByElem(u, !1, !0), s.selection.restoreSelection();
                  }
                }, g.prototype.tryChangeActive = function() {
                  this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
                }, g;
              })(v.default)
            );
            n.default = A;
          }),
          /* 382 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(38)), v = r.__importDefault(t(3)), A = r.__importDefault(t(383)), c = r.__importDefault(t(33)), g = r.__importDefault(t(392)), s = (
              /** @class */
              (function(i) {
                r.__extends(u, i);
                function u(l) {
                  var p = this, d = v.default('<div class="w-e-menu" data-title="表格"><i class="w-e-icon-table2"></i></div>');
                  return p = i.call(this, d, l) || this, g.default(l), p;
                }
                return u.prototype.clickHandler = function() {
                  this.createPanel();
                }, u.prototype.createPanel = function() {
                  var l = A.default(this.editor), p = new c.default(this, l);
                  p.create();
                }, u.prototype.tryChangeActive = function() {
                }, u;
              })(o.default)
            );
            n.default = s;
          }),
          /* 383 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(384));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = t(6), A = o.__importDefault(t(3));
            t(389);
            var c = o.__importDefault(t(391));
            function g(i) {
              return i > 0 && (0, r.default)(i);
            }
            function s(i) {
              var u = new c.default(i), l = v.getRandom("w-col-id"), p = v.getRandom("w-row-id"), d = v.getRandom("btn-link"), h = "menus.panelMenus.table.", m = function(T) {
                return i.i18next.t(T);
              }, y = [{
                title: m(h + "插入表格"),
                tpl: `<div>
                    <div class="w-e-table">
                        <span>` + m("创建") + `</span>
                        <input id="` + p + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + m(h + "行") + `</span>
                        <input id="` + l + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (m(h + "列") + m(h + "的") + m(h + "表格")) + `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` + d + '" class="right">' + m("插入") + `</button>
                    </div>
                </div>`,
                events: [{
                  selector: "#" + d,
                  type: "click",
                  fn: function() {
                    var T = Number(A.default("#" + l).val()), R = Number(A.default("#" + p).val());
                    return g(R) && g(T) ? (u.createAction(R, T), !0) : (i.config.customAlert("表格行列请输入正整数", "warning"), !1);
                  },
                  bindEnter: !0
                }]
              }], x = {
                width: 330,
                height: 0,
                tabs: []
              };
              return x.tabs.push(y[0]), x;
            }
            n.default = s;
          }),
          /* 384 */
          /***/
          (function(f, n, t) {
            f.exports = t(385);
          }),
          /* 385 */
          /***/
          (function(f, n, t) {
            var e = t(386);
            f.exports = e;
          }),
          /* 386 */
          /***/
          (function(f, n, t) {
            t(387);
            var e = t(9);
            f.exports = e.Number.isInteger;
          }),
          /* 387 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(388);
            e({ target: "Number", stat: !0 }, {
              isInteger: a
            });
          }),
          /* 388 */
          /***/
          (function(f, n, t) {
            var e = t(13), a = Math.floor;
            f.exports = function(o) {
              return !e(o) && isFinite(o) && a(o) === o;
            };
          }),
          /* 389 */
          /***/
          (function(f, n, t) {
            var e = t(20), a = t(390);
            a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
            var r = {};
            r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
          }),
          /* 390 */
          /***/
          (function(f, n, t) {
            var e = t(21);
            n = e(!1), n.push([f.i, `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`, ""]), f.exports = n;
          }),
          /* 391 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = t(7), v = r.__importDefault(t(3)), A = (
              /** @class */
              (function() {
                function c(g) {
                  this.editor = g;
                }
                return c.prototype.createAction = function(g, s) {
                  var i = this.editor, u = v.default(i.selection.getSelectionContainerElem()), l = v.default(u.elems[0]).parentUntilEditor("UL", i), p = v.default(u.elems[0]).parentUntilEditor("OL", i);
                  if (!(l || p)) {
                    var d = this.createTableHtml(g, s);
                    i.cmd.do("insertHTML", d);
                  }
                }, c.prototype.createTableHtml = function(g, s) {
                  for (var i = "", u = "", l = 0; l < g; l++) {
                    u = "";
                    for (var p = 0; p < s; p++)
                      l === 0 ? u = u + "<th></th>" : u = u + "<td></td>";
                    i = i + "<tr>" + u + "</tr>";
                  }
                  var d = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + i + ("</tbody></table>" + o.EMPTY_P);
                  return d;
                }, c;
              })()
            );
            n.default = A;
          }),
          /* 392 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(393)), v = t(400);
            function A(c) {
              o.default(c), v.bindEventKeyboardEvent(c), v.bindClickEvent(c);
            }
            n.default = A;
          }),
          /* 393 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(39)), A = r.__importDefault(t(394)), c = r.__importDefault(t(399)), g = t(7);
            function s(p) {
              var d;
              function h(y) {
                var x = new c.default(p), S = "menus.panelMenus.table.", T = function(E, D) {
                  return D === void 0 && (D = S), p.i18next.t(D + E);
                }, R = [{
                  // $elem: $("<span class='w-e-icon-trash-o'></span>"),
                  $elem: o.default("<span>" + T("删除表格") + "</span>"),
                  onClick: function(E, D) {
                    return E.selection.createRangeByElem(D), E.selection.restoreSelection(), E.cmd.do("insertHTML", g.EMPTY_P), !0;
                  }
                }, {
                  $elem: o.default("<span>" + T("添加行") + "</span>"),
                  onClick: function(E, D) {
                    var P = i(E);
                    if (P)
                      return !0;
                    var M = o.default(E.selection.getSelectionStartElem()), I = x.getRowNode(M.elems[0]);
                    if (!I)
                      return !0;
                    var N = Number(x.getCurrentRowIndex(D.elems[0], I)), B = x.getTableHtml(D.elems[0]), F = x.getTableHtml(A.default.ProcessingRow(o.default(B), N).elems[0]);
                    return F = l(D, F), E.selection.createRangeByElem(D), E.selection.restoreSelection(), E.cmd.do("insertHTML", F), !0;
                  }
                }, {
                  $elem: o.default("<span>" + T("删除行") + "</span>"),
                  onClick: function(E, D) {
                    var P = i(E);
                    if (P)
                      return !0;
                    var M = o.default(E.selection.getSelectionStartElem()), I = x.getRowNode(M.elems[0]);
                    if (!I)
                      return !0;
                    var N = Number(x.getCurrentRowIndex(D.elems[0], I)), B = x.getTableHtml(D.elems[0]), F = A.default.DeleteRow(o.default(B), N).elems[0].children[0].children.length, O = "";
                    return E.selection.createRangeByElem(D), E.selection.restoreSelection(), F === 0 ? O = g.EMPTY_P : O = x.getTableHtml(A.default.DeleteRow(o.default(B), N).elems[0]), O = l(D, O), E.cmd.do("insertHTML", O), !0;
                  }
                }, {
                  $elem: o.default("<span>" + T("添加列") + "</span>"),
                  onClick: function(E, D) {
                    var P = i(E);
                    if (P)
                      return !0;
                    var M = o.default(E.selection.getSelectionStartElem()), I = x.getCurrentColIndex(M.elems[0]), N = x.getTableHtml(D.elems[0]), B = x.getTableHtml(A.default.ProcessingCol(o.default(N), I).elems[0]);
                    return B = l(D, B), E.selection.createRangeByElem(D), E.selection.restoreSelection(), E.cmd.do("insertHTML", B), !0;
                  }
                }, {
                  $elem: o.default("<span>" + T("删除列") + "</span>"),
                  onClick: function(E, D) {
                    var P = i(E);
                    if (P)
                      return !0;
                    var M = o.default(E.selection.getSelectionStartElem()), I = x.getCurrentColIndex(M.elems[0]), N = x.getTableHtml(D.elems[0]), B = A.default.DeleteCol(o.default(N), I), F = B.elems[0].children[0].children[0].children.length, O = "";
                    return E.selection.createRangeByElem(D), E.selection.restoreSelection(), F === 0 ? O = g.EMPTY_P : O = x.getTableHtml(B.elems[0]), O = l(D, O), E.cmd.do("insertHTML", O), !0;
                  }
                }, {
                  $elem: o.default("<span>" + T("设置表头") + "</span>"),
                  onClick: function(E, D) {
                    var P = i(E);
                    if (P)
                      return !0;
                    var M = o.default(E.selection.getSelectionStartElem()), I = x.getRowNode(M.elems[0]);
                    if (!I)
                      return !0;
                    var N = Number(x.getCurrentRowIndex(D.elems[0], I));
                    N !== 0 && (N = 0);
                    var B = x.getTableHtml(D.elems[0]), F = x.getTableHtml(A.default.setTheHeader(o.default(B), N, "th").elems[0]);
                    return F = l(D, F), E.selection.createRangeByElem(D), E.selection.restoreSelection(), E.cmd.do("insertHTML", F), !0;
                  }
                }, {
                  $elem: o.default("<span>" + T("取消表头") + "</span>"),
                  onClick: function(E, D) {
                    var P = o.default(E.selection.getSelectionStartElem()), M = x.getRowNode(P.elems[0]);
                    if (!M)
                      return !0;
                    var I = Number(x.getCurrentRowIndex(D.elems[0], M));
                    I !== 0 && (I = 0);
                    var N = x.getTableHtml(D.elems[0]), B = x.getTableHtml(A.default.setTheHeader(o.default(N), I, "td").elems[0]);
                    return B = l(D, B), E.selection.createRangeByElem(D), E.selection.restoreSelection(), E.cmd.do("insertHTML", B), !0;
                  }
                }];
                d = new v.default(p, y, R), d.create();
              }
              function m() {
                d && (d.remove(), d = null);
              }
              return {
                showTableTooltip: h,
                hideTableTooltip: m
              };
            }
            function i(p) {
              var d = p.selection.getSelectionStartElem(), h = p.selection.getSelectionEndElem();
              return d?.elems[0] !== h?.elems[0];
            }
            function u(p) {
              var d = s(p), h = d.showTableTooltip, m = d.hideTableTooltip;
              p.txt.eventHooks.tableClickEvents.push(h), p.txt.eventHooks.clickEvents.push(m), p.txt.eventHooks.keyupEvents.push(m), p.txt.eventHooks.toolbarClickEvents.push(m), p.txt.eventHooks.menuClickEvents.push(m), p.txt.eventHooks.textScrollEvents.push(m);
            }
            n.default = u;
            function l(p, d) {
              var h = p.elems[0].nextSibling;
              return (!h || h.innerHTML === "<br>") && (d += "" + g.EMPTY_P), d;
            }
          }),
          /* 394 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(45)), o = e(t(91)), v = e(t(4)), A = e(t(138));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var c = t(2), g = c.__importDefault(t(3));
            function s(m, y) {
              for (var x = h(m), S = (0, r.default)(Array.prototype).apply(x.children), T = S[0].children.length, R = document.createElement("tr"), C = 0; C < T; C++) {
                var E = document.createElement("td");
                R.appendChild(E);
              }
              return (0, o.default)(S).call(S, y + 1, 0, R), d(x, S), g.default(x.parentNode);
            }
            function i(m, y) {
              for (var x = h(m), S = (0, r.default)(Array.prototype).apply(x.children), T = function(E) {
                var D, P = [];
                for ((0, v.default)(D = (0, A.default)(S[E].children)).call(D, function(N) {
                  P.push(N);
                }); S[E].children.length !== 0; )
                  S[E].removeChild(S[E].children[0]);
                var M = g.default(P[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
                (0, o.default)(P).call(P, y + 1, 0, M);
                for (var I = 0; I < P.length; I++)
                  S[E].appendChild(P[I]);
              }, R = 0; R < S.length; R++)
                T(R);
              return d(x, S), g.default(x.parentNode);
            }
            function u(m, y) {
              var x = h(m), S = (0, r.default)(Array.prototype).apply(x.children);
              return (0, o.default)(S).call(S, y, 1), d(x, S), g.default(x.parentNode);
            }
            function l(m, y) {
              for (var x = h(m), S = (0, r.default)(Array.prototype).apply(x.children), T = function(E) {
                var D, P = [];
                for ((0, v.default)(D = (0, A.default)(S[E].children)).call(D, function(I) {
                  P.push(I);
                }); S[E].children.length !== 0; )
                  S[E].removeChild(S[E].children[0]);
                (0, o.default)(P).call(P, y, 1);
                for (var M = 0; M < P.length; M++)
                  S[E].appendChild(P[M]);
              }, R = 0; R < S.length; R++)
                T(R);
              return d(x, S), g.default(x.parentNode);
            }
            function p(m, y, x) {
              for (var S = h(m), T = (0, r.default)(Array.prototype).apply(S.children), R = T[y].children, C = document.createElement("tr"), E = function(M) {
                var I, N = document.createElement(x), B = R[M];
                (0, v.default)(I = (0, A.default)(B.childNodes)).call(I, function(F) {
                  N.appendChild(F);
                }), C.appendChild(N);
              }, D = 0; D < R.length; D++)
                E(D);
              return (0, o.default)(T).call(T, y, 1, C), d(S, T), g.default(S.parentNode);
            }
            function d(m, y) {
              for (; m.children.length !== 0; )
                m.removeChild(m.children[0]);
              for (var x = 0; x < y.length; x++)
                m.appendChild(y[x]);
            }
            function h(m) {
              var y = m.elems[0].children[0];
              return y.nodeName === "COLGROUP" && (y = m.elems[0].children[m.elems[0].children.length - 1]), y;
            }
            n.default = {
              ProcessingRow: s,
              ProcessingCol: i,
              DeleteRow: u,
              DeleteCol: l,
              setTheHeader: p
            };
          }),
          /* 395 */
          /***/
          (function(f, n, t) {
            var e = t(396);
            f.exports = e;
          }),
          /* 396 */
          /***/
          (function(f, n, t) {
            t(50), t(397);
            var e = t(9);
            f.exports = e.Array.from;
          }),
          /* 397 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(398), r = t(115), o = !r(function(v) {
              Array.from(v);
            });
            e({ target: "Array", stat: !0, forced: o }, {
              from: a
            });
          }),
          /* 398 */
          /***/
          (function(f, n, t) {
            var e = t(40), a = t(31), r = t(114), o = t(112), v = t(35), A = t(69), c = t(113);
            f.exports = function(s) {
              var i = a(s), u = typeof this == "function" ? this : Array, l = arguments.length, p = l > 1 ? arguments[1] : void 0, d = p !== void 0, h = c(i), m = 0, y, x, S, T, R, C;
              if (d && (p = e(p, l > 2 ? arguments[2] : void 0, 2)), h != null && !(u == Array && o(h)))
                for (T = h.call(i), R = T.next, x = new u(); !(S = R.call(T)).done; m++)
                  C = d ? r(T, p, [S.value, m], !0) : S.value, A(x, m, C);
              else
                for (y = v(i.length), x = new u(y); y > m; m++)
                  C = d ? p(i[m], m) : i[m], A(x, m, C);
              return x.length = m, x;
            };
          }),
          /* 399 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(138));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var v = t(2), A = v.__importDefault(t(3)), c = (
              /** @class */
              (function() {
                function g(s) {
                  this.editor = s;
                }
                return g.prototype.getRowNode = function(s) {
                  var i, u = A.default(s).elems[0];
                  return u.parentNode && (u = (i = A.default(u).parentUntil("TR", u)) === null || i === void 0 ? void 0 : i.elems[0]), u;
                }, g.prototype.getCurrentRowIndex = function(s, i) {
                  var u, l = 0, p = s.children[0];
                  return p.nodeName === "COLGROUP" && (p = s.children[s.children.length - 1]), (0, r.default)(u = (0, o.default)(p.children)).call(u, function(d, h) {
                    d === i && (l = h);
                  }), l;
                }, g.prototype.getCurrentColIndex = function(s) {
                  var i, u, l = 0, p = A.default(s).getNodeName() === "TD" || A.default(s).getNodeName() === "TH" ? s : (u = A.default(s).parentUntil("TD", s)) === null || u === void 0 ? void 0 : u.elems[0], d = A.default(p).parent();
                  return (0, r.default)(i = (0, o.default)(d.elems[0].children)).call(i, function(h, m) {
                    h === p && (l = m);
                  }), l;
                }, g.prototype.getTableHtml = function(s) {
                  var i = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + A.default(s).html() + "</table>";
                  return i;
                }, g;
              })()
            );
            n.default = c;
          }),
          /* 400 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.bindEventKeyboardEvent = n.bindClickEvent = void 0;
            var r = t(2), o = r.__importDefault(t(3));
            function v(g) {
              if (!g.length)
                return !1;
              var s = g.elems[0];
              return s.nodeName === "P" && s.innerHTML === "<br>";
            }
            function A(g) {
              function s(i, u) {
                if (u.detail >= 3) {
                  var l = window.getSelection();
                  if (l) {
                    var p = l.focusNode, d = l.anchorNode, h = o.default(d?.parentElement);
                    if (!i.isContain(o.default(p))) {
                      var m = h.elems[0].tagName === "TD" ? h : h.parentUntilEditor("td", g);
                      if (m) {
                        var y = g.selection.getRange();
                        y?.setEnd(m.elems[0], m.elems[0].childNodes.length), g.selection.restoreSelection();
                      }
                    }
                  }
                }
              }
              g.txt.eventHooks.tableClickEvents.push(s);
            }
            n.bindClickEvent = A;
            function c(g) {
              var s = g.txt, i = g.selection, u = s.eventHooks.keydownEvents;
              u.push(function(l) {
                g.selection.saveRange();
                var p = i.getSelectionContainerElem();
                if (p) {
                  var d = p.getNodeTop(g), h = d.length && d.prev().length ? d.prev() : null;
                  if (h && h.getNodeName() === "TABLE" && i.isSelectionEmpty() && i.getCursorPos() === 0 && l.keyCode === 8) {
                    var m = d.next(), y = !!m.length;
                    y && v(d) && (d.remove(), g.selection.setRangeToElem(m.elems[0])), l.preventDefault();
                  }
                }
              });
            }
            n.bindEventKeyboardEvent = c;
          }),
          /* 401 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(26));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.formatCodeHtml = void 0;
            var o = t(2), v = o.__importDefault(t(38)), A = o.__importDefault(t(3)), c = t(6), g = o.__importDefault(t(402)), s = o.__importDefault(t(139)), i = o.__importDefault(t(33)), u = o.__importDefault(t(403));
            function l(d, h) {
              if (!h) return h;
              return h = y(h), h = m(h), h = c.replaceSpecialSymbol(h), h;
              function m(x) {
                var S = x.match(/<pre[\s|\S]+?\/pre>/g);
                return S === null || (0, r.default)(S).call(S, function(T) {
                  x = x.replace(T, T.replace(/<\/code><code>/g, `
`).replace(/<br>/g, ""));
                }), x;
              }
              function y(x) {
                var S, T = x.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
                if (!T || !T.length) return x;
                for (var R = (0, r.default)(S = c.deepClone(T)).call(S, function(E) {
                  return E = E.replace(/<span\sclass="hljs[^>]+>/, ""), E.replace(/<\/span>/, "");
                }), C = 0; C < T.length; C++)
                  x = x.replace(T[C], R[C]);
                return y(x);
              }
            }
            n.formatCodeHtml = l;
            var p = (
              /** @class */
              (function(d) {
                o.__extends(h, d);
                function h(m) {
                  var y = this, x = A.default('<div class="w-e-menu" data-title="代码"><i class="w-e-icon-terminal"></i></div>');
                  return y = d.call(this, x, m) || this, u.default(m), y;
                }
                return h.prototype.insertLineCode = function(m) {
                  var y = this.editor, x = A.default("<code>" + m + "</code>");
                  y.cmd.do("insertElem", x), y.selection.createRangeByElem(x, !1), y.selection.restoreSelection();
                }, h.prototype.clickHandler = function() {
                  var m = this.editor, y = m.selection.getSelectionText();
                  this.isActive || (m.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(y));
                }, h.prototype.createPanel = function(m, y) {
                  var x = g.default(this.editor, m, y), S = new i.default(this, x);
                  S.create();
                }, h.prototype.tryChangeActive = function() {
                  var m = this.editor;
                  s.default(m) ? this.active() : this.unActive();
                }, h;
              })(v.default)
            );
            n.default = p;
          }),
          /* 402 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(26));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = t(6), A = o.__importDefault(t(3)), c = o.__importDefault(t(139)), g = t(7);
            function s(i, u, l) {
              var p, d = v.getRandom("input-iframe"), h = v.getRandom("select"), m = v.getRandom("btn-ok");
              function y(R, C) {
                var E, D = c.default(i);
                D && x();
                var P = (E = i.selection.getSelectionStartElem()) === null || E === void 0 ? void 0 : E.elems[0].innerHTML;
                P && i.cmd.do("insertHTML", g.EMPTY_P);
                var M = C.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                i.highlight && (M = i.highlight.highlightAuto(M).value), i.cmd.do("insertHTML", '<pre><code class="' + R + '">' + M + "</code></pre>");
                var I = i.selection.getSelectionStartElem(), N = I?.getNodeTop(i);
                N?.getNextSibling().elems.length === 0 && A.default(g.EMPTY_P).insertAfter(N);
              }
              function x() {
                if (c.default(i)) {
                  var R = i.selection.getSelectionStartElem(), C = R?.getNodeTop(i);
                  C && (i.selection.createRangeByElem(C), i.selection.restoreSelection());
                }
              }
              var S = function(C) {
                return i.i18next.t(C);
              }, T = {
                width: 500,
                height: 0,
                // panel 中可包含多个 tab
                tabs: [{
                  // tab 的标题
                  title: S("menus.panelMenus.code.插入代码"),
                  // 模板
                  tpl: `<div>
                        <select name="" id="` + h + `">
                            ` + (0, r.default)(p = i.config.languageType).call(p, function(R) {
                    return "<option " + (l == R ? "selected" : "") + ' value ="' + R + '">' + R + "</option>";
                  }) + `
                        </select>
                        <textarea id="` + d + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + u.replace(/&quot;/g, '"') + `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` + m + '" class="right">' + (c.default(i) ? S("修改") : S("插入")) + `</button>
                        </div>
                    </div>`,
                  // 事件绑定
                  events: [
                    // 插入链接
                    {
                      selector: "#" + m,
                      type: "click",
                      fn: function() {
                        var C = document.getElementById(d), E = A.default("#" + h), D = E.val(), P = C.value;
                        if (P)
                          return c.default(i) ? !1 : (y(D, P), !0);
                      }
                    }
                  ]
                }]
              };
              return T;
            }
            n.default = s;
          }),
          /* 403 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(404)), v = r.__importDefault(t(405));
            function A(c) {
              o.default(c), v.default(c);
            }
            n.default = A;
          }),
          /* 404 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.createShowHideFn = void 0;
            var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(39));
            function A(g) {
              var s;
              function i(l) {
                var p = "menus.panelMenus.code.", d = function(y, x) {
                  return x === void 0 && (x = p), g.i18next.t(x + y);
                }, h = [{
                  $elem: o.default("<span>" + d("删除代码") + "</span>"),
                  onClick: function(y, x) {
                    return x.remove(), !0;
                  }
                }];
                s = new v.default(g, l, h), s.create();
              }
              function u() {
                s && (s.remove(), s = null);
              }
              return {
                showCodeTooltip: i,
                hideCodeTooltip: u
              };
            }
            n.createShowHideFn = A;
            function c(g) {
              var s = A(g), i = s.showCodeTooltip, u = s.hideCodeTooltip;
              g.txt.eventHooks.codeClickEvents.push(i), g.txt.eventHooks.clickEvents.push(u), g.txt.eventHooks.toolbarClickEvents.push(u), g.txt.eventHooks.menuClickEvents.push(u), g.txt.eventHooks.textScrollEvents.push(u);
            }
            n.default = c;
          }),
          /* 405 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = t(7), v = r.__importDefault(t(3));
            function A(c) {
              var g = c.$textElem, s = c.selection, i = c.txt, u = i.eventHooks.keydownEvents;
              u.push(function(l) {
                var p;
                if (l.keyCode === 40) {
                  var d = s.getSelectionContainerElem(), h = (p = g.children()) === null || p === void 0 ? void 0 : p.last();
                  if (d?.elems[0].tagName === "XMP" && h?.elems[0].tagName === "PRE") {
                    var m = v.default(o.EMPTY_P);
                    g.append(m);
                  }
                }
              }), u.push(function(l) {
                c.selection.saveRange();
                var p = s.getSelectionContainerElem();
                if (p) {
                  var d = p.getNodeTop(c), h = d?.prev(), m = d?.getNextSibling();
                  if (h.length && h?.getNodeName() === "PRE" && m.length === 0 && s.getCursorPos() === 0 && l.keyCode === 8) {
                    var y = v.default(o.EMPTY_P);
                    g.append(y);
                  }
                }
              });
            }
            n.default = A;
          }),
          /* 406 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(23)), v = r.__importDefault(t(3)), A = r.__importDefault(t(407)), c = t(6), g = t(7), s = (
              /** @class */
              (function(i) {
                r.__extends(u, i);
                function u(l) {
                  var p = this, d = v.default('<div class="w-e-menu" data-title="分割线"><i class="w-e-icon-split-line"></i></div>');
                  return p = i.call(this, d, l) || this, A.default(l), p;
                }
                return u.prototype.clickHandler = function() {
                  var l = this.editor, p = l.selection.getRange(), d = l.selection.getSelectionContainerElem();
                  if (d?.length) {
                    var h = v.default(d.elems[0]), m = h.parentUntil("TABLE", d.elems[0]), y = h.children();
                    h.getNodeName() !== "CODE" && (m && v.default(m.elems[0]).getNodeName() === "TABLE" || y && y.length !== 0 && v.default(y.elems[0]).getNodeName() === "IMG" && !p?.collapsed || this.createSplitLine());
                  }
                }, u.prototype.createSplitLine = function() {
                  var l = "<hr/>" + g.EMPTY_P;
                  c.UA.isFirefox && (l = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", l);
                }, u.prototype.tryChangeActive = function() {
                }, u;
              })(o.default)
            );
            n.default = s;
          }),
          /* 407 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(408));
            function v(A) {
              o.default(A);
            }
            n.default = v;
          }),
          /* 408 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(39));
            function A(g) {
              var s;
              function i(l) {
                var p = [{
                  $elem: o.default("<span>" + g.i18next.t("menus.panelMenus.删除") + "</span>"),
                  onClick: function(h, m) {
                    return h.selection.createRangeByElem(m), h.selection.restoreSelection(), h.cmd.do("delete"), !0;
                  }
                }];
                s = new v.default(g, l, p), s.create();
              }
              function u() {
                s && (s.remove(), s = null);
              }
              return {
                showSplitLineTooltip: i,
                hideSplitLineTooltip: u
              };
            }
            function c(g) {
              var s = A(g), i = s.showSplitLineTooltip, u = s.hideSplitLineTooltip;
              g.txt.eventHooks.splitLineEvents.push(i), g.txt.eventHooks.clickEvents.push(u), g.txt.eventHooks.keyupEvents.push(u), g.txt.eventHooks.toolbarClickEvents.push(u), g.txt.eventHooks.menuClickEvents.push(u), g.txt.eventHooks.textScrollEvents.push(u);
            }
            n.default = c;
          }),
          /* 409 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = o.__importDefault(t(23)), c = t(98), g = o.__importDefault(t(415)), s = o.__importDefault(t(140)), i = (
              /** @class */
              (function(u) {
                o.__extends(l, u);
                function l(p) {
                  var d = this, h = v.default(`<div class="w-e-menu" data-title="待办事项">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
                  return d = u.call(this, h, p) || this, g.default(p), d;
                }
                return l.prototype.clickHandler = function() {
                  var p = this.editor;
                  c.isAllTodo(p) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
                }, l.prototype.tryChangeActive = function() {
                  c.isAllTodo(this.editor) ? this.active() : this.unActive();
                }, l.prototype.setTodo = function() {
                  var p = this.editor, d = p.selection.getSelectionRangeTopNodes();
                  (0, r.default)(d).call(d, function(h) {
                    var m, y = h?.getNodeName();
                    if (y === "P") {
                      var x = s.default(h), S = x.getTodo(), T = (m = S.children()) === null || m === void 0 ? void 0 : m.getNode();
                      S.insertAfter(h), p.selection.moveCursor(T), h.remove();
                    }
                  }), this.tryChangeActive();
                }, l.prototype.cancelTodo = function() {
                  var p = this.editor, d = p.selection.getSelectionRangeTopNodes();
                  (0, r.default)(d).call(d, function(h) {
                    var m, y, x, S = (y = (m = h.childNodes()) === null || m === void 0 ? void 0 : m.childNodes()) === null || y === void 0 ? void 0 : y.clone(!0), T = v.default("<p></p>");
                    T.append(S), T.insertAfter(h), (x = T.childNodes()) === null || x === void 0 || x.get(0).remove(), p.selection.moveCursor(T.getNode()), h.remove();
                  });
                }, l;
              })(A.default)
            );
            n.default = i;
          }),
          /* 410 */
          /***/
          (function(f, n, t) {
            f.exports = t(411);
          }),
          /* 411 */
          /***/
          (function(f, n, t) {
            var e = t(412);
            f.exports = e;
          }),
          /* 412 */
          /***/
          (function(f, n, t) {
            var e = t(413), a = Array.prototype;
            f.exports = function(r) {
              var o = r.every;
              return r === a || r instanceof Array && o === a.every ? e : o;
            };
          }),
          /* 413 */
          /***/
          (function(f, n, t) {
            t(414);
            var e = t(15);
            f.exports = e("Array").every;
          }),
          /* 414 */
          /***/
          (function(f, n, t) {
            var e = t(5), a = t(32).every, r = t(67), o = t(22), v = r("every"), A = o("every");
            e({ target: "Array", proto: !0, forced: !v || !A }, {
              every: function(g) {
                return a(this, g, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          }),
          /* 415 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3)), A = t(98), c = o.__importDefault(t(140)), g = t(98), s = t(7);
            function i(u) {
              function l(m) {
                var y, x;
                if (A.isAllTodo(u)) {
                  m.preventDefault();
                  var S = u.selection, T = S.getSelectionRangeTopNodes()[0], R = (y = T.childNodes()) === null || y === void 0 ? void 0 : y.get(0), C = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode, E = S.getRange();
                  if (!E?.collapsed) {
                    var D = E?.commonAncestorContainer.childNodes, P = E?.startContainer, M = E?.endContainer, I = E?.startOffset, N = E?.endOffset, B = 0, F = 0, O = [];
                    D == null || (0, r.default)(D).call(D, function(G, X) {
                      G.contains(P) && (B = X), G.contains(M) && (F = X);
                    }), F - B > 1 && (D == null || (0, r.default)(D).call(D, function(G, X) {
                      X <= B || X >= F || O.push(G);
                    }), (0, r.default)(O).call(O, function(G) {
                      G.remove();
                    })), g.dealTextNode(P, I), g.dealTextNode(M, N, !1), u.selection.moveCursor(M, 0);
                  }
                  if (T.text() === "") {
                    var H = v.default(s.EMPTY_P);
                    H.insertAfter(T), S.moveCursor(H.getNode()), T.remove();
                    return;
                  }
                  var L = S.getCursorPos(), U = A.getCursorNextNode(R?.getNode(), C, L), z = c.default(v.default(U)), j = z.getInputContainer(), K = j.parent().getNode(), V = z.getTodo(), Q = j.getNode().nextSibling;
                  if (R?.text() === "" && R?.append(v.default("<br>")), V.insertAfter(T), !Q || Q?.textContent === "") {
                    if (Q?.nodeName !== "BR") {
                      var $ = v.default("<br>");
                      $.insertAfter(j);
                    }
                    S.moveCursor(K, 1);
                  } else
                    S.moveCursor(K);
                }
              }
              function p(m) {
                var y, x;
                if (A.isAllTodo(u)) {
                  var S = u.selection, T = S.getSelectionRangeTopNodes()[0], R = (y = T.childNodes()) === null || y === void 0 ? void 0 : y.getNode(), C = v.default("<p></p>"), E = C.getNode(), D = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode, P = S.getCursorPos(), M = D.previousSibling;
                  if (T.text() === "") {
                    m.preventDefault();
                    var I = v.default(s.EMPTY_P);
                    I.insertAfter(T), T.remove(), S.moveCursor(I.getNode(), 0);
                    return;
                  }
                  if (M?.nodeName === "SPAN" && M.childNodes[0].nodeName === "INPUT" && P === 0) {
                    var N;
                    m.preventDefault(), R == null || (0, r.default)(N = R.childNodes).call(N, function(B, F) {
                      F !== 0 && E.appendChild(B.cloneNode(!0));
                    }), C.insertAfter(T), T.remove();
                  }
                }
              }
              function d() {
                var m = u.selection, y = m.getSelectionRangeTopNodes()[0];
                y && g.isTodo(y) && y.text() === "" && (v.default(s.EMPTY_P).insertAfter(y), y.remove());
              }
              function h(m) {
                m && m.target instanceof HTMLInputElement && m.target.type === "checkbox" && (m.target.checked ? m.target.setAttribute("checked", "true") : m.target.removeAttribute("checked"));
              }
              u.txt.eventHooks.enterDownEvents.push(l), u.txt.eventHooks.deleteUpEvents.push(d), u.txt.eventHooks.deleteDownEvents.push(p), u.txt.eventHooks.clickEvents.push(h);
            }
            n.default = i;
          }),
          /* 416 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.selectorValidator = void 0;
            var r = t(2), o = r.__importDefault(t(3)), v = t(6), A = t(7), c = r.__importDefault(t(130)), g = {
              border: "1px solid #c9d8db",
              toolbarBgColor: "#FFF",
              toolbarBottomBorder: "1px solid #EEE"
            };
            function s(u) {
              var l = u.toolbarSelector, p = o.default(l), d = u.textSelector, h = u.config, m = h.height, y = u.i18next, x = o.default("<div></div>"), S = o.default("<div></div>"), T, R, C = null;
              d == null ? (R = p.children(), p.append(x).append(S), x.css("background-color", g.toolbarBgColor).css("border", g.border).css("border-bottom", g.toolbarBottomBorder), S.css("border", g.border).css("border-top", "none").css("height", m + "px")) : (p.append(x), C = o.default(d).children(), o.default(d).append(S), R = S.children()), T = o.default("<div></div>"), T.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
              var E, D = u.config.placeholder;
              D !== c.default.placeholder ? E = o.default("<div>" + D + "</div>") : E = o.default("<div>" + y.t(D) + "</div>"), E.addClass("placeholder"), R && R.length ? (T.append(R), E.hide()) : T.append(o.default(A.EMPTY_P)), C && C.length && (T.append(C), E.hide()), S.append(T), S.append(E), x.addClass("w-e-toolbar").css("z-index", u.zIndex.get("toolbar")), S.addClass("w-e-text-container"), S.css("z-index", u.zIndex.get()), T.addClass("w-e-text");
              var P = v.getRandom("toolbar-elem");
              x.attr("id", P);
              var M = v.getRandom("text-elem");
              T.attr("id", M);
              var I = S.getBoundingClientRect().height, N = T.getBoundingClientRect().height;
              I !== N && T.css("min-height", I + "px"), u.$toolbarElem = x, u.$textContainerElem = S, u.$textElem = T, u.toolbarElemId = P, u.textElemId = M;
            }
            n.default = s;
            function i(u) {
              var l = "data-we-id", p = /^wangEditor-\d+$/, d = u.textSelector, h = u.toolbarSelector, m = {
                bar: o.default("<div></div>"),
                text: o.default("<div></div>")
              };
              if (h == null)
                throw new Error("错误：初始化编辑器时候未传入任何参数，请查阅文档");
              if (m.bar = o.default(h), !m.bar.elems.length)
                throw new Error("无效的节点选择器：" + h);
              if (p.test(m.bar.attr(l)))
                throw new Error("初始化节点已存在编辑器实例，无法重复创建编辑器");
              if (d) {
                if (m.text = o.default(d), !m.text.elems.length)
                  throw new Error("无效的节点选择器：" + d);
                if (p.test(m.text.attr(l)))
                  throw new Error("初始化节点已存在编辑器实例，无法重复创建编辑器");
              }
              m.bar.attr(l, u.id), m.text.attr(l, u.id), u.beforeDestroy(function() {
                m.bar.removeAttr(l), m.text.removeAttr(l);
              });
            }
            n.selectorValidator = i;
          }),
          /* 417 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(3)), v = t(7);
            function A(c, g) {
              var s = c.$textElem, i = s.children();
              if (!i || !i.length) {
                s.append(o.default(v.EMPTY_P)), A(c);
                return;
              }
              var u = i.last();
              if (g) {
                var l = u.html().toLowerCase(), p = u.getNodeName();
                if (l !== "<br>" && l !== "<br/>" || p !== "P") {
                  s.append(o.default(v.EMPTY_P)), A(c);
                  return;
                }
              }
              c.selection.createRangeByElem(u, !1, !0), c.config.focus ? c.selection.restoreSelection() : c.selection.clearWindowSelectionRange();
            }
            n.default = A;
          }),
          /* 418 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3));
            function A(l) {
              c(l), g(l), s(l);
            }
            function c(l) {
              l.txt.eventHooks.changeEvents.push(function() {
                var p = l.config.onchange;
                if (p) {
                  var d = l.txt.html() || "";
                  l.isFocus = !0, p(d);
                }
                l.txt.togglePlaceholder();
              });
            }
            function g(l) {
              l.isFocus = !1;
              function p(d) {
                var h = d.target, m = v.default(h), y = l.$textElem, x = l.$toolbarElem, S = y.isContain(m), T = x.isContain(m), R = x.elems[0] == d.target;
                if (S)
                  l.isFocus || u(l), l.isFocus = !0;
                else {
                  if (T && !R || !l.isFocus)
                    return;
                  i(l), l.isFocus = !1;
                }
              }
              document.activeElement === l.$textElem.elems[0] && l.config.focus && (u(l), l.isFocus = !0), v.default(document).on("click", p), l.beforeDestroy(function() {
                v.default(document).off("click", p);
              });
            }
            function s(l) {
              l.$textElem.on("compositionstart", function() {
                l.isComposing = !0, l.txt.togglePlaceholder();
              }).on("compositionend", function() {
                l.isComposing = !1, l.txt.togglePlaceholder();
              });
            }
            function i(l) {
              var p, d = l.config, h = d.onblur, m = l.txt.html() || "";
              (0, r.default)(p = l.txt.eventHooks.onBlurEvents).call(p, function(y) {
                return y();
              }), h(m);
            }
            function u(l) {
              var p = l.config, d = p.onfocus, h = l.txt.html() || "";
              d(h);
            }
            n.default = A;
          }),
          /* 419 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            function r(o) {
              var v = o.config, A = v.lang, c = v.languages;
              if (o.i18next != null) {
                try {
                  o.i18next.init({
                    ns: "wangEditor",
                    lng: A,
                    defaultNS: "wangEditor",
                    resources: c
                  });
                } catch (g) {
                  throw new Error("i18next:" + g);
                }
                return;
              }
              o.i18next = {
                t: function(s) {
                  var i = s.split(".");
                  return i[i.length - 1];
                }
              };
            }
            n.default = r;
          }),
          /* 420 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(29));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.setUnFullScreen = n.setFullScreen = void 0;
            var o = t(2), v = o.__importDefault(t(3));
            t(421);
            var A = "w-e-icon-fullscreen", c = "w-e-icon-fullscreen_exit", g = "w-e-full-screen-editor";
            n.setFullScreen = function(i) {
              var u = v.default(i.toolbarSelector), l = i.$textContainerElem, p = i.$toolbarElem, d = (0, r.default)(p).call(p, "i." + A), h = i.config;
              d.removeClass(A), d.addClass(c), u.addClass(g), u.css("z-index", h.zIndexFullScreen);
              var m = p.getBoundingClientRect();
              l.css("height", "calc(100% - " + m.height + "px)");
            }, n.setUnFullScreen = function(i) {
              var u = v.default(i.toolbarSelector), l = i.$textContainerElem, p = i.$toolbarElem, d = (0, r.default)(p).call(p, "i." + c), h = i.config;
              d.removeClass(c), d.addClass(A), u.removeClass(g), u.css("z-index", "auto"), l.css("height", h.height + "px");
            };
            var s = function(u) {
              if (!u.textSelector && u.config.showFullScreen) {
                var l = u.$toolbarElem, p = v.default(`<div class="w-e-menu" data-title="全屏">
            <i class="` + A + `"></i>
        </div>`);
                p.on("click", function(d) {
                  var h, m = (0, r.default)(h = v.default(d.currentTarget)).call(h, "i");
                  m.hasClass(A) ? (p.attr("data-title", "取消全屏"), n.setFullScreen(u)) : (p.attr("data-title", "全屏"), n.setUnFullScreen(u));
                }), l.append(p);
              }
            };
            n.default = s;
          }),
          /* 421 */
          /***/
          (function(f, n, t) {
            var e = t(20), a = t(422);
            a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
            var r = {};
            r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
          }),
          /* 422 */
          /***/
          (function(f, n, t) {
            var e = t(21);
            n = e(!1), n.push([f.i, `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`, ""]), f.exports = n;
          }),
          /* 423 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(29));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = function(A, c) {
              var g, s = A.isEnable ? A.$textElem : (0, r.default)(g = A.$textContainerElem).call(g, ".w-e-content-mantle"), i = (0, r.default)(s).call(s, "[id='" + c + "']"), u = i.getOffsetData().top;
              s.scrollTop(u);
            };
            n.default = o;
          }),
          /* 424 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(129)), v = {
              menu: 2,
              panel: 2,
              toolbar: 1,
              tooltip: 1,
              textContainer: 1
            }, A = (
              /** @class */
              (function() {
                function c() {
                  this.tier = v, this.baseZIndex = o.default.zIndex;
                }
                return c.prototype.get = function(g) {
                  return g && this.tier[g] ? this.baseZIndex + this.tier[g] : this.baseZIndex;
                }, c.prototype.init = function(g) {
                  this.baseZIndex == o.default.zIndex && (this.baseZIndex = g.config.zIndex);
                }, c;
              })()
            );
            n.default = A;
          }),
          /* 425 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(70)), o = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var v = t(2), A = v.__importDefault(t(426)), c = t(6), g = t(7);
            function s(u, l) {
              return (0, r.default)(u).call(u, function(p) {
                var d = p.type, h = p.target, m = p.attributeName;
                return d != "attributes" || d == "attributes" && (m == "contenteditable" || h != l);
              });
            }
            var i = (
              /** @class */
              (function(u) {
                v.__extends(l, u);
                function l(p) {
                  var d = u.call(this, function(h, m) {
                    var y;
                    if (h = s(h, m.target), (y = d.data).push.apply(y, h), p.isCompatibleMode)
                      d.asyncSave();
                    else if (!p.isComposing)
                      return d.asyncSave();
                  }) || this;
                  return d.editor = p, d.data = [], d.asyncSave = g.EMPTY_FN, d;
                }
                return l.prototype.save = function() {
                  this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit());
                }, l.prototype.emit = function() {
                  var p;
                  (0, o.default)(p = this.editor.txt.eventHooks.changeEvents).call(p, function(d) {
                    return d();
                  });
                }, l.prototype.observe = function() {
                  var p = this;
                  u.prototype.observe.call(this, this.editor.$textElem.elems[0]);
                  var d = this.editor.config.onchangeTimeout;
                  this.asyncSave = c.debounce(function() {
                    p.save();
                  }, d), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", function() {
                    p.asyncSave();
                  });
                }, l;
              })(A.default)
            );
            n.default = i;
          }),
          /* 426 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = (
              /** @class */
              (function() {
                function o(v, A) {
                  var c = this;
                  this.options = {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                  }, this.callback = function(g) {
                    v(g, c);
                  }, this.observer = new MutationObserver(this.callback), A && (this.options = A);
                }
                return (0, a.default)(o.prototype, "target", {
                  get: function() {
                    return this.node;
                  },
                  enumerable: !1,
                  configurable: !0
                }), o.prototype.observe = function(v) {
                  this.node instanceof Node || (this.node = v, this.connect());
                }, o.prototype.connect = function() {
                  if (this.node)
                    return this.observer.observe(this.node, this.options), this;
                  throw new Error("还未初始化绑定，请您先绑定有效的 Node 节点");
                }, o.prototype.disconnect = function() {
                  var v = this.observer.takeRecords();
                  v.length && this.callback(v), this.observer.disconnect();
                }, o;
              })()
            );
            n.default = r;
          }),
          /* 427 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(428)), v = r.__importDefault(t(435)), A = r.__importDefault(t(436)), c = (
              /** @class */
              (function() {
                function g(s) {
                  this.editor = s, this.content = new o.default(s), this.scroll = new v.default(s), this.range = new A.default(s);
                }
                return (0, a.default)(g.prototype, "size", {
                  /**
                   *  获取缓存中的数据长度。格式为：[正常的数据的条数，被撤销的数据的条数]
                   */
                  get: function() {
                    return this.scroll.size;
                  },
                  enumerable: !1,
                  configurable: !0
                }), g.prototype.observe = function() {
                  this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
                }, g.prototype.save = function(s) {
                  s.length && (this.content.save(s), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
                }, g.prototype.revoke = function() {
                  this.editor.change.disconnect();
                  var s = this.content.revoke();
                  s && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), s && this.editor.change.emit();
                }, g.prototype.restore = function() {
                  this.editor.change.disconnect();
                  var s = this.content.restore();
                  s && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), s && this.editor.change.emit();
                }, g;
              })()
            );
            n.default = c;
          }),
          /* 428 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(429)), v = r.__importDefault(t(433)), A = (
              /** @class */
              (function() {
                function c(g) {
                  this.editor = g;
                }
                return c.prototype.observe = function() {
                  this.editor.isCompatibleMode ? this.cache = new v.default(this.editor) : this.cache = new o.default(this.editor), this.cache.observe();
                }, c.prototype.save = function(g) {
                  this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(g);
                }, c.prototype.revoke = function() {
                  var g;
                  return (g = this.cache) === null || g === void 0 ? void 0 : g.revoke();
                }, c.prototype.restore = function() {
                  var g;
                  return (g = this.cache) === null || g === void 0 ? void 0 : g.restore();
                }, c;
              })()
            );
            n.default = A;
          }),
          /* 429 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(99)), v = r.__importDefault(t(431)), A = t(432), c = (
              /** @class */
              (function(g) {
                r.__extends(s, g);
                function s(i) {
                  var u = g.call(this, i.config.historyMaxSize) || this;
                  return u.editor = i, u;
                }
                return s.prototype.observe = function() {
                  this.resetMaxSize(this.editor.config.historyMaxSize);
                }, s.prototype.compile = function(i) {
                  return this.save(v.default(i)), this;
                }, s.prototype.revoke = function() {
                  return g.prototype.revoke.call(this, function(i) {
                    A.revoke(i);
                  });
                }, s.prototype.restore = function() {
                  return g.prototype.restore.call(this, function(i) {
                    A.restore(i);
                  });
                }, s;
              })(o.default)
            );
            n.default = c;
          }),
          /* 430 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.CeilStack = void 0;
            var r = (
              /** @class */
              (function() {
                function o(v) {
                  v === void 0 && (v = 0), this.data = [], this.max = 0, this.reset = !1, v = Math.abs(v), v && (this.max = v);
                }
                return o.prototype.resetMax = function(v) {
                  v = Math.abs(v), !this.reset && !isNaN(v) && (this.max = v, this.reset = !0);
                }, (0, a.default)(o.prototype, "size", {
                  /**
                   * 当前栈中的数据条数
                   */
                  get: function() {
                    return this.data.length;
                  },
                  enumerable: !1,
                  configurable: !0
                }), o.prototype.instack = function(v) {
                  return this.data.unshift(v), this.max && this.size > this.max && (this.data.length = this.max), this;
                }, o.prototype.outstack = function() {
                  return this.data.shift();
                }, o.prototype.clear = function() {
                  return this.data.length = 0, this;
                }, o;
              })()
            );
            n.CeilStack = r;
          }),
          /* 431 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(27));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.compliePosition = n.complieNodes = n.compileValue = n.compileType = void 0;
            var v = t(6);
            function A(p) {
              switch (p) {
                case "childList":
                  return "node";
                case "attributes":
                  return "attr";
                default:
                  return "text";
              }
            }
            n.compileType = A;
            function c(p) {
              switch (p.type) {
                case "attributes":
                  return p.target.getAttribute(p.attributeName) || "";
                case "characterData":
                  return p.target.textContent;
                default:
                  return "";
              }
            }
            n.compileValue = c;
            function g(p) {
              var d = {};
              return p.addedNodes.length && (d.add = v.toArray(p.addedNodes)), p.removedNodes.length && (d.remove = v.toArray(p.removedNodes)), d;
            }
            n.complieNodes = g;
            function s(p) {
              var d;
              return p.previousSibling ? d = {
                type: "before",
                target: p.previousSibling
              } : p.nextSibling ? d = {
                type: "after",
                target: p.nextSibling
              } : d = {
                type: "parent",
                target: p.target
              }, d;
            }
            n.compliePosition = s;
            var i = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
            function u(p) {
              var d = [], h = !1, m = [];
              return (0, r.default)(p).call(p, function(y, x) {
                var S = {
                  type: A(y.type),
                  target: y.target,
                  attr: y.attributeName || "",
                  value: c(y) || "",
                  oldValue: y.oldValue || "",
                  nodes: g(y),
                  position: s(y)
                };
                if (d.push(S), !!v.UA.isFirefox) {
                  if (h && y.addedNodes.length && y.addedNodes[0].nodeType == 1) {
                    var T = y.addedNodes[0], R = {
                      type: "node",
                      target: T,
                      attr: "",
                      value: "",
                      oldValue: "",
                      nodes: {
                        add: [h]
                      },
                      position: {
                        type: "parent",
                        target: T
                      }
                    };
                    (0, o.default)(i).call(i, T.nodeName) != -1 ? (R.nodes.add = v.toArray(T.childNodes), d.push(R)) : h.nodeType == 3 ? (l(T, m) && (R.nodes.add = v.toArray(T.childNodes)), d.push(R)) : (0, o.default)(i).call(i, y.target.nodeName) == -1 && l(T, m) && (R.nodes.add = v.toArray(T.childNodes), d.push(R));
                  }
                  S.type == "node" && y.removedNodes.length == 1 ? (h = y.removedNodes[0], m.push(h)) : (h = !1, m.length = 0);
                }
              }), d;
            }
            n.default = u;
            function l(p, d) {
              for (var h = 0, m = d.length - 1; m > 0 && p.contains(d[m]); m--)
                h++;
              return h;
            }
          }),
          /* 432 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(94));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.restore = n.revoke = void 0;
            function v(m, y) {
              var x = m.position.target;
              switch (m.position.type) {
                // reference 在这些节点的前面
                case "before":
                  x.nextSibling ? (x = x.nextSibling, (0, r.default)(y).call(y, function(S) {
                    m.target.insertBefore(S, x);
                  })) : (0, r.default)(y).call(y, function(S) {
                    m.target.appendChild(S);
                  });
                  break;
                // reference 在这些节点的后面
                case "after":
                  (0, r.default)(y).call(y, function(S) {
                    m.target.insertBefore(S, x);
                  });
                  break;
                // parent
                // reference 是这些节点的父节点
                default:
                  (0, r.default)(y).call(y, function(S) {
                    x.appendChild(S);
                  });
                  break;
              }
            }
            function A(m) {
              for (var y = 0, x = (0, o.default)(m.nodes); y < x.length; y++) {
                var S = x[y], T = S[0], R = S[1];
                switch (T) {
                  // 反向操作，将这些节点从 DOM 中移除
                  case "add":
                    (0, r.default)(R).call(R, function(C) {
                      m.target.removeChild(C);
                    });
                    break;
                  // remove（反向操作，将这些节点添加到 DOM 中）
                  default: {
                    v(m, R);
                    break;
                  }
                }
              }
            }
            function c(m) {
              var y = m.target;
              m.oldValue == null ? y.removeAttribute(m.attr) : y.setAttribute(m.attr, m.oldValue);
            }
            function g(m) {
              m.target.textContent = m.oldValue;
            }
            var s = {
              node: A,
              text: g,
              attr: c
            };
            function i(m) {
              for (var y = m.length - 1; y > -1; y--) {
                var x = m[y];
                s[x.type](x);
              }
            }
            n.revoke = i;
            function u(m) {
              for (var y = 0, x = (0, o.default)(m.nodes); y < x.length; y++) {
                var S = x[y], T = S[0], R = S[1];
                switch (T) {
                  case "add": {
                    v(m, R);
                    break;
                  }
                  // remove
                  default: {
                    (0, r.default)(R).call(R, function(C) {
                      C.parentNode.removeChild(C);
                    });
                    break;
                  }
                }
              }
            }
            function l(m) {
              m.target.textContent = m.value;
            }
            function p(m) {
              m.target.setAttribute(m.attr, m.value);
            }
            var d = {
              node: u,
              text: l,
              attr: p
            };
            function h(m) {
              for (var y = 0, x = m; y < x.length; y++) {
                var S = x[y];
                d[S.type](S);
              }
            }
            n.restore = h;
          }),
          /* 433 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(434), o = (
              /** @class */
              (function() {
                function v(A) {
                  this.editor = A, this.data = new r.TailChain();
                }
                return v.prototype.observe = function() {
                  this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html());
                }, v.prototype.save = function() {
                  return this.data.insertLast(this.editor.$textElem.html()), this;
                }, v.prototype.revoke = function() {
                  var A = this.data.prev();
                  return A ? (this.editor.$textElem.html(A), !0) : !1;
                }, v.prototype.restore = function() {
                  var A = this.data.next();
                  return A ? (this.editor.$textElem.html(A), !0) : !1;
                }, v;
              })()
            );
            n.default = o;
          }),
          /* 434 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(91));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.TailChain = void 0;
            var o = (
              /** @class */
              (function() {
                function v() {
                  this.data = [], this.max = 0, this.point = 0, this.isRe = !1;
                }
                return v.prototype.resetMax = function(A) {
                  A = Math.abs(A), A && (this.max = A);
                }, (0, a.default)(v.prototype, "size", {
                  /**
                   * 当前链表的长度
                   */
                  get: function() {
                    return this.data.length;
                  },
                  enumerable: !1,
                  configurable: !0
                }), v.prototype.insertLast = function(A) {
                  if (this.isRe) {
                    var c;
                    (0, r.default)(c = this.data).call(c, this.point + 1), this.isRe = !1;
                  }
                  for (this.data.push(A); this.max && this.size > this.max; )
                    this.data.shift();
                  return this.point = this.size - 1, this;
                }, v.prototype.current = function() {
                  return this.data[this.point];
                }, v.prototype.prev = function() {
                  if (!this.isRe && (this.isRe = !0), this.point--, this.point < 0) {
                    this.point = 0;
                    return;
                  }
                  return this.current();
                }, v.prototype.next = function() {
                  if (!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size) {
                    this.point = this.size - 1;
                    return;
                  }
                  return this.current();
                }, v;
              })()
            );
            n.TailChain = o;
          }),
          /* 435 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(99)), v = (
              /** @class */
              (function(A) {
                r.__extends(c, A);
                function c(g) {
                  var s = A.call(this, g.config.historyMaxSize) || this;
                  return s.editor = g, s.last = 0, s.target = g.$textElem.elems[0], s;
                }
                return c.prototype.observe = function() {
                  var g = this;
                  this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
                    g.last = g.target.scrollTop;
                  }), this.resetMaxSize(this.editor.config.historyMaxSize);
                }, c.prototype.save = function() {
                  return A.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
                }, c.prototype.revoke = function() {
                  var g = this;
                  return A.prototype.revoke.call(this, function(s) {
                    g.target.scrollTop = s[0];
                  });
                }, c.prototype.restore = function() {
                  var g = this;
                  return A.prototype.restore.call(this, function(s) {
                    g.target.scrollTop = s[1];
                  });
                }, c;
              })(o.default)
            );
            n.default = v;
          }),
          /* 436 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = t(2), o = r.__importDefault(t(99)), v = r.__importDefault(t(3)), A = t(6);
            function c(s) {
              return {
                start: [s.startContainer, s.startOffset],
                end: [s.endContainer, s.endOffset],
                root: s.commonAncestorContainer,
                collapsed: s.collapsed
              };
            }
            var g = (
              /** @class */
              (function(s) {
                r.__extends(i, s);
                function i(u) {
                  var l = s.call(this, u.config.historyMaxSize) || this;
                  return l.editor = u, l.lastRange = c(document.createRange()), l.root = u.$textElem.elems[0], l.updateLastRange = A.debounce(function() {
                    l.lastRange = c(l.rangeHandle);
                  }, u.config.onchangeTimeout), l;
                }
                return (0, a.default)(i.prototype, "rangeHandle", {
                  /**
                   * 获取 Range 对象
                   */
                  get: function() {
                    var l = document.getSelection();
                    return l && l.rangeCount ? l.getRangeAt(0) : document.createRange();
                  },
                  enumerable: !1,
                  configurable: !0
                }), i.prototype.observe = function() {
                  var u = this;
                  this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize);
                  function l() {
                    var d = u.rangeHandle;
                    (u.root === d.commonAncestorContainer || u.root.contains(d.commonAncestorContainer)) && (u.editor.isComposing || u.updateLastRange());
                  }
                  function p(d) {
                    (d.key == "Backspace" || d.key == "Delete") && u.updateLastRange();
                  }
                  v.default(document).on("selectionchange", l), this.editor.beforeDestroy(function() {
                    v.default(document).off("selectionchange", l);
                  }), u.editor.$textElem.on("keydown", p);
                }, i.prototype.save = function() {
                  var u = c(this.rangeHandle);
                  return s.prototype.save.call(this, [this.lastRange, u]), this.lastRange = u, this;
                }, i.prototype.set = function(u) {
                  try {
                    if (u) {
                      var l = this.rangeHandle;
                      return l.setStart.apply(l, u.start), l.setEnd.apply(l, u.end), this.editor.menus.changeActive(), !0;
                    }
                  } catch {
                    return !1;
                  }
                  return !1;
                }, i.prototype.revoke = function() {
                  var u = this;
                  return s.prototype.revoke.call(this, function(l) {
                    u.set(l[0]);
                  });
                }, i.prototype.restore = function() {
                  var u = this;
                  return s.prototype.restore.call(this, function(l) {
                    u.set(l[1]);
                  });
                }, i;
              })(o.default)
            );
            n.default = g;
          }),
          /* 437 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(29));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var o = t(2), v = o.__importDefault(t(3));
            t(438);
            function A(c) {
              var g = !1, s, i;
              c.txt.eventHooks.changeEvents.push(function() {
                g && (0, r.default)(s).call(s, ".w-e-content-preview").html(c.$textElem.html());
              });
              function u() {
                if (!g) {
                  c.$textElem.hide();
                  var p = c.zIndex.get("textContainer"), d = c.txt.html();
                  s = v.default('<div class="w-e-content-mantle" style="z-index:' + p + `">
                <div class="w-e-content-preview w-e-text">` + d + `</div>
            </div>`), c.$textContainerElem.append(s);
                  var h = c.zIndex.get("menu");
                  i = v.default('<div class="w-e-menue-mantle" style="z-index:' + h + '"></div>'), c.$toolbarElem.append(i), g = !0, c.isEnable = !1;
                }
              }
              function l() {
                g && (s.remove(), i.remove(), c.$textElem.show(), g = !1, c.isEnable = !0);
              }
              return {
                disable: u,
                enable: l
              };
            }
            n.default = A;
          }),
          /* 438 */
          /***/
          (function(f, n, t) {
            var e = t(20), a = t(439);
            a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
            var r = {};
            r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
          }),
          /* 439 */
          /***/
          (function(f, n, t) {
            var e = t(21);
            n = e(!1), n.push([f.i, `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`, ""]), f.exports = n;
          }),
          /* 440 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
            var r = (
              /** @class */
              (function() {
                function o(v) {
                  var A = this;
                  this.editor = v;
                  var c = function() {
                    var s = document.activeElement;
                    s === v.$textElem.elems[0] && A.emit();
                  };
                  window.document.addEventListener("selectionchange", c), this.editor.beforeDestroy(function() {
                    window.document.removeEventListener("selectionchange", c);
                  });
                }
                return o.prototype.emit = function() {
                  var v, A = this.editor.config.onSelectionChange;
                  if (A) {
                    var c = this.editor.selection;
                    c.saveRange(), c.isSelectionEmpty() || A({
                      // 当前文本
                      text: c.getSelectionText(),
                      // 当前的html
                      html: (v = c.getSelectionContainerElem()) === null || v === void 0 ? void 0 : v.elems[0].innerHTML,
                      // select对象
                      selection: c
                    });
                  }
                }, o;
              })()
            );
            n.default = r;
          }),
          /* 441 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1)), r = e(t(128)), o = e(t(94)), v = e(t(4));
            (0, a.default)(n, "__esModule", {
              value: !0
            }), n.registerPlugin = void 0;
            var A = t(2), c = A.__importDefault(t(87)), g = t(6);
            function s(u, l, p) {
              if (!u)
                throw new TypeError("name is not define");
              if (!l)
                throw new TypeError("options is not define");
              if (!l.intention)
                throw new TypeError("options.intention is not define");
              if (l.intention && typeof l.intention != "function")
                throw new TypeError("options.intention is not function");
              p[u] && console.warn("plugin " + u + " 已存在，已覆盖。"), p[u] = l;
            }
            n.registerPlugin = s;
            function i(u) {
              var l = (0, r.default)({}, g.deepClone(c.default.globalPluginsFunctionList), g.deepClone(u.pluginsFunctionList)), p = (0, o.default)(l);
              (0, v.default)(p).call(p, function(d) {
                var h = d[0], m = d[1];
                console.info("plugin " + h + " initializing");
                var y = m.intention, x = m.config;
                y(u, x), console.info("plugin " + h + " initialization complete");
              });
            }
            n.default = i;
          }),
          /* 442 */
          /***/
          (function(f, n, t) {
            var e = t(0), a = e(t(1));
            (0, a.default)(n, "__esModule", {
              value: !0
            });
          })
          /******/
        ]).default
      );
    });
  })(bt)), bt.exports;
}
var qt = kt();
const _t = /* @__PURE__ */ Zt(qt), te = { class: "" }, ee = ["id"], ne = /* @__PURE__ */ Gt({
  __name: "index",
  props: {
    options: {
      type: Array,
      required: !0
    },
    labelWidth: {
      type: String,
      default: "120px"
    }
  },
  setup(ot, { expose: Yt }) {
    const f = ot, n = Bt(null), t = Kt({}), e = Bt({}), a = Bt({}), r = Bt(null), o = Bt(), v = () => {
      const u = {}, l = {};
      f.options.forEach((p) => {
        u[p.prop] = p.value, l[p.prop] = p.rules ?? [], p.type === "editor" && Dt(() => {
          const d = `editor-${p.prop}`;
          if (!document.getElementById(d))
            return;
          o.value && o.value[p.prop] && (o.value[p.prop].destroy(), delete o.value[p.prop]);
          const m = new _t(`#${d}`);
          m.config.placeholder = p.placeholder, m.create(), m.txt.html(p.value), m.config.onchange = (y) => {
            e.value[p.prop] = y;
          }, o.value || (o.value = {}), o.value[p.prop] = m, r.value = m;
        });
      }), e.value = u, a.value = l;
    }, A = async () => {
      await Dt(), n.value && n.value.clearValidate();
    }, c = () => {
      console.log("重置表单"), n.value.resetFields(), f.options && f.options.length > 0 && f.options.forEach((u) => {
        if (u.type === "editor" && r.value.txt.html(u.value), u.type === "upload")
          for (const l in t) {
            if (!t.hasOwnProperty(l)) continue;
            t[l].clearFiles();
          }
      }), v();
    }, g = () => e.value;
    Jt(async () => {
      f.options && f.options.length > 0 && (v(), await Dt(), await A());
    }), Wt(
      () => f.options,
      () => {
        v(), Dt(() => A());
      },
      { deep: !0, immediate: !0 }
      // 立即执行，确保初始值生效
    );
    const s = (u, l, p, d) => {
      const h = f.options.find((m) => m.prop === u.prop);
      h && (e.value[h.prop] = { response: l, file: p, fileList: d }), u.uploadFuns.onSuccess(l, p, d), Dt(() => {
        n.value?.validateField(u.prop);
      });
    }, i = (u, l, p, d) => {
      const h = f.options.find((m) => m.prop === u.prop);
      h && (e.value[h.prop] = d?.length > 0 ? { response: l, file: p, fileList: d } : void 0), u.uploadFuns.onRemove(l, p, d), Dt(() => {
        n.value?.validateField(u.prop);
      });
    };
    return Yt({
      validate: () => n.value?.validate(),
      // 若父组件调用resetFields，会清空值，需提示
      resetFields: () => c(),
      clearValidate: () => n.value?.clearValidate(),
      getFormData: () => g()
    }), (u, l) => {
      const p = Qt("el-upload"), d = Qt("el-form-item"), h = Qt("el-form");
      return rt(), mt("div", te, [
        wt(h, Ot({
          "label-width": ot.labelWidth,
          ref_key: "formRef",
          ref: n,
          class: "ti-form"
        }, u.$attrs, {
          model: e.value,
          "validate-on-rule-change": !1,
          "validate-on-initial": !1,
          "hide-required-asterisk": !1,
          rules: a.value
        }), {
          default: Tt(() => [
            (rt(!0), mt(
              Ft,
              null,
              $t(ot.options, (m, y) => (rt(), mt(
                Ft,
                null,
                [
                  Rt(" 无子组件的表单项 "),
                  !m.children || !m.children.length ? (rt(), Pt(d, {
                    key: 0,
                    prop: m.prop,
                    rules: m.rules,
                    label: m.label,
                    "validate-status": ""
                  }, {
                    default: Tt(() => [
                      m.type !== "upload" && m.type !== "editor" ? (rt(), Pt(Ut(`el-${m.type}`), Ot({
                        key: 0,
                        ref_for: !0
                      }, m.attrs, {
                        modelValue: e.value[m.prop],
                        "onUpdate:modelValue": (x) => e.value[m.prop] = x,
                        placeholder: m.placeholder
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder"])) : Rt("v-if", !0),
                      m.type === "upload" ? (rt(), Pt(p, Ot({
                        key: 1,
                        ref_for: !0
                      }, m.uploadAttrs, {
                        ref_for: !0,
                        ref: (x) => x ? t[m.prop] = x : null,
                        "on-preview": m.uploadFuns?.onPreview,
                        "on-remove": (x, S, T) => i(m, x, S, T),
                        "on-success": (x, S, T) => s(m, x, S, T),
                        "on-error": m.uploadFuns?.onError,
                        "on-progress": m.uploadFuns?.onProgress,
                        "on-change": m.uploadFuns?.onChange,
                        "on-exceed": m.uploadFuns?.onExceed,
                        "before-remove": m.uploadFuns?.onBeforeRemove,
                        "before-upload": m.uploadFuns?.onBeforeUpload,
                        "http-request": m.uploadFuns?.httpRequest
                      }), {
                        default: Tt(() => [
                          m.slots && m.slots.length > 0 ? (rt(!0), mt(
                            Ft,
                            { key: 0 },
                            $t(m.slots, (x) => (rt(), mt("span", null, [
                              (rt(), Pt(Ut(x.render)))
                            ]))),
                            256
                            /* UNKEYED_FRAGMENT */
                          )) : Rt("v-if", !0)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1040, ["on-preview", "on-remove", "on-success", "on-error", "on-progress", "on-change", "on-exceed", "before-remove", "before-upload", "http-request"])) : Rt("v-if", !0),
                      m.type === "editor" ? (rt(), mt("div", {
                        key: 2,
                        id: "editor-" + m.prop
                      }, null, 8, ee)) : Rt("v-if", !0)
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["prop", "rules", "label"])) : (rt(), mt(
                    Ft,
                    { key: 1 },
                    [
                      Rt(" 有子组件的表单项（如select） "),
                      wt(d, {
                        prop: m.prop,
                        rules: m.rules,
                        label: m.label,
                        "validate-status": ""
                      }, {
                        default: Tt(() => [
                          (rt(), Pt(Ut(`el-${m.type}`), Ot({ ref_for: !0 }, m.attrs, {
                            modelValue: e.value[m.prop],
                            "onUpdate:modelValue": (x) => e.value[m.prop] = x,
                            placeholder: m.placeholder,
                            multiple: !0
                          }), {
                            default: Tt(() => [
                              (rt(!0), mt(
                                Ft,
                                null,
                                $t(m.children, (x, S) => (rt(), Pt(Ut(`el-${x.type}`), {
                                  key: `${y}_${S}`,
                                  label: x.label,
                                  value: x.value
                                }, null, 8, ["label", "value"]))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["prop", "rules", "label"])
                    ],
                    2112
                    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                  ))
                ],
                64
                /* STABLE_FRAGMENT */
              ))),
              256
              /* UNKEYED_FRAGMENT */
            )),
            wt(d, null, {
              default: Tt(() => [
                Xt(u.$slots, "footer", {
                  form: n.value,
                  model: e.value
                })
              ]),
              _: 3
              /* FORWARDED */
            })
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["label-width", "model", "rules"])
      ]);
    };
  }
}), oe = {
  install(ot) {
    ot.component("ti-form", ne);
  }
};
export {
  oe as default
};
