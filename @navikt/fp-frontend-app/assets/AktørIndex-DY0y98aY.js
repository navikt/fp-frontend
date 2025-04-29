import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v,e as f}from"./index.es-B7lqwOF7.js";import{u as q,h as j}from"./fagsakApi-BQsn8dht.js";import{V as c,H as w,P as I,g as R,Y as K}from"./withPanelData-CYtanvWL.js";import{K as m}from"./alleKodeverk-Dp2FRR0Y.js";import{R as A}from"./index-mMUbb89k.js";import{V as T}from"./VisittkortSakIndex-Bw_mY9r7.js";import{M as l}from"./message-BEn4t0Zi.js";import{E as x}from"./IngenBehandlingValgtPanel-CVrfS-FE.js";import{p as E}from"./paths-DIzgMCIA.js";import{u as F}from"./useTrackRouteParam-Cb3rEha0.js";import{u as g}from"./useKodeverk-YxEpftng.js";const y=({aktorInfo:n,fagsakStatuser:r,fagsakYtelseTyper:s,renderSomLenke:d})=>e.jsxs(e.Fragment,{children:[e.jsx(T,{bruker:n.person}),e.jsx(c,{gap:"4",align:"center",margin:"5",children:n.fagsaker.length?n.fagsaker.map(t=>{var i,k;const a=(i=s.find(o=>o.kode===t.fagsakYtelseType))==null?void 0:i.navn,u=(k=r.find(o=>o.kode===t.status))==null?void 0:k.navn;return e.jsx(A.Fragment,{children:d(void 0,`${a} (${t.saksnummer}) ${u}`,t.saksnummer)},t.saksnummer)}):e.jsx(w,{size:"small",children:e.jsx(l,{id:"AktoerGrid.IngenFagsaker"})})})]});y.__docgenInfo={description:"",methods:[],displayName:"AktørGrid",props:{aktorInfo:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsaker: FagsakEnkel[];
  person: Person;
}`,signature:{properties:[{key:"fagsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},fagsakYtelseTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},renderSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"className"},{type:{name:"ReactNode"},name:"fagsakKomponent"},{type:{name:"string"},name:"saksnummer"}],return:{name:"ReactElement"}}},description:""}}};const b={"AktoerGrid.IngenFagsaker":"Har ingen fagsaker i fpsak","AktorSakIndex.UgyldigAktorId":"Ugyldig aktørId: {id}"},S=v(b),p=({valgtAktorId:n,aktorInfo:r,...s})=>e.jsxs(I,{value:S,children:[r&&e.jsx(y,{aktorInfo:r,...s}),!r&&e.jsx(R,{size:"small",children:e.jsx(l,{id:"AktorSakIndex.UgyldigAktorId",values:{id:n}})})]});p.__docgenInfo={description:"",methods:[],displayName:"AktørSakIndex",props:{valgtAktorId:{required:!0,tsType:{name:"string"},description:""},aktorInfo:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsaker: FagsakEnkel[];
  person: Person;
}`,signature:{properties:[{key:"fagsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},fagsakYtelseTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},renderSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"className"},{type:{name:"ReactNode"},name:"fagsakKomponent"},{type:{name:"string"},name:"saksnummer"}],return:{name:"ReactElement"}}},description:""}}};const N=()=>{const{selected:n}=F({paramName:"aktoerId",parse:a=>Number.parseInt(a,10)}),{data:r,status:s}=q(j(n)),d=g(m.FAGSAK_STATUS),t=g(m.FAGSAK_YTELSE);return s==="pending"?e.jsx(f,{}):s==="error"?e.jsx(x,{}):e.jsx(p,{valgtAktorId:n,aktorInfo:r,fagsakStatuser:d,fagsakYtelseTyper:t,renderSomLenke:(a,u,i)=>e.jsx(K,{to:E(i),className:a,children:u})})};N.__docgenInfo={description:"",methods:[],displayName:"AktørIndex"};export{N as A};
