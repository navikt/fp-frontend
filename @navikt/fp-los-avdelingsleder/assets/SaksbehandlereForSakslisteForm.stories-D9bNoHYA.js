import{j as l}from"./jsx-runtime-QvZ8i92b.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{m as K}from"./nb_NO-xOTxt9dL.js";import{g as P}from"./withIntl-YzfFZyng.js";import{R as _}from"./RestApiMock-DVhxYJfd.js";import"./index-uubelm5h.js";import"./useRestApiRunner-C_OWMqIS.js";import{a as i,r as N}from"./fplosRestApi-CbLPsHxS.js";import{S as u}from"./SaksbehandlereForSakslisteForm-gFOCot5R.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./Modal-tRW4hqse.js";import"./dayjs.min-BsYQKNhR.js";import"./index.es-hWEM_5pc.js";import"./VStack-yjYS5DzK.js";import"./Panel-ClMHD6wP.js";import"./Table-CybBzlk3.js";const L=P(K),Q={title:"los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm",component:u,decorators:[L]},r=({saksliste:E,avdelingensSaksbehandlere:R,hentAvdelingensSakslister:I,grupperteSaksbehandlere:f})=>{const y=[{key:i.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,data:{}},{key:i.HENT_GRUPPER.name,data:f}];return l.jsx(_,{data:y,requestApi:N,children:l.jsx(u,{valgtSaksliste:E,avdelingensSaksbehandlere:R,hentAvdelingensSakslister:I,valgtAvdelingEnhet:"Nav Vikafossen"})})},e=r.bind({});e.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[],hentAvdelingensSakslister:t("button-click")};const n=r.bind({});n.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"}],hentAvdelingensSakslister:t("button-click")};const s=r.bind({});s.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"},{brukerIdent:"E24353",navn:"Eirik",ansattAvdeling:"Avdeling Å"}],hentAvdelingensSakslister:t("button-click")};const a=r.bind({});a.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"},{brukerIdent:"E24353",navn:"Eirik",ansattAvdeling:"Avdeling Å"}],grupperteSaksbehandlere:{saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"Gruppe 1",saksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"}]}]},hentAvdelingensSakslister:t("button-click")};var d,k,S;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
      <SaksbehandlereForSakslisteForm valgtSaksliste={saksliste} avdelingensSaksbehandlere={avdelingensSaksbehandlere} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtAvdelingEnhet="Nav Vikafossen" />
    </RestApiMock>;
}`,...(S=(k=e.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var o,p,g;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
      <SaksbehandlereForSakslisteForm valgtSaksliste={saksliste} avdelingensSaksbehandlere={avdelingensSaksbehandlere} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtAvdelingEnhet="Nav Vikafossen" />
    </RestApiMock>;
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,A,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
      <SaksbehandlereForSakslisteForm valgtSaksliste={saksliste} avdelingensSaksbehandlere={avdelingensSaksbehandlere} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtAvdelingEnhet="Nav Vikafossen" />
    </RestApiMock>;
}`,...(h=(A=s.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var b,m,c;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`({
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
      <SaksbehandlereForSakslisteForm valgtSaksliste={saksliste} avdelingensSaksbehandlere={avdelingensSaksbehandlere} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtAvdelingEnhet="Nav Vikafossen" />
    </RestApiMock>;
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const W=["IngenSaksbehandlere","ToSaksbehandlere","TreSaksbehandlere","SaksbehandlereSomErGruppert"];export{e as IngenSaksbehandlere,a as SaksbehandlereSomErGruppert,n as ToSaksbehandlere,s as TreSaksbehandlere,W as __namedExportsOrder,Q as default};
