import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{f as R,k as y,h as F,H as w,P as L}from"./withPanelData-BiaK-SIT.js";import{M as d,s as h,P as E,n as S}from"./index.es-BXvL0PKj.js";import{C as A,T as g,S as v,a as T,W as j}from"./index.es-B29KRV0u.js";import{d as k}from"./dayjs.min-Cke173X9.js";import{T as u}from"./Tag-CvDYdtUx.js";import{r as p}from"./index-DjhIdADd.js";import{S as M}from"./Spacer-C094o1Yi.js";var N=function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)s.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const _=p.forwardRef((e,s)=>{var{title:t,titleId:r}=e,a=N(e,["title","titleId"]);let i=R();return i=t?r||"title-"+i:void 0,p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":i},a),t?p.createElement("title",{id:i},t):null,p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.47 2.97a.75.75 0 0 1 .53-.22c2.018 0 3.74.242 4.95 1.15 1.269.952 1.8 2.486 1.8 4.6V9c0 1.557-.255 2.997-1.015 4.06-.796 1.115-2.05 1.69-3.735 1.69h-6c-1.685 0-2.94-.575-3.735-1.69C5.505 11.998 5.25 10.558 5.25 9V6.5A1.75 1.75 0 0 0 3.5 4.75a.75.75 0 0 1 0-1.5A3.25 3.25 0 0 1 6.75 6.5v.75h6.5V3.5a.75.75 0 0 1 .22-.53M14.75 8a.75.75 0 0 1-.75.75H6.75V9c0 1.443.245 2.503.735 3.19.454.635 1.2 1.06 2.515 1.06h6c1.315 0 2.06-.425 2.515-1.06.49-.687.735-1.747.735-3.19v-.5c0-1.886-.469-2.852-1.2-3.4-.685-.514-1.739-.776-3.3-.836zM9.5 17.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M6.75 18.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m9.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0",clipRule:"evenodd"}))});var V=(e=>(e.KODE6="SPSF",e.KODE7="SPFO",e.KLIENT_ADRESSE="KLIE",e.MILITAR="MILI",e.PENDLER="PEND",e.SVALBARD="SVAL",e.UTEN_FAST_BO="UFB",e.UTENRIKS_TJENST="URIK",e.UDEFINERT="UDEF",e))(V||{}),f=(e=>(e.ADOPSJON="ADPSJN",e.OMSORG="OMSRGO",e.FODSEL="FODSL",e.TERMIN="TERM",e))(f||{}),I=(e=>(e.KVINNE="K",e.MANN="M",e.UDEFINERT="-",e))(I||{});const U=e=>e===1?"VisittkortBarnInfoFodselPanel.Fodt":e===2?"VisittkortBarnInfoFodselPanel.Tvillinger":"VisittkortBarnInfoFodselPanel.Flerlinger",K=e=>{const s=k().diff(e,"years"),t=k().diff(e,"months"),r=k().diff(e,"days");if(s<0||t<0||r<0)throw new Error("Fødselsdato kan ikke være i fremtiden");let a;return s>0?a="VisittkortBarnInfoFodselPanel.Ar.Fodt":t>0?a="VisittkortBarnInfoFodselPanel.Maned.Fodt":r>=0&&(r===1&&(a="VisittkortBarnInfoFodselPanel.Dag.Fodt"),(r===0||r>1)&&(a="VisittkortBarnInfoFodselPanel.Dager.Fodt")),{id:a,values:{value:s||t||r}}},P=({familiehendelse:e})=>{const s=y(),{hendelseType:t,hendelseDato:r,antallBarn:a,dødfødsel:i}=e,o=t===f.FODSEL;return n.jsxs(n.Fragment,{children:[n.jsxs(F,{children:[o&&!!r&&a>0&&n.jsxs(n.Fragment,{children:[n.jsx(d,{id:U(a),values:{dato:h(r)}}),!i&&n.jsx(d,{...K(r)})]}),o&&(!r||a===0)&&n.jsx(d,{id:"VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger"}),!o&&n.jsx(d,{id:"VisittkortBarnInfoFodselPanel.Termin",values:{dato:h(r)}})]}),i&&n.jsx(u,{variant:"neutral",size:"small",title:s.formatMessage({id:"VisittkortBarnInfoFodselPanel.DodTittel"}),children:n.jsx(d,{id:"VisittkortBarnInfoFodselPanel.Dod"})})]})};P.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoFodselPanel",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""}}};const x=({familiehendelse:e})=>{const{hendelseType:s,hendelseDato:t,antallBarn:r}=e,a=s===f.ADOPSJON,i=r===1?"VisittkortBarnInfoOmsorgPanel.Foreldreansvar":"VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn",o=r===1?"VisittkortBarnInfoOmsorgPanel.Adopsjon":"VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn";return n.jsx(F,{children:n.jsx(d,{id:a?o:i,values:{antall:r,dato:k(t).format(E)}})})};x.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoOmsorgPanel",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""}}};const D=({familiehendelse:e})=>{const s=y(),t=n.jsx(_,{title:s.formatMessage({id:"VisittkortBarnInfoPanel.Barnevogn"}),height:24,width:24,color:"white",style:{backgroundColor:"var(--a-gray-400)",borderRadius:"50%",padding:"2px"}}),r=e.hendelseType===f.FODSEL||e.hendelseType===f.TERMIN;return n.jsxs(A,{icon:t,children:[r&&n.jsx(P,{familiehendelse:e}),!r&&n.jsx(x,{familiehendelse:e})]})};D.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoPanel",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""}}};const c=({fagsakPerson:e,harVergeIÅpenBehandling:s=!1})=>{const t=y(),r=k().diff(e.fødselsdato,"years")<18;return n.jsxs(n.Fragment,{children:[e.dødsdato&&n.jsx(g,{content:t.formatMessage({id:"VisittkortLabels.DodTittel"}),placement:"bottom",children:n.jsx(u,{variant:"neutral",size:"small",children:n.jsx(d,{id:"VisittkortLabels.Dod",values:{dato:h(e.dødsdato)}})})}),e.diskresjonskode===V.KODE6&&!e.dødsdato&&n.jsx(g,{content:t.formatMessage({id:"VisittkortLabels.Diskresjon6Tittel"}),placement:"bottom",children:n.jsx(u,{variant:"error",size:"small",children:n.jsx(d,{id:"VisittkortLabels.Diskresjon6"})})}),e.diskresjonskode===V.KODE7&&!e.dødsdato&&n.jsx(g,{content:t.formatMessage({id:"VisittkortLabels.Diskresjon7Tittel"}),placement:"bottom",children:n.jsx(u,{variant:"warning",size:"small",children:n.jsx(d,{id:"VisittkortLabels.Diskresjon7"})})}),s&&!e.dødsdato&&n.jsx(g,{content:t.formatMessage({id:"VisittkortLabels.VergeTittel"}),placement:"bottom",children:n.jsx(u,{variant:"info",size:"small",children:n.jsx(d,{id:"VisittkortLabels.Verge"})})}),r&&n.jsx(g,{content:t.formatMessage({id:"VisittkortLabels.Under18Tittel"}),placement:"bottom",children:n.jsx(u,{variant:"info",size:"small",children:n.jsx(d,{id:"VisittkortLabels.Under18"})})})]})};c.__docgenInfo={description:"",methods:[],displayName:"VisittkortLabels",props:{fagsakPerson:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`},description:""},harVergeIÅpenBehandling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const z="_container_1glvm_1",B={container:z},b=e=>e===I.KVINNE?j.female:e===I.MANN?j.male:j.unknown,O=({erMor:e,bruker:s,annenPart:t,familiehendelse:r,lenkeTilAnnenPart:a,harVergeIÅpenBehandling:i,erTilbakekreving:o})=>{const q=y();if(o&&i)return n.jsx("div",{className:B.container,children:n.jsx(v,{name:s.navn,fodselsnummer:s.fødselsnummer,gender:b(s.kjønn),renderLabelContent:()=>n.jsx(c,{fagsakPerson:s,harVergeIÅpenBehandling:i})})});const m=e||!t?s:t,l=!e&&t?s:t;return n.jsx("div",{className:B.container,children:n.jsxs(w,{wrap:!1,align:"center",children:[m.aktørId?n.jsx(v,{name:m.navn,fodselsnummer:m.fødselsnummer,gender:b(m.kjønn),url:a,renderLabelContent:()=>n.jsx(c,{fagsakPerson:m,harVergeIÅpenBehandling:i}),isActive:e}):n.jsx(T,{namePlaceholder:q.formatMessage({id:"VisittkortPanel.Ukjent"})}),l&&(l.aktørId?n.jsx(v,{name:l.navn,fodselsnummer:l.fødselsnummer,gender:b(l.kjønn),url:a,renderLabelContent:()=>n.jsx(c,{fagsakPerson:l}),isActive:!e}):n.jsx(T,{namePlaceholder:q.formatMessage({id:"VisittkortPanel.Ukjent"})})),r&&n.jsxs(n.Fragment,{children:[n.jsx(M,{}),n.jsx(D,{familiehendelse:r})]})]})})};O.__docgenInfo={description:"",methods:[],displayName:"VisittkortPanel",props:{erMor:{required:!0,tsType:{name:"boolean"},description:""},bruker:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`},description:""},annenPart:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`},description:""},familiehendelse:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""},lenkeTilAnnenPart:{required:!1,tsType:{name:"string"},description:""},harVergeIÅpenBehandling:{required:!0,tsType:{name:"boolean"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""}}};const C={"VisittkortLabels.Dod":"Død {dato}","VisittkortLabels.DodTittel":"Personen er død","VisittkortLabels.Diskresjon6":"Kode 6","VisittkortLabels.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","VisittkortLabels.Diskresjon7":"Kode 7","VisittkortLabels.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","VisittkortLabels.Verge":"Verge","VisittkortLabels.VergeTittel":"Personen har verge i en åpen behandling","VisittkortLabels.Under18Tittel":"Personen er under 18 år","VisittkortLabels.Under18":"Under 18","VisittkortBarnInfoFodselPanel.Dod":"Død","VisittkortBarnInfoFodselPanel.DodTittel":"Barnet er dødt","VisittkortBarnInfoFodselPanel.Termin":"Termin {dato}","VisittkortBarnInfoFodselPanel.Fodt":"Født {dato}","VisittkortBarnInfoFodselPanel.Tvillinger":"Tvillinger Født {dato}","VisittkortBarnInfoFodselPanel.Flerlinger":"Flerlinger Født {dato}","VisittkortBarnInfoFodselPanel.Ar.Fodt":" ({value} år)","VisittkortBarnInfoFodselPanel.Maned.Fodt":" ({value} mnd)","VisittkortBarnInfoFodselPanel.Dag.Fodt":" ({value} dag)","VisittkortBarnInfoFodselPanel.Dager.Fodt":" ({value} dager)","VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger":"Har ikke opplysninger om fødsel","VisittkortBarnInfoPanel.Barnevogn":"Barnevogn","VisittkortBarnInfoOmsorgPanel.Foreldreansvar":"Foreldreansvar {dato}","VisittkortBarnInfoOmsorgPanel.Adopsjon":"Adopsjon {dato}","VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn":"Foreldreansvar({antall} barn) {dato}","VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn":"Adopsjon({antall} barn) {dato}","VisittkortPanel.Ukjent":"Ukjent navn, mangler norsk id-nr"},J=S(C),G=({bruker:e,annenPart:s,familiehendelse:t,lenkeTilAnnenPart:r,erMor:a=!0,harVergeIÅpenBehandling:i=!1,erTilbakekreving:o=!1})=>n.jsx(L,{value:J,children:n.jsx(O,{erMor:a,bruker:e,annenPart:s,familiehendelse:t,lenkeTilAnnenPart:r,harVergeIÅpenBehandling:i,erTilbakekreving:o})});G.__docgenInfo={description:"",methods:[],displayName:"VisittkortSakIndex",props:{erMor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bruker:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`},description:""},annenPart:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`},description:""},familiehendelse:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""},lenkeTilAnnenPart:{required:!1,tsType:{name:"string"},description:""},harVergeIÅpenBehandling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{f as F,I as N,_ as S,G as V};
