import{ak as j,j as e,o as L,P as E,b as T,l as K,r as V,bp as R}from"./iframe-DjuPof63.js";import{a as U,V as H}from"./VergeFaktaInitPanel-Dbr0oHtx.js";import{u as B,P as N,a as z}from"./useStandardProsessPanelProps-D_rxh9qi.js";import{X as f}from"./index.es-BROmvoET.js";import{u as q}from"./fagsakApi-CdomEDQj.js";import{V as I}from"./vilkarUtfallType-vN0hVpa7.js";import{V as l,a as y,L as s,B as d,D as g}from"./VStack-DD9SQAxb.js";import{M as r}from"./message-DNb1Sk13.js";import{u as S}from"./behandlingApi-iSWpW_Hh.js";import{B as O}from"./FagsakIndex-DTuOHunr.js";import{A}from"./index-CtJhsqYa.js";import"./BehandlingMenuIndex-zSMJ8y-N.js";import"./index.es-D-pM9wHR.js";import"./ChevronDown-BT5ScmEC.js";import"./Tag-BbA_aD27.js";import"./Popover-CkGmsDHb.js";import"./Checkbox-BgNWJ3d4.js";import"./bind-CFtKUhkJ.js";import"./index.es-ChbY404X.js";import"./Link-DS8F1pur.js";import"./Checkmark-B6bo7iH7.js";import"./ExclamationmarkTriangleFill-fAcMq9It.js";import"./Kjonnkode-C-fkzSiP.js";import"./Table-D9tsVV_T.js";import"./CheckmarkCircleFill-_wpIO01Y.js";import"./behandlingResultatType-CVAxOrek.js";import"./dokumentMalType-B-Xou3xH.js";import"./SettPaVentModalIndex-BnMaaJWO.js";import"./venteArsakType-BJdSFL9e.js";import"./useBehandlingPollingOperasjoner-Bfdfkca6.js";import"./apiPollingStatus-nT-xUZgL.js";import"./errorType-CwhMpJ5j.js";import"./useKodeverk-BOIQVkZB.js";import"./paths-BmoTg1yw.js";import"./Dropdown-Do_zz6vo.js";import"./BehandlingHenlagtPanel-BjZTS_gU.js";import"./index-CPSoFqsV.js";import"./VisittkortSakIndex-YfM5LoH7.js";import"./Spacer-DJME6ySQ.js";import"./useTrackRouteParam-D3-cFrOi.js";import"./ErrorBoundary-ZBFn9PGc.js";import"./IngenBehandlingValgtPanel-B5lTN47z.js";import"./RisikoklassifiseringIndex-DdqZyHei.js";import"./BehandlingPaVent-CKXuO-RA.js";import"./BehandlingSupportIndex-Bagydbp6.js";import"./DokumentIndex-Blpi9Rn6.js";import"./FaktaKort-B6gefbpk.js";import"./eksterneLenker-DcE6CUbm.js";import"./StarFill-DERqxjU_.js";import"./SupportHeader-DVJz2IHR.js";import"./HistorikkIndex-lX2eLZlD.js";import"./MeldingIndex-OXez6ykJ.js";import"./UkjentAdresseMeldingIndex-BpaO_8uU.js";import"./SettPaVentReadOnlyModal-CN4k97to.js";import"./TotrinnskontrollIndex-CARXr2tb.js";import"./UtvidEllerMinskKnapp-CfPJc4UM.js";import"./FagsakProfileIndex-zDxIkdPo.js";import"./FagsakData-EcIUMWsc.js";var i=(n=>(n.ANKE_AVVIS="ANKE_AVVIS",n.ANKE_STADFESTE_YTELSESVEDTAK="ANKE_STADFESTE_YTELSESVEDTAK",n.ANKE_OMGJOER="ANKE_OMGJOER",n.ANKE_OPPHEVE_OG_HJEMSENDE="ANKE_OPPHEVE_OG_HJEMSENDE",n.ANKE_HJEMSENDE_UTEN_OPPHEV="ANKE_HJEMSENDE_UTEN_OPPHEV",n))(i||{}),m=(n=>(n.ANKE_DELVIS_OMGJOERING_TIL_GUNST="ANKE_DELVIS_OMGJOERING_TIL_GUNST",n.ANKE_TIL_GUNST="ANKE_TIL_GUNST",n.ANKE_TIL_UGUNST="ANKE_TIL_UGUNST",n))(m||{});const p="0",J=n=>n==null||n==="-"?p:n,Y=(n,a,t)=>{const o=n.find(k=>k.uuid===t),u=a.BehandlingType,b=a.BehandlingStatus;return o?`${L(o.opprettet)} - ${u.find(k=>k.kode===o.type)?.navn} - ${b.find(k=>k.kode===o.status)?.navn}`:""},_=({ankeVurdering:n,behandlinger:a})=>{const t=n.ankeVurderingResultat,o=t?J(t.påAnketKlageBehandlingUuid):void 0,{alleKodeverk:u}=j(),b=u.AnkeOmgjørÅrsak,k=n?.underBehandlingKabal||!1,v=n?.behandletAvKabal||!1;return e.jsxs(l,{gap:"4",children:[e.jsx(y,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Title"})}),k&&e.jsx(y,{size:"small",children:e.jsx(r,{id:"Ankebehandling.SeKabalText"})}),v&&e.jsx(y,{size:"small",children:e.jsx(r,{id:"Ankebehandling.BehandletKabal"})}),!k&&e.jsxs(e.Fragment,{children:[e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Vedtak"})}),e.jsxs(d,{size:"small",children:[o===p&&e.jsx(r,{id:"Ankebehandling.Resultat.IkkePaaAnketVedtak"}),o!==p&&Y(a,u,o)]})]}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat"})}),e.jsxs(d,{size:"small",children:[t?.ankeVurdering===i.ANKE_OMGJOER&&e.jsx(r,{id:"Ankebehandling.Resultat.Omgjør"}),t?.ankeVurdering===i.ANKE_OPPHEVE_OG_HJEMSENDE&&e.jsx(r,{id:"Ankebehandling.Resultat.OpphevHjemsend"}),t?.ankeVurdering===i.ANKE_HJEMSENDE_UTEN_OPPHEV&&e.jsx(r,{id:"Ankebehandling.Resultat.Hjemsend"}),t?.ankeVurdering===i.ANKE_AVVIS&&e.jsx(r,{id:"Ankebehandling.Resultat.Avvis"}),t?.ankeVurdering===i.ANKE_STADFESTE_YTELSESVEDTAK&&e.jsx(r,{id:"Ankebehandling.Resultat.Stadfest"})]})]}),i.ANKE_AVVIS===t?.ankeVurdering&&!v&&e.jsxs(e.Fragment,{children:[e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Avvisning"})}),t?.erAnkerIkkePart&&e.jsx(d,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Avvisning.IkkePart"})}),t?.erIkkeKonkret&&e.jsx(d,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Avvisning.IkkeKonkret"})}),t?.erFristIkkeOverholdt&&e.jsx(d,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Avvisning.IkkeFrist"})}),t?.erIkkeSignert&&e.jsx(d,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Avvisning.IkkeSignert"})})]}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Realitetsbehandles"})}),e.jsx(d,{size:"small",children:t?.erSubsidiartRealitetsbehandles?e.jsx(r,{id:"Ankebehandling.Realitetsbehandles.Ja"}):e.jsx(r,{id:"Ankebehandling.Realitetsbehandles.Nei"})})]})]}),i.ANKE_OMGJOER===t?.ankeVurdering&&e.jsxs(e.Fragment,{children:[e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Avvisning"})}),e.jsx(d,{size:"small",children:b.find(h=>h.kode===t?.ankeOmgjoerArsak)?.navn})]}),e.jsx(l,{gap:"1",children:e.jsxs(d,{size:"small",children:[t?.ankeVurderingOmgjoer===m.ANKE_TIL_GUNST&&e.jsx(r,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),t?.ankeVurderingOmgjoer===m.ANKE_TIL_UGUNST&&e.jsx(r,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),t?.ankeVurderingOmgjoer===m.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&e.jsx(r,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})})]}),(i.ANKE_OPPHEVE_OG_HJEMSENDE===t?.ankeVurdering||i.ANKE_HJEMSENDE_UTEN_OPPHEV===t?.ankeVurdering)&&!v&&e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.OmgjoeringArsak"})}),e.jsx(d,{size:"small",children:b.find(h=>h.kode===t.ankeOmgjoerArsak)?.navn})]}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Begrunnelse"})}),e.jsx(d,{size:"small",children:t?.begrunnelse})]}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"FritekstAnkeBrevTextField.Fritekst"})}),e.jsx(d,{size:"small",children:t?.fritekstTilBrev})]})]})]})};_.__docgenInfo={description:"Setter opp aksjonspunktet for behandling.",methods:[],displayName:"BehandleAnkeForm",props:{ankeVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"signature",type:"object",raw:`{
  ankeVurdering?: string;
  ankeVurderingOmgjoer?: string;
  ankeOmgjoerArsak?: AnkeOmgjorArsak;
  trygderettVurdering?: string;
  trygderettVurderingOmgjoer?: string;
  trygderettOmgjoerArsak?: string;
  begrunnelse: string;
  påAnketKlageBehandlingUuid?: string;
  erAnkerIkkePart: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  fritekstTilBrev?: string;
  merknadKommentar?: string;
  erMerknaderMottatt?: boolean;
  sendtTilTrygderettenDato?: string;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"string",required:!1}},{key:"ankeVurderingOmgjoer",value:{name:"string",required:!1}},{key:"ankeOmgjoerArsak",value:{name:"AnkeOmgjorArsak",required:!1}},{key:"trygderettVurdering",value:{name:"string",required:!1}},{key:"trygderettVurderingOmgjoer",value:{name:"string",required:!1}},{key:"trygderettOmgjoerArsak",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"string",required:!1}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"merknadKommentar",value:{name:"string",required:!1}},{key:"erMerknaderMottatt",value:{name:"boolean",required:!1}},{key:"sendtTilTrygderettenDato",value:{name:"string",required:!1}}]},required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""},behandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const C={"Ankebehandling.Title":"Ankebehandling","Ankebehandling.HelpText":"Fastsett resultatet av ankebehandlingen","Ankebehandling.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.SeKabalText":"Anken behandles i KABAL","Ankebehandling.SendTilKabal":"Send til KABAL","Ankebehandling.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Hjemmel":"Hjemmel","Ankebehandling.Resultat":"Resultat","Ankebehandling.Resultat.Stadfest":"Stadfest","Ankebehandling.Resultat.Omgjør":"Omgjør","Ankebehandling.Resultat.Avvis":"Avvis","Ankebehandling.Resultat.OpphevHjemsend":"Opphev","Ankebehandling.Resultat.Hjemsend":"Hjemsend","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Avvisning":"Avvisningsårsaker","Ankebehandling.OmgjoeringArsak":"Årsak","Ankebehandling.TempSaveButton":"Lagre","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.Avvisning.IkkePart":"Den som anker er ikke part i saken","Ankebehandling.Avvisning.IkkeKonkret":"Det ankes ikke på konkrete elementer i vedtaket","Ankebehandling.Avvisning.IkkeFrist":"Ankefristen er ikke overholdt","Ankebehandling.Avvisning.IkkeSignert":"Anken er ikke signert","Ankebehandling.Realitetsbehandles":"Skal anken subsidiært realitetsbehandles?","Ankebehandling.Realitetsbehandles.Ja":"Ja","Ankebehandling.Realitetsbehandles.Nei":"Nei","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.Begrunnelse":"Begrunnelse","FritekstAnkeBrevTextField.Fritekst":"Fritekst til brev","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev","Malform.Beskrivelse":"Foretrukket språk"},$=T(C),c=({ankeVurdering:n,behandlinger:a})=>e.jsx(E,{value:$,children:e.jsx(_,{ankeVurdering:n,behandlinger:a})});c.__docgenInfo={description:"",methods:[],displayName:"AnkeProsessIndex",props:{ankeVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"signature",type:"object",raw:`{
  ankeVurdering?: string;
  ankeVurderingOmgjoer?: string;
  ankeOmgjoerArsak?: AnkeOmgjorArsak;
  trygderettVurdering?: string;
  trygderettVurderingOmgjoer?: string;
  trygderettOmgjoerArsak?: string;
  begrunnelse: string;
  påAnketKlageBehandlingUuid?: string;
  erAnkerIkkePart: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  fritekstTilBrev?: string;
  merknadKommentar?: string;
  erMerknaderMottatt?: boolean;
  sendtTilTrygderettenDato?: string;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"string",required:!1}},{key:"ankeVurderingOmgjoer",value:{name:"string",required:!1}},{key:"ankeOmgjoerArsak",value:{name:"AnkeOmgjorArsak",required:!1}},{key:"trygderettVurdering",value:{name:"string",required:!1}},{key:"trygderettVurderingOmgjoer",value:{name:"string",required:!1}},{key:"trygderettOmgjoerArsak",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"string",required:!1}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"merknadKommentar",value:{name:"string",required:!1}},{key:"erMerknaderMottatt",value:{name:"boolean",required:!1}},{key:"sendtTilTrygderettenDato",value:{name:"string",required:!1}}]},required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""},behandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const x=()=>{const n=K(),{behandling:a,alleBehandlinger:t}=V.use(O),o=S(a),{data:u}=q(o.anke.ankeVurderingOptions(a)),b=B();return e.jsx(N,{standardPanelProps:b,prosessPanelKode:R.ANKEBEHANDLING,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Ankebehandling"}),skalPanelVisesIMeny:!0,overstyrtStatus:a.behandlingsresultat?.type?I.OPPFYLT:I.IKKE_VURDERT,children:u?e.jsx(c,{behandlinger:t.filter(k=>!k.behandlingHenlagt),ankeVurdering:u}):e.jsx(f,{})})};x.__docgenInfo={description:"",methods:[],displayName:"AnkeBehandlingProsessStegInitPanel"};const X=({ankeVurderingResultat:n})=>e.jsxs(l,{gap:"4",children:[e.jsx(g,{children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Stadfest"})}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(g,{children:n?.begrunnelse})]})]}),Q=({ankeVurderingResultat:n})=>e.jsxs(l,{gap:"4",children:[e.jsx(g,{children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Oppheves"})}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(g,{children:n?.begrunnelse})]})]}),W=({ankeVurderingResultat:n})=>e.jsxs(l,{gap:"4",children:[e.jsx(g,{children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Hjemsendes"})}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(g,{children:n?.begrunnelse})]})]}),Z=({ankeVurderingResultat:n})=>e.jsxs(l,{gap:"4",children:[e.jsxs(g,{children:[n?.påAnketKlageBehandlingUuid&&e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Avvises"}),!n?.påAnketKlageBehandlingUuid&&e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.AvvisesUten"})]}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Arsak"})}),e.jsxs("ul",{children:[n?.erAnkerIkkePart&&e.jsx("li",{children:e.jsx(g,{children:e.jsx(r,{id:"Ankebehandling.Avvisning.IkkePart"})})}),n?.erIkkeKonkret&&e.jsx("li",{children:e.jsx(g,{children:e.jsx(r,{id:"Ankebehandling.Avvisning.IkkeKonkret"})})}),n?.erFristIkkeOverholdt&&e.jsx("li",{children:e.jsx(g,{children:e.jsx(r,{id:"Ankebehandling.Avvisning.IkkeFrist"})})}),n?.erIkkeSignert&&e.jsx("li",{children:e.jsx(g,{children:e.jsx(r,{id:"Ankebehandling.Avvisning.IkkeSignert"})})})]})]}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Realitetsbehandles"})}),e.jsx(g,{children:e.jsx(r,{id:n?.erSubsidiartRealitetsbehandles?"Ankebehandling.Realitetsbehandles.Ja":"Ankebehandling.Realitetsbehandles.Nei"})})]}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(g,{children:n?.begrunnelse})]})]}),ee=n=>{switch(n){case m.ANKE_TIL_UGUNST:return"Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst";case m.ANKE_TIL_GUNST:return"Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst";case m.ANKE_DELVIS_OMGJOERING_TIL_GUNST:return"Ankebehandling.Resultat.Innstilling.Omgjores.Delvis";default:return""}},ne=({ankeVurderingResultat:n,alleKodeverk:a})=>e.jsxs(l,{gap:"4",children:[e.jsx(g,{children:e.jsx(r,{id:ee(n?.ankeVurderingOmgjoer)})}),n?.ankeOmgjoerArsak&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Arsak"})}),e.jsx(g,{children:a.AnkeOmgjørÅrsak.find(({kode:t})=>t===n.ankeOmgjoerArsak)?.navn??""})]}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(g,{children:n?.begrunnelse})]})]}),re=({ankeVurderingResultat:n})=>{const{alleKodeverk:a}=j();if(!n)return null;switch(n.ankeVurdering){case i.ANKE_STADFESTE_YTELSESVEDTAK:return e.jsx(X,{ankeVurderingResultat:n});case i.ANKE_OPPHEVE_OG_HJEMSENDE:return e.jsx(Q,{ankeVurderingResultat:n});case i.ANKE_HJEMSENDE_UTEN_OPPHEV:return e.jsx(W,{ankeVurderingResultat:n});case i.ANKE_OMGJOER:return e.jsx(ne,{ankeVurderingResultat:n,alleKodeverk:a});case i.ANKE_AVVIS:return e.jsx(Z,{ankeVurderingResultat:n});default:return e.jsx("div",{children:"???"})}},G=({ankeVurderingResultat:n})=>e.jsxs(l,{gap:"4",children:[e.jsx(y,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Title"})}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling"})}),e.jsx(re,{ankeVurderingResultat:n})]})]});G.__docgenInfo={description:"",methods:[],displayName:"BehandleResultatForm",props:{ankeVurderingResultat:{required:!1,tsType:{name:"Readonly['ankeVurderingResultat']",raw:"AnkeVurdering['ankeVurderingResultat']"},description:""}}};const ae={"Ankebehandling.Resultat.Title":"Resultat","Ankebehandling.Resultat.Innstilling":"Innstilling på resultat av anke","Ankebehandling.Resultat.Innstilling.Stadfest":"Vedtaket stadfestes","Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst":"Vedtaket omgjøres til gunst","Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst":"Vedtaket omgjøres til ugunst","Ankebehandling.Resultat.Innstilling.Omgjores.Delvis":"Vedtaket omgjøres delvis til gunst","Ankebehandling.Resultat.Innstilling.Oppheves":"Vedtaket oppheves","Ankebehandling.Resultat.Innstilling.Hjemsendes":"Vedtaket hjemsendes","Ankebehandling.Resultat.Innstilling.Avvises":"Vedtaket avvises","Ankebehandling.Resultat.Innstilling.AvvisesUten":"Vedtaket avvises. Ikke påanket vedtak","Ankebehandling.Resultat.Innstilling.Begrunnelse":"Begrunnelse","Ankebehandling.Resultat.Innstilling.Arsak":"Årsak","Ankebehandling.Avvisning.IkkePart":"Den som anker er ikke part i saken","Ankebehandling.Avvisning.IkkeKonkret":"Det ankes ikke på konkrete elementer i vedtaket","Ankebehandling.Avvisning.IkkeFrist":"Ankefristen er ikke overholdt","Ankebehandling.Avvisning.IkkeSignert":"Anken er ikke signert","Ankebehandling.Realitetsbehandles":"Skal anken subsidiært realitetsbehandles?","Ankebehandling.Realitetsbehandles.Ja":"Ja","Ankebehandling.Realitetsbehandles.Nei":"Nei","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},te=T(ae),P=({ankeVurdering:n})=>e.jsx(E,{value:te,children:e.jsx(G,{ankeVurderingResultat:n.ankeVurderingResultat})});P.__docgenInfo={description:"",methods:[],displayName:"AnkeResultatProsessIndex",props:{ankeVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"signature",type:"object",raw:`{
  ankeVurdering?: string;
  ankeVurderingOmgjoer?: string;
  ankeOmgjoerArsak?: AnkeOmgjorArsak;
  trygderettVurdering?: string;
  trygderettVurderingOmgjoer?: string;
  trygderettOmgjoerArsak?: string;
  begrunnelse: string;
  påAnketKlageBehandlingUuid?: string;
  erAnkerIkkePart: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  fritekstTilBrev?: string;
  merknadKommentar?: string;
  erMerknaderMottatt?: boolean;
  sendtTilTrygderettenDato?: string;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"string",required:!1}},{key:"ankeVurderingOmgjoer",value:{name:"string",required:!1}},{key:"ankeOmgjoerArsak",value:{name:"AnkeOmgjorArsak",required:!1}},{key:"trygderettVurdering",value:{name:"string",required:!1}},{key:"trygderettVurderingOmgjoer",value:{name:"string",required:!1}},{key:"trygderettOmgjoerArsak",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"string",required:!1}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"merknadKommentar",value:{name:"string",required:!1}},{key:"erMerknaderMottatt",value:{name:"boolean",required:!1}},{key:"sendtTilTrygderettenDato",value:{name:"string",required:!1}}]},required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""}}};const le=[A.FORESLA_VEDTAK,A.FATTER_VEDTAK,A.FORESLA_VEDTAK_MANUELT],D=()=>{const n=K(),{behandling:a}=V.use(O),t=S(a),{data:o}=q(t.anke.ankeVurderingOptions(a)),u=B(le);return e.jsx(N,{standardPanelProps:u,prosessPanelKode:R.ANKE_RESULTAT,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.AnkeResultat"}),skalPanelVisesIMeny:!0,children:o?e.jsx(P,{ankeVurdering:o}):e.jsx(f,{})})};D.__docgenInfo={description:"",methods:[],displayName:"AnkeResultatProsessStegInitPanel"};const w=({ankeVurdering:n})=>{const a=n?.ankeVurderingResultat,t=n?.underBehandlingKabal||!1,o=n?.underBehandlingKabalTrygderett||!1,u=n?.behandletAvKabal||!1,{alleKodeverk:b}=j(),k=b.AnkeOmgjørÅrsak;return e.jsxs(l,{gap:"4",children:[e.jsx(y,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Merknad.Title"})}),t&&e.jsx(y,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Merknad.SeKabalText"})}),u&&e.jsx(y,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Merknad.BehandletKabal"})}),!t&&!o&&e.jsxs(e.Fragment,{children:[e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Merknad.Merknader"})}),e.jsx(d,{size:"small",children:a?.erMerknaderMottatt?e.jsx(r,{id:"Ankebehandling.Merknad.Merknader.Ja"}):e.jsx(r,{id:"Ankebehandling.Merknad.Merknader.Nei"})})]}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Fritekst"})}),e.jsx(d,{size:"small",children:a?.merknadKommentar})]}),e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat"})}),e.jsxs(d,{size:"small",children:[a?.trygderettVurdering===i.ANKE_OMGJOER&&e.jsx(r,{id:"Ankebehandling.Resultat.Omgjør"}),a?.trygderettVurdering===i.ANKE_OPPHEVE_OG_HJEMSENDE&&e.jsx(r,{id:"Ankebehandling.Resultat.Opphev"}),a?.trygderettVurdering===i.ANKE_HJEMSENDE_UTEN_OPPHEV&&e.jsx(r,{id:"Ankebehandling.Resultat.Hjemsend"}),a?.trygderettVurdering===i.ANKE_AVVIS&&e.jsx(r,{id:"Ankebehandling.Resultat.Avvis"}),a?.trygderettVurdering===i.ANKE_STADFESTE_YTELSESVEDTAK&&e.jsx(r,{id:"Ankebehandling.Resultat.Stadfest"})]})]})]}),i.ANKE_OMGJOER===a?.trygderettVurdering&&e.jsxs(e.Fragment,{children:[e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.OmgjoeringArsak"})}),e.jsx(d,{size:"small",children:k.find(v=>v.kode===a?.trygderettOmgjoerArsak)?.navn})]}),e.jsx(l,{gap:"1",children:e.jsxs(d,{size:"small",children:[a.trygderettVurderingOmgjoer===m.ANKE_TIL_GUNST&&e.jsx(r,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),a.trygderettVurderingOmgjoer===m.ANKE_TIL_UGUNST&&e.jsx(r,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),a.trygderettVurderingOmgjoer===m.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&e.jsx(r,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})})]}),(i.ANKE_OPPHEVE_OG_HJEMSENDE===a?.trygderettVurdering||i.ANKE_HJEMSENDE_UTEN_OPPHEV===a?.trygderettVurdering)&&!u&&e.jsxs(l,{gap:"1",children:[e.jsx(s,{size:"small",children:e.jsx(r,{id:"Ankebehandling.OmgjoeringArsak"})}),e.jsx(d,{size:"small",children:k.find(v=>v.kode===a.trygderettOmgjoerArsak)?.navn})]})]})};w.__docgenInfo={description:"",methods:[],displayName:"TrygderettsbehandlingForm",props:{ankeVurdering:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"signature",type:"object",raw:`{
  ankeVurdering?: string;
  ankeVurderingOmgjoer?: string;
  ankeOmgjoerArsak?: AnkeOmgjorArsak;
  trygderettVurdering?: string;
  trygderettVurderingOmgjoer?: string;
  trygderettOmgjoerArsak?: string;
  begrunnelse: string;
  påAnketKlageBehandlingUuid?: string;
  erAnkerIkkePart: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  fritekstTilBrev?: string;
  merknadKommentar?: string;
  erMerknaderMottatt?: boolean;
  sendtTilTrygderettenDato?: string;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"string",required:!1}},{key:"ankeVurderingOmgjoer",value:{name:"string",required:!1}},{key:"ankeOmgjoerArsak",value:{name:"AnkeOmgjorArsak",required:!1}},{key:"trygderettVurdering",value:{name:"string",required:!1}},{key:"trygderettVurderingOmgjoer",value:{name:"string",required:!1}},{key:"trygderettOmgjoerArsak",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"string",required:!1}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"merknadKommentar",value:{name:"string",required:!1}},{key:"erMerknaderMottatt",value:{name:"boolean",required:!1}},{key:"sendtTilTrygderettenDato",value:{name:"string",required:!1}}]},required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""}}};const ie={"Ankebehandling.Merknad.Title":"Trygderettsbehandling","Ankebehandling.Merknad.HelpText":"Kommentarer til Trygderettsbehandlingen og videre oppfølging","Ankebehandling.Merknad.AvsluttBehandling":"Avslutt behandlingen","Ankebehandling.Merknad.Merknader":"Har det kommet merknader?","Ankebehandling.Merknad.Merknader.Ja":"Ja","Ankebehandling.Merknad.Merknader.Nei":"Nei","Ankebehandling.Merknad.Merknader.Kommentarer":"Kommentarer til Trygderettsbehandlingen","Ankebehandling.Merknad.Merknader.LagreKommentarer":"Lagre kommentarer","Ankebehandling.Merknad.SendTilKabal":"Send til KABAL","Ankebehandling.Merknad.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.Merknad.SeKabalText":"Anken behandles i KABAL","Ankebehandling.Merknad.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Merknad.Hjemmel":"Hjemmel","Ankebehandling.Fritekst":"Fritekst for Trygderettsbehandling","Ankebehandling.Resultat":"Resultat fra Trygdretten","Ankebehandling.Resultat.Stadfest":"Stadfestet","Ankebehandling.Resultat.Omgjør":"Omgjort","Ankebehandling.Resultat.Opphev":"Opphevet","Ankebehandling.Resultat.Hjemsend":"Hjemsendt","Ankebehandling.Resultat.Avvis":"Avvist","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Resultat.SendtTrygderett":"Dato sendt Trygderetten","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.OmgjoeringArsak":"Årsak","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},se=T(ie),F=({ankeVurdering:n})=>e.jsx(E,{value:se,children:e.jsx(w,{ankeVurdering:n})});F.__docgenInfo={description:"",methods:[],displayName:"AnkeTrygderettsbehandlingProsessIndex",props:{ankeVurdering:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"signature",type:"object",raw:`{
  ankeVurdering?: string;
  ankeVurderingOmgjoer?: string;
  ankeOmgjoerArsak?: AnkeOmgjorArsak;
  trygderettVurdering?: string;
  trygderettVurderingOmgjoer?: string;
  trygderettOmgjoerArsak?: string;
  begrunnelse: string;
  påAnketKlageBehandlingUuid?: string;
  erAnkerIkkePart: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  fritekstTilBrev?: string;
  merknadKommentar?: string;
  erMerknaderMottatt?: boolean;
  sendtTilTrygderettenDato?: string;
}`,signature:{properties:[{key:"ankeVurdering",value:{name:"string",required:!1}},{key:"ankeVurderingOmgjoer",value:{name:"string",required:!1}},{key:"ankeOmgjoerArsak",value:{name:"AnkeOmgjorArsak",required:!1}},{key:"trygderettVurdering",value:{name:"string",required:!1}},{key:"trygderettVurderingOmgjoer",value:{name:"string",required:!1}},{key:"trygderettOmgjoerArsak",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"påAnketKlageBehandlingUuid",value:{name:"string",required:!1}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"merknadKommentar",value:{name:"string",required:!1}},{key:"erMerknaderMottatt",value:{name:"boolean",required:!1}},{key:"sendtTilTrygderettenDato",value:{name:"string",required:!1}}]},required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: AnkeOmgjorArsak;
    trygderettVurdering?: string;
    trygderettVurderingOmgjoer?: string;
    trygderettOmgjoerArsak?: string;
    begrunnelse: string;
    påAnketKlageBehandlingUuid?: string;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    sendtTilTrygderettenDato?: string;
  };
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
  behandletAvKabal?: boolean;
}>`},description:""}}};const de=[A.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN],M=()=>{const n=K(),a=B(de),{behandling:t}=V.use(O),o=S(t),{data:u}=q(o.anke.ankeVurderingOptions(t));return e.jsx(N,{standardPanelProps:a,prosessPanelKode:R.ANKE_MERKNADER,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.AnkeMerknader"}),skalPanelVisesIMeny:!0,children:u?e.jsx(F,{ankeVurdering:u}):e.jsx(f,{})})};M.__docgenInfo={description:"",methods:[],displayName:"AnkeTrygderettsbehandlingProsessStegInitPanel"};const oe=({valgtProsessSteg:n,valgtFaktaSteg:a})=>e.jsxs(e.Fragment,{children:[e.jsxs(z,{valgtProsessSteg:n,valgtFaktaSteg:a,children:[e.jsx(x,{}),e.jsx(D,{}),e.jsx(M,{})]}),e.jsx(U,{valgtFaktaSteg:a,valgtProsessSteg:n,children:e.jsx(H,{})})]});oe.__docgenInfo={description:"",methods:[],displayName:"AnkePaneler",props:{valgtProsessSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},valgtFaktaSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};export{oe as default};
