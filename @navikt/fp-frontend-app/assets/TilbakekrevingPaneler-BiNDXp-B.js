import{j as z}from"./jsx-runtime-qGIIFXMu.js";import{R as Le,r as D}from"./index-CDs2tPxN.js";import{H as hd,m as en,S as Xn,h as Fn,x as Xe,I as Ve,E as yd,X as mt,Y as fd,b as bd}from"./index.es-zhgnUGpN.js";import{U as ft,M as x,y as F,c as bt,P as Na,d as Va,A as ct,X as ha,J as Ia,e as Tt,x as qr,f as ke,O as fn,z as cd,S as Td,F as jd}from"./index.es-xws-ibWa.js";import{F as _d,V as xd}from"./VergeFaktaInitPanel-DOh_CyrT.js";import{B as Pd}from"./BehandlingContainer-CKziLchr.js";import{t as Or,P as Br,e as er,H as dn,B as I,a as ve,b as me,V as Sd,s as de,c as Z,L as be,f as Ua,g as Ga,R as ye,h as Ae,G as yn,M as on,A as La,D as _e,C as Ya,E as Rd,i as qd,x as Ad}from"./index.es-RsTvM5t9.js";import{d as Bn,Y as En,M as un,a as re,Z as gn,F as nn,P as Ar,f as Fr,_ as Fd,g as Ka,h as Er,i as Dr,j as On,k as Dn,I as bn,l as Ca,b as Ha,m as $a,n as se,y as za,o as Wa,r as jt,B as Fe,q as _t,s as Za,K as Ja,c as wr,O as vt,t as Qa,u as rr,$ as wd,v as Xa,N as Od,E as _r,w as Bd,x as Ed,z as Dd,A as Md,C as Nd,D as Vd}from"./AppIndex.stories-DRBF86Gw.js";import{T as wn,S as es,a as ns,b as rs,c as ts}from"./Timeline-C3mEfMoK.js";import{S as as}from"./FigureCombination-Clpc4bdp.js";import{P as xt}from"./ProsessDefaultInitPanel-DZNhus89.js";import{W as Id}from"./index.es-B1-SLiMO.js";import{F as Ud}from"./FatterVedtakStatusModal-9G-YW05i.js";import"./bind-DK9GJUjU.js";import"./useRestApiRunner-CQE2m9r8.js";import"./BehandlingHenlagtPanel-CNZFhUqj.js";import"./index-DHUlIts1.js";import"./iframe-DDK0n-al.js";import"../sb-preview/runtime.js";import"./SettPaVentReadOnlyModal-Ctzw-sIi.js";import"./index-27BIJqHF.js";import"./nb_NO-B9XIc68F.js";const ot={INGEN_TILBAKEBETALING:"INGEN_TILBAKEBETALING",DELVIS_TILBAKEBETALING:"DELVIS_TILBAKEBETALING",FULL_TILBAKEBETALING:"FULL_TILBAKEBETALING"};var Mr=(a=>(a.VURDER_FORELDELSE="5003",a))(Mr||{}),ss={exports:{}},Cn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya;function Gd(){if(ya)return Cn;ya=1;var a=Le,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,f,j){var p,h={},c=null,y=null;j!==void 0&&(c=""+j),f.key!==void 0&&(c=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)i.call(f,p)&&!m.hasOwnProperty(p)&&(h[p]=f[p]);if(k&&k.defaultProps)for(p in f=k.defaultProps,f)h[p]===void 0&&(h[p]=f[p]);return{$$typeof:o,type:k,key:c,ref:y,props:h,_owner:g.current}}return Cn.Fragment=d,Cn.jsx=v,Cn.jsxs=v,Cn}ss.exports=Gd();var T=ss.exports;const Ld=Dn(3),Yd=bn(1500),Kd=a=>a!==en.UDEFINERT?a:void 0,Cd=a=>a.foreldet?a.foreldet:Kd(a.foreldelseVurderingType),Hd=a=>({...a,foreldet:Cd(a)}),$d=({skjulPeriode:a,readOnly:o,periode:d,oppdaterPeriode:i,kodeverkSamlingFpTilbake:g})=>{const m=ve(),v=Bn({defaultValues:Hd(d)}),k=v.watch("foreldet"),f=k&&k===en.FORELDET,j=k&&k===en.TILLEGGSFRIST,p=g[Xn.FORELDELSE_VURDERING].filter(h=>h.kode!==en.IKKE_VURDERT);return T.jsxs(En,{formMethods:v,onSubmit:h=>i(h),children:[T.jsx(F,{twentyPx:!0}),T.jsx(un,{name:"begrunnelse",label:m.formatMessage({id:"ForeldelsePeriodeForm.Vurdering"}),validate:[re,Ld,Yd,gn],maxLength:1500,readOnly:o}),T.jsx(F,{twentyPx:!0}),T.jsxs(me,{gap:"10",children:[T.jsx(nn,{name:"foreldet",label:T.jsx(x,{id:"ForeldelsePeriodeForm.RadioGroup.Foreldet"}),validate:[re],radios:p.map(h=>({label:h.navn,value:h.kode})),isReadOnly:o}),T.jsxs(Sd,{gap:"5",children:[(f||j)&&T.jsx(Ar,{name:"foreldelsesfrist",label:m.formatMessage({id:"ForeldelsePeriodeForm.Foreldelsesfrist"}),validate:[re,Fr],isReadOnly:o}),j&&T.jsx(Ar,{name:"oppdagelsesDato",label:m.formatMessage({id:"ForeldelsePeriodeForm.OppdagelsesDato"}),validate:[re,Fr,Fd],isReadOnly:o,fromDate:de("1970-01-01").toDate(),toDate:de().toDate()})]})]}),T.jsx(F,{twentyPx:!0}),T.jsxs(me,{gap:"4",children:[T.jsx(Z,{size:"small",variant:"primary",disabled:!v.formState.isDirty||v.formState.isSubmitting||o,loading:v.formState.isSubmitting,children:T.jsx(x,{id:"ForeldelsePeriodeForm.Oppdater"})}),T.jsx(Z,{size:"small",variant:"secondary",onClick:a,type:"button",children:T.jsx(x,{id:"ForeldelsePeriodeForm.Avbryt"})})]})]})},zd="_margin_1wl4t_1",xr={margin:zd},Wd=a=>{const o=a.isGodkjent?"success":"danger";return a.isAksjonspunktOpen?"warning":o},Zd=(a=[])=>a.map(o=>({id:o.id,fom:o.fom,tom:o.tom,status:Wd(o)})),Jd=a=>a===Fn.MOR||a===Fn.MEDMOR?T.jsx(Ca,{width:20,height:20,color:"var(--a-red-200)"}):a===Fn.FAR?T.jsx(rs,{width:20,height:20,color:"var(--a-blue-600)"}):T.jsx(as,{width:20,height:20}),Qd={danger:T.jsx(Ha,{}),success:T.jsx($a,{}),warning:T.jsx(ts,{})},Xd=({perioder:a,setPeriode:o,valgtPeriode:d,relasjonsRolleType:i,relasjonsRolleTypeKodeverk:g})=>{var m;const v=ve(),k=D.useMemo(()=>Zd(a),[a]),f=D.useCallback(E=>{const B=a.find(J=>J.id===E);B&&o(B)},[a,o]),j=de(k[0].fom),p=de(k[k.length-1].tom),[h,c]=D.useState(j),[y,M]=D.useState(p),R=D.useCallback(()=>{h.subtract(1,"month").isBefore(j)||(c(h.subtract(1,"month")),M(y.subtract(1,"month")))},[h,y,j]),_=D.useCallback(()=>{y.add(1,"month").isAfter(p)||(c(h.add(1,"month")),M(y.add(1,"month")))},[h,y,p]),Y=D.useCallback(()=>{h.add(3,"month").isAfter(y)||(c(h.add(1,"month")),M(y.subtract(1,"month")))},[h,y]),H=D.useCallback(()=>{y.add(1,"month").diff(h.subtract(1,"month"),"months")<36&&(c(h.subtract(1,"month")),M(y.add(1,"month")))},[h,y]);return T.jsxs(T.Fragment,{children:[T.jsx(F,{fourtyPx:!0}),T.jsx(wn,{startDate:h.toDate(),endDate:y.add(1,"days").toDate(),children:T.jsx(wn.Row,{label:((m=g.find(E=>E.kode===i))==null?void 0:m.navn)||"-",icon:Jd(i),children:k.map(E=>T.jsx(wn.Period,{start:de(E.fom).toDate(),end:de(E.tom).toDate(),status:E.status,onSelectPeriod:()=>f(E.id),isActive:(d==null?void 0:d.id)===E.id,icon:Qd[E.status],"aria-controls":"panel-tilbakekreving-foreldelse",id:E.id.toString()},E.id))})}),T.jsx(F,{twentyPx:!0}),T.jsxs(Va,{children:[T.jsx(Z,{className:xr.margin,size:"small",icon:T.jsx(Ka,{"aria-hidden":!0}),onClick:Y,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),T.jsx(Z,{className:xr.margin,size:"small",icon:T.jsx(es,{"aria-hidden":!0}),onClick:H,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),T.jsx(Z,{className:xr.margin,size:"small",icon:T.jsx(Er,{"aria-hidden":!0}),onClick:R,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),T.jsx(Z,{className:xr.margin,size:"small",icon:T.jsx(Dr,{"aria-hidden":!0}),onClick:_,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})},eu="_button_8q57x_1",nu="_cancelButton_8q57x_5",fa={button:eu,cancelButton:nu},ru=(a,o)=>d=>d&&(za(d)(se(a.tom.toString()).subtract(1,"day"))||Wa(d)(a.fom))?o.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,tu=(a,o)=>{const d=se(a.forstePeriodeTomDato).add(1,"days"),i={fom:o.fom,tom:a.forstePeriodeTomDato},g={fom:d.format(La),tom:o.tom};return{forstePeriode:i,andrePeriode:g}},au=({periodeData:a,showModal:o,cancelEvent:d,finnesBelopMed0Verdi:i,splitPeriod:g})=>{const m=ve(),v=Bn();return T.jsx(En,{formMethods:v,onSubmit:k=>g(tu(k,a)),children:T.jsxs(on,{width:"medium",open:o,"aria-label":m.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:d,children:[T.jsx(on.Header,{children:T.jsx(dn,{size:"small",children:T.jsx(x,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),T.jsxs(on.Body,{children:[T.jsx(be,{size:"small",children:T.jsx(x,{id:"DelOppPeriodeModalImpl.Periode"})}),T.jsx(I,{size:"small",children:`${se(a.fom.toString()).format(ye)} - ${se(a.tom.toString()).format(ye)}`}),T.jsx(F,{sixteenPx:!0}),T.jsx(Ar,{name:"forstePeriodeTomDato",label:T.jsx(x,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[re,Fr,ru(a,m)],fromDate:se(a.fom).toDate(),toDate:se(a.tom).toDate()}),i&&T.jsx(ct,{variant:"error",children:T.jsx(x,{id:"DelOppPeriodeModalImpl.BelopEr0"})}),T.jsx(F,{sixteenPx:!0})]}),T.jsxs(on.Footer,{children:[T.jsx(Z,{size:"small",variant:"primary",className:fa.button,disabled:!v.formState.isDirty,children:T.jsx(x,{id:"DelOppPeriodeModalImpl.Ok"})}),T.jsx(Z,{size:"small",variant:"secondary",onClick:d,className:fa.cancelButton,type:"button",children:T.jsx(x,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})},su="_timeLineButton_wnej3_1",iu="_splitPeriodImage_wnej3_24",lu="_splitPeriodPosition_wnej3_30",ou="_leftMargin_wnej3_33",du="_margin_wnej3_37",uu="_fix_wnej3_41",dt={timeLineButton:su,splitPeriodImage:iu,splitPeriodPosition:lu,leftMargin:ou,margin:du,fix:uu},gu=!1,ku=({valgtPeriode:a,beregnBelop:o,behandlingUuid:d,oppdaterSplittedePerioder:i,setNestePeriode:g,setForrigePeriode:m,readOnly:v,lukkPeriode:k})=>{const f=ve(),[j,p]=D.useState(!1),[h,c]=D.useState(!1),y=_=>{p(!0),_.preventDefault()},M=()=>{p(!1)},R=_=>{c(!1);const Y={belop:a.feilutbetaling,fom:_.forstePeriode.fom,tom:_.forstePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "},H={belop:a.feilutbetaling,fom:_.andrePeriode.fom,tom:_.andrePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "};o({behandlingUuid:d,perioder:[Y,H]}).then(E=>{const{perioder:B}=E;if(B.some(J=>J.belop===0))c(!0);else{const J={fom:Y.fom,tom:Y.tom,feilutbetaling:B[0].belop},Pe={fom:H.fom,tom:H.tom,feilutbetaling:B[1].belop};M(),i([J,Pe])}})};return T.jsxs(me,{children:[T.jsxs(be,{size:"small",children:[T.jsx(x,{id:"PeriodeController.Detaljer"}),gu]}),!v&&T.jsxs(T.Fragment,{children:[T.jsx(On,{}),T.jsx(Z,{className:dt.margin,size:"xsmall",icon:T.jsx(ns,{"aria-hidden":!0}),onClick:y,variant:"tertiary-neutral",type:"button",title:f.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:T.jsx(x,{id:"PeriodeController.DelOppPerioden"})})]}),j&&T.jsx(au,{cancelEvent:M,showModal:j,periodeData:a,splitPeriod:R,finnesBelopMed0Verdi:h}),T.jsx(On,{}),T.jsx(Z,{className:dt.margin,size:"xsmall",icon:T.jsx(Er,{"aria-hidden":!0}),onClick:m,variant:"secondary-neutral",type:"button",title:f.formatMessage({id:"PeriodeController.prevPeriod"}),children:T.jsx(x,{id:"PeriodeController.prevPeriodShort"})}),T.jsx(Z,{className:dt.margin,size:"xsmall",icon:T.jsx(Dr,{"aria-hidden":!0}),onClick:g,variant:"secondary-neutral",type:"button",title:f.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:T.jsx(x,{id:"PeriodeController.nextPeriodShort"})}),T.jsx(Z,{size:"xsmall",icon:T.jsx(Ua,{"aria-hidden":!0}),onClick:k,variant:"tertiary-neutral",type:"button",title:f.formatMessage({id:"PeriodeController.LukkPeriode"})})]})},mu="_container_wdk2x_1",vu="_fadein_wdk2x_1",pu="_space_wdk2x_11",hu={container:mu,fadein:vu,space:pu},yu="_infoSummary_99bx4_1",fu="_positivNumber_99bx4_8",bu="_redNumber_99bx4_12",cu="_resultName_99bx4_17",Pr={infoSummary:yu,positivNumber:fu,redNumber:bu,resultName:cu},Tu=({fom:a,tom:o,feilutbetaling:d})=>{const i=Ga(a,o);return T.jsxs("div",{className:Pr.infoSummary,children:[T.jsxs(me,{children:[T.jsx(be,{size:"small",children:`${de(a).format(ye)} - ${de(o).format(ye)}`}),T.jsx(On,{}),T.jsx(I,{size:"small",children:i.formattedString})]}),T.jsx(F,{sixteenPx:!0}),T.jsx(me,{gap:"4",children:T.jsxs(I,{size:"small",className:Pr.resultName,children:[T.jsx(x,{id:"PeriodeInformasjon.Feilutbetaling"}),":",T.jsx("span",{className:d?Pr.redNumber:Pr.positivNumber,children:Ae(d)})]})})]})};var is={exports:{}},Hn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba;function ju(){if(ba)return Hn;ba=1;var a=Le,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,f,j){var p,h={},c=null,y=null;j!==void 0&&(c=""+j),f.key!==void 0&&(c=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)i.call(f,p)&&!m.hasOwnProperty(p)&&(h[p]=f[p]);if(k&&k.defaultProps)for(p in f=k.defaultProps,f)h[p]===void 0&&(h[p]=f[p]);return{$$typeof:o,type:k,key:c,ref:y,props:h,_owner:g.current}}return Hn.Fragment=d,Hn.jsx=v,Hn.jsxs=v,Hn}is.exports=ju();var _u=is.exports;const xu=(a,o,d,i)=>!d||o||!a?!0:!!i,Pu=({isReadOnly:a,isSubmittable:o,isSubmitting:d,isDirty:i,text:g,onClick:m,hasErrors:v})=>a?null:_u.jsx(Z,{variant:"primary",size:"small",loading:d,disabled:xu(i,d,o,v),onClick:m,type:m?"button":"submit",children:g||"Bekreft og fortsett"}),ca=(a,o)=>de(a.fom).diff(de(o.fom)),Su=()=>de().subtract(30,"months").format(ye),Ru=a=>a?[T.jsx(x,{id:`ForeldelseForm.AksjonspunktHelpText.${a.definisjon}`,values:{dato:Su()}},"vurderForeldelse")]:[],Qn=a=>(!a.foreldelseVurderingType||a.foreldelseVurderingType===en.UDEFINERT)&&(!a.begrunnelse||!!a.erSplittet),qu=(a=[])=>a.map((o,d)=>({fom:o.fom,tom:o.tom,isAksjonspunktOpen:Qn(o),isGodkjent:en.FORELDET!==o.foreldet&&en.UDEFINERT!==o.foreldet,id:d})),Au=a=>({foreldelsePerioder:a.map(o=>({fraDato:o.fom,tilDato:o.tom,begrunnelse:o.begrunnelse,foreldelseVurderingType:o.foreldet,foreldelsesfrist:o.foreldelsesfrist,oppdagelsesDato:o.oppdagelsesDato})),kode:Mr.VURDER_FORELDELSE}),Fu=(a,o)=>a.fom<o.fom?-1:a.fom>o.fom?1:0,wu=a=>[...a].sort(Fu).map(o=>({...o,feilutbetaling:o.belop,foreldet:o.foreldelseVurderingType===en.UDEFINERT?void 0:o.foreldelseVurderingType,begrunnelse:yn(o.begrunnelse)})),Ou=({submitCallback:a,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:d,aksjonspunkt:i,alleMerknaderFraBeslutter:g,perioderForeldelse:m,readOnly:v,kodeverkSamlingFpTilbake:k,beregnBelop:f,behandlingUuid:j,formData:p,setFormData:h})=>{const c=D.useMemo(()=>wu(m.perioder),[m.perioder]),[y,M]=D.useState(p||c),[R,_]=D.useState(y==null?void 0:y.find(Qn)),[Y,H]=D.useState(!1),[E,B]=D.useState(!!p),J=V=>{const Q=V?y.find($=>$.fom===V.fom&&$.tom===V.tom):void 0;_(Q)},Pe=D.useCallback(()=>{const V=y.findIndex($=>$.fom===(R==null?void 0:R.fom)&&$.tom===(R==null?void 0:R.tom)),Q=V===y.length-1?V:V+1;J(y[Q])},[y,R]),Ee=D.useCallback(()=>{const V=y.findIndex($=>$.fom===(R==null?void 0:R.fom)&&$.tom===(R==null?void 0:R.tom)),Q=V===0?V:V-1;J(y[Q])},[y,R]),te=D.useCallback(()=>{J(void 0)},[R,y]),rn=D.useCallback(V=>{const Q=er(V,"erSplittet"),$=y.filter(ie=>ie.fom!==Q.fom&&ie.tom!==Q.tom).concat(Q).sort(ca);M($),h($),B(!0),te();const X=$.find(Qn);X&&J(X)},[y,te,Qn]),ue=D.useCallback(V=>{const Q=y.find(ie=>ie.fom===(R==null?void 0:R.fom)&&ie.tom===(R==null?void 0:R.tom));if(Q===void 0)throw new TypeError(`Periode skal alltid finnes. Fom: ${R==null?void 0:R.fom} Tom: ${R==null?void 0:R.tom}`);const $=V.map(ie=>({...Q,...ie,erSplittet:!0})),X=y.filter(ie=>ie.fom!==(R==null?void 0:R.fom)&&ie.tom!==(R==null?void 0:R.tom)).concat($).sort(ca);M(X),h(X),B(!0),te(),J($[0])},[y,R,te,Qn]),Ye=D.useCallback(()=>{H(!0),a(Au(y))},[y]),tn=g[Mr.VURDER_FORELDELSE],pe=qu(y),kn=i&&i.status===hd.OPPRETTET,Se=pe.every(V=>!V.isAksjonspunktOpen),U=R?pe.find(V=>V.fom===R.fom&&V.tom===R.tom):void 0;return T.jsxs(ft,{merknaderFraBeslutter:tn,withoutBorder:!0,children:[T.jsx(dn,{size:"small",children:T.jsx(x,{id:"ForeldelseForm.Foreldelse"})}),T.jsx(F,{twentyPx:!0}),!i&&T.jsxs(T.Fragment,{children:[T.jsx(I,{children:T.jsx(x,{id:"ForeldelseForm.Foreldelsesloven"})}),T.jsx(F,{eightPx:!0}),T.jsx(I,{children:T.jsx(x,{id:"ForeldelseForm.AutomatiskVurdert"})}),T.jsx(F,{sixteenPx:!0})]}),y&&i&&T.jsxs(T.Fragment,{children:[T.jsx(bt,{isAksjonspunktOpen:kn,children:Ru(i)}),T.jsx(F,{twentyPx:!0}),T.jsx(Xd,{perioder:pe,valgtPeriode:U,setPeriode:J,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:d}),R&&T.jsxs("div",{id:"panel-tilbakekreving-foreldelse","aria-controls":U==null?void 0:U.id.toString(),children:[T.jsx("div",{className:hu.space}),T.jsxs(Na,{border:!0,children:[T.jsx(ku,{setNestePeriode:Pe,setForrigePeriode:Ee,valgtPeriode:R,readOnly:v,oppdaterSplittedePerioder:ue,behandlingUuid:j,beregnBelop:f,lukkPeriode:te}),T.jsx(F,{sixteenPx:!0}),T.jsx(Tu,{feilutbetaling:R.feilutbetaling,fom:R.fom,tom:R.tom}),T.jsx($d,{periode:R,oppdaterPeriode:rn,skjulPeriode:te,readOnly:v,kodeverkSamlingFpTilbake:k},R.fom)]})]}),T.jsx(F,{twentyPx:!0}),T.jsx(Pu,{isReadOnly:v,isDirty:E,isSubmittable:!R&&Se,onClick:Ye,isSubmitting:Y})]})]})},Bu={"ForeldelsePeriodeForm.Vurdering":"Vurdering","ForeldelsePeriodeForm.RadioGroup.Foreldet":"Vurder om perioden er foreldet","ForeldelsePeriodeForm.Oppdater":"Oppdater","ForeldelsePeriodeForm.Avbryt":"Avbryt","ForeldelsePeriodeForm.Foreldelsesfrist":"Foreldelsesfrist","ForeldelsePeriodeForm.OppdagelsesDato":"Dato for når feilutbetaling ble oppdaget","ForeldelseForm.Foreldelsesloven":"Foreldelsesloven §§ 2 og 3","ForeldelseForm.AutomatiskVurdert":"Automatisk vurdert","ForeldelseForm.AksjonspunktHelpText.5003":"Perioden før {dato} kan være foreldet. Del opp perioden ved behov og fastsett foreldelse","ForeldelseForm.Foreldelse":"Foreldelse","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","SubmitButton.ConfirmInformation":"Bekreft og fortsett","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},Eu=Or(Bu),Du=({perioderForeldelse:a,relasjonsRolleType:o,beregnBelop:d,behandling:i,aksjonspunkter:g,isReadOnly:m,kodeverkSamlingFpTilbake:v,submitCallback:k,alleMerknaderFraBeslutter:f,formData:j,setFormData:p,relasjonsRolleTypeKodeverk:h})=>T.jsx(Br,{value:Eu,children:T.jsx(Ou,{behandlingUuid:i.uuid,perioderForeldelse:a,submitCallback:k,readOnly:m,aksjonspunkt:g[0],relasjonsRolleType:o,relasjonsRolleTypeKodeverk:h,alleMerknaderFraBeslutter:f,kodeverkSamlingFpTilbake:v,beregnBelop:d,formData:j,setFormData:p})}),Mu=[Mr.VURDER_FORELDELSE],Nu=[Fe.PERIODER_FORELDELSE],ls=({...a})=>{const o=ve(),{startRequest:d}=jt.useRestApiRunner(Fe.BEREGNE_BELØP);return z.jsx(xt,{...a,panelEndepunkter:Nu,aksjonspunktKoder:Mu,prosessPanelKode:_t.FORELDELSE,prosessPanelMenyTekst:o.formatMessage({id:"Behandlingspunkt.Foreldelse"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:()=>Za.hasPath(Fe.PERIODER_FORELDELSE.name)?Xe.OPPFYLT:Xe.IKKE_VURDERT,renderPanel:i=>z.jsx(Du,{kodeverkSamlingFpTilbake:a.tilbakekrevingKodeverk,beregnBelop:d,relasjonsRolleType:a.relasjonsRolleType,relasjonsRolleTypeKodeverk:i.alleKodeverk[Ja.RELASJONSROLLE_TYPE],...i})})};ls.__docgenInfo={description:"",methods:[],displayName:"ForeldelseProsessInitPanel",props:{relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"tilbakekrevingKodeverkTyper"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<tilbakekrevingKodeverkTyper, KodeverkMedNavn[]>"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Nr=(a=>(a.VURDER_TILBAKEKREVING="5002",a))(Nr||{}),Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Iu(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var os={exports:{}},$n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta;function Uu(){if(Ta)return $n;Ta=1;var a=Le,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,f,j){var p,h={},c=null,y=null;j!==void 0&&(c=""+j),f.key!==void 0&&(c=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)i.call(f,p)&&!m.hasOwnProperty(p)&&(h[p]=f[p]);if(k&&k.defaultProps)for(p in f=k.defaultProps,f)h[p]===void 0&&(h[p]=f[p]);return{$$typeof:o,type:k,key:c,ref:y,props:h,_owner:g.current}}return $n.Fragment=d,$n.jsx=v,$n.jsxs=v,$n}os.exports=Uu();var l=os.exports,ds=(a=>(a.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",a.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",a.STOERRELSE_BELOEP="STOERRELSE_BELOEP",a.TID_FRA_UTBETALING="TID_FRA_UTBETALING",a.ANNET="ANNET",a))(ds||{}),fe=(a=>(a.FORSETT="FORSETT",a.GROVT_UAKTSOM="GROVT_UAKTSOM",a.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",a))(fe||{});const Gu=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var Ne=(a=>(a.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",a.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",a.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",a.GOD_TRO="GOD_TRO",a))(Ne||{});const Lu="_feilutbetalingTable_e3ydt_1",Yu={feilutbetalingTable:Lu},Ku=["TilbakekrevingAktivitetTabell.Aktivitet","TilbakekrevingAktivitetTabell.FeilutbetaltBelop"],Cu=({ytelser:a})=>{if(a.length===0)return null;let o=0;return l.jsx(Tt,{headerTextCodes:Ku,noHover:!0,classNameTable:Yu.feilutbetalingTable,children:a.map(d=>(o+=1,l.jsxs(qr,{children:[l.jsx(ke,{children:l.jsx(I,{size:"small",children:d.aktivitet})}),l.jsx(ke,{children:l.jsx(I,{size:"small",children:Ae(d.belop)})})]},d.aktivitet+d.belop+o)))})},Hu=()=>l.jsxs(me,{gap:"4",children:[l.jsx(un,{name:"foreldetBegrunnelse",label:l.jsx(x,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),l.jsx(nn,{name:"periodenErForeldet",label:l.jsx(_e,{children:l.jsx(x,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:l.jsx(x,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]}),$u="_arrowbox_ych2z_1",zu="_tilbakekrevdBelopInput_ych2z_4",ja={arrowbox:$u,tilbakekrevdBelopInput:zu},Wu=Qa(1),Zu=a=>{const o=a.toString().replace(/\s/g,""),d=parseInt(o,10);return Number.isNaN(d)?"":d},Ju=(a,o)=>d=>{if(d>o)return a.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},tr=({name:a,readOnly:o,erBelopetIBehold:d,feilutbetalingBelop:i})=>{const g=ve();return l.jsxs(l.Fragment,{children:[l.jsx(nn,{name:`${a}.erBelopetIBehold`,label:l.jsx(x,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[re],radios:[{label:l.jsx(x,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:l.jsx(x,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:o,isTrueOrFalseSelection:!0,isHorizontal:!0}),l.jsx(F,{eightPx:!0}),l.jsxs("div",{className:ja.arrowbox,children:[d===!0&&l.jsx(fn,{alignOffset:25,children:l.jsx(vt,{name:`${a}.tilbakekrevdBelop`,label:l.jsx(x,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[re,Wu,Ju(g,i)],readOnly:o,className:ja.tilbakekrevdBelopInput,format:Ae,parse:Zu})}),d===!1&&l.jsx(fn,{alignOffset:90,children:l.jsx(I,{size:"small",children:l.jsx(x,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};tr.transformValues=(a,o)=>({"@type":"godTro",begrunnelse:o,erBelopetIBehold:a.erBelopetIBehold,tilbakekrevesBelop:a.erBelopetIBehold?Ya(a.tilbakekrevdBelop):void 0});tr.buildIntialValues=a=>({erBelopetIBehold:a.erBelopetIBehold,tilbakekrevdBelop:a.tilbakekrevesBelop});const Qu=({name:a,readOnly:o,erValgtResultatTypeForstoBurdeForstaatt:d})=>{const i=rr(),g=`${a}.skalDetTilleggesRenter`;return D.useEffect(()=>{i.getValues(g)===void 0&&i.setValue(g,!1)},[]),l.jsx("div",{children:l.jsxs(fn,{alignOffset:d?320:360,children:[d&&l.jsxs(l.Fragment,{children:[l.jsx(be,{size:"small",children:l.jsx(x,{id:"AktsomhetGradForsettFormPanel.Andel"})}),l.jsx(I,{size:"small",children:"100 %"}),l.jsx(F,{sixteenPx:!0}),l.jsx(nn,{name:`${a}.skalDetTilleggesRenter`,label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[re],radios:[{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:o,parse:m=>m==="true",isHorizontal:!0})]}),!d&&l.jsxs(l.Fragment,{children:[l.jsx(_e,{children:l.jsx(x,{id:"AktsomhetGradForsettFormPanel.Andel"})}),l.jsx(I,{size:"small",children:"100 %"}),l.jsx(F,{eightPx:!0}),l.jsx(I,{size:"small",children:l.jsx(x,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})},Xu="_suffix_cawxu_1",eg="_suffixGrovText_cawxu_4",ng="_labelPadding_cawxu_8",rg="_inputFelt_cawxu_12",qn={suffix:Xu,suffixGrovText:eg,labelPadding:ng,inputFelt:rg},_a=Qa(0),tg=Od(99.99),ag=a=>{const o=a.toString().replace(/\s/g,""),d=parseInt(o,10);return Number.isNaN(d)?"":d},sg=(a,o)=>d=>{if(d>=o)return a.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},nr="Egendefinert",pt=["30","50","70",nr],ig=({name:a,harGrunnerTilReduksjon:o,readOnly:d,handletUaktsomhetGrad:i,harMerEnnEnYtelse:g,feilutbetalingBelop:m,andelSomTilbakekreves:v})=>{const k=ve(),f=rr(),j=`${a}.skalDetTilleggesRenter`;return D.useEffect(()=>{f.getValues(j)===void 0&&f.setValue(j,!1)},[]),l.jsxs(l.Fragment,{children:[l.jsx(F,{sixteenPx:!0}),l.jsx(nn,{name:`${a}.harGrunnerTilReduksjon`,label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[re],radios:[{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:d,isTrueOrFalseSelection:!0,isHorizontal:!0}),l.jsx(F,{sixteenPx:!0}),o&&l.jsx(fn,{alignOffset:24,children:l.jsxs(me,{gap:"4",children:[!g&&v!==nr&&l.jsxs(l.Fragment,{children:[l.jsx(be,{size:"small",children:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),l.jsxs(me,{gap:"2",children:[l.jsx(wr,{name:`${a}.andelSomTilbakekreves`,label:"",validate:[re],selectValues:pt.map(p=>l.jsx("option",{value:p,children:p},p))}),l.jsx("div",{className:qn.suffix,children:"%"})]})]}),!g&&v===nr&&l.jsxs(l.Fragment,{children:[l.jsx(be,{size:"small",children:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),l.jsxs(me,{gap:"4",children:[l.jsx(vt,{className:qn.inputFelt,name:`${a}.andelSomTilbakekrevesManuell`,readOnly:d,validate:[re,_a,tg],normalizeOnBlur:p=>Number.isNaN(p)?p:parseFloat(p.toString()).toFixed(2),format:p=>p.toString().replace(".",","),parse:p=>p.toString().replace(",",".")}),l.jsx("div",{className:i===fe.GROVT_UAKTSOM?qn.suffixGrovText:qn.suffix,children:"%"})]})]}),g&&l.jsx(vt,{name:`${a}.belopSomSkalTilbakekreves`,label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[re,_a,sg(k,m)],readOnly:d,format:Ae,parse:ag}),i===fe.GROVT_UAKTSOM&&l.jsxs("div",{children:[l.jsx(_e,{children:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),l.jsx(I,{size:"small",className:qn.labelPadding,children:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),o===!1&&l.jsxs(fn,{alignOffset:90,children:[l.jsx(_e,{children:l.jsx(x,{id:g?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),l.jsx(I,{size:"small",className:qn.labelPadding,children:g?Ae(m):"100%"}),l.jsx(F,{sixteenPx:!0}),i===fe.GROVT_UAKTSOM&&l.jsx(nn,{name:j,label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[re],radios:[{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:d,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})},lg=Dn(3),og=bn(1500),xa=({name:a,harGrunnerTilReduksjon:o,readOnly:d,handletUaktsomhetGrad:i,erSerligGrunnAnnetValgt:g,sarligGrunnTyper:m,harMerEnnEnYtelse:v,feilutbetalingBelop:k,andelSomTilbakekreves:f})=>{const j=ve(),{watch:p}=rr(),h=!m.some(y=>!!p(`${a}.${y.kode}`)),c=wd(a,h?j.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return l.jsxs("div",{children:[l.jsx(be,{size:"small",children:l.jsx(x,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),l.jsx(F,{eightPx:!0}),m.map(y=>l.jsxs(Le.Fragment,{children:[l.jsx(Xa,{name:`${a}.${y.kode}`,label:y.navn,readOnly:d},y.kode),l.jsx(F,{eightPx:!0})]},y.kode)),g&&l.jsx(un,{name:`${a}.annetBegrunnelse`,label:"",validate:[re,lg,og,gn],maxLength:1500,readOnly:d}),c&&l.jsx(Rd,{children:c}),l.jsx(ig,{name:a,harGrunnerTilReduksjon:o,readOnly:d,handletUaktsomhetGrad:i,harMerEnnEnYtelse:v,feilutbetalingBelop:k,andelSomTilbakekreves:f})]})},dg="_explanationTextarea_1kabz_1",ug="_panelWidth_1kabz_5",us={explanationTextarea:dg,panelWidth:ug},gg=Dn(3),kg=bn(1500),Pa=(a,o,d)=>l.jsxs("div",{children:[l.jsx(be,{size:"small",children:l.jsx(x,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),l.jsx(F,{eightPx:!0}),l.jsx(un,{name:`${a}.sarligGrunnerBegrunnelse`,label:d.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[re,gg,kg,gn],maxLength:1500,readOnly:o,className:us.explanationTextarea,description:d.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})}),l.jsx(F,{twentyPx:!0})]}),mg=({harGrunnerTilReduksjon:a,readOnly:o,handletUaktsomhetGrad:d,erSerligGrunnAnnetValgt:i,sarligGrunnTyper:g,harMerEnnEnYtelse:m,feilutbetalingBelop:v,erTotalBelopUnder4Rettsgebyr:k,andelSomTilbakekreves:f,erValgtResultatTypeForstoBurdeForstaatt:j,name:p})=>{const h=ve(),c=j?180:200;return l.jsx(fn,{alignOffset:d===fe.GROVT_UAKTSOM?c:20,children:l.jsxs("div",{className:us.panelWidth,children:[d===fe.SIMPEL_UAKTSOM&&k&&l.jsxs(l.Fragment,{children:[l.jsx(nn,{name:`${p}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,label:l.jsx(x,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[re],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:o,radios:[{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:l.jsxs(l.Fragment,{children:[l.jsx(F,{eightPx:!0}),Pa(p,o,h),l.jsx(xa,{name:p,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:i,sarligGrunnTyper:g,harMerEnnEnYtelse:m,feilutbetalingBelop:v,readOnly:o,handletUaktsomhetGrad:d,andelSomTilbakekreves:f})]})},{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:l.jsxs(l.Fragment,{children:[l.jsx(F,{eightPx:!0}),l.jsx(fn,{alignOffset:20,children:l.jsx(x,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})]})}]}),l.jsx(F,{eightPx:!0})]}),(d!==fe.SIMPEL_UAKTSOM||!k)&&l.jsxs(l.Fragment,{children:[Pa(p,o,h),l.jsx(xa,{name:p,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:i,sarligGrunnTyper:g,harMerEnnEnYtelse:m,feilutbetalingBelop:v,readOnly:o,handletUaktsomhetGrad:d,andelSomTilbakekreves:f})]})]})})},vg=({harGrunnerTilReduksjon:a,readOnly:o,handletUaktsomhetGrad:d,erSerligGrunnAnnetValgt:i,erValgtResultatTypeForstoBurdeForstaatt:g,sarligGrunnTyper:m,harMerEnnEnYtelse:v,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:f,andelSomTilbakekreves:j,name:p})=>l.jsxs(l.Fragment,{children:[l.jsx(F,{eightPx:!0}),d===fe.FORSETT&&l.jsx(Qu,{name:p,readOnly:o,erValgtResultatTypeForstoBurdeForstaatt:g}),d!==fe.FORSETT&&l.jsx(mg,{name:p,harGrunnerTilReduksjon:a,readOnly:o,handletUaktsomhetGrad:d,erSerligGrunnAnnetValgt:i,sarligGrunnTyper:m,harMerEnnEnYtelse:v,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:f,andelSomTilbakekreves:j,erValgtResultatTypeForstoBurdeForstaatt:g})]}),pg=[fe.GROVT_UAKTSOM,fe.SIMPEL_UAKTSOM,fe.FORSETT],hg={[fe.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[fe.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[fe.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},ar=({readOnly:a,resetFields:o,handletUaktsomhetGrad:d,harGrunnerTilReduksjon:i,erSerligGrunnAnnetValgt:g=!1,erValgtResultatTypeForstoBurdeForstaatt:m=!1,aktsomhetTyper:v,sarligGrunnTyper:k,antallYtelser:f,feilutbetalingBelop:j,erTotalBelopUnder4Rettsgebyr:p,andelSomTilbakekreves:h,name:c})=>l.jsxs(l.Fragment,{children:[l.jsx(F,{sixteenPx:!0}),l.jsx(nn,{name:`${c}.handletUaktsomhetGrad`,label:l.jsx(x,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[re],radios:v.map(y=>({label:m?l.jsx(x,{id:hg[y.kode]}):y.navn,value:y.kode})),isReadOnly:a,onChange:o,isHorizontal:!0}),pg.some(y=>y===d)&&l.jsx(vg,{name:`${c}.${d}`,harGrunnerTilReduksjon:i,readOnly:a,handletUaktsomhetGrad:d,erSerligGrunnAnnetValgt:g,erValgtResultatTypeForstoBurdeForstaatt:m,sarligGrunnTyper:k,harMerEnnEnYtelse:f>1,feilutbetalingBelop:j,erTotalBelopUnder4Rettsgebyr:p,andelSomTilbakekreves:h})]}),yg=(a,o)=>{const d=parseInt(a,10);return!o||Number.isNaN(d)?{}:{andelTilbakekreves:d}},fg=(a,o)=>{const d=parseFloat(a);return!o||Number.isNaN(d)?{}:{andelTilbakekreves:d}},bg=(a,o)=>{if(a.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:a.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const d=o.reduce((m,v)=>a[v.kode]?m.concat(v.kode):m,[]),{harGrunnerTilReduksjon:i}=a,g=a.andelSomTilbakekreves===nr?fg(a.andelSomTilbakekrevesManuell,i):yg(a.andelSomTilbakekreves,i);return{harGrunnerTilReduksjon:i,ileggRenter:i?void 0:a.skalDetTilleggesRenter,sarligGrunner:d.length>0?d:void 0,tilbakekrevesBelop:a.harGrunnerTilReduksjon?Ya(a.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:a.annetBegrunnelse,sarligGrunnerBegrunnelse:a.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:a.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...g}};ar.transformValues=(a,o,d)=>{const i=a[a.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:a.handletUaktsomhetGrad,begrunnelse:d,aktsomhetInfo:i?bg(i,o):null}};const cg=(a,o)=>({andelSomTilbakekreves:o===void 0||pt.includes(o)?o:nr,andelSomTilbakekrevesManuell:o&&pt.includes(o)?void 0:a.andelTilbakekreves,harGrunnerTilReduksjon:a.harGrunnerTilReduksjon,skalDetTilleggesRenter:a.ileggRenter,belopSomSkalTilbakekreves:a.tilbakekrevesBelop,annetBegrunnelse:a.annetBegrunnelse,sarligGrunnerBegrunnelse:yn(a.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:a.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...a.sarligGrunner?a.sarligGrunner.reduce((d,i)=>({...d,[i.kode?i.kode:i]:!0}),{}):{}});ar.buildInitalValues=a=>{const{aktsomhet:o,aktsomhetInfo:d}=a,i=d&&d.andelTilbakekreves!==void 0?`${d.andelTilbakekreves}`:void 0,g=d?{[o.kode&&"kode"in o?o.kode:o]:cg(d,i)}:{};return{handletUaktsomhetGrad:o&&o.kode&&"kode"in o?o.kode:o,...g}};const Tg="_explanationTextarea_1udkt_1",jg="_leftColumn_1udkt_5",_g="_rightColumn_1udkt_9",xg="_selectWidth_1udkt_12",Sr={explanationTextarea:Tg,leftColumn:jg,rightColumn:_g,selectWidth:xg},Sa=Dn(3),Ra=bn(1500),Pg=({data:a,periode:o,skjulPeriode:d,readOnly:i,oppdaterPeriode:g,vilkarsVurdertePerioder:m,kodeverkSamlingFpTilbake:v,antallPerioderMedAksjonspunkt:k})=>{const f=ve(),[j,p]=D.useState(!1),h=Bn({defaultValues:o}),c=h.watch("valgtVilkarResultatType"),y=h.watch(`${c}.handletUaktsomhetGrad`),M=h.watch(`${c}.${y}.harGrunnerTilReduksjon`),R=h.watch(`${c}.${y}.andelSomTilbakekreves`),_=h.watch(`${c}.${y}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),Y=h.watch(`${c}.${y}.${ds.ANNET}`),H=h.watch(`${c}.erBelopetIBehold`),E=ha(c),B=ha(y),J=a.redusertBeloper,Pe=v[Xn.SARLIG_GRUNN],Ee=v[Xn.VILKAR_RESULTAT],te=Gu.map(U=>v[Xn.AKTSOMHET].find(V=>V.kode===U)),rn=(U,V)=>{const Q=U.target.value.split("_"),$=V.find(Re=>Re.fom===Q[0]&&Re.tom===Q[1]),X=$==null?void 0:$.valgtVilkarResultatType,ie=$&&X?$[X]:void 0,we=JSON.parse(JSON.stringify(ie));if(X!==Ne.GOD_TRO){const{handletUaktsomhetGrad:Re}=we;Re!==fe.FORSETT&&(o==null?void 0:o.harMerEnnEnYtelse)!==($==null?void 0:$.harMerEnnEnYtelse)&&(we[Re].andelSomTilbakekreves=null,we[Re].andelSomTilbakekrevesManuell=null,we[Re].belopSomSkalTilbakekreves=null)}h.setValue("valgtVilkarResultatType",X,{shouldDirty:!0}),h.setValue("begrunnelse",$==null?void 0:$.begrunnelse,{shouldDirty:!0}),h.setValue("vurderingBegrunnelse",$==null?void 0:$.vurderingBegrunnelse,{shouldDirty:!0}),X&&h.setValue(X,we,{shouldDirty:!0}),U.preventDefault()},ue=()=>{p(!j),g(h.getValues())},Ye=U=>{k>1&&a.erTotalBelopUnder4Rettsgebyr&&_===!1?p(!j):g(U)},tn=()=>{E&&h.resetField(E)},pe=()=>{B&&h.resetField(`${c}.${B}`)},kn=D.useCallback(U=>l.jsx("b",{children:U}),[]),Se=m.filter(U=>!U.erForeldet&&U.valgtVilkarResultatType!=null);return l.jsxs(En,{formMethods:h,onSubmit:Ye,children:[J&&J.map(U=>l.jsxs(Le.Fragment,{children:[l.jsx(I,{size:"small",children:l.jsx(x,{id:U.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:Ae(U.belop),b:kn}})}),l.jsx(F,{eightPx:!0})]},U.belop)),l.jsx(Cu,{ytelser:a.ytelser}),l.jsx(F,{twentyPx:!0}),!i&&!a.erForeldet&&Se.length>0&&l.jsxs(l.Fragment,{children:[l.jsx(wr,{name:"perioderForKopi",selectValues:Se.map(U=>{const V=`${U.fom}_${U.tom}`,Q=`${de(U.fom).format(ye)} - ${de(U.tom).format(ye)}`;return l.jsx("option",{value:V,children:Q},V)}),onChange:U=>rn(U,Se),className:Sr.selectWidth,label:l.jsx(x,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),l.jsx(F,{twentyPx:!0})]}),l.jsxs(me,{gap:"4",wrap:!0,children:[l.jsxs("div",{className:Sr.leftColumn,children:[a.erForeldet&&l.jsx(Hu,{}),!a.erForeldet&&l.jsxs(l.Fragment,{children:[l.jsx(dn,{size:"small",children:l.jsx(x,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),l.jsx(F,{sixteenPx:!0}),l.jsx(un,{name:"begrunnelse",label:f.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[re,Sa,Ra,gn],maxLength:1500,readOnly:i,className:Sr.explanationTextarea,description:f.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),l.jsx(F,{sixteenPx:!0}),l.jsx(nn,{name:"valgtVilkarResultatType",label:l.jsx(x,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[re],radios:Ee.map(U=>({label:U.navn,value:U.kode})),isReadOnly:i,onChange:tn})]})]}),l.jsx("div",{className:Sr.rightColumn,children:c&&l.jsxs(l.Fragment,{children:[l.jsx(dn,{size:"small",children:l.jsx(x,{id:c===Ne.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),l.jsx(F,{sixteenPx:!0}),l.jsx(un,{name:"vurderingBegrunnelse",label:f.formatMessage({id:c===Ne.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[re,Sa,Ra,gn],maxLength:1500,readOnly:i}),l.jsx(F,{eightPx:!0}),c===Ne.GOD_TRO&&l.jsx(tr,{name:c,readOnly:i,erBelopetIBehold:H,feilutbetalingBelop:a.feilutbetaling}),c!==Ne.GOD_TRO&&l.jsx(ar,{name:c,harGrunnerTilReduksjon:M,readOnly:i,handletUaktsomhetGrad:y,resetFields:pe,erSerligGrunnAnnetValgt:Y,erValgtResultatTypeForstoBurdeForstaatt:c===Ne.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:te,sarligGrunnTyper:Pe,antallYtelser:a.ytelser.length,feilutbetalingBelop:a.feilutbetaling,erTotalBelopUnder4Rettsgebyr:a.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:R},c)]})})]}),l.jsx(F,{twentyPx:!0}),l.jsxs(me,{gap:"4",children:[l.jsx(Z,{size:"small",variant:"primary",disabled:!h.formState.isDirty||i,children:l.jsx(x,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),l.jsx(Z,{size:"small",variant:"secondary",onClick:d,type:"button",children:l.jsx(x,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),j&&l.jsx(Ia,{bodyText:f.formatMessage({id:"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"}),showModal:!0,submit:ue})]})},Sg=(a,o)=>{const{vilkarResultat:d,begrunnelse:i,vilkarResultatInfo:g}=a,m=d&&d.kode?d.kode:d;let v;const k=a.erForeldet?a.erForeldet:a.foreldet;if(k){const h=o.perioder.find(c=>c.fom===a.fom&&c.tom===a.tom);v={erForeldet:k,periodenErForeldet:!0,foreldetBegrunnelse:h?yn(h.begrunnelse):void 0}}else v={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const f={valgtVilkarResultatType:m,begrunnelse:yn(i),harMerEnnEnYtelse:a.ytelser.length>1,...v},j=m===Ne.GOD_TRO?tr.buildIntialValues(g):{},p=m!==void 0&&m!==Ne.GOD_TRO?ar.buildInitalValues(g):{};return{...f,vurderingBegrunnelse:g?yn(g.begrunnelse):void 0,[f.valgtVilkarResultatType]:{...j,...p}}},Rg=(a,o)=>{const{valgtVilkarResultatType:d,begrunnelse:i,vurderingBegrunnelse:g}=a,m=a[d],v=d===Ne.GOD_TRO?tr.transformValues(m,g):{},k=d!==Ne.GOD_TRO?ar.transformValues(m,o,g):{};return{begrunnelse:i,fom:a.fom,tom:a.tom,vilkarResultat:d,vilkarResultatInfo:{...v,...k}}},qg="_container_wdk2x_1",Ag="_fadein_wdk2x_1",Fg="_space_wdk2x_11",wg={container:qg,fadein:Ag,space:Fg},Og="_margin_1wl4t_1",Rr={margin:Og},Bg={danger:l.jsx(Ha,{}),success:l.jsx($a,{}),warning:l.jsx(ts,{})},Eg=(a,o)=>a.fom<o.fom?-1:a.fom>o.fom?1:0,Dg=a=>{const o=a.isGodkjent?"success":"danger";return a.isAksjonspunktOpen?"warning":o},Mg=(a=[])=>[...a].sort(Eg).map(o=>({...o,status:Dg(o)})),Ng=a=>a===Fn.MOR||a===Fn.MEDMOR?l.jsx(Ca,{width:20,height:20,color:"var(--a-red-200)"}):a===Fn.FAR?l.jsx(rs,{width:20,height:20,color:"var(--a-blue-600)"}):l.jsx(as,{width:20,height:20}),Vg=({perioder:a,valgtPeriode:o,setPeriode:d,relasjonsRolleType:i,relasjonsRolleTypeKodeverk:g})=>{var m;const v=ve(),k=Mg(a),f=D.useCallback(E=>{const B=a.find(J=>J.id===E);B&&d(B)},[a,d]),j=de(k[0].fom),p=de(k[k.length-1].tom),[h,c]=D.useState(j),[y,M]=D.useState(p),R=D.useCallback(()=>{h.subtract(1,"month").isBefore(j)||(c(h.subtract(1,"month")),M(y.subtract(1,"month")))},[h,y,j]),_=D.useCallback(()=>{y.add(1,"month").isAfter(p)||(c(h.add(1,"month")),M(y.add(1,"month")))},[h,y,j]),Y=D.useCallback(()=>{h.add(3,"month").isAfter(y)||(c(h.add(1,"month")),M(y.subtract(1,"month")))},[h,y]),H=D.useCallback(()=>{y.add(1,"month").diff(h.subtract(1,"month"),"months")<36&&(c(h.subtract(1,"month")),M(y.add(1,"month")))},[h,y]);return l.jsxs(l.Fragment,{children:[l.jsx(F,{fourtyPx:!0}),l.jsx(wn,{startDate:de(h).toDate(),endDate:de(y).add(1,"days").toDate(),children:l.jsx(wn.Row,{label:((m=g.find(E=>E.kode===i))==null?void 0:m.navn)||"-",icon:Ng(i),children:k.map(E=>l.jsx(wn.Period,{start:de(E.fom).toDate(),end:de(E.tom).toDate(),status:E.status,icon:Bg[E.status],onSelectPeriod:()=>f(E.id),isActive:(o==null?void 0:o.id)===E.id,"aria-controls":"panel-tilbakekreving",id:E.id.toString()},E.id))})}),l.jsx(F,{twentyPx:!0}),l.jsxs(Va,{children:[l.jsx(Z,{className:Rr.margin,size:"small",icon:l.jsx(Ka,{"aria-hidden":!0}),onClick:Y,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),l.jsx(Z,{className:Rr.margin,size:"small",icon:l.jsx(es,{"aria-hidden":!0}),onClick:H,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),l.jsx(Z,{className:Rr.margin,size:"small",icon:l.jsx(Er,{"aria-hidden":!0}),onClick:R,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),l.jsx(Z,{className:Rr.margin,size:"small",icon:l.jsx(Dr,{"aria-hidden":!0}),onClick:_,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};function Ig(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var gs={exports:{}};(function(a,o){(function(d,i){a.exports=i()})(Vu,function(){var d;function i(){return d.apply(null,arguments)}function g(e){d=e}function m(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function v(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function k(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function f(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(k(e,n))return!1;return!0}function j(e){return e===void 0}function p(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function h(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function c(e,n){var r=[],t,s=e.length;for(t=0;t<s;++t)r.push(n(e[t],t));return r}function y(e,n){for(var r in n)k(n,r)&&(e[r]=n[r]);return k(n,"toString")&&(e.toString=n.toString),k(n,"valueOf")&&(e.valueOf=n.valueOf),e}function M(e,n,r,t){return $t(e,n,r,t,!0).utc()}function R(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function _(e){return e._pf==null&&(e._pf=R()),e._pf}var Y;Array.prototype.some?Y=Array.prototype.some:Y=function(e){var n=Object(this),r=n.length>>>0,t;for(t=0;t<r;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};function H(e){var n=null,r=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(n=_(e),r=Y.call(n.parsedDateParts,function(s){return s!=null}),t=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&r),e._strict&&(t=t&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function E(e){var n=M(NaN);return e!=null?y(_(n),e):_(n).userInvalidated=!0,n}var B=i.momentProperties=[],J=!1;function Pe(e,n){var r,t,s,u=B.length;if(j(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),j(n._i)||(e._i=n._i),j(n._f)||(e._f=n._f),j(n._l)||(e._l=n._l),j(n._strict)||(e._strict=n._strict),j(n._tzm)||(e._tzm=n._tzm),j(n._isUTC)||(e._isUTC=n._isUTC),j(n._offset)||(e._offset=n._offset),j(n._pf)||(e._pf=_(n)),j(n._locale)||(e._locale=n._locale),u>0)for(r=0;r<u;r++)t=B[r],s=n[t],j(s)||(e[t]=s);return e}function Ee(e){Pe(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),J===!1&&(J=!0,i.updateOffset(this),J=!1)}function te(e){return e instanceof Ee||e!=null&&e._isAMomentObject!=null}function rn(e){i.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function ue(e,n){var r=!0;return y(function(){if(i.deprecationHandler!=null&&i.deprecationHandler(null,e),r){var t=[],s,u,b,w=arguments.length;for(u=0;u<w;u++){if(s="",typeof arguments[u]=="object"){s+=`
[`+u+"] ";for(b in arguments[0])k(arguments[0],b)&&(s+=b+": "+arguments[0][b]+", ");s=s.slice(0,-2)}else s=arguments[u];t.push(s)}rn(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),r=!1}return n.apply(this,arguments)},n)}var Ye={};function tn(e,n){i.deprecationHandler!=null&&i.deprecationHandler(e,n),Ye[e]||(rn(n),Ye[e]=!0)}i.suppressDeprecationWarnings=!1,i.deprecationHandler=null;function pe(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function kn(e){var n,r;for(r in e)k(e,r)&&(n=e[r],pe(n)?this[r]=n:this["_"+r]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Se(e,n){var r=y({},e),t;for(t in n)k(n,t)&&(v(e[t])&&v(n[t])?(r[t]={},y(r[t],e[t]),y(r[t],n[t])):n[t]!=null?r[t]=n[t]:delete r[t]);for(t in e)k(e,t)&&!k(n,t)&&v(e[t])&&(r[t]=y({},r[t]));return r}function U(e){e!=null&&this.set(e)}var V;Object.keys?V=Object.keys:V=function(e){var n,r=[];for(n in e)k(e,n)&&r.push(n);return r};var Q={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function $(e,n,r){var t=this._calendar[e]||this._calendar.sameElse;return pe(t)?t.call(n,r):t}function X(e,n,r){var t=""+Math.abs(e),s=n-t.length,u=e>=0;return(u?r?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+t}var ie=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,we=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Re={},Te={};function q(e,n,r,t){var s=t;typeof t=="string"&&(s=function(){return this[t]()}),e&&(Te[e]=s),n&&(Te[n[0]]=function(){return X(s.apply(this,arguments),n[1],n[2])}),r&&(Te[r]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function le(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function je(e){var n=e.match(ie),r,t;for(r=0,t=n.length;r<t;r++)Te[n[r]]?n[r]=Te[n[r]]:n[r]=le(n[r]);return function(s){var u="",b;for(b=0;b<t;b++)u+=pe(n[b])?n[b].call(s,e):n[b];return u}}function Ie(e,n){return e.isValid()?(n=Ue(n,e.localeData()),Re[n]=Re[n]||je(n),Re[n](e)):e.localeData().invalidDate()}function Ue(e,n){var r=5;function t(s){return n.longDateFormat(s)||s}for(we.lastIndex=0;r>=0&&we.test(e);)e=e.replace(we,t),we.lastIndex=0,r-=1;return e}var js={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function _s(e){var n=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return n||!r?n:(this._longDateFormat[e]=r.match(ie).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var xs="Invalid date";function Ps(){return this._invalidDate}var Ss="%d",Rs=/\d{1,2}/;function qs(e){return this._ordinal.replace("%d",e)}var As={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Fs(e,n,r,t){var s=this._relativeTime[r];return pe(s)?s(e,n,r,t):s.replace(/%d/i,e)}function ws(e,n){var r=this._relativeTime[e>0?"future":"past"];return pe(r)?r(n):r.replace(/%s/i,n)}var St={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Oe(e){return typeof e=="string"?St[e]||St[e.toLowerCase()]:void 0}function Ir(e){var n={},r,t;for(t in e)k(e,t)&&(r=Oe(t),r&&(n[r]=e[t]));return n}var Os={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Bs(e){var n=[],r;for(r in e)k(e,r)&&n.push({unit:r,priority:Os[r]});return n.sort(function(t,s){return t.priority-s.priority}),n}var Rt=/\d/,qe=/\d\d/,qt=/\d{3}/,Ur=/\d{4}/,sr=/[+-]?\d{6}/,ee=/\d\d?/,At=/\d\d\d\d?/,Ft=/\d\d\d\d\d\d?/,ir=/\d{1,3}/,Gr=/\d{1,4}/,lr=/[+-]?\d{1,6}/,cn=/\d+/,or=/[+-]?\d+/,Es=/Z|[+-]\d\d:?\d\d/gi,dr=/Z|[+-]\d\d(?::?\d\d)?/gi,Ds=/[+-]?\d+(\.\d{1,3})?/,Mn=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Tn=/^[1-9]\d?/,Lr=/^([1-9]\d|\d)/,ur;ur={};function O(e,n,r){ur[e]=pe(n)?n:function(t,s){return t&&r?r:n}}function Ms(e,n){return k(ur,e)?ur[e](n._strict,n._locale):new RegExp(Ns(e))}function Ns(e){return Ke(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,r,t,s,u){return r||t||s||u}))}function Ke(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Be(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function G(e){var n=+e,r=0;return n!==0&&isFinite(n)&&(r=Be(n)),r}var Yr={};function W(e,n){var r,t=n,s;for(typeof e=="string"&&(e=[e]),p(n)&&(t=function(u,b){b[n]=G(u)}),s=e.length,r=0;r<s;r++)Yr[e[r]]=t}function Nn(e,n){W(e,function(r,t,s,u){s._w=s._w||{},n(r,s._w,s,u)})}function Vs(e,n,r){n!=null&&k(Yr,e)&&Yr[e](n,r._a,r,e)}function gr(e){return e%4===0&&e%100!==0||e%400===0}var he=0,Ce=1,Ge=2,ge=3,De=4,He=5,mn=6,Is=7,Us=8;q("Y",0,0,function(){var e=this.year();return e<=9999?X(e,4):"+"+e}),q(0,["YY",2],0,function(){return this.year()%100}),q(0,["YYYY",4],0,"year"),q(0,["YYYYY",5],0,"year"),q(0,["YYYYYY",6,!0],0,"year"),O("Y",or),O("YY",ee,qe),O("YYYY",Gr,Ur),O("YYYYY",lr,sr),O("YYYYYY",lr,sr),W(["YYYYY","YYYYYY"],he),W("YYYY",function(e,n){n[he]=e.length===2?i.parseTwoDigitYear(e):G(e)}),W("YY",function(e,n){n[he]=i.parseTwoDigitYear(e)}),W("Y",function(e,n){n[he]=parseInt(e,10)});function Vn(e){return gr(e)?366:365}i.parseTwoDigitYear=function(e){return G(e)+(G(e)>68?1900:2e3)};var wt=jn("FullYear",!0);function Gs(){return gr(this.year())}function jn(e,n){return function(r){return r!=null?(Ot(this,e,r),i.updateOffset(this,n),this):In(this,e)}}function In(e,n){if(!e.isValid())return NaN;var r=e._d,t=e._isUTC;switch(n){case"Milliseconds":return t?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return t?r.getUTCSeconds():r.getSeconds();case"Minutes":return t?r.getUTCMinutes():r.getMinutes();case"Hours":return t?r.getUTCHours():r.getHours();case"Date":return t?r.getUTCDate():r.getDate();case"Day":return t?r.getUTCDay():r.getDay();case"Month":return t?r.getUTCMonth():r.getMonth();case"FullYear":return t?r.getUTCFullYear():r.getFullYear();default:return NaN}}function Ot(e,n,r){var t,s,u,b,w;if(!(!e.isValid()||isNaN(r))){switch(t=e._d,s=e._isUTC,n){case"Milliseconds":return void(s?t.setUTCMilliseconds(r):t.setMilliseconds(r));case"Seconds":return void(s?t.setUTCSeconds(r):t.setSeconds(r));case"Minutes":return void(s?t.setUTCMinutes(r):t.setMinutes(r));case"Hours":return void(s?t.setUTCHours(r):t.setHours(r));case"Date":return void(s?t.setUTCDate(r):t.setDate(r));case"FullYear":break;default:return}u=r,b=e.month(),w=e.date(),w=w===29&&b===1&&!gr(u)?28:w,s?t.setUTCFullYear(u,b,w):t.setFullYear(u,b,w)}}function Ls(e){return e=Oe(e),pe(this[e])?this[e]():this}function Ys(e,n){if(typeof e=="object"){e=Ir(e);var r=Bs(e),t,s=r.length;for(t=0;t<s;t++)this[r[t].unit](e[r[t].unit])}else if(e=Oe(e),pe(this[e]))return this[e](n);return this}function Ks(e,n){return(e%n+n)%n}var oe;Array.prototype.indexOf?oe=Array.prototype.indexOf:oe=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function Kr(e,n){if(isNaN(e)||isNaN(n))return NaN;var r=Ks(n,12);return e+=(n-r)/12,r===1?gr(e)?29:28:31-r%7%2}q("M",["MM",2],"Mo",function(){return this.month()+1}),q("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),q("MMMM",0,0,function(e){return this.localeData().months(this,e)}),O("M",ee,Tn),O("MM",ee,qe),O("MMM",function(e,n){return n.monthsShortRegex(e)}),O("MMMM",function(e,n){return n.monthsRegex(e)}),W(["M","MM"],function(e,n){n[Ce]=G(e)-1}),W(["MMM","MMMM"],function(e,n,r,t){var s=r._locale.monthsParse(e,t,r._strict);s!=null?n[Ce]=s:_(r).invalidMonth=e});var Cs="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Bt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Et=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Hs=Mn,$s=Mn;function zs(e,n){return e?m(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Et).test(n)?"format":"standalone"][e.month()]:m(this._months)?this._months:this._months.standalone}function Ws(e,n){return e?m(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Et.test(n)?"format":"standalone"][e.month()]:m(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Zs(e,n,r){var t,s,u,b=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)u=M([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(u,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(u,"").toLocaleLowerCase();return r?n==="MMM"?(s=oe.call(this._shortMonthsParse,b),s!==-1?s:null):(s=oe.call(this._longMonthsParse,b),s!==-1?s:null):n==="MMM"?(s=oe.call(this._shortMonthsParse,b),s!==-1?s:(s=oe.call(this._longMonthsParse,b),s!==-1?s:null)):(s=oe.call(this._longMonthsParse,b),s!==-1?s:(s=oe.call(this._shortMonthsParse,b),s!==-1?s:null))}function Js(e,n,r){var t,s,u;if(this._monthsParseExact)return Zs.call(this,e,n,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++)if(s=M([2e3,t]),r&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),!r&&!this._monthsParse[t]&&(u="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[t]=new RegExp(u.replace(".",""),"i")),r&&n==="MMMM"&&this._longMonthsParse[t].test(e)||r&&n==="MMM"&&this._shortMonthsParse[t].test(e)||!r&&this._monthsParse[t].test(e))return t}function Dt(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=G(n);else if(n=e.localeData().monthsParse(n),!p(n))return e}var r=n,t=e.date();return t=t<29?t:Math.min(t,Kr(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,t):e._d.setMonth(r,t),e}function Mt(e){return e!=null?(Dt(this,e),i.updateOffset(this,!0),this):In(this,"Month")}function Qs(){return Kr(this.year(),this.month())}function Xs(e){return this._monthsParseExact?(k(this,"_monthsRegex")||Nt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(k(this,"_monthsShortRegex")||(this._monthsShortRegex=Hs),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ei(e){return this._monthsParseExact?(k(this,"_monthsRegex")||Nt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(k(this,"_monthsRegex")||(this._monthsRegex=$s),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Nt(){function e(N,L){return L.length-N.length}var n=[],r=[],t=[],s,u,b,w;for(s=0;s<12;s++)u=M([2e3,s]),b=Ke(this.monthsShort(u,"")),w=Ke(this.months(u,"")),n.push(b),r.push(w),t.push(w),t.push(b);n.sort(e),r.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function ni(e,n,r,t,s,u,b){var w;return e<100&&e>=0?(w=new Date(e+400,n,r,t,s,u,b),isFinite(w.getFullYear())&&w.setFullYear(e)):w=new Date(e,n,r,t,s,u,b),w}function Un(e){var n,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,n=new Date(Date.UTC.apply(null,r)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function kr(e,n,r){var t=7+n-r,s=(7+Un(e,0,t).getUTCDay()-n)%7;return-s+t-1}function Vt(e,n,r,t,s){var u=(7+r-t)%7,b=kr(e,t,s),w=1+7*(n-1)+u+b,N,L;return w<=0?(N=e-1,L=Vn(N)+w):w>Vn(e)?(N=e+1,L=w-Vn(e)):(N=e,L=w),{year:N,dayOfYear:L}}function Gn(e,n,r){var t=kr(e.year(),n,r),s=Math.floor((e.dayOfYear()-t-1)/7)+1,u,b;return s<1?(b=e.year()-1,u=s+$e(b,n,r)):s>$e(e.year(),n,r)?(u=s-$e(e.year(),n,r),b=e.year()+1):(b=e.year(),u=s),{week:u,year:b}}function $e(e,n,r){var t=kr(e,n,r),s=kr(e+1,n,r);return(Vn(e)-t+s)/7}q("w",["ww",2],"wo","week"),q("W",["WW",2],"Wo","isoWeek"),O("w",ee,Tn),O("ww",ee,qe),O("W",ee,Tn),O("WW",ee,qe),Nn(["w","ww","W","WW"],function(e,n,r,t){n[t.substr(0,1)]=G(e)});function ri(e){return Gn(e,this._week.dow,this._week.doy).week}var ti={dow:0,doy:6};function ai(){return this._week.dow}function si(){return this._week.doy}function ii(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function li(e){var n=Gn(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}q("d",0,"do","day"),q("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),q("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),q("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),q("e",0,0,"weekday"),q("E",0,0,"isoWeekday"),O("d",ee),O("e",ee),O("E",ee),O("dd",function(e,n){return n.weekdaysMinRegex(e)}),O("ddd",function(e,n){return n.weekdaysShortRegex(e)}),O("dddd",function(e,n){return n.weekdaysRegex(e)}),Nn(["dd","ddd","dddd"],function(e,n,r,t){var s=r._locale.weekdaysParse(e,t,r._strict);s!=null?n.d=s:_(r).invalidWeekday=e}),Nn(["d","e","E"],function(e,n,r,t){n[t]=G(e)});function oi(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function di(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Cr(e,n){return e.slice(n,7).concat(e.slice(0,n))}var ui="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),It="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),gi="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ki=Mn,mi=Mn,vi=Mn;function pi(e,n){var r=m(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?Cr(r,this._week.dow):e?r[e.day()]:r}function hi(e){return e===!0?Cr(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function yi(e){return e===!0?Cr(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function fi(e,n,r){var t,s,u,b=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)u=M([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(u,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(u,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(u,"").toLocaleLowerCase();return r?n==="dddd"?(s=oe.call(this._weekdaysParse,b),s!==-1?s:null):n==="ddd"?(s=oe.call(this._shortWeekdaysParse,b),s!==-1?s:null):(s=oe.call(this._minWeekdaysParse,b),s!==-1?s:null):n==="dddd"?(s=oe.call(this._weekdaysParse,b),s!==-1||(s=oe.call(this._shortWeekdaysParse,b),s!==-1)?s:(s=oe.call(this._minWeekdaysParse,b),s!==-1?s:null)):n==="ddd"?(s=oe.call(this._shortWeekdaysParse,b),s!==-1||(s=oe.call(this._weekdaysParse,b),s!==-1)?s:(s=oe.call(this._minWeekdaysParse,b),s!==-1?s:null)):(s=oe.call(this._minWeekdaysParse,b),s!==-1||(s=oe.call(this._weekdaysParse,b),s!==-1)?s:(s=oe.call(this._shortWeekdaysParse,b),s!==-1?s:null))}function bi(e,n,r){var t,s,u;if(this._weekdaysParseExact)return fi.call(this,e,n,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++)if(s=M([2e3,1]).day(t),r&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(u="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[t]=new RegExp(u.replace(".",""),"i")),r&&n==="dddd"&&this._fullWeekdaysParse[t].test(e)||r&&n==="ddd"&&this._shortWeekdaysParse[t].test(e)||r&&n==="dd"&&this._minWeekdaysParse[t].test(e)||!r&&this._weekdaysParse[t].test(e))return t}function ci(e){if(!this.isValid())return e!=null?this:NaN;var n=In(this,"Day");return e!=null?(e=oi(e,this.localeData()),this.add(e-n,"d")):n}function Ti(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function ji(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=di(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function _i(e){return this._weekdaysParseExact?(k(this,"_weekdaysRegex")||Hr.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(k(this,"_weekdaysRegex")||(this._weekdaysRegex=ki),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function xi(e){return this._weekdaysParseExact?(k(this,"_weekdaysRegex")||Hr.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(k(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=mi),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pi(e){return this._weekdaysParseExact?(k(this,"_weekdaysRegex")||Hr.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(k(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=vi),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Hr(){function e(ce,Qe){return Qe.length-ce.length}var n=[],r=[],t=[],s=[],u,b,w,N,L;for(u=0;u<7;u++)b=M([2e3,1]).day(u),w=Ke(this.weekdaysMin(b,"")),N=Ke(this.weekdaysShort(b,"")),L=Ke(this.weekdays(b,"")),n.push(w),r.push(N),t.push(L),s.push(w),s.push(N),s.push(L);n.sort(e),r.sort(e),t.sort(e),s.sort(e),this._weekdaysRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function $r(){return this.hours()%12||12}function Si(){return this.hours()||24}q("H",["HH",2],0,"hour"),q("h",["hh",2],0,$r),q("k",["kk",2],0,Si),q("hmm",0,0,function(){return""+$r.apply(this)+X(this.minutes(),2)}),q("hmmss",0,0,function(){return""+$r.apply(this)+X(this.minutes(),2)+X(this.seconds(),2)}),q("Hmm",0,0,function(){return""+this.hours()+X(this.minutes(),2)}),q("Hmmss",0,0,function(){return""+this.hours()+X(this.minutes(),2)+X(this.seconds(),2)});function Ut(e,n){q(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}Ut("a",!0),Ut("A",!1);function Gt(e,n){return n._meridiemParse}O("a",Gt),O("A",Gt),O("H",ee,Lr),O("h",ee,Tn),O("k",ee,Tn),O("HH",ee,qe),O("hh",ee,qe),O("kk",ee,qe),O("hmm",At),O("hmmss",Ft),O("Hmm",At),O("Hmmss",Ft),W(["H","HH"],ge),W(["k","kk"],function(e,n,r){var t=G(e);n[ge]=t===24?0:t}),W(["a","A"],function(e,n,r){r._isPm=r._locale.isPM(e),r._meridiem=e}),W(["h","hh"],function(e,n,r){n[ge]=G(e),_(r).bigHour=!0}),W("hmm",function(e,n,r){var t=e.length-2;n[ge]=G(e.substr(0,t)),n[De]=G(e.substr(t)),_(r).bigHour=!0}),W("hmmss",function(e,n,r){var t=e.length-4,s=e.length-2;n[ge]=G(e.substr(0,t)),n[De]=G(e.substr(t,2)),n[He]=G(e.substr(s)),_(r).bigHour=!0}),W("Hmm",function(e,n,r){var t=e.length-2;n[ge]=G(e.substr(0,t)),n[De]=G(e.substr(t))}),W("Hmmss",function(e,n,r){var t=e.length-4,s=e.length-2;n[ge]=G(e.substr(0,t)),n[De]=G(e.substr(t,2)),n[He]=G(e.substr(s))});function Ri(e){return(e+"").toLowerCase().charAt(0)==="p"}var qi=/[ap]\.?m?\.?/i,Ai=jn("Hours",!0);function Fi(e,n,r){return e>11?r?"pm":"PM":r?"am":"AM"}var Lt={calendar:Q,longDateFormat:js,invalidDate:xs,ordinal:Ss,dayOfMonthOrdinalParse:Rs,relativeTime:As,months:Cs,monthsShort:Bt,week:ti,weekdays:ui,weekdaysMin:gi,weekdaysShort:It,meridiemParse:qi},ae={},Ln={},Yn;function wi(e,n){var r,t=Math.min(e.length,n.length);for(r=0;r<t;r+=1)if(e[r]!==n[r])return r;return t}function Yt(e){return e&&e.toLowerCase().replace("_","-")}function Oi(e){for(var n=0,r,t,s,u;n<e.length;){for(u=Yt(e[n]).split("-"),r=u.length,t=Yt(e[n+1]),t=t?t.split("-"):null;r>0;){if(s=mr(u.slice(0,r).join("-")),s)return s;if(t&&t.length>=r&&wi(u,t)>=r-1)break;r--}n++}return Yn}function Bi(e){return!!(e&&e.match("^[^/\\\\]*$"))}function mr(e){var n=null,r;if(ae[e]===void 0&&a&&a.exports&&Bi(e))try{n=Yn._abbr,r=Ig,r("./locale/"+e),an(n)}catch{ae[e]=null}return ae[e]}function an(e,n){var r;return e&&(j(n)?r=ze(e):r=zr(e,n),r?Yn=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Yn._abbr}function zr(e,n){if(n!==null){var r,t=Lt;if(n.abbr=e,ae[e]!=null)tn("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=ae[e]._config;else if(n.parentLocale!=null)if(ae[n.parentLocale]!=null)t=ae[n.parentLocale]._config;else if(r=mr(n.parentLocale),r!=null)t=r._config;else return Ln[n.parentLocale]||(Ln[n.parentLocale]=[]),Ln[n.parentLocale].push({name:e,config:n}),null;return ae[e]=new U(Se(t,n)),Ln[e]&&Ln[e].forEach(function(s){zr(s.name,s.config)}),an(e),ae[e]}else return delete ae[e],null}function Ei(e,n){if(n!=null){var r,t,s=Lt;ae[e]!=null&&ae[e].parentLocale!=null?ae[e].set(Se(ae[e]._config,n)):(t=mr(e),t!=null&&(s=t._config),n=Se(s,n),t==null&&(n.abbr=e),r=new U(n),r.parentLocale=ae[e],ae[e]=r),an(e)}else ae[e]!=null&&(ae[e].parentLocale!=null?(ae[e]=ae[e].parentLocale,e===an()&&an(e)):ae[e]!=null&&delete ae[e]);return ae[e]}function ze(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Yn;if(!m(e)){if(n=mr(e),n)return n;e=[e]}return Oi(e)}function Di(){return V(ae)}function Wr(e){var n,r=e._a;return r&&_(e).overflow===-2&&(n=r[Ce]<0||r[Ce]>11?Ce:r[Ge]<1||r[Ge]>Kr(r[he],r[Ce])?Ge:r[ge]<0||r[ge]>24||r[ge]===24&&(r[De]!==0||r[He]!==0||r[mn]!==0)?ge:r[De]<0||r[De]>59?De:r[He]<0||r[He]>59?He:r[mn]<0||r[mn]>999?mn:-1,_(e)._overflowDayOfYear&&(n<he||n>Ge)&&(n=Ge),_(e)._overflowWeeks&&n===-1&&(n=Is),_(e)._overflowWeekday&&n===-1&&(n=Us),_(e).overflow=n),e}var Mi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ni=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Vi=/Z|[+-]\d\d(?::?\d\d)?/,vr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Zr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ii=/^\/?Date\((-?\d+)/i,Ui=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Gi={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Kt(e){var n,r,t=e._i,s=Mi.exec(t)||Ni.exec(t),u,b,w,N,L=vr.length,ce=Zr.length;if(s){for(_(e).iso=!0,n=0,r=L;n<r;n++)if(vr[n][1].exec(s[1])){b=vr[n][0],u=vr[n][2]!==!1;break}if(b==null){e._isValid=!1;return}if(s[3]){for(n=0,r=ce;n<r;n++)if(Zr[n][1].exec(s[3])){w=(s[2]||" ")+Zr[n][0];break}if(w==null){e._isValid=!1;return}}if(!u&&w!=null){e._isValid=!1;return}if(s[4])if(Vi.exec(s[4]))N="Z";else{e._isValid=!1;return}e._f=b+(w||"")+(N||""),Qr(e)}else e._isValid=!1}function Li(e,n,r,t,s,u){var b=[Yi(e),Bt.indexOf(n),parseInt(r,10),parseInt(t,10),parseInt(s,10)];return u&&b.push(parseInt(u,10)),b}function Yi(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function Ki(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Ci(e,n,r){if(e){var t=It.indexOf(e),s=new Date(n[0],n[1],n[2]).getDay();if(t!==s)return _(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function Hi(e,n,r){if(e)return Gi[e];if(n)return 0;var t=parseInt(r,10),s=t%100,u=(t-s)/100;return u*60+s}function Ct(e){var n=Ui.exec(Ki(e._i)),r;if(n){if(r=Li(n[4],n[3],n[2],n[5],n[6],n[7]),!Ci(n[1],r,e))return;e._a=r,e._tzm=Hi(n[8],n[9],n[10]),e._d=Un.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),_(e).rfc2822=!0}else e._isValid=!1}function $i(e){var n=Ii.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(Kt(e),e._isValid===!1)delete e._isValid;else return;if(Ct(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:i.createFromInputFallback(e)}i.createFromInputFallback=ue("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function _n(e,n,r){return e??n??r}function zi(e){var n=new Date(i.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function Jr(e){var n,r,t=[],s,u,b;if(!e._d){for(s=zi(e),e._w&&e._a[Ge]==null&&e._a[Ce]==null&&Wi(e),e._dayOfYear!=null&&(b=_n(e._a[he],s[he]),(e._dayOfYear>Vn(b)||e._dayOfYear===0)&&(_(e)._overflowDayOfYear=!0),r=Un(b,0,e._dayOfYear),e._a[Ce]=r.getUTCMonth(),e._a[Ge]=r.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=t[n]=s[n];for(;n<7;n++)e._a[n]=t[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[ge]===24&&e._a[De]===0&&e._a[He]===0&&e._a[mn]===0&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Un:ni).apply(null,t),u=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==u&&(_(e).weekdayMismatch=!0)}}function Wi(e){var n,r,t,s,u,b,w,N,L;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(u=1,b=4,r=_n(n.GG,e._a[he],Gn(ne(),1,4).year),t=_n(n.W,1),s=_n(n.E,1),(s<1||s>7)&&(N=!0)):(u=e._locale._week.dow,b=e._locale._week.doy,L=Gn(ne(),u,b),r=_n(n.gg,e._a[he],L.year),t=_n(n.w,L.week),n.d!=null?(s=n.d,(s<0||s>6)&&(N=!0)):n.e!=null?(s=n.e+u,(n.e<0||n.e>6)&&(N=!0)):s=u),t<1||t>$e(r,u,b)?_(e)._overflowWeeks=!0:N!=null?_(e)._overflowWeekday=!0:(w=Vt(r,t,s,u,b),e._a[he]=w.year,e._dayOfYear=w.dayOfYear)}i.ISO_8601=function(){},i.RFC_2822=function(){};function Qr(e){if(e._f===i.ISO_8601){Kt(e);return}if(e._f===i.RFC_2822){Ct(e);return}e._a=[],_(e).empty=!0;var n=""+e._i,r,t,s,u,b,w=n.length,N=0,L,ce;for(s=Ue(e._f,e._locale).match(ie)||[],ce=s.length,r=0;r<ce;r++)u=s[r],t=(n.match(Ms(u,e))||[])[0],t&&(b=n.substr(0,n.indexOf(t)),b.length>0&&_(e).unusedInput.push(b),n=n.slice(n.indexOf(t)+t.length),N+=t.length),Te[u]?(t?_(e).empty=!1:_(e).unusedTokens.push(u),Vs(u,t,e)):e._strict&&!t&&_(e).unusedTokens.push(u);_(e).charsLeftOver=w-N,n.length>0&&_(e).unusedInput.push(n),e._a[ge]<=12&&_(e).bigHour===!0&&e._a[ge]>0&&(_(e).bigHour=void 0),_(e).parsedDateParts=e._a.slice(0),_(e).meridiem=e._meridiem,e._a[ge]=Zi(e._locale,e._a[ge],e._meridiem),L=_(e).era,L!==null&&(e._a[he]=e._locale.erasConvertYear(L,e._a[he])),Jr(e),Wr(e)}function Zi(e,n,r){var t;return r==null?n:e.meridiemHour!=null?e.meridiemHour(n,r):(e.isPM!=null&&(t=e.isPM(r),t&&n<12&&(n+=12),!t&&n===12&&(n=0)),n)}function Ji(e){var n,r,t,s,u,b,w=!1,N=e._f.length;if(N===0){_(e).invalidFormat=!0,e._d=new Date(NaN);return}for(s=0;s<N;s++)u=0,b=!1,n=Pe({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[s],Qr(n),H(n)&&(b=!0),u+=_(n).charsLeftOver,u+=_(n).unusedTokens.length*10,_(n).score=u,w?u<t&&(t=u,r=n):(t==null||u<t||b)&&(t=u,r=n,b&&(w=!0));y(e,r||n)}function Qi(e){if(!e._d){var n=Ir(e._i),r=n.day===void 0?n.date:n.day;e._a=c([n.year,n.month,r,n.hour,n.minute,n.second,n.millisecond],function(t){return t&&parseInt(t,10)}),Jr(e)}}function Xi(e){var n=new Ee(Wr(Ht(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function Ht(e){var n=e._i,r=e._f;return e._locale=e._locale||ze(e._l),n===null||r===void 0&&n===""?E({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),te(n)?new Ee(Wr(n)):(h(n)?e._d=n:m(r)?Ji(e):r?Qr(e):el(e),H(e)||(e._d=null),e))}function el(e){var n=e._i;j(n)?e._d=new Date(i.now()):h(n)?e._d=new Date(n.valueOf()):typeof n=="string"?$i(e):m(n)?(e._a=c(n.slice(0),function(r){return parseInt(r,10)}),Jr(e)):v(n)?Qi(e):p(n)?e._d=new Date(n):i.createFromInputFallback(e)}function $t(e,n,r,t,s){var u={};return(n===!0||n===!1)&&(t=n,n=void 0),(r===!0||r===!1)&&(t=r,r=void 0),(v(e)&&f(e)||m(e)&&e.length===0)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=s,u._l=r,u._i=e,u._f=n,u._strict=t,Xi(u)}function ne(e,n,r,t){return $t(e,n,r,t,!1)}var nl=ue("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ne.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:E()}),rl=ue("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ne.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:E()});function zt(e,n){var r,t;if(n.length===1&&m(n[0])&&(n=n[0]),!n.length)return ne();for(r=n[0],t=1;t<n.length;++t)(!n[t].isValid()||n[t][e](r))&&(r=n[t]);return r}function tl(){var e=[].slice.call(arguments,0);return zt("isBefore",e)}function al(){var e=[].slice.call(arguments,0);return zt("isAfter",e)}var sl=function(){return Date.now?Date.now():+new Date},Kn=["year","quarter","month","week","day","hour","minute","second","millisecond"];function il(e){var n,r=!1,t,s=Kn.length;for(n in e)if(k(e,n)&&!(oe.call(Kn,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(t=0;t<s;++t)if(e[Kn[t]]){if(r)return!1;parseFloat(e[Kn[t]])!==G(e[Kn[t]])&&(r=!0)}return!0}function ll(){return this._isValid}function ol(){return Me(NaN)}function pr(e){var n=Ir(e),r=n.year||0,t=n.quarter||0,s=n.month||0,u=n.week||n.isoWeek||0,b=n.day||0,w=n.hour||0,N=n.minute||0,L=n.second||0,ce=n.millisecond||0;this._isValid=il(n),this._milliseconds=+ce+L*1e3+N*6e4+w*1e3*60*60,this._days=+b+u*7,this._months=+s+t*3+r*12,this._data={},this._locale=ze(),this._bubble()}function hr(e){return e instanceof pr}function Xr(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function dl(e,n,r){var t=Math.min(e.length,n.length),s=Math.abs(e.length-n.length),u=0,b;for(b=0;b<t;b++)G(e[b])!==G(n[b])&&u++;return u+s}function Wt(e,n){q(e,0,0,function(){var r=this.utcOffset(),t="+";return r<0&&(r=-r,t="-"),t+X(~~(r/60),2)+n+X(~~r%60,2)})}Wt("Z",":"),Wt("ZZ",""),O("Z",dr),O("ZZ",dr),W(["Z","ZZ"],function(e,n,r){r._useUTC=!0,r._tzm=et(dr,e)});var ul=/([\+\-]|\d\d)/gi;function et(e,n){var r=(n||"").match(e),t,s,u;return r===null?null:(t=r[r.length-1]||[],s=(t+"").match(ul)||["-",0,0],u=+(s[1]*60)+G(s[2]),u===0?0:s[0]==="+"?u:-u)}function nt(e,n){var r,t;return n._isUTC?(r=n.clone(),t=(te(e)||h(e)?e.valueOf():ne(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+t),i.updateOffset(r,!1),r):ne(e).local()}function rt(e){return-Math.round(e._d.getTimezoneOffset())}i.updateOffset=function(){};function gl(e,n,r){var t=this._offset||0,s;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=et(dr,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&n&&(s=rt(this)),this._offset=e,this._isUTC=!0,s!=null&&this.add(s,"m"),t!==e&&(!n||this._changeInProgress?Xt(this,Me(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,i.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:rt(this)}function kl(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function ml(e){return this.utcOffset(0,e)}function vl(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(rt(this),"m")),this}function pl(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=et(Es,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function hl(e){return this.isValid()?(e=e?ne(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function yl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function fl(){if(!j(this._isDSTShifted))return this._isDSTShifted;var e={},n;return Pe(e,this),e=Ht(e),e._a?(n=e._isUTC?M(e._a):ne(e._a),this._isDSTShifted=this.isValid()&&dl(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function bl(){return this.isValid()?!this._isUTC:!1}function cl(){return this.isValid()?this._isUTC:!1}function Zt(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Tl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,jl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Me(e,n){var r=e,t=null,s,u,b;return hr(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:p(e)||!isNaN(+e)?(r={},n?r[n]=+e:r.milliseconds=+e):(t=Tl.exec(e))?(s=t[1]==="-"?-1:1,r={y:0,d:G(t[Ge])*s,h:G(t[ge])*s,m:G(t[De])*s,s:G(t[He])*s,ms:G(Xr(t[mn]*1e3))*s}):(t=jl.exec(e))?(s=t[1]==="-"?-1:1,r={y:vn(t[2],s),M:vn(t[3],s),w:vn(t[4],s),d:vn(t[5],s),h:vn(t[6],s),m:vn(t[7],s),s:vn(t[8],s)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(b=_l(ne(r.from),ne(r.to)),r={},r.ms=b.milliseconds,r.M=b.months),u=new pr(r),hr(e)&&k(e,"_locale")&&(u._locale=e._locale),hr(e)&&k(e,"_isValid")&&(u._isValid=e._isValid),u}Me.fn=pr.prototype,Me.invalid=ol;function vn(e,n){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*n}function Jt(e,n){var r={};return r.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(n)&&--r.months,r.milliseconds=+n-+e.clone().add(r.months,"M"),r}function _l(e,n){var r;return e.isValid()&&n.isValid()?(n=nt(n,e),e.isBefore(n)?r=Jt(e,n):(r=Jt(n,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Qt(e,n){return function(r,t){var s,u;return t!==null&&!isNaN(+t)&&(tn(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),u=r,r=t,t=u),s=Me(r,t),Xt(this,s,e),this}}function Xt(e,n,r,t){var s=n._milliseconds,u=Xr(n._days),b=Xr(n._months);e.isValid()&&(t=t??!0,b&&Dt(e,In(e,"Month")+b*r),u&&Ot(e,"Date",In(e,"Date")+u*r),s&&e._d.setTime(e._d.valueOf()+s*r),t&&i.updateOffset(e,u||b))}var xl=Qt(1,"add"),Pl=Qt(-1,"subtract");function ea(e){return typeof e=="string"||e instanceof String}function Sl(e){return te(e)||h(e)||ea(e)||p(e)||ql(e)||Rl(e)||e===null||e===void 0}function Rl(e){var n=v(e)&&!f(e),r=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],s,u,b=t.length;for(s=0;s<b;s+=1)u=t[s],r=r||k(e,u);return n&&r}function ql(e){var n=m(e),r=!1;return n&&(r=e.filter(function(t){return!p(t)&&ea(e)}).length===0),n&&r}function Al(e){var n=v(e)&&!f(e),r=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],s,u;for(s=0;s<t.length;s+=1)u=t[s],r=r||k(e,u);return n&&r}function Fl(e,n){var r=e.diff(n,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function wl(e,n){arguments.length===1&&(arguments[0]?Sl(arguments[0])?(e=arguments[0],n=void 0):Al(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var r=e||ne(),t=nt(r,this).startOf("day"),s=i.calendarFormat(this,t)||"sameElse",u=n&&(pe(n[s])?n[s].call(this,r):n[s]);return this.format(u||this.localeData().calendar(s,this,ne(r)))}function Ol(){return new Ee(this)}function Bl(e,n){var r=te(e)?e:ne(e);return this.isValid()&&r.isValid()?(n=Oe(n)||"millisecond",n==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(n).valueOf()):!1}function El(e,n){var r=te(e)?e:ne(e);return this.isValid()&&r.isValid()?(n=Oe(n)||"millisecond",n==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(n).valueOf()<r.valueOf()):!1}function Dl(e,n,r,t){var s=te(e)?e:ne(e),u=te(n)?n:ne(n);return this.isValid()&&s.isValid()&&u.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(s,r):!this.isBefore(s,r))&&(t[1]===")"?this.isBefore(u,r):!this.isAfter(u,r))):!1}function Ml(e,n){var r=te(e)?e:ne(e),t;return this.isValid()&&r.isValid()?(n=Oe(n)||"millisecond",n==="millisecond"?this.valueOf()===r.valueOf():(t=r.valueOf(),this.clone().startOf(n).valueOf()<=t&&t<=this.clone().endOf(n).valueOf())):!1}function Nl(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function Vl(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function Il(e,n,r){var t,s,u;if(!this.isValid())return NaN;if(t=nt(e,this),!t.isValid())return NaN;switch(s=(t.utcOffset()-this.utcOffset())*6e4,n=Oe(n),n){case"year":u=yr(this,t)/12;break;case"month":u=yr(this,t);break;case"quarter":u=yr(this,t)/3;break;case"second":u=(this-t)/1e3;break;case"minute":u=(this-t)/6e4;break;case"hour":u=(this-t)/36e5;break;case"day":u=(this-t-s)/864e5;break;case"week":u=(this-t-s)/6048e5;break;default:u=this-t}return r?u:Be(u)}function yr(e,n){if(e.date()<n.date())return-yr(n,e);var r=(n.year()-e.year())*12+(n.month()-e.month()),t=e.clone().add(r,"months"),s,u;return n-t<0?(s=e.clone().add(r-1,"months"),u=(n-t)/(t-s)):(s=e.clone().add(r+1,"months"),u=(n-t)/(s-t)),-(r+u)||0}i.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",i.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Ul(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Gl(e){if(!this.isValid())return null;var n=e!==!0,r=n?this.clone().utc():this;return r.year()<0||r.year()>9999?Ie(r,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):pe(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ie(r,"Z")):Ie(r,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Ll(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",r,t,s,u;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),r="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s="-MM-DD[T]HH:mm:ss.SSS",u=n+'[")]',this.format(r+t+s+u)}function Yl(e){e||(e=this.isUtc()?i.defaultFormatUtc:i.defaultFormat);var n=Ie(this,e);return this.localeData().postformat(n)}function Kl(e,n){return this.isValid()&&(te(e)&&e.isValid()||ne(e).isValid())?Me({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function Cl(e){return this.from(ne(),e)}function Hl(e,n){return this.isValid()&&(te(e)&&e.isValid()||ne(e).isValid())?Me({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function $l(e){return this.to(ne(),e)}function na(e){var n;return e===void 0?this._locale._abbr:(n=ze(e),n!=null&&(this._locale=n),this)}var ra=ue("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ta(){return this._locale}var fr=1e3,xn=60*fr,br=60*xn,aa=(365*400+97)*24*br;function Pn(e,n){return(e%n+n)%n}function sa(e,n,r){return e<100&&e>=0?new Date(e+400,n,r)-aa:new Date(e,n,r).valueOf()}function ia(e,n,r){return e<100&&e>=0?Date.UTC(e+400,n,r)-aa:Date.UTC(e,n,r)}function zl(e){var n,r;if(e=Oe(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?ia:sa,e){case"year":n=r(this.year(),0,1);break;case"quarter":n=r(this.year(),this.month()-this.month()%3,1);break;case"month":n=r(this.year(),this.month(),1);break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=r(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=Pn(n+(this._isUTC?0:this.utcOffset()*xn),br);break;case"minute":n=this._d.valueOf(),n-=Pn(n,xn);break;case"second":n=this._d.valueOf(),n-=Pn(n,fr);break}return this._d.setTime(n),i.updateOffset(this,!0),this}function Wl(e){var n,r;if(e=Oe(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?ia:sa,e){case"year":n=r(this.year()+1,0,1)-1;break;case"quarter":n=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=r(this.year(),this.month()+1,1)-1;break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=br-Pn(n+(this._isUTC?0:this.utcOffset()*xn),br)-1;break;case"minute":n=this._d.valueOf(),n+=xn-Pn(n,xn)-1;break;case"second":n=this._d.valueOf(),n+=fr-Pn(n,fr)-1;break}return this._d.setTime(n),i.updateOffset(this,!0),this}function Zl(){return this._d.valueOf()-(this._offset||0)*6e4}function Jl(){return Math.floor(this.valueOf()/1e3)}function Ql(){return new Date(this.valueOf())}function Xl(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function eo(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function no(){return this.isValid()?this.toISOString():null}function ro(){return H(this)}function to(){return y({},_(this))}function ao(){return _(this).overflow}function so(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}q("N",0,0,"eraAbbr"),q("NN",0,0,"eraAbbr"),q("NNN",0,0,"eraAbbr"),q("NNNN",0,0,"eraName"),q("NNNNN",0,0,"eraNarrow"),q("y",["y",1],"yo","eraYear"),q("y",["yy",2],0,"eraYear"),q("y",["yyy",3],0,"eraYear"),q("y",["yyyy",4],0,"eraYear"),O("N",tt),O("NN",tt),O("NNN",tt),O("NNNN",yo),O("NNNNN",fo),W(["N","NN","NNN","NNNN","NNNNN"],function(e,n,r,t){var s=r._locale.erasParse(e,t,r._strict);s?_(r).era=s:_(r).invalidEra=e}),O("y",cn),O("yy",cn),O("yyy",cn),O("yyyy",cn),O("yo",bo),W(["y","yy","yyy","yyyy"],he),W(["yo"],function(e,n,r,t){var s;r._locale._eraYearOrdinalRegex&&(s=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?n[he]=r._locale.eraYearOrdinalParse(e,s):n[he]=parseInt(e,10)});function io(e,n){var r,t,s,u=this._eras||ze("en")._eras;for(r=0,t=u.length;r<t;++r){switch(typeof u[r].since){case"string":s=i(u[r].since).startOf("day"),u[r].since=s.valueOf();break}switch(typeof u[r].until){case"undefined":u[r].until=1/0;break;case"string":s=i(u[r].until).startOf("day").valueOf(),u[r].until=s.valueOf();break}}return u}function lo(e,n,r){var t,s,u=this.eras(),b,w,N;for(e=e.toUpperCase(),t=0,s=u.length;t<s;++t)if(b=u[t].name.toUpperCase(),w=u[t].abbr.toUpperCase(),N=u[t].narrow.toUpperCase(),r)switch(n){case"N":case"NN":case"NNN":if(w===e)return u[t];break;case"NNNN":if(b===e)return u[t];break;case"NNNNN":if(N===e)return u[t];break}else if([b,w,N].indexOf(e)>=0)return u[t]}function oo(e,n){var r=e.since<=e.until?1:-1;return n===void 0?i(e.since).year():i(e.since).year()+(n-e.offset)*r}function uo(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].name;return""}function go(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].narrow;return""}function ko(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].abbr;return""}function mo(){var e,n,r,t,s=this.localeData().eras();for(e=0,n=s.length;e<n;++e)if(r=s[e].since<=s[e].until?1:-1,t=this.clone().startOf("day").valueOf(),s[e].since<=t&&t<=s[e].until||s[e].until<=t&&t<=s[e].since)return(this.year()-i(s[e].since).year())*r+s[e].offset;return this.year()}function vo(e){return k(this,"_erasNameRegex")||at.call(this),e?this._erasNameRegex:this._erasRegex}function po(e){return k(this,"_erasAbbrRegex")||at.call(this),e?this._erasAbbrRegex:this._erasRegex}function ho(e){return k(this,"_erasNarrowRegex")||at.call(this),e?this._erasNarrowRegex:this._erasRegex}function tt(e,n){return n.erasAbbrRegex(e)}function yo(e,n){return n.erasNameRegex(e)}function fo(e,n){return n.erasNarrowRegex(e)}function bo(e,n){return n._eraYearOrdinalRegex||cn}function at(){var e=[],n=[],r=[],t=[],s,u,b,w,N,L=this.eras();for(s=0,u=L.length;s<u;++s)b=Ke(L[s].name),w=Ke(L[s].abbr),N=Ke(L[s].narrow),n.push(b),e.push(w),r.push(N),t.push(b),t.push(w),t.push(N);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}q(0,["gg",2],0,function(){return this.weekYear()%100}),q(0,["GG",2],0,function(){return this.isoWeekYear()%100});function cr(e,n){q(0,[e,e.length],0,n)}cr("gggg","weekYear"),cr("ggggg","weekYear"),cr("GGGG","isoWeekYear"),cr("GGGGG","isoWeekYear"),O("G",or),O("g",or),O("GG",ee,qe),O("gg",ee,qe),O("GGGG",Gr,Ur),O("gggg",Gr,Ur),O("GGGGG",lr,sr),O("ggggg",lr,sr),Nn(["gggg","ggggg","GGGG","GGGGG"],function(e,n,r,t){n[t.substr(0,2)]=G(e)}),Nn(["gg","GG"],function(e,n,r,t){n[t]=i.parseTwoDigitYear(e)});function co(e){return la.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function To(e){return la.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function jo(){return $e(this.year(),1,4)}function _o(){return $e(this.isoWeekYear(),1,4)}function xo(){var e=this.localeData()._week;return $e(this.year(),e.dow,e.doy)}function Po(){var e=this.localeData()._week;return $e(this.weekYear(),e.dow,e.doy)}function la(e,n,r,t,s){var u;return e==null?Gn(this,t,s).year:(u=$e(e,t,s),n>u&&(n=u),So.call(this,e,n,r,t,s))}function So(e,n,r,t,s){var u=Vt(e,n,r,t,s),b=Un(u.year,0,u.dayOfYear);return this.year(b.getUTCFullYear()),this.month(b.getUTCMonth()),this.date(b.getUTCDate()),this}q("Q",0,"Qo","quarter"),O("Q",Rt),W("Q",function(e,n){n[Ce]=(G(e)-1)*3});function Ro(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}q("D",["DD",2],"Do","date"),O("D",ee,Tn),O("DD",ee,qe),O("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient}),W(["D","DD"],Ge),W("Do",function(e,n){n[Ge]=G(e.match(ee)[0])});var oa=jn("Date",!0);q("DDD",["DDDD",3],"DDDo","dayOfYear"),O("DDD",ir),O("DDDD",qt),W(["DDD","DDDD"],function(e,n,r){r._dayOfYear=G(e)});function qo(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}q("m",["mm",2],0,"minute"),O("m",ee,Lr),O("mm",ee,qe),W(["m","mm"],De);var Ao=jn("Minutes",!1);q("s",["ss",2],0,"second"),O("s",ee,Lr),O("ss",ee,qe),W(["s","ss"],He);var Fo=jn("Seconds",!1);q("S",0,0,function(){return~~(this.millisecond()/100)}),q(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),q(0,["SSS",3],0,"millisecond"),q(0,["SSSS",4],0,function(){return this.millisecond()*10}),q(0,["SSSSS",5],0,function(){return this.millisecond()*100}),q(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),q(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),q(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),q(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),O("S",ir,Rt),O("SS",ir,qe),O("SSS",ir,qt);var sn,da;for(sn="SSSS";sn.length<=9;sn+="S")O(sn,cn);function wo(e,n){n[mn]=G(("0."+e)*1e3)}for(sn="S";sn.length<=9;sn+="S")W(sn,wo);da=jn("Milliseconds",!1),q("z",0,0,"zoneAbbr"),q("zz",0,0,"zoneName");function Oo(){return this._isUTC?"UTC":""}function Bo(){return this._isUTC?"Coordinated Universal Time":""}var P=Ee.prototype;P.add=xl,P.calendar=wl,P.clone=Ol,P.diff=Il,P.endOf=Wl,P.format=Yl,P.from=Kl,P.fromNow=Cl,P.to=Hl,P.toNow=$l,P.get=Ls,P.invalidAt=ao,P.isAfter=Bl,P.isBefore=El,P.isBetween=Dl,P.isSame=Ml,P.isSameOrAfter=Nl,P.isSameOrBefore=Vl,P.isValid=ro,P.lang=ra,P.locale=na,P.localeData=ta,P.max=rl,P.min=nl,P.parsingFlags=to,P.set=Ys,P.startOf=zl,P.subtract=Pl,P.toArray=Xl,P.toObject=eo,P.toDate=Ql,P.toISOString=Gl,P.inspect=Ll,typeof Symbol<"u"&&Symbol.for!=null&&(P[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),P.toJSON=no,P.toString=Ul,P.unix=Jl,P.valueOf=Zl,P.creationData=so,P.eraName=uo,P.eraNarrow=go,P.eraAbbr=ko,P.eraYear=mo,P.year=wt,P.isLeapYear=Gs,P.weekYear=co,P.isoWeekYear=To,P.quarter=P.quarters=Ro,P.month=Mt,P.daysInMonth=Qs,P.week=P.weeks=ii,P.isoWeek=P.isoWeeks=li,P.weeksInYear=xo,P.weeksInWeekYear=Po,P.isoWeeksInYear=jo,P.isoWeeksInISOWeekYear=_o,P.date=oa,P.day=P.days=ci,P.weekday=Ti,P.isoWeekday=ji,P.dayOfYear=qo,P.hour=P.hours=Ai,P.minute=P.minutes=Ao,P.second=P.seconds=Fo,P.millisecond=P.milliseconds=da,P.utcOffset=gl,P.utc=ml,P.local=vl,P.parseZone=pl,P.hasAlignedHourOffset=hl,P.isDST=yl,P.isLocal=bl,P.isUtcOffset=cl,P.isUtc=Zt,P.isUTC=Zt,P.zoneAbbr=Oo,P.zoneName=Bo,P.dates=ue("dates accessor is deprecated. Use date instead.",oa),P.months=ue("months accessor is deprecated. Use month instead",Mt),P.years=ue("years accessor is deprecated. Use year instead",wt),P.zone=ue("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",kl),P.isDSTShifted=ue("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",fl);function Eo(e){return ne(e*1e3)}function Do(){return ne.apply(null,arguments).parseZone()}function ua(e){return e}var C=U.prototype;C.calendar=$,C.longDateFormat=_s,C.invalidDate=Ps,C.ordinal=qs,C.preparse=ua,C.postformat=ua,C.relativeTime=Fs,C.pastFuture=ws,C.set=kn,C.eras=io,C.erasParse=lo,C.erasConvertYear=oo,C.erasAbbrRegex=po,C.erasNameRegex=vo,C.erasNarrowRegex=ho,C.months=zs,C.monthsShort=Ws,C.monthsParse=Js,C.monthsRegex=ei,C.monthsShortRegex=Xs,C.week=ri,C.firstDayOfYear=si,C.firstDayOfWeek=ai,C.weekdays=pi,C.weekdaysMin=yi,C.weekdaysShort=hi,C.weekdaysParse=bi,C.weekdaysRegex=_i,C.weekdaysShortRegex=xi,C.weekdaysMinRegex=Pi,C.isPM=Ri,C.meridiem=Fi;function Tr(e,n,r,t){var s=ze(),u=M().set(t,n);return s[r](u,e)}function ga(e,n,r){if(p(e)&&(n=e,e=void 0),e=e||"",n!=null)return Tr(e,n,r,"month");var t,s=[];for(t=0;t<12;t++)s[t]=Tr(e,t,r,"month");return s}function st(e,n,r,t){typeof e=="boolean"?(p(n)&&(r=n,n=void 0),n=n||""):(n=e,r=n,e=!1,p(n)&&(r=n,n=void 0),n=n||"");var s=ze(),u=e?s._week.dow:0,b,w=[];if(r!=null)return Tr(n,(r+u)%7,t,"day");for(b=0;b<7;b++)w[b]=Tr(n,(b+u)%7,t,"day");return w}function Mo(e,n){return ga(e,n,"months")}function No(e,n){return ga(e,n,"monthsShort")}function Vo(e,n,r){return st(e,n,r,"weekdays")}function Io(e,n,r){return st(e,n,r,"weekdaysShort")}function Uo(e,n,r){return st(e,n,r,"weekdaysMin")}an("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,r=G(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+r}}),i.lang=ue("moment.lang is deprecated. Use moment.locale instead.",an),i.langData=ue("moment.langData is deprecated. Use moment.localeData instead.",ze);var We=Math.abs;function Go(){var e=this._data;return this._milliseconds=We(this._milliseconds),this._days=We(this._days),this._months=We(this._months),e.milliseconds=We(e.milliseconds),e.seconds=We(e.seconds),e.minutes=We(e.minutes),e.hours=We(e.hours),e.months=We(e.months),e.years=We(e.years),this}function ka(e,n,r,t){var s=Me(n,r);return e._milliseconds+=t*s._milliseconds,e._days+=t*s._days,e._months+=t*s._months,e._bubble()}function Lo(e,n){return ka(this,e,n,1)}function Yo(e,n){return ka(this,e,n,-1)}function ma(e){return e<0?Math.floor(e):Math.ceil(e)}function Ko(){var e=this._milliseconds,n=this._days,r=this._months,t=this._data,s,u,b,w,N;return e>=0&&n>=0&&r>=0||e<=0&&n<=0&&r<=0||(e+=ma(it(r)+n)*864e5,n=0,r=0),t.milliseconds=e%1e3,s=Be(e/1e3),t.seconds=s%60,u=Be(s/60),t.minutes=u%60,b=Be(u/60),t.hours=b%24,n+=Be(b/24),N=Be(va(n)),r+=N,n-=ma(it(N)),w=Be(r/12),r%=12,t.days=n,t.months=r,t.years=w,this}function va(e){return e*4800/146097}function it(e){return e*146097/4800}function Co(e){if(!this.isValid())return NaN;var n,r,t=this._milliseconds;if(e=Oe(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+t/864e5,r=this._months+va(n),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(n=this._days+Math.round(it(this._months)),e){case"week":return n/7+t/6048e5;case"day":return n+t/864e5;case"hour":return n*24+t/36e5;case"minute":return n*1440+t/6e4;case"second":return n*86400+t/1e3;case"millisecond":return Math.floor(n*864e5)+t;default:throw new Error("Unknown unit "+e)}}function Ze(e){return function(){return this.as(e)}}var pa=Ze("ms"),Ho=Ze("s"),$o=Ze("m"),zo=Ze("h"),Wo=Ze("d"),Zo=Ze("w"),Jo=Ze("M"),Qo=Ze("Q"),Xo=Ze("y"),ed=pa;function nd(){return Me(this)}function rd(e){return e=Oe(e),this.isValid()?this[e+"s"]():NaN}function pn(e){return function(){return this.isValid()?this._data[e]:NaN}}var td=pn("milliseconds"),ad=pn("seconds"),sd=pn("minutes"),id=pn("hours"),ld=pn("days"),od=pn("months"),dd=pn("years");function ud(){return Be(this.days()/7)}var Je=Math.round,Sn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function gd(e,n,r,t,s){return s.relativeTime(n||1,!!r,e,t)}function kd(e,n,r,t){var s=Me(e).abs(),u=Je(s.as("s")),b=Je(s.as("m")),w=Je(s.as("h")),N=Je(s.as("d")),L=Je(s.as("M")),ce=Je(s.as("w")),Qe=Je(s.as("y")),ln=u<=r.ss&&["s",u]||u<r.s&&["ss",u]||b<=1&&["m"]||b<r.m&&["mm",b]||w<=1&&["h"]||w<r.h&&["hh",w]||N<=1&&["d"]||N<r.d&&["dd",N];return r.w!=null&&(ln=ln||ce<=1&&["w"]||ce<r.w&&["ww",ce]),ln=ln||L<=1&&["M"]||L<r.M&&["MM",L]||Qe<=1&&["y"]||["yy",Qe],ln[2]=n,ln[3]=+e>0,ln[4]=t,gd.apply(null,ln)}function md(e){return e===void 0?Je:typeof e=="function"?(Je=e,!0):!1}function vd(e,n){return Sn[e]===void 0?!1:n===void 0?Sn[e]:(Sn[e]=n,e==="s"&&(Sn.ss=n-1),!0)}function pd(e,n){if(!this.isValid())return this.localeData().invalidDate();var r=!1,t=Sn,s,u;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(r=e),typeof n=="object"&&(t=Object.assign({},Sn,n),n.s!=null&&n.ss==null&&(t.ss=n.s-1)),s=this.localeData(),u=kd(this,!r,t,s),r&&(u=s.pastFuture(+this,u)),s.postformat(u)}var lt=Math.abs;function Rn(e){return(e>0)-(e<0)||+e}function jr(){if(!this.isValid())return this.localeData().invalidDate();var e=lt(this._milliseconds)/1e3,n=lt(this._days),r=lt(this._months),t,s,u,b,w=this.asSeconds(),N,L,ce,Qe;return w?(t=Be(e/60),s=Be(t/60),e%=60,t%=60,u=Be(r/12),r%=12,b=e?e.toFixed(3).replace(/\.?0+$/,""):"",N=w<0?"-":"",L=Rn(this._months)!==Rn(w)?"-":"",ce=Rn(this._days)!==Rn(w)?"-":"",Qe=Rn(this._milliseconds)!==Rn(w)?"-":"",N+"P"+(u?L+u+"Y":"")+(r?L+r+"M":"")+(n?ce+n+"D":"")+(s||t||e?"T":"")+(s?Qe+s+"H":"")+(t?Qe+t+"M":"")+(e?Qe+b+"S":"")):"P0D"}var K=pr.prototype;K.isValid=ll,K.abs=Go,K.add=Lo,K.subtract=Yo,K.as=Co,K.asMilliseconds=pa,K.asSeconds=Ho,K.asMinutes=$o,K.asHours=zo,K.asDays=Wo,K.asWeeks=Zo,K.asMonths=Jo,K.asQuarters=Qo,K.asYears=Xo,K.valueOf=ed,K._bubble=Ko,K.clone=nd,K.get=rd,K.milliseconds=td,K.seconds=ad,K.minutes=sd,K.hours=id,K.days=ld,K.weeks=ud,K.months=od,K.years=dd,K.humanize=pd,K.toISOString=jr,K.toString=jr,K.toJSON=jr,K.locale=na,K.localeData=ta,K.toIsoString=ue("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",jr),K.lang=ra,q("X",0,0,"unix"),q("x",0,0,"valueOf"),O("x",or),O("X",Ds),W("X",function(e,n,r){r._d=new Date(parseFloat(e)*1e3)}),W("x",function(e,n,r){r._d=new Date(G(e))});//! moment.js
return i.version="2.30.1",g(ne),i.fn=P,i.min=tl,i.max=al,i.now=sl,i.utc=M,i.unix=Eo,i.months=Mo,i.isDate=h,i.locale=an,i.invalid=E,i.duration=Me,i.isMoment=te,i.weekdays=Vo,i.parseZone=Do,i.localeData=ze,i.isDuration=hr,i.monthsShort=No,i.weekdaysMin=Uo,i.defineLocale=zr,i.updateLocale=Ei,i.locales=Di,i.weekdaysShort=Io,i.normalizeUnits=Oe,i.relativeTimeRounding=md,i.relativeTimeThreshold=vd,i.calendarFormat=Fl,i.prototype=P,i.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},i})})(gs);var Ug=gs.exports;const An=Iu(Ug),Gg="_button_8q57x_1",Lg="_cancelButton_8q57x_5",qa={button:Gg,cancelButton:Lg},Yg=(a,o)=>d=>d&&(za(d)(An(a.tom.toString()).subtract(1,"day"))||Wa(d)(a.fom))?o.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,Kg=(a,o)=>{const d=An(a.forstePeriodeTomDato).add(1,"days"),i={fom:o.fom,tom:a.forstePeriodeTomDato},g={fom:d.format(La),tom:o.tom};return{forstePeriode:i,andrePeriode:g}},Cg=({periodeData:a,showModal:o,cancelEvent:d,finnesBelopMed0Verdi:i,splitPeriod:g})=>{const m=ve(),v=Bn();return l.jsx(En,{formMethods:v,onSubmit:k=>g(Kg(k,a)),children:l.jsxs(on,{open:o,"aria-label":m.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:d,width:"medium",children:[l.jsx(on.Header,{children:l.jsx(dn,{size:"small",children:l.jsx(x,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),l.jsxs(on.Body,{children:[l.jsx(be,{size:"small",children:l.jsx(x,{id:"DelOppPeriodeModalImpl.Periode"})}),l.jsx(I,{size:"small",children:`${An(a.fom.toString()).format(ye)} - ${An(a.tom.toString()).format(ye)}`}),l.jsx(F,{sixteenPx:!0}),l.jsx(Ar,{name:"forstePeriodeTomDato",label:l.jsx(x,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[re,Fr,Yg(a,m)],fromDate:An(a.fom).toDate(),toDate:An(a.tom).toDate()}),i&&l.jsx(ct,{variant:"error",children:l.jsx(x,{id:"DelOppPeriodeModalImpl.BelopEr0"})}),l.jsx(F,{sixteenPx:!0})]}),l.jsxs(on.Footer,{children:[l.jsx(Z,{size:"small",variant:"primary",className:qa.button,disabled:!v.formState.isDirty,children:l.jsx(x,{id:"DelOppPeriodeModalImpl.Ok"})}),l.jsx(Z,{size:"small",variant:"secondary",onClick:d,className:qa.cancelButton,type:"button",children:l.jsx(x,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})},Hg="_timeLineButton_wnej3_1",$g="_splitPeriodImage_wnej3_24",zg="_splitPeriodPosition_wnej3_30",Wg="_leftMargin_wnej3_33",Zg="_margin_wnej3_37",Jg="_fix_wnej3_41",ut={timeLineButton:Hg,splitPeriodImage:$g,splitPeriodPosition:zg,leftMargin:Wg,margin:Zg,fix:Jg},Qg=!1,Xg=({setNestePeriode:a,setForrigePeriode:o,readOnly:d,lukkPeriode:i,periode:g,beregnBelop:m,behandlingUuid:v,oppdaterSplittedePerioder:k})=>{const f=ve(),[j,p]=D.useState(!1),[h,c]=D.useState(!1),y=D.useCallback(_=>{p(!0),_.preventDefault()},[p]),M=D.useCallback(()=>{p(!1)},[]),R=_=>{c(!1);const Y={belop:g.feilutbetaling,fom:_.forstePeriode.fom,tom:_.forstePeriode.tom,begrunnelse:g.begrunnelse?g.begrunnelse:" "},H={belop:g.feilutbetaling,fom:_.andrePeriode.fom,tom:_.andrePeriode.tom,begrunnelse:g.begrunnelse?g.begrunnelse:" "};m({behandlingUuid:v,perioder:[Y,H]}).then(E=>{const{perioder:B}=E;if(B.some(J=>J.belop===0))c(!0);else{const J={fom:Y.fom,tom:Y.tom,feilutbetaling:B[0].belop},Pe={fom:H.fom,tom:H.tom,feilutbetaling:B[1].belop};M(),k([J,Pe])}})};return l.jsxs(me,{children:[l.jsxs(be,{size:"small",children:[l.jsx(x,{id:"PeriodeController.Detaljer"}),Qg]}),!d&&l.jsxs(l.Fragment,{children:[l.jsx(On,{}),l.jsx(Z,{className:ut.margin,size:"xsmall",icon:l.jsx(ns,{"aria-hidden":!0}),onClick:y,variant:"tertiary-neutral",type:"button",title:f.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:l.jsx(x,{id:"PeriodeController.DelOppPerioden"})})]}),j&&l.jsx(Cg,{cancelEvent:M,showModal:j,periodeData:g,splitPeriod:R,finnesBelopMed0Verdi:h}),l.jsx(On,{}),l.jsx(Z,{className:ut.margin,size:"xsmall",icon:l.jsx(Er,{"aria-hidden":!0}),onClick:o,variant:"secondary-neutral",type:"button",title:f.formatMessage({id:"PeriodeController.prevPeriod"}),children:l.jsx(x,{id:"PeriodeController.prevPeriodShort"})}),l.jsx(Z,{className:ut.margin,size:"xsmall",icon:l.jsx(Dr,{"aria-hidden":!0}),onClick:a,variant:"secondary-neutral",type:"button",title:f.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:l.jsx(x,{id:"PeriodeController.nextPeriodShort"})}),l.jsx(Z,{size:"xsmall",icon:l.jsx(Ua,{"aria-hidden":!0}),onClick:i,variant:"tertiary-neutral",type:"button",title:f.formatMessage({id:"PeriodeController.LukkPeriode"})})]})},ek="_infoSummary_14r2l_1",nk="_positivNumber_14r2l_8",rk="_redNumber_14r2l_12",tk="_resultName_14r2l_17",zn={infoSummary:ek,positivNumber:nk,redNumber:rk,resultName:tk},ak=({fom:a,tom:o,feilutbetaling:d,arsakHendelseNavn:i})=>{const g=Ga(a,o);return l.jsxs("div",{className:zn.infoSummary,children:[l.jsxs(me,{children:[l.jsx(be,{size:"small",children:`${de(a).format(ye)} - ${de(o).format(ye)}`}),l.jsx(On,{}),l.jsx(I,{size:"small",children:g.formattedString})]}),l.jsx(F,{sixteenPx:!0}),l.jsxs(me,{gap:"4",children:[l.jsxs(I,{size:"small",className:zn.resultName,children:[l.jsx(x,{id:"PeriodeInformasjon.Feilutbetaling"}),":",l.jsx("span",{className:d?zn.redNumber:zn.positivNumber,children:Ae(d)})]}),i&&l.jsx(I,{size:"small",className:zn.resultName,children:i})]})]})};var ks={exports:{}},Wn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa;function sk(){if(Aa)return Wn;Aa=1;var a=Le,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,f,j){var p,h={},c=null,y=null;j!==void 0&&(c=""+j),f.key!==void 0&&(c=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)i.call(f,p)&&!m.hasOwnProperty(p)&&(h[p]=f[p]);if(k&&k.defaultProps)for(p in f=k.defaultProps,f)h[p]===void 0&&(h[p]=f[p]);return{$$typeof:o,type:k,key:c,ref:y,props:h,_owner:g.current}}return Wn.Fragment=d,Wn.jsx=v,Wn.jsxs=v,Wn}ks.exports=sk();var ik=ks.exports;const lk=(a,o,d,i)=>!d||o||!a?!0:!!i,ok=({isReadOnly:a,isSubmittable:o,isSubmitting:d,isDirty:i,text:g,onClick:m,hasErrors:v})=>a?null:ik.jsx(Z,{variant:"primary",size:"small",loading:d,disabled:lk(i,d,o,v),onClick:m,type:m?"button":"submit",children:g||"Bekreft og fortsett"}),ht=(a,o)=>se(a.fom).diff(se(o.fom)),Fa=a=>!a.erForeldet&&(a.begrunnelse===void 0||a.erSplittet),dk=a=>{const o=a[a.valgtVilkarResultatType],d=o[o.handletUaktsomhetGrad];return o.tilbakekrevdBelop?{...a,[a.valgtVilkarResultatType]:{...er(o,"tilbakekrevdBelop")}}:d&&d.belopSomSkalTilbakekreves?{...a,[a.valgtVilkarResultatType]:{...o,[o.handletUaktsomhetGrad]:{...er(d,"belopSomSkalTilbakekreves")}}}:a},uk=(a,o=[])=>o.map((d,i)=>{const g=a.find(k=>k.fom===d.fom&&k.tom===d.tom),m=g&&g[g.valgtVilkarResultatType]?g[g.valgtVilkarResultatType].erBelopetIBehold:void 0,v=g?!!g.erSplittet:!1;return{fom:d.fom,tom:d.tom,isAksjonspunktOpen:!d.erForeldet&&((g==null?void 0:g.begrunnelse)===void 0||v),isGodkjent:!(d.erForeldet||m===!1),id:i}}),ms=(a,o)=>o.find(d=>!se(a.fom).isBefore(se(d.fom))&&!se(a.tom).isAfter(se(d.tom))),gk=(a,o)=>o.every(d=>!(se(a.fom).isSameOrBefore(se(d.tom))&&se(d.fom).isSameOrBefore(se(a.tom)))),kk=(a,o,d)=>{const i=a.reduce((m,v)=>m+v.feilutbetaling,0)<d*4,g=o.vilkarsVurdertePerioder.map(m=>{const v=ms(m,a);return{...v,harMerEnnEnYtelse:v&&v.ytelser.length>1,...er(m,"feilutbetalingBelop"),feilutbetaling:m.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:i}});return{perioder:a.filter(m=>gk(m,g)).map(m=>({...m,harMerEnnEnYtelse:m.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:i})).concat(g)}},mk=(a,o)=>{if(!(!a||!o))return o.map(d=>{const i=ms(d,a.perioder),g=i.foreldelseVurderingType?i.foreldelseVurderingType===en.FORELDET:i.foreldet;return{redusertBeloper:i.redusertBeloper,ytelser:i.ytelser,feilutbetaling:d.feilutbetaling?d.feilutbetaling:i.feilutbetaling,erTotalBelopUnder4Rettsgebyr:i.erTotalBelopUnder4Rettsgebyr,fom:d.fom,tom:d.tom,årsak:i.årsak,begrunnelse:i.begrunnelse,erForeldet:g||!1}})},vk=(a,o)=>a.perioder.map(d=>({...Sg(d,o),fom:d.fom,tom:d.tom})).sort(ht),pk=(a,o)=>({kode:Nr.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:a.filter(d=>!d.erForeldet).map(d=>Rg(d,o))}),hk=a=>{if(!a||a.reduce((d,i)=>i.erForeldet?d:d+1,0)<2)return;const o=a.reduce((d,i)=>{const{valgtVilkarResultatType:g}=i,m=i[g],{handletUaktsomhetGrad:v}=m,k=m[v];return k&&k.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?d+1:d},0);if(o>0&&o!==a.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},yk=({perioderForeldelse:a,kodeverkSamlingFpTilbake:o,submitCallback:d,readOnly:i,alleMerknaderFraBeslutter:g,perioder:m,vilkarvurdering:v,rettsgebyr:k,relasjonsRolleType:f,relasjonsRolleTypeKodeverk:j,beregnBelop:p,behandlingUuid:h,formData:c,setFormData:y})=>{var M;const R=kk(m,v,k),[_,Y]=D.useState(c||vk(R,a)),[H,E]=D.useState(!!c),[B,J]=D.useState(_==null?void 0:_.find(Fa)),[Pe,Ee]=D.useState(!1),[te,rn]=D.useState();D.useEffect(()=>{rn(hk(_))},[_]);const ue=mk(R,_),Ye=i||(B==null?void 0:B.erForeldet)===!0,tn=_.reduce((q,le)=>le.erForeldet?q:q+1,0),pe=g[Nr.VURDER_TILBAKEKREVING],kn=D.useCallback(()=>{Ee(!0),d(pk(_,o[Xn.SARLIG_GRUNN]))},[_]),Se=uk(_,ue),U=Se.some(q=>q.isAksjonspunktOpen),V=B?Se.find(q=>q.fom===B.fom&&q.tom===B.tom):void 0,Q=q=>{const le=q?_.find(je=>je.fom===q.fom&&je.tom===q.tom):void 0;J(le)},$=()=>{const q=_.findIndex(le=>le.fom===(B==null?void 0:B.fom)&&le.tom===(B==null?void 0:B.tom));Q(_[q+1])},X=()=>{const q=_.findIndex(le=>le.fom===(B==null?void 0:B.fom)&&le.tom===(B==null?void 0:B.tom));Q(_[q-1])},ie=()=>{Q(void 0)},we=q=>{const le=er(q,"erSplittet"),je=_.filter(Ue=>Ue.fom!==le.fom&&Ue.tom!==le.tom).concat(le).sort(ht);Y(je),y(je),E(!0),ie();const Ie=je.find(Fa);Ie&&Q(Ie)},Re=q=>{const le=_.find(je=>je.fom===(B==null?void 0:B.fom)&&je.tom===(B==null?void 0:B.tom));if(le){const je=q.map(Ue=>({...dk(le),...Ue,erSplittet:!0})),Ie=_.filter(Ue=>Ue.fom!==(B==null?void 0:B.fom)&&Ue.tom!==(B==null?void 0:B.tom)).concat(je).sort(ht);ie(),E(!0),Y(Ie),y(Ie),Q(je[0])}},Te=ue?ue.find(q=>q.fom===(B==null?void 0:B.fom)&&q.tom===(B==null?void 0:B.tom)):void 0;return l.jsxs(ft,{merknaderFraBeslutter:pe,withoutBorder:!0,children:[l.jsx(dn,{size:"small",children:l.jsx(x,{id:"Behandlingspunkt.Tilbakekreving"})}),l.jsx(F,{twentyPx:!0}),l.jsx(bt,{isAksjonspunktOpen:U,children:[l.jsx(x,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"},"AksjonspunktHjelpetekst")]}),l.jsx(F,{twentyPx:!0}),_&&l.jsxs(l.Fragment,{children:[l.jsx(Vg,{perioder:Se,valgtPeriode:V,setPeriode:Q,relasjonsRolleType:f,relasjonsRolleTypeKodeverk:j}),B&&Te&&l.jsxs("div",{id:"panel-tilbakekreving","aria-controls":V==null?void 0:V.id.toString(),children:[l.jsx("div",{className:wg.space}),l.jsxs(Na,{border:!0,children:[l.jsx(Xg,{setNestePeriode:$,setForrigePeriode:X,periode:Te,readOnly:i,oppdaterSplittedePerioder:Re,behandlingUuid:h,beregnBelop:p,lukkPeriode:ie}),l.jsx(F,{sixteenPx:!0}),l.jsx(ak,{feilutbetaling:Te.feilutbetaling,fom:Te.fom,tom:Te.tom,arsakHendelseNavn:(M=o[Ve.HENDELSE_TYPE].find(q=>{var le;return q.kode===((le=Te.årsak)==null?void 0:le.hendelseType)}))==null?void 0:M.navn}),l.jsx(F,{twentyPx:!0}),l.jsx(Pg,{periode:B,data:Te,antallPerioderMedAksjonspunkt:tn,readOnly:Ye,skjulPeriode:ie,oppdaterPeriode:we,kodeverkSamlingFpTilbake:o,vilkarsVurdertePerioder:_},V==null?void 0:V.id)]})]})]}),l.jsx(F,{twentyPx:!0}),te&&l.jsxs(l.Fragment,{children:[l.jsx(ct,{variant:"error",children:l.jsx(x,{id:te})}),l.jsx(F,{twentyPx:!0})]}),l.jsx(ok,{isReadOnly:Ye,isDirty:H,isSubmittable:!U&&!B&&!te,onClick:kn,isSubmitting:Pe})]})},fk={"Behandlingspunkt.Tilbakekreving":"Tilbakekreving","TilbakekrevingAktivitetTabell.Aktivitet":"Aktivitet","TilbakekrevingAktivitetTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingForm.AksjonspunktHjelpetekst":"Fastsett tilbakekreving etter §22-15. Del opp perioden ved behov for ulik vurdering","TilbakekrevingPeriodeForm.VilkarForTilbakekreving":"Vilkårene for tilbakekreving","TilbakekrevingPeriodeForm.oppfylt":"Er vilkårene for tilbakekreving oppfylt?","TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr":"Totalbeløpet er under 4 rettsgebyr. Dersom 6.ledd skal anvendes for å frafalle tilbakekrevingen, må denne anvendes likt på alle periodene.","TilbakekrevingPeriodeForm.Oppdater":"Oppdater","TilbakekrevingPeriodeForm.Avbryt":"Avbryt","TilbakekrevingPeriodeForm.Vurdering":"Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes","TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst":"Hvilke hendelser har ført til feilutbetalingen og vurder valg av hjemmel","TilbakekrevingPeriodeForm.MaVelgeSarligGrunn":"Du må velge minst en Særlig grunn","TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen":"Beløp kan ikke være større enn feilutbetalingen","TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen":"Beløp må være mindre enn feilutbetalingen","TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling":"Feilutbetalt beløp er redusert med <b>kr. {belop},-</b> på grunn av etterbetaling innen samme periode.","TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"Feilutbetalt beløp er redusert med <b>kr. {belop},-</b> på grunn av trekk.","TilbakekrevingPeriodeForm.Aktsomhet":"Aktsomhet","TilbakekrevingPeriodeForm.VurderingAktsomhet":"Vurder hvorfor mottaker burde forstått, må ha forstått eller forsto at utbetalingen skyldtes en feil","TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"Beløpet mottatt i god tro","TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"Begrunn hvorfor mottaker er i god tro","TilbakekrevingPeriodeForm.KopierVilkårsvurdering":"Kopier vilkårsvurdering fra","AktsomhetGradForsettFormPanel.Andel":"Andel som skal tilbakekreves","AktsomhetGradForsettFormPanel.Renter":"Det legges til 10 % renter","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves":"Angi andel som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves":"Andel som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter":"Skal det tillegges renter?","AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"Beløp som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves":"Angi beløp som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon":"Skal særlige grunner gi reduksjon av beløpet?","AktsomhetReduksjonAvBelopFormPanel.Nei":"Nei","AktsomhetReduksjonAvBelopFormPanel.Ja":"Ja","AktsomhetFormPanel.HandletUaktsomhetGrad":"I hvilken grad burde mottaker forstått at utbetalingen skyldtes en feil","AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom":"Burde ha forstått","AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt":"Må ha forstått","AktsomhetFormPanel.AktsomhetTyperLabel.Forsett":"Forsto","AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt":"Når 6. ledd anvendes må alle perioder behandles likt","AktsomhetGradUaktsomhetFormPanel.Nei":"Nei","AktsomhetGradUaktsomhetFormPanel.Ja":"Ja","AktsomhetGradUaktsomhetFormPanel.Tilbakekrev":"Totalbeløpet er under 4 rettsgebyr (6. ledd). Skal det tilbakekreves?","AktsomhetGradUaktsomhetFormPanel.SærligGrunner":"Særlige grunner 4. ledd","AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner":"Vurder særlige grunner du har vektlagt for resultatet","AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst":"Begrunn om det foreligger/ ikke foreligger særlige grunner for reduksjon av beløpet som kreves tilbake. Kryss av hvilke særlige grunner som er vektlagt for resultatet","AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon":"Særlige grunner som er vektlagt (4.ledd)","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","BelopetMottattIGodTroFormPanel.Vurdering":"Vurdering","BelopetMottattIGodTroFormPanel.BelopetIBehold":"Er beløpet i behold?","BelopetMottattIGodTroFormPanel.Ja":"Ja","BelopetMottattIGodTroFormPanel.Nei":"Nei","BelopetMottattIGodTroFormPanel.AngiBelop":"Angi beløp som skal tilbakekreves","BelopetMottattIGodTroFormPanel.IngenTilbakekreving":"Ingen tilbakekreving","SubmitButton.ConfirmInformation":"Bekreft og fortsett","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},bk=Or(fk),ck=({behandling:a,perioderForeldelse:o,vilkarvurderingsperioder:d,vilkarvurdering:i,beregnBelop:g,kodeverkSamlingFpTilbake:m,submitCallback:v,alleMerknaderFraBeslutter:k,isReadOnly:f,formData:j,setFormData:p,relasjonsRolleType:h,relasjonsRolleTypeKodeverk:c})=>l.jsx(Br,{value:bk,children:l.jsx(yk,{behandlingUuid:a.uuid,perioderForeldelse:o,perioder:d.perioder,rettsgebyr:d.rettsgebyr,vilkarvurdering:i,submitCallback:v,readOnly:f,relasjonsRolleType:h,relasjonsRolleTypeKodeverk:c,alleMerknaderFraBeslutter:k,kodeverkSamlingFpTilbake:m,beregnBelop:g,formData:j,setFormData:p})}),Tk=[Nr.VURDER_TILBAKEKREVING],jk=[Fe.VILKARVURDERINGSPERIODER,Fe.VILKARVURDERING,Fe.PERIODER_FORELDELSE],_k=a=>a.length>0?a.some(o=>yd(o.status))?Xe.IKKE_VURDERT:Xe.OPPFYLT:Xe.IKKE_VURDERT,vs=({...a})=>{const o=ve(),{startRequest:d}=jt.useRestApiRunner(Fe.BEREGNE_BELØP);return z.jsx(xt,{...a,panelEndepunkter:jk,aksjonspunktKoder:Tk,prosessPanelKode:_t.TILBAKEKREVING,prosessPanelMenyTekst:o.formatMessage({id:"Behandlingspunkt.Tilbakekreving"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:i=>_k(i.aksjonspunkter),renderPanel:i=>z.jsx(ck,{kodeverkSamlingFpTilbake:a.tilbakekrevingKodeverk,beregnBelop:d,relasjonsRolleType:a.relasjonsRolleType,relasjonsRolleTypeKodeverk:i.alleKodeverk[Ja.RELASJONSROLLE_TYPE],...i})})};vs.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessInitPanel",props:{relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"tilbakekrevingKodeverkTyper"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<tilbakekrevingKodeverkTyper, KodeverkMedNavn[]>"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Pt=(a=>(a.FORESLA_VEDTAK="5004",a))(Pt||{}),ps={exports:{}},Zn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa;function xk(){if(wa)return Zn;wa=1;var a=Le,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,f,j){var p,h={},c=null,y=null;j!==void 0&&(c=""+j),f.key!==void 0&&(c=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)i.call(f,p)&&!m.hasOwnProperty(p)&&(h[p]=f[p]);if(k&&k.defaultProps)for(p in f=k.defaultProps,f)h[p]===void 0&&(h[p]=f[p]);return{$$typeof:o,type:k,key:c,ref:y,props:h,_owner:g.current}}return Zn.Fragment=d,Zn.jsx=v,Zn.jsxs=v,Zn}ps.exports=xk();var S=ps.exports;const Pk="_table_gko8z_1",Sk={table:Pk},Rk=["TilbakekrevingVedtakPeriodeTabell.Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop","TilbakekrevingVedtakPeriodeTabell.Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop","TilbakekrevingVedtakPeriodeTabell.Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves"],qk=({perioder:a,kodeverkSamlingFpTilbake:o})=>{const d=a.map(i=>{var g;return S.jsxs(qr,{children:[S.jsx(ke,{children:S.jsx(I,{size:"small",children:S.jsx(cd,{dateStringFom:i.periode.fom,dateStringTom:i.periode.tom})})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:Ae(i.feilutbetaltBeløp)})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:(g=o[Ve.AKTSOMHET].find(m=>m.kode===i.vurdering))==null?void 0:g.navn})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:i.andelAvBeløp!==void 0&&i.andelAvBeløp!==null?`${i.andelAvBeløp}%`:""})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:i.renterProsent?`${i.renterProsent}%`:""})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:Ae(i.tilbakekrevingBeløp)})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:Ae(i.tilbakekrevingBeløpEtterSkatt)})})]},i.periode.fom)}).concat(S.jsxs(qr,{children:[S.jsx(ke,{children:S.jsx(I,{size:"small",children:S.jsx(x,{id:"TilbakekrevingVedtakPeriodeTabell.Sum"})})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:Ae(a.reduce((i,g)=>i+g.feilutbetaltBeløp,0))})}),S.jsx(ke,{}),S.jsx(ke,{}),S.jsx(ke,{}),S.jsx(ke,{children:S.jsx(be,{size:"small",children:Ae(a.reduce((i,g)=>i+g.tilbakekrevingBeløp,0))})}),S.jsx(ke,{children:S.jsx(be,{size:"small",children:Ae(a.reduce((i,g)=>i+g.tilbakekrevingBeløpEtterSkatt,0))})})]},"sum"));return S.jsx("div",{className:Sk.table,children:S.jsx(Tt,{noHover:!0,headerTextCodes:Rk,children:d})})},Ak=(a,o,d,i)=>!d||o||!a?!0:!!i,Fk=({isReadOnly:a,isSubmittable:o,isSubmitting:d,isDirty:i,text:g,onClick:m,hasErrors:v})=>a?null:S.jsx(Z,{variant:"primary",size:"small",loading:d,disabled:Ak(i,d,o,v),onClick:m,type:m?"button":"submit",children:g||"Bekreft og fortsett"}),xe={OPPSUMMERING:"OPPSUMMERING",FAKTA:"FAKTA",FORELDELSE:"FORELDELSE",VILKAR:"VILKÅR",SARLIGEGRUNNER:"SÆRLIGEGRUNNER",SARLIGEGRUNNER_ANNET:"SÆRLIGEGRUNNER_ANNET"},wk="_addCircleIcon_84ecs_1",Ok="_imageText_84ecs_7",Bk="_addPeriode_84ecs_12",gt={addCircleIcon:wk,imageText:Ok,addPeriode:Bk},hs=Dn(3),Ek=bn(4e3),Dk=[hs,gn],Mk=[re,hs,gn],Nk=({type:a,readOnly:o,fritekstPakrevet:d,maximumLength:i})=>{const g=ve(),{watch:m}=rr(),v=m(a)===void 0,[k,f]=D.useState(v&&!d),j=d?Mk:Dk;return j.push(i?bn(i):Ek),S.jsxs(S.Fragment,{children:[k&&!o&&S.jsxs(S.Fragment,{children:[S.jsx(F,{eightPx:!0}),S.jsxs("div",{onClick:p=>{p.preventDefault(),f(!1)},onKeyDown:p=>{p.preventDefault(),f(!1)},className:gt.addPeriode,role:"button",tabIndex:0,children:[S.jsx(Bd,{className:gt.addCircleIcon,title:g.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})}),S.jsx(_e,{size:"small",className:gt.imageText,children:S.jsx(x,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})})]})]}),!k&&S.jsxs(S.Fragment,{children:[S.jsx(F,{eightPx:!0}),S.jsx(un,{name:a,label:g.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst"}),validate:j,maxLength:i||4e3,readOnly:o})]})]})},Vk="_container_aetpe_1",Ik="_gulmarkering_aetpe_4",Oa={container:Vk,gulmarkering:Ik},yt=({intl:a,vedtaksbrevAvsnitt:o,readOnly:d,perioderSomIkkeHarUtfyltObligatoriskVerdi:i,fritekstOppsummeringPakrevdMenIkkeUtfylt:g=!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:m})=>S.jsxs("div",{className:Oa.container,children:[S.jsx(F,{twentyPx:!0}),S.jsx(dn,{size:"small",children:S.jsx(x,{id:"TilbakekrevingVedtak.Vedtaksbrev"})}),S.jsx(F,{eightPx:!0}),o.map(v=>{const k=v.underavsnittsliste,f=`${v.fom}_${v.tom}`,j=i.some(h=>h===f),p=v.avsnittstype===xe.OPPSUMMERING&&g;return S.jsxs(Le.Fragment,{children:[S.jsxs(_r,{"aria-label":"periode",defaultOpen:j||p,className:j||p?Oa.gulmarkering:"",children:[S.jsx(_r.Header,{children:S.jsx(_r.Title,{size:"small",children:v.overskrift?v.overskrift:a.formatMessage({id:"TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift"})})}),S.jsx(_r.Content,{children:k.map(h=>S.jsxs(Le.Fragment,{children:[h.overskrift&&S.jsx(be,{size:"small",children:h.overskrift}),h.brødtekst&&S.jsx(I,{size:"small",children:h.brødtekst}),h.fritekstTillatt&&S.jsxs(S.Fragment,{children:[S.jsx(F,{eightPx:!0}),S.jsx(Nk,{type:h.underavsnittstype?`${f}.${h.underavsnittstype}`:v.avsnittstype,readOnly:d,fritekstPakrevet:h.fritekstPåkrevet,maximumLength:m?1e4:void 0})]}),S.jsx(F,{eightPx:!0})]},(h.underavsnittstype||"")+h.overskrift+h.brødtekst))})]}),S.jsx(F,{eightPx:!0})]},v.avsnittstype+v.fom)})]});yt.buildInitialValues=a=>a.filter(o=>o.underavsnittsliste.some(d=>d.fritekst)).reduce((o,d)=>{const i=d.underavsnittsliste.filter(m=>m.fritekst).reduce((m,v)=>({...m,[v.underavsnittstype?v.underavsnittstype:d.avsnittstype]:yn(v.fritekst)}),{}),g=d.fom?{[`${d.fom}_${d.tom}`]:i}:i;return{...o,...g}},{});const Uk="_buttonLink_sudxz_1",Gk="_padding_sudxz_8",Lk="_infoTextContainer_sudxz_11",Yk="_infoTextIconColumn_sudxz_14",Kk="_infoTextIcon_sudxz_14",Ck="_infotextColumn_sudxz_26",kt={buttonLink:Uk,padding:Gk,infoTextContainer:Lk,infoTextIconColumn:Yk,infoTextIcon:Kk,infotextColumn:Ck},ys=a=>{const o=qd(a,xe.OPPSUMMERING);return{oppsummeringstekst:a[xe.OPPSUMMERING],perioderMedTekst:Object.keys(o).map(d=>({fom:d.split("_")[0],tom:d.split("_")[1],faktaAvsnitt:o[d][xe.FAKTA],foreldelseAvsnitt:o[d][xe.FORELDELSE],vilkaarAvsnitt:o[d][xe.VILKAR],saerligeGrunnerAvsnitt:o[d][xe.SARLIGEGRUNNER],saerligeGrunnerAnnetAvsnitt:o[d][xe.SARLIGEGRUNNER_ANNET]}))}},Hk=(a,o)=>a.some(d=>d.avsnittstype===xe.OPPSUMMERING&&d.underavsnittsliste.some(i=>i.fritekstPåkrevet)&&!o[xe.OPPSUMMERING]),$k=a=>({kode:Pt.FORESLA_VEDTAK,...ys(a)}),zk=(a,o)=>a.reduce((d,i)=>{const g=`${i.fom}_${i.tom}`,m=o[g];return i.underavsnittsliste.some(v=>v.fritekstPåkrevet&&v.underavsnittstype===xe.FAKTA)&&(!m||!m[xe.FAKTA])||i.underavsnittsliste.some(v=>v.fritekstPåkrevet&&v.underavsnittstype===xe.SARLIGEGRUNNER_ANNET)&&(!m||!m[xe.SARLIGEGRUNNER_ANNET])?d.concat(g):d},[]),Ba=(a,o,d)=>i=>{a({uuid:o,...ys(d)}),i.preventDefault()},Wk=({submitCallback:a,readOnly:o,fetchPreviewVedtaksbrev:d,avsnittsliste:i,behandlingUuid:g,erRevurderingTilbakekrevingKlage:m,erRevurderingTilbakekrevingFeilBeløpBortfalt:v,formData:k,setFormData:f})=>{const j=i,p=D.useMemo(()=>k||yt.buildInitialValues(j),[k,j]),h=ve(),c=Bn({defaultValues:p}),y=c.watch(),M=Hk(j,y),R=zk(j,y),_=M||R.length>0;return S.jsxs(En,{formMethods:c,onSubmit:Y=>a($k(Y)),setDataOnUnmount:f,children:[S.jsx(F,{twentyPx:!0}),S.jsx(yt,{intl:h,vedtaksbrevAvsnitt:j,readOnly:o,perioderSomIkkeHarUtfyltObligatoriskVerdi:D.useMemo(()=>R,[]),fritekstOppsummeringPakrevdMenIkkeUtfylt:M,erRevurderingTilbakekrevingFeilBeløpBortfalt:v}),S.jsx(F,{twentyPx:!0}),S.jsxs(me,{gap:"10",children:[S.jsx(Fk,{text:h.formatMessage({id:"TilbakekrevingVedtakForm.TilGodkjenning"}),isReadOnly:o,isSubmittable:R.length===0&&!M,isSubmitting:c.formState.isSubmitting,isDirty:c.formState.isDirty,hasErrors:_}),R.length===0&&S.jsx("div",{className:kt.padding,children:S.jsx("a",{href:"",onClick:Ba(d,g,y),onKeyDown:Y=>Y.key==="Enter"?Ba(d,g,y)(Y):null,className:Id(kt.buttonLink,"lenke lenke--frittstaende"),children:S.jsx(x,{id:"TilbakekrevingVedtakForm.ForhandvisBrev"})})})]}),S.jsx(F,{sixteenPx:!0}),m&&S.jsxs(me,{children:[S.jsx(Td,{className:kt.infoTextIcon}),S.jsx(x,{id:"TilbakekrevingVedtakForm.Infotekst.Klage"})]})]})},Zk=({submitCallback:a,readOnly:o,resultat:d,perioder:i,kodeverkSamlingFpTilbake:g,behandlingUuid:m,avsnittsliste:v,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:f,erRevurderingTilbakekrevingFeilBeløpBortfalt:j,formData:p,setFormData:h})=>{var c;return S.jsxs(S.Fragment,{children:[S.jsx(dn,{size:"small",children:S.jsx(x,{id:"TilbakekrevingVedtak.Vedtak"})}),S.jsx(F,{twentyPx:!0}),S.jsx(_e,{children:S.jsx(x,{id:"TilbakekrevingVedtak.Resultat"})}),S.jsx(I,{size:"small",children:(c=g[Ve.VEDTAK_RESULTAT_TYPE].find(y=>y.kode===d))==null?void 0:c.navn}),S.jsx(F,{sixteenPx:!0}),S.jsx(qk,{perioder:i,kodeverkSamlingFpTilbake:g}),S.jsx(F,{sixteenPx:!0}),S.jsx(Wk,{submitCallback:a,readOnly:o,behandlingUuid:m,avsnittsliste:v,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:f,erRevurderingTilbakekrevingFeilBeløpBortfalt:j,formData:p,setFormData:h})]})},Jk={"TilbakekrevingVedtak.Resultat":"Resultat","TilbakekrevingVedtak.Vedtaksbrev":"Vedtaksbrev","TilbakekrevingVedtak.Vedtak":"Vedtak","TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst":"Legg til utdypende tekst","TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst":"Utdypende tekst","TilbakekrevingVedtakPeriodeTabell.Periode":"Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingVedtakPeriodeTabell.Vurdering":"Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop":"Andel av beløp","TilbakekrevingVedtakPeriodeTabell.Renter":"Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt":"Beløp før skatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves":"Beløp etter skatt","TilbakekrevingVedtakPeriodeTabell.Sum":"Sum","TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift":"Lovhjemler og klagerett","TilbakekrevingVedtakForm.TilGodkjenning":"Til godkjenning","TilbakekrevingVedtakForm.ForhandvisBrev":"Forhåndsvis brev","TilbakekrevingVedtakForm.Infotekst.Klage":"Vedtaksbrev sendes ikke ut fra denne behandlingen, men må sendes av saksbehandler fra klagebehandlingen"},Qk=Or(Jk),Xk=({behandling:a,beregningsresultat:o,isReadOnly:d,submitCallback:i,kodeverkSamlingFpTilbake:g,formData:m,setFormData:v,vedtaksbrev:k,fetchPreviewVedtaksbrev:f,erRevurderingTilbakekrevingKlage:j,erRevurderingTilbakekrevingFeilBeløpBortfalt:p})=>S.jsx(Br,{value:Qk,children:S.jsx(Zk,{behandlingUuid:a.uuid,perioder:o.beregningResultatPerioder,resultat:o.vedtakResultatType,avsnittsliste:k.avsnittsliste,submitCallback:i,readOnly:d,kodeverkSamlingFpTilbake:g,fetchPreviewVedtaksbrev:f,erRevurderingTilbakekrevingKlage:j,erRevurderingTilbakekrevingFeilBeløpBortfalt:p,formData:m,setFormData:v})}),em=[Pt.FORESLA_VEDTAK],nm=[Fe.VEDTAKSBREV,Fe.BEREGNINGSRESULTAT],rm=[mt.RE_KLAGE_KA,mt.RE_KLAGE_NFP],tm=a=>!!a&&rm.some(o=>o===a),am=a=>{if(!a)return Xe.IKKE_VURDERT;const{type:o}=a;return o===ot.INGEN_TILBAKEBETALING?Xe.IKKE_OPPFYLT:o===ot.DELVIS_TILBAKEBETALING||o===ot.FULL_TILBAKEBETALING?Xe.OPPFYLT:Xe.IKKE_VURDERT},sm=a=>()=>()=>{a(!0)},fs=({tilbakekrevingKodeverk:a,opneSokeside:o,harApenRevurdering:d,...i})=>{const g=ve(),[m,v]=D.useState(d),k=D.useCallback(()=>v(!1),[]),[f,j]=D.useState(!1),p=sm(j),{startRequest:h}=jt.useRestApiRunner(Fe.PREVIEW_VEDTAKSBREV),c=D.useCallback(_=>h(_).then(Ad),[]),{behandling:y}=i,M=y.førsteÅrsak&&tm(y.førsteÅrsak.behandlingArsakType),R=y.førsteÅrsak&&mt.RE_FEILUTBETALT_BELØP_REDUSERT===y.førsteÅrsak.behandlingArsakType;return z.jsxs(z.Fragment,{children:[z.jsx(Ud,{visModal:f,lukkModal:()=>{j(!1),o()},tekst:g.formatMessage({id:"FatterTilbakekrevingVedtakStatusModal.Sendt"})}),m&&z.jsx(Ia,{headerText:g.formatMessage({id:"BehandlingTilbakekrevingIndex.ApenRevurderingHeader"}),bodyText:g.formatMessage({id:"BehandlingTilbakekrevingIndex.ApenRevurdering"}),showModal:!0,submit:k}),z.jsx(xt,{...i,panelEndepunkter:nm,aksjonspunktKoder:em,prosessPanelKode:_t.VEDTAK,prosessPanelMenyTekst:g.formatMessage({id:"Behandlingspunkt.Vedtak"}),skalPanelVisesIMeny:()=>!0,lagringSideEffekter:p,hentOverstyrtStatus:_=>am(_.behandling.behandlingsresultat),renderPanel:_=>z.jsx(Xk,{kodeverkSamlingFpTilbake:a,fetchPreviewVedtaksbrev:c,erRevurderingTilbakekrevingKlage:M||!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:R||!1,..._})})]})};fs.__docgenInfo={description:"",methods:[],displayName:"VedtakTilbakekrevingProsessInitPanel",props:{tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"tilbakekrevingKodeverkTyper"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<tilbakekrevingKodeverkTyper, KodeverkMedNavn[]>"},description:""},opneSokeside:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},harApenRevurdering:{required:!0,tsType:{name:"boolean"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Vr=(a=>(a.AVKLAR_FAKTA_FOR_FEILUTBETALING="7003",a))(Vr||{}),bs={exports:{}},Jn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea;function im(){if(Ea)return Jn;Ea=1;var a=Le,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,f,j){var p,h={},c=null,y=null;j!==void 0&&(c=""+j),f.key!==void 0&&(c=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)i.call(f,p)&&!m.hasOwnProperty(p)&&(h[p]=f[p]);if(k&&k.defaultProps)for(p in f=k.defaultProps,f)h[p]===void 0&&(h[p]=f[p]);return{$$typeof:o,type:k,key:c,ref:y,props:h,_owner:g.current}}return Jn.Fragment=d,Jn.jsx=v,Jn.jsxs=v,Jn}bs.exports=im();var A=bs.exports;const lm="_feilutbetalingTable_1bepb_1",om="_redText_1bepb_8",Da={feilutbetalingTable:lm,redText:om},hn="perioder",dm=["FeilutbetalingInfoPanel.Period","FeilutbetalingInfoPanel.Hendelse","FeilutbetalingInfoPanel.Beløp"],um=(a,o)=>{const d=a.find(i=>i.hendelseType===o);return d!=null&&d.hendelseUndertyper&&d.hendelseUndertyper.length>0?d.hendelseUndertyper:void 0},gm=({perioder:a,årsaker:o,readOnly:d,behandlePerioderSamlet:i,kodeverkSamlingFpTilbake:g})=>{const{control:m,watch:v,setValue:k,getValues:f}=rr(),{fields:j}=Ed({control:m,name:hn}),p=(h,c,y)=>{i&&j.forEach((M,R)=>{c!==R&&(y?f(`${hn}.${R}.årsak`)===y&&k(`${hn}.${R}.${y}.underÅrsak`,h):k(`${hn}.${R}.årsak`,h))})};return A.jsx("div",{className:Da.feilutbetalingTable,children:A.jsx(Tt,{headerTextCodes:dm,noHover:!0,children:j.map((h,c)=>{const y=v(`${hn}.${c}.årsak`),M=um(o,y);return A.jsxs(qr,{children:[A.jsx(ke,{children:`${se(h.fom).format(ye)} - ${se(h.tom).format(ye)}`}),A.jsxs(ke,{children:[A.jsx(wr,{name:`${hn}.${c}.årsak`,selectValues:o.map(R=>{var _;return A.jsx("option",{value:R.hendelseType,children:(_=g[Ve.HENDELSE_TYPE].find(Y=>Y.kode===R.hendelseType))==null?void 0:_.navn},R.hendelseType)}),validate:[re],disabled:d,onChange:R=>p(R.target.value,c),label:""}),M&&A.jsx(wr,{name:`${hn}.${c}.${y}.underÅrsak`,selectValues:M.map(R=>{var _;return A.jsx("option",{value:R,children:(_=g[Ve.HENDELSE_UNDERTYPE].find(Y=>Y.kode===R))==null?void 0:_.navn},R)}),validate:[re],disabled:d,onChange:R=>p(R.target.value,c,y),label:""})]}),A.jsx(ke,{className:Da.redText,children:a?a[c].belop:null})]},h.id)})})})},km="_textarea_14pq5_1",mm="_textPadding_14pq5_4",vm="_redText_14pq5_7",Ma={textarea:km,textPadding:mm,redText:vm},pm=Dn(3),hm=bn(1500),cs=a=>a.behandlingFakta.perioder?[...a.behandlingFakta.perioder].sort((o,d)=>se(o.fom).diff(se(d.fom))):[],ym=a=>{const{behandlingFakta:{begrunnelse:o}}=a;return{begrunnelse:yn(o),perioder:cs(a).map(d=>{const{fom:i,tom:g,feilutbetalingÅrsakDto:m}=d,v={fom:i,tom:g};if(!m)return v;const{hendelseType:k,hendelseUndertype:f}=m;return{...v,årsak:k,[k]:{underÅrsak:f||null}}})}},fm=(a,o)=>{const d=a.perioder.map(i=>{const g=o.find(v=>v.hendelseType===i.årsak),m=g!=null&&g.hendelseUndertyper?g.hendelseUndertyper.find(v=>{var k;return v===((k=i[i.årsak])==null?void 0:k.underÅrsak)}):void 0;return{fom:i.fom,tom:i.tom,årsak:{hendelseType:g==null?void 0:g.hendelseType,hendelseUndertype:m}}});return{kode:Vr.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:a.begrunnelse,feilutbetalingFakta:d}},bm=(a,o)=>{const{hendelseTyper:d}=a;return d.sort((i,g)=>{var m,v;const k=((m=o[Ve.HENDELSE_TYPE].find(y=>y.kode===i.hendelseType))==null?void 0:m.navn)||"",f=((v=o[Ve.HENDELSE_TYPE].find(y=>y.kode===g.hendelseType))==null?void 0:v.navn)||"",j=k.startsWith("§"),p=f.startsWith("§"),h=j?k.replace(/\D/g,""):k,c=p?f.replace(/\D/g,""):f;return j&&p?h-c:h.localeCompare(c)})},cm=({hasOpenAksjonspunkter:a,feilutbetalingAarsak:o,feilutbetalingFakta:d,readOnly:i,alleMerknaderFraBeslutter:g,kodeverkSamlingFpTilbake:m,kodeverkSamlingFpsak:v,formData:k,setFormData:f,submitCallback:j})=>{var p,h;const c=ve(),y=d.behandlingFakta,M=ym(d),R=Bn({defaultValues:k||M}),_=R.watch("behandlePerioderSamlet")||!1,Y=bm(o,m);return A.jsxs(A.Fragment,{children:[A.jsx(bt,{isAksjonspunktOpen:a,children:[A.jsx(x,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"},"1")]}),A.jsx(F,{sixteenPx:!0}),A.jsxs(En,{formMethods:R,onSubmit:H=>j(fm(H,Y)),setDataOnUnmount:f,children:[A.jsxs(me,{gap:"10",wrap:!0,children:[A.jsxs("div",{children:[A.jsx(be,{size:"small",children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),A.jsx(F,{sixteenPx:!0}),A.jsxs(me,{justify:"space-between",children:[A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),A.jsx(I,{size:"small",children:`${se(y.totalPeriodeFom).format(ye)} - ${se(y.totalPeriodeTom).format(ye)}`})]}),A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),A.jsx(I,{size:"small",className:Ma.redText,children:y.aktuellFeilUtbetaltBeløp})]}),A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),A.jsx(I,{size:"small",children:y.tidligereVarseltBeløp?y.tidligereVarseltBeløp:A.jsx(x,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),A.jsx(F,{sixteenPx:!0}),A.jsx(Xa,{name:"behandlePerioderSamlet",label:c.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:i}),A.jsx(F,{sixteenPx:!0}),A.jsx(ft,{merknaderFraBeslutter:g[Vr.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:A.jsx(gm,{perioder:cs(d),behandlePerioderSamlet:_,årsaker:Y,readOnly:i,kodeverkSamlingFpTilbake:m})})]}),A.jsxs("div",{children:[A.jsx(be,{size:"small",children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Revurdering"})}),A.jsx(F,{sixteenPx:!0}),A.jsxs(me,{gap:"4",children:[A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Årsaker"})}),y.behandlingÅrsaker&&A.jsx(I,{size:"small",children:y.behandlingÅrsaker.map(H=>{var E;return(E=v[Ve.BEHANDLING_AARSAK].find(B=>B.kode===H.behandlingArsakType))==null?void 0:E.navn}).join(", ")})]}),y.datoForRevurderingsvedtak&&A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),A.jsx(I,{size:"small",children:se(y.datoForRevurderingsvedtak).format(ye)})]})]}),A.jsx(F,{sixteenPx:!0}),A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Resultat"})}),y.behandlingsresultat&&A.jsx(I,{size:"small",children:(p=v[Ve.BEHANDLING_AARSAK].find(H=>{var E;return H.kode===((E=y.behandlingsresultat)==null?void 0:E.type)}))==null?void 0:p.navn}),A.jsx(F,{sixteenPx:!0}),A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),y.behandlingsresultat&&A.jsx(I,{size:"small",children:y.behandlingsresultat.konsekvenserForYtelsen.map(H=>{var E;return(E=v[Ve.KONSEKVENS_FOR_YTELSEN].find(B=>B.kode===H))==null?void 0:E.navn}).join(", ")}),A.jsx(F,{sixteenPx:!0}),A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),y.tilbakekrevingValg&&A.jsx(I,{size:"small",children:(h=m[Ve.TILBAKEKR_VIDERE_BEH].find(H=>{var E;return H.kode===((E=y.tilbakekrevingValg)==null?void 0:E.videreBehandling)}))==null?void 0:h.navn})]})]}),A.jsx(F,{sixteenPx:!0}),A.jsx("div",{className:Ma.textarea,children:A.jsx(un,{name:"begrunnelse",label:c.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[re,pm,hm,gn],maxLength:1500,readOnly:i})}),A.jsx(F,{sixteenPx:!0}),A.jsx(Z,{variant:"primary",size:"small",disabled:i||!R.formState.isDirty||R.formState.isSubmitting,loading:R.formState.isSubmitting,children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Confirm"})})]})]})},Tm={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},jm=Or(Tm),_m=({feilutbetalingFakta:a,feilutbetalingAarsak:o,fagsakYtelseTypeKode:d,isAksjonspunktOpen:i,isReadOnly:g,kodeverkSamlingFpsak:m,kodeverkSamlingFpTilbake:v,alleMerknaderFraBeslutter:k,submitCallback:f,formData:j,setFormData:p})=>{const h=o.find(c=>c.ytelseType===d);if(!h)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${d}`);return A.jsx(Br,{value:jm,children:A.jsx(cm,{feilutbetalingFakta:a,feilutbetalingAarsak:h,alleMerknaderFraBeslutter:k,kodeverkSamlingFpTilbake:v,kodeverkSamlingFpsak:m,submitCallback:f,readOnly:g,hasOpenAksjonspunkter:i,formData:j,setFormData:p})})},xm=[Vr.AVKLAR_FAKTA_FOR_FEILUTBETALING],Pm=[Fe.FEILUTBETALING_FAKTA,Fe.FEILUTBETALING_AARSAK],Ts=({behandling:a,valgtFaktaSteg:o,registrerFaktaPanel:d,tilbakekrevingKodeverk:i,fagsakYtelseTypeKode:g})=>z.jsx(_d,{behandling:a,valgtFaktaSteg:o,registrerFaktaPanel:d,panelEndepunkter:Pm,aksjonspunktKoder:xm,faktaPanelKode:Dd.FEILUTBETALING,faktaPanelMenyTekst:ve().formatMessage({id:"TilbakekrevingFakta.FaktaFeilutbetaling"}),skalPanelVisesIMeny:()=>Za.hasPath(Fe.FEILUTBETALING_FAKTA.name),renderPanel:m=>z.jsx(_m,{fagsakYtelseTypeKode:g,kodeverkSamlingFpTilbake:i,kodeverkSamlingFpsak:m.alleKodeverk,isAksjonspunktOpen:m.harApneAksjonspunkter,isReadOnly:m.readOnly,...m})});Ts.__docgenInfo={description:"FeilutbetalingFaktaInitPanel",methods:[],displayName:"FeilutbetalingFaktaInitPanel",props:{valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"tilbakekrevingKodeverkTyper"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<tilbakekrevingKodeverkTyper, KodeverkMedNavn[]>"},description:""},fagsakYtelseTypeKode:{required:!0,tsType:{name:"string"},description:""}}};const Sm=({behandling:a,fagsak:o,valgtProsessSteg:d,valgtFaktaSteg:i,oppdaterProsessStegOgFaktaPanelIUrl:g,opneSokeside:m,alleBehandlinger:v})=>{const{data:k}=Md.useRestApi(Nd.KODEVERK_FPTILBAKE),j=D.useMemo(()=>v.filter(c=>!c.behandlingHenlagt).map(c=>{var y;return{uuid:c.uuid,type:c.type,status:c.status,opprettet:c.opprettet,avsluttet:c.avsluttet,resultatType:(y=c.behandlingsresultat)==null?void 0:y.type}}),[v]).some(c=>c.type===fd.REVURDERING&&c.status!==bd.AVSLUTTET),p=D.useCallback(c=>k?z.jsxs(z.Fragment,{children:[z.jsx(Ts,{tilbakekrevingKodeverk:k,fagsakYtelseTypeKode:o.fagsakYtelseType,...c}),z.jsx(xd,{...c})]}):z.jsx(z.Fragment,{children:"placeholder"}),[k,o]),h=D.useCallback(c=>k?z.jsxs(z.Fragment,{children:[z.jsx(ls,{...c,relasjonsRolleType:o.relasjonsRolleType,tilbakekrevingKodeverk:k}),z.jsx(vs,{...c,relasjonsRolleType:o.relasjonsRolleType,tilbakekrevingKodeverk:k}),z.jsx(fs,{...c,harApenRevurdering:j,opneSokeside:m,tilbakekrevingKodeverk:k})]}):z.jsx(z.Fragment,{children:"placeholder"}),[k,j,o,m,g]);return k?z.jsxs(z.Fragment,{children:[z.jsx(Vd,{behandling:a,opneSokeside:m,kodeverk:k,erTilbakekreving:!0},a.versjon),z.jsx(Pd,{behandling:a,valgtProsessSteg:d,valgtFaktaSteg:i,oppdaterProsessStegOgFaktaPanelIUrl:g,hentFaktaPaneler:p,hentProsessPaneler:h})]}):z.jsx(jd,{})};Sm.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPaneler",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},oppdaterProsessStegOgFaktaPanelIUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(punktnavn?: string, faktanavn?: string) => void",signature:{arguments:[{type:{name:"string"},name:"punktnavn"},{type:{name:"string"},name:"faktanavn"}],return:{name:"void"}}},description:""},opneSokeside:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};export{Sm as default};
