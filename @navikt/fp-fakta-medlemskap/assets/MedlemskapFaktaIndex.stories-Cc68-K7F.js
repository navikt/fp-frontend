import{j as e}from"./dayjs.min-BmqYrIeh.js";import{u as rn,H as me,x as pe,W as A,D as ke,U as V,a as $,z as ye,M as g,K as O,O as N,b as S,c as C,L as Ke,B as E,Z as ve,T as be,p as fe,r as sn,A as i,y as v,F as z,d as Y,S as an,V as tn,h as X,R as ee,g as ln,e as on,f as qe,i as dn,Y as un,j as gn,k as ue,l as mn,v as pn,m as B,t as kn,P as yn,n as vn,o as M,q as F,s as bn,w as fn,C as qn}from"./style-DL7X3mKB.js";import{r as k}from"./index-uubelm5h.js";import"./v4-CQkTLCs1.js";import"./index-BdzLX9oW.js";const jn={NORGE:"NOR"};var cn=function(n,r){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(s[t[a]]=n[t[a]]);return s};const Tn=k.forwardRef((n,r)=>{var{title:s,titleId:t}=n,a=cn(n,["title","titleId"]);let o=rn();return o=s?t||"title-"+o:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":o},a),s?k.createElement("title",{id:o},s):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var se=(n=>(n.BRUKERS_ANDEL="BRUKERS_ANDEL",n.FRILANS="FRILANS",n.EGEN_NÆRING="EGEN_NÆRING",n))(se||{});se.BRUKERS_ANDEL;se.FRILANS;se.EGEN_NÆRING;var D=(n=>(n.OPPRETTET="OPPR",n.UTFORT="UTFO",n.AVBRUTT="AVBR",n))(D||{});const Pn=n=>n==="OPPR",Rn=["MedlemskapEndringerTabell.GjeldeneFom","MedlemskapEndringerTabell.Opplysning"],Ue=({perioder:n,velgPeriodeCallback:r,valgtPeriodeVurderingsdato:s,aksjonspunkter:t})=>e.jsx(me,{headerTextCodes:Rn,children:n.map(a=>e.jsxs(pe,{id:a.vurderingsdato,onMouseDown:r,onKeyDown:r,isSelected:a.vurderingsdato===s,model:a,isApLeftBorder:a.aksjonspunkter.some(o=>t.some(l=>l.definisjon===o&&l.status===D.OPPRETTET))&&a.begrunnelse===void 0,children:[e.jsx(A,{children:e.jsx(ke,{dateString:a.vurderingsdato})}),e.jsx(A,{children:a.årsaker.join()})]},a.vurderingsdato))});Ue.__docgenInfo={description:"",methods:[],displayName:"MedlemskapEndringerTabell",props:{perioder:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"personopplysningBruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"personopplysningAnnenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"årsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`}],raw:"MedlemPeriode[]"},description:""},valgtPeriodeVurderingsdato:{required:!1,tsType:{name:"string"},description:""},velgPeriodeCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(_p: React.KeyboardEvent | React.MouseEvent, id?: string, periode?: MedlemPeriode) => void",signature:{arguments:[{type:{name:"union",raw:"React.KeyboardEvent | React.MouseEvent",elements:[{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"},{name:"ReactMouseEvent",raw:"React.MouseEvent"}]},name:"_p"},{type:{name:"string"},name:"id"},{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"personopplysningBruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"personopplysningAnnenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"årsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`},name:"periode"}],return:{name:"void"}}},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]"},description:""}}};const hn=["OppholdstillatelseTabell.Periode","OppholdstillatelseTabell.Type"],Ge=({oppholdstillatelse:n,alleKodeverk:r})=>e.jsx(V,{title:$().formatMessage({id:"OppholdstillatelseTabell.Overskrift"}),children:e.jsx(me,{headerTextCodes:hn,noHover:!0,children:n.map(s=>{var t;return e.jsxs(pe,{children:[e.jsxs(A,{children:[s.fom&&e.jsx(ye,{dateStringFom:s.fom,dateStringTom:s.tom}),!s.fom&&e.jsxs("span",{children:[e.jsx(g,{id:"OppholdstillatelseTabell.Ukjent"}),"-",e.jsx(ke,{dateString:s.tom})]})]}),e.jsx(A,{children:(t=r[O.OPPHOLDSTILLATELSE_TYPE].find(a=>a.kode===s.oppholdstillatelseType))==null?void 0:t.navn})]},s.fom+s.tom)})})});Ge.__docgenInfo={description:"",methods:[],displayName:"OppholdstillatelseTabell",props:{oppholdstillatelse:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom: string;
  oppholdstillatelseType: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdstillatelseType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom?: string;
  tom: string;
  oppholdstillatelseType: string;
}>`}],raw:"Oppholdstillatelse[]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Q=n=>n??"",wn=(n="",r="",s="",t="")=>`${Q(n)}, ${Q(r)} ${Q(s)} ${Q(t)}`,He=(n=[])=>n.reduce((r,s)=>{if(!s.adresseType||s.adresseType===N.UKJENT_ADRESSE)return{...r,[N.BOSTEDSADRESSE]:"UKJENT"};const t=[s.adresselinje1,s.adresselinje2,s.adresselinje3].filter(o=>!!o).join(", ");if(!t)return r;const a=s.land!==jn.NORGE?s.land:void 0;return{...r,[s.adresseType]:wn(t,s.postNummer,s.poststed,a).trim()}},{}),An="_dodEtikett_izib4_1",On="_defaultBostedSoker_izib4_6",Mn="_etikettMargin_izib4_10",Vn="_paddingBottom_izib4_14",_={dodEtikett:An,defaultBostedSoker:On,etikettMargin:Mn,paddingBottom:Vn},Sn=n=>{const r=He(n);return r[N.POSTADRESSE]||r[N.BOSTEDSADRESSE]||"-"},Bn=n=>{const r=He(n);return r[N.POSTADRESSE_UTLAND]||r[N.MIDLERTIDIG_POSTADRESSE_UTLAND]||"-"},ge=({personopplysninger:n,sokerTypeText:r,regionTypes:s,personstatusTypes:t})=>{var o,l;const a=$();return e.jsx("div",{className:_.defaultBostedSoker,children:e.jsxs(S,{justify:"space-between",children:[e.jsxs("div",{children:[e.jsx(C,{children:r}),e.jsx(Ke,{size:"small",children:n.navn?n.navn:"-"}),e.jsx(E,{size:"small",className:_.paddingBottom,children:Sn(n.adresser)}),e.jsx(C,{children:e.jsx(g,{id:"BostedSokerView.ForeignAddresse"})}),e.jsx(E,{size:"small",children:Bn(n.adresser)})]}),e.jsxs("div",{children:[n.personstatus&&e.jsx("div",{className:_.etikettMargin,children:e.jsx(ve,{content:a.formatMessage({id:"Personstatus.Hjelpetekst"}),alignBottom:!0,children:e.jsx(be,{className:n.personstatus===fe.DOD?_.dodEtikett:"",variant:"warning",children:n.personstatus===fe.UDEFINERT?a.formatMessage({id:"Personstatus.Ukjent"}):(o=t.find(m=>m.kode===n.personstatus))==null?void 0:o.navn})})}),n.region&&n.region!==sn.UDEFINERT&&e.jsx("div",{className:_.etikettMargin,children:e.jsx(ve,{content:a.formatMessage({id:"BostedSokerView.Region"}),alignBottom:!0,children:e.jsx(be,{variant:"warning",children:(l=s.find(m=>m.kode===n.region))==null?void 0:l.navn})})})]})]})})};ge.__docgenInfo={description:"",methods:[],displayName:"MedlemskapBostedSokerView",props:{personopplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`},description:""},sokerTypeText:{required:!0,tsType:{name:"string"},description:""},regionTypes:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},personstatusTypes:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Nn="_dodEtikett_1a9q7_1",En="_col_1a9q7_6",Fn="_exclamationmarkIcon_1a9q7_10",Dn="_checkmarkIcon_1a9q7_16",ne={dodEtikett:Nn,col:En,exclamationmarkIcon:Fn,checkmarkIcon:Dn},In=n=>{const r=n.toLowerCase();return r.charAt(0).toUpperCase()+r.slice(1)},de=(n,r)=>n!==void 0?e.jsxs(S,{gap:"4",children:[n===!0&&e.jsx(Tn,{className:ne.checkmarkIcon,title:r.formatMessage({id:"OppholdINorgeOgAdresserFaktaPanel.Opphold"})}),n!==!0&&e.jsx(an,{className:ne.exclamationmarkIcon,title:r.formatMessage({id:"OppholdINorgeOgAdresserFaktaPanel.IkkeOpphold"})}),e.jsx(E,{size:"small",children:e.jsx(g,{id:n===!0?"OppholdINorgeOgAdresserFaktaPanel.Yes":"OppholdINorgeOgAdresserFaktaPanel.No"})})]}):null,je=n=>n&&n.map(r=>e.jsx("div",{children:e.jsxs(S,{gap:"4",children:[e.jsx(E,{size:"small",children:In(r.landNavn)}),e.jsx(E,{size:"small",children:e.jsx(ye,{showTodayString:!0,dateStringFom:r.fom,dateStringTom:r.tom})})]})},`${r.landNavn}${r.fom}${r.tom}`)),ae=({soknad:n,valgtPeriode:r,aksjonspunkter:s,readOnly:t,alleKodeverk:a,alleMerknaderFraBeslutter:o})=>{var q,f,h,T,j;const l=$(),m=r.aksjonspunkter.find(u=>u===i.AVKLAR_OM_BRUKER_ER_BOSATT),p=s.find(u=>m===u.definisjon),y=m&&p?p.status!==D.OPPRETTET:!1,{personopplysningBruker:b,personopplysningAnnenPart:d}=r,w=k.useCallback((...u)=>e.jsx("b",{children:u}),[]);return e.jsx(V,{merknaderFraBeslutter:o[i.AVKLAR_OM_BRUKER_ER_BOSATT],children:e.jsxs(S,{children:[e.jsx("div",{className:ne.col,children:e.jsxs(V,{withoutBorder:!0,title:l.formatMessage({id:"OppholdINorgeOgAdresserFaktaPanel.OppholdINorge"}),children:[e.jsx(C,{children:e.jsx(g,{id:"OppholdINorgeOgAdresserFaktaPanel.StayingInNorway"})}),e.jsx(v,{fourPx:!0}),de((q=n==null?void 0:n.oppgittTilknytning)==null?void 0:q.oppholdNorgeNa,l),e.jsx(v,{sixteenPx:!0}),e.jsx(C,{children:e.jsx(g,{id:"OppholdINorgeOgAdresserFaktaPanel.StayingInNorwayLast12"})}),e.jsx(v,{fourPx:!0}),de((f=n==null?void 0:n.oppgittTilknytning)==null?void 0:f.oppholdSistePeriode,l),e.jsx(v,{eightPx:!0}),je((h=n==null?void 0:n.oppgittTilknytning)==null?void 0:h.utlandsoppholdFor),e.jsx(v,{sixteenPx:!0}),e.jsx(C,{children:e.jsx(g,{id:"OppholdINorgeOgAdresserFaktaPanel.StayingInNorwayNext12"})}),e.jsx(v,{fourPx:!0}),de((T=n==null?void 0:n.oppgittTilknytning)==null?void 0:T.oppholdNestePeriode,l),e.jsx(v,{eightPx:!0}),je((j=n==null?void 0:n.oppgittTilknytning)==null?void 0:j.utlandsoppholdEtter)]})}),e.jsxs("div",{className:ne.col,children:[e.jsxs(V,{withoutBorder:!0,title:l.formatMessage({id:"OppholdINorgeOgAdresserFaktaPanel.BosattAdresser"}),children:[e.jsx(ge,{sokerTypeText:l.formatMessage({id:"BostedSokerFaktaIndex.Soker"}),personopplysninger:b,regionTypes:a[O.REGION],personstatusTypes:a[O.PERSONSTATUS_TYPE]}),d&&e.jsx(ge,{sokerTypeText:l.formatMessage({id:"OppholdINorgeOgAdresserFaktaPanel.Parent"}),personopplysninger:d,regionTypes:a[O.REGION],personstatusTypes:a[O.PERSONSTATUS_TYPE]})]}),m&&e.jsx(z,{name:"bosattVurdering",hideLegend:!0,validate:[Y],isReadOnly:t,isHorizontal:!0,isEdited:y,isTrueOrFalseSelection:!0,radios:[{label:l.formatMessage({id:"OppholdINorgeOgAdresserFaktaPanel.ResidingInNorway"}),value:"true"},{label:e.jsx(g,{id:"OppholdINorgeOgAdresserFaktaPanel.NotResidingInNorway",values:{b:w}}),value:"false"}]})]})]})})};ae.buildInitialValues=n=>({bosattVurdering:n.bosattVurdering||n.bosattVurdering===!1?n.bosattVurdering:void 0});ae.__docgenInfo={description:`OppholdINorgeOgAdresserFaktaPanel

Er tilknyttet faktapanelet for medlemskap.
Viser opphold i innland og utland som er relevante for søker. ReadOnly.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"periode",optional:!1,type:null}],returns:null}],displayName:"OppholdINorgeOgAdresserFaktaPanel"};const _n=["PerioderMedMedlemskapFaktaPanel.Period","PerioderMedMedlemskapFaktaPanel.Coverage","PerioderMedMedlemskapFaktaPanel.Status","PerioderMedMedlemskapFaktaPanel.Date"],te=({valgtPeriode:n,readOnly:r,alleKodeverk:s,alleMerknaderFraBeslutter:t,medlemskap:a,soknad:o,aksjonspunkter:l})=>{const m=$(),p=s[O.MEDLEMSKAP_MANUELL_VURDERING_TYPE],y=k.useMemo(()=>[...p].sort((u,P)=>u.navn.localeCompare(P.navn)),[]),b=k.useMemo(()=>[...a.medlemskapPerioder].sort((u,P)=>new Date(u.fom).getTime()-new Date(P.fom).getTime()),[a.medlemskapPerioder]);if(!b||b.length===0)return e.jsx(V,{title:m.formatMessage({id:"PerioderMedMedlemskapFaktaPanel.ApplicationInformation"}),children:e.jsx(E,{size:"small",children:e.jsx(g,{id:"PerioderMedMedlemskapFaktaPanel.NoInformation"})})});const d=n.aksjonspunkter.find(u=>u===i.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE),w=l.find(u=>d===u.definisjon),q=w?w.status!==D.OPPRETTET:!1,f=ln(s),h=o.fodselsdatoer?Object.values(o.fodselsdatoer)[0]:void 0,{omsorgsovertakelseDato:T,termindato:j}=o;return e.jsxs(V,{title:m.formatMessage({id:"PerioderMedMedlemskapFaktaPanel.ApplicationInformation"}),merknaderFraBeslutter:t[i.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE],children:[e.jsx(me,{headerTextCodes:_n,noHover:!0,children:b.map(u=>{const P=f(u.dekningType,O.MEDLEMSKAP_DEKNING),J=f(u.medlemskapType,O.MEDLEMSKAP_TYPE),Z=u.fom+u.tom+P+J+u.beslutningsdato;return e.jsxs(pe,{id:Z,children:[e.jsx(A,{children:e.jsx(ye,{showTodayString:!0,dateStringFom:u.fom,dateStringTom:u.tom})}),e.jsx(A,{children:P}),e.jsx(A,{children:J}),e.jsx(A,{children:u.beslutningsdato?e.jsx(ke,{dateString:u.beslutningsdato}):null})]},Z)})}),e.jsxs(tn,{children:[e.jsx(S,{children:d&&e.jsx(z,{name:"medlemskapManuellVurderingType",hideLegend:!0,isEdited:q,validate:[Y],isReadOnly:r,isHorizontal:!0,radios:y.map(u=>({label:u.navn,value:u.kode}))})}),e.jsxs(S,{justify:"end",children:[h&&e.jsx(g,{id:"PerioderMedMedlemskapFaktaPanel.Fodselsdato",values:{dato:X(h).format(ee)}}),j&&e.jsx(g,{id:"PerioderMedMedlemskapFaktaPanel.Termindato",values:{dato:X(j).format(ee)}}),T&&e.jsx(g,{id:"PerioderMedMedlemskapFaktaPanel.Omsorgsovertakelse",values:{dato:X(T).format(ee)}})]})]})]})};te.buildInitialValues=(n,r)=>r!==null?{medlemskapManuellVurderingType:n.medlemskapManuellVurderingType}:{};te.__docgenInfo={description:`PerioderMedMedlemskapFaktaPanel

Setter opp aksjonspunktet for avklaring av perioder (Medlemskapsvilkåret).`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"periode",optional:!1,type:null},{name:"medlemskapPerioder",optional:!1,type:null}],returns:null}],displayName:"PerioderMedMedlemskapFaktaPanel"};const ie=({valgtPeriode:n,aksjonspunkter:r,readOnly:s,alleMerknaderFraBeslutter:t})=>{const a=$(),{watch:o}=on(),l=o("erEosBorger"),m=n.aksjonspunkter.filter(d=>d===i.AVKLAR_OPPHOLDSRETT||d===i.AVKLAR_LOVLIG_OPPHOLD),p=r.find(d=>m.includes(d.definisjon)),y=(p==null?void 0:p.status)!==D.OPPRETTET,b=k.useCallback((...d)=>e.jsx("b",{children:d}),[]);return e.jsxs(V,{title:a.formatMessage({id:"StatusForBorgerFaktaPanel.ApplicationInformation"}),merknaderFraBeslutter:p!=null&&p.definisjon?t[p.definisjon]:void 0,children:[e.jsx(z,{name:"erEosBorger",hideLegend:!0,validate:[Y],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"StatusForBorgerFaktaPanel.CitizenEEA"}),value:"true"},{label:a.formatMessage({id:"StatusForBorgerFaktaPanel.CitizenOutsideEEA"}),value:"false"}]}),l&&e.jsxs(e.Fragment,{children:[e.jsx(v,{eightPx:!0}),e.jsx(qe,{children:e.jsx(z,{name:"oppholdsrettVurdering",label:e.jsx(g,{id:"StatusForBorgerFaktaPanel.Oppholdsrett"}),validate:[Y],isEdited:y,isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"StatusForBorgerFaktaPanel.HarOppholdsrett"}),value:"true"},{label:e.jsx(g,{id:"StatusForBorgerFaktaPanel.HarIkkeOppholdsrett",values:{b}}),value:"false"}]})})]}),l===!1&&e.jsxs(e.Fragment,{children:[e.jsx(v,{eightPx:!0}),e.jsx(qe,{alignOffset:130,children:e.jsx(z,{name:"lovligOppholdVurdering",label:e.jsx(g,{id:"StatusForBorgerFaktaPanel.LovligOpphold"}),validate:[Y],isReadOnly:s,isEdited:y,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"StatusForBorgerFaktaPanel.HarLovligOpphold"}),value:"true"},{label:e.jsx(g,{id:"StatusForBorgerFaktaPanel.HarIkkeLovligOpphold",values:{b}}),value:"false"}]})})]})]})},xn=(n,r)=>n.erEosBorger||n.erEosBorger===!1?n.erEosBorger:r.some(s=>s.definisjon===i.AVKLAR_OPPHOLDSRETT),Ln=n=>n.oppholdsrettVurdering||n.oppholdsrettVurdering===!1?n.oppholdsrettVurdering:void 0,Kn=n=>n.lovligOppholdVurdering||n.lovligOppholdVurdering===!1?n.lovligOppholdVurdering:void 0;ie.buildInitialValues=(n,r)=>{const s=xn(n,r);return{erEosBorger:s,oppholdsrettVurdering:s?Ln(n):void 0,lovligOppholdVurdering:s===!1?Kn(n):void 0}};ie.__docgenInfo={description:`StatusForBorgerFaktaPanel

Setter opp aksjonspunktet for avklaring av borgerstatus (Medlemskapsvilkåret).`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"periode",optional:!1,type:null},{name:"aksjonspunkter",optional:!1,type:null}],returns:null}],displayName:"StatusForBorgerFaktaPanel"};const Un="_showBorder_wtdd5_1",Gn={showBorder:Un},{AVKLAR_OPPHOLDSRETT:Ce,AVKLAR_LOVLIG_OPPHOLD:ze}=i,re=(n,r)=>r.some(s=>s===n),Hn=(n,r,s)=>{const t=r.filter(o=>n.aksjonspunkter.includes(o.definisjon)||o.definisjon===i.AVKLAR_FORTSATT_MEDLEMSKAP);let a={};return(re(Ce,n.aksjonspunkter)||re(ze,n.aksjonspunkter))&&(a=ie.buildInitialValues(n,t)),{...ae.buildInitialValues(n),...te.buildInitialValues(n,s),...a,begrunnelse:n.begrunnelse}},Ye=({valgtPeriode:n,readOnly:r,submittable:s,soknad:t,alleKodeverk:a,aksjonspunkter:o,alleMerknaderFraBeslutter:l,updateOppholdInntektPeriode:m,medlemskap:p,lagreEnkeltPeriode:y,setValgtPeriode:b})=>{const[d,w]=k.useState(!1),q=k.useMemo(()=>Hn(n,o,p.medlemskapPerioder),[n,o,t,p.medlemskapPerioder]),f=dn({defaultValues:q}),h=k.useCallback(()=>{f.reset(q),b()},[]),T=o.length>0;return e.jsx(un,{formMethods:f,onSubmit:j=>{w(!0),m(n.vurderingsdato,j),y&&y({...n,...j})},children:e.jsxs("div",{className:y?void 0:Gn.showBorder,children:[!y&&e.jsx(Ke,{size:"small",children:e.jsx(g,{id:"OppholdInntektOgPeriodeForm.Periode",values:{dato:X(n.vurderingsdato).format(ee)}})}),e.jsx(ae,{valgtPeriode:n,soknad:t,aksjonspunkter:o,readOnly:r,alleKodeverk:a,alleMerknaderFraBeslutter:l}),e.jsx(v,{twentyPx:!0}),p.opphold.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(Ge,{oppholdstillatelse:p.opphold,alleKodeverk:a}),e.jsx(v,{twentyPx:!0})]}),e.jsx(te,{valgtPeriode:n,medlemskap:p,soknad:t,aksjonspunkter:o,readOnly:r,alleMerknaderFraBeslutter:l,alleKodeverk:a}),(re(Ce,n.aksjonspunkter)||re(ze,n.aksjonspunkter))&&e.jsx(ie,{valgtPeriode:n,aksjonspunkter:o,readOnly:r,alleMerknaderFraBeslutter:l}),e.jsx(v,{twentyPx:!0}),T&&n.aksjonspunkter&&n.aksjonspunkter.length>0&&e.jsx(gn,{isReadOnly:r,isSubmittable:s,hasBegrunnelse:!!q.begrunnelse}),e.jsx(v,{twentyPx:!0}),!r&&T&&e.jsxs(S,{gap:"4",children:[e.jsx(ue,{size:"small",variant:"primary",disabled:!f.formState.isDirty||d,loading:d,children:e.jsx(g,{id:y?"OppholdInntektOgPerioder.Bekreft":"OppholdInntektOgPeriode.Oppdater"})}),!y&&e.jsx(ue,{size:"small",variant:"secondary",onClick:h,type:"button",children:e.jsx(g,{id:"OppholdInntektOgPeriode.Avbryt"})})]})]})})};Ye.__docgenInfo={description:"",methods:[],displayName:"OppholdInntektOgPeriodeForm",props:{valgtPeriode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"personopplysningBruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"personopplysningAnnenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"årsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]"},description:""},medlemskap:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  medlemskapPerioder: MedlemskapPeriode[];
  perioder: MedlemPeriode[];
  opphold: Oppholdstillatelse[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"medlemskapPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  kildeType: string;
  beslutningsdato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"medlemskapType",value:{name:"string",required:!0}},{key:"dekningType",value:{name:"string",required:!0}},{key:"kildeType",value:{name:"string",required:!0}},{key:"beslutningsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  kildeType: string;
  beslutningsdato?: string;
}>`}],raw:"MedlemskapPeriode[]",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"personopplysningBruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"personopplysningAnnenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"årsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`}],raw:"MedlemPeriode[]",required:!0}},{key:"opphold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom: string;
  oppholdstillatelseType: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdstillatelseType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom?: string;
  tom: string;
  oppholdstillatelseType: string;
}>`}],raw:"Oppholdstillatelse[]",required:!0}}]}}],raw:`Readonly<{
  fom?: string;
  medlemskapPerioder: MedlemskapPeriode[];
  perioder: MedlemPeriode[];
  opphold: Oppholdstillatelse[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},updateOppholdInntektPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(vurderingsdato: string, values: FormValues) => void",signature:{arguments:[{type:{name:"string"},name:"vurderingsdato"},{type:{name:"intersection",raw:`OppholdFormValues &
StatusFormValues &
PerioderFormValues & {
  begrunnelse?: string;
}`,elements:[{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"values"}],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    };
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""},lagreEnkeltPeriode:{required:!1,tsType:{name:"signature",type:"function",raw:"(periode: MedlemPeriode) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"personopplysningBruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"personopplysningAnnenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"årsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`},name:"periode"}],return:{name:"void"}}},description:""},setValgtPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(periode?: MedlemPeriode) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"personopplysningBruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"personopplysningAnnenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"årsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`},name:"periode"}],return:{name:"void"}}},description:""}}};const Cn=[i.AVKLAR_OM_BRUKER_ER_BOSATT,i.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,i.AVKLAR_OPPHOLDSRETT,i.AVKLAR_LOVLIG_OPPHOLD],zn=(n,r)=>r.filter(s=>s.aksjonspunkter.includes(n.definisjon)||s.aksjonspunkter.length>0&&n.definisjon===i.AVKLAR_FORTSATT_MEDLEMSKAP),ce=(n,r)=>{const s=r.filter(l=>Cn.some(m=>m===l.definisjon)),t=s.some(l=>Pn(l.status)),a=r.filter(l=>l.definisjon===i.AVKLAR_FORTSATT_MEDLEMSKAP);return(t||a.length===0?s:a).map(l=>({kode:l.definisjon,begrunnelse:"",bekreftedePerioder:zn(l,n)}))},Yn=n=>{const r=[];return B(i.AVKLAR_FORTSATT_MEDLEMSKAP,n)&&r.push(e.jsx(g,{id:"MedlemskapInfoPanel.HarFortsattMedlemskap"},"HarFortsattMedlemskap")),B(i.AVKLAR_OM_BRUKER_ER_BOSATT,n)&&r.push(e.jsx(g,{id:"MedlemskapInfoPanel.ErSokerBosattINorge"},"ErSokerBosattINorge")),B(i.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,n)&&r.push(e.jsx(g,{id:"MedlemskapInfoPanel.GyldigMedlemFolketrygden"},"GyldigMedlemFolketrygden")),B(i.AVKLAR_OPPHOLDSRETT,n)&&r.push(e.jsx(g,{id:"MedlemskapInfoPanel.EOSBorgerMedOppholdsrett"},"EOSBorgerMedOppholdsrett1")),B(i.AVKLAR_LOVLIG_OPPHOLD,n)&&r.push(e.jsx(g,{id:"MedlemskapInfoPanel.IkkeEOSBorgerMedLovligOpphold"},"IkkeEOSBorgerMedLovligOpphold")),r},$e=({submittable:n,readOnly:r,submitCallback:s,alleMerknaderFraBeslutter:t,aksjonspunkter:a,soknad:o,alleKodeverk:l,medlemskap:m,formData:p,setFormData:y})=>{const b=k.useMemo(()=>[...m.perioder||[]].sort((c,R)=>c.vurderingsdato.localeCompare(R.vurderingsdato)),[m.perioder]),[d,w]=k.useState(p||b),[q,f]=k.useState(!1),[h,T]=k.useState(!1);k.useEffect(()=>()=>{y(d)},[d]);const j=c=>c.find(R=>R.aksjonspunkter.length>0&&!R.begrunnelse),[u,P]=k.useState(d.length>1?j(d):d[0]),J=k.useCallback((c,R,W)=>{P(W)},[]),Z=k.useCallback((c,R)=>{const W=d.findIndex(oe=>oe.vurderingsdato===c),en={...d[W],...R},le=d.map((oe,nn)=>W===nn?en:oe);w(le),T(!0),le.length>1&&P(j(le))},[d]),We=()=>!!(!h||d&&d.length>0&&d.filter(R=>R.aksjonspunkter.length>0&&!R.begrunnelse).length>0),Qe=()=>(f(!0),s(ce(d,a))),Xe=c=>(f(!0),s(ce([c],a)));return e.jsxs(e.Fragment,{children:[e.jsx(mn,{size:"small",children:e.jsx(g,{id:"OppholdInntektOgPerioder.Overskrift"})}),e.jsx(v,{thirtyTwoPx:!0}),a.some(c=>c.status===D.OPPRETTET)&&e.jsxs(e.Fragment,{children:[e.jsx(pn,{children:Yn(a)}),e.jsx(v,{thirtyTwoPx:!0})]}),e.jsx(v,{thirtyTwoPx:!0}),B(i.AVKLAR_FORTSATT_MEDLEMSKAP,a)&&e.jsx(Ue,{perioder:d,aksjonspunkter:a,valgtPeriodeVurderingsdato:u?u.vurderingsdato:void 0,velgPeriodeCallback:J}),u&&e.jsx(Ye,{readOnly:r,valgtPeriode:u,soknad:o,aksjonspunkter:a,submittable:n,updateOppholdInntektPeriode:Z,alleKodeverk:l,alleMerknaderFraBeslutter:t,medlemskap:m,lagreEnkeltPeriode:d.length===1?Xe:void 0,setValgtPeriode:P},u.vurderingsdato),e.jsx(v,{twentyPx:!0}),!r&&d.length>1&&e.jsx(ue,{size:"small",variant:"primary",onClick:Qe,disabled:q||We(),loading:q,type:"button",children:e.jsx(g,{id:"OppholdInntektOgPerioder.Bekreft"})})]})};$e.__docgenInfo={description:`MedlemskapInfoPanel

Har ansvar for å vise faktapanelene for medlemskap.`,methods:[],displayName:"MedlemskapInfoPanel",props:{submittable:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: AksjonspunktData) => Promise<void>",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:`| BekreftBosattVurderingAp
| BekreftErMedlemVurderingAp
| BekreftOppholdsrettVurderingAp
| BekreftLovligOppholdVurderingAp
| AvklarFortsattMedlemskapAp`,elements:[{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_OPPHOLDSRETT>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},{name:"intersection",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_FORTSATT_MEDLEMSKAP>`,elements:[{name:"signature",type:"object",raw:`{
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
}`,signature:{properties:[{key:"bekreftedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"bosattVurdering",value:{name:"boolean",required:!0}},{key:"erEosBorger",value:{name:"boolean",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!0}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!0}},{key:"fodselsdato",value:{name:"string",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"MedlemskapBekreftetPeriode[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}]}],raw:`Array<
  | BekreftBosattVurderingAp
  | BekreftErMedlemVurderingAp
  | BekreftOppholdsrettVurderingAp
  | BekreftLovligOppholdVurderingAp
  | AvklarFortsattMedlemskapAp
>`},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    };
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},medlemskap:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  medlemskapPerioder: MedlemskapPeriode[];
  perioder: MedlemPeriode[];
  opphold: Oppholdstillatelse[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"medlemskapPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  kildeType: string;
  beslutningsdato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"medlemskapType",value:{name:"string",required:!0}},{key:"dekningType",value:{name:"string",required:!0}},{key:"kildeType",value:{name:"string",required:!0}},{key:"beslutningsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  kildeType: string;
  beslutningsdato?: string;
}>`}],raw:"MedlemskapPeriode[]",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"personopplysningBruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"personopplysningAnnenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"årsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`}],raw:"MedlemPeriode[]",required:!0}},{key:"opphold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom: string;
  oppholdstillatelseType: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdstillatelseType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom?: string;
  tom: string;
  oppholdstillatelseType: string;
}>`}],raw:"Oppholdstillatelse[]",required:!0}}]}}],raw:`Readonly<{
  fom?: string;
  medlemskapPerioder: MedlemskapPeriode[];
  perioder: MedlemPeriode[];
  opphold: Oppholdstillatelse[];
}>`},description:""},formData:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"personopplysningBruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"personopplysningAnnenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"årsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`}],raw:"MedlemPeriode[]"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: MedlemPeriode[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"personopplysningBruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"personopplysningAnnenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"årsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`}],raw:"MedlemPeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const $n=kn(vn),Je=({soknad:n,medlemskap:r,aksjonspunkter:s,submittable:t,alleMerknaderFraBeslutter:a,alleKodeverk:o,submitCallback:l,readOnly:m,formData:p,setFormData:y})=>e.jsx(yn,{value:$n,children:e.jsx($e,{soknad:n,medlemskap:r,aksjonspunkter:s,submittable:t,alleMerknaderFraBeslutter:a,alleKodeverk:o,submitCallback:l,readOnly:m,formData:p,setFormData:y})}),Ze=Je;Je.__docgenInfo={description:"",methods:[],displayName:"MedlemskapFaktaIndex",props:{medlemskap:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  medlemskapPerioder: MedlemskapPeriode[];
  perioder: MedlemPeriode[];
  opphold: Oppholdstillatelse[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"medlemskapPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  kildeType: string;
  beslutningsdato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"medlemskapType",value:{name:"string",required:!0}},{key:"dekningType",value:{name:"string",required:!0}},{key:"kildeType",value:{name:"string",required:!0}},{key:"beslutningsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  kildeType: string;
  beslutningsdato?: string;
}>`}],raw:"MedlemskapPeriode[]",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"personopplysningBruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"personopplysningAnnenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"årsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`}],raw:"MedlemPeriode[]",required:!0}},{key:"opphold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom: string;
  oppholdstillatelseType: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdstillatelseType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom?: string;
  tom: string;
  oppholdstillatelseType: string;
}>`}],raw:"Oppholdstillatelse[]",required:!0}}]}}],raw:`Readonly<{
  fom?: string;
  medlemskapPerioder: MedlemskapPeriode[];
  perioder: MedlemPeriode[];
  opphold: Oppholdstillatelse[];
}>`},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    };
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""}}};const Jn={uuid:"1",versjon:1,type:fn.FORSTEGANGSSOKNAD,behandlingPaaVent:!1,status:qn.BEHANDLING_UTREDES},Zn={oppgittFordeling:{startDatoForPermisjon:"2019-01-01"},oppgittTilknytning:{oppholdNorgeNa:!0,oppholdNestePeriode:!0,oppholdSistePeriode:!0,utlandsoppholdFor:[{landNavn:"SVERIGE",fom:"2010-01-01",tom:"2011-01-01"}],utlandsoppholdEtter:[{landNavn:"DANMARK",fom:"2018-01-01",tom:"2019-01-01"}]},termindato:"2018-01-01"},Te={notAccepted:!1},rr={title:"fakta/fakta-medlemskap-v2",component:Ze},I=({medlemskap:n,aksjonspunkter:r,submitCallback:s,alleMerknaderFraBeslutter:t})=>e.jsx(Ze,{behandling:Jn,medlemskap:n,soknad:Zn,aksjonspunkter:r,alleKodeverk:bn,alleMerknaderFraBeslutter:t,submitCallback:s,readOnly:!1,harApneAksjonspunkter:!0,submittable:!0,setFormData:()=>{}}),x=I.bind({});x.args={medlemskap:{opphold:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapPerioder:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",kildeType:"FS22"}],perioder:[{vurderingsdato:"2018-11-07",personopplysningBruker:{personstatus:"BOSA",navn:"Mygg Robust",adresser:[],region:"NORDEN"},aksjonspunkter:[i.AVKLAR_OM_BRUKER_ER_BOSATT],årsaker:["SKJÆRINGSTIDSPUNKT"]}]},aksjonspunkter:[{definisjon:i.AVKLAR_OM_BRUKER_ER_BOSATT,status:M.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{},submitCallback:F("button-click")};const L=I.bind({});L.args={medlemskap:{medlemskapPerioder:[{fom:"2021-06-30",tom:"2025-06-30",medlemskapType:"ENDELIG",dekningType:"IHT_AVTALE",kildeType:"ANNEN",beslutningsdato:"2021-06-30"}],perioder:[{vurderingsdato:"2022-06-28",aksjonspunkter:[i.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE],årsaker:["SKJÆRINGSTIDSPUNKT"],oppholdsrettVurdering:void 0,erEosBorger:void 0,lovligOppholdVurdering:void 0,bosattVurdering:void 0,medlemskapManuellVurderingType:void 0,begrunnelse:void 0,personopplysningBruker:{navn:"Papegøye Margaret",personstatus:"BOSA",region:"NORDEN",adresser:[{adresseType:"BOSTEDSADRESSE",postNummer:"2500",poststed:"Ukjent",land:"NOR"}]},personopplysningAnnenPart:{navn:"Papegøye Runar",personstatus:"BOSA",region:"NORDEN",adresser:[{adresseType:"BOSTEDSADRESSE",postNummer:"2500",poststed:"Ukjent",land:"NOR"}]}}],opphold:[],fom:void 0},aksjonspunkter:[{definisjon:i.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,status:M.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{},submitCallback:F("button-click")};const K=I.bind({});K.args={medlemskap:{opphold:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapPerioder:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",kildeType:"FS22"}],perioder:[{vurderingsdato:"2018-11-07",personopplysningBruker:{personstatus:"BOSA",navn:"Mygg Robust",adresser:[],region:"NORDEN"},aksjonspunkter:[i.AVKLAR_OPPHOLDSRETT],årsaker:["SKJÆRINGSTIDSPUNKT"]}]},aksjonspunkter:[{definisjon:i.AVKLAR_OPPHOLDSRETT,status:M.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{},submitCallback:F("button-click")};const U=I.bind({});U.args={medlemskap:{opphold:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapPerioder:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",kildeType:"FS22"}],perioder:[{vurderingsdato:"2018-11-07",personopplysningBruker:{personstatus:"BOSA",navn:"Mygg Robust",adresser:[],region:"NORDEN"},aksjonspunkter:[i.AVKLAR_LOVLIG_OPPHOLD],årsaker:["SKJÆRINGSTIDSPUNKT"]}]},aksjonspunkter:[{definisjon:i.AVKLAR_LOVLIG_OPPHOLD,status:M.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{},submitCallback:F("button-click")};const G=I.bind({});G.args={medlemskap:{opphold:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapPerioder:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",kildeType:"FS22"}],perioder:[{vurderingsdato:"2018-11-07",personopplysningBruker:{personstatus:"BOSA",navn:"Mygg Robust",adresser:[],region:"NORDEN"},lovligOppholdVurdering:!0,aksjonspunkter:[i.AVKLAR_LOVLIG_OPPHOLD],årsaker:["SKJÆRINGSTIDSPUNKT"],begrunnelse:"Denne er vurdert"}]},aksjonspunkter:[{definisjon:i.AVKLAR_LOVLIG_OPPHOLD,status:M.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{[i.AVKLAR_LOVLIG_OPPHOLD]:{notAccepted:!0}},submitCallback:F("button-click")};const H=I.bind({});H.args={medlemskap:{opphold:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapPerioder:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",kildeType:"FS22"}],perioder:[{vurderingsdato:"2019-11-07",personopplysningBruker:{personstatus:"BOSA",adresser:[{adresseType:"BOSTEDSADRESSE",adresselinje1:"Skogvegen 3",postNummer:"4353",poststed:"Klepp Stasjon",land:"NOR"}],region:"NORDEN"},aksjonspunkter:[i.AVKLAR_OM_BRUKER_ER_BOSATT],årsaker:["SKJÆRINGSTIDSPUNKT"]},{vurderingsdato:"2018-11-07",personopplysningBruker:{personstatus:"BOSA",navn:"Mygg Robust",adresser:[],region:"NORDEN"},aksjonspunkter:[],årsaker:["SKJÆRINGSTIDSPUNKT"]},{vurderingsdato:"2016-01-01",personopplysningBruker:{personstatus:"BOSA",navn:"Mygg Robust",adresser:[],region:"NORDEN"},aksjonspunkter:[],årsaker:["SKJÆRINGSTIDSPUNKT"]},{vurderingsdato:"2017-10-05",personopplysningBruker:{personstatus:"BOSA",adresser:[{adresseType:"BOSTEDSADRESSE",adresselinje1:"Skogvegen 3",postNummer:"4353",poststed:"Klepp Stasjon",land:"NOR"}],region:"NORDEN"},aksjonspunkter:[i.AVKLAR_LOVLIG_OPPHOLD],årsaker:["SKJÆRINGSTIDSPUNKT"]}]},aksjonspunkter:[{definisjon:i.AVKLAR_OM_BRUKER_ER_BOSATT,status:M.UTFORT,begrunnelse:void 0,kanLoses:!0},{definisjon:i.AVKLAR_LOVLIG_OPPHOLD,status:M.UTFORT,begrunnelse:void 0,kanLoses:!0},{definisjon:i.AVKLAR_FORTSATT_MEDLEMSKAP,status:M.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{[i.AVKLAR_OM_BRUKER_ER_BOSATT]:Te,[i.AVKLAR_FORTSATT_MEDLEMSKAP]:Te},submitCallback:F("button-click")};var Pe,Re,he;x.parameters={...x.parameters,docs:{...(Pe=x.parameters)==null?void 0:Pe.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(he=(Re=x.parameters)==null?void 0:Re.docs)==null?void 0:he.source}}};var we,Ae,Oe;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(Oe=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var Me,Ve,Se;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(Se=(Ve=K.parameters)==null?void 0:Ve.docs)==null?void 0:Se.source}}};var Be,Ne,Ee;U.parameters={...U.parameters,docs:{...(Be=U.parameters)==null?void 0:Be.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(Ee=(Ne=U.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var Fe,De,Ie;G.parameters={...G.parameters,docs:{...(Fe=G.parameters)==null?void 0:Fe.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(Ie=(De=G.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var _e,xe,Le;H.parameters={...H.parameters,docs:{...(_e=H.parameters)==null?void 0:_e.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(Le=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:Le.source}}};const sr=["AvklarOmBrukerErBosatt","AvklarOmBrukerHarGyldigPeriode","AvklarOmBrukerHarOppholdsrett","AvklarOmBrukerHarLovligOpphold","BrukerHarLovligOppholdSomErSendtTilbakeFraBeslutter","AvklarFortsattMedlemskap"];export{H as AvklarFortsattMedlemskap,x as AvklarOmBrukerErBosatt,L as AvklarOmBrukerHarGyldigPeriode,U as AvklarOmBrukerHarLovligOpphold,K as AvklarOmBrukerHarOppholdsrett,G as BrukerHarLovligOppholdSomErSendtTilbakeFraBeslutter,sr as __namedExportsOrder,rr as default};
