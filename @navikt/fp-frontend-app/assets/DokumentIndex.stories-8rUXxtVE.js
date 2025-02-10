import{j as i}from"./jsx-runtime-CLpGMVip.js";import{H as N}from"./index.es-frODTQOm.js";import{u as D,F as j,i as m,w as F,n as f,b as c,c as H}from"./initFetch-DA7X8gEf.js";import{h as s,H as e}from"./index-xO6qRKuY.js";import{w as T}from"./withPanelData-DymM_XOp.js";import{D as p,K as a}from"./DokumentIndex-BJmYoOq4.js";import{g as E}from"./withIntl-Bj7jh_4_.js";import{m as S}from"./nb_NO-FM-zO8Y1.js";import"./index-B8jnc8p3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-CJilavqB.js";import"./ExclamationmarkTriangleFill-DsLG1GMc.js";import"./CheckmarkCircleFill-DgOv1ENy.js";import"./decorators-BQZ9Bf7F.js";import"./index-Dmw-q_WW.js";import"./index-Dv0WEcwZ.js";import"./v4-CtRu48qb.js";import"./react-Bk6eqQzu.js";import"./iframe-DvESYHmG.js";import"./chunk-XP5HYGXS-DH4vAeCa.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./eksterneLenker-DcE6CUbm.js";import"./Table-afBNcHt7.js";import"./Checkbox-CjP6A5Kh.js";import"./useFormField-DcIAOk-v.js";import"./StarFill-BHf2yiRy.js";import"./Link-lIaRkF6A.js";import"./SupportHeader-9qnOSak4.js";import"./ErrorBoundary-zqIq4R3M.js";import"./IngenBehandlingValgtPanel-_uK8hpKf.js";import"./RestApiErrorContext-D3DzVTT-.js";const U=E(S),h=o=>F(f(m.sakLinks.find(r=>r.rel===o)).href),rt={title:"fagsak/DokumentIndex",decorators:[U,T],component:p,args:{saksnummer:"1"},render:o=>{const{status:r}=D(H());return r==="success"?i.jsx(p,{...o}):i.jsx(N,{})}},t={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:a.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:a.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:a.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(I=(l=n.parameters)==null?void 0:l.docs)==null?void 0:I.source}}};const at=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,at as __namedExportsOrder,rt as default};
