import{u as h,a as O,A as T,e as k,M as r,H as E,b as t,G as b,O as w,k as R,D as Y,B as d,c as l,g as F,m as H}from"./nb_NO-CR1Tfhms.js";import{d as o}from"./dayjs.min-DkLNzaWO.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./v4-CtRu48qb.js";import"./react-Cj9Rfqxt.js";import"./iframe-WwBGgbsK.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";const m=()=>o().startOf("day").add(30,"days"),D=({closeModal:n,reserverTilDefault:i,endreOppgavereservasjon:f})=>{const M=h(),y=O({defaultValues:{reserverTil:i?o(i).format(T):""}});return e.jsx(k,{formMethods:y,onSubmit:x=>f(x.reserverTil),children:e.jsxs(r,{width:"small",open:!0,"aria-label":M.formatMessage({id:"OppgaveReservasjonEndringDatoModal.Header"}),onClose:n,children:[e.jsx(r.Header,{children:e.jsx(E,{size:"small",children:e.jsx(t,{id:"OppgaveReservasjonEndringDatoModal.Header"})})}),e.jsx(r.Body,{children:e.jsx(b,{label:"",name:"reserverTil",validate:[w,R,Y(m())],fromDate:new Date,toDate:m().toDate()})}),e.jsxs(r.Footer,{children:[e.jsx(d,{size:"small",children:e.jsx(t,{id:"OppgaveReservasjonEndringDatoModal.Ok"})}),e.jsx(d,{size:"small",variant:"secondary",onClick:n,type:"button",children:e.jsx(t,{id:"OppgaveReservasjonEndringDatoModal.Avbryt"})})]})]})})};D.__docgenInfo={description:"",methods:[],displayName:"OppgaveReservasjonEndringDatoModal",props:{closeModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},reserverTilDefault:{required:!1,tsType:{name:"string"},description:""},endreOppgavereservasjon:{required:!0,tsType:{name:"signature",type:"function",raw:"(reserverTil: string) => void",signature:{arguments:[{type:{name:"string"},name:"reserverTil"}],return:{name:"void"}}},description:""}}};const z=F(H),K={title:"los/OppgaveReservasjonEndringDatoModal",component:D,decorators:[z],args:{closeModal:l("button-click"),endreOppgavereservasjon:l("button-click")}},a={},s={args:{reserverTilDefault:o().add(1,"week").format("YYYY-MM-DD")}};var p,c,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,v,j;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    reserverTilDefault: dayjs().add(1, 'week').format('YYYY-MM-DD')
  }
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const L=["Default","MedDefaultverdi"];export{a as Default,s as MedDefaultverdi,L as __namedExportsOrder,K as default};
