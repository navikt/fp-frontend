import{U as v,J as g,P as k,V as m,Q as S}from"./iframe-CKvkwakW.js";import{J as I,r as t,p as O}from"./nb_NO-gx9EGz7e.js";import"./preload-helper-PPVm8Dsz.js";const A=u=>{const d=v({locale:"nb-NO",messages:u},m());return c=>g.jsx(k,{value:d,children:c()})},{action:e}=__STORYBOOK_MODULE_ACTIONS__,E=A(O),p="Z123343",i=986547336994,l={journalpostId:i.toString(),aktørId:"9996923456799",fødselsnummer:"12048714373",opprettetDato:"2022-01-01",frist:"2022-02-01",ytelseType:"FP",enhetId:"4108",beskrivelse:"Inntektsmelding",kilde:"GOSYS"},y={journalpostId:i.toString(),tittel:t.BEKREFTELSE_ARBEIDSGIVER,kanal:"EESSI",kanOppretteSak:!0,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Svingen sag og høvleri",id:"999999999"},ytelseType:"FP",dokumenter:[{dokumentId:"999999999",tittel:t.BEKREFTELSE_ARBEIDSGIVER,varianter:[],lenke:""},{dokumentId:"999999998",tittel:t.SØKNAD_FORELDREPENGER_FØDSEL,varianter:[],lenke:""},{dokumentId:"999999997",tittel:t.ANNET,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:"FP",opprettetDato:"2022-01-02",status:"LOP"},{saksnummer:"155462542",ytelseType:"SVP",opprettetDato:"2022-01-02",status:"AVSL"},{saksnummer:"175419131",ytelseType:"FP",opprettetDato:"2022-01-03",status:"AVSL"}]},f={journalpostId:i.toString(),tittel:t.KLAGE,kanal:"SKAN_NETS",kanOppretteSak:!1,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Søker Søkersen",id:"12048714373"},ytelseType:"FP",dokumenter:[{dokumentId:"999999997",tittel:t.KLAGE,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:"FP",opprettetDato:"2022-01-02",status:"LOP"}]},j={title:"journalføring/journalføring/Journalpost",component:I,decorators:[E,S],args:{lasterBruker:!1,submitJournalføring:e("button-click"),reserverOppgave:e("button-click"),avbrytVisningAvJournalpost:e("button-click"),knyttJournalpostTilBruker:e("button-click"),forhåndsvisBruker:e("button-click"),flyttTilGosys:e("button-click")}},s={args:{oppgave:{...l,reservertAv:p},journalpost:y,ansattIdent:p}},a={args:{oppgave:{...l,reservertAv:p},journalpost:f,ansattIdent:p}},r={args:{...s.args,ansattIdent:"X123456"}},n={args:{...r.args,oppgave:l}},o={args:{...r.args,oppgave:{...l,kilde:"LOKAL"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: detaljertJournalpostMal,
    ansattIdent: saksbehandler
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: journalpostKlage,
    ansattIdent: saksbehandler
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveForSubmitReservertAvMeg.args,
    ansattIdent: 'X123456'
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
}`,...o.parameters?.docs?.source}}};const F=["VisOppgaveForSubmitReservertAvMeg","VisJournalpostKlage","VisOppgaveReservertAvAndre","VisOppgaveIkkeReservert","VisFlyttTilGosysOmKildeGosys"];export{o as VisFlyttTilGosysOmKildeGosys,a as VisJournalpostKlage,s as VisOppgaveForSubmitReservertAvMeg,n as VisOppgaveIkkeReservert,r as VisOppgaveReservertAvAndre,F as __namedExportsOrder,j as default};
