import{j as t}from"./dayjs.min-BzWfLPQJ.js";import{g as U,B as G,o as K,P as H,c as C,S as $,v as z,M as y,a as k,K as v,b as h,O as D,r as P,V as f,L as Y,d as J,D as W,u as Q,H as X,A as M,e as Z,f as ee,Y as ne,F as re,h as ae,t as te,i as se,m as ie,j as oe,k as de,l as le,n as ue}from"./style-Bo58GmKL.js";import{r as q,R as w}from"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./index-D16Yfzz8.js";var ge=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const me=q.forwardRef((e,n)=>{var{children:r,className:a,as:s="div",background:i,borderColor:o,borderWidth:u,borderRadius:g,shadow:m,style:b,asChild:d}=e,R=ge(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const _=Object.assign(Object.assign(Object.assign({},b),{"--__ac-box-background":i?`var(--a-${i})`:void 0,"--__ac-box-shadow":m?`var(--a-shadow-${m})`:void 0,"--__ac-box-border-color":o?`var(--a-${o})`:void 0,"--__ac-box-border-width":u?u.split(" ").map(x=>`${x}px`).join(" "):void 0}),U("box","border-radius","border-radius",g,!1,["0"])),L=d?$:s;return w.createElement(G,Object.assign({},R),w.createElement(L,Object.assign({},K(R,H),{ref:n,style:_,className:C("navds-box",a,{"navds-box-bg":i,"navds-box-border-color":o,"navds-box-border-width":u,"navds-box-border-radius":g,"navds-box-shadow":m})}),r))});var E=(e=>(e.BOSATT_UTENLANDSOPPHOLD="BOSATT_UTENLANDSOPPHOLD",e.BOSATT_MANGLENDE_BOSTEDSADRESSE="BOSATT_MANGLENDE_BOSTEDSADRESSE",e.BOSATT_UTENLANDSADRESSE="BOSATT_UTENLANDSADRESSE",e.BOSATT_UGYLDIG_PERSONSTATUS="BOSATT_UGYLDIG_PERSONSTATUS",e.TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD="TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD",e.EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT="EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT",e.MEDL_PERIODER="MEDL_PERIODER",e))(E||{});const F=({aksjonspunkter:e})=>e.length>0?t.jsx(z,{children:t.jsx(y,{id:"AksjonspunktHelpText.HarMedlemskap"})}):t.jsx(t.Fragment,{});F.__docgenInfo={description:"",methods:[],displayName:"AksjonspunktHelpText",props:{aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]"},description:""}}};const j=(e,n)=>{const r=e.tom?new Date(e.tom):new Date(P),a=n.tom?new Date(n.tom):new Date(P);if(r>a)return-1;if(r<a)return 1;const s=new Date(e.fom),i=new Date(n.fom);return s>i?-1:s<i?1:0},pe=e=>e.toLowerCase().split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" "),c=(e,n)=>n.formatMessage({id:"Situasjon.ILand"},{land:pe(e)}),ke=e=>{var a;const n=k[v.REGION],r=e.regioner.sort(j)[0];return((a=n.find(s=>s.kode===r.type))==null?void 0:a.navn)??"-"},ye=e=>{const n=e.personstatuser.sort(j)[0];if(n){const r=h(k)(n.type,v.PERSONSTATUS_TYPE);if(r)return r}return"-"},ve=(e,n)=>{var a;const r=(a=e.adresser.filter(s=>s.adresse.adresseType===D.BOSTEDSADRESSE).sort(j)[0])==null?void 0:a.adresse.land;if(r){const s=h(k)(r,v.LANDKODER);if(s)return c(s,n)}return"-"},T=(e,n)=>{if(e.length==1)return c(e[0].landNavn,n);if(e.length>1)return n.formatMessage({id:"Situasjon.FlereLand"});const r=h(k)("NOR",v.LANDKODER);return c(r,n)},l=({labelFormatId:e,value:n,sourceFormatId:r})=>t.jsx(me,{background:"bg-subtle",minWidth:"200px",paddingBlock:"2",paddingInline:"4",borderRadius:"medium",children:t.jsxs(f,{gap:"6",children:[t.jsxs("div",{children:[t.jsx(Y,{size:"small",children:t.jsx(y,{id:e})}),t.jsx(J,{size:"large",children:n})]}),t.jsx(W,{uppercase:!0,children:t.jsx(y,{id:r})})]})});l.__docgenInfo={description:"",methods:[],displayName:"Situasjon",props:{labelFormatId:{required:!0,tsType:{name:"literal",value:"`SituasjonLabel.${string}`"},description:""},value:{required:!0,tsType:{name:"string"},description:""},sourceFormatId:{required:!0,tsType:{name:"literal",value:"`SituasjonSource.${string}`"},description:""}}};const B=({soknad:e,medlemskap:n})=>{const r=Q();return t.jsxs(X,{gap:"2",children:[t.jsx(l,{labelFormatId:"SituasjonLabel.HarBodd",value:T(e.oppgittTilknytning.utlandsoppholdFor,r),sourceFormatId:"SituasjonSource.Soknad"}),t.jsx(l,{labelFormatId:"SituasjonLabel.SkalBo",value:T(e.oppgittTilknytning.utlandsoppholdEtter,r),sourceFormatId:"SituasjonSource.Soknad"}),t.jsx(l,{labelFormatId:"SituasjonLabel.SisteAdresse",value:ve(n,r),sourceFormatId:"SituasjonSource.FREG"}),t.jsx(l,{labelFormatId:"SituasjonLabel.Statborgerskap",value:ke(n),sourceFormatId:"SituasjonSource.FREG"}),t.jsx(l,{labelFormatId:"SituasjonLabel.Personstatus",value:ye(n),sourceFormatId:"SituasjonSource.FREG"})]})};B.__docgenInfo={description:"",methods:[],displayName:"SituasjonOversikt",props:{medlemskap:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}`,signature:{properties:[{key:"manuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}`,signature:{properties:[{key:"avvik",value:{name:"Array",elements:[{name:"MedlemskapAvvik"}],raw:"MedlemskapAvvik[]",required:!0}},{key:"resultat",value:{name:"MedlemskapResultat",required:!1}}]}}],raw:`Readonly<{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}>`,required:!1}},{key:"legacyManuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"regioner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
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
}>`},description:""}}};const be=[M.AVKLAR_OM_BRUKER_ER_BOSATT],fe=e=>{const n=e.find(r=>be.some(a=>r.definisjon==a));return{begrunnelse:n==null?void 0:n.begrunnelse,vurdering:void 0}},O=({submittable:e,readOnly:n,submitCallback:r,aksjonspunkter:a,medlemskap:s,soknad:i})=>{const[o,u]=q.useState(!1),g=Z({defaultValues:fe(a)}),m=g.watch("begrunnelse"),b=q.useCallback(d=>(u(!0),r([])),[]);return t.jsxs(f,{gap:"6",children:[a.some(d=>d.status===ee.OPPRETTET)&&t.jsx(F,{aksjonspunkter:a}),t.jsx(B,{medlemskap:s,soknad:i}),t.jsx(ne,{formMethods:g,onSubmit:d=>b(d),children:t.jsxs(f,{gap:"6",children:[t.jsx(re,{isReadOnly:n,isSubmittable:e,hasBegrunnelse:!!m}),!n&&a.length>0&&t.jsx("div",{children:t.jsx(ae,{size:"small",variant:"primary",disabled:o,loading:o,type:"submit",children:t.jsx(y,{id:"MedlemskapInfoPanel.Submit"})})})]})})]})};O.__docgenInfo={description:`MedlemskapInfoPanel

Har ansvar for å vise faktapanelene for medlemskap.`,methods:[],displayName:"MedlemskapInfoPanel",props:{medlemskap:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}`,signature:{properties:[{key:"manuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}`,signature:{properties:[{key:"avvik",value:{name:"Array",elements:[{name:"MedlemskapAvvik"}],raw:"MedlemskapAvvik[]",required:!0}},{key:"resultat",value:{name:"MedlemskapResultat",required:!1}}]}}],raw:`Readonly<{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}>`,required:!1}},{key:"legacyManuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"regioner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
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
}>`},description:""}}};const qe=te(ie),I=e=>t.jsx(se,{value:qe,children:t.jsx(O,{...e})}),V=I;I.__docgenInfo={description:"",methods:[],displayName:"MedlemskapFaktaIndex",props:{medlemskap:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}`,signature:{properties:[{key:"manuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}`,signature:{properties:[{key:"avvik",value:{name:"Array",elements:[{name:"MedlemskapAvvik"}],raw:"MedlemskapAvvik[]",required:!0}},{key:"resultat",value:{name:"MedlemskapResultat",required:!1}}]}}],raw:`Readonly<{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}>`,required:!1}},{key:"legacyManuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"regioner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
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
}>`},description:""}}};const ce={uuid:"1",versjon:1,type:le.FORSTEGANGSSOKNAD,behandlingPaaVent:!1,status:ue.BEHANDLING_UTREDES},Se={title:"fakta/fakta-medlemskap-v3",component:V},he=({medlemskap:e,soknad:n,aksjonspunkter:r,submitCallback:a,alleMerknaderFraBeslutter:s})=>t.jsx(V,{behandling:ce,medlemskap:e,soknad:n,aksjonspunkter:r,alleKodeverk:k,alleMerknaderFraBeslutter:s,submitCallback:a,readOnly:!1,harApneAksjonspunkter:!0,submittable:!0,setFormData:()=>{}}),p=he.bind({});p.args={soknad:{oppgittFordeling:{startDatoForPermisjon:"2019-01-01"},oppgittTilknytning:{oppholdNorgeNa:!0,oppholdNestePeriode:!0,oppholdSistePeriode:!0,utlandsoppholdFor:[{landNavn:"SVERIGE",fom:"2010-01-01",tom:"2011-01-01"}],utlandsoppholdEtter:[{landNavn:"DANMARK",fom:"2018-01-01",tom:"2019-01-01"}]},termindato:"2018-01-01"},medlemskap:{manuellBehandling:{avvik:[E.TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD]},oppholdstillatelser:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{fom:"2019-01-01",tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapsperiode:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",beslutningsdato:"2020-02-01"}],utenlandsopphold:[{fom:"2019-01-01",tom:"2021-10-13",landkode:"DNK"}],adresser:[{fom:"2019-01-01",tom:"2021-10-13",adresse:{adresseType:D.BOSTEDSADRESSE,adresselinje1:"Adresse 1",adresselinje2:"Adresse 2",adresselinje3:"Adresse 3",poststed:"poststed",postNummer:"1234",land:"NOR"}}],regioner:[{fom:"2019-01-01",tom:"2021-10-13",type:"NORDEN"}],personstatuser:[{fom:"2019-01-01",tom:"2021-10-13",type:"BOSA"}]},aksjonspunkter:[{definisjon:M.AVKLAR_FORTSATT_MEDLEMSKAP,status:oe.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{},submitCallback:de("button-click")};var S,A,N;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`({
  medlemskap,
  soknad,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(N=(A=p.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const Ae=["Default"];export{p as Default,Ae as __namedExportsOrder,Se as default};
