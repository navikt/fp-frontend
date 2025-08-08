import{j as a,w as g}from"./iframe-BBDSkZ_h.js";import{X as l}from"./index.es-DsGrfFWK.js";import{u as c,F as d,i as m,w as j,n as I,c as k,d as h}from"./fagsakApi-uUpQ5VM4.js";import{h as e,H as s,c as F}from"./index-CoIGGqyg.js";import{D as p,K as i}from"./DokumentIndex-DBFz4-Ds.js";import{g as N}from"./withIntl-BwzshJ4K.js";import{U as D}from"./UtvidEllerMinskKnapp-DXdiinPP.js";import{m as U}from"./nb_NO-D39UuuyA.js";import"./preload-helper-D9Z9MdNV.js";import"./VStack-Cc-tSHU5.js";import"./index-BzeoCWNC.js";import"./CheckmarkCircleFill-BkOEoaFW.js";import"./ExclamationmarkTriangleFill-CAjciOLG.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./FaktaKort-DYRkZ-Lu.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-NqpzS-XT.js";import"./message-CPNu86qJ.js";import"./Table-B92GZLPb.js";import"./ChevronDown-etSKI0N9.js";import"./Checkbox-CMTHlPcK.js";import"./StarFill-cKX5MAL6.js";import"./SupportHeader-DztlHM0S.js";import"./ErrorBoundary-DrVIKps1.js";import"./IngenBehandlingValgtPanel-9vuzi77w.js";import"./errorType-DEsjYcGW.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,_=N(U),u=o=>F(j(I(m.sakLinks.find(r=>r.rel===o)).href)),Z={title:"fagsak/DokumentIndex",decorators:[_,g],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(D,{toggleVisUtvidetBehandlingDetaljer:f("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=c(h());return r==="success"?a.jsx(p,{...o}):a.jsx(l,{})}},t={parameters:{msw:{handlers:[e.get(d.INIT_FETCH,()=>s.json(m)),e.get(u(k.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(d.INIT_FETCH,()=>s.json(m)),e.get(u(k.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,$ as __namedExportsOrder,Z as default};
