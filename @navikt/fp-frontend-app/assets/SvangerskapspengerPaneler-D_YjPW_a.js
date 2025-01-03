import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as h,c as bn,g as fn,R as qn}from"./index-DRjF_FHU.js";import{B as hn}from"./BehandlingContainer-D8XyqmEn.js";import{S as Tn,O as jn,T as An,A as Rn,I as cn,a as wn,b as Sn,P as En,B as Pn,F as Bn,c as Fn,d as In,e as On}from"./TilkjentYtelseProsessIndex-CZK5QREb.js";import{V as ee,I as Fe,O as Kn,M as Nn,a as Vn,b as Dn,c as Gn,Y as Ln,d as xn,e as _n,f as Mn}from"./VedtakProsessIndex-onph4asi.js";import{a as Un,F as Hn,V as Cn}from"./VergeFaktaInitPanel-Cubp-t9J.js";import{u as Yn,b as B,d as w,B as C,D as re,V as x,e as _,L as ne,H as $n,P as Ie}from"./nb_NO-Cwq3qfyR.js";import{j as zn,M as p,d as T,R as Oe,z as le,A as pe,l as Ke,S as Ne,Q as Ve,t as De,y as Jn,o as Wn}from"./index.es-BbuduiOY.js";import"./aktivitetStatus-02fOJoqz.js";import{a9 as Qn,f as J,aa as oe,P as Y,H as N,m as $,k as ge,ab as ye,ac as ve,t as Ge,C as Zn,z as Xn,ad as Le,u as W,a4 as S,ae as z,g as se,o as be,w as er,E as te,af as nr,V as c,$ as xe,a as rr,b as tr,n as ar,K as _e,F as sr,a8 as ir,l as P,A as ue,h as fe,x as Me,j as lr,r as or,Z as gr}from"./AppIndex.stories-BJ8Loojw.js";import{T as F}from"./tilretteleggingType-BCC9qV1H.js";import{V as O}from"./BehandlingHenlagtPanel-Bn_iVZE6.js";import{b as ur,V as de,P as me}from"./OverstyringPanel-B9ZzWIwS.js";import{P as Ue,u as dr}from"./ProsessDefaultInitPanel-BI2hJo-b.js";import{i as mr}from"./behandlingResultatType-DHbqkXMl.js";import{F as kr}from"./FatterVedtakStatusModal-DLzdoTlF.js";import{I as pr}from"./IverksetterVedtakStatusModal-NCBRFawz.js";import"./index.es-Chg3Rm1B.js";import"./index-rX-Bn4lm.js";import"./bind-BuPH0iQG.js";import"./index.es-CRtVVWiq.js";import"./Timeline-CusnkH1u.js";import"./landkoder-CkszcDSS.js";import"./validerApKodeOgHentApEnum-BJOxEDqe.js";import"./iframe-icKgyGTf.js";import"../sb-preview/runtime.js";import"./SettPaVentReadOnlyModal-qzU0t9MS.js";var yr=function(n,r){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&r.indexOf(a)<0&&(t[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(n);i<a.length;i++)r.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(n,a[i])&&(t[a[i]]=n[a[i]]);return t};const qe=h.forwardRef((n,r)=>{var{title:t,titleId:a}=n,i=yr(n,["title","titleId"]);let s=Yn();return s=t?a||"title-"+s:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},i),t?h.createElement("title",{id:s},t):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.25 5.5a2.25 2.25 0 0 1-1.5 2.122v4.628H12A4.25 4.25 0 0 0 16.25 8v-.378a2.25 2.25 0 1 1 1.5 0V8A5.75 5.75 0 0 1 12 13.75h-1.25v2.628a2.251 2.251 0 1 1-1.5 0V7.622a2.25 2.25 0 1 1 3-2.122M10 4.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m7 1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M9.25 18.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0",clipRule:"evenodd"}))});var D=(n=>(n.ENDRET_AV_SAKSBEHANDLER="ENDRET_AV_SAKSBEHANDLER",n.REGISTRERT_AV_SAKSBEHANDLER="REGISTRERT_AV_SAKSBEHANDLER",n.TIDLIGERE_VEDTAK="TIDLIGERE_VEDTAK",n.SØKNAD="SØKNAD",n))(D||{}),He={exports:{}};(function(n,r){(function(t,a){n.exports=a()})(bn,function(){return function(t,a,i){var s=function(g,o){if(!o||!o.length||o.length===1&&!o[0]||o.length===1&&Array.isArray(o[0])&&!o[0].length)return null;var l;o.length===1&&o[0].length>0&&(o=o[0]),l=(o=o.filter(function(d){return d}))[0];for(var u=1;u<o.length;u+=1)o[u].isValid()&&!o[u][g](l)||(l=o[u]);return l};i.max=function(){var g=[].slice.call(arguments,0);return s("isAfter",g)},i.min=function(){var g=[].slice.call(arguments,0);return s("isBefore",g)}}})})(He);var vr=He.exports;const br=fn(vr),fr=(n,r,t)=>{const a=T(r).diff(t,"days");return n.formatMessage({id:"TilretteleggingInfoPanel.Dager"},{dager:a})},qr=n=>n.type===F.HEL_TILRETTELEGGING?0:n.type===F.INGEN_TILRETTELEGGING?100:n.overstyrtUtbetalingsgrad||0,hr=n=>n.type===F.HEL_TILRETTELEGGING?100:n.type===F.INGEN_TILRETTELEGGING?0:n.stillingsprosent||0,Ce=({tilrettelegging:n,termindato:r,erTomDatoTreUkerFørTermin:t,stillingsprosentArbeidsforhold:a,tomDato:i})=>{const s=B(),g=zn(n.fom,i),o=t?s.formatMessage({id:"TilretteleggingInfoPanel.TreUker"}):fr(s,r,i),l=n.kilde===D.REGISTRERT_AV_SAKSBEHANDLER;return e.jsx("div",{style:{background:"#E5E5E5",marginLeft:"-24px",marginTop:"-24px",marginRight:"-24px",paddingBottom:"10px",paddingLeft:"20px",paddingRight:"50px",paddingTop:"10px"},children:e.jsxs(w,{justify:"space-between",children:[e.jsxs(w,{gap:"4",children:[e.jsx(Tn,{title:"a11y-title",fontSize:"1.5rem"}),e.jsxs("div",{children:[e.jsx(C,{size:"small",children:e.jsx(p,{id:"TilretteleggingInfoPanel.SvpOgArbeid",values:{svp:qr(n),arbeid:hr(n)}})}),a!==void 0&&e.jsx(re,{children:e.jsx(p,{id:"TilretteleggingInfoPanel.AvStillingsprosent",values:{stillingsprosent:a}})})]})]}),e.jsxs(w,{gap:"4",children:[e.jsx(Qn,{title:"a11y-title",fontSize:"1.5rem"}),e.jsxs("div",{children:[e.jsx(C,{size:"small",children:e.jsx(p,{id:"TilretteleggingInfoPanel.Periode",values:{periode:g.formattedString}})}),e.jsx(re,{children:o})]})]}),!l&&e.jsxs(w,{gap:"4",children:[e.jsx(qe,{title:"a11y-title",fontSize:"1.5rem"}),e.jsxs("div",{children:[e.jsx(C,{size:"small",children:e.jsx(p,{id:"TilretteleggingInfoPanel.FraSoknad"})}),e.jsx(re,{children:n.mottattDato&&e.jsx(p,{id:"TilretteleggingInfoPanel.Sendt",values:{dato:n.mottattDato?T(n.mottattDato).format(Oe):""}})})]})]}),l&&e.jsxs(w,{gap:"4",children:[e.jsx(qe,{title:"a11y-title",fontSize:"1.5rem"}),e.jsx(C,{size:"small",children:e.jsx(p,{id:"TilretteleggingInfoPanel.Saksbehandler"})})]})]})})};Ce.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingInfoPanel",props:{tilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`},description:""},termindato:{required:!0,tsType:{name:"string"},description:""},erTomDatoTreUkerFørTermin:{required:!0,tsType:{name:"boolean"},description:""},stillingsprosentArbeidsforhold:{required:!0,tsType:{name:"number"},description:""},tomDato:{required:!0,tsType:{name:"string"},description:""}}};const Tr="_dateMargin_wu8wb_1",jr="_utbetalingsgrad_wu8wb_5",Ar="_arbeidsprosent_wu8wb_9",Rr="_pushRight_wu8wb_13",he={dateMargin:Tr,utbetalingsgrad:jr,arbeidsprosent:Ar,pushRight:Rr},Te=Zn(100),je=Xn(0),cr=(n,r,t,a)=>i=>{const g=r.filter(l=>l.fom!==a.fom).some(l=>l.fom===i),o=t.some(l=>l.fom===i);return g||o?n.formatMessage({id:"TilretteleggingForm.DuplikateDatoer"}):null},wr=(n,r,t)=>a=>T(a).isAfter(T(t).subtract(3,"weeks").subtract(1,"day"))?n.formatMessage({id:"TilretteleggingForm.EtterTermindato"}):T(a).isBefore(r)?n.formatMessage({id:"TilretteleggingForm.ForForsteDato"}):null,Ye=n=>n.velferdspermisjoner.filter(r=>r.erGyldig).map(r=>r.permisjonsprosent).reduce((r,t)=>r+t,0),$e=(n,r,t)=>{const a=n-r,i=a<=0?0:100*(1-t/a);return i>0?+i.toFixed(2):0},ke=(n,r,t,a=!0)=>{if(n.type!==F.HEL_TILRETTELEGGING)return a&&n.overstyrtUtbetalingsgrad?n.overstyrtUtbetalingsgrad:n.type===F.INGEN_TILRETTELEGGING?100:$e(r,t,n.stillingsprosent||0)},Sr=(n,r)=>T(n).subtract(3,"week").subtract(1,"day").isSame(T(r)),ze=({tilrettelegging:n,termindato:r,index:t,readOnly:a,oppdaterTilrettelegging:i,avbrytEditering:s,stillingsprosentArbeidsforhold:g,arbeidsforhold:o,tomDatoForTilrettelegging:l,slettTilrettelegging:u})=>{const d=B(),k=!n.fom,f=Sr(r,l),y=Ye(o),m=h.useMemo(()=>ke(n,g,y),[n,g,y]),v=J({defaultValues:{[t]:{...n,overstyrtUtbetalingsgrad:m}}});h.useEffect(()=>{v.reset({[t]:{...n,overstyrtUtbetalingsgrad:m}})},[m]);const b=v.watch()[t],V=A=>{const I=A[t],M=I.kilde===D.REGISTRERT_AV_SAKSBEHANDLER||k?D.REGISTRERT_AV_SAKSBEHANDLER:D.ENDRET_AV_SAKSBEHANDLER,K={...I,overstyrtUtbetalingsgrad:I.overstyrtUtbetalingsgrad!==m?I.overstyrtUtbetalingsgrad:void 0,kilde:M};return i(K),v.reset({[t]:K}),Promise.resolve()},G=()=>{s(),v.reset()},j=()=>(u(n.fom),Promise.resolve());return e.jsx(oe,{...v,children:e.jsx("div",{style:{backgroundColor:"white",marginLeft:"-56px",marginTop:"-9px",marginBottom:"-8px",marginRight:"-56px",padding:"24px"},children:e.jsxs(x,{gap:"8",children:[!k&&e.jsx(Ce,{tilrettelegging:b,termindato:r,erTomDatoTreUkerFørTermin:f,stillingsprosentArbeidsforhold:g,tomDato:l}),e.jsx(Y,{name:`${t}.fom`,label:d.formatMessage({id:"TilretteleggingForm.FraOgMed"}),validate:[N,$,cr(d,o.tilretteleggingDatoer,o.avklarteOppholdPerioder,n),wr(d,o.tilretteleggingBehovFom,r)],isReadOnly:a}),e.jsx(ge,{name:`${t}.type`,label:d.formatMessage({id:"TilretteleggingForm.Tilretteleggingsbehov"}),validate:[N],isReadOnly:a,radios:[{label:d.formatMessage({id:"TilretteleggingForm.KanGjennomfores"}),value:F.HEL_TILRETTELEGGING},{label:d.formatMessage({id:"TilretteleggingForm.RedusertArbeid"}),value:F.DELVIS_TILRETTELEGGING},{label:d.formatMessage({id:"TilretteleggingForm.KanIkkeGjennomfores"}),value:F.INGEN_TILRETTELEGGING}]}),b.type===F.DELVIS_TILRETTELEGGING&&e.jsxs(e.Fragment,{children:[(n.stillingsprosent===void 0||n.type!==F.DELVIS_TILRETTELEGGING||k||b.kilde===D.REGISTRERT_AV_SAKSBEHANDLER)&&e.jsx(ye,{name:`${t}.stillingsprosent`,className:he.arbeidsprosent,readOnly:a,label:d.formatMessage({id:"TilretteleggingForm.Arbeidsprosent"}),description:d.formatMessage({id:"TilretteleggingForm.ArbeidsprosentBeskrivelse"}),validate:[N,je,Te,ve],forceTwoDecimalDigits:!0,onChange:A=>{const I=$e(g,y,A);v.setValue(`${t}.overstyrtUtbetalingsgrad`,I,{shouldDirty:!0})}}),e.jsx(ye,{name:`${t}.overstyrtUtbetalingsgrad`,className:he.utbetalingsgrad,readOnly:a,label:d.formatMessage({id:"TilretteleggingForm.ProsentSvp"}),description:d.formatMessage({id:"TilretteleggingForm.ProsentSvpBeskrivelse"}),validate:[N,je,Te,ve,A=>!g&&A===0?d.formatMessage({id:"TilretteleggingForm.AngiUtbetalingsgrad"}):null],forceTwoDecimalDigits:!0,disabled:b.stillingsprosent===void 0})]}),!a&&e.jsxs(w,{gap:"2",children:[e.jsx(_,{size:"small",variant:"primary",type:"button",disabled:!v.formState.isDirty||!1,loading:!1,onClick:v.handleSubmit(A=>V(A)),children:k?e.jsx(p,{id:"TilretteleggingForm.LeggTil"}):e.jsx(p,{id:"TilretteleggingForm.Oppdater"})}),e.jsx(_,{size:"small",variant:"secondary",onClick:G,type:"button",children:k?e.jsx(p,{id:"TilretteleggingForm.AvsluttOgSlett"}):e.jsx(p,{id:"TilretteleggingForm.Avbryt"})}),!k&&e.jsxs(e.Fragment,{children:[e.jsx(Ge,{}),e.jsx(_,{size:"small",variant:"secondary",onClick:j,type:"button",children:e.jsx(p,{id:"TilretteleggingForm.SlettPeriode"})})]})]})]})})})};ze.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForm",props:{tilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`},description:""},termindato:{required:!0,tsType:{name:"string"},description:""},index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterTilrettelegging:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: ArbeidsforholdTilretteleggingDato) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`},name:"values"}],return:{name:"void"}}},description:""},avbrytEditering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},stillingsprosentArbeidsforhold:{required:!0,tsType:{name:"number"},description:""},arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`},description:""},tomDatoForTilrettelegging:{required:!0,tsType:{name:"string"},description:""},slettTilrettelegging:{required:!0,tsType:{name:"signature",type:"function",raw:"(fomDato: string) => void",signature:{arguments:[{type:{name:"string"},name:"fomDato"}],return:{name:"void"}}},description:""}}};const Er=(n,r,t,a)=>i=>{const g=r.filter(l=>l.fom!==a.fom).some(l=>l.fom===i);return t.some(l=>l.fom===i)||g?n.formatMessage({id:"TilretteleggingForm.DuplikateDatoer"}):null},Pr=(n,r,t)=>a=>T(a).isBefore(t(`${r}.fom`))?n.formatMessage({id:"OppholdForm.TomForFom"}):null,Ae=(n,r,t)=>a=>{if(T(a).isAfter(T(t).subtract(3,"weeks").subtract(1,"day")))return n.formatMessage({id:"OppholdForm.EtterTermindato"});const i=r.reduce((s,g)=>s===void 0||T(g.fom).isBefore(s)?g.fom:s,void 0);return T(a).isBefore(i)?n.formatMessage({id:"OppholdForm.ForForsteDato"}):null},Br=(n,r,t,a)=>()=>{const i=n(`${r}.fom`),s=n(`${r}.tom`),g=a.filter(o=>o.fom!==t.fom).map(({fom:o,tom:l})=>[o,l]).concat([[i,s]]);return g.length>0&&T(i).isBefore(T(s))?Le(g):void 0},Je=({opphold:n,index:r,readOnly:t,oppdaterOpphold:a,avbrytEditering:i,slettOpphold:s,alleTilrettelegginger:g,alleOpphold:o,termindato:l})=>{const u=B(),d=!n.fom,k=J({defaultValues:{[r]:n}}),f=q=>(a(q[r]),k.reset(q),Promise.resolve()),y=()=>(s(n),Promise.resolve()),m=()=>{i(),k.reset()},v=t||n.oppholdKilde==="INNTEKTSMELDING";return e.jsx(oe,{...k,children:e.jsx("div",{style:{backgroundColor:"white",marginLeft:"-56px",marginTop:"-9px",marginBottom:"-8px",marginRight:"-56px",padding:"24px"},children:e.jsxs(x,{gap:"10",children:[e.jsxs(w,{gap:"4",children:[e.jsx(Y,{name:`${r}.fom`,label:u.formatMessage({id:"OppholdForm.FraOgMed"}),validate:[N,$,Er(u,o,g,n),Ae(u,g,l)],isReadOnly:v}),e.jsx(Y,{name:`${r}.tom`,label:u.formatMessage({id:"OppholdForm.TilOgMed"}),validate:[N,$,Pr(u,r,k.getValues),Ae(u,g,l),Br(k.getValues,r,n,o)],isReadOnly:v})]}),e.jsx(ge,{name:`${r}.oppholdÅrsak`,label:u.formatMessage({id:"OppholdForm.GrunnTilOpphold"}),validate:[N],isReadOnly:v,radios:[{label:u.formatMessage({id:"OppholdForm.Sykepenger"}),value:"SYKEPENGER"},{label:u.formatMessage({id:"OppholdForm.Ferie"}),value:"FERIE"}]}),!v&&e.jsxs(w,{gap:"2",children:[e.jsx(_,{size:"small",variant:"primary",type:"button",disabled:!k.formState.isDirty||!1,loading:!1,onClick:k.handleSubmit(q=>f(q)),children:d?e.jsx(p,{id:"OppholdForm.LeggTil"}):e.jsx(p,{id:"OppholdForm.Oppdater"})}),e.jsx(_,{size:"small",variant:"secondary",onClick:m,type:"button",children:d?e.jsx(p,{id:"OppholdForm.AvsluttOgSlett"}):e.jsx(p,{id:"OppholdForm.Avbryt"})}),!d&&e.jsxs(e.Fragment,{children:[e.jsx(Ge,{}),e.jsx(_,{size:"small",variant:"secondary",onClick:y,type:"button",children:e.jsx(p,{id:"OppholdForm.SlettPeriode"})})]})]})]})})})};Je.__docgenInfo={description:"",methods:[],displayName:"OppholdForm",props:{opphold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`},description:""},index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterOpphold:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: SvpAvklartOppholdPeriode) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`},name:"values"}],return:{name:"void"}}},description:""},slettOpphold:{required:!0,tsType:{name:"signature",type:"function",raw:"(opphold: SvpAvklartOppholdPeriode) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`},name:"opphold"}],return:{name:"void"}}},description:""},avbrytEditering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},alleTilrettelegginger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]"},description:""},alleOpphold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]"},description:""},termindato:{required:!0,tsType:{name:"string"},description:""}}};const Fr="_row_14uqf_1",Ir="_openRow_14uqf_7",Re={row:Fr,openRow:Ir},Or=(n,r)=>r.oppholdÅrsak===void 0?n.formatMessage({id:"TilretteleggingPerioderTabellRad.Opphold"}):r.oppholdÅrsak==="FERIE"?n.formatMessage({id:"TilretteleggingPerioderTabellRad.Ferie"}):n.formatMessage({id:"TilretteleggingPerioderTabellRad.Sykepenger"}),Kr=(n,r)=>{switch(r.oppholdKilde){case"SØKNAD":return n.formatMessage({id:"TilretteleggingPerioderTabellRad.Soknad"});case"INNTEKTSMELDING":return n.formatMessage({id:"TilretteleggingPerioderTabellRad.Inntektsmelding"});default:return n.formatMessage({id:"TilretteleggingPerioderTabellRad.Saksbehandler"})}},We=({navn:n,opphold:r,index:t,readOnly:a,openRad:i,fjernOpphold:s,setLeggTilKnapperDisablet:g,arbeidsforhold:o,termindato:l})=>{const u=B(),[d,k]=h.useState(i),{setValue:f}=W(),y=v=>{k(!1),g(!1),f(n,v,{shouldDirty:!0})},m=()=>{r.fom||s(),g(!1),k(!1)};return e.jsxs(S.ExpandableRow,{open:d,expandOnRowClick:!0,onOpenChange:()=>k(!d),onClick:()=>k(!d),content:e.jsx(Je,{opphold:r,index:t,oppdaterOpphold:y,avbrytEditering:m,readOnly:a,alleTilrettelegginger:o.tilretteleggingDatoer,alleOpphold:o.avklarteOppholdPerioder,termindato:l,slettOpphold:s}),togglePlacement:"right",className:d?Re.openRow:Re.row,children:[e.jsx(S.DataCell,{children:r.fom?e.jsx(le,{dateStringFom:r.fom,dateStringTom:r.tom}):e.jsx(p,{id:"TilretteleggingPerioderTabellRad.Periode"})}),e.jsx(S.DataCell,{children:Or(u,r)}),e.jsx(S.DataCell,{children:e.jsx(z,{size:"small",variant:"neutral-moderate",children:Kr(u,r)})})]})};We.__docgenInfo={description:"",methods:[],displayName:"OppholdPeriodeTabellRad",props:{navn:{required:!0,tsType:{name:"string"},description:""},opphold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},openRad:{required:!0,tsType:{name:"boolean"},description:""},fjernOpphold:{required:!0,tsType:{name:"signature",type:"function",raw:"(opphold?: SvpAvklartOppholdPeriode) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`},name:"opphold"}],return:{name:"void"}}},description:""},setLeggTilKnapperDisablet:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""},arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`},description:""},termindato:{required:!0,tsType:{name:"string"},description:""}}};const Nr="_row_14uqf_1",Vr="_openRow_14uqf_7",ce={row:Nr,openRow:Vr},Dr=(n,r,t,a)=>{const i=Ye(t),s=a.type===F.INGEN_TILRETTELEGGING?100:a.stillingsprosent,g=a.fom&&s?ke(a,r,i):0;return a.fom?n.formatMessage({id:"TilretteleggingPerioderTabellRad.SVPprosent"},{prosent:g??"0"}):n.formatMessage({id:"TilretteleggingPerioderTabellRad.Tilrettelegging"})},Gr=(n,r)=>r.kilde===D.REGISTRERT_AV_SAKSBEHANDLER||r.fom===void 0?n.formatMessage({id:"TilretteleggingPerioderTabellRad.Saksbehandler"}):r.kilde===D.ENDRET_AV_SAKSBEHANDLER?n.formatMessage({id:"TilretteleggingPerioderTabellRad.EndretAvSaksbehandler"}):r.kilde===D.TIDLIGERE_VEDTAK?n.formatMessage({id:"TilretteleggingPerioderTabellRad.TidligereVedtak"}):n.formatMessage({id:"TilretteleggingPerioderTabellRad.Soknad"}),Qe=({navn:n,tilrettelegging:r,index:t,readOnly:a,openRad:i,fjernTilrettelegging:s,setLeggTilKnapperDisablet:g,stillingsprosentArbeidsforhold:o,arbeidsforhold:l,tomDatoForTilrettelegging:u,termindato:d})=>{const k=B(),[f,y]=h.useState(i),{setValue:m}=W(),v=b=>{y(!1),g(!1),m(n,b,{shouldDirty:!0})},q=()=>{r.fom||s(),g(!1),y(!1)};return e.jsxs(S.ExpandableRow,{open:f,expandOnRowClick:!0,onOpenChange:()=>y(!f),onClick:()=>y(!f),content:e.jsx(ze,{tilrettelegging:r,termindato:d,index:t,oppdaterTilrettelegging:v,avbrytEditering:q,readOnly:a,stillingsprosentArbeidsforhold:o,arbeidsforhold:l,tomDatoForTilrettelegging:u,slettTilrettelegging:s}),togglePlacement:"right",className:f?ce.openRow:ce.row,children:[e.jsx(S.DataCell,{children:r.fom?e.jsx(le,{dateStringFom:r.fom,dateStringTom:u}):e.jsx(p,{id:"TilretteleggingPerioderTabellRad.Periode"})}),e.jsx(S.DataCell,{children:Dr(k,o,l,r)}),e.jsx(S.DataCell,{children:e.jsx(z,{size:"small",variant:"neutral-moderate",children:Gr(k,r)})})]})};Qe.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingPeriodeTabellRad",props:{navn:{required:!0,tsType:{name:"string"},description:""},tilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},openRad:{required:!0,tsType:{name:"boolean"},description:""},fjernTilrettelegging:{required:!0,tsType:{name:"signature",type:"function",raw:"(fomDato?: string) => void",signature:{arguments:[{type:{name:"string"},name:"fomDato"}],return:{name:"void"}}},description:""},setLeggTilKnapperDisablet:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""},stillingsprosentArbeidsforhold:{required:!0,tsType:{name:"number"},description:""},arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`},description:""},tomDatoForTilrettelegging:{required:!0,tsType:{name:"string"},description:""},termindato:{required:!0,tsType:{name:"string"},description:""}}};const Ze=(n,r,t)=>{const a=n[t+1];return a?r.find(s=>s.fom===a)||Ze(n,r,t+1):void 0},Xe=({arbeidsforhold:n,arbeidsforholdIndex:r,readOnly:t,stillingsprosentArbeidsforhold:a,termindato:i})=>{const s=`arbeidsforhold.${r}.tilretteleggingDatoer`,g=`arbeidsforhold.${r}.avklarteOppholdPerioder`,[o,l]=h.useState(!1),{append:u,remove:d}=se({name:s}),{append:k,remove:f}=se({name:g}),{tilretteleggingDatoer:y,avklarteOppholdPerioder:m}=n,v=()=>{l(!0),k({fom:void 0,tom:void 0,oppholdÅrsak:void 0,oppholdKilde:"REGISTRERT_AV_SAKSBEHANDLER"})},q=()=>{l(!0),u({fom:void 0,type:void 0,kilde:D.REGISTRERT_AV_SAKSBEHANDLER})},b=j=>{d(j?y.findIndex(A=>A.fom===j):y.length-1)},V=j=>{f(j?m.findIndex(A=>A.fom===j.fom&&A.tom===j.tom&&A.oppholdKilde===j.oppholdKilde):m.length-1)},G=[...y,...m].sort((j,A)=>j.fom?A.fom?T(j.fom).diff(T(A.fom)):-1:1);return e.jsxs(x,{gap:"6",children:[e.jsx(S,{size:"small",children:e.jsx(S.Body,{children:G.map((j,A)=>{if("kilde"in j){const K=G.map(R=>R.fom),L=y.findIndex(R=>R.fom===j.fom),U=Ze(K,y,A),Q=U!=null&&U.fom?T(U.fom).subtract(1,"day").format(pe):T(i).subtract(3,"week").subtract(1,"day").format(pe),Z=`${s}.${L}`;return e.jsx(Qe,{navn:Z,tilrettelegging:j,readOnly:t,index:r+L,openRad:j.fom===void 0,fjernTilrettelegging:b,setLeggTilKnapperDisablet:l,stillingsprosentArbeidsforhold:a,arbeidsforhold:n,tomDatoForTilrettelegging:Q,termindato:i},Z)}const I=m.findIndex(K=>K.fom===j.fom&&K.tom===j.tom&&K.oppholdKilde===j.oppholdKilde),M=`${g}.${I}`;return e.jsx(We,{navn:M,opphold:j,readOnly:t,index:r+I,openRad:j.fom===void 0,fjernOpphold:V,setLeggTilKnapperDisablet:l,arbeidsforhold:n,termindato:i},M)})})}),!t&&e.jsxs(w,{gap:"4",children:[e.jsx(_,{size:"small",variant:"secondary",type:"button",icon:e.jsx(be,{"aria-hidden":!0}),onClick:q,disabled:o,children:e.jsx(p,{id:"TilretteleggingFieldArray.LeggTilTilrettelegging"})}),e.jsx(_,{size:"small",variant:"secondary",onClick:v,icon:e.jsx(be,{"aria-hidden":!0}),type:"button",disabled:o,children:e.jsx(p,{id:"TilretteleggingFieldArray.LeggTilOpphold"})})]})]})};Xe.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingOgOppholdPerioderPanel",props:{arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`},description:""},arbeidsforholdIndex:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},stillingsprosentArbeidsforhold:{required:!0,tsType:{name:"number"},description:""},termindato:{required:!0,tsType:{name:"string"},description:""}}};const en=({velferdspermisjon:n,arbeidsforholdIndex:r,readOnly:t,lukkRad:a,oppdaterOverstyrtUtbetalingsgrad:i})=>{const s=B(),{setValue:g,getValues:o}=W(),l=o(`arbeidsforhold.${r}.velferdspermisjoner`),u=l.findIndex(y=>y.permisjonFom===n.permisjonFom&&y.permisjonTom===n.permisjonTom),d=J({defaultValues:{[u]:{...n}}}),k=y=>{const m=y[u];g(`arbeidsforhold.${r}.velferdspermisjoner.${u}`,m,{shouldDirty:!0}),m.erGyldig&&n.permisjonsprosent===100&&g(`arbeidsforhold.${r}.skalBrukes`,!1,{shouldDirty:!0});const q=l.filter((b,V)=>u!==V).concat(m).filter(b=>b.erGyldig).map(b=>b.permisjonsprosent).reduce((b,V)=>b+V,0);return i(q),d.reset(y),a(),Promise.resolve()},f=d.watch(`${u}.erGyldig`);return e.jsx(oe,{...d,children:e.jsx("div",{style:{backgroundColor:"white",marginLeft:"-56px",marginTop:"-9px",marginBottom:"-8px",marginRight:"-56px",padding:"24px"},children:e.jsxs(x,{gap:"5",children:[e.jsx(ge,{name:`${u}.erGyldig`,label:s.formatMessage({id:"VelferdspermisjonPanel.PermisjonGyldig"}),description:s.formatMessage({id:"VelferdspermisjonPanel.PermisjonGyldigDetaljer"}),validate:[N],isReadOnly:t,isTrueOrFalseSelection:!0,radios:[{label:s.formatMessage({id:"VelferdspermisjonPanel.Ja"}),value:"true"},{label:s.formatMessage({id:"VelferdspermisjonPanel.Nei"}),value:"false"}]}),f&&n.permisjonsprosent===100&&e.jsx(Ke,{variant:"info",size:"small",children:e.jsx(p,{id:"VelferdspermisjonPanel.Permisjon100ProsentOgGyldig"})}),e.jsx(w,{children:e.jsx(_,{size:"small",variant:"primary",type:"button",disabled:!d.formState.isDirty||!1,onClick:d.handleSubmit(k),children:e.jsx(p,{id:"VelferdspermisjonPanel.Oppdater"})})})]})})})};en.__docgenInfo={description:"",methods:[],displayName:"VelferdspermisjonForm",props:{velferdspermisjon:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`},description:""},arbeidsforholdIndex:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oppdaterOverstyrtUtbetalingsgrad:{required:!0,tsType:{name:"signature",type:"function",raw:"(velferdspermisjonprosent: number) => void",signature:{arguments:[{type:{name:"number"},name:"velferdspermisjonprosent"}],return:{name:"void"}}},description:""}}};const Lr="_row_1ix2u_1",xr="_openRow_1ix2u_7",_r="_apRow_1ix2u_14",ae={row:Lr,openRow:xr,apRow:_r},Mr=(n,r)=>r?ae.apRow:n?ae.openRow:ae.row,nn=({velferdspermisjon:n,arbeidsforholdIndex:r,readOnly:t,oppdaterOverstyrtUtbetalingsgrad:a})=>{const i=n.erGyldig===void 0||n.erGyldig===null,[s,g]=h.useState(i),o=h.useCallback(()=>g(!1),[]);return e.jsxs(S.ExpandableRow,{open:s,expandOnRowClick:!0,onOpenChange:()=>g(!s),onClick:()=>g(!s),content:e.jsx(en,{velferdspermisjon:n,arbeidsforholdIndex:r,readOnly:t,lukkRad:o,oppdaterOverstyrtUtbetalingsgrad:a}),togglePlacement:"right",className:Mr(s,i),children:[e.jsx(S.DataCell,{children:e.jsx(le,{dateStringFom:n.permisjonFom,dateStringTom:n.permisjonTom})}),e.jsx(S.DataCell,{children:e.jsx(p,{id:"VelferdspermisjonPanel.Permisjon",values:{type:n.type.toLowerCase(),permisjon:n.permisjonsprosent}})}),e.jsx(S.DataCell,{children:e.jsx(z,{variant:"neutral-moderate",size:"small",children:e.jsx(p,{id:"VelferdspermisjonPanel.AAregisteret"})})})]})};nn.__docgenInfo={description:"",methods:[],displayName:"VelferdspermisjonTabellRad",props:{velferdspermisjon:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`},description:""},arbeidsforholdIndex:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterOverstyrtUtbetalingsgrad:{required:!0,tsType:{name:"signature",type:"function",raw:"(velferdspermisjonprosent: number) => void",signature:{arguments:[{type:{name:"number"},name:"velferdspermisjonprosent"}],return:{name:"void"}}},description:""}}};const Ur="_image_489xq_1",Hr={image:Ur},rn=({velferdspermisjoner:n,arbeidsforholdIndex:r,readOnly:t,oppdaterOverstyrtUtbetalingsgrad:a})=>{const i=B();return e.jsxs(x,{gap:"2",children:[e.jsxs(w,{gap:"4",align:"center",children:[e.jsx(ne,{size:"small",children:e.jsx(p,{id:"TilretteleggingForArbeidsgiverPanel.Velferdspermisjon"})}),n.some(s=>s.erGyldig===void 0||s.erGyldig===null)&&e.jsx(Ne,{title:i.formatMessage({id:"TilretteleggingForArbeidsgiverPanel.ErPermisjonGyldg"}),className:Hr.image})]}),e.jsx(S,{size:"small",children:e.jsx(S.Body,{children:n.map(s=>e.jsx(nn,{velferdspermisjon:s,readOnly:t,arbeidsforholdIndex:r,oppdaterOverstyrtUtbetalingsgrad:a},s.permisjonFom))})})]})};rn.__docgenInfo={description:"",methods:[],displayName:"VelferdspermisjonPanel",props:{velferdspermisjoner:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]"},description:""},arbeidsforholdIndex:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterOverstyrtUtbetalingsgrad:{required:!0,tsType:{name:"signature",type:"function",raw:"(velferdspermisjonprosent: number) => void",signature:{arguments:[{type:{name:"number"},name:"velferdspermisjonprosent"}],return:{name:"void"}}},description:""}}};T.extend(br);const Cr=(n,r,t)=>()=>{const a=r("termindato"),i=r("fødselsdato"),s=T(t),g=T(a).subtract(3,"week").subtract(1,"day"),o=i?T.min(g,T(i)):g;return o&&s.isValid()&&!s.isBefore(o)?n.formatMessage({id:"TilretteleggingForArbeidsgiverPanel.TilretteleggingTidligereEnn"},{dato:o.format(Oe)}):null},tn=(n,r)=>n.filter(t=>!T(t.permisjonFom).isAfter(r)&&(t.permisjonTom==null||!T(t.permisjonTom).isBefore(r))),an=({arbeidsforhold:n,arbeidsforholdIndex:r,readOnly:t,visInfoAlert:a,stillingsprosentArbeidsforhold:i})=>{const s=B(),{getValues:g,watch:o,setValue:l}=W(),u=o(`arbeidsforhold.${r}.tilretteleggingBehovFom`),d=h.useMemo(()=>tn(n.velferdspermisjoner,u),[n.velferdspermisjoner,u]),k=o("termindato"),f=d.some(m=>m.erGyldig===void 0||m.erGyldig===null),y=m=>{n.tilretteleggingDatoer.forEach((v,q)=>{const b=ke(v,i,m,!1);b!==void 0&&l(`arbeidsforhold.${r}.tilretteleggingDatoer.${q}`,{...v,overstyrtUtbetalingsgrad:b})})};return e.jsxs(x,{gap:"4",children:[a&&e.jsx(Ve,{children:[e.jsx(p,{id:"TilretteleggingFaktaForm.UndersokNarmere"},"svangerskapspengerAp")]}),e.jsx(er,{readOnly:t,name:`arbeidsforhold.${r}.skalBrukes`,label:e.jsx(p,{id:"TilretteleggingForArbeidsgiverPanel.SkalHaSvpForArbeidsforhold"})}),e.jsxs(x,{gap:"8",children:[e.jsx(Y,{name:`arbeidsforhold.${r}.tilretteleggingBehovFom`,label:s.formatMessage({id:"TilretteleggingForArbeidsgiverPanel.DatoForTilrettelegging"}),validate:[N,$,Cr(s,g,u)],isReadOnly:t}),d.length>0&&e.jsx(rn,{velferdspermisjoner:d,arbeidsforholdIndex:r,readOnly:t,oppdaterOverstyrtUtbetalingsgrad:y}),e.jsxs(x,{gap:"2",children:[e.jsx(ne,{size:"small",children:e.jsx(p,{id:"TilretteleggingForArbeidsgiverPanel.Perioder"})}),e.jsx(Xe,{arbeidsforhold:n,arbeidsforholdIndex:r,readOnly:t||f,stillingsprosentArbeidsforhold:i,termindato:k})]})]})]})};an.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdPanel",props:{arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`},description:""},arbeidsforholdIndex:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},visInfoAlert:{required:!0,tsType:{name:"boolean"},description:""},stillingsprosentArbeidsforhold:{required:!0,tsType:{name:"number"},description:""}}};const Yr="_card_1xokx_1",$r="_padding_1xokx_9",zr="_image_1xokx_13",X={card:Yr,padding:$r,image:zr},Jr=n=>n?`...${n.substring(n.length-4,n.length)}`:"",Wr=(n,r)=>n.length>1?n.find(t=>t.internArbeidsforholdId===r):n.length===1?n[0]:void 0,ie=(n,r,t)=>{const a=T(n);return!(a.isBefore(T(r))||a.isAfter(T(t)))},Qr=(n,r)=>r&&n?e.jsx(p,{id:"ArbeidsforholdFieldArray.SvpIkkeBeregnet"}):n?e.jsx(p,{id:"ArbeidsforholdFieldArray.SkalHaSvp"}):e.jsx(p,{id:"ArbeidsforholdFieldArray.SkalIkkeHaSvp"}),Zr=(n,r)=>n.filter(a=>ie(r,a.fom,a.tom)).reduce((a,i)=>a+i.stillingsprosent,0),sn=({sorterteArbeidsforhold:n,aoiArbeidsforhold:r,arbeidsgiverOpplysningerPerId:t,readOnly:a,uttakArbeidTyper:i})=>{const{control:s}=W(),{fields:g}=se({control:s,name:"arbeidsforhold"});return e.jsx(e.Fragment,{children:g.map((o,l)=>{const u=n[l],d=t[u.arbeidsgiverReferanse],k=r.filter(q=>q.arbeidsgiverIdent===u.arbeidsgiverReferanse),f=Wr(k,u.internArbeidsforholdReferanse),y=f?!ie(u.tilretteleggingBehovFom,f.fom,f.tom):k.length>0&&k.every(q=>!ie(u.tilretteleggingBehovFom,q.fom,q.tom)),m=f?f.stillingsprosent:Zr(k,u.tilretteleggingBehovFom),v=i.find(q=>q.kode===u.uttakArbeidType);return e.jsx(qn.Fragment,{children:e.jsxs(te,{"aria-label":"arbeidsgiver",defaultOpen:!0,className:X.card,children:[e.jsx(te.Header,{children:e.jsx("div",{className:X.padding,children:e.jsxs(w,{gap:"14",align:"center",children:[e.jsxs(w,{gap:"4",align:"center",children:[e.jsx(nr,{color:"var(--a-blue-600)",className:X.image}),e.jsx($n,{size:"small",children:(d==null?void 0:d.navn)||(v==null?void 0:v.navn)}),(d==null?void 0:d.identifikator)&&e.jsx(C,{size:"small",children:d.identifikator}),u.eksternArbeidsforholdReferanse&&e.jsx(C,{size:"small",children:Jr(u.eksternArbeidsforholdReferanse)})]}),e.jsxs(w,{gap:"4",align:"center",children:[e.jsx(z,{size:"small",variant:"neutral-moderate",children:e.jsx(p,{id:"ArbeidsforholdFieldArray.Stillingsprosent",values:{stillingsprosent:m}})}),e.jsx(z,{size:"small",variant:"neutral-moderate",children:Qr(u.skalBrukes,y)}),u.skalBrukes&&y&&e.jsx(Ne,{color:"var(--a-orange-600)",className:X.image})]})]})})}),e.jsx(te.Content,{children:e.jsx(an,{arbeidsforhold:u,arbeidsforholdIndex:l,readOnly:a,visInfoAlert:u.skalBrukes&&y,stillingsprosentArbeidsforhold:m})})]})},o.id)})})};sn.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]"},description:""},aoiArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},uttakArbeidTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Xr=ar(1500),et=(n,r)=>[...n||[]].sort((t,a)=>{const i=r[t.arbeidsgiverReferanse],s=r[a.arbeidsgiverReferanse];return i&&s?i.navn.localeCompare(s.navn):0}),nt=n=>{const r=n.find(t=>t.definisjon===c.FODSELTILRETTELEGGING);return r?r.begrunnelse:void 0},rt=n=>r=>r!==void 0||n,we=n=>n.some(r=>tn(r.velferdspermisjoner,r.tilretteleggingBehovFom).some(t=>t.erGyldig===void 0||t.erGyldig===null)),H=({children:n})=>e.jsx(Ke,{variant:"error",children:n}),ln=({behandlingVersjon:n,readOnly:r,harApneAksjonspunkter:t,arbeidsgiverOpplysningerPerId:a,aksjonspunkter:i,svangerskapspengerTilrettelegging:s,aoiArbeidsforhold:g,submitCallback:o,formData:l,setFormData:u,submittable:d,uttakArbeidTyper:k})=>{const f=B(),y=h.useMemo(()=>et(s.arbeidsforholdListe,a),[n]),m=J({defaultValues:l||{arbeidsforhold:y,termindato:s?s.termindato:"",fødselsdato:s?s.fødselsdato:"",begrunnelse:nt(i)}}),v=(s==null?void 0:s.fødselsdato)||"",q=rt(m.formState.isDirty),b=m.watch("arbeidsforhold"),V=we(y),G=we(b),j=!b.some(R=>R.skalBrukes),A=b.some(R=>R.tilretteleggingDatoer.some(E=>!E.fom)||R.avklarteOppholdPerioder.some(E=>!E.fom)),I=b.some(R=>R.skalBrukes&&R.tilretteleggingDatoer.length===0),M=b.some(R=>R.skalBrukes&&R.velferdspermisjoner.some(E=>E.erGyldig&&E.permisjonsprosent===100)),K=b.some(R=>R.avklarteOppholdPerioder.filter(E=>E.fom&&E.tom).length>0?Le(R.avklarteOppholdPerioder.filter(E=>E.fom&&E.tom).map(E=>[E.fom,E.tom])):!1),[L,U]=h.useState(!1),Q=G||j||A||I||M||K,Z=h.useCallback(R=>Q?(U(!0),Promise.resolve()):o({kode:c.FODSELTILRETTELEGGING,termindato:R.termindato,fødselsdato:R.fødselsdato,begrunnelse:R.begrunnelse,bekreftetSvpArbeidsforholdList:R.arbeidsforhold}),[Q,o]);return e.jsx(xe,{formMethods:m,setDataOnUnmount:u,onSubmit:Z,children:e.jsxs(x,{gap:"8",children:[t&&e.jsx(Ve,{children:V?[e.jsx(p,{id:"TilretteleggingFaktaForm.AksjonspunktOgVelferdspermisjoner"},"svangerskapspengerAp")]:[e.jsx(p,{id:"TilretteleggingFaktaForm.Aksjonspunkt"},"svangerskapspengerAp")]}),e.jsxs(w,{gap:"4",wrap:!0,children:[e.jsx(Y,{name:"termindato",label:f.formatMessage({id:"TilretteleggingFaktaForm.Termindato"}),validate:[N,$],isReadOnly:r}),v&&e.jsx(Y,{name:"fødselsdato",label:f.formatMessage({id:"TilretteleggingFaktaForm.Fodselsdato"}),validate:[N,$],isReadOnly:r})]}),e.jsx(sn,{sorterteArbeidsforhold:b,aoiArbeidsforhold:g,arbeidsgiverOpplysningerPerId:a,readOnly:r,uttakArbeidTyper:k}),L&&G&&e.jsx(H,{children:e.jsx(p,{id:"TilretteleggingFaktaForm.IkkeAllePermisjonerVurdert"})}),L&&j&&e.jsx(H,{children:e.jsx(p,{id:"TilretteleggingFaktaForm.HarIkkeValgtArbeidsforhold"})}),L&&A&&e.jsx(H,{children:e.jsx(p,{id:"TilretteleggingFaktaForm.PeriodeIkkeLagtTil"})}),L&&I&&e.jsx(H,{children:e.jsx(p,{id:"TilretteleggingFaktaForm.ArbeidsforholdUtenTilrettelegging"})}),L&&M&&e.jsx(H,{children:e.jsx(p,{id:"TilretteleggingFaktaForm.ValgtSvpVedGyldig100Permisjon"})}),L&&K&&e.jsx(H,{children:e.jsx(p,{id:"TilretteleggingFaktaForm.HarOverlappendePeriode"})}),e.jsx(rr,{name:"begrunnelse",label:f.formatMessage({id:"TilretteleggingFaktaForm.BegrunnEndringene"}),validate:[q,Xr,tr],maxLength:1500,readOnly:r}),e.jsx(w,{children:e.jsx(Un,{isSubmittable:d,isReadOnly:r,isSubmitting:m.formState.isSubmitting,isDirty:m.formState.isDirty})})]})})};ln.__docgenInfo={description:`TilretteleggingFaktaForm

Viser tillrettlegging før svangerskapspenger`,methods:[],displayName:"TilretteleggingFaktaForm",props:{behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},harApneAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},svangerskapspengerTilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!1}},{key:"arbeidsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}},{key:"saksbehandlet",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}>`},description:""},aoiArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BekreftSvangerskapspengerAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  termindato: string;
  fødselsdato: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FODSELTILRETTELEGGING>`,elements:[{name:"signature",type:"object",raw:`{
  termindato: string;
  fødselsdato: string;
  bekreftetSvpArbeidsforholdList: ArbeidsforholdFodselOgTilrettelegging[];
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"bekreftetSvpArbeidsforholdList",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},formData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  termindato: string;
  fødselsdato: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}},{key:"termindato",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: TilretteleggingFormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  termindato: string;
  fødselsdato: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}},{key:"termindato",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},uttakArbeidTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const tt={"ArbeidsforholdFieldArray.SkalHaSvp":"Skal ha svangerskapspenger","ArbeidsforholdFieldArray.SkalIkkeHaSvp":"Skal ikke ha svangerskapspenger","ArbeidsforholdFieldArray.SvpIkkeBeregnet":"Svangerskapspenger kan ikke beregnes","ArbeidsforholdFieldArray.Stillingsprosent":"{stillingsprosent}% stilling","TilretteleggingFaktaForm.Aksjonspunkt":"Kontroller opplysninger fra jordmor og arbeidsgiver","TilretteleggingFaktaForm.AksjonspunktOgVelferdspermisjoner":"Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer","TilretteleggingFaktaForm.Termindato":"Termindato","TilretteleggingFaktaForm.Fodselsdato":"Fødselsdato","TilretteleggingFaktaForm.BegrunnEndringene":"Begrunn endringene","TilretteleggingFaktaForm.UndersokNarmere":"Søker var ikke ansatt da behovet for tilrettelegging oppsto. Vurder om du skal kontakte arbeidsgiver eller søker for avklaring. Hvis du innvilger behandlingen nå, vil bruker få 0 kroner utbetalt.","TilretteleggingFaktaForm.IkkeAllePermisjonerVurdert":"Ikke alle velferdspermisjoner er vurdert","TilretteleggingFaktaForm.HarIkkeValgtArbeidsforhold":"Minst ett arbeidsforhold må brukes","TilretteleggingFaktaForm.PeriodeIkkeLagtTil":"Det er minst en periode som er lagt til men ikke ferdigstilt","TilretteleggingFaktaForm.ArbeidsforholdUtenTilrettelegging":"Alle arbeidsforhold med svangerskapspenger må ha minst en tilretteleggingsperiode","TilretteleggingFaktaForm.ValgtSvpVedGyldig100Permisjon":"Arbeidsforhold med gyldig permisjon på 100% kan ikke ha svangerskapspenger","TilretteleggingFaktaForm.HarOverlappendePeriode":"Det finnes opphold med overlappende perioder","TilretteleggingForArbeidsgiverPanel.TilretteleggingTidligereEnn":"Tilrettelegging fra og med må være tidligere enn {dato}","TilretteleggingForArbeidsgiverPanel.DatoForTilrettelegging":"Dato for tilrettelegging fra lege eller jordmor","TilretteleggingForArbeidsgiverPanel.Perioder":"Perioder","TilretteleggingForArbeidsgiverPanel.SkalHaSvpForArbeidsforhold":"Skal ha svangerskapspenger for arbeidsforholdet","TilretteleggingForArbeidsgiverPanel.Velferdspermisjon":"Registrerte velferdspermisjoner","TilretteleggingForArbeidsgiverPanel.ErPermisjonGyldg":"Er permisjoner gyldige?","TilretteleggingForm.Tilretteleggingsbehov":"Tilretteleggingsbehov","TilretteleggingForm.FraOgMed":"Fra og med","TilretteleggingForm.KanGjennomfores":"Arbeidstakeren kan fortsette i samme stilling","TilretteleggingForm.RedusertArbeid":"Arbeidstakeren kan fortsette med redusert arbeidstid","TilretteleggingForm.KanIkkeGjennomfores":"Arbeidstakeren må midlertidig gå ut av sitt arbeid","TilretteleggingForm.LeggTil":"Legg til ny periode","TilretteleggingForm.AvsluttOgSlett":"Avbryt","TilretteleggingForm.Oppdater":"Oppdater","TilretteleggingForm.Avbryt":"Avbryt","TilretteleggingForm.ProsentSvp":"Prosent svangerskapspenger","TilretteleggingForm.SlettPeriode":"Slett periode","TilretteleggingForm.DuplikateDatoer":"Flere perioder med samme Fra og med","TilretteleggingForm.EtterTermindato":"Dato kan ikke være senere enn tre uker før termindato","TilretteleggingForm.ForForsteDato":"Dato kan ikke være før dato for tilrettelegging fra lege eller jordmor","TilretteleggingForm.Arbeidsprosent":"Arbeidsprosent","TilretteleggingForm.ArbeidsprosentBeskrivelse":"Dette er prosenten arbeidstaker skal jobbe i perioden","TilretteleggingForm.ProsentSvpBeskrivelse":"Utbetalingsgrad i perioden","TilretteleggingForm.AngiUtbetalingsgrad":"Utbetalingsgrad må være større enn 0 når stillingsprosenten er 0","TilretteleggingInfoPanel.Periode":"Periode på {periode}","TilretteleggingInfoPanel.TreUker":"Frem til tre uker før termin","TilretteleggingInfoPanel.Dager":"Frem til {dager} dager før termin","TilretteleggingInfoPanel.FraSoknad":"Fra søknaden","TilretteleggingInfoPanel.Sendt":"Mottatt {dato}","TilretteleggingInfoPanel.SvpOgArbeid":"Svangerskapspenger {svp}% og arbeide {arbeid}%","TilretteleggingInfoPanel.AvStillingsprosent":"Av stillingsprosent {stillingsprosent}%","TilretteleggingInfoPanel.Saksbehandler":"Saksbehandler","OppholdForm.SlettPeriode":"Slett periode","OppholdForm.LeggTil":"Legg til ny periode","OppholdForm.AvsluttOgSlett":"Avbryt","OppholdForm.Oppdater":"Oppdater","OppholdForm.Avbryt":"Avbryt","OppholdForm.FraOgMed":"Fra og med","OppholdForm.TilOgMed":"Til og med","OppholdForm.GrunnTilOpphold":"Grunn til opphold","OppholdForm.Sykepenger":"Sykepenger 100% i perioden med svangerskapspenger","OppholdForm.Ferie":"Ferie","OppholdForm.TomForFom":"Dato kan ikke være før fra og med","OppholdForm.EtterTermindato":"Dato kan ikke være senere enn tre uker før termindato","OppholdForm.ForForsteDato":"Dato kan ikke være før første tilrettelegging","TilretteleggingFieldArray.LeggTilTilrettelegging":"Periode med svangerskapspenger","TilretteleggingFieldArray.LeggTilOpphold":"Opphold","VelferdspermisjonPanel.Permisjon":"{permisjon}% {type}","VelferdspermisjonPanel.PermisjonGyldig":"Er permisjon gyldig?","VelferdspermisjonPanel.PermisjonGyldigDetaljer":"Hvis den er gyldig vil utbetalingsgraden for alle perioder for denne arbeidsgiveren reduseres med permisjonsprosent.","VelferdspermisjonPanel.Ja":"Ja","VelferdspermisjonPanel.Nei":"Nei","VelferdspermisjonPanel.Oppdater":"Oppdater","VelferdspermisjonPanel.AAregisteret":"AA-registeret","VelferdspermisjonPanel.Permisjon100ProsentOgGyldig":"Permisjonen på 100% er satt som gyldig, og dette fører til at søker ikke får svangerskapsenger for arbeidsforholdet.","TilretteleggingPerioderTabellRad.Periode":"Periode","TilretteleggingPerioderTabellRad.Saksbehandler":"Saksbehandler","TilretteleggingPerioderTabellRad.EndretAvSaksbehandler":"Endret av saksbehandler","TilretteleggingPerioderTabellRad.TidligereVedtak":"Tidligere vedtak","TilretteleggingPerioderTabellRad.Inntektsmelding":"Inntektsmelding","TilretteleggingPerioderTabellRad.Soknad":"Søknad","TilretteleggingPerioderTabellRad.Tilrettelegging":"Tilrettelegging","TilretteleggingPerioderTabellRad.Opphold":"Opphold","TilretteleggingPerioderTabellRad.Sykepenger":"Sykepenger 100%","TilretteleggingPerioderTabellRad.Ferie":"Ferie","TilretteleggingPerioderTabellRad.SVPprosent":"{prosent}% svangerskapspenger"},at=De(tt),on=({behandling:n,arbeidOgInntekt:r,alleKodeverk:t,...a})=>e.jsx(Ie,{value:at,children:e.jsx(ln,{behandlingVersjon:n.versjon,aoiArbeidsforhold:r.arbeidsforhold,uttakArbeidTyper:t[_e.UTTAK_ARBEID_TYPE],...a})});on.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingFaktaIndex",props:{svangerskapspengerTilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!1}},{key:"arbeidsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}},{key:"saksbehandlet",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}>`},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Se=[c.FODSELTILRETTELEGGING],st=[c.OVERSTYR_AVKLAR_STARTDATO],it=[P.ARBEID_OG_INNTEKT,P.SVANGERSKAPSPENGER_TILRETTELEGGING],gn=({arbeidsgiverOpplysningerPerId:n,...r})=>e.jsx(Hn,{...r,panelEndepunkter:it,aksjonspunktKoder:Se,overstyringApKoder:st,faktaPanelKode:sr.FODSELTILRETTELEGGING,faktaPanelMenyTekst:B().formatMessage({id:"FaktaInitPanel.Title.FodselOgTilrettelegging"}),skalPanelVisesIMeny:()=>!0,renderPanel:t=>e.jsx(on,{arbeidsgiverOpplysningerPerId:n,...t,readOnly:t.readOnly||!Se.some(a=>ir(a,r.behandling.aksjonspunkt))})});gn.__docgenInfo={description:"",methods:[],displayName:"FodselOgTilretteleggingFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const lt=[c.VURDER_OPPTJENINGSVILKARET],Ee=[ee.OPPTJENINGSPERIODE,ee.OPPTJENINGSVILKARET],ot=[P.OPPTJENING],un=({behandlingVersjon:n,rettigheter:r,...t})=>{const a=B();return e.jsx(Fe,{...t,behandlingVersjon:n,panelEndepunkter:ot,aksjonspunktKoder:lt,vilkarKoder:Ee,inngangsvilkarPanelKode:"OPPTJENINGSVILKARET",hentInngangsvilkarPanelTekst:()=>a.formatMessage({id:"OpptjeningVilkarView.VurderOmSøkerHarRett"}),renderPanel:(i,s,g)=>e.jsxs(e.Fragment,{children:[i.aksjonspunkter.length===0&&e.jsx(Kn,{aksjonspunkter:i.aksjonspunkter,aksjonspunktKode:c.OVERSTYRING_AV_OPPTJENINGSVILKARET,vilkar:i.vilkar,vilkarKoder:Ee,panelTekstKode:"Inngangsvilkar.Opptjeningsvilkaret",toggleOverstyring:g,erOverstyrt:s,overrideReadOnly:i.isReadOnly||t.harInngangsvilkarApentAksjonspunkt&&!(i.isAksjonspunktOpen||s),kanOverstyreAccess:r.kanOverstyreAccess}),i.aksjonspunkter.length>0&&e.jsx(jn,{erSvpFagsak:!0,lovReferanse:i.vilkar[0].lovReferanse,...i})]})})};un.__docgenInfo={description:"",methods:[],displayName:"OpptjeningInngangsvilkarInitPanel",props:{behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},rettigheter:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  writeAccess: Aksess;
  kanOverstyreAccess: Aksess;
}`,signature:{properties:[{key:"writeAccess",value:{name:"signature",type:"object",raw:`{
  employeeHasAccess: boolean;
  isEnabled: boolean;
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}},{key:"kanOverstyreAccess",value:{name:"signature",type:"object",raw:`{
  employeeHasAccess: boolean;
  isEnabled: boolean;
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}}]}},description:""},registrerInngangsvilkarPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: InngangsvilkarPanelData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  aksjonspunktTekst?: string;
  harApentAksjonspunkt: boolean;
  status: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"aksjonspunktTekst",value:{name:"string",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},harInngangsvilkarApentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""}}};const gt=n=>{const r=n.tilretteleggingDatoer.some(a=>a.type!==F.HEL_TILRETTELEGGING),t=n.tilretteleggingDatoer.some(a=>a.type===F.HEL_TILRETTELEGGING&&fe(a.fom).isAfter(fe(n.tilretteleggingBehovFom)));return r||t},ut=n=>n!=null&&n.arbeidsforholdListe?n.arbeidsforholdListe.some(r=>gt(r)):!1,dt=(n,r,t)=>({...de.buildInitialValues(n,r,t),...me.buildInitialValues(n)}),mt=n=>({...de.transformValues(n),...me.transformValues(n),kode:c.SVANGERSKAPSVILKARET}),dn=({readOnly:n,readOnlySubmitButton:r,isApOpen:t,erIkkeGodkjentAvBeslutter:a,svangerskapspengerTilrettelegging:i,aksjonspunkter:s,behandlingsresultat:g,alleKodeverk:o,submitCallback:l,status:u,formData:d,setFormData:k})=>{const f=h.useMemo(()=>ut(i),[i]),y=B(),m=h.useMemo(()=>dt(s,u,g),[g,s,u]),v=J({defaultValues:d||m}),q=v.watch("erVilkarOk");h.useEffect(()=>{q&&v.clearErrors()},[q]);const b=o[_e.AVSLAGSARSAK][ee.SVANGERSKAPVILKARET],G=s.some(A=>A.status===ue.OPPRETTET)?void 0:O.OPPFYLT===u,j=h.useCallback(A=>e.jsx("b",{children:A}),[]);return e.jsx(xe,{formMethods:v,onSubmit:A=>l(mt(A)),setDataOnUnmount:k,children:e.jsxs(ur,{title:y.formatMessage({id:"SvangerskapVilkarForm.Svangerskap"}),isAksjonspunktOpen:t,readOnlySubmitButton:r,readOnly:n,originalErVilkarOk:G,erIkkeGodkjentAvBeslutter:a,isDirty:v.formState.isDirty,isSubmitting:v.formState.isSubmitting,children:[e.jsx(ne,{size:"small",children:e.jsx(p,{id:"SvangerskapVilkarForm.RettTilSvp"})}),!f&&e.jsxs(e.Fragment,{children:[e.jsx(Jn,{sixteenPx:!0}),e.jsx(ne,{size:"small",children:e.jsx(p,{id:"SvangerskapVilkarForm.IkkeInnvilgetUttak"})})]}),e.jsx(de,{avslagsarsaker:b,readOnly:n,skalKunneInnvilge:f,customVilkarOppfyltText:e.jsx(p,{id:"SvangerskapVilkarForm.Oppfylt"}),customVilkarIkkeOppfyltText:e.jsx(p,{id:"SvangerskapVilkarForm.IkkeOppfylt",values:{b:j}})}),e.jsx(me,{readOnly:n,notRequired:q})]})})};dn.__docgenInfo={description:"SvangerskapsvilkårForm",methods:[],displayName:"SvangerskapVilkarForm",props:{behandlingsresultat:{required:!1,tsType:{name:"intersection['behandlingsresultat']",raw:"Behandling['behandlingsresultat']"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]"},description:""},status:{required:!0,tsType:{name:"string"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: BekreftSvangerskapspengervilkarAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SVANGERSKAPSVILKARET>`,elements:[{name:"signature",type:"object",raw:`{
  avslagskode?: string;
}`,signature:{properties:[{key:"avslagskode",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},isApOpen:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},svangerskapspengerTilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!1}},{key:"arbeidsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}},{key:"saksbehandlet",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}>`},description:""},formData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  erVilkarOk?: boolean;
  avslagCode?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"erVilkarOk",value:{name:"boolean",required:!1}},{key:"avslagCode",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  erVilkarOk?: boolean;
  avslagCode?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"erVilkarOk",value:{name:"boolean",required:!1}},{key:"avslagCode",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const kt={"SvangerskapVilkarForm.Svangerskap":"Svangerskap","SvangerskapVilkarForm.RettTilSvp":"Rett til svangerskapspenger","SvangerskapVilkarForm.Oppfylt":"Mor har rett til svangerskapspenger, vilkåret er oppfylt","SvangerskapVilkarForm.IkkeOppfylt":"Mor har ikke rett til svangerskapspenger, vilkåret er <b>ikke</b> oppfylt","SvangerskapVilkarForm.IkkeInnvilgetUttak":"Det finnes ingen perioder med svangerskapspenger som kan innvilges","ShowVilkarStatus.Check":"Informasjonen er utfylt"},pt=De(kt),mn=({behandling:n,aksjonspunkter:r,status:t,submitCallback:a,isReadOnly:i,readOnlySubmitButton:s,isAksjonspunktOpen:g,alleKodeverk:o,alleMerknaderFraBeslutter:l,svangerskapspengerTilrettelegging:u,formData:d,setFormData:k})=>e.jsx(Ie,{value:pt,children:e.jsx(dn,{behandlingsresultat:n.behandlingsresultat,aksjonspunkter:r,status:t,submitCallback:a,readOnly:i,readOnlySubmitButton:s,isApOpen:g,alleKodeverk:o,svangerskapspengerTilrettelegging:u,erIkkeGodkjentAvBeslutter:r.some(f=>{var y;return(y=l[f.definisjon])==null?void 0:y.notAccepted}),formData:d,setFormData:k})});mn.__docgenInfo={description:"",methods:[],displayName:"SvangerskapVilkarProsessIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"union",raw:`| {
    type: 'TEKST';
    tekst: string;
  }
| { type: 'LINJESKIFT' }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'TEKST';
  tekst: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'TEKST'",required:!0}},{key:"tekst",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'LINJESKIFT' }",signature:{properties:[{key:"type",value:{name:"literal",value:"'LINJESKIFT'",required:!0}}]}}]}],raw:"Linje[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: any) => Promise<void>",signature:{arguments:[{type:{name:"any"},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},status:{required:!0,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]"},description:""},vilkar:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},svangerskapspengerTilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!1}},{key:"arbeidsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}`,signature:{properties:[{key:"tilretteleggingId",value:{name:"number",required:!0}},{key:"tilretteleggingBehovFom",value:{name:"string",required:!0}},{key:"tilretteleggingDatoer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"overstyrtUtbetalingsgrad",value:{name:"number",required:!1}},{key:"kilde",value:{name:"SvpTilretteleggingFomKilde",required:!0}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>`}],raw:"ArbeidsforholdTilretteleggingDato[]",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"uttakArbeidType",value:{name:"string",required:!0}},{key:"opplysningerOmRisiko",value:{name:"string",required:!1}},{key:"opplysningerOmTilrettelegging",value:{name:"string",required:!1}},{key:"internArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdReferanse",value:{name:"string",required:!1}},{key:"skalBrukes",value:{name:"boolean",required:!0}},{key:"kanTilrettelegges",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"velferdspermisjoner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!0}},{key:"permisjonsprosent",value:{name:"number",required:!0}},{key:"erGyldig",value:{name:"boolean",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>`}],raw:"Permisjon[]",required:!0}},{key:"avklarteOppholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}},{key:"stillingsprosentStartTilrettelegging",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
  stillingsprosentStartTilrettelegging: number;
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}},{key:"saksbehandlet",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}>`},description:""}}};const yt=[c.SVANGERSKAPSVILKARET],vt=[ee.SVANGERSKAPVILKARET],bt=[P.SVANGERSKAPSPENGER_TILRETTELEGGING],kn=({behandlingVersjon:n,...r})=>{const t=B();return e.jsx(Fe,{...r,behandlingVersjon:n,panelEndepunkter:bt,aksjonspunktKoder:yt,vilkarKoder:vt,inngangsvilkarPanelKode:"SVANGERSKAP",hentInngangsvilkarPanelTekst:()=>t.formatMessage({id:"SvangerskapVilkarForm.FyllerVilkår"}),renderPanel:a=>e.jsx(mn,{...a})})};kn.__docgenInfo={description:"",methods:[],displayName:"SvangerskapInngangsvilkarInitPanel",props:{behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},registrerInngangsvilkarPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: InngangsvilkarPanelData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  aksjonspunktTekst?: string;
  harApentAksjonspunkt: boolean;
  status: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"aksjonspunktTekst",value:{name:"string",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},harInngangsvilkarApentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""}}};const pn=({behandling:n,valgtProsessSteg:r,registrerProsessPanel:t,apentFaktaPanelInfo:a,oppdaterProsessStegOgFaktaPanelIUrl:i,rettigheter:s})=>{const g=h.useCallback(l=>e.jsxs(e.Fragment,{children:[e.jsx(kn,{behandlingVersjon:n.versjon,...l}),e.jsx(Nn,{behandlingVersjon:n.versjon,rettigheter:s,...l})]}),[n.versjon,s]),o=h.useCallback(l=>e.jsx(un,{behandlingVersjon:n.versjon,rettigheter:s,...l}),[n.versjon,s]);return e.jsx(Vn,{behandling:n,valgtProsessSteg:r,registrerProsessPanel:t,apentFaktaPanelInfo:a,oppdaterProsessStegOgFaktaPanelIUrl:i,leftPanels:g,rightPanels:o})};pn.__docgenInfo={description:"",methods:[],displayName:"InngangsvilkarSvpProsessStegInitPanel",props:{apentFaktaPanelInfo:{required:!1,tsType:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},description:""},oppdaterProsessStegOgFaktaPanelIUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(punktnavn?: string, faktanavn?: string) => void",signature:{arguments:[{type:{name:"string"},name:"punktnavn"},{type:{name:"string"},name:"faktanavn"}],return:{name:"void"}}},description:""},rettigheter:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  writeAccess: Aksess;
  kanOverstyreAccess: Aksess;
}`,signature:{properties:[{key:"writeAccess",value:{name:"signature",type:"object",raw:`{
  employeeHasAccess: boolean;
  isEnabled: boolean;
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}},{key:"kanOverstyreAccess",value:{name:"signature",type:"object",raw:`{
  employeeHasAccess: boolean;
  isEnabled: boolean;
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}}]}},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const ft=[c.VURDER_TILBAKETREKK],qt=[P.BEREGNINGRESULTAT_DAGYTELSE,P.FAMILIEHENDELSE,P.SOKNAD,P.FERIEPENGEGRUNNLAG],yn=({arbeidsgiverOpplysningerPerId:n,personoversikt:r,...t})=>e.jsx(Ue,{...t,panelEndepunkter:qt,aksjonspunktKoder:ft,prosessPanelKode:Me.TILKJENT_YTELSE,prosessPanelMenyTekst:B().formatMessage({id:"Behandlingspunkt.TilkjentYtelse"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:()=>lr.hasPath(P.BEREGNINGRESULTAT_DAGYTELSE.name)?O.OPPFYLT:O.IKKE_VURDERT,renderPanel:a=>e.jsx(An,{arbeidsgiverOpplysningerPerId:n,personoversikt:r,beregningresultat:a==null?void 0:a.beregningresultatDagytelse,...a})});yn.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelseProsessStegInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Pe=(n,r)=>n.filter(t=>!r.some(a=>a.definisjon===t.definisjon)).every(t=>t.status!==ue.OPPRETTET),ht=n=>n.definisjon===c.OVERSTYR_BEREGNING||n.definisjon===c.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG||n.definisjon===c.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG||n.definisjon===c.VURDER_SOKNADSFRIST_FORELDREPENGER,Tt=n=>ht(n)&&n.status===ue.OPPRETTET,Be=(n,r,t,a)=>n.length===0?O.IKKE_VURDERT:Pe(r,t)&&n.some(i=>i.vilkarStatus===O.IKKE_OPPFYLT)?O.IKKE_OPPFYLT:n.some(i=>i.vilkarStatus===O.IKKE_VURDERT)||r.some(Tt)?O.IKKE_VURDERT:Pe(r,t)?a&&mr(a.type)?O.IKKE_OPPFYLT:O.OPPFYLT:O.IKKE_VURDERT,jt=(n,r,t)=>a=>{const i={...a,behandlingUuid:t.uuid,fagsakYtelseType:r.fagsakYtelseType};return n(i).then(s=>Wn(s))},At=[c.FATTER_VEDTAK,c.FORESLA_VEDTAK_MANUELT,c.VURDERE_ANNEN_YTELSE,c.VURDERE_DOKUMENT,c.VURDERE_INNTEKTSMELDING_KLAGE,c.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,c.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING],Rt=(n,r,t)=>a=>(t(!1),()=>{a.some(s=>s.kode===c.FORESLA_VEDTAK||s.skalBrukeOverstyrendeFritekstBrev)?r(!0):n(!0)}),ct=[...At,c.FORESLA_VEDTAK],wt=[P.TILBAKEKREVINGVALG,P.BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING,P.SIMULERING_RESULTAT,P.BEREGNINGRESULTAT_DAGYTELSE,P.BEREGNINGSGRUNNLAG],vn=({toggleOppdatereFagsakContext:n,fagsak:r,opneSokeside:t,...a})=>{const i=B(),[s,g]=h.useState(!1),[o,l]=h.useState(!1),u=Rt(g,l,n),d=dr(),{startRequest:k}=or.useRestApiRunner(P.PREVIEW_MESSAGE),f=h.useCallback(jt(k,r,d.behandling),[d.behandling.versjon]),y=h.useCallback(()=>{g(!1),t()},[]),m=h.useCallback(()=>{l(!1),t()},[]),{aksjonspunkt:v,vilkår:q}=a.behandling;return e.jsx(Ue,{...a,panelEndepunkter:wt,aksjonspunktKoder:ct,prosessPanelKode:Me.VEDTAK,prosessPanelMenyTekst:i.formatMessage({id:"Behandlingspunkt.Vedtak"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:b=>Be(q||[],v||[],b.aksjonspunkter,b.behandling.behandlingsresultat),lagringSideEffekter:u,hentSkalMarkeresSomAktiv:b=>!b.behandling.behandlingHenlagt&&Be(q||[],v||[],b.aksjonspunkter,b.behandling.behandlingsresultat)!==O.IKKE_VURDERT,renderPanel:b=>e.jsxs(e.Fragment,{children:[e.jsx(pr,{visModal:s,lukkModal:y,behandlingsresultat:b.behandling.behandlingsresultat}),e.jsx(kr,{visModal:o,lukkModal:m,tekst:i.formatMessage({id:"FatterVedtakStatusModal.SendtBeslutter"})}),e.jsx(Dn,{ytelseTypeKode:gr.SVANGERSKAPSPENGER,previewCallback:f,...b,aksjonspunkter:v,vilkar:q})]})})};vn.__docgenInfo={description:"",methods:[],displayName:"VedtakSvpProsessStegInitPanel",props:{toggleOppdatereFagsakContext:{required:!0,tsType:{name:"signature",type:"function",raw:"(skalHenteFagsak: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"skalHenteFagsak"}],return:{name:"void"}}},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"union",raw:`| {
    type: 'TEKST';
    tekst: string;
  }
| { type: 'LINJESKIFT' }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'TEKST';
  tekst: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'TEKST'",required:!0}},{key:"tekst",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'LINJESKIFT' }",signature:{properties:[{key:"type",value:{name:"literal",value:"'LINJESKIFT'",required:!0}}]}}]}],raw:"Linje[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},opneSokeside:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const St=({alleBehandlinger:n,behandling:r,fagsak:t,valgtProsessSteg:a,valgtFaktaSteg:i,oppdaterProsessStegOgFaktaPanelIUrl:s,opneSokeside:g,toggleOppdateringAvFagsakOgBehandling:o,arbeidsgivere:l,personoversikt:u,rettigheter:d,hentOgSettBehandling:k})=>{const f=h.useCallback(m=>e.jsxs(e.Fragment,{children:[e.jsx(Gn,{...m,fagsak:t,rettigheter:d}),e.jsx(Rn,{...m,saksnummer:t.saksnummer,behandlingUuid:r.uuid,rettigheter:d,arbeidsgiverOpplysningerPerId:l,hentOgSettBehandling:k}),e.jsx(cn,{fagsak:t,alleBehandlinger:n,arbeidsgiverOpplysningerPerId:l,...m}),e.jsx(wn,{...m,arbeidsgiverOpplysningerPerId:l}),e.jsx(Ln,{...m}),e.jsx(Cn,{...m}),e.jsx(gn,{...m,arbeidsgiverOpplysningerPerId:l}),e.jsx(xn,{...m,fagsak:t}),e.jsx(Sn,{...m,arbeidsgiverOpplysningerPerId:l}),e.jsx(En,{...m,saksnummer:t.saksnummer,arbeidsgiverOpplysningerPerId:l}),e.jsx(Pn,{...m,arbeidsgiverOpplysningerPerId:l,rettigheter:d}),e.jsx(Bn,{...m,arbeidsgiverOpplysningerPerId:l})]}),[u,r,d,t,l,k]),y=h.useCallback((m,v)=>e.jsxs(e.Fragment,{children:[e.jsx(_n,{...m,arbeidsgiverOpplysningerPerId:l}),e.jsx(pn,{...m,rettigheter:d,oppdaterProsessStegOgFaktaPanelIUrl:s}),e.jsx(Fn,{...m,arbeidsgiverOpplysningerPerId:l}),e.jsx(In,{...m}),e.jsx(On,{...m}),e.jsx(yn,{...m,arbeidsgiverOpplysningerPerId:l,personoversikt:u}),e.jsx(Mn,{...m,fagsak:t,menyData:v.allMenyData,arbeidsgiverOpplysningerPerId:l}),e.jsx(vn,{...m,fagsak:t,opneSokeside:g,toggleOppdatereFagsakContext:o})]}),[u,t,g,o,l,d,s]);return e.jsx(hn,{behandling:r,valgtProsessSteg:a,valgtFaktaSteg:i,oppdaterProsessStegOgFaktaPanelIUrl:s,hentFaktaPaneler:f,hentProsessPaneler:y})};St.__docgenInfo={description:"",methods:[],displayName:"SvangerskapspengerPaneler",props:{alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"union",raw:`| {
    type: 'TEKST';
    tekst: string;
  }
| { type: 'LINJESKIFT' }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'TEKST';
  tekst: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'TEKST'",required:!0}},{key:"tekst",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'LINJESKIFT' }",signature:{properties:[{key:"type",value:{name:"literal",value:"'LINJESKIFT'",required:!0}}]}}]}],raw:"Linje[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},oppdaterProsessStegOgFaktaPanelIUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(punktnavn?: string, faktanavn?: string) => void",signature:{arguments:[{type:{name:"string"},name:"punktnavn"},{type:{name:"string"},name:"faktanavn"}],return:{name:"void"}}},description:""},opneSokeside:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},toggleOppdateringAvFagsakOgBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(skalHenteFagsak: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"skalHenteFagsak"}],return:{name:"void"}}},description:""},arbeidsgivere:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},rettigheter:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  writeAccess: Aksess;
  kanOverstyreAccess: Aksess;
}`,signature:{properties:[{key:"writeAccess",value:{name:"signature",type:"object",raw:`{
  employeeHasAccess: boolean;
  isEnabled: boolean;
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}},{key:"kanOverstyreAccess",value:{name:"signature",type:"object",raw:`{
  employeeHasAccess: boolean;
  isEnabled: boolean;
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}}]}},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(keepData?: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"keepData"}],return:{name:"void"}}},description:""}}};export{St as default};
