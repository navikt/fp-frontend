import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as y}from"./index-DjhIdADd.js";import{a as D,u as N,n as A,b as ge}from"./initFetch-D3LZ5Ei1.js";import{A as w}from"./aksjonspunktStatus-xM4O_ZUY.js";import{f as de,g as b,ak as z,ag as ke,d as I,B as C,n as me,L as j,h as ye,k as P,H as V,P as pe,J as Y,u as $}from"./withPanelData-ByNS2pOS.js";import{K as Q}from"./alleKodeverk-BFmIlMu4.js";import{j as ve,i as fe,M as f,a as h,r as be,c as ce,L as he,d as qe,B as J,n as je}from"./index.es-BvCsXNBl.js";import{a as Re,e as Te,K as Ne,b as T,o as Ae,c as we,N as Ie,J as U,E as Ee}from"./index.es-CCAXsuwR.js";import{A as Be}from"./aksjonspunktCodes-BLM-Fgv6.js";import{S as Oe}from"./CheckmarkCircleFill-D6vFqTxW.js";import{l as E}from"./paths-Bb4JS-8l.js";import{u as xe}from"./useTrackRouteParam-CcKIsdn1.js";import{F as B}from"./fagsakStatus-NXwGwLtb.js";import{u as Pe}from"./useBehandlingPollingOperasjoner-CAIrmvuB.js";var Ve=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Fe=u.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=Ve(e,["title","titleId"]);let i=de();return i=t?n||"title-"+i:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},r),t?u.createElement("title",{id:i},t):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.25 4A.75.75 0 0 1 6 3.25h12a.75.75 0 0 1 0 1.5h-.298c-.109 1.966-.643 3.846-1.546 5.302-.503.81-1.116 1.479-1.81 1.948.694.47 1.307 1.138 1.81 1.948.904 1.456 1.437 3.336 1.546 5.302H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h.315c.109-1.966.642-3.846 1.546-5.302.502-.81 1.116-1.479 1.81-1.948-.694-.47-1.308-1.138-1.81-1.948-.904-1.456-1.437-3.336-1.546-5.302H6A.75.75 0 0 1 5.25 4m9.631 5.261c-.846 1.365-1.901 1.989-2.873 1.989-.971 0-2.026-.624-2.872-1.989-.738-1.189-1.211-2.785-1.318-4.511h8.381c-.107 1.726-.58 3.322-1.318 4.511M9.136 14.74c.846-1.365 1.901-1.989 2.872-1.989.972 0 2.027.624 2.873 1.989.738 1.189 1.211 2.784 1.318 4.511H7.818c.107-1.727.58-3.322 1.318-4.511M8.645 5.5c.176 1.306.576 2.477 1.128 3.366.762 1.228 1.61 1.634 2.236 1.634s1.473-.406 2.235-1.634c.552-.89.952-2.06 1.129-3.366z",clipRule:"evenodd"}))}),R=u.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var Se=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const _e=u.forwardRef((e,a)=>{var{children:t,className:n}=e,r=Se(e,["children","className"]);const{cn:i}=b(),l=u.useContext(R);return l===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):y.createElement(z,Object.assign({},r,{ref:a,as:"div",className:i("navds-expansioncard__content",n,{"navds-expansioncard__content--closed":!l.open}),"aria-hidden":!l.open,size:l.size,"data-open":l.open}),y.createElement("div",{className:i("navds-expansioncard__content-inner")},t))});var Ke=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ge=u.forwardRef((e,a)=>{var{className:t}=e,n=Ke(e,["className"]);const{cn:r}=b(),i=u.useContext(R);return i===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):y.createElement(z,Object.assign({},n,{as:"p",ref:a,className:r("navds-link-panel__description",t),size:i.size}))});var He=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Le=u.forwardRef((e,a)=>{var{children:t,className:n}=e,r=He(e,["children","className"]);const{cn:i}=b(),l=u.useContext(R),o=ke("global");return l===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):y.createElement("div",Object.assign({ref:a},r,{className:i("navds-expansioncard__header",n),"data-open":l.open}),y.createElement("div",{className:i("navds-expansioncard__header-content")},t),y.createElement("button",{className:i("navds-expansioncard__header-button"),onClick:l.toggleOpen,type:"button","aria-expanded":l.open},y.createElement(ve,{className:i("navds-expansioncard__header-chevron"),title:o("showMore")})))});var Ce=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ue=u.forwardRef((e,a)=>{var{className:t,as:n="h3",size:r="medium"}=e,i=Ce(e,["className","as","size"]);const{cn:l}=b();return y.createElement(n,Object.assign({},i,{ref:a,className:l("navds-expansioncard__title",`navds-expansioncard__title--${r}`,"navds-heading",`navds-heading--${r}`,t)}))});var Me=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const v=u.forwardRef((e,a)=>{var{className:t,onToggle:n,open:r,defaultOpen:i=!1,size:l="medium"}=e,o=Me(e,["className","onToggle","open","defaultOpen","size"]);const{cn:m}=b(),d=u.useRef(!(r||i)),[p,g]=fe({value:r,onChange:c=>{n==null||n(c),d.current=!0},defaultValue:i});return y.createElement(R.Provider,{value:{open:r??p,toggleOpen:()=>g(c=>!c),size:l}},y.createElement("section",Object.assign({},o,{className:m("navds-expansioncard",t,`navds-expansioncard--${l}`,{"navds-expansioncard--open":r??p,"navds-expansioncard--no-animation":!d.current}),ref:a})))});v.Header=Le;v.Content=_e;v.Title=Ue;v.Description=Ge;var De=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const ze=u.forwardRef((e,a)=>{var{children:t,className:n,border:r=!1,as:i="div"}=e,l=De(e,["children","className","border","as"]);const{cn:o}=b();return y.createElement(i,Object.assign({ref:a,className:o("navds-panel",n,{"navds-panel--border":r})},l),t)}),Ye=e=>e&&e.kanVeilede,W=e=>e&&e.kanSaksbehandle,$e=e=>W(e)&&e.kanOverstyre,Qe=e=>e?e===C.TILBAKEKREVING||e===C.TILBAKEKREVING_REVURDERING:!1,Je=e=>a=>e.some(t=>t(a)),We=(e,a)=>(t,n,r)=>(n||!!t&&e.includes(t))&&!!r&&a.includes(r),X=(e,a,t)=>(n,r,i,l)=>{if(Ye(n))return{employeeHasAccess:!0,isEnabled:!1};const o=Je(e)(n),m=o&&We(a,t)(r,Qe(l),i);return{employeeHasAccess:o,isEnabled:m}},Xe=X([W],[B.OPPRETTET,B.UNDER_BEHANDLING],[I.OPPRETTET,I.BEHANDLING_UTREDES]),Ze=X([$e],[B.UNDER_BEHANDLING],[I.BEHANDLING_UTREDES]),en=(e,a,t,n)=>({writeAccess:Xe(e,a,t,n),kanOverstyreAccess:Ze(e,a,t,n)});var k=(e=>(e.INNVIRKNING="INNVIRKNING",e.INGEN_INNVIRKNING="INGEN_INNVIRKNING",e.UDEFINERT="-",e))(k||{});const nn=Ae(1500),rn=we(3),F="begrunnelse",q="vurderingerHovedkategori",S="ikkeReelleVurderingerUnderkategori",an=(e,a)=>{if(e!=null&&e.begrunnelse&&(a!=null&&a.faresignalVurdering)){const t=a.faresignalVurdering;return{[F]:e.begrunnelse,[q]:t===k.INGEN_INNVIRKNING?k.INGEN_INNVIRKNING:k.INNVIRKNING,[S]:t===k.INGEN_INNVIRKNING?void 0:t}}},tn=(e,a)=>e===k.INGEN_INNVIRKNING?k.INGEN_INNVIRKNING:a,sn=e=>({kode:Be.VURDER_FARESIGNALER,faresignalVurdering:tn(e[q],e[S]),begrunnelse:e[F]}),Z=({readOnly:e,aksjonspunkt:a,faresignalVurderinger:t,risikoklassifisering:n,submitCallback:r})=>{var d,p;const i=u.useMemo(()=>t.filter(g=>g.kode!==k.INNVIRKNING&&g.kode!==k.INGEN_INNVIRKNING),[]),l=u.useMemo(()=>an(a,n),[a,n]),o=Re({defaultValues:l}),m=o.watch(q)===k.INNVIRKNING;return s.jsxs(Te,{formMethods:o,onSubmit:g=>r&&r(sn(g)),children:[s.jsx(Ne,{name:F,label:s.jsx(f,{id:"Risikopanel.Forms.Vurdering"}),validate:[T,nn,rn,Ie],maxLength:1500,readOnly:e}),s.jsx(h,{sixteenPx:!0}),s.jsx(U,{name:q,label:s.jsx(f,{id:"Risikopanel.Form.Resultat"}),validate:[T],isReadOnly:e,radios:[{value:k.INNVIRKNING,label:((d=t.find(g=>g.kode===k.INNVIRKNING))==null?void 0:d.navn)||"",element:s.jsx("div",{children:m&&s.jsxs(s.Fragment,{children:[s.jsx(h,{eightPx:!0}),s.jsx(be,{alignOffset:20,children:s.jsx(U,{name:S,validate:[T],isReadOnly:e,radios:i.map(g=>({value:g.kode,label:g.navn}))})})]})})},{value:k.INGEN_INNVIRKNING,label:((p=t.find(g=>g.kode===k.INGEN_INNVIRKNING))==null?void 0:p.navn)||""}]}),s.jsx(h,{sixteenPx:!0}),s.jsx(me,{size:"small",variant:"primary",loading:o.formState.isSubmitting,disabled:!o.formState.isDirty||e||o.formState.isSubmitting,onClick:Ee,children:s.jsx(f,{id:"Risikopanel.Form.Bekreft"})})]})};Z.__docgenInfo={description:`IngenRisikoPanel

Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.`,methods:[],displayName:"AvklarFaresignalerForm",props:{aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},risikoklassifisering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`},description:""},submitCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: AvklartRisikoklassifiseringAp) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>`,elements:[{name:"signature",type:"object",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
}`,signature:{properties:[{key:"harInnvirketBehandlingen",value:{name:"boolean",required:!1}},{key:"faresignalVurdering",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"void"}}},description:""},faresignalVurderinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const O=({risikoFaresignaler:e,labelId:a})=>s.jsxs(s.Fragment,{children:[s.jsx(j,{size:"small",children:s.jsx(f,{id:a})}),s.jsx("ul",{children:e.faresignaler.map(t=>s.jsx("li",{children:s.jsx(ye,{size:"small",children:ce(t)})},t))})]}),ee=({risikoklassifisering:e})=>{var a,t;return s.jsxs(s.Fragment,{children:[((a=e.medlFaresignaler)==null?void 0:a.faresignaler)&&s.jsx(O,{risikoFaresignaler:e.medlFaresignaler,labelId:"Risikopanel.Panel.Medlemskap"}),((t=e.iayFaresignaler)==null?void 0:t.faresignaler)&&s.jsx(O,{risikoFaresignaler:e.iayFaresignaler,labelId:"Risikopanel.Panel.ArbeidsforholdInntekt"})]})};O.__docgenInfo={description:"",methods:[],displayName:"FarePanel",props:{risikoFaresignaler:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},description:""},labelId:{required:!0,tsType:{name:"string"},description:""}}};ee.__docgenInfo={description:`Faresignaler

Presentasjonskomponent. Viser en liste over faresignaler knyttet til behandlingen.`,methods:[],displayName:"Faresignaler",props:{risikoklassifisering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`},description:""}}};const ne=({risikoklassifisering:e,aksjonspunkt:a,readOnly:t,submitCallback:n,faresignalVurderinger:r})=>s.jsxs(ze,{children:[a&&a.status===w.OPPRETTET&&s.jsxs(s.Fragment,{children:[s.jsx(he,{children:s.jsx(f,{id:"Risikopanel.Panel.Tittel"})}),s.jsx(h,{sixteenPx:!0})]}),s.jsx(ee,{risikoklassifisering:e}),!!a&&s.jsx(Z,{aksjonspunkt:a,readOnly:t,submitCallback:n,risikoklassifisering:e,faresignalVurderinger:r})]});ne.__docgenInfo={description:`AvklarFaresignaler

Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.`,methods:[],displayName:"HoyRisikoPanel",props:{risikoklassifisering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`},description:""},aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: AvklartRisikoklassifiseringAp) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>`,elements:[{name:"signature",type:"object",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
}`,signature:{properties:[{key:"harInnvirketBehandlingen",value:{name:"boolean",required:!1}},{key:"faresignalVurdering",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"void"}}},description:""},faresignalVurderinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const ln="_hoyRisikoPanel_za867_1",on={hoyRisikoPanel:ln},re=({risikoklassifisering:e,aksjonspunkt:a,readOnly:t,submitCallback:n,isRiskPanelOpen:r,toggleRiskPanel:i,faresignalVurderinger:l})=>{const o=P();return s.jsxs(v,{"aria-label":o.formatMessage({id:"Risikopanel.Tittel"}),open:r,className:on.hoyRisikoPanel,children:[s.jsx(v.Header,{onClick:i,children:s.jsx(v.Title,{children:s.jsxs(V,{gap:"4",align:"center",children:[s.jsx(qe,{title:o.formatMessage({id:"Risikopanel.Tittel"}),color:"var(--a-red-500)",height:24,width:24}),s.jsx(j,{size:"small",children:s.jsx(f,{id:"Risikopanel.Tittel.Faresignaler"})})]})})}),s.jsx(v.Content,{children:s.jsx(ne,{risikoklassifisering:e,aksjonspunkt:a,readOnly:t,submitCallback:n,faresignalVurderinger:l})})]})};re.__docgenInfo={description:`HoyRisikoTittel

Statisk visning av tittel i utvidbart panel dersom faresignaler er funnet.`,methods:[],displayName:"HoyRisikoTittel",props:{risikoklassifisering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`},description:""},aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: AvklartRisikoklassifiseringAp) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>`,elements:[{name:"signature",type:"object",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
}`,signature:{properties:[{key:"harInnvirketBehandlingen",value:{name:"boolean",required:!1}},{key:"faresignalVurdering",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"void"}}},description:""},isRiskPanelOpen:{required:!0,tsType:{name:"boolean"},description:""},toggleRiskPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},faresignalVurderinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const ae=()=>s.jsx(J,{background:"surface-success-subtle",borderRadius:"large",padding:"3",children:s.jsxs(V,{gap:"4",align:"center",children:[s.jsx(Oe,{title:P().formatMessage({id:"Risikopanel.Tittel"}),height:24,width:24,color:"var(--a-surface-success)"}),s.jsx(j,{size:"small",children:s.jsx(f,{id:"Risikopanel.Tittel.IngenFaresignaler"})})]})});ae.__docgenInfo={description:`IngenRisikoPanel

Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.`,methods:[],displayName:"IngenRisikoPanel"};const te=()=>s.jsx(J,{borderWidth:"2",borderColor:"border-divider",borderRadius:"large",padding:"3",children:s.jsxs(V,{gap:"4",align:"center",children:[s.jsx(Fe,{title:P().formatMessage({id:"Risikopanel.Tittel"}),color:"var(--a-gray-600)",height:24,width:24}),s.jsx(j,{size:"small",children:s.jsx(f,{id:"Risikopanel.Tittel.ManglerKlassifisering"})})]})});te.__docgenInfo={description:`ManglendeKlassifiseringPanel

Statisk visning av panel som tilsier ingen risikoklassifisering er utført for valgt behandling, eller at ingen behandling er valgt.`,methods:[],displayName:"ManglendeKlassifiseringPanel"};var x=(e=>(e.HOY="HOY",e.IKKE_HOY="IKKE_HOY",e.IKKE_KLASSIFISERT="IKKE_KLASSIFISERT",e.UDEFINERT="-",e))(x||{});const un={"Risikopanel.Tittel":"Faresignaler","Risikopanel.Tittel.IngenFaresignaler":"Ingen faresignaler oppdaget","Risikopanel.Tittel.Faresignaler":"Faresignaler oppdaget","Risikopanel.Tittel.ManglerKlassifisering":"Venter på mulige faresignaler","Risikopanel.Panel.Tittel":"Vurder faresignalene","Risikopanel.Panel.Medlemskap":"Medlemskap","Risikopanel.Panel.ArbeidsforholdInntekt":"Arbeidsforhold og inntekt","Risikopanel.Form.Resultat":"Resultat av vurderingen","Risikopanel.Form.Bekreft":"Bekreft og fortsett","Risikopanel.Forms.Vurdering":"Vurdering"},gn=je(un),M=(e,a)=>a!=null&&a.kontrollresultat?a.kontrollresultat===e:!1,_=({aksjonspunkt:e,risikoklassifisering:a,isPanelOpen:t,readOnly:n,submitAksjonspunkt:r,toggleRiskPanel:i,faresignalVurderinger:l})=>{const o=M(x.IKKE_HOY,a),m=M(x.HOY,a);return s.jsxs(pe,{value:gn,children:[o&&s.jsx(ae,{}),a&&m&&s.jsx(re,{risikoklassifisering:a,aksjonspunkt:e,readOnly:n,isRiskPanelOpen:t,submitCallback:r,toggleRiskPanel:i,faresignalVurderinger:l}),!o&&!m&&s.jsx(te,{})]})};_.__docgenInfo={description:`RisikoklassifiseringSakIndex

Har ansvar for å vise risikoklassifisering for valgt behandling
Viser en av tre komponenter avhengig av: Om ingen klassifisering er utført,
om klassifisering er utført og ingen faresignaler er funnet og om klassifisering er utført og faresignaler er funnet`,methods:[],displayName:"RisikoklassifiseringSakIndex",props:{aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},risikoklassifisering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`},description:""},isPanelOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submitAksjonspunkt:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: AvklartRisikoklassifiseringAp) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>`,elements:[{name:"signature",type:"object",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
}`,signature:{properties:[{key:"harInnvirketBehandlingen",value:{name:"boolean",required:!1}},{key:"faresignalVurdering",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"void"}}},description:""},toggleRiskPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},faresignalVurderinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const dn=({fagsakData:e,behandling:a,setBehandling:t})=>{const n=e.getFagsak(),{selected:r=!1}=xe({paramName:"risiko",parse:g=>g==="true",isQueryParam:!0}),i=Y(),l=$(),o=()=>{i(E(l)(!r))},{kodeverkOptions:m}=D(),{data:d}=N(m()),p=e.getBehandling(a==null?void 0:a.uuid);return a&&p?s.jsx(kn,{isRiskPanelOpen:r,fagsak:n,toggleRiskPanel:o,behandlingAppKontekst:p,behandling:a,setBehandling:t}):s.jsx(_,{risikoklassifisering:n.kontrollResultat,isPanelOpen:r,readOnly:!0,toggleRiskPanel:o,faresignalVurderinger:A(d)[Q.FARESIGNAL_VURDERING]})},kn=({fagsak:e,behandling:a,behandlingAppKontekst:t,setBehandling:n,toggleRiskPanel:r,isRiskPanelOpen:i})=>{const{behandlingPaaVent:l,status:o,type:m,risikoAksjonspunkt:d,kontrollResultat:p}=t,{kodeverkOptions:g}=D(),c=N(ge()),{data:se}=N(g()),K=A(c.data).innloggetBruker,ie=en(K,e.status,o,m),le=mn(K,ie,l),G=Y(),H=$();u.useEffect(()=>{d&&d.status===w.OPPRETTET&&!i&&G(E(H)(!0)),d&&d.status===w.UTFORT&&G(E(H)(!1))},[!!d,a.uuid,a.versjon]);const{lagreAksjonspunkter:oe}=Pe(a,n),ue=L=>{oe({behandlingUuid:a.uuid,behandlingVersjon:a.versjon,saksnummer:e.saksnummer,bekreftedeAksjonspunktDtoer:[{"@type":L.kode,...L}]})};return s.jsx(_,{aksjonspunkt:d,risikoklassifisering:p,isPanelOpen:i,readOnly:le,submitAksjonspunkt:ue,toggleRiskPanel:r,faresignalVurderinger:A(se)[Q.FARESIGNAL_VURDERING]})},mn=(e,a,t)=>{if(t)return!0;const{kanSaksbehandle:n}=e;return!n||!a.writeAccess.isEnabled};dn.__docgenInfo={description:`RisikoklassifiseringIndex

Har ansvar for å vise risikoklassifisering for valgt behandling
Viser en av tre komponenter avhengig av: Om ingen klassifisering er utført,
om klassifisering er utført og ingen faresignaler er funnet og om klassifisering er utført og faresignaler er funnet`,methods:[],displayName:"RisikoklassifiseringIndex",props:{fagsakData:{required:!0,tsType:{name:"FagsakData"},description:""},behandling:{required:!1,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling: Behandling) => void",signature:{arguments:[{type:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},name:"behandling"}],return:{name:"void"}}},description:""}}};export{v as E,x as K,ze as P,dn as R,Fe as S,en as g};
