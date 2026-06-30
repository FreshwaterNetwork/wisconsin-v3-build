import{a3 as i,jJ as p}from"./index-BfVS1IZv.js";import{n as r}from"./glsl-Cj7KC756.js";import{e as m}from"./VertexAttribute-BfkzOMLV.js";var e;function f(o){switch(o){case"multiply":default:return e.Multiply;case"ignore":return e.Ignore;case"replace":return e.Replace;case"tint":return e.Tint}}function C(o,a,l){if(o==null||a===e.Ignore)return l[0]=255,l[1]=255,l[2]=255,void(l[3]=255);const c=i(Math.round(o[3]*s),0,s),d=c===0||a===e.Tint?0:a===e.Replace?u:b;l[0]=i(Math.round(o[0]*n),0,n),l[1]=i(Math.round(o[1]*n),0,n),l[2]=i(Math.round(o[2]*n),0,n),l[3]=c+d}(function(o){o[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"})(e||(e={}));const n=255,s=85,u=s,b=2*s;function x(o){o.vertex.code.add(r`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.int(e.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.int(e.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.int(e.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.int(e.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function h(o,a){switch(a.normalType){case t.Compressed:o.attributes.add(m.NORMALCOMPRESSED,"vec2"),o.vertex.code.add(r`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case t.Attribute:o.attributes.add(m.NORMAL,"vec3"),o.vertex.code.add(r`vec3 normalModel() {
return normal;
}`);break;case t.ScreenDerivative:o.fragment.code.add(r`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:p(a.normalType);case t.COUNT:}}var t;(function(o){o[o.Attribute=0]="Attribute",o[o.Compressed=1]="Compressed",o[o.ScreenDerivative=2]="ScreenDerivative",o[o.COUNT=3]="COUNT"})(t||(t={}));export{t as a,x as b,f as e,e as n,C as r,h as t};
