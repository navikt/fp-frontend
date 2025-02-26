import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as T,u as b,n as F}from"./initFetch-CW0JuezE.js";import{a as K,e as x,X as A,p as I,u as M}from"./index.es-BtcML4NH.js";import{k as N,V as _,h as k,H as y,n as P,P as E,D as V}from"./withPanelData-D4YdUPJS.js";import{a as u,d as O,n as C}from"./index.es-UPCLURKc.js";import{K as c}from"./alleKodeverk-BFmIlMu4.js";import{g as D}from"./kodeverkUtils-DLZgokMR.js";import{T as s}from"./Table-D-TSG75p.js";import"./index-DjhIdADd.js";import{S as Y}from"./ExclamationmarkTriangleFill-C7oa8wZu.js";import{p as H}from"./paths-DCH_SImc.js";import{a as L}from"./index-CfpqQiaz.js";const j=({fagsaker:r,selectFagsakCallback:a,alleKodeverk:t})=>{const i=D(t);return e.jsxs(s,{children:[e.jsx(s.Header,{children:e.jsxs(s.Row,{children:[e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FagsakList.Saksnummer"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FagsakList.Sakstype"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FagsakList.Status"})})]})}),e.jsx(s.Body,{children:r.map(n=>e.jsxs(s.Row,{onMouseDown:()=>a(n.saksnummer),onKeyDown:()=>a(n.saksnummer),children:[e.jsx(s.DataCell,{children:n.saksnummer}),e.jsx(s.DataCell,{children:i(n.fagsakYtelseType,c.FAGSAK_YTELSE)}),e.jsx(s.DataCell,{children:i(n.status,c.FAGSAK_STATUS)})]},n.saksnummer))})]})};j.__docgenInfo={description:`FagsakList

Formaterer fagsak-søkeresultatet for visning i tabell. Sortering av fagsakene blir håndtert her.`,methods:[],displayName:"FagsakList",props:{fagsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"person",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}>`}],raw:"FagsakEnkel[]"},description:""},selectFagsakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"}],return:{name:"void"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const z="_container_74un9_1",B="_advarselIcon_74un9_6",f={container:z,advarselIcon:B},G=(r,a)=>!!(r||a===void 0||a.length<1),w=({searchStarted:r,searchResultAccessDenied:a,searchFagsakCallback:t})=>{const i=N(),n=K({defaultValues:{searchString:""}}),d=n.watch("searchString");return e.jsx(x,{formMethods:n,onSubmit:t,className:f.container,children:e.jsxs(_,{gap:"2",children:[e.jsx(k,{size:"small",children:e.jsx(u,{id:"Search.SearchFagsakOrPerson"})}),e.jsxs(y,{gap:"2",align:"end",children:[e.jsx(A,{name:"searchString",label:i.formatMessage({id:"Search.SaksnummerOrPersonId"}),validate:[I]}),e.jsx(P,{variant:"primary",size:"small",loading:r,disabled:G(r,d),children:e.jsx(u,{id:"Search.Search"})})]}),a&&e.jsxs(y,{gap:"2",align:"end",children:[e.jsx(Y,{className:f.advarselIcon}),e.jsx(k,{size:"small",children:e.jsx(u,{id:a.feilmelding})})]})]})})};w.__docgenInfo={description:`SearchForm

Definerer søkefelt og tilhørende søkeknapp.`,methods:[],displayName:"SearchForm",props:{searchStarted:{required:!0,tsType:{name:"boolean"},description:""},searchResultAccessDenied:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  feilmelding: string;
}`,signature:{properties:[{key:"feilmelding",value:{name:"string",required:!0}}]}},description:""},searchFagsakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { searchString: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchString: string }",signature:{properties:[{key:"searchString",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const U="_container_gwama_1",X="_label_gwama_9",q={container:U,label:X},h=({fagsaker:r,searchFagsakCallback:a,searchResultReceived:t,selectFagsakCallback:i,searchStarted:n,searchResultAccessDenied:d,alleKodeverk:g})=>e.jsxs("div",{className:q.container,children:[e.jsx(w,{searchFagsakCallback:a,searchStarted:n,searchResultAccessDenied:d}),t&&r.length===0&&e.jsx(k,{size:"small",className:q.label,children:e.jsx(u,{id:"FagsakSearch.ZeroSearchResults"})}),e.jsx(O,{eightPx:!0}),t&&r.length>1&&e.jsx(j,{fagsaker:r,selectFagsakCallback:i,alleKodeverk:g})]});h.__docgenInfo={description:`FagsakSearch

Denne setter sammen de ulike komponentene i søkebildet.
Er søkeresultat mottatt vises enten trefflisten og relatert person, eller en tekst som viser ingen resultater.`,methods:[],displayName:"FagsakSearch",props:{fagsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"person",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}>`}],raw:"FagsakEnkel[]"},description:""},searchFagsakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { searchString: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchString: string }",signature:{properties:[{key:"searchString",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},searchResultReceived:{required:!0,tsType:{name:"boolean"},description:""},selectFagsakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"}],return:{name:"void"}}},description:""},searchStarted:{required:!0,tsType:{name:"boolean"},description:""},searchResultAccessDenied:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  feilmelding: string;
}`,signature:{properties:[{key:"feilmelding",value:{name:"string",required:!0}}]}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Z={"Search.SearchFagsakOrPerson":"Søk på sak eller person","Search.SaksnummerOrPersonId":"Saksnummer eller fødselsnummer/D-nummer","Search.Search":"Søk","FagsakList.Saksnummer":"Saksnummer","FagsakList.Sakstype":"Sakstype","FagsakList.Status":"Status","FagsakSearch.ZeroSearchResults":"Søket ga ingen treff","Person.Age":"{age} år","Person.Man":"Mann","Person.Woman":"Kvinne","Person.ImageText":"Personinformasjon","ValidationMessage.InvalidSaksnummerOrFodselsnummerFormat":"Ugyldig saksnummer eller fødselsnummer","FagsakSokSakIndex.HarIkkeAdgang":"Har ikke adgang"},$=C(Z),S=({fagsaker:r=[],searchFagsakCallback:a,searchResultReceived:t,selectFagsakCallback:i,searchStarted:n=!1,searchResultAccessDenied:d,alleKodeverk:g})=>e.jsx(E,{value:$,children:e.jsx(h,{fagsaker:r,searchFagsakCallback:a,searchResultReceived:t,selectFagsakCallback:i,searchStarted:n,searchResultAccessDenied:d,alleKodeverk:g})});S.__docgenInfo={description:"",methods:[],displayName:"FagsakSokSakIndex",props:{fagsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"person",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}>`}],raw:"FagsakEnkel[]"},description:"",defaultValue:{value:"[]",computed:!1}},searchFagsakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { searchString: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchString: string }",signature:{properties:[{key:"searchString",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},searchResultReceived:{required:!0,tsType:{name:"boolean"},description:""},selectFagsakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"}],return:{name:"void"}}},description:""},searchStarted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchResultAccessDenied:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  feilmelding: string;
}`,signature:{properties:[{key:"feilmelding",value:{name:"string",required:!0}}]}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Q=[],W=()=>{var p;const{kodeverkOptions:r,søkFagsak:a}=T(),{data:t}=b(r()),i=V(),n=o=>{o&&i(H(o))},{mutate:d,data:g=Q,status:m,error:l}=M({mutationFn:o=>a(o.searchString),onSuccess:o=>{var v;o.length===1&&n((v=o[0])==null?void 0:v.saksnummer)}}),R=l&&l instanceof L&&l.response.status===403?(p=l.response)==null?void 0:p.data:void 0;return e.jsx(S,{fagsaker:g,searchFagsakCallback:d,searchResultReceived:m==="success",selectFagsakCallback:n,searchStarted:m==="pending",searchResultAccessDenied:R,alleKodeverk:F(t)})};W.__docgenInfo={description:`FagsakSearchIndex

Har ansvar for å vise søkeskjermbildet og å håndtere fagsaksøket
mot server og lagringen av resultatet i klientens state.`,methods:[],displayName:"FagsakSearchIndex"};export{W as F};
