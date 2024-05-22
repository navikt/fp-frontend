import{R as r}from"./index-DogsOklH.js";import{a}from"./chunk-MZXVCX43-RlXIxtK5.js";import{R as E}from"./RestApiMock-TmCF8zKT.js";import"./useRestApiRunner-t59neJBf.js";import{g as u,m as R}from"./nb_NO-Tp50aoLI.js";import{a as I,r as V}from"./fplosRestApi-7cfjsQHL.js";import{S as h}from"./SaksbehandlereForSakslisteForm-8PCvYfPF.js";import"./v4-yQnnJER4.js";import"./index-MroJ3egt.js";import"./Panel-YruKRthN.js";const N=u(R),D={title:"los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm",component:h,decorators:[N]},t=({saksliste:c,avdelingensSaksbehandlere:p,hentAvdelingensSakslister:m})=>{const b=[{key:I.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,data:{}}];return r.createElement(E,{data:b,requestApi:V},r.createElement(h,{valgtSaksliste:c,avdelingensSaksbehandlere:p,hentAvdelingensSakslister:m,valgtAvdelingEnhet:"NAV Viken"}))},e=t.bind({});e.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[],hentAvdelingensSakslister:a("button-click")};const s=t.bind({});s.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S34354",navn:"Steffen",avdelingsnavn:["NAV Viken"]}],hentAvdelingensSakslister:a("button-click")};const n=t.bind({});n.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S34354",navn:"Steffen",avdelingsnavn:["NAV Viken"]},{brukerIdent:"E24353",navn:"Eirik",avdelingsnavn:["NAV Viken"]}],hentAvdelingensSakslister:a("button-click")};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const G=["IngenSaksbehandlere","ToSaksbehandlere","TreSaksbehandlere"];export{e as IngenSaksbehandlere,s as ToSaksbehandlere,n as TreSaksbehandlere,G as __namedExportsOrder,D as default};
