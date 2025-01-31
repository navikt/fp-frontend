import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as y,R as f}from"./index-B5OHeJSP.js";import{b as v,M as I}from"./nb_NO-C8JXFqbN.js";import{u as o}from"./useQuery-CI6MUdva.js";import{u as b}from"./useMutation-CDoAPpKe.js";import{c as x,o as j,s as w,d as h}from"./fplosAvdelingslederApi-DfGs8LfI.js";import{G as _}from"./GjeldendeSakslisterTabell-BI0SrF41.js";import{S as A}from"./SaksbehandlereForSakslisteForm-fBaKGqaP.js";import{U as q}from"./UtvalgskriterierForSakslisteForm-DqU09Gux.js";import{S as F}from"./Table-DHw6X-Ch.js";const P="_text_1e2u0_1",R="_leftCol_1e2u0_5",N="_arrow_1e2u0_9",M={text:P,leftCol:R,arrow:N},d=({valgtAvdelingEnhet:n,avdelingensSaksbehandlere:u})=>{const m=v(),[a,s]=y.useState(),{data:g}=o(j(n)),{data:i,refetch:p}=o(w(n)),{mutate:k,data:l}=b({mutationFn:()=>h(n),onSuccess:()=>{s(void 0),p()}}),c=l?parseInt(l.sakslisteId,10):void 0,r=a!==void 0?a:c,t=i.find(S=>S.sakslisteId===r);return e.jsx(_,{sakslister:i,setValgtSakslisteId:s,valgtSakslisteId:r,valgtAvdelingEnhet:n,oppgaverForAvdelingAntall:g,lagNySaksliste:k,resetValgtSakslisteId:()=>s(void 0),children:e.jsx("div",{style:{marginBottom:"20px",marginLeft:"-55px",marginRight:"-55px"},children:r&&t&&e.jsxs(f.Fragment,{children:[e.jsx(q,{valgtSaksliste:t,valgtAvdelingEnhet:n}),e.jsxs(x,{gap:"4",justify:"center",children:[e.jsx(F,{className:M.arrow,title:m.formatMessage({id:"EndreSakslisterPanel.Saksbehandlere"})}),e.jsx(I,{id:"EndreSakslisterPanel.KnyttetMotSaksbehandlere"})]}),e.jsx(A,{valgtSaksliste:t,valgtAvdelingEnhet:n,avdelingensSaksbehandlere:u})]},t.sakslisteId)})})};d.__docgenInfo={description:"",methods:[],displayName:"EndreSakslisterPanel",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
