import{j as E}from"./jsx-runtime-D_zvdyIk.js";import{r as G}from"./index.es-C1lgsJyf.js";import{a as r,w as b,F as i,b as e}from"./withThemeDecorator-D2xQwgNs.js";import{u as F}from"./useQuery-CuIEmpwG.js";import{h as o,L as d,H as l,l as O}from"./fplosSaksbehandlerApi-4oezgadX.js";import{S,K as p}from"./SakslisteVelgerForm-C0EpvJMb.js";import{A as k}from"./andreKriterierType-DyVow8-R.js";import{g as B}from"./withIntl-Bs8JUAqF.js";import{a as D}from"./alleKodeverkLos-DjowPRxp.js";import{m as f}from"./nb_NO-BYhlkY2e.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Loader-JYgzgfA1.js";import"./v4-CtRu48qb.js";import"./entry-preview-C9u7Fb_d.js";import"./iframe-DPwyuyzw.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-CthwVBft.js";import"./Modal-fg6e4fr9.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-CibENQQb.js";import"./Tag-2pGxz__i.js";import"./VStack-CZXVqKg_.js";import"./useMutation-CNLBDcUr.js";import"./useLosKodeverk-61xInNBk.js";import"./message-DPXt46j3.js";import"./ArrowsUpDown-Bj6TqND6.js";import"./PersonHeadset-nEiPjykw.js";const h=B(f),ge={title:"behandlingskoer/SakslisteVelgerForm",component:S,decorators:[h,b],parameters:{layout:"fullscreen",msw:{handlers:[o.get(d.KODEVERK_LOS,()=>l.json(D)),o.get(d.SAKSLISTE_SAKSBEHANDLERE,()=>l.json([{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}]))]}},args:{setValgtSakslisteId:r("button-click"),fetchAntallOppgaver:r("button-click"),setValueInLocalStorage:r("button-click"),removeValueFromLocalStorage:r("button-click"),getValueFromLocalStorage:()=>""},render:v=>F(O()).data?E.jsx(S,{...v}):E.jsx(G,{})},n={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:k.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},t={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:k.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.KLAGE],fagsakYtelseTyper:[i.SVANGERSKAPSPENGER],andreKriterier:[{andreKriterierType:k.UTBETALING_TIL_BRUKER,inkluder:!0}],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},s={args:{sakslister:[]}},a={parameters:{msw:{handlers:[o.get(d.KODEVERK_LOS,()=>l.json(D)),o.get(d.SAKSLISTE_SAKSBEHANDLERE,()=>l.json([{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"},{brukerIdent:{brukerIdent:"3111123",verdi:"3211123"},navn:"Hans Haugerud"},{brukerIdent:{brukerIdent:"232323",verdi:"23343"},navn:"Olav Hellerud"},{brukerIdent:{brukerIdent:"311112",verdi:"321112"},navn:"Bente Frogner"}]))]}},args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:k.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}};var T,g,m;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    sakslister: [{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.REVURDERING],
      fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
      andreKriterier: [{
        andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
        inkluder: true
      }],
      sortering: {
        sorteringType: KøSortering.BEHANDLINGSFRIST,
        fra: 2,
        til: 4,
        erDynamiskPeriode: true
      }
    }]
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,R,I;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    sakslister: [{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.REVURDERING],
      fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
      andreKriterier: [{
        andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
        inkluder: true
      }],
      sortering: {
        sorteringType: KøSortering.BEHANDLINGSFRIST,
        fra: 2,
        til: 4,
        erDynamiskPeriode: true
      }
    }, {
      sakslisteId: 2,
      navn: 'Saksliste 2',
      behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.KLAGE],
      fagsakYtelseTyper: [FagsakYtelseType.SVANGERSKAPSPENGER],
      andreKriterier: [{
        andreKriterierType: AndreKriterierType.UTBETALING_TIL_BRUKER,
        inkluder: true
      }],
      sortering: {
        sorteringType: KøSortering.BEHANDLINGSFRIST,
        fra: 2,
        til: 4,
        erDynamiskPeriode: true
      }
    }]
  }
}`,...(I=(R=t.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var y,K,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...(N=(K=s.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var A,L,c;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.SAKSLISTE_SAKSBEHANDLERE, () => HttpResponse.json([{
        brukerIdent: {
          brukerIdent: '32434',
          verdi: '32434'
        },
        navn: 'Espen Utvikler'
      }, {
        brukerIdent: {
          brukerIdent: '31111',
          verdi: '32111'
        },
        navn: 'Auto Joakim'
      }, {
        brukerIdent: {
          brukerIdent: '3111123',
          verdi: '3211123'
        },
        navn: 'Hans Haugerud'
      }, {
        brukerIdent: {
          brukerIdent: '232323',
          verdi: '23343'
        },
        navn: 'Olav Hellerud'
      }, {
        brukerIdent: {
          brukerIdent: '311112',
          verdi: '321112'
        },
        navn: 'Bente Frogner'
      }]))]
    }
  },
  args: {
    sakslister: [{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.REVURDERING],
      fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
      andreKriterier: [{
        andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
        inkluder: true
      }],
      sortering: {
        sorteringType: KøSortering.BEHANDLINGSFRIST,
        fra: 2,
        til: 4,
        erDynamiskPeriode: true
      }
    }]
  }
}`,...(c=(L=a.parameters)==null?void 0:L.docs)==null?void 0:c.source}}};const me=["Default","MedToSakslister","MedIngenSakslister","MedFlereEnnTreSaksbehandlere"];export{n as Default,a as MedFlereEnnTreSaksbehandlere,s as MedIngenSakslister,t as MedToSakslister,me as __namedExportsOrder,ge as default};
