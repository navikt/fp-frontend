import{j as s}from"./jsx-runtime-9c4ae004.js";import{d as t,h as u,L as f,F as y,b as _}from"./nb_NO-91e99ecf.js";import{r as g}from"./index-1b03fe98.js";import{i as x}from"./isSameOrBefore-ea99da6c.js";import{i as S}from"./isSameOrAfter-48a89950.js";import{l as P}from"./index.es-30e2a5f8.js";import{P as h}from"./Panel-b15c2a27.js";t.extend(x);t.extend(S);const p=a=>a.map(r=>({x:t(r.forsteStonadsdag).startOf("day").toDate().getTime(),y:r.antall})),i=a=>{const r=[],n=a.map(e=>t(e.x)).reduce((e,o)=>e.isSameOrBefore(o)?e:o,t().startOf("day")).toDate(),d=a.map(e=>t(e.x)).reduce((e,o)=>e.isSameOrAfter(o)?e:o,t().startOf("day")).toDate();for(let e=t(n);e.isSameOrBefore(d);e=e.add(1,"days")){const o=a.find(c=>t(c.x).isSame(e));r.push([e.toDate().getTime(),o?o.y:0])}return r},l=({height:a,oppgaverPerForsteStonadsdag:r})=>{const n=g.useMemo(()=>p(r),[r]),d=g.useMemo(()=>i(n),[n]);return s.jsx(h,{children:s.jsx(P,{height:a,option:{tooltip:{trigger:"axis",axisPointer:{snap:!0,label:{formatter:e=>t(e.value).format(u)}}},toolbox:{feature:{saveAsImage:{title:"Lagre ",name:"Antall_førstegangsbehandlinger_fordelt_på_første_stønadsdag"}}},xAxis:{type:"time",axisLabel:{formatter:"{dd}.{MM}.{yyyy}"}},yAxis:{type:"value"},series:[{data:d,type:"line",areaStyle:{}}],color:["#337c9b"]}})})};try{p.displayName="lagKoordinater",p.__docgenInfo={description:"",displayName:"lagKoordinater",props:{}}}catch{}try{i.displayName="lagDatastruktur",i.__docgenInfo={description:"",displayName:"lagDatastruktur",props:{}}}catch{}try{l.displayName="OppgaverPerForsteStonadsdagGraf",l.__docgenInfo={description:"OppgaverPerForsteStonadsdagGraf.",displayName:"OppgaverPerForsteStonadsdagGraf",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},oppgaverPerForsteStonadsdag:{defaultValue:null,description:"",name:"oppgaverPerForsteStonadsdag",required:!0,type:{name:"Readonly<{ forsteStonadsdag: string; antall: number; }>[]"}}}}}catch{}const m=({height:a,oppgaverPerForsteStonadsdag:r})=>s.jsxs(s.Fragment,{children:[s.jsx(f,{size:"small",children:s.jsx(y,{id:"OppgaverPerForsteStonadsdagPanel.FordeltPaForsteStonadsdag"})}),s.jsx(_,{sixteenPx:!0}),s.jsx(l,{height:a,oppgaverPerForsteStonadsdag:r})]});try{m.displayName="OppgaverPerForsteStonadsdagPanel",m.__docgenInfo={description:"OppgaverPerForsteStonadsdagPanel.",displayName:"OppgaverPerForsteStonadsdagPanel",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},oppgaverPerForsteStonadsdag:{defaultValue:null,description:"",name:"oppgaverPerForsteStonadsdag",required:!0,type:{name:"Readonly<{ forsteStonadsdag: string; antall: number; }>[]"}}}}}catch{}export{m as O};
//# sourceMappingURL=OppgaverPerForsteStonadsdagPanel-5f3a0a77.js.map
