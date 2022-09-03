import { defineComponent as V, inject as B, reactive as H, watch as z, unref as l, openBlock as C, createElementBlock as b, Fragment as oe, renderList as re, normalizeStyle as P, createCommentVNode as ae, ref as y, useSlots as se, toRefs as K, provide as X, onMounted as Q, nextTick as le, onBeforeUnmount as ce, renderSlot as Z, createElementVNode as w, withDirectives as A, createVNode as R, Transition as Y, withCtx as q, vShow as O, pushScopeId as ie, popScopeId as ue, computed as G, normalizeClass as de } from "vue";
let m, J;
function fe(r, i, o) {
  return function() {
    let a = this, p = arguments;
    if (m && clearTimeout(m), o) {
      let d = !m;
      m = setTimeout(function() {
        m = null;
      }, i), d && (J = r.apply(a, p));
    } else
      m = setTimeout(function() {
        r.apply(a, p);
      }, i);
    return J;
  }();
}
const W = (r, i) => {
  const o = r.__vccOpts || r;
  for (const [u, a] of i)
    o[u] = a;
  return o;
}, _e = {
  key: 0,
  class: "indicator"
}, pe = ["onClick"], ve = V({
  name: "indicator"
}), Ie = /* @__PURE__ */ Object.assign(ve, {
  emits: ["DicatorClick", "before-moving", "after-moving"],
  setup(r, { emit: i }) {
    const o = B("carouselCtxState"), u = o.propsStaging, a = H({
      len: o.CAROUSEL_ITEM_LEN,
      globalIndex: 0,
      indicator: u.indicator,
      indicatorColor: u.indicatorColor,
      indicatorActiveColor: u.indicatorActiveColor
    });
    z(
      () => o.currentIndex,
      (d) => {
        a.globalIndex = d;
      }
    );
    const p = (d) => {
      if (d !== a.globalIndex) {
        let f = "next";
        d > a.globalIndex ? f = "next" : f = "prev", i("before-moving", { index: a.globalIndex, direction: f }), i("DicatorClick", d), i("after-moving", { index: d, direction: f });
      }
    };
    return (d, f) => l(a).indicator ? (C(), b("div", _e, [
      (C(!0), b(oe, null, re(l(a).len, (_) => (C(), b("span", {
        key: _,
        style: P({
          backgroundColor: l(a).globalIndex === _ - 1 ? l(a).indicatorActiveColor : l(a).indicatorColor,
          width: l(a).globalIndex === _ - 1 ? "20px" : ""
        }),
        onClick: (I) => p(_ - 1)
      }, null, 12, pe))), 128))
    ])) : ae("", !0);
  }
}), ye = /* @__PURE__ */ W(Ie, [["__scopeId", "data-v-8258f296"]]), he = {
  containerWidth: {
    type: String,
    default: "100%"
  },
  containerHeight: {
    type: String,
    default: "100%"
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
    default: 0.3
  }
};
const ee = (r) => (ie("data-v-4a7355bf"), r = r(), ue(), r), me = { class: "direction-container" }, xe = /* @__PURE__ */ ee(() => /* @__PURE__ */ w("i", { class: "iconfont icon-anniu_jiantouxiangzuo_o" }, null, -1)), ge = [
  xe
], Ce = /* @__PURE__ */ ee(() => /* @__PURE__ */ w("i", { class: "iconfont icon-anniu-jiantouxiangyou_o" }, null, -1)), be = [
  Ce
], we = V({
  name: "Carousel"
}), Se = /* @__PURE__ */ Object.assign(we, {
  props: he,
  emits: ["before-moving", "after-moving"],
  setup(r, { emit: i }) {
    const o = r, u = y(null), a = se(), {
      containerWidth: p,
      containerHeight: d,
      duration: f,
      directionMode: _,
      indicatorMode: I
    } = K(o), e = H({
      CAROUSEL_ITEM_LEN: a.default()[0].children.length,
      propsStaging: o,
      currentIndex: o.initIndex,
      showDirection: !0,
      showIndicator: !0,
      loop: o.loop,
      type: o.type,
      delay: o.duration > o.delay ? o.delay / 1e3 : 0.3
    }), h = y([]);
    let x = null;
    const S = o.direction;
    z(() => e.currentIndex, (s, L) => {
      $(L);
    });
    const E = () => {
      x = setInterval(() => {
        n("next");
      }, f.value);
    }, T = (s) => {
      h.value.push(s);
    }, k = (s) => {
      i("before-moving", s);
    }, M = (s) => {
      i("after-moving", s);
    }, t = (s) => {
      switch (k({ index: e.currentIndex, direction: s }), s) {
        case "prev":
          (e.currentIndex > 0 || o.loop) && (e.currentIndex -= 1), e.currentIndex <= -1 && (e.currentIndex = e.CAROUSEL_ITEM_LEN - 1);
          break;
        case "next":
          (e.currentIndex < e.CAROUSEL_ITEM_LEN - 1 || o.loop) && (e.currentIndex += 1), e.currentIndex >= e.CAROUSEL_ITEM_LEN && (e.currentIndex = 0);
          break;
      }
      M({ index: e.currentIndex, direction: s });
    }, n = (s) => fe(() => t(s), o.delay, !0), c = (s) => {
      s < e.currentIndex && changeLeftTranslate(), e.currentIndex = s, $();
    }, v = () => {
      F(), _.value === "hover" && (e.showDirection = !0), I.value === "hover" && (e.showIndicator = !0);
    }, g = () => {
      E(), _.value === "hover" && (e.showDirection = !1), I.value === "hover" && (e.showIndicator = !1);
    }, N = () => {
      n("prev");
    }, D = () => {
      n("next");
    };
    function F() {
      clearInterval(x), x = null;
    }
    const $ = (s) => {
      h.value.forEach((L, ne) => {
        L.setItemStyle(ne, e.currentIndex, s);
      });
    };
    return X("carouselCtxState", e), X("instance", {
      items: h,
      addItems: T,
      carouselRoot: u
    }), Q(async () => {
      await le(), $(), o.autoplay && E(), _.value === "hover" && (e.showDirection = !1), I.value === "hover" && (e.showIndicator = !1);
    }), ce(() => {
      F();
    }), (s, L) => (C(), b("div", {
      class: "Carousel",
      ref_key: "carouselRoot",
      ref: u,
      onMouseenter: v,
      onMouseleave: g,
      style: P({ width: l(p), height: l(d) })
    }, [
      Z(s.$slots, "default", {}, void 0, !0),
      w("div", me, [
        A(R(Y, { name: "left-arrow" }, {
          default: q(() => [
            w("div", {
              class: "prev",
              onClick: N
            }, ge)
          ]),
          _: 1
        }, 512), [
          [O, l(S) && l(e).showDirection]
        ]),
        A(R(Y, { name: "right-arrow" }, {
          default: q(() => [
            w("div", {
              class: "next",
              onClick: D
            }, be)
          ]),
          _: 1
        }, 512), [
          [O, l(S) && l(e).showDirection]
        ])
      ]),
      A(R(ye, {
        onBeforeMoving: k,
        onAfterMoving: M,
        onDicatorClick: c
      }, null, 512), [
        [O, l(e).showIndicator]
      ])
    ], 36));
  }
}), j = /* @__PURE__ */ W(Se, [["__scopeId", "data-v-4a7355bf"]]);
const Ee = V({
  name: "CarouselItem"
}), ke = /* @__PURE__ */ Object.assign(Ee, {
  props: {
    idx: {
      type: Number,
      default: 0
    }
  },
  setup(r) {
    K(r);
    const o = H({
      globalIndex: 0
    }), u = 0.8;
    let a = y(1), p = y(0), d = y("X");
    const f = B("carouselCtxState");
    let _ = y(!1), I = y(!1);
    const e = B("instance");
    z(
      () => f.currentIndex,
      (t) => {
        o.globalIndex = t;
      }
    );
    const h = (t, n) => n ? t : "", x = G(() => {
      const t = `translate${d.value === "Y" ? "Y" : "X"}`, n = `scale(${a.value})`;
      return {
        transform: [`${t}(${p.value}px)`, n].join(" ")
      };
    }), S = G(() => {
      var t;
      return ((t = e.carouselRoot.value) == null ? void 0 : t.offsetWidth) || 0;
    }), E = (t, n, c) => {
      const v = c - 1, g = n - 1, N = n + 1, D = c / 2;
      return n === 0 && t === v ? -1 : n === v && t === 0 ? c : t < g && n - t >= D ? c + 1 : t > N && t - n >= D ? -2 : t;
    }, T = (t, n) => {
      const c = e.carouselRoot.value;
      return c ? c.offsetWidth * (t - n) : 0;
    }, k = (t, n, c) => I.value ? c * ((2 - u) * (t - n) + 1) / 4 : t < n ? -(1 + u) * c / 4 : (3 + u) * c / 4, M = (t, n, c) => {
      const v = e.items.value.length || 0, g = _.value = t === n;
      !_.value && v > 2 && f.loop && (t = E(t, n, v)), f.type === "card" ? (I.value = Math.round(Math.abs(t - n)) <= 1, p.value = k(t, n, S.value), a.value = g ? 1 : u) : p.value = T(t, n);
    };
    return Q(() => {
      e.addItems({
        setItemStyle: M
      });
    }), (t, n) => (C(), b("div", {
      class: de(["CarouselItem", [h("is-active", l(_)), h("is-card", l(f).type === "card")]]),
      style: P([l(x), { "--delay": l(f).delay + "s" }])
    }, [
      Z(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), U = /* @__PURE__ */ W(ke, [["__scopeId", "data-v-ae21e3ba"]]);
j.install = (r) => {
  r.component("Carousel", j);
};
U.install = (r) => {
  r.component("CarouselItem", U);
};
const Me = [
  j,
  U
], te = (r) => {
  Me.forEach((i) => {
    r.use(i);
  });
};
typeof window < "u" && window.Vue && te(window.Vue);
const Le = {
  install: te
};
export {
  j as Carousel,
  U as CarouselItem,
  Le as default
};
