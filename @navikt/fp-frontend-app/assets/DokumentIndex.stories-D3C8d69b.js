import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{e as D}from"./index.es-CsWo6KOF.js";import{w as N,c as F}from"./withPanelData-ct5SkuWt.js";import{u as f,F as c,i as m,w as U,n as H,b as E,c as I}from"./initFetch-Cxe_yENx.js";import{h as e,H as s}from"./index-CiTJJs0Y.js";import{D as p,K as i}from"./DokumentIndex-ECnljSq0.js";import{g as T}from"./withIntl-CHyGw0ue.js";import{U as S}from"./UtvidEllerMinskKnapp-BfoU7Y8Q.js";import{m as _}from"./nb_NO-BsDjQrpy.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-BzaKijjv.js";import"./ExclamationmarkTriangleFill-Ce9k_PV1.js";import"./message-64JzDULN.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-DySJX0im.js";import"./iframe-Cxx4yVMB.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-C7LF3qXI.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./eksterneLenker-DOKwbE_M.js";import"./Table-CgA1QBaB.js";import"./Checkbox-CEHKqIZf.js";import"./StarFill-BoNgH5o7.js";import"./Link-sqx5TZu_.js";import"./SupportHeader-BDp_KSxy.js";import"./ErrorBoundary-DViSYZSL.js";import"./IngenBehandlingValgtPanel-ZkZNKWT4.js";import"./RestApiErrorContext-D7YnyNzE.js";import"./Tooltip-CdYk4hOY.js";const w=T(_),h=o=>U(H(m.sakLinks.find(r=>r.rel===o)).href),kt={title:"fagsak/DokumentIndex",decorators:[w,N],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(S,{toggleVisUtvidetBehandlingDetaljer:F("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=f(E());return r==="success"?a.jsx(p,{...o}):a.jsx(D,{})}},t={parameters:{msw:{handlers:[e.get(c.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(c.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([{
        journalpostId: '1',
        dokumentId: '1',
        tittel: 'dok',
        tidspunkt: '10.10.2017 10:23',
        kommunikasjonsretning: Kommunikasjonsretning.INN
      }, {
        journalpostId: '2',
        dokumentId: '2',
        tittel: 'dok1',
        tidspunkt: '10.10.2019 10:23',
        kommunikasjonsretning: Kommunikasjonsretning.INN
      }, {
        journalpostId: '3',
        dokumentId: '3',
        tittel: 'dok2',
        tidspunkt: '10.10.2018 10:23',
        kommunikasjonsretning: Kommunikasjonsretning.INN
      }]))]
    }
  },
  args: {
    behandlingUuid: '11212',
    behandlingVersjon: 1
  }
}`,...(u=(k=t.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var g,l,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([]))]
    }
  },
  args: {}
}`,...(j=(l=n.parameters)==null?void 0:l.docs)==null?void 0:j.source}}};const ut=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,ut as __namedExportsOrder,kt as default};
