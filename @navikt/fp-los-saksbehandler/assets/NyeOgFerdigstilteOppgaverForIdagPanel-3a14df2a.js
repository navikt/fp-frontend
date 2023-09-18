import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as o}from"./index-1b03fe98.js";import{a as h,F,e as _,L as b,d as N,N as v}from"./nb_NO-b2e865e9.js";import{Y as i,I as x}from"./index.es-a3c6219c.js";import{u as G}from"./useLosKodeverk-af588712.js";import{l as E}from"./index.es-84287325.js";import{P as R}from"./Panel-d2656cdd.js";import{H as j}from"./Heading-f91b5548.js";const l=[i.TILBAKEKREVING_REVURDERING,i.TILBAKEKREVING,i.DOKUMENTINNSYN,i.KLAGE,i.REVURDERING,i.FORSTEGANGSSOKNAD],p=({height:t,nyeOgFerdigstilteOppgaver:r,behandlingTyper:n})=>{const s=h(),O=o.useMemo(()=>l.map(g=>{if(g===i.FORSTEGANGSSOKNAD)return s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Førstegangsbehandling"});const a=n.find(d=>d.kode===g);return a?a.navn:""}),[n]),c=s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Ferdigstilte"}),u=s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Nye"}),f=o.useMemo(()=>l.map(g=>{const a=r.find(d=>d.behandlingType===g);return a?a.antallFerdigstilte:0}),[r]),I=o.useMemo(()=>l.map(g=>{const a=r.find(d=>d.behandlingType===g);return a?a.antallNye:0}),[r]);return e.jsx(R,{children:e.jsx(E,{height:t,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[c,u]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:O},series:[{name:c,type:"bar",data:f},{name:u,type:"bar",data:I}],color:["#38a161","#337c9b"]}})})};try{p.displayName="NyeOgFerdigstilteOppgaverForIdagGraf",p.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagGraf",displayName:"NyeOgFerdigstilteOppgaverForIdagGraf",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},behandlingTyper:{defaultValue:null,description:"",name:"behandlingTyper",required:!0,type:{name:"Readonly<{ kode: string; navn: string; kodeverk: string; }>[]"}},nyeOgFerdigstilteOppgaver:{defaultValue:null,description:"",name:"nyeOgFerdigstilteOppgaver",required:!0,type:{name:"Readonly<{ behandlingType: string; antallNye: number; antallFerdigstilte: number; dato: string; }>[]"}}}}}catch{}const y=(t=[])=>{const r=N();return t.filter(n=>r.isSame(N(n.dato,v),"day"))},m=({height:t,nyeOgFerdigstilteOppgaver:r})=>{const n=G(x.BEHANDLING_TYPE),s=o.useMemo(()=>y(r),[r]);return e.jsxs(e.Fragment,{children:[e.jsx(j,{size:"small",children:e.jsx(F,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.NyeOgFerdigstilte"})}),e.jsx(_,{eightPx:!0}),e.jsx(b,{size:"small",children:e.jsx(F,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.IDag"})}),e.jsx(p,{height:t,nyeOgFerdigstilteOppgaver:s,behandlingTyper:n})]})},S=m;try{y.displayName="getNyeOgFerdigstilteForIDag",y.__docgenInfo={description:"",displayName:"getNyeOgFerdigstilteForIDag",props:{}}}catch{}try{m.displayName="NyeOgFerdigstilteOppgaverForIdagPanel",m.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagPanel.",displayName:"NyeOgFerdigstilteOppgaverForIdagPanel",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},nyeOgFerdigstilteOppgaver:{defaultValue:null,description:"",name:"nyeOgFerdigstilteOppgaver",required:!1,type:{name:"Readonly<{ behandlingType: string; antallNye: number; antallFerdigstilte: number; dato: string; }>[]"}}}}}catch{}export{S as N};
//# sourceMappingURL=NyeOgFerdigstilteOppgaverForIdagPanel-3a14df2a.js.map
