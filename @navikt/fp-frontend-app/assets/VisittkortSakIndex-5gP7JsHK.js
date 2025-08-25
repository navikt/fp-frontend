import{r as f,l as y,j as n,o as c,B as v,P as E,b as D}from"./iframe-DJGNZoZ6.js";import{d as M,Z as j,Y as q,v as b}from"./index.es-H3DKP3E_.js";import{u as O,B as T,H as L}from"./VStack-DP7hrVrJ.js";import{M as i}from"./message-B9fo_cy0.js";import{T as u}from"./Tag-CpsXs_w5.js";import{T as k}from"./index.es-D1YnVz4v.js";import{S}from"./Spacer-CFZDP6_v.js";var N=(e=>(e.KODE6="SPSF",e.KODE7="SPFO",e.KLIENT_ADRESSE="KLIE",e.MILITAR="MILI",e.PENDLER="PEND",e.SVALBARD="SVAL",e.UTEN_FAST_BO="UFB",e.UTENRIKS_TJENST="URIK",e.UDEFINERT="UDEF",e))(N||{}),g=(e=>(e.ADOPSJON="ADPSJN",e.OMSORG="OMSRGO",e.FODSEL="FODSL",e.TERMIN="TERM",e))(g||{}),V=(e=>(e.KVINNE="K",e.MANN="M",e.UDEFINERT="-",e))(V||{}),A=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)a.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const R=f.forwardRef((e,a)=>{var{title:t,titleId:r}=e,s=A(e,["title","titleId"]);let l=O();return l=t?r||"title-"+l:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":l},s),t?f.createElement("title",{id:l},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.47 2.97a.75.75 0 0 1 .53-.22c2.018 0 3.74.242 4.95 1.15 1.269.952 1.8 2.486 1.8 4.6V9c0 1.557-.255 2.997-1.015 4.06-.796 1.115-2.05 1.69-3.735 1.69h-6c-1.685 0-2.94-.575-3.735-1.69C5.505 11.998 5.25 10.558 5.25 9V6.5A1.75 1.75 0 0 0 3.5 4.75a.75.75 0 0 1 0-1.5A3.25 3.25 0 0 1 6.75 6.5v.75h6.5V3.5a.75.75 0 0 1 .22-.53M14.75 8a.75.75 0 0 1-.75.75H6.75V9c0 1.443.245 2.503.735 3.19.454.635 1.2 1.06 2.515 1.06h6c1.315 0 2.06-.425 2.515-1.06.49-.687.735-1.747.735-3.19v-.5c0-1.886-.469-2.852-1.2-3.4-.685-.514-1.739-.776-3.3-.836zM9.5 17.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M6.75 18.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m9.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0",clipRule:"evenodd"}))}),K=e=>e===1?"VisittkortBarnInfoFodselPanel.Fodt":e===2?"VisittkortBarnInfoFodselPanel.Tvillinger":"VisittkortBarnInfoFodselPanel.Flerlinger",_=e=>{const a=v().diff(e,"years"),t=v().diff(e,"months"),r=v().diff(e,"days");if(a<0||t<0||r<0)throw new Error("Fødselsdato kan ikke være i fremtiden");let s;return a>0?s="VisittkortBarnInfoFodselPanel.Ar.Fodt":t>0?s="VisittkortBarnInfoFodselPanel.Maned.Fodt":r>=0&&(r===1&&(s="VisittkortBarnInfoFodselPanel.Dag.Fodt"),(r===0||r>1)&&(s="VisittkortBarnInfoFodselPanel.Dager.Fodt")),{id:s,values:{value:a||t||r}}},F=({familiehendelse:e})=>{const a=y(),{hendelseType:t,hendelseDato:r,antallBarn:s,dødfødsel:l}=e,o=t===g.FODSEL;return n.jsxs(n.Fragment,{children:[n.jsxs(T,{children:[o&&!!r&&s>0&&n.jsxs(n.Fragment,{children:[n.jsx(i,{id:K(s),values:{dato:c(r)}}),!l&&n.jsx(i,{..._(r)})]}),o&&(!r||s===0)&&n.jsx(i,{id:"VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger"}),!o&&n.jsx(i,{id:"VisittkortBarnInfoFodselPanel.Termin",values:{dato:r?c(r):"-"}})]}),l&&n.jsx(u,{variant:"neutral",size:"small",title:a.formatMessage({id:"VisittkortBarnInfoFodselPanel.DodTittel"}),children:n.jsx(i,{id:"VisittkortBarnInfoFodselPanel.Dod"})})]})};F.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoFodselPanel",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""}}};const P=({familiehendelse:e})=>{const{hendelseType:a,hendelseDato:t,antallBarn:r}=e,s=a===g.ADOPSJON,l=r===1?"VisittkortBarnInfoOmsorgPanel.Foreldreansvar":"VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn",o=r===1?"VisittkortBarnInfoOmsorgPanel.Adopsjon":"VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn";return n.jsx(T,{children:n.jsx(i,{id:s?o:l,values:{antall:r,dato:t?c(t):"-"}})})};P.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoOmsorgPanel",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""}}};const w=({familiehendelse:e})=>{const a=y(),t=n.jsx(R,{title:a.formatMessage({id:"VisittkortBarnInfoPanel.Barnevogn"}),height:24,width:24,color:"white",style:{backgroundColor:"var(--ax-neutral-500)",borderRadius:"50%",padding:"2px"}}),r=e.hendelseType===g.FODSEL||e.hendelseType===g.TERMIN;return n.jsxs(M,{icon:t,children:[r&&n.jsx(F,{familiehendelse:e}),!r&&n.jsx(P,{familiehendelse:e})]})};w.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoPanel",props:{familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""}}};const p=({fagsakPerson:e,harVergeIÅpenBehandling:a=!1})=>{const t=y(),r=v().diff(e.fødselsdato,"years")<18;return n.jsxs(n.Fragment,{children:[e.dødsdato&&n.jsx(k,{content:t.formatMessage({id:"VisittkortLabels.DodTittel"}),placement:"bottom",children:n.jsx(u,{variant:"neutral",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Dod",values:{dato:c(e.dødsdato)}})})}),e.diskresjonskode===N.KODE6&&!e.dødsdato&&n.jsx(k,{content:t.formatMessage({id:"VisittkortLabels.Diskresjon6Tittel"}),placement:"bottom",children:n.jsx(u,{variant:"error",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Diskresjon6"})})}),e.diskresjonskode===N.KODE7&&!e.dødsdato&&n.jsx(k,{content:t.formatMessage({id:"VisittkortLabels.Diskresjon7Tittel"}),placement:"bottom",children:n.jsx(u,{variant:"warning",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Diskresjon7"})})}),a&&!e.dødsdato&&n.jsx(k,{content:t.formatMessage({id:"VisittkortLabels.VergeTittel"}),placement:"bottom",children:n.jsx(u,{variant:"info",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Verge"})})}),r&&n.jsx(k,{content:t.formatMessage({id:"VisittkortLabels.Under18Tittel"}),placement:"bottom",children:n.jsx(u,{variant:"info",size:"small",children:n.jsx(i,{id:"VisittkortLabels.Under18"})})})]})};p.__docgenInfo={description:"",methods:[],displayName:"VisittkortLabels",props:{fagsakPerson:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},harVergeIÅpenBehandling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const U="_container_15his_1",I={container:U},h=e=>e===V.KVINNE?b.female:e===V.MANN?b.male:b.unknown,x=({erMor:e,bruker:a,annenPart:t,familiehendelse:r,lenkeTilAnnenPart:s,harVergeIÅpenBehandling:l,erTilbakekreving:o})=>{const B=y();if(o&&l)return n.jsx("div",{className:I.container,children:n.jsx(j,{name:a.navn,fodselsnummer:a.fødselsnummer,gender:h(a.kjønn),renderLabelContent:()=>n.jsx(p,{fagsakPerson:a,harVergeIÅpenBehandling:l})})});const m=e||!t?a:t,d=!e&&t?a:t;return n.jsx("div",{className:I.container,children:n.jsxs(L,{wrap:!1,align:"center",children:[m.aktørId?n.jsx(j,{name:m.navn,fodselsnummer:m.fødselsnummer,gender:h(m.kjønn),url:s,renderLabelContent:()=>n.jsx(p,{fagsakPerson:m,harVergeIÅpenBehandling:l}),isActive:e}):n.jsx(q,{namePlaceholder:B.formatMessage({id:"VisittkortPanel.Ukjent"})}),d&&(d.aktørId?n.jsx(j,{name:d.navn,fodselsnummer:d.fødselsnummer,gender:h(d.kjønn),url:s,renderLabelContent:()=>n.jsx(p,{fagsakPerson:d}),isActive:!e}):n.jsx(q,{namePlaceholder:B.formatMessage({id:"VisittkortPanel.Ukjent"})})),r&&n.jsxs(n.Fragment,{children:[n.jsx(S,{}),n.jsx(w,{familiehendelse:r})]})]})})};x.__docgenInfo={description:"",methods:[],displayName:"VisittkortPanel",props:{erMor:{required:!0,tsType:{name:"boolean"},description:""},bruker:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},annenPart:{required:!0,tsType:{name:"union",raw:"Person | null",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},{name:"null"}]},description:""},familiehendelse:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""},lenkeTilAnnenPart:{required:!1,tsType:{name:"string"},description:""},harVergeIÅpenBehandling:{required:!0,tsType:{name:"boolean"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""}}};const z={"VisittkortLabels.Dod":"Død {dato}","VisittkortLabels.DodTittel":"Personen er død","VisittkortLabels.Diskresjon6":"Kode 6","VisittkortLabels.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","VisittkortLabels.Diskresjon7":"Kode 7","VisittkortLabels.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","VisittkortLabels.Verge":"Verge","VisittkortLabels.VergeTittel":"Personen har verge i en åpen behandling","VisittkortLabels.Under18Tittel":"Personen er under 18 år","VisittkortLabels.Under18":"Under 18","VisittkortBarnInfoFodselPanel.Dod":"Død","VisittkortBarnInfoFodselPanel.DodTittel":"Barnet er dødt","VisittkortBarnInfoFodselPanel.Termin":"Termin {dato}","VisittkortBarnInfoFodselPanel.Fodt":"Født {dato}","VisittkortBarnInfoFodselPanel.Tvillinger":"Tvillinger Født {dato}","VisittkortBarnInfoFodselPanel.Flerlinger":"Flerlinger Født {dato}","VisittkortBarnInfoFodselPanel.Ar.Fodt":" ({value} år)","VisittkortBarnInfoFodselPanel.Maned.Fodt":" ({value} mnd)","VisittkortBarnInfoFodselPanel.Dag.Fodt":" ({value} dag)","VisittkortBarnInfoFodselPanel.Dager.Fodt":" ({value} dager)","VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger":"Har ikke opplysninger om fødsel","VisittkortBarnInfoPanel.Barnevogn":"Barnevogn","VisittkortBarnInfoOmsorgPanel.Foreldreansvar":"Foreldreansvar {dato}","VisittkortBarnInfoOmsorgPanel.Adopsjon":"Adopsjon {dato}","VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn":"Foreldreansvar({antall} barn) {dato}","VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn":"Adopsjon({antall} barn) {dato}","VisittkortPanel.Ukjent":"Ukjent navn, mangler norsk id-nr"},C=D(z),J=({bruker:e,annenPart:a=null,familiehendelse:t,lenkeTilAnnenPart:r,erMor:s=!0,harVergeIÅpenBehandling:l=!1,erTilbakekreving:o=!1})=>n.jsx(E,{value:C,children:n.jsx(x,{erMor:s,bruker:e,annenPart:a,familiehendelse:t,lenkeTilAnnenPart:r,harVergeIÅpenBehandling:l,erTilbakekreving:o})});J.__docgenInfo={description:"",methods:[],displayName:"VisittkortSakIndex",props:{erMor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bruker:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},annenPart:{required:!1,tsType:{name:"union",raw:"Person | null",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: 'K' | 'M' | '-';
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: 'NB' | 'NN' | 'EN' | '-';
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},familiehendelse:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`},description:""},lenkeTilAnnenPart:{required:!1,tsType:{name:"string"},description:""},harVergeIÅpenBehandling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{g as F,V as N,R as S,J as V};
