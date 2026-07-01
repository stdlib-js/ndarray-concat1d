"use strict";var g=function(s,r){return function(){try{return r||s((r={exports:{}}).exports,r),r.exports}catch(t){throw r=0,t}}};var l=g(function(Z,h){"use strict";var L=require("@stdlib/ndarray-base-dtype"),b=require("@stdlib/ndarray-base-promote-dtypes");function O(s){var r,t;for(r=[],t=0;t<s.length;t++)r.push(L(s[t]));return r}function R(s){return b(O(s))}h.exports=R});var q=g(function($,c){"use strict";var k=require("@stdlib/assert-is-array-like-object"),m=require("@stdlib/assert-is-ndarray-like"),x=require("@stdlib/ndarray-base-broadcast-scalar"),F=require("@stdlib/ndarray-base-broadcast-array"),U=require("@stdlib/ndarray-base-output-order"),_=require("@stdlib/ndarray-base-ndims"),p=require("@stdlib/ndarray-defaults"),j=require("@stdlib/ndarray-concat"),M=require("@stdlib/string-format"),P=l(),S=p.get("order"),Y=p.get("dtypes.default");function V(){var s,r,t,n,u,o,i,v,e,a;if(s=arguments.length,s<1)throw new Error("invalid invocation. Must provide at least one argument.");if(i=arguments[0],s===1)if(k(i)&&!m(i))for(r=[],e=0;e<i.length;e++)r.push(i[e]);else r=[i];else for(r=[],e=0;e<s;e++)r.push(arguments[e]);for(n=[],u=[],t=[],e=0;e<r.length;e++)if(n.push(m(r[e])),n[e]){if(a=_(r[e]),a>1)throw new TypeError(M("invalid argument. Each ndarray argument must have fewer than two dimensions. Argument: %d.",e));u.push(a),t.push(r[e])}else u.push(-1);for(t.length>=1?(v=P(t),o=U(t)):(v=Y,o=S),e=0;e<r.length;e++)n[e]?u[e]===0&&(r[e]=F(r[e],[1])):r[e]=x(r[e],v,[1],o);return j(r)}c.exports=V});var D=g(function(rr,T){"use strict";var z=require("@stdlib/assert-is-array-like-object"),f=require("@stdlib/assert-is-ndarray-like"),B=require("@stdlib/ndarray-base-broadcast-scalar"),C=require("@stdlib/ndarray-base-broadcast-array"),G=require("@stdlib/ndarray-base-output-order"),y=require("@stdlib/ndarray-base-ndims"),E=require("@stdlib/ndarray-defaults"),H=require("@stdlib/ndarray-concat"),w=require("@stdlib/string-format"),I=l(),J=E.get("order"),K=E.get("dtypes.default");function N(){var s,r,t,n,u,o,i,v,e,a,d;if(s=arguments.length,s<2)throw new Error("invalid invocation. Must provide at least two arguments.");if(i=arguments[0],s===2)if(z(i)&&!f(i))for(r=[],a=0;a<i.length;a++)r.push(i[a]);else r=[i];else for(r=[],a=0;a<s-1;a++)r.push(arguments[a]);if(v=arguments[s-1],!f(v)||y(v)!==1)throw new TypeError(w("invalid argument. Last argument must be a one-dimensional ndarray. Value: `%s`.",v));for(n=[],u=[],t=[],a=0;a<r.length;a++)if(n.push(f(r[a])),n[a]){if(d=y(r[a]),d>1)throw new TypeError(w("invalid argument. Each ndarray argument must have fewer than two dimensions. Argument: %d.",a));u.push(d),t.push(r[a])}else u.push(-1);for(t.length>=1?(e=I(t),o=G(t)):(e=K,o=J),a=0;a<r.length;a++)n[a]?u[a]===0&&(r[a]=C(r[a],[1])):r[a]=B(r[a],e,[1],o);return H.assign(r,v)}T.exports=N});var Q=require("@stdlib/utils-define-nonenumerable-read-only-property"),A=q(),W=D();Q(A,"assign",W);module.exports=A;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
