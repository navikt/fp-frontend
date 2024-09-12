import{j as e}from"./dayjs.min-BmqYrIeh.js";import{u as nn,H as ge,x as pe,a as Y,W as w,D as me,U as V,b as $,z as ke,M as g,K as O,O as B,c as S,d as H,L as Le,B as N,Z as ye,T as ve,A as i,y as v,F as C,r as z,S as rn,V as sn,h as X,R as ee,g as an,e as tn,f as be,i as on,Y as ln,j as dn,k as de,l as un,v as gn,m as E,E as pn,t as mn,P as kn,n as yn,o as M,p as F,q as vn,s as bn,w as fn}from"./style-BS20Q3tL.js";import{r as k}from"./index-uubelm5h.js";import"./v4-CQkTLCs1.js";import"./index-BdzLX9oW.js";const qn={NORGE:"NOR"},fe={DOD:"DØD",BOSATT:"BOSA",UTVANDRET:"UTVA",AKTIVTBOSTNR:"ABNR",AKTIVT:"ADNR",FORSVUNNET:"FOSV",FODSELSREGISTRERT:"FØDR",UFULLSTENDIGFNR:"UFUL",UREGISTRERT:"UREG",UTGATTANNULLERT:"UTAN",UTGATTPERSON:"UTPE",UDEFINERT:"-"},jn={UDEFINERT:"-",NORDEN:"NORDEN"};var cn=function(n,r){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(s[t[a]]=n[t[a]]);return s};const Tn=k.forwardRef((n,r)=>{var{title:s,titleId:t}=n,a=cn(n,["title","titleId"]);let l=nn();return l=s?t||"title-"+l:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),s?k.createElement("title",{id:l},s):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))}),Pn=["MedlemskapEndringerTabell.GjeldeneFom","MedlemskapEndringerTabell.Opplysning"],Ke=({perioder:n,velgPeriodeCallback:r,valgtPeriodeVurderingsdato:s,aksjonspunkter:t})=>e.jsx(ge,{headerTextCodes:Pn,children:n.map(a=>e.jsxs(pe,{id:a.vurderingsdato,onMouseDown:r,onKeyDown:r,isSelected:a.vurderingsdato===s,model:a,isApLeftBorder:a.aksjonspunkter.some(l=>t.some(o=>o.definisjon===l&&o.status===Y.OPPRETTET))&&a.begrunnelse===void 0,children:[e.jsx(w,{children:e.jsx(me,{dateString:a.vurderingsdato})}),e.jsx(w,{children:a.årsaker.join()})]},a.vurderingsdato))});Ke.__docgenInfo={description:"",methods:[],displayName:"MedlemskapEndringerTabell",props:{perioder:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
}>`}],raw:"Aksjonspunkt[]"},description:""}}};const Rn=["OppholdstillatelseTabell.Periode","OppholdstillatelseTabell.Type"],Ue=({oppholdstillatelse:n,alleKodeverk:r})=>e.jsx(V,{title:$().formatMessage({id:"OppholdstillatelseTabell.Overskrift"}),children:e.jsx(ge,{headerTextCodes:Rn,noHover:!0,children:n.map(s=>{var t;return e.jsxs(pe,{children:[e.jsxs(w,{children:[s.fom&&e.jsx(ke,{dateStringFom:s.fom,dateStringTom:s.tom}),!s.fom&&e.jsxs("span",{children:[e.jsx(g,{id:"OppholdstillatelseTabell.Ukjent"}),"-",e.jsx(me,{dateString:s.tom})]})]}),e.jsx(w,{children:(t=r[O.OPPHOLDSTILLATELSE_TYPE].find(a=>a.kode===s.oppholdstillatelseType))==null?void 0:t.navn})]},s.fom+s.tom)})})});Ue.__docgenInfo={description:"",methods:[],displayName:"OppholdstillatelseTabell",props:{oppholdstillatelse:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Q=n=>n??"",hn=(n="",r="",s="",t="")=>`${Q(n)}, ${Q(r)} ${Q(s)} ${Q(t)}`,Ge=(n=[])=>n.reduce((r,s)=>{if(!s.adresseType||s.adresseType===B.UKJENT_ADRESSE)return{...r,[B.BOSTEDSADRESSE]:"UKJENT"};const t=[s.adresselinje1,s.adresselinje2,s.adresselinje3].filter(l=>!!l).join(", ");if(!t)return r;const a=s.land!==qn.NORGE?s.land:void 0;return{...r,[s.adresseType]:hn(t,s.postNummer,s.poststed,a).trim()}},{}),An="_dodEtikett_izib4_1",wn="_defaultBostedSoker_izib4_6",On="_etikettMargin_izib4_10",Mn="_paddingBottom_izib4_14",I={dodEtikett:An,defaultBostedSoker:wn,etikettMargin:On,paddingBottom:Mn},Vn=n=>{const r=Ge(n);return r[B.POSTADRESSE]||r[B.BOSTEDSADRESSE]||"-"},Sn=n=>{const r=Ge(n);return r[B.POSTADRESSE_UTLAND]||r[B.MIDLERTIDIG_POSTADRESSE_UTLAND]||"-"},ue=({personopplysninger:n,sokerTypeText:r,regionTypes:s,personstatusTypes:t})=>{var l,o;const a=$();return e.jsx("div",{className:I.defaultBostedSoker,children:e.jsxs(S,{justify:"space-between",children:[e.jsxs("div",{children:[e.jsx(H,{children:r}),e.jsx(Le,{size:"small",children:n.navn?n.navn:"-"}),e.jsx(N,{size:"small",className:I.paddingBottom,children:Vn(n.adresser)}),e.jsx(H,{children:e.jsx(g,{id:"BostedSokerView.ForeignAddresse"})}),e.jsx(N,{size:"small",children:Sn(n.adresser)})]}),e.jsxs("div",{children:[n.personstatus&&e.jsx("div",{className:I.etikettMargin,children:e.jsx(ye,{content:a.formatMessage({id:"Personstatus.Hjelpetekst"}),alignBottom:!0,children:e.jsx(ve,{className:n.personstatus===fe.DOD?I.dodEtikett:"",variant:"warning",children:n.personstatus===fe.UDEFINERT?a.formatMessage({id:"Personstatus.Ukjent"}):(l=t.find(p=>p.kode===n.personstatus))==null?void 0:l.navn})})}),n.region&&n.region!==jn.UDEFINERT&&e.jsx("div",{className:I.etikettMargin,children:e.jsx(ye,{content:a.formatMessage({id:"BostedSokerView.Region"}),alignBottom:!0,children:e.jsx(ve,{variant:"warning",children:(o=s.find(p=>p.kode===n.region))==null?void 0:o.navn})})})]})]})})};ue.__docgenInfo={description:"",methods:[],displayName:"MedlemskapBostedSokerView",props:{personopplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"personstatus",value:{name:"string",required:!0}},{key:"region",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const En="_dodEtikett_1a9q7_1",Bn="_col_1a9q7_6",Nn="_exclamationmarkIcon_1a9q7_10",Fn="_checkmarkIcon_1a9q7_16",ne={dodEtikett:En,col:Bn,exclamationmarkIcon:Nn,checkmarkIcon:Fn},Dn=n=>{const r=n.toLowerCase();return r.charAt(0).toUpperCase()+r.slice(1)},le=(n,r)=>n!==void 0?e.jsxs(S,{gap:"4",children:[n===!0&&e.jsx(Tn,{className:ne.checkmarkIcon,title:r.formatMessage({id:"OppholdINorgeOgAdresserFaktaPanel.Opphold"})}),n!==!0&&e.jsx(rn,{className:ne.exclamationmarkIcon,title:r.formatMessage({id:"OppholdINorgeOgAdresserFaktaPanel.IkkeOpphold"})}),e.jsx(N,{size:"small",children:e.jsx(g,{id:n===!0?"OppholdINorgeOgAdresserFaktaPanel.Yes":"OppholdINorgeOgAdresserFaktaPanel.No"})})]}):null,qe=n=>n&&n.map(r=>e.jsx("div",{children:e.jsxs(S,{gap:"4",children:[e.jsx(N,{size:"small",children:Dn(r.landNavn)}),e.jsx(N,{size:"small",children:e.jsx(ke,{showTodayString:!0,dateStringFom:r.fom,dateStringTom:r.tom})})]})},`${r.landNavn}${r.fom}${r.tom}`)),se=({soknad:n,valgtPeriode:r,aksjonspunkter:s,readOnly:t,alleKodeverk:a,alleMerknaderFraBeslutter:l})=>{var q,f,h,T,j;const o=$(),p=r.aksjonspunkter.find(u=>u===i.AVKLAR_OM_BRUKER_ER_BOSATT),m=s.find(u=>p===u.definisjon),y=p&&m?m.status!==Y.OPPRETTET:!1,{personopplysningBruker:b,personopplysningAnnenPart:d}=r,A=k.useCallback((...u)=>e.jsx("b",{children:u}),[]);return e.jsx(V,{merknaderFraBeslutter:l[i.AVKLAR_OM_BRUKER_ER_BOSATT],children:e.jsxs(S,{children:[e.jsx("div",{className:ne.col,children:e.jsxs(V,{withoutBorder:!0,title:o.formatMessage({id:"OppholdINorgeOgAdresserFaktaPanel.OppholdINorge"}),children:[e.jsx(H,{children:e.jsx(g,{id:"OppholdINorgeOgAdresserFaktaPanel.StayingInNorway"})}),e.jsx(v,{fourPx:!0}),le((q=n==null?void 0:n.oppgittTilknytning)==null?void 0:q.oppholdNorgeNa,o),e.jsx(v,{sixteenPx:!0}),e.jsx(H,{children:e.jsx(g,{id:"OppholdINorgeOgAdresserFaktaPanel.StayingInNorwayLast12"})}),e.jsx(v,{fourPx:!0}),le((f=n==null?void 0:n.oppgittTilknytning)==null?void 0:f.oppholdSistePeriode,o),e.jsx(v,{eightPx:!0}),qe((h=n==null?void 0:n.oppgittTilknytning)==null?void 0:h.utlandsoppholdFor),e.jsx(v,{sixteenPx:!0}),e.jsx(H,{children:e.jsx(g,{id:"OppholdINorgeOgAdresserFaktaPanel.StayingInNorwayNext12"})}),e.jsx(v,{fourPx:!0}),le((T=n==null?void 0:n.oppgittTilknytning)==null?void 0:T.oppholdNestePeriode,o),e.jsx(v,{eightPx:!0}),qe((j=n==null?void 0:n.oppgittTilknytning)==null?void 0:j.utlandsoppholdEtter)]})}),e.jsxs("div",{className:ne.col,children:[e.jsxs(V,{withoutBorder:!0,title:o.formatMessage({id:"OppholdINorgeOgAdresserFaktaPanel.BosattAdresser"}),children:[e.jsx(ue,{sokerTypeText:o.formatMessage({id:"BostedSokerFaktaIndex.Soker"}),personopplysninger:b,regionTypes:a[O.REGION],personstatusTypes:a[O.PERSONSTATUS_TYPE]}),d&&e.jsx(ue,{sokerTypeText:o.formatMessage({id:"OppholdINorgeOgAdresserFaktaPanel.Parent"}),personopplysninger:d,regionTypes:a[O.REGION],personstatusTypes:a[O.PERSONSTATUS_TYPE]})]}),p&&e.jsx(C,{name:"bosattVurdering",hideLegend:!0,validate:[z],isReadOnly:t,isHorizontal:!0,isEdited:y,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"OppholdINorgeOgAdresserFaktaPanel.ResidingInNorway"}),value:"true"},{label:e.jsx(g,{id:"OppholdINorgeOgAdresserFaktaPanel.NotResidingInNorway",values:{b:A}}),value:"false"}]})]})]})})};se.buildInitialValues=n=>({bosattVurdering:n.bosattVurdering||n.bosattVurdering===!1?n.bosattVurdering:void 0});se.__docgenInfo={description:`OppholdINorgeOgAdresserFaktaPanel

Er tilknyttet faktapanelet for medlemskap.
Viser opphold i innland og utland som er relevante for søker. ReadOnly.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"periode",optional:!1,type:null}],returns:null}],displayName:"OppholdINorgeOgAdresserFaktaPanel"};const In=["PerioderMedMedlemskapFaktaPanel.Period","PerioderMedMedlemskapFaktaPanel.Coverage","PerioderMedMedlemskapFaktaPanel.Status","PerioderMedMedlemskapFaktaPanel.Date"],ae=({valgtPeriode:n,readOnly:r,alleKodeverk:s,alleMerknaderFraBeslutter:t,medlemskap:a,soknad:l,aksjonspunkter:o})=>{const p=$(),m=s[O.MEDLEMSKAP_MANUELL_VURDERING_TYPE],y=k.useMemo(()=>[...m].sort((u,P)=>u.navn.localeCompare(P.navn)),[]),b=k.useMemo(()=>[...a.medlemskapPerioder].sort((u,P)=>new Date(u.fom).getTime()-new Date(P.fom).getTime()),[a.medlemskapPerioder]);if(!b||b.length===0)return e.jsx(V,{title:p.formatMessage({id:"PerioderMedMedlemskapFaktaPanel.ApplicationInformation"}),children:e.jsx(N,{size:"small",children:e.jsx(g,{id:"PerioderMedMedlemskapFaktaPanel.NoInformation"})})});const d=n.aksjonspunkter.find(u=>u===i.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE),A=o.find(u=>d===u.definisjon),q=A?A.status!==Y.OPPRETTET:!1,f=an(s),h=l.fodselsdatoer?Object.values(l.fodselsdatoer)[0]:void 0,{omsorgsovertakelseDato:T,termindato:j}=l;return e.jsxs(V,{title:p.formatMessage({id:"PerioderMedMedlemskapFaktaPanel.ApplicationInformation"}),merknaderFraBeslutter:t[i.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE],children:[e.jsx(ge,{headerTextCodes:In,noHover:!0,children:b.map(u=>{const P=f(u.dekningType,O.MEDLEMSKAP_DEKNING),J=f(u.medlemskapType,O.MEDLEMSKAP_TYPE),Z=u.fom+u.tom+P+J+u.beslutningsdato;return e.jsxs(pe,{id:Z,children:[e.jsx(w,{children:e.jsx(ke,{showTodayString:!0,dateStringFom:u.fom,dateStringTom:u.tom})}),e.jsx(w,{children:P}),e.jsx(w,{children:J}),e.jsx(w,{children:u.beslutningsdato?e.jsx(me,{dateString:u.beslutningsdato}):null})]},Z)})}),e.jsxs(sn,{children:[e.jsx(S,{children:d&&e.jsx(C,{name:"medlemskapManuellVurderingType",hideLegend:!0,isEdited:q,validate:[z],isReadOnly:r,isHorizontal:!0,radios:y.map(u=>({label:u.navn,value:u.kode}))})}),e.jsxs(S,{justify:"end",children:[h&&e.jsx(g,{id:"PerioderMedMedlemskapFaktaPanel.Fodselsdato",values:{dato:X(h).format(ee)}}),j&&e.jsx(g,{id:"PerioderMedMedlemskapFaktaPanel.Termindato",values:{dato:X(j).format(ee)}}),T&&e.jsx(g,{id:"PerioderMedMedlemskapFaktaPanel.Omsorgsovertakelse",values:{dato:X(T).format(ee)}})]})]})]})};ae.buildInitialValues=(n,r)=>r!==null?{medlemskapManuellVurderingType:n.medlemskapManuellVurderingType}:{};ae.__docgenInfo={description:`PerioderMedMedlemskapFaktaPanel

Setter opp aksjonspunktet for avklaring av perioder (Medlemskapsvilkåret).`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"periode",optional:!1,type:null},{name:"medlemskapPerioder",optional:!1,type:null}],returns:null}],displayName:"PerioderMedMedlemskapFaktaPanel"};const te=({valgtPeriode:n,aksjonspunkter:r,readOnly:s,alleMerknaderFraBeslutter:t})=>{const a=$(),{watch:l}=tn(),o=l("erEosBorger"),p=n.aksjonspunkter.filter(d=>d===i.AVKLAR_OPPHOLDSRETT||d===i.AVKLAR_LOVLIG_OPPHOLD),m=r.find(d=>p.includes(d.definisjon)),y=(m==null?void 0:m.status)!==Y.OPPRETTET,b=k.useCallback((...d)=>e.jsx("b",{children:d}),[]);return e.jsxs(V,{title:a.formatMessage({id:"StatusForBorgerFaktaPanel.ApplicationInformation"}),merknaderFraBeslutter:m!=null&&m.definisjon?t[m.definisjon]:void 0,children:[e.jsx(C,{name:"erEosBorger",hideLegend:!0,validate:[z],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"StatusForBorgerFaktaPanel.CitizenEEA"}),value:"true"},{label:a.formatMessage({id:"StatusForBorgerFaktaPanel.CitizenOutsideEEA"}),value:"false"}]}),o&&e.jsxs(e.Fragment,{children:[e.jsx(v,{eightPx:!0}),e.jsx(be,{children:e.jsx(C,{name:"oppholdsrettVurdering",label:e.jsx(g,{id:"StatusForBorgerFaktaPanel.Oppholdsrett"}),validate:[z],isEdited:y,isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"StatusForBorgerFaktaPanel.HarOppholdsrett"}),value:"true"},{label:e.jsx(g,{id:"StatusForBorgerFaktaPanel.HarIkkeOppholdsrett",values:{b}}),value:"false"}]})})]}),o===!1&&e.jsxs(e.Fragment,{children:[e.jsx(v,{eightPx:!0}),e.jsx(be,{alignOffset:130,children:e.jsx(C,{name:"lovligOppholdVurdering",label:e.jsx(g,{id:"StatusForBorgerFaktaPanel.LovligOpphold"}),validate:[z],isReadOnly:s,isEdited:y,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"StatusForBorgerFaktaPanel.HarLovligOpphold"}),value:"true"},{label:e.jsx(g,{id:"StatusForBorgerFaktaPanel.HarIkkeLovligOpphold",values:{b}}),value:"false"}]})})]})]})},xn=(n,r)=>n.erEosBorger||n.erEosBorger===!1?n.erEosBorger:r.some(s=>s.definisjon===i.AVKLAR_OPPHOLDSRETT),_n=n=>n.oppholdsrettVurdering||n.oppholdsrettVurdering===!1?n.oppholdsrettVurdering:void 0,Ln=n=>n.lovligOppholdVurdering||n.lovligOppholdVurdering===!1?n.lovligOppholdVurdering:void 0;te.buildInitialValues=(n,r)=>{const s=xn(n,r);return{erEosBorger:s,oppholdsrettVurdering:s?_n(n):void 0,lovligOppholdVurdering:s===!1?Ln(n):void 0}};te.__docgenInfo={description:`StatusForBorgerFaktaPanel

Setter opp aksjonspunktet for avklaring av borgerstatus (Medlemskapsvilkåret).`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"periode",optional:!1,type:null},{name:"aksjonspunkter",optional:!1,type:null}],returns:null}],displayName:"StatusForBorgerFaktaPanel"};const Kn="_showBorder_wtdd5_1",Un={showBorder:Kn},{AVKLAR_OPPHOLDSRETT:He,AVKLAR_LOVLIG_OPPHOLD:Ce}=i,re=(n,r)=>r.some(s=>s===n),Gn=(n,r,s)=>{const t=r.filter(l=>n.aksjonspunkter.includes(l.definisjon)||l.definisjon===i.AVKLAR_FORTSATT_MEDLEMSKAP);let a={};return(re(He,n.aksjonspunkter)||re(Ce,n.aksjonspunkter))&&(a=te.buildInitialValues(n,t)),{...se.buildInitialValues(n),...ae.buildInitialValues(n,s),...a,begrunnelse:n.begrunnelse}},ze=({valgtPeriode:n,readOnly:r,submittable:s,soknad:t,alleKodeverk:a,aksjonspunkter:l,alleMerknaderFraBeslutter:o,updateOppholdInntektPeriode:p,medlemskap:m,lagreEnkeltPeriode:y,setValgtPeriode:b})=>{const[d,A]=k.useState(!1),q=k.useMemo(()=>Gn(n,l,m.medlemskapPerioder),[n,l,t,m.medlemskapPerioder]),f=on({defaultValues:q}),h=k.useCallback(()=>{f.reset(q),b()},[]),T=l.length>0;return e.jsx(ln,{formMethods:f,onSubmit:j=>{A(!0),p(n.vurderingsdato,j),y&&y({...n,...j})},children:e.jsxs("div",{className:y?void 0:Un.showBorder,children:[!y&&e.jsx(Le,{size:"small",children:e.jsx(g,{id:"OppholdInntektOgPeriodeForm.Periode",values:{dato:X(n.vurderingsdato).format(ee)}})}),e.jsx(se,{valgtPeriode:n,soknad:t,aksjonspunkter:l,readOnly:r,alleKodeverk:a,alleMerknaderFraBeslutter:o}),e.jsx(v,{twentyPx:!0}),m.opphold.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(Ue,{oppholdstillatelse:m.opphold,alleKodeverk:a}),e.jsx(v,{twentyPx:!0})]}),e.jsx(ae,{valgtPeriode:n,medlemskap:m,soknad:t,aksjonspunkter:l,readOnly:r,alleMerknaderFraBeslutter:o,alleKodeverk:a}),(re(He,n.aksjonspunkter)||re(Ce,n.aksjonspunkter))&&e.jsx(te,{valgtPeriode:n,aksjonspunkter:l,readOnly:r,alleMerknaderFraBeslutter:o}),e.jsx(v,{twentyPx:!0}),T&&n.aksjonspunkter&&n.aksjonspunkter.length>0&&e.jsx(dn,{isReadOnly:r,isSubmittable:s,hasBegrunnelse:!!q.begrunnelse}),e.jsx(v,{twentyPx:!0}),!r&&T&&e.jsxs(S,{gap:"4",children:[e.jsx(de,{size:"small",variant:"primary",disabled:!f.formState.isDirty||d,loading:d,children:e.jsx(g,{id:y?"OppholdInntektOgPerioder.Bekreft":"OppholdInntektOgPeriode.Oppdater"})}),!y&&e.jsx(de,{size:"small",variant:"secondary",onClick:h,type:"button",children:e.jsx(g,{id:"OppholdInntektOgPeriode.Avbryt"})})]})]})})};ze.__docgenInfo={description:"",methods:[],displayName:"OppholdInntektOgPeriodeForm",props:{valgtPeriode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
}>`},name:"periode"}],return:{name:"void"}}},description:""}}};const Hn=[i.AVKLAR_OM_BRUKER_ER_BOSATT,i.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,i.AVKLAR_OPPHOLDSRETT,i.AVKLAR_LOVLIG_OPPHOLD],Cn=(n,r)=>r.filter(s=>s.aksjonspunkter.includes(n.definisjon)||s.aksjonspunkter.length>0&&n.definisjon===i.AVKLAR_FORTSATT_MEDLEMSKAP),je=(n,r)=>{const s=r.filter(o=>Hn.some(p=>p===o.definisjon)),t=s.some(o=>pn(o.status)),a=r.filter(o=>o.definisjon===i.AVKLAR_FORTSATT_MEDLEMSKAP);return(t||a.length===0?s:a).map(o=>({kode:o.definisjon,begrunnelse:"",bekreftedePerioder:Cn(o,n)}))},zn=n=>{const r=[];return E(i.AVKLAR_FORTSATT_MEDLEMSKAP,n)&&r.push(e.jsx(g,{id:"MedlemskapInfoPanel.HarFortsattMedlemskap"},"HarFortsattMedlemskap")),E(i.AVKLAR_OM_BRUKER_ER_BOSATT,n)&&r.push(e.jsx(g,{id:"MedlemskapInfoPanel.ErSokerBosattINorge"},"ErSokerBosattINorge")),E(i.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,n)&&r.push(e.jsx(g,{id:"MedlemskapInfoPanel.GyldigMedlemFolketrygden"},"GyldigMedlemFolketrygden")),E(i.AVKLAR_OPPHOLDSRETT,n)&&r.push(e.jsx(g,{id:"MedlemskapInfoPanel.EOSBorgerMedOppholdsrett"},"EOSBorgerMedOppholdsrett1")),E(i.AVKLAR_LOVLIG_OPPHOLD,n)&&r.push(e.jsx(g,{id:"MedlemskapInfoPanel.IkkeEOSBorgerMedLovligOpphold"},"IkkeEOSBorgerMedLovligOpphold")),r},Ye=({submittable:n,readOnly:r,submitCallback:s,alleMerknaderFraBeslutter:t,aksjonspunkter:a,soknad:l,alleKodeverk:o,medlemskap:p,formData:m,setFormData:y})=>{const b=k.useMemo(()=>[...p.perioder||[]].sort((c,R)=>c.vurderingsdato.localeCompare(R.vurderingsdato)),[p.perioder]),[d,A]=k.useState(m||b),[q,f]=k.useState(!1),[h,T]=k.useState(!1);k.useEffect(()=>()=>{y(d)},[d]);const j=c=>c.find(R=>R.aksjonspunkter.length>0&&!R.begrunnelse),[u,P]=k.useState(d.length>1?j(d):d[0]),J=k.useCallback((c,R,W)=>{P(W)},[]),Z=k.useCallback((c,R)=>{const W=d.findIndex(oe=>oe.vurderingsdato===c),Xe={...d[W],...R},ie=d.map((oe,en)=>W===en?Xe:oe);A(ie),T(!0),ie.length>1&&P(j(ie))},[d]),Ze=()=>!!(!h||d&&d.length>0&&d.filter(R=>R.aksjonspunkter.length>0&&!R.begrunnelse).length>0),We=()=>(f(!0),s(je(d,a))),Qe=c=>(f(!0),s(je([c],a)));return e.jsxs(e.Fragment,{children:[e.jsx(un,{size:"small",children:e.jsx(g,{id:"OppholdInntektOgPerioder.Overskrift"})}),e.jsx(v,{thirtyTwoPx:!0}),a.some(c=>c.status===Y.OPPRETTET)&&e.jsxs(e.Fragment,{children:[e.jsx(gn,{children:zn(a)}),e.jsx(v,{thirtyTwoPx:!0})]}),e.jsx(v,{thirtyTwoPx:!0}),E(i.AVKLAR_FORTSATT_MEDLEMSKAP,a)&&e.jsx(Ke,{perioder:d,aksjonspunkter:a,valgtPeriodeVurderingsdato:u?u.vurderingsdato:void 0,velgPeriodeCallback:J}),u&&e.jsx(ze,{readOnly:r,valgtPeriode:u,soknad:l,aksjonspunkter:a,submittable:n,updateOppholdInntektPeriode:Z,alleKodeverk:o,alleMerknaderFraBeslutter:t,medlemskap:p,lagreEnkeltPeriode:d.length===1?Qe:void 0,setValgtPeriode:P},u.vurderingsdato),e.jsx(v,{twentyPx:!0}),!r&&d.length>1&&e.jsx(de,{size:"small",variant:"primary",onClick:We,disabled:q||Ze(),loading:q,type:"button",children:e.jsx(g,{id:"OppholdInntektOgPerioder.Bekreft"})})]})};Ye.__docgenInfo={description:`MedlemskapInfoPanel

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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
}>`}],raw:"MedlemPeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const Yn=mn(yn),$e=({soknad:n,medlemskap:r,aksjonspunkter:s,submittable:t,alleMerknaderFraBeslutter:a,alleKodeverk:l,submitCallback:o,readOnly:p,formData:m,setFormData:y})=>e.jsx(kn,{value:Yn,children:e.jsx(Ye,{soknad:n,medlemskap:r,aksjonspunkter:s,submittable:t,alleMerknaderFraBeslutter:a,alleKodeverk:l,submitCallback:o,readOnly:p,formData:m,setFormData:y})}),Je=$e;$e.__docgenInfo={description:"",methods:[],displayName:"MedlemskapFaktaIndex",props:{medlemskap:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
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
}>`},description:""}}};const $n={uuid:"1",versjon:1,type:bn.FORSTEGANGSSOKNAD,behandlingPaaVent:!1,status:fn.BEHANDLING_UTREDES},Jn={oppgittFordeling:{startDatoForPermisjon:"2019-01-01"},oppgittTilknytning:{oppholdNorgeNa:!0,oppholdNestePeriode:!0,oppholdSistePeriode:!0,utlandsoppholdFor:[{landNavn:"SVERIGE",fom:"2010-01-01",tom:"2011-01-01"}],utlandsoppholdEtter:[{landNavn:"DANMARK",fom:"2018-01-01",tom:"2019-01-01"}]},termindato:"2018-01-01"},ce={notAccepted:!1},nr={title:"fakta/fakta-medlemskap-v2",component:Je},D=({medlemskap:n,aksjonspunkter:r,submitCallback:s,alleMerknaderFraBeslutter:t})=>e.jsx(Je,{behandling:$n,medlemskap:n,soknad:Jn,aksjonspunkter:r,alleKodeverk:vn,alleMerknaderFraBeslutter:t,submitCallback:s,readOnly:!1,harApneAksjonspunkter:!0,submittable:!0,setFormData:()=>{}}),x=D.bind({});x.args={medlemskap:{opphold:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapPerioder:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",kildeType:"FS22"}],perioder:[{vurderingsdato:"2018-11-07",personopplysningBruker:{personstatus:"BOSA",navn:"Mygg Robust",adresser:[],region:"NORDEN"},aksjonspunkter:[i.AVKLAR_OM_BRUKER_ER_BOSATT],årsaker:["SKJÆRINGSTIDSPUNKT"]}]},aksjonspunkter:[{definisjon:i.AVKLAR_OM_BRUKER_ER_BOSATT,status:M.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{},submitCallback:F("button-click")};const _=D.bind({});_.args={medlemskap:{medlemskapPerioder:[{fom:"2021-06-30",tom:"2025-06-30",medlemskapType:"ENDELIG",dekningType:"IHT_AVTALE",kildeType:"ANNEN",beslutningsdato:"2021-06-30"}],perioder:[{vurderingsdato:"2022-06-28",aksjonspunkter:[i.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE],årsaker:["SKJÆRINGSTIDSPUNKT"],oppholdsrettVurdering:void 0,erEosBorger:void 0,lovligOppholdVurdering:void 0,bosattVurdering:void 0,medlemskapManuellVurderingType:void 0,begrunnelse:void 0,personopplysningBruker:{navn:"Papegøye Margaret",personstatus:"BOSA",region:"NORDEN",adresser:[{adresseType:"BOSTEDSADRESSE",postNummer:"2500",poststed:"Ukjent",land:"NOR"}]},personopplysningAnnenPart:{navn:"Papegøye Runar",personstatus:"BOSA",region:"NORDEN",adresser:[{adresseType:"BOSTEDSADRESSE",postNummer:"2500",poststed:"Ukjent",land:"NOR"}]}}],opphold:[],fom:void 0},aksjonspunkter:[{definisjon:i.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,status:M.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{},submitCallback:F("button-click")};const L=D.bind({});L.args={medlemskap:{opphold:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapPerioder:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",kildeType:"FS22"}],perioder:[{vurderingsdato:"2018-11-07",personopplysningBruker:{personstatus:"BOSA",navn:"Mygg Robust",adresser:[],region:"NORDEN"},aksjonspunkter:[i.AVKLAR_OPPHOLDSRETT],årsaker:["SKJÆRINGSTIDSPUNKT"]}]},aksjonspunkter:[{definisjon:i.AVKLAR_OPPHOLDSRETT,status:M.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{},submitCallback:F("button-click")};const K=D.bind({});K.args={medlemskap:{opphold:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapPerioder:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",kildeType:"FS22"}],perioder:[{vurderingsdato:"2018-11-07",personopplysningBruker:{personstatus:"BOSA",navn:"Mygg Robust",adresser:[],region:"NORDEN"},aksjonspunkter:[i.AVKLAR_LOVLIG_OPPHOLD],årsaker:["SKJÆRINGSTIDSPUNKT"]}]},aksjonspunkter:[{definisjon:i.AVKLAR_LOVLIG_OPPHOLD,status:M.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{},submitCallback:F("button-click")};const U=D.bind({});U.args={medlemskap:{opphold:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapPerioder:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",kildeType:"FS22"}],perioder:[{vurderingsdato:"2018-11-07",personopplysningBruker:{personstatus:"BOSA",navn:"Mygg Robust",adresser:[],region:"NORDEN"},lovligOppholdVurdering:!0,aksjonspunkter:[i.AVKLAR_LOVLIG_OPPHOLD],årsaker:["SKJÆRINGSTIDSPUNKT"],begrunnelse:"Denne er vurdert"}]},aksjonspunkter:[{definisjon:i.AVKLAR_LOVLIG_OPPHOLD,status:M.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{[i.AVKLAR_LOVLIG_OPPHOLD]:{notAccepted:!0}},submitCallback:F("button-click")};const G=D.bind({});G.args={medlemskap:{opphold:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapPerioder:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",kildeType:"FS22"}],perioder:[{vurderingsdato:"2019-11-07",personopplysningBruker:{personstatus:"BOSA",adresser:[{adresseType:"BOSTEDSADRESSE",adresselinje1:"Skogvegen 3",postNummer:"4353",poststed:"Klepp Stasjon",land:"NOR"}],region:"NORDEN"},aksjonspunkter:[i.AVKLAR_OM_BRUKER_ER_BOSATT],årsaker:["SKJÆRINGSTIDSPUNKT"]},{vurderingsdato:"2018-11-07",personopplysningBruker:{personstatus:"BOSA",navn:"Mygg Robust",adresser:[],region:"NORDEN"},aksjonspunkter:[],årsaker:["SKJÆRINGSTIDSPUNKT"]},{vurderingsdato:"2016-01-01",personopplysningBruker:{personstatus:"BOSA",navn:"Mygg Robust",adresser:[],region:"NORDEN"},aksjonspunkter:[],årsaker:["SKJÆRINGSTIDSPUNKT"]},{vurderingsdato:"2017-10-05",personopplysningBruker:{personstatus:"BOSA",adresser:[{adresseType:"BOSTEDSADRESSE",adresselinje1:"Skogvegen 3",postNummer:"4353",poststed:"Klepp Stasjon",land:"NOR"}],region:"NORDEN"},aksjonspunkter:[i.AVKLAR_LOVLIG_OPPHOLD],årsaker:["SKJÆRINGSTIDSPUNKT"]}]},aksjonspunkter:[{definisjon:i.AVKLAR_OM_BRUKER_ER_BOSATT,status:M.UTFORT,begrunnelse:void 0,kanLoses:!0},{definisjon:i.AVKLAR_LOVLIG_OPPHOLD,status:M.UTFORT,begrunnelse:void 0,kanLoses:!0},{definisjon:i.AVKLAR_FORTSATT_MEDLEMSKAP,status:M.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{[i.AVKLAR_OM_BRUKER_ER_BOSATT]:ce,[i.AVKLAR_FORTSATT_MEDLEMSKAP]:ce},submitCallback:F("button-click")};var Te,Pe,Re;x.parameters={...x.parameters,docs:{...(Te=x.parameters)==null?void 0:Te.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(Re=(Pe=x.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var he,Ae,we;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(we=(Ae=_.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};var Oe,Me,Ve;L.parameters={...L.parameters,docs:{...(Oe=L.parameters)==null?void 0:Oe.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(Ve=(Me=L.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Se,Ee,Be;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(Be=(Ee=K.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var Ne,Fe,De;U.parameters={...U.parameters,docs:{...(Ne=U.parameters)==null?void 0:Ne.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(De=(Fe=U.parameters)==null?void 0:Fe.docs)==null?void 0:De.source}}};var Ie,xe,_e;G.parameters={...G.parameters,docs:{...(Ie=G.parameters)==null?void 0:Ie.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(_e=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:_e.source}}};const rr=["AvklarOmBrukerErBosatt","AvklarOmBrukerHarGyldigPeriode","AvklarOmBrukerHarOppholdsrett","AvklarOmBrukerHarLovligOpphold","BrukerHarLovligOppholdSomErSendtTilbakeFraBeslutter","AvklarFortsattMedlemskap"];export{G as AvklarFortsattMedlemskap,x as AvklarOmBrukerErBosatt,_ as AvklarOmBrukerHarGyldigPeriode,K as AvklarOmBrukerHarLovligOpphold,L as AvklarOmBrukerHarOppholdsrett,U as BrukerHarLovligOppholdSomErSendtTilbakeFraBeslutter,rr as __namedExportsOrder,nr as default};
