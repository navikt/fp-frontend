import{r as P,h as c,l as p,j as e,o as v,A as g,P as N,b as x}from"./iframe-BDTafQCk.js";import{R as D,G as y,U as q,p as j}from"./index.es-DKwcL2UN.js";import{u as O,B as T,H as S}from"./VStack-CXSNKu_q.js";import{M as i}from"./message-CwGodI8N.js";import{T as u}from"./index-DYpX_BBl.js";import{T as k}from"./index.es-BX2L31WV.js";import{S as M}from"./Spacer-D_zrEia6.js";var w=function(n,t){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(a[r[s]]=n[r[s]]);return a};const L=P.forwardRef((n,t)=>{var{title:a,titleId:r}=n,s=w(n,["title","titleId"]);let l=O();return l=a?r||"title-"+l:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":l},s),a?c.createElement("title",{id:l},a):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.47 2.97a.75.75 0 0 1 .53-.22c2.018 0 3.74.242 4.95 1.15 1.269.952 1.8 2.486 1.8 4.6V9c0 1.557-.255 2.997-1.015 4.06-.796 1.115-2.05 1.69-3.735 1.69h-6c-1.685 0-2.94-.575-3.735-1.69C5.505 11.998 5.25 10.558 5.25 9V6.5A1.75 1.75 0 0 0 3.5 4.75a.75.75 0 0 1 0-1.5A3.25 3.25 0 0 1 6.75 6.5v.75h6.5V3.5a.75.75 0 0 1 .22-.53M14.75 8a.75.75 0 0 1-.75.75H6.75V9c0 1.443.245 2.503.735 3.19.454.635 1.2 1.06 2.515 1.06h6c1.315 0 2.06-.425 2.515-1.06.49-.687.735-1.747.735-3.19v-.5c0-1.886-.469-2.852-1.2-3.4-.685-.514-1.739-.776-3.3-.836zM9.5 17.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M6.75 18.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m9.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0",clipRule:"evenodd"}))}),A=n=>n===1?"VisittkortBarnInfoFodselPanel.Fodt":n===2?"VisittkortBarnInfoFodselPanel.Tvillinger":"VisittkortBarnInfoFodselPanel.Flerlinger",E=n=>{const t=g().diff(n,"years"),a=g().diff(n,"months"),r=g().diff(n,"days");if(t<0||a<0||r<0)throw new Error("Fødselsdato kan ikke være i fremtiden");let s;return t>0?s="VisittkortBarnInfoFodselPanel.Ar.Fodt":a>0?s="VisittkortBarnInfoFodselPanel.Maned.Fodt":r>=0&&(r===1&&(s="VisittkortBarnInfoFodselPanel.Dag.Fodt"),(r===0||r>1)&&(s="VisittkortBarnInfoFodselPanel.Dager.Fodt")),{id:s,values:{value:t||a||r}}},B=({familiehendelse:n})=>{const t=p(),{hendelseType:a,hendelseDato:r,antallBarn:s,dødfødsel:l}=n,d=a==="FODSL";return e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:[d&&!!r&&s>0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{id:A(s),values:{dato:v(r)}}),!l&&e.jsx(i,{...E(r)})]}),d&&(!r||s===0)&&e.jsx(i,{id:"VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger"}),!d&&e.jsx(i,{id:"VisittkortBarnInfoFodselPanel.Termin",values:{dato:r?v(r):"-"}})]}),l&&e.jsx(u,{variant:"neutral",size:"small",title:t.formatMessage({id:"VisittkortBarnInfoFodselPanel.DodTittel"}),children:e.jsx(i,{id:"VisittkortBarnInfoFodselPanel.Dod"})})]})};B.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoFodselPanel",props:{familiehendelse:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  dødfødsel: boolean;
  hendelseDato?: string;
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""}}};const F=({familiehendelse:n})=>{const{hendelseType:t,hendelseDato:a,antallBarn:r}=n,s=t==="ADPSJN",l=r===1?"VisittkortBarnInfoOmsorgPanel.Foreldreansvar":"VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn",d=r===1?"VisittkortBarnInfoOmsorgPanel.Adopsjon":"VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn";return e.jsx(T,{children:e.jsx(i,{id:s?d:l,values:{antall:r,dato:a?v(a):"-"}})})};F.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoOmsorgPanel",props:{familiehendelse:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  dødfødsel: boolean;
  hendelseDato?: string;
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""}}};const _=({familiehendelse:n})=>{const t=p(),a=e.jsx(L,{title:t.formatMessage({id:"VisittkortBarnInfoPanel.Barnevogn"}),height:24,width:24,color:"white",style:{backgroundColor:"var(--ax-neutral-500)",borderRadius:"50%",padding:"2px"}}),r=n.hendelseType==="FODSL"||n.hendelseType==="TERM";return e.jsxs(D,{icon:a,children:[r&&e.jsx(B,{familiehendelse:n}),!r&&e.jsx(F,{familiehendelse:n})]})};_.__docgenInfo={description:"",methods:[],displayName:"VisittkortBarnInfoPanel",props:{familiehendelse:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  dødfødsel: boolean;
  hendelseDato?: string;
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""}}};const f=({fagsakPerson:n,harVergeIÅpenBehandling:t=!1})=>{const a=p(),r=g().diff(n.fødselsdato,"years")<18;return e.jsxs(e.Fragment,{children:[n.dødsdato&&e.jsx(k,{content:a.formatMessage({id:"VisittkortLabels.DodTittel"}),placement:"bottom",children:e.jsx(u,{variant:"neutral",size:"small",children:e.jsx(i,{id:"VisittkortLabels.Dod",values:{dato:v(n.dødsdato)}})})}),n.diskresjonskode==="SPSF"&&!n.dødsdato&&e.jsx(k,{content:a.formatMessage({id:"VisittkortLabels.Diskresjon6Tittel"}),placement:"bottom",children:e.jsx(u,{variant:"error",size:"small",children:e.jsx(i,{id:"VisittkortLabels.Diskresjon6"})})}),n.diskresjonskode==="SPFO"&&!n.dødsdato&&e.jsx(k,{content:a.formatMessage({id:"VisittkortLabels.Diskresjon7Tittel"}),placement:"bottom",children:e.jsx(u,{variant:"warning",size:"small",children:e.jsx(i,{id:"VisittkortLabels.Diskresjon7"})})}),t&&!n.dødsdato&&e.jsx(k,{content:a.formatMessage({id:"VisittkortLabels.VergeTittel"}),placement:"bottom",children:e.jsx(u,{variant:"info",size:"small",children:e.jsx(i,{id:"VisittkortLabels.Verge"})})}),r&&e.jsx(k,{content:a.formatMessage({id:"VisittkortLabels.Under18Tittel"}),placement:"bottom",children:e.jsx(u,{variant:"info",size:"small",children:e.jsx(i,{id:"VisittkortLabels.Under18"})})})]})};f.__docgenInfo={description:"",methods:[],displayName:"VisittkortLabels",props:{fagsakPerson:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},harVergeIÅpenBehandling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const R="_container_15his_1",V={container:R},h=n=>n==="K"?j.female:n==="M"?j.male:j.unknown,I=({erMor:n,bruker:t,annenPart:a,familiehendelse:r,lenkeTilAnnenPart:s,harVergeIÅpenBehandling:l,erTilbakekreving:d})=>{const b=p();if(d&&l)return e.jsx("div",{className:V.container,children:e.jsx(y,{name:t.navn,fodselsnummer:t.fødselsnummer,gender:h(t.kjønn),renderLabelContent:()=>e.jsx(f,{fagsakPerson:t,harVergeIÅpenBehandling:l})})});const m=n||!a?t:a,o=!n&&a?t:a;return e.jsx("div",{className:V.container,children:e.jsxs(S,{wrap:!1,align:"center",children:[m.aktørId?e.jsx(y,{name:m.navn,fodselsnummer:m.fødselsnummer,gender:h(m.kjønn),url:s,renderLabelContent:()=>e.jsx(f,{fagsakPerson:m,harVergeIÅpenBehandling:l}),isActive:n}):e.jsx(q,{namePlaceholder:b.formatMessage({id:"VisittkortPanel.Ukjent"})}),o&&(o.aktørId?e.jsx(y,{name:o.navn,fodselsnummer:o.fødselsnummer,gender:h(o.kjønn),url:s,renderLabelContent:()=>e.jsx(f,{fagsakPerson:o}),isActive:!n}):e.jsx(q,{namePlaceholder:b.formatMessage({id:"VisittkortPanel.Ukjent"})})),r&&e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsx(_,{familiehendelse:r})]})]})})};I.__docgenInfo={description:"",methods:[],displayName:"VisittkortPanel",props:{erMor:{required:!0,tsType:{name:"boolean"},description:""},bruker:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},annenPart:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},familiehendelse:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  dødfødsel: boolean;
  hendelseDato?: string;
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},lenkeTilAnnenPart:{required:!1,tsType:{name:"string"},description:""},harVergeIÅpenBehandling:{required:!0,tsType:{name:"boolean"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""}}};const K={"VisittkortLabels.Dod":"Død {dato}","VisittkortLabels.DodTittel":"Personen er død","VisittkortLabels.Diskresjon6":"Kode 6","VisittkortLabels.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","VisittkortLabels.Diskresjon7":"Kode 7","VisittkortLabels.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","VisittkortLabels.Verge":"Verge","VisittkortLabels.VergeTittel":"Personen har verge i en åpen behandling","VisittkortLabels.Under18Tittel":"Personen er under 18 år","VisittkortLabels.Under18":"Under 18","VisittkortBarnInfoFodselPanel.Dod":"Død","VisittkortBarnInfoFodselPanel.DodTittel":"Barnet er dødt","VisittkortBarnInfoFodselPanel.Termin":"Termin {dato}","VisittkortBarnInfoFodselPanel.Fodt":"Født {dato}","VisittkortBarnInfoFodselPanel.Tvillinger":"Tvillinger Født {dato}","VisittkortBarnInfoFodselPanel.Flerlinger":"Flerlinger Født {dato}","VisittkortBarnInfoFodselPanel.Ar.Fodt":" ({value} år)","VisittkortBarnInfoFodselPanel.Maned.Fodt":" ({value} mnd)","VisittkortBarnInfoFodselPanel.Dag.Fodt":" ({value} dag)","VisittkortBarnInfoFodselPanel.Dager.Fodt":" ({value} dager)","VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger":"Har ikke opplysninger om fødsel","VisittkortBarnInfoPanel.Barnevogn":"Barnevogn","VisittkortBarnInfoOmsorgPanel.Foreldreansvar":"Foreldreansvar {dato}","VisittkortBarnInfoOmsorgPanel.Adopsjon":"Adopsjon {dato}","VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn":"Foreldreansvar({antall} barn) {dato}","VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn":"Adopsjon({antall} barn) {dato}","VisittkortPanel.Ukjent":"Ukjent navn, mangler norsk id-nr"},G=x(K),U=({bruker:n,annenPart:t,familiehendelse:a,lenkeTilAnnenPart:r,erMor:s=!0,harVergeIÅpenBehandling:l=!1,erTilbakekreving:d=!1})=>e.jsx(N,{value:G,children:e.jsx(I,{erMor:s,bruker:n,annenPart:t,familiehendelse:a,lenkeTilAnnenPart:r,harVergeIÅpenBehandling:l,erTilbakekreving:d})});U.__docgenInfo={description:"",methods:[],displayName:"VisittkortSakIndex",props:{erMor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bruker:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},annenPart:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},familiehendelse:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  dødfødsel: boolean;
  hendelseDato?: string;
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}}]}},description:""},lenkeTilAnnenPart:{required:!1,tsType:{name:"string"},description:""},harVergeIÅpenBehandling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{L as S,U as V};
