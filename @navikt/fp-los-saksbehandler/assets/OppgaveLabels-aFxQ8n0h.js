import{r as y,R as o,c as K,b as w,u as j,j as R}from"./iframe-XJysTbVt.js";import{B as M}from"./floating-ui.react-BvpS9y_f.js";import{u as x,L as q}from"./nb_NO-CO3HAz6Y.js";import{c as L}from"./composeEventHandlers-CltQEKyj.js";import{u as U}from"./Loader-BV-Jh8wD.js";import{S as P}from"./Checkmark-C8HH494n.js";import{A as t}from"./andreKriterierType-Cg0VWsVP.js";import"./FlyttReservasjonModal-BBbHltuO.js";import{u as A}from"./useLosKodeverk-BvLUDjJK.js";import{H as G}from"./VStack-JRQgy8gX.js";import{T as _}from"./Tag-B8W21FA_.js";var C=function(e,r){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};const V=y.forwardRef((e,r)=>{var{title:i,titleId:n}=e,a=C(e,["title","titleId"]);let s=x();return s=i?n||"title-"+s:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),i?o.createElement("title",{id:s},i):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.25 3.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l5 5c.141.14.22.331.22.53v8.5c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25zm6.25 5.25c-.69 0-1.25-.56-1.25-1.25V3.75h-3.5v12.5h8.5v-7.5zm.25-3.94 2.44 2.44h-2.44zM6.502 7.75H5.75v12.5h8.5v-.748a.75.75 0 0 1 1.5 0v.998c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h1.002a.75.75 0 1 1 0 1.5",clipRule:"evenodd"}))});var F=function(e,r,i,n){function a(s){return s instanceof i?s:new i(function(u){u(s)})}return new(i||(i=Promise))(function(s,u){function v(d){try{g(n.next(d))}catch(c){u(c)}}function p(d){try{g(n.throw(d))}catch(c){u(c)}}function g(d){d.done?s(d.value):a(d.value).then(v,p)}g((n=n.apply(e,[])).next())})};function z(e){return F(this,void 0,void 0,function*(){try{yield navigator.clipboard.writeText(e)}catch{const n=`Kopier til utklippstavle: ${/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl"}+C, Enter`;window.prompt(n,e)}})}var Y=function(e,r){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};const ue=y.forwardRef((e,r)=>{var{className:i,copyText:n,text:a,activeText:s,variant:u="neutral",onActiveChange:v,icon:p,activeIcon:g,activeDuration:d=2e3,title:c,iconPosition:b="left",onClick:B,size:E="medium"}=e,O=Y(e,["className","copyText","text","activeText","variant","onActiveChange","icon","activeIcon","activeDuration","title","iconPosition","onClick","size"]);const[m,I]=y.useState(!1),f=y.useRef(),S=U("CopyButton"),{cn:T}=K(),l=w(!1);y.useEffect(()=>()=>{f.current&&clearTimeout(f.current)},[]);const N=()=>{f.current&&clearTimeout(f.current),z(n),I(!0),v?.(!0),f.current=window.setTimeout(()=>{I(!1),v?.(!1)},d)},h=s||S("activeText"),k=o.createElement(H,{useLegacy:!l?.isDarkside},m?g??o.createElement(P,{"aria-hidden":!!a,title:a?void 0:h,className:l?.isDarkside?T("navds-copybutton__icon"):void 0}):p??o.createElement(V,{"aria-hidden":!!a,title:a?void 0:c||S("title"),className:l?.isDarkside?T("navds-copybutton__icon"):void 0}));return l?.isDarkside?o.createElement(M,Object.assign({ref:r,type:"button",className:T("navds-copybutton",i)},O,{variant:u==="action"?"tertiary":"tertiary-neutral",onClick:L(B,N),iconPosition:b,icon:k,"data-active":m,size:E}),a?m?h:a:null):o.createElement("button",Object.assign({ref:r,type:"button"},O,{className:T("navds-copybutton",i,`navds-copybutton--${E}`,`navds-copybutton--${u}`,{"navds-copybutton--icon-only":!a,"navds-copybutton--icon-right":b==="right","navds-copybutton--active":m}),onClick:L(B,N)}),o.createElement("span",{className:T("navds-copybutton__content")},b==="left"&&k,a&&o.createElement(q,{as:"span",size:E==="medium"?"medium":"small"},m?h:a),b==="right"&&k))});function H({children:e,useLegacy:r}){const{cn:i}=K();return r?o.createElement("span",{className:i("navds-copybutton__icon")},e):e}const $=({oppgave:e})=>{const r=j(),i=A("BehandlingType"),n=A("FagsakYtelseType"),a=A("AndreKriterierType");return R.jsxs(G,{gap:"space-8",children:[R.jsx(_,{size:"small",variant:"success",title:n.find(s=>s.kode===e.fagsakYtelseType)?.navn,children:e.fagsakYtelseType}),R.jsx(_,{size:"small",variant:"warning-filled",title:i.find(s=>s.kode===e.behandlingstype)?.navn,children:W(r)[e.behandlingstype]}),e.andreKriterier.sort(J).map(s=>R.jsx(_,{size:"small",variant:D[s],title:a.find(u=>u.kode===s)?.navn,children:Q(r,s,a)},s))]})},D={[t.ENDRINGSSOKNAD]:"alt1",[t.REVURDERING_INNTEKTSMELDING]:"alt1",[t.KLAGE_PÅ_TILBAKEBETALING]:"alt1",[t.BERØRT_BEHANDLING]:"alt1",[t.PLEIEPENGER]:"alt1",[t.UTSATT_START]:"alt1",[t.TIL_BESLUTTER]:"alt3",[t.PAPIRSOKNAD]:"alt3",[t.VURDER_EØS_OPPTJENING]:"alt3",[t.ARBEID_INNTEKT]:"alt3",[t.TERMINBEKREFTELSE]:"alt3",[t.VURDER_FORMKRAV]:"alt3",[t.VURDER_FARESIGNALER]:"alt3",[t.VURDER_SYKDOM]:"alt3",[t.IKKE_VARSLET]:"alt3",[t.OVER_FIRE_RETTSGEBYR]:"alt3",[t.BARE_FAR_RETT]:"alt2",[t.UTLANDSSAK]:"alt2",[t.DØD]:"alt2",[t.EØS_SAK]:"alt2",[t.MOR_UKJENT_UTLAND]:"alt2",[t.KODE7_SAK]:"alt2",[t.NYTT_VEDTAK]:"alt2",[t.PRAKSIS_UTSETTELSE]:"alt2",[t.RETURNERT_FRA_BESLUTTER]:"alt2",[t.SAMMENSATT_KONTROLL]:"alt2",[t.NÆRING]:"alt2",[t.UTBETALING_TIL_BRUKER]:"alt2"},J=(e,r)=>{const i=Object.keys(D);return i.indexOf(e)-i.indexOf(r)},W=e=>({"BT-008":e.formatMessage({id:"OppgaveLabels.Anke"}),"BT-006":e.formatMessage({id:"OppgaveLabels.Innsyn"}),"BT-002":e.formatMessage({id:"OppgaveLabels.Forstegang"}),"BT-003":e.formatMessage({id:"OppgaveLabels.Klage"}),"BT-004":e.formatMessage({id:"OppgaveLabels.Revurdering"}),"BT-007":e.formatMessage({id:"OppgaveLabels.Tilbake"}),"BT-009":e.formatMessage({id:"OppgaveLabels.TilbakeRev"}),"-":e.formatMessage({id:"OppgaveLabels.TilbakeRev"})}),Q=(e,r,i)=>t.REVURDERING_INNTEKTSMELDING===r?e.formatMessage({id:"OppgaveLabels.RevurderingInntekstmelding"}):t.BERØRT_BEHANDLING===r?e.formatMessage({id:"OppgaveLabels.BerortBehandling"}):t.KLAGE_PÅ_TILBAKEBETALING===r?e.formatMessage({id:"OppgaveLabels.KlageTilbakebetaling"}):t.DØD===r?e.formatMessage({id:"OppgaveLabels.Dod"}):t.PAPIRSOKNAD===r?e.formatMessage({id:"OppgaveLabels.Papirsoknad"}):t.RETURNERT_FRA_BESLUTTER===r?e.formatMessage({id:"OppgaveLabels.FraBeslutter"}):t.NÆRING===r?e.formatMessage({id:"OppgaveLabels.Naring"}):t.UTBETALING_TIL_BRUKER===r?e.formatMessage({id:"OppgaveLabels.Utbetaling"}):t.VURDER_EØS_OPPTJENING===r?e.formatMessage({id:"OppgaveLabels.VurderSed"}):i.find(n=>n.kode===r)?.navn;$.__docgenInfo={description:"",methods:[],displayName:"OppgaveLabels",props:{oppgave:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};export{ue as C,$ as O,V as S};
