import{K as l,j as e,$ as o}from"./app-iAH6PI8Y.js";import{c as a,M as i,C as c,B as n}from"./MainLayout-kPtOslXw.js";import{P as d}from"./ProjectCard-BU0oIJrL.js";import"./Box-BR26RW-P.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],x=a("ArrowLeft",m);function u(){const{projects:t}=l().props;return e.jsx(i,{children:e.jsxs(c,{className:"py-20 px-4 md:px-0",children:[e.jsx("div",{className:"flex w-full items-center justify-between mb-10 mt-10",children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold",children:"Projects"}),e.jsxs(o,{href:route("home"),className:"text-white hover:text-purple-400 transition-colors hover:underline underline-offset-8 flex items-center gap-2",children:[e.jsx(x,{className:"w-4 h-4"}),"Back to home"]})]})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map((s,r)=>e.jsx(n,{delay:r*.25,inView:!0,children:e.jsx(d,{...s})},s.title))})]})})}export{u as default};
