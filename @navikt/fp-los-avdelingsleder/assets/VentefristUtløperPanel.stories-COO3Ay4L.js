import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{d as e}from"./dayjs.min-BsYQKNhR.js";import{A as a}from"./useRestApiRunner-OGnsYqIB.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as r}from"./fagsakYtelseType-DI8GXtVr.js";import{R as g}from"./RestApiMock-D1S-6bWT.js";import"./index-uubelm5h.js";import{m as c}from"./nb_NO-COD-RJQh.js";import{g as f}from"./withIntl-Dj43w9ql.js";import{a as u}from"./alleKodeverkLos-BJud6Q-i.js";import{R as V,r as h}from"./fplosRestApi-BTvDMX_p.js";import{V as p}from"./VentefristUtløperPanel-Dq1zt4MV.js";import"./Modal-D_J0aA2i.js";import"./index-C5xsJX-I.js";import"./index.es-C4n-jDxS.js";import"./VStack-X3WkY7jl.js";import"./kodeverkTyper-CavWL6Ds.js";import"./StoreValuesInLocalStorage-D6Hb4UHw.js";import"./useLosKodeverk-wto_KGrb.js";import"./isSameOrBefore-DeYxtwBz.js";import"./FlyttReservasjonModal-EYIgpRar.js";import"./index.es-CclR0BpJ.js";import"./Panel-kMoRCghZ.js";const k=f(c),w={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[k]},s=5,A=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o.jsx(g,{data:d,requestApi:h,children:o.jsx(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""})})},t=A.bind({});t.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:e().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:e().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:e().add(s,"w").format(a),antall:14}]};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,w as default};
