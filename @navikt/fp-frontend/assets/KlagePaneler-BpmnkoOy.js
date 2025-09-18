import{j as e,B as P,l as S,ah as G,ai as me,v as V,O as ze,aY as Ce,a2 as se,z as de,E as ue,a0 as oe,P as ee,b as ae,r as I,X as ve,bm as U,n as _e,a3 as Ee,a1 as $e}from"./iframe-DiXKBbgR.js";import{a as Qe,V as We}from"./VergeFaktaInitPanel-CZ08RPHQ.js";import{u as z,P as C,a as Xe}from"./useStandardProsessPanelProps-CnEa-dHV.js";import{W as ke,Q as $,H as Ze}from"./index.es-BzP_Lhlo.js";import{u as Q,n as J}from"./fagsakApi-D5axd_lj.js";import{u as Ke,N as Te,Y as Z,O as ea,M as R,R as L,D as Ae,c as M,a as be}from"./index.es-DOFjUKTE.js";import{A as T,e as pe}from"./index-DZrXCkKm.js";import{d as Le,c as aa,B as j}from"./behandlingResultatType-CVAxOrek.js";import{P as he,a as le}from"./OverstyringPanel-o-gLR0EU.js";import{b as q,V as d,a as f,D as la,H as h,L as A,B as K,M as ge}from"./VStack-C7JvNPOk.js";import{M as r}from"./message-Cd7NpIaj.js";import{u as W,f as Ve}from"./behandlingApi-BHueB5yG.js";import{B as X}from"./FagsakIndex-jjX_48TJ.js";import{V as H}from"./vilkarUtfallType-vN0hVpa7.js";import{v as na}from"./validerApKodeOgHentApEnum-BJOxEDqe.js";import{L as Se}from"./Link-BUhNzaOB.js";import{F as ra}from"./FatterVedtakStatusModal-DRsVk3AJ.js";import{D as c}from"./dokumentMalType-B-Xou3xH.js";import{K as ta}from"./KlageBehandlingModal-WC45tnz5.js";import"./preload-helper-PPVm8Dsz.js";import"./BehandlingMenuIndex-OlgRrLaG.js";import"./bind-aTD010B5.js";import"./index.es-CvXwvmhy.js";import"./index-Dj9FmmxJ.js";import"./Checkmark-Dg3jP_Jz.js";import"./Popover-nUANRpHZ.js";import"./ExclamationmarkTriangleFill-CEeZOHVH.js";import"./Kjonnkode-DjBoP8-t.js";import"./Table-JqulxqyT.js";import"./FaktaKort-7e9CJlkE.js";import"./eksterneLenker-DcE6CUbm.js";import"./Checkbox-BAlo7UBm.js";import"./CheckmarkCircleFill-BOHc0Xj-.js";import"./SettPaVentModalIndex-DkS6607f.js";import"./venteArsakType-BJdSFL9e.js";import"./useBehandlingPollingOperasjoner-C6WPjZbb.js";import"./apiPollingStatus-nT-xUZgL.js";import"./errorType-B_fxOFvj.js";import"./useKodeverk-DVwO5mzp.js";import"./paths-C9sYxlSw.js";import"./Dropdown-BNOe-x4f.js";import"./BehandlingHenlagtPanel-DQ7k5TMC.js";import"./TotrinnskontrollIndex-DrAodOPh.js";import"./SupportHeader-BRwGcs2f.js";import"./ErrorBoundary-CdaESnwQ.js";import"./IngenBehandlingValgtPanel-BhMcvDP1.js";import"./index-CaQ7-otG.js";import"./VisittkortSakIndex-PzG0HhgQ.js";import"./Spacer-C9VD_7_U.js";import"./useTrackRouteParam-BuAlntc_.js";import"./RisikoklassifiseringIndex-Bc62JnQl.js";import"./BehandlingPaVent-D0-mqXEo.js";import"./BehandlingSupportIndex-Bj1l7Wj3.js";import"./DokumentIndex-CYnI_pnP.js";import"./StarFill-jaDgc4wb.js";import"./HistorikkIndex-6bnetTiN.js";import"./PersonHeadset-9JqwfIbH.js";import"./MeldingIndex-CT5eEsFw.js";import"./UkjentAdresseMeldingIndex-suhcMxDk.js";import"./SettPaVentReadOnlyModal-DkrkH6Hy.js";import"./UtvidEllerMinskKnapp-ePxX-Y70.js";import"./DocPencil-DhGcjqqj.js";import"./FagsakProfileIndex-zNHTrhPn.js";import"./FagsakData-EcIUMWsc.js";var o=(a=>(a.STADFESTE_YTELSESVEDTAK="STADFESTE_YTELSESVEDTAK",a.MEDHOLD_I_KLAGE="MEDHOLD_I_KLAGE",a.OPPHEVE_YTELSESVEDTAK="OPPHEVE_YTELSESVEDTAK",a.AVVIS_KLAGE="AVVIS_KLAGE",a.HJEMSENDE_UTEN_Å_OPPHEVE="HJEMSENDE_UTEN_Å_OPPHEVE",a))(o||{}),O=(a=>(a.DELVIS_MEDHOLD_I_KLAGE="DELVIS_MEDHOLD_I_KLAGE",a.GUNST_MEDHOLD_I_KLAGE="GUNST_MEDHOLD_I_KLAGE",a.UGUNST_MEDHOLD_I_KLAGE="UGUNST_MEDHOLD_I_KLAGE",a.UDEFINERT="-",a))(O||{});const w="ikkePaklagdVedtak",ne=a=>a.erKlagerPart===!1||a.erFristOverholdt===!1||a.erKonkret===!1||a.erSignert===!1||a.vedtak===w,Ne=(a,l)=>a.find(n=>n.uuid===l),re=(a,l)=>{const n=Ne(a,l);return!!n&&(n.type===P.TILBAKEKREVING||n.type===P.TILBAKEKREVING_REVURDERING)},De=(a,l)=>{const n=re(a,l),t=Ne(a,l);return t&&n?{tilbakekrevingUuid:t.uuid,tilbakekrevingVedtakDato:t.avsluttet,tilbakekrevingBehandlingType:t.type}:void 0},ia=(a,l,n,t)=>({kode:t,begrunnelse:a.begrunnelse,behandlingUuid:l,erKlagerPart:!!a.erKlagerPart,erFristOverholdt:!!a.erFristOverholdt,erKonkret:!!a.erKonkret,erSignert:!!a.erSignert,erTilbakekreving:re(n,a.vedtak),klageTilbakekreving:De(n,a.vedtak),paKlagdBehandlingUuid:a.vedtak===w?void 0:a.vedtak,fritekstTilBrev:ne(a)?a.fritekstTilBrev:void 0,mottattDato:a.mottattDato}),Ie=({behandlingUuid:a,saveKlage:l,avsluttedeBehandlinger:n,spinner:t=!1,aksjonspunktCode:i,readOnly:u=!1,handleSubmit:s})=>u?null:e.jsx(q,{size:"small",variant:"primary",loading:t,onClick:s(m=>l(ia(m,a,n,i))),type:"button",children:e.jsx(r,{id:"TempsaveKlageButton.TempSaveButton"})});Ie.__docgenInfo={description:"",methods:[],displayName:"TempsaveKlageButton",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunktCode:{required:!0,tsType:{name:"string"},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erKlagerPart",value:{name:"boolean",required:!1}},{key:"erFristOverholdt",value:{name:"boolean",required:!1}},{key:"erKonkret",value:{name:"boolean",required:!1}},{key:"erSignert",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vedtak",value:{name:"string",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}}]}}],raw:"UseFormHandleSubmit<FormValues>"},description:""}}};const ua="_selectBredde_19ro0_1",ga={selectBredde:ua},ma=a=>a?.paKlagdBehandlingUuid?`${a.paKlagdBehandlingUuid}`:w,sa=(a,l,n)=>[e.jsx("option",{value:w,children:l.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"})},"formkrav")].concat([...a].sort((i,u)=>ue(i.avsluttet).diff(ue(u.avsluttet))).map(({uuid:i,type:u,avsluttet:s})=>e.jsx("option",{value:`${i}`,children:`${n.BehandlingType.find(({kode:m})=>m===u)?.navn??""} ${s?oe(s):""}`},i))),da=a=>a===T.VURDERING_AV_FORMKRAV_KLAGE_NFP?"Klage.LovhjemmelNFP":"Klage.LovhjemmelKA",oa=a=>{const l=a?a.klageFormkravResultatNFP:null,n=a?a.klageVurderingResultatNFP:null;return l?{vedtak:ma(l),begrunnelse:l.begrunnelse,erKlagerPart:l.erKlagerPart,erKonkret:l.erKlageKonkret,erFristOverholdt:l.erKlagefirstOverholdt,erSignert:l.erSignert,fritekstTilBrev:n?.fritekstTilBrev??void 0,mottattDato:a?.mottattDato??void 0}:{mottattDato:a?.mottattDato??void 0}},va=(a,l)=>({erKlagerPart:!!a.erKlagerPart,erFristOverholdt:!!a.erFristOverholdt,erKonkret:!!a.erKonkret,erSignert:!!a.erSignert,begrunnelse:a.begrunnelse,kode:T.VURDERING_AV_FORMKRAV_KLAGE_NFP,vedtakBehandlingUuid:a.vedtak===w?void 0:a.vedtak,mottattDato:a.mottattDato,erTilbakekreving:re(l,a.vedtak),tilbakekrevingInfo:De(l,a.vedtak),fritekstTilBrev:ne(a)?a.fritekstTilBrev:void 0}),Ge=({klageVurdering:a,avsluttedeBehandlinger:l,lagreFormkravVurdering:n})=>{const t=S(),{behandling:i,isSubmittable:u,alleKodeverk:s,submitCallback:m,isReadOnly:g}=G(),E=sa(l,t,s),{mellomlagretFormData:v,setMellomlagretFormData:_}=me(),N=oa(a),k=Ke({defaultValues:v??N}),D=k.watch();return e.jsx(Te,{formMethods:k,onSubmit:y=>m(va(y,l)),setDataOnUnmount:_,children:e.jsxs(d,{gap:"space-16",children:[e.jsxs(d,{gap:"space-4",children:[e.jsx(f,{size:"small",level:"3",children:t.formatMessage({id:"Klage.Formkrav.Title"})}),e.jsx(la,{children:t.formatMessage({id:da(T.VURDERING_AV_FORMKRAV_KLAGE_NFP)})})]}),e.jsxs(d,{gap:"space-24",children:[u&&e.jsx(ke,{children:e.jsx(r,{id:"Klage.Formkrav.HelpText"})}),e.jsx(d,{gap:"space-24",children:e.jsxs(h,{gap:"space-40",children:[e.jsxs(d,{gap:"space-16",children:[e.jsx(Z,{name:"vedtak",control:k.control,readOnly:g,validate:[V],label:t.formatMessage({id:"Klage.Formkrav.VelgVedtak"}),selectValues:E,className:ga.selectBredde}),e.jsx(ea,{control:k.control,name:"mottattDato",label:t.formatMessage({id:"Klage.Formkrav.MottattDato"}),validate:[V,ze,Ce],isReadOnly:g})]}),e.jsxs(d,{gap:"space-20",children:[e.jsxs(h,{gap:"space-16",children:[e.jsx(R,{name:"erKlagerPart",control:k.control,label:t.formatMessage({id:"Klage.Formkrav.ErKlagerPart"}),validate:[V],isReadOnly:g,children:e.jsxs(h,{gap:"space-16",children:[e.jsx(L,{value:!0,size:"small",children:e.jsx(r,{id:"Klage.Formkrav.Ja"})}),e.jsx(L,{value:!1,size:"small",children:e.jsx(r,{id:"Klage.Formkrav.Nei"})})]})}),e.jsx(R,{name:"erKonkret",control:k.control,label:t.formatMessage({id:"Klage.Formkrav.ErKonkret"}),validate:[V],isReadOnly:g,children:e.jsxs(h,{gap:"space-16",children:[e.jsx(L,{value:!0,size:"small",children:e.jsx(r,{id:"Klage.Formkrav.Ja"})}),e.jsx(L,{value:!1,size:"small",children:e.jsx(r,{id:"Klage.Formkrav.Nei"})})]})})]}),e.jsxs(h,{gap:"space-16",children:[e.jsx(R,{name:"erFristOverholdt",control:k.control,label:t.formatMessage({id:"Klage.Formkrav.ErFristOverholdt"}),validate:[V],isReadOnly:g,children:e.jsxs(h,{gap:"space-16",children:[e.jsx(L,{value:!0,size:"small",children:e.jsx(r,{id:"Klage.Formkrav.Ja"})}),e.jsx(L,{value:!1,size:"small",children:e.jsx(r,{id:"Klage.Formkrav.Nei"})})]})}),e.jsx(R,{name:"erSignert",control:k.control,label:t.formatMessage({id:"Klage.Formkrav.ErSignert"}),validate:[V],isReadOnly:g,children:e.jsxs(h,{gap:"space-16",children:[e.jsx(L,{value:!0,size:"small",children:e.jsx(r,{id:"Klage.Formkrav.Ja"})}),e.jsx(L,{value:!1,size:"small",children:e.jsx(r,{id:"Klage.Formkrav.Nei"})})]})})]})]})]})}),e.jsx(he,{readOnly:g}),ne(D)&&e.jsx(Ae,{name:"fritekstTilBrev",control:k.control,label:t.formatMessage({id:"FormkravKlageFormNfp.Fritekst"}),maxLength:1e5,validate:[V,de],readOnly:g,parse:se}),e.jsxs(h,{justify:"space-between",children:[e.jsx(le,{isReadOnly:g,isSubmittable:u,isSubmitting:k.formState.isSubmitting,isDirty:k.formState.isDirty}),e.jsx(Ie,{behandlingUuid:i.uuid,saveKlage:n,avsluttedeBehandlinger:l,handleSubmit:k.handleSubmit,readOnly:g,aksjonspunktCode:T.VURDERING_AV_FORMKRAV_KLAGE_NFP})]})]})]})})};Ge.__docgenInfo={description:`FormkravklageformNfp

Setter opp aksjonspunktet for formkrav klage (NFP).`,methods:[],displayName:"FormkravKlageFormNfp",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  klageFormkravResultatNFP: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNFP: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  klageFormkravResultatKA: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNK: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  aktuelleHjemler: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null;
  underBehandlingKabal: boolean | null;
  behandletAvKabal: boolean | null;
  mottattDato: string | null;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"klageFormkravResultatKA",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNK",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"aktuelleHjemler",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>"},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"mottattDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const ye=({klageVurdering:a,avsluttedeBehandlinger:l})=>{const n=S(),{alleKodeverk:t}=G(),{klageFormkravResultatKA:i,underBehandlingKabal:u,behandletAvKabal:s}=a;let m=n.formatMessage({id:"Klage.Formkrav.IkkePåklagdVedtak"});if(i?.paKlagdBehandlingUuid){const g=l.find(E=>E.uuid===i.paKlagdBehandlingUuid);g&&(m=`${t.BehandlingType.find(v=>v.kode===g.type)?.navn} ${g.avsluttet?oe(g.avsluttet):""}`)}return e.jsxs(d,{gap:"space-16",children:[e.jsx(f,{size:"small",level:"2",children:e.jsx(r,{id:"Klage.Formkrav.Title"})}),u&&e.jsx(f,{size:"small",level:"3",children:e.jsx(r,{id:"Klage.Formkrav.SeKabalText"})}),!u&&!s&&e.jsxs(e.Fragment,{children:[e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"Klage.Formkrav.VelgVedtak"})}),e.jsx(K,{size:"small",children:m})]}),e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"Klage.Formkrav.ErKlagerPart"})}),e.jsx(K,{size:"small",children:i?.erKlagerPart?e.jsx(r,{id:"Klage.Formkrav.Ja"}):e.jsx(r,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"Klage.Formkrav.ErKonkret"})}),e.jsx(K,{size:"small",children:i?.erKlageKonkret?e.jsx(r,{id:"Klage.Formkrav.Ja"}):e.jsx(r,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"Klage.Formkrav.ErFristOverholdt"})}),e.jsx(K,{size:"small",children:i?.erKlagefirstOverholdt?e.jsx(r,{id:"Klage.Formkrav.Ja"}):e.jsx(r,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"Klage.Formkrav.ErSignert"})}),e.jsx(K,{size:"small",children:i?.erSignert?e.jsx(r,{id:"Klage.Formkrav.Ja"}):e.jsx(r,{id:"Klage.Formkrav.Nei"})})]}),e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"Klage.Formkrav.Vurdering"})}),e.jsx(K,{size:"small",children:i?.begrunnelse})]})]})]})};ye.__docgenInfo={description:`FormkravKlageKa

Readonly panel for formkrav klage (KA).`,methods:[],displayName:"FormkravKlageKa",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  klageFormkravResultatNFP: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNFP: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  klageFormkravResultatKA: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNK: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  aktuelleHjemler: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null;
  underBehandlingKabal: boolean | null;
  behandletAvKabal: boolean | null;
  mottattDato: string | null;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"klageFormkravResultatKA",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNK",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"aktuelleHjemler",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>"},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"mottattDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: string;
  avsluttet?: string;
  uuid: string;
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:"AvsluttetBehandling[]"},description:""}}};const _a={"Klage.LovhjemmelNFP":"Fvl §§ 28, 31, 32, 33 og ftrl § 21-12","Klage.LovhjemmelKA":"Fvl §§  28, 31, 32, 34 og ftrl § 21-12","Klage.Formkrav.VelgVedtak":"Vedtaket som er påklagd","Klage.Formkrav.MottattDato":"Klage mottatt dato","Klage.Formkrav.Title":"Vurder formkrav","Klage.Formkrav.HelpText":"Vurder om klagen oppfyller formkravene","Klage.Formkrav.IkkePåklagdVedtak":"Ikke påklagd et vedtak","Klage.Formkrav.ErKlagerPart":"Er klager part i saken?","Klage.Formkrav.ErKonkret":"Klages det på konkrete elementer i vedtaket?","Klage.Formkrav.ErFristOverholdt":"Er klagefristen overholdt?","Klage.Formkrav.ErSignert":"Er klagen signert?","Klage.Formkrav.KabalText":"Fortsett klagebehandlingen i KABAL: Kryss av, velg hjemmel og trykk send","Klage.Formkrav.SeKabalText":"Klagen behandles i KABAL","Klage.Formkrav.SendTilKabal":"Send til KABAL","Klage.Formkrav.Hjemmel":"Hjemmel","Klage.Formkrav.Ja":"Ja","Klage.Formkrav.Nei":"Nei","Klage.Formkrav.Vurdering":"Vurdering","FormkravKlageFormNfp.Fritekst":"Fritekst","TempsaveKlageButton.TempSaveButton":"Lagre","Malform.Beskrivelse":"Foretrukket språk"},Ea=ae(_a),ka={klageFormkravResultatNFP:null,klageVurderingResultatNFP:null,klageFormkravResultatKA:null,klageVurderingResultatNK:null,aktuelleHjemler:null,underBehandlingKabal:null,behandletAvKabal:null,mottattDato:null},te=({klageVurdering:a=ka,avsluttedeBehandlinger:l,lagreFormkravVurdering:n})=>{const{aksjonspunkterForPanel:t}=G();return e.jsxs(ee,{value:Ea,children:[t.some(i=>i.definisjon===T.VURDERING_AV_FORMKRAV_KLAGE_NFP)&&e.jsx(Ge,{klageVurdering:a,avsluttedeBehandlinger:l,lagreFormkravVurdering:n}),a.klageFormkravResultatKA&&e.jsx(ye,{klageVurdering:a,avsluttedeBehandlinger:l})]})};te.__docgenInfo={description:"",methods:[],displayName:"FormkravProsessIndex",props:{klageVurdering:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  klageFormkravResultatNFP: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNFP: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  klageFormkravResultatKA: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNK: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  aktuelleHjemler: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null;
  underBehandlingKabal: boolean | null;
  behandletAvKabal: boolean | null;
  mottattDato: string | null;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"klageFormkravResultatKA",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNK",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"aktuelleHjemler",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>"},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"mottattDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:"",defaultValue:{value:`{
  klageFormkravResultatNFP: null,
  klageVurderingResultatNFP: null,
  klageFormkravResultatKA: null,
  klageVurderingResultatNK: null,
  aktuelleHjemler: null,
  underBehandlingKabal: null,
  behandletAvKabal: null,
  mottattDato: null,
}`,computed:!1}},avsluttedeBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"tilbakekrevingUuid",value:{name:"string",required:!0}},{key:"tilbakekrevingVedtakDato",value:{name:"string",required:!1}},{key:"tilbakekrevingBehandlingType",value:{name:"string",required:!1}}]},required:!1}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Ka=[T.VURDERING_AV_FORMKRAV_KLAGE_NFP],Oe=()=>{const a=S(),l=z(Ka),{behandling:n,alleBehandlinger:t,hentOgSettBehandling:i}=I.use(X),u=t.filter(v=>v.status===ve.AVSLUTTET).filter(v=>(v.type!==P.KLAGE||Le(v.behandlingsresultat?.type))&&v.type!==P.ANKE).map(v=>({uuid:v.uuid,type:v.type,avsluttet:v.avsluttet??void 0})),s=W(n),{data:m,isFetching:g}=Q(s.klage.klageVurderingOptions(n)),{mutate:E}=M({mutationFn:v=>s.klage.mellomlagreFormkravVurdering(v),onSuccess:()=>i()});return e.jsx(C,{standardPanelProps:l,prosessPanelKode:U.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:a.formatMessage({id:"Behandlingspunkt.FormkravKlageNFP"}),skalPanelVisesIMeny:!0,children:g?e.jsx($,{}):e.jsx(te,{klageVurdering:m,avsluttedeBehandlinger:u,lagreFormkravVurdering:E})})};Oe.__docgenInfo={description:"",methods:[],displayName:"FormKravFamOgPensjonProsessStegInitPanel"};const Ta=[T.VURDER_FORMKRAV_NK],Re=()=>{const a=S(),l=z(Ta),{behandling:n,alleBehandlinger:t,hentOgSettBehandling:i}=I.use(X),s=t.filter(_=>!_.behandlingHenlagt).filter(_=>_.status===ve.AVSLUTTET).filter(_=>(_.type!==P.KLAGE||Le(_.behandlingsresultat?.type))&&_.type!==P.ANKE).map(_=>({uuid:_.uuid,type:_.type,avsluttet:_.avsluttet??void 0})),m=W(n),{data:g,isFetching:E}=Q(m.klage.klageVurderingOptions(n)),{mutate:v}=M({mutationFn:_=>m.klage.mellomlagreFormkravVurdering(_),onSuccess:()=>i()});return e.jsx(C,{standardPanelProps:l,prosessPanelKode:U.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:a.formatMessage({id:"Behandlingspunkt.FormkravKlageKA"}),skalPanelVisesIMeny:!0,children:E?e.jsx($,{}):e.jsx(te,{klageVurdering:g,avsluttedeBehandlinger:s,lagreFormkravVurdering:v})})};Re.__docgenInfo={description:"",methods:[],displayName:"FormKravKlageInstansProsessStegInitPanel"};const je=({behandlingPåVent:a,previewVedtakCallback:l,readOnly:n,lagreVedtak:t,isSubmitting:i})=>{const u=s=>{s.preventDefault(),l({gjelderVedtak:!0})};return e.jsxs(h,{gap:"space-8",align:"center",children:[!n&&e.jsx(q,{variant:"primary",size:"small",onClick:t,disabled:a||i,loading:i,type:"button",children:e.jsx(r,{id:"VedtakKlageForm.TilGodkjenning"})}),e.jsx(Se,{href:"#",onClick:u,onKeyDown:s=>s.key==="Enter"?u(s):null,children:e.jsx(r,{id:"VedtakKlageForm.ForhandvisBrev"})})]})};je.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageSubmitPanel",props:{previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingPåVent:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Aa={GUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortGunst",UGUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortUgunst",DELVIS_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortDelvis"},Pe=({klageVurdering:a,previewVedtakCallback:l,behandlingsresultat:n})=>{const{behandling:t,isReadOnly:i,alleKodeverk:u,aksjonspunkterForPanel:s,submitCallback:m}=G(),g=ba(a),E=pa(a,u),v=La(a),_=a.klageVurderingResultatNK??a.klageVurderingResultatNFP,N=aa(n.type),[k,D]=I.useState(!1),y=()=>{D(!0);const p=s.filter(pe).map(F=>F.definisjon).map(F=>({kode:na(F,T.FORESLA_VEDTAK,T.FORESLA_VEDTAK_MANUELT)}));m(p).then(()=>D(!1))};return e.jsxs(d,{gap:"space-16",children:[e.jsx(f,{size:"small",level:"2",children:e.jsx(r,{id:"VedtakKlageForm.Header"})}),e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"VedtakKlageForm.Resultat"})}),v&&e.jsx(K,{size:"small",children:e.jsx(r,{id:v})})]}),n.type===j.KLAGE_AVVIST&&e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"VedtakKlageForm.ArsakTilAvvisning"})}),g.map(b=>e.jsx(K,{size:"small",children:u.KlageAvvistÅrsak.find(({kode:p})=>p===b)?.navn??""},b))]}),N&&e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"VedtakKlageForm.ArsakTilOmgjoring"})}),E]}),n.type===j.KLAGE_YTELSESVEDTAK_OPPHEVET&&e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"VedtakKlageForm.ArsakTilOppheving"})}),E]}),_?.klageVurdertAv==="NFP"&&e.jsx(je,{previewVedtakCallback:l,readOnly:i,behandlingPåVent:t.behandlingPåVent,lagreVedtak:y,isSubmitting:k})]})},ba=a=>{if(a){if(a.klageFormkravResultatKA&&a.klageVurderingResultatNK)return a.klageFormkravResultatKA.avvistArsaker;if(a.klageFormkravResultatNFP)return a.klageFormkravResultatNFP.avvistArsaker}return[]},pa=(a,l)=>a?.klageVurderingResultatNK?.klageMedholdArsak?l.KlageMedholdÅrsak.find(({kode:n})=>n===a.klageVurderingResultatNK?.klageMedholdArsak)?.navn??"":a?.klageVurderingResultatNFP?.klageMedholdArsak?l.KlageMedholdÅrsak.find(({kode:n})=>n===a.klageVurderingResultatNFP?.klageMedholdArsak)?.navn??"":null,La=a=>{const l=a.klageVurderingResultatNK??a.klageVurderingResultatNFP;switch(l?.klageVurdering){case o.AVVIS_KLAGE:return"VedtakKlageForm.KlageAvvist";case o.STADFESTE_YTELSESVEDTAK:return"VedtakKlageForm.KlageStadfestet";case o.OPPHEVE_YTELSESVEDTAK:return"VedtakKlageForm.YtelsesvedtakOpphevet";case o.HJEMSENDE_UTEN_Å_OPPHEVE:return"VedtakKlageForm.HjemmsendUtenOpphev";case o.MEDHOLD_I_KLAGE:return Aa[l?.klageVurderingOmgjoer??""];default:return"VedtakKlageForm.IkkeFastsatt"}};Pe.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageForm",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  klageFormkravResultatNFP: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNFP: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  klageFormkravResultatKA: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNK: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  aktuelleHjemler: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null;
  underBehandlingKabal: boolean | null;
  behandletAvKabal: boolean | null;
  mottattDato: string | null;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"klageFormkravResultatKA",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNK",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"aktuelleHjemler",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>"},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"mottattDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"dato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"utenMinsterett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"endretDekningsgrad",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""}}};const ha={"VedtakKlageForm.ArsakTilAvslag":"Årsak til avslag","VedtakKlageForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakKlageForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakKlageForm.Resultat":"Resultat av klage","VedtakKlageForm.ArsakTilAvvisning":"Årsak til avvisning","VedtakKlageForm.ArsakTilOmgjoring":"Årsak til omgjøring","VedtakKlageForm.ArsakTilOppheving":"Årsak til oppheving","VedtakKlageForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakKlageForm.ResultatKlageAvvist":"Klagen er avvist","VedtakKlageForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakKlageForm.TilGodkjenning":"Til godkjenning","VedtakKlageForm.ForhandvisBrev":"Forhåndsvis vedtaksbrev","VedtakKlageForm.ArsakTilMedhold":"Årsak","VedtakKlageForm.KlageOmgjortGunst":"Vedtaket er omgjort til gunst","VedtakKlageForm.KlageOmgjortUgunst":"Vedtaket er omgjort til ugunst","VedtakKlageForm.KlageOmgjortDelvis":"Vedtaket er delvis omgjort til gunst","VedtakKlageForm.HjemmsendUtenOpphev":"Vedtaket er hjemsendt","VedtakKlageForm.IkkeFastsatt":"Ikke fastsatt","VedtakKlageForm.Header":"Resultat","VedtakKlageForm.KlageAvvist":"Avvist fordi klagen ikke oppfyller formkravene","VedtakKlageForm.KlageStadfestet":"Vedtaket er stadfestet","VedtakKlageForm.YtelsesvedtakOpphevet":"Vedtak er opphevet og hjemsendt"},Va=ae(ha),fe=({klageVurdering:a,previewVedtakCallback:l})=>{const{behandling:n}=G();if(!n.behandlingsresultat)throw new Error(`behandlingsresultat finnes ikke for behandling ${n.uuid}`);return e.jsx(ee,{value:Va,children:e.jsx(Pe,{klageVurdering:a,previewVedtakCallback:l,behandlingsresultat:n.behandlingsresultat})})};fe.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  klageFormkravResultatNFP: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNFP: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  klageFormkravResultatKA: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNK: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  aktuelleHjemler: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null;
  underBehandlingKabal: boolean | null;
  behandletAvKabal: boolean | null;
  mottattDato: string | null;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"klageFormkravResultatKA",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNK",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"aktuelleHjemler",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>"},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"mottattDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Sa=[T.FORESLA_VEDTAK,T.FATTER_VEDTAK,T.FORESLA_VEDTAK_MANUELT],Fe=()=>{const a=S(),{behandling:l,setSkalOppdatereEtterBekreftelseAvAp:n}=I.use(X),{aksjonspunkt:t}=l,[i,u]=I.useState(!1),s=Da(u,n),m=z(Sa,[],s),g=Na(l.behandlingsresultat,t),E=W(l),v=_e(),{data:_}=Q(E.klage.klageVurderingOptions(l)),{mutate:N}=M({mutationFn:k=>Ve({...k,behandlingUuid:l.uuid}),onSuccess:Ee});return e.jsxs(e.Fragment,{children:[e.jsx(ra,{visModal:i,lukkModal:()=>{u(!1),v("/")},tekst:a.formatMessage({id:"FatterVedtakStatusModal.KlagenErFerdigbehandlet"})}),e.jsx(C,{skalPanelVisesIMeny:!0,prosessPanelKode:U.KLAGE_RESULTAT,prosessPanelMenyTekst:a.formatMessage({id:"Behandlingspunkt.ResultatKlage"}),standardPanelProps:m,overstyrtStatus:g,skalMarkeresSomAktiv:g!==H.IKKE_VURDERT,children:_?e.jsx(fe,{klageVurdering:_,previewVedtakCallback:N}):e.jsx($,{})})]})},Na=(a,l=[])=>{const n=l.some(pe);if(l.length===0||n)return H.IKKE_VURDERT;const t=a?.type;return t===j.HENLAGT_KLAGE_TRUKKET||t===j.HENLAGT_FEILOPPRETTET?H.IKKE_VURDERT:t===j.KLAGE_AVVIST||t===j.KLAGE_YTELSESVEDTAK_OPPHEVET?H.IKKE_OPPFYLT:H.OPPFYLT},Da=(a,l)=>()=>(l(!1),()=>{a(!0)});Fe.__docgenInfo={description:"",methods:[],displayName:"KlageresultatProsessStegInitPanel"};const Be=({klageVurdering:a})=>{const l=S(),{alleKodeverk:n}=G(),{begrunnelse:t,fritekstTilBrev:i,klageVurdering:u,klageMedholdArsak:s,klageVurderingOmgjoer:m}=a.klageVurderingResultatNK??{},g=n.KlageMedholdÅrsak;return e.jsxs(d,{gap:"space-16",children:[e.jsx(f,{size:"small",level:"2",children:l.formatMessage({id:"Klage.ResolveKlage.Title"})}),e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"KlageVurderingRadioOptionsKa.VurderingForKlage"})}),e.jsxs(K,{size:"small",children:[u===o.STADFESTE_YTELSESVEDTAK&&e.jsx(r,{id:"Klage.ResolveKlage.KeepVedtakNk"}),u===o.MEDHOLD_I_KLAGE&&e.jsx(r,{id:"Klage.ResolveKlage.ChangeVedtak"}),u===o.HJEMSENDE_UTEN_Å_OPPHEVE&&e.jsx(r,{id:"Klage.Behandle.Hjemsendt"}),u===o.OPPHEVE_YTELSESVEDTAK&&e.jsx(r,{id:"Klage.ResolveKlage.NullifyVedtak"})]})]}),u===o.MEDHOLD_I_KLAGE&&e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(K,{size:"small",children:g.find(E=>E.kode===s)?.navn}),e.jsxs(K,{size:"small",children:[m===O.GUNST_MEDHOLD_I_KLAGE&&e.jsx(r,{id:"Klage.Behandle.Omgjort"}),m===O.UGUNST_MEDHOLD_I_KLAGE&&e.jsx(r,{id:"Klage.Behandle.Ugunst"}),m===O.DELVIS_MEDHOLD_I_KLAGE&&e.jsx(r,{id:"Klage.Behandle.DelvisOmgjort"})]})]}),(u===o.OPPHEVE_YTELSESVEDTAK||u===o.HJEMSENDE_UTEN_Å_OPPHEVE)&&e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"Klage.ResolveKlage.Cause"})}),e.jsx(K,{size:"small",children:g.find(E=>E.kode===s)?.navn})]}),e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"FritekstKlageBrevTextField.Fritekst"})}),e.jsx(K,{size:"small",children:i})]}),e.jsxs(d,{gap:"space-4",children:[e.jsx(A,{size:"small",children:e.jsx(r,{id:"KlageVurderingRadioOptionsKa.Begrunnelse"})}),e.jsx(K,{size:"small",children:t})]})]})};Be.__docgenInfo={description:`BehandleklageformNfp

Setter opp readonly-panel for behandling av klage (KA).`,methods:[],displayName:"BehandleKlageFormKa",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  klageFormkravResultatNFP: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNFP: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  klageFormkravResultatKA: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNK: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  aktuelleHjemler: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null;
  underBehandlingKabal: boolean | null;
  behandletAvKabal: boolean | null;
  mottattDato: string | null;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"klageFormkravResultatKA",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNK",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"aktuelleHjemler",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>"},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"mottattDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""}}};const ce=({erModalÅpen:a,lukkModal:l,isSubmittable:n,isSubmitting:t,isDirty:i,readOnly:u,valgtHjemmel:s})=>{const m=S();return e.jsx(ge,{width:"500px",open:a,"aria-label":m.formatMessage({id:"Klage.Modal.Overskrift"}),onClose:l,children:e.jsx(ge.Body,{children:e.jsxs(d,{gap:"space-12",children:[e.jsxs(d,{gap:"space-16",children:[e.jsx(A,{size:"medium",children:e.jsx(r,{id:"Klage.Modal.Overskrift"})}),e.jsx(K,{children:e.jsx(r,{id:"Klage.Modal.SendTilKlageinstans"})}),e.jsx(K,{children:e.jsx(r,{id:"Klage.Modal.Valg"})}),e.jsx(K,{children:e.jsx(r,{id:"Klage.Modal.Oppretthold"})}),s&&e.jsx(K,{children:e.jsx(r,{id:"Klage.Modal.Hjemmel",values:{hjemmel:s}})})]}),e.jsx("div",{children:e.jsxs(h,{gap:"space-8",children:[e.jsx(le,{isReadOnly:u,isSubmittable:n,isSubmitting:t,isDirty:i}),e.jsx(q,{size:"small",variant:"primary",onClick:l,autoFocus:!0,type:"button",children:e.jsx(r,{id:"Klage.Modal.Avbryt"})})]})})]})})})};ce.__docgenInfo={description:"",methods:[],displayName:"BekreftOgSubmitKlageModal",props:{erModalÅpen:{required:!0,tsType:{name:"boolean"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},valgtHjemmel:{required:!1,tsType:{name:"string"},description:""}}};const Ia="_fritekstTilBrevTextArea_n72am_1",Ga={fritekstTilBrevTextArea:Ia},He=({språkkode:a,readOnly:l=!0})=>{const{control:n}=be();return e.jsx("div",{className:Ga.fritekstTilBrevTextArea,children:e.jsx(Ae,{name:"fritekstTilBrev",control:n,label:S().formatMessage({id:"FritekstKlageBrevTextField.Fritekst"}),validate:[V,de],readOnly:l,maxLength:1e5,badges:[{type:"info",titleText:$e(a)}],parse:se})})};He.__docgenInfo={description:"",methods:[],displayName:"FritekstBrevTextField",props:{språkkode:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const ya="_select_1owoa_7",Oa="_selectReadOnly_1owoa_10",x={select:ya,selectReadOnly:Oa},Me=({readOnly:a,medholdReasons:l,alleHjemmlerMedNavn:n,klageVurdering:t})=>{const i=S(),{control:u}=be(),s=l.map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode)),m=n.map(g=>e.jsx("option",{value:g.kode,children:g.navn},g.kode));return e.jsxs(d,{gap:"space-12",children:[e.jsx(R,{name:"klageVurdering",control:u,validate:[V],isReadOnly:a,children:e.jsxs(h,{gap:"space-16",children:[e.jsx(L,{value:o.MEDHOLD_I_KLAGE,size:"small",children:e.jsx(r,{id:"Klage.ResolveKlage.ChangeVedtak"})}),e.jsx(L,{value:o.STADFESTE_YTELSESVEDTAK,size:"small",children:e.jsx(r,{id:"Klage.ResolveKlage.KeepVedtakNfp"})})]})}),t===o.MEDHOLD_I_KLAGE&&e.jsx(Ze,{children:e.jsxs(d,{gap:"space-16",children:[e.jsx(Z,{readOnly:a,control:u,name:"klageMedholdArsak",selectValues:s,className:a?x.selectReadOnly:x.select,label:i.formatMessage({id:"Klage.ResolveKlage.Cause"}),validate:[V]}),e.jsxs(R,{name:"klageVurderingOmgjoer",control:u,validate:[V],isReadOnly:a,children:[e.jsx(L,{value:O.GUNST_MEDHOLD_I_KLAGE,size:"small",children:e.jsx(r,{id:"Klage.Behandle.Omgjort"})}),e.jsx(L,{value:O.UGUNST_MEDHOLD_I_KLAGE,size:"small",children:e.jsx(r,{id:"Klage.Behandle.Ugunst"})}),e.jsx(L,{value:O.DELVIS_MEDHOLD_I_KLAGE,size:"small",children:e.jsx(r,{id:"Klage.Behandle.DelvisOmgjort"})})]})]})}),e.jsx(Z,{readOnly:a,control:u,name:"klageHjemmel",selectValues:m,className:a?x.selectReadOnly:x.select,label:i.formatMessage({id:"Klage.ResolveKlage.Hjemmel"}),validate:[V]})]})};Me.__docgenInfo={description:"",methods:[],displayName:"KlageVurderingRadioOptionsNfp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},medholdReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<'KlageHjemmel'>[]"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Ra=(a,l)=>{switch(l){case o.STADFESTE_YTELSESVEDTAK:return a?c.KLAGE_STADFESTET:c.KLAGE_OVERSENDT;case o.OPPHEVE_YTELSESVEDTAK:return c.KLAGE_HJEMSENDT;case o.HJEMSENDE_UTEN_Å_OPPHEVE:return c.KLAGE_HJEMSENDT;case o.MEDHOLD_I_KLAGE:return c.KLAGE_OMGJORING;default:return}},ja=(a,l)=>({fritekst:l??"",dokumentMal:Ra(!1,a),erOpphevetKlage:a===o.OPPHEVE_YTELSESVEDTAK}),qe=({previewCallback:a,fritekstTilBrev:l,klageVurdering:n})=>{const t=i=>{a(ja(n,l)),i.preventDefault()};return e.jsx(Se,{href:"#",onClick:t,onKeyDown:i=>i.key==="Enter"?t(i):null,children:e.jsx(r,{id:"PreviewKlageLink.ForhandvisBrev"})})};qe.__docgenInfo={description:"",methods:[],displayName:"PreviewKlageLink",props:{previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
| 'KGEHJE'`,elements:[{name:"literal",value:"'FRITEK'"},{name:"literal",value:"'FRIHTM'"},{name:"literal",value:"'INNVES'"},{name:"literal",value:"'AVSLES'"},{name:"literal",value:"'INVFOR'"},{name:"literal",value:"'AVSFOR'"},{name:"literal",value:"'OPPFOR'"},{name:"literal",value:"'ANUFOR'"},{name:"literal",value:"'INVSVP'"},{name:"literal",value:"'OPPSVP'"},{name:"literal",value:"'AVSSVP'"},{name:"literal",value:"'INFOAF'"},{name:"literal",value:"'INNOPP'"},{name:"literal",value:"'VARREV'"},{name:"literal",value:"'IOHENL'"},{name:"literal",value:"'INNSYN'"},{name:"literal",value:"'IKKESO'"},{name:"literal",value:"'INGEND'"},{name:"literal",value:"'FORSAK'"},{name:"literal",value:"'FORMED'"},{name:"literal",value:"'FORMEF'"},{name:"literal",value:"'FORTID'"},{name:"literal",value:"'KGEAVV'"},{name:"literal",value:"'KGEOMG'"},{name:"literal",value:"'KGEOVE'"},{name:"literal",value:"'ELYSIM'"},{name:"literal",value:"'ENDUTB'"},{name:"literal",value:"'INFOPU'"},{name:"literal",value:"'FORPUS'"},{name:"literal",value:"'KLAGAV'"},{name:"literal",value:"'KAVVIS'"},{name:"literal",value:"'KLAGNY'"},{name:"literal",value:"'KHJEMS'"},{name:"literal",value:"'VEDMED'"},{name:"literal",value:"'KOMGJO'"},{name:"literal",value:"'KLAGOV'"},{name:"literal",value:"'KOVKLA'"},{name:"literal",value:"'KLAGVE'"},{name:"literal",value:"'KSTADF'"},{name:"literal",value:"'VEDOGA'"},{name:"literal",value:"'ANKEBO'"},{name:"literal",value:"'ANKOMG'"},{name:"literal",value:"'ANKOPP'"},{name:"literal",value:"'KGESTA'"},{name:"literal",value:"'KGEHJE'"}],required:!1}},{key:"erOpphevetKlage",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},fritekstTilBrev:{required:!1,tsType:{name:"string"},description:""},klageVurdering:{required:!1,tsType:{name:"string"},description:""}}};const Pa=a=>({klageMedholdArsak:a.klageVurdering===o.MEDHOLD_I_KLAGE?a.klageMedholdArsak:void 0,klageVurderingOmgjoer:a.klageVurdering===o.MEDHOLD_I_KLAGE?a.klageVurderingOmgjoer:void 0,klageHjemmel:a.klageHjemmel,klageVurdering:J(a.klageVurdering),fritekstTilBrev:a.fritekstTilBrev,begrunnelse:a.begrunnelse,kode:T.BEHANDLE_KLAGE_NFP}),Y=a=>{if(a&&a!=="-")return a},fa=(a,l)=>a.filter(({kode:n})=>l.includes(n)).sort((n,t)=>n.kode.localeCompare(t.kode)),Fa=a=>a.map(l=>l),Ba=a=>({klageMedholdArsak:Y(a?.klageMedholdArsak??void 0),klageVurderingOmgjoer:Y(a?.klageVurderingOmgjoer??void 0),klageHjemmel:Y(a?.klageHjemmel??void 0),klageVurdering:Y(a?.klageVurdering??void 0),begrunnelse:a?.begrunnelse??void 0,fritekstTilBrev:a?.fritekstTilBrev??void 0}),Ue=({klageVurdering:a,previewCallback:l,saveKlage:n,alleAktuelleHjemler:t})=>{const{behandling:i,alleKodeverk:u,submitCallback:s,isReadOnly:m,isSubmittable:g}=G(),E=fa(u.KlageHjemmel,Fa(t)),v=S(),[_,N]=I.useState(!1),k=Ba(a.klageVurderingResultatNFP??void 0),{mellomlagretFormData:D,setMellomlagretFormData:y}=me(),b=Ke({defaultValues:D??k}),p=b.watch(),F=()=>{N(!1)},Je=()=>{N(!0)};return e.jsx(Te,{formMethods:b,onSubmit:B=>s(Pa(B)),setDataOnUnmount:y,children:e.jsxs(d,{gap:"space-16",children:[e.jsx(f,{size:"small",level:"2",children:v.formatMessage({id:"Klage.ResolveKlage.Title"})}),g&&e.jsx(ke,{children:e.jsx(r,{id:"Klage.ResolveKlage.HelpText"})}),e.jsx(Me,{readOnly:m,klageVurdering:p.klageVurdering,medholdReasons:u.KlageMedholdÅrsak,alleHjemmlerMedNavn:E}),e.jsx(he,{readOnly:m,text:v.formatMessage({id:"BehandleKlageFormNfp.BegrunnelseForKlage"})}),e.jsx(He,{språkkode:i.språkkode,readOnly:m}),e.jsxs(h,{justify:"space-between",children:[e.jsxs(h,{gap:"space-16",children:[p.klageVurdering===o.STADFESTE_YTELSESVEDTAK&&e.jsxs(e.Fragment,{children:[e.jsx(q,{variant:"primary",type:"button",size:"small",onClick:()=>Je(),disabled:m,children:e.jsx(r,{id:"Klage.Behandle.Bekreft"})}),e.jsx(ce,{erModalÅpen:_,lukkModal:F,valgtHjemmel:E.find(B=>B.kode===p.klageHjemmel)?.navn,readOnly:m,isSubmittable:g,isSubmitting:b.formState.isSubmitting,isDirty:b.formState.isValid})]}),p.klageVurdering!==o.STADFESTE_YTELSESVEDTAK&&e.jsx(le,{isReadOnly:m,isSubmittable:g,isSubmitting:b.formState.isSubmitting,isDirty:b.formState.isDirty}),!m&&p.klageVurdering&&p.fritekstTilBrev&&p.fritekstTilBrev.length>2&&e.jsx(qe,{previewCallback:l,fritekstTilBrev:p.fritekstTilBrev,klageVurdering:p.klageVurdering})]}),!m&&e.jsx(q,{size:"small",variant:"primary",onClick:b.handleSubmit(B=>n(ca(B,T.BEHANDLE_KLAGE_NFP))),type:"button",children:e.jsx(r,{id:"Klage.ResolveKlage.TempSaveButton"})})]})]})})},ca=(a,l)=>({kode:l,klageMedholdArsak:a.klageVurdering===o.MEDHOLD_I_KLAGE||a.klageVurdering===o.OPPHEVE_YTELSESVEDTAK?a.klageMedholdArsak:void 0,klageVurderingOmgjoer:a.klageVurdering===o.MEDHOLD_I_KLAGE?a.klageVurderingOmgjoer:void 0,klageHjemmel:a.klageHjemmel,fritekstTilBrev:J(a.fritekstTilBrev),begrunnelse:J(a.begrunnelse),klageVurdering:J(a.klageVurdering)});Ue.__docgenInfo={description:`BehandleklageformNfp

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
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  klageFormkravResultatNFP: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNFP: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  klageFormkravResultatKA: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNK: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  aktuelleHjemler: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null;
  underBehandlingKabal: boolean | null;
  behandletAvKabal: boolean | null;
  mottattDato: string | null;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"klageFormkravResultatKA",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNK",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"aktuelleHjemler",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>"},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"mottattDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},alleAktuelleHjemler:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const Ha={"Klage.ResolveKlage.Title":"Behandle klage","Klage.ResolveKlage.HelpText":"Vurder om klagen skal tas til følge","Klage.ResolveKlage.KeepVedtakNk":"Stadfest vedtaket","Klage.ResolveKlage.KeepVedtakNfp":"Oppretthold vedtaket","Klage.ResolveKlage.ChangeVedtak":"Omgjør vedtaket","Klage.ResolveKlage.Hjemmel":"Hjemmel","Klage.Behandle.Omgjort":"Til gunst","Klage.Behandle.DelvisOmgjort":"Delvis omgjør, til gunst","Klage.Behandle.Hjemsendt":"Hjemsend vedtaket","Klage.Behandle.Ugunst":"Til ugunst","Klage.ResolveKlage.NullifyVedtak":"Opphev og hjemsend vedtaket","Klage.Behandle.Bekreft":"Bekreft og fortsett","Klage.Modal.Overskrift":"Oppsummering","Klage.Modal.SendTilKlageinstans":"Du vil nå sende klagen over til Nav klageinstans","Klage.Modal.Oppretthold":"Oppretthold vedtaket","Klage.Modal.Hjemmel":"Lovhjemmel {hjemmel}","Klage.Modal.Valg":"Du har valgt:","Klage.Modal.Avbryt":"Avbryt","Klage.ResolveKlage.Cause":"Årsak","Klage.ResolveKlage.TempSaveButton":"Lagre","KlageVurderingRadioOptionsKa.VurderingForKlage":"Vurdering","FritekstKlageBrevTextField.Fritekst":"Fritekst til brev","BehandleKlageFormNfp.BegrunnelseForKlage":"Begrunnelse","PreviewKlageLink.ForhandvisBrev":"Forhåndsvis brev","KlageVurderingRadioOptionsKa.Begrunnelse":"Begrunnelse","Malform.Beskrivelse":"Foretrukket språk"},Ma=ae(Ha),we=({klageVurdering:a,saveKlage:l,previewCallback:n})=>{const{aksjonspunkterForPanel:t}=G();return e.jsxs(ee,{value:Ma,children:[a.klageVurderingResultatNK&&e.jsx(Be,{klageVurdering:a}),t.some(i=>i.definisjon===T.BEHANDLE_KLAGE_NFP)&&e.jsx(Ue,{klageVurdering:a,saveKlage:l,previewCallback:n,alleAktuelleHjemler:a.aktuelleHjemler?a.aktuelleHjemler:[]})]})};we.__docgenInfo={description:"",methods:[],displayName:"KlagevurderingProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  klageFormkravResultatNFP: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNFP: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  klageFormkravResultatKA: tjenester_behandling_klage_KlageFormkravResultatDto | null;
  klageVurderingResultatNK: tjenester_behandling_klage_KlageVurderingResultatDto | null;
  aktuelleHjemler: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null;
  underBehandlingKabal: boolean | null;
  behandletAvKabal: boolean | null;
  mottattDato: string | null;
}`,signature:{properties:[{key:"klageFormkravResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNFP",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"klageFormkravResultatKA",value:{name:"union",raw:"tjenester_behandling_klage_KlageFormkravResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  begrunnelse: string;
  erKlagerPart: boolean;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erSignert: boolean;
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
}`,signature:{properties:[{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}}]}},{name:"null"}],required:!0}},{key:"klageVurderingResultatNK",value:{name:"union",raw:"tjenester_behandling_klage_KlageVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  klageVurdertAv: string | null;
  klageVurdering: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null;
  begrunnelse: string | null;
  klageMedholdArsak: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null;
  klageVurderingOmgjoer: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null;
  klageHjemmel: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null;
  godkjentAvMedunderskriver: boolean | null;
  fritekstTilBrev: string | null;
}`,signature:{properties:[{key:"klageVurdertAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurdering | null",elements:[{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"klageMedholdArsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak | null",elements:[{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør | null",elements:[{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"klageHjemmel",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel | null",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"godkjentAvMedunderskriver",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"aktuelleHjemler",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>"},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"mottattDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},previewCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: KlagevurderingForhåndsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"klageMedholdArsak",value:{name:"string",required:!1}},{key:"klageVurderingOmgjoer",value:{name:"string",required:!1}},{key:"klageHjemmel",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"klageVurdering",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const ie=({aksjonspunktKoder:a,prosessPanelKode:l,prosessPanelMenyTekst:n})=>{const[t,i]=I.useState(!1),{behandling:u,hentOgSettBehandling:s,setSkalOppdatereEtterBekreftelseAvAp:m,oppdaterProsessStegOgFaktaPanelIUrl:g}=I.use(X),E=m?qa(i,m,g):void 0,v=z(a,[],E),_=W(u),N=_e(),{data:k}=Q(_.klage.klageVurderingOptions(u)),{mutate:D}=M({mutationFn:b=>Ve({...b,behandlingUuid:u.uuid}),onSuccess:Ee}),{mutate:y}=M({mutationFn:b=>_.klage.mellomlagreKlageVurdering({behandlingUuid:u.uuid,...b}),onSuccess:()=>s()});return e.jsx(C,{standardPanelProps:v,prosessPanelKode:l,prosessPanelMenyTekst:n,skalPanelVisesIMeny:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(ta,{visModal:t,lukkModal:()=>{i(!1),N("/")}}),k?e.jsx(we,{klageVurdering:k,previewCallback:D,saveKlage:y}):e.jsx($,{})]})})},qa=(a,l,n)=>t=>{const i=t.some(u=>u.kode===T.BEHANDLE_KLAGE_NFP&&"klageVurdering"in u&&u.klageVurdering===o.STADFESTE_YTELSESVEDTAK);return i&&l(!1),()=>{i?a(!0):n&&n("default","default")}};ie.__docgenInfo={description:"",methods:[],displayName:"VurderingFellesProsessStegInitPanel",props:{aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"Aksjonspunkt['definisjon']"}],raw:"Aksjonspunkt['definisjon'][]"},description:""},prosessPanelKode:{required:!0,tsType:{name:"ProsessStegCode"},description:""},prosessPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""}}};const Ua=[T.BEHANDLE_KLAGE_NFP],xe=()=>e.jsx(ie,{aksjonspunktKoder:Ua,prosessPanelKode:U.KLAGE_NAV_FAMILIE_OG_PENSJON,prosessPanelMenyTekst:S().formatMessage({id:"Behandlingspunkt.CheckKlageNFP"})});xe.__docgenInfo={description:"",methods:[],displayName:"VurderingFamOgPensjonProsessStegInitPanel"};const wa=[T.BEHANDLE_KLAGE_NK],Ye=()=>e.jsx(ie,{aksjonspunktKoder:wa,prosessPanelKode:U.KLAGE_NAV_KLAGEINSTANS,prosessPanelMenyTekst:S().formatMessage({id:"Behandlingspunkt.CheckKlageNK"})});Ye.__docgenInfo={description:"",methods:[],displayName:"VurderingKlageInstansProsessStegInitPanel"};const xa=({valgtProsessSteg:a,valgtFaktaSteg:l})=>e.jsxs(e.Fragment,{children:[e.jsxs(Xe,{valgtProsessSteg:a,valgtFaktaSteg:l,children:[e.jsx(Oe,{}),e.jsx(xe,{}),e.jsx(Re,{}),e.jsx(Ye,{}),e.jsx(Fe,{})]}),e.jsx(Qe,{valgtFaktaSteg:l,valgtProsessSteg:a,children:e.jsx(We,{})})]});xa.__docgenInfo={description:"",methods:[],displayName:"KlagePaneler",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""}}};export{xa as default};
