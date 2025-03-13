import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as x,K as A,r as I,c as V,o as _,N as O,E as M,b as B,J as F,Z as E}from"./index.es-CLQE9z6Q.js";import{l as L,n as c,c as z,S as C,b as $,W as N,d as U}from"./index.es-CYw_Hmgt.js";import{r as G}from"./index-DjhIdADd.js";import{A as Y}from"./aksjonspunktStatus-xM4O_ZUY.js";import{n as T,V as f,H as g,i as p,m as D,a5 as K,L as q}from"./withPanelData-7QOuve2m.js";import{V as H}from"./BehandlingHenlagtPanel-DrneJSn2.js";import{S as W}from"./TotrinnskontrollIndex-CyuGi4Fv.js";import{S as J}from"./CheckmarkCircleFill-DqQUyeI9.js";import{S as X}from"./ExclamationmarkTriangleFill-DXSjTGeG.js";const Z="_begrunnelseTextField_hw8s7_6",Q={begrunnelseTextField:Z},v={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},ee=c(v),ne=V(3),se=_(2e3),re=n=>n?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",ae=n=>r=>r!==void 0||n,h=({readOnly:n,text:r,useAllWidth:s=!1,notRequired:a=!1})=>{const{formState:{isDirty:i}}=x(),t=a?()=>!1:ae(i);return e.jsx("div",{className:s?"":Q.begrunnelseTextField,children:e.jsx(A,{name:"begrunnelse",label:r??ee.formatMessage({id:re(n)}),validate:[I(t),ne,se,O],maxLength:2e3,readOnly:n,parse:L})})},te=n=>n.length>0&&n[0].begrunnelse?n[0].begrunnelse:"";h.buildInitialValues=n=>({begrunnelse:z(te(n))});h.transformValues=n=>({begrunnelse:n.begrunnelse});h.__docgenInfo={description:`ProsessStegBegrunnelseTextField

Presentasjonskomponent. Lar den Nav-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"any"}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ie=c(v),le=(n,r,s,a)=>!s&&!r||n?!0:a===void 0?!s:!s&&a||a,S=({isReadOnly:n,isSubmittable:r,isSubmitting:s,isDirty:a,text:i,onClick:t,hasEmptyRequiredFields:o})=>n?null:e.jsx("div",{children:e.jsx(T,{size:"small",variant:"primary",loading:s,disabled:le(s,r,a,o),onClick:t||M,type:t?"button":"submit",children:i??ie.formatMessage({id:"SubmitButton.ConfirmInformation"})})});S.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const oe="_godkjentImage_17qk2_1",ue="_avslattImage_17qk2_7",de="_selectBredde_17qk2_13",b={godkjentImage:oe,avslattImage:ue,selectBredde:de},ge=c(v),me=(n,r)=>()=>n===!1&&!r,ke=[],pe=n=>n.toSorted((r,s)=>r.navn.localeCompare(s.navn)),P=({avslagsarsaker:n,customVilkarIkkeOppfyltText:r,customVilkarOppfyltText:s,readOnly:a,skalKunneInnvilge:i=!0,validatorsForRadioOptions:t})=>{const{getValues:o,watch:m}=x(),l=m("erVilkarOk"),k=G.useMemo(()=>t?t.concat(B):[B],[t]);return e.jsxs(f,{gap:"4",paddingInline:"4",children:[a&&l!==void 0&&e.jsxs(g,{gap:"2",children:[l&&e.jsx(C,{className:b.godkjentImage}),!l&&e.jsx(W,{className:b.avslattImage}),l&&e.jsx(p,{size:"small",children:s}),!l&&e.jsx(p,{size:"small",children:r})]}),(!a||l===void 0)&&e.jsx(F,{name:"erVilkarOk",validate:k,isReadOnly:a,isTrueOrFalseSelection:!0,radios:[{value:"true",label:s,disabled:!i},{value:"false",label:r}]}),l!==void 0&&!l&&n&&e.jsx(E,{name:"avslagskode",label:ge.formatMessage({id:"VilkarResultPicker.Arsak"}),selectValues:pe(n||ke).map(u=>e.jsx("option",{value:u.kode,children:u.navn},u.kode)),readOnly:a,className:b.selectBredde,validate:[I(me(l,o("avslagskode")))]})]})};P.buildInitialValues=(n,r,s)=>{const i=n.some(t=>t.status===Y.OPPRETTET)?void 0:H.OPPFYLT===r;return{erVilkarOk:i,avslagskode:i===!1&&(s!=null&&s.avslagsarsak)?s.avslagsarsak:void 0}};P.transformValues=n=>n.erVilkarOk?{erVilkarOk:n.erVilkarOk}:{erVilkarOk:n.erVilkarOk,avslagskode:n.avslagskode};P.__docgenInfo={description:`VilkarResultPicker

Presentasjonskomponent. Lar Nav-ansatt velge om vilkåret skal oppfylles eller avvises.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},customVilkarIkkeOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},customVilkarOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},skalKunneInnvilge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},validatorsForRadioOptions:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: boolean) => any)[]"},description:""}}};const ce="_vilkar_t9zom_1",ve="_aksjonspunktMargin_t9zom_5",ye="_godkjentImage_t9zom_10",fe="_avslattImage_t9zom_16",y={vilkar:ce,aksjonspunktMargin:ve,godkjentImage:ye,avslattImage:fe},j=c(v),be=({lovReferanse:n,title:r,originalErVilkarOk:s,isAksjonspunktOpen:a,readOnlySubmitButton:i,readOnly:t,rendreFakta:o,isDirty:m,erIkkeGodkjentAvBeslutter:l,isSubmitting:k,children:u})=>e.jsxs(f,{gap:"4",children:[e.jsxs(g,{gap:"2",children:[s!==void 0&&e.jsxs(e.Fragment,{children:[s&&e.jsx(J,{className:y.godkjentImage}),!s&&e.jsx($,{className:y.avslattImage})]}),e.jsx(D,{size:"small",children:r}),n&&e.jsx(K,{className:y.vilkar,children:n})]}),e.jsxs(g,{gap:"2",children:[s&&e.jsx(q,{size:"small",children:j.formatMessage({id:"ProsessPanelTemplate.ErOppfylt"})}),s===!1&&e.jsx(q,{size:"small",children:j.formatMessage({id:"ProsessPanelTemplate.ErIkkeOppfylt"})}),!a&&s===void 0&&e.jsx(p,{size:"small",children:j.formatMessage({id:"ProsessPanelTemplate.IkkeBehandlet"})})]}),e.jsx(N,{className:y.aksjonspunktMargin,erAksjonspunktApent:a,erIkkeGodkjentAvBeslutter:l,children:e.jsxs(f,{gap:"4",children:[e.jsx("div",{children:u}),e.jsx(S,{isReadOnly:t,isSubmittable:!i,isDirty:m,isSubmitting:k})]})}),o==null?void 0:o()]});be.__docgenInfo={description:"",methods:[],displayName:"ProsessPanelTemplate",props:{title:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},originalErVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},rendreFakta:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const je="_aksjonspunktMargin_pxm8x_1",Te="_exclamationmarkIcon_pxm8x_6",R={aksjonspunktMargin:je,exclamationmarkIcon:Te},d=c(v),qe=V(3),xe=_(1500),he=n=>r=>r!==void 0||n,Pe=({erOverstyrt:n,isSolvable:r,erVilkarOk:s,hasAksjonspunkt:a,overrideReadOnly:i,isSubmitting:t,isPristine:o,toggleAv:m,erIkkeGodkjentAvBeslutter:l,children:k})=>{const{formState:{isDirty:u}}=x(),w=he(u);return e.jsx(N,{className:R.aksjonspunktMargin,erAksjonspunktApent:n,erIkkeGodkjentAvBeslutter:l,children:e.jsxs(f,{gap:"4",children:[e.jsx(q,{size:"medium",children:d.formatMessage({id:"OverstyringPanel.AutomatiskVurdering"})}),e.jsx("div",{children:k}),(n||a)&&e.jsx(A,{name:"begrunnelse",label:d.formatMessage({id:"OverstyringPanel.Vilkar"}),validate:[w,qe,xe,O],maxLength:1500,readOnly:i||!n}),!n&&s!==void 0&&e.jsxs(g,{gap:"2",children:[e.jsx(U,{}),e.jsx(p,{size:"small",children:d.formatMessage({id:"OverstyringPanel.Endret"})})]}),n&&e.jsxs(e.Fragment,{children:[e.jsxs(g,{gap:"2",children:[e.jsx(X,{className:R.exclamationmarkIcon}),e.jsx(p,{size:"small",children:d.formatMessage({id:"OverstyringPanel.Unntakstilfeller"})})]}),e.jsxs(g,{gap:"2",children:[!i&&e.jsx(T,{size:"small",variant:"primary",loading:t,disabled:t||!r||o,children:d.formatMessage({id:"OverstyringPanel.ConfirmInformation"})}),e.jsx(T,{size:"small",variant:"secondary",loading:t,disabled:t,onClick:m,type:"button",children:d.formatMessage({id:"OverstyringPanel.Avbryt"})})]})]})]})})};Pe.__docgenInfo={description:"",methods:[],displayName:"OverstyringPanel",props:{erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},isSolvable:{required:!0,tsType:{name:"boolean"},description:""},erVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},hasAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},overrideReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isPristine:{required:!0,tsType:{name:"boolean"},description:""},toggleAv:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{Pe as O,h as P,P as V,S as a,be as b};
