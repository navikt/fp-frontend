import{aj as T,j as e,o as M,P as K,b as S,l as V,r as y,bo as p}from"./iframe-DJGNZoZ6.js";import{a as x,V as H}from"./VergeFaktaInitPanel-BgRBaQ6r.js";import{u as h,P as I,a as J}from"./useStandardProsessPanelProps-GB3BlLvm.js";import{X as R}from"./index.es-D1YnVz4v.js";import{u as L}from"./fagsakApi-D1QcCHKG.js";import{V as j}from"./vilkarUtfallType-vN0hVpa7.js";import{V as t,a as _,L as u,B as s,D as d}from"./VStack-DP7hrVrJ.js";import{M as a}from"./message-B9fo_cy0.js";import{u as O}from"./behandlingApi-C4Jc0h87.js";import{B as G}from"./FagsakIndex-tGkkNfA8.js";import{A as N}from"./index-CPWpTKVb.js";import"./preload-helper-D9Z9MdNV.js";import"./BehandlingMenuIndex-DgG6lGOZ.js";import"./index.es-6AyjzVee.js";import"./Tag-CpsXs_w5.js";import"./Popover-CAa3pUnh.js";import"./Checkbox-C7BYvSai.js";import"./bind-CW5M3B-o.js";import"./index.es-H3DKP3E_.js";import"./Link-B8z19aKV.js";import"./Checkmark-C4Z70zQE.js";import"./ExclamationmarkTriangleFill-CkqaVpWl.js";import"./Kjonnkode-C-fkzSiP.js";import"./Table-BDX8pmsi.js";import"./FaktaKort-BbOHaG_9.js";import"./eksterneLenker-DcE6CUbm.js";import"./CheckmarkCircleFill-CWjE4VII.js";import"./behandlingResultatType-CVAxOrek.js";import"./dokumentMalType-B-Xou3xH.js";import"./SettPaVentModalIndex-DK9Sbiyf.js";import"./venteArsakType-BJdSFL9e.js";import"./useBehandlingPollingOperasjoner-Dd7_LwP5.js";import"./apiPollingStatus-nT-xUZgL.js";import"./errorType-CHWRiApX.js";import"./useKodeverk-DV4DjbSE.js";import"./paths-Bp0-wKHX.js";import"./Dropdown-BTs6cWqt.js";import"./BehandlingHenlagtPanel-C1qusxg0.js";import"./index-CXoy7HZM.js";import"./VisittkortSakIndex-5gP7JsHK.js";import"./Spacer-CFZDP6_v.js";import"./useTrackRouteParam-BNLsoyQE.js";import"./ErrorBoundary-B3BaAn_7.js";import"./IngenBehandlingValgtPanel-CXtPxZDW.js";import"./RisikoklassifiseringIndex-CwUgoZlt.js";import"./BehandlingPaVent-DcJsFDS5.js";import"./BehandlingSupportIndex-DsLv1ilc.js";import"./DokumentIndex-DmFYlwSB.js";import"./StarFill-BPp5XwGG.js";import"./SupportHeader-CRyPtbXO.js";import"./HistorikkIndex-l4BSRCZo.js";import"./MeldingIndex-DbbB3YkX.js";import"./UkjentAdresseMeldingIndex-BKGOwcrn.js";import"./SettPaVentReadOnlyModal-DigJwcZ0.js";import"./TotrinnskontrollIndex-CmdL5uO9.js";import"./UtvidEllerMinskKnapp-C57ZBaOb.js";import"./FagsakProfileIndex-BjKMIySJ.js";import"./FagsakData-EcIUMWsc.js";var i=(n=>(n.ANKE_AVVIS="ANKE_AVVIS",n.ANKE_STADFESTE_YTELSESVEDTAK="ANKE_STADFESTE_YTELSESVEDTAK",n.ANKE_OMGJOER="ANKE_OMGJOER",n.ANKE_OPPHEVE_OG_HJEMSENDE="ANKE_OPPHEVE_OG_HJEMSENDE",n.ANKE_HJEMSENDE_UTEN_OPPHEV="ANKE_HJEMSENDE_UTEN_OPPHEV",n))(i||{}),g=(n=>(n.ANKE_DELVIS_OMGJOERING_TIL_GUNST="ANKE_DELVIS_OMGJOERING_TIL_GUNST",n.ANKE_TIL_GUNST="ANKE_TIL_GUNST",n.ANKE_TIL_UGUNST="ANKE_TIL_UGUNST",n))(g||{});const b="0",Y=n=>n==null||n==="-"?b:n,z=(n,l,r)=>{const o=n.find(E=>E.uuid===r),m=l.BehandlingType,k=l.BehandlingStatus;return o?`${M(o.opprettet)} - ${m.find(E=>E.kode===o.type)?.navn} - ${k.find(E=>E.kode===o.status)?.navn}`:""},P=({ankeVurdering:n,behandlinger:l})=>{const r=n.ankeVurderingResultat,o=r?Y(r.påAnketKlageBehandlingUuid):void 0,{alleKodeverk:m}=T(),k=m.AnkeOmgjørÅrsak,E=n?.underBehandlingKabal||!1,v=n?.behandletAvKabal||!1;return e.jsxs(t,{gap:"space-16",children:[e.jsx(_,{size:"small",level:"2",children:e.jsx(a,{id:"Ankebehandling.Title"})}),E&&e.jsx(_,{size:"small",level:"3",children:e.jsx(a,{id:"Ankebehandling.SeKabalText"})}),v&&e.jsx(_,{size:"small",level:"3",children:e.jsx(a,{id:"Ankebehandling.BehandletKabal"})}),!E&&e.jsxs(e.Fragment,{children:[e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Resultat.Vedtak"})}),e.jsxs(s,{size:"small",children:[o===b&&e.jsx(a,{id:"Ankebehandling.Resultat.IkkePaaAnketVedtak"}),o!==b&&z(l,m,o)]})]}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Resultat"})}),e.jsxs(s,{size:"small",children:[r?.ankeVurdering===i.ANKE_OMGJOER&&e.jsx(a,{id:"Ankebehandling.Resultat.Omgjør"}),r?.ankeVurdering===i.ANKE_OPPHEVE_OG_HJEMSENDE&&e.jsx(a,{id:"Ankebehandling.Resultat.OpphevHjemsend"}),r?.ankeVurdering===i.ANKE_HJEMSENDE_UTEN_OPPHEV&&e.jsx(a,{id:"Ankebehandling.Resultat.Hjemsend"}),r?.ankeVurdering===i.ANKE_AVVIS&&e.jsx(a,{id:"Ankebehandling.Resultat.Avvis"}),r?.ankeVurdering===i.ANKE_STADFESTE_YTELSESVEDTAK&&e.jsx(a,{id:"Ankebehandling.Resultat.Stadfest"})]})]}),i.ANKE_AVVIS===r?.ankeVurdering&&!v&&e.jsxs(e.Fragment,{children:[e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Avvisning"})}),r?.erAnkerIkkePart&&e.jsx(s,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Avvisning.IkkePart"})}),r?.erIkkeKonkret&&e.jsx(s,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Avvisning.IkkeKonkret"})}),r?.erFristIkkeOverholdt&&e.jsx(s,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Avvisning.IkkeFrist"})}),r?.erIkkeSignert&&e.jsx(s,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Avvisning.IkkeSignert"})})]}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Realitetsbehandles"})}),e.jsx(s,{size:"small",children:r?.erSubsidiartRealitetsbehandles?e.jsx(a,{id:"Ankebehandling.Realitetsbehandles.Ja"}):e.jsx(a,{id:"Ankebehandling.Realitetsbehandles.Nei"})})]})]}),i.ANKE_OMGJOER===r?.ankeVurdering&&e.jsxs(e.Fragment,{children:[e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Avvisning"})}),e.jsx(s,{size:"small",children:k.find(A=>A.kode===r?.ankeOmgjoerArsak)?.navn})]}),e.jsx(t,{gap:"space-4",children:e.jsxs(s,{size:"small",children:[r?.ankeVurderingOmgjoer===g.ANKE_TIL_GUNST&&e.jsx(a,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),r?.ankeVurderingOmgjoer===g.ANKE_TIL_UGUNST&&e.jsx(a,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),r?.ankeVurderingOmgjoer===g.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&e.jsx(a,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})})]}),(i.ANKE_OPPHEVE_OG_HJEMSENDE===r?.ankeVurdering||i.ANKE_HJEMSENDE_UTEN_OPPHEV===r?.ankeVurdering)&&!v&&e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.OmgjoeringArsak"})}),e.jsx(s,{size:"small",children:k.find(A=>A.kode===r.ankeOmgjoerArsak)?.navn})]}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Begrunnelse"})}),e.jsx(s,{size:"small",children:r?.begrunnelse})]}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"FritekstAnkeBrevTextField.Fritekst"})}),e.jsx(s,{size:"small",children:r?.fritekstTilBrev})]})]})]})};P.__docgenInfo={description:"Setter opp aksjonspunktet for behandling.",methods:[],displayName:"BehandleAnkeForm",props:{ankeVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankeVurderingResultat: AnkeVurderingResultatDto | null;
  underBehandlingKabal: boolean | null;
  underBehandlingKabalTrygderett: boolean | null;
  behandletAvKabal: boolean | null;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"union",raw:"AnkeVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  ankeVurdering:
    | 'ANKE_STADFESTE_YTELSESVEDTAK'
    | 'ANKE_HJEMSENDE_UTEN_OPPHEV'
    | 'ANKE_OPPHEVE_OG_HJEMSENDE'
    | 'ANKE_OMGJOER'
    | 'ANKE_AVVIS'
    | '-';
  begrunnelse: string;
  fritekstTilBrev: string | null;
  ankeOmgjoerArsak: 'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-';
  ankeVurderingOmgjoer: 'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-';
  erAnkerIkkePart: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeKonkret: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  erMerknaderMottatt: boolean | null;
  merknadKommentar: string | null;
  påAnketKlageBehandlingUuid: string | null;
  trygderettVurdering:
    | 'ANKE_STADFESTE_YTELSESVEDTAK'
    | 'ANKE_HJEMSENDE_UTEN_OPPHEV'
    | 'ANKE_OPPHEVE_OG_HJEMSENDE'
    | 'ANKE_OMGJOER'
    | 'ANKE_AVVIS'
    | '-';
  trygderettOmgjoerArsak: 'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-';
  trygderettVurderingOmgjoer: 'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-';
  sendtTilTrygderettenDato: string | null;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"ankeOmgjoerArsak",value:{name:"union",raw:"'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-'",elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ankeVurderingOmgjoer",value:{name:"union",raw:"'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-'",elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"erMerknaderMottatt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"merknadKommentar",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"trygderettVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!0}},{key:"trygderettOmgjoerArsak",value:{name:"union",raw:"'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-'",elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"trygderettVurderingOmgjoer",value:{name:"union",raw:"'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-'",elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sendtTilTrygderettenDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"underBehandlingKabalTrygderett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},description:""},behandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const C={"Ankebehandling.Title":"Ankebehandling","Ankebehandling.HelpText":"Fastsett resultatet av ankebehandlingen","Ankebehandling.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.SeKabalText":"Anken behandles i KABAL","Ankebehandling.SendTilKabal":"Send til KABAL","Ankebehandling.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Hjemmel":"Hjemmel","Ankebehandling.Resultat":"Resultat","Ankebehandling.Resultat.Stadfest":"Stadfest","Ankebehandling.Resultat.Omgjør":"Omgjør","Ankebehandling.Resultat.Avvis":"Avvis","Ankebehandling.Resultat.OpphevHjemsend":"Opphev","Ankebehandling.Resultat.Hjemsend":"Hjemsend","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Avvisning":"Avvisningsårsaker","Ankebehandling.OmgjoeringArsak":"Årsak","Ankebehandling.TempSaveButton":"Lagre","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.Avvisning.IkkePart":"Den som anker er ikke part i saken","Ankebehandling.Avvisning.IkkeKonkret":"Det ankes ikke på konkrete elementer i vedtaket","Ankebehandling.Avvisning.IkkeFrist":"Ankefristen er ikke overholdt","Ankebehandling.Avvisning.IkkeSignert":"Anken er ikke signert","Ankebehandling.Realitetsbehandles":"Skal anken subsidiært realitetsbehandles?","Ankebehandling.Realitetsbehandles.Ja":"Ja","Ankebehandling.Realitetsbehandles.Nei":"Nei","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.Begrunnelse":"Begrunnelse","FritekstAnkeBrevTextField.Fritekst":"Fritekst til brev","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev","Malform.Beskrivelse":"Foretrukket språk"},$=S(C),U=({ankeVurdering:n,behandlinger:l})=>e.jsx(K,{value:$,children:e.jsx(P,{ankeVurdering:n,behandlinger:l})});U.__docgenInfo={description:"",methods:[],displayName:"AnkeProsessIndex",props:{ankeVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankeVurderingResultat: AnkeVurderingResultatDto | null;
  underBehandlingKabal: boolean | null;
  underBehandlingKabalTrygderett: boolean | null;
  behandletAvKabal: boolean | null;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"union",raw:"AnkeVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  ankeVurdering:
    | 'ANKE_STADFESTE_YTELSESVEDTAK'
    | 'ANKE_HJEMSENDE_UTEN_OPPHEV'
    | 'ANKE_OPPHEVE_OG_HJEMSENDE'
    | 'ANKE_OMGJOER'
    | 'ANKE_AVVIS'
    | '-';
  begrunnelse: string;
  fritekstTilBrev: string | null;
  ankeOmgjoerArsak: 'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-';
  ankeVurderingOmgjoer: 'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-';
  erAnkerIkkePart: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeKonkret: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  erMerknaderMottatt: boolean | null;
  merknadKommentar: string | null;
  påAnketKlageBehandlingUuid: string | null;
  trygderettVurdering:
    | 'ANKE_STADFESTE_YTELSESVEDTAK'
    | 'ANKE_HJEMSENDE_UTEN_OPPHEV'
    | 'ANKE_OPPHEVE_OG_HJEMSENDE'
    | 'ANKE_OMGJOER'
    | 'ANKE_AVVIS'
    | '-';
  trygderettOmgjoerArsak: 'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-';
  trygderettVurderingOmgjoer: 'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-';
  sendtTilTrygderettenDato: string | null;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"ankeOmgjoerArsak",value:{name:"union",raw:"'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-'",elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ankeVurderingOmgjoer",value:{name:"union",raw:"'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-'",elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"erMerknaderMottatt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"merknadKommentar",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"trygderettVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!0}},{key:"trygderettOmgjoerArsak",value:{name:"union",raw:"'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-'",elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"trygderettVurderingOmgjoer",value:{name:"union",raw:"'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-'",elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sendtTilTrygderettenDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"underBehandlingKabalTrygderett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},description:""},behandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const D=()=>{const n=V(),{behandling:l,alleBehandlinger:r}=y.use(G),o=O(l),{data:m}=L(o.anke.ankeVurderingOptions(l)),k=h();return e.jsx(I,{standardPanelProps:k,prosessPanelKode:p.ANKEBEHANDLING,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Ankebehandling"}),skalPanelVisesIMeny:!0,overstyrtStatus:l.behandlingsresultat?.type?j.OPPFYLT:j.IKKE_VURDERT,children:m?e.jsx(U,{behandlinger:r.filter(E=>!E.behandlingHenlagt),ankeVurdering:m}):e.jsx(R,{})})};D.__docgenInfo={description:"",methods:[],displayName:"AnkeBehandlingProsessStegInitPanel"};const X=({ankeVurderingResultat:n})=>e.jsxs(t,{gap:"space-16",children:[e.jsx(d,{children:e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling.Stadfest"})}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(d,{children:n?.begrunnelse})]})]}),Q=({ankeVurderingResultat:n})=>e.jsxs(t,{gap:"space-16",children:[e.jsx(d,{children:e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling.Oppheves"})}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(d,{children:n?.begrunnelse})]})]}),W=({ankeVurderingResultat:n})=>e.jsxs(t,{gap:"space-16",children:[e.jsx(d,{children:e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling.Hjemsendes"})}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(d,{children:n?.begrunnelse})]})]}),Z=({ankeVurderingResultat:n})=>e.jsxs(t,{gap:"space-16",children:[e.jsxs(d,{children:[n?.påAnketKlageBehandlingUuid&&e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling.Avvises"}),!n?.påAnketKlageBehandlingUuid&&e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling.AvvisesUten"})]}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling.Arsak"})}),e.jsxs("ul",{children:[n?.erAnkerIkkePart&&e.jsx("li",{children:e.jsx(d,{children:e.jsx(a,{id:"Ankebehandling.Avvisning.IkkePart"})})}),n?.erIkkeKonkret&&e.jsx("li",{children:e.jsx(d,{children:e.jsx(a,{id:"Ankebehandling.Avvisning.IkkeKonkret"})})}),n?.erFristIkkeOverholdt&&e.jsx("li",{children:e.jsx(d,{children:e.jsx(a,{id:"Ankebehandling.Avvisning.IkkeFrist"})})}),n?.erIkkeSignert&&e.jsx("li",{children:e.jsx(d,{children:e.jsx(a,{id:"Ankebehandling.Avvisning.IkkeSignert"})})})]})]}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Realitetsbehandles"})}),e.jsx(d,{children:e.jsx(a,{id:n?.erSubsidiartRealitetsbehandles?"Ankebehandling.Realitetsbehandles.Ja":"Ankebehandling.Realitetsbehandles.Nei"})})]}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(d,{children:n?.begrunnelse})]})]}),ee=n=>{switch(n){case g.ANKE_TIL_UGUNST:return"Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst";case g.ANKE_TIL_GUNST:return"Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst";case g.ANKE_DELVIS_OMGJOERING_TIL_GUNST:return"Ankebehandling.Resultat.Innstilling.Omgjores.Delvis";default:return""}},ne=({ankeVurderingResultat:n,alleKodeverk:l})=>e.jsxs(t,{gap:"space-16",children:[e.jsx(d,{children:e.jsx(a,{id:ee(n?.ankeVurderingOmgjoer)})}),n?.ankeOmgjoerArsak&&e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling.Arsak"})}),e.jsx(d,{children:l.AnkeOmgjørÅrsak.find(({kode:r})=>r===n.ankeOmgjoerArsak)?.navn??""})]}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(d,{children:n?.begrunnelse})]})]}),ae=({ankeVurderingResultat:n})=>{const{alleKodeverk:l}=T();if(!n)return null;switch(n.ankeVurdering){case i.ANKE_STADFESTE_YTELSESVEDTAK:return e.jsx(X,{ankeVurderingResultat:n});case i.ANKE_OPPHEVE_OG_HJEMSENDE:return e.jsx(Q,{ankeVurderingResultat:n});case i.ANKE_HJEMSENDE_UTEN_OPPHEV:return e.jsx(W,{ankeVurderingResultat:n});case i.ANKE_OMGJOER:return e.jsx(ne,{ankeVurderingResultat:n,alleKodeverk:l});case i.ANKE_AVVIS:return e.jsx(Z,{ankeVurderingResultat:n});default:return e.jsx("div",{children:"???"})}},F=({ankeVurderingResultat:n})=>e.jsxs(t,{gap:"space-16",children:[e.jsx(_,{size:"small",level:"2",children:e.jsx(a,{id:"Ankebehandling.Resultat.Title"})}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Resultat.Innstilling"})}),e.jsx(ae,{ankeVurderingResultat:n})]})]});F.__docgenInfo={description:"",methods:[],displayName:"BehandleResultatForm",props:{ankeVurderingResultat:{required:!1,tsType:{name:"union",raw:"AnkeVurdering['ankeVurderingResultat']"},description:""}}};const le={"Ankebehandling.Resultat.Title":"Resultat","Ankebehandling.Resultat.Innstilling":"Innstilling på resultat av anke","Ankebehandling.Resultat.Innstilling.Stadfest":"Vedtaket stadfestes","Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst":"Vedtaket omgjøres til gunst","Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst":"Vedtaket omgjøres til ugunst","Ankebehandling.Resultat.Innstilling.Omgjores.Delvis":"Vedtaket omgjøres delvis til gunst","Ankebehandling.Resultat.Innstilling.Oppheves":"Vedtaket oppheves","Ankebehandling.Resultat.Innstilling.Hjemsendes":"Vedtaket hjemsendes","Ankebehandling.Resultat.Innstilling.Avvises":"Vedtaket avvises","Ankebehandling.Resultat.Innstilling.AvvisesUten":"Vedtaket avvises. Ikke påanket vedtak","Ankebehandling.Resultat.Innstilling.Begrunnelse":"Begrunnelse","Ankebehandling.Resultat.Innstilling.Arsak":"Årsak","Ankebehandling.Avvisning.IkkePart":"Den som anker er ikke part i saken","Ankebehandling.Avvisning.IkkeKonkret":"Det ankes ikke på konkrete elementer i vedtaket","Ankebehandling.Avvisning.IkkeFrist":"Ankefristen er ikke overholdt","Ankebehandling.Avvisning.IkkeSignert":"Anken er ikke signert","Ankebehandling.Realitetsbehandles":"Skal anken subsidiært realitetsbehandles?","Ankebehandling.Realitetsbehandles.Ja":"Ja","Ankebehandling.Realitetsbehandles.Nei":"Nei","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},re=S(le),q=({ankeVurdering:n})=>e.jsx(K,{value:re,children:e.jsx(F,{ankeVurderingResultat:n.ankeVurderingResultat})});q.__docgenInfo={description:"",methods:[],displayName:"AnkeResultatProsessIndex",props:{ankeVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankeVurderingResultat: AnkeVurderingResultatDto | null;
  underBehandlingKabal: boolean | null;
  underBehandlingKabalTrygderett: boolean | null;
  behandletAvKabal: boolean | null;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"union",raw:"AnkeVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  ankeVurdering:
    | 'ANKE_STADFESTE_YTELSESVEDTAK'
    | 'ANKE_HJEMSENDE_UTEN_OPPHEV'
    | 'ANKE_OPPHEVE_OG_HJEMSENDE'
    | 'ANKE_OMGJOER'
    | 'ANKE_AVVIS'
    | '-';
  begrunnelse: string;
  fritekstTilBrev: string | null;
  ankeOmgjoerArsak: 'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-';
  ankeVurderingOmgjoer: 'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-';
  erAnkerIkkePart: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeKonkret: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  erMerknaderMottatt: boolean | null;
  merknadKommentar: string | null;
  påAnketKlageBehandlingUuid: string | null;
  trygderettVurdering:
    | 'ANKE_STADFESTE_YTELSESVEDTAK'
    | 'ANKE_HJEMSENDE_UTEN_OPPHEV'
    | 'ANKE_OPPHEVE_OG_HJEMSENDE'
    | 'ANKE_OMGJOER'
    | 'ANKE_AVVIS'
    | '-';
  trygderettOmgjoerArsak: 'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-';
  trygderettVurderingOmgjoer: 'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-';
  sendtTilTrygderettenDato: string | null;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"ankeOmgjoerArsak",value:{name:"union",raw:"'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-'",elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ankeVurderingOmgjoer",value:{name:"union",raw:"'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-'",elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"erMerknaderMottatt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"merknadKommentar",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"trygderettVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!0}},{key:"trygderettOmgjoerArsak",value:{name:"union",raw:"'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-'",elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"trygderettVurderingOmgjoer",value:{name:"union",raw:"'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-'",elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sendtTilTrygderettenDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"underBehandlingKabalTrygderett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},description:""}}};const te=[N.FORESLA_VEDTAK,N.FATTER_VEDTAK,N.FORESLA_VEDTAK_MANUELT],B=()=>{const n=V(),{behandling:l}=y.use(G),r=O(l),{data:o}=L(r.anke.ankeVurderingOptions(l)),m=h(te);return e.jsx(I,{standardPanelProps:m,prosessPanelKode:p.ANKE_RESULTAT,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.AnkeResultat"}),skalPanelVisesIMeny:!0,children:o?e.jsx(q,{ankeVurdering:o}):e.jsx(R,{})})};B.__docgenInfo={description:"",methods:[],displayName:"AnkeResultatProsessStegInitPanel"};const c=({ankeVurdering:n})=>{const l=n?.ankeVurderingResultat,r=n?.underBehandlingKabal||!1,o=n?.underBehandlingKabalTrygderett||!1,m=n?.behandletAvKabal||!1,{alleKodeverk:k}=T(),E=k.AnkeOmgjørÅrsak;return e.jsxs(t,{gap:"space-16",children:[e.jsx(_,{size:"small",level:"2",children:e.jsx(a,{id:"Ankebehandling.Merknad.Title"})}),r&&e.jsx(_,{size:"small",level:"3",children:e.jsx(a,{id:"Ankebehandling.Merknad.SeKabalText"})}),m&&e.jsx(_,{size:"small",level:"3",children:e.jsx(a,{id:"Ankebehandling.Merknad.BehandletKabal"})}),!r&&!o&&e.jsxs(e.Fragment,{children:[e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Merknad.Merknader"})}),e.jsx(s,{size:"small",children:l?.erMerknaderMottatt?e.jsx(a,{id:"Ankebehandling.Merknad.Merknader.Ja"}):e.jsx(a,{id:"Ankebehandling.Merknad.Merknader.Nei"})})]}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Fritekst"})}),e.jsx(s,{size:"small",children:l?.merknadKommentar})]}),e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.Resultat"})}),e.jsxs(s,{size:"small",children:[l?.trygderettVurdering===i.ANKE_OMGJOER&&e.jsx(a,{id:"Ankebehandling.Resultat.Omgjør"}),l?.trygderettVurdering===i.ANKE_OPPHEVE_OG_HJEMSENDE&&e.jsx(a,{id:"Ankebehandling.Resultat.Opphev"}),l?.trygderettVurdering===i.ANKE_HJEMSENDE_UTEN_OPPHEV&&e.jsx(a,{id:"Ankebehandling.Resultat.Hjemsend"}),l?.trygderettVurdering===i.ANKE_AVVIS&&e.jsx(a,{id:"Ankebehandling.Resultat.Avvis"}),l?.trygderettVurdering===i.ANKE_STADFESTE_YTELSESVEDTAK&&e.jsx(a,{id:"Ankebehandling.Resultat.Stadfest"})]})]})]}),i.ANKE_OMGJOER===l?.trygderettVurdering&&e.jsxs(e.Fragment,{children:[e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.OmgjoeringArsak"})}),e.jsx(s,{size:"small",children:E.find(v=>v.kode===l?.trygderettOmgjoerArsak)?.navn})]}),e.jsx(t,{gap:"space-4",children:e.jsxs(s,{size:"small",children:[l.trygderettVurderingOmgjoer===g.ANKE_TIL_GUNST&&e.jsx(a,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),l.trygderettVurderingOmgjoer===g.ANKE_TIL_UGUNST&&e.jsx(a,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),l.trygderettVurderingOmgjoer===g.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&e.jsx(a,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})})]}),(i.ANKE_OPPHEVE_OG_HJEMSENDE===l?.trygderettVurdering||i.ANKE_HJEMSENDE_UTEN_OPPHEV===l?.trygderettVurdering)&&!m&&e.jsxs(t,{gap:"space-4",children:[e.jsx(u,{size:"small",children:e.jsx(a,{id:"Ankebehandling.OmgjoeringArsak"})}),e.jsx(s,{size:"small",children:E.find(v=>v.kode===l.trygderettOmgjoerArsak)?.navn})]})]})};c.__docgenInfo={description:"",methods:[],displayName:"TrygderettsbehandlingForm",props:{ankeVurdering:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  ankeVurderingResultat: AnkeVurderingResultatDto | null;
  underBehandlingKabal: boolean | null;
  underBehandlingKabalTrygderett: boolean | null;
  behandletAvKabal: boolean | null;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"union",raw:"AnkeVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  ankeVurdering:
    | 'ANKE_STADFESTE_YTELSESVEDTAK'
    | 'ANKE_HJEMSENDE_UTEN_OPPHEV'
    | 'ANKE_OPPHEVE_OG_HJEMSENDE'
    | 'ANKE_OMGJOER'
    | 'ANKE_AVVIS'
    | '-';
  begrunnelse: string;
  fritekstTilBrev: string | null;
  ankeOmgjoerArsak: 'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-';
  ankeVurderingOmgjoer: 'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-';
  erAnkerIkkePart: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeKonkret: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  erMerknaderMottatt: boolean | null;
  merknadKommentar: string | null;
  påAnketKlageBehandlingUuid: string | null;
  trygderettVurdering:
    | 'ANKE_STADFESTE_YTELSESVEDTAK'
    | 'ANKE_HJEMSENDE_UTEN_OPPHEV'
    | 'ANKE_OPPHEVE_OG_HJEMSENDE'
    | 'ANKE_OMGJOER'
    | 'ANKE_AVVIS'
    | '-';
  trygderettOmgjoerArsak: 'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-';
  trygderettVurderingOmgjoer: 'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-';
  sendtTilTrygderettenDato: string | null;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"ankeOmgjoerArsak",value:{name:"union",raw:"'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-'",elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ankeVurderingOmgjoer",value:{name:"union",raw:"'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-'",elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"erMerknaderMottatt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"merknadKommentar",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"trygderettVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!0}},{key:"trygderettOmgjoerArsak",value:{name:"union",raw:"'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-'",elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"trygderettVurderingOmgjoer",value:{name:"union",raw:"'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-'",elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sendtTilTrygderettenDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"underBehandlingKabalTrygderett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},description:""}}};const ie={"Ankebehandling.Merknad.Title":"Trygderettsbehandling","Ankebehandling.Merknad.HelpText":"Kommentarer til Trygderettsbehandlingen og videre oppfølging","Ankebehandling.Merknad.AvsluttBehandling":"Avslutt behandlingen","Ankebehandling.Merknad.Merknader":"Har det kommet merknader?","Ankebehandling.Merknad.Merknader.Ja":"Ja","Ankebehandling.Merknad.Merknader.Nei":"Nei","Ankebehandling.Merknad.Merknader.Kommentarer":"Kommentarer til Trygderettsbehandlingen","Ankebehandling.Merknad.Merknader.LagreKommentarer":"Lagre kommentarer","Ankebehandling.Merknad.SendTilKabal":"Send til KABAL","Ankebehandling.Merknad.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.Merknad.SeKabalText":"Anken behandles i KABAL","Ankebehandling.Merknad.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Merknad.Hjemmel":"Hjemmel","Ankebehandling.Fritekst":"Fritekst for Trygderettsbehandling","Ankebehandling.Resultat":"Resultat fra Trygdretten","Ankebehandling.Resultat.Stadfest":"Stadfestet","Ankebehandling.Resultat.Omgjør":"Omgjort","Ankebehandling.Resultat.Opphev":"Opphevet","Ankebehandling.Resultat.Hjemsend":"Hjemsendt","Ankebehandling.Resultat.Avvis":"Avvist","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Resultat.SendtTrygderett":"Dato sendt Trygderetten","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.OmgjoeringArsak":"Årsak","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},ue=S(ie),f=({ankeVurdering:n})=>e.jsx(K,{value:ue,children:e.jsx(c,{ankeVurdering:n})});f.__docgenInfo={description:"",methods:[],displayName:"AnkeTrygderettsbehandlingProsessIndex",props:{ankeVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankeVurderingResultat: AnkeVurderingResultatDto | null;
  underBehandlingKabal: boolean | null;
  underBehandlingKabalTrygderett: boolean | null;
  behandletAvKabal: boolean | null;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"union",raw:"AnkeVurderingResultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  ankeVurdering:
    | 'ANKE_STADFESTE_YTELSESVEDTAK'
    | 'ANKE_HJEMSENDE_UTEN_OPPHEV'
    | 'ANKE_OPPHEVE_OG_HJEMSENDE'
    | 'ANKE_OMGJOER'
    | 'ANKE_AVVIS'
    | '-';
  begrunnelse: string;
  fritekstTilBrev: string | null;
  ankeOmgjoerArsak: 'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-';
  ankeVurderingOmgjoer: 'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-';
  erAnkerIkkePart: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeKonkret: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  erMerknaderMottatt: boolean | null;
  merknadKommentar: string | null;
  påAnketKlageBehandlingUuid: string | null;
  trygderettVurdering:
    | 'ANKE_STADFESTE_YTELSESVEDTAK'
    | 'ANKE_HJEMSENDE_UTEN_OPPHEV'
    | 'ANKE_OPPHEVE_OG_HJEMSENDE'
    | 'ANKE_OMGJOER'
    | 'ANKE_AVVIS'
    | '-';
  trygderettOmgjoerArsak: 'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-';
  trygderettVurderingOmgjoer: 'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-';
  sendtTilTrygderettenDato: string | null;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"fritekstTilBrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"ankeOmgjoerArsak",value:{name:"union",raw:"'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-'",elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ankeVurderingOmgjoer",value:{name:"union",raw:"'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-'",elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"erMerknaderMottatt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"merknadKommentar",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"trygderettVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!0}},{key:"trygderettOmgjoerArsak",value:{name:"union",raw:"'NYE_OPPLYSNINGER' | 'ULIK_REGELVERKSTOLKNING' | 'ULIK_VURDERING' | 'PROSESSUELL_FEIL' | '-'",elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"trygderettVurderingOmgjoer",value:{name:"union",raw:"'ANKE_TIL_GUNST' | 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' | 'ANKE_TIL_UGUNST' | '-'",elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sendtTilTrygderettenDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"underBehandlingKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"underBehandlingKabalTrygderett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandletAvKabal",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},description:""}}};const se=[N.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN],w=()=>{const n=V(),l=h(se),{behandling:r}=y.use(G),o=O(r),{data:m}=L(o.anke.ankeVurderingOptions(r));return e.jsx(I,{standardPanelProps:l,prosessPanelKode:p.ANKE_MERKNADER,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.AnkeMerknader"}),skalPanelVisesIMeny:!0,children:m?e.jsx(f,{ankeVurdering:m}):e.jsx(R,{})})};w.__docgenInfo={description:"",methods:[],displayName:"AnkeTrygderettsbehandlingProsessStegInitPanel"};const oe=({valgtProsessSteg:n,valgtFaktaSteg:l})=>e.jsxs(e.Fragment,{children:[e.jsxs(J,{valgtProsessSteg:n,valgtFaktaSteg:l,children:[e.jsx(D,{}),e.jsx(B,{}),e.jsx(w,{})]}),e.jsx(x,{valgtFaktaSteg:l,valgtProsessSteg:n,children:e.jsx(H,{})})]});oe.__docgenInfo={description:"",methods:[],displayName:"AnkePaneler",props:{valgtProsessSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},valgtFaktaSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};export{oe as default};
