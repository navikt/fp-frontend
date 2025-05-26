import{j as e}from"./index-nufLo1NJ.js";import{r as p}from"./index.es-DJ6BCpYL.js";import{u as v,g as f}from"./fagsakApi-BuY4aD1j.js";import{R as q}from"./index-mMUbb89k.js";import{V as j,H as w,o as c,a1 as I,g as T,a2 as R}from"./withPanelData-DPuHUr4Y.js";import{V as F}from"./VisittkortSakIndex-CeYBt3Vv.js";import{M as l}from"./message-DYZHeMYc.js";import{E}from"./IngenBehandlingValgtPanel-RPEFpYp9.js";import{u as K}from"./useTrackRouteParam-CzGDlf60.js";import{p as x}from"./paths-Bhscivpg.js";import{u as m}from"./useKodeverk-BDHHd7Cd.js";const g=({aktorInfo:n,fagsakStatuser:r,fagsakYtelseTyper:s,renderSomLenke:i})=>e.jsxs(e.Fragment,{children:[e.jsx(F,{bruker:n.person}),e.jsx(j,{gap:"4",align:"center",margin:"5",children:n.fagsaker.length?n.fagsaker.map(a=>{var t,k;const u=(t=s.find(o=>o.kode===a.fagsakYtelseType))==null?void 0:t.navn,d=(k=r.find(o=>o.kode===a.status))==null?void 0:k.navn;return e.jsx(q.Fragment,{children:i(void 0,`${u} (${a.saksnummer}) ${d}`,a.saksnummer)},a.saksnummer)}):e.jsx(w,{size:"small",children:e.jsx(l,{id:"AktoerGrid.IngenFagsaker"})})})]});g.__docgenInfo={description:"",methods:[],displayName:"AktørGrid",props:{aktorInfo:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsaker: FagsakEnkel[];
  person: Person;
}`,signature:{properties:[{key:"fagsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"person",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  fagsakYtelseType: FagsakYtelseType;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}>`}],raw:"FagsakEnkel[]",required:!0}},{key:"person",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  fagsaker: FagsakEnkel[];
  person: Person;
}>`},description:""},fagsakStatuser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'FagsakStatus'>[]"},description:""},fagsakYtelseTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'FagsakYtelseType'>[]"},description:""},renderSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"className"},{type:{name:"ReactNode"},name:"fagsakKomponent"},{type:{name:"string"},name:"saksnummer"}],return:{name:"ReactElement"}}},description:""}}};const A={"AktoerGrid.IngenFagsaker":"Har ingen fagsaker i fpsak","AktorSakIndex.UgyldigAktorId":"Ugyldig aktørId: {id}"},Y=I(A),y=({valgtAktorId:n,aktorInfo:r,...s})=>e.jsxs(c,{value:Y,children:[r&&e.jsx(g,{aktorInfo:r,...s}),!r&&e.jsx(T,{size:"small",children:e.jsx(l,{id:"AktorSakIndex.UgyldigAktorId",values:{id:n}})})]});y.__docgenInfo={description:"",methods:[],displayName:"AktørSakIndex",props:{valgtAktorId:{required:!0,tsType:{name:"string"},description:""},aktorInfo:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsaker: FagsakEnkel[];
  person: Person;
}`,signature:{properties:[{key:"fagsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"person",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  fagsakYtelseType: FagsakYtelseType;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}>`}],raw:"FagsakEnkel[]",required:!0}},{key:"person",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  fagsaker: FagsakEnkel[];
  person: Person;
}>`},description:""},fagsakStatuser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'FagsakStatus'>[]"},description:""},fagsakYtelseTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'FagsakYtelseType'>[]"},description:""},renderSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"className"},{type:{name:"ReactNode"},name:"fagsakKomponent"},{type:{name:"string"},name:"saksnummer"}],return:{name:"ReactElement"}}},description:""}}};const b=()=>{const{selected:n}=K({paramName:"aktoerId"}),{data:r,status:s}=v(f(n)),i=m("FagsakStatus"),a=m("FagsakYtelseType");return s==="pending"?e.jsx(p,{}):s==="error"?e.jsx(E,{}):e.jsx(y,{valgtAktorId:n,aktorInfo:r,fagsakStatuser:i,fagsakYtelseTyper:a,renderSomLenke:(u,d,t)=>e.jsx(R,{to:x(t),className:u,children:d})})};b.__docgenInfo={description:"",methods:[],displayName:"AktørIndex"};export{b as A};
