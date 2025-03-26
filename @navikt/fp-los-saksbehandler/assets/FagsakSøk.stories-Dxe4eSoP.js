import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{Q as E}from"./index.es-eOtxRmci.js";import{a as e,w as S,F as t,B as r,b as p,m as f}from"./nb_NO-B1ADYeqq.js";import{u as c}from"./useQuery-9JD8erc8.js";import{h as R,L as h,H as N,l as b}from"./fplosSaksbehandlerApi-C6FxBbOo.js";import{F as T}from"./SøkResultat-CAb2bu7W.js";import{g as F}from"./withIntl-BnQG-g3X.js";import{a as v}from"./alleKodeverkLos-BJud6Q-i.js";import{K as D}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-DwojR3dX.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index.es-Dtj0Vyte.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-DCqBH7sV.js";import"./v4-CtRu48qb.js";import"./entry-preview-C2an5EtQ.js";import"./iframe-Am9IY-sA.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./useLosKodeverk-yhC5P_f2.js";import"./Table-CYhy5MtV.js";import"./ArrowsUpDown-xTcOe-HG.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-COGFmYXK.js";import"./message-Cjo054bf.js";import"./ChevronRight-BEtaqnQI.js";import"./SøkForm-Bw2wB6Uc.js";import"./index.es-ChBOUh05.js";import"./Modal-DH5wBM3A.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Tag-PRZQThyB.js";import"./index.es-cY1ni0Y-.js";import"./VStack--ZI4FeL4.js";import"./ExclamationmarkTriangleFill-BpTVGZTS.js";import"./PersonInfo-C91cnI4q.js";const y=F(f),ue={title:"søk/FagsakSøk",component:o,decorators:[y,S],parameters:{msw:{handlers:[R.get(h.KODEVERK_LOS,()=>N.json(v))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:u=>c(b()).data?a.jsx(o,{...u}):a.jsx(E,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:t.FORELDREPENGER,status:T.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:D.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},s={args:{fagsaker:[],fagsakOppgaver:[]}};var i,m,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    fagsaker: [{
      saksnummer: '12213234',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      status: FagsakStatus.UNDER_BEHANDLING,
      person: {
        navn: 'Espen Utvikler',
        fødselsdato: '1980-10-10',
        dødsdato: null,
        fødselsnummer: '1010',
        aktørId: '23',
        kjønn: KjønnkodeEnum.MANN
      },
      barnFødt: '2019-12-12',
      aktørId: '23',
      opprettet: ''
    }],
    fagsakOppgaver: [{
      id: 1,
      status: {
        erReservert: false
      },
      saksnummer: 12213234,
      personnummer: '1010',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '12344'
    }, {
      id: 2,
      status: {
        erReservert: false
      },
      saksnummer: 12213234,
      personnummer: '1010',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '12344'
    }]
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,g,k;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const Ee=["Default","IngentingBleFunnet"];export{n as Default,s as IngentingBleFunnet,Ee as __namedExportsOrder,ue as default};
