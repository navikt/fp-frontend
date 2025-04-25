import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as x,N as w,r as V,b as A,o as I,c as _,E as S,e as R,M as F,Y as E}from"./index.es-CS8yOkhZ.js";import{F as L,r as c,C as z,S as C,c as $,G as O,o as G}from"./index.es-B9ql0pPv.js";import{r as U}from"./index-mMUbb89k.js";import{A as Y}from"./aksjonspunktStatus-xM4O_ZUY.js";import{h as T,V as f,f as m,g as p,H as D,E as H,L as q}from"./withPanelData-COqLCZ81.js";import{V as K}from"./BehandlingHenlagtPanel-DacdsGF9.js";import{S as X}from"./TotrinnskontrollIndex-BC8Ht1_M.js";import{S as W}from"./CheckmarkCircleFill-Ds55LFTu.js";import{S as J}from"./ExclamationmarkTriangleFill-NvviiUZ_.js";const Q="_begrunnelseTextField_hw8s7_6",Z={begrunnelseTextField:Q},v={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},ee=c(v),ne=A(3),re=I(2e3),se=n=>n?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",ae=n=>s=>s!==void 0||n,h=({readOnly:n,text:s,useAllWidth:r=!1,notRequired:a=!1})=>{const{formState:{isDirty:l}}=x(),t=a?()=>!1:ae(l);return e.jsx("div",{className:r?"":Z.begrunnelseTextField,children:e.jsx(w,{name:"begrunnelse",label:s??ee.formatMessage({id:se(n)}),validate:[V(t),ne,re,_],maxLength:2e3,readOnly:n,parse:L})})},te=n=>n.length>0&&n[0].begrunnelse?n[0].begrunnelse:"";h.buildInitialValues=n=>({begrunnelse:z(te(n))});h.transformValues=n=>({begrunnelse:n.begrunnelse});h.__docgenInfo={description:`ProsessStegBegrunnelseTextField

Presentasjonskomponent. Lar den Nav-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const le=c(v),ie=(n,s,r,a)=>!r&&!s||n?!0:a===void 0?!r:!r&&a||a,M=({isReadOnly:n,isSubmittable:s,isSubmitting:r,isDirty:a,text:l,onClick:t,hasEmptyRequiredFields:o})=>n?null:e.jsx("div",{children:e.jsx(T,{size:"small",variant:"primary",loading:r,disabled:ie(r,s,a,o),onClick:t||S,type:t?"button":"submit",children:l??le.formatMessage({id:"SubmitButton.ConfirmInformation"})})});M.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const oe="_godkjentImage_17qk2_1",ue="_avslattImage_17qk2_7",de="_selectBredde_17qk2_13",b={godkjentImage:oe,avslattImage:ue,selectBredde:de},me=c(v),ge=(n,s)=>()=>n===!1&&!s,ke=[],pe=n=>n.toSorted((s,r)=>s.navn.localeCompare(r.navn)),P=({avslagsarsaker:n,customVilkarIkkeOppfyltText:s,customVilkarOppfyltText:r,readOnly:a,skalKunneInnvilge:l=!0,validatorsForRadioOptions:t})=>{const{getValues:o,watch:g}=x(),i=g("erVilkarOk"),k=U.useMemo(()=>t?t.concat(R):[R],[t]);return e.jsxs(f,{gap:"4",paddingInline:"4",children:[a&&i!==void 0&&e.jsxs(m,{gap:"2",children:[i&&e.jsx(C,{className:b.godkjentImage}),!i&&e.jsx(X,{className:b.avslattImage}),i&&e.jsx(p,{size:"small",children:r}),!i&&e.jsx(p,{size:"small",children:s})]}),(!a||i===void 0)&&e.jsx(F,{name:"erVilkarOk",validate:k,isReadOnly:a,isTrueOrFalseSelection:!0,radios:[{value:"true",label:r,disabled:!l},{value:"false",label:s}]}),i!==void 0&&!i&&n&&e.jsx(E,{name:"avslagskode",label:me.formatMessage({id:"VilkarResultPicker.Arsak"}),selectValues:pe(n||ke).map(u=>e.jsx("option",{value:u.kode,children:u.navn},u.kode)),readOnly:a,className:b.selectBredde,validate:[V(ge(i,o("avslagskode")))]})]})};P.buildInitialValues=(n,s,r)=>{const l=n.some(t=>t.status===Y.OPPRETTET)?void 0:K.OPPFYLT===s;return{erVilkarOk:l,avslagskode:l===!1&&(r!=null&&r.avslagsarsak)?r.avslagsarsak:void 0}};P.transformValues=n=>n.erVilkarOk?{erVilkarOk:n.erVilkarOk}:{erVilkarOk:n.erVilkarOk,avslagskode:n.avslagskode};P.__docgenInfo={description:`VilkarResultPicker

Presentasjonskomponent. Lar Nav-ansatt velge om vilkåret skal oppfylles eller avvises.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]"}},{name:"status",optional:!1,type:{name:"string"}},{name:"behandlingsresultat",optional:!0,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},customVilkarIkkeOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},customVilkarOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},skalKunneInnvilge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},validatorsForRadioOptions:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: boolean) => string | null | undefined)[]"},description:""}}};const ce="_vilkar_t9zom_1",ve="_aksjonspunktMargin_t9zom_5",ye="_godkjentImage_t9zom_10",fe="_avslattImage_t9zom_16",y={vilkar:ce,aksjonspunktMargin:ve,godkjentImage:ye,avslattImage:fe},j=c(v),be=({lovReferanse:n,title:s,originalErVilkarOk:r,isAksjonspunktOpen:a,readOnlySubmitButton:l,readOnly:t,rendreFakta:o,isDirty:g,erIkkeGodkjentAvBeslutter:i,isSubmitting:k,children:u})=>e.jsxs(f,{gap:"4",children:[e.jsxs(m,{gap:"2",children:[r!==void 0&&e.jsxs(e.Fragment,{children:[r&&e.jsx(W,{className:y.godkjentImage}),!r&&e.jsx($,{className:y.avslattImage})]}),e.jsx(D,{size:"small",children:s}),n&&e.jsx(H,{className:y.vilkar,children:n})]}),e.jsxs(m,{gap:"2",children:[r&&e.jsx(q,{size:"small",children:j.formatMessage({id:"ProsessPanelTemplate.ErOppfylt"})}),r===!1&&e.jsx(q,{size:"small",children:j.formatMessage({id:"ProsessPanelTemplate.ErIkkeOppfylt"})}),!a&&r===void 0&&e.jsx(p,{size:"small",children:j.formatMessage({id:"ProsessPanelTemplate.IkkeBehandlet"})})]}),e.jsx(O,{className:y.aksjonspunktMargin,erAksjonspunktApent:a,erIkkeGodkjentAvBeslutter:i,children:e.jsxs(f,{gap:"4",children:[e.jsx("div",{children:u}),e.jsx(M,{isReadOnly:t,isSubmittable:!l,isDirty:g,isSubmitting:k})]})}),o==null?void 0:o()]});be.__docgenInfo={description:"",methods:[],displayName:"ProsessPanelTemplate",props:{title:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},originalErVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},rendreFakta:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const je="_aksjonspunktMargin_pxm8x_1",Te="_exclamationmarkIcon_pxm8x_6",B={aksjonspunktMargin:je,exclamationmarkIcon:Te},d=c(v),qe=A(3),xe=I(1500),he=n=>s=>s!==void 0||n,Pe=({erOverstyrt:n,isSolvable:s,erVilkarOk:r,hasAksjonspunkt:a,overrideReadOnly:l,isSubmitting:t,isPristine:o,toggleAv:g,erIkkeGodkjentAvBeslutter:i,children:k})=>{const{formState:{isDirty:u}}=x(),N=he(u);return e.jsx(O,{className:B.aksjonspunktMargin,erAksjonspunktApent:n,erIkkeGodkjentAvBeslutter:i,children:e.jsxs(f,{gap:"4",children:[e.jsx(q,{size:"medium",children:d.formatMessage({id:"OverstyringPanel.AutomatiskVurdering"})}),e.jsx("div",{children:k}),(n||a)&&e.jsx(w,{name:"begrunnelse",label:d.formatMessage({id:"OverstyringPanel.Vilkar"}),validate:[N,qe,xe,_],maxLength:1500,readOnly:l||!n}),!n&&r!==void 0&&e.jsxs(m,{gap:"2",children:[e.jsx(G,{}),e.jsx(p,{size:"small",children:d.formatMessage({id:"OverstyringPanel.Endret"})})]}),n&&e.jsxs(e.Fragment,{children:[e.jsxs(m,{gap:"2",children:[e.jsx(J,{className:B.exclamationmarkIcon}),e.jsx(p,{size:"small",children:d.formatMessage({id:"OverstyringPanel.Unntakstilfeller"})})]}),e.jsxs(m,{gap:"2",children:[!l&&e.jsx(T,{size:"small",variant:"primary",loading:t,disabled:t||!s||o,children:d.formatMessage({id:"OverstyringPanel.ConfirmInformation"})}),e.jsx(T,{size:"small",variant:"secondary",loading:t,disabled:t,onClick:g,type:"button",children:d.formatMessage({id:"OverstyringPanel.Avbryt"})})]})]})]})})};Pe.__docgenInfo={description:"",methods:[],displayName:"OverstyringPanel",props:{erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},isSolvable:{required:!0,tsType:{name:"boolean"},description:""},erVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},hasAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},overrideReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isPristine:{required:!0,tsType:{name:"boolean"},description:""},toggleAv:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{Pe as O,h as P,P as V,M as a,be as b};
