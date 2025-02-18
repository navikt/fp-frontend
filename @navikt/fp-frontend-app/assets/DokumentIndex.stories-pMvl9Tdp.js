import{j as i}from"./jsx-runtime-CLpGMVip.js";import{$ as N}from"./index.es-BzH0p2mM.js";import{u as D,F as j,i as m,w as F,n as f,b as c,c as H}from"./initFetch-DWTGz-j8.js";import{h as s,H as e}from"./index-DqeTBbD1.js";import{w as T}from"./withPanelData-DU0U5n0a.js";import{D as p,K as a}from"./DokumentIndex-C2vj0e00.js";import{g as E}from"./withIntl-CJcieUG6.js";import{m as S}from"./nb_NO-l8jqaU6D.js";import"./index-B8jnc8p3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-CJilavqB.js";import"./ExclamationmarkTriangleFill-C4IndCeL.js";import"./CheckmarkCircleFill-BvY2yEmg.js";import"./decorators-DIzpaN6C.js";import"./index-Dmw-q_WW.js";import"./index-Dv0WEcwZ.js";import"./v4-CtRu48qb.js";import"./react-1ULzyQJM.js";import"./iframe-CrMD95al.js";import"./chunk-XP5HYGXS-DH4vAeCa.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./eksterneLenker-DOKwbE_M.js";import"./Table-CTEG6NHH.js";import"./Checkbox-CHI6X-ok.js";import"./useFormField-DD39L7at.js";import"./StarFill-CcnkoQ5U.js";import"./Link-DPFAf0lC.js";import"./SupportHeader-pAsaHXvO.js";import"./ErrorBoundary-NInVCuE_.js";import"./IngenBehandlingValgtPanel-DYGPinO3.js";import"./RestApiErrorContext-D3DzVTT-.js";const U=E(S),h=o=>F(f(m.sakLinks.find(r=>r.rel===o)).href),rt={title:"fagsak/DokumentIndex",decorators:[U,T],component:p,args:{saksnummer:"1"},render:o=>{const{status:r}=D(H());return r==="success"?i.jsx(p,{...o}):i.jsx(N,{})}},t={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:a.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:a.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:a.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
