import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as g}from"./index-DRjF_FHU.js";import{B as S,M as s}from"./nb_NO-CZSpk6bt.js";import{u as y,V as b,q as j,L as x}from"./withQueryClientProvider-D5rUA1vz.js";import{u as A}from"./useMutation-Bl-NM7Qh.js";import{S as I}from"./SletteSaksbehandlerModal-fE3nWP_l.js";import{T as n}from"./Table-BpD34COj.js";import{S as f}from"./Modal-B9osCInE.js";const q="_removeIcon_1k4e9_1",w={removeIcon:q},p=({saksbehandlere:o,valgtAvdelingEnhet:v})=>{const h=y(),[d,t]=g.useState(),{mutate:k}=A({mutationFn:r=>j(r.brukerIdent,v),onSuccess:()=>{h.invalidateQueries({queryKey:[x.SAKSBEHANDLERE_FOR_AVDELING]}),t(void 0)}}),l=g.useMemo(()=>o.toSorted((r,u)=>{const m=(a,i)=>a!=null&&i!=null?a.localeCompare(i):a==null&&i==null?0:a==null?1:-1,c=m(r.ansattAvdeling,u.ansattAvdeling);return c!==0?c:m(r.navn,u.navn)}),[o]);return e.jsxs(b,{gap:"2",children:[l.length===0&&e.jsx(S,{size:"small",children:e.jsx(s,{id:"SaksbehandlereTabell.IngenSaksbehandlere"})}),l.length>0&&e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsxs(n.Row,{children:[e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SaksbehandlereTabell.Navn"})}),e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SaksbehandlereTabell.Brukerident"})}),e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SaksbehandlereTabell.AnsattVed"})}),e.jsx(n.HeaderCell,{scope:"col"})]})}),e.jsx(n.Body,{children:l.map(r=>e.jsxs(n.Row,{children:[e.jsx(n.DataCell,{scope:"row",children:r.navn}),e.jsx(n.DataCell,{children:r.brukerIdent}),e.jsx(n.DataCell,{children:r.ansattAvdeling}),e.jsx(n.DataCell,{children:e.jsx(f,{className:w.removeIcon,onMouseDown:()=>t(r),onKeyDown:()=>t(r)})})]},r.brukerIdent))})]}),d&&e.jsx(I,{valgtSaksbehandler:d,closeSletteModal:()=>t(void 0),fjernSaksbehandler:k})]})};p.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlereTabell",props:{saksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlereTabell",props:{saksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{p as S};
