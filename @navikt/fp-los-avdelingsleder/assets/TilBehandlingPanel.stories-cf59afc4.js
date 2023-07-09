import{j as s}from"./jsx-runtime-5926aa06.js";import{B as d,d as t,N as a,j as g,m as R}from"./nb_NO-34c6c3ba.js";import{z as e,Y as o}from"./index.es-657e045f.js";import{k as c}from"./index.es-f19dba30.js";import{R as D,r as T}from"./fplosRestApi-56e2d09a.js";import{T as i}from"./TilBehandlingPanel-7c09e82c.js";import"./index-ebeaab24.js";import"./index-9c09ad76.js";import"./index.es-24d105fb.js";import"./isSameOrAfter-a26d70f9.js";import"./isSameOrBefore-1b33768e.js";import"./StoreValuesInLocalStorage-28723227.js";import"./useLosKodeverk-46a11add.js";import"./index.es-333191f8.js";import"./index.es-7d65aa9f.js";import"./Provider-26ee741a.js";import"./index-f50b85d6.js";import"./Panel-e2c29623.js";import"./Heading-8a34415b.js";const f=d(R),M={title:"los/avdelingsleder/nokkeltall/TilBehandlingPanel",component:i,decorators:[f]},u=({oppgaverPerDato:m})=>{const E=[{key:D.KODEVERK_LOS.name,data:g,global:!0}];return s.jsx(c,{data:E,requestApi:T,children:s.jsx(i,{height:300,oppgaverPerDato:m,getValueFromLocalStorage:()=>""})})},r=u.bind({});r.args={oppgaverPerDato:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().format(a),antall:1},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(3,"d").format(a),antall:2},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.KLAGE,opprettetDato:t().subtract(4,"d").format(a),antall:2},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(4,"d").format(a),antall:6},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(10,"d").format(a),antall:3},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(16,"d").format(a),antall:3}]};var p,l,n;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const V=["Default"];export{r as Default,V as __namedExportsOrder,M as default};
//# sourceMappingURL=TilBehandlingPanel.stories-cf59afc4.js.map
