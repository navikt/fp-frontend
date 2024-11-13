var Iu=Object.defineProperty;var Du=(s,i,o)=>i in s?Iu(s,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[i]=o;var Kr=(s,i,o)=>Du(s,typeof i!="symbol"?i+"":i,o);import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as V,R as Zr,c as Ku,g as Bu}from"./index-DRjF_FHU.js";import{W as Q,H as L,L as q,y,l as oe,M as h,O as de,A as Qr,S as Lu,K as nt,P as Yu,v as Uu,F as Hu}from"./index.es-Ddh1D2fc.js";import{u as Y,y as ce,ah as Oe,P as M,H as A,g as I,D as Ae,U as xe,K as ee,w as ie,q as le,av as $u,a3 as Ds,aw as Gu,k as U,M as fe,ax as Cu,O as un,p as Bn,t as Ks,v as pr,s as gn,n as rt,ay as Bs,A as Ls,a as at,b as Ys,az as se,aA as Wu,ad as Yn,aB as zu,aC as Ju,aD as Xu,d as vr,$ as yr,x as Zu,ab as Wa,aE as Qu,aF as eg,aG as ng,N as ts,aH as rg,J as ur,G as ag,r as tg,B as sg}from"./AppIndex.stories-BWIBnU3c.js";import{A as ig}from"./useRestApiRunner-C_SuY_hO.js";import{a as $,H as ne,t as te,P as ke,d as tt,L as me,A as Tn,D as Xe,M as Je,B as Us,c as Ke,E as fr,g as Hs,V as lg,aA as Ba,b as $s,f as Gs}from"./VStack-CXDA2fiE.js";import{I as og,z as Wr}from"./index.es-zhgnUGpN.js";import{l as st}from"./landkoder-T-1RG3zx.js";import{c as dg}from"./bind-BilxuNmH.js";import{L as ss}from"./index.es-CFTuCCf0.js";import{u as ln}from"./uttakPeriodeType-S-1j3cKx.js";import{o as Br}from"./oppholdArsakType-mAEpEtTn.js";import{t as Vn}from"./tilretteleggingType-DxzN8sbp.js";import"./index-rX-Bn4lm.js";import"./iframe-DZau0qkM.js";import"../sb-preview/runtime.js";import"./SettPaVentReadOnlyModal-G809yUoD.js";import"./nb_NO-C31o_Ri5.js";function ug(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}const qn={FISKER:"FISKER",ARBEIDSTAKER:"ARBEIDSTAKER",SELVSTENDIG_NAERINGSDRIVENDE:"SELVSTENDIG_NÆRINGSDRIVENDE",KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NAERINGSDRIVENDE:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",SJOMANN:"SJØMANN",JORDBRUKER:"JORDBRUKER",DAGPENGER:"DAGPENGER",INAKTIV:"INAKTIV",KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",KOMBINASJON_ARBEIDSTAKER_OG_FISKER:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",FRILANSER:"FRILANSER",KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",DAGMAMMA:"DAGMAMMA",ANNET:"ANNET"},Lr={LONN_UNDER_UTDANNING:"LØNN_UNDER_UTDANNING",UTENLANDSK_ARBEIDSFORHOLD:"UTENLANDSK_ARBEIDSFORHOLD",FRILANSER:"FRILANSER",MILITÆR_ELLER_SIVILTJENESTE:"MILITÆR_ELLER_SIVILTJENESTE"},Ln={MOR:"MOR",FAR:"FAR",MEDMOR:"MEDMOR",MEDFAR:"MEDFAR",TREDJE_PART:"TREDJE_PART"},La={UKJENT_FORELDER:"UKJENT_FORELDER",IKKE_NORSK_FNR:"IKKE_NORSK_FNR"},gr={FISKE:"FISKE",FRILANSER:"FRILANSER",DAGMAMMA:"DAGMAMMA",JORDBRUK_ELLER_SKOGBRUK:"JORDBRUK_SKOGBRUK",ANNEN:"ANNEN"},zr={INSTITUSJONSOPPHOLD_ANNEN_FORELDER:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",SYKDOM_ANNEN_FORELDER:"SYKDOM_ANNEN_FORELDER",ALENEOMSORG:"ALENEOMSORG",IKKE_RETT_ANNEN_FORELDER:"IKKE_RETT_ANNEN_FORELDER",UDEFINERT:"-"},gg="_notLastRow_7c46s_1",mg={notLastRow:gg},mn="andreYtelser",it="PERIODER",Yr=(s,i)=>s(i),ea=({readOnly:s,name:i})=>{const o=$(),{getValues:d,control:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:c,append:f}=ce({control:g,name:`${mn}.${i}`});return r.jsx(Oe,{fields:m,bodyText:o.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:s,append:f,remove:c,children:(R,w,b)=>{const F=`${mn}.${i}.${w}`;return r.jsxs("div",{children:[r.jsx("div",{className:w!==m.length-1?mg.notLastRow:"",children:r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(M,{name:`${F}.periodeFom`,label:w===0?o.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[A,I,()=>{const T=Yr(d,`${F}.periodeFom`),x=Yr(d,`${F}.periodeTom`);return x&&T?Ae(x)(T):null}],onChange:()=>v?k():void 0})}),r.jsx(q,{children:r.jsx(M,{name:`${F}.periodeTom`,label:w===0?o.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[A,I,()=>{const T=Yr(d,`${F}.periodeFom`),x=Yr(d,`${F}.periodeTom`);return x&&T?xe(T)(x):null}],onChange:()=>v?k():void 0})}),b&&r.jsx(q,{children:b()})]})})}),r.jsx(y,{sixteenPx:!0})]},R.id)}})};ea.transformValues=(s,i)=>s.map(o=>({ytelseType:i,periodeFom:o.periodeFom,periodeTom:o.periodeTom}));ea.__docgenInfo={description:`RenderAndreYtelserPerioderFieldArray

Viser inputfelter for fra og til dato for perioder for andre ytelser`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"FormValues[]"}},{name:"ytelseType",optional:!1,type:{name:"string"}}],returns:{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  ytelseType: string;
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"ytelseType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"TransformValues[]"}}}],displayName:"RenderAndreYtelserPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Cs=(s,i)=>i?s.filter(o=>o.kode===Lr.MILITÆR_ELLER_SIVILTJENESTE):s.filter(o=>o.kode!==Lr.UTENLANDSK_ARBEIDSFORHOLD&&o.kode!==Lr.FRILANSER&&o.kode!==Lr.LONN_UNDER_UTDANNING),Un=({readOnly:s,kunMiliterEllerSiviltjeneste:i=!1,alleKodeverk:o})=>{const{watch:d}=Y(),g=d(mn),k=o[ee.ARBEID_TYPE],v=V.useMemo(()=>Cs(k,i),[i]);return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.AndreYtelser.Title"})}),r.jsx(y,{sixteenPx:!0}),v.map(m=>{const c=`${m.kode}_${it}`;return r.jsxs(Zr.Fragment,{children:[r.jsx(ie,{name:`${mn}.${m.kode}`,label:m.navn,readOnly:s},m.kode),(g==null?void 0:g[m.kode])&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{children:r.jsx(ea,{name:c,readOnly:s})})]})]},m.kode)})]})};Un.buildInitialValues=s=>{const i={};return Cs(s).forEach(o=>{const d=`${o.kode}_${it}`;i[d]=[{}]}),{[mn]:i}};Un.transformValues=(s,i)=>{const o=s[mn],d=[];return i.filter(g=>o==null?void 0:o[g.kode]).forEach(g=>{const k=`${g.kode}_${it}`,v=o?o[k]:void 0;v&&ea.transformValues(v,g.kode).forEach(m=>d.push(m))}),d};Un.__docgenInfo={description:`AndreYtelserPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]?: {
    [key: string]: PerioderFormValues[];
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [key: string]: PerioderFormValues[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"FormValues"}],raw:"PerioderFormValues[]",required:!0}}]},required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]?: {
    [key: string]: PerioderFormValues[];
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [key: string]: PerioderFormValues[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"FormValues"}],raw:"PerioderFormValues[]",required:!0}}]},required:!1}}]},alias:"FormValues"}},{name:"andreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}}],returns:{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  ytelseType: string;
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"ytelseType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"TransformValues[]"}}}],displayName:"AndreYtelserPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ue={"Registrering.AndreYtelser.periodeTom":"T.o.m.","Registrering.AndreYtelser.periodeFom":"F.o.m.","Registrering.AndreYtelser.Title":"Andre inntektskilder","Registrering.TheOtherParent.CannotSpecifyOtherParent":"Kan ikke oppgi annen forelder","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title":"Angi årsak","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1":"Forelder er ukjent","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2":"Har ikke norsk f.nr. eller d-nr.","Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer":"Utenlandsk fødselsnummer","Registrering.TheOtherParent.CannotSpecifyOtherParent.Land":"Land","Registrering.TheOtherParent.Title":"Den andre forelderen","Registrering.TheOtherParent.Fodselsnummer":"Fødselsnummer/D-nummer","Registrering.Permisjon.SøkerHarAleneomsorg":"Har søker aleneomsorg for barnet?","Registrering.Permisjon.SøkerHarAleneomsorg.Yes":"Ja","Registrering.Permisjon.SøkerHarAleneomsorg.No":"Nei","Registrering.Permisjon.HarRettPaForeldrepenger":"Har den andre forelderen rett på foreldrepenger i Norge?","Registrering.Permisjon.HarRettPaForeldrepenger.Yes":"Ja","Registrering.Permisjon.HarRettPaForeldrepenger.No":"Nei","Registrering.Permisjon.MorUføretrygd":"Bare far rett og mor mottar uføretryd?","Registrering.Permisjon.MorUføretrygd.Yes":"Ja","Registrering.Permisjon.MorUføretrygd.No":"Nei","Registrering.Permisjon.AnnenForelderRettEØS":"Annen forelder har tilstrekkelig opptjening fra land i EØS?","Registrering.Permisjon.AnnenForelderRettEØS.Yes":"Ja","Registrering.Permisjon.AnnenForelderRettEØS.No":"Nei","Registrering.TerminOgFodsel":"Opplysninger om termin og fødsel","Registrering.Termin.Fodt":"Er barnet født?","Registrering.Fodsel.ErFodt":"Ja","Registrering.Fodsel.ErIkkeFodt":"Nei","Registrering.Termindato":"Termindato","Registrering.AntallBarn":"Antall barn","Registrering.UtstedtDato":"Utstedt dato fra terminbekreftelsen","Registrering.Fodselsdato":"Når ble barnet født?","Registrering.RettTilPrematuruker":"Rett til prematuruker vil kun sjekkes når du også oppgir termindato","Registrering.Frilans.Title":"Frilanser","Registrering.Frilans.HarFrilansvirksomhet":"Har søker periode med frilansvirksomhet?","Registrering.Frilans.OppgiPeriode":"Oppgi periode med frilansvirksomhet","Registrering.Frilans.Yes":"Ja","Registrering.Frilans.No":"Nei","Registrering.Frilans.periodeTom":"T.o.m.","Registrering.Frilans.periodeFom":"F.o.m.","Registrering.Frilans.ErNyoppstartedFrilanser":"Er søker nyoppstartet frilanser?","Registrering.Frilans.HarInntektFraForsterhjem":"Har søker inntekt fra fosterhjem?","Registrering.FrilansOppdrag.HarHattOppdragForFamilie":"Har søker hatt oppdrag for nær familie?","Registrering.FrilansOppdrag.Yes":"Ja","Registrering.FrilansOppdrag.No":"Nei","Registrering.FrilansOppdrag.OppgiPeriode":"Oppgi periode","Registrering.FrilansOppdrag.FieldArray.periodeFom":"F.o.m.","Registrering.FrilansOppdrag.FieldArray.periodeTom":"T.o.m.","Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver":"Oppdragsgiver","Registrering.FrilansOppdrag.FieldArray.NyPeriode":"Legg til periode","Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation":"F.o.m må være lik eller etter dato for første periode med frilansvirksomhet","Registrering.InntektsgivendeArbeid.ArbeidINorge.Title":"Inntektsgivende arbeid i Norge","Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold":"Vedtaksløsningen foretar oppslag av norske arbeidsforhold fra Aa-registeret så dette skal ikke registreres her","Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title":"Inntektsgivende arbeid i utlandet","Registrering.InntektsgivendeArbeid.ArbeidPaAmbassade":"Arbeid som ambassadepersonell i Norge","Registrering.InntektsgivendeArbeid.Arbeidsgiver":"Arbeidsgiver","Registrering.InntektsgivendeArbeid.Virksomhetsnummer":"Virksomhetsnummer","Registrering.InntektsgivendeArbeid.Land":"Land","Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold":"Legg til utenlandsk arbeidsforhold","Registrering.InntektsgivendeArbeid.Yes":"Ja, arbeidsgiver og søker er nære venner eller i familie","Registrering.InntektsgivendeArbeid.No":"Nei, arbeidsgiver og søker er ikke nære venner eller i familie","Registrering.InntektsgivendeArbeid.Relasjon":"Relasjon","Registrering.InntektsgivendeArbeid.Placeholder":"Placeholder - Oppslag av arbeidsforhold","Registrering.InntektsgivendeArbeid.periodeFom":"Fra og med","Registrering.InntektsgivendeArbeid.periodeTom":"Til og med","ModalLukkPapirSoknad.ModalDescription":"Registrering av søknaden avsluttes","ModalLukkPapirSoknad.Avslutt":"Avslutt registrering av søknaden","ModalLukkPapirSoknad.AvslutterRegistrering":"Avslutter registrering av søknaden. Det er ikke mulig å innhente ytterligere opplysninger.","ModalLukkPapirSoknad.BekreftAvslag":"Bekreft at søknaden skal avslås","ModalLukkPapirSoknad.Ok":"OK","ModalLukkPapirSoknad.Avbryt":"Avbryt","Registrering.SaveApplication.Title":"Ferdigstill registrering","Registrering.SaveApplication.Description":"Ved endring av opplysningene er begrunnelse obligatorisk","Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt":"Søkers opplysningsplikt er ikke overholdt","Registrering.SaveApplication.EndButton":"Bekreft og avslutt behandling","Registrering.SaveApplication.SaveButton":"Bekreft og fortsett","Registrering.Verge":"Verge/fullmektig skal knyttes til saken","Registrering.Omsoknaden.MottattDato":"Mottatt dato","Registrering.Adopsjon.FodselsdatoBarnN":"Fødselsdato barn {n}","Registrering.Adopsjon.Title":"Adopsjon","Registrering.Adopsjon.OmsorgTitle":"Omsorg","Registrering.Adopsjon.GjelderEktefellesBarn":"Gjelder adopsjon ektefelles/samboers barn?","Registrering.Adopsjon.Ja":"Ja","Registrering.Adopsjon.Nei":"Nei","Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Dato for omsorgsovertakelse/stebarnsadopsjon","Registrering.Adopsjon.DatoForOvertakelsen":"Dato for omsorgsovertakelsen","Registrering.Adopsjon.Ankomstdato":"Ankomstdato","Registrering.Adopsjon.AntallBarn":"Antall barn","Registrering.RegistreringOpphold.AngiOpphold":"Oppgi hvilket land og i hvilken periode","Registrering.RegistreringOpphold.Add":"Legg til","Registrering.RegistreringOpphold.periodeFom":"F.o.m.","Registrering.RegistreringOpphold.periodeTom":"T.o.m.","Registrering.RegistreringOpphold.Country":"Land","Registrering.Opphold":"Opphold i Norge","Registrering.OppholdVedAdopsjon":"Søker oppholder seg i Norge nå","Registrering.Opphold.Yes":"Ja","Registrering.Opphold.No":"Nei","Registrering.OppholdVedFodsel":"Bor i Norge ved fødselstidspunktet","Registrering.OppholdNesteTolv":"Bor i Norge de neste 12 månedene","Registrering.OppholdSisteTolv":"Bodd i Norge de siste 12 månedene","Registrering.Rettigheter.AnnenForelderDoed":"Den andre forelderen er død","Registrering.Rettigheter.OvertaForeldreansvaretAlene":"Omsorgen er overtatt med sikte på å overta foreldreansvaret alene","Registrering.Rettigheter.MannAdoptererAlene":"Mann adopterer alene","Registrering.Rettigheter.IkkeRelevant":"Ikke relevant","Registrering.Rettigheter.Title":"Rettigheter","Registrering.Sprak":"Språk","Registrering.Sprak.Bokmal":"Bokmål","Registrering.Sprak.Nynorsk":"Nynorsk","Registrering.Sprak.Engelsk":"Engelsk","Registrering.VirksomhetNaeringTypePanel.Title":"Type næringsvirksomhet","Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet":"Er søker ny i arbeidslivet","Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged":"Er virksomheten blitt varig endret, nyoppstartet eller er søker ny i arbeidslivet?","Registrering.VirksomhetStartetPanel.Yes":"Ja","Registrering.VirksomhetStartetPanel.No":"Nei","Registrering.VirksomhetStartetPanel.Reason":"Årsak","Registrering.VirksomhetStartetPanel.HarVarigEndring":"Varig endring i næring","Registrering.VirksomhetStartetPanel.GjeldendeFom":"Gjeldende f.o.m.","Registrering.VirksomhetStartetPanel.ErNyoppstartet":"Nyoppstartet næring","Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse":"Beskriv endringen i næring","Registrering.VirksomhetStartetPanel.Inntekt":"Årsinntekt","Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak":"Må fylle ut minst en årsak","Registrering.VirksomhetRelasjonPanel.Relation":"Relasjon","Registrering.VirksomhetRelasjonPanel.No":"Nei, har ikke nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRelasjonPanel.Yes":"Ja, har nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRegnskapPanel.Accountant":"Har søker regnskapsfører eller revisor?","Registrering.VirksomhetRegnskapPanel.Yes":"Ja","Registrering.VirksomhetRegnskapPanel.No":"Nei","Registrering.VirksomhetRegnskapPanel.AccountantName":"Navn på regnskapsfører/revisor?","Registrering.VirksomhetRegnskapPanel.AccountantPhone":"Telefonnummer til regnskapsfører/revisor?","Registrering.VirksomhetIdentifikasjonPanel.Name":"Navn på foretaket","Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway":"Er næringsvirksomheten registrert i Norge","Registrering.VirksomhetIdentifikasjonPanel.No":"Nei","Registrering.VirksomhetIdentifikasjonPanel.Yes":"Ja","Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber":"Virksomhetsnummer","Registrering.VirksomhetIdentifikasjonPanel.Country":"Hvilket land er virksomheten registrert i?","Registrering.VirksomhetIdentifikasjonPanel.periodeFom":"Fra og med","Registrering.VirksomhetIdentifikasjonPanel.periodeTom":"Til og med","Registrering.EgenVirksomhet.Title":"Egen næringsvirksomhet","Registrering.EgenVirksomhet.Yes":"Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.EgenVirksomhet.No":"Nei, søker har ikke arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.RegistrerVirksomhetPanel.Add":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetPanel.Name":"Navn på virksomhet","Registrering.RegistrerVirksomhetPanel.ArrayMinLength":"Listen må ha lengde større enn 1","Registrering.RegistrerVirksomhetModalForm.ModalDescription":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetModalForm.Title":"Egen næringsvirksomhet","Registrering.RegistrerVirksomhetModalForm.Save":"Lagre","Registrering.RegistrerVirksomhetModalForm.Cancel":"Avbryt","BehovForTilretteleggingPanel.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilretteleggingPanel.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende":"Søkes det om svangerskapspenger som selvstendig næringsdrivende?","BehovForTilretteleggingPanel.Ja":"Ja","BehovForTilretteleggingPanel.Nei":"Nei","BehovForTilretteleggingPanel.SokForFrilans":"Søkes det om svangerskapspenger som frilanser?","BehovForTilretteleggingPanel.SokForArbeidsgiver":"Søkes det om svangerskapspenger som arbeidstaker?","BehovForTilretteleggingPanel.MinstEnMaaVereJa":"Minst ett av spørsmålene må besvares med alternativ Ja","BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov":"Legg til tilretteleggingsbehov","BehovForTilrettteleggingFieldArray.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilrettteleggingFieldArray.FraDato":"Fra dato","BehovForTilrettteleggingFieldArray.Stillingsprosent":"Stillingsprosent","BehovForTilrettteleggingFieldArray.KanGjennomfores":"a) kan gjennomføres slik at arbeidstakeren kan fortsette med samme stilling fra og med","BehovForTilrettteleggingFieldArray.RedusertArbeid":"b) kan gjennomføres slik at arbeidstakeren kan fortsette med redusert arbeidstid fra og med","BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores":"c) kan ikke gjennomføres og arbeidstakeren må midlertidig gå ut av sitt arbeid fra og med","TilretteleggingForArbeidsgiverFieldArray.OrgNr":"Arbeidsgivers orgnr/fnr","TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver":"Legg til arbeidsgiver","TerminFodselSvpPanel.TerminOgFodsel":"Opplysninger om termin og fødsel","TerminFodselSvpPanel.Termindato":"Termindato","TerminFodselSvpPanel.Fodselsdato":"Fødselsdato","Registrering.Dekningsgrad.Title":"Dekningsgrad","Registrering.Dekningsgrad.prosent.80":"80 prosent","Registrering.Dekningsgrad.prosent.100":"100 prosent","Registrering.Permisjon.Title":"Tidsrom for permisjon","Registrering.Permisjon.PermisjonForFodsel":"Permisjon før fødsel","Registrering.Permisjon.PerioderForeldrepenger":"Perioder med permisjon med foreldrepenger","Registrering.Permisjon.FulltUttak":"Fullt uttak","Registrering.Permisjon.FedrekvoteEllerMedmorkvote":"Fedrekvote eller kvote til medmor","Registrering.Permisjon.AngiPeriode":"Angi periode","Registrering.Permisjon.periodeType":"Periodetype","Registrering.Permisjon.nyPeriode":"Legg til periode","Registrering.Permisjon.periodeFom":"F.o.m.","Registrering.Permisjon.periodeTom":"T.o.m.","Registrering.Permisjon.SamtidigUttaksprosent":"Prosentandel uttak","Registrering.Permisjon.ArbeidskategoriLabel":"Type arbeid","Registrering.Permisjon.ErArbeidstaker":"Arbeidstaker","Registrering.Permisjon.ErIkkeArbeidstaker":"Selvstendig næringsdrivende/frilanser","Registrering.Permisjon.Orgnr":"Virksomhetsnummer","Registrering.Permisjon.OverforingAvKvote.OvertaKvoten":"Overføring av kvote","Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak":"Angi årsak","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt":"Mor er innlagt på helseinstitusjon","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk":"Mor er pga sykdom avhengig av hjelp for å ta seg av barnet/barna","Registrering.Permisjon.OverforingAvKvote.OvertaKvote":"Søker ønsker å overta kvote","Registrering.Permisjon.OverforingAvKvote.fomDato":"F.o.m.","Registrering.Permisjon.OverforingAvKvote.tomDato":"T.o.m.","Registrering.Permisjon.Fellesperioden":"Fellesperioden","Registrering.Permisjon.Fellesperiode.Yes":"Ja","Registrering.Permisjon.Fellesperiode.No":"Nei","Registrering.Permisjon.Fellesperiode.ForeldrepengerTilFarEllerMedmor":"Skal far eller medmor ha foreldrepenger fra fellesperioden?","Registrering.Permisjon.Fellesperiode.periodeFom":"Fellesperiode F.o.m.","Registrering.Permisjon.Fellesperiode.periodeTom":"Fellesperiode T.o.m.","Registrering.Permisjon.Fellesperiode.morsAktivitet":"Mors aktivitet","Registrering.Permisjon.MorBorSammenFaren":"Mor bor sammen med faren til barnet","Registrering.Permisjon.Mor.Yes":"Ja","Registrering.Permisjon.Mor.No":"Nei","Registrering.Permisjon.HarSamtidigUttak":"Samtidig uttak","Registrering.Permisjon.Flerbarnsdager":"Flerbarnsdager","Registrering.Permisjon.UttakStartdato":"Når skal uttak av foreldrepenger starte?","Registrering.Permisjon.HeleModrekvotenUmiddelbart":"Skal hele mødrekvoten tas ut umiddelbart etter fødsel?","Registrering.Permisjon.HeleFellesperiodenUmiddelbart":"Skal hele fellesperioden tas ut umiddelbart etter mødrekvoten?","Registrering.Permisjon.Utsettelse.Title":"Utsettelse","Registrering.Permisjon.Utsettelse.Periode":"Hva skal utsettes","Registrering.Permisjon.Utsettelse.Arsak":"Årsak til utsettelse","Registrering.Permisjon.Utsettelse.LeggTilPeriode":"Legg til periode for utsettelse","Registrering.Permisjon.Utsettelse.UtsettUttaket":"Søker ønsker å utsette uttaket","Registrering.Permisjon.Opphold.OppholdUttaket":"Søker ønsker opphold i uttaket","Registrering.Permisjon.Opphold.Title":"Opphold","Registrering.Permisjon.Opphold.Periode":"Hva skal annen forelder ta ut?","Registrering.Permisjon.Opphold.Arsak":"Årsak til opphold","Registrering.Permisjon.Opphold.LeggTilPeriode":"Legg til periode med opphold","Registrering.Permisjon.Gradering.Title":"Gradering","Registrering.Permisjon.Gradering.Periode":"Hva skal graderes","Registrering.Permisjon.Gradering.Prosentandel":"Prosentandel arbeid i perioden","Registrering.Permisjon.Gradering.SkalGraderes":"Arbeidsforhold som skal graderes","Registrering.Permisjon.Gradering.LeggTilPeriode":"Legg til periode for gradering","Registrering.Permisjon.Gradering.GraderUttaket":"Søker ønsker å gradere uttaket","Registrering.Permisjon.PeriodeFomForTidlig":"Behandlinger med første uttaksdag før 01.01.2019 skal ikke behandles i vedtaksløsningen","Registrering.TheOtherParent.Confirmation":"Bekreftelse","Registrering.TheOtherParent.OtherParentKnowPeriods":"Annen forelder er kjent med hvilke perioder det er søkt om","Registrering.TheOtherParent.Yes":"Ja","Registrering.TheOtherParent.No":"Nei","PermisjonPanel.MinstEnPeriodeRequired":"Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering","PermisjonPanel.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)"},kg=te(ue),Qe=({readOnly:s,alleKodeverk:i,kunMiliterEllerSiviltjeneste:o})=>r.jsx(ke,{value:kg,children:r.jsx(Un,{readOnly:s,alleKodeverk:i,kunMiliterEllerSiviltjeneste:o})});Qe.buildInitialValues=s=>Un.buildInitialValues(s);Qe.transformValues=(s,i)=>Un.transformValues(s,i);Qe.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}}],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]?: {
    [key: string]: PerioderFormValues[];
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [key: string]: PerioderFormValues[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"FormValues"}],raw:"PerioderFormValues[]",required:!0}}]},required:!1}}]},alias:"FormValues"}},{name:"andreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}}],returns:null}],displayName:"AndreYtelserPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:""}}};const pg="_inputBredde_138ho_1",Ya={inputBredde:pg},cn="annenForelder",Ur="kanIkkeOppgiBegrunnelse",vg=s=>s.filter(({kode:i})=>i!==st.NORGE).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Ws=({readOnly:s=!0,permisjonRettigheterPanel:i,alleKodeverk:o,fagsakPersonnummer:d})=>{const{formatMessage:g}=$(),{watch:k,trigger:v,formState:{isSubmitted:m}}=Y(),c=k(`${cn}.kanIkkeOppgiAnnenForelder`),f=k(`${cn}.${Ur}`),R=o[ee.LANDKODER],w=V.useMemo(()=>R.slice().sort((b,F)=>b.navn.localeCompare(F.navn)),[R]);return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.TheOtherParent.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:`${cn}.foedselsnummer`,label:g({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:b=>b&&b.toString().replace(/\s/g,""),readOnly:s,className:Ya.inputBredde,validate:c?[]:[A,$u,Ds,Gu(d)],disabled:c}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{name:`${cn}.kanIkkeOppgiAnnenForelder`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:s,onChange:()=>m?v():void 0}),c===!0&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(ne,{size:"small",children:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),r.jsx(U,{name:`${cn}.${Ur}.arsak`,hideLegend:!0,validate:[A],isReadOnly:s,radios:[{label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:La.UKJENT_FORELDER},{label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:La.IKKE_NORSK_FNR}]}),(f==null?void 0:f.arsak)===La.IKKE_NORSK_FNR&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(fe,{name:`${cn}.${Ur}.land`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:vg(w),validate:[A],className:Ya.inputBredde,readOnly:s}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:`${cn}.${Ur}.utenlandskFoedselsnummer`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[A],className:Ya.inputBredde,readOnly:s})]})]})]}),r.jsx(y,{sixteenPx:!0}),i]})};Ws.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const yg=te(ue),zs=({readOnly:s,alleKodeverk:i,permisjonRettigheterPanel:o,fagsakPersonnummer:d})=>r.jsx(ke,{value:yg,children:r.jsx(Ws,{readOnly:s,alleKodeverk:i,permisjonRettigheterPanel:o,fagsakPersonnummer:d})});zs.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};tt.extend(Cu);const is=Ks(1),ls=pr(9),Js=()=>tt().startOf("day"),fg=()=>Js().subtract(3,"weeks"),cg=s=>{const i=fg(),o=s?tt(s,Tn):void 0,d=Js();return o&&o.isSameOrBefore(d)?(o.isAfter(i)?o:i).subtract(1,"days"):d},hg=s=>i=>Ae(cg(s("termindato")))(i),Xs=({readOnly:s,erForeldrepenger:i})=>{const o=$(),{watch:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),m=d("erBarnetFodt");return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:o.formatMessage({id:"Registrering.TerminOgFodsel"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"erBarnetFodt",label:r.jsx(h,{id:"Registrering.Termin.Fodt"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(h,{id:"Registrering.Fodsel.ErFodt"}),value:"true"},{label:r.jsx(h,{id:"Registrering.Fodsel.ErIkkeFodt"}),value:"false"}]}),m===!1&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsxs(Q,{children:[r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(M,{name:"termindato",label:o.formatMessage({id:"Registrering.Termindato"}),isReadOnly:s,validate:[A,I],onChange:()=>v?k():void 0})}),r.jsx(q,{children:r.jsx(le,{name:"antallBarnFraTerminbekreftelse",label:o.formatMessage({id:"Registrering.AntallBarn"}),readOnly:s,validate:[A,un,is,ls]})})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsx(q,{children:r.jsx(M,{name:"terminbekreftelseDato",label:o.formatMessage({id:"Registrering.UtstedtDato"}),isReadOnly:s,validate:[I,hg(g)]})})})]})})]}),m&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:0,children:r.jsxs(Q,{children:[r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(M,{name:"foedselsDato",label:o.formatMessage({id:"Registrering.Fodselsdato"}),isReadOnly:s,validate:[A,I,Bn]})}),r.jsx(q,{children:r.jsx(le,{name:"antallBarn",label:o.formatMessage({id:"Registrering.AntallBarn"}),readOnly:s,validate:[A,un,is,ls]})})]}),i&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(Qr,{size:"small",variant:"info",children:r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.RettTilPrematuruker"})})})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsx(q,{children:r.jsx(M,{name:"termindato",label:o.formatMessage({id:"Registrering.Termindato"}),isReadOnly:s,validate:[I]})})})]})})]})]})};Xs.__docgenInfo={description:"",methods:[],displayName:"TerminFodselDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!0,tsType:{name:"boolean"},description:""}}};const bg=te(ue),lt=({readOnly:s,erForeldrepenger:i})=>r.jsx(ke,{value:bg,children:r.jsx(Xs,{readOnly:s,erForeldrepenger:i})});lt.__docgenInfo={description:"",methods:[],displayName:"FodselPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!0,tsType:{name:"boolean"},description:""}}};const Rg="_notLastRow_7c46s_1",jg={notLastRow:Rg},os="frilans",Hr=(s,i)=>s(i),Zs=({readOnly:s})=>{const i=$(),{control:o,getValues:d,formState:{isSubmitted:g},trigger:k}=Y(),{fields:v,remove:m,append:c}=ce({control:o,name:`${os}.perioder`});return r.jsx(Oe,{fields:v,bodyText:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:s,remove:m,append:c,children:(f,R,w)=>{const b=`${os}.perioder.${R}`;return r.jsxs("div",{className:R!==v.length-1?jg.notLastRow:"",children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(M,{name:`${b}.periodeFom`,label:R===0?i.formatMessage({id:"Registrering.Frilans.periodeFom"}):"",validate:[A,I,()=>{const F=Hr(d,`${b}.periodeFom`),T=Hr(d,`${b}.periodeTom`);return T&&F?Ae(T)(F):null}],onChange:()=>g?k():void 0})}),r.jsx(q,{children:r.jsx(M,{name:`${b}.periodeTom`,label:R===0?i.formatMessage({id:"Registrering.Frilans.periodeTom"}):"",validate:[A,I,()=>{const F=Hr(d,`${b}.periodeFom`),T=Hr(d,`${b}.periodeTom`);return T&&F?xe(F)(T):null}],onChange:()=>g?k():void 0})}),w&&r.jsx(q,{children:w()})]})}),r.jsx(y,{sixteenPx:!0})]},f.id)}})};Zs.__docgenInfo={description:`FrilansPerioderFieldArray

Viser inputfelter for fra og til dato for frilansperioder`,methods:[],displayName:"FrilansPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const qg="_notLastRow_7c46s_1",Tg={notLastRow:qg},kr="frilans",mr=(s,i)=>s(i),Ag=(s=[])=>s.map(i=>i.periodeFom).filter(i=>i&&i!=="").sort((i,o)=>gn(i,Tn).diff(gn(o,Tn))),Qs={fomDato:"",tomDato:"",oppdragsgiver:""},wg=rt(50),Fg=(s,i,o,d)=>()=>{const g=mr(s,`${i}.fomDato`);return o.length>0&&o[0]&&g&&!gn(o[0]).isSameOrBefore(gn(g))?d.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation"}):null},ei=({readOnly:s})=>{const i=$(),{control:o,getValues:d,watch:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:c,append:f}=ce({control:o,name:`${kr}.oppdragPerioder`}),R=g(`${kr}.perioder`),w=V.useMemo(()=>Ag(R),[R]);return r.jsx(Oe,{bodyText:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),fields:m,emptyPeriodTemplate:Qs,readOnly:s,append:f,remove:c,children:(b,F,T)=>{const x=`${kr}.oppdragPerioder.${F}`;return r.jsxs("div",{className:F!==m.length-1?Tg.notLastRow:"",children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(M,{name:`${x}.fomDato`,label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeFom"}),validate:[I,Fg(d,x,w,i),()=>{const P=mr(d,`${x}.fomDato`),G=mr(d,`${x}.tomDato`);return G&&P?Ae(G)(P):null}],onChange:()=>v?k():void 0})}),r.jsx(q,{children:r.jsx(M,{name:`${x}.tomDato`,label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeTom"}),validate:[I,()=>{const P=mr(d,`${x}.fomDato`),G=mr(d,`${x}.tomDato`);return G&&P?xe(P)(G):null}],onChange:()=>v?k():void 0})}),r.jsx(q,{children:r.jsx(le,{name:`${x}.oppdragsgiver`,validate:[wg],label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver"})})}),T&&r.jsx(q,{children:T()})]})}),r.jsx(y,{sixteenPx:!0})]},b.id)}})};ei.__docgenInfo={description:`FrilansOppdragForFamilieFieldArray

Viser inputfelter for fra og til dato for frilansperioder.`,methods:[],displayName:"FrilansOppdragForFamilieFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const na=({readOnly:s})=>{const{watch:i}=Y(),o=i(`${kr}.harHattOppdragForFamilie`);return r.jsxs(r.Fragment,{children:[r.jsx(U,{name:`${kr}.harHattOppdragForFamilie`,label:r.jsx(h,{id:"Registrering.FrilansOppdrag.HarHattOppdragForFamilie"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(h,{id:"Registrering.FrilansOppdrag.Yes"}),value:"true"},{label:r.jsx(h,{id:"Registrering.FrilansOppdrag.No"}),value:"false"}]}),o&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.FrilansOppdrag.OppgiPeriode"})}),r.jsx(y,{fourPx:!0}),r.jsx(ei,{readOnly:s})]})]})]})};na.buildInitialValues=()=>({oppdragPerioder:[Qs],perioder:void 0});na.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`{
  harHattOppdragForFamilie?: boolean;
} & FieldArrayFormValues`,elements:[{name:"signature",type:"object",raw:`{
  harHattOppdragForFamilie?: boolean;
}`,signature:{properties:[{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]}}}],displayName:"FrilansOppdragForFamiliePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ua="frilans",Hn=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.Frilans.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Ua}.harSokerPeriodeMedFrilans`,label:r.jsx(h,{id:"Registrering.Frilans.HarFrilansvirksomhet"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(h,{id:"Registrering.Frilans.No"}),value:"false"},{label:r.jsx(h,{id:"Registrering.Frilans.Yes"}),value:"true",element:r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(Xe,{children:r.jsx(h,{id:"Registrering.Frilans.OppgiPeriode"})}),r.jsx(y,{eightPx:!0}),r.jsx(Zs,{readOnly:s}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:`${Ua}.erNyoppstartetFrilanser`,label:r.jsx(h,{id:"Registrering.Frilans.ErNyoppstartedFrilanser"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(h,{id:"Registrering.Frilans.Yes"}),value:"true"},{label:r.jsx(h,{id:"Registrering.Frilans.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Ua}.harInntektFraFosterhjem`,label:r.jsx(h,{id:"Registrering.Frilans.HarInntektFraForsterhjem"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(h,{id:"Registrering.Frilans.Yes"}),value:"true"},{label:r.jsx(h,{id:"Registrering.Frilans.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(na,{readOnly:s})]})]})}]})]});Hn.buildInitialValues=()=>({...na.buildInitialValues(),perioder:[{periodeFom:"",periodeTom:""}]});Hn.transformValues=s=>s.harSokerPeriodeMedFrilans?s:{harSokerPeriodeMedFrilans:s.harSokerPeriodeMedFrilans};Hn.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
} & FormValuesOppdragForFamilie &
  PerioderFormValues`,elements:[{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}}]}},{name:"FormValues"},{name:"FormValues"}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:{name:"intersection",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
} & FormValuesOppdragForFamilie &
  PerioderFormValues`,elements:[{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}}]}},{name:"FormValues"},{name:"FormValues"}],alias:"FormValues"}}],returns:{type:{name:"intersection",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
} & FormValuesOppdragForFamilie &
  PerioderFormValues`,elements:[{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}}]}},{name:"FormValues"},{name:"FormValues"}]}}}],displayName:"FrilansPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Pg=te(ue),en=({readOnly:s})=>r.jsx(ke,{value:Pg,children:r.jsx(Hn,{readOnly:s})});en.buildInitialValues=()=>Hn.buildInitialValues();en.transformValues=s=>Hn.transformValues(s);en.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:{name:"intersection",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
} & FormValuesOppdragForFamilie &
  PerioderFormValues`,elements:[{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}}]}},{name:"FormValues"},{name:"FormValues"}],alias:"FormValues"}}],returns:null}],displayName:"FrilansPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const _g="_notLastRow_uwn16_1",Ng={notLastRow:_g},xg=rt(50),In="arbeidsforhold",Og={arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},Sg=s=>s.filter(({kode:i})=>i!==st.NORGE).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),ni=({alleKodeverk:s,readOnly:i})=>{const o=$(),{control:d}=Y(),{fields:g,remove:k,append:v}=ce({control:d,name:In}),m=s[ee.LANDKODER].slice().sort((c,f)=>c.navn.localeCompare(f.navn));return r.jsx(Oe,{fields:g,emptyPeriodTemplate:Og,bodyText:o.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:i,remove:k,append:v,children:(c,f,R)=>r.jsxs("div",{className:f!==g.length-1?Ng.notLastRow:"",children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(le,{readOnly:i,name:`${In}.${f}.arbeidsgiver`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}):"",validate:[xg],maxLength:99})}),r.jsx(q,{children:r.jsx(M,{isReadOnly:i,name:`${In}.${f}.periodeFom`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}):"",validate:[I]})}),r.jsx(q,{children:r.jsx(M,{isReadOnly:i,name:`${In}.${f}.periodeTom`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}):"",validate:[I]})}),r.jsx(q,{children:r.jsx(fe,{readOnly:i,name:`${In}.${f}.land`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}):"",selectValues:Sg(m)})}),R&&r.jsx(q,{children:R()})]})}),r.jsx(y,{twentyPx:!0})]},c.id)})};ni.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

Viser inputfelter for arbeidsgiver og organisasjonsnummer for registrering av arbeidsforhold.`,methods:[],displayName:"RenderInntektsgivendeArbeidFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ra=({readOnly:s,alleKodeverk:i})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.Title"})}),r.jsx(y,{eightPx:!0}),r.jsx(Xe,{children:r.jsx(h,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{sixteenPx:!0}),r.jsx(Xe,{children:r.jsx(h,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title"})}),r.jsx(y,{eightPx:!0}),r.jsx(ni,{readOnly:s,alleKodeverk:i})]});ra.buildInitialValues=()=>({[In]:[{}]});ra.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Vg=te(ue),$n=({readOnly:s,alleKodeverk:i})=>r.jsx(ke,{value:Vg,children:r.jsx(ra,{readOnly:s,alleKodeverk:i})});$n.buildInitialValues=()=>ra.buildInitialValues();$n.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Mg="_image_1vy0k_1",Eg={image:Mg},ri=({showModal:s,handleSubmit:i,cancelEvent:o})=>{const d=$();return r.jsxs(Je,{open:s,"aria-label":d.formatMessage({id:"ModalLukkPapirSoknad.ModalDescription"}),onClose:o,children:[r.jsx(Je.Body,{children:r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(Lu,{className:Eg.image,title:d.formatMessage({id:"ModalLukkPapirSoknad.Avslutt"})})}),r.jsxs(q,{children:[r.jsx(me,{size:"small",children:d.formatMessage({id:"ModalLukkPapirSoknad.AvslutterRegistrering"})}),r.jsx(y,{fourPx:!0}),r.jsx(Us,{size:"small",children:d.formatMessage({id:"ModalLukkPapirSoknad.BekreftAvslag"})})]})]})})}),r.jsxs(Je.Footer,{children:[r.jsx(Bs,{to:"/",children:r.jsx(Ke,{size:"small",variant:"primary",onClick:()=>i(),type:"button",children:d.formatMessage({id:"ModalLukkPapirSoknad.Ok"})})}),r.jsx(Ke,{size:"small",variant:"secondary",onClick:o,type:"button",children:d.formatMessage({id:"ModalLukkPapirSoknad.Avbryt"})})]})]})};ri.__docgenInfo={description:`LukkPapirSoknadModal

Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
og trykker på 'Lagre og start behandling'. Ved å trykke på OK blir saken sendt til behandling av avslag.`,methods:[],displayName:"LukkPapirsoknadModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ig="_fullWidth_1omqj_1",Dg="_halfWidth_1omqj_5",ds={fullWidth:Ig,halfWidth:Dg},Kg=rt(1500),ai=({submitting:s,onSubmitUfullstendigsoknad:i,readOnly:o=!0})=>{const d=$(),[g,k]=V.useState(!1),{watch:v}=Y(),m=v("ufullstendigSoeknad")||!1,c=V.useCallback(()=>{k(!g)},[k,g]);return r.jsx(oe,{children:r.jsx(Q,{children:r.jsx(L,{children:r.jsxs(q,{className:ds.fullWidth,children:[r.jsx(Xe,{children:d.formatMessage({id:"Registrering.SaveApplication.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(L,{children:[r.jsx(q,{className:ds.halfWidth,children:r.jsx(Ls,{name:"kommentarEndring",label:d.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[Kg,at],readOnly:o})}),r.jsxs(q,{children:[r.jsx(ie,{name:"registrerVerge",label:d.formatMessage({id:"Registrering.Verge"}),readOnly:o}),r.jsx(ie,{name:"ufullstendigSoeknad",label:d.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:o})]})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsxs(q,{className:"justifyItemsToFlexEnd",children:[!m&&r.jsx(Ke,{id:"saveButton",size:"small",variant:"primary",loading:s,disabled:o||s,onClick:Ys,children:r.jsx(h,{id:"Registrering.SaveApplication.SaveButton"})}),m&&r.jsx(Ke,{id:"endButton",onClick:c,size:"small",variant:"primary",loading:s,disabled:o||s,type:"button",children:r.jsx(h,{id:"Registrering.SaveApplication.EndButton"})})]})}),r.jsx(ri,{handleSubmit:i,showModal:g,cancelEvent:c})]})})})})};ai.__docgenInfo={description:"",methods:[],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Bg=te(ue),aa=({readOnly:s,onSubmitUfullstendigsoknad:i,submitting:o})=>r.jsx(ke,{value:Bg,children:r.jsx(ai,{readOnly:s,onSubmitUfullstendigsoknad:i,submitting:o})});aa.__docgenInfo={description:"",methods:[],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const ti=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),r.jsx(y,{sixteenPx:!0}),r.jsx(M,{name:"mottattDato",label:r.jsx(h,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[A,I,Bn],isReadOnly:s})]});ti.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"MottattDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Lg=te(ue),ta=({readOnly:s})=>r.jsx(ke,{value:Lg,children:r.jsx(ti,{readOnly:s})});ta.__docgenInfo={description:"",methods:[],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Yg="_barnInput_1jjt5_1",Ug="_col_1jjt5_5",$r={barnInput:Yg,col:Ug},Hg=10,us=Ks(1),gs=pr(10),hn="omsorg",ms=(s,i)=>o=>{if(s===0&&i&&o)return Wu(o,Array.isArray(i)?i[0]:i)},sa=({readOnly:s=!0,familieHendelseType:i,isForeldrepengerFagsak:o,fodselsdatoer:d})=>{const{formatMessage:g}=$(),{control:k,watch:v}=Y(),{fields:m,remove:c,append:f}=ce({control:k,name:`${hn}.foedselsDato`}),R=v(`${hn}.antallBarn`),w=R?parseInt(R,10):0;return V.useEffect(()=>{if(m.length>Math.max(w,0))for(let b=m.length;b>w;b-=1)c(b-1);else if(m.length<Math.min(w,Hg))for(let b=m.length;b<w;b+=1)f({id:b,dato:void 0})},[w]),r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:i===se.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(Q,{children:[o&&i===se.ADOPSJON&&r.jsxs(r.Fragment,{children:[r.jsx(L,{children:r.jsx(q,{className:$r.col,children:r.jsx(U,{name:`${hn}.erEktefellesBarn`,label:r.jsx(h,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Adopsjon.Ja"}),value:"true"},{label:g({id:"Registrering.Adopsjon.Nei"}),value:"false"}]})})}),r.jsx(y,{sixteenPx:!0})]}),r.jsx(L,{children:r.jsx(q,{children:r.jsx(M,{name:`${hn}.omsorgsovertakelsesdato`,label:g({id:i===se.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:s,validate:i===se.ADOPSJON?[A,I]:[I]})})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(L,{children:[i===se.ADOPSJON&&r.jsx(q,{children:r.jsx(M,{name:`${hn}.ankomstdato`,label:g({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:s,validate:[I]})}),r.jsx(q,{className:$r.col,children:r.jsx(le,{name:`${hn}.antallBarn`,label:g({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:s,parse:b=>{const F=parseInt(b.toString(),10);return Number.isNaN(F)?b:F},className:$r.barnInput,validate:i===se.ADOPSJON?[A,un,us,gs]:[un,b=>b?us(parseInt(b,10)):void 0,b=>b?gs(parseInt(b,10)):void 0]})})]}),r.jsx(L,{children:r.jsx(q,{className:$r.col,children:m.map((b,F)=>r.jsxs(Zr.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(M,{name:`${hn}.foedselsDato.${F}.dato`,isReadOnly:s,validate:i===se.ADOPSJON?[A,I,Bn,ms(F,d)]:[I,Bn,ms(F,d)],label:g({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:F+1})})]},b.id))})})]})]})};sa.transformValues=s=>({...s,foedselsDato:s.foedselsDato&&s.foedselsDato.length>0?s.foedselsDato.map(i=>i.dato):void 0});sa.__docgenInfo={description:`OmsorgOgAdopsjonPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: string;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: string;
  foedselsDato?: (string | undefined)[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const $g=te(ue),kn=({readOnly:s,familieHendelseType:i,isForeldrepengerFagsak:o,fodselsdato:d})=>r.jsx(ke,{value:$g,children:r.jsx(sa,{readOnly:s,familieHendelseType:i,isForeldrepengerFagsak:o,fodselsdatoer:d})});kn.transformValues=sa.transformValues;kn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: string;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: string;
  foedselsDato?: (string | undefined)[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"string"},description:""},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const Gg="_datesRowWithRemoveButton_od5lu_1",Cg="_selectBredde_od5lu_7",si={datesRowWithRemoveButton:Gg,selectBredde:Cg},Wg=dg.bind(si),zg={land:"",periodeFom:"",periodeTom:""},Jr=(s,i)=>s(i),ks=(s,i)=>()=>{const d=s(i).filter(({periodeFom:g,periodeTom:k})=>g&&g!==""&&k&&k!=="").map(({periodeFom:g,periodeTom:k})=>[g,k]);return d.length>0?Yn(d):void 0},Jg=s=>s.filter(({kode:i})=>i!==st.NORGE).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),ps=(s,i,o,d)=>()=>{const g=Jr(s,`${i}.${o}.periodeFom`),k=Jr(s,`${i}.${o}.periodeTom`);return!k||!g?null:d?Ae(k)(g):xe(g)(k)},za=({erTidligereOpphold:s=!1,mottattDato:i,readOnly:o,countryCodes:d})=>{const g=$(),k=s?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:v,getValues:m,trigger:c,formState:{isSubmitted:f}}=Y(),{fields:R,remove:w,append:b}=ce({control:v,name:k}),F=V.useMemo(()=>Jg(d),[d]);return r.jsx(Oe,{fields:R,titleText:g.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:g.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:zg,createAddButtonInsteadOfImageLink:!0,readOnly:o,remove:w,append:b,children:(T,x,P)=>r.jsxs(Zr.Fragment,{children:[x>0&&r.jsxs(r.Fragment,{children:[r.jsx(nt,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsx(fe,{name:`${k}.${x}.land`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:F,className:si.selectBredde,readOnly:o,validate:[A]}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{className:Wg({datesRowWithRemoveButton:x>0}),children:[r.jsx(q,{children:r.jsx(M,{name:`${k}.${x}.periodeFom`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:o,validate:[A,I,ps(m,k,x,!0),()=>{const G=Jr(m,`${k}.${x}.periodeFom`);return s?Ae(gn().format(Tn))(G):i?xe(i)(G):void 0},ks(m,k)],onChange:()=>f?c():void 0})}),r.jsx(q,{children:r.jsx(M,{name:`${k}.${x}.periodeTom`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:o,validate:[A,I,ps(m,k,x,!1),()=>{const G=Jr(m,`${k}.${x}.periodeTom`);return s?Ae(gn().format(Tn))(G):i?xe(i)(G):void 0},ks(m,k)],onChange:()=>f?c():void 0})}),P&&r.jsx(q,{children:P()})]})}),r.jsx(y,{sixteenPx:!0})]},T.id)})};za.__docgenInfo={description:`UtenlandsOppholdField

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
Komponenten lar saksbehandler legge inn informasjon om ett eller flere utenlandsopphold fra søknaden. Komponenten eksponerer valideringsregler
som lar seg tilpasse om opphold skal være fram eller tilbake i tid.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"UtenlandsOppholdField",props:{erTidligereOpphold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},mottattDato:{required:!1,tsType:{name:"string"},description:""},countryCodes:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Gn=({readOnly:s=!0,alleKodeverk:i,mottattDato:o,erAdopsjon:d})=>{const{formatMessage:g}=$(),k=V.useMemo(()=>i[ee.LANDKODER].slice().sort((f,R)=>f.navn.localeCompare(R.navn)),[i]),{watch:v}=Y(),m=v("harTidligereOppholdUtenlands")||!1,c=v("harFremtidigeOppholdUtenlands")||!1;return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.Opphold"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"oppholdINorge",label:r.jsx(h,{id:d?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"true"},{label:g({id:"Registrering.Opphold.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"harTidligereOppholdUtenlands",label:r.jsx(h,{id:"Registrering.OppholdSisteTolv"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"false"},{label:g({id:"Registrering.Opphold.No"}),value:"true"}]}),m?r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsx(za,{erTidligereOpphold:!0,mottattDato:o,countryCodes:k,readOnly:s})})]}):null,r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"harFremtidigeOppholdUtenlands",label:r.jsx(h,{id:"Registrering.OppholdNesteTolv"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"false"},{label:g({id:"Registrering.Opphold.No"}),value:"true"}]}),c?r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsx(za,{mottattDato:o,countryCodes:k,readOnly:s})})]}):null]})};Gn.buildInitialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});Gn.transformValues=s=>({...s,fremtidigeOppholdUtenlands:s.harFremtidigeOppholdUtenlands?s.fremtidigeOppholdUtenlands:void 0,tidligereOppholdUtenlands:s.harTidligereOppholdUtenlands?s.tidligereOppholdUtenlands:void 0});Gn.__docgenInfo={description:`OppholdINorgePanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
Inneholder delen av skjemaet som omhandler informasjon om utenlandsopphold.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePanel",props:{erAdopsjon:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};const Xg=te(ue),ye=({readOnly:s,erAdopsjon:i,alleKodeverk:o,mottattDato:d})=>r.jsx(ke,{value:Xg,children:r.jsx(Gn,{readOnly:s,erAdopsjon:i,alleKodeverk:o,mottattDato:d})});ye.buildInitialValues=Gn.buildInitialValues;ye.transformValues=Gn.transformValues;ye.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erAdopsjon:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};const Dn={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},ii=({readOnly:s=!0,soknadData:i})=>{const o=$(),d=[{label:o.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:Dn.ANNEN_FORELDER_DOED},{label:o.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:Dn.OVERTA_FORELDREANSVARET_ALENE},{label:o.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:Dn.MANN_ADOPTERER_ALENE},{label:o.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:Dn.IKKE_RELEVANT}];return i.getFamilieHendelseType()!==se.FODSEL&&i.getForeldreType()===Ln.FAR||d.splice(2,1),r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:o.formatMessage({id:"Registrering.Rettigheter.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"rettigheter",isReadOnly:s,radios:d})]})};ii.__docgenInfo={description:`RettigheterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"RettigheterPanel",props:{soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Zg=te(ue),ia=({readOnly:s,soknadData:i})=>r.jsx(ke,{value:Zg,children:r.jsx(ii,{readOnly:s,soknadData:i})});ia.__docgenInfo={description:"",methods:[],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const Ha={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},li=({readOnly:s})=>{const i=$();return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:i.formatMessage({id:"Registrering.Sprak"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"språkkode",validate:[A],isReadOnly:s,radios:[{label:i.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:Ha.BOKMAL},{label:i.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:Ha.NYNORSK},{label:i.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:Ha.ENGELSK}]})]})};li.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",methods:[],displayName:"SprakPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Qg=te(ue),cr=({readOnly:s})=>r.jsx(ke,{value:Qg,children:r.jsx(li,{readOnly:s})});cr.__docgenInfo={description:"",methods:[],displayName:"SprakPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const em="_navnBredde_1kwjo_1",nm="_orgNrBredde_1kwjo_5",rm="_landBredde_1kwjo_9",$a={navnBredde:em,orgNrBredde:nm,landBredde:rm},am=s=>s.map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),oi=({readOnly:s=!0,alleKodeverk:i})=>{const o=$(),d=i[ee.LANDKODER].slice().sort((m,c)=>m.navn.localeCompare(c.navn)),{watch:g,getValues:k}=Y(),v=g("virksomhetRegistrertINorge");return r.jsxs(r.Fragment,{children:[r.jsx(le,{name:"navn",validate:[A],label:r.jsx(h,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),className:$a.navnBredde,readOnly:s}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"virksomhetRegistrertINorge",label:r.jsx(h,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.No"}),value:"false"}]}),v&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx("div",{className:$a.orgNrBredde,children:r.jsx(de,{children:r.jsx(le,{name:"organisasjonsnummer",readOnly:s,validate:[A,un,zu],label:r.jsx(h,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})})}),r.jsx(y,{sixteenPx:!0})]}),!v&&v!==void 0&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{alignOffset:57,children:[r.jsx(fe,{name:"landJobberFra",className:$a.landBredde,selectValues:am(d),validate:[A],label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(M,{isReadOnly:s,validate:[A,I,Bn],name:"fom",label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})})}),r.jsx(q,{children:r.jsx(M,{isReadOnly:s,validate:[I,m=>{const c=k("fom");return c?Ju(c,m):null}],name:"tom",label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})})]})})]})]})]})};oi.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetIdentifikasjonPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const tm="_tlfBredde_nvz63_1",sm="_navnBredde_nvz63_5",vs={tlfBredde:tm,navnBredde:sm},di=({readOnly:s=!0})=>{const{watch:i}=Y(),o=i("harRegnskapsforer")||!1;return r.jsxs(r.Fragment,{children:[r.jsx(U,{name:"harRegnskapsforer",label:r.jsx(h,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:r.jsx(h,{id:"Registrering.VirksomhetRegnskapPanel.Yes"}),value:"true"},{label:r.jsx(h,{id:"Registrering.VirksomhetRegnskapPanel.No"}),value:"false"}]}),o&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(le,{name:"navnRegnskapsforer",className:vs.navnBredde,readOnly:s,validate:[A,at],label:r.jsx(h,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:"tlfRegnskapsforer",readOnly:s,validate:[A,un],className:vs.tlfBredde,label:r.jsx(h,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]}),r.jsx(y,{sixteenPx:!0})]})]})};di.__docgenInfo={description:`VirksomhetRegnskapPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const im="_inntektBredde_1xgnj_1",lm={inntektBredde:im},ui=({readOnly:s})=>{var w,b,F,T;const i=$(),{watch:o,setError:d,clearErrors:g,formState:k}=Y(),v=o("varigEndretEllerStartetSisteFireAr")||!1,m=o("harVarigEndring")||!1,c=o("erNyoppstartet")||!1,f=o("erNyIArbeidslivet")||!1,R=!m&&!c&&!f;return V.useEffect(()=>{R&&v&&d("ingenArsakValgt",{type:"custom",message:i.formatMessage({id:"Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak"})}),(!R||!v)&&g("ingenArsakValgt")},[R,v]),r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"varigEndretEllerStartetSisteFireAr",label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.Yes"}),value:"true"},{label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.No"}),value:"false"}]}),v&&r.jsxs("div",{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:"harVarigEndring",label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"})}),r.jsx(y,{fourPx:!0}),m&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(de,{children:r.jsx(M,{name:"varigEndringGjeldendeFom",isReadOnly:s,validate:[I,A],label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),r.jsx(ie,{name:"erNyoppstartet",label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})}),r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:"erNyIArbeidslivet",label:r.jsx(h,{id:"Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet"})}),r.jsx(y,{fourPx:!0}),f&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(de,{children:r.jsx(M,{name:"nyIArbeidslivetFom",isReadOnly:s,validate:[I,A],label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),k.isSubmitted&&((b=(w=k.errors)==null?void 0:w.ingenArsakValgt)==null?void 0:b.message)&&r.jsx(fr,{children:(T=(F=k.errors)==null?void 0:F.ingenArsakValgt)==null?void 0:T.message}),r.jsx(y,{sixteenPx:!0}),r.jsx(Ls,{name:"beskrivelseAvEndring",label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[at]}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:"inntekt",label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:s,validate:[un,A],className:lm.inntektBredde,parse:x=>{const P=parseInt(x.toString(),10);return Number.isNaN(P)?x:P}})]})]}),r.jsx(y,{eightPx:!0})]})};ui.__docgenInfo={description:`VirksomhetStartetEndretPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const gi=({readOnly:s=!0})=>r.jsx(U,{name:"familieEllerVennerTilknyttetNaringen",label:r.jsx(h,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),isReadOnly:s,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(h,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),value:"true"},{label:r.jsx(h,{id:"Registrering.VirksomhetRelasjonPanel.No"}),value:"false"}]});gi.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const ys="typeVirksomhet",fs={[gr.DAGMAMMA]:1,[gr.FISKE]:2,[gr.JORDBRUK_ELLER_SKOGBRUK]:3,[gr.ANNEN]:4},om=(s,i)=>s>i?1:s<i?-1:0,mi=({readOnly:s,alleKodeverk:i})=>{var R,w;const o=i[ee.VIRKSOMHET_TYPE],d=V.useMemo(()=>o.filter(b=>b.kode!==gr.FRILANSER).sort((b,F)=>om(fs[b.kode],fs[F.kode])),[]),{watch:g,setError:k,formState:v,clearErrors:m}=Y(),c=g(ys),f=!c||!Object.values(c).some(b=>b===!0);return V.useEffect(()=>{f&&k("notRegisteredInput",{type:"custom",message:Xu()}),f||m("notRegisteredInput")},[f]),r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.VirksomhetNaeringTypePanel.Title"})}),r.jsx(y,{fourPx:!0}),d.map(b=>r.jsxs(V.Fragment,{children:[r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:`${ys}.${b.kode}`,label:b.navn,readOnly:s},b.kode)]},b.kode)),v.isSubmitted&&((R=v.errors.notRegisteredInput)==null?void 0:R.message)&&r.jsx(fr,{children:(w=v.errors.notRegisteredInput)==null?void 0:w.message})]})};mi.__docgenInfo={description:`VirksomhetTypeNaringPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetTypeNaringPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const dm="_savebutton_tgfg3_1",um="_cancelbutton_tgfg3_1",gm="_form_tgfg3_5",cs={savebutton:dm,cancelbutton:um,form:gm},ki=({showModal:s=!1,readOnly:i=!1,closeEvent:o,onSubmit:d,alleKodeverk:g,virksomhet:k})=>{const v=$(),m=vr({defaultValues:k});return r.jsx(yr,{formMethods:m,children:r.jsxs(Je,{open:s,"aria-label":v.formatMessage({id:"Registrering.RegistrerVirksomhetModalForm.ModalDescription"}),onClose:o,children:[r.jsx(Je.Header,{children:r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.RegistrerVirksomhetModalForm.Title"})})}),r.jsxs(Je.Body,{children:[r.jsx(oi,{readOnly:i,alleKodeverk:g}),r.jsx(mi,{readOnly:i,alleKodeverk:g}),r.jsx(ui,{readOnly:i}),r.jsx(di,{readOnly:i}),r.jsx(y,{sixteenPx:!0}),r.jsx(gi,{readOnly:i}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(Je.Footer,{children:[r.jsx(Ke,{size:"small",variant:"primary",onClick:m.handleSubmit(d),disabled:i,className:cs.savebutton,type:"button",children:r.jsx(h,{id:"Registrering.RegistrerVirksomhetModalForm.Save"})}),r.jsx(Ke,{size:"small",variant:"secondary",onClick:o,disabled:i,className:cs.cancelbutton,type:"button",children:r.jsx(h,{id:"Registrering.RegistrerVirksomhetModalForm.Cancel"})})]})]})})};ki.__docgenInfo={description:`RegistrerVirksomhetModalForm

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder
foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"RegistrerVirksomhetModalForm",props:{showModal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: FormValues) => void",signature:{arguments:[{type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"}]},name:"value"}],return:{name:"void"}}},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},virksomhet:{required:!1,tsType:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"}]},description:""}}};const mm="_divider_1ed8l_1",km="_fieldsList_1ed8l_7",pm="_addCircleIcon_1ed8l_11",vm="_imageText_1ed8l_12",ym="_customLink_1ed8l_17",fm="_removeButton_1ed8l_22",bn={divider:mm,fieldsList:km,addCircleIcon:pm,imageText:vm,customLink:ym,removeButton:fm},jn="egenVirksomhet",pi=({readOnly:s=!1,alleKodeverk:i})=>{var P,G,Se,X;const o=$(),[d,g]=V.useState(),{control:k,setError:v,formState:m,clearErrors:c}=Y(),{fields:f,remove:R,append:w,update:b}=ce({control:k,name:`${jn}.virksomheter`}),F=V.useCallback(J=>{g(J!==void 0?J:-1)},[g]),T=V.useCallback(()=>{g(void 0)},[g]),x=V.useCallback(J=>{const re={...J,landJobberFra:J.virksomhetRegistrertINorge?"NOR":J.landJobberFra,varigEndringGjeldendeFom:J.nyIArbeidslivetFom||J.varigEndringGjeldendeFom};d===-1?w(re):d!==void 0&&b(d,re),T()},[w,b,T,d]);return V.useEffect(()=>{f.length===0&&v(`${jn}.notRegisteredInput`,{type:"custom",message:o.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}),f.length>0&&c(`${jn}.notRegisteredInput`)},[f.length]),r.jsxs("div",{className:bn.fieldsList,children:[f.length>0&&r.jsxs(Zr.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),r.jsx("hr",{className:bn.divider}),f.map((J,re)=>r.jsxs(Q,{children:[r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(ss,{className:bn.customLink,onClick:()=>F(re),onKeyDown:()=>F(re),children:r.jsx(Us,{size:"small",children:J.navn})})}),r.jsx(q,{children:r.jsx(Hs,{className:bn.removeButton,onClick:()=>R(re),onKeyDown:()=>R(re)})})]}),r.jsx("hr",{className:bn.divider}),r.jsx(y,{eightPx:!0})]},J.id))]},1),r.jsxs(ss,{onClick:()=>F(),onKeyDown:J=>J.nativeEvent.code==="Space"?F():!1,children:[r.jsx(Zu,{className:bn.addCircleIcon}),r.jsx(Xe,{className:bn.imageText,children:r.jsx(h,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})]}),m.isSubmitted&&((G=(P=m.errors[jn])==null?void 0:P.notRegisteredInput)==null?void 0:G.message)&&r.jsx(fr,{children:(X=(Se=m.errors[jn])==null?void 0:Se.notRegisteredInput)==null?void 0:X.message}),d!==void 0&&r.jsx(ki,{showModal:!0,virksomhet:d!==-1&&f.length>d?f[d]:void 0,onSubmit:x,closeEvent:T,readOnly:s,alleKodeverk:i})]})};pi.__docgenInfo={description:`RegistrererVirksomhetPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder
foreldrepenger og søker har arbeidet i egen virksomhet.
Viser registrerte virksomheter samt knapp for å legge til nye virksomheter.`,methods:[],displayName:"RegistrerVirksomhetPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const vi=({readOnly:s=!0,alleKodeverk:i})=>{const o=$(),{watch:d}=Y(),g=d(`${jn}.harArbeidetIEgenVirksomhet`)||null;return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.EgenVirksomhet.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${jn}.harArbeidetIEgenVirksomhet`,validate:[A],isReadOnly:s,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:o.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),g&&r.jsx(pi,{readOnly:s,alleKodeverk:i})]})};vi.__docgenInfo={description:`EgenVirksomhetPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
Søker må oppgi om hen har arbdeidet i egen virksomhet.`,methods:[],displayName:"EgenVirksomhetPanel",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const cm=te(ue),ot=({readOnly:s,alleKodeverk:i})=>r.jsx(ke,{value:cm,children:r.jsx(vi,{readOnly:s,alleKodeverk:i})});ot.__docgenInfo={description:"",methods:[],displayName:"VirksomhetPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Ga=te(ue),yi=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:Ga.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"dekningsgrad",validate:[A],isReadOnly:s,isHorizontal:!0,radios:[{label:Ga.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:Ga.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]});yi.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Gr=te(ue),fi=({readOnly:s,annenForelderInformertRequired:i=!1})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:Gr.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Xe,{children:Gr.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})}),r.jsx(y,{eightPx:!0}),r.jsx(U,{name:"annenForelderInformert",validate:i?[A]:[],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:Gr.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:Gr.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})]});fi.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Rn="annenForelder",ci=({readOnly:s,sokerErMor:i})=>{const o=$(),{watch:d}=Y(),g=d(`${Rn}.sokerHarAleneomsorg`),k=d(`${Rn}.denAndreForelderenHarRettPaForeldrepenger`),v=d(`${Rn}.annenForelderRettEØS`);return r.jsxs(lg,{gap:"4",children:[r.jsx(U,{name:`${Rn}.sokerHarAleneomsorg`,label:o.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg.No"}),value:"false"}]}),g===!1&&r.jsx(U,{name:`${Rn}.denAndreForelderenHarRettPaForeldrepenger`,label:o.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger.No"}),value:"false"}]}),g===!1&&k===!1&&r.jsx(U,{name:`${Rn}.annenForelderRettEØS`,label:o.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS.No"}),value:"false"}]}),!i&&g===!1&&k===!1&&v===!1&&r.jsx(U,{name:`${Rn}.morMottarUføretrygd`,label:o.formatMessage({id:"Registrering.Permisjon.MorUføretrygd"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.MorUføretrygd.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.MorUføretrygd.No"}),value:"false"}]})]})};ci.__docgenInfo={description:"",methods:[],displayName:"PermisjonRettigheterPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},denAndreForelderenHarRettPaForeldrepenger:{required:!1,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const hm="_buttonRemove_n1u93_1",bm="_buttonRemoveFirst_n1u93_9",Rm="_notLastRow_n1u93_17",jm="_skjulOverskrift_n1u93_21",qm="_visOverskrift_n1u93_25",Tm="_smalHeader_n1u93_29",Am="_alignSamtidigUttak_n1u93_33",wm="_selectFieldWidth_n1u93_37",tn={buttonRemove:hm,buttonRemoveFirst:bm,notLastRow:Rm,skjulOverskrift:jm,visOverskrift:qm,smalHeader:Tm,alignSamtidigUttak:Am,selectFieldWidth:wm},Fm=pr(100),Kn="tidsromPermisjon",De="permisjonsPerioder",dt=[ln.FELLESPERIODE,ln.FEDREKVOTE,ln.FORELDREPENGER_FOR_FODSEL,ln.FORELDREPENGER,ln.MODREKVOTE],Pm=s=>s.filter(({kode:i})=>dt.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),_m=s=>s.map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),hi=[ln.FEDREKVOTE,ln.FORELDREPENGER_FOR_FODSEL,ln.MODREKVOTE],Cr=(s,i)=>s?i:"",Nm=s=>!!s&&gn(s,Tn).isBefore(gn("2019-01-01")),hs=s=>()=>{const o=s(`${Kn}.${De}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return Yn(o)},bs=(s,i,o)=>()=>{const d=s(`${Kn}.${De}.${i}.periodeFom`),g=s(`${Kn}.${De}.${i}.periodeTom`);return!g||!d?null:o?Ae(g)(d):xe(d)(g)},la=({sokerErMor:s,readOnly:i,alleKodeverk:o})=>{const d=$(),g=o[ee.UTTAK_PERIODE_TYPE],k=o[ee.MORS_AKTIVITET];k.filter(({kode:T})=>T==="-").length===0&&k.unshift({kode:"-",navn:"",kodeverk:""});const{control:v,getValues:m,trigger:c,watch:f,formState:{isSubmitted:R}}=Y(),{fields:w,remove:b,append:F}=ce({control:v,name:`${Kn}.${De}`});return V.useEffect(()=>{w.length===0&&F({})},[]),r.jsx(Oe,{readOnly:i,fields:w,bodyText:d.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),emptyPeriodTemplate:{},append:F,remove:b,children:(T,x)=>{const P=x===0,G=f(`${Kn}.${De}.${x}`),Se=Nm(G.periodeFom),X=P?tn.visOverskrift:tn.skjulOverskrift,J=hi.includes(G.periodeType)||G.periodeType==="",re=`${Kn}.${De}.${x}`;return r.jsxs("div",{children:[r.jsxs(Q,{children:[r.jsxs(L,{wrap:!0,children:[r.jsx(q,{className:tn.selectFieldWidth,children:r.jsx(fe,{readOnly:i,name:`${re}.periodeType`,label:Cr(P,d.formatMessage({id:"Registrering.Permisjon.periodeType"})),selectValues:Pm(g),validate:[A]})}),r.jsx(q,{children:r.jsx(M,{isReadOnly:i,name:`${re}.periodeFom`,label:Cr(P,d.formatMessage({id:"Registrering.Permisjon.periodeFom"})),validate:[A,I,bs(m,x,!0),hs(m)],onChange:()=>R?c():void 0})}),r.jsx(q,{children:r.jsx(M,{isReadOnly:i,name:`${re}.periodeTom`,label:Cr(P,d.formatMessage({id:"Registrering.Permisjon.periodeTom"})),validate:[A,I,bs(m,x,!1),hs(m)],onChange:()=>R?c():void 0})}),!s&&r.jsx(q,{children:r.jsx(fe,{readOnly:i,disabled:J,name:`${re}.morsAktivitet`,label:Cr(P,d.formatMessage({id:"Registrering.Permisjon.Fellesperiode.morsAktivitet"})),selectValues:_m(k),hideValueOnDisable:!0})}),r.jsxs(q,{className:tn.smalHeader,children:[r.jsx(me,{size:"small",className:X,children:r.jsx(h,{id:"Registrering.Permisjon.Flerbarnsdager"})}),r.jsx(ie,{readOnly:i,name:`${re}.flerbarnsdager`,label:" "})]}),r.jsxs(q,{className:tn.smalHeader,children:[r.jsx(me,{size:"small",className:X,children:r.jsx(h,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),r.jsx(ie,{readOnly:i,name:`${re}.harSamtidigUttak`,label:" "})]}),G.harSamtidigUttak&&r.jsx(q,{className:P?"":tn.alignSamtidigUttak,children:r.jsx(le,{name:`${re}.samtidigUttaksprosent`,validate:[Wa,Fm],label:d.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"}),normalizeOnBlur:pn=>Number.isNaN(pn)?pn:parseFloat(pn.toString()).toFixed(2)})}),r.jsx(q,{children:!i&&r.jsx(Ke,{className:P?tn.buttonRemoveFirst:tn.buttonRemove,type:"button",variant:"tertiary-neutral",icon:r.jsx(Hs,{}),onClick:()=>{b(x)}})})]}),Se&&r.jsxs(r.Fragment,{children:[r.jsx(L,{wrap:!0,children:r.jsx(Qr,{size:"small",variant:"warning",children:r.jsx(h,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})}),r.jsx(y,{sixteenPx:!0})]})]}),r.jsx(y,{eightPx:!0})]},T.id)}})};la.transformValues=s=>s.map(i=>hi.includes(i.periodeType)?{periodeType:i.periodeType,periodeFom:i.periodeFom,periodeTom:i.periodeTom,flerbarnsdager:i.flerbarnsdager?i.flerbarnsdager:!1,harSamtidigUttak:i.harSamtidigUttak?i.harSamtidigUttak:!1,samtidigUttaksprosent:i.samtidigUttaksprosent}:{periodeType:i.periodeType,periodeFom:i.periodeFom,periodeTom:i.periodeTom,morsAktivitet:i.morsAktivitet,flerbarnsdager:i.flerbarnsdager?i.flerbarnsdager:!1,harSamtidigUttak:i.harSamtidigUttak?i.harSamtidigUttak:!1,samtidigUttaksprosent:i.samtidigUttaksprosent});la.__docgenInfo={description:`RenderPermisjonPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av perioder med permijon.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"FormValues[]"}}],returns:null}],displayName:"RenderPermisjonPeriodeFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const xm="_notLastRow_pe2tr_1",Om={notLastRow:xm},on="tidsromPermisjon",dn="utsettelsePeriode",Rs={periodeFom:"",periodeTom:"",arsakForUtsettelse:""},js=s=>()=>{const o=s(`${on}.${dn}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},qs=(s,i,o)=>()=>{const d=s(`${on}.${dn}.${i}.periodeFom`),g=s(`${on}.${dn}.${i}.periodeTom`);return!g&&!d?null:o?Ae(g)(d):xe(d)(g)},Sm=s=>s.map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Vm=s=>s.filter(({kode:i})=>dt.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),bi=({utsettelseReasons:s,utsettelseKvoter:i,readOnly:o})=>{const d=$(),{control:g,getValues:k,trigger:v,formState:{isSubmitted:m}}=Y(),{fields:c,remove:f,append:R}=ce({control:g,name:`${on}.${dn}`});V.useEffect(()=>{c.length===0&&R(Rs)},[]);const w=V.useCallback(()=>m?v():void 0,[m,v]),b=`${on}.${dn}`;return r.jsx(Oe,{fields:c,emptyPeriodTemplate:Rs,bodyText:d.formatMessage({id:"Registrering.Permisjon.Utsettelse.LeggTilPeriode"}),readOnly:o,append:R,remove:f,children:(F,T,x)=>r.jsxs("div",{className:T!==c.length-1?Om.notLastRow:"",children:[T>0&&r.jsxs(r.Fragment,{children:[r.jsx(nt,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(Q,{wrap:!0,children:[r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(fe,{name:`${b}.${T}.periodeForUtsettelse`,label:T===0?d.formatMessage({id:"Registrering.Permisjon.Utsettelse.Periode"}):"",selectValues:Vm(i),validate:[A]})}),r.jsx(q,{children:r.jsx(M,{name:`${b}.${T}.periodeFom`,label:T===0?d.formatMessage({id:"Registrering.Permisjon.periodeFom"}):"",validate:[A,I,qs(k,T,!0),js(k)],onChange:w})}),r.jsx(q,{children:r.jsx(M,{name:`${b}.${T}.periodeTom`,label:T===0?d.formatMessage({id:"Registrering.Permisjon.periodeTom"}):"",validate:[A,I,qs(k,T,!1),js(k)],onChange:w})}),r.jsx(q,{children:r.jsx(fe,{name:`${b}.${T}.arsakForUtsettelse`,label:T===0?d.formatMessage({id:"Registrering.Permisjon.Utsettelse.Arsak"}):"",selectValues:Sm(s),validate:[A],onChange:w})})]}),r.jsx(y,{eightPx:!0}),r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(fe,{label:T===0?d.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}):"",name:`${b}.${T}.erArbeidstaker`,selectValues:[r.jsx("option",{value:"true",children:d.formatMessage({id:"Registrering.Permisjon.ErArbeidstaker"})},"true"),r.jsx("option",{value:"false",children:d.formatMessage({id:"Registrering.Permisjon.ErIkkeArbeidstaker"})},"false")],validate:[P=>k(`${on}.${dn}.${T}.arsakForUtsettelse`)==="ARBEID"?A(P):void 0]})}),x&&r.jsx(q,{children:x()})]})]})]},F.id)})};bi.__docgenInfo={description:`RenderUtsettelsePeriodeFieldArray

Viser inputfelter for dato for bestemmelse av utsettelseperiode.`,methods:[],displayName:"RenderUtsettelsePeriodeFieldArray",props:{utsettelseReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},utsettelseKvoter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const oa=({readOnly:s,alleKodeverk:i})=>{const o=i[ee.UTSETTELSE_AARSAK_TYPE],d=i[ee.UTTAK_PERIODE_TYPE],{watch:g}=Y(),k=g(`${on}.skalUtsette`)||!1;return r.jsxs(r.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.Utsettelse.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${on}.skalUtsette`,label:r.jsx(h,{id:"Registrering.Permisjon.Utsettelse.UtsettUttaket"})}),k&&r.jsx(bi,{utsettelseReasons:o,utsettelseKvoter:d,readOnly:s})]})};oa.buildInitialValues=()=>({[dn]:[{}],skalUtsette:!1});oa.__docgenInfo={description:`PermisjonUtsettelsePanel

Viser panel for utsettelse
Komponenten har inputfelter og må derfor rendres som etterkommer av form komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonUtsettelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};var Ri={exports:{}};(function(s,i){(function(o,d){s.exports=d()})(Ku,function(){var o;function d(){return o.apply(null,arguments)}function g(e){o=e}function k(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function v(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function m(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function c(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(m(e,n))return!1;return!0}function f(e){return e===void 0}function R(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function w(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function b(e,n){var a=[],t,l=e.length;for(t=0;t<l;++t)a.push(n(e[t],t));return a}function F(e,n){for(var a in n)m(n,a)&&(e[a]=n[a]);return m(n,"toString")&&(e.toString=n.toString),m(n,"valueOf")&&(e.valueOf=n.valueOf),e}function T(e,n,a,t){return Mt(e,n,a,t,!0).utc()}function x(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function P(e){return e._pf==null&&(e._pf=x()),e._pf}var G;Array.prototype.some?G=Array.prototype.some:G=function(e){var n=Object(this),a=n.length>>>0,t;for(t=0;t<a;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};function Se(e){var n=null,a=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(n=P(e),a=G.call(n.parsedDateParts,function(l){return l!=null}),t=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&a),e._strict&&(t=t&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function X(e){var n=T(NaN);return e!=null?F(P(n),e):P(n).userInvalidated=!0,n}var J=d.momentProperties=[],re=!1;function pn(e,n){var a,t,l,u=J.length;if(f(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),f(n._i)||(e._i=n._i),f(n._f)||(e._f=n._f),f(n._l)||(e._l=n._l),f(n._strict)||(e._strict=n._strict),f(n._tzm)||(e._tzm=n._tzm),f(n._isUTC)||(e._isUTC=n._isUTC),f(n._offset)||(e._offset=n._offset),f(n._pf)||(e._pf=P(n)),f(n._locale)||(e._locale=n._locale),u>0)for(a=0;a<u;a++)t=J[a],l=n[t],f(l)||(e[t]=l);return e}function Zn(e){pn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),re===!1&&(re=!0,d.updateOffset(this),re=!1)}function we(e){return e instanceof Zn||e!=null&&e._isAMomentObject!=null}function ut(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function Re(e,n){var a=!0;return F(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),a){var t=[],l,u,p,_=arguments.length;for(u=0;u<_;u++){if(l="",typeof arguments[u]=="object"){l+=`
[`+u+"] ";for(p in arguments[0])m(arguments[0],p)&&(l+=p+": "+arguments[0][p]+", ");l=l.slice(0,-2)}else l=arguments[u];t.push(l)}ut(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),a=!1}return n.apply(this,arguments)},n)}var gt={};function mt(e,n){d.deprecationHandler!=null&&d.deprecationHandler(e,n),gt[e]||(ut(n),gt[e]=!0)}d.suppressDeprecationWarnings=!1,d.deprecationHandler=null;function Ve(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Di(e){var n,a;for(a in e)m(e,a)&&(n=e[a],Ve(n)?this[a]=n:this["_"+a]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function ma(e,n){var a=F({},e),t;for(t in n)m(n,t)&&(v(e[t])&&v(n[t])?(a[t]={},F(a[t],e[t]),F(a[t],n[t])):n[t]!=null?a[t]=n[t]:delete a[t]);for(t in e)m(e,t)&&!m(n,t)&&v(e[t])&&(a[t]=F({},a[t]));return a}function ka(e){e!=null&&this.set(e)}var pa;Object.keys?pa=Object.keys:pa=function(e){var n,a=[];for(n in e)m(e,n)&&a.push(n);return a};var Ki={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Bi(e,n,a){var t=this._calendar[e]||this._calendar.sameElse;return Ve(t)?t.call(n,a):t}function Me(e,n,a){var t=""+Math.abs(e),l=n-t.length,u=e>=0;return(u?a?"+":"":"-")+Math.pow(10,Math.max(0,l)).toString().substr(1)+t}var va=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,hr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ya={},An={};function O(e,n,a,t){var l=t;typeof t=="string"&&(l=function(){return this[t]()}),e&&(An[e]=l),n&&(An[n[0]]=function(){return Me(l.apply(this,arguments),n[1],n[2])}),a&&(An[a]=function(){return this.localeData().ordinal(l.apply(this,arguments),e)})}function Li(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Yi(e){var n=e.match(va),a,t;for(a=0,t=n.length;a<t;a++)An[n[a]]?n[a]=An[n[a]]:n[a]=Li(n[a]);return function(l){var u="",p;for(p=0;p<t;p++)u+=Ve(n[p])?n[p].call(l,e):n[p];return u}}function br(e,n){return e.isValid()?(n=kt(n,e.localeData()),ya[n]=ya[n]||Yi(n),ya[n](e)):e.localeData().invalidDate()}function kt(e,n){var a=5;function t(l){return n.longDateFormat(l)||l}for(hr.lastIndex=0;a>=0&&hr.test(e);)e=e.replace(hr,t),hr.lastIndex=0,a-=1;return e}var Ui={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Hi(e){var n=this._longDateFormat[e],a=this._longDateFormat[e.toUpperCase()];return n||!a?n:(this._longDateFormat[e]=a.match(va).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var $i="Invalid date";function Gi(){return this._invalidDate}var Ci="%d",Wi=/\d{1,2}/;function zi(e){return this._ordinal.replace("%d",e)}var Ji={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Xi(e,n,a,t){var l=this._relativeTime[a];return Ve(l)?l(e,n,a,t):l.replace(/%d/i,e)}function Zi(e,n){var a=this._relativeTime[e>0?"future":"past"];return Ve(a)?a(n):a.replace(/%s/i,n)}var pt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function je(e){return typeof e=="string"?pt[e]||pt[e.toLowerCase()]:void 0}function fa(e){var n={},a,t;for(t in e)m(e,t)&&(a=je(t),a&&(n[a]=e[t]));return n}var Qi={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function el(e){var n=[],a;for(a in e)m(e,a)&&n.push({unit:a,priority:Qi[a]});return n.sort(function(t,l){return t.priority-l.priority}),n}var vt=/\d/,he=/\d\d/,yt=/\d{3}/,ca=/\d{4}/,Rr=/[+-]?\d{6}/,C=/\d\d?/,ft=/\d\d\d\d?/,ct=/\d\d\d\d\d\d?/,jr=/\d{1,3}/,ha=/\d{1,4}/,qr=/[+-]?\d{1,6}/,wn=/\d+/,Tr=/[+-]?\d+/,nl=/Z|[+-]\d\d:?\d\d/gi,Ar=/Z|[+-]\d\d(?::?\d\d)?/gi,rl=/[+-]?\d+(\.\d{1,3})?/,Qn=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Fn=/^[1-9]\d?/,ba=/^([1-9]\d|\d)/,wr;wr={};function N(e,n,a){wr[e]=Ve(n)?n:function(t,l){return t&&a?a:n}}function al(e,n){return m(wr,e)?wr[e](n._strict,n._locale):new RegExp(tl(e))}function tl(e){return Be(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,a,t,l,u){return a||t||l||u}))}function Be(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function qe(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function E(e){var n=+e,a=0;return n!==0&&isFinite(n)&&(a=qe(n)),a}var Ra={};function H(e,n){var a,t=n,l;for(typeof e=="string"&&(e=[e]),R(n)&&(t=function(u,p){p[n]=E(u)}),l=e.length,a=0;a<l;a++)Ra[e[a]]=t}function er(e,n){H(e,function(a,t,l,u){l._w=l._w||{},n(a,l._w,l,u)})}function sl(e,n,a){n!=null&&m(Ra,e)&&Ra[e](n,a._a,a,e)}function Fr(e){return e%4===0&&e%100!==0||e%400===0}var ge=0,Le=1,Ee=2,ae=3,Fe=4,Ye=5,vn=6,il=7,ll=8;O("Y",0,0,function(){var e=this.year();return e<=9999?Me(e,4):"+"+e}),O(0,["YY",2],0,function(){return this.year()%100}),O(0,["YYYY",4],0,"year"),O(0,["YYYYY",5],0,"year"),O(0,["YYYYYY",6,!0],0,"year"),N("Y",Tr),N("YY",C,he),N("YYYY",ha,ca),N("YYYYY",qr,Rr),N("YYYYYY",qr,Rr),H(["YYYYY","YYYYYY"],ge),H("YYYY",function(e,n){n[ge]=e.length===2?d.parseTwoDigitYear(e):E(e)}),H("YY",function(e,n){n[ge]=d.parseTwoDigitYear(e)}),H("Y",function(e,n){n[ge]=parseInt(e,10)});function nr(e){return Fr(e)?366:365}d.parseTwoDigitYear=function(e){return E(e)+(E(e)>68?1900:2e3)};var ht=Pn("FullYear",!0);function ol(){return Fr(this.year())}function Pn(e,n){return function(a){return a!=null?(bt(this,e,a),d.updateOffset(this,n),this):rr(this,e)}}function rr(e,n){if(!e.isValid())return NaN;var a=e._d,t=e._isUTC;switch(n){case"Milliseconds":return t?a.getUTCMilliseconds():a.getMilliseconds();case"Seconds":return t?a.getUTCSeconds():a.getSeconds();case"Minutes":return t?a.getUTCMinutes():a.getMinutes();case"Hours":return t?a.getUTCHours():a.getHours();case"Date":return t?a.getUTCDate():a.getDate();case"Day":return t?a.getUTCDay():a.getDay();case"Month":return t?a.getUTCMonth():a.getMonth();case"FullYear":return t?a.getUTCFullYear():a.getFullYear();default:return NaN}}function bt(e,n,a){var t,l,u,p,_;if(!(!e.isValid()||isNaN(a))){switch(t=e._d,l=e._isUTC,n){case"Milliseconds":return void(l?t.setUTCMilliseconds(a):t.setMilliseconds(a));case"Seconds":return void(l?t.setUTCSeconds(a):t.setSeconds(a));case"Minutes":return void(l?t.setUTCMinutes(a):t.setMinutes(a));case"Hours":return void(l?t.setUTCHours(a):t.setHours(a));case"Date":return void(l?t.setUTCDate(a):t.setDate(a));case"FullYear":break;default:return}u=a,p=e.month(),_=e.date(),_=_===29&&p===1&&!Fr(u)?28:_,l?t.setUTCFullYear(u,p,_):t.setFullYear(u,p,_)}}function dl(e){return e=je(e),Ve(this[e])?this[e]():this}function ul(e,n){if(typeof e=="object"){e=fa(e);var a=el(e),t,l=a.length;for(t=0;t<l;t++)this[a[t].unit](e[a[t].unit])}else if(e=je(e),Ve(this[e]))return this[e](n);return this}function gl(e,n){return(e%n+n)%n}var Z;Array.prototype.indexOf?Z=Array.prototype.indexOf:Z=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function ja(e,n){if(isNaN(e)||isNaN(n))return NaN;var a=gl(n,12);return e+=(n-a)/12,a===1?Fr(e)?29:28:31-a%7%2}O("M",["MM",2],"Mo",function(){return this.month()+1}),O("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),O("MMMM",0,0,function(e){return this.localeData().months(this,e)}),N("M",C,Fn),N("MM",C,he),N("MMM",function(e,n){return n.monthsShortRegex(e)}),N("MMMM",function(e,n){return n.monthsRegex(e)}),H(["M","MM"],function(e,n){n[Le]=E(e)-1}),H(["MMM","MMMM"],function(e,n,a,t){var l=a._locale.monthsParse(e,t,a._strict);l!=null?n[Le]=l:P(a).invalidMonth=e});var ml="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Rt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),jt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,kl=Qn,pl=Qn;function vl(e,n){return e?k(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||jt).test(n)?"format":"standalone"][e.month()]:k(this._months)?this._months:this._months.standalone}function yl(e,n){return e?k(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[jt.test(n)?"format":"standalone"][e.month()]:k(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function fl(e,n,a){var t,l,u,p=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)u=T([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(u,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(u,"").toLocaleLowerCase();return a?n==="MMM"?(l=Z.call(this._shortMonthsParse,p),l!==-1?l:null):(l=Z.call(this._longMonthsParse,p),l!==-1?l:null):n==="MMM"?(l=Z.call(this._shortMonthsParse,p),l!==-1?l:(l=Z.call(this._longMonthsParse,p),l!==-1?l:null)):(l=Z.call(this._longMonthsParse,p),l!==-1?l:(l=Z.call(this._shortMonthsParse,p),l!==-1?l:null))}function cl(e,n,a){var t,l,u;if(this._monthsParseExact)return fl.call(this,e,n,a);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(l=T([2e3,t]),a&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(l,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(l,"").replace(".","")+"$","i")),!a&&!this._monthsParse[t]&&(u="^"+this.months(l,"")+"|^"+this.monthsShort(l,""),this._monthsParse[t]=new RegExp(u.replace(".",""),"i")),a&&n==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(a&&n==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!a&&this._monthsParse[t].test(e))return t}}function qt(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=E(n);else if(n=e.localeData().monthsParse(n),!R(n))return e}var a=n,t=e.date();return t=t<29?t:Math.min(t,ja(e.year(),a)),e._isUTC?e._d.setUTCMonth(a,t):e._d.setMonth(a,t),e}function Tt(e){return e!=null?(qt(this,e),d.updateOffset(this,!0),this):rr(this,"Month")}function hl(){return ja(this.year(),this.month())}function bl(e){return this._monthsParseExact?(m(this,"_monthsRegex")||At.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=kl),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Rl(e){return this._monthsParseExact?(m(this,"_monthsRegex")||At.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=pl),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function At(){function e(S,D){return D.length-S.length}var n=[],a=[],t=[],l,u,p,_;for(l=0;l<12;l++)u=T([2e3,l]),p=Be(this.monthsShort(u,"")),_=Be(this.months(u,"")),n.push(p),a.push(_),t.push(_),t.push(p);n.sort(e),a.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function jl(e,n,a,t,l,u,p){var _;return e<100&&e>=0?(_=new Date(e+400,n,a,t,l,u,p),isFinite(_.getFullYear())&&_.setFullYear(e)):_=new Date(e,n,a,t,l,u,p),_}function ar(e){var n,a;return e<100&&e>=0?(a=Array.prototype.slice.call(arguments),a[0]=e+400,n=new Date(Date.UTC.apply(null,a)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function Pr(e,n,a){var t=7+n-a,l=(7+ar(e,0,t).getUTCDay()-n)%7;return-l+t-1}function wt(e,n,a,t,l){var u=(7+a-t)%7,p=Pr(e,t,l),_=1+7*(n-1)+u+p,S,D;return _<=0?(S=e-1,D=nr(S)+_):_>nr(e)?(S=e+1,D=_-nr(e)):(S=e,D=_),{year:S,dayOfYear:D}}function tr(e,n,a){var t=Pr(e.year(),n,a),l=Math.floor((e.dayOfYear()-t-1)/7)+1,u,p;return l<1?(p=e.year()-1,u=l+Ue(p,n,a)):l>Ue(e.year(),n,a)?(u=l-Ue(e.year(),n,a),p=e.year()+1):(p=e.year(),u=l),{week:u,year:p}}function Ue(e,n,a){var t=Pr(e,n,a),l=Pr(e+1,n,a);return(nr(e)-t+l)/7}O("w",["ww",2],"wo","week"),O("W",["WW",2],"Wo","isoWeek"),N("w",C,Fn),N("ww",C,he),N("W",C,Fn),N("WW",C,he),er(["w","ww","W","WW"],function(e,n,a,t){n[t.substr(0,1)]=E(e)});function ql(e){return tr(e,this._week.dow,this._week.doy).week}var Tl={dow:0,doy:6};function Al(){return this._week.dow}function wl(){return this._week.doy}function Fl(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function Pl(e){var n=tr(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}O("d",0,"do","day"),O("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),O("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),O("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),O("e",0,0,"weekday"),O("E",0,0,"isoWeekday"),N("d",C),N("e",C),N("E",C),N("dd",function(e,n){return n.weekdaysMinRegex(e)}),N("ddd",function(e,n){return n.weekdaysShortRegex(e)}),N("dddd",function(e,n){return n.weekdaysRegex(e)}),er(["dd","ddd","dddd"],function(e,n,a,t){var l=a._locale.weekdaysParse(e,t,a._strict);l!=null?n.d=l:P(a).invalidWeekday=e}),er(["d","e","E"],function(e,n,a,t){n[t]=E(e)});function _l(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Nl(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function qa(e,n){return e.slice(n,7).concat(e.slice(0,n))}var xl="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ft="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ol="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Sl=Qn,Vl=Qn,Ml=Qn;function El(e,n){var a=k(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?qa(a,this._week.dow):e?a[e.day()]:a}function Il(e){return e===!0?qa(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Dl(e){return e===!0?qa(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Kl(e,n,a){var t,l,u,p=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)u=T([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(u,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(u,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(u,"").toLocaleLowerCase();return a?n==="dddd"?(l=Z.call(this._weekdaysParse,p),l!==-1?l:null):n==="ddd"?(l=Z.call(this._shortWeekdaysParse,p),l!==-1?l:null):(l=Z.call(this._minWeekdaysParse,p),l!==-1?l:null):n==="dddd"?(l=Z.call(this._weekdaysParse,p),l!==-1||(l=Z.call(this._shortWeekdaysParse,p),l!==-1)?l:(l=Z.call(this._minWeekdaysParse,p),l!==-1?l:null)):n==="ddd"?(l=Z.call(this._shortWeekdaysParse,p),l!==-1||(l=Z.call(this._weekdaysParse,p),l!==-1)?l:(l=Z.call(this._minWeekdaysParse,p),l!==-1?l:null)):(l=Z.call(this._minWeekdaysParse,p),l!==-1||(l=Z.call(this._weekdaysParse,p),l!==-1)?l:(l=Z.call(this._shortWeekdaysParse,p),l!==-1?l:null))}function Bl(e,n,a){var t,l,u;if(this._weekdaysParseExact)return Kl.call(this,e,n,a);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(l=T([2e3,1]).day(t),a&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(l,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(l,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(l,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(u="^"+this.weekdays(l,"")+"|^"+this.weekdaysShort(l,"")+"|^"+this.weekdaysMin(l,""),this._weekdaysParse[t]=new RegExp(u.replace(".",""),"i")),a&&n==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(a&&n==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(a&&n==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!a&&this._weekdaysParse[t].test(e))return t}}function Ll(e){if(!this.isValid())return e!=null?this:NaN;var n=rr(this,"Day");return e!=null?(e=_l(e,this.localeData()),this.add(e-n,"d")):n}function Yl(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function Ul(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=Nl(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function Hl(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Ta.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=Sl),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function $l(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Ta.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Vl),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Gl(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Ta.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ml),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ta(){function e(pe,We){return We.length-pe.length}var n=[],a=[],t=[],l=[],u,p,_,S,D;for(u=0;u<7;u++)p=T([2e3,1]).day(u),_=Be(this.weekdaysMin(p,"")),S=Be(this.weekdaysShort(p,"")),D=Be(this.weekdays(p,"")),n.push(_),a.push(S),t.push(D),l.push(_),l.push(S),l.push(D);n.sort(e),a.sort(e),t.sort(e),l.sort(e),this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Aa(){return this.hours()%12||12}function Cl(){return this.hours()||24}O("H",["HH",2],0,"hour"),O("h",["hh",2],0,Aa),O("k",["kk",2],0,Cl),O("hmm",0,0,function(){return""+Aa.apply(this)+Me(this.minutes(),2)}),O("hmmss",0,0,function(){return""+Aa.apply(this)+Me(this.minutes(),2)+Me(this.seconds(),2)}),O("Hmm",0,0,function(){return""+this.hours()+Me(this.minutes(),2)}),O("Hmmss",0,0,function(){return""+this.hours()+Me(this.minutes(),2)+Me(this.seconds(),2)});function Pt(e,n){O(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}Pt("a",!0),Pt("A",!1);function _t(e,n){return n._meridiemParse}N("a",_t),N("A",_t),N("H",C,ba),N("h",C,Fn),N("k",C,Fn),N("HH",C,he),N("hh",C,he),N("kk",C,he),N("hmm",ft),N("hmmss",ct),N("Hmm",ft),N("Hmmss",ct),H(["H","HH"],ae),H(["k","kk"],function(e,n,a){var t=E(e);n[ae]=t===24?0:t}),H(["a","A"],function(e,n,a){a._isPm=a._locale.isPM(e),a._meridiem=e}),H(["h","hh"],function(e,n,a){n[ae]=E(e),P(a).bigHour=!0}),H("hmm",function(e,n,a){var t=e.length-2;n[ae]=E(e.substr(0,t)),n[Fe]=E(e.substr(t)),P(a).bigHour=!0}),H("hmmss",function(e,n,a){var t=e.length-4,l=e.length-2;n[ae]=E(e.substr(0,t)),n[Fe]=E(e.substr(t,2)),n[Ye]=E(e.substr(l)),P(a).bigHour=!0}),H("Hmm",function(e,n,a){var t=e.length-2;n[ae]=E(e.substr(0,t)),n[Fe]=E(e.substr(t))}),H("Hmmss",function(e,n,a){var t=e.length-4,l=e.length-2;n[ae]=E(e.substr(0,t)),n[Fe]=E(e.substr(t,2)),n[Ye]=E(e.substr(l))});function Wl(e){return(e+"").toLowerCase().charAt(0)==="p"}var zl=/[ap]\.?m?\.?/i,Jl=Pn("Hours",!0);function Xl(e,n,a){return e>11?a?"pm":"PM":a?"am":"AM"}var Nt={calendar:Ki,longDateFormat:Ui,invalidDate:$i,ordinal:Ci,dayOfMonthOrdinalParse:Wi,relativeTime:Ji,months:ml,monthsShort:Rt,week:Tl,weekdays:xl,weekdaysMin:Ol,weekdaysShort:Ft,meridiemParse:zl},z={},sr={},ir;function Zl(e,n){var a,t=Math.min(e.length,n.length);for(a=0;a<t;a+=1)if(e[a]!==n[a])return a;return t}function xt(e){return e&&e.toLowerCase().replace("_","-")}function Ql(e){for(var n=0,a,t,l,u;n<e.length;){for(u=xt(e[n]).split("-"),a=u.length,t=xt(e[n+1]),t=t?t.split("-"):null;a>0;){if(l=_r(u.slice(0,a).join("-")),l)return l;if(t&&t.length>=a&&Zl(u,t)>=a-1)break;a--}n++}return ir}function eo(e){return!!(e&&e.match("^[^/\\\\]*$"))}function _r(e){var n=null,a;if(z[e]===void 0&&s&&s.exports&&eo(e))try{n=ir._abbr,a=ug,a("./locale/"+e),nn(n)}catch{z[e]=null}return z[e]}function nn(e,n){var a;return e&&(f(n)?a=He(e):a=wa(e,n),a?ir=a:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),ir._abbr}function wa(e,n){if(n!==null){var a,t=Nt;if(n.abbr=e,z[e]!=null)mt("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=z[e]._config;else if(n.parentLocale!=null)if(z[n.parentLocale]!=null)t=z[n.parentLocale]._config;else if(a=_r(n.parentLocale),a!=null)t=a._config;else return sr[n.parentLocale]||(sr[n.parentLocale]=[]),sr[n.parentLocale].push({name:e,config:n}),null;return z[e]=new ka(ma(t,n)),sr[e]&&sr[e].forEach(function(l){wa(l.name,l.config)}),nn(e),z[e]}else return delete z[e],null}function no(e,n){if(n!=null){var a,t,l=Nt;z[e]!=null&&z[e].parentLocale!=null?z[e].set(ma(z[e]._config,n)):(t=_r(e),t!=null&&(l=t._config),n=ma(l,n),t==null&&(n.abbr=e),a=new ka(n),a.parentLocale=z[e],z[e]=a),nn(e)}else z[e]!=null&&(z[e].parentLocale!=null?(z[e]=z[e].parentLocale,e===nn()&&nn(e)):z[e]!=null&&delete z[e]);return z[e]}function He(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return ir;if(!k(e)){if(n=_r(e),n)return n;e=[e]}return Ql(e)}function ro(){return pa(z)}function Fa(e){var n,a=e._a;return a&&P(e).overflow===-2&&(n=a[Le]<0||a[Le]>11?Le:a[Ee]<1||a[Ee]>ja(a[ge],a[Le])?Ee:a[ae]<0||a[ae]>24||a[ae]===24&&(a[Fe]!==0||a[Ye]!==0||a[vn]!==0)?ae:a[Fe]<0||a[Fe]>59?Fe:a[Ye]<0||a[Ye]>59?Ye:a[vn]<0||a[vn]>999?vn:-1,P(e)._overflowDayOfYear&&(n<ge||n>Ee)&&(n=Ee),P(e)._overflowWeeks&&n===-1&&(n=il),P(e)._overflowWeekday&&n===-1&&(n=ll),P(e).overflow=n),e}var ao=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,to=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,so=/Z|[+-]\d\d(?::?\d\d)?/,Nr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Pa=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],io=/^\/?Date\((-?\d+)/i,lo=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,oo={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Ot(e){var n,a,t=e._i,l=ao.exec(t)||to.exec(t),u,p,_,S,D=Nr.length,pe=Pa.length;if(l){for(P(e).iso=!0,n=0,a=D;n<a;n++)if(Nr[n][1].exec(l[1])){p=Nr[n][0],u=Nr[n][2]!==!1;break}if(p==null){e._isValid=!1;return}if(l[3]){for(n=0,a=pe;n<a;n++)if(Pa[n][1].exec(l[3])){_=(l[2]||" ")+Pa[n][0];break}if(_==null){e._isValid=!1;return}}if(!u&&_!=null){e._isValid=!1;return}if(l[4])if(so.exec(l[4]))S="Z";else{e._isValid=!1;return}e._f=p+(_||"")+(S||""),Na(e)}else e._isValid=!1}function uo(e,n,a,t,l,u){var p=[go(e),Rt.indexOf(n),parseInt(a,10),parseInt(t,10),parseInt(l,10)];return u&&p.push(parseInt(u,10)),p}function go(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function mo(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function ko(e,n,a){if(e){var t=Ft.indexOf(e),l=new Date(n[0],n[1],n[2]).getDay();if(t!==l)return P(a).weekdayMismatch=!0,a._isValid=!1,!1}return!0}function po(e,n,a){if(e)return oo[e];if(n)return 0;var t=parseInt(a,10),l=t%100,u=(t-l)/100;return u*60+l}function St(e){var n=lo.exec(mo(e._i)),a;if(n){if(a=uo(n[4],n[3],n[2],n[5],n[6],n[7]),!ko(n[1],a,e))return;e._a=a,e._tzm=po(n[8],n[9],n[10]),e._d=ar.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),P(e).rfc2822=!0}else e._isValid=!1}function vo(e){var n=io.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(Ot(e),e._isValid===!1)delete e._isValid;else return;if(St(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=Re("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function _n(e,n,a){return e??n??a}function yo(e){var n=new Date(d.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function _a(e){var n,a,t=[],l,u,p;if(!e._d){for(l=yo(e),e._w&&e._a[Ee]==null&&e._a[Le]==null&&fo(e),e._dayOfYear!=null&&(p=_n(e._a[ge],l[ge]),(e._dayOfYear>nr(p)||e._dayOfYear===0)&&(P(e)._overflowDayOfYear=!0),a=ar(p,0,e._dayOfYear),e._a[Le]=a.getUTCMonth(),e._a[Ee]=a.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=t[n]=l[n];for(;n<7;n++)e._a[n]=t[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[ae]===24&&e._a[Fe]===0&&e._a[Ye]===0&&e._a[vn]===0&&(e._nextDay=!0,e._a[ae]=0),e._d=(e._useUTC?ar:jl).apply(null,t),u=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ae]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==u&&(P(e).weekdayMismatch=!0)}}function fo(e){var n,a,t,l,u,p,_,S,D;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(u=1,p=4,a=_n(n.GG,e._a[ge],tr(W(),1,4).year),t=_n(n.W,1),l=_n(n.E,1),(l<1||l>7)&&(S=!0)):(u=e._locale._week.dow,p=e._locale._week.doy,D=tr(W(),u,p),a=_n(n.gg,e._a[ge],D.year),t=_n(n.w,D.week),n.d!=null?(l=n.d,(l<0||l>6)&&(S=!0)):n.e!=null?(l=n.e+u,(n.e<0||n.e>6)&&(S=!0)):l=u),t<1||t>Ue(a,u,p)?P(e)._overflowWeeks=!0:S!=null?P(e)._overflowWeekday=!0:(_=wt(a,t,l,u,p),e._a[ge]=_.year,e._dayOfYear=_.dayOfYear)}d.ISO_8601=function(){},d.RFC_2822=function(){};function Na(e){if(e._f===d.ISO_8601){Ot(e);return}if(e._f===d.RFC_2822){St(e);return}e._a=[],P(e).empty=!0;var n=""+e._i,a,t,l,u,p,_=n.length,S=0,D,pe;for(l=kt(e._f,e._locale).match(va)||[],pe=l.length,a=0;a<pe;a++)u=l[a],t=(n.match(al(u,e))||[])[0],t&&(p=n.substr(0,n.indexOf(t)),p.length>0&&P(e).unusedInput.push(p),n=n.slice(n.indexOf(t)+t.length),S+=t.length),An[u]?(t?P(e).empty=!1:P(e).unusedTokens.push(u),sl(u,t,e)):e._strict&&!t&&P(e).unusedTokens.push(u);P(e).charsLeftOver=_-S,n.length>0&&P(e).unusedInput.push(n),e._a[ae]<=12&&P(e).bigHour===!0&&e._a[ae]>0&&(P(e).bigHour=void 0),P(e).parsedDateParts=e._a.slice(0),P(e).meridiem=e._meridiem,e._a[ae]=co(e._locale,e._a[ae],e._meridiem),D=P(e).era,D!==null&&(e._a[ge]=e._locale.erasConvertYear(D,e._a[ge])),_a(e),Fa(e)}function co(e,n,a){var t;return a==null?n:e.meridiemHour!=null?e.meridiemHour(n,a):(e.isPM!=null&&(t=e.isPM(a),t&&n<12&&(n+=12),!t&&n===12&&(n=0)),n)}function ho(e){var n,a,t,l,u,p,_=!1,S=e._f.length;if(S===0){P(e).invalidFormat=!0,e._d=new Date(NaN);return}for(l=0;l<S;l++)u=0,p=!1,n=pn({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[l],Na(n),Se(n)&&(p=!0),u+=P(n).charsLeftOver,u+=P(n).unusedTokens.length*10,P(n).score=u,_?u<t&&(t=u,a=n):(t==null||u<t||p)&&(t=u,a=n,p&&(_=!0));F(e,a||n)}function bo(e){if(!e._d){var n=fa(e._i),a=n.day===void 0?n.date:n.day;e._a=b([n.year,n.month,a,n.hour,n.minute,n.second,n.millisecond],function(t){return t&&parseInt(t,10)}),_a(e)}}function Ro(e){var n=new Zn(Fa(Vt(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function Vt(e){var n=e._i,a=e._f;return e._locale=e._locale||He(e._l),n===null||a===void 0&&n===""?X({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),we(n)?new Zn(Fa(n)):(w(n)?e._d=n:k(a)?ho(e):a?Na(e):jo(e),Se(e)||(e._d=null),e))}function jo(e){var n=e._i;f(n)?e._d=new Date(d.now()):w(n)?e._d=new Date(n.valueOf()):typeof n=="string"?vo(e):k(n)?(e._a=b(n.slice(0),function(a){return parseInt(a,10)}),_a(e)):v(n)?bo(e):R(n)?e._d=new Date(n):d.createFromInputFallback(e)}function Mt(e,n,a,t,l){var u={};return(n===!0||n===!1)&&(t=n,n=void 0),(a===!0||a===!1)&&(t=a,a=void 0),(v(e)&&c(e)||k(e)&&e.length===0)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=l,u._l=a,u._i=e,u._f=n,u._strict=t,Ro(u)}function W(e,n,a,t){return Mt(e,n,a,t,!1)}var qo=Re("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:X()}),To=Re("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:X()});function Et(e,n){var a,t;if(n.length===1&&k(n[0])&&(n=n[0]),!n.length)return W();for(a=n[0],t=1;t<n.length;++t)(!n[t].isValid()||n[t][e](a))&&(a=n[t]);return a}function Ao(){var e=[].slice.call(arguments,0);return Et("isBefore",e)}function wo(){var e=[].slice.call(arguments,0);return Et("isAfter",e)}var Fo=function(){return Date.now?Date.now():+new Date},lr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Po(e){var n,a=!1,t,l=lr.length;for(n in e)if(m(e,n)&&!(Z.call(lr,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(t=0;t<l;++t)if(e[lr[t]]){if(a)return!1;parseFloat(e[lr[t]])!==E(e[lr[t]])&&(a=!0)}return!0}function _o(){return this._isValid}function No(){return Pe(NaN)}function xr(e){var n=fa(e),a=n.year||0,t=n.quarter||0,l=n.month||0,u=n.week||n.isoWeek||0,p=n.day||0,_=n.hour||0,S=n.minute||0,D=n.second||0,pe=n.millisecond||0;this._isValid=Po(n),this._milliseconds=+pe+D*1e3+S*6e4+_*1e3*60*60,this._days=+p+u*7,this._months=+l+t*3+a*12,this._data={},this._locale=He(),this._bubble()}function Or(e){return e instanceof xr}function xa(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function xo(e,n,a){var t=Math.min(e.length,n.length),l=Math.abs(e.length-n.length),u=0,p;for(p=0;p<t;p++)E(e[p])!==E(n[p])&&u++;return u+l}function It(e,n){O(e,0,0,function(){var a=this.utcOffset(),t="+";return a<0&&(a=-a,t="-"),t+Me(~~(a/60),2)+n+Me(~~a%60,2)})}It("Z",":"),It("ZZ",""),N("Z",Ar),N("ZZ",Ar),H(["Z","ZZ"],function(e,n,a){a._useUTC=!0,a._tzm=Oa(Ar,e)});var Oo=/([\+\-]|\d\d)/gi;function Oa(e,n){var a=(n||"").match(e),t,l,u;return a===null?null:(t=a[a.length-1]||[],l=(t+"").match(Oo)||["-",0,0],u=+(l[1]*60)+E(l[2]),u===0?0:l[0]==="+"?u:-u)}function Sa(e,n){var a,t;return n._isUTC?(a=n.clone(),t=(we(e)||w(e)?e.valueOf():W(e).valueOf())-a.valueOf(),a._d.setTime(a._d.valueOf()+t),d.updateOffset(a,!1),a):W(e).local()}function Va(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function So(e,n,a){var t=this._offset||0,l;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Oa(Ar,e),e===null)return this}else Math.abs(e)<16&&!a&&(e=e*60);return!this._isUTC&&n&&(l=Va(this)),this._offset=e,this._isUTC=!0,l!=null&&this.add(l,"m"),t!==e&&(!n||this._changeInProgress?Lt(this,Pe(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:Va(this)}function Vo(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function Mo(e){return this.utcOffset(0,e)}function Eo(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Va(this),"m")),this}function Io(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Oa(nl,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Do(e){return this.isValid()?(e=e?W(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Ko(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Bo(){if(!f(this._isDSTShifted))return this._isDSTShifted;var e={},n;return pn(e,this),e=Vt(e),e._a?(n=e._isUTC?T(e._a):W(e._a),this._isDSTShifted=this.isValid()&&xo(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Lo(){return this.isValid()?!this._isUTC:!1}function Yo(){return this.isValid()?this._isUTC:!1}function Dt(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Uo=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Ho=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Pe(e,n){var a=e,t=null,l,u,p;return Or(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:R(e)||!isNaN(+e)?(a={},n?a[n]=+e:a.milliseconds=+e):(t=Uo.exec(e))?(l=t[1]==="-"?-1:1,a={y:0,d:E(t[Ee])*l,h:E(t[ae])*l,m:E(t[Fe])*l,s:E(t[Ye])*l,ms:E(xa(t[vn]*1e3))*l}):(t=Ho.exec(e))?(l=t[1]==="-"?-1:1,a={y:yn(t[2],l),M:yn(t[3],l),w:yn(t[4],l),d:yn(t[5],l),h:yn(t[6],l),m:yn(t[7],l),s:yn(t[8],l)}):a==null?a={}:typeof a=="object"&&("from"in a||"to"in a)&&(p=$o(W(a.from),W(a.to)),a={},a.ms=p.milliseconds,a.M=p.months),u=new xr(a),Or(e)&&m(e,"_locale")&&(u._locale=e._locale),Or(e)&&m(e,"_isValid")&&(u._isValid=e._isValid),u}Pe.fn=xr.prototype,Pe.invalid=No;function yn(e,n){var a=e&&parseFloat(e.replace(",","."));return(isNaN(a)?0:a)*n}function Kt(e,n){var a={};return a.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(a.months,"M").isAfter(n)&&--a.months,a.milliseconds=+n-+e.clone().add(a.months,"M"),a}function $o(e,n){var a;return e.isValid()&&n.isValid()?(n=Sa(n,e),e.isBefore(n)?a=Kt(e,n):(a=Kt(n,e),a.milliseconds=-a.milliseconds,a.months=-a.months),a):{milliseconds:0,months:0}}function Bt(e,n){return function(a,t){var l,u;return t!==null&&!isNaN(+t)&&(mt(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),u=a,a=t,t=u),l=Pe(a,t),Lt(this,l,e),this}}function Lt(e,n,a,t){var l=n._milliseconds,u=xa(n._days),p=xa(n._months);e.isValid()&&(t=t??!0,p&&qt(e,rr(e,"Month")+p*a),u&&bt(e,"Date",rr(e,"Date")+u*a),l&&e._d.setTime(e._d.valueOf()+l*a),t&&d.updateOffset(e,u||p))}var Go=Bt(1,"add"),Co=Bt(-1,"subtract");function Yt(e){return typeof e=="string"||e instanceof String}function Wo(e){return we(e)||w(e)||Yt(e)||R(e)||Jo(e)||zo(e)||e===null||e===void 0}function zo(e){var n=v(e)&&!c(e),a=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],l,u,p=t.length;for(l=0;l<p;l+=1)u=t[l],a=a||m(e,u);return n&&a}function Jo(e){var n=k(e),a=!1;return n&&(a=e.filter(function(t){return!R(t)&&Yt(e)}).length===0),n&&a}function Xo(e){var n=v(e)&&!c(e),a=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],l,u;for(l=0;l<t.length;l+=1)u=t[l],a=a||m(e,u);return n&&a}function Zo(e,n){var a=e.diff(n,"days",!0);return a<-6?"sameElse":a<-1?"lastWeek":a<0?"lastDay":a<1?"sameDay":a<2?"nextDay":a<7?"nextWeek":"sameElse"}function Qo(e,n){arguments.length===1&&(arguments[0]?Wo(arguments[0])?(e=arguments[0],n=void 0):Xo(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var a=e||W(),t=Sa(a,this).startOf("day"),l=d.calendarFormat(this,t)||"sameElse",u=n&&(Ve(n[l])?n[l].call(this,a):n[l]);return this.format(u||this.localeData().calendar(l,this,W(a)))}function ed(){return new Zn(this)}function nd(e,n){var a=we(e)?e:W(e);return this.isValid()&&a.isValid()?(n=je(n)||"millisecond",n==="millisecond"?this.valueOf()>a.valueOf():a.valueOf()<this.clone().startOf(n).valueOf()):!1}function rd(e,n){var a=we(e)?e:W(e);return this.isValid()&&a.isValid()?(n=je(n)||"millisecond",n==="millisecond"?this.valueOf()<a.valueOf():this.clone().endOf(n).valueOf()<a.valueOf()):!1}function ad(e,n,a,t){var l=we(e)?e:W(e),u=we(n)?n:W(n);return this.isValid()&&l.isValid()&&u.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(l,a):!this.isBefore(l,a))&&(t[1]===")"?this.isBefore(u,a):!this.isAfter(u,a))):!1}function td(e,n){var a=we(e)?e:W(e),t;return this.isValid()&&a.isValid()?(n=je(n)||"millisecond",n==="millisecond"?this.valueOf()===a.valueOf():(t=a.valueOf(),this.clone().startOf(n).valueOf()<=t&&t<=this.clone().endOf(n).valueOf())):!1}function sd(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function id(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function ld(e,n,a){var t,l,u;if(!this.isValid())return NaN;if(t=Sa(e,this),!t.isValid())return NaN;switch(l=(t.utcOffset()-this.utcOffset())*6e4,n=je(n),n){case"year":u=Sr(this,t)/12;break;case"month":u=Sr(this,t);break;case"quarter":u=Sr(this,t)/3;break;case"second":u=(this-t)/1e3;break;case"minute":u=(this-t)/6e4;break;case"hour":u=(this-t)/36e5;break;case"day":u=(this-t-l)/864e5;break;case"week":u=(this-t-l)/6048e5;break;default:u=this-t}return a?u:qe(u)}function Sr(e,n){if(e.date()<n.date())return-Sr(n,e);var a=(n.year()-e.year())*12+(n.month()-e.month()),t=e.clone().add(a,"months"),l,u;return n-t<0?(l=e.clone().add(a-1,"months"),u=(n-t)/(t-l)):(l=e.clone().add(a+1,"months"),u=(n-t)/(l-t)),-(a+u)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function od(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function dd(e){if(!this.isValid())return null;var n=e!==!0,a=n?this.clone().utc():this;return a.year()<0||a.year()>9999?br(a,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Ve(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",br(a,"Z")):br(a,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function ud(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",a,t,l,u;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),a="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",l="-MM-DD[T]HH:mm:ss.SSS",u=n+'[")]',this.format(a+t+l+u)}function gd(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var n=br(this,e);return this.localeData().postformat(n)}function md(e,n){return this.isValid()&&(we(e)&&e.isValid()||W(e).isValid())?Pe({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function kd(e){return this.from(W(),e)}function pd(e,n){return this.isValid()&&(we(e)&&e.isValid()||W(e).isValid())?Pe({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function vd(e){return this.to(W(),e)}function Ut(e){var n;return e===void 0?this._locale._abbr:(n=He(e),n!=null&&(this._locale=n),this)}var Ht=Re("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function $t(){return this._locale}var Vr=1e3,Nn=60*Vr,Mr=60*Nn,Gt=(365*400+97)*24*Mr;function xn(e,n){return(e%n+n)%n}function Ct(e,n,a){return e<100&&e>=0?new Date(e+400,n,a)-Gt:new Date(e,n,a).valueOf()}function Wt(e,n,a){return e<100&&e>=0?Date.UTC(e+400,n,a)-Gt:Date.UTC(e,n,a)}function yd(e){var n,a;if(e=je(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(a=this._isUTC?Wt:Ct,e){case"year":n=a(this.year(),0,1);break;case"quarter":n=a(this.year(),this.month()-this.month()%3,1);break;case"month":n=a(this.year(),this.month(),1);break;case"week":n=a(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=a(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=a(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=xn(n+(this._isUTC?0:this.utcOffset()*Nn),Mr);break;case"minute":n=this._d.valueOf(),n-=xn(n,Nn);break;case"second":n=this._d.valueOf(),n-=xn(n,Vr);break}return this._d.setTime(n),d.updateOffset(this,!0),this}function fd(e){var n,a;if(e=je(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(a=this._isUTC?Wt:Ct,e){case"year":n=a(this.year()+1,0,1)-1;break;case"quarter":n=a(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=a(this.year(),this.month()+1,1)-1;break;case"week":n=a(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=a(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=a(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=Mr-xn(n+(this._isUTC?0:this.utcOffset()*Nn),Mr)-1;break;case"minute":n=this._d.valueOf(),n+=Nn-xn(n,Nn)-1;break;case"second":n=this._d.valueOf(),n+=Vr-xn(n,Vr)-1;break}return this._d.setTime(n),d.updateOffset(this,!0),this}function cd(){return this._d.valueOf()-(this._offset||0)*6e4}function hd(){return Math.floor(this.valueOf()/1e3)}function bd(){return new Date(this.valueOf())}function Rd(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function jd(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function qd(){return this.isValid()?this.toISOString():null}function Td(){return Se(this)}function Ad(){return F({},P(this))}function wd(){return P(this).overflow}function Fd(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}O("N",0,0,"eraAbbr"),O("NN",0,0,"eraAbbr"),O("NNN",0,0,"eraAbbr"),O("NNNN",0,0,"eraName"),O("NNNNN",0,0,"eraNarrow"),O("y",["y",1],"yo","eraYear"),O("y",["yy",2],0,"eraYear"),O("y",["yyy",3],0,"eraYear"),O("y",["yyyy",4],0,"eraYear"),N("N",Ma),N("NN",Ma),N("NNN",Ma),N("NNNN",Dd),N("NNNNN",Kd),H(["N","NN","NNN","NNNN","NNNNN"],function(e,n,a,t){var l=a._locale.erasParse(e,t,a._strict);l?P(a).era=l:P(a).invalidEra=e}),N("y",wn),N("yy",wn),N("yyy",wn),N("yyyy",wn),N("yo",Bd),H(["y","yy","yyy","yyyy"],ge),H(["yo"],function(e,n,a,t){var l;a._locale._eraYearOrdinalRegex&&(l=e.match(a._locale._eraYearOrdinalRegex)),a._locale.eraYearOrdinalParse?n[ge]=a._locale.eraYearOrdinalParse(e,l):n[ge]=parseInt(e,10)});function Pd(e,n){var a,t,l,u=this._eras||He("en")._eras;for(a=0,t=u.length;a<t;++a){switch(typeof u[a].since){case"string":l=d(u[a].since).startOf("day"),u[a].since=l.valueOf();break}switch(typeof u[a].until){case"undefined":u[a].until=1/0;break;case"string":l=d(u[a].until).startOf("day").valueOf(),u[a].until=l.valueOf();break}}return u}function _d(e,n,a){var t,l,u=this.eras(),p,_,S;for(e=e.toUpperCase(),t=0,l=u.length;t<l;++t)if(p=u[t].name.toUpperCase(),_=u[t].abbr.toUpperCase(),S=u[t].narrow.toUpperCase(),a)switch(n){case"N":case"NN":case"NNN":if(_===e)return u[t];break;case"NNNN":if(p===e)return u[t];break;case"NNNNN":if(S===e)return u[t];break}else if([p,_,S].indexOf(e)>=0)return u[t]}function Nd(e,n){var a=e.since<=e.until?1:-1;return n===void 0?d(e.since).year():d(e.since).year()+(n-e.offset)*a}function xd(){var e,n,a,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(a=this.clone().startOf("day").valueOf(),t[e].since<=a&&a<=t[e].until||t[e].until<=a&&a<=t[e].since)return t[e].name;return""}function Od(){var e,n,a,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(a=this.clone().startOf("day").valueOf(),t[e].since<=a&&a<=t[e].until||t[e].until<=a&&a<=t[e].since)return t[e].narrow;return""}function Sd(){var e,n,a,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(a=this.clone().startOf("day").valueOf(),t[e].since<=a&&a<=t[e].until||t[e].until<=a&&a<=t[e].since)return t[e].abbr;return""}function Vd(){var e,n,a,t,l=this.localeData().eras();for(e=0,n=l.length;e<n;++e)if(a=l[e].since<=l[e].until?1:-1,t=this.clone().startOf("day").valueOf(),l[e].since<=t&&t<=l[e].until||l[e].until<=t&&t<=l[e].since)return(this.year()-d(l[e].since).year())*a+l[e].offset;return this.year()}function Md(e){return m(this,"_erasNameRegex")||Ea.call(this),e?this._erasNameRegex:this._erasRegex}function Ed(e){return m(this,"_erasAbbrRegex")||Ea.call(this),e?this._erasAbbrRegex:this._erasRegex}function Id(e){return m(this,"_erasNarrowRegex")||Ea.call(this),e?this._erasNarrowRegex:this._erasRegex}function Ma(e,n){return n.erasAbbrRegex(e)}function Dd(e,n){return n.erasNameRegex(e)}function Kd(e,n){return n.erasNarrowRegex(e)}function Bd(e,n){return n._eraYearOrdinalRegex||wn}function Ea(){var e=[],n=[],a=[],t=[],l,u,p,_,S,D=this.eras();for(l=0,u=D.length;l<u;++l)p=Be(D[l].name),_=Be(D[l].abbr),S=Be(D[l].narrow),n.push(p),e.push(_),a.push(S),t.push(p),t.push(_),t.push(S);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+a.join("|")+")","i")}O(0,["gg",2],0,function(){return this.weekYear()%100}),O(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Er(e,n){O(0,[e,e.length],0,n)}Er("gggg","weekYear"),Er("ggggg","weekYear"),Er("GGGG","isoWeekYear"),Er("GGGGG","isoWeekYear"),N("G",Tr),N("g",Tr),N("GG",C,he),N("gg",C,he),N("GGGG",ha,ca),N("gggg",ha,ca),N("GGGGG",qr,Rr),N("ggggg",qr,Rr),er(["gggg","ggggg","GGGG","GGGGG"],function(e,n,a,t){n[t.substr(0,2)]=E(e)}),er(["gg","GG"],function(e,n,a,t){n[t]=d.parseTwoDigitYear(e)});function Ld(e){return zt.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Yd(e){return zt.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Ud(){return Ue(this.year(),1,4)}function Hd(){return Ue(this.isoWeekYear(),1,4)}function $d(){var e=this.localeData()._week;return Ue(this.year(),e.dow,e.doy)}function Gd(){var e=this.localeData()._week;return Ue(this.weekYear(),e.dow,e.doy)}function zt(e,n,a,t,l){var u;return e==null?tr(this,t,l).year:(u=Ue(e,t,l),n>u&&(n=u),Cd.call(this,e,n,a,t,l))}function Cd(e,n,a,t,l){var u=wt(e,n,a,t,l),p=ar(u.year,0,u.dayOfYear);return this.year(p.getUTCFullYear()),this.month(p.getUTCMonth()),this.date(p.getUTCDate()),this}O("Q",0,"Qo","quarter"),N("Q",vt),H("Q",function(e,n){n[Le]=(E(e)-1)*3});function Wd(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}O("D",["DD",2],"Do","date"),N("D",C,Fn),N("DD",C,he),N("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient}),H(["D","DD"],Ee),H("Do",function(e,n){n[Ee]=E(e.match(C)[0])});var Jt=Pn("Date",!0);O("DDD",["DDDD",3],"DDDo","dayOfYear"),N("DDD",jr),N("DDDD",yt),H(["DDD","DDDD"],function(e,n,a){a._dayOfYear=E(e)});function zd(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}O("m",["mm",2],0,"minute"),N("m",C,ba),N("mm",C,he),H(["m","mm"],Fe);var Jd=Pn("Minutes",!1);O("s",["ss",2],0,"second"),N("s",C,ba),N("ss",C,he),H(["s","ss"],Ye);var Xd=Pn("Seconds",!1);O("S",0,0,function(){return~~(this.millisecond()/100)}),O(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),O(0,["SSS",3],0,"millisecond"),O(0,["SSSS",4],0,function(){return this.millisecond()*10}),O(0,["SSSSS",5],0,function(){return this.millisecond()*100}),O(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),O(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),O(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),O(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),N("S",jr,vt),N("SS",jr,he),N("SSS",jr,yt);var rn,Xt;for(rn="SSSS";rn.length<=9;rn+="S")N(rn,wn);function Zd(e,n){n[vn]=E(("0."+e)*1e3)}for(rn="S";rn.length<=9;rn+="S")H(rn,Zd);Xt=Pn("Milliseconds",!1),O("z",0,0,"zoneAbbr"),O("zz",0,0,"zoneName");function Qd(){return this._isUTC?"UTC":""}function eu(){return this._isUTC?"Coordinated Universal Time":""}var j=Zn.prototype;j.add=Go,j.calendar=Qo,j.clone=ed,j.diff=ld,j.endOf=fd,j.format=gd,j.from=md,j.fromNow=kd,j.to=pd,j.toNow=vd,j.get=dl,j.invalidAt=wd,j.isAfter=nd,j.isBefore=rd,j.isBetween=ad,j.isSame=td,j.isSameOrAfter=sd,j.isSameOrBefore=id,j.isValid=Td,j.lang=Ht,j.locale=Ut,j.localeData=$t,j.max=To,j.min=qo,j.parsingFlags=Ad,j.set=ul,j.startOf=yd,j.subtract=Co,j.toArray=Rd,j.toObject=jd,j.toDate=bd,j.toISOString=dd,j.inspect=ud,typeof Symbol<"u"&&Symbol.for!=null&&(j[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),j.toJSON=qd,j.toString=od,j.unix=hd,j.valueOf=cd,j.creationData=Fd,j.eraName=xd,j.eraNarrow=Od,j.eraAbbr=Sd,j.eraYear=Vd,j.year=ht,j.isLeapYear=ol,j.weekYear=Ld,j.isoWeekYear=Yd,j.quarter=j.quarters=Wd,j.month=Tt,j.daysInMonth=hl,j.week=j.weeks=Fl,j.isoWeek=j.isoWeeks=Pl,j.weeksInYear=$d,j.weeksInWeekYear=Gd,j.isoWeeksInYear=Ud,j.isoWeeksInISOWeekYear=Hd,j.date=Jt,j.day=j.days=Ll,j.weekday=Yl,j.isoWeekday=Ul,j.dayOfYear=zd,j.hour=j.hours=Jl,j.minute=j.minutes=Jd,j.second=j.seconds=Xd,j.millisecond=j.milliseconds=Xt,j.utcOffset=So,j.utc=Mo,j.local=Eo,j.parseZone=Io,j.hasAlignedHourOffset=Do,j.isDST=Ko,j.isLocal=Lo,j.isUtcOffset=Yo,j.isUtc=Dt,j.isUTC=Dt,j.zoneAbbr=Qd,j.zoneName=eu,j.dates=Re("dates accessor is deprecated. Use date instead.",Jt),j.months=Re("months accessor is deprecated. Use month instead",Tt),j.years=Re("years accessor is deprecated. Use year instead",ht),j.zone=Re("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Vo),j.isDSTShifted=Re("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Bo);function nu(e){return W(e*1e3)}function ru(){return W.apply(null,arguments).parseZone()}function Zt(e){return e}var B=ka.prototype;B.calendar=Bi,B.longDateFormat=Hi,B.invalidDate=Gi,B.ordinal=zi,B.preparse=Zt,B.postformat=Zt,B.relativeTime=Xi,B.pastFuture=Zi,B.set=Di,B.eras=Pd,B.erasParse=_d,B.erasConvertYear=Nd,B.erasAbbrRegex=Ed,B.erasNameRegex=Md,B.erasNarrowRegex=Id,B.months=vl,B.monthsShort=yl,B.monthsParse=cl,B.monthsRegex=Rl,B.monthsShortRegex=bl,B.week=ql,B.firstDayOfYear=wl,B.firstDayOfWeek=Al,B.weekdays=El,B.weekdaysMin=Dl,B.weekdaysShort=Il,B.weekdaysParse=Bl,B.weekdaysRegex=Hl,B.weekdaysShortRegex=$l,B.weekdaysMinRegex=Gl,B.isPM=Wl,B.meridiem=Xl;function Ir(e,n,a,t){var l=He(),u=T().set(t,n);return l[a](u,e)}function Qt(e,n,a){if(R(e)&&(n=e,e=void 0),e=e||"",n!=null)return Ir(e,n,a,"month");var t,l=[];for(t=0;t<12;t++)l[t]=Ir(e,t,a,"month");return l}function Ia(e,n,a,t){typeof e=="boolean"?(R(n)&&(a=n,n=void 0),n=n||""):(n=e,a=n,e=!1,R(n)&&(a=n,n=void 0),n=n||"");var l=He(),u=e?l._week.dow:0,p,_=[];if(a!=null)return Ir(n,(a+u)%7,t,"day");for(p=0;p<7;p++)_[p]=Ir(n,(p+u)%7,t,"day");return _}function au(e,n){return Qt(e,n,"months")}function tu(e,n){return Qt(e,n,"monthsShort")}function su(e,n,a){return Ia(e,n,a,"weekdays")}function iu(e,n,a){return Ia(e,n,a,"weekdaysShort")}function lu(e,n,a){return Ia(e,n,a,"weekdaysMin")}nn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,a=E(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+a}}),d.lang=Re("moment.lang is deprecated. Use moment.locale instead.",nn),d.langData=Re("moment.langData is deprecated. Use moment.localeData instead.",He);var $e=Math.abs;function ou(){var e=this._data;return this._milliseconds=$e(this._milliseconds),this._days=$e(this._days),this._months=$e(this._months),e.milliseconds=$e(e.milliseconds),e.seconds=$e(e.seconds),e.minutes=$e(e.minutes),e.hours=$e(e.hours),e.months=$e(e.months),e.years=$e(e.years),this}function es(e,n,a,t){var l=Pe(n,a);return e._milliseconds+=t*l._milliseconds,e._days+=t*l._days,e._months+=t*l._months,e._bubble()}function du(e,n){return es(this,e,n,1)}function uu(e,n){return es(this,e,n,-1)}function ns(e){return e<0?Math.floor(e):Math.ceil(e)}function gu(){var e=this._milliseconds,n=this._days,a=this._months,t=this._data,l,u,p,_,S;return e>=0&&n>=0&&a>=0||e<=0&&n<=0&&a<=0||(e+=ns(Da(a)+n)*864e5,n=0,a=0),t.milliseconds=e%1e3,l=qe(e/1e3),t.seconds=l%60,u=qe(l/60),t.minutes=u%60,p=qe(u/60),t.hours=p%24,n+=qe(p/24),S=qe(rs(n)),a+=S,n-=ns(Da(S)),_=qe(a/12),a%=12,t.days=n,t.months=a,t.years=_,this}function rs(e){return e*4800/146097}function Da(e){return e*146097/4800}function mu(e){if(!this.isValid())return NaN;var n,a,t=this._milliseconds;if(e=je(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+t/864e5,a=this._months+rs(n),e){case"month":return a;case"quarter":return a/3;case"year":return a/12}else switch(n=this._days+Math.round(Da(this._months)),e){case"week":return n/7+t/6048e5;case"day":return n+t/864e5;case"hour":return n*24+t/36e5;case"minute":return n*1440+t/6e4;case"second":return n*86400+t/1e3;case"millisecond":return Math.floor(n*864e5)+t;default:throw new Error("Unknown unit "+e)}}function Ge(e){return function(){return this.as(e)}}var as=Ge("ms"),ku=Ge("s"),pu=Ge("m"),vu=Ge("h"),yu=Ge("d"),fu=Ge("w"),cu=Ge("M"),hu=Ge("Q"),bu=Ge("y"),Ru=as;function ju(){return Pe(this)}function qu(e){return e=je(e),this.isValid()?this[e+"s"]():NaN}function fn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Tu=fn("milliseconds"),Au=fn("seconds"),wu=fn("minutes"),Fu=fn("hours"),Pu=fn("days"),_u=fn("months"),Nu=fn("years");function xu(){return qe(this.days()/7)}var Ce=Math.round,On={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Ou(e,n,a,t,l){return l.relativeTime(n||1,!!a,e,t)}function Su(e,n,a,t){var l=Pe(e).abs(),u=Ce(l.as("s")),p=Ce(l.as("m")),_=Ce(l.as("h")),S=Ce(l.as("d")),D=Ce(l.as("M")),pe=Ce(l.as("w")),We=Ce(l.as("y")),an=u<=a.ss&&["s",u]||u<a.s&&["ss",u]||p<=1&&["m"]||p<a.m&&["mm",p]||_<=1&&["h"]||_<a.h&&["hh",_]||S<=1&&["d"]||S<a.d&&["dd",S];return a.w!=null&&(an=an||pe<=1&&["w"]||pe<a.w&&["ww",pe]),an=an||D<=1&&["M"]||D<a.M&&["MM",D]||We<=1&&["y"]||["yy",We],an[2]=n,an[3]=+e>0,an[4]=t,Ou.apply(null,an)}function Vu(e){return e===void 0?Ce:typeof e=="function"?(Ce=e,!0):!1}function Mu(e,n){return On[e]===void 0?!1:n===void 0?On[e]:(On[e]=n,e==="s"&&(On.ss=n-1),!0)}function Eu(e,n){if(!this.isValid())return this.localeData().invalidDate();var a=!1,t=On,l,u;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(a=e),typeof n=="object"&&(t=Object.assign({},On,n),n.s!=null&&n.ss==null&&(t.ss=n.s-1)),l=this.localeData(),u=Su(this,!a,t,l),a&&(u=l.pastFuture(+this,u)),l.postformat(u)}var Ka=Math.abs;function Sn(e){return(e>0)-(e<0)||+e}function Dr(){if(!this.isValid())return this.localeData().invalidDate();var e=Ka(this._milliseconds)/1e3,n=Ka(this._days),a=Ka(this._months),t,l,u,p,_=this.asSeconds(),S,D,pe,We;return _?(t=qe(e/60),l=qe(t/60),e%=60,t%=60,u=qe(a/12),a%=12,p=e?e.toFixed(3).replace(/\.?0+$/,""):"",S=_<0?"-":"",D=Sn(this._months)!==Sn(_)?"-":"",pe=Sn(this._days)!==Sn(_)?"-":"",We=Sn(this._milliseconds)!==Sn(_)?"-":"",S+"P"+(u?D+u+"Y":"")+(a?D+a+"M":"")+(n?pe+n+"D":"")+(l||t||e?"T":"")+(l?We+l+"H":"")+(t?We+t+"M":"")+(e?We+p+"S":"")):"P0D"}var K=xr.prototype;K.isValid=_o,K.abs=ou,K.add=du,K.subtract=uu,K.as=mu,K.asMilliseconds=as,K.asSeconds=ku,K.asMinutes=pu,K.asHours=vu,K.asDays=yu,K.asWeeks=fu,K.asMonths=cu,K.asQuarters=hu,K.asYears=bu,K.valueOf=Ru,K._bubble=gu,K.clone=ju,K.get=qu,K.milliseconds=Tu,K.seconds=Au,K.minutes=wu,K.hours=Fu,K.days=Pu,K.weeks=xu,K.months=_u,K.years=Nu,K.humanize=Eu,K.toISOString=Dr,K.toString=Dr,K.toJSON=Dr,K.locale=Ut,K.localeData=$t,K.toIsoString=Re("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Dr),K.lang=Ht,O("X",0,0,"unix"),O("x",0,0,"valueOf"),N("x",Tr),N("X",rl),H("X",function(e,n,a){a._d=new Date(parseFloat(e)*1e3)}),H("x",function(e,n,a){a._d=new Date(E(e))});//! moment.js
return d.version="2.30.1",g(W),d.fn=j,d.min=Ao,d.max=wo,d.now=Fo,d.utc=T,d.unix=nu,d.months=au,d.isDate=w,d.locale=nn,d.invalid=X,d.duration=Pe,d.isMoment=we,d.weekdays=su,d.parseZone=ru,d.localeData=He,d.isDuration=Or,d.monthsShort=tu,d.weekdaysMin=lu,d.defineLocale=wa,d.updateLocale=no,d.locales=ro,d.weekdaysShort=iu,d.normalizeUnits=je,d.relativeTimeRounding=Vu,d.relativeTimeThreshold=Mu,d.calendarFormat=Zo,d.prototype=j,d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},d})})(Ri);var Mm=Ri.exports;const Ts=Bu(Mm),Em="_graderesHeader_jfwkn_1",Im="_smalHeader_jfwkn_5",Dm="_notLastRow_jfwkn_9",Km="_placeRemoveButton_jfwkn_13",Bm="_prosentHeader_jfwkn_17",Mn={graderesHeader:Em,smalHeader:Im,notLastRow:Dm,placeRemoveButton:Km,prosentHeader:Bm},Ze="tidsromPermisjon",Te="graderingPeriode",Lm=Qu(9),As=s=>()=>{const o=s(`${Ze}.${Te}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},ws=(s,i,o)=>()=>{const d=s(`${Ze}.${Te}.${i}.periodeFom`),g=s(`${Ze}.${Te}.${i}.periodeTom`);return!g||!d?null:o?Ae(g)(d):xe(d)(g)},Ym=(s,i)=>o=>s(`${Ze}.${Te}.${i}.arbeidskategoriType`)===qn.ARBEIDSTAKER?A(o):void 0,Um=s=>{if(s)return s.length===11?Ds(s):Lm(s)},Fs={periodeFom:"",periodeTom:"",periodeForGradering:"",prosentandelArbeid:"",skalGraderes:!1},Hm=[qn.ARBEIDSTAKER,qn.SELVSTENDIG_NAERINGSDRIVENDE,qn.FRILANSER],Ps=pr(100),$m=s=>s.filter(({kode:i})=>dt.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Gm=s=>s.filter(({kode:i})=>Hm.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),ji=({graderingKvoter:s,readOnly:i,arbeidskategoriTyper:o})=>{const d=$(),{watch:g,control:k,getValues:v,trigger:m,formState:{isSubmitted:c}}=Y(),{fields:f,remove:R,append:w}=ce({control:k,name:`${Ze}.${Te}`}),b=g(`${Ze}.${Te}`);return V.useEffect(()=>{f.length===0&&w(Fs)},[]),r.jsx(Oe,{fields:f,emptyPeriodTemplate:Fs,bodyText:d.formatMessage({id:"Registrering.Permisjon.Gradering.LeggTilPeriode"}),readOnly:i,remove:R,append:w,children:(F,T,x)=>{const{harSamtidigUttak:P,periodeFom:G}=b[T],Se=G&&Ts(G,Tn).isBefore(Ts("2019-01-01")),X=`${Ze}.${Te}.${T}`;return r.jsxs("div",{className:T!==f.length-1?Mn.notLastRow:"",children:[T>0&&r.jsxs(r.Fragment,{children:[r.jsx(nt,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(Q,{wrap:!0,children:[r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(fe,{name:`${X}.periodeForGradering`,selectValues:$m(s),label:d.formatMessage({id:"Registrering.Permisjon.Gradering.Periode"}),validate:[A]})}),r.jsx(q,{children:r.jsx(M,{label:d.formatMessage({id:"Registrering.Permisjon.periodeFom"}),name:`${X}.periodeFom`,validate:[A,I,ws(v,T,!0),As(v)],onChange:()=>c?m():void 0})}),r.jsx(q,{children:r.jsx(M,{label:d.formatMessage({id:"Registrering.Permisjon.periodeTom"}),name:`${X}.periodeTom`,validate:[A,I,ws(v,T,!1),As(v)],onChange:()=>c?m():void 0})}),r.jsx(q,{className:Mn.prosentHeader,children:r.jsx(le,{label:r.jsx(h,{id:"Registrering.Permisjon.Gradering.Prosentandel"}),name:`${X}.prosentandelArbeid`,validate:[A,Wa,Ps],normalizeOnBlur:J=>Number.isNaN(J)?J:parseFloat(J.toString()).toFixed(2)})}),r.jsx(q,{children:r.jsx(le,{label:d.formatMessage({id:"Registrering.Permisjon.Orgnr"}),name:`${X}.arbeidsgiverIdentifikator`,validate:[Ym(v,T),un,Um]})})]}),r.jsx(y,{eightPx:!0}),r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(fe,{label:d.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${X}.arbeidskategoriType`,selectValues:Gm(o),validate:[A],onChange:()=>c?m():void 0})}),r.jsxs(q,{children:[r.jsx("div",{className:Mn.graderesHeader,children:r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.Gradering.SkalGraderes"})})}),r.jsx(ie,{name:`${X}.skalGraderes`,label:" "})]}),r.jsx(q,{children:r.jsxs("div",{className:Mn.smalHeader,children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.Flerbarnsdager"})}),r.jsx(ie,{readOnly:i,name:`${X}.flerbarnsdager`,label:" "})]})}),r.jsxs(q,{children:[r.jsx("div",{className:Mn.smalHeader,children:r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.HarSamtidigUttak"})})}),r.jsx(ie,{name:`${X}.harSamtidigUttak`,label:""})]}),r.jsx(q,{children:P&&r.jsx(le,{name:`${X}.samtidigUttaksprosent`,validate:[A,Wa,Ps],label:d.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"})})}),x&&r.jsx(q,{className:Mn.placeRemoveButton,children:x()})]}),Se&&r.jsxs("div",{children:[r.jsx(L,{wrap:!0,children:r.jsx(Qr,{size:"small",variant:"warning",children:r.jsx(h,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})}),r.jsx(y,{eightPx:!0})]})]})]},F.id)}})};ji.__docgenInfo={description:`RenderGraderingPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av graderingperiode.`,methods:[],displayName:"RenderGraderingPeriodeFieldArray",props:{graderingKvoter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidskategoriTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Cn=({readOnly:s,alleKodeverk:i})=>{const o=i[ee.UTTAK_PERIODE_TYPE],d=i[ee.ARBEIDSKATEGORI],{watch:g}=Y(),k=g(`${Ze}.skalGradere`)||!1;return r.jsxs("div",{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.Gradering.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${Ze}.skalGradere`,label:r.jsx(h,{id:"Registrering.Permisjon.Gradering.GraderUttaket"})}),k&&r.jsx(ji,{graderingKvoter:o,arbeidskategoriTyper:d,readOnly:s})]})};Cn.transformValues=s=>{const i=s[Te];return i?i.map(o=>o.arbeidskategoriType?{...o,erArbeidstaker:o.arbeidskategoriType===qn.ARBEIDSTAKER,erFrilanser:o.arbeidskategoriType===qn.FRILANSER,erSelvstNæringsdrivende:o.arbeidskategoriType===qn.SELVSTENDIG_NAERINGSDRIVENDE}:o):[]};Cn.buildInitialValues=()=>({[Te]:[{}],skalGradere:!1});Cn.__docgenInfo={description:`PermisjonGraderingPanel

Viser panel for gradering
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriodeFormValues;
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"FormValues",required:!1}}]},alias:"FormValues"}}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonGraderingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ze="tidsromPermisjon",sn="overforingsperioder",_s=s=>()=>{const o=s(`${ze}.${sn}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},Ns={periodeFom:"",periodeTom:"",overforingArsak:""},qi=({selectValues:s,readOnly:i})=>{const o=$(),{control:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:c,append:f}=ce({control:d,name:`${ze}.${sn}`});V.useEffect(()=>{m.length===0&&f(Ns)},[]);const R=`${ze}.${sn}`;return r.jsx(Oe,{fields:m,emptyPeriodTemplate:Ns,bodyText:o.formatMessage({id:"Registrering.Permisjon.Utsettelse.LeggTilPeriode"}),readOnly:i,append:f,remove:c,children:(w,b,F)=>r.jsx(Q,{wrap:!0,children:r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(fe,{name:`${R}.${b}.overforingArsak`,label:b===0?o.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak"}):"",selectValues:s,validate:[A],readOnly:i})}),r.jsxs(r.Fragment,{children:[r.jsx(q,{children:r.jsx(M,{isReadOnly:i,name:`${R}.${b}.periodeFom`,validate:[A,I,()=>{const T=g(`${ze}.${sn}.${b}.periodeFom`),x=g(`${ze}.${sn}.${b}.periodeTom`);return x&&T?Ae(x)(T):null},_s(g)],label:b===0?r.jsx(h,{id:"Registrering.Permisjon.OverforingAvKvote.fomDato"}):"",onChange:()=>v?k():void 0})}),r.jsx(q,{children:r.jsx(M,{isReadOnly:i,name:`${R}.${b}.periodeTom`,validate:[A,I,()=>{const T=g(`${ze}.${sn}.${b}.periodeFom`),x=g(`${ze}.${sn}.${b}.periodeTom`);return x&&T?xe(T)(x):null},_s(g)],label:b===0?r.jsx(h,{id:"Registrering.Permisjon.OverforingAvKvote.tomDato"}):"",onChange:()=>v?k():void 0})}),F&&r.jsx(q,{children:F()})]})]})},w.id)})};qi.__docgenInfo={description:`RenderOverforingAvKvoterFieldArray

Viser inputfelter for dato for bestemmelse av overføring.`,methods:[],displayName:"RenderOverforingAvKvoterFieldArray",props:{selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Cm=(s,i,o)=>i===zr.INSTITUSJONSOPPHOLD_ANNEN_FORELDER?s.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt"}):i===zr.SYKDOM_ANNEN_FORELDER?s.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk"}):o,Wm=(s,i,o,d)=>s.filter(({kode:g})=>o||g!==zr.ALENEOMSORG&&g!==zr.IKKE_RETT_ANNEN_FORELDER).map(({kode:g,navn:k})=>i?r.jsx("option",{value:g,children:k},g):r.jsx("option",{value:g,children:Cm(d,g,k)},g)),da=({foreldreType:s,alleKodeverk:i,readOnly:o,erEndringssøknad:d})=>{const g=$(),k=i[og.OVERFOERING_AARSAK_TYPE],v=Wm(k,s===Ln.MOR,d,g),{watch:m}=Y(),c=m(`${ze}.skalOvertaKvote`)||!1;return r.jsxs(r.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvoten"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:o,name:`${ze}.skalOvertaKvote`,label:r.jsx(h,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvote"})}),c&&r.jsx(qi,{selectValues:v,readOnly:o})]})};da.buildInitialValues=()=>({skalOvertaKvote:!1,overforingsperioder:[{}]});da.__docgenInfo={description:`PermisjonOverforingAvKvoterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonOverforingAvKvoterPanel",props:{foreldreType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const zm="_notLastRow_pe2tr_1",Jm={notLastRow:zm},_e="tidsromPermisjon",Ne="oppholdPerioder",xs=s=>()=>{const o=s(`${_e}.${Ne}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},Os={periodeFom:"",periodeTom:"",årsak:""},Xm=[Br.UTTAK_MØDREKVOTE_ANNEN_FORELDER,Br.UTTAK_FEDREKVOTE_ANNEN_FORELDER,Br.UTTAK_FELLESP_ANNEN_FORELDER,Br.UTTAK_FORELDREPENGER_ANNEN_FORELDER],Zm=s=>s.filter(({kode:i})=>Xm.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Ti=({oppholdsReasons:s,readOnly:i})=>{const o=$(),{control:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:c,append:f}=ce({control:d,name:`${_e}.${Ne}`});return V.useEffect(()=>{m.length===0&&f(Os)},[]),r.jsx(Oe,{fields:m,emptyPeriodTemplate:Os,bodyText:o.formatMessage({id:"Registrering.Permisjon.Opphold.LeggTilPeriode"}),readOnly:i,append:f,remove:c,children:(R,w,b)=>r.jsx("div",{className:w!==m.length-1?Jm.notLastRow:"",children:r.jsx(Q,{wrap:!0,children:r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(M,{name:`${_e}.${Ne}.${w}.periodeFom`,label:w===0?o.formatMessage({id:"Registrering.Permisjon.periodeFom"}):"",validate:[A,I,()=>{const F=g(`${_e}.${Ne}.${w}.periodeFom`),T=g(`${_e}.${Ne}.${w}.periodeTom`);return T&&F?Ae(T)(F):null},xs(g)],onChange:()=>v?k():void 0})}),r.jsx(q,{children:r.jsx(M,{name:`${_e}.${Ne}.${w}.periodeTom`,label:w===0?o.formatMessage({id:"Registrering.Permisjon.periodeTom"}):"",validate:[A,I,()=>{const F=g(`${_e}.${Ne}.${w}.periodeFom`),T=g(`${_e}.${Ne}.${w}.periodeTom`);return T&&F?xe(F)(T):null},xs(g)],onChange:()=>v?k():void 0})}),r.jsx(q,{children:r.jsx(fe,{name:`${_e}.${Ne}.${w}.årsak`,label:w===0?o.formatMessage({id:"Registrering.Permisjon.Opphold.Arsak"}):"",selectValues:Zm(s),validate:[A]})}),b&&r.jsx(q,{children:b()})]})})},R.id)})};Ti.__docgenInfo={description:`RenderOppholdPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av oppholdsperiode.`,methods:[],displayName:"RenderOppholdPeriodeFieldArray",props:{oppholdsReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ua=({readOnly:s,alleKodeverk:i})=>{const o=i[ee.OPPHOLD_ARSAK],{watch:d}=Y(),g=d(`${_e}.skalHaOpphold`)||!1;return r.jsxs("div",{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.Opphold.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${_e}.skalHaOpphold`,label:r.jsx(h,{id:"Registrering.Permisjon.Opphold.OppholdUttaket"})}),g&&r.jsx(Ti,{oppholdsReasons:o,readOnly:s})]})};ua.buildInitialValues=()=>({[Ne]:[{}],skalHaOpphold:!1});ua.__docgenInfo={description:`PermisjonOppholdPanel

Viser panel for utsettelse
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonOppholdPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Qm="_flexContainer_1vzu1_1",ek={flexContainer:Qm},be="tidsromPermisjon",nk=s=>{const i=s(`${be}.fulltUttak`)||!1,o=s(`${be}.skalGradere`)||!1,d=s(`${be}.skalUtsette`)||!1,g=s(`${be}.skalOvertaKvote`)||!1;return!i&&!o&&!d&&!g},Wn=({foreldreType:s,readOnly:i,alleKodeverk:o,erEndringssøknad:d})=>{var b,F,T,x;const g=$(),{watch:k,setError:v,clearErrors:m,getValues:c,formState:f}=Y(),R=k(`${be}.fulltUttak`)||!1,w=nk(c);return V.useEffect(()=>{w&&v(`${be}.notRegisteredInput`,{type:"custom",message:g.formatMessage({id:"PermisjonPanel.MinstEnPeriodeRequired"})}),w||m(`${be}.notRegisteredInput`)},[w]),r.jsx(oe,{children:r.jsxs("div",{className:ek.flexContainer,children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{eightPx:!0}),r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.FulltUttak"})}),r.jsx(y,{eightPx:!0}),r.jsx(ie,{readOnly:i,name:`${be}.fulltUttak`,label:r.jsx(h,{id:"Registrering.Permisjon.FulltUttak"})}),R&&r.jsx(la,{sokerErMor:s===Ln.MOR,readOnly:i,alleKodeverk:o}),r.jsx(y,{twentyPx:!0}),r.jsx(da,{readOnly:i,foreldreType:s,alleKodeverk:o,erEndringssøknad:d}),r.jsx(y,{twentyPx:!0}),r.jsx(oa,{readOnly:i,alleKodeverk:o}),r.jsx(y,{twentyPx:!0}),r.jsx(Cn,{readOnly:i,alleKodeverk:o}),r.jsx(y,{twentyPx:!0}),r.jsx(ua,{readOnly:i,alleKodeverk:o}),f.isSubmitted&&((F=(b=f.errors[be])==null?void 0:b.notRegisteredInput)==null?void 0:F.message)&&r.jsx(fr,{children:(x=(T=f.errors[be])==null?void 0:T.notRegisteredInput)==null?void 0:x.message})]})})};Wn.transformValues=s=>{var k,v,m,c,f,R,w;const i=s[be],o=i,d=i[De];(k=s.tidsromPermisjon)!=null&&k.fulltUttak&&d&&(o[De]=la.transformValues(d));const g=i[Te];return(v=s.tidsromPermisjon)!=null&&v.skalGradere&&g&&(o[Te]=Cn.transformValues(i)),(m=s.tidsromPermisjon)!=null&&m.fulltUttak||(o[De]=void 0),(c=s.tidsromPermisjon)!=null&&c.skalGradere||(o[Te]=void 0),(f=s.tidsromPermisjon)!=null&&f.skalUtsette||(o[dn]=void 0),(R=s.tidsromPermisjon)!=null&&R.skalOvertaKvote||(o[sn]=void 0),(w=s.tidsromPermisjon)!=null&&w.skalHaOpphold||(o[Ne]=void 0),o};Wn.buildInitialValues=()=>({[be]:{...oa.buildInitialValues(),...Cn.buildInitialValues(),...da.buildInitialValues(),...ua.buildInitialValues(),[De]:[{}],fulltUttak:!1}});Wn.__docgenInfo={description:`PermisjonPanel

Viser permisjonspanel for mor eller far/medmor`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
}`,signature:{properties:[{key:"tidsromPermisjon",value:{name:"intersection",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: FormValuesPermisjon[];
} & FormValuesUtsettelse &
  FormValuesOpphold &
  FormValuesOverforing &
  FormValuesGradering &
  VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: FormValuesPermisjon[];
}`,signature:{properties:[{key:"fulltUttak",value:{name:"boolean",required:!0}},{key:"permisjonsPerioder",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesPermisjon[]",required:!1}}]}},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: string;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]},alias:"FormValues"}}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"any"}}}],displayName:"PermisjonPanel",props:{foreldreType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const rk=te(ue),zn=({foreldreType:s,readOnly:i,alleKodeverk:o,erEndringssøknad:d})=>r.jsx(ke,{value:rk,children:r.jsx(Wn,{readOnly:i,foreldreType:s,alleKodeverk:o,erEndringssøknad:d})});zn.transformValues=Wn.transformValues;zn.buildInitialValues=Wn.buildInitialValues;zn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
}`,signature:{properties:[{key:"tidsromPermisjon",value:{name:"intersection",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: FormValuesPermisjon[];
} & FormValuesUtsettelse &
  FormValuesOpphold &
  FormValuesOverforing &
  FormValuesGradering &
  VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: FormValuesPermisjon[];
}`,signature:{properties:[{key:"fulltUttak",value:{name:"boolean",required:!0}},{key:"permisjonsPerioder",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesPermisjon[]",required:!1}}]}},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: string;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]},alias:"FormValues"}}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"any"}}}],displayName:"PermisjonIndex",props:{foreldreType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};class ak{constructor(i,o,d){Kr(this,"fagsakYtelseType");Kr(this,"familieHendelseType");Kr(this,"foreldreType");this.fagsakYtelseType=Ba(i),i===Wr.SVANGERSKAPSPENGER?this.familieHendelseType=se.FODSEL:this.familieHendelseType=Ba(o),this.foreldreType=Ba(d)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const Ca=te(ue),Ai=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:Ca.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(M,{name:"termindato",label:Ca.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:s,validate:[A,I]})}),r.jsx(q,{children:r.jsx(M,{name:"foedselsDato",label:Ca.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:s,validate:[I,Bn]})})]})})]});Ai.__docgenInfo={description:"",methods:[],displayName:"TerminFodselSvpPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const tk="_notLastRow_uwn16_1",sk={notLastRow:tk},ik=pr(100),lk="tilretteleggingArbeidsgiver",ok="tilretteleggingSelvstendigNaringsdrivende",dk="tilretteleggingFrilans",Ss={tilretteleggingType:"",dato:"",stillingsprosent:""},Xr=({readOnly:s,name:i})=>{const o=$(),{control:d}=Y(),{fields:g,remove:k,append:v}=ce({control:d,name:i});return V.useEffect(()=>{g.length===0&&v(Ss)},[]),r.jsx(Oe,{fields:g,emptyPeriodTemplate:Ss,bodyText:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:s,append:v,remove:k,children:(m,c,f)=>r.jsxs("div",{className:c!==g.length-1?sk.notLastRow:"",children:[r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(fe,{readOnly:s,name:`${i}.${c}.tilretteleggingType`,label:c===0?o.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}):"",validate:[A],selectValues:[r.jsx("option",{value:Vn.HEL_TILRETTELEGGING,children:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},Vn.HEL_TILRETTELEGGING),r.jsx("option",{value:Vn.DELVIS_TILRETTELEGGING,children:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},Vn.DELVIS_TILRETTELEGGING),r.jsx("option",{value:Vn.INGEN_TILRETTELEGGING,children:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},Vn.INGEN_TILRETTELEGGING)]})}),r.jsx(q,{children:r.jsx(M,{isReadOnly:s,name:`${i}.${c}.dato`,label:c===0?o.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}):"",validate:[A]})}),r.jsx(q,{children:r.jsx(le,{readOnly:s,name:`${i}.${c}.stillingsprosent`,label:c===0?o.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}):"",validate:[A,ik],maxLength:99})}),f&&r.jsx(q,{children:f()})]})})]},m.id)})};Xr.__docgenInfo={description:`BehovForTilrettteleggingFieldArray

Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.`,methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Vs="tilretteleggingArbeidsforhold",Ms="tilretteleggingForArbeidsgiver",uk={organisasjonsnummer:"",behovsdato:""},wi=({readOnly:s})=>{const i=$(),{control:o}=Y(),{fields:d,append:g}=ce({control:o,name:`${Vs}.${Ms}`}),k=()=>{g(uk)},v=`${Vs}.${Ms}`;return r.jsx(r.Fragment,{children:d.map((m,c)=>r.jsxs("div",{children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(q,{children:r.jsx(le,{readOnly:s,name:`${v}.${c}.organisasjonsnummer`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.OrgNr"}),validate:[A,f=>eg(f.toString()),ng],maxLength:99})}),r.jsx(q,{children:r.jsx(M,{name:`${v}.${c}.behovsdato`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra"}),validate:[A],isReadOnly:s})})]})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Xr,{name:`${v}.${c}.${lk}`,readOnly:s}),d.length>c+1&&r.jsxs(r.Fragment,{children:[r.jsx("hr",{}),r.jsx(y,{sixteenPx:!0})]}),d.length===c+1&&r.jsx(Ke,{size:"small",variant:"secondary",onClick:k,type:"button",children:r.jsx(h,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})]},m.id))})};wi.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ie=te(ue),gk="tilretteleggingForArbeidsgiver",ve="tilretteleggingArbeidsforhold",ga=({readOnly:s})=>{var f,R,w,b;const{watch:i,setError:o,clearErrors:d,formState:g}=Y(),k=i(`${ve}.sokForSelvstendigNaringsdrivende`),v=i(`${ve}.sokForFrilans`),m=i(`${ve}.sokForArbeidsgiver`),c=!k&&!v&&!m;return V.useEffect(()=>{c&&o(`${ve}.notRegisteredInput`,{type:"custom",message:Ie.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}),c||d(`${ve}.notRegisteredInput`)},[c]),r.jsx(ke,{value:Ie,children:r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),r.jsx(y,{sixteenPx:!0}),g.isSubmitted&&((R=(f=g.errors[ve])==null?void 0:f.notRegisteredInput)==null?void 0:R.message)&&r.jsx(fr,{children:(b=(w=g.errors[ve])==null?void 0:w.notRegisteredInput)==null?void 0:b.message}),r.jsx(U,{name:`${ve}.sokForSelvstendigNaringsdrivende`,label:r.jsx(h,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),k&&r.jsxs(de,{children:[r.jsx(M,{name:`${ve}.behovsdatoSN`,label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[A],isReadOnly:s}),r.jsx(Xr,{name:`${ve}.${ok}`,readOnly:s})]}),r.jsx(U,{name:`${ve}.sokForFrilans`,label:r.jsx(h,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),v&&r.jsxs(de,{children:[r.jsx(M,{name:`${ve}.behovsdatoFrilans`,label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[A],isReadOnly:s}),r.jsx(Xr,{name:`${ve}.${dk}`,readOnly:s})]}),r.jsx(U,{name:`${ve}.sokForArbeidsgiver`,label:r.jsx(h,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),m&&r.jsx(de,{children:r.jsx(wi,{readOnly:s})})]})})};ga.buildInitialValues=()=>({[ve]:{[gk]:[{}]}});ga.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [TILRETTELEGGING_NAME_PREFIX]: {
    [tilretteleggingForArbeidsgiverFieldArrayName]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      tilretteleggingArbeidsgiver?: Tilrettelegging[];
    }[];
    sokForArbeidsgiver?: boolean;
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    tilretteleggingFrilans?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    tilretteleggingSelvstendigNaringsdrivende?: Tilrettelegging[];
  } & VirtuellFeilType;
}`,signature:{properties:[{key:"tilretteleggingArbeidsforhold",value:{name:"intersection",raw:`{
  [tilretteleggingForArbeidsgiverFieldArrayName]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    tilretteleggingArbeidsgiver?: Tilrettelegging[];
  }[];
  sokForArbeidsgiver?: boolean;
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  tilretteleggingFrilans?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  tilretteleggingSelvstendigNaringsdrivende?: Tilrettelegging[];
} & VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  [tilretteleggingForArbeidsgiverFieldArrayName]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    tilretteleggingArbeidsgiver?: Tilrettelegging[];
  }[];
  sokForArbeidsgiver?: boolean;
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  tilretteleggingFrilans?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  tilretteleggingSelvstendigNaringsdrivende?: Tilrettelegging[];
}`,signature:{properties:[{key:"tilretteleggingForArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  tilretteleggingArbeidsgiver?: Tilrettelegging[];
}`,signature:{properties:[{key:"behovsdato",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"tilretteleggingArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  fomDato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}}],raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  tilretteleggingArbeidsgiver?: Tilrettelegging[];
}[]`,required:!1}},{key:"sokForArbeidsgiver",value:{name:"boolean",required:!1}},{key:"sokForFrilans",value:{name:"boolean",required:!1}},{key:"behovsdatoFrilans",value:{name:"string",required:!1}},{key:"tilretteleggingFrilans",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  fomDato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}},{key:"sokForSelvstendigNaringsdrivende",value:{name:"boolean",required:!1}},{key:"behovsdatoSN",value:{name:"string",required:!1}},{key:"tilretteleggingSelvstendigNaringsdrivende",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  fomDato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: boolean;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const mk="_col_hlukm_1",Es={col:mk},Ja="omsorg",Jn=({readOnly:s,soknadData:i,alleKodeverk:o,fodselsdato:d,mottattDato:g})=>r.jsxs($s,{justify:"space-between",children:[r.jsxs("div",{className:Es.col,children:[r.jsx(ia,{readOnly:s,soknadData:i}),r.jsx(ye,{readOnly:s,alleKodeverk:o,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,mottattDato:g}),r.jsx(cr,{readOnly:s})]}),r.jsx("div",{className:Es.col,children:r.jsx(kn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:d})})]});Jn.transformValues=s=>({...ye.transformValues(s),[Ja]:kn.transformValues(s[Ja])});Jn.buildInitialValues=()=>({[Ja]:{},...ye.buildInitialValues()});Jn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`{
  rettigheter?: string;
  foedselsDato?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
} & OppholdINorgeFormValues`,elements:[{name:"signature",type:"object",raw:`{
  rettigheter?: string;
  foedselsDato?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"omsorg",value:{name:"FormValues",required:!1}}]}},{name:"FormValues"}],alias:"FormValues"}}],returns:{type:{name:"intersection",raw:`Omit<FormValues, 'omsorg'> & {
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonTransformedFormValues;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`{
  rettigheter?: string;
  foedselsDato?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
} & OppholdINorgeFormValues`,elements:[{name:"signature",type:"object",raw:`{
  rettigheter?: string;
  foedselsDato?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"omsorg",value:{name:"FormValues",required:!1}}]}},{name:"FormValues"}]},{name:"literal",value:"'omsorg'"}],raw:"Omit<FormValues, 'omsorg'>"},{name:"signature",type:"object",raw:`{
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonTransformedFormValues;
}`,signature:{properties:[{key:"omsorg",value:{name:"TransformedFormValues",required:!1}}]}}]}}},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringAdopsjonOgOmsorgGrid"};const kk="_col_hlukm_1",Is={col:kk},Xa="omsorg",Xn=({readOnly:s,soknadData:i,alleKodeverk:o,fodselsdato:d,mottattDato:g})=>r.jsxs($s,{justify:"space-between",children:[r.jsxs("div",{className:Is.col,children:[i.getForeldreType()!==Ln.MOR&&r.jsx(ia,{readOnly:s,soknadData:i}),r.jsx(ye,{readOnly:s,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,alleKodeverk:o,mottattDato:g}),r.jsx(cr,{readOnly:s})]}),r.jsxs("div",{className:Is.col,children:[i.getForeldreType()!==Ln.MOR&&r.jsx(kn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:d}),r.jsx(lt,{readOnly:s,erForeldrepenger:!1})]})]});Xn.transformValues=s=>({...ye.transformValues(s),[Xa]:kn.transformValues(s[Xa])});Xn.buildInitialValues=()=>({...ye.buildInitialValues(),[Xa]:{}});Xn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringFodselGrid"};const pk=(s,i)=>s?Xn.buildInitialValues():i?Jn.buildInitialValues():{},vk=(s,i,o)=>{let d=s;return s.rettigheter===Dn.IKKE_RELEVANT&&(d=Gs(s,"rettigheter")),{...d,...i?Xn.transformValues(d):{},...o?Jn.transformValues(d):{}}},Fi=({readOnly:s,soknadData:i,alleKodeverk:o,onSubmitUfullstendigsoknad:d,onSubmit:g})=>{const k=i.getFamilieHendelseType()===se.FODSEL,v=i.getFamilieHendelseType()===se.ADOPSJON,m=vr({defaultValues:pk(k,v)}),c=m.watch("foedselsDato"),f=m.watch("mottattDato");return r.jsxs(yr,{formMethods:m,onSubmit:R=>g(vk(R,k,v)),children:[r.jsx(ta,{readOnly:s}),k&&r.jsx(Xn,{soknadData:i,readOnly:s,alleKodeverk:o,fodselsdato:c,mottattDato:f}),v&&r.jsx(Jn,{soknadData:i,readOnly:s,alleKodeverk:o,fodselsdato:c,mottattDato:f}),r.jsx(aa,{readOnly:s,submitting:m.formState.isSubmitting,onSubmitUfullstendigsoknad:d})]})};Fi.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const Pi=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g})=>r.jsx(Fi,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g});Pi.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Za="omsorg",Qa="frilans",yk=s=>({[Qa]:en.buildInitialValues(),...Qe.buildInitialValues(s),...$n.buildInitialValues(),[Za]:{},...ye.buildInitialValues(),...zn.buildInitialValues()}),fk=(s,i)=>{let o=s;return s.rettigheter===Dn.IKKE_RELEVANT&&(o=Gs(s,"rettigheter")),{...ye.transformValues(o),[Za]:kn.transformValues(o[Za]),[mn]:Qe.transformValues(o,i),[be]:zn.transformValues(o),[Qa]:en.transformValues(o[Qa])}},_i=({readOnly:s,soknadData:i,alleKodeverk:o,onSubmit:d,onSubmitUfullstendigsoknad:g,fagsakPersonnummer:k,erEndringssøknad:v})=>{const m=vr({defaultValues:V.useMemo(()=>yk(o[ee.ARBEID_TYPE]),[])}),c=o[ee.ARBEID_TYPE],f=m.watch("sokerHarAleneomsorg"),R=m.watch("denAndreForelderenHarRettPaForeldrepenger"),w=!f&&R!==!1,b=m.watch("foedselsDato"),F=m.watch("mottattDato");return r.jsxs(yr,{formMethods:m,onSubmit:T=>d(fk(T,c)),children:[r.jsx(ta,{readOnly:s}),r.jsx(ye,{readOnly:s,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,alleKodeverk:o,mottattDato:F}),r.jsx($n,{readOnly:s,alleKodeverk:o}),r.jsx(ot,{readOnly:s,alleKodeverk:o}),r.jsx(en,{readOnly:s}),r.jsx(Qe,{readOnly:s,alleKodeverk:o}),r.jsx(yi,{readOnly:s}),i.getFamilieHendelseType()===se.FODSEL&&r.jsx(lt,{readOnly:s,erForeldrepenger:!0}),r.jsx(ia,{readOnly:s,soknadData:i}),r.jsx(kn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),fodselsdato:b,isForeldrepengerFagsak:!0}),r.jsx(zs,{readOnly:s,permisjonRettigheterPanel:r.jsx(ci,{readOnly:s,denAndreForelderenHarRettPaForeldrepenger:R,sokerErMor:i.getForeldreType()===Ln.MOR}),alleKodeverk:o,fagsakPersonnummer:k}),r.jsx(zn,{foreldreType:i.getForeldreType(),readOnly:s,alleKodeverk:o,erEndringssøknad:v}),r.jsx(fi,{annenForelderInformertRequired:w,readOnly:s}),r.jsx(cr,{readOnly:s}),r.jsx(aa,{readOnly:s,onSubmitUfullstendigsoknad:g,submitting:m.formState.isSubmitting})]})};_i.__docgenInfo={description:`ForeldrepengerForm

Form-komponent for registrering av papirsøknad for foreldrepenger.`,methods:[],displayName:"ForeldrepengerForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const Ni=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g,fagsakPersonnummer:k,erEndringssøknad:v})=>r.jsx(_i,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g,fagsakPersonnummer:k,erEndringssøknad:v});Ni.__docgenInfo={description:"",methods:[],displayName:"ForeldrepengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const et="frilans",ck=s=>({...Qe.buildInitialValues(s),...$n.buildInitialValues(),...ye.buildInitialValues(),...ga.buildInitialValues(),[et]:en.buildInitialValues()}),hk=s=>{let i=[];const{tilretteleggingArbeidsforhold:o}=s;return o!=null&&o.sokForArbeidsgiver&&(o!=null&&o.tilretteleggingForArbeidsgiver)&&(i=i.concat(o.tilretteleggingForArbeidsgiver.map(d=>({"@type":"VI",behovsdato:d.behovsdato,organisasjonsnummer:d.organisasjonsnummer,tilrettelegginger:d.tilretteleggingArbeidsgiver})))),o!=null&&o.sokForFrilans&&i.push({"@type":"FR",behovsdato:o.behovsdatoFrilans,tilrettelegginger:o.tilretteleggingFrilans}),o!=null&&o.sokForSelvstendigNaringsdrivende&&i.push({"@type":"SN",behovsdato:o.behovsdatoSN,tilrettelegginger:o.tilretteleggingSelvstendigNaringsdrivende}),i},bk=(s,i)=>({...ye.transformValues(s),foedselsDato:s.foedselsDato,tilretteleggingArbeidsforhold:hk(s),[et]:en.transformValues(s[et]),[mn]:Qe.transformValues(s,i)}),xi=({readOnly:s,soknadData:i,alleKodeverk:o,onSubmit:d,onSubmitUfullstendigsoknad:g})=>{const k=vr({defaultValues:V.useMemo(()=>ck(o[ee.ARBEID_TYPE]),[])}),v=o[ee.ARBEID_TYPE],m=k.watch("mottattDato");return r.jsxs(yr,{formMethods:k,onSubmit:c=>d(bk(c,v)),children:[r.jsx(ta,{readOnly:s}),r.jsx(ye,{readOnly:s,alleKodeverk:o,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,mottattDato:m}),r.jsx($n,{readOnly:s,alleKodeverk:o}),r.jsx(ot,{readOnly:s,alleKodeverk:o}),r.jsx(en,{readOnly:s}),r.jsx(Qe,{readOnly:s,kunMiliterEllerSiviltjeneste:!0,alleKodeverk:o}),r.jsx(Ai,{readOnly:s}),r.jsx(ga,{readOnly:s}),r.jsx(cr,{readOnly:s}),r.jsx(aa,{readOnly:s,onSubmitUfullstendigsoknad:g,submitting:k.formState.isSubmitting})]})};xi.__docgenInfo={description:`SvangerskapspengerForm

Form-komponent for registrering av papirsøknad for svangerskapspenger.`,methods:[],displayName:"SvangerskapspengerForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const Oi=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g})=>r.jsx(xi,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g});Oi.__docgenInfo={description:"",methods:[],displayName:"SvangerskapspengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Rk="_container_10p07_1",jk="_colWidth_10p07_5",qk="_pushRight_10p07_9",or={container:Rk,colWidth:jk,pushRight:qk},Tk=[se.ADOPSJON,se.FODSEL],Si=({setSoknadData:s,fagsakYtelseType:i,alleKodeverk:o})=>{const d=V.useMemo(()=>({fagsakYtelseType:i,familieHendelseType:void 0,foreldreType:void 0}),[i]),g=vr({defaultValues:d}),k=g.watch("fagsakYtelseType"),v=V.useCallback(R=>s(new ak(R.fagsakYtelseType,R.familieHendelseType,R.foreldreType)),[s]),m=o[ee.FAGSAK_YTELSE],c=o[ee.FAMILIE_HENDELSE_TYPE],f=o[ee.FORELDRE_TYPE];return r.jsx(yr,{formMethods:g,onSubmit:v,children:r.jsxs(oe,{className:or.container,children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.Omsoknaden.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsxs(q,{className:or.colWidth,children:[r.jsx(Xe,{children:r.jsx(h,{id:"Registrering.Omsoknaden.soknadstype"})}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:"fagsakYtelseType",validate:[A],radios:m.map(R=>({label:R.navn,value:R.kode,disabled:!!i}))})]}),r.jsxs(q,{className:or.colWidth,children:[r.jsx(Xe,{children:r.jsx(h,{id:"Registrering.Omsoknaden.Tema"})}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:"familieHendelseType",validate:k===ts.SVANGERSKAPSPENGER?[]:[A],radios:c.filter(({kode:R})=>Tk.includes(R)).map(R=>({label:R.navn,value:R.kode,disabled:k===ts.SVANGERSKAPSPENGER}))})]}),r.jsxs(q,{className:or.colWidth,children:[r.jsx(Xe,{children:r.jsx(h,{id:"Registrering.Omsoknaden.Soker"})}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:"foreldreType",validate:[A],radios:f.map(R=>({label:R.navn,value:R.kode}))})]})]})}),r.jsx(y,{thirtyTwoPx:!0}),r.jsx("div",{className:or.pushRight,children:r.jsx(Ke,{size:"small",variant:"primary",onClick:Ys,disabled:g.formState.isSubmitting||g.formState.isSubmitted,children:r.jsx(h,{id:"Registrering.Omsoknaden.VisSkjema"})})})]})})};Si.__docgenInfo={description:`SoknadTypePickerForm

Toppkomponent for registrering av papirsøknad der søknadstype, tema og søker/foreldretype blir valgt.`,methods:[],displayName:"SoknadTypePickerForm",props:{setSoknadData:{required:!0,tsType:{name:"signature",type:"function",raw:"(soknadData: SoknadData) => void",signature:{arguments:[{type:{name:"SoknadData"},name:"soknadData"}],return:{name:"void"}}},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Vi={"Registrering.RegistrereSoknad":"Registrere søknad","Registrering.RegistrerAlleOpplysninger":"Registrer inn alle opplysninger fra papirsøknaden","Registrering.Omsoknaden.Title":"Om søknaden","Registrering.Omsoknaden.soknadstype":"Søknadstype","Registrering.Omsoknaden.Tema":"Tema","Registrering.Omsoknaden.Soker":"Søker","Registrering.Omsoknaden.VisSkjema":"Vis skjema","SoknadRegistrertModal.ContentLabel":"Søknaden er registrert. Du kommer nå til forsiden.","SoknadRegistrertModal.InfoTextOne":"Søknaden er registrert og vil bli behandlet","SoknadRegistrertModal.InfoTextTwo":"Du kommer nå til forsiden","SoknadRegistrertModal.OkButtonText":"OK"},Ak="_panel_nx0ko_1",wk={panel:Ak},Fk=te(Vi),Mi=({fagsak:s,kodeverk:i,readOnly:o,lagreUfullstendig:d,lagreFullstendig:g,erEndringssøknad:k})=>{const[v,m]=V.useState(),c=V.useCallback(R=>(v&&g(R,v.fagsakYtelseType,v.familieHendelseType,v.foreldreType),Promise.resolve()),[v]),f=V.useCallback(()=>(v&&d(v.fagsakYtelseType,v.familieHendelseType,v.foreldreType),Promise.resolve()),[v]);return r.jsx(ke,{value:Fk,children:r.jsxs(Yu,{className:wk.panel,children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.RegistrereSoknad"})}),r.jsx(y,{sixteenPx:!0}),!o&&r.jsx(Uu,{children:r.jsx(h,{id:"Registrering.RegistrerAlleOpplysninger"},"regOpplysninger")}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{sixteenPx:!0}),r.jsx(Si,{setSoknadData:m,fagsakYtelseType:s.fagsakYtelseType,alleKodeverk:i}),v&&v.getFagsakYtelseType()===Wr.ENGANGSSTONAD&&r.jsx(Pi,{onSubmitUfullstendigsoknad:f,onSubmit:c,readOnly:o,soknadData:v,alleKodeverk:i}),v&&v.getFagsakYtelseType()===Wr.FORELDREPENGER&&r.jsx(Ni,{onSubmitUfullstendigsoknad:f,onSubmit:c,readOnly:o,soknadData:v,alleKodeverk:i,fagsakPersonnummer:s.bruker.fødselsnummer,erEndringssøknad:k}),v&&v.getFagsakYtelseType()===Wr.SVANGERSKAPSPENGER&&r.jsx(Oi,{onSubmitUfullstendigsoknad:f,onSubmit:c,readOnly:o,soknadData:v,alleKodeverk:i})]})})};Mi.__docgenInfo={description:"",methods:[],displayName:"RegistrerPapirsoknadPanel",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  historikkinnslagV2: HistorikkinnslagV2[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: string[];
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
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"aktoer",value:{name:"string",required:!0}},{key:"dokumentLinks",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"historikkinnslagDeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  begrunnelsetekst?: string;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: string;
    verdi?: string;
  };
  opplysninger: HistorikkInnslagOpplysning[];
  soeknadsperiode?: {
    soeknadsperiodeType?: string;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: string;
  årsaktekst?: string;
  tema?: {
    endretFeltNavn: string;
    klNavn: string;
    navnVerdi: string;
  };
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: HistorikkInnslagAksjonspunkt[];
}`,signature:{properties:[{key:"begrunnelsetekst",value:{name:"string",required:!1}},{key:"begrunnelseFritekst",value:{name:"string",required:!1}},{key:"hendelse",value:{name:"signature",type:"object",raw:`{
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"opplysninger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opplysningType: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"opplysningType",value:{name:"string",required:!0}},{key:"tilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagOpplysning[]",required:!0}},{key:"soeknadsperiode",value:{name:"signature",type:"object",raw:`{
  soeknadsperiodeType?: string;
  navnVerdi?: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"soeknadsperiodeType",value:{name:"string",required:!1}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"tilVerdi",value:{name:"string",required:!1}}]},required:!1}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"årsaktekst",value:{name:"string",required:!1}},{key:"tema",value:{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  klNavn: string;
  navnVerdi: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"klNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!0}}]},required:!1}},{key:"gjeldendeFra",value:{name:"signature",type:"object",raw:`{
  fra?: string;
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"fra",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"resultat",value:{name:"string",required:!1}},{key:"endredeFelter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | number | boolean;
  tilVerdi?: string | number | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"klNavn",value:{name:"string",required:!1}},{key:"fraVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"tilVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"klFraVerdi",value:{name:"string",required:!1}},{key:"klTilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkinnslagEndretFelt[]",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  godkjent: boolean;
  aksjonspunktBegrunnelse?: string;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"aksjonspunktBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagAksjonspunkt[]",required:!1}}]}}],raw:"HistorikkinnslagDel[]",required:!0}}]}}],raw:`Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"historikkinnslagV2",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>`}],raw:"HistorikkinnslagV2[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  historikkinnslagV2: HistorikkinnslagV2[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},kodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreUfullstendig:{required:!0,tsType:{name:"signature",type:"function",raw:"(fagsakYtelseType: string, familieHendelseType: string, foreldreType: string) => Promise<any>",signature:{arguments:[{type:{name:"string"},name:"fagsakYtelseType"},{type:{name:"string"},name:"familieHendelseType"},{type:{name:"string"},name:"foreldreType"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},lagreFullstendig:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  formValues: any,
  fagsakYtelseType: string,
  familieHendelseType: string,
  foreldreType: string,
) => Promise<any>`,signature:{arguments:[{type:{name:"any"},name:"formValues"},{type:{name:"string"},name:"fagsakYtelseType"},{type:{name:"string"},name:"familieHendelseType"},{type:{name:"string"},name:"foreldreType"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const Pk="_alertStyle_1d8gt_1",_k="_modalStyle_1d8gt_6",Nk="_fullWidth_1d8gt_11",xk="_reduceMargin_1d8gt_16",Ok="_left_1d8gt_20",Sk="_right_1d8gt_24",En={alertStyle:Pk,modalStyle:_k,fullWidth:Nk,reduceMargin:xk,left:Ok,right:Sk},dr=te(Vi),Ei=({isOpen:s=!1})=>r.jsx(ke,{value:dr,children:r.jsx(Je,{className:En.modalStyle,open:s,"aria-label":dr.formatMessage({id:"SoknadRegistrertModal.ContentLabel"}),onClose:()=>{},children:r.jsx(Je.Body,{children:r.jsxs(Qr,{size:"small",variant:"success",className:En.alertStyle,children:[r.jsxs("div",{className:En.left,children:[r.jsx("p",{className:En.reduceMargin,children:dr.formatMessage({id:"SoknadRegistrertModal.InfoTextOne"})}),r.jsx("p",{className:En.reduceMargin,children:dr.formatMessage({id:"SoknadRegistrertModal.InfoTextTwo"})})]}),r.jsx("div",{className:En.right,children:r.jsx(Bs,{to:"/",children:r.jsx(Ke,{size:"small",variant:"primary",children:dr.formatMessage({id:"SoknadRegistrertModal.OkButtonText"})})})})]})})})});Ei.__docgenInfo={description:`SoknadRegistrertModal

Informasjonsmodal som vises til saksbehandler når en papirsøknad har blitt registrert.`,methods:[],displayName:"SoknadRegistrertModal",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Vk=s=>s.map(i=>i.definisjon).filter(i=>i===ur.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD||i===ur.REGISTRER_PAPIRSOKNAD_FORELDREPENGER||i===ur.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER||i===ur.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER)[0],Mk=(s,i,o,d)=>(g,k,v,m)=>{const c=[{"@type":Vk(s.aksjonspunkt),tema:v,soknadstype:k,soker:m,...g}],f={saksnummer:i.saksnummer,behandlingUuid:s.uuid,behandlingVersjon:s.versjon,bekreftedeAksjonspunktDtoer:c};return o(f).then(R=>{var w;((w=R==null?void 0:R.taskStatus)==null?void 0:w.status)!==ig.HALTED&&d(!0)})},Ii=({fagsak:s,behandling:i,kodeverk:o,rettigheter:d,lagreAksjonspunkt:g})=>{const[k,v]=V.useState(!1),m=!d.writeAccess.isEnabled||i.behandlingPaaVent,c=V.useMemo(()=>Mk(i,s,g,v),[i,s,g,v]),f=V.useCallback((F,T,x)=>c({ufullstendigSoeknad:!0},F,T,x),[c]),R=rg(),w=V.useCallback(()=>{R("/")},[]);if(!i.aksjonspunkt)return r.jsx(Hu,{});const b=i.aksjonspunkt.some(F=>F.definisjon===ur.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER);return r.jsxs(r.Fragment,{children:[r.jsx(ag,{behandling:i,kodeverk:o,opneSokeside:w}),r.jsx(Ei,{isOpen:k}),r.jsx(Mi,{fagsak:s,kodeverk:o,readOnly:m,lagreUfullstendig:f,lagreFullstendig:c,erEndringssøknad:b})]})};Ii.__docgenInfo={description:`RegisterPapirsoknad

Har ansvar for å sette opp skjemaet for registrering av papirsøknad for engangsstønad eller foreldrepenger.
Komponenten tilpasser skjemaet til valgt søknadstype (engagnsstønad eller foreldrepenger), valgt søknadtema (fødsel, adopsjon eller omsorg)
og valgt foreldretype (mor, far/medmor eller tredjepart).`,methods:[],displayName:"RegistrerPapirsoknad",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  historikkinnslagV2: HistorikkinnslagV2[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: string[];
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
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"aktoer",value:{name:"string",required:!0}},{key:"dokumentLinks",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"historikkinnslagDeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  begrunnelsetekst?: string;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: string;
    verdi?: string;
  };
  opplysninger: HistorikkInnslagOpplysning[];
  soeknadsperiode?: {
    soeknadsperiodeType?: string;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: string;
  årsaktekst?: string;
  tema?: {
    endretFeltNavn: string;
    klNavn: string;
    navnVerdi: string;
  };
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: HistorikkInnslagAksjonspunkt[];
}`,signature:{properties:[{key:"begrunnelsetekst",value:{name:"string",required:!1}},{key:"begrunnelseFritekst",value:{name:"string",required:!1}},{key:"hendelse",value:{name:"signature",type:"object",raw:`{
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"opplysninger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opplysningType: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"opplysningType",value:{name:"string",required:!0}},{key:"tilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagOpplysning[]",required:!0}},{key:"soeknadsperiode",value:{name:"signature",type:"object",raw:`{
  soeknadsperiodeType?: string;
  navnVerdi?: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"soeknadsperiodeType",value:{name:"string",required:!1}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"tilVerdi",value:{name:"string",required:!1}}]},required:!1}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"årsaktekst",value:{name:"string",required:!1}},{key:"tema",value:{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  klNavn: string;
  navnVerdi: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"klNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!0}}]},required:!1}},{key:"gjeldendeFra",value:{name:"signature",type:"object",raw:`{
  fra?: string;
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"fra",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"resultat",value:{name:"string",required:!1}},{key:"endredeFelter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | number | boolean;
  tilVerdi?: string | number | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"klNavn",value:{name:"string",required:!1}},{key:"fraVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"tilVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"klFraVerdi",value:{name:"string",required:!1}},{key:"klTilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkinnslagEndretFelt[]",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  godkjent: boolean;
  aksjonspunktBegrunnelse?: string;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"aksjonspunktBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagAksjonspunkt[]",required:!1}}]}}],raw:"HistorikkinnslagDel[]",required:!0}}]}}],raw:`Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"historikkinnslagV2",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>`}],raw:"HistorikkinnslagV2[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  historikkinnslagV2: HistorikkinnslagV2[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},kodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},rettigheter:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  writeAccess: Aksess;
  kanOverstyreAccess: Aksess;
}`,signature:{properties:[{key:"writeAccess",value:{name:"signature",type:"object",raw:`{
  employeeHasAccess: boolean;
  isEnabled: boolean;
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}},{key:"kanOverstyreAccess",value:{name:"signature",type:"object",raw:`{
  employeeHasAccess: boolean;
  isEnabled: boolean;
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}}]}},description:""},lagreAksjonspunkt:{required:!0,tsType:{name:"signature",type:"function",raw:"(params?: any, keepData?: boolean) => Promise<Behandling | undefined>",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"Promise",elements:[{name:"union",raw:"Behandling | undefined",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]}],raw:"Promise<Behandling | undefined>"}}},description:""}}};const Ek=(s,i)=>{V.useEffect(()=>{i&&s(i)},[i])},Ik=({behandling:s,setBehandling:i,kodeverk:o,fagsak:d,rettigheter:g})=>{const{startRequest:k,data:v}=tg.useRestApiRunner(sg.SAVE_AKSJONSPUNKT);return Ek(i,v),r.jsx(Ii,{behandling:s,fagsak:d,kodeverk:o,rettigheter:g,lagreAksjonspunkt:k})};Ik.__docgenInfo={description:"",methods:[],displayName:"BehandlingPapirsoknadIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling: Behandling) => void",signature:{arguments:[{type:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},name:"behandling"}],return:{name:"void"}}},description:""},kodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  historikkinnslagV2: HistorikkinnslagV2[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: string[];
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
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"aktoer",value:{name:"string",required:!0}},{key:"dokumentLinks",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"historikkinnslagDeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  begrunnelsetekst?: string;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: string;
    verdi?: string;
  };
  opplysninger: HistorikkInnslagOpplysning[];
  soeknadsperiode?: {
    soeknadsperiodeType?: string;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: string;
  årsaktekst?: string;
  tema?: {
    endretFeltNavn: string;
    klNavn: string;
    navnVerdi: string;
  };
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: HistorikkInnslagAksjonspunkt[];
}`,signature:{properties:[{key:"begrunnelsetekst",value:{name:"string",required:!1}},{key:"begrunnelseFritekst",value:{name:"string",required:!1}},{key:"hendelse",value:{name:"signature",type:"object",raw:`{
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"opplysninger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opplysningType: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"opplysningType",value:{name:"string",required:!0}},{key:"tilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagOpplysning[]",required:!0}},{key:"soeknadsperiode",value:{name:"signature",type:"object",raw:`{
  soeknadsperiodeType?: string;
  navnVerdi?: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"soeknadsperiodeType",value:{name:"string",required:!1}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"tilVerdi",value:{name:"string",required:!1}}]},required:!1}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"årsaktekst",value:{name:"string",required:!1}},{key:"tema",value:{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  klNavn: string;
  navnVerdi: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"klNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!0}}]},required:!1}},{key:"gjeldendeFra",value:{name:"signature",type:"object",raw:`{
  fra?: string;
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"fra",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"resultat",value:{name:"string",required:!1}},{key:"endredeFelter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | number | boolean;
  tilVerdi?: string | number | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"klNavn",value:{name:"string",required:!1}},{key:"fraVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"tilVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"klFraVerdi",value:{name:"string",required:!1}},{key:"klTilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkinnslagEndretFelt[]",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  godkjent: boolean;
  aksjonspunktBegrunnelse?: string;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"aksjonspunktBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagAksjonspunkt[]",required:!1}}]}}],raw:"HistorikkinnslagDel[]",required:!0}}]}}],raw:`Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"historikkinnslagV2",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>`}],raw:"HistorikkinnslagV2[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  historikkinnslagV2: HistorikkinnslagV2[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},rettigheter:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  writeAccess: Aksess;
  kanOverstyreAccess: Aksess;
}`,signature:{properties:[{key:"writeAccess",value:{name:"signature",type:"object",raw:`{
  employeeHasAccess: boolean;
  isEnabled: boolean;
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}},{key:"kanOverstyreAccess",value:{name:"signature",type:"object",raw:`{
  employeeHasAccess: boolean;
  isEnabled: boolean;
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}}]}},description:""}}};export{Ik as default};
