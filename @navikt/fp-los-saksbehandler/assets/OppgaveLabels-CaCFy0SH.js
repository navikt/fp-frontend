import{r as g,R as s,c as k,b as U,u as G,j as _}from"./iframe-CCoeTBVO.js";import{B as P}from"./floating-ui.react-C8ZV5sBu.js";import{u as M,L as V}from"./nb_NO-C7K6sktD.js";import{c as O}from"./composeEventHandlers-BGqjwrlF.js";import{u as w}from"./Loader-BfRqDWwu.js";import{S as F}from"./Checkmark-kkodfRXJ.js";import"./FlyttReservasjonModal-BWgBlWZc.js";import{u as y}from"./useLosKodeverk-DQdS-DYd.js";import{H as j}from"./VStack-BiqG47QD.js";import{T as S}from"./Tag-CDrJBapq.js";var x=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const q=g.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=x(e,["title","titleId"]);let i=M();return i=r?n||"title-"+i:void 0,s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},t),r?s.createElement("title",{id:i},r):null,s.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.25 3.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l5 5c.141.14.22.331.22.53v8.5c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25zm6.25 5.25c-.69 0-1.25-.56-1.25-1.25V3.75h-3.5v12.5h8.5v-7.5zm.25-3.94 2.44 2.44h-2.44zM6.502 7.75H5.75v12.5h8.5v-.748a.75.75 0 0 1 1.5 0v.998c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h1.002a.75.75 0 1 1 0 1.5",clipRule:"evenodd"}))});var Y=function(e,a,r,n){function t(i){return i instanceof r?i:new r(function(u){u(i)})}return new(r||(r=Promise))(function(i,u){function T(o){try{E(n.next(o))}catch(d){u(d)}}function v(o){try{E(n.throw(o))}catch(d){u(d)}}function E(o){o.done?i(o.value):t(o.value).then(T,v)}E((n=n.apply(e,[])).next())})};function C(e){return Y(this,void 0,void 0,function*(){try{yield navigator.clipboard.writeText(e)}catch{const n=`Kopier til utklippstavle: ${/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl"}+C, Enter`;window.prompt(n,e)}})}var z=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ue=g.forwardRef((e,a)=>{var{className:r,copyText:n,text:t,activeText:i,variant:u="neutral",onActiveChange:T,icon:v,activeIcon:E,activeDuration:o=2e3,title:d,iconPosition:p="left",onClick:I,size:f="medium"}=e,L=z(e,["className","copyText","text","activeText","variant","onActiveChange","icon","activeIcon","activeDuration","title","iconPosition","onClick","size"]);const[R,b]=g.useState(!1),m=g.useRef(),B=w("CopyButton"),{cn:c}=k(),l=U(!1);g.useEffect(()=>()=>{m.current&&clearTimeout(m.current)},[]);const K=()=>{m.current&&clearTimeout(m.current),C(n),b(!0),T?.(!0),m.current=window.setTimeout(()=>{b(!1),T?.(!1)},o)},A=i||B("activeText"),N=s.createElement(H,{useLegacy:!l?.isDarkside},R?E??s.createElement(F,{"aria-hidden":!!t,title:t?void 0:A,className:l?.isDarkside?c("navds-copybutton__icon"):void 0}):v??s.createElement(q,{"aria-hidden":!!t,title:t?void 0:d||B("title"),className:l?.isDarkside?c("navds-copybutton__icon"):void 0}));return l?.isDarkside?s.createElement(P,Object.assign({ref:a,type:"button",className:c("navds-copybutton",r)},L,{variant:u==="action"?"tertiary":"tertiary-neutral",onClick:O(I,K),iconPosition:p,icon:N,"data-active":R,size:f}),t?R?A:t:null):s.createElement("button",Object.assign({ref:a,type:"button"},L,{className:c("navds-copybutton",r,`navds-copybutton--${f}`,`navds-copybutton--${u}`,{"navds-copybutton--icon-only":!t,"navds-copybutton--icon-right":p==="right","navds-copybutton--active":R}),onClick:O(I,K)}),s.createElement("span",{className:c("navds-copybutton__content")},p==="left"&&N,t&&s.createElement(V,{as:"span",size:f==="medium"?"medium":"small"},R?A:t),p==="right"&&N))});function H({children:e,useLegacy:a}){const{cn:r}=k();return a?s.createElement("span",{className:r("navds-copybutton__icon")},e):e}const J=({oppgave:e})=>{const a=G(),r=y("BehandlingType"),n=y("FagsakYtelseType"),t=y("AndreKriterierType");return _.jsxs(j,{gap:"space-8",children:[_.jsx(S,{size:"small",variant:"success",title:n.find(i=>i.kode===e.fagsakYtelseType)?.navn,children:e.fagsakYtelseType}),_.jsx(S,{size:"small",variant:"warning-filled",title:r.find(i=>i.kode===e.behandlingstype)?.navn,children:W(a)[e.behandlingstype]}),e.andreKriterier.sort($).map(i=>_.jsx(S,{size:"small",variant:h[i],title:t.find(u=>u.kode===i)?.navn,children:Q(a,i,t)},i))]})},h={ENDRINGSSOKNAD:"alt1",REVURDERING_INNTEKTSMELDING:"alt1",KLAGE_PÅ_TILBAKEBETALING:"alt1",BERØRT_BEHANDLING:"alt1",PLEIEPENGER:"alt1",UTSATT_START:"alt1",TIL_BESLUTTER:"alt3",PAPIRSOKNAD:"alt3",VURDER_EØS_OPPTJENING:"alt3",ARBEID_INNTEKT:"alt3",TERMINBEKREFTELSE:"alt3",VURDER_FORMKRAV:"alt3",VURDER_FARESIGNALER:"alt3",VURDER_SYKDOM:"alt3",IKKE_VARSLET:"alt3",OVER_FIRE_RETTSGEBYR:"alt3",BARE_FAR_RETT:"alt2",UTLANDSSAK:"alt2",DØD:"alt2",EØS_SAK:"alt2",MOR_UKJENT_UTLAND:"alt2",KODE7_SAK:"alt2",NYTT_VEDTAK:"alt2",PRAKSIS_UTSETTELSE:"alt2",RETURNERT_FRA_BESLUTTER:"alt2",SAMMENSATT_KONTROLL:"alt2",NÆRING:"alt2",UTBETALING_TIL_BRUKER:"alt2"},D=Object.keys(h),$=(e,a)=>D.indexOf(e)-D.indexOf(a),W=e=>({"BT-008":e.formatMessage({id:"OppgaveLabels.Anke"}),"BT-006":e.formatMessage({id:"OppgaveLabels.Innsyn"}),"BT-002":e.formatMessage({id:"OppgaveLabels.Forstegang"}),"BT-003":e.formatMessage({id:"OppgaveLabels.Klage"}),"BT-004":e.formatMessage({id:"OppgaveLabels.Revurdering"}),"BT-007":e.formatMessage({id:"OppgaveLabels.Tilbake"}),"BT-009":e.formatMessage({id:"OppgaveLabels.TilbakeRev"}),"-":e.formatMessage({id:"OppgaveLabels.TilbakeRev"})}),Q=(e,a,r)=>a==="REVURDERING_INNTEKTSMELDING"?e.formatMessage({id:"OppgaveLabels.RevurderingInntekstmelding"}):a==="BERØRT_BEHANDLING"?e.formatMessage({id:"OppgaveLabels.BerortBehandling"}):a==="KLAGE_PÅ_TILBAKEBETALING"?e.formatMessage({id:"OppgaveLabels.KlageTilbakebetaling"}):a==="DØD"?e.formatMessage({id:"OppgaveLabels.Dod"}):a==="PAPIRSOKNAD"?e.formatMessage({id:"OppgaveLabels.Papirsoknad"}):a==="RETURNERT_FRA_BESLUTTER"?e.formatMessage({id:"OppgaveLabels.FraBeslutter"}):a==="NÆRING"?e.formatMessage({id:"OppgaveLabels.Naring"}):a==="UTBETALING_TIL_BRUKER"?e.formatMessage({id:"OppgaveLabels.Utbetaling"}):a==="VURDER_EØS_OPPTJENING"?e.formatMessage({id:"OppgaveLabels.VurderSed"}):r.find(n=>n.kode===a)?.navn;J.__docgenInfo={description:"",methods:[],displayName:"OppgaveLabels",props:{oppgave:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: FagsakYtelseType;
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
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"union",raw:`| 'TIL_BESLUTTER'
| 'PAPIRSOKNAD'
| 'UTBETALING_TIL_BRUKER'
| 'ENDRINGSSOKNAD'
| 'REVURDERING_INNTEKTSMELDING'
| 'KLAGE_PÅ_TILBAKEBETALING'
| 'BERØRT_BEHANDLING'
| 'PLEIEPENGER'
| 'UTSATT_START'
| 'ARBEID_INNTEKT'
| 'BARE_FAR_RETT'
| 'UTLANDSSAK'
| 'DØD'
| 'EØS_SAK'
| 'MOR_UKJENT_UTLAND'
| 'KODE7_SAK'
| 'NYTT_VEDTAK'
| 'PRAKSIS_UTSETTELSE'
| 'RETURNERT_FRA_BESLUTTER'
| 'SAMMENSATT_KONTROLL'
| 'NÆRING'
| 'TERMINBEKREFTELSE'
| 'VURDER_EØS_OPPTJENING'
| 'VURDER_FARESIGNALER'
| 'VURDER_SYKDOM'
| 'VURDER_FORMKRAV'
| 'IKKE_VARSLET'
| 'OVER_FIRE_RETTSGEBYR'`,elements:[{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'PAPIRSOKNAD'"},{name:"literal",value:"'UTBETALING_TIL_BRUKER'"},{name:"literal",value:"'ENDRINGSSOKNAD'"},{name:"literal",value:"'REVURDERING_INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_PÅ_TILBAKEBETALING'"},{name:"literal",value:"'BERØRT_BEHANDLING'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'UTSATT_START'"},{name:"literal",value:"'ARBEID_INNTEKT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'UTLANDSSAK'"},{name:"literal",value:"'DØD'"},{name:"literal",value:"'EØS_SAK'"},{name:"literal",value:"'MOR_UKJENT_UTLAND'"},{name:"literal",value:"'KODE7_SAK'"},{name:"literal",value:"'NYTT_VEDTAK'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'TERMINBEKREFTELSE'"},{name:"literal",value:"'VURDER_EØS_OPPTJENING'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'VURDER_SYKDOM'"},{name:"literal",value:"'VURDER_FORMKRAV'"},{name:"literal",value:"'IKKE_VARSLET'"},{name:"literal",value:"'OVER_FIRE_RETTSGEBYR'"}]}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"union",raw:`| 'UNDER_ARBEID'
| 'PÅ_VENT'
| 'FERDIG'
| 'TIL_BESLUTTER'
| 'RETURNERT_FRA_BESLUTTER'`,elements:[{name:"literal",value:"'UNDER_ARBEID'"},{name:"literal",value:"'PÅ_VENT'"},{name:"literal",value:"'FERDIG'"},{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: FagsakYtelseType;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}>`},description:""}}};export{ue as C,J as O,q as S};
