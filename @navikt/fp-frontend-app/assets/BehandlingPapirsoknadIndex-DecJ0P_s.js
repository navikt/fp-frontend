var Vu=Object.defineProperty;var Iu=(s,i,l)=>i in s?Vu(s,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[i]=l;var Yr=(s,i,l)=>Iu(s,typeof i!="symbol"?i+"":i,l);import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as M,R as Qr,c as Du,g as Ku}from"./index-DRjF_FHU.js";import{W as ee,H as L,L as T,y,Z as le,M as h,m as de,t as te,d as nt,j as ea,A as qn,S as Bu,a6 as rt,a7 as La,e as Is,P as Lu,Q as Yu,F as Uu}from"./index.es-BXIlixZT.js";import{u as Y,G as fe,ah as Oe,P as E,H as A,g as I,D as Ae,U as Ne,K as Q,x as ie,F as oe,aq as $u,a7 as Ds,ar as Hu,k as U,M as ce,as as Gu,Z as mn,p as Un,w as Ks,y as cr,v as kn,n as at,at as Bs,a as Ls,b as tt,c as Ys,al as se,au as Cu,ad as $n,av as Wu,aw as zu,ax as Ju,f as fr,$ as hr,z as Xu,ab as Wa,ay as Zu,W as Ln,az as Qu,aA as eg,aB as ng,V as mr,Q as rg,r as ag,q as tg}from"./AppIndex.stories-DDDJHRLj.js";import"./aktivitetStatus-02fOJoqz.js";import{c as sg,A as ig}from"./bind-Bji6QwHW.js";import{b as H,H as ne,P as ke,L as me,D as Ze,M as Xe,B as Us,e as Ke,E as br,f as $s,V as og,d as Hs}from"./VStack-Bfcz_O9r.js";import{L as st}from"./landkoder-tJDPMx5C.js";import{L as ts}from"./index.es-Bb6V0-IF.js";import{U as ln,O as Ur}from"./uttakPeriodeType-DoZHGf1g.js";import{T as En}from"./tilretteleggingType-BCC9qV1H.js";import"./index-rX-Bn4lm.js";import"./iframe-C648ESqa.js";import"../sb-preview/runtime.js";import"./SettPaVentReadOnlyModal-P0y_O7M5.js";import"./behandlingResultatType-DHbqkXMl.js";import"./nb_NO-CLehlXOw.js";function lg(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var dn=(s=>(s.FISKER="FISKER",s.ARBEIDSTAKER="ARBEIDSTAKER",s.SELVSTENDIG_NAERINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",s.KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NAERINGSDRIVENDE="KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",s.SJOMANN="SJØMANN",s.JORDBRUKER="JORDBRUKER",s.DAGPENGER="DAGPENGER",s.INAKTIV="INAKTIV",s.KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER="KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",s.KOMBINASJON_ARBEIDSTAKER_OG_FISKER="KOMBINASJON_ARBEIDSTAKER_OG_FISKER",s.FRILANSER="FRILANSER",s.KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER="KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",s.KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER="KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",s.DAGMAMMA="DAGMAMMA",s.ANNET="ANNET",s))(dn||{}),kr=(s=>(s.LONN_UNDER_UTDANNING="LØNN_UNDER_UTDANNING",s.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",s.FRILANSER="FRILANSER",s.MILITÆR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",s))(kr||{}),An=(s=>(s.MOR="MOR",s.FAR="FAR",s.MEDMOR="MEDMOR",s.MEDFAR="MEDFAR",s.TREDJE_PART="TREDJE_PART",s))(An||{}),Jr=(s=>(s.UKJENT_FORELDER="UKJENT_FORELDER",s.IKKE_NORSK_FNR="IKKE_NORSK_FNR",s))(Jr||{}),Kn=(s=>(s.FISKE="FISKE",s.FRILANSER="FRILANSER",s.DAGMAMMA="DAGMAMMA",s.JORDBRUK_ELLER_SKOGBRUK="JORDBRUK_SKOGBRUK",s.ANNEN="ANNEN",s))(Kn||{}),yr=(s=>(s.INSTITUSJONSOPPHOLD_ANNEN_FORELDER="INSTITUSJONSOPPHOLD_ANNEN_FORELDER",s.SYKDOM_ANNEN_FORELDER="SYKDOM_ANNEN_FORELDER",s.ALENEOMSORG="ALENEOMSORG",s.IKKE_RETT_ANNEN_FORELDER="IKKE_RETT_ANNEN_FORELDER",s.UDEFINERT="-",s))(yr||{});const dg="_notLastRow_7c46s_1",ug={notLastRow:dg},pn="andreYtelser",it="PERIODER",$r=(s,i)=>s(i),na=({readOnly:s,name:i})=>{const l=H(),{getValues:d,control:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:f,append:c}=fe({control:g,name:`${pn}.${i}`});return r.jsx(Oe,{fields:m,bodyText:l.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:s,append:c,remove:f,children:(R,w,b)=>{const F=`${pn}.${i}.${w}`;return r.jsxs("div",{children:[r.jsx("div",{className:w!==m.length-1?ug.notLastRow:"",children:r.jsx(ee,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:`${F}.periodeFom`,label:w===0?l.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[A,I,()=>{const q=$r(d,`${F}.periodeFom`),N=$r(d,`${F}.periodeTom`);return N&&q?Ae(N)(q):null}],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${F}.periodeTom`,label:w===0?l.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[A,I,()=>{const q=$r(d,`${F}.periodeFom`),N=$r(d,`${F}.periodeTom`);return N&&q?Ne(q)(N):null}],onChange:()=>v?k():void 0})}),b&&r.jsx(T,{children:b()})]})})}),r.jsx(y,{sixteenPx:!0})]},R.id)}})};na.transformValues=(s,i)=>s.map(l=>({ytelseType:i,periodeFom:l.periodeFom,periodeTom:l.periodeTom}));na.__docgenInfo={description:`RenderAndreYtelserPerioderFieldArray

Viser inputfelter for fra og til dato for perioder for andre ytelser`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"FormValues[]"}},{name:"ytelseType",optional:!1,type:{name:"string"}}],returns:{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  ytelseType: string;
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"ytelseType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"TransformValues[]"}}}],displayName:"RenderAndreYtelserPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Gs=(s,i)=>i?s.filter(l=>l.kode===kr.MILITÆR_ELLER_SIVILTJENESTE):s.filter(l=>l.kode!==kr.UTENLANDSK_ARBEIDSFORHOLD&&l.kode!==kr.FRILANSER&&l.kode!==kr.LONN_UNDER_UTDANNING),Hn=({readOnly:s,kunMiliterEllerSiviltjeneste:i=!1,alleKodeverk:l})=>{const{watch:d}=Y(),g=d(pn),k=l[Q.ARBEID_TYPE],v=M.useMemo(()=>Gs(k,i),[i]);return r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.AndreYtelser.Title"})}),r.jsx(y,{sixteenPx:!0}),v.map(m=>{const f=`${m.kode}_${it}`;return r.jsxs(Qr.Fragment,{children:[r.jsx(ie,{name:`${pn}.${m.kode}`,label:m.navn,readOnly:s},m.kode),(g==null?void 0:g[m.kode])&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{children:r.jsx(na,{name:f,readOnly:s})})]})]},m.kode)})]})};Hn.buildInitialValues=s=>{const i={};return Gs(s).forEach(l=>{const d=`${l.kode}_${it}`;i[d]=[{}]}),{[pn]:i}};Hn.transformValues=(s,i)=>{const l=s[pn],d=[];return i.filter(g=>l==null?void 0:l[g.kode]).forEach(g=>{const k=`${g.kode}_${it}`,v=l?l[k]:void 0;v&&na.transformValues(v,g.kode).forEach(m=>d.push(m))}),d};Hn.__docgenInfo={description:`AndreYtelserPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ue={"Registrering.AndreYtelser.periodeTom":"T.o.m.","Registrering.AndreYtelser.periodeFom":"F.o.m.","Registrering.AndreYtelser.Title":"Andre inntektskilder","Registrering.TheOtherParent.CannotSpecifyOtherParent":"Kan ikke oppgi annen forelder","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title":"Angi årsak","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1":"Forelder er ukjent","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2":"Har ikke norsk f.nr. eller d-nr.","Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer":"Utenlandsk fødselsnummer","Registrering.TheOtherParent.CannotSpecifyOtherParent.Land":"Land","Registrering.TheOtherParent.Title":"Den andre forelderen","Registrering.TheOtherParent.Fodselsnummer":"Fødselsnummer/D-nummer","Registrering.Permisjon.SøkerHarAleneomsorg":"Har søker aleneomsorg for barnet?","Registrering.Permisjon.SøkerHarAleneomsorg.Yes":"Ja","Registrering.Permisjon.SøkerHarAleneomsorg.No":"Nei","Registrering.Permisjon.HarRettPaForeldrepenger":"Har den andre forelderen rett på foreldrepenger i Norge?","Registrering.Permisjon.HarRettPaForeldrepenger.Yes":"Ja","Registrering.Permisjon.HarRettPaForeldrepenger.No":"Nei","Registrering.Permisjon.MorUføretrygd":"Bare far rett og mor mottar uføretryd?","Registrering.Permisjon.MorUføretrygd.Yes":"Ja","Registrering.Permisjon.MorUføretrygd.No":"Nei","Registrering.Permisjon.AnnenForelderRettEØS":"Annen forelder har tilstrekkelig opptjening fra land i EØS?","Registrering.Permisjon.AnnenForelderRettEØS.Yes":"Ja","Registrering.Permisjon.AnnenForelderRettEØS.No":"Nei","Registrering.TerminOgFodsel":"Opplysninger om termin og fødsel","Registrering.Termin.Fodt":"Er barnet født?","Registrering.Fodsel.ErFodt":"Ja","Registrering.Fodsel.ErIkkeFodt":"Nei","Registrering.Termindato":"Termindato","Registrering.AntallBarn":"Antall barn","Registrering.UtstedtDato":"Utstedt dato fra terminbekreftelsen","Registrering.Fodselsdato":"Når ble barnet født?","Registrering.RettTilPrematuruker":"Rett til prematuruker vil kun sjekkes når du også oppgir termindato","Registrering.Frilans.Title":"Frilanser","Registrering.Frilans.HarFrilansvirksomhet":"Har søker periode med frilansvirksomhet?","Registrering.Frilans.OppgiPeriode":"Oppgi periode med frilansvirksomhet","Registrering.Frilans.Yes":"Ja","Registrering.Frilans.No":"Nei","Registrering.Frilans.periodeTom":"T.o.m.","Registrering.Frilans.periodeFom":"F.o.m.","Registrering.Frilans.ErNyoppstartedFrilanser":"Er søker nyoppstartet frilanser?","Registrering.Frilans.HarInntektFraForsterhjem":"Har søker inntekt fra fosterhjem?","Registrering.FrilansOppdrag.HarHattOppdragForFamilie":"Har søker hatt oppdrag for nær familie?","Registrering.FrilansOppdrag.Yes":"Ja","Registrering.FrilansOppdrag.No":"Nei","Registrering.FrilansOppdrag.OppgiPeriode":"Oppgi periode","Registrering.FrilansOppdrag.FieldArray.periodeFom":"F.o.m.","Registrering.FrilansOppdrag.FieldArray.periodeTom":"T.o.m.","Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver":"Oppdragsgiver","Registrering.FrilansOppdrag.FieldArray.NyPeriode":"Legg til periode","Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation":"F.o.m må være lik eller etter dato for første periode med frilansvirksomhet","Registrering.InntektsgivendeArbeid.ArbeidINorge.Title":"Inntektsgivende arbeid i Norge","Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold":"Vedtaksløsningen foretar oppslag av norske arbeidsforhold fra Aa-registeret så dette skal ikke registreres her","Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title":"Inntektsgivende arbeid i utlandet","Registrering.InntektsgivendeArbeid.ArbeidPaAmbassade":"Arbeid som ambassadepersonell i Norge","Registrering.InntektsgivendeArbeid.Arbeidsgiver":"Arbeidsgiver","Registrering.InntektsgivendeArbeid.Virksomhetsnummer":"Virksomhetsnummer","Registrering.InntektsgivendeArbeid.Land":"Land","Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold":"Legg til utenlandsk arbeidsforhold","Registrering.InntektsgivendeArbeid.Yes":"Ja, arbeidsgiver og søker er nære venner eller i familie","Registrering.InntektsgivendeArbeid.No":"Nei, arbeidsgiver og søker er ikke nære venner eller i familie","Registrering.InntektsgivendeArbeid.Relasjon":"Relasjon","Registrering.InntektsgivendeArbeid.Placeholder":"Placeholder - Oppslag av arbeidsforhold","Registrering.InntektsgivendeArbeid.periodeFom":"Fra og med","Registrering.InntektsgivendeArbeid.periodeTom":"Til og med","ModalLukkPapirSoknad.ModalDescription":"Registrering av søknaden avsluttes","ModalLukkPapirSoknad.Avslutt":"Avslutt registrering av søknaden","ModalLukkPapirSoknad.AvslutterRegistrering":"Avslutter registrering av søknaden. Det er ikke mulig å innhente ytterligere opplysninger.","ModalLukkPapirSoknad.BekreftAvslag":"Bekreft at søknaden skal avslås","ModalLukkPapirSoknad.Ok":"OK","ModalLukkPapirSoknad.Avbryt":"Avbryt","Registrering.SaveApplication.Title":"Ferdigstill registrering","Registrering.SaveApplication.Description":"Ved endring av opplysningene er begrunnelse obligatorisk","Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt":"Søkers opplysningsplikt er ikke overholdt","Registrering.SaveApplication.EndButton":"Bekreft og avslutt behandling","Registrering.SaveApplication.SaveButton":"Bekreft og fortsett","Registrering.Verge":"Verge/fullmektig skal knyttes til saken","Registrering.Omsoknaden.MottattDato":"Mottatt dato","Registrering.Adopsjon.FodselsdatoBarnN":"Fødselsdato barn {n}","Registrering.Adopsjon.Title":"Adopsjon","Registrering.Adopsjon.OmsorgTitle":"Omsorg","Registrering.Adopsjon.GjelderEktefellesBarn":"Gjelder adopsjon ektefelles/samboers barn?","Registrering.Adopsjon.Ja":"Ja","Registrering.Adopsjon.Nei":"Nei","Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Dato for omsorgsovertakelse/stebarnsadopsjon","Registrering.Adopsjon.DatoForOvertakelsen":"Dato for omsorgsovertakelsen","Registrering.Adopsjon.Ankomstdato":"Ankomstdato","Registrering.Adopsjon.AntallBarn":"Antall barn","Registrering.RegistreringOpphold.AngiOpphold":"Oppgi hvilket land og i hvilken periode","Registrering.RegistreringOpphold.Add":"Legg til","Registrering.RegistreringOpphold.periodeFom":"F.o.m.","Registrering.RegistreringOpphold.periodeTom":"T.o.m.","Registrering.RegistreringOpphold.Country":"Land","Registrering.Opphold":"Opphold i Norge","Registrering.OppholdVedAdopsjon":"Søker oppholder seg i Norge nå","Registrering.Opphold.Yes":"Ja","Registrering.Opphold.No":"Nei","Registrering.OppholdVedFodsel":"Bor i Norge ved fødselstidspunktet","Registrering.OppholdNesteTolv":"Bor i Norge de neste 12 månedene","Registrering.OppholdSisteTolv":"Bodd i Norge de siste 12 månedene","Registrering.Rettigheter.AnnenForelderDoed":"Den andre forelderen er død","Registrering.Rettigheter.OvertaForeldreansvaretAlene":"Omsorgen er overtatt med sikte på å overta foreldreansvaret alene","Registrering.Rettigheter.MannAdoptererAlene":"Mann adopterer alene","Registrering.Rettigheter.IkkeRelevant":"Ikke relevant","Registrering.Rettigheter.Title":"Rettigheter","Registrering.Sprak":"Språk","Registrering.Sprak.Bokmal":"Bokmål","Registrering.Sprak.Nynorsk":"Nynorsk","Registrering.Sprak.Engelsk":"Engelsk","Registrering.VirksomhetNaeringTypePanel.Title":"Type næringsvirksomhet","Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet":"Er søker ny i arbeidslivet","Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged":"Er virksomheten blitt varig endret, nyoppstartet eller er søker ny i arbeidslivet?","Registrering.VirksomhetStartetPanel.Yes":"Ja","Registrering.VirksomhetStartetPanel.No":"Nei","Registrering.VirksomhetStartetPanel.Reason":"Årsak","Registrering.VirksomhetStartetPanel.HarVarigEndring":"Varig endring i næring","Registrering.VirksomhetStartetPanel.GjeldendeFom":"Gjeldende f.o.m.","Registrering.VirksomhetStartetPanel.ErNyoppstartet":"Nyoppstartet næring","Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse":"Beskriv endringen i næring","Registrering.VirksomhetStartetPanel.Inntekt":"Årsinntekt","Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak":"Må fylle ut minst en årsak","Registrering.VirksomhetRelasjonPanel.Relation":"Relasjon","Registrering.VirksomhetRelasjonPanel.No":"Nei, har ikke nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRelasjonPanel.Yes":"Ja, har nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRegnskapPanel.Accountant":"Har søker regnskapsfører eller revisor?","Registrering.VirksomhetRegnskapPanel.Yes":"Ja","Registrering.VirksomhetRegnskapPanel.No":"Nei","Registrering.VirksomhetRegnskapPanel.AccountantName":"Navn på regnskapsfører/revisor?","Registrering.VirksomhetRegnskapPanel.AccountantPhone":"Telefonnummer til regnskapsfører/revisor?","Registrering.VirksomhetIdentifikasjonPanel.Name":"Navn på foretaket","Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway":"Er næringsvirksomheten registrert i Norge","Registrering.VirksomhetIdentifikasjonPanel.No":"Nei","Registrering.VirksomhetIdentifikasjonPanel.Yes":"Ja","Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber":"Virksomhetsnummer","Registrering.VirksomhetIdentifikasjonPanel.Country":"Hvilket land er virksomheten registrert i?","Registrering.VirksomhetIdentifikasjonPanel.periodeFom":"Fra og med","Registrering.VirksomhetIdentifikasjonPanel.periodeTom":"Til og med","Registrering.EgenVirksomhet.Title":"Egen næringsvirksomhet","Registrering.EgenVirksomhet.Yes":"Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.EgenVirksomhet.No":"Nei, søker har ikke arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.RegistrerVirksomhetPanel.Add":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetPanel.Name":"Navn på virksomhet","Registrering.RegistrerVirksomhetPanel.ArrayMinLength":"Listen må ha lengde større enn 1","Registrering.RegistrerVirksomhetModalForm.ModalDescription":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetModalForm.Title":"Egen næringsvirksomhet","Registrering.RegistrerVirksomhetModalForm.Save":"Lagre","Registrering.RegistrerVirksomhetModalForm.Cancel":"Avbryt","BehovForTilretteleggingPanel.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilretteleggingPanel.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende":"Søkes det om svangerskapspenger som selvstendig næringsdrivende?","BehovForTilretteleggingPanel.Ja":"Ja","BehovForTilretteleggingPanel.Nei":"Nei","BehovForTilretteleggingPanel.SokForFrilans":"Søkes det om svangerskapspenger som frilanser?","BehovForTilretteleggingPanel.SokForArbeidsgiver":"Søkes det om svangerskapspenger som arbeidstaker?","BehovForTilretteleggingPanel.MinstEnMaaVereJa":"Minst ett av spørsmålene må besvares med alternativ Ja","BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov":"Legg til tilretteleggingsbehov","BehovForTilrettteleggingFieldArray.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilrettteleggingFieldArray.FraDato":"Fra dato","BehovForTilrettteleggingFieldArray.Stillingsprosent":"Stillingsprosent","BehovForTilrettteleggingFieldArray.KanGjennomfores":"a) kan gjennomføres slik at arbeidstakeren kan fortsette med samme stilling fra og med","BehovForTilrettteleggingFieldArray.RedusertArbeid":"b) kan gjennomføres slik at arbeidstakeren kan fortsette med redusert arbeidstid fra og med","BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores":"c) kan ikke gjennomføres og arbeidstakeren må midlertidig gå ut av sitt arbeid fra og med","TilretteleggingForArbeidsgiverFieldArray.OrgNr":"Arbeidsgivers orgnr/fnr","TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver":"Legg til arbeidsgiver","TerminFodselSvpPanel.TerminOgFodsel":"Opplysninger om termin og fødsel","TerminFodselSvpPanel.Termindato":"Termindato","TerminFodselSvpPanel.Fodselsdato":"Fødselsdato","Registrering.Dekningsgrad.Title":"Dekningsgrad","Registrering.Dekningsgrad.prosent.80":"80 prosent","Registrering.Dekningsgrad.prosent.100":"100 prosent","Registrering.Permisjon.Title":"Tidsrom for permisjon","Registrering.Permisjon.PermisjonForFodsel":"Permisjon før fødsel","Registrering.Permisjon.PerioderForeldrepenger":"Perioder med permisjon med foreldrepenger","Registrering.Permisjon.FulltUttak":"Fullt uttak","Registrering.Permisjon.FedrekvoteEllerMedmorkvote":"Fedrekvote eller kvote til medmor","Registrering.Permisjon.AngiPeriode":"Angi periode","Registrering.Permisjon.periodeType":"Periodetype","Registrering.Permisjon.nyPeriode":"Legg til periode","Registrering.Permisjon.periodeFom":"F.o.m.","Registrering.Permisjon.periodeTom":"T.o.m.","Registrering.Permisjon.SamtidigUttaksprosent":"Prosentandel uttak","Registrering.Permisjon.ArbeidskategoriLabel":"Type arbeid","Registrering.Permisjon.ErArbeidstaker":"Arbeidstaker","Registrering.Permisjon.ErIkkeArbeidstaker":"Selvstendig næringsdrivende/frilanser","Registrering.Permisjon.Orgnr":"Virksomhetsnummer","Registrering.Permisjon.OverforingAvKvote.OvertaKvoten":"Overføring av kvote","Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak":"Angi årsak","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt":"Mor er innlagt på helseinstitusjon","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk":"Mor er pga sykdom avhengig av hjelp for å ta seg av barnet/barna","Registrering.Permisjon.OverforingAvKvote.OvertaKvote":"Søker ønsker å overta kvote","Registrering.Permisjon.OverforingAvKvote.fomDato":"F.o.m.","Registrering.Permisjon.OverforingAvKvote.tomDato":"T.o.m.","Registrering.Permisjon.Fellesperioden":"Fellesperioden","Registrering.Permisjon.Fellesperiode.Yes":"Ja","Registrering.Permisjon.Fellesperiode.No":"Nei","Registrering.Permisjon.Fellesperiode.ForeldrepengerTilFarEllerMedmor":"Skal far eller medmor ha foreldrepenger fra fellesperioden?","Registrering.Permisjon.Fellesperiode.periodeFom":"Fellesperiode F.o.m.","Registrering.Permisjon.Fellesperiode.periodeTom":"Fellesperiode T.o.m.","Registrering.Permisjon.Fellesperiode.morsAktivitet":"Mors aktivitet","Registrering.Permisjon.MorBorSammenFaren":"Mor bor sammen med faren til barnet","Registrering.Permisjon.Mor.Yes":"Ja","Registrering.Permisjon.Mor.No":"Nei","Registrering.Permisjon.HarSamtidigUttak":"Samtidig uttak","Registrering.Permisjon.Flerbarnsdager":"Flerbarnsdager","Registrering.Permisjon.UttakStartdato":"Når skal uttak av foreldrepenger starte?","Registrering.Permisjon.HeleModrekvotenUmiddelbart":"Skal hele mødrekvoten tas ut umiddelbart etter fødsel?","Registrering.Permisjon.HeleFellesperiodenUmiddelbart":"Skal hele fellesperioden tas ut umiddelbart etter mødrekvoten?","Registrering.Permisjon.Utsettelse.Title":"Utsettelse","Registrering.Permisjon.Utsettelse.Periode":"Hva skal utsettes","Registrering.Permisjon.Utsettelse.Arsak":"Årsak til utsettelse","Registrering.Permisjon.Utsettelse.LeggTilPeriode":"Legg til periode for utsettelse","Registrering.Permisjon.Utsettelse.UtsettUttaket":"Søker ønsker å utsette uttaket","Registrering.Permisjon.Opphold.OppholdUttaket":"Søker ønsker opphold i uttaket","Registrering.Permisjon.Opphold.Title":"Opphold","Registrering.Permisjon.Opphold.Periode":"Hva skal annen forelder ta ut?","Registrering.Permisjon.Opphold.Arsak":"Årsak til opphold","Registrering.Permisjon.Opphold.LeggTilPeriode":"Legg til periode med opphold","Registrering.Permisjon.Gradering.Title":"Gradering","Registrering.Permisjon.Gradering.Periode":"Hva skal graderes","Registrering.Permisjon.Gradering.Prosentandel":"Prosentandel arbeid i perioden","Registrering.Permisjon.Gradering.SkalGraderes":"Arbeidsforhold som skal graderes","Registrering.Permisjon.Gradering.LeggTilPeriode":"Legg til periode for gradering","Registrering.Permisjon.Gradering.GraderUttaket":"Søker ønsker å gradere uttaket","Registrering.Permisjon.PeriodeFomForTidlig":"Behandlinger med første uttaksdag før 01.01.2019 skal ikke behandles i vedtaksløsningen","Registrering.TheOtherParent.Confirmation":"Bekreftelse","Registrering.TheOtherParent.OtherParentKnowPeriods":"Annen forelder er kjent med hvilke perioder det er søkt om","Registrering.TheOtherParent.Yes":"Ja","Registrering.TheOtherParent.No":"Nei","PermisjonPanel.MinstEnPeriodeRequired":"Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering","PermisjonPanel.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)"},gg=te(ue),en=({readOnly:s,alleKodeverk:i,kunMiliterEllerSiviltjeneste:l})=>r.jsx(ke,{value:gg,children:r.jsx(Hn,{readOnly:s,alleKodeverk:i,kunMiliterEllerSiviltjeneste:l})});en.buildInitialValues=s=>Hn.buildInitialValues(s);en.transformValues=(s,i)=>Hn.transformValues(s,i);en.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:""}}};const mg="_inputBredde_138ho_1",Ya={inputBredde:mg},hn="annenForelder",Hr="kanIkkeOppgiBegrunnelse",kg=s=>s.filter(({kode:i})=>i!==st.NORGE).map(({kode:i,navn:l})=>r.jsx("option",{value:i,children:l},i)),Cs=({readOnly:s=!0,permisjonRettigheterPanel:i,alleKodeverk:l,fagsakPersonnummer:d})=>{const{formatMessage:g}=H(),{watch:k,trigger:v,formState:{isSubmitted:m}}=Y(),f=k(`${hn}.kanIkkeOppgiAnnenForelder`),c=k(`${hn}.${Hr}`),R=l[Q.LANDKODER],w=M.useMemo(()=>R.slice().sort((b,F)=>b.navn.localeCompare(F.navn)),[R]);return r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.TheOtherParent.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(oe,{name:`${hn}.foedselsnummer`,label:g({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:b=>b&&b.toString().replace(/\s/g,""),readOnly:s,className:Ya.inputBredde,validate:f?[]:[A,$u,Ds,Hu(d)],disabled:f}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{name:`${hn}.kanIkkeOppgiAnnenForelder`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:s,onChange:()=>m?v():void 0}),f===!0&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(ne,{size:"small",children:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),r.jsx(U,{name:`${hn}.${Hr}.arsak`,hideLegend:!0,validate:[A],isReadOnly:s,radios:[{label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:Jr.UKJENT_FORELDER},{label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:Jr.IKKE_NORSK_FNR}]}),(c==null?void 0:c.arsak)===Jr.IKKE_NORSK_FNR&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(ce,{name:`${hn}.${Hr}.land`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:kg(w),validate:[A],className:Ya.inputBredde,readOnly:s}),r.jsx(y,{sixteenPx:!0}),r.jsx(oe,{name:`${hn}.${Hr}.utenlandskFoedselsnummer`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[A],className:Ya.inputBredde,readOnly:s})]})]})]}),r.jsx(y,{sixteenPx:!0}),i]})};Cs.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const pg=te(ue),Ws=({readOnly:s,alleKodeverk:i,permisjonRettigheterPanel:l,fagsakPersonnummer:d})=>r.jsx(ke,{value:pg,children:r.jsx(Cs,{readOnly:s,alleKodeverk:i,permisjonRettigheterPanel:l,fagsakPersonnummer:d})});Ws.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};nt.extend(Gu);const ss=Ks(1),is=cr(9),zs=()=>nt().startOf("day"),vg=()=>zs().subtract(3,"weeks"),yg=s=>{const i=vg(),l=s?nt(s,qn):void 0,d=zs();return l&&l.isSameOrBefore(d)?(l.isAfter(i)?l:i).subtract(1,"days"):d},cg=s=>i=>Ae(yg(s("termindato")))(i),Js=({readOnly:s,erForeldrepenger:i})=>{const l=H(),{watch:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),m=d("erBarnetFodt");return r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:l.formatMessage({id:"Registrering.TerminOgFodsel"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"erBarnetFodt",label:r.jsx(h,{id:"Registrering.Termin.Fodt"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(h,{id:"Registrering.Fodsel.ErFodt"}),value:"true"},{label:r.jsx(h,{id:"Registrering.Fodsel.ErIkkeFodt"}),value:"false"}]}),m===!1&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsxs(ee,{children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:"termindato",label:l.formatMessage({id:"Registrering.Termindato"}),isReadOnly:s,validate:[A,I],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(oe,{name:"antallBarnFraTerminbekreftelse",label:l.formatMessage({id:"Registrering.AntallBarn"}),readOnly:s,validate:[A,mn,ss,is]})})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsx(T,{children:r.jsx(E,{name:"terminbekreftelseDato",label:l.formatMessage({id:"Registrering.UtstedtDato"}),isReadOnly:s,validate:[I,cg(g)]})})})]})})]}),m&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:0,children:r.jsxs(ee,{children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:"foedselsDato",label:l.formatMessage({id:"Registrering.Fodselsdato"}),isReadOnly:s,validate:[A,I,Un]})}),r.jsx(T,{children:r.jsx(oe,{name:"antallBarn",label:l.formatMessage({id:"Registrering.AntallBarn"}),readOnly:s,validate:[A,mn,ss,is]})})]}),i&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(ea,{size:"small",variant:"info",children:r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.RettTilPrematuruker"})})})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsx(T,{children:r.jsx(E,{name:"termindato",label:l.formatMessage({id:"Registrering.Termindato"}),isReadOnly:s,validate:[I]})})})]})})]})]})};Js.__docgenInfo={description:"",methods:[],displayName:"TerminFodselDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!0,tsType:{name:"boolean"},description:""}}};const fg=te(ue),ot=({readOnly:s,erForeldrepenger:i})=>r.jsx(ke,{value:fg,children:r.jsx(Js,{readOnly:s,erForeldrepenger:i})});ot.__docgenInfo={description:"",methods:[],displayName:"FodselPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!0,tsType:{name:"boolean"},description:""}}};const hg="_notLastRow_7c46s_1",bg={notLastRow:hg},os="frilans",Gr=(s,i)=>s(i),Xs=({readOnly:s})=>{const i=H(),{control:l,getValues:d,formState:{isSubmitted:g},trigger:k}=Y(),{fields:v,remove:m,append:f}=fe({control:l,name:`${os}.perioder`});return r.jsx(Oe,{fields:v,bodyText:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:s,remove:m,append:f,children:(c,R,w)=>{const b=`${os}.perioder.${R}`;return r.jsxs("div",{className:R!==v.length-1?bg.notLastRow:"",children:[r.jsx(ee,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:`${b}.periodeFom`,label:R===0?i.formatMessage({id:"Registrering.Frilans.periodeFom"}):"",validate:[A,I,()=>{const F=Gr(d,`${b}.periodeFom`),q=Gr(d,`${b}.periodeTom`);return q&&F?Ae(q)(F):null}],onChange:()=>g?k():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${b}.periodeTom`,label:R===0?i.formatMessage({id:"Registrering.Frilans.periodeTom"}):"",validate:[A,I,()=>{const F=Gr(d,`${b}.periodeFom`),q=Gr(d,`${b}.periodeTom`);return q&&F?Ne(F)(q):null}],onChange:()=>g?k():void 0})}),w&&r.jsx(T,{children:w()})]})}),r.jsx(y,{sixteenPx:!0})]},c.id)}})};Xs.__docgenInfo={description:`FrilansPerioderFieldArray

Viser inputfelter for fra og til dato for frilansperioder`,methods:[],displayName:"FrilansPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Rg="_notLastRow_7c46s_1",jg={notLastRow:Rg},vr="frilans",pr=(s,i)=>s(i),Tg=(s=[])=>s.map(i=>i.periodeFom).filter(i=>i&&i!=="").sort((i,l)=>kn(i,qn).diff(kn(l,qn))),Zs={fomDato:"",tomDato:"",oppdragsgiver:""},qg=at(50),Ag=(s,i,l,d)=>()=>{const g=pr(s,`${i}.fomDato`);return l.length>0&&l[0]&&g&&!kn(l[0]).isSameOrBefore(kn(g))?d.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation"}):null},Qs=({readOnly:s})=>{const i=H(),{control:l,getValues:d,watch:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:f,append:c}=fe({control:l,name:`${vr}.oppdragPerioder`}),R=g(`${vr}.perioder`),w=M.useMemo(()=>Tg(R),[R]);return r.jsx(Oe,{bodyText:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),fields:m,emptyPeriodTemplate:Zs,readOnly:s,append:c,remove:f,children:(b,F,q)=>{const N=`${vr}.oppdragPerioder.${F}`;return r.jsxs("div",{className:F!==m.length-1?jg.notLastRow:"",children:[r.jsx(ee,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:`${N}.fomDato`,label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeFom"}),validate:[I,Ag(d,N,w,i),()=>{const P=pr(d,`${N}.fomDato`),G=pr(d,`${N}.tomDato`);return G&&P?Ae(G)(P):null}],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${N}.tomDato`,label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeTom"}),validate:[I,()=>{const P=pr(d,`${N}.fomDato`),G=pr(d,`${N}.tomDato`);return G&&P?Ne(P)(G):null}],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(oe,{name:`${N}.oppdragsgiver`,validate:[qg],label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver"})})}),q&&r.jsx(T,{children:q()})]})}),r.jsx(y,{sixteenPx:!0})]},b.id)}})};Qs.__docgenInfo={description:`FrilansOppdragForFamilieFieldArray

Viser inputfelter for fra og til dato for frilansperioder.`,methods:[],displayName:"FrilansOppdragForFamilieFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ra=({readOnly:s})=>{const{watch:i}=Y(),l=i(`${vr}.harHattOppdragForFamilie`);return r.jsxs(r.Fragment,{children:[r.jsx(U,{name:`${vr}.harHattOppdragForFamilie`,label:r.jsx(h,{id:"Registrering.FrilansOppdrag.HarHattOppdragForFamilie"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(h,{id:"Registrering.FrilansOppdrag.Yes"}),value:"true"},{label:r.jsx(h,{id:"Registrering.FrilansOppdrag.No"}),value:"false"}]}),l&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.FrilansOppdrag.OppgiPeriode"})}),r.jsx(y,{fourPx:!0}),r.jsx(Qs,{readOnly:s})]})]})]})};ra.buildInitialValues=()=>({oppdragPerioder:[Zs],perioder:void 0});ra.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`{
  harHattOppdragForFamilie?: boolean;
} & FieldArrayFormValues`,elements:[{name:"signature",type:"object",raw:`{
  harHattOppdragForFamilie?: boolean;
}`,signature:{properties:[{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]}}}],displayName:"FrilansOppdragForFamiliePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ua="frilans",Gn=({readOnly:s})=>r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.Frilans.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Ua}.harSokerPeriodeMedFrilans`,label:r.jsx(h,{id:"Registrering.Frilans.HarFrilansvirksomhet"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(h,{id:"Registrering.Frilans.No"}),value:"false"},{label:r.jsx(h,{id:"Registrering.Frilans.Yes"}),value:"true",element:r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(Ze,{children:r.jsx(h,{id:"Registrering.Frilans.OppgiPeriode"})}),r.jsx(y,{eightPx:!0}),r.jsx(Xs,{readOnly:s}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:`${Ua}.erNyoppstartetFrilanser`,label:r.jsx(h,{id:"Registrering.Frilans.ErNyoppstartedFrilanser"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(h,{id:"Registrering.Frilans.Yes"}),value:"true"},{label:r.jsx(h,{id:"Registrering.Frilans.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Ua}.harInntektFraFosterhjem`,label:r.jsx(h,{id:"Registrering.Frilans.HarInntektFraForsterhjem"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(h,{id:"Registrering.Frilans.Yes"}),value:"true"},{label:r.jsx(h,{id:"Registrering.Frilans.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(ra,{readOnly:s})]})]})}]})]});Gn.buildInitialValues=()=>({...ra.buildInitialValues(),perioder:[{periodeFom:"",periodeTom:""}]});Gn.transformValues=s=>s.harSokerPeriodeMedFrilans?s:{harSokerPeriodeMedFrilans:s.harSokerPeriodeMedFrilans};Gn.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}}]}},{name:"FormValues"},{name:"FormValues"}]}}}],displayName:"FrilansPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const wg=te(ue),nn=({readOnly:s})=>r.jsx(ke,{value:wg,children:r.jsx(Gn,{readOnly:s})});nn.buildInitialValues=()=>Gn.buildInitialValues();nn.transformValues=s=>Gn.transformValues(s);nn.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:{name:"intersection",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
} & FormValuesOppdragForFamilie &
  PerioderFormValues`,elements:[{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}}]}},{name:"FormValues"},{name:"FormValues"}],alias:"FormValues"}}],returns:null}],displayName:"FrilansPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Fg="_notLastRow_uwn16_1",Pg={notLastRow:Fg},_g=at(50),Dn="arbeidsforhold",xg={arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},Ng=s=>s.filter(({kode:i})=>i!==st.NORGE).map(({kode:i,navn:l})=>r.jsx("option",{value:i,children:l},i)),ei=({alleKodeverk:s,readOnly:i})=>{const l=H(),{control:d}=Y(),{fields:g,remove:k,append:v}=fe({control:d,name:Dn}),m=s[Q.LANDKODER].slice().sort((f,c)=>f.navn.localeCompare(c.navn));return r.jsx(Oe,{fields:g,emptyPeriodTemplate:xg,bodyText:l.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:i,remove:k,append:v,children:(f,c,R)=>r.jsxs("div",{className:c!==g.length-1?Pg.notLastRow:"",children:[r.jsx(ee,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(oe,{readOnly:i,name:`${Dn}.${c}.arbeidsgiver`,label:c===0?l.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}):"",validate:[_g],maxLength:99})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${Dn}.${c}.periodeFom`,label:c===0?l.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}):"",validate:[I]})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${Dn}.${c}.periodeTom`,label:c===0?l.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}):"",validate:[I]})}),r.jsx(T,{children:r.jsx(ce,{readOnly:i,name:`${Dn}.${c}.land`,label:c===0?l.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}):"",selectValues:Ng(m)})}),R&&r.jsx(T,{children:R()})]})}),r.jsx(y,{twentyPx:!0})]},f.id)})};ei.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const aa=({readOnly:s,alleKodeverk:i})=>r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.Title"})}),r.jsx(y,{eightPx:!0}),r.jsx(Ze,{children:r.jsx(h,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{sixteenPx:!0}),r.jsx(Ze,{children:r.jsx(h,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title"})}),r.jsx(y,{eightPx:!0}),r.jsx(ei,{readOnly:s,alleKodeverk:i})]});aa.buildInitialValues=()=>({[Dn]:[{}]});aa.__docgenInfo={description:`InntektsgivendeArbeidPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Og=te(ue),Cn=({readOnly:s,alleKodeverk:i})=>r.jsx(ke,{value:Og,children:r.jsx(aa,{readOnly:s,alleKodeverk:i})});Cn.buildInitialValues=()=>aa.buildInitialValues();Cn.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Sg="_image_1vy0k_1",Mg={image:Sg},ni=({showModal:s,handleSubmit:i,cancelEvent:l})=>{const d=H();return r.jsxs(Xe,{open:s,"aria-label":d.formatMessage({id:"ModalLukkPapirSoknad.ModalDescription"}),onClose:l,children:[r.jsx(Xe.Body,{children:r.jsx(ee,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(Bu,{className:Mg.image,title:d.formatMessage({id:"ModalLukkPapirSoknad.Avslutt"})})}),r.jsxs(T,{children:[r.jsx(me,{size:"small",children:d.formatMessage({id:"ModalLukkPapirSoknad.AvslutterRegistrering"})}),r.jsx(y,{fourPx:!0}),r.jsx(Us,{size:"small",children:d.formatMessage({id:"ModalLukkPapirSoknad.BekreftAvslag"})})]})]})})}),r.jsxs(Xe.Footer,{children:[r.jsx(Bs,{to:"/",children:r.jsx(Ke,{size:"small",variant:"primary",onClick:()=>i(),type:"button",children:d.formatMessage({id:"ModalLukkPapirSoknad.Ok"})})}),r.jsx(Ke,{size:"small",variant:"secondary",onClick:l,type:"button",children:d.formatMessage({id:"ModalLukkPapirSoknad.Avbryt"})})]})]})};ni.__docgenInfo={description:`LukkPapirSoknadModal

Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
og trykker på 'Lagre og start behandling'. Ved å trykke på OK blir saken sendt til behandling av avslag.`,methods:[],displayName:"LukkPapirsoknadModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Eg="_fullWidth_1omqj_1",Vg="_halfWidth_1omqj_5",ls={fullWidth:Eg,halfWidth:Vg},Ig=at(1500),ri=({submitting:s,onSubmitUfullstendigsoknad:i,readOnly:l=!0})=>{const d=H(),[g,k]=M.useState(!1),{watch:v}=Y(),m=v("ufullstendigSoeknad")||!1,f=M.useCallback(()=>{k(!g)},[k,g]);return r.jsx(le,{children:r.jsx(ee,{children:r.jsx(L,{children:r.jsxs(T,{className:ls.fullWidth,children:[r.jsx(Ze,{children:d.formatMessage({id:"Registrering.SaveApplication.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(L,{children:[r.jsx(T,{className:ls.halfWidth,children:r.jsx(Ls,{name:"kommentarEndring",label:d.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[Ig,tt],readOnly:l})}),r.jsxs(T,{children:[r.jsx(ie,{name:"registrerVerge",label:d.formatMessage({id:"Registrering.Verge"}),readOnly:l}),r.jsx(ie,{name:"ufullstendigSoeknad",label:d.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:l})]})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsxs(T,{className:"justifyItemsToFlexEnd",children:[!m&&r.jsx(Ke,{id:"saveButton",size:"small",variant:"primary",loading:s,disabled:l||s,onClick:Ys,children:r.jsx(h,{id:"Registrering.SaveApplication.SaveButton"})}),m&&r.jsx(Ke,{id:"endButton",onClick:f,size:"small",variant:"primary",loading:s,disabled:l||s,type:"button",children:r.jsx(h,{id:"Registrering.SaveApplication.EndButton"})})]})}),r.jsx(ni,{handleSubmit:i,showModal:g,cancelEvent:f})]})})})})};ri.__docgenInfo={description:"",methods:[],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Dg=te(ue),ta=({readOnly:s,onSubmitUfullstendigsoknad:i,submitting:l})=>r.jsx(ke,{value:Dg,children:r.jsx(ri,{readOnly:s,onSubmitUfullstendigsoknad:i,submitting:l})});ta.__docgenInfo={description:"",methods:[],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const ai=({readOnly:s})=>r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),r.jsx(y,{sixteenPx:!0}),r.jsx(E,{name:"mottattDato",label:r.jsx(h,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[A,I,Un],isReadOnly:s})]});ai.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"MottattDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Kg=te(ue),sa=({readOnly:s})=>r.jsx(ke,{value:Kg,children:r.jsx(ai,{readOnly:s})});sa.__docgenInfo={description:"",methods:[],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Bg="_barnInput_1jjt5_1",Lg="_col_1jjt5_5",Cr={barnInput:Bg,col:Lg},Yg=10,ds=Ks(1),us=cr(10),bn="omsorg",gs=(s,i)=>l=>{if(s===0&&i&&l)return Cu(l,Array.isArray(i)?i[0]:i)},ia=({readOnly:s=!0,familieHendelseType:i,isForeldrepengerFagsak:l,fodselsdatoer:d})=>{const{formatMessage:g}=H(),{control:k,watch:v}=Y(),{fields:m,remove:f,append:c}=fe({control:k,name:`${bn}.foedselsDato`}),R=v(`${bn}.antallBarn`),w=R?parseInt(R,10):0;return M.useEffect(()=>{if(m.length>Math.max(w,0))for(let b=m.length;b>w;b-=1)f(b-1);else if(m.length<Math.min(w,Yg))for(let b=m.length;b<w;b+=1)c({id:b,dato:void 0})},[w]),r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:i===se.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(ee,{children:[l&&i===se.ADOPSJON&&r.jsxs(r.Fragment,{children:[r.jsx(L,{children:r.jsx(T,{className:Cr.col,children:r.jsx(U,{name:`${bn}.erEktefellesBarn`,label:r.jsx(h,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Adopsjon.Ja"}),value:"true"},{label:g({id:"Registrering.Adopsjon.Nei"}),value:"false"}]})})}),r.jsx(y,{sixteenPx:!0})]}),r.jsx(L,{children:r.jsx(T,{children:r.jsx(E,{name:`${bn}.omsorgsovertakelsesdato`,label:g({id:i===se.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:s,validate:i===se.ADOPSJON?[A,I]:[I]})})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(L,{children:[i===se.ADOPSJON&&r.jsx(T,{children:r.jsx(E,{name:`${bn}.ankomstdato`,label:g({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:s,validate:[I]})}),r.jsx(T,{className:Cr.col,children:r.jsx(oe,{name:`${bn}.antallBarn`,label:g({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:s,parse:b=>{const F=parseInt(b.toString(),10);return Number.isNaN(F)?b:F},className:Cr.barnInput,validate:i===se.ADOPSJON?[A,mn,ds,us]:[mn,b=>b?ds(parseInt(b,10)):void 0,b=>b?us(parseInt(b,10)):void 0]})})]}),r.jsx(L,{children:r.jsx(T,{className:Cr.col,children:m.map((b,F)=>r.jsxs(Qr.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(E,{name:`${bn}.foedselsDato.${F}.dato`,isReadOnly:s,validate:i===se.ADOPSJON?[A,I,Un,gs(F,d)]:[I,Un,gs(F,d)],label:g({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:F+1})})]},b.id))})})]})]})};ia.transformValues=s=>({...s,foedselsDato:s.foedselsDato&&s.foedselsDato.length>0?s.foedselsDato.map(i=>i.dato):void 0});ia.__docgenInfo={description:`OmsorgOgAdopsjonPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: string;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: string;
  foedselsDato?: (string | undefined)[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const Ug=te(ue),vn=({readOnly:s,familieHendelseType:i,isForeldrepengerFagsak:l,fodselsdato:d})=>r.jsx(ke,{value:Ug,children:r.jsx(ia,{readOnly:s,familieHendelseType:i,isForeldrepengerFagsak:l,fodselsdatoer:d})});vn.transformValues=ia.transformValues;vn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: string;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: string;
  foedselsDato?: (string | undefined)[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"string"},description:""},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const $g="_datesRowWithRemoveButton_od5lu_1",Hg="_selectBredde_od5lu_7",ti={datesRowWithRemoveButton:$g,selectBredde:Hg},Gg=sg.bind(ti),Cg={land:"",periodeFom:"",periodeTom:""},Xr=(s,i)=>s(i),ms=(s,i)=>()=>{const d=s(i).filter(({periodeFom:g,periodeTom:k})=>g&&g!==""&&k&&k!=="").map(({periodeFom:g,periodeTom:k})=>[g,k]);return d.length>0?$n(d):void 0},Wg=s=>s.filter(({kode:i})=>i!==st.NORGE).map(({kode:i,navn:l})=>r.jsx("option",{value:i,children:l},i)),ks=(s,i,l,d)=>()=>{const g=Xr(s,`${i}.${l}.periodeFom`),k=Xr(s,`${i}.${l}.periodeTom`);return!k||!g?null:d?Ae(k)(g):Ne(g)(k)},za=({erTidligereOpphold:s=!1,mottattDato:i,readOnly:l,countryCodes:d})=>{const g=H(),k=s?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:v,getValues:m,trigger:f,formState:{isSubmitted:c}}=Y(),{fields:R,remove:w,append:b}=fe({control:v,name:k}),F=M.useMemo(()=>Wg(d),[d]);return r.jsx(Oe,{fields:R,titleText:g.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:g.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:Cg,createAddButtonInsteadOfImageLink:!0,readOnly:l,remove:w,append:b,children:(q,N,P)=>r.jsxs(Qr.Fragment,{children:[N>0&&r.jsxs(r.Fragment,{children:[r.jsx(rt,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsx(ce,{name:`${k}.${N}.land`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:F,className:ti.selectBredde,readOnly:l,validate:[A]}),r.jsx(y,{sixteenPx:!0}),r.jsx(ee,{children:r.jsxs(L,{className:Gg({datesRowWithRemoveButton:N>0}),children:[r.jsx(T,{children:r.jsx(E,{name:`${k}.${N}.periodeFom`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:l,validate:[A,I,ks(m,k,N,!0),()=>{const G=Xr(m,`${k}.${N}.periodeFom`);return s?Ae(kn().format(qn))(G):i?Ne(i)(G):void 0},ms(m,k)],onChange:()=>c?f():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${k}.${N}.periodeTom`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:l,validate:[A,I,ks(m,k,N,!1),()=>{const G=Xr(m,`${k}.${N}.periodeTom`);return s?Ae(kn().format(qn))(G):i?Ne(i)(G):void 0},ms(m,k)],onChange:()=>c?f():void 0})}),P&&r.jsx(T,{children:P()})]})}),r.jsx(y,{sixteenPx:!0})]},q.id)})};za.__docgenInfo={description:`UtenlandsOppholdField

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Wn=({readOnly:s=!0,alleKodeverk:i,mottattDato:l,erAdopsjon:d})=>{const{formatMessage:g}=H(),k=M.useMemo(()=>i[Q.LANDKODER].slice().sort((c,R)=>c.navn.localeCompare(R.navn)),[i]),{watch:v}=Y(),m=v("harTidligereOppholdUtenlands")||!1,f=v("harFremtidigeOppholdUtenlands")||!1;return r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.Opphold"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"oppholdINorge",label:r.jsx(h,{id:d?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"true"},{label:g({id:"Registrering.Opphold.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"harTidligereOppholdUtenlands",label:r.jsx(h,{id:"Registrering.OppholdSisteTolv"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"false"},{label:g({id:"Registrering.Opphold.No"}),value:"true"}]}),m?r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsx(za,{erTidligereOpphold:!0,mottattDato:l,countryCodes:k,readOnly:s})})]}):null,r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"harFremtidigeOppholdUtenlands",label:r.jsx(h,{id:"Registrering.OppholdNesteTolv"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"false"},{label:g({id:"Registrering.Opphold.No"}),value:"true"}]}),f?r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsx(za,{mottattDato:l,countryCodes:k,readOnly:s})})]}):null]})};Wn.buildInitialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});Wn.transformValues=s=>({...s,fremtidigeOppholdUtenlands:s.harFremtidigeOppholdUtenlands?s.fremtidigeOppholdUtenlands:void 0,tidligereOppholdUtenlands:s.harTidligereOppholdUtenlands?s.tidligereOppholdUtenlands:void 0});Wn.__docgenInfo={description:`OppholdINorgePanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};const zg=te(ue),ye=({readOnly:s,erAdopsjon:i,alleKodeverk:l,mottattDato:d})=>r.jsx(ke,{value:zg,children:r.jsx(Wn,{readOnly:s,erAdopsjon:i,alleKodeverk:l,mottattDato:d})});ye.buildInitialValues=Wn.buildInitialValues;ye.transformValues=Wn.transformValues;ye.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};const Bn={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},si=({readOnly:s=!0,soknadData:i})=>{const l=H(),d=[{label:l.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:Bn.ANNEN_FORELDER_DOED},{label:l.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:Bn.OVERTA_FORELDREANSVARET_ALENE},{label:l.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:Bn.MANN_ADOPTERER_ALENE},{label:l.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:Bn.IKKE_RELEVANT}];return i.getFamilieHendelseType()!==se.FODSEL&&i.getForeldreType()===An.FAR||d.splice(2,1),r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:l.formatMessage({id:"Registrering.Rettigheter.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"rettigheter",isReadOnly:s,radios:d})]})};si.__docgenInfo={description:`RettigheterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"RettigheterPanel",props:{soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Jg=te(ue),oa=({readOnly:s,soknadData:i})=>r.jsx(ke,{value:Jg,children:r.jsx(si,{readOnly:s,soknadData:i})});oa.__docgenInfo={description:"",methods:[],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const $a={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},ii=({readOnly:s})=>{const i=H();return r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:i.formatMessage({id:"Registrering.Sprak"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"språkkode",validate:[A],isReadOnly:s,radios:[{label:i.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:$a.BOKMAL},{label:i.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:$a.NYNORSK},{label:i.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:$a.ENGELSK}]})]})};ii.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",methods:[],displayName:"SprakPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Xg=te(ue),Rr=({readOnly:s})=>r.jsx(ke,{value:Xg,children:r.jsx(ii,{readOnly:s})});Rr.__docgenInfo={description:"",methods:[],displayName:"SprakPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Zg="_navnBredde_1kwjo_1",Qg="_orgNrBredde_1kwjo_5",em="_landBredde_1kwjo_9",Ha={navnBredde:Zg,orgNrBredde:Qg,landBredde:em},nm=s=>s.map(({kode:i,navn:l})=>r.jsx("option",{value:i,children:l},i)),oi=({readOnly:s=!0,alleKodeverk:i})=>{const l=H(),d=i[Q.LANDKODER].slice().sort((m,f)=>m.navn.localeCompare(f.navn)),{watch:g,getValues:k}=Y(),v=g("virksomhetRegistrertINorge");return r.jsxs(r.Fragment,{children:[r.jsx(oe,{name:"navn",validate:[A],label:r.jsx(h,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),className:Ha.navnBredde,readOnly:s}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"virksomhetRegistrertINorge",label:r.jsx(h,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:l.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Yes"}),value:"true"},{label:l.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.No"}),value:"false"}]}),v&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx("div",{className:Ha.orgNrBredde,children:r.jsx(de,{children:r.jsx(oe,{name:"organisasjonsnummer",readOnly:s,validate:[A,mn,Wu],label:r.jsx(h,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})})}),r.jsx(y,{sixteenPx:!0})]}),!v&&v!==void 0&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{alignOffset:57,children:[r.jsx(ce,{name:"landJobberFra",className:Ha.landBredde,selectValues:nm(d),validate:[A],label:l.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ee,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{isReadOnly:s,validate:[A,I,Un],name:"fom",label:l.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:s,validate:[I,m=>{const f=k("fom");return f?zu(f,m):null}],name:"tom",label:l.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})})]})})]})]})]})};oi.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const rm="_tlfBredde_nvz63_1",am="_navnBredde_nvz63_5",ps={tlfBredde:rm,navnBredde:am},li=({readOnly:s=!0})=>{const{watch:i}=Y(),l=i("harRegnskapsforer")||!1;return r.jsxs(r.Fragment,{children:[r.jsx(U,{name:"harRegnskapsforer",label:r.jsx(h,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:r.jsx(h,{id:"Registrering.VirksomhetRegnskapPanel.Yes"}),value:"true"},{label:r.jsx(h,{id:"Registrering.VirksomhetRegnskapPanel.No"}),value:"false"}]}),l&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(oe,{name:"navnRegnskapsforer",className:ps.navnBredde,readOnly:s,validate:[A,tt],label:r.jsx(h,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(oe,{name:"tlfRegnskapsforer",readOnly:s,validate:[A,mn],className:ps.tlfBredde,label:r.jsx(h,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]}),r.jsx(y,{sixteenPx:!0})]})]})};li.__docgenInfo={description:`VirksomhetRegnskapPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const tm="_inntektBredde_1xgnj_1",sm={inntektBredde:tm},di=({readOnly:s})=>{var w,b,F,q;const i=H(),{watch:l,setError:d,clearErrors:g,formState:k}=Y(),v=l("varigEndretEllerStartetSisteFireAr")||!1,m=l("harVarigEndring")||!1,f=l("erNyoppstartet")||!1,c=l("erNyIArbeidslivet")||!1,R=!m&&!f&&!c;return M.useEffect(()=>{R&&v&&d("ingenArsakValgt",{type:"custom",message:i.formatMessage({id:"Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak"})}),(!R||!v)&&g("ingenArsakValgt")},[R,v]),r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"varigEndretEllerStartetSisteFireAr",label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.Yes"}),value:"true"},{label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.No"}),value:"false"}]}),v&&r.jsxs("div",{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:"harVarigEndring",label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"})}),r.jsx(y,{fourPx:!0}),m&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(de,{children:r.jsx(E,{name:"varigEndringGjeldendeFom",isReadOnly:s,validate:[I,A],label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),r.jsx(ie,{name:"erNyoppstartet",label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})}),r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:"erNyIArbeidslivet",label:r.jsx(h,{id:"Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet"})}),r.jsx(y,{fourPx:!0}),c&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(de,{children:r.jsx(E,{name:"nyIArbeidslivetFom",isReadOnly:s,validate:[I,A],label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),k.isSubmitted&&((b=(w=k.errors)==null?void 0:w.ingenArsakValgt)==null?void 0:b.message)&&r.jsx(br,{children:(q=(F=k.errors)==null?void 0:F.ingenArsakValgt)==null?void 0:q.message}),r.jsx(y,{sixteenPx:!0}),r.jsx(Ls,{name:"beskrivelseAvEndring",label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[tt]}),r.jsx(y,{sixteenPx:!0}),r.jsx(oe,{name:"inntekt",label:r.jsx(h,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:s,validate:[mn,A],className:sm.inntektBredde,parse:N=>{const P=parseInt(N.toString(),10);return Number.isNaN(P)?N:P}})]})]}),r.jsx(y,{eightPx:!0})]})};di.__docgenInfo={description:`VirksomhetStartetEndretPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ui=({readOnly:s=!0})=>r.jsx(U,{name:"familieEllerVennerTilknyttetNaringen",label:r.jsx(h,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),isReadOnly:s,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(h,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),value:"true"},{label:r.jsx(h,{id:"Registrering.VirksomhetRelasjonPanel.No"}),value:"false"}]});ui.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const vs="typeVirksomhet",ys={[Kn.DAGMAMMA]:1,[Kn.FISKE]:2,[Kn.JORDBRUK_ELLER_SKOGBRUK]:3,[Kn.ANNEN]:4},im=(s,i)=>s>i?1:s<i?-1:0,gi=({readOnly:s,alleKodeverk:i})=>{var R,w;const l=i[Q.VIRKSOMHET_TYPE],d=M.useMemo(()=>l.filter(b=>b.kode!==Kn.FRILANSER).sort((b,F)=>im(ys[b.kode],ys[F.kode])),[]),{watch:g,setError:k,formState:v,clearErrors:m}=Y(),f=g(vs),c=!f||!Object.values(f).some(b=>b===!0);return M.useEffect(()=>{c&&k("notRegisteredInput",{type:"custom",message:Ju()}),c||m("notRegisteredInput")},[c]),r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.VirksomhetNaeringTypePanel.Title"})}),r.jsx(y,{fourPx:!0}),d.map(b=>r.jsxs(M.Fragment,{children:[r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:`${vs}.${b.kode}`,label:b.navn,readOnly:s},b.kode)]},b.kode)),v.isSubmitted&&((R=v.errors.notRegisteredInput)==null?void 0:R.message)&&r.jsx(br,{children:(w=v.errors.notRegisteredInput)==null?void 0:w.message})]})};gi.__docgenInfo={description:`VirksomhetTypeNaringPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const om="_savebutton_tgfg3_1",lm="_cancelbutton_tgfg3_1",dm="_form_tgfg3_5",cs={savebutton:om,cancelbutton:lm,form:dm},mi=({showModal:s=!1,readOnly:i=!1,closeEvent:l,onSubmit:d,alleKodeverk:g,virksomhet:k})=>{const v=H(),m=fr({defaultValues:k});return r.jsx(hr,{formMethods:m,children:r.jsxs(Xe,{open:s,"aria-label":v.formatMessage({id:"Registrering.RegistrerVirksomhetModalForm.ModalDescription"}),onClose:l,children:[r.jsx(Xe.Header,{children:r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.RegistrerVirksomhetModalForm.Title"})})}),r.jsxs(Xe.Body,{children:[r.jsx(oi,{readOnly:i,alleKodeverk:g}),r.jsx(gi,{readOnly:i,alleKodeverk:g}),r.jsx(di,{readOnly:i}),r.jsx(li,{readOnly:i}),r.jsx(y,{sixteenPx:!0}),r.jsx(ui,{readOnly:i}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(Xe.Footer,{children:[r.jsx(Ke,{size:"small",variant:"primary",onClick:m.handleSubmit(d),disabled:i,className:cs.savebutton,type:"button",children:r.jsx(h,{id:"Registrering.RegistrerVirksomhetModalForm.Save"})}),r.jsx(Ke,{size:"small",variant:"secondary",onClick:l,disabled:i,className:cs.cancelbutton,type:"button",children:r.jsx(h,{id:"Registrering.RegistrerVirksomhetModalForm.Cancel"})})]})]})})};mi.__docgenInfo={description:`RegistrerVirksomhetModalForm

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
TypeNaringFormValues`,elements:[{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"}]},description:""}}};const um="_divider_1ed8l_1",gm="_fieldsList_1ed8l_7",mm="_addCircleIcon_1ed8l_11",km="_imageText_1ed8l_12",pm="_customLink_1ed8l_17",vm="_removeButton_1ed8l_22",Rn={divider:um,fieldsList:gm,addCircleIcon:mm,imageText:km,customLink:pm,removeButton:vm},Tn="egenVirksomhet",ki=({readOnly:s=!1,alleKodeverk:i})=>{var P,G,Se,X;const l=H(),[d,g]=M.useState(),{control:k,setError:v,formState:m,clearErrors:f}=Y(),{fields:c,remove:R,append:w,update:b}=fe({control:k,name:`${Tn}.virksomheter`}),F=M.useCallback(J=>{g(J!==void 0?J:-1)},[g]),q=M.useCallback(()=>{g(void 0)},[g]),N=M.useCallback(J=>{const re={...J,landJobberFra:J.virksomhetRegistrertINorge?"NOR":J.landJobberFra,varigEndringGjeldendeFom:J.nyIArbeidslivetFom||J.varigEndringGjeldendeFom};d===-1?w(re):d!==void 0&&b(d,re),q()},[w,b,q,d]);return M.useEffect(()=>{c.length===0&&v(`${Tn}.notRegisteredInput`,{type:"custom",message:l.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}),c.length>0&&f(`${Tn}.notRegisteredInput`)},[c.length]),r.jsxs("div",{className:Rn.fieldsList,children:[c.length>0&&r.jsxs(Qr.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),r.jsx("hr",{className:Rn.divider}),c.map((J,re)=>r.jsxs(ee,{children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(ts,{className:Rn.customLink,onClick:()=>F(re),onKeyDown:()=>F(re),children:r.jsx(Us,{size:"small",children:J.navn})})}),r.jsx(T,{children:r.jsx($s,{className:Rn.removeButton,onClick:()=>R(re),onKeyDown:()=>R(re)})})]}),r.jsx("hr",{className:Rn.divider}),r.jsx(y,{eightPx:!0})]},J.id))]},1),r.jsxs(ts,{onClick:()=>F(),onKeyDown:J=>J.nativeEvent.code==="Space"?F():!1,children:[r.jsx(Xu,{className:Rn.addCircleIcon}),r.jsx(Ze,{className:Rn.imageText,children:r.jsx(h,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})]}),m.isSubmitted&&((G=(P=m.errors[Tn])==null?void 0:P.notRegisteredInput)==null?void 0:G.message)&&r.jsx(br,{children:(X=(Se=m.errors[Tn])==null?void 0:Se.notRegisteredInput)==null?void 0:X.message}),d!==void 0&&r.jsx(mi,{showModal:!0,virksomhet:d!==-1&&c.length>d?c[d]:void 0,onSubmit:N,closeEvent:q,readOnly:s,alleKodeverk:i})]})};ki.__docgenInfo={description:`RegistrererVirksomhetPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const pi=({readOnly:s=!0,alleKodeverk:i})=>{const l=H(),{watch:d}=Y(),g=d(`${Tn}.harArbeidetIEgenVirksomhet`)||null;return r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.EgenVirksomhet.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Tn}.harArbeidetIEgenVirksomhet`,validate:[A],isReadOnly:s,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:l.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:l.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),g&&r.jsx(ki,{readOnly:s,alleKodeverk:i})]})};pi.__docgenInfo={description:`EgenVirksomhetPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const ym=te(ue),lt=({readOnly:s,alleKodeverk:i})=>r.jsx(ke,{value:ym,children:r.jsx(pi,{readOnly:s,alleKodeverk:i})});lt.__docgenInfo={description:"",methods:[],displayName:"VirksomhetPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Ga=te(ue),vi=({readOnly:s})=>r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:Ga.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"dekningsgrad",validate:[A],isReadOnly:s,isHorizontal:!0,radios:[{label:Ga.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:Ga.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]});vi.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Wr=te(ue),yi=({readOnly:s,annenForelderInformertRequired:i=!1})=>r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:Wr.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Ze,{children:Wr.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})}),r.jsx(y,{eightPx:!0}),r.jsx(U,{name:"annenForelderInformert",validate:i?[A]:[],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:Wr.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:Wr.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})]});yi.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const jn="annenForelder",ci=({readOnly:s,sokerErMor:i})=>{const l=H(),{watch:d}=Y(),g=d(`${jn}.sokerHarAleneomsorg`),k=d(`${jn}.denAndreForelderenHarRettPaForeldrepenger`),v=d(`${jn}.annenForelderRettEØS`);return r.jsxs(og,{gap:"4",children:[r.jsx(U,{name:`${jn}.sokerHarAleneomsorg`,label:l.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:l.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg.Yes"}),value:"true"},{label:l.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg.No"}),value:"false"}]}),g===!1&&r.jsx(U,{name:`${jn}.denAndreForelderenHarRettPaForeldrepenger`,label:l.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:l.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger.Yes"}),value:"true"},{label:l.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger.No"}),value:"false"}]}),g===!1&&k===!1&&r.jsx(U,{name:`${jn}.annenForelderRettEØS`,label:l.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:l.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS.Yes"}),value:"true"},{label:l.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS.No"}),value:"false"}]}),!i&&g===!1&&k===!1&&v===!1&&r.jsx(U,{name:`${jn}.morMottarUføretrygd`,label:l.formatMessage({id:"Registrering.Permisjon.MorUføretrygd"}),validate:[A],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:l.formatMessage({id:"Registrering.Permisjon.MorUføretrygd.Yes"}),value:"true"},{label:l.formatMessage({id:"Registrering.Permisjon.MorUføretrygd.No"}),value:"false"}]})]})};ci.__docgenInfo={description:"",methods:[],displayName:"PermisjonRettigheterPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},denAndreForelderenHarRettPaForeldrepenger:{required:!1,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const cm="_buttonRemove_n1u93_1",fm="_buttonRemoveFirst_n1u93_9",hm="_notLastRow_n1u93_17",bm="_skjulOverskrift_n1u93_21",Rm="_visOverskrift_n1u93_25",jm="_smalHeader_n1u93_29",Tm="_alignSamtidigUttak_n1u93_33",qm="_selectFieldWidth_n1u93_37",sn={buttonRemove:cm,buttonRemoveFirst:fm,notLastRow:hm,skjulOverskrift:bm,visOverskrift:Rm,smalHeader:jm,alignSamtidigUttak:Tm,selectFieldWidth:qm},Am=cr(100),Yn="tidsromPermisjon",De="permisjonsPerioder",dt=[ln.FELLESPERIODE,ln.FEDREKVOTE,ln.FORELDREPENGER_FOR_FODSEL,ln.FORELDREPENGER,ln.MODREKVOTE],wm=s=>s.filter(({kode:i})=>dt.some(l=>l===i)).map(({kode:i,navn:l})=>r.jsx("option",{value:i,children:l},i)),Fm=s=>s.map(({kode:i,navn:l})=>r.jsx("option",{value:i,children:l},i)),fi=[ln.FEDREKVOTE,ln.FORELDREPENGER_FOR_FODSEL,ln.MODREKVOTE],zr=(s,i)=>s?i:"",Pm=s=>!!s&&kn(s,qn).isBefore(kn("2019-01-01")),fs=s=>()=>{const l=s(`${Yn}.${De}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return $n(l)},hs=(s,i,l)=>()=>{const d=s(`${Yn}.${De}.${i}.periodeFom`),g=s(`${Yn}.${De}.${i}.periodeTom`);return!g||!d?null:l?Ae(g)(d):Ne(d)(g)},la=({sokerErMor:s,readOnly:i,alleKodeverk:l})=>{const d=H(),g=l[Q.UTTAK_PERIODE_TYPE],k=l[Q.MORS_AKTIVITET];k.filter(({kode:q})=>q==="-").length===0&&k.unshift({kode:"-",navn:"",kodeverk:""});const{control:v,getValues:m,trigger:f,watch:c,formState:{isSubmitted:R}}=Y(),{fields:w,remove:b,append:F}=fe({control:v,name:`${Yn}.${De}`});return M.useEffect(()=>{w.length===0&&F({})},[]),r.jsx(Oe,{readOnly:i,fields:w,bodyText:d.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),emptyPeriodTemplate:{},append:F,remove:b,children:(q,N)=>{const P=N===0,G=c(`${Yn}.${De}.${N}`),Se=Pm(G.periodeFom),X=P?sn.visOverskrift:sn.skjulOverskrift,J=fi.some(Be=>Be===G.periodeType)||G.periodeType==="",re=`${Yn}.${De}.${N}`;return r.jsxs("div",{children:[r.jsxs(ee,{children:[r.jsxs(L,{wrap:!0,children:[r.jsx(T,{className:sn.selectFieldWidth,children:r.jsx(ce,{readOnly:i,name:`${re}.periodeType`,label:zr(P,d.formatMessage({id:"Registrering.Permisjon.periodeType"})),selectValues:wm(g),validate:[A]})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${re}.periodeFom`,label:zr(P,d.formatMessage({id:"Registrering.Permisjon.periodeFom"})),validate:[A,I,hs(m,N,!0),fs(m)],onChange:()=>R?f():void 0})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${re}.periodeTom`,label:zr(P,d.formatMessage({id:"Registrering.Permisjon.periodeTom"})),validate:[A,I,hs(m,N,!1),fs(m)],onChange:()=>R?f():void 0})}),!s&&r.jsx(T,{children:r.jsx(ce,{readOnly:i,disabled:J,name:`${re}.morsAktivitet`,label:zr(P,d.formatMessage({id:"Registrering.Permisjon.Fellesperiode.morsAktivitet"})),selectValues:Fm(k),hideValueOnDisable:!0})}),r.jsxs(T,{className:sn.smalHeader,children:[r.jsx(me,{size:"small",className:X,children:r.jsx(h,{id:"Registrering.Permisjon.Flerbarnsdager"})}),r.jsx(ie,{readOnly:i,name:`${re}.flerbarnsdager`,label:" "})]}),r.jsxs(T,{className:sn.smalHeader,children:[r.jsx(me,{size:"small",className:X,children:r.jsx(h,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),r.jsx(ie,{readOnly:i,name:`${re}.harSamtidigUttak`,label:" "})]}),G.harSamtidigUttak&&r.jsx(T,{className:P?"":sn.alignSamtidigUttak,children:r.jsx(oe,{name:`${re}.samtidigUttaksprosent`,validate:[Wa,Am],label:d.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"}),normalizeOnBlur:Be=>Number.isNaN(Be)?Be:parseFloat(Be.toString()).toFixed(2)})}),r.jsx(T,{children:!i&&r.jsx(Ke,{className:P?sn.buttonRemoveFirst:sn.buttonRemove,type:"button",variant:"tertiary-neutral",icon:r.jsx($s,{}),onClick:()=>{b(N)}})})]}),Se&&r.jsxs(r.Fragment,{children:[r.jsx(L,{wrap:!0,children:r.jsx(ea,{size:"small",variant:"warning",children:r.jsx(h,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})}),r.jsx(y,{sixteenPx:!0})]})]}),r.jsx(y,{eightPx:!0})]},q.id)}})};la.transformValues=s=>s.map(i=>fi.some(l=>l===i.periodeType)?{periodeType:i.periodeType,periodeFom:i.periodeFom,periodeTom:i.periodeTom,flerbarnsdager:i.flerbarnsdager?i.flerbarnsdager:!1,harSamtidigUttak:i.harSamtidigUttak?i.harSamtidigUttak:!1,samtidigUttaksprosent:i.samtidigUttaksprosent}:{periodeType:i.periodeType,periodeFom:i.periodeFom,periodeTom:i.periodeTom,morsAktivitet:i.morsAktivitet,flerbarnsdager:i.flerbarnsdager?i.flerbarnsdager:!1,harSamtidigUttak:i.harSamtidigUttak?i.harSamtidigUttak:!1,samtidigUttaksprosent:i.samtidigUttaksprosent});la.__docgenInfo={description:`RenderPermisjonPeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const _m="_notLastRow_pe2tr_1",xm={notLastRow:_m},un="tidsromPermisjon",gn="utsettelsePeriode",bs={periodeFom:"",periodeTom:"",arsakForUtsettelse:""},Rs=s=>()=>{const l=s(`${un}.${gn}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return l.length>0?$n(l):void 0},js=(s,i,l)=>()=>{const d=s(`${un}.${gn}.${i}.periodeFom`),g=s(`${un}.${gn}.${i}.periodeTom`);return!g&&!d?null:l?Ae(g)(d):Ne(d)(g)},Nm=s=>s.map(({kode:i,navn:l})=>r.jsx("option",{value:i,children:l},i)),Om=s=>s.filter(({kode:i})=>dt.some(l=>l===i)).map(({kode:i,navn:l})=>r.jsx("option",{value:i,children:l},i)),hi=({utsettelseReasons:s,utsettelseKvoter:i,readOnly:l})=>{const d=H(),{control:g,getValues:k,trigger:v,formState:{isSubmitted:m}}=Y(),{fields:f,remove:c,append:R}=fe({control:g,name:`${un}.${gn}`});M.useEffect(()=>{f.length===0&&R(bs)},[]);const w=M.useCallback(()=>m?v():void 0,[m,v]),b=`${un}.${gn}`;return r.jsx(Oe,{fields:f,emptyPeriodTemplate:bs,bodyText:d.formatMessage({id:"Registrering.Permisjon.Utsettelse.LeggTilPeriode"}),readOnly:l,append:R,remove:c,children:(F,q,N)=>r.jsxs("div",{className:q!==f.length-1?xm.notLastRow:"",children:[q>0&&r.jsxs(r.Fragment,{children:[r.jsx(rt,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(ee,{wrap:!0,children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(ce,{name:`${b}.${q}.periodeForUtsettelse`,label:q===0?d.formatMessage({id:"Registrering.Permisjon.Utsettelse.Periode"}):"",selectValues:Om(i),validate:[A]})}),r.jsx(T,{children:r.jsx(E,{name:`${b}.${q}.periodeFom`,label:q===0?d.formatMessage({id:"Registrering.Permisjon.periodeFom"}):"",validate:[A,I,js(k,q,!0),Rs(k)],onChange:w})}),r.jsx(T,{children:r.jsx(E,{name:`${b}.${q}.periodeTom`,label:q===0?d.formatMessage({id:"Registrering.Permisjon.periodeTom"}):"",validate:[A,I,js(k,q,!1),Rs(k)],onChange:w})}),r.jsx(T,{children:r.jsx(ce,{name:`${b}.${q}.arsakForUtsettelse`,label:q===0?d.formatMessage({id:"Registrering.Permisjon.Utsettelse.Arsak"}):"",selectValues:Nm(s),validate:[A],onChange:w})})]}),r.jsx(y,{eightPx:!0}),r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(ce,{label:q===0?d.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}):"",name:`${b}.${q}.erArbeidstaker`,selectValues:[r.jsx("option",{value:"true",children:d.formatMessage({id:"Registrering.Permisjon.ErArbeidstaker"})},"true"),r.jsx("option",{value:"false",children:d.formatMessage({id:"Registrering.Permisjon.ErIkkeArbeidstaker"})},"false")],validate:[P=>k(`${un}.${gn}.${q}.arsakForUtsettelse`)==="ARBEID"?A(P):void 0]})}),N&&r.jsx(T,{children:N()})]})]})]},F.id)})};hi.__docgenInfo={description:`RenderUtsettelsePeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const da=({readOnly:s,alleKodeverk:i})=>{const l=i[Q.UTSETTELSE_AARSAK_TYPE],d=i[Q.UTTAK_PERIODE_TYPE],{watch:g}=Y(),k=g(`${un}.skalUtsette`)||!1;return r.jsxs(r.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.Utsettelse.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${un}.skalUtsette`,label:r.jsx(h,{id:"Registrering.Permisjon.Utsettelse.UtsettUttaket"})}),k&&r.jsx(hi,{utsettelseReasons:l,utsettelseKvoter:d,readOnly:s})]})};da.buildInitialValues=()=>({[gn]:[{}],skalUtsette:!1});da.__docgenInfo={description:`PermisjonUtsettelsePanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};var bi={exports:{}};(function(s,i){(function(l,d){s.exports=d()})(Du,function(){var l;function d(){return l.apply(null,arguments)}function g(e){l=e}function k(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function v(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function m(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function f(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(m(e,n))return!1;return!0}function c(e){return e===void 0}function R(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function w(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function b(e,n){var a=[],t,o=e.length;for(t=0;t<o;++t)a.push(n(e[t],t));return a}function F(e,n){for(var a in n)m(n,a)&&(e[a]=n[a]);return m(n,"toString")&&(e.toString=n.toString),m(n,"valueOf")&&(e.valueOf=n.valueOf),e}function q(e,n,a,t){return Et(e,n,a,t,!0).utc()}function N(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function P(e){return e._pf==null&&(e._pf=N()),e._pf}var G;Array.prototype.some?G=Array.prototype.some:G=function(e){var n=Object(this),a=n.length>>>0,t;for(t=0;t<a;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};function Se(e){var n=null,a=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(n=P(e),a=G.call(n.parsedDateParts,function(o){return o!=null}),t=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&a),e._strict&&(t=t&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function X(e){var n=q(NaN);return e!=null?F(P(n),e):P(n).userInvalidated=!0,n}var J=d.momentProperties=[],re=!1;function Be(e,n){var a,t,o,u=J.length;if(c(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),c(n._i)||(e._i=n._i),c(n._f)||(e._f=n._f),c(n._l)||(e._l=n._l),c(n._strict)||(e._strict=n._strict),c(n._tzm)||(e._tzm=n._tzm),c(n._isUTC)||(e._isUTC=n._isUTC),c(n._offset)||(e._offset=n._offset),c(n._pf)||(e._pf=P(n)),c(n._locale)||(e._locale=n._locale),u>0)for(a=0;a<u;a++)t=J[a],o=n[t],c(o)||(e[t]=o);return e}function er(e){Be(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),re===!1&&(re=!0,d.updateOffset(this),re=!1)}function we(e){return e instanceof er||e!=null&&e._isAMomentObject!=null}function ut(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function Re(e,n){var a=!0;return F(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),a){var t=[],o,u,p,_=arguments.length;for(u=0;u<_;u++){if(o="",typeof arguments[u]=="object"){o+=`
[`+u+"] ";for(p in arguments[0])m(arguments[0],p)&&(o+=p+": "+arguments[0][p]+", ");o=o.slice(0,-2)}else o=arguments[u];t.push(o)}ut(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),a=!1}return n.apply(this,arguments)},n)}var gt={};function mt(e,n){d.deprecationHandler!=null&&d.deprecationHandler(e,n),gt[e]||(ut(n),gt[e]=!0)}d.suppressDeprecationWarnings=!1,d.deprecationHandler=null;function Me(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Ii(e){var n,a;for(a in e)m(e,a)&&(n=e[a],Me(n)?this[a]=n:this["_"+a]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function ka(e,n){var a=F({},e),t;for(t in n)m(n,t)&&(v(e[t])&&v(n[t])?(a[t]={},F(a[t],e[t]),F(a[t],n[t])):n[t]!=null?a[t]=n[t]:delete a[t]);for(t in e)m(e,t)&&!m(n,t)&&v(e[t])&&(a[t]=F({},a[t]));return a}function pa(e){e!=null&&this.set(e)}var va;Object.keys?va=Object.keys:va=function(e){var n,a=[];for(n in e)m(e,n)&&a.push(n);return a};var Di={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Ki(e,n,a){var t=this._calendar[e]||this._calendar.sameElse;return Me(t)?t.call(n,a):t}function Ee(e,n,a){var t=""+Math.abs(e),o=n-t.length,u=e>=0;return(u?a?"+":"":"-")+Math.pow(10,Math.max(0,o)).toString().substr(1)+t}var ya=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,jr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ca={},wn={};function O(e,n,a,t){var o=t;typeof t=="string"&&(o=function(){return this[t]()}),e&&(wn[e]=o),n&&(wn[n[0]]=function(){return Ee(o.apply(this,arguments),n[1],n[2])}),a&&(wn[a]=function(){return this.localeData().ordinal(o.apply(this,arguments),e)})}function Bi(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Li(e){var n=e.match(ya),a,t;for(a=0,t=n.length;a<t;a++)wn[n[a]]?n[a]=wn[n[a]]:n[a]=Bi(n[a]);return function(o){var u="",p;for(p=0;p<t;p++)u+=Me(n[p])?n[p].call(o,e):n[p];return u}}function Tr(e,n){return e.isValid()?(n=kt(n,e.localeData()),ca[n]=ca[n]||Li(n),ca[n](e)):e.localeData().invalidDate()}function kt(e,n){var a=5;function t(o){return n.longDateFormat(o)||o}for(jr.lastIndex=0;a>=0&&jr.test(e);)e=e.replace(jr,t),jr.lastIndex=0,a-=1;return e}var Yi={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ui(e){var n=this._longDateFormat[e],a=this._longDateFormat[e.toUpperCase()];return n||!a?n:(this._longDateFormat[e]=a.match(ya).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var $i="Invalid date";function Hi(){return this._invalidDate}var Gi="%d",Ci=/\d{1,2}/;function Wi(e){return this._ordinal.replace("%d",e)}var zi={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ji(e,n,a,t){var o=this._relativeTime[a];return Me(o)?o(e,n,a,t):o.replace(/%d/i,e)}function Xi(e,n){var a=this._relativeTime[e>0?"future":"past"];return Me(a)?a(n):a.replace(/%s/i,n)}var pt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function je(e){return typeof e=="string"?pt[e]||pt[e.toLowerCase()]:void 0}function fa(e){var n={},a,t;for(t in e)m(e,t)&&(a=je(t),a&&(n[a]=e[t]));return n}var Zi={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Qi(e){var n=[],a;for(a in e)m(e,a)&&n.push({unit:a,priority:Zi[a]});return n.sort(function(t,o){return t.priority-o.priority}),n}var vt=/\d/,he=/\d\d/,yt=/\d{3}/,ha=/\d{4}/,qr=/[+-]?\d{6}/,C=/\d\d?/,ct=/\d\d\d\d?/,ft=/\d\d\d\d\d\d?/,Ar=/\d{1,3}/,ba=/\d{1,4}/,wr=/[+-]?\d{1,6}/,Fn=/\d+/,Fr=/[+-]?\d+/,eo=/Z|[+-]\d\d:?\d\d/gi,Pr=/Z|[+-]\d\d(?::?\d\d)?/gi,no=/[+-]?\d+(\.\d{1,3})?/,nr=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Pn=/^[1-9]\d?/,Ra=/^([1-9]\d|\d)/,_r;_r={};function x(e,n,a){_r[e]=Me(n)?n:function(t,o){return t&&a?a:n}}function ro(e,n){return m(_r,e)?_r[e](n._strict,n._locale):new RegExp(ao(e))}function ao(e){return Le(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,a,t,o,u){return a||t||o||u}))}function Le(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Te(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function V(e){var n=+e,a=0;return n!==0&&isFinite(n)&&(a=Te(n)),a}var ja={};function $(e,n){var a,t=n,o;for(typeof e=="string"&&(e=[e]),R(n)&&(t=function(u,p){p[n]=V(u)}),o=e.length,a=0;a<o;a++)ja[e[a]]=t}function rr(e,n){$(e,function(a,t,o,u){o._w=o._w||{},n(a,o._w,o,u)})}function to(e,n,a){n!=null&&m(ja,e)&&ja[e](n,a._a,a,e)}function xr(e){return e%4===0&&e%100!==0||e%400===0}var ge=0,Ye=1,Ve=2,ae=3,Fe=4,Ue=5,yn=6,so=7,io=8;O("Y",0,0,function(){var e=this.year();return e<=9999?Ee(e,4):"+"+e}),O(0,["YY",2],0,function(){return this.year()%100}),O(0,["YYYY",4],0,"year"),O(0,["YYYYY",5],0,"year"),O(0,["YYYYYY",6,!0],0,"year"),x("Y",Fr),x("YY",C,he),x("YYYY",ba,ha),x("YYYYY",wr,qr),x("YYYYYY",wr,qr),$(["YYYYY","YYYYYY"],ge),$("YYYY",function(e,n){n[ge]=e.length===2?d.parseTwoDigitYear(e):V(e)}),$("YY",function(e,n){n[ge]=d.parseTwoDigitYear(e)}),$("Y",function(e,n){n[ge]=parseInt(e,10)});function ar(e){return xr(e)?366:365}d.parseTwoDigitYear=function(e){return V(e)+(V(e)>68?1900:2e3)};var ht=_n("FullYear",!0);function oo(){return xr(this.year())}function _n(e,n){return function(a){return a!=null?(bt(this,e,a),d.updateOffset(this,n),this):tr(this,e)}}function tr(e,n){if(!e.isValid())return NaN;var a=e._d,t=e._isUTC;switch(n){case"Milliseconds":return t?a.getUTCMilliseconds():a.getMilliseconds();case"Seconds":return t?a.getUTCSeconds():a.getSeconds();case"Minutes":return t?a.getUTCMinutes():a.getMinutes();case"Hours":return t?a.getUTCHours():a.getHours();case"Date":return t?a.getUTCDate():a.getDate();case"Day":return t?a.getUTCDay():a.getDay();case"Month":return t?a.getUTCMonth():a.getMonth();case"FullYear":return t?a.getUTCFullYear():a.getFullYear();default:return NaN}}function bt(e,n,a){var t,o,u,p,_;if(!(!e.isValid()||isNaN(a))){switch(t=e._d,o=e._isUTC,n){case"Milliseconds":return void(o?t.setUTCMilliseconds(a):t.setMilliseconds(a));case"Seconds":return void(o?t.setUTCSeconds(a):t.setSeconds(a));case"Minutes":return void(o?t.setUTCMinutes(a):t.setMinutes(a));case"Hours":return void(o?t.setUTCHours(a):t.setHours(a));case"Date":return void(o?t.setUTCDate(a):t.setDate(a));case"FullYear":break;default:return}u=a,p=e.month(),_=e.date(),_=_===29&&p===1&&!xr(u)?28:_,o?t.setUTCFullYear(u,p,_):t.setFullYear(u,p,_)}}function lo(e){return e=je(e),Me(this[e])?this[e]():this}function uo(e,n){if(typeof e=="object"){e=fa(e);var a=Qi(e),t,o=a.length;for(t=0;t<o;t++)this[a[t].unit](e[a[t].unit])}else if(e=je(e),Me(this[e]))return this[e](n);return this}function go(e,n){return(e%n+n)%n}var Z;Array.prototype.indexOf?Z=Array.prototype.indexOf:Z=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function Ta(e,n){if(isNaN(e)||isNaN(n))return NaN;var a=go(n,12);return e+=(n-a)/12,a===1?xr(e)?29:28:31-a%7%2}O("M",["MM",2],"Mo",function(){return this.month()+1}),O("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),O("MMMM",0,0,function(e){return this.localeData().months(this,e)}),x("M",C,Pn),x("MM",C,he),x("MMM",function(e,n){return n.monthsShortRegex(e)}),x("MMMM",function(e,n){return n.monthsRegex(e)}),$(["M","MM"],function(e,n){n[Ye]=V(e)-1}),$(["MMM","MMMM"],function(e,n,a,t){var o=a._locale.monthsParse(e,t,a._strict);o!=null?n[Ye]=o:P(a).invalidMonth=e});var mo="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Rt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),jt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ko=nr,po=nr;function vo(e,n){return e?k(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||jt).test(n)?"format":"standalone"][e.month()]:k(this._months)?this._months:this._months.standalone}function yo(e,n){return e?k(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[jt.test(n)?"format":"standalone"][e.month()]:k(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function co(e,n,a){var t,o,u,p=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)u=q([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(u,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(u,"").toLocaleLowerCase();return a?n==="MMM"?(o=Z.call(this._shortMonthsParse,p),o!==-1?o:null):(o=Z.call(this._longMonthsParse,p),o!==-1?o:null):n==="MMM"?(o=Z.call(this._shortMonthsParse,p),o!==-1?o:(o=Z.call(this._longMonthsParse,p),o!==-1?o:null)):(o=Z.call(this._longMonthsParse,p),o!==-1?o:(o=Z.call(this._shortMonthsParse,p),o!==-1?o:null))}function fo(e,n,a){var t,o,u;if(this._monthsParseExact)return co.call(this,e,n,a);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(o=q([2e3,t]),a&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(o,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(o,"").replace(".","")+"$","i")),!a&&!this._monthsParse[t]&&(u="^"+this.months(o,"")+"|^"+this.monthsShort(o,""),this._monthsParse[t]=new RegExp(u.replace(".",""),"i")),a&&n==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(a&&n==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!a&&this._monthsParse[t].test(e))return t}}function Tt(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=V(n);else if(n=e.localeData().monthsParse(n),!R(n))return e}var a=n,t=e.date();return t=t<29?t:Math.min(t,Ta(e.year(),a)),e._isUTC?e._d.setUTCMonth(a,t):e._d.setMonth(a,t),e}function qt(e){return e!=null?(Tt(this,e),d.updateOffset(this,!0),this):tr(this,"Month")}function ho(){return Ta(this.year(),this.month())}function bo(e){return this._monthsParseExact?(m(this,"_monthsRegex")||At.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=ko),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Ro(e){return this._monthsParseExact?(m(this,"_monthsRegex")||At.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=po),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function At(){function e(S,D){return D.length-S.length}var n=[],a=[],t=[],o,u,p,_;for(o=0;o<12;o++)u=q([2e3,o]),p=Le(this.monthsShort(u,"")),_=Le(this.months(u,"")),n.push(p),a.push(_),t.push(_),t.push(p);n.sort(e),a.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function jo(e,n,a,t,o,u,p){var _;return e<100&&e>=0?(_=new Date(e+400,n,a,t,o,u,p),isFinite(_.getFullYear())&&_.setFullYear(e)):_=new Date(e,n,a,t,o,u,p),_}function sr(e){var n,a;return e<100&&e>=0?(a=Array.prototype.slice.call(arguments),a[0]=e+400,n=new Date(Date.UTC.apply(null,a)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function Nr(e,n,a){var t=7+n-a,o=(7+sr(e,0,t).getUTCDay()-n)%7;return-o+t-1}function wt(e,n,a,t,o){var u=(7+a-t)%7,p=Nr(e,t,o),_=1+7*(n-1)+u+p,S,D;return _<=0?(S=e-1,D=ar(S)+_):_>ar(e)?(S=e+1,D=_-ar(e)):(S=e,D=_),{year:S,dayOfYear:D}}function ir(e,n,a){var t=Nr(e.year(),n,a),o=Math.floor((e.dayOfYear()-t-1)/7)+1,u,p;return o<1?(p=e.year()-1,u=o+$e(p,n,a)):o>$e(e.year(),n,a)?(u=o-$e(e.year(),n,a),p=e.year()+1):(p=e.year(),u=o),{week:u,year:p}}function $e(e,n,a){var t=Nr(e,n,a),o=Nr(e+1,n,a);return(ar(e)-t+o)/7}O("w",["ww",2],"wo","week"),O("W",["WW",2],"Wo","isoWeek"),x("w",C,Pn),x("ww",C,he),x("W",C,Pn),x("WW",C,he),rr(["w","ww","W","WW"],function(e,n,a,t){n[t.substr(0,1)]=V(e)});function To(e){return ir(e,this._week.dow,this._week.doy).week}var qo={dow:0,doy:6};function Ao(){return this._week.dow}function wo(){return this._week.doy}function Fo(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function Po(e){var n=ir(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}O("d",0,"do","day"),O("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),O("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),O("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),O("e",0,0,"weekday"),O("E",0,0,"isoWeekday"),x("d",C),x("e",C),x("E",C),x("dd",function(e,n){return n.weekdaysMinRegex(e)}),x("ddd",function(e,n){return n.weekdaysShortRegex(e)}),x("dddd",function(e,n){return n.weekdaysRegex(e)}),rr(["dd","ddd","dddd"],function(e,n,a,t){var o=a._locale.weekdaysParse(e,t,a._strict);o!=null?n.d=o:P(a).invalidWeekday=e}),rr(["d","e","E"],function(e,n,a,t){n[t]=V(e)});function _o(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function xo(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function qa(e,n){return e.slice(n,7).concat(e.slice(0,n))}var No="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ft="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Oo="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),So=nr,Mo=nr,Eo=nr;function Vo(e,n){var a=k(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?qa(a,this._week.dow):e?a[e.day()]:a}function Io(e){return e===!0?qa(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Do(e){return e===!0?qa(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ko(e,n,a){var t,o,u,p=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)u=q([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(u,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(u,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(u,"").toLocaleLowerCase();return a?n==="dddd"?(o=Z.call(this._weekdaysParse,p),o!==-1?o:null):n==="ddd"?(o=Z.call(this._shortWeekdaysParse,p),o!==-1?o:null):(o=Z.call(this._minWeekdaysParse,p),o!==-1?o:null):n==="dddd"?(o=Z.call(this._weekdaysParse,p),o!==-1||(o=Z.call(this._shortWeekdaysParse,p),o!==-1)?o:(o=Z.call(this._minWeekdaysParse,p),o!==-1?o:null)):n==="ddd"?(o=Z.call(this._shortWeekdaysParse,p),o!==-1||(o=Z.call(this._weekdaysParse,p),o!==-1)?o:(o=Z.call(this._minWeekdaysParse,p),o!==-1?o:null)):(o=Z.call(this._minWeekdaysParse,p),o!==-1||(o=Z.call(this._weekdaysParse,p),o!==-1)?o:(o=Z.call(this._shortWeekdaysParse,p),o!==-1?o:null))}function Bo(e,n,a){var t,o,u;if(this._weekdaysParseExact)return Ko.call(this,e,n,a);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(o=q([2e3,1]).day(t),a&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(o,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(o,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(o,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(u="^"+this.weekdays(o,"")+"|^"+this.weekdaysShort(o,"")+"|^"+this.weekdaysMin(o,""),this._weekdaysParse[t]=new RegExp(u.replace(".",""),"i")),a&&n==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(a&&n==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(a&&n==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!a&&this._weekdaysParse[t].test(e))return t}}function Lo(e){if(!this.isValid())return e!=null?this:NaN;var n=tr(this,"Day");return e!=null?(e=_o(e,this.localeData()),this.add(e-n,"d")):n}function Yo(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function Uo(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=xo(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function $o(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Aa.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=So),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ho(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Aa.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Mo),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Go(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Aa.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Eo),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Aa(){function e(pe,ze){return ze.length-pe.length}var n=[],a=[],t=[],o=[],u,p,_,S,D;for(u=0;u<7;u++)p=q([2e3,1]).day(u),_=Le(this.weekdaysMin(p,"")),S=Le(this.weekdaysShort(p,"")),D=Le(this.weekdays(p,"")),n.push(_),a.push(S),t.push(D),o.push(_),o.push(S),o.push(D);n.sort(e),a.sort(e),t.sort(e),o.sort(e),this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function wa(){return this.hours()%12||12}function Co(){return this.hours()||24}O("H",["HH",2],0,"hour"),O("h",["hh",2],0,wa),O("k",["kk",2],0,Co),O("hmm",0,0,function(){return""+wa.apply(this)+Ee(this.minutes(),2)}),O("hmmss",0,0,function(){return""+wa.apply(this)+Ee(this.minutes(),2)+Ee(this.seconds(),2)}),O("Hmm",0,0,function(){return""+this.hours()+Ee(this.minutes(),2)}),O("Hmmss",0,0,function(){return""+this.hours()+Ee(this.minutes(),2)+Ee(this.seconds(),2)});function Pt(e,n){O(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}Pt("a",!0),Pt("A",!1);function _t(e,n){return n._meridiemParse}x("a",_t),x("A",_t),x("H",C,Ra),x("h",C,Pn),x("k",C,Pn),x("HH",C,he),x("hh",C,he),x("kk",C,he),x("hmm",ct),x("hmmss",ft),x("Hmm",ct),x("Hmmss",ft),$(["H","HH"],ae),$(["k","kk"],function(e,n,a){var t=V(e);n[ae]=t===24?0:t}),$(["a","A"],function(e,n,a){a._isPm=a._locale.isPM(e),a._meridiem=e}),$(["h","hh"],function(e,n,a){n[ae]=V(e),P(a).bigHour=!0}),$("hmm",function(e,n,a){var t=e.length-2;n[ae]=V(e.substr(0,t)),n[Fe]=V(e.substr(t)),P(a).bigHour=!0}),$("hmmss",function(e,n,a){var t=e.length-4,o=e.length-2;n[ae]=V(e.substr(0,t)),n[Fe]=V(e.substr(t,2)),n[Ue]=V(e.substr(o)),P(a).bigHour=!0}),$("Hmm",function(e,n,a){var t=e.length-2;n[ae]=V(e.substr(0,t)),n[Fe]=V(e.substr(t))}),$("Hmmss",function(e,n,a){var t=e.length-4,o=e.length-2;n[ae]=V(e.substr(0,t)),n[Fe]=V(e.substr(t,2)),n[Ue]=V(e.substr(o))});function Wo(e){return(e+"").toLowerCase().charAt(0)==="p"}var zo=/[ap]\.?m?\.?/i,Jo=_n("Hours",!0);function Xo(e,n,a){return e>11?a?"pm":"PM":a?"am":"AM"}var xt={calendar:Di,longDateFormat:Yi,invalidDate:$i,ordinal:Gi,dayOfMonthOrdinalParse:Ci,relativeTime:zi,months:mo,monthsShort:Rt,week:qo,weekdays:No,weekdaysMin:Oo,weekdaysShort:Ft,meridiemParse:zo},z={},or={},lr;function Zo(e,n){var a,t=Math.min(e.length,n.length);for(a=0;a<t;a+=1)if(e[a]!==n[a])return a;return t}function Nt(e){return e&&e.toLowerCase().replace("_","-")}function Qo(e){for(var n=0,a,t,o,u;n<e.length;){for(u=Nt(e[n]).split("-"),a=u.length,t=Nt(e[n+1]),t=t?t.split("-"):null;a>0;){if(o=Or(u.slice(0,a).join("-")),o)return o;if(t&&t.length>=a&&Zo(u,t)>=a-1)break;a--}n++}return lr}function el(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Or(e){var n=null,a;if(z[e]===void 0&&s&&s.exports&&el(e))try{n=lr._abbr,a=lg,a("./locale/"+e),rn(n)}catch{z[e]=null}return z[e]}function rn(e,n){var a;return e&&(c(n)?a=He(e):a=Fa(e,n),a?lr=a:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),lr._abbr}function Fa(e,n){if(n!==null){var a,t=xt;if(n.abbr=e,z[e]!=null)mt("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=z[e]._config;else if(n.parentLocale!=null)if(z[n.parentLocale]!=null)t=z[n.parentLocale]._config;else if(a=Or(n.parentLocale),a!=null)t=a._config;else return or[n.parentLocale]||(or[n.parentLocale]=[]),or[n.parentLocale].push({name:e,config:n}),null;return z[e]=new pa(ka(t,n)),or[e]&&or[e].forEach(function(o){Fa(o.name,o.config)}),rn(e),z[e]}else return delete z[e],null}function nl(e,n){if(n!=null){var a,t,o=xt;z[e]!=null&&z[e].parentLocale!=null?z[e].set(ka(z[e]._config,n)):(t=Or(e),t!=null&&(o=t._config),n=ka(o,n),t==null&&(n.abbr=e),a=new pa(n),a.parentLocale=z[e],z[e]=a),rn(e)}else z[e]!=null&&(z[e].parentLocale!=null?(z[e]=z[e].parentLocale,e===rn()&&rn(e)):z[e]!=null&&delete z[e]);return z[e]}function He(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return lr;if(!k(e)){if(n=Or(e),n)return n;e=[e]}return Qo(e)}function rl(){return va(z)}function Pa(e){var n,a=e._a;return a&&P(e).overflow===-2&&(n=a[Ye]<0||a[Ye]>11?Ye:a[Ve]<1||a[Ve]>Ta(a[ge],a[Ye])?Ve:a[ae]<0||a[ae]>24||a[ae]===24&&(a[Fe]!==0||a[Ue]!==0||a[yn]!==0)?ae:a[Fe]<0||a[Fe]>59?Fe:a[Ue]<0||a[Ue]>59?Ue:a[yn]<0||a[yn]>999?yn:-1,P(e)._overflowDayOfYear&&(n<ge||n>Ve)&&(n=Ve),P(e)._overflowWeeks&&n===-1&&(n=so),P(e)._overflowWeekday&&n===-1&&(n=io),P(e).overflow=n),e}var al=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,tl=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,sl=/Z|[+-]\d\d(?::?\d\d)?/,Sr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],_a=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],il=/^\/?Date\((-?\d+)/i,ol=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,ll={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Ot(e){var n,a,t=e._i,o=al.exec(t)||tl.exec(t),u,p,_,S,D=Sr.length,pe=_a.length;if(o){for(P(e).iso=!0,n=0,a=D;n<a;n++)if(Sr[n][1].exec(o[1])){p=Sr[n][0],u=Sr[n][2]!==!1;break}if(p==null){e._isValid=!1;return}if(o[3]){for(n=0,a=pe;n<a;n++)if(_a[n][1].exec(o[3])){_=(o[2]||" ")+_a[n][0];break}if(_==null){e._isValid=!1;return}}if(!u&&_!=null){e._isValid=!1;return}if(o[4])if(sl.exec(o[4]))S="Z";else{e._isValid=!1;return}e._f=p+(_||"")+(S||""),Na(e)}else e._isValid=!1}function dl(e,n,a,t,o,u){var p=[ul(e),Rt.indexOf(n),parseInt(a,10),parseInt(t,10),parseInt(o,10)];return u&&p.push(parseInt(u,10)),p}function ul(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function gl(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function ml(e,n,a){if(e){var t=Ft.indexOf(e),o=new Date(n[0],n[1],n[2]).getDay();if(t!==o)return P(a).weekdayMismatch=!0,a._isValid=!1,!1}return!0}function kl(e,n,a){if(e)return ll[e];if(n)return 0;var t=parseInt(a,10),o=t%100,u=(t-o)/100;return u*60+o}function St(e){var n=ol.exec(gl(e._i)),a;if(n){if(a=dl(n[4],n[3],n[2],n[5],n[6],n[7]),!ml(n[1],a,e))return;e._a=a,e._tzm=kl(n[8],n[9],n[10]),e._d=sr.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),P(e).rfc2822=!0}else e._isValid=!1}function pl(e){var n=il.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(Ot(e),e._isValid===!1)delete e._isValid;else return;if(St(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=Re("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function xn(e,n,a){return e??n??a}function vl(e){var n=new Date(d.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function xa(e){var n,a,t=[],o,u,p;if(!e._d){for(o=vl(e),e._w&&e._a[Ve]==null&&e._a[Ye]==null&&yl(e),e._dayOfYear!=null&&(p=xn(e._a[ge],o[ge]),(e._dayOfYear>ar(p)||e._dayOfYear===0)&&(P(e)._overflowDayOfYear=!0),a=sr(p,0,e._dayOfYear),e._a[Ye]=a.getUTCMonth(),e._a[Ve]=a.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=t[n]=o[n];for(;n<7;n++)e._a[n]=t[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[ae]===24&&e._a[Fe]===0&&e._a[Ue]===0&&e._a[yn]===0&&(e._nextDay=!0,e._a[ae]=0),e._d=(e._useUTC?sr:jo).apply(null,t),u=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ae]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==u&&(P(e).weekdayMismatch=!0)}}function yl(e){var n,a,t,o,u,p,_,S,D;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(u=1,p=4,a=xn(n.GG,e._a[ge],ir(W(),1,4).year),t=xn(n.W,1),o=xn(n.E,1),(o<1||o>7)&&(S=!0)):(u=e._locale._week.dow,p=e._locale._week.doy,D=ir(W(),u,p),a=xn(n.gg,e._a[ge],D.year),t=xn(n.w,D.week),n.d!=null?(o=n.d,(o<0||o>6)&&(S=!0)):n.e!=null?(o=n.e+u,(n.e<0||n.e>6)&&(S=!0)):o=u),t<1||t>$e(a,u,p)?P(e)._overflowWeeks=!0:S!=null?P(e)._overflowWeekday=!0:(_=wt(a,t,o,u,p),e._a[ge]=_.year,e._dayOfYear=_.dayOfYear)}d.ISO_8601=function(){},d.RFC_2822=function(){};function Na(e){if(e._f===d.ISO_8601){Ot(e);return}if(e._f===d.RFC_2822){St(e);return}e._a=[],P(e).empty=!0;var n=""+e._i,a,t,o,u,p,_=n.length,S=0,D,pe;for(o=kt(e._f,e._locale).match(ya)||[],pe=o.length,a=0;a<pe;a++)u=o[a],t=(n.match(ro(u,e))||[])[0],t&&(p=n.substr(0,n.indexOf(t)),p.length>0&&P(e).unusedInput.push(p),n=n.slice(n.indexOf(t)+t.length),S+=t.length),wn[u]?(t?P(e).empty=!1:P(e).unusedTokens.push(u),to(u,t,e)):e._strict&&!t&&P(e).unusedTokens.push(u);P(e).charsLeftOver=_-S,n.length>0&&P(e).unusedInput.push(n),e._a[ae]<=12&&P(e).bigHour===!0&&e._a[ae]>0&&(P(e).bigHour=void 0),P(e).parsedDateParts=e._a.slice(0),P(e).meridiem=e._meridiem,e._a[ae]=cl(e._locale,e._a[ae],e._meridiem),D=P(e).era,D!==null&&(e._a[ge]=e._locale.erasConvertYear(D,e._a[ge])),xa(e),Pa(e)}function cl(e,n,a){var t;return a==null?n:e.meridiemHour!=null?e.meridiemHour(n,a):(e.isPM!=null&&(t=e.isPM(a),t&&n<12&&(n+=12),!t&&n===12&&(n=0)),n)}function fl(e){var n,a,t,o,u,p,_=!1,S=e._f.length;if(S===0){P(e).invalidFormat=!0,e._d=new Date(NaN);return}for(o=0;o<S;o++)u=0,p=!1,n=Be({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[o],Na(n),Se(n)&&(p=!0),u+=P(n).charsLeftOver,u+=P(n).unusedTokens.length*10,P(n).score=u,_?u<t&&(t=u,a=n):(t==null||u<t||p)&&(t=u,a=n,p&&(_=!0));F(e,a||n)}function hl(e){if(!e._d){var n=fa(e._i),a=n.day===void 0?n.date:n.day;e._a=b([n.year,n.month,a,n.hour,n.minute,n.second,n.millisecond],function(t){return t&&parseInt(t,10)}),xa(e)}}function bl(e){var n=new er(Pa(Mt(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function Mt(e){var n=e._i,a=e._f;return e._locale=e._locale||He(e._l),n===null||a===void 0&&n===""?X({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),we(n)?new er(Pa(n)):(w(n)?e._d=n:k(a)?fl(e):a?Na(e):Rl(e),Se(e)||(e._d=null),e))}function Rl(e){var n=e._i;c(n)?e._d=new Date(d.now()):w(n)?e._d=new Date(n.valueOf()):typeof n=="string"?pl(e):k(n)?(e._a=b(n.slice(0),function(a){return parseInt(a,10)}),xa(e)):v(n)?hl(e):R(n)?e._d=new Date(n):d.createFromInputFallback(e)}function Et(e,n,a,t,o){var u={};return(n===!0||n===!1)&&(t=n,n=void 0),(a===!0||a===!1)&&(t=a,a=void 0),(v(e)&&f(e)||k(e)&&e.length===0)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=o,u._l=a,u._i=e,u._f=n,u._strict=t,bl(u)}function W(e,n,a,t){return Et(e,n,a,t,!1)}var jl=Re("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:X()}),Tl=Re("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:X()});function Vt(e,n){var a,t;if(n.length===1&&k(n[0])&&(n=n[0]),!n.length)return W();for(a=n[0],t=1;t<n.length;++t)(!n[t].isValid()||n[t][e](a))&&(a=n[t]);return a}function ql(){var e=[].slice.call(arguments,0);return Vt("isBefore",e)}function Al(){var e=[].slice.call(arguments,0);return Vt("isAfter",e)}var wl=function(){return Date.now?Date.now():+new Date},dr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Fl(e){var n,a=!1,t,o=dr.length;for(n in e)if(m(e,n)&&!(Z.call(dr,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(t=0;t<o;++t)if(e[dr[t]]){if(a)return!1;parseFloat(e[dr[t]])!==V(e[dr[t]])&&(a=!0)}return!0}function Pl(){return this._isValid}function _l(){return Pe(NaN)}function Mr(e){var n=fa(e),a=n.year||0,t=n.quarter||0,o=n.month||0,u=n.week||n.isoWeek||0,p=n.day||0,_=n.hour||0,S=n.minute||0,D=n.second||0,pe=n.millisecond||0;this._isValid=Fl(n),this._milliseconds=+pe+D*1e3+S*6e4+_*1e3*60*60,this._days=+p+u*7,this._months=+o+t*3+a*12,this._data={},this._locale=He(),this._bubble()}function Er(e){return e instanceof Mr}function Oa(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function xl(e,n,a){var t=Math.min(e.length,n.length),o=Math.abs(e.length-n.length),u=0,p;for(p=0;p<t;p++)V(e[p])!==V(n[p])&&u++;return u+o}function It(e,n){O(e,0,0,function(){var a=this.utcOffset(),t="+";return a<0&&(a=-a,t="-"),t+Ee(~~(a/60),2)+n+Ee(~~a%60,2)})}It("Z",":"),It("ZZ",""),x("Z",Pr),x("ZZ",Pr),$(["Z","ZZ"],function(e,n,a){a._useUTC=!0,a._tzm=Sa(Pr,e)});var Nl=/([\+\-]|\d\d)/gi;function Sa(e,n){var a=(n||"").match(e),t,o,u;return a===null?null:(t=a[a.length-1]||[],o=(t+"").match(Nl)||["-",0,0],u=+(o[1]*60)+V(o[2]),u===0?0:o[0]==="+"?u:-u)}function Ma(e,n){var a,t;return n._isUTC?(a=n.clone(),t=(we(e)||w(e)?e.valueOf():W(e).valueOf())-a.valueOf(),a._d.setTime(a._d.valueOf()+t),d.updateOffset(a,!1),a):W(e).local()}function Ea(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function Ol(e,n,a){var t=this._offset||0,o;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Sa(Pr,e),e===null)return this}else Math.abs(e)<16&&!a&&(e=e*60);return!this._isUTC&&n&&(o=Ea(this)),this._offset=e,this._isUTC=!0,o!=null&&this.add(o,"m"),t!==e&&(!n||this._changeInProgress?Lt(this,Pe(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:Ea(this)}function Sl(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function Ml(e){return this.utcOffset(0,e)}function El(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ea(this),"m")),this}function Vl(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Sa(eo,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Il(e){return this.isValid()?(e=e?W(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Dl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Kl(){if(!c(this._isDSTShifted))return this._isDSTShifted;var e={},n;return Be(e,this),e=Mt(e),e._a?(n=e._isUTC?q(e._a):W(e._a),this._isDSTShifted=this.isValid()&&xl(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Bl(){return this.isValid()?!this._isUTC:!1}function Ll(){return this.isValid()?this._isUTC:!1}function Dt(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Yl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Ul=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Pe(e,n){var a=e,t=null,o,u,p;return Er(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:R(e)||!isNaN(+e)?(a={},n?a[n]=+e:a.milliseconds=+e):(t=Yl.exec(e))?(o=t[1]==="-"?-1:1,a={y:0,d:V(t[Ve])*o,h:V(t[ae])*o,m:V(t[Fe])*o,s:V(t[Ue])*o,ms:V(Oa(t[yn]*1e3))*o}):(t=Ul.exec(e))?(o=t[1]==="-"?-1:1,a={y:cn(t[2],o),M:cn(t[3],o),w:cn(t[4],o),d:cn(t[5],o),h:cn(t[6],o),m:cn(t[7],o),s:cn(t[8],o)}):a==null?a={}:typeof a=="object"&&("from"in a||"to"in a)&&(p=$l(W(a.from),W(a.to)),a={},a.ms=p.milliseconds,a.M=p.months),u=new Mr(a),Er(e)&&m(e,"_locale")&&(u._locale=e._locale),Er(e)&&m(e,"_isValid")&&(u._isValid=e._isValid),u}Pe.fn=Mr.prototype,Pe.invalid=_l;function cn(e,n){var a=e&&parseFloat(e.replace(",","."));return(isNaN(a)?0:a)*n}function Kt(e,n){var a={};return a.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(a.months,"M").isAfter(n)&&--a.months,a.milliseconds=+n-+e.clone().add(a.months,"M"),a}function $l(e,n){var a;return e.isValid()&&n.isValid()?(n=Ma(n,e),e.isBefore(n)?a=Kt(e,n):(a=Kt(n,e),a.milliseconds=-a.milliseconds,a.months=-a.months),a):{milliseconds:0,months:0}}function Bt(e,n){return function(a,t){var o,u;return t!==null&&!isNaN(+t)&&(mt(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),u=a,a=t,t=u),o=Pe(a,t),Lt(this,o,e),this}}function Lt(e,n,a,t){var o=n._milliseconds,u=Oa(n._days),p=Oa(n._months);e.isValid()&&(t=t??!0,p&&Tt(e,tr(e,"Month")+p*a),u&&bt(e,"Date",tr(e,"Date")+u*a),o&&e._d.setTime(e._d.valueOf()+o*a),t&&d.updateOffset(e,u||p))}var Hl=Bt(1,"add"),Gl=Bt(-1,"subtract");function Yt(e){return typeof e=="string"||e instanceof String}function Cl(e){return we(e)||w(e)||Yt(e)||R(e)||zl(e)||Wl(e)||e===null||e===void 0}function Wl(e){var n=v(e)&&!f(e),a=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],o,u,p=t.length;for(o=0;o<p;o+=1)u=t[o],a=a||m(e,u);return n&&a}function zl(e){var n=k(e),a=!1;return n&&(a=e.filter(function(t){return!R(t)&&Yt(e)}).length===0),n&&a}function Jl(e){var n=v(e)&&!f(e),a=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],o,u;for(o=0;o<t.length;o+=1)u=t[o],a=a||m(e,u);return n&&a}function Xl(e,n){var a=e.diff(n,"days",!0);return a<-6?"sameElse":a<-1?"lastWeek":a<0?"lastDay":a<1?"sameDay":a<2?"nextDay":a<7?"nextWeek":"sameElse"}function Zl(e,n){arguments.length===1&&(arguments[0]?Cl(arguments[0])?(e=arguments[0],n=void 0):Jl(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var a=e||W(),t=Ma(a,this).startOf("day"),o=d.calendarFormat(this,t)||"sameElse",u=n&&(Me(n[o])?n[o].call(this,a):n[o]);return this.format(u||this.localeData().calendar(o,this,W(a)))}function Ql(){return new er(this)}function ed(e,n){var a=we(e)?e:W(e);return this.isValid()&&a.isValid()?(n=je(n)||"millisecond",n==="millisecond"?this.valueOf()>a.valueOf():a.valueOf()<this.clone().startOf(n).valueOf()):!1}function nd(e,n){var a=we(e)?e:W(e);return this.isValid()&&a.isValid()?(n=je(n)||"millisecond",n==="millisecond"?this.valueOf()<a.valueOf():this.clone().endOf(n).valueOf()<a.valueOf()):!1}function rd(e,n,a,t){var o=we(e)?e:W(e),u=we(n)?n:W(n);return this.isValid()&&o.isValid()&&u.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(o,a):!this.isBefore(o,a))&&(t[1]===")"?this.isBefore(u,a):!this.isAfter(u,a))):!1}function ad(e,n){var a=we(e)?e:W(e),t;return this.isValid()&&a.isValid()?(n=je(n)||"millisecond",n==="millisecond"?this.valueOf()===a.valueOf():(t=a.valueOf(),this.clone().startOf(n).valueOf()<=t&&t<=this.clone().endOf(n).valueOf())):!1}function td(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function sd(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function id(e,n,a){var t,o,u;if(!this.isValid())return NaN;if(t=Ma(e,this),!t.isValid())return NaN;switch(o=(t.utcOffset()-this.utcOffset())*6e4,n=je(n),n){case"year":u=Vr(this,t)/12;break;case"month":u=Vr(this,t);break;case"quarter":u=Vr(this,t)/3;break;case"second":u=(this-t)/1e3;break;case"minute":u=(this-t)/6e4;break;case"hour":u=(this-t)/36e5;break;case"day":u=(this-t-o)/864e5;break;case"week":u=(this-t-o)/6048e5;break;default:u=this-t}return a?u:Te(u)}function Vr(e,n){if(e.date()<n.date())return-Vr(n,e);var a=(n.year()-e.year())*12+(n.month()-e.month()),t=e.clone().add(a,"months"),o,u;return n-t<0?(o=e.clone().add(a-1,"months"),u=(n-t)/(t-o)):(o=e.clone().add(a+1,"months"),u=(n-t)/(o-t)),-(a+u)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function od(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ld(e){if(!this.isValid())return null;var n=e!==!0,a=n?this.clone().utc():this;return a.year()<0||a.year()>9999?Tr(a,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Me(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Tr(a,"Z")):Tr(a,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function dd(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",a,t,o,u;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),a="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",o="-MM-DD[T]HH:mm:ss.SSS",u=n+'[")]',this.format(a+t+o+u)}function ud(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var n=Tr(this,e);return this.localeData().postformat(n)}function gd(e,n){return this.isValid()&&(we(e)&&e.isValid()||W(e).isValid())?Pe({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function md(e){return this.from(W(),e)}function kd(e,n){return this.isValid()&&(we(e)&&e.isValid()||W(e).isValid())?Pe({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function pd(e){return this.to(W(),e)}function Ut(e){var n;return e===void 0?this._locale._abbr:(n=He(e),n!=null&&(this._locale=n),this)}var $t=Re("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Ht(){return this._locale}var Ir=1e3,Nn=60*Ir,Dr=60*Nn,Gt=(365*400+97)*24*Dr;function On(e,n){return(e%n+n)%n}function Ct(e,n,a){return e<100&&e>=0?new Date(e+400,n,a)-Gt:new Date(e,n,a).valueOf()}function Wt(e,n,a){return e<100&&e>=0?Date.UTC(e+400,n,a)-Gt:Date.UTC(e,n,a)}function vd(e){var n,a;if(e=je(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(a=this._isUTC?Wt:Ct,e){case"year":n=a(this.year(),0,1);break;case"quarter":n=a(this.year(),this.month()-this.month()%3,1);break;case"month":n=a(this.year(),this.month(),1);break;case"week":n=a(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=a(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=a(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=On(n+(this._isUTC?0:this.utcOffset()*Nn),Dr);break;case"minute":n=this._d.valueOf(),n-=On(n,Nn);break;case"second":n=this._d.valueOf(),n-=On(n,Ir);break}return this._d.setTime(n),d.updateOffset(this,!0),this}function yd(e){var n,a;if(e=je(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(a=this._isUTC?Wt:Ct,e){case"year":n=a(this.year()+1,0,1)-1;break;case"quarter":n=a(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=a(this.year(),this.month()+1,1)-1;break;case"week":n=a(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=a(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=a(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=Dr-On(n+(this._isUTC?0:this.utcOffset()*Nn),Dr)-1;break;case"minute":n=this._d.valueOf(),n+=Nn-On(n,Nn)-1;break;case"second":n=this._d.valueOf(),n+=Ir-On(n,Ir)-1;break}return this._d.setTime(n),d.updateOffset(this,!0),this}function cd(){return this._d.valueOf()-(this._offset||0)*6e4}function fd(){return Math.floor(this.valueOf()/1e3)}function hd(){return new Date(this.valueOf())}function bd(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Rd(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function jd(){return this.isValid()?this.toISOString():null}function Td(){return Se(this)}function qd(){return F({},P(this))}function Ad(){return P(this).overflow}function wd(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}O("N",0,0,"eraAbbr"),O("NN",0,0,"eraAbbr"),O("NNN",0,0,"eraAbbr"),O("NNNN",0,0,"eraName"),O("NNNNN",0,0,"eraNarrow"),O("y",["y",1],"yo","eraYear"),O("y",["yy",2],0,"eraYear"),O("y",["yyy",3],0,"eraYear"),O("y",["yyyy",4],0,"eraYear"),x("N",Va),x("NN",Va),x("NNN",Va),x("NNNN",Id),x("NNNNN",Dd),$(["N","NN","NNN","NNNN","NNNNN"],function(e,n,a,t){var o=a._locale.erasParse(e,t,a._strict);o?P(a).era=o:P(a).invalidEra=e}),x("y",Fn),x("yy",Fn),x("yyy",Fn),x("yyyy",Fn),x("yo",Kd),$(["y","yy","yyy","yyyy"],ge),$(["yo"],function(e,n,a,t){var o;a._locale._eraYearOrdinalRegex&&(o=e.match(a._locale._eraYearOrdinalRegex)),a._locale.eraYearOrdinalParse?n[ge]=a._locale.eraYearOrdinalParse(e,o):n[ge]=parseInt(e,10)});function Fd(e,n){var a,t,o,u=this._eras||He("en")._eras;for(a=0,t=u.length;a<t;++a){switch(typeof u[a].since){case"string":o=d(u[a].since).startOf("day"),u[a].since=o.valueOf();break}switch(typeof u[a].until){case"undefined":u[a].until=1/0;break;case"string":o=d(u[a].until).startOf("day").valueOf(),u[a].until=o.valueOf();break}}return u}function Pd(e,n,a){var t,o,u=this.eras(),p,_,S;for(e=e.toUpperCase(),t=0,o=u.length;t<o;++t)if(p=u[t].name.toUpperCase(),_=u[t].abbr.toUpperCase(),S=u[t].narrow.toUpperCase(),a)switch(n){case"N":case"NN":case"NNN":if(_===e)return u[t];break;case"NNNN":if(p===e)return u[t];break;case"NNNNN":if(S===e)return u[t];break}else if([p,_,S].indexOf(e)>=0)return u[t]}function _d(e,n){var a=e.since<=e.until?1:-1;return n===void 0?d(e.since).year():d(e.since).year()+(n-e.offset)*a}function xd(){var e,n,a,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(a=this.clone().startOf("day").valueOf(),t[e].since<=a&&a<=t[e].until||t[e].until<=a&&a<=t[e].since)return t[e].name;return""}function Nd(){var e,n,a,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(a=this.clone().startOf("day").valueOf(),t[e].since<=a&&a<=t[e].until||t[e].until<=a&&a<=t[e].since)return t[e].narrow;return""}function Od(){var e,n,a,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(a=this.clone().startOf("day").valueOf(),t[e].since<=a&&a<=t[e].until||t[e].until<=a&&a<=t[e].since)return t[e].abbr;return""}function Sd(){var e,n,a,t,o=this.localeData().eras();for(e=0,n=o.length;e<n;++e)if(a=o[e].since<=o[e].until?1:-1,t=this.clone().startOf("day").valueOf(),o[e].since<=t&&t<=o[e].until||o[e].until<=t&&t<=o[e].since)return(this.year()-d(o[e].since).year())*a+o[e].offset;return this.year()}function Md(e){return m(this,"_erasNameRegex")||Ia.call(this),e?this._erasNameRegex:this._erasRegex}function Ed(e){return m(this,"_erasAbbrRegex")||Ia.call(this),e?this._erasAbbrRegex:this._erasRegex}function Vd(e){return m(this,"_erasNarrowRegex")||Ia.call(this),e?this._erasNarrowRegex:this._erasRegex}function Va(e,n){return n.erasAbbrRegex(e)}function Id(e,n){return n.erasNameRegex(e)}function Dd(e,n){return n.erasNarrowRegex(e)}function Kd(e,n){return n._eraYearOrdinalRegex||Fn}function Ia(){var e=[],n=[],a=[],t=[],o,u,p,_,S,D=this.eras();for(o=0,u=D.length;o<u;++o)p=Le(D[o].name),_=Le(D[o].abbr),S=Le(D[o].narrow),n.push(p),e.push(_),a.push(S),t.push(p),t.push(_),t.push(S);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+a.join("|")+")","i")}O(0,["gg",2],0,function(){return this.weekYear()%100}),O(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Kr(e,n){O(0,[e,e.length],0,n)}Kr("gggg","weekYear"),Kr("ggggg","weekYear"),Kr("GGGG","isoWeekYear"),Kr("GGGGG","isoWeekYear"),x("G",Fr),x("g",Fr),x("GG",C,he),x("gg",C,he),x("GGGG",ba,ha),x("gggg",ba,ha),x("GGGGG",wr,qr),x("ggggg",wr,qr),rr(["gggg","ggggg","GGGG","GGGGG"],function(e,n,a,t){n[t.substr(0,2)]=V(e)}),rr(["gg","GG"],function(e,n,a,t){n[t]=d.parseTwoDigitYear(e)});function Bd(e){return zt.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Ld(e){return zt.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Yd(){return $e(this.year(),1,4)}function Ud(){return $e(this.isoWeekYear(),1,4)}function $d(){var e=this.localeData()._week;return $e(this.year(),e.dow,e.doy)}function Hd(){var e=this.localeData()._week;return $e(this.weekYear(),e.dow,e.doy)}function zt(e,n,a,t,o){var u;return e==null?ir(this,t,o).year:(u=$e(e,t,o),n>u&&(n=u),Gd.call(this,e,n,a,t,o))}function Gd(e,n,a,t,o){var u=wt(e,n,a,t,o),p=sr(u.year,0,u.dayOfYear);return this.year(p.getUTCFullYear()),this.month(p.getUTCMonth()),this.date(p.getUTCDate()),this}O("Q",0,"Qo","quarter"),x("Q",vt),$("Q",function(e,n){n[Ye]=(V(e)-1)*3});function Cd(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}O("D",["DD",2],"Do","date"),x("D",C,Pn),x("DD",C,he),x("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient}),$(["D","DD"],Ve),$("Do",function(e,n){n[Ve]=V(e.match(C)[0])});var Jt=_n("Date",!0);O("DDD",["DDDD",3],"DDDo","dayOfYear"),x("DDD",Ar),x("DDDD",yt),$(["DDD","DDDD"],function(e,n,a){a._dayOfYear=V(e)});function Wd(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}O("m",["mm",2],0,"minute"),x("m",C,Ra),x("mm",C,he),$(["m","mm"],Fe);var zd=_n("Minutes",!1);O("s",["ss",2],0,"second"),x("s",C,Ra),x("ss",C,he),$(["s","ss"],Ue);var Jd=_n("Seconds",!1);O("S",0,0,function(){return~~(this.millisecond()/100)}),O(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),O(0,["SSS",3],0,"millisecond"),O(0,["SSSS",4],0,function(){return this.millisecond()*10}),O(0,["SSSSS",5],0,function(){return this.millisecond()*100}),O(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),O(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),O(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),O(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),x("S",Ar,vt),x("SS",Ar,he),x("SSS",Ar,yt);var an,Xt;for(an="SSSS";an.length<=9;an+="S")x(an,Fn);function Xd(e,n){n[yn]=V(("0."+e)*1e3)}for(an="S";an.length<=9;an+="S")$(an,Xd);Xt=_n("Milliseconds",!1),O("z",0,0,"zoneAbbr"),O("zz",0,0,"zoneName");function Zd(){return this._isUTC?"UTC":""}function Qd(){return this._isUTC?"Coordinated Universal Time":""}var j=er.prototype;j.add=Hl,j.calendar=Zl,j.clone=Ql,j.diff=id,j.endOf=yd,j.format=ud,j.from=gd,j.fromNow=md,j.to=kd,j.toNow=pd,j.get=lo,j.invalidAt=Ad,j.isAfter=ed,j.isBefore=nd,j.isBetween=rd,j.isSame=ad,j.isSameOrAfter=td,j.isSameOrBefore=sd,j.isValid=Td,j.lang=$t,j.locale=Ut,j.localeData=Ht,j.max=Tl,j.min=jl,j.parsingFlags=qd,j.set=uo,j.startOf=vd,j.subtract=Gl,j.toArray=bd,j.toObject=Rd,j.toDate=hd,j.toISOString=ld,j.inspect=dd,typeof Symbol<"u"&&Symbol.for!=null&&(j[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),j.toJSON=jd,j.toString=od,j.unix=fd,j.valueOf=cd,j.creationData=wd,j.eraName=xd,j.eraNarrow=Nd,j.eraAbbr=Od,j.eraYear=Sd,j.year=ht,j.isLeapYear=oo,j.weekYear=Bd,j.isoWeekYear=Ld,j.quarter=j.quarters=Cd,j.month=qt,j.daysInMonth=ho,j.week=j.weeks=Fo,j.isoWeek=j.isoWeeks=Po,j.weeksInYear=$d,j.weeksInWeekYear=Hd,j.isoWeeksInYear=Yd,j.isoWeeksInISOWeekYear=Ud,j.date=Jt,j.day=j.days=Lo,j.weekday=Yo,j.isoWeekday=Uo,j.dayOfYear=Wd,j.hour=j.hours=Jo,j.minute=j.minutes=zd,j.second=j.seconds=Jd,j.millisecond=j.milliseconds=Xt,j.utcOffset=Ol,j.utc=Ml,j.local=El,j.parseZone=Vl,j.hasAlignedHourOffset=Il,j.isDST=Dl,j.isLocal=Bl,j.isUtcOffset=Ll,j.isUtc=Dt,j.isUTC=Dt,j.zoneAbbr=Zd,j.zoneName=Qd,j.dates=Re("dates accessor is deprecated. Use date instead.",Jt),j.months=Re("months accessor is deprecated. Use month instead",qt),j.years=Re("years accessor is deprecated. Use year instead",ht),j.zone=Re("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Sl),j.isDSTShifted=Re("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Kl);function eu(e){return W(e*1e3)}function nu(){return W.apply(null,arguments).parseZone()}function Zt(e){return e}var B=pa.prototype;B.calendar=Ki,B.longDateFormat=Ui,B.invalidDate=Hi,B.ordinal=Wi,B.preparse=Zt,B.postformat=Zt,B.relativeTime=Ji,B.pastFuture=Xi,B.set=Ii,B.eras=Fd,B.erasParse=Pd,B.erasConvertYear=_d,B.erasAbbrRegex=Ed,B.erasNameRegex=Md,B.erasNarrowRegex=Vd,B.months=vo,B.monthsShort=yo,B.monthsParse=fo,B.monthsRegex=Ro,B.monthsShortRegex=bo,B.week=To,B.firstDayOfYear=wo,B.firstDayOfWeek=Ao,B.weekdays=Vo,B.weekdaysMin=Do,B.weekdaysShort=Io,B.weekdaysParse=Bo,B.weekdaysRegex=$o,B.weekdaysShortRegex=Ho,B.weekdaysMinRegex=Go,B.isPM=Wo,B.meridiem=Xo;function Br(e,n,a,t){var o=He(),u=q().set(t,n);return o[a](u,e)}function Qt(e,n,a){if(R(e)&&(n=e,e=void 0),e=e||"",n!=null)return Br(e,n,a,"month");var t,o=[];for(t=0;t<12;t++)o[t]=Br(e,t,a,"month");return o}function Da(e,n,a,t){typeof e=="boolean"?(R(n)&&(a=n,n=void 0),n=n||""):(n=e,a=n,e=!1,R(n)&&(a=n,n=void 0),n=n||"");var o=He(),u=e?o._week.dow:0,p,_=[];if(a!=null)return Br(n,(a+u)%7,t,"day");for(p=0;p<7;p++)_[p]=Br(n,(p+u)%7,t,"day");return _}function ru(e,n){return Qt(e,n,"months")}function au(e,n){return Qt(e,n,"monthsShort")}function tu(e,n,a){return Da(e,n,a,"weekdays")}function su(e,n,a){return Da(e,n,a,"weekdaysShort")}function iu(e,n,a){return Da(e,n,a,"weekdaysMin")}rn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,a=V(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+a}}),d.lang=Re("moment.lang is deprecated. Use moment.locale instead.",rn),d.langData=Re("moment.langData is deprecated. Use moment.localeData instead.",He);var Ge=Math.abs;function ou(){var e=this._data;return this._milliseconds=Ge(this._milliseconds),this._days=Ge(this._days),this._months=Ge(this._months),e.milliseconds=Ge(e.milliseconds),e.seconds=Ge(e.seconds),e.minutes=Ge(e.minutes),e.hours=Ge(e.hours),e.months=Ge(e.months),e.years=Ge(e.years),this}function es(e,n,a,t){var o=Pe(n,a);return e._milliseconds+=t*o._milliseconds,e._days+=t*o._days,e._months+=t*o._months,e._bubble()}function lu(e,n){return es(this,e,n,1)}function du(e,n){return es(this,e,n,-1)}function ns(e){return e<0?Math.floor(e):Math.ceil(e)}function uu(){var e=this._milliseconds,n=this._days,a=this._months,t=this._data,o,u,p,_,S;return e>=0&&n>=0&&a>=0||e<=0&&n<=0&&a<=0||(e+=ns(Ka(a)+n)*864e5,n=0,a=0),t.milliseconds=e%1e3,o=Te(e/1e3),t.seconds=o%60,u=Te(o/60),t.minutes=u%60,p=Te(u/60),t.hours=p%24,n+=Te(p/24),S=Te(rs(n)),a+=S,n-=ns(Ka(S)),_=Te(a/12),a%=12,t.days=n,t.months=a,t.years=_,this}function rs(e){return e*4800/146097}function Ka(e){return e*146097/4800}function gu(e){if(!this.isValid())return NaN;var n,a,t=this._milliseconds;if(e=je(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+t/864e5,a=this._months+rs(n),e){case"month":return a;case"quarter":return a/3;case"year":return a/12}else switch(n=this._days+Math.round(Ka(this._months)),e){case"week":return n/7+t/6048e5;case"day":return n+t/864e5;case"hour":return n*24+t/36e5;case"minute":return n*1440+t/6e4;case"second":return n*86400+t/1e3;case"millisecond":return Math.floor(n*864e5)+t;default:throw new Error("Unknown unit "+e)}}function Ce(e){return function(){return this.as(e)}}var as=Ce("ms"),mu=Ce("s"),ku=Ce("m"),pu=Ce("h"),vu=Ce("d"),yu=Ce("w"),cu=Ce("M"),fu=Ce("Q"),hu=Ce("y"),bu=as;function Ru(){return Pe(this)}function ju(e){return e=je(e),this.isValid()?this[e+"s"]():NaN}function fn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Tu=fn("milliseconds"),qu=fn("seconds"),Au=fn("minutes"),wu=fn("hours"),Fu=fn("days"),Pu=fn("months"),_u=fn("years");function xu(){return Te(this.days()/7)}var We=Math.round,Sn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Nu(e,n,a,t,o){return o.relativeTime(n||1,!!a,e,t)}function Ou(e,n,a,t){var o=Pe(e).abs(),u=We(o.as("s")),p=We(o.as("m")),_=We(o.as("h")),S=We(o.as("d")),D=We(o.as("M")),pe=We(o.as("w")),ze=We(o.as("y")),tn=u<=a.ss&&["s",u]||u<a.s&&["ss",u]||p<=1&&["m"]||p<a.m&&["mm",p]||_<=1&&["h"]||_<a.h&&["hh",_]||S<=1&&["d"]||S<a.d&&["dd",S];return a.w!=null&&(tn=tn||pe<=1&&["w"]||pe<a.w&&["ww",pe]),tn=tn||D<=1&&["M"]||D<a.M&&["MM",D]||ze<=1&&["y"]||["yy",ze],tn[2]=n,tn[3]=+e>0,tn[4]=t,Nu.apply(null,tn)}function Su(e){return e===void 0?We:typeof e=="function"?(We=e,!0):!1}function Mu(e,n){return Sn[e]===void 0?!1:n===void 0?Sn[e]:(Sn[e]=n,e==="s"&&(Sn.ss=n-1),!0)}function Eu(e,n){if(!this.isValid())return this.localeData().invalidDate();var a=!1,t=Sn,o,u;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(a=e),typeof n=="object"&&(t=Object.assign({},Sn,n),n.s!=null&&n.ss==null&&(t.ss=n.s-1)),o=this.localeData(),u=Ou(this,!a,t,o),a&&(u=o.pastFuture(+this,u)),o.postformat(u)}var Ba=Math.abs;function Mn(e){return(e>0)-(e<0)||+e}function Lr(){if(!this.isValid())return this.localeData().invalidDate();var e=Ba(this._milliseconds)/1e3,n=Ba(this._days),a=Ba(this._months),t,o,u,p,_=this.asSeconds(),S,D,pe,ze;return _?(t=Te(e/60),o=Te(t/60),e%=60,t%=60,u=Te(a/12),a%=12,p=e?e.toFixed(3).replace(/\.?0+$/,""):"",S=_<0?"-":"",D=Mn(this._months)!==Mn(_)?"-":"",pe=Mn(this._days)!==Mn(_)?"-":"",ze=Mn(this._milliseconds)!==Mn(_)?"-":"",S+"P"+(u?D+u+"Y":"")+(a?D+a+"M":"")+(n?pe+n+"D":"")+(o||t||e?"T":"")+(o?ze+o+"H":"")+(t?ze+t+"M":"")+(e?ze+p+"S":"")):"P0D"}var K=Mr.prototype;K.isValid=Pl,K.abs=ou,K.add=lu,K.subtract=du,K.as=gu,K.asMilliseconds=as,K.asSeconds=mu,K.asMinutes=ku,K.asHours=pu,K.asDays=vu,K.asWeeks=yu,K.asMonths=cu,K.asQuarters=fu,K.asYears=hu,K.valueOf=bu,K._bubble=uu,K.clone=Ru,K.get=ju,K.milliseconds=Tu,K.seconds=qu,K.minutes=Au,K.hours=wu,K.days=Fu,K.weeks=xu,K.months=Pu,K.years=_u,K.humanize=Eu,K.toISOString=Lr,K.toString=Lr,K.toJSON=Lr,K.locale=Ut,K.localeData=Ht,K.toIsoString=Re("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Lr),K.lang=$t,O("X",0,0,"unix"),O("x",0,0,"valueOf"),x("x",Fr),x("X",no),$("X",function(e,n,a){a._d=new Date(parseFloat(e)*1e3)}),$("x",function(e,n,a){a._d=new Date(V(e))});//! moment.js
return d.version="2.30.1",g(W),d.fn=j,d.min=ql,d.max=Al,d.now=wl,d.utc=q,d.unix=eu,d.months=ru,d.isDate=w,d.locale=rn,d.invalid=X,d.duration=Pe,d.isMoment=we,d.weekdays=tu,d.parseZone=nu,d.localeData=He,d.isDuration=Er,d.monthsShort=au,d.weekdaysMin=iu,d.defineLocale=Fa,d.updateLocale=nl,d.locales=rl,d.weekdaysShort=su,d.normalizeUnits=je,d.relativeTimeRounding=Su,d.relativeTimeThreshold=Mu,d.calendarFormat=Xl,d.prototype=j,d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},d})})(bi);var Sm=bi.exports;const Ts=Ku(Sm),Mm="_graderesHeader_jfwkn_1",Em="_smalHeader_jfwkn_5",Vm="_notLastRow_jfwkn_9",Im="_placeRemoveButton_jfwkn_13",Dm="_prosentHeader_jfwkn_17",Vn={graderesHeader:Mm,smalHeader:Em,notLastRow:Vm,placeRemoveButton:Im,prosentHeader:Dm},Qe="tidsromPermisjon",qe="graderingPeriode",Km=Zu(9),qs=s=>()=>{const l=s(`${Qe}.${qe}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return l.length>0?$n(l):void 0},As=(s,i,l)=>()=>{const d=s(`${Qe}.${qe}.${i}.periodeFom`),g=s(`${Qe}.${qe}.${i}.periodeTom`);return!g||!d?null:l?Ae(g)(d):Ne(d)(g)},Bm=(s,i)=>l=>s(`${Qe}.${qe}.${i}.arbeidskategoriType`)===dn.ARBEIDSTAKER?A(l):void 0,Lm=s=>{if(s)return s.length===11?Ds(s):Km(s)},ws={periodeFom:"",periodeTom:"",periodeForGradering:"",prosentandelArbeid:"",skalGraderes:!1},Ym=[dn.ARBEIDSTAKER,dn.SELVSTENDIG_NAERINGSDRIVENDE,dn.FRILANSER],Fs=cr(100),Um=s=>s.filter(({kode:i})=>dt.some(l=>l===i)).map(({kode:i,navn:l})=>r.jsx("option",{value:i,children:l},i)),$m=s=>s.filter(({kode:i})=>Ym.some(l=>l===i)).map(({kode:i,navn:l})=>r.jsx("option",{value:i,children:l},i)),Ri=({graderingKvoter:s,readOnly:i,arbeidskategoriTyper:l})=>{const d=H(),{watch:g,control:k,getValues:v,trigger:m,formState:{isSubmitted:f}}=Y(),{fields:c,remove:R,append:w}=fe({control:k,name:`${Qe}.${qe}`}),b=g(`${Qe}.${qe}`);return M.useEffect(()=>{c.length===0&&w(ws)},[]),r.jsx(Oe,{fields:c,emptyPeriodTemplate:ws,bodyText:d.formatMessage({id:"Registrering.Permisjon.Gradering.LeggTilPeriode"}),readOnly:i,remove:R,append:w,children:(F,q,N)=>{const{harSamtidigUttak:P,periodeFom:G}=b[q],Se=G&&Ts(G,qn).isBefore(Ts("2019-01-01")),X=`${Qe}.${qe}.${q}`;return r.jsxs("div",{className:q!==c.length-1?Vn.notLastRow:"",children:[q>0&&r.jsxs(r.Fragment,{children:[r.jsx(rt,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(ee,{wrap:!0,children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(ce,{name:`${X}.periodeForGradering`,selectValues:Um(s),label:d.formatMessage({id:"Registrering.Permisjon.Gradering.Periode"}),validate:[A]})}),r.jsx(T,{children:r.jsx(E,{label:d.formatMessage({id:"Registrering.Permisjon.periodeFom"}),name:`${X}.periodeFom`,validate:[A,I,As(v,q,!0),qs(v)],onChange:()=>f?m():void 0})}),r.jsx(T,{children:r.jsx(E,{label:d.formatMessage({id:"Registrering.Permisjon.periodeTom"}),name:`${X}.periodeTom`,validate:[A,I,As(v,q,!1),qs(v)],onChange:()=>f?m():void 0})}),r.jsx(T,{className:Vn.prosentHeader,children:r.jsx(oe,{label:r.jsx(h,{id:"Registrering.Permisjon.Gradering.Prosentandel"}),name:`${X}.prosentandelArbeid`,validate:[A,Wa,Fs],normalizeOnBlur:J=>Number.isNaN(J)?J:parseFloat(J.toString()).toFixed(2)})}),r.jsx(T,{children:r.jsx(oe,{label:d.formatMessage({id:"Registrering.Permisjon.Orgnr"}),name:`${X}.arbeidsgiverIdentifikator`,validate:[Bm(v,q),mn,Lm]})})]}),r.jsx(y,{eightPx:!0}),r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(ce,{label:d.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${X}.arbeidskategoriType`,selectValues:$m(l),validate:[A],onChange:()=>f?m():void 0})}),r.jsxs(T,{children:[r.jsx("div",{className:Vn.graderesHeader,children:r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.Gradering.SkalGraderes"})})}),r.jsx(ie,{name:`${X}.skalGraderes`,label:" "})]}),r.jsx(T,{children:r.jsxs("div",{className:Vn.smalHeader,children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.Flerbarnsdager"})}),r.jsx(ie,{readOnly:i,name:`${X}.flerbarnsdager`,label:" "})]})}),r.jsxs(T,{children:[r.jsx("div",{className:Vn.smalHeader,children:r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.HarSamtidigUttak"})})}),r.jsx(ie,{name:`${X}.harSamtidigUttak`,label:""})]}),r.jsx(T,{children:P&&r.jsx(oe,{name:`${X}.samtidigUttaksprosent`,validate:[A,Wa,Fs],label:d.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"})})}),N&&r.jsx(T,{className:Vn.placeRemoveButton,children:N()})]}),Se&&r.jsxs("div",{children:[r.jsx(L,{wrap:!0,children:r.jsx(ea,{size:"small",variant:"warning",children:r.jsx(h,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})}),r.jsx(y,{eightPx:!0})]})]})]},F.id)}})};Ri.__docgenInfo={description:`RenderGraderingPeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const zn=({readOnly:s,alleKodeverk:i})=>{const l=i[Q.UTTAK_PERIODE_TYPE],d=i[Q.ARBEIDSKATEGORI],{watch:g}=Y(),k=g(`${Qe}.skalGradere`)||!1;return r.jsxs("div",{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.Gradering.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${Qe}.skalGradere`,label:r.jsx(h,{id:"Registrering.Permisjon.Gradering.GraderUttaket"})}),k&&r.jsx(Ri,{graderingKvoter:l,arbeidskategoriTyper:d,readOnly:s})]})};zn.transformValues=s=>{const i=s[qe];return i?i.map(l=>l.arbeidskategoriType?{...l,erArbeidstaker:l.arbeidskategoriType===dn.ARBEIDSTAKER,erFrilanser:l.arbeidskategoriType===dn.FRILANSER,erSelvstNæringsdrivende:l.arbeidskategoriType===dn.SELVSTENDIG_NAERINGSDRIVENDE}:l):[]};zn.buildInitialValues=()=>({[qe]:[{}],skalGradere:!1});zn.__docgenInfo={description:`PermisjonGraderingPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Je="tidsromPermisjon",on="overforingsperioder",Ps=s=>()=>{const l=s(`${Je}.${on}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return l.length>0?$n(l):void 0},_s={periodeFom:"",periodeTom:"",overforingArsak:""},ji=({selectValues:s,readOnly:i})=>{const l=H(),{control:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:f,append:c}=fe({control:d,name:`${Je}.${on}`});M.useEffect(()=>{m.length===0&&c(_s)},[]);const R=`${Je}.${on}`;return r.jsx(Oe,{fields:m,emptyPeriodTemplate:_s,bodyText:l.formatMessage({id:"Registrering.Permisjon.Utsettelse.LeggTilPeriode"}),readOnly:i,append:c,remove:f,children:(w,b,F)=>r.jsx(ee,{wrap:!0,children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(ce,{name:`${R}.${b}.overforingArsak`,label:b===0?l.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak"}):"",selectValues:s,validate:[A],readOnly:i})}),r.jsxs(r.Fragment,{children:[r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${R}.${b}.periodeFom`,validate:[A,I,()=>{const q=g(`${Je}.${on}.${b}.periodeFom`),N=g(`${Je}.${on}.${b}.periodeTom`);return N&&q?Ae(N)(q):null},Ps(g)],label:b===0?r.jsx(h,{id:"Registrering.Permisjon.OverforingAvKvote.fomDato"}):"",onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${R}.${b}.periodeTom`,validate:[A,I,()=>{const q=g(`${Je}.${on}.${b}.periodeFom`),N=g(`${Je}.${on}.${b}.periodeTom`);return N&&q?Ne(q)(N):null},Ps(g)],label:b===0?r.jsx(h,{id:"Registrering.Permisjon.OverforingAvKvote.tomDato"}):"",onChange:()=>v?k():void 0})}),F&&r.jsx(T,{children:F()})]})]})},w.id)})};ji.__docgenInfo={description:`RenderOverforingAvKvoterFieldArray

Viser inputfelter for dato for bestemmelse av overføring.`,methods:[],displayName:"RenderOverforingAvKvoterFieldArray",props:{selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Hm=(s,i,l)=>i===yr.INSTITUSJONSOPPHOLD_ANNEN_FORELDER?s.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt"}):i===yr.SYKDOM_ANNEN_FORELDER?s.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk"}):l,Gm=(s,i,l,d)=>s.filter(({kode:g})=>l||g!==yr.ALENEOMSORG&&g!==yr.IKKE_RETT_ANNEN_FORELDER).map(({kode:g,navn:k})=>i?r.jsx("option",{value:g,children:k},g):r.jsx("option",{value:g,children:Hm(d,g,k)},g)),ua=({foreldreType:s,alleKodeverk:i,readOnly:l,erEndringssøknad:d})=>{const g=H(),k=i[Q.OVERFOERING_AARSAK_TYPE],v=Gm(k,s===An.MOR,d,g),{watch:m}=Y(),f=m(`${Je}.skalOvertaKvote`)||!1;return r.jsxs(r.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvoten"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:l,name:`${Je}.skalOvertaKvote`,label:r.jsx(h,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvote"})}),f&&r.jsx(ji,{selectValues:v,readOnly:l})]})};ua.buildInitialValues=()=>({skalOvertaKvote:!1,overforingsperioder:[{}]});ua.__docgenInfo={description:`PermisjonOverforingAvKvoterPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const Cm="_notLastRow_pe2tr_1",Wm={notLastRow:Cm},_e="tidsromPermisjon",xe="oppholdPerioder",xs=s=>()=>{const l=s(`${_e}.${xe}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return l.length>0?$n(l):void 0},Ns={periodeFom:"",periodeTom:"",årsak:""},zm=[Ur.UTTAK_MØDREKVOTE_ANNEN_FORELDER,Ur.UTTAK_FEDREKVOTE_ANNEN_FORELDER,Ur.UTTAK_FELLESP_ANNEN_FORELDER,Ur.UTTAK_FORELDREPENGER_ANNEN_FORELDER],Jm=s=>s.filter(({kode:i})=>zm.some(l=>l===i)).map(({kode:i,navn:l})=>r.jsx("option",{value:i,children:l},i)),Ti=({oppholdsReasons:s,readOnly:i})=>{const l=H(),{control:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:f,append:c}=fe({control:d,name:`${_e}.${xe}`});return M.useEffect(()=>{m.length===0&&c(Ns)},[]),r.jsx(Oe,{fields:m,emptyPeriodTemplate:Ns,bodyText:l.formatMessage({id:"Registrering.Permisjon.Opphold.LeggTilPeriode"}),readOnly:i,append:c,remove:f,children:(R,w,b)=>r.jsx("div",{className:w!==m.length-1?Wm.notLastRow:"",children:r.jsx(ee,{wrap:!0,children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:`${_e}.${xe}.${w}.periodeFom`,label:w===0?l.formatMessage({id:"Registrering.Permisjon.periodeFom"}):"",validate:[A,I,()=>{const F=g(`${_e}.${xe}.${w}.periodeFom`),q=g(`${_e}.${xe}.${w}.periodeTom`);return q&&F?Ae(q)(F):null},xs(g)],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${_e}.${xe}.${w}.periodeTom`,label:w===0?l.formatMessage({id:"Registrering.Permisjon.periodeTom"}):"",validate:[A,I,()=>{const F=g(`${_e}.${xe}.${w}.periodeFom`),q=g(`${_e}.${xe}.${w}.periodeTom`);return q&&F?Ne(F)(q):null},xs(g)],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(ce,{name:`${_e}.${xe}.${w}.årsak`,label:w===0?l.formatMessage({id:"Registrering.Permisjon.Opphold.Arsak"}):"",selectValues:Jm(s),validate:[A]})}),b&&r.jsx(T,{children:b()})]})})},R.id)})};Ti.__docgenInfo={description:`RenderOppholdPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av oppholdsperiode.`,methods:[],displayName:"RenderOppholdPeriodeFieldArray",props:{oppholdsReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ga=({readOnly:s,alleKodeverk:i})=>{const l=i[Q.OPPHOLD_ARSAK],{watch:d}=Y(),g=d(`${_e}.skalHaOpphold`)||!1;return r.jsxs("div",{children:[r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.Opphold.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${_e}.skalHaOpphold`,label:r.jsx(h,{id:"Registrering.Permisjon.Opphold.OppholdUttaket"})}),g&&r.jsx(Ti,{oppholdsReasons:l,readOnly:s})]})};ga.buildInitialValues=()=>({[xe]:[{}],skalHaOpphold:!1});ga.__docgenInfo={description:`PermisjonOppholdPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Xm="_flexContainer_1vzu1_1",Zm={flexContainer:Xm},be="tidsromPermisjon",Qm=s=>{const i=s(`${be}.fulltUttak`)||!1,l=s(`${be}.skalGradere`)||!1,d=s(`${be}.skalUtsette`)||!1,g=s(`${be}.skalOvertaKvote`)||!1;return!i&&!l&&!d&&!g},Jn=({foreldreType:s,readOnly:i,alleKodeverk:l,erEndringssøknad:d})=>{var b,F,q,N;const g=H(),{watch:k,setError:v,clearErrors:m,getValues:f,formState:c}=Y(),R=k(`${be}.fulltUttak`)||!1,w=Qm(f);return M.useEffect(()=>{w&&v(`${be}.notRegisteredInput`,{type:"custom",message:g.formatMessage({id:"PermisjonPanel.MinstEnPeriodeRequired"})}),w||m(`${be}.notRegisteredInput`)},[w]),r.jsx(le,{children:r.jsxs("div",{className:Zm.flexContainer,children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{eightPx:!0}),r.jsx(me,{size:"small",children:r.jsx(h,{id:"Registrering.Permisjon.FulltUttak"})}),r.jsx(y,{eightPx:!0}),r.jsx(ie,{readOnly:i,name:`${be}.fulltUttak`,label:r.jsx(h,{id:"Registrering.Permisjon.FulltUttak"})}),R&&r.jsx(la,{sokerErMor:s===An.MOR,readOnly:i,alleKodeverk:l}),r.jsx(y,{twentyPx:!0}),r.jsx(ua,{readOnly:i,foreldreType:s,alleKodeverk:l,erEndringssøknad:d}),r.jsx(y,{twentyPx:!0}),r.jsx(da,{readOnly:i,alleKodeverk:l}),r.jsx(y,{twentyPx:!0}),r.jsx(zn,{readOnly:i,alleKodeverk:l}),r.jsx(y,{twentyPx:!0}),r.jsx(ga,{readOnly:i,alleKodeverk:l}),c.isSubmitted&&((F=(b=c.errors[be])==null?void 0:b.notRegisteredInput)==null?void 0:F.message)&&r.jsx(br,{children:(N=(q=c.errors[be])==null?void 0:q.notRegisteredInput)==null?void 0:N.message})]})})};Jn.transformValues=s=>{var k,v,m,f,c,R,w;const i=s[be],l=i,d=i[De];(k=s.tidsromPermisjon)!=null&&k.fulltUttak&&d&&(l[De]=la.transformValues(d));const g=i[qe];return(v=s.tidsromPermisjon)!=null&&v.skalGradere&&g&&(l[qe]=zn.transformValues(i)),(m=s.tidsromPermisjon)!=null&&m.fulltUttak||(l[De]=void 0),(f=s.tidsromPermisjon)!=null&&f.skalGradere||(l[qe]=void 0),(c=s.tidsromPermisjon)!=null&&c.skalUtsette||(l[gn]=void 0),(R=s.tidsromPermisjon)!=null&&R.skalOvertaKvote||(l[on]=void 0),(w=s.tidsromPermisjon)!=null&&w.skalHaOpphold||(l[xe]=void 0),l};Jn.buildInitialValues=()=>({[be]:{...da.buildInitialValues(),...zn.buildInitialValues(),...ua.buildInitialValues(),...ga.buildInitialValues(),[De]:[{}],fulltUttak:!1}});Jn.__docgenInfo={description:`PermisjonPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const ek=te(ue),Xn=({foreldreType:s,readOnly:i,alleKodeverk:l,erEndringssøknad:d})=>r.jsx(ke,{value:ek,children:r.jsx(Jn,{readOnly:i,foreldreType:s,alleKodeverk:l,erEndringssøknad:d})});Xn.transformValues=Jn.transformValues;Xn.buildInitialValues=Jn.buildInitialValues;Xn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};class nk{constructor(i,l,d){Yr(this,"fagsakYtelseType");Yr(this,"familieHendelseType");Yr(this,"foreldreType");this.fagsakYtelseType=La(i),i===Ln.SVANGERSKAPSPENGER?this.familieHendelseType=se.FODSEL:this.familieHendelseType=La(l),this.foreldreType=La(d)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const Ca=te(ue),qi=({readOnly:s})=>r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:Ca.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ee,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:"termindato",label:Ca.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:s,validate:[A,I]})}),r.jsx(T,{children:r.jsx(E,{name:"foedselsDato",label:Ca.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:s,validate:[I,Un]})})]})})]});qi.__docgenInfo={description:"",methods:[],displayName:"TerminFodselSvpPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const rk="_notLastRow_uwn16_1",ak={notLastRow:rk},tk=cr(100),sk="tilretteleggingArbeidsgiver",ik="tilretteleggingSelvstendigNaringsdrivende",ok="tilretteleggingFrilans",Os={tilretteleggingType:"",dato:"",stillingsprosent:""},Zr=({readOnly:s,name:i})=>{const l=H(),{control:d}=Y(),{fields:g,remove:k,append:v}=fe({control:d,name:i});return M.useEffect(()=>{g.length===0&&v(Os)},[]),r.jsx(Oe,{fields:g,emptyPeriodTemplate:Os,bodyText:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:s,append:v,remove:k,children:(m,f,c)=>r.jsxs("div",{className:f!==g.length-1?ak.notLastRow:"",children:[r.jsx(y,{sixteenPx:!0}),r.jsx(ee,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(ce,{readOnly:s,name:`${i}.${f}.tilretteleggingType`,label:f===0?l.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}):"",validate:[A],selectValues:[r.jsx("option",{value:En.HEL_TILRETTELEGGING,children:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},En.HEL_TILRETTELEGGING),r.jsx("option",{value:En.DELVIS_TILRETTELEGGING,children:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},En.DELVIS_TILRETTELEGGING),r.jsx("option",{value:En.INGEN_TILRETTELEGGING,children:l.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},En.INGEN_TILRETTELEGGING)]})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:s,name:`${i}.${f}.dato`,label:f===0?l.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}):"",validate:[A]})}),r.jsx(T,{children:r.jsx(oe,{readOnly:s,name:`${i}.${f}.stillingsprosent`,label:f===0?l.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}):"",validate:[A,tk],maxLength:99})}),c&&r.jsx(T,{children:c()})]})})]},m.id)})};Zr.__docgenInfo={description:`BehovForTilrettteleggingFieldArray

Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.`,methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Ss="tilretteleggingArbeidsforhold",Ms="tilretteleggingForArbeidsgiver",lk={organisasjonsnummer:"",behovsdato:""},Ai=({readOnly:s})=>{const i=H(),{control:l}=Y(),{fields:d,append:g}=fe({control:l,name:`${Ss}.${Ms}`}),k=()=>{g(lk)},v=`${Ss}.${Ms}`;return r.jsx(r.Fragment,{children:d.map((m,f)=>r.jsxs("div",{children:[r.jsx(ee,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(oe,{readOnly:s,name:`${v}.${f}.organisasjonsnummer`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.OrgNr"}),validate:[A,c=>Qu(c.toString()),eg],maxLength:99})}),r.jsx(T,{children:r.jsx(E,{name:`${v}.${f}.behovsdato`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra"}),validate:[A],isReadOnly:s})})]})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Zr,{name:`${v}.${f}.${sk}`,readOnly:s}),d.length>f+1&&r.jsxs(r.Fragment,{children:[r.jsx("hr",{}),r.jsx(y,{sixteenPx:!0})]}),d.length===f+1&&r.jsx(Ke,{size:"small",variant:"secondary",onClick:k,type:"button",children:r.jsx(h,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})]},m.id))})};Ai.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ie=te(ue),dk="tilretteleggingForArbeidsgiver",ve="tilretteleggingArbeidsforhold",ma=({readOnly:s})=>{var c,R,w,b;const{watch:i,setError:l,clearErrors:d,formState:g}=Y(),k=i(`${ve}.sokForSelvstendigNaringsdrivende`),v=i(`${ve}.sokForFrilans`),m=i(`${ve}.sokForArbeidsgiver`),f=!k&&!v&&!m;return M.useEffect(()=>{f&&l(`${ve}.notRegisteredInput`,{type:"custom",message:Ie.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}),f||d(`${ve}.notRegisteredInput`)},[f]),r.jsx(ke,{value:Ie,children:r.jsxs(le,{children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),r.jsx(y,{sixteenPx:!0}),g.isSubmitted&&((R=(c=g.errors[ve])==null?void 0:c.notRegisteredInput)==null?void 0:R.message)&&r.jsx(br,{children:(b=(w=g.errors[ve])==null?void 0:w.notRegisteredInput)==null?void 0:b.message}),r.jsx(U,{name:`${ve}.sokForSelvstendigNaringsdrivende`,label:r.jsx(h,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),k&&r.jsxs(de,{children:[r.jsx(E,{name:`${ve}.behovsdatoSN`,label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[A],isReadOnly:s}),r.jsx(Zr,{name:`${ve}.${ik}`,readOnly:s})]}),r.jsx(U,{name:`${ve}.sokForFrilans`,label:r.jsx(h,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),v&&r.jsxs(de,{children:[r.jsx(E,{name:`${ve}.behovsdatoFrilans`,label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[A],isReadOnly:s}),r.jsx(Zr,{name:`${ve}.${ok}`,readOnly:s})]}),r.jsx(U,{name:`${ve}.sokForArbeidsgiver`,label:r.jsx(h,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),validate:[A],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),m&&r.jsx(de,{children:r.jsx(Ai,{readOnly:s})})]})})};ma.buildInitialValues=()=>({[ve]:{[dk]:[{}]}});ma.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const uk="_col_hlukm_1",Es={col:uk},Ja="omsorg",Zn=({readOnly:s,soknadData:i,alleKodeverk:l,fodselsdato:d,mottattDato:g})=>r.jsxs(Hs,{justify:"space-between",children:[r.jsxs("div",{className:Es.col,children:[r.jsx(oa,{readOnly:s,soknadData:i}),r.jsx(ye,{readOnly:s,alleKodeverk:l,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,mottattDato:g}),r.jsx(Rr,{readOnly:s})]}),r.jsx("div",{className:Es.col,children:r.jsx(vn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:d})})]});Zn.transformValues=s=>({...ye.transformValues(s),[Ja]:vn.transformValues(s[Ja])});Zn.buildInitialValues=()=>({[Ja]:{},...ye.buildInitialValues()});Zn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"omsorg",value:{name:"TransformedFormValues",required:!1}}]}}]}}},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringAdopsjonOgOmsorgGrid"};const gk="_col_hlukm_1",Vs={col:gk},Xa="omsorg",Qn=({readOnly:s,soknadData:i,alleKodeverk:l,fodselsdato:d,mottattDato:g})=>r.jsxs(Hs,{justify:"space-between",children:[r.jsxs("div",{className:Vs.col,children:[i.getForeldreType()!==An.MOR&&r.jsx(oa,{readOnly:s,soknadData:i}),r.jsx(ye,{readOnly:s,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,alleKodeverk:l,mottattDato:g}),r.jsx(Rr,{readOnly:s})]}),r.jsxs("div",{className:Vs.col,children:[i.getForeldreType()!==An.MOR&&r.jsx(vn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:d}),r.jsx(ot,{readOnly:s,erForeldrepenger:!1})]})]});Qn.transformValues=s=>({...ye.transformValues(s),[Xa]:vn.transformValues(s[Xa])});Qn.buildInitialValues=()=>({...ye.buildInitialValues(),[Xa]:{}});Qn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringFodselGrid"};const mk=(s,i)=>s?Qn.buildInitialValues():i?Zn.buildInitialValues():{},kk=(s,i,l)=>{let d=s;return s.rettigheter===Bn.IKKE_RELEVANT&&(d=Is(s,"rettigheter")),{...d,...i?Qn.transformValues(d):{},...l?Zn.transformValues(d):{}}},wi=({readOnly:s,soknadData:i,alleKodeverk:l,onSubmitUfullstendigsoknad:d,onSubmit:g})=>{const k=i.getFamilieHendelseType()===se.FODSEL,v=i.getFamilieHendelseType()===se.ADOPSJON,m=fr({defaultValues:mk(k,v)}),f=m.watch("foedselsDato"),c=m.watch("mottattDato");return r.jsxs(hr,{formMethods:m,onSubmit:R=>g(kk(R,k,v)),children:[r.jsx(sa,{readOnly:s}),k&&r.jsx(Qn,{soknadData:i,readOnly:s,alleKodeverk:l,fodselsdato:f,mottattDato:c}),v&&r.jsx(Zn,{soknadData:i,readOnly:s,alleKodeverk:l,fodselsdato:f,mottattDato:c}),r.jsx(ta,{readOnly:s,submitting:m.formState.isSubmitting,onSubmitUfullstendigsoknad:d})]})};wi.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const Fi=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:l,soknadData:d,alleKodeverk:g})=>r.jsx(wi,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:l,soknadData:d,alleKodeverk:g});Fi.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Za="omsorg",Qa="frilans",pk=s=>({[Qa]:nn.buildInitialValues(),...en.buildInitialValues(s),...Cn.buildInitialValues(),[Za]:{},...ye.buildInitialValues(),...Xn.buildInitialValues()}),vk=(s,i)=>{let l=s;return s.rettigheter===Bn.IKKE_RELEVANT&&(l=Is(s,"rettigheter")),{...ye.transformValues(l),[Za]:vn.transformValues(l[Za]),[pn]:en.transformValues(l,i),[be]:Xn.transformValues(l),[Qa]:nn.transformValues(l[Qa])}},Pi=({readOnly:s,soknadData:i,alleKodeverk:l,onSubmit:d,onSubmitUfullstendigsoknad:g,fagsakPersonnummer:k,erEndringssøknad:v})=>{const m=fr({defaultValues:M.useMemo(()=>pk(l[Q.ARBEID_TYPE]),[])}),f=l[Q.ARBEID_TYPE],c=m.watch("sokerHarAleneomsorg"),R=m.watch("denAndreForelderenHarRettPaForeldrepenger"),w=!c&&R!==!1,b=m.watch("foedselsDato"),F=m.watch("mottattDato");return r.jsxs(hr,{formMethods:m,onSubmit:q=>d(vk(q,f)),children:[r.jsx(sa,{readOnly:s}),r.jsx(ye,{readOnly:s,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,alleKodeverk:l,mottattDato:F}),r.jsx(Cn,{readOnly:s,alleKodeverk:l}),r.jsx(lt,{readOnly:s,alleKodeverk:l}),r.jsx(nn,{readOnly:s}),r.jsx(en,{readOnly:s,alleKodeverk:l}),r.jsx(vi,{readOnly:s}),i.getFamilieHendelseType()===se.FODSEL&&r.jsx(ot,{readOnly:s,erForeldrepenger:!0}),r.jsx(oa,{readOnly:s,soknadData:i}),r.jsx(vn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),fodselsdato:b,isForeldrepengerFagsak:!0}),r.jsx(Ws,{readOnly:s,permisjonRettigheterPanel:r.jsx(ci,{readOnly:s,denAndreForelderenHarRettPaForeldrepenger:R,sokerErMor:i.getForeldreType()===An.MOR}),alleKodeverk:l,fagsakPersonnummer:k}),r.jsx(Xn,{foreldreType:i.getForeldreType(),readOnly:s,alleKodeverk:l,erEndringssøknad:v}),r.jsx(yi,{annenForelderInformertRequired:w,readOnly:s}),r.jsx(Rr,{readOnly:s}),r.jsx(ta,{readOnly:s,onSubmitUfullstendigsoknad:g,submitting:m.formState.isSubmitting})]})};Pi.__docgenInfo={description:`ForeldrepengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const _i=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:l,soknadData:d,alleKodeverk:g,fagsakPersonnummer:k,erEndringssøknad:v})=>r.jsx(Pi,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:l,soknadData:d,alleKodeverk:g,fagsakPersonnummer:k,erEndringssøknad:v});_i.__docgenInfo={description:"",methods:[],displayName:"ForeldrepengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const et="frilans",yk=s=>({...en.buildInitialValues(s),...Cn.buildInitialValues(),...ye.buildInitialValues(),...ma.buildInitialValues(),[et]:nn.buildInitialValues()}),ck=s=>{let i=[];const{tilretteleggingArbeidsforhold:l}=s;return l!=null&&l.sokForArbeidsgiver&&(l!=null&&l.tilretteleggingForArbeidsgiver)&&(i=i.concat(l.tilretteleggingForArbeidsgiver.map(d=>({"@type":"VI",behovsdato:d.behovsdato,organisasjonsnummer:d.organisasjonsnummer,tilrettelegginger:d.tilretteleggingArbeidsgiver})))),l!=null&&l.sokForFrilans&&i.push({"@type":"FR",behovsdato:l.behovsdatoFrilans,tilrettelegginger:l.tilretteleggingFrilans}),l!=null&&l.sokForSelvstendigNaringsdrivende&&i.push({"@type":"SN",behovsdato:l.behovsdatoSN,tilrettelegginger:l.tilretteleggingSelvstendigNaringsdrivende}),i},fk=(s,i)=>({...ye.transformValues(s),foedselsDato:s.foedselsDato,tilretteleggingArbeidsforhold:ck(s),[et]:nn.transformValues(s[et]),[pn]:en.transformValues(s,i)}),xi=({readOnly:s,soknadData:i,alleKodeverk:l,onSubmit:d,onSubmitUfullstendigsoknad:g})=>{const k=fr({defaultValues:M.useMemo(()=>yk(l[Q.ARBEID_TYPE]),[])}),v=l[Q.ARBEID_TYPE],m=k.watch("mottattDato");return r.jsxs(hr,{formMethods:k,onSubmit:f=>d(fk(f,v)),children:[r.jsx(sa,{readOnly:s}),r.jsx(ye,{readOnly:s,alleKodeverk:l,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,mottattDato:m}),r.jsx(Cn,{readOnly:s,alleKodeverk:l}),r.jsx(lt,{readOnly:s,alleKodeverk:l}),r.jsx(nn,{readOnly:s}),r.jsx(en,{readOnly:s,kunMiliterEllerSiviltjeneste:!0,alleKodeverk:l}),r.jsx(qi,{readOnly:s}),r.jsx(ma,{readOnly:s}),r.jsx(Rr,{readOnly:s}),r.jsx(ta,{readOnly:s,onSubmitUfullstendigsoknad:g,submitting:k.formState.isSubmitting})]})};xi.__docgenInfo={description:`SvangerskapspengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const Ni=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:l,soknadData:d,alleKodeverk:g})=>r.jsx(xi,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:l,soknadData:d,alleKodeverk:g});Ni.__docgenInfo={description:"",methods:[],displayName:"SvangerskapspengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const hk="_container_10p07_1",bk="_colWidth_10p07_5",Rk="_pushRight_10p07_9",ur={container:hk,colWidth:bk,pushRight:Rk},jk=[se.ADOPSJON,se.FODSEL],Oi=({setSoknadData:s,fagsakYtelseType:i,alleKodeverk:l})=>{const d=M.useMemo(()=>({fagsakYtelseType:i,familieHendelseType:void 0,foreldreType:void 0}),[i]),g=fr({defaultValues:d}),k=g.watch("fagsakYtelseType"),v=M.useCallback(R=>s(new nk(R.fagsakYtelseType,R.familieHendelseType,R.foreldreType)),[s]),m=l[Q.FAGSAK_YTELSE],f=l[Q.FAMILIE_HENDELSE_TYPE],c=l[Q.FORELDRE_TYPE];return r.jsx(hr,{formMethods:g,onSubmit:v,children:r.jsxs(le,{className:ur.container,children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.Omsoknaden.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ee,{children:r.jsxs(L,{children:[r.jsxs(T,{className:ur.colWidth,children:[r.jsx(Ze,{children:r.jsx(h,{id:"Registrering.Omsoknaden.soknadstype"})}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:"fagsakYtelseType",validate:[A],radios:m.map(R=>({label:R.navn,value:R.kode,disabled:!!i}))})]}),r.jsxs(T,{className:ur.colWidth,children:[r.jsx(Ze,{children:r.jsx(h,{id:"Registrering.Omsoknaden.Tema"})}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:"familieHendelseType",validate:k===Ln.SVANGERSKAPSPENGER?[]:[A],radios:f.filter(({kode:R})=>jk.some(w=>w===R)).map(R=>({label:R.navn,value:R.kode,disabled:k===Ln.SVANGERSKAPSPENGER}))})]}),r.jsxs(T,{className:ur.colWidth,children:[r.jsx(Ze,{children:r.jsx(h,{id:"Registrering.Omsoknaden.Soker"})}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:"foreldreType",validate:[A],radios:c.map(R=>({label:R.navn,value:R.kode}))})]})]})}),r.jsx(y,{thirtyTwoPx:!0}),r.jsx("div",{className:ur.pushRight,children:r.jsx(Ke,{size:"small",variant:"primary",onClick:Ys,disabled:g.formState.isSubmitting||g.formState.isSubmitted,children:r.jsx(h,{id:"Registrering.Omsoknaden.VisSkjema"})})})]})})};Oi.__docgenInfo={description:`SoknadTypePickerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Si={"Registrering.RegistrereSoknad":"Registrere søknad","Registrering.RegistrerAlleOpplysninger":"Registrer inn alle opplysninger fra papirsøknaden","Registrering.Omsoknaden.Title":"Om søknaden","Registrering.Omsoknaden.soknadstype":"Søknadstype","Registrering.Omsoknaden.Tema":"Tema","Registrering.Omsoknaden.Soker":"Søker","Registrering.Omsoknaden.VisSkjema":"Vis skjema","SoknadRegistrertModal.ContentLabel":"Søknaden er registrert. Du kommer nå til forsiden.","SoknadRegistrertModal.InfoTextOne":"Søknaden er registrert og vil bli behandlet","SoknadRegistrertModal.InfoTextTwo":"Du kommer nå til forsiden","SoknadRegistrertModal.OkButtonText":"OK"},Tk="_panel_nx0ko_1",qk={panel:Tk},Ak=te(Si),Mi=({fagsak:s,kodeverk:i,readOnly:l,lagreUfullstendig:d,lagreFullstendig:g,erEndringssøknad:k})=>{const[v,m]=M.useState(),f=M.useCallback(R=>(v&&g(R,v.fagsakYtelseType,v.familieHendelseType,v.foreldreType),Promise.resolve()),[v]),c=M.useCallback(()=>(v&&d(v.fagsakYtelseType,v.familieHendelseType,v.foreldreType),Promise.resolve()),[v]);return r.jsx(ke,{value:Ak,children:r.jsxs(Lu,{className:qk.panel,children:[r.jsx(ne,{size:"small",children:r.jsx(h,{id:"Registrering.RegistrereSoknad"})}),r.jsx(y,{sixteenPx:!0}),!l&&r.jsx(Yu,{children:r.jsx(h,{id:"Registrering.RegistrerAlleOpplysninger"},"regOpplysninger")}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{sixteenPx:!0}),r.jsx(Oi,{setSoknadData:m,fagsakYtelseType:s.fagsakYtelseType,alleKodeverk:i}),v&&v.getFagsakYtelseType()===Ln.ENGANGSSTONAD&&r.jsx(Fi,{onSubmitUfullstendigsoknad:c,onSubmit:f,readOnly:l,soknadData:v,alleKodeverk:i}),v&&v.getFagsakYtelseType()===Ln.FORELDREPENGER&&r.jsx(_i,{onSubmitUfullstendigsoknad:c,onSubmit:f,readOnly:l,soknadData:v,alleKodeverk:i,fagsakPersonnummer:s.bruker.fødselsnummer,erEndringssøknad:k}),v&&v.getFagsakYtelseType()===Ln.SVANGERSKAPSPENGER&&r.jsx(Ni,{onSubmitUfullstendigsoknad:c,onSubmit:f,readOnly:l,soknadData:v,alleKodeverk:i})]})})};Mi.__docgenInfo={description:"",methods:[],displayName:"RegistrerPapirsoknadPanel",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
) => Promise<any>`,signature:{arguments:[{type:{name:"any"},name:"formValues"},{type:{name:"string"},name:"fagsakYtelseType"},{type:{name:"string"},name:"familieHendelseType"},{type:{name:"string"},name:"foreldreType"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const wk="_alertStyle_1d8gt_1",Fk="_modalStyle_1d8gt_6",Pk="_fullWidth_1d8gt_11",_k="_reduceMargin_1d8gt_16",xk="_left_1d8gt_20",Nk="_right_1d8gt_24",In={alertStyle:wk,modalStyle:Fk,fullWidth:Pk,reduceMargin:_k,left:xk,right:Nk},gr=te(Si),Ei=({isOpen:s=!1})=>r.jsx(ke,{value:gr,children:r.jsx(Xe,{className:In.modalStyle,open:s,"aria-label":gr.formatMessage({id:"SoknadRegistrertModal.ContentLabel"}),onClose:()=>{},children:r.jsx(Xe.Body,{children:r.jsxs(ea,{size:"small",variant:"success",className:In.alertStyle,children:[r.jsxs("div",{className:In.left,children:[r.jsx("p",{className:In.reduceMargin,children:gr.formatMessage({id:"SoknadRegistrertModal.InfoTextOne"})}),r.jsx("p",{className:In.reduceMargin,children:gr.formatMessage({id:"SoknadRegistrertModal.InfoTextTwo"})})]}),r.jsx("div",{className:In.right,children:r.jsx(Bs,{to:"/",children:r.jsx(Ke,{size:"small",variant:"primary",children:gr.formatMessage({id:"SoknadRegistrertModal.OkButtonText"})})})})]})})})});Ei.__docgenInfo={description:`SoknadRegistrertModal

Informasjonsmodal som vises til saksbehandler når en papirsøknad har blitt registrert.`,methods:[],displayName:"SoknadRegistrertModal",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ok=s=>s.map(i=>i.definisjon).filter(i=>i===mr.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD||i===mr.REGISTRER_PAPIRSOKNAD_FORELDREPENGER||i===mr.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER||i===mr.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER)[0],Sk=(s,i,l,d)=>(g,k,v,m)=>{const f=[{"@type":Ok(s.aksjonspunkt),tema:v,soknadstype:k,soker:m,...g}],c={saksnummer:i.saksnummer,behandlingUuid:s.uuid,behandlingVersjon:s.versjon,bekreftedeAksjonspunktDtoer:f};return l(c).then(R=>{var w;((w=R==null?void 0:R.taskStatus)==null?void 0:w.status)!==ig.HALTED&&d(!0)})},Vi=({fagsak:s,behandling:i,kodeverk:l,rettigheter:d,lagreAksjonspunkt:g})=>{const[k,v]=M.useState(!1),m=!d.writeAccess.isEnabled||i.behandlingPaaVent,f=M.useMemo(()=>Sk(i,s,g,v),[i,s,g,v]),c=M.useCallback((F,q,N)=>f({ufullstendigSoeknad:!0},F,q,N),[f]),R=ng(),w=M.useCallback(()=>{R("/")},[]);if(!i.aksjonspunkt)return r.jsx(Uu,{});const b=i.aksjonspunkt.some(F=>F.definisjon===mr.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER);return r.jsxs(r.Fragment,{children:[r.jsx(rg,{behandling:i,kodeverk:l,opneSokeside:w}),r.jsx(Ei,{isOpen:k}),r.jsx(Mi,{fagsak:s,kodeverk:l,readOnly:m,lagreUfullstendig:c,lagreFullstendig:f,erEndringssøknad:b})]})};Vi.__docgenInfo={description:`RegisterPapirsoknad

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
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]},{name:"undefined"}]}],raw:"Promise<Behandling | undefined>"}}},description:""}}};const Mk=(s,i)=>{M.useEffect(()=>{i&&s(i)},[i])},Ek=({behandling:s,setBehandling:i,kodeverk:l,fagsak:d,rettigheter:g})=>{const{startRequest:k,data:v}=ag.useRestApiRunner(tg.SAVE_AKSJONSPUNKT);return Mk(i,v),r.jsx(Vi,{behandling:s,fagsak:d,kodeverk:l,rettigheter:g,lagreAksjonspunkt:k})};Ek.__docgenInfo={description:"",methods:[],displayName:"BehandlingPapirsoknadIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}}]}},description:""}}};export{Ek as default};
