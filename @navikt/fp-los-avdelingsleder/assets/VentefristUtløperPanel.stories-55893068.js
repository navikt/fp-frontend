import{j as o}from"./jsx-runtime-9c4ae004.js";import{B as g,d as t,N as a,j as c,m as f}from"./nb_NO-05becbd9.js";import{z as r}from"./index.es-657e045f.js";import{k as u}from"./index.es-3a17af17.js";import{a as V,r as h}from"./fplosRestApi-812c551e.js";import{V as p}from"./VentefristUtløperPanel-643f3c98.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index.es-5c2532e8.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-a2b371c1.js";import"./isSameOrBefore-ea99da6c.js";import"./index.es-dbe55641.js";import"./index.es-5900b098.js";import"./Provider-29253648.js";import"./Heading-d0e6bb7b.js";import"./Panel-76c4732c.js";const E=g(f),v={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[E]},s=5,k=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:c,global:!0}];return o.jsx(u,{data:d,requestApi:h,children:o.jsx(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""})})},e=k.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  oppgaverManueltPaVent
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <VentefristUtløperPanel height={300} behandlingerPaVent={oppgaverManueltPaVent} getValueFromLocalStorage={() => ''} />
    </RestApiMock>;
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,v as default};
//# sourceMappingURL=VentefristUtløperPanel.stories-55893068.js.map
