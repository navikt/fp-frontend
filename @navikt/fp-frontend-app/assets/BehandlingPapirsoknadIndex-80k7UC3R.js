var Mu=Object.defineProperty;var Iu=(s,i,o)=>i in s?Mu(s,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[i]=o;var Dr=(s,i,o)=>Iu(s,typeof i!="symbol"?i+"":i,o);import{a as H,j as r,H as ne,t as re,P as ke,L as me,E as An,D as Ze,M as Xe,B as Ds,c as Be,k as kr,g as Bs,aj as Ka,b as Ks,e as Ls}from"./index.es-Bg9YMhRD.js";import{r as V,R as Zr,c as Du,g as Bu}from"./index-CDs2tPxN.js";import{W as Q,H as L,L as T,y,k as oe,M as c,O as de,A as Qr,S as Ku,K as nt,P as Lu,v as Yu,F as Uu}from"./index.es-Bl2tIkhF.js";import{u as Y,x as he,af as Oe,P as E,a as q,d as M,o as qe,y as Se,K as ee,v as ie,O as le,aj as $u,U as Ys,ak as Hu,F as U,c as fe,Q as gn,_ as Kn,t as Us,N as pr,n as Ke,I as rt,al as $s,M as Hs,Z as at,e as Gs,am as se,an as Gu,ac as Yn,ao as Cu,ap as Wu,aq as zu,f as vr,Y as yr,W as ts,w as Ju,a9 as Wa,ar as Xu,as as Zu,at as Qu,L as ss,au as eg,H as dr,D as ng,r as rg,B as ag}from"./AppIndex.stories-CH0HvAv7.js";import{A as tg}from"./useRestApiRunner-CK1iwAgS.js";import{I as sg,z as Wr}from"./index.es-zhgnUGpN.js";import{l as tt}from"./landkoder-T-1RG3zx.js";import{c as ig}from"./bind-DK9GJUjU.js";import{u as on}from"./uttakPeriodeType-S-1j3cKx.js";import{c as lg}from"./_commonjs-dynamic-modules-TDtrdbi3.js";import{o as Br}from"./oppholdArsakType-mAEpEtTn.js";import{t as En}from"./tilretteleggingType-DxzN8sbp.js";import"./index-DJBsjIQp.js";import"./index.es-DAQFkm33.js";import"./iframe-BixXTXW6.js";import"../sb-preview/runtime.js";import"./SettPaVentReadOnlyModal-C-8rxL_A.js";import"./index-27BIJqHF.js";import"./nb_NO-BJoZJvs2.js";const Tn={FISKER:"FISKER",ARBEIDSTAKER:"ARBEIDSTAKER",SELVSTENDIG_NAERINGSDRIVENDE:"SELVSTENDIG_NÆRINGSDRIVENDE",KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NAERINGSDRIVENDE:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",SJOMANN:"SJØMANN",JORDBRUKER:"JORDBRUKER",DAGPENGER:"DAGPENGER",INAKTIV:"INAKTIV",KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",KOMBINASJON_ARBEIDSTAKER_OG_FISKER:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",FRILANSER:"FRILANSER",KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",DAGMAMMA:"DAGMAMMA",ANNET:"ANNET"},Kr={LONN_UNDER_UTDANNING:"LØNN_UNDER_UTDANNING",UTENLANDSK_ARBEIDSFORHOLD:"UTENLANDSK_ARBEIDSFORHOLD",FRILANSER:"FRILANSER",MILITÆR_ELLER_SIVILTJENESTE:"MILITÆR_ELLER_SIVILTJENESTE"},Ln={MOR:"MOR",FAR:"FAR",MEDMOR:"MEDMOR",MEDFAR:"MEDFAR",TREDJE_PART:"TREDJE_PART"},La={UKJENT_FORELDER:"UKJENT_FORELDER",IKKE_NORSK_FNR:"IKKE_NORSK_FNR"},ur={FISKE:"FISKE",FRILANSER:"FRILANSER",DAGMAMMA:"DAGMAMMA",JORDBRUK_ELLER_SKOGBRUK:"JORDBRUK_SKOGBRUK",ANNEN:"ANNEN"},zr={INSTITUSJONSOPPHOLD_ANNEN_FORELDER:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",SYKDOM_ANNEN_FORELDER:"SYKDOM_ANNEN_FORELDER",ALENEOMSORG:"ALENEOMSORG",IKKE_RETT_ANNEN_FORELDER:"IKKE_RETT_ANNEN_FORELDER",UDEFINERT:"-"},og="_notLastRow_7c46s_1",dg={notLastRow:og},mn="andreYtelser",st="PERIODER",Lr=(s,i)=>s(i),ea=({readOnly:s,name:i})=>{const o=H(),{getValues:d,control:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:h,append:f}=he({control:g,name:`${mn}.${i}`});return r.jsx(Oe,{fields:m,bodyText:o.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:s,append:f,remove:h,children:(j,F,b)=>{const w=`${mn}.${i}.${F}`;return r.jsxs("div",{children:[r.jsx("div",{className:F!==m.length-1?dg.notLastRow:"",children:r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:`${w}.periodeFom`,label:F===0?o.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[q,M,()=>{const A=Lr(d,`${w}.periodeFom`),S=Lr(d,`${w}.periodeTom`);return S&&A?qe(S)(A):null}],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${w}.periodeTom`,label:F===0?o.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[q,M,()=>{const A=Lr(d,`${w}.periodeFom`),S=Lr(d,`${w}.periodeTom`);return S&&A?Se(A)(S):null}],onChange:()=>v?k():void 0})}),b&&r.jsx(T,{children:b()})]})})}),r.jsx(y,{sixteenPx:!0})]},j.id)}})};ea.transformValues=(s,i)=>s.map(o=>({ytelseType:i,periodeFom:o.periodeFom,periodeTom:o.periodeTom}));ea.__docgenInfo={description:`RenderAndreYtelserPerioderFieldArray

Viser inputfelter for fra og til dato for perioder for andre ytelser`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"FormValues[]"}},{name:"ytelseType",optional:!1,type:{name:"string"}}],returns:{type:{name:"any"}}}],displayName:"RenderAndreYtelserPerioderFieldArray"};const Cs=(s,i)=>i?s.filter(o=>o.kode===Kr.MILITÆR_ELLER_SIVILTJENESTE):s.filter(o=>o.kode!==Kr.UTENLANDSK_ARBEIDSFORHOLD&&o.kode!==Kr.FRILANSER&&o.kode!==Kr.LONN_UNDER_UTDANNING),Un=({readOnly:s,kunMiliterEllerSiviltjeneste:i=!1,alleKodeverk:o})=>{const{watch:d}=Y(),g=d(mn),k=o[ee.ARBEID_TYPE],v=V.useMemo(()=>Cs(k,i),[i]);return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.AndreYtelser.Title"})}),r.jsx(y,{sixteenPx:!0}),v.map(m=>{const h=`${m.kode}_${st}`;return r.jsxs(Zr.Fragment,{children:[r.jsx(ie,{name:`${mn}.${m.kode}`,label:m.navn,readOnly:s},m.kode),g&&g[m.kode]&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{children:r.jsx(ea,{name:h,readOnly:s})})]})]},m.kode)})]})};Un.buildInitialValues=s=>{const i={};return Cs(s).forEach(o=>{const d=`${o.kode}_${st}`;i[d]=[{}]}),{[mn]:i}};Un.transformValues=(s,i)=>{const o=s[mn],d=[];return i.filter(g=>o&&o[g.kode]).forEach(g=>{const k=`${g.kode}_${st}`,v=o?o[k]:void 0;v&&ea.transformValues(v,g.kode).forEach(m=>d.push(m))}),d};Un.__docgenInfo={description:`AndreYtelserPanel

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
}>`}],raw:"KodeverkMedNavn[]"}}],returns:{type:{name:"any"}}}],displayName:"AndreYtelserPanel",props:{kunMiliterEllerSiviltjeneste:{defaultValue:{value:"false",computed:!1},required:!1}}};const ue={"Registrering.AndreYtelser.periodeTom":"T.o.m.","Registrering.AndreYtelser.periodeFom":"F.o.m.","Registrering.AndreYtelser.Title":"Andre inntektskilder","Registrering.TheOtherParent.CannotSpecifyOtherParent":"Kan ikke oppgi annen forelder","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title":"Angi årsak","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1":"Forelder er ukjent","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2":"Har ikke norsk f.nr. eller d-nr.","Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer":"Utenlandsk fødselsnummer","Registrering.TheOtherParent.CannotSpecifyOtherParent.Land":"Land","Registrering.TheOtherParent.Title":"Den andre forelderen","Registrering.TheOtherParent.Fodselsnummer":"Fødselsnummer/D-nummer","Registrering.Permisjon.SøkerHarAleneomsorg":"Har søker aleneomsorg for barnet?","Registrering.Permisjon.SøkerHarAleneomsorg.Yes":"Ja","Registrering.Permisjon.SøkerHarAleneomsorg.No":"Nei","Registrering.Permisjon.HarRettPaForeldrepenger":"Har den andre forelderen rett på foreldrepenger?","Registrering.Permisjon.HarRettPaForeldrepenger.Yes":"Ja","Registrering.Permisjon.HarRettPaForeldrepenger.No":"Nei","Registrering.Permisjon.MorUføretrygd":"Bare far rett og mor mottar uføretryd?","Registrering.Permisjon.MorUføretrygd.Yes":"Ja","Registrering.Permisjon.MorUføretrygd.No":"Nei","Registrering.Permisjon.AnnenForelderRettEØS":"Annen forelder har tilstrekkelig opptjening fra land i EØS?","Registrering.Permisjon.AnnenForelderRettEØS.Yes":"Ja","Registrering.Permisjon.AnnenForelderRettEØS.No":"Nei","Registrering.TerminOgFodsel":"Opplysninger om termin og fødsel","Registrering.Termin.Fodt":"Er barnet født?","Registrering.Fodsel.ErFodt":"Ja","Registrering.Fodsel.ErIkkeFodt":"Nei","Registrering.Termindato":"Termindato","Registrering.AntallBarn":"Antall barn","Registrering.UtstedtDato":"Utstedt dato fra terminbekreftelsen","Registrering.Fodselsdato":"Når ble barnet født?","Registrering.RettTilPrematuruker":"Rett til prematuruker vil kun sjekkes når du også oppgir termindato","Registrering.Frilans.Title":"Frilanser","Registrering.Frilans.HarFrilansvirksomhet":"Har søker periode med frilansvirksomhet?","Registrering.Frilans.OppgiPeriode":"Oppgi periode med frilansvirksomhet","Registrering.Frilans.Yes":"Ja","Registrering.Frilans.No":"Nei","Registrering.Frilans.periodeTom":"T.o.m.","Registrering.Frilans.periodeFom":"F.o.m.","Registrering.Frilans.ErNyoppstartedFrilanser":"Er søker nyoppstartet frilanser?","Registrering.Frilans.HarInntektFraForsterhjem":"Har søker inntekt fra fosterhjem?","Registrering.FrilansOppdrag.HarHattOppdragForFamilie":"Har søker hatt oppdrag for nær familie?","Registrering.FrilansOppdrag.Yes":"Ja","Registrering.FrilansOppdrag.No":"Nei","Registrering.FrilansOppdrag.OppgiPeriode":"Oppgi periode","Registrering.FrilansOppdrag.FieldArray.periodeFom":"F.o.m.","Registrering.FrilansOppdrag.FieldArray.periodeTom":"T.o.m.","Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver":"Oppdragsgiver","Registrering.FrilansOppdrag.FieldArray.NyPeriode":"Legg til periode","Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation":"F.o.m må være lik eller etter dato for første periode med frilansvirksomhet","Registrering.InntektsgivendeArbeid.ArbeidINorge.Title":"Inntektsgivende arbeid i Norge","Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold":"Vedtaksløsningen foretar oppslag av norske arbeidsforhold fra Aa-registeret så dette skal ikke registreres her","Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title":"Inntektsgivende arbeid i utlandet","Registrering.InntektsgivendeArbeid.ArbeidPaAmbassade":"Arbeid som ambassadepersonell i Norge","Registrering.InntektsgivendeArbeid.Arbeidsgiver":"Arbeidsgiver","Registrering.InntektsgivendeArbeid.Virksomhetsnummer":"Virksomhetsnummer","Registrering.InntektsgivendeArbeid.Land":"Land","Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold":"Legg til utenlandsk arbeidsforhold","Registrering.InntektsgivendeArbeid.Yes":"Ja, arbeidsgiver og søker er nære venner eller i familie","Registrering.InntektsgivendeArbeid.No":"Nei, arbeidsgiver og søker er ikke nære venner eller i familie","Registrering.InntektsgivendeArbeid.Relasjon":"Relasjon","Registrering.InntektsgivendeArbeid.Placeholder":"Placeholder - Oppslag av arbeidsforhold","Registrering.InntektsgivendeArbeid.periodeFom":"Fra og med","Registrering.InntektsgivendeArbeid.periodeTom":"Til og med","ModalLukkPapirSoknad.ModalDescription":"Registrering av søknaden avsluttes","ModalLukkPapirSoknad.Avslutt":"Avslutt registrering av søknaden","ModalLukkPapirSoknad.AvslutterRegistrering":"Avslutter registrering av søknaden. Det er ikke mulig å innhente ytterligere opplysninger.","ModalLukkPapirSoknad.BekreftAvslag":"Bekreft at søknaden skal avslås","ModalLukkPapirSoknad.Ok":"OK","ModalLukkPapirSoknad.Avbryt":"Avbryt","Registrering.SaveApplication.Title":"Ferdigstill registrering","Registrering.SaveApplication.Description":"Ved endring av opplysningene er begrunnelse obligatorisk","Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt":"Søkers opplysningsplikt er ikke overholdt","Registrering.SaveApplication.EndButton":"Bekreft og avslutt behandling","Registrering.SaveApplication.SaveButton":"Bekreft og fortsett","Registrering.Verge":"Verge/fullmektig skal knyttes til saken","Registrering.Omsoknaden.MottattDato":"Mottatt dato","Registrering.Adopsjon.FodselsdatoBarnN":"Fødselsdato barn {n}","Registrering.Adopsjon.Title":"Adopsjon","Registrering.Adopsjon.OmsorgTitle":"Omsorg","Registrering.Adopsjon.GjelderEktefellesBarn":"Gjelder adopsjon ektefelles/samboers barn?","Registrering.Adopsjon.Ja":"Ja","Registrering.Adopsjon.Nei":"Nei","Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Dato for omsorgsovertakelse/stebarnsadopsjon","Registrering.Adopsjon.DatoForOvertakelsen":"Dato for omsorgsovertakelsen","Registrering.Adopsjon.Ankomstdato":"Ankomstdato","Registrering.Adopsjon.AntallBarn":"Antall barn","Registrering.RegistreringOpphold.AngiOpphold":"Oppgi hvilket land og i hvilken periode","Registrering.RegistreringOpphold.Add":"Legg til","Registrering.RegistreringOpphold.periodeFom":"F.o.m.","Registrering.RegistreringOpphold.periodeTom":"T.o.m.","Registrering.RegistreringOpphold.Country":"Land","Registrering.Opphold":"Opphold i Norge","Registrering.OppholdVedAdopsjon":"Søker oppholder seg i Norge nå","Registrering.Opphold.Yes":"Ja","Registrering.Opphold.No":"Nei","Registrering.OppholdVedFodsel":"Bor i Norge ved fødselstidspunktet","Registrering.OppholdNesteTolv":"Bor i Norge de neste 12 månedene","Registrering.OppholdSisteTolv":"Bodd i Norge de siste 12 månedene","Registrering.Rettigheter.AnnenForelderDoed":"Den andre forelderen er død","Registrering.Rettigheter.OvertaForeldreansvaretAlene":"Omsorgen er overtatt med sikte på å overta foreldreansvaret alene","Registrering.Rettigheter.MannAdoptererAlene":"Mann adopterer alene","Registrering.Rettigheter.IkkeRelevant":"Ikke relevant","Registrering.Rettigheter.Title":"Rettigheter","Registrering.Sprak":"Språk","Registrering.Sprak.Bokmal":"Bokmål","Registrering.Sprak.Nynorsk":"Nynorsk","Registrering.Sprak.Engelsk":"Engelsk","Registrering.VirksomhetNaeringTypePanel.Title":"Type næringsvirksomhet","Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet":"Er søker ny i arbeidslivet","Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged":"Er virksomheten blitt varig endret, nyoppstartet eller er søker ny i arbeidslivet?","Registrering.VirksomhetStartetPanel.Yes":"Ja","Registrering.VirksomhetStartetPanel.No":"Nei","Registrering.VirksomhetStartetPanel.Reason":"Årsak","Registrering.VirksomhetStartetPanel.HarVarigEndring":"Varig endring i næring","Registrering.VirksomhetStartetPanel.GjeldendeFom":"Gjeldende f.o.m.","Registrering.VirksomhetStartetPanel.ErNyoppstartet":"Nyoppstartet næring","Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse":"Beskriv endringen i næring","Registrering.VirksomhetStartetPanel.Inntekt":"Årsinntekt","Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak":"Må fylle ut minst en årsak","Registrering.VirksomhetRelasjonPanel.Relation":"Relasjon","Registrering.VirksomhetRelasjonPanel.No":"Nei, har ikke nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRelasjonPanel.Yes":"Ja, har nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRegnskapPanel.Accountant":"Har søker regnskapsfører eller revisor?","Registrering.VirksomhetRegnskapPanel.Yes":"Ja","Registrering.VirksomhetRegnskapPanel.No":"Nei","Registrering.VirksomhetRegnskapPanel.AccountantName":"Navn på regnskapsfører/revisor?","Registrering.VirksomhetRegnskapPanel.AccountantPhone":"Telefonnummer til regnskapsfører/revisor?","Registrering.VirksomhetIdentifikasjonPanel.Name":"Navn på foretaket","Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway":"Er næringsvirksomheten registrert i Norge","Registrering.VirksomhetIdentifikasjonPanel.No":"Nei","Registrering.VirksomhetIdentifikasjonPanel.Yes":"Ja","Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber":"Virksomhetsnummer","Registrering.VirksomhetIdentifikasjonPanel.Country":"Hvilket land er virksomheten registrert i?","Registrering.VirksomhetIdentifikasjonPanel.periodeFom":"Fra og med","Registrering.VirksomhetIdentifikasjonPanel.periodeTom":"Til og med","Registrering.EgenVirksomhet.Title":"Egen næringsvirksomhet","Registrering.EgenVirksomhet.Yes":"Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.EgenVirksomhet.No":"Nei, søker har ikke arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.RegistrerVirksomhetPanel.Add":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetPanel.Name":"Navn på virksomhet","Registrering.RegistrerVirksomhetPanel.ArrayMinLength":"Listen må ha lengde større enn 1","Registrering.RegistrerVirksomhetModalForm.ModalDescription":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetModalForm.Title":"Egen næringsvirksomhet","Registrering.RegistrerVirksomhetModalForm.Save":"Lagre","Registrering.RegistrerVirksomhetModalForm.Cancel":"Avbryt","BehovForTilretteleggingPanel.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilretteleggingPanel.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende":"Søkes det om svangerskapspenger som selvstendig næringsdrivende?","BehovForTilretteleggingPanel.Ja":"Ja","BehovForTilretteleggingPanel.Nei":"Nei","BehovForTilretteleggingPanel.SokForFrilans":"Søkes det om svangerskapspenger som frilanser?","BehovForTilretteleggingPanel.SokForArbeidsgiver":"Søkes det om svangerskapspenger som arbeidstaker?","BehovForTilretteleggingPanel.MinstEnMaaVereJa":"Minst ett av spørsmålene må besvares med alternativ Ja","BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov":"Legg til tilretteleggingsbehov","BehovForTilrettteleggingFieldArray.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilrettteleggingFieldArray.FraDato":"Fra dato","BehovForTilrettteleggingFieldArray.Stillingsprosent":"Stillingsprosent","BehovForTilrettteleggingFieldArray.KanGjennomfores":"a) kan gjennomføres slik at arbeidstakeren kan fortsette med samme stilling fra og med","BehovForTilrettteleggingFieldArray.RedusertArbeid":"b) kan gjennomføres slik at arbeidstakeren kan fortsette med redusert arbeidstid fra og med","BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores":"c) kan ikke gjennomføres og arbeidstakeren må midlertidig gå ut av sitt arbeid fra og med","TilretteleggingForArbeidsgiverFieldArray.OrgNr":"Arbeidsgivers orgnr/fnr","TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver":"Legg til arbeidsgiver","TerminFodselSvpPanel.TerminOgFodsel":"Opplysninger om termin og fødsel","TerminFodselSvpPanel.Termindato":"Termindato","TerminFodselSvpPanel.Fodselsdato":"Fødselsdato","Registrering.Dekningsgrad.Title":"Dekningsgrad","Registrering.Dekningsgrad.prosent.80":"80 prosent","Registrering.Dekningsgrad.prosent.100":"100 prosent","Registrering.Permisjon.Title":"Tidsrom for permisjon","Registrering.Permisjon.PermisjonForFodsel":"Permisjon før fødsel","Registrering.Permisjon.PerioderForeldrepenger":"Perioder med permisjon med foreldrepenger","Registrering.Permisjon.FulltUttak":"Fullt uttak","Registrering.Permisjon.FedrekvoteEllerMedmorkvote":"Fedrekvote eller kvote til medmor","Registrering.Permisjon.AngiPeriode":"Angi periode","Registrering.Permisjon.periodeType":"Periodetype","Registrering.Permisjon.nyPeriode":"Legg til periode","Registrering.Permisjon.periodeFom":"F.o.m.","Registrering.Permisjon.periodeTom":"T.o.m.","Registrering.Permisjon.SamtidigUttaksprosent":"Prosentandel uttak","Registrering.Permisjon.ArbeidskategoriLabel":"Type arbeid","Registrering.Permisjon.ErArbeidstaker":"Arbeidstaker","Registrering.Permisjon.ErIkkeArbeidstaker":"Selvstendig næringsdrivende/frilanser","Registrering.Permisjon.Orgnr":"Virksomhetsnummer","Registrering.Permisjon.OverforingAvKvote.OvertaKvoten":"Overføring av kvote","Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak":"Angi årsak","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt":"Mor er innlagt på helseinstitusjon","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk":"Mor er pga sykdom avhengig av hjelp for å ta seg av barnet/barna","Registrering.Permisjon.OverforingAvKvote.OvertaKvote":"Søker ønsker å overta kvote","Registrering.Permisjon.OverforingAvKvote.fomDato":"F.o.m.","Registrering.Permisjon.OverforingAvKvote.tomDato":"T.o.m.","Registrering.Permisjon.Fellesperioden":"Fellesperioden","Registrering.Permisjon.Fellesperiode.Yes":"Ja","Registrering.Permisjon.Fellesperiode.No":"Nei","Registrering.Permisjon.Fellesperiode.ForeldrepengerTilFarEllerMedmor":"Skal far eller medmor ha foreldrepenger fra fellesperioden?","Registrering.Permisjon.Fellesperiode.periodeFom":"Fellesperiode F.o.m.","Registrering.Permisjon.Fellesperiode.periodeTom":"Fellesperiode T.o.m.","Registrering.Permisjon.Fellesperiode.morsAktivitet":"Mors aktivitet","Registrering.Permisjon.MorBorSammenFaren":"Mor bor sammen med faren til barnet","Registrering.Permisjon.Mor.Yes":"Ja","Registrering.Permisjon.Mor.No":"Nei","Registrering.Permisjon.HarSamtidigUttak":"Samtidig uttak","Registrering.Permisjon.Flerbarnsdager":"Flerbarnsdager","Registrering.Permisjon.UttakStartdato":"Når skal uttak av foreldrepenger starte?","Registrering.Permisjon.HeleModrekvotenUmiddelbart":"Skal hele mødrekvoten tas ut umiddelbart etter fødsel?","Registrering.Permisjon.HeleFellesperiodenUmiddelbart":"Skal hele fellesperioden tas ut umiddelbart etter mødrekvoten?","Registrering.Permisjon.Utsettelse.Title":"Utsettelse","Registrering.Permisjon.Utsettelse.Periode":"Hva skal utsettes","Registrering.Permisjon.Utsettelse.Arsak":"Årsak til utsettelse","Registrering.Permisjon.Utsettelse.LeggTilPeriode":"Legg til periode for utsettelse","Registrering.Permisjon.Utsettelse.UtsettUttaket":"Søker ønsker å utsette uttaket","Registrering.Permisjon.Opphold.OppholdUttaket":"Søker ønsker opphold i uttaket","Registrering.Permisjon.Opphold.Title":"Opphold","Registrering.Permisjon.Opphold.Periode":"Hva skal annen forelder ta ut?","Registrering.Permisjon.Opphold.Arsak":"Årsak til opphold","Registrering.Permisjon.Opphold.LeggTilPeriode":"Legg til periode med opphold","Registrering.Permisjon.Gradering.Title":"Gradering","Registrering.Permisjon.Gradering.Periode":"Hva skal graderes","Registrering.Permisjon.Gradering.Prosentandel":"Prosentandel arbeid i perioden","Registrering.Permisjon.Gradering.SkalGraderes":"Arbeidsforhold som skal graderes","Registrering.Permisjon.Gradering.LeggTilPeriode":"Legg til periode for gradering","Registrering.Permisjon.Gradering.GraderUttaket":"Søker ønsker å gradere uttaket","Registrering.Permisjon.PeriodeFomForTidlig":"Behandlinger med første uttaksdag før 01.01.2019 skal ikke behandles i vedtaksløsningen","Registrering.TheOtherParent.Confirmation":"Bekreftelse","Registrering.TheOtherParent.OtherParentKnowPeriods":"Annen forelder er kjent med hvilke perioder det er søkt om","Registrering.TheOtherParent.Yes":"Ja","Registrering.TheOtherParent.No":"Nei","PermisjonPanel.MinstEnPeriodeRequired":"Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering","PermisjonPanel.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)"},ug=re(ue),en=({readOnly:s,alleKodeverk:i,kunMiliterEllerSiviltjeneste:o})=>r.jsx(ke,{value:ug,children:r.jsx(Un,{readOnly:s,alleKodeverk:i,kunMiliterEllerSiviltjeneste:o})});en.buildInitialValues=s=>Un.buildInitialValues(s);en.transformValues=(s,i)=>Un.transformValues(s,i);en.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"andreYtelser",optional:!1,type:null}],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null},{name:"andreYtelser",optional:!1,type:null}],returns:null}],displayName:"AndreYtelserPapirsoknadIndex"};const gg="_inputBredde_138ho_1",Ya={inputBredde:gg},hn="annenForelder",Yr="kanIkkeOppgiBegrunnelse",mg=s=>s.filter(({kode:i})=>i!==tt.NORGE).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Ws=({readOnly:s=!0,permisjonRettigheterPanel:i,alleKodeverk:o,fagsakPersonnummer:d})=>{const{formatMessage:g}=H(),{watch:k,trigger:v,formState:{isSubmitted:m}}=Y(),h=k(`${hn}.kanIkkeOppgiAnnenForelder`),f=k(`${hn}.${Yr}`),j=o[ee.LANDKODER],F=V.useMemo(()=>j.slice().sort((b,w)=>b.navn.localeCompare(w.navn)),[j]);return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.TheOtherParent.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:`${hn}.foedselsnummer`,label:g({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:b=>b&&b.toString().replace(/\s/g,""),readOnly:s,className:Ya.inputBredde,validate:h?[]:[q,$u,Ys,b=>b===d?Hu():null],disabled:h}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{name:`${hn}.kanIkkeOppgiAnnenForelder`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:s,onChange:()=>m?v():void 0}),h===!0&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(ne,{size:"small",children:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),r.jsx(U,{name:`${hn}.${Yr}.arsak`,hideLegend:!0,validate:[q],isReadOnly:s,radios:[{label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:La.UKJENT_FORELDER},{label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:La.IKKE_NORSK_FNR}]}),(f==null?void 0:f.arsak)===La.IKKE_NORSK_FNR&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(fe,{name:`${hn}.${Yr}.land`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:mg(F),validate:[q],className:Ya.inputBredde,readOnly:s}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:`${hn}.${Yr}.utenlandskFoedselsnummer`,label:g({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[q],className:Ya.inputBredde,readOnly:s})]})]})]}),r.jsx(y,{sixteenPx:!0}),i]})};Ws.__docgenInfo={description:"",methods:[],displayName:"AnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},permisjonRettigheterPanel:{required:!1,tsType:{name:"ReactNode"},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const is=Us(1),ls=pr(9),Js=()=>Ke().startOf("day"),pg=()=>Js().subtract(3,"weeks"),vg=s=>{const i=pg(),o=s?Ke(s,An):void 0,d=Js();return o&&o.isSameOrBefore(d)?(o.isAfter(i)?o:i).subtract(1,"days"):d},yg=s=>i=>qe(vg(s("termindato")))(i),Xs=({readOnly:s,erForeldrepenger:i=!1})=>{const o=H(),{watch:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),m=d("erBarnetFodt");return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:o.formatMessage({id:"Registrering.TerminOgFodsel"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"erBarnetFodt",label:r.jsx(c,{id:"Registrering.Termin.Fodt"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.Fodsel.ErFodt"}),value:"true"},{label:r.jsx(c,{id:"Registrering.Fodsel.ErIkkeFodt"}),value:"false"}]}),m===!1&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsxs(Q,{children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:"termindato",label:o.formatMessage({id:"Registrering.Termindato"}),isReadOnly:s,validate:[q,M],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(le,{name:"antallBarnFraTerminbekreftelse",label:o.formatMessage({id:"Registrering.AntallBarn"}),readOnly:s,validate:[q,gn,is,ls]})})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsx(T,{children:r.jsx(E,{name:"terminbekreftelseDato",label:o.formatMessage({id:"Registrering.UtstedtDato"}),isReadOnly:s,validate:[M,yg(g)]})})})]})})]}),m&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:0,children:r.jsxs(Q,{children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:"foedselsDato",label:o.formatMessage({id:"Registrering.Fodselsdato"}),isReadOnly:s,validate:[q,M,Kn]})}),r.jsx(T,{children:r.jsx(le,{name:"antallBarn",label:o.formatMessage({id:"Registrering.AntallBarn"}),readOnly:s,validate:[q,gn,is,ls]})})]}),i&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(Qr,{size:"small",variant:"info",children:r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.RettTilPrematuruker"})})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:"termindato",label:o.formatMessage({id:"Registrering.Termindato"}),isReadOnly:s,validate:[M]})}),r.jsx(T,{children:r.jsx(E,{name:"terminbekreftelseDato",label:o.formatMessage({id:"Registrering.UtstedtDato"}),isReadOnly:s,validate:[M]})})]})]})]})})]})]})};Xs.__docgenInfo={description:"",methods:[],displayName:"TerminFodselDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const fg=re(ue),it=({readOnly:s,erForeldrepenger:i})=>r.jsx(ke,{value:fg,children:r.jsx(Xs,{readOnly:s,erForeldrepenger:i})});it.__docgenInfo={description:"",methods:[],displayName:"FodselPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:""}}};const hg="_notLastRow_7c46s_1",cg={notLastRow:hg},os="frilans",Ur=(s,i)=>s(i),Zs=({readOnly:s})=>{const i=H(),{control:o,getValues:d,formState:{isSubmitted:g},trigger:k}=Y(),{fields:v,remove:m,append:h}=he({control:o,name:`${os}.perioder`});return r.jsx(Oe,{fields:v,bodyText:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:s,remove:m,append:h,children:(f,j,F)=>{const b=`${os}.perioder.${j}`;return r.jsxs("div",{className:j!==v.length-1?cg.notLastRow:"",children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:`${b}.periodeFom`,label:j===0?i.formatMessage({id:"Registrering.Frilans.periodeFom"}):"",validate:[q,M,()=>{const w=Ur(d,`${b}.periodeFom`),A=Ur(d,`${b}.periodeTom`);return A&&w?qe(A)(w):null}],onChange:()=>g?k():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${b}.periodeTom`,label:j===0?i.formatMessage({id:"Registrering.Frilans.periodeTom"}):"",validate:[q,M,()=>{const w=Ur(d,`${b}.periodeFom`),A=Ur(d,`${b}.periodeTom`);return A&&w?Se(w)(A):null}],onChange:()=>g?k():void 0})}),F&&r.jsx(T,{children:F()})]})}),r.jsx(y,{sixteenPx:!0})]},f.id)}})};Zs.__docgenInfo={description:`FrilansPerioderFieldArray

Viser inputfelter for fra og til dato for frilansperioder`,methods:[],displayName:"FrilansPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const bg="_notLastRow_7c46s_1",jg={notLastRow:bg},mr="frilans",gr=(s,i)=>s(i),Rg=(s=[])=>s.map(i=>i.periodeFom).filter(i=>i&&i!=="").sort((i,o)=>Ke(i,An).diff(Ke(o,An))),Qs={fomDato:"",tomDato:"",oppdragsgiver:""},Tg=rt(50),Ag=(s,i,o,d)=>()=>{const g=gr(s,`${i}.fomDato`);return o.length>0&&o[0]&&g&&!Ke(o[0]).isSameOrBefore(Ke(g))?d.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation"}):null},ei=({readOnly:s})=>{const i=H(),{control:o,getValues:d,watch:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:h,append:f}=he({control:o,name:`${mr}.oppdragPerioder`}),j=g(`${mr}.perioder`),F=V.useMemo(()=>Rg(j),[j]);return r.jsx(Oe,{bodyText:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),fields:m,emptyPeriodTemplate:Qs,readOnly:s,append:f,remove:h,children:(b,w,A)=>{const S=`${mr}.oppdragPerioder.${w}`;return r.jsxs("div",{className:w!==m.length-1?jg.notLastRow:"",children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:`${S}.fomDato`,label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeFom"}),validate:[M,Ag(d,S,F,i),()=>{const P=gr(d,`${S}.fomDato`),G=gr(d,`${S}.tomDato`);return G&&P?qe(G)(P):null}],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${S}.tomDato`,label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeTom"}),validate:[M,()=>{const P=gr(d,`${S}.fomDato`),G=gr(d,`${S}.tomDato`);return G&&P?Se(P)(G):null}],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(le,{name:`${S}.oppdragsgiver`,validate:[Tg],label:i.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver"})})}),A&&r.jsx(T,{children:A()})]})}),r.jsx(y,{sixteenPx:!0})]},b.id)}})};ei.__docgenInfo={description:`FrilansOppdragForFamilieFieldArray

Viser inputfelter for fra og til dato for frilansperioder.`,methods:[],displayName:"FrilansOppdragForFamilieFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const na=({readOnly:s})=>{const{watch:i}=Y(),o=i(`${mr}.harHattOppdragForFamilie`);return r.jsxs(r.Fragment,{children:[r.jsx(U,{name:`${mr}.harHattOppdragForFamilie`,label:r.jsx(c,{id:"Registrering.FrilansOppdrag.HarHattOppdragForFamilie"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.FrilansOppdrag.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.FrilansOppdrag.No"}),value:"false"}]}),o&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.FrilansOppdrag.OppgiPeriode"})}),r.jsx(y,{fourPx:!0}),r.jsx(ei,{readOnly:s})]})]})]})};na.buildInitialValues=()=>({oppdragPerioder:[Qs],perioder:void 0});na.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`{
  harHattOppdragForFamilie?: boolean;
} & FieldArrayFormValues`,elements:[{name:"signature",type:"object",raw:`{
  harHattOppdragForFamilie?: boolean;
}`,signature:{properties:[{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]}}}],displayName:"FrilansOppdragForFamiliePanel"};const Ua="frilans",$n=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Frilans.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Ua}.harSokerPeriodeMedFrilans`,label:r.jsx(c,{id:"Registrering.Frilans.HarFrilansvirksomhet"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.Frilans.No"}),value:"false"},{label:r.jsx(c,{id:"Registrering.Frilans.Yes"}),value:"true",element:r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(Ze,{children:r.jsx(c,{id:"Registrering.Frilans.OppgiPeriode"})}),r.jsx(y,{eightPx:!0}),r.jsx(Zs,{readOnly:s}),r.jsx(y,{fourPx:!0}),r.jsx(U,{name:`${Ua}.erNyoppstartetFrilanser`,label:r.jsx(c,{id:"Registrering.Frilans.ErNyoppstartedFrilanser"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.Frilans.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.Frilans.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:`${Ua}.harInntektFraFosterhjem`,label:r.jsx(c,{id:"Registrering.Frilans.HarInntektFraForsterhjem"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:r.jsx(c,{id:"Registrering.Frilans.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.Frilans.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(na,{readOnly:s})]})]})}]})]});$n.buildInitialValues=()=>({...na.buildInitialValues(),perioder:[{periodeFom:"",periodeTom:""}]});$n.transformValues=s=>s.harSokerPeriodeMedFrilans?s:{harSokerPeriodeMedFrilans:s.harSokerPeriodeMedFrilans};$n.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:null}],returns:null}],displayName:"FrilansPanel"};const qg=re(ue),nn=({readOnly:s})=>r.jsx(ke,{value:qg,children:r.jsx($n,{readOnly:s})});nn.buildInitialValues=()=>$n.buildInitialValues();nn.transformValues=s=>$n.transformValues(s);nn.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:null}],returns:null}],displayName:"FrilansPapirsoknadIndex"};const Fg="_notLastRow_uwn16_1",wg={notLastRow:Fg},Pg=rt(50),In="arbeidsforhold",_g={arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},xg=s=>s.filter(({kode:i})=>i!==tt.NORGE).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),ni=({alleKodeverk:s,readOnly:i})=>{const o=H(),{control:d}=Y(),{fields:g,remove:k,append:v}=he({control:d,name:In}),m=s[ee.LANDKODER].slice().sort((h,f)=>h.navn.localeCompare(f.navn));return r.jsx(Oe,{fields:g,emptyPeriodTemplate:_g,bodyText:o.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:i,remove:k,append:v,children:(h,f,j)=>r.jsxs("div",{className:f!==g.length-1?wg.notLastRow:"",children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(le,{readOnly:i,name:`${In}.${f}.arbeidsgiver`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}):"",validate:[Pg],maxLength:99})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${In}.${f}.periodeFom`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}):"",validate:[M]})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${In}.${f}.periodeTom`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}):"",validate:[M]})}),r.jsx(T,{children:r.jsx(fe,{readOnly:i,name:`${In}.${f}.land`,label:f===0?o.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}):"",selectValues:xg(m)})}),j&&r.jsx(T,{children:j()})]})}),r.jsx(y,{twentyPx:!0})]},h.id)})};ni.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ra=({readOnly:s,alleKodeverk:i})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.Title"})}),r.jsx(y,{eightPx:!0}),r.jsx(Ze,{children:r.jsx(c,{id:"Registrering.InntektsgivendeArbeid.ArbeidINorge.SkalIkkeRegistrereArbeidsforhold"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{sixteenPx:!0}),r.jsx(Ze,{children:r.jsx(c,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtlandet.Title"})}),r.jsx(y,{eightPx:!0}),r.jsx(ni,{readOnly:s,alleKodeverk:i})]});ra.buildInitialValues=()=>({[In]:[{}]});ra.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPanel"};const Sg=re(ue),Hn=({readOnly:s,alleKodeverk:i})=>r.jsx(ke,{value:Sg,children:r.jsx(ra,{readOnly:s,alleKodeverk:i})});Hn.buildInitialValues=()=>ra.buildInitialValues();Hn.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InntektsgivendeArbeidPapirsoknadIndex"};const Og="_image_1vy0k_1",Ng={image:Og},ri=({showModal:s,handleSubmit:i,cancelEvent:o})=>{const d=H();return r.jsxs(Xe,{open:s,"aria-label":d.formatMessage({id:"ModalLukkPapirSoknad.ModalDescription"}),onClose:o,children:[r.jsx(Xe.Body,{children:r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(Ku,{className:Ng.image,title:d.formatMessage({id:"ModalLukkPapirSoknad.Avslutt"})})}),r.jsxs(T,{children:[r.jsx(me,{size:"small",children:d.formatMessage({id:"ModalLukkPapirSoknad.AvslutterRegistrering"})}),r.jsx(y,{fourPx:!0}),r.jsx(Ds,{size:"small",children:d.formatMessage({id:"ModalLukkPapirSoknad.BekreftAvslag"})})]})]})})}),r.jsxs(Xe.Footer,{children:[r.jsx($s,{to:"/",children:r.jsx(Be,{size:"small",variant:"primary",onClick:()=>i(),type:"button",children:d.formatMessage({id:"ModalLukkPapirSoknad.Ok"})})}),r.jsx(Be,{size:"small",variant:"secondary",onClick:o,type:"button",children:d.formatMessage({id:"ModalLukkPapirSoknad.Avbryt"})})]})]})};ri.__docgenInfo={description:`LukkPapirSoknadModal

Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
og trykker på 'Lagre og start behandling'. Ved å trykke på OK blir saken sendt til behandling av avslag.`,methods:[],displayName:"LukkPapirSoknadModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Eg="_fullWidth_1omqj_1",Vg="_halfWidth_1omqj_5",ds={fullWidth:Eg,halfWidth:Vg},Mg=rt(1500),ai=({submitting:s,onSubmitUfullstendigsoknad:i,readOnly:o=!0})=>{const d=H(),[g,k]=V.useState(!1),{watch:v}=Y(),m=v("ufullstendigSoeknad")||!1,h=V.useCallback(()=>{k(!g)},[k,g]);return r.jsx(oe,{children:r.jsx(Q,{children:r.jsx(L,{children:r.jsxs(T,{className:ds.fullWidth,children:[r.jsx(Ze,{children:d.formatMessage({id:"Registrering.SaveApplication.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(L,{children:[r.jsx(T,{className:ds.halfWidth,children:r.jsx(Hs,{name:"kommentarEndring",label:d.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[Mg,at],readOnly:o})}),r.jsxs(T,{children:[r.jsx(ie,{name:"registrerVerge",label:d.formatMessage({id:"Registrering.Verge"}),readOnly:o}),r.jsx(ie,{name:"ufullstendigSoeknad",label:d.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:o})]})]}),r.jsx(y,{sixteenPx:!0}),r.jsx(L,{children:r.jsxs(T,{className:"justifyItemsToFlexEnd",children:[!m&&r.jsx(Be,{id:"saveButton",size:"small",variant:"primary",loading:s,disabled:o||s,onClick:Gs,children:r.jsx(c,{id:"Registrering.SaveApplication.SaveButton"})}),m&&r.jsx(Be,{id:"endButton",onClick:h,size:"small",variant:"primary",loading:s,disabled:o||s,type:"button",children:r.jsx(c,{id:"Registrering.SaveApplication.EndButton"})})]})}),r.jsx(ri,{handleSubmit:i,showModal:g,cancelEvent:h})]})})})})};ai.__docgenInfo={description:"",methods:[],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Ig=re(ue),aa=({readOnly:s,onSubmitUfullstendigsoknad:i,submitting:o})=>r.jsx(ke,{value:Ig,children:r.jsx(ai,{readOnly:s,onSubmitUfullstendigsoknad:i,submitting:o})});aa.__docgenInfo={description:"",methods:[],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const ti=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),r.jsx(y,{sixteenPx:!0}),r.jsx(E,{name:"mottattDato",label:r.jsx(c,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),validate:[q,M,Kn],isReadOnly:s})]});ti.__docgenInfo={description:`MottattDatoPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"MottattDatoPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Dg=re(ue),ta=({readOnly:s})=>r.jsx(ke,{value:Dg,children:r.jsx(ti,{readOnly:s})});ta.__docgenInfo={description:"",methods:[],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Bg="_barnInput_1jjt5_1",Kg="_col_1jjt5_5",$r={barnInput:Bg,col:Kg},Lg=10,us=Us(1),gs=pr(10),cn="omsorg",ms=(s,i)=>o=>{if(s===0&&i&&o)return Gu(o,Array.isArray(i)?i[0]:i)},sa=({readOnly:s=!0,familieHendelseType:i,isForeldrepengerFagsak:o,fodselsdatoer:d})=>{const{formatMessage:g}=H(),{control:k,watch:v}=Y(),{fields:m,remove:h,append:f}=he({control:k,name:`${cn}.foedselsDato`}),j=v(`${cn}.antallBarn`),F=j?parseInt(j,10):0;return V.useEffect(()=>{if(m.length>Math.max(F,0))for(let b=m.length;b>F;b-=1)h(b-1);else if(m.length<Math.min(F,Lg))for(let b=m.length;b<F;b+=1)f({id:b,dato:void 0})},[F]),r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:i===se.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(Q,{children:[o&&i===se.ADOPSJON&&r.jsxs(r.Fragment,{children:[r.jsx(L,{children:r.jsx(T,{className:$r.col,children:r.jsx(U,{name:`${cn}.erEktefellesBarn`,label:r.jsx(c,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Adopsjon.Ja"}),value:"true"},{label:g({id:"Registrering.Adopsjon.Nei"}),value:"false"}]})})}),r.jsx(y,{sixteenPx:!0})]}),r.jsx(L,{children:r.jsx(T,{children:r.jsx(E,{name:`${cn}.omsorgsovertakelsesdato`,label:g({id:i===se.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:s,validate:i===se.ADOPSJON?[q,M]:[M]})})}),r.jsx(y,{sixteenPx:!0}),r.jsxs(L,{children:[i===se.ADOPSJON&&r.jsx(T,{children:r.jsx(E,{name:`${cn}.ankomstdato`,label:g({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:s,validate:[M]})}),r.jsx(T,{className:$r.col,children:r.jsx(le,{name:`${cn}.antallBarn`,label:g({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:s,parse:b=>{const w=parseInt(b.toString(),10);return Number.isNaN(w)?b:w},className:$r.barnInput,validate:i===se.ADOPSJON?[q,gn,us,gs]:[gn,b=>b?us(parseInt(b,10)):void 0,b=>b?gs(parseInt(b,10)):void 0]})})]}),r.jsx(L,{children:r.jsx(T,{className:$r.col,children:m.map((b,w)=>r.jsxs(Zr.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(E,{name:`${cn}.foedselsDato.${w}.dato`,isReadOnly:s,validate:i===se.ADOPSJON?[q,M,Kn,ms(w,d)]:[M,Kn,ms(w,d)],label:g({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:w+1})})]},b.id))})})]})]})};sa.transformValues=s=>({...s,foedselsDato:s.foedselsDato&&s.foedselsDato.length>0?s.foedselsDato.map(i=>i.dato):void 0});sa.__docgenInfo={description:`OmsorgOgAdopsjonPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null}],displayName:"OmsorgOgAdopsjonPanel",props:{readOnly:{defaultValue:{value:"true",computed:!1},required:!1}}};const Yg=re(ue),kn=({readOnly:s,familieHendelseType:i,isForeldrepengerFagsak:o,fodselsdato:d})=>r.jsx(ke,{value:Yg,children:r.jsx(sa,{readOnly:s,familieHendelseType:i,isForeldrepengerFagsak:o,fodselsdatoer:d})});kn.transformValues=sa.transformValues;kn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex"};const Ug="_datesRowWithRemoveButton_od5lu_1",$g="_selectBredde_od5lu_7",si={datesRowWithRemoveButton:Ug,selectBredde:$g},Hg=ig.bind(si),Gg={land:"",periodeFom:"",periodeTom:""},Jr=(s,i)=>s(i),ks=(s,i)=>()=>{const d=s(i).filter(({periodeFom:g,periodeTom:k})=>g&&g!==""&&k&&k!=="").map(({periodeFom:g,periodeTom:k})=>[g,k]);return d.length>0?Yn(d):void 0},Cg=s=>s.filter(({kode:i})=>i!==tt.NORGE).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),ps=(s,i,o,d)=>()=>{const g=Jr(s,`${i}.${o}.periodeFom`),k=Jr(s,`${i}.${o}.periodeTom`);return!k||!g?null:d?qe(k)(g):Se(g)(k)},za=({erTidligereOpphold:s,mottattDato:i,readOnly:o,countryCodes:d})=>{const g=H(),k=s?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:v,getValues:m,trigger:h,formState:{isSubmitted:f}}=Y(),{fields:j,remove:F,append:b}=he({control:v,name:k}),w=V.useMemo(()=>Cg(d),[d]);return r.jsx(Oe,{fields:j,titleText:g.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:g.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:Gg,createAddButtonInsteadOfImageLink:!0,readOnly:o,remove:F,append:b,children:(A,S,P)=>r.jsxs(Zr.Fragment,{children:[S>0&&r.jsxs(r.Fragment,{children:[r.jsx(nt,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsx(fe,{name:`${k}.${S}.land`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:w,className:si.selectBredde,readOnly:o,validate:[q]}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{className:Hg({datesRowWithRemoveButton:S>0}),children:[r.jsx(T,{children:r.jsx(E,{name:`${k}.${S}.periodeFom`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:o,validate:[q,M,ps(m,k,S,!0),()=>{const G=Jr(m,`${k}.${S}.periodeFom`);return s?qe(Ke().format(An))(G):i?Se(i)(G):void 0},ks(m,k)],onChange:()=>f?h():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${k}.${S}.periodeTom`,label:g.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:o,validate:[q,M,ps(m,k,S,!1),()=>{const G=Jr(m,`${k}.${S}.periodeTom`);return s?qe(Ke().format(An))(G):i?Se(i)(G):void 0},ks(m,k)],onChange:()=>f?h():void 0})}),P&&r.jsx(T,{children:P()})]})}),r.jsx(y,{sixteenPx:!0})]},A.id)})};za.__docgenInfo={description:`UtenlandsOppholdField

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Gn=({readOnly:s=!0,alleKodeverk:i,mottattDato:o,erAdopsjon:d})=>{const{formatMessage:g}=H(),k=V.useMemo(()=>i[ee.LANDKODER].slice().sort((f,j)=>f.navn.localeCompare(j.navn)),[i]),{watch:v}=Y(),m=v("harTidligereOppholdUtenlands")||!1,h=v("harFremtidigeOppholdUtenlands")||!1;return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Opphold"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"oppholdINorge",label:r.jsx(c,{id:d?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"true"},{label:g({id:"Registrering.Opphold.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"harTidligereOppholdUtenlands",label:r.jsx(c,{id:"Registrering.OppholdSisteTolv"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"false"},{label:g({id:"Registrering.Opphold.No"}),value:"true"}]}),m?r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsx(za,{erTidligereOpphold:!0,mottattDato:o,countryCodes:k,readOnly:s})})]}):null,r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"harFremtidigeOppholdUtenlands",label:r.jsx(c,{id:"Registrering.OppholdNesteTolv"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:g({id:"Registrering.Opphold.Yes"}),value:"false"},{label:g({id:"Registrering.Opphold.No"}),value:"true"}]}),h?r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx(de,{alignOffset:64,children:r.jsx(za,{erTidligereOpphold:!1,mottattDato:o,countryCodes:k,readOnly:s})})]}):null]})};Gn.buildInitialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});Gn.transformValues=s=>({...s,fremtidigeOppholdUtenlands:s.harFremtidigeOppholdUtenlands?s.fremtidigeOppholdUtenlands:void 0,tidligereOppholdUtenlands:s.harTidligereOppholdUtenlands?s.tidligereOppholdUtenlands:void 0});Gn.__docgenInfo={description:`OppholdINorgePanel

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
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"RettigheterPanel",props:{soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const zg=re(ue),ia=({readOnly:s,soknadData:i})=>r.jsx(ke,{value:zg,children:r.jsx(ii,{readOnly:s,soknadData:i})});ia.__docgenInfo={description:"",methods:[],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const $a={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},li=({readOnly:s})=>{const i=H();return r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:i.formatMessage({id:"Registrering.Sprak"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"språkkode",validate:[q],isReadOnly:s,radios:[{label:i.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:$a.BOKMAL},{label:i.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:$a.NYNORSK},{label:i.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:$a.ENGELSK}]})]})};li.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.",methods:[],displayName:"SprakPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Jg=re(ue),fr=({readOnly:s})=>r.jsx(ke,{value:Jg,children:r.jsx(li,{readOnly:s})});fr.__docgenInfo={description:"",methods:[],displayName:"SprakPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Xg="_navnBredde_1kwjo_1",Zg="_orgNrBredde_1kwjo_5",Qg="_landBredde_1kwjo_9",Ha={navnBredde:Xg,orgNrBredde:Zg,landBredde:Qg},em=s=>s.map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),oi=({readOnly:s=!0,alleKodeverk:i})=>{const o=H(),d=i[ee.LANDKODER].slice().sort((m,h)=>m.navn.localeCompare(h.navn)),{watch:g,getValues:k}=Y(),v=g("virksomhetRegistrertINorge");return r.jsxs(r.Fragment,{children:[r.jsx(le,{name:"navn",validate:[q],label:r.jsx(c,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),className:Ha.navnBredde,readOnly:s}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"virksomhetRegistrertINorge",label:r.jsx(c,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.No"}),value:"false"}]}),v&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsx("div",{className:Ha.orgNrBredde,children:r.jsx(de,{children:r.jsx(le,{name:"organisasjonsnummer",readOnly:s,validate:[q,gn,Cu],label:r.jsx(c,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})})}),r.jsx(y,{sixteenPx:!0})]}),!v&&v!==void 0&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{alignOffset:57,children:[r.jsx(fe,{name:"landJobberFra",className:Ha.landBredde,selectValues:em(d),validate:[q],label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{isReadOnly:s,validate:[q,M,Kn],name:"fom",label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:s,validate:[M,m=>{const h=k("fom");return h?Wu(h,m):null}],name:"tom",label:o.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})})]})})]})]})]})};oi.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const nm="_tlfBredde_nvz63_1",rm="_navnBredde_nvz63_5",vs={tlfBredde:nm,navnBredde:rm},di=({readOnly:s=!0})=>{const{watch:i}=Y(),o=i("harRegnskapsforer")||!1;return r.jsxs(r.Fragment,{children:[r.jsx(U,{name:"harRegnskapsforer",label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.No"}),value:"false"}]}),o&&r.jsxs(r.Fragment,{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(le,{name:"navnRegnskapsforer",className:vs.navnBredde,readOnly:s,validate:[q,at],label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:"tlfRegnskapsforer",readOnly:s,validate:[q,gn],className:vs.tlfBredde,label:r.jsx(c,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]}),r.jsx(y,{sixteenPx:!0})]})]})};di.__docgenInfo={description:`VirksomhetRegnskapPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const am="_inntektBredde_1xgnj_1",tm={inntektBredde:am},ui=({readOnly:s})=>{var F,b,w,A;const i=H(),{watch:o,setError:d,clearErrors:g,formState:k}=Y(),v=o("varigEndretEllerStartetSisteFireAr")||!1,m=o("harVarigEndring")||!1,h=o("erNyoppstartet")||!1,f=o("erNyIArbeidslivet")||!1,j=!m&&!h&&!f;return V.useEffect(()=>{j&&v&&d("ingenArsakValgt",{type:"custom",message:i.formatMessage({id:"Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak"})}),(!j||!v)&&g("ingenArsakValgt")},[j,v]),r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"varigEndretEllerStartetSisteFireAr",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.Yes"}),value:"true"},{label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.No"}),value:"false"}]}),v&&r.jsxs("div",{children:[r.jsx(y,{eightPx:!0}),r.jsxs(de,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:"harVarigEndring",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"})}),r.jsx(y,{fourPx:!0}),m&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(de,{children:r.jsx(E,{name:"varigEndringGjeldendeFom",isReadOnly:s,validate:[M,q],label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),r.jsx(ie,{name:"erNyoppstartet",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})}),r.jsx(y,{fourPx:!0}),r.jsx(ie,{name:"erNyIArbeidslivet",label:r.jsx(c,{id:"Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet"})}),r.jsx(y,{fourPx:!0}),f&&r.jsxs(r.Fragment,{children:[r.jsx(y,{sixteenPx:!0}),r.jsx(de,{children:r.jsx(E,{name:"nyIArbeidslivetFom",isReadOnly:s,validate:[M,q],label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),k.isSubmitted&&((b=(F=k.errors)==null?void 0:F.ingenArsakValgt)==null?void 0:b.message)&&r.jsx(kr,{children:(A=(w=k.errors)==null?void 0:w.ingenArsakValgt)==null?void 0:A.message}),r.jsx(y,{sixteenPx:!0}),r.jsx(Hs,{name:"beskrivelseAvEndring",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[at]}),r.jsx(y,{sixteenPx:!0}),r.jsx(le,{name:"inntekt",label:r.jsx(c,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:s,validate:[gn,q],className:tm.inntektBredde,parse:S=>{const P=parseInt(S.toString(),10);return Number.isNaN(P)?S:P}})]})]}),r.jsx(y,{eightPx:!0})]})};ui.__docgenInfo={description:`VirksomhetStartetEndretPanel

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
TypeNaringFormValues`,elements:[{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"}]},description:""}}};const dm="_divider_1ed8l_1",um="_fieldsList_1ed8l_7",gm="_addCircleIcon_1ed8l_11",mm="_imageText_1ed8l_12",km="_customLink_1ed8l_17",pm="_removeButton_1ed8l_22",bn={divider:dm,fieldsList:um,addCircleIcon:gm,imageText:mm,customLink:km,removeButton:pm},Rn="egenVirksomhet",pi=({readOnly:s=!1,alleKodeverk:i})=>{var P,G,Ne,X;const o=H(),[d,g]=V.useState(),{control:k,setError:v,formState:m,clearErrors:h}=Y(),{fields:f,remove:j,append:F,update:b}=he({control:k,name:`${Rn}.virksomheter`}),w=V.useCallback(J=>{g(J!==void 0?J:-1)},[g]),A=V.useCallback(()=>{g(void 0)},[g]),S=V.useCallback(J=>{const ae={...J,landJobberFra:J.virksomhetRegistrertINorge?"NOR":J.landJobberFra,varigEndringGjeldendeFom:J.nyIArbeidslivetFom||J.varigEndringGjeldendeFom};d===-1?F(ae):d!==void 0&&b(d,ae),A()},[F,b,A,d]);return V.useEffect(()=>{f.length===0&&v(`${Rn}.notRegisteredInput`,{type:"custom",message:o.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}),f.length>0&&h(`${Rn}.notRegisteredInput`)},[f.length]),r.jsxs("div",{className:bn.fieldsList,children:[f.length>0&&r.jsxs(Zr.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),r.jsx("hr",{className:bn.divider}),f.map((J,ae)=>r.jsxs(Q,{children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(ts,{className:bn.customLink,onClick:()=>w(ae),onKeyDown:()=>w(ae),children:r.jsx(Ds,{size:"small",children:J.navn})})}),r.jsx(T,{children:r.jsx(Bs,{className:bn.removeButton,onClick:()=>j(ae),onKeyDown:()=>j(ae)})})]}),r.jsx("hr",{className:bn.divider}),r.jsx(y,{eightPx:!0})]},J.id))]},1),r.jsxs(ts,{onClick:()=>w(),onKeyDown:J=>J.nativeEvent.code==="Space"?w():!1,children:[r.jsx(Ju,{className:bn.addCircleIcon}),r.jsx(Ze,{className:bn.imageText,children:r.jsx(c,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})]}),m.isSubmitted&&((G=(P=m.errors[Rn])==null?void 0:P.notRegisteredInput)==null?void 0:G.message)&&r.jsx(kr,{children:(X=(Ne=m.errors[Rn])==null?void 0:Ne.notRegisteredInput)==null?void 0:X.message}),d!==void 0&&r.jsx(ki,{showModal:!0,virksomhet:d!==-1&&f.length>d?f[d]:void 0,onSubmit:S,closeEvent:A,readOnly:s,alleKodeverk:i})]})};pi.__docgenInfo={description:`RegistrererVirksomhetPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const vm=re(ue),lt=({readOnly:s,alleKodeverk:i})=>r.jsx(ke,{value:vm,children:r.jsx(vi,{readOnly:s,alleKodeverk:i})});lt.__docgenInfo={description:"",methods:[],displayName:"VirksomhetPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Ga=re(ue),yi=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:Ga.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(U,{name:"dekningsgrad",validate:[q],isReadOnly:s,isHorizontal:!0,radios:[{label:Ga.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:Ga.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]});yi.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Hr=re(ue),fi=({readOnly:s,annenForelderInformertRequired:i=!1})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:Hr.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Ze,{children:Hr.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"})}),r.jsx(y,{eightPx:!0}),r.jsx(U,{name:"annenForelderInformert",validate:i?[q]:[],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:Hr.formatMessage({id:"Registrering.TheOtherParent.Yes"}),value:"true"},{label:Hr.formatMessage({id:"Registrering.TheOtherParent.No"}),value:"false"}]})]});fi.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const jn="annenForelder",hi=({readOnly:s,sokerErMor:i})=>{const o=H(),{watch:d}=Y(),g=d(`${jn}.sokerHarAleneomsorg`),k=d(`${jn}.denAndreForelderenHarRettPaForeldrepenger`),v=d(`${jn}.annenForelderRettEØS`);return r.jsxs(r.Fragment,{children:[r.jsx(U,{name:`${jn}.sokerHarAleneomsorg`,label:o.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg.No"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),g===!1&&r.jsx(U,{name:`${jn}.denAndreForelderenHarRettPaForeldrepenger`,label:o.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger.No"}),value:"false"}]}),g===!1&&k===!1&&r.jsx(U,{name:`${jn}.annenForelderRettEØS`,label:o.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS.No"}),value:"false"}]}),!i&&g===!1&&k===!1&&v===!1&&r.jsx(U,{name:`${jn}.morMottarUføretrygd`,label:o.formatMessage({id:"Registrering.Permisjon.MorUføretrygd"}),validate:[q],isReadOnly:s,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:o.formatMessage({id:"Registrering.Permisjon.MorUføretrygd.Yes"}),value:"true"},{label:o.formatMessage({id:"Registrering.Permisjon.MorUføretrygd.No"}),value:"false"}]})]})};hi.__docgenInfo={description:"",methods:[],displayName:"PermisjonRettigheterPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},denAndreForelderenHarRettPaForeldrepenger:{required:!1,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const ym="_buttonRemove_n1u93_1",fm="_buttonRemoveFirst_n1u93_9",hm="_notLastRow_n1u93_17",cm="_skjulOverskrift_n1u93_21",bm="_visOverskrift_n1u93_25",jm="_smalHeader_n1u93_29",Rm="_alignSamtidigUttak_n1u93_33",Tm="_selectFieldWidth_n1u93_37",sn={buttonRemove:ym,buttonRemoveFirst:fm,notLastRow:hm,skjulOverskrift:cm,visOverskrift:bm,smalHeader:jm,alignSamtidigUttak:Rm,selectFieldWidth:Tm},Am=pr(100),Bn="tidsromPermisjon",De="permisjonsPerioder",ot=[on.FELLESPERIODE,on.FEDREKVOTE,on.FORELDREPENGER_FOR_FODSEL,on.FORELDREPENGER,on.MODREKVOTE],qm=s=>s.filter(({kode:i})=>ot.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Fm=s=>s.map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),ci=[on.FEDREKVOTE,on.FORELDREPENGER_FOR_FODSEL,on.MODREKVOTE],Gr=(s,i)=>s?i:"",wm=s=>!!s&&Ke(s,An).isBefore(Ke("2019-01-01")),cs=s=>()=>{const o=s(`${Bn}.${De}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return Yn(o)},bs=(s,i,o)=>()=>{const d=s(`${Bn}.${De}.${i}.periodeFom`),g=s(`${Bn}.${De}.${i}.periodeTom`);return!g||!d?null:o?qe(g)(d):Se(d)(g)},la=({sokerErMor:s,readOnly:i,alleKodeverk:o})=>{const d=H(),g=o[ee.UTTAK_PERIODE_TYPE],k=o[ee.MORS_AKTIVITET];k.filter(({kode:A})=>A==="-").length===0&&k.unshift({kode:"-",navn:"",kodeverk:""});const{control:v,getValues:m,trigger:h,watch:f,formState:{isSubmitted:j}}=Y(),{fields:F,remove:b,append:w}=he({control:v,name:`${Bn}.${De}`});return V.useEffect(()=>{F.length===0&&w({})},[]),r.jsx(Oe,{readOnly:i,fields:F,bodyText:d.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),emptyPeriodTemplate:{},append:w,remove:b,children:(A,S)=>{const P=S===0,G=f(`${Bn}.${De}.${S}`),Ne=wm(G.periodeFom),X=P?sn.visOverskrift:sn.skjulOverskrift,J=ci.includes(G.periodeType)||G.periodeType==="",ae=`${Bn}.${De}.${S}`;return r.jsxs("div",{children:[r.jsxs(Q,{children:[r.jsxs(L,{wrap:!0,children:[r.jsx(T,{className:sn.selectFieldWidth,children:r.jsx(fe,{readOnly:i,name:`${ae}.periodeType`,label:Gr(P,d.formatMessage({id:"Registrering.Permisjon.periodeType"})),selectValues:qm(g),validate:[q]})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${ae}.periodeFom`,label:Gr(P,d.formatMessage({id:"Registrering.Permisjon.periodeFom"})),validate:[q,M,bs(m,S,!0),cs(m)],onChange:()=>j?h():void 0})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${ae}.periodeTom`,label:Gr(P,d.formatMessage({id:"Registrering.Permisjon.periodeTom"})),validate:[q,M,bs(m,S,!1),cs(m)],onChange:()=>j?h():void 0})}),!s&&r.jsx(T,{children:r.jsx(fe,{readOnly:i,disabled:J,name:`${ae}.morsAktivitet`,label:Gr(P,d.formatMessage({id:"Registrering.Permisjon.Fellesperiode.morsAktivitet"})),selectValues:Fm(k),hideValueOnDisable:!0})}),r.jsxs(T,{className:sn.smalHeader,children:[r.jsx(me,{size:"small",className:X,children:r.jsx(c,{id:"Registrering.Permisjon.Flerbarnsdager"})}),r.jsx(ie,{readOnly:i,name:`${ae}.flerbarnsdager`,label:" "})]}),r.jsxs(T,{className:sn.smalHeader,children:[r.jsx(me,{size:"small",className:X,children:r.jsx(c,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),r.jsx(ie,{readOnly:i,name:`${ae}.harSamtidigUttak`,label:" "})]}),G.harSamtidigUttak&&r.jsx(T,{className:P?"":sn.alignSamtidigUttak,children:r.jsx(le,{name:`${ae}.samtidigUttaksprosent`,validate:[Wa,Am],label:d.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"}),normalizeOnBlur:pn=>Number.isNaN(pn)?pn:parseFloat(pn.toString()).toFixed(2)})}),r.jsx(T,{children:!i&&r.jsx(Be,{className:P?sn.buttonRemoveFirst:sn.buttonRemove,type:"button",variant:"tertiary-neutral",icon:r.jsx(Bs,{}),onClick:()=>{b(S)}})})]}),Ne&&r.jsxs(r.Fragment,{children:[r.jsx(L,{wrap:!0,children:r.jsx(Qr,{size:"small",variant:"warning",children:r.jsx(c,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})}),r.jsx(y,{sixteenPx:!0})]})]}),r.jsx(y,{eightPx:!0})]},A.id)}})};la.transformValues=s=>s.map(i=>ci.includes(i.periodeType)?{periodeType:i.periodeType,periodeFom:i.periodeFom,periodeTom:i.periodeTom,flerbarnsdager:i.flerbarnsdager?i.flerbarnsdager:!1,harSamtidigUttak:i.harSamtidigUttak?i.harSamtidigUttak:!1,samtidigUttaksprosent:i.samtidigUttaksprosent}:{periodeType:i.periodeType,periodeFom:i.periodeFom,periodeTom:i.periodeTom,morsAktivitet:i.morsAktivitet,flerbarnsdager:i.flerbarnsdager?i.flerbarnsdager:!1,harSamtidigUttak:i.harSamtidigUttak?i.harSamtidigUttak:!1,samtidigUttaksprosent:i.samtidigUttaksprosent});la.__docgenInfo={description:`RenderPermisjonPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av perioder med permijon.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"FormValues[]"}}],returns:null}],displayName:"RenderPermisjonPeriodeFieldArray"};const Pm="_notLastRow_pe2tr_1",_m={notLastRow:Pm},dn="tidsromPermisjon",un="utsettelsePeriode",js={periodeFom:"",periodeTom:"",arsakForUtsettelse:""},Rs=s=>()=>{const o=s(`${dn}.${un}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},Ts=(s,i,o)=>()=>{const d=s(`${dn}.${un}.${i}.periodeFom`),g=s(`${dn}.${un}.${i}.periodeTom`);return!g&&!d?null:o?qe(g)(d):Se(d)(g)},xm=s=>s.map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Sm=s=>s.filter(({kode:i})=>ot.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),bi=({utsettelseReasons:s,utsettelseKvoter:i,readOnly:o})=>{const d=H(),{control:g,getValues:k,trigger:v,formState:{isSubmitted:m}}=Y(),{fields:h,remove:f,append:j}=he({control:g,name:`${dn}.${un}`});V.useEffect(()=>{h.length===0&&j(js)},[]);const F=V.useCallback(()=>m?v():void 0,[m,v]),b=`${dn}.${un}`;return r.jsx(Oe,{fields:h,emptyPeriodTemplate:js,bodyText:d.formatMessage({id:"Registrering.Permisjon.Utsettelse.LeggTilPeriode"}),readOnly:o,append:j,remove:f,children:(w,A,S)=>r.jsxs("div",{className:A!==h.length-1?_m.notLastRow:"",children:[A>0&&r.jsxs(r.Fragment,{children:[r.jsx(nt,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(Q,{wrap:!0,children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{name:`${b}.${A}.periodeForUtsettelse`,label:A===0?d.formatMessage({id:"Registrering.Permisjon.Utsettelse.Periode"}):"",selectValues:Sm(i),validate:[q]})}),r.jsx(T,{children:r.jsx(E,{name:`${b}.${A}.periodeFom`,label:A===0?d.formatMessage({id:"Registrering.Permisjon.periodeFom"}):"",validate:[q,M,Ts(k,A,!0),Rs(k)],onChange:F})}),r.jsx(T,{children:r.jsx(E,{name:`${b}.${A}.periodeTom`,label:A===0?d.formatMessage({id:"Registrering.Permisjon.periodeTom"}):"",validate:[q,M,Ts(k,A,!1),Rs(k)],onChange:F})}),r.jsx(T,{children:r.jsx(fe,{name:`${b}.${A}.arsakForUtsettelse`,label:A===0?d.formatMessage({id:"Registrering.Permisjon.Utsettelse.Arsak"}):"",selectValues:xm(s),validate:[q],onChange:F})})]}),r.jsx(y,{eightPx:!0}),r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{label:A===0?d.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}):"",name:`${b}.${A}.erArbeidstaker`,selectValues:[r.jsx("option",{value:"true",children:d.formatMessage({id:"Registrering.Permisjon.ErArbeidstaker"})},"true"),r.jsx("option",{value:"false",children:d.formatMessage({id:"Registrering.Permisjon.ErIkkeArbeidstaker"})},"false")],validate:[P=>k(`${dn}.${un}.${A}.arsakForUtsettelse`)==="ARBEID"?q(P):void 0]})}),S&&r.jsx(T,{children:S()})]})]})]},w.id)})};bi.__docgenInfo={description:`RenderUtsettelsePeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const oa=({readOnly:s,alleKodeverk:i})=>{const o=i[ee.UTSETTELSE_AARSAK_TYPE],d=i[ee.UTTAK_PERIODE_TYPE],{watch:g}=Y(),k=g(`${dn}.skalUtsette`)||!1;return r.jsxs(r.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Utsettelse.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${dn}.skalUtsette`,label:r.jsx(c,{id:"Registrering.Permisjon.Utsettelse.UtsettUttaket"})}),k&&r.jsx(bi,{utsettelseReasons:o,utsettelseKvoter:d,readOnly:s})]})};oa.buildInitialValues=()=>({[un]:[{}],skalUtsette:!1});oa.__docgenInfo={description:`PermisjonUtsettelsePanel

Viser panel for utsettelse
Komponenten har inputfelter og må derfor rendres som etterkommer av form komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonUtsettelsePanel"};var ji={exports:{}};(function(s,i){(function(o,d){s.exports=d()})(Du,function(){var o;function d(){return o.apply(null,arguments)}function g(e){o=e}function k(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function v(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function m(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function h(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var n;for(n in e)if(m(e,n))return!1;return!0}function f(e){return e===void 0}function j(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function F(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function b(e,n){var a=[],t,l=e.length;for(t=0;t<l;++t)a.push(n(e[t],t));return a}function w(e,n){for(var a in n)m(n,a)&&(e[a]=n[a]);return m(n,"toString")&&(e.toString=n.toString),m(n,"valueOf")&&(e.valueOf=n.valueOf),e}function A(e,n,a,t){return Vt(e,n,a,t,!0).utc()}function S(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function P(e){return e._pf==null&&(e._pf=S()),e._pf}var G;Array.prototype.some?G=Array.prototype.some:G=function(e){var n=Object(this),a=n.length>>>0,t;for(t=0;t<a;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};function Ne(e){var n=null,a=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(n=P(e),a=G.call(n.parsedDateParts,function(l){return l!=null}),t=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&a),e._strict&&(t=t&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function X(e){var n=A(NaN);return e!=null?w(P(n),e):P(n).userInvalidated=!0,n}var J=d.momentProperties=[],ae=!1;function pn(e,n){var a,t,l,u=J.length;if(f(n._isAMomentObject)||(e._isAMomentObject=n._isAMomentObject),f(n._i)||(e._i=n._i),f(n._f)||(e._f=n._f),f(n._l)||(e._l=n._l),f(n._strict)||(e._strict=n._strict),f(n._tzm)||(e._tzm=n._tzm),f(n._isUTC)||(e._isUTC=n._isUTC),f(n._offset)||(e._offset=n._offset),f(n._pf)||(e._pf=P(n)),f(n._locale)||(e._locale=n._locale),u>0)for(a=0;a<u;a++)t=J[a],l=n[t],f(l)||(e[t]=l);return e}function Zn(e){pn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ae===!1&&(ae=!0,d.updateOffset(this),ae=!1)}function Fe(e){return e instanceof Zn||e!=null&&e._isAMomentObject!=null}function ut(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function je(e,n){var a=!0;return w(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),a){var t=[],l,u,p,_=arguments.length;for(u=0;u<_;u++){if(l="",typeof arguments[u]=="object"){l+=`
[`+u+"] ";for(p in arguments[0])m(arguments[0],p)&&(l+=p+": "+arguments[0][p]+", ");l=l.slice(0,-2)}else l=arguments[u];t.push(l)}ut(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),a=!1}return n.apply(this,arguments)},n)}var gt={};function mt(e,n){d.deprecationHandler!=null&&d.deprecationHandler(e,n),gt[e]||(ut(n),gt[e]=!0)}d.suppressDeprecationWarnings=!1,d.deprecationHandler=null;function Ee(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Ii(e){var n,a;for(a in e)m(e,a)&&(n=e[a],Ee(n)?this[a]=n:this["_"+a]=n);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function ma(e,n){var a=w({},e),t;for(t in n)m(n,t)&&(v(e[t])&&v(n[t])?(a[t]={},w(a[t],e[t]),w(a[t],n[t])):n[t]!=null?a[t]=n[t]:delete a[t]);for(t in e)m(e,t)&&!m(n,t)&&v(e[t])&&(a[t]=w({},a[t]));return a}function ka(e){e!=null&&this.set(e)}var pa;Object.keys?pa=Object.keys:pa=function(e){var n,a=[];for(n in e)m(e,n)&&a.push(n);return a};var Di={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Bi(e,n,a){var t=this._calendar[e]||this._calendar.sameElse;return Ee(t)?t.call(n,a):t}function Ve(e,n,a){var t=""+Math.abs(e),l=n-t.length,u=e>=0;return(u?a?"+":"":"-")+Math.pow(10,Math.max(0,l)).toString().substr(1)+t}var va=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,hr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ya={},qn={};function O(e,n,a,t){var l=t;typeof t=="string"&&(l=function(){return this[t]()}),e&&(qn[e]=l),n&&(qn[n[0]]=function(){return Ve(l.apply(this,arguments),n[1],n[2])}),a&&(qn[a]=function(){return this.localeData().ordinal(l.apply(this,arguments),e)})}function Ki(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Li(e){var n=e.match(va),a,t;for(a=0,t=n.length;a<t;a++)qn[n[a]]?n[a]=qn[n[a]]:n[a]=Ki(n[a]);return function(l){var u="",p;for(p=0;p<t;p++)u+=Ee(n[p])?n[p].call(l,e):n[p];return u}}function cr(e,n){return e.isValid()?(n=kt(n,e.localeData()),ya[n]=ya[n]||Li(n),ya[n](e)):e.localeData().invalidDate()}function kt(e,n){var a=5;function t(l){return n.longDateFormat(l)||l}for(hr.lastIndex=0;a>=0&&hr.test(e);)e=e.replace(hr,t),hr.lastIndex=0,a-=1;return e}var Yi={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ui(e){var n=this._longDateFormat[e],a=this._longDateFormat[e.toUpperCase()];return n||!a?n:(this._longDateFormat[e]=a.match(va).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var $i="Invalid date";function Hi(){return this._invalidDate}var Gi="%d",Ci=/\d{1,2}/;function Wi(e){return this._ordinal.replace("%d",e)}var zi={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ji(e,n,a,t){var l=this._relativeTime[a];return Ee(l)?l(e,n,a,t):l.replace(/%d/i,e)}function Xi(e,n){var a=this._relativeTime[e>0?"future":"past"];return Ee(a)?a(n):a.replace(/%s/i,n)}var pt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Re(e){return typeof e=="string"?pt[e]||pt[e.toLowerCase()]:void 0}function fa(e){var n={},a,t;for(t in e)m(e,t)&&(a=Re(t),a&&(n[a]=e[t]));return n}var Zi={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Qi(e){var n=[],a;for(a in e)m(e,a)&&n.push({unit:a,priority:Zi[a]});return n.sort(function(t,l){return t.priority-l.priority}),n}var vt=/\d/,ce=/\d\d/,yt=/\d{3}/,ha=/\d{4}/,br=/[+-]?\d{6}/,C=/\d\d?/,ft=/\d\d\d\d?/,ht=/\d\d\d\d\d\d?/,jr=/\d{1,3}/,ca=/\d{1,4}/,Rr=/[+-]?\d{1,6}/,Fn=/\d+/,Tr=/[+-]?\d+/,el=/Z|[+-]\d\d:?\d\d/gi,Ar=/Z|[+-]\d\d(?::?\d\d)?/gi,nl=/[+-]?\d+(\.\d{1,3})?/,Qn=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,wn=/^[1-9]\d?/,ba=/^([1-9]\d|\d)/,qr;qr={};function x(e,n,a){qr[e]=Ee(n)?n:function(t,l){return t&&a?a:n}}function rl(e,n){return m(qr,e)?qr[e](n._strict,n._locale):new RegExp(al(e))}function al(e){return Le(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,a,t,l,u){return a||t||l||u}))}function Le(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Te(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function I(e){var n=+e,a=0;return n!==0&&isFinite(n)&&(a=Te(n)),a}var ja={};function $(e,n){var a,t=n,l;for(typeof e=="string"&&(e=[e]),j(n)&&(t=function(u,p){p[n]=I(u)}),l=e.length,a=0;a<l;a++)ja[e[a]]=t}function er(e,n){$(e,function(a,t,l,u){l._w=l._w||{},n(a,l._w,l,u)})}function tl(e,n,a){n!=null&&m(ja,e)&&ja[e](n,a._a,a,e)}function Fr(e){return e%4===0&&e%100!==0||e%400===0}var ge=0,Ye=1,Me=2,te=3,we=4,Ue=5,vn=6,sl=7,il=8;O("Y",0,0,function(){var e=this.year();return e<=9999?Ve(e,4):"+"+e}),O(0,["YY",2],0,function(){return this.year()%100}),O(0,["YYYY",4],0,"year"),O(0,["YYYYY",5],0,"year"),O(0,["YYYYYY",6,!0],0,"year"),x("Y",Tr),x("YY",C,ce),x("YYYY",ca,ha),x("YYYYY",Rr,br),x("YYYYYY",Rr,br),$(["YYYYY","YYYYYY"],ge),$("YYYY",function(e,n){n[ge]=e.length===2?d.parseTwoDigitYear(e):I(e)}),$("YY",function(e,n){n[ge]=d.parseTwoDigitYear(e)}),$("Y",function(e,n){n[ge]=parseInt(e,10)});function nr(e){return Fr(e)?366:365}d.parseTwoDigitYear=function(e){return I(e)+(I(e)>68?1900:2e3)};var ct=Pn("FullYear",!0);function ll(){return Fr(this.year())}function Pn(e,n){return function(a){return a!=null?(bt(this,e,a),d.updateOffset(this,n),this):rr(this,e)}}function rr(e,n){if(!e.isValid())return NaN;var a=e._d,t=e._isUTC;switch(n){case"Milliseconds":return t?a.getUTCMilliseconds():a.getMilliseconds();case"Seconds":return t?a.getUTCSeconds():a.getSeconds();case"Minutes":return t?a.getUTCMinutes():a.getMinutes();case"Hours":return t?a.getUTCHours():a.getHours();case"Date":return t?a.getUTCDate():a.getDate();case"Day":return t?a.getUTCDay():a.getDay();case"Month":return t?a.getUTCMonth():a.getMonth();case"FullYear":return t?a.getUTCFullYear():a.getFullYear();default:return NaN}}function bt(e,n,a){var t,l,u,p,_;if(!(!e.isValid()||isNaN(a))){switch(t=e._d,l=e._isUTC,n){case"Milliseconds":return void(l?t.setUTCMilliseconds(a):t.setMilliseconds(a));case"Seconds":return void(l?t.setUTCSeconds(a):t.setSeconds(a));case"Minutes":return void(l?t.setUTCMinutes(a):t.setMinutes(a));case"Hours":return void(l?t.setUTCHours(a):t.setHours(a));case"Date":return void(l?t.setUTCDate(a):t.setDate(a));case"FullYear":break;default:return}u=a,p=e.month(),_=e.date(),_=_===29&&p===1&&!Fr(u)?28:_,l?t.setUTCFullYear(u,p,_):t.setFullYear(u,p,_)}}function ol(e){return e=Re(e),Ee(this[e])?this[e]():this}function dl(e,n){if(typeof e=="object"){e=fa(e);var a=Qi(e),t,l=a.length;for(t=0;t<l;t++)this[a[t].unit](e[a[t].unit])}else if(e=Re(e),Ee(this[e]))return this[e](n);return this}function ul(e,n){return(e%n+n)%n}var Z;Array.prototype.indexOf?Z=Array.prototype.indexOf:Z=function(e){var n;for(n=0;n<this.length;++n)if(this[n]===e)return n;return-1};function Ra(e,n){if(isNaN(e)||isNaN(n))return NaN;var a=ul(n,12);return e+=(n-a)/12,a===1?Fr(e)?29:28:31-a%7%2}O("M",["MM",2],"Mo",function(){return this.month()+1}),O("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),O("MMMM",0,0,function(e){return this.localeData().months(this,e)}),x("M",C,wn),x("MM",C,ce),x("MMM",function(e,n){return n.monthsShortRegex(e)}),x("MMMM",function(e,n){return n.monthsRegex(e)}),$(["M","MM"],function(e,n){n[Ye]=I(e)-1}),$(["MMM","MMMM"],function(e,n,a,t){var l=a._locale.monthsParse(e,t,a._strict);l!=null?n[Ye]=l:P(a).invalidMonth=e});var gl="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),jt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Rt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ml=Qn,kl=Qn;function pl(e,n){return e?k(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Rt).test(n)?"format":"standalone"][e.month()]:k(this._months)?this._months:this._months.standalone}function vl(e,n){return e?k(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Rt.test(n)?"format":"standalone"][e.month()]:k(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function yl(e,n,a){var t,l,u,p=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)u=A([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(u,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(u,"").toLocaleLowerCase();return a?n==="MMM"?(l=Z.call(this._shortMonthsParse,p),l!==-1?l:null):(l=Z.call(this._longMonthsParse,p),l!==-1?l:null):n==="MMM"?(l=Z.call(this._shortMonthsParse,p),l!==-1?l:(l=Z.call(this._longMonthsParse,p),l!==-1?l:null)):(l=Z.call(this._longMonthsParse,p),l!==-1?l:(l=Z.call(this._shortMonthsParse,p),l!==-1?l:null))}function fl(e,n,a){var t,l,u;if(this._monthsParseExact)return yl.call(this,e,n,a);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(l=A([2e3,t]),a&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(l,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(l,"").replace(".","")+"$","i")),!a&&!this._monthsParse[t]&&(u="^"+this.months(l,"")+"|^"+this.monthsShort(l,""),this._monthsParse[t]=new RegExp(u.replace(".",""),"i")),a&&n==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(a&&n==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!a&&this._monthsParse[t].test(e))return t}}function Tt(e,n){if(!e.isValid())return e;if(typeof n=="string"){if(/^\d+$/.test(n))n=I(n);else if(n=e.localeData().monthsParse(n),!j(n))return e}var a=n,t=e.date();return t=t<29?t:Math.min(t,Ra(e.year(),a)),e._isUTC?e._d.setUTCMonth(a,t):e._d.setMonth(a,t),e}function At(e){return e!=null?(Tt(this,e),d.updateOffset(this,!0),this):rr(this,"Month")}function hl(){return Ra(this.year(),this.month())}function cl(e){return this._monthsParseExact?(m(this,"_monthsRegex")||qt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=ml),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function bl(e){return this._monthsParseExact?(m(this,"_monthsRegex")||qt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=kl),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function qt(){function e(N,D){return D.length-N.length}var n=[],a=[],t=[],l,u,p,_;for(l=0;l<12;l++)u=A([2e3,l]),p=Le(this.monthsShort(u,"")),_=Le(this.months(u,"")),n.push(p),a.push(_),t.push(_),t.push(p);n.sort(e),a.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function jl(e,n,a,t,l,u,p){var _;return e<100&&e>=0?(_=new Date(e+400,n,a,t,l,u,p),isFinite(_.getFullYear())&&_.setFullYear(e)):_=new Date(e,n,a,t,l,u,p),_}function ar(e){var n,a;return e<100&&e>=0?(a=Array.prototype.slice.call(arguments),a[0]=e+400,n=new Date(Date.UTC.apply(null,a)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(e)):n=new Date(Date.UTC.apply(null,arguments)),n}function wr(e,n,a){var t=7+n-a,l=(7+ar(e,0,t).getUTCDay()-n)%7;return-l+t-1}function Ft(e,n,a,t,l){var u=(7+a-t)%7,p=wr(e,t,l),_=1+7*(n-1)+u+p,N,D;return _<=0?(N=e-1,D=nr(N)+_):_>nr(e)?(N=e+1,D=_-nr(e)):(N=e,D=_),{year:N,dayOfYear:D}}function tr(e,n,a){var t=wr(e.year(),n,a),l=Math.floor((e.dayOfYear()-t-1)/7)+1,u,p;return l<1?(p=e.year()-1,u=l+$e(p,n,a)):l>$e(e.year(),n,a)?(u=l-$e(e.year(),n,a),p=e.year()+1):(p=e.year(),u=l),{week:u,year:p}}function $e(e,n,a){var t=wr(e,n,a),l=wr(e+1,n,a);return(nr(e)-t+l)/7}O("w",["ww",2],"wo","week"),O("W",["WW",2],"Wo","isoWeek"),x("w",C,wn),x("ww",C,ce),x("W",C,wn),x("WW",C,ce),er(["w","ww","W","WW"],function(e,n,a,t){n[t.substr(0,1)]=I(e)});function Rl(e){return tr(e,this._week.dow,this._week.doy).week}var Tl={dow:0,doy:6};function Al(){return this._week.dow}function ql(){return this._week.doy}function Fl(e){var n=this.localeData().week(this);return e==null?n:this.add((e-n)*7,"d")}function wl(e){var n=tr(this,1,4).week;return e==null?n:this.add((e-n)*7,"d")}O("d",0,"do","day"),O("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),O("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),O("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),O("e",0,0,"weekday"),O("E",0,0,"isoWeekday"),x("d",C),x("e",C),x("E",C),x("dd",function(e,n){return n.weekdaysMinRegex(e)}),x("ddd",function(e,n){return n.weekdaysShortRegex(e)}),x("dddd",function(e,n){return n.weekdaysRegex(e)}),er(["dd","ddd","dddd"],function(e,n,a,t){var l=a._locale.weekdaysParse(e,t,a._strict);l!=null?n.d=l:P(a).invalidWeekday=e}),er(["d","e","E"],function(e,n,a,t){n[t]=I(e)});function Pl(e,n){return typeof e!="string"?e:isNaN(e)?(e=n.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function _l(e,n){return typeof e=="string"?n.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Ta(e,n){return e.slice(n,7).concat(e.slice(0,n))}var xl="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),wt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Sl="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ol=Qn,Nl=Qn,El=Qn;function Vl(e,n){var a=k(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return e===!0?Ta(a,this._week.dow):e?a[e.day()]:a}function Ml(e){return e===!0?Ta(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Il(e){return e===!0?Ta(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Dl(e,n,a){var t,l,u,p=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)u=A([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(u,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(u,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(u,"").toLocaleLowerCase();return a?n==="dddd"?(l=Z.call(this._weekdaysParse,p),l!==-1?l:null):n==="ddd"?(l=Z.call(this._shortWeekdaysParse,p),l!==-1?l:null):(l=Z.call(this._minWeekdaysParse,p),l!==-1?l:null):n==="dddd"?(l=Z.call(this._weekdaysParse,p),l!==-1||(l=Z.call(this._shortWeekdaysParse,p),l!==-1)?l:(l=Z.call(this._minWeekdaysParse,p),l!==-1?l:null)):n==="ddd"?(l=Z.call(this._shortWeekdaysParse,p),l!==-1||(l=Z.call(this._weekdaysParse,p),l!==-1)?l:(l=Z.call(this._minWeekdaysParse,p),l!==-1?l:null)):(l=Z.call(this._minWeekdaysParse,p),l!==-1||(l=Z.call(this._weekdaysParse,p),l!==-1)?l:(l=Z.call(this._shortWeekdaysParse,p),l!==-1?l:null))}function Bl(e,n,a){var t,l,u;if(this._weekdaysParseExact)return Dl.call(this,e,n,a);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(l=A([2e3,1]).day(t),a&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(l,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(l,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(l,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(u="^"+this.weekdays(l,"")+"|^"+this.weekdaysShort(l,"")+"|^"+this.weekdaysMin(l,""),this._weekdaysParse[t]=new RegExp(u.replace(".",""),"i")),a&&n==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(a&&n==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(a&&n==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!a&&this._weekdaysParse[t].test(e))return t}}function Kl(e){if(!this.isValid())return e!=null?this:NaN;var n=rr(this,"Day");return e!=null?(e=Pl(e,this.localeData()),this.add(e-n,"d")):n}function Ll(e){if(!this.isValid())return e!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return e==null?n:this.add(e-n,"d")}function Yl(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var n=_l(e,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function Ul(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Aa.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=Ol),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function $l(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Aa.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Nl),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Hl(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Aa.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=El),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Aa(){function e(pe,ze){return ze.length-pe.length}var n=[],a=[],t=[],l=[],u,p,_,N,D;for(u=0;u<7;u++)p=A([2e3,1]).day(u),_=Le(this.weekdaysMin(p,"")),N=Le(this.weekdaysShort(p,"")),D=Le(this.weekdays(p,"")),n.push(_),a.push(N),t.push(D),l.push(_),l.push(N),l.push(D);n.sort(e),a.sort(e),t.sort(e),l.sort(e),this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function qa(){return this.hours()%12||12}function Gl(){return this.hours()||24}O("H",["HH",2],0,"hour"),O("h",["hh",2],0,qa),O("k",["kk",2],0,Gl),O("hmm",0,0,function(){return""+qa.apply(this)+Ve(this.minutes(),2)}),O("hmmss",0,0,function(){return""+qa.apply(this)+Ve(this.minutes(),2)+Ve(this.seconds(),2)}),O("Hmm",0,0,function(){return""+this.hours()+Ve(this.minutes(),2)}),O("Hmmss",0,0,function(){return""+this.hours()+Ve(this.minutes(),2)+Ve(this.seconds(),2)});function Pt(e,n){O(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}Pt("a",!0),Pt("A",!1);function _t(e,n){return n._meridiemParse}x("a",_t),x("A",_t),x("H",C,ba),x("h",C,wn),x("k",C,wn),x("HH",C,ce),x("hh",C,ce),x("kk",C,ce),x("hmm",ft),x("hmmss",ht),x("Hmm",ft),x("Hmmss",ht),$(["H","HH"],te),$(["k","kk"],function(e,n,a){var t=I(e);n[te]=t===24?0:t}),$(["a","A"],function(e,n,a){a._isPm=a._locale.isPM(e),a._meridiem=e}),$(["h","hh"],function(e,n,a){n[te]=I(e),P(a).bigHour=!0}),$("hmm",function(e,n,a){var t=e.length-2;n[te]=I(e.substr(0,t)),n[we]=I(e.substr(t)),P(a).bigHour=!0}),$("hmmss",function(e,n,a){var t=e.length-4,l=e.length-2;n[te]=I(e.substr(0,t)),n[we]=I(e.substr(t,2)),n[Ue]=I(e.substr(l)),P(a).bigHour=!0}),$("Hmm",function(e,n,a){var t=e.length-2;n[te]=I(e.substr(0,t)),n[we]=I(e.substr(t))}),$("Hmmss",function(e,n,a){var t=e.length-4,l=e.length-2;n[te]=I(e.substr(0,t)),n[we]=I(e.substr(t,2)),n[Ue]=I(e.substr(l))});function Cl(e){return(e+"").toLowerCase().charAt(0)==="p"}var Wl=/[ap]\.?m?\.?/i,zl=Pn("Hours",!0);function Jl(e,n,a){return e>11?a?"pm":"PM":a?"am":"AM"}var xt={calendar:Di,longDateFormat:Yi,invalidDate:$i,ordinal:Gi,dayOfMonthOrdinalParse:Ci,relativeTime:zi,months:gl,monthsShort:jt,week:Tl,weekdays:xl,weekdaysMin:Sl,weekdaysShort:wt,meridiemParse:Wl},z={},sr={},ir;function Xl(e,n){var a,t=Math.min(e.length,n.length);for(a=0;a<t;a+=1)if(e[a]!==n[a])return a;return t}function St(e){return e&&e.toLowerCase().replace("_","-")}function Zl(e){for(var n=0,a,t,l,u;n<e.length;){for(u=St(e[n]).split("-"),a=u.length,t=St(e[n+1]),t=t?t.split("-"):null;a>0;){if(l=Pr(u.slice(0,a).join("-")),l)return l;if(t&&t.length>=a&&Xl(u,t)>=a-1)break;a--}n++}return ir}function Ql(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Pr(e){var n=null,a;if(z[e]===void 0&&s&&s.exports&&Ql(e))try{n=ir._abbr,a=lg,a("./locale/"+e),rn(n)}catch{z[e]=null}return z[e]}function rn(e,n){var a;return e&&(f(n)?a=He(e):a=Fa(e,n),a?ir=a:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),ir._abbr}function Fa(e,n){if(n!==null){var a,t=xt;if(n.abbr=e,z[e]!=null)mt("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=z[e]._config;else if(n.parentLocale!=null)if(z[n.parentLocale]!=null)t=z[n.parentLocale]._config;else if(a=Pr(n.parentLocale),a!=null)t=a._config;else return sr[n.parentLocale]||(sr[n.parentLocale]=[]),sr[n.parentLocale].push({name:e,config:n}),null;return z[e]=new ka(ma(t,n)),sr[e]&&sr[e].forEach(function(l){Fa(l.name,l.config)}),rn(e),z[e]}else return delete z[e],null}function eo(e,n){if(n!=null){var a,t,l=xt;z[e]!=null&&z[e].parentLocale!=null?z[e].set(ma(z[e]._config,n)):(t=Pr(e),t!=null&&(l=t._config),n=ma(l,n),t==null&&(n.abbr=e),a=new ka(n),a.parentLocale=z[e],z[e]=a),rn(e)}else z[e]!=null&&(z[e].parentLocale!=null?(z[e]=z[e].parentLocale,e===rn()&&rn(e)):z[e]!=null&&delete z[e]);return z[e]}function He(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return ir;if(!k(e)){if(n=Pr(e),n)return n;e=[e]}return Zl(e)}function no(){return pa(z)}function wa(e){var n,a=e._a;return a&&P(e).overflow===-2&&(n=a[Ye]<0||a[Ye]>11?Ye:a[Me]<1||a[Me]>Ra(a[ge],a[Ye])?Me:a[te]<0||a[te]>24||a[te]===24&&(a[we]!==0||a[Ue]!==0||a[vn]!==0)?te:a[we]<0||a[we]>59?we:a[Ue]<0||a[Ue]>59?Ue:a[vn]<0||a[vn]>999?vn:-1,P(e)._overflowDayOfYear&&(n<ge||n>Me)&&(n=Me),P(e)._overflowWeeks&&n===-1&&(n=sl),P(e)._overflowWeekday&&n===-1&&(n=il),P(e).overflow=n),e}var ro=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ao=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,to=/Z|[+-]\d\d(?::?\d\d)?/,_r=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Pa=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],so=/^\/?Date\((-?\d+)/i,io=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,lo={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Ot(e){var n,a,t=e._i,l=ro.exec(t)||ao.exec(t),u,p,_,N,D=_r.length,pe=Pa.length;if(l){for(P(e).iso=!0,n=0,a=D;n<a;n++)if(_r[n][1].exec(l[1])){p=_r[n][0],u=_r[n][2]!==!1;break}if(p==null){e._isValid=!1;return}if(l[3]){for(n=0,a=pe;n<a;n++)if(Pa[n][1].exec(l[3])){_=(l[2]||" ")+Pa[n][0];break}if(_==null){e._isValid=!1;return}}if(!u&&_!=null){e._isValid=!1;return}if(l[4])if(to.exec(l[4]))N="Z";else{e._isValid=!1;return}e._f=p+(_||"")+(N||""),xa(e)}else e._isValid=!1}function oo(e,n,a,t,l,u){var p=[uo(e),jt.indexOf(n),parseInt(a,10),parseInt(t,10),parseInt(l,10)];return u&&p.push(parseInt(u,10)),p}function uo(e){var n=parseInt(e,10);return n<=49?2e3+n:n<=999?1900+n:n}function go(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function mo(e,n,a){if(e){var t=wt.indexOf(e),l=new Date(n[0],n[1],n[2]).getDay();if(t!==l)return P(a).weekdayMismatch=!0,a._isValid=!1,!1}return!0}function ko(e,n,a){if(e)return lo[e];if(n)return 0;var t=parseInt(a,10),l=t%100,u=(t-l)/100;return u*60+l}function Nt(e){var n=io.exec(go(e._i)),a;if(n){if(a=oo(n[4],n[3],n[2],n[5],n[6],n[7]),!mo(n[1],a,e))return;e._a=a,e._tzm=ko(n[8],n[9],n[10]),e._d=ar.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),P(e).rfc2822=!0}else e._isValid=!1}function po(e){var n=so.exec(e._i);if(n!==null){e._d=new Date(+n[1]);return}if(Ot(e),e._isValid===!1)delete e._isValid;else return;if(Nt(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=je("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function _n(e,n,a){return e??n??a}function vo(e){var n=new Date(d.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function _a(e){var n,a,t=[],l,u,p;if(!e._d){for(l=vo(e),e._w&&e._a[Me]==null&&e._a[Ye]==null&&yo(e),e._dayOfYear!=null&&(p=_n(e._a[ge],l[ge]),(e._dayOfYear>nr(p)||e._dayOfYear===0)&&(P(e)._overflowDayOfYear=!0),a=ar(p,0,e._dayOfYear),e._a[Ye]=a.getUTCMonth(),e._a[Me]=a.getUTCDate()),n=0;n<3&&e._a[n]==null;++n)e._a[n]=t[n]=l[n];for(;n<7;n++)e._a[n]=t[n]=e._a[n]==null?n===2?1:0:e._a[n];e._a[te]===24&&e._a[we]===0&&e._a[Ue]===0&&e._a[vn]===0&&(e._nextDay=!0,e._a[te]=0),e._d=(e._useUTC?ar:jl).apply(null,t),u=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[te]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==u&&(P(e).weekdayMismatch=!0)}}function yo(e){var n,a,t,l,u,p,_,N,D;n=e._w,n.GG!=null||n.W!=null||n.E!=null?(u=1,p=4,a=_n(n.GG,e._a[ge],tr(W(),1,4).year),t=_n(n.W,1),l=_n(n.E,1),(l<1||l>7)&&(N=!0)):(u=e._locale._week.dow,p=e._locale._week.doy,D=tr(W(),u,p),a=_n(n.gg,e._a[ge],D.year),t=_n(n.w,D.week),n.d!=null?(l=n.d,(l<0||l>6)&&(N=!0)):n.e!=null?(l=n.e+u,(n.e<0||n.e>6)&&(N=!0)):l=u),t<1||t>$e(a,u,p)?P(e)._overflowWeeks=!0:N!=null?P(e)._overflowWeekday=!0:(_=Ft(a,t,l,u,p),e._a[ge]=_.year,e._dayOfYear=_.dayOfYear)}d.ISO_8601=function(){},d.RFC_2822=function(){};function xa(e){if(e._f===d.ISO_8601){Ot(e);return}if(e._f===d.RFC_2822){Nt(e);return}e._a=[],P(e).empty=!0;var n=""+e._i,a,t,l,u,p,_=n.length,N=0,D,pe;for(l=kt(e._f,e._locale).match(va)||[],pe=l.length,a=0;a<pe;a++)u=l[a],t=(n.match(rl(u,e))||[])[0],t&&(p=n.substr(0,n.indexOf(t)),p.length>0&&P(e).unusedInput.push(p),n=n.slice(n.indexOf(t)+t.length),N+=t.length),qn[u]?(t?P(e).empty=!1:P(e).unusedTokens.push(u),tl(u,t,e)):e._strict&&!t&&P(e).unusedTokens.push(u);P(e).charsLeftOver=_-N,n.length>0&&P(e).unusedInput.push(n),e._a[te]<=12&&P(e).bigHour===!0&&e._a[te]>0&&(P(e).bigHour=void 0),P(e).parsedDateParts=e._a.slice(0),P(e).meridiem=e._meridiem,e._a[te]=fo(e._locale,e._a[te],e._meridiem),D=P(e).era,D!==null&&(e._a[ge]=e._locale.erasConvertYear(D,e._a[ge])),_a(e),wa(e)}function fo(e,n,a){var t;return a==null?n:e.meridiemHour!=null?e.meridiemHour(n,a):(e.isPM!=null&&(t=e.isPM(a),t&&n<12&&(n+=12),!t&&n===12&&(n=0)),n)}function ho(e){var n,a,t,l,u,p,_=!1,N=e._f.length;if(N===0){P(e).invalidFormat=!0,e._d=new Date(NaN);return}for(l=0;l<N;l++)u=0,p=!1,n=pn({},e),e._useUTC!=null&&(n._useUTC=e._useUTC),n._f=e._f[l],xa(n),Ne(n)&&(p=!0),u+=P(n).charsLeftOver,u+=P(n).unusedTokens.length*10,P(n).score=u,_?u<t&&(t=u,a=n):(t==null||u<t||p)&&(t=u,a=n,p&&(_=!0));w(e,a||n)}function co(e){if(!e._d){var n=fa(e._i),a=n.day===void 0?n.date:n.day;e._a=b([n.year,n.month,a,n.hour,n.minute,n.second,n.millisecond],function(t){return t&&parseInt(t,10)}),_a(e)}}function bo(e){var n=new Zn(wa(Et(e)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function Et(e){var n=e._i,a=e._f;return e._locale=e._locale||He(e._l),n===null||a===void 0&&n===""?X({nullInput:!0}):(typeof n=="string"&&(e._i=n=e._locale.preparse(n)),Fe(n)?new Zn(wa(n)):(F(n)?e._d=n:k(a)?ho(e):a?xa(e):jo(e),Ne(e)||(e._d=null),e))}function jo(e){var n=e._i;f(n)?e._d=new Date(d.now()):F(n)?e._d=new Date(n.valueOf()):typeof n=="string"?po(e):k(n)?(e._a=b(n.slice(0),function(a){return parseInt(a,10)}),_a(e)):v(n)?co(e):j(n)?e._d=new Date(n):d.createFromInputFallback(e)}function Vt(e,n,a,t,l){var u={};return(n===!0||n===!1)&&(t=n,n=void 0),(a===!0||a===!1)&&(t=a,a=void 0),(v(e)&&h(e)||k(e)&&e.length===0)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=l,u._l=a,u._i=e,u._f=n,u._strict=t,bo(u)}function W(e,n,a,t){return Vt(e,n,a,t,!1)}var Ro=je("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:X()}),To=je("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:X()});function Mt(e,n){var a,t;if(n.length===1&&k(n[0])&&(n=n[0]),!n.length)return W();for(a=n[0],t=1;t<n.length;++t)(!n[t].isValid()||n[t][e](a))&&(a=n[t]);return a}function Ao(){var e=[].slice.call(arguments,0);return Mt("isBefore",e)}function qo(){var e=[].slice.call(arguments,0);return Mt("isAfter",e)}var Fo=function(){return Date.now?Date.now():+new Date},lr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function wo(e){var n,a=!1,t,l=lr.length;for(n in e)if(m(e,n)&&!(Z.call(lr,n)!==-1&&(e[n]==null||!isNaN(e[n]))))return!1;for(t=0;t<l;++t)if(e[lr[t]]){if(a)return!1;parseFloat(e[lr[t]])!==I(e[lr[t]])&&(a=!0)}return!0}function Po(){return this._isValid}function _o(){return Pe(NaN)}function xr(e){var n=fa(e),a=n.year||0,t=n.quarter||0,l=n.month||0,u=n.week||n.isoWeek||0,p=n.day||0,_=n.hour||0,N=n.minute||0,D=n.second||0,pe=n.millisecond||0;this._isValid=wo(n),this._milliseconds=+pe+D*1e3+N*6e4+_*1e3*60*60,this._days=+p+u*7,this._months=+l+t*3+a*12,this._data={},this._locale=He(),this._bubble()}function Sr(e){return e instanceof xr}function Sa(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function xo(e,n,a){var t=Math.min(e.length,n.length),l=Math.abs(e.length-n.length),u=0,p;for(p=0;p<t;p++)I(e[p])!==I(n[p])&&u++;return u+l}function It(e,n){O(e,0,0,function(){var a=this.utcOffset(),t="+";return a<0&&(a=-a,t="-"),t+Ve(~~(a/60),2)+n+Ve(~~a%60,2)})}It("Z",":"),It("ZZ",""),x("Z",Ar),x("ZZ",Ar),$(["Z","ZZ"],function(e,n,a){a._useUTC=!0,a._tzm=Oa(Ar,e)});var So=/([\+\-]|\d\d)/gi;function Oa(e,n){var a=(n||"").match(e),t,l,u;return a===null?null:(t=a[a.length-1]||[],l=(t+"").match(So)||["-",0,0],u=+(l[1]*60)+I(l[2]),u===0?0:l[0]==="+"?u:-u)}function Na(e,n){var a,t;return n._isUTC?(a=n.clone(),t=(Fe(e)||F(e)?e.valueOf():W(e).valueOf())-a.valueOf(),a._d.setTime(a._d.valueOf()+t),d.updateOffset(a,!1),a):W(e).local()}function Ea(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function Oo(e,n,a){var t=this._offset||0,l;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Oa(Ar,e),e===null)return this}else Math.abs(e)<16&&!a&&(e=e*60);return!this._isUTC&&n&&(l=Ea(this)),this._offset=e,this._isUTC=!0,l!=null&&this.add(l,"m"),t!==e&&(!n||this._changeInProgress?Lt(this,Pe(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:Ea(this)}function No(e,n){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,n),this):-this.utcOffset()}function Eo(e){return this.utcOffset(0,e)}function Vo(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ea(this),"m")),this}function Mo(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Oa(el,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Io(e){return this.isValid()?(e=e?W(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Do(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Bo(){if(!f(this._isDSTShifted))return this._isDSTShifted;var e={},n;return pn(e,this),e=Et(e),e._a?(n=e._isUTC?A(e._a):W(e._a),this._isDSTShifted=this.isValid()&&xo(e._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Ko(){return this.isValid()?!this._isUTC:!1}function Lo(){return this.isValid()?this._isUTC:!1}function Dt(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Yo=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Uo=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Pe(e,n){var a=e,t=null,l,u,p;return Sr(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:j(e)||!isNaN(+e)?(a={},n?a[n]=+e:a.milliseconds=+e):(t=Yo.exec(e))?(l=t[1]==="-"?-1:1,a={y:0,d:I(t[Me])*l,h:I(t[te])*l,m:I(t[we])*l,s:I(t[Ue])*l,ms:I(Sa(t[vn]*1e3))*l}):(t=Uo.exec(e))?(l=t[1]==="-"?-1:1,a={y:yn(t[2],l),M:yn(t[3],l),w:yn(t[4],l),d:yn(t[5],l),h:yn(t[6],l),m:yn(t[7],l),s:yn(t[8],l)}):a==null?a={}:typeof a=="object"&&("from"in a||"to"in a)&&(p=$o(W(a.from),W(a.to)),a={},a.ms=p.milliseconds,a.M=p.months),u=new xr(a),Sr(e)&&m(e,"_locale")&&(u._locale=e._locale),Sr(e)&&m(e,"_isValid")&&(u._isValid=e._isValid),u}Pe.fn=xr.prototype,Pe.invalid=_o;function yn(e,n){var a=e&&parseFloat(e.replace(",","."));return(isNaN(a)?0:a)*n}function Bt(e,n){var a={};return a.months=n.month()-e.month()+(n.year()-e.year())*12,e.clone().add(a.months,"M").isAfter(n)&&--a.months,a.milliseconds=+n-+e.clone().add(a.months,"M"),a}function $o(e,n){var a;return e.isValid()&&n.isValid()?(n=Na(n,e),e.isBefore(n)?a=Bt(e,n):(a=Bt(n,e),a.milliseconds=-a.milliseconds,a.months=-a.months),a):{milliseconds:0,months:0}}function Kt(e,n){return function(a,t){var l,u;return t!==null&&!isNaN(+t)&&(mt(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),u=a,a=t,t=u),l=Pe(a,t),Lt(this,l,e),this}}function Lt(e,n,a,t){var l=n._milliseconds,u=Sa(n._days),p=Sa(n._months);e.isValid()&&(t=t??!0,p&&Tt(e,rr(e,"Month")+p*a),u&&bt(e,"Date",rr(e,"Date")+u*a),l&&e._d.setTime(e._d.valueOf()+l*a),t&&d.updateOffset(e,u||p))}var Ho=Kt(1,"add"),Go=Kt(-1,"subtract");function Yt(e){return typeof e=="string"||e instanceof String}function Co(e){return Fe(e)||F(e)||Yt(e)||j(e)||zo(e)||Wo(e)||e===null||e===void 0}function Wo(e){var n=v(e)&&!h(e),a=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],l,u,p=t.length;for(l=0;l<p;l+=1)u=t[l],a=a||m(e,u);return n&&a}function zo(e){var n=k(e),a=!1;return n&&(a=e.filter(function(t){return!j(t)&&Yt(e)}).length===0),n&&a}function Jo(e){var n=v(e)&&!h(e),a=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],l,u;for(l=0;l<t.length;l+=1)u=t[l],a=a||m(e,u);return n&&a}function Xo(e,n){var a=e.diff(n,"days",!0);return a<-6?"sameElse":a<-1?"lastWeek":a<0?"lastDay":a<1?"sameDay":a<2?"nextDay":a<7?"nextWeek":"sameElse"}function Zo(e,n){arguments.length===1&&(arguments[0]?Co(arguments[0])?(e=arguments[0],n=void 0):Jo(arguments[0])&&(n=arguments[0],e=void 0):(e=void 0,n=void 0));var a=e||W(),t=Na(a,this).startOf("day"),l=d.calendarFormat(this,t)||"sameElse",u=n&&(Ee(n[l])?n[l].call(this,a):n[l]);return this.format(u||this.localeData().calendar(l,this,W(a)))}function Qo(){return new Zn(this)}function ed(e,n){var a=Fe(e)?e:W(e);return this.isValid()&&a.isValid()?(n=Re(n)||"millisecond",n==="millisecond"?this.valueOf()>a.valueOf():a.valueOf()<this.clone().startOf(n).valueOf()):!1}function nd(e,n){var a=Fe(e)?e:W(e);return this.isValid()&&a.isValid()?(n=Re(n)||"millisecond",n==="millisecond"?this.valueOf()<a.valueOf():this.clone().endOf(n).valueOf()<a.valueOf()):!1}function rd(e,n,a,t){var l=Fe(e)?e:W(e),u=Fe(n)?n:W(n);return this.isValid()&&l.isValid()&&u.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(l,a):!this.isBefore(l,a))&&(t[1]===")"?this.isBefore(u,a):!this.isAfter(u,a))):!1}function ad(e,n){var a=Fe(e)?e:W(e),t;return this.isValid()&&a.isValid()?(n=Re(n)||"millisecond",n==="millisecond"?this.valueOf()===a.valueOf():(t=a.valueOf(),this.clone().startOf(n).valueOf()<=t&&t<=this.clone().endOf(n).valueOf())):!1}function td(e,n){return this.isSame(e,n)||this.isAfter(e,n)}function sd(e,n){return this.isSame(e,n)||this.isBefore(e,n)}function id(e,n,a){var t,l,u;if(!this.isValid())return NaN;if(t=Na(e,this),!t.isValid())return NaN;switch(l=(t.utcOffset()-this.utcOffset())*6e4,n=Re(n),n){case"year":u=Or(this,t)/12;break;case"month":u=Or(this,t);break;case"quarter":u=Or(this,t)/3;break;case"second":u=(this-t)/1e3;break;case"minute":u=(this-t)/6e4;break;case"hour":u=(this-t)/36e5;break;case"day":u=(this-t-l)/864e5;break;case"week":u=(this-t-l)/6048e5;break;default:u=this-t}return a?u:Te(u)}function Or(e,n){if(e.date()<n.date())return-Or(n,e);var a=(n.year()-e.year())*12+(n.month()-e.month()),t=e.clone().add(a,"months"),l,u;return n-t<0?(l=e.clone().add(a-1,"months"),u=(n-t)/(t-l)):(l=e.clone().add(a+1,"months"),u=(n-t)/(l-t)),-(a+u)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function ld(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function od(e){if(!this.isValid())return null;var n=e!==!0,a=n?this.clone().utc():this;return a.year()<0||a.year()>9999?cr(a,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Ee(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",cr(a,"Z")):cr(a,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function dd(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",n="",a,t,l,u;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),a="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",l="-MM-DD[T]HH:mm:ss.SSS",u=n+'[")]',this.format(a+t+l+u)}function ud(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var n=cr(this,e);return this.localeData().postformat(n)}function gd(e,n){return this.isValid()&&(Fe(e)&&e.isValid()||W(e).isValid())?Pe({to:this,from:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function md(e){return this.from(W(),e)}function kd(e,n){return this.isValid()&&(Fe(e)&&e.isValid()||W(e).isValid())?Pe({from:this,to:e}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function pd(e){return this.to(W(),e)}function Ut(e){var n;return e===void 0?this._locale._abbr:(n=He(e),n!=null&&(this._locale=n),this)}var $t=je("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Ht(){return this._locale}var Nr=1e3,xn=60*Nr,Er=60*xn,Gt=(365*400+97)*24*Er;function Sn(e,n){return(e%n+n)%n}function Ct(e,n,a){return e<100&&e>=0?new Date(e+400,n,a)-Gt:new Date(e,n,a).valueOf()}function Wt(e,n,a){return e<100&&e>=0?Date.UTC(e+400,n,a)-Gt:Date.UTC(e,n,a)}function vd(e){var n,a;if(e=Re(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(a=this._isUTC?Wt:Ct,e){case"year":n=a(this.year(),0,1);break;case"quarter":n=a(this.year(),this.month()-this.month()%3,1);break;case"month":n=a(this.year(),this.month(),1);break;case"week":n=a(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=a(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=a(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=Sn(n+(this._isUTC?0:this.utcOffset()*xn),Er);break;case"minute":n=this._d.valueOf(),n-=Sn(n,xn);break;case"second":n=this._d.valueOf(),n-=Sn(n,Nr);break}return this._d.setTime(n),d.updateOffset(this,!0),this}function yd(e){var n,a;if(e=Re(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(a=this._isUTC?Wt:Ct,e){case"year":n=a(this.year()+1,0,1)-1;break;case"quarter":n=a(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=a(this.year(),this.month()+1,1)-1;break;case"week":n=a(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=a(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=a(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=Er-Sn(n+(this._isUTC?0:this.utcOffset()*xn),Er)-1;break;case"minute":n=this._d.valueOf(),n+=xn-Sn(n,xn)-1;break;case"second":n=this._d.valueOf(),n+=Nr-Sn(n,Nr)-1;break}return this._d.setTime(n),d.updateOffset(this,!0),this}function fd(){return this._d.valueOf()-(this._offset||0)*6e4}function hd(){return Math.floor(this.valueOf()/1e3)}function cd(){return new Date(this.valueOf())}function bd(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function jd(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Rd(){return this.isValid()?this.toISOString():null}function Td(){return Ne(this)}function Ad(){return w({},P(this))}function qd(){return P(this).overflow}function Fd(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}O("N",0,0,"eraAbbr"),O("NN",0,0,"eraAbbr"),O("NNN",0,0,"eraAbbr"),O("NNNN",0,0,"eraName"),O("NNNNN",0,0,"eraNarrow"),O("y",["y",1],"yo","eraYear"),O("y",["yy",2],0,"eraYear"),O("y",["yyy",3],0,"eraYear"),O("y",["yyyy",4],0,"eraYear"),x("N",Va),x("NN",Va),x("NNN",Va),x("NNNN",Id),x("NNNNN",Dd),$(["N","NN","NNN","NNNN","NNNNN"],function(e,n,a,t){var l=a._locale.erasParse(e,t,a._strict);l?P(a).era=l:P(a).invalidEra=e}),x("y",Fn),x("yy",Fn),x("yyy",Fn),x("yyyy",Fn),x("yo",Bd),$(["y","yy","yyy","yyyy"],ge),$(["yo"],function(e,n,a,t){var l;a._locale._eraYearOrdinalRegex&&(l=e.match(a._locale._eraYearOrdinalRegex)),a._locale.eraYearOrdinalParse?n[ge]=a._locale.eraYearOrdinalParse(e,l):n[ge]=parseInt(e,10)});function wd(e,n){var a,t,l,u=this._eras||He("en")._eras;for(a=0,t=u.length;a<t;++a){switch(typeof u[a].since){case"string":l=d(u[a].since).startOf("day"),u[a].since=l.valueOf();break}switch(typeof u[a].until){case"undefined":u[a].until=1/0;break;case"string":l=d(u[a].until).startOf("day").valueOf(),u[a].until=l.valueOf();break}}return u}function Pd(e,n,a){var t,l,u=this.eras(),p,_,N;for(e=e.toUpperCase(),t=0,l=u.length;t<l;++t)if(p=u[t].name.toUpperCase(),_=u[t].abbr.toUpperCase(),N=u[t].narrow.toUpperCase(),a)switch(n){case"N":case"NN":case"NNN":if(_===e)return u[t];break;case"NNNN":if(p===e)return u[t];break;case"NNNNN":if(N===e)return u[t];break}else if([p,_,N].indexOf(e)>=0)return u[t]}function _d(e,n){var a=e.since<=e.until?1:-1;return n===void 0?d(e.since).year():d(e.since).year()+(n-e.offset)*a}function xd(){var e,n,a,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(a=this.clone().startOf("day").valueOf(),t[e].since<=a&&a<=t[e].until||t[e].until<=a&&a<=t[e].since)return t[e].name;return""}function Sd(){var e,n,a,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(a=this.clone().startOf("day").valueOf(),t[e].since<=a&&a<=t[e].until||t[e].until<=a&&a<=t[e].since)return t[e].narrow;return""}function Od(){var e,n,a,t=this.localeData().eras();for(e=0,n=t.length;e<n;++e)if(a=this.clone().startOf("day").valueOf(),t[e].since<=a&&a<=t[e].until||t[e].until<=a&&a<=t[e].since)return t[e].abbr;return""}function Nd(){var e,n,a,t,l=this.localeData().eras();for(e=0,n=l.length;e<n;++e)if(a=l[e].since<=l[e].until?1:-1,t=this.clone().startOf("day").valueOf(),l[e].since<=t&&t<=l[e].until||l[e].until<=t&&t<=l[e].since)return(this.year()-d(l[e].since).year())*a+l[e].offset;return this.year()}function Ed(e){return m(this,"_erasNameRegex")||Ma.call(this),e?this._erasNameRegex:this._erasRegex}function Vd(e){return m(this,"_erasAbbrRegex")||Ma.call(this),e?this._erasAbbrRegex:this._erasRegex}function Md(e){return m(this,"_erasNarrowRegex")||Ma.call(this),e?this._erasNarrowRegex:this._erasRegex}function Va(e,n){return n.erasAbbrRegex(e)}function Id(e,n){return n.erasNameRegex(e)}function Dd(e,n){return n.erasNarrowRegex(e)}function Bd(e,n){return n._eraYearOrdinalRegex||Fn}function Ma(){var e=[],n=[],a=[],t=[],l,u,p,_,N,D=this.eras();for(l=0,u=D.length;l<u;++l)p=Le(D[l].name),_=Le(D[l].abbr),N=Le(D[l].narrow),n.push(p),e.push(_),a.push(N),t.push(p),t.push(_),t.push(N);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+a.join("|")+")","i")}O(0,["gg",2],0,function(){return this.weekYear()%100}),O(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Vr(e,n){O(0,[e,e.length],0,n)}Vr("gggg","weekYear"),Vr("ggggg","weekYear"),Vr("GGGG","isoWeekYear"),Vr("GGGGG","isoWeekYear"),x("G",Tr),x("g",Tr),x("GG",C,ce),x("gg",C,ce),x("GGGG",ca,ha),x("gggg",ca,ha),x("GGGGG",Rr,br),x("ggggg",Rr,br),er(["gggg","ggggg","GGGG","GGGGG"],function(e,n,a,t){n[t.substr(0,2)]=I(e)}),er(["gg","GG"],function(e,n,a,t){n[t]=d.parseTwoDigitYear(e)});function Kd(e){return zt.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Ld(e){return zt.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Yd(){return $e(this.year(),1,4)}function Ud(){return $e(this.isoWeekYear(),1,4)}function $d(){var e=this.localeData()._week;return $e(this.year(),e.dow,e.doy)}function Hd(){var e=this.localeData()._week;return $e(this.weekYear(),e.dow,e.doy)}function zt(e,n,a,t,l){var u;return e==null?tr(this,t,l).year:(u=$e(e,t,l),n>u&&(n=u),Gd.call(this,e,n,a,t,l))}function Gd(e,n,a,t,l){var u=Ft(e,n,a,t,l),p=ar(u.year,0,u.dayOfYear);return this.year(p.getUTCFullYear()),this.month(p.getUTCMonth()),this.date(p.getUTCDate()),this}O("Q",0,"Qo","quarter"),x("Q",vt),$("Q",function(e,n){n[Ye]=(I(e)-1)*3});function Cd(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}O("D",["DD",2],"Do","date"),x("D",C,wn),x("DD",C,ce),x("Do",function(e,n){return e?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient}),$(["D","DD"],Me),$("Do",function(e,n){n[Me]=I(e.match(C)[0])});var Jt=Pn("Date",!0);O("DDD",["DDDD",3],"DDDo","dayOfYear"),x("DDD",jr),x("DDDD",yt),$(["DDD","DDDD"],function(e,n,a){a._dayOfYear=I(e)});function Wd(e){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?n:this.add(e-n,"d")}O("m",["mm",2],0,"minute"),x("m",C,ba),x("mm",C,ce),$(["m","mm"],we);var zd=Pn("Minutes",!1);O("s",["ss",2],0,"second"),x("s",C,ba),x("ss",C,ce),$(["s","ss"],Ue);var Jd=Pn("Seconds",!1);O("S",0,0,function(){return~~(this.millisecond()/100)}),O(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),O(0,["SSS",3],0,"millisecond"),O(0,["SSSS",4],0,function(){return this.millisecond()*10}),O(0,["SSSSS",5],0,function(){return this.millisecond()*100}),O(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),O(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),O(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),O(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),x("S",jr,vt),x("SS",jr,ce),x("SSS",jr,yt);var an,Xt;for(an="SSSS";an.length<=9;an+="S")x(an,Fn);function Xd(e,n){n[vn]=I(("0."+e)*1e3)}for(an="S";an.length<=9;an+="S")$(an,Xd);Xt=Pn("Milliseconds",!1),O("z",0,0,"zoneAbbr"),O("zz",0,0,"zoneName");function Zd(){return this._isUTC?"UTC":""}function Qd(){return this._isUTC?"Coordinated Universal Time":""}var R=Zn.prototype;R.add=Ho,R.calendar=Zo,R.clone=Qo,R.diff=id,R.endOf=yd,R.format=ud,R.from=gd,R.fromNow=md,R.to=kd,R.toNow=pd,R.get=ol,R.invalidAt=qd,R.isAfter=ed,R.isBefore=nd,R.isBetween=rd,R.isSame=ad,R.isSameOrAfter=td,R.isSameOrBefore=sd,R.isValid=Td,R.lang=$t,R.locale=Ut,R.localeData=Ht,R.max=To,R.min=Ro,R.parsingFlags=Ad,R.set=dl,R.startOf=vd,R.subtract=Go,R.toArray=bd,R.toObject=jd,R.toDate=cd,R.toISOString=od,R.inspect=dd,typeof Symbol<"u"&&Symbol.for!=null&&(R[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),R.toJSON=Rd,R.toString=ld,R.unix=hd,R.valueOf=fd,R.creationData=Fd,R.eraName=xd,R.eraNarrow=Sd,R.eraAbbr=Od,R.eraYear=Nd,R.year=ct,R.isLeapYear=ll,R.weekYear=Kd,R.isoWeekYear=Ld,R.quarter=R.quarters=Cd,R.month=At,R.daysInMonth=hl,R.week=R.weeks=Fl,R.isoWeek=R.isoWeeks=wl,R.weeksInYear=$d,R.weeksInWeekYear=Hd,R.isoWeeksInYear=Yd,R.isoWeeksInISOWeekYear=Ud,R.date=Jt,R.day=R.days=Kl,R.weekday=Ll,R.isoWeekday=Yl,R.dayOfYear=Wd,R.hour=R.hours=zl,R.minute=R.minutes=zd,R.second=R.seconds=Jd,R.millisecond=R.milliseconds=Xt,R.utcOffset=Oo,R.utc=Eo,R.local=Vo,R.parseZone=Mo,R.hasAlignedHourOffset=Io,R.isDST=Do,R.isLocal=Ko,R.isUtcOffset=Lo,R.isUtc=Dt,R.isUTC=Dt,R.zoneAbbr=Zd,R.zoneName=Qd,R.dates=je("dates accessor is deprecated. Use date instead.",Jt),R.months=je("months accessor is deprecated. Use month instead",At),R.years=je("years accessor is deprecated. Use year instead",ct),R.zone=je("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",No),R.isDSTShifted=je("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Bo);function eu(e){return W(e*1e3)}function nu(){return W.apply(null,arguments).parseZone()}function Zt(e){return e}var K=ka.prototype;K.calendar=Bi,K.longDateFormat=Ui,K.invalidDate=Hi,K.ordinal=Wi,K.preparse=Zt,K.postformat=Zt,K.relativeTime=Ji,K.pastFuture=Xi,K.set=Ii,K.eras=wd,K.erasParse=Pd,K.erasConvertYear=_d,K.erasAbbrRegex=Vd,K.erasNameRegex=Ed,K.erasNarrowRegex=Md,K.months=pl,K.monthsShort=vl,K.monthsParse=fl,K.monthsRegex=bl,K.monthsShortRegex=cl,K.week=Rl,K.firstDayOfYear=ql,K.firstDayOfWeek=Al,K.weekdays=Vl,K.weekdaysMin=Il,K.weekdaysShort=Ml,K.weekdaysParse=Bl,K.weekdaysRegex=Ul,K.weekdaysShortRegex=$l,K.weekdaysMinRegex=Hl,K.isPM=Cl,K.meridiem=Jl;function Mr(e,n,a,t){var l=He(),u=A().set(t,n);return l[a](u,e)}function Qt(e,n,a){if(j(e)&&(n=e,e=void 0),e=e||"",n!=null)return Mr(e,n,a,"month");var t,l=[];for(t=0;t<12;t++)l[t]=Mr(e,t,a,"month");return l}function Ia(e,n,a,t){typeof e=="boolean"?(j(n)&&(a=n,n=void 0),n=n||""):(n=e,a=n,e=!1,j(n)&&(a=n,n=void 0),n=n||"");var l=He(),u=e?l._week.dow:0,p,_=[];if(a!=null)return Mr(n,(a+u)%7,t,"day");for(p=0;p<7;p++)_[p]=Mr(n,(p+u)%7,t,"day");return _}function ru(e,n){return Qt(e,n,"months")}function au(e,n){return Qt(e,n,"monthsShort")}function tu(e,n,a){return Ia(e,n,a,"weekdays")}function su(e,n,a){return Ia(e,n,a,"weekdaysShort")}function iu(e,n,a){return Ia(e,n,a,"weekdaysMin")}rn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var n=e%10,a=I(e%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return e+a}}),d.lang=je("moment.lang is deprecated. Use moment.locale instead.",rn),d.langData=je("moment.langData is deprecated. Use moment.localeData instead.",He);var Ge=Math.abs;function lu(){var e=this._data;return this._milliseconds=Ge(this._milliseconds),this._days=Ge(this._days),this._months=Ge(this._months),e.milliseconds=Ge(e.milliseconds),e.seconds=Ge(e.seconds),e.minutes=Ge(e.minutes),e.hours=Ge(e.hours),e.months=Ge(e.months),e.years=Ge(e.years),this}function es(e,n,a,t){var l=Pe(n,a);return e._milliseconds+=t*l._milliseconds,e._days+=t*l._days,e._months+=t*l._months,e._bubble()}function ou(e,n){return es(this,e,n,1)}function du(e,n){return es(this,e,n,-1)}function ns(e){return e<0?Math.floor(e):Math.ceil(e)}function uu(){var e=this._milliseconds,n=this._days,a=this._months,t=this._data,l,u,p,_,N;return e>=0&&n>=0&&a>=0||e<=0&&n<=0&&a<=0||(e+=ns(Da(a)+n)*864e5,n=0,a=0),t.milliseconds=e%1e3,l=Te(e/1e3),t.seconds=l%60,u=Te(l/60),t.minutes=u%60,p=Te(u/60),t.hours=p%24,n+=Te(p/24),N=Te(rs(n)),a+=N,n-=ns(Da(N)),_=Te(a/12),a%=12,t.days=n,t.months=a,t.years=_,this}function rs(e){return e*4800/146097}function Da(e){return e*146097/4800}function gu(e){if(!this.isValid())return NaN;var n,a,t=this._milliseconds;if(e=Re(e),e==="month"||e==="quarter"||e==="year")switch(n=this._days+t/864e5,a=this._months+rs(n),e){case"month":return a;case"quarter":return a/3;case"year":return a/12}else switch(n=this._days+Math.round(Da(this._months)),e){case"week":return n/7+t/6048e5;case"day":return n+t/864e5;case"hour":return n*24+t/36e5;case"minute":return n*1440+t/6e4;case"second":return n*86400+t/1e3;case"millisecond":return Math.floor(n*864e5)+t;default:throw new Error("Unknown unit "+e)}}function Ce(e){return function(){return this.as(e)}}var as=Ce("ms"),mu=Ce("s"),ku=Ce("m"),pu=Ce("h"),vu=Ce("d"),yu=Ce("w"),fu=Ce("M"),hu=Ce("Q"),cu=Ce("y"),bu=as;function ju(){return Pe(this)}function Ru(e){return e=Re(e),this.isValid()?this[e+"s"]():NaN}function fn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Tu=fn("milliseconds"),Au=fn("seconds"),qu=fn("minutes"),Fu=fn("hours"),wu=fn("days"),Pu=fn("months"),_u=fn("years");function xu(){return Te(this.days()/7)}var We=Math.round,On={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Su(e,n,a,t,l){return l.relativeTime(n||1,!!a,e,t)}function Ou(e,n,a,t){var l=Pe(e).abs(),u=We(l.as("s")),p=We(l.as("m")),_=We(l.as("h")),N=We(l.as("d")),D=We(l.as("M")),pe=We(l.as("w")),ze=We(l.as("y")),tn=u<=a.ss&&["s",u]||u<a.s&&["ss",u]||p<=1&&["m"]||p<a.m&&["mm",p]||_<=1&&["h"]||_<a.h&&["hh",_]||N<=1&&["d"]||N<a.d&&["dd",N];return a.w!=null&&(tn=tn||pe<=1&&["w"]||pe<a.w&&["ww",pe]),tn=tn||D<=1&&["M"]||D<a.M&&["MM",D]||ze<=1&&["y"]||["yy",ze],tn[2]=n,tn[3]=+e>0,tn[4]=t,Su.apply(null,tn)}function Nu(e){return e===void 0?We:typeof e=="function"?(We=e,!0):!1}function Eu(e,n){return On[e]===void 0?!1:n===void 0?On[e]:(On[e]=n,e==="s"&&(On.ss=n-1),!0)}function Vu(e,n){if(!this.isValid())return this.localeData().invalidDate();var a=!1,t=On,l,u;return typeof e=="object"&&(n=e,e=!1),typeof e=="boolean"&&(a=e),typeof n=="object"&&(t=Object.assign({},On,n),n.s!=null&&n.ss==null&&(t.ss=n.s-1)),l=this.localeData(),u=Ou(this,!a,t,l),a&&(u=l.pastFuture(+this,u)),l.postformat(u)}var Ba=Math.abs;function Nn(e){return(e>0)-(e<0)||+e}function Ir(){if(!this.isValid())return this.localeData().invalidDate();var e=Ba(this._milliseconds)/1e3,n=Ba(this._days),a=Ba(this._months),t,l,u,p,_=this.asSeconds(),N,D,pe,ze;return _?(t=Te(e/60),l=Te(t/60),e%=60,t%=60,u=Te(a/12),a%=12,p=e?e.toFixed(3).replace(/\.?0+$/,""):"",N=_<0?"-":"",D=Nn(this._months)!==Nn(_)?"-":"",pe=Nn(this._days)!==Nn(_)?"-":"",ze=Nn(this._milliseconds)!==Nn(_)?"-":"",N+"P"+(u?D+u+"Y":"")+(a?D+a+"M":"")+(n?pe+n+"D":"")+(l||t||e?"T":"")+(l?ze+l+"H":"")+(t?ze+t+"M":"")+(e?ze+p+"S":"")):"P0D"}var B=xr.prototype;B.isValid=Po,B.abs=lu,B.add=ou,B.subtract=du,B.as=gu,B.asMilliseconds=as,B.asSeconds=mu,B.asMinutes=ku,B.asHours=pu,B.asDays=vu,B.asWeeks=yu,B.asMonths=fu,B.asQuarters=hu,B.asYears=cu,B.valueOf=bu,B._bubble=uu,B.clone=ju,B.get=Ru,B.milliseconds=Tu,B.seconds=Au,B.minutes=qu,B.hours=Fu,B.days=wu,B.weeks=xu,B.months=Pu,B.years=_u,B.humanize=Vu,B.toISOString=Ir,B.toString=Ir,B.toJSON=Ir,B.locale=Ut,B.localeData=Ht,B.toIsoString=je("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ir),B.lang=$t,O("X",0,0,"unix"),O("x",0,0,"valueOf"),x("x",Tr),x("X",nl),$("X",function(e,n,a){a._d=new Date(parseFloat(e)*1e3)}),$("x",function(e,n,a){a._d=new Date(I(e))});//! moment.js
return d.version="2.30.1",g(W),d.fn=R,d.min=Ao,d.max=qo,d.now=Fo,d.utc=A,d.unix=eu,d.months=ru,d.isDate=F,d.locale=rn,d.invalid=X,d.duration=Pe,d.isMoment=Fe,d.weekdays=tu,d.parseZone=nu,d.localeData=He,d.isDuration=Sr,d.monthsShort=au,d.weekdaysMin=iu,d.defineLocale=Fa,d.updateLocale=eo,d.locales=no,d.weekdaysShort=su,d.normalizeUnits=Re,d.relativeTimeRounding=Nu,d.relativeTimeThreshold=Eu,d.calendarFormat=Xo,d.prototype=R,d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},d})})(ji);var Om=ji.exports;const As=Bu(Om),Nm="_graderesHeader_jfwkn_1",Em="_smalHeader_jfwkn_5",Vm="_notLastRow_jfwkn_9",Mm="_placeRemoveButton_jfwkn_13",Im="_prosentHeader_jfwkn_17",Vn={graderesHeader:Nm,smalHeader:Em,notLastRow:Vm,placeRemoveButton:Mm,prosentHeader:Im},Qe="tidsromPermisjon",Ae="graderingPeriode",Dm=Xu(9),qs=s=>()=>{const o=s(`${Qe}.${Ae}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},Fs=(s,i,o)=>()=>{const d=s(`${Qe}.${Ae}.${i}.periodeFom`),g=s(`${Qe}.${Ae}.${i}.periodeTom`);return!g||!d?null:o?qe(g)(d):Se(d)(g)},Bm=(s,i)=>o=>s(`${Qe}.${Ae}.${i}.arbeidskategoriType`)===Tn.ARBEIDSTAKER?q(o):void 0,Km=s=>{if(s)return s.length===11?Ys(s):Dm(s)},ws={periodeFom:"",periodeTom:"",periodeForGradering:"",prosentandelArbeid:"",skalGraderes:!1},Lm=[Tn.ARBEIDSTAKER,Tn.SELVSTENDIG_NAERINGSDRIVENDE,Tn.FRILANSER],Ps=pr(100),Ym=s=>s.filter(({kode:i})=>ot.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Um=s=>s.filter(({kode:i})=>Lm.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Ri=({graderingKvoter:s,readOnly:i,arbeidskategoriTyper:o})=>{const d=H(),{watch:g,control:k,getValues:v,trigger:m,formState:{isSubmitted:h}}=Y(),{fields:f,remove:j,append:F}=he({control:k,name:`${Qe}.${Ae}`}),b=g(`${Qe}.${Ae}`);return V.useEffect(()=>{f.length===0&&F(ws)},[]),r.jsx(Oe,{fields:f,emptyPeriodTemplate:ws,bodyText:d.formatMessage({id:"Registrering.Permisjon.Gradering.LeggTilPeriode"}),readOnly:i,remove:j,append:F,children:(w,A,S)=>{const{harSamtidigUttak:P,periodeFom:G}=b[A],Ne=G&&As(G,An).isBefore(As("2019-01-01")),X=`${Qe}.${Ae}.${A}`;return r.jsxs("div",{className:A!==f.length-1?Vn.notLastRow:"",children:[A>0&&r.jsxs(r.Fragment,{children:[r.jsx(nt,{}),r.jsx(y,{sixteenPx:!0})]}),r.jsxs(Q,{wrap:!0,children:[r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{name:`${X}.periodeForGradering`,selectValues:Ym(s),label:d.formatMessage({id:"Registrering.Permisjon.Gradering.Periode"}),validate:[q]})}),r.jsx(T,{children:r.jsx(E,{label:d.formatMessage({id:"Registrering.Permisjon.periodeFom"}),name:`${X}.periodeFom`,validate:[q,M,Fs(v,A,!0),qs(v)],onChange:()=>h?m():void 0})}),r.jsx(T,{children:r.jsx(E,{label:d.formatMessage({id:"Registrering.Permisjon.periodeTom"}),name:`${X}.periodeTom`,validate:[q,M,Fs(v,A,!1),qs(v)],onChange:()=>h?m():void 0})}),r.jsx(T,{className:Vn.prosentHeader,children:r.jsx(le,{label:r.jsx(c,{id:"Registrering.Permisjon.Gradering.Prosentandel"}),name:`${X}.prosentandelArbeid`,validate:[q,Wa,Ps],normalizeOnBlur:J=>Number.isNaN(J)?J:parseFloat(J.toString()).toFixed(2)})}),r.jsx(T,{children:r.jsx(le,{label:d.formatMessage({id:"Registrering.Permisjon.Orgnr"}),name:`${X}.arbeidsgiverIdentifikator`,validate:[Bm(v,A),gn,Km]})})]}),r.jsx(y,{eightPx:!0}),r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{label:d.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${X}.arbeidskategoriType`,selectValues:Um(o),validate:[q],onChange:()=>h?m():void 0})}),r.jsxs(T,{children:[r.jsx("div",{className:Vn.graderesHeader,children:r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Gradering.SkalGraderes"})})}),r.jsx(ie,{name:`${X}.skalGraderes`,label:" "})]}),r.jsx(T,{children:r.jsxs("div",{className:Vn.smalHeader,children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Flerbarnsdager"})}),r.jsx(ie,{readOnly:i,name:`${X}.flerbarnsdager`,label:" "})]})}),r.jsxs(T,{children:[r.jsx("div",{className:Vn.smalHeader,children:r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.HarSamtidigUttak"})})}),r.jsx(ie,{name:`${X}.harSamtidigUttak`,label:""})]}),r.jsx(T,{children:P&&r.jsx(le,{name:`${X}.samtidigUttaksprosent`,validate:[q,Wa,Ps],label:d.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"})})}),S&&r.jsx(T,{className:Vn.placeRemoveButton,children:S()})]}),Ne&&r.jsxs("div",{children:[r.jsx(L,{wrap:!0,children:r.jsx(Qr,{size:"small",variant:"warning",children:r.jsx(c,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})}),r.jsx(y,{eightPx:!0})]})]})]},w.id)}})};Ri.__docgenInfo={description:`RenderGraderingPeriodeFieldArray

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
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"FormValues",required:!1}}]},alias:"FormValues"}}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonGraderingPanel"};const Je="tidsromPermisjon",ln="overforingsperioder",_s=s=>()=>{const o=s(`${Je}.${ln}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},xs={periodeFom:"",periodeTom:"",overforingArsak:""},Ti=({selectValues:s,readOnly:i})=>{const o=H(),{control:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:h,append:f}=he({control:d,name:`${Je}.${ln}`});V.useEffect(()=>{m.length===0&&f(xs)},[]);const j=`${Je}.${ln}`;return r.jsx(Oe,{fields:m,emptyPeriodTemplate:xs,bodyText:o.formatMessage({id:"Registrering.Permisjon.Utsettelse.LeggTilPeriode"}),readOnly:i,append:f,remove:h,children:(F,b,w)=>r.jsx(Q,{wrap:!0,children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{name:`${j}.${b}.overforingArsak`,label:b===0?o.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak"}):"",selectValues:s,validate:[q],readOnly:i})}),r.jsxs(r.Fragment,{children:[r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${j}.${b}.periodeFom`,validate:[q,M,()=>{const A=g(`${Je}.${ln}.${b}.periodeFom`),S=g(`${Je}.${ln}.${b}.periodeTom`);return S&&A?qe(S)(A):null},_s(g)],label:b===0?r.jsx(c,{id:"Registrering.Permisjon.OverforingAvKvote.fomDato"}):"",onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:i,name:`${j}.${b}.periodeTom`,validate:[q,M,()=>{const A=g(`${Je}.${ln}.${b}.periodeFom`),S=g(`${Je}.${ln}.${b}.periodeTom`);return S&&A?Se(A)(S):null},_s(g)],label:b===0?r.jsx(c,{id:"Registrering.Permisjon.OverforingAvKvote.tomDato"}):"",onChange:()=>v?k():void 0})}),w&&r.jsx(T,{children:w()})]})]})},F.id)})};Ti.__docgenInfo={description:`RenderOverforingAvKvoterFieldArray

Viser inputfelter for dato for bestemmelse av overføring.`,methods:[],displayName:"RenderOverforingAvKvoterFieldArray",props:{selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const $m=(s,i,o)=>i===zr.INSTITUSJONSOPPHOLD_ANNEN_FORELDER?s.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt"}):i===zr.SYKDOM_ANNEN_FORELDER?s.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk"}):o,Hm=(s,i,o,d)=>s.filter(({kode:g})=>o||g!==zr.ALENEOMSORG&&g!==zr.IKKE_RETT_ANNEN_FORELDER).map(({kode:g,navn:k})=>i?r.jsx("option",{value:g,children:k},g):r.jsx("option",{value:g,children:$m(d,g,k)},g)),da=({foreldreType:s,alleKodeverk:i,readOnly:o,erEndringssøknad:d})=>{const g=H(),k=i[sg.OVERFOERING_AARSAK_TYPE],v=Hm(k,s===Ln.MOR,d,g),{watch:m}=Y(),h=m(`${Je}.skalOvertaKvote`)||!1;return r.jsxs(r.Fragment,{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvoten"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:o,name:`${Je}.skalOvertaKvote`,label:r.jsx(c,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvote"})}),h&&r.jsx(Ti,{selectValues:v,readOnly:o})]})};da.buildInitialValues=()=>({skalOvertaKvote:!1,overforingsperioder:[{}]});da.__docgenInfo={description:`PermisjonOverforingAvKvoterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonOverforingAvKvoterPanel"};const Gm="_notLastRow_pe2tr_1",Cm={notLastRow:Gm},_e="tidsromPermisjon",xe="oppholdPerioder",Ss=s=>()=>{const o=s(`${_e}.${xe}`).filter(({periodeFom:d,periodeTom:g})=>d!==""&&g!=="").map(({periodeFom:d,periodeTom:g})=>[d,g]);return o.length>0?Yn(o):void 0},Os={periodeFom:"",periodeTom:"",årsak:""},Wm=[Br.UTTAK_MØDREKVOTE_ANNEN_FORELDER,Br.UTTAK_FEDREKVOTE_ANNEN_FORELDER,Br.UTTAK_FELLESP_ANNEN_FORELDER,Br.UTTAK_FORELDREPENGER_ANNEN_FORELDER],zm=s=>s.filter(({kode:i})=>Wm.includes(i)).map(({kode:i,navn:o})=>r.jsx("option",{value:i,children:o},i)),Ai=({oppholdsReasons:s,readOnly:i})=>{const o=H(),{control:d,getValues:g,trigger:k,formState:{isSubmitted:v}}=Y(),{fields:m,remove:h,append:f}=he({control:d,name:`${_e}.${xe}`});return V.useEffect(()=>{m.length===0&&f(Os)},[]),r.jsx(Oe,{fields:m,emptyPeriodTemplate:Os,bodyText:o.formatMessage({id:"Registrering.Permisjon.Opphold.LeggTilPeriode"}),readOnly:i,append:f,remove:h,children:(j,F,b)=>r.jsx("div",{className:F!==m.length-1?Cm.notLastRow:"",children:r.jsx(Q,{wrap:!0,children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:`${_e}.${xe}.${F}.periodeFom`,label:F===0?o.formatMessage({id:"Registrering.Permisjon.periodeFom"}):"",validate:[q,M,()=>{const w=g(`${_e}.${xe}.${F}.periodeFom`),A=g(`${_e}.${xe}.${F}.periodeTom`);return A&&w?qe(A)(w):null},Ss(g)],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(E,{name:`${_e}.${xe}.${F}.periodeTom`,label:F===0?o.formatMessage({id:"Registrering.Permisjon.periodeTom"}):"",validate:[q,M,()=>{const w=g(`${_e}.${xe}.${F}.periodeFom`),A=g(`${_e}.${xe}.${F}.periodeTom`);return A&&w?Se(w)(A):null},Ss(g)],onChange:()=>v?k():void 0})}),r.jsx(T,{children:r.jsx(fe,{name:`${_e}.${xe}.${F}.årsak`,label:F===0?o.formatMessage({id:"Registrering.Permisjon.Opphold.Arsak"}):"",selectValues:zm(s),validate:[q]})}),b&&r.jsx(T,{children:b()})]})})},j.id)})};Ai.__docgenInfo={description:`RenderOppholdPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av oppholdsperiode.`,methods:[],displayName:"RenderOppholdPeriodeFieldArray",props:{oppholdsReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ua=({readOnly:s,alleKodeverk:i})=>{const o=i[ee.OPPHOLD_ARSAK],{watch:d}=Y(),g=d(`${_e}.skalHaOpphold`)||!1;return r.jsxs("div",{children:[r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Opphold.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(ie,{readOnly:s,name:`${_e}.skalHaOpphold`,label:r.jsx(c,{id:"Registrering.Permisjon.Opphold.OppholdUttaket"})}),g&&r.jsx(Ai,{oppholdsReasons:o,readOnly:s})]})};ua.buildInitialValues=()=>({[xe]:[{}],skalHaOpphold:!1});ua.__docgenInfo={description:`PermisjonOppholdPanel

Viser panel for utsettelse
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonOppholdPanel"};const Jm="_flexContainer_1vzu1_1",Xm={flexContainer:Jm},be="tidsromPermisjon",Zm=s=>{const i=s(`${be}.fulltUttak`)||!1,o=s(`${be}.skalGradere`)||!1,d=s(`${be}.skalUtsette`)||!1,g=s(`${be}.skalOvertaKvote`)||!1;return!i&&!o&&!d&&!g},Wn=({foreldreType:s,readOnly:i,alleKodeverk:o,erEndringssøknad:d})=>{var b,w,A,S;const g=H(),{watch:k,setError:v,clearErrors:m,getValues:h,formState:f}=Y(),j=k(`${be}.fulltUttak`)||!1,F=Zm(h);return V.useEffect(()=>{F&&v(`${be}.notRegisteredInput`,{type:"custom",message:g.formatMessage({id:"PermisjonPanel.MinstEnPeriodeRequired"})}),F||m(`${be}.notRegisteredInput`)},[F]),r.jsx(oe,{children:r.jsxs("div",{className:Xm.flexContainer,children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.Title"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{eightPx:!0}),r.jsx(me,{size:"small",children:r.jsx(c,{id:"Registrering.Permisjon.FulltUttak"})}),r.jsx(y,{eightPx:!0}),r.jsx(ie,{readOnly:i,name:`${be}.fulltUttak`,label:r.jsx(c,{id:"Registrering.Permisjon.FulltUttak"})}),j&&r.jsx(la,{sokerErMor:s===Ln.MOR,readOnly:i,alleKodeverk:o}),r.jsx(y,{twentyPx:!0}),r.jsx(da,{readOnly:i,foreldreType:s,alleKodeverk:o,erEndringssøknad:d}),r.jsx(y,{twentyPx:!0}),r.jsx(oa,{readOnly:i,alleKodeverk:o}),r.jsx(y,{twentyPx:!0}),r.jsx(Cn,{readOnly:i,alleKodeverk:o}),r.jsx(y,{twentyPx:!0}),r.jsx(ua,{readOnly:i,alleKodeverk:o}),f.isSubmitted&&((w=(b=f.errors[be])==null?void 0:b.notRegisteredInput)==null?void 0:w.message)&&r.jsx(kr,{children:(S=(A=f.errors[be])==null?void 0:A.notRegisteredInput)==null?void 0:S.message})]})})};Wn.transformValues=s=>{var k,v,m,h,f,j,F;const i=s[be],o=i,d=i[De];(k=s.tidsromPermisjon)!=null&&k.fulltUttak&&d&&(o[De]=la.transformValues(d));const g=i[Ae];return(v=s.tidsromPermisjon)!=null&&v.skalGradere&&g&&(o[Ae]=Cn.transformValues(i)),(m=s.tidsromPermisjon)!=null&&m.fulltUttak||(o[De]=void 0),(h=s.tidsromPermisjon)!=null&&h.skalGradere||(o[Ae]=void 0),(f=s.tidsromPermisjon)!=null&&f.skalUtsette||(o[un]=void 0),(j=s.tidsromPermisjon)!=null&&j.skalOvertaKvote||(o[ln]=void 0),(F=s.tidsromPermisjon)!=null&&F.skalHaOpphold||(o[xe]=void 0),o};Wn.buildInitialValues=()=>({[be]:{...oa.buildInitialValues(),...Cn.buildInitialValues(),...da.buildInitialValues(),...ua.buildInitialValues(),[De]:[{}],fulltUttak:!1}});Wn.__docgenInfo={description:`PermisjonPanel

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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]},alias:"FormValues"}}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"PermisjonIndex"};class ek{constructor(i,o,d){Dr(this,"fagsakYtelseType");Dr(this,"familieHendelseType");Dr(this,"foreldreType");this.fagsakYtelseType=Ka(i),i===Wr.SVANGERSKAPSPENGER?this.familieHendelseType=se.FODSEL:this.familieHendelseType=Ka(o),this.foreldreType=Ka(d)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const Ca=re(ue),qi=({readOnly:s})=>r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:Ca.formatMessage({id:"TerminFodselSvpPanel.TerminOgFodsel"})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(E,{name:"termindato",label:Ca.formatMessage({id:"TerminFodselSvpPanel.Termindato"}),isReadOnly:s,validate:[q,M]})}),r.jsx(T,{children:r.jsx(E,{name:"foedselsDato",label:Ca.formatMessage({id:"TerminFodselSvpPanel.Fodselsdato"}),isReadOnly:s,validate:[M,Kn]})})]})})]});qi.__docgenInfo={description:"",methods:[],displayName:"TerminFodselSvpPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const nk="_notLastRow_uwn16_1",rk={notLastRow:nk},ak=pr(100),tk="tilretteleggingArbeidsgiver",sk="tilretteleggingSelvstendigNaringsdrivende",ik="tilretteleggingFrilans",Ns={tilretteleggingType:"",dato:"",stillingsprosent:""},Xr=({readOnly:s,name:i})=>{const o=H(),{control:d}=Y(),{fields:g,remove:k,append:v}=he({control:d,name:i});return V.useEffect(()=>{g.length===0&&v(Ns)},[]),r.jsx(Oe,{fields:g,emptyPeriodTemplate:Ns,bodyText:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:s,append:v,remove:k,children:(m,h,f)=>r.jsxs("div",{className:h!==g.length-1?rk.notLastRow:"",children:[r.jsx(y,{sixteenPx:!0}),r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(fe,{readOnly:s,name:`${i}.${h}.tilretteleggingType`,label:h===0?o.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}):"",validate:[q],selectValues:[r.jsx("option",{value:En.HEL_TILRETTELEGGING,children:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},En.HEL_TILRETTELEGGING),r.jsx("option",{value:En.DELVIS_TILRETTELEGGING,children:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},En.DELVIS_TILRETTELEGGING),r.jsx("option",{value:En.INGEN_TILRETTELEGGING,children:o.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},En.INGEN_TILRETTELEGGING)]})}),r.jsx(T,{children:r.jsx(E,{isReadOnly:s,name:`${i}.${h}.dato`,label:h===0?o.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}):"",validate:[q]})}),r.jsx(T,{children:r.jsx(le,{readOnly:s,name:`${i}.${h}.stillingsprosent`,label:h===0?o.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}):"",validate:[q,ak],maxLength:99})}),f&&r.jsx(T,{children:f()})]})})]},m.id)})};Xr.__docgenInfo={description:`BehovForTilrettteleggingFieldArray

Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.`,methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Es="tilretteleggingArbeidsforhold",Vs="tilretteleggingForArbeidsgiver",lk={organisasjonsnummer:"",behovsdato:""},Fi=({readOnly:s})=>{const i=H(),{control:o}=Y(),{fields:d,append:g}=he({control:o,name:`${Es}.${Vs}`}),k=()=>{g(lk)},v=`${Es}.${Vs}`;return r.jsx(r.Fragment,{children:d.map((m,h)=>r.jsxs("div",{children:[r.jsx(Q,{children:r.jsxs(L,{children:[r.jsx(T,{children:r.jsx(le,{readOnly:s,name:`${v}.${h}.organisasjonsnummer`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.OrgNr"}),validate:[q,f=>Zu(f.toString()),Qu],maxLength:99})}),r.jsx(T,{children:r.jsx(E,{name:`${v}.${h}.behovsdato`,label:i.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra"}),validate:[q],isReadOnly:s})})]})}),r.jsx(y,{sixteenPx:!0}),r.jsx(Xr,{name:`${v}.${h}.${tk}`,readOnly:s}),d.length>h+1&&r.jsxs(r.Fragment,{children:[r.jsx("hr",{}),r.jsx(y,{sixteenPx:!0})]}),d.length===h+1&&r.jsx(Be,{size:"small",variant:"secondary",onClick:k,type:"button",children:r.jsx(c,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})]},m.id))})};Fi.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ie=re(ue),ok="tilretteleggingForArbeidsgiver",ve="tilretteleggingArbeidsforhold",ga=({readOnly:s})=>{var f,j,F,b;const{watch:i,setError:o,clearErrors:d,formState:g}=Y(),k=i(`${ve}.sokForSelvstendigNaringsdrivende`),v=i(`${ve}.sokForFrilans`),m=i(`${ve}.sokForArbeidsgiver`),h=!k&&!v&&!m;return V.useEffect(()=>{h&&o(`${ve}.notRegisteredInput`,{type:"custom",message:Ie.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}),h||d(`${ve}.notRegisteredInput`)},[h]),r.jsx(ke,{value:Ie,children:r.jsxs(oe,{children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),r.jsx(y,{sixteenPx:!0}),g.isSubmitted&&((j=(f=g.errors[ve])==null?void 0:f.notRegisteredInput)==null?void 0:j.message)&&r.jsx(kr,{children:(b=(F=g.errors[ve])==null?void 0:F.notRegisteredInput)==null?void 0:b.message}),r.jsx(U,{name:`${ve}.sokForSelvstendigNaringsdrivende`,label:r.jsx(c,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),k&&r.jsxs(de,{children:[r.jsx(E,{name:`${ve}.behovsdatoSN`,label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[q],isReadOnly:s}),r.jsx(Xr,{name:`${ve}.${sk}`,readOnly:s})]}),r.jsx(U,{name:`${ve}.sokForFrilans`,label:r.jsx(c,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),v&&r.jsxs(de,{children:[r.jsx(E,{name:`${ve}.behovsdatoFrilans`,label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[q],isReadOnly:s}),r.jsx(Xr,{name:`${ve}.${ik}`,readOnly:s})]}),r.jsx(U,{name:`${ve}.sokForArbeidsgiver`,label:r.jsx(c,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),validate:[q],isReadOnly:s,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Ja"}),value:"true"},{label:Ie.formatMessage({id:"BehovForTilretteleggingPanel.Nei"}),value:"false"}]}),r.jsx(y,{sixteenPx:!0}),m&&r.jsx(de,{children:r.jsx(Fi,{readOnly:s})})]})})};ga.buildInitialValues=()=>({[ve]:{[ok]:[{}]}});ga.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}}],displayName:"BehovForTilretteleggingPanel"};const dk="_col_hlukm_1",Ms={col:dk},Ja="omsorg",Jn=({readOnly:s,soknadData:i,alleKodeverk:o,fodselsdato:d,mottattDato:g})=>r.jsxs(Ks,{justify:"space-between",children:[r.jsxs("div",{className:Ms.col,children:[r.jsx(ia,{readOnly:s,soknadData:i}),r.jsx(ye,{readOnly:s,alleKodeverk:o,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,mottattDato:g}),r.jsx(fr,{readOnly:s})]}),r.jsx("div",{className:Ms.col,children:r.jsx(kn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:d})})]});Jn.transformValues=s=>({...ye.transformValues(s),[Ja]:kn.transformValues(s[Ja])});Jn.buildInitialValues=()=>({[Ja]:{},...ye.buildInitialValues()});Jn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"omsorg",value:{name:"TransformedFormValues",required:!1}}]}}]}}},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringAdopsjonOgOmsorgGrid"};const uk="_col_hlukm_1",Is={col:uk},Xa="omsorg",Xn=({readOnly:s,soknadData:i,alleKodeverk:o,fodselsdato:d,mottattDato:g})=>r.jsxs(Ks,{justify:"space-between",children:[r.jsxs("div",{className:Is.col,children:[i.getForeldreType()!==Ln.MOR&&r.jsx(ia,{readOnly:s,soknadData:i}),r.jsx(ye,{readOnly:s,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,alleKodeverk:o,mottattDato:g}),r.jsx(fr,{readOnly:s})]}),r.jsxs("div",{className:Is.col,children:[i.getForeldreType()!==Ln.MOR&&r.jsx(kn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),isForeldrepengerFagsak:!1,fodselsdato:d}),r.jsx(it,{readOnly:s})]})]});Xn.transformValues=s=>({...ye.transformValues(s),[Xa]:kn.transformValues(s[Xa])});Xn.buildInitialValues=()=>({...ye.buildInitialValues(),[Xa]:{}});Xn.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:null}],returns:null},{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"RegistreringFodselGrid"};const gk=(s,i)=>s?Xn.buildInitialValues():i?Jn.buildInitialValues():{},mk=(s,i,o)=>{let d=s;return s.rettigheter===Dn.IKKE_RELEVANT&&(d=Ls(s,"rettigheter")),{...d,...i?Xn.transformValues(d):{},...o?Jn.transformValues(d):{}}},wi=({readOnly:s,soknadData:i,alleKodeverk:o,onSubmitUfullstendigsoknad:d,onSubmit:g})=>{const k=i.getFamilieHendelseType()===se.FODSEL,v=i.getFamilieHendelseType()===se.ADOPSJON,m=vr({defaultValues:gk(k,v)}),h=m.watch("foedselsDato"),f=m.watch("mottattDato");return r.jsxs(yr,{formMethods:m,onSubmit:j=>g(mk(j,k,v)),children:[r.jsx(ta,{readOnly:s}),k&&r.jsx(Xn,{soknadData:i,readOnly:s,alleKodeverk:o,fodselsdato:h,mottattDato:f}),v&&r.jsx(Jn,{soknadData:i,readOnly:s,alleKodeverk:o,fodselsdato:h,mottattDato:f}),r.jsx(aa,{readOnly:s,submitting:m.formState.isSubmitting,onSubmitUfullstendigsoknad:d})]})};wi.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Za="omsorg",Qa="frilans",kk=s=>({[Qa]:nn.buildInitialValues(),...en.buildInitialValues(s),...Hn.buildInitialValues(),[Za]:{},...ye.buildInitialValues(),...zn.buildInitialValues()}),pk=(s,i)=>{let o=s;return s.rettigheter===Dn.IKKE_RELEVANT&&(o=Ls(s,"rettigheter")),{...ye.transformValues(o),[Za]:kn.transformValues(o[Za]),[mn]:en.transformValues(o,i),[be]:zn.transformValues(o),[Qa]:nn.transformValues(o[Qa])}},_i=({readOnly:s,soknadData:i,alleKodeverk:o,onSubmit:d,onSubmitUfullstendigsoknad:g,fagsakPersonnummer:k,erEndringssøknad:v})=>{const m=vr({defaultValues:V.useMemo(()=>kk(o[ee.ARBEID_TYPE]),[])}),h=o[ee.ARBEID_TYPE],f=m.watch("sokerHarAleneomsorg"),j=m.watch("denAndreForelderenHarRettPaForeldrepenger"),F=!f&&j!==!1,b=m.watch("foedselsDato"),w=m.watch("mottattDato");return r.jsxs(yr,{formMethods:m,onSubmit:A=>d(pk(A,h)),children:[r.jsx(ta,{readOnly:s}),r.jsx(ye,{readOnly:s,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,alleKodeverk:o,mottattDato:w}),r.jsx(Hn,{readOnly:s,alleKodeverk:o}),r.jsx(lt,{readOnly:s,alleKodeverk:o}),r.jsx(nn,{readOnly:s}),r.jsx(en,{readOnly:s,alleKodeverk:o}),r.jsx(yi,{readOnly:s}),i.getFamilieHendelseType()===se.FODSEL&&r.jsx(it,{readOnly:s,erForeldrepenger:!0}),r.jsx(ia,{readOnly:s,soknadData:i}),r.jsx(kn,{readOnly:s,familieHendelseType:i.getFamilieHendelseType(),fodselsdato:b,isForeldrepengerFagsak:!0}),r.jsx(zs,{readOnly:s,permisjonRettigheterPanel:r.jsx(hi,{readOnly:s,denAndreForelderenHarRettPaForeldrepenger:j,sokerErMor:i.getForeldreType()===Ln.MOR}),alleKodeverk:o,fagsakPersonnummer:k}),r.jsx(zn,{foreldreType:i.getForeldreType(),readOnly:s,alleKodeverk:o,erEndringssøknad:v}),r.jsx(fi,{annenForelderInformertRequired:F,readOnly:s}),r.jsx(fr,{readOnly:s}),r.jsx(aa,{readOnly:s,onSubmitUfullstendigsoknad:g,submitting:m.formState.isSubmitting})]})};_i.__docgenInfo={description:`ForeldrepengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const et="frilans",vk=s=>({...en.buildInitialValues(s),...Hn.buildInitialValues(),...ye.buildInitialValues(),...ga.buildInitialValues(),[et]:nn.buildInitialValues()}),yk=s=>{let i=[];const{tilretteleggingArbeidsforhold:o}=s;return o!=null&&o.sokForArbeidsgiver&&(o!=null&&o.tilretteleggingForArbeidsgiver)&&(i=i.concat(o.tilretteleggingForArbeidsgiver.map(d=>({"@type":"VI",behovsdato:d.behovsdato,organisasjonsnummer:d.organisasjonsnummer,tilrettelegginger:d.tilretteleggingArbeidsgiver})))),o!=null&&o.sokForFrilans&&i.push({"@type":"FR",behovsdato:o.behovsdatoFrilans,tilrettelegginger:o.tilretteleggingFrilans}),o!=null&&o.sokForSelvstendigNaringsdrivende&&i.push({"@type":"SN",behovsdato:o.behovsdatoSN,tilrettelegginger:o.tilretteleggingSelvstendigNaringsdrivende}),i},fk=(s,i)=>({...ye.transformValues(s),foedselsDato:s.foedselsDato,tilretteleggingArbeidsforhold:yk(s),[et]:nn.transformValues(s[et]),[mn]:en.transformValues(s,i)}),Si=({readOnly:s,soknadData:i,alleKodeverk:o,onSubmit:d,onSubmitUfullstendigsoknad:g})=>{const k=vr({defaultValues:V.useMemo(()=>vk(o[ee.ARBEID_TYPE]),[])}),v=o[ee.ARBEID_TYPE],m=k.watch("mottattDato");return r.jsxs(yr,{formMethods:k,onSubmit:h=>d(fk(h,v)),children:[r.jsx(ta,{readOnly:s}),r.jsx(ye,{readOnly:s,alleKodeverk:o,erAdopsjon:i.getFamilieHendelseType()!==se.ADOPSJON,mottattDato:m}),r.jsx(Hn,{readOnly:s,alleKodeverk:o}),r.jsx(lt,{readOnly:s,alleKodeverk:o}),r.jsx(nn,{readOnly:s}),r.jsx(en,{readOnly:s,kunMiliterEllerSiviltjeneste:!0,alleKodeverk:o}),r.jsx(qi,{readOnly:s}),r.jsx(ga,{readOnly:s}),r.jsx(fr,{readOnly:s}),r.jsx(aa,{readOnly:s,onSubmitUfullstendigsoknad:g,submitting:k.formState.isSubmitting})]})};Si.__docgenInfo={description:`SvangerskapspengerForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""}}};const dt={"Registrering.RegistrereSoknad":"Registrere søknad","Registrering.RegistrerAlleOpplysninger":"Registrer inn alle opplysninger fra papirsøknaden","Registrering.Omsoknaden.Title":"Om søknaden","Registrering.Omsoknaden.soknadstype":"Søknadstype","Registrering.Omsoknaden.Tema":"Tema","Registrering.Omsoknaden.Soker":"Søker","Registrering.Omsoknaden.VisSkjema":"Vis skjema","SoknadRegistrertModal.ContentLabel":"Søknaden er registrert. Du kommer nå til forsiden.","SoknadRegistrertModal.InfoTextOne":"Søknaden er registrert og vil bli behandlet","SoknadRegistrertModal.InfoTextTwo":"Du kommer nå til forsiden","SoknadRegistrertModal.OkButtonText":"OK"},hk=re(dt),Oi=({onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g})=>r.jsx(ke,{value:hk,children:r.jsx(Si,{onSubmitUfullstendigsoknad:s,onSubmit:i,readOnly:o,soknadData:d,alleKodeverk:g})});Oi.__docgenInfo={description:"",methods:[],displayName:"SvangerskapspengerPapirsoknadIndex",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: any) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"values"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Tk="_panel_nx0ko_1",Ak={panel:Tk},qk=re(dt),Ei=({fagsak:s,kodeverk:i,readOnly:o,lagreUfullstendig:d,lagreFullstendig:g,erEndringssøknad:k})=>{const[v,m]=V.useState(),h=V.useCallback(j=>(v&&g(j,v.fagsakYtelseType,v.familieHendelseType,v.foreldreType),Promise.resolve()),[v]),f=V.useCallback(()=>(v&&d(v.fagsakYtelseType,v.familieHendelseType,v.foreldreType),Promise.resolve()),[v]);return r.jsx(ke,{value:qk,children:r.jsxs(Lu,{className:Ak.panel,children:[r.jsx(ne,{size:"small",children:r.jsx(c,{id:"Registrering.RegistrereSoknad"})}),r.jsx(y,{sixteenPx:!0}),!o&&r.jsx(Yu,{children:r.jsx(c,{id:"Registrering.RegistrerAlleOpplysninger"},"regOpplysninger")}),r.jsx(y,{sixteenPx:!0}),r.jsx(y,{sixteenPx:!0}),r.jsx(Ni,{setSoknadData:m,fagsakYtelseType:s.fagsakYtelseType,alleKodeverk:i}),v&&v.getFagsakYtelseType()===Wr.ENGANGSSTONAD&&r.jsx(Pi,{onSubmitUfullstendigsoknad:f,onSubmit:h,readOnly:o,soknadData:v,alleKodeverk:i}),v&&v.getFagsakYtelseType()===Wr.FORELDREPENGER&&r.jsx(xi,{onSubmitUfullstendigsoknad:f,onSubmit:h,readOnly:o,soknadData:v,alleKodeverk:i,fagsakPersonnummer:s.bruker.fødselsnummer,erEndringssøknad:k}),v&&v.getFagsakYtelseType()===Wr.SVANGERSKAPSPENGER&&r.jsx(Oi,{onSubmitUfullstendigsoknad:f,onSubmit:h,readOnly:o,soknadData:v,alleKodeverk:i})]})})};Ei.__docgenInfo={description:"",methods:[],displayName:"RegistrerPapirsoknadPanel",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
) => Promise<any>`,signature:{arguments:[{type:{name:"any"},name:"formValues"},{type:{name:"string"},name:"fagsakYtelseType"},{type:{name:"string"},name:"familieHendelseType"},{type:{name:"string"},name:"foreldreType"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const Fk="_alertStyle_1d8gt_1",wk="_modalStyle_1d8gt_6",Pk="_fullWidth_1d8gt_11",_k="_reduceMargin_1d8gt_16",xk="_left_1d8gt_20",Sk="_right_1d8gt_24",Mn={alertStyle:Fk,modalStyle:wk,fullWidth:Pk,reduceMargin:_k,left:xk,right:Sk},Cr=re(dt),Vi=({isOpen:s=!1})=>r.jsx(Xe,{className:Mn.modalStyle,open:s,"aria-label":Cr.formatMessage({id:"SoknadRegistrertModal.ContentLabel"}),onClose:()=>{},children:r.jsx(Xe.Body,{children:r.jsxs(Qr,{size:"small",variant:"success",className:Mn.alertStyle,children:[r.jsxs("div",{className:Mn.left,children:[r.jsx("p",{className:Mn.reduceMargin,children:Cr.formatMessage({id:"SoknadRegistrertModal.InfoTextOne"})}),r.jsx("p",{className:Mn.reduceMargin,children:Cr.formatMessage({id:"SoknadRegistrertModal.InfoTextTwo"})})]}),r.jsx("div",{className:Mn.right,children:r.jsx($s,{to:"/",children:r.jsx(Be,{size:"small",variant:"primary",children:Cr.formatMessage({id:"SoknadRegistrertModal.OkButtonText"})})})})]})})});Vi.__docgenInfo={description:`SoknadRegistrertModal

Informasjonsmodal som vises til saksbehandler når en papirsøknad har blitt registrert.`,methods:[],displayName:"SoknadRegistrertModal",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ok=s=>s.map(i=>i.definisjon).filter(i=>i===dr.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD||i===dr.REGISTRER_PAPIRSOKNAD_FORELDREPENGER||i===dr.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER||i===dr.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER)[0],Nk=(s,i,o,d)=>(g,k,v,m)=>{const h=[{"@type":Ok(s.aksjonspunkt),tema:v,soknadstype:k,soker:m,...g}],f={saksnummer:i.saksnummer,behandlingUuid:s.uuid,behandlingVersjon:s.versjon,bekreftedeAksjonspunktDtoer:h};return o(f).then(j=>{var F;((F=j==null?void 0:j.taskStatus)==null?void 0:F.status)!==tg.HALTED&&d(!0)})},Mi=({fagsak:s,behandling:i,kodeverk:o,rettigheter:d,lagreAksjonspunkt:g})=>{const[k,v]=V.useState(!1),m=!d.writeAccess.isEnabled||i.behandlingPaaVent,h=V.useMemo(()=>Nk(i,s,g,v),[i,s,g,v]),f=V.useCallback((w,A,S)=>h({ufullstendigSoeknad:!0},w,A,S),[h]),j=eg(),F=V.useCallback(()=>{j("/")},[]);if(!i.aksjonspunkt)return r.jsx(Uu,{});const b=i.aksjonspunkt.some(w=>w.definisjon===dr.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER);return r.jsxs(r.Fragment,{children:[r.jsx(ng,{behandling:i,kodeverk:o,opneSokeside:F}),r.jsx(Vi,{isOpen:k}),r.jsx(Ei,{fagsak:s,kodeverk:o,readOnly:m,lagreUfullstendig:f,lagreFullstendig:h,erEndringssøknad:b})]})};Mi.__docgenInfo={description:`RegisterPapirsoknad

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
}>`}]},{name:"undefined"}]}],raw:"Promise<Behandling | undefined>"}}},description:""}}};const Ek=(s,i)=>{V.useEffect(()=>{i&&s(i)},[i])},Vk=({behandling:s,setBehandling:i,kodeverk:o,fagsak:d,rettigheter:g})=>{const{startRequest:k,data:v}=rg.useRestApiRunner(ag.SAVE_AKSJONSPUNKT);return Ek(i,v),r.jsx(Mi,{behandling:s,fagsak:d,kodeverk:o,rettigheter:g,lagreAksjonspunkt:k})};Vk.__docgenInfo={description:"",methods:[],displayName:"BehandlingPapirsoknadIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"employeeHasAccess",value:{name:"boolean",required:!0}},{key:"isEnabled",value:{name:"boolean",required:!0}}]},required:!0}}]}},description:""}}};export{Vk as default};
