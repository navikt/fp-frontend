import{j as i}from"./jsx-runtime-DR9Q75dM.js";import{F}from"./index.es-Bt-4RxCK.js";import{u as N,h as s,F as j,H as e,i as m,w as D,n as f,b as c,c as H}from"./initFetch-M7eiD0q7.js";import"./aktivitetStatus-02fOJoqz.js";import{D as p,K as a}from"./DokumentIndex-CoM-upHF.js";import{w as T}from"./withQueryClient-BF6cwJb8.js";import{g as E}from"./withIntl-C7HEqcO2.js";import{m as S}from"./nb_NO-uNUtk1bC.js";import"./index-DRjF_FHU.js";import"./dayjs.min-CnNqAF5I.js";import"./decorators-86JrGkCj.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./eksterneLenker-DOKwbE_M.js";import"./index-BOPGX_rZ.js";import"./Table-DW3S1o5W.js";import"./Checkbox-joeORS29.js";import"./Fieldset-hbxpkjgi.js";import"./useFormField-B7KyMSiw.js";import"./StarFill-BgkeIW_J.js";import"./Link-DbJb43KP.js";import"./SupportHeader-DUJOm-EI.js";import"./useRestApiRunner-illtjj-y.js";import"./useRestApiErrorDispatcher-BtGqqtgs.js";import"./ErrorBoundary-BJbCJamN.js";import"./IngenBehandlingValgtPanel-RvRCvk5h.js";import"./index-rX-Bn4lm.js";const U=E(S),h=o=>D(f(m.sakLinks.find(r=>r.rel===o)).href),tt={title:"fagsak/DokumentIndex",decorators:[U,T],component:p,args:{saksnummer:"1"},render:o=>{const{status:r}=N(H());return r==="success"?i.jsx(p,{...o}):i.jsx(F,{})}},t={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:a.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:a.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:a.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
