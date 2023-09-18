import{j as s}from"./jsx-runtime-9c4ae004.js";import{B as d,d as t,N as a,j as g,m as R}from"./nb_NO-91e99ecf.js";import{z as e,Y as o}from"./index.es-657e045f.js";import{k as c}from"./index.es-28aae904.js";import{a as D,r as T}from"./fplosRestApi-beda4f04.js";import{T as i}from"./TilBehandlingPanel-f0eb15a4.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index.es-dcafba10.js";import"./isSameOrAfter-48a89950.js";import"./isSameOrBefore-ea99da6c.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-3c749e2b.js";import"./index.es-30e2a5f8.js";import"./index.es-efd3830f.js";import"./Provider-c82db7e7.js";import"./Detail-a958125f.js";import"./Heading-39bd052b.js";import"./Panel-b15c2a27.js";const f=d(R),M={title:"los/avdelingsleder/nokkeltall/TilBehandlingPanel",component:i,decorators:[f]},u=({oppgaverPerDato:m})=>{const E=[{key:D.KODEVERK_LOS.name,data:g,global:!0}];return s.jsx(c,{data:E,requestApi:T,children:s.jsx(i,{height:300,oppgaverPerDato:m,getValueFromLocalStorage:()=>""})})},r=u.bind({});r.args={oppgaverPerDato:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().format(a),antall:1},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(3,"d").format(a),antall:2},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.KLAGE,opprettetDato:t().subtract(4,"d").format(a),antall:2},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(4,"d").format(a),antall:6},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(10,"d").format(a),antall:3},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(16,"d").format(a),antall:3}]};var p,l,n;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
//# sourceMappingURL=TilBehandlingPanel.stories-d1ca4904.js.map
