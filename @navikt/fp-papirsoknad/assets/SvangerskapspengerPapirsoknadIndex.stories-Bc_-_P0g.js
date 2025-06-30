import{w as c,F as l}from"./iframe-Bu0j-L9A.js";import{b as E,g,S,F as p,c as F}from"./BehovForTilretteleggingPanel-sbQB5euY.js";import{S as u}from"./SvangerskapspengerPapirsoknadIndex-D1NwISM3.js";import{m as k}from"./nb_NO-BrNrvIyi.js";import"./index-CrjQPJqA.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,T={component:u,decorators:[c,g(k)],args:{readOnly:!1,alleKodeverk:E,onSubmit:i=>(r("onSubmit")(i),Promise.resolve()),onSubmitUfullstendigsoknad:()=>(r("onSubmitUfullstendigsoknad")(),Promise.resolve())}},e={args:{soknadData:new S(l.SVANGERSKAPSPENGER,p.FODSEL,F.MOR)}},a={args:{soknadData:new S(l.SVANGERSKAPSPENGER,p.FODSEL,F.FAR)}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var t,d,m;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const y=["ForMorVedFødsel","ForFarVedFodsel"];export{a as ForFarVedFodsel,e as ForMorVedFødsel,y as __namedExportsOrder,T as default};
