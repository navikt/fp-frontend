import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{d as e}from"./dayjs.min-BsYQKNhR.js";import{A as a}from"./useRestApiRunner-puvCxW7G.js";import{z as r}from"./index.es-Cl_yxThX.js";import{R as g}from"./RestApiMock-jOjxntRb.js";import"./index-uubelm5h.js";import{m as c}from"./nb_NO-COD-RJQh.js";import{g as f}from"./withIntl-Dj43w9ql.js";import{a as u}from"./alleKodeverkLos-BJud6Q-i.js";import{R as V,r as h}from"./fplosRestApi-CA_rjeFW.js";import{V as p}from"./VentefristUtløperPanel-3-9V1Lmk.js";import"./Modal-AsiqG6ll.js";import"./index-C5xsJX-I.js";import"./index.es-BEcJ7ulV.js";import"./VStack-CoISPiHd.js";import"./StoreValuesInLocalStorage-D6Hb4UHw.js";import"./useLosKodeverk-43wcDHc1.js";import"./isSameOrBefore-DeYxtwBz.js";import"./FlyttReservasjonModal-0I9TiFOd.js";import"./index.es-t6CmvQr4.js";import"./Panel-kMoRCghZ.js";const A=f(c),I={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[A]},s=5,E=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o.jsx(g,{data:d,requestApi:h,children:o.jsx(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""})})},t=E.bind({});t.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:e().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:e().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:e().add(s,"w").format(a),antall:14}]};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const Y=["Default"];export{t as Default,Y as __namedExportsOrder,I as default};
