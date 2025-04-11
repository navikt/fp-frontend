import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{E as F}from"./index.es-BjCn_YPi.js";import{w as N,c as D}from"./withPanelData-BbEdLsGE.js";import{u as f,F as c,i as m,w as U,n as E,b as H,c as I}from"./fagsakApi-DAbq8v9U.js";import{h as e,H as s}from"./index-Y5SXXV7L.js";import{D as p,K as i}from"./DokumentIndex-B5tFosnP.js";import{g as T}from"./withIntl-CvgsrKQY.js";import{U as S}from"./UtvidEllerMinskKnapp-BZYMD_0r.js";import{m as _}from"./nb_NO-BsDjQrpy.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-DcIV8Eg7.js";import"./ExclamationmarkTriangleFill-BsL-PFix.js";import"./message-CPNTx2BK.js";import"./index-gMDb9Zpm.js";import"./index-DrFkskS4.js";import"./v4-CtRu48qb.js";import"./entry-preview-CelM08PB.js";import"./iframe-DJP0CDod.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-duuaId12.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./DokumentLink-D8Uvxx6e.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-DsTiiFR_.js";import"./Table-C4age8NB.js";import"./Checkbox-BI3PPSR5.js";import"./StarFill-BLXmcVJ8.js";import"./SupportHeader-Dg-Om41M.js";import"./ErrorBoundary-CU_K8Tyh.js";import"./IngenBehandlingValgtPanel-fdPrwUtG.js";import"./RestApiErrorContext-Dcq0Gika.js";import"./Tooltip-7v8e91wa.js";const w=T(_),h=o=>U(E(m.sakLinks.find(r=>r.rel===o)).href),kt={title:"fagsak/DokumentIndex",decorators:[w,N],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(S,{toggleVisUtvidetBehandlingDetaljer:D("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=f(H());return r==="success"?a.jsx(p,{...o}):a.jsx(F,{})}},t={parameters:{msw:{handlers:[e.get(c.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(c.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([{
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
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([]))]
    }
  },
  args: {}
}`,...(j=(l=n.parameters)==null?void 0:l.docs)==null?void 0:j.source}}};const ut=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,ut as __namedExportsOrder,kt as default};
