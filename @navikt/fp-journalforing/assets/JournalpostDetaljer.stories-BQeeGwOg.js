import{T as O,H as A,P as S,U as R,O as y,Q as t}from"./iframe-BKQ5WSlZ.js";import{J as I,l,r,n as g,O as c,m as T}from"./nb_NO-CfvQVj4H.js";const f=k=>{const E=O({locale:"nb-NO",messages:k},R());return m=>A.jsx(S,{value:E,children:m()})},{action:e}=__STORYBOOK_MODULE_ACTIONS__,D=f(T),u="Z123343",v=986547336994,d={brukernavn:u},i={journalpostId:v.toString(),aktørId:"9996923456799",fødselsnummer:"12048714373",opprettetDato:"2022-01-01",frist:"2022-02-01",ytelseType:"FP",enhetId:"4108",beskrivelse:"Inntektsmelding",kilde:c.GOSYS},b={journalpostId:v.toString(),tittel:r.BEKREFTELSE_ARBEIDSGIVER,kanal:g.EESSI,kanOppretteSak:!0,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Svingen sag og høvleri",id:"999999999"},ytelseType:t.FORELDREPENGER,dokumenter:[{dokumentId:"999999999",tittel:r.BEKREFTELSE_ARBEIDSGIVER,varianter:[],lenke:""},{dokumentId:"999999998",tittel:r.SØKNAD_FORELDREPENGER_FØDSEL,varianter:[],lenke:""},{dokumentId:"999999997",tittel:r.ANNET,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:t.FORELDREPENGER,opprettetDato:"2022-01-02",status:l.LOPENDE},{saksnummer:"155462542",ytelseType:t.SVANGERSKAPSPENGER,opprettetDato:"2022-01-02",status:l.AVSLUTTET},{saksnummer:"175419131",ytelseType:t.FORELDREPENGER,opprettetDato:"2022-01-03",status:l.AVSLUTTET}]},L={journalpostId:v.toString(),tittel:r.KLAGE,kanal:g.SKAN_NETS,kanOppretteSak:!1,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Søker Søkersen",id:"12048714373"},ytelseType:t.FORELDREPENGER,dokumenter:[{dokumentId:"999999997",tittel:r.KLAGE,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:t.FORELDREPENGER,opprettetDato:"2022-01-02",status:l.LOPENDE}]},N={title:"journalføring/journalføring/Journalpost",component:I,decorators:[D,y],args:{lasterBruker:!1,submitJournalføring:e("button-click"),reserverOppgave:e("button-click"),avbrytVisningAvJournalpost:e("button-click"),knyttJournalpostTilBruker:e("button-click"),forhåndsvisBruker:e("button-click"),flyttTilGosys:e("button-click")}},s={args:{oppgave:{...i,reservertAv:u},journalpost:b,navAnsatt:d}},n={args:{oppgave:{...i,reservertAv:u},journalpost:L,navAnsatt:d}},a={args:{...s.args,navAnsatt:{brukernavn:"X123456"}}},o={args:{...a.args,oppgave:i}},p={args:{...a.args,oppgave:{...i,kilde:c.LOKAL}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      kilde: OppgaveKilde.LOKAL
    }
  }
}`,...p.parameters?.docs?.source}}};const j=["VisOppgaveForSubmitReservertAvMeg","VisJournalpostKlage","VisOppgaveReservertAvAndre","VisOppgaveIkkeReservert","VisFlyttTilGosysOmKildeGosys"];export{p as VisFlyttTilGosysOmKildeGosys,n as VisJournalpostKlage,s as VisOppgaveForSubmitReservertAvMeg,o as VisOppgaveIkkeReservert,a as VisOppgaveReservertAvAndre,j as __namedExportsOrder,N as default};
