import{j as h}from"./jsx-runtime-QvZ8i92b.js";import{r as c}from"./index-uubelm5h.js";import{m}from"./nb_NO-xOTxt9dL.js";import{g as v}from"./withIntl-YzfFZyng.js";import{R as I}from"./useRestApiRunner-J7gTlJGx.js";import{G}from"./GrupperPanel-CRIkk8An.js";import"./index-C5xsJX-I.js";import"./Modal-tRW4hqse.js";import"./dayjs.min-BsYQKNhR.js";import"./index.es-Det53JvI.js";import"./VStack-yjYS5DzK.js";import"./index.es-D4mUV_xz.js";import"./useDebounce-CYdw6kEm.js";import"./Table-BGg6xs3s.js";const A=v(m),S=[{brukerIdent:"ident1",navn:"Anders Utvikler",ansattAvdeling:null},{brukerIdent:"ident12",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"ident4",navn:"Olga Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"ident3",navn:"Klara Utvikler",ansattAvdeling:"Avdeling Å"}],f=[{brukerIdent:"ident1",navn:"Anders Utvikler"}],O={saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"Dette er navnet på en gruppe",saksbehandlere:f}]},N=(n,e,p)=>p?n.concat({brukerIdent:e,navn:"Placholder for navn i story",ansattAvdeling:null}):n.filter(u=>u.saksbehandlerDto.brukerIdent!==e),T=n=>n.reduce((e,p)=>p.gruppeId>e?p.gruppeId:e,0)+1,B={title:"los/avdelingsleder/grupper/GrupperPanel",component:G,decorators:[A]},P=()=>{const[n,e]=c.useState(O),p=()=>{e(r=>({saksbehandlerGrupper:r.saksbehandlerGrupper.concat({gruppeId:T(r.saksbehandlerGrupper),saksbehandlere:[]})}))},u=r=>{e(t=>({saksbehandlerGrupper:t.saksbehandlerGrupper.filter(a=>a.gruppeId!==r)}))},b=(r,t)=>{e(a=>({saksbehandlerGrupper:a.saksbehandlerGrupper.map(s=>s.gruppeId===r?{...s,gruppeNavn:t}:s)}))},k=(r,t,a)=>{e(s=>({saksbehandlerGrupper:s.saksbehandlerGrupper.map(l=>l.gruppeId===t?{...l,saksbehandlere:N(l.saksbehandlere,r,a)}:l)}))};return h.jsx(G,{grupper:n,avdelingensSaksbehandlere:S,opprettOgHentAlleGrupper:p,opprettNyGruppeState:I.NOT_STARTED,lagreValgtSaksbehandlar:k,endreGruppenavn:b,slettGruppe:u})},d=P.bind({});var o,g,i;d.parameters={...d.parameters,docs:{...(o=d.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [grupper, setGrupper] = useState(saksbehandlereOgSaksbehandlerGrupper);
  const opprettOgHentAlleGrupper = () => {
    setGrupper(oldG => ({
      saksbehandlerGrupper: oldG.saksbehandlerGrupper.concat({
        gruppeId: creatNewId(oldG.saksbehandlerGrupper),
        saksbehandlere: []
      })
    }));
  };
  const slettGruppeOgHentAllePåNytt = (gruppeId: number) => {
    setGrupper(oldG => ({
      saksbehandlerGrupper: oldG.saksbehandlerGrupper.filter(g => g.gruppeId !== gruppeId)
    }));
  };
  const endreGruppenavn = (gruppeId: number, gruppeNavn: string) => {
    setGrupper(oldG => ({
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
    setGrupper(oldG => ({
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
}`,...(i=(g=d.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};const C=["Default"];export{d as Default,C as __namedExportsOrder,B as default};
