import{j as a,w as F}from"./iframe-DaT-6NHp.js";import{Q as N}from"./index.es-5lAmf7Pc.js";import{u as D,F as j,i as m,w as U,n as f,c as I,d as _}from"./fagsakApi-X_vhOLW2.js";import{h as e,H as s,c as T}from"./index-CuvBi0Zn.js";import{D as p,K as i}from"./DokumentIndex-hrJIb3Hc.js";import{g as E}from"./withIntl-Dy_C6kL9.js";import{U as H}from"./UtvidEllerMinskKnapp-D46PcvPL.js";import{m as S}from"./nb_NO-D39UuuyA.js";import"./VStack-Dc6RlHb2.js";import"./index-CV4JYvUL.js";import"./CheckmarkCircleFill-DMjkJCi_.js";import"./ExclamationmarkTriangleFill-B_DNBF31.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./DokumentLink-BOs2ka5w.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-CARI-SK_.js";import"./message-CSt6z7Sq.js";import"./Table-Bx4BIvIL.js";import"./ChevronDown-7RkpgRZ2.js";import"./Checkbox-BMs6EhS4.js";import"./StarFill-C3Wb4o9X.js";import"./SupportHeader-7AHM0WKR.js";import"./ErrorBoundary-C-dKt_s5.js";import"./IngenBehandlingValgtPanel-CT-Q1-19.js";import"./errorType-hGZZvx9n.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,C=E(S),h=o=>T(U(f(m.sakLinks.find(r=>r.rel===o)).href)),st={title:"fagsak/DokumentIndex",decorators:[C,F],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(H,{toggleVisUtvidetBehandlingDetaljer:O("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=D(_());return r==="success"?a.jsx(p,{...o}):a.jsx(N,{})}},t={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
