import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{r as d}from"./index-DRjF_FHU.js";import{B as p,b as P}from"./nb_NO-BvZ51WMw.js";import"./aktivitetStatus-02fOJoqz.js";import{c as f,R as o}from"./bind-HXjDzSm9.js";import{M as c,F as k,N as j}from"./index.es-DgvnPOIp.js";var i=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(i||{});const E="_steg_8gr08_1",y="_skalSkjulePanel_8gr08_9",h={steg:E,skalSkjulePanel:y},R=f.bind(h),u=({skalSkjulePanel:e=!1,children:s})=>n.jsx("div",{className:R("steg",{skalSkjulePanel:e}),children:n.jsx(j,{children:s})}),g=({erPanelValgt:e,erAksjonspunktOpent:s,status:l,dataState:t,skalSkjulePanel:a=!1,children:r})=>!e&&!a?null:e&&l===i.IKKE_VURDERT&&!s?n.jsx(u,{children:n.jsx(p,{size:"small",children:n.jsx(c,{id:"ProsessPanelWrapper.IkkeBehandlet"})})}):n.jsxs(u,{skalSkjulePanel:a,children:[t!==o.SUCCESS&&n.jsx(k,{}),t===o.SUCCESS&&r]});g.__docgenInfo={description:"",methods:[],displayName:"ProsessPanelWrapper",props:{erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},erAksjonspunktOpent:{required:!0,tsType:{name:"boolean"},description:""},status:{required:!0,tsType:{name:"string"},description:""},dataState:{required:!0,tsType:{name:"RestApiState"},description:""},skalSkjulePanel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""}}};const m="henlagt",S=({valgtProsessSteg:e,registrerProsessPanel:s})=>{const l=P(),[t,a]=d.useState(!1);return d.useEffect(()=>{const r=e===m||e==="default";s({id:m,tekst:l.formatMessage({id:"BehandlingHenlagtPanel.Header"}),erAktiv:r,harApentAksjonspunkt:!1,status:i.IKKE_VURDERT}),a(r)},[e]),n.jsx(g,{erPanelValgt:t,erAksjonspunktOpent:!1,status:i.OPPFYLT,dataState:o.SUCCESS,children:n.jsx(p,{size:"small",children:n.jsx(c,{id:"BehandlingHenlagtPanel.Henlagt"})})})};S.__docgenInfo={description:"",methods:[],displayName:"BehandlingHenlagtPanel",props:{valgtProsessSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};export{S as B,g as P,i as V};
