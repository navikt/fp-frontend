import{j as e}from"./index-Byyjg8XX.js";import{a as G,e as E,G as b,V as f,Y as X,H as Q,d as c,A as V,L as W,C as Y,D as Z,B as q,v as ee,t as re,w as ne,i as ae,E as te,z as se,f as le,b as ie,M as oe,P as ue,r as me,m as ge,c as ke,N as de}from"./nb_NO-DYUjll3t.js";import{e as o,p as w,S as ve,R as pe,c as x,d as ye,y as D,a as Te}from"./index.es-fv94KH-L.js";import"./withPanelData-CkwF9r8U.js";import{r as J}from"./index-C4XKfyRp.js";import"./aktivitetStatus-B1m96ipJ.js";import{a as Ae}from"./alleKodeverk-DO07GSZv.js";import{T as K}from"./TrueFalseInput-Daw7nzYV.js";import{M as s}from"./message-BrM6o7bT.js";import{T as u,S as be}from"./Table-CZW3Z5KU.js";import{S as fe}from"./Trash-C9VLp8MT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DTjSd7F1.js";import"./dayjs.min-DkLNzaWO.js";import"./v4-CtRu48qb.js";import"./entry-preview-w9Yyb_VL.js";import"./iframe-DamG_XGQ.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";var k=(r=>(r.FISKE="FISKE",r.FRILANSER="FRILANSER",r.DAGMAMMA="DAGMAMMA",r.JORDBRUK_ELLER_SKOGBRUK="JORDBRUK_SKOGBRUK",r.ANNEN="ANNEN",r))(k||{});const T="egenVirksomhet",l=`${T}.virksomheter`,Re={},Ve=r=>r.map(({kode:n,navn:a})=>e.jsx("option",{value:n,children:a},n)),S=({index:r,readOnly:n,alleKodeverk:a})=>{const t=G(),i=a.Landkoder.slice().sort((m,g)=>m.navn.localeCompare(g.navn)),{getValues:d}=E();return e.jsx(K,{name:`${l}.${r}.virksomhetRegistrertINorge`,label:e.jsx(s,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),readOnly:n,trueContent:e.jsx(b,{marginTop:8,children:e.jsx(V,{name:`${l}.${r}.organisasjonsnummer`,readOnly:n,validate:[o,x,ye],label:e.jsx(s,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})}),falseContent:e.jsx(b,{alignOffset:58,marginTop:8,children:e.jsxs(f,{gap:"4",children:[e.jsx(X,{name:`${l}.${r}.landJobberFra`,className:Re.landBredde,selectValues:Ve(i),validate:[o],label:t.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),e.jsxs(Q,{gap:"4",children:[e.jsx(c,{isReadOnly:n,validate:[o,w,ve],name:`${l}.${r}.fom`,label:t.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})}),e.jsx(c,{isReadOnly:n,validate:[w,m=>{const g=d(`${l}.${r}.fom`);return g?pe(g,m):null}],name:`${l}.${r}.tom`,label:t.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})]})]})})})};S.transformValues=({virksomhetRegistrertINorge:r,organisasjonsnummer:n,landJobberFra:a,fom:t,tom:i})=>({virksomhetRegistrertINorge:r,organisasjonsnummer:r?n:void 0,...r===!1?{landJobberFra:a,fom:t,tom:i}:{landJobberFra:"NOR"}});S.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  virksomhetRegistrertINorge,
  organisasjonsnummer,
  landJobberFra,
  fom,
  tom,
}: RegistrerVirksomhetFormValues`,optional:!1,type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetIdentifikasjonPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const P=({index:r,readOnly:n})=>e.jsx(K,{name:`${l}.${r}.harRegnskapsforer`,label:e.jsx(s,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),readOnly:n,trueContent:e.jsx(b,{marginTop:8,children:e.jsxs(f,{gap:"4",children:[e.jsx(V,{name:`${l}.${r}.navnRegnskapsforer`,readOnly:n,validate:[o,D],label:e.jsx(s,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),e.jsx(V,{name:`${l}.${r}.tlfRegnskapsforer`,readOnly:n,validate:[o,x],label:e.jsx(s,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]})})});P.transformValues=({harRegnskapsforer:r,navnRegnskapsforer:n,tlfRegnskapsforer:a})=>({harRegnskapsforer:r,...r?{navnRegnskapsforer:n}:{},...r?{tlfRegnskapsforer:a}:{}});P.__docgenInfo={description:`VirksomhetRegnskapPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  harRegnskapsforer,
  navnRegnskapsforer,
  tlfRegnskapsforer,
}: RegistrerVirksomhetFormValues`,optional:!1,type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const C=({readOnly:r,index:n})=>e.jsx(K,{name:`${l}.${n}.familieEllerVennerTilknyttetNaringen`,label:e.jsx(s,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),readOnly:r,isHorizontal:!1,trueLabel:e.jsx(s,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),falseLabel:e.jsx(s,{id:"Registrering.VirksomhetRelasjonPanel.No"})});C.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const je="_inntektBredde_1xgnj_1",he={inntektBredde:je},Fe=({readOnly:r,index:n})=>[{value:"harVarigEndring",label:e.jsx(s,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"}),element:e.jsx(b,{marginTop:8,children:e.jsx(c,{name:`${l}.${n}.varigEndringGjeldendeFom`,isReadOnly:r,validate:[w,o],label:e.jsx(s,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})},{value:"erNyoppstartet",label:e.jsx(s,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})},{value:"erNyIArbeidslivet",label:e.jsx(s,{id:"Registrering.VirksomhetStartetPanel.NyIArbeidslivet"}),element:e.jsx(b,{marginTop:8,children:e.jsx(c,{name:`${l}.${n}.nyIArbeidslivetFom`,isReadOnly:r,validate:[w,o],label:e.jsx(s,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})}],M=({readOnly:r,index:n})=>e.jsx(K,{name:`${l}.${n}.varigEndretEllerStartetSisteFireAr`,label:e.jsx(s,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),readOnly:r,trueContent:e.jsx(b,{marginTop:8,children:e.jsxs(f,{gap:"4",children:[e.jsx(W,{size:"small",children:e.jsx(s,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),e.jsx(Y,{validate:[o],name:`${l}.${n}.varigEndretEllerStartetSisteFireArArsak`,checkboxes:Fe({readOnly:r,index:n})}),e.jsx(Z,{name:`${l}.${n}.beskrivelseAvEndring`,label:e.jsx(s,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[D]}),e.jsx(V,{name:`${l}.${n}.inntekt`,label:e.jsx(s,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:r,validate:[x,o],className:he.inntektBredde,parse:a=>{const t=parseInt(a.toString(),10);return Number.isNaN(t)?a:t}})]})})});M.transformValues=({varigEndretEllerStartetSisteFireAr:r,varigEndretEllerStartetSisteFireArArsak:n,varigEndringGjeldendeFom:a,nyIArbeidslivetFom:t,beskrivelseAvEndring:i,inntekt:d})=>{const m=n.includes("harVarigEndring"),g=n.includes("erNyoppstartet"),v=n.includes("erNyIArbeidslivet");return{varigEndretEllerStartetSisteFireAr:r,...r?{harVarigEndring:m,...m?{varigEndringGjeldendeFom:a}:{},erNyoppstartet:g,erNyIArbeidslivet:v,...v?{nyIArbeidslivetFom:t}:{},beskrivelseAvEndring:i,inntekt:d}:{}}};M.__docgenInfo={description:`VirksomhetStartetEndretPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  varigEndretEllerStartetSisteFireAr,
  varigEndretEllerStartetSisteFireArArsak,
  varigEndringGjeldendeFom,
  nyIArbeidslivetFom,
  beskrivelseAvEndring,
  inntekt,
}: StartedEndretFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]},alias:"StartedEndretFormValues"}}],returns:null}],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const H={[k.DAGMAMMA]:1,[k.FISKE]:2,[k.JORDBRUK_ELLER_SKOGBRUK]:3,[k.ANNEN]:4},ce=(r,n)=>r>n?1:r<n?-1:0,qe=r=>r.VirksomhetType.filter(n=>n.kode!==k.FRILANSER).sort((n,a)=>ce(H[n.kode],H[a.kode])).map(n=>({value:n.kode,label:n.navn})),O=({readOnly:r,alleKodeverk:n,index:a})=>e.jsx(Y,{label:e.jsx(s,{id:"Registrering.VirksomhetNaeringTypePanel.Title"}),name:`${l}.${a}.typeVirksomhet`,validate:[o],checkboxes:qe(n),isReadOnly:r});O.transformValues=({typeVirksomhet:r})=>({typeVirksomhet:{ANNEN:r.includes(k.ANNEN),FISKE:r.includes(k.FISKE),DAGMAMMA:r.includes(k.DAGMAMMA),JORDBRUK_SKOGBRUK:r.includes(k.JORDBRUK_ELLER_SKOGBRUK)}});O.__docgenInfo={description:`VirksomhetTypeNaringPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ typeVirksomhet }: RegistrerVirksomhetFormValues",optional:!1,type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetTypeNaringPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const A=({open:r,readOnly:n=!1,alleKodeverk:a,index:t,remove:i})=>{const{getFieldState:d,watch:m}=E(),{error:g}=d(`${l}.${t}`),v=m(`${l}.${t}.navn`),[p,j]=J.useState(r);return e.jsxs(u.Row,{shadeOnHover:!1,style:{backgroundColor:g&&!p?"var(--a-red-50)":"none"},children:[e.jsx(u.DataCell,{valign:"top",children:e.jsx(q,{type:"button",variant:"tertiary-neutral",onClick:()=>j(h=>!h),icon:p?e.jsx(be,{"aria-label":"Vis mindre"}):e.jsx(ee,{"aria-label":"Vis mer"})})}),e.jsxs(u.DataCell,{valign:"top",children:[e.jsx(re,{hidden:p,paddingBlock:"3",children:e.jsx(ne,{weight:"semibold",children:v})}),e.jsxs(f,{gap:"4",hidden:!p,children:[e.jsx(V,{name:`${l}.${t}.navn`,validate:[o],label:e.jsx(s,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),readOnly:n}),e.jsx(S,{readOnly:n,index:t,alleKodeverk:a}),e.jsx(O,{readOnly:n,index:t,alleKodeverk:a}),e.jsx(M,{readOnly:n,index:t}),e.jsx(P,{readOnly:n,index:t}),e.jsx(C,{readOnly:n,index:t})]})]}),e.jsx(u.DataCell,{valign:"top",align:"right",children:e.jsx(q,{type:"button",variant:"tertiary-neutral",onClick:i,onKeyDown:i,icon:e.jsx(fe,{"aria-label":"Slett rad"})})})]})};A.initialValues=()=>({varigEndretEllerStartetSisteFireArArsak:[],typeVirksomhet:[]});A.transformValues=r=>({navn:r.navn,...S.transformValues(r),...O.transformValues(r),...M.transformValues(r),...P.transformValues(r),familieEllerVennerTilknyttetNaringen:r.familieEllerVennerTilknyttetNaringen});A.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const N=({readOnly:r=!1,alleKodeverk:n})=>{var p,j,h,U,B;const a=G(),{control:t,formState:{errors:i}}=E(),{fields:d,remove:m,append:g}=ae({control:t,name:`${T}.virksomheter`,rules:{required:a.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}}),v=()=>{g(A.initialValues())};return J.useEffect(()=>{d.length===0&&v()},[]),e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx(u.Header,{children:e.jsxs(u.Row,{children:[e.jsx(u.HeaderCell,{style:{width:"48px"}}),e.jsx(u.HeaderCell,{children:e.jsx(s,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),e.jsx(u.HeaderCell,{style:{width:"48px"}})]})}),e.jsx(u.Body,{children:d.map((z,I)=>e.jsx(A,{index:I,open:I+1===d.length,remove:()=>m(I),alleKodeverk:n,readOnly:r},z.id))})]}),((h=(j=(p=i[T])==null?void 0:p.virksomheter)==null?void 0:j.root)==null?void 0:h.message)&&e.jsx(te,{children:(B=(U=i[T])==null?void 0:U.virksomheter.root)==null?void 0:B.message}),e.jsx("div",{children:e.jsx(q,{size:"small",variant:"tertiary",type:"button",onClick:v,icon:e.jsx(se,{"aria-hidden":!0}),children:e.jsx(s,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})})]})};N.transformValues=({egenVirksomhet:{harArbeidetIEgenVirksomhet:r,virksomheter:n}})=>({egenVirksomhet:{harArbeidetIEgenVirksomhet:r,virksomheter:r?n.map(a=>A.transformValues(a)):void 0}});N.__docgenInfo={description:`RegistrererVirksomhetPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder
foreldrepenger og søker har arbeidet i egen virksomhet.
Viser registrerte virksomheter samt knapp for å legge til nye virksomheter.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  egenVirksomhet: { harArbeidetIEgenVirksomhet, virksomheter },
}: VirksomhetFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]},alias:"VirksomhetFormValues"}}],returns:null}],displayName:"RegistrerVirksomhetPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const R=({readOnly:r=!0,alleKodeverk:n})=>{const a=G(),{watch:t}=E(),i=t(`${T}.harArbeidetIEgenVirksomhet`)||null;return e.jsx(le,{children:e.jsxs(f,{gap:"4",children:[e.jsx(ie,{size:"small",children:e.jsx(s,{id:"Registrering.EgenVirksomhet.Title"})}),e.jsx(oe,{name:`${T}.harArbeidetIEgenVirksomhet`,validate:[o],isReadOnly:r,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:a.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),i&&e.jsx(N,{readOnly:r,alleKodeverk:n})]})})};R.initialValues=()=>({[T]:{harArbeidetIEgenVirksomhet:void 0,virksomheter:[A.initialValues()]}});R.transformValues=N.transformValues;R.__docgenInfo={description:`EgenVirksomhetPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
Søker må oppgi om hen har arbdeidet i egen virksomhet.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  egenVirksomhet: { harArbeidetIEgenVirksomhet, virksomheter },
}: VirksomhetFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]},alias:"VirksomhetFormValues"}}],returns:null}],displayName:"EgenVirksomhetPanel",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const we=me(ge),y=({readOnly:r,alleKodeverk:n})=>e.jsx(ue,{value:we,children:e.jsx(R,{readOnly:r,alleKodeverk:n})});y.initialValues=R.initialValues;y.transformValues=R.transformValues;y.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  egenVirksomhet: { harArbeidetIEgenVirksomhet, virksomheter },
}: VirksomhetFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]},alias:"VirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const ze={title:"ui-komponenter/virksomhet",component:y,parameters:{submitCallback:Te("onSubmit")},args:{readOnly:!1,alleKodeverk:Ae},render:(r,{parameters:{submitCallback:n}})=>{const a=ke({defaultValues:y.initialValues()});return e.jsx(de,{formMethods:a,onSubmit:t=>n(y.transformValues(t)),children:e.jsxs(f,{gap:"10",children:[e.jsx(y,{...r}),e.jsx(q,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},F={};var _,L,$;F.parameters={...F.parameters,docs:{...(_=F.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...($=(L=F.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};const Xe=["Default"];export{F as Default,Xe as __namedExportsOrder,ze as default};
