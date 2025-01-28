import{j as i}from"./jsx-runtime-CLpGMVip.js";import{H as N}from"./index.es-CR4HM-Gt.js";import{u as D,F as j,i as m,w as F,n as f,b as c,c as H}from"./initFetch-8XkzvNiI.js";import{h as s,H as e}from"./index-DqeTBbD1.js";import"./aktivitetStatus-02fOJoqz.js";import{D as p,K as a}from"./DokumentIndex-CP1byXAL.js";import{w as T}from"./withQueryClient-BVC_MkYB.js";import{g as E}from"./withIntl-C7o6l5qC.js";import{m as S}from"./nb_NO-uNUtk1bC.js";import"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-CJilavqB.js";import"./decorators-DIzpaN6C.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./eksterneLenker-DcE6CUbm.js";import"./Table-ncjdBJVO.js";import"./Checkbox-Ce1pUqOO.js";import"./useFormField-B1rtZXFW.js";import"./StarFill-CkyfYh2n.js";import"./Link-BLl_SjTD.js";import"./SupportHeader-DIgjFkMx.js";import"./ErrorBoundary-BT7A1Aj9.js";import"./IngenBehandlingValgtPanel-BIfD7gEP.js";import"./RestApiErrorContext-CYa6iUCd.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";const U=E(S),h=o=>F(f(m.sakLinks.find(r=>r.rel===o)).href),tt={title:"fagsak/DokumentIndex",decorators:[U,T],component:p,args:{saksnummer:"1"},render:o=>{const{status:r}=D(H());return r==="success"?i.jsx(p,{...o}):i.jsx(N,{})}},t={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:a.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:a.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:a.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(I=(l=n.parameters)==null?void 0:l.docs)==null?void 0:I.source}}};const nt=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,nt as __namedExportsOrder,tt as default};
