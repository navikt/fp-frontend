import{U as d,J as k,P as m,V as A,Q as S}from"./iframe-m7oD-utd.js";import{J as O,q as t,n as E}from"./nb_NO-h6LQxBQz.js";import"./preload-helper-PPVm8Dsz.js";const I=v=>{const c=d({locale:"nb-NO",messages:v},A());return g=>k.jsx(m,{value:c,children:g()})},{action:e}=__STORYBOOK_MODULE_ACTIONS__,y=I(E),l="Z123343",i=986547336994,u={brukernavn:l},p={journalpostId:i.toString(),aktørId:"9996923456799",fødselsnummer:"12048714373",opprettetDato:"2022-01-01",frist:"2022-02-01",ytelseType:"FP",enhetId:"4108",beskrivelse:"Inntektsmelding",kilde:"GOSYS"},f={journalpostId:i.toString(),tittel:t.BEKREFTELSE_ARBEIDSGIVER,kanal:"EESSI",kanOppretteSak:!0,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Svingen sag og høvleri",id:"999999999"},ytelseType:"FP",dokumenter:[{dokumentId:"999999999",tittel:t.BEKREFTELSE_ARBEIDSGIVER,varianter:[],lenke:""},{dokumentId:"999999998",tittel:t.SØKNAD_FORELDREPENGER_FØDSEL,varianter:[],lenke:""},{dokumentId:"999999997",tittel:t.ANNET,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:"FP",opprettetDato:"2022-01-02",status:"LOP"},{saksnummer:"155462542",ytelseType:"SVP",opprettetDato:"2022-01-02",status:"AVSL"},{saksnummer:"175419131",ytelseType:"FP",opprettetDato:"2022-01-03",status:"AVSL"}]},b={journalpostId:i.toString(),tittel:t.KLAGE,kanal:"SKAN_NETS",kanOppretteSak:!1,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Søker Søkersen",id:"12048714373"},ytelseType:"FP",dokumenter:[{dokumentId:"999999997",tittel:t.KLAGE,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:"FP",opprettetDato:"2022-01-02",status:"LOP"}]},D={title:"journalføring/journalføring/Journalpost",component:O,decorators:[y,S],args:{lasterBruker:!1,submitJournalføring:e("button-click"),reserverOppgave:e("button-click"),avbrytVisningAvJournalpost:e("button-click"),knyttJournalpostTilBruker:e("button-click"),forhåndsvisBruker:e("button-click"),flyttTilGosys:e("button-click")}},a={args:{oppgave:{...p,reservertAv:l},journalpost:f,navAnsatt:u}},s={args:{oppgave:{...p,reservertAv:l},journalpost:b,navAnsatt:u}},r={args:{...a.args,navAnsatt:{brukernavn:"X123456"}}},n={args:{...r.args,oppgave:p}},o={args:{...r.args,oppgave:{...p,kilde:"LOKAL"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const F=["VisOppgaveForSubmitReservertAvMeg","VisJournalpostKlage","VisOppgaveReservertAvAndre","VisOppgaveIkkeReservert","VisFlyttTilGosysOmKildeGosys"];export{o as VisFlyttTilGosysOmKildeGosys,s as VisJournalpostKlage,a as VisOppgaveForSubmitReservertAvMeg,n as VisOppgaveIkkeReservert,r as VisOppgaveReservertAvAndre,F as __namedExportsOrder,D as default};
