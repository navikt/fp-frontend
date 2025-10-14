import{i as He,h as j,r as q,B as ya,k as La,l as T,j as e,t as K,Z as U,A as c,bl as Pa,bm as Ga,aa as I,ab as C,P as $,b as z,bb as De,b4 as ba,b5 as ye,aP as xe,aS as Le,bn as Va,a_ as Ye,a$ as Ce,a0 as fa,b2 as ja,b3 as qa,s as ca,b0 as Ba,b1 as Ma,b6 as ha,o as Pe,bo as Ua,bk as wa,aL as Ja,F as Ha,G as xa,v as Ya,C as Ca,x as Ge,K as $a,n as za,I as Wa,bf as Za,S as me}from"./iframe-CJgyfo9_.js";import{W as oe,Q as Re,B as be,A as Te,G as y,U as Xa,H as Qa}from"./index.es-BFCB1ROu.js";import{u as Z,n as ee,a as en}from"./fagsakApi-NMkvHp61.js";import{a as x,T as w,o as p,S as ie,R as J,u as B,C as M,b as an,m as nn,h as rn,n as ln,k as tn,O as Ve,c as sn}from"./index.es-DkLiIFHL.js";import{F as O,a as se,g as $e,d as Q,f as un,e as fe}from"./BehandlingMenuIndex-fG3kc8yD.js";import{A as o}from"./index-Bc_7YYJb.js";import{h as X}from"./aksjonspunktUtils-Bp6ewLMR.js";import{F as P,D as En}from"./FaktaKort-DGFUL21j.js";import{f as dn,r as mn,d as on,V as D,H as G,L as H,D as ze,E as _n,b as Ae,c as vn,B as We,a as ke}from"./VStack-BQ5ULrV2.js";import{M as u}from"./message-CCWpKOrj.js";import{S as Sn}from"./ExclamationmarkTriangleFill-C0w41j-T.js";import{u as pe,c as Nn,f as Tn}from"./behandlingApi-OP-ZgTAJ.js";import{B as _e}from"./FagsakIndex-B3Y-vz5_.js";import{u as Ke,F as Oe}from"./VergeFaktaInitPanel-BUB9UBqF.js";import{T as F}from"./Table-BHvhJHhb.js";import{P as je}from"./Popover-GIHL659I.js";import{S as gn}from"./FagsakProfileIndex-DYLGGIc4.js";import{H as Ze}from"./HGrid-CrUYcp0o.js";import{L as qe,s as Dn,a as Rn}from"./MedlemskapInngangsvilkarInitPanel-GiC0r7dP.js";import{L as Xe}from"./Link-BKEtH6E1.js";import{S as An}from"./SettPaVentModalIndex-CugWIe89.js";import{P as b,V,b as ve}from"./OverstyringPanel-t4dfMCFw.js";import{v as ue}from"./validerApKodeOgHentApEnum-N5xTXakj.js";import{u as Qe,P as kn}from"./useStandardProsessPanelProps-BqHvReY0.js";const ce=({title:a,filled:n=!1})=>{const{cn:r}=He();let l=dn();return l=a?`title-${l}`:void 0,j.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img","aria-labelledby":l,className:r("navds-help-text__icon",{"navds-help-text__icon--filled":n})},a?j.createElement("title",{id:l},a):null,j.createElement("circle",{cx:"12",cy:"12",r:"11",strokeWidth:"1.5",stroke:"currentColor",fill:n?"currentColor":"transparent"}),j.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.75 9C9.75 7.75736 10.7574 6.75 12 6.75H12.1716C13.3195 6.75 14.25 7.68054 14.25 8.82843C14.25 9.37966 14.031 9.90832 13.6412 10.2981L12.6412 11.2981C11.7504 12.1889 11.25 13.3971 11.25 14.6569C11.25 15.0711 11.5858 15.4069 12 15.4069C12.4142 15.4069 12.75 15.0711 12.75 14.6569C12.75 13.7949 13.0924 12.9682 13.7019 12.3588L14.7019 11.3588C15.373 10.6877 15.75 9.77748 15.75 8.82843C15.75 6.85212 14.1479 5.25 12.1716 5.25H12C9.92893 5.25 8.25 6.92893 8.25 9V9.5C8.25 9.91421 8.58579 10.25 9 10.25C9.41421 10.25 9.75 9.91421 9.75 9.5V9ZM12 16.5C11.4477 16.5 11 16.9477 11 17.5C11 18.0523 11.4477 18.5 12 18.5C12.5523 18.5 13 18.0523 13 17.5C13 16.9477 12.5523 16.5 12 16.5Z",fill:n?"var(--ax-text-accent-contrast, var(--a-surface-default))":"currentColor"}))};var pn=function(a,n){var r={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&n.indexOf(l)<0&&(r[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,l=Object.getOwnPropertySymbols(a);t<l.length;t++)n.indexOf(l[t])<0&&Object.prototype.propertyIsEnumerable.call(a,l[t])&&(r[l[t]]=a[l[t]]);return r};const Kn=q.forwardRef((a,n)=>{var{className:r,children:l,placement:t,strategy:s="absolute",title:i,onClick:E,wrapperClassName:d,"data-color":m="info"}=a,_=pn(a,["className","children","placement","strategy","title","onClick","wrapperClassName","data-color"]);const{cn:S}=He(),A=q.useRef(null),g=ya(A,n),[v,N]=q.useState(!1),R=La(!1),k=mn("HelpText"),L=i||k("title");return j.createElement("div",{className:S("navds-help-text",d),"data-color":m},j.createElement("button",Object.assign({},_,{ref:g,onClick:on(E,()=>N(h=>!h)),className:S(r,"navds-help-text__button"),type:"button","aria-expanded":v}),j.createElement(ce,{title:L}),j.createElement(ce,{filled:!0,title:L})),j.createElement(je,{onClose:()=>N(!1),className:S("navds-help-text__popover"),open:v,anchorEl:A.current,placement:t,strategy:s,offset:R?.isDarkside?8:12,arrow:!R?.isDarkside},j.createElement(je.Content,{className:S("navds-body-short")},l)))}),ea=a=>a.soknadType==="ST-002",On=new Set(["FP_VK_4","FP_VK_16"]),Se=a=>a!=null,ge=(a,n)=>Se(n)&&a!==n,In="_topMarginFirstRow_15323_1",Fn="_topMargin_15323_1",Ee={topMarginFirstRow:In,topMargin:Fn};c.extend(Ga);const ne=({readOnly:a,soknad:n,adopsjon:r,erForeldrepengerFagsak:l,hasEktefellesBarnAksjonspunkt:t,alleMerknaderFraBeslutter:s})=>{const i=T(),{watch:E,control:d}=x(),m=E("fodselsdatoer")??{},_=E("omsorgsovertakelseDato"),S=E("barnetsAnkomstTilNorgeDato"),A=Pn(n,r),g=Object.keys(m);return e.jsx(P,{label:i.formatMessage({id:"DokumentasjonFaktaForm.ApplicationInformation"}),merknaderFraBeslutter:s[o.AVKLAR_ADOPSJONSDOKUMENTAJON],children:e.jsxs(D,{gap:"space-16",children:[e.jsx(w,{name:"omsorgsovertakelseDato",control:d,label:l&&t?e.jsx(u,{id:"DokumentasjonFaktaForm.Stebarnsadopsjon"}):e.jsx(u,{id:"DokumentasjonFaktaForm.Omsorgsovertakelsesdato"}),size:"small",validate:[K,U],isReadOnly:a,isEdited:ge(n.omsorgsovertakelseDato,r.omsorgsovertakelseDato)}),l&&S&&e.jsx(w,{name:"barnetsAnkomstTilNorgeDato",control:d,label:e.jsx(u,{id:"DokumentasjonFaktaForm.DatoForBarnetsAnkomstTilNorge.Label"}),description:e.jsx(u,{id:"DokumentasjonFaktaForm.DatoForBarnetsAnkomstTilNorge.Description"}),size:"small",validate:[U],isReadOnly:a,isEdited:ge(n.barnetsAnkomstTilNorgeDato,r.ankomstNorge)}),g.map((v,N)=>e.jsxs(G,{gap:"space-16",children:[g.length>1&&e.jsx(H,{size:"small",className:N===0?Ee.topMarginFirstRow:Ee.topMargin,children:e.jsx(u,{id:"DokumentasjonFaktaForm.BarnNr",values:{nummer:N+1}})}),e.jsx(w,{name:`fodselsdatoer.${v}`,control:d,label:e.jsx(u,{id:"DokumentasjonFaktaForm.Fodselsdato"}),hideLabel:N>0,size:"small",validate:[K,U],isReadOnly:a,isEdited:A(v)}),!a&&Ln(m,Number.parseInt(v,10),_)&&e.jsx(Sn,{title:i.formatMessage({id:"DokumentasjonFaktaForm.BarnErOver15Ar"}),className:N===0?Ee.topMarginFirstRow:Ee.topMargin,color:"var(--ax-warning-700)",height:24,width:24})]},`div-${o.AVKLAR_ADOPSJONSDOKUMENTAJON}-${v}`)),e.jsx(p,{size:"small",label:e.jsx(u,{id:"DokumentasjonFaktaForm.AntallBarnSomFyllerVilkaret"}),value:yn(m,_)})]})})},yn=(a,n)=>{if(Object.keys(a).filter(t=>a[Number.parseInt(t,10)]).length===0||!n)return"-";const l=c(n).subtract(15,"years");return Object.values(a).map(t=>c(t).isAfter(l)?1:0).reduce((t,s)=>t+s,0)},Ln=(a,n,r)=>!!a[n]&&!!r&&c(a[n]).isSameOrBefore(c(r).subtract(15,"years"));ne.initialValues=a=>({omsorgsovertakelseDato:a.omsorgsovertakelseDato,barnetsAnkomstTilNorgeDato:a.ankomstNorge??void 0,fodselsdatoer:a.fødselsdatoer});ne.transformValues=a=>({kode:o.AVKLAR_ADOPSJONSDOKUMENTAJON,omsorgsovertakelseDato:a.omsorgsovertakelseDato??"",fodselsdatoer:a.fodselsdatoer??""});const Pn=(a,n)=>r=>{const l=Pa(a.adopsjonFodelsedatoer,n.fødselsdatoer);return l?l[r]:!1};ne.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"adopsjon",optional:!1,type:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]},alias:"AdopsjonFamilieHendelse"}}],returns:{type:{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  fodselsdatoer?: Record<string, string>;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  fodselsdatoer?: Record<string, string>;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"intersection",raw:`{
  omsorgsovertakelseDato: string;
  fodselsdatoer: Record<number, string>;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_ADOPSJONSDOKUMENTAJON>`,elements:[{name:"signature",type:"object",raw:`{
  omsorgsovertakelseDato: string;
  fodselsdatoer: Record<number, string>;
}`,signature:{properties:[{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}}}],displayName:"DokumentasjonFaktaForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},hasEktefellesBarnAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},adopsjon:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},soknad:{required:!0,tsType:{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const re=({readOnly:a,adopsjon:n,alleMerknaderFraBeslutter:r})=>{const l=T(),{control:t}=x();return e.jsx(P,{label:l.formatMessage({id:"EktefelleFaktaForm.ApplicationInformation"}),merknaderFraBeslutter:r[o.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN],children:e.jsxs(ie,{name:"ektefellesBarn",control:t,label:e.jsx(u,{id:"EktefelleFaktaForm.APSpørsmål"}),validate:[K],isReadOnly:a,isEdited:Se(n.ektefellesBarn),children:[e.jsx(J,{value:!0,children:e.jsx(u,{id:"EktefelleFaktaForm.Ja"})}),e.jsx(J,{value:!1,children:e.jsx(u,{id:"EktefelleFaktaForm.Nei"})})]})})};re.buildInitialValues=a=>({ektefellesBarn:a.ektefellesBarn});re.transformValues=a=>({kode:o.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,ektefellesBarn:a});re.__docgenInfo={description:`EktefelleFaktaForm

Setter opp aksjonspunktet for vurdering av om det er ektefelles barn som adopteres.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"adopsjon",optional:!1,type:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]},alias:"AdopsjonFamilieHendelse"}}],returns:{type:{name:"signature",type:"object",raw:`{
  ektefellesBarn?: boolean;
}`,signature:{properties:[{key:"ektefellesBarn",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"ektefellesBarn",optional:!1,type:{name:"boolean"}}],returns:{type:{name:"intersection",raw:`{
  ektefellesBarn: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN>`,elements:[{name:"signature",type:"object",raw:`{
  ektefellesBarn: boolean;
}`,signature:{properties:[{key:"ektefellesBarn",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}}}],displayName:"EktefelleFaktaForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},adopsjon:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const le=({farSokerType:a,readOnly:n,alleKodeverk:r,alleMerknaderFraBeslutter:l,adopsjon:t})=>{const s=T(),{control:i}=x();return e.jsx(P,{label:s.formatMessage({id:"MannAdoptererAleneFaktaForm.ApplicationInformation"}),merknaderFraBeslutter:l[o.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE],children:e.jsxs(D,{gap:"space-16",children:[e.jsx(p,{size:"small",label:e.jsx(u,{id:"MannAdoptererAleneFaktaForm.Opplysninger"}),value:r.FarSøkerType.find(E=>E.kode===a)?.navn}),e.jsxs(ie,{name:"mannAdoptererAlene",control:i,label:e.jsx(u,{id:"MannAdoptererAleneFaktaForm.APSpørsmål"}),isEdited:Se(t.mannAdoptererAlene),validate:[K],isReadOnly:n,children:[e.jsx(J,{value:!0,children:e.jsx(u,{id:"MannAdoptererAleneFaktaForm.Ja"})}),e.jsx(J,{value:!1,children:e.jsx(u,{id:"MannAdoptererAleneFaktaForm.Nei"})})]})]})})};le.buildInitialValues=a=>({mannAdoptererAlene:a.mannAdoptererAlene});le.transformValues=a=>({kode:o.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE,mannAdoptererAlene:a});le.__docgenInfo={description:`MannAdoptererAleneFaktaForm

Presentasjonskomponent. Setter opp aksjonspunktet for vurdering av om mann adopterer alene.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"adopsjon",optional:!1,type:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]},alias:"AdopsjonFamilieHendelse"}}],returns:{type:{name:"signature",type:"object",raw:`{
  mannAdoptererAlene?: boolean;
}`,signature:{properties:[{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"mannAdoptererAlene",optional:!1,type:{name:"boolean"}}],returns:{type:{name:"intersection",raw:`{
  mannAdoptererAlene: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE>`,elements:[{name:"signature",type:"object",raw:`{
  mannAdoptererAlene: boolean;
}`,signature:{properties:[{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}}}],displayName:"MannAdoptererAleneFaktaForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},farSokerType:{required:!0,tsType:{name:"union",raw:"FarSøkerType | undefined",elements:[{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}]},{name:"undefined"}]},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
  LineærAvslagsårsak: LineærAvslagsårsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<
    KodeverkType,
    'Avslagsårsak' | 'LineærAvslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'
  >]: KodeverkMedNavn<K extends KodeverkType ? K : unknown>[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringType;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  LineærAvslagsårsak: Avslagsarsak;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdÅrsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverføringÅrsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StønadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkårType;
  VirksomhetType: VirksomhetType;
  VurderÅrsak: VurderÅrsak;
  Inntektskategori: Inntektskategori;
}`,signature:{properties:[{key:"AdresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}},{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Arbeidskategori",value:{name:"union",raw:`| 'FISKER'
| 'ARBEIDSTAKER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE'
| 'SJØMANN'
| 'JORDBRUKER'
| 'DAGPENGER'
| 'INAKTIV'
| 'KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER'
| 'KOMBINASJON_ARBEIDSTAKER_OG_FISKER'
| 'FRILANSER'
| 'KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER'
| 'KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER'
| 'DAGMAMMA'
| 'ANNET'`,elements:[{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'INAKTIV'"},{name:"literal",value:"'KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER'"},{name:"literal",value:"'KOMBINASJON_ARBEIDSTAKER_OG_FISKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER'"},{name:"literal",value:"'KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'ANNET'"}],required:!0}},{key:"ArbeidType",value:{name:"union",raw:`| 'ETTERLØNN_SLUTTPAKKE'
| 'FORENKLET_OPPGJØRSORDNING'
| 'FRILANSER'
| 'FRILANSER_OPPDRAGSTAKER'
| 'LØNN_UNDER_UTDANNING'
| 'MARITIMT_ARBEIDSFORHOLD'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'ORDINÆRT_ARBEIDSFORHOLD'
| 'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'
| 'NÆRING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'VANLIG'
| '-'`,elements:[{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FORENKLET_OPPGJØRSORDNING'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'FRILANSER_OPPDRAGSTAKER'"},{name:"literal",value:"'LØNN_UNDER_UTDANNING'"},{name:"literal",value:"'MARITIMT_ARBEIDSFORHOLD'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'ORDINÆRT_ARBEIDSFORHOLD'"},{name:"literal",value:"'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Avslagsårsak",value:{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1013'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingResultatType",value:{name:"union",raw:`| 'IKKE_FASTSATT'
| 'INNVILGET'
| 'AVSLÅTT'
| 'OPPHØR'
| 'HENLAGT_SØKNAD_TRUKKET'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_BRUKER_DØD'
| 'MERGET_OG_HENLAGT'
| 'HENLAGT_SØKNAD_MANGLER'
| 'FORELDREPENGER_ENDRET'
| 'FORELDREPENGER_SENERE'
| 'INGEN_ENDRING'
| 'MANGLER_BEREGNINGSREGLER'
| 'KLAGE_AVVIST'
| 'KLAGE_MEDHOLD'
| 'KLAGE_DELVIS_MEDHOLD'
| 'KLAGE_OMGJORT_UGUNST'
| 'KLAGE_YTELSESVEDTAK_OPPHEVET'
| 'KLAGE_YTELSESVEDTAK_STADFESTET'
| 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'
| 'HENLAGT_KLAGE_TRUKKET'
| 'HJEMSENDE_UTEN_OPPHEVE'
| 'ANKE_AVVIST'
| 'ANKE_MEDHOLD'
| 'ANKE_DELVIS_MEDHOLD'
| 'ANKE_OMGJORT_UGUNST'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_YTELSESVEDTAK_STADFESTET'
| 'HENLAGT_ANKE_TRUKKET'
| 'INNSYN_INNVILGET'
| 'INNSYN_DELVIS_INNVILGET'
| 'INNSYN_AVVIST'
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingÅrsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FaresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FarSøkerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FordelingPeriodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"ForeldreType",value:{name:"union",raw:"'MOR' | 'FAR' | 'MEDMOR' | 'ANDRE' | '-'",elements:[{name:"literal",value:"'MOR'"},{name:"literal",value:"'FAR'"},{name:"literal",value:"'MEDMOR'"},{name:"literal",value:"'ANDRE'"},{name:"literal",value:"'-'"}],required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"union",raw:`| '-'
| '4504'
| '4501'
| '4502'
| '4503'
| '4523'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'4504'"},{name:"literal",value:"'4501'"},{name:"literal",value:"'4502'"},{name:"literal",value:"'4503'"},{name:"literal",value:"'4523'"}],required:!0}},{key:"KlageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!0}},{key:"KlageAvvistÅrsak",value:{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"KlageMedholdÅrsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"KonsekvensForYtelsen",value:{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Landkoder",value:{name:"union",raw:`| '???'
| 'ABW'
| 'AFG'
| 'AGO'
| 'AIA'
| 'ALA'
| 'ALB'
| 'AND'
| 'ANT'
| 'ARE'
| 'ARG'
| 'ARM'
| 'ASM'
| 'ATG'
| 'AUS'
| 'AUT'
| 'AZE'
| 'BDI'
| 'BEL'
| 'BEN'
| 'BES'
| 'BFA'
| 'BGD'
| 'BGR'
| 'BHR'
| 'BHS'
| 'BIH'
| 'BLM'
| 'BLR'
| 'BLZ'
| 'BMU'
| 'BOL'
| 'BRA'
| 'BRB'
| 'BRN'
| 'BTN'
| 'BVT'
| 'BWA'
| 'CAF'
| 'CAN'
| 'CCK'
| 'CHE'
| 'CHL'
| 'CHN'
| 'CIV'
| 'CMR'
| 'COD'
| 'COG'
| 'COK'
| 'COL'
| 'COM'
| 'CPV'
| 'CRI'
| 'CSK'
| 'CUB'
| 'CUW'
| 'CXR'
| 'CYM'
| 'CYP'
| 'CZE'
| 'DDR'
| 'DEU'
| 'DJI'
| 'DMA'
| 'DNK'
| 'DOM'
| 'DZA'
| 'ECU'
| 'EGY'
| 'ERI'
| 'ESH'
| 'ESP'
| 'EST'
| 'ETH'
| 'FIN'
| 'FJI'
| 'FLK'
| 'FRA'
| 'FRO'
| 'FSM'
| 'GAB'
| 'GBR'
| 'GEO'
| 'GGY'
| 'GHA'
| 'GIB'
| 'GIN'
| 'GLP'
| 'GMB'
| 'GNB'
| 'GNQ'
| 'GRC'
| 'GRD'
| 'GRL'
| 'GTM'
| 'GUF'
| 'GUM'
| 'GUY'
| 'HKG'
| 'HMD'
| 'HND'
| 'HRV'
| 'HTI'
| 'HUN'
| 'IDN'
| 'IMN'
| 'IND'
| 'IOT'
| 'IRL'
| 'IRN'
| 'IRQ'
| 'ISL'
| 'ISR'
| 'ITA'
| 'JAM'
| 'JEY'
| 'JOR'
| 'JPN'
| 'KAZ'
| 'KEN'
| 'KGZ'
| 'KHM'
| 'KIR'
| 'KNA'
| 'KOR'
| 'KWT'
| 'LAO'
| 'LBN'
| 'LBR'
| 'LBY'
| 'LCA'
| 'LIE'
| 'LKA'
| 'LSO'
| 'LTU'
| 'LUX'
| 'LVA'
| 'MAC'
| 'MAF'
| 'MAR'
| 'MCO'
| 'MDA'
| 'MDG'
| 'MDV'
| 'MEX'
| 'MHL'
| 'MKD'
| 'MLI'
| 'MLT'
| 'MMR'
| 'MNE'
| 'MNG'
| 'MNP'
| 'MOZ'
| 'MRT'
| 'MSR'
| 'MTQ'
| 'MUS'
| 'MWI'
| 'MYS'
| 'MYT'
| 'NAM'
| 'NCL'
| 'NER'
| 'NFK'
| 'NGA'
| 'NIC'
| 'NIU'
| 'NLD'
| 'NOR'
| 'NPL'
| 'NRU'
| 'NZL'
| 'OMN'
| 'PAK'
| 'PAN'
| 'PCN'
| 'PER'
| 'PHL'
| 'PLW'
| 'PNG'
| 'POL'
| 'PRI'
| 'PRK'
| 'PRT'
| 'PRY'
| 'PSE'
| 'PYF'
| 'QAT'
| 'REU'
| 'ROU'
| 'RUS'
| 'RWA'
| 'SAU'
| 'SCG'
| 'SDN'
| 'SEN'
| 'SGP'
| 'SGS'
| 'SHN'
| 'SJM'
| 'SLB'
| 'SLE'
| 'SLV'
| 'SMR'
| 'SOM'
| 'SPM'
| 'SRB'
| 'SSD'
| 'STP'
| 'SUN'
| 'SUR'
| 'SVK'
| 'SVN'
| 'SWE'
| 'SWZ'
| 'SXM'
| 'SYC'
| 'SYR'
| 'TCA'
| 'TCD'
| 'TGO'
| 'THA'
| 'TJK'
| 'TKL'
| 'TKM'
| 'TLS'
| 'TON'
| 'TTO'
| 'TUN'
| 'TUR'
| 'TUV'
| 'TWN'
| 'TZA'
| 'UGA'
| 'UKR'
| 'UMI'
| 'URY'
| 'USA'
| 'UZB'
| 'VAT'
| 'VCT'
| 'VEN'
| 'VGB'
| 'VIR'
| 'VNM'
| 'VUT'
| 'WLF'
| 'WSM'
| 'XUK'
| 'XXK'
| 'XXX'
| 'YEM'
| 'YUG'
| 'ZAF'
| 'ZMB'
| 'ZWE'
| '-'`,elements:[{name:"literal",value:"'???'"},{name:"literal",value:"'ABW'"},{name:"literal",value:"'AFG'"},{name:"literal",value:"'AGO'"},{name:"literal",value:"'AIA'"},{name:"literal",value:"'ALA'"},{name:"literal",value:"'ALB'"},{name:"literal",value:"'AND'"},{name:"literal",value:"'ANT'"},{name:"literal",value:"'ARE'"},{name:"literal",value:"'ARG'"},{name:"literal",value:"'ARM'"},{name:"literal",value:"'ASM'"},{name:"literal",value:"'ATG'"},{name:"literal",value:"'AUS'"},{name:"literal",value:"'AUT'"},{name:"literal",value:"'AZE'"},{name:"literal",value:"'BDI'"},{name:"literal",value:"'BEL'"},{name:"literal",value:"'BEN'"},{name:"literal",value:"'BES'"},{name:"literal",value:"'BFA'"},{name:"literal",value:"'BGD'"},{name:"literal",value:"'BGR'"},{name:"literal",value:"'BHR'"},{name:"literal",value:"'BHS'"},{name:"literal",value:"'BIH'"},{name:"literal",value:"'BLM'"},{name:"literal",value:"'BLR'"},{name:"literal",value:"'BLZ'"},{name:"literal",value:"'BMU'"},{name:"literal",value:"'BOL'"},{name:"literal",value:"'BRA'"},{name:"literal",value:"'BRB'"},{name:"literal",value:"'BRN'"},{name:"literal",value:"'BTN'"},{name:"literal",value:"'BVT'"},{name:"literal",value:"'BWA'"},{name:"literal",value:"'CAF'"},{name:"literal",value:"'CAN'"},{name:"literal",value:"'CCK'"},{name:"literal",value:"'CHE'"},{name:"literal",value:"'CHL'"},{name:"literal",value:"'CHN'"},{name:"literal",value:"'CIV'"},{name:"literal",value:"'CMR'"},{name:"literal",value:"'COD'"},{name:"literal",value:"'COG'"},{name:"literal",value:"'COK'"},{name:"literal",value:"'COL'"},{name:"literal",value:"'COM'"},{name:"literal",value:"'CPV'"},{name:"literal",value:"'CRI'"},{name:"literal",value:"'CSK'"},{name:"literal",value:"'CUB'"},{name:"literal",value:"'CUW'"},{name:"literal",value:"'CXR'"},{name:"literal",value:"'CYM'"},{name:"literal",value:"'CYP'"},{name:"literal",value:"'CZE'"},{name:"literal",value:"'DDR'"},{name:"literal",value:"'DEU'"},{name:"literal",value:"'DJI'"},{name:"literal",value:"'DMA'"},{name:"literal",value:"'DNK'"},{name:"literal",value:"'DOM'"},{name:"literal",value:"'DZA'"},{name:"literal",value:"'ECU'"},{name:"literal",value:"'EGY'"},{name:"literal",value:"'ERI'"},{name:"literal",value:"'ESH'"},{name:"literal",value:"'ESP'"},{name:"literal",value:"'EST'"},{name:"literal",value:"'ETH'"},{name:"literal",value:"'FIN'"},{name:"literal",value:"'FJI'"},{name:"literal",value:"'FLK'"},{name:"literal",value:"'FRA'"},{name:"literal",value:"'FRO'"},{name:"literal",value:"'FSM'"},{name:"literal",value:"'GAB'"},{name:"literal",value:"'GBR'"},{name:"literal",value:"'GEO'"},{name:"literal",value:"'GGY'"},{name:"literal",value:"'GHA'"},{name:"literal",value:"'GIB'"},{name:"literal",value:"'GIN'"},{name:"literal",value:"'GLP'"},{name:"literal",value:"'GMB'"},{name:"literal",value:"'GNB'"},{name:"literal",value:"'GNQ'"},{name:"literal",value:"'GRC'"},{name:"literal",value:"'GRD'"},{name:"literal",value:"'GRL'"},{name:"literal",value:"'GTM'"},{name:"literal",value:"'GUF'"},{name:"literal",value:"'GUM'"},{name:"literal",value:"'GUY'"},{name:"literal",value:"'HKG'"},{name:"literal",value:"'HMD'"},{name:"literal",value:"'HND'"},{name:"literal",value:"'HRV'"},{name:"literal",value:"'HTI'"},{name:"literal",value:"'HUN'"},{name:"literal",value:"'IDN'"},{name:"literal",value:"'IMN'"},{name:"literal",value:"'IND'"},{name:"literal",value:"'IOT'"},{name:"literal",value:"'IRL'"},{name:"literal",value:"'IRN'"},{name:"literal",value:"'IRQ'"},{name:"literal",value:"'ISL'"},{name:"literal",value:"'ISR'"},{name:"literal",value:"'ITA'"},{name:"literal",value:"'JAM'"},{name:"literal",value:"'JEY'"},{name:"literal",value:"'JOR'"},{name:"literal",value:"'JPN'"},{name:"literal",value:"'KAZ'"},{name:"literal",value:"'KEN'"},{name:"literal",value:"'KGZ'"},{name:"literal",value:"'KHM'"},{name:"literal",value:"'KIR'"},{name:"literal",value:"'KNA'"},{name:"literal",value:"'KOR'"},{name:"literal",value:"'KWT'"},{name:"literal",value:"'LAO'"},{name:"literal",value:"'LBN'"},{name:"literal",value:"'LBR'"},{name:"literal",value:"'LBY'"},{name:"literal",value:"'LCA'"},{name:"literal",value:"'LIE'"},{name:"literal",value:"'LKA'"},{name:"literal",value:"'LSO'"},{name:"literal",value:"'LTU'"},{name:"literal",value:"'LUX'"},{name:"literal",value:"'LVA'"},{name:"literal",value:"'MAC'"},{name:"literal",value:"'MAF'"},{name:"literal",value:"'MAR'"},{name:"literal",value:"'MCO'"},{name:"literal",value:"'MDA'"},{name:"literal",value:"'MDG'"},{name:"literal",value:"'MDV'"},{name:"literal",value:"'MEX'"},{name:"literal",value:"'MHL'"},{name:"literal",value:"'MKD'"},{name:"literal",value:"'MLI'"},{name:"literal",value:"'MLT'"},{name:"literal",value:"'MMR'"},{name:"literal",value:"'MNE'"},{name:"literal",value:"'MNG'"},{name:"literal",value:"'MNP'"},{name:"literal",value:"'MOZ'"},{name:"literal",value:"'MRT'"},{name:"literal",value:"'MSR'"},{name:"literal",value:"'MTQ'"},{name:"literal",value:"'MUS'"},{name:"literal",value:"'MWI'"},{name:"literal",value:"'MYS'"},{name:"literal",value:"'MYT'"},{name:"literal",value:"'NAM'"},{name:"literal",value:"'NCL'"},{name:"literal",value:"'NER'"},{name:"literal",value:"'NFK'"},{name:"literal",value:"'NGA'"},{name:"literal",value:"'NIC'"},{name:"literal",value:"'NIU'"},{name:"literal",value:"'NLD'"},{name:"literal",value:"'NOR'"},{name:"literal",value:"'NPL'"},{name:"literal",value:"'NRU'"},{name:"literal",value:"'NZL'"},{name:"literal",value:"'OMN'"},{name:"literal",value:"'PAK'"},{name:"literal",value:"'PAN'"},{name:"literal",value:"'PCN'"},{name:"literal",value:"'PER'"},{name:"literal",value:"'PHL'"},{name:"literal",value:"'PLW'"},{name:"literal",value:"'PNG'"},{name:"literal",value:"'POL'"},{name:"literal",value:"'PRI'"},{name:"literal",value:"'PRK'"},{name:"literal",value:"'PRT'"},{name:"literal",value:"'PRY'"},{name:"literal",value:"'PSE'"},{name:"literal",value:"'PYF'"},{name:"literal",value:"'QAT'"},{name:"literal",value:"'REU'"},{name:"literal",value:"'ROU'"},{name:"literal",value:"'RUS'"},{name:"literal",value:"'RWA'"},{name:"literal",value:"'SAU'"},{name:"literal",value:"'SCG'"},{name:"literal",value:"'SDN'"},{name:"literal",value:"'SEN'"},{name:"literal",value:"'SGP'"},{name:"literal",value:"'SGS'"},{name:"literal",value:"'SHN'"},{name:"literal",value:"'SJM'"},{name:"literal",value:"'SLB'"},{name:"literal",value:"'SLE'"},{name:"literal",value:"'SLV'"},{name:"literal",value:"'SMR'"},{name:"literal",value:"'SOM'"},{name:"literal",value:"'SPM'"},{name:"literal",value:"'SRB'"},{name:"literal",value:"'SSD'"},{name:"literal",value:"'STP'"},{name:"literal",value:"'SUN'"},{name:"literal",value:"'SUR'"},{name:"literal",value:"'SVK'"},{name:"literal",value:"'SVN'"},{name:"literal",value:"'SWE'"},{name:"literal",value:"'SWZ'"},{name:"literal",value:"'SXM'"},{name:"literal",value:"'SYC'"},{name:"literal",value:"'SYR'"},{name:"literal",value:"'TCA'"},{name:"literal",value:"'TCD'"},{name:"literal",value:"'TGO'"},{name:"literal",value:"'THA'"},{name:"literal",value:"'TJK'"},{name:"literal",value:"'TKL'"},{name:"literal",value:"'TKM'"},{name:"literal",value:"'TLS'"},{name:"literal",value:"'TON'"},{name:"literal",value:"'TTO'"},{name:"literal",value:"'TUN'"},{name:"literal",value:"'TUR'"},{name:"literal",value:"'TUV'"},{name:"literal",value:"'TWN'"},{name:"literal",value:"'TZA'"},{name:"literal",value:"'UGA'"},{name:"literal",value:"'UKR'"},{name:"literal",value:"'UMI'"},{name:"literal",value:"'URY'"},{name:"literal",value:"'USA'"},{name:"literal",value:"'UZB'"},{name:"literal",value:"'VAT'"},{name:"literal",value:"'VCT'"},{name:"literal",value:"'VEN'"},{name:"literal",value:"'VGB'"},{name:"literal",value:"'VIR'"},{name:"literal",value:"'VNM'"},{name:"literal",value:"'VUT'"},{name:"literal",value:"'WLF'"},{name:"literal",value:"'WSM'"},{name:"literal",value:"'XUK'"},{name:"literal",value:"'XXK'"},{name:"literal",value:"'XXX'"},{name:"literal",value:"'YEM'"},{name:"literal",value:"'YUG'"},{name:"literal",value:"'ZAF'"},{name:"literal",value:"'ZMB'"},{name:"literal",value:"'ZWE'"},{name:"literal",value:"'-'"}],required:!0}},{key:"LineærAvslagsårsak",value:{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1013'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"union",raw:`| '-'
| '5001'
| '5002'
| '5003'
| '5004'
| '5005'
| '5006'
| '5007'
| '5009'
| '5010'
| '5011'
| '5012'
| '5014'
| '5016'
| '5018'
| '5019'
| '5024'
| '5025'
| '5026'
| '5027'
| '5028'
| '5029'
| '5030'
| '5031'
| '5032'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'5001'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5010'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5018'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5032'"}],required:!0}},{key:"MedlemskapDekningType",value:{name:"union",raw:`| 'FTL_2_6'
| 'FTL_2_7_a'
| 'FTL_2_7_b'
| 'FTL_2_9_1_a'
| 'FTL_2_9_1_b'
| 'FTL_2_9_1_c'
| 'FTL_2_9_2_a'
| 'FTL_2_9_2_c'
| 'FULL'
| 'IHT_AVTALE'
| 'OPPHOR'
| 'UNNTATT'
| '-'`,elements:[{name:"literal",value:"'FTL_2_6'"},{name:"literal",value:"'FTL_2_7_a'"},{name:"literal",value:"'FTL_2_7_b'"},{name:"literal",value:"'FTL_2_9_1_a'"},{name:"literal",value:"'FTL_2_9_1_b'"},{name:"literal",value:"'FTL_2_9_1_c'"},{name:"literal",value:"'FTL_2_9_2_a'"},{name:"literal",value:"'FTL_2_9_2_c'"},{name:"literal",value:"'FULL'"},{name:"literal",value:"'IHT_AVTALE'"},{name:"literal",value:"'OPPHOR'"},{name:"literal",value:"'UNNTATT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"union",raw:`| '-'
| 'MEDLEM'
| 'UNNTAK'
| 'IKKE_RELEVANT'
| 'OPPHOR_PGA_ENDRING_I_TPS'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'MEDLEM'"},{name:"literal",value:"'UNNTAK'"},{name:"literal",value:"'IKKE_RELEVANT'"},{name:"literal",value:"'OPPHOR_PGA_ENDRING_I_TPS'"}],required:!0}},{key:"MedlemskapType",value:{name:"union",raw:`| 'ENDELIG'
| 'FORELOPIG'
| 'AVKLARES'
| '-'`,elements:[{name:"literal",value:"'ENDELIG'"},{name:"literal",value:"'FORELOPIG'"},{name:"literal",value:"'AVKLARES'"},{name:"literal",value:"'-'"}],required:!0}},{key:"MorsAktivitet",value:{name:"union",raw:`| '-'
| 'ARBEID'
| 'UTDANNING'
| 'KVALPROG'
| 'INTROPROG'
| 'TRENGER_HJELP'
| 'INNLAGT'
| 'ARBEID_OG_UTDANNING'
| 'UFØRE'
| 'IKKE_OPPGITT'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'KVALPROG'"},{name:"literal",value:"'INTROPROG'"},{name:"literal",value:"'TRENGER_HJELP'"},{name:"literal",value:"'INNLAGT'"},{name:"literal",value:"'ARBEID_OG_UTDANNING'"},{name:"literal",value:"'UFØRE'"},{name:"literal",value:"'IKKE_OPPGITT'"}],required:!0}},{key:"NaturalYtelseType",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"InnsynResultatType",value:{name:"union",raw:"'INNV' | 'DELV' | 'AVVIST' | '-'",elements:[{name:"literal",value:"'INNV'"},{name:"literal",value:"'DELV'"},{name:"literal",value:"'AVVIST'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OppholdÅrsak",value:{name:"union",raw:`| '-'
| 'UTTAK_MØDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FEDREKVOTE_ANNEN_FORELDER'
| 'UTTAK_FELLESP_ANNEN_FORELDER'
| 'UTTAK_FORELDREPENGER_ANNEN_FORELDER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTTAK_MØDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FEDREKVOTE_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FELLESP_ANNEN_FORELDER'"},{name:"literal",value:"'UTTAK_FORELDREPENGER_ANNEN_FORELDER'"}],required:!0}},{key:"OppgaveType",value:{name:"union",raw:"'VUR_KONSEKVENS' | 'VUR_DOKUMENT'",elements:[{name:"literal",value:"'VUR_KONSEKVENS'"},{name:"literal",value:"'VUR_DOKUMENT'"}],required:!0}},{key:"OppholdstillatelseType",value:{name:"union",raw:"'MIDLERTIDIG' | 'PERMANENT' | '-'",elements:[{name:"literal",value:"'MIDLERTIDIG'"},{name:"literal",value:"'PERMANENT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OpptjeningAktivitetType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'FRISINN'
| 'ETTERLØNN_SLUTTPAKKE'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VENTELØNN_VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'UTDANNINGSPERMISJON'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OverføringÅrsak",value:{name:"union",raw:`| 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'
| 'SYKDOM_ANNEN_FORELDER'
| 'IKKE_RETT_ANNEN_FORELDER'
| 'ALENEOMSORG'
| '-'`,elements:[{name:"literal",value:"'INSTITUSJONSOPPHOLD_ANNEN_FORELDER'"},{name:"literal",value:"'SYKDOM_ANNEN_FORELDER'"},{name:"literal",value:"'IKKE_RETT_ANNEN_FORELDER'"},{name:"literal",value:"'ALENEOMSORG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"union",raw:`| '-'
| '2002'
| '2003'
| '2004'
| '2005'
| '2006'
| '2007'
| '2010'
| '2011'
| '2012'
| '2013'
| '2014'
| '2015'
| '2016'
| '2017'
| '2018'
| '2019'
| '2020'
| '2021'
| '2022'
| '2023'
| '2024'
| '2025'
| '2026'
| '2027'
| '2028'
| '2030'
| '2031'
| '2032'
| '2033'
| '2034'
| '2035'
| '2036'
| '2037'
| '2038'
| '2039'
| '4002'
| '4003'
| '4005'
| '4007'
| '4008'
| '4012'
| '4013'
| '4020'
| '4022'
| '4023'
| '4025'
| '4030'
| '4031'
| '4032'
| '4033'
| '4034'
| '4035'
| '4037'
| '4038'
| '4039'
| '4040'
| '4041'
| '4050'
| '4051'
| '4052'
| '4053'
| '4054'
| '4055'
| '4056'
| '4057'
| '4058'
| '4059'
| '4060'
| '4061'
| '4062'
| '4063'
| '4064'
| '4065'
| '4066'
| '4067'
| '4068'
| '4069'
| '4070'
| '4071'
| '4072'
| '4073'
| '4074'
| '4075'
| '4076'
| '4077'
| '4081'
| '4082'
| '4084'
| '4085'
| '4086'
| '4087'
| '4088'
| '4089'
| '4092'
| '4093'
| '4095'
| '4096'
| '4097'
| '4098'
| '4099'
| '4100'
| '4102'
| '4103'
| '4104'
| '4105'
| '4106'
| '4107'
| '4108'
| '4110'
| '4111'
| '4112'
| '4115'
| '4116'
| '4117'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'2002'"},{name:"literal",value:"'2003'"},{name:"literal",value:"'2004'"},{name:"literal",value:"'2005'"},{name:"literal",value:"'2006'"},{name:"literal",value:"'2007'"},{name:"literal",value:"'2010'"},{name:"literal",value:"'2011'"},{name:"literal",value:"'2012'"},{name:"literal",value:"'2013'"},{name:"literal",value:"'2014'"},{name:"literal",value:"'2015'"},{name:"literal",value:"'2016'"},{name:"literal",value:"'2017'"},{name:"literal",value:"'2018'"},{name:"literal",value:"'2019'"},{name:"literal",value:"'2020'"},{name:"literal",value:"'2021'"},{name:"literal",value:"'2022'"},{name:"literal",value:"'2023'"},{name:"literal",value:"'2024'"},{name:"literal",value:"'2025'"},{name:"literal",value:"'2026'"},{name:"literal",value:"'2027'"},{name:"literal",value:"'2028'"},{name:"literal",value:"'2030'"},{name:"literal",value:"'2031'"},{name:"literal",value:"'2032'"},{name:"literal",value:"'2033'"},{name:"literal",value:"'2034'"},{name:"literal",value:"'2035'"},{name:"literal",value:"'2036'"},{name:"literal",value:"'2037'"},{name:"literal",value:"'2038'"},{name:"literal",value:"'2039'"},{name:"literal",value:"'4002'"},{name:"literal",value:"'4003'"},{name:"literal",value:"'4005'"},{name:"literal",value:"'4007'"},{name:"literal",value:"'4008'"},{name:"literal",value:"'4012'"},{name:"literal",value:"'4013'"},{name:"literal",value:"'4020'"},{name:"literal",value:"'4022'"},{name:"literal",value:"'4023'"},{name:"literal",value:"'4025'"},{name:"literal",value:"'4030'"},{name:"literal",value:"'4031'"},{name:"literal",value:"'4032'"},{name:"literal",value:"'4033'"},{name:"literal",value:"'4034'"},{name:"literal",value:"'4035'"},{name:"literal",value:"'4037'"},{name:"literal",value:"'4038'"},{name:"literal",value:"'4039'"},{name:"literal",value:"'4040'"},{name:"literal",value:"'4041'"},{name:"literal",value:"'4050'"},{name:"literal",value:"'4051'"},{name:"literal",value:"'4052'"},{name:"literal",value:"'4053'"},{name:"literal",value:"'4054'"},{name:"literal",value:"'4055'"},{name:"literal",value:"'4056'"},{name:"literal",value:"'4057'"},{name:"literal",value:"'4058'"},{name:"literal",value:"'4059'"},{name:"literal",value:"'4060'"},{name:"literal",value:"'4061'"},{name:"literal",value:"'4062'"},{name:"literal",value:"'4063'"},{name:"literal",value:"'4064'"},{name:"literal",value:"'4065'"},{name:"literal",value:"'4066'"},{name:"literal",value:"'4067'"},{name:"literal",value:"'4068'"},{name:"literal",value:"'4069'"},{name:"literal",value:"'4070'"},{name:"literal",value:"'4071'"},{name:"literal",value:"'4072'"},{name:"literal",value:"'4073'"},{name:"literal",value:"'4074'"},{name:"literal",value:"'4075'"},{name:"literal",value:"'4076'"},{name:"literal",value:"'4077'"},{name:"literal",value:"'4081'"},{name:"literal",value:"'4082'"},{name:"literal",value:"'4084'"},{name:"literal",value:"'4085'"},{name:"literal",value:"'4086'"},{name:"literal",value:"'4087'"},{name:"literal",value:"'4088'"},{name:"literal",value:"'4089'"},{name:"literal",value:"'4092'"},{name:"literal",value:"'4093'"},{name:"literal",value:"'4095'"},{name:"literal",value:"'4096'"},{name:"literal",value:"'4097'"},{name:"literal",value:"'4098'"},{name:"literal",value:"'4099'"},{name:"literal",value:"'4100'"},{name:"literal",value:"'4102'"},{name:"literal",value:"'4103'"},{name:"literal",value:"'4104'"},{name:"literal",value:"'4105'"},{name:"literal",value:"'4106'"},{name:"literal",value:"'4107'"},{name:"literal",value:"'4108'"},{name:"literal",value:"'4110'"},{name:"literal",value:"'4111'"},{name:"literal",value:"'4112'"},{name:"literal",value:"'4115'"},{name:"literal",value:"'4116'"},{name:"literal",value:"'4117'"}],required:!0}},{key:"PersonstatusType",value:{name:"union",raw:`| 'ADNR'
| 'BOSA'
| 'DØD'
| 'FOSV'
| 'FØDR'
| 'UREG'
| 'UTPE'
| 'UTVA'
| '-'`,elements:[{name:"literal",value:"'ADNR'"},{name:"literal",value:"'BOSA'"},{name:"literal",value:"'DØD'"},{name:"literal",value:"'FOSV'"},{name:"literal",value:"'FØDR'"},{name:"literal",value:"'UREG'"},{name:"literal",value:"'UTPE'"},{name:"literal",value:"'UTVA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Region",value:{name:"union",raw:"'NORDEN' | 'EOS' | 'ANNET' | '-'",elements:[{name:"literal",value:"'NORDEN'"},{name:"literal",value:"'EOS'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}},{key:"RelasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"union",raw:`| 'BARNIKKEREG'
| 'JOBBFULLTID'
| 'IKKEOPPTJENT'
| 'UTVANDRET'
| 'JOBBUTLAND'
| 'IKKEOPPHOLD'
| 'JOBB6MND'
| 'AKTIVITET'
| 'ANNET'`,elements:[{name:"literal",value:"'BARNIKKEREG'"},{name:"literal",value:"'JOBBFULLTID'"},{name:"literal",value:"'IKKEOPPTJENT'"},{name:"literal",value:"'UTVANDRET'"},{name:"literal",value:"'JOBBUTLAND'"},{name:"literal",value:"'IKKEOPPHOLD'"},{name:"literal",value:"'JOBB6MND'"},{name:"literal",value:"'AKTIVITET'"},{name:"literal",value:"'ANNET'"}],required:!0}},{key:"SivilstandType",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}},{key:"SkjermlenkeType",value:{name:"union",raw:`| 'ANKE_MERKNADER'
| 'ANKE_VURDERING'
| 'BEREGNING_ENGANGSSTOENAD'
| 'BEREGNING_FORELDREPENGER'
| 'BESTEBEREGNING'
| 'FAKTA_FOR_OMSORG'
| 'FAKTA_FOR_OPPTJENING'
| 'FAKTA_OM_ADOPSJON'
| 'FAKTA_OM_ARBEIDSFORHOLD'
| 'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'
| 'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'
| 'FAKTA_OM_BEREGNING'
| 'FAKTA_OM_FOEDSEL'
| 'FAKTA_OM_FORDELING'
| 'FAKTA_OM_MEDLEMSKAP'
| 'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'
| 'FAKTA_OM_OPPTJENING'
| 'FAKTA_OM_SIMULERING'
| 'FAKTA_OM_UTTAK'
| 'FAKTA_OM_AKTIVITETSKRAV'
| 'FAKTA_OMSORG_OG_RETT'
| 'FAKTA_OM_VERGE'
| 'FORMKRAV_KLAGE_KA'
| 'FORMKRAV_KLAGE_NFP'
| 'KLAGE_BEH_NFP'
| 'KLAGE_BEH_NK'
| 'KONTROLL_AV_SAKSOPPLYSNINGER'
| 'OPPLYSNINGSPLIKT'
| 'PUNKT_FOR_ADOPSJON'
| 'PUNKT_FOR_FOEDSEL'
| 'PUNKT_FOR_FORELDREANSVAR'
| 'PUNKT_FOR_MEDLEMSKAP'
| 'PUNKT_FOR_MEDLEMSKAP_LØPENDE'
| 'PUNKT_FOR_OMSORG'
| 'PUNKT_FOR_OPPTJENING'
| 'PUNKT_FOR_SVANGERSKAPSPENGER'
| 'PUNKT_FOR_SVP_INNGANG'
| 'SOEKNADSFRIST'
| 'TILKJENT_YTELSE'
| '-'
| 'UTLAND'
| 'UTTAK'
| 'VEDTAK'
| 'VURDER_FARESIGNALER'
| 'FAKTA_OM_UTTAK_DOKUMENTASJON'
| 'FAKTA_UTTAK'
| 'FAKTA_UTTAK_EØS'`,elements:[{name:"literal",value:"'ANKE_MERKNADER'"},{name:"literal",value:"'ANKE_VURDERING'"},{name:"literal",value:"'BEREGNING_ENGANGSSTOENAD'"},{name:"literal",value:"'BEREGNING_FORELDREPENGER'"},{name:"literal",value:"'BESTEBEREGNING'"},{name:"literal",value:"'FAKTA_FOR_OMSORG'"},{name:"literal",value:"'FAKTA_FOR_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_ADOPSJON'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'"},{name:"literal",value:"'FAKTA_OM_BEREGNING'"},{name:"literal",value:"'FAKTA_OM_FOEDSEL'"},{name:"literal",value:"'FAKTA_OM_FORDELING'"},{name:"literal",value:"'FAKTA_OM_MEDLEMSKAP'"},{name:"literal",value:"'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'"},{name:"literal",value:"'FAKTA_OM_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_SIMULERING'"},{name:"literal",value:"'FAKTA_OM_UTTAK'"},{name:"literal",value:"'FAKTA_OM_AKTIVITETSKRAV'"},{name:"literal",value:"'FAKTA_OMSORG_OG_RETT'"},{name:"literal",value:"'FAKTA_OM_VERGE'"},{name:"literal",value:"'FORMKRAV_KLAGE_KA'"},{name:"literal",value:"'FORMKRAV_KLAGE_NFP'"},{name:"literal",value:"'KLAGE_BEH_NFP'"},{name:"literal",value:"'KLAGE_BEH_NK'"},{name:"literal",value:"'KONTROLL_AV_SAKSOPPLYSNINGER'"},{name:"literal",value:"'OPPLYSNINGSPLIKT'"},{name:"literal",value:"'PUNKT_FOR_ADOPSJON'"},{name:"literal",value:"'PUNKT_FOR_FOEDSEL'"},{name:"literal",value:"'PUNKT_FOR_FORELDREANSVAR'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP_LØPENDE'"},{name:"literal",value:"'PUNKT_FOR_OMSORG'"},{name:"literal",value:"'PUNKT_FOR_OPPTJENING'"},{name:"literal",value:"'PUNKT_FOR_SVANGERSKAPSPENGER'"},{name:"literal",value:"'PUNKT_FOR_SVP_INNGANG'"},{name:"literal",value:"'SOEKNADSFRIST'"},{name:"literal",value:"'TILKJENT_YTELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'UTLAND'"},{name:"literal",value:"'UTTAK'"},{name:"literal",value:"'VEDTAK'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'FAKTA_OM_UTTAK_DOKUMENTASJON'"},{name:"literal",value:"'FAKTA_UTTAK'"},{name:"literal",value:"'FAKTA_UTTAK_EØS'"}],required:!0}},{key:"StønadskontoType",value:{name:"union",raw:`| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FELLESPERIODE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| 'FLERBARNSDAGER'
| 'UTEN_AKTIVITETSKRAV'
| 'MINSTERETT_NESTE_STØNADSPERIODE'
| 'MINSTERETT'`,elements:[{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'FLERBARNSDAGER'"},{name:"literal",value:"'UTEN_AKTIVITETSKRAV'"},{name:"literal",value:"'MINSTERETT_NESTE_STØNADSPERIODE'"},{name:"literal",value:"'MINSTERETT'"}],required:!0}},{key:"UtsettelseÅrsak",value:{name:"union",raw:`| 'ARBEID'
| 'LOVBESTEMT_FERIE'
| 'SYKDOM'
| 'INSTITUSJONSOPPHOLD_SØKER'
| 'INSTITUSJONSOPPHOLD_BARNET'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'LOVBESTEMT_FERIE'"},{name:"literal",value:"'SYKDOM'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_SØKER'"},{name:"literal",value:"'INSTITUSJONSOPPHOLD_BARNET'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!0}},{key:"UttakArbeidType",value:{name:"union",raw:`| 'ORDINÆRT_ARBEID'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'FRILANS'
| 'ANNET'`,elements:[{name:"literal",value:"'ORDINÆRT_ARBEID'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'ANNET'"}],required:!0}},{key:"UttakPeriodeType",value:{name:"union",raw:`| 'FELLESPERIODE'
| 'MØDREKVOTE'
| 'FEDREKVOTE'
| 'FORELDREPENGER'
| 'FORELDREPENGER_FØR_FØDSEL'
| '-'`,elements:[{name:"literal",value:"'FELLESPERIODE'"},{name:"literal",value:"'MØDREKVOTE'"},{name:"literal",value:"'FEDREKVOTE'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_FØR_FØDSEL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"UttakUtsettelseType",value:{name:"union",raw:`| 'ARBEID'
| 'FERIE'
| 'SYKDOM_SKADE'
| 'SØKER_INNLAGT'
| 'BARN_INNLAGT'
| 'HV_OVELSE'
| 'NAV_TILTAK'
| 'FRI'
| '-'`,elements:[{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'FERIE'"},{name:"literal",value:"'SYKDOM_SKADE'"},{name:"literal",value:"'SØKER_INNLAGT'"},{name:"literal",value:"'BARN_INNLAGT'"},{name:"literal",value:"'HV_OVELSE'"},{name:"literal",value:"'NAV_TILTAK'"},{name:"literal",value:"'FRI'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Venteårsak",value:{name:"union",raw:`| '-'
| 'AVV_DOK'
| 'AVV_FODSEL'
| 'FOR_TIDLIG_SOKNAD'
| 'SCANN'
| 'UTV_FRIST'
| 'VENT_PÅ_BRUKERTILBAKEMELDING'
| 'VENT_UTLAND_TRYGD'
| 'VENT_INNTEKT_RAPPORTERINGSFRIST'
| 'VENT_MANGLENDE_SYKEMELDING'
| 'VENT_OPDT_INNTEKTSMELDING'
| 'VENT_OPPTJENING_OPPLYSNINGER'
| 'VENT_PÅ_SISTE_AAP_MELDEKORT'
| 'VENT_SØKNAD_SENDT_INFORMASJONSBREV'
| 'VENT_ÅPEN_BEHANDLING'
| 'VENT_KABAL'
| 'ANKE_OVERSENDT_TIL_TRYGDERETTEN'
| 'ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER'
| 'AVV_RESPONS_REVURDERING'
| 'VENT_TIDLIGERE_BEHANDLING'
| 'AAP_DP_SISTE_10_MND_SVP'
| 'AAP_DP_ENESTE_AKTIVITET_SVP'
| 'DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP'
| 'FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP'
| 'FL_SN_IKKE_STOTTET_FOR_SVP'
| 'GRADERING_FLERE_ARBEIDSFORHOLD'
| 'OPPD_ÅPEN_BEH'
| 'REFUSJON_3_MÅNEDER'
| 'VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER'
| 'VENT_BEREGNING_TILBAKE_I_TID'
| 'VENT_DEKGRAD_REGEL'
| 'VENT_DØDFØDSEL_80P_DEKNINGSGRAD'
| 'VENT_FEIL_ENDRINGSSØKNAD'
| 'VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG'
| 'VENT_INFOTRYGD'
| 'VENT_MANGLENDE_ARBEIDSFORHOLD'
| 'VENT_MILITÆR_OG_BG_UNDER_3G'
| 'ULIKE_STARTDATOER_SVP'
| 'VENT_LOVENDRING_8_41'
| 'VENT_PÅ_KORRIGERT_BESTEBEREGNING'
| 'VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID'
| 'VENT_REGISTERINNHENTING'
| 'VENT_ØKONOMI'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'AVV_DOK'"},{name:"literal",value:"'AVV_FODSEL'"},{name:"literal",value:"'FOR_TIDLIG_SOKNAD'"},{name:"literal",value:"'SCANN'"},{name:"literal",value:"'UTV_FRIST'"},{name:"literal",value:"'VENT_PÅ_BRUKERTILBAKEMELDING'"},{name:"literal",value:"'VENT_UTLAND_TRYGD'"},{name:"literal",value:"'VENT_INNTEKT_RAPPORTERINGSFRIST'"},{name:"literal",value:"'VENT_MANGLENDE_SYKEMELDING'"},{name:"literal",value:"'VENT_OPDT_INNTEKTSMELDING'"},{name:"literal",value:"'VENT_OPPTJENING_OPPLYSNINGER'"},{name:"literal",value:"'VENT_PÅ_SISTE_AAP_MELDEKORT'"},{name:"literal",value:"'VENT_SØKNAD_SENDT_INFORMASJONSBREV'"},{name:"literal",value:"'VENT_ÅPEN_BEHANDLING'"},{name:"literal",value:"'VENT_KABAL'"},{name:"literal",value:"'ANKE_OVERSENDT_TIL_TRYGDERETTEN'"},{name:"literal",value:"'ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER'"},{name:"literal",value:"'AVV_RESPONS_REVURDERING'"},{name:"literal",value:"'VENT_TIDLIGERE_BEHANDLING'"},{name:"literal",value:"'AAP_DP_SISTE_10_MND_SVP'"},{name:"literal",value:"'AAP_DP_ENESTE_AKTIVITET_SVP'"},{name:"literal",value:"'DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP'"},{name:"literal",value:"'FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP'"},{name:"literal",value:"'FL_SN_IKKE_STOTTET_FOR_SVP'"},{name:"literal",value:"'GRADERING_FLERE_ARBEIDSFORHOLD'"},{name:"literal",value:"'OPPD_ÅPEN_BEH'"},{name:"literal",value:"'REFUSJON_3_MÅNEDER'"},{name:"literal",value:"'VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER'"},{name:"literal",value:"'VENT_BEREGNING_TILBAKE_I_TID'"},{name:"literal",value:"'VENT_DEKGRAD_REGEL'"},{name:"literal",value:"'VENT_DØDFØDSEL_80P_DEKNINGSGRAD'"},{name:"literal",value:"'VENT_FEIL_ENDRINGSSØKNAD'"},{name:"literal",value:"'VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'VENT_INFOTRYGD'"},{name:"literal",value:"'VENT_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENT_MILITÆR_OG_BG_UNDER_3G'"},{name:"literal",value:"'ULIKE_STARTDATOER_SVP'"},{name:"literal",value:"'VENT_LOVENDRING_8_41'"},{name:"literal",value:"'VENT_PÅ_KORRIGERT_BESTEBEREGNING'"},{name:"literal",value:"'VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID'"},{name:"literal",value:"'VENT_REGISTERINNHENTING'"},{name:"literal",value:"'VENT_ØKONOMI'"}],required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"VirksomhetType",value:{name:"union",raw:`| 'DAGMAMMA'
| 'FISKE'
| 'FRILANSER'
| 'JORDBRUK_SKOGBRUK'
| 'ANNEN'
| '-'`,elements:[{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'FISKE'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'JORDBRUK_SKOGBRUK'"},{name:"literal",value:"'ANNEN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"VurderÅrsak",value:{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}],required:!0}},{key:"Inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'LineærAvslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'LineærAvslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:`Exclude<
  KodeverkType,
  'Avslagsårsak' | 'LineærAvslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'
>`,required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<K extends KodeverkType ? K : unknown>[]"}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
  LineærAvslagsårsak: LineærAvslagsårsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"union",raw:"VilkårType | '-'",elements:[{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0},{name:"literal",value:"'-'"}]},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkårType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}},{key:"LineærAvslagsårsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'LineærAvslagsårsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"LineærAvslagsårsakKodeverk[]",required:!0}}]}}]},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},adopsjon:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""}}};const{AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE:Ie,AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN:de}=o,aa=({isForeldrepengerFagsak:a,soknad:n,adopsjon:r})=>{const{alleKodeverk:l,submitCallback:t,aksjonspunkterForPanel:s,harÅpentAksjonspunkt:i,alleMerknaderFraBeslutter:E,isReadOnly:d,isSubmittable:m}=I(),{mellomlagretFormData:_,setMellomlagretFormData:S}=C(),A=s.find(k=>k.definisjon===de),g=s.find(k=>k.definisjon===Ie),v=B({defaultValues:_??Gn(r,s)}),N=v.watch("begrunnelse"),R=k=>t(bn(k,s));return e.jsxs(D,{gap:"space-16",children:[e.jsxs(oe,{children:[i&&e.jsx(u,{id:"AdopsjonInfoPanel.KontrollerMotDok"},"KontrollerMotDok"),A?.status==="OPPR"&&e.jsx(u,{id:"AdopsjonInfoPanel.VurderOmEktefellesBarn"}),g?.status==="OPPR"&&e.jsx(u,{id:"AdopsjonInfoPanel.VurderOmMannAdoptererAlene"})]}),e.jsx(M,{formMethods:v,onSubmit:R,setDataOnUnmount:S,children:e.jsxs(D,{gap:"space-24",children:[e.jsx(ne,{readOnly:d,soknad:n,adopsjon:r,erForeldrepengerFagsak:a,alleMerknaderFraBeslutter:E,hasEktefellesBarnAksjonspunkt:X(de,s)}),A&&e.jsx(re,{readOnly:d,alleMerknaderFraBeslutter:E,adopsjon:r}),g&&e.jsx(le,{farSokerType:n.farSokerType??void 0,readOnly:d,adopsjon:r,alleMerknaderFraBeslutter:E,alleKodeverk:l}),s.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(O,{control:v.control,isSubmittable:m,isReadOnly:d,hasBegrunnelse:!!N}),e.jsx(se,{isSubmittable:m,isReadOnly:d,isSubmitting:v.formState.isSubmitting,isDirty:v.formState.isDirty})]})]})})]})},Gn=(a,n)=>{const r=X(de,n),l=X(Ie,n);return{...ne.initialValues(a),...r?re.buildInitialValues(a):{},...l?le.buildInitialValues(a):{},...O.initialValues(n[0])}},bn=(a,n)=>{const r=X(de,n),l=X(Ie,n);return[ne.transformValues(a),...r&&a.ektefellesBarn!==void 0?[re.transformValues(a.ektefellesBarn)]:[],...l&&a.mannAdoptererAlene!==void 0?[le.transformValues(a.mannAdoptererAlene)]:[]].map(s=>({...s,begrunnelse:a.begrunnelse}))};aa.__docgenInfo={description:`AdopsjonInfoPanel

Har ansvar for å sette opp formen for faktapenelet til Adopsjonsvilkåret.`,methods:[],displayName:"AdopsjonInfoPanel",props:{isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},soknad:{required:!0,tsType:{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},description:""},adopsjon:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""}}};const Vn={"AdopsjonInfoPanel.KontrollerMotDok":"Kontroller mot opplysningene fra adopsjonsdokumentasjonen","AdopsjonInfoPanel.VurderOmEktefellesBarn":"Vurder om det er ektefelles/samboers barn som adopteres","AdopsjonInfoPanel.VurderOmMannAdoptererAlene":"Vurder om mann adopterer alene","DokumentasjonFaktaForm.ApplicationInformation":"Adopsjonsopplysninger fra søknad","DokumentasjonFaktaForm.Omsorgsovertakelsesdato":"Omsorgsovertakelsesdato","DokumentasjonFaktaForm.Stebarnsadopsjon":"Stebarnsadopsjonsdato","DokumentasjonFaktaForm.BarnNr":"Barn {nummer}","DokumentasjonFaktaForm.Fodselsdato":"Fødselsdato","DokumentasjonFaktaForm.AntallBarnSomFyllerVilkaret":"Antall barn som fyller vilkåret","DokumentasjonFaktaForm.BarnErOver15Ar":"Barnet er over 15 år ved omsorgsovertakelsen","DokumentasjonFaktaForm.DatoForBarnetsAnkomstTilNorge.Label":"Barnets ankomstdato til Norge","DokumentasjonFaktaForm.DatoForBarnetsAnkomstTilNorge.Description":"ved utenlandsadopsjon","MannAdoptererAleneFaktaForm.ApplicationInformation":"Mann adopterer","MannAdoptererAleneFaktaForm.Opplysninger":"Opplysninger oppgitt i søknaden","MannAdoptererAleneFaktaForm.APSpørsmål":"Vurder om mannen adopterer alene","MannAdoptererAleneFaktaForm.Ja":"Ja, adopterer alene","MannAdoptererAleneFaktaForm.Nei":"Nei, adopterer ikke alene","EktefelleFaktaForm.ApplicationInformation":"Ektefelles/samboers barn","EktefelleFaktaForm.APSpørsmål":"Er det ektefelles/samboers barn som adopteres?","EktefelleFaktaForm.Ja":"Ja, det er ektefelles/samboers barn","EktefelleFaktaForm.Nei":"Nei, det er ikke ektefelles/samboers barn"},fn=z(Vn),na=a=>e.jsx($,{value:fn,children:e.jsx(aa,{...a})});na.__docgenInfo={description:"",methods:[],displayName:"AdopsjonFaktaIndex",props:{soknad:{required:!0,tsType:{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},description:""},adopsjon:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const jn=[o.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE,o.AVKLAR_ADOPSJONSDOKUMENTAJON,o.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN],qn=()=>{const a=Ke(jn),{behandling:n,fagsak:r}=q.use(_e),l=n.vilkår.some(E=>On.has(E.vilkarType)),t=pe(n),{data:s}=Z(t.familiehendelseOptions(n,l)),{data:i}=Z(t.søknadOptions(n));return e.jsx(Oe,{standardPanelProps:a,faktaPanelKode:De.ADOPSJONSVILKARET,faktaPanelMenyTekst:T().formatMessage({id:"FaktaInitPanel.Title.Adopsjon"}),skalPanelVisesIMeny:l,children:s?.adopsjon&&i&&i.soknadType==="ST-002"?e.jsx(na,{adopsjon:s.adopsjon,soknad:i,isForeldrepengerFagsak:r.fagsakYtelseType==="FP"}):e.jsx(Re,{})})};qn.__docgenInfo={description:"",methods:[],displayName:"AdopsjonsvilkaretFaktaInitPanel"};const cn="_tableNoBorder_k9vdg_1",Bn="_rowDescription_k9vdg_15",Be={tableNoBorder:cn,rowDescription:Bn},ae="barn",Mn={fødselsdato:"",dødsdato:"",kanOverstyres:!0,kilde:"SAKSBEHANDLER"},te=({isReadOnly:a})=>{const n=T(),{control:r,getValues:l,setError:t,clearErrors:s,formState:{dirtyFields:i,errors:E}}=x(),{fields:d,remove:m,append:_}=an({control:r,name:ae}),S=nn({control:r,name:ae});q.useEffect(()=>{wn(l,t,s)},[S]);const A=c().toDate(),g=!a||S.some(v=>v.dødsdato!==void 0);return e.jsxs(D,{gap:"space-8",children:[e.jsxs(F,{className:Be.tableNoBorder,size:"small",children:[e.jsx(F.Header,{children:e.jsxs(F.Row,{children:[d.length>1&&e.jsx(F.HeaderCell,{children:e.jsx(u,{id:"Label.Barn"})}),e.jsx(F.HeaderCell,{children:e.jsx(u,{id:"Label.Fødselsdato"})}),g&&e.jsx(F.HeaderCell,{children:e.jsx(u,{id:"Label.Dødsdato"})}),e.jsx(F.HeaderCell,{})]})}),e.jsx(F.Body,{children:d.map((v,N)=>{const R=i.barn?.[N]?.fødselsdato??i.barn?.[N]?.dødsdato,k=`${ae}.${N}`;return e.jsxs(F.Row,{shadeOnHover:!1,children:[d.length>1&&e.jsx(F.DataCell,{children:e.jsx(p,{size:"medium",label:e.jsx(u,{id:"Label.Barn"}),value:N+1,hideLabel:!0})}),e.jsx(F.DataCell,{children:e.jsx(w,{size:"medium",control:r,name:`${k}.fødselsdato`,label:n.formatMessage({id:"Label.Fødselsdato"}),hideLabel:!0,validate:[K,U,xe(ye()),Le],fromDate:ye().toDate(),toDate:ba().toDate(),isReadOnly:a,disabled:!v.kanOverstyres})}),g&&e.jsx(F.DataCell,{children:e.jsx(w,{name:`${k}.dødsdato`,control:r,size:"medium",label:n.formatMessage({id:"Label.Dødsdato"}),hideLabel:!0,validate:[U,Le,Un(l,N)],toDate:A,isReadOnly:a,disabled:!v.kanOverstyres})}),e.jsx(F.DataCell,{className:Be.rowDescription,children:e.jsxs(G,{gap:"space-8",align:"center",children:[e.jsx(ze,{children:$e(R?"SAKSBEHANDLER":v.kilde)}),!a&&e.jsxs(e.Fragment,{children:[!v.kanOverstyres&&e.jsx(Kn,{children:e.jsx(u,{id:"BarnFieldArray.HelpText"})}),e.jsx(rn,{index:N,remove:m,size:"small",skjul:!v.kanOverstyres||a})]})]})})]},v.id)})})]}),!a&&E.barn&&e.jsx(_n,{children:E.barn.message}),e.jsx("div",{children:e.jsx(ln,{append:_,emptyTemplate:Mn,size:"small",skjul:a||d.length>=9,children:e.jsx(u,{id:"BarnFieldArray.LeggTilBarn"})})})]})};te.initialValues=({barn:a,antallBarn:n})=>({barn:a.length>0?a.map(({barn:{fødselsdato:r,dødsdato:l},kanOverstyres:t,kilde:s})=>({fødselsdato:r,dødsdato:l,kanOverstyres:t,kilde:s})):hn(n.antall)});te.transformValues=(a,n)=>n?{barn:a.barn.map(({fødselsdato:r,dødsdato:l})=>({fødselsdato:r,dødsdato:l||void 0}))}:{barn:null};const hn=a=>{const n=a>0?a:1;return new Array(n).fill({fødselsdato:"",kanOverstyres:!0,kilde:"SAKSBEHANDLER"})},Un=(a,n)=>r=>{const l=a(`${ae}.${n}.fødselsdato`);return Va(l,r)},wn=(a,n,r)=>{const l=a("barn"),{minDate:t,maxDate:s}=l.reduce((i,E)=>{const d=c(E.fødselsdato);return(!i.minDate||d.isBefore(i.minDate))&&(i.minDate=d),(!i.maxDate||d.isAfter(i.maxDate))&&(i.maxDate=d),i},{});return t&&s&&s.diff(t,"day")>2?(n(ae,{type:"manual",message:"Fødseldatoer må være innenfor 2 dager av hverandre"}),!1):(r(ae),!0)};te.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"{ barn, antallBarn }: FødselGjeldende",optional:!1,type:{name:"signature",type:"object",raw:`{
  antallBarn: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_AntallBarn;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>;
  fødselDokumetasjonStatus: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_FødselDokumetasjonStatus;
  termin?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Termin;
  utstedtdato?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Utstedtdato;
}`,signature:{properties:[{key:"antallBarn",value:{name:"signature",type:"object",raw:`{
  antall: number;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"antall",value:{name:"number",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barn: tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData;
  kanOverstyres: boolean;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"barn",value:{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>",required:!0}},{key:"fødselDokumetasjonStatus",value:{name:"union",raw:`| 'DOKUMENTERT'
| 'IKKE_DOKUMENTERT'
| 'IKKE_VURDERT'`,elements:[{name:"literal",value:"'DOKUMENTERT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"},{name:"literal",value:"'IKKE_VURDERT'"}],required:!0}},{key:"termin",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  termindato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"termindato",value:{name:"string",required:!0}}]},required:!1}},{key:"utstedtdato",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  utstedtdato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"utstedtdato",value:{name:"string",required:!0}}]},required:!1}}]},alias:"FødselGjeldende"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [FIELD_ARRAY_NAME]: FieldArrayRow[];
}`,signature:{properties:[{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fødselsdato: string;
  dødsdato?: string;
  kanOverstyres: boolean;
  kilde: FaktaKilde;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SØKNAD' | 'FOLKEREGISTER' | 'MEDL' | 'SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"},{name:"literal",value:"'MEDL'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}}]}}],raw:"FieldArrayRow[]",required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [FIELD_ARRAY_NAME]: FieldArrayRow[];
}`,signature:{properties:[{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fødselsdato: string;
  dødsdato?: string;
  kanOverstyres: boolean;
  kilde: FaktaKilde;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SØKNAD' | 'FOLKEREGISTER' | 'MEDL' | 'SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"},{name:"literal",value:"'MEDL'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}}]}}],raw:"FieldArrayRow[]",required:!0}}]},alias:"BarnFormValues"}},{name:"erBarnFødt",optional:!1,type:{name:"boolean"}}],returns:{type:{name:"signature",type:"object",raw:"{ barn: { fødselsdato: string; dødsdato: string | undefined }[] | null }",signature:{properties:[{key:"barn",value:{name:"union",raw:"{ fødselsdato: string; dødsdato: string | undefined }[] | null",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:"{ fødselsdato: string; dødsdato: string | undefined }",signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}],raw:"{ fødselsdato: string; dødsdato: string | undefined }[]"},{name:"null"}],required:!0}}]}}}}],displayName:"BarnFieldArray",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Y=({isReadOnly:a,finnesBarnIFReg:n,antallBarnISøknad:r})=>{const l=T(),{control:t,watch:s}=x(),i=s("erBarnFødt");return e.jsxs(D,{gap:"space-16",children:[e.jsx(ie,{control:t,name:"erBarnFødt",label:l.formatMessage({id:"ErBarnFødt.Label"},{antallBarn:r}),validate:[K],isReadOnly:a,size:"medium",children:e.jsxs(G,{gap:"space-16",children:[e.jsx(J,{value:!0,children:e.jsx(u,{id:"ErBarnFødt.Ja"})}),e.jsx(J,{value:!1,disabled:n,children:e.jsx(u,{id:"ErBarnFødt.Nei"})})]})}),i&&e.jsx(te,{isReadOnly:a})]})};Y.initialValues=a=>({erBarnFødt:Jn(a),...te.initialValues(a)});Y.transformValues=a=>({...te.transformValues(a,!!a.erBarnFødt)});const Jn=({fødselDokumetasjonStatus:a,barn:n})=>{const r=n.some(l=>l.kilde==="FOLKEREGISTER");switch(a){case"DOKUMENTERT":return!0;case"IKKE_DOKUMENTERT":return!1;case"IKKE_VURDERT":return r||void 0}};Y.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"gjeldende",optional:!1,type:{name:"signature",type:"object",raw:`{
  antallBarn: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_AntallBarn;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>;
  fødselDokumetasjonStatus: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_FødselDokumetasjonStatus;
  termin?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Termin;
  utstedtdato?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Utstedtdato;
}`,signature:{properties:[{key:"antallBarn",value:{name:"signature",type:"object",raw:`{
  antall: number;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"antall",value:{name:"number",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barn: tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData;
  kanOverstyres: boolean;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"barn",value:{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>",required:!0}},{key:"fødselDokumetasjonStatus",value:{name:"union",raw:`| 'DOKUMENTERT'
| 'IKKE_DOKUMENTERT'
| 'IKKE_VURDERT'`,elements:[{name:"literal",value:"'DOKUMENTERT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"},{name:"literal",value:"'IKKE_VURDERT'"}],required:!0}},{key:"termin",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  termindato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"termindato",value:{name:"string",required:!0}}]},required:!1}},{key:"utstedtdato",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  utstedtdato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"utstedtdato",value:{name:"string",required:!0}}]},required:!1}}]},alias:"FødselGjeldende"}}],returns:{type:{name:"intersection",raw:`{
  erBarnFødt: boolean | undefined;
} & BarnFormValues`,elements:[{name:"signature",type:"object",raw:`{
  erBarnFødt: boolean | undefined;
}`,signature:{properties:[{key:"erBarnFødt",value:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  [FIELD_ARRAY_NAME]: FieldArrayRow[];
}`,signature:{properties:[{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fødselsdato: string;
  dødsdato?: string;
  kanOverstyres: boolean;
  kilde: FaktaKilde;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SØKNAD' | 'FOLKEREGISTER' | 'MEDL' | 'SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"},{name:"literal",value:"'MEDL'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}}]}}],raw:"FieldArrayRow[]",required:!0}}]}}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`{
  erBarnFødt: boolean | undefined;
} & BarnFormValues`,elements:[{name:"signature",type:"object",raw:`{
  erBarnFødt: boolean | undefined;
}`,signature:{properties:[{key:"erBarnFødt",value:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  [FIELD_ARRAY_NAME]: FieldArrayRow[];
}`,signature:{properties:[{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fødselsdato: string;
  dødsdato?: string;
  kanOverstyres: boolean;
  kilde: FaktaKilde;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SØKNAD' | 'FOLKEREGISTER' | 'MEDL' | 'SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"},{name:"literal",value:"'MEDL'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}}]}}],raw:"FieldArrayRow[]",required:!0}}]}}],alias:"ErBarnFødtFormValues"}}],returns:null}],displayName:"ErBarnFødt",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},finnesBarnIFReg:{required:!0,tsType:{name:"boolean"},description:""},antallBarnISøknad:{required:!0,tsType:{name:"number"},description:""}}};const Me=[U,xe(Ce()),fa(Ye())],f=({isReadOnly:a,isRequired:n=!0})=>{const r=T(),{control:l}=x();return e.jsx(w,{control:l,name:"termindato",size:"medium",label:r.formatMessage({id:"Label.Termindato"}),validate:n?[K,...Me]:Me,fromDate:Ce().toDate(),toDate:Ye().toDate(),defaultMonth:new Date,isReadOnly:a})};f.initialValues=a=>({termindato:a.termin?.termindato??"",termindatoKilde:a.termin?.kilde??"SØKNAD"});f.transformValues=a=>({termindato:a.termindato||null});f.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"gjeldende",optional:!1,type:{name:"signature",type:"object",raw:`{
  antallBarn: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_AntallBarn;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>;
  fødselDokumetasjonStatus: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_FødselDokumetasjonStatus;
  termin?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Termin;
  utstedtdato?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Utstedtdato;
}`,signature:{properties:[{key:"antallBarn",value:{name:"signature",type:"object",raw:`{
  antall: number;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"antall",value:{name:"number",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barn: tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData;
  kanOverstyres: boolean;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"barn",value:{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>",required:!0}},{key:"fødselDokumetasjonStatus",value:{name:"union",raw:`| 'DOKUMENTERT'
| 'IKKE_DOKUMENTERT'
| 'IKKE_VURDERT'`,elements:[{name:"literal",value:"'DOKUMENTERT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"},{name:"literal",value:"'IKKE_VURDERT'"}],required:!0}},{key:"termin",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  termindato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"termindato",value:{name:"string",required:!0}}]},required:!1}},{key:"utstedtdato",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  utstedtdato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"utstedtdato",value:{name:"string",required:!0}}]},required:!1}}]},alias:"FødselGjeldende"}}],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  termindatoKilde: FaktaKilde;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"termindatoKilde",value:{name:"union",raw:"'SØKNAD' | 'FOLKEREGISTER' | 'MEDL' | 'SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"},{name:"literal",value:"'MEDL'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}}]},alias:"TermindatoFormValues"}}],returns:null}],displayName:"Termindato",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Fe=({isReadOnly:a})=>{const n=T(),{getValues:r,getFieldState:l}=x(),{skalViseKnapp:t,isInputReadonly:s,toggleTermindato:i}=Hn(a),{isDirty:E}=l("termindato"),d=r("termindatoKilde"),m=r("erBarnFødt"),_=$e(E?"SAKSBEHANDLER":d);return e.jsxs(G,{gap:"2",align:"start",children:[e.jsx(f,{isReadOnly:s,isRequired:m===!1}),t&&e.jsx(be,{paddingBlock:s?"space-24 space-0":"space-40 space-0",children:e.jsx(Ae,{size:"small",type:"button",onClick:i,icon:s?e.jsx(gn,{"aria-hidden":!0}):e.jsx(vn,{"aria-hidden":!0}),variant:s?"tertiary":"tertiary-neutral",title:n.formatMessage({id:s?"Termindato.EndreTermindato":"Termindato.AvbrytRedigering"})})}),e.jsx(be,{paddingBlock:s?"space-36 space-0":"space-40 space-0",children:e.jsx(ze,{children:_})})]})},Hn=a=>{const{getValues:n,resetField:r}=x(),l=n("termindato"),t=a||!l,[s,i]=q.useState(t);return{skalViseKnapp:!t,isInputReadonly:a||!s,toggleTermindato:()=>{s&&r("termindato"),i(!s)}}};Fe.__docgenInfo={description:"",methods:[],displayName:"TermindatoMedReadonlyToggle",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ra=({aksjonspunkt:a,fødsel:{gjeldende:n,søknad:r,register:l}})=>{const t=T(),{submitCallback:s,alleMerknaderFraBeslutter:i,isReadOnly:E,isSubmittable:d}=I(),{mellomlagretFormData:m,setMellomlagretFormData:_}=C(),S=B({defaultValues:m??xn(n,a)}),A=S.watch("begrunnelse"),g=n.barn.some(N=>N.kilde==="FOLKEREGISTER"),v=l.barn.length>0&&l.barn.length!==r.antallBarn;return e.jsx(P,{merknaderFraBeslutter:i[o.SJEKK_MANGLENDE_FØDSEL],label:t.formatMessage({id:"SjekkManglendeFødselForm.Tittel"}),children:e.jsx(M,{formMethods:S,onSubmit:N=>s(Yn(N)),setDataOnUnmount:_,children:e.jsxs(D,{gap:"space-16",children:[!E&&!g&&e.jsx(Te,{variant:"info",children:e.jsx(u,{id:"SjekkManglendeFødselForm.Info.IngenBarnRegistrert"})}),!E&&v&&e.jsx(Te,{variant:"info",children:e.jsx(u,{id:"SjekkManglendeFødselForm.Info.ForskjelligAntallBarn",values:{antallISøknad:r.antallBarn,antallIFreg:l.barn.length}})}),e.jsx(Fe,{isReadOnly:E}),e.jsx(Y,{isReadOnly:E,finnesBarnIFReg:g,antallBarnISøknad:r.antallBarn}),e.jsx(O,{control:S.control,isSubmittable:d,isReadOnly:E,hasBegrunnelse:!!A,size:"medium",hasVurderingText:!0}),!E&&e.jsx(se,{isSubmittable:d,isReadOnly:E,isSubmitting:S.formState.isSubmitting,isDirty:S.formState.isDirty})]})})})},xn=(a,n)=>({...f.initialValues(a),...Y.initialValues(a),...O.initialValues(n)}),Yn=a=>({kode:o.SJEKK_MANGLENDE_FØDSEL,...f.transformValues(a),...Y.transformValues(a),...O.transformValues(a)});ra.__docgenInfo={description:"",methods:[],displayName:"SjekkManglendeFødselForm",props:{fødsel:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  gjeldende: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende;
  register: tjenester_behandling_fødsel_dto_FødselDto_Register;
  søknad: tjenester_behandling_fødsel_dto_FødselDto_Søknad;
}`,signature:{properties:[{key:"gjeldende",value:{name:"signature",type:"object",raw:`{
  antallBarn: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_AntallBarn;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>;
  fødselDokumetasjonStatus: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_FødselDokumetasjonStatus;
  termin?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Termin;
  utstedtdato?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Utstedtdato;
}`,signature:{properties:[{key:"antallBarn",value:{name:"signature",type:"object",raw:`{
  antall: number;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"antall",value:{name:"number",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barn: tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData;
  kanOverstyres: boolean;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"barn",value:{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>",required:!0}},{key:"fødselDokumetasjonStatus",value:{name:"union",raw:`| 'DOKUMENTERT'
| 'IKKE_DOKUMENTERT'
| 'IKKE_VURDERT'`,elements:[{name:"literal",value:"'DOKUMENTERT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"},{name:"literal",value:"'IKKE_VURDERT'"}],required:!0}},{key:"termin",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  termindato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"termindato",value:{name:"string",required:!0}}]},required:!1}},{key:"utstedtdato",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  utstedtdato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"utstedtdato",value:{name:"string",required:!0}}]},required:!1}}]},required:!0}},{key:"register",value:{name:"signature",type:"object",raw:`{
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>;
}`,signature:{properties:[{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>",required:!0}}]},required:!0}},{key:"søknad",value:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]},required:!0}}]}},description:""},aksjonspunkt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  begrunnelse?: string;
  besluttersBegrunnelse?: string;
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  endretAv?: string;
  endretTidspunkt?: string;
  erAktivt: boolean;
  fristTid?: string;
  kanLoses: boolean;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6019'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| 'UNDEFINED'
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5069'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:"'UNDEFINED'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]}},description:""}}};const Cn="_rightAlign_4nw0u_1",$n={rightAlign:Cn},la=({fødsel:{gjeldende:a},aksjonspunkt:n})=>{const r=T(),{submitCallback:l,isSubmittable:t,alleMerknaderFraBeslutter:s,isReadOnly:i}=I(),{mellomlagretFormData:E,setMellomlagretFormData:d}=C(),m=B({defaultValues:E??zn(a,n)}),_=m.watch("termindato"),S=m.watch("utstedtdato"),A=m.watch("begrunnelse"),g=Zn(S,_);return e.jsx(P,{label:r.formatMessage({id:"SjekkTerminbekreftelseForm.Tittel"}),merknaderFraBeslutter:s[o.SJEKK_TERMINBEKREFTELSE],children:e.jsx(M,{formMethods:m,onSubmit:v=>l(Wn(v)),setDataOnUnmount:d,children:e.jsxs(D,{gap:"space-16",children:[e.jsxs(G,{gap:"space-16",children:[e.jsx(f,{isReadOnly:i,isRequired:!0}),e.jsx(w,{control:m.control,name:"utstedtdato",size:"medium",label:r.formatMessage({id:"Label.Utstedtdato"}),validate:[K,U,Xn(m.getValues)],isReadOnly:i,fromDate:qa().toDate(),toDate:ja().toDate(),defaultMonth:new Date}),e.jsx(tn,{control:m.control,name:"antallBarn",size:"medium",label:r.formatMessage({id:"Label.AntallBarn"}),parse:v=>{const N=Number.parseInt(v.toString(),10);return Number.isNaN(N)?v:N},validate:[K,ca,Ba,Ma],readOnly:i,htmlSize:6,className:$n.rightAlign})]}),e.jsx(O,{control:m.control,isSubmittable:t,isReadOnly:i,hasBegrunnelse:!!A,size:"medium",hasVurderingText:!0}),g&&e.jsx(Te,{variant:"warning",children:e.jsx(u,{id:"SjekkTerminbekreftelseForm.AdvarselForTidligUtstedtdato"})}),!i&&e.jsx(se,{isSubmittable:t,isReadOnly:i,isSubmitting:m.formState.isSubmitting,isDirty:m.formState.isDirty})]})})})},zn=(a,n)=>({utstedtdato:a.utstedtdato?.utstedtdato,antallBarn:a.antallBarn.antall,...f.initialValues(a),...O.initialValues(n)}),Wn=a=>({kode:o.SJEKK_TERMINBEKREFTELSE,utstedtdato:ee(a.utstedtdato,"utstedtdato må være satt ved submit"),antallBarn:ee(a.antallBarn,"antallBarn må være satt ved submit"),...f.transformValues(a),...O.transformValues(a)}),Zn=(a,n)=>!!a&&!!n&&!c(a).isAfter(c(n).subtract(18,"weeks").subtract(4,"days")),Xn=a=>n=>{const r=a("termindato");return ha(r,n)};la.__docgenInfo={description:"",methods:[],displayName:"SjekkTerminbekreftelseForm",props:{aksjonspunkt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  begrunnelse?: string;
  besluttersBegrunnelse?: string;
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  endretAv?: string;
  endretTidspunkt?: string;
  erAktivt: boolean;
  fristTid?: string;
  kanLoses: boolean;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6019'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| 'UNDEFINED'
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5069'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:"'UNDEFINED'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]}},description:""},fødsel:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  gjeldende: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende;
  register: tjenester_behandling_fødsel_dto_FødselDto_Register;
  søknad: tjenester_behandling_fødsel_dto_FødselDto_Søknad;
}`,signature:{properties:[{key:"gjeldende",value:{name:"signature",type:"object",raw:`{
  antallBarn: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_AntallBarn;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>;
  fødselDokumetasjonStatus: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_FødselDokumetasjonStatus;
  termin?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Termin;
  utstedtdato?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Utstedtdato;
}`,signature:{properties:[{key:"antallBarn",value:{name:"signature",type:"object",raw:`{
  antall: number;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"antall",value:{name:"number",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barn: tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData;
  kanOverstyres: boolean;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"barn",value:{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>",required:!0}},{key:"fødselDokumetasjonStatus",value:{name:"union",raw:`| 'DOKUMENTERT'
| 'IKKE_DOKUMENTERT'
| 'IKKE_VURDERT'`,elements:[{name:"literal",value:"'DOKUMENTERT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"},{name:"literal",value:"'IKKE_VURDERT'"}],required:!0}},{key:"termin",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  termindato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"termindato",value:{name:"string",required:!0}}]},required:!1}},{key:"utstedtdato",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  utstedtdato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"utstedtdato",value:{name:"string",required:!0}}]},required:!1}}]},required:!0}},{key:"register",value:{name:"signature",type:"object",raw:`{
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>;
}`,signature:{properties:[{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>",required:!0}}]},required:!0}},{key:"søknad",value:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]},required:!0}}]}},description:""}}};const Qn=({fødselsdato:a,dødsdato:n})=>{const r=Pe(a),l=n?Pe(n):null;return n?`f. ${r} - d. ${l}`:`f. ${r}`},er=a=>{const n=a[0];return n?!a.some(({barn:r,kilde:l})=>l!==n.kilde||ta(n.barn)(r)):!1},ta=a=>n=>n.fødselsdato!==a.fødselsdato||n.dødsdato!==a.dødsdato,ar="_grid_1h9bf_1",nr={grid:ar},ia=({register:{barn:a}})=>{const n=T();return e.jsx(P,{label:n.formatMessage({id:"FaktaFraFReg.Tittel"}),children:a.length===0?e.jsx(We,{children:e.jsx(u,{id:"FaktaFraFReg.IngenBarn"})}):e.jsx(rr,{barn:a})})},rr=({barn:a})=>{const n=a.at(0);if(!n)return null;const r=!a.some(ta(n)),l=a.some(t=>t.dødsdato);return r?e.jsxs(D,{gap:"space-16",children:[e.jsx(p,{label:e.jsx(u,{id:"Label.Fødselsdato"}),value:e.jsx(y,{dateString:n.fødselsdato})}),n.dødsdato&&e.jsx(p,{label:e.jsx(u,{id:"Label.Dødsdato"}),value:e.jsx(y,{dateString:n.dødsdato})}),e.jsx(p,{label:e.jsx(u,{id:"Label.AntallBarn"}),value:a.length})]}):e.jsx("div",{children:a.map(({fødselsdato:t,dødsdato:s},i)=>e.jsxs(G,{gap:"space-24",wrap:!1,className:nr.grid,children:[e.jsx(p,{size:"medium",label:e.jsx(u,{id:"Label.Barn"}),value:i+1,hideLabel:i>0}),e.jsx(p,{size:"medium",label:e.jsx(u,{id:"Label.Fødselsdato"}),value:e.jsx(y,{dateString:t}),hideLabel:i>0}),l&&e.jsx(p,{size:"medium",value:s?e.jsx(y,{dateString:s}):"-",label:e.jsx(u,{id:"Label.Dødsdato"}),hideLabel:i>0})]},t+s))})};ia.__docgenInfo={description:"",methods:[],displayName:"FaktaFraFReg",props:{register:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>;
}`,signature:{properties:[{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>",required:!0}}]}},description:""}}};const sa=({søknad:{termindato:a,utstedtdato:n,antallBarn:r,barn:l},terminbekreftelseDokument:t})=>{const s=T(),i=l[0];return e.jsx(P,{label:s.formatMessage({id:"FaktaFraSøknad.Tittel"}),children:e.jsxs(D,{gap:"space-16",children:[a&&e.jsx(p,{label:e.jsx(u,{id:"Label.Termindato"}),value:e.jsx(y,{dateString:a})}),n&&e.jsx(p,{label:e.jsx(u,{id:"Label.Utstedtdato"}),value:e.jsx(y,{dateString:n})}),i&&e.jsx(p,{label:e.jsx(u,{id:"Label.Fødselsdato"}),value:e.jsx(y,{dateString:i.fødselsdato})}),r&&e.jsx(p,{label:e.jsx(u,{id:"Label.AntallBarn"}),value:r}),t&&e.jsxs(G,{gap:"space-8",children:[e.jsxs(H,{children:[e.jsx(u,{id:"FaktaFraSøknad.Terminbekreftelse"}),":"]}),e.jsx(En,{...t,children:e.jsx(u,{id:"FaktaFraSøknad.VisTerminbekreftelse"})})]})]})})};sa.__docgenInfo={description:"",methods:[],displayName:"FaktaFraSøknad",props:{søknad:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]}},description:""},terminbekreftelseDokument:{required:!0,tsType:{name:"union",raw:"DokumentLinkReferanse | undefined",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  journalpostId: string;
  dokumentId: string;
  dokumentTittel?: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!1}}]}},{name:"undefined"}]},description:""}}};const ua=({gjeldende:{barn:a,termin:n,utstedtdato:r,antallBarn:l}})=>{const t=T(),s=er(a),i=a[0];return e.jsxs(G,{gap:"space-16","aria-label":t.formatMessage({id:"Situasjon.OpplysningerGjeldende"}),children:[s&&i&&e.jsxs(e.Fragment,{children:[e.jsx(Q,{kilde:i.kilde,value:e.jsx(y,{dateString:i.barn.fødselsdato}),label:t.formatMessage({id:"Label.Fødselsdato"})},i.barn.fødselsdato),i.barn.dødsdato&&e.jsx(Q,{kilde:i.kilde,value:e.jsx(y,{dateString:i.barn.dødsdato}),label:t.formatMessage({id:"Label.Dødsdato"})},i.barn.fødselsdato+i.barn.dødsdato)]}),!s&&a.map((E,d)=>e.jsx(Q,{kilde:E.kilde,value:Qn(E.barn),label:t.formatMessage({id:"Label.NummerertBarn"},{nummer:d+1})},`${E.barn.fødselsdato}-${E.barn.dødsdato}-${E.kilde}`)),n&&e.jsx(Q,{kilde:n.kilde,label:t.formatMessage({id:"Label.Termindato"}),value:e.jsx(y,{dateString:n.termindato})}),r&&e.jsx(Q,{kilde:r.kilde,label:t.formatMessage({id:"Label.Utstedtdato"}),value:e.jsx(y,{dateString:r.utstedtdato})}),l.kilde!="SØKNAD"&&e.jsx(Q,{kilde:l.kilde,label:t.formatMessage({id:"Label.AntallBarn"}),value:l.antall})]})};ua.__docgenInfo={description:"",methods:[],displayName:"Situasjon",props:{gjeldende:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  antallBarn: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_AntallBarn;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>;
  fødselDokumetasjonStatus: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_FødselDokumetasjonStatus;
  termin?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Termin;
  utstedtdato?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Utstedtdato;
}`,signature:{properties:[{key:"antallBarn",value:{name:"signature",type:"object",raw:`{
  antall: number;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"antall",value:{name:"number",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barn: tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData;
  kanOverstyres: boolean;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"barn",value:{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>",required:!0}},{key:"fødselDokumetasjonStatus",value:{name:"union",raw:`| 'DOKUMENTERT'
| 'IKKE_DOKUMENTERT'
| 'IKKE_VURDERT'`,elements:[{name:"literal",value:"'DOKUMENTERT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"},{name:"literal",value:"'IKKE_VURDERT'"}],required:!0}},{key:"termin",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  termindato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"termindato",value:{name:"string",required:!0}}]},required:!1}},{key:"utstedtdato",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  utstedtdato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"utstedtdato",value:{name:"string",required:!0}}]},required:!1}}]}},description:""}}};const Ea=({gjeldende:a,isReadOnly:n,avbrytOverstyring:r})=>{const l=T(),{aksjonspunkterForPanel:t,submitCallback:s,isSubmittable:i}=I(),E=t.find(_=>_.definisjon===o.OVERSTYRING_AV_FAKTA_OM_FØDSEL),d=B({defaultValues:lr(a,E)}),m=a.barn.some(_=>_.kilde==="FOLKEREGISTER");return e.jsx(M,{formMethods:d,onSubmit:_=>s(tr(_)),children:e.jsxs(D,{gap:"6",children:[e.jsx(Fe,{isReadOnly:n}),e.jsx(Y,{isReadOnly:n,finnesBarnIFReg:m,antallBarnISøknad:a.antallBarn.antall}),e.jsx(O,{control:d.control,isSubmittable:i,isReadOnly:n,hasBegrunnelse:!0,size:"medium"}),!n&&e.jsxs(G,{gap:"2",children:[e.jsx(se,{isSubmittable:i,isReadOnly:n,isSubmitting:d.formState.isSubmitting,isDirty:d.formState.isDirty,buttonText:l.formatMessage({id:"OverstyringForm.Bekreft"})}),e.jsx(Ae,{variant:"secondary",size:"small",type:"button",onClick:r,children:e.jsx(u,{id:"OverstyringForm.Avbryt"})})]})]})})},lr=(a,n)=>({...f.initialValues(a),...Y.initialValues(a),...O.initialValues(n)}),tr=a=>({kode:o.OVERSTYRING_AV_FAKTA_OM_FØDSEL,...f.transformValues(a),...Y.transformValues(a),...O.transformValues(a)});Ea.__docgenInfo={description:"",methods:[],displayName:"OverstyringForm",props:{gjeldende:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  antallBarn: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_AntallBarn;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>;
  fødselDokumetasjonStatus: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_FødselDokumetasjonStatus;
  termin?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Termin;
  utstedtdato?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Utstedtdato;
}`,signature:{properties:[{key:"antallBarn",value:{name:"signature",type:"object",raw:`{
  antall: number;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"antall",value:{name:"number",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barn: tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData;
  kanOverstyres: boolean;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"barn",value:{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>",required:!0}},{key:"fødselDokumetasjonStatus",value:{name:"union",raw:`| 'DOKUMENTERT'
| 'IKKE_DOKUMENTERT'
| 'IKKE_VURDERT'`,elements:[{name:"literal",value:"'DOKUMENTERT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"},{name:"literal",value:"'IKKE_VURDERT'"}],required:!0}},{key:"termin",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  termindato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"termindato",value:{name:"string",required:!0}}]},required:!1}},{key:"utstedtdato",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  utstedtdato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"utstedtdato",value:{name:"string",required:!0}}]},required:!1}}]}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},avbrytOverstyring:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const da=({gjeldende:a})=>{const n=T(),{erOverstyrt:r,toggleOverstyring:l,kanOverstyreAccess:t,overrideReadOnly:s}=Ua(),{alleMerknaderFraBeslutter:i}=I(),E=!r||s||!t.isEnabled;return e.jsxs(e.Fragment,{children:[t.isEnabled&&e.jsxs(G,{gap:"4",children:[e.jsx(ke,{size:"small",children:e.jsx(u,{id:"OverstyringPanel.Tittel"})}),e.jsx(Xa,{onClick:l,erOverstyrt:r})]}),r&&e.jsx(P,{label:n.formatMessage({id:"OverstyringForm.Tittel"}),merknaderFraBeslutter:i[o.OVERSTYRING_AV_FAKTA_OM_FØDSEL],children:e.jsx(Ea,{isReadOnly:E,gjeldende:a,avbrytOverstyring:l})})]})};da.__docgenInfo={description:"",methods:[],displayName:"OverstyringPanel",props:{gjeldende:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  antallBarn: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_AntallBarn;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>;
  fødselDokumetasjonStatus: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_FødselDokumetasjonStatus;
  termin?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Termin;
  utstedtdato?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Utstedtdato;
}`,signature:{properties:[{key:"antallBarn",value:{name:"signature",type:"object",raw:`{
  antall: number;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"antall",value:{name:"number",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barn: tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData;
  kanOverstyres: boolean;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"barn",value:{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>",required:!0}},{key:"fødselDokumetasjonStatus",value:{name:"union",raw:`| 'DOKUMENTERT'
| 'IKKE_DOKUMENTERT'
| 'IKKE_VURDERT'`,elements:[{name:"literal",value:"'DOKUMENTERT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"},{name:"literal",value:"'IKKE_VURDERT'"}],required:!0}},{key:"termin",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  termindato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"termindato",value:{name:"string",required:!0}}]},required:!1}},{key:"utstedtdato",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  utstedtdato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"utstedtdato",value:{name:"string",required:!0}}]},required:!1}}]}},description:""}}};const{SJEKK_TERMINBEKREFTELSE:ir,SJEKK_MANGLENDE_FØDSEL:sr,OVERSTYRING_AV_FAKTA_OM_FØDSEL:ur}=o,ma=({fødsel:a,terminbekreftelseDokument:n})=>{const{aksjonspunkterForPanel:r}=I(),l=r.find(i=>i.definisjon===ir),t=r.find(i=>i.definisjon===sr),s=r.find(i=>i.definisjon===ur);return e.jsxs(D,{gap:"space-16",children:[(!(l||t)||s)&&e.jsx(da,{gjeldende:a.gjeldende}),e.jsxs(oe,{children:[l?.status==="OPPR"&&e.jsx(u,{id:"FodselInfoPanel.SjekkTerminbekreftelse"}),t?.status==="OPPR"&&e.jsx(u,{id:"FodselInfoPanel.SjekkManglendeFødsel"})]}),e.jsx(ua,{gjeldende:a.gjeldende}),e.jsxs(Ze,{columns:2,gap:"space-16",children:[e.jsx(sa,{søknad:a.søknad,terminbekreftelseDokument:n}),e.jsx(ia,{register:a.register})]}),l&&e.jsx(la,{fødsel:a,aksjonspunkt:l}),t&&e.jsx(ra,{fødsel:a,aksjonspunkt:t})]})};ma.__docgenInfo={description:`FodselInfoPanel

Har ansvar for å sette opp formen for faktapenelet til Fødselsvilkåret.`,methods:[],displayName:"FodselInfoPanel",props:{fødsel:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  gjeldende: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende;
  register: tjenester_behandling_fødsel_dto_FødselDto_Register;
  søknad: tjenester_behandling_fødsel_dto_FødselDto_Søknad;
}`,signature:{properties:[{key:"gjeldende",value:{name:"signature",type:"object",raw:`{
  antallBarn: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_AntallBarn;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>;
  fødselDokumetasjonStatus: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_FødselDokumetasjonStatus;
  termin?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Termin;
  utstedtdato?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Utstedtdato;
}`,signature:{properties:[{key:"antallBarn",value:{name:"signature",type:"object",raw:`{
  antall: number;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"antall",value:{name:"number",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barn: tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData;
  kanOverstyres: boolean;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"barn",value:{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>",required:!0}},{key:"fødselDokumetasjonStatus",value:{name:"union",raw:`| 'DOKUMENTERT'
| 'IKKE_DOKUMENTERT'
| 'IKKE_VURDERT'`,elements:[{name:"literal",value:"'DOKUMENTERT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"},{name:"literal",value:"'IKKE_VURDERT'"}],required:!0}},{key:"termin",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  termindato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"termindato",value:{name:"string",required:!0}}]},required:!1}},{key:"utstedtdato",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  utstedtdato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"utstedtdato",value:{name:"string",required:!0}}]},required:!1}}]},required:!0}},{key:"register",value:{name:"signature",type:"object",raw:`{
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>;
}`,signature:{properties:[{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>",required:!0}}]},required:!0}},{key:"søknad",value:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]},required:!0}}]}},description:""},terminbekreftelseDokument:{required:!0,tsType:{name:"union",raw:"DokumentLinkReferanse | undefined",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  journalpostId: string;
  dokumentId: string;
  dokumentTittel?: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!1}}]}},{name:"undefined"}]},description:""}}};const Er={"FodselInfoPanel.SjekkTerminbekreftelse":"Kontroller terminbekreftelse","FodselInfoPanel.SjekkManglendeFødsel":"Kontroller opplysninger om fødsel","OverstyringPanel.Tittel":"Fakta om fødsel","OverstyringForm.Tittel":"Overstyring av fødselsdetaljer","OverstyringForm.Bekreft":"Bekreft","OverstyringForm.Avbryt":"Avbryt","SjekkTerminbekreftelseForm.Tittel":"Kontroller opplysninger om termin","SjekkTerminbekreftelseForm.AdvarselForTidligUtstedtdato":"Terminbekreftelsen er utstedt før 22. svangerskapsuke. Kontakt bruker for en nyere terminbekreftelse og oppdater utstedt dato med ny dato når den mottas. Fortsetter du behandlingen uten ny utstedt dato blir behandlingen avslått på grunn av manglende dokumentasjon","BarnFieldArray.LeggTilBarn":"Legg til barn","BarnFieldArray.HelpText":"Hvis opplysningene er feil må dette rettes opp i Folkeregisteret","SjekkManglendeFødselForm.Tittel":"Kontroller opplysninger om fødsel","SjekkManglendeFødselForm.Info.ForskjelligAntallBarn":"Det er forskjell i antall barn i Folkeregisteret({antallIFreg}) og i søknaden({antallISøknad}).","SjekkManglendeFødselForm.Info.IngenBarnRegistrert":"Det er ikke registrert noen fødsel i Folkeregisteret. Innhent dokumentasjon på fødsel fra bruker og registrer fødsel manuelt.","ErBarnFødt.Label":"Er {antallBarn, plural, one {barnet} other {barna}} født?","ErBarnFødt.Ja":"Ja","ErBarnFødt.Nei":"Nei","FaktaFraFReg.Tittel":"Opplysninger fra Folkeregisteret","FaktaFraFReg.IngenBarn":"Det er ikke registrert noen fødselshendelse i Folkeregisteret","FaktaFraSøknad.Tittel":"Opplysninger oppgitt i søknaden","FaktaFraSøknad.Terminbekreftelse":"Terminbekreftelse","FaktaFraSøknad.VisTerminbekreftelse":"Vis terminbekreftelse","Situasjon.OpplysningerGjeldende":"Gjeldende opplysninger","Termindato.EndreTermindato":"Åpne redigering av termindato","Termindato.AvbrytRedigering":"Avbryt redigering av termindato","Label.NummerertBarn":"Barn {nummer}","Label.Barn":"Barn","Label.Fødselsdato":"Fødselsdato","Label.Dødsdato":"Dødsdato","Label.AntallBarn":"Antall barn","Label.Termindato":"Termindato","Label.Utstedtdato":"Utstedtdato"},dr=z(Er),oa=a=>e.jsx($,{value:dr,children:e.jsx(ma,{...a})});oa.__docgenInfo={description:"",methods:[],displayName:"FodselFaktaIndex",props:{fødsel:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  gjeldende: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende;
  register: tjenester_behandling_fødsel_dto_FødselDto_Register;
  søknad: tjenester_behandling_fødsel_dto_FødselDto_Søknad;
}`,signature:{properties:[{key:"gjeldende",value:{name:"signature",type:"object",raw:`{
  antallBarn: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_AntallBarn;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>;
  fødselDokumetasjonStatus: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_FødselDokumetasjonStatus;
  termin?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Termin;
  utstedtdato?: tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_Utstedtdato;
}`,signature:{properties:[{key:"antallBarn",value:{name:"signature",type:"object",raw:`{
  antall: number;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"antall",value:{name:"number",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barn: tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData;
  kanOverstyres: boolean;
  kilde: tjenester_behandling_fødsel_dto_Kilde;
}`,signature:{properties:[{key:"barn",value:{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"kanOverstyres",value:{name:"boolean",required:!0}},{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_Gjeldende_GjeldendeBarn>",required:!0}},{key:"fødselDokumetasjonStatus",value:{name:"union",raw:`| 'DOKUMENTERT'
| 'IKKE_DOKUMENTERT'
| 'IKKE_VURDERT'`,elements:[{name:"literal",value:"'DOKUMENTERT'"},{name:"literal",value:"'IKKE_DOKUMENTERT'"},{name:"literal",value:"'IKKE_VURDERT'"}],required:!0}},{key:"termin",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  termindato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"termindato",value:{name:"string",required:!0}}]},required:!1}},{key:"utstedtdato",value:{name:"signature",type:"object",raw:`{
  kilde: tjenester_behandling_fødsel_dto_Kilde;
  utstedtdato: string;
}`,signature:{properties:[{key:"kilde",value:{name:"union",raw:"'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER'",elements:[{name:"literal",value:"'SAKSBEHANDLER'"},{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"}],required:!0}},{key:"utstedtdato",value:{name:"string",required:!0}}]},required:!1}}]},required:!0}},{key:"register",value:{name:"signature",type:"object",raw:`{
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>;
}`,signature:{properties:[{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>",required:!0}}]},required:!0}},{key:"søknad",value:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  barn: Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  barnNummer?: number;
  dødsdato?: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"barnNummer",value:{name:"number",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_fødsel_dto_FødselDto_BarnHendelseData>",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]},required:!0}}]}},description:""},terminbekreftelseDokument:{required:!0,tsType:{name:"union",raw:"DokumentLinkReferanse | undefined",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  journalpostId: string;
  dokumentId: string;
  dokumentTittel?: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!1}}]}},{name:"undefined"}]},description:""}}};const mr=[o.OVERSTYRING_AV_FAKTA_OM_FØDSEL],or=[o.SJEKK_TERMINBEKREFTELSE,o.SJEKK_MANGLENDE_FØDSEL,o.OVERSTYRING_AV_FAKTA_OM_FØDSEL],_r=()=>{const a=T(),{behandling:n,fagsak:r,rettigheter:l}=q.use(_e),t=Ke(or,mr),s=pe(n),i=en(),E=t.aksjonspunkterForPanel.some(S=>S.definisjon===o.OVERSTYRING_AV_FAKTA_OM_FØDSEL),{data:d}=Z(s.faktaFødselOptions(n)),{data:m=[]}=Z(i.hentDokumenter(r.saksnummer,n.uuid,n.versjon)),_=vr(m,r.saksnummer);return e.jsx(wa,{overstyringApKode:o.OVERSTYRING_AV_FAKTA_OM_FØDSEL,kanOverstyreAccess:l.kanOverstyreAccess,overrideReadOnly:t.isReadOnly,initialToggleState:E,children:e.jsx(Oe,{standardPanelProps:t,faktaPanelKode:De.FODSELSVILKARET,faktaPanelMenyTekst:a.formatMessage({id:"FaktaInitPanel.Title.Fodsel"}),skalPanelVisesIMeny:Nn(n,"FAKTA_FØDSEL"),children:d?e.jsx(oa,{fødsel:d,terminbekreftelseDokument:_}):e.jsx(Re,{})})})},vr=(a,n)=>{const r=a.find(l=>l.tittel==="Terminbekreftelse");return r?{saksnummer:n,journalpostId:r.journalpostId,dokumentId:r.dokumentId,dokumentTittel:r.tittel??void 0}:void 0};_r.__docgenInfo={description:"",methods:[],displayName:"FodselvilkaretFaktaInitPanel"};const _a=({søknad:a,adopsjon:n})=>{const r=T();if(!ea(a))return null;const l=Object.entries(a.adopsjonFodelsedatoer??[]);return e.jsx(P,{label:r.formatMessage({id:"BarnPanel.Tittel"}),children:e.jsxs(D,{gap:"space-8",children:[e.jsx(p,{size:"medium",label:e.jsx(u,{id:"BarnPanel.AntallBarn"}),value:n.antallBarn}),e.jsx(H,{size:"medium",children:e.jsx(u,{id:"BarnPanel.Fødselsdato"})}),l.map(([t,s])=>e.jsxs(G,{gap:"space-16",children:[l.length>1&&e.jsx(H,{size:"small",children:e.jsx(u,{id:"BarnPanel.BarnNr",values:{nummer:t}})}),e.jsx(We,{size:"medium",children:e.jsx(y,{dateString:s})})]},`${o.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE}-${t}`))]})})};_a.__docgenInfo={description:"",methods:[],displayName:"BarnPanel",props:{søknad:{required:!0,tsType:{name:"union",raw:"SøknadAdopsjon | SøknadFødsel",elements:[{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},{name:"intersection",raw:`{
  soknadType: 'ST-001';
} & tjenester_behandling_søknad_SoknadFodselDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-001';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-001'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  antallBarn: number;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  fodselsdatoer?: {
    [key: string]: string;
  };
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"fodselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]}}]}]},description:""},adopsjon:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""}}};const va=({personoversikt:a})=>{const n=T(),r=[he(a.bruker),...a.annenPart?[he(a.annenPart)]:[]];return e.jsx(P,{label:n.formatMessage({id:"ForeldrePanel.Tittel"}),children:e.jsx(D,{gap:"space-16",children:r.map(l=>e.jsxs(D,{gap:"space-8",children:[e.jsx(ke,{size:"small",level:"3",children:l.navn}),l.dødsdato?e.jsx(p,{size:"medium",label:e.jsx(u,{id:"ForeldrePanel.Dødsdato"}),value:e.jsx(y,{dateString:l.dødsdato})}):e.jsx(p,{size:"medium",label:e.jsx(u,{id:"ForeldrePanel.Address"}),value:l.adresse?un(l.adresse):"-"})]},`${l.aktoerId}`))})})},he=({aktoerId:a,navn:n,adresser:r,dødsdato:l})=>{const t=fe(r,"POSTADRESSE"),s=fe(r,"BOSTEDSADRESSE");return{aktoerId:a,navn:n,dødsdato:l,adresse:t??s}};va.__docgenInfo={description:"",methods:[],displayName:"ForeldrePanel",props:{personoversikt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  annenPart?: tjenester_behandling_personopplysning_PersonopplysningBasisDto;
  barn: Array<tjenester_behandling_personopplysning_PersonopplysningBasisDto>;
  bruker: tjenester_behandling_personopplysning_PersonopplysningBasisDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_personopplysning_PersonopplysningBasisDto>",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}}]}},description:""}}};const Sa=({farSøkerType:a,innvilgetRelatertTilgrensendeYtelserForAnnenForelder:n})=>{const r=T(),{alleKodeverk:l}=I(),t=l.FarSøkerType.find(i=>i.kode===a)?.navn??"-",s=n.flatMap(Sr);return e.jsx(P,{label:r.formatMessage({id:"RettighetFaktaPanel.Tittel"}),children:e.jsxs(D,{gap:"space-16",children:[e.jsx(p,{size:"medium",label:e.jsx(u,{id:"RettighetFaktaPanel.FarSøker"}),value:t}),e.jsx(H,{size:"medium",children:e.jsx(u,{id:"RettighetFaktaPanel.AndreYtelseTilMor"})}),s.length>0?e.jsx(qe,{as:"ul",children:s.map(i=>e.jsxs(qe.Item,{title:`${i.ytelseNavn}: ${i.periode}`,children:[i.saksnummer," (",i.status,")"]},`${i.ytelseNavn}-${i.periode}`))}):"-"]})})},Sr=({relatertYtelseNavn:a,tilgrensendeYtelserListe:n})=>{const r=["Engangsstonad","Foreldrepenger","Svangerskapspenger"].includes(a);return n.filter(l=>l.statusNavn!=="Åpen").map(l=>({periode:Ja(l.periodeFraDato,l.periodeTilDato),ytelseNavn:a,status:l.statusNavn,saksnummer:r?e.jsx(Xe,{href:`/fagsak/${l.saksNummer}`,target:"_blank",children:l.saksNummer}):l.saksNummer}))};Sa.__docgenInfo={description:"",methods:[],displayName:"RettighetFaktaPanel",props:{innvilgetRelatertTilgrensendeYtelserForAnnenForelder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  relatertYtelseNavn: string;
  tilgrensendeYtelserListe: Array<foreldrepenger_domene_arbeidsforhold_dto_RelaterteYtelserDto_TilgrensendeYtelserDto>;
}`,signature:{properties:[{key:"relatertYtelseNavn",value:{name:"string",required:!0}},{key:"tilgrensendeYtelserListe",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFraDato: string;
  periodeTilDato: string;
  saksNummer?: string;
  statusNavn: string;
}`,signature:{properties:[{key:"periodeFraDato",value:{name:"string",required:!0}},{key:"periodeTilDato",value:{name:"string",required:!0}},{key:"saksNummer",value:{name:"string",required:!1}},{key:"statusNavn",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_arbeidsforhold_dto_RelaterteYtelserDto_TilgrensendeYtelserDto>",required:!0}}]}}],raw:"RelatertTilgrensedYtelse[]"},description:""},farSøkerType:{required:!0,tsType:{name:"union",raw:"FarSøkerType | undefined",elements:[{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}]},{name:"undefined"}]},description:""}}};const Na=["FP_VK_5","FP_VK_8","FP_VK_33"],Ne=({adopsjon:a})=>{const n=T(),{control:r}=x(),{isReadOnly:l,alleKodeverk:t}=I();return e.jsx(ie,{name:"vilkarType",control:r,validate:[K],label:n.formatMessage({id:"OmsorgsovertakelseVilkårForm.VelgVilkaarSomSkalAnvendes"}),isReadOnly:l,size:"medium",isEdited:Se(a.omsorgsovertakelseVilkårType),children:Na.map(s=>e.jsx(J,{size:"medium",value:s,description:Tr(s,n),children:t.OmsorgsovertakelseVilkårType.find(i=>i.kode==s)?.navn},s))})};Ne.initialValues=a=>({vilkarType:Nr(a)?a:void 0});const Nr=a=>Na.includes(a),Tr=(a,n)=>{switch(a){case"FP_VK_5":return n.formatMessage({id:"OmsorgsovertakelseVilkårForm.Description.OmsorgTredjeLedd"});case"FP_VK_8":return n.formatMessage({id:"OmsorgsovertakelseVilkårForm.Description.ForeldreAndreLedd"});case"FP_VK_33":return n.formatMessage({id:"OmsorgsovertakelseVilkårForm.Description.ForeldreFjerdeLedd"})}};Ne.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"vilkarType",optional:!1,type:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],alias:"OmsorgsovertakelseVilkårType"}}],returns:null}],displayName:"OmsorgsovertakelseVilkårForm",props:{adopsjon:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""}}};const Ta=({søknad:a,adopsjon:n,harForeldreansvarAP:r})=>{const l=T(),{aksjonspunkterForPanel:t,alleMerknaderFraBeslutter:s,submitCallback:i,isReadOnly:E,isSubmittable:d}=I(),m=B({defaultValues:gr(n,t)}),_=m.watch("begrunnelse");return e.jsx(P,{label:l.formatMessage({id:r?"AksjonspunktForm.Tittel.Foreldreansvar":"AksjonspunktForm.Tittel.Omsorgsovertakelse"}),merknaderFraBeslutter:s[o.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE],children:e.jsx(M,{formMethods:m,onSubmit:S=>i(Dr(S,t[0])),children:e.jsxs(D,{gap:"space-16",children:[e.jsx(w,{name:"omsorgsovertakelseDato",size:"medium",control:m.control,label:e.jsx(u,{id:"AksjonspunktForm.Omsorgsovertakelsesdato"}),validate:[K,U],isReadOnly:E,isEdited:ge(Rr(a),n.omsorgsovertakelseDato)}),r?e.jsx(w,{name:"foreldreansvarDato",size:"medium",control:m.control,label:e.jsx(u,{id:"AksjonspunktForm.Foreldreansvarsdato"}),validate:[K,U],isReadOnly:E}):e.jsx(Ne,{adopsjon:n}),e.jsx(O,{control:m.control,isSubmittable:d,size:"medium",isReadOnly:E,hasBegrunnelse:!!_}),e.jsx(se,{isSubmittable:d,isSubmitting:m.formState.isSubmitting,isDirty:m.formState.isDirty,isReadOnly:E})]})})})},gr=(a,n)=>({...Ne.initialValues(a.omsorgsovertakelseVilkårType),omsorgsovertakelseDato:a.omsorgsovertakelseDato,foreldreansvarDato:a.foreldreansvarDato,...O.initialValues(n)}),Dr=(a,n)=>n.definisjon===o.AVKLAR_VILKÅR_FOR_FORELDREANSVAR?{omsorgsovertakelseDato:ee(a.omsorgsovertakelseDato),foreldreansvarDato:ee(a.foreldreansvarDato),kode:o.AVKLAR_VILKÅR_FOR_FORELDREANSVAR,...O.transformValues(a)}:{omsorgsovertakelseDato:ee(a.omsorgsovertakelseDato),vilkarType:ee(a.vilkarType),kode:o.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE,...O.transformValues(a)},Rr=a=>{if(ea(a))return a.omsorgsovertakelseDato??void 0};Ta.__docgenInfo={description:"",methods:[],displayName:"OmsorgOgForeldreansvarForm",props:{søknad:{required:!0,tsType:{name:"union",raw:"SøknadAdopsjon | SøknadFødsel",elements:[{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},{name:"intersection",raw:`{
  soknadType: 'ST-001';
} & tjenester_behandling_søknad_SoknadFodselDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-001';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-001'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  antallBarn: number;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  fodselsdatoer?: {
    [key: string]: string;
  };
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"fodselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]}}]}]},description:""},adopsjon:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},harForeldreansvarAP:{required:!0,tsType:{name:"boolean"},description:""}}};const ga=({søknad:a,personoversikt:n,adopsjon:r,innvilgetRelatertTilgrensendeYtelserForAnnenForelder:l})=>{const{aksjonspunkterForPanel:t,harÅpentAksjonspunkt:s,isReadOnly:i}=I(),E=X(o.AVKLAR_VILKÅR_FOR_FORELDREANSVAR,t);return e.jsxs(D,{gap:"space-16",children:[!i&&s&&e.jsx(oe,{children:e.jsx(u,{id:E?"OmsorgOgForeldreansvarInfoPanel.AksjonspunktText.Foreldreansvar":"OmsorgOgForeldreansvarInfoPanel.AksjonspunktText.Omsorgsovertakelse"})}),e.jsxs(Ze,{gap:"space-16",columns:"repeat(auto-fit, minmax(16rem, 1fr))",children:[e.jsx(_a,{søknad:a,adopsjon:r}),e.jsx(va,{personoversikt:n}),!E&&e.jsx(Sa,{farSøkerType:a.farSokerType,innvilgetRelatertTilgrensendeYtelserForAnnenForelder:l})]}),e.jsx(Ta,{søknad:a,adopsjon:r,harForeldreansvarAP:E})]})};ga.__docgenInfo={description:"",methods:[],displayName:"OmsorgOgForeldreansvarInfoPanel",props:{søknad:{required:!0,tsType:{name:"union",raw:"SøknadAdopsjon | SøknadFødsel",elements:[{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},{name:"intersection",raw:`{
  soknadType: 'ST-001';
} & tjenester_behandling_søknad_SoknadFodselDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-001';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-001'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  antallBarn: number;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  fodselsdatoer?: {
    [key: string]: string;
  };
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"fodselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]}}]}]},description:""},personoversikt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  annenPart?: tjenester_behandling_personopplysning_PersonopplysningBasisDto;
  barn: Array<tjenester_behandling_personopplysning_PersonopplysningBasisDto>;
  bruker: tjenester_behandling_personopplysning_PersonopplysningBasisDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_personopplysning_PersonopplysningBasisDto>",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}}]}},description:""},adopsjon:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},innvilgetRelatertTilgrensendeYtelserForAnnenForelder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  relatertYtelseNavn: string;
  tilgrensendeYtelserListe: Array<foreldrepenger_domene_arbeidsforhold_dto_RelaterteYtelserDto_TilgrensendeYtelserDto>;
}`,signature:{properties:[{key:"relatertYtelseNavn",value:{name:"string",required:!0}},{key:"tilgrensendeYtelserListe",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFraDato: string;
  periodeTilDato: string;
  saksNummer?: string;
  statusNavn: string;
}`,signature:{properties:[{key:"periodeFraDato",value:{name:"string",required:!0}},{key:"periodeTilDato",value:{name:"string",required:!0}},{key:"saksNummer",value:{name:"string",required:!1}},{key:"statusNavn",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_arbeidsforhold_dto_RelaterteYtelserDto_TilgrensendeYtelserDto>",required:!0}}]}}],raw:"RelatertTilgrensedYtelse[]"},description:""}}};const Ar={"OmsorgOgForeldreansvarInfoPanel.AksjonspunktText.Foreldreansvar":"Kontroller opplysninger om foreldreansvar og omsorg","OmsorgOgForeldreansvarInfoPanel.AksjonspunktText.Omsorgsovertakelse":"Kontroller opplysningene om omsorgsovertakelse","AksjonspunktForm.Tittel.Foreldreansvar":"Vurder opplysninger om foreldreansvar og omsorg","AksjonspunktForm.Tittel.Omsorgsovertakelse":"Vurder opplysningene om omsorgsovertakelse","AksjonspunktForm.Omsorgsovertakelsesdato":"Omsorgsovertakelsesdato","AksjonspunktForm.Foreldreansvarsdato":"Foreldreansvarsdato","OmsorgsovertakelseVilkårForm.VelgVilkaarSomSkalAnvendes":"Velg vilkår som skal anvendes","OmsorgsovertakelseVilkårForm.Description.OmsorgTredjeLedd":"Dersom mor dør i forbindelse med fødselen eller omsorgsovertakelsen, har faren rett til engangsstønad. Det er et vilkår at han har omsorgen for barnet og at stønaden ikke allerede er utbetalt til moren","OmsorgsovertakelseVilkårForm.Description.ForeldreAndreLedd":"Engangsstønad kan ytes også til person som har foreldreansvar når den andre av foreldrene dør, eller får tildelt foreldreansvaret i medhold av barneloven §§ 38 og 63, såfremt vedkommende har hatt mindre samvær enn tilsvarende barneloven § 43 andre ledd","OmsorgsovertakelseVilkårForm.Description.ForeldreFjerdeLedd":"Faren har rett til engangsstønad også dersom han i stønadsperioden har overtatt omsorgen for barnet med sikte på å overta foreldreansvaret alene etter barneloven kapittel 5. Retten gjelder selv om moren har fått utbetalt engangsstønad","RettighetFaktaPanel.Tittel":"Rettighet","RettighetFaktaPanel.FarSøker":"Far søker","RettighetFaktaPanel.AndreYtelseTilMor":"Andre ytelser til mor","BarnPanel.Tittel":"Barn","BarnPanel.Fødselsdato":"Fødselsdato","BarnPanel.BarnNr":"Barn {nummer}","BarnPanel.AntallBarn":"Antall barn","ForeldrePanel.Tittel":"Søkere","ForeldrePanel.Address":"Adresse","ForeldrePanel.Dødsdato":"Dødsdato"},kr=z(Ar),Da=a=>e.jsx($,{value:kr,children:e.jsx(ga,{...a})});Da.__docgenInfo={description:"",methods:[],displayName:"OmsorgOgForeldreansvarFaktaIndex",props:{adopsjon:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},søknad:{required:!0,tsType:{name:"union",raw:"SøknadAdopsjon | SøknadFødsel",elements:[{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},{name:"intersection",raw:`{
  soknadType: 'ST-001';
} & tjenester_behandling_søknad_SoknadFodselDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-001';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-001'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  antallBarn: number;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  fodselsdatoer?: {
    [key: string]: string;
  };
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"fodselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]}}]}]},description:""},personoversikt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  annenPart?: tjenester_behandling_personopplysning_PersonopplysningBasisDto;
  barn: Array<tjenester_behandling_personopplysning_PersonopplysningBasisDto>;
  bruker: tjenester_behandling_personopplysning_PersonopplysningBasisDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_personopplysning_PersonopplysningBasisDto>",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}}]}},description:""},innvilgetRelatertTilgrensendeYtelserForAnnenForelder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  relatertYtelseNavn: string;
  tilgrensendeYtelserListe: Array<foreldrepenger_domene_arbeidsforhold_dto_RelaterteYtelserDto_TilgrensendeYtelserDto>;
}`,signature:{properties:[{key:"relatertYtelseNavn",value:{name:"string",required:!0}},{key:"tilgrensendeYtelserListe",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFraDato: string;
  periodeTilDato: string;
  saksNummer?: string;
  statusNavn: string;
}`,signature:{properties:[{key:"periodeFraDato",value:{name:"string",required:!0}},{key:"periodeTilDato",value:{name:"string",required:!0}},{key:"saksNummer",value:{name:"string",required:!1}},{key:"statusNavn",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_arbeidsforhold_dto_RelaterteYtelserDto_TilgrensendeYtelserDto>",required:!0}}]}}],raw:"RelatertTilgrensedYtelse[]"},description:""}}};const Ue=[o.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE,o.AVKLAR_VILKÅR_FOR_FORELDREANSVAR],pr=({personoversikt:a})=>{const n=T(),r=Ke(Ue),{behandling:l}=q.use(_e),t=Ue.some(m=>X(m,l.aksjonspunkt)),s=pe(l),{data:i}=Z(s.søknadOptions(l)),{data:E}=Z(s.familiehendelseOptions(l,t)),{data:d}=Z(s.inntektArbeidYtelseOptions(l));return e.jsx(Oe,{standardPanelProps:r,faktaPanelKode:De.OMSORGSVILKARET,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.OmsorgOgForeldreansvar"}),skalPanelVisesIMeny:t,children:i&&E?.adopsjon&&d?e.jsx(Da,{søknad:i,adopsjon:E.adopsjon,innvilgetRelatertTilgrensendeYtelserForAnnenForelder:d.innvilgetRelatertTilgrensendeYtelserForAnnenForelder,personoversikt:a}):e.jsx(Re,{})})};pr.__docgenInfo={description:"",methods:[],displayName:"OmsorgOgForeldreansvarFaktaInitPanel",props:{personoversikt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  annenPart?: tjenester_behandling_personopplysning_PersonopplysningBasisDto;
  barn: Array<tjenester_behandling_personopplysning_PersonopplysningBasisDto>;
  bruker: tjenester_behandling_personopplysning_PersonopplysningBasisDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_personopplysning_PersonopplysningBasisDto>",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}}]}},description:""}}};const we=Ya(3),Kr=Ca(1e4),Or=a=>({kode:ue(a[0]?.definisjon,o.UTGÅTT_5025,o.VARSEL_REVURDERING_MANUELL),begrunnelse:a[0]?.begrunnelse??"",sendVarsel:void 0}),Ra=({previewCallback:a})=>{const n=T(),{isReadOnly:r,alleKodeverk:l,behandling:t,submitCallback:s,aksjonspunkterForPanel:i}=I(),E=Or(i),{mellomlagretFormData:d,setMellomlagretFormData:m}=C(),_=B({defaultValues:d??E}),S=_.watch(),[A,g]=q.useState(!1),v=()=>g(!1),N=()=>g(!0),R=W=>{_.trigger().then(Fa=>{Fa&&s({...S,...W}),g(!1)})},k=W=>{W.preventDefault(),a({dokumentMal:"VARREV",arsakskode:"ANNET",fritekst:S.fritekst??" "})},L=l.Venteårsak,h=Ha(t.språkkode);return e.jsxs(e.Fragment,{children:[e.jsx(M,{formMethods:_,onSubmit:s,setDataOnUnmount:m,children:e.jsxs(D,{gap:"space-16",children:[e.jsx(ke,{size:"small",level:"2",children:e.jsx(u,{id:"VarselOmRevurderingForm.VarselOmRevurdering"})}),!r&&i[0]?.status==="OPPR"&&e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:e.jsx(u,{id:"VarselOmRevurderingForm.VarselOmRevurderingVurder"})}),e.jsxs(D,{gap:"space-12",children:[e.jsx(ie,{name:"sendVarsel",control:_.control,validate:[K],children:e.jsxs(G,{gap:"space-16",children:[e.jsx(J,{value:!0,size:"small",children:e.jsx(u,{id:"VarselOmRevurderingForm.SendVarsel"})}),e.jsx(J,{value:!1,size:"small",children:e.jsx(u,{id:"VarselOmRevurderingForm.IkkeSendVarsel"})})]})}),S.sendVarsel&&e.jsx(Qa,{children:e.jsxs(D,{gap:"space-8",children:[e.jsx(Ve,{name:"fritekst",control:_.control,badges:[{type:"info",titleText:h}],label:n.formatMessage({id:"VarselOmRevurderingForm.FritekstIBrev"}),validate:[K,we,Kr,Ge],maxLength:1e4,parse:xa}),e.jsx("div",{children:e.jsx(Xe,{href:"#",onClick:k,children:e.jsx(u,{id:"VarselOmRevurderingForm.Preview"})})})]})})]}),e.jsx(Ve,{name:"begrunnelse",control:_.control,label:n.formatMessage({id:"VarselOmRevurderingForm.BegrunnelseForSvar"}),validate:[K,we,Ge]}),e.jsx("div",{children:e.jsx(Ae,{variant:"primary",size:"small",onClick:S.sendVarsel?N:void 0,loading:_.formState.isSubmitting,disabled:_.formState.isSubmitting,type:S.sendVarsel?"button":"submit",children:e.jsx(u,{id:"VarselOmRevurderingForm.Bekreft"})})})]}),(r||i[0]?.status!=="OPPR")&&e.jsx(p,{size:"small",label:e.jsx(u,{id:"VarselOmRevurderingForm.Begrunnelse"}),value:S.begrunnelse,type:"textarea"})]})}),e.jsx(An,{showModal:A,frist:c().add(28,"days").format($a),cancelEvent:v,submitCallback:R,ventearsaker:L,visBrevErBestilt:!0,hasManualPaVent:!0,erTilbakekreving:t.type==="BT-007"||t.type==="BT-009"})]})};Ra.__docgenInfo={description:`VarselOmRevurderingForm

Setter opp aksjonspunktet for avklaring av varsel om revurdering i søknad.`,methods:[],displayName:"VarselOmRevurderingForm",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arsakskode: RevurderingVarslingÅrsak;
  dokumentMal: DokumentMalType;
  fritekst: string;
}`,signature:{properties:[{key:"arsakskode",value:{name:"union",raw:`| 'BARNIKKEREG'
| 'JOBBFULLTID'
| 'IKKEOPPTJENT'
| 'UTVANDRET'
| 'JOBBUTLAND'
| 'IKKEOPPHOLD'
| 'JOBB6MND'
| 'AKTIVITET'
| 'ANNET'`,elements:[{name:"literal",value:"'BARNIKKEREG'"},{name:"literal",value:"'JOBBFULLTID'"},{name:"literal",value:"'IKKEOPPTJENT'"},{name:"literal",value:"'UTVANDRET'"},{name:"literal",value:"'JOBBUTLAND'"},{name:"literal",value:"'IKKEOPPHOLD'"},{name:"literal",value:"'JOBB6MND'"},{name:"literal",value:"'AKTIVITET'"},{name:"literal",value:"'ANNET'"}],required:!0}},{key:"dokumentMal",value:{name:"union",raw:`| 'FRITEK'
| 'FRIHTM'
| 'INNVES'
| 'AVSLES'
| 'INVFOR'
| 'AVSFOR'
| 'OPPFOR'
| 'ANUFOR'
| 'INVSVP'
| 'OPPSVP'
| 'AVSSVP'
| 'INFOAF'
| 'INNOPP'
| 'VARREV'
| 'IOHENL'
| 'INNSYN'
| 'IKKESO'
| 'INGEND'
| 'FORSAK'
| 'FORMED'
| 'FORMEF'
| 'FORTID'
| 'KGEAVV'
| 'KGEOMG'
| 'KGEOVE'
| 'ELYSIM'
| 'ENDUTB'
| 'INFOPU'
| 'FORPUS'
| 'KLAGAV'
| 'KAVVIS'
| 'KLAGNY'
| 'KHJEMS'
| 'VEDMED'
| 'KOMGJO'
| 'KLAGOV'
| 'KOVKLA'
| 'KLAGVE'
| 'KSTADF'
| 'VEDOGA'
| 'ANKEBO'
| 'ANKOMG'
| 'ANKOPP'
| 'KGESTA'
| 'KGEHJE'`,elements:[{name:"literal",value:"'FRITEK'"},{name:"literal",value:"'FRIHTM'"},{name:"literal",value:"'INNVES'"},{name:"literal",value:"'AVSLES'"},{name:"literal",value:"'INVFOR'"},{name:"literal",value:"'AVSFOR'"},{name:"literal",value:"'OPPFOR'"},{name:"literal",value:"'ANUFOR'"},{name:"literal",value:"'INVSVP'"},{name:"literal",value:"'OPPSVP'"},{name:"literal",value:"'AVSSVP'"},{name:"literal",value:"'INFOAF'"},{name:"literal",value:"'INNOPP'"},{name:"literal",value:"'VARREV'"},{name:"literal",value:"'IOHENL'"},{name:"literal",value:"'INNSYN'"},{name:"literal",value:"'IKKESO'"},{name:"literal",value:"'INGEND'"},{name:"literal",value:"'FORSAK'"},{name:"literal",value:"'FORMED'"},{name:"literal",value:"'FORMEF'"},{name:"literal",value:"'FORTID'"},{name:"literal",value:"'KGEAVV'"},{name:"literal",value:"'KGEOMG'"},{name:"literal",value:"'KGEOVE'"},{name:"literal",value:"'ELYSIM'"},{name:"literal",value:"'ENDUTB'"},{name:"literal",value:"'INFOPU'"},{name:"literal",value:"'FORPUS'"},{name:"literal",value:"'KLAGAV'"},{name:"literal",value:"'KAVVIS'"},{name:"literal",value:"'KLAGNY'"},{name:"literal",value:"'KHJEMS'"},{name:"literal",value:"'VEDMED'"},{name:"literal",value:"'KOMGJO'"},{name:"literal",value:"'KLAGOV'"},{name:"literal",value:"'KOVKLA'"},{name:"literal",value:"'KLAGVE'"},{name:"literal",value:"'KSTADF'"},{name:"literal",value:"'VEDOGA'"},{name:"literal",value:"'ANKEBO'"},{name:"literal",value:"'ANKOMG'"},{name:"literal",value:"'ANKOPP'"},{name:"literal",value:"'KGESTA'"},{name:"literal",value:"'KGEHJE'"}],required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Ir={"VarselOmRevurderingForm.VarselOmRevurdering":"Varsel om revurdering","VarselOmRevurderingForm.VarselOmRevurderingVurder":"Vurder om varsel om revurdering skal sendes til søker","VarselOmRevurderingForm.Etterkontroll":"Etterkontroll","VarselOmRevurderingForm.Manuell":"Manuell","VarselOmRevurderingForm.Bekreft":"Bekreft og fortsett","VarselOmRevurderingForm.IkkeSendVarsel":"Ikke send varsel til søker","VarselOmRevurderingForm.SendVarsel":"Send varsel til søker","VarselOmRevurderingForm.FritekstIBrev":"Fritekst i brev","VarselOmRevurderingForm.BegrunnelseForSvar":"Begrunnelse","VarselOmRevurderingForm.BrevBlirBestilt":"Brevet blir bestilt","VarselOmRevurderingForm.Begrunnelse":"Begrunnelse","VarselOmRevurderingForm.UtstedDato":"Utstedt dato","VarselOmRevurderingForm.Ytelsesvedtak":"Vedtak","VarselOmRevurderingForm.Preview":"Forhåndsvis"},Fr=z(Ir),Aa=a=>e.jsx($,{value:Fr,children:e.jsx(Ra,{...a})});Aa.__docgenInfo={description:"",methods:[],displayName:"VarselOmRevurderingProsessIndex",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arsakskode: RevurderingVarslingÅrsak;
  dokumentMal: DokumentMalType;
  fritekst: string;
}`,signature:{properties:[{key:"arsakskode",value:{name:"union",raw:`| 'BARNIKKEREG'
| 'JOBBFULLTID'
| 'IKKEOPPTJENT'
| 'UTVANDRET'
| 'JOBBUTLAND'
| 'IKKEOPPHOLD'
| 'JOBB6MND'
| 'AKTIVITET'
| 'ANNET'`,elements:[{name:"literal",value:"'BARNIKKEREG'"},{name:"literal",value:"'JOBBFULLTID'"},{name:"literal",value:"'IKKEOPPTJENT'"},{name:"literal",value:"'UTVANDRET'"},{name:"literal",value:"'JOBBUTLAND'"},{name:"literal",value:"'IKKEOPPHOLD'"},{name:"literal",value:"'JOBB6MND'"},{name:"literal",value:"'AKTIVITET'"},{name:"literal",value:"'ANNET'"}],required:!0}},{key:"dokumentMal",value:{name:"union",raw:`| 'FRITEK'
| 'FRIHTM'
| 'INNVES'
| 'AVSLES'
| 'INVFOR'
| 'AVSFOR'
| 'OPPFOR'
| 'ANUFOR'
| 'INVSVP'
| 'OPPSVP'
| 'AVSSVP'
| 'INFOAF'
| 'INNOPP'
| 'VARREV'
| 'IOHENL'
| 'INNSYN'
| 'IKKESO'
| 'INGEND'
| 'FORSAK'
| 'FORMED'
| 'FORMEF'
| 'FORTID'
| 'KGEAVV'
| 'KGEOMG'
| 'KGEOVE'
| 'ELYSIM'
| 'ENDUTB'
| 'INFOPU'
| 'FORPUS'
| 'KLAGAV'
| 'KAVVIS'
| 'KLAGNY'
| 'KHJEMS'
| 'VEDMED'
| 'KOMGJO'
| 'KLAGOV'
| 'KOVKLA'
| 'KLAGVE'
| 'KSTADF'
| 'VEDOGA'
| 'ANKEBO'
| 'ANKOMG'
| 'ANKOPP'
| 'KGESTA'
| 'KGEHJE'`,elements:[{name:"literal",value:"'FRITEK'"},{name:"literal",value:"'FRIHTM'"},{name:"literal",value:"'INNVES'"},{name:"literal",value:"'AVSLES'"},{name:"literal",value:"'INVFOR'"},{name:"literal",value:"'AVSFOR'"},{name:"literal",value:"'OPPFOR'"},{name:"literal",value:"'ANUFOR'"},{name:"literal",value:"'INVSVP'"},{name:"literal",value:"'OPPSVP'"},{name:"literal",value:"'AVSSVP'"},{name:"literal",value:"'INFOAF'"},{name:"literal",value:"'INNOPP'"},{name:"literal",value:"'VARREV'"},{name:"literal",value:"'IOHENL'"},{name:"literal",value:"'INNSYN'"},{name:"literal",value:"'IKKESO'"},{name:"literal",value:"'INGEND'"},{name:"literal",value:"'FORSAK'"},{name:"literal",value:"'FORMED'"},{name:"literal",value:"'FORMEF'"},{name:"literal",value:"'FORTID'"},{name:"literal",value:"'KGEAVV'"},{name:"literal",value:"'KGEOMG'"},{name:"literal",value:"'KGEOVE'"},{name:"literal",value:"'ELYSIM'"},{name:"literal",value:"'ENDUTB'"},{name:"literal",value:"'INFOPU'"},{name:"literal",value:"'FORPUS'"},{name:"literal",value:"'KLAGAV'"},{name:"literal",value:"'KAVVIS'"},{name:"literal",value:"'KLAGNY'"},{name:"literal",value:"'KHJEMS'"},{name:"literal",value:"'VEDMED'"},{name:"literal",value:"'KOMGJO'"},{name:"literal",value:"'KLAGOV'"},{name:"literal",value:"'KOVKLA'"},{name:"literal",value:"'KLAGVE'"},{name:"literal",value:"'KSTADF'"},{name:"literal",value:"'VEDOGA'"},{name:"literal",value:"'ANKEBO'"},{name:"literal",value:"'ANKOMG'"},{name:"literal",value:"'ANKOPP'"},{name:"literal",value:"'KGESTA'"},{name:"literal",value:"'KGEHJE'"}],required:!0}},{key:"fritekst",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const yr=(a,n)=>r=>{const l=r.length>0&&"sendVarsel"in r[0]&&r[0].sendVarsel;return a(!l),()=>{l&&n()}},Lr=[o.VARSEL_REVURDERING_MANUELL,o.UTGÅTT_5025],Pr=()=>{const a=T(),{setSkalOppdatereEtterBekreftelseAvAp:n,behandling:r}=q.use(_e),l=za(),t=yr(n,()=>{l("/")}),s=Qe(Lr,[],t),i=Dn(s.aksjonspunkterForPanel),{mutate:E}=sn({mutationFn:d=>Tn({...d,behandlingUuid:r.uuid}),onSuccess:Wa});return e.jsx(kn,{standardPanelProps:s,prosessPanelKode:Za.VARSEL,prosessPanelMenyTekst:a.formatMessage({id:"Behandlingspunkt.CheckVarselRevurdering"}),skalPanelVisesIMeny:i,children:e.jsx(Aa,{previewCallback:E})})};Pr.__docgenInfo={description:"",methods:[],displayName:"VarselProsessStegInitPanel"};const ka=({isEngangsstonad:a,isForeldreansvar2Ledd:n,status:r})=>{const l=T(),{behandling:t,alleKodeverk:s,isSubmittable:i,aksjonspunkterForPanel:E,submitCallback:d,harÅpentAksjonspunkt:m,isReadOnly:_,alleMerknaderFraBeslutter:S}=I(),A=E.some(W=>S[W.definisjon]?.notAccepted),g=Gr(E,r,t.behandlingsresultat),{mellomlagretFormData:v,setMellomlagretFormData:N}=C(),R=B({defaultValues:v??g}),k=n?"FP_VK_8":"FP_VK_33",L=s.Avslagsårsak[k],h=m?void 0:r==="OPPFYLT";return e.jsx(M,{formMethods:R,onSubmit:W=>d(br(W,E)),setDataOnUnmount:N,children:e.jsx(ve,{title:l.formatMessage({id:"ErForeldreansvarVilkaarOppfyltForm.Foreldreansvar"}),harÅpentAksjonspunkt:i,isSubmittable:i,isReadOnly:_,originalErVilkårOk:h,erIkkeGodkjentAvBeslutter:A,isDirty:R.formState.isDirty,isSubmitting:R.formState.isSubmitting,children:e.jsxs(D,{gap:"space-16",children:[e.jsx(H,{size:"small",children:e.jsx(u,{id:"ErForeldreansvarVilkaarOppfyltForm.RettTilStonad"})}),e.jsx(V,{avslagsårsaker:L,isReadOnly:_,customVilkårOppfyltText:e.jsx(u,{id:a?"FodselVilkarForm.OppfyltEs":"FodselVilkarForm.OppfyltFp"}),customVilkårIkkeOppfyltText:e.jsx(u,{id:a?"FodselVilkarForm.IkkeOppfyltEs":"FodselVilkarForm.IkkeOppfyltFp",values:{b:me}})}),e.jsx(b,{readOnly:_})]})})})},Gr=(a,n,r)=>({...V.buildInitialValues(a,n,r),...b.buildInitialValues(a)}),br=(a,n)=>n.map(r=>({...V.transformValues(a),...b.transformValues(a),kode:ue(r.definisjon,o.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD,o.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD,o.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE)}));ka.__docgenInfo={description:`ErForeldreansvarVilkaarOppfyltForm

Setter opp aksjonspunkter for avklaring av foreldreansvarvilkåret 2 eller 4 ledd.`,methods:[],displayName:"ErForeldreansvarVilkaarOppfyltForm",props:{isForeldreansvar2Ledd:{required:!0,tsType:{name:"boolean"},description:""},isEngangsstonad:{required:!0,tsType:{name:"boolean"},description:""},status:{required:!0,tsType:{name:"string"},description:""}}};const Vr={"ErForeldreansvarVilkaarOppfyltForm.Foreldreansvar":"Foreldreansvaret","ErForeldreansvarVilkaarOppfyltForm.ErVilkaretOppfylt":"Er vilkåret oppfylt?","ErForeldreansvarVilkaarOppfyltForm.RettTilStonad":"Rett til stønad ved overtakelse av foreldreansvaret","FodselVilkarForm.OppfyltEs":"Far har rett til engangsstønad, vilkåret er oppfylt","FodselVilkarForm.IkkeOppfyltEs":"Far har ikke rett til engangsstønad, vilkåret er <b>ikke</b> oppfylt","FodselVilkarForm.OppfyltFp":"Far har rett til foreldrepenger, vilkåret er oppfylt","FodselVilkarForm.IkkeOppfyltFp":"Far har ikke rett til foreldrepenger, vilkåret er <b>ikke</b> oppfylt","ShowVilkarStatus.Check":"Informasjonen er utfylt"},fr=z(Vr),pa=a=>e.jsx($,{value:fr,children:e.jsx(ka,{...a})});pa.__docgenInfo={description:"",methods:[],displayName:"ForeldreansvarVilkarProsessIndex",props:{isForeldreansvar2Ledd:{required:!0,tsType:{name:"boolean"},description:""},isEngangsstonad:{required:!0,tsType:{name:"boolean"},description:""},status:{required:!0,tsType:{name:"string"},description:""}}};const jr=[o.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD,o.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD,o.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE],qr={[o.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD]:"ErForeldreansvarVilkaarOppfyltForm.2LeddParagrafEngangsStonad",[o.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD]:"ErForeldreansvarVilkaarOppfyltForm.4LeddParagraf",[o.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE]:"SRBVilkarForm.VurderSammeBarn"},Je=["FP_VK_8","FP_VK_33"],cr=()=>{const a=T(),n=Qe(jr,Je);return e.jsx(Rn,{standardPanelProps:n,vilkårKoder:Je,inngangsvilkårPanelKode:"FORELDREANSVARSVILKARET",hentInngangsvilkårPanelTekst:n.aksjonspunkterForPanel.length>0?a.formatMessage({id:qr[n.aksjonspunkterForPanel[0].definisjon]}):"",children:e.jsx(pa,{isEngangsstonad:!0,isForeldreansvar2Ledd:n.vilkårForPanel.some(r=>r.vilkarType==="FP_VK_8"),status:n.status})})};cr.__docgenInfo={description:"",methods:[],displayName:"ForeldreansvarInngangsvilkarInitPanel"};const Ka=({vilkår:a,status:n})=>{const r=T(),{behandling:l,alleKodeverk:t,aksjonspunkterForPanel:s,submitCallback:i,harÅpentAksjonspunkt:E,isReadOnly:d,isSubmittable:m,alleMerknaderFraBeslutter:_}=I(),S=s.some(L=>_[L.definisjon]?.notAccepted),A=Br(s,n,l.behandlingsresultat),{mellomlagretFormData:g,setMellomlagretFormData:v}=C(),N=B({defaultValues:g??A}),R=t.Avslagsårsak.FP_VK_4,k=E?void 0:n==="OPPFYLT";return e.jsx(M,{formMethods:N,onSubmit:L=>i(Mr(L,s)),setDataOnUnmount:v,children:e.jsxs(ve,{title:r.formatMessage({id:"AdopsjonVilkarForm.Adopsjon"}),harÅpentAksjonspunkt:E,isSubmittable:m,isReadOnly:d,lovReferanse:a[0]?.lovReferanse??void 0,originalErVilkårOk:k,erIkkeGodkjentAvBeslutter:S,isDirty:N.formState.isDirty,isSubmitting:N.formState.isSubmitting,children:[e.jsx(H,{size:"small",children:e.jsx(u,{id:"AdopsjonVilkarForm.TidligereUtbetaltStonad"})}),e.jsxs(D,{gap:"space-16",children:[e.jsx(V,{avslagsårsaker:R,isReadOnly:d,customVilkårOppfyltText:e.jsx(u,{id:"AdopsjonVilkarForm.Oppfylt"}),customVilkårIkkeOppfyltText:e.jsx(u,{id:"AdopsjonVilkarForm.IkkeOppfylt",values:{b:me}})}),e.jsx(b,{readOnly:d})]})]})})},Br=(a,n,r)=>({...V.buildInitialValues(a,n,r),...b.buildInitialValues(a)}),Mr=(a,n)=>({...V.transformValues(a),...b.transformValues(a),kode:ue(n[0]?.definisjon,o.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE)});Ka.__docgenInfo={description:`AdopsjonVilkarForm

Setter opp aksjonspunktet for avklaring av Adopsjonsvilkåret.`,methods:[],displayName:"AdopsjonVilkarForm",props:{status:{required:!0,tsType:{name:"string"},description:""},vilkår:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  evaluering?: string;
  input?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"evaluering",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Vilkar[]"},description:""}}};const hr={"AdopsjonVilkarForm.Adopsjon":"Adopsjon","AdopsjonVilkarForm.TidligereUtbetaltStonad":"Tidligere utbetalte foreldrepenger eller engangsstønad","AdopsjonVilkarForm.Oppfylt":"Er utbetalt for et annet barn, vilkåret er oppfylt","AdopsjonVilkarForm.IkkeOppfylt":"Er utbetalt for dette barnet, vilkåret er <b>ikke</b> oppfylt","ShowVilkarStatus.Check":"Informasjonen er utfylt"},Ur=z(hr),wr=a=>e.jsx($,{value:Ur,children:e.jsx(Ka,{...a})});wr.__docgenInfo={description:"",methods:[],displayName:"AdopsjonVilkarProsessIndex",props:{status:{required:!0,tsType:{name:"string"},description:""},vilkår:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  evaluering?: string;
  input?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"evaluering",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Vilkar[]"},description:""}}};const Jr=new Set(["1002","1003","1032"]),Oa=({status:a,ytelseTypeKode:n,vilkår:r})=>{const l=T(),{behandling:t,isSubmittable:s,alleKodeverk:i,aksjonspunkterForPanel:E,submitCallback:d,harÅpentAksjonspunkt:m,isReadOnly:_,alleMerknaderFraBeslutter:S}=I(),A=E.some(h=>S[h.definisjon]?.notAccepted),g=Hr(E,a,t.behandlingsresultat),{mellomlagretFormData:v,setMellomlagretFormData:N}=C(),R=B({defaultValues:v??g}),k=Yr(n==="FP",i.Avslagsårsak.FP_VK_1),L=m?void 0:a==="OPPFYLT";return e.jsx(M,{formMethods:R,onSubmit:h=>d(xr(h,E)),setDataOnUnmount:N,children:e.jsx(ve,{title:l.formatMessage({id:"FodselVilkarForm.Fodsel"}),harÅpentAksjonspunkt:m,isSubmittable:s,isReadOnly:_,lovReferanse:r[0]?.lovReferanse??void 0,originalErVilkårOk:L,erIkkeGodkjentAvBeslutter:A,isDirty:R.formState.isDirty,isSubmitting:R.formState.isSubmitting,children:e.jsxs(D,{gap:"space-16",children:[e.jsx(H,{size:"small",children:e.jsx(u,{id:"FodselVilkarForm.TidligereUtbetaltStonad"})}),e.jsx(V,{avslagsårsaker:k,isReadOnly:_,customVilkårOppfyltText:e.jsx(u,{id:"FodselVilkarForm.Oppfylt"}),customVilkårIkkeOppfyltText:e.jsx(u,{id:"FodselVilkarForm.IkkeOppfylt",values:{b:me}})}),e.jsx(b,{useAllWidth:!0,readOnly:_})]})})})},Hr=(a,n,r)=>({...V.buildInitialValues(a,n,r),...b.buildInitialValues(a)}),xr=(a,n)=>({...V.transformValues(a),...b.transformValues(a),kode:ue(n[0]?.definisjon,o.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE)}),Yr=(a,n)=>a?n.filter(r=>!Jr.has(r.kode)):n;Oa.__docgenInfo={description:`FodselVilkarForm

Setter opp aksjonspunktet for avklaring av Fødselsvilkåret.`,methods:[],displayName:"FodselVilkarForm",props:{status:{required:!0,tsType:{name:"string"},description:""},vilkår:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  evaluering?: string;
  input?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"evaluering",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Vilkar[]"},description:""},ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""}}};const Cr={"FodselVilkarForm.Fodsel":"Fødsel","FodselVilkarForm.TidligereUtbetaltStonad":"Tidligere utbetalte foreldrepenger eller engangsstønad","FodselVilkarForm.Oppfylt":"Er utbetalt for et annet barn, vilkåret er oppfylt","FodselVilkarForm.IkkeOppfylt":"Er utbetalt for dette barnet, vilkåret er <b>ikke</b> oppfylt","ShowVilkarStatus.Check":"Informasjonen er utfylt"},$r=z(Cr),zr=a=>e.jsx($,{value:$r,children:e.jsx(Oa,{...a})});zr.__docgenInfo={description:"",methods:[],displayName:"FodselVilkarProsessIndex",props:{ytelseTypeKode:{required:!0,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"string"},description:""},vilkår:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  evaluering?: string;
  input?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"evaluering",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Vilkar[]"},description:""}}};const Ia=({status:a})=>{const n=T(),{behandling:r,alleKodeverk:l,aksjonspunkterForPanel:t,submitCallback:s,isReadOnly:i,alleMerknaderFraBeslutter:E,harÅpentAksjonspunkt:d,isSubmittable:m}=I(),_=t.some(k=>E[k.definisjon]?.notAccepted),S=Wr(t,a,r.behandlingsresultat),{mellomlagretFormData:A,setMellomlagretFormData:g}=C(),v=B({defaultValues:A??S}),N=l.Avslagsårsak.FP_VK_5,R=d?void 0:a==="OPPFYLT";return e.jsx(M,{formMethods:v,onSubmit:k=>s(Zr(k,t)),setDataOnUnmount:g,children:e.jsx(ve,{title:n.formatMessage({id:"ErOmsorgVilkaarOppfyltForm.Omsorg"}),harÅpentAksjonspunkt:m,isSubmittable:m,isReadOnly:i,originalErVilkårOk:R,erIkkeGodkjentAvBeslutter:_,isDirty:v.formState.isDirty,isSubmitting:v.formState.isSubmitting,children:e.jsxs(D,{gap:"space-16",children:[e.jsx(H,{size:"small",children:e.jsx(u,{id:"ErOmsorgVilkaarOppfyltForm.VilkaretOppfylt"})}),e.jsx(V,{avslagsårsaker:N,isReadOnly:i,customVilkårOppfyltText:e.jsx(u,{id:"ErOmsorgVilkaarOppfyltForm.Oppfylt"}),customVilkårIkkeOppfyltText:e.jsx(u,{id:"ErOmsorgVilkaarOppfyltForm.IkkeOppfylt",values:{b:me}})}),e.jsx(b,{readOnly:i})]})})})},Wr=(a,n,r)=>({...V.buildInitialValues(a,n,r),...b.buildInitialValues(a)}),Zr=(a,n)=>n.map(r=>({...V.transformValues(a),...b.transformValues(a),kode:ue(r.definisjon,o.MANUELL_VURDERING_AV_OMSORGSVILKÅRET,o.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE)}));Ia.__docgenInfo={description:`ErOmsorgVilkaarOppfyltForm

Setter opp aksjonspunkter for avklaring av omsorgsvilkåret.`,methods:[],displayName:"ErOmsorgVilkaarOppfyltForm",props:{status:{required:!0,tsType:{name:"string"},description:""}}};const Xr={"ErOmsorgVilkaarOppfyltForm.Omsorg":"Omsorg","ErOmsorgVilkaarOppfyltForm.Anvendes":"Vilkår som anvendes","ErOmsorgVilkaarOppfyltForm.VilkaretOppfylt":"Far rett til engangsstønad","ErOmsorgVilkaarOppfyltForm.Oppfylt":"Far har rett til engangsstønad, vilkåret er oppfylt","ErOmsorgVilkaarOppfyltForm.IkkeOppfylt":"Far har ikke rett til engangsstønad, vilkåret er <b>ikke</b> oppfylt","ShowVilkarStatus.Check":"Informasjonen er utfylt"},Qr=z(Xr),el=a=>e.jsx($,{value:Qr,children:e.jsx(Ia,{...a})});el.__docgenInfo={description:"",methods:[],displayName:"OmsorgVilkarProsessIndex",props:{status:{required:!0,tsType:{name:"string"},description:""}}};export{wr as A,zr as F,el as O,Pr as V,cr as a,pr as b,qn as c,_r as d};
