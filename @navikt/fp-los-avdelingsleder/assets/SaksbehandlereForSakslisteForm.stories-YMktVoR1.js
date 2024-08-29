import{j as l}from"./dayjs.min-ZUODdiE-.js";import{a as t}from"./chunk-454WOBUV-CM0pFb8Z.js";import{g as P,m as _}from"./nb_NO-ffV-qhYU.js";import{R as N}from"./RestApiMock-bbm7V34S.js";import"./index-uubelm5h.js";import"./useRestApiRunner-DIVzIFJm.js";import{a as i,r as f}from"./fplosRestApi-CXjbKy4z.js";import{S as u}from"./SaksbehandlereForSakslisteForm-DYW4EceM.js";import"./v4-CQkTLCs1.js";import"./index-BdzLX9oW.js";import"./Panel-HELrIUHO.js";import"./Table-BNax95ki.js";const L=P(_),w={title:"los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm",component:u,decorators:[L]},r=({saksliste:E,avdelingensSaksbehandlere:R,hentAvdelingensSakslister:I,grupperteSaksbehandlere:y})=>{const K=[{key:i.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,data:{}},{key:i.HENT_GRUPPER.name,data:y}];return l.jsx(N,{data:K,requestApi:f,children:l.jsx(u,{valgtSaksliste:E,avdelingensSaksbehandlere:R,hentAvdelingensSakslister:I,valgtAvdelingEnhet:"NAV Viken"})})},e=r.bind({});e.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[],hentAvdelingensSakslister:t("button-click")};const n=r.bind({});n.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"}],hentAvdelingensSakslister:t("button-click")};const s=r.bind({});s.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"},{brukerIdent:"E24353",navn:"Eirik",ansattAvdeling:"Avdeling Å"}],hentAvdelingensSakslister:t("button-click")};const a=r.bind({});a.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"},{brukerIdent:"E24353",navn:"Eirik",ansattAvdeling:"Avdeling Å"}],grupperteSaksbehandlere:{saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"Gruppe 1",saksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"}]}]},hentAvdelingensSakslister:t("button-click")};var d,k,S;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,c,m;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`({
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
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const O=["IngenSaksbehandlere","ToSaksbehandlere","TreSaksbehandlere","SaksbehandlereSomErGruppert"];export{e as IngenSaksbehandlere,a as SaksbehandlereSomErGruppert,n as ToSaksbehandlere,s as TreSaksbehandlere,O as __namedExportsOrder,w as default};
