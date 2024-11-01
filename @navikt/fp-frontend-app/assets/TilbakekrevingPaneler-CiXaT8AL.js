import{j as z}from"./jsx-runtime-DR9Q75dM.js";import{R as on,r as D}from"./index-DRjF_FHU.js";import{H as kd,m as Xe,S as Jn,h as Fn,x as Qe,I as Ne,E as md,X as gt,Y as vd,b as pd}from"./index.es-zhgnUGpN.js";import{U as ht,M as x,y as F,c as yt,P as Ea,d as Da,A as ft,X as pa,J as Ma,e as bt,x as Sr,f as ke,O as fn,z as hd,S as yd,F as fd}from"./index.es-CItve0Ui.js";import{F as bd,V as cd}from"./VergeFaktaInitPanel-DMGR1na8.js";import{B as Td}from"./BehandlingContainer-CZ5OpumT.js";import{t as Fr,P as wr,f as Qn,H as dn,B as I,a as ve,b as me,e as jd,V as de,c as re,L as be,g as Va,h as Na,R as ye,i as Ae,G as yn,M as ln,A as Ia,D as _e,C as Ua,E as _d,j as xd,x as Pd}from"./index.es-Cm8OjSrn.js";import{d as ct,f as On,$ as En,A as un,a as ne,Y as gn,c as en,P as qr,q as Rr,C as Sd,g as Ga,h as Br,i as Or,j as Bn,k as Dn,y as bn,b as Ya,l as La,m as se,I as Ka,n as Ca,r as Tt,B as Fe,o as jt,p as Ha,K as $a,M as Ar,D as kt,s as za,u as er,L as qd,w as Wa,N as Rd,E as Tr,t as Ad,v as Fd,x as wd,z as Bd,G as Od,H as Ed}from"./AppIndex.stories-DKPc_YGa.js";import{T as wn,S as Za,a as Ja,b as Qa}from"./Timeline-DurYVv0v.js";import{S as Xa,a as es,b as Dd}from"./index.es-BWk6oJoz.js";import{S as ns}from"./FigureCombination-DpLbW6uX.js";import{P as _t}from"./ProsessDefaultInitPanel-Bm80hKez.js";import{F as Md}from"./FatterVedtakStatusModal-IfKBq1_E.js";import"./bind-BilxuNmH.js";import"./useRestApiRunner-BKOIDkPf.js";import"./BehandlingHenlagtPanel-CKY3pr0L.js";import"./index-rX-Bn4lm.js";import"./iframe-DX98Ae_4.js";import"../sb-preview/runtime.js";import"./SettPaVentReadOnlyModal-CBJ-hybW.js";import"./nb_NO-B9XIc68F.js";const it={INGEN_TILBAKEBETALING:"INGEN_TILBAKEBETALING",DELVIS_TILBAKEBETALING:"DELVIS_TILBAKEBETALING",FULL_TILBAKEBETALING:"FULL_TILBAKEBETALING"};var Er=(a=>(a.VURDER_FORELDELSE="5003",a))(Er||{}),rs={exports:{}},Cn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha;function Vd(){if(ha)return Cn;ha=1;var a=on,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,b,j){var y,p={},c=null,h=null;j!==void 0&&(c=""+j),b.key!==void 0&&(c=""+b.key),b.ref!==void 0&&(h=b.ref);for(y in b)l.call(b,y)&&!m.hasOwnProperty(y)&&(p[y]=b[y]);if(k&&k.defaultProps)for(y in b=k.defaultProps,b)p[y]===void 0&&(p[y]=b[y]);return{$$typeof:o,type:k,key:c,ref:h,props:p,_owner:g.current}}return Cn.Fragment=d,Cn.jsx=v,Cn.jsxs=v,Cn}rs.exports=Vd();var T=rs.exports;const Nd=Dn(3),Id=bn(1500),Ud=a=>a!==Xe.UDEFINERT?a:void 0,Gd=a=>a.foreldet?a.foreldet:Ud(a.foreldelseVurderingType),Yd=a=>({...a,foreldet:Gd(a)}),Ld=({skjulPeriode:a,readOnly:o,periode:d,oppdaterPeriode:l,kodeverkSamlingFpTilbake:g})=>{const m=ve(),v=On({defaultValues:Yd(d)}),k=v.watch("foreldet"),b=k&&k===Xe.FORELDET,j=k&&k===Xe.TILLEGGSFRIST,y=g[Jn.FORELDELSE_VURDERING].filter(p=>p.kode!==Xe.IKKE_VURDERT);return T.jsxs(En,{formMethods:v,onSubmit:p=>l(p),children:[T.jsx(F,{twentyPx:!0}),T.jsx(un,{name:"begrunnelse",label:m.formatMessage({id:"ForeldelsePeriodeForm.Vurdering"}),validate:[ne,Nd,Id,gn],maxLength:1500,readOnly:o}),T.jsx(F,{twentyPx:!0}),T.jsxs(me,{gap:"10",children:[T.jsx(en,{name:"foreldet",label:T.jsx(x,{id:"ForeldelsePeriodeForm.RadioGroup.Foreldet"}),validate:[ne],radios:y.map(p=>({label:p.navn,value:p.kode})),isReadOnly:o}),T.jsxs(jd,{gap:"5",children:[(b||j)&&T.jsx(qr,{name:"foreldelsesfrist",label:m.formatMessage({id:"ForeldelsePeriodeForm.Foreldelsesfrist"}),validate:[ne,Rr],isReadOnly:o}),j&&T.jsx(qr,{name:"oppdagelsesDato",label:m.formatMessage({id:"ForeldelsePeriodeForm.OppdagelsesDato"}),validate:[ne,Rr,Sd],isReadOnly:o,fromDate:de("1970-01-01").toDate(),toDate:de().toDate()})]})]}),T.jsx(F,{twentyPx:!0}),T.jsxs(me,{gap:"4",children:[T.jsx(re,{size:"small",variant:"primary",disabled:!v.formState.isDirty||v.formState.isSubmitting||o,loading:v.formState.isSubmitting,children:T.jsx(x,{id:"ForeldelsePeriodeForm.Oppdater"})}),T.jsx(re,{size:"small",variant:"secondary",onClick:a,type:"button",children:T.jsx(x,{id:"ForeldelsePeriodeForm.Avbryt"})})]})]})},Kd="_margin_1wl4t_1",jr={margin:Kd},Cd=a=>{const o=a.isGodkjent?"success":"danger";return a.isAksjonspunktOpen?"warning":o},Hd=(a=[])=>a.map(o=>({id:o.id,fom:o.fom,tom:o.tom,status:Cd(o)})),$d=a=>a===Fn.MOR||a===Fn.MEDMOR?T.jsx(Xa,{width:20,height:20,color:"var(--a-red-200)"}):a===Fn.FAR?T.jsx(es,{width:20,height:20,color:"var(--a-blue-600)"}):T.jsx(ns,{width:20,height:20}),zd={danger:T.jsx(Ya,{}),success:T.jsx(La,{}),warning:T.jsx(Qa,{})},Wd=({perioder:a,setPeriode:o,valgtPeriode:d,relasjonsRolleType:l,relasjonsRolleTypeKodeverk:g})=>{var m;const v=ve(),k=D.useMemo(()=>Hd(a),[a]),b=D.useCallback(E=>{const O=a.find(Z=>Z.id===E);O&&o(O)},[a,o]),j=de(k[0].fom),y=de(k[k.length-1].tom),[p,c]=D.useState(j),[h,M]=D.useState(y),q=D.useCallback(()=>{p.subtract(1,"month").isBefore(j)||(c(p.subtract(1,"month")),M(h.subtract(1,"month")))},[p,h,j]),_=D.useCallback(()=>{h.add(1,"month").isAfter(y)||(c(p.add(1,"month")),M(h.add(1,"month")))},[p,h,y]),L=D.useCallback(()=>{p.add(3,"month").isAfter(h)||(c(p.add(1,"month")),M(h.subtract(1,"month")))},[p,h]),H=D.useCallback(()=>{h.add(1,"month").diff(p.subtract(1,"month"),"months")<36&&(c(p.subtract(1,"month")),M(h.add(1,"month")))},[p,h]);return T.jsxs(T.Fragment,{children:[T.jsx(F,{fourtyPx:!0}),T.jsx(wn,{startDate:p.toDate(),endDate:h.add(1,"days").toDate(),children:T.jsx(wn.Row,{label:((m=g.find(E=>E.kode===l))==null?void 0:m.navn)||"-",icon:$d(l),children:k.map(E=>T.jsx(wn.Period,{start:de(E.fom).toDate(),end:de(E.tom).toDate(),status:E.status,onSelectPeriod:()=>b(E.id),isActive:(d==null?void 0:d.id)===E.id,icon:zd[E.status],"aria-controls":"panel-tilbakekreving-foreldelse",id:E.id.toString()},E.id))})}),T.jsx(F,{twentyPx:!0}),T.jsxs(Da,{children:[T.jsx(re,{className:jr.margin,size:"small",icon:T.jsx(Ga,{"aria-hidden":!0}),onClick:L,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),T.jsx(re,{className:jr.margin,size:"small",icon:T.jsx(Za,{"aria-hidden":!0}),onClick:H,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),T.jsx(re,{className:jr.margin,size:"small",icon:T.jsx(Br,{"aria-hidden":!0}),onClick:q,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),T.jsx(re,{className:jr.margin,size:"small",icon:T.jsx(Or,{"aria-hidden":!0}),onClick:_,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})},Zd="_button_8q57x_1",Jd="_cancelButton_8q57x_5",ya={button:Zd,cancelButton:Jd},Qd=(a,o)=>d=>d&&(Ka(d)(se(a.tom.toString()).subtract(1,"day"))||Ca(d)(a.fom))?o.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,Xd=(a,o)=>{const d=se(a.forstePeriodeTomDato).add(1,"days"),l={fom:o.fom,tom:a.forstePeriodeTomDato},g={fom:d.format(Ia),tom:o.tom};return{forstePeriode:l,andrePeriode:g}},eu=({periodeData:a,showModal:o,cancelEvent:d,finnesBelopMed0Verdi:l,splitPeriod:g})=>{const m=ve(),v=On();return T.jsx(En,{formMethods:v,onSubmit:k=>g(Xd(k,a)),children:T.jsxs(ln,{width:"medium",open:o,"aria-label":m.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:d,children:[T.jsx(ln.Header,{children:T.jsx(dn,{size:"small",children:T.jsx(x,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),T.jsxs(ln.Body,{children:[T.jsx(be,{size:"small",children:T.jsx(x,{id:"DelOppPeriodeModalImpl.Periode"})}),T.jsx(I,{size:"small",children:`${se(a.fom.toString()).format(ye)} - ${se(a.tom.toString()).format(ye)}`}),T.jsx(F,{sixteenPx:!0}),T.jsx(qr,{name:"forstePeriodeTomDato",label:T.jsx(x,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[ne,Rr,Qd(a,m)],fromDate:se(a.fom).toDate(),toDate:se(a.tom).toDate()}),l&&T.jsx(ft,{variant:"error",children:T.jsx(x,{id:"DelOppPeriodeModalImpl.BelopEr0"})}),T.jsx(F,{sixteenPx:!0})]}),T.jsxs(ln.Footer,{children:[T.jsx(re,{size:"small",variant:"primary",className:ya.button,disabled:!v.formState.isDirty,children:T.jsx(x,{id:"DelOppPeriodeModalImpl.Ok"})}),T.jsx(re,{size:"small",variant:"secondary",onClick:d,className:ya.cancelButton,type:"button",children:T.jsx(x,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})},nu="_timeLineButton_wnej3_1",ru="_splitPeriodImage_wnej3_24",tu="_splitPeriodPosition_wnej3_30",au="_leftMargin_wnej3_33",su="_margin_wnej3_37",iu="_fix_wnej3_41",lt={timeLineButton:nu,splitPeriodImage:ru,splitPeriodPosition:tu,leftMargin:au,margin:su,fix:iu},lu=!1,ou=({valgtPeriode:a,beregnBelop:o,behandlingUuid:d,oppdaterSplittedePerioder:l,setNestePeriode:g,setForrigePeriode:m,readOnly:v,lukkPeriode:k})=>{const b=ve(),[j,y]=D.useState(!1),[p,c]=D.useState(!1),h=_=>{y(!0),_.preventDefault()},M=()=>{y(!1)},q=_=>{c(!1);const L={belop:a.feilutbetaling,fom:_.forstePeriode.fom,tom:_.forstePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "},H={belop:a.feilutbetaling,fom:_.andrePeriode.fom,tom:_.andrePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "};o({behandlingUuid:d,perioder:[L,H]}).then(E=>{const{perioder:O}=E;if(O.some(Z=>Z.belop===0))c(!0);else{const Z={fom:L.fom,tom:L.tom,feilutbetaling:O[0].belop},Pe={fom:H.fom,tom:H.tom,feilutbetaling:O[1].belop};M(),l([Z,Pe])}})};return T.jsxs(me,{children:[T.jsxs(be,{size:"small",children:[T.jsx(x,{id:"PeriodeController.Detaljer"}),lu]}),!v&&T.jsxs(T.Fragment,{children:[T.jsx(Bn,{}),T.jsx(re,{className:lt.margin,size:"xsmall",icon:T.jsx(Ja,{"aria-hidden":!0}),onClick:h,variant:"tertiary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:T.jsx(x,{id:"PeriodeController.DelOppPerioden"})})]}),j&&T.jsx(eu,{cancelEvent:M,showModal:j,periodeData:a,splitPeriod:q,finnesBelopMed0Verdi:p}),T.jsx(Bn,{}),T.jsx(re,{className:lt.margin,size:"xsmall",icon:T.jsx(Br,{"aria-hidden":!0}),onClick:m,variant:"secondary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.prevPeriod"}),children:T.jsx(x,{id:"PeriodeController.prevPeriodShort"})}),T.jsx(re,{className:lt.margin,size:"xsmall",icon:T.jsx(Or,{"aria-hidden":!0}),onClick:g,variant:"secondary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:T.jsx(x,{id:"PeriodeController.nextPeriodShort"})}),T.jsx(re,{size:"xsmall",icon:T.jsx(Va,{"aria-hidden":!0}),onClick:k,variant:"tertiary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.LukkPeriode"})})]})},du="_container_wdk2x_1",uu="_fadein_wdk2x_1",gu="_space_wdk2x_11",ku={container:du,fadein:uu,space:gu},mu="_infoSummary_99bx4_1",vu="_positivNumber_99bx4_8",pu="_redNumber_99bx4_12",hu="_resultName_99bx4_17",_r={infoSummary:mu,positivNumber:vu,redNumber:pu,resultName:hu},yu=({fom:a,tom:o,feilutbetaling:d})=>{const l=Na(a,o);return T.jsxs("div",{className:_r.infoSummary,children:[T.jsxs(me,{children:[T.jsx(be,{size:"small",children:`${de(a).format(ye)} - ${de(o).format(ye)}`}),T.jsx(Bn,{}),T.jsx(I,{size:"small",children:l.formattedString})]}),T.jsx(F,{sixteenPx:!0}),T.jsx(me,{gap:"4",children:T.jsxs(I,{size:"small",className:_r.resultName,children:[T.jsx(x,{id:"PeriodeInformasjon.Feilutbetaling"}),":",T.jsx("span",{className:d?_r.redNumber:_r.positivNumber,children:Ae(d)})]})})]})},fa=(a,o)=>de(a.fom).diff(de(o.fom)),fu=()=>de().subtract(30,"months").format(ye),bu=a=>a?[T.jsx(x,{id:`ForeldelseForm.AksjonspunktHelpText.${a.definisjon}`,values:{dato:fu()}},"vurderForeldelse")]:[],Zn=a=>(!a.foreldelseVurderingType||a.foreldelseVurderingType===Xe.UDEFINERT)&&(!a.begrunnelse||!!a.erSplittet),cu=(a=[])=>a.map((o,d)=>({fom:o.fom,tom:o.tom,isAksjonspunktOpen:Zn(o),isGodkjent:Xe.FORELDET!==o.foreldet&&Xe.UDEFINERT!==o.foreldet,id:d})),Tu=a=>({foreldelsePerioder:a.map(o=>({fraDato:o.fom,tilDato:o.tom,begrunnelse:o.begrunnelse,foreldelseVurderingType:o.foreldet,foreldelsesfrist:o.foreldelsesfrist,oppdagelsesDato:o.oppdagelsesDato})),kode:Er.VURDER_FORELDELSE}),ju=(a,o)=>a.fom<o.fom?-1:a.fom>o.fom?1:0,_u=a=>[...a].sort(ju).map(o=>({...o,feilutbetaling:o.belop,foreldet:o.foreldelseVurderingType===Xe.UDEFINERT?void 0:o.foreldelseVurderingType,begrunnelse:yn(o.begrunnelse)})),xu=({submitCallback:a,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:d,aksjonspunkt:l,alleMerknaderFraBeslutter:g,perioderForeldelse:m,readOnly:v,kodeverkSamlingFpTilbake:k,beregnBelop:b,behandlingUuid:j,formData:y,setFormData:p})=>{const c=D.useMemo(()=>_u(m.perioder),[m.perioder]),[h,M]=D.useState(y||c),[q,_]=D.useState(h==null?void 0:h.find(Zn)),[L,H]=D.useState(!1),[E,O]=D.useState(!!y),Z=N=>{const J=N?h.find($=>$.fom===N.fom&&$.tom===N.tom):void 0;_(J)},Pe=D.useCallback(()=>{const N=h.findIndex($=>$.fom===(q==null?void 0:q.fom)&&$.tom===(q==null?void 0:q.tom)),J=N===h.length-1?N:N+1;Z(h[J])},[h,q]),Ee=D.useCallback(()=>{const N=h.findIndex($=>$.fom===(q==null?void 0:q.fom)&&$.tom===(q==null?void 0:q.tom)),J=N===0?N:N-1;Z(h[J])},[h,q]),te=D.useCallback(()=>{Z(void 0)},[q,h]),nn=D.useCallback(N=>{const J=Qn(N,"erSplittet"),$=h.filter(ie=>ie.fom!==J.fom&&ie.tom!==J.tom).concat(J).sort(fa);M($),p($),O(!0),te();const Q=$.find(Zn);Q&&Z(Q)},[h,te,Zn]),ue=D.useCallback(N=>{const J=h.find(ie=>ie.fom===(q==null?void 0:q.fom)&&ie.tom===(q==null?void 0:q.tom));if(J===void 0)throw new TypeError(`Periode skal alltid finnes. Fom: ${q==null?void 0:q.fom} Tom: ${q==null?void 0:q.tom}`);const $=N.map(ie=>({...J,...ie,erSplittet:!0})),Q=h.filter(ie=>ie.fom!==(q==null?void 0:q.fom)&&ie.tom!==(q==null?void 0:q.tom)).concat($).sort(fa);M(Q),p(Q),O(!0),te(),Z($[0])},[h,q,te,Zn]),Ye=D.useCallback(()=>{H(!0),a(Tu(h))},[h]),rn=g[Er.VURDER_FORELDELSE],pe=cu(h),kn=l&&l.status===kd.OPPRETTET,Se=pe.every(N=>!N.isAksjonspunktOpen),U=q?pe.find(N=>N.fom===q.fom&&N.tom===q.tom):void 0;return T.jsxs(ht,{merknaderFraBeslutter:rn,withoutBorder:!0,children:[T.jsx(dn,{size:"small",children:T.jsx(x,{id:"ForeldelseForm.Foreldelse"})}),T.jsx(F,{twentyPx:!0}),!l&&T.jsxs(T.Fragment,{children:[T.jsx(I,{children:T.jsx(x,{id:"ForeldelseForm.Foreldelsesloven"})}),T.jsx(F,{eightPx:!0}),T.jsx(I,{children:T.jsx(x,{id:"ForeldelseForm.AutomatiskVurdert"})}),T.jsx(F,{sixteenPx:!0})]}),h&&l&&T.jsxs(T.Fragment,{children:[T.jsx(yt,{isAksjonspunktOpen:kn,children:bu(l)}),T.jsx(F,{twentyPx:!0}),T.jsx(Wd,{perioder:pe,valgtPeriode:U,setPeriode:Z,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:d}),q&&T.jsxs("div",{id:"panel-tilbakekreving-foreldelse","aria-controls":U==null?void 0:U.id.toString(),children:[T.jsx("div",{className:ku.space}),T.jsxs(Ea,{border:!0,children:[T.jsx(ou,{setNestePeriode:Pe,setForrigePeriode:Ee,valgtPeriode:q,readOnly:v,oppdaterSplittedePerioder:ue,behandlingUuid:j,beregnBelop:b,lukkPeriode:te}),T.jsx(F,{sixteenPx:!0}),T.jsx(yu,{feilutbetaling:q.feilutbetaling,fom:q.fom,tom:q.tom}),T.jsx(Ld,{periode:q,oppdaterPeriode:nn,skjulPeriode:te,readOnly:v,kodeverkSamlingFpTilbake:k},q.fom)]})]}),T.jsx(F,{twentyPx:!0}),T.jsx(ct,{isReadOnly:v,isDirty:E,isSubmittable:!q&&Se,onClick:Ye,isSubmitting:L})]})]})},Pu={"ForeldelsePeriodeForm.Vurdering":"Vurdering","ForeldelsePeriodeForm.RadioGroup.Foreldet":"Vurder om perioden er foreldet","ForeldelsePeriodeForm.Oppdater":"Oppdater","ForeldelsePeriodeForm.Avbryt":"Avbryt","ForeldelsePeriodeForm.Foreldelsesfrist":"Foreldelsesfrist","ForeldelsePeriodeForm.OppdagelsesDato":"Dato for når feilutbetaling ble oppdaget","ForeldelseForm.Foreldelsesloven":"Foreldelsesloven §§ 2 og 3","ForeldelseForm.AutomatiskVurdert":"Automatisk vurdert","ForeldelseForm.AksjonspunktHelpText.5003":"Perioden før {dato} kan være foreldet. Del opp perioden ved behov og fastsett foreldelse","ForeldelseForm.Foreldelse":"Foreldelse","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","SubmitButton.ConfirmInformation":"Bekreft og fortsett","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},Su=Fr(Pu),qu=({perioderForeldelse:a,relasjonsRolleType:o,beregnBelop:d,behandling:l,aksjonspunkter:g,isReadOnly:m,kodeverkSamlingFpTilbake:v,submitCallback:k,alleMerknaderFraBeslutter:b,formData:j,setFormData:y,relasjonsRolleTypeKodeverk:p})=>T.jsx(wr,{value:Su,children:T.jsx(xu,{behandlingUuid:l.uuid,perioderForeldelse:a,submitCallback:k,readOnly:m,aksjonspunkt:g[0],relasjonsRolleType:o,relasjonsRolleTypeKodeverk:p,alleMerknaderFraBeslutter:b,kodeverkSamlingFpTilbake:v,beregnBelop:d,formData:j,setFormData:y})}),Ru=[Er.VURDER_FORELDELSE],Au=[Fe.PERIODER_FORELDELSE],ts=({...a})=>{const o=ve(),{startRequest:d}=Tt.useRestApiRunner(Fe.BEREGNE_BELØP);return z.jsx(_t,{...a,panelEndepunkter:Au,aksjonspunktKoder:Ru,prosessPanelKode:jt.FORELDELSE,prosessPanelMenyTekst:o.formatMessage({id:"Behandlingspunkt.Foreldelse"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:()=>Ha.hasPath(Fe.PERIODER_FORELDELSE.name)?Qe.OPPFYLT:Qe.IKKE_VURDERT,renderPanel:l=>z.jsx(qu,{kodeverkSamlingFpTilbake:a.tilbakekrevingKodeverk,beregnBelop:d,relasjonsRolleType:a.relasjonsRolleType,relasjonsRolleTypeKodeverk:l.alleKodeverk[$a.RELASJONSROLLE_TYPE],...l})})};ts.__docgenInfo={description:"",methods:[],displayName:"ForeldelseProsessInitPanel",props:{relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"tilbakekrevingKodeverkTyper"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Dr=(a=>(a.VURDER_TILBAKEKREVING="5002",a))(Dr||{}),Fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wu(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var as={exports:{}},Hn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba;function Bu(){if(ba)return Hn;ba=1;var a=on,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,b,j){var y,p={},c=null,h=null;j!==void 0&&(c=""+j),b.key!==void 0&&(c=""+b.key),b.ref!==void 0&&(h=b.ref);for(y in b)l.call(b,y)&&!m.hasOwnProperty(y)&&(p[y]=b[y]);if(k&&k.defaultProps)for(y in b=k.defaultProps,b)p[y]===void 0&&(p[y]=b[y]);return{$$typeof:o,type:k,key:c,ref:h,props:p,_owner:g.current}}return Hn.Fragment=d,Hn.jsx=v,Hn.jsxs=v,Hn}as.exports=Bu();var i=as.exports,ss=(a=>(a.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",a.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",a.STOERRELSE_BELOEP="STOERRELSE_BELOEP",a.TID_FRA_UTBETALING="TID_FRA_UTBETALING",a.ANNET="ANNET",a))(ss||{}),fe=(a=>(a.FORSETT="FORSETT",a.GROVT_UAKTSOM="GROVT_UAKTSOM",a.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",a))(fe||{});const Ou=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var Ve=(a=>(a.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",a.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",a.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",a.GOD_TRO="GOD_TRO",a))(Ve||{});const Eu="_feilutbetalingTable_e3ydt_1",Du={feilutbetalingTable:Eu},Mu=["TilbakekrevingAktivitetTabell.Aktivitet","TilbakekrevingAktivitetTabell.FeilutbetaltBelop"],Vu=({ytelser:a})=>{if(a.length===0)return null;let o=0;return i.jsx(bt,{headerTextCodes:Mu,noHover:!0,classNameTable:Du.feilutbetalingTable,children:a.map(d=>(o+=1,i.jsxs(Sr,{children:[i.jsx(ke,{children:i.jsx(I,{size:"small",children:d.aktivitet})}),i.jsx(ke,{children:i.jsx(I,{size:"small",children:Ae(d.belop)})})]},d.aktivitet+d.belop+o)))})},Nu=()=>i.jsxs(me,{gap:"4",children:[i.jsx(un,{name:"foreldetBegrunnelse",label:i.jsx(x,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),i.jsx(en,{name:"periodenErForeldet",label:i.jsx(_e,{children:i.jsx(x,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:i.jsx(x,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]}),Iu="_arrowbox_ych2z_1",Uu="_tilbakekrevdBelopInput_ych2z_4",ca={arrowbox:Iu,tilbakekrevdBelopInput:Uu},Gu=za(1),Yu=a=>{const o=a.toString().replace(/\s/g,""),d=parseInt(o,10);return Number.isNaN(d)?"":d},Lu=(a,o)=>d=>{if(d>o)return a.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},nr=({name:a,readOnly:o,erBelopetIBehold:d,feilutbetalingBelop:l})=>{const g=ve();return i.jsxs(i.Fragment,{children:[i.jsx(en,{name:`${a}.erBelopetIBehold`,label:i.jsx(x,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[ne],radios:[{label:i.jsx(x,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:i.jsx(x,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:o,isTrueOrFalseSelection:!0,isHorizontal:!0}),i.jsx(F,{eightPx:!0}),i.jsxs("div",{className:ca.arrowbox,children:[d===!0&&i.jsx(fn,{alignOffset:25,children:i.jsx(kt,{name:`${a}.tilbakekrevdBelop`,label:i.jsx(x,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[ne,Gu,Lu(g,l)],readOnly:o,className:ca.tilbakekrevdBelopInput,format:Ae,parse:Yu})}),d===!1&&i.jsx(fn,{alignOffset:90,children:i.jsx(I,{size:"small",children:i.jsx(x,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};nr.transformValues=(a,o)=>({"@type":"godTro",begrunnelse:o,erBelopetIBehold:a.erBelopetIBehold,tilbakekrevesBelop:a.erBelopetIBehold?Ua(a.tilbakekrevdBelop):void 0});nr.buildIntialValues=a=>({erBelopetIBehold:a.erBelopetIBehold,tilbakekrevdBelop:a.tilbakekrevesBelop});const Ku=({name:a,readOnly:o,erValgtResultatTypeForstoBurdeForstaatt:d})=>{const l=er(),g=`${a}.skalDetTilleggesRenter`;return D.useEffect(()=>{l.getValues(g)===void 0&&l.setValue(g,!1)},[]),i.jsx("div",{children:i.jsxs(fn,{alignOffset:d?320:360,children:[d&&i.jsxs(i.Fragment,{children:[i.jsx(be,{size:"small",children:i.jsx(x,{id:"AktsomhetGradForsettFormPanel.Andel"})}),i.jsx(I,{size:"small",children:"100 %"}),i.jsx(F,{sixteenPx:!0}),i.jsx(en,{name:`${a}.skalDetTilleggesRenter`,label:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[ne],radios:[{label:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:o,parse:m=>m==="true",isHorizontal:!0})]}),!d&&i.jsxs(i.Fragment,{children:[i.jsx(_e,{children:i.jsx(x,{id:"AktsomhetGradForsettFormPanel.Andel"})}),i.jsx(I,{size:"small",children:"100 %"}),i.jsx(F,{eightPx:!0}),i.jsx(I,{size:"small",children:i.jsx(x,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})},Cu="_suffix_cawxu_1",Hu="_suffixGrovText_cawxu_4",$u="_labelPadding_cawxu_8",zu="_inputFelt_cawxu_12",Rn={suffix:Cu,suffixGrovText:Hu,labelPadding:$u,inputFelt:zu},Ta=za(0),Wu=Rd(99.99),Zu=a=>{const o=a.toString().replace(/\s/g,""),d=parseInt(o,10);return Number.isNaN(d)?"":d},Ju=(a,o)=>d=>{if(d>=o)return a.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},Xn="Egendefinert",mt=["30","50","70",Xn],Qu=({name:a,harGrunnerTilReduksjon:o,readOnly:d,handletUaktsomhetGrad:l,harMerEnnEnYtelse:g,feilutbetalingBelop:m,andelSomTilbakekreves:v})=>{const k=ve(),b=er(),j=`${a}.skalDetTilleggesRenter`;return D.useEffect(()=>{b.getValues(j)===void 0&&b.setValue(j,!1)},[]),i.jsxs(i.Fragment,{children:[i.jsx(F,{sixteenPx:!0}),i.jsx(en,{name:`${a}.harGrunnerTilReduksjon`,label:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[ne],radios:[{label:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:d,isTrueOrFalseSelection:!0,isHorizontal:!0}),i.jsx(F,{sixteenPx:!0}),o&&i.jsx(fn,{alignOffset:24,children:i.jsxs(me,{gap:"4",children:[!g&&v!==Xn&&i.jsxs(i.Fragment,{children:[i.jsx(be,{size:"small",children:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),i.jsxs(me,{gap:"2",children:[i.jsx(Ar,{name:`${a}.andelSomTilbakekreves`,label:"",validate:[ne],selectValues:mt.map(y=>i.jsx("option",{value:y,children:y},y))}),i.jsx("div",{className:Rn.suffix,children:"%"})]})]}),!g&&v===Xn&&i.jsxs(i.Fragment,{children:[i.jsx(be,{size:"small",children:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),i.jsxs(me,{gap:"4",children:[i.jsx(kt,{className:Rn.inputFelt,name:`${a}.andelSomTilbakekrevesManuell`,readOnly:d,validate:[ne,Ta,Wu],normalizeOnBlur:y=>Number.isNaN(y)?y:parseFloat(y.toString()).toFixed(2),format:y=>y.toString().replace(".",","),parse:y=>y.toString().replace(",",".")}),i.jsx("div",{className:l===fe.GROVT_UAKTSOM?Rn.suffixGrovText:Rn.suffix,children:"%"})]})]}),g&&i.jsx(kt,{name:`${a}.belopSomSkalTilbakekreves`,label:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[ne,Ta,Ju(k,m)],readOnly:d,format:Ae,parse:Zu}),l===fe.GROVT_UAKTSOM&&i.jsxs("div",{children:[i.jsx(_e,{children:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),i.jsx(I,{size:"small",className:Rn.labelPadding,children:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),o===!1&&i.jsxs(fn,{alignOffset:90,children:[i.jsx(_e,{children:i.jsx(x,{id:g?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),i.jsx(I,{size:"small",className:Rn.labelPadding,children:g?Ae(m):"100%"}),i.jsx(F,{sixteenPx:!0}),l===fe.GROVT_UAKTSOM&&i.jsx(en,{name:j,label:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[ne],radios:[{label:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:d,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})},Xu=Dn(3),eg=bn(1500),ja=({name:a,harGrunnerTilReduksjon:o,readOnly:d,handletUaktsomhetGrad:l,erSerligGrunnAnnetValgt:g,sarligGrunnTyper:m,harMerEnnEnYtelse:v,feilutbetalingBelop:k,andelSomTilbakekreves:b})=>{const j=ve(),{watch:y}=er(),p=!m.some(h=>!!y(`${a}.${h.kode}`)),c=qd(a,p?j.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return i.jsxs("div",{children:[i.jsx(be,{size:"small",children:i.jsx(x,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),i.jsx(F,{eightPx:!0}),m.map(h=>i.jsxs(on.Fragment,{children:[i.jsx(Wa,{name:`${a}.${h.kode}`,label:h.navn,readOnly:d},h.kode),i.jsx(F,{eightPx:!0})]},h.kode)),g&&i.jsx(un,{name:`${a}.annetBegrunnelse`,label:"",validate:[ne,Xu,eg,gn],maxLength:1500,readOnly:d}),c&&i.jsx(_d,{children:c}),i.jsx(Qu,{name:a,harGrunnerTilReduksjon:o,readOnly:d,handletUaktsomhetGrad:l,harMerEnnEnYtelse:v,feilutbetalingBelop:k,andelSomTilbakekreves:b})]})},ng="_explanationTextarea_1kabz_1",rg="_panelWidth_1kabz_5",is={explanationTextarea:ng,panelWidth:rg},tg=Dn(3),ag=bn(1500),_a=(a,o,d)=>i.jsxs("div",{children:[i.jsx(be,{size:"small",children:i.jsx(x,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),i.jsx(F,{eightPx:!0}),i.jsx(un,{name:`${a}.sarligGrunnerBegrunnelse`,label:d.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[ne,tg,ag,gn],maxLength:1500,readOnly:o,className:is.explanationTextarea,description:d.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})}),i.jsx(F,{twentyPx:!0})]}),sg=({harGrunnerTilReduksjon:a,readOnly:o,handletUaktsomhetGrad:d,erSerligGrunnAnnetValgt:l,sarligGrunnTyper:g,harMerEnnEnYtelse:m,feilutbetalingBelop:v,erTotalBelopUnder4Rettsgebyr:k,andelSomTilbakekreves:b,erValgtResultatTypeForstoBurdeForstaatt:j,name:y})=>{const p=ve(),c=j?180:200;return i.jsx(fn,{alignOffset:d===fe.GROVT_UAKTSOM?c:20,children:i.jsxs("div",{className:is.panelWidth,children:[d===fe.SIMPEL_UAKTSOM&&k&&i.jsxs(i.Fragment,{children:[i.jsx(en,{name:`${y}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,label:i.jsx(x,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[ne],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:o,radios:[{label:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:i.jsxs(i.Fragment,{children:[i.jsx(F,{eightPx:!0}),_a(y,o,p),i.jsx(ja,{name:y,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:l,sarligGrunnTyper:g,harMerEnnEnYtelse:m,feilutbetalingBelop:v,readOnly:o,handletUaktsomhetGrad:d,andelSomTilbakekreves:b})]})},{label:i.jsx(x,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:i.jsxs(i.Fragment,{children:[i.jsx(F,{eightPx:!0}),i.jsx(fn,{alignOffset:20,children:i.jsx(x,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})]})}]}),i.jsx(F,{eightPx:!0})]}),(d!==fe.SIMPEL_UAKTSOM||!k)&&i.jsxs(i.Fragment,{children:[_a(y,o,p),i.jsx(ja,{name:y,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:l,sarligGrunnTyper:g,harMerEnnEnYtelse:m,feilutbetalingBelop:v,readOnly:o,handletUaktsomhetGrad:d,andelSomTilbakekreves:b})]})]})})},ig=({harGrunnerTilReduksjon:a,readOnly:o,handletUaktsomhetGrad:d,erSerligGrunnAnnetValgt:l,erValgtResultatTypeForstoBurdeForstaatt:g,sarligGrunnTyper:m,harMerEnnEnYtelse:v,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:b,andelSomTilbakekreves:j,name:y})=>i.jsxs(i.Fragment,{children:[i.jsx(F,{eightPx:!0}),d===fe.FORSETT&&i.jsx(Ku,{name:y,readOnly:o,erValgtResultatTypeForstoBurdeForstaatt:g}),d!==fe.FORSETT&&i.jsx(sg,{name:y,harGrunnerTilReduksjon:a,readOnly:o,handletUaktsomhetGrad:d,erSerligGrunnAnnetValgt:l,sarligGrunnTyper:m,harMerEnnEnYtelse:v,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:b,andelSomTilbakekreves:j,erValgtResultatTypeForstoBurdeForstaatt:g})]}),lg=[fe.GROVT_UAKTSOM,fe.SIMPEL_UAKTSOM,fe.FORSETT],og={[fe.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[fe.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[fe.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},rr=({readOnly:a,resetFields:o,handletUaktsomhetGrad:d,harGrunnerTilReduksjon:l,erSerligGrunnAnnetValgt:g=!1,erValgtResultatTypeForstoBurdeForstaatt:m=!1,aktsomhetTyper:v,sarligGrunnTyper:k,antallYtelser:b,feilutbetalingBelop:j,erTotalBelopUnder4Rettsgebyr:y,andelSomTilbakekreves:p,name:c})=>i.jsxs(i.Fragment,{children:[i.jsx(F,{sixteenPx:!0}),i.jsx(en,{name:`${c}.handletUaktsomhetGrad`,label:i.jsx(x,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[ne],radios:v.map(h=>({label:m?i.jsx(x,{id:og[h.kode]}):h.navn,value:h.kode})),isReadOnly:a,onChange:o,isHorizontal:!0}),lg.some(h=>h===d)&&i.jsx(ig,{name:`${c}.${d}`,harGrunnerTilReduksjon:l,readOnly:a,handletUaktsomhetGrad:d,erSerligGrunnAnnetValgt:g,erValgtResultatTypeForstoBurdeForstaatt:m,sarligGrunnTyper:k,harMerEnnEnYtelse:b>1,feilutbetalingBelop:j,erTotalBelopUnder4Rettsgebyr:y,andelSomTilbakekreves:p})]}),dg=(a,o)=>{const d=parseInt(a,10);return!o||Number.isNaN(d)?{}:{andelTilbakekreves:d}},ug=(a,o)=>{const d=parseFloat(a);return!o||Number.isNaN(d)?{}:{andelTilbakekreves:d}},gg=(a,o)=>{if(a.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:a.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const d=o.reduce((m,v)=>a[v.kode]?m.concat(v.kode):m,[]),{harGrunnerTilReduksjon:l}=a,g=a.andelSomTilbakekreves===Xn?ug(a.andelSomTilbakekrevesManuell,l):dg(a.andelSomTilbakekreves,l);return{harGrunnerTilReduksjon:l,ileggRenter:l?void 0:a.skalDetTilleggesRenter,sarligGrunner:d.length>0?d:void 0,tilbakekrevesBelop:a.harGrunnerTilReduksjon?Ua(a.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:a.annetBegrunnelse,sarligGrunnerBegrunnelse:a.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:a.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...g}};rr.transformValues=(a,o,d)=>{const l=a[a.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:a.handletUaktsomhetGrad,begrunnelse:d,aktsomhetInfo:l?gg(l,o):null}};const kg=(a,o)=>({andelSomTilbakekreves:o===void 0||mt.includes(o)?o:Xn,andelSomTilbakekrevesManuell:o&&mt.includes(o)?void 0:a.andelTilbakekreves,harGrunnerTilReduksjon:a.harGrunnerTilReduksjon,skalDetTilleggesRenter:a.ileggRenter,belopSomSkalTilbakekreves:a.tilbakekrevesBelop,annetBegrunnelse:a.annetBegrunnelse,sarligGrunnerBegrunnelse:yn(a.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:a.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...a.sarligGrunner?a.sarligGrunner.reduce((d,l)=>({...d,[l.kode?l.kode:l]:!0}),{}):{}});rr.buildInitalValues=a=>{const{aktsomhet:o,aktsomhetInfo:d}=a,l=d&&d.andelTilbakekreves!==void 0?`${d.andelTilbakekreves}`:void 0,g=d?{[o.kode&&"kode"in o?o.kode:o]:kg(d,l)}:{};return{handletUaktsomhetGrad:o&&o.kode&&"kode"in o?o.kode:o,...g}};const mg="_explanationTextarea_1udkt_1",vg="_leftColumn_1udkt_5",pg="_rightColumn_1udkt_9",hg="_selectWidth_1udkt_12",xr={explanationTextarea:mg,leftColumn:vg,rightColumn:pg,selectWidth:hg},xa=Dn(3),Pa=bn(1500),yg=({data:a,periode:o,skjulPeriode:d,readOnly:l,oppdaterPeriode:g,vilkarsVurdertePerioder:m,kodeverkSamlingFpTilbake:v,antallPerioderMedAksjonspunkt:k})=>{const b=ve(),[j,y]=D.useState(!1),p=On({defaultValues:o}),c=p.watch("valgtVilkarResultatType"),h=p.watch(`${c}.handletUaktsomhetGrad`),M=p.watch(`${c}.${h}.harGrunnerTilReduksjon`),q=p.watch(`${c}.${h}.andelSomTilbakekreves`),_=p.watch(`${c}.${h}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),L=p.watch(`${c}.${h}.${ss.ANNET}`),H=p.watch(`${c}.erBelopetIBehold`),E=pa(c),O=pa(h),Z=a.redusertBeloper,Pe=v[Jn.SARLIG_GRUNN],Ee=v[Jn.VILKAR_RESULTAT],te=Ou.map(U=>v[Jn.AKTSOMHET].find(N=>N.kode===U)),nn=(U,N)=>{const J=U.target.value.split("_"),$=N.find(qe=>qe.fom===J[0]&&qe.tom===J[1]),Q=$==null?void 0:$.valgtVilkarResultatType,ie=$&&Q?$[Q]:void 0,we=JSON.parse(JSON.stringify(ie));if(Q!==Ve.GOD_TRO){const{handletUaktsomhetGrad:qe}=we;qe!==fe.FORSETT&&(o==null?void 0:o.harMerEnnEnYtelse)!==($==null?void 0:$.harMerEnnEnYtelse)&&(we[qe].andelSomTilbakekreves=null,we[qe].andelSomTilbakekrevesManuell=null,we[qe].belopSomSkalTilbakekreves=null)}p.setValue("valgtVilkarResultatType",Q,{shouldDirty:!0}),p.setValue("begrunnelse",$==null?void 0:$.begrunnelse,{shouldDirty:!0}),p.setValue("vurderingBegrunnelse",$==null?void 0:$.vurderingBegrunnelse,{shouldDirty:!0}),Q&&p.setValue(Q,we,{shouldDirty:!0}),U.preventDefault()},ue=()=>{y(!j),g(p.getValues())},Ye=U=>{k>1&&a.erTotalBelopUnder4Rettsgebyr&&_===!1?y(!j):g(U)},rn=()=>{E&&p.resetField(E)},pe=()=>{O&&p.resetField(`${c}.${O}`)},kn=D.useCallback(U=>i.jsx("b",{children:U}),[]),Se=m.filter(U=>!U.erForeldet&&U.valgtVilkarResultatType!=null);return i.jsxs(En,{formMethods:p,onSubmit:Ye,children:[Z&&Z.map(U=>i.jsxs(on.Fragment,{children:[i.jsx(I,{size:"small",children:i.jsx(x,{id:U.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:Ae(U.belop),b:kn}})}),i.jsx(F,{eightPx:!0})]},U.belop)),i.jsx(Vu,{ytelser:a.ytelser}),i.jsx(F,{twentyPx:!0}),!l&&!a.erForeldet&&Se.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Ar,{name:"perioderForKopi",selectValues:Se.map(U=>{const N=`${U.fom}_${U.tom}`,J=`${de(U.fom).format(ye)} - ${de(U.tom).format(ye)}`;return i.jsx("option",{value:N,children:J},N)}),onChange:U=>nn(U,Se),className:xr.selectWidth,label:i.jsx(x,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),i.jsx(F,{twentyPx:!0})]}),i.jsxs(me,{gap:"4",wrap:!0,children:[i.jsxs("div",{className:xr.leftColumn,children:[a.erForeldet&&i.jsx(Nu,{}),!a.erForeldet&&i.jsxs(i.Fragment,{children:[i.jsx(dn,{size:"small",children:i.jsx(x,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),i.jsx(F,{sixteenPx:!0}),i.jsx(un,{name:"begrunnelse",label:b.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[ne,xa,Pa,gn],maxLength:1500,readOnly:l,className:xr.explanationTextarea,description:b.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),i.jsx(F,{sixteenPx:!0}),i.jsx(en,{name:"valgtVilkarResultatType",label:i.jsx(x,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[ne],radios:Ee.map(U=>({label:U.navn,value:U.kode})),isReadOnly:l,onChange:rn})]})]}),i.jsx("div",{className:xr.rightColumn,children:c&&i.jsxs(i.Fragment,{children:[i.jsx(dn,{size:"small",children:i.jsx(x,{id:c===Ve.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),i.jsx(F,{sixteenPx:!0}),i.jsx(un,{name:"vurderingBegrunnelse",label:b.formatMessage({id:c===Ve.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[ne,xa,Pa,gn],maxLength:1500,readOnly:l}),i.jsx(F,{eightPx:!0}),c===Ve.GOD_TRO&&i.jsx(nr,{name:c,readOnly:l,erBelopetIBehold:H,feilutbetalingBelop:a.feilutbetaling}),c!==Ve.GOD_TRO&&i.jsx(rr,{name:c,harGrunnerTilReduksjon:M,readOnly:l,handletUaktsomhetGrad:h,resetFields:pe,erSerligGrunnAnnetValgt:L,erValgtResultatTypeForstoBurdeForstaatt:c===Ve.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:te,sarligGrunnTyper:Pe,antallYtelser:a.ytelser.length,feilutbetalingBelop:a.feilutbetaling,erTotalBelopUnder4Rettsgebyr:a.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:q},c)]})})]}),i.jsx(F,{twentyPx:!0}),i.jsxs(me,{gap:"4",children:[i.jsx(re,{size:"small",variant:"primary",disabled:!p.formState.isDirty||l,children:i.jsx(x,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),i.jsx(re,{size:"small",variant:"secondary",onClick:d,type:"button",children:i.jsx(x,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),j&&i.jsx(Ma,{bodyText:b.formatMessage({id:"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"}),showModal:!0,submit:ue})]})},fg=(a,o)=>{const{vilkarResultat:d,begrunnelse:l,vilkarResultatInfo:g}=a,m=d&&d.kode?d.kode:d;let v;const k=a.erForeldet?a.erForeldet:a.foreldet;if(k){const p=o.perioder.find(c=>c.fom===a.fom&&c.tom===a.tom);v={erForeldet:k,periodenErForeldet:!0,foreldetBegrunnelse:p?yn(p.begrunnelse):void 0}}else v={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const b={valgtVilkarResultatType:m,begrunnelse:yn(l),harMerEnnEnYtelse:a.ytelser.length>1,...v},j=m===Ve.GOD_TRO?nr.buildIntialValues(g):{},y=m!==void 0&&m!==Ve.GOD_TRO?rr.buildInitalValues(g):{};return{...b,vurderingBegrunnelse:g?yn(g.begrunnelse):void 0,[b.valgtVilkarResultatType]:{...j,...y}}},bg=(a,o)=>{const{valgtVilkarResultatType:d,begrunnelse:l,vurderingBegrunnelse:g}=a,m=a[d],v=d===Ve.GOD_TRO?nr.transformValues(m,g):{},k=d!==Ve.GOD_TRO?rr.transformValues(m,o,g):{};return{begrunnelse:l,fom:a.fom,tom:a.tom,vilkarResultat:d,vilkarResultatInfo:{...v,...k}}},cg="_container_wdk2x_1",Tg="_fadein_wdk2x_1",jg="_space_wdk2x_11",_g={container:cg,fadein:Tg,space:jg},xg="_margin_1wl4t_1",Pr={margin:xg},Pg={danger:i.jsx(Ya,{}),success:i.jsx(La,{}),warning:i.jsx(Qa,{})},Sg=(a,o)=>a.fom<o.fom?-1:a.fom>o.fom?1:0,qg=a=>{const o=a.isGodkjent?"success":"danger";return a.isAksjonspunktOpen?"warning":o},Rg=(a=[])=>[...a].sort(Sg).map(o=>({...o,status:qg(o)})),Ag=a=>a===Fn.MOR||a===Fn.MEDMOR?i.jsx(Xa,{width:20,height:20,color:"var(--a-red-200)"}):a===Fn.FAR?i.jsx(es,{width:20,height:20,color:"var(--a-blue-600)"}):i.jsx(ns,{width:20,height:20}),Fg=({perioder:a,valgtPeriode:o,setPeriode:d,relasjonsRolleType:l,relasjonsRolleTypeKodeverk:g})=>{var m;const v=ve(),k=Rg(a),b=D.useCallback(E=>{const O=a.find(Z=>Z.id===E);O&&d(O)},[a,d]),j=de(k[0].fom),y=de(k[k.length-1].tom),[p,c]=D.useState(j),[h,M]=D.useState(y),q=D.useCallback(()=>{p.subtract(1,"month").isBefore(j)||(c(p.subtract(1,"month")),M(h.subtract(1,"month")))},[p,h,j]),_=D.useCallback(()=>{h.add(1,"month").isAfter(y)||(c(p.add(1,"month")),M(h.add(1,"month")))},[p,h,j]),L=D.useCallback(()=>{p.add(3,"month").isAfter(h)||(c(p.add(1,"month")),M(h.subtract(1,"month")))},[p,h]),H=D.useCallback(()=>{h.add(1,"month").diff(p.subtract(1,"month"),"months")<36&&(c(p.subtract(1,"month")),M(h.add(1,"month")))},[p,h]);return i.jsxs(i.Fragment,{children:[i.jsx(F,{fourtyPx:!0}),i.jsx(wn,{startDate:de(p).toDate(),endDate:de(h).add(1,"days").toDate(),children:i.jsx(wn.Row,{label:((m=g.find(E=>E.kode===l))==null?void 0:m.navn)||"-",icon:Ag(l),children:k.map(E=>i.jsx(wn.Period,{start:de(E.fom).toDate(),end:de(E.tom).toDate(),status:E.status,icon:Pg[E.status],onSelectPeriod:()=>b(E.id),isActive:(o==null?void 0:o.id)===E.id,"aria-controls":"panel-tilbakekreving",id:E.id.toString()},E.id))})}),i.jsx(F,{twentyPx:!0}),i.jsxs(Da,{children:[i.jsx(re,{className:Pr.margin,size:"small",icon:i.jsx(Ga,{"aria-hidden":!0}),onClick:L,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),i.jsx(re,{className:Pr.margin,size:"small",icon:i.jsx(Za,{"aria-hidden":!0}),onClick:H,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),i.jsx(re,{className:Pr.margin,size:"small",icon:i.jsx(Br,{"aria-hidden":!0}),onClick:q,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),i.jsx(re,{className:Pr.margin,size:"small",icon:i.jsx(Or,{"aria-hidden":!0}),onClick:_,variant:"primary-neutral",type:"button",title:v.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};function wg(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ls={exports:{}};(function(a,o){(function(d,l){a.exports=l()})(Fu,function(){var d;function l(){return d.apply(null,arguments)}function g(e){d=e}function m(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function v(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function k(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function b(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(k(e,n))return!1;return!0}function j(e){return e===void 0}function y(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function p(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function c(e,n){var r=[],t,s=e.length;for(t=0;t<s;++t)r.push(n(e[t],t));return r}function h(e,n){for(var r in n)k(n,r)&&(e[r]=n[r]);return k(n,"toString")&&(e.toString=n.toString),k(n,"valueOf")&&(e.valueOf=n.valueOf),e}function M(e,n,r,t){return Ht(e,n,r,t,!0).utc()}function q(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function _(e){return e._pf==null&&(e._pf=q()),e._pf}var L;Array.prototype.some?L=Array.prototype.some:L=function(e){var n=Object(this),r=n.length>>>0,t;for(t=0;t<r;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};function H(e){var n=null,r=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(n=_(e),r=L.call(n.parsedDateParts,function(s){return s!=null}),t=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&r),e._strict&&(t=t&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function E(e){var n=M(NaN);return e!=null?h(_(n),e):_(n).userInvalidated=!0,n}var O=l.momentProperties=[],Z=!1;function Pe(e,n){var r,t,s,u=O.length;if(j(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),j(n._i)||(e._i=n._i),j(n._f)||(e._f=n._f),j(n._l)||(e._l=n._l),j(n._strict)||(e._strict=n._strict),j(n._tzm)||(e._tzm=n._tzm),j(n._isUTC)||(e._isUTC=n._isUTC),j(n._offset)||(e._offset=n._offset),j(n._pf)||(e._pf=_(n)),j(n._locale)||(e._locale=n._locale),u>0)for(r=0;r<u;r++)t=O[r],s=n[t],j(s)||(e[t]=s);return e}function Ee(e){Pe(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Z===!1&&(Z=!0,l.updateOffset(this),Z=!1)}function te(e){return e instanceof Ee||e!=null&&e._isAMomentObject!=null}function nn(e){l.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function ue(e,n){var r=!0;return h(function(){if(l.deprecationHandler!=null&&l.deprecationHandler(null,e),r){var t=[],s,u,f,w=arguments.length;for(u=0;u<w;u++){if(s="",typeof arguments[u]=="object"){s+=`
[`+u+"] ";for(f in arguments[0])k(arguments[0],f)&&(s+=f+": "+arguments[0][f]+", ");s=s.slice(0,-2)}else s=arguments[u];t.push(s)}nn(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),r=!1}return n.apply(this,arguments)},n)}var Ye={};function rn(e,n){l.deprecationHandler!=null&&l.deprecationHandler(e,n),Ye[e]||(nn(n),Ye[e]=!0)}l.suppressDeprecationWarnings=!1,l.deprecationHandler=null;function pe(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function kn(e){var n,r;for(r in e)k(e,r)&&(n=e[r],pe(n)?this[r]=n:this["_"+r]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Se(e,n){var r=h({},e),t;for(t in n)k(n,t)&&(v(e[t])&&v(n[t])?(r[t]={},h(r[t],e[t]),h(r[t],n[t])):n[t]!=null?r[t]=n[t]:delete r[t]);for(t in e)k(e,t)&&!k(n,t)&&v(e[t])&&(r[t]=h({},r[t]));return r}function U(e){e!=null&&this.set(e)}var N;Object.keys?N=Object.keys:N=function(e){var n,r=[];for(n in e)k(e,n)&&r.push(n);return r};var J={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function $(e,n,r){var t=this._calendar[e]||this._calendar.sameElse;return pe(t)?t.call(n,r):t}function Q(e,n,r){var t=""+Math.abs(e),s=n-t.length,u=e>=0;return(u?r?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+t}var ie=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,we=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,qe={},Te={};function R(e,n,r,t){var s=t;typeof t=="string"&&(s=function(){return this[t]()}),e&&(Te[e]=s),n&&(Te[n[0]]=function(){return Q(s.apply(this,arguments),n[1],n[2])}),r&&(Te[r]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function le(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function je(e){var n=e.match(ie),r,t;for(r=0,t=n.length;r<t;r++)Te[n[r]]?n[r]=Te[n[r]]:n[r]=le(n[r]);return function(s){var u="",f;for(f=0;f<t;f++)u+=pe(n[f])?n[f].call(s,e):n[f];return u}}function Ie(e,n){return e.isValid()?(n=Ue(n,e.localeData()),qe[n]=qe[n]||je(n),qe[n](e)):e.localeData().invalidDate()}function Ue(e,n){var r=5;function t(s){return n.longDateFormat(s)||s}for(we.lastIndex=0;r>=0&&we.test(e);)e=e.replace(we,t),we.lastIndex=0,r-=1;return e}var fs={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function bs(e){var n=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return n||!r?n:(this._longDateFormat[e]=r.match(ie).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var cs="Invalid date";function Ts(){return this._invalidDate}var js="%d",_s=/\d{1,2}/;function xs(e){return this._ordinal.replace("%d",e)}var Ps={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ss(e,n,r,t){var s=this._relativeTime[r];return pe(s)?s(e,n,r,t):s.replace(/%d/i,e)}function qs(e,n){var r=this._relativeTime[e>0?"future":"past"];return pe(r)?r(n):r.replace(/%s/i,n)}var Pt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Be(e){return typeof e=="string"?Pt[e]||Pt[e.toLowerCase()]:void 0}function Vr(e){var n={},r,t;for(t in e)k(e,t)&&(r=Be(t),r&&(n[r]=e[t]));return n}var Rs={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function As(e){var n=[],r;for(r in e)k(e,r)&&n.push({unit:r,priority:Rs[r]});return n.sort(function(t,s){return t.priority-s.priority}),n}var St=/\d/,Re=/\d\d/,qt=/\d{3}/,Nr=/\d{4}/,tr=/[+-]?\d{6}/,X=/\d\d?/,Rt=/\d\d\d\d?/,At=/\d\d\d\d\d\d?/,ar=/\d{1,3}/,Ir=/\d{1,4}/,sr=/[+-]?\d{1,6}/,cn=/\d+/,ir=/[+-]?\d+/,Fs=/Z|[+-]\d\d:?\d\d/gi,lr=/Z|[+-]\d\d(?::?\d\d)?/gi,ws=/[+-]?\d+(\.\d{1,3})?/,Mn=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Tn=/^[1-9]\d?/,Ur=/^([1-9]\d|\d)/,or;or={};function B(e,n,r){or[e]=pe(n)?n:function(t,s){return t&&r?r:n}}function Bs(e,n){return k(or,e)?or[e](n._strict,n._locale):new RegExp(Os(e))}function Os(e){return Le(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,r,t,s,u){return r||t||s||u}))}function Le(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Oe(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function G(e){var n=+e,r=0;return n!==0&&isFinite(n)&&(r=Oe(n)),r}var Gr={};function W(e,n){var r,t=n,s;for(typeof e=="string"&&(e=[e]),y(n)&&(t=function(u,f){f[n]=G(u)}),s=e.length,r=0;r<s;r++)Gr[e[r]]=t}function Vn(e,n){W(e,function(r,t,s,u){s._w=s._w||{},n(r,s._w,s,u)})}function Es(e,n,r){n!=null&&k(Gr,e)&&Gr[e](n,r._a,r,e)}function dr(e){return e%4===0&&e%100!==0||e%400===0}var he=0,Ke=1,Ge=2,ge=3,De=4,Ce=5,mn=6,Ds=7,Ms=8;R("Y",0,0,function(){var e=this.year();return e<=9999?Q(e,4):"+"+e}),R(0,["YY",2],0,function(){return this.year()%100}),R(0,["YYYY",4],0,"year"),R(0,["YYYYY",5],0,"year"),R(0,["YYYYYY",6,!0],0,"year"),B("Y",ir),B("YY",X,Re),B("YYYY",Ir,Nr),B("YYYYY",sr,tr),B("YYYYYY",sr,tr),W(["YYYYY","YYYYYY"],he),W("YYYY",function(e,n){n[he]=e.length===2?l.parseTwoDigitYear(e):G(e)}),W("YY",function(e,n){n[he]=l.parseTwoDigitYear(e)}),W("Y",function(e,n){n[he]=parseInt(e,10)});function Nn(e){return dr(e)?366:365}l.parseTwoDigitYear=function(e){return G(e)+(G(e)>68?1900:2e3)};var Ft=jn("FullYear",!0);function Vs(){return dr(this.year())}function jn(e,n){return function(r){return r!=null?(wt(this,e,r),l.updateOffset(this,n),this):In(this,e)}}function In(e,n){if(!e.isValid())return NaN;var r=e._d,t=e._isUTC;switch(n){case"Milliseconds":return t?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return t?r.getUTCSeconds():r.getSeconds();case"Minutes":return t?r.getUTCMinutes():r.getMinutes();case"Hours":return t?r.getUTCHours():r.getHours();case"Date":return t?r.getUTCDate():r.getDate();case"Day":return t?r.getUTCDay():r.getDay();case"Month":return t?r.getUTCMonth():r.getMonth();case"FullYear":return t?r.getUTCFullYear():r.getFullYear();default:return NaN}}function wt(e,n,r){var t,s,u,f,w;if(!(!e.isValid()||isNaN(r))){switch(t=e._d,s=e._isUTC,n){case"Milliseconds":return void(s?t.setUTCMilliseconds(r):t.setMilliseconds(r));case"Seconds":return void(s?t.setUTCSeconds(r):t.setSeconds(r));case"Minutes":return void(s?t.setUTCMinutes(r):t.setMinutes(r));case"Hours":return void(s?t.setUTCHours(r):t.setHours(r));case"Date":return void(s?t.setUTCDate(r):t.setDate(r));case"FullYear":break;default:return}u=r,f=e.month(),w=e.date(),w=w===29&&f===1&&!dr(u)?28:w,s?t.setUTCFullYear(u,f,w):t.setFullYear(u,f,w)}}function Ns(e){return e=Be(e),pe(this[e])?this[e]():this}function Is(e,n){if(typeof e=="object"){e=Vr(e);var r=As(e),t,s=r.length;for(t=0;t<s;t++)this[r[t].unit](e[r[t].unit])}else if(e=Be(e),pe(this[e]))return this[e](n);return this}function Us(e,n){return(e%n+n)%n}var oe;Array.prototype.indexOf?oe=Array.prototype.indexOf:oe=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function Yr(e,n){if(isNaN(e)||isNaN(n))return NaN;var r=Us(n,12);return e+=(n-r)/12,r===1?dr(e)?29:28:31-r%7%2}R("M",["MM",2],"Mo",function(){return this.month()+1}),R("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),R("MMMM",0,0,function(e){return this.localeData().months(this,e)}),B("M",X,Tn),B("MM",X,Re),B("MMM",function(e,n){return n.monthsShortRegex(e)}),B("MMMM",function(e,n){return n.monthsRegex(e)}),W(["M","MM"],function(e,n){n[Ke]=G(e)-1}),W(["MMM","MMMM"],function(e,n,r,t){var s=r._locale.monthsParse(e,t,r._strict);s!=null?n[Ke]=s:_(r).invalidMonth=e});var Gs="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Bt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ot=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ys=Mn,Ls=Mn;function Ks(e,n){return e?m(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Ot).test(n)?"format":"standalone"][e.month()]:m(this._months)?this._months:this._months.standalone}function Cs(e,n){return e?m(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Ot.test(n)?"format":"standalone"][e.month()]:m(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Hs(e,n,r){var t,s,u,f=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)u=M([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(u,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(u,"").toLocaleLowerCase();return r?n==="MMM"?(s=oe.call(this._shortMonthsParse,f),s!==-1?s:null):(s=oe.call(this._longMonthsParse,f),s!==-1?s:null):n==="MMM"?(s=oe.call(this._shortMonthsParse,f),s!==-1?s:(s=oe.call(this._longMonthsParse,f),s!==-1?s:null)):(s=oe.call(this._longMonthsParse,f),s!==-1?s:(s=oe.call(this._shortMonthsParse,f),s!==-1?s:null))}function $s(e,n,r){var t,s,u;if(this._monthsParseExact)return Hs.call(this,e,n,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++)if(s=M([2e3,t]),r&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),!r&&!this._monthsParse[t]&&(u="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[t]=new RegExp(u.replace(".",""),"i")),r&&n==="MMMM"&&this._longMonthsParse[t].test(e)||r&&n==="MMM"&&this._shortMonthsParse[t].test(e)||!r&&this._monthsParse[t].test(e))return t}function Et(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=G(n);else if(n=e.localeData().monthsParse(n),!y(n))return e}var r=n,t=e.date();return t=t<29?t:Math.min(t,Yr(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,t):e._d.setMonth(r,t),e}function Dt(e){return e!=null?(Et(this,e),l.updateOffset(this,!0),this):In(this,"Month")}function zs(){return Yr(this.year(),this.month())}function Ws(e){return this._monthsParseExact?(k(this,"_monthsRegex")||Mt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(k(this,"_monthsShortRegex")||(this._monthsShortRegex=Ys),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Zs(e){return this._monthsParseExact?(k(this,"_monthsRegex")||Mt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(k(this,"_monthsRegex")||(this._monthsRegex=Ls),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Mt(){function e(V,Y){return Y.length-V.length}var n=[],r=[],t=[],s,u,f,w;for(s=0;s<12;s++)u=M([2e3,s]),f=Le(this.monthsShort(u,"")),w=Le(this.months(u,"")),n.push(f),r.push(w),t.push(w),t.push(f);n.sort(e),r.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Js(e,n,r,t,s,u,f){var w;return e<100&&e>=0?(w=new Date(e+400,n,r,t,s,u,f),isFinite(w.getFullYear())&&w.setFullYear(e)):w=new Date(e,n,r,t,s,u,f),w}function Un(e){var n,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,n=new Date(Date.UTC.apply(null,r)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function ur(e,n,r){var t=7+n-r,s=(7+Un(e,0,t).getUTCDay()-n)%7;return-s+t-1}function Vt(e,n,r,t,s){var u=(7+r-t)%7,f=ur(e,t,s),w=1+7*(n-1)+u+f,V,Y;return w<=0?(V=e-1,Y=Nn(V)+w):w>Nn(e)?(V=e+1,Y=w-Nn(e)):(V=e,Y=w),{year:V,dayOfYear:Y}}function Gn(e,n,r){var t=ur(e.year(),n,r),s=Math.floor((e.dayOfYear()-t-1)/7)+1,u,f;return s<1?(f=e.year()-1,u=s+He(f,n,r)):s>He(e.year(),n,r)?(u=s-He(e.year(),n,r),f=e.year()+1):(f=e.year(),u=s),{week:u,year:f}}function He(e,n,r){var t=ur(e,n,r),s=ur(e+1,n,r);return(Nn(e)-t+s)/7}R("w",["ww",2],"wo","week"),R("W",["WW",2],"Wo","isoWeek"),B("w",X,Tn),B("ww",X,Re),B("W",X,Tn),B("WW",X,Re),Vn(["w","ww","W","WW"],function(e,n,r,t){n[t.substr(0,1)]=G(e)});function Qs(e){return Gn(e,this._week.dow,this._week.doy).week}var Xs={dow:0,doy:6};function ei(){return this._week.dow}function ni(){return this._week.doy}function ri(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function ti(e){var n=Gn(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}R("d",0,"do","day"),R("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),R("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),R("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),R("e",0,0,"weekday"),R("E",0,0,"isoWeekday"),B("d",X),B("e",X),B("E",X),B("dd",function(e,n){return n.weekdaysMinRegex(e)}),B("ddd",function(e,n){return n.weekdaysShortRegex(e)}),B("dddd",function(e,n){return n.weekdaysRegex(e)}),Vn(["dd","ddd","dddd"],function(e,n,r,t){var s=r._locale.weekdaysParse(e,t,r._strict);s!=null?n.d=s:_(r).invalidWeekday=e}),Vn(["d","e","E"],function(e,n,r,t){n[t]=G(e)});function ai(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function si(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Lr(e,n){return e.slice(n,7).concat(e.slice(0,n))}var ii="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Nt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),li="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),oi=Mn,di=Mn,ui=Mn;function gi(e,n){var r=m(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?Lr(r,this._week.dow):e?r[e.day()]:r}function ki(e){return e===!0?Lr(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function mi(e){return e===!0?Lr(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function vi(e,n,r){var t,s,u,f=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)u=M([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(u,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(u,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(u,"").toLocaleLowerCase();return r?n==="dddd"?(s=oe.call(this._weekdaysParse,f),s!==-1?s:null):n==="ddd"?(s=oe.call(this._shortWeekdaysParse,f),s!==-1?s:null):(s=oe.call(this._minWeekdaysParse,f),s!==-1?s:null):n==="dddd"?(s=oe.call(this._weekdaysParse,f),s!==-1||(s=oe.call(this._shortWeekdaysParse,f),s!==-1)?s:(s=oe.call(this._minWeekdaysParse,f),s!==-1?s:null)):n==="ddd"?(s=oe.call(this._shortWeekdaysParse,f),s!==-1||(s=oe.call(this._weekdaysParse,f),s!==-1)?s:(s=oe.call(this._minWeekdaysParse,f),s!==-1?s:null)):(s=oe.call(this._minWeekdaysParse,f),s!==-1||(s=oe.call(this._weekdaysParse,f),s!==-1)?s:(s=oe.call(this._shortWeekdaysParse,f),s!==-1?s:null))}function pi(e,n,r){var t,s,u;if(this._weekdaysParseExact)return vi.call(this,e,n,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++)if(s=M([2e3,1]).day(t),r&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(u="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[t]=new RegExp(u.replace(".",""),"i")),r&&n==="dddd"&&this._fullWeekdaysParse[t].test(e)||r&&n==="ddd"&&this._shortWeekdaysParse[t].test(e)||r&&n==="dd"&&this._minWeekdaysParse[t].test(e)||!r&&this._weekdaysParse[t].test(e))return t}function hi(e){if(!this.isValid())return e!=null?this:NaN;var n=In(this,"Day");return e!=null?(e=ai(e,this.localeData()),this.add(e-n,"d")):n}function yi(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function fi(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=si(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function bi(e){return this._weekdaysParseExact?(k(this,"_weekdaysRegex")||Kr.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(k(this,"_weekdaysRegex")||(this._weekdaysRegex=oi),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function ci(e){return this._weekdaysParseExact?(k(this,"_weekdaysRegex")||Kr.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(k(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=di),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ti(e){return this._weekdaysParseExact?(k(this,"_weekdaysRegex")||Kr.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(k(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ui),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Kr(){function e(ce,Je){return Je.length-ce.length}var n=[],r=[],t=[],s=[],u,f,w,V,Y;for(u=0;u<7;u++)f=M([2e3,1]).day(u),w=Le(this.weekdaysMin(f,"")),V=Le(this.weekdaysShort(f,"")),Y=Le(this.weekdays(f,"")),n.push(w),r.push(V),t.push(Y),s.push(w),s.push(V),s.push(Y);n.sort(e),r.sort(e),t.sort(e),s.sort(e),this._weekdaysRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Cr(){return this.hours()%12||12}function ji(){return this.hours()||24}R("H",["HH",2],0,"hour"),R("h",["hh",2],0,Cr),R("k",["kk",2],0,ji),R("hmm",0,0,function(){return""+Cr.apply(this)+Q(this.minutes(),2)}),R("hmmss",0,0,function(){return""+Cr.apply(this)+Q(this.minutes(),2)+Q(this.seconds(),2)}),R("Hmm",0,0,function(){return""+this.hours()+Q(this.minutes(),2)}),R("Hmmss",0,0,function(){return""+this.hours()+Q(this.minutes(),2)+Q(this.seconds(),2)});function It(e,n){R(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}It("a",!0),It("A",!1);function Ut(e,n){return n._meridiemParse}B("a",Ut),B("A",Ut),B("H",X,Ur),B("h",X,Tn),B("k",X,Tn),B("HH",X,Re),B("hh",X,Re),B("kk",X,Re),B("hmm",Rt),B("hmmss",At),B("Hmm",Rt),B("Hmmss",At),W(["H","HH"],ge),W(["k","kk"],function(e,n,r){var t=G(e);n[ge]=t===24?0:t}),W(["a","A"],function(e,n,r){r._isPm=r._locale.isPM(e),r._meridiem=e}),W(["h","hh"],function(e,n,r){n[ge]=G(e),_(r).bigHour=!0}),W("hmm",function(e,n,r){var t=e.length-2;n[ge]=G(e.substr(0,t)),n[De]=G(e.substr(t)),_(r).bigHour=!0}),W("hmmss",function(e,n,r){var t=e.length-4,s=e.length-2;n[ge]=G(e.substr(0,t)),n[De]=G(e.substr(t,2)),n[Ce]=G(e.substr(s)),_(r).bigHour=!0}),W("Hmm",function(e,n,r){var t=e.length-2;n[ge]=G(e.substr(0,t)),n[De]=G(e.substr(t))}),W("Hmmss",function(e,n,r){var t=e.length-4,s=e.length-2;n[ge]=G(e.substr(0,t)),n[De]=G(e.substr(t,2)),n[Ce]=G(e.substr(s))});function _i(e){return(e+"").toLowerCase().charAt(0)==="p"}var xi=/[ap]\.?m?\.?/i,Pi=jn("Hours",!0);function Si(e,n,r){return e>11?r?"pm":"PM":r?"am":"AM"}var Gt={calendar:J,longDateFormat:fs,invalidDate:cs,ordinal:js,dayOfMonthOrdinalParse:_s,relativeTime:Ps,months:Gs,monthsShort:Bt,week:Xs,weekdays:ii,weekdaysMin:li,weekdaysShort:Nt,meridiemParse:xi},ae={},Yn={},Ln;function qi(e,n){var r,t=Math.min(e.length,n.length);for(r=0;r<t;r+=1)if(e[r]!==n[r])return r;return t}function Yt(e){return e&&e.toLowerCase().replace("_","-")}function Ri(e){for(var n=0,r,t,s,u;n<e.length;){for(u=Yt(e[n]).split("-"),r=u.length,t=Yt(e[n+1]),t=t?t.split("-"):null;r>0;){if(s=gr(u.slice(0,r).join("-")),s)return s;if(t&&t.length>=r&&qi(u,t)>=r-1)break;r--}n++}return Ln}function Ai(e){return!!(e&&e.match("^[^/\\\\]*$"))}function gr(e){var n=null,r;if(ae[e]===void 0&&a&&a.exports&&Ai(e))try{n=Ln._abbr,r=wg,r("./locale/"+e),tn(n)}catch{ae[e]=null}return ae[e]}function tn(e,n){var r;return e&&(j(n)?r=$e(e):r=Hr(e,n),r?Ln=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Ln._abbr}function Hr(e,n){if(n!==null){var r,t=Gt;if(n.abbr=e,ae[e]!=null)rn("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=ae[e]._config;else if(n.parentLocale!=null)if(ae[n.parentLocale]!=null)t=ae[n.parentLocale]._config;else if(r=gr(n.parentLocale),r!=null)t=r._config;else return Yn[n.parentLocale]||(Yn[n.parentLocale]=[]),Yn[n.parentLocale].push({name:e,config:n}),null;return ae[e]=new U(Se(t,n)),Yn[e]&&Yn[e].forEach(function(s){Hr(s.name,s.config)}),tn(e),ae[e]}else return delete ae[e],null}function Fi(e,n){if(n!=null){var r,t,s=Gt;ae[e]!=null&&ae[e].parentLocale!=null?ae[e].set(Se(ae[e]._config,n)):(t=gr(e),t!=null&&(s=t._config),n=Se(s,n),t==null&&(n.abbr=e),r=new U(n),r.parentLocale=ae[e],ae[e]=r),tn(e)}else ae[e]!=null&&(ae[e].parentLocale!=null?(ae[e]=ae[e].parentLocale,e===tn()&&tn(e)):ae[e]!=null&&delete ae[e]);return ae[e]}function $e(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Ln;if(!m(e)){if(n=gr(e),n)return n;e=[e]}return Ri(e)}function wi(){return N(ae)}function $r(e){var n,r=e._a;return r&&_(e).overflow===-2&&(n=r[Ke]<0||r[Ke]>11?Ke:r[Ge]<1||r[Ge]>Yr(r[he],r[Ke])?Ge:r[ge]<0||r[ge]>24||r[ge]===24&&(r[De]!==0||r[Ce]!==0||r[mn]!==0)?ge:r[De]<0||r[De]>59?De:r[Ce]<0||r[Ce]>59?Ce:r[mn]<0||r[mn]>999?mn:-1,_(e)._overflowDayOfYear&&(n<he||n>Ge)&&(n=Ge),_(e)._overflowWeeks&&n===-1&&(n=Ds),_(e)._overflowWeekday&&n===-1&&(n=Ms),_(e).overflow=n),e}var Bi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Oi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ei=/Z|[+-]\d\d(?::?\d\d)?/,kr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],zr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Di=/^\/?Date\((-?\d+)/i,Mi=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Vi={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Lt(e){var n,r,t=e._i,s=Bi.exec(t)||Oi.exec(t),u,f,w,V,Y=kr.length,ce=zr.length;if(s){for(_(e).iso=!0,n=0,r=Y;n<r;n++)if(kr[n][1].exec(s[1])){f=kr[n][0],u=kr[n][2]!==!1;break}if(f==null){e._isValid=!1;return}if(s[3]){for(n=0,r=ce;n<r;n++)if(zr[n][1].exec(s[3])){w=(s[2]||" ")+zr[n][0];break}if(w==null){e._isValid=!1;return}}if(!u&&w!=null){e._isValid=!1;return}if(s[4])if(Ei.exec(s[4]))V="Z";else{e._isValid=!1;return}e._f=f+(w||"")+(V||""),Zr(e)}else e._isValid=!1}function Ni(e,n,r,t,s,u){var f=[Ii(e),Bt.indexOf(n),parseInt(r,10),parseInt(t,10),parseInt(s,10)];return u&&f.push(parseInt(u,10)),f}function Ii(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function Ui(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Gi(e,n,r){if(e){var t=Nt.indexOf(e),s=new Date(n[0],n[1],n[2]).getDay();if(t!==s)return _(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function Yi(e,n,r){if(e)return Vi[e];if(n)return 0;var t=parseInt(r,10),s=t%100,u=(t-s)/100;return u*60+s}function Kt(e){var n=Mi.exec(Ui(e._i)),r;if(n){if(r=Ni(n[4],n[3],n[2],n[5],n[6],n[7]),!Gi(n[1],r,e))return;e._a=r,e._tzm=Yi(n[8],n[9],n[10]),e._d=Un.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),_(e).rfc2822=!0}else e._isValid=!1}function Li(e){var n=Di.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(Lt(e),e._isValid===!1)delete e._isValid;else return;if(Kt(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:l.createFromInputFallback(e)}l.createFromInputFallback=ue("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function _n(e,n,r){return e??n??r}function Ki(e){var n=new Date(l.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function Wr(e){var n,r,t=[],s,u,f;if(!e._d){for(s=Ki(e),e._w&&e._a[Ge]==null&&e._a[Ke]==null&&Ci(e),e._dayOfYear!=null&&(f=_n(e._a[he],s[he]),(e._dayOfYear>Nn(f)||e._dayOfYear===0)&&(_(e)._overflowDayOfYear=!0),r=Un(f,0,e._dayOfYear),e._a[Ke]=r.getUTCMonth(),e._a[Ge]=r.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=t[n]=s[n];for(;n<7;n++)e._a[n]=t[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[ge]===24&&e._a[De]===0&&e._a[Ce]===0&&e._a[mn]===0&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Un:Js).apply(null,t),u=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==u&&(_(e).weekdayMismatch=!0)}}function Ci(e){var n,r,t,s,u,f,w,V,Y;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(u=1,f=4,r=_n(n.GG,e._a[he],Gn(ee(),1,4).year),t=_n(n.W,1),s=_n(n.E,1),(s<1||s>7)&&(V=!0)):(u=e._locale._week.dow,f=e._locale._week.doy,Y=Gn(ee(),u,f),r=_n(n.gg,e._a[he],Y.year),t=_n(n.w,Y.week),n.d!=null?(s=n.d,(s<0||s>6)&&(V=!0)):n.e!=null?(s=n.e+u,(n.e<0||n.e>6)&&(V=!0)):s=u),t<1||t>He(r,u,f)?_(e)._overflowWeeks=!0:V!=null?_(e)._overflowWeekday=!0:(w=Vt(r,t,s,u,f),e._a[he]=w.year,e._dayOfYear=w.dayOfYear)}l.ISO_8601=function(){},l.RFC_2822=function(){};function Zr(e){if(e._f===l.ISO_8601){Lt(e);return}if(e._f===l.RFC_2822){Kt(e);return}e._a=[],_(e).empty=!0;var n=""+e._i,r,t,s,u,f,w=n.length,V=0,Y,ce;for(s=Ue(e._f,e._locale).match(ie)||[],ce=s.length,r=0;r<ce;r++)u=s[r],t=(n.match(Bs(u,e))||[])[0],t&&(f=n.substr(0,n.indexOf(t)),f.length>0&&_(e).unusedInput.push(f),n=n.slice(n.indexOf(t)+t.length),V+=t.length),Te[u]?(t?_(e).empty=!1:_(e).unusedTokens.push(u),Es(u,t,e)):e._strict&&!t&&_(e).unusedTokens.push(u);_(e).charsLeftOver=w-V,n.length>0&&_(e).unusedInput.push(n),e._a[ge]<=12&&_(e).bigHour===!0&&e._a[ge]>0&&(_(e).bigHour=void 0),_(e).parsedDateParts=e._a.slice(0),_(e).meridiem=e._meridiem,e._a[ge]=Hi(e._locale,e._a[ge],e._meridiem),Y=_(e).era,Y!==null&&(e._a[he]=e._locale.erasConvertYear(Y,e._a[he])),Wr(e),$r(e)}function Hi(e,n,r){var t;return r==null?n:e.meridiemHour!=null?e.meridiemHour(n,r):(e.isPM!=null&&(t=e.isPM(r),t&&n<12&&(n+=12),!t&&n===12&&(n=0)),n)}function $i(e){var n,r,t,s,u,f,w=!1,V=e._f.length;if(V===0){_(e).invalidFormat=!0,e._d=new Date(NaN);return}for(s=0;s<V;s++)u=0,f=!1,n=Pe({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[s],Zr(n),H(n)&&(f=!0),u+=_(n).charsLeftOver,u+=_(n).unusedTokens.length*10,_(n).score=u,w?u<t&&(t=u,r=n):(t==null||u<t||f)&&(t=u,r=n,f&&(w=!0));h(e,r||n)}function zi(e){if(!e._d){var n=Vr(e._i),r=n.day===void 0?n.date:n.day;e._a=c([n.year,n.month,r,n.hour,n.minute,n.second,n.millisecond],function(t){return t&&parseInt(t,10)}),Wr(e)}}function Wi(e){var n=new Ee($r(Ct(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function Ct(e){var n=e._i,r=e._f;return e._locale=e._locale||$e(e._l),n===null||r===void 0&&n===""?E({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),te(n)?new Ee($r(n)):(p(n)?e._d=n:m(r)?$i(e):r?Zr(e):Zi(e),H(e)||(e._d=null),e))}function Zi(e){var n=e._i;j(n)?e._d=new Date(l.now()):p(n)?e._d=new Date(n.valueOf()):typeof n=="string"?Li(e):m(n)?(e._a=c(n.slice(0),function(r){return parseInt(r,10)}),Wr(e)):v(n)?zi(e):y(n)?e._d=new Date(n):l.createFromInputFallback(e)}function Ht(e,n,r,t,s){var u={};return(n===!0||n===!1)&&(t=n,n=void 0),(r===!0||r===!1)&&(t=r,r=void 0),(v(e)&&b(e)||m(e)&&e.length===0)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=s,u._l=r,u._i=e,u._f=n,u._strict=t,Wi(u)}function ee(e,n,r,t){return Ht(e,n,r,t,!1)}var Ji=ue("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ee.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:E()}),Qi=ue("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ee.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:E()});function $t(e,n){var r,t;if(n.length===1&&m(n[0])&&(n=n[0]),!n.length)return ee();for(r=n[0],t=1;t<n.length;++t)(!n[t].isValid()||n[t][e](r))&&(r=n[t]);return r}function Xi(){var e=[].slice.call(arguments,0);return $t("isBefore",e)}function el(){var e=[].slice.call(arguments,0);return $t("isAfter",e)}var nl=function(){return Date.now?Date.now():+new Date},Kn=["year","quarter","month","week","day","hour","minute","second","millisecond"];function rl(e){var n,r=!1,t,s=Kn.length;for(n in e)if(k(e,n)&&!(oe.call(Kn,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(t=0;t<s;++t)if(e[Kn[t]]){if(r)return!1;parseFloat(e[Kn[t]])!==G(e[Kn[t]])&&(r=!0)}return!0}function tl(){return this._isValid}function al(){return Me(NaN)}function mr(e){var n=Vr(e),r=n.year||0,t=n.quarter||0,s=n.month||0,u=n.week||n.isoWeek||0,f=n.day||0,w=n.hour||0,V=n.minute||0,Y=n.second||0,ce=n.millisecond||0;this._isValid=rl(n),this._milliseconds=+ce+Y*1e3+V*6e4+w*1e3*60*60,this._days=+f+u*7,this._months=+s+t*3+r*12,this._data={},this._locale=$e(),this._bubble()}function vr(e){return e instanceof mr}function Jr(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function sl(e,n,r){var t=Math.min(e.length,n.length),s=Math.abs(e.length-n.length),u=0,f;for(f=0;f<t;f++)G(e[f])!==G(n[f])&&u++;return u+s}function zt(e,n){R(e,0,0,function(){var r=this.utcOffset(),t="+";return r<0&&(r=-r,t="-"),t+Q(~~(r/60),2)+n+Q(~~r%60,2)})}zt("Z",":"),zt("ZZ",""),B("Z",lr),B("ZZ",lr),W(["Z","ZZ"],function(e,n,r){r._useUTC=!0,r._tzm=Qr(lr,e)});var il=/([\+\-]|\d\d)/gi;function Qr(e,n){var r=(n||"").match(e),t,s,u;return r===null?null:(t=r[r.length-1]||[],s=(t+"").match(il)||["-",0,0],u=+(s[1]*60)+G(s[2]),u===0?0:s[0]==="+"?u:-u)}function Xr(e,n){var r,t;return n._isUTC?(r=n.clone(),t=(te(e)||p(e)?e.valueOf():ee(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+t),l.updateOffset(r,!1),r):ee(e).local()}function et(e){return-Math.round(e._d.getTimezoneOffset())}l.updateOffset=function(){};function ll(e,n,r){var t=this._offset||0,s;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Qr(lr,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&n&&(s=et(this)),this._offset=e,this._isUTC=!0,s!=null&&this.add(s,"m"),t!==e&&(!n||this._changeInProgress?Qt(this,Me(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,l.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:et(this)}function ol(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function dl(e){return this.utcOffset(0,e)}function ul(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(et(this),"m")),this}function gl(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Qr(Fs,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function kl(e){return this.isValid()?(e=e?ee(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function ml(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function vl(){if(!j(this._isDSTShifted))return this._isDSTShifted;var e={},n;return Pe(e,this),e=Ct(e),e._a?(n=e._isUTC?M(e._a):ee(e._a),this._isDSTShifted=this.isValid()&&sl(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function pl(){return this.isValid()?!this._isUTC:!1}function hl(){return this.isValid()?this._isUTC:!1}function Wt(){return this.isValid()?this._isUTC&&this._offset===0:!1}var yl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,fl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Me(e,n){var r=e,t=null,s,u,f;return vr(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:y(e)||!isNaN(+e)?(r={},n?r[n]=+e:r.milliseconds=+e):(t=yl.exec(e))?(s=t[1]==="-"?-1:1,r={y:0,d:G(t[Ge])*s,h:G(t[ge])*s,m:G(t[De])*s,s:G(t[Ce])*s,ms:G(Jr(t[mn]*1e3))*s}):(t=fl.exec(e))?(s=t[1]==="-"?-1:1,r={y:vn(t[2],s),M:vn(t[3],s),w:vn(t[4],s),d:vn(t[5],s),h:vn(t[6],s),m:vn(t[7],s),s:vn(t[8],s)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(f=bl(ee(r.from),ee(r.to)),r={},r.ms=f.milliseconds,r.M=f.months),u=new mr(r),vr(e)&&k(e,"_locale")&&(u._locale=e._locale),vr(e)&&k(e,"_isValid")&&(u._isValid=e._isValid),u}Me.fn=mr.prototype,Me.invalid=al;function vn(e,n){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*n}function Zt(e,n){var r={};return r.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(n)&&--r.months,r.milliseconds=+n-+e.clone().add(r.months,"M"),r}function bl(e,n){var r;return e.isValid()&&n.isValid()?(n=Xr(n,e),e.isBefore(n)?r=Zt(e,n):(r=Zt(n,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Jt(e,n){return function(r,t){var s,u;return t!==null&&!isNaN(+t)&&(rn(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),u=r,r=t,t=u),s=Me(r,t),Qt(this,s,e),this}}function Qt(e,n,r,t){var s=n._milliseconds,u=Jr(n._days),f=Jr(n._months);e.isValid()&&(t=t??!0,f&&Et(e,In(e,"Month")+f*r),u&&wt(e,"Date",In(e,"Date")+u*r),s&&e._d.setTime(e._d.valueOf()+s*r),t&&l.updateOffset(e,u||f))}var cl=Jt(1,"add"),Tl=Jt(-1,"subtract");function Xt(e){return typeof e=="string"||e instanceof String}function jl(e){return te(e)||p(e)||Xt(e)||y(e)||xl(e)||_l(e)||e===null||e===void 0}function _l(e){var n=v(e)&&!b(e),r=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],s,u,f=t.length;for(s=0;s<f;s+=1)u=t[s],r=r||k(e,u);return n&&r}function xl(e){var n=m(e),r=!1;return n&&(r=e.filter(function(t){return!y(t)&&Xt(e)}).length===0),n&&r}function Pl(e){var n=v(e)&&!b(e),r=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],s,u;for(s=0;s<t.length;s+=1)u=t[s],r=r||k(e,u);return n&&r}function Sl(e,n){var r=e.diff(n,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function ql(e,n){arguments.length===1&&(arguments[0]?jl(arguments[0])?(e=arguments[0],n=void 0):Pl(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var r=e||ee(),t=Xr(r,this).startOf("day"),s=l.calendarFormat(this,t)||"sameElse",u=n&&(pe(n[s])?n[s].call(this,r):n[s]);return this.format(u||this.localeData().calendar(s,this,ee(r)))}function Rl(){return new Ee(this)}function Al(e,n){var r=te(e)?e:ee(e);return this.isValid()&&r.isValid()?(n=Be(n)||"millisecond",n==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(n).valueOf()):!1}function Fl(e,n){var r=te(e)?e:ee(e);return this.isValid()&&r.isValid()?(n=Be(n)||"millisecond",n==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(n).valueOf()<r.valueOf()):!1}function wl(e,n,r,t){var s=te(e)?e:ee(e),u=te(n)?n:ee(n);return this.isValid()&&s.isValid()&&u.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(s,r):!this.isBefore(s,r))&&(t[1]===")"?this.isBefore(u,r):!this.isAfter(u,r))):!1}function Bl(e,n){var r=te(e)?e:ee(e),t;return this.isValid()&&r.isValid()?(n=Be(n)||"millisecond",n==="millisecond"?this.valueOf()===r.valueOf():(t=r.valueOf(),this.clone().startOf(n).valueOf()<=t&&t<=this.clone().endOf(n).valueOf())):!1}function Ol(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function El(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function Dl(e,n,r){var t,s,u;if(!this.isValid())return NaN;if(t=Xr(e,this),!t.isValid())return NaN;switch(s=(t.utcOffset()-this.utcOffset())*6e4,n=Be(n),n){case"year":u=pr(this,t)/12;break;case"month":u=pr(this,t);break;case"quarter":u=pr(this,t)/3;break;case"second":u=(this-t)/1e3;break;case"minute":u=(this-t)/6e4;break;case"hour":u=(this-t)/36e5;break;case"day":u=(this-t-s)/864e5;break;case"week":u=(this-t-s)/6048e5;break;default:u=this-t}return r?u:Oe(u)}function pr(e,n){if(e.date()<n.date())return-pr(n,e);var r=(n.year()-e.year())*12+(n.month()-e.month()),t=e.clone().add(r,"months"),s,u;return n-t<0?(s=e.clone().add(r-1,"months"),u=(n-t)/(t-s)):(s=e.clone().add(r+1,"months"),u=(n-t)/(s-t)),-(r+u)||0}l.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",l.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Ml(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Vl(e){if(!this.isValid())return null;var n=e!==!0,r=n?this.clone().utc():this;return r.year()<0||r.year()>9999?Ie(r,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):pe(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ie(r,"Z")):Ie(r,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Nl(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",r,t,s,u;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),r="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s="-MM-DD[T]HH:mm:ss.SSS",u=n+'[")]',this.format(r+t+s+u)}function Il(e){e||(e=this.isUtc()?l.defaultFormatUtc:l.defaultFormat);var n=Ie(this,e);return this.localeData().postformat(n)}function Ul(e,n){return this.isValid()&&(te(e)&&e.isValid()||ee(e).isValid())?Me({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function Gl(e){return this.from(ee(),e)}function Yl(e,n){return this.isValid()&&(te(e)&&e.isValid()||ee(e).isValid())?Me({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function Ll(e){return this.to(ee(),e)}function ea(e){var n;return e===void 0?this._locale._abbr:(n=$e(e),n!=null&&(this._locale=n),this)}var na=ue("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ra(){return this._locale}var hr=1e3,xn=60*hr,yr=60*xn,ta=(365*400+97)*24*yr;function Pn(e,n){return(e%n+n)%n}function aa(e,n,r){return e<100&&e>=0?new Date(e+400,n,r)-ta:new Date(e,n,r).valueOf()}function sa(e,n,r){return e<100&&e>=0?Date.UTC(e+400,n,r)-ta:Date.UTC(e,n,r)}function Kl(e){var n,r;if(e=Be(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?sa:aa,e){case"year":n=r(this.year(),0,1);break;case"quarter":n=r(this.year(),this.month()-this.month()%3,1);break;case"month":n=r(this.year(),this.month(),1);break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=r(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=Pn(n+(this._isUTC?0:this.utcOffset()*xn),yr);break;case"minute":n=this._d.valueOf(),n-=Pn(n,xn);break;case"second":n=this._d.valueOf(),n-=Pn(n,hr);break}return this._d.setTime(n),l.updateOffset(this,!0),this}function Cl(e){var n,r;if(e=Be(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?sa:aa,e){case"year":n=r(this.year()+1,0,1)-1;break;case"quarter":n=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=r(this.year(),this.month()+1,1)-1;break;case"week":n=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=yr-Pn(n+(this._isUTC?0:this.utcOffset()*xn),yr)-1;break;case"minute":n=this._d.valueOf(),n+=xn-Pn(n,xn)-1;break;case"second":n=this._d.valueOf(),n+=hr-Pn(n,hr)-1;break}return this._d.setTime(n),l.updateOffset(this,!0),this}function Hl(){return this._d.valueOf()-(this._offset||0)*6e4}function $l(){return Math.floor(this.valueOf()/1e3)}function zl(){return new Date(this.valueOf())}function Wl(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Zl(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Jl(){return this.isValid()?this.toISOString():null}function Ql(){return H(this)}function Xl(){return h({},_(this))}function eo(){return _(this).overflow}function no(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}R("N",0,0,"eraAbbr"),R("NN",0,0,"eraAbbr"),R("NNN",0,0,"eraAbbr"),R("NNNN",0,0,"eraName"),R("NNNNN",0,0,"eraNarrow"),R("y",["y",1],"yo","eraYear"),R("y",["yy",2],0,"eraYear"),R("y",["yyy",3],0,"eraYear"),R("y",["yyyy",4],0,"eraYear"),B("N",nt),B("NN",nt),B("NNN",nt),B("NNNN",mo),B("NNNNN",vo),W(["N","NN","NNN","NNNN","NNNNN"],function(e,n,r,t){var s=r._locale.erasParse(e,t,r._strict);s?_(r).era=s:_(r).invalidEra=e}),B("y",cn),B("yy",cn),B("yyy",cn),B("yyyy",cn),B("yo",po),W(["y","yy","yyy","yyyy"],he),W(["yo"],function(e,n,r,t){var s;r._locale._eraYearOrdinalRegex&&(s=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?n[he]=r._locale.eraYearOrdinalParse(e,s):n[he]=parseInt(e,10)});function ro(e,n){var r,t,s,u=this._eras||$e("en")._eras;for(r=0,t=u.length;r<t;++r){switch(typeof u[r].since){case"string":s=l(u[r].since).startOf("day"),u[r].since=s.valueOf();break}switch(typeof u[r].until){case"undefined":u[r].until=1/0;break;case"string":s=l(u[r].until).startOf("day").valueOf(),u[r].until=s.valueOf();break}}return u}function to(e,n,r){var t,s,u=this.eras(),f,w,V;for(e=e.toUpperCase(),t=0,s=u.length;t<s;++t)if(f=u[t].name.toUpperCase(),w=u[t].abbr.toUpperCase(),V=u[t].narrow.toUpperCase(),r)switch(n){case"N":case"NN":case"NNN":if(w===e)return u[t];break;case"NNNN":if(f===e)return u[t];break;case"NNNNN":if(V===e)return u[t];break}else if([f,w,V].indexOf(e)>=0)return u[t]}function ao(e,n){var r=e.since<=e.until?1:-1;return n===void 0?l(e.since).year():l(e.since).year()+(n-e.offset)*r}function so(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].name;return""}function io(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].narrow;return""}function lo(){var e,n,r,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(r=this.clone().startOf("day").valueOf(),t[e].since<=r&&r<=t[e].until||t[e].until<=r&&r<=t[e].since)return t[e].abbr;return""}function oo(){var e,n,r,t,s=this.localeData().eras();for(e=0,n=s.length;e<n;++e)if(r=s[e].since<=s[e].until?1:-1,t=this.clone().startOf("day").valueOf(),s[e].since<=t&&t<=s[e].until||s[e].until<=t&&t<=s[e].since)return(this.year()-l(s[e].since).year())*r+s[e].offset;return this.year()}function uo(e){return k(this,"_erasNameRegex")||rt.call(this),e?this._erasNameRegex:this._erasRegex}function go(e){return k(this,"_erasAbbrRegex")||rt.call(this),e?this._erasAbbrRegex:this._erasRegex}function ko(e){return k(this,"_erasNarrowRegex")||rt.call(this),e?this._erasNarrowRegex:this._erasRegex}function nt(e,n){return n.erasAbbrRegex(e)}function mo(e,n){return n.erasNameRegex(e)}function vo(e,n){return n.erasNarrowRegex(e)}function po(e,n){return n._eraYearOrdinalRegex||cn}function rt(){var e=[],n=[],r=[],t=[],s,u,f,w,V,Y=this.eras();for(s=0,u=Y.length;s<u;++s)f=Le(Y[s].name),w=Le(Y[s].abbr),V=Le(Y[s].narrow),n.push(f),e.push(w),r.push(V),t.push(f),t.push(w),t.push(V);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}R(0,["gg",2],0,function(){return this.weekYear()%100}),R(0,["GG",2],0,function(){return this.isoWeekYear()%100});function fr(e,n){R(0,[e,e.length],0,n)}fr("gggg","weekYear"),fr("ggggg","weekYear"),fr("GGGG","isoWeekYear"),fr("GGGGG","isoWeekYear"),B("G",ir),B("g",ir),B("GG",X,Re),B("gg",X,Re),B("GGGG",Ir,Nr),B("gggg",Ir,Nr),B("GGGGG",sr,tr),B("ggggg",sr,tr),Vn(["gggg","ggggg","GGGG","GGGGG"],function(e,n,r,t){n[t.substr(0,2)]=G(e)}),Vn(["gg","GG"],function(e,n,r,t){n[t]=l.parseTwoDigitYear(e)});function ho(e){return ia.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function yo(e){return ia.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function fo(){return He(this.year(),1,4)}function bo(){return He(this.isoWeekYear(),1,4)}function co(){var e=this.localeData()._week;return He(this.year(),e.dow,e.doy)}function To(){var e=this.localeData()._week;return He(this.weekYear(),e.dow,e.doy)}function ia(e,n,r,t,s){var u;return e==null?Gn(this,t,s).year:(u=He(e,t,s),n>u&&(n=u),jo.call(this,e,n,r,t,s))}function jo(e,n,r,t,s){var u=Vt(e,n,r,t,s),f=Un(u.year,0,u.dayOfYear);return this.year(f.getUTCFullYear()),this.month(f.getUTCMonth()),this.date(f.getUTCDate()),this}R("Q",0,"Qo","quarter"),B("Q",St),W("Q",function(e,n){n[Ke]=(G(e)-1)*3});function _o(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}R("D",["DD",2],"Do","date"),B("D",X,Tn),B("DD",X,Re),B("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient}),W(["D","DD"],Ge),W("Do",function(e,n){n[Ge]=G(e.match(X)[0])});var la=jn("Date",!0);R("DDD",["DDDD",3],"DDDo","dayOfYear"),B("DDD",ar),B("DDDD",qt),W(["DDD","DDDD"],function(e,n,r){r._dayOfYear=G(e)});function xo(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}R("m",["mm",2],0,"minute"),B("m",X,Ur),B("mm",X,Re),W(["m","mm"],De);var Po=jn("Minutes",!1);R("s",["ss",2],0,"second"),B("s",X,Ur),B("ss",X,Re),W(["s","ss"],Ce);var So=jn("Seconds",!1);R("S",0,0,function(){return~~(this.millisecond()/100)}),R(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),R(0,["SSS",3],0,"millisecond"),R(0,["SSSS",4],0,function(){return this.millisecond()*10}),R(0,["SSSSS",5],0,function(){return this.millisecond()*100}),R(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),R(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),R(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),R(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),B("S",ar,St),B("SS",ar,Re),B("SSS",ar,qt);var an,oa;for(an="SSSS";an.length<=9;an+="S")B(an,cn);function qo(e,n){n[mn]=G(("0."+e)*1e3)}for(an="S";an.length<=9;an+="S")W(an,qo);oa=jn("Milliseconds",!1),R("z",0,0,"zoneAbbr"),R("zz",0,0,"zoneName");function Ro(){return this._isUTC?"UTC":""}function Ao(){return this._isUTC?"Coordinated Universal Time":""}var P=Ee.prototype;P.add=cl,P.calendar=ql,P.clone=Rl,P.diff=Dl,P.endOf=Cl,P.format=Il,P.from=Ul,P.fromNow=Gl,P.to=Yl,P.toNow=Ll,P.get=Ns,P.invalidAt=eo,P.isAfter=Al,P.isBefore=Fl,P.isBetween=wl,P.isSame=Bl,P.isSameOrAfter=Ol,P.isSameOrBefore=El,P.isValid=Ql,P.lang=na,P.locale=ea,P.localeData=ra,P.max=Qi,P.min=Ji,P.parsingFlags=Xl,P.set=Is,P.startOf=Kl,P.subtract=Tl,P.toArray=Wl,P.toObject=Zl,P.toDate=zl,P.toISOString=Vl,P.inspect=Nl,typeof Symbol<"u"&&Symbol.for!=null&&(P[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),P.toJSON=Jl,P.toString=Ml,P.unix=$l,P.valueOf=Hl,P.creationData=no,P.eraName=so,P.eraNarrow=io,P.eraAbbr=lo,P.eraYear=oo,P.year=Ft,P.isLeapYear=Vs,P.weekYear=ho,P.isoWeekYear=yo,P.quarter=P.quarters=_o,P.month=Dt,P.daysInMonth=zs,P.week=P.weeks=ri,P.isoWeek=P.isoWeeks=ti,P.weeksInYear=co,P.weeksInWeekYear=To,P.isoWeeksInYear=fo,P.isoWeeksInISOWeekYear=bo,P.date=la,P.day=P.days=hi,P.weekday=yi,P.isoWeekday=fi,P.dayOfYear=xo,P.hour=P.hours=Pi,P.minute=P.minutes=Po,P.second=P.seconds=So,P.millisecond=P.milliseconds=oa,P.utcOffset=ll,P.utc=dl,P.local=ul,P.parseZone=gl,P.hasAlignedHourOffset=kl,P.isDST=ml,P.isLocal=pl,P.isUtcOffset=hl,P.isUtc=Wt,P.isUTC=Wt,P.zoneAbbr=Ro,P.zoneName=Ao,P.dates=ue("dates accessor is deprecated. Use date instead.",la),P.months=ue("months accessor is deprecated. Use month instead",Dt),P.years=ue("years accessor is deprecated. Use year instead",Ft),P.zone=ue("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",ol),P.isDSTShifted=ue("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",vl);function Fo(e){return ee(e*1e3)}function wo(){return ee.apply(null,arguments).parseZone()}function da(e){return e}var C=U.prototype;C.calendar=$,C.longDateFormat=bs,C.invalidDate=Ts,C.ordinal=xs,C.preparse=da,C.postformat=da,C.relativeTime=Ss,C.pastFuture=qs,C.set=kn,C.eras=ro,C.erasParse=to,C.erasConvertYear=ao,C.erasAbbrRegex=go,C.erasNameRegex=uo,C.erasNarrowRegex=ko,C.months=Ks,C.monthsShort=Cs,C.monthsParse=$s,C.monthsRegex=Zs,C.monthsShortRegex=Ws,C.week=Qs,C.firstDayOfYear=ni,C.firstDayOfWeek=ei,C.weekdays=gi,C.weekdaysMin=mi,C.weekdaysShort=ki,C.weekdaysParse=pi,C.weekdaysRegex=bi,C.weekdaysShortRegex=ci,C.weekdaysMinRegex=Ti,C.isPM=_i,C.meridiem=Si;function br(e,n,r,t){var s=$e(),u=M().set(t,n);return s[r](u,e)}function ua(e,n,r){if(y(e)&&(n=e,e=void 0),e=e||"",n!=null)return br(e,n,r,"month");var t,s=[];for(t=0;t<12;t++)s[t]=br(e,t,r,"month");return s}function tt(e,n,r,t){typeof e=="boolean"?(y(n)&&(r=n,n=void 0),n=n||""):(n=e,r=n,e=!1,y(n)&&(r=n,n=void 0),n=n||"");var s=$e(),u=e?s._week.dow:0,f,w=[];if(r!=null)return br(n,(r+u)%7,t,"day");for(f=0;f<7;f++)w[f]=br(n,(f+u)%7,t,"day");return w}function Bo(e,n){return ua(e,n,"months")}function Oo(e,n){return ua(e,n,"monthsShort")}function Eo(e,n,r){return tt(e,n,r,"weekdays")}function Do(e,n,r){return tt(e,n,r,"weekdaysShort")}function Mo(e,n,r){return tt(e,n,r,"weekdaysMin")}tn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,r=G(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+r}}),l.lang=ue("moment.lang is deprecated. Use moment.locale instead.",tn),l.langData=ue("moment.langData is deprecated. Use moment.localeData instead.",$e);var ze=Math.abs;function Vo(){var e=this._data;return this._milliseconds=ze(this._milliseconds),this._days=ze(this._days),this._months=ze(this._months),e.milliseconds=ze(e.milliseconds),e.seconds=ze(e.seconds),e.minutes=ze(e.minutes),e.hours=ze(e.hours),e.months=ze(e.months),e.years=ze(e.years),this}function ga(e,n,r,t){var s=Me(n,r);return e._milliseconds+=t*s._milliseconds,e._days+=t*s._days,e._months+=t*s._months,e._bubble()}function No(e,n){return ga(this,e,n,1)}function Io(e,n){return ga(this,e,n,-1)}function ka(e){return e<0?Math.floor(e):Math.ceil(e)}function Uo(){var e=this._milliseconds,n=this._days,r=this._months,t=this._data,s,u,f,w,V;return e>=0&&n>=0&&r>=0||e<=0&&n<=0&&r<=0||(e+=ka(at(r)+n)*864e5,n=0,r=0),t.milliseconds=e%1e3,s=Oe(e/1e3),t.seconds=s%60,u=Oe(s/60),t.minutes=u%60,f=Oe(u/60),t.hours=f%24,n+=Oe(f/24),V=Oe(ma(n)),r+=V,n-=ka(at(V)),w=Oe(r/12),r%=12,t.days=n,t.months=r,t.years=w,this}function ma(e){return e*4800/146097}function at(e){return e*146097/4800}function Go(e){if(!this.isValid())return NaN;var n,r,t=this._milliseconds;if(e=Be(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+t/864e5,r=this._months+ma(n),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(n=this._days+Math.round(at(this._months)),e){case"week":return n/7+t/6048e5;case"day":return n+t/864e5;case"hour":return n*24+t/36e5;case"minute":return n*1440+t/6e4;case"second":return n*86400+t/1e3;case"millisecond":return Math.floor(n*864e5)+t;default:throw new Error("Unknown unit "+e)}}function We(e){return function(){return this.as(e)}}var va=We("ms"),Yo=We("s"),Lo=We("m"),Ko=We("h"),Co=We("d"),Ho=We("w"),$o=We("M"),zo=We("Q"),Wo=We("y"),Zo=va;function Jo(){return Me(this)}function Qo(e){return e=Be(e),this.isValid()?this[e+"s"]():NaN}function pn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Xo=pn("milliseconds"),ed=pn("seconds"),nd=pn("minutes"),rd=pn("hours"),td=pn("days"),ad=pn("months"),sd=pn("years");function id(){return Oe(this.days()/7)}var Ze=Math.round,Sn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function ld(e,n,r,t,s){return s.relativeTime(n||1,!!r,e,t)}function od(e,n,r,t){var s=Me(e).abs(),u=Ze(s.as("s")),f=Ze(s.as("m")),w=Ze(s.as("h")),V=Ze(s.as("d")),Y=Ze(s.as("M")),ce=Ze(s.as("w")),Je=Ze(s.as("y")),sn=u<=r.ss&&["s",u]||u<r.s&&["ss",u]||f<=1&&["m"]||f<r.m&&["mm",f]||w<=1&&["h"]||w<r.h&&["hh",w]||V<=1&&["d"]||V<r.d&&["dd",V];return r.w!=null&&(sn=sn||ce<=1&&["w"]||ce<r.w&&["ww",ce]),sn=sn||Y<=1&&["M"]||Y<r.M&&["MM",Y]||Je<=1&&["y"]||["yy",Je],sn[2]=n,sn[3]=+e>0,sn[4]=t,ld.apply(null,sn)}function dd(e){return e===void 0?Ze:typeof e=="function"?(Ze=e,!0):!1}function ud(e,n){return Sn[e]===void 0?!1:n===void 0?Sn[e]:(Sn[e]=n,e==="s"&&(Sn.ss=n-1),!0)}function gd(e,n){if(!this.isValid())return this.localeData().invalidDate();var r=!1,t=Sn,s,u;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(r=e),typeof n=="object"&&(t=Object.assign({},Sn,n),n.s!=null&&n.ss==null&&(t.ss=n.s-1)),s=this.localeData(),u=od(this,!r,t,s),r&&(u=s.pastFuture(+this,u)),s.postformat(u)}var st=Math.abs;function qn(e){return(e>0)-(e<0)||+e}function cr(){if(!this.isValid())return this.localeData().invalidDate();var e=st(this._milliseconds)/1e3,n=st(this._days),r=st(this._months),t,s,u,f,w=this.asSeconds(),V,Y,ce,Je;return w?(t=Oe(e/60),s=Oe(t/60),e%=60,t%=60,u=Oe(r/12),r%=12,f=e?e.toFixed(3).replace(/\.?0+$/,""):"",V=w<0?"-":"",Y=qn(this._months)!==qn(w)?"-":"",ce=qn(this._days)!==qn(w)?"-":"",Je=qn(this._milliseconds)!==qn(w)?"-":"",V+"P"+(u?Y+u+"Y":"")+(r?Y+r+"M":"")+(n?ce+n+"D":"")+(s||t||e?"T":"")+(s?Je+s+"H":"")+(t?Je+t+"M":"")+(e?Je+f+"S":"")):"P0D"}var K=mr.prototype;K.isValid=tl,K.abs=Vo,K.add=No,K.subtract=Io,K.as=Go,K.asMilliseconds=va,K.asSeconds=Yo,K.asMinutes=Lo,K.asHours=Ko,K.asDays=Co,K.asWeeks=Ho,K.asMonths=$o,K.asQuarters=zo,K.asYears=Wo,K.valueOf=Zo,K._bubble=Uo,K.clone=Jo,K.get=Qo,K.milliseconds=Xo,K.seconds=ed,K.minutes=nd,K.hours=rd,K.days=td,K.weeks=id,K.months=ad,K.years=sd,K.humanize=gd,K.toISOString=cr,K.toString=cr,K.toJSON=cr,K.locale=ea,K.localeData=ra,K.toIsoString=ue("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",cr),K.lang=na,R("X",0,0,"unix"),R("x",0,0,"valueOf"),B("x",ir),B("X",ws),W("X",function(e,n,r){r._d=new Date(parseFloat(e)*1e3)}),W("x",function(e,n,r){r._d=new Date(G(e))});//! moment.js
return l.version="2.30.1",g(ee),l.fn=P,l.min=Xi,l.max=el,l.now=nl,l.utc=M,l.unix=Fo,l.months=Bo,l.isDate=p,l.locale=tn,l.invalid=E,l.duration=Me,l.isMoment=te,l.weekdays=Eo,l.parseZone=wo,l.localeData=$e,l.isDuration=vr,l.monthsShort=Oo,l.weekdaysMin=Mo,l.defineLocale=Hr,l.updateLocale=Fi,l.locales=wi,l.weekdaysShort=Do,l.normalizeUnits=Be,l.relativeTimeRounding=dd,l.relativeTimeThreshold=ud,l.calendarFormat=Sl,l.prototype=P,l.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},l})})(ls);var Bg=ls.exports;const An=wu(Bg),Og="_button_8q57x_1",Eg="_cancelButton_8q57x_5",Sa={button:Og,cancelButton:Eg},Dg=(a,o)=>d=>d&&(Ka(d)(An(a.tom.toString()).subtract(1,"day"))||Ca(d)(a.fom))?o.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,Mg=(a,o)=>{const d=An(a.forstePeriodeTomDato).add(1,"days"),l={fom:o.fom,tom:a.forstePeriodeTomDato},g={fom:d.format(Ia),tom:o.tom};return{forstePeriode:l,andrePeriode:g}},Vg=({periodeData:a,showModal:o,cancelEvent:d,finnesBelopMed0Verdi:l,splitPeriod:g})=>{const m=ve(),v=On();return i.jsx(En,{formMethods:v,onSubmit:k=>g(Mg(k,a)),children:i.jsxs(ln,{open:o,"aria-label":m.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:d,width:"medium",children:[i.jsx(ln.Header,{children:i.jsx(dn,{size:"small",children:i.jsx(x,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),i.jsxs(ln.Body,{children:[i.jsx(be,{size:"small",children:i.jsx(x,{id:"DelOppPeriodeModalImpl.Periode"})}),i.jsx(I,{size:"small",children:`${An(a.fom.toString()).format(ye)} - ${An(a.tom.toString()).format(ye)}`}),i.jsx(F,{sixteenPx:!0}),i.jsx(qr,{name:"forstePeriodeTomDato",label:i.jsx(x,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[ne,Rr,Dg(a,m)],fromDate:An(a.fom).toDate(),toDate:An(a.tom).toDate()}),l&&i.jsx(ft,{variant:"error",children:i.jsx(x,{id:"DelOppPeriodeModalImpl.BelopEr0"})}),i.jsx(F,{sixteenPx:!0})]}),i.jsxs(ln.Footer,{children:[i.jsx(re,{size:"small",variant:"primary",className:Sa.button,disabled:!v.formState.isDirty,children:i.jsx(x,{id:"DelOppPeriodeModalImpl.Ok"})}),i.jsx(re,{size:"small",variant:"secondary",onClick:d,className:Sa.cancelButton,type:"button",children:i.jsx(x,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})},Ng="_timeLineButton_wnej3_1",Ig="_splitPeriodImage_wnej3_24",Ug="_splitPeriodPosition_wnej3_30",Gg="_leftMargin_wnej3_33",Yg="_margin_wnej3_37",Lg="_fix_wnej3_41",ot={timeLineButton:Ng,splitPeriodImage:Ig,splitPeriodPosition:Ug,leftMargin:Gg,margin:Yg,fix:Lg},Kg=!1,Cg=({setNestePeriode:a,setForrigePeriode:o,readOnly:d,lukkPeriode:l,periode:g,beregnBelop:m,behandlingUuid:v,oppdaterSplittedePerioder:k})=>{const b=ve(),[j,y]=D.useState(!1),[p,c]=D.useState(!1),h=D.useCallback(_=>{y(!0),_.preventDefault()},[y]),M=D.useCallback(()=>{y(!1)},[]),q=_=>{c(!1);const L={belop:g.feilutbetaling,fom:_.forstePeriode.fom,tom:_.forstePeriode.tom,begrunnelse:g.begrunnelse?g.begrunnelse:" "},H={belop:g.feilutbetaling,fom:_.andrePeriode.fom,tom:_.andrePeriode.tom,begrunnelse:g.begrunnelse?g.begrunnelse:" "};m({behandlingUuid:v,perioder:[L,H]}).then(E=>{const{perioder:O}=E;if(O.some(Z=>Z.belop===0))c(!0);else{const Z={fom:L.fom,tom:L.tom,feilutbetaling:O[0].belop},Pe={fom:H.fom,tom:H.tom,feilutbetaling:O[1].belop};M(),k([Z,Pe])}})};return i.jsxs(me,{children:[i.jsxs(be,{size:"small",children:[i.jsx(x,{id:"PeriodeController.Detaljer"}),Kg]}),!d&&i.jsxs(i.Fragment,{children:[i.jsx(Bn,{}),i.jsx(re,{className:ot.margin,size:"xsmall",icon:i.jsx(Ja,{"aria-hidden":!0}),onClick:h,variant:"tertiary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:i.jsx(x,{id:"PeriodeController.DelOppPerioden"})})]}),j&&i.jsx(Vg,{cancelEvent:M,showModal:j,periodeData:g,splitPeriod:q,finnesBelopMed0Verdi:p}),i.jsx(Bn,{}),i.jsx(re,{className:ot.margin,size:"xsmall",icon:i.jsx(Br,{"aria-hidden":!0}),onClick:o,variant:"secondary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.prevPeriod"}),children:i.jsx(x,{id:"PeriodeController.prevPeriodShort"})}),i.jsx(re,{className:ot.margin,size:"xsmall",icon:i.jsx(Or,{"aria-hidden":!0}),onClick:a,variant:"secondary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:i.jsx(x,{id:"PeriodeController.nextPeriodShort"})}),i.jsx(re,{size:"xsmall",icon:i.jsx(Va,{"aria-hidden":!0}),onClick:l,variant:"tertiary-neutral",type:"button",title:b.formatMessage({id:"PeriodeController.LukkPeriode"})})]})},Hg="_infoSummary_14r2l_1",$g="_positivNumber_14r2l_8",zg="_redNumber_14r2l_12",Wg="_resultName_14r2l_17",$n={infoSummary:Hg,positivNumber:$g,redNumber:zg,resultName:Wg},Zg=({fom:a,tom:o,feilutbetaling:d,arsakHendelseNavn:l})=>{const g=Na(a,o);return i.jsxs("div",{className:$n.infoSummary,children:[i.jsxs(me,{children:[i.jsx(be,{size:"small",children:`${de(a).format(ye)} - ${de(o).format(ye)}`}),i.jsx(Bn,{}),i.jsx(I,{size:"small",children:g.formattedString})]}),i.jsx(F,{sixteenPx:!0}),i.jsxs(me,{gap:"4",children:[i.jsxs(I,{size:"small",className:$n.resultName,children:[i.jsx(x,{id:"PeriodeInformasjon.Feilutbetaling"}),":",i.jsx("span",{className:d?$n.redNumber:$n.positivNumber,children:Ae(d)})]}),l&&i.jsx(I,{size:"small",className:$n.resultName,children:l})]})]})},vt=(a,o)=>se(a.fom).diff(se(o.fom)),qa=a=>!a.erForeldet&&(a.begrunnelse===void 0||a.erSplittet),Jg=a=>{const o=a[a.valgtVilkarResultatType],d=o[o.handletUaktsomhetGrad];return o.tilbakekrevdBelop?{...a,[a.valgtVilkarResultatType]:{...Qn(o,"tilbakekrevdBelop")}}:d&&d.belopSomSkalTilbakekreves?{...a,[a.valgtVilkarResultatType]:{...o,[o.handletUaktsomhetGrad]:{...Qn(d,"belopSomSkalTilbakekreves")}}}:a},Qg=(a,o=[])=>o.map((d,l)=>{const g=a.find(k=>k.fom===d.fom&&k.tom===d.tom),m=g&&g[g.valgtVilkarResultatType]?g[g.valgtVilkarResultatType].erBelopetIBehold:void 0,v=g?!!g.erSplittet:!1;return{fom:d.fom,tom:d.tom,isAksjonspunktOpen:!d.erForeldet&&((g==null?void 0:g.begrunnelse)===void 0||v),isGodkjent:!(d.erForeldet||m===!1),id:l}}),os=(a,o)=>o.find(d=>!se(a.fom).isBefore(se(d.fom))&&!se(a.tom).isAfter(se(d.tom))),Xg=(a,o)=>o.every(d=>!(se(a.fom).isSameOrBefore(se(d.tom))&&se(d.fom).isSameOrBefore(se(a.tom)))),ek=(a,o,d)=>{const l=a.reduce((m,v)=>m+v.feilutbetaling,0)<d*4,g=o.vilkarsVurdertePerioder.map(m=>{const v=os(m,a);return{...v,harMerEnnEnYtelse:v&&v.ytelser.length>1,...Qn(m,"feilutbetalingBelop"),feilutbetaling:m.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:l}});return{perioder:a.filter(m=>Xg(m,g)).map(m=>({...m,harMerEnnEnYtelse:m.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:l})).concat(g)}},nk=(a,o)=>{if(!(!a||!o))return o.map(d=>{const l=os(d,a.perioder),g=l.foreldelseVurderingType?l.foreldelseVurderingType===Xe.FORELDET:l.foreldet;return{redusertBeloper:l.redusertBeloper,ytelser:l.ytelser,feilutbetaling:d.feilutbetaling?d.feilutbetaling:l.feilutbetaling,erTotalBelopUnder4Rettsgebyr:l.erTotalBelopUnder4Rettsgebyr,fom:d.fom,tom:d.tom,årsak:l.årsak,begrunnelse:l.begrunnelse,erForeldet:g||!1}})},rk=(a,o)=>a.perioder.map(d=>({...fg(d,o),fom:d.fom,tom:d.tom})).sort(vt),tk=(a,o)=>({kode:Dr.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:a.filter(d=>!d.erForeldet).map(d=>bg(d,o))}),ak=a=>{if(!a||a.reduce((d,l)=>l.erForeldet?d:d+1,0)<2)return;const o=a.reduce((d,l)=>{const{valgtVilkarResultatType:g}=l,m=l[g],{handletUaktsomhetGrad:v}=m,k=m[v];return k&&k.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?d+1:d},0);if(o>0&&o!==a.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},sk=({perioderForeldelse:a,kodeverkSamlingFpTilbake:o,submitCallback:d,readOnly:l,alleMerknaderFraBeslutter:g,perioder:m,vilkarvurdering:v,rettsgebyr:k,relasjonsRolleType:b,relasjonsRolleTypeKodeverk:j,beregnBelop:y,behandlingUuid:p,formData:c,setFormData:h})=>{var M;const q=ek(m,v,k),[_,L]=D.useState(c||rk(q,a)),[H,E]=D.useState(!!c),[O,Z]=D.useState(_==null?void 0:_.find(qa)),[Pe,Ee]=D.useState(!1),[te,nn]=D.useState();D.useEffect(()=>{nn(ak(_))},[_]);const ue=nk(q,_),Ye=l||(O==null?void 0:O.erForeldet)===!0,rn=_.reduce((R,le)=>le.erForeldet?R:R+1,0),pe=g[Dr.VURDER_TILBAKEKREVING],kn=D.useCallback(()=>{Ee(!0),d(tk(_,o[Jn.SARLIG_GRUNN]))},[_]),Se=Qg(_,ue),U=Se.some(R=>R.isAksjonspunktOpen),N=O?Se.find(R=>R.fom===O.fom&&R.tom===O.tom):void 0,J=R=>{const le=R?_.find(je=>je.fom===R.fom&&je.tom===R.tom):void 0;Z(le)},$=()=>{const R=_.findIndex(le=>le.fom===(O==null?void 0:O.fom)&&le.tom===(O==null?void 0:O.tom));J(_[R+1])},Q=()=>{const R=_.findIndex(le=>le.fom===(O==null?void 0:O.fom)&&le.tom===(O==null?void 0:O.tom));J(_[R-1])},ie=()=>{J(void 0)},we=R=>{const le=Qn(R,"erSplittet"),je=_.filter(Ue=>Ue.fom!==le.fom&&Ue.tom!==le.tom).concat(le).sort(vt);L(je),h(je),E(!0),ie();const Ie=je.find(qa);Ie&&J(Ie)},qe=R=>{const le=_.find(je=>je.fom===(O==null?void 0:O.fom)&&je.tom===(O==null?void 0:O.tom));if(le){const je=R.map(Ue=>({...Jg(le),...Ue,erSplittet:!0})),Ie=_.filter(Ue=>Ue.fom!==(O==null?void 0:O.fom)&&Ue.tom!==(O==null?void 0:O.tom)).concat(je).sort(vt);ie(),E(!0),L(Ie),h(Ie),J(je[0])}},Te=ue?ue.find(R=>R.fom===(O==null?void 0:O.fom)&&R.tom===(O==null?void 0:O.tom)):void 0;return i.jsxs(ht,{merknaderFraBeslutter:pe,withoutBorder:!0,children:[i.jsx(dn,{size:"small",children:i.jsx(x,{id:"Behandlingspunkt.Tilbakekreving"})}),i.jsx(F,{twentyPx:!0}),i.jsx(yt,{isAksjonspunktOpen:U,children:[i.jsx(x,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"},"AksjonspunktHjelpetekst")]}),i.jsx(F,{twentyPx:!0}),_&&i.jsxs(i.Fragment,{children:[i.jsx(Fg,{perioder:Se,valgtPeriode:N,setPeriode:J,relasjonsRolleType:b,relasjonsRolleTypeKodeverk:j}),O&&Te&&i.jsxs("div",{id:"panel-tilbakekreving","aria-controls":N==null?void 0:N.id.toString(),children:[i.jsx("div",{className:_g.space}),i.jsxs(Ea,{border:!0,children:[i.jsx(Cg,{setNestePeriode:$,setForrigePeriode:Q,periode:Te,readOnly:l,oppdaterSplittedePerioder:qe,behandlingUuid:p,beregnBelop:y,lukkPeriode:ie}),i.jsx(F,{sixteenPx:!0}),i.jsx(Zg,{feilutbetaling:Te.feilutbetaling,fom:Te.fom,tom:Te.tom,arsakHendelseNavn:(M=o[Ne.HENDELSE_TYPE].find(R=>{var le;return R.kode===((le=Te.årsak)==null?void 0:le.hendelseType)}))==null?void 0:M.navn}),i.jsx(F,{twentyPx:!0}),i.jsx(yg,{periode:O,data:Te,antallPerioderMedAksjonspunkt:rn,readOnly:Ye,skjulPeriode:ie,oppdaterPeriode:we,kodeverkSamlingFpTilbake:o,vilkarsVurdertePerioder:_},N==null?void 0:N.id)]})]})]}),i.jsx(F,{twentyPx:!0}),te&&i.jsxs(i.Fragment,{children:[i.jsx(ft,{variant:"error",children:i.jsx(x,{id:te})}),i.jsx(F,{twentyPx:!0})]}),i.jsx(ct,{isReadOnly:Ye,isDirty:H,isSubmittable:!U&&!O&&!te,onClick:kn,isSubmitting:Pe})]})},ik={"Behandlingspunkt.Tilbakekreving":"Tilbakekreving","TilbakekrevingAktivitetTabell.Aktivitet":"Aktivitet","TilbakekrevingAktivitetTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingForm.AksjonspunktHjelpetekst":"Fastsett tilbakekreving etter §22-15. Del opp perioden ved behov for ulik vurdering","TilbakekrevingPeriodeForm.VilkarForTilbakekreving":"Vilkårene for tilbakekreving","TilbakekrevingPeriodeForm.oppfylt":"Er vilkårene for tilbakekreving oppfylt?","TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr":"Totalbeløpet er under 4 rettsgebyr. Dersom 6.ledd skal anvendes for å frafalle tilbakekrevingen, må denne anvendes likt på alle periodene.","TilbakekrevingPeriodeForm.Oppdater":"Oppdater","TilbakekrevingPeriodeForm.Avbryt":"Avbryt","TilbakekrevingPeriodeForm.Vurdering":"Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes","TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst":"Hvilke hendelser har ført til feilutbetalingen og vurder valg av hjemmel","TilbakekrevingPeriodeForm.MaVelgeSarligGrunn":"Du må velge minst en Særlig grunn","TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen":"Beløp kan ikke være større enn feilutbetalingen","TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen":"Beløp må være mindre enn feilutbetalingen","TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling":"Feilutbetalt beløp er redusert med <b>kr. {belop},-</b> på grunn av etterbetaling innen samme periode.","TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"Feilutbetalt beløp er redusert med <b>kr. {belop},-</b> på grunn av trekk.","TilbakekrevingPeriodeForm.Aktsomhet":"Aktsomhet","TilbakekrevingPeriodeForm.VurderingAktsomhet":"Vurder hvorfor mottaker burde forstått, må ha forstått eller forsto at utbetalingen skyldtes en feil","TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"Beløpet mottatt i god tro","TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"Begrunn hvorfor mottaker er i god tro","TilbakekrevingPeriodeForm.KopierVilkårsvurdering":"Kopier vilkårsvurdering fra","AktsomhetGradForsettFormPanel.Andel":"Andel som skal tilbakekreves","AktsomhetGradForsettFormPanel.Renter":"Det legges til 10 % renter","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves":"Angi andel som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves":"Andel som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter":"Skal det tillegges renter?","AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"Beløp som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves":"Angi beløp som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon":"Skal særlige grunner gi reduksjon av beløpet?","AktsomhetReduksjonAvBelopFormPanel.Nei":"Nei","AktsomhetReduksjonAvBelopFormPanel.Ja":"Ja","AktsomhetFormPanel.HandletUaktsomhetGrad":"I hvilken grad burde mottaker forstått at utbetalingen skyldtes en feil","AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom":"Burde ha forstått","AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt":"Må ha forstått","AktsomhetFormPanel.AktsomhetTyperLabel.Forsett":"Forsto","AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt":"Når 6. ledd anvendes må alle perioder behandles likt","AktsomhetGradUaktsomhetFormPanel.Nei":"Nei","AktsomhetGradUaktsomhetFormPanel.Ja":"Ja","AktsomhetGradUaktsomhetFormPanel.Tilbakekrev":"Totalbeløpet er under 4 rettsgebyr (6. ledd). Skal det tilbakekreves?","AktsomhetGradUaktsomhetFormPanel.SærligGrunner":"Særlige grunner 4. ledd","AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner":"Vurder særlige grunner du har vektlagt for resultatet","AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst":"Begrunn om det foreligger/ ikke foreligger særlige grunner for reduksjon av beløpet som kreves tilbake. Kryss av hvilke særlige grunner som er vektlagt for resultatet","AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon":"Særlige grunner som er vektlagt (4.ledd)","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","BelopetMottattIGodTroFormPanel.Vurdering":"Vurdering","BelopetMottattIGodTroFormPanel.BelopetIBehold":"Er beløpet i behold?","BelopetMottattIGodTroFormPanel.Ja":"Ja","BelopetMottattIGodTroFormPanel.Nei":"Nei","BelopetMottattIGodTroFormPanel.AngiBelop":"Angi beløp som skal tilbakekreves","BelopetMottattIGodTroFormPanel.IngenTilbakekreving":"Ingen tilbakekreving","SubmitButton.ConfirmInformation":"Bekreft og fortsett","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},lk=Fr(ik),ok=({behandling:a,perioderForeldelse:o,vilkarvurderingsperioder:d,vilkarvurdering:l,beregnBelop:g,kodeverkSamlingFpTilbake:m,submitCallback:v,alleMerknaderFraBeslutter:k,isReadOnly:b,formData:j,setFormData:y,relasjonsRolleType:p,relasjonsRolleTypeKodeverk:c})=>i.jsx(wr,{value:lk,children:i.jsx(sk,{behandlingUuid:a.uuid,perioderForeldelse:o,perioder:d.perioder,rettsgebyr:d.rettsgebyr,vilkarvurdering:l,submitCallback:v,readOnly:b,relasjonsRolleType:p,relasjonsRolleTypeKodeverk:c,alleMerknaderFraBeslutter:k,kodeverkSamlingFpTilbake:m,beregnBelop:g,formData:j,setFormData:y})}),dk=[Dr.VURDER_TILBAKEKREVING],uk=[Fe.VILKARVURDERINGSPERIODER,Fe.VILKARVURDERING,Fe.PERIODER_FORELDELSE],gk=a=>a.length>0?a.some(o=>md(o.status))?Qe.IKKE_VURDERT:Qe.OPPFYLT:Qe.IKKE_VURDERT,ds=({...a})=>{const o=ve(),{startRequest:d}=Tt.useRestApiRunner(Fe.BEREGNE_BELØP);return z.jsx(_t,{...a,panelEndepunkter:uk,aksjonspunktKoder:dk,prosessPanelKode:jt.TILBAKEKREVING,prosessPanelMenyTekst:o.formatMessage({id:"Behandlingspunkt.Tilbakekreving"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:l=>gk(l.aksjonspunkter),renderPanel:l=>z.jsx(ok,{kodeverkSamlingFpTilbake:a.tilbakekrevingKodeverk,beregnBelop:d,relasjonsRolleType:a.relasjonsRolleType,relasjonsRolleTypeKodeverk:l.alleKodeverk[$a.RELASJONSROLLE_TYPE],...l})})};ds.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessInitPanel",props:{relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"tilbakekrevingKodeverkTyper"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
 */var Ra;function kk(){if(Ra)return zn;Ra=1;var a=on,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,b,j){var y,p={},c=null,h=null;j!==void 0&&(c=""+j),b.key!==void 0&&(c=""+b.key),b.ref!==void 0&&(h=b.ref);for(y in b)l.call(b,y)&&!m.hasOwnProperty(y)&&(p[y]=b[y]);if(k&&k.defaultProps)for(y in b=k.defaultProps,b)p[y]===void 0&&(p[y]=b[y]);return{$$typeof:o,type:k,key:c,ref:h,props:p,_owner:g.current}}return zn.Fragment=d,zn.jsx=v,zn.jsxs=v,zn}us.exports=kk();var S=us.exports;const mk="_table_gko8z_1",vk={table:mk},pk=["TilbakekrevingVedtakPeriodeTabell.Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop","TilbakekrevingVedtakPeriodeTabell.Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop","TilbakekrevingVedtakPeriodeTabell.Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves"],hk=({perioder:a,kodeverkSamlingFpTilbake:o})=>{const d=a.map(l=>{var g;return S.jsxs(Sr,{children:[S.jsx(ke,{children:S.jsx(I,{size:"small",children:S.jsx(hd,{dateStringFom:l.periode.fom,dateStringTom:l.periode.tom})})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:Ae(l.feilutbetaltBeløp)})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:(g=o[Ne.AKTSOMHET].find(m=>m.kode===l.vurdering))==null?void 0:g.navn})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:l.andelAvBeløp!==void 0&&l.andelAvBeløp!==null?`${l.andelAvBeløp}%`:""})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:l.renterProsent?`${l.renterProsent}%`:""})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:Ae(l.tilbakekrevingBeløp)})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:Ae(l.tilbakekrevingBeløpEtterSkatt)})})]},l.periode.fom)}).concat(S.jsxs(Sr,{children:[S.jsx(ke,{children:S.jsx(I,{size:"small",children:S.jsx(x,{id:"TilbakekrevingVedtakPeriodeTabell.Sum"})})}),S.jsx(ke,{children:S.jsx(I,{size:"small",children:Ae(a.reduce((l,g)=>l+g.feilutbetaltBeløp,0))})}),S.jsx(ke,{}),S.jsx(ke,{}),S.jsx(ke,{}),S.jsx(ke,{children:S.jsx(be,{size:"small",children:Ae(a.reduce((l,g)=>l+g.tilbakekrevingBeløp,0))})}),S.jsx(ke,{children:S.jsx(be,{size:"small",children:Ae(a.reduce((l,g)=>l+g.tilbakekrevingBeløpEtterSkatt,0))})})]},"sum"));return S.jsx("div",{className:vk.table,children:S.jsx(bt,{noHover:!0,headerTextCodes:pk,children:d})})},xe={OPPSUMMERING:"OPPSUMMERING",FAKTA:"FAKTA",FORELDELSE:"FORELDELSE",VILKAR:"VILKÅR",SARLIGEGRUNNER:"SÆRLIGEGRUNNER",SARLIGEGRUNNER_ANNET:"SÆRLIGEGRUNNER_ANNET"},yk="_addCircleIcon_84ecs_1",fk="_imageText_84ecs_7",bk="_addPeriode_84ecs_12",dt={addCircleIcon:yk,imageText:fk,addPeriode:bk},gs=Dn(3),ck=bn(4e3),Tk=[gs,gn],jk=[ne,gs,gn],_k=({type:a,readOnly:o,fritekstPakrevet:d,maximumLength:l})=>{const g=ve(),{watch:m}=er(),v=m(a)===void 0,[k,b]=D.useState(v&&!d),j=d?jk:Tk;return j.push(l?bn(l):ck),S.jsxs(S.Fragment,{children:[k&&!o&&S.jsxs(S.Fragment,{children:[S.jsx(F,{eightPx:!0}),S.jsxs("div",{onClick:y=>{y.preventDefault(),b(!1)},onKeyDown:y=>{y.preventDefault(),b(!1)},className:dt.addPeriode,role:"button",tabIndex:0,children:[S.jsx(Ad,{className:dt.addCircleIcon,title:g.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})}),S.jsx(_e,{size:"small",className:dt.imageText,children:S.jsx(x,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})})]})]}),!k&&S.jsxs(S.Fragment,{children:[S.jsx(F,{eightPx:!0}),S.jsx(un,{name:a,label:g.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst"}),validate:j,maxLength:l||4e3,readOnly:o})]})]})},xk="_container_aetpe_1",Pk="_gulmarkering_aetpe_4",Aa={container:xk,gulmarkering:Pk},pt=({intl:a,vedtaksbrevAvsnitt:o,readOnly:d,perioderSomIkkeHarUtfyltObligatoriskVerdi:l,fritekstOppsummeringPakrevdMenIkkeUtfylt:g=!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:m})=>S.jsxs("div",{className:Aa.container,children:[S.jsx(F,{twentyPx:!0}),S.jsx(dn,{size:"small",children:S.jsx(x,{id:"TilbakekrevingVedtak.Vedtaksbrev"})}),S.jsx(F,{eightPx:!0}),o.map(v=>{const k=v.underavsnittsliste,b=`${v.fom}_${v.tom}`,j=l.some(p=>p===b),y=v.avsnittstype===xe.OPPSUMMERING&&g;return S.jsxs(on.Fragment,{children:[S.jsxs(Tr,{"aria-label":"periode",defaultOpen:j||y,className:j||y?Aa.gulmarkering:"",children:[S.jsx(Tr.Header,{children:S.jsx(Tr.Title,{size:"small",children:v.overskrift?v.overskrift:a.formatMessage({id:"TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift"})})}),S.jsx(Tr.Content,{children:k.map(p=>S.jsxs(on.Fragment,{children:[p.overskrift&&S.jsx(be,{size:"small",children:p.overskrift}),p.brødtekst&&S.jsx(I,{size:"small",children:p.brødtekst}),p.fritekstTillatt&&S.jsxs(S.Fragment,{children:[S.jsx(F,{eightPx:!0}),S.jsx(_k,{type:p.underavsnittstype?`${b}.${p.underavsnittstype}`:v.avsnittstype,readOnly:d,fritekstPakrevet:p.fritekstPåkrevet,maximumLength:m?1e4:void 0})]}),S.jsx(F,{eightPx:!0})]},(p.underavsnittstype||"")+p.overskrift+p.brødtekst))})]}),S.jsx(F,{eightPx:!0})]},v.avsnittstype+v.fom)})]});pt.buildInitialValues=a=>a.filter(o=>o.underavsnittsliste.some(d=>d.fritekst)).reduce((o,d)=>{const l=d.underavsnittsliste.filter(m=>m.fritekst).reduce((m,v)=>({...m,[v.underavsnittstype?v.underavsnittstype:d.avsnittstype]:yn(v.fritekst)}),{}),g=d.fom?{[`${d.fom}_${d.tom}`]:l}:l;return{...o,...g}},{});const Sk="_buttonLink_sudxz_1",qk="_padding_sudxz_8",Rk="_infoTextContainer_sudxz_11",Ak="_infoTextIconColumn_sudxz_14",Fk="_infoTextIcon_sudxz_14",wk="_infotextColumn_sudxz_26",ut={buttonLink:Sk,padding:qk,infoTextContainer:Rk,infoTextIconColumn:Ak,infoTextIcon:Fk,infotextColumn:wk},ks=a=>{const o=xd(a,xe.OPPSUMMERING);return{oppsummeringstekst:a[xe.OPPSUMMERING],perioderMedTekst:Object.keys(o).map(d=>({fom:d.split("_")[0],tom:d.split("_")[1],faktaAvsnitt:o[d][xe.FAKTA],foreldelseAvsnitt:o[d][xe.FORELDELSE],vilkaarAvsnitt:o[d][xe.VILKAR],saerligeGrunnerAvsnitt:o[d][xe.SARLIGEGRUNNER],saerligeGrunnerAnnetAvsnitt:o[d][xe.SARLIGEGRUNNER_ANNET]}))}},Bk=(a,o)=>a.some(d=>d.avsnittstype===xe.OPPSUMMERING&&d.underavsnittsliste.some(l=>l.fritekstPåkrevet)&&!o[xe.OPPSUMMERING]),Ok=a=>({kode:xt.FORESLA_VEDTAK,...ks(a)}),Ek=(a,o)=>a.reduce((d,l)=>{const g=`${l.fom}_${l.tom}`,m=o[g];return l.underavsnittsliste.some(v=>v.fritekstPåkrevet&&v.underavsnittstype===xe.FAKTA)&&(!m||!m[xe.FAKTA])||l.underavsnittsliste.some(v=>v.fritekstPåkrevet&&v.underavsnittstype===xe.SARLIGEGRUNNER_ANNET)&&(!m||!m[xe.SARLIGEGRUNNER_ANNET])?d.concat(g):d},[]),Fa=(a,o,d)=>l=>{a({uuid:o,...ks(d)}),l.preventDefault()},Dk=({submitCallback:a,readOnly:o,fetchPreviewVedtaksbrev:d,avsnittsliste:l,behandlingUuid:g,erRevurderingTilbakekrevingKlage:m,erRevurderingTilbakekrevingFeilBeløpBortfalt:v,formData:k,setFormData:b})=>{const j=l,y=D.useMemo(()=>k||pt.buildInitialValues(j),[k,j]),p=ve(),c=On({defaultValues:y}),h=c.watch(),M=Bk(j,h),q=Ek(j,h),_=M||q.length>0;return S.jsxs(En,{formMethods:c,onSubmit:L=>a(Ok(L)),setDataOnUnmount:b,children:[S.jsx(F,{twentyPx:!0}),S.jsx(pt,{intl:p,vedtaksbrevAvsnitt:j,readOnly:o,perioderSomIkkeHarUtfyltObligatoriskVerdi:D.useMemo(()=>q,[]),fritekstOppsummeringPakrevdMenIkkeUtfylt:M,erRevurderingTilbakekrevingFeilBeløpBortfalt:v}),S.jsx(F,{twentyPx:!0}),S.jsxs(me,{gap:"10",children:[S.jsx(ct,{text:p.formatMessage({id:"TilbakekrevingVedtakForm.TilGodkjenning"}),isReadOnly:o,isSubmittable:q.length===0&&!M,isSubmitting:c.formState.isSubmitting,isDirty:c.formState.isDirty,hasErrors:_}),q.length===0&&S.jsx("div",{className:ut.padding,children:S.jsx("a",{href:"",onClick:Fa(d,g,h),onKeyDown:L=>L.key==="Enter"?Fa(d,g,h)(L):null,className:Dd(ut.buttonLink,"lenke lenke--frittstaende"),children:S.jsx(x,{id:"TilbakekrevingVedtakForm.ForhandvisBrev"})})})]}),S.jsx(F,{sixteenPx:!0}),m&&S.jsxs(me,{children:[S.jsx(yd,{className:ut.infoTextIcon}),S.jsx(x,{id:"TilbakekrevingVedtakForm.Infotekst.Klage"})]})]})},Mk=({submitCallback:a,readOnly:o,resultat:d,perioder:l,kodeverkSamlingFpTilbake:g,behandlingUuid:m,avsnittsliste:v,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:b,erRevurderingTilbakekrevingFeilBeløpBortfalt:j,formData:y,setFormData:p})=>{var c;return S.jsxs(S.Fragment,{children:[S.jsx(dn,{size:"small",children:S.jsx(x,{id:"TilbakekrevingVedtak.Vedtak"})}),S.jsx(F,{twentyPx:!0}),S.jsx(_e,{children:S.jsx(x,{id:"TilbakekrevingVedtak.Resultat"})}),S.jsx(I,{size:"small",children:(c=g[Ne.VEDTAK_RESULTAT_TYPE].find(h=>h.kode===d))==null?void 0:c.navn}),S.jsx(F,{sixteenPx:!0}),S.jsx(hk,{perioder:l,kodeverkSamlingFpTilbake:g}),S.jsx(F,{sixteenPx:!0}),S.jsx(Dk,{submitCallback:a,readOnly:o,behandlingUuid:m,avsnittsliste:v,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:b,erRevurderingTilbakekrevingFeilBeløpBortfalt:j,formData:y,setFormData:p})]})},Vk={"TilbakekrevingVedtak.Resultat":"Resultat","TilbakekrevingVedtak.Vedtaksbrev":"Vedtaksbrev","TilbakekrevingVedtak.Vedtak":"Vedtak","TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst":"Legg til utdypende tekst","TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst":"Utdypende tekst","TilbakekrevingVedtakPeriodeTabell.Periode":"Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingVedtakPeriodeTabell.Vurdering":"Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop":"Andel av beløp","TilbakekrevingVedtakPeriodeTabell.Renter":"Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt":"Beløp før skatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves":"Beløp etter skatt","TilbakekrevingVedtakPeriodeTabell.Sum":"Sum","TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift":"Lovhjemler og klagerett","TilbakekrevingVedtakForm.TilGodkjenning":"Til godkjenning","TilbakekrevingVedtakForm.ForhandvisBrev":"Forhåndsvis brev","TilbakekrevingVedtakForm.Infotekst.Klage":"Vedtaksbrev sendes ikke ut fra denne behandlingen, men må sendes av saksbehandler fra klagebehandlingen"},Nk=Fr(Vk),Ik=({behandling:a,beregningsresultat:o,isReadOnly:d,submitCallback:l,kodeverkSamlingFpTilbake:g,formData:m,setFormData:v,vedtaksbrev:k,fetchPreviewVedtaksbrev:b,erRevurderingTilbakekrevingKlage:j,erRevurderingTilbakekrevingFeilBeløpBortfalt:y})=>S.jsx(wr,{value:Nk,children:S.jsx(Mk,{behandlingUuid:a.uuid,perioder:o.beregningResultatPerioder,resultat:o.vedtakResultatType,avsnittsliste:k.avsnittsliste,submitCallback:l,readOnly:d,kodeverkSamlingFpTilbake:g,fetchPreviewVedtaksbrev:b,erRevurderingTilbakekrevingKlage:j,erRevurderingTilbakekrevingFeilBeløpBortfalt:y,formData:m,setFormData:v})}),Uk=[xt.FORESLA_VEDTAK],Gk=[Fe.VEDTAKSBREV,Fe.BEREGNINGSRESULTAT],Yk=[gt.RE_KLAGE_KA,gt.RE_KLAGE_NFP],Lk=a=>!!a&&Yk.some(o=>o===a),Kk=a=>{if(!a)return Qe.IKKE_VURDERT;const{type:o}=a;return o===it.INGEN_TILBAKEBETALING?Qe.IKKE_OPPFYLT:o===it.DELVIS_TILBAKEBETALING||o===it.FULL_TILBAKEBETALING?Qe.OPPFYLT:Qe.IKKE_VURDERT},Ck=a=>()=>()=>{a(!0)},ms=({tilbakekrevingKodeverk:a,opneSokeside:o,harApenRevurdering:d,...l})=>{const g=ve(),[m,v]=D.useState(d),k=D.useCallback(()=>v(!1),[]),[b,j]=D.useState(!1),y=Ck(j),{startRequest:p}=Tt.useRestApiRunner(Fe.PREVIEW_VEDTAKSBREV),c=D.useCallback(_=>p(_).then(Pd),[]),{behandling:h}=l,M=h.førsteÅrsak&&Lk(h.førsteÅrsak.behandlingArsakType),q=h.førsteÅrsak&&gt.RE_FEILUTBETALT_BELØP_REDUSERT===h.førsteÅrsak.behandlingArsakType;return z.jsxs(z.Fragment,{children:[z.jsx(Md,{visModal:b,lukkModal:()=>{j(!1),o()},tekst:g.formatMessage({id:"FatterTilbakekrevingVedtakStatusModal.Sendt"})}),m&&z.jsx(Ma,{headerText:g.formatMessage({id:"BehandlingTilbakekrevingIndex.ApenRevurderingHeader"}),bodyText:g.formatMessage({id:"BehandlingTilbakekrevingIndex.ApenRevurdering"}),showModal:!0,submit:k}),z.jsx(_t,{...l,panelEndepunkter:Gk,aksjonspunktKoder:Uk,prosessPanelKode:jt.VEDTAK,prosessPanelMenyTekst:g.formatMessage({id:"Behandlingspunkt.Vedtak"}),skalPanelVisesIMeny:()=>!0,lagringSideEffekter:y,hentOverstyrtStatus:_=>Kk(_.behandling.behandlingsresultat),renderPanel:_=>z.jsx(Ik,{kodeverkSamlingFpTilbake:a,fetchPreviewVedtaksbrev:c,erRevurderingTilbakekrevingKlage:M||!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:q||!1,..._})})]})};ms.__docgenInfo={description:"",methods:[],displayName:"VedtakTilbakekrevingProsessInitPanel",props:{tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"tilbakekrevingKodeverkTyper"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
 */var wa;function Hk(){if(wa)return Wn;wa=1;var a=on,o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(k,b,j){var y,p={},c=null,h=null;j!==void 0&&(c=""+j),b.key!==void 0&&(c=""+b.key),b.ref!==void 0&&(h=b.ref);for(y in b)l.call(b,y)&&!m.hasOwnProperty(y)&&(p[y]=b[y]);if(k&&k.defaultProps)for(y in b=k.defaultProps,b)p[y]===void 0&&(p[y]=b[y]);return{$$typeof:o,type:k,key:c,ref:h,props:p,_owner:g.current}}return Wn.Fragment=d,Wn.jsx=v,Wn.jsxs=v,Wn}vs.exports=Hk();var A=vs.exports;const $k="_feilutbetalingTable_1bepb_1",zk="_redText_1bepb_8",Ba={feilutbetalingTable:$k,redText:zk},hn="perioder",Wk=["FeilutbetalingInfoPanel.Period","FeilutbetalingInfoPanel.Hendelse","FeilutbetalingInfoPanel.Beløp"],Zk=(a,o)=>{const d=a.find(l=>l.hendelseType===o);return d!=null&&d.hendelseUndertyper&&d.hendelseUndertyper.length>0?d.hendelseUndertyper:void 0},Jk=({perioder:a,årsaker:o,readOnly:d,behandlePerioderSamlet:l,kodeverkSamlingFpTilbake:g})=>{const{control:m,watch:v,setValue:k,getValues:b}=er(),{fields:j}=Fd({control:m,name:hn}),y=(p,c,h)=>{l&&j.forEach((M,q)=>{c!==q&&(h?b(`${hn}.${q}.årsak`)===h&&k(`${hn}.${q}.${h}.underÅrsak`,p):k(`${hn}.${q}.årsak`,p))})};return A.jsx("div",{className:Ba.feilutbetalingTable,children:A.jsx(bt,{headerTextCodes:Wk,noHover:!0,children:j.map((p,c)=>{const h=v(`${hn}.${c}.årsak`),M=Zk(o,h);return A.jsxs(Sr,{children:[A.jsx(ke,{children:`${se(p.fom).format(ye)} - ${se(p.tom).format(ye)}`}),A.jsxs(ke,{children:[A.jsx(Ar,{name:`${hn}.${c}.årsak`,selectValues:o.map(q=>{var _;return A.jsx("option",{value:q.hendelseType,children:(_=g[Ne.HENDELSE_TYPE].find(L=>L.kode===q.hendelseType))==null?void 0:_.navn},q.hendelseType)}),validate:[ne],disabled:d,onChange:q=>y(q.target.value,c),label:""}),M&&A.jsx(Ar,{name:`${hn}.${c}.${h}.underÅrsak`,selectValues:M.map(q=>{var _;return A.jsx("option",{value:q,children:(_=g[Ne.HENDELSE_UNDERTYPE].find(L=>L.kode===q))==null?void 0:_.navn},q)}),validate:[ne],disabled:d,onChange:q=>y(q.target.value,c,h),label:""})]}),A.jsx(ke,{className:Ba.redText,children:a?a[c].belop:null})]},p.id)})})})},Qk="_textarea_14pq5_1",Xk="_textPadding_14pq5_4",em="_redText_14pq5_7",Oa={textarea:Qk,textPadding:Xk,redText:em},nm=Dn(3),ps=4e3,rm=bn(ps),hs=a=>a.behandlingFakta.perioder?[...a.behandlingFakta.perioder].sort((o,d)=>se(o.fom).diff(se(d.fom))):[],tm=a=>{const{behandlingFakta:{begrunnelse:o}}=a;return{begrunnelse:yn(o),perioder:hs(a).map(d=>{const{fom:l,tom:g,feilutbetalingÅrsakDto:m}=d,v={fom:l,tom:g};if(!m)return v;const{hendelseType:k,hendelseUndertype:b}=m;return{...v,årsak:k,[k]:{underÅrsak:b||null}}})}},am=(a,o)=>{const d=a.perioder.map(l=>{const g=o.find(v=>v.hendelseType===l.årsak),m=g!=null&&g.hendelseUndertyper?g.hendelseUndertyper.find(v=>{var k;return v===((k=l[l.årsak])==null?void 0:k.underÅrsak)}):void 0;return{fom:l.fom,tom:l.tom,årsak:{hendelseType:g==null?void 0:g.hendelseType,hendelseUndertype:m}}});return{kode:Mr.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:a.begrunnelse,feilutbetalingFakta:d}},sm=(a,o)=>{const{hendelseTyper:d}=a;return d.sort((l,g)=>{var m,v;const k=((m=o[Ne.HENDELSE_TYPE].find(h=>h.kode===l.hendelseType))==null?void 0:m.navn)||"",b=((v=o[Ne.HENDELSE_TYPE].find(h=>h.kode===g.hendelseType))==null?void 0:v.navn)||"",j=k.startsWith("§"),y=b.startsWith("§"),p=j?k.replace(/\D/g,""):k,c=y?b.replace(/\D/g,""):b;return j&&y?p-c:p.localeCompare(c)})},im=({hasOpenAksjonspunkter:a,feilutbetalingAarsak:o,feilutbetalingFakta:d,readOnly:l,alleMerknaderFraBeslutter:g,kodeverkSamlingFpTilbake:m,kodeverkSamlingFpsak:v,formData:k,setFormData:b,submitCallback:j})=>{var y,p;const c=ve(),h=d.behandlingFakta,M=tm(d),q=On({defaultValues:k||M}),_=q.watch("behandlePerioderSamlet")||!1,L=sm(o,m);return A.jsxs(A.Fragment,{children:[A.jsx(yt,{isAksjonspunktOpen:a,children:[A.jsx(x,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"},"1")]}),A.jsx(F,{sixteenPx:!0}),A.jsxs(En,{formMethods:q,onSubmit:H=>j(am(H,L)),setDataOnUnmount:b,children:[A.jsxs(me,{gap:"10",wrap:!0,children:[A.jsxs("div",{children:[A.jsx(be,{size:"small",children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),A.jsx(F,{sixteenPx:!0}),A.jsxs(me,{justify:"space-between",children:[A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),A.jsx(I,{size:"small",children:`${se(h.totalPeriodeFom).format(ye)} - ${se(h.totalPeriodeTom).format(ye)}`})]}),A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),A.jsx(I,{size:"small",className:Oa.redText,children:h.aktuellFeilUtbetaltBeløp})]}),A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),A.jsx(I,{size:"small",children:h.tidligereVarseltBeløp?h.tidligereVarseltBeløp:A.jsx(x,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),A.jsx(F,{sixteenPx:!0}),A.jsx(Wa,{name:"behandlePerioderSamlet",label:c.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:l}),A.jsx(F,{sixteenPx:!0}),A.jsx(ht,{merknaderFraBeslutter:g[Mr.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:A.jsx(Jk,{perioder:hs(d),behandlePerioderSamlet:_,årsaker:L,readOnly:l,kodeverkSamlingFpTilbake:m})})]}),A.jsxs("div",{children:[A.jsx(be,{size:"small",children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Revurdering"})}),A.jsx(F,{sixteenPx:!0}),A.jsxs(me,{gap:"4",children:[A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Årsaker"})}),h.behandlingÅrsaker&&A.jsx(I,{size:"small",children:h.behandlingÅrsaker.map(H=>{var E;return(E=v[Ne.BEHANDLING_AARSAK].find(O=>O.kode===H.behandlingArsakType))==null?void 0:E.navn}).join(", ")})]}),h.datoForRevurderingsvedtak&&A.jsxs("div",{children:[A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),A.jsx(I,{size:"small",children:se(h.datoForRevurderingsvedtak).format(ye)})]})]}),A.jsx(F,{sixteenPx:!0}),A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Resultat"})}),h.behandlingsresultat&&A.jsx(I,{size:"small",children:(y=v[Ne.BEHANDLING_AARSAK].find(H=>{var E;return H.kode===((E=h.behandlingsresultat)==null?void 0:E.type)}))==null?void 0:y.navn}),A.jsx(F,{sixteenPx:!0}),A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),h.behandlingsresultat&&A.jsx(I,{size:"small",children:h.behandlingsresultat.konsekvenserForYtelsen.map(H=>{var E;return(E=v[Ne.KONSEKVENS_FOR_YTELSEN].find(O=>O.kode===H))==null?void 0:E.navn}).join(", ")}),A.jsx(F,{sixteenPx:!0}),A.jsx(_e,{children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),h.tilbakekrevingValg&&A.jsx(I,{size:"small",children:(p=m[Ne.TILBAKEKR_VIDERE_BEH].find(H=>{var E;return H.kode===((E=h.tilbakekrevingValg)==null?void 0:E.videreBehandling)}))==null?void 0:p.navn})]})]}),A.jsx(F,{sixteenPx:!0}),A.jsx("div",{className:Oa.textarea,children:A.jsx(un,{name:"begrunnelse",label:c.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[ne,nm,rm,gn],maxLength:ps,readOnly:l})}),A.jsx(F,{sixteenPx:!0}),A.jsx(re,{variant:"primary",size:"small",disabled:l||!q.formState.isDirty||q.formState.isSubmitting,loading:q.formState.isSubmitting,children:A.jsx(x,{id:"FeilutbetalingInfoPanel.Confirm"})})]})]})},lm={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},om=Fr(lm),dm=({feilutbetalingFakta:a,feilutbetalingAarsak:o,fagsakYtelseTypeKode:d,isAksjonspunktOpen:l,isReadOnly:g,kodeverkSamlingFpsak:m,kodeverkSamlingFpTilbake:v,alleMerknaderFraBeslutter:k,submitCallback:b,formData:j,setFormData:y})=>{const p=o.find(c=>c.ytelseType===d);if(!p)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${d}`);return A.jsx(wr,{value:om,children:A.jsx(im,{feilutbetalingFakta:a,feilutbetalingAarsak:p,alleMerknaderFraBeslutter:k,kodeverkSamlingFpTilbake:v,kodeverkSamlingFpsak:m,submitCallback:b,readOnly:g,hasOpenAksjonspunkter:l,formData:j,setFormData:y})})},um=[Mr.AVKLAR_FAKTA_FOR_FEILUTBETALING],gm=[Fe.FEILUTBETALING_FAKTA,Fe.FEILUTBETALING_AARSAK],ys=({behandling:a,valgtFaktaSteg:o,registrerFaktaPanel:d,tilbakekrevingKodeverk:l,fagsakYtelseTypeKode:g})=>z.jsx(bd,{behandling:a,valgtFaktaSteg:o,registrerFaktaPanel:d,panelEndepunkter:gm,aksjonspunktKoder:um,faktaPanelKode:wd.FEILUTBETALING,faktaPanelMenyTekst:ve().formatMessage({id:"TilbakekrevingFakta.FaktaFeilutbetaling"}),skalPanelVisesIMeny:()=>Ha.hasPath(Fe.FEILUTBETALING_FAKTA.name),renderPanel:m=>z.jsx(dm,{fagsakYtelseTypeKode:g,kodeverkSamlingFpTilbake:l,kodeverkSamlingFpsak:m.alleKodeverk,isAksjonspunktOpen:m.harApneAksjonspunkter,isReadOnly:m.readOnly,...m})});ys.__docgenInfo={description:"FeilutbetalingFaktaInitPanel",methods:[],displayName:"FeilutbetalingFaktaInitPanel",props:{valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<tilbakekrevingKodeverkTyper, KodeverkMedNavn[]>"},description:""},fagsakYtelseTypeKode:{required:!0,tsType:{name:"string"},description:""}}};const km=({behandling:a,fagsak:o,valgtProsessSteg:d,valgtFaktaSteg:l,oppdaterProsessStegOgFaktaPanelIUrl:g,opneSokeside:m,alleBehandlinger:v})=>{const{data:k}=Bd.useRestApi(Od.KODEVERK_FPTILBAKE),j=D.useMemo(()=>v.filter(c=>!c.behandlingHenlagt).map(c=>{var h;return{uuid:c.uuid,type:c.type,status:c.status,opprettet:c.opprettet,avsluttet:c.avsluttet,resultatType:(h=c.behandlingsresultat)==null?void 0:h.type}}),[v]).some(c=>c.type===vd.REVURDERING&&c.status!==pd.AVSLUTTET),y=D.useCallback(c=>k?z.jsxs(z.Fragment,{children:[z.jsx(ys,{tilbakekrevingKodeverk:k,fagsakYtelseTypeKode:o.fagsakYtelseType,...c}),z.jsx(cd,{...c})]}):z.jsx(z.Fragment,{children:"placeholder"}),[k,o]),p=D.useCallback(c=>k?z.jsxs(z.Fragment,{children:[z.jsx(ts,{...c,relasjonsRolleType:o.relasjonsRolleType,tilbakekrevingKodeverk:k}),z.jsx(ds,{...c,relasjonsRolleType:o.relasjonsRolleType,tilbakekrevingKodeverk:k}),z.jsx(ms,{...c,harApenRevurdering:j,opneSokeside:m,tilbakekrevingKodeverk:k})]}):z.jsx(z.Fragment,{children:"placeholder"}),[k,j,o,m,g]);return k?z.jsxs(z.Fragment,{children:[z.jsx(Ed,{behandling:a,opneSokeside:m,kodeverk:k,erTilbakekreving:!0},a.versjon),z.jsx(Td,{behandling:a,valgtProsessSteg:d,valgtFaktaSteg:l,oppdaterProsessStegOgFaktaPanelIUrl:g,hentFaktaPaneler:y,hentProsessPaneler:p})]}):z.jsx(fd,{})};km.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPaneler",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};export{km as default};
