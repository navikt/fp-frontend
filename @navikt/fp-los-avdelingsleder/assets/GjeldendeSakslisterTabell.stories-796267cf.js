import{j as a}from"./jsx-runtime-86dfebf6.js";import{r as I}from"./index-1b03fe98.js";import{a as s}from"./chunk-AY7I2SME-5eb1ab46.js";import{R as y}from"./RestApiMock-492f57af.js";import{g as E,m as T}from"./nb_NO-632fc4c8.js";import{a as K}from"./alleKodeverkLos-5ac5bd02.js";import{a as R,R as L,r as F}from"./fplosRestApi-fe4a3ae6.js";import{G as k}from"./GjeldendeSakslisterTabell-93c5bd9d.js";import"./useGlobalStateRestApiData-20592075.js";import"./index-6fd5a17b.js";import"./index.es-657e045f.js";import"./useLosKodeverk-c901f2b0.js";import"./SletteSakslisteModal-68f923d2.js";import"./Modal-f8c23473.js";import"./Heading-c434b717.js";const f=E(T),H={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:k,decorators:[f]},S=({saksliste:c,nyeSakslister:g,valgtSakslisteId:p,oppgaverForAvdelingAntall:v,hentAvdelingensSakslister:A})=>{const[m,h]=I.useState(c||[]),b=[{key:R.KODEVERK_LOS.name,data:K,global:!0},{key:L.SLETT_SAKSLISTE.name,data:{}}];return a(y,{data:b,requestApi:F,children:a(k,{sakslister:m,valgtAvdelingEnhet:"1",setValgtSakslisteId:s("button-click"),lagNySaksliste:()=>h(u=>u.concat(g)),resetValgtSakslisteId:s("button-click"),hentAvdelingensSakslister:A,valgtSakslisteId:p,oppgaverForAvdelingAntall:v,content:a("div",{children:"test"})})})},e=S.bind({});e.args={nyeSakslister:[{sakslisteId:1,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],hentAvdelingensSakslister:s("button-click")};const t=S.bind({});t.args={saksliste:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],valgtSakslisteId:1,nyeSakslister:[{sakslisteId:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],oppgaverForAvdelingAntall:1,hentAvdelingensSakslister:s("button-click")};var l,i,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const J=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{t as TabellNårDetFinnesEnBehandlingskø,e as TabellNårDetIkkeFinnesBehandlingskøer,J as __namedExportsOrder,H as default};
//# sourceMappingURL=GjeldendeSakslisterTabell.stories-796267cf.js.map
