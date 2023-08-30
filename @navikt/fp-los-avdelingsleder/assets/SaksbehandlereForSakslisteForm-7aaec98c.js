import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as h,R as p}from"./index-1b03fe98.js";import{u as y,F,L as I,a as g,G as i,o as v,s as _,D as b,C as S}from"./nb_NO-7fc4d3fe.js";import{b as R,R as E}from"./fplosRestApi-beda4f04.js";import{P as L}from"./Panel-44dfe287.js";const A="_panel_1j8jg_1",P="_colLeft_1j8jg_6",f={panel:A,colLeft:P},V=n=>n&&n instanceof Array?[...n].sort((r,a)=>r.navn.localeCompare(a.navn)):n,d=({avdelingensSaksbehandlere:n=[],valgtSaksliste:r,valgtAvdelingEnhet:a,hentAvdelingensSakslister:o})=>{const t=h.useMemo(()=>V(n),[n]),c=Math.ceil(t.length/2),x=t.slice(0,c),j=t.slice(c),{startRequest:u}=R.useRestApiRunner(E.LAGRE_SAKSLISTE_SAKSBEHANDLER),m=r.saksbehandlerIdenter.reduce((s,l)=>({...s,[l]:!0}),{}),k=y({defaultValues:m});return h.useEffect(()=>{k.reset(m)},[r.sakslisteId]),e.jsx(F,{formMethods:k,children:e.jsxs(L,{className:f.panel,children:[e.jsx(I,{size:"small",children:e.jsx(g,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})}),e.jsx(i,{sixteenPx:!0}),t.length===0&&e.jsx(g,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"}),t.length>0&&e.jsx(v,{children:e.jsxs(_,{children:[e.jsx(b,{className:f.colLeft,children:x.map(s=>e.jsxs(p.Fragment,{children:[e.jsx(S,{name:s.brukerIdent,label:s.navn,onChange:l=>u({sakslisteId:r.sakslisteId,brukerIdent:s.brukerIdent,checked:l,avdelingEnhet:a}).then(()=>o({avdelingEnhet:a}))}),e.jsx(i,{fourPx:!0})]},s.brukerIdent))}),e.jsx(b,{children:j.map(s=>e.jsxs(p.Fragment,{children:[e.jsx(S,{name:s.brukerIdent,label:s.navn,onChange:l=>u({sakslisteId:r.sakslisteId,brukerIdent:s.brukerIdent,checked:l,avdelingEnhet:a}).then(()=>o({avdelingEnhet:a}))}),e.jsx(i,{fourPx:!0})]},s.brukerIdent))})]})})]})})},M=d;try{d.displayName="SaksbehandlereForSakslisteForm",d.__docgenInfo={description:"SaksbehandlereForSakslisteForm",displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{defaultValue:null,description:"",name:"valgtSaksliste",required:!0,type:{name:"Readonly<{ sakslisteId: number; navn?: string | undefined; behandlingTyper?: string[] | undefined; fagsakYtelseTyper?: string[] | undefined; sistEndret: string; sortering?: { sorteringType: string; ... 4 more ...; erDynamiskPeriode: boolean; } | undefined; andreKriterier?: Readonly<...>[] | undefined; saksbehandlerI..."}},avdelingensSaksbehandlere:{defaultValue:{value:"[]"},description:"",name:"avdelingensSaksbehandlere",required:!1,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},hentAvdelingensSakslister:{defaultValue:null,description:"",name:"hentAvdelingensSakslister",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}export{M as S};
//# sourceMappingURL=SaksbehandlereForSakslisteForm-7aaec98c.js.map
