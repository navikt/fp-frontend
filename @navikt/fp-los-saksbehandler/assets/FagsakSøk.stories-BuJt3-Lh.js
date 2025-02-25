import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{M as E}from"./index.es-CJlzWoHQ.js";import{a as e,w as S,F as a,B as r,b as p,m as f}from"./nb_NO-Dyz0idFD.js";import{u as c}from"./useQuery-IBTYbPZQ.js";import{h as R,L as h,H as N,l as b}from"./fplosSaksbehandlerApi-Cre-4QqW.js";import{F as T}from"./SøkResultat-D1xQak7m.js";import{g as F}from"./withIntl-BLNgHvX2.js";import{a as v}from"./alleKodeverkLos-BJud6Q-i.js";import{K as D}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-BX8bsXFO.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index.es-CsAIFIFj.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-C8Kqcmxw.js";import"./v4-CtRu48qb.js";import"./entry-preview-Cu0rN3ei.js";import"./iframe-CskVBG-j.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./decorators-DIzpaN6C.js";import"./useLosKodeverk-Vi-92ER3.js";import"./Table-JdgKO8Iw.js";import"./ArrowsUpDown-B3A6ZyJZ.js";import"./composeEventHandlers-DeH74NdU.js";import"./useControllableState-OKXvv7rx.js";import"./ChevronDown-CqII5Z49.js";import"./ChevronRight-CQDY3upX.js";import"./SøkForm-D8QiY6Xo.js";import"./index.es-C5YJR-h9.js";import"./Tag-DxOXoKyL.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Theme-secqtrOz.js";import"./Modal-Hy0Vor77.js";import"./index.es-Cfgj02un.js";import"./VStack-BaezplMe.js";import"./ExclamationmarkTriangleFill-D8CiscbY.js";import"./PersonInfo-eU11IQdU.js";const y=F(f),ke={title:"søk/FagsakSøk",component:o,decorators:[y,S],parameters:{msw:{handlers:[R.get(h.KODEVERK_LOS,()=>N.json(v))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:u=>c(b()).data?t.jsx(o,{...u}):t.jsx(E,{})},s={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:T.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:D.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};var i,m,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    fagsaker: [{
      saksnummer: '12213234',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      status: FagsakStatus.UNDER_BEHANDLING,
      person: {
        navn: 'Espen Utvikler',
        fødselsdato: '1980-10-10',
        fødselsnummer: '1010',
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
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,g,k;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const ue=["Default","IngentingBleFunnet"];export{s as Default,n as IngentingBleFunnet,ue as __namedExportsOrder,ke as default};
