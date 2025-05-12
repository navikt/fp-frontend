import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as F}from"./index.es-DiQ2Qcyv.js";import{w as N,c as D}from"./withPanelData-Cc_RqdZf.js";import{u as f,F as c,i as m,w as U,n as H,b as E,c as I}from"./fagsakApi-Dezu0wuQ.js";import{h as e,H as s}from"./index-CEyyZSCQ.js";import{D as p,K as i}from"./DokumentIndex-D3eJ9LKf.js";import{g as T}from"./withIntl-m2J3t8Y6.js";import{U as S}from"./UtvidEllerMinskKnapp-B92_cryI.js";import{m as _}from"./nb_NO-BsDjQrpy.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-IfhgxH43.js";import"./ExclamationmarkTriangleFill-CzRRl4IN.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./v4-CtRu48qb.js";import"./entry-preview-41xjXI-O.js";import"./iframe-ZSK3xy1b.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./DokumentLink-Di6-wn-i.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-DygYebZ5.js";import"./message-BkyZBQP_.js";import"./Table-BhBBPwGg.js";import"./ChevronDown-KW6WmCOU.js";import"./Checkbox-_Me1OQB5.js";import"./StarFill-Dg-jJqi4.js";import"./SupportHeader-CRkjWjfa.js";import"./ErrorBoundary-B1aLs60A.js";import"./IngenBehandlingValgtPanel-o_ZaWNIP.js";import"./errorType-B8K8TXjG.js";import"./Tooltip-CBYzFstD.js";const w=T(_),h=o=>U(H(m.sakLinks.find(r=>r.rel===o)).href),ut={title:"fagsak/DokumentIndex",decorators:[w,N],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(S,{toggleVisUtvidetBehandlingDetaljer:D("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=f(E());return r==="success"?a.jsx(p,{...o}):a.jsx(F,{})}},t={parameters:{msw:{handlers:[e.get(c.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(c.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(j=(l=n.parameters)==null?void 0:l.docs)==null?void 0:j.source}}};const gt=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,gt as __namedExportsOrder,ut as default};
