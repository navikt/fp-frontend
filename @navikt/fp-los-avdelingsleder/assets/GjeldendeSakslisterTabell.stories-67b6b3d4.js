import{j as a}from"./jsx-runtime-69eee039.js";import{r as I}from"./index-7c191284.js";import{a as t}from"./chunk-AY7I2SME-c7b6cf8a.js";import{k as y}from"./index.es-0d3529a2.js";import{B as E,j as T,m as K}from"./nb_NO-d9a4e020.js";import{a as R,R as j,r as F}from"./fplosRestApi-06437043.js";import{G as k}from"./GjeldendeSakslisterTabell-b8e0c498.js";import{M as L}from"./Provider-bfaf0040.js";import"./index.es-6dfc8135.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";import"./index.es-657e045f.js";import"./remove-2f21eb3e.js";import"./useLosKodeverk-c784a1f9.js";import"./SletteSakslisteModal-3b810e9e.js";import"./advarsel-27b41fd8.js";import"./Heading-1f23922b.js";import"./Detail-6f47004b.js";import"./index-b3a39e30.js";L.setAppElement("body");const f=E(K),X={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:k,decorators:[f]},S=({saksliste:p,nyeSakslister:g,valgtSakslisteId:c,oppgaverForAvdelingAntall:m,hentAvdelingensSakslister:A})=>{const[v,b]=I.useState(p||[]),h=[{key:R.KODEVERK_LOS.name,data:T,global:!0},{key:j.SLETT_SAKSLISTE.name,data:{}}];return a.jsx(y,{data:h,requestApi:F,children:a.jsx(k,{sakslister:v,valgtAvdelingEnhet:"1",setValgtSakslisteId:t("button-click"),lagNySaksliste:()=>b(u=>u.concat(g)),resetValgtSakslisteId:t("button-click"),hentAvdelingensSakslister:A,valgtSakslisteId:c,oppgaverForAvdelingAntall:m})})},e=S.bind({});e.args={nyeSakslister:[{sakslisteId:1,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],hentAvdelingensSakslister:t("button-click")};const s=S.bind({});s.args={saksliste:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],valgtSakslisteId:1,nyeSakslister:[{sakslisteId:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],oppgaverForAvdelingAntall:1,hentAvdelingensSakslister:t("button-click")};var l,i,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var r,o,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const Y=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{s as TabellNårDetFinnesEnBehandlingskø,e as TabellNårDetIkkeFinnesBehandlingskøer,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=GjeldendeSakslisterTabell.stories-67b6b3d4.js.map
