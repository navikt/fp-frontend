import{w as G,F as i,B as e,j as E}from"./iframe-D70Tnhx0.js";import{Q as b}from"./index.es-BVSFFaqq.js";import{u as O}from"./useQuery-D8cK-fqL.js";import{a as o,L as d,H as l,l as F}from"./fplosSaksbehandlerApi-B2AQAuw2.js";import{S,K as p}from"./SakslisteVelgerForm-DpEYiQXo.js";import{A as k}from"./andreKriterierType-DyVow8-R.js";import{g as B}from"./withIntl-CDsxDtZ7.js";import{a as D}from"./alleKodeverkLos-DjowPRxp.js";import{m as f}from"./nb_NO-Bc_rXWi2.js";import"./Loader-Dy4WN2O0.js";import"./index.es-BFTRVqwT.js";import"./Modal-CNbHlX5O.js";import"./index-CAFejsPJ.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-D13T2JtO.js";import"./Tag-C4X_taQ0.js";import"./VStack-CymHhqNl.js";import"./useMutation-BPwQ7agt.js";import"./useLosKodeverk-D73Wiyxo.js";import"./message-BuvWnYug.js";import"./ArrowsUpDown-Dr8XHWeS.js";import"./PersonHeadset-BIyO2G3t.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,h=B(f),se={title:"behandlingskoer/SakslisteVelgerForm",component:S,decorators:[h,G],parameters:{layout:"fullscreen",msw:{handlers:[o.get(d.KODEVERK_LOS,()=>l.json(D)),o.get(d.SAKSLISTE_SAKSBEHANDLERE,()=>l.json([{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}]))]}},args:{setValgtSakslisteId:r("button-click"),fetchAntallOppgaver:r("button-click"),setValueInLocalStorage:r("button-click"),removeValueFromLocalStorage:r("button-click"),getValueFromLocalStorage:()=>""},render:v=>O(F()).data?E.jsx(S,{...v}):E.jsx(b,{})},n={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:k.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},t={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:k.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.KLAGE],fagsakYtelseTyper:[i.SVANGERSKAPSPENGER],andreKriterier:[{andreKriterierType:k.UTBETALING_TIL_BRUKER,inkluder:!0}],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},s={args:{sakslister:[]}},a={parameters:{msw:{handlers:[o.get(d.KODEVERK_LOS,()=>l.json(D)),o.get(d.SAKSLISTE_SAKSBEHANDLERE,()=>l.json([{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"},{brukerIdent:{brukerIdent:"3111123",verdi:"3211123"},navn:"Hans Haugerud"},{brukerIdent:{brukerIdent:"232323",verdi:"23343"},navn:"Olav Hellerud"},{brukerIdent:{brukerIdent:"311112",verdi:"321112"},navn:"Bente Frogner"}]))]}},args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:k.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}};var T,g,u;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var R,m,I;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(m=t.parameters)==null?void 0:m.docs)==null?void 0:I.source}}};var y,K,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(c=(L=a.parameters)==null?void 0:L.docs)==null?void 0:c.source}}};const ae=["Default","MedToSakslister","MedIngenSakslister","MedFlereEnnTreSaksbehandlere"];export{n as Default,a as MedFlereEnnTreSaksbehandlere,s as MedIngenSakslister,t as MedToSakslister,ae as __namedExportsOrder,se as default};
