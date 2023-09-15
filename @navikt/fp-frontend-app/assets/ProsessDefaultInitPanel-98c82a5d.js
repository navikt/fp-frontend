import{j as O}from"./index.es-52b76dd9.js";import{h as R,y as D}from"./index.es-672d9717.js";import{ah as V,ai as _,a as K,a4 as M}from"./AppIndex.stories-ea5e7f65.js";import{r as d}from"./index-6d8bab86.js";import{b as F,H as q,x as m,E as L}from"./index.es-bf42e136.js";import{t as I}from"./index.es-51b84963.js";import{P as B}from"./BehandlingHenlagtPanel-607a9350.js";const U=a=>a.taskStatus&&a.taskStatus.readOnly?a.taskStatus.readOnly:!1,C=(a,t,r,e,p)=>{const{behandlingPaaVent:n}=a,o=p||U(a),l=r.some(s=>!s.overstyrbar);return!e.writeAccess.isEnabled||n||o||l},N=(a,t)=>a.status!==F.BEHANDLING_UTREDES?{}:t.reduce((r,e)=>({...r,[e.definisjon]:{notAccepted:e.toTrinnsBehandling&&e.toTrinnsBehandlingGodkjent===!1}}),{}),x="default",Y="default",G=(a,t,r,e,p,n)=>o=>{const l=Array.isArray(o)?o:[o],s=l.map(u=>({"@type":u.kode,...u})),k={saksnummer:t.saksnummer,behandlingUuid:r.uuid,behandlingVersjon:r.versjon},c=a(l);if(n){const u=e.filter(g=>l.some(f=>f.kode===g.definisjon)),P=u.some(g=>g.aksjonspunktType===_.OVERSTYRING||g.aksjonspunktType===_.SAKSBEHANDLEROVERSTYRING);if(l.length===0)throw Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(u.length===0||P)return n({...k,overstyrteAksjonspunktDtoer:s},!0).then(c)}return p({...k,bekreftedeAksjonspunktDtoer:s},!0).then(c)},H=(a,t)=>{if(a.length>0){const r=a.map(e=>e.vilkarStatus);return r.some(e=>e===m.IKKE_VURDERT)?m.IKKE_VURDERT:r.every(e=>e===m.OPPFYLT)?m.OPPFYLT:m.IKKE_OPPFYLT}return t.length>0?t.some(r=>L(r.status))?m.IKKE_VURDERT:m.OPPFYLT:m.IKKE_VURDERT},w=(a,t,r)=>{const[e,p]=d.useState(),n=d.useContext(V),{aksjonspunkt:o,vilkår:l}=n.behandling;d.useEffect(()=>{e&&p(void 0)},[n.behandling.versjon]);const s=d.useMemo(()=>o&&a?o.filter(i=>a.includes(i.definisjon)):[],[o,a]),k=d.useMemo(()=>l&&t?l.filter(i=>t.includes(i.vilkarType)):[],[l,t]),c=C(n.behandling,s,k,n.rettigheter,n.hasFetchError),u=d.useMemo(()=>N(n.behandling,s),[n.behandling.versjon,s]),P=s.some(i=>i.status===q.OPPRETTET&&i.kanLoses),g=d.useMemo(()=>H(k,s),[k,s]),f=!s.some(i=>i.kanLoses)||m.OPPFYLT===g,v=d.useCallback(()=>()=>{n.oppdaterProsessStegOgFaktaPanelIUrl(Y,x)},[]),y=d.useMemo(()=>G(r||v,n.fagsak,n.behandling,s,n.lagreAksjonspunkter,n.lagreOverstyrteAksjonspunkter),[n.behandling.versjon,s]);return{behandling:n.behandling,isAksjonspunktOpen:P,aksjonspunkter:s,vilkar:k,alleKodeverk:n.alleKodeverk,alleMerknaderFraBeslutter:u,isReadOnly:c,readOnlySubmitButton:f,submitCallback:y,status:g,formData:e,setFormData:p}},J="default",W=(a,t,r,e,p,n,o,l)=>{const[s,k]=d.useState(!1);d.useEffect(()=>{a({id:t})},[]);const c=e&&(l===t||o&&l===J),u=I(e);return d.useEffect(()=>{e?a({id:t,tekst:r,erAktiv:c,harApentAksjonspunkt:p,status:n}):!e&&u&&a({id:t}),k(c)},[e,u,c,p,n]),e&&s},j=({valgtProsessSteg:a,behandling:t,registrerProsessPanel:r,panelEndepunkter:e=[],aksjonspunktKoder:p,vilkarKoder:n,skalPanelVisesIMeny:o,renderPanel:l,prosessPanelKode:s,prosessPanelMenyTekst:k,lagringSideEffekter:c,hentOverstyrtStatus:u,erOverstyrt:P=!1,hentSkalMarkeresSomAktiv:g})=>{const f=w(p,n,c),v=u?u(f):f.status,y=g&&g(f)&&!t.behandlingHenlagt,i=P||f.isAksjonspunktOpen,E=W(r,s,k,o(f),i,v,y||i,a),h=e.map(S=>S instanceof R?{key:S}:S),A=!E||h.length===0||v===K.IKKE_VURDERT&&!i,{data:T,state:b}=M.useMultipleRestApi(h,{updateTriggers:[E,t.versjon,v,i],suspendRequest:A,isCachingOn:!0});return O.jsx(B,{erPanelValgt:E,erAksjonspunktOpent:f.isAksjonspunktOpen,status:v,dataState:h.length>0?b:D.SUCCESS,children:l({...T,...f})})};try{j.displayName="ProsessDefaultInitPanel",j.__docgenInfo={description:"",displayName:"ProsessDefaultInitPanel",props:{panelEndepunkter:{defaultValue:{value:"[]"},description:"",name:"panelEndepunkter",required:!1,type:{name:"RestKey<any, any>[] | { key: RestKey<any, any>; params?: any; }[]"}},aksjonspunktKoder:{defaultValue:null,description:"",name:"aksjonspunktKoder",required:!1,type:{name:"string[]"}},vilkarKoder:{defaultValue:null,description:"",name:"vilkarKoder",required:!1,type:{name:"string[]"}},skalPanelVisesIMeny:{defaultValue:null,description:"",name:"skalPanelVisesIMeny",required:!0,type:{name:"(data: StandardProsessPanelProps) => boolean"}},hentOverstyrtStatus:{defaultValue:null,description:"",name:"hentOverstyrtStatus",required:!1,type:{name:"((standardData: StandardProsessPanelProps) => string)"}},renderPanel:{defaultValue:null,description:"",name:"renderPanel",required:!0,type:{name:"(data: PANEL_DATA & StandardProsessPanelProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},prosessPanelKode:{defaultValue:null,description:"",name:"prosessPanelKode",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"inngangsvilkar"'},{value:'"behandle_innsyn"'},{value:'"beregning"'},{value:'"beregningsgrunnlag"'},{value:'"klage_nav_familie_og_pensjon"'},{value:'"klage_nav_klageinstans"'},{value:'"formkrav_klage_nav_klageinstans"'},{value:'"formkrav_klage_nav_familie_og_pensjon"'},{value:'"fortsattmedlemskap"'},{value:'"opplysningsplikt"'},{value:'"soeknadsfrist"'},{value:'"tilbakekreving"'},{value:'"foreldelse"'},{value:'"tilkjent_ytelse"'},{value:'"varsel"'},{value:'"vedtak"'},{value:'"uttak"'},{value:'"simulering"'},{value:'"resultat"'},{value:'"ankebehandling"'},{value:'"ankemerknader"'},{value:'"ankeresultat"'}]}},prosessPanelMenyTekst:{defaultValue:null,description:"",name:"prosessPanelMenyTekst",required:!0,type:{name:"string"}},lagringSideEffekter:{defaultValue:null,description:"",name:"lagringSideEffekter",required:!1,type:{name:"((aksjonspunktModeller: any) => () => void)"}},erOverstyrt:{defaultValue:{value:"false"},description:"",name:"erOverstyrt",required:!1,type:{name:"boolean"}},hentSkalMarkeresSomAktiv:{defaultValue:null,description:"",name:"hentSkalMarkeresSomAktiv",required:!1,type:{name:"((standardData: StandardProsessPanelProps) => boolean)"}},behandling:{defaultValue:null,description:"",name:"behandling",required:!0,type:{name:"Behandling"}},valgtProsessSteg:{defaultValue:null,description:"",name:"valgtProsessSteg",required:!1,type:{name:"string"}},registrerProsessPanel:{defaultValue:null,description:"",name:"registrerProsessPanel",required:!0,type:{name:"(data: ProsessPanelMenyData) => void"}}}}}catch{}export{j as P,W as a,C as e,N as g,w as u};
//# sourceMappingURL=ProsessDefaultInitPanel-98c82a5d.js.map
