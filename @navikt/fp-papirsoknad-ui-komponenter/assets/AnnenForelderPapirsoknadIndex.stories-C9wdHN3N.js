import{j as r}from"./index-Byyjg8XX.js";import{a as E,e as M,A as j,y as U,G as H,V as y,b as S,M as I,Y as B,P as x,r as _,f as G,m as L,c as $,N as Y,B as D}from"./nb_NO-DYUjll3t.js";import{e as m,I as C,F as X,M as z,a as J}from"./index.es-fv94KH-L.js";import"./withPanelData-CkwF9r8U.js";import{r as Q}from"./index-C4XKfyRp.js";import"./aktivitetStatus-B1m96ipJ.js";import{a as W}from"./alleKodeverk-DO07GSZv.js";import{L as Z}from"./landkoder-tJDPMx5C.js";import{T as k}from"./TrueFalseInput-Daw7nzYV.js";import{M as ee}from"./message-BrM6o7bT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DTjSd7F1.js";import"./dayjs.min-DkLNzaWO.js";import"./v4-CtRu48qb.js";import"./entry-preview-w9Yyb_VL.js";import"./iframe-DamG_XGQ.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";var d=(e=>(e.UKJENT_FORELDER="UKJENT_FORELDER",e.IKKE_NORSK_FNR="IKKE_NORSK_FNR",e))(d||{});const t="annenForelder",g="kanIkkeOppgiBegrunnelse",re="_inputBredde_138ho_1",c={inputBredde:re},ne=e=>e.filter(({kode:l})=>l!==Z.NORGE).map(({kode:l,navn:n})=>r.jsx("option",{value:l,children:n},l)),F=({readOnly:e=!0,alleKodeverk:l,fagsakPersonnummer:n})=>{const{formatMessage:a}=E(),{watch:s,trigger:o,formState:{isSubmitted:A}}=M(),R=s(`${t}.kanIkkeOppgiAnnenForelder`),f=s(`${t}.${g}`),b=l.Landkoder,V=Q.useMemo(()=>b.slice().sort((u,N)=>u.navn.localeCompare(N.navn)),[b]);return r.jsxs(r.Fragment,{children:[r.jsx(j,{name:`${t}.foedselsnummer`,label:a({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:u=>u&&u.toString().replace(/\s/g,""),readOnly:e,className:c.inputBredde,validate:R?[]:[m,C,X,z(n)],disabled:R}),r.jsx(U,{name:`${t}.kanIkkeOppgiAnnenForelder`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:e,onChange:()=>A?o():void 0}),R===!0&&r.jsx(H,{children:r.jsxs(y,{gap:"4",children:[r.jsx(S,{size:"small",children:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),r.jsx(I,{name:`${t}.${g}.arsak`,hideLegend:!0,validate:[m],isReadOnly:e,radios:[{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:d.UKJENT_FORELDER},{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:d.IKKE_NORSK_FNR}]}),(f==null?void 0:f.arsak)===d.IKKE_NORSK_FNR&&r.jsxs(r.Fragment,{children:[r.jsx(B,{name:`${t}.${g}.land`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:ne(V),validate:[m],className:c.inputBredde,readOnly:e}),r.jsx(j,{name:`${t}.${g}.utenlandskFoedselsnummer`,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[m],className:c.inputBredde,readOnly:e})]})]})})]})};F.transformValues=({foedselsnummer:e,kanIkkeOppgiAnnenForelder:l,kanIkkeOppgiBegrunnelse:{arsak:n,land:a,utenlandskFoedselsnummer:s}={}})=>l?{foedselsnummer:void 0,kanIkkeOppgiAnnenForelder:!0,kanIkkeOppgiBegrunnelse:n===d.IKKE_NORSK_FNR?{arsak:n,land:a,utenlandskFoedselsnummer:s}:{arsak:n}}:{foedselsnummer:e,kanIkkeOppgiAnnenForelder:!1,kanIkkeOppgiBegrunnelse:void 0};F.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const T=({readOnly:e,sokerErMor:l})=>{const n=E(),{watch:a}=M(),s=a(`${t}.sokerHarAleneomsorg`),o=a(`${t}.denAndreForelderenHarRettPaForeldrepenger`),A=a(`${t}.annenForelderRettEØS`);return r.jsxs(y,{gap:"4",children:[r.jsx(k,{name:`${t}.sokerHarAleneomsorg`,label:n.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg"}),readOnly:e}),s===!1&&r.jsx(k,{name:`${t}.denAndreForelderenHarRettPaForeldrepenger`,label:n.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger"}),readOnly:e}),s===!1&&o===!1&&r.jsx(k,{name:`${t}.annenForelderRettEØS`,label:n.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS"}),readOnly:e}),!l&&s===!1&&o===!1&&A===!1&&r.jsx(k,{name:`${t}.morMottarUføretrygd`,label:n.formatMessage({id:"Registrering.Permisjon.MorUføretrygd"}),readOnly:e})]})};T.transformValues=({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:l,annenForelderRettEØS:n,morMottarUføretrygd:a})=>({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:e===!1?l:void 0,annenForelderRettEØS:l===!1?n:void 0,morMottarUføretrygd:n===!1?a:void 0});T.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}}}],displayName:"PermisjonRettigheterPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const ae=_(L),i=({readOnly:e,alleKodeverk:l,fagsakPersonnummer:n,sokerErMor:a})=>r.jsx(x,{value:ae,children:r.jsx(G,{children:r.jsxs(y,{gap:"4",children:[r.jsx(S,{size:"small",children:r.jsx(ee,{id:"Registrering.TheOtherParent.Title"})}),r.jsx(F,{readOnly:e,fagsakPersonnummer:n,alleKodeverk:l}),r.jsx(T,{readOnly:e,sokerErMor:a})]})})});i.initialValues=()=>({[t]:{}});i.transformValues=({annenForelder:e})=>({[t]:{...T.transformValues(e),...F.transformValues(e)}});i.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const be={title:"ui-komponenter/annen-forelder",component:i,args:{readOnly:!1,alleKodeverk:W,fagsakPersonnummer:"07078518434"},parameters:{submitCallback:J("onSubmit")},render:(e,{parameters:{submitCallback:l}})=>{const n=$({defaultValues:i.initialValues()});return r.jsx(Y,{formMethods:n,onSubmit:a=>l(i.transformValues(a)),children:r.jsxs(y,{gap:"10",children:[r.jsx(i,{...e}),r.jsx(D,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},p={args:{sokerErMor:!0}},v={args:{sokerErMor:!1}};var q,O,P;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    sokerErMor: true
  }
}`,...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var w,K,h;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    sokerErMor: false
  }
}`,...(h=(K=v.parameters)==null?void 0:K.docs)==null?void 0:h.source}}};const je=["SokerErMor","SokerErFar"];export{v as SokerErFar,p as SokerErMor,je as __namedExportsOrder,be as default};
