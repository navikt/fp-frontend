import{j as a}from"./index-nufLo1NJ.js";import{r as F}from"./index.es-D76Emi2H.js";import{w as N,c as D}from"./withPanelData-DDO9GM3C.js";import{u as f,F as j,i as m,w as U,n as H,c as E,d as I}from"./fagsakApi-kcFx2tzZ.js";import{h as e,H as s,c as T}from"./index-Dyi8laJ0.js";import{D as p,K as i}from"./DokumentIndex-C7451odl.js";import{g as S}from"./withIntl-MFYpi0o4.js";import{U as _}from"./UtvidEllerMinskKnapp-CcoSNWIa.js";import{m as w}from"./nb_NO-D39UuuyA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-0CCRSEf1.js";import"./index-mMUbb89k.js";import"./CheckmarkCircleFill-8fAahKc9.js";import"./ExclamationmarkTriangleFill-DEQjdBSq.js";import"./v4-CtRu48qb.js";import"./entry-preview-Dmw5udtt.js";import"./iframe-ET9an2JE.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./behandlingResultatType-CKS0Ckn9.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./decorators-Bnaor6Ku.js";import"./DokumentLink-BxNl7d4Q.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-BZdtj1iU.js";import"./message-BGD2cnPZ.js";import"./Table-BB6HTXnY.js";import"./ChevronDown-AYRINwUK.js";import"./Checkbox-D9NlhgvT.js";import"./StarFill-BVsrI6zn.js";import"./SupportHeader-DK0P1wzF.js";import"./ErrorBoundary-juzLt87X.js";import"./IngenBehandlingValgtPanel-Cq7k5T_E.js";import"./errorType-HJSn7omc.js";import"./Tooltip-Br7ZXFtO.js";const x=S(w),h=o=>T(U(H(m.sakLinks.find(r=>r.rel===o)).href)),lt={title:"fagsak/DokumentIndex",decorators:[x,N],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(_,{toggleVisUtvidetBehandlingDetaljer:D("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=f(E());return r==="success"?a.jsx(p,{...o}):a.jsx(F,{})}},t={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ct=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,ct as __namedExportsOrder,lt as default};
