import{j as k}from"./jsx-runtime-QvZ8i92b.js";import{Y as r,z as i}from"./index.es-BkMxg3KK.js";import{a as e}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as L}from"./withIntl-CXCN2UdN.js";import{a as N}from"./alleKodeverkLos-BJud6Q-i.js";import{a as K,R as G,b as D,r as F}from"./fplosSaksbehandlerRestApi-BZCxhk6H.js";import"./index-uubelm5h.js";import"./useRestApiRunner-PStp57wB.js";import{S as u,A as o,K as l}from"./SakslisteVelgerForm-CbxcTee1.js";import{m as h}from"./nb_NO-B-ueAdrN.js";import"./v4-CQkTLCs1.js";import"./index.es-Cy3ARoh3.js";import"./index.es-eNWzkFa8.js";import"./dayjs.min-BsYQKNhR.js";import"./Loader-CZ5ROITq.js";import"./index.es-BA1rT94D.js";import"./ChevronDown-hRS6jTPP.js";import"./Tag-Q6veKrcb.js";import"./index-C5xsJX-I.js";import"./Modal-DD2nizkS.js";import"./composeEventHandlers-DeH74NdU.js";import"./Slot-CBut_XMV.js";import"./kodeverkTyper-CavWL6Ds.js";import"./kodeverkUtils-RGNAgZhp.js";import"./VStack-5SNtFvVE.js";import"./ArrowsUpDown-MzKzmnUF.js";import"./PersonHeadset-D5nY4hTg.js";const f=L(h),ie={title:"behandlingskoer/SakslisteVelgerForm",component:u,decorators:[f],render:d=>{const A=[{key:K.SAKSLISTE_SAKSBEHANDLERE.name,data:d.saksbehandlere},{key:G.KODEVERK_LOS.name,data:N,global:!0}];return k.jsx(D,{data:A,requestApi:F,children:k.jsx(u,{sakslister:d.sakslister,setValgtSakslisteId:e("button-click"),fetchAntallOppgaver:e("button-click"),getValueFromLocalStorage:()=>"",setValueInLocalStorage:e("button-click"),removeValueFromLocalStorage:e("button-click")})})}},n={args:{setValgtSakslisteId:e("button-click"),fetchAntallOppgaver:e("button-click"),getValueFromLocalStorage:()=>"",setValueInLocalStorage:e("button-click"),removeValueFromLocalStorage:e("button-click"),saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[r.FORSTEGANGSSOKNAD,r.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:o.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},t={args:{...n.args,saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[r.FORSTEGANGSSOKNAD,r.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:o.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:[r.FORSTEGANGSSOKNAD,r.KLAGE],fagsakYtelseTyper:[i.SVANGERSKAPSPENGER],andreKriterier:[{andreKriterierType:o.UTBETALING_TIL_BRUKER,inkluder:!0}],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},a={args:{...n.args,saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],sakslister:[]}},s={args:{setValgtSakslisteId:e("button-click"),fetchAntallOppgaver:e("button-click"),getValueFromLocalStorage:()=>"",setValueInLocalStorage:e("button-click"),removeValueFromLocalStorage:e("button-click"),saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"},{brukerIdent:{brukerIdent:"3111123",verdi:"3211123"},navn:"Hans Haugerud"},{brukerIdent:{brukerIdent:"232323",verdi:"23343"},navn:"Olav Hellerud"},{brukerIdent:{brukerIdent:"311112",verdi:"321112"},navn:"Bente Frogner"}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[r.FORSTEGANGSSOKNAD,r.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:o.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}};var p,g,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    setValgtSakslisteId: action('button-click'),
    fetchAntallOppgaver: action('button-click'),
    getValueFromLocalStorage: () => '',
    setValueInLocalStorage: action('button-click'),
    removeValueFromLocalStorage: action('button-click'),
    saksbehandlere: [{
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
    }],
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
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var S,I,E;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    saksbehandlere: [{
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
    }],
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
}`,...(E=(I=t.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var T,m,b;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    saksbehandlere: [{
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
    }],
    sakslister: []
  }
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,R,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    setValgtSakslisteId: action('button-click'),
    fetchAntallOppgaver: action('button-click'),
    getValueFromLocalStorage: () => '',
    setValueInLocalStorage: action('button-click'),
    removeValueFromLocalStorage: action('button-click'),
    saksbehandlere: [{
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
    }],
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
}`,...(y=(R=s.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};const oe=["Default","MedToSakslister","MedIngenSakslister","MedFlereEnnTreSaksbehandlere"];export{n as Default,s as MedFlereEnnTreSaksbehandlere,a as MedIngenSakslister,t as MedToSakslister,oe as __namedExportsOrder,ie as default};
