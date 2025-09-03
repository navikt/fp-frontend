import{j as e,G as P,l as c,ai as F,aj as ue,v as f,O as ze,aY as Ce,a6 as de,z as oe,B as se,a4 as ke,P as ee,b as ae,r as O,$ as me,bm as x,n as ve,a8 as Ke,a5 as $e}from"./iframe-DfcOFqFS.js";import{a as Qe,V as We}from"./VergeFaktaInitPanel-DlHo4Hwz.js";import{u as z,P as C,a as Xe}from"./useStandardProsessPanelProps-DwBNJ06d.js";import{W as pe,Q as $,H as Ze}from"./index.es-DoLu84Vz.js";import{u as Q,n as J}from"./fagsakApi-uHRwE6Mt.js";import{u as ye,D as Ee,M as Z,y as ea,F as _,R as V,O as be,c as H,a as Ae}from"./index.es-E1jowIjX.js";import{A as E,e as he}from"./index-DlC7OsQr.js";import{d as Ve,c as aa,B as q}from"./behandlingResultatType-CVAxOrek.js";import{P as Te,a as re}from"./OverstyringPanel-CyUrgQlo.js";import{b as G,V as o,a as B,D as ra,H as T,L as b,B as y,M as ge}from"./VStack-zrIsnGqA.js";import{M as l}from"./message-hnAAvUQZ.js";import{u as W,f as fe}from"./behandlingApi-C3eG-4Ti.js";import{B as X}from"./FagsakIndex-DsybECP5.js";import{V as I}from"./vilkarUtfallType-vN0hVpa7.js";import{v as na}from"./validerApKodeOgHentApEnum-BJOxEDqe.js";import{L as ce}from"./Link-Cu9hSGa7.js";import{F as la}from"./FatterVedtakStatusModal-BHZaeype.js";import{D as L}from"./dokumentMalType-B-Xou3xH.js";import{K as ta}from"./KlageBehandlingModal-uMBCa-6r.js";import"./preload-helper-D9Z9MdNV.js";import"./BehandlingMenuIndex-Jjdy58O2.js";import"./bind-BzTE2yGl.js";import"./index.es-CuYC5p0t.js";import"./Checkmark-D3TqMBqw.js";import"./Popover-D-5b-sy3.js";import"./ExclamationmarkTriangleFill-CfeCy4Pt.js";import"./Kjonnkode-DjBoP8-t.js";import"./Table-BtuwFi8k.js";import"./FaktaKort-D6JYUZCY.js";import"./eksterneLenker-DcE6CUbm.js";import"./Checkbox-BUNqoG7x.js";import"./CheckmarkCircleFill-CPqJlc1M.js";import"./SettPaVentModalIndex-23MDPeoG.js";import"./venteArsakType-BJdSFL9e.js";import"./useBehandlingPollingOperasjoner-Cv-0Gfvd.js";import"./apiPollingStatus-nT-xUZgL.js";import"./errorType-DL7owoCz.js";import"./useKodeverk-DO7UtKQe.js";import"./paths-CmhI2fD7.js";import"./Dropdown-CYwIZJmj.js";import"./BehandlingHenlagtPanel-CbvIX8sc.js";import"./Tag-yNk-69CQ.js";import"./TotrinnskontrollIndex-DiKnFpiI.js";import"./SupportHeader-CAJfmGsA.js";import"./ErrorBoundary-CoG30OM1.js";import"./IngenBehandlingValgtPanel-WGocXtt4.js";import"./index-DfsU1tLn.js";import"./VisittkortSakIndex-CkfaVb2m.js";import"./Spacer-C1EuiZWw.js";import"./useTrackRouteParam-C1KnquDU.js";import"./RisikoklassifiseringIndex-DeNG_eZC.js";import"./BehandlingPaVent-LML2Bcej.js";import"./BehandlingSupportIndex-D8PkPo53.js";import"./DokumentIndex-DapSHW11.js";import"./StarFill-BzKIRHZU.js";import"./HistorikkIndex-Cb2t3WlC.js";import"./MeldingIndex-CI2br9re.js";import"./UkjentAdresseMeldingIndex-Er4qAwzh.js";import"./SettPaVentReadOnlyModal-BYCSKwQj.js";import"./UtvidEllerMinskKnapp-BFMibYJ1.js";import"./FagsakProfileIndex-D3VvVo6z.js";import"./FagsakData-EcIUMWsc.js";var k=(a=>(a.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",a.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",a.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",a.AVVIS_KLAGE="AVVIS_KLAGE",a.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",a))(k||{}),R=(a=>(a.DELVIS_MEDHOLD_I_KLAGE="DELVIS_MEDHOLD_I_KLAGE",a.GUNST_MEDHOLD_I_KLAGE="GUNST_MEDHOLD_I_KLAGE",a.UGUNST_MEDHOLD_I_KLAGE="UGUNST_MEDHOLD_I_KLAGE",a.UDEFINERT="-",a))(R||{});const U="ikkePaklagdVedtak",ne=a=>a.erKlagerPart===!1||a.erFristOverholdt===!1||a.erKonkret===!1||a.erSignert===!1||a.vedtak===U,je=(a,r)=>a.find(n=>n.uuid===r),le=(a,r)=>{const n=je(a,r);return!!n&&(n.type===P.TILBAKEKREVING||n.type===P.TILBAKEKREVING_REVURDERING)},Ne=(a,r)=>{const n=le(a,r),s=je(a,r);return s&&n?{tilbakekrevingUuid:s.uuid,tilbakekrevingVedtakDato:s.avsluttet,tilbakekrevingBehandlingType:s.type}:void 0},ia=(a,r,n,s)=>({kode:s,begrunnelse:a.begrunnelse,behandlingUuid:r,erKlagerPart:!!a.erKlagerPart,erFristOverholdt:!!a.erFristOverholdt,erKonkret:!!a.erKonkret,erSignert:!!a.erSignert,erTilbakekreving:le(n,a.vedtak),klageTilbakekreving:Ne(n,a.vedtak),paKlagdBehandlingUuid:a.vedtak===U?void 0:a.vedtak,fritekstTilBrev:ne(a)?a.fritekstTilBrev:void 0,mottattDato:a.mottattDato}),Oe=({behandlingUuid:a,saveKlage:r,avsluttedeBehandlinger:n,spinner:s=!1,aksjonspunktCode:t,readOnly:i=!1,handleSubmit:u})=>i?null:e.jsx(G,{size:"small",variant:"primary",loading:s,onClick:u(d=>r(ia(d,a,n,t))),type:"button",children:e.jsx(l,{id:"TempsaveKlageButton.TempSaveButton"})});Oe.__docgenInfo={description:"",methods:[],displayName:"TempsaveKlageButton",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunktCode:{required:!0,tsType:{name:"string"},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: string;
  avsluttet?: string;
  uuid: string;
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""},saveKlage:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormkravMellomlagretDataType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: string;
  begrunnelse?: string;
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
  mottattDato?: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erFristOverholdt",value:{name:"boolean",required:!0}},{key:"erKonkret",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"erTilbakekreving",value:{name:"boolean",required:!0}},{key:"klageTilbakekreving",value:{name:"signature",type:"object",raw:`{
  tilbakekrevingUuid: string;
  tilbakekrevingVedtakDato?: string;
  tilbakekrevingBehandlingType?: string;
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},spinner:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},handleSubmit:{required:!0,tsType:{name:"UseFormHandleSubmit",elements:[{name:"signature",type:"object",raw:`{
  erKlagerPart?: boolean;
  erFristOverholdt?: boolean;
  erKonkret?: boolean;
  erSignert?: boolean;
  begrunnelse?: string;
  vedtak?: string;
  mottattDato?: string;
  fritekstTilBrev?: string;
}`,signature:{properties:[{key:"erKlagerPart",value:{name:"boolean",required:!1}},{key:"erFristOverholdt",value:{name:"boolean",required:!1}},{key:"erKonkret",value:{name:"boolean",required:!1}},{key:"erSignert",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vedtak",value:{name:"string",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}}],raw:"UseFormHandleSubmit<FormValues>"},description:""}}};const sa="_selectBredde_19ro0_1",ga={selectBredde:sa},ua=a=>a?.paKlagdBehandlingUuid?`${a.paKlagdBehandlingUuid}`:U,da=(a,r,n)=>[e.jsx("option",{value:U,children:r.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"})},"formkrav")].concat([...a].sort((t,i)=>se(t.avsluttet).diff(se(i.avsluttet))).map(({uuid:t,type:i,avsluttet:u})=>e.jsx("option",{value:`${t}`,children:`${n.BehandlingType.find(({kode:d})=>d===i)?.navn??""} ${u?ke(u):""}`},t))),oa=a=>a===E.VURDERING_AV_FORMKRAV_KLAGE_NFP?"Klage.LovhjemmelNFP":"Klage.LovhjemmelKA",ka=a=>{const r=a?a.klageFormkravResultatNFP:null,n=a?a.klageVurderingResultatNFP:null;return r?{vedtak:ua(r),begrunnelse:r.begrunnelse,erKlagerPart:r.erKlagerPart,erKonkret:r.erKlageKonkret,erFristOverholdt:r.erKlagefirstOverholdt,erSignert:r.erSignert,fritekstTilBrev:n?n.fritekstTilBrev:void 0,mottattDato:a?a.mottattDato:void 0}:{mottattDato:a?a.mottattDato:void 0}},ma=(a,r)=>({erKlagerPart:!!a.erKlagerPart,erFristOverholdt:!!a.erFristOverholdt,erKonkret:!!a.erKonkret,erSignert:!!a.erSignert,begrunnelse:a.begrunnelse,kode:E.VURDERING_AV_FORMKRAV_KLAGE_NFP,vedtakBehandlingUuid:a.vedtak===U?void 0:a.vedtak,mottattDato:a.mottattDato,erTilbakekreving:le(r,a.vedtak),tilbakekrevingInfo:Ne(r,a.vedtak),fritekstTilBrev:ne(a)?a.fritekstTilBrev:void 0}),Fe=({klageVurdering:a,readOnlySubmitButton:r,avsluttedeBehandlinger:n,lagreFormkravVurdering:s})=>{const t=c(),{behandling:i,alleKodeverk:u,submitCallback:d,isReadOnly:g}=F(),K=da(n,t,u),{mellomlagretFormData:m,setMellomlagretFormData:v}=ue(),j=ka(a),p=ye({defaultValues:m??j}),N=p.watch();return e.jsx(Ee,{formMethods:p,onSubmit:S=>d(ma(S,n)),setDataOnUnmount:v,children:e.jsxs(o,{gap:"space-16",children:[e.jsxs(o,{gap:"space-4",children:[e.jsx(B,{size:"small",level:"3",children:t.formatMessage({id:"Klage.Formkrav.Title"})}),e.jsx(ra,{children:t.formatMessage({id:oa(E.VURDERING_AV_FORMKRAV_KLAGE_NFP)})})]}),e.jsxs(o,{gap:"space-24",children:[!r&&e.jsx(pe,{children:e.jsx(l,{id:"Klage.Formkrav.HelpText"})}),e.jsx(o,{gap:"space-24",children:e.jsxs(T,{gap:"space-40",children:[e.jsxs(o,{gap:"space-16",children:[e.jsx(Z,{name:"vedtak",control:p.control,readOnly:g,validate:[f],label:t.formatMessage({id:"Klage.Formkrav.VelgVedtak"}),selectValues:K,className:ga.selectBredde}),e.jsx(ea,{control:p.control,name:"mottattDato",label:t.formatMessage({id:"Klage.Formkrav.MottattDato"}),validate:[f,ze,Ce],isReadOnly:g})]}),e.jsxs(o,{gap:"space-20",children:[e.jsxs(T,{gap:"space-16",children:[e.jsx(_,{name:"erKlagerPart",control:p.control,label:t.formatMessage({id:"Klage.Formkrav.ErKlagerPart"}),validate:[f],isReadOnly:g,children:e.jsxs(T,{gap:"space-16",children:[e.jsx(V,{value:!0,size:"small",children:e.jsx(l,{id:"Klage.Formkrav.Ja"})}),e.jsx(V,{value:!1,size:"small",children:e.jsx(l,{id:"Klage.Formkrav.Nei"})})]})}),e.jsx(_,{name:"erKonkret",control:p.control,label:t.formatMessage({id:"Klage.Formkrav.ErKonkret"}),validate:[f],isReadOnly:g,children:e.jsxs(T,{gap:"space-16",children:[e.jsx(V,{value:!0,size:"small",children:e.jsx(l,{id:"Klage.Formkrav.Ja"})}),e.jsx(V,{value:!1,size:"small",children:e.jsx(l,{id:"Klage.Formkrav.Nei"})})]})})]}),e.jsxs(T,{gap:"space-16",children:[e.jsx(_,{name:"erFristOverholdt",control:p.control,label:t.formatMessage({id:"Klage.Formkrav.ErFristOverholdt"}),validate:[f],isReadOnly:g,children:e.jsxs(T,{gap:"space-16",children:[e.jsx(V,{value:!0,size:"small",children:e.jsx(l,{id:"Klage.Formkrav.Ja"})}),e.jsx(V,{value:!1,size:"small",children:e.jsx(l,{id:"Klage.Formkrav.Nei"})})]})}),e.jsx(_,{name:"erSignert",control:p.control,label:t.formatMessage({id:"Klage.Formkrav.ErSignert"}),validate:[f],isReadOnly:g,children:e.jsxs(T,{gap:"space-16",children:[e.jsx(V,{value:!0,size:"small",children:e.jsx(l,{id:"Klage.Formkrav.Ja"})}),e.jsx(V,{value:!1,size:"small",children:e.jsx(l,{id:"Klage.Formkrav.Nei"})})]})})]})]})]})}),e.jsx(Te,{readOnly:g}),ne(N)&&e.jsx(be,{name:"fritekstTilBrev",control:p.control,label:t.formatMessage({id:"FormkravKlageFormNfp.Fritekst"}),maxLength:1e5,validate:[f,oe],readOnly:g,parse:de}),e.jsxs(T,{justify:"space-between",children:[e.jsx(re,{isReadOnly:g,isSubmittable:!r,isSubmitting:p.formState.isSubmitting,isDirty:p.formState.isDirty}),e.jsx(Oe,{behandlingUuid:i.uuid,saveKlage:s,avsluttedeBehandlinger:n,handleSubmit:p.handleSubmit,readOnly:g,aksjonspunktCode:E.VURDERING_AV_FORMKRAV_KLAGE_NFP})]})]})]})})};Fe.__docgenInfo={description:`FormkravklageformNfp

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
  mottattDato?: string;
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
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
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
  mottattDato?: string;
}>`},description:""},readOnlySubmitButton:{required:!1,tsType:{name:"boolean"},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: string;
  avsluttet?: string;
  uuid: string;
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""},lagreFormkravVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormkravMellomlagretDataType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: string;
  begrunnelse?: string;
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
  mottattDato?: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erFristOverholdt",value:{name:"boolean",required:!0}},{key:"erKonkret",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"erTilbakekreving",value:{name:"boolean",required:!0}},{key:"klageTilbakekreving",value:{name:"signature",type:"object",raw:`{
  tilbakekrevingUuid: string;
  tilbakekrevingVedtakDato?: string;
  tilbakekrevingBehandlingType?: string;
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Se=({klageVurdering:a,avsluttedeBehandlinger:r})=>{const n=c(),{alleKodeverk:s}=F(),{klageFormkravResultatKA:t,underBehandlingKabal:i,behandletAvKabal:u}=a;let d=n.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"});if(t?.paKlagdBehandlingUuid){const g=r.find(K=>K.uuid===t.paKlagdBehandlingUuid);g&&(d=`${s.BehandlingType.find(m=>m.kode===g.type)?.navn} ${g.avsluttet?ke(g.avsluttet):""}`)}return e.jsxs(o,{gap:"space-16",children:[e.jsx(B,{size:"small",level:"2",children:e.jsx(l,{id:"Klage.Formkrav.Title"})}),i&&e.jsx(B,{size:"small",level:"3",children:e.jsx(l,{id:"Klage.Formkrav.SeKabalText"})}),!i&&!u&&e.jsxs(e.Fragment,{children:[e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"Klage.Formkrav.VelgVedtak"})}),e.jsx(y,{size:"small",children:d})]}),e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"Klage.Formkrav.ErKlagerPart"})}),e.jsx(y,{size:"small",children:t?.erKlagerPart?e.jsx(l,{id:"Klage.Formkrav.Ja"}):e.jsx(l,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"Klage.Formkrav.ErKonkret"})}),e.jsx(y,{size:"small",children:t?.erKlageKonkret?e.jsx(l,{id:"Klage.Formkrav.Ja"}):e.jsx(l,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"Klage.Formkrav.ErFristOverholdt"})}),e.jsx(y,{size:"small",children:t?.erKlagefirstOverholdt?e.jsx(l,{id:"Klage.Formkrav.Ja"}):e.jsx(l,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"Klage.Formkrav.ErSignert"})}),e.jsx(y,{size:"small",children:t?.erSignert?e.jsx(l,{id:"Klage.Formkrav.Ja"}):e.jsx(l,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"Klage.Formkrav.Vurdering"})}),e.jsx(y,{size:"small",children:t?.begrunnelse})]})]})]})};Se.__docgenInfo={description:`FormkravKlageKa

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
  mottattDato?: string;
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
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
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
  mottattDato?: string;
}>`},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: string;
  avsluttet?: string;
  uuid: string;
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""}}};const va={"Klage.LovhjemmelNFP":"Fvl §§ 28, 31, 32, 33 og ftrl § 21-12","Klage.LovhjemmelKA":"Fvl §§  28, 31, 32, 34 og ftrl § 21-12","Klage.Formkrav.VelgVedtak":"Vedtaket som er påklagd","Klage.Formkrav.MottattDato":"Klage mottatt dato","Klage.Formkrav.Title":"Vurder formkrav","Klage.Formkrav.HelpText":"Vurder om klagen oppfyller formkravene","Klage.Formkrav.IkkePåklagdVedtak":"Ikke påklagd et vedtak","Klage.Formkrav.ErKlagerPart":"Er klager part i saken?","Klage.Formkrav.ErKonkret":"Klages det på konkrete elementer i vedtaket?","Klage.Formkrav.ErFristOverholdt":"Er klagefristen overholdt?","Klage.Formkrav.ErSignert":"Er klagen signert?","Klage.Formkrav.KabalText":"Fortsett klagebehandlingen i KABAL: Kryss av, velg hjemmel og trykk send","Klage.Formkrav.SeKabalText":"Klagen behandles i KABAL","Klage.Formkrav.SendTilKabal":"Send til KABAL","Klage.Formkrav.Hjemmel":"Hjemmel","Klage.Formkrav.Ja":"Ja","Klage.Formkrav.Nei":"Nei","Klage.Formkrav.Vurdering":"Vurdering","FormkravKlageFormNfp.Fritekst":"Fritekst","TempsaveKlageButton.TempSaveButton":"Lagre","Malform.Beskrivelse":"Foretrukket språk"},Ka=ae(va),te=({klageVurdering:a={},avsluttedeBehandlinger:r,readOnlySubmitButton:n,lagreFormkravVurdering:s})=>{const{aksjonspunkterForPanel:t}=F();return e.jsxs(ee,{value:Ka,children:[t.some(i=>i.definisjon===E.VURDERING_AV_FORMKRAV_KLAGE_NFP)&&e.jsx(Fe,{klageVurdering:a,readOnlySubmitButton:n,avsluttedeBehandlinger:r,lagreFormkravVurdering:s}),a.klageFormkravResultatKA&&e.jsx(Se,{klageVurdering:a,avsluttedeBehandlinger:r})]})};te.__docgenInfo={description:"",methods:[],displayName:"FormkravProsessIndex",props:{klageVurdering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  mottattDato?: string;
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
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
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
  mottattDato?: string;
}>`},description:"",defaultValue:{value:"{}",computed:!1}},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: string;
  avsluttet?: string;
  uuid: string;
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""},lagreFormkravVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormkravMellomlagretDataType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: string;
  begrunnelse?: string;
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
  mottattDato?: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erFristOverholdt",value:{name:"boolean",required:!0}},{key:"erKonkret",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"erTilbakekreving",value:{name:"boolean",required:!0}},{key:"klageTilbakekreving",value:{name:"signature",type:"object",raw:`{
  tilbakekrevingUuid: string;
  tilbakekrevingVedtakDato?: string;
  tilbakekrevingBehandlingType?: string;
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const pa=[E.VURDERING_AV_FORMKRAV_KLAGE_NFP],Re=()=>{const a=c(),r=z(pa),{behandling:n,alleBehandlinger:s,hentOgSettBehandling:t}=O.use(X),i=s.filter(m=>m.status===me.AVSLUTTET).filter(m=>(m.type!==P.KLAGE||Ve(m.behandlingsresultat?.type))&&m.type!==P.ANKE).map(m=>({uuid:m.uuid,type:m.type,avsluttet:m.avsluttet??void 0})),u=W(n),{data:d,isFetching:g}=Q(u.klage.klageVurderingOptions(n)),{mutate:K}=H({mutationFn:m=>u.klage.mellomlagreFormkravVurdering(m),onSuccess:()=>t()});return e.jsx(C,{standardPanelProps:r,prosessPanelKode:x.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:a.formatMessage({id:"Behandlingspunkt.FormkravKlageNFP"}),skalPanelVisesIMeny:!0,children:g?e.jsx($,{}):e.jsx(te,{klageVurdering:d,avsluttedeBehandlinger:i,lagreFormkravVurdering:K,readOnlySubmitButton:r.readOnlySubmitButton})})};Re.__docgenInfo={description:"",methods:[],displayName:"FormKravFamOgPensjonProsessStegInitPanel"};const ya=[E.VURDER_FORMKRAV_NK],_e=()=>{const a=c(),r=z(ya),{behandling:n,alleBehandlinger:s,hentOgSettBehandling:t}=O.use(X),u=s.filter(v=>!v.behandlingHenlagt).filter(v=>v.status===me.AVSLUTTET).filter(v=>(v.type!==P.KLAGE||Ve(v.behandlingsresultat?.type))&&v.type!==P.ANKE).map(v=>({uuid:v.uuid,type:v.type,avsluttet:v.avsluttet??void 0})),d=W(n),{data:g,isFetching:K}=Q(d.klage.klageVurderingOptions(n)),{mutate:m}=H({mutationFn:v=>d.klage.mellomlagreFormkravVurdering(v),onSuccess:()=>t()});return e.jsx(C,{standardPanelProps:r,prosessPanelKode:x.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:a.formatMessage({id:"Behandlingspunkt.FormkravKlageKA"}),skalPanelVisesIMeny:!0,children:K?e.jsx($,{}):e.jsx(te,{klageVurdering:g,avsluttedeBehandlinger:u,lagreFormkravVurdering:m,readOnlySubmitButton:r.readOnlySubmitButton})})};_e.__docgenInfo={description:"",methods:[],displayName:"FormKravKlageInstansProsessStegInitPanel"};const qe=({behandlingPåVent:a,previewVedtakCallback:r,readOnly:n,lagreVedtak:s,isSubmitting:t})=>{const i=u=>{u.preventDefault(),r({gjelderVedtak:!0})};return e.jsxs(T,{gap:"space-8",align:"center",children:[!n&&e.jsx(G,{variant:"primary",size:"small",onClick:s,disabled:a||t,loading:t,type:"button",children:e.jsx(l,{id:"VedtakKlageForm.TilGodkjenning"})}),e.jsx(ce,{href:"#",onClick:i,onKeyDown:u=>u.key==="Enter"?i(u):null,children:e.jsx(l,{id:"VedtakKlageForm.ForhandvisBrev"})})]})};qe.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageSubmitPanel",props:{previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingPåVent:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Ea={GUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortGunst",UGUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortUgunst",DELVIS_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortDelvis"},Pe=({klageVurdering:a,previewVedtakCallback:r,behandlingsresultat:n})=>{const{behandling:s,isReadOnly:t,alleKodeverk:i,aksjonspunkterForPanel:u,submitCallback:d}=F(),g=ba(a),K=Aa(a,i),m=ha(a),v=a.klageVurderingResultatNK??a.klageVurderingResultatNFP,j=aa(n.type),[p,N]=O.useState(!1),S=()=>{N(!0);const h=u.filter(he).map(D=>D.definisjon).map(D=>({kode:na(D,E.FORESLA_VEDTAK,E.FORESLA_VEDTAK_MANUELT)}));d(h).then(()=>N(!1))};return e.jsxs(o,{gap:"space-16",children:[e.jsx(B,{size:"small",level:"2",children:e.jsx(l,{id:"VedtakKlageForm.Header"})}),e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"VedtakKlageForm.Resultat"})}),m&&e.jsx(y,{size:"small",children:e.jsx(l,{id:m})})]}),n.type===q.KLAGE_AVVIST&&e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"VedtakKlageForm.ArsakTilAvvisning"})}),g.map(A=>e.jsx(y,{size:"small",children:i.KlageAvvistÅrsak.find(({kode:h})=>h===A)?.navn??""},A))]}),j&&e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"VedtakKlageForm.ArsakTilOmgjoring"})}),K]}),n.type===q.KLAGE_YTELSESVEDTAK_OPPHEVET&&e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"VedtakKlageForm.ArsakTilOppheving"})}),K]}),v?.klageVurdertAv==="NFP"&&e.jsx(qe,{previewVedtakCallback:r,readOnly:t,behandlingPåVent:s.behandlingPåVent,lagreVedtak:S,isSubmitting:p})]})},ba=a=>{if(a){if(a.klageFormkravResultatKA&&a.klageVurderingResultatNK)return a.klageFormkravResultatKA.avvistArsaker;if(a.klageFormkravResultatNFP)return a.klageFormkravResultatNFP.avvistArsaker}return[]},Aa=(a,r)=>a?.klageVurderingResultatNK?.klageMedholdArsak?r.KlageMedholdÅrsak.find(({kode:n})=>n===a.klageVurderingResultatNK?.klageMedholdArsak)?.navn??"":a?.klageVurderingResultatNFP?.klageMedholdArsak?r.KlageMedholdÅrsak.find(({kode:n})=>n===a.klageVurderingResultatNFP?.klageMedholdArsak)?.navn??"":null,ha=a=>{const r=a.klageVurderingResultatNK??a.klageVurderingResultatNFP;switch(r?.klageVurdering){case k.AVVIS_KLAGE:return"VedtakKlageForm.KlageAvvist";case k.STADFESTE_YTELSESVEDTAK:return"VedtakKlageForm.KlageStadfestet";case k.OPPHEVE_YTELSESVEDTAK:return"VedtakKlageForm.YtelsesvedtakOpphevet";case k.HJEMSENDE_UTEN_Å_OPPHEVE:return"VedtakKlageForm.HjemmsendUtenOpphev";case k.MEDHOLD_I_KLAGE:return Ea[r?.klageVurderingOmgjoer??""];default:return"VedtakKlageForm.IkkeFastsatt"}};Pe.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageForm",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  mottattDato?: string;
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
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
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
  mottattDato?: string;
}>`},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingsresultat:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  avslagsarsak: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null;
  avslagsarsakFritekst: string | null;
  rettenTil: foreldrepenger_behandlingslager_behandling_RettenTil | null;
  konsekvenserForYtelsen: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null;
  vedtaksbrev: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall: boolean | null;
  skjæringstidspunkt: tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null;
  endretDekningsgrad: boolean | null;
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| TEMP_FP_TILBAKE_BEHANDLINGRESULTATTYPE
| 'IKKE_FASTSATT'
| 'INNVILGET'
| 'AVSLÅTT'
| 'OPPHØR'
| 'HENLAGT_SØKNAD_TRUKKET'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_BRUKER_DØD'
| 'MERGET_OG_HENLAGT'
| 'HENLAGT_SØKNAD_MANGLER'
| 'FORELDREPENGER_ENDRET'
| 'FORELDREPENGER_SENERE'
| 'INGEN_ENDRING'
| 'MANGLER_BEREGNINGSREGLER'
| 'KLAGE_AVVIST'
| 'KLAGE_MEDHOLD'
| 'KLAGE_DELVIS_MEDHOLD'
| 'KLAGE_OMGJORT_UGUNST'
| 'KLAGE_YTELSESVEDTAK_OPPHEVET'
| 'KLAGE_YTELSESVEDTAK_STADFESTET'
| 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'
| 'HENLAGT_KLAGE_TRUKKET'
| 'HJEMSENDE_UTEN_OPPHEVE'
| 'ANKE_AVVIST'
| 'ANKE_MEDHOLD'
| 'ANKE_DELVIS_MEDHOLD'
| 'ANKE_OMGJORT_UGUNST'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_YTELSESVEDTAK_STADFESTET'
| 'HENLAGT_ANKE_TRUKKET'
| 'INNSYN_INNVILGET'
| 'INNSYN_DELVIS_INNVILGET'
| 'INNSYN_AVVIST'
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"union",raw:`| 'IKKE_FASTSATT'
| 'FASTSATT'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_FEILOPPRETTET_MED_BREV'
| 'HENLAGT_FEILOPPRETTET_UTEN_BREV'
| 'HENLAGT_KRAVGRUNNLAG_NULLSTILT'
| 'HENLAGT_TEKNISK_VEDLIKEHOLD'
| 'HENLAGT'
| 'INGEN_TILBAKEBETALING'
| 'DELVIS_TILBAKEBETALING'
| 'FULL_TILBAKEBETALING'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'FASTSATT'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_MED_BREV'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_UTEN_BREV'"},{name:"literal",value:"'HENLAGT_KRAVGRUNNLAG_NULLSTILT'"},{name:"literal",value:"'HENLAGT_TEKNISK_VEDLIKEHOLD'"},{name:"literal",value:"'HENLAGT'"},{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"},{name:"literal",value:"'FULL_TILBAKEBETALING'"}]},{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null",elements:[{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1013'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"rettenTil",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_RettenTil | null",elements:[{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"konsekvenserForYtelsen",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>"},{name:"null"}],required:!0}},{key:"vedtaksbrev",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null",elements:[{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"skjæringstidspunkt",value:{name:"union",raw:"tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  dato: string | null;
  utenMinsterett: boolean | null;
}`,signature:{properties:[{key:"dato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"utenMinsterett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"endretDekningsgrad",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""}}};const Va={"VedtakKlageForm.ArsakTilAvslag":"Årsak til avslag","VedtakKlageForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakKlageForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakKlageForm.Resultat":"Resultat av klage","VedtakKlageForm.ArsakTilAvvisning":"Årsak til avvisning","VedtakKlageForm.ArsakTilOmgjoring":"Årsak til omgjøring","VedtakKlageForm.ArsakTilOppheving":"Årsak til oppheving","VedtakKlageForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakKlageForm.ResultatKlageAvvist":"Klagen er avvist","VedtakKlageForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakKlageForm.TilGodkjenning":"Til godkjenning","VedtakKlageForm.ForhandvisBrev":"Forhåndsvis vedtaksbrev","VedtakKlageForm.ArsakTilMedhold":"Årsak","VedtakKlageForm.KlageOmgjortGunst":"Vedtaket er omgjort til gunst","VedtakKlageForm.KlageOmgjortUgunst":"Vedtaket er omgjort til ugunst","VedtakKlageForm.KlageOmgjortDelvis":"Vedtaket er delvis omgjort til gunst","VedtakKlageForm.HjemmsendUtenOpphev":"Vedtaket er hjemsendt","VedtakKlageForm.IkkeFastsatt":"Ikke fastsatt","VedtakKlageForm.Header":"Resultat","VedtakKlageForm.KlageAvvist":"Avvist fordi klagen ikke oppfyller formkravene","VedtakKlageForm.KlageStadfestet":"Vedtaket er stadfestet","VedtakKlageForm.YtelsesvedtakOpphevet":"Vedtak er opphevet og hjemsendt"},Ta=ae(Va),Be=({klageVurdering:a,previewVedtakCallback:r})=>{const{behandling:n}=F();if(!n.behandlingsresultat)throw new Error(`behandlingsresultat finnes ikke for behandling ${n.uuid}`);return e.jsx(ee,{value:Ta,children:e.jsx(Pe,{klageVurdering:a,previewVedtakCallback:r,behandlingsresultat:n.behandlingsresultat})})};Be.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  mottattDato?: string;
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
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
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
  mottattDato?: string;
}>`},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const fa=[E.FORESLA_VEDTAK,E.FATTER_VEDTAK,E.FORESLA_VEDTAK_MANUELT],De=()=>{const a=c(),{behandling:r,setSkalOppdatereEtterBekreftelseAvAp:n}=O.use(X),{aksjonspunkt:s}=r,[t,i]=O.useState(!1),u=ja(i,n),d=z(fa,[],u),g=ca(r.behandlingsresultat,s),K=W(r),m=ve(),{data:v}=Q(K.klage.klageVurderingOptions(r)),{mutate:j}=H({mutationFn:p=>fe({...p,behandlingUuid:r.uuid}),onSuccess:Ke});return e.jsxs(e.Fragment,{children:[e.jsx(la,{visModal:t,lukkModal:()=>{i(!1),m("/")},tekst:a.formatMessage({id:"FatterVedtakStatusModal.KlagenErFerdigbehandlet"})}),e.jsx(C,{skalPanelVisesIMeny:!0,prosessPanelKode:x.KLAGE_RESULTAT,prosessPanelMenyTekst:a.formatMessage({id:"Behandlingspunkt.ResultatKlage"}),standardPanelProps:d,overstyrtStatus:g,skalMarkeresSomAktiv:g!==I.IKKE_VURDERT,children:v?e.jsx(Be,{klageVurdering:v,previewVedtakCallback:j}):e.jsx($,{})})]})},ca=(a,r=[])=>{const n=r.some(he);if(r.length===0||n)return I.IKKE_VURDERT;const s=a?.type;return s===q.HENLAGT_KLAGE_TRUKKET||s===q.HENLAGT_FEILOPPRETTET?I.IKKE_VURDERT:s===q.KLAGE_AVVIST||s===q.KLAGE_YTELSESVEDTAK_OPPHEVET?I.IKKE_OPPFYLT:I.OPPFYLT},ja=(a,r)=>()=>(r(!1),()=>{a(!0)});De.__docgenInfo={description:"",methods:[],displayName:"KlageresultatProsessStegInitPanel"};const Me=({klageVurdering:a})=>{const r=c(),{alleKodeverk:n}=F(),{begrunnelse:s,fritekstTilBrev:t,klageVurdering:i,klageMedholdArsak:u,klageVurderingOmgjoer:d}=a.klageVurderingResultatNK??{},g=n.KlageMedholdÅrsak;return e.jsxs(o,{gap:"space-16",children:[e.jsx(B,{size:"small",level:"2",children:r.formatMessage({id:"Klage.ResolveKlage.Title"})}),e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),e.jsxs(y,{size:"small",children:[i===k.STADFESTE_YTELSESVEDTAK&&e.jsx(l,{id:"Klage.ResolveKlage.KeepVedtakNk"}),i===k.MEDHOLD_I_KLAGE&&e.jsx(l,{id:"Klage.ResolveKlage.ChangeVedtak"}),i===k.HJEMSENDE_UTEN_Å_OPPHEVE&&e.jsx(l,{id:"Klage.Behandle.Hjemsendt"}),i===k.OPPHEVE_YTELSESVEDTAK&&e.jsx(l,{id:"Klage.ResolveKlage.NullifyVedtak"})]})]}),i===k.MEDHOLD_I_KLAGE&&e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(y,{size:"small",children:g.find(K=>K.kode===u)?.navn}),e.jsxs(y,{size:"small",children:[d===R.GUNST_MEDHOLD_I_KLAGE&&e.jsx(l,{id:"Klage.Behandle.Omgjort"}),d===R.UGUNST_MEDHOLD_I_KLAGE&&e.jsx(l,{id:"Klage.Behandle.Ugunst"}),d===R.DELVIS_MEDHOLD_I_KLAGE&&e.jsx(l,{id:"Klage.Behandle.DelvisOmgjort"})]})]}),(i===k.OPPHEVE_YTELSESVEDTAK||i===k.HJEMSENDE_UTEN_Å_OPPHEVE)&&e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(y,{size:"small",children:g.find(K=>K.kode===u)?.navn})]}),e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"FritekstKlageBrevTextField.Fritekst"})}),e.jsx(y,{size:"small",children:t})]}),e.jsxs(o,{gap:"space-4",children:[e.jsx(b,{size:"small",children:e.jsx(l,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),e.jsx(y,{size:"small",children:s})]})]})};Me.__docgenInfo={description:`BehandleklageformNfp

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
  mottattDato?: string;
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
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
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
  mottattDato?: string;
}>`},description:""}}};const Le=({erModalÅpen:a,lukkModal:r,isSubmittable:n,isSubmitting:s,isDirty:t,readOnly:i,valgtHjemmel:u})=>{const d=c();return e.jsx(ge,{width:"500px",open:a,"aria-label":d.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:r,children:e.jsx(ge.Body,{children:e.jsxs(o,{gap:"space-12",children:[e.jsxs(o,{gap:"space-16",children:[e.jsx(b,{size:"medium",children:e.jsx(l,{id:"Klage.Modal.Overskrift"})}),e.jsx(y,{children:e.jsx(l,{id:"Klage.Modal.SendTilKlageinstans"})}),e.jsx(y,{children:e.jsx(l,{id:"Klage.Modal.Valg"})}),e.jsx(y,{children:e.jsx(l,{id:"Klage.Modal.Oppretthold"})}),u&&e.jsx(y,{children:e.jsx(l,{id:"Klage.Modal.Hjemmel",values:{hjemmel:u}})})]}),e.jsx("div",{children:e.jsxs(T,{gap:"space-8",children:[e.jsx(re,{isReadOnly:i,isSubmittable:n,isSubmitting:s,isDirty:t}),e.jsx(G,{size:"small",variant:"primary",onClick:r,autoFocus:!0,type:"button",children:e.jsx(l,{id:"Klage.Modal.Avbryt"})})]})})]})})})};Le.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const Na="_fritekstTilBrevTextArea_n72am_1",Oa={fritekstTilBrevTextArea:Na},Ie=({språkkode:a,readOnly:r=!0})=>{const{control:n}=Ae();return e.jsx("div",{className:Oa.fritekstTilBrevTextArea,children:e.jsx(be,{name:"fritekstTilBrev",control:n,label:c().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[f,oe],readOnly:r,maxLength:1e5,badges:[{type:"info",titleText:$e(a)}],parse:de})})};Ie.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{språkkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Fa="_select_1owoa_7",Sa="_selectReadOnly_1owoa_10",w={select:Fa,selectReadOnly:Sa},He=({readOnly:a,medholdReasons:r,alleHjemmlerMedNavn:n,klageVurdering:s})=>{const t=c(),{control:i}=Ae(),u=r.map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode)),d=n.map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode));return e.jsxs(o,{gap:"space-12",children:[e.jsx(_,{name:"klageVurdering",control:i,validate:[f],isReadOnly:a,children:e.jsxs(T,{gap:"space-16",children:[e.jsx(V,{value:k.MEDHOLD_I_KLAGE,size:"small",children:e.jsx(l,{id:"Klage.ResolveKlage.ChangeVedtak"})}),e.jsx(V,{value:k.STADFESTE_YTELSESVEDTAK,size:"small",children:e.jsx(l,{id:"Klage.ResolveKlage.KeepVedtakNfp"})})]})}),s===k.MEDHOLD_I_KLAGE&&e.jsx(Ze,{children:e.jsxs(o,{gap:"space-16",children:[e.jsx(Z,{readOnly:a,control:i,name:"klageMedholdArsak",selectValues:u,className:a?w.selectReadOnly:w.select,label:t.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[f]}),e.jsxs(_,{name:"klageVurderingOmgjoer",control:i,validate:[f],isReadOnly:a,children:[e.jsx(V,{value:R.GUNST_MEDHOLD_I_KLAGE,size:"small",children:e.jsx(l,{id:"Klage.Behandle.Omgjort"})}),e.jsx(V,{value:R.UGUNST_MEDHOLD_I_KLAGE,size:"small",children:e.jsx(l,{id:"Klage.Behandle.Ugunst"})}),e.jsx(V,{value:R.DELVIS_MEDHOLD_I_KLAGE,size:"small",children:e.jsx(l,{id:"Klage.Behandle.DelvisOmgjort"})})]})]})}),e.jsx(Z,{readOnly:a,control:i,name:"klageHjemmel",selectValues:d,className:a?w.selectReadOnly:w.select,label:t.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[f]})]})};He.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<'KlageHjemmel'>[]"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Ra=(a,r)=>{switch(r){case k.STADFESTE_YTELSESVEDTAK:return a?L.KLAGE_STADFESTET:L.KLAGE_OVERSENDT;case k.OPPHEVE_YTELSESVEDTAK:return L.KLAGE_HJEMSENDT;case k.HJEMSENDE_UTEN_Å_OPPHEVE:return L.KLAGE_HJEMSENDT;case k.MEDHOLD_I_KLAGE:return L.KLAGE_OMGJORING;default:return}},_a=(a,r)=>({fritekst:r??"",dokumentMal:Ra(!1,a),erOpphevetKlage:a===k.OPPHEVE_YTELSESVEDTAK}),Ge=({previewCallback:a,fritekstTilBrev:r,klageVurdering:n})=>{const s=t=>{a(_a(n,r)),t.preventDefault()};return e.jsx(ce,{href:"#",onClick:s,onKeyDown:t=>t.key==="Enter"?s(t):null,children:e.jsx(l,{id:"PreviewKlageLink.ForhandvisBrev"})})};Ge.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: foreldrepenger_dokumentbestiller_DokumentMalType;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"union",raw:`| 'FRITEK'
| 'FRIHTM'
| 'INNVES'
| 'AVSLES'
| 'INVFOR'
| 'AVSFOR'
| 'OPPFOR'
| 'ANUFOR'
| 'INVSVP'
| 'OPPSVP'
| 'AVSSVP'
| 'INFOAF'
| 'INNOPP'
| 'VARREV'
| 'IOHENL'
| 'INNSYN'
| 'IKKESO'
| 'INGEND'
| 'FORSAK'
| 'FORMED'
| 'FORMEF'
| 'FORTID'
| 'KGEAVV'
| 'KGEOMG'
| 'KGEOVE'
| 'ELYSIM'
| 'ENDUTB'
| 'INFOPU'
| 'FORPUS'
| 'KLAGAV'
| 'KAVVIS'
| 'KLAGNY'
| 'KHJEMS'
| 'VEDMED'
| 'KOMGJO'
| 'KLAGOV'
| 'KOVKLA'
| 'KLAGVE'
| 'KSTADF'
| 'VEDOGA'
| 'ANKEBO'
| 'ANKOMG'
| 'ANKOPP'
| 'KGESTA'
| 'KGEHJE'`,elements:[{name:"literal",value:"'FRITEK'"},{name:"literal",value:"'FRIHTM'"},{name:"literal",value:"'INNVES'"},{name:"literal",value:"'AVSLES'"},{name:"literal",value:"'INVFOR'"},{name:"literal",value:"'AVSFOR'"},{name:"literal",value:"'OPPFOR'"},{name:"literal",value:"'ANUFOR'"},{name:"literal",value:"'INVSVP'"},{name:"literal",value:"'OPPSVP'"},{name:"literal",value:"'AVSSVP'"},{name:"literal",value:"'INFOAF'"},{name:"literal",value:"'INNOPP'"},{name:"literal",value:"'VARREV'"},{name:"literal",value:"'IOHENL'"},{name:"literal",value:"'INNSYN'"},{name:"literal",value:"'IKKESO'"},{name:"literal",value:"'INGEND'"},{name:"literal",value:"'FORSAK'"},{name:"literal",value:"'FORMED'"},{name:"literal",value:"'FORMEF'"},{name:"literal",value:"'FORTID'"},{name:"literal",value:"'KGEAVV'"},{name:"literal",value:"'KGEOMG'"},{name:"literal",value:"'KGEOVE'"},{name:"literal",value:"'ELYSIM'"},{name:"literal",value:"'ENDUTB'"},{name:"literal",value:"'INFOPU'"},{name:"literal",value:"'FORPUS'"},{name:"literal",value:"'KLAGAV'"},{name:"literal",value:"'KAVVIS'"},{name:"literal",value:"'KLAGNY'"},{name:"literal",value:"'KHJEMS'"},{name:"literal",value:"'VEDMED'"},{name:"literal",value:"'KOMGJO'"},{name:"literal",value:"'KLAGOV'"},{name:"literal",value:"'KOVKLA'"},{name:"literal",value:"'KLAGVE'"},{name:"literal",value:"'KSTADF'"},{name:"literal",value:"'VEDOGA'"},{name:"literal",value:"'ANKEBO'"},{name:"literal",value:"'ANKOMG'"},{name:"literal",value:"'ANKOPP'"},{name:"literal",value:"'KGESTA'"},{name:"literal",value:"'KGEHJE'"}],required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},fritekstTilBrev:{required:!1,tsType:{name:"string"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const qa=a=>({klageMedholdArsak:a.klageVurdering===k.MEDHOLD_I_KLAGE?a.klageMedholdArsak:void 0,klageVurderingOmgjoer:a.klageVurdering===k.MEDHOLD_I_KLAGE?a.klageVurderingOmgjoer:void 0,klageHjemmel:a.klageHjemmel,klageVurdering:J(a.klageVurdering),fritekstTilBrev:a.fritekstTilBrev,begrunnelse:a.begrunnelse,kode:E.BEHANDLE_KLAGE_NFP}),Y=a=>{if(a&&a!=="-")return a},Pa=(a,r)=>a.filter(({kode:n})=>r.includes(n)).sort((n,s)=>n.kode.localeCompare(s.kode)),Ba=a=>a.map(r=>r),Da=a=>({klageMedholdArsak:Y(a?.klageMedholdArsak),klageVurderingOmgjoer:Y(a?.klageVurderingOmgjoer),klageHjemmel:Y(a?.klageHjemmel),klageVurdering:Y(a?.klageVurdering),begrunnelse:a?a.begrunnelse:void 0,fritekstTilBrev:a?a.fritekstTilBrev:void 0}),xe=({klageVurdering:a,previewCallback:r,saveKlage:n,readOnlySubmitButton:s,alleAktuelleHjemler:t})=>{const{behandling:i,alleKodeverk:u,submitCallback:d,isReadOnly:g}=F(),K=Pa(u.KlageHjemmel,Ba(t)),m=c(),[v,j]=O.useState(!1),p=Da(a.klageVurderingResultatNFP),{mellomlagretFormData:N,setMellomlagretFormData:S}=ue(),A=ye({defaultValues:N??p}),h=A.watch(),D=()=>{j(!1)},Je=()=>{j(!0)};return e.jsx(Ee,{formMethods:A,onSubmit:M=>d(qa(M)),setDataOnUnmount:S,children:e.jsxs(o,{gap:"space-16",children:[e.jsx(B,{size:"small",level:"2",children:m.formatMessage({id:"Klage.ResolveKlage.Title"})}),!s&&e.jsx(pe,{children:e.jsx(l,{id:"Klage.ResolveKlage.HelpText"})}),e.jsx(He,{readOnly:g,klageVurdering:h.klageVurdering,medholdReasons:u.KlageMedholdÅrsak,alleHjemmlerMedNavn:K}),e.jsx(Te,{readOnly:g,text:m.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),e.jsx(Ie,{språkkode:i.språkkode,readOnly:g}),e.jsxs(T,{justify:"space-between",children:[e.jsxs(T,{gap:"space-16",children:[h.klageVurdering===k.STADFESTE_YTELSESVEDTAK&&e.jsxs(e.Fragment,{children:[e.jsx(G,{variant:"primary",type:"button",size:"small",onClick:()=>Je(),disabled:g,children:e.jsx(l,{id:"Klage.Behandle.Bekreft"})}),e.jsx(Le,{erModalÅpen:v,lukkModal:D,valgtHjemmel:K.find(M=>M.kode===h.klageHjemmel)?.navn,readOnly:g,isSubmittable:!s,isSubmitting:A.formState.isSubmitting,isDirty:A.formState.isValid})]}),h.klageVurdering!==k.STADFESTE_YTELSESVEDTAK&&e.jsx(re,{isReadOnly:g,isSubmittable:!s,isSubmitting:A.formState.isSubmitting,isDirty:A.formState.isDirty}),!g&&h.klageVurdering&&h.fritekstTilBrev&&h.fritekstTilBrev.length>2&&e.jsx(Ge,{previewCallback:r,fritekstTilBrev:h.fritekstTilBrev,klageVurdering:h.klageVurdering})]}),!g&&e.jsx(G,{size:"small",variant:"primary",onClick:A.handleSubmit(M=>n(Ma(M,E.BEHANDLE_KLAGE_NFP))),type:"button",children:e.jsx(l,{id:"Klage.ResolveKlage.TempSaveButton"})})]})]})})},Ma=(a,r)=>({kode:r,klageMedholdArsak:a.klageVurdering===k.MEDHOLD_I_KLAGE||a.klageVurdering===k.OPPHEVE_YTELSESVEDTAK?a.klageMedholdArsak:void 0,klageVurderingOmgjoer:a.klageVurdering===k.MEDHOLD_I_KLAGE?a.klageVurderingOmgjoer:void 0,klageHjemmel:a.klageHjemmel,fritekstTilBrev:J(a.fritekstTilBrev),begrunnelse:J(a.begrunnelse),klageVurdering:J(a.klageVurdering)});xe.__docgenInfo={description:`BehandleklageformNfp

Presentasjonskomponent. Setter opp aksjonspunktet for behandling av klage (NFP).`,methods:[],displayName:"BehandleKlageFormNfp",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: foreldrepenger_dokumentbestiller_DokumentMalType;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"union",raw:`| 'FRITEK'
| 'FRIHTM'
| 'INNVES'
| 'AVSLES'
| 'INVFOR'
| 'AVSFOR'
| 'OPPFOR'
| 'ANUFOR'
| 'INVSVP'
| 'OPPSVP'
| 'AVSSVP'
| 'INFOAF'
| 'INNOPP'
| 'VARREV'
| 'IOHENL'
| 'INNSYN'
| 'IKKESO'
| 'INGEND'
| 'FORSAK'
| 'FORMED'
| 'FORMEF'
| 'FORTID'
| 'KGEAVV'
| 'KGEOMG'
| 'KGEOVE'
| 'ELYSIM'
| 'ENDUTB'
| 'INFOPU'
| 'FORPUS'
| 'KLAGAV'
| 'KAVVIS'
| 'KLAGNY'
| 'KHJEMS'
| 'VEDMED'
| 'KOMGJO'
| 'KLAGOV'
| 'KOVKLA'
| 'KLAGVE'
| 'KSTADF'
| 'VEDOGA'
| 'ANKEBO'
| 'ANKOMG'
| 'ANKOPP'
| 'KGESTA'
| 'KGEHJE'`,elements:[{name:"literal",value:"'FRITEK'"},{name:"literal",value:"'FRIHTM'"},{name:"literal",value:"'INNVES'"},{name:"literal",value:"'AVSLES'"},{name:"literal",value:"'INVFOR'"},{name:"literal",value:"'AVSFOR'"},{name:"literal",value:"'OPPFOR'"},{name:"literal",value:"'ANUFOR'"},{name:"literal",value:"'INVSVP'"},{name:"literal",value:"'OPPSVP'"},{name:"literal",value:"'AVSSVP'"},{name:"literal",value:"'INFOAF'"},{name:"literal",value:"'INNOPP'"},{name:"literal",value:"'VARREV'"},{name:"literal",value:"'IOHENL'"},{name:"literal",value:"'INNSYN'"},{name:"literal",value:"'IKKESO'"},{name:"literal",value:"'INGEND'"},{name:"literal",value:"'FORSAK'"},{name:"literal",value:"'FORMED'"},{name:"literal",value:"'FORMEF'"},{name:"literal",value:"'FORTID'"},{name:"literal",value:"'KGEAVV'"},{name:"literal",value:"'KGEOMG'"},{name:"literal",value:"'KGEOVE'"},{name:"literal",value:"'ELYSIM'"},{name:"literal",value:"'ENDUTB'"},{name:"literal",value:"'INFOPU'"},{name:"literal",value:"'FORPUS'"},{name:"literal",value:"'KLAGAV'"},{name:"literal",value:"'KAVVIS'"},{name:"literal",value:"'KLAGNY'"},{name:"literal",value:"'KHJEMS'"},{name:"literal",value:"'VEDMED'"},{name:"literal",value:"'KOMGJO'"},{name:"literal",value:"'KLAGOV'"},{name:"literal",value:"'KOVKLA'"},{name:"literal",value:"'KLAGVE'"},{name:"literal",value:"'KSTADF'"},{name:"literal",value:"'VEDOGA'"},{name:"literal",value:"'ANKEBO'"},{name:"literal",value:"'ANKOMG'"},{name:"literal",value:"'ANKOPP'"},{name:"literal",value:"'KGESTA'"},{name:"literal",value:"'KGEHJE'"}],required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},saveKlage:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: TransformedValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
  mottattDato?: string;
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
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
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
  mottattDato?: string;
}>`},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const La={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},Ia=ae(La),Ue=({klageVurdering:a,saveKlage:r,previewCallback:n,readOnlySubmitButton:s})=>{const{aksjonspunkterForPanel:t}=F();return e.jsxs(ee,{value:Ia,children:[a.klageVurderingResultatNK&&e.jsx(Me,{klageVurdering:a}),t.some(i=>i.definisjon===E.BEHANDLE_KLAGE_NFP)&&e.jsx(xe,{klageVurdering:a,saveKlage:r,previewCallback:n,readOnlySubmitButton:s,alleAktuelleHjemler:a.aktuelleHjemler?a.aktuelleHjemler:[]})]})};Ue.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  mottattDato?: string;
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
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"KlageAvvistÅrsak"}],raw:"KlageAvvistÅrsak[]",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}}]},required:!1}},{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
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
  mottattDato?: string;
}>`},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fritekst: string;
  dokumentMal?: foreldrepenger_dokumentbestiller_DokumentMalType;
  erOpphevetKlage: boolean;
}`,signature:{properties:[{key:"fritekst",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"union",raw:`| 'FRITEK'
| 'FRIHTM'
| 'INNVES'
| 'AVSLES'
| 'INVFOR'
| 'AVSFOR'
| 'OPPFOR'
| 'ANUFOR'
| 'INVSVP'
| 'OPPSVP'
| 'AVSSVP'
| 'INFOAF'
| 'INNOPP'
| 'VARREV'
| 'IOHENL'
| 'INNSYN'
| 'IKKESO'
| 'INGEND'
| 'FORSAK'
| 'FORMED'
| 'FORMEF'
| 'FORTID'
| 'KGEAVV'
| 'KGEOMG'
| 'KGEOVE'
| 'ELYSIM'
| 'ENDUTB'
| 'INFOPU'
| 'FORPUS'
| 'KLAGAV'
| 'KAVVIS'
| 'KLAGNY'
| 'KHJEMS'
| 'VEDMED'
| 'KOMGJO'
| 'KLAGOV'
| 'KOVKLA'
| 'KLAGVE'
| 'KSTADF'
| 'VEDOGA'
| 'ANKEBO'
| 'ANKOMG'
| 'ANKOPP'
| 'KGESTA'
| 'KGEHJE'`,elements:[{name:"literal",value:"'FRITEK'"},{name:"literal",value:"'FRIHTM'"},{name:"literal",value:"'INNVES'"},{name:"literal",value:"'AVSLES'"},{name:"literal",value:"'INVFOR'"},{name:"literal",value:"'AVSFOR'"},{name:"literal",value:"'OPPFOR'"},{name:"literal",value:"'ANUFOR'"},{name:"literal",value:"'INVSVP'"},{name:"literal",value:"'OPPSVP'"},{name:"literal",value:"'AVSSVP'"},{name:"literal",value:"'INFOAF'"},{name:"literal",value:"'INNOPP'"},{name:"literal",value:"'VARREV'"},{name:"literal",value:"'IOHENL'"},{name:"literal",value:"'INNSYN'"},{name:"literal",value:"'IKKESO'"},{name:"literal",value:"'INGEND'"},{name:"literal",value:"'FORSAK'"},{name:"literal",value:"'FORMED'"},{name:"literal",value:"'FORMEF'"},{name:"literal",value:"'FORTID'"},{name:"literal",value:"'KGEAVV'"},{name:"literal",value:"'KGEOMG'"},{name:"literal",value:"'KGEOVE'"},{name:"literal",value:"'ELYSIM'"},{name:"literal",value:"'ENDUTB'"},{name:"literal",value:"'INFOPU'"},{name:"literal",value:"'FORPUS'"},{name:"literal",value:"'KLAGAV'"},{name:"literal",value:"'KAVVIS'"},{name:"literal",value:"'KLAGNY'"},{name:"literal",value:"'KHJEMS'"},{name:"literal",value:"'VEDMED'"},{name:"literal",value:"'KOMGJO'"},{name:"literal",value:"'KLAGOV'"},{name:"literal",value:"'KOVKLA'"},{name:"literal",value:"'KLAGVE'"},{name:"literal",value:"'KSTADF'"},{name:"literal",value:"'VEDOGA'"},{name:"literal",value:"'ANKEBO'"},{name:"literal",value:"'ANKOMG'"},{name:"literal",value:"'ANKOPP'"},{name:"literal",value:"'KGESTA'"},{name:"literal",value:"'KGEHJE'"}],required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},saveKlage:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: TransformedValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kode: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const ie=({aksjonspunktKoder:a,prosessPanelKode:r,prosessPanelMenyTekst:n})=>{const[s,t]=O.useState(!1),{behandling:i,hentOgSettBehandling:u,setSkalOppdatereEtterBekreftelseAvAp:d,oppdaterProsessStegOgFaktaPanelIUrl:g}=O.use(X),K=d?Ha(t,d,g):void 0,m=z(a,[],K),v=W(i),j=ve(),{data:p}=Q(v.klage.klageVurderingOptions(i)),{mutate:N}=H({mutationFn:A=>fe({...A,behandlingUuid:i.uuid}),onSuccess:Ke}),{mutate:S}=H({mutationFn:A=>v.klage.mellomlagreKlageVurdering({behandlingUuid:i.uuid,...A}),onSuccess:()=>u()});return e.jsx(C,{standardPanelProps:m,prosessPanelKode:r,prosessPanelMenyTekst:n,skalPanelVisesIMeny:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(ta,{visModal:s,lukkModal:()=>{t(!1),j("/")}}),p?e.jsx(Ue,{klageVurdering:p,previewCallback:N,saveKlage:S,readOnlySubmitButton:m.readOnlySubmitButton}):e.jsx($,{})]})})},Ha=(a,r,n)=>s=>{const t=s.some(i=>i.kode===E.BEHANDLE_KLAGE_NFP&&"klageVurdering"in i&&i.klageVurdering===k.STADFESTE_YTELSESVEDTAK);return t&&r(!1),()=>{t?a(!0):n&&n("default","default")}};ie.__docgenInfo={description:"",methods:[],displayName:"VurderingFellesProsessStegInitPanel",props:{aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"Aksjonspunkt['definisjon']"}],raw:"Aksjonspunkt['definisjon'][]"},description:""},prosessPanelKode:{required:!0,tsType:{name:"ProsessStegCode"},description:""},prosessPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""}}};const Ga=[E.BEHANDLE_KLAGE_NFP],we=()=>e.jsx(ie,{aksjonspunktKoder:Ga,prosessPanelKode:x.KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:c().formatMessage({id:"Behandlingspunkt.CheckKlageNFP"})});we.__docgenInfo={description:"",methods:[],displayName:"VurderingFamOgPensjonProsessStegInitPanel"};const xa=[E.BEHANDLE_KLAGE_NK],Ye=()=>e.jsx(ie,{aksjonspunktKoder:xa,prosessPanelKode:x.KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:c().formatMessage({id:"Behandlingspunkt.CheckKlageNK"})});Ye.__docgenInfo={description:"",methods:[],displayName:"VurderingKlageInstansProsessStegInitPanel"};const Ua=({valgtProsessSteg:a,valgtFaktaSteg:r})=>e.jsxs(e.Fragment,{children:[e.jsxs(Xe,{valgtProsessSteg:a,valgtFaktaSteg:r,children:[e.jsx(Re,{}),e.jsx(we,{}),e.jsx(_e,{}),e.jsx(Ye,{}),e.jsx(De,{})]}),e.jsx(Qe,{valgtFaktaSteg:r,valgtProsessSteg:a,children:e.jsx(We,{})})]});Ua.__docgenInfo={description:"",methods:[],displayName:"KlagePaneler",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""}}};export{Ua as default};
