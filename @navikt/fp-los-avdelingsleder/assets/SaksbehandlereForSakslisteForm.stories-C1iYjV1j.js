import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{R as l}from"./index-DVXBtNgz.js";import{g as y,m as K}from"./nb_NO-DypaWN8k.js";import{R as P}from"./RestApiMock-CMcnG-4N.js";import"./useRestApiRunner-r8nm61Jn.js";import{a as i,r as _}from"./fplosRestApi-DXPSIiTb.js";import{S as u}from"./SaksbehandlereForSakslisteForm-CKM_depy.js";import"./v4-CQkTLCs1.js";import"./index-Cbx7Fas8.js";import"./dayjs.min-Dkhc0ShP.js";import"./tslib.es6-CMwweBXX.js";import"./Panel-BoQTDHFM.js";import"./Table-vbMIJBOg.js";const f=y(K),j={title:"los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm",component:u,decorators:[f]},r=({saksliste:E,avdelingensSaksbehandlere:R,hentAvdelingensSakslister:I,grupperteSaksbehandlere:V})=>{const N=[{key:i.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,data:{}},{key:i.HENT_GRUPPER.name,data:V}];return l.createElement(P,{data:N,requestApi:_},l.createElement(u,{valgtSaksliste:E,avdelingensSaksbehandlere:R,hentAvdelingensSakslister:I,valgtAvdelingEnhet:"NAV Viken"}))},e=r.bind({});e.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[],hentAvdelingensSakslister:t("button-click")};const n=r.bind({});n.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S34354",navn:"Steffen",avdelingsnavn:["NAV Viken"]}],hentAvdelingensSakslister:t("button-click")};const a=r.bind({});a.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S34354",navn:"Steffen",avdelingsnavn:["NAV Viken"]},{brukerIdent:"E24353",navn:"Eirik",avdelingsnavn:["NAV Viken"]}],hentAvdelingensSakslister:t("button-click")};const s=r.bind({});s.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S34354",navn:"Steffen",avdelingsnavn:["NAV Viken"]},{brukerIdent:"E24353",navn:"Eirik",avdelingsnavn:["NAV Viken"]}],grupperteSaksbehandlere:{saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"Gruppe 1",saksbehandlere:[{avdelingsnavn:["NAV Oslo"],brukerIdent:"E23232",navn:"Espen Utvikler"},{avdelingsnavn:["NAV Oslo"],brukerIdent:"S34354",navn:"Steffen"}]}]},hentAvdelingensSakslister:t("button-click")};var d,k,S;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
      <SaksbehandlereForSakslisteForm valgtSaksliste={saksliste} avdelingensSaksbehandlere={avdelingensSaksbehandlere} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,A,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
}`,...(h=(A=a.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var b,c,m;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`({
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
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const z=["IngenSaksbehandlere","ToSaksbehandlere","TreSaksbehandlere","SaksbehandlereSomErGruppert"];export{e as IngenSaksbehandlere,s as SaksbehandlereSomErGruppert,n as ToSaksbehandlere,a as TreSaksbehandlere,z as __namedExportsOrder,j as default};
