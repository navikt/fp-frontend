import{c as M,P as _,a as w,O as K,D as n,J as x,F as o,b as p,d as X,w as C,e as t,m as U}from"./nb_NO-BIS-yH5T.js";import{j as Y}from"./jsx-runtime-CLpGMVip.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-CtRu48qb.js";import"./react-Dvkum4zU.js";import"./iframe-COlCLRU0.js";import"./chunk-XP5HYGXS-DH4vAeCa.js";import"./dayjs.min-DPY8FYmS.js";const Q=P=>{const J=M({locale:"nb-NO",messages:P},w());return B=>Y.jsx(_,{value:J,children:B()})},Z=Q(U),N="Z123343",h=986547336994,q={brukernavn:N},l={journalpostId:h.toString(),aktørId:"9996923456799",fødselsnummer:"12048714373",opprettetDato:"2022-01-01",frist:"2022-02-01",ytelseType:"FP",enhetId:"4108",beskrivelse:"Inntektsmelding",kilde:K.GOSYS},z={journalpostId:h.toString(),tittel:n.BEKREFTELSE_ARBEIDSGIVER,kanal:x.EESSI,bruker:{navn:"Søker Søkersen",fnr:"12048714373",aktørId:"98594685464858"},avsender:{navn:"Svingen sag og høvleri",id:"999999999"},ytelseType:o.FORELDREPENGER,dokumenter:[{dokumentId:"999999999",tittel:n.BEKREFTELSE_ARBEIDSGIVER,varianter:[],lenke:""},{dokumentId:"999999998",tittel:n.SØKNAD_FORELDREPENGER_FØDSEL,varianter:[],lenke:""},{dokumentId:"999999997",tittel:n.ANNET,varianter:[],lenke:""}],fagsaker:[{saksnummer:"125416597",ytelseType:o.FORELDREPENGER,opprettetDato:"2022-01-02",status:p.LOPENDE},{saksnummer:"155462542",ytelseType:o.SVANGERSKAPSPENGER,opprettetDato:"2022-01-02",status:p.AVSLUTTET},{saksnummer:"175419131",ytelseType:o.FORELDREPENGER,opprettetDato:"2022-01-03",status:p.AVSLUTTET}]},pe={title:"journalføring/journalføring/Journalpost",component:X,decorators:[Z,C],args:{lasterBruker:!1,submitJournalføring:t("button-click"),reserverOppgave:t("button-click"),avbrytVisningAvJournalpost:t("button-click"),knyttJournalpostTilBruker:t("button-click"),forhåndsvisBruker:t("button-click"),flyttTilGosys:t("button-click")}},r={args:{oppgave:{...l,reservertAv:N},journalpost:z,navAnsatt:q}},e={args:{...r.args,navAnsatt:{brukernavn:"X123456"}}},a={args:{...e.args,oppgave:l}},s={args:{...e.args,oppgave:{...l,kilde:K.LOKAL}}};var i,v,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: detaljertJournalpostMal,
    navAnsatt: navAnsattDefault
  }
}`,...(u=(v=r.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var c,g,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveForSubmitReservertAvMeg.args,
    navAnsatt: {
      brukernavn: 'X123456'
    } as NavAnsatt
  }
}`,...(d=(g=e.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var m,k,A;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: defaultOppgave
  }
}`,...(A=(k=a.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var E,O,R;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: {
      ...defaultOppgave,
      kilde: OppgaveKilde.LOKAL
    }
  }
}`,...(R=(O=s.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var S,b,f;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    oppgave: {
      ...defaultOppgave,
      reservertAv: saksbehandler
    },
    journalpost: detaljertJournalpostMal,
    navAnsatt: navAnsattDefault
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,I,D;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveForSubmitReservertAvMeg.args,
    navAnsatt: {
      brukernavn: 'X123456'
    } as NavAnsatt
  }
}`,...(D=(I=e.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var T,V,F;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: defaultOppgave
  }
}`,...(F=(V=a.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var L,j,G;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: {
      ...defaultOppgave,
      kilde: OppgaveKilde.LOKAL
    }
  }
}`,...(G=(j=s.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};const le=["VisOppgaveForSubmitReservertAvMeg","VisOppgaveReservertAvAndre","VisOppgaveIkkeReservert","VisFlyttTilGosysOmKildeGosys"];export{s as VisFlyttTilGosysOmKildeGosys,r as VisOppgaveForSubmitReservertAvMeg,a as VisOppgaveIkkeReservert,e as VisOppgaveReservertAvAndre,le as __namedExportsOrder,pe as default};
