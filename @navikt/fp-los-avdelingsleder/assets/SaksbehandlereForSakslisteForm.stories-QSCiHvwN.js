import{j as r}from"./jsx-runtime-CUEGZZF9.js";import{a}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{R as E}from"./RestApiMock-SiosCgtf.js";import{g as u,m as R}from"./nb_NO-k-ioYHLQ.js";import{a as I,r as V}from"./fplosRestApi-74D8GJap.js";import{S as h}from"./SaksbehandlereForSakslisteForm-Lj7AvbMu.js";import"./index-DogsOklH.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./useGlobalStateRestApiData-A2OyOdo-.js";import"./index-MroJ3egt.js";import"./Panel-o4KFTaS8.js";import"./VStack-rJV_yTzL.js";const N=u(R),P={title:"los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm",component:h,decorators:[N]},t=({saksliste:p,avdelingensSaksbehandlere:c,hentAvdelingensSakslister:m})=>{const b=[{key:I.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,data:{}}];return r(E,{data:b,requestApi:V,children:r(h,{valgtSaksliste:p,avdelingensSaksbehandlere:c,hentAvdelingensSakslister:m,valgtAvdelingEnhet:"NAV Viken"})})},e=t.bind({});e.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[],hentAvdelingensSakslister:a("button-click")};const s=t.bind({});s.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S34354",navn:"Steffen",avdelingsnavn:["NAV Viken"]}],hentAvdelingensSakslister:a("button-click")};const n=t.bind({});n.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S34354",navn:"Steffen",avdelingsnavn:["NAV Viken"]},{brukerIdent:"E24353",navn:"Eirik",avdelingsnavn:["NAV Viken"]}],hentAvdelingensSakslister:a("button-click")};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
  saksliste,
  avdelingensSaksbehandlere,
  hentAvdelingensSakslister
}) => {
  const data = [{
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,
    data: {}
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereForSakslisteForm valgtSaksliste={saksliste} avdelingensSaksbehandlere={avdelingensSaksbehandlere} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var k,o,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`({
  saksliste,
  avdelingensSaksbehandlere,
  hentAvdelingensSakslister
}) => {
  const data = [{
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,
    data: {}
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereForSakslisteForm valgtSaksliste={saksliste} avdelingensSaksbehandlere={avdelingensSaksbehandlere} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(S=(o=s.parameters)==null?void 0:o.docs)==null?void 0:S.source}}};var A,g,v;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`({
  saksliste,
  avdelingensSaksbehandlere,
  hentAvdelingensSakslister
}) => {
  const data = [{
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,
    data: {}
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereForSakslisteForm valgtSaksliste={saksliste} avdelingensSaksbehandlere={avdelingensSaksbehandlere} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const x=["IngenSaksbehandlere","ToSaksbehandlere","TreSaksbehandlere"];export{e as IngenSaksbehandlere,s as ToSaksbehandlere,n as TreSaksbehandlere,x as __namedExportsOrder,P as default};
