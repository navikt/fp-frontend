import{h as t,L as e,H as r}from"./fplosAvdelingslederApi-DNP73Upt.js";import{w as p,F as l,B as m,m as E}from"./nb_NO-rozzxS7Z.js";import{g as S}from"./withIntl-BSNqeFWw.js";import"./jsx-runtime-D_zvdyIk.js";import{a as A}from"./useLosKodeverk-C7a-MglP.js";import{A as o}from"./andreKriterierType-DFB25pp4.js";import{K as d}from"./KoSortering-BHrQm0Td.js";import{E as R}from"./EndreSakslisterPanel-aLMVUef2.js";import"./decorators-DIzpaN6C.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-BVAIC6Kg.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./BasePrimitive-4Eka1X40.js";import"./v4-CtRu48qb.js";import"./react-Bu2w_5aE.js";import"./iframe-BtfLcYZS.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./useQuery-DtT7oZ3t.js";import"./useMutation-BosAOaUz.js";import"./GjeldendeSakslisterTabell-BoeMdy_H.js";import"./index.es-CdLdJLVf.js";import"./dayjs.min-Cke173X9.js";import"./kodeverkTyper-CSMzNBS4.js";import"./SletteSakslisteModal-DbZOpozk.js";import"./Table-B9E7IXJy.js";import"./SaksbehandlereForSakslisteForm-BYKk-Ogo.js";import"./index.es-DF4ymgBM.js";import"./FlyttReservasjonModal-D0d--T1w.js";import"./index.es-Cvrkl4Kk.js";import"./Box-D9SWVWb3.js";import"./UtvalgskriterierForSakslisteForm-CpMh6BMe.js";import"./AndreKriterierVelger-D7hmyTi7.js";import"./BehandlingstypeVelger-BVKy-cpt.js";import"./FagsakYtelseTypeVelger-CCI1_paT.js";import"./SorteringVelger-dFS9yXNY.js";import"./useDebounce-wCq0dWuS.js";const T=S(E),L=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[m.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[l.FORELDREPENGER],andreKriterier:[{andreKriterierType:o.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:o.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],rt={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:R,decorators:[T,p],parameters:{msw:{handlers:[t.get(e.KODEVERK_LOS,()=>r.json(A)),t.get(e.OPPGAVE_ANTALL,()=>r.json(1)),t.get(e.SAKSLISTER_FOR_AVDELING,()=>r.json(L)),t.post(e.LAGRE_SAKSLISTE_NAVN,()=>new r(null,{status:200})),t.post(e.LAGRE_SAKSLISTE_SORTERING,()=>new r(null,{status:200})),t.post(e.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new r(null,{status:200})),t.post(e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new r(null,{status:200})),t.post(e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new r(null,{status:200})),t.post(e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new r(null,{status:200})),t.post(e.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new r(null,{status:200}))]}}},s={args:{valgtAvdelingEnhet:"NAV Oslo",avdelingensSaksbehandlere:[]}};var a,n,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    valgtAvdelingEnhet: 'NAV Oslo',
    avdelingensSaksbehandlere: []
  }
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const st=["Default"];export{s as Default,st as __namedExportsOrder,rt as default};
