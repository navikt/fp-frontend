import{r as y,h as A,p as hn,q as bn,i as Te,k as xn,j as e,t as N,s as Sn,v as In,l as C,N as _e,x as ue,o as ge,P as Ee,b as qe,n as Tn,u as _n,R as En,a as w,L as qn}from"./iframe-BcF5WgZP.js";import{u as Ae,C as Oe,k as Z,a as te,w as ye,b as An,S as On,R as Rn,c as V}from"./index.es-Cn9xryLu.js";import{A as ee,T as Dn,G as F,Q as Re,B as Vn,r as De}from"./index.es-BFNJ8sl6.js";import{b as Q,n as me,u as Ve,a as Nn}from"./fagsakApi-o_VXIJav.js";import{E as Fn,N as Pn}from"./IngenBehandlingValgtPanel-Dt4srAOY.js";import{u as Jn,d as ie,B as q,e as wn,f as Ln,L as ne,M as B,a as I,V as j,H as b,b as E,E as Kn,D as le,g as Cn}from"./VStack-DTYPuBbn.js";import{M as s}from"./message-D5eaNvsm.js";import{S as Ne,a as re,C as Fe}from"./index.es-Dzaej_P6.js";import{S as H}from"./Spacer-DygFMCTm.js";import{L as Pe}from"./Link-DLR36E-i.js";import{S as Un,a as Gn}from"./DocPencil-C9ecchxi.js";import{q as Bn,k as Hn}from"./index-Dgppw5sE.js";import{S as Mn}from"./Buildings3-sSmpvocY.js";import{S as Je}from"./ExternalLink-DEpOoeGG.js";import{C as we,a as Le}from"./Checkbox-C65Qc4nE.js";import{S as Ke,a as zn,b as $n}from"./FagsakProfileIndex-CYpHM34t.js";import{T as M}from"./index-Bfib5FnH.js";import{F as W}from"./VisittkortSakIndex-D0M27WTl.js";import{c as Yn}from"./Popover-BgO7YwnK.js";import{T as l}from"./Table-C7aJZNBj.js";import{T as L}from"./BehandlingSupportIndex-D3u4_jhy.js";import{E as X}from"./RisikoklassifiseringIndex-D4gvLFuj.js";import{A as Qn}from"./AktørIndex-D00MG5AL.js";import{u as Wn,E as Xn}from"./errorType-Dr6ShkYB.js";import{R as Zn}from"./useBehandlingPollingOperasjoner-E36xTH0G.js";import{F as er}from"./FagsakIndex-fbjo2wPt.js";import{F as nr}from"./FagsakSearchIndex-BDbalEZ9.js";import{j as rr,u as tr,f as ar,a as sr,g as ir}from"./paths-D1NE_CT-.js";var lr=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(n);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(a[t[i]]=n[t[i]]);return a};const ke=y.forwardRef((n,r)=>{var{title:a,titleId:t}=n,i=lr(n,["title","titleId"]);let d=Jn();return d=a?t||"title-"+d:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":d},i),a?A.createElement("title",{id:d},a):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.75 5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-3 6a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h.75V21a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75h-.75v-5.5h4.5v5.5h-.75a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-4.25H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75z",clipRule:"evenodd"}))});y.createContext(null);const[or,sa,dr,ur]=Yn(),[gr,Ce]=hn({name:"ToggleGroupContext",hookName:"useToggleGroupContext",providerName:"ToggleGroupProvider",errorMessage:"<ToggleGroup.Item> needs to be wrapped within <ToggleGroup>"});function mr({value:n,disabled:r=!1,onFocus:a,onClick:t,onKeyDown:i},d){const{setSelectedValue:o,setFocusedValue:g,selectedValue:u,focusedValue:k}=Ce(),{register:p,descendants:m}=ur({disabled:r,value:n}),v=n===u,h=()=>g(n),f=y.useCallback(x=>{const T=m.values().findIndex(c=>c.value===k),ae={ArrowLeft:()=>{var c;const S=m.prevEnabled(T,!1);(c=S?.node)===null||c===void 0||c.focus()},ArrowRight:()=>{var c;const S=m.nextEnabled(T,!1);(c=S?.node)===null||c===void 0||c.focus()},Home:()=>{var c;const S=m.firstEnabled();(c=S?.node)===null||c===void 0||c.focus()},End:()=>{var c;const S=m.lastEnabled();(c=S?.node)===null||c===void 0||c.focus()}},se=x.shiftKey||x.ctrlKey||x.altKey||x.metaKey,Y=ae[x.key];Y&&!se?(x.preventDefault(),Y(x)):x.key==="Tab"&&u&&setTimeout(()=>g(u))},[m,k,u,g]);return{ref:bn([p,d]),isSelected:v,isFocused:k===n,onClick:ie(t,()=>u!==n&&o(n)),onFocus:r?void 0:ie(a,h),onKeyDown:ie(i,f)}}var kr=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(n);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(a[t[i]]=n[t[i]]);return a};const pr=y.forwardRef((n,r)=>{var{className:a,children:t,icon:i,label:d,value:o,onClick:g,onFocus:u,onKeyDown:k}=n,p=kr(n,["className","children","icon","label","value","onClick","onFocus","onKeyDown"]);const{cn:m}=Te(),v=mr({value:o,onClick:g,onFocus:u,disabled:!1,onKeyDown:k},r),h=Ce();return A.createElement("button",Object.assign({},p,{ref:v.ref,className:m("navds-toggle-group__button",a),type:"button",role:"radio","aria-checked":v.isSelected,"data-selected":v.isSelected,tabIndex:v.isFocused?0:-1,onClick:v.onClick,onFocus:v.onFocus,onKeyDown:v.onKeyDown}),A.createElement(q,{as:"span",className:m("navds-toggle-group__button-inner"),size:h?.size},t??A.createElement(A.Fragment,null,i,d)))});function cr({onChange:n,value:r,defaultValue:a=""}){const[t,i]=y.useState(a),[d,o]=wn({defaultValue:a,value:r,onChange:n});return y.useEffect(()=>{r!=null&&i(r)},[r]),{selectedValue:d,setSelectedValue:o,focusedValue:t,setFocusedValue:i}}var vr=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(n);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(a[t[i]]=n[t[i]]);return a};const pe=y.forwardRef((n,r)=>{var{className:a,children:t,onChange:i,size:d="medium",label:o,value:g,defaultValue:u,variant:k,fill:p=!1,"data-color":m}=n,v=vr(n,["className","children","onChange","size","label","value","defaultValue","variant","fill","data-color"]);const{cn:h}=Te(),f=xn(!1),x=dr(),T=cr({defaultValue:u,value:g,onChange:i}),_=Object.assign(Object.assign({},T),{size:d}),U=Ln();!g&&!u&&console.error("ToggleGroup without value or defaultvalue is not allowed"),!g&&!u&&console.error("ToggleGroup needs either a value or defaultValue");let R;return f?.isDarkside?R=k:R=k??"action",A.createElement(or,{value:x},A.createElement(gr,Object.assign({},_),A.createElement("div",{className:h("navds-toggle-group__wrapper",a,{"navds-toggle-group__wrapper--fill":p}),"data-color":m??yr(R)},o&&A.createElement(ne,{as:"div",size:d,className:h("navds-toggle-group__label"),id:U},o),A.createElement("div",Object.assign({"aria-labelledby":o?U:void 0},v,{ref:r,className:h("navds-toggle-group",`navds-toggle-group--${d}`,{[`navds-toggle-group--${R}`]:R}),role:"radiogroup"}),t))))});function yr(n){switch(n){case"action":return"accent";case"neutral":return"neutral";default:return}}pe.Item=pr;const Ue=({hentJournalpost:n,lukkModal:r,erÅpen:a,harSøktOgFunnetIngenMatch:t})=>{const[i,d]=y.useState(!1),o=Ae({defaultValues:{}});return e.jsxs(B,{open:a,onClose:r,"aria-label":"journalpost-modal",children:[e.jsx(B.Header,{children:e.jsx(I,{size:"medium",level:"2",children:e.jsx(s,{id:"Journalpost.Søk.Tittel"})})}),e.jsx(B.Body,{children:e.jsxs(j,{gap:"space-8",children:[e.jsx(Oe,{formMethods:o,onSubmit:g=>{d(!0),n(g.journalpostId),d(!1)},children:e.jsxs(b,{gap:"space-8",align:"end",children:[e.jsx(Z,{description:e.jsx(s,{id:"Journalpost.Søk.KunTall"}),label:e.jsx(s,{id:"Journalpost.Søk.JournalpostID"}),name:"journalpostId",control:o.control,validate:[N,Sn,In(9)],size:"medium"}),e.jsx(E,{loading:i,icon:e.jsx(Ne,{"aria-hidden":!0}),children:e.jsx(s,{id:"Journalpost.Søk.Finn"})})]})}),t&&e.jsx(q,{children:e.jsx(s,{id:"Journalpost.Søk.IngenTreffEllerManglerTilgang"})})]})})]})};Ue.__docgenInfo={description:"JournalpostSøkModal - Modal for å søke etter en journalpost ved ID",methods:[],displayName:"JournalpostSøkModal",props:{hentJournalpost:{required:!0,tsType:{name:"signature",type:"function",raw:"(journalpostId: string) => void",signature:{arguments:[{type:{name:"string"},name:"journalpostId"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erÅpen:{required:!0,tsType:{name:"boolean"},description:""},harSøktOgFunnetIngenMatch:{required:!0,tsType:{name:"boolean"},description:""}}};const fr="_header_vajp4_1",jr={header:fr},Ge=({valgtJournalpost:n,hentJournalpost:r,avbrytVisningAvJournalpost:a,harHentetFerdigJournalpost:t,antallOppgaver:i})=>{const[d,o]=y.useState(!1);return y.useEffect(()=>{n&&o(!1)},[n]),e.jsxs(b,{className:jr.header,children:[e.jsxs("div",{children:[e.jsxs(b,{gap:"space-32",align:"center",children:[n&&e.jsxs(q,{as:Pe,size:"large",onClick:a,children:[e.jsx(Un,{height:"28px",width:"28px"}),e.jsx(s,{id:"Journalforing.Oversikt"})]}),e.jsx(I,{size:"medium",level:"2",children:e.jsx(s,{id:"Journalforing.Tittel"})})]}),!n&&i!=null&&i>0&&e.jsx(q,{children:e.jsx(s,{id:"Journalforing.Antall.Oppgaver",values:{antall:i}})})]}),e.jsx(H,{}),!n&&e.jsxs(e.Fragment,{children:[e.jsx(E,{variant:"secondary",type:"button",icon:e.jsx(Ne,{"aria-hidden":!0,height:"32px",width:"32px"}),onClick:()=>{o(!0)},children:e.jsx(s,{id:"Journalpost.Søk.Tittel"})}),e.jsx(Ue,{hentJournalpost:r,lukkModal:()=>{o(!1)},erÅpen:d,harSøktOgFunnetIngenMatch:t&&!n})]})]})};Ge.__docgenInfo={description:"Header - Journalføringsheader, inneholder tittel, tilbakeknapp og søkeknapp for journalpost",methods:[],displayName:"JournalføringHeader",props:{hentJournalpost:{required:!0,tsType:{name:"signature",type:"function",raw:"(journalpostId: string) => void",signature:{arguments:[{type:{name:"string"},name:"journalpostId"}],return:{name:"void"}}},description:""},avbrytVisningAvJournalpost:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},valgtJournalpost:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  journalpostId: string;
  tittel?: string;
  kanal?: JournalKanal;
  bruker: JournalBruker | null;
  tilstand?: JournalpostTilstand;
  eksisterendeSaksnummer?: string;
  journalførendeEnhet?: string;
  kanOppretteSak: boolean;
  avsender: JournalAvsender;
  ytelseType: FagsakYtelseType;
  dokumenter?: JournalDokument[];
  fagsaker?: JournalFagsak[];
}`,signature:{properties:[{key:"journalpostId",value:{name:"string",required:!0}},{key:"tittel",value:{name:"string",required:!1}},{key:"kanal",value:{name:"union",raw:"'NAV_NO' | 'ALTINN' | 'EESSI' | 'EIA' | 'HELSENETTET' | 'SKAN_NETS'",elements:[{name:"literal",value:"'NAV_NO'"},{name:"literal",value:"'ALTINN'"},{name:"literal",value:"'EESSI'"},{name:"literal",value:"'EIA'"},{name:"literal",value:"'HELSENETTET'"},{name:"literal",value:"'SKAN_NETS'"}],required:!1}},{key:"bruker",value:{name:"union",raw:"JournalBruker | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fnr: string;
  aktørId: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fnr",value:{name:"string",required:!0}},{key:"aktørId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fnr: string;
  aktørId: string;
}>`},{name:"null"}],required:!0}},{key:"tilstand",value:{name:"union",raw:`| 'MOTTATT'
| 'JOURNALFOERT'
| 'FEILREGISTRERT'
| 'EKSPEDERT'
| 'FERDIGSTILT'
| 'UTGAAR'`,elements:[{name:"literal",value:"'MOTTATT'"},{name:"literal",value:"'JOURNALFOERT'"},{name:"literal",value:"'FEILREGISTRERT'"},{name:"literal",value:"'EKSPEDERT'"},{name:"literal",value:"'FERDIGSTILT'"},{name:"literal",value:"'UTGAAR'"}],required:!1}},{key:"eksisterendeSaksnummer",value:{name:"string",required:!1}},{key:"journalførendeEnhet",value:{name:"string",required:!1}},{key:"kanOppretteSak",value:{name:"boolean",required:!0}},{key:"avsender",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  id: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  id: string;
}>`,required:!0}},{key:"ytelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"tittel",value:{name:"string",required:!0}},{key:"varianter",value:{name:"Array",elements:[{name:"union",raw:"'ARKIV' | 'ORIGINAL'",elements:[{name:"literal",value:"'ARKIV'"},{name:"literal",value:"'ORIGINAL'"}]}],raw:"JournalVariant[]",required:!0}},{key:"lenke",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}>`}],raw:"JournalDokument[]",required:!1}},{key:"fagsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  ytelseType: FagsakYtelseType;
  opprettetDato: string;
  førsteUttaksdato?: string;
  status: FagsakStatus;
  familieHendelseJf?: FamilieHendelse;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"ytelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettetDato",value:{name:"string",required:!0}},{key:"førsteUttaksdato",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"familieHendelseJf",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  familiehHendelseDato?: string;
  familihendelseType?: FamilieHendelseType;
}`,signature:{properties:[{key:"familiehHendelseDato",value:{name:"string",required:!1}},{key:"familihendelseType",value:{name:"FamilieHendelseType",required:!1}}]}}],raw:`Readonly<{
  familiehHendelseDato?: string;
  familihendelseType?: FamilieHendelseType;
}>`,required:!1}}]}}],raw:`Readonly<{
  saksnummer: string;
  ytelseType: FagsakYtelseType;
  opprettetDato: string;
  førsteUttaksdato?: string;
  status: FagsakStatus;
  familieHendelseJf?: FamilieHendelse;
}>`}],raw:"JournalFagsak[]",required:!1}}]}}],raw:`Readonly<{
  journalpostId: string;
  tittel?: string;
  kanal?: JournalKanal;
  bruker: JournalBruker | null;
  tilstand?: JournalpostTilstand;
  eksisterendeSaksnummer?: string;
  journalførendeEnhet?: string;
  kanOppretteSak: boolean;
  avsender: JournalAvsender;
  ytelseType: FagsakYtelseType;
  dokumenter?: JournalDokument[];
  fagsaker?: JournalFagsak[];
}>`},description:""},harHentetFerdigJournalpost:{required:!0,tsType:{name:"boolean"},description:""},antallOppgaver:{required:!1,tsType:{name:"number"},description:""}}};const P=Hn.extend({retry:0,timeout:15e3,hooks:{beforeRequest:[n=>{const r=`CallId_${Date.now()}_${Math.floor(Math.random()*1e9)}`;n.headers.set("Nav-Callid",r)}]}}),D=n=>n,O={ALLE_JOURNAL_OPPGAVER:D("/fpfordel/api/journalfoering/oppgaver"),HENT_JOURNALPOST_DETALJER:D("/fpfordel/api/journalfoering/oppgave/detaljer"),FERDIGSTILL_JOURNALFØRING:D("/fpfordel/api/sak/ferdigstill"),KNYTT_JOURNALPOST_TIL_ANNEN_SAK:D("/fpfordel/api/sak/knyttTilAnnenSak"),OPPDATER_MED_BRUKER:D("/fpfordel/api/journalfoering/bruker/oppdater"),HENT_BRUKER:D("/fpfordel/api/journalfoering/bruker/hent"),RESERVER_OPPGAVE:D("/fpfordel/api/journalfoering/oppgave/reserver"),FLYTT_OPPGAVE_TIL_GOSYS:D("/fpfordel/api/journalfoering/oppgave/tilgosys")},Be=n=>Bn({queryKey:[O.ALLE_JOURNAL_OPPGAVER,n],queryFn:()=>P.get(O.ALLE_JOURNAL_OPPGAVER,{searchParams:{ident:n??""}}).json(),enabled:n!==void 0,staleTime:1/0}),hr=n=>P.get(O.HENT_JOURNALPOST_DETALJER,{searchParams:{journalpostId:n}}).json(),br=n=>P.post(O.FERDIGSTILL_JOURNALFØRING,{json:n}).json(),xr=n=>P.post(O.KNYTT_JOURNALPOST_TIL_ANNEN_SAK,{json:n}).json(),Sr=n=>P.post(O.OPPDATER_MED_BRUKER,{json:n}).json(),Ir=n=>P.post(O.HENT_BRUKER,{json:{fødselsnummer:n}}).json(),Tr=n=>P.post(O.RESERVER_OPPGAVE,{json:n}).json(),_r=n=>P.post(O.FLYTT_OPPGAVE_TIL_GOSYS,{json:{journalpostId:n}}).json(),Er=new Set(["FEILREGISTRERT","JOURNALFOERT","EKSPEDERT","FERDIGSTILT"]),z=n=>!!n&&Er.has(n),qr="_ikon_8fc4d_1",Ar="_ikonKol_8fc4d_7",$={ikon:qr,ikonKol:Ar},Or=n=>{const r=n.avsender.id;return r&&r.length===9?e.jsx(Mn,{className:$.ikon}):e.jsx(ke,{className:$.ikon})},oe=({navn:n,id:r,ikon:a,title:t})=>e.jsxs(j,{gap:"space-8",children:[t&&e.jsx(I,{size:"small",level:"4",children:t}),e.jsxs(b,{gap:"space-16",children:[e.jsx("div",{className:$.ikonKol,children:a}),e.jsxs("div",{children:[e.jsx(q,{children:n}),e.jsxs(b,{gap:"space-4",align:"center",children:[e.jsx(q,{children:r}),e.jsx(Fe,{copyText:r,variant:"action",size:"small"})]})]})]})]}),He=({journalpost:n,hentForhåndsvisningAvSøker:r,skalKunneEndreSøker:a,brukerTilForhåndsvisning:t,knyttSøkerTilJournalpost:i,lasterBruker:d})=>{const o=C(),[g,u]=y.useState(void 0),[k,p]=y.useState(void 0),m=()=>{k&&i({journalpostId:n.journalpostId,fødselsnummer:k})},v=f=>{f?_e(f)?(p(f),u(void 0),r(f)):u(o.formatMessage({id:"ValgtOppgave.Søk.BrukerFeil"},{fødselsnummer:f})):u(void 0)},h=f=>{if(f.key==="Enter"){const x=f.currentTarget.value;v(x)}};return e.jsxs(j,{gap:"space-16",children:[a&&e.jsxs(j,{gap:"space-8",children:[e.jsx(I,{size:"small",level:"4",children:e.jsx(s,{id:"ValgtOppgave.Søker"})}),e.jsx(ee,{variant:"warning",size:"small",children:e.jsx(s,{id:"ValgtOppgave.Søk.Bruker"})}),e.jsx(re,{label:o.formatMessage({id:"ValgtOppgave.Søk.FinnBruker"}),onKeyDown:h,onSearchClick:v,hideLabel:!1,children:e.jsx(re.Button,{type:"button",loading:d})}),g&&e.jsx(Kn,{children:g}),t&&e.jsxs(j,{gap:"space-16",children:[e.jsx(oe,{navn:t.navn,id:t.fødselsnummer,ikon:e.jsx(ke,{className:$.ikon})}),e.jsx(E,{type:"button",onClick:m,children:e.jsx(s,{id:"ValgtOppgave.Søk.KnyttTil"})})]})]}),n.bruker?.navn&&e.jsx(oe,{navn:n.bruker.navn,id:n.bruker.fnr,ikon:e.jsx(ke,{className:$.ikon}),title:e.jsx(s,{id:"ValgtOppgave.Søker"})}),n.avsender.navn&&e.jsx(oe,{navn:n.avsender.navn,id:n.avsender.id,ikon:Or(n),title:e.jsx(s,{id:"ValgtOppgave.Avsender"})})]})};He.__docgenInfo={description:"BrukerAvsenderPanel - Inneholder detaljer om bruker og avsender",methods:[],displayName:"BrukerAvsenderPanel",props:{journalpost:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  journalpostId: string;
  tittel?: string;
  kanal?: JournalKanal;
  bruker: JournalBruker | null;
  tilstand?: JournalpostTilstand;
  eksisterendeSaksnummer?: string;
  journalførendeEnhet?: string;
  kanOppretteSak: boolean;
  avsender: JournalAvsender;
  ytelseType: FagsakYtelseType;
  dokumenter?: JournalDokument[];
  fagsaker?: JournalFagsak[];
}`,signature:{properties:[{key:"journalpostId",value:{name:"string",required:!0}},{key:"tittel",value:{name:"string",required:!1}},{key:"kanal",value:{name:"union",raw:"'NAV_NO' | 'ALTINN' | 'EESSI' | 'EIA' | 'HELSENETTET' | 'SKAN_NETS'",elements:[{name:"literal",value:"'NAV_NO'"},{name:"literal",value:"'ALTINN'"},{name:"literal",value:"'EESSI'"},{name:"literal",value:"'EIA'"},{name:"literal",value:"'HELSENETTET'"},{name:"literal",value:"'SKAN_NETS'"}],required:!1}},{key:"bruker",value:{name:"union",raw:"JournalBruker | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fnr: string;
  aktørId: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fnr",value:{name:"string",required:!0}},{key:"aktørId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fnr: string;
  aktørId: string;
}>`},{name:"null"}],required:!0}},{key:"tilstand",value:{name:"union",raw:`| 'MOTTATT'
| 'JOURNALFOERT'
| 'FEILREGISTRERT'
| 'EKSPEDERT'
| 'FERDIGSTILT'
| 'UTGAAR'`,elements:[{name:"literal",value:"'MOTTATT'"},{name:"literal",value:"'JOURNALFOERT'"},{name:"literal",value:"'FEILREGISTRERT'"},{name:"literal",value:"'EKSPEDERT'"},{name:"literal",value:"'FERDIGSTILT'"},{name:"literal",value:"'UTGAAR'"}],required:!1}},{key:"eksisterendeSaksnummer",value:{name:"string",required:!1}},{key:"journalførendeEnhet",value:{name:"string",required:!1}},{key:"kanOppretteSak",value:{name:"boolean",required:!0}},{key:"avsender",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  id: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  id: string;
}>`,required:!0}},{key:"ytelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"tittel",value:{name:"string",required:!0}},{key:"varianter",value:{name:"Array",elements:[{name:"union",raw:"'ARKIV' | 'ORIGINAL'",elements:[{name:"literal",value:"'ARKIV'"},{name:"literal",value:"'ORIGINAL'"}]}],raw:"JournalVariant[]",required:!0}},{key:"lenke",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}>`}],raw:"JournalDokument[]",required:!1}},{key:"fagsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  ytelseType: FagsakYtelseType;
  opprettetDato: string;
  førsteUttaksdato?: string;
  status: FagsakStatus;
  familieHendelseJf?: FamilieHendelse;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"ytelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettetDato",value:{name:"string",required:!0}},{key:"førsteUttaksdato",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"familieHendelseJf",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  familiehHendelseDato?: string;
  familihendelseType?: FamilieHendelseType;
}`,signature:{properties:[{key:"familiehHendelseDato",value:{name:"string",required:!1}},{key:"familihendelseType",value:{name:"FamilieHendelseType",required:!1}}]}}],raw:`Readonly<{
  familiehHendelseDato?: string;
  familihendelseType?: FamilieHendelseType;
}>`,required:!1}}]}}],raw:`Readonly<{
  saksnummer: string;
  ytelseType: FagsakYtelseType;
  opprettetDato: string;
  førsteUttaksdato?: string;
  status: FagsakStatus;
  familieHendelseJf?: FamilieHendelse;
}>`}],raw:"JournalFagsak[]",required:!1}}]}}],raw:`Readonly<{
  journalpostId: string;
  tittel?: string;
  kanal?: JournalKanal;
  bruker: JournalBruker | null;
  tilstand?: JournalpostTilstand;
  eksisterendeSaksnummer?: string;
  journalførendeEnhet?: string;
  kanOppretteSak: boolean;
  avsender: JournalAvsender;
  ytelseType: FagsakYtelseType;
  dokumenter?: JournalDokument[];
  fagsaker?: JournalFagsak[];
}>`},description:""},hentForhåndsvisningAvSøker:{required:!0,tsType:{name:"signature",type:"function",raw:"(fnr: string) => void",signature:{arguments:[{type:{name:"string"},name:"fnr"}],return:{name:"void"}}},description:""},skalKunneEndreSøker:{required:!0,tsType:{name:"boolean"},description:""},brukerTilForhåndsvisning:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
}>`},description:""},knyttSøkerTilJournalpost:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: OppdaterMedBruker) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  journalpostId: string;
  fødselsnummer: string;
}`,signature:{properties:[{key:"journalpostId",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  journalpostId: string;
  fødselsnummer: string;
}>`},name:"params"}],return:{name:"void"}}},description:""},lasterBruker:{required:!0,tsType:{name:"boolean"},description:""}}};const Rr={ANKE:"Anke",ANNET:"Annet",BEKREFTELSE_ARBEIDSGIVER:"Bekreftelse fra arbeidsgiver",BEKREFTELSE_STUDIESTED_SKOLE:"Bekreftelse fra studiested/skole",BEKREFTELSE_FERIE:"Bekreftelse på avtalt ferie",BEKREFTELSE_KVALIFISERINGSPROGRAM:"Bekreftelse på deltakelse i kvalifiseringsprogrammet",BEKREFTELSE_OPPHOLDSTILLATELSE:"Bekreftelse på oppholdstillatelse",BEKREFTELSE_FORSVAR_SIVILFORSVAR:"Bekreftelse på øvelse eller tjeneste i Forsvaret eller Sivilforsvaret",BEKREFTELSE_TLTAK_NAV:"Bekreftelse på tiltak i regi av Arbeids- og velferdsetaten",BEKREFTELSE_FUNKSJONSNEDSETTELSE:"Beskrivelse av funksjonsnedsettelse",DOKUMENTASJON_ALENEOMSORG:"Dokumentasjon av aleneomsorg",DOKUMENTASJON_SØK_TILBAKE_I_TID:"Dokumentasjon av begrunnelse for hvorfor man søker tilbake i tid",DOKUMENTASJON_OVERTAKELSE_OMSORG:"Dokumentasjon av dato for overtakelse av omsorg",DOKUMENTASJON_INTRODUKSJONSPROGRAM:"Dokumentasjon av deltakelse i introduksjonsprogrammet",DOKUMENTASJON_ETTERLØNN_SLUTTVEDERLAG:"Dokumentasjon av etterlønn/sluttvederlag",DOKUMENTASJON_INNLEGELSE_HELSEINSTITUSJON:"Dokumentasjon av innleggelse i helseinstitusjon",DOKUMENTASJON_FORSVAR_SIVILFORSVAR:"Dokumentasjon av militær- eller siviltjeneste",DOKUMENTASJON_MOR_AKTIVITET:"Dokumentasjon av mors utdanning, arbeid eller sykdom",FØDSELSATTEST:"Fødselsattest",KLAGE:"Klage",KOPI_AV_SKATTEMELDING:"Kopi av skattemelding",RESULTATREGNSKAP:"Resultatregnskap",RETTSKJENNELSE_TRYGDERETTEN:"Rettskjennelse fra Trygderetten",SØKNAD_FORELDREPEMGER_ENDRING_KVOTE:"Søknad om endring av uttak av foreldrepenger eller overføring av kvote",SØKNAD_ENGANGSSTØNAD_ADOPSJON:"Søknad om engangsstønad ved adopsjon",SØKNAD_ENGANGSSTØNAD_FØDSEL:"Søknad om engangsstønad ved fødsel",SØKNAD_FORELDREPENGER_ADOPSJON:"Søknad om foreldrepenger ved adopsjon",SØKNAD_FORELDREPENGER_FØDSEL:"Søknad om foreldrepenger ved fødsel",SØKNAD_SVANGERSKAPSPENGER:"Søknad om svangerskapspenger",TERMINBEKREFTELSE:"Terminbekreftelse",TILRETTELEGGING_OMPLASERING_GRAVIDITET:"Tilrettelegging/omplassering ved graviditet",UTTALELSE_TILBAKEKREVING:"Uttalelse tilbakekreving"},Me=Object.values(Rr),Dr=new Set(["ALTINN","NAV_NO"]),ze=n=>!!n&&!Dr.has(n),Vr="_dokContainer_efyi8_1",Nr="_externalLinkIcon_efyi8_6",Fr="_editButton_efyi8_11",Pr="_input_efyi8_16",K={dokContainer:Vr,externalLinkIcon:Nr,editButton:Fr,input:Pr},$e=({dokument:n,docFieldIndex:r,journalpost:a,dokumentTittelStyresAvJournalpostTittel:t})=>{const{control:i}=te(),d=C(),[o,g]=y.useState(!n.tittel),[u,k]=y.useState(!1),p=e.jsx(E,{as:"a",href:n.lenke,target:"_blank",rel:"noreferrer",variant:"tertiary",title:d.formatMessage({id:"DokumentDetaljer.ExternalLink"}),icon:e.jsx(Je,{"aria-hidden":!0,className:K.externalLinkIcon})});return t?e.jsxs(b,{className:K.dokContainer,gap:"0 4",align:"center",wrap:!1,children:[e.jsx(Z,{name:"journalpostTittel",control:i,validate:[N,ue],readOnly:t,maxLength:200}),e.jsx(H,{}),p]}):e.jsxs(b,{className:K.dokContainer,gap:"0 4",align:"center",wrap:!1,children:[o&&e.jsxs(e.Fragment,{children:[u&&e.jsx(Z,{name:`journalpostDokumenter.${r}.tittel`,control:i,hideLabel:!0,validate:[N,ue],readOnly:!1,className:K.input,maxLength:100}),!u&&e.jsx(ye,{name:`journalpostDokumenter.${r}.tittel`,control:i,hideLabel:!0,readOnly:!1,label:void 0,validate:[N],className:K.input,selectValues:Me.map(m=>e.jsx("option",{value:m,children:m},m))}),e.jsx(we,{legend:"Brukt fritekst",hideLegend:!0,onChange:()=>{k(!u)},value:[u],children:e.jsx(Le,{value:!0,size:"small",children:e.jsx(s,{id:"Journal.Tittel.Fritekst"})})})]}),!o&&e.jsxs(e.Fragment,{children:[e.jsx(ne,{children:n.tittel}),ze(a.kanal)&&e.jsx(E,{icon:e.jsx(Ke,{"aria-hidden":!0}),className:K.editButton,onClick:()=>{g(!o)},type:"button",variant:"tertiary"})]}),e.jsx(H,{}),p]})};$e.__docgenInfo={description:"DokumentDetaljer - Inneholder detaljer om et dokument på journalposten",methods:[],displayName:"DokumentDetaljer"};const Jr=[],wr=n=>n.map(r=>({dokumentId:r.dokumentId,tittel:r.tittel})),Ye=(n,r)=>{const a=r.find(t=>t.dokumentId===n);if(!a)throw new Error(`Finner ikke dokument med id ${n}`);return a},Lr=n=>{if(!n.tittel)throw new Error(`Mangler dokumenttittel for dokument med id  ${n.dokumentId}`);return n.tittel},Kr=(n,r)=>Ye(n.dokumentId,r).tittel!==n.tittel,Cr=(n,r)=>n.journalpostDokumenter?n.journalpostDokumenter.filter(a=>Kr(a,r)).map(a=>({dokumentId:a.dokumentId,tittel:Lr(a)})):[],Qe=({journalpost:n,dokumentTittelStyresAvJournalpostTittel:r})=>{const{control:a}=te(),{fields:t}=An({control:a,name:"journalpostDokumenter"});return e.jsx(j,{gap:"space-8",children:t.map((i,d)=>e.jsx($e,{dokument:Ye(i.dokumentId,n.dokumenter||Jr),docFieldIndex:d,journalpost:n,dokumentTittelStyresAvJournalpostTittel:r},i.id))})};Qe.__docgenInfo={description:"DokumentForm - Inneholder form behandling av dokumenter og setter opp visning av hvert dokument",methods:[],displayName:"DokumentForm"};const Ur="_inputField_18uvi_1",be={inputField:Ur},We=({journalpost:n,readOnly:r})=>{const[a,t]=y.useState(!n.tittel),[i,d]=y.useState(!1),{control:o}=te();return e.jsxs(b,{gap:"0 4",align:"center",children:[a&&e.jsxs(e.Fragment,{children:[i&&e.jsx(Z,{name:"journalpostTittel",control:o,validate:[N,ue],readOnly:r,maxLength:200,hideLabel:!0,className:be.inputField}),!i&&e.jsx(ye,{name:"journalpostTittel",control:o,readOnly:r,label:void 0,hideLabel:!0,className:be.inputField,validate:[N],selectValues:Me.map(g=>e.jsx("option",{value:g,children:g},g))}),e.jsx(we,{legend:"Brukt fritekst",hideLegend:!0,onChange:()=>{d(!i)},value:[i],children:e.jsx(Le,{value:!0,children:e.jsx(s,{id:"Journal.Tittel.Fritekst"})})})]}),!a&&e.jsxs(e.Fragment,{children:[e.jsx(I,{size:"large",level:"3",children:n.tittel}),!r&&ze(n.kanal)&&e.jsx(E,{icon:e.jsx(Ke,{"aria-hidden":!0}),onClick:()=>{t(!a)},type:"button",variant:"tertiary"})]})]})};We.__docgenInfo={description:"JournalpostTittelForm - Inneholder tittel på journalpost og formkomponent for å endre denne",methods:[],displayName:"JournalpostTittelForm"};const Xe=({oppgave:n,reserverOppgave:r,navAnsatt:a})=>{const t=()=>{const i=n.reservertAv?"":a.brukernavn;r({journalpostId:n.journalpostId,reserverFor:i})};return e.jsxs(e.Fragment,{children:[n.reservertAv&&a.brukernavn===n.reservertAv&&e.jsxs(q,{children:[e.jsx(s,{id:"Oppgavetabell.SakenErTattAv"}),e.jsx(M,{size:"small",variant:"alt3",style:{marginLeft:"0.5rem"},children:e.jsx(s,{id:"Oppgavetabell.Meg"})}),e.jsx(E,{variant:"tertiary",size:"small",onClick:t,style:{marginLeft:"0.5rem"},children:e.jsx(s,{id:"Oppgavetabell.FjernMeg"})})]}),n.reservertAv&&a.brukernavn!==n.reservertAv&&e.jsxs(q,{children:[e.jsx(s,{id:"Oppgavetabell.SakenErTattAv"}),e.jsx(M,{size:"small",variant:"alt3",style:{marginLeft:"0.5rem"},children:n.reservertAv})]}),!n.reservertAv&&e.jsx("div",{children:e.jsx(E,{variant:"tertiary",size:"small",onClick:t,children:e.jsx(s,{id:"Oppgavetabell.SettPåMeg"})})})]})};Xe.__docgenInfo={description:"Reservasjonspanel - Inneholder informasjon om hvem som har reservert saken og mulighet for å reservere saken på saksbehandler",methods:[],displayName:"Reservasjonspanel"};const Gr="_sakContainer_xnl10_1",Br="_externalLinkIcon_xnl10_5",xe={sakContainer:Gr,externalLinkIcon:Br},ce=({sak:n})=>{const r=$r(n.familieHendelseJf),a=C();return e.jsxs(b,{className:xe.sakContainer,gap:"0 4",align:"center",wrap:!1,children:[e.jsx("div",{children:e.jsxs(j,{gap:"space-4",children:[e.jsxs(b,{gap:"0 2",align:"center",children:[e.jsx(ne,{children:e.jsx(s,{id:"Journal.Sak.Ytelse",values:{ytelseType:n.ytelseType}})}),e.jsxs(b,{align:"center",children:[e.jsx(ne,{children:n.saksnummer}),e.jsx(Fe,{copyText:n.saksnummer,variant:"action",size:"small"})]})]}),e.jsxs(j,{gap:"space-8",children:[e.jsxs(b,{gap:"space-8",children:[e.jsx(le,{children:e.jsx(s,{id:"Journal.Sak.OpprettetDato",values:{br:e.jsx("br",{}),opprettetDato:ge(n.opprettetDato)}})}),n.førsteUttaksdato&&e.jsx(le,{children:e.jsx(s,{id:"Journal.Sak.FørsteUttak",values:{br:e.jsx("br",{}),førsteUttak:ge(n.førsteUttaksdato)}})}),r&&e.jsx(le,{children:r})]}),e.jsx("div",{children:Yr(n.status)})]})]})}),e.jsx(H,{}),e.jsx(E,{as:"a",href:Hr(n.saksnummer),target:"_blank",rel:"noreferrer",variant:"tertiary",title:a.formatMessage({id:"DokumentDetaljer.ExternalLink"}),icon:e.jsx(Je,{className:xe.externalLinkIcon})})]})},Hr=n=>`/fagsak/${n}/`,Mr=n=>{switch(n){case Q.AVSLUTTET:return{variant:"neutral",size:"xsmall",children:e.jsx(s,{id:"Journal.Sak.Avsluttet"})};case Q.LOPENDE:return{variant:"warning",size:"xsmall",children:e.jsx(s,{id:"Journal.Sak.Løpende"})};case Q.OPPRETTET:return{variant:"alt1",size:"xsmall",children:e.jsx(s,{id:"Journal.Sak.Opprettet"})};case Q.UNDER_BEHANDLING:return{variant:"alt2",size:"xsmall",children:e.jsx(s,{id:"Journal.Sak.UnderBehandling"})};default:return null}},zr=n=>{switch(n){case W.ADOPSJON:return"Journal.Sak.FamAdopsjon";case W.FODSEL:return"Journal.Sak.FamFødsel";case W.TERMIN:return"Journal.Sak.FamTermin";case W.OMSORG:return"Journal.Sak.FamOmsorg";default:throw new Error(`Ukjent familiehendelse ${n}`)}},$r=n=>{if(!n?.familihendelseType||!n.familiehHendelseDato)return null;const r=zr(n.familihendelseType);return e.jsx(s,{id:r,values:{br:e.jsx("br",{}),famDato:ge(n.familiehHendelseDato)}})},Yr=n=>{const r=Mr(n);return r?e.jsx(M,{...r}):null};ce.__docgenInfo={description:"SakDetaljer - Inneholder detaljer om en sak som kan knyttes til journalposten",methods:[],displayName:"SakDetaljer"};const Qr="_ytelseSelect_134hn_1",Wr={ytelseSelect:Qr},Xr=[],fe="LAG_NY_SAK",je="LAG_GENERELL_SAK",ve="saksnummerValg",Ze="ytelsetypeValg",Zr=["ES","FP","SVP"],et=(n,r)=>{const a=n[ve];if(a===je)return{opprettSak:{aktørId:me(r.bruker?.aktørId),sakstype:"GENERELL"}};if(a===fe){const t=n[Ze];if(!t)throw new Error("Kan ikke journalføre på ny sak uten ytelse");return{opprettSak:{ytelseType:t,aktørId:me(r.bruker?.aktørId),sakstype:"FAGSAK"}}}return{saksnummer:a}},nt=n=>{const a=(n.fagsaker||Xr).map(t=>({label:e.jsxs(e.Fragment,{children:[t.saksnummer," ",e.jsx(s,{id:"Journal.Sak.Ytelse",tagName:"b",values:{ytelseType:t.ytelseType}})]}),disabled:t.saksnummer===n.eksisterendeSaksnummer,value:t.saksnummer}));return a.push({label:e.jsx(s,{id:"Journal.Sak.Ny"}),value:fe,disabled:!n.kanOppretteSak}),z(n.tilstand)||a.push({label:e.jsx(s,{id:"Journal.Sak.Generell"}),value:je,disabled:!1}),a},en=({journalpost:n,isSubmittable:r,avbrytVisningAvJournalpost:a,erKlarForJournalføring:t,erLokalOppgave:i,flyttTilGosys:d})=>{const o=C(),g=n.fagsaker&&n.fagsaker.length>0,u=te(),k=u.watch(ve);return e.jsxs(j,{gap:"space-16",children:[!g&&t&&e.jsx(q,{children:e.jsx(s,{id:"Journal.Sak.Ingen"})}),z(n.tilstand)&&e.jsx(ee,{variant:"info",children:e.jsx(s,{id:"Journalpost.Søk.Forklaring"})}),e.jsxs(j,{gap:"space-32",children:[e.jsxs(j,{gap:"space-16",children:[e.jsx(On,{name:ve,control:u.control,validate:[N],children:nt(n).map(p=>e.jsx(Rn,{value:p.value,size:"small",disabled:!t||p.disabled,children:p.label},p.value))}),k===fe&&e.jsx(ye,{name:Ze,control:u.control,className:Wr.ytelseSelect,validate:[N],label:o.formatMessage({id:"Journal.Sak.VelgYtelse"}),selectValues:Zr.map(p=>e.jsx("option",{value:p,children:e.jsx(s,{id:"Journal.Sak.Ytelse",values:{ytelseType:p}})},p))}),k===je&&e.jsx(ee,{variant:"info",children:e.jsx(s,{id:"Journal.Sak.Generell.Info"})})]}),e.jsxs(b,{gap:"space-16",children:[e.jsx(E,{size:"small",variant:"primary",disabled:!r,type:"submit",children:e.jsx(s,{id:z(n.tilstand)?"Journal.Sak.AnnenSak":"ValgtOppgave.Journalfør"})}),e.jsx(E,{size:"small",variant:"secondary",onClick:a,disabled:!1,type:"button",children:e.jsx(s,{id:"ValgtOppgave.Avbryt"})}),i&&e.jsxs(e.Fragment,{children:[e.jsx(H,{}),e.jsx(E,{size:"small",variant:"primary",type:"button",onClick:()=>{d(n.journalpostId)},children:e.jsx(s,{id:"ValgtOppgave.Flytt.Til.Gosys"})})]})]})]})]})};en.__docgenInfo={description:"VelgSakForm - Inneholder formen som lar saksbehandler velge en sak og journalføre dokumentet på, evt opprette ny sak.",methods:[],displayName:"VelgSakForm"};const he=n=>n.dokumenter?.length===1,rt=(n,r)=>{const a=r.find(t=>t.saksnummer===n);if(!a)throw new Error(`Finner ikke sak med saksnummer ${n} i listen over journalpostens saker`);return a},tt=n=>{const r=n.dokumenter||[];return{saksnummerValg:void 0,ytelsetypeValg:void 0,journalpostTittel:n.tittel,journalpostDokumenter:he(n)?[{dokumentId:r[0].dokumentId,tittel:n.tittel}]:wr(r)}},at=(n,r)=>{const a=n.dokumenter?.at(0)?.dokumentId;if(!a)throw new Error(`Finner ingen dokumenter på journalpost ${n.journalpostId}`);return[{dokumentId:a,tittel:r}]},st=(n,r)=>{const a=r.tittel!==n.journalpostTittel?n.journalpostTittel:void 0,t=a&&he(r)?at(r,a):Cr(n,r.dokumenter||[]);if(a||t.length>0)return{journalpostTittel:a,dokumenter:t}},Se=(n,r,a)=>{if(!a)throw new Error("Kan ikke journalføre uten at enhet er satt");return{journalpostId:r.journalpostId,enhetId:a,oppdaterTitlerDto:st(n,r),...et(n,r)}},nn=({journalpost:n,oppgave:r,avbrytVisningAvJournalpost:a,submitJournalføring:t,knyttJournalpostTilBruker:i,forhåndsvisBruker:d,brukerTilForhåndsvisning:o,lasterBruker:g,reserverOppgave:u,navAnsatt:k,flyttTilGosys:p})=>{const m=Ae({defaultValues:tt(n)}),v=_=>{if(z(n.tilstand))t(Se(_,n,n.journalførendeEnhet),!0);else{if(!r)throw new Error("Prøver å journalføre en journalpost uten oppgave, ugyldig tilstand!");t(Se(_,n,r.enhetId),!1)}},h=!n.bruker,f=z(n.tilstand),x=n.fagsaker||[],T=m.formState.isDirty;return e.jsx(Oe,{formMethods:m,onSubmit:v,children:e.jsxs(j,{gap:"space-20",children:[e.jsxs("div",{children:[e.jsx(We,{journalpost:n,readOnly:f}),r&&e.jsx(Xe,{oppgave:r,reserverOppgave:u,navAnsatt:k})]}),e.jsx(He,{journalpost:n,hentForhåndsvisningAvSøker:d,skalKunneEndreSøker:h,lasterBruker:g,brukerTilForhåndsvisning:o,knyttSøkerTilJournalpost:i}),r?.beskrivelse&&e.jsxs(j,{gap:"space-0",children:[e.jsx(I,{size:"small",level:"4",children:e.jsx(s,{id:"ValgtOppgave.Beskrivelse"})}),e.jsx(Cn,{children:r.beskrivelse})]}),e.jsxs(j,{gap:"space-8",children:[e.jsx(I,{size:"small",level:"4",children:e.jsx(s,{id:"ValgtOppgave.Dokumenter"})}),n.dokumenter&&e.jsx(Qe,{journalpost:n,dokumentTittelStyresAvJournalpostTittel:he(n)})]}),n.eksisterendeSaksnummer&&e.jsxs(j,{gap:"space-8",children:[e.jsx(I,{size:"small",level:"4",children:e.jsx(s,{id:"ValgtOppgave.TilknyttetSak"})}),e.jsx(ce,{sak:rt(n.eksisterendeSaksnummer,x)})]}),e.jsxs(j,{gap:"space-8",children:[e.jsx(I,{size:"small",level:"4",children:e.jsx(s,{id:"ValgtOppgave.RelaterteSaker"})}),h&&e.jsx(ee,{variant:"info",size:"small",children:e.jsx(s,{id:"ValgtOppgave.RelaterteSaker.ManglerSøker"})}),e.jsx(j,{gap:"space-8",children:x.filter(_=>_.saksnummer!==n.eksisterendeSaksnummer).map(_=>e.jsx(ce,{sak:_},_.saksnummer))})]}),e.jsxs("div",{children:[e.jsx(I,{size:"small",level:"4",children:e.jsx(s,{id:f?"Journal.Sak.AnnenSak":"ValgtOppgave.KnyttTilSak"})}),e.jsx(en,{isSubmittable:T,journalpost:n,avbrytVisningAvJournalpost:a,erKlarForJournalføring:!h,erLokalOppgave:r?.kilde==="LOKAL",flyttTilGosys:p})]})]})})};nn.__docgenInfo={description:"JournalpostDetaljer - Viser detaljer om valgt journalpost",methods:[],displayName:"JournalpostDetaljer"};const rn=({setValgtDokument:n,valgtDokument:r,dokumenter:a})=>{if(a.length<2)return null;const t=i=>{const d=a.find(o=>o.dokumentId===i);d&&n(d)};return e.jsx(b,{justify:"center",children:e.jsx(pe,{defaultValue:r.dokumentId,onChange:t,children:a.map(({dokumentId:i,tittel:d})=>e.jsx(Dn,{content:d,children:e.jsx(pe.Item,{value:i,children:it(d)})},i))})})},it=n=>n?n.length>15?n.substring(0,14).concat("..."):n:"Ukjent tittel";rn.__docgenInfo={description:"",methods:[],displayName:"DokumentVelger",props:{setValgtDokument:{required:!0,tsType:{name:"signature",type:"function",raw:"(dok: JournalDokument) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"tittel",value:{name:"string",required:!0}},{key:"varianter",value:{name:"Array",elements:[{name:"union",raw:"'ARKIV' | 'ORIGINAL'",elements:[{name:"literal",value:"'ARKIV'"},{name:"literal",value:"'ORIGINAL'"}]}],raw:"JournalVariant[]",required:!0}},{key:"lenke",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}>`},name:"dok"}],return:{name:"void"}}},description:""},valgtDokument:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"tittel",value:{name:"string",required:!0}},{key:"varianter",value:{name:"Array",elements:[{name:"union",raw:"'ARKIV' | 'ORIGINAL'",elements:[{name:"literal",value:"'ARKIV'"},{name:"literal",value:"'ORIGINAL'"}]}],raw:"JournalVariant[]",required:!0}},{key:"lenke",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}>`},description:""},dokumenter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"tittel",value:{name:"string",required:!0}},{key:"varianter",value:{name:"Array",elements:[{name:"union",raw:"'ARKIV' | 'ORIGINAL'",elements:[{name:"literal",value:"'ARKIV'"},{name:"literal",value:"'ORIGINAL'"}]}],raw:"JournalVariant[]",required:!0}},{key:"lenke",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}>`}],raw:"JournalDokument[]"},description:""}}};const lt="_pdfContainer_1684h_1",ot="_iframe_1684h_8",tn={pdfContainer:lt,iframe:ot},an=({dokument:n})=>e.jsx("iframe",{id:"iframepdf",src:n.lenke,className:tn.iframe,title:n.tittel});an.__docgenInfo={description:"PDFVisning - Panel for å vise valgt dokument",methods:[],displayName:"PDFVisning",props:{dokument:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"tittel",value:{name:"string",required:!0}},{key:"varianter",value:{name:"Array",elements:[{name:"union",raw:"'ARKIV' | 'ORIGINAL'",elements:[{name:"literal",value:"'ARKIV'"},{name:"literal",value:"'ORIGINAL'"}]}],raw:"JournalVariant[]",required:!0}},{key:"lenke",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}>`},description:""}}};const sn=({dokumenter:n})=>{const r=n&&n.length>0?n[0]:void 0,[a,t]=y.useState(r);return!a||!n?e.jsx(I,{size:"small",level:"2",children:e.jsx(s,{id:"ValgtOppgave.Dokumenter.Tom"})}):e.jsxs(j,{gap:"space-16",className:tn.pdfContainer,children:[e.jsx(rn,{setValgtDokument:t,valgtDokument:a,dokumenter:n}),e.jsx(an,{dokument:a})]})};sn.__docgenInfo={description:"",methods:[],displayName:"DokumentIndex",props:{dokumenter:{required:!0,tsType:{name:"union",raw:"JournalDokument[] | undefined",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"tittel",value:{name:"string",required:!0}},{key:"varianter",value:{name:"Array",elements:[{name:"union",raw:"'ARKIV' | 'ORIGINAL'",elements:[{name:"literal",value:"'ARKIV'"},{name:"literal",value:"'ORIGINAL'"}]}],raw:"JournalVariant[]",required:!0}},{key:"lenke",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}>`}],raw:"JournalDokument[]"},{name:"undefined"}]},description:""}}};const dt="_container_yoizf_1",ut="_oppgaveKolonne_yoizf_5",gt="_pdfKolonne_yoizf_10",de={container:dt,oppgaveKolonne:ut,pdfKolonne:gt},ln=({oppgave:n,journalpost:r,avbrytVisningAvJournalpost:a,submitJournalføring:t,navAnsatt:i,reserverOppgave:d,flyttTilGosys:o})=>{const{mutate:g,data:u}=V({mutationFn:Sr}),{mutate:k,data:p,status:m}=V({mutationFn:Ir}),{dokumenter:v}=r,h=v&&v.length>0?v[0]:void 0;return e.jsxs("div",{className:de.container,children:[e.jsx("div",{className:de.oppgaveKolonne,children:e.jsx(nn,{avbrytVisningAvJournalpost:a,journalpost:u??r,oppgave:n,submitJournalføring:t,knyttJournalpostTilBruker:g,forhåndsvisBruker:f=>{k(f)},brukerTilForhåndsvisning:p,lasterBruker:m==="pending",reserverOppgave:d,navAnsatt:i,flyttTilGosys:o})}),h&&e.jsx("div",{className:de.pdfKolonne,children:e.jsx(sn,{dokumenter:r.dokumenter})})]})};ln.__docgenInfo={description:"JournalpostIndex - Komponent som holder på og styrer logikk rundt detaljert visning av journalpost",methods:[],displayName:"JournalpostIndex"};const mt="_nesteIkon_1mt95_5",kt="_tabellRad_1mt95_11",Ie={nesteIkon:mt,tabellRad:kt},on=({oppgave:n,velgOppgaveOgHentJournalpost:r,navAnsatt:a,reserverOppgave:t})=>e.jsxs(l.Row,{onClick:()=>{r(n)},shadeOnHover:!0,className:Ie.tabellRad,children:[e.jsx(l.DataCell,{children:e.jsx(F,{dateString:n.opprettetDato})}),e.jsx(l.DataCell,{children:e.jsx(s,{id:"Journal.Sak.Ytelse",values:{ytelseType:n.ytelseType}})}),e.jsx(l.DataCell,{children:n.beskrivelse}),e.jsxs(l.DataCell,{children:[n.reservertAv&&a.brukernavn===n.reservertAv&&e.jsx(M,{size:"small",variant:"alt3",children:e.jsx(s,{id:"Oppgavetabell.Meg"})}),n.reservertAv&&a.brukernavn!==n.reservertAv&&e.jsx(M,{size:"small",variant:"neutral-moderate",children:n.reservertAv}),!n.reservertAv&&e.jsx(E,{size:"small",variant:"tertiary",onClick:i=>{i.stopPropagation(),t({journalpostId:n.journalpostId,reserverFor:a.brukernavn})},type:"button",children:e.jsx(s,{id:"Oppgavetabell.SettPåMeg"})})]}),e.jsx(l.DataCell,{children:n.fødselsnummer}),e.jsx(l.DataCell,{children:e.jsx(F,{dateString:n.frist})}),e.jsx(l.DataCell,{children:n.enhetId}),e.jsx(l.DataCell,{children:e.jsx(Gn,{className:Ie.nesteIkon})})]});on.__docgenInfo={description:"",methods:[],displayName:"OppgaveTabellRad"};const pt="_headerText_57a1a_6",J={headerText:pt},dn=({velgOppgaveOgHentJournalpost:n,navAnsatt:r,reserverOppgave:a})=>{const{data:t}=Ve(Be(r.brukernavn));return(t??[]).length<1?e.jsx(q,{size:"small",children:e.jsx(s,{id:"Journalforing.Oppgaver.IngenOppgaver"})}):e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.Opprettet"})}),e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.YtelseType"})}),e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.Beskrivelse"})}),e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.Saksbehandler"})}),e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.Bruker"})}),e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.Frist"})}),e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.Enhet"})}),e.jsx(l.HeaderCell,{})]})}),e.jsx(l.Body,{children:(t??[]).map(i=>e.jsx(on,{oppgave:i,velgOppgaveOgHentJournalpost:n,navAnsatt:r,reserverOppgave:a},i.journalpostId))})]})};dn.__docgenInfo={description:"OppgaveTabell - Presenterer liste over oppgaver og tar inn callback for å sette valgt oppgave",methods:[],displayName:"OppgaveTabell"};const ct="_sentrertInnhold_1of7b_1",vt={sentrertInnhold:ct},un=({navAnsatt:n,valgtOppgave:r,valgtJournalpost:a,velgOppgaveOgHentJournalpost:t,avbrytVisningAvJournalpost:i,submitJournalføring:d,reserverOppgave:o,flyttTilGosys:g})=>e.jsxs("div",{children:[!a&&e.jsx("div",{className:vt.sentrertInnhold,children:e.jsx(dn,{velgOppgaveOgHentJournalpost:t,navAnsatt:n,reserverOppgave:o})}),a&&e.jsx(ln,{avbrytVisningAvJournalpost:i,oppgave:r,journalpost:a,navAnsatt:n,submitJournalføring:d,reserverOppgave:o,flyttTilGosys:g})]});un.__docgenInfo={description:"JournalføringIndex - Styrer logikk rundt valg av oppgave i listen med oppgaver",methods:[],displayName:"JournalføringIndex"};const yt="_ferdigIkon_y9y28_1",ft={ferdigIkon:yt},jt=n=>`/fagsak/${n}/`,gn=({saksnummer:n,lukkModal:r,showModal:a,isLoading:t})=>{if(!a)return null;const i=n?.saksnummer?jt(n.saksnummer):void 0;return e.jsx(B,{width:"small",open:a,onClose:r,"aria-label":"journalpost-modal",children:e.jsx(B.Body,{children:e.jsxs(j,{gap:"space-16",children:[t&&e.jsxs(e.Fragment,{children:[e.jsx(b,{justify:"center",children:e.jsx(Re,{})}),e.jsx(b,{justify:"center",children:e.jsx(q,{children:e.jsx(s,{id:"Journalfør.Modal.Ferdigstiller"})})})]}),!t&&i&&e.jsxs(e.Fragment,{children:[e.jsx(b,{justify:"center",children:e.jsx(zn,{className:ft.ferdigIkon})}),e.jsx(b,{justify:"center",children:e.jsxs(q,{children:[e.jsx(s,{id:"Journalfør.Modal.Journalført"})," ",e.jsx(Pe,{target:"_blank",rel:"noreferrer",href:i,children:n?.saksnummer})]})})]}),e.jsx(b,{justify:"center",children:e.jsx(E,{size:"small",variant:"primary",onClick:r,disabled:!1,autoFocus:!0,type:"button",children:e.jsx(s,{id:"Journalfør.Modal.Ok"})})})]})})})};gn.__docgenInfo={description:"JournalførtSubmitModal - Viser modal som gir saksnummer journalposten ble ført på",methods:[],displayName:"JournalførtSubmitModal"};const ht={"Journalforing.Tittel":"Journalføring","Journalforing.Tilgang":"Du har ikke tilgang til journalføring","Journalforing.Oversikt":"Oversikt","Journalforing.Oppgaver.IngenOppgaver":"Fant ingen journalføringsoppgaver","Oppgavetabell.Opprettet":"Opprettet","Oppgavetabell.YtelseType":"Ytelse","Oppgavetabell.Enhet":"Enhet","Oppgavetabell.Frist":"Frist","Oppgavetabell.Bruker":"Bruker","Oppgavetabell.Beskrivelse":"Beskrivelse","Oppgavetabell.Saksbehandler":"Saksbehandler","Oppgavetabell.SettPåMeg":"Sett på meg","Oppgavetabell.FjernMeg":"Fjern meg fra saken","Oppgavetabell.Meg":"Meg","Oppgavetabell.SakenErTattAv":"Saken er tatt av ","Journalpost.Søk.Tittel":"Søk etter journalpost","Journalpost.Søk.Finn":"Finn journalpost","Journalpost.Søk.Forklaring":"Hvis du trenger å knytte en allerede journalført journalpost til en annen sak, kan du bruke denne funksjonaliteten. Journalposten vil da kopieres til den nye saken du legger til.","Journalpost.Søk.JournalpostID":"Journalpost-ID","Journalpost.Søk.IngenTreffEllerManglerTilgang":"Søket ga ingen treff eller du mangler tilgang til denne journalposten","Journalforing.Antall.Oppgaver":"Åpne oppgaver: {antall}","Journalpost.Søk.KunTall":"Kan kun inneholde tall","ValgtOppgave.Avbryt":"Avbryt","ValgtOppgave.Journalfør":"Journalfør","ValgtOppgave.Flytt.Til.Gosys":"Flytt til Gosys","ValgtOppgave.Søker":"Søker","ValgtOppgave.Søk.Bruker":"Saken mangler søker","ValgtOppgave.Søk.BrukerFeil":"{fødselsnummer} er ikke et gyldig fødselsnummer","ValgtOppgave.Søk.FinnBruker":"Finn søker","ValgtOppgave.Søk.KnyttTil":"Knytt person til saken","ValgtOppgave.Avsender":"Avsender","ValgtOppgave.Beskrivelse":"Beskrivelse","ValgtOppgave.TilknyttetSak":"Saken journalposten er journalført på","ValgtOppgave.RelaterteSaker":"Saker som kan være knyttet til innholdet","ValgtOppgave.RelaterteSaker.ManglerSøker":"Ingen saker er knyttet til innholdet ettersom saken mangler søker.","ValgtOppgave.KnyttTilSak":"Journalfør på sak","ValgtOppgave.Dokumenter":"Innhold","ValgtOppgave.Dokument.Knapp":"Dokument {dok}/{antall}","ValgtOppgave.Dokumenter.Tom":"Journalposten har ingen dokumenter","Journal.Sak.Avsluttet":"Avsluttet","Journal.Sak.Løpende":"Løpende","Journal.Sak.Ny":"Journalfør på ny sak","Journal.Sak.VelgYtelse":"Ytelse","Journal.Sak.Opprettet":"Opprettet","Journal.Sak.Generell":"Journalfør på generell sak","Journal.Sak.Generell.Info":"Det vil ikke opprettes sak når du journalfører på generell sak. Innholdet vil bli knyttet direkte til personen.","Journal.Sak.OpprettetDato":"OPPRETTET {br}{opprettetDato}","Journal.Sak.FørsteUttak":"FØRSTE UTTAK {br}{førsteUttak}","Journal.Sak.FamAdopsjon":"ADOPSJON {br}{famDato}","Journal.Sak.FamFødsel":"FØDSEL {br}{famDato}","Journal.Sak.FamTermin":"TERMIN {br}{famDato}","Journal.Sak.FamOmsorg":"OMSORGSOVERTAKELSE {br}{famDato}","Journal.Sak.Ingen":"Det finnes ingen saker på journalpost","Journal.Sak.UnderBehandling":"Under behandling","Journal.Sak.Ytelse":"{ytelseType, select, ES {Engangsstønad} FP {Foreldrepenger} SVP {Svangerskapspenger} other {Ukjent}}","Journal.Sak.AnnenSak":"Journalfør på en annen sak","Journal.Tittel.Fritekst":"Fritekst","Journalfør.Modal.Ok":"Ok","Journalfør.Modal.Ferdigstiller":"Ferdigstiller journalføringen...","Journalfør.Modal.Journalført":"Dokumentet er journalført på saksnummer ","DokumentDetaljer.ExternalLink":"Åpne dokument i nytt vindu","SakDetaljer.ExternalLink":"Åpne sak i nytt vindu"},bt=qe(ht),mn=n=>e.jsx(Ee,{value:bt,children:e.jsx(xt,{...n})}),xt=({navAnsatt:n})=>{const[r,a]=y.useState(void 0),[t,i]=y.useState(!1),{data:d,refetch:o,status:g}=Ve(Be(n?.brukernavn)),{mutate:u,data:k,reset:p,status:m}=V({mutationFn:hr}),{mutate:v,data:h,isPending:f}=V({mutationFn:br,onSuccess:()=>{o(),G()}}),{mutate:x,data:T,isPending:_}=V({mutationFn:xr,onSuccess:()=>{o(),G()}}),{mutate:U}=V({mutationFn:Tr,onSuccess:()=>{o()}}),{mutate:R}=V({mutationFn:_r,onSuccess:()=>{o()}}),G=()=>{a(void 0),p()},ae=c=>{U(c),r&&a({...r,reservertAv:c.reserverFor})},se=c=>{a(c),u(c.journalpostId)},Y=(c,S)=>{i(!0),S?x(c):v(c)};return n?g==="pending"?e.jsx(Re,{}):g==="error"?e.jsx(Fn,{}):e.jsxs("div",{children:[e.jsx(Ge,{avbrytVisningAvJournalpost:G,harHentetFerdigJournalpost:m==="success",valgtJournalpost:k,hentJournalpost:u,antallOppgaver:d.length}),t&&e.jsx(gn,{isLoading:_||f,lukkModal:()=>{i(!1)},showModal:t,saksnummer:h||T}),e.jsx(un,{valgtOppgave:r,valgtJournalpost:k,navAnsatt:n,velgOppgaveOgHentJournalpost:se,avbrytVisningAvJournalpost:G,submitJournalføring:Y,reserverOppgave:ae,flyttTilGosys:R})]}):e.jsx(I,{size:"medium",level:"2",children:e.jsx(s,{id:"Journalforing.Tilgang"})})};mn.__docgenInfo={description:"",methods:[],displayName:"OppgaveJournalføringIndex",props:{navAnsatt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  navn: string;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  kanOverstyre: boolean;
  kanOppgavestyre: boolean;
  kanBehandleKode6: boolean;
  funksjonellTid?: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!1}}]}},description:""}}};const kn=({saker:n})=>e.jsx(Vn.New,{background:"neutral-moderate",padding:"5",borderRadius:"medium",children:e.jsxs(l,{size:"small",children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Registrert"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Sak"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Stonad"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Type"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Resultat"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Vedtatt"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Niva"})})]})}),e.jsx(l.Body,{children:n.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.DataCell,{children:e.jsx(F,{dateString:r.registrert})}),e.jsx(l.DataCell,{children:r.sakId}),e.jsx(l.DataCell,{children:r.valg}),e.jsx(l.DataCell,{children:r.type}),e.jsx(l.DataCell,{children:r.resultat}),e.jsx(l.DataCell,{children:e.jsx(F,{dateString:r.vedtatt})}),e.jsx(l.DataCell,{children:r.nivaa})]},r.sakId))})]})});kn.__docgenInfo={description:"",methods:[],displayName:"SakerPanel",props:{saker:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  resultat?: string;
  registrert: string;
  sakId?: string;
  type?: string;
  vedtatt: string;
  valg?: string;
  undervalg?: string;
  nivaa?: string;
}`,signature:{properties:[{key:"resultat",value:{name:"string",required:!1}},{key:"registrert",value:{name:"string",required:!0}},{key:"sakId",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"vedtatt",value:{name:"string",required:!0}},{key:"valg",value:{name:"string",required:!1}},{key:"undervalg",value:{name:"string",required:!1}},{key:"nivaa",value:{name:"string",required:!1}}]}}],raw:"Sak[]"},description:""}}};const pn=({alleArbeidsforhold:n})=>e.jsxs(j,{gap:"space-16",children:[e.jsx("div",{}),!n&&e.jsx(q,{size:"small",children:e.jsx(s,{id:"ArbeidsforholdPanel.IngenArbeidsforhold"})}),n&&e.jsxs(l,{size:"small",children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"ArbeidsforholdPanel.Arbeidsgiver"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"ArbeidsforholdPanel.Inntekt"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"ArbeidsforholdPanel.Inntektsperiode"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"ArbeidsforholdPanel.Refusjon"})})]})}),e.jsx(l.Body,{children:n.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.DataCell,{children:r.arbeidsgiverOrgnr}),e.jsx(l.DataCell,{children:r.inntekt}),e.jsx(l.DataCell,{children:r.inntektsperiode?.termnavn}),e.jsx(l.DataCell,{children:r.refusjon?e.jsx(s,{id:"ArbeidsforholdPanel.Ja"}):e.jsx(s,{id:"ArbeidsforholdPanel.Nei"})})]},r.identdato))})]})]});pn.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdPanel",props:{alleArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  refusjon: boolean;
  refusjonTom?: string;
  identdato: string;
  opprinneligIdentdato: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}}]}}],raw:"VedtakArbeidsforhold[]"},description:""}}};const cn=({utbetalinger:n})=>e.jsxs(j,{gap:"space-16",children:[e.jsx("div",{}),!n&&e.jsx(q,{size:"small",children:e.jsx(s,{id:"UtbetalingerPanel.IngenUtbetalinger"})}),n&&e.jsxs(l,{size:"small",children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"UtbetalingerPanel.Periode"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"UtbetalingerPanel.Utbetalingsgrad"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"UtbetalingerPanel.Dagsats"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"UtbetalingerPanel.Refusjon"})})]})}),e.jsx(l.Body,{children:n.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.DataCell,{children:e.jsx(De,{dateStringFom:r.periode.fom,dateStringTom:r.periode.tom})}),e.jsx(l.DataCell,{children:r.utbetalingsgrad}),e.jsx(l.DataCell,{children:r.dagsats}),e.jsx(l.DataCell,{children:r.erRefusjon?e.jsx(s,{id:"UtbetalingerPanel.Ja"}):e.jsx(s,{id:"UtbetalingerPanel.Nei"})})]},r.identdato))})]})]});cn.__docgenInfo={description:"",methods:[],displayName:"UtbetalingerPanel",props:{utbetalinger:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
  arbeidsgiverOrgnr?: string;
  erRefusjon: boolean;
  dagsats: number;
  identdato: string;
  opprinneligIdentdato: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}}]}}],raw:"VedtakUtbetaling[]"},description:""}}};const vn=({vedtak:n})=>e.jsxs(L,{defaultValue:"utbetalinger",children:[e.jsxs(L.List,{children:[e.jsx(L.Tab,{value:"arbeidshforhold",label:e.jsx(s,{id:"VedtakDetaljerPanel.Arbeidsforhold"})}),e.jsx(L.Tab,{value:"utbetalinger",label:e.jsx(s,{id:"VedtakDetaljerPanel.Utbetalinger"})})]}),e.jsx(L.Panel,{value:"arbeidshforhold",children:e.jsx(pn,{alleArbeidsforhold:n.arbeidsforhold??void 0})}),e.jsx(L.Panel,{value:"utbetalinger",children:e.jsx(cn,{utbetalinger:n.utbetalinger??void 0})})]});vn.__docgenInfo={description:"",methods:[],displayName:"VedtakDetaljerPanel",props:{vedtak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  behandlingstema?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  registrert: string;
  saksbehandlerId: string;
  arbeidskategori?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  arbeidsforhold?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>;
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  gradering?: number;
  utbetalinger?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>;
}`,signature:{properties:[{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opphørFom",value:{name:"string",required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"registrert",value:{name:"string",required:!0}},{key:"saksbehandlerId",value:{name:"string",required:!0}},{key:"arbeidskategori",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  refusjon: boolean;
  refusjonTom?: string;
  identdato: string;
  opprinneligIdentdato: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>",required:!1}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fødselsdatoBarn",value:{name:"string",required:!1}},{key:"gradering",value:{name:"number",required:!1}},{key:"utbetalinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
  arbeidsgiverOrgnr?: string;
  erRefusjon: boolean;
  dagsats: number;
  identdato: string;
  opprinneligIdentdato: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>",required:!1}}]}},description:""}}};const yn=({alleVedtak:n,erForeldrepenger:r})=>{const[a,t]=y.useState();return e.jsxs(j,{gap:"space-40",children:[e.jsxs(l,{size:"small",children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.Identdato"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.Dekningsgrad"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.Periode"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.Arbeidskategori"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.OpphorFom"})}),r&&e.jsxs(e.Fragment,{children:[e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.FødselsdatoBarn"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.Gradering"})})]})]})}),e.jsx(l.Body,{children:n.map(i=>e.jsxs(l.Row,{onClick:()=>t(i),selected:i.identdato===a?.identdato,style:{cursor:"pointer"},children:[e.jsx(l.DataCell,{children:e.jsx(F,{dateString:i.identdato})}),e.jsx(l.DataCell,{children:i.dekningsgrad}),e.jsx(l.DataCell,{children:e.jsx(De,{dateStringFom:i.periode.fom,dateStringTom:i.periode.tom})}),e.jsx(l.DataCell,{children:i.arbeidskategori?.termnavn}),e.jsx(l.DataCell,{children:i.opphørFom&&e.jsx(F,{dateString:i.opphørFom})}),r&&e.jsxs(e.Fragment,{children:[e.jsx(l.DataCell,{children:i.fødselsdatoBarn&&e.jsx(F,{dateString:i.fødselsdatoBarn})}),e.jsx(l.DataCell,{children:i.gradering})]})]},i.identdato))})]}),a&&e.jsx(vn,{vedtak:a},a.identdato)]})};yn.__docgenInfo={description:"",methods:[],displayName:"VedtakPanel",props:{alleVedtak:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingstema?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  registrert: string;
  saksbehandlerId: string;
  arbeidskategori?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  arbeidsforhold?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>;
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  gradering?: number;
  utbetalinger?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>;
}`,signature:{properties:[{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opphørFom",value:{name:"string",required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"registrert",value:{name:"string",required:!0}},{key:"saksbehandlerId",value:{name:"string",required:!0}},{key:"arbeidskategori",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  refusjon: boolean;
  refusjonTom?: string;
  identdato: string;
  opprinneligIdentdato: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>",required:!1}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fødselsdatoBarn",value:{name:"string",required:!1}},{key:"gradering",value:{name:"number",required:!1}},{key:"utbetalinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
  arbeidsgiverOrgnr?: string;
  erRefusjon: boolean;
  dagsats: number;
  identdato: string;
  opprinneligIdentdato: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>",required:!1}}]}}],raw:"Vedtak[]"},description:""},erForeldrepenger:{required:!0,tsType:{name:"boolean"},description:""}}};const St="_container_aon2n_1",It={container:St},Tt=new Set(["AP","FØ"]),fn=({søkInfotrygdVedtak:n,isPending:r,isSuccess:a,infotrygdVedtak:t})=>{const i=C(),[d,o]=y.useState(),g=u=>{u&&_e(u)?(o(void 0),n({searchString:u})):o(i.formatMessage({id:"UtbetalingsdataPanel.UgyldigFnr"}))};return e.jsxs(j,{gap:"space-20",className:It.container,children:[e.jsx(I,{size:"large",level:"2",children:e.jsx(s,{id:"UtbetalingsdataPanel.Heading"})}),e.jsx("div",{children:e.jsx(re,{label:e.jsx(s,{id:"UtbetalingsdataPanel.Sok"}),variant:"primary",hideLabel:!1,size:"small",htmlSize:"12",error:d,onSearchClick:g,autoComplete:"off",children:e.jsx(re.Button,{type:"button",loading:r})})}),a&&t&&!d&&e.jsxs(e.Fragment,{children:[e.jsx(I,{size:"small",level:"3",children:t.saker.length>0||t.vedtakKjeder.length>0?e.jsx(s,{id:"UtbetalingsdataPanel.Resultat"}):e.jsx(s,{id:"UtbetalingsdataPanel.IngenSakerFunnet"})}),t.saker.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(I,{size:"xsmall",level:"3",children:e.jsx(s,{id:"UtbetalingsdataPanel.Saker"})}),e.jsx(kn,{saker:t.saker})]}),t.vedtakKjeder.length>0&&e.jsx(I,{size:"xsmall",level:"3",children:e.jsx(s,{id:"UtbetalingsdataPanel.Utbetalinger"})}),t.vedtakKjeder.map(u=>e.jsxs(X,{size:"small","aria-label":"default-demo",children:[e.jsx(X.Header,{children:e.jsx(X.Title,{size:"small",children:e.jsxs(b,{gap:"space-20",children:[e.jsx(F,{dateString:u.opprinneligIdentdato}),e.jsx("div",{children:u.behandlingstema.termnavn})]})})}),e.jsx(X.Content,{children:e.jsx(yn,{alleVedtak:u.vedtak,erForeldrepenger:Tt.has(u.behandlingstema.kode)})})]},u.opprinneligIdentdato))]})]})};fn.__docgenInfo={description:"",methods:[],displayName:"UtbetalingsdataPanel",props:{søkInfotrygdVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { searchString: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchString: string }",signature:{properties:[{key:"searchString",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},isPending:{required:!0,tsType:{name:"boolean"},description:""},isSuccess:{required:!0,tsType:{name:"boolean"},description:""},infotrygdVedtak:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  saker: Array<tjenester_infotrygd_InfotrygdVedtakDto_SakDto>;
  vedtakKjeder: Array<tjenester_infotrygd_InfotrygdVedtakDto_VedtakKjede>;
}`,signature:{properties:[{key:"saker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  resultat?: string;
  registrert: string;
  sakId?: string;
  type?: string;
  vedtatt: string;
  valg?: string;
  undervalg?: string;
  nivaa?: string;
}`,signature:{properties:[{key:"resultat",value:{name:"string",required:!1}},{key:"registrert",value:{name:"string",required:!0}},{key:"sakId",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"vedtatt",value:{name:"string",required:!0}},{key:"valg",value:{name:"string",required:!1}},{key:"undervalg",value:{name:"string",required:!1}},{key:"nivaa",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_SakDto>",required:!0}},{key:"vedtakKjeder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprinneligIdentdato: string;
  behandlingstema: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  vedtak: Array<tjenester_infotrygd_InfotrygdVedtakDto_Vedtak>;
}`,signature:{properties:[{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"vedtak",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingstema?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  registrert: string;
  saksbehandlerId: string;
  arbeidskategori?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  arbeidsforhold?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>;
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  gradering?: number;
  utbetalinger?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>;
}`,signature:{properties:[{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opphørFom",value:{name:"string",required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"registrert",value:{name:"string",required:!0}},{key:"saksbehandlerId",value:{name:"string",required:!0}},{key:"arbeidskategori",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  refusjon: boolean;
  refusjonTom?: string;
  identdato: string;
  opprinneligIdentdato: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>",required:!1}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fødselsdatoBarn",value:{name:"string",required:!1}},{key:"gradering",value:{name:"number",required:!1}},{key:"utbetalinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
  arbeidsgiverOrgnr?: string;
  erRefusjon: boolean;
  dagsats: number;
  identdato: string;
  opprinneligIdentdato: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Vedtak>",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_VedtakKjede>",required:!0}}]}},description:""}}};const _t={"UtbetalingsdataPanel.Heading":"Søk i Infotrygd","UtbetalingsdataPanel.Sok":"Fødselsnummer","UtbetalingsdataPanel.UgyldigFnr":"Oppgitt fødselsnummer er ikke gyldig","UtbetalingsdataPanel.Resultat":"Søkeresultat:","UtbetalingsdataPanel.IngenSakerFunnet":"Søkeresultat: Ingen saker funnet","UtbetalingsdataPanel.Saker":"Saker","UtbetalingsdataPanel.Utbetalinger":"Utbetalinger","VedtakPanel.Identdato":"Identdato","VedtakPanel.Dekningsgrad":"Dekningsgrad","VedtakPanel.Periode":"Periode","VedtakPanel.Arbeidskategori":"Arbeidskategori","VedtakPanel.OpphorFom":"Opphørsdato","VedtakPanel.FødselsdatoBarn":"Fødselsdato barn","VedtakPanel.Gradering":"Gradering","VedtakDetaljerPanel.Arbeidsforhold":"Arbeidsforhold","VedtakDetaljerPanel.Utbetalinger":"Utbetalinger","SakerPanel.Registrert":"Registrert","SakerPanel.Sak":"Sak","SakerPanel.Stonad":"Stønad","SakerPanel.Type":"Type","SakerPanel.Resultat":"Resultat","SakerPanel.Vedtatt":"Vedtatt","SakerPanel.Niva":"Nivå","ArbeidsforholdPanel.Arbeidsgiver":"Arbeidsgiver","ArbeidsforholdPanel.Inntekt":"Inntekt","ArbeidsforholdPanel.Inntektsperiode":"Inntektsperiode","ArbeidsforholdPanel.Refusjon":"Refusjon","ArbeidsforholdPanel.IngenArbeidsforhold":"Ingen arbeidsforhold","ArbeidsforholdPanel.Ja":"Ja","ArbeidsforholdPanel.Nei":"Nei","UtbetalingerPanel.Periode":"Periode","UtbetalingerPanel.Utbetalingsgrad":"Utbetalingsgrad","UtbetalingerPanel.Dagsats":"Dagsats","UtbetalingerPanel.Refusjon":"Refusjon","UtbetalingerPanel.IngenUtbetalinger":"Ingen utbetalinger","UtbetalingerPanel.Ja":"Ja","UtbetalingerPanel.Nei":"Nei"},Et=qe(_t),jn=n=>e.jsx(Ee,{value:Et,children:e.jsx(fn,{...n})});jn.__docgenInfo={description:"",methods:[],displayName:"UtbetalingsdataIs15Index",props:{søkInfotrygdVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { searchString: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchString: string }",signature:{properties:[{key:"searchString",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},isPending:{required:!0,tsType:{name:"boolean"},description:""},isSuccess:{required:!0,tsType:{name:"boolean"},description:""},infotrygdVedtak:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  saker: Array<tjenester_infotrygd_InfotrygdVedtakDto_SakDto>;
  vedtakKjeder: Array<tjenester_infotrygd_InfotrygdVedtakDto_VedtakKjede>;
}`,signature:{properties:[{key:"saker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  resultat?: string;
  registrert: string;
  sakId?: string;
  type?: string;
  vedtatt: string;
  valg?: string;
  undervalg?: string;
  nivaa?: string;
}`,signature:{properties:[{key:"resultat",value:{name:"string",required:!1}},{key:"registrert",value:{name:"string",required:!0}},{key:"sakId",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"vedtatt",value:{name:"string",required:!0}},{key:"valg",value:{name:"string",required:!1}},{key:"undervalg",value:{name:"string",required:!1}},{key:"nivaa",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_SakDto>",required:!0}},{key:"vedtakKjeder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprinneligIdentdato: string;
  behandlingstema: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  vedtak: Array<tjenester_infotrygd_InfotrygdVedtakDto_Vedtak>;
}`,signature:{properties:[{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"vedtak",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingstema?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  registrert: string;
  saksbehandlerId: string;
  arbeidskategori?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  arbeidsforhold?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>;
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  gradering?: number;
  utbetalinger?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>;
}`,signature:{properties:[{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opphørFom",value:{name:"string",required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"registrert",value:{name:"string",required:!0}},{key:"saksbehandlerId",value:{name:"string",required:!0}},{key:"arbeidskategori",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  refusjon: boolean;
  refusjonTom?: string;
  identdato: string;
  opprinneligIdentdato: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>",required:!1}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fødselsdatoBarn",value:{name:"string",required:!1}},{key:"gradering",value:{name:"number",required:!1}},{key:"utbetalinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
  arbeidsgiverOrgnr?: string;
  erRefusjon: boolean;
  dagsats: number;
  identdato: string;
  opprinneligIdentdato: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Vedtak>",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_VedtakKjede>",required:!0}}]}},description:""}}};const qt="_content_11o11_1",At={content:qt},Ot=({headerHeight:n,navAnsatt:r})=>{const a=C(),{søkInfotrygd:t}=Nn(),{addErrorMessage:i,removeErrorMessages:d}=Wn(),[o,g]=y.useState(!0),u=()=>{g(!1)};y.useEffect(()=>{o||i({type:Xn.GENERAL_ERROR,message:a.formatMessage({id:"Los.IkkeTilgjengelig"})})},[o]);const k=Tn(),p=(T,_)=>{k(ir(T,_))},m=_n();y.useEffect(()=>{m.pathname==="/"&&d()},[m]);const{mutate:v,isPending:h,isSuccess:f,data:x}=V({mutationFn:T=>t(T.searchString)});return e.jsx("div",{className:At.content,style:{margin:`${n}px auto 0`},children:e.jsxs(En,{children:[e.jsx(w,{path:"/",element:o?e.jsx($n,{setLosErIkkeTilgjengelig:u,åpneFagsak:p,navAnsatt:me(r)}):e.jsx(nr,{})}),e.jsx(w,{path:rr,element:e.jsx(mn,{navAnsatt:r})}),e.jsx(w,{path:tr,element:e.jsx(jn,{søkInfotrygdVedtak:v,isPending:h,isSuccess:f,infotrygdVedtak:x})}),e.jsx(w,{path:ar,element:e.jsx(Zn,{children:e.jsx(er,{})})}),e.jsx(w,{path:sr,element:e.jsx(Qn,{})}),e.jsx(w,{path:"*",element:e.jsx(Pn,{renderSomLenke:T=>e.jsx(qn,{to:"/",children:T})})})]})})};Ot.__docgenInfo={description:`Home

Wrapper for sideinnholdet som vises under header.`,methods:[],displayName:"Home",props:{headerHeight:{required:!0,tsType:{name:"number"},description:""},navAnsatt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  navn: string;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  kanOverstyre: boolean;
  kanOppgavestyre: boolean;
  kanBehandleKode6: boolean;
  funksjonellTid?: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!1}}]}},description:""}}};export{Ot as H};
