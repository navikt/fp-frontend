import{r as o,R as e}from"./index-DVXBtNgz.js";import{q as O,c as G,a as u,H as A,L as R,M as m,i as T,h as K,r as L,p as B,D as N}from"./nb_NO-Cx50JONv.js";import{I as h}from"./index.es-Cl_yxThX.js";import{b as H,a as M}from"./fplosRestApi-DXPSIiTb.js";import{u as w}from"./useLosKodeverk-BklsCf3V.js";import{S as F}from"./SletteSakslisteModal-DH3lfb4z.js";import{T as i}from"./Table-fM8G9n-f.js";var z=function(t,r){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(t);l<n.length;l++)r.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(t,n[l])&&(s[n[l]]=t[n[l]]);return s};const V=o.forwardRef((t,r)=>{var{title:s,titleId:n}=t,l=z(t,["title","titleId"]);let d=O();return d=s?n||"title-"+d:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":d},l),s?o.createElement("title",{id:d},s):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var Y=function(t,r){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(t);l<n.length;l++)r.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(t,n[l])&&(s[n[l]]=t[n[l]]);return s};const $=o.forwardRef((t,r)=>{var{as:s="a",className:n,underline:l=!0,variant:d="action",inlineText:p=!1}=t,y=Y(t,["as","className","underline","variant","inlineText"]);return e.createElement(s,Object.assign({},y,{ref:r,className:G("navds-link",n,`navds-link--${d}`,{"navds-link--remove-underline":!l,"navds-link--inline-text":p})}))}),X="_isSelected_1vwpj_1",J="_addCircleIcon_1vwpj_5",Q="_imageText_1vwpj_6",U="_grayBox_1vwpj_12",W="_margin_1vwpj_17",Z="_addPeriode_1vwpj_21",ee="_removeImage_1vwpj_26",g={isSelected:X,addCircleIcon:J,imageText:Q,grayBox:U,margin:W,addPeriode:Z,removeImage:ee},ne=["GjeldendeSakslisterTabell.Listenavn","GjeldendeSakslisterTabell.Stonadstype","GjeldendeSakslisterTabell.Behandlingtype","GjeldendeSakslisterTabell.AntallSaksbehandlere","GjeldendeSakslisterTabell.AntallBehandlinger","GjeldendeSakslisterTabell.SistEndret"],te=(t,r)=>!r||r.length===0?e.createElement(m,{id:"GjeldendeSakslisterTabell.Alle"}):r.map(s=>{const n=t.find(l=>l.kode===s);return n?n.navn:""}).join(", "),re=(t,r)=>!r||r.length===0||r.length===t.length?e.createElement(m,{id:"GjeldendeSakslisterTabell.Alle"}):r.map(s=>{const n=t.find(l=>l.kode===s);return n?n.navn:""}).join(", "),ae=t=>new Promise(r=>{setTimeout(r,t)}),j=({sakslister:t,valgtAvdelingEnhet:r,setValgtSakslisteId:s,valgtSakslisteId:n,oppgaverForAvdelingAntall:l,lagNySaksliste:d,resetValgtSakslisteId:p,hentAvdelingensSakslister:y,content:I})=>{const[v,k]=o.useState(),f=o.useRef([]),_=w(h.BEHANDLING_TYPE),q=w(h.FAGSAK_YTELSE),{startRequest:x}=H.useRestApiRunner(M.SLETT_SAKSLISTE);o.useEffect(()=>{f.current=f.current.slice(0,t.length)},[t]);const D=async(a,c)=>(await ae(100),c&&s(a?c:void 0),Promise.resolve()),C=o.useCallback(a=>{a.keyCode===13&&d(r)},[r]),E=a=>{k(a)},S=o.useCallback(()=>{k(void 0)},[]),P=o.useCallback(a=>{S(),x({sakslisteId:a.sakslisteId,avdelingEnhet:r}).then(()=>{p(),y({avdelingEnhet:r})})},[r]);return e.createElement(e.Fragment,null,e.createElement(u,{sixteenPx:!0}),e.createElement(A,{justify:"space-between"},e.createElement(R,{size:"small"},e.createElement(m,{id:"GjeldendeSakslisterTabell.GjeldendeLister"})),e.createElement("div",{className:g.grayBox},e.createElement(T,{size:"small"},e.createElement(m,{id:"GjeldendeSakslisterTabell.OppgaverForAvdeling"})),e.createElement(K,{size:"small"},l||"0"))),e.createElement(u,{sixteenPx:!0}),t.length===0&&e.createElement(e.Fragment,null,e.createElement(u,{eightPx:!0}),e.createElement(T,{size:"small"},e.createElement(m,{id:"GjeldendeSakslisterTabell.IngenLister"})),e.createElement(u,{eightPx:!0})),t.length>0&&e.createElement(i,{size:"small"},e.createElement(i.Header,null,e.createElement(i.Row,null,e.createElement(i.HeaderCell,{scope:"col"}),ne.map(a=>e.createElement(i.HeaderCell,{key:a,scope:"col"},e.createElement(m,{id:a}))),e.createElement(i.HeaderCell,{scope:"col"}))),e.createElement(i.Body,null,t.map((a,c)=>e.createElement(i.ExpandableRow,{key:a.sakslisteId,className:a.sakslisteId===n?g.isSelected:void 0,onOpenChange:b=>D(b,a.sakslisteId),content:I,open:a.sakslisteId===n},e.createElement(i.DataCell,null,a.navn),e.createElement(i.DataCell,null,te(q,a.fagsakYtelseTyper)),e.createElement(i.DataCell,null,re(_,a.behandlingTyper)),e.createElement(i.DataCell,null,a.saksbehandlerIdenter.length>0?a.saksbehandlerIdenter.length:""),e.createElement(i.DataCell,null,a.antallBehandlinger),e.createElement(i.DataCell,null,e.createElement(L,{dateString:a.sistEndret})),e.createElement(i.DataCell,null,e.createElement("div",{ref:b=>{f.current[c]=b}},e.createElement(B,{className:g.removeImage,onMouseDown:()=>E(a),onKeyDown:()=>E(a)}))))))),e.createElement(u,{eightPx:!0}),e.createElement($,{onClick:()=>d(r),onKeyDown:C},e.createElement(N,{className:g.imageText},e.createElement(m,{id:"GjeldendeSakslisterTabell.LeggTilListe"})),e.createElement(V,null)),v&&e.createElement(F,{valgtSaksliste:v,cancel:S,submit:P}))},ce=j;j.__docgenInfo={description:"GjeldendeSakslisterTabell",methods:[],displayName:"GjeldendeSakslisterTabell",props:{sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
  sistEndret: string;
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
  antallBehandlinger: number;
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sistEndret",value:{name:"string",required:!0}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
  sorteringType: string;
  fra?: number;
  til?: number;
  fomDato?: string;
  tomDato?: string;
  erDynamiskPeriode: boolean;
}`,signature:{properties:[{key:"sorteringType",value:{name:"string",required:!0}},{key:"fra",value:{name:"number",required:!1}},{key:"til",value:{name:"number",required:!1}},{key:"fomDato",value:{name:"string",required:!1}},{key:"tomDato",value:{name:"string",required:!1}},{key:"erDynamiskPeriode",value:{name:"boolean",required:!0}}]},required:!1}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andreKriterierType: string;
  inkluder: boolean;
}`,signature:{properties:[{key:"andreKriterierType",value:{name:"string",required:!0}},{key:"inkluder",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  andreKriterierType: string;
  inkluder: boolean;
}>`}],raw:"AnnetKriterie[]",required:!1}},{key:"saksbehandlerIdenter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"antallBehandlinger",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
  sistEndret: string;
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
  antallBehandlinger: number;
}>`}],raw:"Saksliste[]"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId?: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},oppgaverForAvdelingAntall:{required:!1,tsType:{name:"number"},description:""},lagNySaksliste:{required:!0,tsType:{name:"signature",type:"function",raw:"(avdelingEnhet: string) => void",signature:{arguments:[{type:{name:"string"},name:"avdelingEnhet"}],return:{name:"void"}}},description:""},resetValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},content:{required:!0,tsType:{name:"ReactElement"},description:""}}};export{ce as G};
