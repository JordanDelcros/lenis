!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t||self).lenis=e()}(this,function(){var t="1.0.1";function e(t,e,i){return Math.max(t,Math.min(e,i))}var i=/*#__PURE__*/function(){function t(){}var i=t.prototype;return i.advance=function(t){var i;if(this.isRunning){var o,n=!1;if(this.lerp)this.value=(1-(o=this.lerp))*this.value+o*this.to,Math.round(this.value)===this.to&&(this.value=this.to,n=!0);else{this.currentTime+=t;var s=e(0,this.currentTime/this.duration,1),r=(n=s>=1)?1:this.easing(s);this.value=this.from+(this.to-this.from)*r}null==(i=this.onUpdate)||i.call(this,this.value,{completed:n}),n&&this.stop()}},i.stop=function(){this.isRunning=!1},i.fromTo=function(t,e,i){var o=i.lerp,n=void 0===o?.1:o,s=i.duration,r=void 0===s?1:s,l=i.easing,h=void 0===l?function(t){return t}:l,a=i.onUpdate;this.from=this.value=t,this.to=e,this.lerp=n,this.duration=r,this.easing=h,this.currentTime=0,this.isRunning=!0,this.onUpdate=a},t}(),o=function(){return{events:{},emit:function(t){for(var e=this.events[t]||[],i=0,o=e.length;i<o;i++)e[i].apply(e,[].slice.call(arguments,1))},on:function(t,e){var i,o=this;return(null==(i=this.events[t])?void 0:i.push(e))||(this.events[t]=[e]),function(){var i;o.events[t]=null==(i=o.events[t])?void 0:i.filter(function(t){return e!==t})}}}},n=/*#__PURE__*/function(){function t(t){var e=this;this.onResize=function(t){var i=t[0];if(i){var o=i.contentRect,n=o.height;e.width=o.width,e.height=n}},this.onWindowResize=function(){e.width=window.innerWidth,e.height=window.innerHeight},this.element=t,t===window?(window.addEventListener("resize",this.onWindowResize),this.onWindowResize()):(this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.element))}return t.prototype.destroy=function(){window.removeEventListener("resize",this.onWindowResize),this.resizeObserver.disconnect()},t}(),s=/*#__PURE__*/function(){function t(t,i){var n=this,s=i.wheelMultiplier,r=void 0===s?1:s,l=i.touchMultiplier,h=void 0===l?2:l,a=i.normalizeWheel,u=void 0!==a&&a;this.onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t,i=e.pageY;n.touchStart.x=e.pageX,n.touchStart.y=i},this.onTouchMove=function(t){var e=t.targetTouches?t.targetTouches[0]:t,i=e.pageX,o=e.pageY,s=-(i-n.touchStart.x)*n.touchMultiplier,r=-(o-n.touchStart.y)*n.touchMultiplier;n.touchStart.x=i,n.touchStart.y=o,n.emitter.emit("scroll",{type:"touch",deltaX:s,deltaY:r,event:t})},this.onWheel=function(t){var i=t.deltaX,o=t.deltaY;n.normalizeWheel&&(i=e(-100,i,100),o=e(-100,o,100)),n.emitter.emit("scroll",{type:"wheel",deltaX:i*=n.wheelMultiplier,deltaY:o*=n.wheelMultiplier,event:t})},this.element=t,this.wheelMultiplier=r,this.touchMultiplier=h,this.normalizeWheel=u,this.touchStart={x:null,y:null},this.emitter=o(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1})}var i=t.prototype;return i.on=function(t,e){return this.emitter.on(t,e)},i.destroy=function(){this.emitter.events={},this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1})},t}();/*#__PURE__*/
return function(){function r(e){var r=this,l=void 0===e?{}:e,h=l.direction,a=l.gestureDirection,u=l.mouseMultiplier,c=l.smooth,d=l.wrapper,p=void 0===d?window:d,m=l.content,v=void 0===m?document.documentElement:m,f=l.smoothWheel,g=void 0===f?null==c||c:f,S=l.smoothTouch,w=void 0!==S&&S,y=l.duration,M=l.easing,z=void 0===M?function(t){return Math.min(1,1.001-Math.pow(2,-10*t))}:M,b=l.lerp,T=void 0===b?y?null:.1:b,E=l.infinite,L=void 0!==E&&E,W=l.orientation,_=void 0===W?null!=h?h:"vertical":W,k=l.gestureOrientation,O=void 0===k?null!=a?a:"vertical":k,R=l.touchMultiplier,P=void 0===R?2:R,H=l.wheelMultiplier,x=void 0===H?null!=u?u:1:H,X=l.normalizeWheel,Y=void 0===X||X;this.onVirtualScroll=function(t){var e=t.type,i=t.deltaX,o=t.deltaY,n=t.event;if(!n.ctrlKey&&!("vertical"===r.options.gestureOrientation&&0===o||"horizontal"===r.options.gestureOrientation&&0===i||n.composedPath().find(function(t){return null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent")})))if(r.isStopped||r.isLocked)n.preventDefault();else{if(r.isSmooth=r.options.smoothTouch&&"touch"===e||r.options.smoothWheel&&"wheel"===e,!r.isSmooth)return r.isScrolling=!1,void r.animate.stop();n.preventDefault();var s=o;"both"===r.options.gestureOrientation?s=Math.abs(o)>Math.abs(i)?o:i:"horizontal"===r.options.gestureOrientation&&(s=i),r.scrollTo(r.targetScroll+s,{programmatic:!1})}},this.onScroll=function(){if(!r.isScrolling){var t=r.animatedScroll;r.animatedScroll=r.targetScroll=r.actualScroll,r.velocity=0,r.direction=Math.sign(r.animatedScroll-t),r.emit()}},this.registerPlugin=function(t,e){if("function"!=typeof t)throw new Error("Plugin must be a function");r.plugins.push({plugin:t,options:e})},this.initializePlugins=function(){r.plugins.forEach(function(t){(0,t.plugin)(r,t.options)})},h&&console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),a&&console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),u&&console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),c&&console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),window.lenisVersion=t,p!==document.documentElement&&p!==document.body||(p=window),this.options={wrapper:p,content:v,smoothWheel:g,smoothTouch:w,duration:y,easing:z,lerp:T,infinite:L,gestureOrientation:O,orientation:_,touchMultiplier:P,wheelMultiplier:x,normalizeWheel:Y},this.wrapper=new n(p),this.content=new n(v),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=g||w,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new i,this.emitter=o(),this.plugins=[],this.wrapper.element.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new s(p,{touchMultiplier:P,wheelMultiplier:x,normalizeWheel:Y}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.initializePlugins()}var l,h,a=r.prototype;return a.destroy=function(){this.emitter.events={},this.wrapper.element.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy()},a.on=function(t,e){return this.emitter.on(t,e)},a.off=function(t,e){var i;this.emitter.events[t]=null==(i=this.emitter.events[t])?void 0:i.filter(function(t){return e!==t})},a.setScroll=function(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t},a.emit=function(){this.emitter.emit("scroll",this)},a.reset=function(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0},a.start=function(){this.isStopped=!1,this.reset()},a.stop=function(){this.isStopped=!0,this.animate.stop(),this.reset()},a.raf=function(t){var e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)},a.scrollTo=function(t,i){var o=this,n=void 0===i?{}:i,s=n.offset,r=void 0===s?0:s,l=n.immediate,h=void 0!==l&&l,a=n.lock,u=void 0!==a&&a,c=n.duration,d=void 0===c?this.options.duration:c,p=n.easing,m=void 0===p?this.options.easing:p,v=n.lerp,f=void 0===v?!d&&this.options.lerp:v,g=n.onComplete,S=n.force,w=n.programmatic,y=void 0===w||w;if(!this.isStopped||void 0!==S&&S){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var M,z;if("string"==typeof t?z=document.querySelector(t):null!=(M=t)&&M.nodeType&&(z=t),z){if(this.wrapper.element!==window){var b=this.wrapper.element.getBoundingClientRect();r-=this.isHorizontal?b.left:b.top}var T=z.getBoundingClientRect();t=(this.isHorizontal?T.left:T.top)+this.animatedScroll}}if("number"==typeof t){if(t+=r,t=Math.round(t),this.options.infinite?y&&(this.targetScroll=this.animatedScroll=this.scroll):t=e(0,t,this.limit),h)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.animate.stop(),this.reset(),this.emit(),void(null==g||g());y||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:d,easing:m,lerp:f,onUpdate:function(t,e){var i=e.completed;u&&(o.isLocked=!0),o.isScrolling=!0,o.velocity=t-o.animatedScroll,o.direction=Math.sign(o.velocity),o.animatedScroll=t,o.setScroll(o.scroll),y&&(o.targetScroll=t),i&&(u&&(o.isLocked=!1),requestAnimationFrame(function(){o.isScrolling=!1}),o.velocity=0,null==g||g()),o.emit()}})}}},l=r,(h=[{key:"rootElement",get:function(){return this.wrapper.element===window?this.content.element:this.wrapper.element}},{key:"limit",get:function(){return Math.round(this.isHorizontal?this.content.width-this.wrapper.width:this.content.height-this.wrapper.height)}},{key:"isHorizontal",get:function(){return"horizontal"===this.options.orientation}},{key:"actualScroll",get:function(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}},{key:"scroll",get:function(){return this.options.infinite?(e=this.animatedScroll%(t=this.limit),(t>0&&e<0||t<0&&e>0)&&(e+=t),e):this.animatedScroll;var t,e}},{key:"progress",get:function(){return this.scroll/this.limit}},{key:"isSmooth",get:function(){return this.__isSmooth},set:function(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}},{key:"isScrolling",get:function(){return this.__isScrolling},set:function(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}},{key:"isStopped",get:function(){return this.__isStopped},set:function(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}])&&function(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,"symbol"==typeof(n=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key))?n:String(n),o)}var n}(l.prototype,h),Object.defineProperty(l,"prototype",{writable:!1}),r}()});
//# sourceMappingURL=lenis.umd.js.map
