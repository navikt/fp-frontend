import{j as a}from"./index-nufLo1NJ.js";import{r as F}from"./index.es-BD5hDPkm.js";import{w as N,c as D}from"./withPanelData-DKK9DXru.js";import{u as f,F as j,i as m,w as U,n as H,b as E,c as I}from"./fagsakApi-BPFEguWL.js";import{h as e,H as s,c as T}from"./index-Cg096ojA.js";import{D as p,K as i}from"./DokumentIndex-DPZ1CIvb.js";import{g as S}from"./withIntl-C9WEGJkX.js";import{U as _}from"./UtvidEllerMinskKnapp-B6Lvjy0K.js";import{m as w}from"./nb_NO-D39UuuyA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-0CCRSEf1.js";import"./index-mMUbb89k.js";import"./CheckmarkCircleFill-Ac0J0NLC.js";import"./ExclamationmarkTriangleFill-bsMvQ_fS.js";import"./v4-CtRu48qb.js";import"./entry-preview-BCmrubB7.js";import"./iframe-CvOyTXeD.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./decorators-Bnaor6Ku.js";import"./DokumentLink-CuBA-bKG.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-BJnLkNWm.js";import"./message-B0i3JlHd.js";import"./Table-CavULp6q.js";import"./ChevronDown-BXugOVrI.js";import"./Checkbox-BlJq5-sJ.js";import"./StarFill-UBV-I_eQ.js";import"./SupportHeader-xZROwT-s.js";import"./ErrorBoundary-B09gRWDj.js";import"./IngenBehandlingValgtPanel-DQvSVSvJ.js";import"./errorType-Bd3zmrf5.js";import"./Tooltip-DJpwmNda.js";const x=S(w),h=o=>T(U(H(m.sakLinks.find(r=>r.rel===o)).href)),ut={title:"fagsak/DokumentIndex",decorators:[x,N],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(_,{toggleVisUtvidetBehandlingDetaljer:D("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=f(E());return r==="success"?a.jsx(p,{...o}):a.jsx(F,{})}},t={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const gt=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,gt as __namedExportsOrder,ut as default};
