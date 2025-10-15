import{j as e,r as _,k as R,m as o}from"./iframe-D5kzLkTB.js";import{G as p}from"./index.es-5JZOUY4a.js";import{u as d}from"./useLosKodeverk-D58PjiPH.js";import{T as n}from"./Table-Ct2JSsx9.js";import{M as s}from"./Loader-B-ItYq5j.js";import{S as k}from"./ChevronRight-DFSx_CB9.js";const N=(t,l)=>{if(t.status==="AVSLU"&&l.status!=="AVSLU")return 1;if(t.status!=="AVSLU"&&l.status==="AVSLU")return-1;const i=t.endret??t.opprettet,u=l.endret??l.opprettet;return R(i,o).diff(R(u,o))},B=({fagsaker:t,fagsakOppgaver:l,åpneFagsak:i,selectOppgaveCallback:u})=>{const S=d("FagsakStatus"),T=d("FagsakYtelseType"),A=d("BehandlingType"),y=[...t].sort(N);return e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsxs(n.Row,{children:[e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(s,{id:"FagsakList.Saksnummer"})}),e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(s,{id:"FagsakList.Behandlingstype"})}),e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(s,{id:"FagsakList.Stonadstype"})}),e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(s,{id:"FagsakList.Status"})}),e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(s,{id:"FagsakList.BarnFodt"})}),e.jsx(n.HeaderCell,{scope:"col"})]})}),e.jsx(n.Body,{children:y.map(r=>{const v=S.find(a=>a.kode===r.status),g=T.find(a=>a.kode===r.fagsakYtelseType),E=l.filter(a=>a.saksnummer===r.saksnummer).map(a=>e.jsxs(n.Row,{onMouseDown:()=>u(a),onKeyDown:()=>u(a),children:[e.jsx(n.DataCell,{}),e.jsx(n.DataCell,{children:T.find(m=>m.kode===a.fagsakYtelseType)?.navn}),e.jsx(n.DataCell,{children:A.find(m=>m.kode===a.behandlingstype)?.navn}),e.jsx(n.DataCell,{}),e.jsx(n.DataCell,{children:r.barnFødt?e.jsx(p,{dateString:r.barnFødt}):null}),e.jsx(n.DataCell,{children:e.jsx(k,{})})]},a.id));return e.jsxs(_.Fragment,{children:[e.jsxs(n.Row,{onMouseDown:()=>i(r.saksnummer),onKeyDown:()=>i(r.saksnummer),children:[e.jsx(n.DataCell,{children:r.saksnummer}),e.jsx(n.DataCell,{children:g?g.navn:""}),e.jsx(n.DataCell,{}),e.jsx(n.DataCell,{children:v?v.navn:""}),e.jsx(n.DataCell,{children:r.barnFødt?e.jsx(p,{dateString:r.barnFødt}):null}),e.jsx(n.DataCell,{children:e.jsx(k,{})})]}),E.length>0&&E]},r.saksnummer)})})]})};B.__docgenInfo={description:`FagsakList

Formaterer fagsak-søkeresultatet for visning i tabell. Sortering av fagsakene blir håndtert her.`,methods:[],displayName:"SøkResultat",props:{fagsaker:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string;
  barnFødt: string;
  endret?: string;
  fagsakYtelseType: foreldrepenger_behandlingslager_fagsak_FagsakYtelseType;
  opprettet?: string;
  person: tjenester_fagsak_dto_PersonDto;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  saksnummer: string;
  status: foreldrepenger_behandlingslager_fagsak_FagsakStatus;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettet",value:{name:"string",required:!1}},{key:"person",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}}]}}],raw:"FagsakEnkel[]"},description:""},fagsakOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: FagsakYtelseType;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"reservasjonStatus",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"union",raw:`| 'TIL_BESLUTTER'
| 'PAPIRSOKNAD'
| 'UTBETALING_TIL_BRUKER'
| 'ENDRINGSSOKNAD'
| 'REVURDERING_INNTEKTSMELDING'
| 'KLAGE_PÅ_TILBAKEBETALING'
| 'BERØRT_BEHANDLING'
| 'PLEIEPENGER'
| 'UTSATT_START'
| 'ARBEID_INNTEKT'
| 'BARE_FAR_RETT'
| 'UTLANDSSAK'
| 'DØD'
| 'EØS_SAK'
| 'MOR_UKJENT_UTLAND'
| 'KODE7_SAK'
| 'NYTT_VEDTAK'
| 'PRAKSIS_UTSETTELSE'
| 'RETURNERT_FRA_BESLUTTER'
| 'SAMMENSATT_KONTROLL'
| 'NÆRING'
| 'TERMINBEKREFTELSE'
| 'VURDER_EØS_OPPTJENING'
| 'VURDER_FARESIGNALER'
| 'VURDER_SYKDOM'
| 'VURDER_FORMKRAV'
| 'IKKE_VARSLET'
| 'OVER_FIRE_RETTSGEBYR'`,elements:[{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'PAPIRSOKNAD'"},{name:"literal",value:"'UTBETALING_TIL_BRUKER'"},{name:"literal",value:"'ENDRINGSSOKNAD'"},{name:"literal",value:"'REVURDERING_INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_PÅ_TILBAKEBETALING'"},{name:"literal",value:"'BERØRT_BEHANDLING'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'UTSATT_START'"},{name:"literal",value:"'ARBEID_INNTEKT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'UTLANDSSAK'"},{name:"literal",value:"'DØD'"},{name:"literal",value:"'EØS_SAK'"},{name:"literal",value:"'MOR_UKJENT_UTLAND'"},{name:"literal",value:"'KODE7_SAK'"},{name:"literal",value:"'NYTT_VEDTAK'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'TERMINBEKREFTELSE'"},{name:"literal",value:"'VURDER_EØS_OPPTJENING'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'VURDER_SYKDOM'"},{name:"literal",value:"'VURDER_FORMKRAV'"},{name:"literal",value:"'IKKE_VARSLET'"},{name:"literal",value:"'OVER_FIRE_RETTSGEBYR'"}]}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"union",raw:`| 'UNDER_ARBEID'
| 'PÅ_VENT'
| 'FERDIG'
| 'TIL_BESLUTTER'
| 'RETURNERT_FRA_BESLUTTER'`,elements:[{name:"literal",value:"'UNDER_ARBEID'"},{name:"literal",value:"'PÅ_VENT'"},{name:"literal",value:"'FERDIG'"},{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: FagsakYtelseType;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}>`}],raw:"Oppgave[]"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},selectOppgaveCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: FagsakYtelseType;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"reservasjonStatus",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"union",raw:`| 'TIL_BESLUTTER'
| 'PAPIRSOKNAD'
| 'UTBETALING_TIL_BRUKER'
| 'ENDRINGSSOKNAD'
| 'REVURDERING_INNTEKTSMELDING'
| 'KLAGE_PÅ_TILBAKEBETALING'
| 'BERØRT_BEHANDLING'
| 'PLEIEPENGER'
| 'UTSATT_START'
| 'ARBEID_INNTEKT'
| 'BARE_FAR_RETT'
| 'UTLANDSSAK'
| 'DØD'
| 'EØS_SAK'
| 'MOR_UKJENT_UTLAND'
| 'KODE7_SAK'
| 'NYTT_VEDTAK'
| 'PRAKSIS_UTSETTELSE'
| 'RETURNERT_FRA_BESLUTTER'
| 'SAMMENSATT_KONTROLL'
| 'NÆRING'
| 'TERMINBEKREFTELSE'
| 'VURDER_EØS_OPPTJENING'
| 'VURDER_FARESIGNALER'
| 'VURDER_SYKDOM'
| 'VURDER_FORMKRAV'
| 'IKKE_VARSLET'
| 'OVER_FIRE_RETTSGEBYR'`,elements:[{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'PAPIRSOKNAD'"},{name:"literal",value:"'UTBETALING_TIL_BRUKER'"},{name:"literal",value:"'ENDRINGSSOKNAD'"},{name:"literal",value:"'REVURDERING_INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_PÅ_TILBAKEBETALING'"},{name:"literal",value:"'BERØRT_BEHANDLING'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'UTSATT_START'"},{name:"literal",value:"'ARBEID_INNTEKT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'UTLANDSSAK'"},{name:"literal",value:"'DØD'"},{name:"literal",value:"'EØS_SAK'"},{name:"literal",value:"'MOR_UKJENT_UTLAND'"},{name:"literal",value:"'KODE7_SAK'"},{name:"literal",value:"'NYTT_VEDTAK'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'TERMINBEKREFTELSE'"},{name:"literal",value:"'VURDER_EØS_OPPTJENING'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'VURDER_SYKDOM'"},{name:"literal",value:"'VURDER_FORMKRAV'"},{name:"literal",value:"'IKKE_VARSLET'"},{name:"literal",value:"'OVER_FIRE_RETTSGEBYR'"}]}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"union",raw:`| 'UNDER_ARBEID'
| 'PÅ_VENT'
| 'FERDIG'
| 'TIL_BESLUTTER'
| 'RETURNERT_FRA_BESLUTTER'`,elements:[{name:"literal",value:"'UNDER_ARBEID'"},{name:"literal",value:"'PÅ_VENT'"},{name:"literal",value:"'FERDIG'"},{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: FagsakYtelseType;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}>`},name:"oppgave"}],return:{name:"void"}}},description:""}}};export{B as S};
