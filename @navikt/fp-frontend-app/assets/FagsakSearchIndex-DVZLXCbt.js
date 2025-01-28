import{j as e}from"./jsx-runtime-CLpGMVip.js";import{a as R,u as T,n as b}from"./initFetch-D7cT7gdG.js";import{a as F,r as K,H as x,p as A,u as I}from"./index.es-BPvqjJ4A.js";import{h as M,V as N,B as k,H as v,k as _,P,U as E}from"./withQueryClient-BhxeJHbr.js";import{M as u,f as V,n as O}from"./index.es-DSZ6vyNz.js";import"./aktivitetStatus-02fOJoqz.js";import{K as y}from"./alleKodeverk-Ck9zwXaq.js";import{g as C}from"./kodeverkUtils-DLZgokMR.js";import{T as s}from"./Table-B0HROgQp.js";import"./index-B5OHeJSP.js";import{S as Y}from"./ExclamationmarkTriangleFill-CsTh_wEM.js";import{p as D}from"./paths-DF3DToEQ.js";import{a as H}from"./index-DqeTBbD1.js";const q=({fagsaker:r,selectFagsakCallback:a,alleKodeverk:t})=>{const i=C(t);return e.jsxs(s,{children:[e.jsx(s.Header,{children:e.jsxs(s.Row,{children:[e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FagsakList.Saksnummer"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FagsakList.Sakstype"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FagsakList.Status"})})]})}),e.jsx(s.Body,{children:r.map(n=>e.jsxs(s.Row,{onMouseDown:()=>a(n.saksnummer),onKeyDown:()=>a(n.saksnummer),children:[e.jsx(s.DataCell,{children:n.saksnummer}),e.jsx(s.DataCell,{children:i(n.fagsakYtelseType,y.FAGSAK_YTELSE)}),e.jsx(s.DataCell,{children:i(n.status,y.FAGSAK_STATUS)})]},n.saksnummer))})]})};q.__docgenInfo={description:`FagsakList

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const L="_container_74un9_1",z="_advarselIcon_74un9_6",c={container:L,advarselIcon:z},B=(r,a)=>!!(r||a===void 0||a.length<1),j=({searchStarted:r,searchResultAccessDenied:a,searchFagsakCallback:t})=>{const i=M(),n=F({defaultValues:{searchString:""}}),d=n.watch("searchString");return e.jsx(K,{formMethods:n,onSubmit:t,className:c.container,children:e.jsxs(N,{gap:"2",children:[e.jsx(k,{size:"small",children:e.jsx(u,{id:"Search.SearchFagsakOrPerson"})}),e.jsxs(v,{gap:"2",align:"end",children:[e.jsx(x,{name:"searchString",label:i.formatMessage({id:"Search.SaksnummerOrPersonId"}),validate:[A]}),e.jsx(_,{variant:"primary",size:"small",loading:r,disabled:B(r,d),children:e.jsx(u,{id:"Search.Search"})})]}),a&&e.jsxs(v,{gap:"2",align:"end",children:[e.jsx(Y,{className:c.advarselIcon}),e.jsx(k,{size:"small",children:e.jsx(u,{id:a.feilmelding})})]})]})})};j.__docgenInfo={description:`SearchForm

Definerer søkefelt og tilhørende søkeknapp.`,methods:[],displayName:"SearchForm",props:{searchStarted:{required:!0,tsType:{name:"boolean"},description:""},searchResultAccessDenied:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  feilmelding: string;
}`,signature:{properties:[{key:"feilmelding",value:{name:"string",required:!0}}]}},description:""},searchFagsakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { searchString: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchString: string }",signature:{properties:[{key:"searchString",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const U="_container_gwama_1",G="_label_gwama_9",f={container:U,label:G},w=({fagsaker:r,searchFagsakCallback:a,searchResultReceived:t,selectFagsakCallback:i,searchStarted:n,searchResultAccessDenied:d,alleKodeverk:g})=>e.jsxs("div",{className:f.container,children:[e.jsx(j,{searchFagsakCallback:a,searchStarted:n,searchResultAccessDenied:d}),t&&r.length===0&&e.jsx(k,{size:"small",className:f.label,children:e.jsx(u,{id:"FagsakSearch.ZeroSearchResults"})}),e.jsx(V,{eightPx:!0}),t&&r.length>1&&e.jsx(q,{fagsaker:r,selectFagsakCallback:i,alleKodeverk:g})]});w.__docgenInfo={description:`FagsakSearch

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Z={"Search.SearchFagsakOrPerson":"Søk på sak eller person","Search.SaksnummerOrPersonId":"Saksnummer eller fødselsnummer/D-nummer","Search.Search":"Søk","FagsakList.Saksnummer":"Saksnummer","FagsakList.Sakstype":"Sakstype","FagsakList.Status":"Status","FagsakSearch.ZeroSearchResults":"Søket ga ingen treff","Person.Age":"{age} år","Person.Man":"Mann","Person.Woman":"Kvinne","Person.ImageText":"Personinformasjon","ValidationMessage.InvalidSaksnummerOrFodselsnummerFormat":"Ugyldig saksnummer eller fødselsnummer","FagsakSokSakIndex.HarIkkeAdgang":"Har ikke adgang"},$=O(Z),h=({fagsaker:r=[],searchFagsakCallback:a,searchResultReceived:t,selectFagsakCallback:i,searchStarted:n=!1,searchResultAccessDenied:d,alleKodeverk:g})=>e.jsx(P,{value:$,children:e.jsx(w,{fagsaker:r,searchFagsakCallback:a,searchResultReceived:t,selectFagsakCallback:i,searchStarted:n,searchResultAccessDenied:d,alleKodeverk:g})});h.__docgenInfo={description:"",methods:[],displayName:"FagsakSokSakIndex",props:{fagsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Q=[],W=()=>{var p;const{kodeverkOptions:r,søkFagsak:a}=R(),{data:t}=T(r()),i=E(),n=o=>{o&&i(D(o))},{mutate:d,data:g=Q,status:m,error:l}=I({mutationFn:o=>a(o.searchString),onSuccess:o=>{o.length===1&&n(o[0].saksnummer)}}),S=l&&l instanceof H&&l.response.status===403?(p=l.response)==null?void 0:p.data:void 0;return e.jsx(h,{fagsaker:g,searchFagsakCallback:d,searchResultReceived:m==="success",selectFagsakCallback:n,searchStarted:m==="pending",searchResultAccessDenied:S,alleKodeverk:b(t)})};W.__docgenInfo={description:`FagsakSearchIndex

Har ansvar for å vise søkeskjermbildet og å håndtere fagsaksøket
mot server og lagringen av resultatet i klientens state.`,methods:[],displayName:"FagsakSearchIndex"};export{W as F};
