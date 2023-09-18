import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as o}from"./index-1b03fe98.js";import{L as p,F as h,b as c,a as g,K as k,g as v,W as r}from"./nb_NO-91e99ecf.js";import{S as x}from"./SletteSaksbehandlerModal-8cf1f195.js";import{b as j,R as f}from"./fplosRestApi-beda4f04.js";import{X as T}from"./Provider-c82db7e7.js";const y="_removeIcon_1k4e9_1",I={removeIcon:y},_=["SaksbehandlereTabell.Navn","SaksbehandlereTabell.Brukerident","SaksbehandlereTabell.Avdeling"],d=({saksbehandlere:s,valgtAvdelingEnhet:l,hentAvdelingensSaksbehandlere:b})=>{const[i,a]=o.useState(),{startRequest:m}=j.useRestApiRunner(f.SLETT_SAKSBEHANDLER),u=o.useCallback(n=>{m({brukerIdent:n.brukerIdent,avdelingEnhet:l}).then(()=>b({avdelingEnhet:l})),a(void 0)},[l]),t=o.useMemo(()=>s.sort((n,S)=>n.navn.localeCompare(S.navn)),[s]);return e.jsxs(e.Fragment,{children:[e.jsx(p,{size:"small",children:e.jsx(h,{id:"SaksbehandlereTabell.Saksbehandlere"})}),t.length===0&&e.jsxs(e.Fragment,{children:[e.jsx(c,{eightPx:!0}),e.jsx(g,{size:"small",children:e.jsx(h,{id:"SaksbehandlereTabell.IngenSaksbehandlere"})}),e.jsx(c,{eightPx:!0})]}),t.length>0&&e.jsx(k,{headerTextCodes:_,noHover:!0,children:t.map(n=>e.jsxs(v,{children:[e.jsx(r,{children:n.navn}),e.jsx(r,{children:n.brukerIdent}),e.jsx(r,{children:n.avdelingsnavn.join(", ")}),e.jsx(r,{children:e.jsx(T,{className:I.removeIcon,onMouseDown:()=>a(n),onKeyDown:()=>a(n)})})]},n.brukerIdent))}),i&&e.jsx(x,{valgtSaksbehandler:i,closeSletteModal:()=>a(void 0),fjernSaksbehandler:u})]})},N=d;try{d.displayName="SaksbehandlereTabell",d.__docgenInfo={description:"SaksbehandlereTabell",displayName:"SaksbehandlereTabell",props:{saksbehandlere:{defaultValue:null,description:"",name:"saksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}export{N as S};
//# sourceMappingURL=SaksbehandlereTabell-54041cb9.js.map
