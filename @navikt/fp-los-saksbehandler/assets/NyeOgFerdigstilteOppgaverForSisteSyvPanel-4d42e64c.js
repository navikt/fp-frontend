import{j as l}from"./jsx-runtime-9c4ae004.js";import{r as p}from"./index-1b03fe98.js";import{d as o,a as F,l as u,e as O,L as f,F as v,N as S}from"./nb_NO-f3f50ba4.js";import{l as N}from"./index.es-9acae570.js";import{P as _}from"./Panel-c899ecc9.js";const y=e=>{const t=[];if(e.length>0){const i=o().startOf("day"),d=o().subtract(7,"days").startOf("day");for(let r=d;r.isBefore(i);r=r.add(1,"days")){const s=e.filter(n=>o(n.dato).startOf("day").isSame(r));s.length===0?t.push({antallNye:0,antallFerdigstilte:0,dato:r.toDate()}):t.push({antallNye:s.reduce((n,g)=>n+g.antallNye,0),antallFerdigstilte:s.reduce((n,g)=>n+g.antallFerdigstilte,0),dato:r.toDate()})}}return t},h=({height:e,nyeOgFerdigstilteOppgaver:t})=>{const i=F(),d=i.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Ferdigstilte"}),r=i.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Nye"}),s=p.useMemo(()=>y(t),[t]),n=p.useMemo(()=>s.map(a=>[a.dato.getTime(),a.antallFerdigstilte]),[s]),g=p.useMemo(()=>s.map(a=>[a.dato.getTime(),a.antallNye]),[s]);return l.jsx(_,{children:l.jsx(N,{height:e,option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{formatter:a=>a.axisDimension==="y"?parseInt(a.value,10).toString():o(a.value).format(u)}}},legend:{data:[d,r]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"time",axisLabel:{formatter:"{dd}.{MM}.{yyyy}"}}],yAxis:[{type:"value"}],series:[{name:d,type:"line",areaStyle:{},emphasis:{focus:"series"},data:n},{name:r,type:"line",areaStyle:{},emphasis:{focus:"series"},data:g}],color:["#38a161","#337c9b"]}})})};try{y.displayName="slaSammenBehandlingstyperOgFyllInnTomme",y.__docgenInfo={description:"",displayName:"slaSammenBehandlingstyperOgFyllInnTomme",props:{}}}catch{}try{NyeOgFerdigstilteOppgaverForSisteSyvGraf.displayName="NyeOgFerdigstilteOppgaverForSisteSyvGraf",NyeOgFerdigstilteOppgaverForSisteSyvGraf.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagGraf",displayName:"NyeOgFerdigstilteOppgaverForSisteSyvGraf",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},nyeOgFerdigstilteOppgaver:{defaultValue:null,description:"",name:"nyeOgFerdigstilteOppgaver",required:!0,type:{name:"Readonly<{ behandlingType: string; antallNye: number; antallFerdigstilte: number; dato: string; }>[]"}}}}}catch{}const m=(e=[])=>{const t=o().startOf("day");return e.filter(i=>t.isAfter(o(i.dato,S)))},c=({height:e,nyeOgFerdigstilteOppgaver:t})=>{const i=p.useMemo(()=>m(t),[t]);return l.jsxs(l.Fragment,{children:[l.jsx(O,{eightPx:!0}),l.jsx(f,{size:"small",children:l.jsx(v,{id:"NyeOgFerdigstilteOppgaverForSisteSyvPanel.SisteSyv"})}),l.jsx(h,{height:e,nyeOgFerdigstilteOppgaver:i})]})},P=c;try{m.displayName="getNyeOgFerdigstilteForSisteSyvDager",m.__docgenInfo={description:"",displayName:"getNyeOgFerdigstilteForSisteSyvDager",props:{}}}catch{}try{c.displayName="NyeOgFerdigstilteOppgaverForSisteSyvPanel",c.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForSisteSyvPanel.",displayName:"NyeOgFerdigstilteOppgaverForSisteSyvPanel",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},nyeOgFerdigstilteOppgaver:{defaultValue:null,description:"",name:"nyeOgFerdigstilteOppgaver",required:!1,type:{name:"Readonly<{ behandlingType: string; antallNye: number; antallFerdigstilte: number; dato: string; }>[]"}}}}}catch{}export{P as N};
//# sourceMappingURL=NyeOgFerdigstilteOppgaverForSisteSyvPanel-4d42e64c.js.map
