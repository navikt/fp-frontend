import{r as i,R as s}from"./index-DVXBtNgz.js";import{d as t,l as p,L as g,M as u,a as f}from"./nb_NO-CHG6adMY.js";import{i as y}from"./isSameOrBefore-hONzKWgy.js";import{i as c}from"./isSameOrAfter-CXImAz9r.js";import{R as S}from"./FlyttReservasjonModal-BbGeKIhX.js";import{P as O}from"./Panel-ClCDxyoK.js";t.extend(y);t.extend(c);const v=r=>r.map(a=>({x:t(a.forsteStonadsdag).startOf("day").toDate().getTime(),y:a.antall})),x=r=>{const a=[],o=r.map(e=>t(e.x)).reduce((e,n)=>e.isSameOrBefore(n)?e:n,t().startOf("day")).toDate(),d=r.map(e=>t(e.x)).reduce((e,n)=>e.isSameOrAfter(n)?e:n,t().startOf("day")).toDate();for(let e=t(o);e.isSameOrBefore(d);e=e.add(1,"days")){const n=r.find(l=>t(l.x).isSame(e));a.push([e.toDate().getTime(),n?n.y:0])}return a},m=({height:r,oppgaverPerForsteStonadsdag:a})=>{const o=i.useMemo(()=>v(a),[a]),d=i.useMemo(()=>x(o),[o]);return s.createElement(O,null,s.createElement(S,{height:r,option:{tooltip:{trigger:"axis",axisPointer:{snap:!0,label:{formatter:e=>t(e.value).format(p)}}},toolbox:{feature:{saveAsImage:{title:"Lagre ",name:"Antall_førstegangsbehandlinger_fordelt_på_første_stønadsdag"}}},xAxis:{type:"time",axisLabel:{formatter:"{dd}.{MM}.{yyyy}"}},yAxis:{type:"value"},series:[{data:d,type:"line",areaStyle:{}}],color:["#337c9b"]}}))};m.__docgenInfo={description:"OppgaverPerForsteStonadsdagGraf.",methods:[],displayName:"OppgaverPerForsteStonadsdagGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},oppgaverPerForsteStonadsdag:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  forsteStonadsdag: string;
  antall: number;
}`,signature:{properties:[{key:"forsteStonadsdag",value:{name:"string",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  forsteStonadsdag: string;
  antall: number;
}>`}],raw:"OppgaverForForsteStonadsdag[]"},description:""}}};const P=({height:r,oppgaverPerForsteStonadsdag:a})=>s.createElement(s.Fragment,null,s.createElement(g,{size:"small"},s.createElement(u,{id:"OppgaverPerForsteStonadsdagPanel.FordeltPaForsteStonadsdag"})),s.createElement(f,{sixteenPx:!0}),s.createElement(m,{height:r,oppgaverPerForsteStonadsdag:a}));P.__docgenInfo={description:"OppgaverPerForsteStonadsdagPanel.",methods:[],displayName:"OppgaverPerForsteStonadsdagPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},oppgaverPerForsteStonadsdag:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  forsteStonadsdag: string;
  antall: number;
}`,signature:{properties:[{key:"forsteStonadsdag",value:{name:"string",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  forsteStonadsdag: string;
  antall: number;
}>`}],raw:"OppgaverForForsteStonadsdag[]"},description:""}}};export{P as O};
