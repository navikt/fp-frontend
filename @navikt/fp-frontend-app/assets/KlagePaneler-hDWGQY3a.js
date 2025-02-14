import{j as e}from"./jsx-runtime-CLpGMVip.js";import{B as $e}from"./BehandlingContainer-PVsNjVvp.js";import{V as Qe}from"./VergeFaktaInitPanel-18bVaDQE.js";import{r as q}from"./index-B8jnc8p3.js";import{n as L,d as N,k as V,ao as E,al as ke,m as M,J as Ze,V as C,H as B,L as f,h as b,P as ne,B as me,a0 as ve,l as oe}from"./withPanelData-DMLchvk7.js";import{M as i,d as g,N as pe,f as Ke,Z as ye,n as ae,$ as J,Q as be,p as Xe,x as We}from"./index.es-Du7CbdG9.js";import{u as $}from"./initFetch-CvTax_OZ.js";import{a as fe,r as he,Q as re,e as T,Z as _,b as ce,N as je,u as w}from"./index.es-PwR2YtJ1.js";import{A as y}from"./aksjonspunktCodes-BuBbCIxs.js";import{a as Ae,b as er,B as R}from"./behandlingResultatType-DHbqkXMl.js";import{P as U}from"./skjermlenkeCodes-1SvLTuBb.js";import{h as Y}from"./moment-C5S46NFB.js";import{K as P}from"./alleKodeverk-BFmIlMu4.js";import{g as te}from"./kodeverkUtils-DLZgokMR.js";import{P as qe,a as le}from"./OverstyringPanel-Bv7aURyT.js";import{u as Q,c as Ve}from"./behandlingApi-B9iMC3MH.js";import{u as Z,P as X}from"./useStandardProsessPanelProps-DAdxQRZk.js";import{B as W}from"./behandlingDataContext-BdfTXpp6.js";import{A as Te}from"./aksjonspunktStatus-xM4O_ZUY.js";import{V as D}from"./BehandlingHenlagtPanel-DwGflln7.js";import{v as rr}from"./validerApKodeOgHentApEnum-2OoewJEZ.js";import{L as Fe}from"./Link-BBg2RZDi.js";import{F as nr}from"./FatterVedtakStatusModal-ZyLiNiXh.js";import{D as H}from"./dokumentMalType-uHvYWaNM.js";import{K as ar}from"./KlageBehandlingModal-CDqVChCf.js";import"./index.es-CYBKr-Dh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFormField-CcYtfG-l.js";import"./Tooltip-DqVpCjjI.js";import"./index-Dmw-q_WW.js";import"./index-Dv0WEcwZ.js";import"./Popover-Ce9BnRG1.js";import"./ExclamationmarkTriangleFill-BQNLeU9A.js";import"./Box--WIkKGbT.js";import"./bind-oYjWB_aQ.js";import"./Kjonnkode-C-fkzSiP.js";import"./Table-BHxS8UYB.js";import"./v4-CtRu48qb.js";import"./react-CPijLNrE.js";import"./iframe-B1QJrli7.js";import"./chunk-XP5HYGXS-DH4vAeCa.js";import"./dayjs.min-CJilavqB.js";import"./CheckmarkCircleFill-CBkbUBuR.js";import"./index-DqeTBbD1.js";import"./decorators-DIzpaN6C.js";import"./Checkbox-1vdYyX-j.js";import"./Tag-CA7IfgpW.js";import"./TotrinnskontrollIndex-COoX8-JO.js";import"./behandlingArsakType-CTXggz2Y.js";import"./paths-mGPkG7Go.js";import"./useKodeverk-Cq-DlfCY.js";import"./useVisForhandsvisningAvMelding-i2zZfyva.js";import"./SupportHeader-CKseYowm.js";import"./ErrorBoundary-DRGUXAp_.js";import"./IngenBehandlingValgtPanel-DAD45jD8.js";import"./RestApiErrorContext-D3DzVTT-.js";var k=(r=>(r.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",r.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",r.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",r.AVVIS_KLAGE="AVVIS_KLAGE",r.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",r))(k||{}),S=(r=>(r.DELVIS_MEDHOLD_I_KLAGE="DELVIS_MEDHOLD_I_KLAGE",r.GUNST_MEDHOLD_I_KLAGE="GUNST_MEDHOLD_I_KLAGE",r.UGUNST_MEDHOLD_I_KLAGE="UGUNST_MEDHOLD_I_KLAGE",r.UDEFINERT="-",r))(S||{});const I="ikkePaklagdVedtak",ie=r=>r.erKlagerPart===!1||r.erFristOverholdt===!1||r.erKonkret===!1||r.erSignert===!1||r.vedtak===I,Be=(r,a)=>r.find(t=>t.uuid===a),se=(r,a)=>{const t=Be(r,a);return!!t&&(t.type===N.TILBAKEKREVING||t.type===N.TILBAKEKREVING_REVURDERING)},Pe=(r,a)=>{const t=se(r,a),l=Be(r,a);return l&&t?{tilbakekrevingUuid:l.uuid,tilbakekrevingVedtakDato:l.avsluttet,tilbakekrevingBehandlingType:l.type}:void 0},tr=(r,a,t,l)=>({kode:l,begrunnelse:r.begrunnelse,behandlingUuid:a,erKlagerPart:r.erKlagerPart,erFristOverholdt:r.erFristOverholdt,erKonkret:r.erKonkret,erSignert:r.erSignert,erTilbakekreving:se(t,r.vedtak),klageTilbakekreving:Pe(t,r.vedtak),paKlagdBehandlingUuid:r.vedtak===I?void 0:r.vedtak,fritekstTilBrev:ie(r)?r.fritekstTilBrev:void 0}),Ee=({behandlingUuid:r,saveKlage:a,avsluttedeBehandlinger:t,spinner:l=!1,aksjonspunktCode:n,readOnly:s=!1,handleSubmit:o})=>s?null:e.jsx(L,{size:"small",variant:"primary",loading:l,onClick:o(d=>a(tr(d,r,t,n))),type:"button",children:e.jsx(i,{id:"TempsaveKlageButton.TempSaveButton"})});Ee.__docgenInfo={description:"",methods:[],displayName:"TempsaveKlageButton",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunktCode:{required:!0,tsType:{name:"string"},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: string;
  avsluttet?: string;
  uuid: string;
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""},saveKlage:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormkravMellomlagretDataType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: string;
  begrunnelse: string;
  behandlingUuid: string;
  erKlagerPart: boolean;
  erFristOverholdt: boolean;
  erKonkret: boolean;
  erSignert: boolean;
  erTilbakekreving: boolean;
  klageTilbakekreving?: {
    tilbakekrevingUuid: string;
    tilbakekrevingVedtakDato?: string;
    tilbakekrevingBehandlingType?: string;
  };
  paKlagdBehandlingUuid?: string;
  fritekstTilBrev?: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erFristOverholdt",value:{name:"boolean",required:!0}},{key:"erKonkret",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"erTilbakekreving",value:{name:"boolean",required:!0}},{key:"klageTilbakekreving",value:{name:"signature",type:"object",raw:`{
  tilbakekrevingUuid: string;
  tilbakekrevingVedtakDato?: string;
  tilbakekrevingBehandlingType?: string;
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},spinner:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},handleSubmit:{required:!0,tsType:{name:"UseFormHandleSubmit",elements:[{name:"signature",type:"object",raw:`{
  erKlagerPart?: boolean;
  erFristOverholdt?: boolean;
  erKonkret?: boolean;
  erSignert?: boolean;
  begrunnelse?: string;
  vedtak?: string;
  fritekstTilBrev?: string;
}`,signature:{properties:[{key:"erKlagerPart",value:{name:"boolean",required:!1}},{key:"erFristOverholdt",value:{name:"boolean",required:!1}},{key:"erKonkret",value:{name:"boolean",required:!1}},{key:"erSignert",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vedtak",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}}],raw:"UseFormHandleSubmit<FormValues>"},description:""}}};const lr="_selectBredde_19ro0_1",ir="_textField_19ro0_4",sr={selectBredde:lr,textField:ir},gr=r=>r!=null&&r.paKlagdBehandlingUuid?`${r.paKlagdBehandlingUuid}`:I,ur=(r,a,t)=>[e.jsx("option",{value:I,children:a.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"})},"formkrav")].concat([...r].sort((n,s)=>Y(n.avsluttet).diff(Y(s.avsluttet))).map(n=>e.jsx("option",{value:`${n.uuid}`,children:`${t(n.type,P.BEHANDLING_TYPE)} ${Y(n.avsluttet).format(ye)}`},n.uuid))),dr=r=>r===y.VURDERING_AV_FORMKRAV_KLAGE_NFP?"Klage.LovhjemmelNFP":"Klage.LovhjemmelKA",or=r=>{const a=r?r.klageFormkravResultatNFP:null,t=r?r.klageVurderingResultatNFP:null;return{vedtak:a?gr(a):"",begrunnelse:a?a.begrunnelse:void 0,erKlagerPart:a?a.erKlagerPart:void 0,erKonkret:a?a.erKlageKonkret:void 0,erFristOverholdt:a?a.erKlagefirstOverholdt:void 0,erSignert:a?a.erSignert:void 0,fritekstTilBrev:t?t.fritekstTilBrev:void 0}},kr=(r,a)=>({erKlagerPart:r.erKlagerPart,erFristOverholdt:r.erFristOverholdt,erKonkret:r.erKonkret,erSignert:r.erSignert,begrunnelse:r.begrunnelse,kode:y.VURDERING_AV_FORMKRAV_KLAGE_NFP,vedtakBehandlingUuid:r.vedtak===I?void 0:r.vedtak,erTilbakekreving:se(a,r.vedtak),tilbakekrevingInfo:Pe(a,r.vedtak),fritekstTilBrev:ie(r)?r.fritekstTilBrev:void 0}),xe=({klageVurdering:r,readOnlySubmitButton:a,avsluttedeBehandlinger:t,lagreFormkravVurdering:l})=>{const n=V(),{behandling:s,alleKodeverk:o,submitCallback:d,isReadOnly:u}=E(),p=te(o),K=ur(t,n,p),{formData:m,setFormData:v}=ke(),c=q.useMemo(()=>or(r),[r]),j=fe({defaultValues:m||c}),F=j.watch();return e.jsxs(he,{formMethods:j,onSubmit:A=>d(kr(A,t)),setDataOnUnmount:v,children:[e.jsx(M,{size:"small",children:n.formatMessage({id:"Klage.Formkrav.Title"})}),e.jsx(g,{fourPx:!0}),e.jsx(Ze,{children:n.formatMessage({id:dr(y.VURDERING_AV_FORMKRAV_KLAGE_NFP)})}),e.jsx(g,{sixteenPx:!0}),e.jsxs(C,{gap:"6",children:[!a&&e.jsx(pe,{children:e.jsx(i,{id:"Klage.Formkrav.HelpText"})}),e.jsx(C,{gap:"6",children:e.jsxs(B,{gap:"10",children:[e.jsx("div",{children:e.jsx(re,{readOnly:u,validate:[T],name:"vedtak",label:n.formatMessage({id:"Klage.Formkrav.VelgVedtak"}),selectValues:K,className:sr.selectBredde})}),e.jsxs(C,{gap:"5",children:[e.jsxs(B,{gap:"4",children:[e.jsx(_,{name:"erKlagerPart",label:n.formatMessage({id:"Klage.Formkrav.ErKlagerPart"}),validate:[T],isReadOnly:u,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:n.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:n.formatMessage({id:"Klage.Formkrav.Nei"})}]}),e.jsx(_,{name:"erKonkret",label:n.formatMessage({id:"Klage.Formkrav.ErKonkret"}),validate:[T],isReadOnly:u,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:n.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:n.formatMessage({id:"Klage.Formkrav.Nei"})}]})]}),e.jsxs(B,{gap:"4",children:[e.jsx(_,{name:"erFristOverholdt",label:n.formatMessage({id:"Klage.Formkrav.ErFristOverholdt"}),validate:[T],isReadOnly:u,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:n.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:n.formatMessage({id:"Klage.Formkrav.Nei"})}]}),e.jsx(_,{name:"erSignert",label:n.formatMessage({id:"Klage.Formkrav.ErSignert"}),validate:[T],isReadOnly:u,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:n.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:n.formatMessage({id:"Klage.Formkrav.Nei"})}]})]})]})]})}),e.jsx(qe,{readOnly:u}),ie(F)&&e.jsx(ce,{name:"fritekstTilBrev",label:n.formatMessage({id:"FormkravKlageFormNfp.Fritekst"}),maxLength:1e5,validate:[T,je],readOnly:u,parse:Ke}),e.jsxs(B,{justify:"space-between",children:[e.jsx(le,{isReadOnly:u,isSubmittable:!a,isSubmitting:j.formState.isSubmitting,isDirty:j.formState.isDirty}),e.jsx(Ee,{behandlingUuid:s.uuid,saveKlage:l,avsluttedeBehandlinger:t,handleSubmit:j.handleSubmit,readOnly:u,aksjonspunktCode:y.VURDERING_AV_FORMKRAV_KLAGE_NFP})]})]})]})};xe.__docgenInfo={description:`FormkravklageformNfp

Setter opp aksjonspunktet for formkrav klage (NFP).`,methods:[],displayName:"FormkravKlageFormNfp",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"klageVurderingResultatNK",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""},readOnlySubmitButton:{required:!1,tsType:{name:"boolean"},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: string;
  avsluttet?: string;
  uuid: string;
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""},lagreFormkravVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormkravMellomlagretDataType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: string;
  begrunnelse: string;
  behandlingUuid: string;
  erKlagerPart: boolean;
  erFristOverholdt: boolean;
  erKonkret: boolean;
  erSignert: boolean;
  erTilbakekreving: boolean;
  klageTilbakekreving?: {
    tilbakekrevingUuid: string;
    tilbakekrevingVedtakDato?: string;
    tilbakekrevingBehandlingType?: string;
  };
  paKlagdBehandlingUuid?: string;
  fritekstTilBrev?: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erFristOverholdt",value:{name:"boolean",required:!0}},{key:"erKonkret",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"erTilbakekreving",value:{name:"boolean",required:!0}},{key:"klageTilbakekreving",value:{name:"signature",type:"object",raw:`{
  tilbakekrevingUuid: string;
  tilbakekrevingVedtakDato?: string;
  tilbakekrevingBehandlingType?: string;
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Oe=({klageVurdering:r,avsluttedeBehandlinger:a})=>{var u;const t=V(),{alleKodeverk:l}=E(),{klageFormkravResultatKA:n,underBehandlingKabal:s,behandletAvKabal:o}=r;let d=t.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"});if(n!=null&&n.paKlagdBehandlingUuid){const p=a.find(K=>K.uuid===n.paKlagdBehandlingUuid);p&&(d=`${(u=l[P.BEHANDLING_TYPE].find(m=>m.kode===p.type))==null?void 0:u.navn} ${Y(p.avsluttet).format(ye)}`)}return e.jsxs(e.Fragment,{children:[e.jsx(M,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.Title"})}),e.jsx(g,{sixteenPx:!0}),s&&e.jsxs(e.Fragment,{children:[e.jsx(M,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.SeKabalText"})}),e.jsx(g,{sixteenPx:!0})]}),!s&&!o&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.VelgVedtak"})}),e.jsx(g,{fourPx:!0}),e.jsx(b,{size:"small",children:d}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.ErKlagerPart"})}),e.jsx(g,{fourPx:!0}),e.jsx(b,{size:"small",children:n!=null&&n.erKlagerPart?e.jsx(i,{id:"Klage.Formkrav.Ja"}):e.jsx(i,{id:"Klage.Formkrav.Nei"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.ErKonkret"})}),e.jsx(g,{fourPx:!0}),e.jsx(b,{size:"small",children:n!=null&&n.erKlageKonkret?e.jsx(i,{id:"Klage.Formkrav.Ja"}):e.jsx(i,{id:"Klage.Formkrav.Nei"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.ErFristOverholdt"})}),e.jsx(g,{fourPx:!0}),e.jsx(b,{size:"small",children:n!=null&&n.erKlagefirstOverholdt?e.jsx(i,{id:"Klage.Formkrav.Ja"}):e.jsx(i,{id:"Klage.Formkrav.Nei"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.ErSignert"})}),e.jsx(g,{fourPx:!0}),e.jsx(b,{size:"small",children:n!=null&&n.erSignert?e.jsx(i,{id:"Klage.Formkrav.Ja"}):e.jsx(i,{id:"Klage.Formkrav.Nei"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.Vurdering"})}),e.jsx(g,{fourPx:!0}),e.jsx(b,{size:"small",children:n==null?void 0:n.begrunnelse})]})]})};Oe.__docgenInfo={description:`FormkravKlageKa

Readonly panel for formkrav klage (KA).`,methods:[],displayName:"FormkravKlageKa",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"klageVurderingResultatNK",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: string;
  avsluttet?: string;
  uuid: string;
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""}}};const mr={"Klage.LovhjemmelNFP":"Fvl §§ 28, 31, 32, 33 og ftrl § 21-12","Klage.LovhjemmelKA":"Fvl §§  28, 31, 32, 34 og ftrl § 21-12","Klage.Formkrav.VelgVedtak":"Vedtaket som er påklagd","Klage.Formkrav.Title":"Vurder formkrav","Klage.Formkrav.HelpText":"Vurder om klagen oppfyller formkravene","Klage.Formkrav.IkkePåklagdVedtak":"Ikke påklagd et vedtak","Klage.Formkrav.ErKlagerPart":"Er klager part i saken?","Klage.Formkrav.ErKonkret":"Klages det på konkrete elementer i vedtaket?","Klage.Formkrav.ErFristOverholdt":"Er klagefristen overholdt?","Klage.Formkrav.ErSignert":"Er klagen signert?","Klage.Formkrav.KabalText":"Fortsett klagebehandlingen i KABAL: Kryss av, velg hjemmel og trykk send","Klage.Formkrav.SeKabalText":"Klagen behandles i KABAL","Klage.Formkrav.SendTilKabal":"Send til KABAL","Klage.Formkrav.Hjemmel":"Hjemmel","Klage.Formkrav.Ja":"Ja","Klage.Formkrav.Nei":"Nei","Klage.Formkrav.Vurdering":"Vurdering","FormkravKlageFormNfp.Fritekst":"Fritekst","TempsaveKlageButton.TempSaveButton":"Lagre","Malform.Beskrivelse":"Foretrukket språk"},vr=ae(mr),ge=({klageVurdering:r={},avsluttedeBehandlinger:a,readOnlySubmitButton:t,lagreFormkravVurdering:l})=>{const{aksjonspunkterForPanel:n}=E();return e.jsxs(ne,{value:vr,children:[n.some(s=>s.definisjon===y.VURDERING_AV_FORMKRAV_KLAGE_NFP)&&e.jsx(xe,{klageVurdering:r,readOnlySubmitButton:t,avsluttedeBehandlinger:a,lagreFormkravVurdering:l}),r.klageFormkravResultatKA&&e.jsx(Oe,{klageVurdering:r,avsluttedeBehandlinger:a})]})};ge.__docgenInfo={description:"",methods:[],displayName:"FormkravProsessIndex",props:{klageVurdering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"klageVurderingResultatNK",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}>`},description:"",defaultValue:{value:"{}",computed:!1}},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: string;
  avsluttet?: string;
  uuid: string;
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""},lagreFormkravVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormkravMellomlagretDataType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: string;
  begrunnelse: string;
  behandlingUuid: string;
  erKlagerPart: boolean;
  erFristOverholdt: boolean;
  erKonkret: boolean;
  erSignert: boolean;
  erTilbakekreving: boolean;
  klageTilbakekreving?: {
    tilbakekrevingUuid: string;
    tilbakekrevingVedtakDato?: string;
    tilbakekrevingBehandlingType?: string;
  };
  paKlagdBehandlingUuid?: string;
  fritekstTilBrev?: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erFristOverholdt",value:{name:"boolean",required:!0}},{key:"erKonkret",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"erTilbakekreving",value:{name:"boolean",required:!0}},{key:"klageTilbakekreving",value:{name:"signature",type:"object",raw:`{
  tilbakekrevingUuid: string;
  tilbakekrevingVedtakDato?: string;
  tilbakekrevingBehandlingType?: string;
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const pr=[y.VURDERING_AV_FORMKRAV_KLAGE_NFP],Se=r=>{const a=V(),t=Z(pr),{behandling:l,alleBehandlinger:n,hentOgSettBehandling:s}=q.use(W),o=n.filter(m=>m.status===me.AVSLUTTET).filter(m=>{var v;return(m.type!==N.KLAGE||Ae((v=m.behandlingsresultat)==null?void 0:v.type))&&m.type!==N.ANKE}),d=Q(l),{data:u,isFetching:p}=$(d.klage.klageVurderingOptions(l)),{mutate:K}=w({mutationFn:m=>d.klage.mellomlagreFormkravVurdering(m),onSuccess:()=>s()});return e.jsx(X,{...r,standardPanelProps:t,prosessPanelKode:U.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:a.formatMessage({id:"Behandlingspunkt.FormkravKlageNFP"}),skalPanelVisesIMeny:!0,children:p?e.jsx(J,{}):e.jsx(ge,{klageVurdering:u,avsluttedeBehandlinger:o,lagreFormkravVurdering:K,readOnlySubmitButton:t.readOnlySubmitButton})})};Se.__docgenInfo={description:"",methods:[],displayName:"FormKravFamOgPensjonProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Kr=[y.VURDER_FORMKRAV_NK],_e=r=>{const a=V(),t=Z(Kr),{behandling:l,alleBehandlinger:n,hentOgSettBehandling:s}=q.use(W),d=n.filter(v=>!v.behandlingHenlagt).filter(v=>v.status===me.AVSLUTTET).filter(v=>{var c;return(v.type!==N.KLAGE||Ae((c=v.behandlingsresultat)==null?void 0:c.type))&&v.type!==N.ANKE}),u=Q(l),{data:p,isFetching:K}=$(u.klage.klageVurderingOptions(l)),{mutate:m}=w({mutationFn:v=>u.klage.mellomlagreFormkravVurdering(v),onSuccess:()=>s()});return e.jsx(X,{...r,standardPanelProps:t,prosessPanelKode:U.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:a.formatMessage({id:"Behandlingspunkt.FormkravKlageKA"}),skalPanelVisesIMeny:!0,children:K?e.jsx(J,{}):e.jsx(ge,{klageVurdering:p,avsluttedeBehandlinger:d,lagreFormkravVurdering:m,readOnlySubmitButton:t.readOnlySubmitButton})})};_e.__docgenInfo={description:"",methods:[],displayName:"FormKravKlageInstansProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Re=({behandlingPaaVent:r,previewVedtakCallback:a,readOnly:t,lagreVedtak:l,isSubmitting:n})=>{const s=q.useCallback(o=>{o.preventDefault(),a({gjelderVedtak:!0})},[]);return e.jsxs(B,{gap:"2",align:"center",children:[!t&&e.jsx(L,{variant:"primary",size:"small",onClick:l,disabled:r||n,loading:n,type:"button",children:e.jsx(i,{id:"VedtakKlageForm.TilGodkjenning"})}),e.jsx(Fe,{href:"#",onClick:s,onKeyDown:o=>o.key==="Enter"?s(o):null,children:e.jsx(i,{id:"VedtakKlageForm.ForhandvisBrev"})})]})};Re.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageSubmitPanel",props:{previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingPaaVent:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""}}};const yr={GUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortGunst",UGUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortUgunst",DELVIS_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortDelvis"},br=r=>{if(r){if(r.klageFormkravResultatKA&&r.klageVurderingResultatNK)return r.klageFormkravResultatKA.avvistArsaker;if(r.klageFormkravResultatNFP)return r.klageFormkravResultatNFP.avvistArsaker}return[]},fr=(r,a)=>{var l,n;const t=te(a);if(r){if((l=r.klageVurderingResultatNK)!=null&&l.klageMedholdArsak)return t(r.klageVurderingResultatNK.klageMedholdArsak,P.KLAGE_MEDHOLD_ARSAK);if((n=r.klageVurderingResultatNFP)!=null&&n.klageMedholdArsak)return t(r.klageVurderingResultatNFP.klageMedholdArsak,P.KLAGE_MEDHOLD_ARSAK)}return null},hr=r=>{const a=r.klageVurderingResultatNK?r.klageVurderingResultatNK:r.klageVurderingResultatNFP;switch(a==null?void 0:a.klageVurdering){case k.AVVIS_KLAGE:return"VedtakKlageForm.KlageAvvist";case k.STADFESTE_YTELSESVEDTAK:return"VedtakKlageForm.KlageStadfestet";case k.OPPHEVE_YTELSESVEDTAK:return"VedtakKlageForm.YtelsesvedtakOpphevet";case k.HJEMSENDE_UTEN_Å_OPPHEVE:return"VedtakKlageForm.HjemmsendUtenOpphev";case k.MEDHOLD_I_KLAGE:return yr[(a==null?void 0:a.klageVurderingOmgjoer)||""];default:return"VedtakKlageForm.IkkeFastsatt"}},Ne=({klageVurdering:r,previewVedtakCallback:a,behandlingsresultat:t})=>{const{behandling:l,isReadOnly:n,alleKodeverk:s,aksjonspunkterForPanel:o,submitCallback:d}=E(),u=br(r),p=fr(r,s),K=hr(r),m=r.klageVurderingResultatNK?r.klageVurderingResultatNK:r.klageVurderingResultatNFP,v=er(t.type),[c,j]=q.useState(!1),F=()=>{j(!0);const x=o.filter(O=>O.status===Te.OPPRETTET).map(O=>O.definisjon).map(O=>({kode:rr(O,y.FORESLA_VEDTAK,y.FORESLA_VEDTAK_MANUELT)}));d(x).then(()=>j(!1))},A=te(s);return e.jsxs(e.Fragment,{children:[e.jsx(M,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.Header"})}),e.jsx(g,{twentyPx:!0}),e.jsx(f,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.Resultat"})}),K&&e.jsx(b,{size:"small",children:e.jsx(i,{id:K})}),e.jsx(g,{sixteenPx:!0}),t.type===R.KLAGE_AVVIST&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.ArsakTilAvvisning"})}),u.map(h=>e.jsx(b,{size:"small",children:A(h,P.KLAGE_AVVIST_AARSAK)},h)),e.jsx(g,{sixteenPx:!0})]}),v&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.ArsakTilOmgjoring"})}),p,e.jsx(g,{sixteenPx:!0})]}),t.type===R.KLAGE_YTELSESVEDTAK_OPPHEVET&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.ArsakTilOppheving"})}),p,e.jsx(g,{sixteenPx:!0})]}),(m==null?void 0:m.klageVurdertAv)==="NFP"&&e.jsx(Re,{previewVedtakCallback:a,readOnly:n,behandlingPaaVent:l.behandlingPaaVent,lagreVedtak:F,isSubmitting:c})]})};Ne.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageForm",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"klageVurderingResultatNK",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingsresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const cr={"VedtakKlageForm.ArsakTilAvslag":"Årsak til avslag","VedtakKlageForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakKlageForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakKlageForm.Resultat":"Resultat av klage","VedtakKlageForm.ArsakTilAvvisning":"Årsak til avvisning","VedtakKlageForm.ArsakTilOmgjoring":"Årsak til omgjøring","VedtakKlageForm.ArsakTilOppheving":"Årsak til oppheving","VedtakKlageForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakKlageForm.ResultatKlageAvvist":"Klagen er avvist","VedtakKlageForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakKlageForm.TilGodkjenning":"Til godkjenning","VedtakKlageForm.ForhandvisBrev":"Forhåndsvis vedtaksbrev","VedtakKlageForm.ArsakTilMedhold":"Årsak","VedtakKlageForm.KlageOmgjortGunst":"Vedtaket er omgjort til gunst","VedtakKlageForm.KlageOmgjortUgunst":"Vedtaket er omgjort til ugunst","VedtakKlageForm.KlageOmgjortDelvis":"Vedtaket er delvis omgjort til gunst","VedtakKlageForm.HjemmsendUtenOpphev":"Vedtaket er hjemsendt","VedtakKlageForm.IkkeFastsatt":"Ikke fastsatt","VedtakKlageForm.Header":"Resultat","VedtakKlageForm.KlageAvvist":"Avvist fordi klagen ikke oppfyller formkravene","VedtakKlageForm.KlageStadfestet":"Vedtaket er stadfestet","VedtakKlageForm.YtelsesvedtakOpphevet":"Vedtak er opphevet og hjemsendt"},jr=ae(cr),Me=({klageVurdering:r,previewVedtakCallback:a})=>{const{behandling:t}=E();if(!t.behandlingsresultat)throw new Error(`behandlingsresultat finnes ikke for behandling ${t.uuid}`);return e.jsx(ne,{value:jr,children:e.jsx(Ne,{klageVurdering:r,previewVedtakCallback:a,behandlingsresultat:t.behandlingsresultat})})};Me.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"klageVurderingResultatNK",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Ar=[y.FORESLA_VEDTAK,y.FATTER_VEDTAK,y.FORESLA_VEDTAK_MANUELT],He=r=>{const a=V(),{behandling:t,fagsak:l,setSkalOppdatereEtterBekreftelseAvAp:n}=q.use(W),{aksjonspunkt:s}=t,[o,d]=q.useState(!1),u=Vr(d,n),p=Z(Ar,[],u),K=qr(t.behandlingsresultat,s),m=Q(t),v=ve(),{data:c}=$(m.klage.klageVurderingOptions(t)),{mutate:j}=w({mutationFn:F=>Ve({...F,behandlingUuid:t.uuid,fagsakYtelseType:l.fagsakYtelseType}),onSuccess:be});return e.jsxs(e.Fragment,{children:[e.jsx(nr,{visModal:o,lukkModal:()=>{d(!1),v("/")},tekst:a.formatMessage({id:"FatterVedtakStatusModal.KlagenErFerdigbehandlet"})}),e.jsx(X,{...r,skalPanelVisesIMeny:!0,prosessPanelKode:U.KLAGE_RESULTAT,prosessPanelMenyTekst:a.formatMessage({id:"Behandlingspunkt.ResultatKlage"}),standardPanelProps:p,hentOverstyrtStatus:K,hentSkalMarkeresSomAktiv:K!==D.IKKE_VURDERT,children:c?e.jsx(Me,{klageVurdering:c,previewVedtakCallback:j}):e.jsx(J,{})})]})},qr=(r,a=[])=>{const t=a.some(n=>n.status===Te.OPPRETTET);if(a.length===0||t)return D.IKKE_VURDERT;const l=r==null?void 0:r.type;return l===R.HENLAGT_KLAGE_TRUKKET||l===R.HENLAGT_FEILOPPRETTET?D.IKKE_VURDERT:l===R.KLAGE_AVVIST||l===R.KLAGE_YTELSESVEDTAK_OPPHEVET?D.IKKE_OPPFYLT:D.OPPFYLT},Vr=(r,a)=>()=>(a(!1),()=>{r(!0)});He.__docgenInfo={description:"",methods:[],displayName:"KlageresultatProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const De=({klageVurdering:r})=>{var p,K;const a=V(),{alleKodeverk:t}=E(),{begrunnelse:l,fritekstTilBrev:n,klageVurdering:s,klageMedholdArsak:o,klageVurderingOmgjoer:d}=r.klageVurderingResultatNK||{},u=t[P.KLAGE_MEDHOLD_ARSAK];return e.jsxs(e.Fragment,{children:[e.jsx(M,{size:"small",children:a.formatMessage({id:"Klage.ResolveKlage.Title"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(i,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),e.jsxs(b,{size:"small",children:[s===k.STADFESTE_YTELSESVEDTAK&&e.jsx(i,{id:"Klage.ResolveKlage.KeepVedtakNk"}),s===k.MEDHOLD_I_KLAGE&&e.jsx(i,{id:"Klage.ResolveKlage.ChangeVedtak"}),s===k.HJEMSENDE_UTEN_Å_OPPHEVE&&e.jsx(i,{id:"Klage.Behandle.Hjemsendt"}),s===k.OPPHEVE_YTELSESVEDTAK&&e.jsx(i,{id:"Klage.ResolveKlage.NullifyVedtak"})]}),e.jsx(g,{sixteenPx:!0}),s===k.MEDHOLD_I_KLAGE&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(i,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(b,{size:"small",children:(p=u.find(m=>m.kode===o))==null?void 0:p.navn}),e.jsx(g,{sixteenPx:!0}),e.jsxs(b,{size:"small",children:[d===S.GUNST_MEDHOLD_I_KLAGE&&e.jsx(i,{id:"Klage.Behandle.Omgjort"}),d===S.UGUNST_MEDHOLD_I_KLAGE&&e.jsx(i,{id:"Klage.Behandle.Ugunst"}),d===S.DELVIS_MEDHOLD_I_KLAGE&&e.jsx(i,{id:"Klage.Behandle.DelvisOmgjort"})]}),e.jsx(g,{sixteenPx:!0})]}),(s===k.OPPHEVE_YTELSESVEDTAK||s===k.HJEMSENDE_UTEN_Å_OPPHEVE)&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(i,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(b,{size:"small",children:(K=u.find(m=>m.kode===o))==null?void 0:K.navn}),e.jsx(g,{sixteenPx:!0})]}),e.jsx(f,{size:"small",children:e.jsx(i,{id:"FritekstKlageBrevTextField.Fritekst"})}),e.jsx(b,{size:"small",children:n}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(i,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),e.jsx(b,{size:"small",children:l}),e.jsx(g,{sixteenPx:!0})]})};De.__docgenInfo={description:`BehandleklageformNfp

Setter opp readonly-panel for behandling av klage (KA).`,methods:[],displayName:"BehandleKlageFormKa",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"klageVurderingResultatNK",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""}}};const we=({erModalÅpen:r,lukkModal:a,isSubmittable:t,isSubmitting:l,isDirty:n,readOnly:s,valgtHjemmel:o})=>{const d=V();return e.jsx(oe,{width:"500px",open:r,"aria-label":d.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:a,children:e.jsx(oe.Body,{children:e.jsxs(C,{gap:"3",children:[e.jsxs("div",{children:[e.jsx(f,{size:"medium",children:e.jsx(i,{id:"Klage.Modal.Overskrift"})}),e.jsx(g,{fourPx:!0}),e.jsx(b,{children:e.jsx(i,{id:"Klage.Modal.SendTilKlageinstans"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(b,{children:e.jsx(i,{id:"Klage.Modal.Valg"})}),e.jsx(g,{eightPx:!0}),e.jsx(b,{children:e.jsx(i,{id:"Klage.Modal.Oppretthold"})}),e.jsx(g,{fourPx:!0}),o&&e.jsx(b,{children:e.jsx(i,{id:"Klage.Modal.Hjemmel",values:{hjemmel:o}})}),e.jsx(g,{fourPx:!0})]}),e.jsx("div",{children:e.jsxs(B,{gap:"2",children:[e.jsx(le,{isReadOnly:s,isSubmittable:t,isSubmitting:l,isDirty:n}),e.jsx(L,{size:"small",variant:"primary",onClick:a,autoFocus:!0,type:"button",children:e.jsx(i,{id:"Klage.Modal.Avbryt"})})]})})]})})})};we.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const Tr="_fritekstTilBrevTextArea_n72am_1",Fr={fritekstTilBrevTextArea:Tr},Le=({sprakkode:r,readOnly:a=!0})=>e.jsx("div",{className:Fr.fritekstTilBrevTextArea,children:e.jsx(ce,{name:"fritekstTilBrev",label:V().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[T,je],readOnly:a,maxLength:1e5,badges:[{type:"info",titleText:Xe(r)}],parse:Ke})});Le.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{sprakkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Br="_previewLink_1xd5p_1",Pr="_select_1xd5p_7",Er="_selectReadOnly_1xd5p_10",xr="_confirmVilkarForm_1xd5p_14",Or="_panel_1xd5p_17",Sr="_fritekstTilBrevTextArea_1xd5p_20",_r="_explanationTextarea_1xd5p_23",G={previewLink:Br,select:Pr,selectReadOnly:Er,confirmVilkarForm:xr,panel:Or,fritekstTilBrevTextArea:Sr,explanationTextarea:_r},Ue=({readOnly:r,medholdReasons:a,alleHjemmlerMedNavn:t,klageVurdering:l})=>{const n=V(),s=a.map(d=>e.jsx("option",{value:d.kode,children:d.navn},d.kode)),o=t.map(d=>e.jsx("option",{value:d.kode,children:d.navn},d.kode));return e.jsxs(e.Fragment,{children:[e.jsx(_,{name:"klageVurdering",validate:[T],isReadOnly:r,isHorizontal:!0,radios:[{value:k.MEDHOLD_I_KLAGE,label:n.formatMessage({id:"Klage.ResolveKlage.ChangeVedtak"})},{value:k.STADFESTE_YTELSESVEDTAK,label:n.formatMessage({id:"Klage.ResolveKlage.KeepVedtakNfp"})}]}),l===k.MEDHOLD_I_KLAGE&&e.jsxs(e.Fragment,{children:[e.jsx(g,{sixteenPx:!0}),e.jsxs(We,{children:[e.jsx(re,{readOnly:r,name:"klageMedholdArsak",selectValues:s,className:r?G.selectReadOnly:G.select,label:n.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[T]}),e.jsx(g,{sixteenPx:!0}),e.jsx(_,{name:"klageVurderingOmgjoer",validate:[T],isReadOnly:r,radios:[{value:S.GUNST_MEDHOLD_I_KLAGE,label:n.formatMessage({id:"Klage.Behandle.Omgjort"})},{value:S.UGUNST_MEDHOLD_I_KLAGE,label:n.formatMessage({id:"Klage.Behandle.Ugunst"})},{value:S.DELVIS_MEDHOLD_I_KLAGE,label:n.formatMessage({id:"Klage.Behandle.DelvisOmgjort"})}]})]})]}),e.jsx(g,{sixteenPx:!0}),e.jsx(re,{readOnly:r,name:"klageHjemmel",selectValues:o,className:r?G.selectReadOnly:G.select,label:n.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[T]}),e.jsx(g,{sixteenPx:!0})]})};Ue.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},alleHjemmlerMedNavn:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Rr=(r,a)=>{switch(a){case k.STADFESTE_YTELSESVEDTAK:return r?H.KLAGE_STADFESTET:H.KLAGE_OVERSENDT;case k.OPPHEVE_YTELSESVEDTAK:return H.KLAGE_HJEMSENDT;case k.HJEMSENDE_UTEN_Å_OPPHEVE:return H.KLAGE_HJEMSENDT;case k.MEDHOLD_I_KLAGE:return H.KLAGE_OMGJORING;default:return}},Nr=(r,a)=>({fritekst:a??"",dokumentMal:Rr(!1,r),erOpphevetKlage:r===k.OPPHEVE_YTELSESVEDTAK}),Ie=({previewCallback:r,fritekstTilBrev:a,klageVurdering:t})=>{const l=n=>{r(Nr(t,a)),n.preventDefault()};return e.jsx(Fe,{href:"#",onClick:l,onKeyDown:n=>n.key==="Enter"?l(n):null,children:e.jsx(i,{id:"PreviewKlageLink.ForhandvisBrev"})})};Ie.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BrevData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: string;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},fritekstTilBrev:{required:!1,tsType:{name:"string"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Mr=(r,a)=>({kode:a,klageMedholdArsak:r.klageVurdering===k.MEDHOLD_I_KLAGE||r.klageVurdering===k.OPPHEVE_YTELSESVEDTAK?r.klageMedholdArsak:void 0,klageVurderingOmgjoer:r.klageVurdering===k.MEDHOLD_I_KLAGE?r.klageVurderingOmgjoer:void 0,klageHjemmel:r.klageHjemmel,fritekstTilBrev:r.fritekstTilBrev,begrunnelse:r.begrunnelse,klageVurdering:r.klageVurdering}),Ge=({saveKlage:r,spinner:a=!1,aksjonspunktCode:t,readOnly:l=!1,handleSubmit:n})=>l?null:e.jsx(L,{size:"small",variant:"primary",loading:a,onClick:n(s=>r(Mr(s,t))),type:"button",children:e.jsx(i,{id:"Klage.ResolveKlage.TempSaveButton"})});Ge.__docgenInfo={description:"",methods:[],displayName:"TempsaveKlageButton",props:{aksjonspunktCode:{required:!0,tsType:{name:"string"},description:""},saveKlage:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: TransformedValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},spinner:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},handleSubmit:{required:!0,tsType:{name:"UseFormHandleSubmit",elements:[{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  fritekstTilBrev?: string;
  klageVurdering?: string;
  klageVurderingOmgjoer?: string;
  klageMedholdArsak?: string;
  klageHjemmel?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}}]}}],raw:"UseFormHandleSubmit<KlageFormType>"},description:""}}};const Hr="_confirmVilkarForm_13k5i_1",Dr={confirmVilkarForm:Hr},wr=r=>({klageMedholdArsak:r.klageVurdering===k.MEDHOLD_I_KLAGE?r.klageMedholdArsak:void 0,klageVurderingOmgjoer:r.klageVurdering===k.MEDHOLD_I_KLAGE?r.klageVurderingOmgjoer:void 0,klageHjemmel:r.klageHjemmel,klageVurdering:r.klageVurdering,fritekstTilBrev:r.fritekstTilBrev,begrunnelse:r.begrunnelse,kode:y.BEHANDLE_KLAGE_NFP}),z=r=>{if(r&&r!=="-")return r},Lr=(r,a)=>r.filter(({kode:t})=>a.includes(t)).sort((t,l)=>t.kode.localeCompare(l.kode)),Ur=r=>r.map(a=>a),Ir=r=>({klageMedholdArsak:z(r==null?void 0:r.klageMedholdArsak),klageVurderingOmgjoer:z(r==null?void 0:r.klageVurderingOmgjoer),klageHjemmel:z(r==null?void 0:r.klageHjemmel),klageVurdering:z(r==null?void 0:r.klageVurdering),begrunnelse:r?r.begrunnelse:void 0,fritekstTilBrev:r?r.fritekstTilBrev:void 0}),ze=({klageVurdering:r,previewCallback:a,saveKlage:t,readOnlySubmitButton:l,alleAktuelleHjemler:n})=>{var de;const{behandling:s,alleKodeverk:o,submitCallback:d,isReadOnly:u}=E(),p=Lr(o[P.KLAGE_HJEMMEL],Ur(n)),K=V(),[m,v]=q.useState(!1),c=q.useMemo(()=>Ir(r.klageVurderingResultatNFP),[r]),{formData:j,setFormData:F}=ke(),A=fe({defaultValues:j||c}),h=A.watch(),x=q.useCallback(()=>{v(!1)},[]),O=q.useCallback(()=>{v(!0)},[]);return e.jsxs(he,{formMethods:A,onSubmit:ee=>d(wr(ee)),setDataOnUnmount:F,children:[e.jsx(M,{size:"small",children:K.formatMessage({id:"Klage.ResolveKlage.Title"})}),e.jsx(g,{fourPx:!0}),!l&&e.jsx(pe,{children:[e.jsx(i,{id:"Klage.ResolveKlage.HelpText"},y.BEHANDLE_KLAGE_NFP)]}),e.jsx(Ue,{readOnly:u,klageVurdering:h.klageVurdering,medholdReasons:o[P.KLAGE_MEDHOLD_ARSAK],alleHjemmlerMedNavn:p}),e.jsxs("div",{className:Dr.confirmVilkarForm,children:[e.jsx(qe,{readOnly:u,text:K.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(Le,{sprakkode:s.sprakkode,readOnly:u}),e.jsx(g,{sixteenPx:!0}),e.jsxs(B,{justify:"space-between",children:[e.jsxs(B,{gap:"4",children:[h.klageVurdering===k.STADFESTE_YTELSESVEDTAK&&e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"primary",type:"button",size:"small",onClick:()=>O(),disabled:u,children:e.jsx(i,{id:"Klage.Behandle.Bekreft"})}),e.jsx(we,{erModalÅpen:m,lukkModal:x,valgtHjemmel:(de=p.find(ee=>ee.kode===h.klageHjemmel))==null?void 0:de.navn,readOnly:u,isSubmittable:!l,isSubmitting:A.formState.isSubmitting,isDirty:A.formState.isValid})]}),h.klageVurdering!==k.STADFESTE_YTELSESVEDTAK&&e.jsx(le,{isReadOnly:u,isSubmittable:!l,isSubmitting:A.formState.isSubmitting,isDirty:A.formState.isDirty}),!u&&h.klageVurdering&&h.fritekstTilBrev&&h.fritekstTilBrev.length>2&&e.jsx(Ie,{previewCallback:a,fritekstTilBrev:h.fritekstTilBrev,klageVurdering:h.klageVurdering})]}),e.jsx(Ge,{saveKlage:t,handleSubmit:A.handleSubmit,readOnly:u,aksjonspunktCode:y.BEHANDLE_KLAGE_NFP})]})]})]})};ze.__docgenInfo={description:`BehandleklageformNfp

Presentasjonskomponent. Setter opp aksjonspunktet for behandling av klage (NFP).`,methods:[],displayName:"BehandleKlageFormNfp",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BrevData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: string;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},saveKlage:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: TransformedValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!1,tsType:{name:"boolean"},description:""},klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"klageVurderingResultatNK",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const Gr={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},zr=ae(Gr),Ce=({klageVurdering:r,saveKlage:a,previewCallback:t,readOnlySubmitButton:l})=>{const{aksjonspunkterForPanel:n}=E();return e.jsxs(ne,{value:zr,children:[r.klageVurderingResultatNK&&e.jsx(De,{klageVurdering:r}),n.some(s=>s.definisjon===y.BEHANDLE_KLAGE_NFP)&&e.jsx(ze,{klageVurdering:r,saveKlage:a,previewCallback:t,readOnlySubmitButton:l,alleAktuelleHjemler:r.aktuelleHjemler?r.aktuelleHjemler:[]})]})};Ce.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"klageVurderingResultatNK",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: string[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: string[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BrevData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: string;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},saveKlage:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: TransformedValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const ue=({aksjonspunktKoder:r,prosessPanelKode:a,prosessPanelMenyTekst:t,...l})=>{const[n,s]=q.useState(!1),{behandling:o,fagsak:d,hentOgSettBehandling:u,setSkalOppdatereEtterBekreftelseAvAp:p,oppdaterProsessStegOgFaktaPanelIUrl:K}=q.use(W),m=p?Cr(s,p,K):void 0,v=Z(r,[],m),c=Q(o),j=ve(),{data:F}=$(c.klage.klageVurderingOptions(o)),{mutate:A}=w({mutationFn:x=>Ve({...x,behandlingUuid:o.uuid,fagsakYtelseType:d.fagsakYtelseType}),onSuccess:be}),{mutate:h}=w({mutationFn:x=>c.klage.mellomlagreKlageVurdering({behandlingUuid:o.uuid,...x}),onSuccess:()=>u()});return e.jsx(X,{...l,standardPanelProps:v,prosessPanelKode:a,prosessPanelMenyTekst:t,skalPanelVisesIMeny:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(ar,{visModal:n,lukkModal:()=>{s(!1),j("/")}}),F?e.jsx(Ce,{klageVurdering:F,previewCallback:A,saveKlage:h,readOnlySubmitButton:v.readOnlySubmitButton}):e.jsx(J,{})]})})},Cr=(r,a,t)=>l=>{const n=l.some(s=>s.kode===y.BEHANDLE_KLAGE_NFP&&"klageVurdering"in s&&s.klageVurdering===k.STADFESTE_YTELSESVEDTAK);return n&&a(!1),()=>{n?r(!0):t&&t("default","default")}};ue.__docgenInfo={description:"",methods:[],displayName:"VurderingFellesProsessStegInitPanel",props:{aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},prosessPanelKode:{required:!0,tsType:{name:"ProsessStegCode"},description:""},prosessPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Yr=[y.BEHANDLE_KLAGE_NFP],Ye=r=>e.jsx(ue,{...r,aksjonspunktKoder:Yr,prosessPanelKode:U.KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:V().formatMessage({id:"Behandlingspunkt.CheckKlageNFP"})});Ye.__docgenInfo={description:"",methods:[],displayName:"VurderingFamOgPensjonProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Jr=[y.BEHANDLE_KLAGE_NK],Je=r=>e.jsx(ue,{...r,aksjonspunktKoder:Jr,prosessPanelKode:U.KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:V().formatMessage({id:"Behandlingspunkt.CheckKlageNK"})});Je.__docgenInfo={description:"",methods:[],displayName:"VurderingKlageInstansProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const $r=({valgtProsessSteg:r,valgtFaktaSteg:a})=>{const t=n=>e.jsx(Qe,{...n}),l=n=>e.jsxs(e.Fragment,{children:[e.jsx(Se,{...n}),e.jsx(Ye,{...n}),e.jsx(_e,{...n}),e.jsx(Je,{...n}),e.jsx(He,{...n})]});return e.jsx($e,{valgtProsessSteg:r,valgtFaktaSteg:a,hentFaktaPaneler:t,hentProsessPaneler:l})};$r.__docgenInfo={description:"",methods:[],displayName:"KlagePaneler",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""}}};export{$r as default};
