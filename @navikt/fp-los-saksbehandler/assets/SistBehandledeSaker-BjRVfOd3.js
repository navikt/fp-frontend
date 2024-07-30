import{j as a}from"./dayjs.min-DKYhEbg2.js";import{r as d,R as f}from"./index-BBkUAzwr.js";import{c as k,f as x,d as i,j as l,i as o}from"./nb_NO-DY6WQH50.js";import{c as S,a as j}from"./fplosSaksbehandlerRestApi-CWRPAkFP.js";var v=function(n,r){var s={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(s[e[t]]=n[e[t]]);return s};const m=d.forwardRef((n,r)=>{var{as:s="a",className:e,underline:t=!0,variant:u="action",inlineText:p=!1}=n,g=v(n,["as","className","underline","variant","inlineText"]);return f.createElement(s,Object.assign({},g,{ref:r,className:k("navds-link",e,`navds-link--${u}`,{"navds-link--remove-underline":!t,"navds-link--inline-text":p})}))}),c=(n,r)=>()=>n(r),y=[],h=({åpneFagsak:n})=>{const{data:r=y}=S.useRestApi(j.BEHANDLEDE_OPPGAVER),s=d.useCallback(e=>{n(e.saksnummer.toString(),e.behandlingId)},[n]);return a.jsxs(a.Fragment,{children:[a.jsx(x,{size:"small",children:a.jsx(i,{id:"SistBehandledeSaker.SistBehandledeSaker"})}),a.jsx(l,{eightPx:!0}),r.length===0&&a.jsx(o,{size:"small",children:a.jsx(i,{id:"SistBehandledeSaker.IngenBehandlinger"})}),r.map((e,t)=>a.jsxs(d.Fragment,{children:[a.jsx(o,{size:"small",children:e.navn?a.jsx(m,{href:"#",onClick:c(s,e),children:`${e.navn} ${e.personnummer}`}):a.jsx(m,{href:"#",onClick:c(s,e),children:a.jsx(i,{id:"SistBehandledeSaker.Behandling",values:{index:t+1}})})}),a.jsx(l,{eightPx:!0})]},e.id))]})},P=h;h.__docgenInfo={description:`SistBehandledeSaker

Denne komponenten viser de tre siste fagsakene en nav-ansatt har behandlet.`,methods:[],displayName:"SistBehandledeSaker",props:{åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};export{P as S};
