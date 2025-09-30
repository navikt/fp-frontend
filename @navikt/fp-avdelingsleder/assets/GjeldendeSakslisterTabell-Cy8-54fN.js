import{r as p,R as v,a as B,b as q,c as D,j as r,u as C}from"./iframe-55PEk90g.js";import{u as _}from"./useQuery-C71aYVz1.js";import{u as R}from"./useMutation-1T5dGigW.js";import{V as G,H as L,c as E,L as K,d as F}from"./fplosAvdelingslederApi-Bt8bHvbk.js";import{u as T}from"./useLosKodeverk-C3Ly0BHb.js";import{S as P}from"./SletteSakslisteModal-CltrV8Ae.js";import{L as M,M as u,B as h,D as H}from"./nb_NO-CnqV6mPc.js";import{T as o}from"./Table-CWO-jRrv.js";import{u as N,S as V,L as z}from"./Modal-1nTydjrk.js";var Y=function(n,t){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,e=Object.getOwnPropertySymbols(n);l<e.length;l++)t.indexOf(e[l])<0&&Object.prototype.propertyIsEnumerable.call(n,e[l])&&(a[e[l]]=n[e[l]]);return a};const Q=p.forwardRef((n,t)=>{var{title:a,titleId:e}=n,l=Y(n,["title","titleId"]);let i=N();return i=a?e||"title-"+i:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":i},l),a?v.createElement("title",{id:i},a):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var $=function(n,t){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,e=Object.getOwnPropertySymbols(n);l<e.length;l++)t.indexOf(e[l])<0&&Object.prototype.propertyIsEnumerable.call(n,e[l])&&(a[e[l]]=n[e[l]]);return a};const U=p.forwardRef((n,t)=>{var{as:a="a",className:e,underline:l=!0,variant:i,inlineText:b=!1,"data-color":g}=n,k=$(n,["as","className","underline","variant","inlineText","data-color"]);const m=B(!1),{cn:c}=q();let d;return m?.isDarkside?d=i:d=i??"action",v.createElement(a,Object.assign({"data-color":g??X(d),"data-variant":d},k,{ref:t,className:c("navds-link",e,{[`navds-link--${d}`]:d,"navds-link--remove-underline":!l,"navds-link--inline-text":b})}))});function X(n){switch(n){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}const J="_isSelected_1ll69_1",W="_imageText_1ll69_6",Z="_grayBox_1ll69_12",ee="_removeImage_1ll69_26",f={isSelected:J,imageText:W,grayBox:Z,removeImage:ee},ne=["GjeldendeSakslisterTabell.Listenavn","GjeldendeSakslisterTabell.Stonadstype","GjeldendeSakslisterTabell.Behandlingtype","GjeldendeSakslisterTabell.AntallSaksbehandlere","GjeldendeSakslisterTabell.AntallBehandlinger"],re=(n,t)=>!t||t.length===0?r.jsx(u,{id:"GjeldendeSakslisterTabell.Alle"}):t.map(a=>{const e=n.find(l=>l.kode===a);return e?e.navn:""}).sort((a,e)=>a.localeCompare(e)).join(", "),te=(n,t)=>!t||t.length===0||t.length===n.length?r.jsx(u,{id:"GjeldendeSakslisterTabell.Alle"}):t.map(a=>{const e=n.find(l=>l.kode===a);return e?e.navn:""}).sort((a,e)=>a.localeCompare(e)).join(", "),ae=n=>new Promise(t=>{setTimeout(t,n)}),le=({sakslister:n,valgtAvdelingEnhet:t,setValgtSakslisteId:a,valgtSakslisteId:e,oppgaverForAvdelingAntall:l,lagNySaksliste:i,resetValgtSakslisteId:b,children:g})=>{const k=D(),[m,c]=p.useState(),d=p.useRef([]),x=T("BehandlingType"),S=T("FagsakYtelseType"),{mutate:w}=R({mutationFn:s=>E(s.sakslisteId,t),onSuccess:()=>{b(),k.invalidateQueries({queryKey:[K.SAKSLISTER_FOR_AVDELING]})}});p.useEffect(()=>{d.current=d.current.slice(0,n.length)},[n]);const I=async(s,y)=>{await ae(100),y&&a(s?y:void 0)},O=s=>{s.keyCode===13&&i()},A=s=>{c(void 0),w({sakslisteId:s.sakslisteId})};return r.jsxs(G,{gap:"space-16",children:[r.jsxs(L,{justify:"space-between",children:[r.jsx(M,{size:"small",children:r.jsx(u,{id:"GjeldendeSakslisterTabell.GjeldendeLister"})}),r.jsxs("div",{className:f.grayBox,children:[r.jsx(h,{size:"small",children:r.jsx(u,{id:"GjeldendeSakslisterTabell.OppgaverForAvdeling"})}),r.jsx(h,{size:"large",children:l??"0"})]})]}),n.length===0&&r.jsx(h,{size:"small",children:r.jsx(u,{id:"GjeldendeSakslisterTabell.IngenLister"})}),n.length>0&&r.jsxs(o,{size:"small",children:[r.jsx(o.Header,{children:r.jsxs(o.Row,{children:[r.jsx(o.HeaderCell,{scope:"col"}),ne.map(s=>r.jsx(o.HeaderCell,{scope:"col",children:r.jsx(u,{id:s})},s)),r.jsx(o.HeaderCell,{scope:"col"})]})}),r.jsx(o.Body,{children:n.map((s,y)=>r.jsxs(o.ExpandableRow,{className:s.sakslisteId===e?f.isSelected:void 0,onOpenChange:j=>I(j,s.sakslisteId),content:s.sakslisteId===e?g:void 0,open:s.sakslisteId===e,expandOnRowClick:!0,children:[r.jsx(o.DataCell,{children:s.navn}),r.jsx(o.DataCell,{children:re(S,s.fagsakYtelseTyper)}),r.jsx(o.DataCell,{children:te(x,s.behandlingTyper)}),r.jsx(o.DataCell,{children:s.saksbehandlerIdenter.length>0?s.saksbehandlerIdenter.length:""}),r.jsx(o.DataCell,{children:r.jsx(se,{valgtAvdelingEnhet:t,sakslisteId:s.sakslisteId})}),r.jsx(o.DataCell,{children:r.jsx("div",{ref:j=>{d.current[y]=j},children:r.jsx(V,{className:f.removeImage,onMouseDown:()=>c(s),onKeyDown:()=>c(s)})})})]},s.sakslisteId))})]}),r.jsxs(U,{onClick:i,onKeyDown:O,children:[r.jsx(H,{className:f.imageText,children:r.jsx(u,{id:"GjeldendeSakslisterTabell.LeggTilListe"})}),r.jsx(Q,{})]}),m&&r.jsx(P,{valgtSaksliste:m,cancel:()=>c(void 0),submit:A})]})},se=({valgtAvdelingEnhet:n,sakslisteId:t})=>{const a=C(),{data:e,isFetching:l,isError:i}=_(F(t,n));return i?r.jsx(u,{id:"AntallOppgaverForSaksliste.HentingAvAntallOppgaverFeilet"}):l?r.jsx(z,{size:"small",title:a.formatMessage({id:"AntallOppgaverForSaksliste.HentingAvAntallOppgaverHentes"})}):e};le.__docgenInfo={description:"",methods:[],displayName:"GjeldendeSakslisterTabell",props:{sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: BehandlingType[];
  fagsakYtelseTyper?: string[];
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
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}]}],raw:"BehandlingType[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"AnnetKriterie[]",required:!1}},{key:"saksbehandlerIdenter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: BehandlingType[];
  fagsakYtelseTyper?: string[];
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
}>`}],raw:"SakslisteAvdeling[]"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId?: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},oppgaverForAvdelingAntall:{required:!1,tsType:{name:"number"},description:""},lagNySaksliste:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},resetValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};export{le as G};
