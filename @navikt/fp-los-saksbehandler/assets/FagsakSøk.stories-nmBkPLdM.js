import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./index.es-Cn-IvYMv.js";import{a as e,w as S,F as t,B as r,b as p,m as f}from"./nb_NO-xrApYx-x.js";import{u as c}from"./useQuery-Dw5LOAeo.js";import{h as R,L as h,H as N,l as b}from"./fplosSaksbehandlerApi-Db1puaAh.js";import{F as T}from"./SøkResultat-CfdQdaYh.js";import{g as F}from"./withIntl-CadZhcLK.js";import{a as v}from"./alleKodeverkLos-B7zuCOtP.js";import{K as D}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-C6ROMxKd.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Loader-M6bB4djA.js";import"./v4-CtRu48qb.js";import"./entry-preview-C9q2wJwP.js";import"./iframe-JTByJVwS.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./dayjs.min-DkLNzaWO.js";import"./decorators-Bnaor6Ku.js";import"./useLosKodeverk-BBl3mhXZ.js";import"./Table-CMBifg-n.js";import"./ArrowsUpDown-CnH08YG6.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-Ccc1_2_K.js";import"./message-DElUF6rO.js";import"./ChevronRight-DoATFg0B.js";import"./SøkForm-DqZFZfnr.js";import"./index.es-BxK_kznv.js";import"./Modal-DkIVXrTr.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./Tag-CrjI0iYZ.js";import"./VStack-BmaVl5ug.js";import"./index.es-BNQ9q8zq.js";import"./ExclamationmarkTriangleFill-DnpcbboS.js";import"./PersonInfo-Di5bGvh0.js";const y=F(f),ke={title:"søk/FagsakSøk",component:o,decorators:[y,S],parameters:{msw:{handlers:[R.get(h.KODEVERK_LOS,()=>N.json(v))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:u=>c(b()).data?a.jsx(o,{...u}):a.jsx(E,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:t.FORELDREPENGER,status:T.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:D.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},s={args:{fagsaker:[],fagsakOppgaver:[]}};var i,m,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      status: {
        erReservert: false
      },
      saksnummer: '12213234',
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
      saksnummer: '12213234',
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
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,g,k;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const ue=["Default","IngentingBleFunnet"];export{n as Default,s as IngentingBleFunnet,ue as __namedExportsOrder,ke as default};
