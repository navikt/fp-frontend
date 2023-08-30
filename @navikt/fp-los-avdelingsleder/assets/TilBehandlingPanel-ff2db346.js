import{j as o}from"./jsx-runtime-9c4ae004.js";import{d as i,h as P,N as x,f as K,u as O,F as _,L as j,a as N,G as k,o as F,s as U,D,O as Y,i as M}from"./nb_NO-7fc4d3fe.js";import{i as q}from"./isSameOrAfter-48a89950.js";import{i as w}from"./isSameOrBefore-ea99da6c.js";import{Y as l,I as G,z as f}from"./index.es-657e045f.js";import{S as z}from"./StoreValuesInLocalStorage-6ed602ef.js";import{u as b}from"./useLosKodeverk-3c749e2b.js";import{r as R}from"./index-1b03fe98.js";import{l as H}from"./index.es-0ce23978.js";import{P as J}from"./Panel-44dfe287.js";const A=[l.TILBAKEKREVING_REVURDERING,l.TILBAKEKREVING,l.DOKUMENTINNSYN,l.KLAGE,l.REVURDERING,l.FORSTEGANGSSOKNAD],$={[l.TILBAKEKREVING_REVURDERING]:"#ef5d28",[l.TILBAKEKREVING]:"#ff842f",[l.DOKUMENTINNSYN]:"#ffd23b",[l.KLAGE]:"#826ba1",[l.REVURDERING]:"#3385d1",[l.FORSTEGANGSSOKNAD]:"#85d5f0"},B=(n,e)=>{const t=A.findIndex(r=>r===n),a=A.findIndex(r=>r===e);return t===a?0:t>a?-1:1},v=(n,e)=>{const t=n.find(a=>a.kode===e);return t?t.navn:""},C=n=>n.reduce((e,t)=>{const a={x:i(t.opprettetDato).startOf("day").toDate(),y:t.antall},r=e[t.behandlingType];return{...e,[t.behandlingType]:r?r.concat(a):[a]}},{}),Q=(n,e,t)=>Object.keys(n).reduce((a,r)=>{const c=n[r],g=[];for(let d=i(e);d.isSameOrBefore(t);d=d.add(1,"days")){const p=c.find(m=>i(m.x).startOf("day").isSame(d.startOf("day")));g.push(p?[i(p.x).format(x),p.y]:[d.format(x),0])}return{...a,[r]:g}},{}),h=({height:n,oppgaverPerDato:e,isToUkerValgt:t,behandlingTyper:a})=>{const r=i().subtract(t?2:4,"w").add(1,"d"),c=i(),g=R.useMemo(()=>C(e),[e]),d=R.useMemo(()=>Q(g,r,c),[g,r,c]),p=a.map(s=>s.kode).sort(B),u=Object.keys(d).sort(B).slice().reverse(),L=p.map(s=>$[s]);return o.jsx(J,{children:o.jsx(H,{height:n,option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{formatter:s=>s.axisDimension==="y"?parseInt(s.value,10).toString():i(s.value).format(P)}}},toolbox:{feature:{saveAsImage:{title:"Lagre ",name:"Antall_til_behandling"}}},legend:{data:u.map(s=>v(a,s))},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"time",axisLabel:{formatter:"{dd}.{MM}.{yyyy}"}}],yAxis:[{type:"value"}],series:p.map(s=>({name:v(a,s),type:"line",stack:"stackname",areaStyle:{},emphasis:{focus:"series"},data:d[s]})),color:L}})})};try{h.displayName="TilBehandlingGraf",h.__docgenInfo={description:"TilBehandlingGraf",displayName:"TilBehandlingGraf",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},behandlingTyper:{defaultValue:null,description:"",name:"behandlingTyper",required:!0,type:{name:"Readonly<{ kode: string; navn: string; kodeverk: string; }>[]"}},oppgaverPerDato:{defaultValue:null,description:"",name:"oppgaverPerDato",required:!0,type:{name:"OppgaveForDatoGraf[]"}},isToUkerValgt:{defaultValue:null,description:"",name:"isToUkerValgt",required:!0,type:{name:"boolean"}}}}}catch{}i.extend(q);i.extend(w);const E="ALLE",S="2",I=[{kode:S,tekstKode:"TilBehandlingPanel.ToSisteUker"},{kode:"4",tekstKode:"TilBehandlingPanel.FireSisteUker"}],W=(n,e)=>{if(e===I[1].kode)return!0;const t=i().subtract(2,"w");return i(n.opprettetDato).isSameOrAfter(t)},y=(n,e)=>{const t=n.find(a=>a.kode===e);return t?t.navn:""},X=n=>{const e=[];return n.forEach(t=>{const a=e.findIndex(r=>r.behandlingType===t.behandlingType&&r.opprettetDato===t.opprettetDato);a===-1?e.push(t):e[a]={behandlingType:e[a].behandlingType,opprettetDato:e[a].opprettetDato,antall:e[a].antall+t.antall}}),e},V="tilBehandlingForm",Z={ytelseType:E,ukevalg:S},T=({height:n,oppgaverPerDato:e,getValueFromLocalStorage:t})=>{const a=K(),r=b(G.BEHANDLING_TYPE),c=b(G.FAGSAK_YTELSE),g=t(V),d=g?JSON.parse(g):void 0,p=O({defaultValues:d||Z}),m=p.watch();return o.jsxs(_,{formMethods:p,children:[o.jsx(z,{stateKey:V,values:m}),o.jsx(j,{size:"small",children:o.jsx(N,{id:"TilBehandlingPanel.TilBehandling"})}),o.jsx(k,{eightPx:!0}),o.jsx(F,{children:o.jsxs(U,{children:[o.jsx(D,{children:o.jsx(Y,{name:"ukevalg",label:"",selectValues:I.map(u=>o.jsx("option",{value:u.kode,children:a.formatMessage({id:u.tekstKode})},u.kode))})}),o.jsx(D,{children:o.jsx(M,{name:"ytelseType",isHorizontal:!0,radios:[{value:f.FORELDREPENGER,label:y(c,f.FORELDREPENGER)},{value:f.ENGANGSSTONAD,label:y(c,f.ENGANGSSTONAD)},{value:f.SVANGERSKAPSPENGER,label:y(c,f.SVANGERSKAPSPENGER)},{value:E,label:o.jsx(N,{id:"TilBehandlingPanel.Alle"})}]})})]})}),o.jsx(k,{sixteenPx:!0}),o.jsx(h,{height:n,isToUkerValgt:m.ukevalg===S,behandlingTyper:r,oppgaverPerDato:e?X(e.filter(u=>m.ytelseType===E?!0:m.ytelseType===u.fagsakYtelseType).filter(u=>W(u,m.ukevalg))):[]})]})},pe=T;try{T.displayName="TilBehandlingPanel",T.__docgenInfo={description:"TilBehandlingPanel.",displayName:"TilBehandlingPanel",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},oppgaverPerDato:{defaultValue:null,description:"",name:"oppgaverPerDato",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; opprettetDato: string; antall: number; }>[]"}},getValueFromLocalStorage:{defaultValue:null,description:"",name:"getValueFromLocalStorage",required:!0,type:{name:"(key: string) => string | undefined"}}}}}catch{}export{pe as T};
//# sourceMappingURL=TilBehandlingPanel-ff2db346.js.map
