import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as l}from"./index-uubelm5h.js";import{d as m}from"./dayjs.min-BsYQKNhR.js";import{d as b,h as O,f as y,y as f,e as h,A as I}from"./nb_NO-DpQ9LvOA.js";import{Y as a,I as k}from"./index.es-BkMxg3KK.js";import{u as T}from"./useLosKodeverk-CWcS4MqK.js";import{R as x}from"./FlyttReservasjonModal-CNQF9meu.js";import{P as R}from"./Panel-TOE6h6Hx.js";const o=[a.TILBAKEKREVING_REVURDERING,a.TILBAKEKREVING,a.DOKUMENTINNSYN,a.KLAGE,a.REVURDERING,a.FORSTEGANGSSOKNAD],N=({height:s,nyeOgFerdigstilteOppgaver:r,behandlingTyper:n})=>{const d=b(),F=l.useMemo(()=>o.map(i=>{if(i===a.FORSTEGANGSSOKNAD)return d.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Førstegangsbehandling"});const t=n.find(g=>g.kode===i);return t?t.navn:""}),[n]),p=d.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Ferdigstilte"}),u=d.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Nye"}),c=l.useMemo(()=>o.map(i=>{const t=r.find(g=>g.behandlingType===i);return t?t.antallFerdigstilte:0}),[r]),v=l.useMemo(()=>o.map(i=>{const t=r.find(g=>g.behandlingType===i);return t?t.antallNye:0}),[r]);return e.jsx(R,{children:e.jsx(x,{height:s,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[p,u]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:F},series:[{name:p,type:"bar",data:c},{name:u,type:"bar",data:v}],color:["#38a161","#337c9b"]}})})};N.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagGraf",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},nyeOgFerdigstilteOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const E=(s=[])=>{const r=m();return s.filter(n=>r.isSame(m(n.dato,I),"day"))},G=({height:s,nyeOgFerdigstilteOppgaver:r})=>{const n=T(k.BEHANDLING_TYPE),d=l.useMemo(()=>E(r),[r]);return e.jsxs(e.Fragment,{children:[e.jsx(O,{size:"small",children:e.jsx(y,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.NyeOgFerdigstilte"})}),e.jsx(f,{eightPx:!0}),e.jsx(h,{size:"small",children:e.jsx(y,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.IDag"})}),e.jsx(N,{height:s,nyeOgFerdigstilteOppgaver:d,behandlingTyper:n})]})};G.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagPanel.",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};export{G as N};
