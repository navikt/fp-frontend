import{j as l}from"./jsx-runtime-9c4ae004.js";import{r as g}from"./index-1b03fe98.js";import{e as j,d,u as I,O as N,L as D,F as G,b as x,U as K,Y as L,z as U,R}from"./nb_NO-91e99ecf.js";import{I as F,Y as S}from"./index.es-657e045f.js";import{l as $}from"./index.es-30e2a5f8.js";import{P as B}from"./Panel-b15c2a27.js";import{S as q}from"./StoreValuesInLocalStorage-6ed602ef.js";import{u as w}from"./useLosKodeverk-3c749e2b.js";var P=(a=>(a.PA_VENT="PÅ_VENT",a.IKKE_PA_VENT="IKKE_PÅ_VENT",a))(P||{});const E="UKJENT_DATO",A=(a,t)=>t.formatMessage({id:`OppgaverSomErApneEllerPaVentGraf.${a}`}),Y=a=>{let t=d().subtract(9,"M"),e=d().add(1,"M");return a.filter(r=>!!r.førsteUttakMåned).forEach(r=>{const n=d(r.førsteUttakMåned);n.isBefore(t)&&(t=n),n.isAfter(e)&&(e=n)}),[d(t.subtract(1,"months").startOf("month")),d(e.add(1,"months").startOf("month"))]},b=a=>{const t=a.reduce((e,r)=>{const{førsteUttakMåned:n,antall:i}=r,o=n||E;return{...e,[o]:e[o]?e[o]+i:i}},{});return Object.keys(t).map(e=>({x:e,y:t[e]}))},_=(a,t)=>{const e=t.filter(r=>r.x!==E).find(r=>d(r.x).isSame(a));return[e?d(e.x).toDate():a.toDate(),e?e.y:0]},z=(a,t,e,r)=>{var u,m;const n=[],i=[];let o=d(e);do n.push(_(o,a)),i.push(_(o,t)),o=d(o.add(1,"month"));while(o.isBefore(r));return n.push([r.toDate(),((u=a.find(p=>p.x===E))==null?void 0:u.y)||0]),i.push([r.toDate(),((m=t.find(p=>p.x===E))==null?void 0:m.y)||0]),{koordinaterPaVent:n,koordinaterIkkePaVent:i}},h=({height:a,oppgaverApneEllerPaVent:t})=>{const e=j(),r=e.formatMessage({id:"OppgaverSomErApneEllerPaVentGraf.PaVent"}),n=e.formatMessage({id:"OppgaverSomErApneEllerPaVentGraf.IkkePaVent"}),i=e.formatMessage({id:"OppgaverSomErApneEllerPaVentGraf.Ukjent"}),o=e.formatMessage({id:"OppgaverSomErApneEllerPaVentGraf.Dato"}),u=g.useMemo(()=>b(t.filter(c=>c.behandlingVenteStatus===P.PA_VENT)),[t]),m=g.useMemo(()=>b(t.filter(c=>c.behandlingVenteStatus===P.IKKE_PA_VENT)),[t]),[p,s]=g.useMemo(()=>Y(t),[t]),{koordinaterPaVent:V,koordinaterIkkePaVent:v}=g.useMemo(()=>z(u,m,p,s),[u,m,p,s]);return l.jsx(B,{children:l.jsx($,{height:a,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{formatter:c=>{const f=d(c.value);return f.isSame(s)?`${i} ${o}`:`${A(f.month(),e)} - ${f.year()}`}}}},toolbox:{feature:{saveAsImage:{title:"Lagre ",name:"Status_åpne_behandlinger"}}},legend:{data:[r,n]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisLabel:{formatter:c=>{const f=d(c),k=f.isSame(s),M=k?i:A(f.month(),e),T=k?o:f.year();return`${M}
${T}`}}}],yAxis:[{type:"value",name:e.formatMessage({id:"OppgaverSomErApneEllerPaVentGraf.AntallGraf"})}],series:[{name:r,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:V},{name:n,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:v}],color:["#85d5f0","#38a161"]}})})};try{h.displayName="OppgaverSomErApneEllerPaVentGraf",h.__docgenInfo={description:"OppgaverSomErApneEllerPaVentGraf.",displayName:"OppgaverSomErApneEllerPaVentGraf",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},oppgaverApneEllerPaVent:{defaultValue:null,description:"",name:"oppgaverApneEllerPaVent",required:!0,type:{name:"Readonly<{ antall: number; behandlingType: string; behandlingVenteStatus: string; førsteUttakMåned?: string | undefined; }>[]"}}}}}catch{}const O="oppgaverSomErApneEllerPaVent",y=({height:a,oppgaverApneEllerPaVent:t,getValueFromLocalStorage:e})=>{const r=w(F.BEHANDLING_TYPE),n=e(O),i=n?JSON.parse(n):void 0,o=g.useMemo(()=>r.filter(s=>s.kode!==S.TILBAKEKREVING&&s.kode!==S.TILBAKEKREVING_REVURDERING),[]),u=g.useMemo(()=>Object.values(o).reduce((s,V)=>({...s,[V.kode]:!0}),{}),[]),m=I({defaultValues:i||u}),p=m.watch();return l.jsxs(N,{formMethods:m,children:[l.jsx(q,{stateKey:O,values:p}),l.jsx(D,{size:"small",children:l.jsx(G,{id:"OppgaverSomErApneEllerPaVentPanel.Apne"})}),l.jsx(x,{sixteenPx:!0}),l.jsx(K,{children:l.jsx(L,{children:o.map(s=>l.jsx(U,{children:l.jsx(R,{name:s.kode,label:s.navn})},s.kode))})}),l.jsx(x,{sixteenPx:!0}),l.jsx(h,{height:a,oppgaverApneEllerPaVent:t.filter(s=>p[s.behandlingType])})]})},te=y;try{y.displayName="OppgaverSomErApneEllerPaVentPanel",y.__docgenInfo={description:"OppgaverSomErApneEllerPaVentPanel.",displayName:"OppgaverSomErApneEllerPaVentPanel",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},oppgaverApneEllerPaVent:{defaultValue:null,description:"",name:"oppgaverApneEllerPaVent",required:!0,type:{name:"Readonly<{ antall: number; behandlingType: string; behandlingVenteStatus: string; førsteUttakMåned?: string | undefined; }>[]"}},getValueFromLocalStorage:{defaultValue:null,description:"",name:"getValueFromLocalStorage",required:!0,type:{name:"(key: string) => string | undefined"}}}}}catch{}export{P as B,te as O};
//# sourceMappingURL=OppgaverSomErApneEllerPaVentPanel-622a4b1d.js.map
