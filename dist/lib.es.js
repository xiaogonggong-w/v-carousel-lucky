import { defineComponent as z, inject as j, reactive as F, watch as H, unref as c, openBlock as w, createElementBlock as S, normalizeClass as U, Fragment as ie, renderList as ue, normalizeStyle as N, createCommentVNode as de, ref as y, useSlots as fe, toRefs as _e, provide as q, onMounted as Z, nextTick as pe, onBeforeUnmount as ve, createElementVNode as x, renderSlot as ee, createVNode as P, Transition as G, withCtx as J, withDirectives as M, vShow as L, pushScopeId as he, popScopeId as ye, computed as K } from "vue";
let m, Q;
function ge(r, u, n) {
  return function() {
    let s = this, a = arguments;
    if (m && clearTimeout(m), n) {
      let v = !m;
      m = setTimeout(function() {
        m = null;
      }, u), v && (Q = r.apply(s, a));
    } else
      m = setTimeout(function() {
        r.apply(s, a);
      }, u);
    return Q;
  }();
}
const X = (r, u) => {
  const n = r.__vccOpts || r;
  for (const [d, s] of u)
    n[d] = s;
  return n;
}, Ie = ["onClick", "onMouseenter"], me = z({
  name: "indicator"
}), xe = /* @__PURE__ */ Object.assign(me, {
  emits: ["indicatorClick", "before-move", "change-move"],
  setup(r, { emit: u }) {
    const n = j("carouselCtxState"), d = n.propsStaging, s = F({
      len: n.CAROUSEL_ITEM_LEN,
      globalIndex: 0,
      indicator: d.indicator,
      indicatorColor: d.indicatorColor,
      indicatorActiveColor: d.indicatorActiveColor,
      indicatorPosition: d.indicatorPosition,
      indicatorTrigger: n.indicatorTrigger
    });
    H(
      () => n.currentIndex,
      (f) => {
        s.globalIndex = f;
      }
    );
    const a = (f) => {
      if (f !== s.globalIndex) {
        let p = "next";
        f > s.globalIndex ? p = "next" : p = "prev", u("before-move", { index: s.globalIndex, direction: p }), u("indicatorClick", f), u("change-move", { index: f, direction: p });
      }
    }, v = (f) => {
      s.indicatorTrigger === "hover" && a(f);
    };
    return (f, p) => c(s).indicator ? (w(), S("div", {
      key: 0,
      class: U(["indicator", c(s).indicatorPosition === "inside" ? "absolute" : "static"])
    }, [
      (w(!0), S(ie, null, ue(c(s).len, (_) => (w(), S("span", {
        key: _,
        style: N({
          width: c(s).globalIndex === _ - 1 ? "20px" : ""
        }),
        onClick: (g) => a(_ - 1),
        onMouseenter: (g) => v(_ - 1),
        class: U(c(s).globalIndex === _ - 1 ? "active" : "normal")
      }, null, 46, Ie))), 128))
    ], 2)) : de("", !0);
  }
}), Ce = /* @__PURE__ */ X(xe, [["__scopeId", "data-v-2625b473"]]), b = 0.8, be = {
  width: {
    type: String,
    default: "400px"
  },
  height: {
    type: String,
    default: "300px"
  },
  duration: {
    type: Number,
    default: 3e3
  },
  initIndex: {
    type: Number,
    default: 0
  },
  autoplay: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: Boolean,
    default: !0
  },
  directionMode: {
    type: String,
    default: "always"
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorMode: {
    type: String,
    default: "always"
  },
  indicatorPosition: {
    type: String,
    default: "inside"
  },
  indicatorTrigger: {
    type: String,
    default: "hover"
  },
  type: {
    type: String,
    validator: (r) => ["", "card"].includes(r),
    default: ""
  },
  loop: {
    type: Boolean,
    default: !0
  },
  delay: {
    type: Number,
    default: 300
  },
  scale: {
    type: Number,
    default: b
  },
  cardWidth: {
    type: String,
    default: "50%"
  }
};
const te = (r) => (he("data-v-d4698b8c"), r = r(), ye(), r), we = { class: "direction-container" }, Se = /* @__PURE__ */ te(() => /* @__PURE__ */ x("i", { class: "iconfont icon-anniu_jiantouxiangzuo_o" }, null, -1)), Ee = [
  Se
], ke = /* @__PURE__ */ te(() => /* @__PURE__ */ x("i", { class: "iconfont icon-anniu-jiantouxiangyou_o" }, null, -1)), Te = [
  ke
], Me = z({
  name: "Carousel"
}), Le = /* @__PURE__ */ Object.assign(Me, {
  props: be,
  emits: ["before-move", "change-move"],
  setup(r, { emit: u }) {
    const n = r, d = y(null), s = fe(), {
      width: a,
      height: v,
      duration: f,
      directionMode: p,
      indicatorMode: _,
      indicatorPosition: g,
      indicatorTrigger: $,
      scale: R,
      cardWidth: A,
      type: D
    } = _e(n), t = F({
      CAROUSEL_ITEM_LEN: s.default()[0].children.length,
      propsStaging: n,
      currentIndex: n.initIndex,
      showDirection: !0,
      showIndicator: !0,
      loop: n.loop,
      type: n.type,
      delay: n.duration > n.delay ? n.delay / 1e3 : 0.3,
      indicatorPosition: g,
      indicatorTrigger: $,
      scale: R,
      type: D,
      cardWidth: A
    }), C = y([]);
    let e = null;
    const o = n.direction;
    H(() => t.currentIndex, (l, T) => {
      B(T);
    });
    const i = () => {
      e = setInterval(() => {
        O("next");
      }, f.value);
    }, h = (l) => {
      C.value.push(l);
    }, I = (l) => {
      u("before-move", l);
    }, E = (l) => {
      u("change-move", l);
    }, k = (l) => {
      switch (I({ index: t.currentIndex, direction: l }), l) {
        case "prev":
          (t.currentIndex > 0 || n.loop) && (t.currentIndex -= 1), t.currentIndex <= -1 && (t.currentIndex = t.CAROUSEL_ITEM_LEN - 1);
          break;
        case "next":
          (t.currentIndex < t.CAROUSEL_ITEM_LEN - 1 || n.loop) && (t.currentIndex += 1), t.currentIndex >= t.CAROUSEL_ITEM_LEN && (t.currentIndex = 0);
          break;
      }
      E({ index: t.currentIndex, direction: l });
    }, O = (l) => ge(() => k(l), n.delay, !0), ne = (l) => {
      t.currentIndex = l, B();
    }, re = () => {
      Y(), p.value === "hover" && (t.showDirection = !0), _.value === "hover" && (t.showIndicator = !0);
    }, ae = () => {
      console.log(), p.value === "hover" && (t.showDirection = !1), _.value === "hover" && (t.showIndicator = !1);
    }, se = () => {
      O("prev");
    }, ce = () => {
      O("next");
    };
    function Y() {
      clearInterval(e), e = null;
    }
    const B = (l) => {
      C.value.forEach((T, le) => {
        T.setItemStyle(le, t.currentIndex, l);
      });
    };
    return q("carouselCtxState", t), q("instance", {
      items: C,
      addItems: h,
      carouselRoot: d
    }), Z(async () => {
      await pe(), B(), n.autoplay && i(), p.value === "hover" && (t.showDirection = !1), _.value === "hover" && (t.showIndicator = !1);
    }), ve(() => {
      Y();
    }), (l, T) => (w(), S("div", {
      class: "Carousel",
      ref_key: "carouselRoot",
      ref: d,
      onMouseenter: re,
      onMouseleave: ae,
      style: N({ width: c(a) })
    }, [
      x("div", {
        class: "carousel-container",
        style: N({ height: c(v) })
      }, [
        ee(l.$slots, "default", {}, void 0, !0)
      ], 4),
      x("div", we, [
        P(G, { name: "left-arrow" }, {
          default: J(() => [
            M(x("div", {
              class: "prev",
              onClick: se
            }, Ee, 512), [
              [L, c(o) && c(t).showDirection]
            ])
          ]),
          _: 1
        }),
        P(G, { name: "right-arrow" }, {
          default: J(() => [
            M(x("div", {
              class: "next",
              onClick: ce
            }, Te, 512), [
              [L, c(o) && c(t).showDirection]
            ])
          ]),
          _: 1
        })
      ]),
      M(P(Ce, {
        onBeforeMove: I,
        onChangeMove: E,
        onIndicatorClick: ne
      }, null, 512), [
        [L, c(t).showIndicator]
      ])
    ], 36));
  }
}), W = /* @__PURE__ */ X(Le, [["__scopeId", "data-v-d4698b8c"]]);
const Ne = z({
  name: "CarouselItem"
}), $e = /* @__PURE__ */ Object.assign(Ne, {
  setup(r) {
    const u = F({
      globalIndex: 0
    });
    let n = y(1), d = y(0), s = y("X");
    const a = j("carouselCtxState");
    let v = y(!1), f = y(!1), p = y(!1);
    const _ = j("instance");
    H(
      () => a.currentIndex,
      (e) => {
        u.globalIndex = e;
      }
    );
    const g = (e, o) => o ? e : "", $ = K(() => {
      const e = `translate${s.value === "Y" ? "Y" : "X"}`, o = `scale(${n.value})`;
      return {
        transform: [`${e}(${d.value}px)`, o].join(" ")
      };
    }), R = K(() => {
      var e;
      return ((e = _.carouselRoot.value) == null ? void 0 : e.offsetWidth) || 0;
    }), A = (e, o, i) => {
      const h = i - 1, I = o - 1, E = o + 1, k = i / 2;
      return o === 0 && e === h ? -1 : o === h && e === 0 ? i : e < I && o - e >= k ? i + 1 : e > E && e - o >= k ? -2 : e;
    }, D = (e, o) => {
      const i = _.carouselRoot.value;
      return i ? i.offsetWidth * (e - o) : 0;
    }, t = (e, o, i) => f.value ? e === o && a.type === "card" && a.cardWidth && a.cardWidth !== "50%" ? (i - parseInt(a.cardWidth.replace("px", ""))) / 2 : i * ((2 - b) * (e - o) + 1) / 4 : e < o ? -(1 + b) * i / 4 : (console.log(e, o), (3 + b) * i / 4), C = (e, o, i) => {
      const h = _.items.value.length || 0, I = v.value = e === o;
      !v.value && h > 2 && a.loop && (e = A(e, o, h)), a.type === "card" ? (f.value = Math.round(Math.abs(e - o)) <= 1, d.value = t(e, o, R.value), console.log(d.value), n.value = I ? 1 : a.scale > 1 ? b : a.scale) : d.value = D(e, o), p.value = !0;
    };
    return Z(() => {
      _.addItems({
        setItemStyle: C
      });
    }), (e, o) => M((w(), S("div", {
      class: U(["carousel-item", [g("is-active", c(v)), g("is-stage", c(f)), g("is-card", c(a).type === "card")]]),
      style: N([c($), { "--delay": c(a).delay + "s" }, { "--width": c(a).cardWidth }])
    }, [
      ee(e.$slots, "default", {}, void 0, !0)
    ], 6)), [
      [L, c(p)]
    ]);
  }
}), V = /* @__PURE__ */ X($e, [["__scopeId", "data-v-070eee51"]]);
W.install = (r) => {
  r.component("Carousel", W);
};
V.install = (r) => {
  r.component("CarouselItem", V);
};
const Re = [
  W,
  V
], oe = (r) => {
  Re.forEach((u) => {
    r.use(u);
  });
};
typeof window < "u" && window.Vue && oe(window.Vue);
const De = {
  install: oe
};
export {
  W as Carousel,
  V as CarouselItem,
  De as default
};
