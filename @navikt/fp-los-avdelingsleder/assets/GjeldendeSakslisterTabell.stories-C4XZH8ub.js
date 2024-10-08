import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{r as I}from"./index-uubelm5h.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{R as y}from"./RestApiMock-CpztDn02.js";import"./useRestApiRunner-c-Q2a7zB.js";import{m as E}from"./nb_NO-BE-Qr1m0.js";import{g as T}from"./withIntl-B5J5Towl.js";import{a as K}from"./alleKodeverkLos-BJud6Q-i.js";import{R,a as L,r as F}from"./fplosRestApi-1yojVYCb.js";import{G as k}from"./GjeldendeSakslisterTabell-BUV6QSFh.js";import"./v4-CQkTLCs1.js";import"./index-CfOt2XX2.js";import"./dayjs.min-BsYQKNhR.js";import"./index.es-Cl_yxThX.js";import"./useLosKodeverk-Bf_J3o3R.js";import"./SletteSakslisteModal-B3266usa.js";import"./Table-BDJ7LgOv.js";const f=T(E),Q={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:k,decorators:[f]},S=({saksliste:c,nyeSakslister:g,valgtSakslisteId:p,oppgaverForAvdelingAntall:v,hentAvdelingensSakslister:m})=>{const[A,h]=I.useState(c||[]),u=[{key:R.KODEVERK_LOS.name,data:K,global:!0},{key:L.SLETT_SAKSLISTE.name,data:{}}];return a.jsx(y,{data:u,requestApi:F,children:a.jsx(k,{sakslister:A,valgtAvdelingEnhet:"1",setValgtSakslisteId:s("button-click"),lagNySaksliste:()=>h(b=>b.concat(g)),resetValgtSakslisteId:s("button-click"),hentAvdelingensSakslister:m,valgtSakslisteId:p,oppgaverForAvdelingAntall:v,content:a.jsx("div",{children:"test"})})})},e=S.bind({});e.args={nyeSakslister:[{sakslisteId:1,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],hentAvdelingensSakslister:s("button-click")};const t=S.bind({});t.args={saksliste:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],valgtSakslisteId:1,nyeSakslister:[{sakslisteId:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],oppgaverForAvdelingAntall:1,hentAvdelingensSakslister:s("button-click")};var l,i,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var r,o,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const U=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{t as TabellNårDetFinnesEnBehandlingskø,e as TabellNårDetIkkeFinnesBehandlingskøer,U as __namedExportsOrder,Q as default};
