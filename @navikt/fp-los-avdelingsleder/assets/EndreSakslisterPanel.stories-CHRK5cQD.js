import{h as t,L as e,H as r}from"./fplosAvdelingslederApi-B9myHoAP.js";import{w as p,F as l,B as m,m as E}from"./nb_NO-_FfbBV97.js";import{g as S}from"./withIntl-CZGYUivS.js";import"./jsx-runtime-D_zvdyIk.js";import{a as A}from"./useLosKodeverk-jdUiRAM4.js";import{A as o}from"./andreKriterierType-DFB25pp4.js";import{K as d}from"./KoSortering-BHrQm0Td.js";import{E as R}from"./EndreSakslisterPanel-B08sNhR8.js";import"./decorators-DIzpaN6C.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-DJXa2qsM.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./BasePrimitive-DxcTfTiV.js";import"./v4-CtRu48qb.js";import"./entry-preview-Bl8zHEv0.js";import"./iframe-DtIQerLa.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./useQuery-2ZJVC7BG.js";import"./useMutation-u2CMP91W.js";import"./GjeldendeSakslisterTabell-D1m78bCN.js";import"./index.es-D4ofPiFI.js";import"./dayjs.min-Cke173X9.js";import"./kodeverkTyper-CSMzNBS4.js";import"./SletteSakslisteModal-DVxO240A.js";import"./Table-DRPpALJ_.js";import"./SaksbehandlereForSakslisteForm-DLvK4Dj8.js";import"./index.es-CZgycWa6.js";import"./FlyttReservasjonModal-BmWsMOaW.js";import"./index.es-DnPl9iUj.js";import"./Box-C5nk-vU0.js";import"./UtvalgskriterierForSakslisteForm-B2T7UaIF.js";import"./AndreKriterierVelger-BFsNkS7k.js";import"./BehandlingstypeVelger-DIWR6eVk.js";import"./FagsakYtelseTypeVelger-tUDqU3SL.js";import"./SorteringVelger-BrFIWVlQ.js";import"./useDebounce-CLfUVMa_.js";const T=S(E),L=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[m.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[l.FORELDREPENGER],andreKriterier:[{andreKriterierType:o.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:o.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],rt={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:R,decorators:[T,p],parameters:{msw:{handlers:[t.get(e.KODEVERK_LOS,()=>r.json(A)),t.get(e.OPPGAVE_ANTALL,()=>r.json(1)),t.get(e.SAKSLISTER_FOR_AVDELING,()=>r.json(L)),t.post(e.LAGRE_SAKSLISTE_NAVN,()=>new r(null,{status:200})),t.post(e.LAGRE_SAKSLISTE_SORTERING,()=>new r(null,{status:200})),t.post(e.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new r(null,{status:200})),t.post(e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new r(null,{status:200})),t.post(e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new r(null,{status:200})),t.post(e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new r(null,{status:200})),t.post(e.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new r(null,{status:200}))]}}},s={args:{valgtAvdelingEnhet:"NAV Oslo",avdelingensSaksbehandlere:[]}};var a,n,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    valgtAvdelingEnhet: 'NAV Oslo',
    avdelingensSaksbehandlere: []
  }
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const st=["Default"];export{s as Default,st as __namedExportsOrder,rt as default};
