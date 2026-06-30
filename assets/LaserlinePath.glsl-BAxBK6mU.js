import{dJ as j,lH as Pe,aj as h,k4 as te,_ as ie,a$ as F,nz as ve,i2 as be,I as g,g5 as De,m as A,d as we,dD as B}from"./index-BfVS1IZv.js";import{E as v,c as ne,A as R,r as G,p as se,s as b,_ as Ee,u as ae,o as O}from"./vec32-DCEPt2hu.js";import{l as Ve,v as z,p as U,b as xe}from"./lineSegment-C1yCkuAi.js";import{t as ye}from"./VisualElement-D1GwOMLS.js";import{y as Se,a as Le,m as Ce,p as Ae,g as Te}from"./frustum-CSpPEiTr.js";import{E as Me,U as $e,k as Re}from"./sphere-BDHJ-Of8.js";import{l as N}from"./ViewingMode-Dodu7ZZk.js";import{R as Ue,V as Oe,s as m,g as Ie,J as X,Q as qe,k as T,C as ze,P as M,T as re,U as le,t as Ne,u as je,W as We,X as k}from"./Texture-Th5JagZi.js";import{e as He,o as Fe,i as Be}from"./Compositing.glsl-BcMQiux_.js";import{t as Ge}from"./glUtil-8m_3uQ2q.js";import{O as oe}from"./InterleavedLayout-DYEY2NPU.js";import{c as Xe,a as ke,i as x}from"./ShaderTechniqueConfiguration-Cplc9kKb.js";import{e as o}from"./VertexAttribute-BfkzOMLV.js";import{r as Je}from"./OverlayCompositing.glsl-B_ITBQGg.js";import{E as Qe}from"./VertexArrayObject-DumAgx5j.js";import{R as Ye,Y as Ze,_ as J}from"./enums-YGqMJDyZ.js";import{b as c}from"./renderState-D5uZEltT.js";import{h as Ke}from"./verticalOffsetUtils-D16--bMJ.js";import{o as ce}from"./vec2-Db98L5NK.js";import{n as he}from"./vec2f64-rIxtbMRN.js";import{l as et,M as tt}from"./plane-JfrlruLZ.js";import"./BindType-BBwFZqyN.js";import{n as r,t as Q}from"./glsl-Cj7KC756.js";import{i as de}from"./ShaderBuilder-BFC91w_r.js";import{d as E,e as pe,t as it}from"./Matrix4BindUniform-nJ2bUVpz.js";import{e as nt}from"./mat4f64-q_b6UJoq.js";function ue(t,e){const n=t.fragment;n.include(Ue),t.include(Oe),n.include(He),n.uniforms.add(new m("globalAlpha",i=>i.globalAlpha),new E("glowColor",i=>i.glowColor),new m("glowWidth",(i,s)=>i.glowWidth*s.camera.pixelRatio),new m("glowFalloff",i=>i.glowFalloff),new E("innerColor",i=>i.innerColor),new m("innerWidth",(i,s)=>i.innerWidth*s.camera.pixelRatio),new Ie("depthMap",i=>i.depth?.attachment),new X("normalMap",i=>i.normals)),n.code.add(r`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),n.code.add(r`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendColorsPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),n.code.add(r`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
vec3 normalReconstructed = normalize(cross(dFdx(pos), dFdy(pos)));
vec3 normalFromTexture = normalize(texture(normalMap, uv).xyz * 2.0 - 1.0);
float blendFactor = smoothstep(0.15, 0.2, depthError);
normal = normalize(mix(normalReconstructed, normalFromTexture, blendFactor));
angleCutoffAdjust = mix(0.0, 0.004, blendFactor);
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),e.contrastControlEnabled?n.uniforms.add(new X("frameColor",(i,s)=>i.colors),new m("globalAlphaContrastBoost",i=>i.globalAlphaContrastBoost)).code.add(r`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`):n.code.add(r`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}const W=j(6);function fe(t){const e=new de;e.include(qe),e.include(ue,t);const n=e.fragment;if(t.lineVerticalPlaneEnabled||t.heightManifoldEnabled)if(n.uniforms.add(new m("maxPixelDistance",(i,s)=>t.heightManifoldEnabled?2*s.camera.computeScreenPixelSizeAt(i.heightManifoldTarget):2*s.camera.computeScreenPixelSizeAt(i.lineVerticalPlaneSegment.origin))),n.code.add(r`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),t.spherical){const i=(a,l,u)=>v(a,l.heightManifoldTarget,u.camera.viewMatrix),s=(a,l)=>v(a,[0,0,0],l.camera.viewMatrix);n.uniforms.add(new T("heightManifoldOrigin",(a,l)=>(i(f,a,l),s(V,l),ne(V,V,f),R(p,V),p[3]=G(V),p)),new ze("globalOrigin",a=>s(f,a)),new m("cosSphericalAngleThreshold",(a,l)=>1-Math.max(2,se(l.camera.eye,a.heightManifoldTarget)*l.camera.perRenderPixelRatio)/G(a.heightManifoldTarget))),n.code.add(r`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else n.code.add(r`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(t.pointDistanceEnabled&&(n.uniforms.add(new m("maxPixelDistance",(i,s)=>2*s.camera.computeScreenPixelSizeAt(i.pointDistanceTarget))),n.code.add(r`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),t.intersectsLineEnabled&&n.uniforms.add(new pe("perScreenPixelRatio",i=>i.camera.perScreenPixelRatio)).code.add(r`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`),(t.lineVerticalPlaneEnabled||t.intersectsLineEnabled)&&n.code.add(r`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),n.main.add(r`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),t.heightManifoldEnabled){n.uniforms.add(new M("angleCutoff",s=>$(s)),new T("heightPlane",(s,a)=>ge(s.heightManifoldTarget,s.renderCoordsHelper.worldUpAtPosition(s.heightManifoldTarget,f),a.camera.viewMatrix)));const i=t.spherical?r`normalize(globalOrigin - pos)`:r`heightPlane.xyz`;n.main.add(r`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${i})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return t.pointDistanceEnabled&&(n.uniforms.add(new M("angleCutoff",i=>$(i)),new T("pointDistanceSphere",(i,s)=>st(i,s))),n.main.add(r`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),t.lineVerticalPlaneEnabled&&(n.uniforms.add(new M("angleCutoff",i=>$(i)),new T("lineVerticalPlane",(i,s)=>at(i,s)),new E("lineVerticalStart",(i,s)=>rt(i,s)),new E("lineVerticalEnd",(i,s)=>lt(i,s))),n.main.add(r`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),t.intersectsLineEnabled&&(n.uniforms.add(new M("angleCutoff",i=>$(i)),new E("intersectsLineStart",(i,s)=>v(f,i.lineStartWorld,s.camera.viewMatrix)),new E("intersectsLineEnd",(i,s)=>v(f,i.lineEndWorld,s.camera.viewMatrix)),new E("intersectsLineDirection",(i,s)=>(b(p,i.intersectsLineSegment.vector),p[3]=0,R(f,te(p,p,s.camera.viewMatrix)))),new m("intersectsLineRadius",i=>i.intersectsLineRadius)),n.main.add(r`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),n.main.add(r`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),e}function $(t){return ce(ot,Math.cos(t.angleCutoff),Math.cos(Math.max(0,t.angleCutoff-j(2))))}function st(t,e){return v($e(I),t.pointDistanceOrigin,e.camera.viewMatrix),I[3]=se(t.pointDistanceOrigin,t.pointDistanceTarget),I}function at(t,e){const n=Ve(t.lineVerticalPlaneSegment,.5,f),i=t.renderCoordsHelper.worldUpAtPosition(n,ct),s=R(V,t.lineVerticalPlaneSegment.vector),a=Ee(f,i,s);return R(a,a),ge(t.lineVerticalPlaneSegment.origin,a,e.camera.viewMatrix)}function rt(t,e){const n=b(f,t.lineVerticalPlaneSegment.origin);return t.renderCoordsHelper.setAltitude(n,0),v(n,n,e.camera.viewMatrix)}function lt(t,e){const n=ae(f,t.lineVerticalPlaneSegment.origin,t.lineVerticalPlaneSegment.vector);return t.renderCoordsHelper.setAltitude(n,0),v(n,n,e.camera.viewMatrix)}function ge(t,e,n){return v(Y,t,n),b(p,e),p[3]=0,te(p,p,n),et(Y,p,ht)}const ot=he(),f=h(),p=Pe(),ct=h(),V=h(),Y=h(),ht=tt(),I=Me(),dt=Object.freeze(Object.defineProperty({__proto__:null,build:fe,defaultAngleCutoff:W},Symbol.toStringTag,{value:"Module"}));let pt=class extends Xe{constructor(){super(...arguments),this.innerColor=F(1,1,1),this.innerWidth=1,this.glowColor=F(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=j(6),this.pointDistanceOrigin=h(),this.pointDistanceTarget=h(),this.lineVerticalPlaneSegment=z(),this.intersectsLineSegment=z(),this.intersectsLineRadius=3,this.heightManifoldTarget=h(),this.lineStartWorld=h(),this.lineEndWorld=h()}};class ut extends re{constructor(e,n){super(e,n,new le(dt,()=>ie(()=>Promise.resolve().then(()=>wt),void 0)))}}function me(t){const e=new de;e.include(ue,t);const{vertex:n,fragment:i}=e;n.uniforms.add(new Ne("modelView",(a,{camera:l})=>ve(gt,l.viewMatrix,a.origin)),new it("proj",({camera:a})=>a.projectionMatrix),new m("glowWidth",(a,{camera:l})=>a.glowWidth*l.pixelRatio),new je("pixelToNDC",({camera:a})=>ce(ft,2/a.fullViewport[2],2/a.fullViewport[3]))),e.attributes.add(o.START,"vec3"),e.attributes.add(o.END,"vec3"),t.spherical&&(e.attributes.add(o.START_UP,"vec3"),e.attributes.add(o.END_UP,"vec3")),e.attributes.add(o.EXTRUDE,"vec2"),e.varyings.add("uv","vec2"),e.varyings.add("vViewStart","vec3"),e.varyings.add("vViewEnd","vec3"),e.varyings.add("vViewSegmentNormal","vec3"),e.varyings.add("vViewStartNormal","vec3"),e.varyings.add("vViewEndNormal","vec3");const s=!t.spherical;return n.main.add(r`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${Q(s,r`vec3 startUp = vec3(0, 0, 1);`)}
    ${Q(s,r`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `),i.uniforms.add(new pe("perScreenPixelRatio",a=>a.camera.perScreenPixelRatio)),i.code.add(r`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`),i.main.add(r`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`),e}const ft=he(),gt=nt(),mt=Object.freeze(Object.defineProperty({__proto__:null,build:me},Symbol.toStringTag,{value:"Module"}));class _t extends pt{constructor(){super(...arguments),this.origin=h()}}let q=class extends re{constructor(e,n){super(e,n,new le(mt,()=>ie(()=>Promise.resolve().then(()=>Et),void 0)),_e)}};const _e=new Map([[o.START,0],[o.END,1],[o.EXTRUDE,2],[o.START_UP,3],[o.END_UP,4]]);let Z=class{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=h(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const n=be(3*e.length);let i=0;for(const s of e)n[i++]=s[0],n[i++]=s[1],n[i++]=s[2];this.buffers=[n]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const n=this._buffers[0],i=3*Math.floor(n.length/3/2);O(this._origin,n[i],n[i+1],n[i+2])}else O(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const n=this._ensureVAO(e);n!=null&&(e.bindVAO(n),e.drawArrays(Ye.TRIANGLES,0,this._count))}dispose(){this._vao!=null&&this._vao.dispose()}get _layout(){return this._renderCoordsHelper.viewingMode===N.Global?vt:bt}_ensureVAO(e){return this._buffers==null?null:(this._vao??=this._createVAO(e,this._buffers),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,n){const i=this._createDataBuffer(n);return this._dirty=!1,new Je(e,_e,new Map([["data",Ge(this._layout)]]),new Map([["data",Qe.createVertex(e,Ze.STATIC_DRAW,i)]]))}_ensureVertexData(e,n){if(!this._dirty)return;const i=this._createDataBuffer(n);e.vertexBuffers.get("data")?.setData(i),this._dirty=!1}_createDataBuffer(e){const n=e.reduce((_,d)=>_+K(d),0);this._count=n;const i=this._layout.createBuffer(n),s=this._origin;let a=0,l=0;const u="startUp"in i?this._setUpVectors.bind(this,i):void 0;for(const _ of e){for(let d=0;d<_.length;d+=3){const C=O(ee,_[d],_[d+1],_[d+2]);d===0?l=this._renderCoordsHelper.getAltitude(C):this._renderCoordsHelper.setAltitude(C,l);const P=a+2*d;u?.(d,P,_,C);const H=ne(ee,C,s);if(d<_.length-3){for(let D=0;D<6;D++)i.start.setVec(P+D,H);i.extrude.setValues(P,0,-1),i.extrude.setValues(P+1,1,-1),i.extrude.setValues(P+2,1,1),i.extrude.setValues(P+3,0,-1),i.extrude.setValues(P+4,1,1),i.extrude.setValues(P+5,0,1)}if(d>0)for(let D=-6;D<0;D++)i.end.setVec(P+D,H)}a+=K(_)}return i.buffer}_setUpVectors(e,n,i,s,a){const l=this._renderCoordsHelper.worldUpAtPosition(a,Pt);if(n<s.length-3)for(let u=0;u<6;u++)e.startUp.setVec(i+u,l);if(n>0)for(let u=-6;u<0;u++)e.endUp.setVec(i+u,l)}};function K(t){return 3*(2*(t.length/3-1))}const Pt=h(),ee=h(),vt=oe().vec3f(o.START).vec3f(o.END).vec2f(o.EXTRUDE).vec3f(o.START_UP).vec3f(o.END_UP),bt=oe().vec3f(o.START).vec3f(o.END).vec2f(o.EXTRUDE);class L extends ke{constructor(){super(...arguments),this.contrastControlEnabled=!1,this.spherical=!1}}g([x()],L.prototype,"contrastControlEnabled",void 0),g([x()],L.prototype,"spherical",void 0);class S extends L{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}g([x()],S.prototype,"heightManifoldEnabled",void 0),g([x()],S.prototype,"pointDistanceEnabled",void 0),g([x()],S.prototype,"lineVerticalPlaneEnabled",void 0),g([x()],S.prototype,"intersectsLineEnabled",void 0);let w=class extends We{constructor(t){super(t),this.isDecoration=!0,this.produces=k.LASERLINES,this.consumes={required:[k.LASERLINES,"normals"]},this.requireGeometryDepth=!0,this._configuration=new S,this._pathTechniqueConfiguration=new L,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._passParameters=new _t;const e=t.view.stage.renderView.techniques,n=new L;n.contrastControlEnabled=t.contrastControlEnabled,e.precompile(q,n)}initialize(){this._passParameters.renderCoordsHelper=this.view.renderCoordsHelper,this._pathTechniqueConfiguration.spherical=this.view.state.viewingMode===N.Global,this._pathTechniqueConfiguration.contrastControlEnabled=this.contrastControlEnabled,this._techniques.precompile(q,this._pathTechniqueConfiguration),this._blit=new Fe(this._techniques,Be.PremultipliedAlpha)}destroy(){this._pathVerticalPlaneData=De(this._pathVerticalPlaneData),this._blit=null}get _techniques(){return this.view.stage.renderView.techniques}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(t){this._heightManifoldEnabled!==t&&(this._heightManifoldEnabled=t,this.requestRender(c.UPDATE))}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(t){b(this._passParameters.heightManifoldTarget,t),this.requestRender(c.UPDATE)}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(t){t!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=t,this.requestRender(c.UPDATE))}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(t){b(this._passParameters.pointDistanceTarget,t),this.requestRender(c.UPDATE)}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(t){b(this._passParameters.pointDistanceOrigin,t),this.requestRender(c.UPDATE)}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(t){t!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=t,this.requestRender(c.UPDATE))}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){U(t,this._passParameters.lineVerticalPlaneSegment),this.requestRender(c.UPDATE)}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(t){t!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=t,this.requestRender(c.UPDATE))}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(t){U(t,this._passParameters.intersectsLineSegment),this.requestRender(c.UPDATE)}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(t){t!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=t,this.requestRender(c.UPDATE))}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(t){t!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=t,this._pathVerticalPlaneData!=null&&this.requestRender(c.UPDATE))}set pathVerticalPlaneVertices(t){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new Z(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=t,this.pathVerticalPlaneEnabled&&this.requestRender(c.UPDATE)}set pathVerticalPlaneBuffers(t){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new Z(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=t,this.pathVerticalPlaneEnabled&&this.requestRender(c.UPDATE)}setParameters(t){Ke(this._passParameters,t)&&this.requestRender(c.UPDATE)}precompile(){this._acquireTechnique()}render(t){const e=t.find(({name:l})=>l===this.produces);if(this.isDecoration&&!this.bindParameters.decorations||this._blit==null)return e;const n=this.renderingContext,i=t.find(({name:l})=>l==="normals");this._passParameters.normals=i?.getTexture();const s=()=>{(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(),this.pathVerticalPlaneEnabled&&this._renderPath()};if(!this.contrastControlEnabled)return n.bindFramebuffer(e.fbo),s(),e;this._passParameters.colors=e.getTexture();const a=this.fboCache.acquire(e.fbo.width,e.fbo.height,"laser lines");return n.bindFramebuffer(a.fbo),n.setClearColor(0,0,0,0),n.clear(J.COLOR|J.DEPTH),s(),n.unbindTexture(e.getTexture()),this._blit.blend(n,a,e,this.bindParameters)||this.requestRender(c.UPDATE),a.release(),e}_acquireTechnique(){return this._configuration.heightManifoldEnabled=this.heightManifoldEnabled,this._configuration.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._configuration.pointDistanceEnabled=this.pointDistanceEnabled,this._configuration.intersectsLineEnabled=this.intersectsLineEnabled,this._configuration.contrastControlEnabled=this.contrastControlEnabled,this._configuration.spherical=this.view.state.viewingMode===N.Global,this._techniques.get(ut,this._configuration)}_renderUnified(){if(!this._updatePassParameters())return;const t=this._acquireTechnique();if(t.compiled){const e=this.renderingContext;e.bindTechnique(t,this.bindParameters,this._passParameters),e.screen.draw()}else this.requestRender(c.UPDATE)}_renderPath(){if(this._pathVerticalPlaneData==null)return;const t=this._techniques.get(q,this._pathTechniqueConfiguration);if(t.compiled){const e=this.renderingContext;this._passParameters.origin=this._pathVerticalPlaneData.origin,e.bindTechnique(t,this.bindParameters,this._passParameters),this._pathVerticalPlaneData.draw(e)}else this.requestRender(c.UPDATE)}_updatePassParameters(){if(!this._intersectsLineEnabled)return!0;const t=this.bindParameters.camera,e=this._passParameters;if(this._intersectsLineInfinite){if(Se(Re(e.intersectsLineSegment.origin,e.intersectsLineSegment.vector),y),y.c0=-Number.MAX_VALUE,!Ce(t.frustum,y))return!1;Ae(y,e.lineStartWorld),Te(y,e.lineEndWorld)}else b(e.lineStartWorld,e.intersectsLineSegment.origin),ae(e.lineEndWorld,e.intersectsLineSegment.origin,e.intersectsLineSegment.vector);return!0}get test(){}};g([A({constructOnly:!0})],w.prototype,"contrastControlEnabled",void 0),g([A()],w.prototype,"isDecoration",void 0),g([A()],w.prototype,"produces",void 0),g([A()],w.prototype,"consumes",void 0),w=g([we("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],w);const y=Le();class Kt extends ye{constructor(e){super(e),this._angleCutoff=W,this._style={},this._heightManifoldTarget=h(),this._heightManifoldEnabled=!1,this._intersectsLine=z(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){e!=null?(b(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(e==null)return void(this.intersectsLine=null);const n=this.view.renderCoordsHelper.worldUpAtPosition(e,Dt);this.intersectsLine=xe(e,n),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){e!=null?(U(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=e!=null?U(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=e!=null?{origin:B(e.origin),target:e.target?B(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}get isDecoration(){return this._isDecoration}set isDecoration(e){this._isDecoration=e,this._renderer&&(this._renderer.isDecoration=e)}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||this._pointDistanceLine!=null||this._pathVerticalPlaneBuffers!=null)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){this._renderer==null&&(this._renderer=new w({view:this.view,contrastControlEnabled:!0,isDecoration:this.isDecoration}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff())}_syncStyle(){this._renderer!=null&&this._renderer.setParameters(this._style)}_syncAngleCutoff(){this._renderer?.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){this._renderer!=null&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){this._renderer!=null&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){this._renderer!=null&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){this._renderer!=null&&(this._renderer.pathVerticalPlaneEnabled=this._pathVerticalPlaneBuffers!=null&&this.visible,this._pathVerticalPlaneBuffers!=null&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){this._renderer!=null&&(this._renderer.lineVerticalPlaneEnabled=this._lineVerticalPlaneSegment!=null&&this.visible,this._lineVerticalPlaneSegment!=null&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(this._renderer==null)return;const e=this._pointDistanceLine,n=e!=null;this._renderer.pointDistanceEnabled=n&&e.target!=null&&this.visible,n&&(this._renderer.pointDistanceOrigin=e.origin,e.target!=null&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){this._renderer!=null&&this.view.stage&&(this._renderer.destroy(),this._renderer=null)}forEachMaterial(){}}const Dt=h(),wt=Object.freeze(Object.defineProperty({__proto__:null,build:fe,defaultAngleCutoff:W},Symbol.toStringTag,{value:"Module"})),Et=Object.freeze(Object.defineProperty({__proto__:null,build:me},Symbol.toStringTag,{value:"Module"}));export{Kt as c};
