import{R as jr,dX as We,tH as Mt,mL as Wr,f5 as De,f0 as $t,dO as it,aj as Me,a3 as _r,iJ as Ue,p5 as It,jJ as Ur,a$ as vt,tI as qe,lH as Xe,lg as ae,lh as se,_ as ge,l as te,d1 as pt,g5 as Be,I as D,m as I,d as _t,T as Gr,g8 as kr,bv as qr,aY as Ft,nz as Et,k4 as Br,k3 as ft,dG as Zr,oj as Qr,iw as Yr,aV as Xr,fu as Jr,d0 as Kr,J as ei,S as At,sM as ti,lS as Ce,oL as at,tJ as ri,ju as ii,hK as ai,ke as si}from"./index-BfVS1IZv.js";import{j as oi,r as ni,A as li,g as ci,s as V,c as hi,H as di,y as ui,E as xr,o as yr}from"./vec32-DCEPt2hu.js";import{J as gi,i as pi,t as fi,e as He,C as mi,b as Ht}from"./RibbonLine.glsl-BOKI7PlQ.js";import{o as Se,E as vi,e as Cr,t as st}from"./verticalOffsetUtils-D16--bMJ.js";import{Y as L,R as _i,u as xi,g as wr,a3 as br,a4 as Tr,c as Lt,C as zt,aO as yi,a2 as Ci,_ as wi,Z as bi,s as xt,J as le,$ as ot,Q as yt,F as Je,S as Sr,aP as Or,T as pe,U as fe,W as Ti,X as nt,A as N,aQ as lt,aL as Si,aM as Oi,aR as Di}from"./Texture-Th5JagZi.js";import{n as b,u as Pi}from"./ShaderOutput-Bdd80V3g.js";import{a as Ri,t as Pe,e as A,i as Ke,d as Mi,o as $i}from"./Matrix4BindUniform-nJ2bUVpz.js";import{i as et}from"./Intersector-CHiTWa79.js";import{n as d}from"./glsl-Cj7KC756.js";import{r as q,e as F}from"./mat4f64-q_b6UJoq.js";import{v as Vt,w as Nt,j as Ii}from"./axisAngleDegrees-C74LTIOq.js";import{i as Fi,n as Ei,a as Ai,b as Hi,p as jt}from"./SunnyWeather-C1lraiWE.js";import{a as Ct}from"./BindType-BBwFZqyN.js";import{o as Wt}from"./Float4DrawUniform-D2Y1AfMe.js";import{o as U,u as G,l as re,_ as we,b as Ut,e as ie,j as T,x as Li,v as Gt,r as zi}from"./vec2-Db98L5NK.js";import{B as ce,g as he,c as Dr,b as Ge}from"./renderState-D5uZEltT.js";import{w as Vi}from"./HighlightDefaults-Dr9zJK1g.js";import{c as $e,a as Ni,i as ji}from"./ShaderTechniqueConfiguration-Cplc9kKb.js";import{e as de}from"./VertexAttribute-BfkzOMLV.js";import{O as B,M as Wi,L as Pr,_ as Z,Y as kt,G as Ui,R as Gi,g as Le}from"./enums-YGqMJDyZ.js";import{t as ue}from"./VertexElementDescriptor-BLyltQyJ.js";import{o as ki,E as qt}from"./VertexArrayObject-DumAgx5j.js";import{a as Rr,S as wt}from"./Texture-C4jbNVZ_.js";import{t as qi}from"./NestedMap-BwbkO4RU.js";import{s as oe,u as Bi,e as Q,n as ze}from"./BufferView-ZIDOBHFf.js";import{n as _}from"./vec2f64-rIxtbMRN.js";import{d as Zi}from"./sdfPrimitives-B89DnMOC.js";import{e as Qi}from"./mat3f64-NKy_SIjb.js";import{l as Yi}from"./ViewingMode-Dodu7ZZk.js";import{g as Xi,C as Ji}from"./Scheduler-j2yNd-Vu.js";import{C as Ki,E as ea,U as ta}from"./sphere-BDHJ-Of8.js";import{m as ra}from"./mathUtils-DrwzUBSu.js";import{i as me}from"./ShaderBuilder-BFC91w_r.js";var j,Ze;function ia(e){return e!=null&&!e.running}(function(e){e[e.Idle=0]="Idle",e[e.Rendering=1]="Rendering",e[e.Ready=2]="Ready",e[e.Fading=3]="Fading"})(j||(j={})),function(e){e[e.RG=0]="RG",e[e.BA=1]="BA",e[e.COUNT=2]="COUNT"}(Ze||(Ze={}));let aa=class extends ki{};const sa={key:"type",base:jt,typeMap:{sunny:jt,cloudy:Hi,rainy:Ai,snowy:Ei,foggy:Fi}},oa=Object.keys(sa.typeMap);function Gs(e,t){return!!oa.includes(e)||(t.error(`"${e}" is not a valid weather type`),!1)}const ct=1e4,na=1e5,la={required:[]},ks={required:[b.Depth]};let Mr=class extends jr{precompile(t){return!!this.acquireTechniques(t)}consumes(){return la}get usedMemory(){return 0}get renderOccludedFlags(){return Se.Occlude}get isDecoration(){return!1}get running(){return!1}modify(t,r){}get numGeometries(){return 0}get hasOccludees(){return!1}get hasEmissions(){return!1}forEachGeometry(t){}},ca=class extends Mr{},Zs=class extends Mr{};var Qe;(function(e){e[e.Immediate=0]="Immediate",e[e.FadeWithWeather=1]="FadeWithWeather"})(Qe||(Qe={}));var $,Bt,Zt;(function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"})($||($={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(Bt||(Bt={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(Zt||(Zt={}));let Qt=class{constructor(){this._extent=We(),this.resolution=0,this.renderLocalOrigin=gi(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new ha}get extent(){return this._extent}setupGeometryViews(t){if(this._setupGeometryView(),!t)return;const r=.001*t.range;if(this._extent[0]-r<=t.min){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];Mt(this._extent,t.range,0,i)}if(this._extent[2]+r>=t.max){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];Mt(this._extent,-t.range,0,i)}}_setupGeometryView(){this.canvasGeometries.numViews=1,Wr(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let t=0;t<this.canvasGeometries.numViews;t++){const r=this.canvasGeometries.extents[t];if(r[0]!==r[2]&&r[1]!==r[3])return!0}return!1}},ha=class{constructor(){this.extents=[We(),We(),We()],this.numViews=0}};var v;(function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.WaterNormal=3]="WaterNormal",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"})(v||(v={}));let da=class{constructor(t,r,i){this._fbos=t,this._format=r,this._name=i}get valid(){return this._handle?.getTexture()!=null}dispose(){this._handle=De(this._handle)}get texture(){return this._handle?.getTexture()}bind(t,r,i){this._handle&&this._handle.fbo?.width===r&&this._handle.fbo?.height===i||(this._handle?.release(),this._handle=this._fbos.acquire(r,i,this._name,this._format)),t.bindFramebuffer(this._handle?.fbo)}generateMipMap(){this._handle?.getTexture()?.descriptor?.hasMipmap&&this._handle?.getTexture()?.generateMipmap()}},Y=class{constructor(t,r,i,a,s=L.RGBA8UNORM_MIPMAP){this.output=i,this.content=a,this.fbo=new da(t,s,r)}get valid(){return this.fbo.valid}},ua=class{constructor(t){this.targets=[new Y(t,"overlay color",b.Color,v.Color),new Y(t,"overlay IM color",b.Color,v.ColorNoRasterImage),new Y(t,"overlay highlight",b.Highlight,v.Highlight,L.RG8UINT),new Y(t,"overlay water",b.Normal,v.WaterNormal),new Y(t,"overlay occluded",b.Color,v.Occluded)],Ri()&&this.targets.push(new Y(t,"overlay olid",b.ObjectAndLayerIdColor,v.ObjectAndLayerIdColor,L.RGBA8UNORM))}getTexture(t){return this.targets[t]?.fbo.texture}dispose(){for(const t of this.targets)t.fbo.dispose()}computeValidity(){return this.targets.reduce((t,r,i)=>r.valid?t|=1<<i:t,0)}};var Oe;(function(e){e[e.Material=0]="Material",e[e.ShadowMap=1]="ShadowMap",e[e.Highlight=2]="Highlight",e[e.ViewshedShadowMap=3]="ViewshedShadowMap"})(Oe||(Oe={}));function to(e){e.code.add(d`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function ga(e){e.code.add(d`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function pa(e){e.code.add(d`
    const float GAMMA = ${d.float($t)};
    const float INV_GAMMA = ${d.float(1/$t)};

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.a);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}function fa(e,t){if(!t.screenSpaceReflections)return;const r=e.fragment;r.include(_i),r.uniforms.add(new xi("nearFar",i=>i.camera.nearFar),new wr("depthMap",i=>i.depth?.attachment),new Pe("proj",i=>i.camera.projectionMatrix),new A("invResolutionHeight",i=>1/i.camera.height),new Pe("reprojectionMatrix",i=>i.ssr.reprojectionMatrix)).code.add(d`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${t.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);
    float dDepthBefore = 0.0;

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        float weight = dDepth / (dDepth - dDepthBefore);
        vec2 Pf = mix(P - dP, P, 1.0 - weight);
        if (abs(Pf.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(Pf, depth);
        }
        else {
          return vec3(P, depth);
        }
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
      dDepthBefore = dDepth;
    }
    return vec3(P, 0.0);
  }
  `)}class ma{constructor(){this.startTime=0,this._data=it(null),this.coverage=0,this.absorption=0,this._readChannels=Ze.RG,this.parallax=new Yt,this.parallaxNew=new Yt,this._anchorPoint=Me(),this._fadeState=it(g.HIDE),this._fadeFactor=it(1)}get data(){return this._data.value}set data(t){this._data.value=t}get readChannels(){return this._readChannels}get fadeState(){return this._fadeState.value}get fadeFactor(){return this._fadeFactor.value}get opacity(){switch(this.fadeState){case g.HIDE:return 0;case g.FADE_OUT:return 1-this.fadeFactor;case g.FADE_IN:return this.fadeFactor;case g.SHOW:case g.CROSS_FADE:return 1}}fade(t,r,i){this.isFading&&this.fadeFactor<1&&(this._fadeFactor.value=i?_r((r-this.startTime)/(_a*i),0,1):1,this.fadeFactor===1&&this._endFade()),this._evaluateState(t,r),this._updateParallax(t)}_evaluateState(t,r){const i=t.relativeElevation,a=this._updateAnchorPoint(t);(i>1.7*ct||i<-1e4||a>Jt)&&this.opacity>0?this._startFade(g.HIDE,r):this.isFading||(i>ct||i<-.35*ct||a>xa*Jt?this.opacity>0&&this._startFade(g.FADE_OUT,r):ia(this.data)&&(this.opacity===0?this._startFade(g.FADE_IN,r):this.data.state===j.Ready&&(this.fadeState===g.SHOW?this._startFade(g.CROSS_FADE,r):this._startFade(g.SHOW,r))))}_updateParallax(t){const r=oi(t.eye);this.parallax.radiusCurvatureCorrection=.84*Math.sqrt(Math.max(r-Ue.radius*Ue.radius,0))/Math.sqrt(r),Vt(Xt,this.parallax.anchorPoint,X),It(this.parallax.transform,q,X[3],Nt(X)),Vt(Xt,this.parallaxNew.anchorPoint,X),It(this.parallaxNew.transform,q,X[3],Nt(X))}_updateAnchorPoint(t){return li(this._anchorPoint,t.eye),ci(this._anchorPoint,this._anchorPoint,Ue.radius),this.fadeState===g.HIDE&&this.data?.state===j.Ready?(V(this.parallax.anchorPoint,this._anchorPoint),0):ni(hi(va,this.parallax.anchorPoint,this._anchorPoint))}requestFade(){this._fadeFactor.value=0}_startFade(t,r){switch(this._fadeState.value=t,this.startTime=r,t){case g.CROSS_FADE:this.requestFade(),this._switchReadChannels(),V(this.parallaxNew.anchorPoint,this._anchorPoint);break;case g.FADE_IN:this.requestFade(),this._switchReadChannels(),V(this.parallax.anchorPoint,this._anchorPoint),V(this.parallaxNew.anchorPoint,this._anchorPoint);break;case g.FADE_OUT:this.requestFade();break;case g.SHOW:this._switchReadChannels(),V(this.parallax.anchorPoint,this._anchorPoint),V(this.parallaxNew.anchorPoint,this._anchorPoint),this._endFade();break;case g.HIDE:this._endFade()}}_endFade(){switch(this._fadeFactor.value=1,this.data&&this.data.state!==j.Ready&&(this.data.state=j.Idle),this.fadeState){case g.CROSS_FADE:V(this.parallax.anchorPoint,this.parallaxNew.anchorPoint),this._fadeState.value=g.SHOW;break;case g.FADE_IN:this._fadeState.value=g.SHOW;break;case g.FADE_OUT:this._fadeState.value=g.HIDE;break;case g.SHOW:case g.HIDE:break;default:Ur(this.fadeState)}}_switchReadChannels(){this.data?.state===j.Ready&&(this._readChannels=1-this._readChannels,this.data.state=j.Fading)}get isFading(){return this.fadeState===g.FADE_OUT||this.fadeState===g.FADE_IN||this.fadeState===g.CROSS_FADE}}var g;(function(e){e[e.HIDE=0]="HIDE",e[e.FADE_IN=1]="FADE_IN",e[e.SHOW=2]="SHOW",e[e.CROSS_FADE=3]="CROSS_FADE",e[e.FADE_OUT=4]="FADE_OUT"})(g||(g={}));let Yt=class{constructor(){this.anchorPoint=Me(),this.radiusCurvatureCorrection=0,this.transform=F()}};const Xt=vt(0,0,1),X=Ii(),va=Me(),_a=1.25,xa=.5,Jt=2e5;function ya(e){e.fragment.uniforms.add(new A("cloudAbsorption",t=>t.clouds.absorption),new A("cloudCoverage",t=>t.clouds.coverage)).code.add(d`vec4 lookupCloudsFromTextureArray(sampler2DArray cubeMap, vec3 rayDir) {
int faceIndex;
vec2 uv;
if(rayDir.z <= 0.0) {
float hazeFactor = smoothstep(-0.01, mix(0.0, 0.075, cloudCoverage), abs(dot(rayDir, vec3(0, 0, 1))));
float shading = clamp(1.0 - cloudAbsorption, 0.6, 1.0) * (1.0 - hazeFactor);
float totalTransmittance = hazeFactor;
return vec4(shading, totalTransmittance, shading, totalTransmittance);
}
if (abs(rayDir.x) >= abs(rayDir.y) && abs(rayDir.x) >= abs(rayDir.z)) {
if(rayDir.x > 0.0) {
faceIndex = 0;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, uv.y);
} else {
faceIndex = 1;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, -uv.y);
}
} else if (abs(rayDir.y) >= abs(rayDir.x) && abs(rayDir.y) >= abs(rayDir.z)) {
if(rayDir.y > 0.0) {
faceIndex = 2;
uv = rayDir.xz / rayDir.y;
} else {
faceIndex = 3;
uv = rayDir.xz / rayDir.y;
uv = vec2(uv.x, -uv.y);
}
} else {
if(rayDir.y < 0.0) {
faceIndex = 4;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
} else {
faceIndex = 5;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
}
}
uv = 0.5 * (uv + 1.0);
if(faceIndex != 5) {
uv.y = uv.y - 0.5;
}
uv.y = uv.y * 2.0;
vec4 s = texture(cubeMap, vec3(uv, float(faceIndex)));
return s;
}`)}let Ca=class extends Ke{constructor(t,r){super(t,"sampler2DArray",Ct.Bind,(i,a)=>i.bindTexture(t,r(a)))}};function wa(e){const t=e.fragment;t.constants.add("radiusCloudsSquared","float",ba).code.add(d`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),t.uniforms.add(new A("radiusCurvatureCorrection",({clouds:n})=>n.parallax.radiusCurvatureCorrection)).code.add(d`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),t.code.add(d`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),br(t),Tr(t);const r=vt(.28,.175,.035);t.constants.add("RIM_COLOR","vec3",r),t.code.add(d`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${d.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${d.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${d.float(.2)} * pow(dirDotLight, ${d.float(10)}) * (1. - pow(sunsetTransition, ${d.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),e.include(ya),t.uniforms.add(new Lt("readChannelsRG",n=>n.clouds.readChannels===Ze.RG),new Ca("cubeMap",n=>n.clouds.data?.cubeMap?.colorTexture)).code.add(d`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = lookupCloudsFromTextureArray(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),t.uniforms.add(new zt("anchorPoint",n=>n.clouds.parallax.anchorPoint),new zt("anchorPointNew",n=>n.clouds.parallaxNew.anchorPoint),new Pe("rotationClouds",n=>n.clouds.parallax.transform),new Pe("rotationCloudsNew",n=>n.clouds.parallaxNew.transform),new A("cloudsOpacity",n=>n.clouds.opacity),new A("fadeFactor",n=>n.clouds.fadeFactor),new Lt("crossFade",n=>n.clouds.fadeState===g.CROSS_FADE)).code.add(d`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}const ba=(Ue.radius+na)**2;function Ta(e,t){const r=e.fragment;r.include(yi,t),r.include(pa),r.include(ga),t.cloudReflections&&e.include(wa),e.include(fa,t),r.include(Ci,t),r.constants.add("fresnelSky","vec3",[.02,1,15]),r.constants.add("fresnelMaterial","vec2",[.02,.1]),r.constants.add("roughness","float",.015),r.constants.add("foamIntensityExternal","float",1.7),r.constants.add("ssrIntensity","float",.65),r.constants.add("ssrHeightFadeStart","float",wi),r.constants.add("ssrHeightFadeEnd","float",bi),r.constants.add("waterDiffusion","float",.92),r.constants.add("waterSeaColorMod","float",.8),r.constants.add("correctionViewingPowerFactor","float",.4),r.constants.add("skyZenitColor","vec3",[.52,.68,.9]),r.constants.add("skyColor","vec3",[.67,.79,.9]),r.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(d`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add(new A("lightingSpecularStrength",i=>i.lighting.mainLight.specularStrength),new A("lightingEnvironmentStrength",i=>i.lighting.mainLight.environmentStrength)),r.code.add(d`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.cloudReflections&&r.uniforms.add(new A("cloudsOpacity",i=>i.clouds.opacity)).code.add(d`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),t.screenSpaceReflections?r.uniforms.add(new Pe("view",i=>i.camera.viewMatrix),new wr("lastFrameColorTexture",i=>i.ssr.lastFrameColor?.getTexture()),new A("fadeFactorSSR",i=>i.ssr.fadeFactor)).code.add(d`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):r.code.add(d`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.cloudReflections?t.screenSpaceReflections?r.code.add(d`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(d`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(d`return waterRenderedColor;
}`)}let Ie=class extends Ke{constructor(t,r){super(t,"usampler2D",Ct.Pass,(i,a,s)=>i.bindTexture(t,r(a,s)))}};var ne;function so(e,t){const{vertex:r,fragment:i}=e;r.uniforms.add(new Wt("overlayTexOffset",(a,s)=>Oa(a,s)),new Wt("overlayTexScale",(a,s)=>Da(a,s))),i.constants.add("overlayOpacity","float",1),i.uniforms.add(new le("ovColorTex",(a,s)=>Sa(a,s))),$r(e,t)}function oo(e,t){const{vertex:r,fragment:i}=e,{output:a}=t;r.uniforms.add(new Kt("overlayTexOffset"),new Kt("overlayTexScale")),i.uniforms.add(new xt("overlayOpacity",s=>s.overlayOpacity)),a!==b.Highlight&&i.uniforms.add(new le("ovColorTex",(s,o)=>o.overlay?.getTexture(s.overlayContent))),$r(e,t)}function $r(e,t){const r=t.pbrMode===ot.Water||t.pbrMode===ot.WaterOnIntegratedMesh||t.pbrMode===ot.TerrainWithWater;r&&e.include(Ta,t);const{vertex:i,fragment:a,varyings:s}=e;s.add("vtcOverlay","vec4");const{output:o}=t,l=o===b.Highlight;i.code.add(d`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),a.code.add(d`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),l?a.uniforms.add(new Ie("overlayHighlightTexture",(n,f)=>f.overlay?.getTexture(v.Highlight))).code.add(d`uvec2 getAllOverlayHighlightValuesEncoded() {
vec4 texCoords = vtcOverlay;
vec2 uvInner = texCoords.xy;
vec2 uvOuter = texCoords.zw;
bool isValidInner = isValid(uvInner, fwidth(uvInner));
bool isValidOuter = isValid(uvOuter, vec2(0.0, 0.0));
vec2 texelCoordInner = uvInner * vec2(0.5, 1.0);
vec2 texelCoordOuter = uvOuter * vec2(0.5, 1.0) + vec2(0.5,0.0);
vec2 texDim =  vec2(textureSize(overlayHighlightTexture, 0));
uvec2 texelValueInner = texelFetch(overlayHighlightTexture, ivec2(texelCoordInner * texDim), 0).rg;
uvec2 texelValueOuter = texelFetch(overlayHighlightTexture, ivec2(texelCoordOuter * texDim), 0).rg;
return
isValidInner ? texelValueInner :
isValidOuter ? texelValueOuter :
uvec2(0);
}`):(a.code.add(d`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),a.code.add(d`vec4 getOverlayColorTexel() {
vec4 texCoords = vtcOverlay;
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`)),r&&(br(a),Tr(a),a.code.add(d`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function Sa(e,t){return e.identifier===Oe.Material&&Pi(e.output)?e.occludedGround?t.overlay?.getTexture(v.Occluded):t.overlay?.getTexture(v.ColorNoRasterImage):e.identifier===Oe.Material&&e.output===b.ObjectAndLayerIdColor?t.overlay?.getTexture(v.ObjectAndLayerIdColor):e.identifier===Oe.Highlight?t.overlay?.getTexture(v.Highlight):null}function Oa(e,t){const r=t.overlay?.overlays[$.INNER]?.extent;qe(r)&&(E[0]=e.toMapSpace[0]/ae(r)-r[0]/ae(r),E[1]=e.toMapSpace[1]/se(r)-r[1]/se(r));const i=t.overlay?.overlays[$.OUTER]?.extent;return qe(i)&&(E[2]=e.toMapSpace[0]/ae(i)-i[0]/ae(i),E[3]=e.toMapSpace[1]/se(i)-i[1]/se(i)),E}function Da(e,t){const r=t.overlay?.overlays[$.INNER]?.extent;qe(r)&&(E[0]=e.toMapSpace[2]/ae(r),E[1]=e.toMapSpace[3]/se(r));const i=t.overlay?.overlays[$.OUTER]?.extent;return qe(i)&&(E[2]=e.toMapSpace[2]/ae(i),E[3]=e.toMapSpace[3]/se(i)),E}(function(e){e[e.Disabled=0]="Disabled",e[e.Enabled=1]="Enabled",e[e.EnabledWithWater=2]="EnabledWithWater",e[e.COUNT=3]="COUNT"})(ne||(ne={}));const E=Xe();let Kt=class extends Ke{constructor(t){super(t,"vec4")}},bt=class extends $e{constructor(){super(...arguments),this.color=vt(1,1,1)}};function Ir(){const e=new me;return e.include(yt),e.fragment.uniforms.add(new le("tex",t=>t.texture),new Mi("uColor",t=>t.color)),e.fragment.main.add(d`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`),e}const Pa=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:bt,build:Ir},Symbol.toStringTag,{value:"Module"}));let er=class extends Ke{constructor(t,r){super(t,"ivec2",Ct.Pass,(i,a,s)=>i.setUniform2iv(t,r(a,s)))}},Tt=class extends $e{};function Fr(){const e=new me,{outputs:t,fragment:r}=e;return e.include(yt),r.uniforms.add(new Ie("highlightTexture",i=>i.highlightTexture)),r.constants.add("outlineWidth","int",Math.ceil(Re)),r.constants.add("cellSize","int",W),t.add("fragGrid","uvec2"),r.main.add(d`ivec2 inputTextureSize = textureSize(highlightTexture, 0);
ivec2 cellBottomLeftCornerInput = ivec2(ivec2(floor(gl_FragCoord.xy) * vec2(cellSize)));
ivec2 coordMid =  cellBottomLeftCornerInput + ivec2(cellSize >> 1);
uvec2 centreTexel = texelFetch(highlightTexture, coordMid, 0).rg & uvec2(0x55u);
float marginSquare = float(outlineWidth*outlineWidth);
uvec2 outputValue = centreTexel & uvec2(0x55u);
for(int y = -outlineWidth; y <= cellSize + outlineWidth; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : outlineWidth;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
ivec2 coord = cellBottomLeftCornerInput + ivec2(x, y);
uvec2[4] texels = uvec2[4] (
texelFetch(highlightTexture,coord+ivec2(0,0),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(1,0),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(0,1),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(1,1),0).rg & uvec2(0x55u)
);
if (texels[0] == texels[1] && texels[1] == texels[2] && texels[2] == texels[3] && texels[3] ==  centreTexel) {
continue;
}
for (int i=0; i<4; ++i){
outputValue |= ((texels[i] ^ centreTexel) << 1);
outputValue |= texels[i];
}
}
}
fragGrid = outputValue;`),e}const W=32,Re=9,St=.4,Ra=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:Tt,blurSize:St,build:Fr,gridCellPixelSize:W,outlineSize:Re},Symbol.toStringTag,{value:"Module"}));function Ot(e){const{vertex:t}=e;t.uniforms.add(new Ie("coverageTexture",r=>r.coverageTexture),new er("highlightRenderCellCount",r=>U(tr,r.horizontalCellCount,r.verticalCellCount)),new er("highlightTextureResolution",({highlightTexture:r})=>U(tr,r.descriptor.width,r.descriptor.height)),new Je("highlightLevel",r=>r.highlightLevel)).constants.add("cellSize","int",W),e.varyings.add("sUV","vec2"),e.varyings.add("vOutlinePossible","float"),t.code.add(d`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`),t.main.add(d`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
uvec2 covTexel = texelFetch(coverageTexture, cellPos, 0).rg;
int channelIndex = (highlightLevel >> 2) & 3;
uint channelValue = covTexel[channelIndex];
int highlightIndex = (highlightLevel & 3) << 1;
bool covered = ((channelValue >> highlightIndex) & 1u) == 1u;
if (!covered) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = (((channelValue >> highlightIndex) & 2u) == 2u) ? 1.0 : 0.0;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}const tr=_();function Er(){const e=new me;e.include(Ot);const{fragment:t}=e;return t.uniforms.add(new le("blurInput",r=>r.highlightBlurTexture),new Sr("blurSize",r=>r.blurSize),new Ie("highlightTexture",r=>r.highlightTexture),new le("highlightOptionsTexture",r=>r.highlightOptionsTexture),new Je("highlightLevel",r=>r.highlightLevel),new xt("occludedIntensityFactor",r=>r.occludedFactor)),t.constants.add("inner","float",1-(Re-St)/Re),e.include(Or),t.main.add(d`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
uvec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`),e}const Ma=Object.freeze(Object.defineProperty({__proto__:null,build:Er},Symbol.toStringTag,{value:"Module"}));let rr=class extends pe{constructor(t,r){super(t,r,new fe(Ma,()=>ge(()=>Promise.resolve().then(()=>as),void 0)))}initializePipeline(){return ce({blending:Dr,colorWrite:he})}},Dt=class extends $e{constructor(){super(...arguments),this.blurSize=_()}};function Ar(){const e=new me;return e.include(Ot),e.outputs.add("fragHighlight","vec2",0),e.fragment.uniforms.add(new Sr("blurSize",t=>t.blurSize),new $i("blurInput",t=>t.blurInput)).main.add(d`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 center = texture(blurInput, sUV).rg;
if (vOutlinePossible == 0.0) {
fragHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, sUV + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, sUV - blurSize * 3.294215).rg * 0.093913;
fragHighlight = sum;
}`),e}const $a=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:Dt,build:Ar},Symbol.toStringTag,{value:"Module"}));let ir=class extends pe{constructor(t,r){super(t,r,new fe($a,()=>ge(()=>Promise.resolve().then(()=>ss),void 0)))}initializePipeline(){return ce({colorWrite:he})}},ar=class extends pe{constructor(t,r){super(t,r,new fe(Ra,()=>ge(()=>Promise.resolve().then(()=>os),void 0)))}initializePipeline(){return ce({colorWrite:he})}};class Ia extends $e{constructor(){super(...arguments),this.occludedFactor=Vi,this.verticalCellCount=0,this.horizontalCellCount=0,this.highlightLevel=0,this.pixelRatio=1}}function Hr(){const e=new me;e.include(Ot),e.include(Or);const{fragment:t}=e;return e.outputs.add("fragSingleHighlight","vec2",0),t.uniforms.add(new Ie("highlightTexture",r=>r.highlightTexture),new Je("highlightLevel",r=>r.highlightLevel)),t.main.add(d`ivec2 iuv = ivec2(gl_FragCoord.xy);
uvec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`),e}const Fa=Object.freeze(Object.defineProperty({__proto__:null,build:Hr},Symbol.toStringTag,{value:"Module"}));let sr=class extends pe{constructor(t,r){super(t,r,new fe(Fa,()=>ge(()=>Promise.resolve().then(()=>ns),void 0)))}initializePipeline(){return ce({colorWrite:he})}};const Ea=[],vo=[new ue(de.POSITION,3,B.FLOAT,0,12)],_o=[new ue(de.POSITION,2,B.FLOAT,0,8)],xo=[new ue(de.POSITION,2,B.FLOAT,0,12),new ue(de.UV0,2,B.HALF_FLOAT,8,12)],yo=[new ue(de.POSITION,2,B.FLOAT,0,16),new ue(de.UV0,2,B.FLOAT,8,16)];let Ve=class extends Ti{constructor(){super(...arguments),this.produces=nt.HIGHLIGHTS,this.consumes={required:[nt.HIGHLIGHTS,"highlights"]},this._downsampleDrawParameters=new Tt,this._passParameters=new Ia,this._highlightBlurDrawParameters=new Dt,this._grid=new Aa}initialize(){this.addHandles([te(()=>this._updateOptionsTexture(),()=>{},pt)])}destroy(){this._grid.coverage=De(this._grid.coverage),this._grid.vao=Be(this._grid.vao),this._passParameters.highlightOptionsTexture=De(this._passParameters.highlightOptionsTexture)}_updateOptionsTexture(){if(this._passParameters.highlightOptionsTexture==null){const e=new Rr(16,2);e.internalFormat=Wi.RGBA,e.samplingMode=Pr.NEAREST,this._passParameters.highlightOptionsTexture=new wt(this.renderingContext,e,null)}this._passParameters.highlightOptionsTexture.setData(Ha(this.view.state.highlights)),this.requestRender(Ge.UPDATE)}precompile(){this.techniques.precompile(ar),this.techniques.precompile(sr),this.techniques.precompile(ir),this.techniques.precompile(rr)}render(e){const t=e.find(({name:p})=>p===nt.HIGHLIGHTS),{techniques:r,bindParameters:i,_passParameters:a,renderingContext:s}=this;if(!i.decorations)return t;const o=r.get(ar);if(!o.compiled)return this.requestRender(Ge.UPDATE),t;const l=e.find(({name:p})=>p==="highlights").getTexture();a.highlightTexture=l;const n=()=>{this._gridUpdateResources(l);const p=this._gridComputeCoverage(o,l,i),{horizontalCellCount:u,verticalCellCount:y}=p;return a.horizontalCellCount=u,a.verticalCellCount=y,a.coverageTexture=p.coverage?.getTexture(),p},f=p=>{const u=p.verticalCellCount*p.horizontalCellCount;s.bindVAO(p.vao),s.drawElementsInstanced(Gi.TRIANGLES,6,B.UNSIGNED_BYTE,0,u)},{camera:x}=i,C=()=>{s.bindFramebuffer(t.fbo),s.setViewport4fv(x.fullViewport)};return this._renderHighlightPostprocess(l,n,f,C),a.highlightTexture=null,a.coverageTexture=null,t}_renderHighlightPostprocess(e,t,r,i){const{fboCache:a,techniques:s,bindParameters:o,_passParameters:l,renderingContext:n}=this,f=s.get(sr),x=s.get(ir),C=s.get(rr);if(!C.compiled||!x.compiled||!f.compiled)return void this.requestRender(Ge.UPDATE);l.highlightTexture=e;const p=t(),{width:u,height:y}=e.descriptor;l.highlightTexture=e;const{camera:ve}=o,{fullWidth:_e,fullHeight:tt,pixelRatio:Fe}=ve,xe=Math.ceil(_e/Fe),ye=Math.ceil(tt/Fe),{_highlightBlurDrawParameters:m}=this,S=this.view.stage.renderView.renderer,{highlights:Rt}=o;for(let Ee=0;Ee<Rt.length;++Ee){const{name:Nr}=Rt[Ee];if(!S.hasHighlight(Nr))continue;l.highlightLevel=Ee,n.setClearColor(0,0,0,0);const rt=a.acquire(u,y,"single highlight",L.RG8UNORM);n.bindFramebuffer(rt.fbo),n.setViewport(0,0,u,y),n.clear(Z.COLOR),n.bindTechnique(f,o,l),r(p),m.blurInput=rt.getTexture(),U(m.blurSize,1/xe,0);const Ae=a.acquire(xe,ye,"single highlight blur h",L.RG8UNORM);n.unbindTexture(Ae.fbo?.colorTexture),n.bindFramebuffer(Ae.fbo),n.setViewport(0,0,xe,ye),n.clear(Z.COLOR),n.bindTechnique(x,o,l,m),r(p),rt.release(),U(m.blurSize,0,1/ye),l.highlightBlurTexture=Ae.getTexture(),i(),n.bindTechnique(C,o,l,m),r(p),Ae.release()}}_gridUpdateResources(e){const t=this._grid,{width:r,height:i}=e.descriptor;if(t.horizontalCellCount=Math.ceil(r/W),t.verticalCellCount=Math.ceil(i/W),t.vao)return;const a=this.renderingContext,s=qt.createIndex(a,kt.STATIC_DRAW,Va);t.vao=new aa(a,vi,new Map([["geometry",Ea]]),new Map([["geometry",qt.createVertex(a,kt.STATIC_DRAW)]]),s)}_gridComputeCoverage(e,t,r){const i=this.renderingContext,a=this._grid,s=t.descriptor,o=Math.ceil(s.width/W),l=Math.ceil(s.height/W);this._downsampleDrawParameters.input=t;const{highlights:n}=r;a.coverage?.release();const f=this.fboCache.acquire(o,l,"highlight coverage",n.length>Lr?L.RG8UINT:L.R8UINT);return a.coverage=f,i.bindFramebuffer(f.fbo),i.bindTechnique(e,r,this._passParameters,this._downsampleDrawParameters),i.setViewport(0,0,o,l),i.screen.draw(),a}get test(){}};D([I()],Ve.prototype,"produces",void 0),D([I()],Ve.prototype,"consumes",void 0),Ve=D([_t("esri.views.3d.webgl-engine.effects.highlight.Highlight")],Ve);let Aa=class{constructor(){this.coverage=null,this.vao=null,this.verticalCellCount=0,this.horizontalCellCount=0,this.viewportWidth=0,this.viewportHeight=0}};function Ha(e){const t=new Uint8Array(128);let r=0;for(const i of e){const a=4*r,s=4*r+64;++r;const{color:o}=i,l=i.haloColor??o;t[a+0]=o.r,t[a+1]=o.g,t[a+2]=o.b,t[a+3]=i.fillOpacity*o.a*255,t[s+0]=l.r,t[s+1]=l.g,t[s+2]=l.b,t[s+3]=i.haloOpacity*l.a*255}return t}let La=0;function za(e){let t=0;for(const i of e){const{name:a}=i;t+=a.length;const{color:s,fillOpacity:o,haloColor:l,haloOpacity:n}=i;t+=s.r+s.g+s.b+s.a+o,t+=l?l.r+l.g+l.b+l.a+n:0}const r=e.at(0);if(r){const{shadowOpacity:i,shadowDifference:a,shadowColor:s}=r;t+=i+a+s.r+s.g+s.b+s.a}return La+++(t>=0?0:1)}const Va=new Uint8Array([0,1,2,2,1,3]);function Na(e,t,r,i,a,s=0){const{highlights:o}=i,l=o.length>1?t.acquire(r.width,r.height,"highlight mix",o.length>Lr?L.RG8UINT:L.R8UINT):null,{gl:n}=e;if(l){const x=e.getBoundFramebufferObject();e.bindFramebuffer(l.fbo),n.clearBufferuiv(n.COLOR,0,[0,0,0,0]),e.bindFramebuffer(x)}const f=l?.getTexture();i.highlightMixTexture=f,U(i.highlightMixOrigin,s,0),o.forEach((x,C)=>{if(C>0){const p=wt.TEXTURE_UNIT_FOR_UPDATES;e.bindTexture(f,p),e.setActiveTexture(p),n.copyTexSubImage2D(Ui.TEXTURE_2D,0,0,0,s,0,r.width,r.height),e.bindTexture(null,p)}e.clear(Z.DEPTH),i.highlightLevel=C,a()}),i.highlightLevel=null,i.highlightMixTexture=null,l?.release()}const Lr=4;let ja=class{constructor(t,r,i,a){this.material=t,this.output=r,this.techniques=i,this.textures=a}},Wa=class{constructor(t,r,i,a){this._textures=t,this._techniques=r,this.materialChanged=i,this.requestRender=a,this._id2glMaterialRef=new qi}dispose(){this._textures.destroy()}acquire(t,r,i){if(this._ownMaterial(t),!t.produces.get(r)?.(i))return null;let s=this._id2glMaterialRef.get(i,t.id);if(s==null){const o=t.createGLMaterial(new ja(t,i,this._techniques,this._textures));s=new Ua(o),this._id2glMaterialRef.set(i,t.id,s)}return s.ref(),s.glMaterial}release(t,r){const i=this._id2glMaterialRef.get(r,t.id);i!=null&&(i.unref(),i.referenced||(Be(i.glMaterial),this._id2glMaterialRef.delete(r,t.id)))}_ownMaterial(t){t.repository&&t.repository!==this&&Gr.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),t.repository=this}},Ua=class{constructor(t){this.glMaterial=t,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,oe(this._refCnt>=0)}get referenced(){return this._refCnt>0}};class So{constructor(t,r){this.width=t,this.height=r}}let Ga=class{constructor(t){this.shadowMap=t,this.slot=N.OPAQUE_MATERIAL,this.slicePlane=null,this.hasOccludees=!1,this.enableFillLights=!0,this.oitPass=Cr.NONE,this.alignPixelEnabled=!1,this.decorations=!0,this.overlayStretch=1,this.viewshedEnabled=!1,this._camera=new et,this._inverseViewport=_(),this._oldLighting=new lt,this._newLighting=new lt,this._fadedLighting=new lt,this._lighting=this._newLighting,this.ssr=new ka,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.highlights=new Array,this.highlightOrderMap=new Map,this.highlightMixOrigin=_(),this.highlightMixTexture=null,this.hudRenderStyle=Zi.Occluded,this.hudOccludedFragmentOpacity=1,this.snowCover=!1,this.clouds=new ma,this.shadowHighlightsVisible=!1}get camera(){return this._camera}set camera(t){this._camera=t,this._inverseViewport[0]=1/t.fullViewport[2],this._inverseViewport[1]=1/t.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}fadeLighting(){switch(this.clouds.fadeFactor){case 0:this._lighting=this._oldLighting;break;default:this._fadedLighting.lerpLighting(this._oldLighting,this._newLighting,this.clouds.fadeFactor),this._lighting=this._fadedLighting;break;case 1:this._lighting=this._newLighting,this._oldLighting.copyFrom(this._newLighting)}}updateLighting(t,r,i,a){this._oldLighting.copyFrom(this.lighting),this._newLighting.noonFactor=r,this._newLighting.globalFactor=i,this._newLighting.set(t),a===Qe.FadeWithWeather&&this.clouds.requestFade(),this.fadeLighting()}get highlight(){return this.highlightLevel==null?null:this.highlights[this.highlightLevel]}};class ka{constructor(){this.fadeFactor=1,this.reprojectionMatrix=F()}}class qa{constructor(t,r,i){this.rctx=t,this.techniques=i,this.lastFrameCamera=new et,this.output=b.Color,this.renderOccludedMask=ke,this.time=kr(0),this.bind=new Ga(r),this.bind.alignPixelEnabled=!0}}const ke=Se.Occlude|Se.OccludeAndTransparent|Se.OccludeAndTransparentStencil;let Te=class extends et{constructor(){super(...arguments),this._projectionMatrix=F()}get projectionMatrix(){return this._projectionMatrix}};D([I()],Te.prototype,"_projectionMatrix",void 0),D([I({readOnly:!0})],Te.prototype,"projectionMatrix",null),Te=D([_t("esri.views.3d.webgl-engine.lib.CascadeCamera")],Te);var Ye;(function(e){e[e.Highlight=0]="Highlight",e[e.ExcludeHighlight=1]="ExcludeHighlight"})(Ye||(Ye={}));class Ne{constructor(){this.camera=new Te,this.lightMat=F()}}class Ba{constructor(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0}}let Za=class{constructor(t,r){this._fbos=t,this._viewingMode=r,this._snapshots=new Array,this._textureHeight=0,this._numCascades=1,this.settings=new Ba,this._projectionView=F(),this._projectionViewInverse=F(),this._modelViewLight=F(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=Xe(),this._cascades=[new Ne,new Ne,new Ne,new Ne],this._lastOrigin=null,this._enabled=!1,this._maxTextureWidth=Math.min(qr("esri-mobile")?4096:16384,t.rctx.parameters.maxTextureSize)}dispose(){this.enabled=!1,this.disposeOffscreenBuffers()}get depthTexture(){return this._handle?.getTexture(Le)}get _textureWidth(){return this._textureHeight*this._numCascades}get numCascades(){return this._numCascades}get cascadeDistances(){return Ft(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}disposeMainBuffer(){this._handle=De(this._handle)}disposeOffscreenBuffers(){this.disposeMainBuffer(),this._discardSnapshots()}set maxCascades(t){this.settings.maxNumCascadesHighQuality=_r(Math.floor(t),1,4)}get maxCascades(){return this.settings.maxNumCascadesHighQuality}set enabled(t){this._enabled=t,t||this.disposeOffscreenBuffers()}get enabled(){return this._enabled}get ready(){return this._enabled&&this.depthTexture!=null}get cascades(){for(let t=0;t<this._numCascades;++t)dt[t]=this._cascades[t];return dt.length=this._numCascades,dt}start(t,r,i,a,s){oe(this.enabled);const{near:o,far:l}=es(i);this._computeCascadeDistances(o,l,a),this._textureHeight=this._computeTextureHeight(t,s,a),this._setupMatrices(t,r);const{viewMatrix:n,projectionMatrix:f}=t;for(let x=0;x<this._numCascades;++x)this._constructCascade(x,f,n,r);this._lastOrigin=null,this.clear()}finish(){oe(this.enabled)}getShadowMapMatrices(t){if(!this._lastOrigin||!di(t,this._lastOrigin)){this._lastOrigin=this._lastOrigin||Me(),V(this._lastOrigin,t);for(let r=0;r<this._numCascades;++r){Et(dr,this._cascades[r].lightMat,t);for(let i=0;i<16;++i)ur[16*r+i]=dr[i]}}return ur}moveSnapshot(t){oe(this.enabled),this._snapshots[t]?.release(),this._snapshots[t]=this._handle,this._handle?.setName(t===Ye.Highlight?"shadow map highlight":"shadow map excluding highlight"),this._handle=null}copySnapshot(t){if(!this.enabled||!this._handle?.getTexture(Le)?.descriptor)return;this._snapshots[t]?.release();const i=t===Ye.Highlight?"shadow map highlight":"shadow map excluding highlight",a=this._acquireFBO(i);this._snapshots[t]=a;const s=this._handle?.fbo;if(!s||!a?.fbo)return void console.error("No FBO");const{rctx:o}=this._fbos;o.blitFramebuffer(s,a.fbo,Z.DEPTH)}getSnapshot(t){return this.enabled?this._snapshots[t]?.getTexture(Le):null}clear(){this._ensureFbo(),this.bindFbo(),this._fbos.rctx.clear(Z.DEPTH)}_computeTextureHeight({pixelRatio:t,fullWidth:r,fullHeight:i},a,s){const o=Math.min(window.devicePixelRatio,a)/t,l=s?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality;return Si(Math.max(r,i)*o*l,this._maxTextureWidth/this._numCascades)}_ensureFbo(){this._handle?.fbo?.width===this._textureWidth&&this._handle?.fbo.height===this._textureHeight||(this._handle?.release(),this._handle=this._acquireFBO("shadow map"))}_acquireFBO(t){const r=this._fbos.acquire(this._textureWidth,this._textureHeight,t,Oi.DEPTH16);return r.getTexture(Le)?.setShadowFiltering(!0),r}_discardSnapshot(t){this._snapshots[t]=De(this._snapshots[t])}_discardSnapshots(){for(let t=0;t<this._snapshots.length;++t)this._discardSnapshot(t);this._snapshots.length=0}bindFbo(){this._fbos.rctx.bindFramebuffer(this._handle?.fbo)}_constructCascade(t,r,i,a){const s=this._cascades[t],o=-this._cascadeDistances[t],l=-this._cascadeDistances[t+1],n=(r[10]*o+r[14])/Math.abs(r[11]*o+r[15]),f=(r[10]*l+r[14])/Math.abs(r[11]*l+r[15]);oe(n<f);for(let u=0;u<8;++u){Ft(or,u%4==0||u%4==3?-1:1,u%4==0||u%4==1?-1:1,u<4?n:f,1);const y=M[u];Br(y,or,this._projectionViewInverse),y[0]/=y[3],y[1]/=y[3],y[2]/=y[3]}ui(ht,M[0]),s.camera.viewMatrix=Et(Qa,this._modelViewLight,ht);for(let u=0;u<8;++u)xr(M[u],M[u],s.camera.viewMatrix);let x=M[0][2],C=M[0][2];for(let u=1;u<8;++u)x=Math.min(x,M[u][2]),C=Math.max(C,M[u][2]);x-=200,C+=200,s.camera.near=-C,s.camera.far=-x,Ka(i,a,x,C,s.camera),ft(s.lightMat,s.camera.projectionMatrix,s.camera.viewMatrix);const p=this._textureHeight;s.camera.viewport=[t*p,0,p,p]}_setupMatrices(t,r){ft(this._projectionView,t.projectionMatrix,t.viewMatrix),Zr(this._projectionViewInverse,this._projectionView);const i=this._viewingMode===Yi.Global?t.eye:yr(ht,0,0,1);Qr(this._modelViewLight,[0,0,0],[-r[0],-r[1],-r[2]],i)}_computeCascadeDistances(t,r,i){const a=i?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor(Bi(r/t,4)),a);const s=(r-t)/this._numCascades,o=(r/t)**(1/this._numCascades);let l=t,n=t;for(let f=0;f<this._numCascades+1;++f)this._cascadeDistances[f]=Yr(l,n,this.settings.splitSchemeLambda),l*=o,n+=s}get test(){}};const Qa=F(),or=Xe(),M=[];for(let e=0;e<8;++e)M.push(Xe());const nr=_(),lr=_(),Ya=_(),cr=_(),hr=_(),ht=Me(),dt=[],dr=F(),ur=q.concat(q,q,q,q),R=_(),J=_(),k=[_(),_(),_(),_()],w=_(),ut=_(),z=_(),be=_(),K=_(),ee=_(),je=_();function Xa(e,t,r,i,a,s,o,l){U(R,0,0);for(let m=0;m<4;++m)G(R,R,e[m]);re(R,R,.25),U(J,0,0);for(let m=4;m<8;++m)G(J,J,e[m]);re(J,J,.25),we(k[0],e[4],e[5],.5),we(k[1],e[5],e[6],.5),we(k[2],e[6],e[7],.5),we(k[3],e[7],e[4],.5);let n=0,f=Ut(k[0],R);for(let m=1;m<4;++m){const S=Ut(k[m],R);S<f&&(f=S,n=m)}ie(w,k[n],e[n+4]);const x=w[0];let C,p;w[0]=-w[1],w[1]=x,ie(ut,J,R),T(ut,w)<0&&Li(w,w),we(w,w,ut,r),Gt(w,w),C=p=T(ie(z,e[0],R),w);for(let m=1;m<8;++m){const S=T(ie(z,e[m],R),w);S<C?C=S:S>p&&(p=S)}zi(i,R),re(z,w,C-t),G(i,i,z);let u=-1,y=1,ve=0,_e=0;for(let m=0;m<8;++m){ie(be,e[m],i),Gt(be,be);const S=w[0]*be[1]-w[1]*be[0];S>0?S>u&&(u=S,ve=m):S<y&&(y=S,_e=m)}Q(u>0,"leftArea"),Q(y<0,"rightArea"),re(K,w,C),G(K,K,R),re(ee,w,p),G(ee,ee,R),je[0]=-w[1],je[1]=w[0];const tt=ze(i,e[_e],ee,G(z,ee,je),1,a),Fe=ze(i,e[ve],ee,z,1,s),xe=ze(i,e[ve],K,G(z,K,je),1,o),ye=ze(i,e[_e],K,z,1,l);Q(tt,"rayRay"),Q(Fe,"rayRay"),Q(xe,"rayRay"),Q(ye,"rayRay")}function h(e,t){return 3*t+e}const gr=_();function P(e,t){return U(gr,e[t],e[t+3]),gr}const O=_(),c=Qi();function Ja(e,t,r,i,a){ie(O,r,i),re(O,O,.5),c[0]=O[0],c[1]=O[1],c[2]=0,c[3]=O[1],c[4]=-O[0],c[5]=0,c[6]=O[0]*O[0]+O[1]*O[1],c[7]=O[0]*O[1]-O[1]*O[0],c[8]=1,c[h(0,2)]=-T(P(c,0),e),c[h(1,2)]=-T(P(c,1),e);let s=T(P(c,0),r)+c[h(0,2)],o=T(P(c,1),r)+c[h(1,2)],l=T(P(c,0),i)+c[h(0,2)],n=T(P(c,1),i)+c[h(1,2)];s=-(s+l)/(o+n),c[h(0,0)]+=c[h(1,0)]*s,c[h(0,1)]+=c[h(1,1)]*s,c[h(0,2)]+=c[h(1,2)]*s,s=1/(T(P(c,0),r)+c[h(0,2)]),o=1/(T(P(c,1),r)+c[h(1,2)]),c[h(0,0)]*=s,c[h(0,1)]*=s,c[h(0,2)]*=s,c[h(1,0)]*=o,c[h(1,1)]*=o,c[h(1,2)]*=o,c[h(2,0)]=c[h(1,0)],c[h(2,1)]=c[h(1,1)],c[h(2,2)]=c[h(1,2)],c[h(1,2)]+=1,s=T(P(c,1),t)+c[h(1,2)],o=T(P(c,2),t)+c[h(2,2)],l=T(P(c,1),r)+c[h(1,2)],n=T(P(c,2),r)+c[h(2,2)],s=-.5*(s/o+l/n),c[h(1,0)]+=c[h(2,0)]*s,c[h(1,1)]+=c[h(2,1)]*s,c[h(1,2)]+=c[h(2,2)]*s,s=T(P(c,1),t)+c[h(1,2)],o=T(P(c,2),t)+c[h(2,2)],l=-o/s,c[h(1,0)]*=l,c[h(1,1)]*=l,c[h(1,2)]*=l,a[0]=c[0],a[1]=c[1],a[2]=0,a[3]=c[2],a[4]=c[3],a[5]=c[4],a[6]=0,a[7]=c[5],a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=c[6],a[13]=c[7],a[14]=0,a[15]=c[8]}function Ka(e,t,r,i,a){const s=1/M[0][3],o=1/M[4][3];oe(s<o);let l=s+Math.sqrt(s*o);const n=Math.sin(Xr(e[2]*t[0]+e[6]*t[1]+e[10]*t[2]));l/=n,Xa(M,l,n,nr,lr,Ya,cr,hr),Ja(nr,lr,cr,hr,a.projectionMatrix),a.projectionMatrix[10]=2/(r-i),a.projectionMatrix[14]=-(r+i)/(r-i)}function es(e){let{near:t,far:r}=e;return t<2&&(t=2),r<2&&(r=2),t>=r&&(t=2,r=4),{near:t,far:r}}class pr extends pe{constructor(t,r){super(t,r,new fe(Pa,()=>ge(()=>Promise.resolve().then(()=>ls),void 0)))}initializePipeline(t){return t.hasAlpha?ce({blending:Dr,colorWrite:he}):ce({colorWrite:he})}}class zr extends Ni{constructor(){super(...arguments),this.hasAlpha=!1}}D([ji()],zr.prototype,"hasAlpha",void 0);class Pt extends $e{constructor(){super(...arguments),this.overlayIndex=$.INNER,this.opacity=1}}function Vr(){const e=new me;return e.include(yt),e.fragment.uniforms.add(new le("tex",t=>t.texture)),e.fragment.uniforms.add(new Je("overlayIdx",t=>t.overlayIndex)),e.fragment.uniforms.add(new xt("opacity",t=>t.opacity)),e.fragment.main.add(d`vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;`),e}const ts=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:Pt,build:Vr},Symbol.toStringTag,{value:"Module"}));class fr extends pe{constructor(t,r){super(t,r,new fe(ts,()=>ge(()=>Promise.resolve().then(()=>cs),void 0)))}}let H=class extends ca{constructor(e){super(e),this._overlays=null,this._renderTargets=null,this._overlayParameters=new Pt,this.hasHighlights=!1,this._hasWater=!1,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new Jr,this._passParameters=new bt,this._screenToWorldRatio=1,this._localOriginFactory=null,this.unloadedMemory=0,this.ignoresMemoryFactor=!1,this._camera=new et,this.events=new Kr,this.longitudeCyclical=null,this.produces=new Map([[N.DRAPED_MATERIAL,t=>t!==b.Highlight||this.hasHighlights],[N.DRAPED_WATER,()=>this._hasWater]]),this._hasTargetWithoutRasterImage=!1,this._hasDrapedFeatureSource=!1,this._hasDrapedRasterSource=!1}initialize(){const e=this._view,t=e.stage,r=t.renderer.fboCache,{waterTextures:i,techniques:a}=t.renderView;this._renderContext=new qa(this._rctx,new Za(r,e.state.viewingMode),a),this.addHandles([te(()=>i.updating,()=>this.events.emit("content-changed"),At),te(()=>this.spatialReference,l=>this._localOriginFactory=new pi(l),At),ei(()=>e.allLayerViews,"after-changes",()=>this._sortedDrapeSourceRenderersDirty=!0),te(()=>za(e.state.highlights),()=>this._sortedDrapeSourceRenderersDirty=!0,pt),te(()=>e.state.highlights,l=>{this._bindParameters.highlights=l,this._bindParameters.highlightOrderMap=e.state.highlightOrderMap},pt),e.resourceController.scheduler.registerTask(Xi.OVERLAY_RENDERER,this)]);const{_bindParameters:s,_camera:o}=this;o.near=1,o.far=1e4,o.relativeElevation=null,s.slot=N.DRAPED_MATERIAL,s.mainDepth=null,s.camera=o,s.oitPass=Cr.NONE,s.updateLighting([new Di(ti())],0,0,Qe.Immediate)}destroy(){this._renderers.forEach(e=>e.destroy()),this._renderers.clear(),this._passParameters.texture=Be(this._passParameters.texture),this.disposeOverlays()}get _bindParameters(){return this._renderContext.bind}get _rctx(){return this._stage.renderView.renderingContext}get _view(){return this.parent.view}get _stage(){return this.parent.view.stage}get spatialReference(){return this.parent.spatialReference}get _techniques(){return this._stage.renderView.techniques}get rctx(){return this._rctx}get materials(){return this._pluginContext.materials}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}get pluginContext(){return this._pluginContext}initializeRenderContext(e){const t=new Wa(this._view.stage.renderView.textures,this._techniques,()=>{this.notifyChange("rendersOccludedDraped"),this.events.emit("content-changed"),this.notifyChange("updating"),this.notifyChange("isEmpty")},()=>this.events.emit("content-changed"));this._pluginContext={...e,materials:t},this._techniques.precompile(fr)}uninitializeRenderContext(){}acquireTechniques(){return[]}render(){}get updating(){return this._sortedDrapeSourceRenderersDirty||Ce(this._renderers,e=>e.updating||e.canCompact)}get hasOverlays(){return this._overlays!=null&&this._renderTargets!=null}getMaterialRenderer(e){for(const t of this._renderers.values()){const r=t.getMaterialRenderer(e);if(r)return r}return null}get layers(){return this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers(),this._sortedRenderers.map(e=>e.drapeSource.layer).filter(e=>!!e)}registerDrapeSource(e,t){const r=this._renderers.get(e);r?.destroy(),this._renderers.set(e,t),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this.addHandles(te(()=>e.fullOpacity,()=>this.events.emit("content-changed")),e)}removeDrapeSourceRenderer(e){if(e==null)return;const t=this._renderers.get(e);t!=null&&(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(e),this.removeHandles(e),t.destroy())}computeValidity(){return this._renderTargets?.computeValidity()??0}releaseRenderTargets(){this._renderTargets?.dispose()}get overlays(){return this._overlays??[]}ensureDrapeTargets(e){this._hasTargetWithoutRasterImage=!!this._overlays&&at(e,t=>t.drapeTargetType===fi.WithoutRasterImage)}ensureDrapeSources(e){this._overlays?(this._hasDrapedFeatureSource=at(e,t=>t.drapeSourceType===He.Features),this._hasDrapedRasterSource=at(e,t=>t.drapeSourceType===He.RasterImage)):this._hasDrapedFeatureSource=this._hasDrapedRasterSource=!1}get _needsColorWithoutRasterImage(){return this._hasDrapedRasterSource&&this._hasDrapedFeatureSource&&this._hasTargetWithoutRasterImage}ensureOverlays(e,t,r=this._bindParameters.overlayStretch){this._overlays==null&&(this._renderTargets=new ua(this._stage.renderer.fboCache),this._overlays=[new Qt,new Qt]),this.ensureDrapeTargets(e),this.ensureDrapeSources(t),this._bindParameters.overlayStretch=r}disposeOverlays(){this._overlays=null,this._renderTargets=Be(this._renderTargets),this.events.emit("textures-disposed")}getTexture(e){return e===v.ColorNoRasterImage&&!this._needsColorWithoutRasterImage&&this._hasDrapedFeatureSource?this._renderTargets?.getTexture(v.Color):this._renderTargets?.getTexture(e)}get running(){return this.updating}runTask(e){this._processDrapeSources(e,()=>!0)}_processDrapeSources(e,t){let r=!1;for(const[i,a]of this._renderers){if(e.done)break;(i.destroyed||t(i))&&a.commitChanges()&&(r=!0,e.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,r=!0,this._updateSortedDrapeSourceRenderers(),e.madeProgress()),this.compact(e),r&&(this._overlays!=null&&this._renderers.size===0&&this.disposeOverlays(),this.notifyChange("updating"),this.notifyChange("isEmpty"),this.events.emit("content-changed"),this.hasHighlights=Ce(this._renderers,i=>i.hasHighlights),this.notifyChange("rendersOccludedDraped"))}compact(e){let t=!1;for(const r of this._renderers.values()){if(e.done)break;t=r.compact(e)||t}return t&&this.notifyChange("updating"),t}hasHighlight(e){return Ce(this._renderers,t=>t.hasHighlight(e))}processSyncDrapeSources(){this._processDrapeSources(Ji,e=>e.updatePolicy===mi.SYNC)}get isEmpty(){return!st.OVERLAY_DRAW_DEBUG_TEXTURE&&!Ce(this._renderers,e=>!e.isEmpty)}get hasWater(){const e=Ce(this._renderers,({hasWater:t})=>t);return e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water")),this._hasWater}get rendersOccludedDraped(){const e=this._renderContext.renderOccludedMask;this._renderContext.renderOccludedMask=gt,++this._techniques.precompiling;const t=this._sortedRenderers.some(({renderer:r})=>r.precompile(this._renderContext));return--this._techniques.precompiling,this._renderContext.renderOccludedMask=e,t}renders(e){if(st.OVERLAY_DRAW_DEBUG_TEXTURE&&e!==v.Occluded&&e!==v.Highlight)return!0;if(!this._overlays)return!1;const t=this._overlays[$.INNER];for(const a of this._overlays)a.setupGeometryViews(this.longitudeCyclical);if(!t.hasSomeSizedView())return!1;const r=this._renderContext.output;this._renderContext.output=this._renderTargets?.targets.find(a=>a.content===e)?.output??b.Color,++this._techniques.precompiling;const i=this._sortedRenderers.some(({renderer:a})=>a.precompile(this._renderContext));return--this._techniques.precompiling,this._renderContext.output=r,i}get mode(){return this.isEmpty?ne.Disabled:this.hasWater&&this.renders(v.WaterNormal)?ne.EnabledWithWater:this._renderTargets?.getTexture(v.Color)?ne.Enabled:ne.Disabled}updateAnimation(e){let t=!1;return this._renderers.forEach(r=>t=r.updateAnimation(e)||t),t&&this.parent.requestRender(Ge.BACKGROUND),t}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}precompileShaders(e){if(!this._overlays||!this._renderTargets)return;const t=this._bindParameters;t.alignPixelEnabled=e.alignPixelEnabled,++this._techniques.precompiling;for(const r of this._renderTargets.targets){if(r.content===v.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const i=r.output;this._renderContext.output=i,t.slot=i===b.Normal?N.DRAPED_WATER:N.DRAPED_MATERIAL,i===b.Highlight&&(t.highlightMixTexture=t.highlights.length>1?this._rctx.emptyTexture:null),r.content===v.Occluded&&(this._renderContext.renderOccludedMask=gt),this._sortedRenderers.forAll(({drapeSource:a,renderer:s})=>{r.content===v.ColorNoRasterImage&&a.drapeSourceType===He.RasterImage||s.precompile(this._renderContext)}),this._renderContext.renderOccludedMask=ke,t.highlightMixTexture=null}--this._techniques.precompiling}drawOverlays(e){if(this._overlays&&this._renderTargets){for(const t of this._overlays)t.setupGeometryViews(this.longitudeCyclical);this._bindParameters.alignPixelEnabled=e.alignPixelEnabled;for(const t of this._renderTargets.targets){if(t.content===v.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const r=this._drawTarget($.INNER,t),i=this._drawTarget($.OUTER,t);(r||i)&&t.fbo.generateMipMap()}}}_drawTarget(e,t){const r=this._overlays[e],i=r.canvasGeometries;if(i.numViews===0)return!1;const a=this._view.state.contentPixelRatio;this._screenToWorldRatio=a*r.mapUnitsPerPixel/this._bindParameters.overlayStretch;const{output:s}=t;if(this.isEmpty||s===b.Normal&&!this.hasWater||!r.hasSomeSizedView())return!1;const{_rctx:o,_camera:l,_renderContext:n,_bindParameters:f}=this;if(l.pixelRatio=r.pixelRatio*a,n.output=s,f.screenToWorldRatio=this._screenToWorldRatio,f.screenToPCSRatio=this._screenToWorldRatio*this.parent.worldToPCSRatio,f.slot=s===b.Normal?N.DRAPED_WATER:N.DRAPED_MATERIAL,t.content===v.Occluded&&(n.renderOccludedMask=gt),!this.renders(t.content))return n.renderOccludedMask=ke,!1;const{resolution:x}=r,C=e===$.INNER,p=C?0:x;if(o.setViewport(p,0,x,x),this._bindTargetFBO(t),C)if(t.output!==b.Highlight)o.setClearColor(0,0,0,0),o.clear(Z.COLOR);else{const{gl:u}=o;u.clearBufferuiv(u.COLOR,0,[0,0,0,0])}if(st.OVERLAY_DRAW_DEBUG_TEXTURE&&t.content!==v.Occluded&&t.content!==v.Highlight){this._techniques.precompile(pr,mt);const u=this._techniques.get(pr,mt);for(let y=0;y<i.numViews;y++)this._setViewParameters(i.extents[y],r),this._ensureDebugPatternResources(r.resolution,is[e]),o.bindTechnique(u,f,this._passParameters),o.screen.draw()}if(t.output===b.Highlight){const{fboCache:u}=this._stage.renderer,y=this._resolution;this._bindTargetFBO(t),Na(o,u,{width:y,height:y},f,()=>this._renderAllGeometry(e,t),p)}else this._renderAllGeometry(e,t);return o.bindFramebuffer(null),n.renderOccludedMask=ke,!0}_renderAllGeometry(e,t){const r=this._overlays[e],i=r.canvasGeometries;this._sortedRenderers.forAll(({drapeSource:a,renderer:s})=>{if(t.content===v.ColorNoRasterImage&&a.drapeSourceType===He.RasterImage)return;const{fullOpacity:o}=a,l=o!=null&&o<1&&t.output===b.Color&&this._bindTemporaryFBO();for(let n=0;n<i.numViews;n++)this._setViewParameters(i.extents[n],r),s.render(this._renderContext);if(l){this._bindTargetFBO(t),this._overlayParameters.texture=l.getTexture(),this._overlayParameters.opacity=o,this._overlayParameters.overlayIndex=e;const n=this._techniques.get(fr);this._rctx.bindTechnique(n,this._bindParameters,this._overlayParameters),this._rctx.screen.draw(),l.release()}})}_bindTargetFBO(e){const t=this._resolution,r=2*t;e.fbo.bind(this._rctx,r,t)}_bindTemporaryFBO(){const e=this._resolution,t=2*e,r=this._stage.renderer.fboCache,i=r.acquire(t,e,"overlay tmp");return r.rctx.bindFramebuffer(i.fbo),r.rctx.clear(Z.COLOR),i}get _resolution(){return this._overlays?.[$.INNER].resolution??0}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,t,r,i){this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers();let a=0;for(const{renderer:s}of this._sortedRenderers)a=s.intersect?.(e,t,r,i,a)??a}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),this._renderers.size===0)return;const e=this._view.map.allLayers,t=e.length;this._renderers.forEach((r,i)=>{const a=e.indexOf(i.layer),s=a>=0,o=i.renderGroup??(s?Ht.MapLayer:Ht.ViewLayer),l=i.drapeSourcePriorityOffset??0,n=t*o+(s?a:0)+l;this._sortedRenderers.push(new rs(i,r,n))}),this._sortedRenderers.sort((r,i)=>r.index-i.index)}_setViewParameters(e,t){const r=this._camera;r.viewport=[0,0,t.resolution,t.resolution],ri(r.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],r.near,r.far),ii(r.viewMatrix,[-e[0],-e[1],0])}_ensureDebugPatternResources(e,t){if(yr(this._passParameters.color,t[0],t[1],t[2]),this._passParameters.texture)return;const r=new Uint8Array(e*e*4);let i=0;for(let s=0;s<e;s++)for(let o=0;o<e;o++){const l=Math.floor(o/10),n=Math.floor(s/10);l<2||n<2||10*l>e-20||10*n>e-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&l&&1&n?1&o^1&s?0:255:1&l^1&n?0:128)}const a=new Rr(e);a.samplingMode=Pr.NEAREST,this._passParameters.texture=new wt(this._rctx,a,r)}get test(){}};D([I()],H.prototype,"hasHighlights",void 0),D([I()],H.prototype,"_sortedDrapeSourceRenderersDirty",void 0),D([I({constructOnly:!0})],H.prototype,"parent",void 0),D([I({readOnly:!0})],H.prototype,"_techniques",null),D([I({type:Boolean,readOnly:!0})],H.prototype,"updating",null),D([I()],H.prototype,"isEmpty",null),D([I({readOnly:!0})],H.prototype,"rendersOccludedDraped",null),H=D([_t("esri.views.3d.terrain.OverlayRenderer")],H);class rs{constructor(t,r,i){this.drapeSource=t,this.renderer=r,this.index=i}}const is=[[1,.5,.5],[.5,.5,1]],Po=-2,gt=Se.OccludeAndTransparent,mt=new zr;mt.hasAlpha=!0;var mr,vr;(function(e){e[e.ADD=0]="ADD",e[e.UPDATE=1]="UPDATE",e[e.REMOVE=2]="REMOVE"})(mr||(mr={})),function(e){e[e.NONE=0]="NONE",e[e.VISIBILITY=1]="VISIBILITY",e[e.GEOMETRY=2]="GEOMETRY",e[e.TRANSFORMATION=4]="TRANSFORMATION",e[e.HIGHLIGHT=8]="HIGHLIGHT",e[e.OCCLUDEE=16]="OCCLUDEE"}(vr||(vr={}));class Ro{constructor(t,r={}){this.geometry=t,this.screenToWorldRatio=1,this._transformation=F(),this._shaderTransformation=null,this._boundingSphere=null,this.id=ai(),this.layerViewUid=r.layerViewUid,this.graphicUid=r.graphicUid,this.castShadow=r.castShadow??!1,r.objectShaderTransformation&&this.objectShaderTransformationChanged(r.objectShaderTransformation)}get transformation(){return this._transformation}set transformation(t){si(this._transformation,t),this._boundingSphere=null}get boundingInfo(){return this.geometry.boundingInfo}objectShaderTransformationChanged(t){t==null?this._shaderTransformation=null:(this._shaderTransformation??=F(),ft(this._shaderTransformation,t,this.geometry.transformation)),this._boundingSphere=null}get boundingSphere(){return this.boundingInfo?(this._boundingSphere==null&&(this._boundingSphere??=ea(),xr(ta(this._boundingSphere),this.boundingInfo.center,this.shaderTransformation),this._boundingSphere[3]=this.boundingInfo.radius*ra(this.shaderTransformation)),this._boundingSphere):Ki}get material(){return this.geometry.material}get type(){return this.geometry.type}get shaderTransformation(){return this._shaderTransformation??this.transformation}get attributes(){return this.geometry.attributes}get highlight(){return this.geometry.highlights}foreachHighlightOptions(t){this.geometry.foreachHighlightOptions(t)}get hasHighlights(){return this.geometry.hasHighlights}get occludees(){return this.geometry.occludees}get visible(){return this.geometry.visible}set visible(t){this.geometry.visible=t}}const as=Object.freeze(Object.defineProperty({__proto__:null,build:Er},Symbol.toStringTag,{value:"Module"})),ss=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:Dt,build:Ar},Symbol.toStringTag,{value:"Module"})),os=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:Tt,blurSize:St,build:Fr,gridCellPixelSize:W,outlineSize:Re},Symbol.toStringTag,{value:"Module"})),ns=Object.freeze(Object.defineProperty({__proto__:null,build:Hr},Symbol.toStringTag,{value:"Module"})),ls=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:bt,build:Ir},Symbol.toStringTag,{value:"Module"})),cs=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:Pt,build:Vr},Symbol.toStringTag,{value:"Module"}));export{H as $,Bt as A,Sa as B,wa as C,Oe as D,mr as E,Ye as F,Ie as G,So as H,vr as I,Za as J,qa as K,ke as L,Lr as M,Na as N,Zt as O,Wa as P,Ve as Q,vo as T,$ as a,to as b,Zs as c,j as d,Ze as e,Qe as f,Ro as g,oo as h,ne as i,v as j,xo as k,yo as l,Ta as m,sa as n,ca as o,ct as p,_o as q,aa as r,Gs as s,Po as t,Ga as u,gt as v,ks as w,la as x,pa as y,so as z};
