(window.webpackJsonp=window.webpackJsonp||[]).push([["86c3"],{"3S7+":function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("VCL8"),l=n("QbLZ"),i=n.n(l),c=n("jo6Y"),s=n.n(c),p=n("iCc5"),u=n.n(p),f=n("FYw3"),m=n.n(f),g=n("mRg0"),v=n.n(g),d=n("17x9"),b=n.n(d),y=n("uciX"),h={adjustX:1,adjustY:1},E=[0,0],O={left:{points:["cr","cl"],overflow:h,offset:[-4,0],targetOffset:E},right:{points:["cl","cr"],overflow:h,offset:[4,0],targetOffset:E},top:{points:["bc","tc"],overflow:h,offset:[0,-4],targetOffset:E},bottom:{points:["tc","bc"],overflow:h,offset:[0,4],targetOffset:E},topLeft:{points:["bl","tl"],overflow:h,offset:[0,-4],targetOffset:E},leftTop:{points:["tr","tl"],overflow:h,offset:[-4,0],targetOffset:E},topRight:{points:["br","tr"],overflow:h,offset:[0,-4],targetOffset:E},rightTop:{points:["tl","tr"],overflow:h,offset:[4,0],targetOffset:E},bottomRight:{points:["tr","br"],overflow:h,offset:[0,4],targetOffset:E},rightBottom:{points:["bl","br"],overflow:h,offset:[4,0],targetOffset:E},bottomLeft:{points:["tl","bl"],overflow:h,offset:[0,4],targetOffset:E},leftBottom:{points:["br","bl"],overflow:h,offset:[-4,0],targetOffset:E}},C=function(e){function t(){return u()(this,t),m()(this,e.apply(this,arguments))}return v()(t,e),t.prototype.componentDidUpdate=function(){var e=this.props.trigger;e&&e.forcePopupAlign()},t.prototype.render=function(){var e=this.props,t=e.overlay,n=e.prefixCls,o=e.id;return r.a.createElement("div",{className:n+"-inner",id:o,role:"tooltip"},"function"==typeof t?t():t)},t}(r.a.Component);C.propTypes={prefixCls:b.a.string,overlay:b.a.oneOfType([b.a.node,b.a.func]).isRequired,id:b.a.string,trigger:b.a.any};var w=C,j=function(e){function t(){var n,o,a;u()(this,t);for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return n=o=m()(this,e.call.apply(e,[this].concat(i))),o.getPopupElement=function(){var e=o.props,t=e.arrowContent,n=e.overlay,a=e.prefixCls,l=e.id;return[r.a.createElement("div",{className:a+"-arrow",key:"arrow"},t),r.a.createElement(w,{key:"content",trigger:o.trigger,prefixCls:a,id:l,overlay:n})]},o.saveTrigger=function(e){o.trigger=e},a=n,m()(o,a)}return v()(t,e),t.prototype.getPopupDomNode=function(){return this.trigger.getPopupDomNode()},t.prototype.render=function(){var e=this.props,t=e.overlayClassName,n=e.trigger,o=e.mouseEnterDelay,a=e.mouseLeaveDelay,l=e.overlayStyle,c=e.prefixCls,p=e.children,u=e.onVisibleChange,f=e.afterVisibleChange,m=e.transitionName,g=e.animation,v=e.placement,d=e.align,b=e.destroyTooltipOnHide,h=e.defaultVisible,E=e.getTooltipContainer,C=s()(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer"]),w=i()({},C);return"visible"in this.props&&(w.popupVisible=this.props.visible),r.a.createElement(y.a,i()({popupClassName:t,ref:this.saveTrigger,prefixCls:c,popup:this.getPopupElement,action:n,builtinPlacements:O,popupPlacement:v,popupAlign:d,getPopupContainer:E,onPopupVisibleChange:u,afterPopupVisibleChange:f,popupTransitionName:m,popupAnimation:g,defaultPopupVisible:h,destroyPopupOnHide:b,mouseLeaveDelay:a,popupStyle:l,mouseEnterDelay:o},w),p)},t}(o.Component);j.propTypes={trigger:b.a.any,children:b.a.any,defaultVisible:b.a.bool,visible:b.a.bool,placement:b.a.string,transitionName:b.a.oneOfType([b.a.string,b.a.object]),animation:b.a.any,onVisibleChange:b.a.func,afterVisibleChange:b.a.func,overlay:b.a.oneOfType([b.a.node,b.a.func]).isRequired,overlayStyle:b.a.object,overlayClassName:b.a.string,prefixCls:b.a.string,mouseEnterDelay:b.a.number,mouseLeaveDelay:b.a.number,getTooltipContainer:b.a.func,destroyTooltipOnHide:b.a.bool,align:b.a.object,arrowContent:b.a.any,id:b.a.string},j.defaultProps={prefixCls:"rc-tooltip",mouseEnterDelay:0,destroyTooltipOnHide:!1,mouseLeaveDelay:.1,align:{},placement:"right",trigger:["hover"],arrowContent:null};var T=j,P=n("TSYQ"),k=n.n(P);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var S={adjustX:1,adjustY:1},x={adjustX:0,adjustY:0},V=[0,0];function A(e){return"boolean"==typeof e?e?S:x:N({},x,e)}var L=n("wEI+");function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var q=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=R(t).call(this,e),(n=!a||"object"!==_(a)&&"function"!=typeof a?B(r):a).onVisibleChange=function(e){var t=n.props.onVisibleChange;"visible"in n.props||n.setState({visible:!n.isNoTitle()&&e}),t&&!n.isNoTitle()&&t(e)},n.onPopupAlign=function(e,t){var o=n.getPlacements(),r=Object.keys(o).filter(function(e){return o[e].points[0]===t.points[0]&&o[e].points[1]===t.points[1]})[0];if(r){var a=e.getBoundingClientRect(),l={top:"50%",left:"50%"};r.indexOf("top")>=0||r.indexOf("Bottom")>=0?l.top="".concat(a.height-t.offset[1],"px"):(r.indexOf("Top")>=0||r.indexOf("bottom")>=0)&&(l.top="".concat(-t.offset[1],"px")),r.indexOf("left")>=0||r.indexOf("Right")>=0?l.left="".concat(a.width-t.offset[0],"px"):(r.indexOf("right")>=0||r.indexOf("Left")>=0)&&(l.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(l.left," ").concat(l.top)}},n.saveTooltip=function(e){n.tooltip=e},n.renderTooltip=function(e){var t=e.getPopupContainer,r=e.getPrefixCls,a=B(n),l=a.props,i=a.state,c=l.prefixCls,s=l.title,p=l.overlay,u=l.openClassName,f=l.getPopupContainer,m=l.getTooltipContainer,g=l.children,v=r("tooltip",c),d=i.visible;"visible"in l||!n.isNoTitle()||(d=!1);var b,y,h,E=n.getDisabledCompatibleChildren(o.isValidElement(g)?g:o.createElement("span",null,g)),O=E.props,C=k()(O.className,(b={},y=u||"".concat(v,"-open"),h=!0,y in b?Object.defineProperty(b,y,{value:h,enumerable:!0,configurable:!0,writable:!0}):b[y]=h,b));return o.createElement(T,Y({},n.props,{prefixCls:v,getTooltipContainer:f||m||t,ref:n.saveTooltip,builtinPlacements:n.getPlacements(),overlay:p||s||"",visible:d,onVisibleChange:n.onVisibleChange,onPopupAlign:n.onPopupAlign}),d?Object(o.cloneElement)(E,{className:C}):E)},n.state={visible:!!e.visible||!!e.defaultVisible},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,o["Component"]),n=t,a=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}],(r=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getPlacements",value:function(){var e=this.props,t=e.builtinPlacements,n=e.arrowPointAtCenter,o=e.autoAdjustOverflow;return t||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.arrowWidth,n=void 0===t?5:t,o=e.horizontalArrowShift,r=void 0===o?16:o,a=e.verticalArrowShift,l=void 0===a?12:a,i=e.autoAdjustOverflow,c=void 0===i||i,s={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(r+n),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(l+n)]},topRight:{points:["br","tc"],offset:[r+n,-4]},rightTop:{points:["tl","cr"],offset:[4,-(l+n)]},bottomRight:{points:["tr","bc"],offset:[r+n,4]},rightBottom:{points:["bl","cr"],offset:[4,l+n]},bottomLeft:{points:["tl","bc"],offset:[-(r+n),4]},leftBottom:{points:["br","cl"],offset:[-4,l+n]}};return Object.keys(s).forEach(function(t){s[t]=e.arrowPointAtCenter?N({},s[t],{overflow:A(c),targetOffset:V}):N({},O[t],{overflow:A(c)}),s[t].ignoreShake=!0}),s}({arrowPointAtCenter:n,verticalArrowShift:8,autoAdjustOverflow:o})}},{key:"getDisabledCompatibleChildren",value:function(e){if((e.type.__ANT_BUTTON||"button"===e.type)&&e.props.disabled){var t=function(e,t){var n={},o=Y({},e);return t.forEach(function(t){e&&t in e&&(n[t]=e[t],delete o[t])}),{picked:n,omitted:o}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),n=t.picked,r=t.omitted,a=Y({display:"inline-block"},n,{cursor:"not-allowed",width:e.props.block?"100%":null}),l=Y({},r,{pointerEvents:"none"}),i=Object(o.cloneElement)(e,{style:l,className:null});return o.createElement("span",{style:a,className:e.props.className},i)}return e}},{key:"isNoTitle",value:function(){var e=this.props,t=e.title,n=e.overlay;return!t&&!n}},{key:"render",value:function(){return o.createElement(L.a,null,this.renderTooltip)}}])&&D(n.prototype,r),a&&D(n,a),t}();q.defaultProps={placement:"top",transitionName:"zoom-big-fast",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0},Object(a.polyfill)(q);t.a=q},"5g4C":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data-display/popover",function(){var e=n("qVT8");return{page:e.default||e}}])},diRs:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var o=n("q1tI"),r=n("3S7+"),a=n("wEI+"),l=n("6CfX");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},g=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=p(this,u(t).apply(this,arguments))).saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var n=t.getPrefixCls,a=e.props,l=a.prefixCls,i=m(a,["prefixCls"]);delete i.title;var s=n("popover",l);return o.createElement(r.a,c({},i,{prefixCls:s,ref:e.saveTooltip,overlay:e.getOverlay(s)}))},e}var n,i,g;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(i=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,n=t.title,r=t.content;return Object(l.a)(!("overlay"in this.props),"Popover","`overlay` is removed, please use `content` instead, see: https://u.ant.design/popover-content"),o.createElement("div",null,n&&o.createElement("div",{className:"".concat(e,"-title")},n),o.createElement("div",{className:"".concat(e,"-inner-content")},r))}},{key:"render",value:function(){return o.createElement(a.a,null,this.renderPopover)}}])&&s(n.prototype,i),g&&s(n,g),t}();g.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}}},qVT8:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("0iUn"),l=n("sLSF"),i=n("MI3g"),c=n("a7VT"),s=n("Tit0"),p=n("bx4M"),u=n("PArb"),f=n("diRs"),m=n("2/Rp"),g=r.a.createElement("span",null,"Title"),v=r.a.createElement("div",null,r.a.createElement("p",null,"Content"),r.a.createElement("p",null,"Content")),d=function(){return r.a.createElement("div",null,r.a.createElement(f.a,{placement:"topLeft",title:g,content:v},r.a.createElement(m.a,null,"Align edge / 边缘对齐")),r.a.createElement(f.a,{placement:"topLeft",title:g,content:v,arrowPointAtCenter:!0},r.a.createElement(m.a,null,"Arrow points to center / 箭头指向中心")))},b=r.a.createElement("div",null,r.a.createElement("p",null,"Content"),r.a.createElement("p",null,"Content")),y=function(){return r.a.createElement(f.a,{content:b,title:"Title"},r.a.createElement(m.a,null,"Hover me"))},h=n("AT/M"),E=n("vYYK"),O=function(e){function t(){var e,n;Object(a.default)(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return n=Object(i.default)(this,(e=Object(c.default)(t)).call.apply(e,[this].concat(r))),Object(E.a)(Object(h.default)(n),"state",{visible:!1}),Object(E.a)(Object(h.default)(n),"hide",function(){n.setState({visible:!1})}),Object(E.a)(Object(h.default)(n),"handleVisibleChange",function(e){n.setState({visible:e})}),n}return Object(s.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{content:r.a.createElement("a",{onClick:this.hide},"Close"),title:"Title",trigger:"click",visible:this.state.visible,onVisibleChange:this.handleVisibleChange},r.a.createElement(m.a,null,"Click me"))}}]),t}(r.a.Component),C=function(e){function t(){var e,n;Object(a.default)(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return n=Object(i.default)(this,(e=Object(c.default)(t)).call.apply(e,[this].concat(r))),Object(E.a)(Object(h.default)(n),"state",{clicked:!1,hovered:!1}),Object(E.a)(Object(h.default)(n),"hide",function(){n.setState({clicked:!1,hovered:!1})}),Object(E.a)(Object(h.default)(n),"handleHoverChange",function(e){n.setState({hovered:e,clicked:!1})}),Object(E.a)(Object(h.default)(n),"handleClickChange",function(e){n.setState({clicked:e,hovered:!1})}),n}return Object(s.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=r.a.createElement("div",null,"This is hover content."),t=r.a.createElement("div",null,"This is click content.");return r.a.createElement(f.a,{style:{width:500},content:e,title:"Hover title",trigger:"hover",visible:this.state.hovered,onVisibleChange:this.handleHoverChange},r.a.createElement(f.a,{content:r.a.createElement("div",null,t,r.a.createElement("a",{onClick:this.hide},"Close")),title:"Click title",trigger:"click",visible:this.state.clicked,onVisibleChange:this.handleClickChange},r.a.createElement(m.a,null,"Hover and click / 悬停并单击")))}}]),t}(r.a.Component),w=r.a.createElement("span",null,"Title"),j=r.a.createElement("div",null,r.a.createElement("p",null,"Content"),r.a.createElement("p",null,"Content")),T=function(){return r.a.createElement("div",{className:"demo"},r.a.createElement("div",{style:{marginLeft:70,whiteSpace:"nowrap"}},r.a.createElement(f.a,{placement:"topLeft",title:w,content:j,trigger:"click"},r.a.createElement(m.a,null,"TL")),r.a.createElement(f.a,{placement:"top",title:w,content:j,trigger:"click"},r.a.createElement(m.a,null,"Top")),r.a.createElement(f.a,{placement:"topRight",title:w,content:j,trigger:"click"},r.a.createElement(m.a,null,"TR"))),r.a.createElement("div",{style:{width:70,float:"left"}},r.a.createElement(f.a,{placement:"leftTop",title:w,content:j,trigger:"click"},r.a.createElement(m.a,null,"LT")),r.a.createElement(f.a,{placement:"left",title:w,content:j,trigger:"click"},r.a.createElement(m.a,null,"Left")),r.a.createElement(f.a,{placement:"leftBottom",title:w,content:j,trigger:"click"},r.a.createElement(m.a,null,"LB"))),r.a.createElement("div",{style:{width:70,marginLeft:304}},r.a.createElement(f.a,{placement:"rightTop",title:w,content:j,trigger:"click"},r.a.createElement(m.a,null,"RT")),r.a.createElement(f.a,{placement:"right",title:w,content:j,trigger:"click"},r.a.createElement(m.a,null,"Right")),r.a.createElement(f.a,{placement:"rightBottom",title:w,content:j,trigger:"click"},r.a.createElement(m.a,null,"RB"))),r.a.createElement("div",{style:{marginLeft:70,clear:"both",whiteSpace:"nowrap"}},r.a.createElement(f.a,{placement:"bottomLeft",title:w,content:j,trigger:"click"},r.a.createElement(m.a,null,"BL")),r.a.createElement(f.a,{placement:"bottom",title:w,content:j,trigger:"click"},r.a.createElement(m.a,null,"Bottom")),r.a.createElement(f.a,{placement:"bottomRight",title:w,content:j,trigger:"click"},r.a.createElement(m.a,null,"BR"))))},P=r.a.createElement("div",null,r.a.createElement("p",null,"Content"),r.a.createElement("p",null,"Content")),k=function(){return r.a.createElement("div",null,r.a.createElement(f.a,{content:P,title:"Title",trigger:"hover"},r.a.createElement(m.a,null,"Hover me")),r.a.createElement(f.a,{content:P,title:"Title",trigger:"focus"},r.a.createElement(m.a,null,"Focus me")),r.a.createElement(f.a,{content:P,title:"Title",trigger:"click"},r.a.createElement(m.a,null,"Click me")))},N=function(e){function t(){return Object(a.default)(this,t),Object(i.default)(this,Object(c.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{bodyStyle:{padding:0},id:"components-button-demo"},r.a.createElement(u.a,{orientation:"left"},r.a.createElement("small",null,"Basic")),r.a.createElement("div",{className:"p-4"},r.a.createElement(y,null)),r.a.createElement(u.a,{orientation:"left"},r.a.createElement("small",null,"Placement")),r.a.createElement("div",{className:"p-4"},r.a.createElement(T,null)),r.a.createElement(u.a,{orientation:"left"},r.a.createElement("small",null,"Arrow point at center")),r.a.createElement("div",{className:"p-4"},r.a.createElement(d,null)),r.a.createElement(u.a,{orientation:"left"},r.a.createElement("small",null,"Three ways to trigger")),r.a.createElement("div",{className:"p-4"},r.a.createElement(k,null)),r.a.createElement(u.a,{orientation:"left"},r.a.createElement("small",null,"Controlling the close of the dialog")),r.a.createElement("div",{className:"p-4"},r.a.createElement(O,null)),r.a.createElement(u.a,{orientation:"left"},r.a.createElement("small",null,"Hover with click popover")),r.a.createElement("div",{className:"p-4"},r.a.createElement(C,null)))}}]),t}(r.a.Component);t.default=function(){return r.a.createElement(N,null)}}},[["5g4C","5d41","9da1"]]]);