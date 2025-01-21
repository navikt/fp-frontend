import{j as i}from"./jsx-runtime-CLpGMVip.js";import{r as N}from"./index.es-MxAMIJPu.js";import{u as D,h as s,F as j,H as e,i as m,w as F,n as f,b as c,c as H}from"./initFetch-DK4cSTvy.js";import"./aktivitetStatus-02fOJoqz.js";import{D as p,K as a}from"./DokumentIndex-WhPHokyB.js";import{w as T}from"./withQueryClient-DTem1OUy.js";import{g as E}from"./withIntl-a1SDBnTF.js";import{m as S}from"./nb_NO-uNUtk1bC.js";import"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-CJilavqB.js";import"./decorators-DIzpaN6C.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./eksterneLenker-DcE6CUbm.js";import"./Table-RfktipKk.js";import"./Checkbox-Dd-5zRqC.js";import"./useFormField-r8KZLR-A.js";import"./StarFill-DXI4dcSy.js";import"./Link-C9M13KeJ.js";import"./SupportHeader-iAZRHVc6.js";import"./useRestApiRunner-PSWluHZJ.js";import"./useRestApiErrorDispatcher-Du6ohLLd.js";import"./ErrorBoundary-DovJ2PZA.js";import"./IngenBehandlingValgtPanel-Dnr5nc8M.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";const U=E(S),h=o=>F(f(m.sakLinks.find(r=>r.rel===o)).href),tt={title:"fagsak/DokumentIndex",decorators:[U,T],component:p,args:{saksnummer:"1"},render:o=>{const{status:r}=D(H());return r==="success"?i.jsx(p,{...o}):i.jsx(N,{})}},t={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:a.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:a.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:a.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[s.get(j.INIT_FETCH,()=>e.json(m)),s.get(h(c.ALL_DOCUMENTS),()=>e.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
