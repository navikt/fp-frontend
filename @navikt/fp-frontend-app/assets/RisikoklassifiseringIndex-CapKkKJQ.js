import{j as s}from"./jsx-runtime-BDPtolqC.js";import{r as u,R as p}from"./index-B54hSm9S.js";import{a as de,u as C,n as L,c as ke}from"./initFetch-Ix2oJbRX.js";import"./aktivitetStatus-02fOJoqz.js";import{K as me}from"./kodeverkTyper-CavWL6Ds.js";import{u as pe,aa as D,d as c,$ as ye,l as ve,L as j,B as fe,i as V,k as F,Y as ce,P as be,a1 as he,e as qe}from"./alleKodeverk-B3AibkSl.js";import{l as Re,u as je,M as v,g as h,C as Te,c as Ne,t as Ie,a as we,h as Ae,n as Ee}from"./index.es-dGlS6Fbw.js";import{u as xe,W as Pe,L as Oe,e as A,N as Be,A as H,E as Ve,l as Fe,a as _e}from"./index.es-DT3aXwL0.js";import{A as Se}from"./aksjonspunktCodes-BuBbCIxs.js";import{B as z}from"./Box-BYpVF8tv.js";import{d as E}from"./paths-CeNa7t0Q.js";import{u as Ke}from"./useTrackRouteParam-BHDqBshG.js";import{B as x}from"./FagsakData-CGqXEUml.js";import{a as P,B as M}from"./fagsakYtelseType-CyKFp0BE.js";import{a as Ge,B as Ce}from"./behandlingContextApi-Dp0SG7zF.js";var Le=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const He=u.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=Le(e,["title","titleId"]);let i=pe();return i=t?n||"title-"+i:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},r),t?u.createElement("title",{id:i},t):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.25 4A.75.75 0 0 1 6 3.25h12a.75.75 0 0 1 0 1.5h-.298c-.109 1.966-.643 3.846-1.546 5.302-.503.81-1.116 1.479-1.81 1.948.694.47 1.307 1.138 1.81 1.948.904 1.456 1.437 3.336 1.546 5.302H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h.315c.109-1.966.642-3.846 1.546-5.302.502-.81 1.116-1.479 1.81-1.948-.694-.47-1.308-1.138-1.81-1.948-.904-1.456-1.437-3.336-1.546-5.302H6A.75.75 0 0 1 5.25 4m9.631 5.261c-.846 1.365-1.901 1.989-2.873 1.989-.971 0-2.026-.624-2.872-1.989-.738-1.189-1.211-2.785-1.318-4.511h8.381c-.107 1.726-.58 3.322-1.318 4.511M9.136 14.74c.846-1.365 1.901-1.989 2.872-1.989.972 0 2.027.624 2.873 1.989.738 1.189 1.211 2.784 1.318 4.511H7.818c.107-1.727.58-3.322 1.318-4.511M8.645 5.5c.176 1.306.576 2.477 1.128 3.366.762 1.228 1.61 1.634 2.236 1.634s1.473-.406 2.235-1.634c.552-.89.952-2.06 1.129-3.366z",clipRule:"evenodd"}))}),T=u.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var Me=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ue=u.forwardRef((e,a)=>{var{children:t,className:n}=e,r=Me(e,["children","className"]);const i=u.useContext(T);return i===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):p.createElement(D,Object.assign({},r,{ref:a,as:"div",className:c("navds-expansioncard__content",n,{"navds-expansioncard__content--closed":!i.open}),"aria-hidden":!i.open,size:i.size,"data-open":i.open}),p.createElement("div",{className:"navds-expansioncard__content-inner"},t))});var De=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const ze=u.forwardRef((e,a)=>{var{className:t}=e,n=De(e,["className"]);const r=u.useContext(T);return r===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):p.createElement(D,Object.assign({},n,{as:"p",ref:a,className:c("navds-link-panel__description",t),size:r.size}))});var Ye=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const $e=u.forwardRef((e,a)=>{var{children:t,className:n}=e,r=Ye(e,["children","className"]);const i=u.useContext(T),g=ye("global");return i===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):p.createElement("div",Object.assign({ref:a},r,{className:c("navds-expansioncard__header",n),"data-open":i.open}),p.createElement("div",{className:"navds-expansioncard__header-content"},t),p.createElement("button",{className:"navds-expansioncard__header-button",onClick:i.toggleOpen,type:"button","aria-expanded":i.open},p.createElement(Re,{className:"navds-expansioncard__header-chevron",title:g("showMore")})))});var Qe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const We=u.forwardRef((e,a)=>{var{className:t,as:n="h3",size:r="medium"}=e,i=Qe(e,["className","as","size"]);return p.createElement(n,Object.assign({},i,{ref:a,className:c("navds-expansioncard__title",`navds-expansioncard__title--${r}`,"navds-heading",`navds-heading--${r}`,t)}))});var Je=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const y=u.forwardRef((e,a)=>{var{className:t,onToggle:n,open:r,defaultOpen:i=!1,size:g="medium"}=e,l=Je(e,["className","onToggle","open","defaultOpen","size"]);const m=u.useRef(!(r||i)),[k,f]=je({value:r,onChange:o=>{n==null||n(o),m.current=!0},defaultValue:i});return p.createElement(T.Provider,{value:{open:r??k,toggleOpen:()=>f(o=>!o),size:g}},p.createElement("section",Object.assign({},l,{className:c("navds-expansioncard",t,`navds-expansioncard--${g}`,{"navds-expansioncard--open":r??k,"navds-expansioncard--no-animation":!m.current}),ref:a})))});y.Header=$e;y.Content=Ue;y.Title=We;y.Description=ze;var q=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(q||{});const Bn=e=>e==="OPPR",Xe=e=>e&&e.kanVeilede,Y=e=>e&&e.kanSaksbehandle,Ze=e=>Y(e)&&e.kanOverstyre,en=e=>e?e===M.TILBAKEKREVING||e===M.TILBAKEKREVING_REVURDERING:!1,nn=e=>a=>e.some(t=>t(a)),rn=(e,a)=>(t,n,r)=>(n||!!t&&e.includes(t))&&!!r&&a.includes(r),$=(e,a,t)=>(n,r,i,g)=>{if(Xe(n))return{employeeHasAccess:!0,isEnabled:!1};const l=nn(e)(n),m=l&&rn(a,t)(r,en(g),i);return{employeeHasAccess:l,isEnabled:m}},an=$([Y],[P.OPPRETTET,P.UNDER_BEHANDLING],[x.OPPRETTET,x.BEHANDLING_UTREDES]),tn=$([Ze],[P.UNDER_BEHANDLING],[x.BEHANDLING_UTREDES]),sn=(e,a,t,n)=>({writeAccess:an(e,a,t,n),kanOverstyreAccess:tn(e,a,t,n)});var d=(e=>(e.INNVIRKNING="INNVIRKNING",e.INGEN_INNVIRKNING="INGEN_INNVIRKNING",e.UDEFINERT="-",e))(d||{});const ln=Fe(1500),on=_e(3),_="begrunnelse",R="vurderingerHovedkategori",S="ikkeReelleVurderingerUnderkategori",un=(e,a)=>{if(e!=null&&e.begrunnelse&&(a!=null&&a.faresignalVurdering)){const t=a.faresignalVurdering;return{[_]:e.begrunnelse,[R]:t===d.INGEN_INNVIRKNING?d.INGEN_INNVIRKNING:d.INNVIRKNING,[S]:t===d.INGEN_INNVIRKNING?void 0:t}}},gn=(e,a)=>e===d.INGEN_INNVIRKNING?d.INGEN_INNVIRKNING:a,dn=e=>({kode:Se.VURDER_FARESIGNALER,faresignalVurdering:gn(e[R],e[S]),begrunnelse:e[_]}),Q=({readOnly:e,aksjonspunkt:a,faresignalVurderinger:t,risikoklassifisering:n,submitCallback:r})=>{var k,f;const i=u.useMemo(()=>t.filter(o=>o.kode!==d.INNVIRKNING&&o.kode!==d.INGEN_INNVIRKNING),[]),g=u.useMemo(()=>un(a,n),[a,n]),l=xe({defaultValues:g}),m=l.watch(R)===d.INNVIRKNING;return s.jsxs(Pe,{formMethods:l,onSubmit:o=>r(dn(o)),children:[s.jsx(Oe,{name:_,label:s.jsx(v,{id:"Risikopanel.Forms.Vurdering"}),validate:[A,ln,on,Be],maxLength:1500,readOnly:e}),s.jsx(h,{sixteenPx:!0}),s.jsx(H,{name:R,label:s.jsx(v,{id:"Risikopanel.Form.Resultat"}),validate:[A],isReadOnly:e,radios:[{value:d.INNVIRKNING,label:((k=t.find(o=>o.kode===d.INNVIRKNING))==null?void 0:k.navn)||"",element:s.jsx("div",{children:m&&s.jsxs(s.Fragment,{children:[s.jsx(h,{eightPx:!0}),s.jsx(Te,{alignOffset:20,children:s.jsx(H,{name:S,validate:[A],isReadOnly:e,radios:i.map(o=>({value:o.kode,label:o.navn}))})})]})})},{value:d.INGEN_INNVIRKNING,label:((f=t.find(o=>o.kode===d.INGEN_INNVIRKNING))==null?void 0:f.navn)||""}]}),s.jsx(h,{sixteenPx:!0}),s.jsx(ve,{size:"small",variant:"primary",loading:l.formState.isSubmitting,disabled:!l.formState.isDirty||e||l.formState.isSubmitting,onClick:Ve,children:s.jsx(v,{id:"Risikopanel.Form.Bekreft"})})]})};Q.__docgenInfo={description:`IngenRisikoPanel

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
}>`},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: AvklartRisikoklassifiseringAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>`,elements:[{name:"signature",type:"object",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
}`,signature:{properties:[{key:"harInnvirketBehandlingen",value:{name:"boolean",required:!1}},{key:"faresignalVurdering",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},faresignalVurderinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const O=({risikoFaresignaler:e,labelId:a})=>s.jsxs(s.Fragment,{children:[s.jsx(j,{size:"small",children:s.jsx(v,{id:a})}),s.jsx("ul",{children:e.faresignaler.map(t=>s.jsx("li",{children:s.jsx(fe,{size:"small",children:Ne(t)})},t))})]}),W=({risikoklassifisering:e})=>{var a,t;return s.jsxs(s.Fragment,{children:[((a=e.medlFaresignaler)==null?void 0:a.faresignaler)&&s.jsx(O,{risikoFaresignaler:e.medlFaresignaler,labelId:"Risikopanel.Panel.Medlemskap"}),((t=e.iayFaresignaler)==null?void 0:t.faresignaler)&&s.jsx(O,{risikoFaresignaler:e.iayFaresignaler,labelId:"Risikopanel.Panel.ArbeidsforholdInntekt"})]})};O.__docgenInfo={description:"",methods:[],displayName:"FarePanel",props:{risikoFaresignaler:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},description:""},labelId:{required:!0,tsType:{name:"string"},description:""}}};W.__docgenInfo={description:`Faresignaler

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
}>`},description:""}}};const J=({risikoklassifisering:e,aksjonspunkt:a,readOnly:t,submitCallback:n,faresignalVurderinger:r})=>s.jsxs(Ie,{children:[a&&a.status===q.OPPRETTET&&s.jsxs(s.Fragment,{children:[s.jsx(we,{children:s.jsx(v,{id:"Risikopanel.Panel.Tittel"})}),s.jsx(h,{sixteenPx:!0})]}),s.jsx(W,{risikoklassifisering:e}),!!a&&s.jsx(Q,{aksjonspunkt:a,readOnly:t,submitCallback:n,risikoklassifisering:e,faresignalVurderinger:r})]});J.__docgenInfo={description:`AvklarFaresignaler

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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: AvklartRisikoklassifiseringAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>`,elements:[{name:"signature",type:"object",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
}`,signature:{properties:[{key:"harInnvirketBehandlingen",value:{name:"boolean",required:!1}},{key:"faresignalVurdering",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},faresignalVurderinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const kn="_hoyRisikoPanel_za867_1",mn={hoyRisikoPanel:kn},X=({risikoklassifisering:e,aksjonspunkt:a,readOnly:t,submitCallback:n,isRiskPanelOpen:r,toggleRiskPanel:i,faresignalVurderinger:g})=>{const l=V();return s.jsxs(y,{"aria-label":l.formatMessage({id:"Risikopanel.Tittel"}),open:r,className:mn.hoyRisikoPanel,children:[s.jsx(y.Header,{onClick:i,children:s.jsx(y.Title,{children:s.jsxs(F,{gap:"4",align:"center",children:[s.jsx(Ae,{title:l.formatMessage({id:"Risikopanel.Tittel"}),color:"var(--a-red-500)",height:24,width:24}),s.jsx(j,{size:"small",children:s.jsx(v,{id:"Risikopanel.Tittel.Faresignaler"})})]})})}),s.jsx(y.Content,{children:s.jsx(J,{risikoklassifisering:e,aksjonspunkt:a,readOnly:t,submitCallback:n,faresignalVurderinger:g})})]})};X.__docgenInfo={description:`HoyRisikoTittel

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
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: AvklartRisikoklassifiseringAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>`,elements:[{name:"signature",type:"object",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
}`,signature:{properties:[{key:"harInnvirketBehandlingen",value:{name:"boolean",required:!1}},{key:"faresignalVurdering",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},isRiskPanelOpen:{required:!0,tsType:{name:"boolean"},description:""},toggleRiskPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},faresignalVurderinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Z=()=>s.jsx(z,{background:"surface-success-subtle",borderRadius:"large",padding:"3",children:s.jsxs(F,{gap:"4",align:"center",children:[s.jsx(ce,{title:V().formatMessage({id:"Risikopanel.Tittel"}),height:24,width:24,color:"var(--a-surface-success)"}),s.jsx(j,{size:"small",children:s.jsx(v,{id:"Risikopanel.Tittel.IngenFaresignaler"})})]})});Z.__docgenInfo={description:`IngenRisikoPanel

Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.`,methods:[],displayName:"IngenRisikoPanel"};const ee=()=>s.jsx(z,{borderWidth:"2",borderColor:"border-divider",borderRadius:"large",padding:"3",children:s.jsxs(F,{gap:"4",align:"center",children:[s.jsx(He,{title:V().formatMessage({id:"Risikopanel.Tittel"}),color:"var(--a-gray-600)",height:24,width:24}),s.jsx(j,{size:"small",children:s.jsx(v,{id:"Risikopanel.Tittel.ManglerKlassifisering"})})]})});ee.__docgenInfo={description:`ManglendeKlassifiseringPanel

Statisk visning av panel som tilsier ingen risikoklassifisering er utført for valgt behandling, eller at ingen behandling er valgt.`,methods:[],displayName:"ManglendeKlassifiseringPanel"};var B=(e=>(e.HOY="HOY",e.IKKE_HOY="IKKE_HOY",e.IKKE_KLASSIFISERT="IKKE_KLASSIFISERT",e.UDEFINERT="-",e))(B||{});const pn={"Risikopanel.Tittel":"Faresignaler","Risikopanel.Tittel.IngenFaresignaler":"Ingen faresignaler oppdaget","Risikopanel.Tittel.Faresignaler":"Faresignaler oppdaget","Risikopanel.Tittel.ManglerKlassifisering":"Venter på mulige faresignaler","Risikopanel.Panel.Tittel":"Vurder faresignalene","Risikopanel.Panel.Medlemskap":"Medlemskap","Risikopanel.Panel.ArbeidsforholdInntekt":"Arbeidsforhold og inntekt","Risikopanel.Form.Resultat":"Resultat av vurderingen","Risikopanel.Form.Bekreft":"Bekreft og fortsett","Risikopanel.Forms.Vurdering":"Vurdering"},yn=Ee(pn),U=(e,a)=>a!=null&&a.kontrollresultat?a.kontrollresultat===e:!1,ne=({aksjonspunkt:e,risikoklassifisering:a,isPanelOpen:t,readOnly:n,submitAksjonspunkt:r,toggleRiskPanel:i,faresignalVurderinger:g})=>{const l=U(B.IKKE_HOY,a),m=U(B.HOY,a);return s.jsxs(be,{value:yn,children:[l&&s.jsx(Z,{}),a&&m&&s.jsx(X,{risikoklassifisering:a,aksjonspunkt:e,readOnly:n,isRiskPanelOpen:t,submitCallback:r,toggleRiskPanel:i,faresignalVurderinger:g}),!l&&!m&&s.jsx(ee,{})]})};ne.__docgenInfo={description:`RisikoklassifiseringSakIndex

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
}>`},description:""},isPanelOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},submitAksjonspunkt:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: AvklartRisikoklassifiseringAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>`,elements:[{name:"signature",type:"object",raw:`{
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
}`,signature:{properties:[{key:"harInnvirketBehandlingen",value:{name:"boolean",required:!1}},{key:"faresignalVurdering",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},toggleRiskPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},faresignalVurderinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const vn=(e,a,t)=>{if(t)return!0;const{kanSaksbehandle:n}=e;return!n||!a.writeAccess.isEnabled},fn=({fagsakData:e,behandlingVersjon:a,behandlingUuid:t,setBehandling:n})=>{const r=e.getFagsak(),i=e.getBehandling(t),g=i?i.behandlingPaaVent:!1,l=i==null?void 0:i.status,m=i==null?void 0:i.type,k=i==null?void 0:i.risikoAksjonspunkt,o=(i==null?void 0:i.kontrollResultat)||r.kontrollResultat,{selected:N=!1}=Ke({paramName:"risiko",parse:b=>b==="true",isQueryParam:!0}),I=he(),w=qe(),{kodeverkOptions:re}=de(),ae=C(ke()),{data:te}=C(re()),K=L(ae.data).innloggetBruker,se=sn(K,r.status,l,m),ie=vn(K,se,g),le=()=>{I(E(w)(!N))};u.useEffect(()=>{k&&k.status===q.OPPRETTET&&!N&&I(E(w)(!0)),k&&k.status===q.UTFORT&&I(E(w)(!1))},[!!k,t,a]);const{startRequest:oe}=Ge.useRestApiRunner(Ce.SAVE_AKSJONSPUNKT),ue=b=>{if(!t||!a)return Promise.reject();const ge={behandlingUuid:t,saksnummer:r.saksnummer,behandlingVersjon:a,bekreftedeAksjonspunktDtoer:[{"@type":b.kode,...b}]};return oe(ge).then(G=>{G&&n(G)})};return s.jsx(ne,{aksjonspunkt:k,risikoklassifisering:o,isPanelOpen:N,readOnly:ie,submitAksjonspunkt:ue,toggleRiskPanel:le,faresignalVurderinger:L(te)[me.FARESIGNAL_VURDERING]})};fn.__docgenInfo={description:`RisikoklassifiseringIndex

Har ansvar for å vise risikoklassifisering for valgt behandling
Viser en av tre komponenter avhengig av: Om ingen klassifisering er utført,
om klassifisering er utført og ingen faresignaler er funnet og om klassifisering er utført og faresignaler er funnet`,methods:[],displayName:"RisikoklassifiseringIndex",props:{fagsakData:{required:!0,tsType:{name:"FagsakData"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},behandlingVersjon:{required:!1,tsType:{name:"number"},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling: Behandling) => void",signature:{arguments:[{type:{name:"intersection",raw:`BehandlingFellesData &
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
  harVerge?: boolean;
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
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  harVerge?: boolean;
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
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},name:"behandling"}],return:{name:"void"}}},description:""}}};export{q as A,y as E,B as K,fn as R,He as S,sn as g,Bn as i};
