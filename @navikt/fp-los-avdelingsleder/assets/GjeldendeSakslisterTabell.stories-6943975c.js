import{j as a}from"./jsx-runtime-5926aa06.js";import{r as I}from"./index-ebeaab24.js";import{a as t}from"./chunk-OPEUWD42-a3b45fd8.js";import{k as y}from"./index.es-f19dba30.js";import{B as E,j as T,m as K}from"./nb_NO-34c6c3ba.js";import{R,a as j,r as F}from"./fplosRestApi-56e2d09a.js";import{G as k}from"./GjeldendeSakslisterTabell-19aad35e.js";import{M as L}from"./Provider-26ee741a.js";import"./index.es-24d105fb.js";import"./index-9c09ad76.js";import"./index.es-657e045f.js";import"./remove-2f21eb3e.js";import"./useLosKodeverk-46a11add.js";import"./SletteSakslisteModal-8f8c0886.js";import"./advarsel-27b41fd8.js";import"./Heading-8a34415b.js";import"./Detail-86c2a14d.js";import"./index-f50b85d6.js";L.setAppElement("body");const f=E(K),W={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:k,decorators:[f]},S=({saksliste:p,nyeSakslister:g,valgtSakslisteId:c,oppgaverForAvdelingAntall:m,hentAvdelingensSakslister:A})=>{const[v,b]=I.useState(p||[]),h=[{key:R.KODEVERK_LOS.name,data:T,global:!0},{key:j.SLETT_SAKSLISTE.name,data:{}}];return a.jsx(y,{data:h,requestApi:F,children:a.jsx(k,{sakslister:v,valgtAvdelingEnhet:"1",setValgtSakslisteId:t("button-click"),lagNySaksliste:()=>b(u=>u.concat(g)),resetValgtSakslisteId:t("button-click"),hentAvdelingensSakslister:A,valgtSakslisteId:c,oppgaverForAvdelingAntall:m})})},e=S.bind({});e.args={nyeSakslister:[{sakslisteId:1,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],hentAvdelingensSakslister:t("button-click")};const s=S.bind({});s.args={saksliste:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],valgtSakslisteId:1,nyeSakslister:[{sakslisteId:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],oppgaverForAvdelingAntall:1,hentAvdelingensSakslister:t("button-click")};var l,i,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const X=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{s as TabellNårDetFinnesEnBehandlingskø,e as TabellNårDetIkkeFinnesBehandlingskøer,X as __namedExportsOrder,W as default};
//# sourceMappingURL=GjeldendeSakslisterTabell.stories-6943975c.js.map
