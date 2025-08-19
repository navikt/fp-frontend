import{j as e,I as P,l as V,aj as F,ak as de,v as E,a7 as oe,z as ue,B as ie,a5 as ke,P as ee,b as re,r as B,a0 as me,bo as I,n as ve,a9 as Ke,a6 as Ye}from"./iframe-C_pem-iZ.js";import{a as Je,V as $e}from"./VergeFaktaInitPanel-IgZSd92W.js";import{u as Y,P as J,a as We}from"./useStandardProsessPanelProps-DsSCmP1H.js";import{K as pe,X as $,W as Xe}from"./index.es-BAGfTcv0.js";import{u as W,n as C}from"./fagsakApi-DwYQPymS.js";import{u as ye,D as be,M as Z,F as O,R as c,O as he,c as L,a as fe}from"./index.es-DTeh083t.js";import{A as y,b as Ae}from"./index-COpVL6IN.js";import{d as ce,c as Qe,B as _}from"./behandlingResultatType-CVAxOrek.js";import{P as je,a as ae}from"./OverstyringPanel-uLKjqfsR.js";import{b as w,V as m,a as M,D as Ze,H as j,L as h,B as b,M as ge}from"./VStack-DEQxCF5o.js";import{M as t}from"./message-BX-FlK9f.js";import{u as X,f as Ve}from"./behandlingApi-DrfEVZkY.js";import{B as Q}from"./FagsakIndex-Bcv8kKrJ.js";import{V as D}from"./vilkarUtfallType-vN0hVpa7.js";import{v as er}from"./validerApKodeOgHentApEnum-BJOxEDqe.js";import{L as Ee}from"./Link-BS_fQUcz.js";import{F as rr}from"./FatterVedtakStatusModal-BO2-7KVd.js";import{D as H}from"./dokumentMalType-B-Xou3xH.js";import{K as ar}from"./KlageBehandlingModal-CUkB89DE.js";import"./preload-helper-D9Z9MdNV.js";import"./BehandlingMenuIndex-4xHkZdD8.js";import"./bind-DFypGmWO.js";import"./index.es-BHr3AbsS.js";import"./Checkmark-D_-lfKTt.js";import"./Popover-DvIL_ZeP.js";import"./ExclamationmarkTriangleFill-BtYcLVXp.js";import"./Kjonnkode-C-fkzSiP.js";import"./Table-j69rZkKy.js";import"./Checkbox-D2sJvrIb.js";import"./CheckmarkCircleFill-CESBtcrC.js";import"./SettPaVentModalIndex-CH82dXtg.js";import"./venteArsakType-BJdSFL9e.js";import"./useBehandlingPollingOperasjoner-CdKNbPfi.js";import"./apiPollingStatus-nT-xUZgL.js";import"./errorType-B3tEbzvc.js";import"./useKodeverk-BVs-OxnZ.js";import"./paths-D9VV9zaA.js";import"./Dropdown-NwNaJApp.js";import"./BehandlingHenlagtPanel-jVCYKUv5.js";import"./Tag-BAGhg_qo.js";import"./TotrinnskontrollIndex-DgOGwJh5.js";import"./SupportHeader-BwdqM4aP.js";import"./ErrorBoundary-CGzg0LVu.js";import"./IngenBehandlingValgtPanel-C38ykVd3.js";import"./index-BJMGMVyW.js";import"./VisittkortSakIndex-DetQ319u.js";import"./Spacer-BbvNzcYO.js";import"./useTrackRouteParam-LZyCXgr3.js";import"./RisikoklassifiseringIndex-B8bIRIwa.js";import"./BehandlingPaVent-ChFDzpUA.js";import"./BehandlingSupportIndex-BlP3PwN4.js";import"./DokumentIndex-45dEH-r-.js";import"./FaktaKort-rt9ohItl.js";import"./eksterneLenker-DcE6CUbm.js";import"./StarFill-BJqNLGUh.js";import"./HistorikkIndex-D69kd4bY.js";import"./MeldingIndex-B0tZKlff.js";import"./UkjentAdresseMeldingIndex-sWbAAM1e.js";import"./SettPaVentReadOnlyModal-Dxyb0sb2.js";import"./UtvidEllerMinskKnapp-TumLacC0.js";import"./FagsakProfileIndex-DHE_-6UR.js";import"./FagsakData-EcIUMWsc.js";var u=(r=>(r.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",r.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",r.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",r.AVVIS_KLAGE="AVVIS_KLAGE",r.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",r))(u||{}),N=(r=>(r.DELVIS_MEDHOLD_I_KLAGE="DELVIS_MEDHOLD_I_KLAGE",r.GUNST_MEDHOLD_I_KLAGE="GUNST_MEDHOLD_I_KLAGE",r.UGUNST_MEDHOLD_I_KLAGE="UGUNST_MEDHOLD_I_KLAGE",r.UDEFINERT="-",r))(N||{});const U="ikkePaklagdVedtak",ne=r=>r.erKlagerPart===!1||r.erFristOverholdt===!1||r.erKonkret===!1||r.erSignert===!1||r.vedtak===U,Te=(r,a)=>r.find(n=>n.uuid===a),le=(r,a)=>{const n=Te(r,a);return!!n&&(n.type===P.TILBAKEKREVING||n.type===P.TILBAKEKREVING_REVURDERING)},qe=(r,a)=>{const n=le(r,a),i=Te(r,a);return i&&n?{tilbakekrevingUuid:i.uuid,tilbakekrevingVedtakDato:i.avsluttet,tilbakekrevingBehandlingType:i.type}:void 0},nr=(r,a,n,i)=>({kode:i,begrunnelse:r.begrunnelse,behandlingUuid:a,erKlagerPart:r.erKlagerPart,erFristOverholdt:r.erFristOverholdt,erKonkret:r.erKonkret,erSignert:r.erSignert,erTilbakekreving:le(n,r.vedtak),klageTilbakekreving:qe(n,r.vedtak),paKlagdBehandlingUuid:r.vedtak===U?void 0:r.vedtak,fritekstTilBrev:ne(r)?r.fritekstTilBrev:void 0}),Be=({behandlingUuid:r,saveKlage:a,avsluttedeBehandlinger:n,spinner:i=!1,aksjonspunktCode:l,readOnly:s=!1,handleSubmit:d})=>s?null:e.jsx(w,{size:"small",variant:"primary",loading:i,onClick:d(o=>a(nr(o,r,n,l))),type:"button",children:e.jsx(t,{id:"TempsaveKlageButton.TempSaveButton"})});Be.__docgenInfo={description:"",methods:[],displayName:"TempsaveKlageButton",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunktCode:{required:!0,tsType:{name:"string"},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  erKlagerPart: boolean;
  erFristOverholdt: boolean;
  erKonkret: boolean;
  erSignert: boolean;
  begrunnelse: string;
  vedtak: string;
  fritekstTilBrev?: string;
}`,signature:{properties:[{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erFristOverholdt",value:{name:"boolean",required:!0}},{key:"erKonkret",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"vedtak",value:{name:"string",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}}],raw:"UseFormHandleSubmit<FormValues>"},description:""}}};const lr="_selectBredde_19ro0_1",tr={selectBredde:lr},sr=r=>r?.paKlagdBehandlingUuid?`${r.paKlagdBehandlingUuid}`:U,ir=(r,a,n)=>[e.jsx("option",{value:U,children:a.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"})},"formkrav")].concat([...r].sort((l,s)=>ie(l.avsluttet).diff(ie(s.avsluttet))).map(({uuid:l,type:s,avsluttet:d})=>e.jsx("option",{value:`${l}`,children:`${n.BehandlingType.find(({kode:o})=>o===s)?.navn??""} ${d?ke(d):""}`},l))),gr=r=>r===y.VURDERING_AV_FORMKRAV_KLAGE_NFP?"Klage.LovhjemmelNFP":"Klage.LovhjemmelKA",dr=r=>{const a=r?r.klageFormkravResultatNFP:null,n=r?r.klageVurderingResultatNFP:null;if(a)return{vedtak:sr(a),begrunnelse:a.begrunnelse,erKlagerPart:a.erKlagerPart,erKonkret:a.erKlageKonkret,erFristOverholdt:a.erKlagefirstOverholdt,erSignert:a.erSignert,fritekstTilBrev:n?n.fritekstTilBrev:void 0}},or=(r,a)=>({erKlagerPart:r.erKlagerPart,erFristOverholdt:r.erFristOverholdt,erKonkret:r.erKonkret,erSignert:r.erSignert,begrunnelse:r.begrunnelse,kode:y.VURDERING_AV_FORMKRAV_KLAGE_NFP,vedtakBehandlingUuid:r.vedtak===U?void 0:r.vedtak,erTilbakekreving:le(a,r.vedtak),tilbakekrevingInfo:qe(a,r.vedtak),fritekstTilBrev:ne(r)?r.fritekstTilBrev:void 0}),Fe=({klageVurdering:r,readOnlySubmitButton:a,avsluttedeBehandlinger:n,lagreFormkravVurdering:i})=>{const l=V(),{behandling:s,alleKodeverk:d,submitCallback:o,isReadOnly:g}=F(),K=ir(n,l,d),{mellomlagretFormData:k,setMellomlagretFormData:v}=de(),T=dr(r),p=ye({defaultValues:k??T}),q=p.watch();return e.jsx(be,{formMethods:p,onSubmit:R=>o(or(R,n)),setDataOnUnmount:v,children:e.jsxs(m,{gap:"space-16",children:[e.jsxs(m,{gap:"space-4",children:[e.jsx(M,{size:"small",level:"3",children:l.formatMessage({id:"Klage.Formkrav.Title"})}),e.jsx(Ze,{children:l.formatMessage({id:gr(y.VURDERING_AV_FORMKRAV_KLAGE_NFP)})})]}),e.jsxs(m,{gap:"space-24",children:[!a&&e.jsx(pe,{children:e.jsx(t,{id:"Klage.Formkrav.HelpText"})}),e.jsx(m,{gap:"space-24",children:e.jsxs(j,{gap:"space-40",children:[e.jsx("div",{children:e.jsx(Z,{name:"vedtak",control:p.control,readOnly:g,validate:[E],label:l.formatMessage({id:"Klage.Formkrav.VelgVedtak"}),selectValues:K,className:tr.selectBredde})}),e.jsxs(m,{gap:"space-20",children:[e.jsxs(j,{gap:"space-16",children:[e.jsx(O,{name:"erKlagerPart",control:p.control,label:l.formatMessage({id:"Klage.Formkrav.ErKlagerPart"}),validate:[E],isReadOnly:g,children:e.jsxs(j,{gap:"space-16",children:[e.jsx(c,{value:!0,size:"small",children:e.jsx(t,{id:"Klage.Formkrav.Ja"})}),e.jsx(c,{value:!1,size:"small",children:e.jsx(t,{id:"Klage.Formkrav.Nei"})})]})}),e.jsx(O,{name:"erKonkret",control:p.control,label:l.formatMessage({id:"Klage.Formkrav.ErKonkret"}),validate:[E],isReadOnly:g,children:e.jsxs(j,{gap:"space-16",children:[e.jsx(c,{value:!0,size:"small",children:e.jsx(t,{id:"Klage.Formkrav.Ja"})}),e.jsx(c,{value:!1,size:"small",children:e.jsx(t,{id:"Klage.Formkrav.Nei"})})]})})]}),e.jsxs(j,{gap:"space-16",children:[e.jsx(O,{name:"erFristOverholdt",control:p.control,label:l.formatMessage({id:"Klage.Formkrav.ErFristOverholdt"}),validate:[E],isReadOnly:g,children:e.jsxs(j,{gap:"space-16",children:[e.jsx(c,{value:!0,size:"small",children:e.jsx(t,{id:"Klage.Formkrav.Ja"})}),e.jsx(c,{value:!1,size:"small",children:e.jsx(t,{id:"Klage.Formkrav.Nei"})})]})}),e.jsx(O,{name:"erSignert",control:p.control,label:l.formatMessage({id:"Klage.Formkrav.ErSignert"}),validate:[E],isReadOnly:g,children:e.jsxs(j,{gap:"space-16",children:[e.jsx(c,{value:!0,size:"small",children:e.jsx(t,{id:"Klage.Formkrav.Ja"})}),e.jsx(c,{value:!1,size:"small",children:e.jsx(t,{id:"Klage.Formkrav.Nei"})})]})})]})]})]})}),e.jsx(je,{readOnly:g}),ne(q)&&e.jsx(he,{name:"fritekstTilBrev",control:p.control,label:l.formatMessage({id:"FormkravKlageFormNfp.Fritekst"}),maxLength:1e5,validate:[E,ue],readOnly:g,parse:oe}),e.jsxs(j,{justify:"space-between",children:[e.jsx(ae,{isReadOnly:g,isSubmittable:!a,isSubmitting:p.formState.isSubmitting,isDirty:p.formState.isDirty}),e.jsx(Be,{behandlingUuid:s.uuid,saveKlage:i,avsluttedeBehandlinger:n,handleSubmit:p.handleSubmit,readOnly:g,aksjonspunktCode:y.VURDERING_AV_FORMKRAV_KLAGE_NFP})]})]})]})})};Fe.__docgenInfo={description:`FormkravklageformNfp

Setter opp aksjonspunktet for formkrav klage (NFP).`,methods:[],displayName:"FormkravKlageFormNfp",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Re=({klageVurdering:r,avsluttedeBehandlinger:a})=>{const n=V(),{alleKodeverk:i}=F(),{klageFormkravResultatKA:l,underBehandlingKabal:s,behandletAvKabal:d}=r;let o=n.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"});if(l?.paKlagdBehandlingUuid){const g=a.find(K=>K.uuid===l.paKlagdBehandlingUuid);g&&(o=`${i.BehandlingType.find(k=>k.kode===g.type)?.navn} ${g.avsluttet?ke(g.avsluttet):""}`)}return e.jsxs(m,{gap:"space-16",children:[e.jsx(M,{size:"small",level:"2",children:e.jsx(t,{id:"Klage.Formkrav.Title"})}),s&&e.jsx(M,{size:"small",level:"3",children:e.jsx(t,{id:"Klage.Formkrav.SeKabalText"})}),!s&&!d&&e.jsxs(e.Fragment,{children:[e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"Klage.Formkrav.VelgVedtak"})}),e.jsx(b,{size:"small",children:o})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"Klage.Formkrav.ErKlagerPart"})}),e.jsx(b,{size:"small",children:l?.erKlagerPart?e.jsx(t,{id:"Klage.Formkrav.Ja"}):e.jsx(t,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"Klage.Formkrav.ErKonkret"})}),e.jsx(b,{size:"small",children:l?.erKlageKonkret?e.jsx(t,{id:"Klage.Formkrav.Ja"}):e.jsx(t,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"Klage.Formkrav.ErFristOverholdt"})}),e.jsx(b,{size:"small",children:l?.erKlagefirstOverholdt?e.jsx(t,{id:"Klage.Formkrav.Ja"}):e.jsx(t,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"Klage.Formkrav.ErSignert"})}),e.jsx(b,{size:"small",children:l?.erSignert?e.jsx(t,{id:"Klage.Formkrav.Ja"}):e.jsx(t,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"Klage.Formkrav.Vurdering"})}),e.jsx(b,{size:"small",children:l?.begrunnelse})]})]})]})};Re.__docgenInfo={description:`FormkravKlageKa

Readonly panel for formkrav klage (KA).`,methods:[],displayName:"FormkravKlageKa",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""}}};const ur={"Klage.LovhjemmelNFP":"Fvl §§ 28, 31, 32, 33 og ftrl § 21-12","Klage.LovhjemmelKA":"Fvl §§  28, 31, 32, 34 og ftrl § 21-12","Klage.Formkrav.VelgVedtak":"Vedtaket som er påklagd","Klage.Formkrav.Title":"Vurder formkrav","Klage.Formkrav.HelpText":"Vurder om klagen oppfyller formkravene","Klage.Formkrav.IkkePåklagdVedtak":"Ikke påklagd et vedtak","Klage.Formkrav.ErKlagerPart":"Er klager part i saken?","Klage.Formkrav.ErKonkret":"Klages det på konkrete elementer i vedtaket?","Klage.Formkrav.ErFristOverholdt":"Er klagefristen overholdt?","Klage.Formkrav.ErSignert":"Er klagen signert?","Klage.Formkrav.KabalText":"Fortsett klagebehandlingen i KABAL: Kryss av, velg hjemmel og trykk send","Klage.Formkrav.SeKabalText":"Klagen behandles i KABAL","Klage.Formkrav.SendTilKabal":"Send til KABAL","Klage.Formkrav.Hjemmel":"Hjemmel","Klage.Formkrav.Ja":"Ja","Klage.Formkrav.Nei":"Nei","Klage.Formkrav.Vurdering":"Vurdering","FormkravKlageFormNfp.Fritekst":"Fritekst","TempsaveKlageButton.TempSaveButton":"Lagre","Malform.Beskrivelse":"Foretrukket språk"},kr=re(ur),te=({klageVurdering:r={},avsluttedeBehandlinger:a,readOnlySubmitButton:n,lagreFormkravVurdering:i})=>{const{aksjonspunkterForPanel:l}=F();return e.jsxs(ee,{value:kr,children:[l.some(s=>s.definisjon===y.VURDERING_AV_FORMKRAV_KLAGE_NFP)&&e.jsx(Fe,{klageVurdering:r,readOnlySubmitButton:n,avsluttedeBehandlinger:a,lagreFormkravVurdering:i}),r.klageFormkravResultatKA&&e.jsx(Re,{klageVurdering:r,avsluttedeBehandlinger:a})]})};te.__docgenInfo={description:"",methods:[],displayName:"FormkravProsessIndex",props:{klageVurdering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const mr=[y.VURDERING_AV_FORMKRAV_KLAGE_NFP],Se=()=>{const r=V(),a=Y(mr),{behandling:n,alleBehandlinger:i,hentOgSettBehandling:l}=B.use(Q),s=i.filter(k=>k.status===me.AVSLUTTET).filter(k=>(k.type!==P.KLAGE||ce(k.behandlingsresultat?.type))&&k.type!==P.ANKE).map(k=>({uuid:k.uuid,type:k.type,avsluttet:k.avsluttet??void 0})),d=X(n),{data:o,isFetching:g}=W(d.klage.klageVurderingOptions(n)),{mutate:K}=L({mutationFn:k=>d.klage.mellomlagreFormkravVurdering(k),onSuccess:()=>l()});return e.jsx(J,{standardPanelProps:a,prosessPanelKode:I.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.FormkravKlageNFP"}),skalPanelVisesIMeny:!0,children:g?e.jsx($,{}):e.jsx(te,{klageVurdering:o,avsluttedeBehandlinger:s,lagreFormkravVurdering:K,readOnlySubmitButton:a.readOnlySubmitButton})})};Se.__docgenInfo={description:"",methods:[],displayName:"FormKravFamOgPensjonProsessStegInitPanel"};const vr=[y.VURDER_FORMKRAV_NK],Ne=()=>{const r=V(),a=Y(vr),{behandling:n,alleBehandlinger:i,hentOgSettBehandling:l}=B.use(Q),d=i.filter(v=>!v.behandlingHenlagt).filter(v=>v.status===me.AVSLUTTET).filter(v=>(v.type!==P.KLAGE||ce(v.behandlingsresultat?.type))&&v.type!==P.ANKE).map(v=>({uuid:v.uuid,type:v.type,avsluttet:v.avsluttet??void 0})),o=X(n),{data:g,isFetching:K}=W(o.klage.klageVurderingOptions(n)),{mutate:k}=L({mutationFn:v=>o.klage.mellomlagreFormkravVurdering(v),onSuccess:()=>l()});return e.jsx(J,{standardPanelProps:a,prosessPanelKode:I.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.FormkravKlageKA"}),skalPanelVisesIMeny:!0,children:K?e.jsx($,{}):e.jsx(te,{klageVurdering:g,avsluttedeBehandlinger:d,lagreFormkravVurdering:k,readOnlySubmitButton:a.readOnlySubmitButton})})};Ne.__docgenInfo={description:"",methods:[],displayName:"FormKravKlageInstansProsessStegInitPanel"};const Oe=({behandlingPåVent:r,previewVedtakCallback:a,readOnly:n,lagreVedtak:i,isSubmitting:l})=>{const s=d=>{d.preventDefault(),a({gjelderVedtak:!0})};return e.jsxs(j,{gap:"space-8",align:"center",children:[!n&&e.jsx(w,{variant:"primary",size:"small",onClick:i,disabled:r||l,loading:l,type:"button",children:e.jsx(t,{id:"VedtakKlageForm.TilGodkjenning"})}),e.jsx(Ee,{href:"#",onClick:s,onKeyDown:d=>d.key==="Enter"?s(d):null,children:e.jsx(t,{id:"VedtakKlageForm.ForhandvisBrev"})})]})};Oe.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageSubmitPanel",props:{previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingPåVent:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Kr={GUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortGunst",UGUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortUgunst",DELVIS_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortDelvis"},_e=({klageVurdering:r,previewVedtakCallback:a,behandlingsresultat:n})=>{const{behandling:i,isReadOnly:l,alleKodeverk:s,aksjonspunkterForPanel:d,submitCallback:o}=F(),g=pr(r),K=yr(r,s),k=br(r),v=r.klageVurderingResultatNK??r.klageVurderingResultatNFP,T=Qe(n.type),[p,q]=B.useState(!1),R=()=>{q(!0);const A=d.filter(S=>S.status===Ae.OPPRETTET).map(S=>S.definisjon).map(S=>({kode:er(S,y.FORESLA_VEDTAK,y.FORESLA_VEDTAK_MANUELT)}));o(A).then(()=>q(!1))};return e.jsxs(m,{gap:"space-16",children:[e.jsx(M,{size:"small",level:"2",children:e.jsx(t,{id:"VedtakKlageForm.Header"})}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"VedtakKlageForm.Resultat"})}),k&&e.jsx(b,{size:"small",children:e.jsx(t,{id:k})})]}),n.type===_.KLAGE_AVVIST&&e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"VedtakKlageForm.ArsakTilAvvisning"})}),g.map(f=>e.jsx(b,{size:"small",children:s.KlageAvvistÅrsak.find(({kode:A})=>A===f)?.navn??""},f))]}),T&&e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"VedtakKlageForm.ArsakTilOmgjoring"})}),K]}),n.type===_.KLAGE_YTELSESVEDTAK_OPPHEVET&&e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"VedtakKlageForm.ArsakTilOppheving"})}),K]}),v?.klageVurdertAv==="NFP"&&e.jsx(Oe,{previewVedtakCallback:a,readOnly:l,behandlingPåVent:i.behandlingPåVent,lagreVedtak:R,isSubmitting:p})]})},pr=r=>{if(r){if(r.klageFormkravResultatKA&&r.klageVurderingResultatNK)return r.klageFormkravResultatKA.avvistArsaker;if(r.klageFormkravResultatNFP)return r.klageFormkravResultatNFP.avvistArsaker}return[]},yr=(r,a)=>r?.klageVurderingResultatNK?.klageMedholdArsak?a.KlageMedholdÅrsak.find(({kode:n})=>n===r.klageVurderingResultatNK?.klageMedholdArsak)?.navn??"":r?.klageVurderingResultatNFP?.klageMedholdArsak?a.KlageMedholdÅrsak.find(({kode:n})=>n===r.klageVurderingResultatNFP?.klageMedholdArsak)?.navn??"":null,br=r=>{const a=r.klageVurderingResultatNK??r.klageVurderingResultatNFP;switch(a?.klageVurdering){case u.AVVIS_KLAGE:return"VedtakKlageForm.KlageAvvist";case u.STADFESTE_YTELSESVEDTAK:return"VedtakKlageForm.KlageStadfestet";case u.OPPHEVE_YTELSESVEDTAK:return"VedtakKlageForm.YtelsesvedtakOpphevet";case u.HJEMSENDE_UTEN_Å_OPPHEVE:return"VedtakKlageForm.HjemmsendUtenOpphev";case u.MEDHOLD_I_KLAGE:return Kr[a?.klageVurderingOmgjoer??""];default:return"VedtakKlageForm.IkkeFastsatt"}};_e.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageForm",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
}>`},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingsresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const hr={"VedtakKlageForm.ArsakTilAvslag":"Årsak til avslag","VedtakKlageForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakKlageForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakKlageForm.Resultat":"Resultat av klage","VedtakKlageForm.ArsakTilAvvisning":"Årsak til avvisning","VedtakKlageForm.ArsakTilOmgjoring":"Årsak til omgjøring","VedtakKlageForm.ArsakTilOppheving":"Årsak til oppheving","VedtakKlageForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakKlageForm.ResultatKlageAvvist":"Klagen er avvist","VedtakKlageForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakKlageForm.TilGodkjenning":"Til godkjenning","VedtakKlageForm.ForhandvisBrev":"Forhåndsvis vedtaksbrev","VedtakKlageForm.ArsakTilMedhold":"Årsak","VedtakKlageForm.KlageOmgjortGunst":"Vedtaket er omgjort til gunst","VedtakKlageForm.KlageOmgjortUgunst":"Vedtaket er omgjort til ugunst","VedtakKlageForm.KlageOmgjortDelvis":"Vedtaket er delvis omgjort til gunst","VedtakKlageForm.HjemmsendUtenOpphev":"Vedtaket er hjemsendt","VedtakKlageForm.IkkeFastsatt":"Ikke fastsatt","VedtakKlageForm.Header":"Resultat","VedtakKlageForm.KlageAvvist":"Avvist fordi klagen ikke oppfyller formkravene","VedtakKlageForm.KlageStadfestet":"Vedtaket er stadfestet","VedtakKlageForm.YtelsesvedtakOpphevet":"Vedtak er opphevet og hjemsendt"},fr=re(hr),Pe=({klageVurdering:r,previewVedtakCallback:a})=>{const{behandling:n}=F();if(!n.behandlingsresultat)throw new Error(`behandlingsresultat finnes ikke for behandling ${n.uuid}`);return e.jsx(ee,{value:fr,children:e.jsx(_e,{klageVurdering:r,previewVedtakCallback:a,behandlingsresultat:n.behandlingsresultat})})};Pe.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
}>`},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Ar=[y.FORESLA_VEDTAK,y.FATTER_VEDTAK,y.FORESLA_VEDTAK_MANUELT],Me=()=>{const r=V(),{behandling:a,setSkalOppdatereEtterBekreftelseAvAp:n}=B.use(Q),{aksjonspunkt:i}=a,[l,s]=B.useState(!1),d=jr(s,n),o=Y(Ar,[],d),g=cr(a.behandlingsresultat,i),K=X(a),k=ve(),{data:v}=W(K.klage.klageVurderingOptions(a)),{mutate:T}=L({mutationFn:p=>Ve({...p,behandlingUuid:a.uuid}),onSuccess:Ke});return e.jsxs(e.Fragment,{children:[e.jsx(rr,{visModal:l,lukkModal:()=>{s(!1),k("/")},tekst:r.formatMessage({id:"FatterVedtakStatusModal.KlagenErFerdigbehandlet"})}),e.jsx(J,{skalPanelVisesIMeny:!0,prosessPanelKode:I.KLAGE_RESULTAT,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.ResultatKlage"}),standardPanelProps:o,overstyrtStatus:g,skalMarkeresSomAktiv:g!==D.IKKE_VURDERT,children:v?e.jsx(Pe,{klageVurdering:v,previewVedtakCallback:T}):e.jsx($,{})})]})},cr=(r,a=[])=>{const n=a.some(l=>l.status===Ae.OPPRETTET);if(a.length===0||n)return D.IKKE_VURDERT;const i=r?.type;return i===_.HENLAGT_KLAGE_TRUKKET||i===_.HENLAGT_FEILOPPRETTET?D.IKKE_VURDERT:i===_.KLAGE_AVVIST||i===_.KLAGE_YTELSESVEDTAK_OPPHEVET?D.IKKE_OPPFYLT:D.OPPFYLT},jr=(r,a)=>()=>(a(!1),()=>{r(!0)});Me.__docgenInfo={description:"",methods:[],displayName:"KlageresultatProsessStegInitPanel"};const xe=({klageVurdering:r})=>{const a=V(),{alleKodeverk:n}=F(),{begrunnelse:i,fritekstTilBrev:l,klageVurdering:s,klageMedholdArsak:d,klageVurderingOmgjoer:o}=r.klageVurderingResultatNK??{},g=n.KlageMedholdÅrsak;return e.jsxs(m,{gap:"space-16",children:[e.jsx(M,{size:"small",level:"2",children:a.formatMessage({id:"Klage.ResolveKlage.Title"})}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),e.jsxs(b,{size:"small",children:[s===u.STADFESTE_YTELSESVEDTAK&&e.jsx(t,{id:"Klage.ResolveKlage.KeepVedtakNk"}),s===u.MEDHOLD_I_KLAGE&&e.jsx(t,{id:"Klage.ResolveKlage.ChangeVedtak"}),s===u.HJEMSENDE_UTEN_Å_OPPHEVE&&e.jsx(t,{id:"Klage.Behandle.Hjemsendt"}),s===u.OPPHEVE_YTELSESVEDTAK&&e.jsx(t,{id:"Klage.ResolveKlage.NullifyVedtak"})]})]}),s===u.MEDHOLD_I_KLAGE&&e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(b,{size:"small",children:g.find(K=>K.kode===d)?.navn}),e.jsxs(b,{size:"small",children:[o===N.GUNST_MEDHOLD_I_KLAGE&&e.jsx(t,{id:"Klage.Behandle.Omgjort"}),o===N.UGUNST_MEDHOLD_I_KLAGE&&e.jsx(t,{id:"Klage.Behandle.Ugunst"}),o===N.DELVIS_MEDHOLD_I_KLAGE&&e.jsx(t,{id:"Klage.Behandle.DelvisOmgjort"})]})]}),(s===u.OPPHEVE_YTELSESVEDTAK||s===u.HJEMSENDE_UTEN_Å_OPPHEVE)&&e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(b,{size:"small",children:g.find(K=>K.kode===d)?.navn})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"FritekstKlageBrevTextField.Fritekst"})}),e.jsx(b,{size:"small",children:l})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(t,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),e.jsx(b,{size:"small",children:i})]})]})};xe.__docgenInfo={description:`BehandleklageformNfp

Setter opp readonly-panel for behandling av klage (KA).`,methods:[],displayName:"BehandleKlageFormKa",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
}>`},description:""}}};const He=({erModalÅpen:r,lukkModal:a,isSubmittable:n,isSubmitting:i,isDirty:l,readOnly:s,valgtHjemmel:d})=>{const o=V();return e.jsx(ge,{width:"500px",open:r,"aria-label":o.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:a,children:e.jsx(ge.Body,{children:e.jsxs(m,{gap:"space-12",children:[e.jsxs(m,{gap:"space-16",children:[e.jsx(h,{size:"medium",children:e.jsx(t,{id:"Klage.Modal.Overskrift"})}),e.jsx(b,{children:e.jsx(t,{id:"Klage.Modal.SendTilKlageinstans"})}),e.jsx(b,{children:e.jsx(t,{id:"Klage.Modal.Valg"})}),e.jsx(b,{children:e.jsx(t,{id:"Klage.Modal.Oppretthold"})}),d&&e.jsx(b,{children:e.jsx(t,{id:"Klage.Modal.Hjemmel",values:{hjemmel:d}})})]}),e.jsx("div",{children:e.jsxs(j,{gap:"space-8",children:[e.jsx(ae,{isReadOnly:s,isSubmittable:n,isSubmitting:i,isDirty:l}),e.jsx(w,{size:"small",variant:"primary",onClick:a,autoFocus:!0,type:"button",children:e.jsx(t,{id:"Klage.Modal.Avbryt"})})]})})]})})})};He.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const Vr="_fritekstTilBrevTextArea_n72am_1",Er={fritekstTilBrevTextArea:Vr},De=({språkkode:r,readOnly:a=!0})=>{const{control:n}=fe();return e.jsx("div",{className:Er.fritekstTilBrevTextArea,children:e.jsx(he,{name:"fritekstTilBrev",control:n,label:V().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[E,ue],readOnly:a,maxLength:1e5,badges:[{type:"info",titleText:Ye(r)}],parse:oe})})};De.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{språkkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Tr="_select_1owoa_7",qr="_selectReadOnly_1owoa_10",G={select:Tr,selectReadOnly:qr},Le=({readOnly:r,medholdReasons:a,alleHjemmlerMedNavn:n,klageVurdering:i})=>{const l=V(),{control:s}=fe(),d=a.map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode)),o=n.map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode));return e.jsxs(m,{gap:"space-12",children:[e.jsx(O,{name:"klageVurdering",control:s,validate:[E],isReadOnly:r,children:e.jsxs(j,{gap:"space-16",children:[e.jsx(c,{value:u.MEDHOLD_I_KLAGE,size:"small",children:e.jsx(t,{id:"Klage.ResolveKlage.ChangeVedtak"})}),e.jsx(c,{value:u.STADFESTE_YTELSESVEDTAK,size:"small",children:e.jsx(t,{id:"Klage.ResolveKlage.KeepVedtakNfp"})})]})}),i===u.MEDHOLD_I_KLAGE&&e.jsx(Xe,{children:e.jsxs(m,{gap:"space-16",children:[e.jsx(Z,{readOnly:r,control:s,name:"klageMedholdArsak",selectValues:d,className:r?G.selectReadOnly:G.select,label:l.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[E]}),e.jsxs(O,{name:"klageVurderingOmgjoer",control:s,validate:[E],isReadOnly:r,children:[e.jsx(c,{value:N.GUNST_MEDHOLD_I_KLAGE,size:"small",children:e.jsx(t,{id:"Klage.Behandle.Omgjort"})}),e.jsx(c,{value:N.UGUNST_MEDHOLD_I_KLAGE,size:"small",children:e.jsx(t,{id:"Klage.Behandle.Ugunst"})}),e.jsx(c,{value:N.DELVIS_MEDHOLD_I_KLAGE,size:"small",children:e.jsx(t,{id:"Klage.Behandle.DelvisOmgjort"})})]})]})}),e.jsx(Z,{readOnly:r,control:s,name:"klageHjemmel",selectValues:o,className:r?G.selectReadOnly:G.select,label:l.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[E]})]})};Le.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'KlageMedholdÅrsak'>[]"},description:""},alleHjemmlerMedNavn:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'KlageHjemmel'>[]"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Br=(r,a)=>{switch(a){case u.STADFESTE_YTELSESVEDTAK:return r?H.KLAGE_STADFESTET:H.KLAGE_OVERSENDT;case u.OPPHEVE_YTELSESVEDTAK:return H.KLAGE_HJEMSENDT;case u.HJEMSENDE_UTEN_Å_OPPHEVE:return H.KLAGE_HJEMSENDT;case u.MEDHOLD_I_KLAGE:return H.KLAGE_OMGJORING;default:return}},Fr=(r,a)=>({fritekst:a??"",dokumentMal:Br(!1,r),erOpphevetKlage:r===u.OPPHEVE_YTELSESVEDTAK}),we=({previewCallback:r,fritekstTilBrev:a,klageVurdering:n})=>{const i=l=>{r(Fr(n,a)),l.preventDefault()};return e.jsx(Ee,{href:"#",onClick:i,onKeyDown:l=>l.key==="Enter"?i(l):null,children:e.jsx(t,{id:"PreviewKlageLink.ForhandvisBrev"})})};we.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: string;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},fritekstTilBrev:{required:!1,tsType:{name:"string"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Rr=r=>({klageMedholdArsak:r.klageVurdering===u.MEDHOLD_I_KLAGE?r.klageMedholdArsak:void 0,klageVurderingOmgjoer:r.klageVurdering===u.MEDHOLD_I_KLAGE?r.klageVurderingOmgjoer:void 0,klageHjemmel:r.klageHjemmel,klageVurdering:C(r.klageVurdering),fritekstTilBrev:r.fritekstTilBrev,begrunnelse:r.begrunnelse,kode:y.BEHANDLE_KLAGE_NFP}),z=r=>{if(r&&r!=="-")return r},Sr=(r,a)=>r.filter(({kode:n})=>a.includes(n)).sort((n,i)=>n.kode.localeCompare(i.kode)),Nr=r=>r.map(a=>a),Or=r=>({klageMedholdArsak:z(r?.klageMedholdArsak),klageVurderingOmgjoer:z(r?.klageVurderingOmgjoer),klageHjemmel:z(r?.klageHjemmel),klageVurdering:z(r?.klageVurdering),begrunnelse:r?r.begrunnelse:void 0,fritekstTilBrev:r?r.fritekstTilBrev:void 0}),Ie=({klageVurdering:r,previewCallback:a,saveKlage:n,readOnlySubmitButton:i,alleAktuelleHjemler:l})=>{const{behandling:s,alleKodeverk:d,submitCallback:o,isReadOnly:g}=F(),K=Sr(d.KlageHjemmel,Nr(l)),k=V(),[v,T]=B.useState(!1),p=Or(r.klageVurderingResultatNFP),{mellomlagretFormData:q,setMellomlagretFormData:R}=de(),f=ye({defaultValues:q??p}),A=f.watch(),S=()=>{T(!1)},Ce=()=>{T(!0)};return e.jsx(be,{formMethods:f,onSubmit:x=>o(Rr(x)),setDataOnUnmount:R,children:e.jsxs(m,{gap:"space-16",children:[e.jsx(M,{size:"small",level:"2",children:k.formatMessage({id:"Klage.ResolveKlage.Title"})}),!i&&e.jsx(pe,{children:[e.jsx(t,{id:"Klage.ResolveKlage.HelpText"},y.BEHANDLE_KLAGE_NFP)]}),e.jsx(Le,{readOnly:g,klageVurdering:A.klageVurdering,medholdReasons:d.KlageMedholdÅrsak,alleHjemmlerMedNavn:K}),e.jsx(je,{readOnly:g,text:k.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),e.jsx(De,{språkkode:s.språkkode,readOnly:g}),e.jsxs(j,{justify:"space-between",children:[e.jsxs(j,{gap:"space-16",children:[A.klageVurdering===u.STADFESTE_YTELSESVEDTAK&&e.jsxs(e.Fragment,{children:[e.jsx(w,{variant:"primary",type:"button",size:"small",onClick:()=>Ce(),disabled:g,children:e.jsx(t,{id:"Klage.Behandle.Bekreft"})}),e.jsx(He,{erModalÅpen:v,lukkModal:S,valgtHjemmel:K.find(x=>x.kode===A.klageHjemmel)?.navn,readOnly:g,isSubmittable:!i,isSubmitting:f.formState.isSubmitting,isDirty:f.formState.isValid})]}),A.klageVurdering!==u.STADFESTE_YTELSESVEDTAK&&e.jsx(ae,{isReadOnly:g,isSubmittable:!i,isSubmitting:f.formState.isSubmitting,isDirty:f.formState.isDirty}),!g&&A.klageVurdering&&A.fritekstTilBrev&&A.fritekstTilBrev.length>2&&e.jsx(we,{previewCallback:a,fritekstTilBrev:A.fritekstTilBrev,klageVurdering:A.klageVurdering})]}),!g&&e.jsx(w,{size:"small",variant:"primary",onClick:f.handleSubmit(x=>n(_r(x,y.BEHANDLE_KLAGE_NFP))),type:"button",children:e.jsx(t,{id:"Klage.ResolveKlage.TempSaveButton"})})]})]})})},_r=(r,a)=>({kode:a,klageMedholdArsak:r.klageVurdering===u.MEDHOLD_I_KLAGE||r.klageVurdering===u.OPPHEVE_YTELSESVEDTAK?r.klageMedholdArsak:void 0,klageVurderingOmgjoer:r.klageVurdering===u.MEDHOLD_I_KLAGE?r.klageVurderingOmgjoer:void 0,klageHjemmel:r.klageHjemmel,fritekstTilBrev:C(r.fritekstTilBrev),begrunnelse:C(r.begrunnelse),klageVurdering:C(r.klageVurdering)});Ie.__docgenInfo={description:`BehandleklageformNfp

Presentasjonskomponent. Setter opp aksjonspunktet for behandling av klage (NFP).`,methods:[],displayName:"BehandleKlageFormNfp",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
}>`},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const Pr={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},Mr=re(Pr),Ue=({klageVurdering:r,saveKlage:a,previewCallback:n,readOnlySubmitButton:i})=>{const{aksjonspunkterForPanel:l}=F();return e.jsxs(ee,{value:Mr,children:[r.klageVurderingResultatNK&&e.jsx(xe,{klageVurdering:r}),l.some(s=>s.definisjon===y.BEHANDLE_KLAGE_NFP)&&e.jsx(Ie,{klageVurdering:r,saveKlage:a,previewCallback:n,readOnlySubmitButton:i,alleAktuelleHjemler:r.aktuelleHjemler?r.aktuelleHjemler:[]})]})};Ue.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageVurderingResultatNFP",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"KlageMedholdÅrsak",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"KlageHjemmel",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>`,required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: KlageAvvistÅrsak[];
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: string;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
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
}>`},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const se=({aksjonspunktKoder:r,prosessPanelKode:a,prosessPanelMenyTekst:n})=>{const[i,l]=B.useState(!1),{behandling:s,hentOgSettBehandling:d,setSkalOppdatereEtterBekreftelseAvAp:o,oppdaterProsessStegOgFaktaPanelIUrl:g}=B.use(Q),K=o?xr(l,o,g):void 0,k=Y(r,[],K),v=X(s),T=ve(),{data:p}=W(v.klage.klageVurderingOptions(s)),{mutate:q}=L({mutationFn:f=>Ve({...f,behandlingUuid:s.uuid}),onSuccess:Ke}),{mutate:R}=L({mutationFn:f=>v.klage.mellomlagreKlageVurdering({behandlingUuid:s.uuid,...f}),onSuccess:()=>d()});return e.jsx(J,{standardPanelProps:k,prosessPanelKode:a,prosessPanelMenyTekst:n,skalPanelVisesIMeny:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(ar,{visModal:i,lukkModal:()=>{l(!1),T("/")}}),p?e.jsx(Ue,{klageVurdering:p,previewCallback:q,saveKlage:R,readOnlySubmitButton:k.readOnlySubmitButton}):e.jsx($,{})]})})},xr=(r,a,n)=>i=>{const l=i.some(s=>s.kode===y.BEHANDLE_KLAGE_NFP&&"klageVurdering"in s&&s.klageVurdering===u.STADFESTE_YTELSESVEDTAK);return l&&a(!1),()=>{l?r(!0):n&&n("default","default")}};se.__docgenInfo={description:"",methods:[],displayName:"VurderingFellesProsessStegInitPanel",props:{aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},prosessPanelKode:{required:!0,tsType:{name:"ProsessStegCode"},description:""},prosessPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""}}};const Hr=[y.BEHANDLE_KLAGE_NFP],Ge=()=>e.jsx(se,{aksjonspunktKoder:Hr,prosessPanelKode:I.KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:V().formatMessage({id:"Behandlingspunkt.CheckKlageNFP"})});Ge.__docgenInfo={description:"",methods:[],displayName:"VurderingFamOgPensjonProsessStegInitPanel"};const Dr=[y.BEHANDLE_KLAGE_NK],ze=()=>e.jsx(se,{aksjonspunktKoder:Dr,prosessPanelKode:I.KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:V().formatMessage({id:"Behandlingspunkt.CheckKlageNK"})});ze.__docgenInfo={description:"",methods:[],displayName:"VurderingKlageInstansProsessStegInitPanel"};const Lr=({valgtProsessSteg:r,valgtFaktaSteg:a})=>e.jsxs(e.Fragment,{children:[e.jsxs(We,{valgtProsessSteg:r,valgtFaktaSteg:a,children:[e.jsx(Se,{}),e.jsx(Ge,{}),e.jsx(Ne,{}),e.jsx(ze,{}),e.jsx(Me,{})]}),e.jsx(Je,{valgtFaktaSteg:a,valgtProsessSteg:r,children:e.jsx($e,{})})]});Lr.__docgenInfo={description:"",methods:[],displayName:"KlagePaneler",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""}}};export{Lr as default};
