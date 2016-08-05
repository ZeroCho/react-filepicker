module.exports = /******/
function(modules) {
    /******/
    /******/
    // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (installedModules[moduleId]) /******/
        return installedModules[moduleId].exports;
        /******/
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: !1
        };
        /******/
        /******/
        // Return the exports of the module
        /******/
        /******/
        /******/
        // Execute the module function
        /******/
        /******/
        /******/
        // Flag the module as loaded
        /******/
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.loaded = !0, module.exports;
    }
    // webpackBootstrap
    /******/
    // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/
    // Load entry module and return exports
    /******/
    /******/
    /******/
    /******/
    // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/
    // expose the module cache
    /******/
    /******/
    /******/
    // __webpack_public_path__
    /******/
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.p = "", __webpack_require__(0);
}([ /* 0 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _options = __webpack_require__(2), _options2 = _interopRequireDefault(_options), _filepickerJs = __webpack_require__(3), _filepickerJs2 = _interopRequireDefault(_filepickerJs), ReactFilepicker = function(_Component) {
        function ReactFilepicker() {
            var _Object$getPrototypeO, _temp, _this, _ret;
            _classCallCheck(this, ReactFilepicker);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            return _temp = _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ReactFilepicker)).call.apply(_Object$getPrototypeO, [ this ].concat(args))), 
            _this.onClickPick = function(e) {
                e.preventDefault(), e.stopPropagation();
                var _this$props = _this.props, apikey = _this$props.apikey, onSuccess = _this$props.onSuccess, onError = _this$props.onError, onProgress = _this$props.onProgress, options = _this$props.options, mode = _this$props.mode, blob = _this$props.blob, input = _this$props.input, onFinished = function(blob) {
                    "function" == typeof onSuccess ? onSuccess(blob) : console.log(blob);
                }, onFail = function(error) {
                    "function" == typeof onError ? onError(error) : console.error(error);
                }, onUploading = function(progress) {
                    "function" == typeof onProgress ? onProgress(progress) : console.log(progress);
                };
                "undefined" != typeof window && (_filepickerJs2["default"].setKey(apikey), "export" === mode ? _filepickerJs2["default"].exportFile(blob || options.url, options, onFinished, onFail, onUploading) : "convert" === mode ? _filepickerJs2["default"].convert(blob, options, options, onFinished, onFail, onUploading) : "pickAndStore" === mode ? _filepickerJs2["default"].pickAndStore(options, options, onFinished, onFail, onUploading) : "pickMultiple" === mode || options.multiple ? _filepickerJs2["default"].pickMultiple(options, onFinished, onFail, onUploading) : "read" === mode ? _filepickerJs2["default"].read(input || options.url, options, onFinished, onError, onUploading) : "store" === mode ? _filepickerJs2["default"].store(input, options, onFinished, onError, onUploading) : "storeUrl" === mode ? _filepickerJs2["default"].storeUrl(options.url, options, onFinished, onError, onUploading) : "stat" === mode ? _filepickerJs2["default"].stat(blob, options, onFinished, onError) : "write" === mode ? _filepickerJs2["default"].write(blob, input, options, onFinished, onError, onUploading) : "writeUrl" === mode ? _filepickerJs2["default"].writeUrl(blob, options.url, options, onFinished, onError, onUploading) : _filepickerJs2["default"].pick(options, onFinished, onFail, onUploading));
            }, _ret = _temp, _possibleConstructorReturn(_this, _ret);
        }
        return _inherits(ReactFilepicker, _Component), _createClass(ReactFilepicker, [ {
            key: "componentDidMount",
            value: function() {
                var _props = this.props, apikey = _props.apikey, buttonText = _props.buttonText, buttonClass = _props.buttonClass, onSuccess = _props.onSuccess, options = _props.options, mode = _props.mode, custom = this.refs.fpButton;
                if (!custom) {
                    // if using default widget
                    var element = this.refs.target;
                    "dragdrop" === mode ? element.setAttribute("type", "filepicker-dragdrop") : "pickMultiple" === mode && (options.multiple = !0), 
                    (0, _options2["default"])(element, options, mode), element.setAttribute("data-fp-apikey", apikey), 
                    element.setAttribute("data-fp-button-text", buttonText || options.buttonText || "Pick File"), 
                    element.setAttribute("data-fp-button-class", buttonClass || options.buttonClass || "fp__btn"), 
                    element.onchange = function(e) {
                        "function" == typeof onSuccess ? onSuccess(e.fpfile) : console.log(e.fpfile);
                    }, "undefined" != typeof window && (_filepickerJs2["default"].constructWidget(element), 
                    element.setAttribute("type", ""));
                }
            }
        }, {
            key: "render",
            value: function() {
                var _props2 = this.props, defaultWidget = _props2.defaultWidget, buttonClass = _props2.buttonClass, buttonText = _props2.buttonText, link = _props2.link, options = _props2.options;
                if (defaultWidget) return _react2["default"].createElement("input", {
                    ref: "target",
                    type: "filepicker"
                });
                var Tag = link ? "a" : "button";
                return _react2["default"].createElement(Tag, {
                    name: "filepicker",
                    ref: "fpButton",
                    onClick: this.onClickPick,
                    className: buttonClass || options.buttonClass,
                    href: link ? "javascript:void(0)" : void 0
                }, buttonText || options.buttonText);
            }
        } ]), ReactFilepicker;
    }(_react.Component);
    ReactFilepicker.defaultProps = {
        defaultWidget: !0,
        mode: "pick",
        options: {
            folders: !1,
            buttonText: "Pick File",
            container: "modal",
            language: "en",
            webcam: {
                videoRes: "640x480",
                audioLen: "3600",
                vidioLen: "3600"
            },
            backgroundUpload: !0,
            hide: !1,
            imageQuality: 100,
            cropForce: !1
        }
    }, ReactFilepicker.propTypes = {
        blob: _react.PropTypes.object,
        input: _react.PropTypes.any,
        apikey: _react.PropTypes.string.isRequired,
        defaultWidget: _react.PropTypes.bool,
        link: _react.PropTypes.bool,
        mode: _react.PropTypes.string,
        buttonText: _react.PropTypes.string,
        buttonClass: _react.PropTypes.string,
        onSuccess: _react.PropTypes.func,
        onError: _react.PropTypes.func,
        onProgress: _react.PropTypes.func,
        options: _react.PropTypes.shape({
            url: _react.PropTypes.string,
            filename: _react.PropTypes.string,
            suggestedFilename: _react.PropTypes.string,
            buttonText: _react.PropTypes.string,
            buttonClass: _react.PropTypes.string,
            mimetype: _react.PropTypes.string,
            mimetypes: _react.PropTypes.arrayOf(_react.PropTypes.string),
            extension: _react.PropTypes.string,
            extensions: _react.PropTypes.arrayOf(_react.PropTypes.string),
            multiple: _react.PropTypes.bool,
            maxSize: _react.PropTypes.number,
            maxFiles: _react.PropTypes.number,
            folders: _react.PropTypes.bool,
            container: _react.PropTypes.string,
            language: _react.PropTypes.string,
            service: _react.PropTypes.string,
            services: _react.PropTypes.arrayOf(_react.PropTypes.string),
            openTo: _react.PropTypes.string,
            webcamDim: _react.PropTypes.arrayOf(_react.PropTypes.number),
            webcam: _react.PropTypes.shape({
                videoRes: _react.PropTypes.string,
                audioLen: _react.PropTypes.oneOfType([ _react.PropTypes.string, _react.PropTypes.number ]),
                videoLen: _react.PropTypes.oneOfType([ _react.PropTypes.string, _react.PropTypes.number ])
            }),
            customSourceContainer: _react.PropTypes.string,
            customSourcePath: _react.PropTypes.string,
            debug: _react.PropTypes.bool,
            policy: _react.PropTypes.string,
            signature: _react.PropTypes.string,
            backgroundUpload: _react.PropTypes.bool,
            hide: _react.PropTypes.bool,
            customCss: _react.PropTypes.string,
            customText: _react.PropTypes.string,
            imageQuality: _react.PropTypes.number,
            imageDim: _react.PropTypes.arrayOf(_react.PropTypes.number),
            imageMax: _react.PropTypes.arrayOf(_react.PropTypes.number),
            imageMin: _react.PropTypes.arrayOf(_react.PropTypes.number),
            conversions: _react.PropTypes.arrayOf(_react.PropTypes.string),
            cropRatio: _react.PropTypes.number,
            cropDim: _react.PropTypes.arrayOf(_react.PropTypes.number),
            cropMax: _react.PropTypes.arrayOf(_react.PropTypes.number),
            cropMin: _react.PropTypes.arrayOf(_react.PropTypes.number),
            cropForce: _react.PropTypes.bool,
            width: _react.PropTypes.number,
            height: _react.PropTypes.number,
            fit: _react.PropTypes.oneOf([ "clip", "crop", "scale", "max" ]),
            align: _react.PropTypes.oneOf([ "top", "bottom", "left", "right", "faces" ]),
            crop: _react.PropTypes.arrayOf(_react.PropTypes.number),
            crop_first: _react.PropTypes.bool,
            format: _react.PropTypes.string,
            filter: _react.PropTypes.oneOf([ "blur", "sharpen" ]),
            compress: _react.PropTypes.bool,
            quality: _react.PropTypes.number,
            rotate: _react.PropTypes.oneOfType([ _react.PropTypes.string, _react.PropTypes.number ]),
            watermark: _react.PropTypes.string,
            watermark_position: _react.PropTypes.string,
            watermark_size: _react.PropTypes.number,
            location: _react.PropTypes.string,
            path: _react.PropTypes.string,
            storeRegion: _react.PropTypes.string,
            storeContainer: _react.PropTypes.string,
            access: _react.PropTypes.string,
            base64encode: _react.PropTypes.bool,
            base64decode: _react.PropTypes.bool,
            asText: _react.PropTypes.bool,
            cache: _react.PropTypes.bool,
            uploaded: _react.PropTypes.bool,
            writeable: _react.PropTypes.bool,
            md5: _react.PropTypes.bool
        })
    }, exports["default"] = ReactFilepicker;
}, /* 1 */
/***/
function(module, exports) {
    module.exports = require("react");
}, /* 2 */
/***/
function(module, exports) {
    "use strict";
    function applyOptions(domElement, options, mode) {
        var generalOptionsMap = {
            "data-fp-container": "container",
            "data-fp-mimetype": "mimetype",
            "data-fp-extension": "extension",
            "data-fp-openTo": "openTo",
            "data-fp-debug": "debug",
            "data-fp-signature": "signature",
            "data-fp-policy": "policy",
            "data-fp-language": "language",
            "data-fp-background-upload": "backgroundUpload",
            "data-fp-hide": "hide",
            "data-fp-custom-css": "customCss",
            "data-fp-crop-force": "cropForce",
            "data-fp-crop-ratio": "cropRatio",
            "data-fp-crop-dim": "cropDim",
            "data-fp-crop-max": "cropMax",
            "data-fp-crop-min": "cropMin",
            "data-fp-show-close": "showClose",
            "data-fp-conversions": "conversions",
            "data-fp-custom-text": "customText",
            "data-fp-custom-source-container": "customSourceContainer",
            "data-fp-custom-source-path": "customSourcePath"
        }, pickOnlyOptionsMap = {
            "data-fp-mimetypes": "mimetypes",
            "data-fp-extensions": "extensions",
            "data-fp-maxSize": "maxSize",
            "data-fp-maxFiles": "maxFiles",
            "data-fp-store-location": "storeLocation",
            "data-fp-store-path": "storePath",
            "data-fp-store-container": "storeContainer",
            "data-fp-store-region": "storeRegion",
            "data-fp-store-access": "storeAccess",
            "data-fp-image-quality": "imageQuality",
            "data-fp-image-dim": "imageDim",
            "data-fp-image-max": "imageMax",
            "data-fp-image-min": "imageMin"
        }, webcamOptionsMap = {
            "data-fp-video-recording-resolution": "videoRes",
            "data-fp-webcam-dim": "webcamDim",
            "data-fp-video-length": "videoLen",
            "data-fp-audio-length": "audioLen"
        };
        mode = mode || "pick", setAttrIfExistsArray(options, domElement, generalOptionsMap), 
        "export" === mode ? setAttrIfExists("suggestedFilename", fpoptions, "data-fp-suggestedFilename", domElement) : "pick" !== mode && "pickMultiple" !== mode || (setAttrIfExistsArray(options, domElement, pickOnlyOptionsMap), 
        setAttrIfExistsArray(options.webcam, domElement, webcamOptionsMap)), options.services && domElement.setAttribute("data-fp-services", options.services.join()), 
        options.service && domElement.setAttribute("data-fp-service", options.service);
        var arrayToJoin = [ "extensions", "mimetypes", "imageDim", "imageMin", "imageMax", "cropDim", "cropMax", "cropMin", "webcamDim", "conversions" ];
        for (var key in arrayToJoin) joinIfExist(arrayToJoin[key], options);
        return 1 == options.folders && domElement.setAttribute("data-fp-folders", "true"), 
        1 == options.multiple || "pickMultiple" === mode ? domElement.setAttribute("data-fp-multiple", "true") : domElement;
    }
    function setAttrIfExists(key, options, attrname, dom) {
        options[key] && dom.setAttribute(attrname, options[key]);
    }
    function setAttrIfExistsArray(fpoptions, domElement, optionsObj) {
        for (var option in optionsObj) setAttrIfExists(optionsObj[option], fpoptions, option, domElement);
    }
    function joinIfExist(key, options) {
        options[key] && (options[key] = options[key].join());
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports["default"] = applyOptions;
}, /* 3 */
/***/
function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function(filepicker) {
        /*
	    Module definition for browserify
	*/
        __webpack_require__(4), module.exports = filepicker;
    }).call(exports, __webpack_require__(3));
}, /* 4 */
/***/
function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function(__webpack_provided_window_dot_filepicker, filepicker) {
        "use strict";
        !function() {
            var fp = function() {
                var context = {}, addObjectTo = function(name, obj, base) {
                    for (var path = name.split("."), i = 0; i < path.length - 1; i++) base[path[i]] || (base[path[i]] = {}), 
                    base = base[path[i]];
                    "function" == typeof obj ? obj.isClass ? base[path[i]] = obj : base[path[i]] = function() {
                        return obj.apply(context, arguments);
                    } : base[path[i]] = obj;
                }, extendObject = function(name, obj, is_public) {
                    addObjectTo(name, obj, context), is_public && addObjectTo(name, obj, __webpack_provided_window_dot_filepicker);
                }, extend = function(pkg, init_fn, is_public) {
                    "function" == typeof pkg && (is_public = init_fn, init_fn = pkg, pkg = ""), pkg && (pkg += ".");
                    var objs = init_fn.call(context);
                    for (var obj_name in objs) extendObject(pkg + obj_name, objs[obj_name], is_public);
                }, internal = function(fn) {
                    fn.apply(context, arguments);
                };
                return {
                    extend: extend,
                    internal: internal
                };
            }();
            if (__webpack_provided_window_dot_filepicker) for (var attr in fp) __webpack_provided_window_dot_filepicker[attr] = fp[attr]; else __webpack_provided_window_dot_filepicker = fp;
        }(), filepicker.extend("comm", function() {
            var fp = this, COMM_IFRAME_NAME = "filepicker_comm_iframe", API_IFRAME_NAME = "fpapi_comm_iframe", openCommIframe = function() {
                if (void 0 === window.frames[COMM_IFRAME_NAME]) {
                    openCommunicationsChannel();
                    var commIFrame;
                    commIFrame = document.createElement("iframe"), commIFrame.id = commIFrame.name = COMM_IFRAME_NAME, 
                    commIFrame.src = fp.urls.COMM, commIFrame.style.display = "none", document.body.appendChild(commIFrame);
                }
                if (void 0 === window.frames[API_IFRAME_NAME]) {
                    openCommunicationsChannel();
                    var apiIFrame;
                    apiIFrame = document.createElement("iframe"), apiIFrame.id = apiIFrame.name = API_IFRAME_NAME, 
                    apiIFrame.src = fp.urls.API_COMM, apiIFrame.style.display = "none", document.body.appendChild(apiIFrame);
                }
            }, communicationsHandler = function(event) {
                if (event.origin === fp.urls.BASE || event.origin === fp.urls.DIALOG_BASE) {
                    var data = fp.json.parse(event.data);
                    fp.handlers.run(data);
                }
            }, isOpen = !1, openCommunicationsChannel = function() {
                if (!isOpen) if (isOpen = !0, window.addEventListener) window.addEventListener("message", communicationsHandler, !1); else {
                    if (!window.attachEvent) throw new fp.FilepickerException("Unsupported browser");
                    window.attachEvent("onmessage", communicationsHandler);
                }
            }, destroyCommIframe = function() {
                if (window.removeEventListener) window.removeEventListener("message", communicationsHandler, !1); else {
                    if (!window.attachEvent) throw new fp.FilepickerException("Unsupported browser");
                    window.detachEvent("onmessage", communicationsHandler);
                }
                if (isOpen) {
                    isOpen = !1;
                    for (var iframes = document.getElementsByName(COMM_IFRAME_NAME), i = 0; i < iframes.length; i++) iframes[i].parentNode.removeChild(iframes[i]);
                    try {
                        delete window.frames[COMM_IFRAME_NAME];
                    } catch (e) {}
                    for (var api_iframes = document.getElementsByName(API_IFRAME_NAME), j = 0; j < api_iframes.length; j++) api_iframes[j].parentNode.removeChild(api_iframes[j]);
                    try {
                        delete window.frames[API_IFRAME_NAME];
                    } catch (e) {}
                }
            };
            return {
                openChannel: openCommIframe,
                closeChannel: destroyCommIframe
            };
        }), filepicker.extend("comm_fallback", function() {
            var timer, old_comm, fp = this, FP_COMM_IFRAME_NAME = "filepicker_comm_iframe", HOST_COMM_IFRAME_NAME = "host_comm_iframe", base_host_location = "", hash_check_interval = 200, openCommIframe = function() {
                openHostCommIframe();
            }, openHostCommIframe = function() {
                if (void 0 === window.frames[HOST_COMM_IFRAME_NAME]) {
                    var hostCommIFrame;
                    hostCommIFrame = document.createElement("iframe"), hostCommIFrame.id = hostCommIFrame.name = HOST_COMM_IFRAME_NAME, 
                    base_host_location = hostCommIFrame.src = fp.urls.constructHostCommFallback(), hostCommIFrame.style.display = "none";
                    var onload = function() {
                        base_host_location = hostCommIFrame.contentWindow.location.href, openFPCommIframe();
                    };
                    hostCommIFrame.attachEvent ? hostCommIFrame.attachEvent("onload", onload) : hostCommIFrame.onload = onload, 
                    document.body.appendChild(hostCommIFrame);
                }
            }, openFPCommIframe = function() {
                if (void 0 === window.frames[FP_COMM_IFRAME_NAME]) {
                    var fpCommIFrame;
                    fpCommIFrame = document.createElement("iframe"), fpCommIFrame.id = fpCommIFrame.name = FP_COMM_IFRAME_NAME, 
                    fpCommIFrame.src = fp.urls.FP_COMM_FALLBACK + "?host_url=" + encodeURIComponent(base_host_location), 
                    fpCommIFrame.style.display = "none", document.body.appendChild(fpCommIFrame);
                }
                openCommunicationsChannel();
            }, isOpen = !1, lastHash = "", checkHash = function() {
                var comm_iframe = window.frames[FP_COMM_IFRAME_NAME];
                if (comm_iframe) {
                    var host_iframe = comm_iframe.frames[HOST_COMM_IFRAME_NAME];
                    if (host_iframe) {
                        var hash = host_iframe.location.hash;
                        if (hash && "#" === hash.charAt(0) && (hash = hash.substr(1)), hash !== lastHash && (lastHash = hash)) {
                            var data;
                            try {
                                data = fp.json.parse(hash);
                            } catch (e) {}
                            data && fp.handlers.run(data);
                        }
                    }
                }
            }, openCommunicationsChannel = function() {
                isOpen || (isOpen = !0, timer = window.setInterval(checkHash, hash_check_interval));
            }, destroyCommIframe = function() {
                if (window.clearInterval(timer), isOpen) {
                    isOpen = !1;
                    for (var iframes = document.getElementsByName(FP_COMM_IFRAME_NAME), i = 0; i < iframes.length; i++) iframes[i].parentNode.removeChild(iframes[i]);
                    try {
                        delete window.frames[FP_COMM_IFRAME_NAME];
                    } catch (e) {}
                    for (iframes = document.getElementsByName(HOST_COMM_IFRAME_NAME), i = 0; i < iframes.length; i++) iframes[i].parentNode.removeChild(iframes[i]);
                    try {
                        delete window.frames[HOST_COMM_IFRAME_NAME];
                    } catch (e) {}
                }
            }, isEnabled = !("postMessage" in window), activate = function() {
                old_comm = fp.comm, fp.comm = {
                    openChannel: openCommIframe,
                    closeChannel: destroyCommIframe
                };
            };
            return isEnabled && activate(), {
                openChannel: openCommIframe,
                closeChannel: destroyCommIframe,
                isEnabled: isEnabled
            };
        }), filepicker.extend("cookies", function() {
            var fp = this, getReceiveCookiesMessage = function(callback) {
                var handler = function(data) {
                    "ThirdPartyCookies" === data.type && (fp.cookies.THIRD_PARTY_COOKIES = !!data.payload, 
                    callback && "function" == typeof callback && callback(!!data.payload));
                };
                return handler;
            }, checkThirdParty = function(callback) {
                var handler = getReceiveCookiesMessage(callback);
                fp.handlers.attach("cookies", handler), fp.comm.openChannel();
            };
            return {
                checkThirdParty: checkThirdParty
            };
        }), filepicker.extend("handlers", function() {
            var storage = {}, attachHandler = function(id, handler) {
                return storage.hasOwnProperty(id) ? storage[id].push(handler) : storage[id] = [ handler ], 
                handler;
            }, detachHandler = function(id, fn) {
                var handlers = storage[id];
                if (handlers) if (fn) {
                    for (var i = 0; i < handlers.length; i++) if (handlers[i] === fn) {
                        handlers.splice(i, 1);
                        break;
                    }
                    0 === handlers.length && delete storage[id];
                } else delete storage[id];
            }, run = function(data) {
                if (null == data || null == data.id) return !1;
                var callerId = data.id;
                if (storage.hasOwnProperty(callerId)) {
                    for (var handlers = storage[callerId], i = 0; i < handlers.length; i++) handlers[i](data);
                    return !0;
                }
                return !1;
            };
            return {
                attach: attachHandler,
                detach: detachHandler,
                run: run
            };
        }), filepicker.extend("exporter", function() {
            var fp = this, normalizeOptions = function(options) {
                var normalize = function(singular, plural, def) {
                    options[plural] && !fp.util.isArray(options[plural]) ? options[plural] = [ options[plural] ] : options[singular] ? options[plural] = [ options[singular] ] : def && (options[plural] = def);
                };
                if (options.mimetype && options.extension) throw fp.FilepickerException("Error: Cannot pass in both mimetype and extension parameters to the export function");
                if (normalize("service", "services"), options.services) for (var i = 0; i < options.services.length; i++) {
                    var service = ("" + options.services[i]).replace(" ", ""), sid = fp.services[service];
                    options.services[i] = void 0 === sid ? service : sid;
                }
                options.openTo && (options.openTo = fp.services[options.openTo] || options.openTo), 
                fp.util.setDefault(options, "container", fp.browser.openInModal() ? "modal" : "window");
            }, getExportHandler = function(onSuccess, onError) {
                var handler = function(data) {
                    if ("filepickerUrl" === data.type) {
                        if (data.error) fp.util.console.error(data.error), onError(fp.errors.FPError(132)); else {
                            var fpfile = {};
                            fpfile.url = data.payload.url, fpfile.filename = data.payload.data.filename, fpfile.mimetype = data.payload.data.type, 
                            fpfile.size = data.payload.data.size, fpfile.client = data.payload.data.client, 
                            fpfile.isWriteable = !0, onSuccess(fpfile);
                        }
                        fp.modal.close();
                    }
                };
                return handler;
            }, createExporter = function(input, options, onSuccess, onError) {
                normalizeOptions(options);
                var api = {
                    close: function() {
                        fp.modal.close();
                    }
                };
                if (options.debug) return setTimeout(function() {
                    onSuccess({
                        id: 1,
                        url: "https://www.filepicker.io/api/file/-nBq2onTSemLBxlcBWn1",
                        filename: "test.png",
                        mimetype: "image/png",
                        size: 58979,
                        client: "computer"
                    });
                }, 1), api;
                if (void 0 === fp.cookies.THIRD_PARTY_COOKIES) {
                    var alreadyHandled = !1;
                    return fp.cookies.checkThirdParty(function() {
                        alreadyHandled || (createExporter(input, options, onSuccess, onError), alreadyHandled = !0);
                    }), api;
                }
                var id = fp.util.getId(), finished = !1, onSuccessMark = function(fpfile) {
                    finished = !0, onSuccess(fpfile);
                }, onErrorMark = function(fperror) {
                    finished = !0, onError(fperror);
                }, onClose = function() {
                    finished || (finished = !0, onError(fp.errors.FPError(131)));
                };
                return fp.window.open(options.container, fp.urls.constructExportUrl(input, options, id), onClose), 
                fp.handlers.attach(id, getExportHandler(onSuccessMark, onErrorMark)), api;
            };
            return {
                createExporter: createExporter
            };
        }), filepicker.extend("modal", function() {
            function hide() {
                var shade = document.getElementById(SHADE_NAME);
                shade && (shade.hidden = !0);
                var container = document.getElementById(WINDOW_CONTAINER_NAME);
                container && (container.hidden = !0), setOriginalOverflow();
            }
            function setOriginalOverflow() {
                var body = getHtmlTag();
                body && (body.style.overflow = originalOverflow);
            }
            function appendStyle() {
                var css = ".fp__overlay {top: 0;right: 0;bottom: 0;left: 0;z-index: 1000;background: rgba(0, 0, 0, 0.8);}.fp__close {top: 104px; right: 108px; width: 35px; height: 35px; z-index: 20; cursor: pointer}@media screen and (max-width: 768px), screen and (max-height: 500px) {.fp__close {top: 15px; right: 12px;}}.fp__close a {text-indent: -9999px; overflow: hidden; display: block; width: 100%; height: 100%; background: url(https://d1zyh3sbxittvg.cloudfront.net/close.png) 50% 50% no-repeat;}.fp__close a:hover {background-color: rgba(0,0,0, .02); opacity: .8;}@media screen and (max-width: 768px), screen and (max-height: 500px) {top: 14px; right: 14px;}.fp__copy {display: none;}.fp__container {-webkit-overflow-scrolling: touch; overflow: hidden; min-height: 300px; top: 100px;right: 100px;bottom: 100px;left: 100px;background: #eee; box-sizing:content-box; -webkit-box-sizing:content-box; -moz-box-sizing:content-box;}@media screen and (max-width: 768px), screen and (max-height: 500px) {.fp__copy {bottom: 0; left: 0; right: 0; height: 20px; background: #333;}}@media screen and (max-width: 768px), screen and (max-height: 500px) {.fp__copy a {margin-left: 5px;}}@media screen and (max-width: 768px), screen and (max-height: 500px) {.fp__container {top: 0;right: 0;bottom: 0;left: 0;}}.fp__overlay, .fp__close, .fp__copy, .fp__container {position: fixed;}", head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
                style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)), 
                head.appendChild(style);
            }
            function getHtmlTag() {
                try {
                    return document.getElementsByTagName("html")[0];
                } catch (err) {
                    return null;
                }
            }
            var fp = this, SHADE_NAME = "filepicker_shade", WINDOW_CONTAINER_NAME = "filepicker_dialog_container", originalBody = getHtmlTag();
            if (originalBody) var originalOverflow = originalBody.style.overflow;
            var generateModal = function(modalUrl, onClose) {
                appendStyle();
                var shade = createModalShade(onClose), container = createModalContainer(), close = createModalClose(onClose), modal = document.createElement("iframe");
                modal.name = fp.window.WINDOW_NAME, modal.id = fp.window.WINDOW_NAME, modal.style.width = "100%", 
                modal.style.height = "100%", modal.style.border = "none", modal.style.position = "relative", 
                modal.setAttribute("border", 0), modal.setAttribute("frameborder", 0), modal.setAttribute("frameBorder", 0), 
                modal.setAttribute("marginwidth", 0), modal.setAttribute("marginheight", 0), modal.src = modalUrl, 
                container.appendChild(modal), shade.appendChild(close), shade.appendChild(container), 
                document.body.appendChild(shade);
                var body = getHtmlTag();
                return body && (body.style.overflow = "hidden"), modal;
            }, createModalShade = function(onClose) {
                var shade = document.createElement("div");
                return shade.id = SHADE_NAME, shade.className = "fp__overlay", shade.onclick = getCloseModal(onClose), 
                shade;
            }, createModalContainer = function() {
                var modalcontainer = document.createElement("div");
                return modalcontainer.id = WINDOW_CONTAINER_NAME, modalcontainer.className = "fp__container", 
                modalcontainer;
            }, createModalClose = function(onClose) {
                var close = document.createElement("div");
                close.className = "fp__close";
                var closeAnchor = document.createElement("a");
                return closeAnchor.appendChild(document.createTextNode("X")), close.appendChild(closeAnchor), 
                closeAnchor.onclick = getCloseModal(onClose), document.onkeydown = function(evt) {
                    evt = evt || window.event, 27 === evt.keyCode && getCloseModal(onClose)();
                }, close;
            }, getCloseModal = function(onClose, force) {
                return force = !!force, function() {
                    if (!fp.uploading || force || window.confirm('You are currently uploading. If you choose "OK", the window will close and your upload will not finish. Do you want to stop uploading and close the window?')) {
                        fp.uploading = !1, document.onkeydown = null, setOriginalOverflow();
                        var shade = document.getElementById(SHADE_NAME);
                        shade && document.body.removeChild(shade);
                        var container = document.getElementById(WINDOW_CONTAINER_NAME);
                        container && document.body.removeChild(container);
                        try {
                            delete window.frames[fp.window.WINDOW_NAME];
                        } catch (e) {}
                        onClose && onClose();
                    }
                };
            }, closeModal = getCloseModal(function() {});
            return {
                generate: generateModal,
                close: closeModal,
                hide: hide
            };
        }), filepicker.extend("picker", function() {
            function filterDataType(data, onProgress) {
                if ("filepickerProgress" === data.type) fp.uploading = !0, onProgress && onProgress(data.payload.data); else if ("notUploading" === data.type) fp.uploading = !1; else if ("closeModal" === data.type) fp.modal.close(); else if ("hideModal" === data.type) fp.modal.hide(); else if ("filepickerUrl" === data.type || "serverHttpError" === data.type) return !1;
                return !0;
            }
            var fp = this, normalizeOptions = function(options) {
                var normalize = function(singular, plural, def) {
                    options[plural] ? fp.util.isArray(options[plural]) || (options[plural] = [ options[plural] ]) : options[singular] ? options[plural] = [ options[singular] ] : def && (options[plural] = def);
                };
                if (normalize("service", "services"), normalize("mimetype", "mimetypes"), normalize("extension", "extensions"), 
                options.services) for (var i = 0; i < options.services.length; i++) {
                    var service = ("" + options.services[i]).replace(" ", "");
                    void 0 !== fp.services[service] && (service = fp.services[service]), options.services[i] = service;
                }
                if (options.mimetypes && options.extensions) throw fp.FilepickerException("Error: Cannot pass in both mimetype and extension parameters to the pick function");
                options.mimetypes || options.extensions || (options.mimetypes = [ "*/*" ]), options.openTo && (options.openTo = fp.services[options.openTo] || options.openTo), 
                fp.util.setDefault(options, "container", fp.browser.openInModal() ? "modal" : "window");
            }, getPickHandler = function(onSuccess, onError, onProgress) {
                var handler = function(data) {
                    if (!filterDataType(data, onProgress)) if (fp.uploading = !1, data.error) fp.util.console.error(data.error), 
                    data.error.code ? onError(fp.errors.FPError(data.error.code)) : (onError(fp.errors.FPError(102)), 
                    fp.modal.close()); else {
                        var fpfile = fpfileFromPayload(data.payload);
                        onSuccess(fpfile), fp.modal.close();
                    }
                };
                return handler;
            }, getPickFolderHandler = function(onSuccess, onError, onProgress) {
                var handler = function(data) {
                    filterDataType(data, onProgress) || (fp.uploading = !1, data.error ? (fp.util.console.error(data.error), 
                    onError(fp.errors.FPError(102))) : (data.payload.data.url = data.payload.url, onSuccess(data.payload.data)), 
                    fp.modal.close());
                };
                return handler;
            }, getUploadingHandler = function(onUploading) {
                onUploading = onUploading || function() {};
                var handler = function(data) {
                    "uploading" === data.type && (fp.uploading = !!data.payload, onUploading(fp.uploading));
                };
                return handler;
            }, addIfExist = function(data, fpfile, key) {
                data[key] && (fpfile[key] = data[key]);
            }, fpfileFromPayload = function(payload) {
                var fpfile = {}, url = payload.url;
                url && url.url && (url = url.url), fpfile.url = url;
                var data = payload.url.data || payload.data;
                return fpfile.filename = data.filename, fpfile.mimetype = data.type, fpfile.size = data.size, 
                void 0 !== data.cropped && (fpfile.cropped = data.cropped), void 0 !== data.rotated && (fpfile.rotated = data.rotated), 
                void 0 !== data.converted && (fpfile.converted = data.converted), addIfExist(data, fpfile, "id"), 
                addIfExist(data, fpfile, "key"), addIfExist(data, fpfile, "container"), addIfExist(data, fpfile, "path"), 
                addIfExist(data, fpfile, "client"), fpfile.isWriteable = !0, fpfile;
            }, getPickMultipleHandler = function(onSuccess, onError, onProgress) {
                var handler = function(data) {
                    if (!filterDataType(data, onProgress)) {
                        if (fp.uploading = !1, data.error) fp.util.console.error(data.error), onError(fp.errors.FPError(102)); else {
                            var fpfiles = [];
                            fp.util.isArray(data.payload) || (data.payload = [ data.payload ]);
                            for (var i = 0; i < data.payload.length; i++) {
                                var fpfile = fpfileFromPayload(data.payload[i]);
                                fpfiles.push(fpfile);
                            }
                            onSuccess(fpfiles);
                        }
                        fp.modal.close();
                    }
                };
                return handler;
            }, createPicker = function(options, onSuccess, onError, multiple, folder, onProgress, convertFile) {
                normalizeOptions(options);
                var api = {
                    close: function() {
                        fp.modal.close();
                    }
                };
                if (options.debug) {
                    var dumy_callback, dumy_data = {
                        id: 1,
                        url: "https://www.filepicker.io/api/file/-nBq2onTSemLBxlcBWn1",
                        filename: "test.png",
                        mimetype: "image/png",
                        size: 58979,
                        client: "computer"
                    };
                    return dumy_callback = multiple || options.storeLocation ? [ dumy_data, dumy_data, dumy_data ] : dumy_data, 
                    setTimeout(function() {
                        onSuccess(dumy_callback);
                    }, 1), api;
                }
                if (void 0 === fp.cookies.THIRD_PARTY_COOKIES) {
                    var alreadyHandled = !1;
                    return fp.cookies.checkThirdParty(function() {
                        alreadyHandled || (createPicker(options, onSuccess, onError, !!multiple, folder, onProgress), 
                        alreadyHandled = !0);
                    }), api;
                }
                var url, handler, id = fp.util.getId(), finished = !1, onSuccessMark = function(fpfile) {
                    "window" === options.container && (window.onbeforeunload = null), finished = !0, 
                    onSuccess(fpfile);
                }, onErrorMark = function(fperror) {
                    finished = !0, onError(fperror);
                }, onClose = function() {
                    finished || (finished = !0, onError(fp.errors.FPError(101)));
                };
                convertFile ? (url = fp.urls.constructConvertUrl(options, id), handler = getPickHandler(onSuccessMark, onErrorMark, onProgress)) : multiple ? (url = fp.urls.constructPickUrl(options, id, !0), 
                handler = getPickMultipleHandler(onSuccessMark, onErrorMark, onProgress)) : folder ? (url = fp.urls.constructPickFolderUrl(options, id), 
                handler = getPickFolderHandler(onSuccessMark, onErrorMark, onProgress)) : (url = fp.urls.constructPickUrl(options, id, !1), 
                handler = getPickHandler(onSuccessMark, onErrorMark, onProgress)), fp.window.open(options.container, url, onClose), 
                fp.handlers.attach(id, handler);
                var key = id + "-upload";
                return fp.handlers.attach(key, getUploadingHandler(function() {
                    fp.handlers.detach(key);
                })), api;
            };
            return {
                createPicker: createPicker
            };
        }), filepicker.extend("window", function() {
            var fp = this, WINDOW_NAME = "filepicker_dialog", WINDOW_PROPERTIES = "left=100,top=100,height=600,width=800,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=yes,dependent=yes,dialog=yes", CLOSE_CHECK_INTERVAL = 100, openWindow = function(container, src, onClose) {
                if (onClose = onClose || function() {}, !container && fp.browser.openInModal() ? container = "modal" : container || (container = "window"), 
                "window" === container) {
                    var name = WINDOW_NAME + fp.util.getId();
                    window.onbeforeunload = function() {
                        return "Filepicker upload does not complete.";
                    };
                    var win = window.open(src, name, WINDOW_PROPERTIES);
                    win || (window.onbeforeunload = null, window.alert("Please disable your popup blocker to upload files."));
                    var closeCheck = window.setInterval(function() {
                        win && !win.closed || (window.onbeforeunload = null, window.clearInterval(closeCheck), 
                        onClose());
                    }, CLOSE_CHECK_INTERVAL);
                } else if ("modal" === container) fp.modal.generate(src, onClose); else {
                    var container_iframe = document.getElementById(container);
                    if (!container_iframe) throw new fp.FilepickerException('Container "' + container + '" not found. This should either be set to "window","modal", or the ID of an iframe that is currently in the document.');
                    container_iframe.src = src;
                }
            };
            return {
                open: openWindow,
                WINDOW_NAME: WINDOW_NAME
            };
        }), filepicker.extend("conversions", function() {
            var fp = this, valid_parameters = {
                align: "string",
                blurAmount: "number",
                crop: "string or array",
                crop_first: "boolean",
                compress: "boolean",
                exif: "string or boolean",
                filter: "string",
                fit: "string",
                format: "string",
                height: "number",
                policy: "string",
                quality: "number",
                page: "number",
                rotate: "string or number",
                secure: "boolean",
                sharpenAmount: "number",
                signature: "string",
                storeAccess: "string",
                storeContainer: "string",
                storeRegion: "string",
                storeLocation: "string",
                storePath: "string",
                text: "string",
                text_align: "string",
                text_color: "string",
                text_font: "string",
                text_padding: "number",
                text_size: "number",
                watermark: "string",
                watermark_position: "string",
                watermark_size: "number",
                width: "number"
            }, rest_map = {
                w: "width",
                h: "height"
            }, mapRestParams = function(options) {
                var obj = {};
                for (var key in options) obj[rest_map[key] || key] = options[key], "number" === valid_parameters[rest_map[key] || key] && (obj[rest_map[key] || key] = Number(options[key]));
                return obj;
            }, checkParameters = function(options) {
                var found;
                for (var key in options) {
                    found = !1;
                    for (var test in valid_parameters) if (key === test && (found = !0, valid_parameters[test].indexOf(fp.util.typeOf(options[key])) === -1)) throw new fp.FilepickerException("Conversion parameter " + key + " is not the right type: " + options[key] + ". Should be a " + valid_parameters[test]);
                    if (!found) throw new fp.FilepickerException("Conversion parameter " + key + " is not a valid parameter.");
                }
            }, convert = function(fp_url, options, onSuccess, onError, onProgress) {
                checkParameters(options), options.crop && fp.util.isArray(options.crop) && (options.crop = options.crop.join(",")), 
                fp.ajax.post(fp_url + "/convert", {
                    data: options,
                    json: !0,
                    success: function(fpfile) {
                        onSuccess(fp.util.standardizeFPFile(fpfile));
                    },
                    error: function(msg, status, xhr) {
                        onError("not_found" === msg ? new fp.errors.FPError(141) : "bad_params" === msg ? new fp.errors.FPError(142) : "not_authorized" === msg ? new fp.errors.FPError(403) : new fp.errors.FPError(143));
                    },
                    progress: onProgress
                });
            };
            return {
                convert: convert,
                mapRestParams: mapRestParams
            };
        }), filepicker.extend("errors", function() {
            var fp = this, FPError = function(code) {
                if (this === window) return new FPError(code);
                if (this.code = code, filepicker.debug) {
                    var info = filepicker.error_map[this.code];
                    this.message = info.message, this.moreInfo = info.moreInfo, this.toString = function() {
                        return "FPError " + this.code + ": " + this.message + ". For help, see " + this.moreInfo;
                    };
                } else this.toString = function() {
                    return "FPError " + this.code + ". Include filepicker_debug.js for more info";
                };
                return this;
            };
            FPError.isClass = !0;
            var handleError = function(fperror) {
                filepicker.debug && fp.util.console.error(fperror.toString());
            };
            return {
                FPError: FPError,
                handleError: handleError
            };
        }, !0), filepicker.extend(function() {
            var fp = this, VERSION = "2.4.16";
            fp.API_VERSION = "v2";
            var setKey = function(key) {
                fp.apikey = key;
            }, FilepickerException = function(text) {
                return this.text = text, this.toString = function() {
                    return "FilepickerException: " + this.text;
                }, this;
            };
            FilepickerException.isClass = !0;
            var pick = function(options, onSuccess, onError, onProgress) {
                return fp.util.checkApiKey(), "function" == typeof options && (onError = onSuccess, 
                onSuccess = options, options = {}), options = options || {}, onSuccess = onSuccess || function() {}, 
                onError = onError || fp.errors.handleError, fp.picker.createPicker(options, onSuccess, onError, !1, !1, onProgress);
            }, pickMultiple = function(options, onSuccess, onError, onProgress) {
                return fp.util.checkApiKey(), "function" == typeof options && (onProgress = onError, 
                onError = onSuccess, onSuccess = options, options = {}), options = options || {}, 
                onSuccess = onSuccess || function() {}, onError = onError || fp.errors.handleError, 
                fp.picker.createPicker(options, onSuccess, onError, !0, !1, onProgress);
            }, pickAndStore = function(picker_options, store_options, onSuccess, onError, onProgress) {
                if (fp.util.checkApiKey(), !picker_options || !store_options || "function" == typeof picker_options || "function" == typeof picker_options) throw new fp.FilepickerException("Not all required parameters given, missing picker or store options");
                onError = onError || fp.errors.handleError;
                var multiple = !!picker_options.multiple, options = picker_options ? fp.util.clone(picker_options) : {};
                if (options.storeLocation = store_options.location || "S3", options.storePath = store_options.path, 
                options.storeContainer = store_options.storeContainer || store_options.container, 
                options.storeRegion = store_options.storeRegion, options.storeAccess = store_options.access || "private", 
                multiple && options.storePath && "/" !== options.storePath.charAt(options.storePath.length - 1)) throw new fp.FilepickerException(NaN);
                var success = onSuccess;
                return multiple || (success = function(resp) {
                    onSuccess([ resp ]);
                }), fp.picker.createPicker(options, success, onError, multiple, !1, onProgress);
            }, pickFolder = function(options, onSuccess, onError, onProgress) {
                return fp.util.checkApiKey(), "function" == typeof options && (onError = onSuccess, 
                onSuccess = options, options = {}), options = options || {}, onSuccess = onSuccess || function() {}, 
                onError = onError || fp.errors.handleError, fp.picker.createPicker(options, onSuccess, onError, !1, !0, onProgress);
            }, read = function(input, options, onSuccess, onError, onProgress) {
                if (fp.util.checkApiKey(), !input) throw new fp.FilepickerException("No input given - nothing to read!");
                if ("function" == typeof options && (onProgress = onError, onError = onSuccess, 
                onSuccess = options, options = {}), options = options || {}, onSuccess = onSuccess || function() {}, 
                onError = onError || fp.errors.handleError, onProgress = onProgress || function() {}, 
                "string" == typeof input) fp.util.isFPUrl(input) ? fp.files.readFromFPUrl(input, options, onSuccess, onError, onProgress) : fp.files.readFromUrl(input, options, onSuccess, onError, onProgress); else if (fp.util.isFileInputElement(input)) input.files ? 0 === input.files.length ? onError(new fp.errors.FPError(115)) : fp.files.readFromFile(input.files[0], options, onSuccess, onError, onProgress) : storeThenRead(input, options, onSuccess, onError, onProgress); else if (fp.util.isFile(input)) fp.files.readFromFile(input, options, onSuccess, onError, onProgress); else {
                    if (!input.url) throw new fp.FilepickerException("Cannot read given input: " + input + ". Not a url, file input, DOM File, or FPFile object.");
                    fp.files.readFromFPUrl(input.url, options, onSuccess, onError, onProgress);
                }
            }, storeThenRead = function(input, readOptions, onSuccess, onError, onProgress) {
                onProgress(10), fp.store(input, function(fpfile) {
                    onProgress(50), fp.read(fpfile, readOptions, onSuccess, onError, function(progress) {
                        onProgress(50 + progress / 2);
                    });
                }, onError);
            }, write = function(fpfile, input, options, onSuccess, onError, onProgress) {
                if (fp.util.checkApiKey(), !fpfile) throw new fp.FilepickerException("No fpfile given - nothing to write to!");
                if (void 0 === input || null === input) throw new fp.FilepickerException("No input given - nothing to write!");
                "function" == typeof options && (onProgress = onError, onError = onSuccess, onSuccess = options, 
                options = {}), options = options || {}, onSuccess = onSuccess || function() {}, 
                onError = onError || fp.errors.handleError, onProgress = onProgress || function() {};
                var fp_url;
                if (fp.util.isFPUrl(fp.util.getFPUrl(fpfile))) fp_url = fpfile; else {
                    if (!fpfile.url) throw new fp.FilepickerException("Invalid file to write to: " + fpfile + ". Not a filepicker url or FPFile object.");
                    fp_url = fpfile.url;
                }
                if (fp_url = fp.util.trimConvert(fp.util.getFPUrl(fp_url)), "string" == typeof input) fp.files.writeDataToFPUrl(fp_url, input, options, onSuccess, onError, onProgress); else if (fp.util.isFileInputElement(input)) input.files ? 0 === input.files.length ? onError(new fp.errors.FPError(115)) : fp.files.writeFileToFPUrl(fp_url, input.files[0], options, onSuccess, onError, onProgress) : fp.files.writeFileInputToFPUrl(fp_url, input, options, onSuccess, onError, onProgress); else if (fp.util.isFile(input)) fp.files.writeFileToFPUrl(fp_url, input, options, onSuccess, onError, onProgress); else {
                    if (!input.url) throw new fp.FilepickerException("Cannot read from given input: " + input + ". Not a string, file input, DOM File, or FPFile object.");
                    fp.files.writeUrlToFPUrl(fp_url, input.url, options, onSuccess, onError, onProgress);
                }
            }, writeUrl = function(fpfile, input, options, onSuccess, onError, onProgress) {
                if (fp.util.checkApiKey(), !fpfile) throw new fp.FilepickerException("No fpfile given - nothing to write to!");
                if (void 0 === input || null === input) throw new fp.FilepickerException("No input given - nothing to write!");
                "function" == typeof options && (onProgress = onError, onError = onSuccess, onSuccess = options, 
                options = {}), options = options || {}, onSuccess = onSuccess || function() {}, 
                onError = onError || fp.errors.handleError, onProgress = onProgress || function() {};
                var fp_url;
                if (fp.util.isFPUrl(fp.util.getFPUrl(fpfile))) fp_url = fpfile; else {
                    if (!fpfile.url) throw new fp.FilepickerException("Invalid file to write to: " + fpfile + ". Not a filepicker url or FPFile object.");
                    fp_url = fpfile.url;
                }
                fp_url = fp.util.getFPUrl(fp_url), fp.files.writeUrlToFPUrl(fp.util.trimConvert(fp_url), input, options, onSuccess, onError, onProgress);
            }, exportFn = function(input, options, onSuccess, onError) {
                fp.util.checkApiKey(), "function" == typeof options && (onError = onSuccess, onSuccess = options, 
                options = {}), options = options ? fp.util.clone(options) : {}, onSuccess = onSuccess || function() {}, 
                onError = onError || fp.errors.handleError;
                var fp_url;
                if ("string" == typeof input && fp.util.isUrl(input)) fp_url = input; else {
                    if (!input.url) throw new fp.FilepickerException("Invalid file to export: " + input + ". Not a valid url or FPFile object. You may want to use filepicker.store() to get an FPFile to export");
                    fp_url = input.url, options.mimetype || options.extension || (options.mimetype = input.mimetype), 
                    options.suggestedFilename || (options.suggestedFilename = input.filename);
                }
                return options.suggestedFilename && (options.suggestedFilename = encodeURI(options.suggestedFilename)), 
                fp.exporter.createExporter(fp_url, options, onSuccess, onError);
            }, processImage = function(input, options, onSuccess, onError, onProgress) {
                var convertUrl;
                if (fp.util.checkApiKey(), "function" == typeof options && (onError = onSuccess, 
                onSuccess = options, options = {}), options = options || {}, onSuccess = onSuccess || function() {}, 
                onError = onError || fp.errors.handleError, "string" == typeof input) convertUrl = input; else {
                    if (!input.url) throw new fp.FilepickerException("Invalid file to convert: " + input + ". Not a valid url or FPFile object or not filepicker url. You can convert only filepicker url images.");
                    convertUrl = input.url, options.filename || (options.filename = input.filename);
                }
                return options.convertUrl = convertUrl, options.multiple = !1, options.services = [ "CONVERT", "COMPUTER" ], 
                options.backgroundUpload = !0, options.hide = !1, fp.picker.createPicker(options, onSuccess, onError, !1, !1, onProgress, !0);
            }, store = function(input, options, onSuccess, onError, onProgress) {
                if (fp.util.checkApiKey(), "function" == typeof options && (onProgress = onError, 
                onError = onSuccess, onSuccess = options, options = {}), options = options ? fp.util.clone(options) : {}, 
                onSuccess = onSuccess || function() {}, onError = onError || fp.errors.handleError, 
                onProgress = onProgress || function() {}, "string" == typeof input) fp.files.storeData(input, options, onSuccess, onError, onProgress); else if (fp.util.isFileInputElement(input)) input.files ? 0 === input.files.length ? onError(new fp.errors.FPError(115)) : fp.files.storeFile(input.files[0], options, onSuccess, onError, onProgress) : fp.files.storeFileInput(input, options, onSuccess, onError, onProgress); else if (fp.util.isFile(input)) fp.files.storeFile(input, options, onSuccess, onError, onProgress); else {
                    if (!input.url) throw new fp.FilepickerException("Cannot store given input: " + input + ". Not a string, file input, DOM File, or FPFile object.");
                    options.filename || (options.filename = input.filename), fp.files.storeUrl(input.url, options, onSuccess, onError, onProgress);
                }
            }, storeUrl = function(input, options, onSuccess, onError, onProgress) {
                fp.util.checkApiKey(), "function" == typeof options && (onProgress = onError, onError = onSuccess, 
                onSuccess = options, options = {}), options = options || {}, onSuccess = onSuccess || function() {}, 
                onError = onError || fp.errors.handleError, onProgress = onProgress || function() {}, 
                fp.files.storeUrl(input, options, onSuccess, onError, onProgress);
            }, stat = function(fpfile, options, onSuccess, onError) {
                fp.util.checkApiKey(), "function" == typeof options && (onError = onSuccess, onSuccess = options, 
                options = {}), options = options || {}, onSuccess = onSuccess || function() {}, 
                onError = onError || fp.errors.handleError;
                var fp_url;
                if (fp.util.isFPUrl(fp.util.getFPUrl(fpfile))) fp_url = fpfile; else {
                    if (!fpfile.url) throw new fp.FilepickerException("Invalid file to get metadata for: " + fpfile + ". Not a filepicker url or FPFile object.");
                    fp_url = fpfile.url;
                }
                fp_url = fp.util.getFPUrl(fp_url), fp.files.stat(fp.util.trimConvert(fp_url), options, onSuccess, onError);
            }, remove = function(fpfile, options, onSuccess, onError) {
                fp.util.checkApiKey(), "function" == typeof options && (onError = onSuccess, onSuccess = options, 
                options = {}), options = options || {}, onSuccess = onSuccess || function() {}, 
                onError = onError || fp.errors.handleError;
                var fp_url;
                if (fp.util.isFPUrl(fp.util.getFPUrl(fpfile))) fp_url = fpfile; else {
                    if (!fpfile.url) throw new fp.FilepickerException("Invalid file to remove: " + fpfile + ". Not a filepicker url or FPFile object.");
                    fp_url = fpfile.url;
                }
                fp_url = fp.util.getFPUrl(fp_url), fp.files.remove(fp.util.trimConvert(fp_url), options, onSuccess, onError);
            }, convert = function(fpfile, convert_options, store_options, onSuccess, onError, onProgress) {
                if (fp.util.checkApiKey(), !fpfile) throw new fp.FilepickerException("No fpfile given - nothing to convert!");
                "function" == typeof store_options && (onProgress = onError, onError = onSuccess, 
                onSuccess = store_options, store_options = {});
                var options = convert_options ? fp.util.clone(convert_options) : {};
                store_options = store_options || {}, onSuccess = onSuccess || function() {}, onError = onError || fp.errors.handleError, 
                onProgress = onProgress || function() {}, store_options.location && (options.storeLocation = store_options.location), 
                store_options.path && (options.storePath = store_options.path), store_options.container && (options.storeContainer = store_options.container), 
                options.storeAccess = store_options.access || "private";
                var fp_url;
                if (fp.util.isFPUrl(fp.util.getFPUrl(fpfile))) fp_url = fpfile; else {
                    if (!fpfile.url) throw new fp.FilepickerException("Invalid file to convert: " + fpfile + ". Not a filepicker url or FPFile object.");
                    if (fp_url = fpfile.url, !fp.mimetypes.matchesMimetype(fpfile.mimetype, "image/*") && !fp.mimetypes.matchesMimetype(fpfile.mimetype, "application/pdf")) return void onError(new fp.errors.FPError(142));
                }
                if (fp_url = fp.util.getFPUrl(fp_url), fp_url.indexOf("/convert") > -1) {
                    var restConvertOptions = fp.util.parseUrl(fp_url).params;
                    restConvertOptions = fp.conversions.mapRestParams(restConvertOptions), restConvertOptions.crop && fp.util.setDefault(restConvertOptions, "crop_first", !0);
                    for (var attr in restConvertOptions) fp.util.setDefault(options, attr, restConvertOptions[attr]);
                }
                fp.conversions.convert(fp.util.trimConvert(fp_url), options, onSuccess, onError, onProgress);
            }, constructWidget = function(base) {
                return fp.widgets.constructWidget(base);
            }, makeDropPane = function(div, options) {
                return fp.dragdrop.makeDropPane(div, options);
            }, setResponsiveOptions = function(options) {
                return fp.responsiveImages.setResponsiveOptions(options);
            }, responsive = function() {
                fp.responsiveImages.update.apply(null, arguments);
            }, logout = function(options) {
                options = options || {}, fp.ajax.get(fp.urls.LOGOUT, {
                    success: options.onSuccess,
                    error: options.onError,
                    withCredentials: !0
                });
            };
            return {
                setKey: setKey,
                setResponsiveOptions: setResponsiveOptions,
                pick: pick,
                pickFolder: pickFolder,
                pickMultiple: pickMultiple,
                pickAndStore: pickAndStore,
                read: read,
                write: write,
                writeUrl: writeUrl,
                "export": exportFn,
                exportFile: exportFn,
                processImage: processImage,
                store: store,
                storeUrl: storeUrl,
                stat: stat,
                metadata: stat,
                remove: remove,
                convert: convert,
                constructWidget: constructWidget,
                makeDropPane: makeDropPane,
                FilepickerException: FilepickerException,
                responsive: responsive,
                logout: logout,
                version: VERSION
            };
        }, !0), filepicker.extend("mimetypes", function() {
            var fp = this, mimetype_extension_map = {
                ".stl": "application/sla",
                ".hbs": "text/html",
                ".pdf": "application/pdf",
                ".jpg": "image/jpeg",
                ".jpeg": "image/jpeg",
                ".jpe": "image/jpeg",
                ".imp": "application/x-impressionist",
                ".vob": "video/dvd"
            }, mimetype_bad_array = [ "application/octet-stream", "application/download", "application/force-download", "octet/stream", "application/unknown", "application/x-download", "application/x-msdownload", "application/x-secure-download" ], getMimetype = function(file) {
                if (file.type) {
                    var type = file.type;
                    type = type.toLowerCase();
                    for (var bad_type = !1, n = 0; n < mimetype_bad_array.length; n++) bad_type = bad_type || type === mimetype_bad_array[n];
                    if (!bad_type) return file.type;
                }
                var filename = file.name || file.fileName, extension = filename.match(/\.\w*$/);
                return extension ? mimetype_extension_map[extension[0].toLowerCase()] || "" : file.type ? file.type : "";
            }, matchesMimetype = function(test, against) {
                if (!test) return "*/*" === against;
                test = fp.util.trim(test).toLowerCase(), against = fp.util.trim(against).toLowerCase();
                for (var n = 0; n < mimetype_bad_array.length; n++) if (test === mimetype_bad_array[n]) return !0;
                var test_parts = test.split("/"), against_parts = against.split("/");
                return "*" === against_parts[0] || against_parts[0] === test_parts[0] && ("*" === against_parts[1] || against_parts[1] === test_parts[1]);
            };
            return {
                getMimetype: getMimetype,
                matchesMimetype: matchesMimetype
            };
        }), filepicker.extend("services", function() {
            return {
                COMPUTER: 1,
                DROPBOX: 2,
                FACEBOOK: 3,
                GITHUB: 4,
                GMAIL: 5,
                IMAGE_SEARCH: 6,
                URL: 7,
                WEBCAM: 8,
                GOOGLE_DRIVE: 9,
                SEND_EMAIL: 10,
                INSTAGRAM: 11,
                FLICKR: 12,
                VIDEO: 13,
                EVERNOTE: 14,
                PICASA: 15,
                WEBDAV: 16,
                FTP: 17,
                ALFRESCO: 18,
                BOX: 19,
                SKYDRIVE: 20,
                GDRIVE: 21,
                CUSTOMSOURCE: 22,
                CLOUDDRIVE: 23,
                GENERIC: 24,
                CONVERT: 25,
                AUDIO: 26
            };
        }, !0), filepicker.extend("urls", function() {
            function constructModalQuery(options, id) {
                return "?key=" + fp.apikey + "&id=" + id + "&referrer=" + window.location.hostname + "&iframe=" + ("window" !== options.container) + "&version=" + fp.API_VERSION + (options.services ? "&s=" + options.services.join(",") : "") + (void 0 !== options.container ? "&container=" + options.container : "modal") + (options.openTo ? "&loc=" + options.openTo : "") + "&language=" + (options.language || fp.browser.getLanguage()) + (void 0 !== options.mobile ? "&mobile=" + options.mobile : "") + (void 0 !== options.backgroundUpload ? "&bu=" + options.backgroundUpload : "") + (options.cropRatio ? "&cratio=" + options.cropRatio : "") + (options.cropDim ? "&cdim=" + options.cropDim.join(",") : "") + (options.cropMax ? "&cmax=" + options.cropMax.join(",") : "") + (options.cropMin ? "&cmin=" + options.cropMin.join(",") : "") + (void 0 !== options.cropForce ? "&cforce=" + options.cropForce : "") + (void 0 !== options.hide ? "&hide=" + options.hide : "") + (options.customCss ? "&css=" + encodeURIComponent(options.customCss) : "") + (options.customText ? "&text=" + encodeURIComponent(options.customText) : "") + (options.imageMin ? "&imin=" + options.imageMin.join(",") : "") + (options.imageMax ? "&imax=" + options.imageMax.join(",") : "") + (options.imageDim ? "&idim=" + options.imageDim.join(",") : "") + (options.imageQuality ? "&iq=" + options.imageQuality : "") + (options.noFileReader ? "&nfl=" + options.noFileReader : "") + (fp.util.isCanvasSupported() ? "" : "&canvas=false") + (options.redirectUrl ? "&redirect_url=" + options.redirectUrl : "") + (options.showClose && "modal" !== options.container ? "&showClose=" + options.showClose : "") + constructSecurityQuery(options) + "&plugin=" + getPlugin();
            }
            function constructSecurityQuery(options) {
                return (options.signature ? "&signature=" + options.signature : "") + (options.policy ? "&policy=" + options.policy : "");
            }
            function getPlugin() {
                return filepicker.plugin || "js_lib";
            }
            function constructConversionsQuery(conversions) {
                conversions = conversions || [];
                var i, j, allowed = [];
                for (i in conversions) for (j in allowedConversions) conversions[i] === allowedConversions[j] && conversions.hasOwnProperty(i) && allowed.push(conversions[i]);
                return allowed.length || allowed.push("crop"), "&co=" + allowed.join(",");
            }
            var fp = this, base = "https://www.filepicker.io";
            __webpack_provided_window_dot_filepicker.hostname && (base = __webpack_provided_window_dot_filepicker.hostname);
            var dialog_base = base.replace("www", "dialog"), pick_url = dialog_base + "/dialog/open/", export_url = dialog_base + "/dialog/save/", convert_url = dialog_base + "/dialog/process/", pick_folder_url = dialog_base + "/dialog/folder/", store_url = base + "/api/store/", allowedConversions = [ "crop", "rotate", "filter" ], constructPickUrl = function(options, id, multiple) {
                return pick_url + constructModalQuery(options, id) + (multiple ? "&multi=" + !!multiple : "") + (void 0 !== options.mimetypes ? "&m=" + options.mimetypes.join(",") : "") + (void 0 !== options.extensions ? "&ext=" + options.extensions.join(",") : "") + (options.maxSize ? "&maxSize=" + options.maxSize : "") + (options.customSourceContainer ? "&customSourceContainer=" + options.customSourceContainer : "") + (options.customSourcePath ? "&customSourcePath=" + options.customSourcePath : "") + (options.maxFiles ? "&maxFiles=" + options.maxFiles : "") + (void 0 !== options.folders ? "&folders=" + options.folders : "") + (options.storeLocation ? "&storeLocation=" + options.storeLocation : "") + (options.storePath ? "&storePath=" + options.storePath : "") + (options.storeContainer ? "&storeContainer=" + options.storeContainer : "") + (options.storeRegion ? "&storeRegion=" + options.storeRegion : "") + (options.storeAccess ? "&storeAccess=" + options.storeAccess : "") + (options.webcam && options.webcam.webcamDim ? "&wdim=" + options.webcam.webcamDim.join(",") : "") + (options.webcamDim ? "&wdim=" + options.webcamDim.join(",") : "") + (options.webcam && options.webcam.videoRes ? "&videoRes=" + options.webcam.videoRes : "") + (options.webcam && options.webcam.videoLen ? "&videoLen=" + options.webcam.videoLen : "") + (options.webcam && options.webcam.audioLen ? "&audioLen=" + options.webcam.audioLen : "") + constructConversionsQuery(options.conversions);
            }, constructConvertUrl = function(options, id) {
                var url = options.convertUrl;
                return (url.indexOf("&") >= 0 || url.indexOf("?") >= 0) && (url = encodeURIComponent(url)), 
                convert_url + constructModalQuery(options, id) + "&curl=" + url + constructConversionsQuery(options.conversions);
            }, constructPickFolderUrl = function(options, id) {
                return pick_folder_url + constructModalQuery(options, id);
            }, constructExportUrl = function(url, options, id) {
                return (url.indexOf("&") >= 0 || url.indexOf("?") >= 0) && (url = encodeURIComponent(url)), 
                export_url + constructModalQuery(options, id) + "&url=" + url + (void 0 !== options.mimetype ? "&m=" + options.mimetype : "") + (void 0 !== options.extension ? "&ext=" + options.extension : "") + (options.suggestedFilename ? "&defaultSaveasName=" + options.suggestedFilename : "");
            }, constructStoreUrl = function(options) {
                return store_url + options.location + "?key=" + fp.apikey + (options.base64decode ? "&base64decode=true" : "") + (options.mimetype ? "&mimetype=" + options.mimetype : "") + (options.filename ? "&filename=" + encodeURIComponent(options.filename) : "") + (options.path ? "&path=" + options.path : "") + (options.container ? "&container=" + options.container : "") + (options.access ? "&access=" + options.access : "") + constructSecurityQuery(options) + "&plugin=" + getPlugin();
            }, constructWriteUrl = function(fp_url, options) {
                return fp_url + "?nonce=fp" + (options.base64decode ? "&base64decode=true" : "") + (options.mimetype ? "&mimetype=" + options.mimetype : "") + constructSecurityQuery(options) + "&plugin=" + getPlugin();
            }, constructHostCommFallback = function() {
                var parts = fp.util.parseUrl(window.location.href);
                return parts.origin + "/404";
            };
            return {
                BASE: base,
                DIALOG_BASE: dialog_base,
                API_COMM: base + "/dialog/comm_iframe/",
                COMM: dialog_base + "/dialog/comm_iframe/",
                FP_COMM_FALLBACK: dialog_base + "/dialog/comm_hash_iframe/",
                STORE: store_url,
                PICK: pick_url,
                EXPORT: export_url,
                LOGOUT: base + "/api/clients/unauth",
                constructPickUrl: constructPickUrl,
                constructConvertUrl: constructConvertUrl,
                constructPickFolderUrl: constructPickFolderUrl,
                constructExportUrl: constructExportUrl,
                constructWriteUrl: constructWriteUrl,
                constructStoreUrl: constructStoreUrl,
                constructHostCommFallback: constructHostCommFallback,
                getPlugin: getPlugin
            };
        }), filepicker.extend("ajax", function() {
            var fp = this, get_request = function(url, options) {
                options.method = "GET", make_request(url, options);
            }, post_request = function(url, options) {
                options.method = "POST", url += (url.indexOf("?") >= 0 ? "&" : "?") + "_cacheBust=" + fp.util.getId(), 
                make_request(url, options);
            }, toQueryString = function(object, base) {
                var queryString = [];
                for (var key in object) {
                    var value = object[key];
                    base && (key = base + ". + key + ");
                    var result;
                    switch (fp.util.typeOf(value)) {
                      case "object":
                        result = toQueryString(value, key);
                        break;

                      case "array":
                        for (var qs = {}, i = 0; i < value.length; i++) qs[i] = value[i];
                        result = toQueryString(qs, key);
                        break;

                      default:
                        result = key + "=" + encodeURIComponent(value);
                    }
                    null !== value && queryString.push(result);
                }
                return queryString.join("&");
            }, getXhr = function() {
                try {
                    return new window.XMLHttpRequest();
                } catch (e) {
                    try {
                        return new window.ActiveXObject("Msxml2.XMLHTTP");
                    } catch (e) {
                        try {
                            return new window.ActiveXObject("Microsoft.XMLHTTP");
                        } catch (e) {
                            return null;
                        }
                    }
                }
            }, make_request = function(url, options) {
                url = url || "";
                var method = options.method ? options.method.toUpperCase() : "POST", success = options.success || function() {}, error = options.error || function() {}, async = void 0 === options.async || options.async, data = options.data || null, processData = void 0 === options.processData || options.processData, headers = options.headers || {}, urlParts = fp.util.parseUrl(url), origin = window.location.protocol + "//" + window.location.host, crossdomain = origin !== urlParts.origin, finished = !1;
                url += (url.indexOf("?") >= 0 ? "&" : "?") + "plugin=" + fp.urls.getPlugin(), data && processData && (data = toQueryString(options.data));
                var xhr;
                if (options.xhr) xhr = options.xhr; else if (xhr = getXhr(), !xhr) return options.error("Ajax not allowed"), 
                xhr;
                if (crossdomain && window.XDomainRequest && !("withCredentials" in xhr)) return new XDomainAjax(url, options);
                options.progress && xhr.upload && xhr.upload.addEventListener("progress", function(e) {
                    e.lengthComputable && options.progress(Math.round(95 * e.loaded / e.total));
                }, !1);
                var onStateChange = function() {
                    if (4 == xhr.readyState && !finished) if (options.progress && options.progress(100), 
                    xhr.status >= 200 && xhr.status < 300) {
                        var resp = xhr.responseText;
                        if (options.json) try {
                            resp = fp.json.decode(resp);
                        } catch (e) {
                            return void onerror.call(xhr, "Invalid json: " + resp);
                        }
                        success(resp, xhr.status, xhr), finished = !0;
                    } else onerror.call(xhr, xhr.responseText), finished = !0;
                };
                xhr.onreadystatechange = onStateChange;
                var onerror = function(err) {
                    if (!finished) return options.progress && options.progress(100), finished = !0, 
                    400 == this.status ? void error("bad_params", this.status, this) : 403 == this.status ? void error("not_authorized", this.status, this) : 404 == this.status ? void error("not_found", this.status, this) : crossdomain ? 4 == this.readyState && 0 === this.status ? void error("CORS_not_allowed", this.status, this) : void error("CORS_error", this.status, this) : void error(err, this.status, this);
                };
                xhr.onerror = onerror, data && "GET" == method && (url += (url.indexOf("?") !== -1 ? "&" : "?") + data, 
                data = null), options.withCredentials && (xhr.withCredentials = !0), xhr.open(method, url, async), 
                options.json ? xhr.setRequestHeader("Accept", "application/json, text/javascript") : xhr.setRequestHeader("Accept", "text/javascript, text/html, application/xml, text/xml, */*");
                var contentType = headers["Content-Type"] || headers["content-type"];
                if (data && processData && ("POST" == method || "PUT" == method) && void 0 === contentType && xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8"), 
                headers) for (var key in headers) xhr.setRequestHeader(key, headers[key]);
                return xhr.send(data), xhr;
            }, XDomainAjax = function(url, options) {
                if (!window.XDomainRequest) return null;
                var method = options.method ? options.method.toUpperCase() : "POST", success = options.success || function() {}, error = options.error || function() {}, data = options.data || {};
                if ("http:" == window.location.protocol ? url = url.replace("https:", "http:") : "https:" == window.location.protocol && (url = url.replace("http:", "https:")), 
                options.async) throw new fp.FilepickerException("Asyncronous Cross-domain requests are not supported");
                "GET" !== method && "POST" !== method && (data._method = method, method = "POST"), 
                options.processData !== !1 && (data = data ? toQueryString(data) : null), data && "GET" == method && (url += (url.indexOf("?") >= 0 ? "&" : "?") + data, 
                data = null), url += (url.indexOf("?") >= 0 ? "&" : "?") + "_xdr=true&_cacheBust=" + fp.util.getId();
                var xdr = new window.XDomainRequest();
                return xdr.onload = function() {
                    var resp = xdr.responseText;
                    if (options.progress && options.progress(100), options.json) try {
                        resp = fp.json.decode(resp);
                    } catch (e) {
                        return void error("Invalid json: " + resp, 200, xdr);
                    }
                    success(resp, 200, xdr);
                }, xdr.onerror = function() {
                    options.progress && options.progress(100), error(xdr.responseText || "CORS_error", this.status || 500, this);
                }, xdr.onprogress = function() {}, xdr.ontimeout = function() {}, xdr.timeout = 3e4, 
                xdr.open(method, url, !0), xdr.send(data), xdr;
            };
            return {
                get: get_request,
                post: post_request,
                request: make_request
            };
        }), filepicker.extend("files", function() {
            var fp = this, readFromFPUrl = function(url, options, onSuccess, onError, onProgress) {
                var temp64 = void 0 === options.base64encode;
                temp64 && (options.base64encode = !0), options.base64encode = options.base64encode !== !1;
                var success = function(responseText) {
                    temp64 && (responseText = fp.base64.decode(responseText, !!options.asText)), onSuccess(responseText);
                };
                readFromUrl.call(this, url, options, success, onError, onProgress);
            }, readFromUrl = function(url, options, onSuccess, onError, onProgress) {
                options.cache !== !0 && (options._cacheBust = fp.util.getId()), fp.ajax.get(url, {
                    data: options,
                    headers: {
                        "X-NO-STREAM": !0
                    },
                    success: onSuccess,
                    error: function(msg, status, xhr) {
                        onError("CORS_not_allowed" === msg ? new fp.errors.FPError(113) : "CORS_error" === msg ? new fp.errors.FPError(114) : "not_found" === msg ? new fp.errors.FPError(115) : "bad_params" === msg ? new fp.errors.FPError(400) : "not_authorized" === msg ? new fp.errors.FPError(403) : new fp.errors.FPError(118));
                    },
                    progress: onProgress
                });
            }, readFromFile = function(file, options, onSuccess, onError, onProgress) {
                if (!(window.File && window.FileReader && window.FileList && window.Blob)) return onProgress(10), 
                void fp.files.storeFile(file, {}, function(fpfile) {
                    onProgress(50), fp.files.readFromFPUrl(fpfile.url, options, onSuccess, onError, function(progress) {
                        onProgress(50 + progress / 2);
                    });
                }, onError, function(progress) {
                    onProgress(progress / 2);
                });
                var base64encode = !!options.base64encode, asText = !!options.asText, reader = new FileReader();
                reader.onprogress = function(evt) {
                    evt.lengthComputable && onProgress(Math.round(evt.loaded / evt.total * 100));
                }, reader.onload = function(evt) {
                    onProgress(100), onSuccess(base64encode ? fp.base64.encode(evt.target.result, asText) : evt.target.result);
                }, reader.onerror = function(evt) {
                    switch (evt.target.error.code) {
                      case evt.target.error.NOT_FOUND_ERR:
                        onError(new fp.errors.FPError(115));
                        break;

                      case evt.target.error.NOT_READABLE_ERR:
                        onError(new fp.errors.FPError(116));
                        break;

                      case evt.target.error.ABORT_ERR:
                        onError(new fp.errors.FPError(117));
                        break;

                      default:
                        onError(new fp.errors.FPError(118));
                    }
                }, asText || !reader.readAsBinaryString ? reader.readAsText(file) : reader.readAsBinaryString(file);
            }, writeDataToFPUrl = function(fp_url, input, options, onSuccess, onError, onProgress) {
                var mimetype = options.mimetype || "text/plain";
                fp.ajax.post(fp.urls.constructWriteUrl(fp_url, options), {
                    headers: {
                        "Content-Type": mimetype
                    },
                    data: input,
                    processData: !1,
                    json: !0,
                    success: function(json) {
                        onSuccess(fp.util.standardizeFPFile(json));
                    },
                    error: function(msg, status, xhr) {
                        onError("not_found" === msg ? new fp.errors.FPError(121) : "bad_params" === msg ? new fp.errors.FPError(122) : "not_authorized" === msg ? new fp.errors.FPError(403) : new fp.errors.FPError(123));
                    },
                    progress: onProgress
                });
            }, writeFileInputToFPUrl = function(fp_url, input, options, onSuccess, onError, onProgress) {
                var error = function(msg, status, xhr) {
                    onError("not_found" === msg ? new fp.errors.FPError(121) : "bad_params" === msg ? new fp.errors.FPError(122) : "not_authorized" === msg ? new fp.errors.FPError(403) : new fp.errors.FPError(123));
                }, success = function(json) {
                    onSuccess(fp.util.standardizeFPFile(json));
                };
                uploadFile(input, fp.urls.constructWriteUrl(fp_url, options), success, error, onProgress);
            }, writeFileToFPUrl = function(fp_url, input, options, onSuccess, onError, onProgress) {
                var error = function(msg, status, xhr) {
                    onError("not_found" === msg ? new fp.errors.FPError(121) : "bad_params" === msg ? new fp.errors.FPError(122) : "not_authorized" === msg ? new fp.errors.FPError(403) : new fp.errors.FPError(123));
                }, success = function(json) {
                    onSuccess(fp.util.standardizeFPFile(json));
                };
                options.mimetype = input.type, uploadFile(input, fp.urls.constructWriteUrl(fp_url, options), success, error, onProgress);
            }, writeUrlToFPUrl = function(fp_url, input, options, onSuccess, onError, onProgress) {
                fp.ajax.post(fp.urls.constructWriteUrl(fp_url, options), {
                    data: {
                        url: input
                    },
                    json: !0,
                    success: function(json) {
                        onSuccess(fp.util.standardizeFPFile(json));
                    },
                    error: function(msg, status, xhr) {
                        onError("not_found" === msg ? new fp.errors.FPError(121) : "bad_params" === msg ? new fp.errors.FPError(122) : "not_authorized" === msg ? new fp.errors.FPError(403) : new fp.errors.FPError(123));
                    },
                    progress: onProgress
                });
            }, storeFileInput = function(input, options, onSuccess, onError, onProgress) {
                if (input.files) return void (0 === input.files.length ? onError(new fp.errors.FPError(115)) : storeFile(input.files[0], options, onSuccess, onError, onProgress));
                fp.util.setDefault(options, "location", "S3"), options.filename || (options.filename = input.value.replace("C:\\fakepath\\", "") || input.name);
                var old_name = input.name;
                input.name = "fileUpload", fp.iframeAjax.post(fp.urls.constructStoreUrl(options), {
                    data: input,
                    processData: !1,
                    json: !0,
                    success: function(json) {
                        input.name = old_name, onSuccess(fp.util.standardizeFPFile(json));
                    },
                    error: function(msg, status, xhr) {
                        onError("not_found" === msg ? new fp.errors.FPError(121) : "bad_params" === msg ? new fp.errors.FPError(122) : "not_authorized" === msg ? new fp.errors.FPError(403) : new fp.errors.FPError(123));
                    }
                });
            }, storeFile = function(input, options, onSuccess, onError, onProgress) {
                fp.util.setDefault(options, "location", "S3");
                var error = function(msg, status, xhr) {
                    "not_found" === msg ? onError(new fp.errors.FPError(121)) : "bad_params" === msg ? onError(new fp.errors.FPError(122)) : "not_authorized" === msg ? onError(new fp.errors.FPError(403)) : (fp.util.console.error(msg), 
                    onError(new fp.errors.FPError(123)));
                }, success = function(json) {
                    onSuccess(fp.util.standardizeFPFile(json));
                };
                options.filename || (options.filename = input.name || input.fileName), uploadFile(input, fp.urls.constructStoreUrl(options), success, error, onProgress);
            }, uploadFile = function(file, url, success, error, progress) {
                file.files && (file = file.files[0]);
                var html5Upload = !!window.FormData && !!window.XMLHttpRequest;
                if (html5Upload) {
                    var data = new window.FormData();
                    data.append("fileUpload", file), fp.ajax.post(url, {
                        json: !0,
                        processData: !1,
                        data: data,
                        success: success,
                        error: error,
                        progress: progress
                    });
                } else fp.iframeAjax.post(url, {
                    data: file,
                    json: !0,
                    success: success,
                    error: error
                });
            }, storeData = function(input, options, onSuccess, onError, onProgress) {
                fp.util.setDefault(options, "location", "S3"), fp.util.setDefault(options, "mimetype", "text/plain"), 
                fp.ajax.post(fp.urls.constructStoreUrl(options), {
                    headers: {
                        "Content-Type": options.mimetype
                    },
                    data: input,
                    processData: !1,
                    json: !0,
                    success: function(json) {
                        onSuccess(fp.util.standardizeFPFile(json));
                    },
                    error: function(msg, status, xhr) {
                        onError("not_found" === msg ? new fp.errors.FPError(121) : "bad_params" === msg ? new fp.errors.FPError(122) : "not_authorized" === msg ? new fp.errors.FPError(403) : new fp.errors.FPError(123));
                    },
                    progress: onProgress
                });
            }, storeUrl = function(input, options, onSuccess, onError, onProgress) {
                fp.util.setDefault(options, "location", "S3"), fp.ajax.post(fp.urls.constructStoreUrl(options), {
                    data: {
                        url: fp.util.getFPUrl(input)
                    },
                    json: !0,
                    success: function(json) {
                        onSuccess(fp.util.standardizeFPFile(json));
                    },
                    error: function(msg, status, xhr) {
                        onError("not_found" === msg ? new fp.errors.FPError(151) : "bad_params" === msg ? new fp.errors.FPError(152) : "not_authorized" === msg ? new fp.errors.FPError(403) : new fp.errors.FPError(153));
                    },
                    progress: onProgress
                });
            }, stat = function(fp_url, options, onSuccess, onError) {
                var dateparams = [ "uploaded", "modified", "created" ];
                options.cache !== !0 && (options._cacheBust = fp.util.getId()), fp.ajax.get(fp_url + "/metadata", {
                    json: !0,
                    data: options,
                    success: function(metadata) {
                        for (var i = 0; i < dateparams.length; i++) metadata[dateparams[i]] && (metadata[dateparams[i]] = new Date(metadata[dateparams[i]]));
                        onSuccess(metadata);
                    },
                    error: function(msg, status, xhr) {
                        onError("not_found" === msg ? new fp.errors.FPError(161) : "bad_params" === msg ? new fp.errors.FPError(400) : "not_authorized" === msg ? new fp.errors.FPError(403) : new fp.errors.FPError(162));
                    }
                });
            }, remove = function(fp_url, options, onSuccess, onError) {
                options.key = fp.apikey, fp.ajax.post(fp_url + "/remove", {
                    data: options,
                    success: function(resp) {
                        onSuccess();
                    },
                    error: function(msg, status, xhr) {
                        onError("not_found" === msg ? new fp.errors.FPError(171) : "bad_params" === msg ? new fp.errors.FPError(400) : "not_authorized" === msg ? new fp.errors.FPError(403) : new fp.errors.FPError(172));
                    }
                });
            };
            return {
                readFromUrl: readFromUrl,
                readFromFile: readFromFile,
                readFromFPUrl: readFromFPUrl,
                writeDataToFPUrl: writeDataToFPUrl,
                writeFileToFPUrl: writeFileToFPUrl,
                writeFileInputToFPUrl: writeFileInputToFPUrl,
                writeUrlToFPUrl: writeUrlToFPUrl,
                storeFileInput: storeFileInput,
                storeFile: storeFile,
                storeUrl: storeUrl,
                storeData: storeData,
                stat: stat,
                remove: remove
            };
        }), filepicker.extend("iframeAjax", function() {
            var fp = this, IFRAME_ID = "ajax_iframe", queue = [], running = !1, get_request = function(url, options) {
                options.method = "GET", make_request(url, options);
            }, post_request = function(url, options) {
                options.method = "POST", url += (url.indexOf("?") >= 0 ? "&" : "?") + "_cacheBust=" + fp.util.getId(), 
                make_request(url, options);
            }, runQueue = function() {
                if (queue.length > 0) {
                    var next = queue.shift();
                    make_request(next.url, next.options);
                }
            }, make_request = function(url, options) {
                if (running) return void queue.push({
                    url: url,
                    options: options
                });
                url += (url.indexOf("?") >= 0 ? "&" : "?") + "plugin=" + fp.urls.getPlugin() + "&_cacheBust=" + fp.util.getId(), 
                url += "&Content-Type=text%2Fhtml", fp.comm.openChannel();
                var uploadIFrame;
                try {
                    uploadIFrame = document.createElement('<iframe name="' + IFRAME_ID + '">');
                } catch (ex) {
                    uploadIFrame = document.createElement("iframe");
                }
                uploadIFrame.id = uploadIFrame.name = IFRAME_ID, uploadIFrame.style.display = "none";
                var release = function() {
                    running = !1;
                };
                uploadIFrame.attachEvent ? (uploadIFrame.attachEvent("onload", release), uploadIFrame.attachEvent("onerror", release)) : uploadIFrame.onerror = uploadIFrame.onload = release, 
                uploadIFrame.id = IFRAME_ID, uploadIFrame.name = IFRAME_ID, uploadIFrame.style.display = "none", 
                uploadIFrame.onerror = uploadIFrame.onload = function() {
                    running = !1;
                }, document.body.appendChild(uploadIFrame), fp.handlers.attach("upload", getReceiveUploadMessage(options));
                var form = document.createElement("form");
                form.method = options.method || "GET", form.action = url, form.target = IFRAME_ID;
                var data = options.data;
                (fp.util.isFileInputElement(data) || fp.util.isFile(data)) && (form.encoding = form.enctype = "multipart/form-data"), 
                document.body.appendChild(form);
                var input;
                if (fp.util.isFile(data)) {
                    var file_input = getInputForFile(data);
                    if (!file_input) throw fp.FilepickerException("Couldn't find corresponding file input.");
                    data = {
                        fileUpload: file_input
                    };
                } else fp.util.isFileInputElement(data) ? (input = data, data = {}, data.fileUpload = input) : data && fp.util.isElement(data) && "INPUT" === data.tagName ? (input = data, 
                data = {}, data[input.name] = input) : options.processData !== !1 && (data = {
                    data: data
                });
                data.format = "iframe";
                var input_cache = {};
                for (var key in data) {
                    var val = data[key];
                    if (fp.util.isElement(val) && "INPUT" === val.tagName) input_cache[key] = {
                        par: val.parentNode,
                        sib: val.nextSibling,
                        name: val.name,
                        input: val,
                        focused: val === document.activeElement
                    }, val.name = key, form.appendChild(val); else {
                        var input_val = document.createElement("input");
                        input_val.name = key, input_val.value = val, form.appendChild(input_val);
                    }
                }
                running = !0, window.setTimeout(function() {
                    form.submit();
                    for (var cache_key in input_cache) {
                        var cache_val = input_cache[cache_key];
                        cache_val.par.insertBefore(cache_val.input, cache_val.sib), cache_val.input.name = cache_val.name, 
                        cache_val.focused && cache_val.input.focus();
                    }
                    form.parentNode.removeChild(form);
                }, 1);
            }, getReceiveUploadMessage = function(options) {
                var success = options.success || function() {}, error = options.error || function() {}, handler = function(data) {
                    if ("Upload" === data.type) {
                        running = !1;
                        var response = data.payload;
                        response.error ? error(response.error) : success(response), fp.handlers.detach("upload"), 
                        runQueue();
                    }
                };
                return handler;
            }, getInputForFile = function(file) {
                for (var inputs = document.getElementsByTagName("input"), i = 0; i < inputs.length; i++) {
                    var input = inputs[0];
                    if ("file" === input.type && input.files && input.files.length) for (var j = 0; j < input.files.length; j++) if (input.files[j] === file) return input;
                }
                return null;
            };
            return {
                get: get_request,
                post: post_request,
                request: make_request
            };
        }), filepicker.extend("base64", function() {
            var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode = function(input, utf8encode) {
                utf8encode = utf8encode || void 0 === utf8encode;
                var chr1, chr2, chr3, enc1, enc2, enc3, enc4, output = "", i = 0;
                for (utf8encode && (input = _utf8_encode(input)); i < input.length; ) chr1 = input.charCodeAt(i), 
                chr2 = input.charCodeAt(i + 1), chr3 = input.charCodeAt(i + 2), i += 3, enc1 = chr1 >> 2, 
                enc2 = (3 & chr1) << 4 | chr2 >> 4, enc3 = (15 & chr2) << 2 | chr3 >> 6, enc4 = 63 & chr3, 
                isNaN(chr2) ? enc3 = enc4 = 64 : isNaN(chr3) && (enc4 = 64), output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
                return output;
            }, decode = function(input, utf8decode) {
                utf8decode = utf8decode || void 0 === utf8decode;
                var chr1, chr2, chr3, enc1, enc2, enc3, enc4, output = "", i = 0;
                for (input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < input.length; ) enc1 = _keyStr.indexOf(input.charAt(i)), 
                enc2 = _keyStr.indexOf(input.charAt(i + 1)), enc3 = _keyStr.indexOf(input.charAt(i + 2)), 
                enc4 = _keyStr.indexOf(input.charAt(i + 3)), i += 4, chr1 = enc1 << 2 | enc2 >> 4, 
                chr2 = (15 & enc2) << 4 | enc3 >> 2, chr3 = (3 & enc3) << 6 | enc4, output += String.fromCharCode(chr1), 
                64 != enc3 && (output += String.fromCharCode(chr2)), 64 != enc4 && (output += String.fromCharCode(chr3));
                return utf8decode && (output = _utf8_decode(output)), output;
            }, _utf8_encode = function(string) {
                string = string.replace(/\r\n/g, "\n");
                for (var utftext = "", n = 0; n < string.length; n++) {
                    var c = string.charCodeAt(n);
                    c < 128 ? utftext += String.fromCharCode(c) : c > 127 && c < 2048 ? (utftext += String.fromCharCode(c >> 6 | 192), 
                    utftext += String.fromCharCode(63 & c | 128)) : (utftext += String.fromCharCode(c >> 12 | 224), 
                    utftext += String.fromCharCode(c >> 6 & 63 | 128), utftext += String.fromCharCode(63 & c | 128));
                }
                return utftext;
            }, _utf8_decode = function(utftext) {
                for (var string = "", i = 0, c = 0, c2 = 0; i < utftext.length; ) c = utftext.charCodeAt(i), 
                c < 128 ? (string += String.fromCharCode(c), i++) : c > 191 && c < 224 ? (c2 = utftext.charCodeAt(i + 1), 
                string += String.fromCharCode((31 & c) << 6 | 63 & c2), i += 2) : (c2 = utftext.charCodeAt(i + 1), 
                c3 = utftext.charCodeAt(i + 2), string += String.fromCharCode((15 & c) << 12 | (63 & c2) << 6 | 63 & c3), 
                i += 3);
                return string;
            };
            return {
                encode: encode,
                decode: decode
            };
        }, !0), filepicker.extend("browser", function() {
            var isIOS = function() {
                return !!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i));
            }, isAndroid = function() {
                return !!navigator.userAgent.match(/Android/i);
            }, getLanguage = function() {
                var language = window.navigator.userLanguage || window.navigator.language;
                return void 0 === language && (language = "en"), language = language.replace("-", "_").toLowerCase();
            };
            return {
                getLanguage: getLanguage,
                openInModal: function() {
                    return !(isIOS() || isAndroid()) || !!window.navigator.standalone;
                },
                isMobile: function() {
                    return isIOS() || isAndroid();
                }
            };
        }), filepicker.extend("conversionsUtil", function() {
            var fp = this, CONVERSION_DOMAIN = fp.urls.BASE.replace("www", "process") + "/", parseConversionUrl = function(processUrl) {
                if (!processUrl) return {
                    url: null,
                    optionsDict: {}
                };
                processUrl = processUrl.replace(CONVERSION_DOMAIN, "");
                var originalUrl = processUrl.substring(processUrl.indexOf("/http") + 1);
                processUrl = processUrl.replace("/" + originalUrl, "");
                var apikey = processUrl.substring(0, processUrl.indexOf("/"));
                processUrl = processUrl.replace(apikey + "/", "");
                var majorOption, minorOptions, minorOption, i, j, segments = processUrl.split("/"), optionsDict = {};
                for (i in segments) if (majorOption = segments[i].split("="), majorOption.length > 1) {
                    optionsDict[majorOption[0]] = {}, minorOptions = majorOption[1].split(",");
                    for (j in minorOptions) minorOption = minorOptions[j].split(":"), minorOption.length > 1 && (optionsDict[majorOption[0]][minorOption[0]] = minorOption[1]);
                } else segments[i] && (optionsDict[segments[i]] = null);
                return {
                    url: originalUrl,
                    apikey: apikey,
                    optionsDict: optionsDict
                };
            }, buildConversionUrl = function(originalUrl, optionsDict, apikey) {
                var majorOption, minorOption, length, conversionUrl = CONVERSION_DOMAIN + apikey;
                optionsDict = optionsDict || {};
                for (majorOption in optionsDict) {
                    conversionUrl += "/" + majorOption, length = fp.util.objectKeys(optionsDict[majorOption] || {}).length, 
                    length && (conversionUrl += "=");
                    for (minorOption in optionsDict[majorOption]) conversionUrl += minorOption + ":" + optionsDict[majorOption][minorOption], 
                    0 !== --length && (conversionUrl += ",");
                }
                return conversionUrl += "/" + originalUrl;
            };
            return {
                CONVERSION_DOMAIN: CONVERSION_DOMAIN,
                parseUrl: parseConversionUrl,
                buildUrl: buildConversionUrl
            };
        }), filepicker.extend("json", function() {
            var fp = this, special = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, escape = function(chr) {
                return special[chr] || "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).slice(-4);
            }, validate = function(string) {
                return string = string.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""), 
                /^[\],:{}\s]*$/.test(string);
            }, encode = function(obj) {
                if (window.JSON && window.JSON.stringify) return window.JSON.stringify(obj);
                obj && obj.toJSON && (obj = obj.toJSON());
                var string = [];
                switch (fp.util.typeOf(obj)) {
                  case "string":
                    return '"' + obj.replace(/[\x00-\x1f\\"]/g, escape) + '"';

                  case "array":
                    for (var i = 0; i < obj.length; i++) string.push(encode(obj[i]));
                    return "[" + string + "]";

                  case "object":
                  case "hash":
                    var json, key;
                    for (key in obj) json = encode(obj[key]), json && string.push(encode(key) + ":" + json), 
                    json = null;
                    return "{" + string + "}";

                  case "number":
                  case "boolean":
                    return "" + obj;

                  case "null":
                    return "null";

                  default:
                    return "null";
                }
                return null;
            }, decode = function(string, secure) {
                if (!string || "string" !== fp.util.typeOf(string)) return null;
                if (window.JSON && window.JSON.parse) return window.JSON.parse(string);
                if (secure && !validate(string)) throw new Error("JSON could not decode the input; security is enabled and the value is not secure.");
                return eval("(" + string + ")");
            };
            return {
                validate: validate,
                encode: encode,
                stringify: encode,
                decode: decode,
                parse: decode
            };
        }), filepicker.extend("util", function() {
            var trim = function(string) {
                return string.replace(/^\s+|\s+$/g, "");
            }, trimConvert = function(url) {
                return url.replace(/\/convert\b.*/, "");
            }, URL_REGEX = /^(http|https)\:.*\/\//i, isUrl = function(string) {
                return !!string.match(URL_REGEX);
            }, parseUrl = function(url) {
                url && "/" !== url.charAt(0) || (url = window.location.protocol + "//" + window.location.host + url);
                var a = document.createElement("a");
                a.href = url;
                var host = a.hostname.indexOf(":") === -1 ? a.hostname : a.host, ret = {
                    source: url,
                    protocol: a.protocol.replace(":", ""),
                    host: host,
                    port: a.port,
                    query: a.search,
                    params: function() {
                        for (var s, ret = {}, seg = a.search.replace(/^\?/, "").split("&"), len = seg.length, i = 0; i < len; i++) seg[i] && (s = seg[i].split("="), 
                        ret[s[0]] = s[1]);
                        return ret;
                    }(),
                    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [ void 0, "" ])[1],
                    hash: a.hash.replace("#", ""),
                    path: a.pathname.replace(/^([^\/])/, "/$1"),
                    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [ void 0, "" ])[1],
                    segments: a.pathname.replace(/^\//, "").split("/")
                };
                return ret.origin = ret.protocol + "://" + ret.host + (ret.port ? ":" + ret.port : ""), 
                ret.rawUrl = (ret.origin + ret.path).replace("/convert", ""), ret;
            }, endsWith = function(str, suffix) {
                return str.indexOf(suffix, str.length - suffix.length) !== -1;
            }, appendQueryToUrl = function(url, key, value) {
                return url + (url.indexOf("?") >= 0 ? "&" : "?") + key + "=" + value;
            };
            return {
                trim: trim,
                trimConvert: trimConvert,
                parseUrl: parseUrl,
                isUrl: isUrl,
                endsWith: endsWith,
                appendQueryToUrl: appendQueryToUrl
            };
        }), filepicker.extend("util", function() {
            var fp = this, isArray = function(o) {
                return o && "[object Array]" === Object.prototype.toString.call(o);
            }, isFile = function(o) {
                return o && ("[object File]" === Object.prototype.toString.call(o) || "[object Blob]" === Object.prototype.toString.call(o));
            }, isElement = function(o) {
                return "object" == typeof window.HTMLElement ? o instanceof window.HTMLElement : o && "object" == typeof o && 1 === o.nodeType && "string" == typeof o.nodeName;
            }, isFileInputElement = function(o) {
                return isElement(o) && "INPUT" === o.tagName && "file" === o.type;
            }, typeOf = function(value) {
                return null === value ? "null" : isArray(value) ? "array" : isFile(value) ? "file" : typeof value;
            }, getId = function() {
                var d = new Date();
                return d.getTime().toString();
            }, setDefault = function(obj, key, def) {
                void 0 === obj[key] && (obj[key] = def);
            }, addOnLoad = function(func) {
                if (window.jQuery) window.jQuery(function() {
                    func();
                }); else {
                    var evnt = "load";
                    if (window.addEventListener) window.addEventListener(evnt, func, !1); else if (window.attachEvent) window.attachEvent("on" + evnt, func); else if (window.onload) {
                        var curr = window.onload;
                        window.onload = function() {
                            curr(), func();
                        };
                    } else window.onload = func;
                }
            }, isFPUrl = function(url) {
                return "string" == typeof url && url.match(fp.urls.BASE + "/api/file/");
            }, isFPUrlCdn = function(url) {
                return "string" == typeof url && url.match("/api/file/");
            }, getFPUrl = function(url) {
                if ("string" == typeof url) {
                    var matched = url.match(/(?:cdn.filestackcontent.com|cdn.filepicker.io)[\S]*\/([\S]{20,})/);
                    if (matched && matched.length > 1) return fp.urls.BASE + "/api/file/" + matched[1];
                }
                return url;
            }, consoleWrap = function(fn) {
                return function() {
                    if (window.console && "function" == typeof window.console[fn]) try {
                        window.console[fn].apply(window.console, arguments);
                    } catch (e) {
                        window.alert(Array.prototype.join.call(arguments, ","));
                    }
                };
            }, console = {};
            console.log = consoleWrap("log"), console.error = consoleWrap("error");
            var clone = function(o) {
                var ret = {};
                for (var key in o) ret[key] = o[key];
                return ret;
            }, standardizeFPFile = function(json) {
                var fpfile = {};
                return fpfile.url = json.url, fpfile.filename = json.filename || json.name, fpfile.mimetype = json.mimetype || json.type, 
                fpfile.size = json.size, fpfile.key = json.key || json.s3_key, fpfile.isWriteable = !(!json.isWriteable && !json.writeable), 
                fpfile;
            }, isCanvasSupported = function() {
                try {
                    var elem = document.createElement("canvas");
                    return !(!elem.getContext || !elem.getContext("2d"));
                } catch (err) {
                    return !1;
                }
            }, extend = function(obj1, obj2) {
                for (var i in obj1) obj1.hasOwnProperty(i) && (obj2[i] = obj1[i]);
                return obj2;
            }, checkApiKey = function() {
                if (!fp.apikey) throw new fp.FilepickerException("API Key not found");
            }, objectKeys = function(obj) {
                return "function" != typeof Object.keys ? function(obj) {
                    var keys = [];
                    for (var i in obj) obj.hasOwnProperty(i) && keys.push(i);
                    return keys;
                } : Object.keys(obj);
            };
            return {
                isArray: isArray,
                isFile: isFile,
                isElement: isElement,
                isFileInputElement: isFileInputElement,
                getId: getId,
                setDefault: setDefault,
                typeOf: typeOf,
                addOnLoad: addOnLoad,
                isFPUrl: isFPUrl,
                getFPUrl: getFPUrl,
                isFPUrlCdn: isFPUrlCdn,
                console: console,
                clone: clone,
                standardizeFPFile: standardizeFPFile,
                isCanvasSupported: isCanvasSupported,
                extend: extend,
                checkApiKey: checkApiKey,
                objectKeys: objectKeys
            };
        }), filepicker.extend("windowUtils", function() {
            function getWidth() {
                return document.documentElement.clientWidth || document.body && document.body.clientWidth || 1024;
            }
            function getHeight() {
                return document.documentElement.clientHeight || document.body && document.body.clientHeight || 768;
            }
            return {
                getWidth: getWidth,
                getHeight: getHeight
            };
        }), filepicker.extend("dragdrop", function() {
            var fp = this, canDragDrop = function() {
                return (!!window.FileReader || navigator.userAgent.indexOf("Safari") >= 0) && "draggable" in document.createElement("span");
            }, makeDropPane = function(div, options) {
                function onSuccessSrcUpload(blob) {
                    var successHandlerForOneFile = getSuccessHandler(0, 1), blobToCheck = fp.util.clone(blob);
                    blobToCheck.name = blobToCheck.filename, verifyUpload([ blobToCheck ]) ? successHandlerForOneFile(blob) : fp.files.remove(blob.url, store_options, function() {}, function() {});
                }
                function uploadDroppedFiles(files) {
                    var i, total = files.length;
                    if (verifyUpload(files)) for (onStart(files), div.setAttribute("disabled", "disabled"), 
                    i = 0; i < files.length; i++) fp.store(files[i], store_options, getSuccessHandler(i, total), errorHandler, getProgressHandler(i, total));
                }
                function uploadImageSrc(imageSrc) {
                    var progressHandlerForOneFile = getProgressHandler(0, 1);
                    fp.storeUrl(imageSrc, onSuccessSrcUpload, errorHandler, progressHandlerForOneFile);
                }
                function isFolderDropped(event) {
                    var entry, items, i;
                    if (event.dataTransfer.items) for (items = event.dataTransfer.items, i = 0; i < items.length; i++) if (entry = items[i] && items[i].webkitGetAsEntry ? items[i].webkitGetAsEntry() : void 0, 
                    entry && entry.isDirectory) return onError("WrongType", "Uploading a folder is not allowed"), 
                    !0;
                    return !1;
                }
                var err = "No DOM element found to create drop pane";
                if (!div) throw new fp.FilepickerException(err);
                if (div.jquery) {
                    if (0 === div.length) throw new fp.FilepickerException(err);
                    div = div[0];
                }
                if (!canDragDrop()) return fp.util.console.error("Your browser doesn't support drag-drop functionality"), 
                !1;
                options = options || {};
                var dragEnter = options.dragEnter || function() {}, dragLeave = options.dragLeave || function() {}, onStart = options.onStart || function() {}, onSuccess = options.onSuccess || function() {}, onError = options.onError || function() {}, onProgress = options.onProgress || function() {}, mimetypes = options.mimetypes;
                mimetypes || (mimetypes = options.mimetype ? [ options.mimetype ] : [ "*/*" ]), 
                "string" === fp.util.typeOf(mimetypes) && (mimetypes = mimetypes.split(","));
                var extensions = options.extensions;
                if (extensions || options.extension && (extensions = [ options.extension ]), "string" === fp.util.typeOf(extensions) && (extensions = extensions.replace(/ /g, "").split(",")), 
                extensions) for (var i = 0; i < extensions.length; i++) extensions[i] = extensions[i].toLowerCase();
                var store_options = {
                    location: options.location,
                    path: options.path,
                    container: options.container,
                    access: options.access,
                    policy: options.policy,
                    signature: options.signature
                }, enabled = function() {
                    return div && "disabled" !== (div.getAttribute("disabled") || "enabled");
                };
                div.addEventListener("dragenter", function(e) {
                    return enabled() && dragEnter(), e.stopPropagation(), e.preventDefault(), !1;
                }, !1), div.addEventListener("dragleave", function(e) {
                    return enabled() && dragLeave(), e.stopPropagation(), e.preventDefault(), !1;
                }, !1), div.addEventListener("dragover", function(e) {
                    return e.dataTransfer.dropEffect = "copy", e.preventDefault(), !1;
                }, !1), div.addEventListener("drop", function(e) {
                    if (e.stopPropagation(), e.preventDefault(), !enabled()) return !1;
                    if (isFolderDropped(e)) return !1;
                    var files = e.dataTransfer.files, imageSrc = getImageSrcDrop(e.dataTransfer);
                    return files.length ? uploadDroppedFiles(files) : imageSrc ? uploadImageSrc(imageSrc) : onError("NoFilesFound", "No files uploaded"), 
                    !1;
                });
                var reenablePane = function() {
                    div.setAttribute("disabled", "enabled"), window.$ && window.$(div).prop("disabled", !1);
                }, progresses = {}, response = [], getSuccessHandler = function(i, total) {
                    return function(fpfile) {
                        options.multiple ? (response.push(fpfile), response.length === total ? (onSuccess(response), 
                        response = [], progresses = {}) : (progresses[i] = 100, updateProgress(total))) : onSuccess([ fpfile ]), 
                        reenablePane();
                    };
                }, errorHandler = function(err) {
                    onError("UploadError", err.toString()), reenablePane();
                }, getProgressHandler = function(i, total) {
                    return function(percent) {
                        progresses[i] = percent, updateProgress(total);
                    };
                }, updateProgress = function(totalCount) {
                    var totalProgress = 0;
                    for (var i in progresses) totalProgress += progresses[i];
                    var percentage = totalProgress / totalCount;
                    onProgress(percentage);
                }, verifyUpload = function(files) {
                    if (files.length > 0) {
                        if (files.length > 1 && !options.multiple) return onError("TooManyFiles", "Only one file at a time"), 
                        !1;
                        if (options.maxFiles > 0 && files.length > options.maxFiles) return onError("TooManyFiles", "Only " + options.maxFiles + " files at a time"), 
                        !1;
                        for (var found, file, filename, i = 0; i < files.length; i++) {
                            found = !1, file = files[i], filename = file.name || file.fileName || "Unknown file";
                            for (var j = 0; j < mimetypes.length; j++) {
                                var mimetype = fp.mimetypes.getMimetype(file);
                                found = found || fp.mimetypes.matchesMimetype(mimetype, mimetypes[j]);
                            }
                            if (!found) return onError("WrongType", filename + " isn't the right type of file"), 
                            !1;
                            if (extensions) {
                                for (found = !1, j = 0; j < extensions.length; j++) found = found || fp.util.endsWith(filename, extensions[j]);
                                if (!found) return onError("WrongType", filename + " isn't the right type of file"), 
                                !1;
                            }
                            if (file.size && options.maxSize && file.size > options.maxSize) return onError("WrongSize", filename + " is too large (" + file.size + " Bytes)"), 
                            !1;
                        }
                        return !0;
                    }
                    return onError("NoFilesFound", "No files uploaded"), !1;
                }, getImageSrcDrop = function(dataTransfer) {
                    var url, matched;
                    if (dataTransfer && "function" == typeof dataTransfer.getData) {
                        url = dataTransfer.getData("text");
                        try {
                            url = url || dataTransfer.getData("text/html");
                        } catch (e) {
                            fp.util.console.error(e);
                        }
                        url && !fp.util.isUrl(url) && (matched = url.match(/<img.*?src="(.*?)"/i), url = matched && matched.length > 1 ? matched[1] : null);
                    }
                    return url;
                };
                return !0;
            };
            return {
                enabled: canDragDrop,
                makeDropPane: makeDropPane
            };
        }), filepicker.extend("responsiveImages", function() {
            function activate() {
                constructAll(), addWindowResizeEvent(reloadWithDebounce);
            }
            function deactivate() {
                removeWindowResizeEvent(reloadWithDebounce);
            }
            function update(element) {
                if (void 0 !== element) {
                    if ("IMG" !== element.nodeName) throw new fp.FilepickerException("Passed object is not an image");
                    construct(element);
                } else constructAll(!0);
            }
            function constructAll(forceConstruct) {
                var element, i, responsiveImages = document.querySelectorAll("img[data-fp-src]");
                for (i = 0; i < responsiveImages.length; i++) element = responsiveImages[i], (shouldConstruct(element) || forceConstruct === !0) && construct(element);
            }
            function shouldConstruct(image) {
                var imageSrc = getSrcAttr(image), changeOnResize = getFpOnResizeAttr(image) || getResponsiveOptions().onResize || "all";
                if (!imageSrc || "all" === changeOnResize) return !0;
                if ("none" === changeOnResize) return !1;
                var shouldBeEnlarged = getCurrentResizeParams(imageSrc).width < getElementDims(image).width;
                return !!(shouldBeEnlarged && "up" === changeOnResize || !shouldBeEnlarged && "down" === changeOnResize);
            }
            function getElementDims(elem) {
                var dims = {};
                return null === elem.parentNode ? (dims.width = fp.windowUtils.getWidth(), dims.height = fp.windowUtils.getWidth(), 
                dims) : elem.alt && !elem.fpAltCheck ? (elem.parentNode.fpAltCheck = !0, getElementDims(elem.parentNode)) : (dims.width = elem.offsetWidth, 
                dims.height = elem.offsetHeight, dims.width ? dims : getElementDims(elem.parentNode));
            }
            function replaceSrc(elem, newSrc) {
                var previousSrc = getSrcAttr(elem) || getFpSrcAttr(elem);
                previousSrc !== newSrc && (elem.src = newSrc, previousSrc && (elem.onerror = function() {
                    elem.src = previousSrc, elem.onerror = null;
                }));
            }
            function getFpOnResizeAttr(elem) {
                return elem.getAttribute("data-fp-on-resize");
            }
            function getFpPixelRoundAttr(elem) {
                return elem.getAttribute("data-fp-pixel-round");
            }
            function getSrcAttr(elem) {
                return elem.getAttribute("src");
            }
            function getFpSrcAttr(elem) {
                return elem.getAttribute("data-fp-src");
            }
            function getFpKeyAttr(elem) {
                return elem.getAttribute("data-fp-apikey");
            }
            function getFpSignatureAttr(elem) {
                return elem.getAttribute("data-fp-signature");
            }
            function getFpPolicyAttr(elem) {
                return elem.getAttribute("data-fp-policy");
            }
            function getCurrentResizeParams(url) {
                return fp.conversionsUtil.parseUrl(url).optionsDict.resize || {};
            }
            function construct(elem) {
                var url = getFpSrcAttr(elem) || getSrcAttr(elem), apikey = getFpKeyAttr(elem) || fp.apikey, responsiveOptions = getResponsiveOptions();
                fp.apikey || (fp.setKey(apikey), fp.util.checkApiKey()), replaceSrc(elem, fp.conversionsUtil.buildUrl(url, constructParams(elem, responsiveOptions), apikey));
            }
            function constructParams(elem, responsiveOptions) {
                responsiveOptions = responsiveOptions || {};
                var dims = getElementDims(elem), pixelRound = getFpPixelRoundAttr(elem) || responsiveOptions.pixelRound || 10, params = {
                    resize: {
                        width: roundWithStep(dims.width, pixelRound)
                    }
                }, signature = responsiveOptions.signature || getFpSignatureAttr(elem);
                return signature && (params.security = {
                    signature: signature,
                    policy: responsiveOptions.policy || getFpPolicyAttr(elem)
                }), params;
            }
            function debounce(func, wait) {
                var timeout;
                return function() {
                    var context = this, args = arguments, later = function() {
                        timeout = null, func.apply(context, args);
                    };
                    clearTimeout(timeout), timeout = setTimeout(later, wait);
                };
            }
            function addWindowResizeEvent(onWindowResized) {
                window.addEventListener ? window.addEventListener("resize", onWindowResized, !1) : window.attachEvent && window.attachEvent("onresize", onWindowResized);
            }
            function removeWindowResizeEvent(onWindowResized) {
                window.removeEventListener ? window.removeEventListener("resize", onWindowResized, !1) : window.detachEvent && window.detachEvent("onresize", onWindowResized);
            }
            function getResponsiveOptions() {
                return fp.responsiveOptions || {};
            }
            function setResponsiveOptions(options) {
                if (options = options || {}, "object" != typeof options) throw new fp.FilepickerException("Responsive options must be an object.");
                fp.responsiveOptions = options;
            }
            function roundWithStep(value, round) {
                var pixelRounding = 0 === round ? 1 : round;
                return Math.ceil(value / pixelRounding) * pixelRounding;
            }
            var fp = this, WINDOW_RESIZE_TIMEOUT = 200, reloadWithDebounce = debounce(function() {
                constructAll();
            }, WINDOW_RESIZE_TIMEOUT);
            return {
                activate: activate,
                deactivate: deactivate,
                update: update,
                setResponsiveOptions: setResponsiveOptions,
                getResponsiveOptions: getResponsiveOptions,
                getElementDims: getElementDims,
                replaceSrc: replaceSrc,
                getCurrentResizeParams: getCurrentResizeParams,
                construct: construct,
                constructParams: constructParams,
                shouldConstruct: shouldConstruct,
                roundWithStep: roundWithStep,
                addWindowResizeEvent: addWindowResizeEvent,
                removeWindowResizeEvent: removeWindowResizeEvent
            };
        }), filepicker.extend("widgets", function() {
            function appendStyle() {
                try {
                    var css = '.fp__btn{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;height:34px;padding:4px 30px 5px 40px;position:relative;margin-bottom:0;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Open Sans", sans-serif;font-size:12px;font-weight:600;line-height:1.42857143;color:#fff;text-align:center;white-space:nowrap;background:#ef4925;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAYAAABLy77vAAAABGdBTUEAALGPC/xhBQAAAJRJREFUOBHNUcEWgCAIy14fbl9egK5MRarHQS7ocANmOCgWh1gdNERig1CgwPlLxkZuE80ndHlU+4Lda1zz0m01dSKtcz0h7qpQb7WR+HyrqRPxahzwwMqqkEVs6qnv+86NQAbcJlK/X+vMeMe7XcBOYaRzcbItUR7/8QgcykmElQrQPErnmxNxl2yyiwcgEvQUocIJaE6yERwqXDIAAAAASUVORK5CYII=");background-repeat:no-repeat;background-position:15px 6px;border:1px solid transparent;border-radius:17px}.fp__btn:hover{background-color:#d64533}.fp__btn::after{position:absolute;content:"";top:15px;right:14px;width:7px;height:4px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAABGdBTUEAALGPC/xhBQAAAGlJREFUCB1j/P//vw4DA4MiEKOD+0xAkatA/AJNBsS/ysTIyPgfyDgHxO+hCkD0Oag4RAhoPDsQm4NoqCIGBiBnAhBjAxNAkkxAvBZNFsQHuQesmxPIOQZVAKI54UZDFYgABbcBsQhMAgDIVGYSqZsn6wAAAABJRU5ErkJggg==");}.fp__btn:hover::after{background-position:0 -4px;}.fp__btn:active,.fp__btn:focus{outline:none}@media only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2 / 1), only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2){.fp__btn{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAYAAADbCvnoAAAABGdBTUEAALGPC/xhBQAAAQFJREFUWAntWEESwjAIbBwfHl+upNoRNjKUJhk5kIvZQGG7bHOwPGltgdYtEJedShKyJnLHhEILz1Zi9HCOzFI7FUqFLAWseDgPdfeQ9QZ4b1j53nstnEJJyBqx20NeT1gEMB5uZG6Fzn5lV5UMp1ASQhMjdnvoqjewsYbDjcytEH5lsxULp1AS0sx8nJfVnjganf3NkVlKhVPIfQ9Zb6jF0atK3mNriXwpicPHvIeyr3sTDA53VgpgH8BvMu1ZCCz7ew/7MPwlE4CQJPNnQj2ZX4SYlEPbVpsvKFZ5TOwhcRoUTQiwwhVjArPEqVvRhMCneMXzDk9lwYphIwrZZOihF32oehMAa1qSAAAAAElFTkSuQmCC");background-size:18px 21px}.fp__btn::after{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAABGdBTUEAALGPC/xhBQAAANpJREFUKBWVkU8KglAYxJ/u3HuBwmUX8BqepKN4ka4RguDOVYu2QVCrhIJ6/caekqLiGxi+PzPD58PAWrszxmygD84h7hpePFLy1mEQBJamgvcVYXkqZXTR0LwpJWw0z0Ba6bymDcrI4kkp4EvzCNoVztNKfVATwoOiyx/NDup1SVqPQVBbDDeK3txBb9JuHfhNW3HWjZhDX+SGRAgPHkl5f0+kieBxRVieaPD5LGJ4WghLiwehbkBI4HUirF3S+SYrhhQ2f2H16aR5vMSYwbdjNtYXZ0J7cc70BXnFMHIGznzEAAAAAElFTkSuQmCC");background-size:7px 8px;}}', head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
                    style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)), 
                    head.appendChild(style);
                } catch (err) {}
            }
            var fp = this, setAttrIfExists = function(key, options, attrname, dom) {
                var val = dom.getAttribute(attrname);
                val && (options[key] = val);
            }, fireOnChangeEvent = function(input, fpfiles) {
                var e;
                document.createEvent ? (e = document.createEvent("Event"), e.initEvent("change", !0, !1), 
                e.fpfile = fpfiles ? fpfiles[0] : void 0, e.fpfiles = fpfiles, input.dispatchEvent(e)) : document.createEventObject ? (e = document.createEventObject("Event"), 
                e.eventPhase = 2, e.currentTarget = e.srcElement = e.target = input, e.fpfile = fpfiles ? fpfiles[0] : void 0, 
                e.fpfiles = fpfiles, input.fireEvent("onchange", e)) : input.onchange && input.onchange(fpfiles);
            }, splitIfExist = function(key, options) {
                options[key] && (options[key] = options[key].split(","));
            }, setAttrIfExistsArray = function(fpoptions, domElement, optionsObj) {
                for (var option in optionsObj) setAttrIfExists(optionsObj[option], fpoptions, option, domElement);
            }, constructOptions = function(domElement, mode) {
                mode = mode || "pick";
                var fpoptions = {}, generalOptionsMap = {
                    "data-fp-container": "container",
                    "data-fp-mimetype": "mimetype",
                    "data-fp-extension": "extension",
                    "data-fp-openTo": "openTo",
                    "data-fp-debug": "debug",
                    "data-fp-signature": "signature",
                    "data-fp-policy": "policy",
                    "data-fp-language": "language",
                    "data-fp-background-upload": "backgroundUpload",
                    "data-fp-hide": "hide",
                    "data-fp-custom-css": "customCss",
                    "data-fp-crop-force": "cropForce",
                    "data-fp-crop-ratio": "cropRatio",
                    "data-fp-crop-dim": "cropDim",
                    "data-fp-crop-max": "cropMax",
                    "data-fp-crop-min": "cropMin",
                    "data-fp-show-close": "showClose",
                    "data-fp-conversions": "conversions",
                    "data-fp-custom-text": "customText",
                    "data-fp-custom-source-container": "customSourceContainer",
                    "data-fp-custom-source-path": "customSourcePath"
                }, pickOnlyOptionsMap = {
                    "data-fp-mimetypes": "mimetypes",
                    "data-fp-extensions": "extensions",
                    "data-fp-maxSize": "maxSize",
                    "data-fp-maxFiles": "maxFiles",
                    "data-fp-store-location": "storeLocation",
                    "data-fp-store-path": "storePath",
                    "data-fp-store-container": "storeContainer",
                    "data-fp-store-region": "storeRegion",
                    "data-fp-store-access": "storeAccess",
                    "data-fp-image-quality": "imageQuality",
                    "data-fp-image-dim": "imageDim",
                    "data-fp-image-max": "imageMax",
                    "data-fp-image-min": "imageMin"
                }, webcamOptionsMap = {
                    "data-fp-video-recording-resolution": "videoRes",
                    "data-fp-webcam-dim": "webcamDim",
                    "data-fp-video-length": "videoLen",
                    "data-fp-audio-length": "audioLen"
                };
                setAttrIfExistsArray(fpoptions, domElement, generalOptionsMap), "export" === mode ? setAttrIfExists("suggestedFilename", fpoptions, "data-fp-suggestedFilename", domElement) : "pick" === mode && (setAttrIfExistsArray(fpoptions, domElement, pickOnlyOptionsMap), 
                fpoptions.webcam = {}, setAttrIfExistsArray(fpoptions.webcam, domElement, webcamOptionsMap));
                var services = domElement.getAttribute("data-fp-services");
                if (services) {
                    services = services.split(",");
                    for (var j = 0; j < services.length; j++) services[j] = fp.services[services[j].replace(" ", "")] || services[j];
                    fpoptions.services = services;
                }
                var service = domElement.getAttribute("data-fp-service");
                service && (fpoptions.service = fp.services[service.replace(" ", "")] || service);
                var arrayToSplit = [ "extensions", "mimetypes", "imageDim", "imageMin", "imageMax", "cropDim", "cropMax", "cropMin", "webcamDim", "conversions" ];
                for (var key in arrayToSplit) splitIfExist(arrayToSplit[key], fpoptions);
                var apikey = domElement.getAttribute("data-fp-apikey");
                return apikey && fp.setKey(apikey), fpoptions.folders = "true" === domElement.getAttribute("data-fp-folders"), 
                fpoptions;
            }, isMultiple = function(domElement) {
                return "true" === domElement.getAttribute("data-fp-multiple");
            }, constructPickWidget = function(domElement) {
                var widget = document.createElement("button");
                widget.setAttribute("type", "button"), widget.innerHTML = domElement.getAttribute("data-fp-button-text") || "Pick File", 
                widget.className = domElement.getAttribute("data-fp-button-class") || domElement.className || "fp__btn", 
                domElement.style.display = "none";
                var fpoptions = constructOptions(domElement);
                isMultiple(domElement) ? widget.onclick = function() {
                    return widget.blur(), fp.pickMultiple(fpoptions, function(fpfiles) {
                        for (var urls = [], j = 0; j < fpfiles.length; j++) urls.push(fpfiles[j].url);
                        domElement.value = urls.join(), fireOnChangeEvent(domElement, fpfiles);
                    }), !1;
                } : widget.onclick = function() {
                    return widget.blur(), fp.pick(fpoptions, function(fpfile) {
                        domElement.value = fpfile.url, fireOnChangeEvent(domElement, [ fpfile ]);
                    }), !1;
                }, domElement.parentNode.insertBefore(widget, domElement.nextSibling);
            }, constructConvertWidget = function(domElement) {
                var url = domElement.getAttribute("data-fp-url");
                if (!url) return !0;
                var widget = document.createElement("button");
                widget.setAttribute("type", "button"), widget.innerHTML = domElement.getAttribute("data-fp-button-text") || "Convert File", 
                widget.className = domElement.getAttribute("data-fp-button-class") || domElement.className || "fp__btn", 
                domElement.style.display = "none";
                var fpoptions = constructOptions(domElement, "convert");
                widget.onclick = function() {
                    return widget.blur(), fp.processImage(url, fpoptions, function(fpfile) {
                        domElement.value = fpfile.url, fireOnChangeEvent(domElement, [ fpfile ]);
                    }), !1;
                }, domElement.parentNode.insertBefore(widget, domElement.nextSibling);
            }, constructDragWidget = function(domElement) {
                var pane = document.createElement("div");
                pane.className = domElement.getAttribute("data-fp-class") || domElement.className, 
                pane.style.padding = "1px", domElement.style.display = "none", domElement.parentNode.insertBefore(pane, domElement.nextSibling);
                var pickButton = document.createElement("button");
                pickButton.setAttribute("type", "button"), pickButton.innerHTML = domElement.getAttribute("data-fp-button-text") || "Pick File", 
                pickButton.className = domElement.getAttribute("data-fp-button-class") || "fp__btn", 
                pane.appendChild(pickButton);
                var dragPane = document.createElement("div");
                setupDragContainer(dragPane), dragPane.innerHTML = domElement.getAttribute("data-fp-drag-text") || "Or drop files here", 
                dragPane.className = domElement.getAttribute("data-fp-drag-class") || "", pane.appendChild(dragPane);
                var fpoptions = constructOptions(domElement), multiple = isMultiple(domElement);
                fp.dragdrop.enabled() ? setupDropPane(dragPane, multiple, fpoptions, domElement) : dragPane.innerHTML = "&nbsp;", 
                multiple ? dragPane.onclick = pickButton.onclick = function() {
                    return pickButton.blur(), fp.pickMultiple(fpoptions, function(fpfiles) {
                        for (var urls = [], filenames = [], j = 0; j < fpfiles.length; j++) urls.push(fpfiles[j].url), 
                        filenames.push(fpfiles[j].filename);
                        domElement.value = urls.join(), onFilesUploaded(domElement, dragPane, filenames.join(", ")), 
                        fireOnChangeEvent(domElement, fpfiles);
                    }), !1;
                } : dragPane.onclick = pickButton.onclick = function() {
                    return pickButton.blur(), fp.pick(fpoptions, function(fpfile) {
                        domElement.value = fpfile.url, onFilesUploaded(domElement, dragPane, fpfile.filename), 
                        fireOnChangeEvent(domElement, [ fpfile ]);
                    }), !1;
                };
            }, onFilesUploaded = function(input, odrag, text) {
                odrag.innerHTML = text, odrag.style.padding = "2px 4px", odrag.style.cursor = "default", 
                odrag.style.width = "";
                var cancel = document.createElement("span");
                cancel.innerHTML = "X", cancel.style.borderRadius = "8px", cancel.style.fontSize = "14px", 
                cancel.style.cssFloat = "right", cancel.style.padding = "0 3px", cancel.style.color = "#600", 
                cancel.style.cursor = "pointer";
                var clickFn = function(e) {
                    return e || (e = window.event), e.cancelBubble = !0, e.stopPropagation && e.stopPropagation(), 
                    setupDragContainer(odrag), fp.dragdrop.enabled ? odrag.innerHTML = input.getAttribute("data-fp-drag-text") || "Or drop files here" : odrag.innerHTML = "&nbsp;", 
                    input.value = "", fireOnChangeEvent(input), !1;
                };
                cancel.addEventListener ? cancel.addEventListener("click", clickFn, !1) : cancel.attachEvent && cancel.attachEvent("onclick", clickFn), 
                odrag.appendChild(cancel);
            }, setupDragContainer = function(dragPane) {
                dragPane.style.border = "1px dashed #AAA", dragPane.style.display = "inline-block", 
                dragPane.style.margin = "0 0 0 4px", dragPane.style.borderRadius = "3px", dragPane.style.backgroundColor = "#F3F3F3", 
                dragPane.style.color = "#333", dragPane.style.fontSize = "14px", dragPane.style.lineHeight = "22px", 
                dragPane.style.padding = "2px 4px", dragPane.style.verticalAlign = "middle", dragPane.style.cursor = "pointer", 
                dragPane.style.overflow = "hidden";
            }, setupDropPane = function(odrag, multiple, fpoptions, input) {
                var pbar, text = odrag.innerHTML;
                fp.dragdrop.makeDropPane(odrag, {
                    multiple: multiple,
                    maxSize: fpoptions.maxSize,
                    mimetypes: fpoptions.mimetypes,
                    mimetype: fpoptions.mimetype,
                    extensions: fpoptions.extensions,
                    extension: fpoptions.extension,
                    location: fpoptions.storeLocation,
                    path: fpoptions.storePath,
                    container: fpoptions.storeContainer,
                    region: fpoptions.storeRegion,
                    access: fpoptions.storeAccess,
                    policy: fpoptions.policy,
                    signature: fpoptions.signature,
                    dragEnter: function() {
                        odrag.innerHTML = "Drop to upload", odrag.style.backgroundColor = "#E0E0E0", odrag.style.border = "1px solid #000";
                    },
                    dragLeave: function() {
                        odrag.innerHTML = text, odrag.style.backgroundColor = "#F3F3F3", odrag.style.border = "1px dashed #AAA";
                    },
                    onError: function(type, msg) {
                        "TooManyFiles" === type ? odrag.innerHTML = msg : "WrongType" === type ? odrag.innerHTML = msg : "NoFilesFound" === type ? odrag.innerHTML = msg : "UploadError" === type && (odrag.innerHTML = "Oops! Had trouble uploading.");
                    },
                    onStart: function(files) {
                        pbar = setupProgress(odrag);
                    },
                    onProgress: function(percentage) {
                        pbar && (pbar.style.width = percentage + "%");
                    },
                    onSuccess: function(fpfiles) {
                        for (var vals = [], filenames = [], i = 0; i < fpfiles.length; i++) vals.push(fpfiles[i].url), 
                        filenames.push(fpfiles[i].filename);
                        input.value = vals.join(), onFilesUploaded(input, odrag, filenames.join(", ")), 
                        fireOnChangeEvent(input, fpfiles);
                    }
                });
            }, setupProgress = function(odrag) {
                var pbar = document.createElement("div"), height = odrag.offsetHeight - 2;
                return pbar.style.height = height + "px", pbar.style.backgroundColor = "#0E90D2", 
                pbar.style.width = "2%", pbar.style.borderRadius = "3px", odrag.style.width = odrag.offsetWidth + "px", 
                odrag.style.padding = "0", odrag.style.border = "1px solid #AAA", odrag.style.backgroundColor = "#F3F3F3", 
                odrag.style.boxShadow = "inset 0 1px 2px rgba(0, 0, 0, 0.1)", odrag.innerHTML = "", 
                odrag.appendChild(pbar), pbar;
            }, constructExportWidget = function(domElement) {
                domElement.onclick = function() {
                    var url = domElement.getAttribute("data-fp-url");
                    if (!url) return !0;
                    var fpoptions = constructOptions(domElement, "export");
                    return fp.exportFile(url, fpoptions), !1;
                };
            }, buildWidgets = function() {
                if (document.querySelectorAll) {
                    var i, pick_base = document.querySelectorAll('input[type="filepicker"]');
                    for (i = 0; i < pick_base.length; i++) constructPickWidget(pick_base[i]);
                    var drag_widgets = document.querySelectorAll('input[type="filepicker-dragdrop"]');
                    for (i = 0; i < drag_widgets.length; i++) constructDragWidget(drag_widgets[i]);
                    var convert_widgets = document.querySelectorAll('input[type="filepicker-convert"]');
                    for (i = 0; i < convert_widgets.length; i++) constructConvertWidget(convert_widgets[i]);
                    var export_base = [], tmp = document.querySelectorAll("button[data-fp-url]");
                    for (i = 0; i < tmp.length; i++) export_base.push(tmp[i]);
                    for (tmp = document.querySelectorAll("a[data-fp-url]"), i = 0; i < tmp.length; i++) export_base.push(tmp[i]);
                    for (tmp = document.querySelectorAll('input[type="button"][data-fp-url]'), i = 0; i < tmp.length; i++) export_base.push(tmp[i]);
                    for (i = 0; i < export_base.length; i++) constructExportWidget(export_base[i]);
                    var previews = document.querySelectorAll('[type="filepicker-preview"][data-fp-url]');
                    for (i = 0; i < previews.length; i++) constructPreview(previews[i]);
                    appendStyle();
                }
            }, constructWidget = function(base) {
                base.jquery && (base = base[0]);
                var base_type = base.getAttribute("type");
                "filepicker" === base_type ? constructPickWidget(base) : "filepicker-dragdrop" === base_type ? constructDragWidget(base) : "filepicker-preview" === base_type ? constructPreview(base) : base.getAttribute("data-fp-src") ? fp.responsiveImages.construct(base) : constructExportWidget(base);
            }, constructPreview = function(domElement) {
                var url = domElement.getAttribute("data-fp-url"), css = domElement.getAttribute("data-fp-custom-css"), url = fp.util.getFPUrl(url);
                if (!url || !fp.util.isFPUrl(url)) return !0;
                url = url.replace("api/file/", "api/preview/");
                var iframe = document.createElement("iframe");
                css && (url = fp.util.appendQueryToUrl(url, "css", css)), iframe.src = url, iframe.width = "100%", 
                iframe.height = "100%", domElement.appendChild(iframe);
            };
            return {
                constructPickWidget: constructPickWidget,
                constructDragWidget: constructDragWidget,
                constructExportWidget: constructExportWidget,
                buildWidgets: buildWidgets,
                constructWidget: constructWidget
            };
        }), function() {
            filepicker.internal(function() {
                var fp = this;
                fp.util.addOnLoad(fp.cookies.checkThirdParty), fp.util.addOnLoad(fp.widgets.buildWidgets), 
                fp.util.addOnLoad(fp.responsiveImages.activate);
            }), delete filepicker.internal, delete filepicker.extend;
            var args, queue = filepicker._queue || [], len = queue.length;
            if (len) for (var i = 0; i < len; i++) args = queue[i], filepicker[args[0]].apply(filepicker, args[1]);
            filepicker._queue && delete filepicker._queue;
        }();
    }).call(exports, __webpack_require__(3), __webpack_require__(3));
} ]);
//# sourceMappingURL=react-filepicker.js.map