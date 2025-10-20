import{j as e,h as g,P as v,e as p,L as y}from"./iframe-tcNNAsAs.js";import{Z as f}from"./index.es-DihP2Dga.js";import{u as q,f as _}from"./fagsakApi-Dui0hWx_.js";import{V as c}from"./VisittkortSakIndex-SnXEwZao.js";import{V as j,a as N,B as A}from"./VStack-Cua8RPi-.js";import{M as o}from"./message-Bb5nUYOH.js";import{E as w}from"./IngenBehandlingValgtPanel-DSnRKlOh.js";import{u as R}from"./useTrackRouteParam-CfArMp-V.js";import{p as E}from"./paths-Is2FXp5Q.js";import{u as d}from"./useKodeverk-DZEPZxnb.js";const k=({aktorInfo:n,fagsakStatuser:r,fagsakYtelseTyper:t,renderSomLenke:l})=>e.jsxs(e.Fragment,{children:[e.jsx(c,{bruker:n.person}),e.jsx(j,{gap:"space-16",align:"center",margin:"5",children:n.fagsaker.length?n.fagsaker.map(a=>{const i=t.find(s=>s.kode===a.fagsakYtelseType)?.navn,u=r.find(s=>s.kode===a.status)?.navn;return e.jsx(g.Fragment,{children:l(void 0,`${i} (${a.saksnummer}) ${u}`,a.saksnummer)},a.saksnummer)}):e.jsx(N,{size:"small",level:"2",children:e.jsx(o,{id:"AktoerGrid.IngenFagsaker"})})})]});k.__docgenInfo={description:"",methods:[],displayName:"AktørGrid",props:{aktorInfo:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  fagsaker: Array<tjenester_fagsak_dto_FagsakSøkDto>;
  person: tjenester_fagsak_dto_PersonDto;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"fagsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string;
  barnFødt: string;
  endret?: string;
  fagsakYtelseType: foreldrepenger_behandlingslager_fagsak_FagsakYtelseType;
  opprettet?: string;
  person: tjenester_fagsak_dto_PersonDto;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  saksnummer: string;
  status: foreldrepenger_behandlingslager_fagsak_FagsakStatus;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettet",value:{name:"string",required:!1}},{key:"person",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakSøkDto>",required:!0}},{key:"person",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}}]}},description:""},fagsakStatuser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<'FagsakYtelseType'>[]"},description:""},renderSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"className"},{type:{name:"ReactNode"},name:"fagsakKomponent"},{type:{name:"string"},name:"saksnummer"}],return:{name:"ReactElement"}}},description:""}}};const T={"AktoerGrid.IngenFagsaker":"Har ingen fagsaker i fpsak","AktorSakIndex.UgyldigAktorId":"Ugyldig aktørId: {id}"},S=p(T),m=({valgtAktorId:n,aktorInfo:r,...t})=>e.jsxs(v,{value:S,children:[r&&e.jsx(k,{aktorInfo:r,...t}),!r&&e.jsx(A,{size:"small",children:e.jsx(o,{id:"AktorSakIndex.UgyldigAktorId",values:{id:n}})})]});m.__docgenInfo={description:"",methods:[],displayName:"AktørSakIndex",props:{valgtAktorId:{required:!0,tsType:{name:"string"},description:""},aktorInfo:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  fagsaker: Array<tjenester_fagsak_dto_FagsakSøkDto>;
  person: tjenester_fagsak_dto_PersonDto;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"fagsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string;
  barnFødt: string;
  endret?: string;
  fagsakYtelseType: foreldrepenger_behandlingslager_fagsak_FagsakYtelseType;
  opprettet?: string;
  person: tjenester_fagsak_dto_PersonDto;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  saksnummer: string;
  status: foreldrepenger_behandlingslager_fagsak_FagsakStatus;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettet",value:{name:"string",required:!1}},{key:"person",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakSøkDto>",required:!0}},{key:"person",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}}]}},description:""},fagsakStatuser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<'FagsakYtelseType'>[]"},description:""},renderSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"className"},{type:{name:"ReactNode"},name:"fagsakKomponent"},{type:{name:"string"},name:"saksnummer"}],return:{name:"ReactElement"}}},description:""}}};const I=()=>{const{selected:n}=R({paramName:"aktoerId"}),{data:r,status:t}=q(_(n)),l=d("FagsakStatus"),a=d("FagsakYtelseType");return t==="pending"?e.jsx(f,{}):t==="error"?e.jsx(w,{}):e.jsx(m,{valgtAktorId:n,aktorInfo:r,fagsakStatuser:l,fagsakYtelseTyper:a,renderSomLenke:(i,u,s)=>e.jsx(y,{to:E(s),className:i,children:u})})};I.__docgenInfo={description:"",methods:[],displayName:"AktørIndex"};export{I as A};
