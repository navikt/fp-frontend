import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as T,c as yn,g as vn,R as bn}from"./index-DRjF_FHU.js";import{B as fn}from"./BehandlingContainer-DAMVA1vL.js";import{V as ee,I as Be,O as qn,M as hn,a as jn,b as Tn,S as An,Y as Rn,d as cn,e as wn,f as Pn}from"./MedlemskapsvilkaretFaktaInitPanel-DN3MniLa.js";import{S as Sn,O as En,T as Fn,A as Bn,I as In,a as On,b as Vn,P as Kn,B as Nn,F as Dn,c as xn,d as Gn,e as Ln}from"./InntektsmeldingerFaktaInitPanel-B8qPx7U5.js";import{a as _n,F as Mn,V as Un}from"./VergeFaktaInitPanel-CfM3J4W2.js";import{u as Hn,a as E,h as Cn,b as O,B as Y,D as re,d as A,R as Ie,c as G,A as pe,V as Yn,L as ne,H as $n,t as Oe,P as Ve,x as zn}from"./VStack-bXHs5e8-.js";import{a8 as Jn,d as X,a9 as le,P as $,H as V,g as z,k as oe,aa as ye,ab as ve,j as Ke,v as Wn,t as Qn,u as Z,a0 as P,ac as Q,ad as Xn,y as se,f as be,w as Zn,E as te,ae as er,J as R,$ as Ne,A as nr,a as rr,n as tr,K as De,F as ar,B as S,s as fe,m as xe,o as sr,r as ir,N as lr,Q as or}from"./AppIndex.stories-Dvn_oshA.js";import{M as y,y as j,z as ge,A as C,S as Ge,v as Le,W as gr,H as ur,L as U}from"./index.es-CyAQm8ye.js";import{t as F}from"./tilretteleggingType-DxzN8sbp.js";import{a as ue,c as dr,V as de,P as ke}from"./OverstyringPanel-mc4Nkpmh.js";import{v as I,P as _e,u as kr}from"./ProsessDefaultInitPanel-DSffLOGN.js";import{I as mr}from"./IverksetterVedtakStatusModal-DOa19g5e.js";import{F as pr}from"./FatterVedtakStatusModal-CHFffrTl.js";import"./BehandlingHenlagtPanel-BOE5VMQ1.js";import"./index.es-zhgnUGpN.js";import"./useRestApiRunner-BKOIDkPf.js";import"./bind-BilxuNmH.js";import"./index.es-DXg9V4ml.js";import"./index-rX-Bn4lm.js";import"./validerApKodeOgHentApEnum-BJOxEDqe.js";import"./landkoder-T-1RG3zx.js";import"./Timeline-9rZKDVAq.js";import"./uttakPeriodeType-S-1j3cKx.js";import"./iframe-DIBb_ccZ.js";import"../sb-preview/runtime.js";import"./SettPaVentReadOnlyModal-CkYKFhlR.js";import"./nb_NO-C31o_Ri5.js";var yr=function(n,r){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&r.indexOf(a)<0&&(t[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(n);i<a.length;i++)r.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(n,a[i])&&(t[a[i]]=n[a[i]]);return t};const qe=T.forwardRef((n,r)=>{var{title:t,titleId:a}=n,i=yr(n,["title","titleId"]);let s=Hn();return s=t?a||"title-"+s:void 0,T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},i),t?T.createElement("title",{id:s},t):null,T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.25 5.5a2.25 2.25 0 0 1-1.5 2.122v4.628H12A4.25 4.25 0 0 0 16.25 8v-.378a2.25 2.25 0 1 1 1.5 0V8A5.75 5.75 0 0 1 12 13.75h-1.25v2.628a2.251 2.251 0 1 1-1.5 0V7.622a2.25 2.25 0 1 1 3-2.122M10 4.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m7 1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M9.25 18.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0",clipRule:"evenodd"}))});var x=(n=>(n.ENDRET_AV_SAKSBEHANDLER="ENDRET_AV_SAKSBEHANDLER",n.REGISTRERT_AV_SAKSBEHANDLER="REGISTRERT_AV_SAKSBEHANDLER",n.TIDLIGERE_VEDTAK="TIDLIGERE_VEDTAK",n.SØKNAD="SØKNAD",n))(x||{});const vr="_card_nwa7r_1",br="_tagMargin_nwa7r_9",fr="_idMargin_nwa7r_13",qr="_padding_nwa7r_17",hr="_image_nwa7r_21",H={card:vr,tagMargin:br,idMargin:fr,padding:qr,image:hr};var Me={exports:{}};(function(n,r){(function(t,a){n.exports=a()})(yn,function(){return function(t,a,i){var s=function(g,o){if(!o||!o.length||o.length===1&&!o[0]||o.length===1&&Array.isArray(o[0])&&!o[0].length)return null;var l;o.length===1&&o[0].length>0&&(o=o[0]),l=(o=o.filter(function(d){return d}))[0];for(var u=1;u<o.length;u+=1)o[u].isValid()&&!o[u][g](l)||(l=o[u]);return l};i.max=function(){var g=[].slice.call(arguments,0);return s("isAfter",g)},i.min=function(){var g=[].slice.call(arguments,0);return s("isBefore",g)}}})})(Me);var jr=Me.exports;const Tr=vn(jr),Ar=(n,r,t)=>{const a=A(r).diff(t,"days");return n.formatMessage({id:"TilretteleggingInfoPanel.Dager"},{dager:a})},Rr=n=>n.type===F.HEL_TILRETTELEGGING?0:n.type===F.INGEN_TILRETTELEGGING?100:n.overstyrtUtbetalingsgrad||0,cr=n=>n.type===F.HEL_TILRETTELEGGING?100:n.type===F.INGEN_TILRETTELEGGING?0:n.stillingsprosent||0,Ue=({tilrettelegging:n,termindato:r,erTomDatoTreUkerFørTermin:t,stillingsprosentArbeidsforhold:a,tomDato:i})=>{const s=E(),g=Cn(n.fom,i),o=t?s.formatMessage({id:"TilretteleggingInfoPanel.TreUker"}):Ar(s,r,i),l=n.kilde===x.REGISTRERT_AV_SAKSBEHANDLER;return e.jsx("div",{style:{background:"#E5E5E5",marginLeft:"-24px",marginTop:"-24px",marginRight:"-24px",paddingBottom:"10px",paddingLeft:"20px",paddingRight:"50px",paddingTop:"10px"},children:e.jsxs(O,{justify:"space-between",children:[e.jsxs(O,{gap:"4",children:[e.jsx(Sn,{title:"a11y-title",fontSize:"1.5rem"}),e.jsxs("div",{children:[e.jsx(Y,{size:"small",children:e.jsx(y,{id:"TilretteleggingInfoPanel.SvpOgArbeid",values:{svp:Rr(n),arbeid:cr(n)}})}),a!==void 0&&e.jsx(re,{children:e.jsx(y,{id:"TilretteleggingInfoPanel.AvStillingsprosent",values:{stillingsprosent:a}})})]})]}),e.jsxs(O,{gap:"4",children:[e.jsx(Jn,{title:"a11y-title",fontSize:"1.5rem"}),e.jsxs("div",{children:[e.jsx(Y,{size:"small",children:e.jsx(y,{id:"TilretteleggingInfoPanel.Periode",values:{periode:g.formattedString}})}),e.jsx(re,{children:o})]})]}),!l&&e.jsxs(O,{gap:"4",children:[e.jsx(qe,{title:"a11y-title",fontSize:"1.5rem"}),e.jsxs("div",{children:[e.jsx(Y,{size:"small",children:e.jsx(y,{id:"TilretteleggingInfoPanel.FraSoknad"})}),e.jsx(re,{children:n.mottattDato&&e.jsx(y,{id:"TilretteleggingInfoPanel.Sendt",values:{dato:n.mottattDato?A(n.mottattDato).format(Ie):""}})})]})]}),l&&e.jsxs(O,{gap:"4",children:[e.jsx(qe,{title:"a11y-title",fontSize:"1.5rem"}),e.jsx(Y,{size:"small",children:e.jsx(y,{id:"TilretteleggingInfoPanel.Saksbehandler"})})]})]})})};Ue.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingInfoPanel",props:{tilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},termindato:{required:!0,tsType:{name:"string"},description:""},erTomDatoTreUkerFørTermin:{required:!0,tsType:{name:"boolean"},description:""},stillingsprosentArbeidsforhold:{required:!0,tsType:{name:"number"},description:""},tomDato:{required:!0,tsType:{name:"string"},description:""}}};const wr="_dateMargin_wu8wb_1",Pr="_utbetalingsgrad_wu8wb_5",Sr="_arbeidsprosent_wu8wb_9",Er="_pushRight_wu8wb_13",he={dateMargin:wr,utbetalingsgrad:Pr,arbeidsprosent:Sr,pushRight:Er},je=Wn(100),Te=Qn(0),Fr=(n,r,t,a)=>i=>{const g=r.filter(l=>l.fom!==a.fom).some(l=>l.fom===i),o=t.some(l=>l.fom===i);return g||o?n.formatMessage({id:"TilretteleggingForm.DuplikateDatoer"}):null},Br=(n,r,t)=>a=>A(a).isAfter(A(t).subtract(3,"weeks").subtract(1,"day"))?n.formatMessage({id:"TilretteleggingForm.EtterTermindato"}):A(a).isBefore(r)?n.formatMessage({id:"TilretteleggingForm.ForForsteDato"}):null,He=n=>n.velferdspermisjoner.filter(r=>r.erGyldig).map(r=>r.permisjonsprosent).reduce((r,t)=>r+t,0),Ce=(n,r,t)=>{const a=n-r,i=a<=0?0:100*(1-t/a);return i>0?+i.toFixed(2):0},me=(n,r,t,a=!0)=>{if(n.type!==F.HEL_TILRETTELEGGING)return a&&n.overstyrtUtbetalingsgrad?n.overstyrtUtbetalingsgrad:n.type===F.INGEN_TILRETTELEGGING?100:Ce(r,t,n.stillingsprosent||0)},Ir=(n,r)=>A(n).subtract(3,"week").subtract(1,"day").isSame(A(r)),Ye=({tilrettelegging:n,termindato:r,index:t,readOnly:a,oppdaterTilrettelegging:i,avbrytEditering:s,stillingsprosentArbeidsforhold:g,arbeidsforhold:o,tomDatoForTilrettelegging:l,slettTilrettelegging:u})=>{const d=E(),m=!n.fom,f=Ir(r,l),p=He(o),k=T.useMemo(()=>me(n,g,p),[n,g,p]),v=X({defaultValues:{[t]:{...n,overstyrtUtbetalingsgrad:k}}});T.useEffect(()=>{v.reset({[t]:{...n,overstyrtUtbetalingsgrad:k}})},[k]);const b=v.watch()[t],K=h=>{const w=h[t],D=w.kilde===x.REGISTRERT_AV_SAKSBEHANDLER||m?x.REGISTRERT_AV_SAKSBEHANDLER:x.ENDRET_AV_SAKSBEHANDLER,B={...w,overstyrtUtbetalingsgrad:w.overstyrtUtbetalingsgrad!==k?w.overstyrtUtbetalingsgrad:void 0,kilde:D};return i(B),v.reset({[t]:B}),Promise.resolve()},L=()=>{s(),v.reset()},N=()=>(u(n.fom),Promise.resolve());return e.jsx(le,{...v,children:e.jsxs("div",{style:{backgroundColor:"white",marginLeft:"-56px",marginTop:"-9px",marginBottom:"-8px",marginRight:"-56px",padding:"24px"},children:[!m&&e.jsxs(e.Fragment,{children:[e.jsx(Ue,{tilrettelegging:b,termindato:r,erTomDatoTreUkerFørTermin:f,stillingsprosentArbeidsforhold:g,tomDato:l}),e.jsx(j,{twentyPx:!0})]}),e.jsx($,{name:`${t}.fom`,label:d.formatMessage({id:"TilretteleggingForm.FraOgMed"}),validate:[V,z,Fr(d,o.tilretteleggingDatoer,o.avklarteOppholdPerioder,n),Br(d,o.tilretteleggingBehovFom,r)],isReadOnly:a}),e.jsx(j,{thirtyTwoPx:!0}),e.jsx(oe,{name:`${t}.type`,label:d.formatMessage({id:"TilretteleggingForm.Tilretteleggingsbehov"}),validate:[V],isReadOnly:a,radios:[{label:d.formatMessage({id:"TilretteleggingForm.KanGjennomfores"}),value:F.HEL_TILRETTELEGGING},{label:d.formatMessage({id:"TilretteleggingForm.RedusertArbeid"}),value:F.DELVIS_TILRETTELEGGING},{label:d.formatMessage({id:"TilretteleggingForm.KanIkkeGjennomfores"}),value:F.INGEN_TILRETTELEGGING}]}),b.type===F.DELVIS_TILRETTELEGGING&&e.jsxs(e.Fragment,{children:[(n.stillingsprosent===void 0||n.type!==F.DELVIS_TILRETTELEGGING||m||b.kilde===x.REGISTRERT_AV_SAKSBEHANDLER)&&e.jsxs(e.Fragment,{children:[e.jsx(j,{sixteenPx:!0}),e.jsx(ye,{name:`${t}.stillingsprosent`,className:he.arbeidsprosent,readOnly:a,label:d.formatMessage({id:"TilretteleggingForm.Arbeidsprosent"}),description:d.formatMessage({id:"TilretteleggingForm.ArbeidsprosentBeskrivelse"}),validate:[V,Te,je,ve],forceTwoDecimalDigits:!0,onChange:h=>{const w=Ce(g,p,h);v.setValue(`${t}.overstyrtUtbetalingsgrad`,w,{shouldDirty:!0})}})]}),e.jsx(j,{sixteenPx:!0}),e.jsx(ye,{name:`${t}.overstyrtUtbetalingsgrad`,className:he.utbetalingsgrad,readOnly:a,label:d.formatMessage({id:"TilretteleggingForm.ProsentSvp"}),description:d.formatMessage({id:"TilretteleggingForm.ProsentSvpBeskrivelse"}),validate:[V,Te,je,ve,h=>!g&&h===0?d.formatMessage({id:"TilretteleggingForm.AngiUtbetalingsgrad"}):null],forceTwoDecimalDigits:!0,disabled:b.stillingsprosent===void 0})]}),e.jsx(j,{thirtyTwoPx:!0}),!a&&e.jsxs(O,{gap:"2",children:[e.jsx(G,{size:"small",variant:"primary",type:"button",disabled:!v.formState.isDirty||!1,loading:!1,onClick:v.handleSubmit(h=>K(h)),children:m?e.jsx(y,{id:"TilretteleggingForm.LeggTil"}):e.jsx(y,{id:"TilretteleggingForm.Oppdater"})}),e.jsx(G,{size:"small",variant:"secondary",onClick:L,type:"button",children:m?e.jsx(y,{id:"TilretteleggingForm.AvsluttOgSlett"}):e.jsx(y,{id:"TilretteleggingForm.Avbryt"})}),!m&&e.jsxs(e.Fragment,{children:[e.jsx(Ke,{}),e.jsx(G,{size:"small",variant:"secondary",onClick:N,type:"button",children:e.jsx(y,{id:"TilretteleggingForm.SlettPeriode"})})]})]})]})})};Ye.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForm",props:{tilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
}>`},description:""},tomDatoForTilrettelegging:{required:!0,tsType:{name:"string"},description:""},slettTilrettelegging:{required:!0,tsType:{name:"signature",type:"function",raw:"(fomDato: string) => void",signature:{arguments:[{type:{name:"string"},name:"fomDato"}],return:{name:"void"}}},description:""}}};const Or="_row_14uqf_1",Vr="_openRow_14uqf_7",Ae={row:Or,openRow:Vr},Kr=(n,r,t,a)=>{const i=He(t),s=a.type===F.INGEN_TILRETTELEGGING?100:a.stillingsprosent,g=a.fom&&s?me(a,r,i):0;return a.fom?n.formatMessage({id:"TilretteleggingPerioderTabellRad.SVPprosent"},{prosent:g??"0"}):n.formatMessage({id:"TilretteleggingPerioderTabellRad.Tilrettelegging"})},Nr=(n,r)=>r.kilde===x.REGISTRERT_AV_SAKSBEHANDLER||r.fom===void 0?n.formatMessage({id:"TilretteleggingPerioderTabellRad.Saksbehandler"}):r.kilde===x.ENDRET_AV_SAKSBEHANDLER?n.formatMessage({id:"TilretteleggingPerioderTabellRad.EndretAvSaksbehandler"}):r.kilde===x.TIDLIGERE_VEDTAK?n.formatMessage({id:"TilretteleggingPerioderTabellRad.TidligereVedtak"}):n.formatMessage({id:"TilretteleggingPerioderTabellRad.Soknad"}),$e=({navn:n,tilrettelegging:r,index:t,readOnly:a,openRad:i,fjernTilrettelegging:s,setLeggTilKnapperDisablet:g,stillingsprosentArbeidsforhold:o,arbeidsforhold:l,tomDatoForTilrettelegging:u,termindato:d})=>{const m=E(),[f,p]=T.useState(i),{setValue:k}=Z(),v=b=>{p(!1),g(!1),k(n,b,{shouldDirty:!0})},q=()=>{r.fom||s(),g(!1),p(!1)};return e.jsxs(P.ExpandableRow,{open:f,expandOnRowClick:!0,onOpenChange:()=>p(!f),onClick:()=>p(!f),content:e.jsx(Ye,{tilrettelegging:r,termindato:d,index:t,oppdaterTilrettelegging:v,avbrytEditering:q,readOnly:a,stillingsprosentArbeidsforhold:o,arbeidsforhold:l,tomDatoForTilrettelegging:u,slettTilrettelegging:s}),togglePlacement:"right",className:f?Ae.openRow:Ae.row,children:[e.jsx(P.DataCell,{children:r.fom?e.jsx(ge,{dateStringFom:r.fom,dateStringTom:u}):e.jsx(y,{id:"TilretteleggingPerioderTabellRad.Periode"})}),e.jsx(P.DataCell,{children:Kr(m,o,l,r)}),e.jsx(P.DataCell,{children:e.jsx(Q,{size:"small",variant:"neutral-moderate",children:Nr(m,r)})})]})};$e.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingPeriodeTabellRad",props:{navn:{required:!0,tsType:{name:"string"},description:""},tilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
}>`},description:""},tomDatoForTilrettelegging:{required:!0,tsType:{name:"string"},description:""},termindato:{required:!0,tsType:{name:"string"},description:""}}};const Dr=(n,r,t,a)=>i=>{const g=r.filter(l=>l.fom!==a.fom).some(l=>l.fom===i);return t.some(l=>l.fom===i)||g?n.formatMessage({id:"TilretteleggingForm.DuplikateDatoer"}):null},xr=(n,r,t)=>a=>A(a).isBefore(t(`${r}.fom`))?n.formatMessage({id:"OppholdForm.TomForFom"}):null,Re=(n,r,t)=>a=>{if(A(a).isAfter(A(t).subtract(3,"weeks").subtract(1,"day")))return n.formatMessage({id:"OppholdForm.EtterTermindato"});const i=r.reduce((s,g)=>s===void 0||A(g.fom).isBefore(s)?g.fom:s,void 0);return A(a).isBefore(i)?n.formatMessage({id:"OppholdForm.ForForsteDato"}):null},Gr=(n,r,t,a)=>()=>{const i=n(`${r}.fom`),s=n(`${r}.tom`),g=a.filter(o=>o.fom!==t.fom).map(({fom:o,tom:l})=>[o,l]).concat([[i,s]]);return g.length>0&&A(i).isBefore(A(s))?Xn(g):void 0},ze=({opphold:n,index:r,readOnly:t,oppdaterOpphold:a,avbrytEditering:i,slettOpphold:s,alleTilrettelegginger:g,alleOpphold:o,termindato:l})=>{const u=E(),d=!n.fom,m=X({defaultValues:{[r]:n}}),f=q=>(a(q[r]),m.reset(q),Promise.resolve()),p=()=>(s(n.fom),Promise.resolve()),k=()=>{i(),m.reset()},v=t||n.oppholdKilde==="INNTEKTSMELDING";return e.jsx(le,{...m,children:e.jsxs("div",{style:{backgroundColor:"white",marginLeft:"-56px",marginTop:"-9px",marginBottom:"-8px",marginRight:"-56px",padding:"24px"},children:[e.jsxs(O,{gap:"4",children:[e.jsx($,{name:`${r}.fom`,label:u.formatMessage({id:"OppholdForm.FraOgMed"}),validate:[V,z,Dr(u,o,g,n),Re(u,g,l)],isReadOnly:v}),e.jsx($,{name:`${r}.tom`,label:u.formatMessage({id:"OppholdForm.TilOgMed"}),validate:[V,z,xr(u,r,m.getValues),Re(u,g,l),Gr(m.getValues,r,n,o)],isReadOnly:v})]}),e.jsx(j,{thirtyTwoPx:!0}),e.jsx(oe,{name:`${r}.oppholdÅrsak`,label:u.formatMessage({id:"OppholdForm.GrunnTilOpphold"}),validate:[V],isReadOnly:v,radios:[{label:u.formatMessage({id:"OppholdForm.Sykepenger"}),value:"SYKEPENGER"},{label:u.formatMessage({id:"OppholdForm.Ferie"}),value:"FERIE"}]}),e.jsx(j,{thirtyTwoPx:!0}),!v&&e.jsxs(O,{gap:"2",children:[e.jsx(G,{size:"small",variant:"primary",type:"button",disabled:!m.formState.isDirty||!1,loading:!1,onClick:m.handleSubmit(q=>f(q)),children:d?e.jsx(y,{id:"OppholdForm.LeggTil"}):e.jsx(y,{id:"OppholdForm.Oppdater"})}),e.jsx(G,{size:"small",variant:"secondary",onClick:k,type:"button",children:d?e.jsx(y,{id:"OppholdForm.AvsluttOgSlett"}):e.jsx(y,{id:"OppholdForm.Avbryt"})}),!d&&e.jsxs(e.Fragment,{children:[e.jsx(Ke,{}),e.jsx(G,{size:"small",variant:"secondary",onClick:p,type:"button",children:e.jsx(y,{id:"OppholdForm.SlettPeriode"})})]})]})]})})};ze.__docgenInfo={description:"",methods:[],displayName:"OppholdForm",props:{opphold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"values"}],return:{name:"void"}}},description:""},slettOpphold:{required:!0,tsType:{name:"signature",type:"function",raw:"(fomDato: string) => void",signature:{arguments:[{type:{name:"string"},name:"fomDato"}],return:{name:"void"}}},description:""},avbrytEditering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},alleTilrettelegginger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]"},description:""},termindato:{required:!0,tsType:{name:"string"},description:""}}};const Lr="_row_14uqf_1",_r="_openRow_14uqf_7",ce={row:Lr,openRow:_r},Mr=(n,r)=>r.oppholdÅrsak===void 0?n.formatMessage({id:"TilretteleggingPerioderTabellRad.Opphold"}):r.oppholdÅrsak==="FERIE"?n.formatMessage({id:"TilretteleggingPerioderTabellRad.Ferie"}):n.formatMessage({id:"TilretteleggingPerioderTabellRad.Sykepenger"}),Ur=(n,r)=>{switch(r.oppholdKilde){case"SØKNAD":return n.formatMessage({id:"TilretteleggingPerioderTabellRad.Soknad"});case"INNTEKTSMELDING":return n.formatMessage({id:"TilretteleggingPerioderTabellRad.Inntektsmelding"});default:return n.formatMessage({id:"TilretteleggingPerioderTabellRad.Saksbehandler"})}},Je=({navn:n,opphold:r,index:t,readOnly:a,openRad:i,fjernOpphold:s,setLeggTilKnapperDisablet:g,arbeidsforhold:o,termindato:l})=>{const u=E(),[d,m]=T.useState(i),{setValue:f}=Z(),p=v=>{m(!1),g(!1),f(n,v,{shouldDirty:!0})},k=()=>{r.fom||s(),g(!1),m(!1)};return e.jsxs(P.ExpandableRow,{open:d,expandOnRowClick:!0,onOpenChange:()=>m(!d),onClick:()=>m(!d),content:e.jsx(ze,{opphold:r,index:t,oppdaterOpphold:p,avbrytEditering:k,readOnly:a,alleTilrettelegginger:o.tilretteleggingDatoer,alleOpphold:o.avklarteOppholdPerioder,termindato:l,slettOpphold:s}),togglePlacement:"right",className:d?ce.openRow:ce.row,children:[e.jsx(P.DataCell,{children:r.fom?e.jsx(ge,{dateStringFom:r.fom,dateStringTom:r.tom}):e.jsx(y,{id:"TilretteleggingPerioderTabellRad.Periode"})}),e.jsx(P.DataCell,{children:Mr(u,r)}),e.jsx(P.DataCell,{children:e.jsx(Q,{size:"small",variant:"neutral-moderate",children:Ur(u,r)})})]})};Je.__docgenInfo={description:"",methods:[],displayName:"OppholdPeriodeTabellRad",props:{navn:{required:!0,tsType:{name:"string"},description:""},opphold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdÅrsak",value:{name:"string",required:!0}},{key:"oppholdKilde",value:{name:"union",raw:"'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'REGISTRERT_AV_SAKSBEHANDLER'"}],required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},openRad:{required:!0,tsType:{name:"boolean"},description:""},fjernOpphold:{required:!0,tsType:{name:"signature",type:"function",raw:"(fomDato?: string) => void",signature:{arguments:[{type:{name:"string"},name:"fomDato"}],return:{name:"void"}}},description:""},setLeggTilKnapperDisablet:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""},arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
}>`},description:""},termindato:{required:!0,tsType:{name:"string"},description:""}}};const We=(n,r,t)=>{const a=n[t+1];return a?r.find(s=>s.fom===a)||We(n,r,t+1):void 0},Qe=({arbeidsforhold:n,arbeidsforholdIndex:r,readOnly:t,stillingsprosentArbeidsforhold:a,termindato:i})=>{const s=`arbeidsforhold.${r}.tilretteleggingDatoer`,g=`arbeidsforhold.${r}.avklarteOppholdPerioder`,[o,l]=T.useState(!1),{append:u,remove:d}=se({name:s}),{append:m,remove:f}=se({name:g}),{tilretteleggingDatoer:p,avklarteOppholdPerioder:k}=n,v=()=>{l(!0),m({fom:void 0,tom:void 0,oppholdÅrsak:void 0})},q=()=>{l(!0),u({fom:void 0,type:void 0})},b=h=>{d(h?p.findIndex(w=>w.fom===h):p.length-1)},K=h=>{f(h?k.findIndex(w=>w.fom===h):k.length-1)},L=p.length+k.length,N=p.map(h=>h.fom).concat(k.map(h=>h.fom)).sort((h,w)=>h?w?A(h).diff(A(w)):-1:1);return e.jsxs(e.Fragment,{children:[e.jsx(P,{size:"small",children:e.jsx(P.Body,{children:[...Array(L)].map((h,w)=>{const D=N[w],B=p.findIndex(_=>_.fom===D);if(B!==-1){const _=`${s}.${B}`,c=We(N,p,w),M=c!=null&&c.fom?A(c.fom).subtract(1,"day").format(pe):A(i).subtract(3,"week").subtract(1,"day").format(pe);return e.jsx($e,{navn:_,tilrettelegging:p[B],readOnly:t,index:r+B,openRad:D===void 0,fjernTilrettelegging:b,setLeggTilKnapperDisablet:l,stillingsprosentArbeidsforhold:a,arbeidsforhold:n,tomDatoForTilrettelegging:M,termindato:i},_)}const J=k.findIndex(_=>_.fom===D),W=`${g}.${J}`;return e.jsx(Je,{navn:W,opphold:k[J],readOnly:t,index:r+J,openRad:D===void 0,fjernOpphold:K,setLeggTilKnapperDisablet:l,arbeidsforhold:n,termindato:i},W)})})}),!t&&e.jsxs(e.Fragment,{children:[e.jsx(j,{fourtyPx:!0}),e.jsxs(O,{gap:"4",children:[e.jsx(G,{size:"small",variant:"secondary",type:"button",icon:e.jsx(be,{"aria-hidden":!0}),onClick:q,disabled:o,children:e.jsx(y,{id:"TilretteleggingFieldArray.LeggTilTilrettelegging"})}),e.jsx(G,{size:"small",variant:"secondary",onClick:v,icon:e.jsx(be,{"aria-hidden":!0}),type:"button",disabled:o,children:e.jsx(y,{id:"TilretteleggingFieldArray.LeggTilOpphold"})})]})]})]})};Qe.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingOgOppholdPerioderPanel",props:{arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
}>`},description:""},arbeidsforholdIndex:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},stillingsprosentArbeidsforhold:{required:!0,tsType:{name:"number"},description:""},termindato:{required:!0,tsType:{name:"string"},description:""}}};const Xe=({velferdspermisjon:n,arbeidsforholdIndex:r,readOnly:t,lukkRad:a,oppdaterOverstyrtUtbetalingsgrad:i})=>{const s=E(),{setValue:g,getValues:o}=Z(),l=o(`arbeidsforhold.${r}.velferdspermisjoner`),u=l.findIndex(p=>p.permisjonFom===n.permisjonFom&&p.permisjonTom===n.permisjonTom),d=X({defaultValues:{[u]:{...n}}}),m=p=>{const k=p[u];g(`arbeidsforhold.${r}.velferdspermisjoner.${u}`,k,{shouldDirty:!0}),k.erGyldig&&n.permisjonsprosent===100&&g(`arbeidsforhold.${r}.skalBrukes`,!1,{shouldDirty:!0});const q=l.filter((b,K)=>u!==K).concat(k).filter(b=>b.erGyldig).map(b=>b.permisjonsprosent).reduce((b,K)=>b+K,0);return i(q),d.reset(p),a(),Promise.resolve()},f=d.watch(`${u}.erGyldig`);return e.jsx(le,{...d,children:e.jsx("div",{style:{backgroundColor:"white",marginLeft:"-56px",marginTop:"-9px",marginBottom:"-8px",marginRight:"-56px",padding:"24px"},children:e.jsxs(Yn,{gap:"5",children:[e.jsx(oe,{name:`${u}.erGyldig`,label:s.formatMessage({id:"VelferdspermisjonPanel.PermisjonGyldig"}),description:s.formatMessage({id:"VelferdspermisjonPanel.PermisjonGyldigDetaljer"}),validate:[V],isReadOnly:t,isTrueOrFalseSelection:!0,radios:[{label:s.formatMessage({id:"VelferdspermisjonPanel.Ja"}),value:"true"},{label:s.formatMessage({id:"VelferdspermisjonPanel.Nei"}),value:"false"}]}),f&&n.permisjonsprosent===100&&e.jsx(C,{variant:"info",size:"small",children:e.jsx(y,{id:"VelferdspermisjonPanel.Permisjon100ProsentOgGyldig"})}),e.jsx(O,{children:e.jsx(G,{size:"small",variant:"primary",type:"button",disabled:!d.formState.isDirty||!1,onClick:d.handleSubmit(m),children:e.jsx(y,{id:"VelferdspermisjonPanel.Oppdater"})})})]})})})};Xe.__docgenInfo={description:"",methods:[],displayName:"VelferdspermisjonForm",props:{velferdspermisjon:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsforholdIndex:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oppdaterOverstyrtUtbetalingsgrad:{required:!0,tsType:{name:"signature",type:"function",raw:"(velferdspermisjonprosent: number) => void",signature:{arguments:[{type:{name:"number"},name:"velferdspermisjonprosent"}],return:{name:"void"}}},description:""}}};const Hr="_row_1ix2u_1",Cr="_openRow_1ix2u_7",Yr="_apRow_1ix2u_14",ae={row:Hr,openRow:Cr,apRow:Yr},$r=(n,r)=>r?ae.apRow:n?ae.openRow:ae.row,Ze=({velferdspermisjon:n,arbeidsforholdIndex:r,readOnly:t,oppdaterOverstyrtUtbetalingsgrad:a})=>{const i=n.erGyldig===void 0||n.erGyldig===null,[s,g]=T.useState(i),o=T.useCallback(()=>g(!1),[]);return e.jsxs(P.ExpandableRow,{open:s,expandOnRowClick:!0,onOpenChange:()=>g(!s),onClick:()=>g(!s),content:e.jsx(Xe,{velferdspermisjon:n,arbeidsforholdIndex:r,readOnly:t,lukkRad:o,oppdaterOverstyrtUtbetalingsgrad:a}),togglePlacement:"right",className:$r(s,i),children:[e.jsx(P.DataCell,{children:e.jsx(ge,{dateStringFom:n.permisjonFom,dateStringTom:n.permisjonTom})}),e.jsx(P.DataCell,{children:e.jsx(y,{id:"VelferdspermisjonPanel.Permisjon",values:{type:n.type.toLowerCase(),permisjon:n.permisjonsprosent}})}),e.jsx(P.DataCell,{children:e.jsx(Q,{variant:"neutral-moderate",size:"small",children:e.jsx(y,{id:"VelferdspermisjonPanel.AAregisteret"})})})]})};Ze.__docgenInfo={description:"",methods:[],displayName:"VelferdspermisjonTabellRad",props:{velferdspermisjon:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsforholdIndex:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterOverstyrtUtbetalingsgrad:{required:!0,tsType:{name:"signature",type:"function",raw:"(velferdspermisjonprosent: number) => void",signature:{arguments:[{type:{name:"number"},name:"velferdspermisjonprosent"}],return:{name:"void"}}},description:""}}};const zr="_image_489xq_1",Jr={image:zr},en=({velferdspermisjoner:n,arbeidsforholdIndex:r,readOnly:t,oppdaterOverstyrtUtbetalingsgrad:a})=>{const i=E();return e.jsxs(e.Fragment,{children:[e.jsx(j,{fourtyPx:!0}),e.jsxs(O,{gap:"4",children:[e.jsx(ne,{size:"small",children:e.jsx(y,{id:"TilretteleggingForArbeidsgiverPanel.Velferdspermisjon"})}),n.some(s=>s.erGyldig===void 0||s.erGyldig===null)&&e.jsx(Ge,{title:i.formatMessage({id:"TilretteleggingForArbeidsgiverPanel.ErPermisjonGyldg"}),className:Jr.image})]}),e.jsx(j,{sixteenPx:!0}),e.jsx(P,{size:"small",children:e.jsx(P.Body,{children:n.map(s=>e.jsx(Ze,{velferdspermisjon:s,readOnly:t,arbeidsforholdIndex:r,oppdaterOverstyrtUtbetalingsgrad:a},s.permisjonFom))})})]})};en.__docgenInfo={description:"",methods:[],displayName:"VelferdspermisjonPanel",props:{velferdspermisjoner:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Permisjon[]"},description:""},arbeidsforholdIndex:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterOverstyrtUtbetalingsgrad:{required:!0,tsType:{name:"signature",type:"function",raw:"(velferdspermisjonprosent: number) => void",signature:{arguments:[{type:{name:"number"},name:"velferdspermisjonprosent"}],return:{name:"void"}}},description:""}}};A.extend(Tr);const Wr=(n,r,t)=>()=>{const a=r("termindato"),i=r("fødselsdato"),s=A(t),g=A(a).subtract(3,"week").subtract(1,"day"),o=i?A.min(g,A(i)):g;return o&&s.isValid()&&!s.isBefore(o)?n.formatMessage({id:"TilretteleggingForArbeidsgiverPanel.TilretteleggingTidligereEnn"},{dato:o.format(Ie)}):null},nn=(n,r)=>n.filter(t=>!A(t.permisjonFom).isAfter(r)&&(t.permisjonTom==null||!A(t.permisjonTom).isBefore(r))),rn=({arbeidsforhold:n,arbeidsforholdIndex:r,readOnly:t,visInfoAlert:a,stillingsprosentArbeidsforhold:i})=>{const s=E(),{getValues:g,watch:o,setValue:l}=Z(),u=o(`arbeidsforhold.${r}.tilretteleggingBehovFom`),d=T.useMemo(()=>nn(n.velferdspermisjoner,u),[n.velferdspermisjoner,u]),m=o("termindato"),f=d.some(k=>k.erGyldig===void 0||k.erGyldig===null),p=k=>{n.tilretteleggingDatoer.forEach((v,q)=>{const b=me(v,i,k,!1);b!==void 0&&l(`arbeidsforhold.${r}.tilretteleggingDatoer.${q}`,{...v,overstyrtUtbetalingsgrad:b})})};return e.jsxs(e.Fragment,{children:[a&&e.jsxs(e.Fragment,{children:[e.jsx(j,{eightPx:!0}),e.jsx(Le,{children:[e.jsx(y,{id:"TilretteleggingFaktaForm.UndersokNarmere"},"svangerskapspengerAp")]}),e.jsx(j,{thirtyTwoPx:!0})]}),e.jsx(j,{sixteenPx:!0}),e.jsx(Zn,{readOnly:t,name:`arbeidsforhold.${r}.skalBrukes`,label:e.jsx(y,{id:"TilretteleggingForArbeidsgiverPanel.SkalHaSvpForArbeidsforhold"})}),e.jsx(j,{sixteenPx:!0}),e.jsx($,{name:`arbeidsforhold.${r}.tilretteleggingBehovFom`,label:s.formatMessage({id:"TilretteleggingForArbeidsgiverPanel.DatoForTilrettelegging"}),validate:[V,z,Wr(s,g,u)],isReadOnly:t}),d.length>0&&e.jsx(en,{velferdspermisjoner:d,arbeidsforholdIndex:r,readOnly:t,oppdaterOverstyrtUtbetalingsgrad:p}),e.jsx(j,{fourtyPx:!0}),e.jsx(ne,{size:"small",children:e.jsx(y,{id:"TilretteleggingForArbeidsgiverPanel.Perioder"})}),e.jsx(j,{sixteenPx:!0}),e.jsx(Qe,{arbeidsforhold:n,arbeidsforholdIndex:r,readOnly:t||f,stillingsprosentArbeidsforhold:i,termindato:m})]})};rn.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdPanel",props:{arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
}>`},description:""},arbeidsforholdIndex:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},visInfoAlert:{required:!0,tsType:{name:"boolean"},description:""},stillingsprosentArbeidsforhold:{required:!0,tsType:{name:"number"},description:""}}};const Qr=n=>n?`...${n.substring(n.length-4,n.length)}`:"",Xr=(n,r)=>n.length>1?n.find(t=>t.internArbeidsforholdId===r):n.length===1?n[0]:void 0,ie=(n,r,t)=>{const a=A(n);return!(a.isBefore(A(r))||a.isAfter(A(t)))},Zr=(n,r)=>r&&n?e.jsx(y,{id:"ArbeidsforholdFieldArray.SvpIkkeBeregnet"}):n?e.jsx(y,{id:"ArbeidsforholdFieldArray.SkalHaSvp"}):e.jsx(y,{id:"ArbeidsforholdFieldArray.SkalIkkeHaSvp"}),et=(n,r)=>n.filter(a=>ie(r,a.fom,a.tom)).reduce((a,i)=>a+i.stillingsprosent,0),tn=({sorterteArbeidsforhold:n,aoiArbeidsforhold:r,arbeidsgiverOpplysningerPerId:t,readOnly:a,uttakArbeidTyper:i})=>{const{control:s}=Z(),{fields:g}=se({control:s,name:"arbeidsforhold"});return e.jsx(e.Fragment,{children:g.map((o,l)=>{const u=n[l],d=t[u.arbeidsgiverReferanse],m=r.filter(q=>q.arbeidsgiverIdent===u.arbeidsgiverReferanse),f=Xr(m,u.internArbeidsforholdReferanse),p=f?!ie(u.tilretteleggingBehovFom,f.fom,f.tom):m.length>0&&m.every(q=>!ie(u.tilretteleggingBehovFom,q.fom,q.tom)),k=f?f.stillingsprosent:et(m,u.tilretteleggingBehovFom),v=i.find(q=>q.kode===u.uttakArbeidType);return e.jsxs(bn.Fragment,{children:[e.jsxs(te,{"aria-label":"arbeidsgiver",defaultOpen:!0,className:H.card,children:[e.jsx(te.Header,{children:e.jsx("div",{className:H.padding,children:e.jsx(gr,{children:e.jsxs(ur,{children:[e.jsx(U,{children:e.jsx(er,{color:"var(--a-blue-600)",className:H.image})}),e.jsx(U,{children:e.jsx($n,{size:"small",children:(d==null?void 0:d.navn)||(v==null?void 0:v.navn)})}),(d==null?void 0:d.identifikator)&&e.jsx(U,{className:H.idMargin,children:e.jsx(Y,{size:"small",children:d.identifikator})}),u.eksternArbeidsforholdReferanse&&e.jsx(U,{className:H.idMargin,children:e.jsx(Y,{size:"small",children:Qr(u.eksternArbeidsforholdReferanse)})}),e.jsx(U,{className:H.tagMargin,children:e.jsx(Q,{size:"small",variant:"neutral-moderate",children:e.jsx(y,{id:"ArbeidsforholdFieldArray.Stillingsprosent",values:{stillingsprosent:k}})})}),e.jsx(U,{children:e.jsx(Q,{size:"small",variant:"neutral-moderate",children:Zr(u.skalBrukes,p)})}),u.skalBrukes&&p&&e.jsx(U,{children:e.jsx(Ge,{color:"var(--a-orange-600)",className:H.image})})]})})})}),e.jsx(te.Content,{children:e.jsx(rn,{arbeidsforhold:u,arbeidsforholdIndex:l,readOnly:a,visInfoAlert:u.skalBrukes&&p,stillingsprosentArbeidsforhold:k})})]}),e.jsx(j,{twentyPx:!0})]},o.id)})})};tn.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const nt=tr(1500),rt=(n,r)=>[...n||[]].sort((t,a)=>{const i=r[t.arbeidsgiverReferanse],s=r[a.arbeidsgiverReferanse];return i&&s?i.navn.localeCompare(s.navn):0}),tt=n=>{const r=n.find(t=>t.definisjon===R.FODSELTILRETTELEGGING);return r?r.begrunnelse:void 0},at=n=>r=>r!==void 0||n,we=n=>n.some(r=>nn(r.velferdspermisjoner,r.tilretteleggingBehovFom).some(t=>t.erGyldig===void 0||t.erGyldig===null)),an=({behandlingVersjon:n,readOnly:r,hasOpenAksjonspunkter:t,arbeidsgiverOpplysningerPerId:a,aksjonspunkter:i,svangerskapspengerTilrettelegging:s,aoiArbeidsforhold:g,submitCallback:o,formData:l,setFormData:u,submittable:d,uttakArbeidTyper:m})=>{const f=E(),p=T.useMemo(()=>rt(s.arbeidsforholdListe,a),[n]),k=X({defaultValues:l||{arbeidsforhold:p,termindato:s?s.termindato:"",fødselsdato:s?s.fødselsdato:"",begrunnelse:tt(i)}}),v=(s==null?void 0:s.fødselsdato)||"",q=at(k.formState.isDirty),b=k.watch("arbeidsforhold"),K=we(p),L=we(b),N=!b.some(c=>c.skalBrukes),h=b.some(c=>c.tilretteleggingDatoer.some(M=>!M.fom)||c.avklarteOppholdPerioder.some(M=>!M.fom)),w=b.some(c=>c.skalBrukes&&c.tilretteleggingDatoer.length===0),D=b.some(c=>c.skalBrukes&&c.velferdspermisjoner.some(M=>M.erGyldig&&M.permisjonsprosent===100)),[B,J]=T.useState(!1),W=L||N||h||w||D,_=T.useCallback(c=>W?(J(!0),Promise.resolve()):o({kode:R.FODSELTILRETTELEGGING,termindato:c.termindato,fødselsdato:c.fødselsdato,begrunnelse:c.begrunnelse,bekreftetSvpArbeidsforholdList:c.arbeidsforhold}),[W,o]);return e.jsxs(Ne,{formMethods:k,setDataOnUnmount:u,onSubmit:_,children:[t&&e.jsxs(e.Fragment,{children:[e.jsx(Le,{children:K?[e.jsx(y,{id:"TilretteleggingFaktaForm.AksjonspunktOgVelferdspermisjoner"},"svangerskapspengerAp")]:[e.jsx(y,{id:"TilretteleggingFaktaForm.Aksjonspunkt"},"svangerskapspengerAp")]}),e.jsx(j,{fourtyPx:!0})]}),e.jsxs(O,{gap:"4",wrap:!0,children:[e.jsx($,{name:"termindato",label:f.formatMessage({id:"TilretteleggingFaktaForm.Termindato"}),validate:[V,z],isReadOnly:r}),v&&e.jsx($,{name:"fødselsdato",label:f.formatMessage({id:"TilretteleggingFaktaForm.Fodselsdato"}),validate:[V,z],isReadOnly:r})]}),e.jsx(j,{fourtyPx:!0}),e.jsx(tn,{sorterteArbeidsforhold:b,aoiArbeidsforhold:g,arbeidsgiverOpplysningerPerId:a,readOnly:r,uttakArbeidTyper:m}),L&&B&&e.jsxs(e.Fragment,{children:[e.jsx(j,{sixteenPx:!0}),e.jsx(C,{variant:"error",children:e.jsx(y,{id:"TilretteleggingFaktaForm.IkkeAllePermisjonerVurdert"})})]}),N&&B&&e.jsxs(e.Fragment,{children:[e.jsx(j,{sixteenPx:!0}),e.jsx(C,{variant:"error",children:e.jsx(y,{id:"TilretteleggingFaktaForm.HarIkkeValgtArbeidsforhold"})})]}),h&&B&&e.jsxs(e.Fragment,{children:[e.jsx(j,{sixteenPx:!0}),e.jsx(C,{variant:"error",children:e.jsx(y,{id:"TilretteleggingFaktaForm.PeriodeIkkeLagtTil"})})]}),w&&B&&e.jsxs(e.Fragment,{children:[e.jsx(j,{sixteenPx:!0}),e.jsx(C,{variant:"error",children:e.jsx(y,{id:"TilretteleggingFaktaForm.ArbeidsforholdUtenTilrettelegging"})})]}),D&&B&&e.jsxs(e.Fragment,{children:[e.jsx(j,{sixteenPx:!0}),e.jsx(C,{variant:"error",children:e.jsx(y,{id:"TilretteleggingFaktaForm.ValgtSvpVedGyldig100Permisjon"})})]}),e.jsx(j,{fourtyPx:!0}),e.jsx(nr,{name:"begrunnelse",label:f.formatMessage({id:"TilretteleggingFaktaForm.BegrunnEndringene"}),validate:[q,nt,rr],maxLength:1500,readOnly:r}),e.jsx(j,{fourtyPx:!0}),e.jsx(_n,{isSubmittable:d,isReadOnly:r,isSubmitting:k.formState.isSubmitting,isDirty:k.formState.isDirty}),e.jsx(j,{fourtyPx:!0})]})};an.__docgenInfo={description:`TilretteleggingFaktaForm

Viser tillrettlegging før svangerskapspenger`,methods:[],displayName:"TilretteleggingFaktaForm",props:{behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},hasOpenAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
} & AksjonspunktTilBekreftelse<AksjonspunktCode.FODSELTILRETTELEGGING>`,elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},formData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}},{key:"termindato",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},uttakArbeidTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const st={"ArbeidsforholdFieldArray.SkalHaSvp":"Skal ha svangerskapspenger","ArbeidsforholdFieldArray.SkalIkkeHaSvp":"Skal ikke ha svangerskapspenger","ArbeidsforholdFieldArray.SvpIkkeBeregnet":"Svangerskapspenger kan ikke beregnes","ArbeidsforholdFieldArray.Stillingsprosent":"{stillingsprosent}% stilling","TilretteleggingFaktaForm.Aksjonspunkt":"Kontroller opplysninger fra jordmor og arbeidsgiver","TilretteleggingFaktaForm.AksjonspunktOgVelferdspermisjoner":"Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer","TilretteleggingFaktaForm.Termindato":"Termindato","TilretteleggingFaktaForm.Fodselsdato":"Fødselsdato","TilretteleggingFaktaForm.BegrunnEndringene":"Begrunn endringene","TilretteleggingFaktaForm.UndersokNarmere":"Søker var ikke ansatt da behovet for tilrettelegging oppsto. Vurder om du skal kontakte arbeidsgiver eller søker for avklaring. Hvis du innvilger behandlingen nå, vil bruker få 0 kroner utbetalt.","TilretteleggingFaktaForm.IkkeAllePermisjonerVurdert":"Ikke alle velferdspermisjoner er vurdert","TilretteleggingFaktaForm.HarIkkeValgtArbeidsforhold":"Minst ett arbeidsforhold må brukes","TilretteleggingFaktaForm.PeriodeIkkeLagtTil":"Det er minst en periode som er lagt til men ikke ferdigstilt","TilretteleggingFaktaForm.ArbeidsforholdUtenTilrettelegging":"Alle arbeidsforhold med svangerskapspenger må ha minst en tilretteleggingsperiode","TilretteleggingFaktaForm.ValgtSvpVedGyldig100Permisjon":"Arbeidsforhold med gyldig permisjon på 100% kan ikke ha svangerskapspenger","TilretteleggingForArbeidsgiverPanel.TilretteleggingTidligereEnn":"Tilrettelegging fra og med må være tidligere enn {dato}","TilretteleggingForArbeidsgiverPanel.DatoForTilrettelegging":"Dato for tilrettelegging fra lege eller jordmor","TilretteleggingForArbeidsgiverPanel.Perioder":"Perioder","TilretteleggingForArbeidsgiverPanel.SkalHaSvpForArbeidsforhold":"Skal ha svangerskapspenger for arbeidsforholdet","TilretteleggingForArbeidsgiverPanel.Velferdspermisjon":"Registrerte velferdspermisjoner","TilretteleggingForArbeidsgiverPanel.ErPermisjonGyldg":"Er permisjoner gyldige?","TilretteleggingForm.Tilretteleggingsbehov":"Tilretteleggingsbehov","TilretteleggingForm.FraOgMed":"Fra og med","TilretteleggingForm.KanGjennomfores":"Arbeidstakeren kan fortsette i samme stilling","TilretteleggingForm.RedusertArbeid":"Arbeidstakeren kan fortsette med redusert arbeidstid","TilretteleggingForm.KanIkkeGjennomfores":"Arbeidstakeren må midlertidig gå ut av sitt arbeid","TilretteleggingForm.LeggTil":"Legg til ny periode","TilretteleggingForm.AvsluttOgSlett":"Avbryt","TilretteleggingForm.Oppdater":"Oppdater","TilretteleggingForm.Avbryt":"Avbryt","TilretteleggingForm.ProsentSvp":"Prosent svangerskapspenger","TilretteleggingForm.SlettPeriode":"Slett periode","TilretteleggingForm.DuplikateDatoer":"Flere perioder med samme Fra og med","TilretteleggingForm.EtterTermindato":"Dato kan ikke være senere enn tre uker før termindato","TilretteleggingForm.ForForsteDato":"Dato kan ikke være før dato for tilrettelegging fra lege eller jordmor","TilretteleggingForm.Arbeidsprosent":"Arbeidsprosent","TilretteleggingForm.ArbeidsprosentBeskrivelse":"Dette er prosenten arbeidstaker skal jobbe i perioden","TilretteleggingForm.ProsentSvpBeskrivelse":"Utbetalingsgrad i perioden","TilretteleggingForm.AngiUtbetalingsgrad":"Utbetalingsgrad må være større enn 0 når stillingsprosenten er 0","TilretteleggingInfoPanel.Periode":"Periode på {periode}","TilretteleggingInfoPanel.TreUker":"Frem til tre uker før termin","TilretteleggingInfoPanel.Dager":"Frem til {dager} dager før termin","TilretteleggingInfoPanel.FraSoknad":"Fra søknaden","TilretteleggingInfoPanel.Sendt":"Mottatt {dato}","TilretteleggingInfoPanel.SvpOgArbeid":"Svangerskapspenger {svp}% og arbeide {arbeid}%","TilretteleggingInfoPanel.AvStillingsprosent":"Av stillingsprosent {stillingsprosent}%","TilretteleggingInfoPanel.Saksbehandler":"Saksbehandler","OppholdForm.SlettPeriode":"Slett periode","OppholdForm.LeggTil":"Legg til ny periode","OppholdForm.AvsluttOgSlett":"Avbryt","OppholdForm.Oppdater":"Oppdater","OppholdForm.Avbryt":"Avbryt","OppholdForm.FraOgMed":"Fra og med","OppholdForm.TilOgMed":"Til og med","OppholdForm.GrunnTilOpphold":"Grunn til opphold","OppholdForm.Sykepenger":"Sykepenger 100% i perioden med svangerskapspenger","OppholdForm.Ferie":"Ferie","OppholdForm.TomForFom":"Dato kan ikke være før fra og med","OppholdForm.EtterTermindato":"Dato kan ikke være senere enn tre uker før termindato","OppholdForm.ForForsteDato":"Dato kan ikke være før første tilrettelegging","TilretteleggingFieldArray.LeggTilTilrettelegging":"Periode med svangerskapspenger","TilretteleggingFieldArray.LeggTilOpphold":"Opphold","VelferdspermisjonPanel.Permisjon":"{permisjon}% {type}","VelferdspermisjonPanel.PermisjonGyldig":"Er permisjon gyldig?","VelferdspermisjonPanel.PermisjonGyldigDetaljer":"Hvis den er gyldig vil utbetalingsgraden for alle perioder for denne arbeidsgiveren reduseres med permisjonsprosent.","VelferdspermisjonPanel.Ja":"Ja","VelferdspermisjonPanel.Nei":"Nei","VelferdspermisjonPanel.Oppdater":"Oppdater","VelferdspermisjonPanel.AAregisteret":"AA-registeret","VelferdspermisjonPanel.Permisjon100ProsentOgGyldig":"Permisjonen på 100% er satt som gyldig, og dette fører til at søker ikke får svangerskapsenger for arbeidsforholdet.","TilretteleggingPerioderTabellRad.Periode":"Periode","TilretteleggingPerioderTabellRad.Saksbehandler":"Saksbehandler","TilretteleggingPerioderTabellRad.EndretAvSaksbehandler":"Endret av saksbehandler","TilretteleggingPerioderTabellRad.TidligereVedtak":"Tidligere vedtak","TilretteleggingPerioderTabellRad.Inntektsmelding":"Inntektsmelding","TilretteleggingPerioderTabellRad.Soknad":"Søknad","TilretteleggingPerioderTabellRad.Tilrettelegging":"Tilrettelegging","TilretteleggingPerioderTabellRad.Opphold":"Opphold","TilretteleggingPerioderTabellRad.Sykepenger":"Sykepenger 100%","TilretteleggingPerioderTabellRad.Ferie":"Ferie","TilretteleggingPerioderTabellRad.SVPprosent":"{prosent}% svangerskapspenger"},it=Oe(st),sn=({behandling:n,svangerskapspengerTilrettelegging:r,aksjonspunkter:t,submitCallback:a,readOnly:i,harApneAksjonspunkter:s,submittable:g,arbeidsgiverOpplysningerPerId:o,formData:l,setFormData:u,arbeidOgInntekt:d,alleKodeverk:m})=>e.jsx(Ve,{value:it,children:e.jsx(an,{behandlingVersjon:n.versjon,svangerskapspengerTilrettelegging:r,aoiArbeidsforhold:d.arbeidsforhold,aksjonspunkter:t,submitCallback:a,readOnly:i,hasOpenAksjonspunkter:s,submittable:g,arbeidsgiverOpplysningerPerId:o,formData:l,setFormData:u,uttakArbeidTyper:m[De.UTTAK_ARBEID_TYPE]})});sn.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingFaktaIndex",props:{svangerskapspengerTilrettelegging:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Pe=[R.FODSELTILRETTELEGGING],lt=[R.OVERSTYR_AVKLAR_STARTDATO],ot=[S.ARBEID_OG_INNTEKT,S.SVANGERSKAPSPENGER_TILRETTELEGGING],ln=({arbeidsgiverOpplysningerPerId:n,...r})=>e.jsx(Mn,{...r,panelEndepunkter:ot,aksjonspunktKoder:Pe,overstyringApKoder:lt,faktaPanelKode:ar.FODSELTILRETTELEGGING,faktaPanelMenyTekst:E().formatMessage({id:"FodselOgTilretteleggingInfoPanel.FaktaFodselOgTilrettelegging"}),skalPanelVisesIMeny:()=>!0,renderPanel:t=>e.jsx(sn,{arbeidsgiverOpplysningerPerId:n,...t,readOnly:t.readOnly||!r.behandling.aksjonspunkt.some(a=>Pe.some(i=>i===a.definisjon))})});ln.__docgenInfo={description:"FodseltilretteleggingFaktaInitPanel",methods:[],displayName:"FodseltilretteleggingFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const gt=n=>{const r=n.tilretteleggingDatoer.some(a=>a.type!==F.HEL_TILRETTELEGGING),t=n.tilretteleggingDatoer.some(a=>a.type===F.HEL_TILRETTELEGGING&&fe(a.fom).isAfter(fe(n.tilretteleggingBehovFom)));return r||t},ut=n=>n!=null&&n.arbeidsforholdListe?n.arbeidsforholdListe.some(r=>gt(r)):!1,dt=(n,r,t)=>({...de.buildInitialValues(n,r,t),...ke.buildInitialValues(n)}),kt=n=>({...de.transformValues(n),...ke.transformValues(n),kode:R.SVANGERSKAPSVILKARET}),on=({readOnly:n,readOnlySubmitButton:r,isApOpen:t,erIkkeGodkjentAvBeslutter:a,svangerskapspengerTilrettelegging:i,aksjonspunkter:s,behandlingsresultat:g,alleKodeverk:o,submitCallback:l,status:u,formData:d,setFormData:m})=>{const f=T.useMemo(()=>ut(i),[i]),p=E(),k=T.useMemo(()=>dt(s,u,g),[g,s,u]),v=X({defaultValues:d||k}),q=v.watch("erVilkarOk");T.useEffect(()=>{q&&v.clearErrors()},[q]);const b=o[De.AVSLAGSARSAK][ee.SVANGERSKAPVILKARET],L=s.some(h=>h.status===ue.OPPRETTET)?void 0:I.OPPFYLT===u,N=T.useCallback(h=>e.jsx("b",{children:h}),[]);return e.jsx(Ne,{formMethods:v,onSubmit:h=>l(kt(h)),setDataOnUnmount:m,children:e.jsxs(dr,{title:p.formatMessage({id:"SvangerskapVilkarForm.Svangerskap"}),isAksjonspunktOpen:t,readOnlySubmitButton:r,readOnly:n,originalErVilkarOk:L,erIkkeGodkjentAvBeslutter:a,isDirty:v.formState.isDirty,isSubmitting:v.formState.isSubmitting,children:[e.jsx(ne,{size:"small",children:e.jsx(y,{id:"SvangerskapVilkarForm.RettTilSvp"})}),!f&&e.jsxs(e.Fragment,{children:[e.jsx(j,{sixteenPx:!0}),e.jsx(ne,{size:"small",children:e.jsx(y,{id:"SvangerskapVilkarForm.IkkeInnvilgetUttak"})})]}),e.jsx(de,{avslagsarsaker:b,readOnly:n,skalKunneInnvilge:f,customVilkarOppfyltText:e.jsx(y,{id:"SvangerskapVilkarForm.Oppfylt"}),customVilkarIkkeOppfyltText:e.jsx(y,{id:"SvangerskapVilkarForm.IkkeOppfylt",values:{b:N}})}),e.jsx(ke,{readOnly:n,notRequired:q})]})})};on.__docgenInfo={description:"SvangerskapsvilkårForm",methods:[],displayName:"SvangerskapVilkarForm",props:{behandlingsresultat:{required:!1,tsType:{name:"intersection['behandlingsresultat']",raw:"Behandling['behandlingsresultat']"},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
} & AksjonspunktTilBekreftelse<AksjonspunktCode.SVANGERSKAPSVILKARET>`,elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
}`,signature:{properties:[{key:"erVilkarOk",value:{name:"boolean",required:!1}},{key:"avslagCode",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const mt={"SvangerskapVilkarForm.Svangerskap":"Svangerskap","SvangerskapVilkarForm.RettTilSvp":"Rett til svangerskapspenger","SvangerskapVilkarForm.Oppfylt":"Mor har rett til svangerskapspenger, vilkåret er oppfylt","SvangerskapVilkarForm.IkkeOppfylt":"Mor har ikke rett til svangerskapspenger, vilkåret er <b>ikke</b> oppfylt","SvangerskapVilkarForm.IkkeInnvilgetUttak":"Det finnes ingen perioder med svangerskapspenger som kan innvilges","ShowVilkarStatus.Check":"Informasjonen er utfylt"},pt=Oe(mt),gn=({behandling:n,aksjonspunkter:r,status:t,submitCallback:a,isReadOnly:i,readOnlySubmitButton:s,isAksjonspunktOpen:g,alleKodeverk:o,alleMerknaderFraBeslutter:l,svangerskapspengerTilrettelegging:u,formData:d,setFormData:m})=>e.jsx(Ve,{value:pt,children:e.jsx(on,{behandlingsresultat:n.behandlingsresultat,aksjonspunkter:r,status:t,submitCallback:a,readOnly:i,readOnlySubmitButton:s,isApOpen:g,alleKodeverk:o,svangerskapspengerTilrettelegging:u,erIkkeGodkjentAvBeslutter:r.some(f=>{var p;return(p=l[f.definisjon])==null?void 0:p.notAccepted}),formData:d,setFormData:m})});gn.__docgenInfo={description:"",methods:[],displayName:"SvangerskapVilkarProsessIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"aktoer",value:{name:"string",required:!0}},{key:"dokumentLinks",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"historikkinnslagDeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  begrunnelsetekst?: string;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: string;
    verdi?: string;
  };
  opplysninger: HistorikkInnslagOpplysning[];
  soeknadsperiode?: {
    soeknadsperiodeType?: string;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: string;
  årsaktekst?: string;
  tema?: {
    endretFeltNavn: string;
    klNavn: string;
    navnVerdi: string;
  };
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: HistorikkInnslagAksjonspunkt[];
}`,signature:{properties:[{key:"begrunnelsetekst",value:{name:"string",required:!1}},{key:"begrunnelseFritekst",value:{name:"string",required:!1}},{key:"hendelse",value:{name:"signature",type:"object",raw:`{
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"opplysninger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opplysningType: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"opplysningType",value:{name:"string",required:!0}},{key:"tilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagOpplysning[]",required:!0}},{key:"soeknadsperiode",value:{name:"signature",type:"object",raw:`{
  soeknadsperiodeType?: string;
  navnVerdi?: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"soeknadsperiodeType",value:{name:"string",required:!1}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"tilVerdi",value:{name:"string",required:!1}}]},required:!1}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"årsaktekst",value:{name:"string",required:!1}},{key:"tema",value:{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  klNavn: string;
  navnVerdi: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"klNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!0}}]},required:!1}},{key:"gjeldendeFra",value:{name:"signature",type:"object",raw:`{
  fra?: string;
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"fra",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"resultat",value:{name:"string",required:!1}},{key:"endredeFelter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | number | boolean;
  tilVerdi?: string | number | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"klNavn",value:{name:"string",required:!1}},{key:"fraVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"tilVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"klFraVerdi",value:{name:"string",required:!1}},{key:"klTilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkinnslagEndretFelt[]",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  godkjent: boolean;
  aksjonspunktBegrunnelse?: string;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"aksjonspunktBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagAksjonspunkt[]",required:!1}}]}}],raw:"HistorikkinnslagDel[]",required:!0}}]}}],raw:`Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"historikkinnslagV2",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>`}],raw:"HistorikkinnslagV2[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
}>`}],raw:"SvpAvklartOppholdPeriode[]",required:!0}}]}}],raw:`Readonly<{
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
}>`}],raw:"ArbeidsforholdFodselOgTilrettelegging[]",required:!0}},{key:"saksbehandlet",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}>`},description:""}}};const yt=[R.SVANGERSKAPSVILKARET],vt=[ee.SVANGERSKAPVILKARET],bt=[S.SVANGERSKAPSPENGER_TILRETTELEGGING],un=({behandlingVersjon:n,...r})=>{const t=E();return e.jsx(Be,{...r,behandlingVersjon:n,panelEndepunkter:bt,aksjonspunktKoder:yt,vilkarKoder:vt,inngangsvilkarPanelKode:"SVANGERSKAP",hentInngangsvilkarPanelTekst:()=>t.formatMessage({id:"SvangerskapVilkarForm.FyllerVilkår"}),renderPanel:a=>e.jsx(gn,{...a})})};un.__docgenInfo={description:"",methods:[],displayName:"SvangerskapInngangsvilkarInitPanel",props:{behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},registrerInngangsvilkarPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: InngangsvilkarPanelData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  aksjonspunktTekst?: string;
  harApentAksjonspunkt: boolean;
  status: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"aksjonspunktTekst",value:{name:"string",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},harInngangsvilkarApentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""}}};const ft=[R.VURDER_OPPTJENINGSVILKARET],Se=[ee.OPPTJENINGSPERIODE,ee.OPPTJENINGSVILKARET],qt=[S.OPPTJENING],dn=({behandlingVersjon:n,rettigheter:r,...t})=>{const a=E();return e.jsx(Be,{...t,behandlingVersjon:n,panelEndepunkter:qt,aksjonspunktKoder:ft,vilkarKoder:Se,inngangsvilkarPanelKode:"OPPTJENINGSVILKARET",hentInngangsvilkarPanelTekst:()=>a.formatMessage({id:"OpptjeningVilkarView.VurderOmSøkerHarRett"}),renderPanel:(i,s,g)=>e.jsxs(e.Fragment,{children:[i.aksjonspunkter.length===0&&e.jsx(qn,{aksjonspunkter:i.aksjonspunkter,aksjonspunktKode:R.OVERSTYRING_AV_OPPTJENINGSVILKARET,vilkar:i.vilkar,vilkarKoder:Se,panelTekstKode:"Inngangsvilkar.Opptjeningsvilkaret",toggleOverstyring:g,erOverstyrt:s,overrideReadOnly:i.isReadOnly||t.harInngangsvilkarApentAksjonspunkt&&!(i.isAksjonspunktOpen||s),kanOverstyreAccess:r.kanOverstyreAccess}),i.aksjonspunkter.length>0&&e.jsx(En,{erSvpFagsak:!0,lovReferanse:i.vilkar[0].lovReferanse,...i})]})})};dn.__docgenInfo={description:"",methods:[],displayName:"OpptjeningInngangsvilkarInitPanel",props:{behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},rettigheter:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"aksjonspunktTekst",value:{name:"string",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},harInngangsvilkarApentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""}}};const kn=({behandling:n,valgtProsessSteg:r,registrerProsessPanel:t,apentFaktaPanelInfo:a,oppdaterProsessStegOgFaktaPanelIUrl:i,rettigheter:s})=>{const g=T.useCallback(l=>e.jsxs(e.Fragment,{children:[e.jsx(un,{behandlingVersjon:n.versjon,...l}),e.jsx(hn,{behandlingVersjon:n.versjon,rettigheter:s,...l})]}),[n.versjon,s]),o=T.useCallback(l=>e.jsx(dn,{behandlingVersjon:n.versjon,rettigheter:s,...l}),[n.versjon,s]);return e.jsx(jn,{behandling:n,valgtProsessSteg:r,registrerProsessPanel:t,apentFaktaPanelInfo:a,oppdaterProsessStegOgFaktaPanelIUrl:i,leftPanels:g,rightPanels:o})};kn.__docgenInfo={description:"",methods:[],displayName:"InngangsvilkarSvpProsessStegInitPanel",props:{apentFaktaPanelInfo:{required:!1,tsType:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},description:""},oppdaterProsessStegOgFaktaPanelIUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(punktnavn?: string, faktanavn?: string) => void",signature:{arguments:[{type:{name:"string"},name:"punktnavn"},{type:{name:"string"},name:"faktanavn"}],return:{name:"void"}}},description:""},rettigheter:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const ht=[R.VURDER_TILBAKETREKK],jt=[S.BEREGNINGRESULTAT_DAGYTELSE,S.FAMILIEHENDELSE,S.SOKNAD,S.FERIEPENGEGRUNNLAG],mn=({arbeidsgiverOpplysningerPerId:n,personoversikt:r,...t})=>e.jsx(_e,{...t,panelEndepunkter:jt,aksjonspunktKoder:ht,prosessPanelKode:xe.TILKJENT_YTELSE,prosessPanelMenyTekst:E().formatMessage({id:"Behandlingspunkt.TilkjentYtelse"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:()=>sr.hasPath(S.BEREGNINGRESULTAT_DAGYTELSE.name)?I.OPPFYLT:I.IKKE_VURDERT,renderPanel:a=>e.jsx(Fn,{arbeidsgiverOpplysningerPerId:n,personoversikt:r,beregningresultat:a==null?void 0:a.beregningresultatDagytelse,...a})});mn.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelseProsessStegInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Ee=(n,r)=>n.filter(t=>!r.some(a=>a.definisjon===t.definisjon)).every(t=>t.status!==ue.OPPRETTET),Tt=n=>n.definisjon===R.OVERSTYR_BEREGNING||n.definisjon===R.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG||n.definisjon===R.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG||n.definisjon===R.VURDER_SOKNADSFRIST_FORELDREPENGER,At=n=>Tt(n)&&n.status===ue.OPPRETTET,Fe=(n,r,t,a)=>n.length===0?I.IKKE_VURDERT:Ee(r,t)&&n.some(i=>i.vilkarStatus===I.IKKE_OPPFYLT)?I.IKKE_OPPFYLT:n.some(i=>i.vilkarStatus===I.IKKE_VURDERT)||r.some(At)?I.IKKE_VURDERT:Ee(r,t)?a&&or(a.type)?I.IKKE_OPPFYLT:I.OPPFYLT:I.IKKE_VURDERT,Rt=(n,r,t)=>a=>{const i={...a,behandlingUuid:t.uuid,fagsakYtelseType:r.fagsakYtelseType};return n(i).then(s=>zn(s))},ct=[R.FATTER_VEDTAK,R.FORESLA_VEDTAK_MANUELT,R.VURDERE_ANNEN_YTELSE,R.VURDERE_DOKUMENT,R.VURDERE_INNTEKTSMELDING_KLAGE,R.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,R.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING],wt=(n,r,t)=>a=>(t(!1),()=>{a.some(s=>s.kode===R.FORESLA_VEDTAK||s.skalBrukeOverstyrendeFritekstBrev)?r(!0):n(!0)}),Pt=[...ct,R.FORESLA_VEDTAK],St=[S.TILBAKEKREVINGVALG,S.BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING,S.SIMULERING_RESULTAT,S.BEREGNINGRESULTAT_DAGYTELSE,S.BEREGNINGSGRUNNLAG],pn=({toggleOppdatereFagsakContext:n,fagsak:r,opneSokeside:t,...a})=>{const i=E(),[s,g]=T.useState(!1),[o,l]=T.useState(!1),u=wt(g,l,n),d=kr(),{startRequest:m}=ir.useRestApiRunner(S.PREVIEW_MESSAGE),f=T.useCallback(Rt(m,r,d.behandling),[d.behandling.versjon]),p=T.useCallback(()=>{g(!1),t()},[]),k=T.useCallback(()=>{l(!1),t()},[]),{aksjonspunkt:v,vilkår:q}=a.behandling;return e.jsx(_e,{...a,panelEndepunkter:St,aksjonspunktKoder:Pt,prosessPanelKode:xe.VEDTAK,prosessPanelMenyTekst:i.formatMessage({id:"Behandlingspunkt.Vedtak"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:b=>Fe(q||[],v||[],b.aksjonspunkter,b.behandling.behandlingsresultat),lagringSideEffekter:u,hentSkalMarkeresSomAktiv:b=>!b.behandling.behandlingHenlagt&&Fe(q||[],v||[],b.aksjonspunkter,b.behandling.behandlingsresultat)!==I.IKKE_VURDERT,renderPanel:b=>e.jsxs(e.Fragment,{children:[e.jsx(mr,{visModal:s,lukkModal:p,behandlingsresultat:b.behandling.behandlingsresultat}),e.jsx(pr,{visModal:o,lukkModal:k,tekst:i.formatMessage({id:"FatterVedtakStatusModal.SendtBeslutter"})}),e.jsx(Tn,{ytelseTypeKode:lr.SVANGERSKAPSPENGER,previewCallback:f,...b,aksjonspunkter:v,vilkar:q})]})})};pn.__docgenInfo={description:"",methods:[],displayName:"VedtakSvpProsessStegInitPanel",props:{toggleOppdatereFagsakContext:{required:!0,tsType:{name:"signature",type:"function",raw:"(skalHenteFagsak: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"skalHenteFagsak"}],return:{name:"void"}}},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"aktoer",value:{name:"string",required:!0}},{key:"dokumentLinks",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"historikkinnslagDeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  begrunnelsetekst?: string;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: string;
    verdi?: string;
  };
  opplysninger: HistorikkInnslagOpplysning[];
  soeknadsperiode?: {
    soeknadsperiodeType?: string;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: string;
  årsaktekst?: string;
  tema?: {
    endretFeltNavn: string;
    klNavn: string;
    navnVerdi: string;
  };
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: HistorikkInnslagAksjonspunkt[];
}`,signature:{properties:[{key:"begrunnelsetekst",value:{name:"string",required:!1}},{key:"begrunnelseFritekst",value:{name:"string",required:!1}},{key:"hendelse",value:{name:"signature",type:"object",raw:`{
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"opplysninger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opplysningType: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"opplysningType",value:{name:"string",required:!0}},{key:"tilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagOpplysning[]",required:!0}},{key:"soeknadsperiode",value:{name:"signature",type:"object",raw:`{
  soeknadsperiodeType?: string;
  navnVerdi?: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"soeknadsperiodeType",value:{name:"string",required:!1}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"tilVerdi",value:{name:"string",required:!1}}]},required:!1}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"årsaktekst",value:{name:"string",required:!1}},{key:"tema",value:{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  klNavn: string;
  navnVerdi: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"klNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!0}}]},required:!1}},{key:"gjeldendeFra",value:{name:"signature",type:"object",raw:`{
  fra?: string;
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"fra",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"resultat",value:{name:"string",required:!1}},{key:"endredeFelter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | number | boolean;
  tilVerdi?: string | number | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"klNavn",value:{name:"string",required:!1}},{key:"fraVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"tilVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"klFraVerdi",value:{name:"string",required:!1}},{key:"klTilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkinnslagEndretFelt[]",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  godkjent: boolean;
  aksjonspunktBegrunnelse?: string;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"aksjonspunktBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagAksjonspunkt[]",required:!1}}]}}],raw:"HistorikkinnslagDel[]",required:!0}}]}}],raw:`Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"historikkinnslagV2",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>`}],raw:"HistorikkinnslagV2[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Et=({alleBehandlinger:n,behandling:r,fagsak:t,valgtProsessSteg:a,valgtFaktaSteg:i,oppdaterProsessStegOgFaktaPanelIUrl:s,opneSokeside:g,toggleOppdateringAvFagsakOgBehandling:o,arbeidsgivere:l,personoversikt:u,rettigheter:d,hentOgSettBehandling:m})=>{const f=T.useCallback(k=>e.jsxs(e.Fragment,{children:[e.jsx(An,{...k,fagsak:t,rettigheter:d}),e.jsx(Bn,{...k,saksnummer:t.saksnummer,behandlingUuid:r.uuid,rettigheter:d,arbeidsgiverOpplysningerPerId:l,hentOgSettBehandling:m}),e.jsx(In,{fagsak:t,alleBehandlinger:n,arbeidsgiverOpplysningerPerId:l,...k}),e.jsx(On,{...k,arbeidsgiverOpplysningerPerId:l}),e.jsx(Rn,{...k}),e.jsx(Un,{...k}),e.jsx(ln,{...k,arbeidsgiverOpplysningerPerId:l}),e.jsx(cn,{...k,fagsak:t}),e.jsx(Vn,{...k,arbeidsgiverOpplysningerPerId:l}),e.jsx(Kn,{...k,saksnummer:t.saksnummer,arbeidsgiverOpplysningerPerId:l}),e.jsx(Nn,{...k,arbeidsgiverOpplysningerPerId:l,rettigheter:d}),e.jsx(Dn,{...k,arbeidsgiverOpplysningerPerId:l})]}),[u,r,d,t,l,m]),p=T.useCallback((k,v)=>e.jsxs(e.Fragment,{children:[e.jsx(wn,{...k,arbeidsgiverOpplysningerPerId:l}),e.jsx(kn,{...k,rettigheter:d,oppdaterProsessStegOgFaktaPanelIUrl:s}),e.jsx(xn,{...k,arbeidsgiverOpplysningerPerId:l}),e.jsx(Gn,{...k}),e.jsx(Ln,{...k}),e.jsx(mn,{...k,arbeidsgiverOpplysningerPerId:l,personoversikt:u}),e.jsx(Pn,{...k,fagsak:t,menyData:v.allMenyData,arbeidsgiverOpplysningerPerId:l}),e.jsx(pn,{...k,fagsak:t,opneSokeside:g,toggleOppdatereFagsakContext:o})]}),[u,t,g,o,l,d,s]);return e.jsx(fn,{behandling:r,valgtProsessSteg:a,valgtFaktaSteg:i,oppdaterProsessStegOgFaktaPanelIUrl:s,hentFaktaPaneler:f,hentProsessPaneler:p})};Et.__docgenInfo={description:"",methods:[],displayName:"SvangerskapspengerPaneler",props:{alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"aktoer",value:{name:"string",required:!0}},{key:"dokumentLinks",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"historikkinnslagDeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  begrunnelsetekst?: string;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: string;
    verdi?: string;
  };
  opplysninger: HistorikkInnslagOpplysning[];
  soeknadsperiode?: {
    soeknadsperiodeType?: string;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: string;
  årsaktekst?: string;
  tema?: {
    endretFeltNavn: string;
    klNavn: string;
    navnVerdi: string;
  };
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: HistorikkInnslagAksjonspunkt[];
}`,signature:{properties:[{key:"begrunnelsetekst",value:{name:"string",required:!1}},{key:"begrunnelseFritekst",value:{name:"string",required:!1}},{key:"hendelse",value:{name:"signature",type:"object",raw:`{
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"opplysninger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opplysningType: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"opplysningType",value:{name:"string",required:!0}},{key:"tilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagOpplysning[]",required:!0}},{key:"soeknadsperiode",value:{name:"signature",type:"object",raw:`{
  soeknadsperiodeType?: string;
  navnVerdi?: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"soeknadsperiodeType",value:{name:"string",required:!1}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"tilVerdi",value:{name:"string",required:!1}}]},required:!1}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"årsaktekst",value:{name:"string",required:!1}},{key:"tema",value:{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  klNavn: string;
  navnVerdi: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"klNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!0}}]},required:!1}},{key:"gjeldendeFra",value:{name:"signature",type:"object",raw:`{
  fra?: string;
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"fra",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"resultat",value:{name:"string",required:!1}},{key:"endredeFelter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | number | boolean;
  tilVerdi?: string | number | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"klNavn",value:{name:"string",required:!1}},{key:"fraVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"tilVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"klFraVerdi",value:{name:"string",required:!1}},{key:"klTilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkinnslagEndretFelt[]",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  godkjent: boolean;
  aksjonspunktBegrunnelse?: string;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"aksjonspunktBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagAksjonspunkt[]",required:!1}}]}}],raw:"HistorikkinnslagDel[]",required:!0}}]}}],raw:`Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"historikkinnslagV2",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>`}],raw:"HistorikkinnslagV2[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}}]}},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(keepData?: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"keepData"}],return:{name:"void"}}},description:""}}};export{Et as default};
