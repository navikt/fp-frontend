import{j as s}from"./jsx-runtime-69eee039.js";import{B as d,d as t,N as a,j as g,m as R}from"./nb_NO-7b970f8e.js";import{z as e,Y as o}from"./index.es-657e045f.js";import{k as c}from"./index.es-15120e22.js";import{a as D,r as T}from"./fplosRestApi-06437043.js";import{T as i}from"./TilBehandlingPanel-5621c5c6.js";import"./index-7c191284.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";import"./index.es-6dfc8135.js";import"./isSameOrAfter-aeb9b4f6.js";import"./isSameOrBefore-3c6a6c36.js";import"./StoreValuesInLocalStorage-2b38d468.js";import"./useLosKodeverk-c784a1f9.js";import"./index.es-3716ffc0.js";import"./index.es-d43f158f.js";import"./Provider-b10fa804.js";import"./index-b3a39e30.js";import"./Panel-d69a7370.js";import"./Heading-7322b494.js";const f=d(R),V={title:"los/avdelingsleder/nokkeltall/TilBehandlingPanel",component:i,decorators:[f]},u=({oppgaverPerDato:m})=>{const E=[{key:D.KODEVERK_LOS.name,data:g,global:!0}];return s.jsx(c,{data:E,requestApi:T,children:s.jsx(i,{height:300,oppgaverPerDato:m,getValueFromLocalStorage:()=>""})})},r=u.bind({});r.args={oppgaverPerDato:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().format(a),antall:1},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(3,"d").format(a),antall:2},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.KLAGE,opprettetDato:t().subtract(4,"d").format(a),antall:2},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(4,"d").format(a),antall:6},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(10,"d").format(a),antall:3},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(16,"d").format(a),antall:3}]};var p,l,n;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
  oppgaverPerDato
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <TilBehandlingPanel height={300} oppgaverPerDato={oppgaverPerDato} getValueFromLocalStorage={() => ''} />
    </RestApiMock>;
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const q=["Default"];export{r as Default,q as __namedExportsOrder,V as default};
//# sourceMappingURL=TilBehandlingPanel.stories-b60eee62.js.map
