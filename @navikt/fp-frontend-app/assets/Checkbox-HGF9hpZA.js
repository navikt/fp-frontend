import{r as f,R as l}from"./index-DjhIdADd.js";import{x as j,g as E,y as k,z as S,s as O,L as R,A as L,C as P,h as C,E as F,D as p}from"./withPanelData-BiaK-SIT.js";const V=e=>{const r=j(e,"fieldset"),{inputProps:t}=r;return Object.assign(Object.assign({},r),{inputProps:{"aria-invalid":t["aria-invalid"],"aria-describedby":t["aria-describedby"]}})};var G=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const $=f.forwardRef((e,r)=>{var t,n,a;const{inputProps:o,errorId:s,showErrorMsg:i,hasError:b,size:d,readOnly:c,inputDescriptionId:v}=V(e),{cn:m}=E(),u=f.useContext(k),{children:g,className:h,errorPropagation:y=!0,legend:x,description:_,hideLegend:w,nativeReadOnly:I=!0}=e,z=G(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return l.createElement(k.Provider,{value:{error:y?(t=e.error)!==null&&t!==void 0?t:u==null?void 0:u.error:void 0,errorId:S({[s]:i,[(n=u==null?void 0:u.errorId)!==null&&n!==void 0?n:""]:!!(u!=null&&u.error)}),size:d,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:c}},l.createElement("fieldset",Object.assign({},O(z,["errorId","error","size","readOnly"]),O(o,["aria-describedby","aria-invalid"]),{ref:r,className:m(h,"navds-fieldset",`navds-fieldset--${d}`,{"navds-fieldset--error":b,"navds-fieldset--readonly":c})}),l.createElement(R,{size:d,as:"legend",className:m("navds-fieldset__legend",{"navds-sr-only":!!w})},c&&(I?l.createElement(L,null):l.createElement(P,null)),x),!!_&&l.createElement(C,{className:m("navds-fieldset__description",{"navds-sr-only":!!w}),id:v,size:d??"medium",as:"div"},e.description),g,l.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:m("navds-fieldset__error")},i&&l.createElement(F,{size:d,showIcon:!0},e.error))))});var D=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const N=f.createContext(null),T=f.forwardRef((e,r)=>{var t,n,{value:a,defaultValue:o,onChange:s=()=>{},children:i,className:b}=e,d=D(e,["value","defaultValue","onChange","children","className"]);const{cn:c}=E(),v=f.useContext(k),[m,u]=f.useState(o??[]),g=h=>{const y=a??m,x=y.includes(h)?y.filter(_=>_!==h):[...y,h];a===void 0&&u(x),s(x)};return l.createElement($,Object.assign({},d,{ref:r,className:c(b,"navds-checkbox-group",`navds-checkbox-group--${(n=(t=d.size)!==null&&t!==void 0?t:v==null?void 0:v.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),l.createElement(N.Provider,{value:{value:a,defaultValue:o,toggleValue:g}},l.createElement("div",{className:c("navds-checkboxes")},i)))});var M=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const A=e=>{const r=f.useContext(N),t=j(O(e,["description","children"]),"checkbox"),{inputProps:n,readOnly:a}=t,o=M(t,["inputProps","readOnly"]);return r&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},o),{readOnly:a,nested:!!r,inputProps:Object.assign(Object.assign({},n),{checked:r!=null&&r.value?r.value.includes(e.value):e.checked,defaultChecked:r!=null&&r.defaultValue?r.defaultValue.includes(e.value):e.defaultChecked,onChange:s=>{var i;a||((i=e.onChange)===null||i===void 0||i.call(e,s),r==null||r.toggleValue(e.value))},onClick:s=>{var i;if(a){s.preventDefault();return}(i=e==null?void 0:e.onClick)===null||i===void 0||i.call(e,s)}})})},W=f.forwardRef((e,r)=>{const{cn:t}=E(),{inputProps:n,hasError:a,size:o,readOnly:s,nested:i}=A(e),b=p(),d=p();return l.createElement("div",{className:t(e.className,"navds-checkbox",`navds-checkbox--${o}`,{"navds-checkbox--error":a,"navds-checkbox--disabled":n.disabled,"navds-checkbox--readonly":s})},l.createElement("input",Object.assign({},O(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),O(n,["aria-invalid"]),{type:"checkbox",className:t("navds-checkbox__input"),ref:c=>{var v;c&&(c.indeterminate=(v=e.indeterminate)!==null&&v!==void 0?v:!1),typeof r=="function"?r(c):r!=null&&(r.current=c)},"aria-labelledby":t(b,!!e["aria-labelledby"]&&e["aria-labelledby"],{[d]:e.description})})),l.createElement("label",{htmlFor:n.id,className:t("navds-checkbox__label")},l.createElement("span",{className:t("navds-checkbox__icon")},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},l.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),l.createElement("span",{className:t("navds-checkbox__icon-indeterminate")}),l.createElement("span",{className:t("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},l.createElement(C,{as:"span",id:b,size:o,className:t("navds-checkbox__label-text"),"aria-hidden":!0},!i&&s&&l.createElement(P,null),e.children),e.description&&l.createElement(C,{as:"span",id:d,size:o,className:t("navds-form-field__subdescription navds-checkbox__description"),"aria-hidden":!0},e.description))))});export{W as C,$ as F,T as a};
