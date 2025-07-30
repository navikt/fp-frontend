import{u as c,j as r,P as M}from"./iframe-BKAlD7kq.js";import{u as O,A as b,w as V,W as S,V as T,b as j,M as w,O as E,r as N,l as B,m as U,d as H,N as I,B as _}from"./nb_NO-BBa2qQ2A.js";import{a as x}from"./alleKodeverk-DO07GSZv.js";import{t as g,I as G,N as L,y as Y}from"./index.es-BwStEKym.js";import{L as D}from"./landkoder-Bgpqk6-g.js";import{T as m}from"./TrueFalseInput-Dl_7nYBb.js";import{M as $}from"./message-CJeKdNGh.js";import"./index-ChRUIYyj.js";var k=(e=>(e.UKJENT_FORELDER="UKJENT_FORELDER",e.IKKE_NORSK_FNR="IKKE_NORSK_FNR",e))(k||{});const t="annenForelder",p="kanIkkeOppgiBegrunnelse",C="_inputBredde_138ho_1",f={inputBredde:C},X=e=>e.filter(({kode:s})=>s!==D.NORGE).map(({kode:s,navn:n})=>r.jsx("option",{value:s,children:n},s)),A=({readOnly:e=!0,alleKodeverk:s,fagsakPersonnummer:n})=>{const{formatMessage:a}=c(),{watch:i,control:l,trigger:d,formState:{isSubmitted:q}}=O(),R=i(`${t}.kanIkkeOppgiAnnenForelder`),K=i(`${t}.${p}`),P=s.Landkoder.slice().sort((o,h)=>o.navn.localeCompare(h.navn));return r.jsxs(r.Fragment,{children:[r.jsx(b,{name:`${t}.foedselsnummer`,control:l,label:a({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:o=>o&&o.toString().replace(/\s/g,""),readOnly:e,className:f.inputBredde,validate:R?[]:[g,G,L,Y(n)],disabled:R}),r.jsx(V,{name:`${t}.kanIkkeOppgiAnnenForelder`,control:l,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:e,onChange:()=>q?d():void 0}),R===!0&&r.jsx(S,{children:r.jsxs(T,{gap:"4",children:[r.jsx(j,{size:"small",children:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),r.jsx(w,{name:`${t}.${p}.arsak`,control:l,hideLegend:!0,validate:[g],isReadOnly:e,radios:[{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:k.UKJENT_FORELDER},{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:k.IKKE_NORSK_FNR}]}),K?.arsak===k.IKKE_NORSK_FNR&&r.jsxs(r.Fragment,{children:[r.jsx(E,{name:`${t}.${p}.land`,control:l,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:X(P),validate:[g],className:f.inputBredde,readOnly:e}),r.jsx(b,{name:`${t}.${p}.utenlandskFoedselsnummer`,control:l,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[g],className:f.inputBredde,readOnly:e})]})]})})]})};A.transformValues=({foedselsnummer:e,kanIkkeOppgiAnnenForelder:s,kanIkkeOppgiBegrunnelse:{arsak:n,land:a,utenlandskFoedselsnummer:i}={}})=>s?{foedselsnummer:void 0,kanIkkeOppgiAnnenForelder:!0,kanIkkeOppgiBegrunnelse:n===k.IKKE_NORSK_FNR?{arsak:n,land:a,utenlandskFoedselsnummer:i}:{arsak:n}}:{foedselsnummer:e,kanIkkeOppgiAnnenForelder:!1,kanIkkeOppgiBegrunnelse:void 0};A.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  foedselsnummer,
  kanIkkeOppgiAnnenForelder,
  kanIkkeOppgiBegrunnelse: { arsak, land, utenlandskFoedselsnummer } = {},
}: AnnenForelderSubFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]},alias:"AnnenForelderSubFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}}}}],displayName:"OppgiAnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const F=({readOnly:e,sokerErMor:s})=>{const n=c(),{watch:a,control:i}=O(),l=a(`${t}.sokerHarAleneomsorg`),d=a(`${t}.denAndreForelderenHarRettPaForeldrepenger`),q=a(`${t}.annenForelderRettEØS`);return r.jsxs(T,{gap:"4",children:[r.jsx(m,{name:`${t}.sokerHarAleneomsorg`,control:i,label:n.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg"}),readOnly:e}),l===!1&&r.jsx(m,{name:`${t}.denAndreForelderenHarRettPaForeldrepenger`,control:i,label:n.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger"}),readOnly:e}),l===!1&&d===!1&&r.jsx(m,{name:`${t}.annenForelderRettEØS`,control:i,label:n.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS"}),readOnly:e}),!s&&l===!1&&d===!1&&q===!1&&r.jsx(m,{name:`${t}.morMottarUføretrygd`,control:i,label:n.formatMessage({id:"Registrering.Permisjon.MorUføretrygd"}),readOnly:e})]})};F.transformValues=({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:s,annenForelderRettEØS:n,morMottarUføretrygd:a})=>({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:e===!1?s:void 0,annenForelderRettEØS:s===!1?n:void 0,morMottarUføretrygd:n===!1?a:void 0});F.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  sokerHarAleneomsorg,
  denAndreForelderenHarRettPaForeldrepenger,
  annenForelderRettEØS,
  morMottarUføretrygd,
}: PermisjonRettigheterFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]},alias:"PermisjonRettigheterFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}}}],displayName:"PermisjonRettigheterPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const z=N(U),u=({readOnly:e,alleKodeverk:s,fagsakPersonnummer:n,sokerErMor:a})=>r.jsx(M,{value:z,children:r.jsx(B,{children:r.jsxs(T,{gap:"4",children:[r.jsx(j,{size:"small",children:r.jsx($,{id:"Registrering.TheOtherParent.Title"})}),r.jsx(A,{readOnly:e,fagsakPersonnummer:n,alleKodeverk:s}),r.jsx(F,{readOnly:e,sokerErMor:a})]})})});u.initialValues=()=>({[t]:{}});u.transformValues=({annenForelder:e})=>({[t]:{...F.transformValues(e),...A.transformValues(e)}});u.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
}`,signature:{properties:[{key:"annenForelder",value:{name:"intersection",raw:"AnnenForelderSubFormValues & PermisjonRettigheterFormValues",elements:[{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  annenForelder,
}: AnnenForelderFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
}`,signature:{properties:[{key:"annenForelder",value:{name:"intersection",raw:"AnnenForelderSubFormValues & PermisjonRettigheterFormValues",elements:[{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"AnnenForelderFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
}`,signature:{properties:[{key:"annenForelder",value:{name:"intersection",raw:"AnnenForelderSubFormValues & PermisjonRettigheterFormValues",elements:[{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}}],displayName:"AnnenForelderPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:J}=__STORYBOOK_MODULE_ACTIONS__,le={title:"ui-komponenter/annen-forelder",component:u,args:{readOnly:!1,alleKodeverk:x,fagsakPersonnummer:"07078518434"},parameters:{submitCallback:J("onSubmit")},render:(e,{parameters:{submitCallback:s}})=>{const n=H({defaultValues:u.initialValues()});return r.jsx(I,{formMethods:n,onSubmit:a=>s(u.transformValues(a)),children:r.jsxs(T,{gap:"10",children:[r.jsx(u,{...e}),r.jsx(_,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},y={args:{sokerErMor:!0}},v={args:{sokerErMor:!1}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    sokerErMor: true
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    sokerErMor: false
  }
}`,...v.parameters?.docs?.source}}};const ie=["SokerErMor","SokerErFar"];export{v as SokerErFar,y as SokerErMor,ie as __namedExportsOrder,le as default};
