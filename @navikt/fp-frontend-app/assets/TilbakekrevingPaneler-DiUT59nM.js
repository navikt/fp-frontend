import{j as E}from"./jsx-runtime-DR9Q75dM.js";import{R as ue,r as c}from"./index-DRjF_FHU.js";import"./aktivitetStatus-02fOJoqz.js";import{Y as Tn,f as Fe,$ as Be,a as ge,H as _,b as ke,k as oe,P as en,g as nn,p as Or,h as Jn,j as tn,l as sn,m as Re,e as Se,n as ce,d as Wn,o as Zn,U as Xn,D as Qn,r as cn,q as X,s as Pn,t as er,K as nr,M as rn,F as bn,v as $,w as rr,u as Ce,L as Vr,x as ar,y as _r,i as Ir,E as Ye,z as wr,C as yn,G as Nr,I as Dr,J as Kr,N as Mr,O as Ur,B as Gr,Q as Lr}from"./AppIndex.stories-BN6N3G-1.js";import{U as qn,M as p,y as j,c as xn,P as tr,d as sr,A as An,X as Sn,J as ir,e as Rn,x as an,f as M,g as Te,z as $r,S as Cr,F as Hr}from"./index.es-BrvA3BPf.js";import{F as zr,V as Yr}from"./VergeFaktaInitPanel-CuhHHvp-.js";import{B as Jr}from"./BehandlingContainer-BaavCYHo.js";import{t as ln,P as on,f as Le,H as me,B as x,a as G,b as U,V as Wr,d as F,c as I,L as z,g as lr,h as or,R as C,i as Z,G as je,M as de,A as dr,D as J,C as ur,E as Zr,j as Xr,x as Qr}from"./VStack-DCXEXqmr.js";import{H as ea,m as le,S as Ge,T as xe,a as gr,b as kr,h as Ae,c as mr,I as re}from"./index.es-Cr4FmV27.js";import{S as vr,a as pr,b as na}from"./index.es-DdDuY1NQ.js";import{S as br}from"./FigureCombination-BURYtAvj.js";import{V as ie}from"./BehandlingHenlagtPanel-CWohSVP_.js";import{P as Fn}from"./ProsessDefaultInitPanel-BvrZPRbH.js";import{F as ra}from"./FatterVedtakStatusModal-DdknjLJ1.js";import"./bind-Bji6QwHW.js";import"./index-rX-Bn4lm.js";import"./iframe-84ABTEQL.js";import"../sb-preview/runtime.js";import"./SettPaVentReadOnlyModal-DRqvKra7.js";import"./behandlingResultatType-DHbqkXMl.js";import"./nb_NO-DvsgJ24X.js";var Qe=(e=>(e.INGEN_TILBAKEBETALING="INGEN_TILBAKEBETALING",e.DELVIS_TILBAKEBETALING="DELVIS_TILBAKEBETALING",e.FULL_TILBAKEBETALING="FULL_TILBAKEBETALING",e))(Qe||{}),dn=(e=>(e.VURDER_FORELDELSE="5003",e))(dn||{}),yr={exports:{}},we={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En;function aa(){if(En)return we;En=1;var e=ue,r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(g,m,y){var u,l={},v=null,d=null;y!==void 0&&(v=""+y),m.key!==void 0&&(v=""+m.key),m.ref!==void 0&&(d=m.ref);for(u in m)t.call(m,u)&&!o.hasOwnProperty(u)&&(l[u]=m[u]);if(g&&g.defaultProps)for(u in m=g.defaultProps,m)l[u]===void 0&&(l[u]=m[u]);return{$$typeof:r,type:g,key:v,ref:d,props:l,_owner:s.current}}return we.Fragment=a,we.jsx=i,we.jsxs=i,we}yr.exports=aa();var k=yr.exports;const ta=Se(3),sa=ce(1500),ia=e=>e!==le.UDEFINERT?e:void 0,la=e=>e.foreldet?e.foreldet:ia(e.foreldelseVurderingType),oa=e=>({...e,foreldet:la(e)}),da=({skjulPeriode:e,readOnly:r,periode:a,oppdaterPeriode:t,kodeverkSamlingFpTilbake:s})=>{const o=G(),i=Fe({defaultValues:oa(a)}),g=i.watch("foreldet"),m=g&&g===le.FORELDET,y=g&&g===le.TILLEGGSFRIST,u=s[Ge.FORELDELSE_VURDERING].filter(l=>l.kode!==le.IKKE_VURDERT);return k.jsxs(Be,{formMethods:i,onSubmit:l=>t(l),children:[k.jsx(j,{twentyPx:!0}),k.jsx(ge,{name:"begrunnelse",label:o.formatMessage({id:"ForeldelsePeriodeForm.Vurdering"}),validate:[_,ta,sa,ke],maxLength:1500,readOnly:r}),k.jsx(j,{twentyPx:!0}),k.jsxs(U,{gap:"10",children:[k.jsx(oe,{name:"foreldet",label:k.jsx(p,{id:"ForeldelsePeriodeForm.RadioGroup.Foreldet"}),validate:[_],radios:u.map(l=>({label:l.navn,value:l.kode})),isReadOnly:r}),k.jsxs(Wr,{gap:"5",children:[(m||y)&&k.jsx(en,{name:"foreldelsesfrist",label:o.formatMessage({id:"ForeldelsePeriodeForm.Foreldelsesfrist"}),validate:[_,nn],isReadOnly:r}),y&&k.jsx(en,{name:"oppdagelsesDato",label:o.formatMessage({id:"ForeldelsePeriodeForm.OppdagelsesDato"}),validate:[_,nn,Or],isReadOnly:r,fromDate:F("1970-01-01").toDate(),toDate:F().toDate()})]})]}),k.jsx(j,{twentyPx:!0}),k.jsxs(U,{gap:"4",children:[k.jsx(I,{size:"small",variant:"primary",disabled:!i.formState.isDirty||i.formState.isSubmitting||r,loading:i.formState.isSubmitting,children:k.jsx(p,{id:"ForeldelsePeriodeForm.Oppdater"})}),k.jsx(I,{size:"small",variant:"secondary",onClick:e,type:"button",children:k.jsx(p,{id:"ForeldelsePeriodeForm.Avbryt"})})]})]})},ua="_margin_1wl4t_1",Je={margin:ua},ga=e=>{const r=e.isGodkjent?"success":"danger";return e.isAksjonspunktOpen?"warning":r},ka=(e=[])=>e.map(r=>({id:r.id,fom:r.fom,tom:r.tom,status:ga(r)})),ma=e=>e===Ae.MOR||e===Ae.MEDMOR?k.jsx(vr,{width:20,height:20,color:"var(--a-red-200)"}):e===Ae.FAR?k.jsx(pr,{width:20,height:20,color:"var(--a-blue-600)"}):k.jsx(br,{width:20,height:20}),va={danger:k.jsx(Wn,{}),success:k.jsx(Zn,{}),warning:k.jsx(mr,{})},pa=({perioder:e,setPeriode:r,valgtPeriode:a,relasjonsRolleType:t,relasjonsRolleTypeKodeverk:s})=>{var o;const i=G(),g=c.useMemo(()=>ka(e),[e]),m=c.useCallback(q=>{const P=e.find(D=>D.id===q);P&&r(P)},[e,r]),y=F(g[0].fom),u=F(g[g.length-1].tom),[l,v]=c.useState(y),[d,A]=c.useState(u),f=c.useCallback(()=>{l.subtract(1,"month").isBefore(y)||(v(l.subtract(1,"month")),A(d.subtract(1,"month")))},[l,d,y]),T=c.useCallback(()=>{d.add(1,"month").isAfter(u)||(v(l.add(1,"month")),A(d.add(1,"month")))},[l,d,u]),S=c.useCallback(()=>{l.add(3,"month").isAfter(d)||(v(l.add(1,"month")),A(d.subtract(1,"month")))},[l,d]),V=c.useCallback(()=>{d.add(1,"month").diff(l.subtract(1,"month"),"months")<36&&(v(l.subtract(1,"month")),A(d.add(1,"month")))},[l,d]);return k.jsxs(k.Fragment,{children:[k.jsx(j,{fourtyPx:!0}),k.jsx(xe,{startDate:l.toDate(),endDate:d.add(1,"days").toDate(),children:k.jsx(xe.Row,{label:((o=s.find(q=>q.kode===t))==null?void 0:o.navn)||"-",icon:ma(t),children:g.map(q=>k.jsx(xe.Period,{start:F(q.fom).toDate(),end:F(q.tom).toDate(),status:q.status,onSelectPeriod:()=>m(q.id),isActive:(a==null?void 0:a.id)===q.id,icon:va[q.status],"aria-controls":"panel-tilbakekreving-foreldelse",id:q.id.toString()},q.id))})}),k.jsx(j,{twentyPx:!0}),k.jsxs(sr,{children:[k.jsx(I,{className:Je.margin,size:"small",icon:k.jsx(Jn,{"aria-hidden":!0}),onClick:S,variant:"primary-neutral",type:"button",title:i.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),k.jsx(I,{className:Je.margin,size:"small",icon:k.jsx(gr,{"aria-hidden":!0}),onClick:V,variant:"primary-neutral",type:"button",title:i.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),k.jsx(I,{className:Je.margin,size:"small",icon:k.jsx(tn,{"aria-hidden":!0}),onClick:f,variant:"primary-neutral",type:"button",title:i.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),k.jsx(I,{className:Je.margin,size:"small",icon:k.jsx(sn,{"aria-hidden":!0}),onClick:T,variant:"primary-neutral",type:"button",title:i.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})},ba="_button_8q57x_1",ya="_cancelButton_8q57x_5",On={button:ba,cancelButton:ya},fa=(e,r)=>a=>a&&(Xn(a)(F(e.tom.toString()).subtract(1,"day"))||Qn(a)(e.fom))?r.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,ha=(e,r)=>{const a=F(e.forstePeriodeTomDato).add(1,"days"),t={fom:r.fom,tom:e.forstePeriodeTomDato},s={fom:a.format(dr),tom:r.tom};return{forstePeriode:t,andrePeriode:s}},ja=({periodeData:e,showModal:r,cancelEvent:a,finnesBelopMed0Verdi:t,splitPeriod:s})=>{const o=G(),i=Fe();return k.jsx(Be,{formMethods:i,onSubmit:g=>s(ha(g,e)),children:k.jsxs(de,{width:"medium",open:r,"aria-label":o.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:a,children:[k.jsx(de.Header,{children:k.jsx(me,{size:"small",children:k.jsx(p,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),k.jsxs(de.Body,{children:[k.jsx(z,{size:"small",children:k.jsx(p,{id:"DelOppPeriodeModalImpl.Periode"})}),k.jsx(x,{size:"small",children:`${F(e.fom.toString()).format(C)} - ${F(e.tom.toString()).format(C)}`}),k.jsx(j,{sixteenPx:!0}),k.jsx(en,{name:"forstePeriodeTomDato",label:k.jsx(p,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[_,nn,fa(e,o)],fromDate:F(e.fom).toDate(),toDate:F(e.tom).toDate()}),t&&k.jsx(An,{variant:"error",children:k.jsx(p,{id:"DelOppPeriodeModalImpl.BelopEr0"})}),k.jsx(j,{sixteenPx:!0})]}),k.jsxs(de.Footer,{children:[k.jsx(I,{size:"small",variant:"primary",className:On.button,disabled:!i.formState.isDirty,children:k.jsx(p,{id:"DelOppPeriodeModalImpl.Ok"})}),k.jsx(I,{size:"small",variant:"secondary",onClick:a,className:On.cancelButton,type:"button",children:k.jsx(p,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})},Ta="_timeLineButton_wnej3_1",ca="_splitPeriodImage_wnej3_24",Pa="_splitPeriodPosition_wnej3_30",qa="_leftMargin_wnej3_33",xa="_margin_wnej3_37",Aa="_fix_wnej3_41",kn={timeLineButton:Ta,splitPeriodImage:ca,splitPeriodPosition:Pa,leftMargin:qa,margin:xa,fix:Aa},Ra=!1,Fa=({valgtPeriode:e,beregnBelop:r,behandlingUuid:a,oppdaterSplittedePerioder:t,setNestePeriode:s,setForrigePeriode:o,readOnly:i,lukkPeriode:g})=>{const m=G(),[y,u]=c.useState(!1),[l,v]=c.useState(!1),d=T=>{u(!0),T.preventDefault()},A=()=>{u(!1)},f=T=>{v(!1);const S={belop:e.feilutbetaling,fom:T.forstePeriode.fom,tom:T.forstePeriode.tom,begrunnelse:e.begrunnelse?e.begrunnelse:" "},V={belop:e.feilutbetaling,fom:T.andrePeriode.fom,tom:T.andrePeriode.tom,begrunnelse:e.begrunnelse?e.begrunnelse:" "};r({behandlingUuid:a,perioder:[S,V]}).then(q=>{const{perioder:P}=q;if(P.some(D=>D.belop===0))v(!0);else{const D={fom:S.fom,tom:S.tom,feilutbetaling:P[0].belop},ae={fom:V.fom,tom:V.tom,feilutbetaling:P[1].belop};A(),t([D,ae])}})};return k.jsxs(U,{children:[k.jsxs(z,{size:"small",children:[k.jsx(p,{id:"PeriodeController.Detaljer"}),Ra]}),!i&&k.jsxs(k.Fragment,{children:[k.jsx(Re,{}),k.jsx(I,{className:kn.margin,size:"xsmall",icon:k.jsx(kr,{"aria-hidden":!0}),onClick:d,variant:"tertiary-neutral",type:"button",title:m.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:k.jsx(p,{id:"PeriodeController.DelOppPerioden"})})]}),y&&k.jsx(ja,{cancelEvent:A,showModal:y,periodeData:e,splitPeriod:f,finnesBelopMed0Verdi:l}),k.jsx(Re,{}),k.jsx(I,{className:kn.margin,size:"xsmall",icon:k.jsx(tn,{"aria-hidden":!0}),onClick:o,variant:"secondary-neutral",type:"button",title:m.formatMessage({id:"PeriodeController.prevPeriod"}),children:k.jsx(p,{id:"PeriodeController.prevPeriodShort"})}),k.jsx(I,{className:kn.margin,size:"xsmall",icon:k.jsx(sn,{"aria-hidden":!0}),onClick:s,variant:"secondary-neutral",type:"button",title:m.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:k.jsx(p,{id:"PeriodeController.nextPeriodShort"})}),k.jsx(I,{size:"xsmall",icon:k.jsx(lr,{"aria-hidden":!0}),onClick:g,variant:"tertiary-neutral",type:"button",title:m.formatMessage({id:"PeriodeController.LukkPeriode"})})]})},Ba="_container_wdk2x_1",Sa="_fadein_wdk2x_1",Ea="_space_wdk2x_11",Oa={container:Ba,fadein:Sa,space:Ea},Va="_infoSummary_99bx4_1",_a="_positivNumber_99bx4_8",Ia="_redNumber_99bx4_12",wa="_resultName_99bx4_17",We={infoSummary:Va,positivNumber:_a,redNumber:Ia,resultName:wa},Na=({fom:e,tom:r,feilutbetaling:a})=>{const t=or(e,r);return k.jsxs("div",{className:We.infoSummary,children:[k.jsxs(U,{children:[k.jsx(z,{size:"small",children:`${F(e).format(C)} - ${F(r).format(C)}`}),k.jsx(Re,{}),k.jsx(x,{size:"small",children:t.formattedString})]}),k.jsx(j,{sixteenPx:!0}),k.jsx(U,{gap:"4",children:k.jsxs(x,{size:"small",className:We.resultName,children:[k.jsx(p,{id:"PeriodeInformasjon.Feilutbetaling"}),":",k.jsx("span",{className:a?We.redNumber:We.positivNumber,children:Z(a)})]})})]})},Vn=(e,r)=>F(e.fom).diff(F(r.fom)),Da=()=>F().subtract(30,"months").format(C),Ka=e=>e?[k.jsx(p,{id:`ForeldelseForm.AksjonspunktHelpText.${e.definisjon}`,values:{dato:Da()}},"vurderForeldelse")]:[],Ue=e=>(!e.foreldelseVurderingType||e.foreldelseVurderingType===le.UDEFINERT)&&(!e.begrunnelse||!!e.erSplittet),Ma=(e=[])=>e.map((r,a)=>({fom:r.fom,tom:r.tom,isAksjonspunktOpen:Ue(r),isGodkjent:le.FORELDET!==r.foreldet&&le.UDEFINERT!==r.foreldet,id:a})),Ua=e=>({foreldelsePerioder:e.map(r=>({fraDato:r.fom,tilDato:r.tom,begrunnelse:r.begrunnelse,foreldelseVurderingType:r.foreldet,foreldelsesfrist:r.foreldelsesfrist,oppdagelsesDato:r.oppdagelsesDato})),kode:dn.VURDER_FORELDELSE}),Ga=(e,r)=>e.fom<r.fom?-1:e.fom>r.fom?1:0,La=e=>[...e].sort(Ga).map(r=>({...r,feilutbetaling:r.belop,foreldet:r.foreldelseVurderingType===le.UDEFINERT?void 0:r.foreldelseVurderingType,begrunnelse:je(r.begrunnelse)})),$a=({submitCallback:e,relasjonsRolleType:r,relasjonsRolleTypeKodeverk:a,aksjonspunkt:t,alleMerknaderFraBeslutter:s,perioderForeldelse:o,readOnly:i,kodeverkSamlingFpTilbake:g,beregnBelop:m,behandlingUuid:y,formData:u,setFormData:l})=>{const v=c.useMemo(()=>La(o.perioder),[o.perioder]),[d,A]=c.useState(u||v),[f,T]=c.useState(d==null?void 0:d.find(Ue)),[S,V]=c.useState(!1),[q,P]=c.useState(!!u),D=R=>{const w=R?d.find(O=>O.fom===R.fom&&O.tom===R.tom):void 0;T(w)},ae=c.useCallback(()=>{const R=d.findIndex(O=>O.fom===(f==null?void 0:f.fom)&&O.tom===(f==null?void 0:f.tom)),w=R===d.length-1?R:R+1;D(d[w])},[d,f]),Ee=c.useCallback(()=>{const R=d.findIndex(O=>O.fom===(f==null?void 0:f.fom)&&O.tom===(f==null?void 0:f.tom)),w=R===0?R:R-1;D(d[w])},[d,f]),Q=c.useCallback(()=>{D(void 0)},[f,d]),Oe=c.useCallback(R=>{const w=Le(R,"erSplittet"),O=d.filter(L=>L.fom!==w.fom&&L.tom!==w.tom).concat(w).sort(Vn);A(O),l(O),P(!0),Q();const Y=O.find(Ue);Y&&D(Y)},[d,Q,Ue]),ve=c.useCallback(R=>{const w=d.find(L=>L.fom===(f==null?void 0:f.fom)&&L.tom===(f==null?void 0:f.tom));if(w===void 0)throw new TypeError(`Periode skal alltid finnes. Fom: ${f==null?void 0:f.fom} Tom: ${f==null?void 0:f.tom}`);const O=R.map(L=>({...w,...L,erSplittet:!0})),Y=d.filter(L=>L.fom!==(f==null?void 0:f.fom)&&L.tom!==(f==null?void 0:f.tom)).concat(O).sort(Vn);A(Y),l(Y),P(!0),Q(),D(O[0])},[d,f,Q,Ue]),Pe=c.useCallback(()=>{V(!0),e(Ua(d))},[d]),Ve=s[dn.VURDER_FORELDELSE],pe=Ma(d),_e=t&&t.status===ea.OPPRETTET,te=pe.every(R=>!R.isAksjonspunktOpen),B=f?pe.find(R=>R.fom===f.fom&&R.tom===f.tom):void 0;return k.jsxs(qn,{merknaderFraBeslutter:Ve,withoutBorder:!0,children:[k.jsx(me,{size:"small",children:k.jsx(p,{id:"ForeldelseForm.Foreldelse"})}),k.jsx(j,{twentyPx:!0}),!t&&k.jsxs(k.Fragment,{children:[k.jsx(x,{children:k.jsx(p,{id:"ForeldelseForm.Foreldelsesloven"})}),k.jsx(j,{eightPx:!0}),k.jsx(x,{children:k.jsx(p,{id:"ForeldelseForm.AutomatiskVurdert"})}),k.jsx(j,{sixteenPx:!0})]}),d&&t&&k.jsxs(k.Fragment,{children:[k.jsx(xn,{isAksjonspunktOpen:_e,children:Ka(t)}),k.jsx(j,{twentyPx:!0}),k.jsx(pa,{perioder:pe,valgtPeriode:B,setPeriode:D,relasjonsRolleType:r,relasjonsRolleTypeKodeverk:a}),f&&k.jsxs("div",{id:"panel-tilbakekreving-foreldelse","aria-controls":B==null?void 0:B.id.toString(),children:[k.jsx("div",{className:Oa.space}),k.jsxs(tr,{border:!0,children:[k.jsx(Fa,{setNestePeriode:ae,setForrigePeriode:Ee,valgtPeriode:f,readOnly:i,oppdaterSplittedePerioder:ve,behandlingUuid:y,beregnBelop:m,lukkPeriode:Q}),k.jsx(j,{sixteenPx:!0}),k.jsx(Na,{feilutbetaling:f.feilutbetaling,fom:f.fom,tom:f.tom}),k.jsx(da,{periode:f,oppdaterPeriode:Oe,skjulPeriode:Q,readOnly:i,kodeverkSamlingFpTilbake:g},f.fom)]})]}),k.jsx(j,{twentyPx:!0}),k.jsx(Tn,{isReadOnly:i,isDirty:q,isSubmittable:!f&&te,onClick:Pe,isSubmitting:S})]})]})},Ca={"ForeldelsePeriodeForm.Vurdering":"Vurdering","ForeldelsePeriodeForm.RadioGroup.Foreldet":"Vurder om perioden er foreldet","ForeldelsePeriodeForm.Oppdater":"Oppdater","ForeldelsePeriodeForm.Avbryt":"Avbryt","ForeldelsePeriodeForm.Foreldelsesfrist":"Foreldelsesfrist","ForeldelsePeriodeForm.OppdagelsesDato":"Dato for når feilutbetaling ble oppdaget","ForeldelseForm.Foreldelsesloven":"Foreldelsesloven §§ 2 og 3","ForeldelseForm.AutomatiskVurdert":"Automatisk vurdert","ForeldelseForm.AksjonspunktHelpText.5003":"Perioden før {dato} kan være foreldet. Del opp perioden ved behov og fastsett foreldelse","ForeldelseForm.Foreldelse":"Foreldelse","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","SubmitButton.ConfirmInformation":"Bekreft og fortsett","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},Ha=ln(Ca),za=({perioderForeldelse:e,relasjonsRolleType:r,beregnBelop:a,behandling:t,aksjonspunkter:s,isReadOnly:o,kodeverkSamlingFpTilbake:i,submitCallback:g,alleMerknaderFraBeslutter:m,formData:y,setFormData:u,relasjonsRolleTypeKodeverk:l})=>k.jsx(on,{value:Ha,children:k.jsx($a,{behandlingUuid:t.uuid,perioderForeldelse:e,submitCallback:g,readOnly:o,aksjonspunkt:s[0],relasjonsRolleType:r,relasjonsRolleTypeKodeverk:l,alleMerknaderFraBeslutter:m,kodeverkSamlingFpTilbake:i,beregnBelop:a,formData:y,setFormData:u})}),Ya=[dn.VURDER_FORELDELSE],Ja=[X.PERIODER_FORELDELSE],fr=({...e})=>{const r=G(),{startRequest:a}=cn.useRestApiRunner(X.BEREGNE_BELØP);return E.jsx(Fn,{...e,panelEndepunkter:Ja,aksjonspunktKoder:Ya,prosessPanelKode:Pn.FORELDELSE,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.Foreldelse"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:()=>er.hasPath(X.PERIODER_FORELDELSE.name)?ie.OPPFYLT:ie.IKKE_VURDERT,renderPanel:t=>E.jsx(za,{kodeverkSamlingFpTilbake:e.tilbakekrevingKodeverk,beregnBelop:a,relasjonsRolleType:e.relasjonsRolleType,relasjonsRolleTypeKodeverk:t.alleKodeverk[nr.RELASJONSROLLE_TYPE],...t})})};fr.__docgenInfo={description:"",methods:[],displayName:"ForeldelseProsessInitPanel",props:{relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"TilbakekrevingKodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var un=(e=>(e.VURDER_TILBAKEKREVING="5002",e))(un||{}),hr={exports:{}},Ne={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _n;function Wa(){if(_n)return Ne;_n=1;var e=ue,r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(g,m,y){var u,l={},v=null,d=null;y!==void 0&&(v=""+y),m.key!==void 0&&(v=""+m.key),m.ref!==void 0&&(d=m.ref);for(u in m)t.call(m,u)&&!o.hasOwnProperty(u)&&(l[u]=m[u]);if(g&&g.defaultProps)for(u in m=g.defaultProps,m)l[u]===void 0&&(l[u]=m[u]);return{$$typeof:r,type:g,key:v,ref:d,props:l,_owner:s.current}}return Ne.Fragment=a,Ne.jsx=i,Ne.jsxs=i,Ne}hr.exports=Wa();var n=hr.exports,jr=(e=>(e.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",e.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",e.STOERRELSE_BELOEP="STOERRELSE_BELOEP",e.TID_FRA_UTBETALING="TID_FRA_UTBETALING",e.ANNET="ANNET",e))(jr||{}),H=(e=>(e.FORSETT="FORSETT",e.GROVT_UAKTSOM="GROVT_UAKTSOM",e.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",e))(H||{});const Za=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var ne=(e=>(e.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",e.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",e.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",e.GOD_TRO="GOD_TRO",e))(ne||{});const Xa="_feilutbetalingTable_e3ydt_1",Qa={feilutbetalingTable:Xa},et=["TilbakekrevingAktivitetTabell.Aktivitet","TilbakekrevingAktivitetTabell.FeilutbetaltBelop"],nt=({ytelser:e})=>{if(e.length===0)return null;let r=0;return n.jsx(Rn,{headerTextCodes:et,noHover:!0,classNameTable:Qa.feilutbetalingTable,children:e.map(a=>(r+=1,n.jsxs(an,{children:[n.jsx(M,{children:n.jsx(x,{size:"small",children:a.aktivitet})}),n.jsx(M,{children:n.jsx(x,{size:"small",children:Z(a.belop)})})]},a.aktivitet+a.belop+r)))})},rt=()=>n.jsxs(U,{gap:"4",children:[n.jsx(ge,{name:"foreldetBegrunnelse",label:n.jsx(p,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),n.jsx(oe,{name:"periodenErForeldet",label:n.jsx(J,{children:n.jsx(p,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:n.jsx(p,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]}),at="_arrowbox_ych2z_1",tt="_tilbakekrevdBelopInput_ych2z_4",In={arrowbox:at,tilbakekrevdBelopInput:tt},st=rr(1),it=e=>{const r=e.toString().replace(/\s/g,""),a=parseInt(r,10);return Number.isNaN(a)?"":a},lt=(e,r)=>a=>{if(a>r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},He=({name:e,readOnly:r,erBelopetIBehold:a,feilutbetalingBelop:t})=>{const s=G();return n.jsxs(n.Fragment,{children:[n.jsx(oe,{name:`${e}.erBelopetIBehold`,label:n.jsx(p,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[_],radios:[{label:n.jsx(p,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:n.jsx(p,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0}),n.jsx(j,{eightPx:!0}),n.jsxs("div",{className:In.arrowbox,children:[a===!0&&n.jsx(Te,{alignOffset:25,children:n.jsx(bn,{name:`${e}.tilbakekrevdBelop`,label:n.jsx(p,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[_,st,lt(s,t)],readOnly:r,className:In.tilbakekrevdBelopInput,format:Z,parse:it})}),a===!1&&n.jsx(Te,{alignOffset:90,children:n.jsx(x,{size:"small",children:n.jsx(p,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};He.transformValues=(e,r)=>({"@type":"godTro",begrunnelse:r,erBelopetIBehold:e.erBelopetIBehold,tilbakekrevesBelop:e.erBelopetIBehold?ur(e.tilbakekrevdBelop):void 0});He.buildIntialValues=e=>({erBelopetIBehold:e.erBelopetIBehold,tilbakekrevdBelop:e.tilbakekrevesBelop});const ot=({name:e,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:a})=>{const t=Ce(),s=`${e}.skalDetTilleggesRenter`;return c.useEffect(()=>{t.getValues(s)===void 0&&t.setValue(s,!1)},[]),n.jsx("div",{children:n.jsxs(Te,{alignOffset:a?320:360,children:[a&&n.jsxs(n.Fragment,{children:[n.jsx(z,{size:"small",children:n.jsx(p,{id:"AktsomhetGradForsettFormPanel.Andel"})}),n.jsx(x,{size:"small",children:"100 %"}),n.jsx(j,{sixteenPx:!0}),n.jsx(oe,{name:`${e}.skalDetTilleggesRenter`,label:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[_],radios:[{label:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:r,parse:o=>o==="true",isHorizontal:!0})]}),!a&&n.jsxs(n.Fragment,{children:[n.jsx(J,{children:n.jsx(p,{id:"AktsomhetGradForsettFormPanel.Andel"})}),n.jsx(x,{size:"small",children:"100 %"}),n.jsx(j,{eightPx:!0}),n.jsx(x,{size:"small",children:n.jsx(p,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})},dt="_suffix_cawxu_1",ut="_suffixGrovText_cawxu_4",gt="_labelPadding_cawxu_8",kt="_inputFelt_cawxu_12",qe={suffix:dt,suffixGrovText:ut,labelPadding:gt,inputFelt:kt},wn=rr(0),mt=_r(99.99),vt=e=>{const r=e.toString().replace(/\s/g,""),a=parseInt(r,10);return Number.isNaN(a)?"":a},pt=(e,r)=>a=>{if(a>=r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},$e="Egendefinert",fn=["30","50","70",$e],bt=({name:e,harGrunnerTilReduksjon:r,readOnly:a,handletUaktsomhetGrad:t,harMerEnnEnYtelse:s,feilutbetalingBelop:o,andelSomTilbakekreves:i})=>{const g=G(),m=Ce(),y=`${e}.skalDetTilleggesRenter`;return c.useEffect(()=>{m.getValues(y)===void 0&&m.setValue(y,!1)},[]),n.jsxs(n.Fragment,{children:[n.jsx(j,{sixteenPx:!0}),n.jsx(oe,{name:`${e}.harGrunnerTilReduksjon`,label:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[_],radios:[{label:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:a,isTrueOrFalseSelection:!0,isHorizontal:!0}),n.jsx(j,{sixteenPx:!0}),r&&n.jsx(Te,{alignOffset:24,children:n.jsxs(U,{gap:"4",children:[!s&&i!==$e&&n.jsxs(n.Fragment,{children:[n.jsx(z,{size:"small",children:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),n.jsxs(U,{gap:"2",children:[n.jsx(rn,{name:`${e}.andelSomTilbakekreves`,label:"",validate:[_],selectValues:fn.map(u=>n.jsx("option",{value:u,children:u},u))}),n.jsx("div",{className:qe.suffix,children:"%"})]})]}),!s&&i===$e&&n.jsxs(n.Fragment,{children:[n.jsx(z,{size:"small",children:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),n.jsxs(U,{gap:"4",children:[n.jsx(bn,{className:qe.inputFelt,name:`${e}.andelSomTilbakekrevesManuell`,readOnly:a,validate:[_,wn,mt],normalizeOnBlur:u=>Number.isNaN(u)?u:parseFloat(u.toString()).toFixed(2),format:u=>u.toString().replace(".",","),parse:u=>u.toString().replace(",",".")}),n.jsx("div",{className:t===H.GROVT_UAKTSOM?qe.suffixGrovText:qe.suffix,children:"%"})]})]}),s&&n.jsx(bn,{name:`${e}.belopSomSkalTilbakekreves`,label:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[_,wn,pt(g,o)],readOnly:a,format:Z,parse:vt}),t===H.GROVT_UAKTSOM&&n.jsxs("div",{children:[n.jsx(J,{children:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),n.jsx(x,{size:"small",className:qe.labelPadding,children:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),r===!1&&n.jsxs(Te,{alignOffset:90,children:[n.jsx(J,{children:n.jsx(p,{id:s?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),n.jsx(x,{size:"small",className:qe.labelPadding,children:s?Z(o):"100%"}),n.jsx(j,{sixteenPx:!0}),t===H.GROVT_UAKTSOM&&n.jsx(oe,{name:y,label:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[_],radios:[{label:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:a,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})},yt=Se(3),ft=ce(1500),Nn=({name:e,harGrunnerTilReduksjon:r,readOnly:a,handletUaktsomhetGrad:t,erSerligGrunnAnnetValgt:s,sarligGrunnTyper:o,harMerEnnEnYtelse:i,feilutbetalingBelop:g,andelSomTilbakekreves:m})=>{const y=G(),{watch:u}=Ce(),l=!o.some(d=>!!u(`${e}.${d.kode}`)),v=Vr(e,l?y.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return n.jsxs("div",{children:[n.jsx(z,{size:"small",children:n.jsx(p,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),n.jsx(j,{eightPx:!0}),o.map(d=>n.jsxs(ue.Fragment,{children:[n.jsx(ar,{name:`${e}.${d.kode}`,label:d.navn,readOnly:a},d.kode),n.jsx(j,{eightPx:!0})]},d.kode)),s&&n.jsx(ge,{name:`${e}.annetBegrunnelse`,label:"",validate:[_,yt,ft,ke],maxLength:1500,readOnly:a}),v&&n.jsx(Zr,{children:v}),n.jsx(bt,{name:e,harGrunnerTilReduksjon:r,readOnly:a,handletUaktsomhetGrad:t,harMerEnnEnYtelse:i,feilutbetalingBelop:g,andelSomTilbakekreves:m})]})},ht="_explanationTextarea_1kabz_1",jt="_panelWidth_1kabz_5",Tr={explanationTextarea:ht,panelWidth:jt},Tt=Se(3),ct=ce(1500),Dn=(e,r,a)=>n.jsxs("div",{children:[n.jsx(z,{size:"small",children:n.jsx(p,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),n.jsx(j,{eightPx:!0}),n.jsx(ge,{name:`${e}.sarligGrunnerBegrunnelse`,label:a.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[_,Tt,ct,ke],maxLength:1500,readOnly:r,className:Tr.explanationTextarea,description:a.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})}),n.jsx(j,{twentyPx:!0})]}),Pt=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:a,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:s,harMerEnnEnYtelse:o,feilutbetalingBelop:i,erTotalBelopUnder4Rettsgebyr:g,andelSomTilbakekreves:m,erValgtResultatTypeForstoBurdeForstaatt:y,name:u})=>{const l=G(),v=y?180:200;return n.jsx(Te,{alignOffset:a===H.GROVT_UAKTSOM?v:20,children:n.jsxs("div",{className:Tr.panelWidth,children:[a===H.SIMPEL_UAKTSOM&&g&&n.jsxs(n.Fragment,{children:[n.jsx(oe,{name:`${u}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,label:n.jsx(p,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[_],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:r,radios:[{label:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:n.jsxs(n.Fragment,{children:[n.jsx(j,{eightPx:!0}),Dn(u,r,l),n.jsx(Nn,{name:u,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:s,harMerEnnEnYtelse:o,feilutbetalingBelop:i,readOnly:r,handletUaktsomhetGrad:a,andelSomTilbakekreves:m})]})},{label:n.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:n.jsxs(n.Fragment,{children:[n.jsx(j,{eightPx:!0}),n.jsx(Te,{alignOffset:20,children:n.jsx(p,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})]})}]}),n.jsx(j,{eightPx:!0})]}),(a!==H.SIMPEL_UAKTSOM||!g)&&n.jsxs(n.Fragment,{children:[Dn(u,r,l),n.jsx(Nn,{name:u,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:s,harMerEnnEnYtelse:o,feilutbetalingBelop:i,readOnly:r,handletUaktsomhetGrad:a,andelSomTilbakekreves:m})]})]})})},qt=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:a,erSerligGrunnAnnetValgt:t,erValgtResultatTypeForstoBurdeForstaatt:s,sarligGrunnTyper:o,harMerEnnEnYtelse:i,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:m,andelSomTilbakekreves:y,name:u})=>n.jsxs(n.Fragment,{children:[n.jsx(j,{eightPx:!0}),a===H.FORSETT&&n.jsx(ot,{name:u,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:s}),a!==H.FORSETT&&n.jsx(Pt,{name:u,harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:a,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:o,harMerEnnEnYtelse:i,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:m,andelSomTilbakekreves:y,erValgtResultatTypeForstoBurdeForstaatt:s})]}),xt=[H.GROVT_UAKTSOM,H.SIMPEL_UAKTSOM,H.FORSETT],At={[H.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[H.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[H.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},ze=({readOnly:e,resetFields:r,handletUaktsomhetGrad:a,harGrunnerTilReduksjon:t,erSerligGrunnAnnetValgt:s=!1,erValgtResultatTypeForstoBurdeForstaatt:o=!1,aktsomhetTyper:i,sarligGrunnTyper:g,antallYtelser:m,feilutbetalingBelop:y,erTotalBelopUnder4Rettsgebyr:u,andelSomTilbakekreves:l,name:v})=>n.jsxs(n.Fragment,{children:[n.jsx(j,{sixteenPx:!0}),n.jsx(oe,{name:`${v}.handletUaktsomhetGrad`,label:n.jsx(p,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[_],radios:i.map(d=>({label:o?n.jsx(p,{id:At[d.kode]}):d.navn,value:d.kode})),isReadOnly:e,onChange:r,isHorizontal:!0}),xt.some(d=>d===a)&&n.jsx(qt,{name:`${v}.${a}`,harGrunnerTilReduksjon:t,readOnly:e,handletUaktsomhetGrad:a,erSerligGrunnAnnetValgt:s,erValgtResultatTypeForstoBurdeForstaatt:o,sarligGrunnTyper:g,harMerEnnEnYtelse:m>1,feilutbetalingBelop:y,erTotalBelopUnder4Rettsgebyr:u,andelSomTilbakekreves:l})]}),Rt=(e,r)=>{const a=parseInt(e,10);return!r||Number.isNaN(a)?{}:{andelTilbakekreves:a}},Ft=(e,r)=>{const a=parseFloat(e);return!r||Number.isNaN(a)?{}:{andelTilbakekreves:a}},Bt=(e,r)=>{if(e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const a=r.reduce((o,i)=>e[i.kode]?o.concat(i.kode):o,[]),{harGrunnerTilReduksjon:t}=e,s=e.andelSomTilbakekreves===$e?Ft(e.andelSomTilbakekrevesManuell,t):Rt(e.andelSomTilbakekreves,t);return{harGrunnerTilReduksjon:t,ileggRenter:t?void 0:e.skalDetTilleggesRenter,sarligGrunner:a.length>0?a:void 0,tilbakekrevesBelop:e.harGrunnerTilReduksjon?ur(e.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:e.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...s}};ze.transformValues=(e,r,a)=>{const t=e[e.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:e.handletUaktsomhetGrad,begrunnelse:a,aktsomhetInfo:t?Bt(t,r):null}};const St=(e,r)=>({andelSomTilbakekreves:r===void 0||fn.includes(r)?r:$e,andelSomTilbakekrevesManuell:r&&fn.includes(r)?void 0:e.andelTilbakekreves,harGrunnerTilReduksjon:e.harGrunnerTilReduksjon,skalDetTilleggesRenter:e.ileggRenter,belopSomSkalTilbakekreves:e.tilbakekrevesBelop,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:je(e.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...e.sarligGrunner?e.sarligGrunner.reduce((a,t)=>({...a,[t.kode?t.kode:t]:!0}),{}):{}});ze.buildInitalValues=e=>{const{aktsomhet:r,aktsomhetInfo:a}=e,t=a&&a.andelTilbakekreves!==void 0?`${a.andelTilbakekreves}`:void 0,s=a?{[r.kode&&"kode"in r?r.kode:r]:St(a,t)}:{};return{handletUaktsomhetGrad:r&&r.kode&&"kode"in r?r.kode:r,...s}};const Et="_explanationTextarea_1udkt_1",Ot="_leftColumn_1udkt_5",Vt="_rightColumn_1udkt_9",_t="_selectWidth_1udkt_12",Ze={explanationTextarea:Et,leftColumn:Ot,rightColumn:Vt,selectWidth:_t},Kn=Se(3),Mn=ce(1500),It=({data:e,periode:r,skjulPeriode:a,readOnly:t,oppdaterPeriode:s,vilkarsVurdertePerioder:o,kodeverkSamlingFpTilbake:i,antallPerioderMedAksjonspunkt:g})=>{const m=G(),[y,u]=c.useState(!1),l=Fe({defaultValues:r}),v=l.watch("valgtVilkarResultatType"),d=l.watch(`${v}.handletUaktsomhetGrad`),A=l.watch(`${v}.${d}.harGrunnerTilReduksjon`),f=l.watch(`${v}.${d}.andelSomTilbakekreves`),T=l.watch(`${v}.${d}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),S=l.watch(`${v}.${d}.${jr.ANNET}`),V=l.watch(`${v}.erBelopetIBehold`),q=Sn(v),P=Sn(d),D=e.redusertBeloper,ae=i[Ge.SARLIG_GRUNN],Ee=i[Ge.VILKAR_RESULTAT],Q=Za.map(B=>i[Ge.AKTSOMHET].find(R=>R.kode===B)),Oe=(B,R)=>{const w=B.target.value.split("_"),O=R.find(se=>se.fom===w[0]&&se.tom===w[1]),Y=O==null?void 0:O.valgtVilkarResultatType,L=O&&Y?O[Y]:void 0,be=JSON.parse(JSON.stringify(L));if(Y!==ne.GOD_TRO){const{handletUaktsomhetGrad:se}=be;se!==H.FORSETT&&(r==null?void 0:r.harMerEnnEnYtelse)!==(O==null?void 0:O.harMerEnnEnYtelse)&&(be[se].andelSomTilbakekreves=null,be[se].andelSomTilbakekrevesManuell=null,be[se].belopSomSkalTilbakekreves=null)}l.setValue("valgtVilkarResultatType",Y,{shouldDirty:!0}),l.setValue("begrunnelse",O==null?void 0:O.begrunnelse,{shouldDirty:!0}),l.setValue("vurderingBegrunnelse",O==null?void 0:O.vurderingBegrunnelse,{shouldDirty:!0}),Y&&l.setValue(Y,be,{shouldDirty:!0}),B.preventDefault()},ve=()=>{u(!y),s(l.getValues())},Pe=B=>{g>1&&e.erTotalBelopUnder4Rettsgebyr&&T===!1?u(!y):s(B)},Ve=()=>{q&&l.resetField(q)},pe=()=>{P&&l.resetField(`${v}.${P}`)},_e=c.useCallback(B=>n.jsx("b",{children:B}),[]),te=o.filter(B=>!B.erForeldet&&B.valgtVilkarResultatType!=null);return n.jsxs(Be,{formMethods:l,onSubmit:Pe,children:[D&&D.map(B=>n.jsxs(ue.Fragment,{children:[n.jsx(x,{size:"small",children:n.jsx(p,{id:B.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:Z(B.belop),b:_e}})}),n.jsx(j,{eightPx:!0})]},B.belop)),n.jsx(nt,{ytelser:e.ytelser}),n.jsx(j,{twentyPx:!0}),!t&&!e.erForeldet&&te.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(rn,{name:"perioderForKopi",selectValues:te.map(B=>{const R=`${B.fom}_${B.tom}`,w=`${F(B.fom).format(C)} - ${F(B.tom).format(C)}`;return n.jsx("option",{value:R,children:w},R)}),onChange:B=>Oe(B,te),className:Ze.selectWidth,label:n.jsx(p,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),n.jsx(j,{twentyPx:!0})]}),n.jsxs(U,{gap:"4",wrap:!0,children:[n.jsxs("div",{className:Ze.leftColumn,children:[e.erForeldet&&n.jsx(rt,{}),!e.erForeldet&&n.jsxs(n.Fragment,{children:[n.jsx(me,{size:"small",children:n.jsx(p,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),n.jsx(j,{sixteenPx:!0}),n.jsx(ge,{name:"begrunnelse",label:m.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[_,Kn,Mn,ke],maxLength:1500,readOnly:t,className:Ze.explanationTextarea,description:m.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),n.jsx(j,{sixteenPx:!0}),n.jsx(oe,{name:"valgtVilkarResultatType",label:n.jsx(p,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[_],radios:Ee.map(B=>({label:B.navn,value:B.kode})),isReadOnly:t,onChange:Ve})]})]}),n.jsx("div",{className:Ze.rightColumn,children:v&&n.jsxs(n.Fragment,{children:[n.jsx(me,{size:"small",children:n.jsx(p,{id:v===ne.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),n.jsx(j,{sixteenPx:!0}),n.jsx(ge,{name:"vurderingBegrunnelse",label:m.formatMessage({id:v===ne.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[_,Kn,Mn,ke],maxLength:1500,readOnly:t}),n.jsx(j,{eightPx:!0}),v===ne.GOD_TRO&&n.jsx(He,{name:v,readOnly:t,erBelopetIBehold:V,feilutbetalingBelop:e.feilutbetaling}),v!==ne.GOD_TRO&&n.jsx(ze,{name:v,harGrunnerTilReduksjon:A,readOnly:t,handletUaktsomhetGrad:d,resetFields:pe,erSerligGrunnAnnetValgt:S,erValgtResultatTypeForstoBurdeForstaatt:v===ne.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:Q,sarligGrunnTyper:ae,antallYtelser:e.ytelser.length,feilutbetalingBelop:e.feilutbetaling,erTotalBelopUnder4Rettsgebyr:e.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:f},v)]})})]}),n.jsx(j,{twentyPx:!0}),n.jsxs(U,{gap:"4",children:[n.jsx(I,{size:"small",variant:"primary",disabled:!l.formState.isDirty||t,children:n.jsx(p,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),n.jsx(I,{size:"small",variant:"secondary",onClick:a,type:"button",children:n.jsx(p,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),y&&n.jsx(ir,{bodyText:m.formatMessage({id:"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"}),showModal:!0,submit:ve})]})},wt=(e,r)=>{const{vilkarResultat:a,begrunnelse:t,vilkarResultatInfo:s}=e,o=a&&a.kode?a.kode:a;let i;const g=e.erForeldet?e.erForeldet:e.foreldet;if(g){const l=r.perioder.find(v=>v.fom===e.fom&&v.tom===e.tom);i={erForeldet:g,periodenErForeldet:!0,foreldetBegrunnelse:l?je(l.begrunnelse):void 0}}else i={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const m={valgtVilkarResultatType:o,begrunnelse:je(t),harMerEnnEnYtelse:e.ytelser.length>1,...i},y=o===ne.GOD_TRO?He.buildIntialValues(s):{},u=o!==void 0&&o!==ne.GOD_TRO?ze.buildInitalValues(s):{};return{...m,vurderingBegrunnelse:s?je(s.begrunnelse):void 0,[m.valgtVilkarResultatType]:{...y,...u}}},Nt=(e,r)=>{const{valgtVilkarResultatType:a,begrunnelse:t,vurderingBegrunnelse:s}=e,o=e[a],i=a===ne.GOD_TRO?He.transformValues(o,s):{},g=a!==ne.GOD_TRO?ze.transformValues(o,r,s):{};return{begrunnelse:t,fom:e.fom,tom:e.tom,vilkarResultat:a,vilkarResultatInfo:{...i,...g}}},Dt="_container_wdk2x_1",Kt="_fadein_wdk2x_1",Mt="_space_wdk2x_11",Ut={container:Dt,fadein:Kt,space:Mt},Gt="_margin_1wl4t_1",Xe={margin:Gt},Lt={danger:n.jsx(Wn,{}),success:n.jsx(Zn,{}),warning:n.jsx(mr,{})},$t=(e,r)=>e.fom<r.fom?-1:e.fom>r.fom?1:0,Ct=e=>{const r=e.isGodkjent?"success":"danger";return e.isAksjonspunktOpen?"warning":r},Ht=(e=[])=>[...e].sort($t).map(r=>({...r,status:Ct(r)})),zt=e=>e===Ae.MOR||e===Ae.MEDMOR?n.jsx(vr,{width:20,height:20,color:"var(--a-red-200)"}):e===Ae.FAR?n.jsx(pr,{width:20,height:20,color:"var(--a-blue-600)"}):n.jsx(br,{width:20,height:20}),Yt=({perioder:e,valgtPeriode:r,setPeriode:a,relasjonsRolleType:t,relasjonsRolleTypeKodeverk:s})=>{var o;const i=G(),g=Ht(e),m=c.useCallback(q=>{const P=e.find(D=>D.id===q);P&&a(P)},[e,a]),y=F(g[0].fom),u=F(g[g.length-1].tom),[l,v]=c.useState(y),[d,A]=c.useState(u),f=c.useCallback(()=>{l.subtract(1,"month").isBefore(y)||(v(l.subtract(1,"month")),A(d.subtract(1,"month")))},[l,d,y]),T=c.useCallback(()=>{d.add(1,"month").isAfter(u)||(v(l.add(1,"month")),A(d.add(1,"month")))},[l,d,y]),S=c.useCallback(()=>{l.add(3,"month").isAfter(d)||(v(l.add(1,"month")),A(d.subtract(1,"month")))},[l,d]),V=c.useCallback(()=>{d.add(1,"month").diff(l.subtract(1,"month"),"months")<36&&(v(l.subtract(1,"month")),A(d.add(1,"month")))},[l,d]);return n.jsxs(n.Fragment,{children:[n.jsx(j,{fourtyPx:!0}),n.jsx(xe,{startDate:F(l).toDate(),endDate:F(d).add(1,"days").toDate(),children:n.jsx(xe.Row,{label:((o=s.find(q=>q.kode===t))==null?void 0:o.navn)||"-",icon:zt(t),children:g.map(q=>n.jsx(xe.Period,{start:F(q.fom).toDate(),end:F(q.tom).toDate(),status:q.status,icon:Lt[q.status],onSelectPeriod:()=>m(q.id),isActive:(r==null?void 0:r.id)===q.id,"aria-controls":"panel-tilbakekreving",id:q.id.toString()},q.id))})}),n.jsx(j,{twentyPx:!0}),n.jsxs(sr,{children:[n.jsx(I,{className:Xe.margin,size:"small",icon:n.jsx(Jn,{"aria-hidden":!0}),onClick:S,variant:"primary-neutral",type:"button",title:i.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),n.jsx(I,{className:Xe.margin,size:"small",icon:n.jsx(gr,{"aria-hidden":!0}),onClick:V,variant:"primary-neutral",type:"button",title:i.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),n.jsx(I,{className:Xe.margin,size:"small",icon:n.jsx(tn,{"aria-hidden":!0}),onClick:f,variant:"primary-neutral",type:"button",title:i.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),n.jsx(I,{className:Xe.margin,size:"small",icon:n.jsx(sn,{"aria-hidden":!0}),onClick:T,variant:"primary-neutral",type:"button",title:i.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})},Jt="_button_8q57x_1",Wt="_cancelButton_8q57x_5",Un={button:Jt,cancelButton:Wt},Zt=(e,r)=>a=>a&&(Xn(a)(F(e.tom.toString()).subtract(1,"day"))||Qn(a)(e.fom))?r.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,Xt=(e,r)=>{const a=F(e.forstePeriodeTomDato).add(1,"days"),t={fom:r.fom,tom:e.forstePeriodeTomDato},s={fom:a.format(dr),tom:r.tom};return{forstePeriode:t,andrePeriode:s}},Qt=({periodeData:e,showModal:r,cancelEvent:a,finnesBelopMed0Verdi:t,splitPeriod:s})=>{const o=G(),i=Fe();return n.jsx(Be,{formMethods:i,onSubmit:g=>s(Xt(g,e)),children:n.jsxs(de,{open:r,"aria-label":o.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:a,width:"medium",children:[n.jsx(de.Header,{children:n.jsx(me,{size:"small",children:n.jsx(p,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),n.jsxs(de.Body,{children:[n.jsx(z,{size:"small",children:n.jsx(p,{id:"DelOppPeriodeModalImpl.Periode"})}),n.jsx(x,{size:"small",children:`${F(e.fom.toString()).format(C)} - ${F(e.tom.toString()).format(C)}`}),n.jsx(j,{sixteenPx:!0}),n.jsx(en,{name:"forstePeriodeTomDato",label:n.jsx(p,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[_,nn,Zt(e,o)],fromDate:F(e.fom).toDate(),toDate:F(e.tom).toDate()}),t&&n.jsx(An,{variant:"error",children:n.jsx(p,{id:"DelOppPeriodeModalImpl.BelopEr0"})}),n.jsx(j,{sixteenPx:!0})]}),n.jsxs(de.Footer,{children:[n.jsx(I,{size:"small",variant:"primary",className:Un.button,disabled:!i.formState.isDirty,children:n.jsx(p,{id:"DelOppPeriodeModalImpl.Ok"})}),n.jsx(I,{size:"small",variant:"secondary",onClick:a,className:Un.cancelButton,type:"button",children:n.jsx(p,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})},es="_timeLineButton_wnej3_1",ns="_splitPeriodImage_wnej3_24",rs="_splitPeriodPosition_wnej3_30",as="_leftMargin_wnej3_33",ts="_margin_wnej3_37",ss="_fix_wnej3_41",mn={timeLineButton:es,splitPeriodImage:ns,splitPeriodPosition:rs,leftMargin:as,margin:ts,fix:ss},is=!1,ls=({setNestePeriode:e,setForrigePeriode:r,readOnly:a,lukkPeriode:t,periode:s,beregnBelop:o,behandlingUuid:i,oppdaterSplittedePerioder:g})=>{const m=G(),[y,u]=c.useState(!1),[l,v]=c.useState(!1),d=c.useCallback(T=>{u(!0),T.preventDefault()},[u]),A=c.useCallback(()=>{u(!1)},[]),f=T=>{v(!1);const S={belop:s.feilutbetaling,fom:T.forstePeriode.fom,tom:T.forstePeriode.tom,begrunnelse:s.begrunnelse?s.begrunnelse:" "},V={belop:s.feilutbetaling,fom:T.andrePeriode.fom,tom:T.andrePeriode.tom,begrunnelse:s.begrunnelse?s.begrunnelse:" "};o({behandlingUuid:i,perioder:[S,V]}).then(q=>{const{perioder:P}=q;if(P.some(D=>D.belop===0))v(!0);else{const D={fom:S.fom,tom:S.tom,feilutbetaling:P[0].belop},ae={fom:V.fom,tom:V.tom,feilutbetaling:P[1].belop};A(),g([D,ae])}})};return n.jsxs(U,{children:[n.jsxs(z,{size:"small",children:[n.jsx(p,{id:"PeriodeController.Detaljer"}),is]}),!a&&n.jsxs(n.Fragment,{children:[n.jsx(Re,{}),n.jsx(I,{className:mn.margin,size:"xsmall",icon:n.jsx(kr,{"aria-hidden":!0}),onClick:d,variant:"tertiary-neutral",type:"button",title:m.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:n.jsx(p,{id:"PeriodeController.DelOppPerioden"})})]}),y&&n.jsx(Qt,{cancelEvent:A,showModal:y,periodeData:s,splitPeriod:f,finnesBelopMed0Verdi:l}),n.jsx(Re,{}),n.jsx(I,{className:mn.margin,size:"xsmall",icon:n.jsx(tn,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:m.formatMessage({id:"PeriodeController.prevPeriod"}),children:n.jsx(p,{id:"PeriodeController.prevPeriodShort"})}),n.jsx(I,{className:mn.margin,size:"xsmall",icon:n.jsx(sn,{"aria-hidden":!0}),onClick:e,variant:"secondary-neutral",type:"button",title:m.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:n.jsx(p,{id:"PeriodeController.nextPeriodShort"})}),n.jsx(I,{size:"xsmall",icon:n.jsx(lr,{"aria-hidden":!0}),onClick:t,variant:"tertiary-neutral",type:"button",title:m.formatMessage({id:"PeriodeController.LukkPeriode"})})]})},os="_infoSummary_14r2l_1",ds="_positivNumber_14r2l_8",us="_redNumber_14r2l_12",gs="_resultName_14r2l_17",De={infoSummary:os,positivNumber:ds,redNumber:us,resultName:gs},ks=({fom:e,tom:r,feilutbetaling:a,arsakHendelseNavn:t})=>{const s=or(e,r);return n.jsxs("div",{className:De.infoSummary,children:[n.jsxs(U,{children:[n.jsx(z,{size:"small",children:`${F(e).format(C)} - ${F(r).format(C)}`}),n.jsx(Re,{}),n.jsx(x,{size:"small",children:s.formattedString})]}),n.jsx(j,{sixteenPx:!0}),n.jsxs(U,{gap:"4",children:[n.jsxs(x,{size:"small",className:De.resultName,children:[n.jsx(p,{id:"PeriodeInformasjon.Feilutbetaling"}),":",n.jsx("span",{className:a?De.redNumber:De.positivNumber,children:Z(a)})]}),t&&n.jsx(x,{size:"small",className:De.resultName,children:t})]})]})},hn=(e,r)=>$(e.fom).diff($(r.fom)),Gn=e=>!e.erForeldet&&(e.begrunnelse===void 0||e.erSplittet),ms=e=>{const r=e[e.valgtVilkarResultatType],a=r[r.handletUaktsomhetGrad];return r.tilbakekrevdBelop?{...e,[e.valgtVilkarResultatType]:{...Le(r,"tilbakekrevdBelop")}}:a&&a.belopSomSkalTilbakekreves?{...e,[e.valgtVilkarResultatType]:{...r,[r.handletUaktsomhetGrad]:{...Le(a,"belopSomSkalTilbakekreves")}}}:e},vs=(e,r=[])=>r.map((a,t)=>{const s=e.find(g=>g.fom===a.fom&&g.tom===a.tom),o=s&&s[s.valgtVilkarResultatType]?s[s.valgtVilkarResultatType].erBelopetIBehold:void 0,i=s?!!s.erSplittet:!1;return{fom:a.fom,tom:a.tom,isAksjonspunktOpen:!a.erForeldet&&((s==null?void 0:s.begrunnelse)===void 0||i),isGodkjent:!(a.erForeldet||o===!1),id:t}}),cr=(e,r)=>r.find(a=>!$(e.fom).isBefore($(a.fom))&&!$(e.tom).isAfter($(a.tom))),ps=(e,r)=>r.every(a=>!($(e.fom).isSameOrBefore($(a.tom))&&$(a.fom).isSameOrBefore($(e.tom)))),bs=(e,r,a)=>{const t=e.reduce((o,i)=>o+i.feilutbetaling,0)<a*4,s=r.vilkarsVurdertePerioder.map(o=>{const i=cr(o,e);return{...i,harMerEnnEnYtelse:i&&i.ytelser.length>1,...Le(o,"feilutbetalingBelop"),feilutbetaling:o.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:t}});return{perioder:e.filter(o=>ps(o,s)).map(o=>({...o,harMerEnnEnYtelse:o.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:t})).concat(s)}},ys=(e,r)=>{if(!(!e||!r))return r.map(a=>{const t=cr(a,e.perioder),s=t.foreldelseVurderingType?t.foreldelseVurderingType===le.FORELDET:t.foreldet;return{redusertBeloper:t.redusertBeloper,ytelser:t.ytelser,feilutbetaling:a.feilutbetaling?a.feilutbetaling:t.feilutbetaling,erTotalBelopUnder4Rettsgebyr:t.erTotalBelopUnder4Rettsgebyr,fom:a.fom,tom:a.tom,årsak:t.årsak,begrunnelse:t.begrunnelse,erForeldet:s||!1}})},fs=(e,r)=>e.perioder.map(a=>({...wt(a,r),fom:a.fom,tom:a.tom})).sort(hn),hs=(e,r)=>({kode:un.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:e.filter(a=>!a.erForeldet).map(a=>Nt(a,r))}),js=e=>{if(!e||e.reduce((a,t)=>t.erForeldet?a:a+1,0)<2)return;const r=e.reduce((a,t)=>{const{valgtVilkarResultatType:s}=t,o=t[s],{handletUaktsomhetGrad:i}=o,g=o[i];return g&&g.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?a+1:a},0);if(r>0&&r!==e.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},Ts=({perioderForeldelse:e,kodeverkSamlingFpTilbake:r,submitCallback:a,readOnly:t,alleMerknaderFraBeslutter:s,perioder:o,vilkarvurdering:i,rettsgebyr:g,relasjonsRolleType:m,relasjonsRolleTypeKodeverk:y,beregnBelop:u,behandlingUuid:l,formData:v,setFormData:d})=>{var A;const f=bs(o,i,g),[T,S]=c.useState(v||fs(f,e)),[V,q]=c.useState(!!v),[P,D]=c.useState(T==null?void 0:T.find(Gn)),[ae,Ee]=c.useState(!1),[Q,Oe]=c.useState();c.useEffect(()=>{Oe(js(T))},[T]);const ve=ys(f,T),Pe=t||(P==null?void 0:P.erForeldet)===!0,Ve=T.reduce((N,K)=>K.erForeldet?N:N+1,0),pe=s[un.VURDER_TILBAKEKREVING],_e=c.useCallback(()=>{Ee(!0),a(hs(T,r[Ge.SARLIG_GRUNN]))},[T]),te=vs(T,ve),B=te.some(N=>N.isAksjonspunktOpen),R=P?te.find(N=>N.fom===P.fom&&N.tom===P.tom):void 0,w=N=>{const K=N?T.find(ee=>ee.fom===N.fom&&ee.tom===N.tom):void 0;D(K)},O=()=>{const N=T.findIndex(K=>K.fom===(P==null?void 0:P.fom)&&K.tom===(P==null?void 0:P.tom));w(T[N+1])},Y=()=>{const N=T.findIndex(K=>K.fom===(P==null?void 0:P.fom)&&K.tom===(P==null?void 0:P.tom));w(T[N-1])},L=()=>{w(void 0)},be=N=>{const K=Le(N,"erSplittet"),ee=T.filter(fe=>fe.fom!==K.fom&&fe.tom!==K.tom).concat(K).sort(hn);S(ee),d(ee),q(!0),L();const Ie=ee.find(Gn);Ie&&w(Ie)},se=N=>{const K=T.find(ee=>ee.fom===(P==null?void 0:P.fom)&&ee.tom===(P==null?void 0:P.tom));if(K){const ee=N.map(fe=>({...ms(K),...fe,erSplittet:!0})),Ie=T.filter(fe=>fe.fom!==(P==null?void 0:P.fom)&&fe.tom!==(P==null?void 0:P.tom)).concat(ee).sort(hn);L(),q(!0),S(Ie),d(Ie),w(ee[0])}},ye=ve?ve.find(N=>N.fom===(P==null?void 0:P.fom)&&N.tom===(P==null?void 0:P.tom)):void 0;return n.jsxs(qn,{merknaderFraBeslutter:pe,withoutBorder:!0,children:[n.jsx(me,{size:"small",children:n.jsx(p,{id:"Behandlingspunkt.Tilbakekreving"})}),n.jsx(j,{twentyPx:!0}),n.jsx(xn,{isAksjonspunktOpen:B,children:[n.jsx(p,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"},"AksjonspunktHjelpetekst")]}),n.jsx(j,{twentyPx:!0}),T&&n.jsxs(n.Fragment,{children:[n.jsx(Yt,{perioder:te,valgtPeriode:R,setPeriode:w,relasjonsRolleType:m,relasjonsRolleTypeKodeverk:y}),P&&ye&&n.jsxs("div",{id:"panel-tilbakekreving","aria-controls":R==null?void 0:R.id.toString(),children:[n.jsx("div",{className:Ut.space}),n.jsxs(tr,{border:!0,children:[n.jsx(ls,{setNestePeriode:O,setForrigePeriode:Y,periode:ye,readOnly:t,oppdaterSplittedePerioder:se,behandlingUuid:l,beregnBelop:u,lukkPeriode:L}),n.jsx(j,{sixteenPx:!0}),n.jsx(ks,{feilutbetaling:ye.feilutbetaling,fom:ye.fom,tom:ye.tom,arsakHendelseNavn:(A=r[re.HENDELSE_TYPE].find(N=>{var K;return N.kode===((K=ye.årsak)==null?void 0:K.hendelseType)}))==null?void 0:A.navn}),n.jsx(j,{twentyPx:!0}),n.jsx(It,{periode:P,data:ye,antallPerioderMedAksjonspunkt:Ve,readOnly:Pe,skjulPeriode:L,oppdaterPeriode:be,kodeverkSamlingFpTilbake:r,vilkarsVurdertePerioder:T},R==null?void 0:R.id)]})]})]}),n.jsx(j,{twentyPx:!0}),Q&&n.jsxs(n.Fragment,{children:[n.jsx(An,{variant:"error",children:n.jsx(p,{id:Q})}),n.jsx(j,{twentyPx:!0})]}),n.jsx(Tn,{isReadOnly:Pe,isDirty:V,isSubmittable:!B&&!P&&!Q,onClick:_e,isSubmitting:ae})]})},cs={"Behandlingspunkt.Tilbakekreving":"Tilbakekreving","TilbakekrevingAktivitetTabell.Aktivitet":"Aktivitet","TilbakekrevingAktivitetTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingForm.AksjonspunktHjelpetekst":"Fastsett tilbakekreving etter §22-15. Del opp perioden ved behov for ulik vurdering","TilbakekrevingPeriodeForm.VilkarForTilbakekreving":"Vilkårene for tilbakekreving","TilbakekrevingPeriodeForm.oppfylt":"Er vilkårene for tilbakekreving oppfylt?","TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr":"Totalbeløpet er under 4 rettsgebyr. Dersom 6.ledd skal anvendes for å frafalle tilbakekrevingen, må denne anvendes likt på alle periodene.","TilbakekrevingPeriodeForm.Oppdater":"Oppdater","TilbakekrevingPeriodeForm.Avbryt":"Avbryt","TilbakekrevingPeriodeForm.Vurdering":"Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes","TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst":"Hvilke hendelser har ført til feilutbetalingen og vurder valg av hjemmel","TilbakekrevingPeriodeForm.MaVelgeSarligGrunn":"Du må velge minst en Særlig grunn","TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen":"Beløp kan ikke være større enn feilutbetalingen","TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen":"Beløp må være mindre enn feilutbetalingen","TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling":"Feilutbetalt beløp er redusert med <b>kr. {belop},-</b> på grunn av etterbetaling innen samme periode.","TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"Feilutbetalt beløp er redusert med <b>kr. {belop},-</b> på grunn av trekk.","TilbakekrevingPeriodeForm.Aktsomhet":"Aktsomhet","TilbakekrevingPeriodeForm.VurderingAktsomhet":"Vurder hvorfor mottaker burde forstått, må ha forstått eller forsto at utbetalingen skyldtes en feil","TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"Beløpet mottatt i god tro","TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"Begrunn hvorfor mottaker er i god tro","TilbakekrevingPeriodeForm.KopierVilkårsvurdering":"Kopier vilkårsvurdering fra","AktsomhetGradForsettFormPanel.Andel":"Andel som skal tilbakekreves","AktsomhetGradForsettFormPanel.Renter":"Det legges til 10 % renter","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves":"Angi andel som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves":"Andel som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter":"Skal det tillegges renter?","AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"Beløp som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves":"Angi beløp som skal tilbakekreves","AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon":"Skal særlige grunner gi reduksjon av beløpet?","AktsomhetReduksjonAvBelopFormPanel.Nei":"Nei","AktsomhetReduksjonAvBelopFormPanel.Ja":"Ja","AktsomhetFormPanel.HandletUaktsomhetGrad":"I hvilken grad burde mottaker forstått at utbetalingen skyldtes en feil","AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom":"Burde ha forstått","AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt":"Må ha forstått","AktsomhetFormPanel.AktsomhetTyperLabel.Forsett":"Forsto","AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt":"Når 6. ledd anvendes må alle perioder behandles likt","AktsomhetGradUaktsomhetFormPanel.Nei":"Nei","AktsomhetGradUaktsomhetFormPanel.Ja":"Ja","AktsomhetGradUaktsomhetFormPanel.Tilbakekrev":"Totalbeløpet er under 4 rettsgebyr (6. ledd). Skal det tilbakekreves?","AktsomhetGradUaktsomhetFormPanel.SærligGrunner":"Særlige grunner 4. ledd","AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner":"Vurder særlige grunner du har vektlagt for resultatet","AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst":"Begrunn om det foreligger/ ikke foreligger særlige grunner for reduksjon av beløpet som kreves tilbake. Kryss av hvilke særlige grunner som er vektlagt for resultatet","AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon":"Særlige grunner som er vektlagt (4.ledd)","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","BelopetMottattIGodTroFormPanel.Vurdering":"Vurdering","BelopetMottattIGodTroFormPanel.BelopetIBehold":"Er beløpet i behold?","BelopetMottattIGodTroFormPanel.Ja":"Ja","BelopetMottattIGodTroFormPanel.Nei":"Nei","BelopetMottattIGodTroFormPanel.AngiBelop":"Angi beløp som skal tilbakekreves","BelopetMottattIGodTroFormPanel.IngenTilbakekreving":"Ingen tilbakekreving","SubmitButton.ConfirmInformation":"Bekreft og fortsett","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},Ps=ln(cs),qs=({behandling:e,perioderForeldelse:r,vilkarvurderingsperioder:a,vilkarvurdering:t,beregnBelop:s,kodeverkSamlingFpTilbake:o,submitCallback:i,alleMerknaderFraBeslutter:g,isReadOnly:m,formData:y,setFormData:u,relasjonsRolleType:l,relasjonsRolleTypeKodeverk:v})=>n.jsx(on,{value:Ps,children:n.jsx(Ts,{behandlingUuid:e.uuid,perioderForeldelse:r,perioder:a.perioder,rettsgebyr:a.rettsgebyr,vilkarvurdering:t,submitCallback:i,readOnly:m,relasjonsRolleType:l,relasjonsRolleTypeKodeverk:v,alleMerknaderFraBeslutter:g,kodeverkSamlingFpTilbake:o,beregnBelop:s,formData:y,setFormData:u})}),xs=[un.VURDER_TILBAKEKREVING],As=[X.VILKARVURDERINGSPERIODER,X.VILKARVURDERING,X.PERIODER_FORELDELSE],Rs=e=>e.length>0?e.some(r=>Ir(r.status))?ie.IKKE_VURDERT:ie.OPPFYLT:ie.IKKE_VURDERT,Pr=({...e})=>{const r=G(),{startRequest:a}=cn.useRestApiRunner(X.BEREGNE_BELØP);return E.jsx(Fn,{...e,panelEndepunkter:As,aksjonspunktKoder:xs,prosessPanelKode:Pn.TILBAKEKREVING,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.Tilbakekreving"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:t=>Rs(t.aksjonspunkter),renderPanel:t=>E.jsx(qs,{kodeverkSamlingFpTilbake:e.tilbakekrevingKodeverk,beregnBelop:a,relasjonsRolleType:e.relasjonsRolleType,relasjonsRolleTypeKodeverk:t.alleKodeverk[nr.RELASJONSROLLE_TYPE],...t})})};Pr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessInitPanel",props:{relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"TilbakekrevingKodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Bn=(e=>(e.FORESLA_VEDTAK="5004",e))(Bn||{}),qr={exports:{}},Ke={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ln;function Fs(){if(Ln)return Ke;Ln=1;var e=ue,r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(g,m,y){var u,l={},v=null,d=null;y!==void 0&&(v=""+y),m.key!==void 0&&(v=""+m.key),m.ref!==void 0&&(d=m.ref);for(u in m)t.call(m,u)&&!o.hasOwnProperty(u)&&(l[u]=m[u]);if(g&&g.defaultProps)for(u in m=g.defaultProps,m)l[u]===void 0&&(l[u]=m[u]);return{$$typeof:r,type:g,key:v,ref:d,props:l,_owner:s.current}}return Ke.Fragment=a,Ke.jsx=i,Ke.jsxs=i,Ke}qr.exports=Fs();var b=qr.exports;const Bs="_table_gko8z_1",Ss={table:Bs},Es=["TilbakekrevingVedtakPeriodeTabell.Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop","TilbakekrevingVedtakPeriodeTabell.Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop","TilbakekrevingVedtakPeriodeTabell.Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves"],Os=({perioder:e,kodeverkSamlingFpTilbake:r})=>{const a=e.map(t=>{var s;return b.jsxs(an,{children:[b.jsx(M,{children:b.jsx(x,{size:"small",children:b.jsx($r,{dateStringFom:t.periode.fom,dateStringTom:t.periode.tom})})}),b.jsx(M,{children:b.jsx(x,{size:"small",children:Z(t.feilutbetaltBeløp)})}),b.jsx(M,{children:b.jsx(x,{size:"small",children:(s=r[re.AKTSOMHET].find(o=>o.kode===t.vurdering))==null?void 0:s.navn})}),b.jsx(M,{children:b.jsx(x,{size:"small",children:t.andelAvBeløp!==void 0&&t.andelAvBeløp!==null?`${t.andelAvBeløp}%`:""})}),b.jsx(M,{children:b.jsx(x,{size:"small",children:t.renterProsent?`${t.renterProsent}%`:""})}),b.jsx(M,{children:b.jsx(x,{size:"small",children:Z(t.tilbakekrevingBeløp)})}),b.jsx(M,{children:b.jsx(x,{size:"small",children:Z(t.tilbakekrevingBeløpEtterSkatt)})})]},t.periode.fom)}).concat(b.jsxs(an,{children:[b.jsx(M,{children:b.jsx(x,{size:"small",children:b.jsx(p,{id:"TilbakekrevingVedtakPeriodeTabell.Sum"})})}),b.jsx(M,{children:b.jsx(x,{size:"small",children:Z(e.reduce((t,s)=>t+s.feilutbetaltBeløp,0))})}),b.jsx(M,{}),b.jsx(M,{}),b.jsx(M,{}),b.jsx(M,{children:b.jsx(z,{size:"small",children:Z(e.reduce((t,s)=>t+s.tilbakekrevingBeløp,0))})}),b.jsx(M,{children:b.jsx(z,{size:"small",children:Z(e.reduce((t,s)=>t+s.tilbakekrevingBeløpEtterSkatt,0))})})]},"sum"));return b.jsx("div",{className:Ss.table,children:b.jsx(Rn,{noHover:!0,headerTextCodes:Es,children:a})})},W={OPPSUMMERING:"OPPSUMMERING",FAKTA:"FAKTA",FORELDELSE:"FORELDELSE",VILKAR:"VILKÅR",SARLIGEGRUNNER:"SÆRLIGEGRUNNER",SARLIGEGRUNNER_ANNET:"SÆRLIGEGRUNNER_ANNET"},Vs="_addCircleIcon_84ecs_1",_s="_imageText_84ecs_7",Is="_addPeriode_84ecs_12",vn={addCircleIcon:Vs,imageText:_s,addPeriode:Is},xr=Se(3),ws=ce(4e3),Ns=[xr,ke],Ds=[_,xr,ke],Ks=({type:e,readOnly:r,fritekstPakrevet:a,maximumLength:t})=>{const s=G(),{watch:o}=Ce(),i=o(e)===void 0,[g,m]=c.useState(i&&!a),y=a?Ds:Ns;return y.push(t?ce(t):ws),b.jsxs(b.Fragment,{children:[g&&!r&&b.jsxs(b.Fragment,{children:[b.jsx(j,{eightPx:!0}),b.jsxs("div",{onClick:u=>{u.preventDefault(),m(!1)},onKeyDown:u=>{u.preventDefault(),m(!1)},className:vn.addPeriode,role:"button",tabIndex:0,children:[b.jsx(wr,{className:vn.addCircleIcon,title:s.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})}),b.jsx(J,{size:"small",className:vn.imageText,children:b.jsx(p,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})})]})]}),!g&&b.jsxs(b.Fragment,{children:[b.jsx(j,{eightPx:!0}),b.jsx(ge,{name:e,label:s.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst"}),validate:y,maxLength:t||4e3,readOnly:r})]})]})},Ms="_container_aetpe_1",Us="_gulmarkering_aetpe_4",$n={container:Ms,gulmarkering:Us},jn=({intl:e,vedtaksbrevAvsnitt:r,readOnly:a,perioderSomIkkeHarUtfyltObligatoriskVerdi:t,fritekstOppsummeringPakrevdMenIkkeUtfylt:s=!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:o})=>b.jsxs("div",{className:$n.container,children:[b.jsx(j,{twentyPx:!0}),b.jsx(me,{size:"small",children:b.jsx(p,{id:"TilbakekrevingVedtak.Vedtaksbrev"})}),b.jsx(j,{eightPx:!0}),r.map(i=>{const g=i.underavsnittsliste,m=`${i.fom}_${i.tom}`,y=t.some(l=>l===m),u=i.avsnittstype===W.OPPSUMMERING&&s;return b.jsxs(ue.Fragment,{children:[b.jsxs(Ye,{"aria-label":"periode",defaultOpen:y||u,className:y||u?$n.gulmarkering:"",children:[b.jsx(Ye.Header,{children:b.jsx(Ye.Title,{size:"small",children:i.overskrift?i.overskrift:e.formatMessage({id:"TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift"})})}),b.jsx(Ye.Content,{children:g.map(l=>b.jsxs(ue.Fragment,{children:[l.overskrift&&b.jsx(z,{size:"small",children:l.overskrift}),l.brødtekst&&b.jsx(x,{size:"small",children:l.brødtekst}),l.fritekstTillatt&&b.jsxs(b.Fragment,{children:[b.jsx(j,{eightPx:!0}),b.jsx(Ks,{type:l.underavsnittstype?`${m}.${l.underavsnittstype}`:i.avsnittstype,readOnly:a,fritekstPakrevet:l.fritekstPåkrevet,maximumLength:o?1e4:void 0})]}),b.jsx(j,{eightPx:!0})]},(l.underavsnittstype||"")+l.overskrift+l.brødtekst))})]}),b.jsx(j,{eightPx:!0})]},i.avsnittstype+i.fom)})]});jn.buildInitialValues=e=>e.filter(r=>r.underavsnittsliste.some(a=>a.fritekst)).reduce((r,a)=>{const t=a.underavsnittsliste.filter(o=>o.fritekst).reduce((o,i)=>({...o,[i.underavsnittstype?i.underavsnittstype:a.avsnittstype]:je(i.fritekst)}),{}),s=a.fom?{[`${a.fom}_${a.tom}`]:t}:t;return{...r,...s}},{});const Gs="_buttonLink_sudxz_1",Ls="_padding_sudxz_8",$s="_infoTextContainer_sudxz_11",Cs="_infoTextIconColumn_sudxz_14",Hs="_infoTextIcon_sudxz_14",zs="_infotextColumn_sudxz_26",pn={buttonLink:Gs,padding:Ls,infoTextContainer:$s,infoTextIconColumn:Cs,infoTextIcon:Hs,infotextColumn:zs},Ar=e=>{const r=Xr(e,W.OPPSUMMERING);return{oppsummeringstekst:e[W.OPPSUMMERING],perioderMedTekst:Object.keys(r).map(a=>({fom:a.split("_")[0],tom:a.split("_")[1],faktaAvsnitt:r[a][W.FAKTA],foreldelseAvsnitt:r[a][W.FORELDELSE],vilkaarAvsnitt:r[a][W.VILKAR],saerligeGrunnerAvsnitt:r[a][W.SARLIGEGRUNNER],saerligeGrunnerAnnetAvsnitt:r[a][W.SARLIGEGRUNNER_ANNET]}))}},Ys=(e,r)=>e.some(a=>a.avsnittstype===W.OPPSUMMERING&&a.underavsnittsliste.some(t=>t.fritekstPåkrevet)&&!r[W.OPPSUMMERING]),Js=e=>({kode:Bn.FORESLA_VEDTAK,...Ar(e)}),Ws=(e,r)=>e.reduce((a,t)=>{const s=`${t.fom}_${t.tom}`,o=r[s];return t.underavsnittsliste.some(i=>i.fritekstPåkrevet&&i.underavsnittstype===W.FAKTA)&&(!o||!o[W.FAKTA])||t.underavsnittsliste.some(i=>i.fritekstPåkrevet&&i.underavsnittstype===W.SARLIGEGRUNNER_ANNET)&&(!o||!o[W.SARLIGEGRUNNER_ANNET])?a.concat(s):a},[]),Cn=(e,r,a)=>t=>{e({uuid:r,...Ar(a)}),t.preventDefault()},Zs=({submitCallback:e,readOnly:r,fetchPreviewVedtaksbrev:a,avsnittsliste:t,behandlingUuid:s,erRevurderingTilbakekrevingKlage:o,erRevurderingTilbakekrevingFeilBeløpBortfalt:i,formData:g,setFormData:m})=>{const y=t,u=c.useMemo(()=>g||jn.buildInitialValues(y),[g,y]),l=G(),v=Fe({defaultValues:u}),d=v.watch(),A=Ys(y,d),f=Ws(y,d),T=A||f.length>0;return b.jsxs(Be,{formMethods:v,onSubmit:S=>e(Js(S)),setDataOnUnmount:m,children:[b.jsx(j,{twentyPx:!0}),b.jsx(jn,{intl:l,vedtaksbrevAvsnitt:y,readOnly:r,perioderSomIkkeHarUtfyltObligatoriskVerdi:c.useMemo(()=>f,[]),fritekstOppsummeringPakrevdMenIkkeUtfylt:A,erRevurderingTilbakekrevingFeilBeløpBortfalt:i}),b.jsx(j,{twentyPx:!0}),b.jsxs(U,{gap:"10",children:[b.jsx(Tn,{text:l.formatMessage({id:"TilbakekrevingVedtakForm.TilGodkjenning"}),isReadOnly:r,isSubmittable:f.length===0&&!A,isSubmitting:v.formState.isSubmitting,isDirty:v.formState.isDirty,hasErrors:T}),f.length===0&&b.jsx("div",{className:pn.padding,children:b.jsx("a",{href:"",onClick:Cn(a,s,d),onKeyDown:S=>S.key==="Enter"?Cn(a,s,d)(S):null,className:na(pn.buttonLink,"lenke lenke--frittstaende"),children:b.jsx(p,{id:"TilbakekrevingVedtakForm.ForhandvisBrev"})})})]}),b.jsx(j,{sixteenPx:!0}),o&&b.jsxs(U,{children:[b.jsx(Cr,{className:pn.infoTextIcon}),b.jsx(p,{id:"TilbakekrevingVedtakForm.Infotekst.Klage"})]})]})},Xs=({submitCallback:e,readOnly:r,resultat:a,perioder:t,kodeverkSamlingFpTilbake:s,behandlingUuid:o,avsnittsliste:i,fetchPreviewVedtaksbrev:g,erRevurderingTilbakekrevingKlage:m,erRevurderingTilbakekrevingFeilBeløpBortfalt:y,formData:u,setFormData:l})=>{var v;return b.jsxs(b.Fragment,{children:[b.jsx(me,{size:"small",children:b.jsx(p,{id:"TilbakekrevingVedtak.Vedtak"})}),b.jsx(j,{twentyPx:!0}),b.jsx(J,{children:b.jsx(p,{id:"TilbakekrevingVedtak.Resultat"})}),b.jsx(x,{size:"small",children:(v=s[re.VEDTAK_RESULTAT_TYPE].find(d=>d.kode===a))==null?void 0:v.navn}),b.jsx(j,{sixteenPx:!0}),b.jsx(Os,{perioder:t,kodeverkSamlingFpTilbake:s}),b.jsx(j,{sixteenPx:!0}),b.jsx(Zs,{submitCallback:e,readOnly:r,behandlingUuid:o,avsnittsliste:i,fetchPreviewVedtaksbrev:g,erRevurderingTilbakekrevingKlage:m,erRevurderingTilbakekrevingFeilBeløpBortfalt:y,formData:u,setFormData:l})]})},Qs={"TilbakekrevingVedtak.Resultat":"Resultat","TilbakekrevingVedtak.Vedtaksbrev":"Vedtaksbrev","TilbakekrevingVedtak.Vedtak":"Vedtak","TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst":"Legg til utdypende tekst","TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst":"Utdypende tekst","TilbakekrevingVedtakPeriodeTabell.Periode":"Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingVedtakPeriodeTabell.Vurdering":"Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop":"Andel av beløp","TilbakekrevingVedtakPeriodeTabell.Renter":"Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt":"Beløp før skatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves":"Beløp etter skatt","TilbakekrevingVedtakPeriodeTabell.Sum":"Sum","TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift":"Lovhjemler og klagerett","TilbakekrevingVedtakForm.TilGodkjenning":"Til godkjenning","TilbakekrevingVedtakForm.ForhandvisBrev":"Forhåndsvis brev","TilbakekrevingVedtakForm.Infotekst.Klage":"Vedtaksbrev sendes ikke ut fra denne behandlingen, men må sendes av saksbehandler fra klagebehandlingen"},ei=ln(Qs),ni=({behandling:e,beregningsresultat:r,isReadOnly:a,submitCallback:t,kodeverkSamlingFpTilbake:s,formData:o,setFormData:i,vedtaksbrev:g,fetchPreviewVedtaksbrev:m,erRevurderingTilbakekrevingKlage:y,erRevurderingTilbakekrevingFeilBeløpBortfalt:u})=>b.jsx(on,{value:ei,children:b.jsx(Xs,{behandlingUuid:e.uuid,perioder:r.beregningResultatPerioder,resultat:r.vedtakResultatType,avsnittsliste:g.avsnittsliste,submitCallback:t,readOnly:a,kodeverkSamlingFpTilbake:s,fetchPreviewVedtaksbrev:m,erRevurderingTilbakekrevingKlage:y,erRevurderingTilbakekrevingFeilBeløpBortfalt:u,formData:o,setFormData:i})}),ri=[Bn.FORESLA_VEDTAK],ai=[X.VEDTAKSBREV,X.BEREGNINGSRESULTAT],ti=[yn.RE_KLAGE_KA,yn.RE_KLAGE_NFP],si=e=>!!e&&ti.some(r=>r===e),ii=e=>{if(!e)return ie.IKKE_VURDERT;const{type:r}=e;return r===Qe.INGEN_TILBAKEBETALING?ie.IKKE_OPPFYLT:r===Qe.DELVIS_TILBAKEBETALING||r===Qe.FULL_TILBAKEBETALING?ie.OPPFYLT:ie.IKKE_VURDERT},li=e=>()=>()=>{e(!0)},Rr=({tilbakekrevingKodeverk:e,opneSokeside:r,harApenRevurdering:a,...t})=>{const s=G(),[o,i]=c.useState(a),g=c.useCallback(()=>i(!1),[]),[m,y]=c.useState(!1),u=li(y),{startRequest:l}=cn.useRestApiRunner(X.PREVIEW_VEDTAKSBREV),v=c.useCallback(T=>l(T).then(Qr),[]),{behandling:d}=t,A=d.førsteÅrsak&&si(d.førsteÅrsak.behandlingArsakType),f=d.førsteÅrsak&&yn.RE_FEILUTBETALT_BELØP_REDUSERT===d.førsteÅrsak.behandlingArsakType;return E.jsxs(E.Fragment,{children:[E.jsx(ra,{visModal:m,lukkModal:()=>{y(!1),r()},tekst:s.formatMessage({id:"FatterTilbakekrevingVedtakStatusModal.Sendt"})}),o&&E.jsx(ir,{headerText:s.formatMessage({id:"BehandlingTilbakekrevingIndex.ApenRevurderingHeader"}),bodyText:s.formatMessage({id:"BehandlingTilbakekrevingIndex.ApenRevurdering"}),showModal:!0,submit:g}),E.jsx(Fn,{...t,panelEndepunkter:ai,aksjonspunktKoder:ri,prosessPanelKode:Pn.VEDTAK,prosessPanelMenyTekst:s.formatMessage({id:"Behandlingspunkt.Vedtak"}),skalPanelVisesIMeny:()=>!0,lagringSideEffekter:u,hentOverstyrtStatus:T=>ii(T.behandling.behandlingsresultat),renderPanel:T=>E.jsx(ni,{kodeverkSamlingFpTilbake:e,fetchPreviewVedtaksbrev:v,erRevurderingTilbakekrevingKlage:A||!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:f||!1,...T})})]})};Rr.__docgenInfo={description:"",methods:[],displayName:"VedtakTilbakekrevingProsessInitPanel",props:{tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"TilbakekrevingKodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"},description:""},opneSokeside:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},harApenRevurdering:{required:!0,tsType:{name:"boolean"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var gn=(e=>(e.AVKLAR_FAKTA_FOR_FEILUTBETALING="7003",e))(gn||{}),Fr={exports:{}},Me={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hn;function oi(){if(Hn)return Me;Hn=1;var e=ue,r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(g,m,y){var u,l={},v=null,d=null;y!==void 0&&(v=""+y),m.key!==void 0&&(v=""+m.key),m.ref!==void 0&&(d=m.ref);for(u in m)t.call(m,u)&&!o.hasOwnProperty(u)&&(l[u]=m[u]);if(g&&g.defaultProps)for(u in m=g.defaultProps,m)l[u]===void 0&&(l[u]=m[u]);return{$$typeof:r,type:g,key:v,ref:d,props:l,_owner:s.current}}return Me.Fragment=a,Me.jsx=i,Me.jsxs=i,Me}Fr.exports=oi();var h=Fr.exports;const di="_feilutbetalingTable_1bepb_1",ui="_redText_1bepb_8",zn={feilutbetalingTable:di,redText:ui},he="perioder",gi=["FeilutbetalingInfoPanel.Period","FeilutbetalingInfoPanel.Hendelse","FeilutbetalingInfoPanel.Beløp"],ki=(e,r)=>{const a=e.find(t=>t.hendelseType===r);return a!=null&&a.hendelseUndertyper&&a.hendelseUndertyper.length>0?a.hendelseUndertyper:void 0},mi=({perioder:e,årsaker:r,readOnly:a,behandlePerioderSamlet:t,kodeverkSamlingFpTilbake:s})=>{const{control:o,watch:i,setValue:g,getValues:m}=Ce(),{fields:y}=Nr({control:o,name:he}),u=(l,v,d)=>{t&&y.forEach((A,f)=>{v!==f&&(d?m(`${he}.${f}.årsak`)===d&&g(`${he}.${f}.${d}.underÅrsak`,l):g(`${he}.${f}.årsak`,l))})};return h.jsx("div",{className:zn.feilutbetalingTable,children:h.jsx(Rn,{headerTextCodes:gi,noHover:!0,children:y.map((l,v)=>{const d=i(`${he}.${v}.årsak`),A=ki(r,d);return h.jsxs(an,{children:[h.jsx(M,{children:`${$(l.fom).format(C)} - ${$(l.tom).format(C)}`}),h.jsxs(M,{children:[h.jsx(rn,{name:`${he}.${v}.årsak`,selectValues:r.map(f=>{var T;return h.jsx("option",{value:f.hendelseType,children:(T=s[re.HENDELSE_TYPE].find(S=>S.kode===f.hendelseType))==null?void 0:T.navn},f.hendelseType)}),validate:[_],disabled:a,onChange:f=>u(f.target.value,v),label:""}),A&&h.jsx(rn,{name:`${he}.${v}.${d}.underÅrsak`,selectValues:A.map(f=>{var T;return h.jsx("option",{value:f,children:(T=s[re.HENDELSE_UNDERTYPE].find(S=>S.kode===f))==null?void 0:T.navn},f)}),validate:[_],disabled:a,onChange:f=>u(f.target.value,v,d),label:""})]}),h.jsx(M,{className:zn.redText,children:e?e[v].belop:null})]},l.id)})})})},vi="_textarea_14pq5_1",pi="_textPadding_14pq5_4",bi="_redText_14pq5_7",Yn={textarea:vi,textPadding:pi,redText:bi},yi=Se(3),Br=4e3,fi=ce(Br),Sr=e=>e.behandlingFakta.perioder?[...e.behandlingFakta.perioder].sort((r,a)=>$(r.fom).diff($(a.fom))):[],hi=e=>{const{behandlingFakta:{begrunnelse:r}}=e;return{begrunnelse:je(r),perioder:Sr(e).map(a=>{const{fom:t,tom:s,feilutbetalingÅrsakDto:o}=a,i={fom:t,tom:s};if(!o)return i;const{hendelseType:g,hendelseUndertype:m}=o;return{...i,årsak:g,[g]:{underÅrsak:m||null}}})}},ji=(e,r)=>{const a=e.perioder.map(t=>{const s=r.find(i=>i.hendelseType===t.årsak),o=s!=null&&s.hendelseUndertyper?s.hendelseUndertyper.find(i=>{var g;return i===((g=t[t.årsak])==null?void 0:g.underÅrsak)}):void 0;return{fom:t.fom,tom:t.tom,årsak:{hendelseType:s==null?void 0:s.hendelseType,hendelseUndertype:o}}});return{kode:gn.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:e.begrunnelse,feilutbetalingFakta:a}},Ti=(e,r)=>{const{hendelseTyper:a}=e;return a.sort((t,s)=>{var o,i;const g=((o=r[re.HENDELSE_TYPE].find(d=>d.kode===t.hendelseType))==null?void 0:o.navn)||"",m=((i=r[re.HENDELSE_TYPE].find(d=>d.kode===s.hendelseType))==null?void 0:i.navn)||"",y=g.startsWith("§"),u=m.startsWith("§"),l=y?g.replace(/\D/g,""):g,v=u?m.replace(/\D/g,""):m;return y&&u?l-v:l.localeCompare(v)})},ci=({hasOpenAksjonspunkter:e,feilutbetalingAarsak:r,feilutbetalingFakta:a,readOnly:t,alleMerknaderFraBeslutter:s,kodeverkSamlingFpTilbake:o,kodeverkSamlingFpsak:i,formData:g,setFormData:m,submitCallback:y})=>{var u,l;const v=G(),d=a.behandlingFakta,A=hi(a),f=Fe({defaultValues:g||A}),T=f.watch("behandlePerioderSamlet")||!1,S=Ti(r,o);return h.jsxs(h.Fragment,{children:[h.jsx(xn,{isAksjonspunktOpen:e,children:[h.jsx(p,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"},"1")]}),h.jsx(j,{sixteenPx:!0}),h.jsxs(Be,{formMethods:f,onSubmit:V=>y(ji(V,S)),setDataOnUnmount:m,children:[h.jsxs(U,{gap:"10",wrap:!0,children:[h.jsxs("div",{children:[h.jsx(z,{size:"small",children:h.jsx(p,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),h.jsx(j,{sixteenPx:!0}),h.jsxs(U,{justify:"space-between",children:[h.jsxs("div",{children:[h.jsx(J,{children:h.jsx(p,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),h.jsx(x,{size:"small",children:`${$(d.totalPeriodeFom).format(C)} - ${$(d.totalPeriodeTom).format(C)}`})]}),h.jsxs("div",{children:[h.jsx(J,{children:h.jsx(p,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),h.jsx(x,{size:"small",className:Yn.redText,children:d.aktuellFeilUtbetaltBeløp})]}),h.jsxs("div",{children:[h.jsx(J,{children:h.jsx(p,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),h.jsx(x,{size:"small",children:d.tidligereVarseltBeløp?d.tidligereVarseltBeløp:h.jsx(p,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),h.jsx(j,{sixteenPx:!0}),h.jsx(ar,{name:"behandlePerioderSamlet",label:v.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:t}),h.jsx(j,{sixteenPx:!0}),h.jsx(qn,{merknaderFraBeslutter:s[gn.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:h.jsx(mi,{perioder:Sr(a),behandlePerioderSamlet:T,årsaker:S,readOnly:t,kodeverkSamlingFpTilbake:o})})]}),h.jsxs("div",{children:[h.jsx(z,{size:"small",children:h.jsx(p,{id:"FeilutbetalingInfoPanel.Revurdering"})}),h.jsx(j,{sixteenPx:!0}),h.jsxs(U,{gap:"4",children:[h.jsxs("div",{children:[h.jsx(J,{children:h.jsx(p,{id:"FeilutbetalingInfoPanel.Årsaker"})}),d.behandlingÅrsaker&&h.jsx(x,{size:"small",children:d.behandlingÅrsaker.map(V=>{var q;return(q=i[re.BEHANDLING_AARSAK].find(P=>P.kode===V.behandlingArsakType))==null?void 0:q.navn}).join(", ")})]}),d.datoForRevurderingsvedtak&&h.jsxs("div",{children:[h.jsx(J,{children:h.jsx(p,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),h.jsx(x,{size:"small",children:$(d.datoForRevurderingsvedtak).format(C)})]})]}),h.jsx(j,{sixteenPx:!0}),h.jsx(J,{children:h.jsx(p,{id:"FeilutbetalingInfoPanel.Resultat"})}),d.behandlingsresultat&&h.jsx(x,{size:"small",children:(u=i[re.BEHANDLING_AARSAK].find(V=>{var q;return V.kode===((q=d.behandlingsresultat)==null?void 0:q.type)}))==null?void 0:u.navn}),h.jsx(j,{sixteenPx:!0}),h.jsx(J,{children:h.jsx(p,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),d.behandlingsresultat&&h.jsx(x,{size:"small",children:d.behandlingsresultat.konsekvenserForYtelsen.map(V=>{var q;return(q=i[re.KONSEKVENS_FOR_YTELSEN].find(P=>P.kode===V))==null?void 0:q.navn}).join(", ")}),h.jsx(j,{sixteenPx:!0}),h.jsx(J,{children:h.jsx(p,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),d.tilbakekrevingValg&&h.jsx(x,{size:"small",children:(l=o[re.TILBAKEKR_VIDERE_BEH].find(V=>{var q;return V.kode===((q=d.tilbakekrevingValg)==null?void 0:q.videreBehandling)}))==null?void 0:l.navn})]})]}),h.jsx(j,{sixteenPx:!0}),h.jsx("div",{className:Yn.textarea,children:h.jsx(ge,{name:"begrunnelse",label:v.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[_,yi,fi,ke],maxLength:Br,readOnly:t})}),h.jsx(j,{sixteenPx:!0}),h.jsx(I,{variant:"primary",size:"small",disabled:t||!f.formState.isDirty||f.formState.isSubmitting,loading:f.formState.isSubmitting,children:h.jsx(p,{id:"FeilutbetalingInfoPanel.Confirm"})})]})]})},Pi={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},qi=ln(Pi),xi=({feilutbetalingFakta:e,feilutbetalingAarsak:r,fagsakYtelseTypeKode:a,isAksjonspunktOpen:t,isReadOnly:s,kodeverkSamlingFpsak:o,kodeverkSamlingFpTilbake:i,alleMerknaderFraBeslutter:g,submitCallback:m,formData:y,setFormData:u})=>{const l=r.find(v=>v.ytelseType===a);if(!l)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${a}`);return h.jsx(on,{value:qi,children:h.jsx(ci,{feilutbetalingFakta:e,feilutbetalingAarsak:l,alleMerknaderFraBeslutter:g,kodeverkSamlingFpTilbake:i,kodeverkSamlingFpsak:o,submitCallback:m,readOnly:s,hasOpenAksjonspunkter:t,formData:y,setFormData:u})})},Ai=[gn.AVKLAR_FAKTA_FOR_FEILUTBETALING],Ri=[X.FEILUTBETALING_FAKTA,X.FEILUTBETALING_AARSAK],Er=({behandling:e,valgtFaktaSteg:r,registrerFaktaPanel:a,tilbakekrevingKodeverk:t,fagsakYtelseTypeKode:s})=>E.jsx(zr,{behandling:e,valgtFaktaSteg:r,registrerFaktaPanel:a,panelEndepunkter:Ri,aksjonspunktKoder:Ai,faktaPanelKode:Dr.FEILUTBETALING,faktaPanelMenyTekst:G().formatMessage({id:"TilbakekrevingFakta.FaktaFeilutbetaling"}),skalPanelVisesIMeny:()=>er.hasPath(X.FEILUTBETALING_FAKTA.name),renderPanel:o=>E.jsx(xi,{fagsakYtelseTypeKode:s,kodeverkSamlingFpTilbake:t,kodeverkSamlingFpsak:o.alleKodeverk,isAksjonspunktOpen:o.harApneAksjonspunkter,isReadOnly:o.readOnly,...o})});Er.__docgenInfo={description:"FeilutbetalingFaktaInitPanel",methods:[],displayName:"FeilutbetalingFaktaInitPanel",props:{valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},tilbakekrevingKodeverk:{required:!0,tsType:{name:"Record",elements:[{name:"TilbakekrevingKodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"},description:""},fagsakYtelseTypeKode:{required:!0,tsType:{name:"string"},description:""}}};const Fi=({behandling:e,fagsak:r,valgtProsessSteg:a,valgtFaktaSteg:t,oppdaterProsessStegOgFaktaPanelIUrl:s,opneSokeside:o,alleBehandlinger:i})=>{const{data:g}=Kr.useRestApi(Mr.KODEVERK_FPTILBAKE),y=c.useMemo(()=>i.filter(v=>!v.behandlingHenlagt).map(v=>{var d;return{uuid:v.uuid,type:v.type,status:v.status,opprettet:v.opprettet,avsluttet:v.avsluttet,resultatType:(d=v.behandlingsresultat)==null?void 0:d.type}}),[i]).some(v=>v.type===Ur.REVURDERING&&v.status!==Gr.AVSLUTTET),u=c.useCallback(v=>g?E.jsxs(E.Fragment,{children:[E.jsx(Er,{tilbakekrevingKodeverk:g,fagsakYtelseTypeKode:r.fagsakYtelseType,...v}),E.jsx(Yr,{...v})]}):E.jsx(E.Fragment,{children:"placeholder"}),[g,r]),l=c.useCallback(v=>g?E.jsxs(E.Fragment,{children:[E.jsx(fr,{...v,relasjonsRolleType:r.relasjonsRolleType,tilbakekrevingKodeverk:g}),E.jsx(Pr,{...v,relasjonsRolleType:r.relasjonsRolleType,tilbakekrevingKodeverk:g}),E.jsx(Rr,{...v,harApenRevurdering:y,opneSokeside:o,tilbakekrevingKodeverk:g})]}):E.jsx(E.Fragment,{children:"placeholder"}),[g,y,r,o,s]);return g?E.jsxs(E.Fragment,{children:[E.jsx(Lr,{behandling:e,opneSokeside:o,kodeverk:g,erTilbakekreving:!0},e.versjon),E.jsx(Jr,{behandling:e,valgtProsessSteg:a,valgtFaktaSteg:t,oppdaterProsessStegOgFaktaPanelIUrl:s,hentFaktaPaneler:u,hentProsessPaneler:l})]}):E.jsx(Hr,{})};Fi.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPaneler",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};export{Fi as default};
