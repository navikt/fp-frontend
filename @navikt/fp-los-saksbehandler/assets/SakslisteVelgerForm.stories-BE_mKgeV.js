import{j as k}from"./jsx-runtime-QvZ8i92b.js";import{Y as r,z as i}from"./index.es-BkMxg3KK.js";import{a as e}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{m as L}from"./nb_NO-3Rkd6eZ_.js";import{g as N}from"./withIntl-BuEyDIEb.js";import{a as K}from"./alleKodeverkLos-BJud6Q-i.js";import{a as G,R as D,b as F,r as h}from"./fplosSaksbehandlerRestApi-DzOe4zkL.js";import"./index-uubelm5h.js";import"./useRestApiRunner-BRG0l7Io.js";import{S as u,A as o,K as l}from"./SakslisteVelgerForm-CSOGn5hH.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./index-C5xsJX-I.js";import"./kodeverkTyper-CavWL6Ds.js";import"./kodeverkUtils-RGNAgZhp.js";import"./VStack-XUoC8Lli.js";import"./ArrowsUpDown-5NlzdTbS.js";import"./PersonHeadset-Dfcukrc3.js";const f=N(L),X={title:"behandlingskoer/SakslisteVelgerForm",component:u,decorators:[f],render:d=>{const A=[{key:G.SAKSLISTE_SAKSBEHANDLERE.name,data:d.saksbehandlere},{key:D.KODEVERK_LOS.name,data:K,global:!0}];return k.jsx(F,{data:A,requestApi:h,children:k.jsx(u,{sakslister:d.sakslister,setValgtSakslisteId:e("button-click"),fetchAntallOppgaver:e("button-click"),getValueFromLocalStorage:()=>"",setValueInLocalStorage:e("button-click"),removeValueFromLocalStorage:e("button-click")})})}},n={args:{setValgtSakslisteId:e("button-click"),fetchAntallOppgaver:e("button-click"),getValueFromLocalStorage:()=>"",setValueInLocalStorage:e("button-click"),removeValueFromLocalStorage:e("button-click"),saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[r.FORSTEGANGSSOKNAD,r.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:o.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},t={args:{...n.args,saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[r.FORSTEGANGSSOKNAD,r.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:o.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:[r.FORSTEGANGSSOKNAD,r.KLAGE],fagsakYtelseTyper:[i.SVANGERSKAPSPENGER],andreKriterier:[{andreKriterierType:o.UTBETALING_TIL_BRUKER,inkluder:!0}],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}},a={args:{...n.args,saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],sakslister:[]}},s={args:{setValgtSakslisteId:e("button-click"),fetchAntallOppgaver:e("button-click"),getValueFromLocalStorage:()=>"",setValueInLocalStorage:e("button-click"),removeValueFromLocalStorage:e("button-click"),saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"},{brukerIdent:{brukerIdent:"3111123",verdi:"3211123"},navn:"Hans Haugerud"},{brukerIdent:{brukerIdent:"232323",verdi:"23343"},navn:"Olav Hellerud"},{brukerIdent:{brukerIdent:"311112",verdi:"321112"},navn:"Bente Frogner"}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[r.FORSTEGANGSSOKNAD,r.REVURDERING],fagsakYtelseTyper:[i.FORELDREPENGER],andreKriterier:[{andreKriterierType:o.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]}};var g,p,c;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var S,I,E;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(E=(I=t.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var T,b,m;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var v,R,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(R=s.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};const Z=["Default","MedToSakslister","MedIngenSakslister","MedFlereEnnTreSaksbehandlere"];export{n as Default,s as MedFlereEnnTreSaksbehandlere,a as MedIngenSakslister,t as MedToSakslister,Z as __namedExportsOrder,X as default};
