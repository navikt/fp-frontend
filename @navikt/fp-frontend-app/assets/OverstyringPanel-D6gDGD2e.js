import{j as e,U as K,b as v,m as w}from"./iframe-CEBl04XH.js";import{a as j,g as q,a4 as B,r as S,f as I,y as h,E as O,e as R,M as D,Y as F}from"./index.es-CBYUX8uU.js";import{b as L}from"./index-Be5VQJ3V.js";import{V as M}from"./vilkarUtfallType-vN0hVpa7.js";import{b as f,V as E,H as m,B as p,a as U,D as z,L as V}from"./VStack-B38_v6_K.js";import{S as $}from"./Checkmark-irBMFSRv.js";import{S as Y}from"./TotrinnskontrollIndex-CVxDBZnL.js";import{S as C,U as x,n as H}from"./index.es-DiGFJCga.js";import{S as J}from"./CheckmarkCircleFill-DSlByi9h.js";import{S as X}from"./ExclamationmarkTriangleFill-DiEgli_V.js";const W="_begrunnelseTextField_hw8s7_6",Q={begrunnelseTextField:W},y={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},Z=v(y),ee=S(3),ne=I(2e3),ae=n=>n?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",se=n=>s=>s!==void 0||n,N=({readOnly:n,text:s,useAllWidth:a=!1,notRequired:r=!1})=>{const{formState:{isDirty:l}}=j(),t=r?()=>!1:se(l);return e.jsx("div",{className:a?"":Q.begrunnelseTextField,children:e.jsx(q,{name:"begrunnelse",label:s??Z.formatMessage({id:ae(n)}),validate:[B(t),ee,ne,h],maxLength:2e3,readOnly:n,parse:K})})},re=n=>n.length>0&&n[0].begrunnelse?n[0].begrunnelse:"";N.buildInitialValues=n=>({begrunnelse:w(re(n))});N.transformValues=n=>({begrunnelse:n.begrunnelse});N.__docgenInfo={description:`ProsessStegBegrunnelseTextField

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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const te=v(y),le=(n,s,a,r)=>!a&&!s||n?!0:r===void 0?!a:!a&&r||r,P=({isReadOnly:n,isSubmittable:s,isSubmitting:a,isDirty:r,text:l,onClick:t,hasEmptyRequiredFields:o})=>n?null:e.jsx("div",{children:e.jsx(f,{size:"small",variant:"primary",loading:a,disabled:le(a,s,r,o),onClick:t||O,type:t?"button":"submit",children:l??te.formatMessage({id:"SubmitButton.ConfirmInformation"})})});P.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const ie="_godkjentImage_17qk2_1",oe="_avslattImage_17qk2_7",ue="_selectBredde_17qk2_13",T={godkjentImage:ie,avslattImage:oe,selectBredde:ue},de=v(y),me=(n,s)=>()=>n===!1&&!s,ke=n=>n.toSorted((s,a)=>s.navn.localeCompare(a.navn)),A=({avslagsarsaker:n,customVilkarIkkeOppfyltText:s,customVilkarOppfyltText:a,readOnly:r,skalKunneInnvilge:l=!0,validatorsForRadioOptions:t})=>{const{getValues:o,watch:k}=j(),i=k("erVilkarOk"),g=t?t.concat(R):[R];return e.jsxs(E,{gap:"4",paddingInline:"4",children:[r&&i!==void 0&&e.jsxs(m,{gap:"2",children:[i&&e.jsx($,{className:T.godkjentImage}),!i&&e.jsx(Y,{className:T.avslattImage}),i&&e.jsx(p,{size:"small",children:a}),!i&&e.jsx(p,{size:"small",children:s})]}),(!r||i===void 0)&&e.jsx(D,{name:"erVilkarOk",validate:g,isReadOnly:r,isTrueOrFalseSelection:!0,radios:[{value:"true",label:a,disabled:!l},{value:"false",label:s}]}),i!==void 0&&!i&&n&&e.jsx(F,{name:"avslagskode",label:de.formatMessage({id:"VilkarResultPicker.Arsak"}),selectValues:ke(n||[]).map(u=>e.jsx("option",{value:u.kode,children:u.navn},u.kode)),readOnly:r,className:T.selectBredde,validate:[B(me(i,o("avslagskode")))]})]})};A.buildInitialValues=(n,s,a)=>{const l=n.some(t=>t.status===L.OPPRETTET)?void 0:M.OPPFYLT===s;return{erVilkarOk:l,avslagskode:l===!1&&(a!=null&&a.avslagsarsak)?a.avslagsarsak:void 0}};A.transformValues=n=>n.erVilkarOk?{erVilkarOk:n.erVilkarOk}:{erVilkarOk:n.erVilkarOk,avslagskode:n.avslagskode};A.__docgenInfo={description:`VilkarResultPicker

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
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"},description:""},customVilkarIkkeOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},customVilkarOppfyltText:{required:!0,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},skalKunneInnvilge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},validatorsForRadioOptions:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: boolean) => string | null | undefined)[]"},description:""}}};const ge="_vilkar_t9zom_1",pe="_aksjonspunktMargin_t9zom_5",ve="_godkjentImage_t9zom_10",ye="_avslattImage_t9zom_16",c={vilkar:ge,aksjonspunktMargin:pe,godkjentImage:ve,avslattImage:ye},b=v(y),ce=({lovReferanse:n,title:s,originalErVilkarOk:a,isAksjonspunktOpen:r,readOnlySubmitButton:l,readOnly:t,rendreFakta:o,isDirty:k,erIkkeGodkjentAvBeslutter:i,isSubmitting:g,children:u})=>e.jsxs(E,{gap:"4",children:[e.jsxs(m,{gap:"2",children:[a!==void 0&&e.jsxs(e.Fragment,{children:[a&&e.jsx(J,{className:c.godkjentImage}),!a&&e.jsx(C,{className:c.avslattImage})]}),e.jsx(U,{size:"small",children:s}),n&&e.jsx(z,{className:c.vilkar,children:n})]}),e.jsxs(m,{gap:"2",children:[a&&e.jsx(V,{size:"small",children:b.formatMessage({id:"ProsessPanelTemplate.ErOppfylt"})}),a===!1&&e.jsx(V,{size:"small",children:b.formatMessage({id:"ProsessPanelTemplate.ErIkkeOppfylt"})}),!r&&a===void 0&&e.jsx(p,{size:"small",children:b.formatMessage({id:"ProsessPanelTemplate.IkkeBehandlet"})})]}),e.jsx(x,{className:c.aksjonspunktMargin,erAksjonspunktApent:r,erIkkeGodkjentAvBeslutter:i,children:e.jsxs(E,{gap:"4",children:[e.jsx("div",{children:u}),e.jsx(P,{isReadOnly:t,isSubmittable:!l,isDirty:k,isSubmitting:g})]})}),o==null?void 0:o()]});ce.__docgenInfo={description:"",methods:[],displayName:"ProsessPanelTemplate",props:{title:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},originalErVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},rendreFakta:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const Ee="_aksjonspunktMargin_pxm8x_1",Te="_exclamationmarkIcon_pxm8x_6",_={aksjonspunktMargin:Ee,exclamationmarkIcon:Te},d=v(y),be=S(3),fe=I(1500),Ve=n=>s=>s!==void 0||n,je=({erOverstyrt:n,isSolvable:s,erVilkarOk:a,hasAksjonspunkt:r,overrideReadOnly:l,isSubmitting:t,isPristine:o,toggleAv:k,erIkkeGodkjentAvBeslutter:i,children:g})=>{const{formState:{isDirty:u}}=j(),G=Ve(u);return e.jsx(x,{className:_.aksjonspunktMargin,erAksjonspunktApent:n,erIkkeGodkjentAvBeslutter:i,children:e.jsxs(E,{gap:"4",children:[e.jsx(V,{size:"medium",children:d.formatMessage({id:"OverstyringPanel.AutomatiskVurdering"})}),e.jsx("div",{children:g}),(n||r)&&e.jsx(q,{name:"begrunnelse",label:d.formatMessage({id:"OverstyringPanel.Vilkar"}),validate:[G,be,fe,h],maxLength:1500,readOnly:l||!n}),!n&&a!==void 0&&e.jsxs(m,{gap:"2",children:[e.jsx(H,{}),e.jsx(p,{size:"small",children:d.formatMessage({id:"OverstyringPanel.Endret"})})]}),n&&e.jsxs(e.Fragment,{children:[e.jsxs(m,{gap:"2",children:[e.jsx(X,{className:_.exclamationmarkIcon}),e.jsx(p,{size:"small",children:d.formatMessage({id:"OverstyringPanel.Unntakstilfeller"})})]}),e.jsxs(m,{gap:"2",children:[!l&&e.jsx(f,{size:"small",variant:"primary",loading:t,disabled:t||!s||o,children:d.formatMessage({id:"OverstyringPanel.ConfirmInformation"})}),e.jsx(f,{size:"small",variant:"secondary",loading:t,disabled:t,onClick:k,type:"button",children:d.formatMessage({id:"OverstyringPanel.Avbryt"})})]})]})]})})};je.__docgenInfo={description:"",methods:[],displayName:"OverstyringPanel",props:{erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},isSolvable:{required:!0,tsType:{name:"boolean"},description:""},erVilkarOk:{required:!1,tsType:{name:"boolean"},description:""},hasAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},overrideReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isPristine:{required:!0,tsType:{name:"boolean"},description:""},toggleAv:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erIkkeGodkjentAvBeslutter:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{je as O,N as P,A as V,P as a,ce as b};
