import{j as c}from"./jsx-runtime-CLpGMVip.js";import{H}from"./index.es-DSZ6vyNz.js";import{a as w}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{F as b,i as h,u as m,a as P,w as v,n as y,b as r,c as U}from"./initFetch-D7cT7gdG.js";import{h as a,H as n}from"./index-DqeTBbD1.js";import"./aktivitetStatus-02fOJoqz.js";import{B as x}from"./behandlingStatus-CZkrUkra.js";import{B as C}from"./behandlingType-BdbjGMJD.js";import{F as J,a as M}from"./fagsakYtelseType-CioTp5dA.js";import{b as Q,w as Y}from"./withQueryClient-BhxeJHbr.js";import{g as q}from"./withIntl-CBlK8vyP.js";import{a as z}from"./alleKodeverk-Ck9zwXaq.js";import{a as W}from"./alleKodeverkTilbakekreving-dIUSSyeF.js";import{V as X,F as g}from"./FagsakData-4_VgJz8T.js";import{B as f}from"./BehandlingSupportIndex--i2HlOEr.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import{m as Z}from"./nb_NO-FM-zO8Y1.js";import"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-CJilavqB.js";import"./ExclamationmarkTriangleFill-CsTh_wEM.js";import"./CheckmarkCircleFill-Bl4cKVqn.js";import"./v4-CtRu48qb.js";import"./decorators-DIzpaN6C.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./paths-DF3DToEQ.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-CK_E6T3N.js";import"./DokumentIndex-Dp8oXmWr.js";import"./eksterneLenker-DcE6CUbm.js";import"./Table-B0HROgQp.js";import"./Checkbox-C1xltzrT.js";import"./useFormField-MDjy6XNO.js";import"./StarFill-D7ZvwAla.js";import"./Link-DUdM8a-n.js";import"./SupportHeader-Ope3uuph.js";import"./ErrorBoundary-M9I8n0w6.js";import"./IngenBehandlingValgtPanel-D1ZK49Qu.js";import"./RestApiErrorContext-CYa6iUCd.js";import"./HistorikkIndex-CS1cswnM.js";import"./kodeverkUtils-DLZgokMR.js";import"./Popover-DKHfp4F7.js";import"./Box-BoPVvldT.js";import"./MeldingIndex-BCY1zi0j.js";import"./index.es-BPvqjJ4A.js";import"./Tag-mBD_SuvX.js";import"./dokumentMalType-uHvYWaNM.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-D4zlcorq.js";import"./useKodeverk-CA2ls1P3.js";import"./useVisForhandsvisningAvMelding-DRlnF7R-.js";import"./SettPaVentReadOnlyModal-DtzpvXqd.js";import"./TotrinnskontrollIndex-DeGLpd05.js";import"./aksjonspunktCodes-BuBbCIxs.js";import"./behandlingArsakType-CTXggz2Y.js";import"./moment-C5S46NFB.js";import"./behandlingResultatType-DHbqkXMl.js";const $=q(Z),s=t=>v(y(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:X.OPPRETT},u={versjon:2,uuid:"1",behandlingKoet:!1,behandlingPaaVent:!1,kanHenleggeBehandling:!0,type:C.REVURDERING,status:x.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:J.FORELDREPENGER,status:M.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},ra={title:"fagsak/BehandlingSupportIndex",decorators:[$,Q,Y],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(z)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(W)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:w("button-click")},render:t=>{const{status:e}=m(U()),{kodeverkOptions:G,fptilbake:O}=P(),{data:L}=m(G(e==="success")),{data:_}=m(O.kodeverkOptions(e==="success"));return L&&_?c.jsx(f,{...t}):c.jsx(H,{})}},i={args:{fagsakData:new g(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},p={args:{fagsakData:new g(d)}};var T,N,A;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var F,B,D;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData({
      ...FAGSAK,
      behandlinger: [{
        ...BEHANDLING,
        behandlingTillatteOperasjoner: {
          ...BEHANDLING_TILLATTE_OPERASJONER,
          behandlingFraBeslutter: true
        }
      }]
    }),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...(D=(B=o.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var I,R,K;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData({
      ...FAGSAK,
      behandlinger: [{
        ...BEHANDLING,
        behandlingTillatteOperasjoner: {
          ...BEHANDLING_TILLATTE_OPERASJONER,
          behandlingTilGodkjenning: true
        }
      }]
    }),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...(K=(R=l.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var j,S,V;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const sa=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,p as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,sa as __namedExportsOrder,ra as default};
