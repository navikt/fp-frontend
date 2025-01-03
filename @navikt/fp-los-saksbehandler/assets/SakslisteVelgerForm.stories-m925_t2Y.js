import{j as E}from"./jsx-runtime-DR9Q75dM.js";import{F as Y}from"./index.es-BMKmmqW7.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as j}from"./useQuery-BuvdPTRt.js";import{h as i,L as o,H as d,l as w}from"./fplosSaksbehandlerApi-C-ZAlGIP.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as e}from"./behandlingType-BdbjGMJD.js";import{F as l}from"./fagsakYtelseType-DI8GXtVr.js";import{g as x}from"./withIntl-TDXuo7XK.js";import{a as _}from"./alleKodeverkLos-BJud6Q-i.js";import{w as M}from"./withQueryClientProvider-Ba2jjNy6.js";import{S,A as p,K as T}from"./SakslisteVelgerForm-yzQ3uRr6.js";import{m as J}from"./nb_NO-h-VtBlNV.js";import"./index-DRjF_FHU.js";import"./index.es-Lgd3YuFG.js";import"./dayjs.min-CnNqAF5I.js";import"./i18n.context-CjWL2J0U.js";import"./Loader-DLTcRhss.js";import"./v4-CQkTLCs1.js";import"./decorators-86JrGkCj.js";import"./index.es-BwZtVe_T.js";import"./ChevronDown-Be_h0DWZ.js";import"./Tag-DUIhHkjv.js";import"./index-rX-Bn4lm.js";import"./Modal-oq0phPGp.js";import"./AkselTheme-kZpHv4Hy.js";import"./composeEventHandlers-DeH74NdU.js";import"./useMutation-CGc4fsEq.js";import"./useLosKodeverk-CykW4RSf.js";import"./VStack-Br3SWiEm.js";import"./ArrowsUpDown-BSGwT_9Z.js";import"./PersonHeadset-Cp7Xq9Ln.js";const Q=x(J),Ge={title:"behandlingskoer/SakslisteVelgerForm",component:S,decorators:[Q,M],parameters:{msw:{handlers:[i.get(o.KODEVERK_LOS,()=>d.json(_)),i.get(o.SAKSLISTE_SAKSBEHANDLERE,()=>d.json([{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}]))]}},args:{setValgtSakslisteId:t("button-click"),fetchAntallOppgaver:t("button-click"),setValueInLocalStorage:t("button-click"),removeValueFromLocalStorage:t("button-click"),getValueFromLocalStorage:()=>""},render:V=>j(w()).data?E.jsx(S,{...V}):E.jsx(Y,{})},r={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[l.FORELDREPENGER],andreKriterier:[{andreKriterierType:p.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:T.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},n={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[l.FORELDREPENGER],andreKriterier:[{andreKriterierType:p.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:T.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.KLAGE],fagsakYtelseTyper:[l.SVANGERSKAPSPENGER],andreKriterier:[{andreKriterierType:p.UTBETALING_TIL_BRUKER,inkluder:!0}],sortering:{sorteringType:T.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},s={args:{sakslister:[]}},a={parameters:{msw:{handlers:[i.get(o.KODEVERK_LOS,()=>d.json(_)),i.get(o.SAKSLISTE_SAKSBEHANDLERE,()=>d.json([{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"},{brukerIdent:{brukerIdent:"3111123",verdi:"3211123"},navn:"Hans Haugerud"},{brukerIdent:{brukerIdent:"232323",verdi:"23343"},navn:"Olav Hellerud"},{brukerIdent:{brukerIdent:"311112",verdi:"321112"},navn:"Bente Frogner"}]))]}},args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[l.FORELDREPENGER],andreKriterier:[{andreKriterierType:p.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:T.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}};var k,g,u;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var R,m,I;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(m=n.parameters)==null?void 0:m.docs)==null?void 0:I.source}}};var y,K,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...(N=(K=s.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var A,c,L;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(c=a.parameters)==null?void 0:c.docs)==null?void 0:L.source}}};var G,D,v;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(v=(D=r.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var F,b,B;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(b=n.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var O,h,f;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var U,H,P;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(P=(H=a.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const De=["Default","MedToSakslister","MedIngenSakslister","MedFlereEnnTreSaksbehandlere"];export{r as Default,a as MedFlereEnnTreSaksbehandlere,s as MedIngenSakslister,n as MedToSakslister,De as __namedExportsOrder,Ge as default};
