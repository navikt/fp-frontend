import{t as m,j as s,P as h}from"./index.es-53b354a9.js";import{r as n}from"./index-2ef1385a.js";import{x as g}from"./index.es-74e3f685.js";import{B as P}from"./BehandlingContainer-33af4596.js";import{m as F}from"./nb_NO-e803aba2.js";import"./index-fcaef652.js";import"./BehandlingHenlagtPanel-3604a27a.js";import"./index.es-23b6a505.js";import"./index.es-e68eea64.js";const j=m(F),x=({registrerFaktaPanel:t,valgtFaktaSteg:e})=>(n.useEffect(()=>{t({id:"1",tekst:"Dette er en paneltittel",erAktiv:e==="1",harApneAksjonspunkter:!0})},[]),e!=="1"?null:s.jsx("div",{children:"Dette er et testpanel"})),v=({registrerFaktaPanel:t,valgtFaktaSteg:e})=>(n.useEffect(()=>{t({id:"2",tekst:"Annet panel",erAktiv:e==="2",harApneAksjonspunkter:!1})},[e]),e!=="2"?null:s.jsx("div",{children:"Dette er et annet panel"})),A=({registrerProsessPanel:t,valgtProsessSteg:e})=>(n.useEffect(()=>{t({id:"1",tekst:"Adopsjon",erAktiv:e==="1",harApentAksjonspunkt:!1,status:g.OPPFYLT})},[]),e!=="1"?null:s.jsx("div",{children:"Dette er et testpanel for adopsjon"})),T=({registrerProsessPanel:t,valgtProsessSteg:e})=>(n.useEffect(()=>{t({id:"2",tekst:"Fødsel",erAktiv:e==="2",harApentAksjonspunkt:!0,status:g.IKKE_OPPFYLT})},[]),e!=="2"?null:s.jsx("div",{children:"Dette er et testpanel for fødsel"})),_={title:"app/behandling-container",component:P},r=()=>{const[t,e]=n.useState("default"),o=n.useCallback(a=>s.jsxs(s.Fragment,{children:[s.jsx(x,{...a}),s.jsx(v,{...a})]}),[]);return s.jsx(h,{value:j,children:s.jsx(P,{behandling:{},valgtFaktaSteg:t,oppdaterProsessStegOgFaktaPanelIUrl:(a,f)=>e(f),hentFaktaPaneler:o})})},l=()=>{const[t,e]=n.useState("default"),o=n.useCallback(a=>s.jsxs(s.Fragment,{children:[s.jsx(A,{...a}),s.jsx(T,{...a})]}),[]);return s.jsx(P,{behandling:{},valgtProsessSteg:t,oppdaterProsessStegOgFaktaPanelIUrl:a=>e(a),hentProsessPaneler:o})};var i,p,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(k=(c=l.parameters)==null?void 0:c.docs)==null?void 0:k.source}}};const D=["VisKunFaktaPaneler","VisKunProsessPaneler"];export{r as VisKunFaktaPaneler,l as VisKunProsessPaneler,D as __namedExportsOrder,_ as default};
//# sourceMappingURL=BehandlingContainer.stories-d5add111.js.map
