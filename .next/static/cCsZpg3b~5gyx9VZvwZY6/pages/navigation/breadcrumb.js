(window.webpackJsonp=window.webpackJsonp||[]).push([["9024"],{bE4q:function(e,t,n){"use strict";var r=n("q1tI"),a=n("17x9"),o=n("TSYQ"),c=n.n(o),l=n("wEI+");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},y=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=f(this,s(t).apply(this,arguments))).renderBreadcrumbItem=function(t){var n,a=t.getPrefixCls,o=e.props,c=o.prefixCls,l=o.separator,i=o.children,p=b(o,["prefixCls","separator","children"]),f=a("breadcrumb",c);return n="href"in e.props?r.createElement("a",u({className:"".concat(f,"-link")},p),i):r.createElement("span",u({className:"".concat(f,"-link")},p),i),i?r.createElement("span",null,n,r.createElement("span",{className:"".concat(f,"-separator")},l)):null},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return r.createElement(l.a,null,this.renderBreadcrumbItem)}}])&&p(n.prototype,a),o&&p(n,o),t}();y.__ANT_BREADCRUMB_ITEM=!0,y.defaultProps={separator:"/"},y.propTypes={prefixCls:a.string,separator:a.oneOfType([a.string,a.element]),href:a.string};var d=n("6CfX");function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n,a){var o=n.indexOf(e)===n.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),function(e,n){return t[n]||e})}(e,t);return o?r.createElement("span",null,c):r.createElement("a",{href:"#/".concat(a.join("/"))},c)}var g=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=v(this,O(t).apply(this,arguments))).renderBreadcrumb=function(t){var n,a=t.getPrefixCls,o=e.props,l=o.prefixCls,i=o.separator,u=o.style,p=o.className,f=o.routes,s=o.params,m=void 0===s?{}:s,b=o.children,E=o.itemRender,h=void 0===E?w:E,v=a("breadcrumb",l);if(f&&f.length>0){var O=[];n=f.map(function(e){e.path=e.path||"";var t=e.path.replace(/^\//,"");return Object.keys(m).forEach(function(e){t=t.replace(":".concat(e),m[e])}),t&&O.push(t),r.createElement(y,{separator:i,key:e.breadcrumbName||t},h(e,m,f,O))})}else b&&(n=r.Children.map(b,function(e,t){return e?(Object(d.a)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb","Only accepts Breadcrumb.Item as it's children"),Object(r.cloneElement)(e,{separator:i,key:t})):e}));return r.createElement("div",{className:c()(p,v),style:u},n)},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props;Object(d.a)(!("linkRender"in e||"nameRender"in e),"Breadcrumb","`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){return r.createElement(l.a,null,this.renderBreadcrumb)}}])&&h(n.prototype,a),o&&h(n,o),t}();g.defaultProps={separator:"/"},g.propTypes={prefixCls:a.string,separator:a.node,routes:a.array,params:a.object,linkRender:a.func,nameRender:a.func},g.Item=y;t.a=g},ipJi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/navigation/breadcrumb",function(){var e=n("mvfA");return{page:e.default||e}}])},mvfA:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("0iUn"),c=n("sLSF"),l=n("MI3g"),i=n("a7VT"),u=n("Tit0"),p=n("bx4M"),f=n("PArb"),s=n("bE4q"),m=function(){return a.a.createElement(s.a,null,a.a.createElement(s.a.Item,null,"Home"),a.a.createElement(s.a.Item,null,a.a.createElement("a",{href:""},"Application Center")),a.a.createElement(s.a.Item,null,a.a.createElement("a",{href:""},"Application List")),a.a.createElement(s.a.Item,null,"An Application"))},b=function(){return a.a.createElement(s.a,{separator:">"},a.a.createElement(s.a.Item,null,"Home"),a.a.createElement(s.a.Item,{href:""},"Application Center"),a.a.createElement(s.a.Item,{href:""},"Application List"),a.a.createElement(s.a.Item,null,"An Application"))},y=n("CtXQ"),d=function(){return a.a.createElement(s.a,null,a.a.createElement(s.a.Item,{href:""},a.a.createElement(y.a,{type:"home"})),a.a.createElement(s.a.Item,{href:""},a.a.createElement(y.a,{type:"user"}),a.a.createElement("span",null,"Application List")),a.a.createElement(s.a.Item,null,"Application"))},E=function(e){function t(){return Object(o.default)(this,t),Object(l.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(c.default)(t,[{key:"render",value:function(){return a.a.createElement(p.a,{bodyStyle:{padding:0},id:"components-avatar-demo"},a.a.createElement(f.a,{orientation:"left"},a.a.createElement("small",null,"Basic")),a.a.createElement("div",{className:"p-4"},a.a.createElement(m,null)),a.a.createElement(f.a,{orientation:"left"},a.a.createElement("small",null,"Seperator")),a.a.createElement("div",{className:"p-4"},a.a.createElement(b,null)),a.a.createElement(f.a,{orientation:"left"},a.a.createElement("small",null,"With icon")),a.a.createElement("div",{className:"p-4"},a.a.createElement(d,null)))}}]),t}(a.a.Component);t.default=function(){return a.a.createElement(E,null)}}},[["ipJi","5d41","9da1"]]]);