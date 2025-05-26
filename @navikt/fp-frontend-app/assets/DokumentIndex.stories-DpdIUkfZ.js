import{j as a}from"./index-nufLo1NJ.js";import{r as F}from"./index.es-DJ6BCpYL.js";import{w as N,c as D}from"./withPanelData-DPuHUr4Y.js";import{u as f,F as j,i as m,w as U,n as H,c as E,d as I}from"./fagsakApi-BuY4aD1j.js";import{h as e,H as s,c as T}from"./index-Cg096ojA.js";import{D as p,K as i}from"./DokumentIndex-Byqiu3Wx.js";import{g as S}from"./withIntl-DbQ9zPc0.js";import{U as _}from"./UtvidEllerMinskKnapp-BIpkhYxR.js";import{m as w}from"./nb_NO-D39UuuyA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-0CCRSEf1.js";import"./index-mMUbb89k.js";import"./CheckmarkCircleFill-BB8lcxtn.js";import"./ExclamationmarkTriangleFill-CrvpSpF4.js";import"./v4-CtRu48qb.js";import"./entry-preview-CmCp_Saf.js";import"./iframe-D6DEVYbk.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./decorators-Bnaor6Ku.js";import"./DokumentLink-CQdpsYtP.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-CB9DOqWk.js";import"./message-DYZHeMYc.js";import"./Table-GThiQbHA.js";import"./ChevronDown-DL8BLSEf.js";import"./Checkbox-BRUi_2RV.js";import"./StarFill-CtTLTZsX.js";import"./SupportHeader-DiTluZud.js";import"./ErrorBoundary-PK6UTL5p.js";import"./IngenBehandlingValgtPanel-RPEFpYp9.js";import"./errorType-_o4G3Q68.js";import"./Tooltip-CTWnwEJh.js";const x=S(w),h=o=>T(U(H(m.sakLinks.find(r=>r.rel===o)).href)),ut={title:"fagsak/DokumentIndex",decorators:[x,N],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(_,{toggleVisUtvidetBehandlingDetaljer:D("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=f(E());return r==="success"?a.jsx(p,{...o}):a.jsx(F,{})}},t={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
