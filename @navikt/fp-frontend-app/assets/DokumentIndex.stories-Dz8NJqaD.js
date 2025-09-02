import{j as a,w as g}from"./iframe-L_KgTyg_.js";import{Q as l}from"./index.es-CA41BrA4.js";import{u as c,F as d,i as m,w as j,n as I,c as k,d as h}from"./fagsakApi-Df1a6j9p.js";import{h as e,H as s,c as F}from"./index-CIWA3yCk.js";import{D as p,K as i}from"./DokumentIndex-B41gSlo-.js";import{g as N}from"./withIntl-DfZCNtOY.js";import{U as D}from"./UtvidEllerMinskKnapp-fDLbQof4.js";import{m as U}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-D9Z9MdNV.js";import"./VStack-CJHqWZyg.js";import"./index-BBnDiHBR.js";import"./CheckmarkCircleFill-DFyQe3F2.js";import"./ExclamationmarkTriangleFill-CG-iL2Ba.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./FaktaKort-yFWk7RKF.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-B0rM6wOM.js";import"./message-B69h1KM3.js";import"./Table-B2Ubsn43.js";import"./Checkbox-BlSObiSd.js";import"./StarFill-xBJjS3me.js";import"./SupportHeader-9DytpOCS.js";import"./ErrorBoundary-BWY5-zux.js";import"./IngenBehandlingValgtPanel-BgkHQGex.js";import"./errorType-D1MQAdgY.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,_=N(U),u=o=>F(j(I(m.sakLinks.find(r=>r.rel===o)).href)),X={title:"fagsak/DokumentIndex",decorators:[_,g],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(D,{toggleVisUtvidetBehandlingDetaljer:f("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=c(h());return r==="success"?a.jsx(p,{...o}):a.jsx(l,{})}},t={parameters:{msw:{handlers:[e.get(d.INIT_FETCH,()=>s.json(m)),e.get(u(k.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(d.INIT_FETCH,()=>s.json(m)),e.get(u(k.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
