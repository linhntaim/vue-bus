"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _eventBus=require("./event-bus");var install=function install(Vue){Vue.prototype.$bus=new _eventBus.EventBus};var _default=install;exports["default"]=_default;
//# sourceMappingURL=install.js.map