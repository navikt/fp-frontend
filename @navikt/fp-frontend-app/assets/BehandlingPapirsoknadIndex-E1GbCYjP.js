var Mu=Object.defineProperty;var Iu=(s,i,o)=>i in s?Mu(s,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[i]=o;var Dr=(s,i,o)=>(Iu(s,typeof i!="symbol"?i+"":i,o),o);import{a as H,j as r,H as ne,t as re,P as ke,L as me,N as An,D as Ze,M as Xe,B as Ds,c as Be,E as kr,X as Bs,aq as Kt,b as Ks,O as Ls}from"./index.es-wB6XluAU.js";import{r as V,R as Zr,c as Du,g as Bu}from"./index-DogsOklH.js";import{a as Q,M as L,B as T,g as y,l as oe,F as c,T as de,A as Qr,E as Ku,k as na,d as Lu,i as Yu,O as Uu}from"./index.es-VLz0Qp7m.js";import{u as Y,x as he,ah as Se,c as E,a as q,d as M,o as qe,y as Oe,K as ee,t as ie,C as le,ax as $u,U as Ys,ay as Hu,T as U,b as fe,M as gn,_ as Kn,s as Us,N as pr,n as Ke,I as ra,az as $s,w as Hs,Z as ta,e as Gs,aA as se,aB as Gu,ae as Yn,aC as Cu,aD as Wu,aE as zu,f as vr,O as yr,a0 as as,v as Ju,ab as Wt,aF as Xu,aG as Zu,aH as Qu,L as ss,aI as eg,H as dr,E as ng,r as rg,B as tg}from"./AppIndex.stories-iobepKve.js";import{A as ag}from"./useRestApiRunner-PcoO3Hjx.js";import{I as sg,z as Wr}from"./index.es-tCBKjOwM.js";import{l as aa}from"./landkoder-Wz63K8Ht.js";import{c as ig}from"./bind-cEaHbfSo.js";import{u as on}from"./uttakPeriodeType-_M3Ql49Z.js";import{c as lg}from"./_commonjs-dynamic-modules-h-SxKiO4.js";import{o as Br}from"./oppholdArsakType--Dq9A5kS.js";import{t as En}from"./tilretteleggingType-I74FMfK5.js";import"./index-MroJ3egt.js";import"./index.es-xCUPCghm.js";import"./extends-dGVwEr9R.js";import"./iframe-pNcD7qIh.js";import"../sb-preview/runtime.js";import"./SettPaVentReadOnlyModal-8a7ivy8O.js";import"./nb_NO-gZ1VBSkh.js";const Tn={FISKER:"FISKER",ARBEIDSTAKER:"ARBEIDSTAKER",SELVSTENDIG_NAERINGSDRIVENDE:"SELVSTENDIG_NÆRINGSDRIVENDE",KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NAERINGSDRIVENDE:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",SJOMANN:"SJØMANN",JORDBRUKER:"JORDBRUKER",DAGPENGER:"DAGPENGER",INAKTIV:"INAKTIV",KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",KOMBINASJON_ARBEIDSTAKER_OG_FISKER:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",FRILANSER:"FRILANSER",KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",DAGMAMMA:"DAGMAMMA",ANNET:"ANNET"},Kr={LONN_UNDER_UTDANNING:"LØNN_UNDER_UTDANNING",UTENLANDSK_ARBEIDSFORHOLD:"UTENLANDSK_ARBEIDSFORHOLD",FRILANSER:"FRILANSER",MILITÆR_ELLER_SIVILTJENESTE:"MILITÆR_ELLER_SIVILTJENESTE"},Ln={MOR:"MOR",FAR:"FAR",MEDMOR:"MEDMOR",MEDFAR:"MEDFAR",TREDJE_PART:"TREDJE_PART"},Lt={UKJENT_FORELDER:"UKJENT_FORELDER",IKKE_NORSK_FNR:"IKKE_NORSK_FNR"},ur={FISKE:"FISKE",FRILANSER:"FRILANSER",DAGMAMMA:"DAGMAMMA",JORDBRUK_ELLER_SKOGBRUK:"JORDBRUK_SKOGBRUK",ANNEN:"ANNEN"},zr={INSTITUSJONSOPPHOLD_ANNEN_FORELDER:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",SYKDOM_ANNEN_FORELDER:"SYKDOM_ANNEN_FORELDER",ALENEOMSORG:"ALENEOMSORG",IKKE_RETT_ANNEN_FORELDER:"IKKE_RETT_ANNEN_FORELDER",UDEFINERT:"-"},og="_notLastRow_7c46s_1",dg={notLastRow:og},mn="andreYtelser",sa="PERIODER",Lr=(s,i)=>s(i),et=({readOnly:s,name:i})=>{const o=H(),{getValues:d,control:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:h,append:f}=he({control:g,name:`${mn}.${i}`});return r.jsx(Se,{fields:m,bodyText:o.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:s,append:f,remove:h,children:(j,F,b)=>{const w=`${mn}.${i}.${F}`;return r.jsxs("div",{children:[r.jsx("div",{className:F!==m.length-1?dg.notLastRow:"",children:r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:`${w}.periodeFom`,label:F===0?o.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[q,M,()=>{const A=Lr(d,`${w}.periodeFom`),O=Lr(d,`${w}.periodeTom`);return O&&A?qe(O)(A):null}],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${w}.periodeTom`,label:F===0?o.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[q,M,()=>{const A=Lr(d,`${w}.periodeFom`),O=Lr(d,`${w}.periodeTom`);return O&&A?Oe(A)(O):null}],onChange:()=>v?k():void 0})}),b&&r.jsx(T,{children:b()})]})})}),r.jsx(y,{sixteenPx:!0})]},j.id)}})};et.transformValues=(s,i)=>s.map(o=>({ytelseType:i,periodeFom:o.periodeFom,periodeTom:o.periodeTom}));et.__docgenInfo={description:`RenderAndreYtelserPerioderFieldArray

Viser inputfelter for fra og til dato for perioder for andre ytelser`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"FormValues[]"}},{name:"ytelseType",optional:!1,type:{name:"string"}}],returns:{type:{name:"any"}}}],displayName:"RenderAndreYtelserPerioderFieldArray"};const Cs=(s,i)=>i?s.filter(o=>o.kode===Kr.MILITÆR_ELLER_SIVILTJENESTE):s.filter(o=>o.kode!==Kr.UTENLANDSK_ARBEIDSFORHOLD&&o.kode!==Kr.FRILANSER&&o.kode!==Kr.LONN_UNDER_UTDANNING),Un=({readOnly:s,kunMiliterEllerSiviltjeneste:i=!1,alleKodeverk:o})=>{const{watch:d}=Y(),g=d(mn),k=o[ee.ARBEID_TYPE],v=V.useMemo(()=>Cs(k,i),[i]);return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.AndreYtelser.Title"})}),r.jsx(y,{sixteenPx:!0}),v.map(m=>{const h=`${m.kode}_${sa}`;return r.jsxs(Zr.Fragment,{children:[r.jsx(ie,{name:`${mn}.${m.kode}`,label:m.navn,readOnly:s},m.kode),g&&g[m.kode]&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{children:r.jsx(et,{name:h,readOnly:s})})]})]},m.kode)})]})};Un.buildInitialValues=s=>{const i={};return Cs(s).forEach(o=>{const d=`${o.kode}_${sa}`;i[d]=[{}]}),{[mn]:i}};Un.transformValues=(s,i)=>{const o=s[mn],d=[];return i.filter(g=>o&&o[g.kode]).forEach(g=>{const k=`${g.kode}_${sa}`,v=o?o[k]:void 0;v&&et.transformValues(v,g.kode).forEach(m=>d.push(m))}),d};Un.__docgenInfo={description:`AndreYtelserPanel

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
}>`}],raw:"KodeverkMedNavn[]"}}],returns:{type:{name:"any"}}}],displayName:"AndreYtelserPanel",props:{kunMiliterEllerSiviltjeneste:{defaultValue:{value:"false",computed:!1},required:!1}}};const ue={"Registrering.AndreYtelser.periodeTom":"T.o.m.","Registrering.AndreYtelser.periodeFom":"F.o.m.","Registrering.AndreYtelser.Title":"Andre inntektskilder","Registrering.TheOtherParent.CannotSpecifyOtherParent":"Kan ikke oppgi annen forelder","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title":"Angi årsak","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1":"Forelder er ukjent","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2":"Har ikke norsk f.nr. eller d-nr.","Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer":"Utenlandsk fødselsnummer","Registrering.TheOtherParent.CannotSpecifyOtherParent.Land":"Land","Registrering.TheOtherParent.Title":"Den andre forelderen","Registrering.TheOtherParent.Fodselsnummer":"Fødselsnummer/D-nummer","Registrering.Permisjon.SøkerHarAleneomsorg":"Har søker aleneomsorg for barnet?","Registrering.Permisjon.SøkerHarAleneomsorg.Yes":"Ja","Registrering.Permisjon.SøkerHarAleneomsorg.No":"Nei","Registrering.Permisjon.HarRettPaForeldrepenger":"Har den andre forelderen rett på foreldrepenger?","Registrering.Permisjon.HarRettPaForeldrepenger.Yes":"Ja","Registrering.Permisjon.HarRettPaForeldrepenger.No":"Nei","Registrering.Permisjon.MorUføretrygd":"Bare far rett og mor mottar uføretryd?","Registrering.Permisjon.MorUføretrygd.Yes":"Ja","Registrering.Permisjon.MorUføretrygd.No":"Nei","Registrering.Permisjon.AnnenForelderRettEØS":"Annen forelder har tilstrekkelig opptjening fra land i EØS?","Registrering.Permisjon.AnnenForelderRettEØS.Yes":"Ja","Registrering.Permisjon.AnnenForelderRettEØS.No":"Nei","Registrering.TerminOgFodsel":"Opplysninger om termin og fødsel","Registrering.Termin.Fodt":"Er barnet født?","Registrering.Fodsel.ErFodt":"Ja","Registrering.Fodsel.ErIkkeFodt":"Nei","Registrering.Termindato":"Termindato","Registrering.AntallBarn":"Antall barn","Registrering.UtstedtDato":"Utstedt dato fra terminbekreftelsen","Registrering.Fodselsdato":"Når ble barnet født?","Registrering.RettTilPrematuruker":"Rett til prematuruker vil kun sjekkes når du også oppgir termindato","Registrering.Frilans.Title":"Frilanser","Registrering.Frilans.HarFrilansvirksomhet":"Har søker periode med frilansvirksomhet?","Registrering.Frilans.OppgiPeriode":"Oppgi periode med frilansvirksomhet","Registrering.Frilans.Yes":"Ja","Registrering.Frilans.No":"Nei","Registrering.Frilans.periodeTom":"T.o.m.","Registrering.Frilans.periodeFom":"F.o.m.","Registrering.Frilans.ErNyoppstartedFrilanser":"Er søker nyoppstartet frilanser?","Registrering.Frilans.HarInntektFraForsterhjem":"Har søker inntekt fra fosterhjem?","Registrering.FrilansOppdrag.HarHattOppdragForFamilie":"Har søker hatt oppdrag for nær familie?","Registrering.FrilansOppdrag.Yes":"Ja","Registrering.FrilansOppdrag.No":"Nei","Registrering.FrilansOppdrag.OppgiPeriode":"Oppgi periode","Registrering.FrilansOppdrag.FieldArray.periodeFom":"F.o.m.","Registrering.FrilansOppdrag.FieldArray.periodeTom":"T.o.m.","Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver":"Oppdragsgiver","Registrering.FrilansOppdrag.FieldArray.NyPeriode":"Legg til periode","Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation":"F.o.m må være lik eller etter dato for første periode med frilansvirksomhet","Registrering.InntektsgivendeArbeid.ArbeidINorge.Title":"Inntektsgivende arbeid i Norge","Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold":"Vedtaksløsningen foretar oppslag av norske arbeidsforhold fra Aa-registeret så dette skal ikke registreres her","Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title":"Inntektsgivende arbeid i utlandet","Registrering.InntektsgivendeArbeid.ArbeidPaAmbassade":"Arbeid som ambassadepersonell i Norge","Registrering.InntektsgivendeArbeid.Arbeidsgiver":"Arbeidsgiver","Registrering.InntektsgivendeArbeid.Virksomhetsnummer":"Virksomhetsnummer","Registrering.InntektsgivendeArbeid.Land":"Land","Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold":"Legg til utenlandsk arbeidsforhold","Registrering.InntektsgivendeArbeid.Yes":"Ja, arbeidsgiver og søker er nære venner eller i familie","Registrering.InntektsgivendeArbeid.No":"Nei, arbeidsgiver og søker er ikke nære venner eller i familie","Registrering.InntektsgivendeArbeid.Relasjon":"Relasjon","Registrering.InntektsgivendeArbeid.Placeholder":"Placeholder - Oppslag av arbeidsforhold","Registrering.InntektsgivendeArbeid.periodeFom":"Fra og med","Registrering.InntektsgivendeArbeid.periodeTom":"Til og med","ModalLukkPapirSoknad.ModalDescription":"Registrering av søknaden avsluttes","ModalLukkPapirSoknad.Avslutt":"Avslutt registrering av søknaden","ModalLukkPapirSoknad.AvslutterRegistrering":"Avslutter registrering av søknaden. Det er ikke mulig å innhente ytterligere opplysninger.","ModalLukkPapirSoknad.BekreftAvslag":"Bekreft at søknaden skal avslås","ModalLukkPapirSoknad.Ok":"OK","ModalLukkPapirSoknad.Avbryt":"Avbryt","Registrering.SaveApplication.Title":"Ferdigstill registrering","Registrering.SaveApplication.Description":"Ved endring av opplysningene er begrunnelse obligatorisk","Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt":"Søkers opplysningsplikt er ikke overholdt","Registrering.SaveApplication.EndButton":"Bekreft og avslutt behandling","Registrering.SaveApplication.SaveButton":"Bekreft og fortsett","Registrering.Verge":"Verge/fullmektig skal knyttes til saken","Registrering.Omsoknaden.MottattDato":"Mottatt dato","Registrering.Adopsjon.FodselsdatoBarnN":"Fødselsdato barn {n}","Registrering.Adopsjon.Title":"Adopsjon","Registrering.Adopsjon.OmsorgTitle":"Omsorg","Registrering.Adopsjon.GjelderEktefellesBarn":"Gjelder adopsjon ektefelles/samboers barn?","Registrering.Adopsjon.Ja":"Ja","Registrering.Adopsjon.Nei":"Nei","Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Dato for omsorgsovertakelse/stebarnsadopsjon","Registrering.Adopsjon.DatoForOvertakelsen":"Dato for omsorgsovertakelsen","Registrering.Adopsjon.Ankomstdato":"Ankomstdato","Registrering.Adopsjon.AntallBarn":"Antall barn","Registrering.RegistreringOpphold.AngiOpphold":"Oppgi hvilket land og i hvilken periode","Registrering.RegistreringOpphold.Add":"Legg til","Registrering.RegistreringOpphold.periodeFom":"F.o.m.","Registrering.RegistreringOpphold.periodeTom":"T.o.m.","Registrering.RegistreringOpphold.Country":"Land","Registrering.Opphold":"Opphold i Norge","Registrering.OppholdVedAdopsjon":"Søker oppholder seg i Norge nå","Registrering.Opphold.Yes":"Ja","Registrering.Opphold.No":"Nei","Registrering.OppholdVedFodsel":"Bor i Norge ved fødselstidspunktet","Registrering.OppholdNesteTolv":"Bor i Norge de neste 12 månedene","Registrering.OppholdSisteTolv":"Bodd i Norge de siste 12 månedene","Registrering.Rettigheter.AnnenForelderDoed":"Den andre forelderen er død","Registrering.Rettigheter.OvertaForeldreansvaretAlene":"Omsorgen er overtatt med sikte på å overta foreldreansvaret alene","Registrering.Rettigheter.MannAdoptererAlene":"Mann adopterer alene","Registrering.Rettigheter.IkkeRelevant":"Ikke relevant","Registrering.Rettigheter.Title":"Rettigheter","Registrering.Sprak":"Språk","Registrering.Sprak.Bokmal":"Bokmål","Registrering.Sprak.Nynorsk":"Nynorsk","Registrering.Sprak.Engelsk":"Engelsk","Registrering.VirksomhetNaeringTypePanel.Title":"Type næringsvirksomhet","Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet":"Er søker ny i arbeidslivet","Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged":"Er virksomheten blitt varig endret, nyoppstartet eller er søker ny i arbeidslivet?","Registrering.VirksomhetStartetPanel.Yes":"Ja","Registrering.VirksomhetStartetPanel.No":"Nei","Registrering.VirksomhetStartetPanel.Reason":"Årsak","Registrering.VirksomhetStartetPanel.HarVarigEndring":"Varig endring i næring","Registrering.VirksomhetStartetPanel.GjeldendeFom":"Gjeldende f.o.m.","Registrering.VirksomhetStartetPanel.ErNyoppstartet":"Nyoppstartet næring","Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse":"Beskriv endringen i næring","Registrering.VirksomhetStartetPanel.Inntekt":"Årsinntekt","Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak":"Må fylle ut minst en årsak","Registrering.VirksomhetRelasjonPanel.Relation":"Relasjon","Registrering.VirksomhetRelasjonPanel.No":"Nei, har ikke nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRelasjonPanel.Yes":"Ja, har nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRegnskapPanel.Accountant":"Har søker regnskapsfører eller revisor?","Registrering.VirksomhetRegnskapPanel.Yes":"Ja","Registrering.VirksomhetRegnskapPanel.No":"Nei","Registrering.VirksomhetRegnskapPanel.AccountantName":"Navn på regnskapsfører/revisor?","Registrering.VirksomhetRegnskapPanel.AccountantPhone":"Telefonnummer til regnskapsfører/revisor?","Registrering.VirksomhetIdentifikasjonPanel.Name":"Navn på foretaket","Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway":"Er næringsvirksomheten registrert i Norge","Registrering.VirksomhetIdentifikasjonPanel.No":"Nei","Registrering.VirksomhetIdentifikasjonPanel.Yes":"Ja","Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber":"Virksomhetsnummer","Registrering.VirksomhetIdentifikasjonPanel.Country":"Hvilket land er virksomheten registrert i?","Registrering.VirksomhetIdentifikasjonPanel.periodeFom":"Fra og med","Registrering.VirksomhetIdentifikasjonPanel.periodeTom":"Til og med","Registrering.EgenVirksomhet.Title":"Egen næringsvirksomhet","Registrering.EgenVirksomhet.Yes":"Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.EgenVirksomhet.No":"Nei, søker har ikke arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.RegistrerVirksomhetPanel.Add":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetPanel.Name":"Navn på virksomhet","Registrering.RegistrerVirksomhetPanel.ArrayMinLength":"Listen må ha lengde større enn 1","Registrering.RegistrerVirksomhetModalForm.ModalDescription":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetModalForm.Title":"Egen næringsvirksomhet","Registrering.RegistrerVirksomhetModalForm.Save":"Lagre","Registrering.RegistrerVirksomhetModalForm.Cancel":"Avbryt","BehovForTilretteleggingPanel.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilretteleggingPanel.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende":"Søkes det om svangerskapspenger som selvstendig næringsdrivende?","BehovForTilretteleggingPanel.Ja":"Ja","BehovForTilretteleggingPanel.Nei":"Nei","BehovForTilretteleggingPanel.SokForFrilans":"Søkes det om svangerskapspenger som frilanser?","BehovForTilretteleggingPanel.SokForArbeidsgiver":"Søkes det om svangerskapspenger som arbeidstaker?","BehovForTilretteleggingPanel.MinstEnMaaVereJa":"Minst ett av spørsmålene må besvares med alternativ Ja","BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov":"Legg til tilretteleggingsbehov","BehovForTilrettteleggingFieldArray.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilrettteleggingFieldArray.FraDato":"Fra dato","BehovForTilrettteleggingFieldArray.Stillingsprosent":"Stillingsprosent","BehovForTilrettteleggingFieldArray.KanGjennomfores":"a) kan gjennomføres slik at arbeidstakeren kan fortsette med samme stilling fra og med","BehovForTilrettteleggingFieldArray.RedusertArbeid":"b) kan gjennomføres slik at arbeidstakeren kan fortsette med redusert arbeidstid fra og med","BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores":"c) kan ikke gjennomføres og arbeidstakeren må midlertidig gå ut av sitt arbeid fra og med","TilretteleggingForArbeidsgiverFieldArray.OrgNr":"Arbeidsgivers orgnr/fnr","TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver":"Legg til arbeidsgiver","TerminFodselSvpPanel.TerminOgFodsel":"Opplysninger om termin og fødsel","TerminFodselSvpPanel.Termindato":"Termindato","TerminFodselSvpPanel.Fodselsdato":"Fødselsdato","Registrering.Dekningsgrad.Title":"Dekningsgrad","Registrering.Dekningsgrad.prosent.80":"80 prosent","Registrering.Dekningsgrad.prosent.100":"100 prosent","Registrering.Permisjon.Title":"Tidsrom for permisjon","Registrering.Permisjon.PermisjonForFodsel":"Permisjon før fødsel","Registrering.Permisjon.PerioderForeldrepenger":"Perioder med permisjon med foreldrepenger","Registrering.Permisjon.FulltUttak":"Fullt uttak","Registrering.Permisjon.FedrekvoteEllerMedmorkvote":"Fedrekvote eller kvote til medmor","Registrering.Permisjon.AngiPeriode":"Angi periode","Registrering.Permisjon.periodeType":"Periodetype","Registrering.Permisjon.nyPeriode":"Legg til periode","Registrering.Permisjon.periodeFom":"F.o.m.","Registrering.Permisjon.periodeTom":"T.o.m.","Registrering.Permisjon.SamtidigUttaksprosent":"Prosentandel uttak","Registrering.Permisjon.ArbeidskategoriLabel":"Type arbeid","Registrering.Permisjon.ErArbeidstaker":"Arbeidstaker","Registrering.Permisjon.ErIkkeArbeidstaker":"Selvstendig næringsdrivende/frilanser","Registrering.Permisjon.Orgnr":"Virksomhetsnummer","Registrering.Permisjon.OverforingAvKvote.OvertaKvoten":"Overføring av kvote","Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak":"Angi årsak","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt":"Mor er innlagt på helseinstitusjon","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk":"Mor er pga sykdom avhengig av hjelp for å ta seg av barnet/barna","Registrering.Permisjon.OverforingAvKvote.OvertaKvote":"Søker ønsker å overta kvote","Registrering.Permisjon.OverforingAvKvote.fomDato":"F.o.m.","Registrering.Permisjon.OverforingAvKvote.tomDato":"T.o.m.","Registrering.Permisjon.Fellesperioden":"Fellesperioden","Registrering.Permisjon.Fellesperiode.Yes":"Ja","Registrering.Permisjon.Fellesperiode.No":"Nei","Registrering.Permisjon.Fellesperiode.ForeldrepengerTilFarEllerMedmor":"Skal far eller medmor ha foreldrepenger fra fellesperioden?","Registrering.Permisjon.Fellesperiode.periodeFom":"Fellesperiode F.o.m.","Registrering.Permisjon.Fellesperiode.periodeTom":"Fellesperiode T.o.m.","Registrering.Permisjon.Fellesperiode.morsAktivitet":"Mors aktivitet","Registrering.Permisjon.MorBorSammenFaren":"Mor bor sammen med faren til barnet","Registrering.Permisjon.Mor.Yes":"Ja","Registrering.Permisjon.Mor.No":"Nei","Registrering.Permisjon.HarSamtidigUttak":"Samtidig uttak","Registrering.Permisjon.Flerbarnsdager":"Flerbarnsdager","Registrering.Permisjon.UttakStartdato":"Når skal uttak av foreldrepenger starte?","Registrering.Permisjon.HeleModrekvotenUmiddelbart":"Skal hele mødrekvoten tas ut umiddelbart etter fødsel?","Registrering.Permisjon.HeleFellesperiodenUmiddelbart":"Skal hele fellesperioden tas ut umiddelbart etter mødrekvoten?","Registrering.Permisjon.Utsettelse.Title":"Utsettelse","Registrering.Permisjon.Utsettelse.Periode":"Hva skal utsettes","Registrering.Permisjon.Utsettelse.Arsak":"Årsak til utsettelse","Registrering.Permisjon.Utsettelse.LeggTilPeriode":"Legg til periode for utsettelse","Registrering.Permisjon.Utsettelse.UtsettUttaket":"Søker ønsker å utsette uttaket","Registrering.Permisjon.Opphold.OppholdUttaket":"Søker ønsker opphold i uttaket","Registrering.Permisjon.Opphold.Title":"Opphold","Registrering.Permisjon.Opphold.Periode":"Hva skal annen forelder ta ut?","Registrering.Permisjon.Opphold.Arsak":"Årsak til opphold","Registrering.Permisjon.Opphold.LeggTilPeriode":"Legg til periode med opphold","Registrering.Permisjon.Gradering.Title":"Gradering","Registrering.Permisjon.Gradering.Periode":"Hva skal graderes","Registrering.Permisjon.Gradering.Prosentandel":"Prosentandel arbeid i perioden","Registrering.Permisjon.Gradering.SkalGraderes":"Arbeidsforhold som skal graderes","Registrering.Permisjon.Gradering.LeggTilPeriode":"Legg til periode for gradering","Registrering.Permisjon.Gradering.GraderUttaket":"Søker ønsker å gradere uttaket","Registrering.Permisjon.PeriodeFomForTidlig":"Behandlinger med første uttaksdag før 01.01.2019 skal ikke behandles i vedtaksløsningen","Registrering.TheOtherParent.Confirmation":"Bekreftelse","Registrering.TheOtherParent.OtherParentKnowPeriods":"Annen forelder er kjent med hvilke perioder det er søkt om","Registrering.TheOtherParent.Yes":"Ja","Registrering.TheOtherParent.No":"Nei","PermisjonPanel.MinstEnPeriodeRequired":"Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering","PermisjonPanel.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)"},ug=re(ue),en=({readOnly:s,alleKodeverk:i,kunMiliterEllerSiviltjeneste:o})=>r.jsx(ke,{value:ug,children:r.jsx(Un,{readOnly:s,alleKodeverk:i,kunMiliterEllerSiviltjeneste:o})});en.buildInitialValues=s=>Un.buildInitialValues(s);en.transformValues=(s,i)=>Un.transformValues(s,i);en.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:null}],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null},{name:"andreYtelser",optional:!1,type:null}],returns:null}],displayName:"AndreYtelserPapirsoknadIndex"};const gg="_inputBredde_138ho_1",Yt={inputBredde:gg},hn="annenForelder",Yr="kanIkkeOppgiBegrunnelse",mg=s=>s.filter(({kode:i})=>i!==aa.NORGE).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Ws=({readOnly:s=!0,permisjonRettigheterPanel:i,alleKodeverk:o,fagsakPersonnummer:d})=>{const{formatMessage:g}=H(),{watch:k,trigger:v,formState:{isSubmitted:m}}=Y(),h=k(`${hn}.kanIkkeOppgiAnnenForelder`),f=k(`${hn}.${Yr}`),j=o[ee.LANDKODER],F=V.useMemo(()=>j.slice().sort((b,w)=>b.navn.localeCompare(w.navn)),[j]);return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.TheOtherParent.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:`${hn}.foedselsnummer`,label:g({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:b=>b&&b.toString().replace(/\s/g,""),readOnly:s,className:Yt.inputBredde,validate:h?[]:[q,$u,Ys,b=>b===d?Hu():null],disabled:h}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{name:`${hn}.kanIkkeOppgiAnnenForelder`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:s,onChange:()=>m?v():void 0}),h===!0&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(ne,{size:"small",children:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),r.jsx(U,{name:`${hn}.${Yr}.arsak`,hideLegend:!0,validate:[q],isReadOnly:s,radios:[{label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:Lt.UKJENT_FORELDER},{label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:Lt.IKKE_NORSK_FNR}]}),(f==null?void 0:f.arsak)===Lt.IKKE_NORSK_FNR&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(fe,{name:`${hn}.${Yr}.land`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:mg(F),validate:[q],className:Yt.inputBredde,readOnly:s}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:`${hn}.${Yr}.utenlandskFoedselsnummer`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[q],className:Yt.inputBredde,readOnly:s})]})]})]}),r.jsx(y,{sixteenPx:!0}),i]})};Ws.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const kg=re(ue),zs=({readOnly:s,alleKodeverk:i,permisjonRettigheterPanel:o,fagsakPersonnummer:d})=>r.jsx(ke,{value:kg,children:r.jsx(Ws,{readOnly:s,alleKodeverk:i,permisjonRettigheterPanel:o,fagsakPersonnummer:d})});zs.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const is=Us(1),ls=pr(9),Js=()=>Ke().startOf("day"),pg=()=>Js().subtract(3,"weeks"),vg=s=>{const i=pg(),o=s?Ke(s,An):void 0,d=Js();return o&&o.isSameOrBefore(d)?(o.isAfter(i)?o:i).subtract(1,"days"):d},yg=s=>i=>qe(vg(s("termindato")))(i),Xs=({readOnly:s,erForeldrepenger:i=!1})=>{const o=H(),{watch:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),m=d("erBarnetFodt");return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:o.formatMessage({id:"Registrering.TerminOgFodsel"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"erBarnetFodt",label:r.jsx(c,{id:"Registrering.Termin.Fodt"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.Fodsel.ErFodt"}),value:"true"},{label:r.jsx(c,{id:"Registrering.Fodsel.ErIkkeFodt"}),value:"false"}]}),m===!1&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsxs(Q,{children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:"termindato",label:o.formatMessage({id:"Registrering.Termindato"}),isReadOnly:s,validate:[q,M],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(le,{name:"antallBarnFraTerminbekreftelse",label:o.formatMessage({id:"Registrering.AntallBarn"}),readOnly:s,validate:[q,gn,is,ls]})})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsx(T,{children:r.jsx(E,{name:"terminbekreftelseDato",label:o.formatMessage({id:"Registrering.UtstedtDato"}),isReadOnly:s,validate:[M,yg(g)]})})})]})})]}),m&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:0,children:r.jsxs(Q,{children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:"foedselsDato",label:o.formatMessage({id:"Registrering.Fodselsdato"}),isReadOnly:s,validate:[q,M,Kn]})}),r.jsx(T,{children:r.jsx(le,{name:"antallBarn",label:o.formatMessage({id:"Registrering.AntallBarn"}),readOnly:s,validate:[q,gn,is,ls]})})]}),i&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(Qr,{size:"small",variant:"info",children:r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.RettTilPrematuruker"})})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:"termindato",label:o.formatMessage({id:"Registrering.Termindato"}),isReadOnly:s,validate:[M]})}),r.jsx(T,{children:r.jsx(E,{name:"terminbekreftelseDato",label:o.formatMessage({id:"Registrering.UtstedtDato"}),isReadOnly:s,validate:[M]})})]})]})]})})]})]})};Xs.__docgenInfo={description:"",methods:[],displayName:"TerminFodselDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const fg=re(ue),ia=({readOnly:s,erForeldrepenger:i})=>r.jsx(ke,{value:fg,children:r.jsx(Xs,{readOnly:s,erForeldrepenger:i})});ia.__docgenInfo={description:"",methods:[],displayName:"FodselPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:""}}};const hg="_notLastRow_7c46s_1",cg={notLastRow:hg},os="frilans",Ur=(s,i)=>s(i),Zs=({readOnly:s})=>{const i=H(),{control:o,getValues:d,formState:{isSubmitted:g},trigger:k}=Y(),{fields:v,remove:m,append:h}=he({control:o,name:`${os}.perioder`});return r.jsx(Se,{fields:v,bodyText:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:s,remove:m,append:h,children:(f,j,F)=>{const b=`${os}.perioder.${j}`;return r.jsxs("div",{className:j!==v.length-1?cg.notLastRow:"",children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:`${b}.periodeFom`,label:j===0?i.formatMessage({id:"Registrering.Frilans.periodeFom"}):"",validate:[q,M,()=>{const w=Ur(d,`${b}.periodeFom`),A=Ur(d,`${b}.periodeTom`);return A&&w?qe(A)(w):null}],onChange:()=>g?k():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${b}.periodeTom`,label:j===0?i.formatMessage({id:"Registrering.Frilans.periodeTom"}):"",validate:[q,M,()=>{const w=Ur(d,`${b}.periodeFom`),A=Ur(d,`${b}.periodeTom`);return A&&w?Oe(w)(A):null}],onChange:()=>g?k():void 0})}),F&&r.jsx(T,{children:F()})]})}),r.jsx(y,{sixteenPx:!0})]},f.id)}})};Zs.__docgenInfo={description:`FrilansPerioderFieldArray

Viser inputfelter for fra og til dato for frilansperioder`,methods:[],displayName:"FrilansPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const bg="_notLastRow_7c46s_1",jg={notLastRow:bg},mr="frilans",gr=(s,i)=>s(i),Rg=(s=[])=>s.map(i=>i.periodeFom).filter(i=>i&&i!=="").sort((i,o)=>Ke(i,An).diff(Ke(o,An))),Qs={fomDato:"",tomDato:"",oppdragsgiver:""},Tg=ra(50),Ag=(s,i,o,d)=>()=>{const g=gr(s,`${i}.fomDato`);return o.length>0&&o[0]&&g&&!Ke(o[0]).isSameOrBefore(Ke(g))?d.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation"}):null},ei=({readOnly:s})=>{const i=H(),{control:o,getValues:d,watch:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:h,append:f}=he({control:o,name:`${mr}.oppdragPerioder`}),j=g(`${mr}.perioder`),F=V.useMemo(()=>Rg(j),[j]);return r.jsx(Se,{bodyText:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),fields:m,emptyPeriodTemplate:Qs,readOnly:s,append:f,remove:h,children:(b,w,A)=>{const O=`${mr}.oppdragPerioder.${w}`;return r.jsxs("div",{className:w!==m.length-1?jg.notLastRow:"",children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:`${O}.fomDato`,label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeFom"}),validate:[M,Ag(d,O,F,i),()=>{const P=gr(d,`${O}.fomDato`),G=gr(d,`${O}.tomDato`);return G&&P?qe(G)(P):null}],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${O}.tomDato`,label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeTom"}),validate:[M,()=>{const P=gr(d,`${O}.fomDato`),G=gr(d,`${O}.tomDato`);return G&&P?Oe(P)(G):null}],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(le,{name:`${O}.oppdragsgiver`,validate:[Tg],label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver"})})}),A&&r.jsx(T,{children:A()})]})}),r.jsx(y,{sixteenPx:!0})]},b.id)}})};ei.__docgenInfo={description:`FrilansOppdragForFamilieFieldArray

Viser inputfelter for fra og til dato for frilansperioder.`,methods:[],displayName:"FrilansOppdragForFamilieFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const nt=({readOnly:s})=>{const{watch:i}=Y(),o=i(`${mr}.harHattOppdragForFamilie`);return r.jsxs(r.Fragment,{children:[r.jsx(U,{name:`${mr}.harHattOppdragForFamilie`,label:r.jsx(c,{id:"Registrering.FrilansOppdrag.HarHattOppdragForFamilie"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.FrilansOppdrag.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.FrilansOppdrag.No"}),value:"false"}]}),o&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.FrilansOppdrag.OppgiPeriode"})}),r.jsx(y,{fourPx:!0}),r.jsx(ei,{readOnly:s})]})]})]})};nt.buildInitialValues=()=>({oppdragPerioder:[Qs],perioder:void 0});nt.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`{
  harHattOppdragForFamilie?: boolean;
} & FieldArrayFormValues`,elements:[{name:"signature",type:"object",raw:`{
  harHattOppdragForFamilie?: boolean;
}`,signature:{properties:[{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]}}}],displayName:"FrilansOppdragForFamiliePanel"};const Ut="frilans",$n=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Frilans.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Ut}.harSokerPeriodeMedFrilans`,label:r.jsx(c,{id:"Registrering.Frilans.HarFrilansvirksomhet"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.Frilans.No"}),value:"false"},{label:r.jsx(c,{id:"Registrering.Frilans.Yes"}),value:"true",element:r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(Ze,{children:r.jsx(c,{id:"Registrering.Frilans.OppgiPeriode"})}),r.jsx(y,{eightPx:!0}),r.jsx(Zs,{readOnly:s}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:`${Ut}.erNyoppstartetFrilanser`,label:r.jsx(c,{id:"Registrering.Frilans.ErNyoppstartedFrilanser"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.Frilans.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.Frilans.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Ut}.harInntektFraFosterhjem`,label:r.jsx(c,{id:"Registrering.Frilans.HarInntektFraForsterhjem"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.Frilans.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.Frilans.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(nt,{readOnly:s})]})]})}]})]});$n.buildInitialValues=()=>({...nt.buildInitialValues(),perioder:[{periodeFom:"",periodeTom:""}]});$n.transformValues=s=>s.harSokerPeriodeMedFrilans?s:{harSokerPeriodeMedFrilans:s.harSokerPeriodeMedFrilans};$n.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:null}],returns:null}],displayName:"FrilansPanel"};const qg=re(ue),nn=({readOnly:s})=>r.jsx(ke,{value:qg,children:r.jsx($n,{readOnly:s})});nn.buildInitialValues=()=>$n.buildInitialValues();nn.transformValues=s=>$n.transformValues(s);nn.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:null}],returns:null}],displayName:"FrilansPapirsoknadIndex"};const Fg="_notLastRow_uwn16_1",wg={notLastRow:Fg},Pg=ra(50),In="arbeidsforhold",_g={arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},xg=s=>s.filter(({kode:i})=>i!==aa.NORGE).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),ni=({alleKodeverk:s,readOnly:i})=>{const o=H(),{control:d}=Y(),{fields:g,remove:k,append:v}=he({control:d,name:In}),m=s[ee.LANDKODER].slice().sort((h,f)=>h.navn.localeCompare(f.navn));return r.jsx(Se,{fields:g,emptyPeriodTemplate:_g,bodyText:o.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:i,remove:k,append:v,children:(h,f,j)=>r.jsxs("div",{className:f!==g.length-1?wg.notLastRow:"",children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(le,{readOnly:i,name:`${In}.${f}.arbeidsgiver`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}):"",validate:[Pg],maxLength:99})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${In}.${f}.periodeFom`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}):"",validate:[M]})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${In}.${f}.periodeTom`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}):"",validate:[M]})}),r.jsx(T,{children:r.jsx(fe,{readOnly:i,name:`${In}.${f}.land`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}):"",selectValues:xg(m)})}),j&&r.jsx(T,{children:j()})]})}),r.jsx(y,{twentyPx:!0})]},h.id)})};ni.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const rt=({readOnly:s,alleKodeverk:i})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.Title"})}),r.jsx(y,{eightPx:!0}),r.jsx(Ze,{children:r.jsx(c,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{sixteenPx:!0}),r.jsx(Ze,{children:r.jsx(c,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title"})}),r.jsx(y,{eightPx:!0}),r.jsx(ni,{readOnly:s,alleKodeverk:i})]});rt.buildInitialValues=()=>({[In]:[{}]});rt.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPanel"};const Og=re(ue),Hn=({readOnly:s,alleKodeverk:i})=>r.jsx(ke,{value:Og,children:r.jsx(rt,{readOnly:s,alleKodeverk:i})});Hn.buildInitialValues=()=>rt.buildInitialValues();Hn.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPapirsoknadIndex"};const Sg="_image_1vy0k_1",Ng={image:Sg},ri=({showModal:s,handleSubmit:i,cancelEvent:o})=>{const d=H();return r.jsxs(Xe,{open:s,"aria-label":d.formatMessage({id:"ModalLukkPapirSoknad.ModalDescription"}),onClose:o,children:[r.jsx(Xe.Body,{children:r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(Ku,{className:Ng.image,title:d.formatMessage({id:"ModalLukkPapirSoknad.Avslutt"})})}),r.jsxs(T,{children:[r.jsx(me,{size:"small",children:d.formatMessage({id:"ModalLukkPapirSoknad.AvslutterRegistrering"})}),r.jsx(y,{fourPx:!0}),r.jsx(Ds,{size:"small",children:d.formatMessage({id:"ModalLukkPapirSoknad.BekreftAvslag"})})]})]})})}),r.jsxs(Xe.Footer,{children:[r.jsx($s,{to:"/",children:r.jsx(Be,{size:"small",variant:"primary",onClick:()=>i(),type:"button",children:d.formatMessage({id:"ModalLukkPapirSoknad.Ok"})})}),r.jsx(Be,{size:"small",variant:"secondary",onClick:o,type:"button",children:d.formatMessage({id:"ModalLukkPapirSoknad.Avbryt"})})]})]})};ri.__docgenInfo={description:`LukkPapirSoknadModal

Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
og trykker på 'Lagre og start behandling'. Ved å trykke på OK blir saken sendt til behandling av avslag.`,methods:[],displayName:"LukkPapirSoknadModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Eg="_fullWidth_1omqj_1",Vg="_halfWidth_1omqj_5",ds={fullWidth:Eg,halfWidth:Vg},Mg=ra(1500),ti=({submitting:s,onSubmitUfullstendigsoknad:i,readOnly:o=!0})=>{const d=H(),[g,k]=V.useState(!1),{watch:v}=Y(),m=v("ufullstendigSoeknad")||!1,h=V.useCallback(()=>{k(!g)},[k,g]);return r.jsx(oe,{children:r.jsx(Q,{children:r.jsx(L,{children:r.jsxs(T,{className:ds.fullWidth,children:[r.jsx(Ze,{children:d.formatMessage({id:"Registrering.SaveApplication.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(L,{children:[r.jsx(T,{className:ds.halfWidth,children:r.jsx(Hs,{name:"kommentarEndring",label:d.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[Mg,ta],readOnly:o})}),r.jsxs(T,{children:[r.jsx(ie,{name:"registrerVerge",label:d.formatMessage({id:"Registrering.Verge"}),readOnly:o}),r.jsx(ie,{name:"ufullstendigSoeknad",label:d.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:o})]})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsxs(T,{className:"justifyItemsToFlexEnd",children:[!m&&r.jsx(Be,{id:"saveButton",size:"small",variant:"primary",loading:s,disabled:o||s,onClick:Gs,children:r.jsx(c,{id:"Registrering.SaveApplication.SaveButton"})}),m&&r.jsx(Be,{id:"endButton",onClick:h,size:"small",variant:"primary",loading:s,disabled:o||s,type:"button",children:r.jsx(c,{id:"Registrering.SaveApplication.EndButton"})})]})}),r.jsx(ri,{handleSubmit:i,showModal:g,cancelEvent:h})]})})})})};ti.__docgenInfo={description:"",methods:[],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Ig=re(ue),tt=({readOnly:s,onSubmitUfullstendigsoknad:i,submitting:o})=>r.jsx(ke,{value:Ig,children:r.jsx(ti,{readOnly:s,onSubmitUfullstendigsoknad:i,submitting:o})});tt.__docgenInfo={description:"",methods:[],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const ai=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),r.jsx(y,{sixteenPx:!0}),r.jsx(E,{name:"mottattDato",label:r.jsx(c,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[q,M,Kn],isReadOnly:s})]});ai.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"MottattDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Dg=re(ue),at=({readOnly:s})=>r.jsx(ke,{value:Dg,children:r.jsx(ai,{readOnly:s})});at.__docgenInfo={description:"",methods:[],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Bg="_barnInput_1jjt5_1",Kg="_col_1jjt5_5",$r={barnInput:Bg,col:Kg},Lg=10,us=Us(1),gs=pr(10),cn="omsorg",ms=(s,i)=>o=>{if(s===0&&i&&o)return Gu(o,Array.isArray(i)?i[0]:i)},st=({readOnly:s=!0,familieHendelseType:i,isForeldrepengerFagsak:o,fodselsdatoer:d})=>{const{formatMessage:g}=H(),{control:k,watch:v}=Y(),{fields:m,remove:h,append:f}=he({control:k,name:`${cn}.foedselsDato`}),j=v(`${cn}.antallBarn`),F=j?parseInt(j,10):0;return V.useEffect(()=>{if(m.length>Math.max(F,0))for(let b=m.length;b>F;b-=1)h(b-1);else if(m.length<Math.min(F,Lg))for(let b=m.length;b<F;b+=1)f({id:b,dato:void 0})},[F]),r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:i===se.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(Q,{children:[o&&i===se.ADOPSJON&&r.jsxs(r.Fragment,{children:[r.jsx(L,{children:r.jsx(T,{className:$r.col,children:r.jsx(U,{name:`${cn}.erEktefellesBarn`,label:r.jsx(c,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Adopsjon.Ja"}),value:"true"},{label:g({id:"Registrering.Adopsjon.Nei"}),value:"false"}]})})}),r.jsx(y,{sixteenPx:!0})]}),r.jsx(L,{children:r.jsx(T,{children:r.jsx(E,{name:`${cn}.omsorgsovertakelsesdato`,label:g({id:i===se.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:s,validate:i===se.ADOPSJON?[q,M]:[M]})})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(L,{children:[i===se.ADOPSJON&&r.jsx(T,{children:r.jsx(E,{name:`${cn}.ankomstdato`,label:g({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:s,validate:[M]})}),r.jsx(T,{className:$r.col,children:r.jsx(le,{name:`${cn}.antallBarn`,label:g({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:s,parse:b=>{const w=parseInt(b.toString(),10);return Number.isNaN(w)?b:w},className:$r.barnInput,validate:i===se.ADOPSJON?[q,gn,us,gs]:[gn,b=>b?us(parseInt(b,10)):void 0,b=>b?gs(parseInt(b,10)):void 0]})})]}),r.jsx(L,{children:r.jsx(T,{className:$r.col,children:m.map((b,w)=>r.jsxs(Zr.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(E,{name:`${cn}.foedselsDato.${w}.dato`,isReadOnly:s,validate:i===se.ADOPSJON?[q,M,Kn,ms(w,d)]:[M,Kn,ms(w,d)],label:g({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:w+1})})]},b.id))})})]})]})};st.transformValues=s=>({...s,foedselsDato:s.foedselsDato&&s.foedselsDato.length>0?s.foedselsDato.map(i=>i.dato):void 0});st.__docgenInfo={description:`OmsorgOgAdopsjonPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null}],displayName:"OmsorgOgAdopsjonPanel",props:{readOnly:{defaultValue:{value:"true",computed:!1},required:!1}}};const Yg=re(ue),kn=({readOnly:s,familieHendelseType:i,isForeldrepengerFagsak:o,fodselsdato:d})=>r.jsx(ke,{value:Yg,children:r.jsx(st,{readOnly:s,familieHendelseType:i,isForeldrepengerFagsak:o,fodselsdatoer:d})});kn.transformValues=st.transformValues;kn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex"};const Ug="_datesRowWithRemoveButton_od5lu_1",$g="_selectBredde_od5lu_7",si={datesRowWithRemoveButton:Ug,selectBredde:$g},Hg=ig.bind(si),Gg={land:"",periodeFom:"",periodeTom:""},Jr=(s,i)=>s(i),ks=(s,i)=>()=>{const d=s(i).filter(({periodeFom:g,periodeTom:k})=>g&&g!==""&&k&&k!=="").map(({periodeFom:g,periodeTom:k})=>[g,k]);return d.length>0?Yn(d):void 0},Cg=s=>s.filter(({kode:i})=>i!==aa.NORGE).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),ps=(s,i,o,d)=>()=>{const g=Jr(s,`${i}.${o}.periodeFom`),k=Jr(s,`${i}.${o}.periodeTom`);return!k||!g?null:d?qe(k)(g):Oe(g)(k)},zt=({erTidligereOpphold:s,mottattDato:i,readOnly:o,countryCodes:d})=>{const g=H(),k=s?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:v,getValues:m,trigger:h,formState:{isSubmitted:f}}=Y(),{fields:j,remove:F,append:b}=he({control:v,name:k}),w=V.useMemo(()=>Cg(d),[d]);return r.jsx(Se,{fields:j,titleText:g.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:g.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:Gg,createAddButtonInsteadOfImageLink:!0,readOnly:o,remove:F,append:b,children:(A,O,P)=>r.jsxs(Zr.Fragment,{children:[O>0&&r.jsxs(r.Fragment,{children:[r.jsx(na,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsx(fe,{name:`${k}.${O}.land`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:w,className:si.selectBredde,readOnly:o,validate:[q]}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{className:Hg({datesRowWithRemoveButton:O>0}),children:[r.jsx(T,{children:r.jsx(E,{name:`${k}.${O}.periodeFom`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:o,validate:[q,M,ps(m,k,O,!0),()=>{const G=Jr(m,`${k}.${O}.periodeFom`);return s?qe(Ke().format(An))(G):i?Oe(i)(G):void 0},ks(m,k)],onChange:()=>f?h():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${k}.${O}.periodeTom`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:o,validate:[q,M,ps(m,k,O,!1),()=>{const G=Jr(m,`${k}.${O}.periodeTom`);return s?qe(Ke().format(An))(G):i?Oe(i)(G):void 0},ks(m,k)],onChange:()=>f?h():void 0})}),P&&r.jsx(T,{children:P()})]})}),r.jsx(y,{sixteenPx:!0})]},A.id)})};zt.__docgenInfo={description:`UtenlandsOppholdField

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
Komponenten lar saksbehandler legge inn informasjon om ett eller flere utenlandsopphold fra søknaden. Komponenten eksponerer valideringsregler
som lar seg tilpasse om opphold skal være fram eller tilbake i tid.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"UtenlandsOppholdField",props:{erTidligereOpphold:{required:!0,tsType:{name:"boolean"},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""},countryCodes:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Gn=({readOnly:s=!0,alleKodeverk:i,mottattDato:o,erAdopsjon:d})=>{const{formatMessage:g}=H(),k=V.useMemo(()=>i[ee.LANDKODER].slice().sort((f,j)=>f.navn.localeCompare(j.navn)),[i]),{watch:v}=Y(),m=v("harTidligereOppholdUtenlands")||!1,h=v("harFremtidigeOppholdUtenlands")||!1;return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Opphold"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"oppholdINorge",label:r.jsx(c,{id:d?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"true"},{label:g({id:"Registrering.Opphold.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"harTidligereOppholdUtenlands",label:r.jsx(c,{id:"Registrering.OppholdSisteTolv"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"false"},{label:g({id:"Registrering.Opphold.No"}),value:"true"}]}),m?r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsx(zt,{erTidligereOpphold:!0,mottattDato:o,countryCodes:k,readOnly:s})})]}):null,r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"harFremtidigeOppholdUtenlands",label:r.jsx(c,{id:"Registrering.OppholdNesteTolv"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"false"},{label:g({id:"Registrering.Opphold.No"}),value:"true"}]}),h?r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsx(zt,{erTidligereOpphold:!1,mottattDato:o,countryCodes:k,readOnly:s})})]}):null]})};Gn.buildInitialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});Gn.transformValues=s=>({...s,fremtidigeOppholdUtenlands:s.harFremtidigeOppholdUtenlands?s.fremtidigeOppholdUtenlands:void 0,tidligereOppholdUtenlands:s.harTidligereOppholdUtenlands?s.tidligereOppholdUtenlands:void 0});Gn.__docgenInfo={description:`OppholdINorgePanel

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
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePanel",props:{readOnly:{defaultValue:{value:"true",computed:!1},required:!1}}};const Wg=re(ue),ye=({readOnly:s,erAdopsjon:i,alleKodeverk:o,mottattDato:d})=>r.jsx(ke,{value:Wg,children:r.jsx(Gn,{readOnly:s,erAdopsjon:i,alleKodeverk:o,mottattDato:d})});ye.buildInitialValues=Gn.buildInitialValues;ye.transformValues=Gn.transformValues;ye.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePapirsoknadIndex"};const Dn={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},ii=({readOnly:s=!0,soknadData:i})=>{const o=H(),d=[{label:o.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:Dn.ANNEN_FORELDER_DOED},{label:o.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:Dn.OVERTA_FORELDREANSVARET_ALENE},{label:o.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:Dn.MANN_ADOPTERER_ALENE},{label:o.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:Dn.IKKE_RELEVANT}];return i.getFamilieHendelseType()!==se.FODSEL&&i.getForeldreType()===Ln.FAR||d.splice(2,1),r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:o.formatMessage({id:"Registrering.Rettigheter.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"rettigheter",isReadOnly:s,radios:d})]})};ii.__docgenInfo={description:`RettigheterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"RettigheterPanel",props:{soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const zg=re(ue),it=({readOnly:s,soknadData:i})=>r.jsx(ke,{value:zg,children:r.jsx(ii,{readOnly:s,soknadData:i})});it.__docgenInfo={description:"",methods:[],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const $t={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},li=({readOnly:s})=>{const i=H();return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:i.formatMessage({id:"Registrering.Sprak"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"språkkode",validate:[q],isReadOnly:s,radios:[{label:i.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:$t.BOKMAL},{label:i.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:$t.NYNORSK},{label:i.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:$t.ENGELSK}]})]})};li.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",methods:[],displayName:"SprakPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Jg=re(ue),fr=({readOnly:s})=>r.jsx(ke,{value:Jg,children:r.jsx(li,{readOnly:s})});fr.__docgenInfo={description:"",methods:[],displayName:"SprakPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Xg="_navnBredde_1kwjo_1",Zg="_orgNrBredde_1kwjo_5",Qg="_landBredde_1kwjo_9",Ht={navnBredde:Xg,orgNrBredde:Zg,landBredde:Qg},em=s=>s.map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),oi=({readOnly:s=!0,alleKodeverk:i})=>{const o=H(),d=i[ee.LANDKODER].slice().sort((m,h)=>m.navn.localeCompare(h.navn)),{watch:g,getValues:k}=Y(),v=g("virksomhetRegistrertINorge");return r.jsxs(r.Fragment,{children:[r.jsx(le,{name:"navn",validate:[q],label:r.jsx(c,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),className:Ht.navnBredde,readOnly:s}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"virksomhetRegistrertINorge",label:r.jsx(c,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.No"}),value:"false"}]}),v&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx("div",{className:Ht.orgNrBredde,children:r.jsx(de,{children:r.jsx(le,{name:"organisasjonsnummer",readOnly:s,validate:[q,gn,Cu],label:r.jsx(c,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})})}),r.jsx(y,{sixteenPx:!0})]}),!v&&v!==void 0&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{alignOffset:57,children:[r.jsx(fe,{name:"landJobberFra",className:Ht.landBredde,selectValues:em(d),validate:[q],label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{isReadOnly:s,validate:[q,M,Kn],name:"fom",label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:s,validate:[M,m=>{const h=k("fom");return h?Wu(h,m):null}],name:"tom",label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})})]})})]})]})]})};oi.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const nm="_tlfBredde_nvz63_1",rm="_navnBredde_nvz63_5",vs={tlfBredde:nm,navnBredde:rm},di=({readOnly:s=!0})=>{const{watch:i}=Y(),o=i("harRegnskapsforer")||!1;return r.jsxs(r.Fragment,{children:[r.jsx(U,{name:"harRegnskapsforer",label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.No"}),value:"false"}]}),o&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(le,{name:"navnRegnskapsforer",className:vs.navnBredde,readOnly:s,validate:[q,ta],label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:"tlfRegnskapsforer",readOnly:s,validate:[q,gn],className:vs.tlfBredde,label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]}),r.jsx(y,{sixteenPx:!0})]})]})};di.__docgenInfo={description:`VirksomhetRegnskapPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const tm="_inntektBredde_1xgnj_1",am={inntektBredde:tm},ui=({readOnly:s})=>{var F,b,w,A;const i=H(),{watch:o,setError:d,clearErrors:g,formState:k}=Y(),v=o("varigEndretEllerStartetSisteFireAr")||!1,m=o("harVarigEndring")||!1,h=o("erNyoppstartet")||!1,f=o("erNyIArbeidslivet")||!1,j=!m&&!h&&!f;return V.useEffect(()=>{j&&v&&d("ingenArsakValgt",{type:"custom",message:i.formatMessage({id:"Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak"})}),(!j||!v)&&g("ingenArsakValgt")},[j,v]),r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"varigEndretEllerStartetSisteFireAr",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.No"}),value:"false"}]}),v&&r.jsxs("div",{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:"harVarigEndring",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"})}),r.jsx(y,{fourPx:!0}),m&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(de,{children:r.jsx(E,{name:"varigEndringGjeldendeFom",isReadOnly:s,validate:[M,q],label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),r.jsx(ie,{name:"erNyoppstartet",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})}),r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:"erNyIArbeidslivet",label:r.jsx(c,{id:"Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet"})}),r.jsx(y,{fourPx:!0}),f&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(de,{children:r.jsx(E,{name:"nyIArbeidslivetFom",isReadOnly:s,validate:[M,q],label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),k.isSubmitted&&((b=(F=k.errors)==null?void 0:F.ingenArsakValgt)==null?void 0:b.message)&&r.jsx(kr,{children:(A=(w=k.errors)==null?void 0:w.ingenArsakValgt)==null?void 0:A.message}),r.jsx(y,{sixteenPx:!0}),r.jsx(Hs,{name:"beskrivelseAvEndring",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[ta]}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:"inntekt",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:s,validate:[gn,q],className:am.inntektBredde,parse:O=>{const P=parseInt(O.toString(),10);return Number.isNaN(P)?O:P}})]})]}),r.jsx(y,{eightPx:!0})]})};ui.__docgenInfo={description:`VirksomhetStartetEndretPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const gi=({readOnly:s=!0})=>r.jsx(U,{name:"familieEllerVennerTilknyttetNaringen",label:r.jsx(c,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),isReadOnly:s,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.VirksomhetRelasjonPanel.No"}),value:"false"}]});gi.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const ys="typeVirksomhet",fs={[ur.DAGMAMMA]:1,[ur.FISKE]:2,[ur.JORDBRUK_ELLER_SKOGBRUK]:3,[ur.ANNEN]:4},sm=(s,i)=>s>i?1:s<i?-1:0,mi=({readOnly:s,alleKodeverk:i})=>{var j,F;const o=i[ee.VIRKSOMHET_TYPE],d=V.useMemo(()=>o.filter(b=>b.kode!==ur.FRILANSER).sort((b,w)=>sm(fs[b.kode],fs[w.kode])),[]),{watch:g,setError:k,formState:v,clearErrors:m}=Y(),h=g(ys),f=!h||!Object.values(h).some(b=>b===!0);return V.useEffect(()=>{f&&k("notRegisteredInput",{type:"custom",message:zu()}),f||m("notRegisteredInput")},[f]),r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.VirksomhetNaeringTypePanel.Title"})}),r.jsx(y,{fourPx:!0}),d.map(b=>r.jsxs(V.Fragment,{children:[r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:`${ys}.${b.kode}`,label:b.navn,readOnly:s},b.kode)]},b.kode)),v.isSubmitted&&((j=v.errors.notRegisteredInput)==null?void 0:j.message)&&r.jsx(kr,{children:(F=v.errors.notRegisteredInput)==null?void 0:F.message})]})};mi.__docgenInfo={description:`VirksomhetTypeNaringPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const im="_savebutton_tgfg3_1",lm="_cancelbutton_tgfg3_1",om="_form_tgfg3_5",hs={savebutton:im,cancelbutton:lm,form:om},ki=({showModal:s=!1,readOnly:i=!1,closeEvent:o,onSubmit:d,alleKodeverk:g,virksomhet:k})=>{const v=H(),m=vr({defaultValues:k});return r.jsx(yr,{formMethods:m,children:r.jsxs(Xe,{open:s,"aria-label":v.formatMessage({id:"Registrering.RegistrerVirksomhetModalForm.ModalDescription"}),onClose:o,children:[r.jsx(Xe.Header,{children:r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.RegistrerVirksomhetModalForm.Title"})})}),r.jsxs(Xe.Body,{children:[r.jsx(oi,{readOnly:i,alleKodeverk:g}),r.jsx(mi,{readOnly:i,alleKodeverk:g}),r.jsx(ui,{readOnly:i}),r.jsx(di,{readOnly:i}),r.jsx(y,{sixteenPx:!0}),r.jsx(gi,{readOnly:i}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(Xe.Footer,{children:[r.jsx(Be,{size:"small",variant:"primary",onClick:m.handleSubmit(d),disabled:i,className:hs.savebutton,type:"button",children:r.jsx(c,{id:"Registrering.RegistrerVirksomhetModalForm.Save"})}),r.jsx(Be,{size:"small",variant:"secondary",onClick:o,disabled:i,className:hs.cancelbutton,type:"button",children:r.jsx(c,{id:"Registrering.RegistrerVirksomhetModalForm.Cancel"})})]})]})})};ki.__docgenInfo={description:`RegistrerVirksomhetModalForm

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
TypeNaringFormValues`,elements:[{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"}]},description:""}}};const dm="_divider_1ed8l_1",um="_fieldsList_1ed8l_7",gm="_addCircleIcon_1ed8l_11",mm="_imageText_1ed8l_12",km="_customLink_1ed8l_17",pm="_removeButton_1ed8l_22",bn={divider:dm,fieldsList:um,addCircleIcon:gm,imageText:mm,customLink:km,removeButton:pm},Rn="egenVirksomhet",pi=({readOnly:s=!1,alleKodeverk:i})=>{var P,G,Ne,X;const o=H(),[d,g]=V.useState(),{control:k,setError:v,formState:m,clearErrors:h}=Y(),{fields:f,remove:j,append:F,update:b}=he({control:k,name:`${Rn}.virksomheter`}),w=V.useCallback(J=>{g(J!==void 0?J:-1)},[g]),A=V.useCallback(()=>{g(void 0)},[g]),O=V.useCallback(J=>{const te={...J,landJobberFra:J.virksomhetRegistrertINorge?"NOR":J.landJobberFra,varigEndringGjeldendeFom:J.nyIArbeidslivetFom||J.varigEndringGjeldendeFom};d===-1?F(te):d!==void 0&&b(d,te),A()},[F,b,A,d]);return V.useEffect(()=>{f.length===0&&v(`${Rn}.notRegisteredInput`,{type:"custom",message:o.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}),f.length>0&&h(`${Rn}.notRegisteredInput`)},[f.length]),r.jsxs("div",{className:bn.fieldsList,children:[f.length>0&&r.jsxs(Zr.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),r.jsx("hr",{className:bn.divider}),f.map((J,te)=>r.jsxs(Q,{children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(as,{className:bn.customLink,onClick:()=>w(te),onKeyDown:()=>w(te),children:r.jsx(Ds,{size:"small",children:J.navn})})}),r.jsx(T,{children:r.jsx(Bs,{className:bn.removeButton,onClick:()=>j(te),onKeyDown:()=>j(te)})})]}),r.jsx("hr",{className:bn.divider}),r.jsx(y,{eightPx:!0})]},J.id))]},1),r.jsxs(as,{onClick:()=>w(),onKeyDown:J=>J.nativeEvent.code==="Space"?w():!1,children:[r.jsx(Ju,{className:bn.addCircleIcon}),r.jsx(Ze,{className:bn.imageText,children:r.jsx(c,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})]}),m.isSubmitted&&((G=(P=m.errors[Rn])==null?void 0:P.notRegisteredInput)==null?void 0:G.message)&&r.jsx(kr,{children:(X=(Ne=m.errors[Rn])==null?void 0:Ne.notRegisteredInput)==null?void 0:X.message}),d!==void 0&&r.jsx(ki,{showModal:!0,virksomhet:d!==-1&&f.length>d?f[d]:void 0,onSubmit:O,closeEvent:A,readOnly:s,alleKodeverk:i})]})};pi.__docgenInfo={description:`RegistrererVirksomhetPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const vi=({readOnly:s=!0,alleKodeverk:i})=>{const o=H(),{watch:d}=Y(),g=d(`${Rn}.harArbeidetIEgenVirksomhet`)||null;return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.EgenVirksomhet.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Rn}.harArbeidetIEgenVirksomhet`,validate:[q],isReadOnly:s,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:o.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),g&&r.jsx(pi,{readOnly:s,alleKodeverk:i})]})};vi.__docgenInfo={description:`EgenVirksomhetPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const vm=re(ue),la=({readOnly:s,alleKodeverk:i})=>r.jsx(ke,{value:vm,children:r.jsx(vi,{readOnly:s,alleKodeverk:i})});la.__docgenInfo={description:"",methods:[],displayName:"VirksomhetPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Gt=re(ue),yi=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:Gt.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"dekningsgrad",validate:[q],isReadOnly:s,isHorizontal:!0,radios:[{label:Gt.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:Gt.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]});yi.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Hr=re(ue),fi=({readOnly:s,annenForelderInformertRequired:i=!1})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:Hr.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Ze,{children:Hr.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})}),r.jsx(y,{eightPx:!0}),r.jsx(U,{name:"annenForelderInformert",validate:i?[q]:[],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:Hr.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:Hr.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})]});fi.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const jn="annenForelder",hi=({readOnly:s,sokerErMor:i})=>{const o=H(),{watch:d}=Y(),g=d(`${jn}.sokerHarAleneomsorg`),k=d(`${jn}.denAndreForelderenHarRettPaForeldrepenger`),v=d(`${jn}.annenForelderRettEØS`);return r.jsxs(r.Fragment,{children:[r.jsx(U,{name:`${jn}.sokerHarAleneomsorg`,label:o.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),g===!1&&r.jsx(U,{name:`${jn}.denAndreForelderenHarRettPaForeldrepenger`,label:o.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger.No"}),value:"false"}]}),g===!1&&k===!1&&r.jsx(U,{name:`${jn}.annenForelderRettEØS`,label:o.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS.No"}),value:"false"}]}),!i&&g===!1&&k===!1&&v===!1&&r.jsx(U,{name:`${jn}.morMottarUføretrygd`,label:o.formatMessage({id:"Registrering.Permisjon.MorUføretrygd"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.MorUføretrygd.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.MorUføretrygd.No"}),value:"false"}]})]})};hi.__docgenInfo={description:"",methods:[],displayName:"PermisjonRettigheterPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},denAndreForelderenHarRettPaForeldrepenger:{required:!1,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const ym="_buttonRemove_n1u93_1",fm="_buttonRemoveFirst_n1u93_9",hm="_notLastRow_n1u93_17",cm="_skjulOverskrift_n1u93_21",bm="_visOverskrift_n1u93_25",jm="_smalHeader_n1u93_29",Rm="_alignSamtidigUttak_n1u93_33",Tm="_selectFieldWidth_n1u93_37",sn={buttonRemove:ym,buttonRemoveFirst:fm,notLastRow:hm,skjulOverskrift:cm,visOverskrift:bm,smalHeader:jm,alignSamtidigUttak:Rm,selectFieldWidth:Tm},Am=pr(100),Bn="tidsromPermisjon",De="permisjonsPerioder",oa=[on.FELLESPERIODE,on.FEDREKVOTE,on.FORELDREPENGER_FOR_FODSEL,on.FORELDREPENGER,on.MODREKVOTE],qm=s=>s.filter(({kode:i})=>oa.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Fm=s=>s.map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),ci=[on.FEDREKVOTE,on.FORELDREPENGER_FOR_FODSEL,on.MODREKVOTE],Gr=(s,i)=>s?i:"",wm=s=>!!s&&Ke(s,An).isBefore(Ke("2019-01-01")),cs=s=>()=>{const o=s(`${Bn}.${De}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return Yn(o)},bs=(s,i,o)=>()=>{const d=s(`${Bn}.${De}.${i}.periodeFom`),g=s(`${Bn}.${De}.${i}.periodeTom`);return!g||!d?null:o?qe(g)(d):Oe(d)(g)},lt=({sokerErMor:s,readOnly:i,alleKodeverk:o})=>{const d=H(),g=o[ee.UTTAK_PERIODE_TYPE],k=o[ee.MORS_AKTIVITET];k.filter(({kode:A})=>A==="-").length===0&&k.unshift({kode:"-",navn:"",kodeverk:""});const{control:v,getValues:m,trigger:h,watch:f,formState:{isSubmitted:j}}=Y(),{fields:F,remove:b,append:w}=he({control:v,name:`${Bn}.${De}`});return V.useEffect(()=>{F.length===0&&w({})},[]),r.jsx(Se,{readOnly:i,fields:F,bodyText:d.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),emptyPeriodTemplate:{},append:w,remove:b,children:(A,O)=>{const P=O===0,G=f(`${Bn}.${De}.${O}`),Ne=wm(G.periodeFom),X=P?sn.visOverskrift:sn.skjulOverskrift,J=ci.includes(G.periodeType)||G.periodeType==="",te=`${Bn}.${De}.${O}`;return r.jsxs("div",{children:[r.jsxs(Q,{children:[r.jsxs(L,{wrap:!0,children:[r.jsx(T,{className:sn.selectFieldWidth,children:r.jsx(fe,{readOnly:i,name:`${te}.periodeType`,label:Gr(P,d.formatMessage({id:"Registrering.Permisjon.periodeType"})),selectValues:qm(g),validate:[q]})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${te}.periodeFom`,label:Gr(P,d.formatMessage({id:"Registrering.Permisjon.periodeFom"})),validate:[q,M,bs(m,O,!0),cs(m)],onChange:()=>j?h():void 0})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${te}.periodeTom`,label:Gr(P,d.formatMessage({id:"Registrering.Permisjon.periodeTom"})),validate:[q,M,bs(m,O,!1),cs(m)],onChange:()=>j?h():void 0})}),!s&&r.jsx(T,{children:r.jsx(fe,{readOnly:i,disabled:J,name:`${te}.morsAktivitet`,label:Gr(P,d.formatMessage({id:"Registrering.Permisjon.Fellesperiode.morsAktivitet"})),selectValues:Fm(k),hideValueOnDisable:!0})}),r.jsxs(T,{className:sn.smalHeader,children:[r.jsx(me,{size:"small",className:X,children:r.jsx(c,{id:"Registrering.Permisjon.Flerbarnsdager"})}),r.jsx(ie,{readOnly:i,name:`${te}.flerbarnsdager`,label:" "})]}),r.jsxs(T,{className:sn.smalHeader,children:[r.jsx(me,{size:"small",className:X,children:r.jsx(c,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),r.jsx(ie,{readOnly:i,name:`${te}.harSamtidigUttak`,label:" "})]}),G.harSamtidigUttak&&r.jsx(T,{className:P?"":sn.alignSamtidigUttak,children:r.jsx(le,{name:`${te}.samtidigUttaksprosent`,validate:[Wt,Am],label:d.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"}),normalizeOnBlur:pn=>Number.isNaN(pn)?pn:parseFloat(pn.toString()).toFixed(2)})}),r.jsx(T,{children:!i&&r.jsx(Be,{className:P?sn.buttonRemoveFirst:sn.buttonRemove,type:"button",variant:"tertiary-neutral",icon:r.jsx(Bs,{}),onClick:()=>{b(O)}})})]}),Ne&&r.jsxs(r.Fragment,{children:[r.jsx(L,{wrap:!0,children:r.jsx(Qr,{size:"small",variant:"warning",children:r.jsx(c,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})}),r.jsx(y,{sixteenPx:!0})]})]}),r.jsx(y,{eightPx:!0})]},A.id)}})};lt.transformValues=s=>s.map(i=>ci.includes(i.periodeType)?{periodeType:i.periodeType,periodeFom:i.periodeFom,periodeTom:i.periodeTom,flerbarnsdager:i.flerbarnsdager?i.flerbarnsdager:!1,harSamtidigUttak:i.harSamtidigUttak?i.harSamtidigUttak:!1,samtidigUttaksprosent:i.samtidigUttaksprosent}:{periodeType:i.periodeType,periodeFom:i.periodeFom,periodeTom:i.periodeTom,morsAktivitet:i.morsAktivitet,flerbarnsdager:i.flerbarnsdager?i.flerbarnsdager:!1,harSamtidigUttak:i.harSamtidigUttak?i.harSamtidigUttak:!1,samtidigUttaksprosent:i.samtidigUttaksprosent});lt.__docgenInfo={description:`RenderPermisjonPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av perioder med permijon.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"FormValues[]"}}],returns:null}],displayName:"RenderPermisjonPeriodeFieldArray"};const Pm="_notLastRow_pe2tr_1",_m={notLastRow:Pm},dn="tidsromPermisjon",un="utsettelsePeriode",js={periodeFom:"",periodeTom:"",arsakForUtsettelse:""},Rs=s=>()=>{const o=s(`${dn}.${un}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},Ts=(s,i,o)=>()=>{const d=s(`${dn}.${un}.${i}.periodeFom`),g=s(`${dn}.${un}.${i}.periodeTom`);return!g&&!d?null:o?qe(g)(d):Oe(d)(g)},xm=s=>s.map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Om=s=>s.filter(({kode:i})=>oa.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),bi=({utsettelseReasons:s,utsettelseKvoter:i,readOnly:o})=>{const d=H(),{control:g,getValues:k,trigger:v,formState:{isSubmitted:m}}=Y(),{fields:h,remove:f,append:j}=he({control:g,name:`${dn}.${un}`});V.useEffect(()=>{h.length===0&&j(js)},[]);const F=V.useCallback(()=>m?v():void 0,[m,v]),b=`${dn}.${un}`;return r.jsx(Se,{fields:h,emptyPeriodTemplate:js,bodyText:d.formatMessage({id:"Registrering.Permisjon.Utsettelse.LeggTilPeriode"}),readOnly:o,append:j,remove:f,children:(w,A,O)=>r.jsxs("div",{className:A!==h.length-1?_m.notLastRow:"",children:[A>0&&r.jsxs(r.Fragment,{children:[r.jsx(na,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(Q,{wrap:!0,children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{name:`${b}.${A}.periodeForUtsettelse`,label:A===0?d.formatMessage({id:"Registrering.Permisjon.Utsettelse.Periode"}):"",selectValues:Om(i),validate:[q]})}),r.jsx(T,{children:r.jsx(E,{name:`${b}.${A}.periodeFom`,label:A===0?d.formatMessage({id:"Registrering.Permisjon.periodeFom"}):"",validate:[q,M,Ts(k,A,!0),Rs(k)],onChange:F})}),r.jsx(T,{children:r.jsx(E,{name:`${b}.${A}.periodeTom`,label:A===0?d.formatMessage({id:"Registrering.Permisjon.periodeTom"}):"",validate:[q,M,Ts(k,A,!1),Rs(k)],onChange:F})}),r.jsx(T,{children:r.jsx(fe,{name:`${b}.${A}.arsakForUtsettelse`,label:A===0?d.formatMessage({id:"Registrering.Permisjon.Utsettelse.Arsak"}):"",selectValues:xm(s),validate:[q],onChange:F})})]}),r.jsx(y,{eightPx:!0}),r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{label:A===0?d.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}):"",name:`${b}.${A}.erArbeidstaker`,selectValues:[r.jsx("option",{value:"true",children:d.formatMessage({id:"Registrering.Permisjon.ErArbeidstaker"})},"true"),r.jsx("option",{value:"false",children:d.formatMessage({id:"Registrering.Permisjon.ErIkkeArbeidstaker"})},"false")],validate:[P=>k(`${dn}.${un}.${A}.arsakForUtsettelse`)==="ARBEID"?q(P):void 0]})}),O&&r.jsx(T,{children:O()})]})]})]},w.id)})};bi.__docgenInfo={description:`RenderUtsettelsePeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ot=({readOnly:s,alleKodeverk:i})=>{const o=i[ee.UTSETTELSE_AARSAK_TYPE],d=i[ee.UTTAK_PERIODE_TYPE],{watch:g}=Y(),k=g(`${dn}.skalUtsette`)||!1;return r.jsxs(r.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Utsettelse.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${dn}.skalUtsette`,label:r.jsx(c,{id:"Registrering.Permisjon.Utsettelse.UtsettUttaket"})}),k&&r.jsx(bi,{utsettelseReasons:o,utsettelseKvoter:d,readOnly:s})]})};ot.buildInitialValues=()=>({[un]:[{}],skalUtsette:!1});ot.__docgenInfo={description:`PermisjonUtsettelsePanel

Viser panel for utsettelse
Komponenten har inputfelter og må derfor rendres som etterkommer av form komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonUtsettelsePanel"};var ji={exports:{}};(function(s,i){(function(o,d){s.exports=d()})(Du,function(){var o;function d(){return o.apply(null,arguments)}function g(e){o=e}function k(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function v(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function m(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function h(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(m(e,n))return!1;return!0}function f(e){return e===void 0}function j(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function F(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function b(e,n){var t=[],a,l=e.length;for(a=0;a<l;++a)t.push(n(e[a],a));return t}function w(e,n){for(var t in n)m(n,t)&&(e[t]=n[t]);return m(n,"toString")&&(e.toString=n.toString),m(n,"valueOf")&&(e.valueOf=n.valueOf),e}function A(e,n,t,a){return Va(e,n,t,a,!0).utc()}function O(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function P(e){return e._pf==null&&(e._pf=O()),e._pf}var G;Array.prototype.some?G=Array.prototype.some:G=function(e){var n=Object(this),t=n.length>>>0,a;for(a=0;a<t;a++)if(a in n&&e.call(this,n[a],a,n))return!0;return!1};function Ne(e){var n=null,t=!1,a=e._d&&!isNaN(e._d.getTime());if(a&&(n=P(e),t=G.call(n.parsedDateParts,function(l){return l!=null}),a=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&t),e._strict&&(a=a&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=a;else return a;return e._isValid}function X(e){var n=A(NaN);return e!=null?w(P(n),e):P(n).userInvalidated=!0,n}var J=d.momentProperties=[],te=!1;function pn(e,n){var t,a,l,u=J.length;if(f(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),f(n._i)||(e._i=n._i),f(n._f)||(e._f=n._f),f(n._l)||(e._l=n._l),f(n._strict)||(e._strict=n._strict),f(n._tzm)||(e._tzm=n._tzm),f(n._isUTC)||(e._isUTC=n._isUTC),f(n._offset)||(e._offset=n._offset),f(n._pf)||(e._pf=P(n)),f(n._locale)||(e._locale=n._locale),u>0)for(t=0;t<u;t++)a=J[t],l=n[a],f(l)||(e[a]=l);return e}function Zn(e){pn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),te===!1&&(te=!0,d.updateOffset(this),te=!1)}function Fe(e){return e instanceof Zn||e!=null&&e._isAMomentObject!=null}function ua(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function je(e,n){var t=!0;return w(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),t){var a=[],l,u,p,_=arguments.length;for(u=0;u<_;u++){if(l="",typeof arguments[u]=="object"){l+=`
[`+u+"] ";for(p in arguments[0])m(arguments[0],p)&&(l+=p+": "+arguments[0][p]+", ");l=l.slice(0,-2)}else l=arguments[u];a.push(l)}ua(e+`
Arguments: `+Array.prototype.slice.call(a).join("")+`
`+new Error().stack),t=!1}return n.apply(this,arguments)},n)}var ga={};function ma(e,n){d.deprecationHandler!=null&&d.deprecationHandler(e,n),ga[e]||(ua(n),ga[e]=!0)}d.suppressDeprecationWarnings=!1,d.deprecationHandler=null;function Ee(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Ii(e){var n,t;for(t in e)m(e,t)&&(n=e[t],Ee(n)?this[t]=n:this["_"+t]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function mt(e,n){var t=w({},e),a;for(a in n)m(n,a)&&(v(e[a])&&v(n[a])?(t[a]={},w(t[a],e[a]),w(t[a],n[a])):n[a]!=null?t[a]=n[a]:delete t[a]);for(a in e)m(e,a)&&!m(n,a)&&v(e[a])&&(t[a]=w({},t[a]));return t}function kt(e){e!=null&&this.set(e)}var pt;Object.keys?pt=Object.keys:pt=function(e){var n,t=[];for(n in e)m(e,n)&&t.push(n);return t};var Di={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Bi(e,n,t){var a=this._calendar[e]||this._calendar.sameElse;return Ee(a)?a.call(n,t):a}function Ve(e,n,t){var a=""+Math.abs(e),l=n-a.length,u=e>=0;return(u?t?"+":"":"-")+Math.pow(10,Math.max(0,l)).toString().substr(1)+a}var vt=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,hr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,yt={},qn={};function S(e,n,t,a){var l=a;typeof a=="string"&&(l=function(){return this[a]()}),e&&(qn[e]=l),n&&(qn[n[0]]=function(){return Ve(l.apply(this,arguments),n[1],n[2])}),t&&(qn[t]=function(){return this.localeData().ordinal(l.apply(this,arguments),e)})}function Ki(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Li(e){var n=e.match(vt),t,a;for(t=0,a=n.length;t<a;t++)qn[n[t]]?n[t]=qn[n[t]]:n[t]=Ki(n[t]);return function(l){var u="",p;for(p=0;p<a;p++)u+=Ee(n[p])?n[p].call(l,e):n[p];return u}}function cr(e,n){return e.isValid()?(n=ka(n,e.localeData()),yt[n]=yt[n]||Li(n),yt[n](e)):e.localeData().invalidDate()}function ka(e,n){var t=5;function a(l){return n.longDateFormat(l)||l}for(hr.lastIndex=0;t>=0&&hr.test(e);)e=e.replace(hr,a),hr.lastIndex=0,t-=1;return e}var Yi={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ui(e){var n=this._longDateFormat[e],t=this._longDateFormat[e.toUpperCase()];return n||!t?n:(this._longDateFormat[e]=t.match(vt).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),this._longDateFormat[e])}var $i="Invalid date";function Hi(){return this._invalidDate}var Gi="%d",Ci=/\d{1,2}/;function Wi(e){return this._ordinal.replace("%d",e)}var zi={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ji(e,n,t,a){var l=this._relativeTime[t];return Ee(l)?l(e,n,t,a):l.replace(/%d/i,e)}function Xi(e,n){var t=this._relativeTime[e>0?"future":"past"];return Ee(t)?t(n):t.replace(/%s/i,n)}var pa={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Re(e){return typeof e=="string"?pa[e]||pa[e.toLowerCase()]:void 0}function ft(e){var n={},t,a;for(a in e)m(e,a)&&(t=Re(a),t&&(n[t]=e[a]));return n}var Zi={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Qi(e){var n=[],t;for(t in e)m(e,t)&&n.push({unit:t,priority:Zi[t]});return n.sort(function(a,l){return a.priority-l.priority}),n}var va=/\d/,ce=/\d\d/,ya=/\d{3}/,ht=/\d{4}/,br=/[+-]?\d{6}/,C=/\d\d?/,fa=/\d\d\d\d?/,ha=/\d\d\d\d\d\d?/,jr=/\d{1,3}/,ct=/\d{1,4}/,Rr=/[+-]?\d{1,6}/,Fn=/\d+/,Tr=/[+-]?\d+/,el=/Z|[+-]\d\d:?\d\d/gi,Ar=/Z|[+-]\d\d(?::?\d\d)?/gi,nl=/[+-]?\d+(\.\d{1,3})?/,Qn=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,wn=/^[1-9]\d?/,bt=/^([1-9]\d|\d)/,qr;qr={};function x(e,n,t){qr[e]=Ee(n)?n:function(a,l){return a&&t?t:n}}function rl(e,n){return m(qr,e)?qr[e](n._strict,n._locale):new RegExp(tl(e))}function tl(e){return Le(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,t,a,l,u){return t||a||l||u}))}function Le(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Te(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function I(e){var n=+e,t=0;return n!==0&&isFinite(n)&&(t=Te(n)),t}var jt={};function $(e,n){var t,a=n,l;for(typeof e=="string"&&(e=[e]),j(n)&&(a=function(u,p){p[n]=I(u)}),l=e.length,t=0;t<l;t++)jt[e[t]]=a}function er(e,n){$(e,function(t,a,l,u){l._w=l._w||{},n(t,l._w,l,u)})}function al(e,n,t){n!=null&&m(jt,e)&&jt[e](n,t._a,t,e)}function Fr(e){return e%4===0&&e%100!==0||e%400===0}var ge=0,Ye=1,Me=2,ae=3,we=4,Ue=5,vn=6,sl=7,il=8;S("Y",0,0,function(){var e=this.year();return e<=9999?Ve(e,4):"+"+e}),S(0,["YY",2],0,function(){return this.year()%100}),S(0,["YYYY",4],0,"year"),S(0,["YYYYY",5],0,"year"),S(0,["YYYYYY",6,!0],0,"year"),x("Y",Tr),x("YY",C,ce),x("YYYY",ct,ht),x("YYYYY",Rr,br),x("YYYYYY",Rr,br),$(["YYYYY","YYYYYY"],ge),$("YYYY",function(e,n){n[ge]=e.length===2?d.parseTwoDigitYear(e):I(e)}),$("YY",function(e,n){n[ge]=d.parseTwoDigitYear(e)}),$("Y",function(e,n){n[ge]=parseInt(e,10)});function nr(e){return Fr(e)?366:365}d.parseTwoDigitYear=function(e){return I(e)+(I(e)>68?1900:2e3)};var ca=Pn("FullYear",!0);function ll(){return Fr(this.year())}function Pn(e,n){return function(t){return t!=null?(ba(this,e,t),d.updateOffset(this,n),this):rr(this,e)}}function rr(e,n){if(!e.isValid())return NaN;var t=e._d,a=e._isUTC;switch(n){case"Milliseconds":return a?t.getUTCMilliseconds():t.getMilliseconds();case"Seconds":return a?t.getUTCSeconds():t.getSeconds();case"Minutes":return a?t.getUTCMinutes():t.getMinutes();case"Hours":return a?t.getUTCHours():t.getHours();case"Date":return a?t.getUTCDate():t.getDate();case"Day":return a?t.getUTCDay():t.getDay();case"Month":return a?t.getUTCMonth():t.getMonth();case"FullYear":return a?t.getUTCFullYear():t.getFullYear();default:return NaN}}function ba(e,n,t){var a,l,u,p,_;if(!(!e.isValid()||isNaN(t))){switch(a=e._d,l=e._isUTC,n){case"Milliseconds":return void(l?a.setUTCMilliseconds(t):a.setMilliseconds(t));case"Seconds":return void(l?a.setUTCSeconds(t):a.setSeconds(t));case"Minutes":return void(l?a.setUTCMinutes(t):a.setMinutes(t));case"Hours":return void(l?a.setUTCHours(t):a.setHours(t));case"Date":return void(l?a.setUTCDate(t):a.setDate(t));case"FullYear":break;default:return}u=t,p=e.month(),_=e.date(),_=_===29&&p===1&&!Fr(u)?28:_,l?a.setUTCFullYear(u,p,_):a.setFullYear(u,p,_)}}function ol(e){return e=Re(e),Ee(this[e])?this[e]():this}function dl(e,n){if(typeof e=="object"){e=ft(e);var t=Qi(e),a,l=t.length;for(a=0;a<l;a++)this[t[a].unit](e[t[a].unit])}else if(e=Re(e),Ee(this[e]))return this[e](n);return this}function ul(e,n){return(e%n+n)%n}var Z;Array.prototype.indexOf?Z=Array.prototype.indexOf:Z=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function Rt(e,n){if(isNaN(e)||isNaN(n))return NaN;var t=ul(n,12);return e+=(n-t)/12,t===1?Fr(e)?29:28:31-t%7%2}S("M",["MM",2],"Mo",function(){return this.month()+1}),S("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),S("MMMM",0,0,function(e){return this.localeData().months(this,e)}),x("M",C,wn),x("MM",C,ce),x("MMM",function(e,n){return n.monthsShortRegex(e)}),x("MMMM",function(e,n){return n.monthsRegex(e)}),$(["M","MM"],function(e,n){n[Ye]=I(e)-1}),$(["MMM","MMMM"],function(e,n,t,a){var l=t._locale.monthsParse(e,a,t._strict);l!=null?n[Ye]=l:P(t).invalidMonth=e});var gl="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ja="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ra=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ml=Qn,kl=Qn;function pl(e,n){return e?k(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Ra).test(n)?"format":"standalone"][e.month()]:k(this._months)?this._months:this._months.standalone}function vl(e,n){return e?k(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Ra.test(n)?"format":"standalone"][e.month()]:k(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function yl(e,n,t){var a,l,u,p=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)u=A([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(u,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(u,"").toLocaleLowerCase();return t?n==="MMM"?(l=Z.call(this._shortMonthsParse,p),l!==-1?l:null):(l=Z.call(this._longMonthsParse,p),l!==-1?l:null):n==="MMM"?(l=Z.call(this._shortMonthsParse,p),l!==-1?l:(l=Z.call(this._longMonthsParse,p),l!==-1?l:null)):(l=Z.call(this._longMonthsParse,p),l!==-1?l:(l=Z.call(this._shortMonthsParse,p),l!==-1?l:null))}function fl(e,n,t){var a,l,u;if(this._monthsParseExact)return yl.call(this,e,n,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(l=A([2e3,a]),t&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(l,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(l,"").replace(".","")+"$","i")),!t&&!this._monthsParse[a]&&(u="^"+this.months(l,"")+"|^"+this.monthsShort(l,""),this._monthsParse[a]=new RegExp(u.replace(".",""),"i")),t&&n==="MMMM"&&this._longMonthsParse[a].test(e))return a;if(t&&n==="MMM"&&this._shortMonthsParse[a].test(e))return a;if(!t&&this._monthsParse[a].test(e))return a}}function Ta(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=I(n);else if(n=e.localeData().monthsParse(n),!j(n))return e}var t=n,a=e.date();return a=a<29?a:Math.min(a,Rt(e.year(),t)),e._isUTC?e._d.setUTCMonth(t,a):e._d.setMonth(t,a),e}function Aa(e){return e!=null?(Ta(this,e),d.updateOffset(this,!0),this):rr(this,"Month")}function hl(){return Rt(this.year(),this.month())}function cl(e){return this._monthsParseExact?(m(this,"_monthsRegex")||qa.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=ml),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function bl(e){return this._monthsParseExact?(m(this,"_monthsRegex")||qa.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=kl),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function qa(){function e(N,D){return D.length-N.length}var n=[],t=[],a=[],l,u,p,_;for(l=0;l<12;l++)u=A([2e3,l]),p=Le(this.monthsShort(u,"")),_=Le(this.months(u,"")),n.push(p),t.push(_),a.push(_),a.push(p);n.sort(e),t.sort(e),a.sort(e),this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function jl(e,n,t,a,l,u,p){var _;return e<100&&e>=0?(_=new Date(e+400,n,t,a,l,u,p),isFinite(_.getFullYear())&&_.setFullYear(e)):_=new Date(e,n,t,a,l,u,p),_}function tr(e){var n,t;return e<100&&e>=0?(t=Array.prototype.slice.call(arguments),t[0]=e+400,n=new Date(Date.UTC.apply(null,t)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function wr(e,n,t){var a=7+n-t,l=(7+tr(e,0,a).getUTCDay()-n)%7;return-l+a-1}function Fa(e,n,t,a,l){var u=(7+t-a)%7,p=wr(e,a,l),_=1+7*(n-1)+u+p,N,D;return _<=0?(N=e-1,D=nr(N)+_):_>nr(e)?(N=e+1,D=_-nr(e)):(N=e,D=_),{year:N,dayOfYear:D}}function ar(e,n,t){var a=wr(e.year(),n,t),l=Math.floor((e.dayOfYear()-a-1)/7)+1,u,p;return l<1?(p=e.year()-1,u=l+$e(p,n,t)):l>$e(e.year(),n,t)?(u=l-$e(e.year(),n,t),p=e.year()+1):(p=e.year(),u=l),{week:u,year:p}}function $e(e,n,t){var a=wr(e,n,t),l=wr(e+1,n,t);return(nr(e)-a+l)/7}S("w",["ww",2],"wo","week"),S("W",["WW",2],"Wo","isoWeek"),x("w",C,wn),x("ww",C,ce),x("W",C,wn),x("WW",C,ce),er(["w","ww","W","WW"],function(e,n,t,a){n[a.substr(0,1)]=I(e)});function Rl(e){return ar(e,this._week.dow,this._week.doy).week}var Tl={dow:0,doy:6};function Al(){return this._week.dow}function ql(){return this._week.doy}function Fl(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function wl(e){var n=ar(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}S("d",0,"do","day"),S("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),S("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),S("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),S("e",0,0,"weekday"),S("E",0,0,"isoWeekday"),x("d",C),x("e",C),x("E",C),x("dd",function(e,n){return n.weekdaysMinRegex(e)}),x("ddd",function(e,n){return n.weekdaysShortRegex(e)}),x("dddd",function(e,n){return n.weekdaysRegex(e)}),er(["dd","ddd","dddd"],function(e,n,t,a){var l=t._locale.weekdaysParse(e,a,t._strict);l!=null?n.d=l:P(t).invalidWeekday=e}),er(["d","e","E"],function(e,n,t,a){n[a]=I(e)});function Pl(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function _l(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Tt(e,n){return e.slice(n,7).concat(e.slice(0,n))}var xl="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),wa="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ol="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Sl=Qn,Nl=Qn,El=Qn;function Vl(e,n){var t=k(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?Tt(t,this._week.dow):e?t[e.day()]:t}function Ml(e){return e===!0?Tt(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Il(e){return e===!0?Tt(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Dl(e,n,t){var a,l,u,p=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)u=A([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(u,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(u,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(u,"").toLocaleLowerCase();return t?n==="dddd"?(l=Z.call(this._weekdaysParse,p),l!==-1?l:null):n==="ddd"?(l=Z.call(this._shortWeekdaysParse,p),l!==-1?l:null):(l=Z.call(this._minWeekdaysParse,p),l!==-1?l:null):n==="dddd"?(l=Z.call(this._weekdaysParse,p),l!==-1||(l=Z.call(this._shortWeekdaysParse,p),l!==-1)?l:(l=Z.call(this._minWeekdaysParse,p),l!==-1?l:null)):n==="ddd"?(l=Z.call(this._shortWeekdaysParse,p),l!==-1||(l=Z.call(this._weekdaysParse,p),l!==-1)?l:(l=Z.call(this._minWeekdaysParse,p),l!==-1?l:null)):(l=Z.call(this._minWeekdaysParse,p),l!==-1||(l=Z.call(this._weekdaysParse,p),l!==-1)?l:(l=Z.call(this._shortWeekdaysParse,p),l!==-1?l:null))}function Bl(e,n,t){var a,l,u;if(this._weekdaysParseExact)return Dl.call(this,e,n,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(l=A([2e3,1]).day(a),t&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(l,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(l,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(l,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(u="^"+this.weekdays(l,"")+"|^"+this.weekdaysShort(l,"")+"|^"+this.weekdaysMin(l,""),this._weekdaysParse[a]=new RegExp(u.replace(".",""),"i")),t&&n==="dddd"&&this._fullWeekdaysParse[a].test(e))return a;if(t&&n==="ddd"&&this._shortWeekdaysParse[a].test(e))return a;if(t&&n==="dd"&&this._minWeekdaysParse[a].test(e))return a;if(!t&&this._weekdaysParse[a].test(e))return a}}function Kl(e){if(!this.isValid())return e!=null?this:NaN;var n=rr(this,"Day");return e!=null?(e=Pl(e,this.localeData()),this.add(e-n,"d")):n}function Ll(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function Yl(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=_l(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function Ul(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||At.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=Sl),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function $l(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||At.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Nl),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Hl(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||At.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=El),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function At(){function e(pe,ze){return ze.length-pe.length}var n=[],t=[],a=[],l=[],u,p,_,N,D;for(u=0;u<7;u++)p=A([2e3,1]).day(u),_=Le(this.weekdaysMin(p,"")),N=Le(this.weekdaysShort(p,"")),D=Le(this.weekdays(p,"")),n.push(_),t.push(N),a.push(D),l.push(_),l.push(N),l.push(D);n.sort(e),t.sort(e),a.sort(e),l.sort(e),this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function qt(){return this.hours()%12||12}function Gl(){return this.hours()||24}S("H",["HH",2],0,"hour"),S("h",["hh",2],0,qt),S("k",["kk",2],0,Gl),S("hmm",0,0,function(){return""+qt.apply(this)+Ve(this.minutes(),2)}),S("hmmss",0,0,function(){return""+qt.apply(this)+Ve(this.minutes(),2)+Ve(this.seconds(),2)}),S("Hmm",0,0,function(){return""+this.hours()+Ve(this.minutes(),2)}),S("Hmmss",0,0,function(){return""+this.hours()+Ve(this.minutes(),2)+Ve(this.seconds(),2)});function Pa(e,n){S(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}Pa("a",!0),Pa("A",!1);function _a(e,n){return n._meridiemParse}x("a",_a),x("A",_a),x("H",C,bt),x("h",C,wn),x("k",C,wn),x("HH",C,ce),x("hh",C,ce),x("kk",C,ce),x("hmm",fa),x("hmmss",ha),x("Hmm",fa),x("Hmmss",ha),$(["H","HH"],ae),$(["k","kk"],function(e,n,t){var a=I(e);n[ae]=a===24?0:a}),$(["a","A"],function(e,n,t){t._isPm=t._locale.isPM(e),t._meridiem=e}),$(["h","hh"],function(e,n,t){n[ae]=I(e),P(t).bigHour=!0}),$("hmm",function(e,n,t){var a=e.length-2;n[ae]=I(e.substr(0,a)),n[we]=I(e.substr(a)),P(t).bigHour=!0}),$("hmmss",function(e,n,t){var a=e.length-4,l=e.length-2;n[ae]=I(e.substr(0,a)),n[we]=I(e.substr(a,2)),n[Ue]=I(e.substr(l)),P(t).bigHour=!0}),$("Hmm",function(e,n,t){var a=e.length-2;n[ae]=I(e.substr(0,a)),n[we]=I(e.substr(a))}),$("Hmmss",function(e,n,t){var a=e.length-4,l=e.length-2;n[ae]=I(e.substr(0,a)),n[we]=I(e.substr(a,2)),n[Ue]=I(e.substr(l))});function Cl(e){return(e+"").toLowerCase().charAt(0)==="p"}var Wl=/[ap]\.?m?\.?/i,zl=Pn("Hours",!0);function Jl(e,n,t){return e>11?t?"pm":"PM":t?"am":"AM"}var xa={calendar:Di,longDateFormat:Yi,invalidDate:$i,ordinal:Gi,dayOfMonthOrdinalParse:Ci,relativeTime:zi,months:gl,monthsShort:ja,week:Tl,weekdays:xl,weekdaysMin:Ol,weekdaysShort:wa,meridiemParse:Wl},z={},sr={},ir;function Xl(e,n){var t,a=Math.min(e.length,n.length);for(t=0;t<a;t+=1)if(e[t]!==n[t])return t;return a}function Oa(e){return e&&e.toLowerCase().replace("_","-")}function Zl(e){for(var n=0,t,a,l,u;n<e.length;){for(u=Oa(e[n]).split("-"),t=u.length,a=Oa(e[n+1]),a=a?a.split("-"):null;t>0;){if(l=Pr(u.slice(0,t).join("-")),l)return l;if(a&&a.length>=t&&Xl(u,a)>=t-1)break;t--}n++}return ir}function Ql(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Pr(e){var n=null,t;if(z[e]===void 0&&s&&s.exports&&Ql(e))try{n=ir._abbr,t=lg,t("./locale/"+e),rn(n)}catch{z[e]=null}return z[e]}function rn(e,n){var t;return e&&(f(n)?t=He(e):t=Ft(e,n),t?ir=t:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),ir._abbr}function Ft(e,n){if(n!==null){var t,a=xa;if(n.abbr=e,z[e]!=null)ma("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=z[e]._config;else if(n.parentLocale!=null)if(z[n.parentLocale]!=null)a=z[n.parentLocale]._config;else if(t=Pr(n.parentLocale),t!=null)a=t._config;else return sr[n.parentLocale]||(sr[n.parentLocale]=[]),sr[n.parentLocale].push({name:e,config:n}),null;return z[e]=new kt(mt(a,n)),sr[e]&&sr[e].forEach(function(l){Ft(l.name,l.config)}),rn(e),z[e]}else return delete z[e],null}function eo(e,n){if(n!=null){var t,a,l=xa;z[e]!=null&&z[e].parentLocale!=null?z[e].set(mt(z[e]._config,n)):(a=Pr(e),a!=null&&(l=a._config),n=mt(l,n),a==null&&(n.abbr=e),t=new kt(n),t.parentLocale=z[e],z[e]=t),rn(e)}else z[e]!=null&&(z[e].parentLocale!=null?(z[e]=z[e].parentLocale,e===rn()&&rn(e)):z[e]!=null&&delete z[e]);return z[e]}function He(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return ir;if(!k(e)){if(n=Pr(e),n)return n;e=[e]}return Zl(e)}function no(){return pt(z)}function wt(e){var n,t=e._a;return t&&P(e).overflow===-2&&(n=t[Ye]<0||t[Ye]>11?Ye:t[Me]<1||t[Me]>Rt(t[ge],t[Ye])?Me:t[ae]<0||t[ae]>24||t[ae]===24&&(t[we]!==0||t[Ue]!==0||t[vn]!==0)?ae:t[we]<0||t[we]>59?we:t[Ue]<0||t[Ue]>59?Ue:t[vn]<0||t[vn]>999?vn:-1,P(e)._overflowDayOfYear&&(n<ge||n>Me)&&(n=Me),P(e)._overflowWeeks&&n===-1&&(n=sl),P(e)._overflowWeekday&&n===-1&&(n=il),P(e).overflow=n),e}var ro=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,to=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ao=/Z|[+-]\d\d(?::?\d\d)?/,_r=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Pt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],so=/^\/?Date\((-?\d+)/i,io=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,lo={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Sa(e){var n,t,a=e._i,l=ro.exec(a)||to.exec(a),u,p,_,N,D=_r.length,pe=Pt.length;if(l){for(P(e).iso=!0,n=0,t=D;n<t;n++)if(_r[n][1].exec(l[1])){p=_r[n][0],u=_r[n][2]!==!1;break}if(p==null){e._isValid=!1;return}if(l[3]){for(n=0,t=pe;n<t;n++)if(Pt[n][1].exec(l[3])){_=(l[2]||" ")+Pt[n][0];break}if(_==null){e._isValid=!1;return}}if(!u&&_!=null){e._isValid=!1;return}if(l[4])if(ao.exec(l[4]))N="Z";else{e._isValid=!1;return}e._f=p+(_||"")+(N||""),xt(e)}else e._isValid=!1}function oo(e,n,t,a,l,u){var p=[uo(e),ja.indexOf(n),parseInt(t,10),parseInt(a,10),parseInt(l,10)];return u&&p.push(parseInt(u,10)),p}function uo(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function go(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function mo(e,n,t){if(e){var a=wa.indexOf(e),l=new Date(n[0],n[1],n[2]).getDay();if(a!==l)return P(t).weekdayMismatch=!0,t._isValid=!1,!1}return!0}function ko(e,n,t){if(e)return lo[e];if(n)return 0;var a=parseInt(t,10),l=a%100,u=(a-l)/100;return u*60+l}function Na(e){var n=io.exec(go(e._i)),t;if(n){if(t=oo(n[4],n[3],n[2],n[5],n[6],n[7]),!mo(n[1],t,e))return;e._a=t,e._tzm=ko(n[8],n[9],n[10]),e._d=tr.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),P(e).rfc2822=!0}else e._isValid=!1}function po(e){var n=so.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(Sa(e),e._isValid===!1)delete e._isValid;else return;if(Na(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=je("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function _n(e,n,t){return e??n??t}function vo(e){var n=new Date(d.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function _t(e){var n,t,a=[],l,u,p;if(!e._d){for(l=vo(e),e._w&&e._a[Me]==null&&e._a[Ye]==null&&yo(e),e._dayOfYear!=null&&(p=_n(e._a[ge],l[ge]),(e._dayOfYear>nr(p)||e._dayOfYear===0)&&(P(e)._overflowDayOfYear=!0),t=tr(p,0,e._dayOfYear),e._a[Ye]=t.getUTCMonth(),e._a[Me]=t.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=a[n]=l[n];for(;n<7;n++)e._a[n]=a[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[ae]===24&&e._a[we]===0&&e._a[Ue]===0&&e._a[vn]===0&&(e._nextDay=!0,e._a[ae]=0),e._d=(e._useUTC?tr:jl).apply(null,a),u=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ae]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==u&&(P(e).weekdayMismatch=!0)}}function yo(e){var n,t,a,l,u,p,_,N,D;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(u=1,p=4,t=_n(n.GG,e._a[ge],ar(W(),1,4).year),a=_n(n.W,1),l=_n(n.E,1),(l<1||l>7)&&(N=!0)):(u=e._locale._week.dow,p=e._locale._week.doy,D=ar(W(),u,p),t=_n(n.gg,e._a[ge],D.year),a=_n(n.w,D.week),n.d!=null?(l=n.d,(l<0||l>6)&&(N=!0)):n.e!=null?(l=n.e+u,(n.e<0||n.e>6)&&(N=!0)):l=u),a<1||a>$e(t,u,p)?P(e)._overflowWeeks=!0:N!=null?P(e)._overflowWeekday=!0:(_=Fa(t,a,l,u,p),e._a[ge]=_.year,e._dayOfYear=_.dayOfYear)}d.ISO_8601=function(){},d.RFC_2822=function(){};function xt(e){if(e._f===d.ISO_8601){Sa(e);return}if(e._f===d.RFC_2822){Na(e);return}e._a=[],P(e).empty=!0;var n=""+e._i,t,a,l,u,p,_=n.length,N=0,D,pe;for(l=ka(e._f,e._locale).match(vt)||[],pe=l.length,t=0;t<pe;t++)u=l[t],a=(n.match(rl(u,e))||[])[0],a&&(p=n.substr(0,n.indexOf(a)),p.length>0&&P(e).unusedInput.push(p),n=n.slice(n.indexOf(a)+a.length),N+=a.length),qn[u]?(a?P(e).empty=!1:P(e).unusedTokens.push(u),al(u,a,e)):e._strict&&!a&&P(e).unusedTokens.push(u);P(e).charsLeftOver=_-N,n.length>0&&P(e).unusedInput.push(n),e._a[ae]<=12&&P(e).bigHour===!0&&e._a[ae]>0&&(P(e).bigHour=void 0),P(e).parsedDateParts=e._a.slice(0),P(e).meridiem=e._meridiem,e._a[ae]=fo(e._locale,e._a[ae],e._meridiem),D=P(e).era,D!==null&&(e._a[ge]=e._locale.erasConvertYear(D,e._a[ge])),_t(e),wt(e)}function fo(e,n,t){var a;return t==null?n:e.meridiemHour!=null?e.meridiemHour(n,t):(e.isPM!=null&&(a=e.isPM(t),a&&n<12&&(n+=12),!a&&n===12&&(n=0)),n)}function ho(e){var n,t,a,l,u,p,_=!1,N=e._f.length;if(N===0){P(e).invalidFormat=!0,e._d=new Date(NaN);return}for(l=0;l<N;l++)u=0,p=!1,n=pn({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[l],xt(n),Ne(n)&&(p=!0),u+=P(n).charsLeftOver,u+=P(n).unusedTokens.length*10,P(n).score=u,_?u<a&&(a=u,t=n):(a==null||u<a||p)&&(a=u,t=n,p&&(_=!0));w(e,t||n)}function co(e){if(!e._d){var n=ft(e._i),t=n.day===void 0?n.date:n.day;e._a=b([n.year,n.month,t,n.hour,n.minute,n.second,n.millisecond],function(a){return a&&parseInt(a,10)}),_t(e)}}function bo(e){var n=new Zn(wt(Ea(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function Ea(e){var n=e._i,t=e._f;return e._locale=e._locale||He(e._l),n===null||t===void 0&&n===""?X({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),Fe(n)?new Zn(wt(n)):(F(n)?e._d=n:k(t)?ho(e):t?xt(e):jo(e),Ne(e)||(e._d=null),e))}function jo(e){var n=e._i;f(n)?e._d=new Date(d.now()):F(n)?e._d=new Date(n.valueOf()):typeof n=="string"?po(e):k(n)?(e._a=b(n.slice(0),function(t){return parseInt(t,10)}),_t(e)):v(n)?co(e):j(n)?e._d=new Date(n):d.createFromInputFallback(e)}function Va(e,n,t,a,l){var u={};return(n===!0||n===!1)&&(a=n,n=void 0),(t===!0||t===!1)&&(a=t,t=void 0),(v(e)&&h(e)||k(e)&&e.length===0)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=l,u._l=t,u._i=e,u._f=n,u._strict=a,bo(u)}function W(e,n,t,a){return Va(e,n,t,a,!1)}var Ro=je("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:X()}),To=je("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:X()});function Ma(e,n){var t,a;if(n.length===1&&k(n[0])&&(n=n[0]),!n.length)return W();for(t=n[0],a=1;a<n.length;++a)(!n[a].isValid()||n[a][e](t))&&(t=n[a]);return t}function Ao(){var e=[].slice.call(arguments,0);return Ma("isBefore",e)}function qo(){var e=[].slice.call(arguments,0);return Ma("isAfter",e)}var Fo=function(){return Date.now?Date.now():+new Date},lr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function wo(e){var n,t=!1,a,l=lr.length;for(n in e)if(m(e,n)&&!(Z.call(lr,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(a=0;a<l;++a)if(e[lr[a]]){if(t)return!1;parseFloat(e[lr[a]])!==I(e[lr[a]])&&(t=!0)}return!0}function Po(){return this._isValid}function _o(){return Pe(NaN)}function xr(e){var n=ft(e),t=n.year||0,a=n.quarter||0,l=n.month||0,u=n.week||n.isoWeek||0,p=n.day||0,_=n.hour||0,N=n.minute||0,D=n.second||0,pe=n.millisecond||0;this._isValid=wo(n),this._milliseconds=+pe+D*1e3+N*6e4+_*1e3*60*60,this._days=+p+u*7,this._months=+l+a*3+t*12,this._data={},this._locale=He(),this._bubble()}function Or(e){return e instanceof xr}function Ot(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function xo(e,n,t){var a=Math.min(e.length,n.length),l=Math.abs(e.length-n.length),u=0,p;for(p=0;p<a;p++)(t&&e[p]!==n[p]||!t&&I(e[p])!==I(n[p]))&&u++;return u+l}function Ia(e,n){S(e,0,0,function(){var t=this.utcOffset(),a="+";return t<0&&(t=-t,a="-"),a+Ve(~~(t/60),2)+n+Ve(~~t%60,2)})}Ia("Z",":"),Ia("ZZ",""),x("Z",Ar),x("ZZ",Ar),$(["Z","ZZ"],function(e,n,t){t._useUTC=!0,t._tzm=St(Ar,e)});var Oo=/([\+\-]|\d\d)/gi;function St(e,n){var t=(n||"").match(e),a,l,u;return t===null?null:(a=t[t.length-1]||[],l=(a+"").match(Oo)||["-",0,0],u=+(l[1]*60)+I(l[2]),u===0?0:l[0]==="+"?u:-u)}function Nt(e,n){var t,a;return n._isUTC?(t=n.clone(),a=(Fe(e)||F(e)?e.valueOf():W(e).valueOf())-t.valueOf(),t._d.setTime(t._d.valueOf()+a),d.updateOffset(t,!1),t):W(e).local()}function Et(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function So(e,n,t){var a=this._offset||0,l;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=St(Ar,e),e===null)return this}else Math.abs(e)<16&&!t&&(e=e*60);return!this._isUTC&&n&&(l=Et(this)),this._offset=e,this._isUTC=!0,l!=null&&this.add(l,"m"),a!==e&&(!n||this._changeInProgress?La(this,Pe(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?a:Et(this)}function No(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function Eo(e){return this.utcOffset(0,e)}function Vo(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Et(this),"m")),this}function Mo(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=St(el,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Io(e){return this.isValid()?(e=e?W(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Do(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Bo(){if(!f(this._isDSTShifted))return this._isDSTShifted;var e={},n;return pn(e,this),e=Ea(e),e._a?(n=e._isUTC?A(e._a):W(e._a),this._isDSTShifted=this.isValid()&&xo(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Ko(){return this.isValid()?!this._isUTC:!1}function Lo(){return this.isValid()?this._isUTC:!1}function Da(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Yo=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Uo=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Pe(e,n){var t=e,a=null,l,u,p;return Or(e)?t={ms:e._milliseconds,d:e._days,M:e._months}:j(e)||!isNaN(+e)?(t={},n?t[n]=+e:t.milliseconds=+e):(a=Yo.exec(e))?(l=a[1]==="-"?-1:1,t={y:0,d:I(a[Me])*l,h:I(a[ae])*l,m:I(a[we])*l,s:I(a[Ue])*l,ms:I(Ot(a[vn]*1e3))*l}):(a=Uo.exec(e))?(l=a[1]==="-"?-1:1,t={y:yn(a[2],l),M:yn(a[3],l),w:yn(a[4],l),d:yn(a[5],l),h:yn(a[6],l),m:yn(a[7],l),s:yn(a[8],l)}):t==null?t={}:typeof t=="object"&&("from"in t||"to"in t)&&(p=$o(W(t.from),W(t.to)),t={},t.ms=p.milliseconds,t.M=p.months),u=new xr(t),Or(e)&&m(e,"_locale")&&(u._locale=e._locale),Or(e)&&m(e,"_isValid")&&(u._isValid=e._isValid),u}Pe.fn=xr.prototype,Pe.invalid=_o;function yn(e,n){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*n}function Ba(e,n){var t={};return t.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(t.months,"M").isAfter(n)&&--t.months,t.milliseconds=+n-+e.clone().add(t.months,"M"),t}function $o(e,n){var t;return e.isValid()&&n.isValid()?(n=Nt(n,e),e.isBefore(n)?t=Ba(e,n):(t=Ba(n,e),t.milliseconds=-t.milliseconds,t.months=-t.months),t):{milliseconds:0,months:0}}function Ka(e,n){return function(t,a){var l,u;return a!==null&&!isNaN(+a)&&(ma(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),u=t,t=a,a=u),l=Pe(t,a),La(this,l,e),this}}function La(e,n,t,a){var l=n._milliseconds,u=Ot(n._days),p=Ot(n._months);e.isValid()&&(a=a??!0,p&&Ta(e,rr(e,"Month")+p*t),u&&ba(e,"Date",rr(e,"Date")+u*t),l&&e._d.setTime(e._d.valueOf()+l*t),a&&d.updateOffset(e,u||p))}var Ho=Ka(1,"add"),Go=Ka(-1,"subtract");function Ya(e){return typeof e=="string"||e instanceof String}function Co(e){return Fe(e)||F(e)||Ya(e)||j(e)||zo(e)||Wo(e)||e===null||e===void 0}function Wo(e){var n=v(e)&&!h(e),t=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],l,u,p=a.length;for(l=0;l<p;l+=1)u=a[l],t=t||m(e,u);return n&&t}function zo(e){var n=k(e),t=!1;return n&&(t=e.filter(function(a){return!j(a)&&Ya(e)}).length===0),n&&t}function Jo(e){var n=v(e)&&!h(e),t=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],l,u;for(l=0;l<a.length;l+=1)u=a[l],t=t||m(e,u);return n&&t}function Xo(e,n){var t=e.diff(n,"days",!0);return t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"}function Zo(e,n){arguments.length===1&&(arguments[0]?Co(arguments[0])?(e=arguments[0],n=void 0):Jo(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var t=e||W(),a=Nt(t,this).startOf("day"),l=d.calendarFormat(this,a)||"sameElse",u=n&&(Ee(n[l])?n[l].call(this,t):n[l]);return this.format(u||this.localeData().calendar(l,this,W(t)))}function Qo(){return new Zn(this)}function ed(e,n){var t=Fe(e)?e:W(e);return this.isValid()&&t.isValid()?(n=Re(n)||"millisecond",n==="millisecond"?this.valueOf()>t.valueOf():t.valueOf()<this.clone().startOf(n).valueOf()):!1}function nd(e,n){var t=Fe(e)?e:W(e);return this.isValid()&&t.isValid()?(n=Re(n)||"millisecond",n==="millisecond"?this.valueOf()<t.valueOf():this.clone().endOf(n).valueOf()<t.valueOf()):!1}function rd(e,n,t,a){var l=Fe(e)?e:W(e),u=Fe(n)?n:W(n);return this.isValid()&&l.isValid()&&u.isValid()?(a=a||"()",(a[0]==="("?this.isAfter(l,t):!this.isBefore(l,t))&&(a[1]===")"?this.isBefore(u,t):!this.isAfter(u,t))):!1}function td(e,n){var t=Fe(e)?e:W(e),a;return this.isValid()&&t.isValid()?(n=Re(n)||"millisecond",n==="millisecond"?this.valueOf()===t.valueOf():(a=t.valueOf(),this.clone().startOf(n).valueOf()<=a&&a<=this.clone().endOf(n).valueOf())):!1}function ad(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function sd(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function id(e,n,t){var a,l,u;if(!this.isValid())return NaN;if(a=Nt(e,this),!a.isValid())return NaN;switch(l=(a.utcOffset()-this.utcOffset())*6e4,n=Re(n),n){case"year":u=Sr(this,a)/12;break;case"month":u=Sr(this,a);break;case"quarter":u=Sr(this,a)/3;break;case"second":u=(this-a)/1e3;break;case"minute":u=(this-a)/6e4;break;case"hour":u=(this-a)/36e5;break;case"day":u=(this-a-l)/864e5;break;case"week":u=(this-a-l)/6048e5;break;default:u=this-a}return t?u:Te(u)}function Sr(e,n){if(e.date()<n.date())return-Sr(n,e);var t=(n.year()-e.year())*12+(n.month()-e.month()),a=e.clone().add(t,"months"),l,u;return n-a<0?(l=e.clone().add(t-1,"months"),u=(n-a)/(a-l)):(l=e.clone().add(t+1,"months"),u=(n-a)/(l-a)),-(t+u)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function ld(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function od(e){if(!this.isValid())return null;var n=e!==!0,t=n?this.clone().utc():this;return t.year()<0||t.year()>9999?cr(t,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Ee(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",cr(t,"Z")):cr(t,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function dd(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",t,a,l,u;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),t="["+e+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",l="-MM-DD[T]HH:mm:ss.SSS",u=n+'[")]',this.format(t+a+l+u)}function ud(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var n=cr(this,e);return this.localeData().postformat(n)}function gd(e,n){return this.isValid()&&(Fe(e)&&e.isValid()||W(e).isValid())?Pe({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function md(e){return this.from(W(),e)}function kd(e,n){return this.isValid()&&(Fe(e)&&e.isValid()||W(e).isValid())?Pe({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function pd(e){return this.to(W(),e)}function Ua(e){var n;return e===void 0?this._locale._abbr:(n=He(e),n!=null&&(this._locale=n),this)}var $a=je("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Ha(){return this._locale}var Nr=1e3,xn=60*Nr,Er=60*xn,Ga=(365*400+97)*24*Er;function On(e,n){return(e%n+n)%n}function Ca(e,n,t){return e<100&&e>=0?new Date(e+400,n,t)-Ga:new Date(e,n,t).valueOf()}function Wa(e,n,t){return e<100&&e>=0?Date.UTC(e+400,n,t)-Ga:Date.UTC(e,n,t)}function vd(e){var n,t;if(e=Re(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(t=this._isUTC?Wa:Ca,e){case"year":n=t(this.year(),0,1);break;case"quarter":n=t(this.year(),this.month()-this.month()%3,1);break;case"month":n=t(this.year(),this.month(),1);break;case"week":n=t(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=t(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=On(n+(this._isUTC?0:this.utcOffset()*xn),Er);break;case"minute":n=this._d.valueOf(),n-=On(n,xn);break;case"second":n=this._d.valueOf(),n-=On(n,Nr);break}return this._d.setTime(n),d.updateOffset(this,!0),this}function yd(e){var n,t;if(e=Re(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(t=this._isUTC?Wa:Ca,e){case"year":n=t(this.year()+1,0,1)-1;break;case"quarter":n=t(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=t(this.year(),this.month()+1,1)-1;break;case"week":n=t(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=t(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=Er-On(n+(this._isUTC?0:this.utcOffset()*xn),Er)-1;break;case"minute":n=this._d.valueOf(),n+=xn-On(n,xn)-1;break;case"second":n=this._d.valueOf(),n+=Nr-On(n,Nr)-1;break}return this._d.setTime(n),d.updateOffset(this,!0),this}function fd(){return this._d.valueOf()-(this._offset||0)*6e4}function hd(){return Math.floor(this.valueOf()/1e3)}function cd(){return new Date(this.valueOf())}function bd(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function jd(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Rd(){return this.isValid()?this.toISOString():null}function Td(){return Ne(this)}function Ad(){return w({},P(this))}function qd(){return P(this).overflow}function Fd(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}S("N",0,0,"eraAbbr"),S("NN",0,0,"eraAbbr"),S("NNN",0,0,"eraAbbr"),S("NNNN",0,0,"eraName"),S("NNNNN",0,0,"eraNarrow"),S("y",["y",1],"yo","eraYear"),S("y",["yy",2],0,"eraYear"),S("y",["yyy",3],0,"eraYear"),S("y",["yyyy",4],0,"eraYear"),x("N",Vt),x("NN",Vt),x("NNN",Vt),x("NNNN",Id),x("NNNNN",Dd),$(["N","NN","NNN","NNNN","NNNNN"],function(e,n,t,a){var l=t._locale.erasParse(e,a,t._strict);l?P(t).era=l:P(t).invalidEra=e}),x("y",Fn),x("yy",Fn),x("yyy",Fn),x("yyyy",Fn),x("yo",Bd),$(["y","yy","yyy","yyyy"],ge),$(["yo"],function(e,n,t,a){var l;t._locale._eraYearOrdinalRegex&&(l=e.match(t._locale._eraYearOrdinalRegex)),t._locale.eraYearOrdinalParse?n[ge]=t._locale.eraYearOrdinalParse(e,l):n[ge]=parseInt(e,10)});function wd(e,n){var t,a,l,u=this._eras||He("en")._eras;for(t=0,a=u.length;t<a;++t){switch(typeof u[t].since){case"string":l=d(u[t].since).startOf("day"),u[t].since=l.valueOf();break}switch(typeof u[t].until){case"undefined":u[t].until=1/0;break;case"string":l=d(u[t].until).startOf("day").valueOf(),u[t].until=l.valueOf();break}}return u}function Pd(e,n,t){var a,l,u=this.eras(),p,_,N;for(e=e.toUpperCase(),a=0,l=u.length;a<l;++a)if(p=u[a].name.toUpperCase(),_=u[a].abbr.toUpperCase(),N=u[a].narrow.toUpperCase(),t)switch(n){case"N":case"NN":case"NNN":if(_===e)return u[a];break;case"NNNN":if(p===e)return u[a];break;case"NNNNN":if(N===e)return u[a];break}else if([p,_,N].indexOf(e)>=0)return u[a]}function _d(e,n){var t=e.since<=e.until?1:-1;return n===void 0?d(e.since).year():d(e.since).year()+(n-e.offset)*t}function xd(){var e,n,t,a=this.localeData().eras();for(e=0,n=a.length;e<n;++e)if(t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return a[e].name;return""}function Od(){var e,n,t,a=this.localeData().eras();for(e=0,n=a.length;e<n;++e)if(t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return a[e].narrow;return""}function Sd(){var e,n,t,a=this.localeData().eras();for(e=0,n=a.length;e<n;++e)if(t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return a[e].abbr;return""}function Nd(){var e,n,t,a,l=this.localeData().eras();for(e=0,n=l.length;e<n;++e)if(t=l[e].since<=l[e].until?1:-1,a=this.clone().startOf("day").valueOf(),l[e].since<=a&&a<=l[e].until||l[e].until<=a&&a<=l[e].since)return(this.year()-d(l[e].since).year())*t+l[e].offset;return this.year()}function Ed(e){return m(this,"_erasNameRegex")||Mt.call(this),e?this._erasNameRegex:this._erasRegex}function Vd(e){return m(this,"_erasAbbrRegex")||Mt.call(this),e?this._erasAbbrRegex:this._erasRegex}function Md(e){return m(this,"_erasNarrowRegex")||Mt.call(this),e?this._erasNarrowRegex:this._erasRegex}function Vt(e,n){return n.erasAbbrRegex(e)}function Id(e,n){return n.erasNameRegex(e)}function Dd(e,n){return n.erasNarrowRegex(e)}function Bd(e,n){return n._eraYearOrdinalRegex||Fn}function Mt(){var e=[],n=[],t=[],a=[],l,u,p,_,N,D=this.eras();for(l=0,u=D.length;l<u;++l)p=Le(D[l].name),_=Le(D[l].abbr),N=Le(D[l].narrow),n.push(p),e.push(_),t.push(N),a.push(p),a.push(_),a.push(N);this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+t.join("|")+")","i")}S(0,["gg",2],0,function(){return this.weekYear()%100}),S(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Vr(e,n){S(0,[e,e.length],0,n)}Vr("gggg","weekYear"),Vr("ggggg","weekYear"),Vr("GGGG","isoWeekYear"),Vr("GGGGG","isoWeekYear"),x("G",Tr),x("g",Tr),x("GG",C,ce),x("gg",C,ce),x("GGGG",ct,ht),x("gggg",ct,ht),x("GGGGG",Rr,br),x("ggggg",Rr,br),er(["gggg","ggggg","GGGG","GGGGG"],function(e,n,t,a){n[a.substr(0,2)]=I(e)}),er(["gg","GG"],function(e,n,t,a){n[a]=d.parseTwoDigitYear(e)});function Kd(e){return za.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Ld(e){return za.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Yd(){return $e(this.year(),1,4)}function Ud(){return $e(this.isoWeekYear(),1,4)}function $d(){var e=this.localeData()._week;return $e(this.year(),e.dow,e.doy)}function Hd(){var e=this.localeData()._week;return $e(this.weekYear(),e.dow,e.doy)}function za(e,n,t,a,l){var u;return e==null?ar(this,a,l).year:(u=$e(e,a,l),n>u&&(n=u),Gd.call(this,e,n,t,a,l))}function Gd(e,n,t,a,l){var u=Fa(e,n,t,a,l),p=tr(u.year,0,u.dayOfYear);return this.year(p.getUTCFullYear()),this.month(p.getUTCMonth()),this.date(p.getUTCDate()),this}S("Q",0,"Qo","quarter"),x("Q",va),$("Q",function(e,n){n[Ye]=(I(e)-1)*3});function Cd(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}S("D",["DD",2],"Do","date"),x("D",C,wn),x("DD",C,ce),x("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient}),$(["D","DD"],Me),$("Do",function(e,n){n[Me]=I(e.match(C)[0])});var Ja=Pn("Date",!0);S("DDD",["DDDD",3],"DDDo","dayOfYear"),x("DDD",jr),x("DDDD",ya),$(["DDD","DDDD"],function(e,n,t){t._dayOfYear=I(e)});function Wd(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}S("m",["mm",2],0,"minute"),x("m",C,bt),x("mm",C,ce),$(["m","mm"],we);var zd=Pn("Minutes",!1);S("s",["ss",2],0,"second"),x("s",C,bt),x("ss",C,ce),$(["s","ss"],Ue);var Jd=Pn("Seconds",!1);S("S",0,0,function(){return~~(this.millisecond()/100)}),S(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),S(0,["SSS",3],0,"millisecond"),S(0,["SSSS",4],0,function(){return this.millisecond()*10}),S(0,["SSSSS",5],0,function(){return this.millisecond()*100}),S(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),S(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),S(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),S(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),x("S",jr,va),x("SS",jr,ce),x("SSS",jr,ya);var tn,Xa;for(tn="SSSS";tn.length<=9;tn+="S")x(tn,Fn);function Xd(e,n){n[vn]=I(("0."+e)*1e3)}for(tn="S";tn.length<=9;tn+="S")$(tn,Xd);Xa=Pn("Milliseconds",!1),S("z",0,0,"zoneAbbr"),S("zz",0,0,"zoneName");function Zd(){return this._isUTC?"UTC":""}function Qd(){return this._isUTC?"Coordinated Universal Time":""}var R=Zn.prototype;R.add=Ho,R.calendar=Zo,R.clone=Qo,R.diff=id,R.endOf=yd,R.format=ud,R.from=gd,R.fromNow=md,R.to=kd,R.toNow=pd,R.get=ol,R.invalidAt=qd,R.isAfter=ed,R.isBefore=nd,R.isBetween=rd,R.isSame=td,R.isSameOrAfter=ad,R.isSameOrBefore=sd,R.isValid=Td,R.lang=$a,R.locale=Ua,R.localeData=Ha,R.max=To,R.min=Ro,R.parsingFlags=Ad,R.set=dl,R.startOf=vd,R.subtract=Go,R.toArray=bd,R.toObject=jd,R.toDate=cd,R.toISOString=od,R.inspect=dd,typeof Symbol<"u"&&Symbol.for!=null&&(R[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),R.toJSON=Rd,R.toString=ld,R.unix=hd,R.valueOf=fd,R.creationData=Fd,R.eraName=xd,R.eraNarrow=Od,R.eraAbbr=Sd,R.eraYear=Nd,R.year=ca,R.isLeapYear=ll,R.weekYear=Kd,R.isoWeekYear=Ld,R.quarter=R.quarters=Cd,R.month=Aa,R.daysInMonth=hl,R.week=R.weeks=Fl,R.isoWeek=R.isoWeeks=wl,R.weeksInYear=$d,R.weeksInWeekYear=Hd,R.isoWeeksInYear=Yd,R.isoWeeksInISOWeekYear=Ud,R.date=Ja,R.day=R.days=Kl,R.weekday=Ll,R.isoWeekday=Yl,R.dayOfYear=Wd,R.hour=R.hours=zl,R.minute=R.minutes=zd,R.second=R.seconds=Jd,R.millisecond=R.milliseconds=Xa,R.utcOffset=So,R.utc=Eo,R.local=Vo,R.parseZone=Mo,R.hasAlignedHourOffset=Io,R.isDST=Do,R.isLocal=Ko,R.isUtcOffset=Lo,R.isUtc=Da,R.isUTC=Da,R.zoneAbbr=Zd,R.zoneName=Qd,R.dates=je("dates accessor is deprecated. Use date instead.",Ja),R.months=je("months accessor is deprecated. Use month instead",Aa),R.years=je("years accessor is deprecated. Use year instead",ca),R.zone=je("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",No),R.isDSTShifted=je("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Bo);function eu(e){return W(e*1e3)}function nu(){return W.apply(null,arguments).parseZone()}function Za(e){return e}var K=kt.prototype;K.calendar=Bi,K.longDateFormat=Ui,K.invalidDate=Hi,K.ordinal=Wi,K.preparse=Za,K.postformat=Za,K.relativeTime=Ji,K.pastFuture=Xi,K.set=Ii,K.eras=wd,K.erasParse=Pd,K.erasConvertYear=_d,K.erasAbbrRegex=Vd,K.erasNameRegex=Ed,K.erasNarrowRegex=Md,K.months=pl,K.monthsShort=vl,K.monthsParse=fl,K.monthsRegex=bl,K.monthsShortRegex=cl,K.week=Rl,K.firstDayOfYear=ql,K.firstDayOfWeek=Al,K.weekdays=Vl,K.weekdaysMin=Il,K.weekdaysShort=Ml,K.weekdaysParse=Bl,K.weekdaysRegex=Ul,K.weekdaysShortRegex=$l,K.weekdaysMinRegex=Hl,K.isPM=Cl,K.meridiem=Jl;function Mr(e,n,t,a){var l=He(),u=A().set(a,n);return l[t](u,e)}function Qa(e,n,t){if(j(e)&&(n=e,e=void 0),e=e||"",n!=null)return Mr(e,n,t,"month");var a,l=[];for(a=0;a<12;a++)l[a]=Mr(e,a,t,"month");return l}function It(e,n,t,a){typeof e=="boolean"?(j(n)&&(t=n,n=void 0),n=n||""):(n=e,t=n,e=!1,j(n)&&(t=n,n=void 0),n=n||"");var l=He(),u=e?l._week.dow:0,p,_=[];if(t!=null)return Mr(n,(t+u)%7,a,"day");for(p=0;p<7;p++)_[p]=Mr(n,(p+u)%7,a,"day");return _}function ru(e,n){return Qa(e,n,"months")}function tu(e,n){return Qa(e,n,"monthsShort")}function au(e,n,t){return It(e,n,t,"weekdays")}function su(e,n,t){return It(e,n,t,"weekdaysShort")}function iu(e,n,t){return It(e,n,t,"weekdaysMin")}rn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,t=I(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+t}}),d.lang=je("moment.lang is deprecated. Use moment.locale instead.",rn),d.langData=je("moment.langData is deprecated. Use moment.localeData instead.",He);var Ge=Math.abs;function lu(){var e=this._data;return this._milliseconds=Ge(this._milliseconds),this._days=Ge(this._days),this._months=Ge(this._months),e.milliseconds=Ge(e.milliseconds),e.seconds=Ge(e.seconds),e.minutes=Ge(e.minutes),e.hours=Ge(e.hours),e.months=Ge(e.months),e.years=Ge(e.years),this}function es(e,n,t,a){var l=Pe(n,t);return e._milliseconds+=a*l._milliseconds,e._days+=a*l._days,e._months+=a*l._months,e._bubble()}function ou(e,n){return es(this,e,n,1)}function du(e,n){return es(this,e,n,-1)}function ns(e){return e<0?Math.floor(e):Math.ceil(e)}function uu(){var e=this._milliseconds,n=this._days,t=this._months,a=this._data,l,u,p,_,N;return e>=0&&n>=0&&t>=0||e<=0&&n<=0&&t<=0||(e+=ns(Dt(t)+n)*864e5,n=0,t=0),a.milliseconds=e%1e3,l=Te(e/1e3),a.seconds=l%60,u=Te(l/60),a.minutes=u%60,p=Te(u/60),a.hours=p%24,n+=Te(p/24),N=Te(rs(n)),t+=N,n-=ns(Dt(N)),_=Te(t/12),t%=12,a.days=n,a.months=t,a.years=_,this}function rs(e){return e*4800/146097}function Dt(e){return e*146097/4800}function gu(e){if(!this.isValid())return NaN;var n,t,a=this._milliseconds;if(e=Re(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+a/864e5,t=this._months+rs(n),e){case"month":return t;case"quarter":return t/3;case"year":return t/12}else switch(n=this._days+Math.round(Dt(this._months)),e){case"week":return n/7+a/6048e5;case"day":return n+a/864e5;case"hour":return n*24+a/36e5;case"minute":return n*1440+a/6e4;case"second":return n*86400+a/1e3;case"millisecond":return Math.floor(n*864e5)+a;default:throw new Error("Unknown unit "+e)}}function Ce(e){return function(){return this.as(e)}}var ts=Ce("ms"),mu=Ce("s"),ku=Ce("m"),pu=Ce("h"),vu=Ce("d"),yu=Ce("w"),fu=Ce("M"),hu=Ce("Q"),cu=Ce("y"),bu=ts;function ju(){return Pe(this)}function Ru(e){return e=Re(e),this.isValid()?this[e+"s"]():NaN}function fn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Tu=fn("milliseconds"),Au=fn("seconds"),qu=fn("minutes"),Fu=fn("hours"),wu=fn("days"),Pu=fn("months"),_u=fn("years");function xu(){return Te(this.days()/7)}var We=Math.round,Sn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Ou(e,n,t,a,l){return l.relativeTime(n||1,!!t,e,a)}function Su(e,n,t,a){var l=Pe(e).abs(),u=We(l.as("s")),p=We(l.as("m")),_=We(l.as("h")),N=We(l.as("d")),D=We(l.as("M")),pe=We(l.as("w")),ze=We(l.as("y")),an=u<=t.ss&&["s",u]||u<t.s&&["ss",u]||p<=1&&["m"]||p<t.m&&["mm",p]||_<=1&&["h"]||_<t.h&&["hh",_]||N<=1&&["d"]||N<t.d&&["dd",N];return t.w!=null&&(an=an||pe<=1&&["w"]||pe<t.w&&["ww",pe]),an=an||D<=1&&["M"]||D<t.M&&["MM",D]||ze<=1&&["y"]||["yy",ze],an[2]=n,an[3]=+e>0,an[4]=a,Ou.apply(null,an)}function Nu(e){return e===void 0?We:typeof e=="function"?(We=e,!0):!1}function Eu(e,n){return Sn[e]===void 0?!1:n===void 0?Sn[e]:(Sn[e]=n,e==="s"&&(Sn.ss=n-1),!0)}function Vu(e,n){if(!this.isValid())return this.localeData().invalidDate();var t=!1,a=Sn,l,u;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(t=e),typeof n=="object"&&(a=Object.assign({},Sn,n),n.s!=null&&n.ss==null&&(a.ss=n.s-1)),l=this.localeData(),u=Su(this,!t,a,l),t&&(u=l.pastFuture(+this,u)),l.postformat(u)}var Bt=Math.abs;function Nn(e){return(e>0)-(e<0)||+e}function Ir(){if(!this.isValid())return this.localeData().invalidDate();var e=Bt(this._milliseconds)/1e3,n=Bt(this._days),t=Bt(this._months),a,l,u,p,_=this.asSeconds(),N,D,pe,ze;return _?(a=Te(e/60),l=Te(a/60),e%=60,a%=60,u=Te(t/12),t%=12,p=e?e.toFixed(3).replace(/\.?0+$/,""):"",N=_<0?"-":"",D=Nn(this._months)!==Nn(_)?"-":"",pe=Nn(this._days)!==Nn(_)?"-":"",ze=Nn(this._milliseconds)!==Nn(_)?"-":"",N+"P"+(u?D+u+"Y":"")+(t?D+t+"M":"")+(n?pe+n+"D":"")+(l||a||e?"T":"")+(l?ze+l+"H":"")+(a?ze+a+"M":"")+(e?ze+p+"S":"")):"P0D"}var B=xr.prototype;B.isValid=Po,B.abs=lu,B.add=ou,B.subtract=du,B.as=gu,B.asMilliseconds=ts,B.asSeconds=mu,B.asMinutes=ku,B.asHours=pu,B.asDays=vu,B.asWeeks=yu,B.asMonths=fu,B.asQuarters=hu,B.asYears=cu,B.valueOf=bu,B._bubble=uu,B.clone=ju,B.get=Ru,B.milliseconds=Tu,B.seconds=Au,B.minutes=qu,B.hours=Fu,B.days=wu,B.weeks=xu,B.months=Pu,B.years=_u,B.humanize=Vu,B.toISOString=Ir,B.toString=Ir,B.toJSON=Ir,B.locale=Ua,B.localeData=Ha,B.toIsoString=je("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ir),B.lang=$a,S("X",0,0,"unix"),S("x",0,0,"valueOf"),x("x",Tr),x("X",nl),$("X",function(e,n,t){t._d=new Date(parseFloat(e)*1e3)}),$("x",function(e,n,t){t._d=new Date(I(e))});//! moment.js
return d.version="2.30.1",g(W),d.fn=R,d.min=Ao,d.max=qo,d.now=Fo,d.utc=A,d.unix=eu,d.months=ru,d.isDate=F,d.locale=rn,d.invalid=X,d.duration=Pe,d.isMoment=Fe,d.weekdays=au,d.parseZone=nu,d.localeData=He,d.isDuration=Or,d.monthsShort=tu,d.weekdaysMin=iu,d.defineLocale=Ft,d.updateLocale=eo,d.locales=no,d.weekdaysShort=su,d.normalizeUnits=Re,d.relativeTimeRounding=Nu,d.relativeTimeThreshold=Eu,d.calendarFormat=Xo,d.prototype=R,d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},d})})(ji);var Sm=ji.exports;const As=Bu(Sm),Nm="_graderesHeader_jfwkn_1",Em="_smalHeader_jfwkn_5",Vm="_notLastRow_jfwkn_9",Mm="_placeRemoveButton_jfwkn_13",Im="_prosentHeader_jfwkn_17",Vn={graderesHeader:Nm,smalHeader:Em,notLastRow:Vm,placeRemoveButton:Mm,prosentHeader:Im},Qe="tidsromPermisjon",Ae="graderingPeriode",Dm=Xu(9),qs=s=>()=>{const o=s(`${Qe}.${Ae}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},Fs=(s,i,o)=>()=>{const d=s(`${Qe}.${Ae}.${i}.periodeFom`),g=s(`${Qe}.${Ae}.${i}.periodeTom`);return!g||!d?null:o?qe(g)(d):Oe(d)(g)},Bm=(s,i)=>o=>s(`${Qe}.${Ae}.${i}.arbeidskategoriType`)===Tn.ARBEIDSTAKER?q(o):void 0,Km=s=>{if(s)return s.length===11?Ys(s):Dm(s)},ws={periodeFom:"",periodeTom:"",periodeForGradering:"",prosentandelArbeid:"",skalGraderes:!1},Lm=[Tn.ARBEIDSTAKER,Tn.SELVSTENDIG_NAERINGSDRIVENDE,Tn.FRILANSER],Ps=pr(100),Ym=s=>s.filter(({kode:i})=>oa.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Um=s=>s.filter(({kode:i})=>Lm.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Ri=({graderingKvoter:s,readOnly:i,arbeidskategoriTyper:o})=>{const d=H(),{watch:g,control:k,getValues:v,trigger:m,formState:{isSubmitted:h}}=Y(),{fields:f,remove:j,append:F}=he({control:k,name:`${Qe}.${Ae}`}),b=g(`${Qe}.${Ae}`);return V.useEffect(()=>{f.length===0&&F(ws)},[]),r.jsx(Se,{fields:f,emptyPeriodTemplate:ws,bodyText:d.formatMessage({id:"Registrering.Permisjon.Gradering.LeggTilPeriode"}),readOnly:i,remove:j,append:F,children:(w,A,O)=>{const{harSamtidigUttak:P,periodeFom:G}=b[A],Ne=G&&As(G,An).isBefore(As("2019-01-01")),X=`${Qe}.${Ae}.${A}`;return r.jsxs("div",{className:A!==f.length-1?Vn.notLastRow:"",children:[A>0&&r.jsxs(r.Fragment,{children:[r.jsx(na,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(Q,{wrap:!0,children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{name:`${X}.periodeForGradering`,selectValues:Ym(s),label:d.formatMessage({id:"Registrering.Permisjon.Gradering.Periode"}),validate:[q]})}),r.jsx(T,{children:r.jsx(E,{label:d.formatMessage({id:"Registrering.Permisjon.periodeFom"}),name:`${X}.periodeFom`,validate:[q,M,Fs(v,A,!0),qs(v)],onChange:()=>h?m():void 0})}),r.jsx(T,{children:r.jsx(E,{label:d.formatMessage({id:"Registrering.Permisjon.periodeTom"}),name:`${X}.periodeTom`,validate:[q,M,Fs(v,A,!1),qs(v)],onChange:()=>h?m():void 0})}),r.jsx(T,{className:Vn.prosentHeader,children:r.jsx(le,{label:r.jsx(c,{id:"Registrering.Permisjon.Gradering.Prosentandel"}),name:`${X}.prosentandelArbeid`,validate:[q,Wt,Ps],normalizeOnBlur:J=>Number.isNaN(J)?J:parseFloat(J.toString()).toFixed(2)})}),r.jsx(T,{children:r.jsx(le,{label:d.formatMessage({id:"Registrering.Permisjon.Orgnr"}),name:`${X}.arbeidsgiverIdentifikator`,validate:[Bm(v,A),gn,Km]})})]}),r.jsx(y,{eightPx:!0}),r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{label:d.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${X}.arbeidskategoriType`,selectValues:Um(o),validate:[q],onChange:()=>h?m():void 0})}),r.jsxs(T,{children:[r.jsx("div",{className:Vn.graderesHeader,children:r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Gradering.SkalGraderes"})})}),r.jsx(ie,{name:`${X}.skalGraderes`,label:" "})]}),r.jsx(T,{children:r.jsxs("div",{className:Vn.smalHeader,children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Flerbarnsdager"})}),r.jsx(ie,{readOnly:i,name:`${X}.flerbarnsdager`,label:" "})]})}),r.jsxs(T,{children:[r.jsx("div",{className:Vn.smalHeader,children:r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.HarSamtidigUttak"})})}),r.jsx(ie,{name:`${X}.harSamtidigUttak`,label:""})]}),r.jsx(T,{children:P&&r.jsx(le,{name:`${X}.samtidigUttaksprosent`,validate:[q,Wt,Ps],label:d.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"})})}),O&&r.jsx(T,{className:Vn.placeRemoveButton,children:O()})]}),Ne&&r.jsxs("div",{children:[r.jsx(L,{wrap:!0,children:r.jsx(Qr,{size:"small",variant:"warning",children:r.jsx(c,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})}),r.jsx(y,{eightPx:!0})]})]})]},w.id)}})};Ri.__docgenInfo={description:`RenderGraderingPeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Cn=({readOnly:s,alleKodeverk:i})=>{const o=i[ee.UTTAK_PERIODE_TYPE],d=i[ee.ARBEIDSKATEGORI],{watch:g}=Y(),k=g(`${Qe}.skalGradere`)||!1;return r.jsxs("div",{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Gradering.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${Qe}.skalGradere`,label:r.jsx(c,{id:"Registrering.Permisjon.Gradering.GraderUttaket"})}),k&&r.jsx(Ri,{graderingKvoter:o,arbeidskategoriTyper:d,readOnly:s})]})};Cn.transformValues=s=>{const i=s[Ae];return i?i.map(o=>o.arbeidskategoriType?{...o,erArbeidstaker:o.arbeidskategoriType===Tn.ARBEIDSTAKER,erFrilanser:o.arbeidskategoriType===Tn.FRILANSER,erSelvstNæringsdrivende:o.arbeidskategoriType===Tn.SELVSTENDIG_NAERINGSDRIVENDE}:o):[]};Cn.buildInitialValues=()=>({[Ae]:[{}],skalGradere:!1});Cn.__docgenInfo={description:`PermisjonGraderingPanel

Viser panel for gradering
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriodeFormValues;
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"FormValues",required:!1}}]},alias:"FormValues"}}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonGraderingPanel"};const Je="tidsromPermisjon",ln="overforingsperioder",_s=s=>()=>{const o=s(`${Je}.${ln}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},xs={periodeFom:"",periodeTom:"",overforingArsak:""},Ti=({selectValues:s,readOnly:i})=>{const o=H(),{control:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:h,append:f}=he({control:d,name:`${Je}.${ln}`});V.useEffect(()=>{m.length===0&&f(xs)},[]);const j=`${Je}.${ln}`;return r.jsx(Se,{fields:m,emptyPeriodTemplate:xs,bodyText:o.formatMessage({id:"Registrering.Permisjon.Utsettelse.LeggTilPeriode"}),readOnly:i,append:f,remove:h,children:(F,b,w)=>r.jsx(Q,{wrap:!0,children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{name:`${j}.${b}.overforingArsak`,label:b===0?o.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak"}):"",selectValues:s,validate:[q],readOnly:i})}),r.jsxs(r.Fragment,{children:[r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${j}.${b}.periodeFom`,validate:[q,M,()=>{const A=g(`${Je}.${ln}.${b}.periodeFom`),O=g(`${Je}.${ln}.${b}.periodeTom`);return O&&A?qe(O)(A):null},_s(g)],label:b===0?r.jsx(c,{id:"Registrering.Permisjon.OverforingAvKvote.fomDato"}):"",onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${j}.${b}.periodeTom`,validate:[q,M,()=>{const A=g(`${Je}.${ln}.${b}.periodeFom`),O=g(`${Je}.${ln}.${b}.periodeTom`);return O&&A?Oe(A)(O):null},_s(g)],label:b===0?r.jsx(c,{id:"Registrering.Permisjon.OverforingAvKvote.tomDato"}):"",onChange:()=>v?k():void 0})}),w&&r.jsx(T,{children:w()})]})]})},F.id)})};Ti.__docgenInfo={description:`RenderOverforingAvKvoterFieldArray

Viser inputfelter for dato for bestemmelse av overføring.`,methods:[],displayName:"RenderOverforingAvKvoterFieldArray",props:{selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const $m=(s,i,o)=>i===zr.INSTITUSJONSOPPHOLD_ANNEN_FORELDER?s.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt"}):i===zr.SYKDOM_ANNEN_FORELDER?s.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk"}):o,Hm=(s,i,o,d)=>s.filter(({kode:g})=>o||g!==zr.ALENEOMSORG&&g!==zr.IKKE_RETT_ANNEN_FORELDER).map(({kode:g,navn:k})=>i?r.jsx("option",{value:g,children:k},g):r.jsx("option",{value:g,children:$m(d,g,k)},g)),dt=({foreldreType:s,alleKodeverk:i,readOnly:o,erEndringssøknad:d})=>{const g=H(),k=i[sg.OVERFOERING_AARSAK_TYPE],v=Hm(k,s===Ln.MOR,d,g),{watch:m}=Y(),h=m(`${Je}.skalOvertaKvote`)||!1;return r.jsxs(r.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvoten"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:o,name:`${Je}.skalOvertaKvote`,label:r.jsx(c,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvote"})}),h&&r.jsx(Ti,{selectValues:v,readOnly:o})]})};dt.buildInitialValues=()=>({skalOvertaKvote:!1,overforingsperioder:[{}]});dt.__docgenInfo={description:`PermisjonOverforingAvKvoterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonOverforingAvKvoterPanel"};const Gm="_notLastRow_pe2tr_1",Cm={notLastRow:Gm},_e="tidsromPermisjon",xe="oppholdPerioder",Os=s=>()=>{const o=s(`${_e}.${xe}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},Ss={periodeFom:"",periodeTom:"",årsak:""},Wm=[Br.UTTAK_MØDREKVOTE_ANNEN_FORELDER,Br.UTTAK_FEDREKVOTE_ANNEN_FORELDER,Br.UTTAK_FELLESP_ANNEN_FORELDER,Br.UTTAK_FORELDREPENGER_ANNEN_FORELDER],zm=s=>s.filter(({kode:i})=>Wm.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Ai=({oppholdsReasons:s,readOnly:i})=>{const o=H(),{control:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:h,append:f}=he({control:d,name:`${_e}.${xe}`});return V.useEffect(()=>{m.length===0&&f(Ss)},[]),r.jsx(Se,{fields:m,emptyPeriodTemplate:Ss,bodyText:o.formatMessage({id:"Registrering.Permisjon.Opphold.LeggTilPeriode"}),readOnly:i,append:f,remove:h,children:(j,F,b)=>r.jsx("div",{className:F!==m.length-1?Cm.notLastRow:"",children:r.jsx(Q,{wrap:!0,children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:`${_e}.${xe}.${F}.periodeFom`,label:F===0?o.formatMessage({id:"Registrering.Permisjon.periodeFom"}):"",validate:[q,M,()=>{const w=g(`${_e}.${xe}.${F}.periodeFom`),A=g(`${_e}.${xe}.${F}.periodeTom`);return A&&w?qe(A)(w):null},Os(g)],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${_e}.${xe}.${F}.periodeTom`,label:F===0?o.formatMessage({id:"Registrering.Permisjon.periodeTom"}):"",validate:[q,M,()=>{const w=g(`${_e}.${xe}.${F}.periodeFom`),A=g(`${_e}.${xe}.${F}.periodeTom`);return A&&w?Oe(w)(A):null},Os(g)],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(fe,{name:`${_e}.${xe}.${F}.årsak`,label:F===0?o.formatMessage({id:"Registrering.Permisjon.Opphold.Arsak"}):"",selectValues:zm(s),validate:[q]})}),b&&r.jsx(T,{children:b()})]})})},j.id)})};Ai.__docgenInfo={description:`RenderOppholdPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av oppholdsperiode.`,methods:[],displayName:"RenderOppholdPeriodeFieldArray",props:{oppholdsReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ut=({readOnly:s,alleKodeverk:i})=>{const o=i[ee.OPPHOLD_ARSAK],{watch:d}=Y(),g=d(`${_e}.skalHaOpphold`)||!1;return r.jsxs("div",{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Opphold.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${_e}.skalHaOpphold`,label:r.jsx(c,{id:"Registrering.Permisjon.Opphold.OppholdUttaket"})}),g&&r.jsx(Ai,{oppholdsReasons:o,readOnly:s})]})};ut.buildInitialValues=()=>({[xe]:[{}],skalHaOpphold:!1});ut.__docgenInfo={description:`PermisjonOppholdPanel

Viser panel for utsettelse
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonOppholdPanel"};const Jm="_flexContainer_1vzu1_1",Xm={flexContainer:Jm},be="tidsromPermisjon",Zm=s=>{const i=s(`${be}.fulltUttak`)||!1,o=s(`${be}.skalGradere`)||!1,d=s(`${be}.skalUtsette`)||!1,g=s(`${be}.skalOvertaKvote`)||!1;return!i&&!o&&!d&&!g},Wn=({foreldreType:s,readOnly:i,alleKodeverk:o,erEndringssøknad:d})=>{var b,w,A,O;const g=H(),{watch:k,setError:v,clearErrors:m,getValues:h,formState:f}=Y(),j=k(`${be}.fulltUttak`)||!1,F=Zm(h);return V.useEffect(()=>{F&&v(`${be}.notRegisteredInput`,{type:"custom",message:g.formatMessage({id:"PermisjonPanel.MinstEnPeriodeRequired"})}),F||m(`${be}.notRegisteredInput`)},[F]),r.jsx(oe,{children:r.jsxs("div",{className:Xm.flexContainer,children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{eightPx:!0}),r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.FulltUttak"})}),r.jsx(y,{eightPx:!0}),r.jsx(ie,{readOnly:i,name:`${be}.fulltUttak`,label:r.jsx(c,{id:"Registrering.Permisjon.FulltUttak"})}),j&&r.jsx(lt,{sokerErMor:s===Ln.MOR,readOnly:i,alleKodeverk:o}),r.jsx(y,{twentyPx:!0}),r.jsx(dt,{readOnly:i,foreldreType:s,alleKodeverk:o,erEndringssøknad:d}),r.jsx(y,{twentyPx:!0}),r.jsx(ot,{readOnly:i,alleKodeverk:o}),r.jsx(y,{twentyPx:!0}),r.jsx(Cn,{readOnly:i,alleKodeverk:o}),r.jsx(y,{twentyPx:!0}),r.jsx(ut,{readOnly:i,alleKodeverk:o}),f.isSubmitted&&((w=(b=f.errors[be])==null?void 0:b.notRegisteredInput)==null?void 0:w.message)&&r.jsx(kr,{children:(O=(A=f.errors[be])==null?void 0:A.notRegisteredInput)==null?void 0:O.message})]})})};Wn.transformValues=s=>{var k,v,m,h,f,j,F;const i=s[be],o=i,d=i[De];(k=s.tidsromPermisjon)!=null&&k.fulltUttak&&d&&(o[De]=lt.transformValues(d));const g=i[Ae];return(v=s.tidsromPermisjon)!=null&&v.skalGradere&&g&&(o[Ae]=Cn.transformValues(i)),(m=s.tidsromPermisjon)!=null&&m.fulltUttak||(o[De]=void 0),(h=s.tidsromPermisjon)!=null&&h.skalGradere||(o[Ae]=void 0),(f=s.tidsromPermisjon)!=null&&f.skalUtsette||(o[un]=void 0),(j=s.tidsromPermisjon)!=null&&j.skalOvertaKvote||(o[ln]=void 0),(F=s.tidsromPermisjon)!=null&&F.skalHaOpphold||(o[xe]=void 0),o};Wn.buildInitialValues=()=>({[be]:{...ot.buildInitialValues(),...Cn.buildInitialValues(),...dt.buildInitialValues(),...ut.buildInitialValues(),[De]:[{}],fulltUttak:!1}});Wn.__docgenInfo={description:`PermisjonPanel

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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]},alias:"FormValues"}}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonPanel"};const Qm=re(ue),zn=({foreldreType:s,readOnly:i,alleKodeverk:o,erEndringssøknad:d})=>r.jsx(ke,{value:Qm,children:r.jsx(Wn,{readOnly:i,foreldreType:s,alleKodeverk:o,erEndringssøknad:d})});zn.transformValues=Wn.transformValues;zn.buildInitialValues=Wn.buildInitialValues;zn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]},alias:"FormValues"}}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonIndex"};class ek{constructor(i,o,d){Dr(this,"fagsakYtelseType");Dr(this,"familieHendelseType");Dr(this,"foreldreType");this.fagsakYtelseType=Kt(i),i===Wr.SVANGERSKAPSPENGER?this.familieHendelseType=se.FODSEL:this.familieHendelseType=Kt(o),this.foreldreType=Kt(d)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const Ct=re(ue),qi=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:Ct.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:"termindato",label:Ct.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:s,validate:[q,M]})}),r.jsx(T,{children:r.jsx(E,{name:"foedselsDato",label:Ct.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:s,validate:[M,Kn]})})]})})]});qi.__docgenInfo={description:"",methods:[],displayName:"TerminFodselSvpPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const nk="_notLastRow_uwn16_1",rk={notLastRow:nk},tk=pr(100),ak="tilretteleggingArbeidsgiver",sk="tilretteleggingSelvstendigNaringsdrivende",ik="tilretteleggingFrilans",Ns={tilretteleggingType:"",dato:"",stillingsprosent:""},Xr=({readOnly:s,name:i})=>{const o=H(),{control:d}=Y(),{fields:g,remove:k,append:v}=he({control:d,name:i});return V.useEffect(()=>{g.length===0&&v(Ns)},[]),r.jsx(Se,{fields:g,emptyPeriodTemplate:Ns,bodyText:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:s,append:v,remove:k,children:(m,h,f)=>r.jsxs("div",{className:h!==g.length-1?rk.notLastRow:"",children:[r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{readOnly:s,name:`${i}.${h}.tilretteleggingType`,label:h===0?o.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}):"",validate:[q],selectValues:[r.jsx("option",{value:En.HEL_TILRETTELEGGING,children:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},En.HEL_TILRETTELEGGING),r.jsx("option",{value:En.DELVIS_TILRETTELEGGING,children:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},En.DELVIS_TILRETTELEGGING),r.jsx("option",{value:En.INGEN_TILRETTELEGGING,children:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},En.INGEN_TILRETTELEGGING)]})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:s,name:`${i}.${h}.dato`,label:h===0?o.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}):"",validate:[q]})}),r.jsx(T,{children:r.jsx(le,{readOnly:s,name:`${i}.${h}.stillingsprosent`,label:h===0?o.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}):"",validate:[q,tk],maxLength:99})}),f&&r.jsx(T,{children:f()})]})})]},m.id)})};Xr.__docgenInfo={description:`BehovForTilrettteleggingFieldArray

Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.`,methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Es="tilretteleggingArbeidsforhold",Vs="tilretteleggingForArbeidsgiver",lk={organisasjonsnummer:"",behovsdato:""},Fi=({readOnly:s})=>{const i=H(),{control:o}=Y(),{fields:d,append:g}=he({control:o,name:`${Es}.${Vs}`}),k=()=>{g(lk)},v=`${Es}.${Vs}`;return r.jsx(r.Fragment,{children:d.map((m,h)=>r.jsxs("div",{children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(le,{readOnly:s,name:`${v}.${h}.organisasjonsnummer`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.OrgNr"}),validate:[q,f=>Zu(f.toString()),Qu],maxLength:99})}),r.jsx(T,{children:r.jsx(E,{name:`${v}.${h}.behovsdato`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra"}),validate:[q],isReadOnly:s})})]})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Xr,{name:`${v}.${h}.${ak}`,readOnly:s}),d.length>h+1&&r.jsxs(r.Fragment,{children:[r.jsx("hr",{}),r.jsx(y,{sixteenPx:!0})]}),d.length===h+1&&r.jsx(Be,{size:"small",variant:"secondary",onClick:k,type:"button",children:r.jsx(c,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})]},m.id))})};Fi.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ie=re(ue),ok="tilretteleggingForArbeidsgiver",ve="tilretteleggingArbeidsforhold",gt=({readOnly:s})=>{var f,j,F,b;const{watch:i,setError:o,clearErrors:d,formState:g}=Y(),k=i(`${ve}.sokForSelvstendigNaringsdrivende`),v=i(`${ve}.sokForFrilans`),m=i(`${ve}.sokForArbeidsgiver`),h=!k&&!v&&!m;return V.useEffect(()=>{h&&o(`${ve}.notRegisteredInput`,{type:"custom",message:Ie.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}),h||d(`${ve}.notRegisteredInput`)},[h]),r.jsx(ke,{value:Ie,children:r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),r.jsx(y,{sixteenPx:!0}),g.isSubmitted&&((j=(f=g.errors[ve])==null?void 0:f.notRegisteredInput)==null?void 0:j.message)&&r.jsx(kr,{children:(b=(F=g.errors[ve])==null?void 0:F.notRegisteredInput)==null?void 0:b.message}),r.jsx(U,{name:`${ve}.sokForSelvstendigNaringsdrivende`,label:r.jsx(c,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),k&&r.jsxs(de,{children:[r.jsx(E,{name:`${ve}.behovsdatoSN`,label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[q],isReadOnly:s}),r.jsx(Xr,{name:`${ve}.${sk}`,readOnly:s})]}),r.jsx(U,{name:`${ve}.sokForFrilans`,label:r.jsx(c,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),v&&r.jsxs(de,{children:[r.jsx(E,{name:`${ve}.behovsdatoFrilans`,label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[q],isReadOnly:s}),r.jsx(Xr,{name:`${ve}.${ik}`,readOnly:s})]}),r.jsx(U,{name:`${ve}.sokForArbeidsgiver`,label:r.jsx(c,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),m&&r.jsx(de,{children:r.jsx(Fi,{readOnly:s})})]})})};gt.buildInitialValues=()=>({[ve]:{[ok]:[{}]}});gt.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}}],displayName:"BehovForTilretteleggingPanel"};const dk="_col_hlukm_1",Ms={col:dk},Jt="omsorg",Jn=({readOnly:s,soknadData:i,alleKodeverk:o,fodselsdato:d,mottattDato:g})=>r.jsxs(Ks,{justify:"space-between",children:[r.jsxs("div",{className:Ms.col,children:[r.jsx(it,{readOnly:s,soknadData:i}),r.jsx(ye,{readOnly:s,alleKodeverk:o,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,mottattDato:g}),r.jsx(fr,{readOnly:s})]}),r.jsx("div",{className:Ms.col,children:r.jsx(kn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:d})})]});Jn.transformValues=s=>({...ye.transformValues(s),[Jt]:kn.transformValues(s[Jt])});Jn.buildInitialValues=()=>({[Jt]:{},...ye.buildInitialValues()});Jn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"omsorg",value:{name:"TransformedFormValues",required:!1}}]}}]}}},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringAdopsjonOgOmsorgGrid"};const uk="_col_hlukm_1",Is={col:uk},Xt="omsorg",Xn=({readOnly:s,soknadData:i,alleKodeverk:o,fodselsdato:d,mottattDato:g})=>r.jsxs(Ks,{justify:"space-between",children:[r.jsxs("div",{className:Is.col,children:[i.getForeldreType()!==Ln.MOR&&r.jsx(it,{readOnly:s,soknadData:i}),r.jsx(ye,{readOnly:s,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,alleKodeverk:o,mottattDato:g}),r.jsx(fr,{readOnly:s})]}),r.jsxs("div",{className:Is.col,children:[i.getForeldreType()!==Ln.MOR&&r.jsx(kn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:d}),r.jsx(ia,{readOnly:s})]})]});Xn.transformValues=s=>({...ye.transformValues(s),[Xt]:kn.transformValues(s[Xt])});Xn.buildInitialValues=()=>({...ye.buildInitialValues(),[Xt]:{}});Xn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringFodselGrid"};const gk=(s,i)=>s?Xn.buildInitialValues():i?Jn.buildInitialValues():{},mk=(s,i,o)=>{let d=s;return s.rettigheter===Dn.IKKE_RELEVANT&&(d=Ls(s,"rettigheter")),{...d,...i?Xn.transformValues(d):{},...o?Jn.transformValues(d):{}}},wi=({readOnly:s,soknadData:i,alleKodeverk:o,onSubmitUfullstendigsoknad:d,onSubmit:g})=>{const k=i.getFamilieHendelseType()===se.FODSEL,v=i.getFamilieHendelseType()===se.ADOPSJON,m=vr({defaultValues:gk(k,v)}),h=m.watch("foedselsDato"),f=m.watch("mottattDato");return r.jsxs(yr,{formMethods:m,onSubmit:j=>g(mk(j,k,v)),children:[r.jsx(at,{readOnly:s}),k&&r.jsx(Xn,{soknadData:i,readOnly:s,alleKodeverk:o,fodselsdato:h,mottattDato:f}),v&&r.jsx(Jn,{soknadData:i,readOnly:s,alleKodeverk:o,fodselsdato:h,mottattDato:f}),r.jsx(tt,{readOnly:s,submitting:m.formState.isSubmitting,onSubmitUfullstendigsoknad:d})]})};wi.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const Pi=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g})=>r.jsx(wi,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g});Pi.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Zt="omsorg",Qt="frilans",kk=s=>({[Qt]:nn.buildInitialValues(),...en.buildInitialValues(s),...Hn.buildInitialValues(),[Zt]:{},...ye.buildInitialValues(),...zn.buildInitialValues()}),pk=(s,i)=>{let o=s;return s.rettigheter===Dn.IKKE_RELEVANT&&(o=Ls(s,"rettigheter")),{...ye.transformValues(o),[Zt]:kn.transformValues(o[Zt]),[mn]:en.transformValues(o,i),[be]:zn.transformValues(o),[Qt]:nn.transformValues(o[Qt])}},_i=({readOnly:s,soknadData:i,alleKodeverk:o,onSubmit:d,onSubmitUfullstendigsoknad:g,fagsakPersonnummer:k,erEndringssøknad:v})=>{const m=vr({defaultValues:V.useMemo(()=>kk(o[ee.ARBEID_TYPE]),[])}),h=o[ee.ARBEID_TYPE],f=m.watch("sokerHarAleneomsorg"),j=m.watch("denAndreForelderenHarRettPaForeldrepenger"),F=!f&&j!==!1,b=m.watch("foedselsDato"),w=m.watch("mottattDato");return r.jsxs(yr,{formMethods:m,onSubmit:A=>d(pk(A,h)),children:[r.jsx(at,{readOnly:s}),r.jsx(ye,{readOnly:s,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,alleKodeverk:o,mottattDato:w}),r.jsx(Hn,{readOnly:s,alleKodeverk:o}),r.jsx(la,{readOnly:s,alleKodeverk:o}),r.jsx(nn,{readOnly:s}),r.jsx(en,{readOnly:s,alleKodeverk:o}),r.jsx(yi,{readOnly:s}),i.getFamilieHendelseType()===se.FODSEL&&r.jsx(ia,{readOnly:s,erForeldrepenger:!0}),r.jsx(it,{readOnly:s,soknadData:i}),r.jsx(kn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),fodselsdato:b,isForeldrepengerFagsak:!0}),r.jsx(zs,{readOnly:s,permisjonRettigheterPanel:r.jsx(hi,{readOnly:s,denAndreForelderenHarRettPaForeldrepenger:j,sokerErMor:i.getForeldreType()===Ln.MOR}),alleKodeverk:o,fagsakPersonnummer:k}),r.jsx(zn,{foreldreType:i.getForeldreType(),readOnly:s,alleKodeverk:o,erEndringssøknad:v}),r.jsx(fi,{annenForelderInformertRequired:F,readOnly:s}),r.jsx(fr,{readOnly:s}),r.jsx(tt,{readOnly:s,onSubmitUfullstendigsoknad:g,submitting:m.formState.isSubmitting})]})};_i.__docgenInfo={description:`ForeldrepengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const xi=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g,fagsakPersonnummer:k,erEndringssøknad:v})=>r.jsx(_i,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g,fagsakPersonnummer:k,erEndringssøknad:v});xi.__docgenInfo={description:"",methods:[],displayName:"ForeldrepengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const ea="frilans",vk=s=>({...en.buildInitialValues(s),...Hn.buildInitialValues(),...ye.buildInitialValues(),...gt.buildInitialValues(),[ea]:nn.buildInitialValues()}),yk=s=>{let i=[];const{tilretteleggingArbeidsforhold:o}=s;return o!=null&&o.sokForArbeidsgiver&&(o!=null&&o.tilretteleggingForArbeidsgiver)&&(i=i.concat(o.tilretteleggingForArbeidsgiver.map(d=>({"@type":"VI",behovsdato:d.behovsdato,organisasjonsnummer:d.organisasjonsnummer,tilrettelegginger:d.tilretteleggingArbeidsgiver})))),o!=null&&o.sokForFrilans&&i.push({"@type":"FR",behovsdato:o.behovsdatoFrilans,tilrettelegginger:o.tilretteleggingFrilans}),o!=null&&o.sokForSelvstendigNaringsdrivende&&i.push({"@type":"SN",behovsdato:o.behovsdatoSN,tilrettelegginger:o.tilretteleggingSelvstendigNaringsdrivende}),i},fk=(s,i)=>({...ye.transformValues(s),foedselsDato:s.foedselsDato,tilretteleggingArbeidsforhold:yk(s),[ea]:nn.transformValues(s[ea]),[mn]:en.transformValues(s,i)}),Oi=({readOnly:s,soknadData:i,alleKodeverk:o,onSubmit:d,onSubmitUfullstendigsoknad:g})=>{const k=vr({defaultValues:V.useMemo(()=>vk(o[ee.ARBEID_TYPE]),[])}),v=o[ee.ARBEID_TYPE],m=k.watch("mottattDato");return r.jsxs(yr,{formMethods:k,onSubmit:h=>d(fk(h,v)),children:[r.jsx(at,{readOnly:s}),r.jsx(ye,{readOnly:s,alleKodeverk:o,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,mottattDato:m}),r.jsx(Hn,{readOnly:s,alleKodeverk:o}),r.jsx(la,{readOnly:s,alleKodeverk:o}),r.jsx(nn,{readOnly:s}),r.jsx(en,{readOnly:s,kunMiliterEllerSiviltjeneste:!0,alleKodeverk:o}),r.jsx(qi,{readOnly:s}),r.jsx(gt,{readOnly:s}),r.jsx(fr,{readOnly:s}),r.jsx(tt,{readOnly:s,onSubmitUfullstendigsoknad:g,submitting:k.formState.isSubmitting})]})};Oi.__docgenInfo={description:`SvangerskapspengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const da={"Registrering.RegistrereSoknad":"Registrere søknad","Registrering.RegistrerAlleOpplysninger":"Registrer inn alle opplysninger fra papirsøknaden","Registrering.Omsoknaden.Title":"Om søknaden","Registrering.Omsoknaden.soknadstype":"Søknadstype","Registrering.Omsoknaden.Tema":"Tema","Registrering.Omsoknaden.Soker":"Søker","Registrering.Omsoknaden.VisSkjema":"Vis skjema","SoknadRegistrertModal.ContentLabel":"Søknaden er registrert. Du kommer nå til forsiden.","SoknadRegistrertModal.InfoTextOne":"Søknaden er registrert og vil bli behandlet","SoknadRegistrertModal.InfoTextTwo":"Du kommer nå til forsiden","SoknadRegistrertModal.OkButtonText":"OK"},hk=re(da),Si=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g})=>r.jsx(ke,{value:hk,children:r.jsx(Oi,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g})});Si.__docgenInfo={description:"",methods:[],displayName:"SvangerskapspengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ck="_container_10p07_1",bk="_colWidth_10p07_5",jk="_pushRight_10p07_9",or={container:ck,colWidth:bk,pushRight:jk},Rk=[se.ADOPSJON,se.FODSEL],Ni=({setSoknadData:s,fagsakYtelseType:i,alleKodeverk:o})=>{const d=V.useMemo(()=>({fagsakYtelseType:i,familieHendelseType:void 0,foreldreType:void 0}),[i]),g=vr({defaultValues:d}),k=g.watch("fagsakYtelseType"),v=V.useCallback(j=>s(new ek(j.fagsakYtelseType,j.familieHendelseType,j.foreldreType)),[s]),m=o[ee.FAGSAK_YTELSE],h=o[ee.FAMILIE_HENDELSE_TYPE],f=o[ee.FORELDRE_TYPE];return r.jsx(yr,{formMethods:g,onSubmit:v,children:r.jsxs(oe,{className:or.container,children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Omsoknaden.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsxs(T,{className:or.colWidth,children:[r.jsx(Ze,{children:r.jsx(c,{id:"Registrering.Omsoknaden.soknadstype"})}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:"fagsakYtelseType",validate:[q],radios:m.map(j=>({label:j.navn,value:j.kode,disabled:!!i}))})]}),r.jsxs(T,{className:or.colWidth,children:[r.jsx(Ze,{children:r.jsx(c,{id:"Registrering.Omsoknaden.Tema"})}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:"familieHendelseType",validate:k===ss.SVANGERSKAPSPENGER?[]:[q],radios:h.filter(({kode:j})=>Rk.includes(j)).map(j=>({label:j.navn,value:j.kode,disabled:k===ss.SVANGERSKAPSPENGER}))})]}),r.jsxs(T,{className:or.colWidth,children:[r.jsx(Ze,{children:r.jsx(c,{id:"Registrering.Omsoknaden.Soker"})}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:"foreldreType",validate:[q],radios:f.map(j=>({label:j.navn,value:j.kode}))})]})]})}),r.jsx(y,{thirtyTwoPx:!0}),r.jsx("div",{className:or.pushRight,children:r.jsx(Be,{size:"small",variant:"primary",onClick:Gs,disabled:g.formState.isSubmitting||g.formState.isSubmitted,children:r.jsx(c,{id:"Registrering.Omsoknaden.VisSkjema"})})})]})})};Ni.__docgenInfo={description:`SoknadTypePickerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Tk="_panel_nx0ko_1",Ak={panel:Tk},qk=re(da),Ei=({fagsak:s,kodeverk:i,readOnly:o,lagreUfullstendig:d,lagreFullstendig:g,erEndringssøknad:k})=>{const[v,m]=V.useState(),h=V.useCallback(j=>(v&&g(j,v.fagsakYtelseType,v.familieHendelseType,v.foreldreType),Promise.resolve()),[v]),f=V.useCallback(()=>(v&&d(v.fagsakYtelseType,v.familieHendelseType,v.foreldreType),Promise.resolve()),[v]);return r.jsx(ke,{value:qk,children:r.jsxs(Lu,{className:Ak.panel,children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.RegistrereSoknad"})}),r.jsx(y,{sixteenPx:!0}),!o&&r.jsx(Yu,{children:r.jsx(c,{id:"Registrering.RegistrerAlleOpplysninger"},"regOpplysninger")}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{sixteenPx:!0}),r.jsx(Ni,{setSoknadData:m,fagsakYtelseType:s.fagsakYtelseType,alleKodeverk:i}),v&&v.getFagsakYtelseType()===Wr.ENGANGSSTONAD&&r.jsx(Pi,{onSubmitUfullstendigsoknad:f,onSubmit:h,readOnly:o,soknadData:v,alleKodeverk:i}),v&&v.getFagsakYtelseType()===Wr.FORELDREPENGER&&r.jsx(xi,{onSubmitUfullstendigsoknad:f,onSubmit:h,readOnly:o,soknadData:v,alleKodeverk:i,fagsakPersonnummer:s.bruker.fødselsnummer,erEndringssøknad:k}),v&&v.getFagsakYtelseType()===Wr.SVANGERSKAPSPENGER&&r.jsx(Si,{onSubmitUfullstendigsoknad:f,onSubmit:h,readOnly:o,soknadData:v,alleKodeverk:i})]})})};Ei.__docgenInfo={description:"",methods:[],displayName:"RegistrerPapirsoknadPanel",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  fagsakMarkering?: string;
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
}>`,required:!1}},{key:"fagsakMarkering",value:{name:"string",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
  fagsakMarkering?: string;
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
) => Promise<any>`,signature:{arguments:[{type:{name:"any"},name:"formValues"},{type:{name:"string"},name:"fagsakYtelseType"},{type:{name:"string"},name:"familieHendelseType"},{type:{name:"string"},name:"foreldreType"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const Fk="_alertStyle_1d8gt_1",wk="_modalStyle_1d8gt_6",Pk="_fullWidth_1d8gt_11",_k="_reduceMargin_1d8gt_16",xk="_left_1d8gt_20",Ok="_right_1d8gt_24",Mn={alertStyle:Fk,modalStyle:wk,fullWidth:Pk,reduceMargin:_k,left:xk,right:Ok},Cr=re(da),Vi=({isOpen:s=!1})=>r.jsx(Xe,{className:Mn.modalStyle,open:s,"aria-label":Cr.formatMessage({id:"SoknadRegistrertModal.ContentLabel"}),onClose:()=>{},children:r.jsx(Xe.Body,{children:r.jsxs(Qr,{size:"small",variant:"success",className:Mn.alertStyle,children:[r.jsxs("div",{className:Mn.left,children:[r.jsx("p",{className:Mn.reduceMargin,children:Cr.formatMessage({id:"SoknadRegistrertModal.InfoTextOne"})}),r.jsx("p",{className:Mn.reduceMargin,children:Cr.formatMessage({id:"SoknadRegistrertModal.InfoTextTwo"})})]}),r.jsx("div",{className:Mn.right,children:r.jsx($s,{to:"/",children:r.jsx(Be,{size:"small",variant:"primary",children:Cr.formatMessage({id:"SoknadRegistrertModal.OkButtonText"})})})})]})})});Vi.__docgenInfo={description:`SoknadRegistrertModal

Informasjonsmodal som vises til saksbehandler når en papirsøknad har blitt registrert.`,methods:[],displayName:"SoknadRegistrertModal",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Sk=s=>s.map(i=>i.definisjon).filter(i=>i===dr.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD||i===dr.REGISTRER_PAPIRSOKNAD_FORELDREPENGER||i===dr.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER||i===dr.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER)[0],Nk=(s,i,o,d)=>(g,k,v,m)=>{const h=[{"@type":Sk(s.aksjonspunkt),tema:v,soknadstype:k,soker:m,...g}],f={saksnummer:i.saksnummer,behandlingUuid:s.uuid,behandlingVersjon:s.versjon,bekreftedeAksjonspunktDtoer:h};return o(f).then(j=>{var F;((F=j==null?void 0:j.taskStatus)==null?void 0:F.status)!==ag.HALTED&&d(!0)})},Mi=({fagsak:s,behandling:i,kodeverk:o,rettigheter:d,lagreAksjonspunkt:g})=>{const[k,v]=V.useState(!1),m=!d.writeAccess.isEnabled||i.behandlingPaaVent,h=V.useMemo(()=>Nk(i,s,g,v),[i,s,g,v]),f=V.useCallback((w,A,O)=>h({ufullstendigSoeknad:!0},w,A,O),[h]),j=eg(),F=V.useCallback(()=>{j("/")},[]);if(!i.aksjonspunkt)return r.jsx(Uu,{});const b=i.aksjonspunkt.some(w=>w.definisjon===dr.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER);return r.jsxs(r.Fragment,{children:[r.jsx(ng,{behandling:i,kodeverk:o,opneSokeside:F}),r.jsx(Vi,{isOpen:k}),r.jsx(Ei,{fagsak:s,kodeverk:o,readOnly:m,lagreUfullstendig:f,lagreFullstendig:h,erEndringssøknad:b})]})};Mi.__docgenInfo={description:`RegisterPapirsoknad

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
  fagsakMarkering?: string;
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
}>`,required:!1}},{key:"fagsakMarkering",value:{name:"string",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
  fagsakMarkering?: string;
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`}]},{name:"undefined"}]}],raw:"Promise<Behandling | undefined>"}}},description:""}}};const Ek=(s,i)=>{V.useEffect(()=>{i&&s(i)},[i])},Vk=({behandling:s,setBehandling:i,kodeverk:o,fagsak:d,rettigheter:g})=>{const{startRequest:k,data:v}=rg.useRestApiRunner(tg.SAVE_AKSJONSPUNKT);return Ek(i,v),r.jsx(Mi,{behandling:s,fagsak:d,kodeverk:o,rettigheter:g,lagreAksjonspunkt:k})};Vk.__docgenInfo={description:"",methods:[],displayName:"BehandlingPapirsoknadIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
  fagsakMarkering?: string;
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
}>`,required:!1}},{key:"fagsakMarkering",value:{name:"string",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
  fagsakMarkering?: string;
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
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}}]}},description:""}}};export{Vk as default};
