import{R,r as W}from"./index-2ef1385a.js";import{u as w,P as Z,p as G,Z as Q,e as _,r as T,w as H,O as F,j as J,b as K,a as X,k as B,I as h}from"./AppIndex.stories-2c5f8da4.js";import{t as C,X as q,x as k,J as l,E,o as x,A as N,Z as S,U as c,v as $,a as ee,_ as L,b as U,c as Me}from"./index.es-53b354a9.js";import{H as se}from"./index.es-74e3f685.js";var V={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function ae(){if(p)return d;p=1;var M=R,I=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function j(A,i,n){var t,z={},y=null,v=null;n!==void 0&&(y=""+n),i.key!==void 0&&(y=""+i.key),i.ref!==void 0&&(v=i.ref);for(t in i)a.call(i,t)&&!g.hasOwnProperty(t)&&(z[t]=i[t]);if(A&&A.defaultProps)for(t in i=A.defaultProps,i)z[t]===void 0&&(z[t]=i[t]);return{$$typeof:I,type:A,key:y,ref:v,props:z,_owner:r.current}}return d.Fragment=s,d.jsx=j,d.jsxs=j,d}V.exports=ae();var e=V.exports;const u={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.VilkarDato":"Dato for opphør av medlemskapet","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},Ie="_explanationTextarea_hw8s7_1",ge="_begrunnelseTextField_hw8s7_6",ie={explanationTextarea:Ie,begrunnelseTextField:ge},le=C(u),je=B(3),ne=h(1500),te=M=>M?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",re=M=>I=>I!==void 0||M,b=({readOnly:M,text:I,useAllWidth:s=!1,notRequired:a=!1})=>{const{formState:{isDirty:r}}=w(),g=a?()=>!1:re(r);return e.jsx("div",{className:s?"":ie.begrunnelseTextField,children:e.jsx(Z,{name:"begrunnelse",label:I||le.formatMessage({id:te(M)}),validate:[G(g),je,ne,Q],maxLength:1500,readOnly:M,parse:j=>j.replaceAll("‑","-")})})},Ne=M=>M.length>0&&M[0].begrunnelse?M[0].begrunnelse:"";b.buildInitialValues=M=>({begrunnelse:q(Ne(M))});b.transformValues=M=>({begrunnelse:M.begrunnelse});const Ae=C(u),ze=(M,I,s,a)=>!M&&!s||I?!0:a===void 0?!M:!M&&a||a,f=({isReadOnly:M,isSubmittable:I,isSubmitting:s,isDirty:a,text:r,onClick:g,hasEmptyRequiredFields:j})=>M?null:e.jsx(k,{size:"small",variant:"primary",loading:s,disabled:ze(a,s,I,j),onClick:g||_,type:g?"button":"submit",children:r||Ae.formatMessage({id:"SubmitButton.ConfirmInformation"})}),De="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjNweCIgaGVpZ2h0PSIyM3B4IiB2aWV3Qm94PSIwIDAgMjMgMjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+YXZzbMOldHQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImF2c2zDpXR0IiBzdHJva2U9IiNCQTNBMjYiPgogICAgICAgICAgICA8ZyBpZD0iaWtrZS1vcHBmeWx0Ij4KICAgICAgICAgICAgICAgIDxnIGlkPSJMYXllcl8xIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBjeD0iMTEuNSIgY3k9IjExLjUiIHI9IjExIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjcsNy4zIEw3LjIsMTUuOCBNMTUuNywxNS43IEw3LjMsNy4zIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",xe="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jaGVjazwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iY2hlY2siIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iIzA2ODkzQSI+CiAgICAgICAgICAgIDxnIGlkPSJjaGVjay0xIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJGaWxsZWRfVmVyc2lvbiI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjcxNzMzMzMsMC4xMjIgQzE1LjQxNiwtMC4wOTA2NjY2NjY3IDE1LjAwMDY2NjcsLTAuMDE4NjY2NjY2NyAxNC43ODg2NjY3LDAuMjgyNjY2NjY3IEw0LjkxMTMzMzMzLDE0LjMwMiBMMS4xMzgsMTAuNTI5MzMzMyBDMC44NzgsMTAuMjY4NjY2NyAwLjQ1NTMzMzMzMywxMC4yNjg2NjY3IDAuMTk1MzMzMzMzLDEwLjUyOTMzMzMgQy0wLjA2NTMzMzMzMzMsMTAuNzkwNjY2NyAtMC4wNjUzMzMzMzMzLDExLjIxMiAwLjE5NTMzMzMzMywxMS40NzIgTDQuNTI4NjY2NjcsMTUuODA1MzMzMyBDNC42NTQsMTUuOTMwNjY2NyA0LjgyNCwxNiA1LDE2IEM1LjIxMiwxNiA1LjQxOCwxNS44OTggNS41NDQ2NjY2NywxNS43MTczMzMzIEwxNS44NzgsMS4wNTA2NjY2NyBDMTYuMDksMC43NSAxNi4wMTgsMC4zMzMzMzMzMzMgMTUuNzE3MzMzMywwLjEyMiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",de="_container_1s9xo_1",ce="_image_1s9xo_5",Ce="_selectBredde_1s9xo_11",o={container:de,image:ce,selectBredde:Ce},P=C(u),ue=(M,I)=>()=>M===!1&&!I,Y=({avslagsarsaker:M,customVilkarIkkeOppfyltText:I,customVilkarOppfyltText:s,readOnly:a,erMedlemskapsPanel:r=!1,skalKunneInnvilge:g=!0,validatorsForRadioOptions:j})=>{const{getValues:A,watch:i}=w(),n=i("erVilkarOk"),t=W.useMemo(()=>j?j.concat(T):[T],[j]);return e.jsxs("div",{className:o.container,children:[e.jsx(l,{sixteenPx:!0}),a&&n!==void 0&&e.jsxs(E,{children:[e.jsxs(x,{children:[e.jsx(N,{children:e.jsx(S,{className:o.image,src:n?xe:De})}),e.jsxs(N,{children:[n&&e.jsx(c,{size:"small",children:s}),!n&&e.jsx(c,{size:"small",children:I})]})]}),e.jsx(l,{eightPx:!0})]}),(!a||n===void 0)&&e.jsx(H,{name:"erVilkarOk",validate:t,isReadOnly:a,isTrueOrFalseSelection:!0,radios:[{value:"true",label:s,disabled:!g},{value:"false",label:I}]}),n!==void 0&&!n&&M&&e.jsxs(e.Fragment,{children:[e.jsx(l,{sixteenPx:!0}),e.jsx(F,{name:"avslagCode",label:P.formatMessage({id:"VilkarResultPicker.Arsak"}),selectValues:M.map(z=>e.jsx("option",{value:z.kode,children:z.navn},z.kode)),readOnly:a,className:o.selectBredde,validate:[G(ue(n,A("avslagCode")))]}),r&&e.jsxs(e.Fragment,{children:[e.jsx(l,{sixteenPx:!0}),e.jsx(J,{name:"avslagDato",label:P.formatMessage({id:"VilkarResultPicker.VilkarDato"}),isReadOnly:a,validate:[T,K]})]})]}),e.jsx(l,{sixteenPx:!0})]})};Y.buildInitialValues=(M,I,s)=>{const a=M.some(r=>r.status===se.OPPRETTET)?void 0:X.OPPFYLT===I;return{erVilkarOk:a,avslagCode:a===!1&&s&&s.avslagsarsak?s.avslagsarsak:void 0}};Y.transformValues=M=>M.erVilkarOk?{erVilkarOk:M.erVilkarOk}:{erVilkarOk:M.erVilkarOk,avslagskode:M.avslagCode,avslagDato:M.avslagDato};const ye="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjhweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hdnNsw6V0dCB2YWxndDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iYXZzbMOldHQtdmFsZ3QiIGZpbGw9IiNCQTNBMjYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTMuOTk4NzYxLDAgQzYuMjkzOTA2MDUsMCAwLjAxNDYxMzU3NjQsNi4yNjcxMzA0MyA0LjkwODM1OTQzZS0wNiwxMy45NzIgQy0wLjAwNzI5OTQyNTY1LDE3LjcxMTgyNjEgMS40NDEzOTM0OSwyMS4yMzAwODcgNC4wODA2OTI4NCwyMy44ODAzNDc4IEM2LjcxOTk5MjIsMjYuNTI5MzkxMyAxMC4yMzMzNzY5LDI3Ljk5MjY5NTcgMTMuOTczMTk1OSwyOCBMMTMuOTk5OTc4NCwyOCBDMjEuNzAzNjE2LDI4IDI3Ljk4NDEyNTksMjEuNzMxNjUyMiAyNy45OTk5NTE5LDE0LjAyNTU2NTIgQzI4LjAxNDU2MDYsNi4zMDczMDQzNSAyMS43NDYyMjQ2LDAuMDE0NjA4Njk1NyAxMy45OTg3NjEsMCBaIE0xOS41ODUzNTkyLDE4Ljc0NTM5MTMgQzE5LjgyMTUzMjYsMTguOTgyNzgyNiAxOS44MjAzMTUyLDE5LjM2ODY5NTcgMTkuNTgyOTI0NCwxOS42MDYwODcgQzE5LjQ2MzYyMDMsMTkuNzI1MzkxMyAxOS4zMDkwMTE5LDE5Ljc4MzgyNjEgMTkuMTUzMTg2MSwxOS43ODM4MjYxIEMxOC45OTg1Nzc3LDE5Ljc4MzgyNjEgMTguODQxNTM0NSwxOS43MjQxNzM5IDE4LjcyMjIzMDQsMTkuNjA2MDg3IEwxMy45OTYzMjYzLDE0Ljg2MDY5NTcgTDkuMjUzMzc4NzEsMTkuNTg2NjA4NyBDOS4xMzQwNzQ1OSwxOS43MDU5MTMgOC45NzgyNDg3OSwxOS43NjQzNDc4IDguODIyNDIzLDE5Ljc2NDM0NzggQzguNjY2NTk3MjEsMTkuNzY0MzQ3OCA4LjUxMTk4ODgxLDE5LjcwNDY5NTcgOC4zOTI2ODQ2OCwxOS41ODY2MDg3IEM4LjE1NTI5MzgzLDE5LjM0OCA4LjE1NTI5MzgzLDE4Ljk2MjA4NyA4LjM5MzkwMjA3LDE4LjcyNTkxMyBMMTMuMTM4MDY3LDE0IEw4LjQxMjE2MjkxLDkuMjU0NjA4NyBDOC4xNzQ3NzIwNSw5LjAxNiA4LjE3NTk4OTQ0LDguNjMxMzA0MzUgOC40MTQ1OTc2OSw4LjM5NTEzMDQzIEM4LjY1MTk4ODU0LDguMTU1MzA0MzUgOS4wMzc5MDA4NSw4LjE1NjUyMTc0IDkuMjc1MjkxNzEsOC4zOTYzNDc4MyBMMTMuOTk5OTc4NCwxMy4xNDA1MjE3IEwxOC43NDI5MjYsOC40MTU4MjYwOSBDMTguOTgwMzE2OCw4LjE3ODQzNDc4IDE5LjM2NzQ0NjUsOC4xNzg0MzQ3OCAxOS42MDM2Miw4LjQxNzA0MzQ4IEMxOS44NDEwMTA5LDguNjU0NDM0NzggMTkuODQxMDEwOSw5LjA0MDM0NzgzIDE5LjYwMjQwMjYsOS4yNzc3MzkxMyBMMTQuODU5NDU1MSwxNC4wMDM2NTIyIEwxOS41ODUzNTkyLDE4Ljc0NTM5MTMgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K",Te="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjhweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pbm52aWxnZXQgdmFsZ3Q8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImlubnZpbGdldC12YWxndCIgZmlsbD0iIzA2ODkzQSI+CiAgICAgICAgICAgIDxnIGlkPSJjaGVjay1jaXJjbGUtc2VsZWN0ZWQiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkZpbGxlZF9WZXJzaW9uIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQsMCBDNi4yODAxNjY2NywwIDAsNi4yODEzMzMzMyAwLDE0IEMwLDIxLjcxODY2NjcgNi4yODAxNjY2NywyOCAxNCwyOCBDMjEuNzE4NjY2NywyOCAyOCwyMS43MTg2NjY3IDI4LDE0IEMyOCw2LjI4MTMzMzMzIDIxLjcxODY2NjcsMCAxNCwwIFogTTIwLjIzMTE2NjcsMTAuMzQzNjY2NyBMMTEuNDgxMTY2NywxOC41MTAzMzMzIEMxMS4zNjkxNjY3LDE4LjYxNDE2NjcgMTEuMjI1NjY2NywxOC42NjY2NjY3IDExLjA4MzMzMzMsMTguNjY2NjY2NyBDMTAuOTMyODMzMywxOC42NjY2NjY3IDEwLjc4NDY2NjcsMTguNjA5NSAxMC42NzAzMzMzLDE4LjQ5NjMzMzMgTDcuNzUzNjY2NjcsMTUuNTc5NjY2NyBDNy41MjYxNjY2NywxNS4zNTIxNjY3IDcuNTI2MTY2NjcsMTQuOTgyMzMzMyA3Ljc1MzY2NjY3LDE0Ljc1NDgzMzMgQzcuOTgxMTY2NjcsMTQuNTI3MzMzMyA4LjM1MSwxNC41MjczMzMzIDguNTc4NSwxNC43NTQ4MzMzIEwxMS4wOTYxNjY3LDE3LjI3MjUgTDE5LjQzNDMzMzMsOS40OTA4MzMzMyBDMTkuNjY4ODMzMyw5LjI3MTUgMjAuMDM4NjY2Nyw5LjI4MiAyMC4yNTkxNjY3LDkuNTE3NjY2NjcgQzIwLjQ3OTY2NjcsOS43NTMzMzMzMyAyMC40NjY4MzMzLDEwLjEyMzE2NjcgMjAuMjMxMTY2NywxMC4zNDM2NjY3IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K",oe="_vilkar_i0t4g_1",me="_aksjonspunktMargin_i0t4g_5",Oe="_status_i0t4g_10",m={vilkar:oe,aksjonspunktMargin:me,status:Oe},O=C(u),ke=({lovReferanse:M,title:I,originalErVilkarOk:s,isAksjonspunktOpen:a,readOnlySubmitButton:r,readOnly:g,rendreFakta:j,isDirty:A,erIkkeGodkjentAvBeslutter:i,isSubmitting:n,children:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:[e.jsxs(x,{children:[s!==void 0&&e.jsx(N,{children:e.jsx(S,{className:m.status,src:s?Te:ye})}),e.jsx(N,{children:e.jsx($,{size:"small",children:I})}),M&&e.jsx(N,{children:e.jsx(ee,{size:"small",className:m.vilkar,children:M})})]}),e.jsx(x,{children:e.jsxs(N,{children:[s&&e.jsxs(e.Fragment,{children:[e.jsx(l,{eightPx:!0}),e.jsx(L,{size:"small",children:O.formatMessage({id:"ProsessPanelTemplate.ErOppfylt"})})]}),s===!1&&e.jsxs(e.Fragment,{children:[e.jsx(l,{eightPx:!0}),e.jsx(L,{size:"small",children:O.formatMessage({id:"ProsessPanelTemplate.ErIkkeOppfylt"})})]}),!a&&s===void 0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{eightPx:!0}),e.jsx(c,{size:"small",children:O.formatMessage({id:"ProsessPanelTemplate.IkkeBehandlet"})})]})]})})]}),a&&e.jsx(l,{eightPx:!0}),e.jsxs(U,{className:m.aksjonspunktMargin,erAksjonspunktApent:a,erIkkeGodkjentAvBeslutter:i,children:[t,!g&&e.jsx(l,{sixteenPx:!0}),e.jsx(f,{isReadOnly:g,isSubmittable:!r,isDirty:A,isSubmitting:n})]}),j&&e.jsxs(e.Fragment,{children:[e.jsx(l,{sixteenPx:!0}),j()]})]}),Le="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uLyB2YXJzZWx0cmVrYW50IG9wcGdhdmU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iaWNvbi8tdmFyc2VsdHJla2FudC1vcHBnYXZlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTEuODMxODM5MSwxLjEzMjcyNjE1IEwxOS43ODMzMDU2LDE3LjAzNTY1OTEgQzIwLjI4OTIxNTksMTguMDQ3NDc5OCAxOS44NzkwOTQ1LDE5LjI3Nzg0MzkgMTguODY3MjczOSwxOS43ODM3NTQyIEMxOC41ODI4NTUsMTkuOTI1OTYzNyAxOC4yNjkyMzIxLDIwIDE3Ljk1MTI0MjIsMjAgTDIuMDQ4MzA5MTUsMjAgQzAuOTE3MDU5MjQ0LDIwIDMuOTA3OTg1MDVlLTE0LDE5LjA4Mjk0MDggMy45MDc5ODUwNWUtMTQsMTcuOTUxNjkwOCBDMy45MDc5ODUwNWUtMTQsMTcuNjMzNzAwOSAwLjA3NDAzNjMyMjIsMTcuMzIwMDc4IDAuMjE2MjQ1NzUxLDE3LjAzNTY1OTEgTDguMTY3NzEyMjUsMS4xMzI3MjYxNSBDOC42NzM2MjI1OSwwLjEyMDkwNTQ3IDkuOTAzOTg2NjgsLTAuMjg5MjE1ODkyIDEwLjkxNTgwNzQsMC4yMTY2OTQ0NDYgQzExLjMxMjIxMTMsMC40MTQ4OTY0MjEgMTEuNjMzNjM3MSwwLjczNjMyMjE5NyAxMS44MzE4MzkxLDEuMTMyNzI2MTUgWiIgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0ZGQTczMyI+PC9wYXRoPgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC40OTQ3MDEsIDUuMTQzNjg3KSIgZmlsbD0iIzNFMzgzMiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjI5MjIxNzE5LDExLjg0NjAxMjcgQzEuMjg0NjAyMjMsMTEuODQ2MDEyNyAxLjI3Njk4NzI3LDExLjg0NjAxMjcgMS4yNjkzNzIzMSwxMS44NDYwMTI3IEMwLjU3NzY4MDAwNiwxMS44NDYwMTI3IDAuMDExNjM0NTYwNiwxMS4yOTI2NTg4IDAuMDAwMjEyMTE4ODU4LDEwLjU5OTY5NzQgQy0wLjAxMjQ3OTQ4MzEsOS44OTkxMjA5NiAwLjU0NTk1MTAwMSw5LjMyMDM4MzkxIDEuMjQ2NTI3NDMsOS4zMDg5NjE0NyBDMS4yNTQxNDIzOSw5LjMwODk2MTQ3IDEuMjYxNzU3MzUsOS4zMDc2OTIzMSAxLjI2OTM3MjMxLDkuMzA3NjkyMzEgQzEuOTYxMDY0NjIsOS4zMDc2OTIzMSAyLjUyNTg0MDksOS44NjIzMTUzMSAyLjUzODUzMjUsMTAuNTU1Mjc2OCBDMi41NTEyMjQxLDExLjI1NTg1MzIgMS45OTE1MjQ0NiwxMS44MzMzMjExIDEuMjkyMjE3MTksMTEuODQ2MDEyNyBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMS4yNjkyMzA3NywwIEMxLjczNjU0ODYzLDAgMi4xMTUzODQ2MiwwLjM3ODgzNTk4MSAyLjExNTM4NDYyLDAuODQ2MTUzODQ2IEwyLjExNTM4NDYyLDYuNzY5MjMwNzcgQzIuMTE1Mzg0NjIsNy4yMzY1NDg2MyAxLjczNjU0ODYzLDcuNjE1Mzg0NjIgMS4yNjkyMzA3Nyw3LjYxNTM4NDYyIEMwLjgwMTkxMjkwNCw3LjYxNTM4NDYyIDAuNDIzMDc2OTIzLDcuMjM2NTQ4NjMgMC40MjMwNzY5MjMsNi43NjkyMzA3NyBMMC40MjMwNzY5MjMsMC44NDYxNTM4NDYgQzAuNDIzMDc2OTIzLDAuMzc4ODM1OTgxIDAuODAxOTEyOTA0LDAgMS4yNjkyMzA3NywwIFoiIGlkPSJSZWN0YW5nbGUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",we="_aksjonspunktMargin_1jb91_1",Ee={aksjonspunktMargin:we},D=C(u),Se=B(3),be=h(1500),Ye=M=>I=>I!==void 0||M,ve=({erOverstyrt:M,isSolvable:I,erVilkarOk:s,hasAksjonspunkt:a,overrideReadOnly:r,isSubmitting:g,isPristine:j,toggleAv:A,erIkkeGodkjentAvBeslutter:i,children:n})=>{const{formState:{isDirty:t}}=w(),z=Ye(t);return e.jsxs(U,{className:Ee.aksjonspunktMargin,erAksjonspunktApent:M,erIkkeGodkjentAvBeslutter:i,children:[e.jsx(L,{size:"small",children:D.formatMessage({id:"OverstyringPanel.AutomatiskVurdering"})}),e.jsx(l,{eightPx:!0}),n,(M||a)&&e.jsxs(e.Fragment,{children:[e.jsx(l,{eightPx:!0}),e.jsx(Z,{name:"begrunnelse",label:D.formatMessage({id:"OverstyringPanel.Vilkar"}),validate:[z,Se,be,Q],maxLength:1500,readOnly:r||!M})]}),e.jsx(l,{sixteenPx:!0}),!M&&s!==void 0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{fourPx:!0}),e.jsxs(x,{children:[e.jsx(N,{children:e.jsx(Me,{})}),e.jsx(N,{children:e.jsx(c,{size:"small",children:D.formatMessage({id:"OverstyringPanel.Endret"})})})]})]}),M&&e.jsxs(E,{children:[e.jsxs(x,{children:[e.jsx(N,{children:e.jsx(S,{src:Le})}),e.jsx(N,{children:e.jsx(c,{size:"small",children:D.formatMessage({id:"OverstyringPanel.Unntakstilfeller"})})})]}),e.jsx(l,{sixteenPx:!0}),e.jsxs(x,{children:[e.jsx(N,{children:!r&&e.jsx(k,{size:"small",variant:"primary",loading:g,disabled:g||!I||j,children:D.formatMessage({id:"OverstyringPanel.ConfirmInformation"})})}),e.jsx(N,{children:e.jsx(k,{size:"small",variant:"secondary",loading:g,disabled:g,onClick:A,type:"button",children:D.formatMessage({id:"OverstyringPanel.Avbryt"})})})]})]})]})},Qe=(M,...I)=>{const s=I.find(a=>a===M);if(!s)throw Error(`Det finnes ikke enum for kode ${M}`);return s};ve.__docgenInfo={description:"",methods:[],displayName:"Lt"};ke.__docgenInfo={description:"",methods:[],displayName:"bt"};b.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"a",optional:!1,type:null}],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"a",optional:!1,type:null}],returns:null}],displayName:"Je",props:{useAllWidth:{defaultValue:{value:"!1",computed:!1},required:!1},notRequired:{defaultValue:{value:"!1",computed:!1},required:!1}}};f.__docgenInfo={description:"",methods:[],displayName:"nt"};Y.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"a",optional:!1,type:null},{name:"c",optional:!1,type:null},{name:"M",optional:!1,type:null}],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"a",optional:!1,type:null}],returns:null}],displayName:"Ke",props:{erMedlemskapsPanel:{defaultValue:{value:"!1",computed:!1},required:!1},skalKunneInnvilge:{defaultValue:{value:"!0",computed:!1},required:!1}}};export{b as J,Y as K,ve as L,ke as b,f as n,Qe as p};
//# sourceMappingURL=index.es-4f8cde09.js.map
