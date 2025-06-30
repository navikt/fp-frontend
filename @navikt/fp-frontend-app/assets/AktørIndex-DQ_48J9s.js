import{j as e,i as p,P as v,b as f,L as q}from"./iframe-CieR7k8J.js";import{X as j}from"./index.es-BO-o7llL.js";import{u as w,r as c}from"./fagsakApi-ByEq8Mzo.js";import{V as I}from"./VisittkortSakIndex-BPWt_aDh.js";import{V as T,a as F,B as R}from"./VStack-CaagOIyh.js";import{M as l}from"./message-C7ei2db-.js";import{E}from"./IngenBehandlingValgtPanel-C8uAfJYl.js";import{u as K}from"./useTrackRouteParam-CfJ3fE5u.js";import{p as x}from"./paths-Crn_Q2sD.js";import{u as m}from"./useKodeverk-Dx2RqYq5.js";const g=({aktorInfo:n,fagsakStatuser:r,fagsakYtelseTyper:s,renderSomLenke:u})=>e.jsxs(e.Fragment,{children:[e.jsx(I,{bruker:n.person}),e.jsx(T,{gap:"4",align:"center",margin:"5",children:n.fagsaker.length?n.fagsaker.map(a=>{var t,k;const i=(t=s.find(o=>o.kode===a.fagsakYtelseType))==null?void 0:t.navn,d=(k=r.find(o=>o.kode===a.status))==null?void 0:k.navn;return e.jsx(p.Fragment,{children:u(void 0,`${i} (${a.saksnummer}) ${d}`,a.saksnummer)},a.saksnummer)}):e.jsx(F,{size:"small",children:e.jsx(l,{id:"AktoerGrid.IngenFagsaker"})})})]});g.__docgenInfo={description:"",methods:[],displayName:"AktørGrid",props:{aktorInfo:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsaker: FagsakEnkel[];
  person: Person;
}`,signature:{properties:[{key:"fagsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  status: FagsakStatus;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"status",value:{name:"FagsakStatus",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"person",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  status: FagsakStatus;
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
}>`}],raw:"KodeverkMedNavn<'FagsakYtelseType'>[]"},description:""},renderSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"className"},{type:{name:"ReactNode"},name:"fagsakKomponent"},{type:{name:"string"},name:"saksnummer"}],return:{name:"ReactElement"}}},description:""}}};const S={"AktoerGrid.IngenFagsaker":"Har ingen fagsaker i fpsak","AktorSakIndex.UgyldigAktorId":"Ugyldig aktørId: {id}"},A=f(S),y=({valgtAktorId:n,aktorInfo:r,...s})=>e.jsxs(v,{value:A,children:[r&&e.jsx(g,{aktorInfo:r,...s}),!r&&e.jsx(R,{size:"small",children:e.jsx(l,{id:"AktorSakIndex.UgyldigAktorId",values:{id:n}})})]});y.__docgenInfo={description:"",methods:[],displayName:"AktørSakIndex",props:{valgtAktorId:{required:!0,tsType:{name:"string"},description:""},aktorInfo:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsaker: FagsakEnkel[];
  person: Person;
}`,signature:{properties:[{key:"fagsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  status: FagsakStatus;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"status",value:{name:"FagsakStatus",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"person",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  status: FagsakStatus;
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
}>`}],raw:"KodeverkMedNavn<'FagsakYtelseType'>[]"},description:""},renderSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"className"},{type:{name:"ReactNode"},name:"fagsakKomponent"},{type:{name:"string"},name:"saksnummer"}],return:{name:"ReactElement"}}},description:""}}};const Y=()=>{const{selected:n}=K({paramName:"aktoerId"}),{data:r,status:s}=w(c(n)),u=m("FagsakStatus"),a=m("FagsakYtelseType");return s==="pending"?e.jsx(j,{}):s==="error"?e.jsx(E,{}):e.jsx(y,{valgtAktorId:n,aktorInfo:r,fagsakStatuser:u,fagsakYtelseTyper:a,renderSomLenke:(i,d,t)=>e.jsx(q,{to:x(t),className:i,children:d})})};Y.__docgenInfo={description:"",methods:[],displayName:"AktørIndex"};export{Y as A};
