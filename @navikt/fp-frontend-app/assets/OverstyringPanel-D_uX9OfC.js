import{t as f,j as e,d as C,G as z,c as P,B as y,S as E,H as $,D,L as q}from"./index.es-BXXi9mI1.js";import{u as B,M as F,p as M,Z as O,k as S,I as N,e as U,a as T,b as G,F as H,c as Y,P as W,d as X}from"./AppIndex.stories-Dp2nsx9g.js";import{r as Z}from"./index-CDs2tPxN.js";import{y as i,W as _,H as m,L as u,b as K,c as J,$ as w,q as Q,S as ee}from"./index.es-B7NCz9P5.js";import{H as ne}from"./index.es-zhgnUGpN.js";import{v as se}from"./ProsessDefaultInitPanel-DwVGPThv.js";const Ne={OPPRETTET:"OPPR",UTFORT:"UTFO",AVBRUTT:"AVBR"},x={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.VilkarDato":"Dato for opphør av medlemskapet","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},re="_explanationTextarea_hw8s7_1",ae="_begrunnelseTextField_hw8s7_6",te={explanationTextarea:re,begrunnelseTextField:ae},ie=f(x),le=S(3),oe=N(2e3),ue=n=>n?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",de=n=>r=>r!==void 0||n,I=({readOnly:n,text:r,useAllWidth:s=!1,notRequired:a=!1})=>{const{formState:{isDirty:l}}=B(),t=a?()=>!1:de(l);return e.jsx("div",{className:s?"":te.begrunnelseTextField,children:e.jsx(F,{name:"begrunnelse",label:r||ie.formatMessage({id:ue(n)}),validate:[M(t),le,oe,O],maxLength:2e3,readOnly:n,parse:C})})},ge=n=>n.length>0&&n[0].begrunnelse?n[0].begrunnelse:"";I.buildInitialValues=n=>({begrunnelse:z(ge(n))});I.transformValues=n=>({begrunnelse:n.begrunnelse});I.__docgenInfo={description:`ProsessStegBegrunnelseTextField

Presentasjonskomponent. Lar den NAV-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"any"}}}],displayName:"ProsessStegBegrunnelseTextField",props:{useAllWidth:{defaultValue:{value:"false",computed:!1},required:!1},notRequired:{defaultValue:{value:"false",computed:!1},required:!1}}};const me=f(x),ke=(n,r,s,a)=>!s&&!r||n?!0:a===void 0?!s:!s&&a||a,L=({isReadOnly:n,isSubmittable:r,isSubmitting:s,isDirty:a,text:l,onClick:t,hasEmptyRequiredFields:d})=>n?null:e.jsx(P,{size:"small",variant:"primary",loading:s,disabled:ke(s,r,a,d),onClick:t||U,type:t?"button":"submit",children:l||me.formatMessage({id:"SubmitButton.ConfirmInformation"})});L.__docgenInfo={description:"ProsessStegSubmitButton",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const ce="_container_10499_1",pe="_godkjentImage_10499_5",ve="_avslattImage_10499_11",ye="_selectBredde_10499_17",j={container:ce,godkjentImage:pe,avslattImage:ve,selectBredde:ye},V=f(x),fe=(n,r)=>()=>n===!1&&!r,R=({avslagsarsaker:n,customVilkarIkkeOppfyltText:r,customVilkarOppfyltText:s,readOnly:a,erMedlemskapsPanel:l=!1,skalKunneInnvilge:t=!0,validatorsForRadioOptions:d})=>{const{getValues:k,watch:c}=B(),o=c("erVilkarOk"),p=Z.useMemo(()=>d?d.concat(T):[T],[d]);return e.jsxs("div",{className:j.container,children:[e.jsx(i,{sixteenPx:!0}),a&&o!==void 0&&e.jsxs(_,{children:[e.jsxs(m,{children:[e.jsxs(u,{children:[o&&e.jsx(K,{className:j.godkjentImage}),!o&&e.jsx(G,{className:j.avslattImage})]}),e.jsxs(u,{children:[o&&e.jsx(y,{size:"small",children:s}),!o&&e.jsx(y,{size:"small",children:r})]})]}),e.jsx(i,{eightPx:!0})]}),(!a||o===void 0)&&e.jsx(H,{name:"erVilkarOk",validate:p,isReadOnly:a,isTrueOrFalseSelection:!0,radios:[{value:"true",label:s,disabled:!t},{value:"false",label:r}]}),o!==void 0&&!o&&n&&e.jsxs(e.Fragment,{children:[e.jsx(i,{sixteenPx:!0}),e.jsx(Y,{name:"avslagCode",label:V.formatMessage({id:"VilkarResultPicker.Arsak"}),selectValues:n.map(v=>e.jsx("option",{value:v.kode,children:v.navn},v.kode)),readOnly:a,className:j.selectBredde,validate:[M(fe(o,k("avslagCode")))]}),l&&e.jsxs(e.Fragment,{children:[e.jsx(i,{sixteenPx:!0}),e.jsx(W,{name:"avslagDato",label:V.formatMessage({id:"VilkarResultPicker.VilkarDato"}),isReadOnly:a,validate:[T,X]})]})]}),e.jsx(i,{sixteenPx:!0})]})};R.buildInitialValues=(n,r,s)=>{const l=n.some(t=>t.status===ne.OPPRETTET)?void 0:se.OPPFYLT===r;return{erVilkarOk:l,avslagCode:l===!1&&s&&s.avslagsarsak?s.avslagsarsak:void 0}};R.transformValues=n=>n.erVilkarOk?{erVilkarOk:n.erVilkarOk}:{erVilkarOk:n.erVilkarOk,avslagskode:n.avslagCode,avslagDato:n.avslagDato};R.__docgenInfo={description:`VilkarResultPicker

Presentasjonskomponent. Lar NAV-ansatt velge om vilkåret skal oppfylles eller avvises.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,alias:"Behandlingsresultat"}}],returns:{type:{name:"signature",type:"object",raw:`{
  erVilkarOk?: boolean;
  avslagCode?: string;
  avslagDato?: string;
}`,signature:{properties:[{key:"erVilkarOk",value:{name:"boolean",required:!1}},{key:"avslagCode",value:{name:"string",required:!1}},{key:"avslagDato",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null}],displayName:"VilkarResultPicker",props:{erMedlemskapsPanel:{defaultValue:{value:"false",computed:!1},required:!1},skalKunneInnvilge:{defaultValue:{value:"true",computed:!1},required:!1}}};const xe="_vilkar_t9zom_1",je="_aksjonspunktMargin_t9zom_5",be="_godkjentImage_t9zom_10",Te="_avslattImage_t9zom_16",b={vilkar:xe,aksjonspunktMargin:je,godkjentImage:be,avslattImage:Te},h=f(x),he=({lovReferanse:n,title:r,originalErVilkarOk:s,isAksjonspunktOpen:a,readOnlySubmitButton:l,readOnly:t,rendreFakta:d,isDirty:k,erIkkeGodkjentAvBeslutter:c,isSubmitting:o,children:p})=>e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[e.jsxs(m,{children:[s!==void 0&&e.jsxs(u,{children:[s&&e.jsx(E,{className:b.godkjentImage}),!s&&e.jsx(J,{className:b.avslattImage})]}),e.jsx(u,{children:e.jsx($,{size:"small",children:r})}),n&&e.jsx(u,{children:e.jsx(D,{className:b.vilkar,children:n})})]}),e.jsx(m,{children:e.jsxs(u,{children:[s&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsx(q,{size:"small",children:h.formatMessage({id:"ProsessPanelTemplate.ErOppfylt"})})]}),s===!1&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsx(q,{size:"small",children:h.formatMessage({id:"ProsessPanelTemplate.ErIkkeOppfylt"})})]}),!a&&s===void 0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsx(y,{size:"small",children:h.formatMessage({id:"ProsessPanelTemplate.IkkeBehandlet"})})]})]})})]}),a&&e.jsx(i,{eightPx:!0}),e.jsxs(w,{className:b.aksjonspunktMargin,erAksjonspunktApent:a,erIkkeGodkjentAvBeslutter:c,children:[p,!t&&e.jsx(i,{sixteenPx:!0}),e.jsx(L,{isReadOnly:t,isSubmittable:!l,isDirty:k,isSubmitting:o})]}),d&&e.jsxs(e.Fragment,{children:[e.jsx(i,{sixteenPx:!0}),d()]})]});he.__docgenInfo={description:"",methods:[],displayName:"ProsessPanelTemplate",props:{title:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},originalErVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},rendreFakta:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const Pe="_aksjonspunktMargin_pxm8x_1",qe="_exclamationmarkIcon_pxm8x_6",A={aksjonspunktMargin:Pe,exclamationmarkIcon:qe},g=f(x),Be=S(3),_e=N(1500),Ie=n=>r=>r!==void 0||n,Re=({erOverstyrt:n,isSolvable:r,erVilkarOk:s,hasAksjonspunkt:a,overrideReadOnly:l,isSubmitting:t,isPristine:d,toggleAv:k,erIkkeGodkjentAvBeslutter:c,children:o})=>{const{formState:{isDirty:p}}=B(),v=Ie(p);return e.jsxs(w,{className:A.aksjonspunktMargin,erAksjonspunktApent:n,erIkkeGodkjentAvBeslutter:c,children:[e.jsx(q,{size:"small",children:g.formatMessage({id:"OverstyringPanel.AutomatiskVurdering"})}),e.jsx(i,{eightPx:!0}),o,(n||a)&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsx(F,{name:"begrunnelse",label:g.formatMessage({id:"OverstyringPanel.Vilkar"}),validate:[v,Be,_e,O],maxLength:1500,readOnly:l||!n})]}),e.jsx(i,{sixteenPx:!0}),!n&&s!==void 0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{fourPx:!0}),e.jsxs(m,{children:[e.jsx(u,{children:e.jsx(Q,{})}),e.jsx(u,{children:e.jsx(y,{size:"small",children:g.formatMessage({id:"OverstyringPanel.Endret"})})})]})]}),n&&e.jsxs(_,{children:[e.jsxs(m,{children:[e.jsx(u,{children:e.jsx(ee,{className:A.exclamationmarkIcon})}),e.jsx(u,{children:e.jsx(y,{size:"small",children:g.formatMessage({id:"OverstyringPanel.Unntakstilfeller"})})})]}),e.jsx(i,{sixteenPx:!0}),e.jsxs(m,{children:[e.jsx(u,{children:!l&&e.jsx(P,{size:"small",variant:"primary",loading:t,disabled:t||!r||d,children:g.formatMessage({id:"OverstyringPanel.ConfirmInformation"})})}),e.jsx(u,{children:e.jsx(P,{size:"small",variant:"secondary",loading:t,disabled:t,onClick:k,type:"button",children:g.formatMessage({id:"OverstyringPanel.Avbryt"})})})]})]})]})};Re.__docgenInfo={description:"",methods:[],displayName:"OverstyringPanel",props:{erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},isSolvable:{required:!0,tsType:{name:"boolean"},description:""},erVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},hasAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},overrideReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isPristine:{required:!0,tsType:{name:"boolean"},description:""},toggleAv:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{Re as O,I as P,R as V,Ne as a,L as b,he as c};
