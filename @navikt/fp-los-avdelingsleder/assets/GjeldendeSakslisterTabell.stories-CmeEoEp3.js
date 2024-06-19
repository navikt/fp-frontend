import{r as I,R as a}from"./index-DVXBtNgz.js";import{a as s}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{R as E}from"./RestApiMock-D7GvAGON.js";import"./useRestApiRunner-r8nm61Jn.js";import{g as y,m as R}from"./nb_NO-Cx50JONv.js";import{a as T}from"./alleKodeverkLos-BJud6Q-i.js";import{R as K,a as L,r as F}from"./fplosRestApi-DXPSIiTb.js";import{G as k}from"./GjeldendeSakslisterTabell-s_7yWMu8.js";import"./v4-CQkTLCs1.js";import"./index-Cbx7Fas8.js";import"./tslib.es6-CMwweBXX.js";import"./index.es-Cl_yxThX.js";import"./useLosKodeverk-BklsCf3V.js";import"./SletteSakslisteModal-DH3lfb4z.js";import"./Table-fM8G9n-f.js";const G=y(R),H={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:k,decorators:[G]},S=({saksliste:c,nyeSakslister:g,valgtSakslisteId:p,oppgaverForAvdelingAntall:v,hentAvdelingensSakslister:m})=>{const[A,u]=I.useState(c||[]),b=[{key:K.KODEVERK_LOS.name,data:T,global:!0},{key:L.SLETT_SAKSLISTE.name,data:{}}];return a.createElement(E,{data:b,requestApi:F},a.createElement(k,{sakslister:A,valgtAvdelingEnhet:"1",setValgtSakslisteId:s("button-click"),lagNySaksliste:()=>u(h=>h.concat(g)),resetValgtSakslisteId:s("button-click"),hentAvdelingensSakslister:m,valgtSakslisteId:p,oppgaverForAvdelingAntall:v,content:a.createElement("div",null,"test")}))},e=S.bind({});e.args={nyeSakslister:[{sakslisteId:1,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],hentAvdelingensSakslister:s("button-click")};const t=S.bind({});t.args={saksliste:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],valgtSakslisteId:1,nyeSakslister:[{sakslisteId:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],oppgaverForAvdelingAntall:1,hentAvdelingensSakslister:s("button-click")};var l,n,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
  saksliste,
  nyeSakslister,
  valgtSakslisteId,
  oppgaverForAvdelingAntall,
  hentAvdelingensSakslister
}) => {
  const [sakslister, setSaksliste] = useState<Saksliste[]>(saksliste || []);
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.SLETT_SAKSLISTE.name,
    data: {}
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <GjeldendeSakslisterTabell sakslister={sakslister} valgtAvdelingEnhet="1" setValgtSakslisteId={action('button-click')} lagNySaksliste={() => setSaksliste(oldState => oldState.concat(nyeSakslister))} resetValgtSakslisteId={action('button-click')} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtSakslisteId={valgtSakslisteId} oppgaverForAvdelingAntall={oppgaverForAvdelingAntall} content={<div>test</div>} />
    </RestApiMock>;
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var r,o,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  saksliste,
  nyeSakslister,
  valgtSakslisteId,
  oppgaverForAvdelingAntall,
  hentAvdelingensSakslister
}) => {
  const [sakslister, setSaksliste] = useState<Saksliste[]>(saksliste || []);
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.SLETT_SAKSLISTE.name,
    data: {}
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <GjeldendeSakslisterTabell sakslister={sakslister} valgtAvdelingEnhet="1" setValgtSakslisteId={action('button-click')} lagNySaksliste={() => setSaksliste(oldState => oldState.concat(nyeSakslister))} resetValgtSakslisteId={action('button-click')} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtSakslisteId={valgtSakslisteId} oppgaverForAvdelingAntall={oppgaverForAvdelingAntall} content={<div>test</div>} />
    </RestApiMock>;
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const J=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{t as TabellNårDetFinnesEnBehandlingskø,e as TabellNårDetIkkeFinnesBehandlingskøer,J as __namedExportsOrder,H as default};
