import{j as s}from"./jsx-runtime-9c4ae004.js";import{B as d,d as t,N as a,j as g,m as R}from"./nb_NO-05becbd9.js";import{z as e,Y as o}from"./index.es-657e045f.js";import{k as c}from"./index.es-3a17af17.js";import{a as D,r as T}from"./fplosRestApi-812c551e.js";import{T as i}from"./TilBehandlingPanel-5a76e2dd.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index.es-5c2532e8.js";import"./isSameOrAfter-48a89950.js";import"./isSameOrBefore-ea99da6c.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-a2b371c1.js";import"./index.es-dbe55641.js";import"./index.es-5900b098.js";import"./Provider-29253648.js";import"./Heading-d0e6bb7b.js";import"./Panel-76c4732c.js";const f=d(R),_={title:"los/avdelingsleder/nokkeltall/TilBehandlingPanel",component:i,decorators:[f]},u=({oppgaverPerDato:m})=>{const E=[{key:D.KODEVERK_LOS.name,data:g,global:!0}];return s.jsx(c,{data:E,requestApi:T,children:s.jsx(i,{height:300,oppgaverPerDato:m,getValueFromLocalStorage:()=>""})})},r=u.bind({});r.args={oppgaverPerDato:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().format(a),antall:1},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(3,"d").format(a),antall:2},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.KLAGE,opprettetDato:t().subtract(4,"d").format(a),antall:2},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(4,"d").format(a),antall:6},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(10,"d").format(a),antall:3},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(16,"d").format(a),antall:3}]};var p,l,n;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const M=["Default"];export{r as Default,M as __namedExportsOrder,_ as default};
//# sourceMappingURL=TilBehandlingPanel.stories-01002f43.js.map
