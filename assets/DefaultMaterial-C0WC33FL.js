const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RealisticTree.glsl-BGV59fEC.js","assets/index-BfVS1IZv.js","assets/index-BL8ZY3dn.css","assets/sdfPrimitives-B89DnMOC.js","assets/vec32-DCEPt2hu.js","assets/vec3f32-WCVSSNPR.js","assets/Texture-Th5JagZi.js","assets/glsl-Cj7KC756.js","assets/VertexAttribute-BfkzOMLV.js","assets/BindType-BBwFZqyN.js","assets/Matrix4BindUniform-nJ2bUVpz.js","assets/ShaderOutput-Bdd80V3g.js","assets/verticalOffsetUtils-D16--bMJ.js","assets/ShaderTechniqueConfiguration-Cplc9kKb.js","assets/boundedPlane-lecAHSLk.js","assets/sphere-BDHJ-Of8.js","assets/mat3-CSenr4hY.js","assets/mat3f64-NKy_SIjb.js","assets/vectorStacks-f-XVIswW.js","assets/mat4f64-q_b6UJoq.js","assets/quatf64-CCm9z-pX.js","assets/vec2f64-rIxtbMRN.js","assets/lineSegment-C1yCkuAi.js","assets/plane-JfrlruLZ.js","assets/mathUtils-DrwzUBSu.js","assets/ViewingMode-Dodu7ZZk.js","assets/orientedBoundingBox-CVH3I5Dn.js","assets/quat-DU6fZTq2.js","assets/spatialReferenceEllipsoidUtils-DOuPUJaw.js","assets/computeTranslationToOriginAndRotation-BgMkpgIW.js","assets/Texture-C4jbNVZ_.js","assets/enums-YGqMJDyZ.js","assets/getDataTypeBytes-CRoyAp_L.js","assets/renderState-D5uZEltT.js","assets/BufferView-ZIDOBHFf.js","assets/vec2-Db98L5NK.js","assets/Indices-B2YqtFO3.js","assets/triangle-B3yz4LJ4.js","assets/videoUtils-BZ42wq8m.js","assets/requestImageUtils-teCQm9do.js","assets/TextureFormat-1mYWTFa-.js","assets/floatRGBA-ewJX3tsb.js","assets/memoryEstimations-DZcK2Nt3.js","assets/IntersectorInterfaces-sN0034Y8.js","assets/Intersector-C-j_flkL.js","assets/ShaderBuilder-BFC91w_r.js","assets/NormalAttribute.glsl-B3M8PA53.js"])))=>i.map(i=>d[i]);
import{H as Ne,o as U,s as Ia,A as Aa,c as Me,r as Pa,g as Re,P as _a,N as Ga}from"./vec32-DCEPt2hu.js";import{jJ as ra,lJ as Q,lI as he,lH as ia,aj as O,_ as ve,I as c,m as Te,d as Da,g8 as ie,l as Fa,g5 as ja,a3 as Ba,aY as I,f0 as Va,i4 as Ra,mG as X,a1 as Ha,a$ as Wa}from"./index-BfVS1IZv.js";import{l as He}from"./ViewingMode-Dodu7ZZk.js";import{O as Ua}from"./InterleavedLayout-DYEY2NPU.js";import{n as w,u as ee,r as We,o as Se,t as Ya,C as qa}from"./ShaderOutput-Bdd80V3g.js";import{a as M,t as pe,b as Ja,n as J}from"./NormalAttribute.glsl-B3M8PA53.js";import{t as Za,C as se,D as Xa,E as ka,b as Ka,F as Qa,s as G,j as ae,G as et,f as B,H as V,I as K,J as E,K as R,M as at,N as tt,i as j,O as ot,P as na,Q as sa,R as la,S as rt,T as Le,U as fe,V as it,u as nt,W as st,X as Ue,Y as Ce,Z as Ye,_ as lt,g as ct,o as N,$ as p,a0 as Ie,a1 as dt,a2 as mt,a3 as ze,a4 as le,c as ut,a5 as ht,a6 as vt,a7 as pt,a8 as ft,d as ce,k as ca,a9 as da,aa as ma,ab as ua,ac as gt,ad as xt,ae as bt,af as wt,ag as Mt,ah as Tt,ai as St,aj as Ct,ak as yt,al as _,A as ye,am as $t}from"./Texture-Th5JagZi.js";import{n as i,t as v}from"./glsl-Cj7KC756.js";import{b as D,o as ha,e as de,i as Ae,d as me,a as Et}from"./Matrix4BindUniform-nJ2bUVpz.js";import{i as $,B as Pe,g as _e,b as qe,e as te,n as oe,f as Ot}from"./renderState-D5uZEltT.js";import{F as zt,w as Nt,a as H,t as Lt,b as va,d as pa,e as fa,p as It,c as At,u as Pt}from"./VertexColor.glsl-zt4ZqvFm.js";import{a as _t,o as Gt,c as Dt,n as Ft,i as jt,d as Bt}from"./verticalOffsetUtils-D16--bMJ.js";import{e as x}from"./VertexAttribute-BfkzOMLV.js";import{e as Ge,r as Y}from"./mat3f64-NKy_SIjb.js";import{t as Vt,e as Rt}from"./Matrix3DrawUniform-VS22FwWB.js";import{j as Ht}from"./mat3-CSenr4hY.js";import{r as Je}from"./mat4f64-q_b6UJoq.js";import{a as Wt,n as ga}from"./vec2f64-rIxtbMRN.js";import{a as ge}from"./BindType-BBwFZqyN.js";import{o as ue}from"./vec2-Db98L5NK.js";import{i as xe}from"./ShaderBuilder-BFC91w_r.js";import{c as De,i as u}from"./ShaderTechniqueConfiguration-Cplc9kKb.js";import{P as Ze,M as Ut,g as Yt,_ as qt,C as Xe}from"./enums-YGqMJDyZ.js";import{a as Jt,S as Zt}from"./Texture-C4jbNVZ_.js";function Xt(e,a){const o=e.fragment;switch(o.code.add(i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),a.doubleSidedMode){case S.None:o.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case S.View:o.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case S.WindingOrder:o.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:ra(a.doubleSidedMode);case S.COUNT:}}var S;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(S||(S={}));function hr({normalTexture:e,metallicRoughnessTexture:a,metallicFactor:o,roughnessFactor:r,emissiveTexture:t,emissiveFactor:n,occlusionTexture:s}){return e==null&&a==null&&t==null&&(n==null||Ne(n,he))&&s==null&&(r==null||r===1)&&(o==null||o===1)}function vr({normalTexture:e,metallicRoughnessTexture:a,metallicFactor:o,roughnessFactor:r,emissiveTexture:t,emissiveFactor:n,occlusionTexture:s}){return e==null&&a==null&&t==null&&(n==null||Ne(n,he))&&s==null&&(r==null||r===1)&&(o==null||o===1||o===0)}const kt=Q(1,1,.5),pr=Q(0,.6,.2),fr=Q(0,1,.2);function xa(e,a){switch(a.normalType){case M.Attribute:case M.Compressed:e.include(pe,a),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Vt("transformNormalGlobalFromModel",o=>o.transformNormalGlobalFromModel),new D("transformNormalViewFromGlobal",o=>o.transformNormalViewFromGlobal)),e.vertex.code.add(i`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case M.ScreenDerivative:e.vertex.code.add(i`void forwardNormal() {}`);break;default:ra(a.normalType);case M.COUNT:}}let Kt=class extends zt{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Ge()}},Qt=class extends Nt{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Ge(),this.toMapSpace=ia()}};function ba(e){e.vertex.code.add(i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}const ke=Ge();function wa(e,a){const{hasModelTransformation:o,instancedDoublePrecision:r,instanced:t,output:n,hasVertexTangents:s}=a;o&&(e.vertex.uniforms.add(new Za("model",d=>d.modelTransformation??Je)),e.vertex.uniforms.add(new D("normalLocalOriginFromModel",d=>(Ht(ke,d.modelTransformation??Je),ke)))),t&&r&&(e.attributes.add(x.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(x.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(x.INSTANCEMODEL,"mat3"),e.attributes.add(x.INSTANCEMODELNORMAL,"mat3"));const l=e.vertex;r&&(l.include(Rt,a),l.uniforms.add(new se("viewOriginHi",d=>Xa(U(ne,d.camera.viewInverseTransposeMatrix[3],d.camera.viewInverseTransposeMatrix[7],d.camera.viewInverseTransposeMatrix[11]),ne)),new se("viewOriginLo",d=>ka(U(ne,d.camera.viewInverseTransposeMatrix[3],d.camera.viewInverseTransposeMatrix[7],d.camera.viewInverseTransposeMatrix[11]),ne)))),l.code.add(i`
    vec3 getVertexInLocalOriginSpace() {
      return ${o?r?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":r?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${r?i`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),l.code.add(i`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${o?r?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":r?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),n===w.Normal&&(Ka(l),l.code.add(i`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${o?r?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":r?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),s&&l.code.add(i`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o?r?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":r?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ne=O();function Ma(e,a){a.hasSymbolColors?(e.include(Ja),e.attributes.add(x.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(i`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Qa("colorMixMode",o=>_t[o.colorMixMode])),e.vertex.code.add(i`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function eo(e,a){switch(a.output){case w.Shadow:case w.ShadowHighlight:case w.ShadowExcludeHighlight:case w.ViewshedShadow:e.fragment.code.add(i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`)}}function W(e,a){Ta(e,a,new G("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function br(e,a){Ta(e,a,new et("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function Ta(e,a,o){const r=e.fragment,t=a.alphaDiscardMode,n=t===$.Blend;t!==$.Mask&&t!==$.MaskBlend||r.uniforms.add(o),r.code.add(i`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${t===$.Opaque?"color.a = 1.0;":`if (color.a < ${n?i.float(ae):"textureAlphaCutoff"}) {
              discard;
             } ${v(t===$.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}function Sa(e,a){const{vertex:o,fragment:r,varyings:t}=e,{hasColorTexture:n,alphaDiscardMode:s}=a,l=n&&s!==$.Opaque,{output:d,normalType:h,hasColorTextureTransform:f}=a;switch(d){case w.Depth:B(o,a),e.include(H,a),r.include(R,a),e.include(V,a),l&&r.uniforms.add(new E("tex",g=>g.texture)),o.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(W,a),r.main.add(i`
        discardBySlice(vpos);
        ${v(l,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case w.Shadow:case w.ShadowHighlight:case w.ShadowExcludeHighlight:case w.ViewshedShadow:case w.ObjectAndLayerIdColor:B(o,a),e.include(H,a),e.include(V,a),e.include(K,a),e.include(eo,a),r.include(R,a),e.include(tt,a),Lt(e),t.add("depth","float",{invariant:!0}),l&&r.uniforms.add(new E("tex",g=>g.texture)),o.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(W,a),r.main.add(i`
        discardBySlice(vpos);
        ${v(l,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${d===w.ObjectAndLayerIdColor?i`outputObjectAndLayerIdColor();`:i`outputDepth(depth);`}`);break;case w.Normal:{B(o,a),e.include(H,a),e.include(pe,a),e.include(xa,a),e.include(V,a),e.include(K,a),l&&r.uniforms.add(new E("tex",C=>C.texture)),h===M.ScreenDerivative&&t.add("vPositionView","vec3",{invariant:!0});const g=h===M.Attribute||h===M.Compressed;o.main.add(i`
        vpos = getVertexInLocalOriginSpace();
        ${g?i`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:i`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(R,a),e.include(W,a),r.main.add(i`
        discardBySlice(vpos);
        ${v(l,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${h===M.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionView);`:i`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case w.Highlight:B(o,a),e.include(H,a),e.include(V,a),e.include(K,a),l&&r.uniforms.add(new E("tex",g=>g.texture)),o.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(R,a),e.include(W,a),e.include(at,a),r.main.add(i`
        discardBySlice(vpos);
        ${v(l,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function ao(e,a){const o=e.fragment,{hasVertexTangents:r,doubleSidedMode:t,hasNormalTexture:n,textureCoordinateType:s,bindType:l,hasNormalTextureTransform:d}=a;r?(e.attributes.add(x.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t===S.WindingOrder?o.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(i`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),n&&s!==j.None&&(e.include(ot,a),o.uniforms.add(l===ge.Pass?new E("normalTexture",h=>h.textureNormal):new ha("normalTexture",h=>h.textureNormal)),d&&(o.uniforms.add(new na("scale",h=>h.scale??Wt)),o.uniforms.add(new D("normalTextureTransformMatrix",h=>h.normalTextureTransformMatrix??Y))),o.code.add(i`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),d&&o.code.add(i`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(i`return tangentSpace * rawNormal;
}`))}const $e=4;function to(){const e=new xe,a=e.fragment;e.include(sa);const o=($e+1)/2,r=1/(2*o*o);return a.include(la),a.uniforms.add(new E("depthMap",t=>t.depthTexture),new ha("tex",t=>t.colorTexture),new rt("blurSize",t=>t.blurSize),new G("projScale",(t,n)=>{const s=n.camera.distance;return s>5e4?Math.max(0,t.projScale-(s-5e4)):t.projScale})),a.code.add(i`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${i.float(r)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),a.main.add(i`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${i.int($e)}; r <= ${i.int($e)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const oo=Object.freeze(Object.defineProperty({__proto__:null,build:to},Symbol.toStringTag,{value:"Module"}));let Ke=class extends Le{constructor(a,o){super(a,o,new fe(oo,()=>ve(()=>import("./RealisticTree.glsl-BGV59fEC.js").then(r=>r.c),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]))))}initializePipeline(){return Pe({colorWrite:_e})}};const ro="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let io=class extends De{constructor(){super(...arguments),this.projScale=1}},no=class extends io{constructor(){super(...arguments),this.intensity=1}},so=class extends De{},lo=class extends so{constructor(){super(...arguments),this.blurSize=ga()}};const Qe=16;function co(){const e=new xe,a=e.fragment;return e.include(sa),e.include(it),a.include(la),a.uniforms.add(new de("radius",o=>Fe(o.camera))).code.add(i`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),a.code.add(i`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add("fragOcclusion","float"),a.uniforms.add(new E("normalMap",o=>o.normalTexture),new E("depthMap",o=>o.depthTexture),new G("projScale",o=>o.projScale),new E("rnm",o=>o.noiseTexture),new na("rnmScale",(o,r)=>ue(ea,r.camera.fullWidth/o.noiseTexture.descriptor.width,r.camera.fullHeight/o.noiseTexture.descriptor.height)),new G("intensity",o=>o.intensity),new nt("screenSize",o=>ue(ea,o.camera.fullWidth,o.camera.fullHeight))).main.add(i`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${i.int(Qe)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${i.int(Qe)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

    fragOcclusion = A;
  `),e}function Fe(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const ea=ga(),mo=Object.freeze(Object.defineProperty({__proto__:null,build:co,getRadius:Fe},Symbol.toStringTag,{value:"Module"}));let aa=class extends Le{constructor(a,o){super(a,o,new fe(mo,()=>ve(()=>import("./RealisticTree.glsl-BGV59fEC.js").then(r=>r.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]))))}initializePipeline(){return Pe({colorWrite:_e})}};const k=2;let Z=class extends st{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=Ue.SSAO,this.isEnabled=()=>!1,this._enableTime=ie(0),this._passParameters=new no,this._drawParameters=new lo}initialize(){const e=Uint8Array.from(atob(ro),o=>o.charCodeAt(0)),a=new Jt;a.wrapMode=Ze.CLAMP_TO_EDGE,a.pixelFormat=Ut.RGB,a.wrapMode=Ze.REPEAT,a.hasMipmap=!0,a.width=32,a.height=32,this._passParameters.noiseTexture=new Zt(this.renderingContext,a,e),this.techniques.precompile(aa),this.techniques.precompile(Ke),this.addHandles(Fa(()=>this.isEnabled(),()=>this._enableTime=ie(0)))}destroy(){this._passParameters.noiseTexture=ja(this._passParameters.noiseTexture)}render(e){const a=e.find(({name:be})=>be==="normals"),o=a?.getTexture(),r=a?.getTexture(Yt);if(!o||!r)return;const t=this.techniques.get(aa),n=this.techniques.get(Ke);if(!t.compiled||!n.compiled)return this._enableTime=ie(performance.now()),void this.requestRender(qe.UPDATE);this._enableTime===0&&(this._enableTime=ie(performance.now()));const s=this.renderingContext,l=this.view.qualitySettings.fadeDuration,d=this.bindParameters,h=d.camera,f=h.relativeElevation,g=Ba((Ye-f)/(Ye-lt),0,1),C=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,z=C*g;this._passParameters.normalTexture=o,this._passParameters.depthTexture=r,this._passParameters.projScale=1/h.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*uo/Fe(h)**6*z;const T=h.fullViewport[2],L=h.fullViewport[3],P=this.fboCache.acquire(T,L,"ssao input",Ce.RG8UNORM);s.bindFramebuffer(P.fbo),s.setViewport(0,0,T,L),s.bindTechnique(t,d,this._passParameters,this._drawParameters),s.screen.draw();const b=Math.round(T/k),F=Math.round(L/k),q=this.fboCache.acquire(b,F,"ssao blur",Ce.R8UNORM);s.bindFramebuffer(q.fbo),this._drawParameters.colorTexture=P.getTexture(),ue(this._drawParameters.blurSize,0,k/L),s.bindTechnique(n,d,this._passParameters,this._drawParameters),s.setViewport(0,0,b,F),s.screen.draw(),P.release();const re=this.fboCache.acquire(b,F,Ue.SSAO,Ce.R8UNORM);return s.bindFramebuffer(re.fbo),s.setViewport(0,0,T,L),s.setClearColor(1,1,1,0),s.clear(qt.COLOR),this._drawParameters.colorTexture=q.getTexture(),ue(this._drawParameters.blurSize,k/T,0),s.bindTechnique(n,d,this._passParameters,this._drawParameters),s.setViewport(0,0,b,F),s.screen.draw(),s.setViewport4fv(h.fullViewport),q.release(),C<1&&this.requestRender(qe.UPDATE),re}};c([Te()],Z.prototype,"consumes",void 0),c([Te()],Z.prototype,"produces",void 0),c([Te({constructOnly:!0})],Z.prototype,"isEnabled",void 0),Z=c([Da("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Z);const uo=.5;function je(e,a){a.receiveAmbientOcclusion?(e.uniforms.add(new ct("ssaoTex",o=>o.ssao?.getTexture())),e.constants.add("blurSizePixelsInverse","float",1/k),e.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function ho(e,a){const o=e.fragment,r=a.lightingSphericalHarmonicsOrder!==void 0?a.lightingSphericalHarmonicsOrder:2;r===0?(o.uniforms.add(new se("lightingAmbientSH0",({lighting:t})=>U(ta,t.sh.r[0],t.sh.g[0],t.sh.b[0]))),o.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===1?(o.uniforms.add(new N("lightingAmbientSH_R",({lighting:t})=>I(A,t.sh.r[0],t.sh.r[1],t.sh.r[2],t.sh.r[3])),new N("lightingAmbientSH_G",({lighting:t})=>I(A,t.sh.g[0],t.sh.g[1],t.sh.g[2],t.sh.g[3])),new N("lightingAmbientSH_B",({lighting:t})=>I(A,t.sh.b[0],t.sh.b[1],t.sh.b[2],t.sh.b[3]))),o.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===2&&(o.uniforms.add(new se("lightingAmbientSH0",({lighting:t})=>U(ta,t.sh.r[0],t.sh.g[0],t.sh.b[0])),new N("lightingAmbientSH_R1",({lighting:t})=>I(A,t.sh.r[1],t.sh.r[2],t.sh.r[3],t.sh.r[4])),new N("lightingAmbientSH_G1",({lighting:t})=>I(A,t.sh.g[1],t.sh.g[2],t.sh.g[3],t.sh.g[4])),new N("lightingAmbientSH_B1",({lighting:t})=>I(A,t.sh.b[1],t.sh.b[2],t.sh.b[3],t.sh.b[4])),new N("lightingAmbientSH_R2",({lighting:t})=>I(A,t.sh.r[5],t.sh.r[6],t.sh.r[7],t.sh.r[8])),new N("lightingAmbientSH_G2",({lighting:t})=>I(A,t.sh.g[5],t.sh.g[6],t.sh.g[7],t.sh.g[8])),new N("lightingAmbientSH_B2",({lighting:t})=>I(A,t.sh.b[5],t.sh.b[6],t.sh.b[7],t.sh.b[8]))),o.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),a.pbrMode!==p.Normal&&a.pbrMode!==p.Schematic||o.code.add(i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const ta=O(),A=ia();function vo(e){e.code.add(i`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(i`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Be(e){e.constants.add("ambientBoostFactor","float",vt)}function Ve(e){e.uniforms.add(new de("lightingGlobalFactor",a=>a.lighting.globalFactor))}function Ca(e,a){const o=e.fragment,{pbrMode:r,spherical:t,hasColorTexture:n}=a;o.include(je,a),r!==p.Disabled&&o.include(Ie,a),e.include(ho,a),o.include(dt),o.include(mt,a);const s=!(r===p.Schematic&&!n);switch(s&&o.include(vo),o.code.add(i`
    const float GAMMA_SRGB = ${i.float(Va)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${v(r!==p.Disabled,"const float GROUND_REFLECTANCE = 0.2;")}
  `),Be(o),Ve(o),ze(o),o.code.add(i`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),le(o),o.code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),r){case p.Disabled:case p.WaterOnIntegratedMesh:case p.Water:e.include(ht),o.code.add(i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case p.Normal:case p.Schematic:o.code.add(i`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, vec4 _emission,
float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),a.useFillLights?o.uniforms.add(new ut("hasFillLights",l=>l.enableFillLights)):o.constants.add("hasFillLights","bool",!1),o.code.add(i`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new de("lightingSpecularStrength",l=>l.lighting.mainLight.specularStrength),new de("lightingEnvironmentStrength",l=>l.lighting.mainLight.environmentStrength)).code.add(i`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),o.code.add(i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : tonemapACES(pow(_emission.rgb, vec3(GAMMA_SRGB)));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${s?i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case p.Simplified:case p.TerrainWithWater:ze(o),le(o),o.code.add(i`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);default:case p.COUNT:}}let po=class extends Ae{constructor(a,o,r){super(a,"mat4",ge.Draw,(t,n,s,l)=>t.setUniformMatrix4fv(a,o(n,s,l)),r)}},fo=class extends Ae{constructor(a,o,r){super(a,"mat4",ge.Pass,(t,n,s)=>t.setUniformMatrix4fv(a,o(n,s)),r)}};function go(e){e.fragment.uniforms.add(new fo("shadowMapMatrix",(a,o)=>o.shadowMap.getShadowMapMatrices(a.origin),4)),ya(e)}function xo(e){e.fragment.uniforms.add(new po("shadowMapMatrix",(a,o)=>o.shadowMap.getShadowMapMatrices(a.origin),4)),ya(e)}function ya(e){const{fragment:a}=e;a.uniforms.add(new N("cascadeDistances",o=>o.shadowMap.cascadeDistances),new pt("numCascades",o=>o.shadowMap.numCascades)),a.code.add(i`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}function bo(e){e.fragment.code.add(i`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}class wo extends Ae{constructor(a,o){super(a,"sampler2DShadow",ge.Bind,(r,t)=>r.bindTexture(a,o(t)))}}let Or=class extends De{constructor(){super(...arguments),this.origin=O()}};function $a(e,a){a.receiveShadows&&(e.include(go),Oa(e))}function Ea(e,a){a.receiveShadows&&(e.include(xo),Oa(e))}function Oa(e){e.include(bo);const{fragment:a}=e;a.uniforms.add(new wo("shadowMap",o=>o.shadowMap.depthTexture)),a.code.add(i`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function Mo(e,a){a.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new D("colorTextureTransformMatrix",o=>o.colorTextureTransformMatrix??Y)).code.add(i`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardColorUV(){}`)}function To(e,a){a.hasNormalTextureTransform&&a.textureCoordinateType!==j.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new D("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??Y)).code.add(i`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardNormalUV(){}`)}function So(e,a){a.hasEmissionTextureTransform&&a.textureCoordinateType!==j.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new D("emissiveTextureTransformMatrix",o=>o.emissiveTextureTransformMatrix??Y)).code.add(i`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardEmissiveUV(){}`)}function Co(e,a){a.hasOcclusionTextureTransform&&a.textureCoordinateType!==j.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new D("occlusionTextureTransformMatrix",o=>o.occlusionTextureTransformMatrix??Y)).code.add(i`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardOcclusionUV(){}`)}function yo(e,a){a.hasMetallicRoughnessTextureTransform&&a.textureCoordinateType!==j.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new D("metallicRoughnessTextureTransformMatrix",o=>o.metallicRoughnessTextureTransformMatrix??Y)).code.add(i`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardMetallicRoughnessUV(){}`)}function za(e){e.include(ft),e.code.add(i`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.int(J.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.int(J.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(J.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.int(J.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(J.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function $o(e,a){a.snowCover&&(e.code.add(i`float getSnow(vec3 normal, vec3 normalGround) {
return smoothstep(0.5, 0.55, dot(normal, normalGround));
}`),e.code.add(i`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}
vec4 snowCoverForEmissions(vec4 emission, float snow) {
return mix(emission, vec4(0.0), snow);
}`))}function Eo(e){const a=new xe,{attributes:o,vertex:r,fragment:t,varyings:n}=a,{output:s,normalType:l,offsetBackfaces:d,instancedColor:h,spherical:f,receiveShadows:g,snowCover:C,pbrMode:z,textureAlphaPremultiplied:T,instancedDoublePrecision:L,hasVertexColors:P,hasVertexTangents:b,hasColorTexture:F,hasNormalTexture:q,hasNormalTextureTransform:re,hasColorTextureTransform:be,hasBloom:La}=e;if(B(r,e),o.add(x.POSITION,"vec3"),n.add("vpos","vec3",{invariant:!0}),a.include(K,e),a.include(wa,e),a.include(va,e),a.include(Mo,e),!ee(s))return a.include(Sa,e),a;a.include(To,e),a.include(So,e),a.include(Co,e),a.include(yo,e),ce(r,e),a.include(pe,e),a.include(H,e);const we=l===M.Attribute||l===M.Compressed;return we&&d&&a.include(ba),a.include(ao,e),a.include(xa,e),h&&a.attributes.add(x.INSTANCECOLOR,"vec4"),n.add("vPositionLocal","vec3"),a.include(V,e),a.include(pa,e),a.include(Ma,e),a.include(fa,e),r.uniforms.add(new ca("externalColor",y=>y.colorMixMode==="ignore"?Ra:y.externalColor)),n.add("vcolorExt","vec4"),a.include(da,e),r.main.add(i`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${v(h,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${v(we,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${v(b,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${v(we&&d,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${i.float(ae)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),a.include(Ca,e),t.include(je,e),a.include(W,e),a.include(L?$a:Ea,e),t.include(R,e),a.include(ma,e),ce(t,e),t.uniforms.add(r.uniforms.get("localOrigin"),new me("ambient",y=>y.ambient),new me("diffuse",y=>y.diffuse),new G("opacity",y=>y.opacity),new G("layerOpacity",y=>y.layerOpacity)),F&&t.uniforms.add(new E("tex",y=>y.texture)),a.include(ua,e),t.include(Ie,e),t.include(za),a.include(Xt,e),t.include($o,e),Be(t),Ve(t),le(t),t.main.add(i`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${F?i`
            vec4 texColor = texture(tex, ${be?"colorUV":"vuv0"});
            ${v(T,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${l===M.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionLocal);`:i`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${g?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":v(f,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${v(P,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${v(P,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${q?`mat3 tangentSpace = computeTangentSpace(${b?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${re?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${f?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${v(C,i`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${z===p.Normal||z===p.Schematic?i`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            vec4 emission = ${La?"vec4(0.0)":"getEmissions(albedo)"};
            ${v(C,`mrr = applySnowToMRR(mrr, snow);
                 emission = snowCoverForEmissions(emission, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${v(C,", snow")});
  `),a}const Oo=Object.freeze(Object.defineProperty({__proto__:null,build:Eo},Symbol.toStringTag,{value:"Module"}));class zo extends Kt{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=kt,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=te.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveStrength=0,this.emissiveSource=X.Color,this.emissiveBaseColor=he,this.instancedDoublePrecision=!1,this.normalType=M.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=Q(.2,.2,.2),this.diffuse=Q(.8,.8,.8),this.externalColor=Ha(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=O(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=oe.Less,this.textureAlphaMode=$.Blend,this.textureAlphaCutoff=ae,this.textureAlphaPremultiplied=!1,this.renderOccluded=Gt.Occlude,this.isDecoration=!1}}class Nr extends Qt{constructor(){super(...arguments),this.origin=O(),this.slicePlaneLocalOrigin=this.origin}}class Na extends Le{constructor(a,o,r=new fe(Oo,()=>ve(()=>import("./RealisticTree.glsl-BGV59fEC.js").then(t=>t.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46])))){super(a,o,r),this.type="DefaultMaterialTechnique"}_makePipeline(a,o){const{oitPass:r,output:t,transparent:n,cullFace:s,customDepthTest:l,hasOccludees:d}=a;return Pe({blending:ee(t)&&n?Tt(r):null,culling:Lo(a)?Ot(s):null,depthTest:{func:Mt(r,No(l))},depthWrite:wt(a),drawBuffers:xt(t,bt(r,t)),colorWrite:_e,stencilWrite:d?yt:null,stencilTest:d?o?St:Ct:null,polygonOffset:gt(a)})}initializePipeline(a){return this._occludeePipelineState=this._makePipeline(a,!0),this._makePipeline(a,!1)}getPipeline(a){return a?this._occludeePipelineState:super.getPipeline()}}function No(e){return e===oe.Lequal?Xe.LEQUAL:Xe.LESS}function Lo(e){return e.cullFace!==te.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}class m extends Dt{constructor(a){super(),this.spherical=a,this.alphaDiscardMode=$.Opaque,this.doubleSidedMode=S.None,this.pbrMode=p.Disabled,this.cullFace=te.None,this.normalType=M.Attribute,this.customDepthTest=oe.Less,this.emissionSource=_.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasBloom=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===_.Texture||this.hasOcclusionTexture||this.hasNormalTexture?j.Default:j.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}c([u({count:$.COUNT})],m.prototype,"alphaDiscardMode",void 0),c([u({count:S.COUNT})],m.prototype,"doubleSidedMode",void 0),c([u({count:p.COUNT})],m.prototype,"pbrMode",void 0),c([u({count:te.COUNT})],m.prototype,"cullFace",void 0),c([u({count:M.COUNT})],m.prototype,"normalType",void 0),c([u({count:oe.COUNT})],m.prototype,"customDepthTest",void 0),c([u({count:_.COUNT})],m.prototype,"emissionSource",void 0),c([u()],m.prototype,"hasVertexColors",void 0),c([u()],m.prototype,"hasSymbolColors",void 0),c([u()],m.prototype,"hasVerticalOffset",void 0),c([u()],m.prototype,"hasColorTexture",void 0),c([u()],m.prototype,"hasMetallicRoughnessTexture",void 0),c([u()],m.prototype,"hasOcclusionTexture",void 0),c([u()],m.prototype,"hasNormalTexture",void 0),c([u()],m.prototype,"hasScreenSizePerspective",void 0),c([u()],m.prototype,"hasVertexTangents",void 0),c([u()],m.prototype,"hasOccludees",void 0),c([u()],m.prototype,"instancedDoublePrecision",void 0),c([u()],m.prototype,"hasModelTransformation",void 0),c([u()],m.prototype,"offsetBackfaces",void 0),c([u()],m.prototype,"vvSize",void 0),c([u()],m.prototype,"vvColor",void 0),c([u()],m.prototype,"receiveShadows",void 0),c([u()],m.prototype,"receiveAmbientOcclusion",void 0),c([u()],m.prototype,"textureAlphaPremultiplied",void 0),c([u()],m.prototype,"instanced",void 0),c([u()],m.prototype,"instancedColor",void 0),c([u()],m.prototype,"writeDepth",void 0),c([u()],m.prototype,"transparent",void 0),c([u()],m.prototype,"enableOffset",void 0),c([u()],m.prototype,"terrainDepthTest",void 0),c([u()],m.prototype,"cullAboveTerrain",void 0),c([u()],m.prototype,"snowCover",void 0),c([u()],m.prototype,"hasBloom",void 0),c([u()],m.prototype,"hasColorTextureTransform",void 0),c([u()],m.prototype,"hasEmissionTextureTransform",void 0),c([u()],m.prototype,"hasNormalTextureTransform",void 0),c([u()],m.prototype,"hasOcclusionTextureTransform",void 0),c([u()],m.prototype,"hasMetallicRoughnessTextureTransform",void 0);function Io(e){const a=new xe,{attributes:o,vertex:r,fragment:t,varyings:n}=a,{output:s,offsetBackfaces:l,instancedColor:d,pbrMode:h,snowCover:f,spherical:g,hasBloom:C}=e,z=h===p.Normal||h===p.Schematic;if(B(r,e),o.add(x.POSITION,"vec3"),n.add("vpos","vec3",{invariant:!0}),a.include(K,e),a.include(wa,e),a.include(va,e),a.include(da,e),ee(s)&&(ce(a.vertex,e),a.include(pe,e),a.include(H,e),l&&a.include(ba),d&&a.attributes.add(x.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3",{invariant:!0}),a.include(V,e),a.include(pa,e),a.include(Ma,e),a.include(fa,e),r.uniforms.add(new ca("externalColor",T=>T.externalColor)),n.add("vcolorExt","vec4"),r.main.add(i`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${v(d,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${i.float(ae)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${v(l,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),ee(s)){const{hasColorTexture:T,hasColorTextureTransform:L,receiveShadows:P}=e;a.include(Ca,e),t.include(je,e),a.include(W,e),a.include(e.instancedDoublePrecision?$a:Ea,e),t.include(R,e),a.include(ma,e),ce(t,e),ze(t),Be(t),Ve(t),t.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new me("ambient",b=>b.ambient),new me("diffuse",b=>b.diffuse),new G("opacity",b=>b.opacity),new G("layerOpacity",b=>b.layerOpacity)),T&&t.uniforms.add(new E("tex",b=>b.texture)),a.include(ua,e),t.include(Ie,e),t.include(za),le(t),t.main.add(i`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${T?`texture(tex, ${L?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${v(T,`${v(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${P?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":g?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?i`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${v(f,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${i`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${v(z,`vec3 normalGround = ${g?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${z?i`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${v(f,i`mrr = applySnowToMRR(mrr, 1.0)`)}
            vec4 emission = ${f||C?"vec4(0.0)":"getEmissions(albedo)"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos, albedo ${v(f,", 1.0")});`)}return a.include(Sa,e),a}const Ao=Object.freeze(Object.defineProperty({__proto__:null,build:Io},Symbol.toStringTag,{value:"Module"}));class Po extends Na{constructor(a,o){super(a,o,new fe(Ao,()=>ve(()=>import("./RealisticTree.glsl-BGV59fEC.js").then(r=>r.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46])))),this.type="RealisticTreeTechnique"}}class Lr extends Ft{constructor(a,o){super(a,Go),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[ye.OPAQUE_MATERIAL,r=>(We(r)||Se(r))&&!this.transparent],[ye.TRANSPARENT_MATERIAL,r=>(We(r)||Se(r))&&this.transparent&&this.parameters.writeDepth],[ye.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,r=>(Ya(r)||Se(r))&&this.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=Do(this.parameters),this._configuration=new m(o.spherical)}isVisibleForOutput(a){return a!==w.Shadow&&a!==w.ShadowExcludeHighlight&&a!==w.ShadowHighlight||this.parameters.castShadows}get visible(){const{layerOpacity:a,colorMixMode:o,opacity:r,externalColor:t}=this.parameters;return a*(o==="replace"?1:r)*(o==="ignore"?1:t[3])>=ae}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!Ne(this.parameters.emissiveBaseColor,he)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===X.Emissive&&this._hasEmissiveBase||this.parameters.emissiveSource===X.Color)}getConfiguration(a,o){const{parameters:r,_configuration:t}=this,{treeRendering:n,doubleSided:s,doubleSidedType:l}=r;return super.getConfiguration(a,o,this._configuration),t.hasNormalTexture=!n&&!!r.normalTextureId,t.hasColorTexture=!!r.textureId,t.hasVertexTangents=!n&&r.hasVertexTangents,t.instanced=r.isInstanced,t.instancedDoublePrecision=r.instancedDoublePrecision,t.vvSize=!!r.vvSize,t.hasVerticalOffset=r.verticalOffset!=null,t.hasScreenSizePerspective=r.screenSizePerspective!=null,t.hasSlicePlane=r.hasSlicePlane,t.alphaDiscardMode=r.textureAlphaMode,t.normalType=n?M.Attribute:r.normalType,t.transparent=this.transparent,t.writeDepth=r.writeDepth,t.customDepthTest=r.customDepthTest??oe.Less,t.hasOccludees=o.hasOccludees,t.cullFace=r.hasSlicePlane?te.None:r.cullFace,t.cullAboveTerrain=o.cullAboveTerrain,t.hasModelTransformation=!n&&r.modelTransformation!=null,t.hasVertexColors=r.hasVertexColors,t.hasSymbolColors=r.hasSymbolColors,t.doubleSidedMode=n?S.WindingOrder:s&&l==="normal"?S.View:s&&l==="winding-order"?S.WindingOrder:S.None,t.instancedColor=r.hasInstancedColor,ee(a)?(t.terrainDepthTest=o.terrainDepthTest,t.receiveShadows=r.receiveShadows,t.receiveAmbientOcclusion=r.receiveAmbientOcclusion&&o.ssao!=null):(t.terrainDepthTest=!1,t.receiveShadows=t.receiveAmbientOcclusion=!1),t.vvColor=!!r.vvColor,t.textureAlphaPremultiplied=!!r.textureAlphaPremultiplied,t.pbrMode=r.usePBR?r.isSchematic?p.Schematic:p.Normal:p.Disabled,t.hasMetallicRoughnessTexture=!n&&!!r.metallicRoughnessTextureId,t.emissionSource=n?_.None:r.emissiveTextureId!=null&&r.emissiveSource===X.Emissive?_.Texture:r.usePBR?r.emissiveSource===X.Emissive?_.EmissiveColor:_.SymbolColor:_.None,t.hasOcclusionTexture=!n&&!!r.occlusionTextureId,t.offsetBackfaces=!(!this.transparent||!r.offsetTransparentBackfaces),t.oitPass=o.oitPass,t.enableOffset=o.camera.relativeElevation<$t,t.snowCover=o.snowCover,t.hasBloom=qa(a),t.hasColorTextureTransform=!!r.colorTextureTransformMatrix,t.hasNormalTextureTransform=!!r.normalTextureTransformMatrix,t.hasEmissionTextureTransform=!!r.emissiveTextureTransformMatrix,t.hasOcclusionTextureTransform=!!r.occlusionTextureTransformMatrix,t.hasMetallicRoughnessTextureTransform=!!r.metallicRoughnessTextureTransformMatrix,t}intersect(a,o,r,t,n,s){if(this.parameters.verticalOffset!=null){const l=r.camera;U(Oe,o[12],o[13],o[14]);let d=null;switch(r.viewingMode){case He.Global:d=Aa(oa,Oe);break;case He.Local:d=Ia(oa,Vo)}let h=0;const f=Me(Ro,Oe,l.eye),g=Pa(f),C=Re(f,f,1/g);let z=null;this.parameters.screenSizePerspective&&(z=_a(d,C)),h+=jt(l,g,this.parameters.verticalOffset,z??0,this.parameters.screenSizePerspective),Re(d,d,h),Ga(Ee,d,r.transform.inverseRotation),t=Me(jo,t,Ee),n=Me(Bo,n,Ee)}It(a,r,t,n,Bt(r.verticalOffset),s)}createGLMaterial(a){return new _o(a)}createBufferWriter(){return new At(this._vertexBufferLayout)}get transparent(){return Fo(this.parameters)}}class _o extends Pt{constructor(a){super({...a,...a.material.parameters})}beginSlot(a){this._material.setParameters({receiveShadows:a.shadowMap.enabled});const o=this._material.parameters;this.updateTexture(o.textureId);const r=a.camera.viewInverseTransposeMatrix;return U(o.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(o.treeRendering?Po:Na,a)}}class Go extends zo{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}function Do(e){const a=Ua().vec3f(x.POSITION);return e.normalType===M.Compressed?a.vec2i16(x.NORMALCOMPRESSED,{glNormalized:!0}):a.vec3f(x.NORMAL),e.hasVertexTangents&&a.vec4f(x.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&a.vec2f16(x.UV0),e.hasVertexColors&&a.vec4u8(x.COLOR),e.hasSymbolColors&&a.vec4u8(x.SYMBOLCOLOR),Et()&&a.vec4u8(x.OLIDCOLOR),a}function Fo(e){const{drivenOpacity:a,opacity:o,externalColor:[r,t,n,s],layerOpacity:l,texture:d,textureId:h,textureAlphaMode:f,colorMixMode:g}=e;return a||o<1&&g!=="replace"||s<1&&g!=="ignore"||l<1||(d!=null||h!=null)&&f!==$.Opaque&&f!==$.Mask&&g!=="replace"}const jo=O(),Bo=O(),Vo=Wa(0,0,1),oa=O(),Ee=O(),Oe=O(),Ro=O();export{bo as A,wo as B,Kt as C,Z as D,Go as H,Eo as K,Ca as L,Fo as Q,Io as R,ao as T,Lr as W,fo as a,je as b,Xt as c,Be as d,eo as e,Ve as f,$o as g,Ea as h,to as i,S as j,Nr as k,ho as l,co as m,hr as n,pr as o,Qt as p,Or as q,vr as r,fr as s,kt as t,xa as u,Fe as v,za as w,br as x,$a as y,go as z};
