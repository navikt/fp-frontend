import{v as re}from"./v4-CQkTLCs1.js";import{c as ae,P as se,a as ne,Q as oe,b as ie,O as W,D as c,J as pe,F as u,d,e as le,m as ce}from"./nb_NO-6vGy-1bq.js";import{j as v}from"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./index-rX-Bn4lm.js";import"./dayjs.min-DN4LN79F.js";const ue=e=>{const t=ae({locale:"nb-NO",messages:e},ne());return a=>v.jsx(se,{value:t,children:a()})},{addons:de}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:ve}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:f}=__STORYBOOK_MODULE_GLOBAL__;var ge="storybook/actions",me=`${ge}/action-event`,Oe={depth:10,clearOnStoryChange:!0,limit:50},z=(e,t)=>{let r=Object.getPrototypeOf(e);return!r||t(r)?r:z(r,t)},Ee=e=>!!(typeof e=="object"&&e&&z(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),Re=e=>{if(Ee(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let r=Object.getOwnPropertyDescriptor(t,"view"),a=r==null?void 0:r.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...r,value:Object.create(a.constructor.prototype)}),t}return e},Ae=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?re():Date.now().toString(36)+Math.random().toString(36).substring(2);function p(e,t={}){let r={...Oe,...t},a=function(...O){var R,A;if(t.implicit){let y=(R="__STORYBOOK_PREVIEW__"in f?f.__STORYBOOK_PREVIEW__:void 0)==null?void 0:R.storyRenders.find(l=>l.phase==="playing"||l.phase==="rendering");if(y){let l=!((A=window==null?void 0:window.FEATURES)!=null&&A.disallowImplicitActionsInRenderV8),k=new ve({phase:y.phase,name:e,deprecated:l});if(l)console.warn(k);else throw k}}let $=de.getChannel(),Z=Ae(),H=5,E=O.map(Re),ee=O.length>1?E:E[0],te={id:Z,count:0,data:{name:e,args:ee},options:{...r,maxDepth:H+(r.depth||3),allowFunction:r.allowFunction||!1}};$.emit(me,te)};return a.isAction=!0,a.implicit=t.implicit,a}const g=e=>{const t=new oe({defaultOptions:{queries:{retry:!1}}});return v.jsx(ie,{client:t,children:v.jsx(e,{})})};g.__docgenInfo={description:"",methods:[],displayName:"withQueryClient"};g.__docgenInfo={description:"",methods:[],displayName:"withQueryClient"};const ye=ue(ce),X="Z123343",q=986547336994,ke={brukernavn:X},m={journalpostId:q.toString(),aktørId:"9996923456799",fødselsnummer:"12048714373",opprettetDato:"2022-01-01",frist:"2022-02-01",ytelseType:"FP",enhetId:"4108",beskrivelse:"Inntektsmelding",kilde:W.GOSYS},fe={journalpostId:q.toString(),tittel:c.BEKREFTELSE_ARBEIDSGIVER,kanal:pe.EESSI,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Svingen sag og høvleri",id:"999999999"},ytelseType:u.FORELDREPENGER,dokumenter:[{dokumentId:"999999999",tittel:c.BEKREFTELSE_ARBEIDSGIVER,varianter:[],lenke:""},{dokumentId:"999999998",tittel:c.SØKNAD_FORELDREPENGER_FØDSEL,varianter:[],lenke:""},{dokumentId:"999999997",tittel:c.ANNET,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:u.FORELDREPENGER,opprettetDato:"2022-01-02",status:d.LOPENDE},{saksnummer:"155462542",ytelseType:u.SVANGERSKAPSPENGER,opprettetDato:"2022-01-02",status:d.AVSLUTTET},{saksnummer:"175419131",ytelseType:u.FORELDREPENGER,opprettetDato:"2022-01-03",status:d.AVSLUTTET}]},Te={title:"journalføring/journalføring/Journalpost",component:le,decorators:[ye,g],args:{lasterBruker:!1,submitJournalføring:p("button-click"),reserverOppgave:p("button-click"),avbrytVisningAvJournalpost:p("button-click"),knyttJournalpostTilBruker:p("button-click"),forhåndsvisBruker:p("button-click"),flyttTilGosys:p("button-click")}},n={args:{oppgave:{...m,reservertAv:X},journalpost:fe,navAnsatt:ke}},s={args:{...n.args,navAnsatt:{brukernavn:"X123456"}}},o={args:{...s.args,oppgave:m}},i={args:{...s.args,oppgave:{...m,kilde:W.LOKAL}}};var S,_,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: detaljertJournalpostMal,
    navAnsatt: navAnsattDefault
  }
}`,...(I=(_=n.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var b,h,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveForSubmitReservertAvMeg.args,
    navAnsatt: {
      brukernavn: 'X123456'
    } as NavAnsatt
  }
}`,...(D=(h=s.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var T,V,j;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: defaultOppgave
  }
}`,...(j=(V=o.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var P,L,F;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: {
      ...defaultOppgave,
      kilde: OppgaveKilde.LOKAL
    }
  }
}`,...(F=(L=i.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var w,K,N;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: detaljertJournalpostMal,
    navAnsatt: navAnsattDefault
  }
}`,...(N=(K=n.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var G,B,M;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveForSubmitReservertAvMeg.args,
    navAnsatt: {
      brukernavn: 'X123456'
    } as NavAnsatt
  }
}`,...(M=(B=s.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var C,J,x;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: defaultOppgave
  }
}`,...(x=(J=o.parameters)==null?void 0:J.docs)==null?void 0:x.source}}};var Y,Q,U;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: {
      ...defaultOppgave,
      kilde: OppgaveKilde.LOKAL
    }
  }
}`,...(U=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Ve=["VisOppgaveForSubmitReservertAvMeg","VisOppgaveReservertAvAndre","VisOppgaveIkkeReservert","VisFlyttTilGosysOmKildeGosys"];export{i as VisFlyttTilGosysOmKildeGosys,n as VisOppgaveForSubmitReservertAvMeg,o as VisOppgaveIkkeReservert,s as VisOppgaveReservertAvAndre,Ve as __namedExportsOrder,Te as default};
