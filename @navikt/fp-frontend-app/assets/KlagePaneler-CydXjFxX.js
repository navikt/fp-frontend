import{j as e}from"./index-nufLo1NJ.js";import{F as Ce,V as Je}from"./VergeFaktaInitPanel-C1g1bXUK.js";import{u as G,P as z,a as Ye}from"./useStandardProsessPanelProps-D5Tisxfp.js";import{r as j}from"./index-mMUbb89k.js";import{h as H,B as R,u as A,ay as F,aB as ge,V as v,H as P,K as $e,f as B,ae as de,am as ue,L as b,g as y,o as X,a1 as Z,d as oe,az as L,ac as ke,af as me,e as ie,ad as Qe}from"./withPanelData-mrNJc-4P.js";import{J as ve,r as C,G as We}from"./index.es-PHr_B9Ot.js";import{u as J}from"./fagsakApi-DQ1NBnks.js";import{a as pe,N as Ke,Y as W,e as T,M as N,D as ye,y as be,u as D}from"./index.es-3EalTioe.js";import{A as K}from"./aksjonspunktCodes-CwqG_2qJ.js";import{i as he,a as Xe,B as _}from"./behandlingResultatType-CKS0Ckn9.js";import{d as se}from"./dayjs.min-Cke173X9.js";import{P as fe,a as ee}from"./OverstyringPanel-DsBJzPIf.js";import{M as s}from"./message-fjPQ3nBu.js";import{u as Y,c as Ve}from"./behandlingApi-Y2pAjD4W.js";import{B as $}from"./FagsakIndex-DsM6NVH-.js";import{A as ce}from"./aksjonspunktStatus-xM4O_ZUY.js";import{V as x}from"./BehandlingHenlagtPanel-CAtp9Rqe.js";import{v as Ze}from"./validerApKodeOgHentApEnum-CFzXgZIF.js";import{L as je}from"./Link-B_0pZgje.js";import{F as er}from"./FatterVedtakStatusModal-m-iD1y4j.js";import{D as M}from"./dokumentMalType-B-Xou3xH.js";import{K as rr}from"./KlageBehandlingModal-g8ff6uxj.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-0CCRSEf1.js";import"./BehandlingMenuIndex-BTGaI7PV.js";import"./bind-oYjWB_aQ.js";import"./index.es-BaEVViRh.js";import"./Tooltip-CvQhQQi4.js";import"./index-Cg096ojA.js";import"./decorators-Bnaor6Ku.js";import"./Checkmark-BThlG6xf.js";import"./Popover-CtS0_ffW.js";import"./ExclamationmarkTriangleFill-CurFs0KX.js";import"./Kjonnkode-C-fkzSiP.js";import"./Table-BCqmxPqX.js";import"./ChevronDown-DBNYinka.js";import"./CheckmarkCircleFill-CaeK_2kd.js";import"./behandlingArsakType-CTXggz2Y.js";import"./SettPaVentModalIndex-DZFnfrxc.js";import"./venteArsakType-BJdSFL9e.js";import"./useBehandlingPollingOperasjoner-Cly11n-f.js";import"./apiPollingStatus-nT-xUZgL.js";import"./errorType-CUxLKDC7.js";import"./useKodeverk-B2V9kwY6.js";import"./paths-CkjLDGWU.js";import"./Dropdown-DZaL-Sy8.js";import"./v4-CtRu48qb.js";import"./entry-preview-B37JMFou.js";import"./iframe-B0pPXU4H.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./Tag-DxCMVXy0.js";import"./Checkbox-DJ7LPXK1.js";import"./TotrinnskontrollIndex-CaDt_3FS.js";import"./SupportHeader-BMadb3r3.js";import"./ErrorBoundary-DDblHA5f.js";import"./IngenBehandlingValgtPanel-LUmyn09Q.js";import"./VisittkortSakIndex-CrhkYIjk.js";import"./Spacer-D7Prqiae.js";import"./useTrackRouteParam-Dnbt_WXG.js";import"./RisikoklassifiseringIndex-Cd6FR6KH.js";import"./BehandlingPaVent-D3hgVT-a.js";import"./BehandlingSupportIndex-C_aIzKKZ.js";import"./DokumentIndex-CarTAPL3.js";import"./DokumentLink-CxX19KLC.js";import"./eksterneLenker-DOKwbE_M.js";import"./StarFill-X0lVbJ6y.js";import"./HistorikkIndex-ev9gV03H.js";import"./MeldingIndex-ByDoh1v_.js";import"./UkjentAdresseMeldingIndex-B8Tq-ft2.js";import"./SettPaVentReadOnlyModal-BchhdLPs.js";import"./UtvidEllerMinskKnapp-7rMy6i2P.js";import"./FagsakProfileIndex-BhpZlxJj.js";import"./FagsakData-P3KHKIxm.js";var m=(r=>(r.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",r.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",r.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",r.AVVIS_KLAGE="AVVIS_KLAGE",r.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",r))(m||{}),O=(r=>(r.DELVIS_MEDHOLD_I_KLAGE="DELVIS_MEDHOLD_I_KLAGE",r.GUNST_MEDHOLD_I_KLAGE="GUNST_MEDHOLD_I_KLAGE",r.UGUNST_MEDHOLD_I_KLAGE="UGUNST_MEDHOLD_I_KLAGE",r.UDEFINERT="-",r))(O||{});const w="ikkePaklagdVedtak",re=r=>r.erKlagerPart===!1||r.erFristOverholdt===!1||r.erKonkret===!1||r.erSignert===!1||r.vedtak===w,Ae=(r,n)=>r.find(t=>t.uuid===n),ne=(r,n)=>{const t=Ae(r,n);return!!t&&(t.type===R.TILBAKEKREVING||t.type===R.TILBAKEKREVING_REVURDERING)},Te=(r,n)=>{const t=ne(r,n),l=Ae(r,n);return l&&t?{tilbakekrevingUuid:l.uuid,tilbakekrevingVedtakDato:l.avsluttet,tilbakekrevingBehandlingType:l.type}:void 0},nr=(r,n,t,l)=>({kode:l,begrunnelse:r.begrunnelse,behandlingUuid:n,erKlagerPart:r.erKlagerPart,erFristOverholdt:r.erFristOverholdt,erKonkret:r.erKonkret,erSignert:r.erSignert,erTilbakekreving:ne(t,r.vedtak),klageTilbakekreving:Te(t,r.vedtak),paKlagdBehandlingUuid:r.vedtak===w?void 0:r.vedtak,fritekstTilBrev:re(r)?r.fritekstTilBrev:void 0}),Ee=({behandlingUuid:r,saveKlage:n,avsluttedeBehandlinger:t,spinner:l=!1,aksjonspunktCode:a,readOnly:i=!1,handleSubmit:d})=>i?null:e.jsx(H,{size:"small",variant:"primary",loading:l,onClick:d(g=>n(nr(g,r,t,a))),type:"button",children:e.jsx(s,{id:"TempsaveKlageButton.TempSaveButton"})});Ee.__docgenInfo={description:"",methods:[],displayName:"TempsaveKlageButton",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunktCode:{required:!0,tsType:{name:"string"},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erKlagerPart",value:{name:"boolean",required:!1}},{key:"erFristOverholdt",value:{name:"boolean",required:!1}},{key:"erKonkret",value:{name:"boolean",required:!1}},{key:"erSignert",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vedtak",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}}],raw:"UseFormHandleSubmit<FormValues>"},description:""}}};const ar="_selectBredde_19ro0_1",tr={selectBredde:ar},lr=r=>r!=null&&r.paKlagdBehandlingUuid?`${r.paKlagdBehandlingUuid}`:w,ir=(r,n,t)=>[e.jsx("option",{value:w,children:n.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"})},"formkrav")].concat([...r].sort((a,i)=>se(a.avsluttet).diff(se(i.avsluttet))).map(({uuid:a,type:i,avsluttet:d})=>{var g;return e.jsx("option",{value:`${a}`,children:`${((g=t.BehandlingType.find(({kode:u})=>u===i))==null?void 0:g.navn)??""} ${d?ue(d):""}`},a)})),sr=r=>r===K.VURDERING_AV_FORMKRAV_KLAGE_NFP?"Klage.LovhjemmelNFP":"Klage.LovhjemmelKA",gr=r=>{const n=r?r.klageFormkravResultatNFP:null,t=r?r.klageVurderingResultatNFP:null;return{vedtak:n?lr(n):"",begrunnelse:n?n.begrunnelse:void 0,erKlagerPart:n?n.erKlagerPart:void 0,erKonkret:n?n.erKlageKonkret:void 0,erFristOverholdt:n?n.erKlagefirstOverholdt:void 0,erSignert:n?n.erSignert:void 0,fritekstTilBrev:t?t.fritekstTilBrev:void 0}},dr=(r,n)=>({erKlagerPart:r.erKlagerPart,erFristOverholdt:r.erFristOverholdt,erKonkret:r.erKonkret,erSignert:r.erSignert,begrunnelse:r.begrunnelse,kode:K.VURDERING_AV_FORMKRAV_KLAGE_NFP,vedtakBehandlingUuid:r.vedtak===w?void 0:r.vedtak,erTilbakekreving:ne(n,r.vedtak),tilbakekrevingInfo:Te(n,r.vedtak),fritekstTilBrev:re(r)?r.fritekstTilBrev:void 0}),qe=({klageVurdering:r,readOnlySubmitButton:n,avsluttedeBehandlinger:t,lagreFormkravVurdering:l})=>{const a=A(),{behandling:i,alleKodeverk:d,submitCallback:g,isReadOnly:u}=F(),p=ir(t,a,d),{mellomlagretFormData:k,setMellomlagretFormData:o}=ge(),c=j.useMemo(()=>gr(r),[r]),f=pe({defaultValues:k??c}),q=f.watch();return e.jsx(Ke,{formMethods:f,onSubmit:S=>g(dr(S,t)),setDataOnUnmount:o,children:e.jsxs(v,{gap:"4",children:[e.jsxs(v,{gap:"1",children:[e.jsx(P,{size:"small",children:a.formatMessage({id:"Klage.Formkrav.Title"})}),e.jsx($e,{children:a.formatMessage({id:sr(K.VURDERING_AV_FORMKRAV_KLAGE_NFP)})})]}),e.jsxs(v,{gap:"6",children:[!n&&e.jsx(ve,{children:e.jsx(s,{id:"Klage.Formkrav.HelpText"})}),e.jsx(v,{gap:"6",children:e.jsxs(B,{gap:"10",children:[e.jsx("div",{children:e.jsx(W,{readOnly:u,validate:[T],name:"vedtak",label:a.formatMessage({id:"Klage.Formkrav.VelgVedtak"}),selectValues:p,className:tr.selectBredde})}),e.jsxs(v,{gap:"5",children:[e.jsxs(B,{gap:"4",children:[e.jsx(N,{name:"erKlagerPart",label:a.formatMessage({id:"Klage.Formkrav.ErKlagerPart"}),validate:[T],isReadOnly:u,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:a.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:a.formatMessage({id:"Klage.Formkrav.Nei"})}]}),e.jsx(N,{name:"erKonkret",label:a.formatMessage({id:"Klage.Formkrav.ErKonkret"}),validate:[T],isReadOnly:u,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:a.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:a.formatMessage({id:"Klage.Formkrav.Nei"})}]})]}),e.jsxs(B,{gap:"4",children:[e.jsx(N,{name:"erFristOverholdt",label:a.formatMessage({id:"Klage.Formkrav.ErFristOverholdt"}),validate:[T],isReadOnly:u,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:a.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:a.formatMessage({id:"Klage.Formkrav.Nei"})}]}),e.jsx(N,{name:"erSignert",label:a.formatMessage({id:"Klage.Formkrav.ErSignert"}),validate:[T],isReadOnly:u,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:a.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:a.formatMessage({id:"Klage.Formkrav.Nei"})}]})]})]})]})}),e.jsx(fe,{readOnly:u}),re(q)&&e.jsx(ye,{name:"fritekstTilBrev",label:a.formatMessage({id:"FormkravKlageFormNfp.Fritekst"}),maxLength:1e5,validate:[T,be],readOnly:u,parse:de}),e.jsxs(B,{justify:"space-between",children:[e.jsx(ee,{isReadOnly:u,isSubmittable:!n,isSubmitting:f.formState.isSubmitting,isDirty:f.formState.isDirty}),e.jsx(Ee,{behandlingUuid:i.uuid,saveKlage:l,avsluttedeBehandlinger:t,handleSubmit:f.handleSubmit,readOnly:u,aksjonspunktCode:K.VURDERING_AV_FORMKRAV_KLAGE_NFP})]})]})]})})};qe.__docgenInfo={description:`FormkravklageformNfp

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
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Be=({klageVurdering:r,avsluttedeBehandlinger:n})=>{var u;const t=A(),{alleKodeverk:l}=F(),{klageFormkravResultatKA:a,underBehandlingKabal:i,behandletAvKabal:d}=r;let g=t.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"});if(a!=null&&a.paKlagdBehandlingUuid){const p=n.find(k=>k.uuid===a.paKlagdBehandlingUuid);p&&(g=`${(u=l.BehandlingType.find(o=>o.kode===p.type))==null?void 0:u.navn} ${p.avsluttet?ue(p.avsluttet):""}`)}return e.jsxs(v,{gap:"4",children:[e.jsx(P,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.Title"})}),i&&e.jsx(P,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.SeKabalText"})}),!i&&!d&&e.jsxs(e.Fragment,{children:[e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.VelgVedtak"})}),e.jsx(y,{size:"small",children:g})]}),e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.ErKlagerPart"})}),e.jsx(y,{size:"small",children:a!=null&&a.erKlagerPart?e.jsx(s,{id:"Klage.Formkrav.Ja"}):e.jsx(s,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.ErKonkret"})}),e.jsx(y,{size:"small",children:a!=null&&a.erKlageKonkret?e.jsx(s,{id:"Klage.Formkrav.Ja"}):e.jsx(s,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.ErFristOverholdt"})}),e.jsx(y,{size:"small",children:a!=null&&a.erKlagefirstOverholdt?e.jsx(s,{id:"Klage.Formkrav.Ja"}):e.jsx(s,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.ErSignert"})}),e.jsx(y,{size:"small",children:a!=null&&a.erSignert?e.jsx(s,{id:"Klage.Formkrav.Ja"}):e.jsx(s,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"Klage.Formkrav.Vurdering"})}),e.jsx(y,{size:"small",children:a==null?void 0:a.begrunnelse})]})]})]})};Be.__docgenInfo={description:`FormkravKlageKa

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
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""}}};const ur={"Klage.LovhjemmelNFP":"Fvl §§ 28, 31, 32, 33 og ftrl § 21-12","Klage.LovhjemmelKA":"Fvl §§  28, 31, 32, 34 og ftrl § 21-12","Klage.Formkrav.VelgVedtak":"Vedtaket som er påklagd","Klage.Formkrav.Title":"Vurder formkrav","Klage.Formkrav.HelpText":"Vurder om klagen oppfyller formkravene","Klage.Formkrav.IkkePåklagdVedtak":"Ikke påklagd et vedtak","Klage.Formkrav.ErKlagerPart":"Er klager part i saken?","Klage.Formkrav.ErKonkret":"Klages det på konkrete elementer i vedtaket?","Klage.Formkrav.ErFristOverholdt":"Er klagefristen overholdt?","Klage.Formkrav.ErSignert":"Er klagen signert?","Klage.Formkrav.KabalText":"Fortsett klagebehandlingen i KABAL: Kryss av, velg hjemmel og trykk send","Klage.Formkrav.SeKabalText":"Klagen behandles i KABAL","Klage.Formkrav.SendTilKabal":"Send til KABAL","Klage.Formkrav.Hjemmel":"Hjemmel","Klage.Formkrav.Ja":"Ja","Klage.Formkrav.Nei":"Nei","Klage.Formkrav.Vurdering":"Vurdering","FormkravKlageFormNfp.Fritekst":"Fritekst","TempsaveKlageButton.TempSaveButton":"Lagre","Malform.Beskrivelse":"Foretrukket språk"},or=Z(ur),ae=({klageVurdering:r={},avsluttedeBehandlinger:n,readOnlySubmitButton:t,lagreFormkravVurdering:l})=>{const{aksjonspunkterForPanel:a}=F();return e.jsxs(X,{value:or,children:[a.some(i=>i.definisjon===K.VURDERING_AV_FORMKRAV_KLAGE_NFP)&&e.jsx(qe,{klageVurdering:r,readOnlySubmitButton:t,avsluttedeBehandlinger:n,lagreFormkravVurdering:l}),r.klageFormkravResultatKA&&e.jsx(Be,{klageVurdering:r,avsluttedeBehandlinger:n})]})};ae.__docgenInfo={description:"",methods:[],displayName:"FormkravProsessIndex",props:{klageVurdering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const kr=[K.VURDERING_AV_FORMKRAV_KLAGE_NFP],Fe=()=>{const r=A(),n=G(kr),{behandling:t,alleBehandlinger:l,hentOgSettBehandling:a}=j.use($),i=l.filter(k=>k.status===oe.AVSLUTTET).filter(k=>{var o;return(k.type!==R.KLAGE||he((o=k.behandlingsresultat)==null?void 0:o.type))&&k.type!==R.ANKE}).map(k=>({uuid:k.uuid,type:k.type,avsluttet:k.avsluttet??void 0})),d=Y(t),{data:g,isFetching:u}=J(d.klage.klageVurderingOptions(t)),{mutate:p}=D({mutationFn:k=>d.klage.mellomlagreFormkravVurdering(k),onSuccess:()=>a()});return e.jsx(z,{standardPanelProps:n,prosessPanelKode:L.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.FormkravKlageNFP"}),skalPanelVisesIMeny:!0,children:u?e.jsx(C,{}):e.jsx(ae,{klageVurdering:g,avsluttedeBehandlinger:i,lagreFormkravVurdering:p,readOnlySubmitButton:n.readOnlySubmitButton})})};Fe.__docgenInfo={description:"",methods:[],displayName:"FormKravFamOgPensjonProsessStegInitPanel"};const mr=[K.VURDER_FORMKRAV_NK],Se=()=>{const r=A(),n=G(mr),{behandling:t,alleBehandlinger:l,hentOgSettBehandling:a}=j.use($),d=l.filter(o=>!o.behandlingHenlagt).filter(o=>o.status===oe.AVSLUTTET).filter(o=>{var c;return(o.type!==R.KLAGE||he((c=o.behandlingsresultat)==null?void 0:c.type))&&o.type!==R.ANKE}).map(o=>({uuid:o.uuid,type:o.type,avsluttet:o.avsluttet??void 0})),g=Y(t),{data:u,isFetching:p}=J(g.klage.klageVurderingOptions(t)),{mutate:k}=D({mutationFn:o=>g.klage.mellomlagreFormkravVurdering(o),onSuccess:()=>a()});return e.jsx(z,{standardPanelProps:n,prosessPanelKode:L.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.FormkravKlageKA"}),skalPanelVisesIMeny:!0,children:p?e.jsx(C,{}):e.jsx(ae,{klageVurdering:u,avsluttedeBehandlinger:d,lagreFormkravVurdering:k,readOnlySubmitButton:n.readOnlySubmitButton})})};Se.__docgenInfo={description:"",methods:[],displayName:"FormKravKlageInstansProsessStegInitPanel"};const Oe=({behandlingPåVent:r,previewVedtakCallback:n,readOnly:t,lagreVedtak:l,isSubmitting:a})=>{const i=j.useCallback(d=>{d.preventDefault(),n({gjelderVedtak:!0})},[]);return e.jsxs(B,{gap:"2",align:"center",children:[!t&&e.jsx(H,{variant:"primary",size:"small",onClick:l,disabled:r||a,loading:a,type:"button",children:e.jsx(s,{id:"VedtakKlageForm.TilGodkjenning"})}),e.jsx(je,{href:"#",onClick:i,onKeyDown:d=>d.key==="Enter"?i(d):null,children:e.jsx(s,{id:"VedtakKlageForm.ForhandvisBrev"})})]})};Oe.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageSubmitPanel",props:{previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingPåVent:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""}}};const vr={GUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortGunst",UGUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortUgunst",DELVIS_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortDelvis"},pr=r=>{if(r){if(r.klageFormkravResultatKA&&r.klageVurderingResultatNK)return r.klageFormkravResultatKA.avvistArsaker;if(r.klageFormkravResultatNFP)return r.klageFormkravResultatNFP.avvistArsaker}return[]},Kr=(r,n)=>{var t,l,a,i;return(t=r==null?void 0:r.klageVurderingResultatNK)!=null&&t.klageMedholdArsak?((l=n.KlageMedholdÅrsak.find(({kode:d})=>{var g;return d===((g=r.klageVurderingResultatNK)==null?void 0:g.klageMedholdArsak)}))==null?void 0:l.navn)??"":(a=r==null?void 0:r.klageVurderingResultatNFP)!=null&&a.klageMedholdArsak?((i=n.KlageMedholdÅrsak.find(({kode:d})=>{var g;return d===((g=r.klageVurderingResultatNFP)==null?void 0:g.klageMedholdArsak)}))==null?void 0:i.navn)??"":null},yr=r=>{const n=r.klageVurderingResultatNK??r.klageVurderingResultatNFP;switch(n==null?void 0:n.klageVurdering){case m.AVVIS_KLAGE:return"VedtakKlageForm.KlageAvvist";case m.STADFESTE_YTELSESVEDTAK:return"VedtakKlageForm.KlageStadfestet";case m.OPPHEVE_YTELSESVEDTAK:return"VedtakKlageForm.YtelsesvedtakOpphevet";case m.HJEMSENDE_UTEN_Å_OPPHEVE:return"VedtakKlageForm.HjemmsendUtenOpphev";case m.MEDHOLD_I_KLAGE:return vr[(n==null?void 0:n.klageVurderingOmgjoer)??""];default:return"VedtakKlageForm.IkkeFastsatt"}},Ne=({klageVurdering:r,previewVedtakCallback:n,behandlingsresultat:t})=>{const{behandling:l,isReadOnly:a,alleKodeverk:i,aksjonspunkterForPanel:d,submitCallback:g}=F(),u=pr(r),p=Kr(r,i),k=yr(r),o=r.klageVurderingResultatNK??r.klageVurderingResultatNFP,c=Xe(t.type),[f,q]=j.useState(!1),S=()=>{q(!0);const V=d.filter(E=>E.status===ce.OPPRETTET).map(E=>E.definisjon).map(E=>({kode:Ze(E,K.FORESLA_VEDTAK,K.FORESLA_VEDTAK_MANUELT)}));g(V).then(()=>q(!1))};return e.jsxs(v,{gap:"4",children:[e.jsx(P,{size:"small",children:e.jsx(s,{id:"VedtakKlageForm.Header"})}),e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"VedtakKlageForm.Resultat"})}),k&&e.jsx(y,{size:"small",children:e.jsx(s,{id:k})})]}),t.type===_.KLAGE_AVVIST&&e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"VedtakKlageForm.ArsakTilAvvisning"})}),u.map(h=>{var V;return e.jsx(y,{size:"small",children:((V=i.KlageAvvistÅrsak.find(({kode:E})=>E===h))==null?void 0:V.navn)??""},h)})]}),c&&e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"VedtakKlageForm.ArsakTilOmgjoring"})}),p]}),t.type===_.KLAGE_YTELSESVEDTAK_OPPHEVET&&e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"VedtakKlageForm.ArsakTilOppheving"})}),p]}),(o==null?void 0:o.klageVurdertAv)==="NFP"&&e.jsx(Oe,{previewVedtakCallback:n,readOnly:a,behandlingPåVent:l.behandlingPåVent,lagreVedtak:S,isSubmitting:f})]})};Ne.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageForm",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingsresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
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
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`},description:""}}};const br={"VedtakKlageForm.ArsakTilAvslag":"Årsak til avslag","VedtakKlageForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakKlageForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakKlageForm.Resultat":"Resultat av klage","VedtakKlageForm.ArsakTilAvvisning":"Årsak til avvisning","VedtakKlageForm.ArsakTilOmgjoring":"Årsak til omgjøring","VedtakKlageForm.ArsakTilOppheving":"Årsak til oppheving","VedtakKlageForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakKlageForm.ResultatKlageAvvist":"Klagen er avvist","VedtakKlageForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakKlageForm.TilGodkjenning":"Til godkjenning","VedtakKlageForm.ForhandvisBrev":"Forhåndsvis vedtaksbrev","VedtakKlageForm.ArsakTilMedhold":"Årsak","VedtakKlageForm.KlageOmgjortGunst":"Vedtaket er omgjort til gunst","VedtakKlageForm.KlageOmgjortUgunst":"Vedtaket er omgjort til ugunst","VedtakKlageForm.KlageOmgjortDelvis":"Vedtaket er delvis omgjort til gunst","VedtakKlageForm.HjemmsendUtenOpphev":"Vedtaket er hjemsendt","VedtakKlageForm.IkkeFastsatt":"Ikke fastsatt","VedtakKlageForm.Header":"Resultat","VedtakKlageForm.KlageAvvist":"Avvist fordi klagen ikke oppfyller formkravene","VedtakKlageForm.KlageStadfestet":"Vedtaket er stadfestet","VedtakKlageForm.YtelsesvedtakOpphevet":"Vedtak er opphevet og hjemsendt"},hr=Z(br),_e=({klageVurdering:r,previewVedtakCallback:n})=>{const{behandling:t}=F();if(!t.behandlingsresultat)throw new Error(`behandlingsresultat finnes ikke for behandling ${t.uuid}`);return e.jsx(X,{value:hr,children:e.jsx(Ne,{klageVurdering:r,previewVedtakCallback:n,behandlingsresultat:t.behandlingsresultat})})};_e.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const fr=[K.FORESLA_VEDTAK,K.FATTER_VEDTAK,K.FORESLA_VEDTAK_MANUELT],Re=()=>{const r=A(),{behandling:n,setSkalOppdatereEtterBekreftelseAvAp:t}=j.use($),{aksjonspunkt:l}=n,[a,i]=j.useState(!1),d=cr(i,t),g=G(fr,[],d),u=Vr(n.behandlingsresultat,l),p=Y(n),k=ke(),{data:o}=J(p.klage.klageVurderingOptions(n)),{mutate:c}=D({mutationFn:f=>Ve({...f,behandlingUuid:n.uuid}),onSuccess:me});return e.jsxs(e.Fragment,{children:[e.jsx(er,{visModal:a,lukkModal:()=>{i(!1),k("/")},tekst:r.formatMessage({id:"FatterVedtakStatusModal.KlagenErFerdigbehandlet"})}),e.jsx(z,{skalPanelVisesIMeny:!0,prosessPanelKode:L.KLAGE_RESULTAT,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.ResultatKlage"}),standardPanelProps:g,overstyrtStatus:u,skalMarkeresSomAktiv:u!==x.IKKE_VURDERT,children:o?e.jsx(_e,{klageVurdering:o,previewVedtakCallback:c}):e.jsx(C,{})})]})},Vr=(r,n=[])=>{const t=n.some(a=>a.status===ce.OPPRETTET);if(n.length===0||t)return x.IKKE_VURDERT;const l=r==null?void 0:r.type;return l===_.HENLAGT_KLAGE_TRUKKET||l===_.HENLAGT_FEILOPPRETTET?x.IKKE_VURDERT:l===_.KLAGE_AVVIST||l===_.KLAGE_YTELSESVEDTAK_OPPHEVET?x.IKKE_OPPFYLT:x.OPPFYLT},cr=(r,n)=>()=>(n(!1),()=>{r(!0)});Re.__docgenInfo={description:"",methods:[],displayName:"KlageresultatProsessStegInitPanel"};const Pe=({klageVurdering:r})=>{var p,k;const n=A(),{alleKodeverk:t}=F(),{begrunnelse:l,fritekstTilBrev:a,klageVurdering:i,klageMedholdArsak:d,klageVurderingOmgjoer:g}=r.klageVurderingResultatNK??{},u=t.KlageMedholdÅrsak;return e.jsxs(v,{gap:"4",children:[e.jsx(P,{size:"small",children:n.formatMessage({id:"Klage.ResolveKlage.Title"})}),e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),e.jsxs(y,{size:"small",children:[i===m.STADFESTE_YTELSESVEDTAK&&e.jsx(s,{id:"Klage.ResolveKlage.KeepVedtakNk"}),i===m.MEDHOLD_I_KLAGE&&e.jsx(s,{id:"Klage.ResolveKlage.ChangeVedtak"}),i===m.HJEMSENDE_UTEN_Å_OPPHEVE&&e.jsx(s,{id:"Klage.Behandle.Hjemsendt"}),i===m.OPPHEVE_YTELSESVEDTAK&&e.jsx(s,{id:"Klage.ResolveKlage.NullifyVedtak"})]})]}),i===m.MEDHOLD_I_KLAGE&&e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(y,{size:"small",children:(p=u.find(o=>o.kode===d))==null?void 0:p.navn}),e.jsxs(y,{size:"small",children:[g===O.GUNST_MEDHOLD_I_KLAGE&&e.jsx(s,{id:"Klage.Behandle.Omgjort"}),g===O.UGUNST_MEDHOLD_I_KLAGE&&e.jsx(s,{id:"Klage.Behandle.Ugunst"}),g===O.DELVIS_MEDHOLD_I_KLAGE&&e.jsx(s,{id:"Klage.Behandle.DelvisOmgjort"})]})]}),(i===m.OPPHEVE_YTELSESVEDTAK||i===m.HJEMSENDE_UTEN_Å_OPPHEVE)&&e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(y,{size:"small",children:(k=u.find(o=>o.kode===d))==null?void 0:k.navn})]}),e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"FritekstKlageBrevTextField.Fritekst"})}),e.jsx(y,{size:"small",children:a})]}),e.jsxs(v,{gap:"1",children:[e.jsx(b,{size:"small",children:e.jsx(s,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),e.jsx(y,{size:"small",children:l})]})]})};Pe.__docgenInfo={description:`BehandleklageformNfp

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
}>`},description:""}}};const Me=({erModalÅpen:r,lukkModal:n,isSubmittable:t,isSubmitting:l,isDirty:a,readOnly:i,valgtHjemmel:d})=>{const g=A();return e.jsx(ie,{width:"500px",open:r,"aria-label":g.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:n,children:e.jsx(ie.Body,{children:e.jsxs(v,{gap:"3",children:[e.jsxs(v,{gap:"4",children:[e.jsx(b,{size:"medium",children:e.jsx(s,{id:"Klage.Modal.Overskrift"})}),e.jsx(y,{children:e.jsx(s,{id:"Klage.Modal.SendTilKlageinstans"})}),e.jsx(y,{children:e.jsx(s,{id:"Klage.Modal.Valg"})}),e.jsx(y,{children:e.jsx(s,{id:"Klage.Modal.Oppretthold"})}),d&&e.jsx(y,{children:e.jsx(s,{id:"Klage.Modal.Hjemmel",values:{hjemmel:d}})})]}),e.jsx("div",{children:e.jsxs(B,{gap:"2",children:[e.jsx(ee,{isReadOnly:i,isSubmittable:t,isSubmitting:l,isDirty:a}),e.jsx(H,{size:"small",variant:"primary",onClick:n,autoFocus:!0,type:"button",children:e.jsx(s,{id:"Klage.Modal.Avbryt"})})]})})]})})})};Me.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const jr="_fritekstTilBrevTextArea_n72am_1",Ar={fritekstTilBrevTextArea:jr},xe=({språkkode:r,readOnly:n=!0})=>e.jsx("div",{className:Ar.fritekstTilBrevTextArea,children:e.jsx(ye,{name:"fritekstTilBrev",label:A().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[T,be],readOnly:n,maxLength:1e5,badges:[{type:"info",titleText:Qe(r)}],parse:de})});xe.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{språkkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Tr="_select_1xd5p_7",Er="_selectReadOnly_1xd5p_10",U={select:Tr,selectReadOnly:Er},De=({readOnly:r,medholdReasons:n,alleHjemmlerMedNavn:t,klageVurdering:l})=>{const a=A(),i=n.map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode)),d=t.map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode));return e.jsxs(v,{gap:"4",children:[e.jsx(N,{name:"klageVurdering",validate:[T],isReadOnly:r,isHorizontal:!0,radios:[{value:m.MEDHOLD_I_KLAGE,label:a.formatMessage({id:"Klage.ResolveKlage.ChangeVedtak"})},{value:m.STADFESTE_YTELSESVEDTAK,label:a.formatMessage({id:"Klage.ResolveKlage.KeepVedtakNfp"})}]}),l===m.MEDHOLD_I_KLAGE&&e.jsx(We,{children:e.jsxs(v,{gap:"4",children:[e.jsx(W,{readOnly:r,name:"klageMedholdArsak",selectValues:i,className:r?U.selectReadOnly:U.select,label:a.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[T]}),e.jsx(N,{name:"klageVurderingOmgjoer",validate:[T],isReadOnly:r,radios:[{value:O.GUNST_MEDHOLD_I_KLAGE,label:a.formatMessage({id:"Klage.Behandle.Omgjort"})},{value:O.UGUNST_MEDHOLD_I_KLAGE,label:a.formatMessage({id:"Klage.Behandle.Ugunst"})},{value:O.DELVIS_MEDHOLD_I_KLAGE,label:a.formatMessage({id:"Klage.Behandle.DelvisOmgjort"})}]})]})}),e.jsx(W,{readOnly:r,name:"klageHjemmel",selectValues:d,className:r?U.selectReadOnly:U.select,label:a.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[T]})]})};De.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<'KlageHjemmel'>[]"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const qr=(r,n)=>{switch(n){case m.STADFESTE_YTELSESVEDTAK:return r?M.KLAGE_STADFESTET:M.KLAGE_OVERSENDT;case m.OPPHEVE_YTELSESVEDTAK:return M.KLAGE_HJEMSENDT;case m.HJEMSENDE_UTEN_Å_OPPHEVE:return M.KLAGE_HJEMSENDT;case m.MEDHOLD_I_KLAGE:return M.KLAGE_OMGJORING;default:return}},Br=(r,n)=>({fritekst:n??"",dokumentMal:qr(!1,r),erOpphevetKlage:r===m.OPPHEVE_YTELSESVEDTAK}),He=({previewCallback:r,fritekstTilBrev:n,klageVurdering:t})=>{const l=a=>{r(Br(t,n)),a.preventDefault()};return e.jsx(je,{href:"#",onClick:l,onKeyDown:a=>a.key==="Enter"?l(a):null,children:e.jsx(s,{id:"PreviewKlageLink.ForhandvisBrev"})})};He.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: string;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},fritekstTilBrev:{required:!1,tsType:{name:"string"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Fr=(r,n)=>({kode:n,klageMedholdArsak:r.klageVurdering===m.MEDHOLD_I_KLAGE||r.klageVurdering===m.OPPHEVE_YTELSESVEDTAK?r.klageMedholdArsak:void 0,klageVurderingOmgjoer:r.klageVurdering===m.MEDHOLD_I_KLAGE?r.klageVurderingOmgjoer:void 0,klageHjemmel:r.klageHjemmel,fritekstTilBrev:r.fritekstTilBrev,begrunnelse:r.begrunnelse,klageVurdering:r.klageVurdering}),Le=({saveKlage:r,spinner:n=!1,aksjonspunktCode:t,readOnly:l=!1,handleSubmit:a})=>l?null:e.jsx(H,{size:"small",variant:"primary",loading:n,onClick:a(i=>r(Fr(i,t))),type:"button",children:e.jsx(s,{id:"Klage.ResolveKlage.TempSaveButton"})});Le.__docgenInfo={description:"",methods:[],displayName:"TempsaveKlageButton",props:{aksjonspunktCode:{required:!0,tsType:{name:"string"},description:""},saveKlage:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: TransformedValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"klageVurdering",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}}]}}],raw:"UseFormHandleSubmit<KlageFormType>"},description:""}}};const Sr=r=>({klageMedholdArsak:r.klageVurdering===m.MEDHOLD_I_KLAGE?r.klageMedholdArsak:void 0,klageVurderingOmgjoer:r.klageVurdering===m.MEDHOLD_I_KLAGE?r.klageVurderingOmgjoer:void 0,klageHjemmel:r.klageHjemmel,klageVurdering:r.klageVurdering,fritekstTilBrev:r.fritekstTilBrev,begrunnelse:r.begrunnelse,kode:K.BEHANDLE_KLAGE_NFP}),I=r=>{if(r&&r!=="-")return r},Or=(r,n)=>r.filter(({kode:t})=>n.includes(t)).sort((t,l)=>t.kode.localeCompare(l.kode)),Nr=r=>r.map(n=>n),_r=r=>({klageMedholdArsak:I(r==null?void 0:r.klageMedholdArsak),klageVurderingOmgjoer:I(r==null?void 0:r.klageVurderingOmgjoer),klageHjemmel:I(r==null?void 0:r.klageHjemmel),klageVurdering:I(r==null?void 0:r.klageVurdering),begrunnelse:r?r.begrunnelse:void 0,fritekstTilBrev:r?r.fritekstTilBrev:void 0}),we=({klageVurdering:r,previewCallback:n,saveKlage:t,readOnlySubmitButton:l,alleAktuelleHjemler:a})=>{var le;const{behandling:i,alleKodeverk:d,submitCallback:g,isReadOnly:u}=F(),p=Or(d.KlageHjemmel,Nr(a)),k=A(),[o,c]=j.useState(!1),f=j.useMemo(()=>_r(r.klageVurderingResultatNFP),[r]),{mellomlagretFormData:q,setMellomlagretFormData:S}=ge(),h=pe({defaultValues:q??f}),V=h.watch(),E=j.useCallback(()=>{c(!1)},[]),ze=j.useCallback(()=>{c(!0)},[]);return e.jsx(Ke,{formMethods:h,onSubmit:Q=>g(Sr(Q)),setDataOnUnmount:S,children:e.jsxs(v,{gap:"4",children:[e.jsx(P,{size:"small",children:k.formatMessage({id:"Klage.ResolveKlage.Title"})}),!l&&e.jsx(ve,{children:[e.jsx(s,{id:"Klage.ResolveKlage.HelpText"},K.BEHANDLE_KLAGE_NFP)]}),e.jsx(De,{readOnly:u,klageVurdering:V.klageVurdering,medholdReasons:d.KlageMedholdÅrsak,alleHjemmlerMedNavn:p}),e.jsx(fe,{readOnly:u,text:k.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),e.jsx(xe,{språkkode:i.språkkode,readOnly:u}),e.jsxs(B,{justify:"space-between",children:[e.jsxs(B,{gap:"4",children:[V.klageVurdering===m.STADFESTE_YTELSESVEDTAK&&e.jsxs(e.Fragment,{children:[e.jsx(H,{variant:"primary",type:"button",size:"small",onClick:()=>ze(),disabled:u,children:e.jsx(s,{id:"Klage.Behandle.Bekreft"})}),e.jsx(Me,{erModalÅpen:o,lukkModal:E,valgtHjemmel:(le=p.find(Q=>Q.kode===V.klageHjemmel))==null?void 0:le.navn,readOnly:u,isSubmittable:!l,isSubmitting:h.formState.isSubmitting,isDirty:h.formState.isValid})]}),V.klageVurdering!==m.STADFESTE_YTELSESVEDTAK&&e.jsx(ee,{isReadOnly:u,isSubmittable:!l,isSubmitting:h.formState.isSubmitting,isDirty:h.formState.isDirty}),!u&&V.klageVurdering&&V.fritekstTilBrev&&V.fritekstTilBrev.length>2&&e.jsx(He,{previewCallback:n,fritekstTilBrev:V.fritekstTilBrev,klageVurdering:V.klageVurdering})]}),e.jsx(Le,{saveKlage:t,handleSubmit:h.handleSubmit,readOnly:u,aksjonspunktCode:K.BEHANDLE_KLAGE_NFP})]})]})})};we.__docgenInfo={description:`BehandleklageformNfp

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
}>`},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const Rr={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},Pr=Z(Rr),Ue=({klageVurdering:r,saveKlage:n,previewCallback:t,readOnlySubmitButton:l})=>{const{aksjonspunkterForPanel:a}=F();return e.jsxs(X,{value:Pr,children:[r.klageVurderingResultatNK&&e.jsx(Pe,{klageVurdering:r}),a.some(i=>i.definisjon===K.BEHANDLE_KLAGE_NFP)&&e.jsx(we,{klageVurdering:r,saveKlage:n,previewCallback:t,readOnlySubmitButton:l,alleAktuelleHjemler:r.aktuelleHjemler?r.aktuelleHjemler:[]})]})};Ue.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const te=({aksjonspunktKoder:r,prosessPanelKode:n,prosessPanelMenyTekst:t})=>{const[l,a]=j.useState(!1),{behandling:i,hentOgSettBehandling:d,setSkalOppdatereEtterBekreftelseAvAp:g,oppdaterProsessStegOgFaktaPanelIUrl:u}=j.use($),p=g?Mr(a,g,u):void 0,k=G(r,[],p),o=Y(i),c=ke(),{data:f}=J(o.klage.klageVurderingOptions(i)),{mutate:q}=D({mutationFn:h=>Ve({...h,behandlingUuid:i.uuid}),onSuccess:me}),{mutate:S}=D({mutationFn:h=>o.klage.mellomlagreKlageVurdering({behandlingUuid:i.uuid,...h}),onSuccess:()=>d()});return e.jsx(z,{standardPanelProps:k,prosessPanelKode:n,prosessPanelMenyTekst:t,skalPanelVisesIMeny:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(rr,{visModal:l,lukkModal:()=>{a(!1),c("/")}}),f?e.jsx(Ue,{klageVurdering:f,previewCallback:q,saveKlage:S,readOnlySubmitButton:k.readOnlySubmitButton}):e.jsx(C,{})]})})},Mr=(r,n,t)=>l=>{const a=l.some(i=>i.kode===K.BEHANDLE_KLAGE_NFP&&"klageVurdering"in i&&i.klageVurdering===m.STADFESTE_YTELSESVEDTAK);return a&&n(!1),()=>{a?r(!0):t&&t("default","default")}};te.__docgenInfo={description:"",methods:[],displayName:"VurderingFellesProsessStegInitPanel",props:{aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},prosessPanelKode:{required:!0,tsType:{name:"ProsessStegCode"},description:""},prosessPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""}}};const xr=[K.BEHANDLE_KLAGE_NFP],Ie=()=>e.jsx(te,{aksjonspunktKoder:xr,prosessPanelKode:L.KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:A().formatMessage({id:"Behandlingspunkt.CheckKlageNFP"})});Ie.__docgenInfo={description:"",methods:[],displayName:"VurderingFamOgPensjonProsessStegInitPanel"};const Dr=[K.BEHANDLE_KLAGE_NK],Ge=()=>e.jsx(te,{aksjonspunktKoder:Dr,prosessPanelKode:L.KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:A().formatMessage({id:"Behandlingspunkt.CheckKlageNK"})});Ge.__docgenInfo={description:"",methods:[],displayName:"VurderingKlageInstansProsessStegInitPanel"};const Hr=({valgtProsessSteg:r,valgtFaktaSteg:n})=>e.jsxs(e.Fragment,{children:[e.jsxs(Ye,{valgtProsessSteg:r,valgtFaktaSteg:n,children:[e.jsx(Fe,{}),e.jsx(Ie,{}),e.jsx(Se,{}),e.jsx(Ge,{}),e.jsx(Re,{})]}),e.jsx(Ce,{valgtFaktaSteg:n,valgtProsessSteg:r,children:e.jsx(Je,{})})]});Hr.__docgenInfo={description:"",methods:[],displayName:"KlagePaneler",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""}}};export{Hr as default};
