import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{Q as N}from"./index.es-D8MMQXzp.js";import{u as D,F as j,i as m,w as F,n as f,b as H,c}from"./initFetch-kVEqIrQI.js";import{h as s,H as e}from"./index-CiTJJs0Y.js";import{w as T}from"./withPanelData-24rXeKdh.js";import{D as p,K as a}from"./DokumentIndex-BIfpu5yF.js";import{g as E}from"./withIntl-EKZG4WES.js";import{m as S}from"./nb_NO-l8jqaU6D.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-S-OvONj7.js";import"./ExclamationmarkTriangleFill-CUQdQYYQ.js";import"./message-CNMhdMY7.js";import"./decorators-Bnaor6Ku.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-D72BOBUH.js";import"./iframe-Dy_VlNjm.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-C7LF3qXI.js";import"./index-CXQShRbs.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./eksterneLenker-DOKwbE_M.js";import"./Table-DHD1Zb9s.js";import"./Checkbox-BrjvUeJE.js";import"./StarFill-D1SM9ZYc.js";import"./Link-C6jwm-1L.js";import"./SupportHeader-BW_VDrEo.js";import"./ErrorBoundary-DyuXCNsp.js";import"./IngenBehandlingValgtPanel-3g8WjSfu.js";import"./RestApiErrorContext-D7YnyNzE.js";const U=E(S),h=o=>F(f(m.sakLinks.find(r=>r.rel===o)).href),mt={title:"fagsak/DokumentIndex",decorators:[U,T],component:p,args:{saksnummer:"1"},render:o=>{const{status:r}=D(H());return r==="success"?i.jsx(p,{...o}):i.jsx(N,{})}},t={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:a.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:a.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:a.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([{
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
}`,...(u=(k=t.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var g,l,I;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([]))]
    }
  },
  args: {}
}`,...(I=(l=n.parameters)==null?void 0:l.docs)==null?void 0:I.source}}};const it=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,it as __namedExportsOrder,mt as default};
