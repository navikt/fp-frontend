import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{Q as T}from"./index.es-3mY2NE4O.js";import{c as i,b as j,w as F,d as I,B,F as K}from"./withPanelData-g3ZJRFFm.js";import{u as o,a as A,F as l,i as f,w as c,n as b,b as M,c as p}from"./initFetch-ChXFpEDe.js";import{h as t,H as a}from"./index-CiTJJs0Y.js";import{D as m}from"./dokumentMalType-uHvYWaNM.js";import{F as O}from"./fagsakStatus-NXwGwLtb.js";import{g as L}from"./withIntl-BtEsO8W8.js";import{a as V}from"./alleKodeverk-Dm9joGL5.js";import{a as _}from"./alleKodeverkTilbakekreving-dIUSSyeF.js";import{F as y,V as H}from"./FagsakData-4_VgJz8T.js";import{U as S}from"./UtvidEllerMinskKnapp-CIV72Xx7.js";import{M as g}from"./MeldingIndex-CK1sNOBn.js";import{i as v}from"./initFetchTilbake-BtBiXUqM.js";import{m as U}from"./nb_NO-BsDjQrpy.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-DwHIkOsx.js";import"./ExclamationmarkTriangleFill-CdfK8heW.js";import"./message-BNb4AvKI.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-SBFJ0j9G.js";import"./iframe-BXEM1MRC.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-C7LF3qXI.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./Tooltip-C3Q5dDht.js";import"./index.es-CmO1OSHi.js";import"./Tag-CV0tVHoV.js";import"./Popover-YVCHIgc7.js";import"./Checkbox-CQh5ScDP.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-Tbs5jGEp.js";import"./Link-CuhnNa_l.js";import"./useKodeverk-BHr7o7nr.js";import"./useVisForhandsvisningAvMelding-UHl9Spyq.js";import"./SupportHeader-DuYI_GT0.js";import"./ErrorBoundary-bIoxSojd.js";import"./IngenBehandlingValgtPanel-CqIrUXpn.js";import"./RestApiErrorContext-D7YnyNzE.js";import"./SettPaVentReadOnlyModal-BP-1I3V1.js";const G=L(U),d=n=>c(b(f.links.find(e=>e.rel===n)??v.links.find(e=>e.rel===n)).href),P=[{kode:"Mal1",navn:"Mal 1",tilgjengelig:!0},{kode:"Mal2",navn:"Mal 2",tilgjengelig:!0},{kode:"Mal3",navn:"Mal 3",tilgjengelig:!0},{kode:m.VARSEL_OM_REVURDERING,navn:"Varsel om revurdering",tilgjengelig:!0},{kode:m.INNHENTE_OPPLYSNINGER,navn:"Innhent",tilgjengelig:!0}],x={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:H.OPPRETT},R=[{versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:B.REVURDERING,status:I.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:x,brevmaler:P,språkkode:"NB",links:[{href:"/fpsak/bestill",rel:"brev-bestill"}]}],w={saksnummer:"123",fagsakYtelseType:K.FORELDREPENGER,status:O.UNDER_BEHANDLING,behandlinger:R,sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],brukerManglerAdresse:!0};var k;const _e={title:"fagsak/MeldingIndex",decorators:[G,j,F],component:g,parameters:{msw:{handlers:[t.get(l.INIT_FETCH,()=>a.json(f)),t.get(l.INIT_FETCH_FPTILBAKE,()=>a.json(v)),t.get(d(p.KODEVERK),()=>a.json(V)),t.get(d(p.KODEVERK_FPTILBAKE),()=>a.json(_)),t.post(c(b((k=R[0])==null?void 0:k.links[0]).href),()=>a.json())]}},args:{fagsakData:new y(w),valgtBehandlingUuid:"1",setMeldingFormData:i("button-click"),hentOgSettBehandling:i("button-click"),toggleVisUtvidetBehandlingDetaljerKnapp:s.jsx(S,{toggleVisUtvidetBehandlingDetaljer:i("button-click"),visUtvidetBehandlingDetaljer:!1})},render:n=>{const{status:e}=o(M()),{kodeverkOptions:D}=A(),{data:N}=o(D(e==="success"));return N?s.jsx(g,{...n}):s.jsx(T,{})}},r={};var u,h,E;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(E=(h=r.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const ye=["Default"];export{r as Default,ye as __namedExportsOrder,_e as default};
