import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{A as e}from"./index.es-B3phUJaJ.js";import{d as a}from"./dayjs.min-BsYQKNhR.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as r}from"./fagsakYtelseType-DI8GXtVr.js";import{m as g}from"./nb_NO-Du4pagSL.js";import{g as c}from"./withIntl-B_2QVpuP.js";import{a as f}from"./alleKodeverkLos-BJud6Q-i.js";import{R as u}from"./RestApiMock-CMGSvSy2.js";import"./index-uubelm5h.js";import"./useRestApiRunner-Dz_KBbnA.js";import{R as V,r as h}from"./fplosRestApi-DIvKj8Ld.js";import{V as p}from"./VentefristUtløperPanel-D52kh043.js";import"./Modal-CrXtQo6t.js";import"./index-C5xsJX-I.js";import"./index.es-CoJGJJtc.js";import"./VStack-BZrJM_W_.js";import"./kodeverkTyper-CavWL6Ds.js";import"./StoreValuesInLocalStorage-D6Hb4UHw.js";import"./useLosKodeverk-D3IvkdFj.js";import"./isSameOrBefore-DeYxtwBz.js";import"./FlyttReservasjonModal--5wx_ciu.js";import"./index.es-B65aQnJ7.js";import"./Panel-Bf20eg93.js";const k=c(g),z={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[k]},s=5,A=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:f,global:!0}];return o.jsx(u,{data:d,requestApi:h,children:o.jsx(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""})})},t=A.bind({});t.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:a().format(e),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:a().add(s,"d").format(e),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:a().add(s,"w").format(e),antall:14}]};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,z as default};
