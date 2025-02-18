import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as h,K as I,r as V,c as _,o as O,N as F,E,b as R,J as z,Z as L}from"./index.es-DchGv56U.js";import{l as C,n as y,e as $,f as U,D as N,I as c,b as d,g as D,d as o,h as M,z as G}from"./index.es-Bpu8n8sY.js";import{r as Y}from"./index-DjhIdADd.js";import{A as K}from"./aksjonspunktStatus-xM4O_ZUY.js";import{n as T,V as H,H as J,h as v,m as X,D as Z,L as q}from"./withPanelData-xf5Cf5DH.js";import{V as W}from"./BehandlingHenlagtPanel-Bhwl3s0R.js";import{S as Q}from"./TotrinnskontrollIndex-DkDK2oR6.js";import{S as ee}from"./CheckmarkCircleFill-DQRQXcDo.js";import{S as ne}from"./ExclamationmarkTriangleFill-Bdt0U1SX.js";const se="_begrunnelseTextField_hw8s7_6",re={begrunnelseTextField:se},f={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},ae=y(f),te=_(3),ie=O(2e3),le=n=>n?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",oe=n=>r=>r!==void 0||n,P=({readOnly:n,text:r,useAllWidth:s=!1,notRequired:a=!1})=>{const{formState:{isDirty:i}}=h(),t=a?()=>!1:oe(i);return e.jsx("div",{className:s?"":re.begrunnelseTextField,children:e.jsx(I,{name:"begrunnelse",label:r||ae.formatMessage({id:le(n)}),validate:[V(t),te,ie,F],maxLength:2e3,readOnly:n,parse:C})})},de=n=>n.length>0&&n[0].begrunnelse?n[0].begrunnelse:"";P.buildInitialValues=n=>({begrunnelse:$(de(n))});P.transformValues=n=>({begrunnelse:n.begrunnelse});P.__docgenInfo={description:`ProsessStegBegrunnelseTextField

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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"any"}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ue=y(f),ge=(n,r,s,a)=>!s&&!r||n?!0:a===void 0?!s:!s&&a||a,S=({isReadOnly:n,isSubmittable:r,isSubmitting:s,isDirty:a,text:i,onClick:t,hasEmptyRequiredFields:u})=>n?null:e.jsx(T,{size:"small",variant:"primary",loading:s,disabled:ge(s,r,a,u),onClick:t||E,type:t?"button":"submit",children:i||ue.formatMessage({id:"SubmitButton.ConfirmInformation"})});S.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const me="_godkjentImage_17qk2_1",ke="_avslattImage_17qk2_7",pe="_selectBredde_17qk2_13",j={godkjentImage:me,avslattImage:ke,selectBredde:pe},ce=y(f),ve=(n,r)=>()=>n===!1&&!r,ye=[],fe=n=>n.toSorted((r,s)=>r.navn.localeCompare(s.navn)),B=({avslagsarsaker:n,customVilkarIkkeOppfyltText:r,customVilkarOppfyltText:s,readOnly:a,skalKunneInnvilge:i=!0,validatorsForRadioOptions:t})=>{const{getValues:u,watch:k}=h(),l=k("erVilkarOk"),p=Y.useMemo(()=>t?t.concat(R):[R],[t]);return e.jsxs(H,{gap:"4",paddingInline:"4",children:[a&&l!==void 0&&e.jsxs(J,{gap:"2",children:[l&&e.jsx(U,{className:j.godkjentImage}),!l&&e.jsx(Q,{className:j.avslattImage}),l&&e.jsx(v,{size:"small",children:s}),!l&&e.jsx(v,{size:"small",children:r})]}),(!a||l===void 0)&&e.jsx(z,{name:"erVilkarOk",validate:p,isReadOnly:a,isTrueOrFalseSelection:!0,radios:[{value:"true",label:s,disabled:!i},{value:"false",label:r}]}),l!==void 0&&!l&&n&&e.jsx(L,{name:"avslagskode",label:ce.formatMessage({id:"VilkarResultPicker.Arsak"}),selectValues:fe(n||ye).map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode)),readOnly:a,className:j.selectBredde,validate:[V(ve(l,u("avslagskode")))]})]})};B.buildInitialValues=(n,r,s)=>{const i=n.some(t=>t.status===K.OPPRETTET)?void 0:W.OPPFYLT===r;return{erVilkarOk:i,avslagskode:i===!1&&(s!=null&&s.avslagsarsak)?s.avslagsarsak:void 0}};B.transformValues=n=>n.erVilkarOk?{erVilkarOk:n.erVilkarOk}:{erVilkarOk:n.erVilkarOk,avslagskode:n.avslagskode};B.__docgenInfo={description:`VilkarResultPicker

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
}`,signature:{properties:[{key:"erVilkarOk",value:{name:"boolean",required:!1}},{key:"avslagskode",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  erVilkarOk?: boolean;
  avslagskode?: string;
}`,signature:{properties:[{key:"erVilkarOk",value:{name:"boolean",required:!1}},{key:"avslagskode",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:null}],displayName:"VilkarResultPicker",props:{avslagsarsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},customVilkarIkkeOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},customVilkarOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},skalKunneInnvilge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},validatorsForRadioOptions:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: boolean) => any)[]"},description:""}}};const be="_vilkar_t9zom_1",je="_aksjonspunktMargin_t9zom_5",xe="_godkjentImage_t9zom_10",Te="_avslattImage_t9zom_16",b={vilkar:be,aksjonspunktMargin:je,godkjentImage:xe,avslattImage:Te},x=y(f),qe=({lovReferanse:n,title:r,originalErVilkarOk:s,isAksjonspunktOpen:a,readOnlySubmitButton:i,readOnly:t,rendreFakta:u,isDirty:k,erIkkeGodkjentAvBeslutter:l,isSubmitting:p,children:g})=>e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:[e.jsxs(c,{children:[s!==void 0&&e.jsxs(d,{children:[s&&e.jsx(ee,{className:b.godkjentImage}),!s&&e.jsx(D,{className:b.avslattImage})]}),e.jsx(d,{children:e.jsx(X,{size:"small",children:r})}),n&&e.jsx(d,{children:e.jsx(Z,{className:b.vilkar,children:n})})]}),e.jsx(c,{children:e.jsxs(d,{children:[s&&e.jsxs(e.Fragment,{children:[e.jsx(o,{eightPx:!0}),e.jsx(q,{size:"small",children:x.formatMessage({id:"ProsessPanelTemplate.ErOppfylt"})})]}),s===!1&&e.jsxs(e.Fragment,{children:[e.jsx(o,{eightPx:!0}),e.jsx(q,{size:"small",children:x.formatMessage({id:"ProsessPanelTemplate.ErIkkeOppfylt"})})]}),!a&&s===void 0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{eightPx:!0}),e.jsx(v,{size:"small",children:x.formatMessage({id:"ProsessPanelTemplate.IkkeBehandlet"})})]})]})})]}),a&&e.jsx(o,{eightPx:!0}),e.jsxs(M,{className:b.aksjonspunktMargin,erAksjonspunktApent:a,erIkkeGodkjentAvBeslutter:l,children:[g,!t&&e.jsx(o,{sixteenPx:!0}),e.jsx(S,{isReadOnly:t,isSubmittable:!i,isDirty:k,isSubmitting:p})]}),u&&e.jsxs(e.Fragment,{children:[e.jsx(o,{sixteenPx:!0}),u()]})]});qe.__docgenInfo={description:"",methods:[],displayName:"ProsessPanelTemplate",props:{title:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},originalErVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},rendreFakta:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const he="_aksjonspunktMargin_pxm8x_1",Pe="_exclamationmarkIcon_pxm8x_6",A={aksjonspunktMargin:he,exclamationmarkIcon:Pe},m=y(f),Be=_(3),Re=O(1500),Ae=n=>r=>r!==void 0||n,Ie=({erOverstyrt:n,isSolvable:r,erVilkarOk:s,hasAksjonspunkt:a,overrideReadOnly:i,isSubmitting:t,isPristine:u,toggleAv:k,erIkkeGodkjentAvBeslutter:l,children:p})=>{const{formState:{isDirty:g}}=h(),w=Ae(g);return e.jsxs(M,{className:A.aksjonspunktMargin,erAksjonspunktApent:n,erIkkeGodkjentAvBeslutter:l,children:[e.jsx(q,{size:"medium",children:m.formatMessage({id:"OverstyringPanel.AutomatiskVurdering"})}),e.jsx(o,{eightPx:!0}),p,(n||a)&&e.jsxs(e.Fragment,{children:[e.jsx(o,{eightPx:!0}),e.jsx(I,{name:"begrunnelse",label:m.formatMessage({id:"OverstyringPanel.Vilkar"}),validate:[w,Be,Re,F],maxLength:1500,readOnly:i||!n})]}),e.jsx(o,{sixteenPx:!0}),!n&&s!==void 0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{fourPx:!0}),e.jsxs(c,{children:[e.jsx(d,{children:e.jsx(G,{})}),e.jsx(d,{children:e.jsx(v,{size:"small",children:m.formatMessage({id:"OverstyringPanel.Endret"})})})]})]}),n&&e.jsxs(N,{children:[e.jsxs(c,{children:[e.jsx(d,{children:e.jsx(ne,{className:A.exclamationmarkIcon})}),e.jsx(d,{children:e.jsx(v,{size:"small",children:m.formatMessage({id:"OverstyringPanel.Unntakstilfeller"})})})]}),e.jsx(o,{sixteenPx:!0}),e.jsxs(c,{children:[e.jsx(d,{children:!i&&e.jsx(T,{size:"small",variant:"primary",loading:t,disabled:t||!r||u,children:m.formatMessage({id:"OverstyringPanel.ConfirmInformation"})})}),e.jsx(d,{children:e.jsx(T,{size:"small",variant:"secondary",loading:t,disabled:t,onClick:k,type:"button",children:m.formatMessage({id:"OverstyringPanel.Avbryt"})})})]})]})]})};Ie.__docgenInfo={description:"",methods:[],displayName:"OverstyringPanel",props:{erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},isSolvable:{required:!0,tsType:{name:"boolean"},description:""},erVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},hasAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},overrideReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isPristine:{required:!0,tsType:{name:"boolean"},description:""},toggleAv:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{Ie as O,P,B as V,S as a,qe as b};
