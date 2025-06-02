import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{a as F}from"./index.es-1HjGJ6EL.js";import{w as N,c as D}from"./withThemeDecorator-zwF_VyQA.js";import{u as f,F as j,i as m,w as U,n as H,c as E,d as I}from"./fagsakApi-GpheZX3v.js";import{h as e,H as s,c as T}from"./index-BVlhR-8X.js";import{D as p,K as i}from"./DokumentIndex-BVdjv3fZ.js";import{g as S}from"./withIntl-BzBEqcKh.js";import{U as _}from"./UtvidEllerMinskKnapp-BSKiH91A.js";import{m as w}from"./nb_NO-D39UuuyA.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VStack-BYX9WX4q.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./CheckmarkCircleFill-DoSxwlpN.js";import"./ExclamationmarkTriangleFill-DcC5p28j.js";import"./v4-CtRu48qb.js";import"./entry-preview-BGoTbtgt.js";import"./iframe-Dh4S4pYG.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./behandlingResultatType-CKS0Ckn9.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./decorators-Bnaor6Ku.js";import"./DokumentLink-1dgdaFJr.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-CexXASIp.js";import"./message-qvfAPF2U.js";import"./Table-ByToo0Jy.js";import"./ChevronDown-C9bFGsD-.js";import"./Checkbox-B84pd2sJ.js";import"./StarFill-B2lw1rLp.js";import"./SupportHeader-D3VxPyFW.js";import"./ErrorBoundary-D0AD3zfH.js";import"./IngenBehandlingValgtPanel-BMCp3InH.js";import"./errorType-BhwnIaVu.js";const x=S(w),h=o=>T(U(H(m.sakLinks.find(r=>r.rel===o)).href)),lt={title:"fagsak/DokumentIndex",decorators:[x,N],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(_,{toggleVisUtvidetBehandlingDetaljer:D("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=f(E());return r==="success"?a.jsx(p,{...o}):a.jsx(F,{})}},t={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
