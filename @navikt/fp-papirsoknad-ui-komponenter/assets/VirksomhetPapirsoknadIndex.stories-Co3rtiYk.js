import{u as N,j as e,t as m,O,k as D,T as C,g as U,L as J,M as x,r as B,P as z,a as X}from"./iframe-DYORZiXE.js";import{u as v,W as F,V as b,O as W,H as Q,P,A as h,L as Z,C as Y,c as I,e as ee,B as j,j as re,i as ne,k as ae,a as te,E as se,n as ie,l as le,b as ue,M as ke,m as oe,d as de,N as ge}from"./nb_NO-C4hDyxYQ.js";import{a as me}from"./alleKodeverk-DO07GSZv.js";import{T as f}from"./TrueFalseInput-C22oDIIj.js";import{M as i}from"./message-BkRwhc4P.js";import{T as g,S as ye}from"./Table-fFElO6QP.js";import{S as ve}from"./Trash-Daj_wZMh.js";import"./index-DEkgERyQ.js";var y=(r=>(r.FISKE="FISKE",r.FRILANSER="FRILANSER",r.DAGMAMMA="DAGMAMMA",r.JORDBRUK_ELLER_SKOGBRUK="JORDBRUK_SKOGBRUK",r.ANNEN="ANNEN",r))(y||{});const A="egenVirksomhet",l=`${A}.virksomheter`,pe={},Te=r=>r.map(({kode:n,navn:a})=>e.jsx("option",{value:n,children:a},n)),c=({index:r,readOnly:n,alleKodeverk:a})=>{const t=N(),s=a.Landkoder.slice().sort((d,k)=>d.navn.localeCompare(k.navn)),{getValues:o,control:u}=v();return e.jsx(f,{name:`${l}.${r}.virksomhetRegistrertINorge`,control:u,label:e.jsx(i,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),readOnly:n,trueContent:e.jsx(F,{marginTop:8,children:e.jsx(h,{name:`${l}.${r}.organisasjonsnummer`,control:u,readOnly:n,validate:[m,U,J],label:e.jsx(i,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})}),falseContent:e.jsx(F,{alignOffset:58,marginTop:8,children:e.jsxs(b,{gap:"4",children:[e.jsx(W,{name:`${l}.${r}.landJobberFra`,control:u,className:pe.landBredde,selectValues:Te(s),validate:[m],label:t.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),e.jsxs(Q,{gap:"4",children:[e.jsx(P,{name:`${l}.${r}.fom`,control:u,isReadOnly:n,validate:[m,O,D],label:t.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})}),e.jsx(P,{name:`${l}.${r}.tom`,control:u,isReadOnly:n,validate:[O,d=>{const k=o(`${l}.${r}.fom`);return k?C(k,d):null}],label:t.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})]})]})})})};c.transformValues=({virksomhetRegistrertINorge:r,organisasjonsnummer:n,landJobberFra:a,fom:t,tom:s})=>({virksomhetRegistrertINorge:r,organisasjonsnummer:r?n:void 0,...r===!1?{landJobberFra:a,fom:t,tom:s}:{landJobberFra:"NOR"}});c.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const w=({index:r,readOnly:n})=>{const{control:a}=v();return e.jsx(f,{name:`${l}.${r}.harRegnskapsforer`,control:a,label:e.jsx(i,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),readOnly:n,trueContent:e.jsx(F,{marginTop:8,children:e.jsxs(b,{gap:"4",children:[e.jsx(h,{name:`${l}.${r}.navnRegnskapsforer`,control:a,readOnly:n,validate:[m,x],label:e.jsx(i,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),e.jsx(h,{name:`${l}.${r}.tlfRegnskapsforer`,control:a,readOnly:n,validate:[m,U],label:e.jsx(i,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]})})})};w.transformValues=({harRegnskapsforer:r,navnRegnskapsforer:n,tlfRegnskapsforer:a})=>({harRegnskapsforer:r,...r?{navnRegnskapsforer:n}:{},...r?{tlfRegnskapsforer:a}:{}});w.__docgenInfo={description:`VirksomhetRegnskapPanel

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
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const L=({readOnly:r,index:n})=>{const{control:a}=v();return e.jsx(f,{name:`${l}.${n}.familieEllerVennerTilknyttetNaringen`,control:a,label:e.jsx(i,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),readOnly:r,isHorizontal:!1,trueLabel:e.jsx(i,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),falseLabel:e.jsx(i,{id:"Registrering.VirksomhetRelasjonPanel.No"})})};L.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const Ae="_inntektBredde_1xgnj_1",qe={inntektBredde:Ae},S=({readOnly:r,index:n})=>{const{control:a}=v();return e.jsx(f,{name:`${l}.${n}.varigEndretEllerStartetSisteFireAr`,control:a,label:e.jsx(i,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),readOnly:r,trueContent:e.jsx(F,{marginTop:8,children:e.jsxs(b,{gap:"4",children:[e.jsx(Z,{size:"small",children:e.jsx(i,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),e.jsxs(Y,{name:`${l}.${n}.varigEndretEllerStartetSisteFireArArsak`,control:a,validate:[m],children:[e.jsx(G,{value:"harVarigEndring",label:e.jsx(i,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"}),readOnly:r,index:n}),e.jsx(I,{value:"erNyoppstartet",readOnly:r,children:e.jsx(i,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})}),e.jsx(G,{value:"erNyIArbeidslivet",label:e.jsx(i,{id:"Registrering.VirksomhetStartetPanel.NyIArbeidslivet"}),readOnly:r,index:n})]}),e.jsx(ee,{name:`${l}.${n}.beskrivelseAvEndring`,control:a,label:e.jsx(i,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[x]}),e.jsx(h,{name:`${l}.${n}.inntekt`,control:a,label:e.jsx(i,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:r,validate:[U,m],className:qe.inntektBredde,parse:t=>{const s=parseInt(t.toString(),10);return Number.isNaN(s)?t:s}})]})})})};S.transformValues=({varigEndretEllerStartetSisteFireAr:r,varigEndretEllerStartetSisteFireArArsak:n,varigEndringGjeldendeFom:a,nyIArbeidslivetFom:t,beskrivelseAvEndring:s,inntekt:o})=>{const u=n.includes("harVarigEndring"),d=n.includes("erNyoppstartet"),k=n.includes("erNyIArbeidslivet");return{varigEndretEllerStartetSisteFireAr:r,...r?{harVarigEndring:u,...u?{varigEndringGjeldendeFom:a}:{},erNyoppstartet:d,erNyIArbeidslivet:k,...k?{nyIArbeidslivetFom:t}:{},beskrivelseAvEndring:s,inntekt:o}:{}}};const G=({value:r,label:n,readOnly:a,index:t})=>{const{watch:s,control:o}=v(),u=s(`${l}.${t}.varigEndretEllerStartetSisteFireArArsak`),[d,k]=B.useState(u.includes(r));return e.jsxs(b,{gap:"2",children:[e.jsx(I,{value:r,onClick:()=>k(!d),disabled:a,children:n}),d&&e.jsx(F,{marginTop:8,children:e.jsx(P,{name:r==="harVarigEndring"?`${l}.${t}.varigEndringGjeldendeFom`:`${l}.${t}.nyIArbeidslivetFom`,control:o,isReadOnly:a,validate:[O,m],label:e.jsx(i,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]})};S.__docgenInfo={description:`VirksomhetStartetEndretPanel

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
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]},alias:"StartedEndretFormValues"}}],returns:null}],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const H={[y.DAGMAMMA]:1,[y.FISKE]:2,[y.JORDBRUK_ELLER_SKOGBRUK]:3,[y.ANNEN]:4},K=({readOnly:r,alleKodeverk:n,index:a})=>{const{control:t}=v();return e.jsx(Y,{name:`${l}.${a}.typeVirksomhet`,control:t,label:e.jsx(i,{id:"Registrering.VirksomhetNaeringTypePanel.Title"}),validate:[m],isReadOnly:r,children:be(n).map(s=>e.jsx(I,{value:s.kode,readOnly:r,children:s.navn},s.kode))})};K.transformValues=({typeVirksomhet:r})=>({typeVirksomhet:{ANNEN:r.includes(y.ANNEN),FISKE:r.includes(y.FISKE),DAGMAMMA:r.includes(y.DAGMAMMA),JORDBRUK_SKOGBRUK:r.includes(y.JORDBRUK_ELLER_SKOGBRUK)}});const be=r=>r.VirksomhetType.filter(n=>n.kode!==y.FRILANSER).sort((n,a)=>Re(H[n.kode],H[a.kode])),Re=(r,n)=>r>n?1:r<n?-1:0;K.__docgenInfo={description:`VirksomhetTypeNaringPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const q=({open:r,readOnly:n=!1,alleKodeverk:a,index:t,remove:s})=>{const{getFieldState:o,watch:u,control:d}=v(),{error:k}=o(`${l}.${t}`),M=u(`${l}.${t}.navn`),[p,_]=B.useState(r);return e.jsxs(g.Row,{shadeOnHover:!1,style:{backgroundColor:k&&!p?"var(--a-red-50)":"none"},children:[e.jsx(g.DataCell,{valign:"top",children:e.jsx(j,{type:"button",variant:"tertiary-neutral",onClick:()=>_($=>!$),icon:p?e.jsx(ye,{"aria-label":"Vis mindre"}):e.jsx(re,{"aria-label":"Vis mer"})})}),e.jsxs(g.DataCell,{valign:"top",children:[e.jsx(ne,{hidden:p,paddingBlock:"3",children:e.jsx(ae,{weight:"semibold",children:M})}),e.jsxs(b,{gap:"4",hidden:!p,children:[e.jsx(h,{name:`${l}.${t}.navn`,control:d,validate:[m],label:e.jsx(i,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),readOnly:n}),e.jsx(c,{readOnly:n,index:t,alleKodeverk:a}),e.jsx(K,{readOnly:n,index:t,alleKodeverk:a}),e.jsx(S,{readOnly:n,index:t}),e.jsx(w,{readOnly:n,index:t}),e.jsx(L,{readOnly:n,index:t})]})]}),e.jsx(g.DataCell,{valign:"top",align:"right",children:e.jsx(j,{type:"button",variant:"tertiary-neutral",onClick:s,onKeyDown:s,icon:e.jsx(ve,{"aria-label":"Slett rad"})})})]})};q.initialValues=()=>({varigEndretEllerStartetSisteFireArArsak:[],typeVirksomhet:[]});q.transformValues=r=>({navn:r.navn,...c.transformValues(r),...K.transformValues(r),...S.transformValues(r),...w.transformValues(r),familieEllerVennerTilknyttetNaringen:r.familieEllerVennerTilknyttetNaringen});q.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`IdFormValues &
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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const E=({readOnly:r=!1,alleKodeverk:n})=>{const a=N(),{control:t,formState:{errors:s}}=v(),{fields:o,remove:u,append:d}=te({control:t,name:`${A}.virksomheter`,rules:{required:a.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}}),k=()=>{d(q.initialValues())};return B.useEffect(()=>{o.length===0&&k()},[]),e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx(g.Header,{children:e.jsxs(g.Row,{children:[e.jsx(g.HeaderCell,{style:{width:"48px"}}),e.jsx(g.HeaderCell,{children:e.jsx(i,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),e.jsx(g.HeaderCell,{style:{width:"48px"}})]})}),e.jsx(g.Body,{children:o.map((M,p)=>e.jsx(q,{index:p,open:p+1===o.length,remove:()=>u(p),alleKodeverk:n,readOnly:r},M.id))})]}),s[A]?.virksomheter?.root?.message&&e.jsx(se,{children:s[A]?.virksomheter.root?.message}),e.jsx("div",{children:e.jsx(j,{size:"small",variant:"tertiary",type:"button",onClick:k,icon:e.jsx(ie,{"aria-hidden":!0}),children:e.jsx(i,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})})]})};E.transformValues=({egenVirksomhet:{harArbeidetIEgenVirksomhet:r,virksomheter:n}})=>({egenVirksomhet:{harArbeidetIEgenVirksomhet:r,virksomheter:r?n.map(a=>q.transformValues(a)):void 0}});E.__docgenInfo={description:`RegistrererVirksomhetPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const R=({readOnly:r=!0,alleKodeverk:n})=>{const a=N(),{watch:t,control:s}=v(),o=t(`${A}.harArbeidetIEgenVirksomhet`)||null;return e.jsx(le,{children:e.jsxs(b,{gap:"4",children:[e.jsx(ue,{size:"small",children:e.jsx(i,{id:"Registrering.EgenVirksomhet.Title"})}),e.jsx(ke,{name:`${A}.harArbeidetIEgenVirksomhet`,control:s,validate:[m],isReadOnly:r,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:a.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),o&&e.jsx(E,{readOnly:r,alleKodeverk:n})]})})};R.initialValues=()=>({[A]:{harArbeidetIEgenVirksomhet:void 0,virksomheter:[q.initialValues()]}});R.transformValues=E.transformValues;R.__docgenInfo={description:`EgenVirksomhetPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Fe=X(oe),T=({readOnly:r,alleKodeverk:n})=>e.jsx(z,{value:Fe,children:e.jsx(R,{readOnly:r,alleKodeverk:n})});T.initialValues=R.initialValues;T.transformValues=R.transformValues;T.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const{action:he}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"ui-komponenter/virksomhet",component:T,parameters:{submitCallback:he("onSubmit")},args:{readOnly:!1,alleKodeverk:me},render:(r,{parameters:{submitCallback:n}})=>{const a=de({defaultValues:T.initialValues()});return e.jsx(ge,{formMethods:a,onSubmit:t=>n(T.transformValues(t)),children:e.jsxs(b,{gap:"10",children:[e.jsx(T,{...r}),e.jsx(j,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},V={};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"{}",...V.parameters?.docs?.source}}};const Oe=["Default"];export{V as Default,Oe as __namedExportsOrder,Me as default};
