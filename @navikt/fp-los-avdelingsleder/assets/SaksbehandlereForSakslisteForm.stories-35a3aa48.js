import{j as r}from"./jsx-runtime-86dfebf6.js";import{a}from"./chunk-AY7I2SME-5eb1ab46.js";import{R as E}from"./RestApiMock-492f57af.js";import{g as u,m as R}from"./nb_NO-632fc4c8.js";import{R as I,r as V}from"./fplosRestApi-fe4a3ae6.js";import{S as h}from"./SaksbehandlereForSakslisteForm-b559e9b9.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-20592075.js";import"./index-6fd5a17b.js";import"./Panel-384158e1.js";import"./VStack-ef9060f0.js";const N=u(R),G={title:"los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm",component:h,decorators:[N]},t=({saksliste:c,avdelingensSaksbehandlere:p,hentAvdelingensSakslister:m})=>{const b=[{key:I.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,data:{}}];return r(E,{data:b,requestApi:V,children:r(h,{valgtSaksliste:c,avdelingensSaksbehandlere:p,hentAvdelingensSakslister:m,valgtAvdelingEnhet:"NAV Viken"})})},e=t.bind({});e.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[],hentAvdelingensSakslister:a("button-click")};const s=t.bind({});s.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S34354",navn:"Steffen",avdelingsnavn:["NAV Viken"]}],hentAvdelingensSakslister:a("button-click")};const n=t.bind({});n.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S34354",navn:"Steffen",avdelingsnavn:["NAV Viken"]},{brukerIdent:"E24353",navn:"Eirik",avdelingsnavn:["NAV Viken"]}],hentAvdelingensSakslister:a("button-click")};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const H=["IngenSaksbehandlere","ToSaksbehandlere","TreSaksbehandlere"];export{e as IngenSaksbehandlere,s as ToSaksbehandlere,n as TreSaksbehandlere,H as __namedExportsOrder,G as default};
//# sourceMappingURL=SaksbehandlereForSakslisteForm.stories-35a3aa48.js.map
