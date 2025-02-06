import{j as e}from"./jsx-runtime-CLpGMVip.js";import{d as q,b as _,f as R,N as V,c as S,l as F,E as z,e as A,Z as E,Q as L}from"./index.es-D807ybPP.js";import{n as y,d as $,e as C,S as U,W as M,z as c,Y as u,g as G,f as o,$ as N,K as Y}from"./index.es-BJ5ePes3.js";import{r as D}from"./index-B5OHeJSP.js";import{A as H}from"./aksjonspunktStatus-xM4O_ZUY.js";import{n as T,V as K,H as W,h as v,m as Q,J as X,L as h}from"./withPanelData-BD6kgoz0.js";import{V as Z}from"./BehandlingHenlagtPanel-DP91amuS.js";import{S as J}from"./TotrinnskontrollIndex-CbyoILJr.js";import{S as ee}from"./CheckmarkCircleFill-DKFIcv_a.js";import{S as ne}from"./ExclamationmarkTriangleFill-BaHUn2cM.js";const se="_explanationTextarea_hw8s7_1",re="_begrunnelseTextField_hw8s7_6",ae={explanationTextarea:se,begrunnelseTextField:re},f={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},te=y(f),ie=S(3),le=F(2e3),oe=n=>n?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",ue=n=>r=>r!==void 0||n,P=({readOnly:n,text:r,useAllWidth:s=!1,notRequired:a=!1})=>{const{formState:{isDirty:i}}=q(),t=a?()=>!1:ue(i);return e.jsx("div",{className:s?"":ae.begrunnelseTextField,children:e.jsx(_,{name:"begrunnelse",label:r||te.formatMessage({id:oe(n)}),validate:[R(t),ie,le,V],maxLength:2e3,readOnly:n,parse:$})})},de=n=>n.length>0&&n[0].begrunnelse?n[0].begrunnelse:"";P.buildInitialValues=n=>({begrunnelse:C(de(n))});P.transformValues=n=>({begrunnelse:n.begrunnelse});P.__docgenInfo={description:`ProsessStegBegrunnelseTextField

Presentasjonskomponent. Lar den Nav-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"any"}}}],displayName:"ProsessStegBegrunnelseTextField",props:{useAllWidth:{defaultValue:{value:"false",computed:!1},required:!1},notRequired:{defaultValue:{value:"false",computed:!1},required:!1}}};const ge=y(f),me=(n,r,s,a)=>!s&&!r||n?!0:a===void 0?!s:!s&&a||a,O=({isReadOnly:n,isSubmittable:r,isSubmitting:s,isDirty:a,text:i,onClick:t,hasEmptyRequiredFields:d})=>n?null:e.jsx(T,{size:"small",variant:"primary",loading:s,disabled:me(s,r,a,d),onClick:t||z,type:t?"button":"submit",children:i||ge.formatMessage({id:"SubmitButton.ConfirmInformation"})});O.__docgenInfo={description:"ProsessStegSubmitButton",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const ke="_godkjentImage_17qk2_1",pe="_avslattImage_17qk2_7",ce="_selectBredde_17qk2_13",j={godkjentImage:ke,avslattImage:pe,selectBredde:ce},ve=y(f),ye=(n,r)=>()=>n===!1&&!r,fe=[],be=n=>n.toSorted((r,s)=>r.navn.localeCompare(s.navn)),B=({avslagsarsaker:n,customVilkarIkkeOppfyltText:r,customVilkarOppfyltText:s,readOnly:a,skalKunneInnvilge:i=!0,validatorsForRadioOptions:t})=>{const{getValues:d,watch:k}=q(),l=k("erVilkarOk"),p=D.useMemo(()=>t?t.concat(A):[A],[t]);return e.jsxs(K,{gap:"4",paddingInline:"4",children:[a&&l!==void 0&&e.jsxs(W,{gap:"2",children:[l&&e.jsx(U,{className:j.godkjentImage}),!l&&e.jsx(J,{className:j.avslattImage}),l&&e.jsx(v,{size:"small",children:s}),!l&&e.jsx(v,{size:"small",children:r})]}),(!a||l===void 0)&&e.jsx(E,{name:"erVilkarOk",validate:p,isReadOnly:a,isTrueOrFalseSelection:!0,radios:[{value:"true",label:s,disabled:!i},{value:"false",label:r}]}),l!==void 0&&!l&&n&&e.jsx(L,{name:"avslagskode",label:ve.formatMessage({id:"VilkarResultPicker.Arsak"}),selectValues:be(n||fe).map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode)),readOnly:a,className:j.selectBredde,validate:[R(ye(l,d("avslagskode")))]})]})};B.buildInitialValues=(n,r,s)=>{const i=n.some(t=>t.status===H.OPPRETTET)?void 0:Z.OPPFYLT===r;return{erVilkarOk:i,avslagskode:i===!1&&(s!=null&&s.avslagsarsak)?s.avslagsarsak:void 0}};B.transformValues=n=>n.erVilkarOk?{erVilkarOk:n.erVilkarOk}:{erVilkarOk:n.erVilkarOk,avslagskode:n.avslagskode};B.__docgenInfo={description:`VilkarResultPicker

Presentasjonskomponent. Lar Nav-ansatt velge om vilkåret skal oppfylles eller avvises.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"}},{name:"status",optional:!1,type:{name:"string"}},{name:"behandlingsresultat",optional:!0,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,alias:"Behandlingsresultat"}}],returns:{type:{name:"signature",type:"object",raw:`{
  erVilkarOk?: boolean;
  avslagskode?: string;
}`,signature:{properties:[{key:"erVilkarOk",value:{name:"boolean",required:!1}},{key:"avslagskode",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null}],displayName:"VilkarResultPicker",props:{skalKunneInnvilge:{defaultValue:{value:"true",computed:!1},required:!1}}};const je="_vilkar_t9zom_1",xe="_aksjonspunktMargin_t9zom_5",Te="_godkjentImage_t9zom_10",he="_avslattImage_t9zom_16",b={vilkar:je,aksjonspunktMargin:xe,godkjentImage:Te,avslattImage:he},x=y(f),qe=({lovReferanse:n,title:r,originalErVilkarOk:s,isAksjonspunktOpen:a,readOnlySubmitButton:i,readOnly:t,rendreFakta:d,isDirty:k,erIkkeGodkjentAvBeslutter:l,isSubmitting:p,children:g})=>e.jsxs(e.Fragment,{children:[e.jsxs(M,{children:[e.jsxs(c,{children:[s!==void 0&&e.jsxs(u,{children:[s&&e.jsx(ee,{className:b.godkjentImage}),!s&&e.jsx(G,{className:b.avslattImage})]}),e.jsx(u,{children:e.jsx(Q,{size:"small",children:r})}),n&&e.jsx(u,{children:e.jsx(X,{className:b.vilkar,children:n})})]}),e.jsx(c,{children:e.jsxs(u,{children:[s&&e.jsxs(e.Fragment,{children:[e.jsx(o,{eightPx:!0}),e.jsx(h,{size:"small",children:x.formatMessage({id:"ProsessPanelTemplate.ErOppfylt"})})]}),s===!1&&e.jsxs(e.Fragment,{children:[e.jsx(o,{eightPx:!0}),e.jsx(h,{size:"small",children:x.formatMessage({id:"ProsessPanelTemplate.ErIkkeOppfylt"})})]}),!a&&s===void 0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{eightPx:!0}),e.jsx(v,{size:"small",children:x.formatMessage({id:"ProsessPanelTemplate.IkkeBehandlet"})})]})]})})]}),a&&e.jsx(o,{eightPx:!0}),e.jsxs(N,{className:b.aksjonspunktMargin,erAksjonspunktApent:a,erIkkeGodkjentAvBeslutter:l,children:[g,!t&&e.jsx(o,{sixteenPx:!0}),e.jsx(O,{isReadOnly:t,isSubmittable:!i,isDirty:k,isSubmitting:p})]}),d&&e.jsxs(e.Fragment,{children:[e.jsx(o,{sixteenPx:!0}),d()]})]});qe.__docgenInfo={description:"",methods:[],displayName:"ProsessPanelTemplate",props:{title:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},originalErVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},rendreFakta:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const Pe="_aksjonspunktMargin_pxm8x_1",Be="_exclamationmarkIcon_pxm8x_6",I={aksjonspunktMargin:Pe,exclamationmarkIcon:Be},m=y(f),Ae=S(3),Ie=F(1500),_e=n=>r=>r!==void 0||n,Re=({erOverstyrt:n,isSolvable:r,erVilkarOk:s,hasAksjonspunkt:a,overrideReadOnly:i,isSubmitting:t,isPristine:d,toggleAv:k,erIkkeGodkjentAvBeslutter:l,children:p})=>{const{formState:{isDirty:g}}=q(),w=_e(g);return e.jsxs(N,{className:I.aksjonspunktMargin,erAksjonspunktApent:n,erIkkeGodkjentAvBeslutter:l,children:[e.jsx(h,{size:"medium",children:m.formatMessage({id:"OverstyringPanel.AutomatiskVurdering"})}),e.jsx(o,{eightPx:!0}),p,(n||a)&&e.jsxs(e.Fragment,{children:[e.jsx(o,{eightPx:!0}),e.jsx(_,{name:"begrunnelse",label:m.formatMessage({id:"OverstyringPanel.Vilkar"}),validate:[w,Ae,Ie,V],maxLength:1500,readOnly:i||!n})]}),e.jsx(o,{sixteenPx:!0}),!n&&s!==void 0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{fourPx:!0}),e.jsxs(c,{children:[e.jsx(u,{children:e.jsx(Y,{})}),e.jsx(u,{children:e.jsx(v,{size:"small",children:m.formatMessage({id:"OverstyringPanel.Endret"})})})]})]}),n&&e.jsxs(M,{children:[e.jsxs(c,{children:[e.jsx(u,{children:e.jsx(ne,{className:I.exclamationmarkIcon})}),e.jsx(u,{children:e.jsx(v,{size:"small",children:m.formatMessage({id:"OverstyringPanel.Unntakstilfeller"})})})]}),e.jsx(o,{sixteenPx:!0}),e.jsxs(c,{children:[e.jsx(u,{children:!i&&e.jsx(T,{size:"small",variant:"primary",loading:t,disabled:t||!r||d,children:m.formatMessage({id:"OverstyringPanel.ConfirmInformation"})})}),e.jsx(u,{children:e.jsx(T,{size:"small",variant:"secondary",loading:t,disabled:t,onClick:k,type:"button",children:m.formatMessage({id:"OverstyringPanel.Avbryt"})})})]})]})]})};Re.__docgenInfo={description:"",methods:[],displayName:"OverstyringPanel",props:{erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},isSolvable:{required:!0,tsType:{name:"boolean"},description:""},erVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},hasAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},overrideReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isPristine:{required:!0,tsType:{name:"boolean"},description:""},toggleAv:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{Re as O,P,B as V,O as a,qe as b};
