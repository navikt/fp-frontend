import{r as c,R as h}from"./index-DogsOklH.js";import{g as v,m}from"./nb_NO-8vkv4Fjx.js";import{R as I}from"./useRestApiRunner-t59neJBf.js";import{G as b}from"./GrupperPanel-k3BA54DO.js";import"./index-MroJ3egt.js";import"./index.es-lhDBPqjE.js";import"./useDebounce-7npZRRYW.js";import"./Table-jpuw6DY0.js";const S=v(m),A=[{brukerIdent:"ident1",navn:"Anders Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident12",navn:"Espen Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident4",navn:"Olga Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident3",navn:"Klara Utvikler",avdelingsnavn:["NAV Oslo"]}],N=[{avdelingsnavn:["NAV Oslo"],brukerIdent:"ident1",navn:"Anders Utvikler"}],O={saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"Dette er navnet på en gruppe",saksbehandlere:N}]},f=(n,e,p)=>p?n.concat({avdelingsnavn:["Navn på avdeling"],brukerIdent:e,navn:"Placholder for navn i story"}):n.filter(u=>u.saksbehandlerDto.brukerIdent!==e),V=n=>n.reduce((e,p)=>p.gruppeId>e?p.gruppeId:e,0)+1,_={title:"los/avdelingsleder/grupper/GrupperPanel",component:b,decorators:[S]},T=()=>{const[n,e]=c.useState(O),p=()=>{e(r=>({saksbehandlerGrupper:r.saksbehandlerGrupper.concat({gruppeId:V(r.saksbehandlerGrupper),saksbehandlere:[]})}))},u=r=>{e(a=>({saksbehandlerGrupper:a.saksbehandlerGrupper.filter(t=>t.gruppeId!==r)}))},k=(r,a)=>{e(t=>({saksbehandlerGrupper:t.saksbehandlerGrupper.map(s=>s.gruppeId===r?{...s,gruppeNavn:a}:s)}))},i=(r,a,t)=>{e(s=>({saksbehandlerGrupper:s.saksbehandlerGrupper.map(l=>l.gruppeId===a?{...l,saksbehandlere:f(l.saksbehandlere,r,t)}:l)}))};return h.createElement(b,{grupper:n,avdelingensSaksbehandlere:A,opprettOgHentAlleGrupper:p,opprettNyGruppeState:I.NOT_STARTED,lagreValgtSaksbehandlar:i,endreGruppenavn:k,slettGruppe:u})},d=T.bind({});var o,g,G;d.parameters={...d.parameters,docs:{...(o=d.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [grupper, setGruppe] = useState(saksbehandlereOgSaksbehandlerGrupper);
  const opprettOgHentAlleGrupper = () => {
    setGruppe(oldG => ({
      saksbehandlerGrupper: oldG.saksbehandlerGrupper.concat({
        gruppeId: creatNewId(oldG.saksbehandlerGrupper),
        saksbehandlere: []
      })
    }));
  };
  const slettGruppeOgHentAllePåNytt = (gruppeId: number) => {
    setGruppe(oldG => ({
      saksbehandlerGrupper: oldG.saksbehandlerGrupper.filter(g => g.gruppeId !== gruppeId)
    }));
  };
  const endreGruppenavn = (gruppeId: number, gruppeNavn: string) => {
    setGruppe(oldG => ({
      saksbehandlerGrupper: oldG.saksbehandlerGrupper.map(g => {
        if (g.gruppeId === gruppeId) {
          return {
            ...g,
            gruppeNavn
          };
        }
        return g;
      })
    }));
  };
  const lagreValgtSaksbehandler = (brukerIdent: string, gruppeId: number, leggTil: boolean) => {
    setGruppe(oldG => ({
      saksbehandlerGrupper: oldG.saksbehandlerGrupper.map(g => {
        if (g.gruppeId === gruppeId) {
          return {
            ...g,
            saksbehandlere: endreSaksbehandlere(g.saksbehandlere, brukerIdent, leggTil)
          };
        }
        return g;
      })
    }));
  };
  return <GrupperPanel grupper={grupper} avdelingensSaksbehandlere={avdelingensSaksbehandlere} opprettOgHentAlleGrupper={opprettOgHentAlleGrupper} opprettNyGruppeState={RestApiState.NOT_STARTED} lagreValgtSaksbehandlar={lagreValgtSaksbehandler} endreGruppenavn={endreGruppenavn} slettGruppe={slettGruppeOgHentAllePåNytt} />;
}`,...(G=(g=d.parameters)==null?void 0:g.docs)==null?void 0:G.source}}};const w=["Default"];export{d as Default,w as __namedExportsOrder,_ as default};
