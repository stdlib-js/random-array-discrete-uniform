// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-ctors@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-dtypes@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";var c="float64",u=h();function g(e,t){return a(t)?j(t,"dtype")&&(e.dtype=t.dtype,u.indexOf(e.dtype)<0)?new TypeError(f("1e32X,3g,4S,GD,Gg,Jm","dtype",u.join('", "'),e.dtype)):null:new TypeError(f("1e32V,FD",t))}function y(){var h,a,j,u,y,b;if(j={dtype:c},0===(a=arguments.length))y=d,u=x;else if(1===a){if(h=arguments[0],y=d.factory(h),b=g(j,h))throw b;u=x}else if(2===a)y=d.factory(arguments[0],arguments[1]),u=v;else if(3===a){if(h=arguments[2],y=d.factory(arguments[0],arguments[1],h),b=g(j,h))throw b;u=v}return h&&h.prng?(e(u,"seed",null),e(u,"seedLength",null),n(u,"state",r(null),i),e(u,"stateLength",null),e(u,"byteLength",null)):(s(u,"seed",w),s(u,"seedLength",G),n(u,"state",P,R),s(u,"stateLength",L),s(u,"byteLength",N)),e(u,"PRNG",y.PRNG),u;function v(e,s){var n,r,i,d;if(!t(e))throw new TypeError(f("1e32d,MG",e));if(d={},arguments.length>1&&(r=g(d,s)))throw r;return"generic"===(i=d.dtype||j.dtype)?l(e,y):(n=new(o(i))(e),m([n],[e],[1],y),n)}function x(e,s,n,r){var i,d,m,h;if(!t(e))throw new TypeError(f("1e32d,MG",e));if(h={},arguments.length>3&&(d=g(h,r)))throw d;return"generic"===(m=h.dtype||j.dtype)?l(e,a):(i=new(o(m))(e),p([[s],[n],i],[e],[0,0,1],y),i);function a(){return y(s,n)}}function w(){return u.PRNG.seed}function G(){return u.PRNG.seedLength}function L(){return u.PRNG.stateLength}function N(){return u.PRNG.byteLength}function P(){return u.PRNG.state}function R(e){u.PRNG.state=e}}u.push("generic");var b=y();e(b,"factory",y);export{b as default,y as factory};
//# sourceMappingURL=index.mjs.map
