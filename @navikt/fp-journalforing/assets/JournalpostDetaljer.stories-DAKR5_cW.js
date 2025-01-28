import{v as ee}from"./v4-CtRu48qb.js";import{c as te,P as re,a as ae,O as C,D as c,J as se,F as u,b as d,d as ne,w as oe,m as pe}from"./nb_NO-CTeaWcSK.js";import{j as ie}from"./jsx-runtime-CLpGMVip.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dayjs.min-DPY8FYmS.js";const le=e=>{const t=te({locale:"nb-NO",messages:e},ae());return a=>ie.jsx(re,{value:t,children:a()})},{addons:ce}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:ue}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:k}=__STORYBOOK_MODULE_GLOBAL__;var de="storybook/actions",ve=`${de}/action-event`,ge={depth:10,clearOnStoryChange:!0,limit:50},W=(e,t)=>{let r=Object.getPrototypeOf(e);return!r||t(r)?r:W(r,t)},me=e=>!!(typeof e=="object"&&e&&W(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),Oe=e=>{if(me(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let r=Object.getOwnPropertyDescriptor(t,"view"),a=r==null?void 0:r.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...r,value:Object.create(a.constructor.prototype)}),t}return e},Ee=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?ee():Date.now().toString(36)+Math.random().toString(36).substring(2);function i(e,t={}){let r={...ge,...t},a=function(...g){var O,E;if(t.implicit){let R=(O="__STORYBOOK_PREVIEW__"in k?k.__STORYBOOK_PREVIEW__:void 0)==null?void 0:O.storyRenders.find(l=>l.phase==="playing"||l.phase==="rendering");if(R){let l=!((E=window==null?void 0:window.FEATURES)!=null&&E.disallowImplicitActionsInRenderV8),A=new ue({phase:R.phase,name:e,deprecated:l});if(l)console.warn(A);else throw A}}let $=ce.getChannel(),Q=Ee(),Z=5,m=g.map(Oe),q=g.length>1?m:m[0],H={id:Q,count:0,data:{name:e,args:q},options:{...r,maxDepth:Z+(r.depth||3),allowFunction:r.allowFunction||!1}};$.emit(ve,H)};return a.isAction=!0,a.implicit=t.implicit,a}const Re=le(pe),z="Z123343",X=986547336994,Ae={brukernavn:z},v={journalpostId:X.toString(),aktørId:"9996923456799",fødselsnummer:"12048714373",opprettetDato:"2022-01-01",frist:"2022-02-01",ytelseType:"FP",enhetId:"4108",beskrivelse:"Inntektsmelding",kilde:C.GOSYS},ke={journalpostId:X.toString(),tittel:c.BEKREFTELSE_ARBEIDSGIVER,kanal:se.EESSI,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Svingen sag og høvleri",id:"999999999"},ytelseType:u.FORELDREPENGER,dokumenter:[{dokumentId:"999999999",tittel:c.BEKREFTELSE_ARBEIDSGIVER,varianter:[],lenke:""},{dokumentId:"999999998",tittel:c.SØKNAD_FORELDREPENGER_FØDSEL,varianter:[],lenke:""},{dokumentId:"999999997",tittel:c.ANNET,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:u.FORELDREPENGER,opprettetDato:"2022-01-02",status:d.LOPENDE},{saksnummer:"155462542",ytelseType:u.SVANGERSKAPSPENGER,opprettetDato:"2022-01-02",status:d.AVSLUTTET},{saksnummer:"175419131",ytelseType:u.FORELDREPENGER,opprettetDato:"2022-01-03",status:d.AVSLUTTET}]},Ie={title:"journalføring/journalføring/Journalpost",component:ne,decorators:[Re,oe],args:{lasterBruker:!1,submitJournalføring:i("button-click"),reserverOppgave:i("button-click"),avbrytVisningAvJournalpost:i("button-click"),knyttJournalpostTilBruker:i("button-click"),forhåndsvisBruker:i("button-click"),flyttTilGosys:i("button-click")}},n={args:{oppgave:{...v,reservertAv:z},journalpost:ke,navAnsatt:Ae}},s={args:{...n.args,navAnsatt:{brukernavn:"X123456"}}},o={args:{...s.args,oppgave:v}},p={args:{...s.args,oppgave:{...v,kilde:C.LOKAL}}};var S,f,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: detaljertJournalpostMal,
    navAnsatt: navAnsattDefault
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var _,b,D;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveForSubmitReservertAvMeg.args,
    navAnsatt: {
      brukernavn: 'X123456'
    } as NavAnsatt
  }
}`,...(D=(b=s.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var I,h,T;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: defaultOppgave
  }
}`,...(T=(h=o.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var V,j,P;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: {
      ...defaultOppgave,
      kilde: OppgaveKilde.LOKAL
    }
  }
}`,...(P=(j=p.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var L,F,K;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: detaljertJournalpostMal,
    navAnsatt: navAnsattDefault
  }
}`,...(K=(F=n.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var w,N,G;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveForSubmitReservertAvMeg.args,
    navAnsatt: {
      brukernavn: 'X123456'
    } as NavAnsatt
  }
}`,...(G=(N=s.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var B,M,J;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: defaultOppgave
  }
}`,...(J=(M=o.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var Y,x,U;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: {
      ...defaultOppgave,
      kilde: OppgaveKilde.LOKAL
    }
  }
}`,...(U=(x=p.parameters)==null?void 0:x.docs)==null?void 0:U.source}}};const he=["VisOppgaveForSubmitReservertAvMeg","VisOppgaveReservertAvAndre","VisOppgaveIkkeReservert","VisFlyttTilGosysOmKildeGosys"];export{p as VisFlyttTilGosysOmKildeGosys,n as VisOppgaveForSubmitReservertAvMeg,o as VisOppgaveIkkeReservert,s as VisOppgaveReservertAvAndre,he as __namedExportsOrder,Ie as default};
