import{j as z}from"./jsx-runtime-qGIIFXMu.js";import{R as on,r as D}from"./index-CDs2tPxN.js";import{H as gd,m as Xe,S as Jn,h as Fn,x as Qe,I as Ne,E as kd,X as gt,Y as md,b as vd}from"./index.es-zhgnUGpN.js";import{U as ht,M as x,y as F,c as yt,P as Ea,d as Da,A as ft,X as pa,J as Ma,e as bt,x as Sr,f as me,O as fn,z as pd,S as hd,F as yd}from"./index.es-B7i7KCiU.js";import{F as fd,V as bd}from"./VergeFaktaInitPanel-BO2-F7XV.js";import{B as cd}from"./BehandlingContainer-BRIcWlPf.js";import{t as Fr,P as wr,f as Qn,H as dn,B as I,a as ie,b as ve,e as Td,V as ue,c as Z,L as be,g as Va,h as Na,R as ye,i as Ae,G as yn,M as ln,A as Ia,D as _e,C as Ua,E as jd,j as _d,x as xd}from"./index.es-DZCnD4JN.js";import{d as Bn,Y as En,M as un,a as re,Z as gn,F as en,P as Rr,f as qr,_ as Pd,g as Ga,h as Or,i as Br,j as On,e as ct,k as Dn,I as bn,l as Ya,b as La,m as Ka,n as se,y as Ca,o as Ha,r as Tt,B as Fe,q as jt,s as $a,K as za,c as Ar,O as kt,t as Wa,u as er,$ as Sd,v as Za,N as Rd,E as Tr,w as qd,x as Ad,z as Fd,A as wd,C as Od,D as Bd}from"./AppIndex.stories-CIjGX8mV.js";import{T as wn,S as Ja,a as Qa,b as Xa,c as es}from"./Timeline-BZEKcbgr.js";import{S as ns}from"./FigureCombination-BtLASKNG.js";import{P as _t}from"./ProsessDefaultInitPanel-D70Cgylo.js";import{W as Ed}from"./index.es-DLE317xt.js";import{F as Dd}from"./FatterVedtakStatusModal-CXaQAi9c.js";import"./useRestApiRunner-CQE2m9r8.js";import"./BehandlingHenlagtPanel-CZMQqOj_.js";import"./bind-DK9GJUjU.js";import"./index-DHUlIts1.js";import"./iframe-C3ErKBx4.js";import"../sb-preview/runtime.js";import"./SettPaVentReadOnlyModal-CuA3M8Z_.js";import"./index-27BIJqHF.js";import"./nb_NO-B9XIc68F.js";const it={INGEN_TILBAKEBETALING:"INGEN_TILBAKEBETALING",DELVIS_TILBAKEBETALING:"DELVIS_TILBAKEBETALING",FULL_TILBAKEBETALING:"FULL_TILBAKEBETALING"};var Er=(a=>(a.VURDER_FORELDELSE="5003",a))(Er||{}),rs={exports:{}},Cn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha;function Md(){if(ha)return Cn;ha=1;var a=on,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,b,j){var y,p={},T=null,h=null;j!==void 0&&(T=""+j),b.key!==void 0&&(T=""+b.key),b.ref!==void 0&&(h=b.ref);for(y in b)i.call(b,y)&&!m.hasOwnProperty(y)&&(p[y]=b[y]);if(k&&k.defaultProps)for(y in b=k.defaultProps,b)p[y]===void 0&&(p[y]=b[y]);return{$$typeof:o,type:k,key:T,ref:h,props:p,_owner:g.current}}return Cn.Fragment=d,Cn.jsx=v,Cn.jsxs=v,Cn}rs.exports=Md();var c=rs.exports;const Vd=Dn(3),Nd=bn(1500),Id=a=>a!==Xe.UDEFINERT?a:void 0,Ud=a=>a.foreldet?a.foreldet:Id(a.foreldelseVurderingType),Gd=a=>({...a,foreldet:Ud(a)}),Yd=({skjulPeriode:a,readOnly:o,periode:d,oppdaterPeriode:i,kodeverkSamlingFpTilbake:g})=>{const m=ie(),v=Bn({defaultValues:Gd(d)}),k=v.watch("foreldet"),b=k&&k===Xe.FORELDET,j=k&&k===Xe.TILLEGGSFRIST,y=g[Jn.FORELDELSE_VURDERING].filter(p=>p.kode!==Xe.IKKE_VURDERT);return c.jsxs(En,{formMethods:v,onSubmit:p=>i(p),children:[c.jsx(F,{twentyPx:!0}),c.jsx(un,{name:"begrunnelse",label:m.formatMessage({id:"ForeldelsePeriodeForm.Vurdering"}),validate:[re,Vd,Nd,gn],maxLength:1500,readOnly:o}),c.jsx(F,{twentyPx:!0}),c.jsxs(ve,{gap:"10",children:[c.jsx(en,{name:"foreldet",label:c.jsx(x,{id:"ForeldelsePeriodeForm.RadioGroup.Foreldet"}),validate:[re],radios:y.map(p=>({label:p.navn,value:p.kode})),isReadOnly:o}),c.jsxs(Td,{gap:"5",children:[(b||j)&&c.jsx(Rr,{name:"foreldelsesfrist",label:m.formatMessage({id:"ForeldelsePeriodeForm.Foreldelsesfrist"}),validate:[re,qr],isReadOnly:o}),j&&c.jsx(Rr,{name:"oppdagelsesDato",label:m.formatMessage({id:"ForeldelsePeriodeForm.OppdagelsesDato"}),validate:[re,qr,Pd],isReadOnly:o,fromDate:ue("1970-01-01").toDate(),toDate:ue().toDate()})]})]}),c.jsx(F,{twentyPx:!0}),c.jsxs(ve,{gap:"4",children:[c.jsx(Z,{size:"small",variant:"primary",disabled:!v.formState.isDirty||v.formState.isSubmitting||o,loading:v.formState.isSubmitting,children:c.jsx(x,{id:"ForeldelsePeriodeForm.Oppdater"})}),c.jsx(Z,{size:"small",variant:"secondary",onClick:a,type:"button",children:c.jsx(x,{id:"ForeldelsePeriodeForm.Avbryt"})})]})]})},Ld="_margin_1wl4t_1",jr={margin:Ld},Kd=a=>{const o=a.isGodkjent?"success":"danger";return a.isAksjonspunktOpen?"warning":o},Cd=(a=[])=>a.map(o=>({id:o.id,fom:o.fom,tom:o.tom,status:Kd(o)})),Hd=a=>a===Fn.MOR||a===Fn.MEDMOR?c.jsx(Ya,{width:20,height:20,color:"var(--a-red-200)"}):a===Fn.FAR?c.jsx(Xa,{width:20,height:20,color:"var(--a-blue-600)"}):c.jsx(ns,{width:20,height:20}),$d={danger:c.jsx(La,{}),success:c.jsx(Ka,{}),warning:c.jsx(es,{})},zd=({perioder:a,setPeriode:o,valgtPeriode:d,relasjonsRolleType:i,relasjonsRolleTypeKodeverk:g})=>{var m;const v=ie(),k=D.useMemo(()=>Cd(a),[a]),b=D.useCallback(E=>{const B=a.find(J=>J.id===E);B&&o(B)},[a,o]),j=ue(k[0].fom),y=ue(k[k.length-1].tom),[p,T]=D.useState(j),[h,M]=D.useState(y),R=D.useCallback(()=>{p.subtract(1,"month").isBefore(j)||(T(p.subtract(1,"month")),M(h.subtract(1,"month")))},[p,h,j]),_=D.useCallback(()=>{h.add(1,"month").isAfter(y)||(T(p.add(1,"month")),M(h.add(1,"month")))},[p,h,y]),L=D.useCallback(()=>{p.add(3,"month").isAfter(h)||(T(p.add(1,"month")),M(h.subtract(1,"month")))},[p,h]),H=D.useCallback(()=>{h.add(1,"month").diff(p.subtract(1,"month"),"months")<36&&(T(p.subtract(1,"month")),M(h.add(1,"month")))},[p,h]);return c.jsxs(c.Fragment,{children:[c.jsx(F,{fourtyPx:!0}),c.jsx(wn,{startDate:p.toDate(),endDate:h.add(1,"days").toDate(),children:c.jsx(wn.Row,{label:((m=g.find(E=>E.kode===i))==null?void 0:m.navn)||"-",icon:Hd(i),children:k.map(E=>c.jsx(wn.Period,{start:ue(E.fom).toDate(),end:ue(E.tom).toDate(),status:E.status,onSelectPeriod:()=>b(E.id),isActive:(d==null?void 0:d.id)===E.id,icon:$d[E.status],"aria-controls":"panel-tilbakekreving-foreldelse",id:E.id.toString()},E.id))})}),c.jsx(F,{twentyPx:!0}),c.jsxs(Da,{children:[c.jsx(Z,{className:jr.margin,size:"small",icon:c.jsx(Ga,{"aria-hidden":!0}),onClick:L,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),c.jsx(Z,{className:jr.margin,size:"small",icon:c.jsx(Ja,{"aria-hidden":!0}),onClick:H,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),c.jsx(Z,{className:jr.margin,size:"small",icon:c.jsx(Or,{"aria-hidden":!0}),onClick:R,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),c.jsx(Z,{className:jr.margin,size:"small",icon:c.jsx(Br,{"aria-hidden":!0}),onClick:_,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})},Wd="_button_8q57x_1",Zd="_cancelButton_8q57x_5",ya={button:Wd,cancelButton:Zd},Jd=(a,o)=>d=>d&&(Ca(d)(se(a.tom.toString()).subtract(1,"day"))||Ha(d)(a.fom))?o.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,Qd=(a,o)=>{const d=se(a.forstePeriodeTomDato).add(1,"days"),i={fom:o.fom,tom:a.forstePeriodeTomDato},g={fom:d.format(Ia),tom:o.tom};return{forstePeriode:i,andrePeriode:g}},Xd=({periodeData:a,showModal:o,cancelEvent:d,finnesBelopMed0Verdi:i,splitPeriod:g})=>{const m=ie(),v=Bn();return c.jsx(En,{formMethods:v,onSubmit:k=>g(Qd(k,a)),children:c.jsxs(ln,{width:"medium",open:o,"aria-label":m.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:d,children:[c.jsx(ln.Header,{children:c.jsx(dn,{size:"small",children:c.jsx(x,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),c.jsxs(ln.Body,{children:[c.jsx(be,{size:"small",children:c.jsx(x,{id:"DelOppPeriodeModalImpl.Periode"})}),c.jsx(I,{size:"small",children:`${se(a.fom.toString()).format(ye)} - ${se(a.tom.toString()).format(ye)}`}),c.jsx(F,{sixteenPx:!0}),c.jsx(Rr,{name:"forstePeriodeTomDato",label:c.jsx(x,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[re,qr,Jd(a,m)],fromDate:se(a.fom).toDate(),toDate:se(a.tom).toDate()}),i&&c.jsx(ft,{variant:"error",children:c.jsx(x,{id:"DelOppPeriodeModalImpl.BelopEr0"})}),c.jsx(F,{sixteenPx:!0})]}),c.jsxs(ln.Footer,{children:[c.jsx(Z,{size:"small",variant:"primary",className:ya.button,disabled:!v.formState.isDirty,children:c.jsx(x,{id:"DelOppPeriodeModalImpl.Ok"})}),c.jsx(Z,{size:"small",variant:"secondary",onClick:d,className:ya.cancelButton,type:"button",children:c.jsx(x,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})},eu="_timeLineButton_wnej3_1",nu="_splitPeriodImage_wnej3_24",ru="_splitPeriodPosition_wnej3_30",tu="_leftMargin_wnej3_33",au="_margin_wnej3_37",su="_fix_wnej3_41",lt={timeLineButton:eu,splitPeriodImage:nu,splitPeriodPosition:ru,leftMargin:tu,margin:au,fix:su},iu=!1,lu=({valgtPeriode:a,beregnBelop:o,behandlingUuid:d,oppdaterSplittedePerioder:i,setNestePeriode:g,setForrigePeriode:m,readOnly:v,lukkPeriode:k})=>{const b=ie(),[j,y]=D.useState(!1),[p,T]=D.useState(!1),h=_=>{y(!0),_.preventDefault()},M=()=>{y(!1)},R=_=>{T(!1);const L={belop:a.feilutbetaling,fom:_.forstePeriode.fom,tom:_.forstePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "},H={belop:a.feilutbetaling,fom:_.andrePeriode.fom,tom:_.andrePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "};o({behandlingUuid:d,perioder:[L,H]}).then(E=>{const{perioder:B}=E;if(B.some(J=>J.belop===0))T(!0);else{const J={fom:L.fom,tom:L.tom,feilutbetaling:B[0].belop},Pe={fom:H.fom,tom:H.tom,feilutbetaling:B[1].belop};M(),i([J,Pe])}})};return c.jsxs(ve,{children:[c.jsxs(be,{size:"small",children:[c.jsx(x,{id:"PeriodeController.Detaljer"}),iu]}),!v&&c.jsxs(c.Fragment,{children:[c.jsx(On,{}),c.jsx(Z,{className:lt.margin,size:"xsmall",icon:c.jsx(Qa,{"aria-hidden":!0}),onClick:h,variant:"tertiary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:c.jsx(x,{id:"PeriodeController.DelOppPerioden"})})]}),j&&c.jsx(Xd,{cancelEvent:M,showModal:j,periodeData:a,splitPeriod:R,finnesBelopMed0Verdi:p}),c.jsx(On,{}),c.jsx(Z,{className:lt.margin,size:"xsmall",icon:c.jsx(Or,{"aria-hidden":!0}),onClick:m,variant:"secondary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.prevPeriod"}),children:c.jsx(x,{id:"PeriodeController.prevPeriodShort"})}),c.jsx(Z,{className:lt.margin,size:"xsmall",icon:c.jsx(Br,{"aria-hidden":!0}),onClick:g,variant:"secondary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:c.jsx(x,{id:"PeriodeController.nextPeriodShort"})}),c.jsx(Z,{size:"xsmall",icon:c.jsx(Va,{"aria-hidden":!0}),onClick:k,variant:"tertiary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.LukkPeriode"})})]})},ou=(a,o,d,i)=>!d||o?!0:i===void 0?!a:!a&&i||i,du=({isReadOnly:a,isSubmittable:o,isSubmitting:d,isDirty:i,text:g,onClick:m,hasEmptyRequiredFields:v})=>{const k=ie();return a?null:c.jsx(Z,{variant:"primary",size:"small",loading:d,disabled:ou(i,d,o,v),onClick:m||ct,type:m?"button":"submit",children:g||k.formatMessage({id:"SubmitButton.ConfirmInformation"})})},uu="_container_wdk2x_1",gu="_fadein_wdk2x_1",ku="_space_wdk2x_11",mu={container:uu,fadein:gu,space:ku},vu="_infoSummary_99bx4_1",pu="_positivNumber_99bx4_8",hu="_redNumber_99bx4_12",yu="_resultName_99bx4_17",_r={infoSummary:vu,positivNumber:pu,redNumber:hu,resultName:yu},fu=({fom:a,tom:o,feilutbetaling:d})=>{const i=Na(a,o);return c.jsxs("div",{className:_r.infoSummary,children:[c.jsxs(ve,{children:[c.jsx(be,{size:"small",children:`${ue(a).format(ye)} - ${ue(o).format(ye)}`}),c.jsx(On,{}),c.jsx(I,{size:"small",children:i.formattedString})]}),c.jsx(F,{sixteenPx:!0}),c.jsx(ve,{gap:"4",children:c.jsxs(I,{size:"small",className:_r.resultName,children:[c.jsx(x,{id:"PeriodeInformasjon.Feilutbetaling"}),":",c.jsx("span",{className:d?_r.redNumber:_r.positivNumber,children:Ae(d)})]})})]})},fa=(a,o)=>ue(a.fom).diff(ue(o.fom)),bu=()=>ue().subtract(30,"months").format(ye),cu=a=>a?[c.jsx(x,{id:`ForeldelseForm.AksjonspunktHelpText.${a.definisjon}`,values:{dato:bu()}},"vurderForeldelse")]:[],Zn=a=>(!a.foreldelseVurderingType||a.foreldelseVurderingType===Xe.UDEFINERT)&&(!a.begrunnelse||!!a.erSplittet),Tu=(a=[])=>a.map((o,d)=>({fom:o.fom,tom:o.tom,isAksjonspunktOpen:Zn(o),isGodkjent:Xe.FORELDET!==o.foreldet&&Xe.UDEFINERT!==o.foreldet,id:d})),ju=a=>({foreldelsePerioder:a.map(o=>({fraDato:o.fom,tilDato:o.tom,begrunnelse:o.begrunnelse,foreldelseVurderingType:o.foreldet,foreldelsesfrist:o.foreldelsesfrist,oppdagelsesDato:o.oppdagelsesDato})),kode:Er.VURDER_FORELDELSE}),_u=(a,o)=>a.fom<o.fom?-1:a.fom>o.fom?1:0,xu=a=>[...a].sort(_u).map(o=>({...o,feilutbetaling:o.belop,foreldet:o.foreldelseVurderingType===Xe.UDEFINERT?void 0:o.foreldelseVurderingType,begrunnelse:yn(o.begrunnelse)})),Pu=({submitCallback:a,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:d,aksjonspunkt:i,alleMerknaderFraBeslutter:g,perioderForeldelse:m,readOnly:v,kodeverkSamlingFpTilbake:k,beregnBelop:b,behandlingUuid:j,formData:y,setFormData:p})=>{const T=D.useMemo(()=>xu(m.perioder),[m.perioder]),[h,M]=D.useState(y||T),[R,_]=D.useState(h==null?void 0:h.find(Zn)),[L,H]=D.useState(!1),[E,B]=D.useState(!!y),J=N=>{const Q=N?h.find($=>$.fom===N.fom&&$.tom===N.tom):void 0;_(Q)},Pe=D.useCallback(()=>{const N=h.findIndex($=>$.fom===(R==null?void 0:R.fom)&&$.tom===(R==null?void 0:R.tom)),Q=N===h.length-1?N:N+1;J(h[Q])},[h,R]),Ee=D.useCallback(()=>{const N=h.findIndex($=>$.fom===(R==null?void 0:R.fom)&&$.tom===(R==null?void 0:R.tom)),Q=N===0?N:N-1;J(h[Q])},[h,R]),te=D.useCallback(()=>{J(void 0)},[R,h]),nn=D.useCallback(N=>{const Q=Qn(N,"erSplittet"),$=h.filter(le=>le.fom!==Q.fom&&le.tom!==Q.tom).concat(Q).sort(fa);M($),p($),B(!0),te();const X=$.find(Zn);X&&J(X)},[h,te,Zn]),ge=D.useCallback(N=>{const Q=h.find(le=>le.fom===(R==null?void 0:R.fom)&&le.tom===(R==null?void 0:R.tom));if(Q===void 0)throw new TypeError(`Periode skal alltid finnes. Fom: ${R==null?void 0:R.fom} Tom: ${R==null?void 0:R.tom}`);const $=N.map(le=>({...Q,...le,erSplittet:!0})),X=h.filter(le=>le.fom!==(R==null?void 0:R.fom)&&le.tom!==(R==null?void 0:R.tom)).concat($).sort(fa);M(X),p(X),B(!0),te(),J($[0])},[h,R,te,Zn]),Ye=D.useCallback(()=>{H(!0),a(ju(h))},[h]),rn=g[Er.VURDER_FORELDELSE],pe=Tu(h),kn=i&&i.status===gd.OPPRETTET,Se=pe.every(N=>!N.isAksjonspunktOpen),U=R?pe.find(N=>N.fom===R.fom&&N.tom===R.tom):void 0;return c.jsxs(ht,{merknaderFraBeslutter:rn,withoutBorder:!0,children:[c.jsx(dn,{size:"small",children:c.jsx(x,{id:"ForeldelseForm.Foreldelse"})}),c.jsx(F,{twentyPx:!0}),!i&&c.jsxs(c.Fragment,{children:[c.jsx(I,{children:c.jsx(x,{id:"ForeldelseForm.Foreldelsesloven"})}),c.jsx(F,{eightPx:!0}),c.jsx(I,{children:c.jsx(x,{id:"ForeldelseForm.AutomatiskVurdert"})}),c.jsx(F,{sixteenPx:!0})]}),h&&i&&c.jsxs(c.Fragment,{children:[c.jsx(yt,{isAksjonspunktOpen:kn,children:cu(i)}),c.jsx(F,{twentyPx:!0}),c.jsx(zd,{perioder:pe,valgtPeriode:U,setPeriode:J,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:d}),R&&c.jsxs("div",{id:"panel-tilbakekreving-foreldelse","aria-controls":U==null?void 0:U.id.toString(),children:[c.jsx("div",{className:mu.space}),c.jsxs(Ea,{border:!0,children:[c.jsx(lu,{setNestePeriode:Pe,setForrigePeriode:Ee,valgtPeriode:R,readOnly:v,oppdaterSplittedePerioder:ge,behandlingUuid:j,beregnBelop:b,lukkPeriode:te}),c.jsx(F,{sixteenPx:!0}),c.jsx(fu,{feilutbetaling:R.feilutbetaling,fom:R.fom,tom:R.tom}),c.jsx(Yd,{periode:R,oppdaterPeriode:nn,skjulPeriode:te,readOnly:v,kodeverkSamlingFpTilbake:k},R.fom)]})]}),c.jsx(F,{twentyPx:!0}),c.jsx(du,{isReadOnly:v,isDirty:E,isSubmittable:!R&&Se,onClick:Ye,isSubmitting:L})]})]})},Su={"ForeldelsePeriodeForm.Vurdering":"Vurdering","ForeldelsePeriodeForm.RadioGroup.Foreldet":"Vurder om perioden er foreldet","ForeldelsePeriodeForm.Oppdater":"Oppdater","ForeldelsePeriodeForm.Avbryt":"Avbryt","ForeldelsePeriodeForm.Foreldelsesfrist":"Foreldelsesfrist","ForeldelsePeriodeForm.OppdagelsesDato":"Dato for når feilutbetaling ble oppdaget","ForeldelseForm.Foreldelsesloven":"Foreldelsesloven §§ 2 og 3","ForeldelseForm.AutomatiskVurdert":"Automatisk vurdert","ForeldelseForm.AksjonspunktHelpText.5003":"Perioden før {dato} kan være foreldet. Del opp perioden ved behov og fastsett foreldelse","ForeldelseForm.Foreldelse":"Foreldelse","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","SubmitButton.ConfirmInformation":"Bekreft og fortsett","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},Ru=Fr(Su),qu=({perioderForeldelse:a,relasjonsRolleType:o,beregnBelop:d,behandling:i,aksjonspunkter:g,isReadOnly:m,kodeverkSamlingFpTilbake:v,submitCallback:k,alleMerknaderFraBeslutter:b,formData:j,setFormData:y,relasjonsRolleTypeKodeverk:p})=>c.jsx(wr,{value:Ru,children:c.jsx(Pu,{behandlingUuid:i.uuid,perioderForeldelse:a,submitCallback:k,readOnly:m,aksjonspunkt:g[0],relasjonsRolleType:o,relasjonsRolleTypeKodeverk:p,alleMerknaderFraBeslutter:b,kodeverkSamlingFpTilbake:v,beregnBelop:d,formData:j,setFormData:y})}),Au=[Er.VURDER_FORELDELSE],Fu=[Fe.PERIODER_FORELDELSE],ts=({...a})=>{const o=ie(),{startRequest:d}=Tt.useRestApiRunner(Fe.BEREGNE_BELØP);return z.jsx(_t,{...a,panelEndepunkter:Fu,aksjonspunktKoder:Au,prosessPanelKode:jt.FORELDELSE,prosessPanelMenyTekst:o.formatMessage({id:"Behandlingspunkt.Foreldelse"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:()=>$a.hasPath(Fe.PERIODER_FORELDELSE.name)?Qe.OPPFYLT:Qe.IKKE_VURDERT,renderPanel:i=>z.jsx(qu,{kodeverkSamlingFpTilbake:a.tilbakekrevingKodeverk,beregnBelop:d,relasjonsRolleType:a.relasjonsRolleType,relasjonsRolleTypeKodeverk:i.alleKodeverk[za.RELASJONSROLLE_TYPE],...i})})};ts.__docgenInfo={description:"",methods:[],displayName:"ForeldelseProsessInitPanel",props:{relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"tilbakekrevingKodeverkTyper"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Dr=(a=>(a.VURDER_TILBAKEKREVING="5002",a))(Dr||{}),wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ou(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var as={exports:{}},Hn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba;function Bu(){if(ba)return Hn;ba=1;var a=on,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,b,j){var y,p={},T=null,h=null;j!==void 0&&(T=""+j),b.key!==void 0&&(T=""+b.key),b.ref!==void 0&&(h=b.ref);for(y in b)i.call(b,y)&&!m.hasOwnProperty(y)&&(p[y]=b[y]);if(k&&k.defaultProps)for(y in b=k.defaultProps,b)p[y]===void 0&&(p[y]=b[y]);return{$$typeof:o,type:k,key:T,ref:h,props:p,_owner:g.current}}return Hn.Fragment=d,Hn.jsx=v,Hn.jsxs=v,Hn}as.exports=Bu();var l=as.exports,ss=(a=>(a.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",a.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",a.STOERRELSE_BELOEP="STOERRELSE_BELOEP",a.TID_FRA_UTBETALING="TID_FRA_UTBETALING",a.ANNET="ANNET",a))(ss||{}),fe=(a=>(a.FORSETT="FORSETT",a.GROVT_UAKTSOM="GROVT_UAKTSOM",a.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",a))(fe||{});const Eu=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var Ve=(a=>(a.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",a.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",a.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",a.GOD_TRO="GOD_TRO",a))(Ve||{});const Du="_feilutbetalingTable_e3ydt_1",Mu={feilutbetalingTable:Du},Vu=["TilbakekrevingAktivitetTabell.Aktivitet","TilbakekrevingAktivitetTabell.FeilutbetaltBelop"],Nu=({ytelser:a})=>{if(a.length===0)return null;let o=0;return l.jsx(bt,{headerTextCodes:Vu,noHover:!0,classNameTable:Mu.feilutbetalingTable,children:a.map(d=>(o+=1,l.jsxs(Sr,{children:[l.jsx(me,{children:l.jsx(I,{size:"small",children:d.aktivitet})}),l.jsx(me,{children:l.jsx(I,{size:"small",children:Ae(d.belop)})})]},d.aktivitet+d.belop+o)))})},Iu=()=>l.jsxs(ve,{gap:"4",children:[l.jsx(un,{name:"foreldetBegrunnelse",label:l.jsx(x,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),l.jsx(en,{name:"periodenErForeldet",label:l.jsx(_e,{children:l.jsx(x,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:l.jsx(x,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]}),Uu="_arrowbox_ych2z_1",Gu="_tilbakekrevdBelopInput_ych2z_4",ca={arrowbox:Uu,tilbakekrevdBelopInput:Gu},Yu=Wa(1),Lu=a=>{const o=a.toString().replace(/\s/g,""),d=parseInt(o,10);return Number.isNaN(d)?"":d},Ku=(a,o)=>d=>{if(d>o)return a.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},nr=({name:a,readOnly:o,erBelopetIBehold:d,feilutbetalingBelop:i})=>{const g=ie();return l.jsxs(l.Fragment,{children:[l.jsx(en,{name:`${a}.erBelopetIBehold`,label:l.jsx(x,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[re],radios:[{label:l.jsx(x,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:l.jsx(x,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:o,isTrueOrFalseSelection:!0,isHorizontal:!0}),l.jsx(F,{eightPx:!0}),l.jsxs("div",{className:ca.arrowbox,children:[d===!0&&l.jsx(fn,{alignOffset:25,children:l.jsx(kt,{name:`${a}.tilbakekrevdBelop`,label:l.jsx(x,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[re,Yu,Ku(g,i)],readOnly:o,className:ca.tilbakekrevdBelopInput,format:Ae,parse:Lu})}),d===!1&&l.jsx(fn,{alignOffset:90,children:l.jsx(I,{size:"small",children:l.jsx(x,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};nr.transformValues=(a,o)=>({"@type":"godTro",begrunnelse:o,erBelopetIBehold:a.erBelopetIBehold,tilbakekrevesBelop:a.erBelopetIBehold?Ua(a.tilbakekrevdBelop):void 0});nr.buildIntialValues=a=>({erBelopetIBehold:a.erBelopetIBehold,tilbakekrevdBelop:a.tilbakekrevesBelop});const Cu=({name:a,readOnly:o,erValgtResultatTypeForstoBurdeForstaatt:d})=>{const i=er(),g=`${a}.skalDetTilleggesRenter`;return D.useEffect(()=>{i.getValues(g)===void 0&&i.setValue(g,!1)},[]),l.jsx("div",{children:l.jsxs(fn,{alignOffset:d?320:360,children:[d&&l.jsxs(l.Fragment,{children:[l.jsx(be,{size:"small",children:l.jsx(x,{id:"AktsomhetGradForsettFormPanel.Andel"})}),l.jsx(I,{size:"small",children:"100 %"}),l.jsx(F,{sixteenPx:!0}),l.jsx(en,{name:`${a}.skalDetTilleggesRenter`,label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[re],radios:[{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:o,parse:m=>m==="true",isHorizontal:!0})]}),!d&&l.jsxs(l.Fragment,{children:[l.jsx(_e,{children:l.jsx(x,{id:"AktsomhetGradForsettFormPanel.Andel"})}),l.jsx(I,{size:"small",children:"100 %"}),l.jsx(F,{eightPx:!0}),l.jsx(I,{size:"small",children:l.jsx(x,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})},Hu="_suffix_cawxu_1",$u="_suffixGrovText_cawxu_4",zu="_labelPadding_cawxu_8",Wu="_inputFelt_cawxu_12",qn={suffix:Hu,suffixGrovText:$u,labelPadding:zu,inputFelt:Wu},Ta=Wa(0),Zu=Rd(99.99),Ju=a=>{const o=a.toString().replace(/\s/g,""),d=parseInt(o,10);return Number.isNaN(d)?"":d},Qu=(a,o)=>d=>{if(d>=o)return a.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},Xn="Egendefinert",mt=["30","50","70",Xn],Xu=({name:a,harGrunnerTilReduksjon:o,readOnly:d,handletUaktsomhetGrad:i,harMerEnnEnYtelse:g,feilutbetalingBelop:m,andelSomTilbakekreves:v})=>{const k=ie(),b=er(),j=`${a}.skalDetTilleggesRenter`;return D.useEffect(()=>{b.getValues(j)===void 0&&b.setValue(j,!1)},[]),l.jsxs(l.Fragment,{children:[l.jsx(F,{sixteenPx:!0}),l.jsx(en,{name:`${a}.harGrunnerTilReduksjon`,label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[re],radios:[{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:d,isTrueOrFalseSelection:!0,isHorizontal:!0}),l.jsx(F,{sixteenPx:!0}),o&&l.jsx(fn,{alignOffset:24,children:l.jsxs(ve,{gap:"4",children:[!g&&v!==Xn&&l.jsxs(l.Fragment,{children:[l.jsx(be,{size:"small",children:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),l.jsxs(ve,{gap:"2",children:[l.jsx(Ar,{name:`${a}.andelSomTilbakekreves`,label:"",validate:[re],selectValues:mt.map(y=>l.jsx("option",{value:y,children:y},y))}),l.jsx("div",{className:qn.suffix,children:"%"})]})]}),!g&&v===Xn&&l.jsxs(l.Fragment,{children:[l.jsx(be,{size:"small",children:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),l.jsxs(ve,{gap:"4",children:[l.jsx(kt,{className:qn.inputFelt,name:`${a}.andelSomTilbakekrevesManuell`,readOnly:d,validate:[re,Ta,Zu],normalizeOnBlur:y=>Number.isNaN(y)?y:parseFloat(y.toString()).toFixed(2),format:y=>y.toString().replace(".",","),parse:y=>y.toString().replace(",",".")}),l.jsx("div",{className:i===fe.GROVT_UAKTSOM?qn.suffixGrovText:qn.suffix,children:"%"})]})]}),g&&l.jsx(kt,{name:`${a}.belopSomSkalTilbakekreves`,label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[re,Ta,Qu(k,m)],readOnly:d,format:Ae,parse:Ju}),i===fe.GROVT_UAKTSOM&&l.jsxs("div",{children:[l.jsx(_e,{children:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),l.jsx(I,{size:"small",className:qn.labelPadding,children:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),o===!1&&l.jsxs(fn,{alignOffset:90,children:[l.jsx(_e,{children:l.jsx(x,{id:g?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),l.jsx(I,{size:"small",className:qn.labelPadding,children:g?Ae(m):"100%"}),l.jsx(F,{sixteenPx:!0}),i===fe.GROVT_UAKTSOM&&l.jsx(en,{name:j,label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[re],radios:[{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:d,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})},eg=Dn(3),ng=bn(1500),ja=({name:a,harGrunnerTilReduksjon:o,readOnly:d,handletUaktsomhetGrad:i,erSerligGrunnAnnetValgt:g,sarligGrunnTyper:m,harMerEnnEnYtelse:v,feilutbetalingBelop:k,andelSomTilbakekreves:b})=>{const j=ie(),{watch:y}=er(),p=!m.some(h=>!!y(`${a}.${h.kode}`)),T=Sd(a,p?j.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return l.jsxs("div",{children:[l.jsx(be,{size:"small",children:l.jsx(x,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),l.jsx(F,{eightPx:!0}),m.map(h=>l.jsxs(on.Fragment,{children:[l.jsx(Za,{name:`${a}.${h.kode}`,label:h.navn,readOnly:d},h.kode),l.jsx(F,{eightPx:!0})]},h.kode)),g&&l.jsx(un,{name:`${a}.annetBegrunnelse`,label:"",validate:[re,eg,ng,gn],maxLength:1500,readOnly:d}),T&&l.jsx(jd,{children:T}),l.jsx(Xu,{name:a,harGrunnerTilReduksjon:o,readOnly:d,handletUaktsomhetGrad:i,harMerEnnEnYtelse:v,feilutbetalingBelop:k,andelSomTilbakekreves:b})]})},rg="_explanationTextarea_1kabz_1",tg="_panelWidth_1kabz_5",is={explanationTextarea:rg,panelWidth:tg},ag=Dn(3),sg=bn(1500),_a=(a,o,d)=>l.jsxs("div",{children:[l.jsx(be,{size:"small",children:l.jsx(x,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),l.jsx(F,{eightPx:!0}),l.jsx(un,{name:`${a}.sarligGrunnerBegrunnelse`,label:d.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[re,ag,sg,gn],maxLength:1500,readOnly:o,className:is.explanationTextarea,description:d.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})}),l.jsx(F,{twentyPx:!0})]}),ig=({harGrunnerTilReduksjon:a,readOnly:o,handletUaktsomhetGrad:d,erSerligGrunnAnnetValgt:i,sarligGrunnTyper:g,harMerEnnEnYtelse:m,feilutbetalingBelop:v,erTotalBelopUnder4Rettsgebyr:k,andelSomTilbakekreves:b,erValgtResultatTypeForstoBurdeForstaatt:j,name:y})=>{const p=ie(),T=j?180:200;return l.jsx(fn,{alignOffset:d===fe.GROVT_UAKTSOM?T:20,children:l.jsxs("div",{className:is.panelWidth,children:[d===fe.SIMPEL_UAKTSOM&&k&&l.jsxs(l.Fragment,{children:[l.jsx(en,{name:`${y}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,label:l.jsx(x,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[re],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:o,radios:[{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:l.jsxs(l.Fragment,{children:[l.jsx(F,{eightPx:!0}),_a(y,o,p),l.jsx(ja,{name:y,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:i,sarligGrunnTyper:g,harMerEnnEnYtelse:m,feilutbetalingBelop:v,readOnly:o,handletUaktsomhetGrad:d,andelSomTilbakekreves:b})]})},{label:l.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:l.jsxs(l.Fragment,{children:[l.jsx(F,{eightPx:!0}),l.jsx(fn,{alignOffset:20,children:l.jsx(x,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})]})}]}),l.jsx(F,{eightPx:!0})]}),(d!==fe.SIMPEL_UAKTSOM||!k)&&l.jsxs(l.Fragment,{children:[_a(y,o,p),l.jsx(ja,{name:y,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:i,sarligGrunnTyper:g,harMerEnnEnYtelse:m,feilutbetalingBelop:v,readOnly:o,handletUaktsomhetGrad:d,andelSomTilbakekreves:b})]})]})})},lg=({harGrunnerTilReduksjon:a,readOnly:o,handletUaktsomhetGrad:d,erSerligGrunnAnnetValgt:i,erValgtResultatTypeForstoBurdeForstaatt:g,sarligGrunnTyper:m,harMerEnnEnYtelse:v,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:b,andelSomTilbakekreves:j,name:y})=>l.jsxs(l.Fragment,{children:[l.jsx(F,{eightPx:!0}),d===fe.FORSETT&&l.jsx(Cu,{name:y,readOnly:o,erValgtResultatTypeForstoBurdeForstaatt:g}),d!==fe.FORSETT&&l.jsx(ig,{name:y,harGrunnerTilReduksjon:a,readOnly:o,handletUaktsomhetGrad:d,erSerligGrunnAnnetValgt:i,sarligGrunnTyper:m,harMerEnnEnYtelse:v,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:b,andelSomTilbakekreves:j,erValgtResultatTypeForstoBurdeForstaatt:g})]}),og=[fe.GROVT_UAKTSOM,fe.SIMPEL_UAKTSOM,fe.FORSETT],dg={[fe.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[fe.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[fe.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},rr=({readOnly:a,resetFields:o,handletUaktsomhetGrad:d,harGrunnerTilReduksjon:i,erSerligGrunnAnnetValgt:g=!1,erValgtResultatTypeForstoBurdeForstaatt:m=!1,aktsomhetTyper:v,sarligGrunnTyper:k,antallYtelser:b,feilutbetalingBelop:j,erTotalBelopUnder4Rettsgebyr:y,andelSomTilbakekreves:p,name:T})=>l.jsxs(l.Fragment,{children:[l.jsx(F,{sixteenPx:!0}),l.jsx(en,{name:`${T}.handletUaktsomhetGrad`,label:l.jsx(x,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[re],radios:v.map(h=>({label:m?l.jsx(x,{id:dg[h.kode]}):h.navn,value:h.kode})),isReadOnly:a,onChange:o,isHorizontal:!0}),og.some(h=>h===d)&&l.jsx(lg,{name:`${T}.${d}`,harGrunnerTilReduksjon:i,readOnly:a,handletUaktsomhetGrad:d,erSerligGrunnAnnetValgt:g,erValgtResultatTypeForstoBurdeForstaatt:m,sarligGrunnTyper:k,harMerEnnEnYtelse:b>1,feilutbetalingBelop:j,erTotalBelopUnder4Rettsgebyr:y,andelSomTilbakekreves:p})]}),ug=(a,o)=>{const d=parseInt(a,10);return!o||Number.isNaN(d)?{}:{andelTilbakekreves:d}},gg=(a,o)=>{const d=parseFloat(a);return!o||Number.isNaN(d)?{}:{andelTilbakekreves:d}},kg=(a,o)=>{if(a.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:a.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const d=o.reduce((m,v)=>a[v.kode]?m.concat(v.kode):m,[]),{harGrunnerTilReduksjon:i}=a,g=a.andelSomTilbakekreves===Xn?gg(a.andelSomTilbakekrevesManuell,i):ug(a.andelSomTilbakekreves,i);return{harGrunnerTilReduksjon:i,ileggRenter:i?void 0:a.skalDetTilleggesRenter,sarligGrunner:d.length>0?d:void 0,tilbakekrevesBelop:a.harGrunnerTilReduksjon?Ua(a.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:a.annetBegrunnelse,sarligGrunnerBegrunnelse:a.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:a.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...g}};rr.transformValues=(a,o,d)=>{const i=a[a.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:a.handletUaktsomhetGrad,begrunnelse:d,aktsomhetInfo:i?kg(i,o):null}};const mg=(a,o)=>({andelSomTilbakekreves:o===void 0||mt.includes(o)?o:Xn,andelSomTilbakekrevesManuell:o&&mt.includes(o)?void 0:a.andelTilbakekreves,harGrunnerTilReduksjon:a.harGrunnerTilReduksjon,skalDetTilleggesRenter:a.ileggRenter,belopSomSkalTilbakekreves:a.tilbakekrevesBelop,annetBegrunnelse:a.annetBegrunnelse,sarligGrunnerBegrunnelse:yn(a.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:a.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...a.sarligGrunner?a.sarligGrunner.reduce((d,i)=>({...d,[i.kode?i.kode:i]:!0}),{}):{}});rr.buildInitalValues=a=>{const{aktsomhet:o,aktsomhetInfo:d}=a,i=d&&d.andelTilbakekreves!==void 0?`${d.andelTilbakekreves}`:void 0,g=d?{[o.kode&&"kode"in o?o.kode:o]:mg(d,i)}:{};return{handletUaktsomhetGrad:o&&o.kode&&"kode"in o?o.kode:o,...g}};const vg="_explanationTextarea_1udkt_1",pg="_leftColumn_1udkt_5",hg="_rightColumn_1udkt_9",yg="_selectWidth_1udkt_12",xr={explanationTextarea:vg,leftColumn:pg,rightColumn:hg,selectWidth:yg},xa=Dn(3),Pa=bn(1500),fg=({data:a,periode:o,skjulPeriode:d,readOnly:i,oppdaterPeriode:g,vilkarsVurdertePerioder:m,kodeverkSamlingFpTilbake:v,antallPerioderMedAksjonspunkt:k})=>{const b=ie(),[j,y]=D.useState(!1),p=Bn({defaultValues:o}),T=p.watch("valgtVilkarResultatType"),h=p.watch(`${T}.handletUaktsomhetGrad`),M=p.watch(`${T}.${h}.harGrunnerTilReduksjon`),R=p.watch(`${T}.${h}.andelSomTilbakekreves`),_=p.watch(`${T}.${h}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),L=p.watch(`${T}.${h}.${ss.ANNET}`),H=p.watch(`${T}.erBelopetIBehold`),E=pa(T),B=pa(h),J=a.redusertBeloper,Pe=v[Jn.SARLIG_GRUNN],Ee=v[Jn.VILKAR_RESULTAT],te=Eu.map(U=>v[Jn.AKTSOMHET].find(N=>N.kode===U)),nn=(U,N)=>{const Q=U.target.value.split("_"),$=N.find(Re=>Re.fom===Q[0]&&Re.tom===Q[1]),X=$==null?void 0:$.valgtVilkarResultatType,le=$&&X?$[X]:void 0,we=JSON.parse(JSON.stringify(le));if(X!==Ve.GOD_TRO){const{handletUaktsomhetGrad:Re}=we;Re!==fe.FORSETT&&(o==null?void 0:o.harMerEnnEnYtelse)!==($==null?void 0:$.harMerEnnEnYtelse)&&(we[Re].andelSomTilbakekreves=null,we[Re].andelSomTilbakekrevesManuell=null,we[Re].belopSomSkalTilbakekreves=null)}p.setValue("valgtVilkarResultatType",X,{shouldDirty:!0}),p.setValue("begrunnelse",$==null?void 0:$.begrunnelse,{shouldDirty:!0}),p.setValue("vurderingBegrunnelse",$==null?void 0:$.vurderingBegrunnelse,{shouldDirty:!0}),X&&p.setValue(X,we,{shouldDirty:!0}),U.preventDefault()},ge=()=>{y(!j),g(p.getValues())},Ye=U=>{k>1&&a.erTotalBelopUnder4Rettsgebyr&&_===!1?y(!j):g(U)},rn=()=>{E&&p.resetField(E)},pe=()=>{B&&p.resetField(`${T}.${B}`)},kn=D.useCallback(U=>l.jsx("b",{children:U}),[]),Se=m.filter(U=>!U.erForeldet&&U.valgtVilkarResultatType!=null);return l.jsxs(En,{formMethods:p,onSubmit:Ye,children:[J&&J.map(U=>l.jsxs(on.Fragment,{children:[l.jsx(I,{size:"small",children:l.jsx(x,{id:U.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:Ae(U.belop),b:kn}})}),l.jsx(F,{eightPx:!0})]},U.belop)),l.jsx(Nu,{ytelser:a.ytelser}),l.jsx(F,{twentyPx:!0}),!i&&!a.erForeldet&&Se.length>0&&l.jsxs(l.Fragment,{children:[l.jsx(Ar,{name:"perioderForKopi",selectValues:Se.map(U=>{const N=`${U.fom}_${U.tom}`,Q=`${ue(U.fom).format(ye)} - ${ue(U.tom).format(ye)}`;return l.jsx("option",{value:N,children:Q},N)}),onChange:U=>nn(U,Se),className:xr.selectWidth,label:l.jsx(x,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),l.jsx(F,{twentyPx:!0})]}),l.jsxs(ve,{gap:"4",wrap:!0,children:[l.jsxs("div",{className:xr.leftColumn,children:[a.erForeldet&&l.jsx(Iu,{}),!a.erForeldet&&l.jsxs(l.Fragment,{children:[l.jsx(dn,{size:"small",children:l.jsx(x,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),l.jsx(F,{sixteenPx:!0}),l.jsx(un,{name:"begrunnelse",label:b.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[re,xa,Pa,gn],maxLength:1500,readOnly:i,className:xr.explanationTextarea,description:b.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),l.jsx(F,{sixteenPx:!0}),l.jsx(en,{name:"valgtVilkarResultatType",label:l.jsx(x,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[re],radios:Ee.map(U=>({label:U.navn,value:U.kode})),isReadOnly:i,onChange:rn})]})]}),l.jsx("div",{className:xr.rightColumn,children:T&&l.jsxs(l.Fragment,{children:[l.jsx(dn,{size:"small",children:l.jsx(x,{id:T===Ve.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),l.jsx(F,{sixteenPx:!0}),l.jsx(un,{name:"vurderingBegrunnelse",label:b.formatMessage({id:T===Ve.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[re,xa,Pa,gn],maxLength:1500,readOnly:i}),l.jsx(F,{eightPx:!0}),T===Ve.GOD_TRO&&l.jsx(nr,{name:T,readOnly:i,erBelopetIBehold:H,feilutbetalingBelop:a.feilutbetaling}),T!==Ve.GOD_TRO&&l.jsx(rr,{name:T,harGrunnerTilReduksjon:M,readOnly:i,handletUaktsomhetGrad:h,resetFields:pe,erSerligGrunnAnnetValgt:L,erValgtResultatTypeForstoBurdeForstaatt:T===Ve.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:te,sarligGrunnTyper:Pe,antallYtelser:a.ytelser.length,feilutbetalingBelop:a.feilutbetaling,erTotalBelopUnder4Rettsgebyr:a.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:R},T)]})})]}),l.jsx(F,{twentyPx:!0}),l.jsxs(ve,{gap:"4",children:[l.jsx(Z,{size:"small",variant:"primary",disabled:!p.formState.isDirty||i,children:l.jsx(x,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),l.jsx(Z,{size:"small",variant:"secondary",onClick:d,type:"button",children:l.jsx(x,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),j&&l.jsx(Ma,{bodyText:b.formatMessage({id:"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"}),showModal:!0,submit:ge})]})},bg=(a,o)=>{const{vilkarResultat:d,begrunnelse:i,vilkarResultatInfo:g}=a,m=d&&d.kode?d.kode:d;let v;const k=a.erForeldet?a.erForeldet:a.foreldet;if(k){const p=o.perioder.find(T=>T.fom===a.fom&&T.tom===a.tom);v={erForeldet:k,periodenErForeldet:!0,foreldetBegrunnelse:p?yn(p.begrunnelse):void 0}}else v={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const b={valgtVilkarResultatType:m,begrunnelse:yn(i),harMerEnnEnYtelse:a.ytelser.length>1,...v},j=m===Ve.GOD_TRO?nr.buildIntialValues(g):{},y=m!==void 0&&m!==Ve.GOD_TRO?rr.buildInitalValues(g):{};return{...b,vurderingBegrunnelse:g?yn(g.begrunnelse):void 0,[b.valgtVilkarResultatType]:{...j,...y}}},cg=(a,o)=>{const{valgtVilkarResultatType:d,begrunnelse:i,vurderingBegrunnelse:g}=a,m=a[d],v=d===Ve.GOD_TRO?nr.transformValues(m,g):{},k=d!==Ve.GOD_TRO?rr.transformValues(m,o,g):{};return{begrunnelse:i,fom:a.fom,tom:a.tom,vilkarResultat:d,vilkarResultatInfo:{...v,...k}}},Tg=(a,o,d,i)=>!d||o?!0:i===void 0?!a:!a&&i||i,jg=({isReadOnly:a,isSubmittable:o,isSubmitting:d,isDirty:i,text:g,onClick:m,hasEmptyRequiredFields:v})=>{const k=ie();return a?null:l.jsx(Z,{variant:"primary",size:"small",loading:d,disabled:Tg(i,d,o,v),onClick:m||ct,type:m?"button":"submit",children:g||k.formatMessage({id:"SubmitButton.ConfirmInformation"})})},_g="_container_wdk2x_1",xg="_fadein_wdk2x_1",Pg="_space_wdk2x_11",Sg={container:_g,fadein:xg,space:Pg},Rg="_margin_1wl4t_1",Pr={margin:Rg},qg={danger:l.jsx(La,{}),success:l.jsx(Ka,{}),warning:l.jsx(es,{})},Ag=(a,o)=>a.fom<o.fom?-1:a.fom>o.fom?1:0,Fg=a=>{const o=a.isGodkjent?"success":"danger";return a.isAksjonspunktOpen?"warning":o},wg=(a=[])=>[...a].sort(Ag).map(o=>({...o,status:Fg(o)})),Og=a=>a===Fn.MOR||a===Fn.MEDMOR?l.jsx(Ya,{width:20,height:20,color:"var(--a-red-200)"}):a===Fn.FAR?l.jsx(Xa,{width:20,height:20,color:"var(--a-blue-600)"}):l.jsx(ns,{width:20,height:20}),Bg=({perioder:a,valgtPeriode:o,setPeriode:d,relasjonsRolleType:i,relasjonsRolleTypeKodeverk:g})=>{var m;const v=ie(),k=wg(a),b=D.useCallback(E=>{const B=a.find(J=>J.id===E);B&&d(B)},[a,d]),j=ue(k[0].fom),y=ue(k[k.length-1].tom),[p,T]=D.useState(j),[h,M]=D.useState(y),R=D.useCallback(()=>{p.subtract(1,"month").isBefore(j)||(T(p.subtract(1,"month")),M(h.subtract(1,"month")))},[p,h,j]),_=D.useCallback(()=>{h.add(1,"month").isAfter(y)||(T(p.add(1,"month")),M(h.add(1,"month")))},[p,h,j]),L=D.useCallback(()=>{p.add(3,"month").isAfter(h)||(T(p.add(1,"month")),M(h.subtract(1,"month")))},[p,h]),H=D.useCallback(()=>{h.add(1,"month").diff(p.subtract(1,"month"),"months")<36&&(T(p.subtract(1,"month")),M(h.add(1,"month")))},[p,h]);return l.jsxs(l.Fragment,{children:[l.jsx(F,{fourtyPx:!0}),l.jsx(wn,{startDate:ue(p).toDate(),endDate:ue(h).add(1,"days").toDate(),children:l.jsx(wn.Row,{label:((m=g.find(E=>E.kode===i))==null?void 0:m.navn)||"-",icon:Og(i),children:k.map(E=>l.jsx(wn.Period,{start:ue(E.fom).toDate(),end:ue(E.tom).toDate(),status:E.status,icon:qg[E.status],onSelectPeriod:()=>b(E.id),isActive:(o==null?void 0:o.id)===E.id,"aria-controls":"panel-tilbakekreving",id:E.id.toString()},E.id))})}),l.jsx(F,{twentyPx:!0}),l.jsxs(Da,{children:[l.jsx(Z,{className:Pr.margin,size:"small",icon:l.jsx(Ga,{"aria-hidden":!0}),onClick:L,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),l.jsx(Z,{className:Pr.margin,size:"small",icon:l.jsx(Ja,{"aria-hidden":!0}),onClick:H,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),l.jsx(Z,{className:Pr.margin,size:"small",icon:l.jsx(Or,{"aria-hidden":!0}),onClick:R,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),l.jsx(Z,{className:Pr.margin,size:"small",icon:l.jsx(Br,{"aria-hidden":!0}),onClick:_,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};function Eg(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ls={exports:{}};(function(a,o){(function(d,i){a.exports=i()})(wu,function(){var d;function i(){return d.apply(null,arguments)}function g(e){d=e}function m(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function v(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function k(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function b(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(k(e,n))return!1;return!0}function j(e){return e===void 0}function y(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function p(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function T(e,n){var r=[],t,s=e.length;for(t=0;t<s;++t)r.push(n(e[t],t));return r}function h(e,n){for(var r in n)k(n,r)&&(e[r]=n[r]);return k(n,"toString")&&(e.toString=n.toString),k(n,"valueOf")&&(e.valueOf=n.valueOf),e}function M(e,n,r,t){return Ht(e,n,r,t,!0).utc()}function R(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function _(e){return e._pf==null&&(e._pf=R()),e._pf}var L;Array.prototype.some?L=Array.prototype.some:L=function(e){var n=Object(this),r=n.length>>>0,t;for(t=0;t<r;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};function H(e){var n=null,r=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(n=_(e),r=L.call(n.parsedDateParts,function(s){return s!=null}),t=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&r),e._strict&&(t=t&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function E(e){var n=M(NaN);return e!=null?h(_(n),e):_(n).userInvalidated=!0,n}var B=i.momentProperties=[],J=!1;function Pe(e,n){var r,t,s,u=B.length;if(j(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),j(n._i)||(e._i=n._i),j(n._f)||(e._f=n._f),j(n._l)||(e._l=n._l),j(n._strict)||(e._strict=n._strict),j(n._tzm)||(e._tzm=n._tzm),j(n._isUTC)||(e._isUTC=n._isUTC),j(n._offset)||(e._offset=n._offset),j(n._pf)||(e._pf=_(n)),j(n._locale)||(e._locale=n._locale),u>0)for(r=0;r<u;r++)t=B[r],s=n[t],j(s)||(e[t]=s);return e}function Ee(e){Pe(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),J===!1&&(J=!0,i.updateOffset(this),J=!1)}function te(e){return e instanceof Ee||e!=null&&e._isAMomentObject!=null}function nn(e){i.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function ge(e,n){var r=!0;return h(function(){if(i.deprecationHandler!=null&&i.deprecationHandler(null,e),r){var t=[],s,u,f,w=arguments.length;for(u=0;u<w;u++){if(s="",typeof arguments[u]=="object"){s+=`
[`+u+"] ";for(f in arguments[0])k(arguments[0],f)&&(s+=f+": "+arguments[0][f]+", ");s=s.slice(0,-2)}else s=arguments[u];t.push(s)}nn(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),r=!1}return n.apply(this,arguments)},n)}var Ye={};function rn(e,n){i.deprecationHandler!=null&&i.deprecationHandler(e,n),Ye[e]||(nn(n),Ye[e]=!0)}i.suppressDeprecationWarnings=!1,i.deprecationHandler=null;function pe(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function kn(e){var n,r;for(r in e)k(e,r)&&(n=e[r],pe(n)?this[r]=n:this["_"+r]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Se(e,n){var r=h({},e),t;for(t in n)k(n,t)&&(v(e[t])&&v(n[t])?(r[t]={},h(r[t],e[t]),h(r[t],n[t])):n[t]!=null?r[t]=n[t]:delete r[t]);for(t in e)k(e,t)&&!k(n,t)&&v(e[t])&&(r[t]=h({},r[t]));return r}function U(e){e!=null&&this.set(e)}var N;Object.keys?N=Object.keys:N=function(e){var n,r=[];for(n in e)k(e,n)&&r.push(n);return r};var Q={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function $(e,n,r){var t=this._calendar[e]||this._calendar.sameElse;return pe(t)?t.call(n,r):t}function X(e,n,r){var t=""+Math.abs(e),s=n-t.length,u=e>=0;return(u?r?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+t}var le=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,we=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Re={},Te={};function q(e,n,r,t){var s=t;typeof t=="string"&&(s=function(){return this[t]()}),e&&(Te[e]=s),n&&(Te[n[0]]=function(){return X(s.apply(this,arguments),n[1],n[2])}),r&&(Te[r]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function oe(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function je(e){var n=e.match(le),r,t;for(r=0,t=n.length;r<t;r++)Te[n[r]]?n[r]=Te[n[r]]:n[r]=oe(n[r]);return function(s){var u="",f;for(f=0;f<t;f++)u+=pe(n[f])?n[f].call(s,e):n[f];return u}}function Ie(e,n){return e.isValid()?(n=Ue(n,e.localeData()),Re[n]=Re[n]||je(n),Re[n](e)):e.localeData().invalidDate()}function Ue(e,n){var r=5;function t(s){return n.longDateFormat(s)||s}for(we.lastIndex=0;r>=0&&we.test(e);)e=e.replace(we,t),we.lastIndex=0,r-=1;return e}var ys={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function fs(e){var n=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return n||!r?n:(this._longDateFormat[e]=r.match(le).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var bs="Invalid date";function cs(){return this._invalidDate}var Ts="%d",js=/\d{1,2}/;function _s(e){return this._ordinal.replace("%d",e)}var xs={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ps(e,n,r,t){var s=this._relativeTime[r];return pe(s)?s(e,n,r,t):s.replace(/%d/i,e)}function Ss(e,n){var r=this._relativeTime[e>0?"future":"past"];return pe(r)?r(n):r.replace(/%s/i,n)}var Pt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Oe(e){return typeof e=="string"?Pt[e]||Pt[e.toLowerCase()]:void 0}function Vr(e){var n={},r,t;for(t in e)k(e,t)&&(r=Oe(t),r&&(n[r]=e[t]));return n}var Rs={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function qs(e){var n=[],r;for(r in e)k(e,r)&&n.push({unit:r,priority:Rs[r]});return n.sort(function(t,s){return t.priority-s.priority}),n}var St=/\d/,qe=/\d\d/,Rt=/\d{3}/,Nr=/\d{4}/,tr=/[+-]?\d{6}/,ee=/\d\d?/,qt=/\d\d\d\d?/,At=/\d\d\d\d\d\d?/,ar=/\d{1,3}/,Ir=/\d{1,4}/,sr=/[+-]?\d{1,6}/,cn=/\d+/,ir=/[+-]?\d+/,As=/Z|[+-]\d\d:?\d\d/gi,lr=/Z|[+-]\d\d(?::?\d\d)?/gi,Fs=/[+-]?\d+(\.\d{1,3})?/,Mn=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Tn=/^[1-9]\d?/,Ur=/^([1-9]\d|\d)/,or;or={};function O(e,n,r){or[e]=pe(n)?n:function(t,s){return t&&r?r:n}}function ws(e,n){return k(or,e)?or[e](n._strict,n._locale):new RegExp(Os(e))}function Os(e){return Le(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,r,t,s,u){return r||t||s||u}))}function Le(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Be(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function G(e){var n=+e,r=0;return n!==0&&isFinite(n)&&(r=Be(n)),r}var Gr={};function W(e,n){var r,t=n,s;for(typeof e=="string"&&(e=[e]),y(n)&&(t=function(u,f){f[n]=G(u)}),s=e.length,r=0;r<s;r++)Gr[e[r]]=t}function Vn(e,n){W(e,function(r,t,s,u){s._w=s._w||{},n(r,s._w,s,u)})}function Bs(e,n,r){n!=null&&k(Gr,e)&&Gr[e](n,r._a,r,e)}function dr(e){return e%4===0&&e%100!==0||e%400===0}var he=0,Ke=1,Ge=2,ke=3,De=4,Ce=5,mn=6,Es=7,Ds=8;q("Y",0,0,function(){var e=this.year();return e<=9999?X(e,4):"+"+e}),q(0,["YY",2],0,function(){return this.year()%100}),q(0,["YYYY",4],0,"year"),q(0,["YYYYY",5],0,"year"),q(0,["YYYYYY",6,!0],0,"year"),O("Y",ir),O("YY",ee,qe),O("YYYY",Ir,Nr),O("YYYYY",sr,tr),O("YYYYYY",sr,tr),W(["YYYYY","YYYYYY"],he),W("YYYY",function(e,n){n[he]=e.length===2?i.parseTwoDigitYear(e):G(e)}),W("YY",function(e,n){n[he]=i.parseTwoDigitYear(e)}),W("Y",function(e,n){n[he]=parseInt(e,10)});function Nn(e){return dr(e)?366:365}i.parseTwoDigitYear=function(e){return G(e)+(G(e)>68?1900:2e3)};var Ft=jn("FullYear",!0);function Ms(){return dr(this.year())}function jn(e,n){return function(r){return r!=null?(wt(this,e,r),i.updateOffset(this,n),this):In(this,e)}}function In(e,n){if(!e.isValid())return NaN;var r=e._d,t=e._isUTC;switch(n){case"Milliseconds":return t?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return t?r.getUTCSeconds():r.getSeconds();case"Minutes":return t?r.getUTCMinutes():r.getMinutes();case"Hours":return t?r.getUTCHours():r.getHours();case"Date":return t?r.getUTCDate():r.getDate();case"Day":return t?r.getUTCDay():r.getDay();case"Month":return t?r.getUTCMonth():r.getMonth();case"FullYear":return t?r.getUTCFullYear():r.getFullYear();default:return NaN}}function wt(e,n,r){var t,s,u,f,w;if(!(!e.isValid()||isNaN(r))){switch(t=e._d,s=e._isUTC,n){case"Milliseconds":return void(s?t.setUTCMilliseconds(r):t.setMilliseconds(r));case"Seconds":return void(s?t.setUTCSeconds(r):t.setSeconds(r));case"Minutes":return void(s?t.setUTCMinutes(r):t.setMinutes(r));case"Hours":return void(s?t.setUTCHours(r):t.setHours(r));case"Date":return void(s?t.setUTCDate(r):t.setDate(r));case"FullYear":break;default:return}u=r,f=e.month(),w=e.date(),w=w===29&&f===1&&!dr(u)?28:w,s?t.setUTCFullYear(u,f,w):t.setFullYear(u,f,w)}}function Vs(e){return e=Oe(e),pe(this[e])?this[e]():this}function Ns(e,n){if(typeof e=="object"){e=Vr(e);var r=qs(e),t,s=r.length;for(t=0;t<s;t++)this[r[t].unit](e[r[t].unit])}else if(e=Oe(e),pe(this[e]))return this[e](n);return this}function Is(e,n){return(e%n+n)%n}var de;Array.prototype.indexOf?de=Array.prototype.indexOf:de=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function Yr(e,n){if(isNaN(e)||isNaN(n))return NaN;var r=Is(n,12);return e+=(n-r)/12,r===1?dr(e)?29:28:31-r%7%2}q("M",["MM",2],"Mo",function(){return this.month()+1}),q("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),q("MMMM",0,0,function(e){return this.localeData().months(this,e)}),O("M",ee,Tn),O("MM",ee,qe),O("MMM",function(e,n){return n.monthsShortRegex(e)}),O("MMMM",function(e,n){return n.monthsRegex(e)}),W(["M","MM"],function(e,n){n[Ke]=G(e)-1}),W(["MMM","MMMM"],function(e,n,r,t){var s=r._locale.monthsParse(e,t,r._strict);s!=null?n[Ke]=s:_(r).invalidMonth=e});var Us="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Ot="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Bt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Gs=Mn,Ys=Mn;function Ls(e,n){return e?m(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Bt).test(n)?"format":"standalone"][e.month()]:m(this._months)?this._months:this._months.standalone}function Ks(e,n){return e?m(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Bt.test(n)?"format":"standalone"][e.month()]:m(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Cs(e,n,r){var t,s,u,f=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)u=M([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(u,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(u,"").toLocaleLowerCase();return r?n==="MMM"?(s=de.call(this._shortMonthsParse,f),s!==-1?s:null):(s=de.call(this._longMonthsParse,f),s!==-1?s:null):n==="MMM"?(s=de.call(this._shortMonthsParse,f),s!==-1?s:(s=de.call(this._longMonthsParse,f),s!==-1?s:null)):(s=de.call(this._longMonthsParse,f),s!==-1?s:(s=de.call(this._shortMonthsParse,f),s!==-1?s:null))}function Hs(e,n,r){var t,s,u;if(this._monthsParseExact)return Cs.call(this,e,n,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++)if(s=M([2e3,t]),r&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),!r&&!this._monthsParse[t]&&(u="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[t]=new RegExp(u.replace(".",""),"i")),r&&n==="MMMM"&&this._longMonthsParse[t].test(e)||r&&n==="MMM"&&this._shortMonthsParse[t].test(e)||!r&&this._monthsParse[t].test(e))return t}function Et(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=G(n);else if(n=e.localeData().monthsParse(n),!y(n))return e}var r=n,t=e.date();return t=t<29?t:Math.min(t,Yr(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,t):e._d.setMonth(r,t),e}function Dt(e){return e!=null?(Et(this,e),i.updateOffset(this,!0),this):In(this,"Month")}function $s(){return Yr(this.year(),this.month())}function zs(e){return this._monthsParseExact?(k(this,"_monthsRegex")||Mt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(k(this,"_monthsShortRegex")||(this._monthsShortRegex=Gs),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Ws(e){return this._monthsParseExact?(k(this,"_monthsRegex")||Mt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(k(this,"_monthsRegex")||(this._monthsRegex=Ys),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Mt(){function e(V,Y){return Y.length-V.length}var n=[],r=[],t=[],s,u,f,w;for(s=0;s<12;s++)u=M([2e3,s]),f=Le(this.monthsShort(u,"")),w=Le(this.months(u,"")),n.push(f),r.push(w),t.push(w),t.push(f);n.sort(e),r.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Zs(e,n,r,t,s,u,f){var w;return e<100&&e>=0?(w=new Date(e+400,n,r,t,s,u,f),isFinite(w.getFullYear())&&w.setFullYear(e)):w=new Date(e,n,r,t,s,u,f),w}function Un(e){var n,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,n=new Date(Date.UTC.apply(null,r)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function ur(e,n,r){var t=7+n-r,s=(7+Un(e,0,t).getUTCDay()-n)%7;return-s+t-1}function Vt(e,n,r,t,s){var u=(7+r-t)%7,f=ur(e,t,s),w=1+7*(n-1)+u+f,V,Y;return w<=0?(V=e-1,Y=Nn(V)+w):w>Nn(e)?(V=e+1,Y=w-Nn(e)):(V=e,Y=w),{year:V,dayOfYear:Y}}function Gn(e,n,r){var t=ur(e.year(),n,r),s=Math.floor((e.dayOfYear()-t-1)/7)+1,u,f;return s<1?(f=e.year()-1,u=s+He(f,n,r)):s>He(e.year(),n,r)?(u=s-He(e.year(),n,r),f=e.year()+1):(f=e.year(),u=s),{week:u,year:f}}function He(e,n,r){var t=ur(e,n,r),s=ur(e+1,n,r);return(Nn(e)-t+s)/7}q("w",["ww",2],"wo","week"),q("W",["WW",2],"Wo","isoWeek"),O("w",ee,Tn),O("ww",ee,qe),O("W",ee,Tn),O("WW",ee,qe),Vn(["w","ww","W","WW"],function(e,n,r,t){n[t.substr(0,1)]=G(e)});function Js(e){return Gn(e,this._week.dow,this._week.doy).week}var Qs={dow:0,doy:6};function Xs(){return this._week.dow}function ei(){return this._week.doy}function ni(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function ri(e){var n=Gn(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}q("d",0,"do","day"),q("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),q("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),q("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),q("e",0,0,"weekday"),q("E",0,0,"isoWeekday"),O("d",ee),O("e",ee),O("E",ee),O("dd",function(e,n){return n.weekdaysMinRegex(e)}),O("ddd",function(e,n){return n.weekdaysShortRegex(e)}),O("dddd",function(e,n){return n.weekdaysRegex(e)}),Vn(["dd","ddd","dddd"],function(e,n,r,t){var s=r._locale.weekdaysParse(e,t,r._strict);s!=null?n.d=s:_(r).invalidWeekday=e}),Vn(["d","e","E"],function(e,n,r,t){n[t]=G(e)});function ti(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function ai(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Lr(e,n){return e.slice(n,7).concat(e.slice(0,n))}var si="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Nt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ii="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),li=Mn,oi=Mn,di=Mn;function ui(e,n){var r=m(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?Lr(r,this._week.dow):e?r[e.day()]:r}function gi(e){return e===!0?Lr(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function ki(e){return e===!0?Lr(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function mi(e,n,r){var t,s,u,f=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)u=M([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(u,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(u,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(u,"").toLocaleLowerCase();return r?n==="dddd"?(s=de.call(this._weekdaysParse,f),s!==-1?s:null):n==="ddd"?(s=de.call(this._shortWeekdaysParse,f),s!==-1?s:null):(s=de.call(this._minWeekdaysParse,f),s!==-1?s:null):n==="dddd"?(s=de.call(this._weekdaysParse,f),s!==-1||(s=de.call(this._shortWeekdaysParse,f),s!==-1)?s:(s=de.call(this._minWeekdaysParse,f),s!==-1?s:null)):n==="ddd"?(s=de.call(this._shortWeekdaysParse,f),s!==-1||(s=de.call(this._weekdaysParse,f),s!==-1)?s:(s=de.call(this._minWeekdaysParse,f),s!==-1?s:null)):(s=de.call(this._minWeekdaysParse,f),s!==-1||(s=de.call(this._weekdaysParse,f),s!==-1)?s:(s=de.call(this._shortWeekdaysParse,f),s!==-1?s:null))}function vi(e,n,r){var t,s,u;if(this._weekdaysParseExact)return mi.call(this,e,n,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++)if(s=M([2e3,1]).day(t),r&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(u="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[t]=new RegExp(u.replace(".",""),"i")),r&&n==="dddd"&&this._fullWeekdaysParse[t].test(e)||r&&n==="ddd"&&this._shortWeekdaysParse[t].test(e)||r&&n==="dd"&&this._minWeekdaysParse[t].test(e)||!r&&this._weekdaysParse[t].test(e))return t}function pi(e){if(!this.isValid())return e!=null?this:NaN;var n=In(this,"Day");return e!=null?(e=ti(e,this.localeData()),this.add(e-n,"d")):n}function hi(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function yi(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=ai(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function fi(e){return this._weekdaysParseExact?(k(this,"_weekdaysRegex")||Kr.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(k(this,"_weekdaysRegex")||(this._weekdaysRegex=li),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function bi(e){return this._weekdaysParseExact?(k(this,"_weekdaysRegex")||Kr.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(k(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=oi),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function ci(e){return this._weekdaysParseExact?(k(this,"_weekdaysRegex")||Kr.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(k(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=di),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Kr(){function e(ce,Je){return Je.length-ce.length}var n=[],r=[],t=[],s=[],u,f,w,V,Y;for(u=0;u<7;u++)f=M([2e3,1]).day(u),w=Le(this.weekdaysMin(f,"")),V=Le(this.weekdaysShort(f,"")),Y=Le(this.weekdays(f,"")),n.push(w),r.push(V),t.push(Y),s.push(w),s.push(V),s.push(Y);n.sort(e),r.sort(e),t.sort(e),s.sort(e),this._weekdaysRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Cr(){return this.hours()%12||12}function Ti(){return this.hours()||24}q("H",["HH",2],0,"hour"),q("h",["hh",2],0,Cr),q("k",["kk",2],0,Ti),q("hmm",0,0,function(){return""+Cr.apply(this)+X(this.minutes(),2)}),q("hmmss",0,0,function(){return""+Cr.apply(this)+X(this.minutes(),2)+X(this.seconds(),2)}),q("Hmm",0,0,function(){return""+this.hours()+X(this.minutes(),2)}),q("Hmmss",0,0,function(){return""+this.hours()+X(this.minutes(),2)+X(this.seconds(),2)});function It(e,n){q(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}It("a",!0),It("A",!1);function Ut(e,n){return n._meridiemParse}O("a",Ut),O("A",Ut),O("H",ee,Ur),O("h",ee,Tn),O("k",ee,Tn),O("HH",ee,qe),O("hh",ee,qe),O("kk",ee,qe),O("hmm",qt),O("hmmss",At),O("Hmm",qt),O("Hmmss",At),W(["H","HH"],ke),W(["k","kk"],function(e,n,r){var t=G(e);n[ke]=t===24?0:t}),W(["a","A"],function(e,n,r){r._isPm=r._locale.isPM(e),r._meridiem=e}),W(["h","hh"],function(e,n,r){n[ke]=G(e),_(r).bigHour=!0}),W("hmm",function(e,n,r){var t=e.length-2;n[ke]=G(e.substr(0,t)),n[De]=G(e.substr(t)),_(r).bigHour=!0}),W("hmmss",function(e,n,r){var t=e.length-4,s=e.length-2;n[ke]=G(e.substr(0,t)),n[De]=G(e.substr(t,2)),n[Ce]=G(e.substr(s)),_(r).bigHour=!0}),W("Hmm",function(e,n,r){var t=e.length-2;n[ke]=G(e.substr(0,t)),n[De]=G(e.substr(t))}),W("Hmmss",function(e,n,r){var t=e.length-4,s=e.length-2;n[ke]=G(e.substr(0,t)),n[De]=G(e.substr(t,2)),n[Ce]=G(e.substr(s))});function ji(e){return(e+"").toLowerCase().charAt(0)==="p"}var _i=/[ap]\.?m?\.?/i,xi=jn("Hours",!0);function Pi(e,n,r){return e>11?r?"pm":"PM":r?"am":"AM"}var Gt={calendar:Q,longDateFormat:ys,invalidDate:bs,ordinal:Ts,dayOfMonthOrdinalParse:js,relativeTime:xs,months:Us,monthsShort:Ot,week:Qs,weekdays:si,weekdaysMin:ii,weekdaysShort:Nt,meridiemParse:_i},ae={},Yn={},Ln;function Si(e,n){var r,t=Math.min(e.length,n.length);for(r=0;r<t;r+=1)if(e[r]!==n[r])return r;return t}function Yt(e){return e&&e.toLowerCase().replace("_","-")}function Ri(e){for(var n=0,r,t,s,u;n<e.length;){for(u=Yt(e[n]).split("-"),r=u.length,t=Yt(e[n+1]),t=t?t.split("-"):null;r>0;){if(s=gr(u.slice(0,r).join("-")),s)return s;if(t&&t.length>=r&&Si(u,t)>=r-1)break;r--}n++}return Ln}function qi(e){return!!(e&&e.match("^[^/\\\\]*$"))}function gr(e){var n=null,r;if(ae[e]===void 0&&a&&a.exports&&qi(e))try{n=Ln._abbr,r=Eg,r("./locale/"+e),tn(n)}catch{ae[e]=null}return ae[e]}function tn(e,n){var r;return e&&(j(n)?r=$e(e):r=Hr(e,n),r?Ln=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Ln._abbr}function Hr(e,n){if(n!==null){var r,t=Gt;if(n.abbr=e,ae[e]!=null)rn("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=ae[e]._config;else if(n.parentLocale!=null)if(ae[n.parentLocale]!=null)t=ae[n.parentLocale]._config;else if(r=gr(n.parentLocale),r!=null)t=r._config;else return Yn[n.parentLocale]||(Yn[n.parentLocale]=[]),Yn[n.parentLocale].push({name:e,config:n}),null;return ae[e]=new U(Se(t,n)),Yn[e]&&Yn[e].forEach(function(s){Hr(s.name,s.config)}),tn(e),ae[e]}else return delete ae[e],null}function Ai(e,n){if(n!=null){var r,t,s=Gt;ae[e]!=null&&ae[e].parentLocale!=null?ae[e].set(Se(ae[e]._config,n)):(t=gr(e),t!=null&&(s=t._config),n=Se(s,n),t==null&&(n.abbr=e),r=new U(n),r.parentLocale=ae[e],ae[e]=r),tn(e)}else ae[e]!=null&&(ae[e].parentLocale!=null?(ae[e]=ae[e].parentLocale,e===tn()&&tn(e)):ae[e]!=null&&delete ae[e]);return ae[e]}function $e(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Ln;if(!m(e)){if(n=gr(e),n)return n;e=[e]}return Ri(e)}function Fi(){return N(ae)}function $r(e){var n,r=e._a;return r&&_(e).overflow===-2&&(n=r[Ke]<0||r[Ke]>11?Ke:r[Ge]<1||r[Ge]>Yr(r[he],r[Ke])?Ge:r[ke]<0||r[ke]>24||r[ke]===24&&(r[De]!==0||r[Ce]!==0||r[mn]!==0)?ke:r[De]<0||r[De]>59?De:r[Ce]<0||r[Ce]>59?Ce:r[mn]<0||r[mn]>999?mn:-1,_(e)._overflowDayOfYear&&(n<he||n>Ge)&&(n=Ge),_(e)._overflowWeeks&&n===-1&&(n=Es),_(e)._overflowWeekday&&n===-1&&(n=Ds),_(e).overflow=n),e}var wi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Oi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Bi=/Z|[+-]\d\d(?::?\d\d)?/,kr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],zr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ei=/^\/?Date\((-?\d+)/i,Di=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Mi={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Lt(e){var n,r,t=e._i,s=wi.exec(t)||Oi.exec(t),u,f,w,V,Y=kr.length,ce=zr.length;if(s){for(_(e).iso=!0,n=0,r=Y;n<r;n++)if(kr[n][1].exec(s[1])){f=kr[n][0],u=kr[n][2]!==!1;break}if(f==null){e._isValid=!1;return}if(s[3]){for(n=0,r=ce;n<r;n++)if(zr[n][1].exec(s[3])){w=(s[2]||" ")+zr[n][0];break}if(w==null){e._isValid=!1;return}}if(!u&&w!=null){e._isValid=!1;return}if(s[4])if(Bi.exec(s[4]))V="Z";else{e._isValid=!1;return}e._f=f+(w||"")+(V||""),Zr(e)}else e._isValid=!1}function Vi(e,n,r,t,s,u){var f=[Ni(e),Ot.indexOf(n),parseInt(r,10),parseInt(t,10),parseInt(s,10)];return u&&f.push(parseInt(u,10)),f}function Ni(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function Ii(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Ui(e,n,r){if(e){var t=Nt.indexOf(e),s=new Date(n[0],n[1],n[2]).getDay();if(t!==s)return _(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function Gi(e,n,r){if(e)return Mi[e];if(n)return 0;var t=parseInt(r,10),s=t%100,u=(t-s)/100;return u*60+s}function Kt(e){var n=Di.exec(Ii(e._i)),r;if(n){if(r=Vi(n[4],n[3],n[2],n[5],n[6],n[7]),!Ui(n[1],r,e))return;e._a=r,e._tzm=Gi(n[8],n[9],n[10]),e._d=Un.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),_(e).rfc2822=!0}else e._isValid=!1}function Yi(e){var n=Ei.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(Lt(e),e._isValid===!1)delete e._isValid;else return;if(Kt(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:i.createFromInputFallback(e)}i.createFromInputFallback=ge("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function _n(e,n,r){return e??n??r}function Li(e){var n=new Date(i.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function Wr(e){var n,r,t=[],s,u,f;if(!e._d){for(s=Li(e),e._w&&e._a[Ge]==null&&e._a[Ke]==null&&Ki(e),e._dayOfYear!=null&&(f=_n(e._a[he],s[he]),(e._dayOfYear>Nn(f)||e._dayOfYear===0)&&(_(e)._overflowDayOfYear=!0),r=Un(f,0,e._dayOfYear),e._a[Ke]=r.getUTCMonth(),e._a[Ge]=r.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=t[n]=s[n];for(;n<7;n++)e._a[n]=t[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[ke]===24&&e._a[De]===0&&e._a[Ce]===0&&e._a[mn]===0&&(e._nextDay=!0,e._a[ke]=0),e._d=(e._useUTC?Un:Zs).apply(null,t),u=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ke]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==u&&(_(e).weekdayMismatch=!0)}}function Ki(e){var n,r,t,s,u,f,w,V,Y;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(u=1,f=4,r=_n(n.GG,e._a[he],Gn(ne(),1,4).year),t=_n(n.W,1),s=_n(n.E,1),(s<1||s>7)&&(V=!0)):(u=e._locale._week.dow,f=e._locale._week.doy,Y=Gn(ne(),u,f),r=_n(n.gg,e._a[he],Y.year),t=_n(n.w,Y.week),n.d!=null?(s=n.d,(s<0||s>6)&&(V=!0)):n.e!=null?(s=n.e+u,(n.e<0||n.e>6)&&(V=!0)):s=u),t<1||t>He(r,u,f)?_(e)._overflowWeeks=!0:V!=null?_(e)._overflowWeekday=!0:(w=Vt(r,t,s,u,f),e._a[he]=w.year,e._dayOfYear=w.dayOfYear)}i.ISO_8601=function(){},i.RFC_2822=function(){};function Zr(e){if(e._f===i.ISO_8601){Lt(e);return}if(e._f===i.RFC_2822){Kt(e);return}e._a=[],_(e).empty=!0;var n=""+e._i,r,t,s,u,f,w=n.length,V=0,Y,ce;for(s=Ue(e._f,e._locale).match(le)||[],ce=s.length,r=0;r<ce;r++)u=s[r],t=(n.match(ws(u,e))||[])[0],t&&(f=n.substr(0,n.indexOf(t)),f.length>0&&_(e).unusedInput.push(f),n=n.slice(n.indexOf(t)+t.length),V+=t.length),Te[u]?(t?_(e).empty=!1:_(e).unusedTokens.push(u),Bs(u,t,e)):e._strict&&!t&&_(e).unusedTokens.push(u);_(e).charsLeftOver=w-V,n.length>0&&_(e).unusedInput.push(n),e._a[ke]<=12&&_(e).bigHour===!0&&e._a[ke]>0&&(_(e).bigHour=void 0),_(e).parsedDateParts=e._a.slice(0),_(e).meridiem=e._meridiem,e._a[ke]=Ci(e._locale,e._a[ke],e._meridiem),Y=_(e).era,Y!==null&&(e._a[he]=e._locale.erasConvertYear(Y,e._a[he])),Wr(e),$r(e)}function Ci(e,n,r){var t;return r==null?n:e.meridiemHour!=null?e.meridiemHour(n,r):(e.isPM!=null&&(t=e.isPM(r),t&&n<12&&(n+=12),!t&&n===12&&(n=0)),n)}function Hi(e){var n,r,t,s,u,f,w=!1,V=e._f.length;if(V===0){_(e).invalidFormat=!0,e._d=new Date(NaN);return}for(s=0;s<V;s++)u=0,f=!1,n=Pe({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[s],Zr(n),H(n)&&(f=!0),u+=_(n).charsLeftOver,u+=_(n).unusedTokens.length*10,_(n).score=u,w?u<t&&(t=u,r=n):(t==null||u<t||f)&&(t=u,r=n,f&&(w=!0));h(e,r||n)}function $i(e){if(!e._d){var n=Vr(e._i),r=n.day===void 0?n.date:n.day;e._a=T([n.year,n.month,r,n.hour,n.minute,n.second,n.millisecond],function(t){return t&&parseInt(t,10)}),Wr(e)}}function zi(e){var n=new Ee($r(Ct(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function Ct(e){var n=e._i,r=e._f;return e._locale=e._locale||$e(e._l),n===null||r===void 0&&n===""?E({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),te(n)?new Ee($r(n)):(p(n)?e._d=n:m(r)?Hi(e):r?Zr(e):Wi(e),H(e)||(e._d=null),e))}function Wi(e){var n=e._i;j(n)?e._d=new Date(i.now()):p(n)?e._d=new Date(n.valueOf()):typeof n=="string"?Yi(e):m(n)?(e._a=T(n.slice(0),function(r){return parseInt(r,10)}),Wr(e)):v(n)?$i(e):y(n)?e._d=new Date(n):i.createFromInputFallback(e)}function Ht(e,n,r,t,s){var u={};return(n===!0||n===!1)&&(t=n,n=void 0),(r===!0||r===!1)&&(t=r,r=void 0),(v(e)&&b(e)||m(e)&&e.length===0)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=s,u._l=r,u._i=e,u._f=n,u._strict=t,zi(u)}function ne(e,n,r,t){return Ht(e,n,r,t,!1)}var Zi=ge("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ne.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:E()}),Ji=ge("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ne.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:E()});function $t(e,n){var r,t;if(n.length===1&&m(n[0])&&(n=n[0]),!n.length)return ne();for(r=n[0],t=1;t<n.length;++t)(!n[t].isValid()||n[t][e](r))&&(r=n[t]);return r}function Qi(){var e=[].slice.call(arguments,0);return $t("isBefore",e)}function Xi(){var e=[].slice.call(arguments,0);return $t("isAfter",e)}var el=function(){return Date.now?Date.now():+new Date},Kn=["year","quarter","month","week","day","hour","minute","second","millisecond"];function nl(e){var n,r=!1,t,s=Kn.length;for(n in e)if(k(e,n)&&!(de.call(Kn,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(t=0;t<s;++t)if(e[Kn[t]]){if(r)return!1;parseFloat(e[Kn[t]])!==G(e[Kn[t]])&&(r=!0)}return!0}function rl(){return this._isValid}function tl(){return Me(NaN)}function mr(e){var n=Vr(e),r=n.year||0,t=n.quarter||0,s=n.month||0,u=n.week||n.isoWeek||0,f=n.day||0,w=n.hour||0,V=n.minute||0,Y=n.second||0,ce=n.millisecond||0;this._isValid=nl(n),this._milliseconds=+ce+Y*1e3+V*6e4+w*1e3*60*60,this._days=+f+u*7,this._months=+s+t*3+r*12,this._data={},this._locale=$e(),this._bubble()}function vr(e){return e instanceof mr}function Jr(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function al(e,n,r){var t=Math.min(e.length,n.length),s=Math.abs(e.length-n.length),u=0,f;for(f=0;f<t;f++)G(e[f])!==G(n[f])&&u++;return u+s}function zt(e,n){q(e,0,0,function(){var r=this.utcOffset(),t="+";return r<0&&(r=-r,t="-"),t+X(~~(r/60),2)+n+X(~~r%60,2)})}zt("Z",":"),zt("ZZ",""),O("Z",lr),O("ZZ",lr),W(["Z","ZZ"],function(e,n,r){r._useUTC=!0,r._tzm=Qr(lr,e)});var sl=/([\+\-]|\d\d)/gi;function Qr(e,n){var r=(n||"").match(e),t,s,u;return r===null?null:(t=r[r.length-1]||[],s=(t+"").match(sl)||["-",0,0],u=+(s[1]*60)+G(s[2]),u===0?0:s[0]==="+"?u:-u)}function Xr(e,n){var r,t;return n._isUTC?(r=n.clone(),t=(te(e)||p(e)?e.valueOf():ne(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+t),i.updateOffset(r,!1),r):ne(e).local()}function et(e){return-Math.round(e._d.getTimezoneOffset())}i.updateOffset=function(){};function il(e,n,r){var t=this._offset||0,s;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Qr(lr,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&n&&(s=et(this)),this._offset=e,this._isUTC=!0,s!=null&&this.add(s,"m"),t!==e&&(!n||this._changeInProgress?Qt(this,Me(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,i.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:et(this)}function ll(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function ol(e){return this.utcOffset(0,e)}function dl(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(et(this),"m")),this}function ul(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Qr(As,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function gl(e){return this.isValid()?(e=e?ne(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function kl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function ml(){if(!j(this._isDSTShifted))return this._isDSTShifted;var e={},n;return Pe(e,this),e=Ct(e),e._a?(n=e._isUTC?M(e._a):ne(e._a),this._isDSTShifted=this.isValid()&&al(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function vl(){return this.isValid()?!this._isUTC:!1}function pl(){return this.isValid()?this._isUTC:!1}function Wt(){return this.isValid()?this._isUTC&&this._offset===0:!1}var hl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,yl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Me(e,n){var r=e,t=null,s,u,f;return vr(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:y(e)||!isNaN(+e)?(r={},n?r[n]=+e:r.milliseconds=+e):(t=hl.exec(e))?(s=t[1]==="-"?-1:1,r={y:0,d:G(t[Ge])*s,h:G(t[ke])*s,m:G(t[De])*s,s:G(t[Ce])*s,ms:G(Jr(t[mn]*1e3))*s}):(t=yl.exec(e))?(s=t[1]==="-"?-1:1,r={y:vn(t[2],s),M:vn(t[3],s),w:vn(t[4],s),d:vn(t[5],s),h:vn(t[6],s),m:vn(t[7],s),s:vn(t[8],s)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(f=fl(ne(r.from),ne(r.to)),r={},r.ms=f.milliseconds,r.M=f.months),u=new mr(r),vr(e)&&k(e,"_locale")&&(u._locale=e._locale),vr(e)&&k(e,"_isValid")&&(u._isValid=e._isValid),u}Me.fn=mr.prototype,Me.invalid=tl;function vn(e,n){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*n}function Zt(e,n){var r={};return r.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(n)&&--r.months,r.milliseconds=+n-+e.clone().add(r.months,"M"),r}function fl(e,n){var r;return e.isValid()&&n.isValid()?(n=Xr(n,e),e.isBefore(n)?r=Zt(e,n):(r=Zt(n,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Jt(e,n){return function(r,t){var s,u;return t!==null&&!isNaN(+t)&&(rn(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),u=r,r=t,t=u),s=Me(r,t),Qt(this,s,e),this}}function Qt(e,n,r,t){var s=n._milliseconds,u=Jr(n._days),f=Jr(n._months);e.isValid()&&(t=t??!0,f&&Et(e,In(e,"Month")+f*r),u&&wt(e,"Date",In(e,"Date")+u*r),s&&e._d.setTime(e._d.valueOf()+s*r),t&&i.updateOffset(e,u||f))}var bl=Jt(1,"add"),cl=Jt(-1,"subtract");function Xt(e){return typeof e=="string"||e instanceof String}function Tl(e){return te(e)||p(e)||Xt(e)||y(e)||_l(e)||jl(e)||e===null||e===void 0}function jl(e){var n=v(e)&&!b(e),r=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],s,u,f=t.length;for(s=0;s<f;s+=1)u=t[s],r=r||k(e,u);return n&&r}function _l(e){var n=m(e),r=!1;return n&&(r=e.filter(function(t){return!y(t)&&Xt(e)}).length===0),n&&r}function xl(e){var n=v(e)&&!b(e),r=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],s,u;for(s=0;s<t.length;s+=1)u=t[s],r=r||k(e,u);return n&&r}function Pl(e,n){var r=e.diff(n,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function Sl(e,n){arguments.length===1&&(arguments[0]?Tl(arguments[0])?(e=arguments[0],n=void 0):xl(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var r=e||ne(),t=Xr(r,this).startOf("day"),s=i.calendarFormat(this,t)||"sameElse",u=n&&(pe(n[s])?n[s].call(this,r):n[s]);return this.format(u||this.localeData().calendar(s,this,ne(r)))}function Rl(){return new Ee(this)}function ql(e,n){var r=te(e)?e:ne(e);return this.isValid()&&r.isValid()?(n=Oe(n)||"millisecond",n==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(n).valueOf()):!1}function Al(e,n){var r=te(e)?e:ne(e);return this.isValid()&&r.isValid()?(n=Oe(n)||"millisecond",n==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(n).valueOf()<r.valueOf()):!1}function Fl(e,n,r,t){var s=te(e)?e:ne(e),u=te(n)?n:ne(n);return this.isValid()&&s.isValid()&&u.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(s,r):!this.isBefore(s,r))&&(t[1]===")"?this.isBefore(u,r):!this.isAfter(u,r))):!1}function wl(e,n){var r=te(e)?e:ne(e),t;return this.isValid()&&r.isValid()?(n=Oe(n)||"millisecond",n==="millisecond"?this.valueOf()===r.valueOf():(t=r.valueOf(),this.clone().startOf(n).valueOf()<=t&&t<=this.clone().endOf(n).valueOf())):!1}function Ol(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function Bl(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function El(e,n,r){var t,s,u;if(!this.isValid())return NaN;if(t=Xr(e,this),!t.isValid())return NaN;switch(s=(t.utcOffset()-this.utcOffset())*6e4,n=Oe(n),n){case"year":u=pr(this,t)/12;break;case"month":u=pr(this,t);break;case"quarter":u=pr(this,t)/3;break;case"second":u=(this-t)/1e3;break;case"minute":u=(this-t)/6e4;break;case"hour":u=(this-t)/36e5;break;case"day":u=(this-t-s)/864e5;break;case"week":u=(this-t-s)/6048e5;break;default:u=this-t}return r?u:Be(u)}function pr(e,n){if(e.date()<n.date())return-pr(n,e);var r=(n.year()-e.year())*12+(n.month()-e.month()),t=e.clone().add(r,"months"),s,u;return n-t<0?(s=e.clone().add(r-1,"months"),u=(n-t)/(t-s)):(s=e.clone().add(r+1,"months"),u=(n-t)/(s-t)),-(r+u)||0}i.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",i.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Dl(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Ml(e){if(!this.isValid())return null;var n=e!==!0,r=n?this.clone().utc():this;return r.year()<0||r.year()>9999?Ie(r,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):pe(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ie(r,"Z")):Ie(r,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Vl(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",r,t,s,u;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),r="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s="-MM-DD[T]HH:mm:ss.SSS",u=n+'[")]',this.format(r+t+s+u)}function Nl(e){e||(e=this.isUtc()?i.defaultFormatUtc:i.defaultFormat);var n=Ie(this,e);return this.localeData().postformat(n)}function Il(e,n){return this.isValid()&&(te(e)&&e.isValid()||ne(e).isValid())?Me({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function Ul(e){return this.from(ne(),e)}function Gl(e,n){return this.isValid()&&(te(e)&&e.isValid()||ne(e).isValid())?Me({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function Yl(e){return this.to(ne(),e)}function ea(e){var n;return e===void 0?this._locale._abbr:(n=$e(e),n!=null&&(this._locale=n),this)}var na=ge("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ra(){return this._locale}var hr=1e3,xn=60*hr,yr=60*xn,ta=(365*400+97)*24*yr;function Pn(e,n){return(e%n+n)%n}function aa(e,n,r){return e<100&&e>=0?new Date(e+400,n,r)-ta:new Date(e,n,r).valueOf()}function sa(e,n,r){return e<100&&e>=0?Date.UTC(e+400,n,r)-ta:Date.UTC(e,n,r)}function Ll(e){var n,r;if(e=Oe(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?sa:aa,e){case"year":n=r(this.year(),0,1);break;case"quarter":n=r(this.year(),this.month()-this.month()%3,1);break;case"month":n=r(this.year(),this.month(),1);break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=r(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=Pn(n+(this._isUTC?0:this.utcOffset()*xn),yr);break;case"minute":n=this._d.valueOf(),n-=Pn(n,xn);break;case"second":n=this._d.valueOf(),n-=Pn(n,hr);break}return this._d.setTime(n),i.updateOffset(this,!0),this}function Kl(e){var n,r;if(e=Oe(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?sa:aa,e){case"year":n=r(this.year()+1,0,1)-1;break;case"quarter":n=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=r(this.year(),this.month()+1,1)-1;break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=yr-Pn(n+(this._isUTC?0:this.utcOffset()*xn),yr)-1;break;case"minute":n=this._d.valueOf(),n+=xn-Pn(n,xn)-1;break;case"second":n=this._d.valueOf(),n+=hr-Pn(n,hr)-1;break}return this._d.setTime(n),i.updateOffset(this,!0),this}function Cl(){return this._d.valueOf()-(this._offset||0)*6e4}function Hl(){return Math.floor(this.valueOf()/1e3)}function $l(){return new Date(this.valueOf())}function zl(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Wl(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Zl(){return this.isValid()?this.toISOString():null}function Jl(){return H(this)}function Ql(){return h({},_(this))}function Xl(){return _(this).overflow}function eo(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}q("N",0,0,"eraAbbr"),q("NN",0,0,"eraAbbr"),q("NNN",0,0,"eraAbbr"),q("NNNN",0,0,"eraName"),q("NNNNN",0,0,"eraNarrow"),q("y",["y",1],"yo","eraYear"),q("y",["yy",2],0,"eraYear"),q("y",["yyy",3],0,"eraYear"),q("y",["yyyy",4],0,"eraYear"),O("N",nt),O("NN",nt),O("NNN",nt),O("NNNN",ko),O("NNNNN",mo),W(["N","NN","NNN","NNNN","NNNNN"],function(e,n,r,t){var s=r._locale.erasParse(e,t,r._strict);s?_(r).era=s:_(r).invalidEra=e}),O("y",cn),O("yy",cn),O("yyy",cn),O("yyyy",cn),O("yo",vo),W(["y","yy","yyy","yyyy"],he),W(["yo"],function(e,n,r,t){var s;r._locale._eraYearOrdinalRegex&&(s=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?n[he]=r._locale.eraYearOrdinalParse(e,s):n[he]=parseInt(e,10)});function no(e,n){var r,t,s,u=this._eras||$e("en")._eras;for(r=0,t=u.length;r<t;++r){switch(typeof u[r].since){case"string":s=i(u[r].since).startOf("day"),u[r].since=s.valueOf();break}switch(typeof u[r].until){case"undefined":u[r].until=1/0;break;case"string":s=i(u[r].until).startOf("day").valueOf(),u[r].until=s.valueOf();break}}return u}function ro(e,n,r){var t,s,u=this.eras(),f,w,V;for(e=e.toUpperCase(),t=0,s=u.length;t<s;++t)if(f=u[t].name.toUpperCase(),w=u[t].abbr.toUpperCase(),V=u[t].narrow.toUpperCase(),r)switch(n){case"N":case"NN":case"NNN":if(w===e)return u[t];break;case"NNNN":if(f===e)return u[t];break;case"NNNNN":if(V===e)return u[t];break}else if([f,w,V].indexOf(e)>=0)return u[t]}function to(e,n){var r=e.since<=e.until?1:-1;return n===void 0?i(e.since).year():i(e.since).year()+(n-e.offset)*r}function ao(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].name;return""}function so(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].narrow;return""}function io(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].abbr;return""}function lo(){var e,n,r,t,s=this.localeData().eras();for(e=0,n=s.length;e<n;++e)if(r=s[e].since<=s[e].until?1:-1,t=this.clone().startOf("day").valueOf(),s[e].since<=t&&t<=s[e].until||s[e].until<=t&&t<=s[e].since)return(this.year()-i(s[e].since).year())*r+s[e].offset;return this.year()}function oo(e){return k(this,"_erasNameRegex")||rt.call(this),e?this._erasNameRegex:this._erasRegex}function uo(e){return k(this,"_erasAbbrRegex")||rt.call(this),e?this._erasAbbrRegex:this._erasRegex}function go(e){return k(this,"_erasNarrowRegex")||rt.call(this),e?this._erasNarrowRegex:this._erasRegex}function nt(e,n){return n.erasAbbrRegex(e)}function ko(e,n){return n.erasNameRegex(e)}function mo(e,n){return n.erasNarrowRegex(e)}function vo(e,n){return n._eraYearOrdinalRegex||cn}function rt(){var e=[],n=[],r=[],t=[],s,u,f,w,V,Y=this.eras();for(s=0,u=Y.length;s<u;++s)f=Le(Y[s].name),w=Le(Y[s].abbr),V=Le(Y[s].narrow),n.push(f),e.push(w),r.push(V),t.push(f),t.push(w),t.push(V);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}q(0,["gg",2],0,function(){return this.weekYear()%100}),q(0,["GG",2],0,function(){return this.isoWeekYear()%100});function fr(e,n){q(0,[e,e.length],0,n)}fr("gggg","weekYear"),fr("ggggg","weekYear"),fr("GGGG","isoWeekYear"),fr("GGGGG","isoWeekYear"),O("G",ir),O("g",ir),O("GG",ee,qe),O("gg",ee,qe),O("GGGG",Ir,Nr),O("gggg",Ir,Nr),O("GGGGG",sr,tr),O("ggggg",sr,tr),Vn(["gggg","ggggg","GGGG","GGGGG"],function(e,n,r,t){n[t.substr(0,2)]=G(e)}),Vn(["gg","GG"],function(e,n,r,t){n[t]=i.parseTwoDigitYear(e)});function po(e){return ia.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function ho(e){return ia.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function yo(){return He(this.year(),1,4)}function fo(){return He(this.isoWeekYear(),1,4)}function bo(){var e=this.localeData()._week;return He(this.year(),e.dow,e.doy)}function co(){var e=this.localeData()._week;return He(this.weekYear(),e.dow,e.doy)}function ia(e,n,r,t,s){var u;return e==null?Gn(this,t,s).year:(u=He(e,t,s),n>u&&(n=u),To.call(this,e,n,r,t,s))}function To(e,n,r,t,s){var u=Vt(e,n,r,t,s),f=Un(u.year,0,u.dayOfYear);return this.year(f.getUTCFullYear()),this.month(f.getUTCMonth()),this.date(f.getUTCDate()),this}q("Q",0,"Qo","quarter"),O("Q",St),W("Q",function(e,n){n[Ke]=(G(e)-1)*3});function jo(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}q("D",["DD",2],"Do","date"),O("D",ee,Tn),O("DD",ee,qe),O("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient}),W(["D","DD"],Ge),W("Do",function(e,n){n[Ge]=G(e.match(ee)[0])});var la=jn("Date",!0);q("DDD",["DDDD",3],"DDDo","dayOfYear"),O("DDD",ar),O("DDDD",Rt),W(["DDD","DDDD"],function(e,n,r){r._dayOfYear=G(e)});function _o(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}q("m",["mm",2],0,"minute"),O("m",ee,Ur),O("mm",ee,qe),W(["m","mm"],De);var xo=jn("Minutes",!1);q("s",["ss",2],0,"second"),O("s",ee,Ur),O("ss",ee,qe),W(["s","ss"],Ce);var Po=jn("Seconds",!1);q("S",0,0,function(){return~~(this.millisecond()/100)}),q(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),q(0,["SSS",3],0,"millisecond"),q(0,["SSSS",4],0,function(){return this.millisecond()*10}),q(0,["SSSSS",5],0,function(){return this.millisecond()*100}),q(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),q(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),q(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),q(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),O("S",ar,St),O("SS",ar,qe),O("SSS",ar,Rt);var an,oa;for(an="SSSS";an.length<=9;an+="S")O(an,cn);function So(e,n){n[mn]=G(("0."+e)*1e3)}for(an="S";an.length<=9;an+="S")W(an,So);oa=jn("Milliseconds",!1),q("z",0,0,"zoneAbbr"),q("zz",0,0,"zoneName");function Ro(){return this._isUTC?"UTC":""}function qo(){return this._isUTC?"Coordinated Universal Time":""}var P=Ee.prototype;P.add=bl,P.calendar=Sl,P.clone=Rl,P.diff=El,P.endOf=Kl,P.format=Nl,P.from=Il,P.fromNow=Ul,P.to=Gl,P.toNow=Yl,P.get=Vs,P.invalidAt=Xl,P.isAfter=ql,P.isBefore=Al,P.isBetween=Fl,P.isSame=wl,P.isSameOrAfter=Ol,P.isSameOrBefore=Bl,P.isValid=Jl,P.lang=na,P.locale=ea,P.localeData=ra,P.max=Ji,P.min=Zi,P.parsingFlags=Ql,P.set=Ns,P.startOf=Ll,P.subtract=cl,P.toArray=zl,P.toObject=Wl,P.toDate=$l,P.toISOString=Ml,P.inspect=Vl,typeof Symbol<"u"&&Symbol.for!=null&&(P[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),P.toJSON=Zl,P.toString=Dl,P.unix=Hl,P.valueOf=Cl,P.creationData=eo,P.eraName=ao,P.eraNarrow=so,P.eraAbbr=io,P.eraYear=lo,P.year=Ft,P.isLeapYear=Ms,P.weekYear=po,P.isoWeekYear=ho,P.quarter=P.quarters=jo,P.month=Dt,P.daysInMonth=$s,P.week=P.weeks=ni,P.isoWeek=P.isoWeeks=ri,P.weeksInYear=bo,P.weeksInWeekYear=co,P.isoWeeksInYear=yo,P.isoWeeksInISOWeekYear=fo,P.date=la,P.day=P.days=pi,P.weekday=hi,P.isoWeekday=yi,P.dayOfYear=_o,P.hour=P.hours=xi,P.minute=P.minutes=xo,P.second=P.seconds=Po,P.millisecond=P.milliseconds=oa,P.utcOffset=il,P.utc=ol,P.local=dl,P.parseZone=ul,P.hasAlignedHourOffset=gl,P.isDST=kl,P.isLocal=vl,P.isUtcOffset=pl,P.isUtc=Wt,P.isUTC=Wt,P.zoneAbbr=Ro,P.zoneName=qo,P.dates=ge("dates accessor is deprecated. Use date instead.",la),P.months=ge("months accessor is deprecated. Use month instead",Dt),P.years=ge("years accessor is deprecated. Use year instead",Ft),P.zone=ge("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",ll),P.isDSTShifted=ge("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",ml);function Ao(e){return ne(e*1e3)}function Fo(){return ne.apply(null,arguments).parseZone()}function da(e){return e}var C=U.prototype;C.calendar=$,C.longDateFormat=fs,C.invalidDate=cs,C.ordinal=_s,C.preparse=da,C.postformat=da,C.relativeTime=Ps,C.pastFuture=Ss,C.set=kn,C.eras=no,C.erasParse=ro,C.erasConvertYear=to,C.erasAbbrRegex=uo,C.erasNameRegex=oo,C.erasNarrowRegex=go,C.months=Ls,C.monthsShort=Ks,C.monthsParse=Hs,C.monthsRegex=Ws,C.monthsShortRegex=zs,C.week=Js,C.firstDayOfYear=ei,C.firstDayOfWeek=Xs,C.weekdays=ui,C.weekdaysMin=ki,C.weekdaysShort=gi,C.weekdaysParse=vi,C.weekdaysRegex=fi,C.weekdaysShortRegex=bi,C.weekdaysMinRegex=ci,C.isPM=ji,C.meridiem=Pi;function br(e,n,r,t){var s=$e(),u=M().set(t,n);return s[r](u,e)}function ua(e,n,r){if(y(e)&&(n=e,e=void 0),e=e||"",n!=null)return br(e,n,r,"month");var t,s=[];for(t=0;t<12;t++)s[t]=br(e,t,r,"month");return s}function tt(e,n,r,t){typeof e=="boolean"?(y(n)&&(r=n,n=void 0),n=n||""):(n=e,r=n,e=!1,y(n)&&(r=n,n=void 0),n=n||"");var s=$e(),u=e?s._week.dow:0,f,w=[];if(r!=null)return br(n,(r+u)%7,t,"day");for(f=0;f<7;f++)w[f]=br(n,(f+u)%7,t,"day");return w}function wo(e,n){return ua(e,n,"months")}function Oo(e,n){return ua(e,n,"monthsShort")}function Bo(e,n,r){return tt(e,n,r,"weekdays")}function Eo(e,n,r){return tt(e,n,r,"weekdaysShort")}function Do(e,n,r){return tt(e,n,r,"weekdaysMin")}tn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,r=G(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+r}}),i.lang=ge("moment.lang is deprecated. Use moment.locale instead.",tn),i.langData=ge("moment.langData is deprecated. Use moment.localeData instead.",$e);var ze=Math.abs;function Mo(){var e=this._data;return this._milliseconds=ze(this._milliseconds),this._days=ze(this._days),this._months=ze(this._months),e.milliseconds=ze(e.milliseconds),e.seconds=ze(e.seconds),e.minutes=ze(e.minutes),e.hours=ze(e.hours),e.months=ze(e.months),e.years=ze(e.years),this}function ga(e,n,r,t){var s=Me(n,r);return e._milliseconds+=t*s._milliseconds,e._days+=t*s._days,e._months+=t*s._months,e._bubble()}function Vo(e,n){return ga(this,e,n,1)}function No(e,n){return ga(this,e,n,-1)}function ka(e){return e<0?Math.floor(e):Math.ceil(e)}function Io(){var e=this._milliseconds,n=this._days,r=this._months,t=this._data,s,u,f,w,V;return e>=0&&n>=0&&r>=0||e<=0&&n<=0&&r<=0||(e+=ka(at(r)+n)*864e5,n=0,r=0),t.milliseconds=e%1e3,s=Be(e/1e3),t.seconds=s%60,u=Be(s/60),t.minutes=u%60,f=Be(u/60),t.hours=f%24,n+=Be(f/24),V=Be(ma(n)),r+=V,n-=ka(at(V)),w=Be(r/12),r%=12,t.days=n,t.months=r,t.years=w,this}function ma(e){return e*4800/146097}function at(e){return e*146097/4800}function Uo(e){if(!this.isValid())return NaN;var n,r,t=this._milliseconds;if(e=Oe(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+t/864e5,r=this._months+ma(n),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(n=this._days+Math.round(at(this._months)),e){case"week":return n/7+t/6048e5;case"day":return n+t/864e5;case"hour":return n*24+t/36e5;case"minute":return n*1440+t/6e4;case"second":return n*86400+t/1e3;case"millisecond":return Math.floor(n*864e5)+t;default:throw new Error("Unknown unit "+e)}}function We(e){return function(){return this.as(e)}}var va=We("ms"),Go=We("s"),Yo=We("m"),Lo=We("h"),Ko=We("d"),Co=We("w"),Ho=We("M"),$o=We("Q"),zo=We("y"),Wo=va;function Zo(){return Me(this)}function Jo(e){return e=Oe(e),this.isValid()?this[e+"s"]():NaN}function pn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Qo=pn("milliseconds"),Xo=pn("seconds"),ed=pn("minutes"),nd=pn("hours"),rd=pn("days"),td=pn("months"),ad=pn("years");function sd(){return Be(this.days()/7)}var Ze=Math.round,Sn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function id(e,n,r,t,s){return s.relativeTime(n||1,!!r,e,t)}function ld(e,n,r,t){var s=Me(e).abs(),u=Ze(s.as("s")),f=Ze(s.as("m")),w=Ze(s.as("h")),V=Ze(s.as("d")),Y=Ze(s.as("M")),ce=Ze(s.as("w")),Je=Ze(s.as("y")),sn=u<=r.ss&&["s",u]||u<r.s&&["ss",u]||f<=1&&["m"]||f<r.m&&["mm",f]||w<=1&&["h"]||w<r.h&&["hh",w]||V<=1&&["d"]||V<r.d&&["dd",V];return r.w!=null&&(sn=sn||ce<=1&&["w"]||ce<r.w&&["ww",ce]),sn=sn||Y<=1&&["M"]||Y<r.M&&["MM",Y]||Je<=1&&["y"]||["yy",Je],sn[2]=n,sn[3]=+e>0,sn[4]=t,id.apply(null,sn)}function od(e){return e===void 0?Ze:typeof e=="function"?(Ze=e,!0):!1}function dd(e,n){return Sn[e]===void 0?!1:n===void 0?Sn[e]:(Sn[e]=n,e==="s"&&(Sn.ss=n-1),!0)}function ud(e,n){if(!this.isValid())return this.localeData().invalidDate();var r=!1,t=Sn,s,u;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(r=e),typeof n=="object"&&(t=Object.assign({},Sn,n),n.s!=null&&n.ss==null&&(t.ss=n.s-1)),s=this.localeData(),u=ld(this,!r,t,s),r&&(u=s.pastFuture(+this,u)),s.postformat(u)}var st=Math.abs;function Rn(e){return(e>0)-(e<0)||+e}function cr(){if(!this.isValid())return this.localeData().invalidDate();var e=st(this._milliseconds)/1e3,n=st(this._days),r=st(this._months),t,s,u,f,w=this.asSeconds(),V,Y,ce,Je;return w?(t=Be(e/60),s=Be(t/60),e%=60,t%=60,u=Be(r/12),r%=12,f=e?e.toFixed(3).replace(/\.?0+$/,""):"",V=w<0?"-":"",Y=Rn(this._months)!==Rn(w)?"-":"",ce=Rn(this._days)!==Rn(w)?"-":"",Je=Rn(this._milliseconds)!==Rn(w)?"-":"",V+"P"+(u?Y+u+"Y":"")+(r?Y+r+"M":"")+(n?ce+n+"D":"")+(s||t||e?"T":"")+(s?Je+s+"H":"")+(t?Je+t+"M":"")+(e?Je+f+"S":"")):"P0D"}var K=mr.prototype;K.isValid=rl,K.abs=Mo,K.add=Vo,K.subtract=No,K.as=Uo,K.asMilliseconds=va,K.asSeconds=Go,K.asMinutes=Yo,K.asHours=Lo,K.asDays=Ko,K.asWeeks=Co,K.asMonths=Ho,K.asQuarters=$o,K.asYears=zo,K.valueOf=Wo,K._bubble=Io,K.clone=Zo,K.get=Jo,K.milliseconds=Qo,K.seconds=Xo,K.minutes=ed,K.hours=nd,K.days=rd,K.weeks=sd,K.months=td,K.years=ad,K.humanize=ud,K.toISOString=cr,K.toString=cr,K.toJSON=cr,K.locale=ea,K.localeData=ra,K.toIsoString=ge("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",cr),K.lang=na,q("X",0,0,"unix"),q("x",0,0,"valueOf"),O("x",ir),O("X",Fs),W("X",function(e,n,r){r._d=new Date(parseFloat(e)*1e3)}),W("x",function(e,n,r){r._d=new Date(G(e))});//! moment.js
return i.version="2.30.1",g(ne),i.fn=P,i.min=Qi,i.max=Xi,i.now=el,i.utc=M,i.unix=Ao,i.months=wo,i.isDate=p,i.locale=tn,i.invalid=E,i.duration=Me,i.isMoment=te,i.weekdays=Bo,i.parseZone=Fo,i.localeData=$e,i.isDuration=vr,i.monthsShort=Oo,i.weekdaysMin=Do,i.defineLocale=Hr,i.updateLocale=Ai,i.locales=Fi,i.weekdaysShort=Eo,i.normalizeUnits=Oe,i.relativeTimeRounding=od,i.relativeTimeThreshold=dd,i.calendarFormat=Pl,i.prototype=P,i.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},i})})(ls);var Dg=ls.exports;const An=Ou(Dg),Mg="_button_8q57x_1",Vg="_cancelButton_8q57x_5",Sa={button:Mg,cancelButton:Vg},Ng=(a,o)=>d=>d&&(Ca(d)(An(a.tom.toString()).subtract(1,"day"))||Ha(d)(a.fom))?o.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,Ig=(a,o)=>{const d=An(a.forstePeriodeTomDato).add(1,"days"),i={fom:o.fom,tom:a.forstePeriodeTomDato},g={fom:d.format(Ia),tom:o.tom};return{forstePeriode:i,andrePeriode:g}},Ug=({periodeData:a,showModal:o,cancelEvent:d,finnesBelopMed0Verdi:i,splitPeriod:g})=>{const m=ie(),v=Bn();return l.jsx(En,{formMethods:v,onSubmit:k=>g(Ig(k,a)),children:l.jsxs(ln,{open:o,"aria-label":m.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:d,width:"medium",children:[l.jsx(ln.Header,{children:l.jsx(dn,{size:"small",children:l.jsx(x,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),l.jsxs(ln.Body,{children:[l.jsx(be,{size:"small",children:l.jsx(x,{id:"DelOppPeriodeModalImpl.Periode"})}),l.jsx(I,{size:"small",children:`${An(a.fom.toString()).format(ye)} - ${An(a.tom.toString()).format(ye)}`}),l.jsx(F,{sixteenPx:!0}),l.jsx(Rr,{name:"forstePeriodeTomDato",label:l.jsx(x,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[re,qr,Ng(a,m)],fromDate:An(a.fom).toDate(),toDate:An(a.tom).toDate()}),i&&l.jsx(ft,{variant:"error",children:l.jsx(x,{id:"DelOppPeriodeModalImpl.BelopEr0"})}),l.jsx(F,{sixteenPx:!0})]}),l.jsxs(ln.Footer,{children:[l.jsx(Z,{size:"small",variant:"primary",className:Sa.button,disabled:!v.formState.isDirty,children:l.jsx(x,{id:"DelOppPeriodeModalImpl.Ok"})}),l.jsx(Z,{size:"small",variant:"secondary",onClick:d,className:Sa.cancelButton,type:"button",children:l.jsx(x,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})},Gg="_timeLineButton_wnej3_1",Yg="_splitPeriodImage_wnej3_24",Lg="_splitPeriodPosition_wnej3_30",Kg="_leftMargin_wnej3_33",Cg="_margin_wnej3_37",Hg="_fix_wnej3_41",ot={timeLineButton:Gg,splitPeriodImage:Yg,splitPeriodPosition:Lg,leftMargin:Kg,margin:Cg,fix:Hg},$g=!1,zg=({setNestePeriode:a,setForrigePeriode:o,readOnly:d,lukkPeriode:i,periode:g,beregnBelop:m,behandlingUuid:v,oppdaterSplittedePerioder:k})=>{const b=ie(),[j,y]=D.useState(!1),[p,T]=D.useState(!1),h=D.useCallback(_=>{y(!0),_.preventDefault()},[y]),M=D.useCallback(()=>{y(!1)},[]),R=_=>{T(!1);const L={belop:g.feilutbetaling,fom:_.forstePeriode.fom,tom:_.forstePeriode.tom,begrunnelse:g.begrunnelse?g.begrunnelse:" "},H={belop:g.feilutbetaling,fom:_.andrePeriode.fom,tom:_.andrePeriode.tom,begrunnelse:g.begrunnelse?g.begrunnelse:" "};m({behandlingUuid:v,perioder:[L,H]}).then(E=>{const{perioder:B}=E;if(B.some(J=>J.belop===0))T(!0);else{const J={fom:L.fom,tom:L.tom,feilutbetaling:B[0].belop},Pe={fom:H.fom,tom:H.tom,feilutbetaling:B[1].belop};M(),k([J,Pe])}})};return l.jsxs(ve,{children:[l.jsxs(be,{size:"small",children:[l.jsx(x,{id:"PeriodeController.Detaljer"}),$g]}),!d&&l.jsxs(l.Fragment,{children:[l.jsx(On,{}),l.jsx(Z,{className:ot.margin,size:"xsmall",icon:l.jsx(Qa,{"aria-hidden":!0}),onClick:h,variant:"tertiary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:l.jsx(x,{id:"PeriodeController.DelOppPerioden"})})]}),j&&l.jsx(Ug,{cancelEvent:M,showModal:j,periodeData:g,splitPeriod:R,finnesBelopMed0Verdi:p}),l.jsx(On,{}),l.jsx(Z,{className:ot.margin,size:"xsmall",icon:l.jsx(Or,{"aria-hidden":!0}),onClick:o,variant:"secondary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.prevPeriod"}),children:l.jsx(x,{id:"PeriodeController.prevPeriodShort"})}),l.jsx(Z,{className:ot.margin,size:"xsmall",icon:l.jsx(Br,{"aria-hidden":!0}),onClick:a,variant:"secondary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:l.jsx(x,{id:"PeriodeController.nextPeriodShort"})}),l.jsx(Z,{size:"xsmall",icon:l.jsx(Va,{"aria-hidden":!0}),onClick:i,variant:"tertiary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.LukkPeriode"})})]})},Wg="_infoSummary_14r2l_1",Zg="_positivNumber_14r2l_8",Jg="_redNumber_14r2l_12",Qg="_resultName_14r2l_17",$n={infoSummary:Wg,positivNumber:Zg,redNumber:Jg,resultName:Qg},Xg=({fom:a,tom:o,feilutbetaling:d,arsakHendelseNavn:i})=>{const g=Na(a,o);return l.jsxs("div",{className:$n.infoSummary,children:[l.jsxs(ve,{children:[l.jsx(be,{size:"small",children:`${ue(a).format(ye)} - ${ue(o).format(ye)}`}),l.jsx(On,{}),l.jsx(I,{size:"small",children:g.formattedString})]}),l.jsx(F,{sixteenPx:!0}),l.jsxs(ve,{gap:"4",children:[l.jsxs(I,{size:"small",className:$n.resultName,children:[l.jsx(x,{id:"PeriodeInformasjon.Feilutbetaling"}),":",l.jsx("span",{className:d?$n.redNumber:$n.positivNumber,children:Ae(d)})]}),i&&l.jsx(I,{size:"small",className:$n.resultName,children:i})]})]})},vt=(a,o)=>se(a.fom).diff(se(o.fom)),Ra=a=>!a.erForeldet&&(a.begrunnelse===void 0||a.erSplittet),ek=a=>{const o=a[a.valgtVilkarResultatType],d=o[o.handletUaktsomhetGrad];return o.tilbakekrevdBelop?{...a,[a.valgtVilkarResultatType]:{...Qn(o,"tilbakekrevdBelop")}}:d&&d.belopSomSkalTilbakekreves?{...a,[a.valgtVilkarResultatType]:{...o,[o.handletUaktsomhetGrad]:{...Qn(d,"belopSomSkalTilbakekreves")}}}:a},nk=(a,o=[])=>o.map((d,i)=>{const g=a.find(k=>k.fom===d.fom&&k.tom===d.tom),m=g&&g[g.valgtVilkarResultatType]?g[g.valgtVilkarResultatType].erBelopetIBehold:void 0,v=g?!!g.erSplittet:!1;return{fom:d.fom,tom:d.tom,isAksjonspunktOpen:!d.erForeldet&&((g==null?void 0:g.begrunnelse)===void 0||v),isGodkjent:!(d.erForeldet||m===!1),id:i}}),os=(a,o)=>o.find(d=>!se(a.fom).isBefore(se(d.fom))&&!se(a.tom).isAfter(se(d.tom))),rk=(a,o)=>o.every(d=>!(se(a.fom).isSameOrBefore(se(d.tom))&&se(d.fom).isSameOrBefore(se(a.tom)))),tk=(a,o,d)=>{const i=a.reduce((m,v)=>m+v.feilutbetaling,0)<d*4,g=o.vilkarsVurdertePerioder.map(m=>{const v=os(m,a);return{...v,harMerEnnEnYtelse:v&&v.ytelser.length>1,...Qn(m,"feilutbetalingBelop"),feilutbetaling:m.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:i}});return{perioder:a.filter(m=>rk(m,g)).map(m=>({...m,harMerEnnEnYtelse:m.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:i})).concat(g)}},ak=(a,o)=>{if(!(!a||!o))return o.map(d=>{const i=os(d,a.perioder),g=i.foreldelseVurderingType?i.foreldelseVurderingType===Xe.FORELDET:i.foreldet;return{redusertBeloper:i.redusertBeloper,ytelser:i.ytelser,feilutbetaling:d.feilutbetaling?d.feilutbetaling:i.feilutbetaling,erTotalBelopUnder4Rettsgebyr:i.erTotalBelopUnder4Rettsgebyr,fom:d.fom,tom:d.tom,årsak:i.årsak,begrunnelse:i.begrunnelse,erForeldet:g||!1}})},sk=(a,o)=>a.perioder.map(d=>({...bg(d,o),fom:d.fom,tom:d.tom})).sort(vt),ik=(a,o)=>({kode:Dr.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:a.filter(d=>!d.erForeldet).map(d=>cg(d,o))}),lk=a=>{if(!a||a.reduce((d,i)=>i.erForeldet?d:d+1,0)<2)return;const o=a.reduce((d,i)=>{const{valgtVilkarResultatType:g}=i,m=i[g],{handletUaktsomhetGrad:v}=m,k=m[v];return k&&k.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?d+1:d},0);if(o>0&&o!==a.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},ok=({perioderForeldelse:a,kodeverkSamlingFpTilbake:o,submitCallback:d,readOnly:i,alleMerknaderFraBeslutter:g,perioder:m,vilkarvurdering:v,rettsgebyr:k,relasjonsRolleType:b,relasjonsRolleTypeKodeverk:j,beregnBelop:y,behandlingUuid:p,formData:T,setFormData:h})=>{var M;const R=tk(m,v,k),[_,L]=D.useState(T||sk(R,a)),[H,E]=D.useState(!!T),[B,J]=D.useState(_==null?void 0:_.find(Ra)),[Pe,Ee]=D.useState(!1),[te,nn]=D.useState();D.useEffect(()=>{nn(lk(_))},[_]);const ge=ak(R,_),Ye=i||(B==null?void 0:B.erForeldet)===!0,rn=_.reduce((q,oe)=>oe.erForeldet?q:q+1,0),pe=g[Dr.VURDER_TILBAKEKREVING],kn=D.useCallback(()=>{Ee(!0),d(ik(_,o[Jn.SARLIG_GRUNN]))},[_]),Se=nk(_,ge),U=Se.some(q=>q.isAksjonspunktOpen),N=B?Se.find(q=>q.fom===B.fom&&q.tom===B.tom):void 0,Q=q=>{const oe=q?_.find(je=>je.fom===q.fom&&je.tom===q.tom):void 0;J(oe)},$=()=>{const q=_.findIndex(oe=>oe.fom===(B==null?void 0:B.fom)&&oe.tom===(B==null?void 0:B.tom));Q(_[q+1])},X=()=>{const q=_.findIndex(oe=>oe.fom===(B==null?void 0:B.fom)&&oe.tom===(B==null?void 0:B.tom));Q(_[q-1])},le=()=>{Q(void 0)},we=q=>{const oe=Qn(q,"erSplittet"),je=_.filter(Ue=>Ue.fom!==oe.fom&&Ue.tom!==oe.tom).concat(oe).sort(vt);L(je),h(je),E(!0),le();const Ie=je.find(Ra);Ie&&Q(Ie)},Re=q=>{const oe=_.find(je=>je.fom===(B==null?void 0:B.fom)&&je.tom===(B==null?void 0:B.tom));if(oe){const je=q.map(Ue=>({...ek(oe),...Ue,erSplittet:!0})),Ie=_.filter(Ue=>Ue.fom!==(B==null?void 0:B.fom)&&Ue.tom!==(B==null?void 0:B.tom)).concat(je).sort(vt);le(),E(!0),L(Ie),h(Ie),Q(je[0])}},Te=ge?ge.find(q=>q.fom===(B==null?void 0:B.fom)&&q.tom===(B==null?void 0:B.tom)):void 0;return l.jsxs(ht,{merknaderFraBeslutter:pe,withoutBorder:!0,children:[l.jsx(dn,{size:"small",children:l.jsx(x,{id:"Behandlingspunkt.Tilbakekreving"})}),l.jsx(F,{twentyPx:!0}),l.jsx(yt,{isAksjonspunktOpen:U,children:[l.jsx(x,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"},"AksjonspunktHjelpetekst")]}),l.jsx(F,{twentyPx:!0}),_&&l.jsxs(l.Fragment,{children:[l.jsx(Bg,{perioder:Se,valgtPeriode:N,setPeriode:Q,relasjonsRolleType:b,relasjonsRolleTypeKodeverk:j}),B&&Te&&l.jsxs("div",{id:"panel-tilbakekreving","aria-controls":N==null?void 0:N.id.toString(),children:[l.jsx("div",{className:Sg.space}),l.jsxs(Ea,{border:!0,children:[l.jsx(zg,{setNestePeriode:$,setForrigePeriode:X,periode:Te,readOnly:i,oppdaterSplittedePerioder:Re,behandlingUuid:p,beregnBelop:y,lukkPeriode:le}),l.jsx(F,{sixteenPx:!0}),l.jsx(Xg,{feilutbetaling:Te.feilutbetaling,fom:Te.fom,tom:Te.tom,arsakHendelseNavn:(M=o[Ne.HENDELSE_TYPE].find(q=>{var oe;return q.kode===((oe=Te.årsak)==null?void 0:oe.hendelseType)}))==null?void 0:M.navn}),l.jsx(F,{twentyPx:!0}),l.jsx(fg,{periode:B,data:Te,antallPerioderMedAksjonspunkt:rn,readOnly:Ye,skjulPeriode:le,oppdaterPeriode:we,kodeverkSamlingFpTilbake:o,vilkarsVurdertePerioder:_},N==null?void 0:N.id)]})]})]}),l.jsx(F,{twentyPx:!0}),te&&l.jsxs(l.Fragment,{children:[l.jsx(ft,{variant:"error",children:l.jsx(x,{id:te})}),l.jsx(F,{twentyPx:!0})]}),l.jsx(jg,{isReadOnly:Ye,isDirty:H,isSubmittable:!U&&!B&&!te,onClick:kn,isSubmitting:Pe})]})},dk={"Behandlingspunkt.Tilbakekreving":"Tilbakekreving","TilbakekrevingAktivitetTabell.Aktivitet":"Aktivitet","TilbakekrevingAktivitetTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingForm.AksjonspunktHjelpetekst":"Fastsett tilbakekreving etter §22-15. Del opp perioden ved behov for ulik vurdering","TilbakekrevingPeriodeForm.VilkarForTilbakekreving":"Vilkårene for tilbakekreving","TilbakekrevingPeriodeForm.oppfylt":"Er vilkårene for tilbakekreving oppfylt?","TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr":"Totalbeløpet er under 4 rettsgebyr. Dersom 6.ledd skal anvendes for å frafalle tilbakekrevingen, må denne anvendes likt på alle periodene.","TilbakekrevingPeriodeForm.Oppdater":"Oppdater","TilbakekrevingPeriodeForm.Avbryt":"Avbryt","TilbakekrevingPeriodeForm.Vurdering":"Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes","TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst":"Hvilke hendelser har ført til feilutbetalingen og vurder valg av hjemmel","TilbakekrevingPeriodeForm.MaVelgeSarligGrunn":"Du må velge minst en Særlig grunn","TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen":"Beløp kan ikke være større enn feilutbetalingen","TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen":"Beløp må være mindre enn feilutbetalingen","TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling":"Feilutbetalt beløp er redusert med <b>kr. {belop},-</b> på grunn av etterbetaling innen samme periode.","TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"Feilutbetalt beløp er redusert med <b>kr. {belop},-</b> på grunn av trekk.","TilbakekrevingPeriodeForm.Aktsomhet":"Aktsomhet","TilbakekrevingPeriodeForm.VurderingAktsomhet":"Vurder hvorfor mottaker burde forstått, må ha forstått eller forsto at utbetalingen skyldtes en feil","TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"Beløpet mottatt i god tro","TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"Begrunn hvorfor mottaker er i god tro","TilbakekrevingPeriodeForm.KopierVilkårsvurdering":"Kopier vilkårsvurdering fra","AktsomhetGradForsettFormPanel.Andel":"Andel som skal tilbakekreves","AktsomhetGradForsettFormPanel.Renter":"Det legges til 10 % renter","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves":"Angi andel som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves":"Andel som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter":"Skal det tillegges renter?","AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"Beløp som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves":"Angi beløp som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon":"Skal særlige grunner gi reduksjon av beløpet?","AktsomhetReduksjonAvBelopFormPanel.Nei":"Nei","AktsomhetReduksjonAvBelopFormPanel.Ja":"Ja","AktsomhetFormPanel.HandletUaktsomhetGrad":"I hvilken grad burde mottaker forstått at utbetalingen skyldtes en feil","AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom":"Burde ha forstått","AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt":"Må ha forstått","AktsomhetFormPanel.AktsomhetTyperLabel.Forsett":"Forsto","AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt":"Når 6. ledd anvendes må alle perioder behandles likt","AktsomhetGradUaktsomhetFormPanel.Nei":"Nei","AktsomhetGradUaktsomhetFormPanel.Ja":"Ja","AktsomhetGradUaktsomhetFormPanel.Tilbakekrev":"Totalbeløpet er under 4 rettsgebyr (6. ledd). Skal det tilbakekreves?","AktsomhetGradUaktsomhetFormPanel.SærligGrunner":"Særlige grunner 4. ledd","AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner":"Vurder særlige grunner du har vektlagt for resultatet","AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst":"Begrunn om det foreligger/ ikke foreligger særlige grunner for reduksjon av beløpet som kreves tilbake. Kryss av hvilke særlige grunner som er vektlagt for resultatet","AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon":"Særlige grunner som er vektlagt (4.ledd)","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","BelopetMottattIGodTroFormPanel.Vurdering":"Vurdering","BelopetMottattIGodTroFormPanel.BelopetIBehold":"Er beløpet i behold?","BelopetMottattIGodTroFormPanel.Ja":"Ja","BelopetMottattIGodTroFormPanel.Nei":"Nei","BelopetMottattIGodTroFormPanel.AngiBelop":"Angi beløp som skal tilbakekreves","BelopetMottattIGodTroFormPanel.IngenTilbakekreving":"Ingen tilbakekreving","SubmitButton.ConfirmInformation":"Bekreft og fortsett","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},uk=Fr(dk),gk=({behandling:a,perioderForeldelse:o,vilkarvurderingsperioder:d,vilkarvurdering:i,beregnBelop:g,kodeverkSamlingFpTilbake:m,submitCallback:v,alleMerknaderFraBeslutter:k,isReadOnly:b,formData:j,setFormData:y,relasjonsRolleType:p,relasjonsRolleTypeKodeverk:T})=>l.jsx(wr,{value:uk,children:l.jsx(ok,{behandlingUuid:a.uuid,perioderForeldelse:o,perioder:d.perioder,rettsgebyr:d.rettsgebyr,vilkarvurdering:i,submitCallback:v,readOnly:b,relasjonsRolleType:p,relasjonsRolleTypeKodeverk:T,alleMerknaderFraBeslutter:k,kodeverkSamlingFpTilbake:m,beregnBelop:g,formData:j,setFormData:y})}),kk=[Dr.VURDER_TILBAKEKREVING],mk=[Fe.VILKARVURDERINGSPERIODER,Fe.VILKARVURDERING,Fe.PERIODER_FORELDELSE],vk=a=>a.length>0?a.some(o=>kd(o.status))?Qe.IKKE_VURDERT:Qe.OPPFYLT:Qe.IKKE_VURDERT,ds=({...a})=>{const o=ie(),{startRequest:d}=Tt.useRestApiRunner(Fe.BEREGNE_BELØP);return z.jsx(_t,{...a,panelEndepunkter:mk,aksjonspunktKoder:kk,prosessPanelKode:jt.TILBAKEKREVING,prosessPanelMenyTekst:o.formatMessage({id:"Behandlingspunkt.Tilbakekreving"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:i=>vk(i.aksjonspunkter),renderPanel:i=>z.jsx(gk,{kodeverkSamlingFpTilbake:a.tilbakekrevingKodeverk,beregnBelop:d,relasjonsRolleType:a.relasjonsRolleType,relasjonsRolleTypeKodeverk:i.alleKodeverk[za.RELASJONSROLLE_TYPE],...i})})};ds.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessInitPanel",props:{relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"tilbakekrevingKodeverkTyper"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var xt=(a=>(a.FORESLA_VEDTAK="5004",a))(xt||{}),us={exports:{}},zn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa;function pk(){if(qa)return zn;qa=1;var a=on,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,b,j){var y,p={},T=null,h=null;j!==void 0&&(T=""+j),b.key!==void 0&&(T=""+b.key),b.ref!==void 0&&(h=b.ref);for(y in b)i.call(b,y)&&!m.hasOwnProperty(y)&&(p[y]=b[y]);if(k&&k.defaultProps)for(y in b=k.defaultProps,b)p[y]===void 0&&(p[y]=b[y]);return{$$typeof:o,type:k,key:T,ref:h,props:p,_owner:g.current}}return zn.Fragment=d,zn.jsx=v,zn.jsxs=v,zn}us.exports=pk();var S=us.exports;const hk="_table_gko8z_1",yk={table:hk},fk=["TilbakekrevingVedtakPeriodeTabell.Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop","TilbakekrevingVedtakPeriodeTabell.Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop","TilbakekrevingVedtakPeriodeTabell.Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves"],bk=({perioder:a,kodeverkSamlingFpTilbake:o})=>{const d=a.map(i=>{var g;return S.jsxs(Sr,{children:[S.jsx(me,{children:S.jsx(I,{size:"small",children:S.jsx(pd,{dateStringFom:i.periode.fom,dateStringTom:i.periode.tom})})}),S.jsx(me,{children:S.jsx(I,{size:"small",children:Ae(i.feilutbetaltBeløp)})}),S.jsx(me,{children:S.jsx(I,{size:"small",children:(g=o[Ne.AKTSOMHET].find(m=>m.kode===i.vurdering))==null?void 0:g.navn})}),S.jsx(me,{children:S.jsx(I,{size:"small",children:i.andelAvBeløp!==void 0&&i.andelAvBeløp!==null?`${i.andelAvBeløp}%`:""})}),S.jsx(me,{children:S.jsx(I,{size:"small",children:i.renterProsent?`${i.renterProsent}%`:""})}),S.jsx(me,{children:S.jsx(I,{size:"small",children:Ae(i.tilbakekrevingBeløp)})}),S.jsx(me,{children:S.jsx(I,{size:"small",children:Ae(i.tilbakekrevingBeløpEtterSkatt)})})]},i.periode.fom)}).concat(S.jsxs(Sr,{children:[S.jsx(me,{children:S.jsx(I,{size:"small",children:S.jsx(x,{id:"TilbakekrevingVedtakPeriodeTabell.Sum"})})}),S.jsx(me,{children:S.jsx(I,{size:"small",children:Ae(a.reduce((i,g)=>i+g.feilutbetaltBeløp,0))})}),S.jsx(me,{}),S.jsx(me,{}),S.jsx(me,{}),S.jsx(me,{children:S.jsx(be,{size:"small",children:Ae(a.reduce((i,g)=>i+g.tilbakekrevingBeløp,0))})}),S.jsx(me,{children:S.jsx(be,{size:"small",children:Ae(a.reduce((i,g)=>i+g.tilbakekrevingBeløpEtterSkatt,0))})})]},"sum"));return S.jsx("div",{className:yk.table,children:S.jsx(bt,{noHover:!0,headerTextCodes:fk,children:d})})},xe={OPPSUMMERING:"OPPSUMMERING",FAKTA:"FAKTA",FORELDELSE:"FORELDELSE",VILKAR:"VILKÅR",SARLIGEGRUNNER:"SÆRLIGEGRUNNER",SARLIGEGRUNNER_ANNET:"SÆRLIGEGRUNNER_ANNET"},ck="_addCircleIcon_84ecs_1",Tk="_imageText_84ecs_7",jk="_addPeriode_84ecs_12",dt={addCircleIcon:ck,imageText:Tk,addPeriode:jk},gs=Dn(3),_k=bn(4e3),xk=[gs,gn],Pk=[re,gs,gn],Sk=({type:a,readOnly:o,fritekstPakrevet:d,maximumLength:i})=>{const g=ie(),{watch:m}=er(),v=m(a)===void 0,[k,b]=D.useState(v&&!d),j=d?Pk:xk;return j.push(i?bn(i):_k),S.jsxs(S.Fragment,{children:[k&&!o&&S.jsxs(S.Fragment,{children:[S.jsx(F,{eightPx:!0}),S.jsxs("div",{onClick:y=>{y.preventDefault(),b(!1)},onKeyDown:y=>{y.preventDefault(),b(!1)},className:dt.addPeriode,role:"button",tabIndex:0,children:[S.jsx(qd,{className:dt.addCircleIcon,title:g.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})}),S.jsx(_e,{size:"small",className:dt.imageText,children:S.jsx(x,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})})]})]}),!k&&S.jsxs(S.Fragment,{children:[S.jsx(F,{eightPx:!0}),S.jsx(un,{name:a,label:g.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst"}),validate:j,maxLength:i||4e3,readOnly:o})]})]})},Rk="_container_aetpe_1",qk="_gulmarkering_aetpe_4",Aa={container:Rk,gulmarkering:qk},pt=({intl:a,vedtaksbrevAvsnitt:o,readOnly:d,perioderSomIkkeHarUtfyltObligatoriskVerdi:i,fritekstOppsummeringPakrevdMenIkkeUtfylt:g=!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:m})=>S.jsxs("div",{className:Aa.container,children:[S.jsx(F,{twentyPx:!0}),S.jsx(dn,{size:"small",children:S.jsx(x,{id:"TilbakekrevingVedtak.Vedtaksbrev"})}),S.jsx(F,{eightPx:!0}),o.map(v=>{const k=v.underavsnittsliste,b=`${v.fom}_${v.tom}`,j=i.some(p=>p===b),y=v.avsnittstype===xe.OPPSUMMERING&&g;return S.jsxs(on.Fragment,{children:[S.jsxs(Tr,{"aria-label":"periode",defaultOpen:j||y,className:j||y?Aa.gulmarkering:"",children:[S.jsx(Tr.Header,{children:S.jsx(Tr.Title,{size:"small",children:v.overskrift?v.overskrift:a.formatMessage({id:"TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift"})})}),S.jsx(Tr.Content,{children:k.map(p=>S.jsxs(on.Fragment,{children:[p.overskrift&&S.jsx(be,{size:"small",children:p.overskrift}),p.brødtekst&&S.jsx(I,{size:"small",children:p.brødtekst}),p.fritekstTillatt&&S.jsxs(S.Fragment,{children:[S.jsx(F,{eightPx:!0}),S.jsx(Sk,{type:p.underavsnittstype?`${b}.${p.underavsnittstype}`:v.avsnittstype,readOnly:d,fritekstPakrevet:p.fritekstPåkrevet,maximumLength:m?1e4:void 0})]}),S.jsx(F,{eightPx:!0})]},(p.underavsnittstype||"")+p.overskrift+p.brødtekst))})]}),S.jsx(F,{eightPx:!0})]},v.avsnittstype+v.fom)})]});pt.buildInitialValues=a=>a.filter(o=>o.underavsnittsliste.some(d=>d.fritekst)).reduce((o,d)=>{const i=d.underavsnittsliste.filter(m=>m.fritekst).reduce((m,v)=>({...m,[v.underavsnittstype?v.underavsnittstype:d.avsnittstype]:yn(v.fritekst)}),{}),g=d.fom?{[`${d.fom}_${d.tom}`]:i}:i;return{...o,...g}},{});const Ak=(a,o,d,i)=>!d||o?!0:i===void 0?!a:!a&&i||i,Fk=({isReadOnly:a,isSubmittable:o,isSubmitting:d,isDirty:i,text:g,onClick:m,hasEmptyRequiredFields:v})=>{const k=ie();return a?null:S.jsx(Z,{size:"small",variant:"primary",loading:d,disabled:Ak(i,d,o,v),onClick:m||ct,type:m?"button":"submit",children:g||k.formatMessage({id:"SubmitButton.ConfirmInformation"})})},wk="_buttonLink_sudxz_1",Ok="_padding_sudxz_8",Bk="_infoTextContainer_sudxz_11",Ek="_infoTextIconColumn_sudxz_14",Dk="_infoTextIcon_sudxz_14",Mk="_infotextColumn_sudxz_26",ut={buttonLink:wk,padding:Ok,infoTextContainer:Bk,infoTextIconColumn:Ek,infoTextIcon:Dk,infotextColumn:Mk},ks=a=>{const o=_d(a,xe.OPPSUMMERING);return{oppsummeringstekst:a[xe.OPPSUMMERING],perioderMedTekst:Object.keys(o).map(d=>({fom:d.split("_")[0],tom:d.split("_")[1],faktaAvsnitt:o[d][xe.FAKTA],foreldelseAvsnitt:o[d][xe.FORELDELSE],vilkaarAvsnitt:o[d][xe.VILKAR],saerligeGrunnerAvsnitt:o[d][xe.SARLIGEGRUNNER],saerligeGrunnerAnnetAvsnitt:o[d][xe.SARLIGEGRUNNER_ANNET]}))}},Vk=(a,o)=>a.some(d=>d.avsnittstype===xe.OPPSUMMERING&&d.underavsnittsliste.some(i=>i.fritekstPåkrevet)&&!o[xe.OPPSUMMERING]),Nk=a=>({kode:xt.FORESLA_VEDTAK,...ks(a)}),Ik=(a,o)=>a.reduce((d,i)=>{const g=`${i.fom}_${i.tom}`,m=o[g];return i.underavsnittsliste.some(v=>v.fritekstPåkrevet&&v.underavsnittstype===xe.FAKTA)&&(!m||!m[xe.FAKTA])||i.underavsnittsliste.some(v=>v.fritekstPåkrevet&&v.underavsnittstype===xe.SARLIGEGRUNNER_ANNET)&&(!m||!m[xe.SARLIGEGRUNNER_ANNET])?d.concat(g):d},[]),Fa=(a,o,d)=>i=>{a({uuid:o,...ks(d)}),i.preventDefault()},Uk=({submitCallback:a,readOnly:o,fetchPreviewVedtaksbrev:d,avsnittsliste:i,behandlingUuid:g,erRevurderingTilbakekrevingKlage:m,erRevurderingTilbakekrevingFeilBeløpBortfalt:v,formData:k,setFormData:b})=>{const j=i,y=D.useMemo(()=>k||pt.buildInitialValues(j),[k,j]),p=ie(),T=Bn({defaultValues:y}),h=T.watch(),M=Vk(j,h),R=Ik(j,h),_=M||R.length>0;return S.jsxs(En,{formMethods:T,onSubmit:L=>a(Nk(L)),setDataOnUnmount:b,children:[S.jsx(F,{twentyPx:!0}),S.jsx(pt,{intl:p,vedtaksbrevAvsnitt:j,readOnly:o,perioderSomIkkeHarUtfyltObligatoriskVerdi:D.useMemo(()=>R,[]),fritekstOppsummeringPakrevdMenIkkeUtfylt:M,erRevurderingTilbakekrevingFeilBeløpBortfalt:v}),S.jsx(F,{twentyPx:!0}),S.jsxs(ve,{gap:"10",children:[S.jsx(Fk,{text:p.formatMessage({id:"TilbakekrevingVedtakForm.TilGodkjenning"}),isReadOnly:o,isSubmittable:R.length===0&&!M,isSubmitting:T.formState.isSubmitting,isDirty:T.formState.isDirty,hasEmptyRequiredFields:_}),R.length===0&&S.jsx("div",{className:ut.padding,children:S.jsx("a",{href:"",onClick:Fa(d,g,h),onKeyDown:L=>L.key==="Enter"?Fa(d,g,h)(L):null,className:Ed(ut.buttonLink,"lenke lenke--frittstaende"),children:S.jsx(x,{id:"TilbakekrevingVedtakForm.ForhandvisBrev"})})})]}),S.jsx(F,{sixteenPx:!0}),m&&S.jsxs(ve,{children:[S.jsx(hd,{className:ut.infoTextIcon}),S.jsx(x,{id:"TilbakekrevingVedtakForm.Infotekst.Klage"})]})]})},Gk=({submitCallback:a,readOnly:o,resultat:d,perioder:i,kodeverkSamlingFpTilbake:g,behandlingUuid:m,avsnittsliste:v,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:b,erRevurderingTilbakekrevingFeilBeløpBortfalt:j,formData:y,setFormData:p})=>{var T;return S.jsxs(S.Fragment,{children:[S.jsx(dn,{size:"small",children:S.jsx(x,{id:"TilbakekrevingVedtak.Vedtak"})}),S.jsx(F,{twentyPx:!0}),S.jsx(_e,{children:S.jsx(x,{id:"TilbakekrevingVedtak.Resultat"})}),S.jsx(I,{size:"small",children:(T=g[Ne.VEDTAK_RESULTAT_TYPE].find(h=>h.kode===d))==null?void 0:T.navn}),S.jsx(F,{sixteenPx:!0}),S.jsx(bk,{perioder:i,kodeverkSamlingFpTilbake:g}),S.jsx(F,{sixteenPx:!0}),S.jsx(Uk,{submitCallback:a,readOnly:o,behandlingUuid:m,avsnittsliste:v,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:b,erRevurderingTilbakekrevingFeilBeløpBortfalt:j,formData:y,setFormData:p})]})},Yk={"TilbakekrevingVedtak.Resultat":"Resultat","TilbakekrevingVedtak.Vedtaksbrev":"Vedtaksbrev","TilbakekrevingVedtak.Vedtak":"Vedtak","TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst":"Legg til utdypende tekst","TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst":"Utdypende tekst","TilbakekrevingVedtakPeriodeTabell.Periode":"Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingVedtakPeriodeTabell.Vurdering":"Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop":"Andel av beløp","TilbakekrevingVedtakPeriodeTabell.Renter":"Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt":"Beløp før skatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves":"Beløp etter skatt","TilbakekrevingVedtakPeriodeTabell.Sum":"Sum","TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift":"Lovhjemler og klagerett","TilbakekrevingVedtakForm.TilGodkjenning":"Til godkjenning","TilbakekrevingVedtakForm.ForhandvisBrev":"Forhåndsvis brev","TilbakekrevingVedtakForm.Infotekst.Klage":"Vedtaksbrev sendes ikke ut fra denne behandlingen, men må sendes av saksbehandler fra klagebehandlingen"},Lk=Fr(Yk),Kk=({behandling:a,beregningsresultat:o,isReadOnly:d,submitCallback:i,kodeverkSamlingFpTilbake:g,formData:m,setFormData:v,vedtaksbrev:k,fetchPreviewVedtaksbrev:b,erRevurderingTilbakekrevingKlage:j,erRevurderingTilbakekrevingFeilBeløpBortfalt:y})=>S.jsx(wr,{value:Lk,children:S.jsx(Gk,{behandlingUuid:a.uuid,perioder:o.beregningResultatPerioder,resultat:o.vedtakResultatType,avsnittsliste:k.avsnittsliste,submitCallback:i,readOnly:d,kodeverkSamlingFpTilbake:g,fetchPreviewVedtaksbrev:b,erRevurderingTilbakekrevingKlage:j,erRevurderingTilbakekrevingFeilBeløpBortfalt:y,formData:m,setFormData:v})}),Ck=[xt.FORESLA_VEDTAK],Hk=[Fe.VEDTAKSBREV,Fe.BEREGNINGSRESULTAT],$k=[gt.RE_KLAGE_KA,gt.RE_KLAGE_NFP],zk=a=>!!a&&$k.some(o=>o===a),Wk=a=>{if(!a)return Qe.IKKE_VURDERT;const{type:o}=a;return o===it.INGEN_TILBAKEBETALING?Qe.IKKE_OPPFYLT:o===it.DELVIS_TILBAKEBETALING||o===it.FULL_TILBAKEBETALING?Qe.OPPFYLT:Qe.IKKE_VURDERT},Zk=a=>()=>()=>{a(!0)},ms=({tilbakekrevingKodeverk:a,opneSokeside:o,harApenRevurdering:d,...i})=>{const g=ie(),[m,v]=D.useState(d),k=D.useCallback(()=>v(!1),[]),[b,j]=D.useState(!1),y=Zk(j),{startRequest:p}=Tt.useRestApiRunner(Fe.PREVIEW_VEDTAKSBREV),T=D.useCallback(_=>p(_).then(xd),[]),{behandling:h}=i,M=h.førsteÅrsak&&zk(h.førsteÅrsak.behandlingArsakType),R=h.førsteÅrsak&&gt.RE_FEILUTBETALT_BELØP_REDUSERT===h.førsteÅrsak.behandlingArsakType;return z.jsxs(z.Fragment,{children:[z.jsx(Dd,{visModal:b,lukkModal:()=>{j(!1),o()},tekst:g.formatMessage({id:"FatterTilbakekrevingVedtakStatusModal.Sendt"})}),m&&z.jsx(Ma,{headerText:g.formatMessage({id:"BehandlingTilbakekrevingIndex.ApenRevurderingHeader"}),bodyText:g.formatMessage({id:"BehandlingTilbakekrevingIndex.ApenRevurdering"}),showModal:!0,submit:k}),z.jsx(_t,{...i,panelEndepunkter:Hk,aksjonspunktKoder:Ck,prosessPanelKode:jt.VEDTAK,prosessPanelMenyTekst:g.formatMessage({id:"Behandlingspunkt.Vedtak"}),skalPanelVisesIMeny:()=>!0,lagringSideEffekter:y,hentOverstyrtStatus:_=>Wk(_.behandling.behandlingsresultat),renderPanel:_=>z.jsx(Kk,{kodeverkSamlingFpTilbake:a,fetchPreviewVedtaksbrev:T,erRevurderingTilbakekrevingKlage:M||!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:R||!1,..._})})]})};ms.__docgenInfo={description:"",methods:[],displayName:"VedtakTilbakekrevingProsessInitPanel",props:{tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"tilbakekrevingKodeverkTyper"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Mr=(a=>(a.AVKLAR_FAKTA_FOR_FEILUTBETALING="7003",a))(Mr||{}),vs={exports:{}},Wn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa;function Jk(){if(wa)return Wn;wa=1;var a=on,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,b,j){var y,p={},T=null,h=null;j!==void 0&&(T=""+j),b.key!==void 0&&(T=""+b.key),b.ref!==void 0&&(h=b.ref);for(y in b)i.call(b,y)&&!m.hasOwnProperty(y)&&(p[y]=b[y]);if(k&&k.defaultProps)for(y in b=k.defaultProps,b)p[y]===void 0&&(p[y]=b[y]);return{$$typeof:o,type:k,key:T,ref:h,props:p,_owner:g.current}}return Wn.Fragment=d,Wn.jsx=v,Wn.jsxs=v,Wn}vs.exports=Jk();var A=vs.exports;const Qk="_feilutbetalingTable_1bepb_1",Xk="_redText_1bepb_8",Oa={feilutbetalingTable:Qk,redText:Xk},hn="perioder",em=["FeilutbetalingInfoPanel.Period","FeilutbetalingInfoPanel.Hendelse","FeilutbetalingInfoPanel.Beløp"],nm=(a,o)=>{const d=a.find(i=>i.hendelseType===o);return d!=null&&d.hendelseUndertyper&&d.hendelseUndertyper.length>0?d.hendelseUndertyper:void 0},rm=({perioder:a,årsaker:o,readOnly:d,behandlePerioderSamlet:i,kodeverkSamlingFpTilbake:g})=>{const{control:m,watch:v,setValue:k,getValues:b}=er(),{fields:j}=Ad({control:m,name:hn}),y=(p,T,h)=>{i&&j.forEach((M,R)=>{T!==R&&(h?b(`${hn}.${R}.årsak`)===h&&k(`${hn}.${R}.${h}.underÅrsak`,p):k(`${hn}.${R}.årsak`,p))})};return A.jsx("div",{className:Oa.feilutbetalingTable,children:A.jsx(bt,{headerTextCodes:em,noHover:!0,children:j.map((p,T)=>{const h=v(`${hn}.${T}.årsak`),M=nm(o,h);return A.jsxs(Sr,{children:[A.jsx(me,{children:`${se(p.fom).format(ye)} - ${se(p.tom).format(ye)}`}),A.jsxs(me,{children:[A.jsx(Ar,{name:`${hn}.${T}.årsak`,selectValues:o.map(R=>{var _;return A.jsx("option",{value:R.hendelseType,children:(_=g[Ne.HENDELSE_TYPE].find(L=>L.kode===R.hendelseType))==null?void 0:_.navn},R.hendelseType)}),validate:[re],disabled:d,onChange:R=>y(R.target.value,T),label:""}),M&&A.jsx(Ar,{name:`${hn}.${T}.${h}.underÅrsak`,selectValues:M.map(R=>{var _;return A.jsx("option",{value:R,children:(_=g[Ne.HENDELSE_UNDERTYPE].find(L=>L.kode===R))==null?void 0:_.navn},R)}),validate:[re],disabled:d,onChange:R=>y(R.target.value,T,h),label:""})]}),A.jsx(me,{className:Oa.redText,children:a?a[T].belop:null})]},p.id)})})})},tm="_textarea_14pq5_1",am="_textPadding_14pq5_4",sm="_redText_14pq5_7",Ba={textarea:tm,textPadding:am,redText:sm},im=Dn(3),lm=bn(1500),ps=a=>a.behandlingFakta.perioder?[...a.behandlingFakta.perioder].sort((o,d)=>se(o.fom).diff(se(d.fom))):[],om=a=>{const{behandlingFakta:{begrunnelse:o}}=a;return{begrunnelse:yn(o),perioder:ps(a).map(d=>{const{fom:i,tom:g,feilutbetalingÅrsakDto:m}=d,v={fom:i,tom:g};if(!m)return v;const{hendelseType:k,hendelseUndertype:b}=m;return{...v,årsak:k,[k]:{underÅrsak:b||null}}})}},dm=(a,o)=>{const d=a.perioder.map(i=>{const g=o.find(v=>v.hendelseType===i.årsak),m=g!=null&&g.hendelseUndertyper?g.hendelseUndertyper.find(v=>{var k;return v===((k=i[i.årsak])==null?void 0:k.underÅrsak)}):void 0;return{fom:i.fom,tom:i.tom,årsak:{hendelseType:g==null?void 0:g.hendelseType,hendelseUndertype:m}}});return{kode:Mr.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:a.begrunnelse,feilutbetalingFakta:d}},um=(a,o)=>{const{hendelseTyper:d}=a;return d.sort((i,g)=>{var m,v;const k=((m=o[Ne.HENDELSE_TYPE].find(h=>h.kode===i.hendelseType))==null?void 0:m.navn)||"",b=((v=o[Ne.HENDELSE_TYPE].find(h=>h.kode===g.hendelseType))==null?void 0:v.navn)||"",j=k.startsWith("§"),y=b.startsWith("§"),p=j?k.replace(/\D/g,""):k,T=y?b.replace(/\D/g,""):b;return j&&y?p-T:p.localeCompare(T)})},gm=({hasOpenAksjonspunkter:a,feilutbetalingAarsak:o,feilutbetalingFakta:d,readOnly:i,alleMerknaderFraBeslutter:g,kodeverkSamlingFpTilbake:m,kodeverkSamlingFpsak:v,formData:k,setFormData:b,submitCallback:j})=>{var y,p;const T=ie(),h=d.behandlingFakta,M=om(d),R=Bn({defaultValues:k||M}),_=R.watch("behandlePerioderSamlet")||!1,L=um(o,m);return A.jsxs(A.Fragment,{children:[A.jsx(yt,{isAksjonspunktOpen:a,children:[A.jsx(x,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"},"1")]}),A.jsx(F,{sixteenPx:!0}),A.jsxs(En,{formMethods:R,onSubmit:H=>j(dm(H,L)),setDataOnUnmount:b,children:[A.jsxs(ve,{gap:"10",wrap:!0,children:[A.jsxs("div",{children:[A.jsx(be,{size:"small",children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),A.jsx(F,{sixteenPx:!0}),A.jsxs(ve,{justify:"space-between",children:[A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),A.jsx(I,{size:"small",children:`${se(h.totalPeriodeFom).format(ye)} - ${se(h.totalPeriodeTom).format(ye)}`})]}),A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),A.jsx(I,{size:"small",className:Ba.redText,children:h.aktuellFeilUtbetaltBeløp})]}),A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),A.jsx(I,{size:"small",children:h.tidligereVarseltBeløp?h.tidligereVarseltBeløp:A.jsx(x,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),A.jsx(F,{sixteenPx:!0}),A.jsx(Za,{name:"behandlePerioderSamlet",label:T.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:i}),A.jsx(F,{sixteenPx:!0}),A.jsx(ht,{merknaderFraBeslutter:g[Mr.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:A.jsx(rm,{perioder:ps(d),behandlePerioderSamlet:_,årsaker:L,readOnly:i,kodeverkSamlingFpTilbake:m})})]}),A.jsxs("div",{children:[A.jsx(be,{size:"small",children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Revurdering"})}),A.jsx(F,{sixteenPx:!0}),A.jsxs(ve,{gap:"4",children:[A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Årsaker"})}),h.behandlingÅrsaker&&A.jsx(I,{size:"small",children:h.behandlingÅrsaker.map(H=>{var E;return(E=v[Ne.BEHANDLING_AARSAK].find(B=>B.kode===H.behandlingArsakType))==null?void 0:E.navn}).join(", ")})]}),h.datoForRevurderingsvedtak&&A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),A.jsx(I,{size:"small",children:se(h.datoForRevurderingsvedtak).format(ye)})]})]}),A.jsx(F,{sixteenPx:!0}),A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Resultat"})}),h.behandlingsresultat&&A.jsx(I,{size:"small",children:(y=v[Ne.BEHANDLING_AARSAK].find(H=>{var E;return H.kode===((E=h.behandlingsresultat)==null?void 0:E.type)}))==null?void 0:y.navn}),A.jsx(F,{sixteenPx:!0}),A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),h.behandlingsresultat&&A.jsx(I,{size:"small",children:h.behandlingsresultat.konsekvenserForYtelsen.map(H=>{var E;return(E=v[Ne.KONSEKVENS_FOR_YTELSEN].find(B=>B.kode===H))==null?void 0:E.navn}).join(", ")}),A.jsx(F,{sixteenPx:!0}),A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),h.tilbakekrevingValg&&A.jsx(I,{size:"small",children:(p=m[Ne.TILBAKEKR_VIDERE_BEH].find(H=>{var E;return H.kode===((E=h.tilbakekrevingValg)==null?void 0:E.videreBehandling)}))==null?void 0:p.navn})]})]}),A.jsx(F,{sixteenPx:!0}),A.jsx("div",{className:Ba.textarea,children:A.jsx(un,{name:"begrunnelse",label:T.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[re,im,lm,gn],maxLength:1500,readOnly:i})}),A.jsx(F,{sixteenPx:!0}),A.jsx(Z,{variant:"primary",size:"small",disabled:i||!R.formState.isDirty||R.formState.isSubmitting,loading:R.formState.isSubmitting,children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Confirm"})})]})]})},km={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},mm=Fr(km),vm=({feilutbetalingFakta:a,feilutbetalingAarsak:o,fagsakYtelseTypeKode:d,isAksjonspunktOpen:i,isReadOnly:g,kodeverkSamlingFpsak:m,kodeverkSamlingFpTilbake:v,alleMerknaderFraBeslutter:k,submitCallback:b,formData:j,setFormData:y})=>{const p=o.find(T=>T.ytelseType===d);if(!p)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${d}`);return A.jsx(wr,{value:mm,children:A.jsx(gm,{feilutbetalingFakta:a,feilutbetalingAarsak:p,alleMerknaderFraBeslutter:k,kodeverkSamlingFpTilbake:v,kodeverkSamlingFpsak:m,submitCallback:b,readOnly:g,hasOpenAksjonspunkter:i,formData:j,setFormData:y})})},pm=[Mr.AVKLAR_FAKTA_FOR_FEILUTBETALING],hm=[Fe.FEILUTBETALING_FAKTA,Fe.FEILUTBETALING_AARSAK],hs=({behandling:a,valgtFaktaSteg:o,registrerFaktaPanel:d,tilbakekrevingKodeverk:i,fagsakYtelseTypeKode:g})=>z.jsx(fd,{behandling:a,valgtFaktaSteg:o,registrerFaktaPanel:d,panelEndepunkter:hm,aksjonspunktKoder:pm,faktaPanelKode:Fd.FEILUTBETALING,faktaPanelMenyTekst:ie().formatMessage({id:"TilbakekrevingFakta.FaktaFeilutbetaling"}),skalPanelVisesIMeny:()=>$a.hasPath(Fe.FEILUTBETALING_FAKTA.name),renderPanel:m=>z.jsx(vm,{fagsakYtelseTypeKode:g,kodeverkSamlingFpTilbake:i,kodeverkSamlingFpsak:m.alleKodeverk,isAksjonspunktOpen:m.harApneAksjonspunkter,isReadOnly:m.readOnly,...m})});hs.__docgenInfo={description:"FeilutbetalingFaktaInitPanel",methods:[],displayName:"FeilutbetalingFaktaInitPanel",props:{valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<tilbakekrevingKodeverkTyper, KodeverkMedNavn[]>"},description:""},fagsakYtelseTypeKode:{required:!0,tsType:{name:"string"},description:""}}};const ym=({behandling:a,fagsak:o,valgtProsessSteg:d,valgtFaktaSteg:i,oppdaterProsessStegOgFaktaPanelIUrl:g,opneSokeside:m,alleBehandlinger:v})=>{const{data:k}=wd.useRestApi(Od.KODEVERK_FPTILBAKE),j=D.useMemo(()=>v.filter(T=>!T.behandlingHenlagt).map(T=>{var h;return{uuid:T.uuid,type:T.type,status:T.status,opprettet:T.opprettet,avsluttet:T.avsluttet,resultatType:(h=T.behandlingsresultat)==null?void 0:h.type}}),[v]).some(T=>T.type===md.REVURDERING&&T.status!==vd.AVSLUTTET),y=D.useCallback(T=>k?z.jsxs(z.Fragment,{children:[z.jsx(hs,{tilbakekrevingKodeverk:k,fagsakYtelseTypeKode:o.fagsakYtelseType,...T}),z.jsx(bd,{...T})]}):z.jsx(z.Fragment,{children:"placeholder"}),[k,o]),p=D.useCallback(T=>k?z.jsxs(z.Fragment,{children:[z.jsx(ts,{...T,relasjonsRolleType:o.relasjonsRolleType,tilbakekrevingKodeverk:k}),z.jsx(ds,{...T,relasjonsRolleType:o.relasjonsRolleType,tilbakekrevingKodeverk:k}),z.jsx(ms,{...T,harApenRevurdering:j,opneSokeside:m,tilbakekrevingKodeverk:k})]}):z.jsx(z.Fragment,{children:"placeholder"}),[k,j,o,m,g]);return k?z.jsxs(z.Fragment,{children:[z.jsx(Bd,{behandling:a,opneSokeside:m,kodeverk:k,erTilbakekreving:!0},a.versjon),z.jsx(cd,{behandling:a,valgtProsessSteg:d,valgtFaktaSteg:i,oppdaterProsessStegOgFaktaPanelIUrl:g,hentFaktaPaneler:y,hentProsessPaneler:p})]}):z.jsx(yd,{})};ym.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPaneler",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};export{ym as default};
