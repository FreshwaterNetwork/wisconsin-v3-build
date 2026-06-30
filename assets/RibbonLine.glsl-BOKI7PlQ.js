import{aQ as Ye,ke as Ze,aj as C,T as Lt,bu as ti,ch as ii,Y as ri,tt as si,hK as Ne,k3 as st,a$ as qe,sP as ai,d0 as ni,g4 as oi,fw as li,j5 as at,bH as ci,I as _,mJ as di,aY as pi,lH as hi,_ as ui,a3 as Me,mR as le,i4 as fi,a1 as mi}from"./index-BfVS1IZv.js";import{e as Pe,r as vi}from"./mat4f64-q_b6UJoq.js";import{m as gi}from"./computeTranslationToOriginAndRotation-BgMkpgIW.js";import{t as Si}from"./dehydratedFeatureUtils-1rrRm6hF.js";import{t as _i,a as Ae}from"./Intersector-CHiTWa79.js";import{e as d,E as Ti}from"./VertexAttribute-BfkzOMLV.js";import{u as Ei}from"./hydratedFeatures-Bj3xGVvk.js";import{I as yi,E as J,p as et,o as Y,u as Ie,H as bi,s as Q,c as ve,P as nt,g as je,r as Oi}from"./vec32-DCEPt2hu.js";import{t as Ai}from"./orientedBoundingBox-CVH3I5Dn.js";import{ay as Ri,az as xi,e as Ci,i as $t,al as Pt,s as q,aA as ot,I as Di,d as Li,w as tt,J as $i,k as Xe,a1 as Pi,N as Ii,a9 as wi,f as Ni,u as zi,o as Ui,K as Fi,aa as Mi,a8 as ji,j as ge,T as Wi,U as Vi,aB as Bi,ai as lt,aj as ki,ak as ct,ad as Re,af as Hi,ag as Gi,ah as Ji,ae as Yi,aC as Zi,aD as dt,aE as qi,aF as Xi,aG as pt,A as G,aH as Qi,l as Ki,aI as ht,p as er,n as tr}from"./Texture-Th5JagZi.js";import{U as ut,E as ir}from"./sphere-BDHJ-Of8.js";import{m as rr}from"./mathUtils-DrwzUBSu.js";import{t as sr,B as xe,g as We,c as ft}from"./renderState-D5uZEltT.js";import{s as ar,c as nr,t as or}from"./BufferView-ZIDOBHFf.js";import{b as lr}from"./Octree-FjIZKqJ9.js";import{r as cr}from"./vec2-Db98L5NK.js";import{j as Ce}from"./frustum-CSpPEiTr.js";import{M as dr,h as Ve,v as It,B as pr}from"./lineSegment-C1yCkuAi.js";import{p as De,M as ze,V as k,O as mt}from"./plane-JfrlruLZ.js";import{O as hr}from"./InterleavedLayout-DYEY2NPU.js";import{n as wt,u as me,i as ur,S as fr,s as vt,e as mr}from"./ShaderOutput-Bdd80V3g.js";import{d as ue,e as it,t as vr,a as Nt}from"./Matrix4BindUniform-nJ2bUVpz.js";import{c as zt,e as gt,n as gr,o as oe}from"./verticalOffsetUtils-D16--bMJ.js";import{M as Ut,P as Ft,R as St}from"./enums-YGqMJDyZ.js";import{n as c,t as Sr}from"./glsl-Cj7KC756.js";import"./BindType-BBwFZqyN.js";import{o as _r}from"./floatRGBA-ewJX3tsb.js";import{a as Mt,S as jt}from"./Texture-C4jbNVZ_.js";import{i as T}from"./ShaderTechniqueConfiguration-Cplc9kKb.js";import"./vec2f64-rIxtbMRN.js";import{i as Tr}from"./ShaderBuilder-BFC91w_r.js";import{t as Er}from"./Float4DrawUniform-D2Y1AfMe.js";import{k as yr}from"./sdfPrimitives-B89DnMOC.js";function Hs(i,e,t,r,s,a,o,n,l,p,m){const S=Lr[m.mode];let u,f,v=0;if(Ye(i,e,t,r,l.spatialReference,s,n))return S?.requiresAlignment(m)?(v=S.applyElevationAlignmentBuffer(r,s,a,o,n,l,p,m),u=a,f=o):(u=r,f=s),Ye(u,l.spatialReference,f,a,p.spatialReference,o,n)?v:void 0}function Wt(i,e,t,r,s){const a=(Si(i)?i.z:_i(i)?i.array[i.offset+2]:i[2])||0;switch(t.mode){case"on-the-ground":{const o=Ae(e,i,"ground")??0;return s.verticalDistanceToGround=0,s.sampledElevation=o,void(s.z=o)}case"relative-to-ground":{const o=Ae(e,i,"ground")??0,n=t.geometryZWithOffset(a,r);return s.verticalDistanceToGround=n,s.sampledElevation=o,void(s.z=n+o)}case"relative-to-scene":{const o=Ae(e,i,"scene")??0,n=t.geometryZWithOffset(a,r);return s.verticalDistanceToGround=n,s.sampledElevation=o,void(s.z=n+o)}case"absolute-height":{const o=t.geometryZWithOffset(a,r),n=Ae(e,i,"ground")??0;return s.verticalDistanceToGround=o-n,s.sampledElevation=n,void(s.z=o)}default:return void(s.z=0)}}function Gs(i,e,t,r){return Wt(i,e,t,r,ce),ce.z}function Js(i,e,t){return e==="on-the-ground"&&t==="on-the-ground"?i.staysOnTheGround:e===t||e!=="on-the-ground"&&t!=="on-the-ground"?e==null||t==null?i.definedChanged:Qe.UPDATE:i.onTheGroundChanged}function Ys(i){return i==="relative-to-ground"||i==="relative-to-scene"}function Zs(i){return i!=="absolute-height"}function qs(i,e,t,r,s){Wt(e,t,s,r,ce),br(i,ce.verticalDistanceToGround);const a=ce.sampledElevation,o=Ze($r,i.transformation);return Le[0]=e.x,Le[1]=e.y,Le[2]=ce.z,gi(e.spatialReference,Le,o,r.spatialReference)?i.transformation=o:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function br(i,e){for(let t=0;t<i.geometries.length;++t){const r=i.geometries[t].getMutableAttribute(d.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==e&&(r.data[3]=e,i.geometryVertexAttributeUpdated(i.geometries[t],d.CENTEROFFSETANDDISTANCE))}}function Or(i,e,t,r,s,a){let o=0;const n=a.spatialReference;e*=3,r*=3;for(let l=0;l<s;++l){const p=i[e],m=i[e+1],S=i[e+2],u=a.getElevation(p,m,S,n,"ground")??0;o+=u,t[r]=p,t[r+1]=m,t[r+2]=u,e+=3,r+=3}return o/s}function Ar(i,e,t,r,s,a,o,n){let l=0;const p=n.calculateOffsetRenderUnits(o),m=n.featureExpressionInfoContext,S=a.spatialReference;e*=3,r*=3;for(let u=0;u<s;++u){const f=i[e],v=i[e+1],O=i[e+2],E=a.getElevation(f,v,O,S,"ground")??0;l+=E,t[r]=f,t[r+1]=v,t[r+2]=m==null?O+E+p:E+p,e+=3,r+=3}return l/s}function Rr(i,e,t,r,s,a,o,n){let l=0;const p=n.calculateOffsetRenderUnits(o),m=n.featureExpressionInfoContext,S=a.spatialReference;e*=3,r*=3;for(let u=0;u<s;++u){const f=i[e],v=i[e+1],O=i[e+2],E=a.getElevation(f,v,O,S,"scene")??0;l+=E,t[r]=f,t[r+1]=v,t[r+2]=m==null?O+E+p:E+p,e+=3,r+=3}return l/s}function xr(i){const e=i.meterUnitOffset,t=i.featureExpressionInfoContext;return e!==0||t!=null}function Cr(i,e,t,r,s,a,o,n){const l=n.calculateOffsetRenderUnits(o),p=n.featureExpressionInfoContext;e*=3,r*=3;for(let m=0;m<s;++m){const S=i[e],u=i[e+1],f=i[e+2];t[r]=S,t[r+1]=u,t[r+2]=p==null?f+l:l,e+=3,r+=3}return 0}class Dr{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var Qe;(function(i){i[i.NONE=0]="NONE",i[i.UPDATE=1]="UPDATE",i[i.RECREATE=2]="RECREATE"})(Qe||(Qe={}));const Lr={"absolute-height":{applyElevationAlignmentBuffer:Cr,requiresAlignment:xr},"on-the-ground":{applyElevationAlignmentBuffer:Or,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Ar,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:Rr,requiresAlignment:()=>!0}},$r=Pe(),ce=new Dr,Le=C(),Pr=()=>Lt.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function Ir(i){return{cachedResult:i.cachedResult,arcade:i.arcade?{func:i.arcade.func,context:i.arcade.modules.arcadeUtils.createExecContext(null,{sr:i.arcade.context.spatialReference}),modules:i.arcade.modules}:null}}function Xs(i){const e=i?.expression;if(typeof e=="string"){const t=Bt(e);if(t!=null)return{cachedResult:t}}return null}async function Qs(i,e,t,r){const s=i?.expression;if(typeof s!="string")return null;const a=Bt(s);if(a!=null)return{cachedResult:a};const o=await ti();ii(t);const n=o.arcadeUtils,l=n.createSyntaxTree(s);return n.dependsOnView(l)?(r?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:n.createFunction(l),context:n.createExecContext(null,{sr:e}),modules:o}}}function wr(i,e,t){return i.arcadeUtils.createFeature(e.attributes,e.geometry,t)}function Nr(i,e){if(i!=null&&!Vt(i)){if(!e||!i.arcade)return void Pr().errorOncePerTick("Arcade support required but not provided");const t=e;t._geometry&&(t._geometry=Ei(t._geometry)),i.arcade.modules.arcadeUtils.updateExecContext(i.arcade.context,e)}}function zr(i){if(i!=null){if(Vt(i))return i.cachedResult;const e=i.arcade;let t=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof t!="number"&&(i.cachedResult=0,t=0),t}return 0}function Ks(i,e=!1){let t=i?.featureExpressionInfo;const r=t?.expression;return e||r==="0"||(t=null),t??null}const ea={cachedResult:0};function Vt(i){return i.cachedResult!=null}function Bt(i){return i==="0"?0:null}let ta=class kt{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=ri(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const r=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext!=null?r:e+r}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return r!=null&&(t+=zr(r)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=si(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,t,r){if(e==null)return void(this._featureExpressionInfoContext=null);const s=e?.arcade;s&&t!=null&&r!=null?(this._featureExpressionInfoContext=Ir(e),Nr(this._featureExpressionInfoContext,wr(s.modules,t,r))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const t=new kt;return e!=null&&t.setFromElevationInfo(e),t}};function Ur(i,e){return i==null&&(i=[]),i.push(e),i}function Fr(i,e){if(i==null)return null;const t=i.filter(r=>r!==e);return t.length===0?null:t}function ia(i,e,t,r,s){$e[0]=i.get(e,0),$e[1]=i.get(e,1),$e[2]=i.get(e,2),Ri($e,ee,3),t.set(s,0,ee[0]),r.set(s,0,ee[1]),t.set(s,1,ee[2]),r.set(s,1,ee[3]),t.set(s,2,ee[4]),r.set(s,2,ee[5])}const $e=C(),ee=new Float32Array(6);class Mr{constructor(e={}){this.id=Ne(),this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=new Ht),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){ar(this._layer==null||e==null,"Object3D can only be added to a single Layer"),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(const t of this._highlightIds)e.addHighlight(t);this._emit("geometryAdded",{object:this,geometry:e}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];if(t){for(const r of this._highlightIds)t.removeHighlight(r);this._emit("geometryRemoved",{object:this,geometry:t}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,r=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:r}),Ti(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const t of this._geometries)t.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new xi;for(const t of this._geometries)t.occludees=Ur(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=Fr(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new Ci(e);for(const r of this._geometries)r.addHighlight(t);return this._emit("highlightChanged",this),this._highlightIds.add(t),t}removeHighlight(e){this._highlightIds.delete(e);for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===sr.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return st(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=Pe()){return st(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new _t,this._validateBoundingVolume(this._bvWorldSpace,Se.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new _t,this._validateBoundingVolume(this._bvObjectSpace,Se.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,t){const r=t===Se.ObjectSpace;for(const s of this._geometries){const a=s.boundingInfo;a&&jr(a,e,r?s.transformation:this.getCombinedShaderTransformation(s))}yi(ut(e.bounds),e.min,e.max,.5);for(const s of this._geometries){const a=s.boundingInfo;if(a==null)continue;const o=r?s.transformation:this.getCombinedShaderTransformation(s),n=rr(o);J(Tt,a.center,o);const l=et(Tt,ut(e.bounds)),p=a.radius*n;e.bounds[3]=Math.max(e.bounds[3],l+p)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,t){this.layer?.events.emit(e,t)}get geometries(){return this._geometries}get transformation(){return this._transformation??vi}set transformation(e){this._transformation=Ze(this._transformation??Pe(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Ze(this._shaderTransformation??Pe(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}}class Ht{constructor(){this.min=qe(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=qe(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class _t extends Ht{constructor(){super(...arguments),this.bounds=ir()}}function jr(i,e,t){const r=i.bbMin,s=i.bbMax;if(ai(t)){const a=Y(Wr,t[12],t[13],t[14]);Ie(j,r,a),Ie(B,s,a);for(let o=0;o<3;++o)e.min[o]=Math.min(e.min[o],j[o]),e.max[o]=Math.max(e.max[o],B[o])}else if(J(j,r,t),bi(r,s))for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],j[a]),e.max[a]=Math.max(e.max[a],j[a]);else{J(B,s,t);for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],j[a],B[a]),e.max[a]=Math.max(e.max[a],j[a],B[a]);for(let a=0;a<3;++a){Q(j,r),Q(B,s),j[a]=s[a],B[a]=r[a],J(j,j,t),J(B,B,t);for(let o=0;o<3;++o)e.min[o]=Math.min(e.min[o],j[o],B[o]),e.max[o]=Math.max(e.max[o],j[o],B[o])}}}const Wr=C(),j=C(),B=C(),Tt=C();var Se;(function(i){i[i.WorldSpace=0]="WorldSpace",i[i.ObjectSpace=1]="ObjectSpace"})(Se||(Se={}));const Vr=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];var we;(function(i){i[i.ASYNC=0]="ASYNC",i[i.SYNC=1]="SYNC"})(we||(we={}));let Br=class{constructor(e,t,r=""){this.stage=e,this.apiLayerViewUid=r,this.id=Ne(),this.events=new ni,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Array,this._handles=new oi,this._objects=new Map,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??we.ASYNC,e.addLayer(this);for(const s of Vr)this._handles.add(this.events.on(s,a=>e.handleEvent(s,a)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return li(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit("layerObjectAdded",e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit("layerObjectRemoved",e),e.layer=null,this._octree!=null&&(at(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(const t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit("layerObjectsAdded",e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){const t=new Array;for(const r of e)this._objects.delete(r.id)&&t.push(r);if(t.length!==0&&(this.events.emit("layerObjectsRemoved",t),t.forEach(r=>r.layer=null),this._octree!=null)){for(let r=0;r<t.length;)at(this._objectsAdded,t[r])?(t[r]=t[t.length-1],t.length-=1):++r;this._octree.remove(t)}}sync(){this.updatePolicy!==we.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new lr(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=ci(this._octree),this._objectsAdded.length=0}get test(){}};var Et,yt,bt;(function(i){i[i.RasterImage=0]="RasterImage",i[i.Features=1]="Features"})(Et||(Et={})),function(i){i[i.MapLayer=0]="MapLayer",i[i.ViewLayer=1]="ViewLayer",i[i.Outline=2]="Outline",i[i.SnappingHint=3]="SnappingHint"}(yt||(yt={})),function(i){i[i.WithRasterImage=0]="WithRasterImage",i[i.WithoutRasterImage=1]="WithoutRasterImage"}(bt||(bt={}));let kr=class{constructor(e,t){this.vec3=e,this.id=t}};function Ot(i,e,t,r){return new kr(qe(i,e,t),r)}var se,Te;(function(i){i[i.Draped=0]="Draped",i[i.Screen=1]="Screen",i[i.World=2]="World",i[i.COUNT=3]="COUNT"})(se||(se={})),function(i){i[i.Center=0]="Center",i[i.Tip=1]="Tip",i[i.COUNT=2]="COUNT"}(Te||(Te={}));let W=class extends zt{constructor(){super(...arguments),this.space=se.Screen,this.anchor=Te.Center,this.occluder=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=$t.None,this.emissionSource=Pt.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1,this.overlayEnabled=!1,this.snowCover=!1}get draped(){return this.space===se.Draped}};_([T({count:se.COUNT})],W.prototype,"space",void 0),_([T({count:Te.COUNT})],W.prototype,"anchor",void 0),_([T()],W.prototype,"occluder",void 0),_([T()],W.prototype,"writeDepth",void 0),_([T()],W.prototype,"hideOnShortSegments",void 0),_([T()],W.prototype,"hasCap",void 0),_([T()],W.prototype,"hasTip",void 0),_([T()],W.prototype,"vvSize",void 0),_([T()],W.prototype,"vvColor",void 0),_([T()],W.prototype,"vvOpacity",void 0),_([T()],W.prototype,"hasOccludees",void 0),_([T()],W.prototype,"terrainDepthTest",void 0),_([T()],W.prototype,"cullAboveTerrain",void 0);const At=8;function Hr(i,e){const{vertex:t,attributes:r}=i;t.uniforms.add(new q("intrinsicWidth",s=>s.width)),e.vvSize?(r.add(d.SIZEFEATUREATTRIBUTE,"float"),t.uniforms.add(new ue("vvSizeMinSize",s=>s.vvSize.minSize),new ue("vvSizeMaxSize",s=>s.vvSize.maxSize),new ue("vvSizeOffset",s=>s.vvSize.offset),new ue("vvSizeFactor",s=>s.vvSize.factor),new ue("vvSizeFallback",s=>s.vvSize.fallback)),t.code.add(c`float getSize() {
if (isnan(sizeFeatureAttribute)) {
return vvSizeFallback.x;
}
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(r.add(d.SIZE,"float"),t.code.add(c`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(r.add(d.OPACITYFEATUREATTRIBUTE,"float"),t.constants.add("vvOpacityNumber","int",8),t.uniforms.add(new ot("vvOpacityValues",s=>s.vvOpacity.values,At),new ot("vvOpacityOpacities",s=>s.vvOpacity.opacityValues,At),new q("vvOpacityFallback",s=>s.vvOpacity.fallback)),t.code.add(c`float interpolateOpacity(float value){
if (isnan(value)) {
return vvOpacityFallback;
}
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):t.code.add(c`vec4 applyOpacity( vec4 color ){
return color;
}`),e.vvColor?(i.include(Di,e),r.add(d.COLORFEATUREATTRIBUTE,"float"),t.code.add(c`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(r.add(d.COLOR,"vec4"),t.code.add(c`vec4 getColor(){
return applyOpacity(color);
}`))}class Gr{constructor(e,t,r){this._createTexture=e,this._parametersKey=t,this._repository=new Map,this._orphanCache=r.newCache(`procedural-texture-repository:${Ne()}`,s=>s.dispose())}destroy(){for(const{texture:e}of this._repository.values())e.dispose();this._repository.clear(),this._orphanCache.destroy()}swap(e,t=null){const r=this._acquire(e);return this.release(t),r}release(e){if(e==null)return;const t=this._parametersKey(e),r=this._repository.get(t);if(r&&(r.refCount--,r.refCount===0)){this._repository.delete(t);const{texture:s}=r;this._orphanCache.put(t,s)}}_acquire(e){if(e==null)return null;const t=this._parametersKey(e),r=this._repository.get(t);if(r)return r.refCount++,r.texture;const s=this._orphanCache.pop(t)??this._createTexture(e),a=new Jr(s);return this._repository.set(t,a),s}}class Jr{constructor(e){this.texture=e,this.refCount=1}}function na(i,e){return new Gr(t=>{const{encodedData:r,textureSize:s}=Yr(t),a=new Mt;return a.internalFormat=Ut.RGBA,a.width=s,a.height=1,a.wrapMode=Ft.REPEAT,new jt(i,a,r)},t=>`${t.pattern.join(",")}-r${t.pixelRatio}`,e)}function Yr(i){const e=rt(i),t=1/i.pixelRatio,r=Gt(i),s=Jt(i),a=(Math.floor(.5*(s-1))+.5)*t,o=[];let n=1;for(const u of e){for(let f=0;f<u;f++){const v=n*(Math.min(f,u-1-f)+.5)*t/a*.5+.5;o.push(v)}n=-n}const l=Math.round(e[0]/2),p=[...o.slice(l),...o.slice(0,l)],m=new Uint8Array(4*r);let S=0;for(const u of p)_r(u,m,S),S+=4;return{encodedData:m,textureSize:r}}function rt(i){return i.pattern.map(e=>Math.round(e*i.pixelRatio))}function Gt(i){if(i==null)return 1;const e=rt(i);return Math.floor(e.reduce((t,r)=>t+r))}function Jt(i){return rt(i).reduce((e,t)=>Math.max(e,t))}function Zr(i){return i==null?di:i.length===4?i:pi(qr,i[0],i[1],i[2],1)}const qr=hi();function Xr(i,e){if(!e.stippleEnabled)return void i.fragment.code.add(c`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const t=!(e.draped&&e.stipplePreferContinuous),{vertex:r,fragment:s}=i;s.include(Er),e.draped||(Li(r,e),r.uniforms.add(new it("worldToScreenPerDistanceRatio",({camera:a})=>1/a.perScreenPixelRatio)).code.add(c`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),i.varyings.add("vStippleDistance","float"),i.varyings.add("vStippleDistanceLimits","vec2"),i.varyings.add("vStipplePatternStretch","float"),r.code.add(c`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${c.float(Kr)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(c`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(c`
    if (segmentLengthPseudoScreen >= ${t?"patternLength":"1e4"}) {
  `),tt(r),r.code.add(c`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),s.uniforms.add(new $i("stipplePatternTexture",a=>a.stippleTexture),new q("stipplePatternSDFNormalizer",a=>Qr(a.stipplePattern)),new q("stipplePatternPixelSizeInv",a=>1/Yt(a))),e.stippleOffColorEnabled&&s.uniforms.add(new Xe("stippleOffColor",a=>Zr(a.stippleOffColor))),s.code.add(c`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgbaTofloat(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),s.code.add(c`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${Sr(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${e.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function Qr(i){return i?(Math.floor(.5*(Jt(i)-1))+.5)/i.pixelRatio:1}function Yt(i){const e=i.stipplePattern;return e?Gt(i.stipplePattern)/e.pixelRatio:1}const Kr=.4,_e=64,Zt=_e/2,qt=Zt/5,es=_e/qt,oa=.25;function la(i,e){const t=yr(i,_e,Zt,qt),r=new Mt;return r.internalFormat=Ut.RGBA,r.width=_e,r.height=_e,r.wrapMode=Ft.CLAMP_TO_EDGE,new jt(e,r,t)}function ts(i,e){const t=i.vertex;tt(t),t.uniforms.get("markerScale")==null&&t.constants.add("markerScale","float",1),t.constants.add("markerSizePerLineWidth","float",es).code.add(c`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===se.World&&(t.constants.add("maxSegmentLengthFraction","float",.45),t.uniforms.add(new it("perRenderPixelRatio",r=>r.camera.perRenderPixelRatio)),t.code.add(c`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var ae;(function(i){i[i.BUTT=0]="BUTT",i[i.SQUARE=1]="SQUARE",i[i.ROUND=2]="ROUND",i[i.COUNT=3]="COUNT"})(ae||(ae={}));class R extends zt{constructor(){super(...arguments),this.capType=ae.BUTT,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=$t.None,this.emissionSource=Pt.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}}_([T({count:ae.COUNT})],R.prototype,"capType",void 0),_([T()],R.prototype,"hasPolygonOffset",void 0),_([T()],R.prototype,"writeDepth",void 0),_([T()],R.prototype,"draped",void 0),_([T()],R.prototype,"stippleEnabled",void 0),_([T()],R.prototype,"stippleOffColorEnabled",void 0),_([T()],R.prototype,"stipplePreferContinuous",void 0),_([T()],R.prototype,"roundJoins",void 0),_([T()],R.prototype,"applyMarkerOffset",void 0),_([T()],R.prototype,"vvSize",void 0),_([T()],R.prototype,"vvColor",void 0),_([T()],R.prototype,"vvOpacity",void 0),_([T()],R.prototype,"falloffEnabled",void 0),_([T()],R.prototype,"innerColorEnabled",void 0),_([T()],R.prototype,"hasOccludees",void 0),_([T()],R.prototype,"occluder",void 0),_([T()],R.prototype,"terrainDepthTest",void 0),_([T()],R.prototype,"cullAboveTerrain",void 0),_([T()],R.prototype,"wireframe",void 0),_([T()],R.prototype,"discardInvisibleFragments",void 0),_([T()],R.prototype,"objectAndLayerIdColorInstanced",void 0);const Ee=1;function Xt(i){const e=new Tr,{attributes:t,varyings:r,vertex:s,fragment:a}=e,{applyMarkerOffset:o,draped:n,output:l,capType:p,stippleEnabled:m,falloffEnabled:S,roundJoins:u,wireframe:f,innerColorEnabled:v}=i;a.include(Pi),e.include(Hr,i),e.include(Xr,i),e.include(Ii,i),e.include(wi,i);const O=o&&!n;O&&(s.uniforms.add(new q("markerScale",h=>h.markerScale)),e.include(ts,{space:se.World})),Ni(s,i),s.uniforms.add(new vr("inverseProjectionMatrix",h=>h.camera.inverseProjectionMatrix),new zi("nearFar",h=>h.camera.nearFar),new q("miterLimit",h=>h.join!=="miter"?0:h.miterLimit),new Ui("viewport",h=>h.camera.fullViewport)),s.constants.add("LARGE_HALF_FLOAT","float",65500),t.add(d.POSITION,"vec3"),t.add(d.PREVIOUSDELTA,"vec4"),t.add(d.NEXTDELTA,"vec4"),t.add(d.LINEPARAMETERS,"vec2"),t.add(d.U0,"float"),r.add("vColor","vec4"),r.add("vpos","vec3",{invariant:!0}),r.add("vLineDistance","float"),r.add("vLineWidth","float");const E=m;E&&r.add("vLineSizeInv","float");const b=p===ae.ROUND,M=m&&b,g=S||M;g&&r.add("vLineDistanceNorm","float"),b&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),s.code.add(c`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),s.code.add(c`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),s.code.add(c`void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
float vnp = nearFar[0] * 0.99;
if(pos.z > -nearFar[0]) {
if (!isStartVertex) {
if(prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if(next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
forwardViewPosDepth(pos.xyz);
pos = projectAndScale(pos);
next = projectAndScale(next);
prev = projectAndScale(prev);
}`),tt(s),s.constants.add("aaWidth","float",m?0:1).main.add(c`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y)-3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(lineParameters.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${E?c`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),O&&s.main.add(c`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),s.main.add(c`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(m||b)&&s.main.add(c`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${b?c`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),s.main.add(c`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
float subdivisionFactor = lineParameters.x;
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),u?s.main.add(c`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${m?c`min(1.0, subdivisionFactor * ${c.float((Ee+2)/(Ee+1))})`:c`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):s.main.add(c`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const D=p!==ae.BUTT;return s.main.add(c`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${D?c`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),s.main.add(c`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(lineParameters.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${g?c`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),b&&s.main.add(c`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),m&&(n?s.uniforms.add(new it("worldToScreenRatio",h=>1/h.screenToPCSRatio)):s.main.add(c`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),s.main.add(c`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),n?s.main.add(c`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):s.main.add(c`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),s.uniforms.add(new q("stipplePatternPixelSize",h=>Yt(h))),s.main.add(c`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),s.main.add(c`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${f&&!n?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.fragment.include(Fi,i),e.include(Mi,i),a.include(ji),a.main.add(c`discardBySlice(vpos);
discardByTerrainDepth();`),f?a.main.add(c`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(b&&a.main.add(c`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${c.float(ge)}) {
          discard;
        }
      `),M?a.main.add(c`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${c.float(ge)}, stippleCoverage);
      `):a.main.add(c`float stippleAlpha = getStippleAlpha();`),l!==wt.ObjectAndLayerIdColor&&a.main.add(c`discardByStippleAlpha(stippleAlpha, ${c.float(ge)});`),a.uniforms.add(new Xe("intrinsicColor",h=>h.color)),a.main.add(c`vec4 color = intrinsicColor * vColor;`),v&&(a.uniforms.add(new Xe("innerColor",h=>h.innerColor??h.color),new q("innerWidth",(h,I)=>h.innerWidth*I.camera.pixelRatio)),a.main.add(c`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),a.main.add(c`vec4 finalColor = blendStipple(color, stippleAlpha);`),S&&(a.uniforms.add(new q("falloff",h=>h.falloff)),a.main.add(c`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),m||a.main.add(c`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),a.main.add(c`outputColorHighlightOID(finalColor, vpos, finalColor.rgb);`),e}const is=Object.freeze(Object.defineProperty({__proto__:null,build:Xt,ribbonlineNumRoundJoinSubdivisions:Ee},Symbol.toStringTag,{value:"Module"}));class rs extends Wi{constructor(e,t){super(e,t,new Vi(is,()=>ui(()=>Promise.resolve().then(()=>ps),void 0)),Qt),this.primitiveType=t.wireframe?St.LINES:St.TRIANGLE_STRIP}_makePipelineState(e,t){const{oitPass:r,output:s,hasOccludees:a,hasPolygonOffset:o}=e,n=r===gt.NONE,l=r===gt.FrontFace;return xe({blending:me(s)?Ji(r):null,depthTest:{func:Gi(r)},depthWrite:Hi(e),drawBuffers:Re(s,Yi(r,s)),colorWrite:We,stencilWrite:a?ct:null,stencilTest:a?t?lt:ki:null,polygonOffset:n||l?o?Rt:null:Bi})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?Rt:null,{output:r,hasOccludees:s}=e;this._occluderPipelineTransparent=xe({blending:ft,polygonOffset:t,depthTest:dt,depthWrite:null,colorWrite:We,stencilWrite:null,stencilTest:s?Zi:null,drawBuffers:Re(r)}),this._occluderPipelineOpaque=xe({blending:ft,polygonOffset:t,depthTest:s?dt:pt,depthWrite:null,colorWrite:We,stencilWrite:s?Xi:null,stencilTest:s?qi:null,drawBuffers:Re(r)}),this._occluderPipelineMaskWrite=xe({blending:null,polygonOffset:t,depthTest:pt,depthWrite:null,colorWrite:null,stencilWrite:s?ct:null,stencilTest:s?lt:null,drawBuffers:Re(r)})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(e)return this._occludeePipeline;switch(t){case G.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case G.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const Rt={factor:0,units:-4},Qt=new Map([[d.POSITION,0],[d.PREVIOUSDELTA,1],[d.NEXTDELTA,2],[d.U0,3],[d.LINEPARAMETERS,4],[d.COLOR,5],[d.COLORFEATUREATTRIBUTE,5],[d.SIZE,6],[d.SIZEFEATUREATTRIBUTE,6],[d.OPACITYFEATUREATTRIBUTE,7],[d.OLIDCOLOR,8]]);var F;(function(i){i[i.LEFT_JOIN_START=-2]="LEFT_JOIN_START",i[i.LEFT_JOIN_END=-1]="LEFT_JOIN_END",i[i.LEFT_CAP_START=-4]="LEFT_CAP_START",i[i.LEFT_CAP_END=-5]="LEFT_CAP_END",i[i.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",i[i.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",i[i.RIGHT_CAP_START=4]="RIGHT_CAP_START",i[i.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(F||(F={}));class ss extends gr{constructor(e){super(e,ns),this._configuration=new R,this.vertexAttributeLocations=Qt,this.produces=new Map([[G.OPAQUE_MATERIAL,t=>ur(t)||me(t)&&this.parameters.renderOccluded===oe.OccludeAndTransparentStencil],[G.OPAQUE_MATERIAL_WITHOUT_NORMALS,t=>fr(t)],[G.OCCLUDER_MATERIAL,t=>vt(t)&&this.parameters.renderOccluded===oe.OccludeAndTransparentStencil],[G.TRANSPARENT_OCCLUDER_MATERIAL,t=>vt(t)&&this.parameters.renderOccluded===oe.OccludeAndTransparentStencil],[G.TRANSPARENT_MATERIAL,t=>me(t)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==oe.OccludeAndTransparentStencil],[G.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,t=>me(t)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==oe.OccludeAndTransparentStencil],[G.DRAPED_MATERIAL,t=>mr(t)]])}getConfiguration(e,t){super.getConfiguration(e,t,this._configuration),this._configuration.oitPass=t.oitPass,this._configuration.draped=t.slot===G.DRAPED_MATERIAL;const r=this.parameters.stipplePattern!=null&&e!==wt.Highlight;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&ls(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===oe.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=t.terrainDepthTest&&me(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){return this.parameters.color[3]>=ge||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>ge}intersectDraped({attributes:e,screenToWorldRatio:t},r,s,a,o){if(!r.options.selectionMode)return;const n=e.get(d.SIZE);let l=this.parameters.width;if(this.parameters.vvSize){const E=e.get(d.SIZEFEATUREATTRIBUTE).data[0];Number.isNaN(E)?l*=this.parameters.vvSize.fallback[0]:l*=Me(this.parameters.vvSize.offset[0]+E*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else n&&(l*=n.data[0]);const p=s[0],m=s[1],S=(l/2+4)*t;let u=Number.MAX_VALUE,f=0;const v=e.get(d.POSITION).data,O=Ke(this.parameters,e)?v.length-2:v.length-5;for(let E=0;E<O;E+=3){const b=v[E],M=v[E+1],g=(E+3)%v.length,D=p-b,h=m-M,I=v[g]-b,A=v[g+1]-M,ne=Me((I*D+A*h)/(I*I+A*A),0,1),X=I*ne-D,de=A*ne-h,w=X*X+de*de;w<u&&(u=w,f=E/3)}u<S*S&&a(o.distance,o.normal,f)}intersect(e,t,r,s,a,o){const{options:n,camera:l,rayBegin:p,rayEnd:m}=r;if(!n.selectionMode||!e.visible||!l)return;if(!nr(t))return void Lt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const S=e.attributes,u=S.get(d.POSITION).data;let f=this.parameters.width;if(this.parameters.vvSize){const g=S.get(d.SIZEFEATUREATTRIBUTE).data[0];Number.isNaN(g)||(f*=Me(this.parameters.vvSize.offset[0]+g*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else S.has(d.SIZE)&&(f*=S.get(d.SIZE).data[0]);const v=cs;cr(v,r.point);const O=f*l.pixelRatio/2+4*l.pixelRatio;Y(fe[0],v[0]-O,v[1]+O,0),Y(fe[1],v[0]+O,v[1]+O,0),Y(fe[2],v[0]+O,v[1]-O,0),Y(fe[3],v[0]-O,v[1]-O,0);for(let g=0;g<4;g++)if(!l.unprojectFromRenderScreen(fe[g],Z[g]))return;De(l.eye,Z[0],Z[1],ke),De(l.eye,Z[1],Z[2],He),De(l.eye,Z[2],Z[3],Ge),De(l.eye,Z[3],Z[0],Je);let E=Number.MAX_VALUE,b=0;const M=Ke(this.parameters,S)?u.length-2:u.length-5;for(let g=0;g<M;g+=3){N[0]=u[g]+t[12],N[1]=u[g+1]+t[13],N[2]=u[g+2]+t[14];const D=(g+3)%u.length;if(z[0]=u[D]+t[12],z[1]=u[D+1]+t[13],z[2]=u[D+2]+t[14],k(ke,N)<0&&k(ke,z)<0||k(He,N)<0&&k(He,z)<0||k(Ge,N)<0&&k(Ge,z)<0||k(Je,N)<0&&k(Je,z)<0)continue;if(l.projectToRenderScreen(N,ie),l.projectToRenderScreen(z,re),ie[2]<0&&re[2]>0){ve(H,N,z);const I=l.frustum,A=-k(I[Ce.NEAR],N)/nt(H,mt(I[Ce.NEAR]));je(H,H,A),Ie(N,N,H),l.projectToRenderScreen(N,ie)}else if(ie[2]>0&&re[2]<0){ve(H,z,N);const I=l.frustum,A=-k(I[Ce.NEAR],z)/nt(H,mt(I[Ce.NEAR]));je(H,H,A),Ie(z,z,H),l.projectToRenderScreen(z,re)}else if(ie[2]<0&&re[2]<0)continue;ie[2]=0,re[2]=0;const h=dr(Ve(ie,re,Dt),v);h<E&&(E=h,Q(xt,N),Q(Ct,z),b=g/3)}if(E<O*O){let g=Number.MAX_VALUE;if(pr(Ve(xt,Ct,Dt),Ve(p,m,ds),te)){ve(te,te,p);const D=Oi(te);je(te,te,1/D),g=D/et(p,m)}o(g,te,b)}}get _layout(){const e=hr().vec3f(d.POSITION).vec4f16(d.PREVIOUSDELTA).vec4f16(d.NEXTDELTA).f32(d.U0).vec2f16(d.LINEPARAMETERS);return this.parameters.vvColor?e.f32(d.COLORFEATUREATTRIBUTE):e.vec4u8(d.COLOR,{glNormalized:!0}),this.parameters.vvSize?e.f32(d.SIZEFEATUREATTRIBUTE):e.f32(d.SIZE),this.parameters.vvOpacity&&e.f32(d.OPACITYFEATUREATTRIBUTE),Nt()&&e.vec4u8(d.OLIDCOLOR),e}createBufferWriter(){return new os(this._layout,this.parameters)}createGLMaterial(e){return new as(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}}class as extends Ki{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(rs,e)}}class ns extends Qi{constructor(){super(...arguments),this.width=0,this.color=fi,this.join="miter",this.cap=ae.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){return this.color[3]<1||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}}class os{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t;const r=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=Ee+r}}_isClosed(e){return Ke(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const r=e.get(d.POSITION).indices.length/2+1,s=this._isClosed(e);let a=s?2:4;return a+=((s?r:r-1)-(s?0:1))*(2*this.numJoinSubdivisions+4),a+=2,this._parameters.wireframe&&(a=2+4*(a-2)),a}write(e,t,r,s,a,o){const n=r.get(d.POSITION),l=n.indices,p=n.data.length/3,m=r.get(d.DISTANCETOSTART)?.data;l&&l.length!==2*(p-1)&&console.warn("RibbonLineMaterial does not support indices");const S=(this.vertexBufferLayout.fields.has(d.SIZEFEATUREATTRIBUTE)?r.get(d.SIZEFEATUREATTRIBUTE)?.data[0]:r.get(d.SIZE)?.data[0])??1;let u=[1,1,1,1],f=0;const v=this.vertexBufferLayout.fields.has(d.COLORFEATUREATTRIBUTE);v?f=r.get(d.COLORFEATUREATTRIBUTE).data[0]:r.has(d.COLOR)&&(u=r.get(d.COLOR).data);const O=this.vertexBufferLayout.fields.has(d.OPACITYFEATUREATTRIBUTE),E=O?r.get(d.OPACITYFEATUREATTRIBUTE).data[0]:0,b=new Float32Array(a.buffer),M=or(a.buffer),g=new Uint8Array(a.buffer),D=this.vertexBufferLayout.stride/4;let h=o*D;const I=h;let A=0;const ne=m?(L,V,K)=>A=m[K]:(L,V,K)=>A+=et(L,V),X=b.BYTES_PER_ELEMENT/M.BYTES_PER_ELEMENT,de=4/X,w=(L,V,K,he,be,Kt,ei)=>{b[h++]=V[0],b[h++]=V[1],b[h++]=V[2],ht(L,V,M,h*X),h+=de,ht(K,V,M,h*X),h+=de,b[h++]=ei;let Fe=h*X;if(M[Fe++]=he,M[Fe++]=be,h=Math.ceil(Fe/X),v)b[h]=f;else{const U=Math.min(4*Kt,u.length-4),Oe=4*h;g[Oe]=255*u[U],g[Oe+1]=255*u[U+1],g[Oe+2]=255*u[U+2],g[Oe+3]=255*u[U+3]}if(h++,b[h++]=S,O&&(b[h++]=E),Nt()){let U=4*h;s?(g[U++]=s[0],g[U++]=s[1],g[U++]=s[2],g[U++]=s[3]):(g[U++]=0,g[U++]=0,g[U++]=0,g[U++]=0),h=Math.ceil(.25*U)}};h+=D,Y(y,n.data[0],n.data[1],n.data[2]),e&&J(y,y,e);const ye=this._isClosed(r);if(ye){const L=n.data.length-3;Y(P,n.data[L],n.data[L+1],n.data[L+2]),e&&J(P,P,e)}else Y(x,n.data[3],n.data[4],n.data[5]),e&&J(x,x,e),w(y,y,x,1,F.LEFT_CAP_START,0,0),w(y,y,x,1,F.RIGHT_CAP_START,0,0),Q(P,y),Q(y,x);const Ue=ye?0:1,pe=ye?p:p-1;for(let L=Ue;L<pe;L++){const V=(L+1)%p*3;Y(x,n.data[V],n.data[V+1],n.data[V+2]),e&&J(x,x,e),ne(P,y,L),w(P,y,x,0,F.LEFT_JOIN_END,L,A),w(P,y,x,0,F.RIGHT_JOIN_END,L,A);const K=this.numJoinSubdivisions;for(let he=0;he<K;++he){const be=(he+1)/(K+1);w(P,y,x,be,F.LEFT_JOIN_END,L,A),w(P,y,x,be,F.RIGHT_JOIN_END,L,A)}w(P,y,x,1,F.LEFT_JOIN_START,L,A),w(P,y,x,1,F.RIGHT_JOIN_START,L,A),Q(P,y),Q(y,x)}return ye?(Y(x,n.data[3],n.data[4],n.data[5]),e&&J(x,x,e),A=ne(P,y,pe),w(P,y,x,0,F.LEFT_JOIN_END,Ue,A),w(P,y,x,0,F.RIGHT_JOIN_END,Ue,A)):(A=ne(P,y,pe),w(P,y,y,0,F.LEFT_CAP_END,pe,A),w(P,y,y,0,F.RIGHT_CAP_END,pe,A)),Be(b,I+D,b,I,D),h=Be(b,h-D,b,h,D),this._parameters.wireframe&&this._addWireframeVertices(a,I,h,D),null}_addWireframeVertices(e,t,r,s){const a=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),o=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,r-t);let n=0;const l=p=>n=Be(o,p,a,n,s);for(let p=0;p<o.length-1;p+=2*s)l(p),l(p+2*s),l(p+1*s),l(p+2*s),l(p+1*s),l(p+3*s)}}function Be(i,e,t,r,s){for(let a=0;a<s;a++)t[r++]=i[e++];return r}function Ke(i,e){return i.isClosed?e.get(d.POSITION).indices.length>2:!1}function ls(i){return i.anchor===Te.Tip&&i.hideOnShortSegments&&i.placement==="begin-end"&&i.worldSpace}const N=C(),z=C(),H=C(),te=C(),cs=C(),ie=le(),re=le(),xt=C(),Ct=C(),Dt=It(),ds=It(),P=C(),y=C(),x=C(),fe=[le(),le(),le(),le()],Z=[C(),C(),C(),C()],ke=ze(),He=ze(),Ge=ze(),Je=ze();let ca=class{constructor(e){this._originSR=e,this._rootOriginId="root/"+Ne(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(t==null){const m=Ot(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,m),m}const r=this._gridSize,s=Math.round(e[0]/r),a=Math.round(e[1]/r),o=Math.round(e[2]/r),n=`${s}/${a}/${o}`;let l=this._origins.get(n);const p=.5*r;if(ve($,e,t.vec3),$[0]=Math.abs($[0]),$[1]=Math.abs($[1]),$[2]=Math.abs($[2]),$[0]<p&&$[1]<p&&$[2]<p){if(l){const m=Math.max(...$);if(ve($,e,l.vec3),$[0]=Math.abs($[0]),$[1]=Math.abs($[1]),$[2]=Math.abs($[2]),Math.max(...$)<m)return l}return t}return l||(l=Ot(s*r,a*r,o*r,n),this._origins.set(n,l)),l}_drawOriginBox(e,t=mi(1,1,0,1)){const r=window.view,s=r.stage,a=t.toString();if(!this._objects.has(a)){this._material=new ss({width:2,color:t});const f=new Br(s,{pickable:!1}),v=new Mr({castShadow:!1});f.add(v),this._objects.set(a,v)}const o=this._objects.get(a),n=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],l=n.length,p=new Array(3*l),m=new Array,S=.5*this._gridSize;for(let f=0;f<l;f++)p[3*f]=e[0]+(1&n[f]?S:-S),p[3*f+1]=e[1]+(2&n[f]?S:-S),p[3*f+2]=e[2]+(4&n[f]?S:-S),f>0&&m.push(f-1,f);Ye(p,this._originSR,0,p,r.renderSpatialReference,0,l);const u=new er(this._material,[[d.POSITION,new Ai(p,m,3,!0)]],null,tr.Line);o.addGeometry(u)}get test(){}};const $=C(),ps=Object.freeze(Object.defineProperty({__proto__:null,build:Xt,ribbonlineNumRoundJoinSubdivisions:Ee},Symbol.toStringTag,{value:"Module"}));export{Mr as A,Hr as B,we as C,ts as D,br as E,_e as F,Zt as G,oa as H,W as I,Ot as J,Gr as K,la as L,na as M,_t as O,Dr as R,Qs as a,yt as b,Wt as c,Ks as d,Et as e,Gs as f,Zs as g,ia as h,ca as i,Te as j,Xs as k,Br as l,Nr as m,ea as n,ta as o,es as p,ss as q,Qe as r,ae as s,bt as t,Hs as u,qs as v,Js as w,Ys as x,wr as y,se as z};
