import{j as a,w as g}from"./iframe-B7RFakjc.js";import{Q as l}from"./index.es-Txy0ZEqv.js";import{u as c,F as d,i as m,w as j,n as I,c as k,d as h}from"./fagsakApi-D6nLIbKJ.js";import{h as e,H as s,c as F}from"./index-M8Hl2qVV.js";import{D as p,K as i}from"./DokumentIndex-DeRMBP5U.js";import{g as N}from"./withIntl-CS8_5rnR.js";import{U as D}from"./UtvidEllerMinskKnapp-D3GY-HVH.js";import{m as U}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-D9Z9MdNV.js";import"./VStack-C2YRXOAV.js";import"./index-B6_QhZd5.js";import"./CheckmarkCircleFill-jUVQ3R33.js";import"./ExclamationmarkTriangleFill-hOFj9DSV.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./FaktaKort-Cl9a9Os3.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-DXPj6TCE.js";import"./message-VlotzVcx.js";import"./Table-C-rn9bBk.js";import"./Checkbox-9mJeFR1O.js";import"./StarFill-S1MtcnPf.js";import"./SupportHeader-CRXEUj4x.js";import"./ErrorBoundary-DQK_WK0n.js";import"./IngenBehandlingValgtPanel-Cs8xPOsH.js";import"./errorType-CchE_-5E.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,_=N(U),u=o=>F(j(I(m.sakLinks.find(r=>r.rel===o)).href)),X={title:"fagsak/DokumentIndex",decorators:[_,g],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(D,{toggleVisUtvidetBehandlingDetaljer:f("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=c(h());return r==="success"?a.jsx(p,{...o}):a.jsx(l,{})}},t={parameters:{msw:{handlers:[e.get(d.INIT_FETCH,()=>s.json(m)),e.get(u(k.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(d.INIT_FETCH,()=>s.json(m)),e.get(u(k.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([]))]
    }
  },
  args: {}
}`,...n.parameters?.docs?.source}}};const Z=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,Z as __namedExportsOrder,X as default};
