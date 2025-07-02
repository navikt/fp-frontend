import{j as e,W as w,b as c,m as O}from"./iframe-Cs6twVbq.js";import{b as A,D as B,a4 as S,a as I,o as h,c as x,E as D,t as V,M as F,Y as L}from"./index.es-CmqguzHd.js";import{b as M}from"./index-Bni6Mx7T.js";import{V as U}from"./vilkarUtfallType-vN0hVpa7.js";import{b as N,V as T,H as m,B as v,a as z,D as Y,L as j}from"./VStack-Cbf59n_t.js";import{S as $}from"./Checkmark-Bl-CpGkE.js";import{S as C}from"./TotrinnskontrollIndex-CUdeJr3p.js";import{S as H,U as P,n as J}from"./index.es-YNS18tnB.js";import{S as W}from"./CheckmarkCircleFill-mvV-mB5S.js";import{S as X}from"./ExclamationmarkTriangleFill-D3lkQDUB.js";const Q="_begrunnelseTextField_hw8s7_6",Z={begrunnelseTextField:Q},y={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},ee=c(y),ne=I(3),se=h(2e3),ae=n=>n?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",re=n=>a=>a!==void 0||n,R=({readOnly:n,text:a,useAllWidth:s=!1,notRequired:r=!1})=>{const{formState:{isDirty:l},control:t}=A(),o=r?()=>!1:re(l);return e.jsx("div",{className:s?"":Z.begrunnelseTextField,children:e.jsx(B,{name:"begrunnelse",control:t,label:a??ee.formatMessage({id:ae(n)}),validate:[S(o),ne,se,x],maxLength:2e3,readOnly:n,parse:w})})},te=n=>n.length>0&&n[0].begrunnelse?n[0].begrunnelse:"";R.buildInitialValues=n=>({begrunnelse:O(te(n))});R.transformValues=n=>({begrunnelse:n.begrunnelse});R.__docgenInfo={description:`ProsessStegBegrunnelseTextField

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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const le=c(y),ie=(n,a,s,r)=>!s&&!a||n?!0:r===void 0?!s:!s&&r||r,G=({isReadOnly:n,isSubmittable:a,isSubmitting:s,isDirty:r,text:l,onClick:t,hasEmptyRequiredFields:o})=>n?null:e.jsx("div",{children:e.jsx(N,{size:"small",variant:"primary",loading:s,disabled:ie(s,a,r,o),onClick:t||D,type:t?"button":"submit",children:l??le.formatMessage({id:"SubmitButton.ConfirmInformation"})})});G.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const oe="_godkjentImage_17qk2_1",ue="_avslattImage_17qk2_7",de="_selectBredde_17qk2_13",b={godkjentImage:oe,avslattImage:ue,selectBredde:de},me=c(y),ke=(n,a)=>()=>n===!1&&!a,ge=n=>n.toSorted((a,s)=>a.navn.localeCompare(s.navn)),_=({avslagsarsaker:n,customVilkarIkkeOppfyltText:a,customVilkarOppfyltText:s,readOnly:r,skalKunneInnvilge:l=!0,validatorsForRadioOptions:t})=>{const{getValues:o,watch:k,control:u}=A(),i=k("erVilkarOk"),g=t?t.concat(V):[V];return e.jsxs(T,{gap:"4",paddingInline:"4",children:[r&&i!==void 0&&e.jsxs(m,{gap:"2",children:[i&&e.jsx($,{className:b.godkjentImage}),!i&&e.jsx(C,{className:b.avslattImage}),i&&e.jsx(v,{size:"small",children:s}),!i&&e.jsx(v,{size:"small",children:a})]}),(!r||i===void 0)&&e.jsx(F,{name:"erVilkarOk",control:u,validate:g,isReadOnly:r,isTrueOrFalseSelection:!0,radios:[{value:"true",label:s,disabled:!l},{value:"false",label:a}]}),i!==void 0&&!i&&n&&e.jsx(L,{name:"avslagskode",control:u,label:me.formatMessage({id:"VilkarResultPicker.Arsak"}),selectValues:ge(n||[]).map(p=>e.jsx("option",{value:p.kode,children:p.navn},p.kode)),readOnly:r,className:b.selectBredde,validate:[S(ke(i,o("avslagskode")))]})]})};_.buildInitialValues=(n,a,s)=>{const l=n.some(t=>t.status===M.OPPRETTET)?void 0:U.OPPFYLT===a;return{erVilkarOk:l,avslagskode:l===!1&&(s!=null&&s.avslagsarsak)?s.avslagsarsak:void 0}};_.transformValues=n=>n.erVilkarOk?{erVilkarOk:n.erVilkarOk}:{erVilkarOk:n.erVilkarOk,avslagskode:n.avslagskode};_.__docgenInfo={description:`VilkarResultPicker

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
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"},description:""},customVilkarIkkeOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},customVilkarOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},skalKunneInnvilge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},validatorsForRadioOptions:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: boolean) => string | null | undefined)[]"},description:""}}};const pe="_vilkar_t9zom_1",ve="_aksjonspunktMargin_t9zom_5",ce="_godkjentImage_t9zom_10",ye="_avslattImage_t9zom_16",E={vilkar:pe,aksjonspunktMargin:ve,godkjentImage:ce,avslattImage:ye},f=c(y),Ee=({lovReferanse:n,title:a,originalErVilkarOk:s,isAksjonspunktOpen:r,readOnlySubmitButton:l,readOnly:t,rendreFakta:o,isDirty:k,erIkkeGodkjentAvBeslutter:u,isSubmitting:i,children:g})=>e.jsxs(T,{gap:"4",children:[e.jsxs(m,{gap:"2",children:[s!==void 0&&e.jsxs(e.Fragment,{children:[s&&e.jsx(W,{className:E.godkjentImage}),!s&&e.jsx(H,{className:E.avslattImage})]}),e.jsx(z,{size:"small",children:a}),n&&e.jsx(Y,{className:E.vilkar,children:n})]}),e.jsxs(m,{gap:"2",children:[s&&e.jsx(j,{size:"small",children:f.formatMessage({id:"ProsessPanelTemplate.ErOppfylt"})}),s===!1&&e.jsx(j,{size:"small",children:f.formatMessage({id:"ProsessPanelTemplate.ErIkkeOppfylt"})}),!r&&s===void 0&&e.jsx(v,{size:"small",children:f.formatMessage({id:"ProsessPanelTemplate.IkkeBehandlet"})})]}),e.jsx(P,{className:E.aksjonspunktMargin,erAksjonspunktApent:r,erIkkeGodkjentAvBeslutter:u,children:e.jsxs(T,{gap:"4",children:[e.jsx("div",{children:g}),e.jsx(G,{isReadOnly:t,isSubmittable:!l,isDirty:k,isSubmitting:i})]})}),o==null?void 0:o()]});Ee.__docgenInfo={description:"",methods:[],displayName:"ProsessPanelTemplate",props:{title:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},originalErVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},rendreFakta:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const Te="_aksjonspunktMargin_pxm8x_1",be="_exclamationmarkIcon_pxm8x_6",q={aksjonspunktMargin:Te,exclamationmarkIcon:be},d=c(y),fe=I(3),Ve=h(1500),Ne=n=>a=>a!==void 0||n?V(a):void 0,je=({erOverstyrt:n,isSolvable:a,erVilkarOk:s,hasAksjonspunkt:r,overrideReadOnly:l,isSubmitting:t,isPristine:o,toggleAv:k,erIkkeGodkjentAvBeslutter:u,children:i})=>{const{formState:{isDirty:g},control:p}=A(),K=Ne(g);return e.jsx(P,{className:q.aksjonspunktMargin,erAksjonspunktApent:n,erIkkeGodkjentAvBeslutter:u,children:e.jsxs(T,{gap:"4",children:[e.jsx(j,{size:"medium",children:d.formatMessage({id:"OverstyringPanel.AutomatiskVurdering"})}),e.jsx("div",{children:i}),(n||r)&&e.jsx(B,{name:"begrunnelse",control:p,label:d.formatMessage({id:"OverstyringPanel.Vilkar"}),validate:[K,fe,Ve,x],maxLength:1500,readOnly:l||!n}),!n&&s!==void 0&&e.jsxs(m,{gap:"2",children:[e.jsx(J,{}),e.jsx(v,{size:"small",children:d.formatMessage({id:"OverstyringPanel.Endret"})})]}),n&&e.jsxs(e.Fragment,{children:[e.jsxs(m,{gap:"2",children:[e.jsx(X,{className:q.exclamationmarkIcon}),e.jsx(v,{size:"small",children:d.formatMessage({id:"OverstyringPanel.Unntakstilfeller"})})]}),e.jsxs(m,{gap:"2",children:[!l&&e.jsx(N,{size:"small",variant:"primary",loading:t,disabled:t||!a||o,children:d.formatMessage({id:"OverstyringPanel.ConfirmInformation"})}),e.jsx(N,{size:"small",variant:"secondary",loading:t,disabled:t,onClick:k,type:"button",children:d.formatMessage({id:"OverstyringPanel.Avbryt"})})]})]})]})})};je.__docgenInfo={description:"",methods:[],displayName:"OverstyringPanel",props:{erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},isSolvable:{required:!0,tsType:{name:"boolean"},description:""},erVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},hasAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},overrideReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isPristine:{required:!0,tsType:{name:"boolean"},description:""},toggleAv:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{je as O,R as P,_ as V,G as a,Ee as b};
