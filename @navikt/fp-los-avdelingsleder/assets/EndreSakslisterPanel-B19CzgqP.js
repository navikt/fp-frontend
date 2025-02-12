import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as y,R as f}from"./index-B5OHeJSP.js";import{d as v,M as I}from"./nb_NO-wcwS9fSJ.js";import{u as o}from"./useQuery-Bl9GBTJ-.js";import{u as x}from"./useMutation-B4AwZSPl.js";import{c as b,o as j,s as w,d as h}from"./fplosAvdelingslederApi-CFrdzg5Y.js";import{G as _}from"./GjeldendeSakslisterTabell-O1ACSlVV.js";import{S as A}from"./SaksbehandlereForSakslisteForm-CgPk_BBL.js";import{U as q}from"./UtvalgskriterierForSakslisteForm-ADFp8bbX.js";import{S as F}from"./Table-BAg6aev6.js";const P="_text_1e2u0_1",R="_leftCol_1e2u0_5",N="_arrow_1e2u0_9",M={text:P,leftCol:R,arrow:N},d=({valgtAvdelingEnhet:n,avdelingensSaksbehandlere:u})=>{const m=v(),[a,s]=y.useState(),{data:g}=o(j(n)),{data:i,refetch:p}=o(w(n)),{mutate:k,data:l}=x({mutationFn:()=>h(n),onSuccess:()=>{s(void 0),p()}}),c=l?parseInt(l.sakslisteId,10):void 0,r=a!==void 0?a:c,t=i.find(S=>S.sakslisteId===r);return e.jsx(_,{sakslister:i,setValgtSakslisteId:s,valgtSakslisteId:r,valgtAvdelingEnhet:n,oppgaverForAvdelingAntall:g,lagNySaksliste:k,resetValgtSakslisteId:()=>s(void 0),children:e.jsx("div",{style:{marginBottom:"20px",marginLeft:"-55px",marginRight:"-55px"},children:r&&t&&e.jsxs(f.Fragment,{children:[e.jsx(q,{valgtSaksliste:t,valgtAvdelingEnhet:n}),e.jsxs(b,{gap:"4",justify:"center",children:[e.jsx(F,{className:M.arrow,title:m.formatMessage({id:"EndreSakslisterPanel.Saksbehandlere"})}),e.jsx(I,{id:"EndreSakslisterPanel.KnyttetMotSaksbehandlere"})]}),e.jsx(A,{valgtSaksliste:t,valgtAvdelingEnhet:n,avdelingensSaksbehandlere:u})]},t.sakslisteId)})})};d.__docgenInfo={description:"",methods:[],displayName:"EndreSakslisterPanel",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
