import{w as m,B as e,j as S}from"./iframe-hngBcEJU.js";import{Q as g}from"./index.es-CCQ8GdpS.js";import{u as E}from"./useQuery-DRScyGKp.js";import{h as i,L as o,H as d,l as I}from"./fplosSaksbehandlerApi-CfwPuiET.js";import{S as k,K as l}from"./SakslisteVelgerForm-BtIusubV.js";import{A as p}from"./andreKriterierType-Cg0VWsVP.js";import{g as y}from"./withIntl-Bcg8ljZ3.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{m as K}from"./nb_NO-CtwuI1lJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-VFefIwdI.js";import"./index.es-D4x0QtRB.js";import"./Modal-BbjPbd20.js";import"./floating-ui.react-ClIw87gO.js";import"./composeEventHandlers-Cq0PU7zd.js";import"./index-DY40as6m.js";import"./ChevronDown-CAkkY---.js";import"./Tag-CxHHKzC0.js";import"./VStack-BeA-F8sQ.js";import"./useMutation-BbCnC_sJ.js";import"./useLosKodeverk-Bcc54kba.js";import"./PersonHeadset-CpP9UvXu.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,R=y(K),Q={title:"behandlingskoer/SakslisteVelgerForm",component:k,decorators:[R,m],parameters:{layout:"fullscreen",msw:{handlers:[i.get(o.KODEVERK_LOS,()=>d.json(u)),i.get(o.SAKSLISTE_SAKSBEHANDLERE,()=>d.json([{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}]))]}},args:{setValgtSakslisteId:r("button-click"),fetchAntallOppgaver:r("button-click"),setValueInLocalStorage:r("button-click"),removeValueFromLocalStorage:r("button-click"),getValueFromLocalStorage:()=>""},render:T=>E(I()).data?S.jsx(k,{...T}):S.jsx(g,{})},n={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:p.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},t={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:p.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.KLAGE],fagsakYtelseTyper:["SVP"],andreKriterier:[{andreKriterierType:p.UTBETALING_TIL_BRUKER,inkluder:!0}],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},s={args:{sakslister:[]}},a={parameters:{msw:{handlers:[i.get(o.KODEVERK_LOS,()=>d.json(u)),i.get(o.SAKSLISTE_SAKSBEHANDLERE,()=>d.json([{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"},{brukerIdent:{brukerIdent:"3111123",verdi:"3211123"},navn:"Hans Haugerud"},{brukerIdent:{brukerIdent:"232323",verdi:"23343"},navn:"Olav Hellerud"},{brukerIdent:{brukerIdent:"311112",verdi:"321112"},navn:"Bente Frogner"}]))]}},args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:p.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    sakslister: [{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      behandlingTyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD, BehandlingTypeEnum.REVURDERING],
      fagsakYtelseTyper: ['FP'],
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    sakslister: [{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      behandlingTyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD, BehandlingTypeEnum.REVURDERING],
      fagsakYtelseTyper: ['FP'],
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
      behandlingTyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD, BehandlingTypeEnum.KLAGE],
      fagsakYtelseTyper: ['SVP'],
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
      behandlingTyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD, BehandlingTypeEnum.REVURDERING],
      fagsakYtelseTyper: ['FP'],
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
}`,...a.parameters?.docs?.source}}};const J=["Default","MedToSakslister","MedIngenSakslister","MedFlereEnnTreSaksbehandlere"];export{n as Default,a as MedFlereEnnTreSaksbehandlere,s as MedIngenSakslister,t as MedToSakslister,J as __namedExportsOrder,Q as default};
