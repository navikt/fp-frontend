import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as V,R as Te}from"./index-DjhIdADd.js";import{k as je,d as _,V as B,L as Z,g as P,f as w,a2 as Ae,ax as ee,B as R,h as M,u as U,P as ne,F as C,e as Y,i as fe,a5 as qe}from"./withPanelData-CrCFYf6V.js";import{n as $,d as he,u as Ee,b as Re}from"./initFetch-CpxAteye.js";import{d as re,m as Fe,t as ce,J as Be,U as K,K as Ve,b as Oe,c as Ne,o as Ke,N as we,f as Se,a as Le,e as Ge,E as _e,u as Pe}from"./index.es-_0W-_USf.js";import{B as J,U as Ie,a as De,c as te,S as Me,f as ae}from"./index.es-BxWatZFT.js";import{A as a,i as xe,a as Ue}from"./aksjonspunktCodes-BLM-Fgv6.js";import{B as D}from"./behandlingArsakType-CTXggz2Y.js";import{K as G}from"./alleKodeverk-Dm9joGL5.js";import{a as L}from"./skjermlenkeCodes-1SvLTuBb.js";import{B as F}from"./behandlingResultatType-DHbqkXMl.js";import{M as l}from"./message-CcGFFIAX.js";import{L as He}from"./Link-Bt_8JcOb.js";import{S as Ce}from"./CheckmarkCircleFill-CAfVKRR9.js";import{j as Ye}from"./paths-B32JBGQV.js";import{a as $e}from"./useKodeverk-B3ETuSLT.js";import{u as Je}from"./useVisForhandsvisningAvMelding-CTgud-rY.js";import{S as ze}from"./SupportHeader-BvD9byMn.js";var Qe=function(e,n){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)n.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(t[s[i]]=e[s[i]]);return t};const Xe=V.forwardRef((e,n)=>{var{title:t,titleId:s}=e,i=Qe(e,["title","titleId"]);let u=je();return u=t?s||"title-"+u:void 0,V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":u},i),t?V.createElement("title",{id:u},t):null,V.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.272 2.25a.75.75 0 0 0-.53.22L2.47 7.742a.75.75 0 0 0-.22.53v7.456c0 .199.079.39.22.53l5.272 5.272c.14.141.331.22.53.22h7.456a.75.75 0 0 0 .53-.22l5.272-5.272a.75.75 0 0 0 .22-.53V8.272a.75.75 0 0 0-.22-.53L16.258 2.47a.75.75 0 0 0-.53-.22zM3.75 8.583 8.583 3.75h6.834l4.833 4.833v6.834l-4.833 4.833H8.583L3.75 15.417zm5.28-.613a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});var ie=(e=>(e.FATTER_VEDTAK="5005",e.AVKLAR_VERGE="5030",e))(ie||{}),x=(e=>(e.ENDRING_I_BEREGNING="ENDRING_I_BEREGNING",e.ENDRING_I_UTTAK="ENDRING_I_UTTAK",e.ENDRING_I_FORDELING_AV_YTELSEN="ENDRING_I_FORDELING_AV_YTELSEN",e.INGEN_ENDRING="INGEN_ENDRING",e.ENDRING_I_BEREGNING_OG_UTTAK="ENDRING_I_BEREGNING_OG_UTTAK",e.FORELDREPENGER_OPPHORER="FORELDREPENGER_OPPHØRER",e.UDEFINERT="-",e))(x||{}),T=(e=>(e.FEIL_FAKTA="FEIL_FAKTA",e.FEIL_LOV="FEIL_LOV",e.FEIL_REGEL="FEIL_REGEL",e.SKJØNN="SKJØNN",e.UTREDNING="UTREDNING",e.SAKSFLYT="SAKSFLYT",e.BEGRUNNELSE="BEGRUNNELSE",e.ANNET="ANNET",e))(T||{});const We={[a.ADOPSJONSDOKUMENTAJON]:"ToTrinnsForm.Adopsjon.KontrollerOpplysninger",[a.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]:"ToTrinnsForm.Adopsjon.VurderEktefellesBarn",[a.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]:"ToTrinnsForm.Adopsjon.VurderMannAdoptererAlene",[a.OVERSTYR_ADOPSJONSVILKAR]:"ToTrinnsForm.Adopsjon.VilkarOverstyrt",[a.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP]:"ToTrinnsForm.Adopsjon.VilkarOverstyrt",[a.OMSORGSOVERTAKELSE]:"ToTrinnsForm.Omsorgovertagelse.KontrollerOpplysninger",[a.MANUELL_VURDERING_AV_OMSORGSVILKARET]:"ToTrinnsForm.Omsorgovertagelse.VurderVilkarForeldreansvarTredjeLedd",[a.AUTO_VENT_PÅ_FODSELREGISTRERING]:"ToTrinnsForm.Fødsel.VurderSokersRelasjon",[a.TERMINBEKREFTELSE]:"ToTrinnsForm.Fødsel.KontrollerOpplysningerTermin",[a.SJEKK_MANGLENDE_FODSEL]:"ToTrinnsForm.Fødsel.SjekkManglendeFødsel",[a.OVERSTYR_FODSELSVILKAR]:"ToTrinnsForm.Fødsel.VilkarOverstyrt",[a.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR]:"ToTrinnsForm.Fødsel.VilkarOverstyrt",[a.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD]:"ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarFjerdeLedd",[a.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]:"ToTrinnsForm.Foreldreansvar.VurderTidligereUtbetaling",[a.AVKLAR_AKTIVITETER]:"ToTrinnsForm.Beregning.AvklarAktiviteter",[a.OVERSTYRING_AV_BEREGNINGSAKTIVITETER]:"ToTrinnsForm.Beregning.OverstyrtBeregningsaktiviteter",[a.OVERSTYRING_AV_BEREGNINGSGRUNNLAG]:"ToTrinnsForm.Beregning.OverstyrtBeregningsgrunnlag",[a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS]:"ToTrinnsForm.Beregning.InntektFastsatt",[a.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE]:"ToTrinnsForm.Beregning.InntektFastsatt",[a.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD]:"ToTrinnsForm.Beregning.InntektFastsatt",[a.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET]:"ToTrinnsForm.Beregning.InntektFastsatt",[a.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG]:"ToTrinnsForm.Beregning.GraderingUtenBG",[a.FORDEL_BEREGNINGSGRUNNLAG]:"ToTrinnsForm.Beregning.FastsettFordeltBeregningsgrunnlag",[a.SOKNADSFRISTVILKARET]:"ToTrinnsForm.Soknadsfrist.ManueltVurdert",[a.VURDER_SOKNADSFRIST_FORELDREPENGER]:"ToTrinnsForm.Soknadsfrist.ManueltVurdert",[a.OVERSTYR_SOKNADSFRISTVILKAR]:"ToTrinnsForm.Soknadsfrist.VilkarOverstyrt",[a.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE]:"ToTrinnsForm.Medlemskap.VurderGyldigMedlemskap",[a.AVKLAR_LOVLIG_OPPHOLD]:"ToTrinnsForm.Medlemskap.AvklarLovligOpphold",[a.AVKLAR_OM_BRUKER_ER_BOSATT]:"ToTrinnsForm.Medlemskap.VurderSokerBosatt",[a.AVKLAR_OPPHOLDSRETT]:"ToTrinnsForm.Medlemskap.AvklarOppholdsrett",[a.OVERSTYR_MEDLEMSKAPSVILKAR]:"ToTrinnsForm.Medlemskap.VilkarOverstyrt",[a.OVERSTYR_AVKLAR_STARTDATO]:"ToTrinnsForm.Medlemskap.OverstyrtStartdato",[a.AVKLAR_DEKNINGSGRAD]:"ToTrinnsForm.Medlemskap.AvklartDekningsgrad",[a.OVERSTYR_DEKNINGSGRAD]:"ToTrinnsForm.Medlemskap.OverstyrtDekningsgrad",[a.FORESLA_VEDTAK]:"ToTrinnsForm.Vedtak.Fritekstbrev",[a.FORESLA_VEDTAK_MANUELT]:"ToTrinnsForm.Vedtak.Fritekstbrev",[a.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]:"ToTrinnsForm.Omsorg.VurderOmsorg",[a.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]:"ToTrinnsForm.Aleneomsorg.VurderAleneomsorg",[a.KONTROLLER_OPPLYSNINGER_OM_DØD]:"ToTrinnsForm.Uttak.Dod",[a.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST]:"ToTrinnsForm.Uttak.Soknadsfrist",[a.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE]:"ToTrinnsForm.Uttak.Klage",[a.ANNENPART_EØS]:"ToTrinnsForm.Uttak.AnnenpartEØS",[a.TETTE_SAKER]:"ToTrinnsForm.Uttak.TetteStønadsperioder",[a.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN]:"ToTrinnsForm.Uttak.FordelingStonadsperioder",[a.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET]:"ToTrinnsForm.Uttak.TilstotendeYtelser.Innvilget",[a.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT]:"ToTrinnsForm.Uttak.TilstotendeYtelser.Opphort",[a.TILKNYTTET_STORTINGET]:"ToTrinnsForm.Uttak.Stortinget",[a.VURDER_TILBAKETREKK]:"ToTrinnsForm.TilkjentYtelse.Tilbaketrekk",[a.VURDER_FARESIGNALER]:"ToTrinnsForm.Faresignaler.Vurder",[a.VURDER_OPPTJENINGSVILKARET]:"ToTrinnsForm.Opptjening.VurderOpptjeningsvilkåret",[a.VURDER_REFUSJON_BERGRUNN]:"ToTrinnsForm.Beregningsgrunnlag.Refusjonsstart",[a.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING]:"ToTrinnsForm.ArbeidOgInntekt.ManueltOpprettet"},Ze={},en=(e,n,t)=>n&&t?r.jsx(l,{id:"ToTrinnsForm.Opptjening.EndringArbeidMedNavn",values:{a:e,b:n,c:t}}):t?r.jsx(l,{id:"ToTrinnsForm.Opptjening.EndringArbeidUtenNavn",values:{a:e,b:t}}):r.jsx(l,{id:"ToTrinnsForm.Opptjening.EndringAktivitet",values:{a:e}}),nn=(e,n,t)=>n&&t?r.jsx(l,{id:"ToTrinnsForm.Opptjening.UnderkjenningArbeidMedNavn",values:{a:e,bb:n,c:t,b:s=>r.jsx("b",{children:s})}}):t?r.jsx(l,{id:"ToTrinnsForm.Opptjening.UnderkjenningArbeidUtenNavn",values:{a:e,bb:t,b:s=>r.jsx("b",{children:s})}}):r.jsx(l,{id:"ToTrinnsForm.Opptjening.UnderkjenningAktivitet",values:{a:e,b:s=>r.jsx("b",{children:s})}}),rn=(e,n,t)=>n&&t?r.jsx(l,{id:"ToTrinnsForm.Opptjening.GodkjenningArbeidMedNavn",values:{a:e,b:n,c:t}}):t?r.jsx(l,{id:"ToTrinnsForm.Opptjening.GodkjenningArbeidUtenNavn",values:{a:e,b:t}}):r.jsx(l,{id:"ToTrinnsForm.Opptjening.GodkjenningAktivitet",values:{a:e}}),se=({aktivitet:e})=>e.erEndring?en(e.aktivitetType?e.aktivitetType.toLowerCase():void 0,e.arbeidsgiverNavn,e.orgnr):e.godkjent?rn(e.aktivitetType?e.aktivitetType.toLowerCase():void 0,e.arbeidsgiverNavn,e.orgnr):nn(e.aktivitetType?e.aktivitetType.toLowerCase():void 0,e.arbeidsgiverNavn,e.orgnr);se.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTotrinnText",props:{aktivitet:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const tn=e=>e!=null&&e.fastsattVarigEndringNaering?r.jsx(l,{id:"ToTrinnsForm.Beregning.VarigEndring"}):r.jsx(l,{id:"ToTrinnsForm.Beregning.IkkeVarigEndring"}),z=e=>e.uttakPerioder?e.uttakPerioder.map(n=>{const t=J(n.fom),s=J(n.tom);let i;return n.erSlettet?i="ToTrinnsForm.AvklarUttak.PeriodeSlettet":n.erLagtTil?i="ToTrinnsForm.AvklarUttak.PeriodeLagtTil":n.erEndret&&(e.aksjonspunktKode===a.FASTSETT_UTTAKPERIODER||e.aksjonspunktKode===a.TILKNYTTET_STORTINGET)?i="ToTrinnsForm.ManueltFastsattUttak.PeriodeEndret":n.erEndret&&e.aksjonspunktKode===a.OVERSTYRING_AV_UTTAKPERIODER||n.erEndret&&e.aksjonspunktKode===a.OVERSTYR_FAKTA_UTTAK?i="ToTrinnsForm.OverstyrUttak.PeriodeEndret":n.erEndret?i="ToTrinnsForm.AvklarUttak.PeriodeEndret":i="ToTrinnsForm.AvklarUttak.PeriodeAvklart",r.jsx(l,{id:i,values:{a:t,b:s}},i)}):[],an=e=>e.opptjeningAktiviteter?e.opptjeningAktiviteter.map(n=>r.jsx(se,{aktivitet:n},n.aktivitetType)):[],sn=e=>{const n=We[e.aksjonspunktKode];return n?[r.jsx(l,{id:n},n)]:[]},ln=e=>{const n=Ze[e.aksjonspunktKode];return n?[r.jsx(l,{id:n},n)]:[]},on=e=>{const n=e?"ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddFP":"ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddES";return[r.jsx(l,{id:n},n)]},un=(e,n)=>n!=null&&n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller.flatMap(t=>{const s=e.find(i=>i.kode===t);return s?[r.jsx("div",{children:s.navn},s.navn)]:[]}):[],gn=e=>{let n="";switch(e==null?void 0:e.type){case F.KLAGE_YTELSESVEDTAK_STADFESTET:n="ToTrinnsForm.Klage.StadfesteYtelsesVedtak";break;case F.KLAGE_YTELSESVEDTAK_OPPHEVET:n="ToTrinnsForm.Klage.OppheveYtelsesVedtak";break;case F.KLAGE_AVVIST:n="ToTrinnsForm.Klage.Avvist";break;case F.HJEMSENDE_UTEN_OPPHEVE:n="ToTrinnsForm.Klage.HjemsendUtenOpphev";break;case F.KLAGE_DELVIS_MEDHOLD:n="ToTrinnsForm.Klage.DelvisOmgjortTilGunst";break;case F.KLAGE_OMGJORT_UGUNST:n="ToTrinnsForm.Klage.OmgjortTilUgunst";break;case F.KLAGE_MEDHOLD:n="ToTrinnsForm.Klage.OmgjortTilGunst";break}return r.jsx(l,{id:n})},dn=(e,n)=>e===_.FATTER_VEDTAK?[gn(n)]:[],kn=()=>r.jsx(l,{id:"ToTrinnsForm.AvklarUttak.AnnenForelderHarRett"}),mn=e=>e.aksjonspunktKode===a.BEHANDLE_KLAGE_NFP||e.aksjonspunktKode===a.VURDERING_AV_FORMKRAV_KLAGE_NFP,le=(e,n,t,s,i,u)=>i.aksjonspunktKode===a.VURDER_PERIODER_MED_OPPTJENING?an(i):i.aksjonspunktKode===a.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE?[tn(i.beregningDto)]:i.aksjonspunktKode===a.VURDER_FAKTA_FOR_ATFL_SN?un(t,i.beregningDto):xe(i.aksjonspunktKode)&&i.uttakPerioder&&i.uttakPerioder.length>0||Ue(i.aksjonspunktKode)&&i.uttakPerioder&&i.uttakPerioder.length>0?z(i):i.aksjonspunktKode===a.AVKLAR_ANNEN_FORELDER_RETT?[kn()]:i.aksjonspunktKode===a.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD?on(e):mn(i)?dn(n,u):s?ln(i):sn(i),pn=Ne(3),vn=Ke(2e3),yn="aksjonspunktGodkjenning",bn=(e,n)=>!e(`${n}.feilFakta`)&&!e(`${n}.feilLov`)&&!e(`${n}.feilSkjønn`)&&!e(`${n}.feilUtredning`)&&!e(`${n}.feilSaksflyt`)&&!e(`${n}.feilBegrunnelse`),oe=({index:e,totrinnskontrollSkjermlenkeContext:n,readOnly:t})=>{const{watch:s,getValues:i}=re(),u=s("aksjonspunktGodkjenning"),{aksjonspunktKode:p,totrinnskontrollGodkjent:v}=u[e],k=n.find(m=>m.totrinnskontrollAksjonspunkter.some(d=>d.aksjonspunktKode===p)),f=k==null?void 0:k.totrinnskontrollAksjonspunkter.find(m=>m.aksjonspunktKode===p),o=`${yn}.${e}`,g=!v&&bn(i,o)?Fe():void 0,q=ce(`${o}.faktagruppe`,g);return!k||!f?null:r.jsxs(B,{gap:"3",children:[r.jsx(Be,{name:`${o}.totrinnskontrollGodkjent`,isReadOnly:t,isHorizontal:!0,isTrueOrFalseSelection:!0,hideLegend:!0,radios:[{value:"true",label:r.jsx(l,{id:"ApprovalField.Godkjent"})},{value:"false",label:r.jsx(l,{id:"ApprovalField.Vurder"})}]}),v===!1&&r.jsx(Ie,{alignOffset:v?1:110,children:r.jsxs(B,{gap:"2",children:[r.jsx(Z,{size:"small",children:r.jsx(l,{id:"AksjonspunktGodkjenningArsakPanel.Arsak"})}),r.jsx(P,{size:"small",children:r.jsx(l,{id:"AksjonspunktGodkjenningArsakPanel.Forklaring"})}),r.jsxs(B,{gap:"4",children:[r.jsx(B,{gap:"1",children:r.jsxs(w,{justify:"space-between",style:{width:"300px"},children:[r.jsxs(B,{gap:"1",children:[r.jsx(K,{name:`${o}.feilFakta`,label:r.jsx(l,{id:"AksjonspunktGodkjenningArsakPanel.Fakta"}),readOnly:t}),r.jsx(K,{name:`${o}.feilSkjønn`,label:r.jsx(l,{id:"AksjonspunktGodkjenningArsakPanel.Skjønn"}),readOnly:t}),r.jsx(K,{name:`${o}.feilLov`,label:r.jsx(l,{id:"AksjonspunktGodkjenningArsakPanel.Lovanvendelse"}),readOnly:t})]}),r.jsxs(B,{gap:"1",children:[r.jsx(K,{name:`${o}.feilUtredning`,label:r.jsx(l,{id:"AksjonspunktGodkjenningArsakPanel.Utredning"}),readOnly:t}),r.jsx(K,{name:`${o}.feilSaksflyt`,label:r.jsx(l,{id:"AksjonspunktGodkjenningArsakPanel.Saksflyt"}),readOnly:t}),r.jsx(K,{name:`${o}.feilBegrunnelse`,label:r.jsx(l,{id:"AksjonspunktGodkjenningArsakPanel.Begrunnelse"}),readOnly:t})]})]})}),q&&r.jsx(Ae,{size:"small",children:q}),r.jsx(Ve,{name:`${o}.besluttersBegrunnelse`,label:r.jsx(l,{id:"AksjonspunktGodkjenningArsakPanel.Begrunnelse"}),validate:[Oe,pn,vn,we],readOnly:t})]})]})})]})};oe.__docgenInfo={description:"",methods:[],displayName:"GodkjenningPanel",props:{index:{required:!0,tsType:{name:"number"},description:""},totrinnskontrollSkjermlenkeContext:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Tn="_aksjonspunktTextContainer_1th9i_5",jn="_lenke_1th9i_10",Q={aksjonspunktTextContainer:Tn,lenke:jn},An="aksjonspunktGodkjenning",ue=({behandling:e,totrinnskontrollSkjermlenkeContext:n,readOnly:t,erForeldrepengerFagsak:s,erTilbakekreving:i,skjemalenkeTyper:u,faktaOmBeregningTilfeller:p,lagLenke:v})=>{const{control:k,watch:f}=re(),{fields:o}=Se({control:k,name:An}),g=f("aksjonspunktGodkjenning");return r.jsx(B,{gap:"6",children:o.map((q,m)=>{const{aksjonspunktKode:d}=g[m],b=n.find(A=>A.totrinnskontrollAksjonspunkter.some(O=>O.aksjonspunktKode===d)),E=b==null?void 0:b.totrinnskontrollAksjonspunkter.find(A=>A.aksjonspunktKode===d);if(!b||!E)return null;const j=le(s,e.status,p,i,E,e.behandlingsresultat),h=u.find(A=>A.kode===b.skjermlenkeType),y=v(b.skjermlenkeType);return r.jsxs("div",{children:[y&&h&&r.jsx(ee,{to:y,onClick:()=>window.scroll(0,0),className:Q.lenke,children:h.navn}),j.map((A,O)=>r.jsx("div",{className:Q.aksjonspunktTextContainer,children:r.jsx(P,{size:"small",children:A})},d.concat("_".concat(O.toString())))),r.jsx(oe,{index:m,totrinnskontrollSkjermlenkeContext:n,readOnly:t})]},q.id)})})};ue.__docgenInfo={description:"",methods:[],displayName:"AksjonspunktGodkjenningFieldArray",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
}>`}]},description:""},totrinnskontrollSkjermlenkeContext:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},skjemalenkeTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},faktaOmBeregningTilfeller:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},lagLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(skjermlenkeCode: string) => Location | undefined",signature:{arguments:[{type:{name:"string"},name:"skjermlenkeCode"}],return:{name:"union",raw:"Location | undefined",elements:[{name:"Location"},{name:"undefined"}]}}},description:""}}};const X=(e=[])=>e.every(n=>n.totrinnskontrollGodkjent),W=(e=[])=>e.every(n=>n.totrinnskontrollGodkjent!==void 0&&n.totrinnskontrollGodkjent!==null),fn=(e,n)=>{if(!n)return!0;const{konsekvenserForYtelsen:t}=n;return!Array.isArray(t)||t.length!==1?!0:!e.some(s=>s===t[0])},qn=e=>e.reduce((n,t)=>t===T.FEIL_FAKTA?{...n,feilFakta:!0}:t===T.FEIL_LOV?{...n,feilLov:!0}:t===T.FEIL_REGEL?{...n,feilSkjønn:!0}:t===T.SKJØNN?{...n,feilSkjønn:!0}:t===T.UTREDNING?{...n,feilUtredning:!0}:t===T.SAKSFLYT||t===T.ANNET?{...n,feilSaksflyt:!0}:t===T.BEGRUNNELSE?{...n,feilBegrunnelse:!0}:{},{}),hn=e=>({aksjonspunktGodkjenning:e.map(n=>n.totrinnskontrollAksjonspunkter).flat().map(n=>({aksjonspunktKode:n.aksjonspunktKode,totrinnskontrollGodkjent:n.totrinnskontrollGodkjent,besluttersBegrunnelse:te(n.besluttersBegrunnelse),...qn(n.vurderPaNyttArsaker?n.vurderPaNyttArsaker:[])}))}),ge=({behandling:e,onSubmit:n,forhandsvisVedtaksbrev:t,readOnly:s,erBehandlingEtterKlage:i,erForeldrepengerFagsak:u,skjemalenkeTyper:p,erTilbakekreving:v,totrinnskontrollSkjermlenkeContext:k,faktaOmBeregningTilfeller:f,lagLenke:o,beslutterFormData:g,setBeslutterFormData:q})=>{const m=e&&e.type===R.KLAGE,d=e&&e.type===R.ANKE,b=V.useMemo(()=>fn([x.ENDRING_I_FORDELING_AV_YTELSEN,x.INGEN_ENDRING],e.behandlingsresultat),[e.behandlingsresultat]),E=V.useMemo(()=>hn(k),[k]),j=Le({defaultValues:g||E}),h=j.watch("aksjonspunktGodkjenning");return e.toTrinnsBehandling?r.jsx(Ge,{formMethods:j,onSubmit:n,setDataOnUnmount:q,children:r.jsxs(B,{gap:"6",children:[!s&&r.jsx(De,{children:[r.jsx(l,{id:"HelpText.ToTrinnsKontroll"},1)]}),r.jsx(ue,{behandling:e,erForeldrepengerFagsak:u,erTilbakekreving:v,readOnly:s,totrinnskontrollSkjermlenkeContext:k,skjemalenkeTyper:p,faktaOmBeregningTilfeller:f,lagLenke:o}),r.jsxs(w,{gap:"4",children:[r.jsx(M,{variant:"primary",size:"small",disabled:!X(h)||!W(h)||j.formState.isSubmitting,loading:j.formState.isSubmitting,children:r.jsx(l,{id:"ToTrinnsForm.Godkjenn"})}),r.jsx(M,{variant:"primary",size:"small",disabled:X(h)||!W(h)||j.formState.isSubmitting,loading:j.formState.isSubmitting,onClick:_e,children:r.jsx(l,{id:"ToTrinnsForm.SendTilbake"})}),!m&&!i&&!d&&!v&&b&&r.jsx(He,{href:"#",onClick:t,children:r.jsx(l,{id:"ToTrinnsForm.ForhandvisBrev"})})]})]})}):null};ge.__docgenInfo={description:"",methods:[],displayName:"TotrinnskontrollBeslutterForm",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
}>`}]},description:""},totrinnskontrollSkjermlenkeContext:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]"},description:""},forhandsvisVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},skjemalenkeTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},erBehandlingEtterKlage:{required:!0,tsType:{name:"boolean"},description:""},faktaOmBeregningTilfeller:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},lagLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(skjermlenkeCode: string) => Location | undefined",signature:{arguments:[{type:{name:"string"},name:"skjermlenkeCode"}],return:{name:"union",raw:"Location | undefined",elements:[{name:"Location"},{name:"undefined"}]}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  aksjonspunktGodkjenning: AksjonspunktGodkjenningData[];
}`,signature:{properties:[{key:"aksjonspunktGodkjenning",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  totrinnskontrollGodkjent?: boolean;
  besluttersBegrunnelse?: string;
  feilFakta?: boolean;
  feilLov?: boolean;
  feilSkjønn?: boolean;
  feilUtredning?: boolean;
  feilSaksflyt?: boolean;
  feilBegrunnelse?: boolean;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"feilFakta",value:{name:"boolean",required:!1}},{key:"feilLov",value:{name:"boolean",required:!1}},{key:"feilSkjønn",value:{name:"boolean",required:!1}},{key:"feilUtredning",value:{name:"boolean",required:!1}},{key:"feilSaksflyt",value:{name:"boolean",required:!1}},{key:"feilBegrunnelse",value:{name:"boolean",required:!1}}]}}],raw:"AksjonspunktGodkjenningData[]",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},beslutterFormData:{required:!1,tsType:{name:"any"},description:""},setBeslutterFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const En="_approvalItem_1cx8u_1",Rn="_approvalItemContainer_1cx8u_7",Fn="_aksjonspunktTextContainer_1cx8u_11",cn="_resultatFraGodkjenningTextContainer_1cx8u_16",Bn="_lenke_1cx8u_20",Vn="_checkmarkIcon_1cx8u_24",On="_xmark_1cx8u_30",c={approvalItem:En,approvalItemContainer:Rn,aksjonspunktTextContainer:Fn,resultatFraGodkjenningTextContainer:cn,lenke:Bn,checkmarkIcon:Vn,xmark:On},Nn=({vurderPaNyttArsaker:e,vurderArsaker:n})=>r.jsx("div",{className:c.approvalItem,children:e==null?void 0:e.map(t=>{var s;return r.jsxs(w,{gap:"2",children:[r.jsx(Xe,{className:c.xmark}),r.jsx("div",{children:(s=n.find(i=>t===i.kode))==null?void 0:s.navn})]},t)})}),de=({behandling:e,totrinnskontrollSkjermlenkeContext:n,erForeldrepengerFagsak:t,erTilbakekreving:s,skjemalenkeTyper:i,vurderArsaker:u,faktaOmBeregningTilfeller:p,lagLenke:v})=>{const k=U(),f=V.useCallback((...o)=>r.jsx("b",{children:o}),[]);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:c.resultatFraGodkjenningTextContainer,children:r.jsx(l,{id:"ToTrinnsForm.LøstAksjonspunkt",values:{b:f}})}),n.map(o=>{const g=o.totrinnskontrollAksjonspunkter,q=i.find(m=>m.kode===o.skjermlenkeType);if(g.length>0){const m=v(o.skjermlenkeType);return r.jsxs(Te.Fragment,{children:[m&&q&&r.jsx(ee,{to:m,onClick:()=>window.scroll(0,0),className:c.lenke,children:q.navn}),g.map(d=>{const b=le(t,e.status,p,s,d,e.behandlingsresultat);return r.jsxs("div",{className:c.approvalItemContainer,children:[b.map((E,j)=>r.jsx("div",{className:c.aksjonspunktTextContainer,children:r.jsx(P,{size:"small",children:E})},d.aksjonspunktKode.concat("_".concat(j.toString())))),r.jsx("div",{className:c.approvalItem,children:d.totrinnskontrollGodkjent?r.jsxs(w,{gap:"2",children:[r.jsx(Me,{title:k.formatMessage({id:"ToTrinnsForm.Godkjent"}),className:c.checkmarkIcon}),r.jsx(l,{id:"ToTrinnsForm.Godkjent"})]}):r.jsx(Nn,{vurderPaNyttArsaker:d==null?void 0:d.vurderPaNyttArsaker,vurderArsaker:u})}),r.jsx("pre",{className:c.approvalItem,children:te(d.besluttersBegrunnelse)})]},d.aksjonspunktKode)})]},o.skjermlenkeType)}return null})]})};de.__docgenInfo={description:"",methods:[],displayName:"TotrinnskontrollSaksbehandlerPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
}>`}]},description:""},totrinnskontrollSkjermlenkeContext:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]"},description:""},erForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},skjemalenkeTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},vurderArsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},faktaOmBeregningTilfeller:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},lagLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(skjermlenkeCode: string) => Location | undefined",signature:{arguments:[{type:{name:"string"},name:"skjermlenkeCode"}],return:{name:"union",raw:"Location | undefined",elements:[{name:"Location"},{name:"undefined"}]}}},description:""}}};const ke={"HelpText.ToTrinnsKontroll":"Kontroller endrede opplysninger og faglige vurderinger","ApprovalField.Godkjent":"Godkjent","ApprovalField.Vurder":"Vurder på nytt","AksjonspunktGodkjenningArsakPanel.Begrunnelse":"Begrunnelse","AksjonspunktGodkjenningArsakPanel.Arsak":"Årsak til retur","AksjonspunktGodkjenningArsakPanel.Forklaring":"Feil, mangler og/eller behov for ytterligere begrunnelse knyttet til:","AksjonspunktGodkjenningArsakPanel.Saksflyt":"Saksflyt","AksjonspunktGodkjenningArsakPanel.Fakta":"Fakta","AksjonspunktGodkjenningArsakPanel.Lovanvendelse":"Regel-/lovanvendelse","AksjonspunktGodkjenningArsakPanel.Skjønn":"Skjønn","AksjonspunktGodkjenningArsakPanel.Utredning":"Utredning","ToTrinnsForm.Godkjent":"Godkjent","ToTrinnsForm.LøstAksjonspunkt":"<b>Løst aksjonspunkt:</b> Kontroller endrede opplysninger og faglige vurderinger","ToTrinnsForm.Beregning.AvklarAktiviteter":"Det er vurdert hvilke aktiviteter som skal benyttes i beregningsgrunnlaget.","ToTrinnsForm.Beregning.OverstyrtBeregningsaktiviteter":"Det er overstyrt hvilke aktiviteter som skal benyttes i beregningsgrunnlaget.","ToTrinnsForm.Beregning.OverstyrtBeregningsgrunnlag":"Rapporterte inntekter er overstyrt.","ToTrinnsForm.Beregning.VarigEndring":"Det er fastsatt varig endret/nyoppstartet næring.","ToTrinnsForm.Beregning.IkkeVarigEndring":"Det er fastsatt at det ikke er varig endring i næring.","ToTrinnsForm.Beregning.InntektFastsatt":"Inntekt er skjønnsmessig fastsatt.","ToTrinnsForm.Beregning.DekningsgradEndret":"Dekningsgrad er endret.","ToTrinnsForm.Beregning.VurderFrilans":"Det er vurdert om søker er nyoppstartet frilanser.","ToTrinnsForm.Beregning.VurderSNNyIArbeidslivet":"Det er vurdert om søker er selvstendig næringsdrivende som er ny i arbeidslivet.","ToTrinnsForm.Beregning.VurderLønnsendring":"Det er vurdert om søker har hatt lønnsendring i løpet av de siste tre månedene.","ToTrinnsForm.Beregning.ArbeidsinntektFastsatt":"Arbeidsinntekt er fastsatt.","ToTrinnsForm.Beregning.BeregningsgrunnlagOgInntektskategoriFastsatt":"Det er fastsatt fordeling av beregningsgrunnlaget ved direkte overgang fra ytelse.","ToTrinnsForm.Beregning.FastsettFordeltBeregningsgrunnlag":"Ny fordeling av beregningsgrunnlaget er fastsatt.","ToTrinnsForm.Beregning.GraderingUtenBG":"Det er vurdert at fordeling av inntektsgrunnlag ved gradering er riktig","ToTrinnsForm.Godkjenn":"Godkjenn vedtaket","ToTrinnsForm.SendTilbake":"Send til saksbehandler","ToTrinnsForm.Opptjening.Endring":"Perioden {aktivitetType}{arbeidsInfoText} er endret.","ToTrinnsForm.Opptjening.EndringArbeidMedNavn":"Perioden {a} for {b} ({c}) er endret.","ToTrinnsForm.Opptjening.EndringArbeidUtenNavn":"Perioden {a} for organisasjonen med orgnr. {b} er endret.","ToTrinnsForm.Opptjening.EndringAktivitet":"Perioden {a} er endret.","ToTrinnsForm.Opptjening.UnderkjenningArbeidMedNavn":"Aktivitet {a} for {bb} ({c}) er <b>ikke</b> godkjent.","ToTrinnsForm.Opptjening.UnderkjenningArbeidUtenNavn":"Aktivitet {a} for organisasjonen med orgnr. {bb} er <b>ikke</b> godkjent.","ToTrinnsForm.Opptjening.UnderkjenningAktivitet":"Aktivitet {a} er <b>ikke</b> godkjent.","ToTrinnsForm.Opptjening.GodkjenningArbeidMedNavn":"Aktivitet {a} for {b} ({c}) er godkjent.","ToTrinnsForm.Opptjening.GodkjenningArbeidUtenNavn":"Aktivitet {a} for organisasjonen med orgnr. {b} er godkjent.","ToTrinnsForm.Opptjening.GodkjenningAktivitet":"Aktivitet {a} er godkjent.","ToTrinnsForm.Adopsjon.KontrollerOpplysninger":"Opplysninger om adopsjon er endret.","ToTrinnsForm.Adopsjon.VurderEktefellesBarn":"Det er vurdert om adopsjon gjelder ektefelles barn.","ToTrinnsForm.Adopsjon.VurderMannAdoptererAlene":"Det er vurdert om mann adopterer alene.","ToTrinnsForm.Adopsjon.VilkarOverstyrt":"Adopsjonsvilkåret er overstyrt.","ToTrinnsForm.Omsorgovertagelse.KontrollerOpplysninger":"Opplysninger om omsorgsovertagelse er endret.","ToTrinnsForm.Omsorgovertagelse.VurderVilkarForeldreansvarTredjeLedd":"Vilkårene for § 14-17 tredje ledd er vurdert.","ToTrinnsForm.Omsorgovertagelse.VurderTidligereUtbetaling":"Det er vurdert om tidligere utbetalt ytelse gjelder for samme barn.","ToTrinnsForm.Fødsel.VurderSokersRelasjon":"Søkers relasjon til barnet er vurdert.","ToTrinnsForm.Fødsel.VurderVilkarSykdom":"Vilkår for sykdom er vurdert.","ToTrinnsForm.Fødsel.VurderTidligereUtbetaling":"Det er vurdert om tidligere utbetalt ytelse gjelder for samme barn.","ToTrinnsForm.Fødsel.KontrollerOpplysningerTermin":"Opplysninger om termin fra søknad er endret.","ToTrinnsForm.Fødsel.KontrollerOpplysningerFodselsdokumentasjonen":"Opplysninger om fødsel fra dokumentasjon er endret.","ToTrinnsForm.Fødsel.SjekkManglendeFødsel":"Manglende opplysninger om dokumentasjon er endret.","ToTrinnsForm.Fødsel.VilkarOverstyrt":"Fødselsvilkåret er overstyrt.","ToTrinnsForm.Omsorg.VurderOmsorg":"Opplysninger om omsorg er endret.","ToTrinnsForm.Aleneomsorg.VurderAleneomsorg":"Opplysninger om aleneomsorg er endret.","ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarFjerdeLedd":"Vilkårene for § 14-17 fjerde ledd er vurdert.","ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddES":"Vilkårene for § 14-17 andre ledd er vurdert.","ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddFP":"Vilkårene for § 14-5 andre ledd er vurdert.","ToTrinnsForm.Foreldreansvar.VurderTidligereUtbetaling":"Det er vurdert om tidligere utbetalt ytelse gjelder for samme barn.","ToTrinnsForm.Foreldreansvar.OpplysningerOmForeldreansvarOgOmsorg":"Opplysninger om foreldreansvar og omsorg er kontrollert","ToTrinnsForm.Soknadsfrist.ManueltVurdert":"Søknadsfrist er manuelt vurdert.","ToTrinnsForm.Soknadsfrist.VilkarOverstyrt":"Søknadsfristvilkåret er overstyrt.","ToTrinnsForm.Medlemskap.AvklarLovligOpphold":"Det er vurdert om søker har lovlig opphold.","ToTrinnsForm.Medlemskap.OverstyrtStartdato":"Startdato er overstyrt.","ToTrinnsForm.Medlemskap.OverstyrtDekningsgrad":"Dekningsgrad er overstyrt.","ToTrinnsForm.Medlemskap.AvklartDekningsgrad":"Dekningsgrad er avklart.","ToTrinnsForm.Medlemskap.AvklarOppholdsrett":"Det er vurdert om søker har oppholdsrett.","ToTrinnsForm.Medlemskap.VurderSokerBosatt":"Det er vurdert om søker er bosatt i Norge.","ToTrinnsForm.Medlemskap.VurderGyldigMedlemskap":"Det er vurdert om søker har gyldig medlemskap i perioden.","ToTrinnsForm.Medlemskap.FastsettStartdato":"Startdato er endret.","ToTrinnsForm.Medlemskap.VilkarOverstyrt":"Medlemskapsvilkåret er overstyrt.","ToTrinnsForm.AvklarUttak.AnnenForelderHarRett":"Det er vurdert om annen forelder har rett til foreldrepenger","ToTrinnsForm.AvklarUttak.PeriodeLagtTil":"Perioden {a} til {b} er lagt til.","ToTrinnsForm.AvklarUttak.PeriodeSlettet":"Perioden {a} til {b} er slettet.","ToTrinnsForm.AvklarUttak.PeriodeAvklart":"Perioden {a} til {b} er avklart.","ToTrinnsForm.AvklarUttak.PeriodeEndret":"Perioden {a} til {b} er endret.","ToTrinnsForm.OverstyrUttak.PeriodeEndret":"Perioden {a} til {b} er overstyrt.","ToTrinnsForm.ManueltFastsattUttak.PeriodeEndret":"Perioden {a} til {b} er fastsatt manuelt.","TotrinnsForm.Uttak.AvklarManglendeUttaksperiode":"Manglende uttaksperiode er fastsatt manuelt.","ToTrinnsForm.Uttak.Dod":"Opplysninger om død er kontrollert.","ToTrinnsForm.Uttak.Soknadsfrist":"Opplysninger om søknadsfrist er kontrollert.","ToTrinnsForm.Uttak.Klage":"Opplysninger om realitetsbehandling/klage er kontrollert.","ToTrinnsForm.Uttak.AnnenpartEØS":"Opplysninger om annen forelders uttak EØS er kontrollert.","ToTrinnsForm.Uttak.TetteStønadsperioder":"Opplysninger om uttak etter start neste stønadsperiode er kontrollert","ToTrinnsForm.Uttak.FordelingStonadsperioder":"Opplysninger om fordeling av stønadsperioden er kontrollert.","ToTrinnsForm.Uttak.TilstotendeYtelser.Innvilget":"Opplysninger om tilstøtende ytelser innvilget er kontrollert.","ToTrinnsForm.Uttak.TilstotendeYtelser.Opphort":"Opplysninger om tilstøtende ytelser opphørt er kontrollert.","ToTrinnsForm.Uttak.Stortinget":"Søker er stortingsrepresentant. Uttak er kontrollert.","ToTrinnsForm.Uttak.Overstyrt":"Uttaksperioder er overstyrt.","ToTrinnsForm.TilkjentYtelse.Tilbaketrekk":"Det er vurdert om det skal utføres tilbakekreving fra søker.","ToTrinnsForm.Faresignaler.Vurder":"Det er vurdert om faresignalene påvirket behandlingen","ToTrinnsForm.Opptjening.VurderPerioderMedOpptjening":"Perioder med opptjening har blitt vurdert.","ToTrinnsForm.Opptjening.VurderOpptjeningsvilkåret":"Opptjeningsvilkåret har blitt manuelt vurdert.","ToTrinnsForm.Beregningsgrunnlag.Refusjonsstart":"Startdato for refusjon har blitt manuelt vurdert","ToTrinnsForm.ArbeidOgInntekt.ManueltOpprettet":"Det er manuelt opprettet ett eller flere arbeidsforhold","ToTrinnsForm.Klage.OmgjortTilGunst":"Omgjort til gunst","ToTrinnsForm.Klage.StadfesteYtelsesVedtak":"Stadfest ytelsesvedtak","ToTrinnsForm.Klage.OppheveYtelsesVedtak":"Opphev ytelsesvedtak","ToTrinnsForm.Klage.Avvist":"Klagen avvist fordi den ikke oppfyller formkravene","ToTrinnsForm.Klage.DelvisOmgjortTilGunst":"Delvis omgjøring, til gunst","ToTrinnsForm.Klage.HjemsendUtenOpphev":"Hjemsend uten å oppheve","ToTrinnsForm.Klage.OmgjortTilUgunst":"Omgjort til ugunst","ToTrinnsForm.Vedtak.Fritekstbrev":"Det er laget et fritekstbrev","ToTrinnsForm.ForhandvisBrev":"Forhåndsvis brev","FatterVedtakApprovalModal.GoToSearchPage":"Du kommer nå til forsiden.","FatterVedtakApprovalModal.Ok":"OK","FatterVedtakApprovalModal.ModalDescription":"Forslag til vedtak er sendt til beslutter. Du kommer nå til forsiden.","FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler":"Vedtak returneres til saksbehandler for ny vurdering.","FatterVedtakApprovalModal.IkkeInnvilget":"Vedtaket er avslått","FatterVedtakApprovalModal.ModalDescriptionApproval":"Vedtaket er innvilget og vedtaket blir iverksatt. Du kommer nå til forsiden.","FatterVedtakApprovalModal.ModalDescriptionAnke":"Behandlingen er sendt.","FatterVedtakApprovalModal.ModalDescriptionOpphort":"Vedtaket er opphørt. Du kommer nå til forsiden.","FatterVedtakApprovalModal.Innvilget":"Vedtaket er innvilget","FatterVedtakApprovalModal.UendretUtfall":"Resultat: Ingen endring, behandlingen avsluttes","FatterVedtakApprovalModal.InnvilgetVedtak":"Vedtaket er innvilget og blir iverksatt","FatterVedtakApprovalModal.OpphortVedtak":"Vedtaket er opphørt.","FatterVedtakApprovalModal.ModalDescriptionKlage":"Resultatet av klagebehandlingen blir iverksatt","FatterVedtakApprovalModal.Tilbakekreving":"Tilbakekreving er vedtatt og iverksatt","FatterVedtakApprovalModal.TilbakekrevingRevurdering":"Tilbakekreving revurdering er vedtatt og iverksatt"},Kn=ae(ke),wn=[L.FAKTA_OM_FEILUTBETALING,L.FORELDELSE,L.TILBAKEKREVING,L.VEDTAK],Sn=e=>{const n=[];return e.feilFakta&&n.push(T.FEIL_FAKTA),e.feilLov&&n.push(T.FEIL_LOV),e.feilSkjønn&&n.push(T.SKJØNN),e.feilUtredning&&n.push(T.UTREDNING),e.feilSaksflyt&&n.push(T.SAKSFLYT),e.feilBegrunnelse&&n.push(T.BEGRUNNELSE),n},Ln=[],Gn=e=>G.FAKTA_OM_BEREGNING_TILFELLE in e?e[G.FAKTA_OM_BEREGNING_TILFELLE]:Ln,me=({behandling:e,location:n,fagsakYtelseType:t,readOnly:s,onSubmit:i,forhandsvisVedtaksbrev:u,alleKodeverk:p,createLocationForSkjermlenke:v,beslutterFormData:k,setBeslutterFormData:f})=>{const o=R.TILBAKEKREVING===e.type||R.TILBAKEKREVING_REVURDERING===e.type,g=y=>{const A=y.aksjonspunktGodkjenning.map(N=>({aksjonspunktKode:N.aksjonspunktKode,godkjent:N.totrinnskontrollGodkjent,begrunnelse:N.besluttersBegrunnelse,arsaker:Sn(N)})),I={"@type":o?ie.FATTER_VEDTAK:a.FATTER_VEDTAK,begrunnelse:null,aksjonspunktGodkjenningDtos:A};return i({fatterVedtakAksjonspunktDto:I,erAlleAksjonspunktGodkjent:y.aksjonspunktGodkjenning.every(N=>N.totrinnskontrollGodkjent)})},q=e?e.behandlingÅrsaker.map(({behandlingArsakType:y})=>y).some(y=>y===D.ETTER_KLAGE||y===D.KLAGE_U_INNTK||y===D.KLAGE_M_INNTK):!1,m=o?wn.flatMap(y=>{const A=e.totrinnskontrollÅrsaker.find(O=>O.skjermlenkeType===y.kode);return A?[A]:[]}):e.totrinnskontrollÅrsaker,d=y=>v(n,y),b=e.status===_.FATTER_VEDTAK,E=p[G.SKJERMLENKE_TYPE],j=p[G.VURDER_AARSAK],h=Gn(p);return r.jsxs(ne,{value:Kn,children:[b&&r.jsx(ge,{behandling:e,totrinnskontrollSkjermlenkeContext:m,readOnly:s,onSubmit:g,forhandsvisVedtaksbrev:u,erForeldrepengerFagsak:t===C.FORELDREPENGER,skjemalenkeTyper:E,erBehandlingEtterKlage:q,faktaOmBeregningTilfeller:h,erTilbakekreving:o,lagLenke:d,beslutterFormData:k,setBeslutterFormData:f}),!b&&r.jsx(de,{behandling:e,totrinnskontrollSkjermlenkeContext:m,erForeldrepengerFagsak:t===C.FORELDREPENGER,erTilbakekreving:o,skjemalenkeTyper:E,lagLenke:d,vurderArsaker:j,faktaOmBeregningTilfeller:h})]})};me.__docgenInfo={description:"",methods:[],displayName:"TotrinnskontrollSakIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
}>`}]},description:""},location:{required:!0,tsType:{name:"Location"},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},{name:"Record",elements:[{name:"TilbakekrevingKodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ApData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  fatterVedtakAksjonspunktDto: {
    '@type': AksjonspunktKode.FATTER_VEDTAK | AksjonspunktKodeTilbakekreving.FATTER_VEDTAK;
  } & FatterVedtakAp;
  erAlleAksjonspunktGodkjent: boolean;
}`,signature:{properties:[{key:"fatterVedtakAksjonspunktDto",value:{name:"intersection",raw:`{
  '@type': AksjonspunktKode.FATTER_VEDTAK | AksjonspunktKodeTilbakekreving.FATTER_VEDTAK;
} & FatterVedtakAp`,elements:[{name:"signature",type:"object",raw:`{
  '@type': AksjonspunktKode.FATTER_VEDTAK | AksjonspunktKodeTilbakekreving.FATTER_VEDTAK;
}`,signature:{properties:[{key:"@type",value:{name:"union",raw:"AksjonspunktKode.FATTER_VEDTAK | AksjonspunktKodeTilbakekreving.FATTER_VEDTAK",elements:[{name:"AksjonspunktKode.FATTER_VEDTAK"},{name:"AksjonspunktKodeTilbakekreving.FATTER_VEDTAK"}],required:!0}}]}},{name:"intersection",raw:`{
  aksjonspunktGodkjenningDtos: {
    godkjent: boolean;
    begrunnelse?: string;
    aksjonspunktKode?: string;
    arsaker: string[];
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FATTER_VEDTAK | AksjonspunktKodeTilbakekreving.FATTER_VEDTAK>`,elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktGodkjenningDtos: {
    godkjent: boolean;
    begrunnelse?: string;
    aksjonspunktKode?: string;
    arsaker: string[];
  }[];
}`,signature:{properties:[{key:"aksjonspunktGodkjenningDtos",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  godkjent: boolean;
  begrunnelse?: string;
  aksjonspunktKode?: string;
  arsaker: string[];
}`,signature:{properties:[{key:"godkjent",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktKode",value:{name:"string",required:!1}},{key:"arsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`{
  godkjent: boolean;
  begrunnelse?: string;
  aksjonspunktKode?: string;
  arsaker: string[];
}[]`,required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"AksjonspunktKode.FATTER_VEDTAK | AksjonspunktKodeTilbakekreving.FATTER_VEDTAK",elements:[{name:"AksjonspunktKode.FATTER_VEDTAK"},{name:"AksjonspunktKodeTilbakekreving.FATTER_VEDTAK"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]}],required:!0}},{key:"erAlleAksjonspunktGodkjent",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},forhandsvisVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},createLocationForSkjermlenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined",signature:{arguments:[{type:{name:"Location"},name:"behandlingLocation"},{type:{name:"string"},name:"skjermlenkeCode"}],return:{name:"union",raw:"Location | undefined",elements:[{name:"Location"},{name:"undefined"}]}}},description:""},beslutterFormData:{required:!1,tsType:{name:"any"},description:""},setBeslutterFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const _n="_image_1vkl5_1",Pn={image:_n},In=(e,n,t,s)=>e===R.TILBAKEKREVING?"FatterVedtakApprovalModal.Tilbakekreving":e===R.TILBAKEKREVING_REVURDERING?"FatterVedtakApprovalModal.TilbakekrevingRevurdering":e===R.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":e===R.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":s?"FatterVedtakApprovalModal.UendretUtfall":n&&n.type===F.AVSLATT?"FatterVedtakApprovalModal.IkkeInnvilget":t?"FatterVedtakApprovalModal.OpphortVedtak":"FatterVedtakApprovalModal.InnvilgetVedtak",Dn=(e,n)=>n===R.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":n===R.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":e?"FatterVedtakApprovalModal.ModalDescriptionOpphort":"FatterVedtakApprovalModal.ModalDescriptionApproval",H=e=>e===_.FATTER_VEDTAK,Mn=(e,n,t,s,i,u)=>e?H(n)?In(t,s,i,u):"":"FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler",xn=e=>H(e)?"FatterVedtakApprovalModal.Innvilget":"",Un=(e,n,t)=>H(e)?Dn(t,n):"FatterVedtakApprovalModal.ModalDescription",pe=({closeEvent:e,allAksjonspunktApproved:n,behandlingStatusKode:t,behandlingTypeKode:s,behandlingsresultat:i,harSammeResultatSomOriginalBehandling:u})=>{const p=U(),v=!!i&&i.type===F.OPPHOR,k=Mn(n,t,s,i,v,u),f=xn(t),o=Un(t,s,v);return r.jsx(Y,{width:"small",open:!0,"aria-label":p.formatMessage({id:o}),onClose:e,children:r.jsx(Y.Body,{children:r.jsxs(w,{justify:"space-between",align:"center",children:[r.jsxs(w,{gap:"2",children:[r.jsx(Ce,{className:Pn.image,title:p.formatMessage({id:f})}),r.jsxs(B,{gap:"1",children:[r.jsx(Z,{size:"small",children:r.jsx(l,{id:k})}),r.jsx(P,{size:"small",children:r.jsx(l,{id:"FatterVedtakApprovalModal.GoToSearchPage"})})]})]}),r.jsx(M,{size:"small",variant:"primary",onClick:e,autoFocus:!0,type:"button",children:r.jsx(l,{id:"FatterVedtakApprovalModal.Ok"})})]})})})};pe.__docgenInfo={description:`FatterVedtakApprovalModal

Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.`,methods:[],displayName:"FatterVedtakApprovalModal",props:{closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"intersection['behandlingsresultat']",raw:"Behandling['behandlingsresultat']"},description:""},behandlingStatusKode:{required:!0,tsType:{name:"string"},description:""},behandlingTypeKode:{required:!0,tsType:{name:"string"},description:""},harSammeResultatSomOriginalBehandling:{required:!1,tsType:{name:"boolean"},description:""}}};const Hn=ae(ke),ve=({behandling:e,closeEvent:n,allAksjonspunktApproved:t})=>{var s;return r.jsx(ne,{value:Hn,children:r.jsx(pe,{closeEvent:n,allAksjonspunktApproved:t,behandlingsresultat:e.behandlingsresultat,behandlingStatusKode:e.status,behandlingTypeKode:e.type,harSammeResultatSomOriginalBehandling:((s=e.behandlingsresultat)==null?void 0:s.erRevurderingMedUendretUtfall)||!1})})};ve.__docgenInfo={description:"",methods:[],displayName:"FatterVedtakTotrinnskontrollModalSakIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
}>`}]},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""}}};const ye=({behandling:e,pushLocation:n,allAksjonspunktApproved:t})=>r.jsx(ve,{behandling:e,closeEvent:()=>{n("/")},allAksjonspunktApproved:t});ye.__docgenInfo={description:"",methods:[],displayName:"BeslutterModalIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
}>`}]},description:""},pushLocation:{required:!0,tsType:{name:"signature",type:"function",raw:"(location: string) => void",signature:{arguments:[{type:{name:"string"},name:"location"}],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""}}};const Cn=({fagsakData:e,valgtBehandlingUuid:n,beslutterFormData:t,setBeslutterFormData:s,toggleVisUtvidetBehandlingDetaljerKnapp:i})=>{const u=U(),[p,v]=V.useState(!1),[k,f]=V.useState(!1),o=e.getFagsak(),g=$(e.getBehandling(n)),q=he(g),m=fe(),d=qe(),b=Ee(Re()),{brukernavn:E,kanVeilede:j}=$(b.data).innloggetBruker,h=$e(g.type),{mutate:y}=Pe({mutationFn:S=>q.lagreTotrinnsaksjonspunkt(S)}),A=Je(g),O=()=>{A(!1,{behandlingUuid:g.uuid,fagsakYtelseType:o.fagsakYtelseType,gjelderVedtak:!0})};if(!g.totrinnskontrollÅrsaker)return null;const I=S=>{const be={behandlingUuid:g.uuid,behandlingVersjon:g.versjon,bekreftedeAksjonspunktDtoer:[S.fatterVedtakAksjonspunktDto]};f(S.erAlleAksjonspunktGodkjent),v(!0),y(be)},N=g.status===_.FATTER_VEDTAK;return r.jsxs(r.Fragment,{children:[r.jsx(ze,{tekst:u.formatMessage({id:N?"TotrinnskontrollIndex.Godkjenning":"TotrinnskontrollIndex.FraBeslutter"}),toggleVisUtvidetBehandlingDetaljerKnapp:i,children:r.jsx(me,{behandling:g,location:m,readOnly:E===g.ansvarligSaksbehandler||j,onSubmit:I,forhandsvisVedtaksbrev:O,fagsakYtelseType:o.fagsakYtelseType,alleKodeverk:h,createLocationForSkjermlenke:Ye,beslutterFormData:t,setBeslutterFormData:s})}),p&&r.jsx(ye,{behandling:g,pushLocation:d,allAksjonspunktApproved:k})]})};Cn.__docgenInfo={description:`TotrinnskontrollIndex

Ansvarlig for att rita opp vilkår og aksjonspunkter med toTrinnskontroll`,methods:[],displayName:"TotrinnskontrollIndex",props:{fagsakData:{required:!0,tsType:{name:"FagsakData"},description:""},valgtBehandlingUuid:{required:!0,tsType:{name:"string"},description:""},beslutterFormData:{required:!1,tsType:{name:"any"},description:""},setBeslutterFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data?: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},toggleVisUtvidetBehandlingDetaljerKnapp:{required:!0,tsType:{name:"ReactElement"},description:""}}};export{x as K,Xe as S,Cn as T};
