import{j as l}from"./jsx-runtime-QvZ8i92b.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{m as P}from"./nb_NO-BMC9bd8I.js";import{g as _}from"./withIntl-DTg3zOUD.js";import{R as f}from"./RestApiMock-DW1RFP8P.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{a as i,r as N}from"./fplosRestApi-1yojVYCb.js";import{S as u}from"./SaksbehandlereForSakslisteForm-5H6DDL0N.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./Panel-Cwe4PO5u.js";import"./Table-DvU5QQp3.js";const L=_(P),z={title:"los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm",component:u,decorators:[L]},r=({saksliste:E,avdelingensSaksbehandlere:R,hentAvdelingensSakslister:I,grupperteSaksbehandlere:y})=>{const K=[{key:i.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,data:{}},{key:i.HENT_GRUPPER.name,data:y}];return l.jsx(f,{data:K,requestApi:N,children:l.jsx(u,{valgtSaksliste:E,avdelingensSaksbehandlere:R,hentAvdelingensSakslister:I,valgtAvdelingEnhet:"NAV Viken"})})},e=r.bind({});e.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[],hentAvdelingensSakslister:t("button-click")};const n=r.bind({});n.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"}],hentAvdelingensSakslister:t("button-click")};const s=r.bind({});s.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"},{brukerIdent:"E24353",navn:"Eirik",ansattAvdeling:"Avdeling Å"}],hentAvdelingensSakslister:t("button-click")};const a=r.bind({});a.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"},{brukerIdent:"E24353",navn:"Eirik",ansattAvdeling:"Avdeling Å"}],grupperteSaksbehandlere:{saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"Gruppe 1",saksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"}]}]},hentAvdelingensSakslister:t("button-click")};var d,k,S;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
  saksliste,
  avdelingensSaksbehandlere,
  hentAvdelingensSakslister,
  grupperteSaksbehandlere
}) => {
  const data = [{
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,
    data: {}
  }, {
    key: RestApiPathsKeys.HENT_GRUPPER.name,
    data: grupperteSaksbehandlere
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereForSakslisteForm valgtSaksliste={saksliste} avdelingensSaksbehandlere={avdelingensSaksbehandlere} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(S=(k=e.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var o,g,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`({
  saksliste,
  avdelingensSaksbehandlere,
  hentAvdelingensSakslister,
  grupperteSaksbehandlere
}) => {
  const data = [{
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,
    data: {}
  }, {
    key: RestApiPathsKeys.HENT_GRUPPER.name,
    data: grupperteSaksbehandlere
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereForSakslisteForm valgtSaksliste={saksliste} avdelingensSaksbehandlere={avdelingensSaksbehandlere} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var A,v,h;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`({
  saksliste,
  avdelingensSaksbehandlere,
  hentAvdelingensSakslister,
  grupperteSaksbehandlere
}) => {
  const data = [{
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,
    data: {}
  }, {
    key: RestApiPathsKeys.HENT_GRUPPER.name,
    data: grupperteSaksbehandlere
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereForSakslisteForm valgtSaksliste={saksliste} avdelingensSaksbehandlere={avdelingensSaksbehandlere} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,m,c;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`({
  saksliste,
  avdelingensSaksbehandlere,
  hentAvdelingensSakslister,
  grupperteSaksbehandlere
}) => {
  const data = [{
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,
    data: {}
  }, {
    key: RestApiPathsKeys.HENT_GRUPPER.name,
    data: grupperteSaksbehandlere
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereForSakslisteForm valgtSaksliste={saksliste} avdelingensSaksbehandlere={avdelingensSaksbehandlere} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const C=["IngenSaksbehandlere","ToSaksbehandlere","TreSaksbehandlere","SaksbehandlereSomErGruppert"];export{e as IngenSaksbehandlere,a as SaksbehandlereSomErGruppert,n as ToSaksbehandlere,s as TreSaksbehandlere,C as __namedExportsOrder,z as default};
