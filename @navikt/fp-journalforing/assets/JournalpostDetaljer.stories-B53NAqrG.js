import{J as E,p as l,r as t,n as m}from"./nb_NO-BdRsc6gm.js";import{V as A,J as S,P as O,W as R,Q as y,U as r}from"./iframe-Bd26_ROH.js";import"./preload-helper-D9Z9MdNV.js";const I=g=>{const d=A({locale:"nb-NO",messages:g},R());return k=>S.jsx(O,{value:d,children:k()})},{action:e}=__STORYBOOK_MODULE_ACTIONS__,T=I(m),u="Z123343",v=986547336994,c={brukernavn:u},i={journalpostId:v.toString(),aktørId:"9996923456799",fødselsnummer:"12048714373",opprettetDato:"2022-01-01",frist:"2022-02-01",ytelseType:"FP",enhetId:"4108",beskrivelse:"Inntektsmelding",kilde:"GOSYS"},f={journalpostId:v.toString(),tittel:t.BEKREFTELSE_ARBEIDSGIVER,kanal:"EESSI",kanOppretteSak:!0,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Svingen sag og høvleri",id:"999999999"},ytelseType:r.FORELDREPENGER,dokumenter:[{dokumentId:"999999999",tittel:t.BEKREFTELSE_ARBEIDSGIVER,varianter:[],lenke:""},{dokumentId:"999999998",tittel:t.SØKNAD_FORELDREPENGER_FØDSEL,varianter:[],lenke:""},{dokumentId:"999999997",tittel:t.ANNET,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:r.FORELDREPENGER,opprettetDato:"2022-01-02",status:l.LOPENDE},{saksnummer:"155462542",ytelseType:r.SVANGERSKAPSPENGER,opprettetDato:"2022-01-02",status:l.AVSLUTTET},{saksnummer:"175419131",ytelseType:r.FORELDREPENGER,opprettetDato:"2022-01-03",status:l.AVSLUTTET}]},D={journalpostId:v.toString(),tittel:t.KLAGE,kanal:"SKAN_NETS",kanOppretteSak:!1,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Søker Søkersen",id:"12048714373"},ytelseType:r.FORELDREPENGER,dokumenter:[{dokumentId:"999999997",tittel:t.KLAGE,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:r.FORELDREPENGER,opprettetDato:"2022-01-02",status:l.LOPENDE}]},N={title:"journalføring/journalføring/Journalpost",component:E,decorators:[T,y],args:{lasterBruker:!1,submitJournalføring:e("button-click"),reserverOppgave:e("button-click"),avbrytVisningAvJournalpost:e("button-click"),knyttJournalpostTilBruker:e("button-click"),forhåndsvisBruker:e("button-click"),flyttTilGosys:e("button-click")}},s={args:{oppgave:{...i,reservertAv:u},journalpost:f,navAnsatt:c}},n={args:{oppgave:{...i,reservertAv:u},journalpost:D,navAnsatt:c}},a={args:{...s.args,navAnsatt:{brukernavn:"X123456"}}},o={args:{...a.args,oppgave:i}},p={args:{...a.args,oppgave:{...i,kilde:"LOKAL"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: detaljertJournalpostMal,
    navAnsatt: navAnsattDefault
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: journalpostKlage,
    navAnsatt: navAnsattDefault
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveForSubmitReservertAvMeg.args,
    navAnsatt: {
      brukernavn: 'X123456'
    } as NavAnsatt
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: defaultOppgave
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: {
      ...defaultOppgave,
      kilde: 'LOKAL'
    }
  }
}`,...p.parameters?.docs?.source}}};const j=["VisOppgaveForSubmitReservertAvMeg","VisJournalpostKlage","VisOppgaveReservertAvAndre","VisOppgaveIkkeReservert","VisFlyttTilGosysOmKildeGosys"];export{p as VisFlyttTilGosysOmKildeGosys,n as VisJournalpostKlage,s as VisOppgaveForSubmitReservertAvMeg,o as VisOppgaveIkkeReservert,a as VisOppgaveReservertAvAndre,j as __namedExportsOrder,N as default};
