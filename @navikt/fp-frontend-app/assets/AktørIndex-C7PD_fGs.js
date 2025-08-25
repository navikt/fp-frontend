import{j as e,i as g,P as v,b as y,L as p}from"./iframe-DJGNZoZ6.js";import{X as q}from"./index.es-D1YnVz4v.js";import{u as N,r as A}from"./fagsakApi-D1QcCHKG.js";import{V as f}from"./VisittkortSakIndex-5gP7JsHK.js";import{V as c,a as w,B as R}from"./VStack-DP7hrVrJ.js";import{M as d}from"./message-B9fo_cy0.js";import{E}from"./IngenBehandlingValgtPanel-CXtPxZDW.js";import{u as P}from"./useTrackRouteParam-BNLsoyQE.js";import{p as j}from"./paths-Bp0-wKHX.js";import{u as m}from"./useKodeverk-DV4DjbSE.js";const o=({aktorInfo:n,fagsakStatuser:r,fagsakYtelseTyper:t,renderSomLenke:l})=>e.jsxs(e.Fragment,{children:[e.jsx(f,{bruker:n.person}),e.jsx(c,{gap:"space-16",align:"center",margin:"5",children:n.fagsaker.length?n.fagsaker.map(a=>{const u=t.find(s=>s.kode===a.fagsakYtelseType)?.navn,i=r.find(s=>s.kode===a.status)?.navn;return e.jsx(g.Fragment,{children:l(void 0,`${u} (${a.saksnummer}) ${i}`,a.saksnummer)},a.saksnummer)}):e.jsx(w,{size:"small",level:"2",children:e.jsx(d,{id:"AktoerGrid.IngenFagsaker"})})})]});o.__docgenInfo={description:"",methods:[],displayName:"AktørGrid",props:{aktorInfo:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  person: PersonDto;
  fagsaker: Array<FagsakSøkDto>;
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"person",value:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"fagsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: 'ES' | 'FP' | 'SVP' | '-';
  status: 'OPPR' | 'UBEH' | 'LOP' | 'AVSLU';
  relasjonsRolleType: 'EKTE' | 'BARN' | 'FARA' | 'MORA' | 'REPA' | 'MMOR' | 'ANPA' | '-';
  aktørId: string;
  person: PersonDto;
  barnFødt: string;
  opprettet: string;
  endret?: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:"'EKTE' | 'BARN' | 'FARA' | 'MORA' | 'REPA' | 'MMOR' | 'ANPA' | '-'",elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"person",value:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}}]}}],raw:"Array<FagsakSøkDto>",required:!0}}]}},description:""},fagsakStatuser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<'FagsakYtelseType'>[]"},description:""},renderSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"className"},{type:{name:"ReactNode"},name:"fagsakKomponent"},{type:{name:"string"},name:"saksnummer"}],return:{name:"ReactElement"}}},description:""}}};const S={"AktoerGrid.IngenFagsaker":"Har ingen fagsaker i fpsak","AktorSakIndex.UgyldigAktorId":"Ugyldig aktørId: {id}"},T=y(S),k=({valgtAktorId:n,aktorInfo:r,...t})=>e.jsxs(v,{value:T,children:[r&&e.jsx(o,{aktorInfo:r,...t}),!r&&e.jsx(R,{size:"small",children:e.jsx(d,{id:"AktorSakIndex.UgyldigAktorId",values:{id:n}})})]});k.__docgenInfo={description:"",methods:[],displayName:"AktørSakIndex",props:{valgtAktorId:{required:!0,tsType:{name:"string"},description:""},aktorInfo:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  person: PersonDto;
  fagsaker: Array<FagsakSøkDto>;
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"person",value:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"fagsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: 'ES' | 'FP' | 'SVP' | '-';
  status: 'OPPR' | 'UBEH' | 'LOP' | 'AVSLU';
  relasjonsRolleType: 'EKTE' | 'BARN' | 'FARA' | 'MORA' | 'REPA' | 'MMOR' | 'ANPA' | '-';
  aktørId: string;
  person: PersonDto;
  barnFødt: string;
  opprettet: string;
  endret?: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:"'EKTE' | 'BARN' | 'FARA' | 'MORA' | 'REPA' | 'MMOR' | 'ANPA' | '-'",elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"person",value:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}}]}}],raw:"Array<FagsakSøkDto>",required:!0}}]}},description:""},fagsakStatuser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<'FagsakYtelseType'>[]"},description:""},renderSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"className"},{type:{name:"ReactNode"},name:"fagsakKomponent"},{type:{name:"string"},name:"saksnummer"}],return:{name:"ReactElement"}}},description:""}}};const M=()=>{const{selected:n}=P({paramName:"aktoerId"}),{data:r,status:t}=N(A(n)),l=m("FagsakStatus"),a=m("FagsakYtelseType");return t==="pending"?e.jsx(q,{}):t==="error"?e.jsx(E,{}):e.jsx(k,{valgtAktorId:n,aktorInfo:r,fagsakStatuser:l,fagsakYtelseTyper:a,renderSomLenke:(u,i,s)=>e.jsx(p,{to:j(s),className:u,children:i})})};M.__docgenInfo={description:"",methods:[],displayName:"AktørIndex"};export{M as A};
