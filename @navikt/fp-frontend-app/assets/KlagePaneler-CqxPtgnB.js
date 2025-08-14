import{j as e,I as _,l as V,aj as B,ak as ge,v as c,a7 as de,z as oe,B as se,a5 as ue,P as Z,b as ee,r as q,a0 as ke,bo as w,n as me,a9 as ve,a6 as Ce}from"./iframe-DM5yJJ11.js";import{a as Ye,V as Je}from"./VergeFaktaInitPanel-B6vB6N7p.js";import{u as C,P as Y,a as $e}from"./useStandardProsessPanelProps-Dh2H5dmU.js";import{K as Ke,X as J,W as We}from"./index.es-u9nt9nIa.js";import{u as $,n as z}from"./fagsakApi-lQDAKGfN.js";import{u as pe,D as ye,M as Q,A as O,O as be,c as D,a as he}from"./index.es-DOwzZLtp.js";import{A as y,b as fe}from"./index-CxiQrI1C.js";import{d as Ae,c as Xe,B as N}from"./behandlingResultatType-CVAxOrek.js";import{P as Ve,a as re}from"./OverstyringPanel-XQN5LS5E.js";import{b as L,V as m,a as P,D as Qe,H as E,L as h,B as b,M as ie}from"./VStack-BayBiNfx.js";import{M as i}from"./message-BA-bpbhC.js";import{u as W,f as ce}from"./behandlingApi-CNhyCbIy.js";import{B as X}from"./FagsakIndex-D89uD8g9.js";import{V as x}from"./vilkarUtfallType-vN0hVpa7.js";import{v as Ze}from"./validerApKodeOgHentApEnum-BJOxEDqe.js";import{L as je}from"./Link-BhuKzqM6.js";import{F as er}from"./FatterVedtakStatusModal-CSyGfcSm.js";import{D as H}from"./dokumentMalType-B-Xou3xH.js";import{K as rr}from"./KlageBehandlingModal-DTuOlFOJ.js";import"./preload-helper-D9Z9MdNV.js";import"./BehandlingMenuIndex-U7AeUq6c.js";import"./bind-BBqmxjdm.js";import"./index.es-COKG6Ig8.js";import"./Checkmark-DslFAkxI.js";import"./Popover-Bn7kEsxy.js";import"./ExclamationmarkTriangleFill-Azx_ARhg.js";import"./Kjonnkode-C-fkzSiP.js";import"./Table-CEzQyCIQ.js";import"./ChevronDown-CAPJyc9P.js";import"./Checkbox-DJFCPwP-.js";import"./CheckmarkCircleFill-DDfhsSWX.js";import"./SettPaVentModalIndex-Iob76O7L.js";import"./venteArsakType-BJdSFL9e.js";import"./useBehandlingPollingOperasjoner-D3cMcKJs.js";import"./apiPollingStatus-nT-xUZgL.js";import"./errorType-CpyBhibh.js";import"./useKodeverk-NVwC_g7T.js";import"./paths-D2YmG7Ph.js";import"./Dropdown-DfOBiH-y.js";import"./BehandlingHenlagtPanel-Db9A4GZl.js";import"./Tag-p4Ju0ujU.js";import"./TotrinnskontrollIndex-CM3WdLtE.js";import"./SupportHeader-CQ2TVtcK.js";import"./ErrorBoundary-OzbLLBcl.js";import"./IngenBehandlingValgtPanel-D7gsWAwR.js";import"./index-Bqjlt2mT.js";import"./VisittkortSakIndex-DgZUBaCL.js";import"./Spacer-DH2zdMTE.js";import"./useTrackRouteParam-CU2ThbKY.js";import"./RisikoklassifiseringIndex-CC-vTWK7.js";import"./BehandlingPaVent-DUt70gqc.js";import"./BehandlingSupportIndex-B67lqxmZ.js";import"./DokumentIndex-DCuLb0ud.js";import"./FaktaKort-CNvaODTN.js";import"./eksterneLenker-DcE6CUbm.js";import"./StarFill-C3U6nfB2.js";import"./HistorikkIndex-OYceP53G.js";import"./MeldingIndex-CFlwcEAW.js";import"./UkjentAdresseMeldingIndex-YaQAZf1C.js";import"./SettPaVentReadOnlyModal-BHH5aU-U.js";import"./UtvidEllerMinskKnapp-D440mRDj.js";import"./FagsakProfileIndex-zBTK_vTe.js";import"./FagsakData-EcIUMWsc.js";var u=(r=>(r.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",r.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",r.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",r.AVVIS_KLAGE="AVVIS_KLAGE",r.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",r))(u||{}),S=(r=>(r.DELVIS_MEDHOLD_I_KLAGE="DELVIS_MEDHOLD_I_KLAGE",r.GUNST_MEDHOLD_I_KLAGE="GUNST_MEDHOLD_I_KLAGE",r.UGUNST_MEDHOLD_I_KLAGE="UGUNST_MEDHOLD_I_KLAGE",r.UDEFINERT="-",r))(S||{});const I="ikkePaklagdVedtak",ae=r=>r.erKlagerPart===!1||r.erFristOverholdt===!1||r.erKonkret===!1||r.erSignert===!1||r.vedtak===I,Te=(r,a)=>r.find(l=>l.uuid===a),ne=(r,a)=>{const l=Te(r,a);return!!l&&(l.type===_.TILBAKEKREVING||l.type===_.TILBAKEKREVING_REVURDERING)},Ee=(r,a)=>{const l=ne(r,a),s=Te(r,a);return s&&l?{tilbakekrevingUuid:s.uuid,tilbakekrevingVedtakDato:s.avsluttet,tilbakekrevingBehandlingType:s.type}:void 0},ar=(r,a,l,s)=>({kode:s,begrunnelse:r.begrunnelse,behandlingUuid:a,erKlagerPart:r.erKlagerPart,erFristOverholdt:r.erFristOverholdt,erKonkret:r.erKonkret,erSignert:r.erSignert,erTilbakekreving:ne(l,r.vedtak),klageTilbakekreving:Ee(l,r.vedtak),paKlagdBehandlingUuid:r.vedtak===I?void 0:r.vedtak,fritekstTilBrev:ae(r)?r.fritekstTilBrev:void 0}),qe=({behandlingUuid:r,saveKlage:a,avsluttedeBehandlinger:l,spinner:s=!1,aksjonspunktCode:n,readOnly:t=!1,handleSubmit:d})=>t?null:e.jsx(L,{size:"small",variant:"primary",loading:s,onClick:d(o=>a(ar(o,r,l,n))),type:"button",children:e.jsx(i,{id:"TempsaveKlageButton.TempSaveButton"})});qe.__docgenInfo={description:"",methods:[],displayName:"TempsaveKlageButton",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunktCode:{required:!0,tsType:{name:"string"},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erFristOverholdt",value:{name:"boolean",required:!0}},{key:"erKonkret",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"vedtak",value:{name:"string",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}}],raw:"UseFormHandleSubmit<FormValues>"},description:""}}};const nr="_selectBredde_19ro0_1",lr={selectBredde:nr},tr=r=>r?.paKlagdBehandlingUuid?`${r.paKlagdBehandlingUuid}`:I,sr=(r,a,l)=>[e.jsx("option",{value:I,children:a.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"})},"formkrav")].concat([...r].sort((n,t)=>se(n.avsluttet).diff(se(t.avsluttet))).map(({uuid:n,type:t,avsluttet:d})=>e.jsx("option",{value:`${n}`,children:`${l.BehandlingType.find(({kode:o})=>o===t)?.navn??""} ${d?ue(d):""}`},n))),ir=r=>r===y.VURDERING_AV_FORMKRAV_KLAGE_NFP?"Klage.LovhjemmelNFP":"Klage.LovhjemmelKA",gr=r=>{const a=r?r.klageFormkravResultatNFP:null,l=r?r.klageVurderingResultatNFP:null;if(a)return{vedtak:tr(a),begrunnelse:a.begrunnelse,erKlagerPart:a.erKlagerPart,erKonkret:a.erKlageKonkret,erFristOverholdt:a.erKlagefirstOverholdt,erSignert:a.erSignert,fritekstTilBrev:l?l.fritekstTilBrev:void 0}},dr=(r,a)=>({erKlagerPart:r.erKlagerPart,erFristOverholdt:r.erFristOverholdt,erKonkret:r.erKonkret,erSignert:r.erSignert,begrunnelse:r.begrunnelse,kode:y.VURDERING_AV_FORMKRAV_KLAGE_NFP,vedtakBehandlingUuid:r.vedtak===I?void 0:r.vedtak,erTilbakekreving:ne(a,r.vedtak),tilbakekrevingInfo:Ee(a,r.vedtak),fritekstTilBrev:ae(r)?r.fritekstTilBrev:void 0}),Be=({klageVurdering:r,readOnlySubmitButton:a,avsluttedeBehandlinger:l,lagreFormkravVurdering:s})=>{const n=V(),{behandling:t,alleKodeverk:d,submitCallback:o,isReadOnly:g}=B(),K=sr(l,n,d),{mellomlagretFormData:k,setMellomlagretFormData:v}=ge(),j=gr(r),p=pe({defaultValues:k??j}),T=p.watch();return e.jsx(ye,{formMethods:p,onSubmit:F=>o(dr(F,l)),setDataOnUnmount:v,children:e.jsxs(m,{gap:"space-16",children:[e.jsxs(m,{gap:"space-4",children:[e.jsx(P,{size:"small",level:"3",children:n.formatMessage({id:"Klage.Formkrav.Title"})}),e.jsx(Qe,{children:n.formatMessage({id:ir(y.VURDERING_AV_FORMKRAV_KLAGE_NFP)})})]}),e.jsxs(m,{gap:"space-24",children:[!a&&e.jsx(Ke,{children:e.jsx(i,{id:"Klage.Formkrav.HelpText"})}),e.jsx(m,{gap:"space-24",children:e.jsxs(E,{gap:"space-40",children:[e.jsx("div",{children:e.jsx(Q,{name:"vedtak",control:p.control,readOnly:g,validate:[c],label:n.formatMessage({id:"Klage.Formkrav.VelgVedtak"}),selectValues:K,className:lr.selectBredde})}),e.jsxs(m,{gap:"space-20",children:[e.jsxs(E,{gap:"space-16",children:[e.jsx(O,{name:"erKlagerPart",control:p.control,label:n.formatMessage({id:"Klage.Formkrav.ErKlagerPart"}),validate:[c],isReadOnly:g,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:n.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:n.formatMessage({id:"Klage.Formkrav.Nei"})}]}),e.jsx(O,{name:"erKonkret",control:p.control,label:n.formatMessage({id:"Klage.Formkrav.ErKonkret"}),validate:[c],isReadOnly:g,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:n.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:n.formatMessage({id:"Klage.Formkrav.Nei"})}]})]}),e.jsxs(E,{gap:"space-16",children:[e.jsx(O,{name:"erFristOverholdt",control:p.control,label:n.formatMessage({id:"Klage.Formkrav.ErFristOverholdt"}),validate:[c],isReadOnly:g,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:n.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:n.formatMessage({id:"Klage.Formkrav.Nei"})}]}),e.jsx(O,{name:"erSignert",control:p.control,label:n.formatMessage({id:"Klage.Formkrav.ErSignert"}),validate:[c],isReadOnly:g,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:n.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:n.formatMessage({id:"Klage.Formkrav.Nei"})}]})]})]})]})}),e.jsx(Ve,{readOnly:g}),ae(T)&&e.jsx(be,{name:"fritekstTilBrev",control:p.control,label:n.formatMessage({id:"FormkravKlageFormNfp.Fritekst"}),maxLength:1e5,validate:[c,oe],readOnly:g,parse:de}),e.jsxs(E,{justify:"space-between",children:[e.jsx(re,{isReadOnly:g,isSubmittable:!a,isSubmitting:p.formState.isSubmitting,isDirty:p.formState.isDirty}),e.jsx(qe,{behandlingUuid:t.uuid,saveKlage:s,avsluttedeBehandlinger:l,handleSubmit:p.handleSubmit,readOnly:g,aksjonspunktCode:y.VURDERING_AV_FORMKRAV_KLAGE_NFP})]})]})]})})};Be.__docgenInfo={description:`FormkravklageformNfp

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
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Fe=({klageVurdering:r,avsluttedeBehandlinger:a})=>{const l=V(),{alleKodeverk:s}=B(),{klageFormkravResultatKA:n,underBehandlingKabal:t,behandletAvKabal:d}=r;let o=l.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"});if(n?.paKlagdBehandlingUuid){const g=a.find(K=>K.uuid===n.paKlagdBehandlingUuid);g&&(o=`${s.BehandlingType.find(k=>k.kode===g.type)?.navn} ${g.avsluttet?ue(g.avsluttet):""}`)}return e.jsxs(m,{gap:"space-16",children:[e.jsx(P,{size:"small",level:"2",children:e.jsx(i,{id:"Klage.Formkrav.Title"})}),t&&e.jsx(P,{size:"small",level:"3",children:e.jsx(i,{id:"Klage.Formkrav.SeKabalText"})}),!t&&!d&&e.jsxs(e.Fragment,{children:[e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.VelgVedtak"})}),e.jsx(b,{size:"small",children:o})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.ErKlagerPart"})}),e.jsx(b,{size:"small",children:n?.erKlagerPart?e.jsx(i,{id:"Klage.Formkrav.Ja"}):e.jsx(i,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.ErKonkret"})}),e.jsx(b,{size:"small",children:n?.erKlageKonkret?e.jsx(i,{id:"Klage.Formkrav.Ja"}):e.jsx(i,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.ErFristOverholdt"})}),e.jsx(b,{size:"small",children:n?.erKlagefirstOverholdt?e.jsx(i,{id:"Klage.Formkrav.Ja"}):e.jsx(i,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.ErSignert"})}),e.jsx(b,{size:"small",children:n?.erSignert?e.jsx(i,{id:"Klage.Formkrav.Ja"}):e.jsx(i,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.Vurdering"})}),e.jsx(b,{size:"small",children:n?.begrunnelse})]})]})]})};Fe.__docgenInfo={description:`FormkravKlageKa

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
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""}}};const or={"Klage.LovhjemmelNFP":"Fvl §§ 28, 31, 32, 33 og ftrl § 21-12","Klage.LovhjemmelKA":"Fvl §§  28, 31, 32, 34 og ftrl § 21-12","Klage.Formkrav.VelgVedtak":"Vedtaket som er påklagd","Klage.Formkrav.Title":"Vurder formkrav","Klage.Formkrav.HelpText":"Vurder om klagen oppfyller formkravene","Klage.Formkrav.IkkePåklagdVedtak":"Ikke påklagd et vedtak","Klage.Formkrav.ErKlagerPart":"Er klager part i saken?","Klage.Formkrav.ErKonkret":"Klages det på konkrete elementer i vedtaket?","Klage.Formkrav.ErFristOverholdt":"Er klagefristen overholdt?","Klage.Formkrav.ErSignert":"Er klagen signert?","Klage.Formkrav.KabalText":"Fortsett klagebehandlingen i KABAL: Kryss av, velg hjemmel og trykk send","Klage.Formkrav.SeKabalText":"Klagen behandles i KABAL","Klage.Formkrav.SendTilKabal":"Send til KABAL","Klage.Formkrav.Hjemmel":"Hjemmel","Klage.Formkrav.Ja":"Ja","Klage.Formkrav.Nei":"Nei","Klage.Formkrav.Vurdering":"Vurdering","FormkravKlageFormNfp.Fritekst":"Fritekst","TempsaveKlageButton.TempSaveButton":"Lagre","Malform.Beskrivelse":"Foretrukket språk"},ur=ee(or),le=({klageVurdering:r={},avsluttedeBehandlinger:a,readOnlySubmitButton:l,lagreFormkravVurdering:s})=>{const{aksjonspunkterForPanel:n}=B();return e.jsxs(Z,{value:ur,children:[n.some(t=>t.definisjon===y.VURDERING_AV_FORMKRAV_KLAGE_NFP)&&e.jsx(Be,{klageVurdering:r,readOnlySubmitButton:l,avsluttedeBehandlinger:a,lagreFormkravVurdering:s}),r.klageFormkravResultatKA&&e.jsx(Fe,{klageVurdering:r,avsluttedeBehandlinger:a})]})};le.__docgenInfo={description:"",methods:[],displayName:"FormkravProsessIndex",props:{klageVurdering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const kr=[y.VURDERING_AV_FORMKRAV_KLAGE_NFP],Re=()=>{const r=V(),a=C(kr),{behandling:l,alleBehandlinger:s,hentOgSettBehandling:n}=q.use(X),t=s.filter(k=>k.status===ke.AVSLUTTET).filter(k=>(k.type!==_.KLAGE||Ae(k.behandlingsresultat?.type))&&k.type!==_.ANKE).map(k=>({uuid:k.uuid,type:k.type,avsluttet:k.avsluttet??void 0})),d=W(l),{data:o,isFetching:g}=$(d.klage.klageVurderingOptions(l)),{mutate:K}=D({mutationFn:k=>d.klage.mellomlagreFormkravVurdering(k),onSuccess:()=>n()});return e.jsx(Y,{standardPanelProps:a,prosessPanelKode:w.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.FormkravKlageNFP"}),skalPanelVisesIMeny:!0,children:g?e.jsx(J,{}):e.jsx(le,{klageVurdering:o,avsluttedeBehandlinger:t,lagreFormkravVurdering:K,readOnlySubmitButton:a.readOnlySubmitButton})})};Re.__docgenInfo={description:"",methods:[],displayName:"FormKravFamOgPensjonProsessStegInitPanel"};const mr=[y.VURDER_FORMKRAV_NK],Se=()=>{const r=V(),a=C(mr),{behandling:l,alleBehandlinger:s,hentOgSettBehandling:n}=q.use(X),d=s.filter(v=>!v.behandlingHenlagt).filter(v=>v.status===ke.AVSLUTTET).filter(v=>(v.type!==_.KLAGE||Ae(v.behandlingsresultat?.type))&&v.type!==_.ANKE).map(v=>({uuid:v.uuid,type:v.type,avsluttet:v.avsluttet??void 0})),o=W(l),{data:g,isFetching:K}=$(o.klage.klageVurderingOptions(l)),{mutate:k}=D({mutationFn:v=>o.klage.mellomlagreFormkravVurdering(v),onSuccess:()=>n()});return e.jsx(Y,{standardPanelProps:a,prosessPanelKode:w.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.FormkravKlageKA"}),skalPanelVisesIMeny:!0,children:K?e.jsx(J,{}):e.jsx(le,{klageVurdering:g,avsluttedeBehandlinger:d,lagreFormkravVurdering:k,readOnlySubmitButton:a.readOnlySubmitButton})})};Se.__docgenInfo={description:"",methods:[],displayName:"FormKravKlageInstansProsessStegInitPanel"};const Oe=({behandlingPåVent:r,previewVedtakCallback:a,readOnly:l,lagreVedtak:s,isSubmitting:n})=>{const t=d=>{d.preventDefault(),a({gjelderVedtak:!0})};return e.jsxs(E,{gap:"space-8",align:"center",children:[!l&&e.jsx(L,{variant:"primary",size:"small",onClick:s,disabled:r||n,loading:n,type:"button",children:e.jsx(i,{id:"VedtakKlageForm.TilGodkjenning"})}),e.jsx(je,{href:"#",onClick:t,onKeyDown:d=>d.key==="Enter"?t(d):null,children:e.jsx(i,{id:"VedtakKlageForm.ForhandvisBrev"})})]})};Oe.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageSubmitPanel",props:{previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingPåVent:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""}}};const vr={GUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortGunst",UGUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortUgunst",DELVIS_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortDelvis"},Ne=({klageVurdering:r,previewVedtakCallback:a,behandlingsresultat:l})=>{const{behandling:s,isReadOnly:n,alleKodeverk:t,aksjonspunkterForPanel:d,submitCallback:o}=B(),g=Kr(r),K=pr(r,t),k=yr(r),v=r.klageVurderingResultatNK??r.klageVurderingResultatNFP,j=Xe(l.type),[p,T]=q.useState(!1),F=()=>{T(!0);const A=d.filter(R=>R.status===fe.OPPRETTET).map(R=>R.definisjon).map(R=>({kode:Ze(R,y.FORESLA_VEDTAK,y.FORESLA_VEDTAK_MANUELT)}));o(A).then(()=>T(!1))};return e.jsxs(m,{gap:"space-16",children:[e.jsx(P,{size:"small",level:"2",children:e.jsx(i,{id:"VedtakKlageForm.Header"})}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.Resultat"})}),k&&e.jsx(b,{size:"small",children:e.jsx(i,{id:k})})]}),l.type===N.KLAGE_AVVIST&&e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.ArsakTilAvvisning"})}),g.map(f=>e.jsx(b,{size:"small",children:t.KlageAvvistÅrsak.find(({kode:A})=>A===f)?.navn??""},f))]}),j&&e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.ArsakTilOmgjoring"})}),K]}),l.type===N.KLAGE_YTELSESVEDTAK_OPPHEVET&&e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.ArsakTilOppheving"})}),K]}),v?.klageVurdertAv==="NFP"&&e.jsx(Oe,{previewVedtakCallback:a,readOnly:n,behandlingPåVent:s.behandlingPåVent,lagreVedtak:F,isSubmitting:p})]})},Kr=r=>{if(r){if(r.klageFormkravResultatKA&&r.klageVurderingResultatNK)return r.klageFormkravResultatKA.avvistArsaker;if(r.klageFormkravResultatNFP)return r.klageFormkravResultatNFP.avvistArsaker}return[]},pr=(r,a)=>r?.klageVurderingResultatNK?.klageMedholdArsak?a.KlageMedholdÅrsak.find(({kode:l})=>l===r.klageVurderingResultatNK?.klageMedholdArsak)?.navn??"":r?.klageVurderingResultatNFP?.klageMedholdArsak?a.KlageMedholdÅrsak.find(({kode:l})=>l===r.klageVurderingResultatNFP?.klageMedholdArsak)?.navn??"":null,yr=r=>{const a=r.klageVurderingResultatNK??r.klageVurderingResultatNFP;switch(a?.klageVurdering){case u.AVVIS_KLAGE:return"VedtakKlageForm.KlageAvvist";case u.STADFESTE_YTELSESVEDTAK:return"VedtakKlageForm.KlageStadfestet";case u.OPPHEVE_YTELSESVEDTAK:return"VedtakKlageForm.YtelsesvedtakOpphevet";case u.HJEMSENDE_UTEN_Å_OPPHEVE:return"VedtakKlageForm.HjemmsendUtenOpphev";case u.MEDHOLD_I_KLAGE:return vr[a?.klageVurderingOmgjoer??""];default:return"VedtakKlageForm.IkkeFastsatt"}};Ne.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageForm",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const br={"VedtakKlageForm.ArsakTilAvslag":"Årsak til avslag","VedtakKlageForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakKlageForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakKlageForm.Resultat":"Resultat av klage","VedtakKlageForm.ArsakTilAvvisning":"Årsak til avvisning","VedtakKlageForm.ArsakTilOmgjoring":"Årsak til omgjøring","VedtakKlageForm.ArsakTilOppheving":"Årsak til oppheving","VedtakKlageForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakKlageForm.ResultatKlageAvvist":"Klagen er avvist","VedtakKlageForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakKlageForm.TilGodkjenning":"Til godkjenning","VedtakKlageForm.ForhandvisBrev":"Forhåndsvis vedtaksbrev","VedtakKlageForm.ArsakTilMedhold":"Årsak","VedtakKlageForm.KlageOmgjortGunst":"Vedtaket er omgjort til gunst","VedtakKlageForm.KlageOmgjortUgunst":"Vedtaket er omgjort til ugunst","VedtakKlageForm.KlageOmgjortDelvis":"Vedtaket er delvis omgjort til gunst","VedtakKlageForm.HjemmsendUtenOpphev":"Vedtaket er hjemsendt","VedtakKlageForm.IkkeFastsatt":"Ikke fastsatt","VedtakKlageForm.Header":"Resultat","VedtakKlageForm.KlageAvvist":"Avvist fordi klagen ikke oppfyller formkravene","VedtakKlageForm.KlageStadfestet":"Vedtaket er stadfestet","VedtakKlageForm.YtelsesvedtakOpphevet":"Vedtak er opphevet og hjemsendt"},hr=ee(br),_e=({klageVurdering:r,previewVedtakCallback:a})=>{const{behandling:l}=B();if(!l.behandlingsresultat)throw new Error(`behandlingsresultat finnes ikke for behandling ${l.uuid}`);return e.jsx(Z,{value:hr,children:e.jsx(Ne,{klageVurdering:r,previewVedtakCallback:a,behandlingsresultat:l.behandlingsresultat})})};_e.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const fr=[y.FORESLA_VEDTAK,y.FATTER_VEDTAK,y.FORESLA_VEDTAK_MANUELT],Pe=()=>{const r=V(),{behandling:a,setSkalOppdatereEtterBekreftelseAvAp:l}=q.use(X),{aksjonspunkt:s}=a,[n,t]=q.useState(!1),d=Vr(t,l),o=C(fr,[],d),g=Ar(a.behandlingsresultat,s),K=W(a),k=me(),{data:v}=$(K.klage.klageVurderingOptions(a)),{mutate:j}=D({mutationFn:p=>ce({...p,behandlingUuid:a.uuid}),onSuccess:ve});return e.jsxs(e.Fragment,{children:[e.jsx(er,{visModal:n,lukkModal:()=>{t(!1),k("/")},tekst:r.formatMessage({id:"FatterVedtakStatusModal.KlagenErFerdigbehandlet"})}),e.jsx(Y,{skalPanelVisesIMeny:!0,prosessPanelKode:w.KLAGE_RESULTAT,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.ResultatKlage"}),standardPanelProps:o,overstyrtStatus:g,skalMarkeresSomAktiv:g!==x.IKKE_VURDERT,children:v?e.jsx(_e,{klageVurdering:v,previewVedtakCallback:j}):e.jsx(J,{})})]})},Ar=(r,a=[])=>{const l=a.some(n=>n.status===fe.OPPRETTET);if(a.length===0||l)return x.IKKE_VURDERT;const s=r?.type;return s===N.HENLAGT_KLAGE_TRUKKET||s===N.HENLAGT_FEILOPPRETTET?x.IKKE_VURDERT:s===N.KLAGE_AVVIST||s===N.KLAGE_YTELSESVEDTAK_OPPHEVET?x.IKKE_OPPFYLT:x.OPPFYLT},Vr=(r,a)=>()=>(a(!1),()=>{r(!0)});Pe.__docgenInfo={description:"",methods:[],displayName:"KlageresultatProsessStegInitPanel"};const Me=({klageVurdering:r})=>{const a=V(),{alleKodeverk:l}=B(),{begrunnelse:s,fritekstTilBrev:n,klageVurdering:t,klageMedholdArsak:d,klageVurderingOmgjoer:o}=r.klageVurderingResultatNK??{},g=l.KlageMedholdÅrsak;return e.jsxs(m,{gap:"space-16",children:[e.jsx(P,{size:"small",level:"2",children:a.formatMessage({id:"Klage.ResolveKlage.Title"})}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),e.jsxs(b,{size:"small",children:[t===u.STADFESTE_YTELSESVEDTAK&&e.jsx(i,{id:"Klage.ResolveKlage.KeepVedtakNk"}),t===u.MEDHOLD_I_KLAGE&&e.jsx(i,{id:"Klage.ResolveKlage.ChangeVedtak"}),t===u.HJEMSENDE_UTEN_Å_OPPHEVE&&e.jsx(i,{id:"Klage.Behandle.Hjemsendt"}),t===u.OPPHEVE_YTELSESVEDTAK&&e.jsx(i,{id:"Klage.ResolveKlage.NullifyVedtak"})]})]}),t===u.MEDHOLD_I_KLAGE&&e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(b,{size:"small",children:g.find(K=>K.kode===d)?.navn}),e.jsxs(b,{size:"small",children:[o===S.GUNST_MEDHOLD_I_KLAGE&&e.jsx(i,{id:"Klage.Behandle.Omgjort"}),o===S.UGUNST_MEDHOLD_I_KLAGE&&e.jsx(i,{id:"Klage.Behandle.Ugunst"}),o===S.DELVIS_MEDHOLD_I_KLAGE&&e.jsx(i,{id:"Klage.Behandle.DelvisOmgjort"})]})]}),(t===u.OPPHEVE_YTELSESVEDTAK||t===u.HJEMSENDE_UTEN_Å_OPPHEVE)&&e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(b,{size:"small",children:g.find(K=>K.kode===d)?.navn})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"FritekstKlageBrevTextField.Fritekst"})}),e.jsx(b,{size:"small",children:n})]}),e.jsxs(m,{gap:"space-4",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),e.jsx(b,{size:"small",children:s})]})]})};Me.__docgenInfo={description:`BehandleklageformNfp

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
}>`},description:""}}};const He=({erModalÅpen:r,lukkModal:a,isSubmittable:l,isSubmitting:s,isDirty:n,readOnly:t,valgtHjemmel:d})=>{const o=V();return e.jsx(ie,{width:"500px",open:r,"aria-label":o.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:a,children:e.jsx(ie.Body,{children:e.jsxs(m,{gap:"space-12",children:[e.jsxs(m,{gap:"space-16",children:[e.jsx(h,{size:"medium",children:e.jsx(i,{id:"Klage.Modal.Overskrift"})}),e.jsx(b,{children:e.jsx(i,{id:"Klage.Modal.SendTilKlageinstans"})}),e.jsx(b,{children:e.jsx(i,{id:"Klage.Modal.Valg"})}),e.jsx(b,{children:e.jsx(i,{id:"Klage.Modal.Oppretthold"})}),d&&e.jsx(b,{children:e.jsx(i,{id:"Klage.Modal.Hjemmel",values:{hjemmel:d}})})]}),e.jsx("div",{children:e.jsxs(E,{gap:"space-8",children:[e.jsx(re,{isReadOnly:t,isSubmittable:l,isSubmitting:s,isDirty:n}),e.jsx(L,{size:"small",variant:"primary",onClick:a,autoFocus:!0,type:"button",children:e.jsx(i,{id:"Klage.Modal.Avbryt"})})]})})]})})})};He.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const cr="_fritekstTilBrevTextArea_n72am_1",jr={fritekstTilBrevTextArea:cr},xe=({språkkode:r,readOnly:a=!0})=>{const{control:l}=he();return e.jsx("div",{className:jr.fritekstTilBrevTextArea,children:e.jsx(be,{name:"fritekstTilBrev",control:l,label:V().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[c,oe],readOnly:a,maxLength:1e5,badges:[{type:"info",titleText:Ce(r)}],parse:de})})};xe.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{språkkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Tr="_select_1owoa_7",Er="_selectReadOnly_1owoa_10",U={select:Tr,selectReadOnly:Er},De=({readOnly:r,medholdReasons:a,alleHjemmlerMedNavn:l,klageVurdering:s})=>{const n=V(),{control:t}=he(),d=a.map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode)),o=l.map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode));return e.jsxs(m,{gap:"space-16",children:[e.jsx(O,{name:"klageVurdering",control:t,validate:[c],isReadOnly:r,isHorizontal:!0,radios:[{value:u.MEDHOLD_I_KLAGE,label:n.formatMessage({id:"Klage.ResolveKlage.ChangeVedtak"})},{value:u.STADFESTE_YTELSESVEDTAK,label:n.formatMessage({id:"Klage.ResolveKlage.KeepVedtakNfp"})}]}),s===u.MEDHOLD_I_KLAGE&&e.jsx(We,{children:e.jsxs(m,{gap:"space-16",children:[e.jsx(Q,{readOnly:r,control:t,name:"klageMedholdArsak",selectValues:d,className:r?U.selectReadOnly:U.select,label:n.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[c]}),e.jsx(O,{name:"klageVurderingOmgjoer",control:t,validate:[c],isReadOnly:r,radios:[{value:S.GUNST_MEDHOLD_I_KLAGE,label:n.formatMessage({id:"Klage.Behandle.Omgjort"})},{value:S.UGUNST_MEDHOLD_I_KLAGE,label:n.formatMessage({id:"Klage.Behandle.Ugunst"})},{value:S.DELVIS_MEDHOLD_I_KLAGE,label:n.formatMessage({id:"Klage.Behandle.DelvisOmgjort"})}]})]})}),e.jsx(Q,{readOnly:r,control:t,name:"klageHjemmel",selectValues:o,className:r?U.selectReadOnly:U.select,label:n.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[c]})]})};De.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<'KlageHjemmel'>[]"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const qr=(r,a)=>{switch(a){case u.STADFESTE_YTELSESVEDTAK:return r?H.KLAGE_STADFESTET:H.KLAGE_OVERSENDT;case u.OPPHEVE_YTELSESVEDTAK:return H.KLAGE_HJEMSENDT;case u.HJEMSENDE_UTEN_Å_OPPHEVE:return H.KLAGE_HJEMSENDT;case u.MEDHOLD_I_KLAGE:return H.KLAGE_OMGJORING;default:return}},Br=(r,a)=>({fritekst:a??"",dokumentMal:qr(!1,r),erOpphevetKlage:r===u.OPPHEVE_YTELSESVEDTAK}),Le=({previewCallback:r,fritekstTilBrev:a,klageVurdering:l})=>{const s=n=>{r(Br(l,a)),n.preventDefault()};return e.jsx(je,{href:"#",onClick:s,onKeyDown:n=>n.key==="Enter"?s(n):null,children:e.jsx(i,{id:"PreviewKlageLink.ForhandvisBrev"})})};Le.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: string;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},fritekstTilBrev:{required:!1,tsType:{name:"string"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Fr=r=>({klageMedholdArsak:r.klageVurdering===u.MEDHOLD_I_KLAGE?r.klageMedholdArsak:void 0,klageVurderingOmgjoer:r.klageVurdering===u.MEDHOLD_I_KLAGE?r.klageVurderingOmgjoer:void 0,klageHjemmel:r.klageHjemmel,klageVurdering:z(r.klageVurdering),fritekstTilBrev:r.fritekstTilBrev,begrunnelse:r.begrunnelse,kode:y.BEHANDLE_KLAGE_NFP}),G=r=>{if(r&&r!=="-")return r},Rr=(r,a)=>r.filter(({kode:l})=>a.includes(l)).sort((l,s)=>l.kode.localeCompare(s.kode)),Sr=r=>r.map(a=>a),Or=r=>({klageMedholdArsak:G(r?.klageMedholdArsak),klageVurderingOmgjoer:G(r?.klageVurderingOmgjoer),klageHjemmel:G(r?.klageHjemmel),klageVurdering:G(r?.klageVurdering),begrunnelse:r?r.begrunnelse:void 0,fritekstTilBrev:r?r.fritekstTilBrev:void 0}),we=({klageVurdering:r,previewCallback:a,saveKlage:l,readOnlySubmitButton:s,alleAktuelleHjemler:n})=>{const{behandling:t,alleKodeverk:d,submitCallback:o,isReadOnly:g}=B(),K=Rr(d.KlageHjemmel,Sr(n)),k=V(),[v,j]=q.useState(!1),p=Or(r.klageVurderingResultatNFP),{mellomlagretFormData:T,setMellomlagretFormData:F}=ge(),f=pe({defaultValues:T??p}),A=f.watch(),R=()=>{j(!1)},ze=()=>{j(!0)};return e.jsx(ye,{formMethods:f,onSubmit:M=>o(Fr(M)),setDataOnUnmount:F,children:e.jsxs(m,{gap:"space-16",children:[e.jsx(P,{size:"small",level:"2",children:k.formatMessage({id:"Klage.ResolveKlage.Title"})}),!s&&e.jsx(Ke,{children:[e.jsx(i,{id:"Klage.ResolveKlage.HelpText"},y.BEHANDLE_KLAGE_NFP)]}),e.jsx(De,{readOnly:g,klageVurdering:A.klageVurdering,medholdReasons:d.KlageMedholdÅrsak,alleHjemmlerMedNavn:K}),e.jsx(Ve,{readOnly:g,text:k.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),e.jsx(xe,{språkkode:t.språkkode,readOnly:g}),e.jsxs(E,{justify:"space-between",children:[e.jsxs(E,{gap:"space-16",children:[A.klageVurdering===u.STADFESTE_YTELSESVEDTAK&&e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"primary",type:"button",size:"small",onClick:()=>ze(),disabled:g,children:e.jsx(i,{id:"Klage.Behandle.Bekreft"})}),e.jsx(He,{erModalÅpen:v,lukkModal:R,valgtHjemmel:K.find(M=>M.kode===A.klageHjemmel)?.navn,readOnly:g,isSubmittable:!s,isSubmitting:f.formState.isSubmitting,isDirty:f.formState.isValid})]}),A.klageVurdering!==u.STADFESTE_YTELSESVEDTAK&&e.jsx(re,{isReadOnly:g,isSubmittable:!s,isSubmitting:f.formState.isSubmitting,isDirty:f.formState.isDirty}),!g&&A.klageVurdering&&A.fritekstTilBrev&&A.fritekstTilBrev.length>2&&e.jsx(Le,{previewCallback:a,fritekstTilBrev:A.fritekstTilBrev,klageVurdering:A.klageVurdering})]}),!g&&e.jsx(L,{size:"small",variant:"primary",onClick:f.handleSubmit(M=>l(Nr(M,y.BEHANDLE_KLAGE_NFP))),type:"button",children:e.jsx(i,{id:"Klage.ResolveKlage.TempSaveButton"})})]})]})})},Nr=(r,a)=>({kode:a,klageMedholdArsak:r.klageVurdering===u.MEDHOLD_I_KLAGE||r.klageVurdering===u.OPPHEVE_YTELSESVEDTAK?r.klageMedholdArsak:void 0,klageVurderingOmgjoer:r.klageVurdering===u.MEDHOLD_I_KLAGE?r.klageVurderingOmgjoer:void 0,klageHjemmel:r.klageHjemmel,fritekstTilBrev:z(r.fritekstTilBrev),begrunnelse:z(r.begrunnelse),klageVurdering:z(r.klageVurdering)});we.__docgenInfo={description:`BehandleklageformNfp

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
}>`},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const _r={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},Pr=ee(_r),Ie=({klageVurdering:r,saveKlage:a,previewCallback:l,readOnlySubmitButton:s})=>{const{aksjonspunkterForPanel:n}=B();return e.jsxs(Z,{value:Pr,children:[r.klageVurderingResultatNK&&e.jsx(Me,{klageVurdering:r}),n.some(t=>t.definisjon===y.BEHANDLE_KLAGE_NFP)&&e.jsx(we,{klageVurdering:r,saveKlage:a,previewCallback:l,readOnlySubmitButton:s,alleAktuelleHjemler:r.aktuelleHjemler?r.aktuelleHjemler:[]})]})};Ie.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const te=({aksjonspunktKoder:r,prosessPanelKode:a,prosessPanelMenyTekst:l})=>{const[s,n]=q.useState(!1),{behandling:t,hentOgSettBehandling:d,setSkalOppdatereEtterBekreftelseAvAp:o,oppdaterProsessStegOgFaktaPanelIUrl:g}=q.use(X),K=o?Mr(n,o,g):void 0,k=C(r,[],K),v=W(t),j=me(),{data:p}=$(v.klage.klageVurderingOptions(t)),{mutate:T}=D({mutationFn:f=>ce({...f,behandlingUuid:t.uuid}),onSuccess:ve}),{mutate:F}=D({mutationFn:f=>v.klage.mellomlagreKlageVurdering({behandlingUuid:t.uuid,...f}),onSuccess:()=>d()});return e.jsx(Y,{standardPanelProps:k,prosessPanelKode:a,prosessPanelMenyTekst:l,skalPanelVisesIMeny:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(rr,{visModal:s,lukkModal:()=>{n(!1),j("/")}}),p?e.jsx(Ie,{klageVurdering:p,previewCallback:T,saveKlage:F,readOnlySubmitButton:k.readOnlySubmitButton}):e.jsx(J,{})]})})},Mr=(r,a,l)=>s=>{const n=s.some(t=>t.kode===y.BEHANDLE_KLAGE_NFP&&"klageVurdering"in t&&t.klageVurdering===u.STADFESTE_YTELSESVEDTAK);return n&&a(!1),()=>{n?r(!0):l&&l("default","default")}};te.__docgenInfo={description:"",methods:[],displayName:"VurderingFellesProsessStegInitPanel",props:{aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},prosessPanelKode:{required:!0,tsType:{name:"ProsessStegCode"},description:""},prosessPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""}}};const Hr=[y.BEHANDLE_KLAGE_NFP],Ue=()=>e.jsx(te,{aksjonspunktKoder:Hr,prosessPanelKode:w.KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:V().formatMessage({id:"Behandlingspunkt.CheckKlageNFP"})});Ue.__docgenInfo={description:"",methods:[],displayName:"VurderingFamOgPensjonProsessStegInitPanel"};const xr=[y.BEHANDLE_KLAGE_NK],Ge=()=>e.jsx(te,{aksjonspunktKoder:xr,prosessPanelKode:w.KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:V().formatMessage({id:"Behandlingspunkt.CheckKlageNK"})});Ge.__docgenInfo={description:"",methods:[],displayName:"VurderingKlageInstansProsessStegInitPanel"};const Dr=({valgtProsessSteg:r,valgtFaktaSteg:a})=>e.jsxs(e.Fragment,{children:[e.jsxs($e,{valgtProsessSteg:r,valgtFaktaSteg:a,children:[e.jsx(Re,{}),e.jsx(Ue,{}),e.jsx(Se,{}),e.jsx(Ge,{}),e.jsx(Pe,{})]}),e.jsx(Ye,{valgtFaktaSteg:a,valgtProsessSteg:r,children:e.jsx(Je,{})})]});Dr.__docgenInfo={description:"",methods:[],displayName:"KlagePaneler",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""}}};export{Dr as default};
