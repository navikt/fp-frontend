import{j as t}from"./dayjs.min-BzWfLPQJ.js";import{t as g,P as m,m as p,O as k,a as y,b as v,c as b,d as q}from"./style-Cr589B4e.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./index-D16Yfzz8.js";const f=g(p),s=()=>t.jsx(m,{value:f}),i=s;s.__docgenInfo={description:"",methods:[],displayName:"MedlemskapFaktaIndex",props:{medlemskap:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  manuellBehandling: ManuellMedlemskapsBehandling;
  legacyManuellBehandling: LegacyManuellMedlemskapsBehandling;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}`,signature:{properties:[{key:"manuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  årsaker: MedlemskapAksjonspunktÅrsak[];
  resultat: MedelemskapsResultat;
}`,signature:{properties:[{key:"årsaker",value:{name:"Array",elements:[{name:"MedlemskapAksjonspunktÅrsak"}],raw:"MedlemskapAksjonspunktÅrsak[]",required:!0}},{key:"resultat",value:{name:"MedelemskapsResultat",required:!0}}]}}],raw:`Readonly<{
  årsaker: MedlemskapAksjonspunktÅrsak[];
  resultat: MedelemskapsResultat;
}>`,required:!0}},{key:"legacyManuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder: MedlemPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`}],raw:"MedlemPeriode[]",required:!0}}]}}],raw:`Readonly<{
  perioder: MedlemPeriode[];
}>`,required:!0}},{key:"regioner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"RegionPeriode[]",required:!0}},{key:"personstatuser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"PersonstatusPeriode[]",required:!0}},{key:"utenlandsopphold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  landkode: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"landkode",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  landkode: string;
}>`}],raw:"UtenlandsoppholdPeriode[]",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresse: Personadresse;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresse: Personadresse;
}>`}],raw:"AdressePeriode[]",required:!0}},{key:"oppholdstillatelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdstillatelseType: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdstillatelseType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdstillatelseType: string;
}>`}],raw:"OppholdstillatelsePeriode[]",required:!0}},{key:"medlemskapsperiode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  beslutningsdato: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"medlemskapType",value:{name:"string",required:!0}},{key:"dekningType",value:{name:"string",required:!0}},{key:"beslutningsdato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  beslutningsdato: string;
}>`}],raw:"MedlemskapPeriode[]",required:!0}},{key:"annenpart",value:{name:"signature",type:"object",raw:`{
  adresser: AdressePeriode[];
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresse: Personadresse;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresse: Personadresse;
}>`}],raw:"AdressePeriode[]",required:!0}},{key:"regioner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"RegionPeriode[]",required:!0}},{key:"personstatuser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"PersonstatusPeriode[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  manuellBehandling: ManuellMedlemskapsBehandling;
  legacyManuellBehandling: LegacyManuellMedlemskapsBehandling;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}>`},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    };
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""}}};const h={uuid:"1",versjon:1,type:b.FORSTEGANGSSOKNAD,behandlingPaaVent:!1,status:q.BEHANDLING_UTREDES},j={oppgittFordeling:{startDatoForPermisjon:"2019-01-01"},oppgittTilknytning:{oppholdNorgeNa:!0,oppholdNestePeriode:!0,oppholdSistePeriode:!0,utlandsoppholdFor:[{landNavn:"SVERIGE",fom:"2010-01-01",tom:"2011-01-01"}],utlandsoppholdEtter:[{landNavn:"DANMARK",fom:"2018-01-01",tom:"2019-01-01"}]},termindato:"2018-01-01"},M={title:"fakta/fakta-medlemskap-v3",component:i},P=({medlemskap:o,aksjonspunkter:d,submitCallback:l,alleMerknaderFraBeslutter:u})=>t.jsx(i,{behandling:h,medlemskap:o,soknad:j,aksjonspunkter:d,alleKodeverk:v,alleMerknaderFraBeslutter:u,submitCallback:l,readOnly:!1,harApneAksjonspunkter:!0,submittable:!0,setFormData:()=>{}}),e=P.bind({});e.args={medlemskap:{aksjonspunkt:{årsaker:["OPPHOLDSRETT"]},oppholdstillatelser:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{fom:"2019-01-01",tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapsperiode:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",beslutningsdato:"2020-02-01"}],utenlandsopphold:[{fom:"2019-01-01",tom:"2021-10-13",landkode:"DNK"}],adresser:[{fom:"2019-01-01",tom:"2021-10-13",adresse:{adresseType:k.BOSTEDSADRESSE,adresselinje1:"Adresse 1",adresselinje2:"Adresse 2",adresselinje3:"Adresse 3",poststed:"poststed",postNummer:"1234"}}],regioner:[{fom:"2019-01-01",tom:"2021-10-13",type:"NORDEN"}],personstatuser:[{fom:"2019-01-01",tom:"2021-10-13",type:"BOSATT"}]},aksjonspunkter:[],alleMerknaderFraBeslutter:{},submitCallback:y("button-click")};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  medlemskap,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,M as default};
