import{j as S}from"./jsx-runtime-9c4ae004.js";import{a as t}from"./chunk-AY7I2SME-c7b6cf8a.js";import{J as A,B as T,O as V,D as n,a as y,R as o,E as s,m as B}from"./oppgavePrioritet-0befa8d2.js";import"./index-1b03fe98.js";const I=T(B),p="Z123343",N={brukernavn:p},i={id:600,journalpostId:"12345125",aktørId:"9996923456799",fødselsnummer:"12048714373",opprettetDato:"2022-01-01",frist:"2022-02-01",ytelseType:"FP",enhetId:"4108",prioritet:V.NORM,beskrivelse:"Inntektsmelding",versjon:1},l={journalpostId:"986547336994",tittel:n.BEKREFTELSE_ARBEIDSGIVER,kanal:y.EESSI,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Svingen sag og høvleri",id:"999999999"},ytelseType:o.FORELDREPENGER,dokumenter:[{dokumentId:"999999999",tittel:n.BEKREFTELSE_ARBEIDSGIVER,varianter:[],lenke:""},{dokumentId:"999999998",tittel:n.SØKNAD_FORELDREPENGER_FØDSEL,varianter:[],lenke:""},{dokumentId:"999999997",tittel:n.ANNET,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:o.FORELDREPENGER,opprettetDato:"2022-01-02",status:s.LOPENDE},{saksnummer:"155462542",ytelseType:o.SVANGERSKAPSPENGER,opprettetDato:"2022-01-02",status:s.AVSLUTTET},{saksnummer:"175419131",ytelseType:o.FORELDREPENGER,opprettetDato:"2022-01-03",status:s.AVSLUTTET}]},G={title:"journalføring/journalføring/Journalpost",component:A,decorators:[I]},u=({detaljertJournalpost:f,oppgave:O,submitJournalføring:R,reserverOppgave:j,navAnsatt:D})=>S.jsx(A,{lasterBruker:!1,avbrytVisningAvJournalpost:t("button-click"),oppgave:O,journalpost:f,submitJournalføring:R,knyttJournalpostTilBruker:t("button-click"),forhåndsvisBruker:t("button-click"),reserverOppgave:j,navAnsatt:D,oppdaterValgtOppgave:t("button-click")}),e=u.bind({});e.args={oppgave:{...i,reservertAv:p},detaljertJournalpost:l,submitJournalføring:t("button-click"),reserverOppgave:t("button-click"),navAnsatt:N};const r=u.bind({});r.args={oppgave:{...i,reservertAv:p},detaljertJournalpost:l,submitJournalføring:t("button-click"),reserverOppgave:t("button-click"),navAnsatt:{brukernavn:"X123456"}};const a=u.bind({});a.args={oppgave:i,detaljertJournalpost:l,submitJournalføring:t("button-click"),reserverOppgave:t("button-click"),navAnsatt:{brukernavn:"X123456"}};var v,c,g;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`({
  detaljertJournalpost,
  oppgave,
  submitJournalføring,
  reserverOppgave,
  navAnsatt
}) => <JournalpostDetaljer lasterBruker={false} avbrytVisningAvJournalpost={(action('button-click') as () => void)} oppgave={oppgave} journalpost={detaljertJournalpost} submitJournalføring={submitJournalføring} knyttJournalpostTilBruker={(action('button-click') as () => void)} forhåndsvisBruker={(action('button-click') as () => void)} reserverOppgave={reserverOppgave} navAnsatt={navAnsatt} oppdaterValgtOppgave={(action('button-click') as () => void)} />`,...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var d,k,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`({
  detaljertJournalpost,
  oppgave,
  submitJournalføring,
  reserverOppgave,
  navAnsatt
}) => <JournalpostDetaljer lasterBruker={false} avbrytVisningAvJournalpost={(action('button-click') as () => void)} oppgave={oppgave} journalpost={detaljertJournalpost} submitJournalføring={submitJournalføring} knyttJournalpostTilBruker={(action('button-click') as () => void)} forhåndsvisBruker={(action('button-click') as () => void)} reserverOppgave={reserverOppgave} navAnsatt={navAnsatt} oppdaterValgtOppgave={(action('button-click') as () => void)} />`,...(m=(k=r.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var b,E,J;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`({
  detaljertJournalpost,
  oppgave,
  submitJournalføring,
  reserverOppgave,
  navAnsatt
}) => <JournalpostDetaljer lasterBruker={false} avbrytVisningAvJournalpost={(action('button-click') as () => void)} oppgave={oppgave} journalpost={detaljertJournalpost} submitJournalføring={submitJournalføring} knyttJournalpostTilBruker={(action('button-click') as () => void)} forhåndsvisBruker={(action('button-click') as () => void)} reserverOppgave={reserverOppgave} navAnsatt={navAnsatt} oppdaterValgtOppgave={(action('button-click') as () => void)} />`,...(J=(E=a.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};const _=["VisOppgaveForSubmitReservertAvMeg","VisOppgaveReservertAvAndre","VisOppgaveIkkeReservert"];export{e as VisOppgaveForSubmitReservertAvMeg,a as VisOppgaveIkkeReservert,r as VisOppgaveReservertAvAndre,_ as __namedExportsOrder,G as default};
//# sourceMappingURL=JournalpostDetaljer.stories-173016e7.js.map
