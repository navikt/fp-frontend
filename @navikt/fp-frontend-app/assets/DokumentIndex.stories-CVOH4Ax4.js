import{j as a,w as F}from"./iframe-Dnfhn1YB.js";import{Q as N}from"./index.es-fOUzb52u.js";import{u as D,F as j,i as m,w as U,n as f,c as I,d as _}from"./fagsakApi-DIKZF_1h.js";import{h as e,H as s,c as T}from"./index-Bkjx3gCw.js";import{D as p,K as i}from"./DokumentIndex-CmGkXdFI.js";import{g as E}from"./withIntl-CvkMrhqt.js";import{U as H}from"./UtvidEllerMinskKnapp-D6DXc6Ik.js";import{m as S}from"./nb_NO-D39UuuyA.js";import"./VStack-DUh9eA8z.js";import"./index-I8Q3DUDg.js";import"./CheckmarkCircleFill-DASCzHyM.js";import"./ExclamationmarkTriangleFill-B5Q-6tKv.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./DokumentLink-DhOMqRaw.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-BSG_nJRX.js";import"./message-58ng55Ym.js";import"./Table-B1lYQ-BM.js";import"./ChevronDown-Cjb6iLK4.js";import"./Checkbox-CuWxNHAA.js";import"./StarFill-DGdmK8Bn.js";import"./SupportHeader-NCGMaM7s.js";import"./ErrorBoundary-DW_OLSWp.js";import"./IngenBehandlingValgtPanel-CZvy_wT2.js";import"./errorType-C7zgJfRI.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,C=E(S),h=o=>T(U(f(m.sakLinks.find(r=>r.rel===o)).href)),st={title:"fagsak/DokumentIndex",decorators:[C,F],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(H,{toggleVisUtvidetBehandlingDetaljer:O("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=D(_());return r==="success"?a.jsx(p,{...o}):a.jsx(N,{})}},t={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(k=t.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var g,l,c;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([]))]
    }
  },
  args: {}
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ot=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,ot as __namedExportsOrder,st as default};
