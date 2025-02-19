import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{u,c as k,g as p,H as x,D as h}from"./nb_NO-DWNE31-V.js";import{d as E}from"./dayjs.min-DkLNzaWO.js";import{K as f}from"./Kjonnkode-C-fkzSiP.js";import{R as M}from"./index.es-C_rfKMWM.js";import{M as o}from"./Loader-BEUEYYSz.js";import{T as d}from"./Tag-DBYrLKdR.js";import{H as w,V as P}from"./VStack-ChXOQS5S.js";import{r as l}from"./index-_2TAQcTa.js";var _=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)a.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const O=l.forwardRef((e,a)=>{var{title:r,titleId:n}=e,s=_(e,["title","titleId"]);let i=u();return i=r?n||"title-"+i:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},s),r?l.createElement("title",{id:i},r):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-4.58 7.998A1.75 1.75 0 0 1 9.154 8.25h5.694a1.75 1.75 0 0 1 1.733 1.998l-.837 5.858a.75.75 0 0 1-.743.644h-.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1-.742-.644z",clipRule:"evenodd"}))});var b=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)a.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const S=l.forwardRef((e,a)=>{var{title:r,titleId:n}=e,s=b(e,["title","titleId"]);let i=u();return i=r?n||"title-"+i:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},s),r?l.createElement("title",{id:i},r):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.557 9.411a1.75 1.75 0 0 1 1.648-1.161h3.59c.74 0 1.4.465 1.648 1.161l2.263 6.337A.75.75 0 0 1 17 16.75h-2.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H7a.75.75 0 0 1-.706-1.002z",clipRule:"evenodd"}))}),R="_displayInline_1qq68_1",D={displayInline:R},g=({erDød:e,alder:a,dødsdato:r})=>e?t.jsx(k,{size:"small",className:D.displayInline,children:r?t.jsx(M,{dateString:r}):t.jsx(o,{id:"Person.ManglerDodsdato"})}):t.jsx("span",{children:t.jsx(o,{id:"Person.Age",values:{age:a}})});g.__docgenInfo={description:`Aldersvisning

Definerer visning av personens alder. (Søker)`,methods:[],displayName:"Aldersvisning",props:{erDød:{required:!0,tsType:{name:"boolean"},description:""},alder:{required:!0,tsType:{name:"number"},description:""},dødsdato:{required:!1,tsType:{name:"string"},description:""}}};var m=(e=>(e.KODE6="SPSF",e.KODE7="SPFO",e.KLIENT_ADRESSE="KLIE",e.MILITAR="MILI",e.PENDLER="PEND",e.SVALBARD="SVAL",e.UTEN_FAST_BO="UFB",e.UTENRIKS_TJENST="URIK",e.UDEFINERT="UDEF",e))(m||{});const v=({erDød:e=!1,diskresjonskode:a})=>{const r=p();return t.jsxs(t.Fragment,{children:[e&&t.jsx(d,{variant:"info",title:r.formatMessage({id:"MerkePanel.DodTittel"}),children:t.jsx(o,{id:"MerkePanel.Dod"})}),a===m.KODE6&&!e&&t.jsx(d,{variant:"error",title:r.formatMessage({id:"MerkePanel.Diskresjon6Tittel"}),children:t.jsx(o,{id:"MerkePanel.Diskresjon6"})}),a===m.KODE7&&!e&&t.jsx(d,{variant:"warning",title:r.formatMessage({id:"MerkePanel.Diskresjon7Tittel"}),children:t.jsx(o,{id:"MerkePanel.Diskresjon7"})})]})};v.__docgenInfo={description:`MerkePanel

Definerer visning av personens merkinger. (Søker)

Eksempel:
\`\`\`html
 <MerkePanel erDod={false} diskresjonskode="SPSF"  />
\`\`\``,methods:[],displayName:"MerkePanel",props:{erDød:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},diskresjonskode:{required:!1,tsType:{name:"string"},description:""}}};const N="_kvinneIcon_4m9mx_1",K="_MannIcon_4m9mx_7",c={kvinneIcon:N,MannIcon:K},q=({person:e})=>{const a=p(),{kjønn:r,dødsdato:n,diskresjonskode:s,fødselsdato:i,navn:j,fødselsnummer:y}=e,I=E().diff(i,"years");return t.jsxs(w,{gap:"4",children:[r===f.KVINNE&&t.jsx(S,{className:c.kvinneIcon,title:a.formatMessage({id:"Person.ImageText"})}),r===f.MANN&&t.jsx(O,{className:c.MannIcon,title:a.formatMessage({id:"Person.ImageText"})}),t.jsxs(P,{gap:"1",children:[t.jsxs(x,{size:"small",children:[j," ",t.jsx(g,{erDød:!!n,alder:I,dødsdato:n})]}),t.jsx(h,{children:y})]}),t.jsx(v,{erDød:!!n,diskresjonskode:s})]})};q.__docgenInfo={description:"",methods:[],displayName:"PersonInfo",props:{person:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  kjønn: Kjønnkode;
  fødselsnummer: string;
  fødselsdato: string;
  dødsdato?: string;
  diskresjonskode?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  kjønn: Kjønnkode;
  fødselsnummer: string;
  fødselsdato: string;
  dødsdato?: string;
  diskresjonskode?: string;
}>`},description:""}}};export{m as D,q as P};
