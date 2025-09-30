import{r as y,l as A,t as jn,v as hn,m as Ie,n as bn,j as e,x as N,y as xn,z as Sn,o as C,N as _e,A as de,s as ue,P as Te,b as Ee,u as In,q as _n,g as Tn,R as En,a as w,L as qn}from"./iframe-B0rs5mSc.js";import{u as qe,C as Ae,k as X,a as re,w as ve,b as An,S as On,R as Rn,c as V}from"./index.es-Cp6gVENV.js";import{A as Z,T as Dn,G as F,Q as Oe,B as Vn,r as Re}from"./index.es-CnwXS7-r.js";import{n as ge,u as De,a as Nn}from"./fagsakApi-DNzcm8DU.js";import{E as Fn,N as Pn}from"./IngenBehandlingValgtPanel-CbnuVFFb.js";import{u as Jn,d as se,B as q,e as wn,f as Ln,L as ee,M as B,a as I,V as j,H as b,b as E,E as Kn,D as ie,g as Cn}from"./VStack-D6SAjkvB.js";import{M as s}from"./message-53Aw4P6w.js";import{S as Ve,a as ne,C as Ne}from"./index.es-CZthaW6n.js";import{S as H}from"./Spacer-BjXseebZ.js";import{L as Fe}from"./Link-B-V9fx3y.js";import{S as Un,a as Gn}from"./DocPencil-Cs6MMa2a.js";import{q as Bn,k as Hn}from"./index-DMdEqgU2.js";import{S as Mn}from"./Buildings3-BCReWOWh.js";import{S as Pe}from"./ExternalLink-BxVp3jFO.js";import{C as Je,a as we}from"./Checkbox-CW3ugs7G.js";import{S as Le,a as zn,b as $n}from"./FagsakProfileIndex-D8tTsQ2E.js";import{T as M}from"./index-B9wlCCrQ.js";import{F as Q}from"./VisittkortSakIndex-CVo1v5jv.js";import{c as Yn}from"./Popover-CRDyh1xr.js";import{T as l}from"./Table-Cxu1QUr3.js";import{T as L}from"./BehandlingSupportIndex-eO4JxE3x.js";import{E as W}from"./RisikoklassifiseringIndex-DzPIZZc6.js";import{E as Qn}from"./errorType-CR8mmZf7.js";import{A as Wn}from"./AktørIndex-CkC5B0cn.js";import{R as Xn}from"./useBehandlingPollingOperasjoner-DcyXChjy.js";import{F as Zn}from"./FagsakIndex-BzrR3s8C.js";import{F as er}from"./FagsakSearchIndex-DxfYRtx7.js";import{j as nr,u as rr,f as tr,a as ar,g as sr}from"./paths-BymUWMa5.js";var ir=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(n);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(a[t[i]]=n[t[i]]);return a};const me=y.forwardRef((n,r)=>{var{title:a,titleId:t}=n,i=ir(n,["title","titleId"]);let d=Jn();return d=a?t||"title-"+d:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":d},i),a?A.createElement("title",{id:d},a):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.75 5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-3 6a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h.75V21a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75h-.75v-5.5h4.5v5.5h-.75a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-4.25H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75z",clipRule:"evenodd"}))});y.createContext(null);const[lr,aa,or,dr]=Yn(),[ur,Ke]=jn({name:"ToggleGroupContext",hookName:"useToggleGroupContext",providerName:"ToggleGroupProvider",errorMessage:"<ToggleGroup.Item> needs to be wrapped within <ToggleGroup>"});function gr({value:n,disabled:r=!1,onFocus:a,onClick:t,onKeyDown:i},d){const{setSelectedValue:o,setFocusedValue:g,selectedValue:u,focusedValue:k}=Ke(),{register:p,descendants:m}=dr({disabled:r,value:n}),v=n===u,h=()=>g(n),f=y.useCallback(x=>{const _=m.values().findIndex(c=>c.value===k),te={ArrowLeft:()=>{var c;const S=m.prevEnabled(_,!1);(c=S?.node)===null||c===void 0||c.focus()},ArrowRight:()=>{var c;const S=m.nextEnabled(_,!1);(c=S?.node)===null||c===void 0||c.focus()},Home:()=>{var c;const S=m.firstEnabled();(c=S?.node)===null||c===void 0||c.focus()},End:()=>{var c;const S=m.lastEnabled();(c=S?.node)===null||c===void 0||c.focus()}},ae=x.shiftKey||x.ctrlKey||x.altKey||x.metaKey,Y=te[x.key];Y&&!ae?(x.preventDefault(),Y(x)):x.key==="Tab"&&u&&setTimeout(()=>g(u))},[m,k,u,g]);return{ref:hn([p,d]),isSelected:v,isFocused:k===n,onClick:se(t,()=>u!==n&&o(n)),onFocus:r?void 0:se(a,h),onKeyDown:se(i,f)}}var mr=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(n);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(a[t[i]]=n[t[i]]);return a};const kr=y.forwardRef((n,r)=>{var{className:a,children:t,icon:i,label:d,value:o,onClick:g,onFocus:u,onKeyDown:k}=n,p=mr(n,["className","children","icon","label","value","onClick","onFocus","onKeyDown"]);const{cn:m}=Ie(),v=gr({value:o,onClick:g,onFocus:u,disabled:!1,onKeyDown:k},r),h=Ke();return A.createElement("button",Object.assign({},p,{ref:v.ref,className:m("navds-toggle-group__button",a),type:"button",role:"radio","aria-checked":v.isSelected,"data-selected":v.isSelected,tabIndex:v.isFocused?0:-1,onClick:v.onClick,onFocus:v.onFocus,onKeyDown:v.onKeyDown}),A.createElement(q,{as:"span",className:m("navds-toggle-group__button-inner"),size:h?.size},t??A.createElement(A.Fragment,null,i,d)))});function pr({onChange:n,value:r,defaultValue:a=""}){const[t,i]=y.useState(a),[d,o]=wn({defaultValue:a,value:r,onChange:n});return y.useEffect(()=>{r!=null&&i(r)},[r]),{selectedValue:d,setSelectedValue:o,focusedValue:t,setFocusedValue:i}}var cr=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(n);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(a[t[i]]=n[t[i]]);return a};const ke=y.forwardRef((n,r)=>{var{className:a,children:t,onChange:i,size:d="medium",label:o,value:g,defaultValue:u,variant:k,fill:p=!1,"data-color":m}=n,v=cr(n,["className","children","onChange","size","label","value","defaultValue","variant","fill","data-color"]);const{cn:h}=Ie(),f=bn(!1),x=or(),_=pr({defaultValue:u,value:g,onChange:i}),T=Object.assign(Object.assign({},_),{size:d}),U=Ln();!g&&!u&&console.error("ToggleGroup without value or defaultvalue is not allowed"),!g&&!u&&console.error("ToggleGroup needs either a value or defaultValue");let R;return f?.isDarkside?R=k:R=k??"action",A.createElement(lr,{value:x},A.createElement(ur,Object.assign({},T),A.createElement("div",{className:h("navds-toggle-group__wrapper",a,{"navds-toggle-group__wrapper--fill":p}),"data-color":m??vr(R)},o&&A.createElement(ee,{as:"div",size:d,className:h("navds-toggle-group__label"),id:U},o),A.createElement("div",Object.assign({"aria-labelledby":o?U:void 0},v,{ref:r,className:h("navds-toggle-group",`navds-toggle-group--${d}`,{[`navds-toggle-group--${R}`]:R}),role:"radiogroup"}),t))))});function vr(n){switch(n){case"action":return"accent";case"neutral":return"neutral";default:return}}ke.Item=kr;const Ce=({hentJournalpost:n,lukkModal:r,erÅpen:a,harSøktOgFunnetIngenMatch:t})=>{const[i,d]=y.useState(!1),o=qe({defaultValues:{}});return e.jsxs(B,{open:a,onClose:r,"aria-label":"journalpost-modal",children:[e.jsx(B.Header,{children:e.jsx(I,{size:"medium",level:"2",children:e.jsx(s,{id:"Journalpost.Søk.Tittel"})})}),e.jsx(B.Body,{children:e.jsxs(j,{gap:"space-8",children:[e.jsx(Ae,{formMethods:o,onSubmit:g=>{d(!0),n(g.journalpostId),d(!1)},children:e.jsxs(b,{gap:"space-8",align:"end",children:[e.jsx(X,{description:e.jsx(s,{id:"Journalpost.Søk.KunTall"}),label:e.jsx(s,{id:"Journalpost.Søk.JournalpostID"}),name:"journalpostId",control:o.control,validate:[N,xn,Sn(9)],size:"medium"}),e.jsx(E,{loading:i,icon:e.jsx(Ve,{"aria-hidden":!0}),children:e.jsx(s,{id:"Journalpost.Søk.Finn"})})]})}),t&&e.jsx(q,{children:e.jsx(s,{id:"Journalpost.Søk.IngenTreffEllerManglerTilgang"})})]})})]})};Ce.__docgenInfo={description:"JournalpostSøkModal - Modal for å søke etter en journalpost ved ID",methods:[],displayName:"JournalpostSøkModal",props:{hentJournalpost:{required:!0,tsType:{name:"signature",type:"function",raw:"(journalpostId: string) => void",signature:{arguments:[{type:{name:"string"},name:"journalpostId"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erÅpen:{required:!0,tsType:{name:"boolean"},description:""},harSøktOgFunnetIngenMatch:{required:!0,tsType:{name:"boolean"},description:""}}};const yr="_header_vajp4_1",fr={header:yr},Ue=({valgtJournalpost:n,hentJournalpost:r,avbrytVisningAvJournalpost:a,harHentetFerdigJournalpost:t,antallOppgaver:i})=>{const[d,o]=y.useState(!1);return y.useEffect(()=>{n&&o(!1)},[n]),e.jsxs(b,{className:fr.header,children:[e.jsxs("div",{children:[e.jsxs(b,{gap:"space-32",align:"center",children:[n&&e.jsxs(q,{as:Fe,size:"large",onClick:a,children:[e.jsx(Un,{height:"28px",width:"28px"}),e.jsx(s,{id:"Journalforing.Oversikt"})]}),e.jsx(I,{size:"medium",level:"2",children:e.jsx(s,{id:"Journalforing.Tittel"})})]}),!n&&i!=null&&i>0&&e.jsx(q,{children:e.jsx(s,{id:"Journalforing.Antall.Oppgaver",values:{antall:i}})})]}),e.jsx(H,{}),!n&&e.jsxs(e.Fragment,{children:[e.jsx(E,{variant:"secondary",type:"button",icon:e.jsx(Ve,{"aria-hidden":!0,height:"32px",width:"32px"}),onClick:()=>{o(!0)},children:e.jsx(s,{id:"Journalpost.Søk.Tittel"})}),e.jsx(Ce,{hentJournalpost:r,lukkModal:()=>{o(!1)},erÅpen:d,harSøktOgFunnetIngenMatch:t&&!n})]})]})};Ue.__docgenInfo={description:"Header - Journalføringsheader, inneholder tittel, tilbakeknapp og søkeknapp for journalpost",methods:[],displayName:"JournalføringHeader",props:{hentJournalpost:{required:!0,tsType:{name:"signature",type:"function",raw:"(journalpostId: string) => void",signature:{arguments:[{type:{name:"string"},name:"journalpostId"}],return:{name:"void"}}},description:""},avbrytVisningAvJournalpost:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},valgtJournalpost:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},harHentetFerdigJournalpost:{required:!0,tsType:{name:"boolean"},description:""},antallOppgaver:{required:!1,tsType:{name:"number"},description:""}}};const P=Hn.extend({retry:0,timeout:15e3,hooks:{beforeRequest:[n=>{const r=`CallId_${Date.now()}_${Math.floor(Math.random()*1e9)}`;n.headers.set("Nav-Callid",r)}]}}),D=n=>n,O={ALLE_JOURNAL_OPPGAVER:D("/fpfordel/api/journalfoering/oppgaver"),HENT_JOURNALPOST_DETALJER:D("/fpfordel/api/journalfoering/oppgave/detaljer"),FERDIGSTILL_JOURNALFØRING:D("/fpfordel/api/sak/ferdigstill"),KNYTT_JOURNALPOST_TIL_ANNEN_SAK:D("/fpfordel/api/sak/knyttTilAnnenSak"),OPPDATER_MED_BRUKER:D("/fpfordel/api/journalfoering/bruker/oppdater"),HENT_BRUKER:D("/fpfordel/api/journalfoering/bruker/hent"),RESERVER_OPPGAVE:D("/fpfordel/api/journalfoering/oppgave/reserver"),FLYTT_OPPGAVE_TIL_GOSYS:D("/fpfordel/api/journalfoering/oppgave/tilgosys")},Ge=n=>Bn({queryKey:[O.ALLE_JOURNAL_OPPGAVER,n],queryFn:()=>P.get(O.ALLE_JOURNAL_OPPGAVER,{searchParams:{ident:n??""}}).json(),enabled:n!==void 0,staleTime:1/0}),jr=n=>P.get(O.HENT_JOURNALPOST_DETALJER,{searchParams:{journalpostId:n}}).json(),hr=n=>P.post(O.FERDIGSTILL_JOURNALFØRING,{json:n}).json(),br=n=>P.post(O.KNYTT_JOURNALPOST_TIL_ANNEN_SAK,{json:n}).json(),xr=n=>P.post(O.OPPDATER_MED_BRUKER,{json:n}).json(),Sr=n=>P.post(O.HENT_BRUKER,{json:{fødselsnummer:n}}).json(),Ir=n=>P.post(O.RESERVER_OPPGAVE,{json:n}).json(),_r=n=>P.post(O.FLYTT_OPPGAVE_TIL_GOSYS,{json:{journalpostId:n}}).json(),Tr=new Set(["FEILREGISTRERT","JOURNALFOERT","EKSPEDERT","FERDIGSTILT"]),z=n=>!!n&&Tr.has(n),Er="_ikon_8fc4d_1",qr="_ikonKol_8fc4d_7",$={ikon:Er,ikonKol:qr},Ar=n=>{const r=n.avsender.id;return r&&r.length===9?e.jsx(Mn,{className:$.ikon}):e.jsx(me,{className:$.ikon})},le=({navn:n,id:r,ikon:a,title:t})=>e.jsxs(j,{gap:"space-8",children:[t&&e.jsx(I,{size:"small",level:"4",children:t}),e.jsxs(b,{gap:"space-16",children:[e.jsx("div",{className:$.ikonKol,children:a}),e.jsxs("div",{children:[e.jsx(q,{children:n}),e.jsxs(b,{gap:"space-4",align:"center",children:[e.jsx(q,{children:r}),e.jsx(Ne,{copyText:r,variant:"action",size:"small"})]})]})]})]}),Be=({journalpost:n,hentForhåndsvisningAvSøker:r,skalKunneEndreSøker:a,brukerTilForhåndsvisning:t,knyttSøkerTilJournalpost:i,lasterBruker:d})=>{const o=C(),[g,u]=y.useState(void 0),[k,p]=y.useState(void 0),m=()=>{k&&i({journalpostId:n.journalpostId,fødselsnummer:k})},v=f=>{f?_e(f)?(p(f),u(void 0),r(f)):u(o.formatMessage({id:"ValgtOppgave.Søk.BrukerFeil"},{fødselsnummer:f})):u(void 0)},h=f=>{if(f.key==="Enter"){const x=f.currentTarget.value;v(x)}};return e.jsxs(j,{gap:"space-16",children:[a&&e.jsxs(j,{gap:"space-8",children:[e.jsx(I,{size:"small",level:"4",children:e.jsx(s,{id:"ValgtOppgave.Søker"})}),e.jsx(Z,{variant:"warning",size:"small",children:e.jsx(s,{id:"ValgtOppgave.Søk.Bruker"})}),e.jsx(ne,{label:o.formatMessage({id:"ValgtOppgave.Søk.FinnBruker"}),onKeyDown:h,onSearchClick:v,hideLabel:!1,children:e.jsx(ne.Button,{type:"button",loading:d})}),g&&e.jsx(Kn,{children:g}),t&&e.jsxs(j,{gap:"space-16",children:[e.jsx(le,{navn:t.navn,id:t.fødselsnummer,ikon:e.jsx(me,{className:$.ikon})}),e.jsx(E,{type:"button",onClick:m,children:e.jsx(s,{id:"ValgtOppgave.Søk.KnyttTil"})})]})]}),n.bruker?.navn&&e.jsx(le,{navn:n.bruker.navn,id:n.bruker.fnr,ikon:e.jsx(me,{className:$.ikon}),title:e.jsx(s,{id:"ValgtOppgave.Søker"})}),n.avsender.navn&&e.jsx(le,{navn:n.avsender.navn,id:n.avsender.id,ikon:Ar(n),title:e.jsx(s,{id:"ValgtOppgave.Avsender"})})]})};Be.__docgenInfo={description:"BrukerAvsenderPanel - Inneholder detaljer om bruker og avsender",methods:[],displayName:"BrukerAvsenderPanel",props:{journalpost:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"void"}}},description:""},lasterBruker:{required:!0,tsType:{name:"boolean"},description:""}}};const Or={ANKE:"Anke",ANNET:"Annet",BEKREFTELSE_ARBEIDSGIVER:"Bekreftelse fra arbeidsgiver",BEKREFTELSE_STUDIESTED_SKOLE:"Bekreftelse fra studiested/skole",BEKREFTELSE_FERIE:"Bekreftelse på avtalt ferie",BEKREFTELSE_KVALIFISERINGSPROGRAM:"Bekreftelse på deltakelse i kvalifiseringsprogrammet",BEKREFTELSE_OPPHOLDSTILLATELSE:"Bekreftelse på oppholdstillatelse",BEKREFTELSE_FORSVAR_SIVILFORSVAR:"Bekreftelse på øvelse eller tjeneste i Forsvaret eller Sivilforsvaret",BEKREFTELSE_TLTAK_NAV:"Bekreftelse på tiltak i regi av Arbeids- og velferdsetaten",BEKREFTELSE_FUNKSJONSNEDSETTELSE:"Beskrivelse av funksjonsnedsettelse",DOKUMENTASJON_ALENEOMSORG:"Dokumentasjon av aleneomsorg",DOKUMENTASJON_SØK_TILBAKE_I_TID:"Dokumentasjon av begrunnelse for hvorfor man søker tilbake i tid",DOKUMENTASJON_OVERTAKELSE_OMSORG:"Dokumentasjon av dato for overtakelse av omsorg",DOKUMENTASJON_INTRODUKSJONSPROGRAM:"Dokumentasjon av deltakelse i introduksjonsprogrammet",DOKUMENTASJON_ETTERLØNN_SLUTTVEDERLAG:"Dokumentasjon av etterlønn/sluttvederlag",DOKUMENTASJON_INNLEGELSE_HELSEINSTITUSJON:"Dokumentasjon av innleggelse i helseinstitusjon",DOKUMENTASJON_FORSVAR_SIVILFORSVAR:"Dokumentasjon av militær- eller siviltjeneste",DOKUMENTASJON_MOR_AKTIVITET:"Dokumentasjon av mors utdanning, arbeid eller sykdom",FØDSELSATTEST:"Fødselsattest",KLAGE:"Klage",KOPI_AV_SKATTEMELDING:"Kopi av skattemelding",RESULTATREGNSKAP:"Resultatregnskap",RETTSKJENNELSE_TRYGDERETTEN:"Rettskjennelse fra Trygderetten",SØKNAD_FORELDREPEMGER_ENDRING_KVOTE:"Søknad om endring av uttak av foreldrepenger eller overføring av kvote",SØKNAD_ENGANGSSTØNAD_ADOPSJON:"Søknad om engangsstønad ved adopsjon",SØKNAD_ENGANGSSTØNAD_FØDSEL:"Søknad om engangsstønad ved fødsel",SØKNAD_FORELDREPENGER_ADOPSJON:"Søknad om foreldrepenger ved adopsjon",SØKNAD_FORELDREPENGER_FØDSEL:"Søknad om foreldrepenger ved fødsel",SØKNAD_SVANGERSKAPSPENGER:"Søknad om svangerskapspenger",TERMINBEKREFTELSE:"Terminbekreftelse",TILRETTELEGGING_OMPLASERING_GRAVIDITET:"Tilrettelegging/omplassering ved graviditet",UTTALELSE_TILBAKEKREVING:"Uttalelse tilbakekreving"},He=Object.values(Or),Rr=new Set(["ALTINN","NAV_NO"]),Me=n=>!!n&&!Rr.has(n),Dr="_dokContainer_efyi8_1",Vr="_externalLinkIcon_efyi8_6",Nr="_editButton_efyi8_11",Fr="_input_efyi8_16",K={dokContainer:Dr,externalLinkIcon:Vr,editButton:Nr,input:Fr},ze=({dokument:n,docFieldIndex:r,journalpost:a,dokumentTittelStyresAvJournalpostTittel:t})=>{const{control:i}=re(),d=C(),[o,g]=y.useState(!n.tittel),[u,k]=y.useState(!1),p=e.jsx(E,{as:"a",href:n.lenke,target:"_blank",rel:"noreferrer",variant:"tertiary",title:d.formatMessage({id:"DokumentDetaljer.ExternalLink"}),icon:e.jsx(Pe,{"aria-hidden":!0,className:K.externalLinkIcon})});return t?e.jsxs(b,{className:K.dokContainer,gap:"0 4",align:"center",wrap:!1,children:[e.jsx(X,{name:"journalpostTittel",control:i,validate:[N,de],readOnly:t,maxLength:200}),e.jsx(H,{}),p]}):e.jsxs(b,{className:K.dokContainer,gap:"0 4",align:"center",wrap:!1,children:[o&&e.jsxs(e.Fragment,{children:[u&&e.jsx(X,{name:`journalpostDokumenter.${r}.tittel`,control:i,hideLabel:!0,validate:[N,de],readOnly:!1,className:K.input,maxLength:100}),!u&&e.jsx(ve,{name:`journalpostDokumenter.${r}.tittel`,control:i,hideLabel:!0,readOnly:!1,label:void 0,validate:[N],className:K.input,selectValues:He.map(m=>e.jsx("option",{value:m,children:m},m))}),e.jsx(Je,{legend:"Brukt fritekst",hideLegend:!0,onChange:()=>{k(!u)},value:[u],children:e.jsx(we,{value:!0,size:"small",children:e.jsx(s,{id:"Journal.Tittel.Fritekst"})})})]}),!o&&e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:n.tittel}),Me(a.kanal)&&e.jsx(E,{icon:e.jsx(Le,{"aria-hidden":!0}),className:K.editButton,onClick:()=>{g(!o)},type:"button",variant:"tertiary"})]}),e.jsx(H,{}),p]})};ze.__docgenInfo={description:"DokumentDetaljer - Inneholder detaljer om et dokument på journalposten",methods:[],displayName:"DokumentDetaljer"};const Pr=[],Jr=n=>n.map(r=>({dokumentId:r.dokumentId,tittel:r.tittel})),$e=(n,r)=>{const a=r.find(t=>t.dokumentId===n);if(!a)throw new Error(`Finner ikke dokument med id ${n}`);return a},wr=n=>{if(!n.tittel)throw new Error(`Mangler dokumenttittel for dokument med id  ${n.dokumentId}`);return n.tittel},Lr=(n,r)=>$e(n.dokumentId,r).tittel!==n.tittel,Kr=(n,r)=>n.journalpostDokumenter?n.journalpostDokumenter.filter(a=>Lr(a,r)).map(a=>({dokumentId:a.dokumentId,tittel:wr(a)})):[],Ye=({journalpost:n,dokumentTittelStyresAvJournalpostTittel:r})=>{const{control:a}=re(),{fields:t}=An({control:a,name:"journalpostDokumenter"});return e.jsx(j,{gap:"space-8",children:t.map((i,d)=>e.jsx(ze,{dokument:$e(i.dokumentId,n.dokumenter||Pr),docFieldIndex:d,journalpost:n,dokumentTittelStyresAvJournalpostTittel:r},i.id))})};Ye.__docgenInfo={description:"DokumentForm - Inneholder form behandling av dokumenter og setter opp visning av hvert dokument",methods:[],displayName:"DokumentForm"};const Cr="_inputField_18uvi_1",he={inputField:Cr},Qe=({journalpost:n,readOnly:r})=>{const[a,t]=y.useState(!n.tittel),[i,d]=y.useState(!1),{control:o}=re();return e.jsxs(b,{gap:"0 4",align:"center",children:[a&&e.jsxs(e.Fragment,{children:[i&&e.jsx(X,{name:"journalpostTittel",control:o,validate:[N,de],readOnly:r,maxLength:200,hideLabel:!0,className:he.inputField}),!i&&e.jsx(ve,{name:"journalpostTittel",control:o,readOnly:r,label:void 0,hideLabel:!0,className:he.inputField,validate:[N],selectValues:He.map(g=>e.jsx("option",{value:g,children:g},g))}),e.jsx(Je,{legend:"Brukt fritekst",hideLegend:!0,onChange:()=>{d(!i)},value:[i],children:e.jsx(we,{value:!0,children:e.jsx(s,{id:"Journal.Tittel.Fritekst"})})})]}),!a&&e.jsxs(e.Fragment,{children:[e.jsx(I,{size:"large",level:"3",children:n.tittel}),!r&&Me(n.kanal)&&e.jsx(E,{icon:e.jsx(Le,{"aria-hidden":!0}),onClick:()=>{t(!a)},type:"button",variant:"tertiary"})]})]})};Qe.__docgenInfo={description:"JournalpostTittelForm - Inneholder tittel på journalpost og formkomponent for å endre denne",methods:[],displayName:"JournalpostTittelForm"};const We=({oppgave:n,reserverOppgave:r,navAnsatt:a})=>{const t=()=>{const i=n.reservertAv?"":a.brukernavn;r({journalpostId:n.journalpostId,reserverFor:i})};return e.jsxs(e.Fragment,{children:[n.reservertAv&&a.brukernavn===n.reservertAv&&e.jsxs(q,{children:[e.jsx(s,{id:"Oppgavetabell.SakenErTattAv"}),e.jsx(M,{size:"small",variant:"alt3",style:{marginLeft:"0.5rem"},children:e.jsx(s,{id:"Oppgavetabell.Meg"})}),e.jsx(E,{variant:"tertiary",size:"small",onClick:t,style:{marginLeft:"0.5rem"},children:e.jsx(s,{id:"Oppgavetabell.FjernMeg"})})]}),n.reservertAv&&a.brukernavn!==n.reservertAv&&e.jsxs(q,{children:[e.jsx(s,{id:"Oppgavetabell.SakenErTattAv"}),e.jsx(M,{size:"small",variant:"alt3",style:{marginLeft:"0.5rem"},children:n.reservertAv})]}),!n.reservertAv&&e.jsx("div",{children:e.jsx(E,{variant:"tertiary",size:"small",onClick:t,children:e.jsx(s,{id:"Oppgavetabell.SettPåMeg"})})})]})};We.__docgenInfo={description:"Reservasjonspanel - Inneholder informasjon om hvem som har reservert saken og mulighet for å reservere saken på saksbehandler",methods:[],displayName:"Reservasjonspanel"};const Ur="_sakContainer_xnl10_1",Gr="_externalLinkIcon_xnl10_5",be={sakContainer:Ur,externalLinkIcon:Gr},pe=({sak:n})=>{const r=zr(n.familieHendelseJf),a=C();return e.jsxs(b,{className:be.sakContainer,gap:"0 4",align:"center",wrap:!1,children:[e.jsx("div",{children:e.jsxs(j,{gap:"space-4",children:[e.jsxs(b,{gap:"0 2",align:"center",children:[e.jsx(ee,{children:e.jsx(s,{id:"Journal.Sak.Ytelse",values:{ytelseType:n.ytelseType}})}),e.jsxs(b,{align:"center",children:[e.jsx(ee,{children:n.saksnummer}),e.jsx(Ne,{copyText:n.saksnummer,variant:"action",size:"small"})]})]}),e.jsxs(j,{gap:"space-8",children:[e.jsxs(b,{gap:"space-8",children:[e.jsx(ie,{children:e.jsx(s,{id:"Journal.Sak.OpprettetDato",values:{br:e.jsx("br",{}),opprettetDato:ue(n.opprettetDato)}})}),n.førsteUttaksdato&&e.jsx(ie,{children:e.jsx(s,{id:"Journal.Sak.FørsteUttak",values:{br:e.jsx("br",{}),førsteUttak:ue(n.førsteUttaksdato)}})}),r&&e.jsx(ie,{children:r})]}),e.jsx("div",{children:$r(n.status)})]})]})}),e.jsx(H,{}),e.jsx(E,{as:"a",href:Br(n.saksnummer),target:"_blank",rel:"noreferrer",variant:"tertiary",title:a.formatMessage({id:"DokumentDetaljer.ExternalLink"}),icon:e.jsx(Pe,{className:be.externalLinkIcon})})]})},Br=n=>`/fagsak/${n}/`,Hr=n=>{switch(n){case"AVSLU":return{variant:"neutral",size:"xsmall",children:e.jsx(s,{id:"Journal.Sak.Avsluttet"})};case"LOP":return{variant:"warning",size:"xsmall",children:e.jsx(s,{id:"Journal.Sak.Løpende"})};case"OPPR":return{variant:"alt1",size:"xsmall",children:e.jsx(s,{id:"Journal.Sak.Opprettet"})};case"UBEH":return{variant:"alt2",size:"xsmall",children:e.jsx(s,{id:"Journal.Sak.UnderBehandling"})};default:return null}},Mr=n=>{switch(n){case Q.ADOPSJON:return"Journal.Sak.FamAdopsjon";case Q.FODSEL:return"Journal.Sak.FamFødsel";case Q.TERMIN:return"Journal.Sak.FamTermin";case Q.OMSORG:return"Journal.Sak.FamOmsorg";default:throw new Error(`Ukjent familiehendelse ${n}`)}},zr=n=>{if(!n?.familihendelseType||!n.familiehHendelseDato)return null;const r=Mr(n.familihendelseType);return e.jsx(s,{id:r,values:{br:e.jsx("br",{}),famDato:ue(n.familiehHendelseDato)}})},$r=n=>{const r=Hr(n);return r?e.jsx(M,{...r}):null};pe.__docgenInfo={description:"SakDetaljer - Inneholder detaljer om en sak som kan knyttes til journalposten",methods:[],displayName:"SakDetaljer"};const Yr="_ytelseSelect_134hn_1",Qr={ytelseSelect:Yr},Wr=[],ye="LAG_NY_SAK",fe="LAG_GENERELL_SAK",ce="saksnummerValg",Xe="ytelsetypeValg",Xr=["ES","FP","SVP"],Zr=(n,r)=>{const a=n[ce];if(a===fe)return{opprettSak:{aktørId:ge(r.bruker?.aktørId),sakstype:"GENERELL"}};if(a===ye){const t=n[Xe];if(!t)throw new Error("Kan ikke journalføre på ny sak uten ytelse");return{opprettSak:{ytelseType:t,aktørId:ge(r.bruker?.aktørId),sakstype:"FAGSAK"}}}return{saksnummer:a}},et=n=>{const a=(n.fagsaker||Wr).map(t=>({label:e.jsxs(e.Fragment,{children:[t.saksnummer," ",e.jsx(s,{id:"Journal.Sak.Ytelse",tagName:"b",values:{ytelseType:t.ytelseType}})]}),disabled:t.saksnummer===n.eksisterendeSaksnummer,value:t.saksnummer}));return a.push({label:e.jsx(s,{id:"Journal.Sak.Ny"}),value:ye,disabled:!n.kanOppretteSak}),z(n.tilstand)||a.push({label:e.jsx(s,{id:"Journal.Sak.Generell"}),value:fe,disabled:!1}),a},Ze=({journalpost:n,isSubmittable:r,avbrytVisningAvJournalpost:a,erKlarForJournalføring:t,erLokalOppgave:i,flyttTilGosys:d})=>{const o=C(),g=n.fagsaker&&n.fagsaker.length>0,u=re(),k=u.watch(ce);return e.jsxs(j,{gap:"space-16",children:[!g&&t&&e.jsx(q,{children:e.jsx(s,{id:"Journal.Sak.Ingen"})}),z(n.tilstand)&&e.jsx(Z,{variant:"info",children:e.jsx(s,{id:"Journalpost.Søk.Forklaring"})}),e.jsxs(j,{gap:"space-32",children:[e.jsxs(j,{gap:"space-16",children:[e.jsx(On,{name:ce,control:u.control,validate:[N],children:et(n).map(p=>e.jsx(Rn,{value:p.value,size:"small",disabled:!t||p.disabled,children:p.label},p.value))}),k===ye&&e.jsx(ve,{name:Xe,control:u.control,className:Qr.ytelseSelect,validate:[N],label:o.formatMessage({id:"Journal.Sak.VelgYtelse"}),selectValues:Xr.map(p=>e.jsx("option",{value:p,children:e.jsx(s,{id:"Journal.Sak.Ytelse",values:{ytelseType:p}})},p))}),k===fe&&e.jsx(Z,{variant:"info",children:e.jsx(s,{id:"Journal.Sak.Generell.Info"})})]}),e.jsxs(b,{gap:"space-16",children:[e.jsx(E,{size:"small",variant:"primary",disabled:!r,type:"submit",children:e.jsx(s,{id:z(n.tilstand)?"Journal.Sak.AnnenSak":"ValgtOppgave.Journalfør"})}),e.jsx(E,{size:"small",variant:"secondary",onClick:a,disabled:!1,type:"button",children:e.jsx(s,{id:"ValgtOppgave.Avbryt"})}),i&&e.jsxs(e.Fragment,{children:[e.jsx(H,{}),e.jsx(E,{size:"small",variant:"primary",type:"button",onClick:()=>{d(n.journalpostId)},children:e.jsx(s,{id:"ValgtOppgave.Flytt.Til.Gosys"})})]})]})]})]})};Ze.__docgenInfo={description:"VelgSakForm - Inneholder formen som lar saksbehandler velge en sak og journalføre dokumentet på, evt opprette ny sak.",methods:[],displayName:"VelgSakForm"};const je=n=>n.dokumenter?.length===1,nt=(n,r)=>{const a=r.find(t=>t.saksnummer===n);if(!a)throw new Error(`Finner ikke sak med saksnummer ${n} i listen over journalpostens saker`);return a},rt=n=>{const r=n.dokumenter||[];return{saksnummerValg:void 0,ytelsetypeValg:void 0,journalpostTittel:n.tittel,journalpostDokumenter:je(n)?[{dokumentId:r[0]?.dokumentId??"Mangler dokumentId",tittel:n.tittel}]:Jr(r)}},tt=(n,r)=>{const a=n.dokumenter?.at(0)?.dokumentId;if(!a)throw new Error(`Finner ingen dokumenter på journalpost ${n.journalpostId}`);return[{dokumentId:a,tittel:r}]},at=(n,r)=>{const a=r.tittel!==n.journalpostTittel?n.journalpostTittel:void 0,t=a&&je(r)?tt(r,a):Kr(n,r.dokumenter||[]);if(a||t.length>0)return{journalpostTittel:a,dokumenter:t}},xe=(n,r,a)=>{if(!a)throw new Error("Kan ikke journalføre uten at enhet er satt");return{journalpostId:r.journalpostId,enhetId:a,oppdaterTitlerDto:at(n,r),...Zr(n,r)}},en=({journalpost:n,oppgave:r,avbrytVisningAvJournalpost:a,submitJournalføring:t,knyttJournalpostTilBruker:i,forhåndsvisBruker:d,brukerTilForhåndsvisning:o,lasterBruker:g,reserverOppgave:u,navAnsatt:k,flyttTilGosys:p})=>{const m=qe({defaultValues:rt(n)}),v=T=>{if(z(n.tilstand))t(xe(T,n,n.journalførendeEnhet),!0);else{if(!r)throw new Error("Prøver å journalføre en journalpost uten oppgave, ugyldig tilstand!");t(xe(T,n,r.enhetId),!1)}},h=!n.bruker,f=z(n.tilstand),x=n.fagsaker||[],_=m.formState.isDirty;return e.jsx(Ae,{formMethods:m,onSubmit:v,children:e.jsxs(j,{gap:"space-20",children:[e.jsxs("div",{children:[e.jsx(Qe,{journalpost:n,readOnly:f}),r&&e.jsx(We,{oppgave:r,reserverOppgave:u,navAnsatt:k})]}),e.jsx(Be,{journalpost:n,hentForhåndsvisningAvSøker:d,skalKunneEndreSøker:h,lasterBruker:g,brukerTilForhåndsvisning:o,knyttSøkerTilJournalpost:i}),r?.beskrivelse&&e.jsxs(j,{gap:"space-0",children:[e.jsx(I,{size:"small",level:"4",children:e.jsx(s,{id:"ValgtOppgave.Beskrivelse"})}),e.jsx(Cn,{children:r.beskrivelse})]}),e.jsxs(j,{gap:"space-8",children:[e.jsx(I,{size:"small",level:"4",children:e.jsx(s,{id:"ValgtOppgave.Dokumenter"})}),n.dokumenter&&e.jsx(Ye,{journalpost:n,dokumentTittelStyresAvJournalpostTittel:je(n)})]}),n.eksisterendeSaksnummer&&e.jsxs(j,{gap:"space-8",children:[e.jsx(I,{size:"small",level:"4",children:e.jsx(s,{id:"ValgtOppgave.TilknyttetSak"})}),e.jsx(pe,{sak:nt(n.eksisterendeSaksnummer,x)})]}),e.jsxs(j,{gap:"space-8",children:[e.jsx(I,{size:"small",level:"4",children:e.jsx(s,{id:"ValgtOppgave.RelaterteSaker"})}),h&&e.jsx(Z,{variant:"info",size:"small",children:e.jsx(s,{id:"ValgtOppgave.RelaterteSaker.ManglerSøker"})}),e.jsx(j,{gap:"space-8",children:x.filter(T=>T.saksnummer!==n.eksisterendeSaksnummer).map(T=>e.jsx(pe,{sak:T},T.saksnummer))})]}),e.jsxs("div",{children:[e.jsx(I,{size:"small",level:"4",children:e.jsx(s,{id:f?"Journal.Sak.AnnenSak":"ValgtOppgave.KnyttTilSak"})}),e.jsx(Ze,{isSubmittable:_,journalpost:n,avbrytVisningAvJournalpost:a,erKlarForJournalføring:!h,erLokalOppgave:r?.kilde==="LOKAL",flyttTilGosys:p})]})]})})};en.__docgenInfo={description:"JournalpostDetaljer - Viser detaljer om valgt journalpost",methods:[],displayName:"JournalpostDetaljer"};const nn=({setValgtDokument:n,valgtDokument:r,dokumenter:a})=>{if(a.length<2)return null;const t=i=>{const d=a.find(o=>o.dokumentId===i);d&&n(d)};return e.jsx(b,{justify:"center",children:e.jsx(ke,{defaultValue:r.dokumentId,onChange:t,children:a.map(({dokumentId:i,tittel:d})=>e.jsx(Dn,{content:d,children:e.jsx(ke.Item,{value:i,children:st(d)})},i))})})},st=n=>n?n.length>15?n.substring(0,14).concat("..."):n:"Ukjent tittel";nn.__docgenInfo={description:"",methods:[],displayName:"DokumentVelger",props:{setValgtDokument:{required:!0,tsType:{name:"signature",type:"function",raw:"(dok: JournalDokument) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"JournalDokument[]"},description:""}}};const it="_pdfContainer_1684h_1",lt="_iframe_1684h_8",rn={pdfContainer:it,iframe:lt},tn=({dokument:n})=>e.jsx("iframe",{id:"iframepdf",src:n.lenke,className:rn.iframe,title:n.tittel});tn.__docgenInfo={description:"PDFVisning - Panel for å vise valgt dokument",methods:[],displayName:"PDFVisning",props:{dokument:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"tittel",value:{name:"string",required:!0}},{key:"varianter",value:{name:"Array",elements:[{name:"union",raw:"'ARKIV' | 'ORIGINAL'",elements:[{name:"literal",value:"'ARKIV'"},{name:"literal",value:"'ORIGINAL'"}]}],raw:"JournalVariant[]",required:!0}},{key:"lenke",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}>`},description:""}}};const an=({dokumenter:n})=>{const r=n&&n.length>0?n[0]:void 0,[a,t]=y.useState(r);return!a||!n?e.jsx(I,{size:"small",level:"2",children:e.jsx(s,{id:"ValgtOppgave.Dokumenter.Tom"})}):e.jsxs(j,{gap:"space-16",className:rn.pdfContainer,children:[e.jsx(nn,{setValgtDokument:t,valgtDokument:a,dokumenter:n}),e.jsx(tn,{dokument:a})]})};an.__docgenInfo={description:"",methods:[],displayName:"DokumentIndex",props:{dokumenter:{required:!0,tsType:{name:"union",raw:"JournalDokument[] | undefined",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"tittel",value:{name:"string",required:!0}},{key:"varianter",value:{name:"Array",elements:[{name:"union",raw:"'ARKIV' | 'ORIGINAL'",elements:[{name:"literal",value:"'ARKIV'"},{name:"literal",value:"'ORIGINAL'"}]}],raw:"JournalVariant[]",required:!0}},{key:"lenke",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}>`}],raw:"JournalDokument[]"},{name:"undefined"}]},description:""}}};const ot="_container_yoizf_1",dt="_oppgaveKolonne_yoizf_5",ut="_pdfKolonne_yoizf_10",oe={container:ot,oppgaveKolonne:dt,pdfKolonne:ut},sn=({oppgave:n,journalpost:r,avbrytVisningAvJournalpost:a,submitJournalføring:t,navAnsatt:i,reserverOppgave:d,flyttTilGosys:o})=>{const{mutate:g,data:u}=V({mutationFn:xr}),{mutate:k,data:p,status:m}=V({mutationFn:Sr}),{dokumenter:v}=r,h=v&&v.length>0?v[0]:void 0;return e.jsxs("div",{className:oe.container,children:[e.jsx("div",{className:oe.oppgaveKolonne,children:e.jsx(en,{avbrytVisningAvJournalpost:a,journalpost:u??r,oppgave:n,submitJournalføring:t,knyttJournalpostTilBruker:g,forhåndsvisBruker:f=>{k(f)},brukerTilForhåndsvisning:p,lasterBruker:m==="pending",reserverOppgave:d,navAnsatt:i,flyttTilGosys:o})}),h&&e.jsx("div",{className:oe.pdfKolonne,children:e.jsx(an,{dokumenter:r.dokumenter})})]})};sn.__docgenInfo={description:"JournalpostIndex - Komponent som holder på og styrer logikk rundt detaljert visning av journalpost",methods:[],displayName:"JournalpostIndex"};const gt="_nesteIkon_1mt95_5",mt="_tabellRad_1mt95_11",Se={nesteIkon:gt,tabellRad:mt},ln=({oppgave:n,velgOppgaveOgHentJournalpost:r,navAnsatt:a,reserverOppgave:t})=>e.jsxs(l.Row,{onClick:()=>{r(n)},shadeOnHover:!0,className:Se.tabellRad,children:[e.jsx(l.DataCell,{children:e.jsx(F,{dateString:n.opprettetDato})}),e.jsx(l.DataCell,{children:e.jsx(s,{id:"Journal.Sak.Ytelse",values:{ytelseType:n.ytelseType}})}),e.jsx(l.DataCell,{children:n.beskrivelse}),e.jsxs(l.DataCell,{children:[n.reservertAv&&a.brukernavn===n.reservertAv&&e.jsx(M,{size:"small",variant:"alt3",children:e.jsx(s,{id:"Oppgavetabell.Meg"})}),n.reservertAv&&a.brukernavn!==n.reservertAv&&e.jsx(M,{size:"small",variant:"neutral-moderate",children:n.reservertAv}),!n.reservertAv&&e.jsx(E,{size:"small",variant:"tertiary",onClick:i=>{i.stopPropagation(),t({journalpostId:n.journalpostId,reserverFor:a.brukernavn})},type:"button",children:e.jsx(s,{id:"Oppgavetabell.SettPåMeg"})})]}),e.jsx(l.DataCell,{children:n.fødselsnummer}),e.jsx(l.DataCell,{children:e.jsx(F,{dateString:n.frist})}),e.jsx(l.DataCell,{children:n.enhetId}),e.jsx(l.DataCell,{children:e.jsx(Gn,{className:Se.nesteIkon})})]});ln.__docgenInfo={description:"",methods:[],displayName:"OppgaveTabellRad"};const kt="_headerText_57a1a_6",J={headerText:kt},on=({velgOppgaveOgHentJournalpost:n,navAnsatt:r,reserverOppgave:a})=>{const{data:t}=De(Ge(r.brukernavn));return(t??[]).length<1?e.jsx(q,{size:"small",children:e.jsx(s,{id:"Journalforing.Oppgaver.IngenOppgaver"})}):e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.Opprettet"})}),e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.YtelseType"})}),e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.Beskrivelse"})}),e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.Saksbehandler"})}),e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.Bruker"})}),e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.Frist"})}),e.jsx(l.HeaderCell,{className:J.headerText,children:e.jsx(s,{id:"Oppgavetabell.Enhet"})}),e.jsx(l.HeaderCell,{})]})}),e.jsx(l.Body,{children:(t??[]).map(i=>e.jsx(ln,{oppgave:i,velgOppgaveOgHentJournalpost:n,navAnsatt:r,reserverOppgave:a},i.journalpostId))})]})};on.__docgenInfo={description:"OppgaveTabell - Presenterer liste over oppgaver og tar inn callback for å sette valgt oppgave",methods:[],displayName:"OppgaveTabell"};const pt="_sentrertInnhold_1of7b_1",ct={sentrertInnhold:pt},dn=({navAnsatt:n,valgtOppgave:r,valgtJournalpost:a,velgOppgaveOgHentJournalpost:t,avbrytVisningAvJournalpost:i,submitJournalføring:d,reserverOppgave:o,flyttTilGosys:g})=>e.jsxs("div",{children:[!a&&e.jsx("div",{className:ct.sentrertInnhold,children:e.jsx(on,{velgOppgaveOgHentJournalpost:t,navAnsatt:n,reserverOppgave:o})}),a&&e.jsx(sn,{avbrytVisningAvJournalpost:i,oppgave:r,journalpost:a,navAnsatt:n,submitJournalføring:d,reserverOppgave:o,flyttTilGosys:g})]});dn.__docgenInfo={description:"JournalføringIndex - Styrer logikk rundt valg av oppgave i listen med oppgaver",methods:[],displayName:"JournalføringIndex"};const vt="_ferdigIkon_y9y28_1",yt={ferdigIkon:vt},ft=n=>`/fagsak/${n}/`,un=({saksnummer:n,lukkModal:r,showModal:a,isLoading:t})=>{if(!a)return null;const i=n?.saksnummer?ft(n.saksnummer):void 0;return e.jsx(B,{width:"small",open:a,onClose:r,"aria-label":"journalpost-modal",children:e.jsx(B.Body,{children:e.jsxs(j,{gap:"space-16",children:[t&&e.jsxs(e.Fragment,{children:[e.jsx(b,{justify:"center",children:e.jsx(Oe,{})}),e.jsx(b,{justify:"center",children:e.jsx(q,{children:e.jsx(s,{id:"Journalfør.Modal.Ferdigstiller"})})})]}),!t&&i&&e.jsxs(e.Fragment,{children:[e.jsx(b,{justify:"center",children:e.jsx(zn,{className:yt.ferdigIkon})}),e.jsx(b,{justify:"center",children:e.jsxs(q,{children:[e.jsx(s,{id:"Journalfør.Modal.Journalført"})," ",e.jsx(Fe,{target:"_blank",rel:"noreferrer",href:i,children:n?.saksnummer})]})})]}),e.jsx(b,{justify:"center",children:e.jsx(E,{size:"small",variant:"primary",onClick:r,disabled:!1,autoFocus:!0,type:"button",children:e.jsx(s,{id:"Journalfør.Modal.Ok"})})})]})})})};un.__docgenInfo={description:"JournalførtSubmitModal - Viser modal som gir saksnummer journalposten ble ført på",methods:[],displayName:"JournalførtSubmitModal"};const jt={"Journalforing.Tittel":"Journalføring","Journalforing.Tilgang":"Du har ikke tilgang til journalføring","Journalforing.Oversikt":"Oversikt","Journalforing.Oppgaver.IngenOppgaver":"Fant ingen journalføringsoppgaver","Oppgavetabell.Opprettet":"Opprettet","Oppgavetabell.YtelseType":"Ytelse","Oppgavetabell.Enhet":"Enhet","Oppgavetabell.Frist":"Frist","Oppgavetabell.Bruker":"Bruker","Oppgavetabell.Beskrivelse":"Beskrivelse","Oppgavetabell.Saksbehandler":"Saksbehandler","Oppgavetabell.SettPåMeg":"Sett på meg","Oppgavetabell.FjernMeg":"Fjern meg fra saken","Oppgavetabell.Meg":"Meg","Oppgavetabell.SakenErTattAv":"Saken er tatt av ","Journalpost.Søk.Tittel":"Søk etter journalpost","Journalpost.Søk.Finn":"Finn journalpost","Journalpost.Søk.Forklaring":"Hvis du trenger å knytte en allerede journalført journalpost til en annen sak, kan du bruke denne funksjonaliteten. Journalposten vil da kopieres til den nye saken du legger til.","Journalpost.Søk.JournalpostID":"Journalpost-ID","Journalpost.Søk.IngenTreffEllerManglerTilgang":"Søket ga ingen treff eller du mangler tilgang til denne journalposten","Journalforing.Antall.Oppgaver":"Åpne oppgaver: {antall}","Journalpost.Søk.KunTall":"Kan kun inneholde tall","ValgtOppgave.Avbryt":"Avbryt","ValgtOppgave.Journalfør":"Journalfør","ValgtOppgave.Flytt.Til.Gosys":"Flytt til Gosys","ValgtOppgave.Søker":"Søker","ValgtOppgave.Søk.Bruker":"Saken mangler søker","ValgtOppgave.Søk.BrukerFeil":"{fødselsnummer} er ikke et gyldig fødselsnummer","ValgtOppgave.Søk.FinnBruker":"Finn søker","ValgtOppgave.Søk.KnyttTil":"Knytt person til saken","ValgtOppgave.Avsender":"Avsender","ValgtOppgave.Beskrivelse":"Beskrivelse","ValgtOppgave.TilknyttetSak":"Saken journalposten er journalført på","ValgtOppgave.RelaterteSaker":"Saker som kan være knyttet til innholdet","ValgtOppgave.RelaterteSaker.ManglerSøker":"Ingen saker er knyttet til innholdet ettersom saken mangler søker.","ValgtOppgave.KnyttTilSak":"Journalfør på sak","ValgtOppgave.Dokumenter":"Innhold","ValgtOppgave.Dokument.Knapp":"Dokument {dok}/{antall}","ValgtOppgave.Dokumenter.Tom":"Journalposten har ingen dokumenter","Journal.Sak.Avsluttet":"Avsluttet","Journal.Sak.Løpende":"Løpende","Journal.Sak.Ny":"Journalfør på ny sak","Journal.Sak.VelgYtelse":"Ytelse","Journal.Sak.Opprettet":"Opprettet","Journal.Sak.Generell":"Journalfør på generell sak","Journal.Sak.Generell.Info":"Det vil ikke opprettes sak når du journalfører på generell sak. Innholdet vil bli knyttet direkte til personen.","Journal.Sak.OpprettetDato":"OPPRETTET {br}{opprettetDato}","Journal.Sak.FørsteUttak":"FØRSTE UTTAK {br}{førsteUttak}","Journal.Sak.FamAdopsjon":"ADOPSJON {br}{famDato}","Journal.Sak.FamFødsel":"FØDSEL {br}{famDato}","Journal.Sak.FamTermin":"TERMIN {br}{famDato}","Journal.Sak.FamOmsorg":"OMSORGSOVERTAKELSE {br}{famDato}","Journal.Sak.Ingen":"Det finnes ingen saker på journalpost","Journal.Sak.UnderBehandling":"Under behandling","Journal.Sak.Ytelse":"{ytelseType, select, ES {Engangsstønad} FP {Foreldrepenger} SVP {Svangerskapspenger} other {Ukjent}}","Journal.Sak.AnnenSak":"Journalfør på en annen sak","Journal.Tittel.Fritekst":"Fritekst","Journalfør.Modal.Ok":"Ok","Journalfør.Modal.Ferdigstiller":"Ferdigstiller journalføringen...","Journalfør.Modal.Journalført":"Dokumentet er journalført på saksnummer ","DokumentDetaljer.ExternalLink":"Åpne dokument i nytt vindu","SakDetaljer.ExternalLink":"Åpne sak i nytt vindu"},ht=Ee(jt),gn=n=>e.jsx(Te,{value:ht,children:e.jsx(bt,{...n})}),bt=({navAnsatt:n})=>{const[r,a]=y.useState(void 0),[t,i]=y.useState(!1),{data:d,refetch:o,status:g}=De(Ge(n?.brukernavn)),{mutate:u,data:k,reset:p,status:m}=V({mutationFn:jr}),{mutate:v,data:h,isPending:f}=V({mutationFn:hr,onSuccess:()=>{o(),G()}}),{mutate:x,data:_,isPending:T}=V({mutationFn:br,onSuccess:()=>{o(),G()}}),{mutate:U}=V({mutationFn:Ir,onSuccess:()=>{o()}}),{mutate:R}=V({mutationFn:_r,onSuccess:()=>{o()}}),G=()=>{a(void 0),p()},te=c=>{U(c),r&&a({...r,reservertAv:c.reserverFor})},ae=c=>{a(c),u(c.journalpostId)},Y=(c,S)=>{i(!0),S?x(c):v(c)};return n?g==="pending"?e.jsx(Oe,{}):g==="error"?e.jsx(Fn,{}):e.jsxs("div",{children:[e.jsx(Ue,{avbrytVisningAvJournalpost:G,harHentetFerdigJournalpost:m==="success",valgtJournalpost:k,hentJournalpost:u,antallOppgaver:d.length}),t&&e.jsx(un,{isLoading:T||f,lukkModal:()=>{i(!1)},showModal:t,saksnummer:h||_}),e.jsx(dn,{valgtOppgave:r,valgtJournalpost:k,navAnsatt:n,velgOppgaveOgHentJournalpost:ae,avbrytVisningAvJournalpost:G,submitJournalføring:Y,reserverOppgave:te,flyttTilGosys:R})]}):e.jsx(I,{size:"medium",level:"2",children:e.jsx(s,{id:"Journalforing.Tilgang"})})};gn.__docgenInfo={description:"",methods:[],displayName:"OppgaveJournalføringIndex",props:{navAnsatt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  funksjonellTid?: string;
  kanBehandleKode6: boolean;
  kanOppgavestyre: boolean;
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  navn: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!1}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}},description:""}}};const mn=({saker:n})=>e.jsx(Vn.New,{background:"neutral-moderate",padding:"5",borderRadius:"medium",children:e.jsxs(l,{size:"small",children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Registrert"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Sak"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Stonad"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Type"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Resultat"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Vedtatt"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"SakerPanel.Niva"})})]})}),e.jsx(l.Body,{children:n.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.DataCell,{children:e.jsx(F,{dateString:r.registrert})}),e.jsx(l.DataCell,{children:r.sakId}),e.jsx(l.DataCell,{children:r.valg}),e.jsx(l.DataCell,{children:r.type}),e.jsx(l.DataCell,{children:r.resultat}),e.jsx(l.DataCell,{children:e.jsx(F,{dateString:r.vedtatt})}),e.jsx(l.DataCell,{children:r.nivaa})]},r.sakId))})]})});mn.__docgenInfo={description:"",methods:[],displayName:"SakerPanel",props:{saker:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  nivaa?: string;
  registrert: string;
  resultat?: string;
  sakId?: string;
  type?: string;
  undervalg?: string;
  valg?: string;
  vedtatt: string;
}`,signature:{properties:[{key:"nivaa",value:{name:"string",required:!1}},{key:"registrert",value:{name:"string",required:!0}},{key:"resultat",value:{name:"string",required:!1}},{key:"sakId",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"undervalg",value:{name:"string",required:!1}},{key:"valg",value:{name:"string",required:!1}},{key:"vedtatt",value:{name:"string",required:!0}}]}}],raw:"Sak[]"},description:""}}};const kn=({alleArbeidsforhold:n})=>e.jsxs(j,{gap:"space-16",children:[e.jsx("div",{}),!n&&e.jsx(q,{size:"small",children:e.jsx(s,{id:"ArbeidsforholdPanel.IngenArbeidsforhold"})}),n&&e.jsxs(l,{size:"small",children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"ArbeidsforholdPanel.Arbeidsgiver"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"ArbeidsforholdPanel.Inntekt"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"ArbeidsforholdPanel.Inntektsperiode"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"ArbeidsforholdPanel.Refusjon"})})]})}),e.jsx(l.Body,{children:n.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.DataCell,{children:r.arbeidsgiverOrgnr}),e.jsx(l.DataCell,{children:r.inntekt}),e.jsx(l.DataCell,{children:r.inntektsperiode?.termnavn}),e.jsx(l.DataCell,{children:r.refusjon?e.jsx(s,{id:"ArbeidsforholdPanel.Ja"}):e.jsx(s,{id:"ArbeidsforholdPanel.Nei"})})]},r.identdato))})]})]});kn.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdPanel",props:{alleArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  identdato: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  refusjon: boolean;
  refusjonTom?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}}]}}],raw:"VedtakArbeidsforhold[]"},description:""}}};const pn=({utbetalinger:n})=>e.jsxs(j,{gap:"space-16",children:[e.jsx("div",{}),!n&&e.jsx(q,{size:"small",children:e.jsx(s,{id:"UtbetalingerPanel.IngenUtbetalinger"})}),n&&e.jsxs(l,{size:"small",children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"UtbetalingerPanel.Periode"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"UtbetalingerPanel.Utbetalingsgrad"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"UtbetalingerPanel.Dagsats"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"UtbetalingerPanel.Refusjon"})})]})}),e.jsx(l.Body,{children:n.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.DataCell,{children:e.jsx(Re,{dateStringFom:r.periode.fom,dateStringTom:r.periode.tom})}),e.jsx(l.DataCell,{children:r.utbetalingsgrad}),e.jsx(l.DataCell,{children:r.dagsats}),e.jsx(l.DataCell,{children:r.erRefusjon?e.jsx(s,{id:"UtbetalingerPanel.Ja"}):e.jsx(s,{id:"UtbetalingerPanel.Nei"})})]},r.identdato))})]})]});pn.__docgenInfo={description:"",methods:[],displayName:"UtbetalingerPanel",props:{utbetalinger:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  dagsats: number;
  erRefusjon: boolean;
  identdato: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"dagsats",value:{name:"number",required:!0}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}}]}}],raw:"VedtakUtbetaling[]"},description:""}}};const cn=({vedtak:n})=>e.jsxs(L,{defaultValue:"utbetalinger",children:[e.jsxs(L.List,{children:[e.jsx(L.Tab,{value:"arbeidshforhold",label:e.jsx(s,{id:"VedtakDetaljerPanel.Arbeidsforhold"})}),e.jsx(L.Tab,{value:"utbetalinger",label:e.jsx(s,{id:"VedtakDetaljerPanel.Utbetalinger"})})]}),e.jsx(L.Panel,{value:"arbeidshforhold",children:e.jsx(kn,{alleArbeidsforhold:n.arbeidsforhold??void 0})}),e.jsx(L.Panel,{value:"utbetalinger",children:e.jsx(pn,{utbetalinger:n.utbetalinger??void 0})})]});cn.__docgenInfo={description:"",methods:[],displayName:"VedtakDetaljerPanel",props:{vedtak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  arbeidsforhold?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>;
  arbeidskategori?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  behandlingstema?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  gradering?: number;
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  registrert: string;
  saksbehandlerId: string;
  utbetalinger?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  identdato: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  refusjon: boolean;
  refusjonTom?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>",required:!1}},{key:"arbeidskategori",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fødselsdatoBarn",value:{name:"string",required:!1}},{key:"gradering",value:{name:"number",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opphørFom",value:{name:"string",required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"registrert",value:{name:"string",required:!0}},{key:"saksbehandlerId",value:{name:"string",required:!0}},{key:"utbetalinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  dagsats: number;
  erRefusjon: boolean;
  identdato: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"dagsats",value:{name:"number",required:!0}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>",required:!1}}]}},description:""}}};const vn=({alleVedtak:n,erForeldrepenger:r})=>{const[a,t]=y.useState();return e.jsxs(j,{gap:"space-40",children:[e.jsxs(l,{size:"small",children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.Identdato"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.Dekningsgrad"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.Periode"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.Arbeidskategori"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.OpphorFom"})}),r&&e.jsxs(e.Fragment,{children:[e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.FødselsdatoBarn"})}),e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(s,{id:"VedtakPanel.Gradering"})})]})]})}),e.jsx(l.Body,{children:n.map(i=>e.jsxs(l.Row,{onClick:()=>t(i),selected:i.identdato===a?.identdato,style:{cursor:"pointer"},children:[e.jsx(l.DataCell,{children:e.jsx(F,{dateString:i.identdato})}),e.jsx(l.DataCell,{children:i.dekningsgrad}),e.jsx(l.DataCell,{children:e.jsx(Re,{dateStringFom:i.periode.fom,dateStringTom:i.periode.tom})}),e.jsx(l.DataCell,{children:i.arbeidskategori?.termnavn}),e.jsx(l.DataCell,{children:i.opphørFom&&e.jsx(F,{dateString:i.opphørFom})}),r&&e.jsxs(e.Fragment,{children:[e.jsx(l.DataCell,{children:i.fødselsdatoBarn&&e.jsx(F,{dateString:i.fødselsdatoBarn})}),e.jsx(l.DataCell,{children:i.gradering})]})]},i.identdato))})]}),a&&e.jsx(cn,{vedtak:a},a.identdato)]})};vn.__docgenInfo={description:"",methods:[],displayName:"VedtakPanel",props:{alleVedtak:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>;
  arbeidskategori?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  behandlingstema?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  gradering?: number;
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  registrert: string;
  saksbehandlerId: string;
  utbetalinger?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  identdato: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  refusjon: boolean;
  refusjonTom?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>",required:!1}},{key:"arbeidskategori",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fødselsdatoBarn",value:{name:"string",required:!1}},{key:"gradering",value:{name:"number",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opphørFom",value:{name:"string",required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"registrert",value:{name:"string",required:!0}},{key:"saksbehandlerId",value:{name:"string",required:!0}},{key:"utbetalinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  dagsats: number;
  erRefusjon: boolean;
  identdato: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"dagsats",value:{name:"number",required:!0}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>",required:!1}}]}}],raw:"Vedtak[]"},description:""},erForeldrepenger:{required:!0,tsType:{name:"boolean"},description:""}}};const xt="_container_aon2n_1",St={container:xt},It=new Set(["AP","FØ"]),yn=({søkInfotrygdVedtak:n,isPending:r,isSuccess:a,infotrygdVedtak:t})=>{const i=C(),[d,o]=y.useState(),g=u=>{u&&_e(u)?(o(void 0),n({searchString:u})):o(i.formatMessage({id:"UtbetalingsdataPanel.UgyldigFnr"}))};return e.jsxs(j,{gap:"space-20",className:St.container,children:[e.jsx(I,{size:"large",level:"2",children:e.jsx(s,{id:"UtbetalingsdataPanel.Heading"})}),e.jsx("div",{children:e.jsx(ne,{label:e.jsx(s,{id:"UtbetalingsdataPanel.Sok"}),variant:"primary",hideLabel:!1,size:"small",htmlSize:"12",error:d,onSearchClick:g,autoComplete:"off",children:e.jsx(ne.Button,{type:"button",loading:r})})}),a&&t&&!d&&e.jsxs(e.Fragment,{children:[e.jsx(I,{size:"small",level:"3",children:t.saker.length>0||t.vedtakKjeder.length>0?e.jsx(s,{id:"UtbetalingsdataPanel.Resultat"}):e.jsx(s,{id:"UtbetalingsdataPanel.IngenSakerFunnet"})}),t.saker.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(I,{size:"xsmall",level:"3",children:e.jsx(s,{id:"UtbetalingsdataPanel.Saker"})}),e.jsx(mn,{saker:t.saker})]}),t.vedtakKjeder.length>0&&e.jsx(I,{size:"xsmall",level:"3",children:e.jsx(s,{id:"UtbetalingsdataPanel.Utbetalinger"})}),t.vedtakKjeder.map(u=>e.jsxs(W,{size:"small","aria-label":"default-demo",children:[e.jsx(W.Header,{children:e.jsx(W.Title,{size:"small",children:e.jsxs(b,{gap:"space-20",children:[e.jsx(F,{dateString:u.opprinneligIdentdato}),e.jsx("div",{children:u.behandlingstema.termnavn})]})})}),e.jsx(W.Content,{children:e.jsx(vn,{alleVedtak:u.vedtak,erForeldrepenger:It.has(u.behandlingstema.kode)})})]},u.opprinneligIdentdato))]})]})};yn.__docgenInfo={description:"",methods:[],displayName:"UtbetalingsdataPanel",props:{søkInfotrygdVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { searchString: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchString: string }",signature:{properties:[{key:"searchString",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},isPending:{required:!0,tsType:{name:"boolean"},description:""},isSuccess:{required:!0,tsType:{name:"boolean"},description:""},infotrygdVedtak:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  saker: Array<tjenester_infotrygd_InfotrygdVedtakDto_SakDto>;
  vedtakKjeder: Array<tjenester_infotrygd_InfotrygdVedtakDto_VedtakKjede>;
}`,signature:{properties:[{key:"saker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  nivaa?: string;
  registrert: string;
  resultat?: string;
  sakId?: string;
  type?: string;
  undervalg?: string;
  valg?: string;
  vedtatt: string;
}`,signature:{properties:[{key:"nivaa",value:{name:"string",required:!1}},{key:"registrert",value:{name:"string",required:!0}},{key:"resultat",value:{name:"string",required:!1}},{key:"sakId",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"undervalg",value:{name:"string",required:!1}},{key:"valg",value:{name:"string",required:!1}},{key:"vedtatt",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_SakDto>",required:!0}},{key:"vedtakKjeder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingstema: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  vedtak: Array<tjenester_infotrygd_InfotrygdVedtakDto_Vedtak>;
}`,signature:{properties:[{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"vedtak",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>;
  arbeidskategori?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  behandlingstema?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  gradering?: number;
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  registrert: string;
  saksbehandlerId: string;
  utbetalinger?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  identdato: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  refusjon: boolean;
  refusjonTom?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>",required:!1}},{key:"arbeidskategori",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fødselsdatoBarn",value:{name:"string",required:!1}},{key:"gradering",value:{name:"number",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opphørFom",value:{name:"string",required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"registrert",value:{name:"string",required:!0}},{key:"saksbehandlerId",value:{name:"string",required:!0}},{key:"utbetalinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  dagsats: number;
  erRefusjon: boolean;
  identdato: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"dagsats",value:{name:"number",required:!0}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Vedtak>",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_VedtakKjede>",required:!0}}]}},description:""}}};const _t={"UtbetalingsdataPanel.Heading":"Søk i Infotrygd","UtbetalingsdataPanel.Sok":"Fødselsnummer","UtbetalingsdataPanel.UgyldigFnr":"Oppgitt fødselsnummer er ikke gyldig","UtbetalingsdataPanel.Resultat":"Søkeresultat:","UtbetalingsdataPanel.IngenSakerFunnet":"Søkeresultat: Ingen saker funnet","UtbetalingsdataPanel.Saker":"Saker","UtbetalingsdataPanel.Utbetalinger":"Utbetalinger","VedtakPanel.Identdato":"Identdato","VedtakPanel.Dekningsgrad":"Dekningsgrad","VedtakPanel.Periode":"Periode","VedtakPanel.Arbeidskategori":"Arbeidskategori","VedtakPanel.OpphorFom":"Opphørsdato","VedtakPanel.FødselsdatoBarn":"Fødselsdato barn","VedtakPanel.Gradering":"Gradering","VedtakDetaljerPanel.Arbeidsforhold":"Arbeidsforhold","VedtakDetaljerPanel.Utbetalinger":"Utbetalinger","SakerPanel.Registrert":"Registrert","SakerPanel.Sak":"Sak","SakerPanel.Stonad":"Stønad","SakerPanel.Type":"Type","SakerPanel.Resultat":"Resultat","SakerPanel.Vedtatt":"Vedtatt","SakerPanel.Niva":"Nivå","ArbeidsforholdPanel.Arbeidsgiver":"Arbeidsgiver","ArbeidsforholdPanel.Inntekt":"Inntekt","ArbeidsforholdPanel.Inntektsperiode":"Inntektsperiode","ArbeidsforholdPanel.Refusjon":"Refusjon","ArbeidsforholdPanel.IngenArbeidsforhold":"Ingen arbeidsforhold","ArbeidsforholdPanel.Ja":"Ja","ArbeidsforholdPanel.Nei":"Nei","UtbetalingerPanel.Periode":"Periode","UtbetalingerPanel.Utbetalingsgrad":"Utbetalingsgrad","UtbetalingerPanel.Dagsats":"Dagsats","UtbetalingerPanel.Refusjon":"Refusjon","UtbetalingerPanel.IngenUtbetalinger":"Ingen utbetalinger","UtbetalingerPanel.Ja":"Ja","UtbetalingerPanel.Nei":"Nei"},Tt=Ee(_t),fn=n=>e.jsx(Te,{value:Tt,children:e.jsx(yn,{...n})});fn.__docgenInfo={description:"",methods:[],displayName:"UtbetalingsdataIs15Index",props:{søkInfotrygdVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { searchString: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchString: string }",signature:{properties:[{key:"searchString",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},isPending:{required:!0,tsType:{name:"boolean"},description:""},isSuccess:{required:!0,tsType:{name:"boolean"},description:""},infotrygdVedtak:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  saker: Array<tjenester_infotrygd_InfotrygdVedtakDto_SakDto>;
  vedtakKjeder: Array<tjenester_infotrygd_InfotrygdVedtakDto_VedtakKjede>;
}`,signature:{properties:[{key:"saker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  nivaa?: string;
  registrert: string;
  resultat?: string;
  sakId?: string;
  type?: string;
  undervalg?: string;
  valg?: string;
  vedtatt: string;
}`,signature:{properties:[{key:"nivaa",value:{name:"string",required:!1}},{key:"registrert",value:{name:"string",required:!0}},{key:"resultat",value:{name:"string",required:!1}},{key:"sakId",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"undervalg",value:{name:"string",required:!1}},{key:"valg",value:{name:"string",required:!1}},{key:"vedtatt",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_SakDto>",required:!0}},{key:"vedtakKjeder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingstema: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  vedtak: Array<tjenester_infotrygd_InfotrygdVedtakDto_Vedtak>;
}`,signature:{properties:[{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"vedtak",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>;
  arbeidskategori?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  behandlingstema?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  gradering?: number;
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  registrert: string;
  saksbehandlerId: string;
  utbetalinger?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  identdato: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  refusjon: boolean;
  refusjonTom?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>",required:!1}},{key:"arbeidskategori",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fødselsdatoBarn",value:{name:"string",required:!1}},{key:"gradering",value:{name:"number",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opphørFom",value:{name:"string",required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"registrert",value:{name:"string",required:!0}},{key:"saksbehandlerId",value:{name:"string",required:!0}},{key:"utbetalinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  dagsats: number;
  erRefusjon: boolean;
  identdato: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"dagsats",value:{name:"number",required:!0}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Vedtak>",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_VedtakKjede>",required:!0}}]}},description:""}}};const Et="_content_11o11_1",qt={content:Et},At=({headerHeight:n,navAnsatt:r})=>{const a=C(),{søkInfotrygd:t}=Nn(),{addErrorMessage:i,removeErrorMessages:d}=In(),[o,g]=y.useState(!0),u=()=>{g(!1)};y.useEffect(()=>{o||i({type:Qn.GENERAL_ERROR,message:a.formatMessage({id:"Los.IkkeTilgjengelig"})})},[o]);const k=_n(),p=(_,T)=>{k(sr(_,T))},m=Tn();y.useEffect(()=>{m.pathname==="/"&&d()},[m]);const{mutate:v,isPending:h,isSuccess:f,data:x}=V({mutationFn:_=>t(_.searchString)});return e.jsx("div",{className:qt.content,style:{margin:`${n}px auto 0`},children:e.jsxs(En,{children:[e.jsx(w,{path:"/",element:o?e.jsx($n,{setLosErIkkeTilgjengelig:u,åpneFagsak:p,navAnsatt:ge(r)}):e.jsx(er,{})}),e.jsx(w,{path:nr,element:e.jsx(gn,{navAnsatt:r})}),e.jsx(w,{path:rr,element:e.jsx(fn,{søkInfotrygdVedtak:v,isPending:h,isSuccess:f,infotrygdVedtak:x})}),e.jsx(w,{path:tr,element:e.jsx(Xn,{children:e.jsx(Zn,{})})}),e.jsx(w,{path:ar,element:e.jsx(Wn,{})}),e.jsx(w,{path:"*",element:e.jsx(Pn,{renderSomLenke:_=>e.jsx(qn,{to:"/",children:_})})})]})})};At.__docgenInfo={description:`Home

Wrapper for sideinnholdet som vises under header.`,methods:[],displayName:"Home",props:{headerHeight:{required:!0,tsType:{name:"number"},description:""},navAnsatt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  funksjonellTid?: string;
  kanBehandleKode6: boolean;
  kanOppgavestyre: boolean;
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  navn: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!1}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}},description:""}}};export{At as H};
