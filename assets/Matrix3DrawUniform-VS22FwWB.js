import{e as c,i as a}from"./Matrix4BindUniform-nJ2bUVpz.js";import{n as d}from"./glsl-Cj7KC756.js";import{a as s}from"./BindType-BBwFZqyN.js";function v({code:o,uniforms:e},r){e.add(new c("dpDummy",()=>1)),o.add(d`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}class f extends a{constructor(e,r){super(e,"mat3",s.Draw,(i,m,t)=>i.setUniformMatrix3fv(e,r(m,t)))}}export{v as e,f as t};
