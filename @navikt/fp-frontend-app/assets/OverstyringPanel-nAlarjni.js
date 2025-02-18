import{j as e}from"./jsx-runtime-CLpGMVip.js";import{d as h,b as A,f as V,N as _,c as O,l as F,E,e as R,Z as L,Q as z}from"./index.es-DTH-A8tF.js";import{n as v,f as $,c as C,e as U,F as N,D as c,I as d,g as G,d as o,R as M,q as D}from"./index.es-BzH0p2mM.js";import{r as Y}from"./index-B8jnc8p3.js";import{A as H}from"./aksjonspunktStatus-xM4O_ZUY.js";import{n as T,V as K,H as Q,h as y,m as X,J as Z,L as q}from"./withPanelData-DU0U5n0a.js";import{V as J}from"./BehandlingHenlagtPanel-DtW6BH6t.js";import{S as W}from"./TotrinnskontrollIndex-CoYA-5nf.js";import{S as ee}from"./CheckmarkCircleFill-BvY2yEmg.js";import{S as ne}from"./ExclamationmarkTriangleFill-C4IndCeL.js";const se="_explanationTextarea_hw8s7_1",re="_begrunnelseTextField_hw8s7_6",ae={explanationTextarea:se,begrunnelseTextField:re},f={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},te=v(f),ie=O(3),le=F(2e3),oe=n=>n?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",de=n=>r=>r!==void 0||n,P=({readOnly:n,text:r,useAllWidth:s=!1,notRequired:a=!1})=>{const{formState:{isDirty:i}}=h(),t=a?()=>!1:de(i);return e.jsx("div",{className:s?"":ae.begrunnelseTextField,children:e.jsx(A,{name:"begrunnelse",label:r||te.formatMessage({id:oe(n)}),validate:[V(t),ie,le,_],maxLength:2e3,readOnly:n,parse:$})})},ue=n=>n.length>0&&n[0].begrunnelse?n[0].begrunnelse:"";P.buildInitialValues=n=>({begrunnelse:C(ue(n))});P.transformValues=n=>({begrunnelse:n.begrunnelse});P.__docgenInfo={description:`ProsessStegBegrunnelseTextField

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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"any"}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ge=v(f),me=(n,r,s,a)=>!s&&!r||n?!0:a===void 0?!s:!s&&a||a,S=({isReadOnly:n,isSubmittable:r,isSubmitting:s,isDirty:a,text:i,onClick:t,hasEmptyRequiredFields:u})=>n?null:e.jsx(T,{size:"small",variant:"primary",loading:s,disabled:me(s,r,a,u),onClick:t||E,type:t?"button":"submit",children:i||ge.formatMessage({id:"SubmitButton.ConfirmInformation"})});S.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const ke="_godkjentImage_17qk2_1",pe="_avslattImage_17qk2_7",ce="_selectBredde_17qk2_13",j={godkjentImage:ke,avslattImage:pe,selectBredde:ce},ye=v(f),ve=(n,r)=>()=>n===!1&&!r,fe=[],be=n=>n.toSorted((r,s)=>r.navn.localeCompare(s.navn)),B=({avslagsarsaker:n,customVilkarIkkeOppfyltText:r,customVilkarOppfyltText:s,readOnly:a,skalKunneInnvilge:i=!0,validatorsForRadioOptions:t})=>{const{getValues:u,watch:k}=h(),l=k("erVilkarOk"),p=Y.useMemo(()=>t?t.concat(R):[R],[t]);return e.jsxs(K,{gap:"4",paddingInline:"4",children:[a&&l!==void 0&&e.jsxs(Q,{gap:"2",children:[l&&e.jsx(U,{className:j.godkjentImage}),!l&&e.jsx(W,{className:j.avslattImage}),l&&e.jsx(y,{size:"small",children:s}),!l&&e.jsx(y,{size:"small",children:r})]}),(!a||l===void 0)&&e.jsx(L,{name:"erVilkarOk",validate:p,isReadOnly:a,isTrueOrFalseSelection:!0,radios:[{value:"true",label:s,disabled:!i},{value:"false",label:r}]}),l!==void 0&&!l&&n&&e.jsx(z,{name:"avslagskode",label:ye.formatMessage({id:"VilkarResultPicker.Arsak"}),selectValues:be(n||fe).map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode)),readOnly:a,className:j.selectBredde,validate:[V(ve(l,u("avslagskode")))]})]})};B.buildInitialValues=(n,r,s)=>{const i=n.some(t=>t.status===H.OPPRETTET)?void 0:J.OPPFYLT===r;return{erVilkarOk:i,avslagskode:i===!1&&(s!=null&&s.avslagsarsak)?s.avslagsarsak:void 0}};B.transformValues=n=>n.erVilkarOk?{erVilkarOk:n.erVilkarOk}:{erVilkarOk:n.erVilkarOk,avslagskode:n.avslagskode};B.__docgenInfo={description:`VilkarResultPicker

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},customVilkarIkkeOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},customVilkarOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},skalKunneInnvilge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},validatorsForRadioOptions:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: boolean) => any)[]"},description:""}}};const je="_vilkar_t9zom_1",xe="_aksjonspunktMargin_t9zom_5",Te="_godkjentImage_t9zom_10",qe="_avslattImage_t9zom_16",b={vilkar:je,aksjonspunktMargin:xe,godkjentImage:Te,avslattImage:qe},x=v(f),he=({lovReferanse:n,title:r,originalErVilkarOk:s,isAksjonspunktOpen:a,readOnlySubmitButton:i,readOnly:t,rendreFakta:u,isDirty:k,erIkkeGodkjentAvBeslutter:l,isSubmitting:p,children:g})=>e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:[e.jsxs(c,{children:[s!==void 0&&e.jsxs(d,{children:[s&&e.jsx(ee,{className:b.godkjentImage}),!s&&e.jsx(G,{className:b.avslattImage})]}),e.jsx(d,{children:e.jsx(X,{size:"small",children:r})}),n&&e.jsx(d,{children:e.jsx(Z,{className:b.vilkar,children:n})})]}),e.jsx(c,{children:e.jsxs(d,{children:[s&&e.jsxs(e.Fragment,{children:[e.jsx(o,{eightPx:!0}),e.jsx(q,{size:"small",children:x.formatMessage({id:"ProsessPanelTemplate.ErOppfylt"})})]}),s===!1&&e.jsxs(e.Fragment,{children:[e.jsx(o,{eightPx:!0}),e.jsx(q,{size:"small",children:x.formatMessage({id:"ProsessPanelTemplate.ErIkkeOppfylt"})})]}),!a&&s===void 0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{eightPx:!0}),e.jsx(y,{size:"small",children:x.formatMessage({id:"ProsessPanelTemplate.IkkeBehandlet"})})]})]})})]}),a&&e.jsx(o,{eightPx:!0}),e.jsxs(M,{className:b.aksjonspunktMargin,erAksjonspunktApent:a,erIkkeGodkjentAvBeslutter:l,children:[g,!t&&e.jsx(o,{sixteenPx:!0}),e.jsx(S,{isReadOnly:t,isSubmittable:!i,isDirty:k,isSubmitting:p})]}),u&&e.jsxs(e.Fragment,{children:[e.jsx(o,{sixteenPx:!0}),u()]})]});he.__docgenInfo={description:"",methods:[],displayName:"ProsessPanelTemplate",props:{title:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},originalErVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},rendreFakta:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const Pe="_aksjonspunktMargin_pxm8x_1",Be="_exclamationmarkIcon_pxm8x_6",I={aksjonspunktMargin:Pe,exclamationmarkIcon:Be},m=v(f),Re=O(3),Ie=F(1500),Ae=n=>r=>r!==void 0||n,Ve=({erOverstyrt:n,isSolvable:r,erVilkarOk:s,hasAksjonspunkt:a,overrideReadOnly:i,isSubmitting:t,isPristine:u,toggleAv:k,erIkkeGodkjentAvBeslutter:l,children:p})=>{const{formState:{isDirty:g}}=h(),w=Ae(g);return e.jsxs(M,{className:I.aksjonspunktMargin,erAksjonspunktApent:n,erIkkeGodkjentAvBeslutter:l,children:[e.jsx(q,{size:"medium",children:m.formatMessage({id:"OverstyringPanel.AutomatiskVurdering"})}),e.jsx(o,{eightPx:!0}),p,(n||a)&&e.jsxs(e.Fragment,{children:[e.jsx(o,{eightPx:!0}),e.jsx(A,{name:"begrunnelse",label:m.formatMessage({id:"OverstyringPanel.Vilkar"}),validate:[w,Re,Ie,_],maxLength:1500,readOnly:i||!n})]}),e.jsx(o,{sixteenPx:!0}),!n&&s!==void 0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{fourPx:!0}),e.jsxs(c,{children:[e.jsx(d,{children:e.jsx(D,{})}),e.jsx(d,{children:e.jsx(y,{size:"small",children:m.formatMessage({id:"OverstyringPanel.Endret"})})})]})]}),n&&e.jsxs(N,{children:[e.jsxs(c,{children:[e.jsx(d,{children:e.jsx(ne,{className:I.exclamationmarkIcon})}),e.jsx(d,{children:e.jsx(y,{size:"small",children:m.formatMessage({id:"OverstyringPanel.Unntakstilfeller"})})})]}),e.jsx(o,{sixteenPx:!0}),e.jsxs(c,{children:[e.jsx(d,{children:!i&&e.jsx(T,{size:"small",variant:"primary",loading:t,disabled:t||!r||u,children:m.formatMessage({id:"OverstyringPanel.ConfirmInformation"})})}),e.jsx(d,{children:e.jsx(T,{size:"small",variant:"secondary",loading:t,disabled:t,onClick:k,type:"button",children:m.formatMessage({id:"OverstyringPanel.Avbryt"})})})]})]})]})};Ve.__docgenInfo={description:"",methods:[],displayName:"OverstyringPanel",props:{erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},isSolvable:{required:!0,tsType:{name:"boolean"},description:""},erVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},hasAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},overrideReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isPristine:{required:!0,tsType:{name:"boolean"},description:""},toggleAv:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{Ve as O,P,B as V,S as a,he as b};
