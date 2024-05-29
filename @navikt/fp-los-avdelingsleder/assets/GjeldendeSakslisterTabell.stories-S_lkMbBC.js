import{r as I,R as a}from"./index-DogsOklH.js";import{a as s}from"./chunk-MZXVCX43-RlXIxtK5.js";import{R as E}from"./RestApiMock-PoHaMzn1.js";import"./useRestApiRunner-t59neJBf.js";import{g as y,m as R}from"./nb_NO-8vkv4Fjx.js";import{a as T}from"./alleKodeverkLos-3oPC0WGq.js";import{R as K,a as L,r as F}from"./fplosRestApi-hxLEfccG.js";import{G as k}from"./GjeldendeSakslisterTabell-hzgZLJ0h.js";import"./v4-yQnnJER4.js";import"./index-MroJ3egt.js";import"./index.es-LzEcK_Mh.js";import"./useLosKodeverk-_R72ADyC.js";import"./SletteSakslisteModal-VyMguG4i.js";import"./Table-jpuw6DY0.js";const G=y(R),C={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:k,decorators:[G]},S=({saksliste:c,nyeSakslister:g,valgtSakslisteId:p,oppgaverForAvdelingAntall:v,hentAvdelingensSakslister:A})=>{const[m,u]=I.useState(c||[]),b=[{key:K.KODEVERK_LOS.name,data:T,global:!0},{key:L.SLETT_SAKSLISTE.name,data:{}}];return a.createElement(E,{data:b,requestApi:F},a.createElement(k,{sakslister:m,valgtAvdelingEnhet:"1",setValgtSakslisteId:s("button-click"),lagNySaksliste:()=>u(h=>h.concat(g)),resetValgtSakslisteId:s("button-click"),hentAvdelingensSakslister:A,valgtSakslisteId:p,oppgaverForAvdelingAntall:v,content:a.createElement("div",null,"test")}))},e=S.bind({});e.args={nyeSakslister:[{sakslisteId:1,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],hentAvdelingensSakslister:s("button-click")};const t=S.bind({});t.args={saksliste:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],valgtSakslisteId:1,nyeSakslister:[{sakslisteId:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1}],oppgaverForAvdelingAntall:1,hentAvdelingensSakslister:s("button-click")};var l,n,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const H=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{t as TabellNårDetFinnesEnBehandlingskø,e as TabellNårDetIkkeFinnesBehandlingskøer,H as __namedExportsOrder,C as default};
