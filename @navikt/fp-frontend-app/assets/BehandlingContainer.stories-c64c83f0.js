import{t as m,j as s,P as h}from"./index.es-d91a6690.js";import{r as n}from"./index-6d8bab86.js";import{x as g}from"./index.es-bf42e136.js";import{B as i}from"./BehandlingContainer-072e4d1d.js";import{m as F}from"./nb_NO-2dbbfd6c.js";import"./index.es-39c97233.js";import"./BehandlingHenlagtPanel-d1d75232.js";import"./useGlobalStateRestApiData-33757b01.js";import"./bind-a91db82b.js";import"./index.es-456245dd.js";const j=m(F),x=({registrerFaktaPanel:t,valgtFaktaSteg:e})=>(n.useEffect(()=>{t({id:"1",tekst:"Dette er en paneltittel",erAktiv:e==="1",harApneAksjonspunkter:!0})},[]),e!=="1"?null:s.jsx("div",{children:"Dette er et testpanel"})),v=({registrerFaktaPanel:t,valgtFaktaSteg:e})=>(n.useEffect(()=>{t({id:"2",tekst:"Annet panel",erAktiv:e==="2",harApneAksjonspunkter:!1})},[e]),e!=="2"?null:s.jsx("div",{children:"Dette er et annet panel"})),A=({registrerProsessPanel:t,valgtProsessSteg:e})=>(n.useEffect(()=>{t({id:"1",tekst:"Adopsjon",erAktiv:e==="1",harApentAksjonspunkt:!1,status:g.OPPFYLT})},[]),e!=="1"?null:s.jsx("div",{children:"Dette er et testpanel for adopsjon"})),T=({registrerProsessPanel:t,valgtProsessSteg:e})=>(n.useEffect(()=>{t({id:"2",tekst:"Fødsel",erAktiv:e==="2",harApentAksjonspunkt:!0,status:g.IKKE_OPPFYLT})},[]),e!=="2"?null:s.jsx("div",{children:"Dette er et testpanel for fødsel"})),D={title:"app/behandling-container",component:i},r=()=>{const[t,e]=n.useState("default"),o=n.useCallback(a=>s.jsxs(s.Fragment,{children:[s.jsx(x,{...a}),s.jsx(v,{...a})]}),[]);return s.jsx(h,{value:j,children:s.jsx(i,{behandling:{},valgtFaktaSteg:t,oppdaterProsessStegOgFaktaPanelIUrl:(a,f)=>e(f),hentFaktaPaneler:o})})},l=()=>{const[t,e]=n.useState("default"),o=n.useCallback(a=>s.jsxs(s.Fragment,{children:[s.jsx(A,{...a}),s.jsx(T,{...a})]}),[]);return s.jsx(i,{behandling:{},valgtProsessSteg:t,oppdaterProsessStegOgFaktaPanelIUrl:a=>e(a),hentProsessPaneler:o})};var P,p,u;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [valgtFaktaPanel, setValgtFaktaPanel] = useState<string | undefined>('default');
  const faktaPaneler = useCallback((props: FaktaPanelInitProps) => <>
        <FaktaPanelTest1 {...props} />
        <FaktaPanelTest2 {...props} />
      </>, []);
  return <RawIntlProvider value={intl}>
      <BehandlingContainer behandling={({} as Behandling)} valgtFaktaSteg={valgtFaktaPanel} oppdaterProsessStegOgFaktaPanelIUrl={(_prosessPanel?: string, faktaPanel?: string) => setValgtFaktaPanel(faktaPanel)} hentFaktaPaneler={faktaPaneler} />
    </RawIntlProvider>;
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,k;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [valgtProsessPanel, setValgtProsessPanel] = useState<string | undefined>('default');
  const prosessPaneler = useCallback((props: ProsessPanelInitProps) => <>
        <ProsessPanelTest1 {...props} />
        <ProsessPanelTest2 {...props} />
      </>, []);
  return <BehandlingContainer behandling={({} as Behandling)} valgtProsessSteg={valgtProsessPanel} oppdaterProsessStegOgFaktaPanelIUrl={(prosessPanel?: string) => setValgtProsessPanel(prosessPanel)} hentProsessPaneler={prosessPaneler} />;
}`,...(k=(c=l.parameters)==null?void 0:c.docs)==null?void 0:k.source}}};const U=["VisKunFaktaPaneler","VisKunProsessPaneler"];export{r as VisKunFaktaPaneler,l as VisKunProsessPaneler,U as __namedExportsOrder,D as default};
//# sourceMappingURL=BehandlingContainer.stories-c64c83f0.js.map
