import{j as i}from"./jsx-runtime-BDPtolqC.js";import{H as N}from"./index.es-dGlS6Fbw.js";import{u as D,h as s,F as j,H as e,i as m,w as F,n as H,b as c,c as f}from"./initFetch-Ix2oJbRX.js";import"./aktivitetStatus-02fOJoqz.js";import{D as p,K as a}from"./DokumentIndex-BsnHSIpQ.js";import{w as T}from"./alleKodeverk-B3AibkSl.js";import{g as E}from"./withIntl-DPktaEal.js";import{m as S}from"./nb_NO-uNUtk1bC.js";import"./index-D1iumpf7.js";import"./index-B54hSm9S.js";import"./dayjs.min-BBSNu57g.js";import"./decorators-DIzpaN6C.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./eksterneLenker-DcE6CUbm.js";import"./Table-CDBqd99h.js";import"./Checkbox-DNiqVMm9.js";import"./useFormField-C31nuhn6.js";import"./StarFill-BQYdsDBk.js";import"./Link-B9GbEzBH.js";import"./SupportHeader-Dk3yGBhM.js";import"./useRestApiRunner-DgEJAvhj.js";import"./useRestApiErrorDispatcher-nRHyN4xJ.js";import"./ErrorBoundary-DUKNjkuC.js";import"./IngenBehandlingValgtPanel-zGecvNxh.js";import"./index-BC2UOl6f.js";import"./index-D41M3POg.js";const U=E(S),h=o=>F(H(m.sakLinks.find(r=>r.rel===o)).href),tt={title:"fagsak/DokumentIndex",decorators:[U,T],component:p,args:{saksnummer:"1"},render:o=>{const{status:r}=D(f());return r==="success"?i.jsx(p,{...o}):i.jsx(N,{})}},t={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:a.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:a.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:a.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
