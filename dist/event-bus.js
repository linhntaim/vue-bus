"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.EventBus=void 0;var _vue=_interopRequireDefault(require("vue"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var EventBus=/*#__PURE__*/function(){function EventBus(){_classCallCheck(this,EventBus);this.bus=new _vue["default"]}_createClass(EventBus,[{key:"on",value:function on(event,handler){this.bus.$on(event,handler)}},{key:"once",value:function once(event,handler){this.bus.$once(event,handler)}},{key:"off",value:function off(event,handler){this.bus.$off(event,handler)}},{key:"emit",value:function emit(event){var _this$bus;for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key]}(_this$bus=this.bus).$emit.apply(_this$bus,[event].concat(args))}}]);return EventBus}();exports.EventBus=EventBus;
//# sourceMappingURL=event-bus.js.map