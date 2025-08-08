"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dingtalkDocsCoolApp = require("dingtalk-docs-cool-app");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var t = _dingtalkDocsCoolApp.fieldDecoratorKit.t;

// 自己的业务
var domain = "aibeings-vip.xiaoice.com";
var baseUrl = "http://".concat(domain);
var vhBizIds = {
  "张淑芬-保健品种草": "VHPUBJB6TBUCMUE",
  "静怡-女主播": "VHP3HOLVRPL9QYR",
  "文泽-电子产品种草": "VHPWHEUD6XTHZ5J"
};
// 通过addDomainList添加请求接口的域名
_dingtalkDocsCoolApp.fieldDecoratorKit.setDomainList([domain]);
_dingtalkDocsCoolApp.fieldDecoratorKit.setDecorator({
  name: "智能成片AI字段",
  // 定义捷径的i18n语言资源
  i18nMap: {
    "zh-CN": {
      szrfwkey: "数字人服务key",
      keyHolder: "请联系对接人获取subkey",
      noMatchId: "无效的数字演员ID，请联系对接人获取",
      szryyid: "数字演员",
      spzt: "视频主题",
      kbwa: "口播文案",
      cpt: "产品图"
    },
    "en-US": {
      szrfwkey: "Digital Human Service Key",
      keyHolder: "Please contact the connector to obtain the subkey",
      undefinedId: "Invalid Digital Actor ID, please contact the connector to obtain",
      szryyid: "Digital Actor ID",
      spzt: "Video Theme",
      kbwa: "Script",
      cpt: "Product Image"
    },
    "ja-JP": {
      szrfwkey: "デジタルヒューマンサービスキー",
      keyHolder: "接続者に連絡してサブキーを取得してください",
      undefinedId: "無効なデジタルアクターID、接続者に連絡して取得してください",
      szryyid: "デジタルアクターID",
      spzt: "ビデオテーマ",
      kbwa: "スクリプト",
      cpt: "製品画像"
    }
  },
  // 定义捷径的入参
  formItems: [{
    key: "subKey",
    label: t("szrfwkey"),
    component: _dingtalkDocsCoolApp.FormItemComponent.Textarea,
    props: {
      placeholder: t("keyHolder")
    },
    validator: {
      required: true
    }
  }, {
    key: "vhBizId",
    label: t("szryyid"),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    props: {
      mode: "single",
      supportTypes: [_dingtalkDocsCoolApp.FieldType.SingleSelect, _dingtalkDocsCoolApp.FieldType.Text]
    },
    validator: {
      required: true
    }
  }, {
    key: "topic",
    label: t("spzt"),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    props: {
      mode: "single",
      supportTypes: [_dingtalkDocsCoolApp.FieldType.Text]
    },
    validator: {
      required: false
    }
  }, {
    key: "content",
    label: t("kbwa"),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    props: {
      mode: "single",
      supportTypes: [_dingtalkDocsCoolApp.FieldType.Text]
    },
    validator: {
      required: true
    }
  }, {
    key: "imageUrl",
    label: t("cpt"),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    props: {
      mode: "single",
      supportTypes: [_dingtalkDocsCoolApp.FieldType.Attachment]
    },
    validator: {
      required: false
    }
  }],
  // 定义捷径的返回结果类型
  resultType: {
    type: _dingtalkDocsCoolApp.FieldType.Attachment
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: function () {
    var _execute = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(context, formData) {
      var subKey, vhBizId, _formData$topic, topic, content, imageUrl, trueVhBizId, params, response, timerRef, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            subKey = formData.subKey, vhBizId = formData.vhBizId, _formData$topic = formData.topic, topic = _formData$topic === void 0 ? "" : _formData$topic, content = formData.content, imageUrl = formData.imageUrl;
            _context2.p = 1;
            if (!(!subKey || !vhBizId || !content)) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              data: []
            });
          case 2:
            trueVhBizId = vhBizIds[vhBizId];
            if (trueVhBizId) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.InvalidArgument,
              message: String(t("noMatchId"))
            });
          case 3:
            params = {
              content: content,
              // 口播文案
              topic: topic,
              // 视频主题
              vhBizId: trueVhBizId,
              // 数字人id
              materialList: (imageUrl === null || imageUrl === void 0 ? void 0 : imageUrl.map(function (item) {
                return {
                  url: item.tmp_url
                };
              })) || [] // 产品图
            };
            console.log("API1 请求参数:", params, "subKey:", subKey);
            _context2.n = 4;
            return context.fetch("".concat(baseUrl, "/openapi/aivideo/create"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "subscription-key": subKey // subkey
              },
              body: JSON.stringify(params)
            }).then(function (res) {
              return res.json();
            });
          case 4:
            response = _context2.v;
            console.log("API1 返回结果:", response);
            if (!response.data) {
              _context2.n = 5;
              break;
            }
            timerRef = null;
            return _context2.a(2, new Promise(function (resolve) {
              var waitTime = 0; // 等待时间，单位为毫秒
              timerRef = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                var _data2$data;
                var response2, data2, _data2$data2;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      waitTime += 5000;
                      _context.n = 1;
                      return context.fetch("".concat(baseUrl, "/openapi/aivideo/detail/").concat(response.data), {
                        method: "GET",
                        headers: {
                          "Content-Type": "application/json",
                          "subscription-key": subKey // subkey
                        }
                      });
                    case 1:
                      response2 = _context.v;
                      _context.n = 2;
                      return response2.json();
                    case 2:
                      data2 = _context.v;
                      if ((_data2$data = data2.data) !== null && _data2$data !== void 0 && (_data2$data = _data2$data.outputData) !== null && _data2$data !== void 0 && _data2$data.videoUrl) {
                        clearInterval(timerRef);
                        timerRef = null;
                        console.log("API2 返回结果:", data2);
                        resolve({
                          code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
                          data: [{
                            fileName: topic ? topic + ".mp4" : (data2 === null || data2 === void 0 ? void 0 : data2.data.updateTime) + ".mp4",
                            type: "mp4",
                            url: (_data2$data2 = data2.data) === null || _data2$data2 === void 0 || (_data2$data2 = _data2$data2.outputData) === null || _data2$data2 === void 0 ? void 0 : _data2$data2.videoUrl
                          }]
                        });
                      } else {
                        console.log("等待视频生成,时间：", waitTime / 1000, "s");
                      }
                    case 3:
                      return _context.a(2);
                  }
                }, _callee);
              })), 5000);
            }));
          case 5:
            console.log("请求失败:", response.message);
            return _context2.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              message: response.message
            });
          case 6:
            _context2.n = 8;
            break;
          case 7:
            _context2.p = 7;
            _t = _context2.v;
            console.log("请求出错:", String(_t));
            return _context2.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              message: String(_t)
            });
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 7]]);
    }));
    function execute(_x, _x2) {
      return _execute.apply(this, arguments);
    }
    return execute;
  }()
});
var _default = exports["default"] = _dingtalkDocsCoolApp.fieldDecoratorKit;