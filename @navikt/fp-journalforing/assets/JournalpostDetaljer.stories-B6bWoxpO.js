import{c as D,P as V,a as F,b as e,w as G,J as L,F as p,d as a,D as s,e as j,O as S,m as N}from"./nb_NO-BSE1OqGQ.js";import{j as P}from"./jsx-runtime-D_zvdyIk.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-D6E2mMEQ.js";import"./iframe-Cmw5g9TI.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./dayjs.min-DkLNzaWO.js";const h=b=>{const T=D({locale:"nb-NO",messages:b},F());return f=>P.jsx(V,{value:T,children:f()})},K=h(N),y="Z123343",I=986547336994,J={brukernavn:y},l={journalpostId:I.toString(),aktørId:"9996923456799",fødselsnummer:"12048714373",opprettetDato:"2022-01-01",frist:"2022-02-01",ytelseType:"FP",enhetId:"4108",beskrivelse:"Inntektsmelding",kilde:S.GOSYS},B={journalpostId:I.toString(),tittel:s.BEKREFTELSE_ARBEIDSGIVER,kanal:j.EESSI,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Svingen sag og høvleri",id:"999999999"},ytelseType:a.FORELDREPENGER,dokumenter:[{dokumentId:"999999999",tittel:s.BEKREFTELSE_ARBEIDSGIVER,varianter:[],lenke:""},{dokumentId:"999999998",tittel:s.SØKNAD_FORELDREPENGER_FØDSEL,varianter:[],lenke:""},{dokumentId:"999999997",tittel:s.ANNET,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:a.FORELDREPENGER,opprettetDato:"2022-01-02",status:p.LOPENDE},{saksnummer:"155462542",ytelseType:a.SVANGERSKAPSPENGER,opprettetDato:"2022-01-02",status:p.AVSLUTTET},{saksnummer:"175419131",ytelseType:a.FORELDREPENGER,opprettetDato:"2022-01-03",status:p.AVSLUTTET}]},q={title:"journalføring/journalføring/Journalpost",component:L,decorators:[K,G],args:{lasterBruker:!1,submitJournalføring:e("button-click"),reserverOppgave:e("button-click"),avbrytVisningAvJournalpost:e("button-click"),knyttJournalpostTilBruker:e("button-click"),forhåndsvisBruker:e("button-click"),flyttTilGosys:e("button-click")}},r={args:{oppgave:{...l,reservertAv:y},journalpost:B,navAnsatt:J}},t={args:{...r.args,navAnsatt:{brukernavn:"X123456"}}},n={args:{...t.args,oppgave:l}},o={args:{...t.args,oppgave:{...l,kilde:S.LOKAL}}};var i,v,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: detaljertJournalpostMal,
    navAnsatt: navAnsattDefault
  }
}`,...(u=(v=r.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var c,g,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveForSubmitReservertAvMeg.args,
    navAnsatt: {
      brukernavn: 'X123456'
    } as NavAnsatt
  }
}`,...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var m,k,E;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: defaultOppgave
  }
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var A,R,O;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: {
      ...defaultOppgave,
      kilde: OppgaveKilde.LOKAL
    }
  }
}`,...(O=(R=o.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const z=["VisOppgaveForSubmitReservertAvMeg","VisOppgaveReservertAvAndre","VisOppgaveIkkeReservert","VisFlyttTilGosysOmKildeGosys"];export{o as VisFlyttTilGosysOmKildeGosys,r as VisOppgaveForSubmitReservertAvMeg,n as VisOppgaveIkkeReservert,t as VisOppgaveReservertAvAndre,z as __namedExportsOrder,q as default};
