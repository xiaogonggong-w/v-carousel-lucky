import { defineComponent as V, inject as B, reactive as H, watch as z, unref as l, openBlock as C, createElementBlock as b, Fragment as re, renderList as ae, normalizeStyle as P, normalizeClass as K, createCommentVNode as se, ref as m, useSlots as ce, toRefs as Q, provide as X, onMounted as Z, nextTick as le, onBeforeUnmount as ie, renderSlot as ee, createElementVNode as w, withDirectives as A, createVNode as R, Transition as Y, withCtx as q, vShow as O, pushScopeId as ue, popScopeId as de, computed as G } from "vue";
let h, J;
function fe(r, i, o) {
  return function() {
    let a = this, p = arguments;
    if (h && clearTimeout(h), o) {
      let d = !h;
      h = setTimeout(function() {
        h = null;
      }, i), d && (J = r.apply(a, p));
    } else
      h = setTimeout(function() {
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
  emits: ["DictatorClick", "before-moving", "after-moving"],
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
        d > a.globalIndex ? f = "next" : f = "prev", i("before-moving", { index: a.globalIndex, direction: f }), i("DictatorClick", d), i("after-moving", { index: d, direction: f });
      }
    };
    return (d, f) => l(a).indicator ? (C(), b("div", _e, [
      (C(!0), b(re, null, ae(l(a).len, (_) => (C(), b("span", {
        key: _,
        style: P({
          width: l(a).globalIndex === _ - 1 ? "20px" : ""
        }),
        onClick: (I) => p(_ - 1),
        class: K(l(a).globalIndex === _ - 1 ? "active" : "normal")
      }, null, 14, pe))), 128))
    ])) : se("", !0);
  }
}), me = /* @__PURE__ */ W(Ie, [["__scopeId", "data-v-c2c4caa3"]]), ye = {
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
const te = (r) => (ue("data-v-097fc2bf"), r = r(), de(), r), he = { class: "direction-container" }, xe = /* @__PURE__ */ te(() => /* @__PURE__ */ w("i", { class: "iconfont icon-anniu_jiantouxiangzuo_o" }, null, -1)), ge = [
  xe
], Ce = /* @__PURE__ */ te(() => /* @__PURE__ */ w("i", { class: "iconfont icon-anniu-jiantouxiangyou_o" }, null, -1)), be = [
  Ce
], we = V({
  name: "Carousel"
}), Se = /* @__PURE__ */ Object.assign(we, {
  props: ye,
  emits: ["before-moving", "after-moving"],
  setup(r, { emit: i }) {
    const o = r, u = m(null), a = ce(), {
      containerWidth: p,
      containerHeight: d,
      duration: f,
      directionMode: _,
      indicatorMode: I
    } = Q(o), t = H({
      CAROUSEL_ITEM_LEN: a.default()[0].children.length,
      propsStaging: o,
      currentIndex: o.initIndex,
      showDirection: !0,
      showIndicator: !0,
      loop: o.loop,
      type: o.type,
      delay: o.duration > o.delay ? o.delay / 1e3 : 0.3
    }), y = m([]);
    let x = null;
    const S = o.direction;
    z(() => t.currentIndex, (s, L) => {
      $(L);
    });
    const E = () => {
      x = setInterval(() => {
        n("next");
      }, f.value);
    }, T = (s) => {
      y.value.push(s);
    }, k = (s) => {
      i("before-moving", s);
    }, M = (s) => {
      i("after-moving", s);
    }, e = (s) => {
      switch (k({ index: t.currentIndex, direction: s }), s) {
        case "prev":
          (t.currentIndex > 0 || o.loop) && (t.currentIndex -= 1), t.currentIndex <= -1 && (t.currentIndex = t.CAROUSEL_ITEM_LEN - 1);
          break;
        case "next":
          (t.currentIndex < t.CAROUSEL_ITEM_LEN - 1 || o.loop) && (t.currentIndex += 1), t.currentIndex >= t.CAROUSEL_ITEM_LEN && (t.currentIndex = 0);
          break;
      }
      M({ index: t.currentIndex, direction: s });
    }, n = (s) => fe(() => e(s), o.delay, !0), c = (s) => {
      t.currentIndex = s, $();
    }, v = () => {
      F(), _.value === "hover" && (t.showDirection = !0), I.value === "hover" && (t.showIndicator = !0);
    }, g = () => {
      E(), _.value === "hover" && (t.showDirection = !1), I.value === "hover" && (t.showIndicator = !1);
    }, N = () => {
      n("prev");
    }, D = () => {
      n("next");
    };
    function F() {
      clearInterval(x), x = null;
    }
    const $ = (s) => {
      y.value.forEach((L, oe) => {
        L.setItemStyle(oe, t.currentIndex, s);
      });
    };
    return X("carouselCtxState", t), X("instance", {
      items: y,
      addItems: T,
      carouselRoot: u
    }), Z(async () => {
      await le(), $(), o.autoplay && E(), _.value === "hover" && (t.showDirection = !1), I.value === "hover" && (t.showIndicator = !1);
    }), ie(() => {
      F();
    }), (s, L) => (C(), b("div", {
      class: "Carousel",
      ref_key: "carouselRoot",
      ref: u,
      onMouseenter: v,
      onMouseleave: g,
      style: P({ width: l(p), height: l(d) })
    }, [
      ee(s.$slots, "default", {}, void 0, !0),
      w("div", he, [
        A(R(Y, { name: "left-arrow" }, {
          default: q(() => [
            w("div", {
              class: "prev",
              onClick: N
            }, ge)
          ]),
          _: 1
        }, 512), [
          [O, l(S) && l(t).showDirection]
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
          [O, l(S) && l(t).showDirection]
        ])
      ]),
      A(R(me, {
        onBeforeMoving: k,
        onAfterMoving: M,
        onDictatorClick: c
      }, null, 512), [
        [O, l(t).showIndicator]
      ])
    ], 36));
  }
}), j = /* @__PURE__ */ W(Se, [["__scopeId", "data-v-097fc2bf"]]);
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
    Q(r);
    const o = H({
      globalIndex: 0
    }), u = 0.8;
    let a = m(1), p = m(0), d = m("X");
    const f = B("carouselCtxState");
    let _ = m(!1), I = m(!1);
    const t = B("instance");
    z(
      () => f.currentIndex,
      (e) => {
        o.globalIndex = e;
      }
    );
    const y = (e, n) => n ? e : "", x = G(() => {
      const e = `translate${d.value === "Y" ? "Y" : "X"}`, n = `scale(${a.value})`;
      return {
        transform: [`${e}(${p.value}px)`, n].join(" ")
      };
    }), S = G(() => {
      var e;
      return ((e = t.carouselRoot.value) == null ? void 0 : e.offsetWidth) || 0;
    }), E = (e, n, c) => {
      const v = c - 1, g = n - 1, N = n + 1, D = c / 2;
      return n === 0 && e === v ? -1 : n === v && e === 0 ? c : e < g && n - e >= D ? c + 1 : e > N && e - n >= D ? -2 : e;
    }, T = (e, n) => {
      const c = t.carouselRoot.value;
      return c ? c.offsetWidth * (e - n) : 0;
    }, k = (e, n, c) => I.value ? c * ((2 - u) * (e - n) + 1) / 4 : e < n ? -(1 + u) * c / 4 : (3 + u) * c / 4, M = (e, n, c) => {
      const v = t.items.value.length || 0, g = _.value = e === n;
      !_.value && v > 2 && f.loop && (e = E(e, n, v)), f.type === "card" ? (I.value = Math.round(Math.abs(e - n)) <= 1, p.value = k(e, n, S.value), a.value = g ? 1 : u) : p.value = T(e, n);
    };
    return Z(() => {
      t.addItems({
        setItemStyle: M
      });
    }), (e, n) => (C(), b("div", {
      class: K(["CarouselItem", [y("is-active", l(_)), y("is-card", l(f).type === "card")]]),
      style: P([l(x), { "--delay": l(f).delay + "s" }])
    }, [
      ee(e.$slots, "default", {}, void 0, !0)
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
], ne = (r) => {
  Me.forEach((i) => {
    r.use(i);
  });
};
typeof window < "u" && window.Vue && ne(window.Vue);
const Le = {
  install: ne
};
export {
  j as Carousel,
  U as CarouselItem,
  Le as default
};
