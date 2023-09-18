import{j as a}from"./jsx-runtime-9c4ae004.js";import{r as I}from"./index-1b03fe98.js";import{a as t}from"./chunk-AY7I2SME-c7b6cf8a.js";import{k as y}from"./index.es-28aae904.js";import{B as E,j as T,m as K}from"./nb_NO-91e99ecf.js";import{a as R,R as j,r as F}from"./fplosRestApi-beda4f04.js";import{G as k}from"./GjeldendeSakslisterTabell-0492ae5c.js";import"./index.es-dcafba10.js";import"./index-6fd5a17b.js";import"./index.es-657e045f.js";import"./useLosKodeverk-3c749e2b.js";import"./SletteSakslisteModal-5aa6a1b1.js";import"./Provider-c82db7e7.js";import"./Detail-a958125f.js";import"./Heading-39bd052b.js";const L=E(K),H={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:k,decorators:[L]},S=({saksliste:g,nyeSakslister:c,valgtSakslisteId:p,oppgaverForAvdelingAntall:A,hentAvdelingensSakslister:m})=>{const[v,h]=I.useState(g||[]),u=[{key:R.KODEVERK_LOS.name,data:T,global:!0},{key:j.SLETT_SAKSLISTE.name,data:{}}];return a.jsx(y,{data:u,requestApi:F,children:a.jsx(k,{sakslister:v,valgtAvdelingEnhet:"1",setValgtSakslisteId:t("button-click"),lagNySaksliste:()=>h(b=>b.concat(c)),resetValgtSakslisteId:t("button-click"),hentAvdelingensSakslister:m,valgtSakslisteId:p,oppgaverForAvdelingAntall:A})})},e=S.bind({});e.args={nyeSakslister:[{sakslisteId:1,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],hentAvdelingensSakslister:t("button-click")};const s=S.bind({});s.args={saksliste:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],valgtSakslisteId:1,nyeSakslister:[{sakslisteId:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],oppgaverForAvdelingAntall:1,hentAvdelingensSakslister:t("button-click")};var l,n,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
      <GjeldendeSakslisterTabell sakslister={sakslister} valgtAvdelingEnhet="1" setValgtSakslisteId={action('button-click')} lagNySaksliste={() => setSaksliste(oldState => oldState.concat(nyeSakslister))} resetValgtSakslisteId={action('button-click')} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtSakslisteId={valgtSakslisteId} oppgaverForAvdelingAntall={oppgaverForAvdelingAntall} />
    </RestApiMock>;
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var r,o,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
      <GjeldendeSakslisterTabell sakslister={sakslister} valgtAvdelingEnhet="1" setValgtSakslisteId={action('button-click')} lagNySaksliste={() => setSaksliste(oldState => oldState.concat(nyeSakslister))} resetValgtSakslisteId={action('button-click')} hentAvdelingensSakslister={hentAvdelingensSakslister} valgtSakslisteId={valgtSakslisteId} oppgaverForAvdelingAntall={oppgaverForAvdelingAntall} />
    </RestApiMock>;
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const J=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{s as TabellNårDetFinnesEnBehandlingskø,e as TabellNårDetIkkeFinnesBehandlingskøer,J as __namedExportsOrder,H as default};
//# sourceMappingURL=GjeldendeSakslisterTabell.stories-74769e97.js.map
