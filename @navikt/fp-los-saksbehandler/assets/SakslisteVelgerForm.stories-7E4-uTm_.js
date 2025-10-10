import{w as T,j as d}from"./iframe-Cxiu9moG.js";import{Q as u}from"./index.es-DLn_AXM2.js";import{u as m}from"./useQuery-gJxwkrnl.js";import{h as a,L as i,H as o,l as g}from"./fplosSaksbehandlerApi-D1Zxrxmc.js";import{g as S}from"./withIntl-BXv-mgj5.js";import{a as k}from"./alleKodeverkLos-JR0SOFbV.js";import{S as l}from"./SakslisteVelgerForm-C5rC7LRO.js";import{m as I}from"./nb_NO-GnRbBCJl.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-DiixKYlL.js";import"./index.es-CvnX6Kxc.js";import"./Modal-OU9is9qV.js";import"./floating-ui.react-CsYY5UsG.js";import"./composeEventHandlers-CL7ondXh.js";import"./index-DKaflqxo.js";import"./ChevronDown-C2V79gwj.js";import"./Tag-C4N-KuoW.js";import"./VStack-C1W6LOfh.js";import"./useMutation-c2cr7X2o.js";import"./useLosKodeverk-zVqvuNx5.js";import"./PersonHeadset-Ceo8A0Wp.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c=S(I),w={title:"behandlingskoer/SakslisteVelgerForm",component:l,decorators:[c,T],parameters:{layout:"fullscreen",msw:{handlers:[a.get(i.KODEVERK_LOS,()=>o.json(k)),a.get(i.SAKSLISTE_SAKSBEHANDLERE,()=>o.json([{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}]))]}},args:{setValgtSakslisteId:e("button-click"),fetchAntallOppgaver:e("button-click"),setValueInLocalStorage:e("button-click"),removeValueFromLocalStorage:e("button-click"),getValueFromLocalStorage:()=>""},render:p=>m(g()).data?d.jsx(l,{...p}):d.jsx(u,{})},r={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:["BT-002","BT-004"],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:"TIL_BESLUTTER",inkluder:!0}],sortering:{sorteringType:"BEHFRIST",fra:2,til:4,erDynamiskPeriode:!0}}]}},n={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:["BT-002","BT-004"],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:"TIL_BESLUTTER",inkluder:!0}],sortering:{sorteringType:"BEHFRIST",fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:["BT-002","BT-003"],fagsakYtelseTyper:["SVP"],andreKriterier:[{andreKriterierType:"UTBETALING_TIL_BRUKER",inkluder:!0}],sortering:{sorteringType:"BEHFRIST",fra:2,til:4,erDynamiskPeriode:!0}}]}},t={args:{sakslister:[]}},s={parameters:{msw:{handlers:[a.get(i.KODEVERK_LOS,()=>o.json(k)),a.get(i.SAKSLISTE_SAKSBEHANDLERE,()=>o.json([{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"},{brukerIdent:{brukerIdent:"3111123",verdi:"3211123"},navn:"Hans Haugerud"},{brukerIdent:{brukerIdent:"232323",verdi:"23343"},navn:"Olav Hellerud"},{brukerIdent:{brukerIdent:"311112",verdi:"321112"},navn:"Bente Frogner"}]))]}},args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:["BT-002","BT-004"],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:"TIL_BESLUTTER",inkluder:!0}],sortering:{sorteringType:"BEHFRIST",fra:2,til:4,erDynamiskPeriode:!0}}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    sakslister: [{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      behandlingTyper: ['BT-002', 'BT-004'],
      fagsakYtelseTyper: ['FP'],
      andreKriterier: [{
        andreKriterierType: 'TIL_BESLUTTER',
        inkluder: true
      }],
      sortering: {
        sorteringType: 'BEHFRIST',
        fra: 2,
        til: 4,
        erDynamiskPeriode: true
      }
    }]
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    sakslister: [{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      behandlingTyper: ['BT-002', 'BT-004'],
      fagsakYtelseTyper: ['FP'],
      andreKriterier: [{
        andreKriterierType: 'TIL_BESLUTTER',
        inkluder: true
      }],
      sortering: {
        sorteringType: 'BEHFRIST',
        fra: 2,
        til: 4,
        erDynamiskPeriode: true
      }
    }, {
      sakslisteId: 2,
      navn: 'Saksliste 2',
      behandlingTyper: ['BT-002', 'BT-003'],
      fagsakYtelseTyper: ['SVP'],
      andreKriterier: [{
        andreKriterierType: 'UTBETALING_TIL_BRUKER',
        inkluder: true
      }],
      sortering: {
        sorteringType: 'BEHFRIST',
        fra: 2,
        til: 4,
        erDynamiskPeriode: true
      }
    }]
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      behandlingTyper: ['BT-002', 'BT-004'],
      fagsakYtelseTyper: ['FP'],
      andreKriterier: [{
        andreKriterierType: 'TIL_BESLUTTER',
        inkluder: true
      }],
      sortering: {
        sorteringType: 'BEHFRIST',
        fra: 2,
        til: 4,
        erDynamiskPeriode: true
      }
    }]
  }
}`,...s.parameters?.docs?.source}}};const x=["Default","MedToSakslister","MedIngenSakslister","MedFlereEnnTreSaksbehandlere"];export{r as Default,s as MedFlereEnnTreSaksbehandlere,t as MedIngenSakslister,n as MedToSakslister,x as __namedExportsOrder,w as default};
