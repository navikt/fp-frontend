import{r as g,e as x,c as X,R as o,g as Q,h as Z,u as ee,j as B,B as _}from"./iframe-CGtaPlMr.js";import{B as te,u as ne,a as ae,b as re,c as se,d as ie,e as le,s as oe,f as U,o as ue,g as de,h as ce,i as pe}from"./Modal-1IhewSW0.js";import{u as ge,L as me,a as ve,D as fe}from"./nb_NO-8OE8CfW0.js";import{c as G,u as ye}from"./composeEventHandlers-BLmajNSV.js";import{u as Te}from"./Loader-8F9pyiDk.js";import{S as be}from"./Checkmark-B6hTe0ph.js";import{P as Ee}from"./Portal-ptRrTvRs.js";import{A as r}from"./andreKriterierType-Cg0VWsVP.js";import"./FlyttReservasjonModal-DquGq6Ru.js";import{a as K}from"./useLosKodeverk-mAeRkF2C.js";import{H as Re}from"./VStack--o-kiaXL.js";import{T as w}from"./Tag-DK_vZxKa.js";var he=function(e,s){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)s.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Oe=g.forwardRef((e,s)=>{var{title:n,titleId:t}=e,a=he(e,["title","titleId"]);let i=ge();return i=n?t||"title-"+i:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":i},a),n?g.createElement("title",{id:i},n):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.25 3.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l5 5c.141.14.22.331.22.53v8.5c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25zm6.25 5.25c-.69 0-1.25-.56-1.25-1.25V3.75h-3.5v12.5h8.5v-7.5zm.25-3.94 2.44 2.44h-2.44zM6.502 7.75H5.75v12.5h8.5v-.748a.75.75 0 0 1 1.5 0v.998c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h1.002a.75.75 0 1 1 0 1.5",clipRule:"evenodd"}))});var _e=function(e,s,n,t){function a(i){return i instanceof n?i:new n(function(u){u(i)})}return new(n||(n=Promise))(function(i,u){function c(l){try{d(t.next(l))}catch(T){u(T)}}function y(l){try{d(t.throw(l))}catch(T){u(T)}}function d(l){l.done?i(l.value):a(l.value).then(c,y)}d((t=t.apply(e,[])).next())})};function Ne(e){return _e(this,void 0,void 0,function*(){try{yield navigator.clipboard.writeText(e)}catch{const t=`Kopier til utklippstavle: ${/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl"}+C, Enter`;window.prompt(t,e)}})}var Ae=function(e,s){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)s.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Ye=g.forwardRef((e,s)=>{var{className:n,copyText:t,text:a,activeText:i,variant:u="neutral",onActiveChange:c,icon:y,activeIcon:d,activeDuration:l=2e3,title:T,iconPosition:N="left",onClick:b,size:A="medium"}=e,I=Ae(e,["className","copyText","text","activeText","variant","onActiveChange","icon","activeIcon","activeDuration","title","iconPosition","onClick","size"]);const[E,R]=g.useState(!1),p=g.useRef(),k=Te("CopyButton"),{cn:v}=x(),m=X(!1);g.useEffect(()=>()=>{p.current&&clearTimeout(p.current)},[]);const S=()=>{p.current&&clearTimeout(p.current),Ne(t),R(!0),c?.(!0),p.current=window.setTimeout(()=>{R(!1),c?.(!1)},l)},h=i||k("activeText"),O=o.createElement(Ie,{useLegacy:!m},E?d??o.createElement(be,{"aria-hidden":!!a,title:a?void 0:h,className:m?v("navds-copybutton__icon"):void 0}):y??o.createElement(Oe,{"aria-hidden":!!a,title:a?void 0:T||k("title"),className:m?v("navds-copybutton__icon"):void 0}));return m?o.createElement(te,Object.assign({ref:s,type:"button",className:v("navds-copybutton",n)},I,{variant:u==="action"?"tertiary":"tertiary-neutral",onClick:G(b,S),iconPosition:N,icon:O,"data-active":E,size:A}),a?E?h:a:null):o.createElement("button",Object.assign({ref:s,type:"button"},I,{className:v("navds-copybutton",n,`navds-copybutton--${A}`,`navds-copybutton--${u}`,{"navds-copybutton--icon-only":!a,"navds-copybutton--icon-right":N==="right","navds-copybutton--active":E}),onClick:G(b,S)}),o.createElement("span",{className:v("navds-copybutton__content")},N==="left"&&O,a&&o.createElement(me,{as:"span",size:A==="medium"?"medium":"small"},E?h:a),N==="right"&&O))});function Ie({children:e,useLegacy:s}){const{cn:n}=x();return s?o.createElement("span",{className:n("navds-copybutton__icon")},e):e}var ke=function(e,s){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)s.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ze=g.forwardRef((e,s)=>{var{children:n,className:t,arrow:a=!0,placement:i="top",open:u,defaultOpen:c=!1,onOpenChange:y,offset:d,content:l,delay:T=150,id:N,keys:b,maxChar:A=80,describesChild:I=!1}=e,E=ke(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:R}=x(),[p,k]=ye({defaultValue:c,value:u,onChange:y}),v=g.useRef(null),m=ne(!1),S=m?m.ref.current:void 0,{x:h,y:O,strategy:F,context:L,placement:j,middlewareData:{arrow:{x:D,y:M}={},hide:{referenceHidden:V}={}},refs:P}=ae({placement:i,open:p,onOpenChange:f=>k(f),middleware:[ue(d??(a?8:4)),de(),ce({padding:5,fallbackPlacements:["bottom","top"]}),pe({element:v,padding:5})],whileElementsMounted:m?(f,J,W)=>U(f,J,W,{animationFrame:!0}):U,strategy:m?"fixed":void 0}),{getReferenceProps:Y,getFloatingProps:z}=re([se(L,{handleClose:oe(),restMs:T}),ie(L),le(L)]),C=ve(N),$=Q(s,P.setFloating);if(!n||n?.type===o.Fragment||n===o.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;l?.length>A&&p&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${l.length}
Tooltip-content: ${l}`);const H=I?p?{"aria-describedby":C}:{title:l}:{"aria-label":l};return o.createElement(o.Fragment,null,o.createElement(Z,Object.assign({ref:P.setReference},Y(),H,{"aria-keyshortcuts":b?b.join("+"):void 0}),n),o.createElement(Ee,{rootElement:S,asChild:!0},p&&o.createElement("div",Object.assign({},z(Object.assign(Object.assign({},E),{ref:$,style:{position:F,top:O??0,left:h??0,visibility:V?"hidden":"visible"},role:"tooltip",id:C,className:R("navds-tooltip","navds-detail navds-detail--small",t)})),{"data-side":j,"data-state":"open"}),l,b&&o.createElement("span",{className:R("navds-tooltip__keys"),"aria-hidden":!0},b.map(f=>o.createElement(fe,{as:"kbd",key:f,className:R("navds-tooltip__key")},f))),a&&o.createElement("div",{ref:f=>{v.current=f},className:R("navds-tooltip__arrow"),style:{left:D!=null?`${D}px`:"",top:M!=null?`${M}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[j]]:"-3.5px"}}))))}),Se=({oppgave:e})=>{const s=ee(),n=K("BehandlingType"),t=K("FagsakYtelseType"),a=K("AndreKriterierType");return B.jsxs(Re,{gap:"space-8",children:[B.jsx(w,{size:"small",variant:"success",title:t.find(i=>i.kode===e.fagsakYtelseType)?.navn,children:e.fagsakYtelseType}),B.jsx(w,{size:"small",variant:"warning-filled",title:n.find(i=>i.kode===e.behandlingstype)?.navn,children:Le(s)[e.behandlingstype]}),e.andreKriterier.sort(Be).map(i=>B.jsx(w,{size:"small",variant:q[i],title:a.find(u=>u.kode===i)?.navn,children:Ke(s,i,a)},i))]})},q={[r.ENDRINGSSOKNAD]:"alt1",[r.REVURDERING_INNTEKTSMELDING]:"alt1",[r.KLAGE_PÅ_TILBAKEBETALING]:"alt1",[r.BERØRT_BEHANDLING]:"alt1",[r.PLEIEPENGER]:"alt1",[r.UTSATT_START]:"alt1",[r.TIL_BESLUTTER]:"alt3",[r.PAPIRSOKNAD]:"alt3",[r.VURDER_EØS_OPPTJENING]:"alt3",[r.ARBEID_INNTEKT]:"alt3",[r.TERMINBEKREFTELSE]:"alt3",[r.VURDER_FORMKRAV]:"alt3",[r.VURDER_FARESIGNALER]:"alt3",[r.VURDER_SYKDOM]:"alt3",[r.IKKE_VARSLET]:"alt3",[r.OVER_FIRE_RETTSGEBYR]:"alt3",[r.BARE_FAR_RETT]:"alt2",[r.UTLANDSSAK]:"alt2",[r.DØD]:"alt2",[r.EØS_SAK]:"alt2",[r.MOR_UKJENT_UTLAND]:"alt2",[r.KODE7_SAK]:"alt2",[r.NYTT_VEDTAK]:"alt2",[r.PRAKSIS_UTSETTELSE]:"alt2",[r.RETURNERT_FRA_BESLUTTER]:"alt2",[r.SAMMENSATT_KONTROLL]:"alt2",[r.NÆRING]:"alt2",[r.UTBETALING_TIL_BRUKER]:"alt2"},Be=(e,s)=>{const n=Object.keys(q);return n.indexOf(e)-n.indexOf(s)},Le=e=>({[_.ANKE]:e.formatMessage({id:"OppgaveLabels.Anke"}),[_.DOKUMENTINNSYN]:e.formatMessage({id:"OppgaveLabels.Innsyn"}),[_.FORSTEGANGSSOKNAD]:e.formatMessage({id:"OppgaveLabels.Forstegang"}),[_.KLAGE]:e.formatMessage({id:"OppgaveLabels.Klage"}),[_.REVURDERING]:e.formatMessage({id:"OppgaveLabels.Revurdering"}),[_.TILBAKEKREVING]:e.formatMessage({id:"OppgaveLabels.Tilbake"}),[_.TILBAKEKREVING_REVURDERING]:e.formatMessage({id:"OppgaveLabels.TilbakeRev"}),"-":e.formatMessage({id:"OppgaveLabels.TilbakeRev"})}),Ke=(e,s,n)=>r.REVURDERING_INNTEKTSMELDING===s?e.formatMessage({id:"OppgaveLabels.RevurderingInntekstmelding"}):r.BERØRT_BEHANDLING===s?e.formatMessage({id:"OppgaveLabels.BerortBehandling"}):r.KLAGE_PÅ_TILBAKEBETALING===s?e.formatMessage({id:"OppgaveLabels.KlageTilbakebetaling"}):r.DØD===s?e.formatMessage({id:"OppgaveLabels.Dod"}):r.PAPIRSOKNAD===s?e.formatMessage({id:"OppgaveLabels.Papirsoknad"}):r.RETURNERT_FRA_BESLUTTER===s?e.formatMessage({id:"OppgaveLabels.FraBeslutter"}):r.NÆRING===s?e.formatMessage({id:"OppgaveLabels.Naring"}):r.UTBETALING_TIL_BRUKER===s?e.formatMessage({id:"OppgaveLabels.Utbetaling"}):r.VURDER_EØS_OPPTJENING===s?e.formatMessage({id:"OppgaveLabels.VurderSed"}):n.find(t=>t.kode===s)?.navn;Se.__docgenInfo={description:"",methods:[],displayName:"OppgaveLabels",props:{oppgave:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"reservasjonStatus",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"OppgaveBehandlingStatus",required:!0}}]}}],raw:`Readonly<{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}>`},description:""}}};export{Ye as C,Se as O,Oe as S,ze as T};
