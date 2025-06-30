import{w as u,F as a,B as r,j as t}from"./iframe-BGRsIo3P.js";import{X as E}from"./index.es-Cngvyuii.js";import{u as f}from"./useQuery-DCDGn1sy.js";import{a as c,L as S,H as R,l as v}from"./fplosSaksbehandlerApi-Br0saMg4.js";import{F as h}from"./SøkResultat-BLhoIWHJ.js";import{g as O}from"./withIntl-CPXO3lvq.js";import{a as F}from"./alleKodeverkLos-DeeW-5p1.js";import{K as T}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-CUDyYJGu.js";import{m as b}from"./nb_NO-DYLtSdYq.js";import"./Loader-BVN4NMPC.js";import"./useLosKodeverk-CgAJ1XPq.js";import"./Table-DJx7eA3r.js";import"./ArrowsUpDown-CG9NmNC-.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BJsnN-rY.js";import"./message-D4wBDHqB.js";import"./ChevronRight-J6ATwKCM.js";import"./SøkForm-jNzhgGg4.js";import"./index.es-Bwknunf2.js";import"./Modal-CjcrlGpH.js";import"./index--B9aAWr2.js";import"./Tag-DwtGxp6Q.js";import"./VStack-C2U-6IUP.js";import"./index.es-Dulf5yHG.js";import"./ExclamationmarkTriangleFill-D4A7RNbU.js";import"./PersonInfo-0QcTIGRE.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,N=O(b),se={title:"søk/FagsakSøk",component:o,decorators:[N,u],parameters:{msw:{handlers:[c.get(S.KODEVERK_LOS,()=>R.json(F))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:g=>f(v()).data?t.jsx(o,{...g}):t.jsx(E,{})},s={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:h.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:T.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};var p,i,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      reservasjonStatus: {
        erReservert: false
      },
      saksnummer: '12213234',
      personnummer: '1010',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '12344',
      andreKriterier: []
    }, {
      id: 2,
      reservasjonStatus: {
        erReservert: false
      },
      saksnummer: '12213234',
      personnummer: '1010',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '12344',
      andreKriterier: []
    }]
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,d,k;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(k=(d=n.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};const ne=["Default","IngentingBleFunnet"];export{s as Default,n as IngentingBleFunnet,ne as __namedExportsOrder,se as default};
