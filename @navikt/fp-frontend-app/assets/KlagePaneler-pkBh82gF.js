import{j as e,B as _,l as j,a3 as F,a4 as de,W as oe,x as ie,U as ue,P as Z,b as ee,r as B,E as ke,aP as w,n as me,X as ve,V as Ye}from"./iframe-BJhriNd1.js";import{a as Ce,V as Je}from"./VergeFaktaInitPanel-CGBv0r4P.js";import{u as Y,P as C,a as $e}from"./useStandardProsessPanelProps-CJChF_Gi.js";import{K as Ke,X as J,W as We}from"./index.es-CoZ81dz3.js";import{u as $,n as z}from"./fagsakApi-p33wI0ip.js";import{u as pe,N as ye,Y as Q,t as c,M as O,D as be,b as he,e as D}from"./index.es-ipC7C-zD.js";import{A as y,b as fe}from"./index-C-tHVWsz.js";import{d as Ae,c as Xe,B as R}from"./behandlingResultatType-CVAxOrek.js";import{P as Ve,a as re}from"./OverstyringPanel-BiIhSKr1.js";import{b as L,V as v,a as P,D as Qe,H as q,L as h,B as b,M as ge}from"./VStack-DjKL2eQm.js";import{M as i}from"./message-lpM_RINx.js";import{u as W,f as je}from"./behandlingApi-2gwvqYyl.js";import{B as X}from"./FagsakIndex-BWAXbv4-.js";import{V as x}from"./vilkarUtfallType-vN0hVpa7.js";import{v as Ze}from"./validerApKodeOgHentApEnum-Dcsfz9sx.js";import{L as ce}from"./Link-B23Gk2ly.js";import{F as er}from"./FatterVedtakStatusModal-CHOzK6Eg.js";import{D as H}from"./dokumentMalType-B-Xou3xH.js";import{K as rr}from"./KlageBehandlingModal-BUhNC6cw.js";import"./BehandlingMenuIndex-CiWld8s_.js";import"./bind-tmx2Uplf.js";import"./index.es-NFD7uE9a.js";import"./Checkmark-BledmFex.js";import"./Popover-bGFRRzMC.js";import"./ExclamationmarkTriangleFill-ClE3XlZm.js";import"./Kjonnkode-C-fkzSiP.js";import"./Table-DEnyzVEZ.js";import"./ChevronDown-nz8wsQUM.js";import"./Checkbox-MN1mBhEg.js";import"./CheckmarkCircleFill-BzyDiBrx.js";import"./SettPaVentModalIndex-B2Wotlm6.js";import"./venteArsakType-BJdSFL9e.js";import"./useBehandlingPollingOperasjoner-DHk_55qh.js";import"./apiPollingStatus-nT-xUZgL.js";import"./errorType-rn8NRwev.js";import"./useKodeverk-CCrM44Y6.js";import"./paths-CuYunM7a.js";import"./Dropdown-2SadR09J.js";import"./BehandlingHenlagtPanel-R0p75C5g.js";import"./Tag-H1OatiII.js";import"./TotrinnskontrollIndex-M1htxTVW.js";import"./SupportHeader-B_kJYcgB.js";import"./ErrorBoundary-BA_vVT4F.js";import"./IngenBehandlingValgtPanel-W2G6FmAl.js";import"./index-DQECdfAs.js";import"./VisittkortSakIndex-_LxPJqQR.js";import"./Spacer-Eg9DQavR.js";import"./useTrackRouteParam-qXNoennc.js";import"./RisikoklassifiseringIndex-DkuExdYO.js";import"./BehandlingPaVent-BV17Gr2A.js";import"./BehandlingSupportIndex-CZ3QubeD.js";import"./DokumentIndex-CUS-LLkf.js";import"./DokumentLink-xeDbIHz-.js";import"./eksterneLenker-DcE6CUbm.js";import"./StarFill-CkXqk1yi.js";import"./HistorikkIndex-CntSzZYv.js";import"./MeldingIndex-DaM1MHvN.js";import"./UkjentAdresseMeldingIndex-D4uvku9o.js";import"./SettPaVentReadOnlyModal-Cn0tc5bw.js";import"./UtvidEllerMinskKnapp-DQLOluGL.js";import"./FagsakProfileIndex-C0oiVPhc.js";import"./FagsakData-P3KHKIxm.js";var m=(r=>(r.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",r.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",r.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",r.AVVIS_KLAGE="AVVIS_KLAGE",r.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",r))(m||{}),N=(r=>(r.DELVIS_MEDHOLD_I_KLAGE="DELVIS_MEDHOLD_I_KLAGE",r.GUNST_MEDHOLD_I_KLAGE="GUNST_MEDHOLD_I_KLAGE",r.UGUNST_MEDHOLD_I_KLAGE="UGUNST_MEDHOLD_I_KLAGE",r.UDEFINERT="-",r))(N||{});const U="ikkePaklagdVedtak",ae=r=>r.erKlagerPart===!1||r.erFristOverholdt===!1||r.erKonkret===!1||r.erSignert===!1||r.vedtak===U,Te=(r,a)=>r.find(l=>l.uuid===a),ne=(r,a)=>{const l=Te(r,a);return!!l&&(l.type===_.TILBAKEKREVING||l.type===_.TILBAKEKREVING_REVURDERING)},Ee=(r,a)=>{const l=ne(r,a),t=Te(r,a);return t&&l?{tilbakekrevingUuid:t.uuid,tilbakekrevingVedtakDato:t.avsluttet,tilbakekrevingBehandlingType:t.type}:void 0},ar=(r,a,l,t)=>({kode:t,begrunnelse:r.begrunnelse,behandlingUuid:a,erKlagerPart:r.erKlagerPart,erFristOverholdt:r.erFristOverholdt,erKonkret:r.erKonkret,erSignert:r.erSignert,erTilbakekreving:ne(l,r.vedtak),klageTilbakekreving:Ee(l,r.vedtak),paKlagdBehandlingUuid:r.vedtak===U?void 0:r.vedtak,fritekstTilBrev:ae(r)?r.fritekstTilBrev:void 0}),qe=({behandlingUuid:r,saveKlage:a,avsluttedeBehandlinger:l,spinner:t=!1,aksjonspunktCode:n,readOnly:s=!1,handleSubmit:d})=>s?null:e.jsx(L,{size:"small",variant:"primary",loading:t,onClick:d(g=>a(ar(g,r,l,n))),type:"button",children:e.jsx(i,{id:"TempsaveKlageButton.TempSaveButton"})});qe.__docgenInfo={description:"",methods:[],displayName:"TempsaveKlageButton",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunktCode:{required:!0,tsType:{name:"string"},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erFristOverholdt",value:{name:"boolean",required:!0}},{key:"erKonkret",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"vedtak",value:{name:"string",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}}],raw:"UseFormHandleSubmit<FormValues>"},description:""}}};const nr="_selectBredde_19ro0_1",lr={selectBredde:nr},tr=r=>r!=null&&r.paKlagdBehandlingUuid?`${r.paKlagdBehandlingUuid}`:U,sr=(r,a,l)=>[e.jsx("option",{value:U,children:a.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"})},"formkrav")].concat([...r].sort((n,s)=>ie(n.avsluttet).diff(ie(s.avsluttet))).map(({uuid:n,type:s,avsluttet:d})=>{var g;return e.jsx("option",{value:`${n}`,children:`${((g=l.BehandlingType.find(({kode:o})=>o===s))==null?void 0:g.navn)??""} ${d?ue(d):""}`},n)})),ir=r=>r===y.VURDERING_AV_FORMKRAV_KLAGE_NFP?"Klage.LovhjemmelNFP":"Klage.LovhjemmelKA",gr=r=>{const a=r?r.klageFormkravResultatNFP:null,l=r?r.klageVurderingResultatNFP:null;if(a)return{vedtak:tr(a),begrunnelse:a.begrunnelse,erKlagerPart:a.erKlagerPart,erKonkret:a.erKlageKonkret,erFristOverholdt:a.erKlagefirstOverholdt,erSignert:a.erSignert,fritekstTilBrev:l?l.fritekstTilBrev:void 0}},dr=(r,a)=>({erKlagerPart:r.erKlagerPart,erFristOverholdt:r.erFristOverholdt,erKonkret:r.erKonkret,erSignert:r.erSignert,begrunnelse:r.begrunnelse,kode:y.VURDERING_AV_FORMKRAV_KLAGE_NFP,vedtakBehandlingUuid:r.vedtak===U?void 0:r.vedtak,erTilbakekreving:ne(a,r.vedtak),tilbakekrevingInfo:Ee(a,r.vedtak),fritekstTilBrev:ae(r)?r.fritekstTilBrev:void 0}),Be=({klageVurdering:r,readOnlySubmitButton:a,avsluttedeBehandlinger:l,lagreFormkravVurdering:t})=>{const n=j(),{behandling:s,alleKodeverk:d,submitCallback:g,isReadOnly:o}=F(),K=sr(l,n,d),{mellomlagretFormData:k,setMellomlagretFormData:u}=de(),V=gr(r),p=pe({defaultValues:k??V}),E=p.watch();return e.jsx(ye,{formMethods:p,onSubmit:S=>g(dr(S,l)),setDataOnUnmount:u,children:e.jsxs(v,{gap:"4",children:[e.jsxs(v,{gap:"1",children:[e.jsx(P,{size:"small",children:n.formatMessage({id:"Klage.Formkrav.Title"})}),e.jsx(Qe,{children:n.formatMessage({id:ir(y.VURDERING_AV_FORMKRAV_KLAGE_NFP)})})]}),e.jsxs(v,{gap:"6",children:[!a&&e.jsx(Ke,{children:e.jsx(i,{id:"Klage.Formkrav.HelpText"})}),e.jsx(v,{gap:"6",children:e.jsxs(q,{gap:"10",children:[e.jsx("div",{children:e.jsx(Q,{name:"vedtak",control:p.control,readOnly:o,validate:[c],label:n.formatMessage({id:"Klage.Formkrav.VelgVedtak"}),selectValues:K,className:lr.selectBredde})}),e.jsxs(v,{gap:"5",children:[e.jsxs(q,{gap:"4",children:[e.jsx(O,{name:"erKlagerPart",control:p.control,label:n.formatMessage({id:"Klage.Formkrav.ErKlagerPart"}),validate:[c],isReadOnly:o,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:n.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:n.formatMessage({id:"Klage.Formkrav.Nei"})}]}),e.jsx(O,{name:"erKonkret",control:p.control,label:n.formatMessage({id:"Klage.Formkrav.ErKonkret"}),validate:[c],isReadOnly:o,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:n.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:n.formatMessage({id:"Klage.Formkrav.Nei"})}]})]}),e.jsxs(q,{gap:"4",children:[e.jsx(O,{name:"erFristOverholdt",control:p.control,label:n.formatMessage({id:"Klage.Formkrav.ErFristOverholdt"}),validate:[c],isReadOnly:o,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:n.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:n.formatMessage({id:"Klage.Formkrav.Nei"})}]}),e.jsx(O,{name:"erSignert",control:p.control,label:n.formatMessage({id:"Klage.Formkrav.ErSignert"}),validate:[c],isReadOnly:o,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:n.formatMessage({id:"Klage.Formkrav.Ja"})},{value:"false",label:n.formatMessage({id:"Klage.Formkrav.Nei"})}]})]})]})]})}),e.jsx(Ve,{readOnly:o}),ae(E)&&e.jsx(be,{name:"fritekstTilBrev",control:p.control,label:n.formatMessage({id:"FormkravKlageFormNfp.Fritekst"}),maxLength:1e5,validate:[c,he],readOnly:o,parse:oe}),e.jsxs(q,{justify:"space-between",children:[e.jsx(re,{isReadOnly:o,isSubmittable:!a,isSubmitting:p.formState.isSubmitting,isDirty:p.formState.isDirty}),e.jsx(qe,{behandlingUuid:s.uuid,saveKlage:t,avsluttedeBehandlinger:l,handleSubmit:p.handleSubmit,readOnly:o,aksjonspunktCode:y.VURDERING_AV_FORMKRAV_KLAGE_NFP})]})]})]})})};Be.__docgenInfo={description:`FormkravklageformNfp

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
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Fe=({klageVurdering:r,avsluttedeBehandlinger:a})=>{var o;const l=j(),{alleKodeverk:t}=F(),{klageFormkravResultatKA:n,underBehandlingKabal:s,behandletAvKabal:d}=r;let g=l.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"});if(n!=null&&n.paKlagdBehandlingUuid){const K=a.find(k=>k.uuid===n.paKlagdBehandlingUuid);K&&(g=`${(o=t.BehandlingType.find(u=>u.kode===K.type))==null?void 0:o.navn} ${K.avsluttet?ue(K.avsluttet):""}`)}return e.jsxs(v,{gap:"4",children:[e.jsx(P,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.Title"})}),s&&e.jsx(P,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.SeKabalText"})}),!s&&!d&&e.jsxs(e.Fragment,{children:[e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.VelgVedtak"})}),e.jsx(b,{size:"small",children:g})]}),e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.ErKlagerPart"})}),e.jsx(b,{size:"small",children:n!=null&&n.erKlagerPart?e.jsx(i,{id:"Klage.Formkrav.Ja"}):e.jsx(i,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.ErKonkret"})}),e.jsx(b,{size:"small",children:n!=null&&n.erKlageKonkret?e.jsx(i,{id:"Klage.Formkrav.Ja"}):e.jsx(i,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.ErFristOverholdt"})}),e.jsx(b,{size:"small",children:n!=null&&n.erKlagefirstOverholdt?e.jsx(i,{id:"Klage.Formkrav.Ja"}):e.jsx(i,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.ErSignert"})}),e.jsx(b,{size:"small",children:n!=null&&n.erSignert?e.jsx(i,{id:"Klage.Formkrav.Ja"}):e.jsx(i,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.Formkrav.Vurdering"})}),e.jsx(b,{size:"small",children:n==null?void 0:n.begrunnelse})]})]})]})};Fe.__docgenInfo={description:`FormkravKlageKa

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
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""}}};const or={"Klage.LovhjemmelNFP":"Fvl §§ 28, 31, 32, 33 og ftrl § 21-12","Klage.LovhjemmelKA":"Fvl §§  28, 31, 32, 34 og ftrl § 21-12","Klage.Formkrav.VelgVedtak":"Vedtaket som er påklagd","Klage.Formkrav.Title":"Vurder formkrav","Klage.Formkrav.HelpText":"Vurder om klagen oppfyller formkravene","Klage.Formkrav.IkkePåklagdVedtak":"Ikke påklagd et vedtak","Klage.Formkrav.ErKlagerPart":"Er klager part i saken?","Klage.Formkrav.ErKonkret":"Klages det på konkrete elementer i vedtaket?","Klage.Formkrav.ErFristOverholdt":"Er klagefristen overholdt?","Klage.Formkrav.ErSignert":"Er klagen signert?","Klage.Formkrav.KabalText":"Fortsett klagebehandlingen i KABAL: Kryss av, velg hjemmel og trykk send","Klage.Formkrav.SeKabalText":"Klagen behandles i KABAL","Klage.Formkrav.SendTilKabal":"Send til KABAL","Klage.Formkrav.Hjemmel":"Hjemmel","Klage.Formkrav.Ja":"Ja","Klage.Formkrav.Nei":"Nei","Klage.Formkrav.Vurdering":"Vurdering","FormkravKlageFormNfp.Fritekst":"Fritekst","TempsaveKlageButton.TempSaveButton":"Lagre","Malform.Beskrivelse":"Foretrukket språk"},ur=ee(or),le=({klageVurdering:r={},avsluttedeBehandlinger:a,readOnlySubmitButton:l,lagreFormkravVurdering:t})=>{const{aksjonspunkterForPanel:n}=F();return e.jsxs(Z,{value:ur,children:[n.some(s=>s.definisjon===y.VURDERING_AV_FORMKRAV_KLAGE_NFP)&&e.jsx(Be,{klageVurdering:r,readOnlySubmitButton:l,avsluttedeBehandlinger:a,lagreFormkravVurdering:t}),r.klageFormkravResultatKA&&e.jsx(Fe,{klageVurdering:r,avsluttedeBehandlinger:a})]})};le.__docgenInfo={description:"",methods:[],displayName:"FormkravProsessIndex",props:{klageVurdering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const kr=[y.VURDERING_AV_FORMKRAV_KLAGE_NFP],Se=()=>{const r=j(),a=Y(kr),{behandling:l,alleBehandlinger:t,hentOgSettBehandling:n}=B.use(X),s=t.filter(k=>k.status===ke.AVSLUTTET).filter(k=>{var u;return(k.type!==_.KLAGE||Ae((u=k.behandlingsresultat)==null?void 0:u.type))&&k.type!==_.ANKE}).map(k=>({uuid:k.uuid,type:k.type,avsluttet:k.avsluttet??void 0})),d=W(l),{data:g,isFetching:o}=$(d.klage.klageVurderingOptions(l)),{mutate:K}=D({mutationFn:k=>d.klage.mellomlagreFormkravVurdering(k),onSuccess:()=>n()});return e.jsx(C,{standardPanelProps:a,prosessPanelKode:w.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.FormkravKlageNFP"}),skalPanelVisesIMeny:!0,children:o?e.jsx(J,{}):e.jsx(le,{klageVurdering:g,avsluttedeBehandlinger:s,lagreFormkravVurdering:K,readOnlySubmitButton:a.readOnlySubmitButton})})};Se.__docgenInfo={description:"",methods:[],displayName:"FormKravFamOgPensjonProsessStegInitPanel"};const mr=[y.VURDER_FORMKRAV_NK],Ne=()=>{const r=j(),a=Y(mr),{behandling:l,alleBehandlinger:t,hentOgSettBehandling:n}=B.use(X),d=t.filter(u=>!u.behandlingHenlagt).filter(u=>u.status===ke.AVSLUTTET).filter(u=>{var V;return(u.type!==_.KLAGE||Ae((V=u.behandlingsresultat)==null?void 0:V.type))&&u.type!==_.ANKE}).map(u=>({uuid:u.uuid,type:u.type,avsluttet:u.avsluttet??void 0})),g=W(l),{data:o,isFetching:K}=$(g.klage.klageVurderingOptions(l)),{mutate:k}=D({mutationFn:u=>g.klage.mellomlagreFormkravVurdering(u),onSuccess:()=>n()});return e.jsx(C,{standardPanelProps:a,prosessPanelKode:w.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.FormkravKlageKA"}),skalPanelVisesIMeny:!0,children:K?e.jsx(J,{}):e.jsx(le,{klageVurdering:o,avsluttedeBehandlinger:d,lagreFormkravVurdering:k,readOnlySubmitButton:a.readOnlySubmitButton})})};Ne.__docgenInfo={description:"",methods:[],displayName:"FormKravKlageInstansProsessStegInitPanel"};const Oe=({behandlingPåVent:r,previewVedtakCallback:a,readOnly:l,lagreVedtak:t,isSubmitting:n})=>{const s=d=>{d.preventDefault(),a({gjelderVedtak:!0})};return e.jsxs(q,{gap:"2",align:"center",children:[!l&&e.jsx(L,{variant:"primary",size:"small",onClick:t,disabled:r||n,loading:n,type:"button",children:e.jsx(i,{id:"VedtakKlageForm.TilGodkjenning"})}),e.jsx(ce,{href:"#",onClick:s,onKeyDown:d=>d.key==="Enter"?s(d):null,children:e.jsx(i,{id:"VedtakKlageForm.ForhandvisBrev"})})]})};Oe.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageSubmitPanel",props:{previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingPåVent:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""}}};const vr={GUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortGunst",UGUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortUgunst",DELVIS_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortDelvis"},Kr=r=>{if(r){if(r.klageFormkravResultatKA&&r.klageVurderingResultatNK)return r.klageFormkravResultatKA.avvistArsaker;if(r.klageFormkravResultatNFP)return r.klageFormkravResultatNFP.avvistArsaker}return[]},pr=(r,a)=>{var l,t,n,s;return(l=r==null?void 0:r.klageVurderingResultatNK)!=null&&l.klageMedholdArsak?((t=a.KlageMedholdÅrsak.find(({kode:d})=>{var g;return d===((g=r.klageVurderingResultatNK)==null?void 0:g.klageMedholdArsak)}))==null?void 0:t.navn)??"":(n=r==null?void 0:r.klageVurderingResultatNFP)!=null&&n.klageMedholdArsak?((s=a.KlageMedholdÅrsak.find(({kode:d})=>{var g;return d===((g=r.klageVurderingResultatNFP)==null?void 0:g.klageMedholdArsak)}))==null?void 0:s.navn)??"":null},yr=r=>{const a=r.klageVurderingResultatNK??r.klageVurderingResultatNFP;switch(a==null?void 0:a.klageVurdering){case m.AVVIS_KLAGE:return"VedtakKlageForm.KlageAvvist";case m.STADFESTE_YTELSESVEDTAK:return"VedtakKlageForm.KlageStadfestet";case m.OPPHEVE_YTELSESVEDTAK:return"VedtakKlageForm.YtelsesvedtakOpphevet";case m.HJEMSENDE_UTEN_Å_OPPHEVE:return"VedtakKlageForm.HjemmsendUtenOpphev";case m.MEDHOLD_I_KLAGE:return vr[(a==null?void 0:a.klageVurderingOmgjoer)??""];default:return"VedtakKlageForm.IkkeFastsatt"}},Re=({klageVurdering:r,previewVedtakCallback:a,behandlingsresultat:l})=>{const{behandling:t,isReadOnly:n,alleKodeverk:s,aksjonspunkterForPanel:d,submitCallback:g}=F(),o=Kr(r),K=pr(r,s),k=yr(r),u=r.klageVurderingResultatNK??r.klageVurderingResultatNFP,V=Xe(l.type),[p,E]=B.useState(!1),S=()=>{E(!0);const A=d.filter(T=>T.status===fe.OPPRETTET).map(T=>T.definisjon).map(T=>({kode:Ze(T,y.FORESLA_VEDTAK,y.FORESLA_VEDTAK_MANUELT)}));g(A).then(()=>E(!1))};return e.jsxs(v,{gap:"4",children:[e.jsx(P,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.Header"})}),e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.Resultat"})}),k&&e.jsx(b,{size:"small",children:e.jsx(i,{id:k})})]}),l.type===R.KLAGE_AVVIST&&e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.ArsakTilAvvisning"})}),o.map(f=>{var A;return e.jsx(b,{size:"small",children:((A=s.KlageAvvistÅrsak.find(({kode:T})=>T===f))==null?void 0:A.navn)??""},f)})]}),V&&e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.ArsakTilOmgjoring"})}),K]}),l.type===R.KLAGE_YTELSESVEDTAK_OPPHEVET&&e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"VedtakKlageForm.ArsakTilOppheving"})}),K]}),(u==null?void 0:u.klageVurdertAv)==="NFP"&&e.jsx(Oe,{previewVedtakCallback:a,readOnly:n,behandlingPåVent:t.behandlingPåVent,lagreVedtak:S,isSubmitting:p})]})};Re.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageForm",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const br={"VedtakKlageForm.ArsakTilAvslag":"Årsak til avslag","VedtakKlageForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakKlageForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakKlageForm.Resultat":"Resultat av klage","VedtakKlageForm.ArsakTilAvvisning":"Årsak til avvisning","VedtakKlageForm.ArsakTilOmgjoring":"Årsak til omgjøring","VedtakKlageForm.ArsakTilOppheving":"Årsak til oppheving","VedtakKlageForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakKlageForm.ResultatKlageAvvist":"Klagen er avvist","VedtakKlageForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakKlageForm.TilGodkjenning":"Til godkjenning","VedtakKlageForm.ForhandvisBrev":"Forhåndsvis vedtaksbrev","VedtakKlageForm.ArsakTilMedhold":"Årsak","VedtakKlageForm.KlageOmgjortGunst":"Vedtaket er omgjort til gunst","VedtakKlageForm.KlageOmgjortUgunst":"Vedtaket er omgjort til ugunst","VedtakKlageForm.KlageOmgjortDelvis":"Vedtaket er delvis omgjort til gunst","VedtakKlageForm.HjemmsendUtenOpphev":"Vedtaket er hjemsendt","VedtakKlageForm.IkkeFastsatt":"Ikke fastsatt","VedtakKlageForm.Header":"Resultat","VedtakKlageForm.KlageAvvist":"Avvist fordi klagen ikke oppfyller formkravene","VedtakKlageForm.KlageStadfestet":"Vedtaket er stadfestet","VedtakKlageForm.YtelsesvedtakOpphevet":"Vedtak er opphevet og hjemsendt"},hr=ee(br),_e=({klageVurdering:r,previewVedtakCallback:a})=>{const{behandling:l}=F();if(!l.behandlingsresultat)throw new Error(`behandlingsresultat finnes ikke for behandling ${l.uuid}`);return e.jsx(Z,{value:hr,children:e.jsx(Re,{klageVurdering:r,previewVedtakCallback:a,behandlingsresultat:l.behandlingsresultat})})};_e.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const fr=[y.FORESLA_VEDTAK,y.FATTER_VEDTAK,y.FORESLA_VEDTAK_MANUELT],Pe=()=>{const r=j(),{behandling:a,setSkalOppdatereEtterBekreftelseAvAp:l}=B.use(X),{aksjonspunkt:t}=a,[n,s]=B.useState(!1),d=Vr(s,l),g=Y(fr,[],d),o=Ar(a.behandlingsresultat,t),K=W(a),k=me(),{data:u}=$(K.klage.klageVurderingOptions(a)),{mutate:V}=D({mutationFn:p=>je({...p,behandlingUuid:a.uuid}),onSuccess:ve});return e.jsxs(e.Fragment,{children:[e.jsx(er,{visModal:n,lukkModal:()=>{s(!1),k("/")},tekst:r.formatMessage({id:"FatterVedtakStatusModal.KlagenErFerdigbehandlet"})}),e.jsx(C,{skalPanelVisesIMeny:!0,prosessPanelKode:w.KLAGE_RESULTAT,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.ResultatKlage"}),standardPanelProps:g,overstyrtStatus:o,skalMarkeresSomAktiv:o!==x.IKKE_VURDERT,children:u?e.jsx(_e,{klageVurdering:u,previewVedtakCallback:V}):e.jsx(J,{})})]})},Ar=(r,a=[])=>{const l=a.some(n=>n.status===fe.OPPRETTET);if(a.length===0||l)return x.IKKE_VURDERT;const t=r==null?void 0:r.type;return t===R.HENLAGT_KLAGE_TRUKKET||t===R.HENLAGT_FEILOPPRETTET?x.IKKE_VURDERT:t===R.KLAGE_AVVIST||t===R.KLAGE_YTELSESVEDTAK_OPPHEVET?x.IKKE_OPPFYLT:x.OPPFYLT},Vr=(r,a)=>()=>(a(!1),()=>{r(!0)});Pe.__docgenInfo={description:"",methods:[],displayName:"KlageresultatProsessStegInitPanel"};const Me=({klageVurdering:r})=>{var K,k;const a=j(),{alleKodeverk:l}=F(),{begrunnelse:t,fritekstTilBrev:n,klageVurdering:s,klageMedholdArsak:d,klageVurderingOmgjoer:g}=r.klageVurderingResultatNK??{},o=l.KlageMedholdÅrsak;return e.jsxs(v,{gap:"4",children:[e.jsx(P,{size:"small",children:a.formatMessage({id:"Klage.ResolveKlage.Title"})}),e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),e.jsxs(b,{size:"small",children:[s===m.STADFESTE_YTELSESVEDTAK&&e.jsx(i,{id:"Klage.ResolveKlage.KeepVedtakNk"}),s===m.MEDHOLD_I_KLAGE&&e.jsx(i,{id:"Klage.ResolveKlage.ChangeVedtak"}),s===m.HJEMSENDE_UTEN_Å_OPPHEVE&&e.jsx(i,{id:"Klage.Behandle.Hjemsendt"}),s===m.OPPHEVE_YTELSESVEDTAK&&e.jsx(i,{id:"Klage.ResolveKlage.NullifyVedtak"})]})]}),s===m.MEDHOLD_I_KLAGE&&e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(b,{size:"small",children:(K=o.find(u=>u.kode===d))==null?void 0:K.navn}),e.jsxs(b,{size:"small",children:[g===N.GUNST_MEDHOLD_I_KLAGE&&e.jsx(i,{id:"Klage.Behandle.Omgjort"}),g===N.UGUNST_MEDHOLD_I_KLAGE&&e.jsx(i,{id:"Klage.Behandle.Ugunst"}),g===N.DELVIS_MEDHOLD_I_KLAGE&&e.jsx(i,{id:"Klage.Behandle.DelvisOmgjort"})]})]}),(s===m.OPPHEVE_YTELSESVEDTAK||s===m.HJEMSENDE_UTEN_Å_OPPHEVE)&&e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(b,{size:"small",children:(k=o.find(u=>u.kode===d))==null?void 0:k.navn})]}),e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"FritekstKlageBrevTextField.Fritekst"})}),e.jsx(b,{size:"small",children:n})]}),e.jsxs(v,{gap:"1",children:[e.jsx(h,{size:"small",children:e.jsx(i,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),e.jsx(b,{size:"small",children:t})]})]})};Me.__docgenInfo={description:`BehandleklageformNfp

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
}>`},description:""}}};const He=({erModalÅpen:r,lukkModal:a,isSubmittable:l,isSubmitting:t,isDirty:n,readOnly:s,valgtHjemmel:d})=>{const g=j();return e.jsx(ge,{width:"500px",open:r,"aria-label":g.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:a,children:e.jsx(ge.Body,{children:e.jsxs(v,{gap:"3",children:[e.jsxs(v,{gap:"4",children:[e.jsx(h,{size:"medium",children:e.jsx(i,{id:"Klage.Modal.Overskrift"})}),e.jsx(b,{children:e.jsx(i,{id:"Klage.Modal.SendTilKlageinstans"})}),e.jsx(b,{children:e.jsx(i,{id:"Klage.Modal.Valg"})}),e.jsx(b,{children:e.jsx(i,{id:"Klage.Modal.Oppretthold"})}),d&&e.jsx(b,{children:e.jsx(i,{id:"Klage.Modal.Hjemmel",values:{hjemmel:d}})})]}),e.jsx("div",{children:e.jsxs(q,{gap:"2",children:[e.jsx(re,{isReadOnly:s,isSubmittable:l,isSubmitting:t,isDirty:n}),e.jsx(L,{size:"small",variant:"primary",onClick:a,autoFocus:!0,type:"button",children:e.jsx(i,{id:"Klage.Modal.Avbryt"})})]})})]})})})};He.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const jr="_fritekstTilBrevTextArea_n72am_1",cr={fritekstTilBrevTextArea:jr},xe=({språkkode:r,readOnly:a=!0})=>e.jsx("div",{className:cr.fritekstTilBrevTextArea,children:e.jsx(be,{name:"fritekstTilBrev",label:j().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[c,he],readOnly:a,maxLength:1e5,badges:[{type:"info",titleText:Ye(r)}],parse:oe})});xe.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{språkkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Tr="_select_1xd5p_7",Er="_selectReadOnly_1xd5p_10",I={select:Tr,selectReadOnly:Er},De=({readOnly:r,medholdReasons:a,alleHjemmlerMedNavn:l,klageVurdering:t})=>{const n=j(),s=a.map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode)),d=l.map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode));return e.jsxs(v,{gap:"4",children:[e.jsx(O,{name:"klageVurdering",validate:[c],isReadOnly:r,isHorizontal:!0,radios:[{value:m.MEDHOLD_I_KLAGE,label:n.formatMessage({id:"Klage.ResolveKlage.ChangeVedtak"})},{value:m.STADFESTE_YTELSESVEDTAK,label:n.formatMessage({id:"Klage.ResolveKlage.KeepVedtakNfp"})}]}),t===m.MEDHOLD_I_KLAGE&&e.jsx(We,{children:e.jsxs(v,{gap:"4",children:[e.jsx(Q,{readOnly:r,name:"klageMedholdArsak",selectValues:s,className:r?I.selectReadOnly:I.select,label:n.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[c]}),e.jsx(O,{name:"klageVurderingOmgjoer",validate:[c],isReadOnly:r,radios:[{value:N.GUNST_MEDHOLD_I_KLAGE,label:n.formatMessage({id:"Klage.Behandle.Omgjort"})},{value:N.UGUNST_MEDHOLD_I_KLAGE,label:n.formatMessage({id:"Klage.Behandle.Ugunst"})},{value:N.DELVIS_MEDHOLD_I_KLAGE,label:n.formatMessage({id:"Klage.Behandle.DelvisOmgjort"})}]})]})}),e.jsx(Q,{readOnly:r,name:"klageHjemmel",selectValues:d,className:r?I.selectReadOnly:I.select,label:n.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[c]})]})};De.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<'KlageHjemmel'>[]"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const qr=(r,a)=>{switch(a){case m.STADFESTE_YTELSESVEDTAK:return r?H.KLAGE_STADFESTET:H.KLAGE_OVERSENDT;case m.OPPHEVE_YTELSESVEDTAK:return H.KLAGE_HJEMSENDT;case m.HJEMSENDE_UTEN_Å_OPPHEVE:return H.KLAGE_HJEMSENDT;case m.MEDHOLD_I_KLAGE:return H.KLAGE_OMGJORING;default:return}},Br=(r,a)=>({fritekst:a??"",dokumentMal:qr(!1,r),erOpphevetKlage:r===m.OPPHEVE_YTELSESVEDTAK}),Le=({previewCallback:r,fritekstTilBrev:a,klageVurdering:l})=>{const t=n=>{r(Br(l,a)),n.preventDefault()};return e.jsx(ce,{href:"#",onClick:t,onKeyDown:n=>n.key==="Enter"?t(n):null,children:e.jsx(i,{id:"PreviewKlageLink.ForhandvisBrev"})})};Le.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: string;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},fritekstTilBrev:{required:!1,tsType:{name:"string"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Fr=r=>({klageMedholdArsak:r.klageVurdering===m.MEDHOLD_I_KLAGE?r.klageMedholdArsak:void 0,klageVurderingOmgjoer:r.klageVurdering===m.MEDHOLD_I_KLAGE?r.klageVurderingOmgjoer:void 0,klageHjemmel:r.klageHjemmel,klageVurdering:z(r.klageVurdering),fritekstTilBrev:r.fritekstTilBrev,begrunnelse:r.begrunnelse,kode:y.BEHANDLE_KLAGE_NFP}),G=r=>{if(r&&r!=="-")return r},Sr=(r,a)=>r.filter(({kode:l})=>a.includes(l)).sort((l,t)=>l.kode.localeCompare(t.kode)),Nr=r=>r.map(a=>a),Or=r=>({klageMedholdArsak:G(r==null?void 0:r.klageMedholdArsak),klageVurderingOmgjoer:G(r==null?void 0:r.klageVurderingOmgjoer),klageHjemmel:G(r==null?void 0:r.klageHjemmel),klageVurdering:G(r==null?void 0:r.klageVurdering),begrunnelse:r?r.begrunnelse:void 0,fritekstTilBrev:r?r.fritekstTilBrev:void 0}),we=({klageVurdering:r,previewCallback:a,saveKlage:l,readOnlySubmitButton:t,alleAktuelleHjemler:n})=>{var se;const{behandling:s,alleKodeverk:d,submitCallback:g,isReadOnly:o}=F(),K=Sr(d.KlageHjemmel,Nr(n)),k=j(),[u,V]=B.useState(!1),p=Or(r.klageVurderingResultatNFP),{mellomlagretFormData:E,setMellomlagretFormData:S}=de(),f=pe({defaultValues:E??p}),A=f.watch(),T=()=>{V(!1)},ze=()=>{V(!0)};return e.jsx(ye,{formMethods:f,onSubmit:M=>g(Fr(M)),setDataOnUnmount:S,children:e.jsxs(v,{gap:"4",children:[e.jsx(P,{size:"small",children:k.formatMessage({id:"Klage.ResolveKlage.Title"})}),!t&&e.jsx(Ke,{children:[e.jsx(i,{id:"Klage.ResolveKlage.HelpText"},y.BEHANDLE_KLAGE_NFP)]}),e.jsx(De,{readOnly:o,klageVurdering:A.klageVurdering,medholdReasons:d.KlageMedholdÅrsak,alleHjemmlerMedNavn:K}),e.jsx(Ve,{readOnly:o,text:k.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),e.jsx(xe,{språkkode:s.språkkode,readOnly:o}),e.jsxs(q,{justify:"space-between",children:[e.jsxs(q,{gap:"4",children:[A.klageVurdering===m.STADFESTE_YTELSESVEDTAK&&e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"primary",type:"button",size:"small",onClick:()=>ze(),disabled:o,children:e.jsx(i,{id:"Klage.Behandle.Bekreft"})}),e.jsx(He,{erModalÅpen:u,lukkModal:T,valgtHjemmel:(se=K.find(M=>M.kode===A.klageHjemmel))==null?void 0:se.navn,readOnly:o,isSubmittable:!t,isSubmitting:f.formState.isSubmitting,isDirty:f.formState.isValid})]}),A.klageVurdering!==m.STADFESTE_YTELSESVEDTAK&&e.jsx(re,{isReadOnly:o,isSubmittable:!t,isSubmitting:f.formState.isSubmitting,isDirty:f.formState.isDirty}),!o&&A.klageVurdering&&A.fritekstTilBrev&&A.fritekstTilBrev.length>2&&e.jsx(Le,{previewCallback:a,fritekstTilBrev:A.fritekstTilBrev,klageVurdering:A.klageVurdering})]}),!o&&e.jsx(L,{size:"small",variant:"primary",onClick:f.handleSubmit(M=>l(Rr(M,y.BEHANDLE_KLAGE_NFP))),type:"button",children:e.jsx(i,{id:"Klage.ResolveKlage.TempSaveButton"})})]})]})})},Rr=(r,a)=>({kode:a,klageMedholdArsak:r.klageVurdering===m.MEDHOLD_I_KLAGE||r.klageVurdering===m.OPPHEVE_YTELSESVEDTAK?r.klageMedholdArsak:void 0,klageVurderingOmgjoer:r.klageVurdering===m.MEDHOLD_I_KLAGE?r.klageVurderingOmgjoer:void 0,klageHjemmel:r.klageHjemmel,fritekstTilBrev:z(r.fritekstTilBrev),begrunnelse:z(r.begrunnelse),klageVurdering:z(r.klageVurdering)});we.__docgenInfo={description:`BehandleklageformNfp

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
}>`},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const _r={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},Pr=ee(_r),Ue=({klageVurdering:r,saveKlage:a,previewCallback:l,readOnlySubmitButton:t})=>{const{aksjonspunkterForPanel:n}=F();return e.jsxs(Z,{value:Pr,children:[r.klageVurderingResultatNK&&e.jsx(Me,{klageVurdering:r}),n.some(s=>s.definisjon===y.BEHANDLE_KLAGE_NFP)&&e.jsx(we,{klageVurdering:r,saveKlage:a,previewCallback:l,readOnlySubmitButton:t,alleAktuelleHjemler:r.aktuelleHjemler?r.aktuelleHjemler:[]})]})};Ue.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const te=({aksjonspunktKoder:r,prosessPanelKode:a,prosessPanelMenyTekst:l})=>{const[t,n]=B.useState(!1),{behandling:s,hentOgSettBehandling:d,setSkalOppdatereEtterBekreftelseAvAp:g,oppdaterProsessStegOgFaktaPanelIUrl:o}=B.use(X),K=g?Mr(n,g,o):void 0,k=Y(r,[],K),u=W(s),V=me(),{data:p}=$(u.klage.klageVurderingOptions(s)),{mutate:E}=D({mutationFn:f=>je({...f,behandlingUuid:s.uuid}),onSuccess:ve}),{mutate:S}=D({mutationFn:f=>u.klage.mellomlagreKlageVurdering({behandlingUuid:s.uuid,...f}),onSuccess:()=>d()});return e.jsx(C,{standardPanelProps:k,prosessPanelKode:a,prosessPanelMenyTekst:l,skalPanelVisesIMeny:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(rr,{visModal:t,lukkModal:()=>{n(!1),V("/")}}),p?e.jsx(Ue,{klageVurdering:p,previewCallback:E,saveKlage:S,readOnlySubmitButton:k.readOnlySubmitButton}):e.jsx(J,{})]})})},Mr=(r,a,l)=>t=>{const n=t.some(s=>s.kode===y.BEHANDLE_KLAGE_NFP&&"klageVurdering"in s&&s.klageVurdering===m.STADFESTE_YTELSESVEDTAK);return n&&a(!1),()=>{n?r(!0):l&&l("default","default")}};te.__docgenInfo={description:"",methods:[],displayName:"VurderingFellesProsessStegInitPanel",props:{aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},prosessPanelKode:{required:!0,tsType:{name:"ProsessStegCode"},description:""},prosessPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""}}};const Hr=[y.BEHANDLE_KLAGE_NFP],Ie=()=>e.jsx(te,{aksjonspunktKoder:Hr,prosessPanelKode:w.KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:j().formatMessage({id:"Behandlingspunkt.CheckKlageNFP"})});Ie.__docgenInfo={description:"",methods:[],displayName:"VurderingFamOgPensjonProsessStegInitPanel"};const xr=[y.BEHANDLE_KLAGE_NK],Ge=()=>e.jsx(te,{aksjonspunktKoder:xr,prosessPanelKode:w.KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:j().formatMessage({id:"Behandlingspunkt.CheckKlageNK"})});Ge.__docgenInfo={description:"",methods:[],displayName:"VurderingKlageInstansProsessStegInitPanel"};const Dr=({valgtProsessSteg:r,valgtFaktaSteg:a})=>e.jsxs(e.Fragment,{children:[e.jsxs($e,{valgtProsessSteg:r,valgtFaktaSteg:a,children:[e.jsx(Se,{}),e.jsx(Ie,{}),e.jsx(Ne,{}),e.jsx(Ge,{}),e.jsx(Pe,{})]}),e.jsx(Ce,{valgtFaktaSteg:a,valgtProsessSteg:r,children:e.jsx(Je,{})})]});Dr.__docgenInfo={description:"",methods:[],displayName:"KlagePaneler",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""}}};export{Dr as default};
