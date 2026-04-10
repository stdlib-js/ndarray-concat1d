"use strict";var d=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var l=d(function(sr,p){"use strict";var R=require("@stdlib/ndarray-base-dtype"),x=require("@stdlib/ndarray-base-promote-dtypes");function F(t){var r,s;for(r=[],s=0;s<t.length;s++)r.push(R(t[s]));return r}function U(t){return x(F(t))}p.exports=U});var f=d(function(ir,c){"use strict";var m=require("@stdlib/ndarray-base-order"),_=require("@stdlib/ndarray-defaults"),k=_.get("order");function j(t){var r,s;for(r=m(t[0]),s=1;s<t.length;s++)if(m(t[s])!==r)return k;return r}c.exports=j});var T=d(function(nr,E){"use strict";var M=require("@stdlib/assert-is-array-like-object"),q=require("@stdlib/assert-is-ndarray-like"),P=require("@stdlib/ndarray-base-broadcast-scalar"),S=require("@stdlib/ndarray-base-broadcast-array"),Y=require("@stdlib/ndarray-base-ndims"),y=require("@stdlib/ndarray-defaults"),V=require("@stdlib/ndarray-concat"),z=require("@stdlib/string-format"),B=l(),C=f(),G=y.get("order"),H=y.get("dtypes.default");function I(){var t,r,s,n,u,o,i,v,e,a;if(t=arguments.length,t<1)throw new Error("invalid invocation. Must provide at least one argument.");if(i=arguments[0],t===1)if(M(i)&&!q(i))for(r=[],e=0;e<i.length;e++)r.push(i[e]);else r=[i];else for(r=[],e=0;e<t;e++)r.push(arguments[e]);for(n=[],u=[],s=[],e=0;e<r.length;e++)if(n.push(q(r[e])),n[e]){if(a=Y(r[e]),a>1)throw new TypeError(z("invalid argument. Each ndarray argument must have fewer than two dimensions. Argument: %d.",e));u.push(a),s.push(r[e])}else u.push(-1);for(s.length>=1?(v=B(s),o=C(s)):(v=H,o=G),e=0;e<r.length;e++)n[e]?u[e]===0&&(r[e]=S(r[e],[1])):r[e]=P(r[e],v,[1],o);return V(r)}E.exports=I});var O=d(function(ur,L){"use strict";var J=require("@stdlib/assert-is-array-like-object"),h=require("@stdlib/assert-is-ndarray-like"),K=require("@stdlib/ndarray-base-broadcast-scalar"),N=require("@stdlib/ndarray-base-broadcast-array"),w=require("@stdlib/ndarray-base-ndims"),A=require("@stdlib/ndarray-defaults"),Q=require("@stdlib/ndarray-concat"),D=require("@stdlib/string-format"),W=l(),X=f(),Z=A.get("order"),$=A.get("dtypes.default");function rr(){var t,r,s,n,u,o,i,v,e,a,g;if(t=arguments.length,t<2)throw new Error("invalid invocation. Must provide at least two arguments.");if(i=arguments[0],t===2)if(J(i)&&!h(i))for(r=[],a=0;a<i.length;a++)r.push(i[a]);else r=[i];else for(r=[],a=0;a<t-1;a++)r.push(arguments[a]);if(v=arguments[t-1],!h(v)||w(v)!==1)throw new TypeError(D("invalid argument. Last argument must be a one-dimensional ndarray. Value: `%s`.",v));for(n=[],u=[],s=[],a=0;a<r.length;a++)if(n.push(h(r[a])),n[a]){if(g=w(r[a]),g>1)throw new TypeError(D("invalid argument. Each ndarray argument must have fewer than two dimensions. Argument: %d.",a));u.push(g),s.push(r[a])}else u.push(-1);for(s.length>=1?(e=W(s),o=X(s)):(e=$,o=Z),a=0;a<r.length;a++)n[a]?u[a]===0&&(r[a]=N(r[a],[1])):r[a]=K(r[a],e,[1],o);return Q.assign(r,v)}L.exports=rr});var er=require("@stdlib/utils-define-nonenumerable-read-only-property"),b=T(),ar=O();er(b,"assign",ar);module.exports=b;
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
