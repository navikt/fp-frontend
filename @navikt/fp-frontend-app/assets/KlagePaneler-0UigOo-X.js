import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as $e,V as Qe}from"./VergeFaktaInitPanel-BZ74hVvm.js";import{u as Y,P as J,a as Ze}from"./useStandardProsessPanelProps-VjUTd4nP.js";import{r as V}from"./index-DjhIdADd.js";import{n as L,B as _,k as A,al as E,ai as ke,m as N,a3 as Xe,V as z,H as F,L as f,h as y,P as ne,d as me,J as ve,l as oe}from"./withPanelData-ByNS2pOS.js";import{M as s,a as g,L as pe,l as Ke,F as ye,n as ae,V as $,Q as be,p as We,r as er}from"./index.es-BvCsXNBl.js";import{u as Q}from"./initFetch-D3LZ5Ei1.js";import{a as fe,e as he,Z as re,b as q,J as S,K as je,N as ce,u as D}from"./index.es-CCAXsuwR.js";import{A as K}from"./aksjonspunktCodes-BLM-Fgv6.js";import{a as Ve,b as rr,B as R}from"./behandlingResultatType-DHbqkXMl.js";import{P as w}from"./skjermlenkeCodes-1SvLTuBb.js";import{h as C}from"./moment-C5S46NFB.js";import{K as B}from"./alleKodeverk-BFmIlMu4.js";import{g as te}from"./kodeverkUtils-DLZgokMR.js";import{P as Ae,a as le}from"./OverstyringPanel-DuRLNsem.js";import{u as Z,c as qe}from"./behandlingApi-DiOzRUPy.js";import{B as X}from"./FagsakIndex-BCr8lhXq.js";import{A as Te}from"./aksjonspunktStatus-xM4O_ZUY.js";import{V as H}from"./BehandlingHenlagtPanel-LbzS57cB.js";import{v as nr}from"./validerApKodeOgHentApEnum-Oem6VNOD.js";import{L as Fe}from"./Link-DdtMrpKb.js";import{F as ar}from"./FatterVedtakStatusModal-BjmuzcDs.js";import{D as M}from"./dokumentMalType-uHvYWaNM.js";import{K as tr}from"./KlageBehandlingModal-D5N50l5h.js";import"./BehandlingMenuIndex-DtlUX4Y9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./bind-oYjWB_aQ.js";import"./index.es-B9szFIoj.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./Popover-okZcWelG.js";import"./ExclamationmarkTriangleFill-5kC2HnbK.js";import"./Kjonnkode-C-fkzSiP.js";import"./Table-ByLY5fQ7.js";import"./CheckmarkCircleFill-D6vFqTxW.js";import"./behandlingArsakType-CTXggz2Y.js";import"./SettPaVentModalIndex-Co97s1Yz.js";import"./dayjs.min-Cke173X9.js";import"./venteArsakType-BJdSFL9e.js";import"./FagsakData-4_VgJz8T.js";import"./useBehandlingPollingOperasjoner-CAIrmvuB.js";import"./errorType-rskzfovb.js";import"./RestApiErrorContext-D7YnyNzE.js";import"./index-CiTJJs0Y.js";import"./decorators-Bnaor6Ku.js";import"./useKodeverk-DTzYov1w.js";import"./useVisForhandsvisningAvMelding-B6qGBHxC.js";import"./paths-Bb4JS-8l.js";import"./v4-CtRu48qb.js";import"./entry-preview-B70R7VLI.js";import"./iframe-B04TWCJx.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-C7LF3qXI.js";import"./index-CXQShRbs.js";import"./Tag-C6d7hdWG.js";import"./Checkbox-ONIxfw5Z.js";import"./TotrinnskontrollIndex-DxCrplE_.js";import"./SupportHeader-CbL_0MFt.js";import"./ErrorBoundary-D6mgamLL.js";import"./IngenBehandlingValgtPanel-D7wHueDS.js";import"./VisittkortSakIndex-oPC2rrvk.js";import"./Spacer-BwBidrjB.js";import"./useTrackRouteParam-CcKIsdn1.js";import"./RisikoklassifiseringIndex-CXt1bLDu.js";import"./fagsakStatus-NXwGwLtb.js";import"./BehandlingPaVent-wO53xThw.js";import"./BehandlingSupportIndex-DTo2XznD.js";import"./DokumentIndex-DLQ5n8XI.js";import"./eksterneLenker-DOKwbE_M.js";import"./StarFill-JBD7npiH.js";import"./HistorikkIndex-DDz-D06A.js";import"./MeldingIndex-BHdaYYSp.js";import"./UkjentAdresseMeldingIndex-B83ooChj.js";import"./SettPaVentReadOnlyModal-CehIzQus.js";import"./FagsakProfileIndex-DXxE8v58.js";var m=(r=>(r.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",r.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",r.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",r.AVVIS_KLAGE="AVVIS_KLAGE",r.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",r))(m||{}),O=(r=>(r.DELVIS_MEDHOLD_I_KLAGE="DELVIS_MEDHOLD_I_KLAGE",r.GUNST_MEDHOLD_I_KLAGE="GUNST_MEDHOLD_I_KLAGE",r.UGUNST_MEDHOLD_I_KLAGE="UGUNST_MEDHOLD_I_KLAGE",r.UDEFINERT="-",r))(O||{});const U="ikkePaklagdVedtak",ie=r=>r.erKlagerPart===!1||r.erFristOverholdt===!1||r.erKonkret===!1||r.erSignert===!1||r.vedtak===U,Be=(r,n)=>r.find(t=>t.uuid===n),se=(r,n)=>{const t=Be(r,n);return!!t&&(t.type===_.TILBAKEKREVING||t.type===_.TILBAKEKREVING_REVURDERING)},Ee=(r,n)=>{const t=se(r,n),l=Be(r,n);return l&&t?{tilbakekrevingUuid:l.uuid,tilbakekrevingVedtakDato:l.avsluttet,tilbakekrevingBehandlingType:l.type}:void 0},lr=(r,n,t,l)=>({kode:l,begrunnelse:r.begrunnelse,behandlingUuid:n,erKlagerPart:r.erKlagerPart,erFristOverholdt:r.erFristOverholdt,erKonkret:r.erKonkret,erSignert:r.erSignert,erTilbakekreving:se(t,r.vedtak),klageTilbakekreving:Ee(t,r.vedtak),paKlagdBehandlingUuid:r.vedtak===U?void 0:r.vedtak,fritekstTilBrev:ie(r)?r.fritekstTilBrev:void 0}),Pe=({behandlingUuid:r,saveKlage:n,avsluttedeBehandlinger:t,spinner:l=!1,aksjonspunktCode:a,readOnly:i=!1,handleSubmit:u})=>i?null:e.jsx(L,{size:"small",variant:"primary",loading:l,onClick:u(o=>n(lr(o,r,t,a))),type:"button",children:e.jsx(s,{id:"TempsaveKlageButton.TempSaveButton"})});Pe.__docgenInfo={description:"",methods:[],displayName:"TempsaveKlageButton",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunktCode:{required:!0,tsType:{name:"string"},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erKlagerPart",value:{name:"boolean",required:!1}},{key:"erFristOverholdt",value:{name:"boolean",required:!1}},{key:"erKonkret",value:{name:"boolean",required:!1}},{key:"erSignert",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vedtak",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}}],raw:"UseFormHandleSubmit<FormValues>"},description:""}}};const ir="_selectBredde_19ro0_1",sr={selectBredde:ir},gr=r=>r!=null&&r.paKlagdBehandlingUuid?`${r.paKlagdBehandlingUuid}`:U,dr=(r,n,t)=>[e.jsx("option",{value:U,children:n.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"})},"formkrav")].concat([...r].sort((a,i)=>C(a.avsluttet).diff(C(i.avsluttet))).map(a=>e.jsx("option",{value:`${a.uuid}`,children:`${t(a.type,B.BEHANDLING_TYPE)} ${C(a.avsluttet).format(ye)}`},a.uuid))),ur=r=>r===K.VURDERING_AV_FORMKRAV_KLAGE_NFP?"Klage.LovhjemmelNFP":"Klage.LovhjemmelKA",or=r=>{const n=r?r.klageFormkravResultatNFP:null,t=r?r.klageVurderingResultatNFP:null;return{vedtak:n?gr(n):"",begrunnelse:n?n.begrunnelse:void 0,erKlagerPart:n?n.erKlagerPart:void 0,erKonkret:n?n.erKlageKonkret:void 0,erFristOverholdt:n?n.erKlagefirstOverholdt:void 0,erSignert:n?n.erSignert:void 0,fritekstTilBrev:t?t.fritekstTilBrev:void 0}},kr=(r,n)=>({erKlagerPart:r.erKlagerPart,erFristOverholdt:r.erFristOverholdt,erKonkret:r.erKonkret,erSignert:r.erSignert,begrunnelse:r.begrunnelse,kode:K.VURDERING_AV_FORMKRAV_KLAGE_NFP,vedtakBehandlingUuid:r.vedtak===U?void 0:r.vedtak,erTilbakekreving:se(n,r.vedtak),tilbakekrevingInfo:Ee(n,r.vedtak),fritekstTilBrev:ie(r)?r.fritekstTilBrev:void 0}),xe=({klageVurdering:r,readOnlySubmitButton:n,avsluttedeBehandlinger:t,lagreFormkravVurdering:l})=>{const a=A(),{behandling:i,alleKodeverk:u,submitCallback:o,isReadOnly:d}=E(),p=te(u),v=dr(t,a,p),{formData:k,setFormData:h}=ke(),T=V.useMemo(()=>or(r),[r]),j=fe({defaultValues:k||T}),P=j.watch();return e.jsxs(he,{formMethods:j,onSubmit:c=>o(kr(c,t)),setDataOnUnmount:h,children:[e.jsx(N,{size:"small",children:a.formatMessage({id:"Klage.Formkrav.Title"})}),e.jsx(g,{fourPx:!0}),e.jsx(Xe,{children:a.formatMessage({id:ur(K.VURDERING_AV_FORMKRAV_KLAGE_NFP)})}),e.jsx(g,{sixteenPx:!0}),e.jsxs(z,{gap:"6",children:[!n&&e.jsx(pe,{children:e.jsx(s,{id:"Klage.Formkrav.HelpText"})}),e.jsx(z,{gap:"6",children:e.jsxs(F,{gap:"10",children:[e.jsx("div",{children:e.jsx(re,{readOnly:d,validate:[q],name:"vedtak",label:a.formatMessage({id:"Klage.Formkrav.VelgVedtak"}),selectValues:v,className:sr.selectBredde})}),e.jsxs(z,{gap:"5",children:[e.jsxs(F,{gap:"4",children:[e.jsx(S,{name:"erKlagerPart",label:a.formatMessage({id:"Klage.Formkrav.ErKlagerPart"}),validate:[q],isReadOnly:d,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:a.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:a.formatMessage({id:"Klage.Formkrav.Nei"})}]}),e.jsx(S,{name:"erKonkret",label:a.formatMessage({id:"Klage.Formkrav.ErKonkret"}),validate:[q],isReadOnly:d,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:a.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:a.formatMessage({id:"Klage.Formkrav.Nei"})}]})]}),e.jsxs(F,{gap:"4",children:[e.jsx(S,{name:"erFristOverholdt",label:a.formatMessage({id:"Klage.Formkrav.ErFristOverholdt"}),validate:[q],isReadOnly:d,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:a.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:a.formatMessage({id:"Klage.Formkrav.Nei"})}]}),e.jsx(S,{name:"erSignert",label:a.formatMessage({id:"Klage.Formkrav.ErSignert"}),validate:[q],isReadOnly:d,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:a.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:a.formatMessage({id:"Klage.Formkrav.Nei"})}]})]})]})]})}),e.jsx(Ae,{readOnly:d}),ie(P)&&e.jsx(je,{name:"fritekstTilBrev",label:a.formatMessage({id:"FormkravKlageFormNfp.Fritekst"}),maxLength:1e5,validate:[q,ce],readOnly:d,parse:Ke}),e.jsxs(F,{justify:"space-between",children:[e.jsx(le,{isReadOnly:d,isSubmittable:!n,isSubmitting:j.formState.isSubmitting,isDirty:j.formState.isDirty}),e.jsx(Pe,{behandlingUuid:i.uuid,saveKlage:l,avsluttedeBehandlinger:t,handleSubmit:j.handleSubmit,readOnly:d,aksjonspunktCode:K.VURDERING_AV_FORMKRAV_KLAGE_NFP})]})]})]})};xe.__docgenInfo={description:`FormkravklageformNfp

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
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Oe=({klageVurdering:r,avsluttedeBehandlinger:n})=>{var d;const t=A(),{alleKodeverk:l}=E(),{klageFormkravResultatKA:a,underBehandlingKabal:i,behandletAvKabal:u}=r;let o=t.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"});if(a!=null&&a.paKlagdBehandlingUuid){const p=n.find(v=>v.uuid===a.paKlagdBehandlingUuid);p&&(o=`${(d=l[B.BEHANDLING_TYPE].find(k=>k.kode===p.type))==null?void 0:d.navn} ${C(p.avsluttet).format(ye)}`)}return e.jsxs(e.Fragment,{children:[e.jsx(N,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.Title"})}),e.jsx(g,{sixteenPx:!0}),i&&e.jsxs(e.Fragment,{children:[e.jsx(N,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.SeKabalText"})}),e.jsx(g,{sixteenPx:!0})]}),!i&&!u&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.VelgVedtak"})}),e.jsx(g,{fourPx:!0}),e.jsx(y,{size:"small",children:o}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.ErKlagerPart"})}),e.jsx(g,{fourPx:!0}),e.jsx(y,{size:"small",children:a!=null&&a.erKlagerPart?e.jsx(s,{id:"Klage.Formkrav.Ja"}):e.jsx(s,{id:"Klage.Formkrav.Nei"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.ErKonkret"})}),e.jsx(g,{fourPx:!0}),e.jsx(y,{size:"small",children:a!=null&&a.erKlageKonkret?e.jsx(s,{id:"Klage.Formkrav.Ja"}):e.jsx(s,{id:"Klage.Formkrav.Nei"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.ErFristOverholdt"})}),e.jsx(g,{fourPx:!0}),e.jsx(y,{size:"small",children:a!=null&&a.erKlagefirstOverholdt?e.jsx(s,{id:"Klage.Formkrav.Ja"}):e.jsx(s,{id:"Klage.Formkrav.Nei"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.ErSignert"})}),e.jsx(g,{fourPx:!0}),e.jsx(y,{size:"small",children:a!=null&&a.erSignert?e.jsx(s,{id:"Klage.Formkrav.Ja"}):e.jsx(s,{id:"Klage.Formkrav.Nei"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.Vurdering"})}),e.jsx(g,{fourPx:!0}),e.jsx(y,{size:"small",children:a==null?void 0:a.begrunnelse})]})]})};Oe.__docgenInfo={description:`FormkravKlageKa

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
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""}}};const mr={"Klage.LovhjemmelNFP":"Fvl §§ 28, 31, 32, 33 og ftrl § 21-12","Klage.LovhjemmelKA":"Fvl §§  28, 31, 32, 34 og ftrl § 21-12","Klage.Formkrav.VelgVedtak":"Vedtaket som er påklagd","Klage.Formkrav.Title":"Vurder formkrav","Klage.Formkrav.HelpText":"Vurder om klagen oppfyller formkravene","Klage.Formkrav.IkkePåklagdVedtak":"Ikke påklagd et vedtak","Klage.Formkrav.ErKlagerPart":"Er klager part i saken?","Klage.Formkrav.ErKonkret":"Klages det på konkrete elementer i vedtaket?","Klage.Formkrav.ErFristOverholdt":"Er klagefristen overholdt?","Klage.Formkrav.ErSignert":"Er klagen signert?","Klage.Formkrav.KabalText":"Fortsett klagebehandlingen i KABAL: Kryss av, velg hjemmel og trykk send","Klage.Formkrav.SeKabalText":"Klagen behandles i KABAL","Klage.Formkrav.SendTilKabal":"Send til KABAL","Klage.Formkrav.Hjemmel":"Hjemmel","Klage.Formkrav.Ja":"Ja","Klage.Formkrav.Nei":"Nei","Klage.Formkrav.Vurdering":"Vurdering","FormkravKlageFormNfp.Fritekst":"Fritekst","TempsaveKlageButton.TempSaveButton":"Lagre","Malform.Beskrivelse":"Foretrukket språk"},vr=ae(mr),ge=({klageVurdering:r={},avsluttedeBehandlinger:n,readOnlySubmitButton:t,lagreFormkravVurdering:l})=>{const{aksjonspunkterForPanel:a}=E();return e.jsxs(ne,{value:vr,children:[a.some(i=>i.definisjon===K.VURDERING_AV_FORMKRAV_KLAGE_NFP)&&e.jsx(xe,{klageVurdering:r,readOnlySubmitButton:t,avsluttedeBehandlinger:n,lagreFormkravVurdering:l}),r.klageFormkravResultatKA&&e.jsx(Oe,{klageVurdering:r,avsluttedeBehandlinger:n})]})};ge.__docgenInfo={description:"",methods:[],displayName:"FormkravProsessIndex",props:{klageVurdering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const pr=[K.VURDERING_AV_FORMKRAV_KLAGE_NFP],Se=()=>{const r=A(),n=Y(pr),{behandling:t,alleBehandlinger:l,hentOgSettBehandling:a}=V.use(X),i=l.filter(v=>v.status===me.AVSLUTTET).filter(v=>{var k;return(v.type!==_.KLAGE||Ve((k=v.behandlingsresultat)==null?void 0:k.type))&&v.type!==_.ANKE}),u=Z(t),{data:o,isFetching:d}=Q(u.klage.klageVurderingOptions(t)),{mutate:p}=D({mutationFn:v=>u.klage.mellomlagreFormkravVurdering(v),onSuccess:()=>a()});return e.jsx(J,{standardPanelProps:n,prosessPanelKode:w.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.FormkravKlageNFP"}),skalPanelVisesIMeny:!0,children:d?e.jsx($,{}):e.jsx(ge,{klageVurdering:o,avsluttedeBehandlinger:i,lagreFormkravVurdering:p,readOnlySubmitButton:n.readOnlySubmitButton})})};Se.__docgenInfo={description:"",methods:[],displayName:"FormKravFamOgPensjonProsessStegInitPanel"};const Kr=[K.VURDER_FORMKRAV_NK],Re=()=>{const r=A(),n=Y(Kr),{behandling:t,alleBehandlinger:l,hentOgSettBehandling:a}=V.use(X),u=l.filter(k=>!k.behandlingHenlagt).filter(k=>k.status===me.AVSLUTTET).filter(k=>{var h;return(k.type!==_.KLAGE||Ve((h=k.behandlingsresultat)==null?void 0:h.type))&&k.type!==_.ANKE}),o=Z(t),{data:d,isFetching:p}=Q(o.klage.klageVurderingOptions(t)),{mutate:v}=D({mutationFn:k=>o.klage.mellomlagreFormkravVurdering(k),onSuccess:()=>a()});return e.jsx(J,{standardPanelProps:n,prosessPanelKode:w.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.FormkravKlageKA"}),skalPanelVisesIMeny:!0,children:p?e.jsx($,{}):e.jsx(ge,{klageVurdering:d,avsluttedeBehandlinger:u,lagreFormkravVurdering:v,readOnlySubmitButton:n.readOnlySubmitButton})})};Re.__docgenInfo={description:"",methods:[],displayName:"FormKravKlageInstansProsessStegInitPanel"};const _e=({behandlingPaaVent:r,previewVedtakCallback:n,readOnly:t,lagreVedtak:l,isSubmitting:a})=>{const i=V.useCallback(u=>{u.preventDefault(),n({gjelderVedtak:!0})},[]);return e.jsxs(F,{gap:"2",align:"center",children:[!t&&e.jsx(L,{variant:"primary",size:"small",onClick:l,disabled:r||a,loading:a,type:"button",children:e.jsx(s,{id:"VedtakKlageForm.TilGodkjenning"})}),e.jsx(Fe,{href:"#",onClick:i,onKeyDown:u=>u.key==="Enter"?i(u):null,children:e.jsx(s,{id:"VedtakKlageForm.ForhandvisBrev"})})]})};_e.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageSubmitPanel",props:{previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingPaaVent:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""}}};const yr={GUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortGunst",UGUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortUgunst",DELVIS_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortDelvis"},br=r=>{if(r){if(r.klageFormkravResultatKA&&r.klageVurderingResultatNK)return r.klageFormkravResultatKA.avvistArsaker;if(r.klageFormkravResultatNFP)return r.klageFormkravResultatNFP.avvistArsaker}return[]},fr=(r,n)=>{var l,a;const t=te(n);if(r){if((l=r.klageVurderingResultatNK)!=null&&l.klageMedholdArsak)return t(r.klageVurderingResultatNK.klageMedholdArsak,B.KLAGE_MEDHOLD_ARSAK);if((a=r.klageVurderingResultatNFP)!=null&&a.klageMedholdArsak)return t(r.klageVurderingResultatNFP.klageMedholdArsak,B.KLAGE_MEDHOLD_ARSAK)}return null},hr=r=>{const n=r.klageVurderingResultatNK?r.klageVurderingResultatNK:r.klageVurderingResultatNFP;switch(n==null?void 0:n.klageVurdering){case m.AVVIS_KLAGE:return"VedtakKlageForm.KlageAvvist";case m.STADFESTE_YTELSESVEDTAK:return"VedtakKlageForm.KlageStadfestet";case m.OPPHEVE_YTELSESVEDTAK:return"VedtakKlageForm.YtelsesvedtakOpphevet";case m.HJEMSENDE_UTEN_Å_OPPHEVE:return"VedtakKlageForm.HjemmsendUtenOpphev";case m.MEDHOLD_I_KLAGE:return yr[(n==null?void 0:n.klageVurderingOmgjoer)||""];default:return"VedtakKlageForm.IkkeFastsatt"}},Ne=({klageVurdering:r,previewVedtakCallback:n,behandlingsresultat:t})=>{const{behandling:l,isReadOnly:a,alleKodeverk:i,aksjonspunkterForPanel:u,submitCallback:o}=E(),d=br(r),p=fr(r,i),v=hr(r),k=r.klageVurderingResultatNK?r.klageVurderingResultatNK:r.klageVurderingResultatNFP,h=rr(t.type),[T,j]=V.useState(!1),P=()=>{j(!0);const W=u.filter(x=>x.status===Te.OPPRETTET).map(x=>x.definisjon).map(x=>({kode:nr(x,K.FORESLA_VEDTAK,K.FORESLA_VEDTAK_MANUELT)}));o(W).then(()=>j(!1))},c=te(i);return e.jsxs(e.Fragment,{children:[e.jsx(N,{size:"small",children:e.jsx(s,{id:"VedtakKlageForm.Header"})}),e.jsx(g,{twentyPx:!0}),e.jsx(f,{size:"small",children:e.jsx(s,{id:"VedtakKlageForm.Resultat"})}),v&&e.jsx(y,{size:"small",children:e.jsx(s,{id:v})}),e.jsx(g,{sixteenPx:!0}),t.type===R.KLAGE_AVVIST&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(s,{id:"VedtakKlageForm.ArsakTilAvvisning"})}),d.map(b=>e.jsx(y,{size:"small",children:c(b,B.KLAGE_AVVIST_AARSAK)},b)),e.jsx(g,{sixteenPx:!0})]}),h&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(s,{id:"VedtakKlageForm.ArsakTilOmgjoring"})}),p,e.jsx(g,{sixteenPx:!0})]}),t.type===R.KLAGE_YTELSESVEDTAK_OPPHEVET&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(s,{id:"VedtakKlageForm.ArsakTilOppheving"})}),p,e.jsx(g,{sixteenPx:!0})]}),(k==null?void 0:k.klageVurdertAv)==="NFP"&&e.jsx(_e,{previewVedtakCallback:n,readOnly:a,behandlingPaaVent:l.behandlingPaaVent,lagreVedtak:P,isSubmitting:T})]})};Ne.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageForm",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const jr={"VedtakKlageForm.ArsakTilAvslag":"Årsak til avslag","VedtakKlageForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakKlageForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakKlageForm.Resultat":"Resultat av klage","VedtakKlageForm.ArsakTilAvvisning":"Årsak til avvisning","VedtakKlageForm.ArsakTilOmgjoring":"Årsak til omgjøring","VedtakKlageForm.ArsakTilOppheving":"Årsak til oppheving","VedtakKlageForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakKlageForm.ResultatKlageAvvist":"Klagen er avvist","VedtakKlageForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakKlageForm.TilGodkjenning":"Til godkjenning","VedtakKlageForm.ForhandvisBrev":"Forhåndsvis vedtaksbrev","VedtakKlageForm.ArsakTilMedhold":"Årsak","VedtakKlageForm.KlageOmgjortGunst":"Vedtaket er omgjort til gunst","VedtakKlageForm.KlageOmgjortUgunst":"Vedtaket er omgjort til ugunst","VedtakKlageForm.KlageOmgjortDelvis":"Vedtaket er delvis omgjort til gunst","VedtakKlageForm.HjemmsendUtenOpphev":"Vedtaket er hjemsendt","VedtakKlageForm.IkkeFastsatt":"Ikke fastsatt","VedtakKlageForm.Header":"Resultat","VedtakKlageForm.KlageAvvist":"Avvist fordi klagen ikke oppfyller formkravene","VedtakKlageForm.KlageStadfestet":"Vedtaket er stadfestet","VedtakKlageForm.YtelsesvedtakOpphevet":"Vedtak er opphevet og hjemsendt"},cr=ae(jr),Me=({klageVurdering:r,previewVedtakCallback:n})=>{const{behandling:t}=E();if(!t.behandlingsresultat)throw new Error(`behandlingsresultat finnes ikke for behandling ${t.uuid}`);return e.jsx(ne,{value:cr,children:e.jsx(Ne,{klageVurdering:r,previewVedtakCallback:n,behandlingsresultat:t.behandlingsresultat})})};Me.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Vr=[K.FORESLA_VEDTAK,K.FATTER_VEDTAK,K.FORESLA_VEDTAK_MANUELT],He=()=>{const r=A(),{behandling:n,fagsak:t,setSkalOppdatereEtterBekreftelseAvAp:l}=V.use(X),{aksjonspunkt:a}=n,[i,u]=V.useState(!1),o=qr(u,l),d=Y(Vr,[],o),p=Ar(n.behandlingsresultat,a),v=Z(n),k=ve(),{data:h}=Q(v.klage.klageVurderingOptions(n)),{mutate:T}=D({mutationFn:j=>qe({...j,behandlingUuid:n.uuid,fagsakYtelseType:t.fagsakYtelseType}),onSuccess:be});return e.jsxs(e.Fragment,{children:[e.jsx(ar,{visModal:i,lukkModal:()=>{u(!1),k("/")},tekst:r.formatMessage({id:"FatterVedtakStatusModal.KlagenErFerdigbehandlet"})}),e.jsx(J,{skalPanelVisesIMeny:!0,prosessPanelKode:w.KLAGE_RESULTAT,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.ResultatKlage"}),standardPanelProps:d,hentOverstyrtStatus:p,hentSkalMarkeresSomAktiv:p!==H.IKKE_VURDERT,children:h?e.jsx(Me,{klageVurdering:h,previewVedtakCallback:T}):e.jsx($,{})})]})},Ar=(r,n=[])=>{const t=n.some(a=>a.status===Te.OPPRETTET);if(n.length===0||t)return H.IKKE_VURDERT;const l=r==null?void 0:r.type;return l===R.HENLAGT_KLAGE_TRUKKET||l===R.HENLAGT_FEILOPPRETTET?H.IKKE_VURDERT:l===R.KLAGE_AVVIST||l===R.KLAGE_YTELSESVEDTAK_OPPHEVET?H.IKKE_OPPFYLT:H.OPPFYLT},qr=(r,n)=>()=>(n(!1),()=>{r(!0)});He.__docgenInfo={description:"",methods:[],displayName:"KlageresultatProsessStegInitPanel"};const De=({klageVurdering:r})=>{var p,v;const n=A(),{alleKodeverk:t}=E(),{begrunnelse:l,fritekstTilBrev:a,klageVurdering:i,klageMedholdArsak:u,klageVurderingOmgjoer:o}=r.klageVurderingResultatNK||{},d=t[B.KLAGE_MEDHOLD_ARSAK];return e.jsxs(e.Fragment,{children:[e.jsx(N,{size:"small",children:n.formatMessage({id:"Klage.ResolveKlage.Title"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(s,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),e.jsxs(y,{size:"small",children:[i===m.STADFESTE_YTELSESVEDTAK&&e.jsx(s,{id:"Klage.ResolveKlage.KeepVedtakNk"}),i===m.MEDHOLD_I_KLAGE&&e.jsx(s,{id:"Klage.ResolveKlage.ChangeVedtak"}),i===m.HJEMSENDE_UTEN_Å_OPPHEVE&&e.jsx(s,{id:"Klage.Behandle.Hjemsendt"}),i===m.OPPHEVE_YTELSESVEDTAK&&e.jsx(s,{id:"Klage.ResolveKlage.NullifyVedtak"})]}),e.jsx(g,{sixteenPx:!0}),i===m.MEDHOLD_I_KLAGE&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(s,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(y,{size:"small",children:(p=d.find(k=>k.kode===u))==null?void 0:p.navn}),e.jsx(g,{sixteenPx:!0}),e.jsxs(y,{size:"small",children:[o===O.GUNST_MEDHOLD_I_KLAGE&&e.jsx(s,{id:"Klage.Behandle.Omgjort"}),o===O.UGUNST_MEDHOLD_I_KLAGE&&e.jsx(s,{id:"Klage.Behandle.Ugunst"}),o===O.DELVIS_MEDHOLD_I_KLAGE&&e.jsx(s,{id:"Klage.Behandle.DelvisOmgjort"})]}),e.jsx(g,{sixteenPx:!0})]}),(i===m.OPPHEVE_YTELSESVEDTAK||i===m.HJEMSENDE_UTEN_Å_OPPHEVE)&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(s,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(y,{size:"small",children:(v=d.find(k=>k.kode===u))==null?void 0:v.navn}),e.jsx(g,{sixteenPx:!0})]}),e.jsx(f,{size:"small",children:e.jsx(s,{id:"FritekstKlageBrevTextField.Fritekst"})}),e.jsx(y,{size:"small",children:a}),e.jsx(g,{sixteenPx:!0}),e.jsx(f,{size:"small",children:e.jsx(s,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),e.jsx(y,{size:"small",children:l}),e.jsx(g,{sixteenPx:!0})]})};De.__docgenInfo={description:`BehandleklageformNfp

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
}>`},description:""}}};const Le=({erModalÅpen:r,lukkModal:n,isSubmittable:t,isSubmitting:l,isDirty:a,readOnly:i,valgtHjemmel:u})=>{const o=A();return e.jsx(oe,{width:"500px",open:r,"aria-label":o.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:n,children:e.jsx(oe.Body,{children:e.jsxs(z,{gap:"3",children:[e.jsxs("div",{children:[e.jsx(f,{size:"medium",children:e.jsx(s,{id:"Klage.Modal.Overskrift"})}),e.jsx(g,{fourPx:!0}),e.jsx(y,{children:e.jsx(s,{id:"Klage.Modal.SendTilKlageinstans"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(y,{children:e.jsx(s,{id:"Klage.Modal.Valg"})}),e.jsx(g,{eightPx:!0}),e.jsx(y,{children:e.jsx(s,{id:"Klage.Modal.Oppretthold"})}),e.jsx(g,{fourPx:!0}),u&&e.jsx(y,{children:e.jsx(s,{id:"Klage.Modal.Hjemmel",values:{hjemmel:u}})}),e.jsx(g,{fourPx:!0})]}),e.jsx("div",{children:e.jsxs(F,{gap:"2",children:[e.jsx(le,{isReadOnly:i,isSubmittable:t,isSubmitting:l,isDirty:a}),e.jsx(L,{size:"small",variant:"primary",onClick:n,autoFocus:!0,type:"button",children:e.jsx(s,{id:"Klage.Modal.Avbryt"})})]})})]})})})};Le.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const Tr="_fritekstTilBrevTextArea_n72am_1",Fr={fritekstTilBrevTextArea:Tr},we=({sprakkode:r,readOnly:n=!0})=>e.jsx("div",{className:Fr.fritekstTilBrevTextArea,children:e.jsx(je,{name:"fritekstTilBrev",label:A().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[q,ce],readOnly:n,maxLength:1e5,badges:[{type:"info",titleText:We(r)}],parse:Ke})});we.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{sprakkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Br="_select_1xd5p_7",Er="_selectReadOnly_1xd5p_10",I={select:Br,selectReadOnly:Er},Ue=({readOnly:r,medholdReasons:n,alleHjemmlerMedNavn:t,klageVurdering:l})=>{const a=A(),i=n.map(o=>e.jsx("option",{value:o.kode,children:o.navn},o.kode)),u=t.map(o=>e.jsx("option",{value:o.kode,children:o.navn},o.kode));return e.jsxs(e.Fragment,{children:[e.jsx(S,{name:"klageVurdering",validate:[q],isReadOnly:r,isHorizontal:!0,radios:[{value:m.MEDHOLD_I_KLAGE,label:a.formatMessage({id:"Klage.ResolveKlage.ChangeVedtak"})},{value:m.STADFESTE_YTELSESVEDTAK,label:a.formatMessage({id:"Klage.ResolveKlage.KeepVedtakNfp"})}]}),l===m.MEDHOLD_I_KLAGE&&e.jsxs(e.Fragment,{children:[e.jsx(g,{sixteenPx:!0}),e.jsxs(er,{children:[e.jsx(re,{readOnly:r,name:"klageMedholdArsak",selectValues:i,className:r?I.selectReadOnly:I.select,label:a.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[q]}),e.jsx(g,{sixteenPx:!0}),e.jsx(S,{name:"klageVurderingOmgjoer",validate:[q],isReadOnly:r,radios:[{value:O.GUNST_MEDHOLD_I_KLAGE,label:a.formatMessage({id:"Klage.Behandle.Omgjort"})},{value:O.UGUNST_MEDHOLD_I_KLAGE,label:a.formatMessage({id:"Klage.Behandle.Ugunst"})},{value:O.DELVIS_MEDHOLD_I_KLAGE,label:a.formatMessage({id:"Klage.Behandle.DelvisOmgjort"})}]})]})]}),e.jsx(g,{sixteenPx:!0}),e.jsx(re,{readOnly:r,name:"klageHjemmel",selectValues:u,className:r?I.selectReadOnly:I.select,label:a.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[q]}),e.jsx(g,{sixteenPx:!0})]})};Ue.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Pr=(r,n)=>{switch(n){case m.STADFESTE_YTELSESVEDTAK:return r?M.KLAGE_STADFESTET:M.KLAGE_OVERSENDT;case m.OPPHEVE_YTELSESVEDTAK:return M.KLAGE_HJEMSENDT;case m.HJEMSENDE_UTEN_Å_OPPHEVE:return M.KLAGE_HJEMSENDT;case m.MEDHOLD_I_KLAGE:return M.KLAGE_OMGJORING;default:return}},xr=(r,n)=>({fritekst:n??"",dokumentMal:Pr(!1,r),erOpphevetKlage:r===m.OPPHEVE_YTELSESVEDTAK}),Ie=({previewCallback:r,fritekstTilBrev:n,klageVurdering:t})=>{const l=a=>{r(xr(t,n)),a.preventDefault()};return e.jsx(Fe,{href:"#",onClick:l,onKeyDown:a=>a.key==="Enter"?l(a):null,children:e.jsx(s,{id:"PreviewKlageLink.ForhandvisBrev"})})};Ie.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BrevData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: string;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},fritekstTilBrev:{required:!1,tsType:{name:"string"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Or=(r,n)=>({kode:n,klageMedholdArsak:r.klageVurdering===m.MEDHOLD_I_KLAGE||r.klageVurdering===m.OPPHEVE_YTELSESVEDTAK?r.klageMedholdArsak:void 0,klageVurderingOmgjoer:r.klageVurdering===m.MEDHOLD_I_KLAGE?r.klageVurderingOmgjoer:void 0,klageHjemmel:r.klageHjemmel,fritekstTilBrev:r.fritekstTilBrev,begrunnelse:r.begrunnelse,klageVurdering:r.klageVurdering}),Ge=({saveKlage:r,spinner:n=!1,aksjonspunktCode:t,readOnly:l=!1,handleSubmit:a})=>l?null:e.jsx(L,{size:"small",variant:"primary",loading:n,onClick:a(i=>r(Or(i,t))),type:"button",children:e.jsx(s,{id:"Klage.ResolveKlage.TempSaveButton"})});Ge.__docgenInfo={description:"",methods:[],displayName:"TempsaveKlageButton",props:{aksjonspunktCode:{required:!0,tsType:{name:"string"},description:""},saveKlage:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: TransformedValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}}]}}],raw:"UseFormHandleSubmit<KlageFormType>"},description:""}}};const Sr="_confirmVilkarForm_13k5i_1",Rr={confirmVilkarForm:Sr},_r=r=>({klageMedholdArsak:r.klageVurdering===m.MEDHOLD_I_KLAGE?r.klageMedholdArsak:void 0,klageVurderingOmgjoer:r.klageVurdering===m.MEDHOLD_I_KLAGE?r.klageVurderingOmgjoer:void 0,klageHjemmel:r.klageHjemmel,klageVurdering:r.klageVurdering,fritekstTilBrev:r.fritekstTilBrev,begrunnelse:r.begrunnelse,kode:K.BEHANDLE_KLAGE_NFP}),G=r=>{if(r&&r!=="-")return r},Nr=(r,n)=>r.filter(({kode:t})=>n.includes(t)).sort((t,l)=>t.kode.localeCompare(l.kode)),Mr=r=>r.map(n=>n),Hr=r=>({klageMedholdArsak:G(r==null?void 0:r.klageMedholdArsak),klageVurderingOmgjoer:G(r==null?void 0:r.klageVurderingOmgjoer),klageHjemmel:G(r==null?void 0:r.klageHjemmel),klageVurdering:G(r==null?void 0:r.klageVurdering),begrunnelse:r?r.begrunnelse:void 0,fritekstTilBrev:r?r.fritekstTilBrev:void 0}),ze=({klageVurdering:r,previewCallback:n,saveKlage:t,readOnlySubmitButton:l,alleAktuelleHjemler:a})=>{var ue;const{behandling:i,alleKodeverk:u,submitCallback:o,isReadOnly:d}=E(),p=Nr(u[B.KLAGE_HJEMMEL],Mr(a)),v=A(),[k,h]=V.useState(!1),T=V.useMemo(()=>Hr(r.klageVurderingResultatNFP),[r]),{formData:j,setFormData:P}=ke(),c=fe({defaultValues:j||T}),b=c.watch(),W=V.useCallback(()=>{h(!1)},[]),x=V.useCallback(()=>{h(!0)},[]);return e.jsxs(he,{formMethods:c,onSubmit:ee=>o(_r(ee)),setDataOnUnmount:P,children:[e.jsx(N,{size:"small",children:v.formatMessage({id:"Klage.ResolveKlage.Title"})}),e.jsx(g,{fourPx:!0}),!l&&e.jsx(pe,{children:[e.jsx(s,{id:"Klage.ResolveKlage.HelpText"},K.BEHANDLE_KLAGE_NFP)]}),e.jsx(Ue,{readOnly:d,klageVurdering:b.klageVurdering,medholdReasons:u[B.KLAGE_MEDHOLD_ARSAK],alleHjemmlerMedNavn:p}),e.jsxs("div",{className:Rr.confirmVilkarForm,children:[e.jsx(Ae,{readOnly:d,text:v.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),e.jsx(g,{sixteenPx:!0}),e.jsx(we,{sprakkode:i.sprakkode,readOnly:d}),e.jsx(g,{sixteenPx:!0}),e.jsxs(F,{justify:"space-between",children:[e.jsxs(F,{gap:"4",children:[b.klageVurdering===m.STADFESTE_YTELSESVEDTAK&&e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"primary",type:"button",size:"small",onClick:()=>x(),disabled:d,children:e.jsx(s,{id:"Klage.Behandle.Bekreft"})}),e.jsx(Le,{erModalÅpen:k,lukkModal:W,valgtHjemmel:(ue=p.find(ee=>ee.kode===b.klageHjemmel))==null?void 0:ue.navn,readOnly:d,isSubmittable:!l,isSubmitting:c.formState.isSubmitting,isDirty:c.formState.isValid})]}),b.klageVurdering!==m.STADFESTE_YTELSESVEDTAK&&e.jsx(le,{isReadOnly:d,isSubmittable:!l,isSubmitting:c.formState.isSubmitting,isDirty:c.formState.isDirty}),!d&&b.klageVurdering&&b.fritekstTilBrev&&b.fritekstTilBrev.length>2&&e.jsx(Ie,{previewCallback:n,fritekstTilBrev:b.fritekstTilBrev,klageVurdering:b.klageVurdering})]}),e.jsx(Ge,{saveKlage:t,handleSubmit:c.handleSubmit,readOnly:d,aksjonspunktCode:K.BEHANDLE_KLAGE_NFP})]})]})]})};ze.__docgenInfo={description:`BehandleklageformNfp

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
}>`},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const Dr={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},Lr=ae(Dr),Ce=({klageVurdering:r,saveKlage:n,previewCallback:t,readOnlySubmitButton:l})=>{const{aksjonspunkterForPanel:a}=E();return e.jsxs(ne,{value:Lr,children:[r.klageVurderingResultatNK&&e.jsx(De,{klageVurdering:r}),a.some(i=>i.definisjon===K.BEHANDLE_KLAGE_NFP)&&e.jsx(ze,{klageVurdering:r,saveKlage:n,previewCallback:t,readOnlySubmitButton:l,alleAktuelleHjemler:r.aktuelleHjemler?r.aktuelleHjemler:[]})]})};Ce.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const de=({aksjonspunktKoder:r,prosessPanelKode:n,prosessPanelMenyTekst:t})=>{const[l,a]=V.useState(!1),{behandling:i,fagsak:u,hentOgSettBehandling:o,setSkalOppdatereEtterBekreftelseAvAp:d,oppdaterProsessStegOgFaktaPanelIUrl:p}=V.use(X),v=d?wr(a,d,p):void 0,k=Y(r,[],v),h=Z(i),T=ve(),{data:j}=Q(h.klage.klageVurderingOptions(i)),{mutate:P}=D({mutationFn:b=>qe({...b,behandlingUuid:i.uuid,fagsakYtelseType:u.fagsakYtelseType}),onSuccess:be}),{mutate:c}=D({mutationFn:b=>h.klage.mellomlagreKlageVurdering({behandlingUuid:i.uuid,...b}),onSuccess:()=>o()});return e.jsx(J,{standardPanelProps:k,prosessPanelKode:n,prosessPanelMenyTekst:t,skalPanelVisesIMeny:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(tr,{visModal:l,lukkModal:()=>{a(!1),T("/")}}),j?e.jsx(Ce,{klageVurdering:j,previewCallback:P,saveKlage:c,readOnlySubmitButton:k.readOnlySubmitButton}):e.jsx($,{})]})})},wr=(r,n,t)=>l=>{const a=l.some(i=>i.kode===K.BEHANDLE_KLAGE_NFP&&"klageVurdering"in i&&i.klageVurdering===m.STADFESTE_YTELSESVEDTAK);return a&&n(!1),()=>{a?r(!0):t&&t("default","default")}};de.__docgenInfo={description:"",methods:[],displayName:"VurderingFellesProsessStegInitPanel",props:{aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},prosessPanelKode:{required:!0,tsType:{name:"ProsessStegCode"},description:""},prosessPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""}}};const Ur=[K.BEHANDLE_KLAGE_NFP],Ye=()=>e.jsx(de,{aksjonspunktKoder:Ur,prosessPanelKode:w.KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:A().formatMessage({id:"Behandlingspunkt.CheckKlageNFP"})});Ye.__docgenInfo={description:"",methods:[],displayName:"VurderingFamOgPensjonProsessStegInitPanel"};const Ir=[K.BEHANDLE_KLAGE_NK],Je=()=>e.jsx(de,{aksjonspunktKoder:Ir,prosessPanelKode:w.KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:A().formatMessage({id:"Behandlingspunkt.CheckKlageNK"})});Je.__docgenInfo={description:"",methods:[],displayName:"VurderingKlageInstansProsessStegInitPanel"};const Gr=({valgtProsessSteg:r,valgtFaktaSteg:n})=>e.jsxs(e.Fragment,{children:[e.jsxs(Ze,{valgtProsessSteg:r,valgtFaktaSteg:n,children:[e.jsx(Se,{}),e.jsx(Ye,{}),e.jsx(Re,{}),e.jsx(Je,{}),e.jsx(He,{})]}),e.jsx($e,{valgtFaktaSteg:n,valgtProsessSteg:r,children:e.jsx(Qe,{})})]});Gr.__docgenInfo={description:"",methods:[],displayName:"KlagePaneler",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""}}};export{Gr as default};
