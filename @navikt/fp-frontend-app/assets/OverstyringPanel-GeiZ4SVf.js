import{j as e,a7 as O,bG as S,y as I,G as h,z as x,b as c,m as D,a8 as F,v as V}from"./iframe-Blqw99ZU.js";import{a as A,O as P,F as L,R as B,M}from"./index.es-LPRZsVdL.js";import{b as U}from"./index-CDrzyq1i.js";import{V as z}from"./vilkarUtfallType-vN0hVpa7.js";import{b as j,V as T,H as m,B as v,a as $,D as C,L as N}from"./VStack-CqNiGn5F.js";import{S as Y}from"./Checkmark-C9f_EHs_.js";import{S as H}from"./TotrinnskontrollIndex-BRz0Ue6-.js";import{S as J,U as G,n as X}from"./index.es-B0wpsRQ8.js";import{S as W}from"./CheckmarkCircleFill-wuowNh_v.js";import{S as Q}from"./ExclamationmarkTriangleFill-BWnrhqcw.js";const Z="_begrunnelseTextField_hw8s7_6",ee={begrunnelseTextField:Z},y={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},ne=c(y),ae=I(3),se=h(2e3),re=n=>n?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",te=n=>s=>s!==void 0||n,R=({readOnly:n,text:s,useAllWidth:a=!1,notRequired:r=!1})=>{const{formState:{isDirty:l},control:t}=A(),o=r?()=>!1:te(l);return e.jsx("div",{className:a?"":ee.begrunnelseTextField,children:e.jsx(P,{name:"begrunnelse",control:t,label:s??ne.formatMessage({id:re(n)}),validate:[S(o),ae,se,x],maxLength:2e3,readOnly:n,parse:O})})},le=n=>n.length>0&&n[0].begrunnelse?n[0].begrunnelse:"";R.buildInitialValues=n=>({begrunnelse:D(le(n))});R.transformValues=n=>({begrunnelse:n.begrunnelse});R.__docgenInfo={description:`ProsessStegBegrunnelseTextField

Presentasjonskomponent. Lar den Nav-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ie=c(y),oe=(n,s,a,r)=>!a&&!s||n?!0:r===void 0?!a:!a&&r||r,w=({isReadOnly:n,isSubmittable:s,isSubmitting:a,isDirty:r,text:l,onClick:t,hasEmptyRequiredFields:o})=>n?null:e.jsx("div",{children:e.jsx(j,{size:"small",variant:"primary",loading:a,disabled:oe(a,s,r,o),onClick:t||F,type:t?"button":"submit",children:l??ie.formatMessage({id:"SubmitButton.ConfirmInformation"})})});w.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const ue="_godkjentImage_bo2wj_1",de="_avslattImage_bo2wj_7",me="_selectBredde_bo2wj_13",b={godkjentImage:ue,avslattImage:de,selectBredde:me},ke=c(y),ge=(n,s)=>()=>n===!1&&!s,pe=n=>n.toSorted((s,a)=>s.navn.localeCompare(a.navn)),_=({avslagsarsaker:n,customVilkarIkkeOppfyltText:s,customVilkarOppfyltText:a,readOnly:r,skalKunneInnvilge:l=!0,validatorsForRadioOptions:t})=>{const{getValues:o,watch:k,control:u}=A(),i=k("erVilkarOk"),g=t?t.concat(V):[V];return e.jsxs(T,{gap:"space-16",paddingInline:"4",children:[r&&i!==void 0&&e.jsxs(m,{gap:"space-8",children:[i&&e.jsx(Y,{className:b.godkjentImage}),!i&&e.jsx(H,{className:b.avslattImage}),i&&e.jsx(v,{size:"small",children:a}),!i&&e.jsx(v,{size:"small",children:s})]}),(!r||i===void 0)&&e.jsxs(L,{name:"erVilkarOk",control:u,validate:g,isReadOnly:r,children:[e.jsx(B,{value:!0,size:"small",disabled:!l,children:a}),e.jsx(B,{value:!1,size:"small",children:s})]}),i!==void 0&&!i&&n&&e.jsx(M,{name:"avslagskode",control:u,label:ke.formatMessage({id:"VilkarResultPicker.Arsak"}),selectValues:pe(n||[]).map(p=>e.jsx("option",{value:p.kode,children:p.navn},p.kode)),readOnly:r,className:b.selectBredde,validate:[S(ge(i,o("avslagskode")))]})]})};_.buildInitialValues=(n,s,a)=>{const l=n.some(t=>t.status===U.OPPRETTET)?void 0:z.OPPFYLT===s;return{erVilkarOk:l,avslagskode:l===!1&&a?.avslagsarsak?a.avslagsarsak:void 0}};_.transformValues=n=>n.erVilkarOk?{erVilkarOk:n.erVilkarOk}:{erVilkarOk:n.erVilkarOk,avslagskode:n.avslagskode};_.__docgenInfo={description:`VilkarResultPicker

Presentasjonskomponent. Lar Nav-ansatt velge om vilkåret skal oppfylles eller avvises.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]"}},{name:"status",optional:!1,type:{name:"string"}},{name:"behandlingsresultat",optional:!0,type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,alias:"Behandlingsresultat"}}],returns:{type:{name:"signature",type:"object",raw:`{
  erVilkarOk?: boolean;
  avslagskode?: string;
}`,signature:{properties:[{key:"erVilkarOk",value:{name:"boolean",required:!1}},{key:"avslagskode",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  erVilkarOk?: boolean;
  avslagskode?: string;
}`,signature:{properties:[{key:"erVilkarOk",value:{name:"boolean",required:!1}},{key:"avslagskode",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:null}],displayName:"VilkarResultPicker",props:{avslagsarsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"},description:""},customVilkarIkkeOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},customVilkarOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},skalKunneInnvilge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},validatorsForRadioOptions:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number | boolean) => string | null | undefined)[]"},description:""}}};const ve="_vilkar_1ciy8_1",ce="_aksjonspunktMargin_1ciy8_5",ye="_godkjentImage_1ciy8_10",Ee="_avslattImage_1ciy8_16",E={vilkar:ve,aksjonspunktMargin:ce,godkjentImage:ye,avslattImage:Ee},f=c(y),Te=({lovReferanse:n,title:s,originalErVilkarOk:a,isAksjonspunktOpen:r,readOnlySubmitButton:l,readOnly:t,rendreFakta:o,isDirty:k,erIkkeGodkjentAvBeslutter:u,isSubmitting:i,children:g})=>e.jsxs(T,{gap:"space-16",children:[e.jsxs(m,{gap:"space-8",children:[a!==void 0&&e.jsxs(e.Fragment,{children:[a&&e.jsx(W,{className:E.godkjentImage}),!a&&e.jsx(J,{className:E.avslattImage})]}),e.jsx($,{size:"small",level:"3",children:s}),n&&e.jsx(C,{className:E.vilkar,children:n})]}),e.jsxs(m,{gap:"space-8",children:[a&&e.jsx(N,{size:"small",children:f.formatMessage({id:"ProsessPanelTemplate.ErOppfylt"})}),a===!1&&e.jsx(N,{size:"small",children:f.formatMessage({id:"ProsessPanelTemplate.ErIkkeOppfylt"})}),!r&&a===void 0&&e.jsx(v,{size:"small",children:f.formatMessage({id:"ProsessPanelTemplate.IkkeBehandlet"})})]}),e.jsx(G,{className:E.aksjonspunktMargin,erAksjonspunktApent:r,erIkkeGodkjentAvBeslutter:u,children:e.jsxs(T,{gap:"space-16",children:[e.jsx("div",{children:g}),e.jsx(w,{isReadOnly:t,isSubmittable:!l,isDirty:k,isSubmitting:i})]})}),o?.()]});Te.__docgenInfo={description:"",methods:[],displayName:"ProsessPanelTemplate",props:{title:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},originalErVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},rendreFakta:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const be="_aksjonspunktMargin_15w18_1",fe="_exclamationmarkIcon_15w18_6",q={aksjonspunktMargin:be,exclamationmarkIcon:fe},d=c(y),Ve=I(3),je=h(1500),Ne=n=>s=>s!==void 0||n?V(s):void 0,Ae=({erOverstyrt:n,isSolvable:s,erVilkarOk:a,hasAksjonspunkt:r,overrideReadOnly:l,isSubmitting:t,isPristine:o,toggleAv:k,erIkkeGodkjentAvBeslutter:u,children:i})=>{const{formState:{isDirty:g},control:p}=A(),K=Ne(g);return e.jsx(G,{className:q.aksjonspunktMargin,erAksjonspunktApent:n,erIkkeGodkjentAvBeslutter:u,children:e.jsxs(T,{gap:"space-16",children:[e.jsx(N,{size:"medium",children:d.formatMessage({id:"OverstyringPanel.AutomatiskVurdering"})}),e.jsx("div",{children:i}),(n||r)&&e.jsx(P,{name:"begrunnelse",control:p,label:d.formatMessage({id:"OverstyringPanel.Vilkar"}),validate:[K,Ve,je,x],maxLength:1500,readOnly:l||!n}),!n&&a!==void 0&&e.jsxs(m,{gap:"space-8",children:[e.jsx(X,{}),e.jsx(v,{size:"small",children:d.formatMessage({id:"OverstyringPanel.Endret"})})]}),n&&e.jsxs(e.Fragment,{children:[e.jsxs(m,{gap:"space-8",children:[e.jsx(Q,{className:q.exclamationmarkIcon}),e.jsx(v,{size:"small",children:d.formatMessage({id:"OverstyringPanel.Unntakstilfeller"})})]}),e.jsxs(m,{gap:"space-8",children:[!l&&e.jsx(j,{size:"small",variant:"primary",loading:t,disabled:t||!s||o,children:d.formatMessage({id:"OverstyringPanel.ConfirmInformation"})}),e.jsx(j,{size:"small",variant:"secondary",loading:t,disabled:t,onClick:k,type:"button",children:d.formatMessage({id:"OverstyringPanel.Avbryt"})})]})]})]})})};Ae.__docgenInfo={description:"",methods:[],displayName:"OverstyringPanel",props:{erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},isSolvable:{required:!0,tsType:{name:"boolean"},description:""},erVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},hasAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},overrideReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isPristine:{required:!0,tsType:{name:"boolean"},description:""},toggleAv:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{Ae as O,R as P,_ as V,w as a,Te as b};
