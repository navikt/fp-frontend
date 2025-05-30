import{c as K,P as N,a as P,b as e,w as h}from"./withThemeDecorator-M3b0cWt0.js";import{J,F as l,a as t,D as r,b as T,O as L,m as B}from"./nb_NO-DsKkXQoM.js";import{j as _}from"./jsx-runtime-D_zvdyIk.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./entry-preview-BPU9wBfw.js";import"./iframe-D0BYQPul.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";const w=j=>{const F=K({locale:"nb-NO",messages:j},P());return G=>_.jsx(N,{value:F,children:G()})},x=w(B),u="Z123343",v=986547336994,V={brukernavn:u},i={journalpostId:v.toString(),aktørId:"9996923456799",fødselsnummer:"12048714373",opprettetDato:"2022-01-01",frist:"2022-02-01",ytelseType:"FP",enhetId:"4108",beskrivelse:"Inntektsmelding",kilde:L.GOSYS},M={journalpostId:v.toString(),tittel:r.BEKREFTELSE_ARBEIDSGIVER,kanal:T.EESSI,kanOppretteSak:!0,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Svingen sag og høvleri",id:"999999999"},ytelseType:t.FORELDREPENGER,dokumenter:[{dokumentId:"999999999",tittel:r.BEKREFTELSE_ARBEIDSGIVER,varianter:[],lenke:""},{dokumentId:"999999998",tittel:r.SØKNAD_FORELDREPENGER_FØDSEL,varianter:[],lenke:""},{dokumentId:"999999997",tittel:r.ANNET,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:t.FORELDREPENGER,opprettetDato:"2022-01-02",status:l.LOPENDE},{saksnummer:"155462542",ytelseType:t.SVANGERSKAPSPENGER,opprettetDato:"2022-01-02",status:l.AVSLUTTET},{saksnummer:"175419131",ytelseType:t.FORELDREPENGER,opprettetDato:"2022-01-03",status:l.AVSLUTTET}]},C={journalpostId:v.toString(),tittel:r.KLAGE,kanal:T.SKAN_NETS,kanOppretteSak:!1,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Søker Søkersen",id:"12048714373"},ytelseType:t.FORELDREPENGER,dokumenter:[{dokumentId:"999999997",tittel:r.KLAGE,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:t.FORELDREPENGER,opprettetDato:"2022-01-02",status:l.LOPENDE}]},re={title:"journalføring/journalføring/Journalpost",component:J,decorators:[x,h],args:{lasterBruker:!1,submitJournalføring:e("button-click"),reserverOppgave:e("button-click"),avbrytVisningAvJournalpost:e("button-click"),knyttJournalpostTilBruker:e("button-click"),forhåndsvisBruker:e("button-click"),flyttTilGosys:e("button-click")}},s={args:{oppgave:{...i,reservertAv:u},journalpost:M,navAnsatt:V}},n={args:{oppgave:{...i,reservertAv:u},journalpost:C,navAnsatt:V}},a={args:{...s.args,navAnsatt:{brukernavn:"X123456"}}},o={args:{...a.args,oppgave:i}},p={args:{...a.args,oppgave:{...i,kilde:L.LOKAL}}};var g,c,d;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: detaljertJournalpostMal,
    navAnsatt: navAnsattDefault
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,k,E;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: journalpostKlage,
    navAnsatt: navAnsattDefault
  }
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var A,S,R;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveForSubmitReservertAvMeg.args,
    navAnsatt: {
      brukernavn: 'X123456'
    } as NavAnsatt
  }
}`,...(R=(S=a.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var O,y,f;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: defaultOppgave
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var I,D,b;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: {
      ...defaultOppgave,
      kilde: OppgaveKilde.LOKAL
    }
  }
}`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const ae=["VisOppgaveForSubmitReservertAvMeg","VisJournalpostKlage","VisOppgaveReservertAvAndre","VisOppgaveIkkeReservert","VisFlyttTilGosysOmKildeGosys"];export{p as VisFlyttTilGosysOmKildeGosys,n as VisJournalpostKlage,s as VisOppgaveForSubmitReservertAvMeg,o as VisOppgaveIkkeReservert,a as VisOppgaveReservertAvAndre,ae as __namedExportsOrder,re as default};
