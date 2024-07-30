import{j as i}from"./dayjs.min-DKYhEbg2.js";import{a as t}from"./chunk-454WOBUV-CM0pFb8Z.js";import{g as y,m as K}from"./nb_NO-CRq88Yak.js";import{R as P}from"./RestApiMock-DKZL9Vcn.js";import"./index-BBkUAzwr.js";import"./useRestApiRunner-DAdfBy_z.js";import{a as l,r as _}from"./fplosRestApi-Dw3FUmgN.js";import{S as u}from"./SaksbehandlereForSakslisteForm-CB3D9WRW.js";import"./v4-CQkTLCs1.js";import"./index-BfZ0jBbx.js";import"./Panel-B5ILUgZi.js";import"./Table-B9QWrIP5.js";const f=y(K),O={title:"los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm",component:u,decorators:[f]},r=({saksliste:E,avdelingensSaksbehandlere:R,hentAvdelingensSakslister:I,grupperteSaksbehandlere:V})=>{const N=[{key:l.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,data:{}},{key:l.HENT_GRUPPER.name,data:V}];return i.jsx(P,{data:N,requestApi:_,children:i.jsx(u,{valgtSaksliste:E,avdelingensSaksbehandlere:R,hentAvdelingensSakslister:I,valgtAvdelingEnhet:"NAV Viken"})})},e=r.bind({});e.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[],hentAvdelingensSakslister:t("button-click")};const n=r.bind({});n.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S34354",navn:"Steffen",avdelingsnavn:["NAV Viken"]}],hentAvdelingensSakslister:t("button-click")};const s=r.bind({});s.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S34354",navn:"Steffen",avdelingsnavn:["NAV Viken"]},{brukerIdent:"E24353",navn:"Eirik",avdelingsnavn:["NAV Viken"]}],hentAvdelingensSakslister:t("button-click")};const a=r.bind({});a.args={saksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S34354",navn:"Steffen",avdelingsnavn:["NAV Viken"]},{brukerIdent:"E24353",navn:"Eirik",avdelingsnavn:["NAV Viken"]}],grupperteSaksbehandlere:{saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"Gruppe 1",saksbehandlere:[{avdelingsnavn:["NAV Oslo"],brukerIdent:"E23232",navn:"Espen Utvikler"},{avdelingsnavn:["NAV Oslo"],brukerIdent:"S34354",navn:"Steffen"}]}]},hentAvdelingensSakslister:t("button-click")};var d,k,S;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,h,A;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
}`,...(A=(h=s.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var b,c,m;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`({
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
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const w=["IngenSaksbehandlere","ToSaksbehandlere","TreSaksbehandlere","SaksbehandlereSomErGruppert"];export{e as IngenSaksbehandlere,a as SaksbehandlereSomErGruppert,n as ToSaksbehandlere,s as TreSaksbehandlere,w as __namedExportsOrder,O as default};
