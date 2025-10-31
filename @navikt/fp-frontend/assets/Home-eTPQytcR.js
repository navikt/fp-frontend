import{j as e,r as k,l as h,n as K,P as N,e as B,m as E,u as z,R as L,a as y,L as J}from"./iframe-BZU5akkm.js";import{u as M}from"./index.es-C5y4z9OK.js";import{u as G,E as $}from"./ErrorBoundary-suaBs3TN.js";import{S as W}from"./FagsakProfileIndex-ULsi8dvU.js";import{N as Q}from"./IngenBehandlingValgtPanel-C8l6jhq0.js";import{B as X,J as g,e as _}from"./index.es-BUmb9igk.js";import{T as r}from"./Table-C95jm6d0.js";import{M as n}from"./message-B43BxEDq.js";import{V as j,B as x,a as f,H as Y}from"./VStack-CfgB6B8l.js";import{T as u}from"./BehandlingSupportIndex-u7VIl_iB.js";import{S as q}from"./index.es-D3Oc3JJ8.js";import{E as v}from"./RisikoklassifiseringIndex-DOg4bvBt.js";import{a as Z,n as ee}from"./fagsakApi-heT5cDmZ.js";import{A as re}from"./AktørIndex-c1XIWzXo.js";import{R as ne}from"./useBehandlingPollingOperasjoner-oJP_GwII.js";import{F as te}from"./FagsakIndex-HZAFNfwG.js";import{F as ae}from"./FagsakSearchIndex-BSC4mdXg.js";import{u as ie,f as se,a as de,g as oe}from"./paths-DC0tEcjQ.js";const I=({saker:a})=>e.jsx(X.New,{background:"neutral-moderate",padding:"5",borderRadius:"medium",children:e.jsxs(r,{size:"small",children:[e.jsx(r.Header,{children:e.jsxs(r.Row,{children:[e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"SakerPanel.Registrert"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"SakerPanel.Sak"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"SakerPanel.Stonad"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"SakerPanel.Type"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"SakerPanel.Resultat"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"SakerPanel.Vedtatt"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"SakerPanel.Niva"})})]})}),e.jsx(r.Body,{children:a.map(t=>e.jsxs(r.Row,{children:[e.jsx(r.DataCell,{children:e.jsx(g,{dateString:t.registrert})}),e.jsx(r.DataCell,{children:t.sakId}),e.jsx(r.DataCell,{children:t.valg}),e.jsx(r.DataCell,{children:t.type}),e.jsx(r.DataCell,{children:t.resultat}),e.jsx(r.DataCell,{children:e.jsx(g,{dateString:t.vedtatt})}),e.jsx(r.DataCell,{children:t.nivaa})]},t.sakId))})]})});I.__docgenInfo={description:"",methods:[],displayName:"SakerPanel",props:{saker:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  nivaa?: string;
  registrert: string;
  resultat?: string;
  sakId?: string;
  type?: string;
  undervalg?: string;
  valg?: string;
  vedtatt: string;
}`,signature:{properties:[{key:"nivaa",value:{name:"string",required:!1}},{key:"registrert",value:{name:"string",required:!0}},{key:"resultat",value:{name:"string",required:!1}},{key:"sakId",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"undervalg",value:{name:"string",required:!1}},{key:"valg",value:{name:"string",required:!1}},{key:"vedtatt",value:{name:"string",required:!0}}]}}],raw:"Sak[]"},description:""}}};const P=({alleArbeidsforhold:a})=>e.jsxs(j,{gap:"space-16",children:[e.jsx("div",{}),!a&&e.jsx(x,{size:"small",children:e.jsx(n,{id:"ArbeidsforholdPanel.IngenArbeidsforhold"})}),a&&e.jsxs(r,{size:"small",children:[e.jsx(r.Header,{children:e.jsxs(r.Row,{children:[e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"ArbeidsforholdPanel.Arbeidsgiver"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"ArbeidsforholdPanel.Inntekt"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"ArbeidsforholdPanel.Inntektsperiode"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"ArbeidsforholdPanel.Refusjon"})})]})}),e.jsx(r.Body,{children:a.map(t=>e.jsxs(r.Row,{children:[e.jsx(r.DataCell,{children:t.arbeidsgiverOrgnr}),e.jsx(r.DataCell,{children:t.inntekt}),e.jsx(r.DataCell,{children:t.inntektsperiode?.termnavn}),e.jsx(r.DataCell,{children:t.refusjon?e.jsx(n,{id:"ArbeidsforholdPanel.Ja"}):e.jsx(n,{id:"ArbeidsforholdPanel.Nei"})})]},t.identdato))})]})]});P.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdPanel",props:{alleArbeidsforhold:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  identdato: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  refusjon: boolean;
  refusjonTom?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}}]}}],raw:"VedtakArbeidsforhold[]"},description:""}}};const V=({utbetalinger:a})=>e.jsxs(j,{gap:"space-16",children:[e.jsx("div",{}),!a&&e.jsx(x,{size:"small",children:e.jsx(n,{id:"UtbetalingerPanel.IngenUtbetalinger"})}),a&&e.jsxs(r,{size:"small",children:[e.jsx(r.Header,{children:e.jsxs(r.Row,{children:[e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"UtbetalingerPanel.Periode"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"UtbetalingerPanel.Utbetalingsgrad"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"UtbetalingerPanel.Dagsats"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"UtbetalingerPanel.Refusjon"})})]})}),e.jsx(r.Body,{children:a.map(t=>e.jsxs(r.Row,{children:[e.jsx(r.DataCell,{children:e.jsx(_,{dateStringFom:t.periode.fom,dateStringTom:t.periode.tom})}),e.jsx(r.DataCell,{children:t.utbetalingsgrad}),e.jsx(r.DataCell,{children:t.dagsats}),e.jsx(r.DataCell,{children:t.erRefusjon?e.jsx(n,{id:"UtbetalingerPanel.Ja"}):e.jsx(n,{id:"UtbetalingerPanel.Nei"})})]},t.identdato))})]})]});V.__docgenInfo={description:"",methods:[],displayName:"UtbetalingerPanel",props:{utbetalinger:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  dagsats: number;
  erRefusjon: boolean;
  identdato: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"dagsats",value:{name:"number",required:!0}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}}]}}],raw:"VedtakUtbetaling[]"},description:""}}};const D=({vedtak:a})=>e.jsxs(u,{defaultValue:"utbetalinger",children:[e.jsxs(u.List,{children:[e.jsx(u.Tab,{value:"arbeidshforhold",label:e.jsx(n,{id:"VedtakDetaljerPanel.Arbeidsforhold"})}),e.jsx(u.Tab,{value:"utbetalinger",label:e.jsx(n,{id:"VedtakDetaljerPanel.Utbetalinger"})})]}),e.jsx(u.Panel,{value:"arbeidshforhold",children:e.jsx(P,{alleArbeidsforhold:a.arbeidsforhold??void 0})}),e.jsx(u.Panel,{value:"utbetalinger",children:e.jsx(V,{utbetalinger:a.utbetalinger??void 0})})]});D.__docgenInfo={description:"",methods:[],displayName:"VedtakDetaljerPanel",props:{vedtak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  arbeidsforhold?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>;
  arbeidskategori?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  behandlingstema?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  gradering?: number;
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  registrert: string;
  saksbehandlerId: string;
  utbetalinger?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  identdato: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  refusjon: boolean;
  refusjonTom?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>",required:!1}},{key:"arbeidskategori",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fødselsdatoBarn",value:{name:"string",required:!1}},{key:"gradering",value:{name:"number",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opphørFom",value:{name:"string",required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"registrert",value:{name:"string",required:!0}},{key:"saksbehandlerId",value:{name:"string",required:!0}},{key:"utbetalinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  dagsats: number;
  erRefusjon: boolean;
  identdato: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"dagsats",value:{name:"number",required:!0}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>",required:!1}}]}},description:""}}};const A=({alleVedtak:a,erForeldrepenger:t})=>{const[o,s]=k.useState();return e.jsxs(j,{gap:"space-40",children:[e.jsxs(r,{size:"small",children:[e.jsx(r.Header,{children:e.jsxs(r.Row,{children:[e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"VedtakPanel.Identdato"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"VedtakPanel.Dekningsgrad"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"VedtakPanel.Periode"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"VedtakPanel.Arbeidskategori"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"VedtakPanel.OpphorFom"})}),t&&e.jsxs(e.Fragment,{children:[e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"VedtakPanel.FødselsdatoBarn"})}),e.jsx(r.HeaderCell,{scope:"col",children:e.jsx(n,{id:"VedtakPanel.Gradering"})})]})]})}),e.jsx(r.Body,{children:a.map(i=>e.jsxs(r.Row,{onClick:()=>s(i),selected:i.identdato===o?.identdato,style:{cursor:"pointer"},children:[e.jsx(r.DataCell,{children:e.jsx(g,{dateString:i.identdato})}),e.jsx(r.DataCell,{children:i.dekningsgrad}),e.jsx(r.DataCell,{children:e.jsx(_,{dateStringFom:i.periode.fom,dateStringTom:i.periode.tom})}),e.jsx(r.DataCell,{children:i.arbeidskategori?.termnavn}),e.jsx(r.DataCell,{children:i.opphørFom&&e.jsx(g,{dateString:i.opphørFom})}),t&&e.jsxs(e.Fragment,{children:[e.jsx(r.DataCell,{children:i.fødselsdatoBarn&&e.jsx(g,{dateString:i.fødselsdatoBarn})}),e.jsx(r.DataCell,{children:i.gradering})]})]},i.identdato))})]}),o&&e.jsx(D,{vedtak:o},o.identdato)]})};A.__docgenInfo={description:"",methods:[],displayName:"VedtakPanel",props:{alleVedtak:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>;
  arbeidskategori?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  behandlingstema?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  gradering?: number;
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  registrert: string;
  saksbehandlerId: string;
  utbetalinger?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  identdato: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  refusjon: boolean;
  refusjonTom?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>",required:!1}},{key:"arbeidskategori",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fødselsdatoBarn",value:{name:"string",required:!1}},{key:"gradering",value:{name:"number",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opphørFom",value:{name:"string",required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"registrert",value:{name:"string",required:!0}},{key:"saksbehandlerId",value:{name:"string",required:!0}},{key:"utbetalinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  dagsats: number;
  erRefusjon: boolean;
  identdato: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"dagsats",value:{name:"number",required:!0}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>",required:!1}}]}}],raw:"Vedtak[]"},description:""},erForeldrepenger:{required:!0,tsType:{name:"boolean"},description:""}}};const le="_container_aon2n_1",ue={container:le},ge=new Set(["AP","FØ"]),w=({søkInfotrygdVedtak:a,isPending:t,isSuccess:o,infotrygdVedtak:s})=>{const i=h(),[p,l]=k.useState(),b=d=>{d&&K(d)?(l(void 0),a({searchString:d})):l(i.formatMessage({id:"UtbetalingsdataPanel.UgyldigFnr"}))};return e.jsxs(j,{gap:"space-20",className:ue.container,children:[e.jsx(f,{size:"large",level:"2",children:e.jsx(n,{id:"UtbetalingsdataPanel.Heading"})}),e.jsx("div",{children:e.jsx(q,{label:e.jsx(n,{id:"UtbetalingsdataPanel.Sok"}),variant:"primary",hideLabel:!1,size:"small",htmlSize:"12",error:p,onSearchClick:b,autoComplete:"off",children:e.jsx(q.Button,{type:"button",loading:t})})}),o&&s&&!p&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",level:"3",children:s.saker.length>0||s.vedtakKjeder.length>0?e.jsx(n,{id:"UtbetalingsdataPanel.Resultat"}):e.jsx(n,{id:"UtbetalingsdataPanel.IngenSakerFunnet"})}),s.saker.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"xsmall",level:"3",children:e.jsx(n,{id:"UtbetalingsdataPanel.Saker"})}),e.jsx(I,{saker:s.saker})]}),s.vedtakKjeder.length>0&&e.jsx(f,{size:"xsmall",level:"3",children:e.jsx(n,{id:"UtbetalingsdataPanel.Utbetalinger"})}),s.vedtakKjeder.map(d=>e.jsxs(v,{size:"small","aria-label":"default-demo",children:[e.jsx(v.Header,{children:e.jsx(v.Title,{size:"small",children:e.jsxs(Y,{gap:"space-20",children:[e.jsx(g,{dateString:d.opprinneligIdentdato}),e.jsx("div",{children:d.behandlingstema.termnavn})]})})}),e.jsx(v.Content,{children:e.jsx(A,{alleVedtak:d.vedtak,erForeldrepenger:ge.has(d.behandlingstema.kode)})})]},d.opprinneligIdentdato))]})]})};w.__docgenInfo={description:"",methods:[],displayName:"UtbetalingsdataPanel",props:{søkInfotrygdVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { searchString: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchString: string }",signature:{properties:[{key:"searchString",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},isPending:{required:!0,tsType:{name:"boolean"},description:""},isSuccess:{required:!0,tsType:{name:"boolean"},description:""},infotrygdVedtak:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  saker: Array<tjenester_infotrygd_InfotrygdVedtakDto_SakDto>;
  vedtakKjeder: Array<tjenester_infotrygd_InfotrygdVedtakDto_VedtakKjede>;
}`,signature:{properties:[{key:"saker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  nivaa?: string;
  registrert: string;
  resultat?: string;
  sakId?: string;
  type?: string;
  undervalg?: string;
  valg?: string;
  vedtatt: string;
}`,signature:{properties:[{key:"nivaa",value:{name:"string",required:!1}},{key:"registrert",value:{name:"string",required:!0}},{key:"resultat",value:{name:"string",required:!1}},{key:"sakId",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"undervalg",value:{name:"string",required:!1}},{key:"valg",value:{name:"string",required:!1}},{key:"vedtatt",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_SakDto>",required:!0}},{key:"vedtakKjeder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingstema: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  vedtak: Array<tjenester_infotrygd_InfotrygdVedtakDto_Vedtak>;
}`,signature:{properties:[{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"vedtak",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>;
  arbeidskategori?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  behandlingstema?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  gradering?: number;
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  registrert: string;
  saksbehandlerId: string;
  utbetalinger?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  identdato: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  refusjon: boolean;
  refusjonTom?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>",required:!1}},{key:"arbeidskategori",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fødselsdatoBarn",value:{name:"string",required:!1}},{key:"gradering",value:{name:"number",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opphørFom",value:{name:"string",required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"registrert",value:{name:"string",required:!0}},{key:"saksbehandlerId",value:{name:"string",required:!0}},{key:"utbetalinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  dagsats: number;
  erRefusjon: boolean;
  identdato: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"dagsats",value:{name:"number",required:!0}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Vedtak>",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_VedtakKjede>",required:!0}}]}},description:""}}};const me={"UtbetalingsdataPanel.Heading":"Søk i Infotrygd","UtbetalingsdataPanel.Sok":"Fødselsnummer","UtbetalingsdataPanel.UgyldigFnr":"Oppgitt fødselsnummer er ikke gyldig","UtbetalingsdataPanel.Resultat":"Søkeresultat:","UtbetalingsdataPanel.IngenSakerFunnet":"Søkeresultat: Ingen saker funnet","UtbetalingsdataPanel.Saker":"Saker","UtbetalingsdataPanel.Utbetalinger":"Utbetalinger","VedtakPanel.Identdato":"Identdato","VedtakPanel.Dekningsgrad":"Dekningsgrad","VedtakPanel.Periode":"Periode","VedtakPanel.Arbeidskategori":"Arbeidskategori","VedtakPanel.OpphorFom":"Opphørsdato","VedtakPanel.FødselsdatoBarn":"Fødselsdato barn","VedtakPanel.Gradering":"Gradering","VedtakDetaljerPanel.Arbeidsforhold":"Arbeidsforhold","VedtakDetaljerPanel.Utbetalinger":"Utbetalinger","SakerPanel.Registrert":"Registrert","SakerPanel.Sak":"Sak","SakerPanel.Stonad":"Stønad","SakerPanel.Type":"Type","SakerPanel.Resultat":"Resultat","SakerPanel.Vedtatt":"Vedtatt","SakerPanel.Niva":"Nivå","ArbeidsforholdPanel.Arbeidsgiver":"Arbeidsgiver","ArbeidsforholdPanel.Inntekt":"Inntekt","ArbeidsforholdPanel.Inntektsperiode":"Inntektsperiode","ArbeidsforholdPanel.Refusjon":"Refusjon","ArbeidsforholdPanel.IngenArbeidsforhold":"Ingen arbeidsforhold","ArbeidsforholdPanel.Ja":"Ja","ArbeidsforholdPanel.Nei":"Nei","UtbetalingerPanel.Periode":"Periode","UtbetalingerPanel.Utbetalingsgrad":"Utbetalingsgrad","UtbetalingerPanel.Dagsats":"Dagsats","UtbetalingerPanel.Refusjon":"Refusjon","UtbetalingerPanel.IngenUtbetalinger":"Ingen utbetalinger","UtbetalingerPanel.Ja":"Ja","UtbetalingerPanel.Nei":"Nei"},ye=B(me),S=a=>e.jsx(N,{value:ye,children:e.jsx(w,{...a})});S.__docgenInfo={description:"",methods:[],displayName:"UtbetalingsdataIs15Index",props:{søkInfotrygdVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { searchString: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ searchString: string }",signature:{properties:[{key:"searchString",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},isPending:{required:!0,tsType:{name:"boolean"},description:""},isSuccess:{required:!0,tsType:{name:"boolean"},description:""},infotrygdVedtak:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  saker: Array<tjenester_infotrygd_InfotrygdVedtakDto_SakDto>;
  vedtakKjeder: Array<tjenester_infotrygd_InfotrygdVedtakDto_VedtakKjede>;
}`,signature:{properties:[{key:"saker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  nivaa?: string;
  registrert: string;
  resultat?: string;
  sakId?: string;
  type?: string;
  undervalg?: string;
  valg?: string;
  vedtatt: string;
}`,signature:{properties:[{key:"nivaa",value:{name:"string",required:!1}},{key:"registrert",value:{name:"string",required:!0}},{key:"resultat",value:{name:"string",required:!1}},{key:"sakId",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"undervalg",value:{name:"string",required:!1}},{key:"valg",value:{name:"string",required:!1}},{key:"vedtatt",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_SakDto>",required:!0}},{key:"vedtakKjeder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingstema: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  vedtak: Array<tjenester_infotrygd_InfotrygdVedtakDto_Vedtak>;
}`,signature:{properties:[{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"vedtak",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>;
  arbeidskategori?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  behandlingstema?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  gradering?: number;
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  registrert: string;
  saksbehandlerId: string;
  utbetalinger?: Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr: string;
  identdato: string;
  inntekt: number;
  inntektsperiode?: tjenester_infotrygd_InfotrygdVedtakDto_InfotrygdKode;
  opprinneligIdentdato: string;
  refusjon: boolean;
  refusjonTom?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}},{key:"inntektsperiode",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"boolean",required:!0}},{key:"refusjonTom",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold>",required:!1}},{key:"arbeidskategori",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"behandlingstema",value:{name:"signature",type:"object",raw:`{
  kode: string;
  termnavn: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"termnavn",value:{name:"string",required:!0}}]},required:!1}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"fødselsdatoBarn",value:{name:"string",required:!1}},{key:"gradering",value:{name:"number",required:!1}},{key:"identdato",value:{name:"string",required:!0}},{key:"opphørFom",value:{name:"string",required:!1}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"registrert",value:{name:"string",required:!0}},{key:"saksbehandlerId",value:{name:"string",required:!0}},{key:"utbetalinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  dagsats: number;
  erRefusjon: boolean;
  identdato: string;
  opprinneligIdentdato: string;
  periode: tjenester_infotrygd_InfotrygdVedtakDto_Periode;
  utbetalingsgrad: number;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"dagsats",value:{name:"number",required:!0}},{key:"erRefusjon",value:{name:"boolean",required:!0}},{key:"identdato",value:{name:"string",required:!0}},{key:"opprinneligIdentdato",value:{name:"string",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling>",required:!1}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_Vedtak>",required:!0}}]}}],raw:"Array<tjenester_infotrygd_InfotrygdVedtakDto_VedtakKjede>",required:!0}}]}},description:""}}};const ke="_content_11o11_1",pe={content:ke},fe=({headerHeight:a,navAnsatt:t})=>{const o=h(),{søkInfotrygd:s}=Z(),{addErrorMessage:i,removeErrorMessages:p}=G(),[l,b]=k.useState(!0),d=()=>{b(!1)};k.useEffect(()=>{l||i({type:$.GENERAL_ERROR,message:o.formatMessage({id:"Los.IkkeTilgjengelig"})})},[l]);const U=E(),R=(m,O)=>{U(oe(m,O))},c=z();k.useEffect(()=>{c.pathname==="/"&&p()},[c]);const{mutate:C,isPending:T,isSuccess:F,data:H}=M({mutationFn:m=>s(m.searchString)});return e.jsx("div",{className:pe.content,style:{margin:`${a}px auto 0`},children:e.jsxs(L,{children:[e.jsx(y,{path:"/",element:l?e.jsx(W,{setLosErIkkeTilgjengelig:d,åpneFagsak:R,navAnsatt:ee(t)}):e.jsx(ae,{})}),e.jsx(y,{path:ie,element:e.jsx(S,{søkInfotrygdVedtak:C,isPending:T,isSuccess:F,infotrygdVedtak:H})}),e.jsx(y,{path:se,element:e.jsx(ne,{children:e.jsx(te,{})})}),e.jsx(y,{path:de,element:e.jsx(re,{})}),e.jsx(y,{path:"*",element:e.jsx(Q,{renderSomLenke:m=>e.jsx(J,{to:"/",children:m})})})]})})};fe.__docgenInfo={description:`Home

Wrapper for sideinnholdet som vises under header.`,methods:[],displayName:"Home",props:{headerHeight:{required:!0,tsType:{name:"number"},description:""},navAnsatt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  funksjonellTid?: string;
  kanBehandleKode6: boolean;
  kanOppgavestyre: boolean;
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  navn: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!1}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}},description:""}}};export{fe as H};
