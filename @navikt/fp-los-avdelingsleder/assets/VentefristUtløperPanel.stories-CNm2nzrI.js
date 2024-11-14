import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{d as e}from"./dayjs.min-BsYQKNhR.js";import{A as a}from"./useRestApiRunner-C_OWMqIS.js";import{z as r}from"./index.es-Cl_yxThX.js";import{R as g}from"./RestApiMock-DVhxYJfd.js";import"./index-uubelm5h.js";import{m as c}from"./nb_NO-xOTxt9dL.js";import{g as f}from"./withIntl-YzfFZyng.js";import{a as u}from"./alleKodeverkLos-BJud6Q-i.js";import{R as V,r as h}from"./fplosRestApi-CbLPsHxS.js";import{V as p}from"./VentefristUtløperPanel-CAcip7Yt.js";import"./Modal-tRW4hqse.js";import"./index-C5xsJX-I.js";import"./index.es-hWEM_5pc.js";import"./VStack-yjYS5DzK.js";import"./StoreValuesInLocalStorage-D6Hb4UHw.js";import"./useLosKodeverk-RIRSZOsd.js";import"./isSameOrBefore-DeYxtwBz.js";import"./FlyttReservasjonModal-BQeLkUs7.js";import"./index.es-BIJMLfII.js";import"./Panel-ClMHD6wP.js";const A=f(c),I={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[A]},s=5,E=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o.jsx(g,{data:d,requestApi:h,children:o.jsx(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""})})},t=E.bind({});t.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:e().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:e().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:e().add(s,"w").format(a),antall:14}]};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
