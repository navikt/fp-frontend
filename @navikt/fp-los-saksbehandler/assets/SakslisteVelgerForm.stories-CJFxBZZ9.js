import{j as E}from"./jsx-runtime-D_zvdyIk.js";import{M as G}from"./index.es-C_rfKMWM.js";import{a as r,w as b,F as i,b as e,m as F}from"./nb_NO-DWNE31-V.js";import{u as O}from"./useQuery-DtoCMJ0c.js";import{h as o,L as d,H as l,l as B}from"./fplosSaksbehandlerApi-Cre-4QqW.js";import{g as h}from"./withIntl-DwVD0z3-.js";import{a as D}from"./alleKodeverkLos-BJud6Q-i.js";import{S,K as p,A as k}from"./SakslisteVelgerForm-Fp0vXEPy.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index.es-D3FSeQNG.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-BEUEYYSz.js";import"./v4-CtRu48qb.js";import"./react-CW7BwjjX.js";import"./iframe-DccoT9Gw.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./decorators-DIzpaN6C.js";import"./index.es-DnPrejCa.js";import"./ChevronDown-BmshD2bD.js";import"./Tag-DBYrLKdR.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Theme-YhT-kHwE.js";import"./composeEventHandlers-DeH74NdU.js";import"./Modal-pQ8dwEsS.js";import"./useMutation-DBboi6Z6.js";import"./useLosKodeverk-Bmlax4dZ.js";import"./VStack-ChXOQS5S.js";import"./ArrowsUpDown-DJb9rXXD.js";import"./PersonHeadset-PmqLz_Yg.js";const f=h(F),Se={title:"behandlingskoer/SakslisteVelgerForm",component:S,decorators:[f,b],parameters:{msw:{handlers:[o.get(d.KODEVERK_LOS,()=>l.json(D)),o.get(d.SAKSLISTE_SAKSBEHANDLERE,()=>l.json([{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}]))]}},args:{setValgtSakslisteId:r("button-click"),fetchAntallOppgaver:r("button-click"),setValueInLocalStorage:r("button-click"),removeValueFromLocalStorage:r("button-click"),getValueFromLocalStorage:()=>""},render:v=>O(B()).data?E.jsx(S,{...v}):E.jsx(G,{})},n={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:k.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},t={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:k.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.KLAGE],fagsakYtelseTyper:[i.SVANGERSKAPSPENGER],andreKriterier:[{andreKriterierType:k.UTBETALING_TIL_BRUKER,inkluder:!0}],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},s={args:{sakslister:[]}},a={parameters:{msw:{handlers:[o.get(d.KODEVERK_LOS,()=>l.json(D)),o.get(d.SAKSLISTE_SAKSBEHANDLERE,()=>l.json([{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"},{brukerIdent:{brukerIdent:"3111123",verdi:"3211123"},navn:"Hans Haugerud"},{brukerIdent:{brukerIdent:"232323",verdi:"23343"},navn:"Olav Hellerud"},{brukerIdent:{brukerIdent:"311112",verdi:"321112"},navn:"Bente Frogner"}]))]}},args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:k.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}};var T,g,u;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        sorteringType: KoSortering.BEHANDLINGSFRIST,
        fra: 2,
        til: 4,
        erDynamiskPeriode: true
      }
    }]
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,R,I;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        sorteringType: KoSortering.BEHANDLINGSFRIST,
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
        sorteringType: KoSortering.BEHANDLINGSFRIST,
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
        sorteringType: KoSortering.BEHANDLINGSFRIST,
        fra: 2,
        til: 4,
        erDynamiskPeriode: true
      }
    }]
  }
}`,...(c=(L=a.parameters)==null?void 0:L.docs)==null?void 0:c.source}}};const Te=["Default","MedToSakslister","MedIngenSakslister","MedFlereEnnTreSaksbehandlere"];export{n as Default,a as MedFlereEnnTreSaksbehandlere,s as MedIngenSakslister,t as MedToSakslister,Te as __namedExportsOrder,Se as default};
