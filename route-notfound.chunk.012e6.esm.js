(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3LGf":function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=n("ox/y"),c="notfound__Ecgkh";e.default=()=>Object(r.h)("div",{class:c},Object(r.h)("h1",null,"Error 404"),Object(r.h)("p",null,"That page doesn't exist."),Object(r.h)(o.Link,{href:"/"},Object(r.h)("h4",null,"Back to Home")))},"ox/y":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c=n("hosL"),a=n("Y3FI"),i=e.Match=function(t){function e(){for(var e,n,o=arguments.length,c=Array(o),a=0;a<o;a++)c[a]=arguments[a];return e=n=r(this,t.call.apply(t,[this].concat(c))),n.update=function(t){n.nextUrl=t,n.setState({})},r(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){a.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){a.subscribers.splice(a.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,a.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,a.exec)(n,t.path,{})})},e}(c.Component),s=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,c.h)(i,{path:n||r.href},(function(t){return(0,c.h)(a.Link,o({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=s,e.default=i,i.Link=s}}]);
//# sourceMappingURL=route-notfound.chunk.012e6.esm.js.map