class R {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, S.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_jxlimage_free(e, 0);
  }
  feedBytes(e) {
    const n = M(e, r.__wbindgen_malloc), i = f, _ = r.jxlimage_feedBytes(this.__wbg_ptr, n, i);
    if (_[2]) throw m(_[1]);
    return _[0] >>> 0;
  }
  get forceSrgb() {
    return r.jxlimage_force_srgb(this.__wbg_ptr) !== 0;
  }
  get height() {
    const e = r.jxlimage_height(this.__wbg_ptr);
    return e === Number.MAX_SAFE_INTEGER ? void 0 : e;
  }
  get animated() {
    const e = r.jxlimage_is_animation(this.__wbg_ptr);
    return e === 16777215 ? void 0 : e !== 0;
  }
  get loaded() {
    return r.jxlimage_is_loading_done(this.__wbg_ptr) !== 0;
  }
  constructor() {
    const e = r.jxlimage_new();
    return this.__wbg_ptr = e, S.register(this, this.__wbg_ptr, this), this;
  }
  get numLoadedKeyframes() {
    return r.jxlimage_num_loaded_keyframes(this.__wbg_ptr) >>> 0;
  }
  get numLoops() {
    const e = r.jxlimage_num_loops(this.__wbg_ptr);
    return e === Number.MAX_SAFE_INTEGER ? void 0 : e;
  }
  render(e) {
    const n = r.jxlimage_render(this.__wbg_ptr, l(e) ? Number.MAX_SAFE_INTEGER : e >>> 0);
    if (n[2]) throw m(n[1]);
    return p.__wrap(n[0]);
  }
  get renderingRegion() {
    const e = r.jxlimage_rendering_region(this.__wbg_ptr);
    return e === 0 ? void 0 : h.__wrap(e);
  }
  set forceSrgb(e) {
    r.jxlimage_set_force_srgb(this.__wbg_ptr, e);
  }
  set renderingRegion(e) {
    r.jxlimage_set_rendering_region(this.__wbg_ptr, e);
  }
  tryInit() {
    const e = r.jxlimage_tryInit(this.__wbg_ptr);
    if (e[2]) throw m(e[1]);
    return e[0] !== 0;
  }
  get width() {
    const e = r.jxlimage_width(this.__wbg_ptr);
    return e === Number.MAX_SAFE_INTEGER ? void 0 : e;
  }
}
Symbol.dispose && (R.prototype[Symbol.dispose] = R.prototype.free);
class p {
  static __wrap(e) {
    const n = Object.create(p.prototype);
    return n.__wbg_ptr = e, F.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, F.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_renderresult_free(e, 0);
  }
  encodeToPng() {
    const e = this.__destroy_into_raw(), n = r.renderresult_encodeToPng(e);
    if (n[3]) throw m(n[2]);
    var i = T(n[0], n[1]).slice();
    return r.__wbindgen_free(n[0], n[1] * 1, 1), i;
  }
  get duration() {
    return r.renderresult_frame_duration(this.__wbg_ptr);
  }
  get durationDenominator() {
    return r.renderresult_frame_duration_denom(this.__wbg_ptr) >>> 0;
  }
  get durationNumerator() {
    return r.renderresult_frame_duration_numer(this.__wbg_ptr) >>> 0;
  }
  get iccProfile() {
    const e = r.renderresult_icc_profile(this.__wbg_ptr);
    var n = T(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 1, 1), n;
  }
}
Symbol.dispose && (p.prototype[Symbol.dispose] = p.prototype.free);
class h {
  static __wrap(e) {
    const n = Object.create(h.prototype);
    return n.__wbg_ptr = e, E.register(n, n.__wbg_ptr, n), n;
  }
  toJSON() {
    return { height: this.height, left: this.left, top: this.top, width: this.width };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, E.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_renderingregion_free(e, 0);
  }
  get height() {
    return r.__wbg_get_renderingregion_height(this.__wbg_ptr) >>> 0;
  }
  get left() {
    return r.__wbg_get_renderingregion_left(this.__wbg_ptr) >>> 0;
  }
  get top() {
    return r.__wbg_get_renderingregion_top(this.__wbg_ptr) >>> 0;
  }
  get width() {
    return r.__wbg_get_renderingregion_width(this.__wbg_ptr) >>> 0;
  }
  set height(e) {
    r.__wbg_set_renderingregion_height(this.__wbg_ptr, e);
  }
  set left(e) {
    r.__wbg_set_renderingregion_left(this.__wbg_ptr, e);
  }
  set top(e) {
    r.__wbg_set_renderingregion_top(this.__wbg_ptr, e);
  }
  set width(e) {
    r.__wbg_set_renderingregion_width(this.__wbg_ptr, e);
  }
}
Symbol.dispose && (h.prototype[Symbol.dispose] = h.prototype.free);
function D() {
  let t, e;
  try {
    const n = r.version();
    return t = n[0], e = n[1], j(n[0], n[1]);
  } finally {
    r.__wbindgen_free(t, e, 1);
  }
}
function O() {
  return { __proto__: null, "./jxl_oxide_wasm_bg.js": { __proto__: null, __wbg___wbindgen_is_undefined_67b456be8673d3d7: function(e) {
    return e === void 0;
  }, __wbg___wbindgen_throw_1506f2235d1bdba0: function(e, n) {
    throw new Error(j(e, n));
  }, __wbg_height_2735500058d1a22a: function(e) {
    return e.height;
  }, __wbg_instanceof_Window_e093be59ee9a8e14: function(e) {
    let n;
    try {
      n = e instanceof Window;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_WorkerGlobalScope_fe1d59aa8cd22e9a: function(e) {
    let n;
    try {
      n = e instanceof WorkerGlobalScope;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_left_4c422fb411c491eb: function(e) {
    return e.left;
  }, __wbg_navigator_3833ecdbc19d2757: function(e) {
    return e.navigator;
  }, __wbg_navigator_391291470f58c650: function(e) {
    return e.navigator;
  }, __wbg_static_accessor_GLOBAL_9d53f2689e622ca1: function() {
    const e = typeof global > "u" ? null : global;
    return l(e) ? 0 : d(e);
  }, __wbg_static_accessor_GLOBAL_THIS_a1a35cec07001a8a: function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return l(e) ? 0 : d(e);
  }, __wbg_static_accessor_SELF_4c59f6c7ea29a144: function() {
    const e = typeof self > "u" ? null : self;
    return l(e) ? 0 : d(e);
  }, __wbg_static_accessor_WINDOW_e70ae9f2eb052253: function() {
    const e = typeof window > "u" ? null : window;
    return l(e) ? 0 : d(e);
  }, __wbg_top_e281996b8a05eade: function(e) {
    return e.top;
  }, __wbg_userAgent_8def8135d886414b: function() {
    return W(function(e, n) {
      const i = n.userAgent, _ = I(i, r.__wbindgen_malloc, r.__wbindgen_realloc), a = f;
      y().setInt32(e + 4, a, true), y().setInt32(e + 0, _, true);
    }, arguments);
  }, __wbg_userAgent_accd125de05afbc5: function() {
    return W(function(e, n) {
      const i = n.userAgent, _ = I(i, r.__wbindgen_malloc, r.__wbindgen_realloc), a = f;
      y().setInt32(e + 4, a, true), y().setInt32(e + 0, _, true);
    }, arguments);
  }, __wbg_width_af62126ac802e0ee: function(e) {
    return e.width;
  }, __wbindgen_cast_0000000000000001: function(e, n) {
    return j(e, n);
  }, __wbindgen_init_externref_table: function() {
    const e = r.__wbindgen_externrefs, n = e.grow(4);
    e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, true), e.set(n + 3, false);
  } } };
}
const S = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => r.__wbg_jxlimage_free(t, 1)), F = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => r.__wbg_renderresult_free(t, 1)), E = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => r.__wbg_renderingregion_free(t, 1));
function d(t) {
  const e = r.__externref_table_alloc();
  return r.__wbindgen_externrefs.set(e, t), e;
}
function T(t, e) {
  return t = t >>> 0, g().subarray(t / 1, t / 1 + e);
}
let c = null;
function y() {
  return (c === null || c.buffer.detached === true || c.buffer.detached === void 0 && c.buffer !== r.memory.buffer) && (c = new DataView(r.memory.buffer)), c;
}
function j(t, e) {
  return N(t >>> 0, e);
}
let b = null;
function g() {
  return (b === null || b.byteLength === 0) && (b = new Uint8Array(r.memory.buffer)), b;
}
function W(t, e) {
  try {
    return t.apply(this, e);
  } catch (n) {
    const i = d(n);
    r.__wbindgen_exn_store(i);
  }
}
function l(t) {
  return t == null;
}
function M(t, e) {
  const n = e(t.length * 1, 1) >>> 0;
  return g().set(t, n / 1), f = t.length, n;
}
function I(t, e, n) {
  if (n === void 0) {
    const o = w.encode(t), u = e(o.length, 1) >>> 0;
    return g().subarray(u, u + o.length).set(o), f = o.length, u;
  }
  let i = t.length, _ = e(i, 1) >>> 0;
  const a = g();
  let s = 0;
  for (; s < i; s++) {
    const o = t.charCodeAt(s);
    if (o > 127) break;
    a[_ + s] = o;
  }
  if (s !== i) {
    s !== 0 && (t = t.slice(s)), _ = n(_, i, i = s + t.length * 3, 1) >>> 0;
    const o = g().subarray(_ + s, _ + i), u = w.encodeInto(t, o);
    s += u.written, _ = n(_, i, s, 1) >>> 0;
  }
  return f = s, _;
}
function m(t) {
  const e = r.__wbindgen_externrefs.get(t);
  return r.__externref_table_dealloc(t), e;
}
let x = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
x.decode();
const L = 2146435072;
let A = 0;
function N(t, e) {
  return A += e, A >= L && (x = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), x.decode(), A = e), x.decode(g().subarray(t, t + e));
}
const w = new TextEncoder();
"encodeInto" in w || (w.encodeInto = function(t, e) {
  const n = w.encode(t);
  return e.set(n), { read: t.length, written: n.length };
});
let f = 0, r;
function v(t, e) {
  return r = t.exports, c = null, b = null, r.__wbindgen_start(), r;
}
async function z(t, e) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(t, e);
    } catch (_) {
      if (t.ok && n(t.type) && t.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _);
      else throw _;
    }
    const i = await t.arrayBuffer();
    return await WebAssembly.instantiate(i, e);
  } else {
    const i = await WebAssembly.instantiate(t, e);
    return i instanceof WebAssembly.Instance ? { instance: i, module: t } : i;
  }
  function n(i) {
    switch (i) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function B(t) {
  if (r !== void 0) return r;
  t !== void 0 && (Object.getPrototypeOf(t) === Object.prototype ? { module: t } = t : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const e = O();
  t instanceof WebAssembly.Module || (t = new WebAssembly.Module(t));
  const n = new WebAssembly.Instance(t, e);
  return v(n);
}
async function G(t) {
  if (r !== void 0) return r;
  t !== void 0 && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), t === void 0 && (t = new URL("" + new URL("jxl_oxide_wasm_bg-C5JqlrFv.wasm", import.meta.url).href, import.meta.url));
  const e = O();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const { instance: n, module: i } = await z(await t, e);
  return v(n);
}
export {
  R as JxlImage,
  p as RenderResult,
  h as RenderingRegion,
  G as default,
  B as initSync,
  D as version
};
