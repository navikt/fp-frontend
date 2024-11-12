import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{u as g,$ as f,D as c,w as v}from"./index.es-DaG9b3XS.js";import{c as h}from"./index.es-CQiD8l-s.js";import{u as b,d as y}from"./nb_NO-YKX2BiU8.js";import{V as S,H as m}from"./VStack-BGxRFqgw.js";import{r as l}from"./index-uubelm5h.js";import{B as k}from"./Modal-eX9yuK6W.js";import{S as x}from"./ExclamationmarkTriangleFill-D8-WOHQX.js";var w=function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(a[r[n]]=t[r[n]]);return a};const j=l.forwardRef((t,e)=>{var{title:a,titleId:r}=t,n=w(t,["title","titleId"]);let i=b();return i=a?r||"title-"+i:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:e,"aria-labelledby":i},n),a?l.createElement("title",{id:i},a):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))}),_="_searchInput_1nwm1_1",I="_searchButton_1nwm1_5",O="_checkbox_1nwm1_12",q="_advarselIcon_1nwm1_17",s={searchInput:_,searchButton:I,checkbox:O,advarselIcon:q},B=({onSubmit:t,searchResultAccessDenied:e,searchStarted:a,resetSearch:r,kanSaksbehandle:n})=>{const i=y(),d=g(),p=d.watch("searchString");return o.jsx(f,{onSubmit:t,formMethods:d,children:o.jsxs(S,{gap:"2",children:[o.jsxs(m,{gap:"8",children:[o.jsxs(m,{gap:"0",children:[o.jsx(c,{name:"searchString",label:i.formatMessage({id:"Search.SearchHeader"}),description:i.formatMessage({id:"Search.SaksnummerOrPersonId"}),validate:[h],parse:(u="")=>u.toString().trim(),className:s.searchInput,size:"medium"}),o.jsx(k,{size:"small",variant:"primary",icon:o.jsx(j,{"aria-hidden":!0}),loading:!(e!=null&&e.feilmelding)&&a,disabled:!(e!=null&&e.feilmelding)&&a||!p,className:s.searchButton})]}),n&&o.jsx(v,{name:"skalReservere",label:i.formatMessage({id:"Search.ReserverBehandling"}),onClick:r,className:s.checkbox})]}),(e==null?void 0:e.feilmelding)&&o.jsxs(m,{gap:"2",children:[o.jsx(x,{className:s.advarselIcon}),e.feilmelding]})]})})};B.__docgenInfo={description:`SøkForm

Definerer søkefelt og tilhørende søkeknapp.`,methods:[],displayName:"SøkForm",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: { searchString: string; skalReservere: boolean }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchString: string; skalReservere: boolean }",signature:{properties:[{key:"searchString",value:{name:"string",required:!0}},{key:"skalReservere",value:{name:"boolean",required:!0}}]}},name:"values"}],return:{name:"void"}}},description:""},searchStarted:{required:!0,tsType:{name:"boolean"},description:""},searchResultAccessDenied:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  feilmelding?: string;
}`,signature:{properties:[{key:"feilmelding",value:{name:"string",required:!1}}]}},description:""},resetSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};export{B as S};
