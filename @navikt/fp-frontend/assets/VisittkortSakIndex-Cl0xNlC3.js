import{r as S,h as y,l as c,j as n,o as p,D as f,P as D,b as x}from"./iframe-B2RPPTd9.js";import{R as M,G as h,U as F,p as j}from"./index.es-Cb9VCc4L.js";import{u as E,B,H as L}from"./VStack-BHaSRmYn.js";import{M as i}from"./message-DURfkQLO.js";import{T as u}from"./index-BjyQdHhF.js";import{T as k}from"./index.es-Rv3SMPlK.js";import{S as w}from"./Spacer-BTo5TogJ.js";var V=(e=>(e.KODE6="SPSF",e.KODE7="SPFO",e.KLIENT_ADRESSE="KLIE",e.MILITAR="MILI",e.PENDLER="PEND",e.SVALBARD="SVAL",e.UTEN_FAST_BO="UFB",e.UTENRIKS_TJENST="URIK",e.UDEFINERT="UDEF",e))(V||{}),g=(e=>(e.ADOPSJON="ADPSJN",e.OMSORG="OMSRGO",e.FODSEL="FODSL",e.TERMIN="TERM",e))(g||{}),q=(e=>(e.KVINNE="K",e.MANN="M",e.UDEFINERT="-",e))(q||{}),R=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a};const A=S.forwardRef((e,t)=>{var{title:a,titleId:r}=e,l=R(e,["title","titleId"]);let s=E();return s=a?r||"title-"+s:void 0,y.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":s},l),a?y.createElement("title",{id:s},a):null,y.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.47 2.97a.75.75 0 0 1 .53-.22c2.018 0 3.74.242 4.95 1.15 1.269.952 1.8 2.486 1.8 4.6V9c0 1.557-.255 2.997-1.015 4.06-.796 1.115-2.05 1.69-3.735 1.69h-6c-1.685 0-2.94-.575-3.735-1.69C5.505 11.998 5.25 10.558 5.25 9V6.5A1.75 1.75 0 0 0 3.5 4.75a.75.75 0 0 1 0-1.5A3.25 3.25 0 0 1 6.75 6.5v.75h6.5V3.5a.75.75 0 0 1 .22-.53M14.75 8a.75.75 0 0 1-.75.75H6.75V9c0 1.443.245 2.503.735 3.19.454.635 1.2 1.06 2.515 1.06h6c1.315 0 2.06-.425 2.515-1.06.49-.687.735-1.747.735-3.19v-.5c0-1.886-.469-2.852-1.2-3.4-.685-.514-1.739-.776-3.3-.836zM9.5 17.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M6.75 18.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m9.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0",clipRule:"evenodd"}))}),K=e=>e===1?"VisittkortBarnInfoFodselPanel.Fodt":e===2?"VisittkortBarnInfoFodselPanel.Tvillinger":"VisittkortBarnInfoFodselPanel.Flerlinger",U=e=>{const t=f().diff(e,"years"),a=f().diff(e,"months"),r=f().diff(e,"days");if(t<0||a<0||r<0)throw new Error("Fødselsdato kan ikke være i fremtiden");let l;return t>0?l="VisittkortBarnInfoFodselPanel.Ar.Fodt":a>0?l="VisittkortBarnInfoFodselPanel.Maned.Fodt":r>=0&&(r===1&&(l="VisittkortBarnInfoFodselPanel.Dag.Fodt"),(r===0||r>1)&&(l="VisittkortBarnInfoFodselPanel.Dager.Fodt")),{id:l,values:{value:t||a||r}}},T=({familiehendelse:e})=>{const t=c(),{hendelseType:a,hendelseDato:r,antallBarn:l,dødfødsel:s}=e,d=a===g.FODSEL;return n.jsxs(n.Fragment,{children:[n.jsxs(B,{children:[d&&!!r&&l>0&&n.jsxs(n.Fragment,{children:[n.jsx(i,{id:K(l),values:{dato:p(r)}}),!s&&n.jsx(i,{...U(r)})]}),d&&(!r||l===0)&&n.jsx(i,{id:"VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger"}),!d&&n.jsx(i,{id:"VisittkortBarnInfoFodselPanel.Termin",values:{dato:r?p(r):"-"}})]}),s&&n.jsx(u,{variant:"neutral",size:"small",title:t.formatMessage({id:"VisittkortBarnInfoFodselPanel.DodTittel"}),children:n.jsx(i,{id:"VisittkortBarnInfoFodselPanel.Dod"})})]})};T.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoFodselPanel",props:{familiehendelse:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}},description:""}}};const _=({familiehendelse:e})=>{const{hendelseType:t,hendelseDato:a,antallBarn:r}=e,l=t===g.ADOPSJON,s=r===1?"VisittkortBarnInfoOmsorgPanel.Foreldreansvar":"VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn",d=r===1?"VisittkortBarnInfoOmsorgPanel.Adopsjon":"VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn";return n.jsx(B,{children:n.jsx(i,{id:l?d:s,values:{antall:r,dato:a?p(a):"-"}})})};_.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoOmsorgPanel",props:{familiehendelse:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}},description:""}}};const O=({familiehendelse:e})=>{const t=c(),a=n.jsx(A,{title:t.formatMessage({id:"VisittkortBarnInfoPanel.Barnevogn"}),height:24,width:24,color:"white",style:{backgroundColor:"var(--ax-neutral-500)",borderRadius:"50%",padding:"2px"}}),r=e.hendelseType===g.FODSEL||e.hendelseType===g.TERMIN;return n.jsxs(M,{icon:a,children:[r&&n.jsx(T,{familiehendelse:e}),!r&&n.jsx(_,{familiehendelse:e})]})};O.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoPanel",props:{familiehendelse:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}},description:""}}};const v=({fagsakPerson:e,harVergeIÅpenBehandling:t=!1})=>{const a=c(),r=f().diff(e.fødselsdato,"years")<18;return n.jsxs(n.Fragment,{children:[e.dødsdato&&n.jsx(k,{content:a.formatMessage({id:"VisittkortLabels.DodTittel"}),placement:"bottom",children:n.jsx(u,{variant:"neutral",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Dod",values:{dato:p(e.dødsdato)}})})}),e.diskresjonskode===V.KODE6&&!e.dødsdato&&n.jsx(k,{content:a.formatMessage({id:"VisittkortLabels.Diskresjon6Tittel"}),placement:"bottom",children:n.jsx(u,{variant:"error",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Diskresjon6"})})}),e.diskresjonskode===V.KODE7&&!e.dødsdato&&n.jsx(k,{content:a.formatMessage({id:"VisittkortLabels.Diskresjon7Tittel"}),placement:"bottom",children:n.jsx(u,{variant:"warning",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Diskresjon7"})})}),t&&!e.dødsdato&&n.jsx(k,{content:a.formatMessage({id:"VisittkortLabels.VergeTittel"}),placement:"bottom",children:n.jsx(u,{variant:"info",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Verge"})})}),r&&n.jsx(k,{content:a.formatMessage({id:"VisittkortLabels.Under18Tittel"}),placement:"bottom",children:n.jsx(u,{variant:"info",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Under18"})})})]})};v.__docgenInfo={description:"",methods:[],displayName:"VisittkortLabels",props:{fagsakPerson:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},harVergeIÅpenBehandling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const G="_container_15his_1",I={container:G},b=e=>e===q.KVINNE?j.female:e===q.MANN?j.male:j.unknown,P=({erMor:e,bruker:t,annenPart:a,familiehendelse:r,lenkeTilAnnenPart:l,harVergeIÅpenBehandling:s,erTilbakekreving:d})=>{const N=c();if(d&&s)return n.jsx("div",{className:I.container,children:n.jsx(h,{name:t.navn,fodselsnummer:t.fødselsnummer,gender:b(t.kjønn),renderLabelContent:()=>n.jsx(v,{fagsakPerson:t,harVergeIÅpenBehandling:s})})});const m=e||!a?t:a,o=!e&&a?t:a;return n.jsx("div",{className:I.container,children:n.jsxs(L,{wrap:!1,align:"center",children:[m.aktørId?n.jsx(h,{name:m.navn,fodselsnummer:m.fødselsnummer,gender:b(m.kjønn),url:l,renderLabelContent:()=>n.jsx(v,{fagsakPerson:m,harVergeIÅpenBehandling:s}),isActive:e}):n.jsx(F,{namePlaceholder:N.formatMessage({id:"VisittkortPanel.Ukjent"})}),o&&(o.aktørId?n.jsx(h,{name:o.navn,fodselsnummer:o.fødselsnummer,gender:b(o.kjønn),url:l,renderLabelContent:()=>n.jsx(v,{fagsakPerson:o}),isActive:!e}):n.jsx(F,{namePlaceholder:N.formatMessage({id:"VisittkortPanel.Ukjent"})})),r&&n.jsxs(n.Fragment,{children:[n.jsx(w,{}),n.jsx(O,{familiehendelse:r})]})]})})};P.__docgenInfo={description:"",methods:[],displayName:"VisittkortPanel",props:{erMor:{required:!0,tsType:{name:"boolean"},description:""},bruker:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},annenPart:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},familiehendelse:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}},description:""},lenkeTilAnnenPart:{required:!1,tsType:{name:"string"},description:""},harVergeIÅpenBehandling:{required:!0,tsType:{name:"boolean"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""}}};const J={"VisittkortLabels.Dod":"Død {dato}","VisittkortLabels.DodTittel":"Personen er død","VisittkortLabels.Diskresjon6":"Kode 6","VisittkortLabels.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","VisittkortLabels.Diskresjon7":"Kode 7","VisittkortLabels.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","VisittkortLabels.Verge":"Verge","VisittkortLabels.VergeTittel":"Personen har verge i en åpen behandling","VisittkortLabels.Under18Tittel":"Personen er under 18 år","VisittkortLabels.Under18":"Under 18","VisittkortBarnInfoFodselPanel.Dod":"Død","VisittkortBarnInfoFodselPanel.DodTittel":"Barnet er dødt","VisittkortBarnInfoFodselPanel.Termin":"Termin {dato}","VisittkortBarnInfoFodselPanel.Fodt":"Født {dato}","VisittkortBarnInfoFodselPanel.Tvillinger":"Tvillinger Født {dato}","VisittkortBarnInfoFodselPanel.Flerlinger":"Flerlinger Født {dato}","VisittkortBarnInfoFodselPanel.Ar.Fodt":" ({value} år)","VisittkortBarnInfoFodselPanel.Maned.Fodt":" ({value} mnd)","VisittkortBarnInfoFodselPanel.Dag.Fodt":" ({value} dag)","VisittkortBarnInfoFodselPanel.Dager.Fodt":" ({value} dager)","VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger":"Har ikke opplysninger om fødsel","VisittkortBarnInfoPanel.Barnevogn":"Barnevogn","VisittkortBarnInfoOmsorgPanel.Foreldreansvar":"Foreldreansvar {dato}","VisittkortBarnInfoOmsorgPanel.Adopsjon":"Adopsjon {dato}","VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn":"Foreldreansvar({antall} barn) {dato}","VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn":"Adopsjon({antall} barn) {dato}","VisittkortPanel.Ukjent":"Ukjent navn, mangler norsk id-nr"},z=x(J),C=({bruker:e,annenPart:t,familiehendelse:a,lenkeTilAnnenPart:r,erMor:l=!0,harVergeIÅpenBehandling:s=!1,erTilbakekreving:d=!1})=>n.jsx(D,{value:z,children:n.jsx(P,{erMor:l,bruker:e,annenPart:t,familiehendelse:a,lenkeTilAnnenPart:r,harVergeIÅpenBehandling:s,erTilbakekreving:d})});C.__docgenInfo={description:"",methods:[],displayName:"VisittkortSakIndex",props:{erMor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bruker:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},annenPart:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},familiehendelse:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}},description:""},lenkeTilAnnenPart:{required:!1,tsType:{name:"string"},description:""},harVergeIÅpenBehandling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{g as F,q as N,A as S,C as V};
