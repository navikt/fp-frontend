import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DjhIdADd.js";import{D as C,I as F,b as q,M as _}from"./index.es-hzAUfTdG.js";import{a as j}from"./behandlingDataContext-BnLc3C0Q.js";import{k as D}from"./withPanelData-Hr9GZz6f.js";import{E as T,y as I,q as c}from"./index.es-BN9QgVQ9.js";import{S}from"./ExclamationmarkTriangleFill-B0ilA4Q2.js";import{V as A,B as E}from"./BehandlingHenlagtPanel-DjYnMZIR.js";const h=({menyData:a,oppdaterFaktaPanelIUrl:i})=>{const o=D();return r.jsx(T,{heading:o.formatMessage({id:"FaktaMeny.FaktaOm"}),links:a.map(t=>({label:t.tekst??"",active:t.erAktiv,icon:t.harApneAksjonspunkter?r.jsx(S,{color:"var(--a-orange-600)"}):void 0})),onClick:i})};h.__docgenInfo={description:"",methods:[],displayName:"FaktaMeny",props:{menyData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}}],raw:"FaktaPanelMenyData[]"},description:""},oppdaterFaktaPanelIUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const N="_container_610fz_1",R="_content_610fz_6",U="_sideMenu_610fz_14",P={container:N,content:R,sideMenu:U},x=({hentPaneler:a,valgtFaktaSteg:i,valgtProsessSteg:o,setApentFaktaPanel:t,apentFaktaPanelInfo:s})=>{const{oppdaterProsessStegOgFaktaPanelIUrl:d}=u.use(j),[m,k]=u.useState([]),y=u.useCallback(e=>{k(p=>{const l=[...p],g=l.findIndex(f=>f.id===e.id);return g>=0?l.splice(g,1,e):l.push(e),l}),!e.harApneAksjonspunkter&&(s==null?void 0:s.urlCode)===e.id&&t(void 0),e.harApneAksjonspunkter&&(s==null?void 0:s.urlCode)!==e.id&&t({urlCode:e.id,text:e.tekst??""})},[s]),n=u.useMemo(()=>m.filter(e=>!!e.tekst),[m]),v=u.useCallback(e=>{if(n){const p=n[e];d(o,p.id)}},[n,o,d]);return a?r.jsx("div",{className:P.container,children:r.jsx(C,{fullHeight:!0,children:r.jsxs(F,{children:[r.jsx(q,{className:P.sideMenu,children:n&&n.length>0&&r.jsx(h,{menyData:n,oppdaterFaktaPanelIUrl:v})}),r.jsx(q,{className:P.content,children:a({valgtFaktaSteg:i,registrerFaktaPanel:y})})]})})}):null};x.__docgenInfo={description:"",methods:[],displayName:"FaktaContainer",props:{hentPaneler:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: FaktaPanelInitProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  valgtFaktaSteg?: string;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
}`,signature:{properties:[{key:"valgtFaktaSteg",value:{name:"string",required:!1}},{key:"registrerFaktaPanel",value:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}},required:!0}}]}},name:"props"}],return:{name:"ReactElement"}}},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},setApentFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(panelData?: { urlCode: string; text: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},name:"panelData"}],return:{name:"void"}}},description:""},apentFaktaPanelInfo:{required:!1,tsType:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},description:""}}};const B="_stepArrowContainer_1c5tg_1",O={stepArrowContainer:B},V=(a,i)=>i?c.warning:a===A.OPPFYLT?c.success:a===A.IKKE_OPPFYLT?c.danger:c.default,w=({menyData:a,oppdaterProsessPanelIUrl:i})=>{const o=u.useMemo(()=>a.map(t=>{const s=V(t.status,t.harApentAksjonspunkt);return{label:t.tekst??"",isActive:t.erAktiv,type:s}}),[a]);return r.jsx(I,{steps:o,onClick:i,stepArrowContainerStyle:O.stepArrowContainer})};w.__docgenInfo={description:"",methods:[],displayName:"ProsessMeny",props:{menyData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}}],raw:"ProsessPanelMenyData[]"},description:""},oppdaterProsessPanelIUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const z="_container_blsp8_1",H="_meny_blsp8_5",b={container:z,meny:H},M=({hentPaneler:a,valgtProsessSteg:i,valgtFaktaSteg:o,apentFaktaPanelInfo:t})=>{const[s,d]=u.useState([]),{behandling:m,oppdaterProsessStegOgFaktaPanelIUrl:k}=u.use(j),y=u.useCallback(e=>{d(p=>{const l=[...p],g=l.findIndex(f=>f.id===e.id);return g>=0?l.splice(g,1,e):l.push(e),l})},[]),n=u.useMemo(()=>s.filter(e=>!!e.tekst),[s]),v=u.useCallback(e=>{if(n){const p=n[e],l=p.erAktiv?void 0:p.id;k(l,o)}},[n,o,k]);return a?r.jsxs("div",{className:n&&n.length>0?b.container:void 0,children:[n&&n.length>0&&r.jsx("div",{className:b.meny,children:r.jsx(w,{menyData:n,oppdaterProsessPanelIUrl:v})}),(!n||n.length===0)&&r.jsx(_,{}),a({valgtProsessSteg:i,registrerProsessPanel:y},{apentFaktaPanelInfo:t,allMenyData:n||[]}),m.behandlingHenlagt&&r.jsx(E,{valgtProsessSteg:i,registrerProsessPanel:y})]}):null};M.__docgenInfo={description:"",methods:[],displayName:"ProsessContainer",props:{hentPaneler:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  valgtProsessSteg?: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
}`,signature:{properties:[{key:"valgtProsessSteg",value:{name:"string",required:!1}},{key:"registrerProsessPanel",value:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}},required:!0}}]}},name:"props"},{type:{name:"signature",type:"object",raw:`{
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  allMenyData: ProsessPanelMenyData[];
}`,signature:{properties:[{key:"apentFaktaPanelInfo",value:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]},required:!1}},{key:"allMenyData",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}}],raw:"ProsessPanelMenyData[]",required:!0}}]}},name:"ekstraProps"}],return:{name:"ReactElement"}}},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},apentFaktaPanelInfo:{required:!1,tsType:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},description:""}}};const $=({hentFaktaPaneler:a,hentProsessPaneler:i,valgtProsessSteg:o,valgtFaktaSteg:t})=>{const[s,d]=u.useState();return r.jsxs(r.Fragment,{children:[r.jsx(M,{hentPaneler:i,valgtProsessSteg:o,valgtFaktaSteg:t,apentFaktaPanelInfo:s}),r.jsx(x,{hentPaneler:a,valgtFaktaSteg:t,valgtProsessSteg:o,setApentFaktaPanel:d,apentFaktaPanelInfo:s})]})};$.__docgenInfo={description:"",methods:[],displayName:"BehandlingContainer",props:{hentFaktaPaneler:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: FaktaPanelInitProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  valgtFaktaSteg?: string;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
}`,signature:{properties:[{key:"valgtFaktaSteg",value:{name:"string",required:!1}},{key:"registrerFaktaPanel",value:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}},required:!0}}]}},name:"props"}],return:{name:"ReactElement"}}},description:""},hentProsessPaneler:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  valgtProsessSteg?: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
}`,signature:{properties:[{key:"valgtProsessSteg",value:{name:"string",required:!1}},{key:"registrerProsessPanel",value:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}},required:!0}}]}},name:"props"},{type:{name:"signature",type:"object",raw:`{
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  allMenyData: ProsessPanelMenyData[];
}`,signature:{properties:[{key:"apentFaktaPanelInfo",value:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]},required:!1}},{key:"allMenyData",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}}],raw:"ProsessPanelMenyData[]",required:!0}}]}},name:"ekstraProps"}],return:{name:"ReactElement"}}},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""}}};export{$ as B};
