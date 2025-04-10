import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{l as E,u as v,g as F,f as O,P as R}from"./withPanelData-By7cixEs.js";import{F as c,f as L}from"./index.es-BjnQgVg3.js";import{Z as K,d as j,h as T,I as b}from"./index.es-fS6WphWI.js";import{d as p}from"./dayjs.min-Cke173X9.js";import{M as i}from"./message-BEJMsbxv.js";import{T as u}from"./Tag-7F_mc88V.js";import{r as f}from"./index-Dxs5m6lS.js";import{T as k}from"./Tooltip-DTkJXx-t.js";import{S}from"./Spacer-fHONJtHA.js";var A=function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)s.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const M=f.forwardRef((e,s)=>{var{title:t,titleId:r}=e,a=A(e,["title","titleId"]);let l=E();return l=t?r||"title-"+l:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":l},a),t?f.createElement("title",{id:l},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.47 2.97a.75.75 0 0 1 .53-.22c2.018 0 3.74.242 4.95 1.15 1.269.952 1.8 2.486 1.8 4.6V9c0 1.557-.255 2.997-1.015 4.06-.796 1.115-2.05 1.69-3.735 1.69h-6c-1.685 0-2.94-.575-3.735-1.69C5.505 11.998 5.25 10.558 5.25 9V6.5A1.75 1.75 0 0 0 3.5 4.75a.75.75 0 0 1 0-1.5A3.25 3.25 0 0 1 6.75 6.5v.75h6.5V3.5a.75.75 0 0 1 .22-.53M14.75 8a.75.75 0 0 1-.75.75H6.75V9c0 1.443.245 2.503.735 3.19.454.635 1.2 1.06 2.515 1.06h6c1.315 0 2.06-.425 2.515-1.06.49-.687.735-1.747.735-3.19v-.5c0-1.886-.469-2.852-1.2-3.4-.685-.514-1.739-.776-3.3-.836zM9.5 17.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M6.75 18.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m9.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0",clipRule:"evenodd"}))});var I=(e=>(e.KODE6="SPSF",e.KODE7="SPFO",e.KLIENT_ADRESSE="KLIE",e.MILITAR="MILI",e.PENDLER="PEND",e.SVALBARD="SVAL",e.UTEN_FAST_BO="UFB",e.UTENRIKS_TJENST="URIK",e.UDEFINERT="UDEF",e))(I||{}),g=(e=>(e.ADOPSJON="ADPSJN",e.OMSORG="OMSRGO",e.FODSEL="FODSL",e.TERMIN="TERM",e))(g||{}),V=(e=>(e.KVINNE="K",e.MANN="M",e.UDEFINERT="-",e))(V||{});const N=e=>e===1?"VisittkortBarnInfoFodselPanel.Fodt":e===2?"VisittkortBarnInfoFodselPanel.Tvillinger":"VisittkortBarnInfoFodselPanel.Flerlinger",_=e=>{const s=p().diff(e,"years"),t=p().diff(e,"months"),r=p().diff(e,"days");if(s<0||t<0||r<0)throw new Error("Fødselsdato kan ikke være i fremtiden");let a;return s>0?a="VisittkortBarnInfoFodselPanel.Ar.Fodt":t>0?a="VisittkortBarnInfoFodselPanel.Maned.Fodt":r>=0&&(r===1&&(a="VisittkortBarnInfoFodselPanel.Dag.Fodt"),(r===0||r>1)&&(a="VisittkortBarnInfoFodselPanel.Dager.Fodt")),{id:a,values:{value:s||t||r}}},w=({familiehendelse:e})=>{const s=v(),{hendelseType:t,hendelseDato:r,antallBarn:a,dødfødsel:l}=e,o=t===g.FODSEL;return n.jsxs(n.Fragment,{children:[n.jsxs(F,{children:[o&&!!r&&a>0&&n.jsxs(n.Fragment,{children:[n.jsx(i,{id:N(a),values:{dato:c(r)}}),!l&&n.jsx(i,{..._(r)})]}),o&&(!r||a===0)&&n.jsx(i,{id:"VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger"}),!o&&n.jsx(i,{id:"VisittkortBarnInfoFodselPanel.Termin",values:{dato:r?c(r):"-"}})]}),l&&n.jsx(u,{variant:"neutral",size:"small",title:s.formatMessage({id:"VisittkortBarnInfoFodselPanel.DodTittel"}),children:n.jsx(i,{id:"VisittkortBarnInfoFodselPanel.Dod"})})]})};w.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoFodselPanel",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""}}};const P=({familiehendelse:e})=>{const{hendelseType:s,hendelseDato:t,antallBarn:r}=e,a=s===g.ADOPSJON,l=r===1?"VisittkortBarnInfoOmsorgPanel.Foreldreansvar":"VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn",o=r===1?"VisittkortBarnInfoOmsorgPanel.Adopsjon":"VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn";return n.jsx(F,{children:n.jsx(i,{id:a?o:l,values:{antall:r,dato:t?c(t):"-"}})})};P.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoOmsorgPanel",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""}}};const x=({familiehendelse:e})=>{const s=v(),t=n.jsx(M,{title:s.formatMessage({id:"VisittkortBarnInfoPanel.Barnevogn"}),height:24,width:24,color:"white",style:{backgroundColor:"var(--a-gray-400)",borderRadius:"50%",padding:"2px"}}),r=e.hendelseType===g.FODSEL||e.hendelseType===g.TERMIN;return n.jsxs(K,{icon:t,children:[r&&n.jsx(w,{familiehendelse:e}),!r&&n.jsx(P,{familiehendelse:e})]})};x.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoPanel",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""}}};const y=({fagsakPerson:e,harVergeIÅpenBehandling:s=!1})=>{const t=v(),r=p().diff(e.fødselsdato,"years")<18;return n.jsxs(n.Fragment,{children:[e.dødsdato&&n.jsx(k,{content:t.formatMessage({id:"VisittkortLabels.DodTittel"}),placement:"bottom",children:n.jsx(u,{variant:"neutral",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Dod",values:{dato:c(e.dødsdato)}})})}),e.diskresjonskode===I.KODE6&&!e.dødsdato&&n.jsx(k,{content:t.formatMessage({id:"VisittkortLabels.Diskresjon6Tittel"}),placement:"bottom",children:n.jsx(u,{variant:"error",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Diskresjon6"})})}),e.diskresjonskode===I.KODE7&&!e.dødsdato&&n.jsx(k,{content:t.formatMessage({id:"VisittkortLabels.Diskresjon7Tittel"}),placement:"bottom",children:n.jsx(u,{variant:"warning",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Diskresjon7"})})}),s&&!e.dødsdato&&n.jsx(k,{content:t.formatMessage({id:"VisittkortLabels.VergeTittel"}),placement:"bottom",children:n.jsx(u,{variant:"info",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Verge"})})}),r&&n.jsx(k,{content:t.formatMessage({id:"VisittkortLabels.Under18Tittel"}),placement:"bottom",children:n.jsx(u,{variant:"info",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Under18"})})})]})};y.__docgenInfo={description:"",methods:[],displayName:"VisittkortLabels",props:{fagsakPerson:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},harVergeIÅpenBehandling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const U="_container_1glvm_1",B={container:U},h=e=>e===V.KVINNE?b.female:e===V.MANN?b.male:b.unknown,D=({erMor:e,bruker:s,annenPart:t,familiehendelse:r,lenkeTilAnnenPart:a,harVergeIÅpenBehandling:l,erTilbakekreving:o})=>{const q=v();if(o&&l)return n.jsx("div",{className:B.container,children:n.jsx(j,{name:s.navn,fodselsnummer:s.fødselsnummer,gender:h(s.kjønn),renderLabelContent:()=>n.jsx(y,{fagsakPerson:s,harVergeIÅpenBehandling:l})})});const m=e||!t?s:t,d=!e&&t?s:t;return n.jsx("div",{className:B.container,children:n.jsxs(O,{wrap:!1,align:"center",children:[m.aktørId?n.jsx(j,{name:m.navn,fodselsnummer:m.fødselsnummer,gender:h(m.kjønn),url:a,renderLabelContent:()=>n.jsx(y,{fagsakPerson:m,harVergeIÅpenBehandling:l}),isActive:e}):n.jsx(T,{namePlaceholder:q.formatMessage({id:"VisittkortPanel.Ukjent"})}),d&&(d.aktørId?n.jsx(j,{name:d.navn,fodselsnummer:d.fødselsnummer,gender:h(d.kjønn),url:a,renderLabelContent:()=>n.jsx(y,{fagsakPerson:d}),isActive:!e}):n.jsx(T,{namePlaceholder:q.formatMessage({id:"VisittkortPanel.Ukjent"})})),r&&n.jsxs(n.Fragment,{children:[n.jsx(S,{}),n.jsx(x,{familiehendelse:r})]})]})})};D.__docgenInfo={description:"",methods:[],displayName:"VisittkortPanel",props:{erMor:{required:!0,tsType:{name:"boolean"},description:""},bruker:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},annenPart:{required:!0,tsType:{name:"union",raw:"Person | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}]},description:""},familiehendelse:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""},lenkeTilAnnenPart:{required:!1,tsType:{name:"string"},description:""},harVergeIÅpenBehandling:{required:!0,tsType:{name:"boolean"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""}}};const z={"VisittkortLabels.Dod":"Død {dato}","VisittkortLabels.DodTittel":"Personen er død","VisittkortLabels.Diskresjon6":"Kode 6","VisittkortLabels.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","VisittkortLabels.Diskresjon7":"Kode 7","VisittkortLabels.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","VisittkortLabels.Verge":"Verge","VisittkortLabels.VergeTittel":"Personen har verge i en åpen behandling","VisittkortLabels.Under18Tittel":"Personen er under 18 år","VisittkortLabels.Under18":"Under 18","VisittkortBarnInfoFodselPanel.Dod":"Død","VisittkortBarnInfoFodselPanel.DodTittel":"Barnet er dødt","VisittkortBarnInfoFodselPanel.Termin":"Termin {dato}","VisittkortBarnInfoFodselPanel.Fodt":"Født {dato}","VisittkortBarnInfoFodselPanel.Tvillinger":"Tvillinger Født {dato}","VisittkortBarnInfoFodselPanel.Flerlinger":"Flerlinger Født {dato}","VisittkortBarnInfoFodselPanel.Ar.Fodt":" ({value} år)","VisittkortBarnInfoFodselPanel.Maned.Fodt":" ({value} mnd)","VisittkortBarnInfoFodselPanel.Dag.Fodt":" ({value} dag)","VisittkortBarnInfoFodselPanel.Dager.Fodt":" ({value} dager)","VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger":"Har ikke opplysninger om fødsel","VisittkortBarnInfoPanel.Barnevogn":"Barnevogn","VisittkortBarnInfoOmsorgPanel.Foreldreansvar":"Foreldreansvar {dato}","VisittkortBarnInfoOmsorgPanel.Adopsjon":"Adopsjon {dato}","VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn":"Foreldreansvar({antall} barn) {dato}","VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn":"Adopsjon({antall} barn) {dato}","VisittkortPanel.Ukjent":"Ukjent navn, mangler norsk id-nr"},C=L(z),J=({bruker:e,annenPart:s=null,familiehendelse:t,lenkeTilAnnenPart:r,erMor:a=!0,harVergeIÅpenBehandling:l=!1,erTilbakekreving:o=!1})=>n.jsx(R,{value:C,children:n.jsx(D,{erMor:a,bruker:e,annenPart:s,familiehendelse:t,lenkeTilAnnenPart:r,harVergeIÅpenBehandling:l,erTilbakekreving:o})});J.__docgenInfo={description:"",methods:[],displayName:"VisittkortSakIndex",props:{erMor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bruker:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},annenPart:{required:!1,tsType:{name:"union",raw:"Person | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},familiehendelse:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""},lenkeTilAnnenPart:{required:!1,tsType:{name:"string"},description:""},harVergeIÅpenBehandling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{g as F,V as N,M as S,J as V};
