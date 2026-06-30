import{aj as B,aS as at,mJ as st,a1 as rt,iJ as nt,_ as lt,I as T,le as ye,lH as fe,dG as He,a3 as ct,dX as dt,no as Ee,a$ as ut,dJ as ft}from"./index-BfVS1IZv.js";import{n as pt}from"./projectVectorToVector-UVuzv9By.js";import{n as qe}from"./mat3-CSenr4hY.js";import{e as Ge}from"./mat3f64-NKy_SIjb.js";import{e as ht}from"./mat4f64-q_b6UJoq.js";import{r as gt,o as Pe,I as mt}from"./vec2-Db98L5NK.js";import{n as Ae,r as Xe}from"./vec2f64-rIxtbMRN.js";import{o as le,E as k,A as ve,c as We,g as q,s as X,r as te,p as Ze,u as Te,R as vt,N as St,P as xt}from"./vec32-DCEPt2hu.js";import{s as Ot,g as Ct,o as ze,f as bt,y as Pt,T as Fe}from"./BufferView-ZIDOBHFf.js";import{a9 as At,an as Tt,I as $t,N as yt,a8 as Et,o as zt,P as Re,k as he,s as Ie,J as _e,w as Ft,j as G,g as Rt,M as It,T as _t,U as wt,ae as Dt,ao as jt,i as Nt,al as Lt,A as Z,ap as Mt,aq as Bt,ar as Ut,as as Vt,at as Ht,au as we,av as De,aw as qt}from"./Texture-Th5JagZi.js";import{e as K,c as Gt,n as Xt,t as Wt,m as ke,p as Ye,o as Zt,i as kt,f as je}from"./verticalOffsetUtils-D16--bMJ.js";import{O as Yt}from"./InterleavedLayout-DYEY2NPU.js";import{n as M,u as Je,w as ge}from"./ShaderOutput-Bdd80V3g.js";import{l as Qe,u as Jt,n as Qt,d as Kt}from"./graphicUtils-0N_WTgoT.js";import{e as eo,a as to}from"./Matrix4BindUniform-nJ2bUVpz.js";import{s as oo,g as io,o as ao,i as so,u as ro}from"./VertexColor.glsl-zt4ZqvFm.js";import{e as n}from"./VertexAttribute-BfkzOMLV.js";import{R as Ne,C as no}from"./enums-YGqMJDyZ.js";import{B as lo,o as co,g as uo,p as fo}from"./renderState-D5uZEltT.js";import{i as $}from"./ShaderTechniqueConfiguration-Cplc9kKb.js";import{n as d,t as E}from"./glsl-Cj7KC756.js";import"./BindType-BBwFZqyN.js";import"./sdfPrimitives-B89DnMOC.js";import{i as po}from"./ShaderBuilder-BFC91w_r.js";import{t as ho,o as go}from"./Float4DrawUniform-D2Y1AfMe.js";function mo(i,e,t){return!!pt(i,e,re,t.spatialReference)&&(t.x=re[0],t.y=re[1],t.z=re[2],!0)}async function ni(i,e,t,o){return await at(e,t.spatialReference,null,o),mo(i,e,t)}const re=B();function vo(i){return i instanceof Float32Array&&i.length>=16}function So(i){return Array.isArray(i)&&i.length>=16}function xo(i){return vo(i)||So(i)}class Oo{constructor(){this.factor=new Le,this.factorAlignment=new Le}}class Le{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function Co(i,e){const{vertex:t,fragment:o}=i;i.include(At,e),t.include(Qe),t.main.add(d`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),o.main.add(d`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function Ke(i){const e=new po,{signedDistanceFieldEnabled:t,occlusionTestEnabled:o,horizonCullingEnabled:a,pixelSnappingEnabled:r,hasScreenSizePerspective:l,debugDrawLabelBorder:c,vvSize:v,vvColor:u,hasRotation:C,occludedFragmentFade:f,sampleSignedDistanceFieldTexelCenter:p}=i;e.include(Jt,i),e.vertex.include(Tt,i);const{occlusionPass:b,output:F,oitPass:R}=i;if(b)return e.include(Co,i),e;const{vertex:x,fragment:S}=e;e.include(oo),e.include($t,i),e.include(yt,i),o&&e.include(Qt),S.include(ho),S.include(Et),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const A=F===M.Highlight,z=A&&o;z&&e.varyings.add("voccluded","float"),x.uniforms.add(new zt("viewport",s=>s.camera.fullViewport),new Re("screenOffset",(s,j)=>Pe(ce,2*s.screenOffset[0]*j.camera.pixelRatio,2*s.screenOffset[1]*j.camera.pixelRatio)),new Re("anchorPosition",s=>J(s)),new he("materialColor",s=>s.color),new Ie("materialRotation",s=>s.rotation),new _e("tex",s=>s.texture)),Ft(x),t&&(x.uniforms.add(new he("outlineColor",s=>s.outlineColor)),S.uniforms.add(new he("outlineColor",s=>Me(s)?s.outlineColor:st),new Ie("outlineSize",s=>Me(s)?s.outlineSize:0))),a&&x.uniforms.add(new go("pointDistanceSphere",(s,j)=>{const _=j.camera.eye,w=s.origin;return rt(w[0]-_[0],w[1]-_[1],w[2]-_[2],nt.radius)})),r&&x.include(Qe),l&&(io(x),ao(x)),c&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(n.UVI,"vec2"),e.attributes.add(n.COLOR,"vec4"),e.attributes.add(n.SIZE,"vec2"),e.attributes.add(n.ROTATION,"float"),(v||u)&&e.attributes.add(n.FEATUREATTRIBUTE,"vec4"),x.code.add(a?d`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:d`bool behindHorizon(vec3 posModel) { return false; }`),x.main.add(d`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${E(l,d`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,d`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${E(v,d`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${E(o,d`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${E(c,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${E(z,d`voccluded = visible ? 0.0 : 1.0;`)}
  `);const I=d`
      vec2 uvi1 = vec2(uvi.x < 0.0 ? 1.0 : 0.0, uvi.y < 0.0 ? 1.0 : 0.0);
      vec2 uv = abs(uvi + uvi1);
      vec2 texSize = vec2(textureSize(tex, 0));
      uv.x = uv.x >= ${Be} ? 1.0 : uv.x / texSize.x;
      uv.y = uv.y >= ${Be} ? 1.0 : uv.y / texSize.y;
      quadOffset.xy = (uvi1 - anchorPosition) * 2.0 * combinedSize;

      ${E(C,d`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,h=r?t?d`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:d`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:d`posProj += quadOffset;`;x.main.add(d`
    ${I}
    ${u?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${E(F===M.ObjectAndLayerIdColor,d`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${d.float(G)};
    ${E(t,`alphaDiscard = alphaDiscard && outlineColor.a < ${d.float(G)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${h}
      gl_Position = posProj;
    }

    vtc = uv;

    ${E(c,d`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),S.uniforms.add(new _e("tex",s=>s.texture)),f&&!A&&S.uniforms.add(new Rt("depthMap",s=>s.mainDepth),new eo("occludedOpacity",s=>s.hudOccludedFragmentOpacity));const L=c?d`(isBorder > 0.0 ? 0.0 : ${d.float(G)})`:d.float(G),D=d`
    ${E(c,d`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${E(p,d`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${t?d`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgbaTofloat(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${L} ||
          fillPixelColor.a + outlinePixelColor.a < ${d.float(G)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${E(!A,d`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${L}) {
          discard;
        }

        ${E(!A,d`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:d`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${L}) {
            discard;
          }
          ${E(!A,d`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${E(f&&!A,d`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${E(!A&&c,d`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(F){case M.Color:case M.ColorEmission:e.outputs.add("fragColor","vec4",0),F===M.ColorEmission&&e.outputs.add("fragEmission","vec4",1),R===K.ColorAlpha&&e.outputs.add("fragAlpha","float",F===M.ColorEmission?2:1),S.main.add(d`
        ${D}
        ${E(R===K.FrontFace,d`fragColor.rgb /= fragColor.a;`)}
        ${E(F===M.ColorEmission,d`fragEmission = vec4(0.0);`)}
        ${E(R===K.ColorAlpha,d`fragAlpha = fragColor.a;`)}`);break;case M.ObjectAndLayerIdColor:S.main.add(d`
        ${D}
        outputObjectAndLayerIdColor();`);break;case M.Highlight:e.include(It,i),S.main.add(d`
        ${D}
        outputHighlight(${E(z,d`voccluded == 1.0`,d`false`)});`)}return e}function Me(i){return i.outlineColor[3]>0&&i.outlineSize>0}function J(i){return i.textureIsSignedDistanceField?bo(i.anchorPosition,i.distanceFieldBoundingBox,ce):gt(ce,i.anchorPosition),ce}function bo(i,e,t){Pe(t,i[0]*(e[2]-e[0])+e[0],i[1]*(e[3]-e[1])+e[1])}const ce=Ae(),oe=32e3,Be=d.float(oe),Po=Object.freeze(Object.defineProperty({__proto__:null,build:Ke,calculateAnchorPosition:J,fullUV:oe},Symbol.toStringTag,{value:"Module"}));class Ao extends _t{constructor(e,t){super(e,t,new wt(Po,()=>lt(()=>Promise.resolve().then(()=>Do),void 0))),this.primitiveType=t.occlusionPass?Ne.POINTS:Ne.TRIANGLES}initializePipeline(e){const{oitPass:t,hasPolygonOffset:o,draped:a,output:r,depthTestEnabled:l,occlusionPass:c}=e,v=t===K.NONE,u=t===K.ColorAlpha,C=r===M.Highlight,f=l&&!a&&!u&&!c&&!C;return lo({blending:Je(r)?v?co:jt(t):null,depthTest:l&&!a?{func:no.LEQUAL}:null,depthWrite:f?fo:null,drawBuffers:Dt(t,r),colorWrite:uo,polygonOffset:o?To:null})}}const To={factor:0,units:-4};class P extends Gt{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.textureCoordinateType=Nt.None,this.emissionSource=Lt.None,this.discardInvisibleFragments=!0,this.hasVvInstancing=!1,this.snowCover=!1}}T([$()],P.prototype,"screenCenterOffsetUnitsEnabled",void 0),T([$()],P.prototype,"occlusionTestEnabled",void 0),T([$()],P.prototype,"signedDistanceFieldEnabled",void 0),T([$()],P.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),T([$()],P.prototype,"vvSize",void 0),T([$()],P.prototype,"vvColor",void 0),T([$()],P.prototype,"hasVerticalOffset",void 0),T([$()],P.prototype,"hasScreenSizePerspective",void 0),T([$()],P.prototype,"hasRotation",void 0),T([$()],P.prototype,"debugDrawLabelBorder",void 0),T([$()],P.prototype,"hasPolygonOffset",void 0),T([$()],P.prototype,"depthTestEnabled",void 0),T([$()],P.prototype,"pixelSnappingEnabled",void 0),T([$()],P.prototype,"draped",void 0),T([$()],P.prototype,"terrainDepthTest",void 0),T([$()],P.prototype,"cullAboveTerrain",void 0),T([$()],P.prototype,"occlusionPass",void 0),T([$()],P.prototype,"occludedFragmentFade",void 0),T([$()],P.prototype,"objectAndLayerIdColorInstanced",void 0),T([$()],P.prototype,"horizonCullingEnabled",void 0),T([$()],P.prototype,"isFocused",void 0);let li=class extends Xt{constructor(e,t){super(e,Io),this.produces=new Map([[Z.HUD_MATERIAL,o=>ge(o)&&!this.parameters.drawAsLabel],[Z.LABEL_MATERIAL,o=>ge(o)&&this.parameters.drawAsLabel],[Z.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[Z.DRAPED_MATERIAL,o=>this.parameters.draped&&ge(o)]]),this._visible=!0,this._configuration=new P(t)}getConfiguration(e,t){const o=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=o,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===Z.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=!o&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===Z.OCCLUSION_PIXELS,Je(e)&&(this._configuration.debugDrawLabelBorder=!!Wt.LABELS_SHOW_BORDER),this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}intersect(e,t,o,a,r,l){const{options:{selectionMode:c,hud:v,excludeLabels:u},point:C,camera:f}=o,{parameters:p}=this;if(!c||!v||u&&p.isLabel||!e.visible||!C||!f)return;const b=e.attributes.get(n.FEATUREATTRIBUTE),F=b==null?null:ye(b.data,Oe),{scaleX:R,scaleY:x}=Ce(F,p,f.pixelRatio);qe(de,t),e.attributes.has(n.FEATUREATTRIBUTE)&&Eo(de);const S=e.attributes.get(n.POSITION),A=e.attributes.get(n.SIZE),z=e.attributes.get(n.NORMAL),I=e.attributes.get(n.ROTATION),h=e.attributes.get(n.CENTEROFFSETANDDISTANCE);Ot(S.size>=3);const L=J(p),D=this.parameters.centerOffsetUnits==="screen";for(let s=0;s<S.data.length/S.size;s++){const j=s*S.size;le(g,S.data[j],S.data[j+1],S.data[j+2]),k(g,g,t),k(g,g,f.viewMatrix);const _=s*h.size;if(le(O,h.data[_],h.data[_+1],h.data[_+2]),!D&&(g[0]+=O[0],g[1]+=O[1],O[2]!==0)){const U=O[2];ve(O,g),We(g,g,q(O,O,U))}const w=s*z.size;if(le(W,z.data[w],z.data[w+1],z.data[w+2]),Se(W,de,f,ee),be(this.parameters,g,ee,f,Y),f.applyProjection(g,m),m[0]>-1){D&&(O[0]||O[1])&&(m[0]+=O[0]*f.pixelRatio,O[1]!==0&&(m[1]+=ke(O[1],Y.factorAlignment)*f.pixelRatio),f.unapplyProjection(m,g)),m[0]+=this.parameters.screenOffset[0]*f.pixelRatio,m[1]+=this.parameters.screenOffset[1]*f.pixelRatio,m[0]=Math.floor(m[0]),m[1]=Math.floor(m[1]);const U=s*A.size;y[0]=A.data[U],y[1]=A.data[U+1],Ye(y,Y.factor,y);const ie=ot*f.pixelRatio;let ae=0;p.textureIsSignedDistanceField&&(ae=Math.min(p.outlineSize,.5*y[0])*f.pixelRatio/2),y[0]*=R,y[1]*=x;const pe=s*I.size,se=p.rotation+I.data[pe];if(xe(C,m[0],m[1],y,ie,ae,se,p,L)){const V=o.ray;if(k(ue,g,He(tt,f.viewMatrix)),m[0]=C[0],m[1]=C[1],f.unprojectFromRenderScreen(m,g)){const H=B();X(H,V.direction);const $e=1/te(H);q(H,H,$e),l(Ze(V.origin,g)*$e,H,-1,ue)}}}}}intersectDraped(e,t,o,a,r){const l=e.attributes.get(n.POSITION),c=e.attributes.get(n.SIZE),v=e.attributes.get(n.ROTATION),u=this.parameters,C=J(u),f=e.attributes.get(n.FEATUREATTRIBUTE),p=f==null?null:ye(f.data,Oe),{scaleX:b,scaleY:F}=Ce(p,u,e.screenToWorldRatio),R=Fo*e.screenToWorldRatio;for(let x=0;x<l.data.length/l.size;x++){const S=x*l.size,A=l.data[S],z=l.data[S+1],I=x*c.size;y[0]=c.data[I],y[1]=c.data[I+1];let h=0;u.textureIsSignedDistanceField&&(h=Math.min(u.outlineSize,.5*y[0])*e.screenToWorldRatio/2),y[0]*=b,y[1]*=F;const L=x*v.size,D=u.rotation+v.data[L];xe(o,A,z,y,R,h,D,u,C)&&a(r.distance,r.normal,-1)}}createBufferWriter(){return new wo}applyShaderOffsetsView(e,t,o,a,r,l,c){const v=Se(t,o,r,ee);return this._applyVerticalGroundOffsetView(e,v,r,c),be(this.parameters,c,v,r,l),this._applyPolygonOffsetView(c,v,a[3],r,c),this._applyCenterOffsetView(c,a,c),c}applyShaderOffsetsNDC(e,t,o,a,r){return this._applyCenterOffsetNDC(e,t,o,a),r!=null&&X(r,a),this._applyPolygonOffsetNDC(a,t,o,a),a}_applyPolygonOffsetView(e,t,o,a,r){const l=a.aboveGround?1:-1;let c=Math.sign(o);c===0&&(c=l);const v=l*c;if(this.parameters.shaderPolygonOffset<=0)return X(r,e);const u=ct(Math.abs(t.cosAngle),.01,1),C=1-Math.sqrt(1-u*u)/u/a.viewport[2];return q(r,e,v>0?C:1/C),r}_applyVerticalGroundOffsetView(e,t,o,a){const r=te(e),l=o.aboveGround?1:-1,c=o.computeRenderPixelSizeAtDist(r)*Kt,v=q(g,t.normal,l*c);return Te(a,e,v),a}_applyCenterOffsetView(e,t,o){const a=this.parameters.centerOffsetUnits!=="screen";return o!==e&&X(o,e),a&&(o[0]+=t[0],o[1]+=t[1],t[2]&&(ve(W,o),vt(o,o,q(W,W,t[2])))),o}_applyCenterOffsetNDC(e,t,o,a){const r=this.parameters.centerOffsetUnits!=="screen";return a!==e&&X(a,e),r||(a[0]+=t[0]/o.fullWidth*2,a[1]+=t[1]/o.fullHeight*2),a}_applyPolygonOffsetNDC(e,t,o,a){const r=this.parameters.shaderPolygonOffset;if(e!==a&&X(a,e),r){const l=o.aboveGround?1:-1,c=l*Math.sign(t[3]);a[2]-=(c||l)*r}return a}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:o}=this.parameters,a=e[3]>=G||t>=G&&o[3]>=G;return this._visible&&a}createGLMaterial(e){return new $o(e)}calculateRelativeScreenBounds(e,t,o=dt()){return yo(this.parameters,e,t,o),o[2]=o[0]+e[0],o[3]=o[1]+e[1],o}};class $o extends ro{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Ao,e)}}function yo(i,e,t,o){o[0]=i.anchorPosition[0]*-e[0]+i.screenOffset[0]*t,o[1]=i.anchorPosition[1]*-e[1]+i.screenOffset[1]*t}function Se(i,e,t,o){return xo(e)&&(e=qe(zo,e)),St(o.normal,i,e),k(o.normal,o.normal,t.viewInverseTransposeMatrix),o.cosAngle=xt(et,Ro),o}function Eo(i){const e=i[0],t=i[1],o=i[2],a=i[3],r=i[4],l=i[5],c=i[6],v=i[7],u=i[8],C=1/Math.sqrt(e*e+t*t+o*o),f=1/Math.sqrt(a*a+r*r+l*l),p=1/Math.sqrt(c*c+v*v+u*u);return i[0]=e*C,i[1]=t*C,i[2]=o*C,i[3]=a*f,i[4]=r*f,i[5]=l*f,i[6]=c*p,i[7]=v*p,i[8]=u*p,i}function xe(i,e,t,o,a,r,l,c,v){let u=e-a-o[0]*v[0],C=u+o[0]+2*a,f=t-a-o[1]*v[1],p=f+o[1]+2*a;const b=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&b!=null&&(u+=o[0]*b[0],f+=o[1]*b[1],C-=o[0]*(1-b[2]),p-=o[1]*(1-b[3]),u-=r,C+=r,f-=r,p+=r),Pe(Ue,e,t),mt(Q,i,Ue,ft(l)),Q[0]>u&&Q[0]<C&&Q[1]>f&&Q[1]<p}const Y=new Oo,g=B(),W=B(),m=fe(),et=B(),ue=B(),Q=Ae(),Ue=Ae(),de=Ge(),zo=Ge(),tt=ht(),ne=fe(),O=B(),me=B(),Oe=fe(),ee={normal:et,cosAngle:0},ot=1,Fo=2,y=Xe(0,0),N=6,Ro=ut(0,0,1);class Io extends so{constructor(){super(...arguments),this.renderOccluded=Zt.Occlude,this.isDecoration=!1,this.color=Ee(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=Xe(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=Ee(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=fe(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}}const it=Yt().vec3f(n.POSITION).vec3f(n.NORMAL).vec2i16(n.UVI).vec4u8(n.COLOR).vec2f(n.SIZE).f32(n.ROTATION).vec4f(n.CENTEROFFSETANDDISTANCE).vec4f(n.FEATUREATTRIBUTE),_o=it.clone().vec4u8(n.OLIDCOLOR);class wo{constructor(){this.vertexBufferLayout=to()?_o:it}elementCount(e){return e.get(n.POSITION).indices.length*N}write(e,t,o,a,r,l){const{position:c,normal:v,uvi:u,color:C,size:f,rotation:p,centerOffsetAndDistance:b,featureAttribute:F}=r;Bt(o.get(n.POSITION),e,c,l,N),Ut(o.get(n.NORMAL),t,v,l,N);const R=o.get(n.UVI)?.data;let x=0,S=0,A=-1-oe,z=-1-oe;R&&R.length>=4&&(x=R[0],S=R[1],A=-1-R[2],z=-1-R[3]);let I=o.get(n.POSITION).indices.length,h=l;for(let s=0;s<I;++s)u.set(h,0,x),u.set(h,1,S),h++,u.set(h,0,A),u.set(h,1,S),h++,u.set(h,0,A),u.set(h,1,z),h++,u.set(h,0,A),u.set(h,1,z),h++,u.set(h,0,x),u.set(h,1,z),h++,u.set(h,0,x),u.set(h,1,S),h++;Vt(o.get(n.COLOR),4,C,l,N);const{data:L,indices:D}=o.get(n.SIZE);I=D.length,h=l;for(let s=0;s<I;++s){const j=L[2*D[s]],_=L[2*D[s]+1];for(let w=0;w<N;++w)f.set(h,0,j),f.set(h,1,_),h++}if(Ht(o.get(n.ROTATION),p,l,N),o.get(n.CENTEROFFSETANDDISTANCE)?we(o.get(n.CENTEROFFSETANDDISTANCE),b,l,N):De(b,l,I*N),o.get(n.FEATUREATTRIBUTE)?we(o.get(n.FEATUREATTRIBUTE),F,l,N):De(F,l,I*N),a!=null){const s=o.get(n.POSITION)?.indices;if(s){const j=s.length,_=r.getField(n.OLIDCOLOR,Ct);qt(a,_,j,l,N)}}return{numVerticesPerItem:N,numItems:I}}intersect(e,t,o,a,r,l,c){const{options:{selectionMode:v,hud:u,excludeLabels:C},point:f,camera:p}=a;if(!v||!u||C&&t.isLabel||!f)return;const b=this.vertexBufferLayout.createView(e),F=b.getField(n.POSITION,ze),R=b.getField(n.NORMAL,ze),x=b.getField(n.ROTATION,bt),S=b.getField(n.SIZE,Pt),A=b.getField(n.FEATUREATTRIBUTE,Fe),z=b.getField(n.CENTEROFFSETANDDISTANCE,Fe),I=t.centerOffsetUnits==="screen",h=J(t);if(F==null||R==null||x==null||S==null||z==null||p==null)return;const L=A==null?null:A.getVec(0,Oe),{scaleX:D,scaleY:s}=Ce(L,t,p.pixelRatio),j=F.count/N;for(let _=0;_<j;_++){const w=_*N;if(F.getVec(w,g),o!=null&&Te(g,g,o),k(g,g,p.viewMatrix),z.getVec(w,ne),le(O,ne[0],ne[1],ne[2]),!I&&(g[0]+=O[0],g[1]+=O[1],O[2]!==0)){const U=O[2];ve(O,g),We(g,g,q(O,O,U))}if(R.getVec(w,W),Se(W,de,p,ee),be(t,g,ee,p,Y),p.applyProjection(g,m),m[0]>-1){I&&(O[0]||O[1])&&(m[0]+=O[0]*p.pixelRatio,O[1]!==0&&(m[1]+=ke(O[1],Y.factorAlignment)*p.pixelRatio),p.unapplyProjection(m,g)),m[0]+=t.screenOffset[0]*p.pixelRatio,m[1]+=t.screenOffset[1]*p.pixelRatio,m[0]=Math.floor(m[0]),m[1]=Math.floor(m[1]),S.getVec(w,y),Ye(y,Y.factor,y);const U=ot*p.pixelRatio;let ie=0;t.textureIsSignedDistanceField&&(ie=Math.min(t.outlineSize,.5*y[0])*p.pixelRatio/2),y[0]*=D,y[1]*=s;const ae=x.get(w),pe=t.rotation+ae;if(xe(f,m[0],m[1],y,U,ie,pe,t,h)){const se=a.ray;if(k(ue,g,He(tt,p.viewMatrix)),m[0]=f[0],m[1]=f[1],p.unprojectFromRenderScreen(m,g)){const V=B();X(V,se.direction);const H=1/te(V);q(V,V,H),c(Ze(se.origin,g)*H,V,_,ue)}}}}}}function Ce(i,e,t){return i==null||e.vvSize==null?{scaleX:t,scaleY:t}:(Mt(me,e,i),{scaleX:me[0]*t,scaleY:me[1]*t})}function be(i,e,t,o,a){if(!i.verticalOffset?.screenLength)return i.screenSizePerspective||i.screenSizePerspectiveAlignment?Ve(i,a,te(e),t.cosAngle):(a.factor.scale=1,a.factorAlignment.scale=1),e;const r=te(e),l=i.screenSizePerspectiveAlignment??i.screenSizePerspective,c=kt(o,r,i.verticalOffset,t.cosAngle,l);return Ve(i,a,r,t.cosAngle),q(t.normal,t.normal,c),Te(e,e,t.normal)}function Ve(i,e,t,o){i.screenSizePerspective!=null?je(o,t,i.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),i.screenSizePerspectiveAlignment!=null?je(o,t,i.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}const Do=Object.freeze(Object.defineProperty({__proto__:null,build:Ke,calculateAnchorPosition:J,fullUV:oe},Symbol.toStringTag,{value:"Module"}));export{ni as c,mo as o,Oo as t,li as u};
