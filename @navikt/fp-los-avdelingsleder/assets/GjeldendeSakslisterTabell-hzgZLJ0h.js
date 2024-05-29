import{r as o,R as e}from"./index-DogsOklH.js";import{p as O,c as G,a as u,H as A,L as R,F as m,i as T,h as K,q as L,X as B,D as N}from"./nb_NO-8vkv4Fjx.js";import{I as h}from"./index.es-LzEcK_Mh.js";import{b as H,a as F}from"./fplosRestApi-hxLEfccG.js";import{u as w}from"./useLosKodeverk-_R72ADyC.js";import{S as M}from"./SletteSakslisteModal-VyMguG4i.js";import{T as i}from"./Table-jpuw6DY0.js";var z=function(t,r){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(t);l<n.length;l++)r.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(t,n[l])&&(s[n[l]]=t[n[l]]);return s};const V=o.forwardRef((t,r)=>{var{title:s,titleId:n}=t,l=z(t,["title","titleId"]);let d=O();return d=s?n||"title-"+d:void 0,o.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:r,"aria-labelledby":d},l),s?o.createElement("title",{id:d},s):null,o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0ZM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75Z",fill:"currentColor"}))}),Y=V;var $=function(t,r){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(t);l<n.length;l++)r.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(t,n[l])&&(s[n[l]]=t[n[l]]);return s};const Z=o.forwardRef((t,r)=>{var{as:s="a",className:n,underline:l=!0,variant:d="action",inlineText:p=!1}=t,y=$(t,["as","className","underline","variant","inlineText"]);return e.createElement(s,Object.assign({},y,{ref:r,className:G("navds-link",n,`navds-link--${d}`,{"navds-link--remove-underline":!l,"navds-link--inline-text":p})}))}),X=Z,J="_isSelected_1vwpj_1",Q="_addCircleIcon_1vwpj_5",U="_imageText_1vwpj_6",W="_grayBox_1vwpj_12",ee="_margin_1vwpj_17",ne="_addPeriode_1vwpj_21",te="_removeImage_1vwpj_26",g={isSelected:J,addCircleIcon:Q,imageText:U,grayBox:W,margin:ee,addPeriode:ne,removeImage:te},re=["GjeldendeSakslisterTabell.Listenavn","GjeldendeSakslisterTabell.Stonadstype","GjeldendeSakslisterTabell.Behandlingtype","GjeldendeSakslisterTabell.AntallSaksbehandlere","GjeldendeSakslisterTabell.AntallBehandlinger","GjeldendeSakslisterTabell.SistEndret"],ae=(t,r)=>!r||r.length===0?e.createElement(m,{id:"GjeldendeSakslisterTabell.Alle"}):r.map(s=>{const n=t.find(l=>l.kode===s);return n?n.navn:""}).join(", "),le=(t,r)=>!r||r.length===0||r.length===t.length?e.createElement(m,{id:"GjeldendeSakslisterTabell.Alle"}):r.map(s=>{const n=t.find(l=>l.kode===s);return n?n.navn:""}).join(", "),se=t=>new Promise(r=>{setTimeout(r,t)}),j=({sakslister:t,valgtAvdelingEnhet:r,setValgtSakslisteId:s,valgtSakslisteId:n,oppgaverForAvdelingAntall:l,lagNySaksliste:d,resetValgtSakslisteId:p,hentAvdelingensSakslister:y,content:I})=>{const[v,k]=o.useState(),f=o.useRef([]),_=w(h.BEHANDLING_TYPE),q=w(h.FAGSAK_YTELSE),{startRequest:x}=H.useRestApiRunner(F.SLETT_SAKSLISTE);o.useEffect(()=>{f.current=f.current.slice(0,t.length)},[t]);const C=async(a,c)=>(await se(100),c&&s(a?c:void 0),Promise.resolve()),D=o.useCallback(a=>{a.keyCode===13&&d(r)},[r]),E=a=>{k(a)},S=o.useCallback(()=>{k(void 0)},[]),P=o.useCallback(a=>{S(),x({sakslisteId:a.sakslisteId,avdelingEnhet:r}).then(()=>{p(),y({avdelingEnhet:r})})},[r]);return e.createElement(e.Fragment,null,e.createElement(u,{sixteenPx:!0}),e.createElement(A,{justify:"space-between"},e.createElement(R,{size:"small"},e.createElement(m,{id:"GjeldendeSakslisterTabell.GjeldendeLister"})),e.createElement("div",{className:g.grayBox},e.createElement(T,{size:"small"},e.createElement(m,{id:"GjeldendeSakslisterTabell.OppgaverForAvdeling"})),e.createElement(K,{size:"small"},l||"0"))),e.createElement(u,{sixteenPx:!0}),t.length===0&&e.createElement(e.Fragment,null,e.createElement(u,{eightPx:!0}),e.createElement(T,{size:"small"},e.createElement(m,{id:"GjeldendeSakslisterTabell.IngenLister"})),e.createElement(u,{eightPx:!0})),t.length>0&&e.createElement(i,{size:"small"},e.createElement(i.Header,null,e.createElement(i.Row,null,e.createElement(i.HeaderCell,{scope:"col"}),re.map(a=>e.createElement(i.HeaderCell,{key:a,scope:"col"},e.createElement(m,{id:a}))),e.createElement(i.HeaderCell,{scope:"col"}))),e.createElement(i.Body,null,t.map((a,c)=>e.createElement(i.ExpandableRow,{key:a.sakslisteId,className:a.sakslisteId===n?g.isSelected:void 0,onOpenChange:b=>C(b,a.sakslisteId),content:I,open:a.sakslisteId===n},e.createElement(i.DataCell,null,a.navn),e.createElement(i.DataCell,null,ae(q,a.fagsakYtelseTyper)),e.createElement(i.DataCell,null,le(_,a.behandlingTyper)),e.createElement(i.DataCell,null,a.saksbehandlerIdenter.length>0?a.saksbehandlerIdenter.length:""),e.createElement(i.DataCell,null,a.antallBehandlinger),e.createElement(i.DataCell,null,e.createElement(L,{dateString:a.sistEndret})),e.createElement(i.DataCell,null,e.createElement("div",{ref:b=>{f.current[c]=b}},e.createElement(B,{className:g.removeImage,onMouseDown:()=>E(a),onKeyDown:()=>E(a)}))))))),e.createElement(u,{eightPx:!0}),e.createElement(X,{onClick:()=>d(r),onKeyDown:D},e.createElement(N,{className:g.imageText},e.createElement(m,{id:"GjeldendeSakslisterTabell.LeggTilListe"})),e.createElement(Y,null)),v&&e.createElement(M,{valgtSaksliste:v,cancel:S,submit:P}))},pe=j;j.__docgenInfo={description:"GjeldendeSakslisterTabell",methods:[],displayName:"GjeldendeSakslisterTabell",props:{sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Saksliste[]"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId?: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},oppgaverForAvdelingAntall:{required:!1,tsType:{name:"number"},description:""},lagNySaksliste:{required:!0,tsType:{name:"signature",type:"function",raw:"(avdelingEnhet: string) => void",signature:{arguments:[{type:{name:"string"},name:"avdelingEnhet"}],return:{name:"void"}}},description:""},resetValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},content:{required:!0,tsType:{name:"ReactElement"},description:""}}};export{pe as G};
