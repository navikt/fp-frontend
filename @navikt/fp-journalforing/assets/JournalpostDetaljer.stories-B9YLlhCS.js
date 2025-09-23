import{J as k,p,r as t,n as m}from"./nb_NO-C3xY74AO.js";import{U as A,J as S,P as E,V as O,Q as I}from"./iframe-JK6cxq4c.js";import"./preload-helper-PPVm8Dsz.js";const y=c=>{const g=A({locale:"nb-NO",messages:c},O());return d=>S.jsx(E,{value:g,children:d()})},{action:e}=__STORYBOOK_MODULE_ACTIONS__,f=y(m),u="Z123343",i=986547336994,v={brukernavn:u},l={journalpostId:i.toString(),aktørId:"9996923456799",fødselsnummer:"12048714373",opprettetDato:"2022-01-01",frist:"2022-02-01",ytelseType:"FP",enhetId:"4108",beskrivelse:"Inntektsmelding",kilde:"GOSYS"},T={journalpostId:i.toString(),tittel:t.BEKREFTELSE_ARBEIDSGIVER,kanal:"EESSI",kanOppretteSak:!0,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Svingen sag og høvleri",id:"999999999"},ytelseType:"FP",dokumenter:[{dokumentId:"999999999",tittel:t.BEKREFTELSE_ARBEIDSGIVER,varianter:[],lenke:""},{dokumentId:"999999998",tittel:t.SØKNAD_FORELDREPENGER_FØDSEL,varianter:[],lenke:""},{dokumentId:"999999997",tittel:t.ANNET,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:"FP",opprettetDato:"2022-01-02",status:p.LOPENDE},{saksnummer:"155462542",ytelseType:"SVP",opprettetDato:"2022-01-02",status:p.AVSLUTTET},{saksnummer:"175419131",ytelseType:"FP",opprettetDato:"2022-01-03",status:p.AVSLUTTET}]},b={journalpostId:i.toString(),tittel:t.KLAGE,kanal:"SKAN_NETS",kanOppretteSak:!1,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Søker Søkersen",id:"12048714373"},ytelseType:"FP",dokumenter:[{dokumentId:"999999997",tittel:t.KLAGE,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:"FP",opprettetDato:"2022-01-02",status:p.LOPENDE}]},F={title:"journalføring/journalføring/Journalpost",component:k,decorators:[f,I],args:{lasterBruker:!1,submitJournalføring:e("button-click"),reserverOppgave:e("button-click"),avbrytVisningAvJournalpost:e("button-click"),knyttJournalpostTilBruker:e("button-click"),forhåndsvisBruker:e("button-click"),flyttTilGosys:e("button-click")}},a={args:{oppgave:{...l,reservertAv:u},journalpost:T,navAnsatt:v}},s={args:{oppgave:{...l,reservertAv:u},journalpost:b,navAnsatt:v}},r={args:{...a.args,navAnsatt:{brukernavn:"X123456"}}},n={args:{...r.args,oppgave:l}},o={args:{...r.args,oppgave:{...l,kilde:"LOKAL"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: detaljertJournalpostMal,
    navAnsatt: navAnsattDefault
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: journalpostKlage,
    navAnsatt: navAnsattDefault
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveForSubmitReservertAvMeg.args,
    navAnsatt: {
      brukernavn: 'X123456'
    } as NavAnsatt
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: defaultOppgave
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: {
      ...defaultOppgave,
      kilde: 'LOKAL'
    }
  }
}`,...o.parameters?.docs?.source}}};const K=["VisOppgaveForSubmitReservertAvMeg","VisJournalpostKlage","VisOppgaveReservertAvAndre","VisOppgaveIkkeReservert","VisFlyttTilGosysOmKildeGosys"];export{o as VisFlyttTilGosysOmKildeGosys,s as VisJournalpostKlage,a as VisOppgaveForSubmitReservertAvMeg,n as VisOppgaveIkkeReservert,r as VisOppgaveReservertAvAndre,K as __namedExportsOrder,F as default};
