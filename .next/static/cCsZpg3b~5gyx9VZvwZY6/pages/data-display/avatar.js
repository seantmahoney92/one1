(window.webpackJsonp=window.webpackJsonp||[]).push([["61ae"],{"+Em9":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data-display/avatar",function(){var e=n("2ohR");return{page:e.default||e}}])},"09Wf":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("CWQg"),a=Object(r.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},"2ohR":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("0iUn"),s=n("sLSF"),c=n("MI3g"),i=n("a7VT"),l=n("Tit0"),u=n("bx4M"),f=n("PArb"),p=n("KrTs"),m=n("Tckk"),y=function(){return a.a.createElement("div",null,a.a.createElement("span",{style:{marginRight:24}},a.a.createElement(p.a,{count:1},a.a.createElement(m.a,{shape:"square",icon:"user"}))),a.a.createElement("span",null,a.a.createElement(p.a,{dot:!0},a.a.createElement(m.a,{shape:"square",icon:"user"}))))},d=function(){return a.a.createElement("div",{id:"components-avatar-demo-basic"},a.a.createElement("div",null,a.a.createElement(m.a,{size:64,icon:"user"}),a.a.createElement(m.a,{size:"large",icon:"user"}),a.a.createElement(m.a,{icon:"user"}),a.a.createElement(m.a,{size:"small",icon:"user"})),a.a.createElement("div",null,a.a.createElement(m.a,{shape:"square",size:64,icon:"user"}),a.a.createElement(m.a,{shape:"square",size:"large",icon:"user"}),a.a.createElement(m.a,{shape:"square",icon:"user"}),a.a.createElement(m.a,{shape:"square",size:"small",icon:"user"})))},h=n("AT/M"),b=n("vYYK"),v=n("2/Rp"),g=["U","Lucy","Tom","Edward"],E=["#f56a00","#7265e6","#ffbf00","#00a2ae"],O=function(e){function t(e){var n;return Object(o.default)(this,t),n=Object(c.default)(this,Object(i.default)(t).call(this,e)),Object(b.a)(Object(h.default)(n),"changeUser",function(){var e=g.indexOf(n.state.user);n.setState({user:e<g.length-1?g[e+1]:g[0],color:e<E.length-1?E[e+1]:E[0]})}),n.state={user:g[0],color:E[0]},n}return Object(l.default)(t,e),Object(s.default)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(m.a,{style:{backgroundColor:this.state.color,verticalAlign:"middle"},size:"large"},this.state.user),a.a.createElement(v.a,{size:"small",style:{marginLeft:16,verticalAlign:"middle"},onClick:this.changeUser},"Change"))}}]),t}(a.a.Component),S=function(){return a.a.createElement("div",{id:"components-avatar-demo-basic"},a.a.createElement(m.a,{icon:"user"}),a.a.createElement(m.a,null,"U"),a.a.createElement(m.a,null,"USER"),a.a.createElement(m.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),a.a.createElement(m.a,{style:{color:"#f56a00",backgroundColor:"#fde3cf"}},"U"),a.a.createElement(m.a,{style:{backgroundColor:"#87d068"},icon:"user"}))},w=function(e){function t(){return Object(o.default)(this,t),Object(c.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(s.default)(t,[{key:"render",value:function(){return a.a.createElement(u.a,{bodyStyle:{padding:0},id:"components-avatar-demo"},a.a.createElement(f.a,{orientation:"left"},a.a.createElement("small",null,"Basic")),a.a.createElement("div",{className:"p-4"},a.a.createElement(d,null)),a.a.createElement(f.a,{orientation:"left"},a.a.createElement("small",null,"Autoset Font Size")),a.a.createElement("div",{className:"p-4"},a.a.createElement(O,null)),a.a.createElement(f.a,{orientation:"left"},a.a.createElement("small",null,"Type")),a.a.createElement("div",{className:"p-4"},a.a.createElement(S,null)),a.a.createElement(f.a,{orientation:"left"},a.a.createElement("small",null,"With badge")),a.a.createElement("div",{className:"p-4"},a.a.createElement(y,null)))}}]),t}(a.a.Component);t.default=function(){return a.a.createElement(w,null)}},KrTs:function(e,t,n){"use strict";var r=n("q1tI"),a=n("17x9"),o=n("MFj2"),s=n("TSYQ"),c=n.n(s),i=n("BGR+"),l=n("wEI+"),u=n("VCL8");function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){return e?e.toString().split("").reverse().map(function(e){var t=Number(e);return isNaN(t)?e:t}):[]}var v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,d(t).call(this,e))).renderScrollNumber=function(e){var t=e.getPrefixCls,a=n.props,o=a.prefixCls,s=a.className,l=a.style,u=a.title,f=a.component,m=void 0===f?"sup":f,y=a.displayComponent,d=Object(i.a)(n.props,["count","onAnimated","component","prefixCls","displayComponent"]),h=t("scroll-number",o),b=p({},d,{className:c()(h,s),title:u});return l&&l.borderColor&&(b.style=p({},l,{boxShadow:"0 0 0 1px ".concat(l.borderColor," inset")})),y?r.cloneElement(y,{className:c()("".concat(h,"-custom-component"),y.props&&y.props.className)}):Object(r.createElement)(m,b,n.renderNumberElement(h))},n.state={animateStarted:!0,count:e.count},n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,o=[{key:"getDerivedStateFromProps",value:function(e,t){return"count"in e?t.count===e.count?null:{animateStarted:!0}:null}}],(a=[{key:"getPositionByNum",value:function(e,t){var n=this.state.count,r=Math.abs(Number(n)),a=Math.abs(Number(this.lastCount)),o=Math.abs(b(this.state.count)[t]),s=Math.abs(b(this.lastCount)[t]);return this.state.animateStarted?10+e:r>a?o>=s?10+e:20+e:o<=s?10+e:e}},{key:"componentDidUpdate",value:function(e,t){this.lastCount=t.count;var n=this.state.animateStarted,r=this.props.onAnimated;n&&this.setState({animateStarted:!1,count:this.props.count},function(){r&&r()})}},{key:"renderNumberList",value:function(e){for(var t=[],n=0;n<30;n++){var a=e===n?"current":"";t.push(r.createElement("p",{key:n.toString(),className:a},n%10))}return t}},{key:"renderCurrentNumber",value:function(e,t,n){if("number"==typeof t){var a=this.getPositionByNum(t,n),o=this.state.animateStarted||void 0===b(this.lastCount)[n];return Object(r.createElement)("span",{className:"".concat(e,"-only"),style:{transition:o?"none":void 0,msTransform:"translateY(".concat(100*-a,"%)"),WebkitTransform:"translateY(".concat(100*-a,"%)"),transform:"translateY(".concat(100*-a,"%)")},key:n},this.renderNumberList(a))}return r.createElement("span",{key:"symbol",className:"".concat(e,"-symbol")},t)}},{key:"renderNumberElement",value:function(e){var t=this,n=this.state.count;return n&&Number(n)%1==0?b(n).map(function(n,r){return t.renderCurrentNumber(e,n,r)}).reverse():n}},{key:"render",value:function(){return r.createElement(l.a,null,this.renderScrollNumber)}}])&&m(n.prototype,a),o&&m(n,o),t}();v.defaultProps={count:null,onAnimated:function(){}},Object(u.polyfill)(v);var g=v,E=n("09Wf");function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return T});var P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function x(e){return-1!==E.a.indexOf(e)}var T=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=N(this,j(t).apply(this,arguments))).renderBadge=function(t){var n,a=t.getPrefixCls,s=e.props,i=(s.count,s.showZero,s.prefixCls),l=s.scrollNumberPrefixCls,u=(s.overflowCount,s.className,s.style,s.children),f=(s.dot,s.status),p=s.text,m=(s.offset,s.title,s.color),y=P(s,["count","showZero","prefixCls","scrollNumberPrefixCls","overflowCount","className","style","children","dot","status","text","offset","title","color"]),d=a("badge",i),h=a("scroll-number",l),b=e.renderBadgeNumber(d,h),v=e.renderStatusText(d),g=c()((w(n={},"".concat(d,"-status-dot"),e.hasStatus()),w(n,"".concat(d,"-status-").concat(f),!!f),w(n,"".concat(d,"-status-").concat(m),x(m)),n)),E={};if(m&&!x(m)&&(E.background=m),!u&&e.hasStatus()){var O=e.getStyleWithOffset(),C=O&&O.color;return r.createElement("span",S({},y,{className:e.getBadgeClassName(d),style:O}),r.createElement("span",{className:g,style:E}),r.createElement("span",{style:{color:C},className:"".concat(d,"-status-text")},p))}return r.createElement("span",S({},y,{className:e.getBadgeClassName(d)}),u,r.createElement(o.a,{component:"",showProp:"data-show",transitionName:u?"".concat(d,"-zoom"):"",transitionAppear:!0},b),v)},e}var n,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r["Component"]),n=t,(a=[{key:"getBadgeClassName",value:function(e){var t,n=this.props,r=n.className,a=n.children;return c()(r,e,(w(t={},"".concat(e,"-status"),this.hasStatus()),w(t,"".concat(e,"-not-a-wrapper"),!a),t))}},{key:"hasStatus",value:function(){var e=this.props,t=e.status,n=e.color;return!!t||!!n}},{key:"isZero",value:function(){var e=this.getNumberedDispayCount();return"0"===e||0===e}},{key:"isDot",value:function(){var e=this.props.dot,t=this.isZero();return e&&!t||this.hasStatus()}},{key:"isHidden",value:function(){var e=this.props.showZero,t=this.getDispayCount(),n=this.isZero(),r=this.isDot();return(null==t||""===t||n&&!e)&&!r}},{key:"getNumberedDispayCount",value:function(){var e=this.props,t=e.count,n=e.overflowCount;return t>n?"".concat(n,"+"):t}},{key:"getDispayCount",value:function(){return this.isDot()?"":this.getNumberedDispayCount()}},{key:"getScrollNumberTitle",value:function(){var e=this.props,t=e.title,n=e.count;return t||("string"==typeof n||"number"==typeof n?n:void 0)}},{key:"getStyleWithOffset",value:function(){var e=this.props,t=e.offset,n=e.style;return t?S({right:-parseInt(t[0],10),marginTop:t[1]},n):n}},{key:"renderStatusText",value:function(e){var t=this.props.text;return this.isHidden()||!t?null:r.createElement("span",{className:"".concat(e,"-status-text")},t)}},{key:"renderDispayComponent",value:function(){var e=this.props.count;if(e&&"object"===O(e))return r.cloneElement(e,{style:S({},this.getStyleWithOffset(),e.props&&e.props.style)})}},{key:"renderBadgeNumber",value:function(e,t){var n,a=this.props,o=a.status,s=a.count,i=this.getDispayCount(),l=this.isDot(),u=this.isHidden(),f=c()((w(n={},"".concat(e,"-dot"),l),w(n,"".concat(e,"-count"),!l),w(n,"".concat(e,"-multiple-words"),!l&&s&&s.toString&&s.toString().length>1),w(n,"".concat(e,"-status-").concat(o),this.hasStatus()),n));return u?null:r.createElement(g,{prefixCls:t,"data-show":!u,className:f,count:i,displayComponent:this.renderDispayComponent(),title:this.getScrollNumberTitle(),style:this.getStyleWithOffset(),key:"scrollNumber"})}},{key:"render",value:function(){return r.createElement(l.a,null,this.renderBadge)}}])&&C(n.prototype,a),s&&C(n,s),t}();T.defaultProps={count:null,showZero:!1,dot:!1,overflowCount:99},T.propTypes={count:a.node,showZero:a.bool,dot:a.bool,overflowCount:a.number}},Tckk:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n("q1tI"),a=n("CtXQ"),o=n("TSYQ"),s=n.n(o),c=n("wEI+");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},h=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=p(this,m(t).apply(this,arguments))).state={scale:1,isImgExist:!0},e.setScale=function(){if(e.avatarChildren&&e.avatarNode){var t=e.avatarChildren.offsetWidth,n=e.avatarNode.offsetWidth;0===t||0===n||e.lastChildrenWidth===t&&e.lastNodeWidth===n||(e.lastChildrenWidth=t,e.lastNodeWidth=n,e.setState({scale:n-8<t?(n-8)/t:1}))}},e.handleImgLoadError=function(){var t=e.props.onError;!1!==(t?t():void 0)&&e.setState({isImgExist:!1})},e.renderAvatar=function(t){var n,o,c=t.getPrefixCls,i=e.props,f=i.prefixCls,p=i.shape,m=i.size,y=i.src,h=i.srcSet,b=i.icon,v=i.className,g=i.alt,E=d(i,["prefixCls","shape","size","src","srcSet","icon","className","alt"]),O=e.state,S=O.isImgExist,w=O.scale,C=c("avatar",f),N=s()((u(n={},"".concat(C,"-lg"),"large"===m),u(n,"".concat(C,"-sm"),"small"===m),n)),j=s()(C,v,N,(u(o={},"".concat(C,"-").concat(p),p),u(o,"".concat(C,"-image"),y&&S),u(o,"".concat(C,"-icon"),b),o)),k="number"==typeof m?{width:m,height:m,lineHeight:"".concat(m,"px"),fontSize:b?m/2:18}:{},P=e.props.children;if(y&&S)P=r.createElement("img",{src:y,srcSet:h,onError:e.handleImgLoadError,alt:g});else if(b)P=r.createElement(a.a,{type:b});else{if(e.avatarChildren||1!==w){var x="scale(".concat(w,") translateX(-50%)"),T={msTransform:x,WebkitTransform:x,transform:x},_="number"==typeof m?{lineHeight:"".concat(m,"px")}:{};P=r.createElement("span",{className:"".concat(C,"-string"),ref:function(t){return e.avatarChildren=t},style:l({},_,T)},P)}else P=r.createElement("span",{className:"".concat(C,"-string"),ref:function(t){return e.avatarChildren=t}},P)}return r.createElement("span",l({},E,{style:l({},k,E.style),className:j,ref:function(t){return e.avatarNode=t}}),P)},e}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.setScale()}},{key:"componentDidUpdate",value:function(e){this.setScale(),e.src!==this.props.src&&this.setState({isImgExist:!0,scale:1})}},{key:"render",value:function(){return r.createElement(c.a,null,this.renderAvatar)}}])&&f(n.prototype,o),i&&f(n,i),t}();h.defaultProps={shape:"circle",size:"default"}}},[["+Em9","5d41","9da1"]]]);