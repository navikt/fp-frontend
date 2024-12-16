import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{r as I}from"./index-uubelm5h.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{m as y}from"./nb_NO-Du4pagSL.js";import{g as E}from"./withIntl-B_2QVpuP.js";import{a as T}from"./alleKodeverkLos-BJud6Q-i.js";import{R as K}from"./RestApiMock-CMGSvSy2.js";import"./useRestApiRunner-Dz_KBbnA.js";import{R,a as L,r as F}from"./fplosRestApi-DIvKj8Ld.js";import{G as k}from"./GjeldendeSakslisterTabell-kn1Y68ky.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./index.es-B3phUJaJ.js";import"./Modal-CrXtQo6t.js";import"./dayjs.min-BsYQKNhR.js";import"./aktivitetStatus-B1m96ipJ.js";import"./kodeverkTyper-CavWL6Ds.js";import"./useLosKodeverk-D3IvkdFj.js";import"./SletteSakslisteModal-BUkoY7Og.js";import"./VStack-BZrJM_W_.js";import"./Table-Bc0CjSPI.js";const f=E(y),Y={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:k,decorators:[f]},S=({saksliste:c,nyeSakslister:p,valgtSakslisteId:g,oppgaverForAvdelingAntall:m,hentAvdelingensSakslister:v})=>{const[A,h]=I.useState(c||[]),u=[{key:R.KODEVERK_LOS.name,data:T,global:!0},{key:L.SLETT_SAKSLISTE.name,data:{}}];return a.jsx(K,{data:u,requestApi:F,children:a.jsx(k,{sakslister:A,valgtAvdelingEnhet:"1",setValgtSakslisteId:s("button-click"),lagNySaksliste:()=>h(b=>b.concat(p)),resetValgtSakslisteId:s("button-click"),hentAvdelingensSakslister:v,valgtSakslisteId:g,oppgaverForAvdelingAntall:m,content:a.jsx("div",{children:"test"})})})},e=S.bind({});e.args={nyeSakslister:[{sakslisteId:1,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],hentAvdelingensSakslister:s("button-click")};const t=S.bind({});t.args={saksliste:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],valgtSakslisteId:1,nyeSakslister:[{sakslisteId:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],oppgaverForAvdelingAntall:1,hentAvdelingensSakslister:s("button-click")};var l,i,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const Z=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{t as TabellNårDetFinnesEnBehandlingskø,e as TabellNårDetIkkeFinnesBehandlingskøer,Z as __namedExportsOrder,Y as default};
