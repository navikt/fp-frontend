import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{Q as O}from"./index.es-3mY2NE4O.js";import{c as E,b as _,w as c,d as f,B as D,F}from"./withPanelData-g3ZJRFFm.js";import{u as d,a as K,F as g,i as m,w as L,n as S,b as j,c as p}from"./initFetch-ChXFpEDe.js";import{h as a,H as s}from"./index-CiTJJs0Y.js";import{A as n}from"./aksjonspunktCodes-BLM-Fgv6.js";import{F as I}from"./fagsakStatus-NXwGwLtb.js";import{g as V}from"./withIntl-BtEsO8W8.js";import{a as b}from"./alleKodeverk-Dm9joGL5.js";import{a as B}from"./alleKodeverkTilbakekreving-dIUSSyeF.js";import{F as v,V as U}from"./FagsakData-4_VgJz8T.js";import{U as G}from"./UtvidEllerMinskKnapp-CIV72Xx7.js";import{T as k}from"./TotrinnskontrollIndex-TcIJEsI0.js";import{i as u}from"./initFetchTilbake-BtBiXUqM.js";import{m as y}from"./nb_NO-BsDjQrpy.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-DwHIkOsx.js";import"./ExclamationmarkTriangleFill-CdfK8heW.js";import"./message-BNb4AvKI.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-SBFJ0j9G.js";import"./iframe-BXEM1MRC.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-C7LF3qXI.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./Tooltip-C3Q5dDht.js";import"./index.es-CmO1OSHi.js";import"./Tag-CV0tVHoV.js";import"./Popover-YVCHIgc7.js";import"./Checkbox-CQh5ScDP.js";import"./behandlingArsakType-CTXggz2Y.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./behandlingResultatType-DHbqkXMl.js";import"./Link-CuhnNa_l.js";import"./paths-CHo4Pa8b.js";import"./useKodeverk-BHr7o7nr.js";import"./useVisForhandsvisningAvMelding-UHl9Spyq.js";import"./SupportHeader-DuYI_GT0.js";import"./ErrorBoundary-bIoxSojd.js";import"./IngenBehandlingValgtPanel-CqIrUXpn.js";import"./RestApiErrorContext-D7YnyNzE.js";const P=V(y),l=t=>L(S(m.links.find(e=>e.rel===t)??m.sakLinks.find(e=>e.rel===t)??u.links.find(e=>e.rel===t)).href),r=t=>({aksjonspunktKode:t,opptjeningAktiviteter:[],vurderPaNyttArsaker:[]}),M=[{skjermlenkeType:"FAKTA_OM_FOEDSEL",totrinnskontrollAksjonspunkter:[r(n.SJEKK_MANGLENDE_FODSEL),r(n.TERMINBEKREFTELSE),r(n.AUTO_VENT_PÅ_FODSELREGISTRERING)]},{skjermlenkeType:"FAKTA_FOR_OMSORG",totrinnskontrollAksjonspunkter:[r(n.OMSORGSOVERTAKELSE),r(n.MANUELL_VURDERING_AV_OMSORGSVILKARET)]},{skjermlenkeType:"PUNKT_FOR_FORELDREANSVAR",totrinnskontrollAksjonspunkter:[r(n.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD),r(n.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD)]}],H={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!0,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:U.OPPRETT},x={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:D.FORSTEGANGSSOKNAD,status:f.FATTER_VEDTAK,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,toTrinnsBehandling:!0,behandlingTillatteOperasjoner:H,totrinnskontrollÅrsaker:M,behandlingÅrsaker:[{behandlingArsakType:""}]},w={saksnummer:"123",fagsakYtelseType:F.FORELDREPENGER,status:I.UNDER_BEHANDLING,behandlinger:[x],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},Ut={title:"fagsak/TotrinnskontrollIndex",decorators:[P,_,c],component:k,parameters:{msw:{handlers:[a.get(g.INIT_FETCH,()=>s.json(m)),a.get(g.INIT_FETCH_FPTILBAKE,()=>s.json(u)),a.get(l(p.KODEVERK),()=>s.json(b)),a.get(l(p.KODEVERK_FPTILBAKE),()=>s.json(B)),a.get(l(p.ALL_DOCUMENTS),()=>s.json([]))]}},args:{fagsakData:new v(w),valgtBehandlingUuid:"1",setBeslutterFormData:E("button-click"),toggleVisUtvidetBehandlingDetaljerKnapp:i.jsx(G,{toggleVisUtvidetBehandlingDetaljer:E("button-click"),visUtvidetBehandlingDetaljer:!1})},render:t=>{const{status:e}=d(j()),{kodeverkOptions:h}=K(),{data:N}=d(h(e==="success"));return N?i.jsx(k,{...t}):i.jsx(O,{})}},o={};var T,A,R;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(R=(A=o.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const Gt=["Default"];export{o as Default,Gt as __namedExportsOrder,Ut as default};
