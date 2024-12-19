import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as v,R as y}from"./index-DRjF_FHU.js";import{u as f,M as I}from"./nb_NO-CZSpk6bt.js";import{u as o}from"./useQuery-Cufi_TnF.js";import{u as x}from"./useMutation-Bl-NM7Qh.js";import{c as b,o as j,s as w,d as h}from"./withQueryClientProvider-D5rUA1vz.js";import{G as _}from"./GjeldendeSakslisterTabell-BYEfonb_.js";import{S as A}from"./SaksbehandlereForSakslisteForm-RqlRgM68.js";import{U as q}from"./UtvalgskriterierForSakslisteForm-vhnk4YAM.js";import{S as F}from"./Table-BpD34COj.js";const P="_text_1e2u0_1",R="_leftCol_1e2u0_5",N="_arrow_1e2u0_9",M={text:P,leftCol:R,arrow:N},d=({valgtAvdelingEnhet:t,avdelingensSaksbehandlere:u})=>{const m=f(),[a,s]=v.useState(),{data:g}=o(j(t)),{data:i,refetch:p}=o(w(t)),{mutate:k,data:l}=x({mutationFn:()=>h(t),onSuccess:()=>{s(void 0),p()}}),c=l?parseInt(l.sakslisteId,10):void 0,r=a!==void 0?a:c,n=i.find(S=>S.sakslisteId===r);return e.jsx(_,{sakslister:i,setValgtSakslisteId:s,valgtSakslisteId:r,valgtAvdelingEnhet:t,oppgaverForAvdelingAntall:g,lagNySaksliste:k,resetValgtSakslisteId:()=>s(void 0),children:e.jsx("div",{style:{marginBottom:"20px",marginLeft:"-55px",marginRight:"-55px"},children:r&&n&&e.jsxs(y.Fragment,{children:[e.jsx(q,{valgtSaksliste:n,valgtAvdelingEnhet:t}),e.jsxs(b,{gap:"4",justify:"center",children:[e.jsx(F,{className:M.arrow,title:m.formatMessage({id:"EndreSakslisterPanel.Saksbehandlere"})}),e.jsx(I,{id:"EndreSakslisterPanel.KnyttetMotSaksbehandlere"})]}),e.jsx(A,{valgtSaksliste:n,valgtAvdelingEnhet:t,avdelingensSaksbehandlere:u})]},n.sakslisteId)})})};d.__docgenInfo={description:"",methods:[],displayName:"EndreSakslisterPanel",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"EndreSakslisterPanel",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:""}}};export{d as E};
