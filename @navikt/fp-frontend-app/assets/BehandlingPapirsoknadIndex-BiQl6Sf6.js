var Iu=Object.defineProperty;var Du=(s,i,o)=>i in s?Iu(s,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[i]=o;var Dr=(s,i,o)=>Du(s,typeof i!="symbol"?i+"":i,o);import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as E,R as Zr,c as Bu,g as Ku}from"./index-DRjF_FHU.js";import{W as Q,H as L,L as T,y,l as oe,M as c,O as de,A as Qr,S as Lu,K as nt,P as Yu,v as Uu,F as $u}from"./index.es-D36X6lUI.js";import{u as Y,y as he,ah as Oe,P as V,H as q,g as I,D as qe,U as Se,K as ee,w as ie,q as le,ap as Hu,a3 as Bs,aq as Gu,k as U,M as fe,ar as Cu,O as un,p as Kn,t as Ks,v as kr,s as gn,n as rt,as as Ls,A as Ys,a as at,b as Us,at as se,au as Wu,ad as Yn,av as zu,aw as Ju,ax as Xu,d as pr,$ as vr,x as Zu,ab as Wa,ay as Qu,az as eg,aA as ng,N as ss,aB as rg,J as dr,G as ag,r as tg,B as sg}from"./AppIndex.stories-DezPvjGD.js";import{A as ig}from"./useRestApiRunner-BKOIDkPf.js";import{a as H,H as ne,t as re,P as ke,d as tt,L as me,A as An,D as Xe,M as Je,B as $s,c as Be,E as yr,g as Hs,V as lg,av as Ka,b as Gs,f as Cs}from"./index.es-DjpHsXuw.js";import{I as og,z as Wr}from"./index.es-zhgnUGpN.js";import{l as st}from"./landkoder-T-1RG3zx.js";import{c as dg}from"./bind-BilxuNmH.js";import{L as is}from"./index.es-aHdFtpWX.js";import{u as ln}from"./uttakPeriodeType-S-1j3cKx.js";import{o as Br}from"./oppholdArsakType-mAEpEtTn.js";import{t as En}from"./tilretteleggingType-DxzN8sbp.js";import"./index-rX-Bn4lm.js";import"./iframe-BurfpOFk.js";import"../sb-preview/runtime.js";import"./SettPaVentReadOnlyModal-Bry0VHKR.js";import"./nb_NO-CLehlXOw.js";function ug(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}const Tn={FISKER:"FISKER",ARBEIDSTAKER:"ARBEIDSTAKER",SELVSTENDIG_NAERINGSDRIVENDE:"SELVSTENDIG_NÆRINGSDRIVENDE",KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NAERINGSDRIVENDE:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",SJOMANN:"SJØMANN",JORDBRUKER:"JORDBRUKER",DAGPENGER:"DAGPENGER",INAKTIV:"INAKTIV",KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",KOMBINASJON_ARBEIDSTAKER_OG_FISKER:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",FRILANSER:"FRILANSER",KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",DAGMAMMA:"DAGMAMMA",ANNET:"ANNET"},Kr={LONN_UNDER_UTDANNING:"LØNN_UNDER_UTDANNING",UTENLANDSK_ARBEIDSFORHOLD:"UTENLANDSK_ARBEIDSFORHOLD",FRILANSER:"FRILANSER",MILITÆR_ELLER_SIVILTJENESTE:"MILITÆR_ELLER_SIVILTJENESTE"},Ln={MOR:"MOR",FAR:"FAR",MEDMOR:"MEDMOR",MEDFAR:"MEDFAR",TREDJE_PART:"TREDJE_PART"},La={UKJENT_FORELDER:"UKJENT_FORELDER",IKKE_NORSK_FNR:"IKKE_NORSK_FNR"},ur={FISKE:"FISKE",FRILANSER:"FRILANSER",DAGMAMMA:"DAGMAMMA",JORDBRUK_ELLER_SKOGBRUK:"JORDBRUK_SKOGBRUK",ANNEN:"ANNEN"},zr={INSTITUSJONSOPPHOLD_ANNEN_FORELDER:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",SYKDOM_ANNEN_FORELDER:"SYKDOM_ANNEN_FORELDER",ALENEOMSORG:"ALENEOMSORG",IKKE_RETT_ANNEN_FORELDER:"IKKE_RETT_ANNEN_FORELDER",UDEFINERT:"-"},gg="_notLastRow_7c46s_1",mg={notLastRow:gg},mn="andreYtelser",it="PERIODER",Lr=(s,i)=>s(i),ea=({readOnly:s,name:i})=>{const o=H(),{getValues:d,control:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:h,append:f}=he({control:g,name:`${mn}.${i}`});return r.jsx(Oe,{fields:m,bodyText:o.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:s,append:f,remove:h,children:(j,F,b)=>{const w=`${mn}.${i}.${F}`;return r.jsxs("div",{children:[r.jsx("div",{className:F!==m.length-1?mg.notLastRow:"",children:r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(V,{name:`${w}.periodeFom`,label:F===0?o.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[q,I,()=>{const A=Lr(d,`${w}.periodeFom`),S=Lr(d,`${w}.periodeTom`);return S&&A?qe(S)(A):null}],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(V,{name:`${w}.periodeTom`,label:F===0?o.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[q,I,()=>{const A=Lr(d,`${w}.periodeFom`),S=Lr(d,`${w}.periodeTom`);return S&&A?Se(A)(S):null}],onChange:()=>v?k():void 0})}),b&&r.jsx(T,{children:b()})]})})}),r.jsx(y,{sixteenPx:!0})]},j.id)}})};ea.transformValues=(s,i)=>s.map(o=>({ytelseType:i,periodeFom:o.periodeFom,periodeTom:o.periodeTom}));ea.__docgenInfo={description:`RenderAndreYtelserPerioderFieldArray

Viser inputfelter for fra og til dato for perioder for andre ytelser`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"FormValues[]"}},{name:"ytelseType",optional:!1,type:{name:"string"}}],returns:{type:{name:"any"}}}],displayName:"RenderAndreYtelserPerioderFieldArray"};const Ws=(s,i)=>i?s.filter(o=>o.kode===Kr.MILITÆR_ELLER_SIVILTJENESTE):s.filter(o=>o.kode!==Kr.UTENLANDSK_ARBEIDSFORHOLD&&o.kode!==Kr.FRILANSER&&o.kode!==Kr.LONN_UNDER_UTDANNING),Un=({readOnly:s,kunMiliterEllerSiviltjeneste:i=!1,alleKodeverk:o})=>{const{watch:d}=Y(),g=d(mn),k=o[ee.ARBEID_TYPE],v=E.useMemo(()=>Ws(k,i),[i]);return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.AndreYtelser.Title"})}),r.jsx(y,{sixteenPx:!0}),v.map(m=>{const h=`${m.kode}_${it}`;return r.jsxs(Zr.Fragment,{children:[r.jsx(ie,{name:`${mn}.${m.kode}`,label:m.navn,readOnly:s},m.kode),g&&g[m.kode]&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{children:r.jsx(ea,{name:h,readOnly:s})})]})]},m.kode)})]})};Un.buildInitialValues=s=>{const i={};return Ws(s).forEach(o=>{const d=`${o.kode}_${it}`;i[d]=[{}]}),{[mn]:i}};Un.transformValues=(s,i)=>{const o=s[mn],d=[];return i.filter(g=>o&&o[g.kode]).forEach(g=>{const k=`${g.kode}_${it}`,v=o?o[k]:void 0;v&&ea.transformValues(v,g.kode).forEach(m=>d.push(m))}),d};Un.__docgenInfo={description:`AndreYtelserPanel

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
}>`}],raw:"KodeverkMedNavn[]"}}],returns:{type:{name:"any"}}}],displayName:"AndreYtelserPanel",props:{kunMiliterEllerSiviltjeneste:{defaultValue:{value:"false",computed:!1},required:!1}}};const ue={"Registrering.AndreYtelser.periodeTom":"T.o.m.","Registrering.AndreYtelser.periodeFom":"F.o.m.","Registrering.AndreYtelser.Title":"Andre inntektskilder","Registrering.TheOtherParent.CannotSpecifyOtherParent":"Kan ikke oppgi annen forelder","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title":"Angi årsak","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1":"Forelder er ukjent","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2":"Har ikke norsk f.nr. eller d-nr.","Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer":"Utenlandsk fødselsnummer","Registrering.TheOtherParent.CannotSpecifyOtherParent.Land":"Land","Registrering.TheOtherParent.Title":"Den andre forelderen","Registrering.TheOtherParent.Fodselsnummer":"Fødselsnummer/D-nummer","Registrering.Permisjon.SøkerHarAleneomsorg":"Har søker aleneomsorg for barnet?","Registrering.Permisjon.SøkerHarAleneomsorg.Yes":"Ja","Registrering.Permisjon.SøkerHarAleneomsorg.No":"Nei","Registrering.Permisjon.HarRettPaForeldrepenger":"Har den andre forelderen rett på foreldrepenger i Norge?","Registrering.Permisjon.HarRettPaForeldrepenger.Yes":"Ja","Registrering.Permisjon.HarRettPaForeldrepenger.No":"Nei","Registrering.Permisjon.MorUføretrygd":"Bare far rett og mor mottar uføretryd?","Registrering.Permisjon.MorUføretrygd.Yes":"Ja","Registrering.Permisjon.MorUføretrygd.No":"Nei","Registrering.Permisjon.AnnenForelderRettEØS":"Annen forelder har tilstrekkelig opptjening fra land i EØS?","Registrering.Permisjon.AnnenForelderRettEØS.Yes":"Ja","Registrering.Permisjon.AnnenForelderRettEØS.No":"Nei","Registrering.TerminOgFodsel":"Opplysninger om termin og fødsel","Registrering.Termin.Fodt":"Er barnet født?","Registrering.Fodsel.ErFodt":"Ja","Registrering.Fodsel.ErIkkeFodt":"Nei","Registrering.Termindato":"Termindato","Registrering.AntallBarn":"Antall barn","Registrering.UtstedtDato":"Utstedt dato fra terminbekreftelsen","Registrering.Fodselsdato":"Når ble barnet født?","Registrering.RettTilPrematuruker":"Rett til prematuruker vil kun sjekkes når du også oppgir termindato","Registrering.Frilans.Title":"Frilanser","Registrering.Frilans.HarFrilansvirksomhet":"Har søker periode med frilansvirksomhet?","Registrering.Frilans.OppgiPeriode":"Oppgi periode med frilansvirksomhet","Registrering.Frilans.Yes":"Ja","Registrering.Frilans.No":"Nei","Registrering.Frilans.periodeTom":"T.o.m.","Registrering.Frilans.periodeFom":"F.o.m.","Registrering.Frilans.ErNyoppstartedFrilanser":"Er søker nyoppstartet frilanser?","Registrering.Frilans.HarInntektFraForsterhjem":"Har søker inntekt fra fosterhjem?","Registrering.FrilansOppdrag.HarHattOppdragForFamilie":"Har søker hatt oppdrag for nær familie?","Registrering.FrilansOppdrag.Yes":"Ja","Registrering.FrilansOppdrag.No":"Nei","Registrering.FrilansOppdrag.OppgiPeriode":"Oppgi periode","Registrering.FrilansOppdrag.FieldArray.periodeFom":"F.o.m.","Registrering.FrilansOppdrag.FieldArray.periodeTom":"T.o.m.","Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver":"Oppdragsgiver","Registrering.FrilansOppdrag.FieldArray.NyPeriode":"Legg til periode","Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation":"F.o.m må være lik eller etter dato for første periode med frilansvirksomhet","Registrering.InntektsgivendeArbeid.ArbeidINorge.Title":"Inntektsgivende arbeid i Norge","Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold":"Vedtaksløsningen foretar oppslag av norske arbeidsforhold fra Aa-registeret så dette skal ikke registreres her","Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title":"Inntektsgivende arbeid i utlandet","Registrering.InntektsgivendeArbeid.ArbeidPaAmbassade":"Arbeid som ambassadepersonell i Norge","Registrering.InntektsgivendeArbeid.Arbeidsgiver":"Arbeidsgiver","Registrering.InntektsgivendeArbeid.Virksomhetsnummer":"Virksomhetsnummer","Registrering.InntektsgivendeArbeid.Land":"Land","Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold":"Legg til utenlandsk arbeidsforhold","Registrering.InntektsgivendeArbeid.Yes":"Ja, arbeidsgiver og søker er nære venner eller i familie","Registrering.InntektsgivendeArbeid.No":"Nei, arbeidsgiver og søker er ikke nære venner eller i familie","Registrering.InntektsgivendeArbeid.Relasjon":"Relasjon","Registrering.InntektsgivendeArbeid.Placeholder":"Placeholder - Oppslag av arbeidsforhold","Registrering.InntektsgivendeArbeid.periodeFom":"Fra og med","Registrering.InntektsgivendeArbeid.periodeTom":"Til og med","ModalLukkPapirSoknad.ModalDescription":"Registrering av søknaden avsluttes","ModalLukkPapirSoknad.Avslutt":"Avslutt registrering av søknaden","ModalLukkPapirSoknad.AvslutterRegistrering":"Avslutter registrering av søknaden. Det er ikke mulig å innhente ytterligere opplysninger.","ModalLukkPapirSoknad.BekreftAvslag":"Bekreft at søknaden skal avslås","ModalLukkPapirSoknad.Ok":"OK","ModalLukkPapirSoknad.Avbryt":"Avbryt","Registrering.SaveApplication.Title":"Ferdigstill registrering","Registrering.SaveApplication.Description":"Ved endring av opplysningene er begrunnelse obligatorisk","Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt":"Søkers opplysningsplikt er ikke overholdt","Registrering.SaveApplication.EndButton":"Bekreft og avslutt behandling","Registrering.SaveApplication.SaveButton":"Bekreft og fortsett","Registrering.Verge":"Verge/fullmektig skal knyttes til saken","Registrering.Omsoknaden.MottattDato":"Mottatt dato","Registrering.Adopsjon.FodselsdatoBarnN":"Fødselsdato barn {n}","Registrering.Adopsjon.Title":"Adopsjon","Registrering.Adopsjon.OmsorgTitle":"Omsorg","Registrering.Adopsjon.GjelderEktefellesBarn":"Gjelder adopsjon ektefelles/samboers barn?","Registrering.Adopsjon.Ja":"Ja","Registrering.Adopsjon.Nei":"Nei","Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Dato for omsorgsovertakelse/stebarnsadopsjon","Registrering.Adopsjon.DatoForOvertakelsen":"Dato for omsorgsovertakelsen","Registrering.Adopsjon.Ankomstdato":"Ankomstdato","Registrering.Adopsjon.AntallBarn":"Antall barn","Registrering.RegistreringOpphold.AngiOpphold":"Oppgi hvilket land og i hvilken periode","Registrering.RegistreringOpphold.Add":"Legg til","Registrering.RegistreringOpphold.periodeFom":"F.o.m.","Registrering.RegistreringOpphold.periodeTom":"T.o.m.","Registrering.RegistreringOpphold.Country":"Land","Registrering.Opphold":"Opphold i Norge","Registrering.OppholdVedAdopsjon":"Søker oppholder seg i Norge nå","Registrering.Opphold.Yes":"Ja","Registrering.Opphold.No":"Nei","Registrering.OppholdVedFodsel":"Bor i Norge ved fødselstidspunktet","Registrering.OppholdNesteTolv":"Bor i Norge de neste 12 månedene","Registrering.OppholdSisteTolv":"Bodd i Norge de siste 12 månedene","Registrering.Rettigheter.AnnenForelderDoed":"Den andre forelderen er død","Registrering.Rettigheter.OvertaForeldreansvaretAlene":"Omsorgen er overtatt med sikte på å overta foreldreansvaret alene","Registrering.Rettigheter.MannAdoptererAlene":"Mann adopterer alene","Registrering.Rettigheter.IkkeRelevant":"Ikke relevant","Registrering.Rettigheter.Title":"Rettigheter","Registrering.Sprak":"Språk","Registrering.Sprak.Bokmal":"Bokmål","Registrering.Sprak.Nynorsk":"Nynorsk","Registrering.Sprak.Engelsk":"Engelsk","Registrering.VirksomhetNaeringTypePanel.Title":"Type næringsvirksomhet","Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet":"Er søker ny i arbeidslivet","Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged":"Er virksomheten blitt varig endret, nyoppstartet eller er søker ny i arbeidslivet?","Registrering.VirksomhetStartetPanel.Yes":"Ja","Registrering.VirksomhetStartetPanel.No":"Nei","Registrering.VirksomhetStartetPanel.Reason":"Årsak","Registrering.VirksomhetStartetPanel.HarVarigEndring":"Varig endring i næring","Registrering.VirksomhetStartetPanel.GjeldendeFom":"Gjeldende f.o.m.","Registrering.VirksomhetStartetPanel.ErNyoppstartet":"Nyoppstartet næring","Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse":"Beskriv endringen i næring","Registrering.VirksomhetStartetPanel.Inntekt":"Årsinntekt","Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak":"Må fylle ut minst en årsak","Registrering.VirksomhetRelasjonPanel.Relation":"Relasjon","Registrering.VirksomhetRelasjonPanel.No":"Nei, har ikke nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRelasjonPanel.Yes":"Ja, har nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRegnskapPanel.Accountant":"Har søker regnskapsfører eller revisor?","Registrering.VirksomhetRegnskapPanel.Yes":"Ja","Registrering.VirksomhetRegnskapPanel.No":"Nei","Registrering.VirksomhetRegnskapPanel.AccountantName":"Navn på regnskapsfører/revisor?","Registrering.VirksomhetRegnskapPanel.AccountantPhone":"Telefonnummer til regnskapsfører/revisor?","Registrering.VirksomhetIdentifikasjonPanel.Name":"Navn på foretaket","Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway":"Er næringsvirksomheten registrert i Norge","Registrering.VirksomhetIdentifikasjonPanel.No":"Nei","Registrering.VirksomhetIdentifikasjonPanel.Yes":"Ja","Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber":"Virksomhetsnummer","Registrering.VirksomhetIdentifikasjonPanel.Country":"Hvilket land er virksomheten registrert i?","Registrering.VirksomhetIdentifikasjonPanel.periodeFom":"Fra og med","Registrering.VirksomhetIdentifikasjonPanel.periodeTom":"Til og med","Registrering.EgenVirksomhet.Title":"Egen næringsvirksomhet","Registrering.EgenVirksomhet.Yes":"Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.EgenVirksomhet.No":"Nei, søker har ikke arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.RegistrerVirksomhetPanel.Add":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetPanel.Name":"Navn på virksomhet","Registrering.RegistrerVirksomhetPanel.ArrayMinLength":"Listen må ha lengde større enn 1","Registrering.RegistrerVirksomhetModalForm.ModalDescription":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetModalForm.Title":"Egen næringsvirksomhet","Registrering.RegistrerVirksomhetModalForm.Save":"Lagre","Registrering.RegistrerVirksomhetModalForm.Cancel":"Avbryt","BehovForTilretteleggingPanel.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilretteleggingPanel.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende":"Søkes det om svangerskapspenger som selvstendig næringsdrivende?","BehovForTilretteleggingPanel.Ja":"Ja","BehovForTilretteleggingPanel.Nei":"Nei","BehovForTilretteleggingPanel.SokForFrilans":"Søkes det om svangerskapspenger som frilanser?","BehovForTilretteleggingPanel.SokForArbeidsgiver":"Søkes det om svangerskapspenger som arbeidstaker?","BehovForTilretteleggingPanel.MinstEnMaaVereJa":"Minst ett av spørsmålene må besvares med alternativ Ja","BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov":"Legg til tilretteleggingsbehov","BehovForTilrettteleggingFieldArray.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilrettteleggingFieldArray.FraDato":"Fra dato","BehovForTilrettteleggingFieldArray.Stillingsprosent":"Stillingsprosent","BehovForTilrettteleggingFieldArray.KanGjennomfores":"a) kan gjennomføres slik at arbeidstakeren kan fortsette med samme stilling fra og med","BehovForTilrettteleggingFieldArray.RedusertArbeid":"b) kan gjennomføres slik at arbeidstakeren kan fortsette med redusert arbeidstid fra og med","BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores":"c) kan ikke gjennomføres og arbeidstakeren må midlertidig gå ut av sitt arbeid fra og med","TilretteleggingForArbeidsgiverFieldArray.OrgNr":"Arbeidsgivers orgnr/fnr","TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver":"Legg til arbeidsgiver","TerminFodselSvpPanel.TerminOgFodsel":"Opplysninger om termin og fødsel","TerminFodselSvpPanel.Termindato":"Termindato","TerminFodselSvpPanel.Fodselsdato":"Fødselsdato","Registrering.Dekningsgrad.Title":"Dekningsgrad","Registrering.Dekningsgrad.prosent.80":"80 prosent","Registrering.Dekningsgrad.prosent.100":"100 prosent","Registrering.Permisjon.Title":"Tidsrom for permisjon","Registrering.Permisjon.PermisjonForFodsel":"Permisjon før fødsel","Registrering.Permisjon.PerioderForeldrepenger":"Perioder med permisjon med foreldrepenger","Registrering.Permisjon.FulltUttak":"Fullt uttak","Registrering.Permisjon.FedrekvoteEllerMedmorkvote":"Fedrekvote eller kvote til medmor","Registrering.Permisjon.AngiPeriode":"Angi periode","Registrering.Permisjon.periodeType":"Periodetype","Registrering.Permisjon.nyPeriode":"Legg til periode","Registrering.Permisjon.periodeFom":"F.o.m.","Registrering.Permisjon.periodeTom":"T.o.m.","Registrering.Permisjon.SamtidigUttaksprosent":"Prosentandel uttak","Registrering.Permisjon.ArbeidskategoriLabel":"Type arbeid","Registrering.Permisjon.ErArbeidstaker":"Arbeidstaker","Registrering.Permisjon.ErIkkeArbeidstaker":"Selvstendig næringsdrivende/frilanser","Registrering.Permisjon.Orgnr":"Virksomhetsnummer","Registrering.Permisjon.OverforingAvKvote.OvertaKvoten":"Overføring av kvote","Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak":"Angi årsak","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt":"Mor er innlagt på helseinstitusjon","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk":"Mor er pga sykdom avhengig av hjelp for å ta seg av barnet/barna","Registrering.Permisjon.OverforingAvKvote.OvertaKvote":"Søker ønsker å overta kvote","Registrering.Permisjon.OverforingAvKvote.fomDato":"F.o.m.","Registrering.Permisjon.OverforingAvKvote.tomDato":"T.o.m.","Registrering.Permisjon.Fellesperioden":"Fellesperioden","Registrering.Permisjon.Fellesperiode.Yes":"Ja","Registrering.Permisjon.Fellesperiode.No":"Nei","Registrering.Permisjon.Fellesperiode.ForeldrepengerTilFarEllerMedmor":"Skal far eller medmor ha foreldrepenger fra fellesperioden?","Registrering.Permisjon.Fellesperiode.periodeFom":"Fellesperiode F.o.m.","Registrering.Permisjon.Fellesperiode.periodeTom":"Fellesperiode T.o.m.","Registrering.Permisjon.Fellesperiode.morsAktivitet":"Mors aktivitet","Registrering.Permisjon.MorBorSammenFaren":"Mor bor sammen med faren til barnet","Registrering.Permisjon.Mor.Yes":"Ja","Registrering.Permisjon.Mor.No":"Nei","Registrering.Permisjon.HarSamtidigUttak":"Samtidig uttak","Registrering.Permisjon.Flerbarnsdager":"Flerbarnsdager","Registrering.Permisjon.UttakStartdato":"Når skal uttak av foreldrepenger starte?","Registrering.Permisjon.HeleModrekvotenUmiddelbart":"Skal hele mødrekvoten tas ut umiddelbart etter fødsel?","Registrering.Permisjon.HeleFellesperiodenUmiddelbart":"Skal hele fellesperioden tas ut umiddelbart etter mødrekvoten?","Registrering.Permisjon.Utsettelse.Title":"Utsettelse","Registrering.Permisjon.Utsettelse.Periode":"Hva skal utsettes","Registrering.Permisjon.Utsettelse.Arsak":"Årsak til utsettelse","Registrering.Permisjon.Utsettelse.LeggTilPeriode":"Legg til periode for utsettelse","Registrering.Permisjon.Utsettelse.UtsettUttaket":"Søker ønsker å utsette uttaket","Registrering.Permisjon.Opphold.OppholdUttaket":"Søker ønsker opphold i uttaket","Registrering.Permisjon.Opphold.Title":"Opphold","Registrering.Permisjon.Opphold.Periode":"Hva skal annen forelder ta ut?","Registrering.Permisjon.Opphold.Arsak":"Årsak til opphold","Registrering.Permisjon.Opphold.LeggTilPeriode":"Legg til periode med opphold","Registrering.Permisjon.Gradering.Title":"Gradering","Registrering.Permisjon.Gradering.Periode":"Hva skal graderes","Registrering.Permisjon.Gradering.Prosentandel":"Prosentandel arbeid i perioden","Registrering.Permisjon.Gradering.SkalGraderes":"Arbeidsforhold som skal graderes","Registrering.Permisjon.Gradering.LeggTilPeriode":"Legg til periode for gradering","Registrering.Permisjon.Gradering.GraderUttaket":"Søker ønsker å gradere uttaket","Registrering.Permisjon.PeriodeFomForTidlig":"Behandlinger med første uttaksdag før 01.01.2019 skal ikke behandles i vedtaksløsningen","Registrering.TheOtherParent.Confirmation":"Bekreftelse","Registrering.TheOtherParent.OtherParentKnowPeriods":"Annen forelder er kjent med hvilke perioder det er søkt om","Registrering.TheOtherParent.Yes":"Ja","Registrering.TheOtherParent.No":"Nei","PermisjonPanel.MinstEnPeriodeRequired":"Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering","PermisjonPanel.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)"},kg=re(ue),Qe=({readOnly:s,alleKodeverk:i,kunMiliterEllerSiviltjeneste:o})=>r.jsx(ke,{value:kg,children:r.jsx(Un,{readOnly:s,alleKodeverk:i,kunMiliterEllerSiviltjeneste:o})});Qe.buildInitialValues=s=>Un.buildInitialValues(s);Qe.transformValues=(s,i)=>Un.transformValues(s,i);Qe.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:null}],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null},{name:"andreYtelser",optional:!1,type:null}],returns:null}],displayName:"AndreYtelserPapirsoknadIndex"};const pg="_inputBredde_138ho_1",Ya={inputBredde:pg},hn="annenForelder",Yr="kanIkkeOppgiBegrunnelse",vg=s=>s.filter(({kode:i})=>i!==st.NORGE).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),zs=({readOnly:s=!0,permisjonRettigheterPanel:i,alleKodeverk:o,fagsakPersonnummer:d})=>{const{formatMessage:g}=H(),{watch:k,trigger:v,formState:{isSubmitted:m}}=Y(),h=k(`${hn}.kanIkkeOppgiAnnenForelder`),f=k(`${hn}.${Yr}`),j=o[ee.LANDKODER],F=E.useMemo(()=>j.slice().sort((b,w)=>b.navn.localeCompare(w.navn)),[j]);return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.TheOtherParent.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:`${hn}.foedselsnummer`,label:g({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:b=>b&&b.toString().replace(/\s/g,""),readOnly:s,className:Ya.inputBredde,validate:h?[]:[q,Hu,Bs,Gu(d)],disabled:h}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{name:`${hn}.kanIkkeOppgiAnnenForelder`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:s,onChange:()=>m?v():void 0}),h===!0&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(ne,{size:"small",children:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),r.jsx(U,{name:`${hn}.${Yr}.arsak`,hideLegend:!0,validate:[q],isReadOnly:s,radios:[{label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:La.UKJENT_FORELDER},{label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:La.IKKE_NORSK_FNR}]}),(f==null?void 0:f.arsak)===La.IKKE_NORSK_FNR&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(fe,{name:`${hn}.${Yr}.land`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:vg(F),validate:[q],className:Ya.inputBredde,readOnly:s}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:`${hn}.${Yr}.utenlandskFoedselsnummer`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[q],className:Ya.inputBredde,readOnly:s})]})]})]}),r.jsx(y,{sixteenPx:!0}),i]})};zs.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const yg=re(ue),Js=({readOnly:s,alleKodeverk:i,permisjonRettigheterPanel:o,fagsakPersonnummer:d})=>r.jsx(ke,{value:yg,children:r.jsx(zs,{readOnly:s,alleKodeverk:i,permisjonRettigheterPanel:o,fagsakPersonnummer:d})});Js.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};tt.extend(Cu);const ls=Ks(1),os=kr(9),Xs=()=>tt().startOf("day"),fg=()=>Xs().subtract(3,"weeks"),hg=s=>{const i=fg(),o=s?tt(s,An):void 0,d=Xs();return o&&o.isSameOrBefore(d)?(o.isAfter(i)?o:i).subtract(1,"days"):d},cg=s=>i=>qe(hg(s("termindato")))(i),Zs=({readOnly:s,erForeldrepenger:i})=>{const o=H(),{watch:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),m=d("erBarnetFodt");return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:o.formatMessage({id:"Registrering.TerminOgFodsel"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"erBarnetFodt",label:r.jsx(c,{id:"Registrering.Termin.Fodt"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.Fodsel.ErFodt"}),value:"true"},{label:r.jsx(c,{id:"Registrering.Fodsel.ErIkkeFodt"}),value:"false"}]}),m===!1&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsxs(Q,{children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(V,{name:"termindato",label:o.formatMessage({id:"Registrering.Termindato"}),isReadOnly:s,validate:[q,I],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(le,{name:"antallBarnFraTerminbekreftelse",label:o.formatMessage({id:"Registrering.AntallBarn"}),readOnly:s,validate:[q,un,ls,os]})})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsx(T,{children:r.jsx(V,{name:"terminbekreftelseDato",label:o.formatMessage({id:"Registrering.UtstedtDato"}),isReadOnly:s,validate:[I,cg(g)]})})})]})})]}),m&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:0,children:r.jsxs(Q,{children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(V,{name:"foedselsDato",label:o.formatMessage({id:"Registrering.Fodselsdato"}),isReadOnly:s,validate:[q,I,Kn]})}),r.jsx(T,{children:r.jsx(le,{name:"antallBarn",label:o.formatMessage({id:"Registrering.AntallBarn"}),readOnly:s,validate:[q,un,ls,os]})})]}),i&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(Qr,{size:"small",variant:"info",children:r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.RettTilPrematuruker"})})})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsx(T,{children:r.jsx(V,{name:"termindato",label:o.formatMessage({id:"Registrering.Termindato"}),isReadOnly:s,validate:[I]})})})]})})]})]})};Zs.__docgenInfo={description:"",methods:[],displayName:"TerminFodselDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!0,tsType:{name:"boolean"},description:""}}};const bg=re(ue),lt=({readOnly:s,erForeldrepenger:i})=>r.jsx(ke,{value:bg,children:r.jsx(Zs,{readOnly:s,erForeldrepenger:i})});lt.__docgenInfo={description:"",methods:[],displayName:"FodselPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!0,tsType:{name:"boolean"},description:""}}};const jg="_notLastRow_7c46s_1",Rg={notLastRow:jg},ds="frilans",Ur=(s,i)=>s(i),Qs=({readOnly:s})=>{const i=H(),{control:o,getValues:d,formState:{isSubmitted:g},trigger:k}=Y(),{fields:v,remove:m,append:h}=he({control:o,name:`${ds}.perioder`});return r.jsx(Oe,{fields:v,bodyText:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:s,remove:m,append:h,children:(f,j,F)=>{const b=`${ds}.perioder.${j}`;return r.jsxs("div",{className:j!==v.length-1?Rg.notLastRow:"",children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(V,{name:`${b}.periodeFom`,label:j===0?i.formatMessage({id:"Registrering.Frilans.periodeFom"}):"",validate:[q,I,()=>{const w=Ur(d,`${b}.periodeFom`),A=Ur(d,`${b}.periodeTom`);return A&&w?qe(A)(w):null}],onChange:()=>g?k():void 0})}),r.jsx(T,{children:r.jsx(V,{name:`${b}.periodeTom`,label:j===0?i.formatMessage({id:"Registrering.Frilans.periodeTom"}):"",validate:[q,I,()=>{const w=Ur(d,`${b}.periodeFom`),A=Ur(d,`${b}.periodeTom`);return A&&w?Se(w)(A):null}],onChange:()=>g?k():void 0})}),F&&r.jsx(T,{children:F()})]})}),r.jsx(y,{sixteenPx:!0})]},f.id)}})};Qs.__docgenInfo={description:`FrilansPerioderFieldArray

Viser inputfelter for fra og til dato for frilansperioder`,methods:[],displayName:"FrilansPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Tg="_notLastRow_7c46s_1",Ag={notLastRow:Tg},mr="frilans",gr=(s,i)=>s(i),qg=(s=[])=>s.map(i=>i.periodeFom).filter(i=>i&&i!=="").sort((i,o)=>gn(i,An).diff(gn(o,An))),ei={fomDato:"",tomDato:"",oppdragsgiver:""},Fg=rt(50),wg=(s,i,o,d)=>()=>{const g=gr(s,`${i}.fomDato`);return o.length>0&&o[0]&&g&&!gn(o[0]).isSameOrBefore(gn(g))?d.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation"}):null},ni=({readOnly:s})=>{const i=H(),{control:o,getValues:d,watch:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:h,append:f}=he({control:o,name:`${mr}.oppdragPerioder`}),j=g(`${mr}.perioder`),F=E.useMemo(()=>qg(j),[j]);return r.jsx(Oe,{bodyText:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),fields:m,emptyPeriodTemplate:ei,readOnly:s,append:f,remove:h,children:(b,w,A)=>{const S=`${mr}.oppdragPerioder.${w}`;return r.jsxs("div",{className:w!==m.length-1?Ag.notLastRow:"",children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(V,{name:`${S}.fomDato`,label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeFom"}),validate:[I,wg(d,S,F,i),()=>{const P=gr(d,`${S}.fomDato`),G=gr(d,`${S}.tomDato`);return G&&P?qe(G)(P):null}],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(V,{name:`${S}.tomDato`,label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeTom"}),validate:[I,()=>{const P=gr(d,`${S}.fomDato`),G=gr(d,`${S}.tomDato`);return G&&P?Se(P)(G):null}],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(le,{name:`${S}.oppdragsgiver`,validate:[Fg],label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver"})})}),A&&r.jsx(T,{children:A()})]})}),r.jsx(y,{sixteenPx:!0})]},b.id)}})};ni.__docgenInfo={description:`FrilansOppdragForFamilieFieldArray

Viser inputfelter for fra og til dato for frilansperioder.`,methods:[],displayName:"FrilansOppdragForFamilieFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const na=({readOnly:s})=>{const{watch:i}=Y(),o=i(`${mr}.harHattOppdragForFamilie`);return r.jsxs(r.Fragment,{children:[r.jsx(U,{name:`${mr}.harHattOppdragForFamilie`,label:r.jsx(c,{id:"Registrering.FrilansOppdrag.HarHattOppdragForFamilie"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.FrilansOppdrag.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.FrilansOppdrag.No"}),value:"false"}]}),o&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.FrilansOppdrag.OppgiPeriode"})}),r.jsx(y,{fourPx:!0}),r.jsx(ni,{readOnly:s})]})]})]})};na.buildInitialValues=()=>({oppdragPerioder:[ei],perioder:void 0});na.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`{
  harHattOppdragForFamilie?: boolean;
} & FieldArrayFormValues`,elements:[{name:"signature",type:"object",raw:`{
  harHattOppdragForFamilie?: boolean;
}`,signature:{properties:[{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]}}}],displayName:"FrilansOppdragForFamiliePanel"};const Ua="frilans",$n=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Frilans.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Ua}.harSokerPeriodeMedFrilans`,label:r.jsx(c,{id:"Registrering.Frilans.HarFrilansvirksomhet"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.Frilans.No"}),value:"false"},{label:r.jsx(c,{id:"Registrering.Frilans.Yes"}),value:"true",element:r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(Xe,{children:r.jsx(c,{id:"Registrering.Frilans.OppgiPeriode"})}),r.jsx(y,{eightPx:!0}),r.jsx(Qs,{readOnly:s}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:`${Ua}.erNyoppstartetFrilanser`,label:r.jsx(c,{id:"Registrering.Frilans.ErNyoppstartedFrilanser"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.Frilans.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.Frilans.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Ua}.harInntektFraFosterhjem`,label:r.jsx(c,{id:"Registrering.Frilans.HarInntektFraForsterhjem"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.Frilans.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.Frilans.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(na,{readOnly:s})]})]})}]})]});$n.buildInitialValues=()=>({...na.buildInitialValues(),perioder:[{periodeFom:"",periodeTom:""}]});$n.transformValues=s=>s.harSokerPeriodeMedFrilans?s:{harSokerPeriodeMedFrilans:s.harSokerPeriodeMedFrilans};$n.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:null}],returns:null}],displayName:"FrilansPanel"};const Pg=re(ue),en=({readOnly:s})=>r.jsx(ke,{value:Pg,children:r.jsx($n,{readOnly:s})});en.buildInitialValues=()=>$n.buildInitialValues();en.transformValues=s=>$n.transformValues(s);en.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:null}],returns:null}],displayName:"FrilansPapirsoknadIndex"};const _g="_notLastRow_uwn16_1",xg={notLastRow:_g},Sg=rt(50),In="arbeidsforhold",Og={arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},Ng=s=>s.filter(({kode:i})=>i!==st.NORGE).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),ri=({alleKodeverk:s,readOnly:i})=>{const o=H(),{control:d}=Y(),{fields:g,remove:k,append:v}=he({control:d,name:In}),m=s[ee.LANDKODER].slice().sort((h,f)=>h.navn.localeCompare(f.navn));return r.jsx(Oe,{fields:g,emptyPeriodTemplate:Og,bodyText:o.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:i,remove:k,append:v,children:(h,f,j)=>r.jsxs("div",{className:f!==g.length-1?xg.notLastRow:"",children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(le,{readOnly:i,name:`${In}.${f}.arbeidsgiver`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}):"",validate:[Sg],maxLength:99})}),r.jsx(T,{children:r.jsx(V,{isReadOnly:i,name:`${In}.${f}.periodeFom`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}):"",validate:[I]})}),r.jsx(T,{children:r.jsx(V,{isReadOnly:i,name:`${In}.${f}.periodeTom`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}):"",validate:[I]})}),r.jsx(T,{children:r.jsx(fe,{readOnly:i,name:`${In}.${f}.land`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}):"",selectValues:Ng(m)})}),j&&r.jsx(T,{children:j()})]})}),r.jsx(y,{twentyPx:!0})]},h.id)})};ri.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ra=({readOnly:s,alleKodeverk:i})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.Title"})}),r.jsx(y,{eightPx:!0}),r.jsx(Xe,{children:r.jsx(c,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{sixteenPx:!0}),r.jsx(Xe,{children:r.jsx(c,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title"})}),r.jsx(y,{eightPx:!0}),r.jsx(ri,{readOnly:s,alleKodeverk:i})]});ra.buildInitialValues=()=>({[In]:[{}]});ra.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPanel"};const Eg=re(ue),Hn=({readOnly:s,alleKodeverk:i})=>r.jsx(ke,{value:Eg,children:r.jsx(ra,{readOnly:s,alleKodeverk:i})});Hn.buildInitialValues=()=>ra.buildInitialValues();Hn.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPapirsoknadIndex"};const Vg="_image_1vy0k_1",Mg={image:Vg},ai=({showModal:s,handleSubmit:i,cancelEvent:o})=>{const d=H();return r.jsxs(Je,{open:s,"aria-label":d.formatMessage({id:"ModalLukkPapirSoknad.ModalDescription"}),onClose:o,children:[r.jsx(Je.Body,{children:r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(Lu,{className:Mg.image,title:d.formatMessage({id:"ModalLukkPapirSoknad.Avslutt"})})}),r.jsxs(T,{children:[r.jsx(me,{size:"small",children:d.formatMessage({id:"ModalLukkPapirSoknad.AvslutterRegistrering"})}),r.jsx(y,{fourPx:!0}),r.jsx($s,{size:"small",children:d.formatMessage({id:"ModalLukkPapirSoknad.BekreftAvslag"})})]})]})})}),r.jsxs(Je.Footer,{children:[r.jsx(Ls,{to:"/",children:r.jsx(Be,{size:"small",variant:"primary",onClick:()=>i(),type:"button",children:d.formatMessage({id:"ModalLukkPapirSoknad.Ok"})})}),r.jsx(Be,{size:"small",variant:"secondary",onClick:o,type:"button",children:d.formatMessage({id:"ModalLukkPapirSoknad.Avbryt"})})]})]})};ai.__docgenInfo={description:`LukkPapirSoknadModal

Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
og trykker på 'Lagre og start behandling'. Ved å trykke på OK blir saken sendt til behandling av avslag.`,methods:[],displayName:"LukkPapirSoknadModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ig="_fullWidth_1omqj_1",Dg="_halfWidth_1omqj_5",us={fullWidth:Ig,halfWidth:Dg},Bg=rt(1500),ti=({submitting:s,onSubmitUfullstendigsoknad:i,readOnly:o=!0})=>{const d=H(),[g,k]=E.useState(!1),{watch:v}=Y(),m=v("ufullstendigSoeknad")||!1,h=E.useCallback(()=>{k(!g)},[k,g]);return r.jsx(oe,{children:r.jsx(Q,{children:r.jsx(L,{children:r.jsxs(T,{className:us.fullWidth,children:[r.jsx(Xe,{children:d.formatMessage({id:"Registrering.SaveApplication.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(L,{children:[r.jsx(T,{className:us.halfWidth,children:r.jsx(Ys,{name:"kommentarEndring",label:d.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[Bg,at],readOnly:o})}),r.jsxs(T,{children:[r.jsx(ie,{name:"registrerVerge",label:d.formatMessage({id:"Registrering.Verge"}),readOnly:o}),r.jsx(ie,{name:"ufullstendigSoeknad",label:d.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:o})]})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsxs(T,{className:"justifyItemsToFlexEnd",children:[!m&&r.jsx(Be,{id:"saveButton",size:"small",variant:"primary",loading:s,disabled:o||s,onClick:Us,children:r.jsx(c,{id:"Registrering.SaveApplication.SaveButton"})}),m&&r.jsx(Be,{id:"endButton",onClick:h,size:"small",variant:"primary",loading:s,disabled:o||s,type:"button",children:r.jsx(c,{id:"Registrering.SaveApplication.EndButton"})})]})}),r.jsx(ai,{handleSubmit:i,showModal:g,cancelEvent:h})]})})})})};ti.__docgenInfo={description:"",methods:[],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Kg=re(ue),aa=({readOnly:s,onSubmitUfullstendigsoknad:i,submitting:o})=>r.jsx(ke,{value:Kg,children:r.jsx(ti,{readOnly:s,onSubmitUfullstendigsoknad:i,submitting:o})});aa.__docgenInfo={description:"",methods:[],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const si=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),r.jsx(y,{sixteenPx:!0}),r.jsx(V,{name:"mottattDato",label:r.jsx(c,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[q,I,Kn],isReadOnly:s})]});si.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"MottattDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Lg=re(ue),ta=({readOnly:s})=>r.jsx(ke,{value:Lg,children:r.jsx(si,{readOnly:s})});ta.__docgenInfo={description:"",methods:[],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Yg="_barnInput_1jjt5_1",Ug="_col_1jjt5_5",$r={barnInput:Yg,col:Ug},$g=10,gs=Ks(1),ms=kr(10),cn="omsorg",ks=(s,i)=>o=>{if(s===0&&i&&o)return Wu(o,Array.isArray(i)?i[0]:i)},sa=({readOnly:s=!0,familieHendelseType:i,isForeldrepengerFagsak:o,fodselsdatoer:d})=>{const{formatMessage:g}=H(),{control:k,watch:v}=Y(),{fields:m,remove:h,append:f}=he({control:k,name:`${cn}.foedselsDato`}),j=v(`${cn}.antallBarn`),F=j?parseInt(j,10):0;return E.useEffect(()=>{if(m.length>Math.max(F,0))for(let b=m.length;b>F;b-=1)h(b-1);else if(m.length<Math.min(F,$g))for(let b=m.length;b<F;b+=1)f({id:b,dato:void 0})},[F]),r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:i===se.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(Q,{children:[o&&i===se.ADOPSJON&&r.jsxs(r.Fragment,{children:[r.jsx(L,{children:r.jsx(T,{className:$r.col,children:r.jsx(U,{name:`${cn}.erEktefellesBarn`,label:r.jsx(c,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Adopsjon.Ja"}),value:"true"},{label:g({id:"Registrering.Adopsjon.Nei"}),value:"false"}]})})}),r.jsx(y,{sixteenPx:!0})]}),r.jsx(L,{children:r.jsx(T,{children:r.jsx(V,{name:`${cn}.omsorgsovertakelsesdato`,label:g({id:i===se.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:s,validate:i===se.ADOPSJON?[q,I]:[I]})})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(L,{children:[i===se.ADOPSJON&&r.jsx(T,{children:r.jsx(V,{name:`${cn}.ankomstdato`,label:g({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:s,validate:[I]})}),r.jsx(T,{className:$r.col,children:r.jsx(le,{name:`${cn}.antallBarn`,label:g({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:s,parse:b=>{const w=parseInt(b.toString(),10);return Number.isNaN(w)?b:w},className:$r.barnInput,validate:i===se.ADOPSJON?[q,un,gs,ms]:[un,b=>b?gs(parseInt(b,10)):void 0,b=>b?ms(parseInt(b,10)):void 0]})})]}),r.jsx(L,{children:r.jsx(T,{className:$r.col,children:m.map((b,w)=>r.jsxs(Zr.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(V,{name:`${cn}.foedselsDato.${w}.dato`,isReadOnly:s,validate:i===se.ADOPSJON?[q,I,Kn,ks(w,d)]:[I,Kn,ks(w,d)],label:g({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:w+1})})]},b.id))})})]})]})};sa.transformValues=s=>({...s,foedselsDato:s.foedselsDato&&s.foedselsDato.length>0?s.foedselsDato.map(i=>i.dato):void 0});sa.__docgenInfo={description:`OmsorgOgAdopsjonPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null}],displayName:"OmsorgOgAdopsjonPanel",props:{readOnly:{defaultValue:{value:"true",computed:!1},required:!1}}};const Hg=re(ue),kn=({readOnly:s,familieHendelseType:i,isForeldrepengerFagsak:o,fodselsdato:d})=>r.jsx(ke,{value:Hg,children:r.jsx(sa,{readOnly:s,familieHendelseType:i,isForeldrepengerFagsak:o,fodselsdatoer:d})});kn.transformValues=sa.transformValues;kn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex"};const Gg="_datesRowWithRemoveButton_od5lu_1",Cg="_selectBredde_od5lu_7",ii={datesRowWithRemoveButton:Gg,selectBredde:Cg},Wg=dg.bind(ii),zg={land:"",periodeFom:"",periodeTom:""},Jr=(s,i)=>s(i),ps=(s,i)=>()=>{const d=s(i).filter(({periodeFom:g,periodeTom:k})=>g&&g!==""&&k&&k!=="").map(({periodeFom:g,periodeTom:k})=>[g,k]);return d.length>0?Yn(d):void 0},Jg=s=>s.filter(({kode:i})=>i!==st.NORGE).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),vs=(s,i,o,d)=>()=>{const g=Jr(s,`${i}.${o}.periodeFom`),k=Jr(s,`${i}.${o}.periodeTom`);return!k||!g?null:d?qe(k)(g):Se(g)(k)},za=({erTidligereOpphold:s,mottattDato:i,readOnly:o,countryCodes:d})=>{const g=H(),k=s?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:v,getValues:m,trigger:h,formState:{isSubmitted:f}}=Y(),{fields:j,remove:F,append:b}=he({control:v,name:k}),w=E.useMemo(()=>Jg(d),[d]);return r.jsx(Oe,{fields:j,titleText:g.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:g.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:zg,createAddButtonInsteadOfImageLink:!0,readOnly:o,remove:F,append:b,children:(A,S,P)=>r.jsxs(Zr.Fragment,{children:[S>0&&r.jsxs(r.Fragment,{children:[r.jsx(nt,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsx(fe,{name:`${k}.${S}.land`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:w,className:ii.selectBredde,readOnly:o,validate:[q]}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{className:Wg({datesRowWithRemoveButton:S>0}),children:[r.jsx(T,{children:r.jsx(V,{name:`${k}.${S}.periodeFom`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:o,validate:[q,I,vs(m,k,S,!0),()=>{const G=Jr(m,`${k}.${S}.periodeFom`);return s?qe(gn().format(An))(G):i?Se(i)(G):void 0},ps(m,k)],onChange:()=>f?h():void 0})}),r.jsx(T,{children:r.jsx(V,{name:`${k}.${S}.periodeTom`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:o,validate:[q,I,vs(m,k,S,!1),()=>{const G=Jr(m,`${k}.${S}.periodeTom`);return s?qe(gn().format(An))(G):i?Se(i)(G):void 0},ps(m,k)],onChange:()=>f?h():void 0})}),P&&r.jsx(T,{children:P()})]})}),r.jsx(y,{sixteenPx:!0})]},A.id)})};za.__docgenInfo={description:`UtenlandsOppholdField

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Gn=({readOnly:s=!0,alleKodeverk:i,mottattDato:o,erAdopsjon:d})=>{const{formatMessage:g}=H(),k=E.useMemo(()=>i[ee.LANDKODER].slice().sort((f,j)=>f.navn.localeCompare(j.navn)),[i]),{watch:v}=Y(),m=v("harTidligereOppholdUtenlands")||!1,h=v("harFremtidigeOppholdUtenlands")||!1;return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Opphold"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"oppholdINorge",label:r.jsx(c,{id:d?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"true"},{label:g({id:"Registrering.Opphold.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"harTidligereOppholdUtenlands",label:r.jsx(c,{id:"Registrering.OppholdSisteTolv"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"false"},{label:g({id:"Registrering.Opphold.No"}),value:"true"}]}),m?r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsx(za,{erTidligereOpphold:!0,mottattDato:o,countryCodes:k,readOnly:s})})]}):null,r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"harFremtidigeOppholdUtenlands",label:r.jsx(c,{id:"Registrering.OppholdNesteTolv"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"false"},{label:g({id:"Registrering.Opphold.No"}),value:"true"}]}),h?r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsx(za,{erTidligereOpphold:!1,mottattDato:o,countryCodes:k,readOnly:s})})]}):null]})};Gn.buildInitialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});Gn.transformValues=s=>({...s,fremtidigeOppholdUtenlands:s.harFremtidigeOppholdUtenlands?s.fremtidigeOppholdUtenlands:void 0,tidligereOppholdUtenlands:s.harTidligereOppholdUtenlands?s.tidligereOppholdUtenlands:void 0});Gn.__docgenInfo={description:`OppholdINorgePanel

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
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePanel",props:{readOnly:{defaultValue:{value:"true",computed:!1},required:!1}}};const Xg=re(ue),ye=({readOnly:s,erAdopsjon:i,alleKodeverk:o,mottattDato:d})=>r.jsx(ke,{value:Xg,children:r.jsx(Gn,{readOnly:s,erAdopsjon:i,alleKodeverk:o,mottattDato:d})});ye.buildInitialValues=Gn.buildInitialValues;ye.transformValues=Gn.transformValues;ye.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePapirsoknadIndex"};const Dn={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},li=({readOnly:s=!0,soknadData:i})=>{const o=H(),d=[{label:o.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:Dn.ANNEN_FORELDER_DOED},{label:o.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:Dn.OVERTA_FORELDREANSVARET_ALENE},{label:o.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:Dn.MANN_ADOPTERER_ALENE},{label:o.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:Dn.IKKE_RELEVANT}];return i.getFamilieHendelseType()!==se.FODSEL&&i.getForeldreType()===Ln.FAR||d.splice(2,1),r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:o.formatMessage({id:"Registrering.Rettigheter.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"rettigheter",isReadOnly:s,radios:d})]})};li.__docgenInfo={description:`RettigheterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"RettigheterPanel",props:{soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Zg=re(ue),ia=({readOnly:s,soknadData:i})=>r.jsx(ke,{value:Zg,children:r.jsx(li,{readOnly:s,soknadData:i})});ia.__docgenInfo={description:"",methods:[],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const $a={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},oi=({readOnly:s})=>{const i=H();return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:i.formatMessage({id:"Registrering.Sprak"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"språkkode",validate:[q],isReadOnly:s,radios:[{label:i.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:$a.BOKMAL},{label:i.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:$a.NYNORSK},{label:i.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:$a.ENGELSK}]})]})};oi.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",methods:[],displayName:"SprakPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Qg=re(ue),fr=({readOnly:s})=>r.jsx(ke,{value:Qg,children:r.jsx(oi,{readOnly:s})});fr.__docgenInfo={description:"",methods:[],displayName:"SprakPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const em="_navnBredde_1kwjo_1",nm="_orgNrBredde_1kwjo_5",rm="_landBredde_1kwjo_9",Ha={navnBredde:em,orgNrBredde:nm,landBredde:rm},am=s=>s.map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),di=({readOnly:s=!0,alleKodeverk:i})=>{const o=H(),d=i[ee.LANDKODER].slice().sort((m,h)=>m.navn.localeCompare(h.navn)),{watch:g,getValues:k}=Y(),v=g("virksomhetRegistrertINorge");return r.jsxs(r.Fragment,{children:[r.jsx(le,{name:"navn",validate:[q],label:r.jsx(c,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),className:Ha.navnBredde,readOnly:s}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"virksomhetRegistrertINorge",label:r.jsx(c,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.No"}),value:"false"}]}),v&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx("div",{className:Ha.orgNrBredde,children:r.jsx(de,{children:r.jsx(le,{name:"organisasjonsnummer",readOnly:s,validate:[q,un,zu],label:r.jsx(c,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})})}),r.jsx(y,{sixteenPx:!0})]}),!v&&v!==void 0&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{alignOffset:57,children:[r.jsx(fe,{name:"landJobberFra",className:Ha.landBredde,selectValues:am(d),validate:[q],label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(V,{isReadOnly:s,validate:[q,I,Kn],name:"fom",label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})})}),r.jsx(T,{children:r.jsx(V,{isReadOnly:s,validate:[I,m=>{const h=k("fom");return h?Ju(h,m):null}],name:"tom",label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})})]})})]})]})]})};di.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const tm="_tlfBredde_nvz63_1",sm="_navnBredde_nvz63_5",ys={tlfBredde:tm,navnBredde:sm},ui=({readOnly:s=!0})=>{const{watch:i}=Y(),o=i("harRegnskapsforer")||!1;return r.jsxs(r.Fragment,{children:[r.jsx(U,{name:"harRegnskapsforer",label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.No"}),value:"false"}]}),o&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(le,{name:"navnRegnskapsforer",className:ys.navnBredde,readOnly:s,validate:[q,at],label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:"tlfRegnskapsforer",readOnly:s,validate:[q,un],className:ys.tlfBredde,label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]}),r.jsx(y,{sixteenPx:!0})]})]})};ui.__docgenInfo={description:`VirksomhetRegnskapPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const im="_inntektBredde_1xgnj_1",lm={inntektBredde:im},gi=({readOnly:s})=>{var F,b,w,A;const i=H(),{watch:o,setError:d,clearErrors:g,formState:k}=Y(),v=o("varigEndretEllerStartetSisteFireAr")||!1,m=o("harVarigEndring")||!1,h=o("erNyoppstartet")||!1,f=o("erNyIArbeidslivet")||!1,j=!m&&!h&&!f;return E.useEffect(()=>{j&&v&&d("ingenArsakValgt",{type:"custom",message:i.formatMessage({id:"Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak"})}),(!j||!v)&&g("ingenArsakValgt")},[j,v]),r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"varigEndretEllerStartetSisteFireAr",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.No"}),value:"false"}]}),v&&r.jsxs("div",{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:"harVarigEndring",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"})}),r.jsx(y,{fourPx:!0}),m&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(de,{children:r.jsx(V,{name:"varigEndringGjeldendeFom",isReadOnly:s,validate:[I,q],label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),r.jsx(ie,{name:"erNyoppstartet",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})}),r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:"erNyIArbeidslivet",label:r.jsx(c,{id:"Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet"})}),r.jsx(y,{fourPx:!0}),f&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(de,{children:r.jsx(V,{name:"nyIArbeidslivetFom",isReadOnly:s,validate:[I,q],label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),k.isSubmitted&&((b=(F=k.errors)==null?void 0:F.ingenArsakValgt)==null?void 0:b.message)&&r.jsx(yr,{children:(A=(w=k.errors)==null?void 0:w.ingenArsakValgt)==null?void 0:A.message}),r.jsx(y,{sixteenPx:!0}),r.jsx(Ys,{name:"beskrivelseAvEndring",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[at]}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:"inntekt",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:s,validate:[un,q],className:lm.inntektBredde,parse:S=>{const P=parseInt(S.toString(),10);return Number.isNaN(P)?S:P}})]})]}),r.jsx(y,{eightPx:!0})]})};gi.__docgenInfo={description:`VirksomhetStartetEndretPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const mi=({readOnly:s=!0})=>r.jsx(U,{name:"familieEllerVennerTilknyttetNaringen",label:r.jsx(c,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),isReadOnly:s,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.VirksomhetRelasjonPanel.No"}),value:"false"}]});mi.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const fs="typeVirksomhet",hs={[ur.DAGMAMMA]:1,[ur.FISKE]:2,[ur.JORDBRUK_ELLER_SKOGBRUK]:3,[ur.ANNEN]:4},om=(s,i)=>s>i?1:s<i?-1:0,ki=({readOnly:s,alleKodeverk:i})=>{var j,F;const o=i[ee.VIRKSOMHET_TYPE],d=E.useMemo(()=>o.filter(b=>b.kode!==ur.FRILANSER).sort((b,w)=>om(hs[b.kode],hs[w.kode])),[]),{watch:g,setError:k,formState:v,clearErrors:m}=Y(),h=g(fs),f=!h||!Object.values(h).some(b=>b===!0);return E.useEffect(()=>{f&&k("notRegisteredInput",{type:"custom",message:Xu()}),f||m("notRegisteredInput")},[f]),r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.VirksomhetNaeringTypePanel.Title"})}),r.jsx(y,{fourPx:!0}),d.map(b=>r.jsxs(E.Fragment,{children:[r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:`${fs}.${b.kode}`,label:b.navn,readOnly:s},b.kode)]},b.kode)),v.isSubmitted&&((j=v.errors.notRegisteredInput)==null?void 0:j.message)&&r.jsx(yr,{children:(F=v.errors.notRegisteredInput)==null?void 0:F.message})]})};ki.__docgenInfo={description:`VirksomhetTypeNaringPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const dm="_savebutton_tgfg3_1",um="_cancelbutton_tgfg3_1",gm="_form_tgfg3_5",cs={savebutton:dm,cancelbutton:um,form:gm},pi=({showModal:s=!1,readOnly:i=!1,closeEvent:o,onSubmit:d,alleKodeverk:g,virksomhet:k})=>{const v=H(),m=pr({defaultValues:k});return r.jsx(vr,{formMethods:m,children:r.jsxs(Je,{open:s,"aria-label":v.formatMessage({id:"Registrering.RegistrerVirksomhetModalForm.ModalDescription"}),onClose:o,children:[r.jsx(Je.Header,{children:r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.RegistrerVirksomhetModalForm.Title"})})}),r.jsxs(Je.Body,{children:[r.jsx(di,{readOnly:i,alleKodeverk:g}),r.jsx(ki,{readOnly:i,alleKodeverk:g}),r.jsx(gi,{readOnly:i}),r.jsx(ui,{readOnly:i}),r.jsx(y,{sixteenPx:!0}),r.jsx(mi,{readOnly:i}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(Je.Footer,{children:[r.jsx(Be,{size:"small",variant:"primary",onClick:m.handleSubmit(d),disabled:i,className:cs.savebutton,type:"button",children:r.jsx(c,{id:"Registrering.RegistrerVirksomhetModalForm.Save"})}),r.jsx(Be,{size:"small",variant:"secondary",onClick:o,disabled:i,className:cs.cancelbutton,type:"button",children:r.jsx(c,{id:"Registrering.RegistrerVirksomhetModalForm.Cancel"})})]})]})})};pi.__docgenInfo={description:`RegistrerVirksomhetModalForm

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
TypeNaringFormValues`,elements:[{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"}]},description:""}}};const mm="_divider_1ed8l_1",km="_fieldsList_1ed8l_7",pm="_addCircleIcon_1ed8l_11",vm="_imageText_1ed8l_12",ym="_customLink_1ed8l_17",fm="_removeButton_1ed8l_22",bn={divider:mm,fieldsList:km,addCircleIcon:pm,imageText:vm,customLink:ym,removeButton:fm},Rn="egenVirksomhet",vi=({readOnly:s=!1,alleKodeverk:i})=>{var P,G,Ne,X;const o=H(),[d,g]=E.useState(),{control:k,setError:v,formState:m,clearErrors:h}=Y(),{fields:f,remove:j,append:F,update:b}=he({control:k,name:`${Rn}.virksomheter`}),w=E.useCallback(J=>{g(J!==void 0?J:-1)},[g]),A=E.useCallback(()=>{g(void 0)},[g]),S=E.useCallback(J=>{const ae={...J,landJobberFra:J.virksomhetRegistrertINorge?"NOR":J.landJobberFra,varigEndringGjeldendeFom:J.nyIArbeidslivetFom||J.varigEndringGjeldendeFom};d===-1?F(ae):d!==void 0&&b(d,ae),A()},[F,b,A,d]);return E.useEffect(()=>{f.length===0&&v(`${Rn}.notRegisteredInput`,{type:"custom",message:o.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}),f.length>0&&h(`${Rn}.notRegisteredInput`)},[f.length]),r.jsxs("div",{className:bn.fieldsList,children:[f.length>0&&r.jsxs(Zr.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),r.jsx("hr",{className:bn.divider}),f.map((J,ae)=>r.jsxs(Q,{children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(is,{className:bn.customLink,onClick:()=>w(ae),onKeyDown:()=>w(ae),children:r.jsx($s,{size:"small",children:J.navn})})}),r.jsx(T,{children:r.jsx(Hs,{className:bn.removeButton,onClick:()=>j(ae),onKeyDown:()=>j(ae)})})]}),r.jsx("hr",{className:bn.divider}),r.jsx(y,{eightPx:!0})]},J.id))]},1),r.jsxs(is,{onClick:()=>w(),onKeyDown:J=>J.nativeEvent.code==="Space"?w():!1,children:[r.jsx(Zu,{className:bn.addCircleIcon}),r.jsx(Xe,{className:bn.imageText,children:r.jsx(c,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})]}),m.isSubmitted&&((G=(P=m.errors[Rn])==null?void 0:P.notRegisteredInput)==null?void 0:G.message)&&r.jsx(yr,{children:(X=(Ne=m.errors[Rn])==null?void 0:Ne.notRegisteredInput)==null?void 0:X.message}),d!==void 0&&r.jsx(pi,{showModal:!0,virksomhet:d!==-1&&f.length>d?f[d]:void 0,onSubmit:S,closeEvent:A,readOnly:s,alleKodeverk:i})]})};vi.__docgenInfo={description:`RegistrererVirksomhetPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const yi=({readOnly:s=!0,alleKodeverk:i})=>{const o=H(),{watch:d}=Y(),g=d(`${Rn}.harArbeidetIEgenVirksomhet`)||null;return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.EgenVirksomhet.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Rn}.harArbeidetIEgenVirksomhet`,validate:[q],isReadOnly:s,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:o.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),g&&r.jsx(vi,{readOnly:s,alleKodeverk:i})]})};yi.__docgenInfo={description:`EgenVirksomhetPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const hm=re(ue),ot=({readOnly:s,alleKodeverk:i})=>r.jsx(ke,{value:hm,children:r.jsx(yi,{readOnly:s,alleKodeverk:i})});ot.__docgenInfo={description:"",methods:[],displayName:"VirksomhetPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Ga=re(ue),fi=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:Ga.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"dekningsgrad",validate:[q],isReadOnly:s,isHorizontal:!0,radios:[{label:Ga.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:Ga.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]});fi.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Hr=re(ue),hi=({readOnly:s,annenForelderInformertRequired:i=!1})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:Hr.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Xe,{children:Hr.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})}),r.jsx(y,{eightPx:!0}),r.jsx(U,{name:"annenForelderInformert",validate:i?[q]:[],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:Hr.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:Hr.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})]});hi.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const jn="annenForelder",ci=({readOnly:s,sokerErMor:i})=>{const o=H(),{watch:d}=Y(),g=d(`${jn}.sokerHarAleneomsorg`),k=d(`${jn}.denAndreForelderenHarRettPaForeldrepenger`),v=d(`${jn}.annenForelderRettEØS`);return r.jsxs(lg,{gap:"4",children:[r.jsx(U,{name:`${jn}.sokerHarAleneomsorg`,label:o.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg.No"}),value:"false"}]}),g===!1&&r.jsx(U,{name:`${jn}.denAndreForelderenHarRettPaForeldrepenger`,label:o.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger.No"}),value:"false"}]}),g===!1&&k===!1&&r.jsx(U,{name:`${jn}.annenForelderRettEØS`,label:o.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS.No"}),value:"false"}]}),!i&&g===!1&&k===!1&&v===!1&&r.jsx(U,{name:`${jn}.morMottarUføretrygd`,label:o.formatMessage({id:"Registrering.Permisjon.MorUføretrygd"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.MorUføretrygd.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.MorUføretrygd.No"}),value:"false"}]})]})};ci.__docgenInfo={description:"",methods:[],displayName:"PermisjonRettigheterPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},denAndreForelderenHarRettPaForeldrepenger:{required:!1,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const cm="_buttonRemove_n1u93_1",bm="_buttonRemoveFirst_n1u93_9",jm="_notLastRow_n1u93_17",Rm="_skjulOverskrift_n1u93_21",Tm="_visOverskrift_n1u93_25",Am="_smalHeader_n1u93_29",qm="_alignSamtidigUttak_n1u93_33",Fm="_selectFieldWidth_n1u93_37",tn={buttonRemove:cm,buttonRemoveFirst:bm,notLastRow:jm,skjulOverskrift:Rm,visOverskrift:Tm,smalHeader:Am,alignSamtidigUttak:qm,selectFieldWidth:Fm},wm=kr(100),Bn="tidsromPermisjon",De="permisjonsPerioder",dt=[ln.FELLESPERIODE,ln.FEDREKVOTE,ln.FORELDREPENGER_FOR_FODSEL,ln.FORELDREPENGER,ln.MODREKVOTE],Pm=s=>s.filter(({kode:i})=>dt.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),_m=s=>s.map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),bi=[ln.FEDREKVOTE,ln.FORELDREPENGER_FOR_FODSEL,ln.MODREKVOTE],Gr=(s,i)=>s?i:"",xm=s=>!!s&&gn(s,An).isBefore(gn("2019-01-01")),bs=s=>()=>{const o=s(`${Bn}.${De}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return Yn(o)},js=(s,i,o)=>()=>{const d=s(`${Bn}.${De}.${i}.periodeFom`),g=s(`${Bn}.${De}.${i}.periodeTom`);return!g||!d?null:o?qe(g)(d):Se(d)(g)},la=({sokerErMor:s,readOnly:i,alleKodeverk:o})=>{const d=H(),g=o[ee.UTTAK_PERIODE_TYPE],k=o[ee.MORS_AKTIVITET];k.filter(({kode:A})=>A==="-").length===0&&k.unshift({kode:"-",navn:"",kodeverk:""});const{control:v,getValues:m,trigger:h,watch:f,formState:{isSubmitted:j}}=Y(),{fields:F,remove:b,append:w}=he({control:v,name:`${Bn}.${De}`});return E.useEffect(()=>{F.length===0&&w({})},[]),r.jsx(Oe,{readOnly:i,fields:F,bodyText:d.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),emptyPeriodTemplate:{},append:w,remove:b,children:(A,S)=>{const P=S===0,G=f(`${Bn}.${De}.${S}`),Ne=xm(G.periodeFom),X=P?tn.visOverskrift:tn.skjulOverskrift,J=bi.includes(G.periodeType)||G.periodeType==="",ae=`${Bn}.${De}.${S}`;return r.jsxs("div",{children:[r.jsxs(Q,{children:[r.jsxs(L,{wrap:!0,children:[r.jsx(T,{className:tn.selectFieldWidth,children:r.jsx(fe,{readOnly:i,name:`${ae}.periodeType`,label:Gr(P,d.formatMessage({id:"Registrering.Permisjon.periodeType"})),selectValues:Pm(g),validate:[q]})}),r.jsx(T,{children:r.jsx(V,{isReadOnly:i,name:`${ae}.periodeFom`,label:Gr(P,d.formatMessage({id:"Registrering.Permisjon.periodeFom"})),validate:[q,I,js(m,S,!0),bs(m)],onChange:()=>j?h():void 0})}),r.jsx(T,{children:r.jsx(V,{isReadOnly:i,name:`${ae}.periodeTom`,label:Gr(P,d.formatMessage({id:"Registrering.Permisjon.periodeTom"})),validate:[q,I,js(m,S,!1),bs(m)],onChange:()=>j?h():void 0})}),!s&&r.jsx(T,{children:r.jsx(fe,{readOnly:i,disabled:J,name:`${ae}.morsAktivitet`,label:Gr(P,d.formatMessage({id:"Registrering.Permisjon.Fellesperiode.morsAktivitet"})),selectValues:_m(k),hideValueOnDisable:!0})}),r.jsxs(T,{className:tn.smalHeader,children:[r.jsx(me,{size:"small",className:X,children:r.jsx(c,{id:"Registrering.Permisjon.Flerbarnsdager"})}),r.jsx(ie,{readOnly:i,name:`${ae}.flerbarnsdager`,label:" "})]}),r.jsxs(T,{className:tn.smalHeader,children:[r.jsx(me,{size:"small",className:X,children:r.jsx(c,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),r.jsx(ie,{readOnly:i,name:`${ae}.harSamtidigUttak`,label:" "})]}),G.harSamtidigUttak&&r.jsx(T,{className:P?"":tn.alignSamtidigUttak,children:r.jsx(le,{name:`${ae}.samtidigUttaksprosent`,validate:[Wa,wm],label:d.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"}),normalizeOnBlur:pn=>Number.isNaN(pn)?pn:parseFloat(pn.toString()).toFixed(2)})}),r.jsx(T,{children:!i&&r.jsx(Be,{className:P?tn.buttonRemoveFirst:tn.buttonRemove,type:"button",variant:"tertiary-neutral",icon:r.jsx(Hs,{}),onClick:()=>{b(S)}})})]}),Ne&&r.jsxs(r.Fragment,{children:[r.jsx(L,{wrap:!0,children:r.jsx(Qr,{size:"small",variant:"warning",children:r.jsx(c,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})}),r.jsx(y,{sixteenPx:!0})]})]}),r.jsx(y,{eightPx:!0})]},A.id)}})};la.transformValues=s=>s.map(i=>bi.includes(i.periodeType)?{periodeType:i.periodeType,periodeFom:i.periodeFom,periodeTom:i.periodeTom,flerbarnsdager:i.flerbarnsdager?i.flerbarnsdager:!1,harSamtidigUttak:i.harSamtidigUttak?i.harSamtidigUttak:!1,samtidigUttaksprosent:i.samtidigUttaksprosent}:{periodeType:i.periodeType,periodeFom:i.periodeFom,periodeTom:i.periodeTom,morsAktivitet:i.morsAktivitet,flerbarnsdager:i.flerbarnsdager?i.flerbarnsdager:!1,harSamtidigUttak:i.harSamtidigUttak?i.harSamtidigUttak:!1,samtidigUttaksprosent:i.samtidigUttaksprosent});la.__docgenInfo={description:`RenderPermisjonPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av perioder med permijon.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"FormValues[]"}}],returns:null}],displayName:"RenderPermisjonPeriodeFieldArray"};const Sm="_notLastRow_pe2tr_1",Om={notLastRow:Sm},on="tidsromPermisjon",dn="utsettelsePeriode",Rs={periodeFom:"",periodeTom:"",arsakForUtsettelse:""},Ts=s=>()=>{const o=s(`${on}.${dn}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},As=(s,i,o)=>()=>{const d=s(`${on}.${dn}.${i}.periodeFom`),g=s(`${on}.${dn}.${i}.periodeTom`);return!g&&!d?null:o?qe(g)(d):Se(d)(g)},Nm=s=>s.map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Em=s=>s.filter(({kode:i})=>dt.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),ji=({utsettelseReasons:s,utsettelseKvoter:i,readOnly:o})=>{const d=H(),{control:g,getValues:k,trigger:v,formState:{isSubmitted:m}}=Y(),{fields:h,remove:f,append:j}=he({control:g,name:`${on}.${dn}`});E.useEffect(()=>{h.length===0&&j(Rs)},[]);const F=E.useCallback(()=>m?v():void 0,[m,v]),b=`${on}.${dn}`;return r.jsx(Oe,{fields:h,emptyPeriodTemplate:Rs,bodyText:d.formatMessage({id:"Registrering.Permisjon.Utsettelse.LeggTilPeriode"}),readOnly:o,append:j,remove:f,children:(w,A,S)=>r.jsxs("div",{className:A!==h.length-1?Om.notLastRow:"",children:[A>0&&r.jsxs(r.Fragment,{children:[r.jsx(nt,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(Q,{wrap:!0,children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{name:`${b}.${A}.periodeForUtsettelse`,label:A===0?d.formatMessage({id:"Registrering.Permisjon.Utsettelse.Periode"}):"",selectValues:Em(i),validate:[q]})}),r.jsx(T,{children:r.jsx(V,{name:`${b}.${A}.periodeFom`,label:A===0?d.formatMessage({id:"Registrering.Permisjon.periodeFom"}):"",validate:[q,I,As(k,A,!0),Ts(k)],onChange:F})}),r.jsx(T,{children:r.jsx(V,{name:`${b}.${A}.periodeTom`,label:A===0?d.formatMessage({id:"Registrering.Permisjon.periodeTom"}):"",validate:[q,I,As(k,A,!1),Ts(k)],onChange:F})}),r.jsx(T,{children:r.jsx(fe,{name:`${b}.${A}.arsakForUtsettelse`,label:A===0?d.formatMessage({id:"Registrering.Permisjon.Utsettelse.Arsak"}):"",selectValues:Nm(s),validate:[q],onChange:F})})]}),r.jsx(y,{eightPx:!0}),r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{label:A===0?d.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}):"",name:`${b}.${A}.erArbeidstaker`,selectValues:[r.jsx("option",{value:"true",children:d.formatMessage({id:"Registrering.Permisjon.ErArbeidstaker"})},"true"),r.jsx("option",{value:"false",children:d.formatMessage({id:"Registrering.Permisjon.ErIkkeArbeidstaker"})},"false")],validate:[P=>k(`${on}.${dn}.${A}.arsakForUtsettelse`)==="ARBEID"?q(P):void 0]})}),S&&r.jsx(T,{children:S()})]})]})]},w.id)})};ji.__docgenInfo={description:`RenderUtsettelsePeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const oa=({readOnly:s,alleKodeverk:i})=>{const o=i[ee.UTSETTELSE_AARSAK_TYPE],d=i[ee.UTTAK_PERIODE_TYPE],{watch:g}=Y(),k=g(`${on}.skalUtsette`)||!1;return r.jsxs(r.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Utsettelse.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${on}.skalUtsette`,label:r.jsx(c,{id:"Registrering.Permisjon.Utsettelse.UtsettUttaket"})}),k&&r.jsx(ji,{utsettelseReasons:o,utsettelseKvoter:d,readOnly:s})]})};oa.buildInitialValues=()=>({[dn]:[{}],skalUtsette:!1});oa.__docgenInfo={description:`PermisjonUtsettelsePanel

Viser panel for utsettelse
Komponenten har inputfelter og må derfor rendres som etterkommer av form komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonUtsettelsePanel"};var Ri={exports:{}};(function(s,i){(function(o,d){s.exports=d()})(Bu,function(){var o;function d(){return o.apply(null,arguments)}function g(e){o=e}function k(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function v(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function m(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function h(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(m(e,n))return!1;return!0}function f(e){return e===void 0}function j(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function F(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function b(e,n){var a=[],t,l=e.length;for(t=0;t<l;++t)a.push(n(e[t],t));return a}function w(e,n){for(var a in n)m(n,a)&&(e[a]=n[a]);return m(n,"toString")&&(e.toString=n.toString),m(n,"valueOf")&&(e.valueOf=n.valueOf),e}function A(e,n,a,t){return Mt(e,n,a,t,!0).utc()}function S(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function P(e){return e._pf==null&&(e._pf=S()),e._pf}var G;Array.prototype.some?G=Array.prototype.some:G=function(e){var n=Object(this),a=n.length>>>0,t;for(t=0;t<a;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};function Ne(e){var n=null,a=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(n=P(e),a=G.call(n.parsedDateParts,function(l){return l!=null}),t=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&a),e._strict&&(t=t&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function X(e){var n=A(NaN);return e!=null?w(P(n),e):P(n).userInvalidated=!0,n}var J=d.momentProperties=[],ae=!1;function pn(e,n){var a,t,l,u=J.length;if(f(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),f(n._i)||(e._i=n._i),f(n._f)||(e._f=n._f),f(n._l)||(e._l=n._l),f(n._strict)||(e._strict=n._strict),f(n._tzm)||(e._tzm=n._tzm),f(n._isUTC)||(e._isUTC=n._isUTC),f(n._offset)||(e._offset=n._offset),f(n._pf)||(e._pf=P(n)),f(n._locale)||(e._locale=n._locale),u>0)for(a=0;a<u;a++)t=J[a],l=n[t],f(l)||(e[t]=l);return e}function Zn(e){pn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ae===!1&&(ae=!0,d.updateOffset(this),ae=!1)}function Fe(e){return e instanceof Zn||e!=null&&e._isAMomentObject!=null}function gt(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function je(e,n){var a=!0;return w(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),a){var t=[],l,u,p,_=arguments.length;for(u=0;u<_;u++){if(l="",typeof arguments[u]=="object"){l+=`
[`+u+"] ";for(p in arguments[0])m(arguments[0],p)&&(l+=p+": "+arguments[0][p]+", ");l=l.slice(0,-2)}else l=arguments[u];t.push(l)}gt(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),a=!1}return n.apply(this,arguments)},n)}var mt={};function kt(e,n){d.deprecationHandler!=null&&d.deprecationHandler(e,n),mt[e]||(gt(n),mt[e]=!0)}d.suppressDeprecationWarnings=!1,d.deprecationHandler=null;function Ee(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Di(e){var n,a;for(a in e)m(e,a)&&(n=e[a],Ee(n)?this[a]=n:this["_"+a]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function ma(e,n){var a=w({},e),t;for(t in n)m(n,t)&&(v(e[t])&&v(n[t])?(a[t]={},w(a[t],e[t]),w(a[t],n[t])):n[t]!=null?a[t]=n[t]:delete a[t]);for(t in e)m(e,t)&&!m(n,t)&&v(e[t])&&(a[t]=w({},a[t]));return a}function ka(e){e!=null&&this.set(e)}var pa;Object.keys?pa=Object.keys:pa=function(e){var n,a=[];for(n in e)m(e,n)&&a.push(n);return a};var Bi={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Ki(e,n,a){var t=this._calendar[e]||this._calendar.sameElse;return Ee(t)?t.call(n,a):t}function Ve(e,n,a){var t=""+Math.abs(e),l=n-t.length,u=e>=0;return(u?a?"+":"":"-")+Math.pow(10,Math.max(0,l)).toString().substr(1)+t}var va=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,hr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ya={},qn={};function O(e,n,a,t){var l=t;typeof t=="string"&&(l=function(){return this[t]()}),e&&(qn[e]=l),n&&(qn[n[0]]=function(){return Ve(l.apply(this,arguments),n[1],n[2])}),a&&(qn[a]=function(){return this.localeData().ordinal(l.apply(this,arguments),e)})}function Li(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Yi(e){var n=e.match(va),a,t;for(a=0,t=n.length;a<t;a++)qn[n[a]]?n[a]=qn[n[a]]:n[a]=Li(n[a]);return function(l){var u="",p;for(p=0;p<t;p++)u+=Ee(n[p])?n[p].call(l,e):n[p];return u}}function cr(e,n){return e.isValid()?(n=pt(n,e.localeData()),ya[n]=ya[n]||Yi(n),ya[n](e)):e.localeData().invalidDate()}function pt(e,n){var a=5;function t(l){return n.longDateFormat(l)||l}for(hr.lastIndex=0;a>=0&&hr.test(e);)e=e.replace(hr,t),hr.lastIndex=0,a-=1;return e}var Ui={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function $i(e){var n=this._longDateFormat[e],a=this._longDateFormat[e.toUpperCase()];return n||!a?n:(this._longDateFormat[e]=a.match(va).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var Hi="Invalid date";function Gi(){return this._invalidDate}var Ci="%d",Wi=/\d{1,2}/;function zi(e){return this._ordinal.replace("%d",e)}var Ji={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Xi(e,n,a,t){var l=this._relativeTime[a];return Ee(l)?l(e,n,a,t):l.replace(/%d/i,e)}function Zi(e,n){var a=this._relativeTime[e>0?"future":"past"];return Ee(a)?a(n):a.replace(/%s/i,n)}var vt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Re(e){return typeof e=="string"?vt[e]||vt[e.toLowerCase()]:void 0}function fa(e){var n={},a,t;for(t in e)m(e,t)&&(a=Re(t),a&&(n[a]=e[t]));return n}var Qi={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function el(e){var n=[],a;for(a in e)m(e,a)&&n.push({unit:a,priority:Qi[a]});return n.sort(function(t,l){return t.priority-l.priority}),n}var yt=/\d/,ce=/\d\d/,ft=/\d{3}/,ha=/\d{4}/,br=/[+-]?\d{6}/,C=/\d\d?/,ht=/\d\d\d\d?/,ct=/\d\d\d\d\d\d?/,jr=/\d{1,3}/,ca=/\d{1,4}/,Rr=/[+-]?\d{1,6}/,Fn=/\d+/,Tr=/[+-]?\d+/,nl=/Z|[+-]\d\d:?\d\d/gi,Ar=/Z|[+-]\d\d(?::?\d\d)?/gi,rl=/[+-]?\d+(\.\d{1,3})?/,Qn=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,wn=/^[1-9]\d?/,ba=/^([1-9]\d|\d)/,qr;qr={};function x(e,n,a){qr[e]=Ee(n)?n:function(t,l){return t&&a?a:n}}function al(e,n){return m(qr,e)?qr[e](n._strict,n._locale):new RegExp(tl(e))}function tl(e){return Ke(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,a,t,l,u){return a||t||l||u}))}function Ke(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Te(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function M(e){var n=+e,a=0;return n!==0&&isFinite(n)&&(a=Te(n)),a}var ja={};function $(e,n){var a,t=n,l;for(typeof e=="string"&&(e=[e]),j(n)&&(t=function(u,p){p[n]=M(u)}),l=e.length,a=0;a<l;a++)ja[e[a]]=t}function er(e,n){$(e,function(a,t,l,u){l._w=l._w||{},n(a,l._w,l,u)})}function sl(e,n,a){n!=null&&m(ja,e)&&ja[e](n,a._a,a,e)}function Fr(e){return e%4===0&&e%100!==0||e%400===0}var ge=0,Le=1,Me=2,te=3,we=4,Ye=5,vn=6,il=7,ll=8;O("Y",0,0,function(){var e=this.year();return e<=9999?Ve(e,4):"+"+e}),O(0,["YY",2],0,function(){return this.year()%100}),O(0,["YYYY",4],0,"year"),O(0,["YYYYY",5],0,"year"),O(0,["YYYYYY",6,!0],0,"year"),x("Y",Tr),x("YY",C,ce),x("YYYY",ca,ha),x("YYYYY",Rr,br),x("YYYYYY",Rr,br),$(["YYYYY","YYYYYY"],ge),$("YYYY",function(e,n){n[ge]=e.length===2?d.parseTwoDigitYear(e):M(e)}),$("YY",function(e,n){n[ge]=d.parseTwoDigitYear(e)}),$("Y",function(e,n){n[ge]=parseInt(e,10)});function nr(e){return Fr(e)?366:365}d.parseTwoDigitYear=function(e){return M(e)+(M(e)>68?1900:2e3)};var bt=Pn("FullYear",!0);function ol(){return Fr(this.year())}function Pn(e,n){return function(a){return a!=null?(jt(this,e,a),d.updateOffset(this,n),this):rr(this,e)}}function rr(e,n){if(!e.isValid())return NaN;var a=e._d,t=e._isUTC;switch(n){case"Milliseconds":return t?a.getUTCMilliseconds():a.getMilliseconds();case"Seconds":return t?a.getUTCSeconds():a.getSeconds();case"Minutes":return t?a.getUTCMinutes():a.getMinutes();case"Hours":return t?a.getUTCHours():a.getHours();case"Date":return t?a.getUTCDate():a.getDate();case"Day":return t?a.getUTCDay():a.getDay();case"Month":return t?a.getUTCMonth():a.getMonth();case"FullYear":return t?a.getUTCFullYear():a.getFullYear();default:return NaN}}function jt(e,n,a){var t,l,u,p,_;if(!(!e.isValid()||isNaN(a))){switch(t=e._d,l=e._isUTC,n){case"Milliseconds":return void(l?t.setUTCMilliseconds(a):t.setMilliseconds(a));case"Seconds":return void(l?t.setUTCSeconds(a):t.setSeconds(a));case"Minutes":return void(l?t.setUTCMinutes(a):t.setMinutes(a));case"Hours":return void(l?t.setUTCHours(a):t.setHours(a));case"Date":return void(l?t.setUTCDate(a):t.setDate(a));case"FullYear":break;default:return}u=a,p=e.month(),_=e.date(),_=_===29&&p===1&&!Fr(u)?28:_,l?t.setUTCFullYear(u,p,_):t.setFullYear(u,p,_)}}function dl(e){return e=Re(e),Ee(this[e])?this[e]():this}function ul(e,n){if(typeof e=="object"){e=fa(e);var a=el(e),t,l=a.length;for(t=0;t<l;t++)this[a[t].unit](e[a[t].unit])}else if(e=Re(e),Ee(this[e]))return this[e](n);return this}function gl(e,n){return(e%n+n)%n}var Z;Array.prototype.indexOf?Z=Array.prototype.indexOf:Z=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function Ra(e,n){if(isNaN(e)||isNaN(n))return NaN;var a=gl(n,12);return e+=(n-a)/12,a===1?Fr(e)?29:28:31-a%7%2}O("M",["MM",2],"Mo",function(){return this.month()+1}),O("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),O("MMMM",0,0,function(e){return this.localeData().months(this,e)}),x("M",C,wn),x("MM",C,ce),x("MMM",function(e,n){return n.monthsShortRegex(e)}),x("MMMM",function(e,n){return n.monthsRegex(e)}),$(["M","MM"],function(e,n){n[Le]=M(e)-1}),$(["MMM","MMMM"],function(e,n,a,t){var l=a._locale.monthsParse(e,t,a._strict);l!=null?n[Le]=l:P(a).invalidMonth=e});var ml="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Rt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Tt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,kl=Qn,pl=Qn;function vl(e,n){return e?k(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Tt).test(n)?"format":"standalone"][e.month()]:k(this._months)?this._months:this._months.standalone}function yl(e,n){return e?k(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Tt.test(n)?"format":"standalone"][e.month()]:k(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function fl(e,n,a){var t,l,u,p=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)u=A([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(u,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(u,"").toLocaleLowerCase();return a?n==="MMM"?(l=Z.call(this._shortMonthsParse,p),l!==-1?l:null):(l=Z.call(this._longMonthsParse,p),l!==-1?l:null):n==="MMM"?(l=Z.call(this._shortMonthsParse,p),l!==-1?l:(l=Z.call(this._longMonthsParse,p),l!==-1?l:null)):(l=Z.call(this._longMonthsParse,p),l!==-1?l:(l=Z.call(this._shortMonthsParse,p),l!==-1?l:null))}function hl(e,n,a){var t,l,u;if(this._monthsParseExact)return fl.call(this,e,n,a);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(l=A([2e3,t]),a&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(l,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(l,"").replace(".","")+"$","i")),!a&&!this._monthsParse[t]&&(u="^"+this.months(l,"")+"|^"+this.monthsShort(l,""),this._monthsParse[t]=new RegExp(u.replace(".",""),"i")),a&&n==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(a&&n==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!a&&this._monthsParse[t].test(e))return t}}function At(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=M(n);else if(n=e.localeData().monthsParse(n),!j(n))return e}var a=n,t=e.date();return t=t<29?t:Math.min(t,Ra(e.year(),a)),e._isUTC?e._d.setUTCMonth(a,t):e._d.setMonth(a,t),e}function qt(e){return e!=null?(At(this,e),d.updateOffset(this,!0),this):rr(this,"Month")}function cl(){return Ra(this.year(),this.month())}function bl(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ft.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=kl),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function jl(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ft.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=pl),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Ft(){function e(N,D){return D.length-N.length}var n=[],a=[],t=[],l,u,p,_;for(l=0;l<12;l++)u=A([2e3,l]),p=Ke(this.monthsShort(u,"")),_=Ke(this.months(u,"")),n.push(p),a.push(_),t.push(_),t.push(p);n.sort(e),a.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Rl(e,n,a,t,l,u,p){var _;return e<100&&e>=0?(_=new Date(e+400,n,a,t,l,u,p),isFinite(_.getFullYear())&&_.setFullYear(e)):_=new Date(e,n,a,t,l,u,p),_}function ar(e){var n,a;return e<100&&e>=0?(a=Array.prototype.slice.call(arguments),a[0]=e+400,n=new Date(Date.UTC.apply(null,a)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function wr(e,n,a){var t=7+n-a,l=(7+ar(e,0,t).getUTCDay()-n)%7;return-l+t-1}function wt(e,n,a,t,l){var u=(7+a-t)%7,p=wr(e,t,l),_=1+7*(n-1)+u+p,N,D;return _<=0?(N=e-1,D=nr(N)+_):_>nr(e)?(N=e+1,D=_-nr(e)):(N=e,D=_),{year:N,dayOfYear:D}}function tr(e,n,a){var t=wr(e.year(),n,a),l=Math.floor((e.dayOfYear()-t-1)/7)+1,u,p;return l<1?(p=e.year()-1,u=l+Ue(p,n,a)):l>Ue(e.year(),n,a)?(u=l-Ue(e.year(),n,a),p=e.year()+1):(p=e.year(),u=l),{week:u,year:p}}function Ue(e,n,a){var t=wr(e,n,a),l=wr(e+1,n,a);return(nr(e)-t+l)/7}O("w",["ww",2],"wo","week"),O("W",["WW",2],"Wo","isoWeek"),x("w",C,wn),x("ww",C,ce),x("W",C,wn),x("WW",C,ce),er(["w","ww","W","WW"],function(e,n,a,t){n[t.substr(0,1)]=M(e)});function Tl(e){return tr(e,this._week.dow,this._week.doy).week}var Al={dow:0,doy:6};function ql(){return this._week.dow}function Fl(){return this._week.doy}function wl(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function Pl(e){var n=tr(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}O("d",0,"do","day"),O("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),O("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),O("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),O("e",0,0,"weekday"),O("E",0,0,"isoWeekday"),x("d",C),x("e",C),x("E",C),x("dd",function(e,n){return n.weekdaysMinRegex(e)}),x("ddd",function(e,n){return n.weekdaysShortRegex(e)}),x("dddd",function(e,n){return n.weekdaysRegex(e)}),er(["dd","ddd","dddd"],function(e,n,a,t){var l=a._locale.weekdaysParse(e,t,a._strict);l!=null?n.d=l:P(a).invalidWeekday=e}),er(["d","e","E"],function(e,n,a,t){n[t]=M(e)});function _l(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function xl(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Ta(e,n){return e.slice(n,7).concat(e.slice(0,n))}var Sl="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Pt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ol="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Nl=Qn,El=Qn,Vl=Qn;function Ml(e,n){var a=k(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?Ta(a,this._week.dow):e?a[e.day()]:a}function Il(e){return e===!0?Ta(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Dl(e){return e===!0?Ta(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Bl(e,n,a){var t,l,u,p=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)u=A([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(u,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(u,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(u,"").toLocaleLowerCase();return a?n==="dddd"?(l=Z.call(this._weekdaysParse,p),l!==-1?l:null):n==="ddd"?(l=Z.call(this._shortWeekdaysParse,p),l!==-1?l:null):(l=Z.call(this._minWeekdaysParse,p),l!==-1?l:null):n==="dddd"?(l=Z.call(this._weekdaysParse,p),l!==-1||(l=Z.call(this._shortWeekdaysParse,p),l!==-1)?l:(l=Z.call(this._minWeekdaysParse,p),l!==-1?l:null)):n==="ddd"?(l=Z.call(this._shortWeekdaysParse,p),l!==-1||(l=Z.call(this._weekdaysParse,p),l!==-1)?l:(l=Z.call(this._minWeekdaysParse,p),l!==-1?l:null)):(l=Z.call(this._minWeekdaysParse,p),l!==-1||(l=Z.call(this._weekdaysParse,p),l!==-1)?l:(l=Z.call(this._shortWeekdaysParse,p),l!==-1?l:null))}function Kl(e,n,a){var t,l,u;if(this._weekdaysParseExact)return Bl.call(this,e,n,a);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(l=A([2e3,1]).day(t),a&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(l,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(l,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(l,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(u="^"+this.weekdays(l,"")+"|^"+this.weekdaysShort(l,"")+"|^"+this.weekdaysMin(l,""),this._weekdaysParse[t]=new RegExp(u.replace(".",""),"i")),a&&n==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(a&&n==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(a&&n==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!a&&this._weekdaysParse[t].test(e))return t}}function Ll(e){if(!this.isValid())return e!=null?this:NaN;var n=rr(this,"Day");return e!=null?(e=_l(e,this.localeData()),this.add(e-n,"d")):n}function Yl(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function Ul(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=xl(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function $l(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Aa.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=Nl),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Hl(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Aa.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=El),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Gl(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Aa.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Vl),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Aa(){function e(pe,We){return We.length-pe.length}var n=[],a=[],t=[],l=[],u,p,_,N,D;for(u=0;u<7;u++)p=A([2e3,1]).day(u),_=Ke(this.weekdaysMin(p,"")),N=Ke(this.weekdaysShort(p,"")),D=Ke(this.weekdays(p,"")),n.push(_),a.push(N),t.push(D),l.push(_),l.push(N),l.push(D);n.sort(e),a.sort(e),t.sort(e),l.sort(e),this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function qa(){return this.hours()%12||12}function Cl(){return this.hours()||24}O("H",["HH",2],0,"hour"),O("h",["hh",2],0,qa),O("k",["kk",2],0,Cl),O("hmm",0,0,function(){return""+qa.apply(this)+Ve(this.minutes(),2)}),O("hmmss",0,0,function(){return""+qa.apply(this)+Ve(this.minutes(),2)+Ve(this.seconds(),2)}),O("Hmm",0,0,function(){return""+this.hours()+Ve(this.minutes(),2)}),O("Hmmss",0,0,function(){return""+this.hours()+Ve(this.minutes(),2)+Ve(this.seconds(),2)});function _t(e,n){O(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}_t("a",!0),_t("A",!1);function xt(e,n){return n._meridiemParse}x("a",xt),x("A",xt),x("H",C,ba),x("h",C,wn),x("k",C,wn),x("HH",C,ce),x("hh",C,ce),x("kk",C,ce),x("hmm",ht),x("hmmss",ct),x("Hmm",ht),x("Hmmss",ct),$(["H","HH"],te),$(["k","kk"],function(e,n,a){var t=M(e);n[te]=t===24?0:t}),$(["a","A"],function(e,n,a){a._isPm=a._locale.isPM(e),a._meridiem=e}),$(["h","hh"],function(e,n,a){n[te]=M(e),P(a).bigHour=!0}),$("hmm",function(e,n,a){var t=e.length-2;n[te]=M(e.substr(0,t)),n[we]=M(e.substr(t)),P(a).bigHour=!0}),$("hmmss",function(e,n,a){var t=e.length-4,l=e.length-2;n[te]=M(e.substr(0,t)),n[we]=M(e.substr(t,2)),n[Ye]=M(e.substr(l)),P(a).bigHour=!0}),$("Hmm",function(e,n,a){var t=e.length-2;n[te]=M(e.substr(0,t)),n[we]=M(e.substr(t))}),$("Hmmss",function(e,n,a){var t=e.length-4,l=e.length-2;n[te]=M(e.substr(0,t)),n[we]=M(e.substr(t,2)),n[Ye]=M(e.substr(l))});function Wl(e){return(e+"").toLowerCase().charAt(0)==="p"}var zl=/[ap]\.?m?\.?/i,Jl=Pn("Hours",!0);function Xl(e,n,a){return e>11?a?"pm":"PM":a?"am":"AM"}var St={calendar:Bi,longDateFormat:Ui,invalidDate:Hi,ordinal:Ci,dayOfMonthOrdinalParse:Wi,relativeTime:Ji,months:ml,monthsShort:Rt,week:Al,weekdays:Sl,weekdaysMin:Ol,weekdaysShort:Pt,meridiemParse:zl},z={},sr={},ir;function Zl(e,n){var a,t=Math.min(e.length,n.length);for(a=0;a<t;a+=1)if(e[a]!==n[a])return a;return t}function Ot(e){return e&&e.toLowerCase().replace("_","-")}function Ql(e){for(var n=0,a,t,l,u;n<e.length;){for(u=Ot(e[n]).split("-"),a=u.length,t=Ot(e[n+1]),t=t?t.split("-"):null;a>0;){if(l=Pr(u.slice(0,a).join("-")),l)return l;if(t&&t.length>=a&&Zl(u,t)>=a-1)break;a--}n++}return ir}function eo(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Pr(e){var n=null,a;if(z[e]===void 0&&s&&s.exports&&eo(e))try{n=ir._abbr,a=ug,a("./locale/"+e),nn(n)}catch{z[e]=null}return z[e]}function nn(e,n){var a;return e&&(f(n)?a=$e(e):a=Fa(e,n),a?ir=a:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),ir._abbr}function Fa(e,n){if(n!==null){var a,t=St;if(n.abbr=e,z[e]!=null)kt("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=z[e]._config;else if(n.parentLocale!=null)if(z[n.parentLocale]!=null)t=z[n.parentLocale]._config;else if(a=Pr(n.parentLocale),a!=null)t=a._config;else return sr[n.parentLocale]||(sr[n.parentLocale]=[]),sr[n.parentLocale].push({name:e,config:n}),null;return z[e]=new ka(ma(t,n)),sr[e]&&sr[e].forEach(function(l){Fa(l.name,l.config)}),nn(e),z[e]}else return delete z[e],null}function no(e,n){if(n!=null){var a,t,l=St;z[e]!=null&&z[e].parentLocale!=null?z[e].set(ma(z[e]._config,n)):(t=Pr(e),t!=null&&(l=t._config),n=ma(l,n),t==null&&(n.abbr=e),a=new ka(n),a.parentLocale=z[e],z[e]=a),nn(e)}else z[e]!=null&&(z[e].parentLocale!=null?(z[e]=z[e].parentLocale,e===nn()&&nn(e)):z[e]!=null&&delete z[e]);return z[e]}function $e(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return ir;if(!k(e)){if(n=Pr(e),n)return n;e=[e]}return Ql(e)}function ro(){return pa(z)}function wa(e){var n,a=e._a;return a&&P(e).overflow===-2&&(n=a[Le]<0||a[Le]>11?Le:a[Me]<1||a[Me]>Ra(a[ge],a[Le])?Me:a[te]<0||a[te]>24||a[te]===24&&(a[we]!==0||a[Ye]!==0||a[vn]!==0)?te:a[we]<0||a[we]>59?we:a[Ye]<0||a[Ye]>59?Ye:a[vn]<0||a[vn]>999?vn:-1,P(e)._overflowDayOfYear&&(n<ge||n>Me)&&(n=Me),P(e)._overflowWeeks&&n===-1&&(n=il),P(e)._overflowWeekday&&n===-1&&(n=ll),P(e).overflow=n),e}var ao=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,to=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,so=/Z|[+-]\d\d(?::?\d\d)?/,_r=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Pa=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],io=/^\/?Date\((-?\d+)/i,lo=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,oo={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Nt(e){var n,a,t=e._i,l=ao.exec(t)||to.exec(t),u,p,_,N,D=_r.length,pe=Pa.length;if(l){for(P(e).iso=!0,n=0,a=D;n<a;n++)if(_r[n][1].exec(l[1])){p=_r[n][0],u=_r[n][2]!==!1;break}if(p==null){e._isValid=!1;return}if(l[3]){for(n=0,a=pe;n<a;n++)if(Pa[n][1].exec(l[3])){_=(l[2]||" ")+Pa[n][0];break}if(_==null){e._isValid=!1;return}}if(!u&&_!=null){e._isValid=!1;return}if(l[4])if(so.exec(l[4]))N="Z";else{e._isValid=!1;return}e._f=p+(_||"")+(N||""),xa(e)}else e._isValid=!1}function uo(e,n,a,t,l,u){var p=[go(e),Rt.indexOf(n),parseInt(a,10),parseInt(t,10),parseInt(l,10)];return u&&p.push(parseInt(u,10)),p}function go(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function mo(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function ko(e,n,a){if(e){var t=Pt.indexOf(e),l=new Date(n[0],n[1],n[2]).getDay();if(t!==l)return P(a).weekdayMismatch=!0,a._isValid=!1,!1}return!0}function po(e,n,a){if(e)return oo[e];if(n)return 0;var t=parseInt(a,10),l=t%100,u=(t-l)/100;return u*60+l}function Et(e){var n=lo.exec(mo(e._i)),a;if(n){if(a=uo(n[4],n[3],n[2],n[5],n[6],n[7]),!ko(n[1],a,e))return;e._a=a,e._tzm=po(n[8],n[9],n[10]),e._d=ar.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),P(e).rfc2822=!0}else e._isValid=!1}function vo(e){var n=io.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(Nt(e),e._isValid===!1)delete e._isValid;else return;if(Et(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=je("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function _n(e,n,a){return e??n??a}function yo(e){var n=new Date(d.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function _a(e){var n,a,t=[],l,u,p;if(!e._d){for(l=yo(e),e._w&&e._a[Me]==null&&e._a[Le]==null&&fo(e),e._dayOfYear!=null&&(p=_n(e._a[ge],l[ge]),(e._dayOfYear>nr(p)||e._dayOfYear===0)&&(P(e)._overflowDayOfYear=!0),a=ar(p,0,e._dayOfYear),e._a[Le]=a.getUTCMonth(),e._a[Me]=a.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=t[n]=l[n];for(;n<7;n++)e._a[n]=t[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[te]===24&&e._a[we]===0&&e._a[Ye]===0&&e._a[vn]===0&&(e._nextDay=!0,e._a[te]=0),e._d=(e._useUTC?ar:Rl).apply(null,t),u=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[te]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==u&&(P(e).weekdayMismatch=!0)}}function fo(e){var n,a,t,l,u,p,_,N,D;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(u=1,p=4,a=_n(n.GG,e._a[ge],tr(W(),1,4).year),t=_n(n.W,1),l=_n(n.E,1),(l<1||l>7)&&(N=!0)):(u=e._locale._week.dow,p=e._locale._week.doy,D=tr(W(),u,p),a=_n(n.gg,e._a[ge],D.year),t=_n(n.w,D.week),n.d!=null?(l=n.d,(l<0||l>6)&&(N=!0)):n.e!=null?(l=n.e+u,(n.e<0||n.e>6)&&(N=!0)):l=u),t<1||t>Ue(a,u,p)?P(e)._overflowWeeks=!0:N!=null?P(e)._overflowWeekday=!0:(_=wt(a,t,l,u,p),e._a[ge]=_.year,e._dayOfYear=_.dayOfYear)}d.ISO_8601=function(){},d.RFC_2822=function(){};function xa(e){if(e._f===d.ISO_8601){Nt(e);return}if(e._f===d.RFC_2822){Et(e);return}e._a=[],P(e).empty=!0;var n=""+e._i,a,t,l,u,p,_=n.length,N=0,D,pe;for(l=pt(e._f,e._locale).match(va)||[],pe=l.length,a=0;a<pe;a++)u=l[a],t=(n.match(al(u,e))||[])[0],t&&(p=n.substr(0,n.indexOf(t)),p.length>0&&P(e).unusedInput.push(p),n=n.slice(n.indexOf(t)+t.length),N+=t.length),qn[u]?(t?P(e).empty=!1:P(e).unusedTokens.push(u),sl(u,t,e)):e._strict&&!t&&P(e).unusedTokens.push(u);P(e).charsLeftOver=_-N,n.length>0&&P(e).unusedInput.push(n),e._a[te]<=12&&P(e).bigHour===!0&&e._a[te]>0&&(P(e).bigHour=void 0),P(e).parsedDateParts=e._a.slice(0),P(e).meridiem=e._meridiem,e._a[te]=ho(e._locale,e._a[te],e._meridiem),D=P(e).era,D!==null&&(e._a[ge]=e._locale.erasConvertYear(D,e._a[ge])),_a(e),wa(e)}function ho(e,n,a){var t;return a==null?n:e.meridiemHour!=null?e.meridiemHour(n,a):(e.isPM!=null&&(t=e.isPM(a),t&&n<12&&(n+=12),!t&&n===12&&(n=0)),n)}function co(e){var n,a,t,l,u,p,_=!1,N=e._f.length;if(N===0){P(e).invalidFormat=!0,e._d=new Date(NaN);return}for(l=0;l<N;l++)u=0,p=!1,n=pn({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[l],xa(n),Ne(n)&&(p=!0),u+=P(n).charsLeftOver,u+=P(n).unusedTokens.length*10,P(n).score=u,_?u<t&&(t=u,a=n):(t==null||u<t||p)&&(t=u,a=n,p&&(_=!0));w(e,a||n)}function bo(e){if(!e._d){var n=fa(e._i),a=n.day===void 0?n.date:n.day;e._a=b([n.year,n.month,a,n.hour,n.minute,n.second,n.millisecond],function(t){return t&&parseInt(t,10)}),_a(e)}}function jo(e){var n=new Zn(wa(Vt(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function Vt(e){var n=e._i,a=e._f;return e._locale=e._locale||$e(e._l),n===null||a===void 0&&n===""?X({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),Fe(n)?new Zn(wa(n)):(F(n)?e._d=n:k(a)?co(e):a?xa(e):Ro(e),Ne(e)||(e._d=null),e))}function Ro(e){var n=e._i;f(n)?e._d=new Date(d.now()):F(n)?e._d=new Date(n.valueOf()):typeof n=="string"?vo(e):k(n)?(e._a=b(n.slice(0),function(a){return parseInt(a,10)}),_a(e)):v(n)?bo(e):j(n)?e._d=new Date(n):d.createFromInputFallback(e)}function Mt(e,n,a,t,l){var u={};return(n===!0||n===!1)&&(t=n,n=void 0),(a===!0||a===!1)&&(t=a,a=void 0),(v(e)&&h(e)||k(e)&&e.length===0)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=l,u._l=a,u._i=e,u._f=n,u._strict=t,jo(u)}function W(e,n,a,t){return Mt(e,n,a,t,!1)}var To=je("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:X()}),Ao=je("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:X()});function It(e,n){var a,t;if(n.length===1&&k(n[0])&&(n=n[0]),!n.length)return W();for(a=n[0],t=1;t<n.length;++t)(!n[t].isValid()||n[t][e](a))&&(a=n[t]);return a}function qo(){var e=[].slice.call(arguments,0);return It("isBefore",e)}function Fo(){var e=[].slice.call(arguments,0);return It("isAfter",e)}var wo=function(){return Date.now?Date.now():+new Date},lr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Po(e){var n,a=!1,t,l=lr.length;for(n in e)if(m(e,n)&&!(Z.call(lr,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(t=0;t<l;++t)if(e[lr[t]]){if(a)return!1;parseFloat(e[lr[t]])!==M(e[lr[t]])&&(a=!0)}return!0}function _o(){return this._isValid}function xo(){return Pe(NaN)}function xr(e){var n=fa(e),a=n.year||0,t=n.quarter||0,l=n.month||0,u=n.week||n.isoWeek||0,p=n.day||0,_=n.hour||0,N=n.minute||0,D=n.second||0,pe=n.millisecond||0;this._isValid=Po(n),this._milliseconds=+pe+D*1e3+N*6e4+_*1e3*60*60,this._days=+p+u*7,this._months=+l+t*3+a*12,this._data={},this._locale=$e(),this._bubble()}function Sr(e){return e instanceof xr}function Sa(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function So(e,n,a){var t=Math.min(e.length,n.length),l=Math.abs(e.length-n.length),u=0,p;for(p=0;p<t;p++)M(e[p])!==M(n[p])&&u++;return u+l}function Dt(e,n){O(e,0,0,function(){var a=this.utcOffset(),t="+";return a<0&&(a=-a,t="-"),t+Ve(~~(a/60),2)+n+Ve(~~a%60,2)})}Dt("Z",":"),Dt("ZZ",""),x("Z",Ar),x("ZZ",Ar),$(["Z","ZZ"],function(e,n,a){a._useUTC=!0,a._tzm=Oa(Ar,e)});var Oo=/([\+\-]|\d\d)/gi;function Oa(e,n){var a=(n||"").match(e),t,l,u;return a===null?null:(t=a[a.length-1]||[],l=(t+"").match(Oo)||["-",0,0],u=+(l[1]*60)+M(l[2]),u===0?0:l[0]==="+"?u:-u)}function Na(e,n){var a,t;return n._isUTC?(a=n.clone(),t=(Fe(e)||F(e)?e.valueOf():W(e).valueOf())-a.valueOf(),a._d.setTime(a._d.valueOf()+t),d.updateOffset(a,!1),a):W(e).local()}function Ea(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function No(e,n,a){var t=this._offset||0,l;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Oa(Ar,e),e===null)return this}else Math.abs(e)<16&&!a&&(e=e*60);return!this._isUTC&&n&&(l=Ea(this)),this._offset=e,this._isUTC=!0,l!=null&&this.add(l,"m"),t!==e&&(!n||this._changeInProgress?Yt(this,Pe(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:Ea(this)}function Eo(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function Vo(e){return this.utcOffset(0,e)}function Mo(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ea(this),"m")),this}function Io(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Oa(nl,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Do(e){return this.isValid()?(e=e?W(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Bo(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ko(){if(!f(this._isDSTShifted))return this._isDSTShifted;var e={},n;return pn(e,this),e=Vt(e),e._a?(n=e._isUTC?A(e._a):W(e._a),this._isDSTShifted=this.isValid()&&So(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Lo(){return this.isValid()?!this._isUTC:!1}function Yo(){return this.isValid()?this._isUTC:!1}function Bt(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Uo=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,$o=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Pe(e,n){var a=e,t=null,l,u,p;return Sr(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:j(e)||!isNaN(+e)?(a={},n?a[n]=+e:a.milliseconds=+e):(t=Uo.exec(e))?(l=t[1]==="-"?-1:1,a={y:0,d:M(t[Me])*l,h:M(t[te])*l,m:M(t[we])*l,s:M(t[Ye])*l,ms:M(Sa(t[vn]*1e3))*l}):(t=$o.exec(e))?(l=t[1]==="-"?-1:1,a={y:yn(t[2],l),M:yn(t[3],l),w:yn(t[4],l),d:yn(t[5],l),h:yn(t[6],l),m:yn(t[7],l),s:yn(t[8],l)}):a==null?a={}:typeof a=="object"&&("from"in a||"to"in a)&&(p=Ho(W(a.from),W(a.to)),a={},a.ms=p.milliseconds,a.M=p.months),u=new xr(a),Sr(e)&&m(e,"_locale")&&(u._locale=e._locale),Sr(e)&&m(e,"_isValid")&&(u._isValid=e._isValid),u}Pe.fn=xr.prototype,Pe.invalid=xo;function yn(e,n){var a=e&&parseFloat(e.replace(",","."));return(isNaN(a)?0:a)*n}function Kt(e,n){var a={};return a.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(a.months,"M").isAfter(n)&&--a.months,a.milliseconds=+n-+e.clone().add(a.months,"M"),a}function Ho(e,n){var a;return e.isValid()&&n.isValid()?(n=Na(n,e),e.isBefore(n)?a=Kt(e,n):(a=Kt(n,e),a.milliseconds=-a.milliseconds,a.months=-a.months),a):{milliseconds:0,months:0}}function Lt(e,n){return function(a,t){var l,u;return t!==null&&!isNaN(+t)&&(kt(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),u=a,a=t,t=u),l=Pe(a,t),Yt(this,l,e),this}}function Yt(e,n,a,t){var l=n._milliseconds,u=Sa(n._days),p=Sa(n._months);e.isValid()&&(t=t??!0,p&&At(e,rr(e,"Month")+p*a),u&&jt(e,"Date",rr(e,"Date")+u*a),l&&e._d.setTime(e._d.valueOf()+l*a),t&&d.updateOffset(e,u||p))}var Go=Lt(1,"add"),Co=Lt(-1,"subtract");function Ut(e){return typeof e=="string"||e instanceof String}function Wo(e){return Fe(e)||F(e)||Ut(e)||j(e)||Jo(e)||zo(e)||e===null||e===void 0}function zo(e){var n=v(e)&&!h(e),a=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],l,u,p=t.length;for(l=0;l<p;l+=1)u=t[l],a=a||m(e,u);return n&&a}function Jo(e){var n=k(e),a=!1;return n&&(a=e.filter(function(t){return!j(t)&&Ut(e)}).length===0),n&&a}function Xo(e){var n=v(e)&&!h(e),a=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],l,u;for(l=0;l<t.length;l+=1)u=t[l],a=a||m(e,u);return n&&a}function Zo(e,n){var a=e.diff(n,"days",!0);return a<-6?"sameElse":a<-1?"lastWeek":a<0?"lastDay":a<1?"sameDay":a<2?"nextDay":a<7?"nextWeek":"sameElse"}function Qo(e,n){arguments.length===1&&(arguments[0]?Wo(arguments[0])?(e=arguments[0],n=void 0):Xo(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var a=e||W(),t=Na(a,this).startOf("day"),l=d.calendarFormat(this,t)||"sameElse",u=n&&(Ee(n[l])?n[l].call(this,a):n[l]);return this.format(u||this.localeData().calendar(l,this,W(a)))}function ed(){return new Zn(this)}function nd(e,n){var a=Fe(e)?e:W(e);return this.isValid()&&a.isValid()?(n=Re(n)||"millisecond",n==="millisecond"?this.valueOf()>a.valueOf():a.valueOf()<this.clone().startOf(n).valueOf()):!1}function rd(e,n){var a=Fe(e)?e:W(e);return this.isValid()&&a.isValid()?(n=Re(n)||"millisecond",n==="millisecond"?this.valueOf()<a.valueOf():this.clone().endOf(n).valueOf()<a.valueOf()):!1}function ad(e,n,a,t){var l=Fe(e)?e:W(e),u=Fe(n)?n:W(n);return this.isValid()&&l.isValid()&&u.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(l,a):!this.isBefore(l,a))&&(t[1]===")"?this.isBefore(u,a):!this.isAfter(u,a))):!1}function td(e,n){var a=Fe(e)?e:W(e),t;return this.isValid()&&a.isValid()?(n=Re(n)||"millisecond",n==="millisecond"?this.valueOf()===a.valueOf():(t=a.valueOf(),this.clone().startOf(n).valueOf()<=t&&t<=this.clone().endOf(n).valueOf())):!1}function sd(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function id(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function ld(e,n,a){var t,l,u;if(!this.isValid())return NaN;if(t=Na(e,this),!t.isValid())return NaN;switch(l=(t.utcOffset()-this.utcOffset())*6e4,n=Re(n),n){case"year":u=Or(this,t)/12;break;case"month":u=Or(this,t);break;case"quarter":u=Or(this,t)/3;break;case"second":u=(this-t)/1e3;break;case"minute":u=(this-t)/6e4;break;case"hour":u=(this-t)/36e5;break;case"day":u=(this-t-l)/864e5;break;case"week":u=(this-t-l)/6048e5;break;default:u=this-t}return a?u:Te(u)}function Or(e,n){if(e.date()<n.date())return-Or(n,e);var a=(n.year()-e.year())*12+(n.month()-e.month()),t=e.clone().add(a,"months"),l,u;return n-t<0?(l=e.clone().add(a-1,"months"),u=(n-t)/(t-l)):(l=e.clone().add(a+1,"months"),u=(n-t)/(l-t)),-(a+u)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function od(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function dd(e){if(!this.isValid())return null;var n=e!==!0,a=n?this.clone().utc():this;return a.year()<0||a.year()>9999?cr(a,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Ee(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",cr(a,"Z")):cr(a,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function ud(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",a,t,l,u;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),a="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",l="-MM-DD[T]HH:mm:ss.SSS",u=n+'[")]',this.format(a+t+l+u)}function gd(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var n=cr(this,e);return this.localeData().postformat(n)}function md(e,n){return this.isValid()&&(Fe(e)&&e.isValid()||W(e).isValid())?Pe({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function kd(e){return this.from(W(),e)}function pd(e,n){return this.isValid()&&(Fe(e)&&e.isValid()||W(e).isValid())?Pe({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function vd(e){return this.to(W(),e)}function $t(e){var n;return e===void 0?this._locale._abbr:(n=$e(e),n!=null&&(this._locale=n),this)}var Ht=je("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Gt(){return this._locale}var Nr=1e3,xn=60*Nr,Er=60*xn,Ct=(365*400+97)*24*Er;function Sn(e,n){return(e%n+n)%n}function Wt(e,n,a){return e<100&&e>=0?new Date(e+400,n,a)-Ct:new Date(e,n,a).valueOf()}function zt(e,n,a){return e<100&&e>=0?Date.UTC(e+400,n,a)-Ct:Date.UTC(e,n,a)}function yd(e){var n,a;if(e=Re(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(a=this._isUTC?zt:Wt,e){case"year":n=a(this.year(),0,1);break;case"quarter":n=a(this.year(),this.month()-this.month()%3,1);break;case"month":n=a(this.year(),this.month(),1);break;case"week":n=a(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=a(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=a(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=Sn(n+(this._isUTC?0:this.utcOffset()*xn),Er);break;case"minute":n=this._d.valueOf(),n-=Sn(n,xn);break;case"second":n=this._d.valueOf(),n-=Sn(n,Nr);break}return this._d.setTime(n),d.updateOffset(this,!0),this}function fd(e){var n,a;if(e=Re(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(a=this._isUTC?zt:Wt,e){case"year":n=a(this.year()+1,0,1)-1;break;case"quarter":n=a(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=a(this.year(),this.month()+1,1)-1;break;case"week":n=a(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=a(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=a(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=Er-Sn(n+(this._isUTC?0:this.utcOffset()*xn),Er)-1;break;case"minute":n=this._d.valueOf(),n+=xn-Sn(n,xn)-1;break;case"second":n=this._d.valueOf(),n+=Nr-Sn(n,Nr)-1;break}return this._d.setTime(n),d.updateOffset(this,!0),this}function hd(){return this._d.valueOf()-(this._offset||0)*6e4}function cd(){return Math.floor(this.valueOf()/1e3)}function bd(){return new Date(this.valueOf())}function jd(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Rd(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Td(){return this.isValid()?this.toISOString():null}function Ad(){return Ne(this)}function qd(){return w({},P(this))}function Fd(){return P(this).overflow}function wd(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}O("N",0,0,"eraAbbr"),O("NN",0,0,"eraAbbr"),O("NNN",0,0,"eraAbbr"),O("NNNN",0,0,"eraName"),O("NNNNN",0,0,"eraNarrow"),O("y",["y",1],"yo","eraYear"),O("y",["yy",2],0,"eraYear"),O("y",["yyy",3],0,"eraYear"),O("y",["yyyy",4],0,"eraYear"),x("N",Va),x("NN",Va),x("NNN",Va),x("NNNN",Dd),x("NNNNN",Bd),$(["N","NN","NNN","NNNN","NNNNN"],function(e,n,a,t){var l=a._locale.erasParse(e,t,a._strict);l?P(a).era=l:P(a).invalidEra=e}),x("y",Fn),x("yy",Fn),x("yyy",Fn),x("yyyy",Fn),x("yo",Kd),$(["y","yy","yyy","yyyy"],ge),$(["yo"],function(e,n,a,t){var l;a._locale._eraYearOrdinalRegex&&(l=e.match(a._locale._eraYearOrdinalRegex)),a._locale.eraYearOrdinalParse?n[ge]=a._locale.eraYearOrdinalParse(e,l):n[ge]=parseInt(e,10)});function Pd(e,n){var a,t,l,u=this._eras||$e("en")._eras;for(a=0,t=u.length;a<t;++a){switch(typeof u[a].since){case"string":l=d(u[a].since).startOf("day"),u[a].since=l.valueOf();break}switch(typeof u[a].until){case"undefined":u[a].until=1/0;break;case"string":l=d(u[a].until).startOf("day").valueOf(),u[a].until=l.valueOf();break}}return u}function _d(e,n,a){var t,l,u=this.eras(),p,_,N;for(e=e.toUpperCase(),t=0,l=u.length;t<l;++t)if(p=u[t].name.toUpperCase(),_=u[t].abbr.toUpperCase(),N=u[t].narrow.toUpperCase(),a)switch(n){case"N":case"NN":case"NNN":if(_===e)return u[t];break;case"NNNN":if(p===e)return u[t];break;case"NNNNN":if(N===e)return u[t];break}else if([p,_,N].indexOf(e)>=0)return u[t]}function xd(e,n){var a=e.since<=e.until?1:-1;return n===void 0?d(e.since).year():d(e.since).year()+(n-e.offset)*a}function Sd(){var e,n,a,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(a=this.clone().startOf("day").valueOf(),t[e].since<=a&&a<=t[e].until||t[e].until<=a&&a<=t[e].since)return t[e].name;return""}function Od(){var e,n,a,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(a=this.clone().startOf("day").valueOf(),t[e].since<=a&&a<=t[e].until||t[e].until<=a&&a<=t[e].since)return t[e].narrow;return""}function Nd(){var e,n,a,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(a=this.clone().startOf("day").valueOf(),t[e].since<=a&&a<=t[e].until||t[e].until<=a&&a<=t[e].since)return t[e].abbr;return""}function Ed(){var e,n,a,t,l=this.localeData().eras();for(e=0,n=l.length;e<n;++e)if(a=l[e].since<=l[e].until?1:-1,t=this.clone().startOf("day").valueOf(),l[e].since<=t&&t<=l[e].until||l[e].until<=t&&t<=l[e].since)return(this.year()-d(l[e].since).year())*a+l[e].offset;return this.year()}function Vd(e){return m(this,"_erasNameRegex")||Ma.call(this),e?this._erasNameRegex:this._erasRegex}function Md(e){return m(this,"_erasAbbrRegex")||Ma.call(this),e?this._erasAbbrRegex:this._erasRegex}function Id(e){return m(this,"_erasNarrowRegex")||Ma.call(this),e?this._erasNarrowRegex:this._erasRegex}function Va(e,n){return n.erasAbbrRegex(e)}function Dd(e,n){return n.erasNameRegex(e)}function Bd(e,n){return n.erasNarrowRegex(e)}function Kd(e,n){return n._eraYearOrdinalRegex||Fn}function Ma(){var e=[],n=[],a=[],t=[],l,u,p,_,N,D=this.eras();for(l=0,u=D.length;l<u;++l)p=Ke(D[l].name),_=Ke(D[l].abbr),N=Ke(D[l].narrow),n.push(p),e.push(_),a.push(N),t.push(p),t.push(_),t.push(N);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+a.join("|")+")","i")}O(0,["gg",2],0,function(){return this.weekYear()%100}),O(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Vr(e,n){O(0,[e,e.length],0,n)}Vr("gggg","weekYear"),Vr("ggggg","weekYear"),Vr("GGGG","isoWeekYear"),Vr("GGGGG","isoWeekYear"),x("G",Tr),x("g",Tr),x("GG",C,ce),x("gg",C,ce),x("GGGG",ca,ha),x("gggg",ca,ha),x("GGGGG",Rr,br),x("ggggg",Rr,br),er(["gggg","ggggg","GGGG","GGGGG"],function(e,n,a,t){n[t.substr(0,2)]=M(e)}),er(["gg","GG"],function(e,n,a,t){n[t]=d.parseTwoDigitYear(e)});function Ld(e){return Jt.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Yd(e){return Jt.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Ud(){return Ue(this.year(),1,4)}function $d(){return Ue(this.isoWeekYear(),1,4)}function Hd(){var e=this.localeData()._week;return Ue(this.year(),e.dow,e.doy)}function Gd(){var e=this.localeData()._week;return Ue(this.weekYear(),e.dow,e.doy)}function Jt(e,n,a,t,l){var u;return e==null?tr(this,t,l).year:(u=Ue(e,t,l),n>u&&(n=u),Cd.call(this,e,n,a,t,l))}function Cd(e,n,a,t,l){var u=wt(e,n,a,t,l),p=ar(u.year,0,u.dayOfYear);return this.year(p.getUTCFullYear()),this.month(p.getUTCMonth()),this.date(p.getUTCDate()),this}O("Q",0,"Qo","quarter"),x("Q",yt),$("Q",function(e,n){n[Le]=(M(e)-1)*3});function Wd(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}O("D",["DD",2],"Do","date"),x("D",C,wn),x("DD",C,ce),x("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient}),$(["D","DD"],Me),$("Do",function(e,n){n[Me]=M(e.match(C)[0])});var Xt=Pn("Date",!0);O("DDD",["DDDD",3],"DDDo","dayOfYear"),x("DDD",jr),x("DDDD",ft),$(["DDD","DDDD"],function(e,n,a){a._dayOfYear=M(e)});function zd(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}O("m",["mm",2],0,"minute"),x("m",C,ba),x("mm",C,ce),$(["m","mm"],we);var Jd=Pn("Minutes",!1);O("s",["ss",2],0,"second"),x("s",C,ba),x("ss",C,ce),$(["s","ss"],Ye);var Xd=Pn("Seconds",!1);O("S",0,0,function(){return~~(this.millisecond()/100)}),O(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),O(0,["SSS",3],0,"millisecond"),O(0,["SSSS",4],0,function(){return this.millisecond()*10}),O(0,["SSSSS",5],0,function(){return this.millisecond()*100}),O(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),O(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),O(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),O(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),x("S",jr,yt),x("SS",jr,ce),x("SSS",jr,ft);var rn,Zt;for(rn="SSSS";rn.length<=9;rn+="S")x(rn,Fn);function Zd(e,n){n[vn]=M(("0."+e)*1e3)}for(rn="S";rn.length<=9;rn+="S")$(rn,Zd);Zt=Pn("Milliseconds",!1),O("z",0,0,"zoneAbbr"),O("zz",0,0,"zoneName");function Qd(){return this._isUTC?"UTC":""}function eu(){return this._isUTC?"Coordinated Universal Time":""}var R=Zn.prototype;R.add=Go,R.calendar=Qo,R.clone=ed,R.diff=ld,R.endOf=fd,R.format=gd,R.from=md,R.fromNow=kd,R.to=pd,R.toNow=vd,R.get=dl,R.invalidAt=Fd,R.isAfter=nd,R.isBefore=rd,R.isBetween=ad,R.isSame=td,R.isSameOrAfter=sd,R.isSameOrBefore=id,R.isValid=Ad,R.lang=Ht,R.locale=$t,R.localeData=Gt,R.max=Ao,R.min=To,R.parsingFlags=qd,R.set=ul,R.startOf=yd,R.subtract=Co,R.toArray=jd,R.toObject=Rd,R.toDate=bd,R.toISOString=dd,R.inspect=ud,typeof Symbol<"u"&&Symbol.for!=null&&(R[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),R.toJSON=Td,R.toString=od,R.unix=cd,R.valueOf=hd,R.creationData=wd,R.eraName=Sd,R.eraNarrow=Od,R.eraAbbr=Nd,R.eraYear=Ed,R.year=bt,R.isLeapYear=ol,R.weekYear=Ld,R.isoWeekYear=Yd,R.quarter=R.quarters=Wd,R.month=qt,R.daysInMonth=cl,R.week=R.weeks=wl,R.isoWeek=R.isoWeeks=Pl,R.weeksInYear=Hd,R.weeksInWeekYear=Gd,R.isoWeeksInYear=Ud,R.isoWeeksInISOWeekYear=$d,R.date=Xt,R.day=R.days=Ll,R.weekday=Yl,R.isoWeekday=Ul,R.dayOfYear=zd,R.hour=R.hours=Jl,R.minute=R.minutes=Jd,R.second=R.seconds=Xd,R.millisecond=R.milliseconds=Zt,R.utcOffset=No,R.utc=Vo,R.local=Mo,R.parseZone=Io,R.hasAlignedHourOffset=Do,R.isDST=Bo,R.isLocal=Lo,R.isUtcOffset=Yo,R.isUtc=Bt,R.isUTC=Bt,R.zoneAbbr=Qd,R.zoneName=eu,R.dates=je("dates accessor is deprecated. Use date instead.",Xt),R.months=je("months accessor is deprecated. Use month instead",qt),R.years=je("years accessor is deprecated. Use year instead",bt),R.zone=je("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Eo),R.isDSTShifted=je("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ko);function nu(e){return W(e*1e3)}function ru(){return W.apply(null,arguments).parseZone()}function Qt(e){return e}var K=ka.prototype;K.calendar=Ki,K.longDateFormat=$i,K.invalidDate=Gi,K.ordinal=zi,K.preparse=Qt,K.postformat=Qt,K.relativeTime=Xi,K.pastFuture=Zi,K.set=Di,K.eras=Pd,K.erasParse=_d,K.erasConvertYear=xd,K.erasAbbrRegex=Md,K.erasNameRegex=Vd,K.erasNarrowRegex=Id,K.months=vl,K.monthsShort=yl,K.monthsParse=hl,K.monthsRegex=jl,K.monthsShortRegex=bl,K.week=Tl,K.firstDayOfYear=Fl,K.firstDayOfWeek=ql,K.weekdays=Ml,K.weekdaysMin=Dl,K.weekdaysShort=Il,K.weekdaysParse=Kl,K.weekdaysRegex=$l,K.weekdaysShortRegex=Hl,K.weekdaysMinRegex=Gl,K.isPM=Wl,K.meridiem=Xl;function Mr(e,n,a,t){var l=$e(),u=A().set(t,n);return l[a](u,e)}function es(e,n,a){if(j(e)&&(n=e,e=void 0),e=e||"",n!=null)return Mr(e,n,a,"month");var t,l=[];for(t=0;t<12;t++)l[t]=Mr(e,t,a,"month");return l}function Ia(e,n,a,t){typeof e=="boolean"?(j(n)&&(a=n,n=void 0),n=n||""):(n=e,a=n,e=!1,j(n)&&(a=n,n=void 0),n=n||"");var l=$e(),u=e?l._week.dow:0,p,_=[];if(a!=null)return Mr(n,(a+u)%7,t,"day");for(p=0;p<7;p++)_[p]=Mr(n,(p+u)%7,t,"day");return _}function au(e,n){return es(e,n,"months")}function tu(e,n){return es(e,n,"monthsShort")}function su(e,n,a){return Ia(e,n,a,"weekdays")}function iu(e,n,a){return Ia(e,n,a,"weekdaysShort")}function lu(e,n,a){return Ia(e,n,a,"weekdaysMin")}nn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,a=M(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+a}}),d.lang=je("moment.lang is deprecated. Use moment.locale instead.",nn),d.langData=je("moment.langData is deprecated. Use moment.localeData instead.",$e);var He=Math.abs;function ou(){var e=this._data;return this._milliseconds=He(this._milliseconds),this._days=He(this._days),this._months=He(this._months),e.milliseconds=He(e.milliseconds),e.seconds=He(e.seconds),e.minutes=He(e.minutes),e.hours=He(e.hours),e.months=He(e.months),e.years=He(e.years),this}function ns(e,n,a,t){var l=Pe(n,a);return e._milliseconds+=t*l._milliseconds,e._days+=t*l._days,e._months+=t*l._months,e._bubble()}function du(e,n){return ns(this,e,n,1)}function uu(e,n){return ns(this,e,n,-1)}function rs(e){return e<0?Math.floor(e):Math.ceil(e)}function gu(){var e=this._milliseconds,n=this._days,a=this._months,t=this._data,l,u,p,_,N;return e>=0&&n>=0&&a>=0||e<=0&&n<=0&&a<=0||(e+=rs(Da(a)+n)*864e5,n=0,a=0),t.milliseconds=e%1e3,l=Te(e/1e3),t.seconds=l%60,u=Te(l/60),t.minutes=u%60,p=Te(u/60),t.hours=p%24,n+=Te(p/24),N=Te(as(n)),a+=N,n-=rs(Da(N)),_=Te(a/12),a%=12,t.days=n,t.months=a,t.years=_,this}function as(e){return e*4800/146097}function Da(e){return e*146097/4800}function mu(e){if(!this.isValid())return NaN;var n,a,t=this._milliseconds;if(e=Re(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+t/864e5,a=this._months+as(n),e){case"month":return a;case"quarter":return a/3;case"year":return a/12}else switch(n=this._days+Math.round(Da(this._months)),e){case"week":return n/7+t/6048e5;case"day":return n+t/864e5;case"hour":return n*24+t/36e5;case"minute":return n*1440+t/6e4;case"second":return n*86400+t/1e3;case"millisecond":return Math.floor(n*864e5)+t;default:throw new Error("Unknown unit "+e)}}function Ge(e){return function(){return this.as(e)}}var ts=Ge("ms"),ku=Ge("s"),pu=Ge("m"),vu=Ge("h"),yu=Ge("d"),fu=Ge("w"),hu=Ge("M"),cu=Ge("Q"),bu=Ge("y"),ju=ts;function Ru(){return Pe(this)}function Tu(e){return e=Re(e),this.isValid()?this[e+"s"]():NaN}function fn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Au=fn("milliseconds"),qu=fn("seconds"),Fu=fn("minutes"),wu=fn("hours"),Pu=fn("days"),_u=fn("months"),xu=fn("years");function Su(){return Te(this.days()/7)}var Ce=Math.round,On={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Ou(e,n,a,t,l){return l.relativeTime(n||1,!!a,e,t)}function Nu(e,n,a,t){var l=Pe(e).abs(),u=Ce(l.as("s")),p=Ce(l.as("m")),_=Ce(l.as("h")),N=Ce(l.as("d")),D=Ce(l.as("M")),pe=Ce(l.as("w")),We=Ce(l.as("y")),an=u<=a.ss&&["s",u]||u<a.s&&["ss",u]||p<=1&&["m"]||p<a.m&&["mm",p]||_<=1&&["h"]||_<a.h&&["hh",_]||N<=1&&["d"]||N<a.d&&["dd",N];return a.w!=null&&(an=an||pe<=1&&["w"]||pe<a.w&&["ww",pe]),an=an||D<=1&&["M"]||D<a.M&&["MM",D]||We<=1&&["y"]||["yy",We],an[2]=n,an[3]=+e>0,an[4]=t,Ou.apply(null,an)}function Eu(e){return e===void 0?Ce:typeof e=="function"?(Ce=e,!0):!1}function Vu(e,n){return On[e]===void 0?!1:n===void 0?On[e]:(On[e]=n,e==="s"&&(On.ss=n-1),!0)}function Mu(e,n){if(!this.isValid())return this.localeData().invalidDate();var a=!1,t=On,l,u;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(a=e),typeof n=="object"&&(t=Object.assign({},On,n),n.s!=null&&n.ss==null&&(t.ss=n.s-1)),l=this.localeData(),u=Nu(this,!a,t,l),a&&(u=l.pastFuture(+this,u)),l.postformat(u)}var Ba=Math.abs;function Nn(e){return(e>0)-(e<0)||+e}function Ir(){if(!this.isValid())return this.localeData().invalidDate();var e=Ba(this._milliseconds)/1e3,n=Ba(this._days),a=Ba(this._months),t,l,u,p,_=this.asSeconds(),N,D,pe,We;return _?(t=Te(e/60),l=Te(t/60),e%=60,t%=60,u=Te(a/12),a%=12,p=e?e.toFixed(3).replace(/\.?0+$/,""):"",N=_<0?"-":"",D=Nn(this._months)!==Nn(_)?"-":"",pe=Nn(this._days)!==Nn(_)?"-":"",We=Nn(this._milliseconds)!==Nn(_)?"-":"",N+"P"+(u?D+u+"Y":"")+(a?D+a+"M":"")+(n?pe+n+"D":"")+(l||t||e?"T":"")+(l?We+l+"H":"")+(t?We+t+"M":"")+(e?We+p+"S":"")):"P0D"}var B=xr.prototype;B.isValid=_o,B.abs=ou,B.add=du,B.subtract=uu,B.as=mu,B.asMilliseconds=ts,B.asSeconds=ku,B.asMinutes=pu,B.asHours=vu,B.asDays=yu,B.asWeeks=fu,B.asMonths=hu,B.asQuarters=cu,B.asYears=bu,B.valueOf=ju,B._bubble=gu,B.clone=Ru,B.get=Tu,B.milliseconds=Au,B.seconds=qu,B.minutes=Fu,B.hours=wu,B.days=Pu,B.weeks=Su,B.months=_u,B.years=xu,B.humanize=Mu,B.toISOString=Ir,B.toString=Ir,B.toJSON=Ir,B.locale=$t,B.localeData=Gt,B.toIsoString=je("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ir),B.lang=Ht,O("X",0,0,"unix"),O("x",0,0,"valueOf"),x("x",Tr),x("X",rl),$("X",function(e,n,a){a._d=new Date(parseFloat(e)*1e3)}),$("x",function(e,n,a){a._d=new Date(M(e))});//! moment.js
return d.version="2.30.1",g(W),d.fn=R,d.min=qo,d.max=Fo,d.now=wo,d.utc=A,d.unix=nu,d.months=au,d.isDate=F,d.locale=nn,d.invalid=X,d.duration=Pe,d.isMoment=Fe,d.weekdays=su,d.parseZone=ru,d.localeData=$e,d.isDuration=Sr,d.monthsShort=tu,d.weekdaysMin=lu,d.defineLocale=Fa,d.updateLocale=no,d.locales=ro,d.weekdaysShort=iu,d.normalizeUnits=Re,d.relativeTimeRounding=Eu,d.relativeTimeThreshold=Vu,d.calendarFormat=Zo,d.prototype=R,d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},d})})(Ri);var Vm=Ri.exports;const qs=Ku(Vm),Mm="_graderesHeader_jfwkn_1",Im="_smalHeader_jfwkn_5",Dm="_notLastRow_jfwkn_9",Bm="_placeRemoveButton_jfwkn_13",Km="_prosentHeader_jfwkn_17",Vn={graderesHeader:Mm,smalHeader:Im,notLastRow:Dm,placeRemoveButton:Bm,prosentHeader:Km},Ze="tidsromPermisjon",Ae="graderingPeriode",Lm=Qu(9),Fs=s=>()=>{const o=s(`${Ze}.${Ae}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},ws=(s,i,o)=>()=>{const d=s(`${Ze}.${Ae}.${i}.periodeFom`),g=s(`${Ze}.${Ae}.${i}.periodeTom`);return!g||!d?null:o?qe(g)(d):Se(d)(g)},Ym=(s,i)=>o=>s(`${Ze}.${Ae}.${i}.arbeidskategoriType`)===Tn.ARBEIDSTAKER?q(o):void 0,Um=s=>{if(s)return s.length===11?Bs(s):Lm(s)},Ps={periodeFom:"",periodeTom:"",periodeForGradering:"",prosentandelArbeid:"",skalGraderes:!1},$m=[Tn.ARBEIDSTAKER,Tn.SELVSTENDIG_NAERINGSDRIVENDE,Tn.FRILANSER],_s=kr(100),Hm=s=>s.filter(({kode:i})=>dt.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Gm=s=>s.filter(({kode:i})=>$m.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Ti=({graderingKvoter:s,readOnly:i,arbeidskategoriTyper:o})=>{const d=H(),{watch:g,control:k,getValues:v,trigger:m,formState:{isSubmitted:h}}=Y(),{fields:f,remove:j,append:F}=he({control:k,name:`${Ze}.${Ae}`}),b=g(`${Ze}.${Ae}`);return E.useEffect(()=>{f.length===0&&F(Ps)},[]),r.jsx(Oe,{fields:f,emptyPeriodTemplate:Ps,bodyText:d.formatMessage({id:"Registrering.Permisjon.Gradering.LeggTilPeriode"}),readOnly:i,remove:j,append:F,children:(w,A,S)=>{const{harSamtidigUttak:P,periodeFom:G}=b[A],Ne=G&&qs(G,An).isBefore(qs("2019-01-01")),X=`${Ze}.${Ae}.${A}`;return r.jsxs("div",{className:A!==f.length-1?Vn.notLastRow:"",children:[A>0&&r.jsxs(r.Fragment,{children:[r.jsx(nt,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(Q,{wrap:!0,children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{name:`${X}.periodeForGradering`,selectValues:Hm(s),label:d.formatMessage({id:"Registrering.Permisjon.Gradering.Periode"}),validate:[q]})}),r.jsx(T,{children:r.jsx(V,{label:d.formatMessage({id:"Registrering.Permisjon.periodeFom"}),name:`${X}.periodeFom`,validate:[q,I,ws(v,A,!0),Fs(v)],onChange:()=>h?m():void 0})}),r.jsx(T,{children:r.jsx(V,{label:d.formatMessage({id:"Registrering.Permisjon.periodeTom"}),name:`${X}.periodeTom`,validate:[q,I,ws(v,A,!1),Fs(v)],onChange:()=>h?m():void 0})}),r.jsx(T,{className:Vn.prosentHeader,children:r.jsx(le,{label:r.jsx(c,{id:"Registrering.Permisjon.Gradering.Prosentandel"}),name:`${X}.prosentandelArbeid`,validate:[q,Wa,_s],normalizeOnBlur:J=>Number.isNaN(J)?J:parseFloat(J.toString()).toFixed(2)})}),r.jsx(T,{children:r.jsx(le,{label:d.formatMessage({id:"Registrering.Permisjon.Orgnr"}),name:`${X}.arbeidsgiverIdentifikator`,validate:[Ym(v,A),un,Um]})})]}),r.jsx(y,{eightPx:!0}),r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{label:d.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${X}.arbeidskategoriType`,selectValues:Gm(o),validate:[q],onChange:()=>h?m():void 0})}),r.jsxs(T,{children:[r.jsx("div",{className:Vn.graderesHeader,children:r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Gradering.SkalGraderes"})})}),r.jsx(ie,{name:`${X}.skalGraderes`,label:" "})]}),r.jsx(T,{children:r.jsxs("div",{className:Vn.smalHeader,children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Flerbarnsdager"})}),r.jsx(ie,{readOnly:i,name:`${X}.flerbarnsdager`,label:" "})]})}),r.jsxs(T,{children:[r.jsx("div",{className:Vn.smalHeader,children:r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.HarSamtidigUttak"})})}),r.jsx(ie,{name:`${X}.harSamtidigUttak`,label:""})]}),r.jsx(T,{children:P&&r.jsx(le,{name:`${X}.samtidigUttaksprosent`,validate:[q,Wa,_s],label:d.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"})})}),S&&r.jsx(T,{className:Vn.placeRemoveButton,children:S()})]}),Ne&&r.jsxs("div",{children:[r.jsx(L,{wrap:!0,children:r.jsx(Qr,{size:"small",variant:"warning",children:r.jsx(c,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})}),r.jsx(y,{eightPx:!0})]})]})]},w.id)}})};Ti.__docgenInfo={description:`RenderGraderingPeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Cn=({readOnly:s,alleKodeverk:i})=>{const o=i[ee.UTTAK_PERIODE_TYPE],d=i[ee.ARBEIDSKATEGORI],{watch:g}=Y(),k=g(`${Ze}.skalGradere`)||!1;return r.jsxs("div",{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Gradering.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${Ze}.skalGradere`,label:r.jsx(c,{id:"Registrering.Permisjon.Gradering.GraderUttaket"})}),k&&r.jsx(Ti,{graderingKvoter:o,arbeidskategoriTyper:d,readOnly:s})]})};Cn.transformValues=s=>{const i=s[Ae];return i?i.map(o=>o.arbeidskategoriType?{...o,erArbeidstaker:o.arbeidskategoriType===Tn.ARBEIDSTAKER,erFrilanser:o.arbeidskategoriType===Tn.FRILANSER,erSelvstNæringsdrivende:o.arbeidskategoriType===Tn.SELVSTENDIG_NAERINGSDRIVENDE}:o):[]};Cn.buildInitialValues=()=>({[Ae]:[{}],skalGradere:!1});Cn.__docgenInfo={description:`PermisjonGraderingPanel

Viser panel for gradering
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriodeFormValues;
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"FormValues",required:!1}}]},alias:"FormValues"}}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonGraderingPanel"};const ze="tidsromPermisjon",sn="overforingsperioder",xs=s=>()=>{const o=s(`${ze}.${sn}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},Ss={periodeFom:"",periodeTom:"",overforingArsak:""},Ai=({selectValues:s,readOnly:i})=>{const o=H(),{control:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:h,append:f}=he({control:d,name:`${ze}.${sn}`});E.useEffect(()=>{m.length===0&&f(Ss)},[]);const j=`${ze}.${sn}`;return r.jsx(Oe,{fields:m,emptyPeriodTemplate:Ss,bodyText:o.formatMessage({id:"Registrering.Permisjon.Utsettelse.LeggTilPeriode"}),readOnly:i,append:f,remove:h,children:(F,b,w)=>r.jsx(Q,{wrap:!0,children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{name:`${j}.${b}.overforingArsak`,label:b===0?o.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak"}):"",selectValues:s,validate:[q],readOnly:i})}),r.jsxs(r.Fragment,{children:[r.jsx(T,{children:r.jsx(V,{isReadOnly:i,name:`${j}.${b}.periodeFom`,validate:[q,I,()=>{const A=g(`${ze}.${sn}.${b}.periodeFom`),S=g(`${ze}.${sn}.${b}.periodeTom`);return S&&A?qe(S)(A):null},xs(g)],label:b===0?r.jsx(c,{id:"Registrering.Permisjon.OverforingAvKvote.fomDato"}):"",onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(V,{isReadOnly:i,name:`${j}.${b}.periodeTom`,validate:[q,I,()=>{const A=g(`${ze}.${sn}.${b}.periodeFom`),S=g(`${ze}.${sn}.${b}.periodeTom`);return S&&A?Se(A)(S):null},xs(g)],label:b===0?r.jsx(c,{id:"Registrering.Permisjon.OverforingAvKvote.tomDato"}):"",onChange:()=>v?k():void 0})}),w&&r.jsx(T,{children:w()})]})]})},F.id)})};Ai.__docgenInfo={description:`RenderOverforingAvKvoterFieldArray

Viser inputfelter for dato for bestemmelse av overføring.`,methods:[],displayName:"RenderOverforingAvKvoterFieldArray",props:{selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Cm=(s,i,o)=>i===zr.INSTITUSJONSOPPHOLD_ANNEN_FORELDER?s.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt"}):i===zr.SYKDOM_ANNEN_FORELDER?s.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk"}):o,Wm=(s,i,o,d)=>s.filter(({kode:g})=>o||g!==zr.ALENEOMSORG&&g!==zr.IKKE_RETT_ANNEN_FORELDER).map(({kode:g,navn:k})=>i?r.jsx("option",{value:g,children:k},g):r.jsx("option",{value:g,children:Cm(d,g,k)},g)),da=({foreldreType:s,alleKodeverk:i,readOnly:o,erEndringssøknad:d})=>{const g=H(),k=i[og.OVERFOERING_AARSAK_TYPE],v=Wm(k,s===Ln.MOR,d,g),{watch:m}=Y(),h=m(`${ze}.skalOvertaKvote`)||!1;return r.jsxs(r.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvoten"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:o,name:`${ze}.skalOvertaKvote`,label:r.jsx(c,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvote"})}),h&&r.jsx(Ai,{selectValues:v,readOnly:o})]})};da.buildInitialValues=()=>({skalOvertaKvote:!1,overforingsperioder:[{}]});da.__docgenInfo={description:`PermisjonOverforingAvKvoterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonOverforingAvKvoterPanel"};const zm="_notLastRow_pe2tr_1",Jm={notLastRow:zm},_e="tidsromPermisjon",xe="oppholdPerioder",Os=s=>()=>{const o=s(`${_e}.${xe}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},Ns={periodeFom:"",periodeTom:"",årsak:""},Xm=[Br.UTTAK_MØDREKVOTE_ANNEN_FORELDER,Br.UTTAK_FEDREKVOTE_ANNEN_FORELDER,Br.UTTAK_FELLESP_ANNEN_FORELDER,Br.UTTAK_FORELDREPENGER_ANNEN_FORELDER],Zm=s=>s.filter(({kode:i})=>Xm.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),qi=({oppholdsReasons:s,readOnly:i})=>{const o=H(),{control:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:h,append:f}=he({control:d,name:`${_e}.${xe}`});return E.useEffect(()=>{m.length===0&&f(Ns)},[]),r.jsx(Oe,{fields:m,emptyPeriodTemplate:Ns,bodyText:o.formatMessage({id:"Registrering.Permisjon.Opphold.LeggTilPeriode"}),readOnly:i,append:f,remove:h,children:(j,F,b)=>r.jsx("div",{className:F!==m.length-1?Jm.notLastRow:"",children:r.jsx(Q,{wrap:!0,children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(V,{name:`${_e}.${xe}.${F}.periodeFom`,label:F===0?o.formatMessage({id:"Registrering.Permisjon.periodeFom"}):"",validate:[q,I,()=>{const w=g(`${_e}.${xe}.${F}.periodeFom`),A=g(`${_e}.${xe}.${F}.periodeTom`);return A&&w?qe(A)(w):null},Os(g)],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(V,{name:`${_e}.${xe}.${F}.periodeTom`,label:F===0?o.formatMessage({id:"Registrering.Permisjon.periodeTom"}):"",validate:[q,I,()=>{const w=g(`${_e}.${xe}.${F}.periodeFom`),A=g(`${_e}.${xe}.${F}.periodeTom`);return A&&w?Se(w)(A):null},Os(g)],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(fe,{name:`${_e}.${xe}.${F}.årsak`,label:F===0?o.formatMessage({id:"Registrering.Permisjon.Opphold.Arsak"}):"",selectValues:Zm(s),validate:[q]})}),b&&r.jsx(T,{children:b()})]})})},j.id)})};qi.__docgenInfo={description:`RenderOppholdPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av oppholdsperiode.`,methods:[],displayName:"RenderOppholdPeriodeFieldArray",props:{oppholdsReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ua=({readOnly:s,alleKodeverk:i})=>{const o=i[ee.OPPHOLD_ARSAK],{watch:d}=Y(),g=d(`${_e}.skalHaOpphold`)||!1;return r.jsxs("div",{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Opphold.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${_e}.skalHaOpphold`,label:r.jsx(c,{id:"Registrering.Permisjon.Opphold.OppholdUttaket"})}),g&&r.jsx(qi,{oppholdsReasons:o,readOnly:s})]})};ua.buildInitialValues=()=>({[xe]:[{}],skalHaOpphold:!1});ua.__docgenInfo={description:`PermisjonOppholdPanel

Viser panel for utsettelse
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonOppholdPanel"};const Qm="_flexContainer_1vzu1_1",ek={flexContainer:Qm},be="tidsromPermisjon",nk=s=>{const i=s(`${be}.fulltUttak`)||!1,o=s(`${be}.skalGradere`)||!1,d=s(`${be}.skalUtsette`)||!1,g=s(`${be}.skalOvertaKvote`)||!1;return!i&&!o&&!d&&!g},Wn=({foreldreType:s,readOnly:i,alleKodeverk:o,erEndringssøknad:d})=>{var b,w,A,S;const g=H(),{watch:k,setError:v,clearErrors:m,getValues:h,formState:f}=Y(),j=k(`${be}.fulltUttak`)||!1,F=nk(h);return E.useEffect(()=>{F&&v(`${be}.notRegisteredInput`,{type:"custom",message:g.formatMessage({id:"PermisjonPanel.MinstEnPeriodeRequired"})}),F||m(`${be}.notRegisteredInput`)},[F]),r.jsx(oe,{children:r.jsxs("div",{className:ek.flexContainer,children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{eightPx:!0}),r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.FulltUttak"})}),r.jsx(y,{eightPx:!0}),r.jsx(ie,{readOnly:i,name:`${be}.fulltUttak`,label:r.jsx(c,{id:"Registrering.Permisjon.FulltUttak"})}),j&&r.jsx(la,{sokerErMor:s===Ln.MOR,readOnly:i,alleKodeverk:o}),r.jsx(y,{twentyPx:!0}),r.jsx(da,{readOnly:i,foreldreType:s,alleKodeverk:o,erEndringssøknad:d}),r.jsx(y,{twentyPx:!0}),r.jsx(oa,{readOnly:i,alleKodeverk:o}),r.jsx(y,{twentyPx:!0}),r.jsx(Cn,{readOnly:i,alleKodeverk:o}),r.jsx(y,{twentyPx:!0}),r.jsx(ua,{readOnly:i,alleKodeverk:o}),f.isSubmitted&&((w=(b=f.errors[be])==null?void 0:b.notRegisteredInput)==null?void 0:w.message)&&r.jsx(yr,{children:(S=(A=f.errors[be])==null?void 0:A.notRegisteredInput)==null?void 0:S.message})]})})};Wn.transformValues=s=>{var k,v,m,h,f,j,F;const i=s[be],o=i,d=i[De];(k=s.tidsromPermisjon)!=null&&k.fulltUttak&&d&&(o[De]=la.transformValues(d));const g=i[Ae];return(v=s.tidsromPermisjon)!=null&&v.skalGradere&&g&&(o[Ae]=Cn.transformValues(i)),(m=s.tidsromPermisjon)!=null&&m.fulltUttak||(o[De]=void 0),(h=s.tidsromPermisjon)!=null&&h.skalGradere||(o[Ae]=void 0),(f=s.tidsromPermisjon)!=null&&f.skalUtsette||(o[dn]=void 0),(j=s.tidsromPermisjon)!=null&&j.skalOvertaKvote||(o[sn]=void 0),(F=s.tidsromPermisjon)!=null&&F.skalHaOpphold||(o[xe]=void 0),o};Wn.buildInitialValues=()=>({[be]:{...oa.buildInitialValues(),...Cn.buildInitialValues(),...da.buildInitialValues(),...ua.buildInitialValues(),[De]:[{}],fulltUttak:!1}});Wn.__docgenInfo={description:`PermisjonPanel

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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]},alias:"FormValues"}}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonPanel"};const rk=re(ue),zn=({foreldreType:s,readOnly:i,alleKodeverk:o,erEndringssøknad:d})=>r.jsx(ke,{value:rk,children:r.jsx(Wn,{readOnly:i,foreldreType:s,alleKodeverk:o,erEndringssøknad:d})});zn.transformValues=Wn.transformValues;zn.buildInitialValues=Wn.buildInitialValues;zn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]},alias:"FormValues"}}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonIndex"};class ak{constructor(i,o,d){Dr(this,"fagsakYtelseType");Dr(this,"familieHendelseType");Dr(this,"foreldreType");this.fagsakYtelseType=Ka(i),i===Wr.SVANGERSKAPSPENGER?this.familieHendelseType=se.FODSEL:this.familieHendelseType=Ka(o),this.foreldreType=Ka(d)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const Ca=re(ue),Fi=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:Ca.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(V,{name:"termindato",label:Ca.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:s,validate:[q,I]})}),r.jsx(T,{children:r.jsx(V,{name:"foedselsDato",label:Ca.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:s,validate:[I,Kn]})})]})})]});Fi.__docgenInfo={description:"",methods:[],displayName:"TerminFodselSvpPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const tk="_notLastRow_uwn16_1",sk={notLastRow:tk},ik=kr(100),lk="tilretteleggingArbeidsgiver",ok="tilretteleggingSelvstendigNaringsdrivende",dk="tilretteleggingFrilans",Es={tilretteleggingType:"",dato:"",stillingsprosent:""},Xr=({readOnly:s,name:i})=>{const o=H(),{control:d}=Y(),{fields:g,remove:k,append:v}=he({control:d,name:i});return E.useEffect(()=>{g.length===0&&v(Es)},[]),r.jsx(Oe,{fields:g,emptyPeriodTemplate:Es,bodyText:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:s,append:v,remove:k,children:(m,h,f)=>r.jsxs("div",{className:h!==g.length-1?sk.notLastRow:"",children:[r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{readOnly:s,name:`${i}.${h}.tilretteleggingType`,label:h===0?o.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}):"",validate:[q],selectValues:[r.jsx("option",{value:En.HEL_TILRETTELEGGING,children:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},En.HEL_TILRETTELEGGING),r.jsx("option",{value:En.DELVIS_TILRETTELEGGING,children:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},En.DELVIS_TILRETTELEGGING),r.jsx("option",{value:En.INGEN_TILRETTELEGGING,children:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},En.INGEN_TILRETTELEGGING)]})}),r.jsx(T,{children:r.jsx(V,{isReadOnly:s,name:`${i}.${h}.dato`,label:h===0?o.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}):"",validate:[q]})}),r.jsx(T,{children:r.jsx(le,{readOnly:s,name:`${i}.${h}.stillingsprosent`,label:h===0?o.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}):"",validate:[q,ik],maxLength:99})}),f&&r.jsx(T,{children:f()})]})})]},m.id)})};Xr.__docgenInfo={description:`BehovForTilrettteleggingFieldArray

Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.`,methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Vs="tilretteleggingArbeidsforhold",Ms="tilretteleggingForArbeidsgiver",uk={organisasjonsnummer:"",behovsdato:""},wi=({readOnly:s})=>{const i=H(),{control:o}=Y(),{fields:d,append:g}=he({control:o,name:`${Vs}.${Ms}`}),k=()=>{g(uk)},v=`${Vs}.${Ms}`;return r.jsx(r.Fragment,{children:d.map((m,h)=>r.jsxs("div",{children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(le,{readOnly:s,name:`${v}.${h}.organisasjonsnummer`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.OrgNr"}),validate:[q,f=>eg(f.toString()),ng],maxLength:99})}),r.jsx(T,{children:r.jsx(V,{name:`${v}.${h}.behovsdato`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra"}),validate:[q],isReadOnly:s})})]})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Xr,{name:`${v}.${h}.${lk}`,readOnly:s}),d.length>h+1&&r.jsxs(r.Fragment,{children:[r.jsx("hr",{}),r.jsx(y,{sixteenPx:!0})]}),d.length===h+1&&r.jsx(Be,{size:"small",variant:"secondary",onClick:k,type:"button",children:r.jsx(c,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})]},m.id))})};wi.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ie=re(ue),gk="tilretteleggingForArbeidsgiver",ve="tilretteleggingArbeidsforhold",ga=({readOnly:s})=>{var f,j,F,b;const{watch:i,setError:o,clearErrors:d,formState:g}=Y(),k=i(`${ve}.sokForSelvstendigNaringsdrivende`),v=i(`${ve}.sokForFrilans`),m=i(`${ve}.sokForArbeidsgiver`),h=!k&&!v&&!m;return E.useEffect(()=>{h&&o(`${ve}.notRegisteredInput`,{type:"custom",message:Ie.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}),h||d(`${ve}.notRegisteredInput`)},[h]),r.jsx(ke,{value:Ie,children:r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),r.jsx(y,{sixteenPx:!0}),g.isSubmitted&&((j=(f=g.errors[ve])==null?void 0:f.notRegisteredInput)==null?void 0:j.message)&&r.jsx(yr,{children:(b=(F=g.errors[ve])==null?void 0:F.notRegisteredInput)==null?void 0:b.message}),r.jsx(U,{name:`${ve}.sokForSelvstendigNaringsdrivende`,label:r.jsx(c,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),k&&r.jsxs(de,{children:[r.jsx(V,{name:`${ve}.behovsdatoSN`,label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[q],isReadOnly:s}),r.jsx(Xr,{name:`${ve}.${ok}`,readOnly:s})]}),r.jsx(U,{name:`${ve}.sokForFrilans`,label:r.jsx(c,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),v&&r.jsxs(de,{children:[r.jsx(V,{name:`${ve}.behovsdatoFrilans`,label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[q],isReadOnly:s}),r.jsx(Xr,{name:`${ve}.${dk}`,readOnly:s})]}),r.jsx(U,{name:`${ve}.sokForArbeidsgiver`,label:r.jsx(c,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),m&&r.jsx(de,{children:r.jsx(wi,{readOnly:s})})]})})};ga.buildInitialValues=()=>({[ve]:{[gk]:[{}]}});ga.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}}],displayName:"BehovForTilretteleggingPanel"};const mk="_col_hlukm_1",Is={col:mk},Ja="omsorg",Jn=({readOnly:s,soknadData:i,alleKodeverk:o,fodselsdato:d,mottattDato:g})=>r.jsxs(Gs,{justify:"space-between",children:[r.jsxs("div",{className:Is.col,children:[r.jsx(ia,{readOnly:s,soknadData:i}),r.jsx(ye,{readOnly:s,alleKodeverk:o,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,mottattDato:g}),r.jsx(fr,{readOnly:s})]}),r.jsx("div",{className:Is.col,children:r.jsx(kn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:d})})]});Jn.transformValues=s=>({...ye.transformValues(s),[Ja]:kn.transformValues(s[Ja])});Jn.buildInitialValues=()=>({[Ja]:{},...ye.buildInitialValues()});Jn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"omsorg",value:{name:"TransformedFormValues",required:!1}}]}}]}}},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringAdopsjonOgOmsorgGrid"};const kk="_col_hlukm_1",Ds={col:kk},Xa="omsorg",Xn=({readOnly:s,soknadData:i,alleKodeverk:o,fodselsdato:d,mottattDato:g})=>r.jsxs(Gs,{justify:"space-between",children:[r.jsxs("div",{className:Ds.col,children:[i.getForeldreType()!==Ln.MOR&&r.jsx(ia,{readOnly:s,soknadData:i}),r.jsx(ye,{readOnly:s,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,alleKodeverk:o,mottattDato:g}),r.jsx(fr,{readOnly:s})]}),r.jsxs("div",{className:Ds.col,children:[i.getForeldreType()!==Ln.MOR&&r.jsx(kn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:d}),r.jsx(lt,{readOnly:s,erForeldrepenger:!1})]})]});Xn.transformValues=s=>({...ye.transformValues(s),[Xa]:kn.transformValues(s[Xa])});Xn.buildInitialValues=()=>({...ye.buildInitialValues(),[Xa]:{}});Xn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringFodselGrid"};const pk=(s,i)=>s?Xn.buildInitialValues():i?Jn.buildInitialValues():{},vk=(s,i,o)=>{let d=s;return s.rettigheter===Dn.IKKE_RELEVANT&&(d=Cs(s,"rettigheter")),{...d,...i?Xn.transformValues(d):{},...o?Jn.transformValues(d):{}}},Pi=({readOnly:s,soknadData:i,alleKodeverk:o,onSubmitUfullstendigsoknad:d,onSubmit:g})=>{const k=i.getFamilieHendelseType()===se.FODSEL,v=i.getFamilieHendelseType()===se.ADOPSJON,m=pr({defaultValues:pk(k,v)}),h=m.watch("foedselsDato"),f=m.watch("mottattDato");return r.jsxs(vr,{formMethods:m,onSubmit:j=>g(vk(j,k,v)),children:[r.jsx(ta,{readOnly:s}),k&&r.jsx(Xn,{soknadData:i,readOnly:s,alleKodeverk:o,fodselsdato:h,mottattDato:f}),v&&r.jsx(Jn,{soknadData:i,readOnly:s,alleKodeverk:o,fodselsdato:h,mottattDato:f}),r.jsx(aa,{readOnly:s,submitting:m.formState.isSubmitting,onSubmitUfullstendigsoknad:d})]})};Pi.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const _i=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g})=>r.jsx(Pi,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g});_i.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Za="omsorg",Qa="frilans",yk=s=>({[Qa]:en.buildInitialValues(),...Qe.buildInitialValues(s),...Hn.buildInitialValues(),[Za]:{},...ye.buildInitialValues(),...zn.buildInitialValues()}),fk=(s,i)=>{let o=s;return s.rettigheter===Dn.IKKE_RELEVANT&&(o=Cs(s,"rettigheter")),{...ye.transformValues(o),[Za]:kn.transformValues(o[Za]),[mn]:Qe.transformValues(o,i),[be]:zn.transformValues(o),[Qa]:en.transformValues(o[Qa])}},xi=({readOnly:s,soknadData:i,alleKodeverk:o,onSubmit:d,onSubmitUfullstendigsoknad:g,fagsakPersonnummer:k,erEndringssøknad:v})=>{const m=pr({defaultValues:E.useMemo(()=>yk(o[ee.ARBEID_TYPE]),[])}),h=o[ee.ARBEID_TYPE],f=m.watch("sokerHarAleneomsorg"),j=m.watch("denAndreForelderenHarRettPaForeldrepenger"),F=!f&&j!==!1,b=m.watch("foedselsDato"),w=m.watch("mottattDato");return r.jsxs(vr,{formMethods:m,onSubmit:A=>d(fk(A,h)),children:[r.jsx(ta,{readOnly:s}),r.jsx(ye,{readOnly:s,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,alleKodeverk:o,mottattDato:w}),r.jsx(Hn,{readOnly:s,alleKodeverk:o}),r.jsx(ot,{readOnly:s,alleKodeverk:o}),r.jsx(en,{readOnly:s}),r.jsx(Qe,{readOnly:s,alleKodeverk:o}),r.jsx(fi,{readOnly:s}),i.getFamilieHendelseType()===se.FODSEL&&r.jsx(lt,{readOnly:s,erForeldrepenger:!0}),r.jsx(ia,{readOnly:s,soknadData:i}),r.jsx(kn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),fodselsdato:b,isForeldrepengerFagsak:!0}),r.jsx(Js,{readOnly:s,permisjonRettigheterPanel:r.jsx(ci,{readOnly:s,denAndreForelderenHarRettPaForeldrepenger:j,sokerErMor:i.getForeldreType()===Ln.MOR}),alleKodeverk:o,fagsakPersonnummer:k}),r.jsx(zn,{foreldreType:i.getForeldreType(),readOnly:s,alleKodeverk:o,erEndringssøknad:v}),r.jsx(hi,{annenForelderInformertRequired:F,readOnly:s}),r.jsx(fr,{readOnly:s}),r.jsx(aa,{readOnly:s,onSubmitUfullstendigsoknad:g,submitting:m.formState.isSubmitting})]})};xi.__docgenInfo={description:`ForeldrepengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const Si=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g,fagsakPersonnummer:k,erEndringssøknad:v})=>r.jsx(xi,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g,fagsakPersonnummer:k,erEndringssøknad:v});Si.__docgenInfo={description:"",methods:[],displayName:"ForeldrepengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const et="frilans",hk=s=>({...Qe.buildInitialValues(s),...Hn.buildInitialValues(),...ye.buildInitialValues(),...ga.buildInitialValues(),[et]:en.buildInitialValues()}),ck=s=>{let i=[];const{tilretteleggingArbeidsforhold:o}=s;return o!=null&&o.sokForArbeidsgiver&&(o!=null&&o.tilretteleggingForArbeidsgiver)&&(i=i.concat(o.tilretteleggingForArbeidsgiver.map(d=>({"@type":"VI",behovsdato:d.behovsdato,organisasjonsnummer:d.organisasjonsnummer,tilrettelegginger:d.tilretteleggingArbeidsgiver})))),o!=null&&o.sokForFrilans&&i.push({"@type":"FR",behovsdato:o.behovsdatoFrilans,tilrettelegginger:o.tilretteleggingFrilans}),o!=null&&o.sokForSelvstendigNaringsdrivende&&i.push({"@type":"SN",behovsdato:o.behovsdatoSN,tilrettelegginger:o.tilretteleggingSelvstendigNaringsdrivende}),i},bk=(s,i)=>({...ye.transformValues(s),foedselsDato:s.foedselsDato,tilretteleggingArbeidsforhold:ck(s),[et]:en.transformValues(s[et]),[mn]:Qe.transformValues(s,i)}),Oi=({readOnly:s,soknadData:i,alleKodeverk:o,onSubmit:d,onSubmitUfullstendigsoknad:g})=>{const k=pr({defaultValues:E.useMemo(()=>hk(o[ee.ARBEID_TYPE]),[])}),v=o[ee.ARBEID_TYPE],m=k.watch("mottattDato");return r.jsxs(vr,{formMethods:k,onSubmit:h=>d(bk(h,v)),children:[r.jsx(ta,{readOnly:s}),r.jsx(ye,{readOnly:s,alleKodeverk:o,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,mottattDato:m}),r.jsx(Hn,{readOnly:s,alleKodeverk:o}),r.jsx(ot,{readOnly:s,alleKodeverk:o}),r.jsx(en,{readOnly:s}),r.jsx(Qe,{readOnly:s,kunMiliterEllerSiviltjeneste:!0,alleKodeverk:o}),r.jsx(Fi,{readOnly:s}),r.jsx(ga,{readOnly:s}),r.jsx(fr,{readOnly:s}),r.jsx(aa,{readOnly:s,onSubmitUfullstendigsoknad:g,submitting:k.formState.isSubmitting})]})};Oi.__docgenInfo={description:`SvangerskapspengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const ut={"Registrering.RegistrereSoknad":"Registrere søknad","Registrering.RegistrerAlleOpplysninger":"Registrer inn alle opplysninger fra papirsøknaden","Registrering.Omsoknaden.Title":"Om søknaden","Registrering.Omsoknaden.soknadstype":"Søknadstype","Registrering.Omsoknaden.Tema":"Tema","Registrering.Omsoknaden.Soker":"Søker","Registrering.Omsoknaden.VisSkjema":"Vis skjema","SoknadRegistrertModal.ContentLabel":"Søknaden er registrert. Du kommer nå til forsiden.","SoknadRegistrertModal.InfoTextOne":"Søknaden er registrert og vil bli behandlet","SoknadRegistrertModal.InfoTextTwo":"Du kommer nå til forsiden","SoknadRegistrertModal.OkButtonText":"OK"},jk=re(ut),Ni=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g})=>r.jsx(ke,{value:jk,children:r.jsx(Oi,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g})});Ni.__docgenInfo={description:"",methods:[],displayName:"SvangerskapspengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Rk="_container_10p07_1",Tk="_colWidth_10p07_5",Ak="_pushRight_10p07_9",or={container:Rk,colWidth:Tk,pushRight:Ak},qk=[se.ADOPSJON,se.FODSEL],Ei=({setSoknadData:s,fagsakYtelseType:i,alleKodeverk:o})=>{const d=E.useMemo(()=>({fagsakYtelseType:i,familieHendelseType:void 0,foreldreType:void 0}),[i]),g=pr({defaultValues:d}),k=g.watch("fagsakYtelseType"),v=E.useCallback(j=>s(new ak(j.fagsakYtelseType,j.familieHendelseType,j.foreldreType)),[s]),m=o[ee.FAGSAK_YTELSE],h=o[ee.FAMILIE_HENDELSE_TYPE],f=o[ee.FORELDRE_TYPE];return r.jsx(vr,{formMethods:g,onSubmit:v,children:r.jsxs(oe,{className:or.container,children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Omsoknaden.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsxs(T,{className:or.colWidth,children:[r.jsx(Xe,{children:r.jsx(c,{id:"Registrering.Omsoknaden.soknadstype"})}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:"fagsakYtelseType",validate:[q],radios:m.map(j=>({label:j.navn,value:j.kode,disabled:!!i}))})]}),r.jsxs(T,{className:or.colWidth,children:[r.jsx(Xe,{children:r.jsx(c,{id:"Registrering.Omsoknaden.Tema"})}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:"familieHendelseType",validate:k===ss.SVANGERSKAPSPENGER?[]:[q],radios:h.filter(({kode:j})=>qk.includes(j)).map(j=>({label:j.navn,value:j.kode,disabled:k===ss.SVANGERSKAPSPENGER}))})]}),r.jsxs(T,{className:or.colWidth,children:[r.jsx(Xe,{children:r.jsx(c,{id:"Registrering.Omsoknaden.Soker"})}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:"foreldreType",validate:[q],radios:f.map(j=>({label:j.navn,value:j.kode}))})]})]})}),r.jsx(y,{thirtyTwoPx:!0}),r.jsx("div",{className:or.pushRight,children:r.jsx(Be,{size:"small",variant:"primary",onClick:Us,disabled:g.formState.isSubmitting||g.formState.isSubmitted,children:r.jsx(c,{id:"Registrering.Omsoknaden.VisSkjema"})})})]})})};Ei.__docgenInfo={description:`SoknadTypePickerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Fk="_panel_nx0ko_1",wk={panel:Fk},Pk=re(ut),Vi=({fagsak:s,kodeverk:i,readOnly:o,lagreUfullstendig:d,lagreFullstendig:g,erEndringssøknad:k})=>{const[v,m]=E.useState(),h=E.useCallback(j=>(v&&g(j,v.fagsakYtelseType,v.familieHendelseType,v.foreldreType),Promise.resolve()),[v]),f=E.useCallback(()=>(v&&d(v.fagsakYtelseType,v.familieHendelseType,v.foreldreType),Promise.resolve()),[v]);return r.jsx(ke,{value:Pk,children:r.jsxs(Yu,{className:wk.panel,children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.RegistrereSoknad"})}),r.jsx(y,{sixteenPx:!0}),!o&&r.jsx(Uu,{children:r.jsx(c,{id:"Registrering.RegistrerAlleOpplysninger"},"regOpplysninger")}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{sixteenPx:!0}),r.jsx(Ei,{setSoknadData:m,fagsakYtelseType:s.fagsakYtelseType,alleKodeverk:i}),v&&v.getFagsakYtelseType()===Wr.ENGANGSSTONAD&&r.jsx(_i,{onSubmitUfullstendigsoknad:f,onSubmit:h,readOnly:o,soknadData:v,alleKodeverk:i}),v&&v.getFagsakYtelseType()===Wr.FORELDREPENGER&&r.jsx(Si,{onSubmitUfullstendigsoknad:f,onSubmit:h,readOnly:o,soknadData:v,alleKodeverk:i,fagsakPersonnummer:s.bruker.fødselsnummer,erEndringssøknad:k}),v&&v.getFagsakYtelseType()===Wr.SVANGERSKAPSPENGER&&r.jsx(Ni,{onSubmitUfullstendigsoknad:f,onSubmit:h,readOnly:o,soknadData:v,alleKodeverk:i})]})})};Vi.__docgenInfo={description:"",methods:[],displayName:"RegistrerPapirsoknadPanel",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
) => Promise<any>`,signature:{arguments:[{type:{name:"any"},name:"formValues"},{type:{name:"string"},name:"fagsakYtelseType"},{type:{name:"string"},name:"familieHendelseType"},{type:{name:"string"},name:"foreldreType"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const _k="_alertStyle_1d8gt_1",xk="_modalStyle_1d8gt_6",Sk="_fullWidth_1d8gt_11",Ok="_reduceMargin_1d8gt_16",Nk="_left_1d8gt_20",Ek="_right_1d8gt_24",Mn={alertStyle:_k,modalStyle:xk,fullWidth:Sk,reduceMargin:Ok,left:Nk,right:Ek},Cr=re(ut),Mi=({isOpen:s=!1})=>r.jsx(Je,{className:Mn.modalStyle,open:s,"aria-label":Cr.formatMessage({id:"SoknadRegistrertModal.ContentLabel"}),onClose:()=>{},children:r.jsx(Je.Body,{children:r.jsxs(Qr,{size:"small",variant:"success",className:Mn.alertStyle,children:[r.jsxs("div",{className:Mn.left,children:[r.jsx("p",{className:Mn.reduceMargin,children:Cr.formatMessage({id:"SoknadRegistrertModal.InfoTextOne"})}),r.jsx("p",{className:Mn.reduceMargin,children:Cr.formatMessage({id:"SoknadRegistrertModal.InfoTextTwo"})})]}),r.jsx("div",{className:Mn.right,children:r.jsx(Ls,{to:"/",children:r.jsx(Be,{size:"small",variant:"primary",children:Cr.formatMessage({id:"SoknadRegistrertModal.OkButtonText"})})})})]})})});Mi.__docgenInfo={description:`SoknadRegistrertModal

Informasjonsmodal som vises til saksbehandler når en papirsøknad har blitt registrert.`,methods:[],displayName:"SoknadRegistrertModal",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Vk=s=>s.map(i=>i.definisjon).filter(i=>i===dr.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD||i===dr.REGISTRER_PAPIRSOKNAD_FORELDREPENGER||i===dr.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER||i===dr.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER)[0],Mk=(s,i,o,d)=>(g,k,v,m)=>{const h=[{"@type":Vk(s.aksjonspunkt),tema:v,soknadstype:k,soker:m,...g}],f={saksnummer:i.saksnummer,behandlingUuid:s.uuid,behandlingVersjon:s.versjon,bekreftedeAksjonspunktDtoer:h};return o(f).then(j=>{var F;((F=j==null?void 0:j.taskStatus)==null?void 0:F.status)!==ig.HALTED&&d(!0)})},Ii=({fagsak:s,behandling:i,kodeverk:o,rettigheter:d,lagreAksjonspunkt:g})=>{const[k,v]=E.useState(!1),m=!d.writeAccess.isEnabled||i.behandlingPaaVent,h=E.useMemo(()=>Mk(i,s,g,v),[i,s,g,v]),f=E.useCallback((w,A,S)=>h({ufullstendigSoeknad:!0},w,A,S),[h]),j=rg(),F=E.useCallback(()=>{j("/")},[]);if(!i.aksjonspunkt)return r.jsx($u,{});const b=i.aksjonspunkt.some(w=>w.definisjon===dr.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER);return r.jsxs(r.Fragment,{children:[r.jsx(ag,{behandling:i,kodeverk:o,opneSokeside:F}),r.jsx(Mi,{isOpen:k}),r.jsx(Vi,{fagsak:s,kodeverk:o,readOnly:m,lagreUfullstendig:f,lagreFullstendig:h,erEndringssøknad:b})]})};Ii.__docgenInfo={description:`RegisterPapirsoknad

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
}>`}]},{name:"undefined"}]}],raw:"Promise<Behandling | undefined>"}}},description:""}}};const Ik=(s,i)=>{E.useEffect(()=>{i&&s(i)},[i])},Dk=({behandling:s,setBehandling:i,kodeverk:o,fagsak:d,rettigheter:g})=>{const{startRequest:k,data:v}=tg.useRestApiRunner(sg.SAVE_AKSJONSPUNKT);return Ik(i,v),r.jsx(Ii,{behandling:s,fagsak:d,kodeverk:o,rettigheter:g,lagreAksjonspunkt:k})};Dk.__docgenInfo={description:"",methods:[],displayName:"BehandlingPapirsoknadIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}}]}},description:""}}};export{Dk as default};
