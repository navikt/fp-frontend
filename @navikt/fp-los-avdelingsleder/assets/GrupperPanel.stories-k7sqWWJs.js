import{j as h}from"./dayjs.min-ZUODdiE-.js";import{r as c}from"./index-uubelm5h.js";import{g as m,m as v}from"./nb_NO-DgrJ5I7_.js";import{R as I}from"./useRestApiRunner-DIVzIFJm.js";import{G as i}from"./GrupperPanel-mQXshFMs.js";import"./index-BdzLX9oW.js";import"./index.es-wEnEhcq-.js";import"./useDebounce-X00HPGnH.js";import"./Table-BDdiuVaa.js";const A=m(v),S=[{brukerIdent:"ident1",navn:"Anders Utvikler",ansattAvdeling:null},{brukerIdent:"ident12",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"ident4",navn:"Olga Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"ident3",navn:"Klara Utvikler",ansattAvdeling:"Avdeling Å"}],f=[{brukerIdent:"ident1",navn:"Anders Utvikler"}],O={saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"Dette er navnet på en gruppe",saksbehandlere:f}]},N=(n,e,p)=>p?n.concat({brukerIdent:e,navn:"Placholder for navn i story",ansattAvdeling:null}):n.filter(u=>u.saksbehandlerDto.brukerIdent!==e),T=n=>n.reduce((e,p)=>p.gruppeId>e?p.gruppeId:e,0)+1,j={title:"los/avdelingsleder/grupper/GrupperPanel",component:i,decorators:[A]},P=()=>{const[n,e]=c.useState(O),p=()=>{e(r=>({saksbehandlerGrupper:r.saksbehandlerGrupper.concat({gruppeId:T(r.saksbehandlerGrupper),saksbehandlere:[]})}))},u=r=>{e(a=>({saksbehandlerGrupper:a.saksbehandlerGrupper.filter(t=>t.gruppeId!==r)}))},b=(r,a)=>{e(t=>({saksbehandlerGrupper:t.saksbehandlerGrupper.map(s=>s.gruppeId===r?{...s,gruppeNavn:a}:s)}))},k=(r,a,t)=>{e(s=>({saksbehandlerGrupper:s.saksbehandlerGrupper.map(l=>l.gruppeId===a?{...l,saksbehandlere:N(l.saksbehandlere,r,t)}:l)}))};return h.jsx(i,{grupper:n,avdelingensSaksbehandlere:S,opprettOgHentAlleGrupper:p,opprettNyGruppeState:I.NOT_STARTED,lagreValgtSaksbehandlar:k,endreGruppenavn:b,slettGruppe:u})},d=P.bind({});var o,g,G;d.parameters={...d.parameters,docs:{...(o=d.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(G=(g=d.parameters)==null?void 0:g.docs)==null?void 0:G.source}}};const w=["Default"];export{d as Default,w as __namedExportsOrder,j as default};
