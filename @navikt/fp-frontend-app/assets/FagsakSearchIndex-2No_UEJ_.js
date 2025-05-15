import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as S,u as T,n as K}from"./fagsakApi-ZyDwP0Ft.js";import{a as b,O as A,P as x,v as P,u as I}from"./index.es-CiVoxrg3.js";import{u as M,V as E,g as m,f as p,h as N,P as _,a1 as L,ac as H}from"./withPanelData-CYqir7Jj.js";import{K as c}from"./alleKodeverk-BGvpDL3l.js";import{T as i}from"./Table-CZlaiPBn.js";import{M as d}from"./message-Kk2bypEd.js";import"./index-mMUbb89k.js";import{S as V}from"./ExclamationmarkTriangleFill-EWpaFPkd.js";import{p as C}from"./paths-Cyj_tZ0o.js";import{a as Y}from"./index-DzvRTBsC.js";const w=({fagsaker:r,selectFagsakCallback:n,alleKodeverk:t})=>e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsxs(i.Row,{children:[e.jsx(i.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FagsakList.Saksnummer"})}),e.jsx(i.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FagsakList.Sakstype"})}),e.jsx(i.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FagsakList.Status"})})]})}),e.jsx(i.Body,{children:r.map(a=>{var s,l;return e.jsxs(i.Row,{onMouseDown:()=>n(a.saksnummer),onKeyDown:()=>n(a.saksnummer),children:[e.jsx(i.DataCell,{children:a.saksnummer}),e.jsx(i.DataCell,{children:((s=t[c.FAGSAK_YTELSE].find(u=>u.kode===a.fagsakYtelseType))==null?void 0:s.navn)??""}),e.jsx(i.DataCell,{children:((l=t[c.FAGSAK_STATUS].find(u=>u.kode===a.status))==null?void 0:l.navn)??""})]},a.saksnummer)})})]});w.__docgenInfo={description:`FagsakList

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
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}>`}],raw:"FagsakEnkel[]"},description:""},selectFagsakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"}],return:{name:"void"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"Record",elements:[{name:"Exclude",elements:[{name:"KodeverkType"},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:`Record<
  Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>,
  KodeverkMedNavn[]
>`},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const D="_container_74un9_1",O="_advarselIcon_74un9_6",q={container:D,advarselIcon:O},z=(r,n)=>!!(r||n===void 0||n.length<1),j=({searchStarted:r,searchResultAccessDenied:n,searchFagsakCallback:t})=>{const a=M(),s=b({defaultValues:{searchString:""}}),l=s.watch("searchString");return e.jsx(A,{formMethods:s,onSubmit:t,className:q.container,children:e.jsxs(E,{gap:"2",children:[e.jsx(m,{size:"small",children:e.jsx(d,{id:"Search.SearchFagsakOrPerson"})}),e.jsxs(p,{gap:"2",align:"end",children:[e.jsx(x,{name:"searchString",label:a.formatMessage({id:"Search.SaksnummerOrPersonId"}),validate:[P]}),e.jsx(N,{variant:"primary",size:"small",loading:r,disabled:z(r,l),children:e.jsx(d,{id:"Search.Search"})})]}),n&&e.jsxs(p,{gap:"2",align:"end",children:[e.jsx(V,{className:q.advarselIcon}),e.jsx(m,{size:"small",children:e.jsx(d,{id:n.feilmelding})})]})]})})};j.__docgenInfo={description:`SearchForm

Definerer søkefelt og tilhørende søkeknapp.`,methods:[],displayName:"SearchForm",props:{searchStarted:{required:!0,tsType:{name:"boolean"},description:""},searchResultAccessDenied:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  feilmelding: string;
}`,signature:{properties:[{key:"feilmelding",value:{name:"string",required:!0}}]}},description:""},searchFagsakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { searchString: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchString: string }",signature:{properties:[{key:"searchString",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const B="_container_gwama_1",G="_label_gwama_9",f={container:B,label:G},R=({fagsaker:r,searchFagsakCallback:n,searchResultReceived:t,selectFagsakCallback:a,searchStarted:s,searchResultAccessDenied:l,alleKodeverk:u})=>e.jsxs("div",{className:f.container,children:[e.jsx(j,{searchFagsakCallback:n,searchStarted:s,searchResultAccessDenied:l}),t&&r.length===0&&e.jsx(m,{size:"small",className:f.label,children:e.jsx(d,{id:"FagsakSearch.ZeroSearchResults"})}),t&&r.length>1&&e.jsx(w,{fagsaker:r,selectFagsakCallback:a,alleKodeverk:u})]});R.__docgenInfo={description:`FagsakSearch

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
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
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
}`,signature:{properties:[{key:"feilmelding",value:{name:"string",required:!0}}]}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"Record",elements:[{name:"Exclude",elements:[{name:"KodeverkType"},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:`Record<
  Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>,
  KodeverkMedNavn[]
>`},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const U={"Search.SearchFagsakOrPerson":"Søk på sak eller person","Search.SaksnummerOrPersonId":"Saksnummer eller fødselsnummer/D-nummer","Search.Search":"Søk","FagsakList.Saksnummer":"Saksnummer","FagsakList.Sakstype":"Sakstype","FagsakList.Status":"Status","FagsakSearch.ZeroSearchResults":"Søket ga ingen treff","Person.Age":"{age} år","Person.Man":"Mann","Person.Woman":"Kvinne","Person.ImageText":"Personinformasjon","ValidationMessage.InvalidSaksnummerOrFodselsnummerFormat":"Ugyldig saksnummer eller fødselsnummer","FagsakSokSakIndex.HarIkkeAdgang":"Har ikke adgang"},Z=L(U),h=({fagsaker:r=[],searchFagsakCallback:n,searchResultReceived:t,selectFagsakCallback:a,searchStarted:s=!1,searchResultAccessDenied:l,alleKodeverk:u})=>e.jsx(_,{value:Z,children:e.jsx(R,{fagsaker:r,searchFagsakCallback:n,searchResultReceived:t,selectFagsakCallback:a,searchStarted:s,searchResultAccessDenied:l,alleKodeverk:u})});h.__docgenInfo={description:"",methods:[],displayName:"FagsakSokSakIndex",props:{fagsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
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
}`,signature:{properties:[{key:"feilmelding",value:{name:"string",required:!0}}]}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"Record",elements:[{name:"Exclude",elements:[{name:"KodeverkType"},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:`Record<
  Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>,
  KodeverkMedNavn[]
>`},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const $=[],Q=()=>{var v;const{kodeverkOptions:r,søkFagsak:n}=S(),{data:t}=T(r()),a=H(),s=o=>{o&&a(C(o))},{mutate:l,data:u=$,status:k,error:g}=I({mutationFn:o=>n(o.searchString),onSuccess:o=>{var y;o.length===1&&s((y=o[0])==null?void 0:y.saksnummer)}}),F=g&&g instanceof Y&&g.response.status===403?(v=g.response)==null?void 0:v.data:void 0;return e.jsx(h,{fagsaker:u,searchFagsakCallback:l,searchResultReceived:k==="success",selectFagsakCallback:s,searchStarted:k==="pending",searchResultAccessDenied:F,alleKodeverk:K(t)})};Q.__docgenInfo={description:`FagsakSearchIndex

Har ansvar for å vise søkeskjermbildet og å håndtere fagsaksøket
mot server og lagringen av resultatet i klientens state.`,methods:[],displayName:"FagsakSearchIndex"};export{Q as F};
