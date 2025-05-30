import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as F}from"./index.es-CdVWVZN_.js";import{w as N,c as D}from"./withThemeDecorator-Cu2m8g4z.js";import{u as f,F as j,i as m,w as U,n as H,c as E,d as I}from"./fagsakApi-BSU-k28B.js";import{h as e,H as s,c as T}from"./index-Dyi8laJ0.js";import{D as p,K as i}from"./DokumentIndex-BuBh70Hk.js";import{g as S}from"./withIntl-DujIDOwq.js";import{U as _}from"./UtvidEllerMinskKnapp-DR59ehLh.js";import{m as w}from"./nb_NO-D39UuuyA.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VStack-CgWsBf5i.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./CheckmarkCircleFill-WFEQMfDM.js";import"./ExclamationmarkTriangleFill-XNuyieAq.js";import"./v4-CtRu48qb.js";import"./entry-preview-CpFTpf7q.js";import"./iframe-CPuCVEZH.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./behandlingResultatType-CKS0Ckn9.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./decorators-Bnaor6Ku.js";import"./DokumentLink-ZDPgnjS7.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-Cr2JHqR3.js";import"./message-DCourFYj.js";import"./Table-CofV4fbX.js";import"./ChevronDown-B4BaLvCg.js";import"./Checkbox-Cw8c92Vm.js";import"./StarFill-Bjr82l1I.js";import"./SupportHeader-4J45Jl-9.js";import"./ErrorBoundary-CzHT8rXV.js";import"./IngenBehandlingValgtPanel-DvQSNtFn.js";import"./errorType-BRpSpOcr.js";import"./Tooltip-3ouZDPGf.js";const x=S(w),h=o=>T(U(H(m.sakLinks.find(r=>r.rel===o)).href)),ct={title:"fagsak/DokumentIndex",decorators:[x,N],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(_,{toggleVisUtvidetBehandlingDetaljer:D("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=f(E());return r==="success"?a.jsx(p,{...o}):a.jsx(F,{})}},t={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(j.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,jt as __namedExportsOrder,ct as default};
