import{o as F,J as ie,E as B}from"./vec32-DCEPt2hu.js";import{_ as ae,aj as Q}from"./index-BfVS1IZv.js";import{t as se}from"./BufferView-ZIDOBHFf.js";import{O as oe}from"./InterleavedLayout-DYEY2NPU.js";import{u as U,h as L,S as ne,l as V,n as G}from"./ShaderOutput-Bdd80V3g.js";import{a9 as ce,f as le,u as pe,o as de,b as he,w as ve,K as me,aa as ue,a8 as fe,k as Se,J as Te,M as ge,T as Pe,U as _e,ai as H,aj as Ee,ak as Z,ad as Ae,af as Oe,ag as we,ah as ye,ae as Re,aC as $e,aD as Y,aE as xe,aF as ze,aG as Ce,A as f,j as De,aH as Ie,l as Le,aI as be}from"./Texture-Th5JagZi.js";import{n as Ue,o as D}from"./verticalOffsetUtils-D16--bMJ.js";import{e as r}from"./VertexAttribute-BfkzOMLV.js";import{z as E,B as Ne,D as ke,j as K,F as q,G as Me,H as We,I as je,s as X}from"./RibbonLine.glsl-BOKI7PlQ.js";import{B as I,g as b,c as J}from"./renderState-D5uZEltT.js";import"./floatRGBA-ewJX3tsb.js";import"./enums-YGqMJDyZ.js";import"./Texture-C4jbNVZ_.js";import"./BindType-BBwFZqyN.js";import{n as o,t as _}from"./glsl-Cj7KC756.js";import"./mat4f64-q_b6UJoq.js";import"./vec2-Db98L5NK.js";import"./vec2f64-rIxtbMRN.js";import{i as Fe}from"./ShaderBuilder-BFC91w_r.js";import{t as Be}from"./Float4DrawUniform-D2Y1AfMe.js";import{t as Ve,e as Ge}from"./Matrix4BindUniform-nJ2bUVpz.js";function ee(n){const e=new Fe,{space:t,anchor:c,hasTip:S}=n,h=t===E.World;e.include(Ne,n),e.include(ke,n),e.include(ce,n);const{vertex:i,fragment:p,varyings:T}=e;p.include(Be),le(i,n),e.attributes.add(r.POSITION,"vec3"),e.attributes.add(r.PREVIOUSDELTA,"vec4"),e.attributes.add(r.UV0,"vec2"),T.add("vColor","vec4"),T.add("vpos","vec3",{invariant:!0}),T.add("vUV","vec2"),T.add("vSize","float"),S&&T.add("vLineWidth","float"),i.uniforms.add(new pe("nearFar",({camera:d})=>d.nearFar),new de("viewport",({camera:d})=>d.fullViewport)).code.add(o`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),i.code.add(o`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),h?(e.attributes.add(r.NORMAL,"vec3"),he(i),i.constants.add("tiltThreshold","float",.7),i.code.add(o`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):i.code.add(o`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`);const l=h?"vec3":"vec2";return i.code.add(o`
      ${l} normalizedSegment(${l} pos, ${l} prev) {
        ${l} segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${h?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      ${l} displace(${l} pos, ${l} prev, float displacementLen) {
        ${l} segment = normalizedSegment(pos, prev);

        ${l} displacementDirU = perpendicular(segment);
        ${l} displacementDirV = segment;

        ${c===K.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),t===E.Screen&&(i.uniforms.add(new Ve("inverseProjectionMatrix",({camera:d})=>d.inverseProjectionMatrix)),i.code.add(o`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),i.code.add(o`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),i.uniforms.add(new Ge("perScreenPixelRatio",({camera:d})=>d.perScreenPixelRatio)),i.code.add(o`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${_(n.hasCap,`if(prev.z > posLeft.z) {
                vec2 diff = posLeft.xy - posRight.xy;
                planeOrigin.xy += perpendicular(diff) / 2.0;
             }`)};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),ve(i),i.main.add(o`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      float lineWidth = getLineWidth();
      float screenMarkerSize = getScreenMarkerSize();

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(position + previousDelta.xyz * previousDelta.w, 1.0);
      clip(pos, prev);

      ${h?o`${_(n.hideOnShortSegments,o`
                if (areWorldMarkersHidden(pos, prev)) {
                  // Project out of clip space
                  gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                  return;
                }`)}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);`:o`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${_(t===E.Screen,o`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`)}`}
      forwardViewPosDepth(pos.xyz);
      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${_(!h,"vUV *= displacedPosScreen.w;")}
      ${_(S,"vLineWidth = lineWidth;")}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),p.include(me,n),e.include(ue,n),p.include(fe),p.uniforms.add(new Se("intrinsicColor",({color:d})=>d),new Te("tex",({markerTexture:d})=>d)).constants.add("texelSize","float",1/q).code.add(o`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgbaTofloat(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),S&&p.constants.add("relativeMarkerSize","float",Me/q).constants.add("relativeTipLineWidth","float",We).code.add(o`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${_(h,"halfTipLineWidth *= fwidth(samplePos.y);")}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `),e.include(ge,n),p.main.add(o`
    discardBySlice(vpos);
    discardByTerrainDepth();

    vec4 finalColor = intrinsicColor * vColor;

    // Cancel out perspective correct interpolation if in screen space or draped
    vec2 samplePos = vUV ${_(!h,"* gl_FragCoord.w")};
    finalColor.a *= ${S?"max(markerAlpha(samplePos), tipAlpha(samplePos))":"markerAlpha(samplePos)"};
    outputColorHighlightOID(finalColor, vpos, finalColor.rgb);`),e}const He=Object.freeze(Object.defineProperty({__proto__:null,build:ee},Symbol.toStringTag,{value:"Module"}));class Ze extends Pe{constructor(e,t){super(e,t,new _e(He,()=>ae(()=>Promise.resolve().then(()=>Xe),void 0)),te)}_makePipelineState(e,t){const{output:c,oitPass:S,space:h,hasOccludees:i}=e;return I({blending:U(c)?ye(S):null,depthTest:h===E.Draped?null:{func:we(S)},depthWrite:Oe(e),drawBuffers:Ae(c,Re(S,c)),colorWrite:b,stencilWrite:i?Z:null,stencilTest:i?t?H:Ee:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(e){return e.occluder?(this._occluderPipelineTransparent=I({blending:J,depthTest:Y,depthWrite:null,colorWrite:b,stencilWrite:null,stencilTest:$e}),this._occluderPipelineOpaque=I({blending:J,depthTest:Y,depthWrite:null,colorWrite:b,stencilWrite:ze,stencilTest:xe}),this._occluderPipelineMaskWrite=I({blending:null,depthTest:Ce,depthWrite:null,colorWrite:null,stencilWrite:Z,stencilTest:H})):this._occluderPipelineTransparent=this._occluderPipelineOpaque=this._occluderPipelineMaskWrite=null,this._occludeePipelineState=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){return e?this._occludeePipelineState:t===f.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent??super.getPipeline():t===f.OCCLUDER_MATERIAL?this._occluderPipelineOpaque??super.getPipeline():this._occluderPipelineMaskWrite??super.getPipeline()}}const te=new Map([[r.POSITION,0],[r.PREVIOUSDELTA,1],[r.UV0,2],[r.COLOR,3],[r.COLORFEATUREATTRIBUTE,3],[r.OPACITYFEATUREATTRIBUTE,4],[r.SIZE,5],[r.SIZEFEATUREATTRIBUTE,5],[r.NORMAL,6]]);class _t extends Ue{constructor(e){super(e,qe),this._configuration=new je,this.vertexAttributeLocations=te,this.produces=new Map([[f.OPAQUE_MATERIAL,t=>t===G.Highlight||L(t)&&this.parameters.renderOccluded===D.OccludeAndTransparentStencil],[f.OPAQUE_MATERIAL_WITHOUT_NORMALS,t=>ne(t)],[f.OCCLUDER_MATERIAL,t=>V(t)&&this.parameters.renderOccluded===D.OccludeAndTransparentStencil],[f.TRANSPARENT_OCCLUDER_MATERIAL,t=>V(t)&&this.parameters.renderOccluded===D.OccludeAndTransparentStencil],[f.TRANSPARENT_MATERIAL,t=>L(t)&&this.parameters.writeDepth],[f.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,t=>L(t)&&!this.parameters.writeDepth],[f.DRAPED_MATERIAL,t=>U(t)||t===G.Highlight]]),this.intersectDraped=void 0,this._layout=this.createLayout()}getConfiguration(e,t){return super.getConfiguration(e,t,this._configuration),this._configuration.space=t.slot===f.DRAPED_MATERIAL?E.Draped:this.parameters.worldSpace?E.World:E.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==X.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=t.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===D.OccludeAndTransparentStencil,this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest&&U(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}get visible(){return this.parameters.color[3]>=De}intersect(){}createLayout(){const e=oe().vec3f(r.POSITION).vec4f16(r.PREVIOUSDELTA).vec2f16(r.UV0);return this.parameters.vvColor?e.f32(r.COLORFEATUREATTRIBUTE):e.vec4u8(r.COLOR,{glNormalized:!0}),this.parameters.vvOpacity&&e.f32(r.OPACITYFEATUREATTRIBUTE),this.parameters.vvSize?e.f32(r.SIZEFEATUREATTRIBUTE):e.f16(r.SIZE),this.parameters.worldSpace&&e.vec3f16(r.NORMAL),e}createBufferWriter(){return new Je(this._layout,this.parameters)}createGLMaterial(e){return new Ye(e)}}class Ye extends Le{dispose(){super.dispose(),this._markerTextures.release(this._markerPrimitive),this._markerPrimitive=null}beginSlot(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this.getTechnique(Ze,e)}}class qe extends Ie{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=X.BUTT,this.anchor=K.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.markerTexture=null}}class Je{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}elementCount(){return this._parameters.placement==="begin-end"?12:6}write(e,t,c,S,h,i){const p=c.get(r.POSITION).data,T=p.length/3;let l=[1,0,0];const d=c.get(r.NORMAL);this._parameters.worldSpace&&d!=null&&(l=d.data);let N=1,k=0;this._parameters.vvSize?k=c.get(r.SIZEFEATUREATTRIBUTE).data[0]:c.has(r.SIZE)&&(N=c.get(r.SIZE).data[0]);let A=[1,1,1,1],M=0;this._parameters.vvColor?M=c.get(r.COLORFEATUREATTRIBUTE).data[0]:c.has(r.COLOR)&&(A=c.get(r.COLOR).data);let W=0;this._parameters.vvOpacity&&(W=c.get(r.OPACITYFEATUREATTRIBUTE).data[0]);const P=new Float32Array(h.buffer),g=se(h.buffer),y=new Uint8Array(h.buffer);let v=i*(this.vertexBufferLayout.stride/4);const O=P.BYTES_PER_ELEMENT/g.BYTES_PER_ELEMENT,re=4/O,w=(a,x,m,u)=>{P[v++]=a[0],P[v++]=a[1],P[v++]=a[2],be(x,a,g,v*O),v+=re;let s=v*O;if(g[s++]=m[0],g[s++]=m[1],v=Math.ceil(s/O),this._parameters.vvColor)P[v++]=M;else{const z=Math.min(4*u,A.length-4),C=4*v++;y[C]=255*A[z],y[C+1]=255*A[z+1],y[C+2]=255*A[z+2],y[C+3]=255*A[z+3]}this._parameters.vvOpacity&&(P[v++]=W),s=v*O,this._parameters.vvSize?(P[v++]=k,s+=2):g[s++]=N,this._parameters.worldSpace&&(g[s++]=l[0],g[s++]=l[1],g[s++]=l[2]),v=Math.ceil(s/O)};let R;(function(a){a[a.ASCENDING=1]="ASCENDING",a[a.DESCENDING=-1]="DESCENDING"})(R||(R={}));const j=(a,x)=>{const m=F(Qe,p[3*a],p[3*a+1],p[3*a+2]),u=Ke;let s=a+x;do F(u,p[3*s],p[3*s+1],p[3*s+2]),s+=x;while(ie(m,u)&&s>=0&&s<T);e&&(B(m,m,e),B(u,u,e)),w(m,u,[-1,-1],a),w(m,u,[1,-1],a),w(m,u,[1,1],a),w(m,u,[-1,-1],a),w(m,u,[1,1],a),w(m,u,[-1,1],a)},$=this._parameters.placement;return $!=="begin"&&$!=="begin-end"||j(0,R.ASCENDING),$!=="end"&&$!=="begin-end"||j(T-1,R.DESCENDING),null}}const Qe=Q(),Ke=Q(),Xe=Object.freeze(Object.defineProperty({__proto__:null,build:ee},Symbol.toStringTag,{value:"Module"}));export{_t as I};
