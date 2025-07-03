var dg=Object.defineProperty;var ug=(e,t,r)=>t in e?dg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var z=(e,t,r)=>ug(e,typeof t!="symbol"?t+"":t,r);import{g as Ul,r as c,u as Qn,_ as gi,s as mi,c as lt,a as te,R as v,b as hs,d as dt,T as gg,S as Mr,m as mg,e as Dr,f as Hl,h as mr,W as cg,Q as fg,o as Yl,A as kg,i as ze,P as Sn,n as Tt,j as k,t as gn,O as nt,F as vg,E as pg,k as ci,l as $l,p as Wl,q as zl,v as Jl,w as Ta,x as Oa,N as Na,J as Xl,y as Ye,z as yg,B as bg,C as hg,D as Ig}from"./iframe-CtesJBL1.js";import{r as wg}from"./index-D2FViwTx.js";var Ra=wg();const ss=Ul(Ra);function Ag(e,t){var r=e.values,n=gi(e,["values"]),s=t.values,a=gi(t,["values"]);return mi(s,r)&&mi(n,a)}function Ql(e){var t=Qn(),r=t.formatMessage,n=t.textComponent,s=n===void 0?c.Fragment:n,a=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,g=d===void 0?s:d,f=e.ignoreTag,m={id:a,description:i,defaultMessage:o},y=r(m,l,{ignoreTag:f});return typeof u=="function"?u(Array.isArray(y)?y:[y]):g?c.createElement(g,null,y):c.createElement(c.Fragment,null,y)}Ql.displayName="FormattedMessage";var W=c.memo(Ql,Ag);W.displayName="MemoizedFormattedMessage";var tn=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(tn||{}),ce=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(ce||{}),$e=(e=>(e.AVV_DOK="AVV_DOK",e.AVV_FODSEL="AVV_FODSEL",e.UTV_FRIST="UTV_FRIST",e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG",e.VENT_PÅ_BRUKERTILBAKEMELDING="VENT_PÅ_BRUKERTILBAKEMELDING",e.VENT_UTLAND_TRYGD="VENT_UTLAND_TRYGD",e.UTVIDET_TILSVAR_FRIST="UTV_TIL_FRIST",e.ENDRE_TILKJENT_YTELSE="ENDRE_TILKJENT_YTELSE",e.VENT_PÅ_MULIG_MOTREGNING="VENT_PÅ_MULIG_MOTREGNING",e.AVV_RESPONS_REVURDERING="AVV_RESPONS_REVURDERING",e.FOR_TIDLIG_SOKNAD="FOR_TIDLIG_SOKNAD",e.VENT_PÅ_SISTE_AAP_ELLER_DP_MELDEKORT="VENT_PÅ_SISTE_AAP_MELDEKORT",e.ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER="ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",e.ANKE_OVERSENDT_TIL_TRYGDERETTEN="ANKE_OVERSENDT_TIL_TRYGDERETTEN",e.VENT_PÅ_KORRIGERT_BESTEBEREGNING="VENT_PÅ_KORRIGERT_BESTEBEREGNING",e.VENT_OPDT_INNTEKTSMELDING="VENT_OPDT_INNTEKTSMELDING",e.VENT_OPPTJENING_OPPLYSNINGER="VENT_OPPTJENING_OPPLYSNINGER",e.VENT_INNTEKT_RAPPORTERINGSFRIST="VENT_INNTEKT_RAPPORTERINGSFRIST",e.VENT_MANGLENDE_SYKEMELDING="VENT_MANGLENDE_SYKEMELDING",e.VENT_SØKNAD_SENDT_INFORMASJONSBREV="VENT_SØKNAD_SENDT_INFORMASJONSBREV",e.VENT_ÅPEN_BEHANDLING="VENT_ÅPEN_BEHANDLING",e.VENT_KABAL="VENT_KABAL",e))($e||{}),Or=(e=>(e.PERMISJON="PERMISJON",e.PERMITTERING="PERMITTERING",e.PERMISJON_VED_MILITÆRTJENESTE="PERMISJON_VED_MILITÆRTJENESTE",e.UTDANNINGSPERMISJON_LOVFESTET="UTDANNINGSPERMISJON_LOVFESTET",e.UTDANNINGSPERMISJON="UTDANNINGSPERMISJON",e.UTDANNINGSPERMISJON_IKKE_LOVFESTET="UTDANNINGSPERMISJON_IKKE_LOVFESTET",e.VELFERDSPERMISJON="VELFERDSPERMISJON",e.ANNEN_PERMISJON_LOVFESTET="ANNEN_PERMISJON_LOVFESTET",e.PERMISJON_MED_FORELDREPENGER="PERMISJON_MED_FORELDREPENGER",e.ANNEN_PERMISJON_IKKE_LOVFESTET="ANNEN_PERMISJON_IKKE_LOVFESTET",e))(Or||{});const jg=(e,t,r)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${t}&dokumentId=${r}`,Eg=(e,t,r)=>{const n=window.open(e,t);n&&setTimeout(()=>{n.document.title=r},1e3)},Sr=e=>lt({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Tg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Zl=c.forwardRef((e,t)=>{var{className:r,size:n="medium",as:s="p",spacing:a,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,g=Tg(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=te();return v.createElement(s,Object.assign({},g,{ref:t,className:f(r,"navds-body-long",`navds-body-long--${n}`,Sr({spacing:a,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Og=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const se=c.forwardRef((e,t)=>{var{className:r,size:n="medium",as:s="p",spacing:a,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,g=Og(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=te();return v.createElement(s,Object.assign({},g,{ref:t,className:f(r,"navds-body-short",`navds-body-short--${n}`,Sr({spacing:a,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Ng=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Nr=c.forwardRef((e,t)=>{var{className:r,size:n="medium",spacing:s,uppercase:a,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:g}=e,f=Ng(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:m}=te();return v.createElement(i,Object.assign({},f,{ref:t,className:m(r,"navds-detail",Sr({spacing:s,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:g,uppercase:a}),{"navds-detail--small":n==="small"})}))});var Rg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ut=c.forwardRef((e,t)=>{var{children:r,className:n,size:s,spacing:a,as:i="p",showIcon:o=!1}=e,l=Rg(e,["children","className","size","spacing","as","showIcon"]);const{cn:u}=te();return v.createElement(i,Object.assign({},l,{ref:t,className:u("navds-error-message","navds-label",n,Sr({spacing:a}),{"navds-label--small":s==="small","navds-error-message--show-icon":o})}),o&&v.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var Pg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Is=c.forwardRef((e,t)=>{var{level:r="1",size:n,className:s,as:a,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=Pg(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=te(),f=a??`h${r}`;return v.createElement(f,Object.assign({},d,{ref:t,className:g(s,"navds-heading",`navds-heading--${n}`,Sr({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var qg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};c.forwardRef((e,t)=>{var{className:r,spacing:n,as:s="p"}=e,a=qg(e,["className","spacing","as"]);const{cn:i}=te();return v.createElement(s,Object.assign({},a,{ref:t,className:i(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var _g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ae=c.forwardRef((e,t)=>{var{className:r,size:n="medium",as:s="label",spacing:a,visuallyHidden:i,textColor:o}=e,l=_g(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:u}=te();return v.createElement(s,Object.assign({},l,{ref:t,className:u(r,"navds-label",Sr({spacing:a,visuallyHidden:i,textColor:o}),{"navds-label--small":n==="small"})}))});function ed(e,t=166,r=!1){let n;function s(...a){const i=()=>{n=void 0,e.apply(this,a)};!n&&r&&i(),clearTimeout(n),n=setTimeout(i,t)}return s.clear=()=>{clearTimeout(n)},s}function Qe(e,t){const r=Object.entries(e).filter(([n])=>!t.includes(n));return Object.fromEntries(r)}const Rr=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{};let fi=0;function Mg(e){const[t,r]=c.useState(e),n=e||t;return c.useEffect(()=>{t==null&&(fi+=1,r(`aksel-id-${fi}`))},[t]),n}const ki=v.useId;function In(e){var t;if(ki!==void 0){const r=ki();return e??r.replace(/(:)/g,"")}return(t=Mg(e))!==null&&t!==void 0?t:""}function rt(e,t=[]){const r=c.useRef(e);return c.useEffect(()=>{r.current=e}),c.useCallback((...n)=>{var s;return(s=r.current)===null||s===void 0?void 0:s.call(r,...n)},t)}function tt({value:e,defaultValue:t,onChange:r}){const n=rt(r),[s,a]=c.useState(t),i=e!==void 0,o=i?e:s,l=rt(u=>{const g=typeof u=="function"?u(o):u;i||a(g),n(g)},[i,n,o]);return[o,l]}let vi=0;function Dg(e){const[t,r]=c.useState(e),n=e||t;return c.useEffect(()=>{t==null&&(vi+=1,r(`aksel-icon-${vi}`))},[t]),n}const pi=v.useId;function Ne(e){var t;return pi!==void 0?pi().replace(/(:)/g,""):(t=Dg(e))!==null&&t!==void 0?t:""}var Sg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const xg=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Sg(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var Fg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Vg=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Fg(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var Lg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Bg=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Lg(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var Cg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Kg=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Cg(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Gg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ug=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Gg(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var Hg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Yg=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Hg(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var $g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ws=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=$g(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Wg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const nd=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Wg(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var zg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Pa=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=zg(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Jg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Xg=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Jg(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var Qg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Zg=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Qg(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var em=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const nm=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=em(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var rm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const tm=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=rm(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var sm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const rd=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=sm(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var am=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const im=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=am(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var om=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const lm=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=om(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var dm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const um=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=dm(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var gm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const td=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=gm(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var mm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const cm=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=mm(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var fm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const km=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=fm(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var vm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const pm=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=vm(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var ym=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const sd=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=ym(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var bm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const hm=c.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=bm(e,["title","titleId"]);let a=Ne();return a=r?n||"title-"+a:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?c.createElement("title",{id:a},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Ar(e,t,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e==null||e(s),r===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}const[Im,gt]=hs({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),wm=typeof window<"u"&&window.matchMedia===void 0,Am=(e,t)=>{const[r,n]=c.useState(t);return c.useEffect(()=>{if(wm)return;const s=window.matchMedia(e);n(s.matches);const a=i=>{n(i.matches)};return s.addEventListener("change",a),()=>{s.removeEventListener("change",a)}},[e]),r};function cn(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Je(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let s;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=r!=null&&r.width?String(r.width):i;s=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=r!=null&&r.width?String(r.width):e.defaultWidth;s=e.values[o]||e.values[i]}const a=e.argumentCallback?e.argumentCallback(t):t;return s[a]}}function Xe(e){return(t,r={})=>{const n=r.width,s=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],a=t.match(s);if(!a)return null;const i=a[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?Em(o,g=>g.test(i)):jm(o,g=>g.test(i));let u;u=e.valueCallback?e.valueCallback(l):l,u=r.valueCallback?r.valueCallback(u):u;const d=t.slice(i.length);return{value:u,rest:d}}}function jm(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function Em(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function qa(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const s=n[0],a=t.match(e.parsePattern);if(!a)return null;let i=e.valueCallback?e.valueCallback(a[0]):a[0];i=r.valueCallback?r.valueCallback(i):i;const o=t.slice(s.length);return{value:i,rest:o}}}const ad=6048e5,Tm=864e5,Om=6e4,Nm=36e5,Rm=1e3,yi=Symbol.for("constructDateFrom");function ve(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&yi in e?e[yi](t):e instanceof Date?new e.constructor(t):new Date(t)}function xr(e,...t){const r=ve.bind(null,t.find(n=>typeof n=="object"));return t.map(r)}let Pm={};function cr(){return Pm}function oe(e,t){return ve(t||e,e)}function Bn(e,t){var o,l,u,d;const r=cr(),n=(t==null?void 0:t.weekStartsOn)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,s=oe(e,t==null?void 0:t.in),a=s.getDay(),i=(a<n?7:0)+a-n;return s.setDate(s.getDate()-i),s.setHours(0,0,0,0),s}const qm={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},id=(e,t,r)=>{let n;const s=qm[e];return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n},_m={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},od=(e,t,r,n)=>_m[e],Mm={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Dm={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Sm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},xm={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Fm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Vm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Lm=(e,t)=>{const r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},ld={ordinalNumber:Lm,era:Je({values:Mm,defaultWidth:"wide"}),quarter:Je({values:Dm,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Je({values:Sm,defaultWidth:"wide"}),day:Je({values:xm,defaultWidth:"wide"}),dayPeriod:Je({values:Fm,defaultWidth:"wide",formattingValues:Vm,defaultFormattingWidth:"wide"})},Bm=/^(\d+)(th|st|nd|rd)?/i,Cm=/\d+/i,Km={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Gm={any:[/^b/i,/^(a|c)/i]},Um={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Hm={any:[/1/i,/2/i,/3/i,/4/i]},Ym={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},$m={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Wm={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},zm={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Jm={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Xm={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},dd={ordinalNumber:qa({matchPattern:Bm,parsePattern:Cm,valueCallback:e=>parseInt(e,10)}),era:Xe({matchPatterns:Km,defaultMatchWidth:"wide",parsePatterns:Gm,defaultParseWidth:"any"}),quarter:Xe({matchPatterns:Um,defaultMatchWidth:"wide",parsePatterns:Hm,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Xe({matchPatterns:Ym,defaultMatchWidth:"wide",parsePatterns:$m,defaultParseWidth:"any"}),day:Xe({matchPatterns:Wm,defaultMatchWidth:"wide",parsePatterns:zm,defaultParseWidth:"any"}),dayPeriod:Xe({matchPatterns:Jm,defaultMatchWidth:"any",parsePatterns:Xm,defaultParseWidth:"any"})},Qm={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},Zm={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ec={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},nc={date:cn({formats:Qm,defaultWidth:"full"}),time:cn({formats:Zm,defaultWidth:"full"}),dateTime:cn({formats:ec,defaultWidth:"full"})},ud={code:"en-GB",formatDistance:id,formatLong:nc,formatRelative:od,localize:ld,match:dd,options:{weekStartsOn:1,firstWeekContainsDate:4}},rc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},tc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},sc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ac={date:cn({formats:rc,defaultWidth:"full"}),time:cn({formats:tc,defaultWidth:"full"}),dateTime:cn({formats:sc,defaultWidth:"full"})},As={code:"en-US",formatDistance:id,formatLong:ac,formatRelative:od,localize:ld,match:dd,options:{weekStartsOn:0,firstWeekContainsDate:1}},ic={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},oc=(e,t,r)=>{let n;const s=ic[e];return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n},lc={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},dc={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},uc={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},gc={date:cn({formats:lc,defaultWidth:"full"}),time:cn({formats:dc,defaultWidth:"full"}),dateTime:cn({formats:uc,defaultWidth:"full"})},mc={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},cc=(e,t,r,n)=>mc[e],fc={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},kc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},vc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},pc={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},yc={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},bc=(e,t)=>Number(e)+".",hc={ordinalNumber:bc,era:Je({values:fc,defaultWidth:"wide"}),quarter:Je({values:kc,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Je({values:vc,defaultWidth:"wide"}),day:Je({values:pc,defaultWidth:"wide"}),dayPeriod:Je({values:yc,defaultWidth:"wide"})},Ic=/^(\d+)\.?/i,wc=/\d+/i,Ac={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},jc={any:[/^f/i,/^e/i]},Ec={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Tc={any:[/1/i,/2/i,/3/i,/4/i]},Oc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Nc={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Rc={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Pc={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},qc={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},_c={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Mc={ordinalNumber:qa({matchPattern:Ic,parsePattern:wc,valueCallback:e=>parseInt(e,10)}),era:Xe({matchPatterns:Ac,defaultMatchWidth:"wide",parsePatterns:jc,defaultParseWidth:"any"}),quarter:Xe({matchPatterns:Ec,defaultMatchWidth:"wide",parsePatterns:Tc,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Xe({matchPatterns:Oc,defaultMatchWidth:"wide",parsePatterns:Nc,defaultParseWidth:"any"}),day:Xe({matchPatterns:Rc,defaultMatchWidth:"wide",parsePatterns:Pc,defaultParseWidth:"any"}),dayPeriod:Xe({matchPatterns:qc,defaultMatchWidth:"any",parsePatterns:_c,defaultParseWidth:"any"})},gd={code:"nb",formatDistance:oc,formatLong:gc,formatRelative:cc,localize:hc,match:Mc,options:{weekStartsOn:1,firstWeekContainsDate:4}},Dc={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},Sc=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],xc=(e,t,r)=>{let n;const s=Dc[e];return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",t<13?Sc[t]:String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" sidan":n},Fc={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Vc={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Lc={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Bc={date:cn({formats:Fc,defaultWidth:"full"}),time:cn({formats:Vc,defaultWidth:"full"}),dateTime:cn({formats:Lc,defaultWidth:"full"})},Cc={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Kc=(e,t,r,n)=>Cc[e],Gc={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Uc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Hc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Yc={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},$c={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},Wc=(e,t)=>Number(e)+".",zc={ordinalNumber:Wc,era:Je({values:Gc,defaultWidth:"wide"}),quarter:Je({values:Uc,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Je({values:Hc,defaultWidth:"wide"}),day:Je({values:Yc,defaultWidth:"wide"}),dayPeriod:Je({values:$c,defaultWidth:"wide"})},Jc=/^(\d+)\.?/i,Xc=/\d+/i,Qc={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Zc={any:[/^f/i,/^e/i]},ef={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},nf={any:[/1/i,/2/i,/3/i,/4/i]},rf={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},tf={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},sf={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},af={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},of={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},lf={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},df={ordinalNumber:qa({matchPattern:Jc,parsePattern:Xc,valueCallback:e=>parseInt(e,10)}),era:Xe({matchPatterns:Qc,defaultMatchWidth:"wide",parsePatterns:Zc,defaultParseWidth:"any"}),quarter:Xe({matchPatterns:ef,defaultMatchWidth:"wide",parsePatterns:nf,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Xe({matchPatterns:rf,defaultMatchWidth:"wide",parsePatterns:tf,defaultParseWidth:"any"}),day:Xe({matchPatterns:sf,defaultMatchWidth:"wide",parsePatterns:af,defaultParseWidth:"any"}),dayPeriod:Xe({matchPatterns:of,defaultMatchWidth:"any",parsePatterns:lf,defaultParseWidth:"any"})},md={code:"nn",formatDistance:xc,formatLong:Bc,formatRelative:Kc,localize:zc,match:df,options:{weekStartsOn:1,firstWeekContainsDate:4}},uf={global:{dateLocale:gd,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},gf=c.createContext({locale:uf}),js=()=>c.useContext(gf);var mf=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const cf=c.forwardRef((e,t)=>{var r,n,s,{rootElement:a,asChild:i}=e,o=mf(e,["rootElement","asChild"]);const l=dt(!1),u=(r=js())===null||r===void 0?void 0:r.rootElement,d=(n=a??u)!==null&&n!==void 0?n:(s=globalThis==null?void 0:globalThis.document)===null||s===void 0?void 0:s.body,g=i?Mr:"div";return l?d?ss.createPortal(v.createElement(gg,{theme:l.theme,asChild:!0,hasBackground:!1,"data-color":l.color},v.createElement(g,Object.assign({ref:t,"data-aksel-portal":""},o))),d):null:d?ss.createPortal(v.createElement(g,Object.assign({ref:t,"data-aksel-portal":""},o)),d):null});function bi(e){return e.sort((t,r)=>{const n=t.compareDocumentPosition(r);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const ff=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function hi(e,t,r){let n=e+1;return r&&n>=t&&(n=0),n}function Ii(e,t,r){let n=e-1;return r&&n<0&&(n=t),n}const Gs=e=>e;class kf{constructor(){this.descendants=new Map,this.register=t=>{if(t!=null)return ff(t)?this.registerNode(t):r=>{this.registerNode(r,t)}},this.unregister=t=>{this.descendants.delete(t);const r=bi(Array.from(this.descendants.keys()));this.assignIndex(r)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=t=>{this.descendants.forEach(r=>{const n=t.indexOf(r.node);r.index=n,r.node.dataset.index=r.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((r,n)=>r.index-n.index),this.enabledValues=()=>this.values().filter(t=>!t.disabled),this.item=t=>{if(this.count()!==0)return this.values()[t]},this.enabledItem=t=>{if(this.enabledCount()!==0)return this.enabledValues()[t]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const t=this.enabledValues().length-1;return this.enabledItem(t)},this.indexOf=t=>{var r,n;return t&&(n=(r=this.descendants.get(t))===null||r===void 0?void 0:r.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=t=>t==null?-1:this.enabledValues().findIndex(r=>r.node.isSameNode(t)),this.next=(t,r=!0)=>{const n=hi(t,this.count(),r);return this.item(n)},this.nextEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const s=this.enabledIndexOf(n.node),a=hi(s,this.enabledCount(),r);return this.enabledItem(a)},this.prev=(t,r=!0)=>{const n=Ii(t,this.count()-1,r);return this.item(n)},this.prevEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const s=this.enabledIndexOf(n.node),a=Ii(s,this.enabledCount()-1,r);return this.enabledItem(a)},this.registerNode=(t,r)=>{if(!t)return;const n=this.descendants.get(t);if(n){this.descendants.set(t,Object.assign({index:n.index,node:t},r));return}const s=Array.from(this.descendants.keys()).concat(t),a=bi(s);r!=null&&r.disabled&&(r.disabled=!!r.disabled);const i=Object.assign({node:t,index:-1},r);this.descendants.set(t,i),this.assignIndex(a)}}}function vf(){const[e,t]=hs({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),r=Gs(a=>v.createElement(e,Object.assign({},a.value),a.children));function n(a){const i=t(),[o,l]=c.useState(-1),u=c.useRef(null);Rr(()=>()=>{u.current&&i.unregister(u.current)},[]),Rr(()=>{if(!u.current)return;const g=Number(u.current.dataset.index);o!==g&&!Number.isNaN(g)&&l(g)});const d=Gs(a?i.register(a):i.register);return{descendants:i,index:o,enabledIndex:i.enabledIndexOf(u.current),register:mg([d,u])}}function s(){return c.useRef(new kf).current}return[r,t,s,n]}function pf(e,t=globalThis==null?void 0:globalThis.document){const r=rt(e);c.useEffect(()=>{const n=s=>{s.key==="Escape"&&r(s)};return t.addEventListener("keydown",n,!0),()=>t.removeEventListener("keydown",n,!0)},[r,t])}const cd={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function fd(e,t,r,{discrete:n}={discrete:!1}){if(!t)return;const s=r.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});s.addEventListener(e,t,{once:!0}),n&&s?ss.flushSync(()=>s.dispatchEvent(a)):s.dispatchEvent(a)}function yf(e,t=globalThis==null?void 0:globalThis.document){const r=rt(e),n=c.useRef(!1);return c.useEffect(()=>{const s=a=>{if(a.target&&!n.current){const i={originalEvent:a};fd(cd.FOCUS_OUTSIDE,r,i)}};return t.addEventListener("focusin",s),()=>t.removeEventListener("focusin",s)},[t,r]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function bf(e,t=globalThis==null?void 0:globalThis.document){const r=rt(e),n=c.useRef(!1),s=c.useRef(()=>{});return c.useEffect(()=>{const a=o=>{function l(){fd(cd.POINTER_DOWN_OUTSIDE,r,{originalEvent:o},{discrete:!0})}o.target&&!n.current?o.pointerType==="touch"?(t.removeEventListener("click",s.current),s.current=l,t.addEventListener("click",s.current,{once:!0})):l():t.removeEventListener("click",s.current),n.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",a),t.removeEventListener("click",s.current)}},[t,r]),{onPointerDownCapture:()=>{n.current=!0}}}var hf=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const[If,wf,Af,jf]=vf();let pr=0,wi;const Ef=c.forwardRef((e,t)=>wf(!1)?v.createElement(Ai,Object.assign({ref:t},e)):v.createElement(Tf,null,v.createElement(Ai,Object.assign({ref:t},e)))),Tf=({children:e})=>{const t=Af();return v.createElement(If,{value:t},e)},Ai=c.forwardRef((e,t)=>{var r,{children:n,asChild:s,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:l,onDismiss:u,safeZone:d,disableOutsidePointerEvents:g=!1,enabled:f=!0}=e,m=hf(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,y]=c.useState({}),{register:w,index:h,descendants:A}=jf({disableOutsidePointerEvents:g,disabled:!f,forceUpdate:()=>y({})}),[I,b]=c.useState(null),j=Dr(b,w,t),p=(r=I==null?void 0:I.ownerDocument)!==null&&r!==void 0?r:globalThis==null?void 0:globalThis.document,N=c.useRef(!1),O=c.useRef(!1),R=(()=>{let T=-1;return A.enabledValues().forEach((x,B)=>{x.disableOutsidePointerEvents&&(T=B)}),{isPointerEventsEnabled:h>=T,isBodyPointerEventsDisabled:pr>0,pointerStyle:h>=T&&pr>0?"auto":void 0}})();function P(T){var _,x;if(!(d!=null&&d.anchor)&&!(d!=null&&d.dismissable)||!f)return;T.defaultPrevented||(N.current=!0,T.detail.originalEvent.type==="pointerdown"&&(O.current=!0));const B=T.target;T.detail.originalEvent.type==="pointerdown"?(!((_=d==null?void 0:d.anchor)===null||_===void 0)&&_.contains(B)||B===(d==null?void 0:d.anchor))&&T.preventDefault():!(B instanceof HTMLElement&&![d==null?void 0:d.anchor,d==null?void 0:d.dismissable].some(L=>L==null?void 0:L.contains(B))&&!B.contains((x=d==null?void 0:d.dismissable)!==null&&x!==void 0?x:null))&&T.preventDefault(),T.detail.originalEvent.type==="focusin"&&O.current&&T.preventDefault(),O.current=!1,N.current=!1}const D=bf(T=>{!R.isPointerEventsEnabled||!f||(i==null||i(T),l==null||l(T),d&&P(T),!T.defaultPrevented&&u&&u())},p),F=yf(T=>{f&&(o==null||o(T),l==null||l(T),d&&P(T),!T.defaultPrevented&&u&&u())},p);pf(T=>{!f||!(h===A.enabledCount()-1)||(a==null||a(T),!T.defaultPrevented&&u&&(T.preventDefault(),u()))},p),c.useEffect(()=>{if(!(!I||!f||!g))return pr===0&&(wi=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),pr++,()=>{pr===1&&(p.body.style.pointerEvents=wi),pr--}},[I,p,g,A,f]),c.useEffect(()=>()=>A.values().forEach(T=>T.forceUpdate()),[A,I]);const M=s?Mr:"div";return v.createElement(M,Object.assign({ref:j},m,{onFocusCapture:F.onFocusCapture,onBlurCapture:F.onBlurCapture,onPointerDownCapture:D.onPointerDownCapture,style:Object.assign({pointerEvents:R.pointerStyle},m.style)}),n)}),Pr=Math.min,ir=Math.max,as=Math.round,Ot=Math.floor,Rn=e=>({x:e,y:e}),Of={left:"right",right:"left",bottom:"top",top:"bottom"},Nf={start:"end",end:"start"};function ua(e,t,r){return ir(e,Pr(t,r))}function mt(e,t){return typeof e=="function"?e(t):e}function or(e){return e.split("-")[0]}function ct(e){return e.split("-")[1]}function kd(e){return e==="x"?"y":"x"}function _a(e){return e==="y"?"height":"width"}function qr(e){return["top","bottom"].includes(or(e))?"y":"x"}function Ma(e){return kd(qr(e))}function Rf(e,t,r){r===void 0&&(r=!1);const n=ct(e),s=Ma(e),a=_a(s);let i=s==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(i=is(i)),[i,is(i)]}function Pf(e){const t=is(e);return[ga(e),t,ga(t)]}function ga(e){return e.replace(/start|end/g,t=>Nf[t])}function qf(e,t,r){const n=["left","right"],s=["right","left"],a=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return r?t?s:n:t?n:s;case"left":case"right":return t?a:i;default:return[]}}function _f(e,t,r,n){const s=ct(e);let a=qf(or(e),r==="start",n);return s&&(a=a.map(i=>i+"-"+s),t&&(a=a.concat(a.map(ga)))),a}function is(e){return e.replace(/left|right|bottom|top/g,t=>Of[t])}function Mf(e){return{top:0,right:0,bottom:0,left:0,...e}}function vd(e){return typeof e!="number"?Mf(e):{top:e,right:e,bottom:e,left:e}}function os(e){const{x:t,y:r,width:n,height:s}=e;return{width:n,height:s,top:r,left:t,right:t+n,bottom:r+s,x:t,y:r}}function ji(e,t,r){let{reference:n,floating:s}=e;const a=qr(t),i=Ma(t),o=_a(i),l=or(t),u=a==="y",d=n.x+n.width/2-s.width/2,g=n.y+n.height/2-s.height/2,f=n[o]/2-s[o]/2;let m;switch(l){case"top":m={x:d,y:n.y-s.height};break;case"bottom":m={x:d,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:g};break;case"left":m={x:n.x-s.width,y:g};break;default:m={x:n.x,y:n.y}}switch(ct(t)){case"start":m[i]-=f*(r&&u?-1:1);break;case"end":m[i]+=f*(r&&u?-1:1);break}return m}const Df=async(e,t,r)=>{const{placement:n="bottom",strategy:s="absolute",middleware:a=[],platform:i}=r,o=a.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(t));let u=await i.getElementRects({reference:e,floating:t,strategy:s}),{x:d,y:g}=ji(u,n,l),f=n,m={},y=0;for(let w=0;w<o.length;w++){const{name:h,fn:A}=o[w],{x:I,y:b,data:j,reset:p}=await A({x:d,y:g,initialPlacement:n,placement:f,strategy:s,middlewareData:m,rects:u,platform:i,elements:{reference:e,floating:t}});d=I??d,g=b??g,m={...m,[h]:{...m[h],...j}},p&&y<=50&&(y++,typeof p=="object"&&(p.placement&&(f=p.placement),p.rects&&(u=p.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:s}):p.rects),{x:d,y:g}=ji(u,f,l)),w=-1)}return{x:d,y:g,placement:f,strategy:s,middlewareData:m}};async function pd(e,t){var r;t===void 0&&(t={});const{x:n,y:s,platform:a,rects:i,elements:o,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:g="floating",altBoundary:f=!1,padding:m=0}=mt(t,e),y=vd(m),h=o[f?g==="floating"?"reference":"floating":g],A=os(await a.getClippingRect({element:(r=await(a.isElement==null?void 0:a.isElement(h)))==null||r?h:h.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(o.floating)),boundary:u,rootBoundary:d,strategy:l})),I=g==="floating"?{x:n,y:s,width:i.floating.width,height:i.floating.height}:i.reference,b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(o.floating)),j=await(a.isElement==null?void 0:a.isElement(b))?await(a.getScale==null?void 0:a.getScale(b))||{x:1,y:1}:{x:1,y:1},p=os(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:I,offsetParent:b,strategy:l}):I);return{top:(A.top-p.top+y.top)/j.y,bottom:(p.bottom-A.bottom+y.bottom)/j.y,left:(A.left-p.left+y.left)/j.x,right:(p.right-A.right+y.right)/j.x}}const Sf=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:s,rects:a,platform:i,elements:o,middlewareData:l}=t,{element:u,padding:d=0}=mt(e,t)||{};if(u==null)return{};const g=vd(d),f={x:r,y:n},m=Ma(s),y=_a(m),w=await i.getDimensions(u),h=m==="y",A=h?"top":"left",I=h?"bottom":"right",b=h?"clientHeight":"clientWidth",j=a.reference[y]+a.reference[m]-f[m]-a.floating[y],p=f[m]-a.reference[m],N=await(i.getOffsetParent==null?void 0:i.getOffsetParent(u));let O=N?N[b]:0;(!O||!await(i.isElement==null?void 0:i.isElement(N)))&&(O=o.floating[b]||a.floating[y]);const R=j/2-p/2,P=O/2-w[y]/2-1,D=Pr(g[A],P),F=Pr(g[I],P),M=D,T=O-w[y]-F,_=O/2-w[y]/2+R,x=ua(M,_,T),B=!l.arrow&&ct(s)!=null&&_!==x&&a.reference[y]/2-(_<M?D:F)-w[y]/2<0,C=B?_<M?_-M:_-T:0;return{[m]:f[m]+C,data:{[m]:x,centerOffset:_-x-C,...B&&{alignmentOffset:C}},reset:B}}}),xf=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:s,middlewareData:a,rects:i,initialPlacement:o,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:g=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...h}=mt(e,t);if((r=a.arrow)!=null&&r.alignmentOffset)return{};const A=or(s),I=qr(o),b=or(o)===o,j=await(l.isRTL==null?void 0:l.isRTL(u.floating)),p=f||(b||!w?[is(o)]:Pf(o)),N=y!=="none";!f&&N&&p.push(..._f(o,w,y,j));const O=[o,...p],R=await pd(t,h),P=[];let D=((n=a.flip)==null?void 0:n.overflows)||[];if(d&&P.push(R[A]),g){const _=Rf(s,i,j);P.push(R[_[0]],R[_[1]])}if(D=[...D,{placement:s,overflows:P}],!P.every(_=>_<=0)){var F,M;const _=(((F=a.flip)==null?void 0:F.index)||0)+1,x=O[_];if(x)return{data:{index:_,overflows:D},reset:{placement:x}};let B=(M=D.filter(C=>C.overflows[0]<=0).sort((C,L)=>C.overflows[1]-L.overflows[1])[0])==null?void 0:M.placement;if(!B)switch(m){case"bestFit":{var T;const C=(T=D.filter(L=>{if(N){const V=qr(L.placement);return V===I||V==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(V=>V>0).reduce((V,H)=>V+H,0)]).sort((L,V)=>L[1]-V[1])[0])==null?void 0:T[0];C&&(B=C);break}case"initialPlacement":B=o;break}if(s!==B)return{reset:{placement:B}}}return{}}}};async function Ff(e,t){const{placement:r,platform:n,elements:s}=e,a=await(n.isRTL==null?void 0:n.isRTL(s.floating)),i=or(r),o=ct(r),l=qr(r)==="y",u=["left","top"].includes(i)?-1:1,d=a&&l?-1:1,g=mt(t,e);let{mainAxis:f,crossAxis:m,alignmentAxis:y}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return o&&typeof y=="number"&&(m=o==="end"?y*-1:y),l?{x:m*d,y:f*u}:{x:f*u,y:m*d}}const Vf=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:s,y:a,placement:i,middlewareData:o}=t,l=await Ff(t,e);return i===((r=o.offset)==null?void 0:r.placement)&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:s+l.x,y:a+l.y,data:{...l,placement:i}}}}},Lf=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:s}=t,{mainAxis:a=!0,crossAxis:i=!1,limiter:o={fn:h=>{let{x:A,y:I}=h;return{x:A,y:I}}},...l}=mt(e,t),u={x:r,y:n},d=await pd(t,l),g=qr(or(s)),f=kd(g);let m=u[f],y=u[g];if(a){const h=f==="y"?"top":"left",A=f==="y"?"bottom":"right",I=m+d[h],b=m-d[A];m=ua(I,m,b)}if(i){const h=g==="y"?"top":"left",A=g==="y"?"bottom":"right",I=y+d[h],b=y-d[A];y=ua(I,y,b)}const w=o.fn({...t,[f]:m,[g]:y});return{...w,data:{x:w.x-r,y:w.y-n,enabled:{[f]:a,[g]:i}}}}}};function Es(){return typeof window<"u"}function Fr(e){return yd(e)?(e.nodeName||"").toLowerCase():"#document"}function rn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function qn(e){var t;return(t=(yd(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function yd(e){return Es()?e instanceof Node||e instanceof rn(e).Node:!1}function Ie(e){return Es()?e instanceof Element||e instanceof rn(e).Element:!1}function on(e){return Es()?e instanceof HTMLElement||e instanceof rn(e).HTMLElement:!1}function ls(e){return!Es()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof rn(e).ShadowRoot}function ft(e){const{overflow:t,overflowX:r,overflowY:n,display:s}=fn(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(s)}function Bf(e){return["table","td","th"].includes(Fr(e))}function Ts(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Da(e){const t=Os(),r=Ie(e)?fn(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function Cf(e){let t=Cn(e);for(;on(t)&&!Vn(t);){if(Da(t))return t;if(Ts(t))return null;t=Cn(t)}return null}function Os(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Vn(e){return["html","body","#document"].includes(Fr(e))}function fn(e){return rn(e).getComputedStyle(e)}function Ns(e){return Ie(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Cn(e){if(Fr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ls(e)&&e.host||qn(e);return ls(t)?t.host:t}function bd(e){const t=Cn(e);return Vn(t)?e.ownerDocument?e.ownerDocument.body:e.body:on(t)&&ft(t)?t:bd(t)}function Xn(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const s=bd(e),a=s===((n=e.ownerDocument)==null?void 0:n.body),i=rn(s);if(a){const o=ma(i);return t.concat(i,i.visualViewport||[],ft(s)?s:[],o&&r?Xn(o):[])}return t.concat(s,Xn(s,[],r))}function ma(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function hd(e){const t=fn(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const s=on(e),a=s?e.offsetWidth:r,i=s?e.offsetHeight:n,o=as(r)!==a||as(n)!==i;return o&&(r=a,n=i),{width:r,height:n,$:o}}function Sa(e){return Ie(e)?e:e.contextElement}function jr(e){const t=Sa(e);if(!on(t))return Rn(1);const r=t.getBoundingClientRect(),{width:n,height:s,$:a}=hd(t);let i=(a?as(r.width):r.width)/n,o=(a?as(r.height):r.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!o||!Number.isFinite(o))&&(o=1),{x:i,y:o}}const Kf=Rn(0);function Id(e){const t=rn(e);return!Os()||!t.visualViewport?Kf:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Gf(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==rn(e)?!1:t}function lr(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),a=Sa(e);let i=Rn(1);t&&(n?Ie(n)&&(i=jr(n)):i=jr(e));const o=Gf(a,r,n)?Id(a):Rn(0);let l=(s.left+o.x)/i.x,u=(s.top+o.y)/i.y,d=s.width/i.x,g=s.height/i.y;if(a){const f=rn(a),m=n&&Ie(n)?rn(n):n;let y=f,w=ma(y);for(;w&&n&&m!==y;){const h=jr(w),A=w.getBoundingClientRect(),I=fn(w),b=A.left+(w.clientLeft+parseFloat(I.paddingLeft))*h.x,j=A.top+(w.clientTop+parseFloat(I.paddingTop))*h.y;l*=h.x,u*=h.y,d*=h.x,g*=h.y,l+=b,u+=j,y=rn(w),w=ma(y)}}return os({width:d,height:g,x:l,y:u})}function xa(e,t){const r=Ns(e).scrollLeft;return t?t.left+r:lr(qn(e)).left+r}function wd(e,t,r){r===void 0&&(r=!1);const n=e.getBoundingClientRect(),s=n.left+t.scrollLeft-(r?0:xa(e,n)),a=n.top+t.scrollTop;return{x:s,y:a}}function Uf(e){let{elements:t,rect:r,offsetParent:n,strategy:s}=e;const a=s==="fixed",i=qn(n),o=t?Ts(t.floating):!1;if(n===i||o&&a)return r;let l={scrollLeft:0,scrollTop:0},u=Rn(1);const d=Rn(0),g=on(n);if((g||!g&&!a)&&((Fr(n)!=="body"||ft(i))&&(l=Ns(n)),on(n))){const m=lr(n);u=jr(n),d.x=m.x+n.clientLeft,d.y=m.y+n.clientTop}const f=i&&!g&&!a?wd(i,l,!0):Rn(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+d.x+f.x,y:r.y*u.y-l.scrollTop*u.y+d.y+f.y}}function Hf(e){return Array.from(e.getClientRects())}function Yf(e){const t=qn(e),r=Ns(e),n=e.ownerDocument.body,s=ir(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),a=ir(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let i=-r.scrollLeft+xa(e);const o=-r.scrollTop;return fn(n).direction==="rtl"&&(i+=ir(t.clientWidth,n.clientWidth)-s),{width:s,height:a,x:i,y:o}}function $f(e,t){const r=rn(e),n=qn(e),s=r.visualViewport;let a=n.clientWidth,i=n.clientHeight,o=0,l=0;if(s){a=s.width,i=s.height;const u=Os();(!u||u&&t==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:a,height:i,x:o,y:l}}function Wf(e,t){const r=lr(e,!0,t==="fixed"),n=r.top+e.clientTop,s=r.left+e.clientLeft,a=on(e)?jr(e):Rn(1),i=e.clientWidth*a.x,o=e.clientHeight*a.y,l=s*a.x,u=n*a.y;return{width:i,height:o,x:l,y:u}}function Ei(e,t,r){let n;if(t==="viewport")n=$f(e,r);else if(t==="document")n=Yf(qn(e));else if(Ie(t))n=Wf(t,r);else{const s=Id(e);n={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return os(n)}function Ad(e,t){const r=Cn(e);return r===t||!Ie(r)||Vn(r)?!1:fn(r).position==="fixed"||Ad(r,t)}function zf(e,t){const r=t.get(e);if(r)return r;let n=Xn(e,[],!1).filter(o=>Ie(o)&&Fr(o)!=="body"),s=null;const a=fn(e).position==="fixed";let i=a?Cn(e):e;for(;Ie(i)&&!Vn(i);){const o=fn(i),l=Da(i);!l&&o.position==="fixed"&&(s=null),(a?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ft(i)&&!l&&Ad(e,i))?n=n.filter(d=>d!==i):s=o,i=Cn(i)}return t.set(e,n),n}function Jf(e){let{element:t,boundary:r,rootBoundary:n,strategy:s}=e;const i=[...r==="clippingAncestors"?Ts(t)?[]:zf(t,this._c):[].concat(r),n],o=i[0],l=i.reduce((u,d)=>{const g=Ei(t,d,s);return u.top=ir(g.top,u.top),u.right=Pr(g.right,u.right),u.bottom=Pr(g.bottom,u.bottom),u.left=ir(g.left,u.left),u},Ei(t,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Xf(e){const{width:t,height:r}=hd(e);return{width:t,height:r}}function Qf(e,t,r){const n=on(t),s=qn(t),a=r==="fixed",i=lr(e,!0,a,t);let o={scrollLeft:0,scrollTop:0};const l=Rn(0);if(n||!n&&!a)if((Fr(t)!=="body"||ft(s))&&(o=Ns(t)),n){const f=lr(t,!0,a,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else s&&(l.x=xa(s));const u=s&&!n&&!a?wd(s,o):Rn(0),d=i.left+o.scrollLeft-l.x-u.x,g=i.top+o.scrollTop-l.y-u.y;return{x:d,y:g,width:i.width,height:i.height}}function Us(e){return fn(e).position==="static"}function Ti(e,t){if(!on(e)||fn(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return qn(e)===r&&(r=r.ownerDocument.body),r}function jd(e,t){const r=rn(e);if(Ts(e))return r;if(!on(e)){let s=Cn(e);for(;s&&!Vn(s);){if(Ie(s)&&!Us(s))return s;s=Cn(s)}return r}let n=Ti(e,t);for(;n&&Bf(n)&&Us(n);)n=Ti(n,t);return n&&Vn(n)&&Us(n)&&!Da(n)?r:n||Cf(e)||r}const Zf=async function(e){const t=this.getOffsetParent||jd,r=this.getDimensions,n=await r(e.floating);return{reference:Qf(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function ek(e){return fn(e).direction==="rtl"}const nk={convertOffsetParentRelativeRectToViewportRelativeRect:Uf,getDocumentElement:qn,getClippingRect:Jf,getOffsetParent:jd,getElementRects:Zf,getClientRects:Hf,getDimensions:Xf,getScale:jr,isElement:Ie,isRTL:ek};function Ed(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function rk(e,t){let r=null,n;const s=qn(e);function a(){var o;clearTimeout(n),(o=r)==null||o.disconnect(),r=null}function i(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),a();const u=e.getBoundingClientRect(),{left:d,top:g,width:f,height:m}=u;if(o||t(),!f||!m)return;const y=Ot(g),w=Ot(s.clientWidth-(d+f)),h=Ot(s.clientHeight-(g+m)),A=Ot(d),b={rootMargin:-y+"px "+-w+"px "+-h+"px "+-A+"px",threshold:ir(0,Pr(1,l))||1};let j=!0;function p(N){const O=N[0].intersectionRatio;if(O!==l){if(!j)return i();O?i(!1,O):n=setTimeout(()=>{i(!1,1e-7)},1e3)}O===1&&!Ed(u,e.getBoundingClientRect())&&i(),j=!1}try{r=new IntersectionObserver(p,{...b,root:s.ownerDocument})}catch{r=new IntersectionObserver(p,b)}r.observe(e)}return i(!0),a}function ca(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,u=Sa(e),d=s||a?[...u?Xn(u):[],...Xn(t)]:[];d.forEach(A=>{s&&A.addEventListener("scroll",r,{passive:!0}),a&&A.addEventListener("resize",r)});const g=u&&o?rk(u,r):null;let f=-1,m=null;i&&(m=new ResizeObserver(A=>{let[I]=A;I&&I.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var b;(b=m)==null||b.observe(t)})),r()}),u&&!l&&m.observe(u),m.observe(t));let y,w=l?lr(e):null;l&&h();function h(){const A=lr(e);w&&!Ed(w,A)&&r(),w=A,y=requestAnimationFrame(h)}return r(),()=>{var A;d.forEach(I=>{s&&I.removeEventListener("scroll",r),a&&I.removeEventListener("resize",r)}),g==null||g(),(A=m)==null||A.disconnect(),m=null,l&&cancelAnimationFrame(y)}}const tk=Vf,sk=Lf,ak=xf,Oi=Sf,ik=(e,t,r)=>{const n=new Map,s={platform:nk,...r},a={...s.platform,_c:n};return Df(e,t,{...s,platform:a})};var rs=typeof document<"u"?c.useLayoutEffect:c.useEffect;function ds(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,s;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!ds(e[n],t[n]))return!1;return!0}if(s=Object.keys(e),r=s.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,s[n]))return!1;for(n=r;n--!==0;){const a=s[n];if(!(a==="_owner"&&e.$$typeof)&&!ds(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function Td(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ni(e,t){const r=Td(e);return Math.round(t*r)/r}function Hs(e){const t=c.useRef(e);return rs(()=>{t.current=e}),t}function ok(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:s,elements:{reference:a,floating:i}={},transform:o=!0,whileElementsMounted:l,open:u}=e,[d,g]=c.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[f,m]=c.useState(n);ds(f,n)||m(n);const[y,w]=c.useState(null),[h,A]=c.useState(null),I=c.useCallback(L=>{L!==N.current&&(N.current=L,w(L))},[]),b=c.useCallback(L=>{L!==O.current&&(O.current=L,A(L))},[]),j=a||y,p=i||h,N=c.useRef(null),O=c.useRef(null),R=c.useRef(d),P=l!=null,D=Hs(l),F=Hs(s),M=Hs(u),T=c.useCallback(()=>{if(!N.current||!O.current)return;const L={placement:t,strategy:r,middleware:f};F.current&&(L.platform=F.current),ik(N.current,O.current,L).then(V=>{const H={...V,isPositioned:M.current!==!1};_.current&&!ds(R.current,H)&&(R.current=H,Ra.flushSync(()=>{g(H)}))})},[f,t,r,F,M]);rs(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,g(L=>({...L,isPositioned:!1})))},[u]);const _=c.useRef(!1);rs(()=>(_.current=!0,()=>{_.current=!1}),[]),rs(()=>{if(j&&(N.current=j),p&&(O.current=p),j&&p){if(D.current)return D.current(j,p,T);T()}},[j,p,T,D,P]);const x=c.useMemo(()=>({reference:N,floating:O,setReference:I,setFloating:b}),[I,b]),B=c.useMemo(()=>({reference:j,floating:p}),[j,p]),C=c.useMemo(()=>{const L={position:r,left:0,top:0};if(!B.floating)return L;const V=Ni(B.floating,d.x),H=Ni(B.floating,d.y);return o?{...L,transform:"translate("+V+"px, "+H+"px)",...Td(B.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:V,top:H}},[r,o,B.floating,d.x,d.y]);return c.useMemo(()=>({...d,update:T,refs:x,elements:B,floatingStyles:C}),[d,T,x,B,C])}const lk=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:s}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?Oi({element:n.current,padding:s}).fn(r):{}:n?Oi({element:n,padding:s}).fn(r):{}}}},Od=(e,t)=>({...tk(e),options:[e,t]}),Nd=(e,t)=>({...sk(e),options:[e,t]}),Rd=(e,t)=>({...ak(e),options:[e,t]}),Pd=(e,t)=>({...lk(e),options:[e,t]}),Ri=/(\w+)/g;function dk(e,t){const r=Array.isArray(e)?e:uk(e);for(const n of t){if(!n)continue;let s=n;for(let a=0;a<r.length;a++){const i=s[r[a]];i!==void 0&&(s=i)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function uk(e){const t=[];let r=Ri.exec(e);for(;r;){const[,n,s]=r;t.push(n||s),r=Ri.exec(e)}return t}const gk=/{[^}]*}/g;function Gn(e,...t){const r=js(),n=r.translations||[],s=[...t,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],r.locale[e]];return(i,o)=>{const l=dk(i,s);return o?l.replace(gk,u=>{const d=u.substring(1,u.length-1);if(o[d]===void 0){const g=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${g}'`)}return o[d]}):l}}function qd(){const e=js(),t=e.translations||[],r=Array.isArray(t)?t.map(n=>n.global):[t.global];r.push(e.locale.global);for(const n of r)if(n!=null&&n.dateLocale)return n.dateLocale;throw new Error("dateLocale not found.")}var mk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ck=c.forwardRef((e,t)=>{var{className:r,size:n="medium",title:s,transparent:a=!1,variant:i="neutral",id:o,"data-color":l}=e,u=mk(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:d}=te(),g=In(),f=Gn("Loader");return v.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${g}`,ref:t,className:d("navds-loader",r,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":a}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":l??fk(i)},Qe(u,["children"]),{"data-variant":i}),v.createElement("title",{id:o??`loader-${g}`},s||f("title")),v.createElement("circle",{className:d("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),v.createElement("circle",{className:d("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function fk(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var kk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Pe=c.forwardRef((e,t)=>{var{as:r="button",variant:n="primary",className:s,children:a,size:i="medium",loading:o=!1,disabled:l,icon:u,iconPosition:d="left",onKeyUp:g,"data-color":f}=e,m=kk(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:y}=te(),w=l||o?Qe(m,["href"]):m,h=A=>{A.key===" "&&!l&&!o&&A.currentTarget.click()};return v.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":f??vk(n),"data-variant":pk(n)},w,{ref:t,onKeyUp:Ar(g,h),className:y(s,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!u&&!a,"navds-button--disabled":l??o}),disabled:l??o?!0:void 0}),u&&d==="left"&&v.createElement("span",{className:y("navds-button__icon")},u),o&&v.createElement(ck,{size:i}),a&&v.createElement(Ae,{as:"span",size:i==="medium"?"medium":"small"},a),u&&d==="right"&&v.createElement("span",{className:y("navds-button__icon")},u))});function vk(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function pk(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var yk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const bk={error:hm,warning:Pa,info:Zg,success:Yg},kt=c.forwardRef((e,t)=>{var{children:r,className:n,variant:s,size:a="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:l=!1,closeButton:u=!1,onClose:d}=e,g=yk(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:f}=te(),m=Gn("Alert"),y=bk[s];return v.createElement("div",Object.assign({},g,{"data-color":hk(s),"data-variant":s,ref:t,className:f(n,"navds-alert",`navds-alert--${s}`,`navds-alert--${a}`,{"navds-alert--full-width":i,"navds-alert--inline":l,"navds-alert--close-button":u})}),v.createElement(y,{title:m(s),className:f("navds-alert__icon")}),v.createElement(Zl,{as:"div",size:a,className:f("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},r),u&&!l&&v.createElement("div",{className:f("navds-alert__button-wrapper")},v.createElement(Pe,{className:f("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:v.createElement(sd,{title:["error","warning"].includes(s)?m("closeAlert"):m("closeMessage")})})))});function hk(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function vt(e,t,r){const n=oe(e,r==null?void 0:r.in);return isNaN(t)?ve((r==null?void 0:r.in)||e,NaN):(t&&n.setDate(n.getDate()+t),n)}function Fa(e,t,r){const n=oe(e,r==null?void 0:r.in);if(isNaN(t))return ve(e,NaN);if(!t)return n;const s=n.getDate(),a=ve(e,n.getTime());a.setMonth(n.getMonth()+t+1,0);const i=a.getDate();return s>=i?a:(n.setFullYear(a.getFullYear(),a.getMonth(),s),n)}function us(e,t){const r=oe(e,t==null?void 0:t.in).getDay();return r===0||r===6}function dr(e,t){return Bn(e,{...t,weekStartsOn:1})}function _d(e,t){const r=oe(e,t==null?void 0:t.in),n=r.getFullYear(),s=ve(r,0);s.setFullYear(n+1,0,4),s.setHours(0,0,0,0);const a=dr(s),i=ve(r,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const o=dr(i);return r.getTime()>=a.getTime()?n+1:r.getTime()>=o.getTime()?n:n-1}function gs(e){const t=oe(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function Kn(e,t){const r=oe(e,t==null?void 0:t.in);return r.setHours(0,0,0,0),r}function zn(e,t,r){const[n,s]=xr(r==null?void 0:r.in,e,t),a=Kn(n),i=Kn(s),o=+a-gs(a),l=+i-gs(i);return Math.round((o-l)/Tm)}function Ik(e,t){const r=_d(e,t),n=ve(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),dr(n)}function wk(e,t,r){return vt(e,t*7,r)}function Va(e,t,r){return Fa(e,t*12,r)}function Ak(e,t){let r,n=t==null?void 0:t.in;return e.forEach(s=>{!n&&typeof s=="object"&&(n=ve.bind(null,s));const a=oe(s,n);(!r||r<a||isNaN(+a))&&(r=a)}),ve(n,r||NaN)}function jk(e,t){let r,n=t==null?void 0:t.in;return e.forEach(s=>{!n&&typeof s=="object"&&(n=ve.bind(null,s));const a=oe(s,n);(!r||r>a||isNaN(+a))&&(r=a)}),ve(n,r||NaN)}function La(e,t,r){const[n,s]=xr(r==null?void 0:r.in,e,t);return+Kn(n)==+Kn(s)}function Md(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Ek(e){return!(!Md(e)&&typeof e!="number"||isNaN(+oe(e)))}function Tk(e,t,r){const[n,s]=xr(r==null?void 0:r.in,e,t),a=n.getFullYear()-s.getFullYear(),i=n.getMonth()-s.getMonth();return a*12+i}function Dd(e,t){const r=oe(e,t==null?void 0:t.in),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function Ok(e,t){const[r,n]=xr(e,t.start,t.end);return{start:r,end:n}}function Sd(e,t){const{start:r,end:n}=Ok(t==null?void 0:t.in,e);let s=+r>+n;const a=s?+r:+n,i=s?n:r;i.setHours(0,0,0,0),i.setDate(1);let o=1;const l=[];for(;+i<=a;)l.push(ve(r,i)),i.setMonth(i.getMonth()+o);return s?l.reverse():l}function ur(e,t){const r=oe(e,t==null?void 0:t.in);return r.setDate(1),r.setHours(0,0,0,0),r}function Rs(e,t){const r=oe(e,t==null?void 0:t.in),n=r.getFullYear();return r.setFullYear(n+1,0,0),r.setHours(23,59,59,999),r}function pt(e,t){const r=oe(e,t==null?void 0:t.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}function xd(e,t){var o,l,u,d;const r=cr(),n=(t==null?void 0:t.weekStartsOn)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,s=oe(e,t==null?void 0:t.in),a=s.getDay(),i=(a<n?-7:0)+6-(a-n);return s.setDate(s.getDate()+i),s.setHours(23,59,59,999),s}function Nk(e,t){return xd(e,{...t,weekStartsOn:1})}function Rk(e,t){const r=oe(e,t==null?void 0:t.in);return zn(r,pt(r))+1}function Ba(e,t){const r=oe(e,t==null?void 0:t.in),n=+dr(r)-+Ik(r);return Math.round(n/ad)+1}function Ca(e,t){var d,g,f,m;const r=oe(e,t==null?void 0:t.in),n=r.getFullYear(),s=cr(),a=(t==null?void 0:t.firstWeekContainsDate)??((g=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??s.firstWeekContainsDate??((m=(f=s.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,i=ve((t==null?void 0:t.in)||e,0);i.setFullYear(n+1,0,a),i.setHours(0,0,0,0);const o=Bn(i,t),l=ve((t==null?void 0:t.in)||e,0);l.setFullYear(n,0,a),l.setHours(0,0,0,0);const u=Bn(l,t);return+r>=+o?n+1:+r>=+u?n:n-1}function Pk(e,t){var o,l,u,d;const r=cr(),n=(t==null?void 0:t.firstWeekContainsDate)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??r.firstWeekContainsDate??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,s=Ca(e,t),a=ve((t==null?void 0:t.in)||e,0);return a.setFullYear(s,0,n),a.setHours(0,0,0,0),Bn(a,t)}function Ka(e,t){const r=oe(e,t==null?void 0:t.in),n=+Bn(r,t)-+Pk(r,t);return Math.round(n/ad)+1}function ke(e,t){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}const $n={y(e,t){const r=e.getFullYear(),n=r>0?r:1-r;return ke(t==="yy"?n%100:n,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):ke(r+1,2)},d(e,t){return ke(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return ke(e.getHours()%12||12,t.length)},H(e,t){return ke(e.getHours(),t.length)},m(e,t){return ke(e.getMinutes(),t.length)},s(e,t){return ke(e.getSeconds(),t.length)},S(e,t){const r=t.length,n=e.getMilliseconds(),s=Math.trunc(n*Math.pow(10,r-3));return ke(s,t.length)}},yr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Pi={G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const n=e.getFullYear(),s=n>0?n:1-n;return r.ordinalNumber(s,{unit:"year"})}return $n.y(e,t)},Y:function(e,t,r,n){const s=Ca(e,n),a=s>0?s:1-s;if(t==="YY"){const i=a%100;return ke(i,2)}return t==="Yo"?r.ordinalNumber(a,{unit:"year"}):ke(a,t.length)},R:function(e,t){const r=_d(e);return ke(r,t.length)},u:function(e,t){const r=e.getFullYear();return ke(r,t.length)},Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return ke(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return ke(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return $n.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return ke(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){const s=Ka(e,n);return t==="wo"?r.ordinalNumber(s,{unit:"week"}):ke(s,t.length)},I:function(e,t,r){const n=Ba(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):ke(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):$n.d(e,t)},D:function(e,t,r){const n=Rk(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):ke(n,t.length)},E:function(e,t,r){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){const s=e.getDay(),a=(s-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return ke(a,2);case"eo":return r.ordinalNumber(a,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){const s=e.getDay(),a=(s-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return ke(a,t.length);case"co":return r.ordinalNumber(a,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,t,r){const n=e.getDay(),s=n===0?7:n;switch(t){case"i":return String(s);case"ii":return ke(s,t.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){const s=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,t,r){const n=e.getHours();let s;switch(n===12?s=yr.noon:n===0?s=yr.midnight:s=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,t,r){const n=e.getHours();let s;switch(n>=17?s=yr.evening:n>=12?s=yr.afternoon:n>=4?s=yr.morning:s=yr.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return $n.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):$n.H(e,t)},K:function(e,t,r){const n=e.getHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):ke(n,t.length)},k:function(e,t,r){let n=e.getHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):ke(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):$n.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):$n.s(e,t)},S:function(e,t){return $n.S(e,t)},X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return _i(n);case"XXXX":case"XX":return tr(n);case"XXXXX":case"XXX":default:return tr(n,":")}},x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"x":return _i(n);case"xxxx":case"xx":return tr(n);case"xxxxx":case"xxx":default:return tr(n,":")}},O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+qi(n,":");case"OOOO":default:return"GMT"+tr(n,":")}},z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+qi(n,":");case"zzzz":default:return"GMT"+tr(n,":")}},t:function(e,t,r){const n=Math.trunc(+e/1e3);return ke(n,t.length)},T:function(e,t,r){return ke(+e,t.length)}};function qi(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),s=Math.trunc(n/60),a=n%60;return a===0?r+String(s):r+String(s)+t+ke(a,2)}function _i(e,t){return e%60===0?(e>0?"-":"+")+ke(Math.abs(e)/60,2):tr(e,t)}function tr(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),s=ke(Math.trunc(n/60),2),a=ke(n%60,2);return r+s+t+a}const Mi=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Fd=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},qk=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],s=r[2];if(!s)return Mi(e,t);let a;switch(n){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",Mi(n,t)).replace("{{time}}",Fd(s,t))},fa={p:Fd,P:qk},_k=/^D+$/,Mk=/^Y+$/,Dk=["D","DD","YY","YYYY"];function Vd(e){return _k.test(e)}function Ld(e){return Mk.test(e)}function ka(e,t,r){const n=Sk(e,t,r);if(console.warn(n),Dk.includes(e))throw new RangeError(n)}function Sk(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const xk=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Fk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Vk=/^'([^]*?)'?$/,Lk=/''/g,Bk=/[a-zA-Z]/;function gr(e,t,r){var d,g,f,m,y,w,h,A;const n=cr(),s=(r==null?void 0:r.locale)??n.locale??As,a=(r==null?void 0:r.firstWeekContainsDate)??((g=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(f=n.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,i=(r==null?void 0:r.weekStartsOn)??((w=(y=r==null?void 0:r.locale)==null?void 0:y.options)==null?void 0:w.weekStartsOn)??n.weekStartsOn??((A=(h=n.locale)==null?void 0:h.options)==null?void 0:A.weekStartsOn)??0,o=oe(e,r==null?void 0:r.in);if(!Ek(o))throw new RangeError("Invalid time value");let l=t.match(Fk).map(I=>{const b=I[0];if(b==="p"||b==="P"){const j=fa[b];return j(I,s.formatLong)}return I}).join("").match(xk).map(I=>{if(I==="''")return{isToken:!1,value:"'"};const b=I[0];if(b==="'")return{isToken:!1,value:Ck(I)};if(Pi[b])return{isToken:!0,value:I};if(b.match(Bk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return{isToken:!1,value:I}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const u={firstWeekContainsDate:a,weekStartsOn:i,locale:s};return l.map(I=>{if(!I.isToken)return I.value;const b=I.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&Ld(b)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&Vd(b))&&ka(b,t,String(e));const j=Pi[b[0]];return j(o,b,s.localize,u)}).join("")}function Ck(e){const t=e.match(Vk);return t?t[1].replace(Lk,"'"):e}function Kk(e,t){const r=oe(e,t==null?void 0:t.in),n=r.getFullYear(),s=r.getMonth(),a=ve(r,0);return a.setFullYear(n,s+1,0),a.setHours(0,0,0,0),a.getDate()}function Gk(){return Object.assign({},cr())}function Uk(e,t){const r=oe(e,t==null?void 0:t.in).getDay();return r===0?7:r}function Ga(e,t){return oe(e,t==null?void 0:t.in).getMonth()}function Ua(e,t){return oe(e,t==null?void 0:t.in).getFullYear()}function Bd(e,t){return+oe(e)>+oe(t)}function yt(e,t){return+oe(e)<+oe(t)}function Hk(e,t){const r=Yk(t)?new t(0):ve(t,0);return r.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),r.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),r}function Yk(e){var t;return typeof e=="function"&&((t=e.prototype)==null?void 0:t.constructor)===e}const $k=10;class Cd{constructor(){z(this,"subPriority",0)}validate(t,r){return!0}}class Wk extends Cd{constructor(t,r,n,s,a){super(),this.value=t,this.validateValue=r,this.setValue=n,this.priority=s,a&&(this.subPriority=a)}validate(t,r){return this.validateValue(t,this.value,r)}set(t,r,n){return this.setValue(t,r,this.value,n)}}class zk extends Cd{constructor(r,n){super();z(this,"priority",$k);z(this,"subPriority",-1);this.context=r||(s=>ve(n,s))}set(r,n){return n.timestampIsSet?r:ve(r,Hk(r,this.context))}}class ge{run(t,r,n,s){const a=this.parse(t,r,n,s);return a?{setter:new Wk(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}validate(t,r,n){return!0}}class Jk extends ge{constructor(){super(...arguments);z(this,"priority",140);z(this,"incompatibleTokens",["R","u","t","T"])}parse(r,n,s){switch(n){case"G":case"GG":case"GGG":return s.era(r,{width:"abbreviated"})||s.era(r,{width:"narrow"});case"GGGGG":return s.era(r,{width:"narrow"});case"GGGG":default:return s.era(r,{width:"wide"})||s.era(r,{width:"abbreviated"})||s.era(r,{width:"narrow"})}}set(r,n,s){return n.era=s,r.setFullYear(s,0,1),r.setHours(0,0,0,0),r}}const _e={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},En={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Me(e,t){return e&&{value:t(e.value),rest:e.rest}}function Oe(e,t){const r=t.match(e);return r?{value:parseInt(r[0],10),rest:t.slice(r[0].length)}:null}function Tn(e,t){const r=t.match(e);if(!r)return null;if(r[0]==="Z")return{value:0,rest:t.slice(1)};const n=r[1]==="+"?1:-1,s=r[2]?parseInt(r[2],10):0,a=r[3]?parseInt(r[3],10):0,i=r[5]?parseInt(r[5],10):0;return{value:n*(s*Nm+a*Om+i*Rm),rest:t.slice(r[0].length)}}function Kd(e){return Oe(_e.anyDigitsSigned,e)}function qe(e,t){switch(e){case 1:return Oe(_e.singleDigit,t);case 2:return Oe(_e.twoDigits,t);case 3:return Oe(_e.threeDigits,t);case 4:return Oe(_e.fourDigits,t);default:return Oe(new RegExp("^\\d{1,"+e+"}"),t)}}function ms(e,t){switch(e){case 1:return Oe(_e.singleDigitSigned,t);case 2:return Oe(_e.twoDigitsSigned,t);case 3:return Oe(_e.threeDigitsSigned,t);case 4:return Oe(_e.fourDigitsSigned,t);default:return Oe(new RegExp("^-?\\d{1,"+e+"}"),t)}}function Ha(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Gd(e,t){const r=t>0,n=r?t:1-t;let s;if(n<=50)s=e||100;else{const a=n+50,i=Math.trunc(a/100)*100,o=e>=a%100;s=e+i-(o?100:0)}return r?s:1-s}function Ud(e){return e%400===0||e%4===0&&e%100!==0}class Xk extends ge{constructor(){super(...arguments);z(this,"priority",130);z(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(r,n,s){const a=i=>({year:i,isTwoDigitYear:n==="yy"});switch(n){case"y":return Me(qe(4,r),a);case"yo":return Me(s.ordinalNumber(r,{unit:"year"}),a);default:return Me(qe(n.length,r),a)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,s){const a=r.getFullYear();if(s.isTwoDigitYear){const o=Gd(s.year,a);return r.setFullYear(o,0,1),r.setHours(0,0,0,0),r}const i=!("era"in n)||n.era===1?s.year:1-s.year;return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}}class Qk extends ge{constructor(){super(...arguments);z(this,"priority",130);z(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(r,n,s){const a=i=>({year:i,isTwoDigitYear:n==="YY"});switch(n){case"Y":return Me(qe(4,r),a);case"Yo":return Me(s.ordinalNumber(r,{unit:"year"}),a);default:return Me(qe(n.length,r),a)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,s,a){const i=Ca(r,a);if(s.isTwoDigitYear){const l=Gd(s.year,i);return r.setFullYear(l,0,a.firstWeekContainsDate),r.setHours(0,0,0,0),Bn(r,a)}const o=!("era"in n)||n.era===1?s.year:1-s.year;return r.setFullYear(o,0,a.firstWeekContainsDate),r.setHours(0,0,0,0),Bn(r,a)}}class Zk extends ge{constructor(){super(...arguments);z(this,"priority",130);z(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(r,n){return ms(n==="R"?4:n.length,r)}set(r,n,s){const a=ve(r,0);return a.setFullYear(s,0,4),a.setHours(0,0,0,0),dr(a)}}class ev extends ge{constructor(){super(...arguments);z(this,"priority",130);z(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(r,n){return ms(n==="u"?4:n.length,r)}set(r,n,s){return r.setFullYear(s,0,1),r.setHours(0,0,0,0),r}}class nv extends ge{constructor(){super(...arguments);z(this,"priority",120);z(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,s){switch(n){case"Q":case"QQ":return qe(n.length,r);case"Qo":return s.ordinalNumber(r,{unit:"quarter"});case"QQQ":return s.quarter(r,{width:"abbreviated",context:"formatting"})||s.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return s.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return s.quarter(r,{width:"wide",context:"formatting"})||s.quarter(r,{width:"abbreviated",context:"formatting"})||s.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=1&&n<=4}set(r,n,s){return r.setMonth((s-1)*3,1),r.setHours(0,0,0,0),r}}class rv extends ge{constructor(){super(...arguments);z(this,"priority",120);z(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,s){switch(n){case"q":case"qq":return qe(n.length,r);case"qo":return s.ordinalNumber(r,{unit:"quarter"});case"qqq":return s.quarter(r,{width:"abbreviated",context:"standalone"})||s.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return s.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return s.quarter(r,{width:"wide",context:"standalone"})||s.quarter(r,{width:"abbreviated",context:"standalone"})||s.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=1&&n<=4}set(r,n,s){return r.setMonth((s-1)*3,1),r.setHours(0,0,0,0),r}}class tv extends ge{constructor(){super(...arguments);z(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);z(this,"priority",110)}parse(r,n,s){const a=i=>i-1;switch(n){case"M":return Me(Oe(_e.month,r),a);case"MM":return Me(qe(2,r),a);case"Mo":return Me(s.ordinalNumber(r,{unit:"month"}),a);case"MMM":return s.month(r,{width:"abbreviated",context:"formatting"})||s.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return s.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return s.month(r,{width:"wide",context:"formatting"})||s.month(r,{width:"abbreviated",context:"formatting"})||s.month(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=11}set(r,n,s){return r.setMonth(s,1),r.setHours(0,0,0,0),r}}class sv extends ge{constructor(){super(...arguments);z(this,"priority",110);z(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(r,n,s){const a=i=>i-1;switch(n){case"L":return Me(Oe(_e.month,r),a);case"LL":return Me(qe(2,r),a);case"Lo":return Me(s.ordinalNumber(r,{unit:"month"}),a);case"LLL":return s.month(r,{width:"abbreviated",context:"standalone"})||s.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return s.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return s.month(r,{width:"wide",context:"standalone"})||s.month(r,{width:"abbreviated",context:"standalone"})||s.month(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=11}set(r,n,s){return r.setMonth(s,1),r.setHours(0,0,0,0),r}}function av(e,t,r){const n=oe(e,r==null?void 0:r.in),s=Ka(n,r)-t;return n.setDate(n.getDate()-s*7),oe(n,r==null?void 0:r.in)}class iv extends ge{constructor(){super(...arguments);z(this,"priority",100);z(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(r,n,s){switch(n){case"w":return Oe(_e.week,r);case"wo":return s.ordinalNumber(r,{unit:"week"});default:return qe(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,s,a){return Bn(av(r,s,a),a)}}function ov(e,t,r){const n=oe(e,r==null?void 0:r.in),s=Ba(n,r)-t;return n.setDate(n.getDate()-s*7),n}class lv extends ge{constructor(){super(...arguments);z(this,"priority",100);z(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(r,n,s){switch(n){case"I":return Oe(_e.week,r);case"Io":return s.ordinalNumber(r,{unit:"week"});default:return qe(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,s){return dr(ov(r,s))}}const dv=[31,28,31,30,31,30,31,31,30,31,30,31],uv=[31,29,31,30,31,30,31,31,30,31,30,31];class gv extends ge{constructor(){super(...arguments);z(this,"priority",90);z(this,"subPriority",1);z(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(r,n,s){switch(n){case"d":return Oe(_e.date,r);case"do":return s.ordinalNumber(r,{unit:"date"});default:return qe(n.length,r)}}validate(r,n){const s=r.getFullYear(),a=Ud(s),i=r.getMonth();return a?n>=1&&n<=uv[i]:n>=1&&n<=dv[i]}set(r,n,s){return r.setDate(s),r.setHours(0,0,0,0),r}}class mv extends ge{constructor(){super(...arguments);z(this,"priority",90);z(this,"subpriority",1);z(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(r,n,s){switch(n){case"D":case"DD":return Oe(_e.dayOfYear,r);case"Do":return s.ordinalNumber(r,{unit:"date"});default:return qe(n.length,r)}}validate(r,n){const s=r.getFullYear();return Ud(s)?n>=1&&n<=366:n>=1&&n<=365}set(r,n,s){return r.setMonth(0,s),r.setHours(0,0,0,0),r}}function Ya(e,t,r){var g,f,m,y;const n=cr(),s=(r==null?void 0:r.weekStartsOn)??((f=(g=r==null?void 0:r.locale)==null?void 0:g.options)==null?void 0:f.weekStartsOn)??n.weekStartsOn??((y=(m=n.locale)==null?void 0:m.options)==null?void 0:y.weekStartsOn)??0,a=oe(e,r==null?void 0:r.in),i=a.getDay(),l=(t%7+7)%7,u=7-s,d=t<0||t>6?t-(i+u)%7:(l+u)%7-(i+u)%7;return vt(a,d,r)}class cv extends ge{constructor(){super(...arguments);z(this,"priority",90);z(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(r,n,s){switch(n){case"E":case"EE":case"EEE":return s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return s.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return s.day(r,{width:"wide",context:"formatting"})||s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,s,a){return r=Ya(r,s,a),r.setHours(0,0,0,0),r}}class fv extends ge{constructor(){super(...arguments);z(this,"priority",90);z(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(r,n,s,a){const i=o=>{const l=Math.floor((o-1)/7)*7;return(o+a.weekStartsOn+6)%7+l};switch(n){case"e":case"ee":return Me(qe(n.length,r),i);case"eo":return Me(s.ordinalNumber(r,{unit:"day"}),i);case"eee":return s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"});case"eeeee":return s.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return s.day(r,{width:"wide",context:"formatting"})||s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,s,a){return r=Ya(r,s,a),r.setHours(0,0,0,0),r}}class kv extends ge{constructor(){super(...arguments);z(this,"priority",90);z(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(r,n,s,a){const i=o=>{const l=Math.floor((o-1)/7)*7;return(o+a.weekStartsOn+6)%7+l};switch(n){case"c":case"cc":return Me(qe(n.length,r),i);case"co":return Me(s.ordinalNumber(r,{unit:"day"}),i);case"ccc":return s.day(r,{width:"abbreviated",context:"standalone"})||s.day(r,{width:"short",context:"standalone"})||s.day(r,{width:"narrow",context:"standalone"});case"ccccc":return s.day(r,{width:"narrow",context:"standalone"});case"cccccc":return s.day(r,{width:"short",context:"standalone"})||s.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return s.day(r,{width:"wide",context:"standalone"})||s.day(r,{width:"abbreviated",context:"standalone"})||s.day(r,{width:"short",context:"standalone"})||s.day(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=6}set(r,n,s,a){return r=Ya(r,s,a),r.setHours(0,0,0,0),r}}function vv(e,t,r){const n=oe(e,r==null?void 0:r.in),s=Uk(n,r),a=t-s;return vt(n,a,r)}class pv extends ge{constructor(){super(...arguments);z(this,"priority",90);z(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(r,n,s){const a=i=>i===0?7:i;switch(n){case"i":case"ii":return qe(n.length,r);case"io":return s.ordinalNumber(r,{unit:"day"});case"iii":return Me(s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"}),a);case"iiiii":return Me(s.day(r,{width:"narrow",context:"formatting"}),a);case"iiiiii":return Me(s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"}),a);case"iiii":default:return Me(s.day(r,{width:"wide",context:"formatting"})||s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"}),a)}}validate(r,n){return n>=1&&n<=7}set(r,n,s){return r=vv(r,s),r.setHours(0,0,0,0),r}}class yv extends ge{constructor(){super(...arguments);z(this,"priority",80);z(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(r,n,s){switch(n){case"a":case"aa":case"aaa":return s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return s.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return s.dayPeriod(r,{width:"wide",context:"formatting"})||s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,s){return r.setHours(Ha(s),0,0,0),r}}class bv extends ge{constructor(){super(...arguments);z(this,"priority",80);z(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(r,n,s){switch(n){case"b":case"bb":case"bbb":return s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return s.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return s.dayPeriod(r,{width:"wide",context:"formatting"})||s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,s){return r.setHours(Ha(s),0,0,0),r}}class hv extends ge{constructor(){super(...arguments);z(this,"priority",80);z(this,"incompatibleTokens",["a","b","t","T"])}parse(r,n,s){switch(n){case"B":case"BB":case"BBB":return s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return s.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return s.dayPeriod(r,{width:"wide",context:"formatting"})||s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,s){return r.setHours(Ha(s),0,0,0),r}}class Iv extends ge{constructor(){super(...arguments);z(this,"priority",70);z(this,"incompatibleTokens",["H","K","k","t","T"])}parse(r,n,s){switch(n){case"h":return Oe(_e.hour12h,r);case"ho":return s.ordinalNumber(r,{unit:"hour"});default:return qe(n.length,r)}}validate(r,n){return n>=1&&n<=12}set(r,n,s){const a=r.getHours()>=12;return a&&s<12?r.setHours(s+12,0,0,0):!a&&s===12?r.setHours(0,0,0,0):r.setHours(s,0,0,0),r}}class wv extends ge{constructor(){super(...arguments);z(this,"priority",70);z(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(r,n,s){switch(n){case"H":return Oe(_e.hour23h,r);case"Ho":return s.ordinalNumber(r,{unit:"hour"});default:return qe(n.length,r)}}validate(r,n){return n>=0&&n<=23}set(r,n,s){return r.setHours(s,0,0,0),r}}class Av extends ge{constructor(){super(...arguments);z(this,"priority",70);z(this,"incompatibleTokens",["h","H","k","t","T"])}parse(r,n,s){switch(n){case"K":return Oe(_e.hour11h,r);case"Ko":return s.ordinalNumber(r,{unit:"hour"});default:return qe(n.length,r)}}validate(r,n){return n>=0&&n<=11}set(r,n,s){return r.getHours()>=12&&s<12?r.setHours(s+12,0,0,0):r.setHours(s,0,0,0),r}}class jv extends ge{constructor(){super(...arguments);z(this,"priority",70);z(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(r,n,s){switch(n){case"k":return Oe(_e.hour24h,r);case"ko":return s.ordinalNumber(r,{unit:"hour"});default:return qe(n.length,r)}}validate(r,n){return n>=1&&n<=24}set(r,n,s){const a=s<=24?s%24:s;return r.setHours(a,0,0,0),r}}class Ev extends ge{constructor(){super(...arguments);z(this,"priority",60);z(this,"incompatibleTokens",["t","T"])}parse(r,n,s){switch(n){case"m":return Oe(_e.minute,r);case"mo":return s.ordinalNumber(r,{unit:"minute"});default:return qe(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,s){return r.setMinutes(s,0,0),r}}class Tv extends ge{constructor(){super(...arguments);z(this,"priority",50);z(this,"incompatibleTokens",["t","T"])}parse(r,n,s){switch(n){case"s":return Oe(_e.second,r);case"so":return s.ordinalNumber(r,{unit:"second"});default:return qe(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,s){return r.setSeconds(s,0),r}}class Ov extends ge{constructor(){super(...arguments);z(this,"priority",30);z(this,"incompatibleTokens",["t","T"])}parse(r,n){const s=a=>Math.trunc(a*Math.pow(10,-n.length+3));return Me(qe(n.length,r),s)}set(r,n,s){return r.setMilliseconds(s),r}}class Nv extends ge{constructor(){super(...arguments);z(this,"priority",10);z(this,"incompatibleTokens",["t","T","x"])}parse(r,n){switch(n){case"X":return Tn(En.basicOptionalMinutes,r);case"XX":return Tn(En.basic,r);case"XXXX":return Tn(En.basicOptionalSeconds,r);case"XXXXX":return Tn(En.extendedOptionalSeconds,r);case"XXX":default:return Tn(En.extended,r)}}set(r,n,s){return n.timestampIsSet?r:ve(r,r.getTime()-gs(r)-s)}}class Rv extends ge{constructor(){super(...arguments);z(this,"priority",10);z(this,"incompatibleTokens",["t","T","X"])}parse(r,n){switch(n){case"x":return Tn(En.basicOptionalMinutes,r);case"xx":return Tn(En.basic,r);case"xxxx":return Tn(En.basicOptionalSeconds,r);case"xxxxx":return Tn(En.extendedOptionalSeconds,r);case"xxx":default:return Tn(En.extended,r)}}set(r,n,s){return n.timestampIsSet?r:ve(r,r.getTime()-gs(r)-s)}}class Pv extends ge{constructor(){super(...arguments);z(this,"priority",40);z(this,"incompatibleTokens","*")}parse(r){return Kd(r)}set(r,n,s){return[ve(r,s*1e3),{timestampIsSet:!0}]}}class qv extends ge{constructor(){super(...arguments);z(this,"priority",20);z(this,"incompatibleTokens","*")}parse(r){return Kd(r)}set(r,n,s){return[ve(r,s),{timestampIsSet:!0}]}}const _v={G:new Jk,y:new Xk,Y:new Qk,R:new Zk,u:new ev,Q:new nv,q:new rv,M:new tv,L:new sv,w:new iv,I:new lv,d:new gv,D:new mv,E:new cv,e:new fv,c:new kv,i:new pv,a:new yv,b:new bv,B:new hv,h:new Iv,H:new wv,K:new Av,k:new jv,m:new Ev,s:new Tv,S:new Ov,X:new Nv,x:new Rv,t:new Pv,T:new qv},Mv=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Dv=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Sv=/^'([^]*?)'?$/,xv=/''/g,Fv=/\S/,Vv=/[a-zA-Z]/;function Er(e,t,r,n){var h,A,I,b,j,p,N,O;const s=()=>ve((n==null?void 0:n.in)||r,NaN),a=Gk(),i=(n==null?void 0:n.locale)??a.locale??As,o=(n==null?void 0:n.firstWeekContainsDate)??((A=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:A.firstWeekContainsDate)??a.firstWeekContainsDate??((b=(I=a.locale)==null?void 0:I.options)==null?void 0:b.firstWeekContainsDate)??1,l=(n==null?void 0:n.weekStartsOn)??((p=(j=n==null?void 0:n.locale)==null?void 0:j.options)==null?void 0:p.weekStartsOn)??a.weekStartsOn??((O=(N=a.locale)==null?void 0:N.options)==null?void 0:O.weekStartsOn)??0;if(!t)return e?s():oe(r,n==null?void 0:n.in);const u={firstWeekContainsDate:o,weekStartsOn:l,locale:i},d=[new zk(n==null?void 0:n.in,r)],g=t.match(Dv).map(R=>{const P=R[0];if(P in fa){const D=fa[P];return D(R,i.formatLong)}return R}).join("").match(Mv),f=[];for(let R of g){!(n!=null&&n.useAdditionalWeekYearTokens)&&Ld(R)&&ka(R,t,e),!(n!=null&&n.useAdditionalDayOfYearTokens)&&Vd(R)&&ka(R,t,e);const P=R[0],D=_v[P];if(D){const{incompatibleTokens:F}=D;if(Array.isArray(F)){const T=f.find(_=>F.includes(_.token)||_.token===P);if(T)throw new RangeError(`The format string mustn't contain \`${T.fullToken}\` and \`${R}\` at the same time`)}else if(D.incompatibleTokens==="*"&&f.length>0)throw new RangeError(`The format string mustn't contain \`${R}\` and any other token at the same time`);f.push({token:P,fullToken:R});const M=D.run(e,R,i.match,u);if(!M)return s();d.push(M.setter),e=M.rest}else{if(P.match(Vv))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");if(R==="''"?R="'":P==="'"&&(R=Lv(R)),e.indexOf(R)===0)e=e.slice(R.length);else return s()}}if(e.length>0&&Fv.test(e))return s();const m=d.map(R=>R.priority).sort((R,P)=>P-R).filter((R,P,D)=>D.indexOf(R)===P).map(R=>d.filter(P=>P.priority===R).sort((P,D)=>D.subPriority-P.subPriority)).map(R=>R[0]);let y=oe(r,n==null?void 0:n.in);if(isNaN(+y))return s();const w={};for(const R of m){if(!R.validate(y,u))return s();const P=R.set(y,w,u);Array.isArray(P)?(y=P[0],Object.assign(w,P[1])):y=P}return y}function Lv(e){return e.match(Sv)[1].replace(xv,"'")}function Bv(e,t,r){const[n,s]=xr(r==null?void 0:r.in,e,t);return n.getFullYear()===s.getFullYear()&&n.getMonth()===s.getMonth()}function Hd(e,t,r){const[n,s]=xr(r==null?void 0:r.in,e,t);return n.getFullYear()===s.getFullYear()}function Cv(e,t,r){return vt(e,-t,r)}function Yd(e,t,r){const n=oe(e,r==null?void 0:r.in),s=n.getFullYear(),a=n.getDate(),i=ve(e,0);i.setFullYear(s,t,15),i.setHours(0,0,0,0);const o=Kk(i);return n.setMonth(t,Math.min(a,o)),n}function $d(e,t,r){const n=oe(e,r==null?void 0:r.in);return isNaN(+n)?ve(e,NaN):(n.setFullYear(t),n)}function Kv(e,t,r){return Fa(e,-t,r)}function Gv(e,t,r){const{years:n=0,months:s=0,weeks:a=0,days:i=0,hours:o=0,minutes:l=0,seconds:u=0}=t,d=Kv(e,s+n*12,r),g=Cv(d,i+a*7,r),f=l+o*60,y=(u+f*60)*1e3;return ve(e,+g-y)}function Uv(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Hv(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:r,version:n}=t;return r+"/"+n}).join(" "):navigator.userAgent}function Yv(){return/apple/i.test(navigator.vendor)}function $v(){return Uv().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Wv(){return Hv().includes("jsdom/")}const zv="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Di(e){let t=e.activeElement;for(;((r=t)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;t=t.shadowRoot.activeElement}return t}function st(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&ls(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Ir(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Ys(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const r=e;return r.target!=null&&t.contains(r.target)}function Jv(e){return e.matches("html,body")}function sr(e){return(e==null?void 0:e.ownerDocument)||document}function Xv(e){return on(e)&&e.matches(zv)}function Qv(e){if(!e||Wv())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function $s(e,t,r){r===void 0&&(r=!0);let n=e.filter(a=>{var i;return a.parentId===t&&((i=a.context)==null?void 0:i.open)}),s=n;for(;s.length;)s=r?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(o=>{var l;return a.parentId===o.id&&((l=a.context)==null?void 0:l.open)})}):e,n=n.concat(s);return n}function Zv(e){return"nativeEvent"in e}function va(e,t){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var Ln=typeof document<"u"?c.useLayoutEffect:c.useEffect;const ep={...Hl};function Nt(e){const t=c.useRef(e);return Ln(()=>{t.current=e}),t}const np=ep.useInsertionEffect,rp=np||(e=>e());function xn(e){const t=c.useRef(()=>{});return rp(()=>{t.current=e}),c.useCallback(function(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return t.current==null?void 0:t.current(...n)},[])}const tp="data-floating-ui-focusable",Si="active",xi="selected",sp={...Hl};let Fi=!1,ap=0;const Vi=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+ap++;function ip(){const[e,t]=c.useState(()=>Fi?Vi():void 0);return Ln(()=>{e==null&&t(Vi())},[]),c.useEffect(()=>{Fi=!0},[]),e}const op=sp.useId,Wd=op||ip;function lp(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(s=>s(r))},on(t,r){e.has(t)||e.set(t,new Set),e.get(t).add(r)},off(t,r){var n;(n=e.get(t))==null||n.delete(r)}}}const dp=c.createContext(null),up=c.createContext(null),zd=()=>{var e;return((e=c.useContext(dp))==null?void 0:e.id)||null},$a=()=>c.useContext(up);function Ps(e){return"data-floating-ui-"+e}function dn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Li=Ps("safe-polygon");function Ws(e,t,r){if(r&&!va(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n==null?void 0:n[t]}return e==null?void 0:e[t]}function zs(e){return typeof e=="function"?e():e}function gp(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,dataRef:s,events:a,elements:i}=e,{enabled:o=!0,delay:l=0,handleClose:u=null,mouseOnly:d=!1,restMs:g=0,move:f=!0}=t,m=$a(),y=zd(),w=Nt(u),h=Nt(l),A=Nt(r),I=Nt(g),b=c.useRef(),j=c.useRef(-1),p=c.useRef(),N=c.useRef(-1),O=c.useRef(!0),R=c.useRef(!1),P=c.useRef(()=>{}),D=c.useRef(!1),F=c.useCallback(()=>{var C;const L=(C=s.current.openEvent)==null?void 0:C.type;return(L==null?void 0:L.includes("mouse"))&&L!=="mousedown"},[s]);c.useEffect(()=>{if(!o)return;function C(L){let{open:V}=L;V||(dn(j),dn(N),O.current=!0,D.current=!1)}return a.on("openchange",C),()=>{a.off("openchange",C)}},[o,a]),c.useEffect(()=>{if(!o||!w.current||!r)return;function C(V){F()&&n(!1,V,"hover")}const L=sr(i.floating).documentElement;return L.addEventListener("mouseleave",C),()=>{L.removeEventListener("mouseleave",C)}},[i.floating,r,n,o,w,F]);const M=c.useCallback(function(C,L,V){L===void 0&&(L=!0),V===void 0&&(V="hover");const H=Ws(h.current,"close",b.current);H&&!p.current?(dn(j),j.current=window.setTimeout(()=>n(!1,C,V),H)):L&&(dn(j),n(!1,C,V))},[h,n]),T=xn(()=>{P.current(),p.current=void 0}),_=xn(()=>{if(R.current){const C=sr(i.floating).body;C.style.pointerEvents="",C.removeAttribute(Li),R.current=!1}}),x=xn(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);c.useEffect(()=>{if(!o)return;function C(J){if(dn(j),O.current=!1,d&&!va(b.current)||zs(I.current)>0&&!Ws(h.current,"open"))return;const ae=Ws(h.current,"open",b.current);ae?j.current=window.setTimeout(()=>{A.current||n(!0,J,"hover")},ae):r||n(!0,J,"hover")}function L(J){if(x()){_();return}P.current();const ae=sr(i.floating);if(dn(N),D.current=!1,w.current&&s.current.floatingContext){r||dn(j),p.current=w.current({...s.current.floatingContext,tree:m,x:J.clientX,y:J.clientY,onClose(){_(),T(),x()||M(J,!0,"safe-polygon")}});const ee=p.current;ae.addEventListener("mousemove",ee),P.current=()=>{ae.removeEventListener("mousemove",ee)};return}(b.current==="touch"?!st(i.floating,J.relatedTarget):!0)&&M(J)}function V(J){x()||s.current.floatingContext&&(w.current==null||w.current({...s.current.floatingContext,tree:m,x:J.clientX,y:J.clientY,onClose(){_(),T(),x()||M(J)}})(J))}function H(){dn(j)}function X(J){x()||M(J,!1)}if(Ie(i.domReference)){const J=i.domReference,ae=i.floating;return r&&J.addEventListener("mouseleave",V),f&&J.addEventListener("mousemove",C,{once:!0}),J.addEventListener("mouseenter",C),J.addEventListener("mouseleave",L),ae&&(ae.addEventListener("mouseleave",V),ae.addEventListener("mouseenter",H),ae.addEventListener("mouseleave",X)),()=>{r&&J.removeEventListener("mouseleave",V),f&&J.removeEventListener("mousemove",C),J.removeEventListener("mouseenter",C),J.removeEventListener("mouseleave",L),ae&&(ae.removeEventListener("mouseleave",V),ae.removeEventListener("mouseenter",H),ae.removeEventListener("mouseleave",X))}}},[i,o,e,d,f,M,T,_,n,r,A,m,h,w,s,x,I]),Ln(()=>{var C;if(o&&r&&(C=w.current)!=null&&C.__options.blockPointerEvents&&F()){R.current=!0;const V=i.floating;if(Ie(i.domReference)&&V){var L;const H=sr(i.floating).body;H.setAttribute(Li,"");const X=i.domReference,J=m==null||(L=m.nodesRef.current.find(ae=>ae.id===y))==null||(L=L.context)==null?void 0:L.elements.floating;return J&&(J.style.pointerEvents=""),H.style.pointerEvents="none",X.style.pointerEvents="auto",V.style.pointerEvents="auto",()=>{H.style.pointerEvents="",X.style.pointerEvents="",V.style.pointerEvents=""}}}},[o,r,y,i,m,w,F]),Ln(()=>{r||(b.current=void 0,D.current=!1,T(),_())},[r,T,_]),c.useEffect(()=>()=>{T(),dn(j),dn(N),_()},[o,i.domReference,T,_]);const B=c.useMemo(()=>{function C(L){b.current=L.pointerType}return{onPointerDown:C,onPointerEnter:C,onMouseMove(L){const{nativeEvent:V}=L;function H(){!O.current&&!A.current&&n(!0,V,"hover")}d&&!va(b.current)||r||zs(I.current)===0||D.current&&L.movementX**2+L.movementY**2<2||(dn(N),b.current==="touch"?H():(D.current=!0,N.current=window.setTimeout(H,zs(I.current))))}}},[d,n,r,A,I]);return c.useMemo(()=>o?{reference:B}:{},[o,B])}function Js(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&ls(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function mp(e){return"composedPath"in e?e.composedPath()[0]:e.target}const cp=c.createContext(null),Bi=Ps("portal");function fp(e){e===void 0&&(e={});const{id:t,root:r}=e,n=Wd(),s=kp(),[a,i]=c.useState(null),o=c.useRef(null);return Ln(()=>()=>{a==null||a.remove(),queueMicrotask(()=>{o.current=null})},[a]),Ln(()=>{if(!n||o.current)return;const l=t?document.getElementById(t):null;if(!l)return;const u=document.createElement("div");u.id=n,u.setAttribute(Bi,""),l.appendChild(u),o.current=u,i(u)},[t,n]),Ln(()=>{if(r===null||!n||o.current)return;let l=r||(s==null?void 0:s.portalNode);l&&!Ie(l)&&(l=l.current),l=l||document.body;let u=null;t&&(u=document.createElement("div"),u.id=t,l.appendChild(u));const d=document.createElement("div");d.id=n,d.setAttribute(Bi,""),l=u||l,l.appendChild(d),o.current=d,i(d)},[t,r,n,s]),a}const kp=()=>c.useContext(cp),vp={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},pp={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Ci=e=>{var t,r;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(r=e==null?void 0:e.outsidePress)!=null?r:!0}};function yp(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,elements:s,dataRef:a}=e,{enabled:i=!0,escapeKey:o=!0,outsidePress:l=!0,outsidePressEvent:u="pointerdown",referencePress:d=!1,referencePressEvent:g="pointerdown",ancestorScroll:f=!1,bubbles:m,capture:y}=t,w=$a(),h=xn(typeof l=="function"?l:()=>!1),A=typeof l=="function"?h:l,I=c.useRef(!1),b=c.useRef(!1),{escapeKey:j,outsidePress:p}=Ci(m),{escapeKey:N,outsidePress:O}=Ci(y),R=c.useRef(!1),P=xn(x=>{var B;if(!r||!i||!o||x.key!=="Escape"||R.current)return;const C=(B=a.current.floatingContext)==null?void 0:B.nodeId,L=w?$s(w.nodesRef.current,C):[];if(!j&&(x.stopPropagation(),L.length>0)){let V=!0;if(L.forEach(H=>{var X;if((X=H.context)!=null&&X.open&&!H.context.dataRef.current.__escapeKeyBubbles){V=!1;return}}),!V)return}n(!1,Zv(x)?x.nativeEvent:x,"escape-key")}),D=xn(x=>{var B;const C=()=>{var L;P(x),(L=Ir(x))==null||L.removeEventListener("keydown",C)};(B=Ir(x))==null||B.addEventListener("keydown",C)}),F=xn(x=>{var B;const C=I.current;I.current=!1;const L=b.current;if(b.current=!1,u==="click"&&L||C||typeof A=="function"&&!A(x))return;const V=Ir(x),H="["+Ps("inert")+"]",X=sr(s.floating).querySelectorAll(H);let J=Ie(V)?V:null;for(;J&&!Vn(J);){const G=Cn(J);if(Vn(G)||!Ie(G))break;J=G}if(X.length&&Ie(V)&&!Jv(V)&&!st(V,s.floating)&&Array.from(X).every(G=>!st(J,G)))return;if(on(V)&&_){const G=Vn(V),ne=fn(V),re=/auto|scroll/,de=G||re.test(ne.overflowX),Le=G||re.test(ne.overflowY),Ce=de&&V.clientWidth>0&&V.scrollWidth>V.clientWidth,Ke=Le&&V.clientHeight>0&&V.scrollHeight>V.clientHeight,Mn=ne.direction==="rtl",ln=Ke&&(Mn?x.offsetX<=V.offsetWidth-V.clientWidth:x.offsetX>V.clientWidth),kn=Ce&&x.offsetY>V.clientHeight;if(ln||kn)return}const ae=(B=a.current.floatingContext)==null?void 0:B.nodeId,Fe=w&&$s(w.nodesRef.current,ae).some(G=>{var ne;return Ys(x,(ne=G.context)==null?void 0:ne.elements.floating)});if(Ys(x,s.floating)||Ys(x,s.domReference)||Fe)return;const ee=w?$s(w.nodesRef.current,ae):[];if(ee.length>0){let G=!0;if(ee.forEach(ne=>{var re;if((re=ne.context)!=null&&re.open&&!ne.context.dataRef.current.__outsidePressBubbles){G=!1;return}}),!G)return}n(!1,x,"outside-press")}),M=xn(x=>{var B;const C=()=>{var L;F(x),(L=Ir(x))==null||L.removeEventListener(u,C)};(B=Ir(x))==null||B.addEventListener(u,C)});c.useEffect(()=>{if(!r||!i)return;a.current.__escapeKeyBubbles=j,a.current.__outsidePressBubbles=p;let x=-1;function B(X){n(!1,X,"ancestor-scroll")}function C(){window.clearTimeout(x),R.current=!0}function L(){x=window.setTimeout(()=>{R.current=!1},Os()?5:0)}const V=sr(s.floating);o&&(V.addEventListener("keydown",N?D:P,N),V.addEventListener("compositionstart",C),V.addEventListener("compositionend",L)),A&&V.addEventListener(u,O?M:F,O);let H=[];return f&&(Ie(s.domReference)&&(H=Xn(s.domReference)),Ie(s.floating)&&(H=H.concat(Xn(s.floating))),!Ie(s.reference)&&s.reference&&s.reference.contextElement&&(H=H.concat(Xn(s.reference.contextElement)))),H=H.filter(X=>{var J;return X!==((J=V.defaultView)==null?void 0:J.visualViewport)}),H.forEach(X=>{X.addEventListener("scroll",B,{passive:!0})}),()=>{o&&(V.removeEventListener("keydown",N?D:P,N),V.removeEventListener("compositionstart",C),V.removeEventListener("compositionend",L)),A&&V.removeEventListener(u,O?M:F,O),H.forEach(X=>{X.removeEventListener("scroll",B)}),window.clearTimeout(x)}},[a,s,o,A,u,r,n,f,i,j,p,P,N,D,F,O,M]),c.useEffect(()=>{I.current=!1},[A,u]);const T=c.useMemo(()=>({onKeyDown:P,...d&&{[vp[g]]:x=>{n(!1,x.nativeEvent,"reference-press")},...g!=="click"&&{onClick(x){n(!1,x.nativeEvent,"reference-press")}}}}),[P,n,d,g]),_=c.useMemo(()=>({onKeyDown:P,onMouseDown(){b.current=!0},onMouseUp(){b.current=!0},[pp[u]]:()=>{I.current=!0}}),[P,u]);return c.useMemo(()=>i?{reference:T,floating:_}:{},[i,T,_])}function bp(e){const{open:t=!1,onOpenChange:r,elements:n}=e,s=Wd(),a=c.useRef({}),[i]=c.useState(()=>lp()),o=zd()!=null,[l,u]=c.useState(n.reference),d=xn((m,y,w)=>{a.current.openEvent=m?y:void 0,i.emit("openchange",{open:m,event:y,reason:w,nested:o}),r==null||r(m,y,w)}),g=c.useMemo(()=>({setPositionReference:u}),[]),f=c.useMemo(()=>({reference:l||n.reference||null,floating:n.floating||null,domReference:n.reference}),[l,n.reference,n.floating]);return c.useMemo(()=>({dataRef:a,open:t,onOpenChange:d,elements:f,events:i,floatingId:s,refs:g}),[t,d,f,i,s,g])}function Jd(e){e===void 0&&(e={});const{nodeId:t}=e,r=bp({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||r,s=n.elements,[a,i]=c.useState(null),[o,l]=c.useState(null),d=(s==null?void 0:s.domReference)||a,g=c.useRef(null),f=$a();Ln(()=>{d&&(g.current=d)},[d]);const m=ok({...e,elements:{...s,...o&&{reference:o}}}),y=c.useCallback(b=>{const j=Ie(b)?{getBoundingClientRect:()=>b.getBoundingClientRect(),getClientRects:()=>b.getClientRects(),contextElement:b}:b;l(j),m.refs.setReference(j)},[m.refs]),w=c.useCallback(b=>{(Ie(b)||b===null)&&(g.current=b,i(b)),(Ie(m.refs.reference.current)||m.refs.reference.current===null||b!==null&&!Ie(b))&&m.refs.setReference(b)},[m.refs]),h=c.useMemo(()=>({...m.refs,setReference:w,setPositionReference:y,domReference:g}),[m.refs,w,y]),A=c.useMemo(()=>({...m.elements,domReference:d}),[m.elements,d]),I=c.useMemo(()=>({...m,...n,refs:h,elements:A,nodeId:t}),[m,h,A,t,n]);return Ln(()=>{n.dataRef.current.floatingContext=I;const b=f==null?void 0:f.nodesRef.current.find(j=>j.id===t);b&&(b.context=I)}),c.useMemo(()=>({...m,context:I,refs:h,elements:A}),[m,h,A,I])}function Xs(){return $v()&&Yv()}function hp(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,events:s,dataRef:a,elements:i}=e,{enabled:o=!0,visibleOnly:l=!0}=t,u=c.useRef(!1),d=c.useRef(-1),g=c.useRef(!0);c.useEffect(()=>{if(!o)return;const m=rn(i.domReference);function y(){!r&&on(i.domReference)&&i.domReference===Di(sr(i.domReference))&&(u.current=!0)}function w(){g.current=!0}function h(){g.current=!1}return m.addEventListener("blur",y),Xs()&&(m.addEventListener("keydown",w,!0),m.addEventListener("pointerdown",h,!0)),()=>{m.removeEventListener("blur",y),Xs()&&(m.removeEventListener("keydown",w,!0),m.removeEventListener("pointerdown",h,!0))}},[i.domReference,r,o]),c.useEffect(()=>{if(!o)return;function m(y){let{reason:w}=y;(w==="reference-press"||w==="escape-key")&&(u.current=!0)}return s.on("openchange",m),()=>{s.off("openchange",m)}},[s,o]),c.useEffect(()=>()=>{dn(d)},[]);const f=c.useMemo(()=>({onMouseLeave(){u.current=!1},onFocus(m){if(u.current)return;const y=Ir(m.nativeEvent);if(l&&Ie(y)){if(Xs()&&!m.relatedTarget){if(!g.current&&!Xv(y))return}else if(!Qv(y))return}n(!0,m.nativeEvent,"focus")},onBlur(m){u.current=!1;const y=m.relatedTarget,w=m.nativeEvent,h=Ie(y)&&y.hasAttribute(Ps("focus-guard"))&&y.getAttribute("data-type")==="outside";d.current=window.setTimeout(()=>{var A;const I=Di(i.domReference?i.domReference.ownerDocument:document);!y&&I===i.domReference||st((A=a.current.floatingContext)==null?void 0:A.refs.floating.current,I)||st(i.domReference,I)||h||n(!1,w,"focus")})}}),[a,i.domReference,n,l]);return c.useMemo(()=>o?{reference:f}:{},[o,f])}function Qs(e,t,r){const n=new Map,s=r==="item";let a=e;if(s&&e){const{[Si]:i,[xi]:o,...l}=e;a=l}return{...r==="floating"&&{tabIndex:-1,[tp]:""},...a,...t.map(i=>{const o=i?i[r]:null;return typeof o=="function"?e?o(e):null:o}).concat(e).reduce((i,o)=>(o&&Object.entries(o).forEach(l=>{let[u,d]=l;if(!(s&&[Si,xi].includes(u)))if(u.indexOf("on")===0){if(n.has(u)||n.set(u,[]),typeof d=="function"){var g;(g=n.get(u))==null||g.push(d),i[u]=function(){for(var f,m=arguments.length,y=new Array(m),w=0;w<m;w++)y[w]=arguments[w];return(f=n.get(u))==null?void 0:f.map(h=>h(...y)).find(h=>h!==void 0)}}}else i[u]=d}),i),{})}}function Ip(e){e===void 0&&(e=[]);const t=e.map(o=>o==null?void 0:o.reference),r=e.map(o=>o==null?void 0:o.floating),n=e.map(o=>o==null?void 0:o.item),s=c.useCallback(o=>Qs(o,e,"reference"),t),a=c.useCallback(o=>Qs(o,e,"floating"),r),i=c.useCallback(o=>Qs(o,e,"item"),n);return c.useMemo(()=>({getReferenceProps:s,getFloatingProps:a,getItemProps:i}),[s,a,i])}function wp(e,t,r){r===void 0&&(r=!0);let n=e.filter(a=>{var i;return a.parentId===t&&((i=a.context)==null?void 0:i.open)}),s=n;for(;s.length;)s=r?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(o=>{var l;return a.parentId===o.id&&((l=a.context)==null?void 0:l.open)})}):e,n=n.concat(s);return n}function Ki(e,t){const[r,n]=e;let s=!1;const a=t.length;for(let i=0,o=a-1;i<a;o=i++){const[l,u]=t[i]||[0,0],[d,g]=t[o]||[0,0];u>=n!=g>=n&&r<=(d-l)*(n-u)/(g-u)+l&&(s=!s)}return s}function Ap(e,t){return e[0]>=t.x&&e[0]<=t.x+t.width&&e[1]>=t.y&&e[1]<=t.y+t.height}function jp(e){e===void 0&&(e={});const{buffer:t=.5,blockPointerEvents:r=!1,requireIntent:n=!0}=e;let s,a=!1,i=null,o=null,l=performance.now();function u(g,f){const m=performance.now(),y=m-l;if(i===null||o===null||y===0)return i=g,o=f,l=m,null;const w=g-i,h=f-o,I=Math.sqrt(w*w+h*h)/y;return i=g,o=f,l=m,I}const d=g=>{let{x:f,y:m,placement:y,elements:w,onClose:h,nodeId:A,tree:I}=g;return function(j){function p(){clearTimeout(s),h()}if(clearTimeout(s),!w.domReference||!w.floating||y==null||f==null||m==null)return;const{clientX:N,clientY:O}=j,R=[N,O],P=mp(j),D=j.type==="mouseleave",F=Js(w.floating,P),M=Js(w.domReference,P),T=w.domReference.getBoundingClientRect(),_=w.floating.getBoundingClientRect(),x=y.split("-")[0],B=f>_.right-_.width/2,C=m>_.bottom-_.height/2,L=Ap(R,T),V=_.width>T.width,H=_.height>T.height,X=(V?T:_).left,J=(V?T:_).right,ae=(H?T:_).top,Fe=(H?T:_).bottom;if(F&&(a=!0,!D))return;if(M&&(a=!1),M&&!D){a=!0;return}if(D&&Ie(j.relatedTarget)&&Js(w.floating,j.relatedTarget)||I&&wp(I.nodesRef.current,A).some(ne=>{let{context:re}=ne;return re==null?void 0:re.open}))return;if(x==="top"&&m>=T.bottom-1||x==="bottom"&&m<=T.top+1||x==="left"&&f>=T.right-1||x==="right"&&f<=T.left+1)return p();let ee=[];switch(x){case"top":ee=[[X,T.top+1],[X,_.bottom-1],[J,_.bottom-1],[J,T.top+1]];break;case"bottom":ee=[[X,_.top+1],[X,T.bottom-1],[J,T.bottom-1],[J,_.top+1]];break;case"left":ee=[[_.right-1,Fe],[_.right-1,ae],[T.left+1,ae],[T.left+1,Fe]];break;case"right":ee=[[T.right-1,Fe],[T.right-1,ae],[_.left+1,ae],[_.left+1,Fe]];break}function G(ne){let[re,de]=ne;switch(x){case"top":{const Le=[V?re+t/2:B?re+t*4:re-t*4,de+t+1],Ce=[V?re-t/2:B?re+t*4:re-t*4,de+t+1],Ke=[[_.left,B||V?_.bottom-t:_.top],[_.right,B?V?_.bottom-t:_.top:_.bottom-t]];return[Le,Ce,...Ke]}case"bottom":{const Le=[V?re+t/2:B?re+t*4:re-t*4,de-t],Ce=[V?re-t/2:B?re+t*4:re-t*4,de-t],Ke=[[_.left,B||V?_.top+t:_.bottom],[_.right,B?V?_.top+t:_.bottom:_.top+t]];return[Le,Ce,...Ke]}case"left":{const Le=[re+t+1,H?de+t/2:C?de+t*4:de-t*4],Ce=[re+t+1,H?de-t/2:C?de+t*4:de-t*4];return[...[[C||H?_.right-t:_.left,_.top],[C?H?_.right-t:_.left:_.right-t,_.bottom]],Le,Ce]}case"right":{const Le=[re-t,H?de+t/2:C?de+t*4:de-t*4],Ce=[re-t,H?de-t/2:C?de+t*4:de-t*4],Ke=[[C||H?_.left+t:_.right,_.top],[C?H?_.left+t:_.right:_.left+t,_.bottom]];return[Le,Ce,...Ke]}}}if(!Ki([N,O],ee)){if(a&&!L)return p();if(!D&&n){const ne=u(j.clientX,j.clientY);if(ne!==null&&ne<.1)return p()}Ki([N,O],G([f,m]))?!a&&n&&(s=window.setTimeout(p,40)):p()}}};return d.__options={blockPointerEvents:r},d}const qs=()=>{const{cn:e}=te();return v.createElement(rd,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Xd=()=>{const{cn:e}=te();return v.createElement(rd,{title:Gn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},cs=c.createContext(null),Vr=(e,t)=>{var r,n,s;const{size:a,error:i,errorId:o}=e,l=c.useContext(cs),u=In(),d=(r=e.id)!==null&&r!==void 0?r:`${t}-${u}`,g=o??`${t}-error-${u}`,f=`${t}-description-${u}`,m=(l==null?void 0:l.disabled)||e.disabled,y=((l==null?void 0:l.readOnly)||e.readOnly)&&!m||void 0,w=!m&&!y&&!!(i||l!=null&&l.error),h=!m&&!y&&!!i&&typeof i!="boolean",A=Object.assign({},w?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:h,hasError:w,errorId:g,inputDescriptionId:f,size:(n=a??(l==null?void 0:l.size))!==null&&n!==void 0?n:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:d},A),{"aria-describedby":lt(e["aria-describedby"],{[f]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[g]:h,[(s=l==null?void 0:l.errorId)!==null&&s!==void 0?s:""]:w&&!!(l!=null&&l.error)})||void 0,disabled:m})}},Qd={global:{dateLocale:ud,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},Zd={global:{dateLocale:md,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},eu=(e="nb")=>{switch(e){case"nn":return md;case"en":return ud;default:return gd}},nu=e=>{switch(e){case"nn":return Zd.DatePicker;case"en":case"en-GB":return Qd.DatePicker;default:return}},Ep=e=>{switch(e){case"nn":return Zd.global;case"en":case"en-GB":return Qd.global;default:return}},[ru,_s]=hs();var Tp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const[Op,Wa]=hs({errorMessage:"useDateInputContext must be used with DateInputContext"}),tu=c.forwardRef((e,t)=>{const{className:r,hideLabel:n=!1,label:s,description:a,variant:i="datepicker",setAnchorRef:o}=e,l=Tp(e,["className","hideLabel","label","description","variant","setAnchorRef"]),u=c.useRef(null),d=_s().translate,{cn:g}=te(),f=i==="datepicker",m={prefix:f?"datepicker-input":"monthpicker-input",iconTitle:{open:f?"openDatePicker":"openMonthPicker",close:f?"closeDatePicker":"closeMonthPicker"}},y=Wa(),{inputProps:w,size:h="medium",inputDescriptionId:A,errorId:I,showErrorMsg:b,hasError:j,readOnly:p}=Vr(e,m.prefix);return v.createElement("div",{className:g(r,"navds-form-field",`navds-form-field--${h}`,"navds-date__field",{"navds-text-field--error":j,"navds-date__field--error":j,"navds-form-field--disabled":!!w.disabled,"navds-text-field--disabled":!!w.disabled,"navds-form-field--readonly":p,"navds-text-field--readonly":p,"navds-date__field--readonly":p})},v.createElement(Ae,{htmlFor:w.id,size:h,className:g("navds-form-field__label",{"navds-sr-only":n})},p&&v.createElement(qs,null),s),!!a&&v.createElement(se,{as:"div",className:g("navds-form-field__description",{"navds-sr-only":n}),id:A,size:h},a),v.createElement("div",{className:g("navds-date__field-wrapper")},v.createElement("input",Object.assign({ref:t},Qe(l,["error","errorId","size"]),w,{autoComplete:"off","aria-controls":y!=null&&y.open?y.ariaId:void 0,readOnly:p,className:g("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${h}`),size:f?11:14})),v.createElement("button",{disabled:w.disabled||p,tabIndex:p||y!=null&&y.open?-1:0,onClick:()=>{y==null||y.onOpen(),o==null||o(u.current)},type:"button",className:g("navds-date__field-button"),ref:u},v.createElement(Kg,{title:d(m.iconTitle[y!=null&&y.open?"close":"open"])}))),v.createElement("div",{className:g("navds-form-field__error"),id:I,"aria-relevant":"additions removals","aria-live":"polite"},b&&v.createElement(ut,{size:h,showIcon:!0},e.error)))}),Np=c.forwardRef((e,t)=>v.createElement(tu,Object.assign({},e,{ref:t})));c.forwardRef((e,t)=>v.createElement(tu,Object.assign({},e,{variant:"monthpicker",ref:t})));var Rp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Pp=c.forwardRef((e,t)=>{var{className:r}=e,n=Rp(e,["className"]);const{cn:s}=te();return v.createElement("div",Object.assign({},n,{ref:t,className:s("navds-modal__body",r)}))});var qp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const _p=c.forwardRef((e,t)=>{var{className:r}=e,n=qp(e,["className"]);const{cn:s}=te();return v.createElement("div",Object.assign({},n,{ref:t,className:s("navds-modal__footer",r)}))});var Mp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const su=c.forwardRef((e,t)=>{var{children:r,className:n,closeButton:s=!0}=e,a=Mp(e,["children","className","closeButton"]);const{cn:i}=te(),o=gt(),l=Gn("global");return v.createElement("div",Object.assign({},a,{ref:t,className:i("navds-modal__header",n)}),o.closeHandler&&s&&v.createElement(Pe,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:u=>{["Enter"," "].includes(u.key)&&u.repeat&&u.preventDefault()},onClick:o.closeHandler,icon:v.createElement(sd,{title:l("close")})}),r)}),Gi=({clientX:e,clientY:t},{left:r,top:n,right:s,bottom:a})=>!(e<r||t<n||e>s||t>a);function Dp(e,t,r){if(!(t&&t.closeButton===!1))return r?()=>{var n;return r()!==!1&&((n=e.current)===null||n===void 0?void 0:n.close())}:()=>{var n;return(n=e.current)===null||n===void 0?void 0:n.close()}}const Rt="navds-modal__document-body";function Sp(e,t,r){v.useEffect(()=>{if(r||!e.current||!t)return;e.current.open&&document.body.classList.add(Rt);const n=new MutationObserver(()=>{var s;!((s=e.current)===null||s===void 0)&&s.open?document.body.classList.add(Rt):document.body.classList.remove(Rt)});return n.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{n.disconnect(),document.body.classList.remove(Rt)}},[e,t,r])}const wr=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function au(e,t){var r="on"+t.type.toLowerCase();return typeof e[r]=="function"&&e[r](t),e.dispatchEvent(t)}function Jr(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function iu(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function xp(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return!0;return!1}function Zs(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function ou(e){var t=["button","input","keygen","select","textarea"],r=t.map(function(i){return i+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=e.querySelector(r.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var s=e.querySelectorAll("*"),a=0;a<s.length&&!(s[a].tagName&&s[a].shadowRoot&&(n=ou(s[a].shadowRoot),n));a++);return n}function Ui(e){return e.isConnected||document.body.contains(e)}function lu(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var r=ue.formSubmitter;if(!r){var n=e.target,s="getRootNode"in n&&n.getRootNode()||document;r=s.activeElement}return!r||r.form!==t?null:r}function Fp(e){if(!e.defaultPrevented){var t=e.target,r=ue.imagemapUseValue,n=lu(e);r===null&&n&&(r=n.value);var s=Jr(t);if(s){var a=n&&n.getAttribute("formmethod")||t.getAttribute("method");a==="dialog"&&(e.preventDefault(),r!=null?s.close(r):s.close())}}}function du(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Fp,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,n=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),s,a=function(i){if(i.target===e){var o="DOMNodeRemoved";r|=i.type.substr(0,o.length)===o,window.clearTimeout(s),s=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,a)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}du.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Ui(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),ue.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=ou(this.dialog_)),iu(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Ui(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!ue.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,ue.needsCentering(this.dialog_)?(ue.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});au(this.dialog_,t)}};var ue={};ue.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,r=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,r)+"px"};ue.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var r=document.styleSheets[t],n=null;try{n=r.cssRules}catch{}if(n)for(var s=0;s<n.length;++s){var a=n[s],i=null;try{i=document.querySelectorAll(a.selectorText)}catch{}if(!(!i||!xp(i,e))){var o=a.style.getPropertyValue("top"),l=a.style.getPropertyValue("bottom");if(o&&o!=="auto"||l&&l!=="auto")return!0}}}return!1};ue.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!ue.isInlinePositionSetByStylesheet(e)};ue.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new du(e)};ue.registerDialog=function(e){e.showModal||ue.forceRegisterDialog(e)};ue.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var r=[];t.forEach(function(n){for(var s=0,a;a=n.removedNodes[s];++s)a instanceof Element&&(a.localName==="dialog"&&r.push(a),r=r.concat(a.querySelectorAll("dialog")))}),r.length&&e(r)}))};ue.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};ue.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};ue.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,r;r=this.pendingDialogStack[t];++t)r.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];if(n){var s=n.dialog.parentNode||document.body;s.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};ue.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Jr(e);){for(var t=0,r;r=this.pendingDialogStack[t];++t)if(r.dialog===e)return t===0;e=e.parentElement}return!1};ue.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),iu(t),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],n=r.dialog,s=n.compareDocumentPosition(t);return s&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};ue.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&au(r.dialog,t)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};ue.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};ue.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};ue.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};wr&&(ue.dm=new ue.DialogManager,ue.formSubmitter=null,ue.imagemapUseValue=null);if(wr){var Hi=document.createElement("form");if(Hi.setAttribute("method","dialog"),Hi.method!=="dialog"){var br=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(br){var Vp=br.get;br.get=function(){return Zs(this)?"dialog":Vp.call(this)};var Lp=br.set;br.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Lp.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",br)}}document.addEventListener("click",function(e){if(ue.formSubmitter=null,ue.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var r=e.composedPath();t=r.shift()||t}if(!(!t||!Zs(t.form))){var n=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!n){if(!(t.localName==="input"&&t.type==="image"))return;ue.imagemapUseValue=e.offsetX+","+e.offsetY}var s=Jr(t);s&&(ue.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,r=Jr(t);if(!r){var n=lu(e),s=n&&n.getAttribute("formmethod")||t.getAttribute("method");s==="dialog"&&e.preventDefault()}});var Bp=HTMLFormElement.prototype.submit,Cp=function(){if(!Zs(this))return Bp.call(this);var e=Jr(this);e&&e.close()};HTMLFormElement.prototype.submit=Cp}var Kp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Pn=c.forwardRef((e,t)=>{var r,n,{header:s,children:a,open:i,onBeforeClose:o,onCancel:l,closeOnBackdropClick:u,width:d,placement:g,portal:f,className:m,"aria-labelledby":y,style:w,onClick:h,onMouseDown:A}=e,I=Kp(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:b}=te(),j=c.useRef(b("navds-modal--polyfilled")),p=c.useRef(null),N=Dr(p,t),O=In(),R=(r=js())===null||r===void 0?void 0:r.rootElement,P=fp({root:R}),D=Wa(!1),F=gt(!1)!==void 0;F&&!D&&console.error("Modals should not be nested"),c.useEffect(()=>{wr&&p.current&&P&&(ue.registerDialog(p.current),p.current.classList.add(j.current)),p.current&&P&&(p.current.autofocus=!0)},[P]),c.useEffect(()=>{p.current&&P&&i!==void 0&&(i&&!p.current.open?p.current.showModal():!i&&p.current.open&&p.current.close())},[P,i]),Sp(p,P,F);const M=typeof d=="string"&&["small","medium"].includes(d),T=b("navds-modal",m,{[j.current]:wr,"navds-modal--autowidth":!d,[`navds-modal--${d}`]:M,"navds-modal--top":g==="top"&&!wr}),_=Object.assign(Object.assign({},w),M?{}:{width:d}),x=c.useRef({clientX:0,clientY:0}),B=J=>{x.current=J},C=u&&!wr,L=J=>{if(J.target!==p.current)return;const ae=p.current.getBoundingClientRect();Gi(x.current,ae)||Gi(J,ae)||o!==void 0&&o()===!1||p.current.close()},V=J=>{o&&o()===!1&&J.preventDefault()},H=!y&&!I["aria-label"]&&s?O:y,X=v.createElement("dialog",Object.assign({},I,{ref:N,className:T,style:_,onCancel:Ar(l,V),onClick:C?Ar(h,L):h,onMouseDown:C?Ar(A,B):A,"aria-labelledby":H}),v.createElement(Im,{closeHandler:Dp(p,s,o),ref:p},s&&v.createElement(su,null,s.label&&v.createElement(Nr,{className:b("navds-modal__label")},s.label),v.createElement(Is,{size:(n=s.size)!==null&&n!==void 0?n:"medium",level:"1",id:O},s.icon&&v.createElement("span",{className:b("navds-modal__header-icon")},s.icon),s.heading)),a));return f?P?Ra.createPortal(X,P):null:X});Pn.Header=su;Pn.Body=Pp;Pn.Footer=_p;var Gp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Up=c.forwardRef((e,t)=>{var{className:r}=e,n=Gp(e,["className"]);const{cn:s}=te();return v.createElement("div",Object.assign({},n,{ref:t,className:s("navds-popover__content",r)}))});var Hp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const _r=c.forwardRef((e,t)=>{var{className:r,children:n,anchorEl:s,arrow:a=!0,open:i,onClose:o,placement:l="top",offset:u,strategy:d,flip:g=!0}=e,f=Hp(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:m}=te(),y=c.useRef(null),w=gt(!1)!==void 0,h=Wa(!1),A=d??(w?"fixed":"absolute"),I=h?!1:g,b=dt(!1),{update:j,refs:p,placement:N,middlewareData:{arrow:{x:O,y:R}={}},floatingStyles:P}=Jd({strategy:A,placement:l,open:i,middleware:[Od(u??(b?8:a?16:4)),I&&Rd({padding:5,fallbackPlacements:["bottom","top"]}),Nd({padding:12}),Pd({element:y,padding:8})]});Rr(()=>{p.setReference(s)},[s]);const D=Dr(p.setFloating,t);Rr(()=>{if(!p.reference.current||!p.floating.current||!i)return;const M=ca(p.reference.current,p.floating.current,j);return()=>M()},[p.floating,p.reference,j,i,s]);const F={top:"bottom",right:"left",bottom:"top",left:"right"}[N.split("-")[0]];return v.createElement(Ef,{asChild:!0,safeZone:{anchor:s,dismissable:p.floating.current},onDismiss:()=>i&&(o==null?void 0:o()),enabled:i},v.createElement("div",Object.assign({ref:D},f,{className:m("navds-popover",r,{"navds-popover--hidden":!i||!s}),style:Object.assign(Object.assign({},f.style),P),"data-placement":N,"aria-hidden":!i||!s}),n,a&&!b&&v.createElement("div",{ref:M=>{y.current=M},style:Object.assign(Object.assign(Object.assign({},O!=null?{left:O}:{}),R!=null?{top:R}:{}),F?{[F]:"-0.5rem"}:{}),className:m("navds-popover__arrow")})))});_r.Content=Up;const Yp={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},$p=({open:e,children:t,onClose:r,anchor:n,locale:s,translate:a,variant:i,popoverProps:o})=>{const l=Gn("global",Ep(s)),{cn:u}=te(),d=c.useRef(null),g=gt(!1)!==void 0;return Am("screen and (min-width: 768px)",!0)&&!g?v.createElement(_r,Object.assign({arrow:!1,anchorEl:n,open:e,onClose:r,placement:"bottom-start",role:"dialog",className:u("navds-date__popover",{"navds-date":i==="month"}),flip:!1},o),t):v.createElement(Pn,{ref:d,open:e,onClose:m=>{m.stopPropagation(),r()},"aria-label":a(Yp[i]),className:u("navds-date__modal",{"navds-date__nested-modal":g,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},v.createElement("div",{className:u("navds-date__modal-body")},t,v.createElement(Pe,{variant:"tertiary",onClick:()=>{var m;return(m=d==null?void 0:d.current)===null||m===void 0?void 0:m.close()},size:"small",type:"button"},l("close"))))};function uu(e){return!!(e&&typeof e=="object"&&"from"in e)}const ea={},Wr={};function Xr(e,t){try{const n=(ea[e]||(ea[e]=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format))(t).split("GMT")[1]||"";return n in Wr?Wr[n]:Yi(n,n.split(":"))}catch{if(e in Wr)return Wr[e];const r=e==null?void 0:e.match(Wp);return r?Yi(e,r.slice(1)):NaN}}const Wp=/([+-]\d\d):?(\d\d)?/;function Yi(e,t){const r=+t[0],n=+(t[1]||0);return Wr[e]=r>0?r*60+n:r*60-n}class On extends Date{constructor(...t){super(),t.length>1&&typeof t[t.length-1]=="string"&&(this.timeZone=t.pop()),this.internal=new Date,isNaN(Xr(this.timeZone,this))?this.setTime(NaN):t.length?typeof t[0]=="number"&&(t.length===1||t.length===2&&typeof t[1]!="number")?this.setTime(t[0]):typeof t[0]=="string"?this.setTime(+new Date(t[0])):t[0]instanceof Date?this.setTime(+t[0]):(this.setTime(+new Date(...t)),gu(this),pa(this)):this.setTime(Date.now())}static tz(t,...r){return r.length?new On(...r,t):new On(Date.now(),t)}withTimeZone(t){return new On(+this,t)}getTimezoneOffset(){return-Xr(this.timeZone,this)}setTime(t){return Date.prototype.setTime.apply(this,arguments),pa(this),+this}[Symbol.for("constructDateFrom")](t){return new On(+new Date(t),this.timeZone)}}const $i=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!$i.test(e))return;const t=e.replace($i,"$1UTC");On.prototype[t]&&(e.startsWith("get")?On.prototype[e]=function(){return this.internal[t]()}:(On.prototype[e]=function(){return Date.prototype[t].apply(this.internal,arguments),zp(this),+this},On.prototype[t]=function(){return Date.prototype[t].apply(this,arguments),pa(this),+this}))});function pa(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function zp(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),gu(e)}function gu(e){const t=Xr(e.timeZone,e),r=new Date(+e);r.setUTCHours(r.getUTCHours()-1);const n=-new Date(+e).getTimezoneOffset(),s=-new Date(+r).getTimezoneOffset(),a=n-s,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();a&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+a);const o=n-t;o&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+o);const l=Xr(e.timeZone,e),d=-new Date(+e).getTimezoneOffset()-l,g=l!==t,f=d-o;if(g&&f){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+f);const m=Xr(e.timeZone,e),y=l-m;y&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+y),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+y))}}class He extends On{static tz(t,...r){return r.length?new He(...r,t):new He(Date.now(),t)}toISOString(){const[t,r,n]=this.tzComponents(),s=`${t}${r}:${n}`;return this.internal.toISOString().slice(0,-1)+s}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[t,r,n,s]=this.internal.toUTCString().split(" ");return`${t==null?void 0:t.slice(0,-1)} ${n} ${r} ${s}`}toTimeString(){const t=this.internal.toUTCString().split(" ")[4],[r,n,s]=this.tzComponents();return`${t} GMT${r}${n}${s} (${Jp(this.timeZone,this)})`}toLocaleString(t,r){return Date.prototype.toLocaleString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleDateString(t,r){return Date.prototype.toLocaleDateString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleTimeString(t,r){return Date.prototype.toLocaleTimeString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}tzComponents(){const t=this.getTimezoneOffset(),r=t>0?"-":"+",n=String(Math.floor(Math.abs(t)/60)).padStart(2,"0"),s=String(Math.abs(t)%60).padStart(2,"0");return[r,n,s]}withTimeZone(t){return new He(+this,t)}[Symbol.for("constructDateFrom")](t){return new He(+new Date(t),this.timeZone)}}function Jp(e,t){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(t).slice(12)}var Z;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(Z||(Z={}));var Ee;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(Ee||(Ee={}));var bn;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(bn||(bn={}));var sn;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(sn||(sn={}));const Wi=5,Xp=4;function Qp(e,t){const r=t.startOfMonth(e),n=r.getDay()>0?r.getDay():7,s=t.addDays(e,-n+1),a=t.addDays(s,Wi*7-1);return t.getMonth(e)===t.getMonth(a)?Wi:Xp}function mu(e,t){const r=t.startOfMonth(e),n=r.getDay();return n===1?r:n===0?t.addDays(r,-1*6):t.addDays(r,-1*(n-1))}function Zp(e,t){const r=mu(e,t),n=Qp(e,t);return t.addDays(r,n*7-1)}class Un{constructor(t,r){this.Date=Date,this.today=()=>{var n;return(n=this.overrides)!=null&&n.today?this.overrides.today():this.options.timeZone?He.tz(this.options.timeZone):new this.Date},this.newDate=(n,s,a)=>{var i;return(i=this.overrides)!=null&&i.newDate?this.overrides.newDate(n,s,a):this.options.timeZone?new He(n,s,a,this.options.timeZone):new Date(n,s,a)},this.addDays=(n,s)=>{var a;return(a=this.overrides)!=null&&a.addDays?this.overrides.addDays(n,s):vt(n,s)},this.addMonths=(n,s)=>{var a;return(a=this.overrides)!=null&&a.addMonths?this.overrides.addMonths(n,s):Fa(n,s)},this.addWeeks=(n,s)=>{var a;return(a=this.overrides)!=null&&a.addWeeks?this.overrides.addWeeks(n,s):wk(n,s)},this.addYears=(n,s)=>{var a;return(a=this.overrides)!=null&&a.addYears?this.overrides.addYears(n,s):Va(n,s)},this.differenceInCalendarDays=(n,s)=>{var a;return(a=this.overrides)!=null&&a.differenceInCalendarDays?this.overrides.differenceInCalendarDays(n,s):zn(n,s)},this.differenceInCalendarMonths=(n,s)=>{var a;return(a=this.overrides)!=null&&a.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(n,s):Tk(n,s)},this.eachMonthOfInterval=n=>{var s;return(s=this.overrides)!=null&&s.eachMonthOfInterval?this.overrides.eachMonthOfInterval(n):Sd(n)},this.endOfBroadcastWeek=n=>{var s;return(s=this.overrides)!=null&&s.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(n):Zp(n,this)},this.endOfISOWeek=n=>{var s;return(s=this.overrides)!=null&&s.endOfISOWeek?this.overrides.endOfISOWeek(n):Nk(n)},this.endOfMonth=n=>{var s;return(s=this.overrides)!=null&&s.endOfMonth?this.overrides.endOfMonth(n):Dd(n)},this.endOfWeek=(n,s)=>{var a;return(a=this.overrides)!=null&&a.endOfWeek?this.overrides.endOfWeek(n,s):xd(n,this.options)},this.endOfYear=n=>{var s;return(s=this.overrides)!=null&&s.endOfYear?this.overrides.endOfYear(n):Rs(n)},this.format=(n,s,a)=>{var o;const i=(o=this.overrides)!=null&&o.format?this.overrides.format(n,s,this.options):gr(n,s,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=n=>{var s;return(s=this.overrides)!=null&&s.getISOWeek?this.overrides.getISOWeek(n):Ba(n)},this.getMonth=(n,s)=>{var a;return(a=this.overrides)!=null&&a.getMonth?this.overrides.getMonth(n,this.options):Ga(n,this.options)},this.getYear=(n,s)=>{var a;return(a=this.overrides)!=null&&a.getYear?this.overrides.getYear(n,this.options):Ua(n,this.options)},this.getWeek=(n,s)=>{var a;return(a=this.overrides)!=null&&a.getWeek?this.overrides.getWeek(n,this.options):Ka(n,this.options)},this.isAfter=(n,s)=>{var a;return(a=this.overrides)!=null&&a.isAfter?this.overrides.isAfter(n,s):Bd(n,s)},this.isBefore=(n,s)=>{var a;return(a=this.overrides)!=null&&a.isBefore?this.overrides.isBefore(n,s):yt(n,s)},this.isDate=n=>{var s;return(s=this.overrides)!=null&&s.isDate?this.overrides.isDate(n):Md(n)},this.isSameDay=(n,s)=>{var a;return(a=this.overrides)!=null&&a.isSameDay?this.overrides.isSameDay(n,s):La(n,s)},this.isSameMonth=(n,s)=>{var a;return(a=this.overrides)!=null&&a.isSameMonth?this.overrides.isSameMonth(n,s):Bv(n,s)},this.isSameYear=(n,s)=>{var a;return(a=this.overrides)!=null&&a.isSameYear?this.overrides.isSameYear(n,s):Hd(n,s)},this.max=n=>{var s;return(s=this.overrides)!=null&&s.max?this.overrides.max(n):Ak(n)},this.min=n=>{var s;return(s=this.overrides)!=null&&s.min?this.overrides.min(n):jk(n)},this.setMonth=(n,s)=>{var a;return(a=this.overrides)!=null&&a.setMonth?this.overrides.setMonth(n,s):Yd(n,s)},this.setYear=(n,s)=>{var a;return(a=this.overrides)!=null&&a.setYear?this.overrides.setYear(n,s):$d(n,s)},this.startOfBroadcastWeek=(n,s)=>{var a;return(a=this.overrides)!=null&&a.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(n,this):mu(n,this)},this.startOfDay=n=>{var s;return(s=this.overrides)!=null&&s.startOfDay?this.overrides.startOfDay(n):Kn(n)},this.startOfISOWeek=n=>{var s;return(s=this.overrides)!=null&&s.startOfISOWeek?this.overrides.startOfISOWeek(n):dr(n)},this.startOfMonth=n=>{var s;return(s=this.overrides)!=null&&s.startOfMonth?this.overrides.startOfMonth(n):ur(n)},this.startOfWeek=(n,s)=>{var a;return(a=this.overrides)!=null&&a.startOfWeek?this.overrides.startOfWeek(n,this.options):Bn(n,this.options)},this.startOfYear=n=>{var s;return(s=this.overrides)!=null&&s.startOfYear?this.overrides.startOfYear(n):pt(n)},this.options={locale:As,...t},this.overrides=r}getDigitMap(){const{numerals:t="latn"}=this.options,r=new Intl.NumberFormat("en-US",{numberingSystem:t}),n={};for(let s=0;s<10;s++)n[s.toString()]=r.format(s);return n}replaceDigits(t){const r=this.getDigitMap();return t.replace(/\d/g,n=>r[n]||n)}formatNumber(t){return this.replaceDigits(t.toString())}}const _n=new Un;class cu{constructor(t,r,n=_n){this.date=t,this.displayMonth=r,this.outside=!!(r&&!n.isSameMonth(t,r)),this.dateLib=n}isEqualTo(t){return this.dateLib.isSameDay(t.date,this.date)&&this.dateLib.isSameMonth(t.displayMonth,this.displayMonth)}}class ey{constructor(t,r){this.date=t,this.weeks=r}}class ny{constructor(t,r){this.days=r,this.weekNumber=t}}function Fn(e,t,r=!1,n=_n){let{from:s,to:a}=e;const{differenceInCalendarDays:i,isSameDay:o}=n;return s&&a?(i(a,s)<0&&([s,a]=[a,s]),i(t,s)>=(r?1:0)&&i(a,t)>=(r?1:0)):!r&&a?o(a,t):!r&&s?o(s,t):!1}function fu(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function za(e){return!!(e&&typeof e=="object"&&"from"in e)}function ku(e){return!!(e&&typeof e=="object"&&"after"in e)}function vu(e){return!!(e&&typeof e=="object"&&"before"in e)}function pu(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function yu(e,t){return Array.isArray(e)&&e.every(t.isDate)}function mn(e,t,r=_n){const n=Array.isArray(t)?t:[t],{isSameDay:s,differenceInCalendarDays:a,isAfter:i}=r;return n.some(o=>{if(typeof o=="boolean")return o;if(r.isDate(o))return s(e,o);if(yu(o,r))return o.includes(e);if(za(o))return Fn(o,e,!1,r);if(pu(o))return Array.isArray(o.dayOfWeek)?o.dayOfWeek.includes(e.getDay()):o.dayOfWeek===e.getDay();if(fu(o)){const l=a(o.before,e),u=a(o.after,e),d=l>0,g=u<0;return i(o.before,o.after)?g&&d:d||g}return ku(o)?a(e,o.after)>0:vu(o)?a(o.before,e)>0:typeof o=="function"?o(e):!1})}function ry(e,t,r){const{disabled:n,hidden:s,modifiers:a,showOutsideDays:i,broadcastCalendar:o,today:l}=t,{isSameDay:u,isSameMonth:d,startOfMonth:g,isBefore:f,endOfMonth:m,isAfter:y}=r,w=t.startMonth&&g(t.startMonth),h=t.endMonth&&m(t.endMonth),A={[Ee.focused]:[],[Ee.outside]:[],[Ee.disabled]:[],[Ee.hidden]:[],[Ee.today]:[]},I={};for(const b of e){const{date:j,displayMonth:p}=b,N=!!(p&&!d(j,p)),O=!!(w&&f(j,w)),R=!!(h&&y(j,h)),P=!!(n&&mn(j,n,r)),D=!!(s&&mn(j,s,r))||O||R||!o&&!i&&N||o&&i===!1&&N,F=u(j,l??r.today());N&&A.outside.push(b),P&&A.disabled.push(b),D&&A.hidden.push(b),F&&A.today.push(b),a&&Object.keys(a).forEach(M=>{const T=a==null?void 0:a[M];T&&mn(j,T,r)&&(I[M]?I[M].push(b):I[M]=[b])})}return b=>{const j={[Ee.focused]:!1,[Ee.disabled]:!1,[Ee.hidden]:!1,[Ee.outside]:!1,[Ee.today]:!1},p={};for(const N in A){const O=A[N];j[N]=O.some(R=>R===b)}for(const N in I)p[N]=I[N].some(O=>O===b);return{...j,...p}}}function ty(e,t,r={}){return Object.entries(e).filter(([,s])=>s===!0).reduce((s,[a])=>(r[a]?s.push(r[a]):t[Ee[a]]?s.push(t[Ee[a]]):t[bn[a]]&&s.push(t[bn[a]]),s),[t[Z.Day]])}function sy(e){return v.createElement("button",{...e})}function ay(e){return v.createElement("span",{...e})}function iy(e){const{size:t=24,orientation:r="left",className:n}=e;return v.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&v.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&v.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&v.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&v.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function oy(e){const{day:t,modifiers:r,...n}=e;return v.createElement("td",{...n})}function ly(e){const{day:t,modifiers:r,...n}=e,s=v.useRef(null);return v.useEffect(()=>{var a;r.focused&&((a=s.current)==null||a.focus())},[r.focused]),v.createElement("button",{ref:s,...n})}function dy(e){const{options:t,className:r,components:n,classNames:s,...a}=e,i=[s[Z.Dropdown],r].join(" "),o=t==null?void 0:t.find(({value:l})=>l===a.value);return v.createElement("span",{"data-disabled":a.disabled,className:s[Z.DropdownRoot]},v.createElement(n.Select,{className:i,...a},t==null?void 0:t.map(({value:l,label:u,disabled:d})=>v.createElement(n.Option,{key:l,value:l,disabled:d},u))),v.createElement("span",{className:s[Z.CaptionLabel],"aria-hidden":!0},o==null?void 0:o.label,v.createElement(n.Chevron,{orientation:"down",size:18,className:s[Z.Chevron]})))}function uy(e){return v.createElement("div",{...e})}function gy(e){return v.createElement("div",{...e})}function my(e){const{calendarMonth:t,displayIndex:r,...n}=e;return v.createElement("div",{...n},e.children)}function cy(e){const{calendarMonth:t,displayIndex:r,...n}=e;return v.createElement("div",{...n})}function fy(e){return v.createElement("table",{...e})}function ky(e){return v.createElement("div",{...e})}const bu=c.createContext(void 0);function fr(){const e=c.useContext(bu);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function vy(e){const{components:t}=fr();return v.createElement(t.Dropdown,{...e})}function py(e){const{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:s,...a}=e,{components:i,classNames:o,labels:{labelPrevious:l,labelNext:u}}=fr(),d=c.useCallback(f=>{s&&(r==null||r(f))},[s,r]),g=c.useCallback(f=>{n&&(t==null||t(f))},[n,t]);return v.createElement("nav",{...a},v.createElement(i.PreviousMonthButton,{type:"button",className:o[Z.PreviousMonthButton],tabIndex:n?void 0:-1,"aria-disabled":n?void 0:!0,"aria-label":l(n),onClick:g},v.createElement(i.Chevron,{disabled:n?void 0:!0,className:o[Z.Chevron],orientation:"left"})),v.createElement(i.NextMonthButton,{type:"button",className:o[Z.NextMonthButton],tabIndex:s?void 0:-1,"aria-disabled":s?void 0:!0,"aria-label":u(s),onClick:d},v.createElement(i.Chevron,{disabled:s?void 0:!0,orientation:"right",className:o[Z.Chevron]})))}function yy(e){const{components:t}=fr();return v.createElement(t.Button,{...e})}function by(e){return v.createElement("option",{...e})}function hy(e){const{components:t}=fr();return v.createElement(t.Button,{...e})}function Iy(e){const{rootRef:t,...r}=e;return v.createElement("div",{...r,ref:t})}function wy(e){return v.createElement("select",{...e})}function Ay(e){const{week:t,...r}=e;return v.createElement("tr",{...r})}function jy(e){return v.createElement("th",{...e})}function Ey(e){return v.createElement("thead",{"aria-hidden":!0},v.createElement("tr",{...e}))}function Ty(e){const{week:t,...r}=e;return v.createElement("th",{...r})}function Oy(e){return v.createElement("th",{...e})}function Ny(e){return v.createElement("tbody",{...e})}function Ry(e){const{components:t}=fr();return v.createElement(t.Dropdown,{...e})}const Py=Object.freeze(Object.defineProperty({__proto__:null,Button:sy,CaptionLabel:ay,Chevron:iy,Day:oy,DayButton:ly,Dropdown:dy,DropdownNav:uy,Footer:gy,Month:my,MonthCaption:cy,MonthGrid:fy,Months:ky,MonthsDropdown:vy,Nav:py,NextMonthButton:yy,Option:by,PreviousMonthButton:hy,Root:Iy,Select:wy,Week:Ay,WeekNumber:Ty,WeekNumberHeader:Oy,Weekday:jy,Weekdays:Ey,Weeks:Ny,YearsDropdown:Ry},Symbol.toStringTag,{value:"Module"}));function qy(e){return{...Py,...e}}function _y(e){const t={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([r,n])=>{r.startsWith("data-")&&(t[r]=n)}),t}function My(){const e={};for(const t in Z)e[Z[t]]=`rdp-${Z[t]}`;for(const t in Ee)e[Ee[t]]=`rdp-${Ee[t]}`;for(const t in bn)e[bn[t]]=`rdp-${bn[t]}`;for(const t in sn)e[sn[t]]=`rdp-${sn[t]}`;return e}function hu(e,t,r){return(r??new Un(t)).format(e,"LLLL y")}const Dy=hu;function Sy(e,t,r){return(r??new Un(t)).format(e,"d")}function xy(e,t=_n){return t.format(e,"LLLL")}function Fy(e,t=_n){return e<10?t.formatNumber(`0${e.toLocaleString()}`):t.formatNumber(`${e.toLocaleString()}`)}function Vy(){return""}function Ly(e,t,r){return(r??new Un(t)).format(e,"cccccc")}function Iu(e,t=_n){return t.format(e,"yyyy")}const By=Iu,Cy=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:hu,formatDay:Sy,formatMonthCaption:Dy,formatMonthDropdown:xy,formatWeekNumber:Fy,formatWeekNumberHeader:Vy,formatWeekdayName:Ly,formatYearCaption:By,formatYearDropdown:Iu},Symbol.toStringTag,{value:"Module"}));function Ky(e){return e!=null&&e.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e!=null&&e.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...Cy,...e}}function Gy(e,t,r,n,s){const{startOfMonth:a,startOfYear:i,endOfYear:o,eachMonthOfInterval:l,getMonth:u}=s;return l({start:i(e),end:o(e)}).map(f=>{const m=n.formatMonthDropdown(f,s),y=u(f),w=t&&f<a(t)||r&&f>a(r)||!1;return{value:y,label:m,disabled:w}})}function Uy(e,t={},r={}){let n={...t==null?void 0:t[Z.Day]};return Object.entries(e).filter(([,s])=>s===!0).forEach(([s])=>{n={...n,...r==null?void 0:r[s]}}),n}function Hy(e,t,r){const n=e.today(),s=t?e.startOfISOWeek(n):e.startOfWeek(n),a=[];for(let i=0;i<7;i++){const o=e.addDays(s,i);a.push(o)}return a}function Yy(e,t,r,n){if(!e||!t)return;const{startOfYear:s,endOfYear:a,addYears:i,getYear:o,isBefore:l,isSameYear:u}=n,d=s(e),g=a(t),f=[];let m=d;for(;l(m,g)||u(m,g);)f.push(m),m=i(m,1);return f.map(y=>{const w=r.formatYearDropdown(y,n);return{value:o(y),label:w,disabled:!1}})}function wu(e,t,r){return(r??new Un(t)).format(e,"LLLL y")}const $y=wu;function Wy(e,t,r,n){let s=(n??new Un(r)).format(e,"PPPP");return t!=null&&t.today&&(s=`Today, ${s}`),s}function Au(e,t,r,n){let s=(n??new Un(r)).format(e,"PPPP");return t.today&&(s=`Today, ${s}`),t.selected&&(s=`${s}, selected`),s}const zy=Au;function Jy(){return""}function Xy(e){return"Choose the Month"}function Qy(e){return"Go to the Next Month"}function Zy(e){return"Go to the Previous Month"}function eb(e,t,r){return(r??new Un(t)).format(e,"cccc")}function nb(e,t){return`Week ${e}`}function rb(e){return"Week Number"}function tb(e){return"Choose the Year"}const sb=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:$y,labelDay:zy,labelDayButton:Au,labelGrid:wu,labelGridcell:Wy,labelMonthDropdown:Xy,labelNav:Jy,labelNext:Qy,labelPrevious:Zy,labelWeekNumber:nb,labelWeekNumberHeader:rb,labelWeekday:eb,labelYearDropdown:tb},Symbol.toStringTag,{value:"Module"})),bt=e=>e instanceof HTMLElement?e:null,na=e=>[...e.querySelectorAll("[data-animated-month]")??[]],ab=e=>bt(e.querySelector("[data-animated-month]")),ra=e=>bt(e.querySelector("[data-animated-caption]")),ta=e=>bt(e.querySelector("[data-animated-weeks]")),ib=e=>bt(e.querySelector("[data-animated-nav]")),ob=e=>bt(e.querySelector("[data-animated-weekdays]"));function lb(e,t,{classNames:r,months:n,focused:s,dateLib:a}){const i=c.useRef(null),o=c.useRef(n),l=c.useRef(!1);c.useLayoutEffect(()=>{const u=o.current;if(o.current=n,!t||!e.current||!(e.current instanceof HTMLElement)||n.length===0||u.length===0||n.length!==u.length)return;const d=a.isSameMonth(n[0].date,u[0].date),g=a.isAfter(n[0].date,u[0].date),f=g?r[sn.caption_after_enter]:r[sn.caption_before_enter],m=g?r[sn.weeks_after_enter]:r[sn.weeks_before_enter],y=i.current,w=e.current.cloneNode(!0);if(w instanceof HTMLElement?(na(w).forEach(b=>{if(!(b instanceof HTMLElement))return;const j=ab(b);j&&b.contains(j)&&b.removeChild(j);const p=ra(b);p&&p.classList.remove(f);const N=ta(b);N&&N.classList.remove(m)}),i.current=w):i.current=null,l.current||d||s)return;const h=y instanceof HTMLElement?na(y):[],A=na(e.current);if(A&&A.every(I=>I instanceof HTMLElement)&&h&&h.every(I=>I instanceof HTMLElement)){l.current=!0,e.current.style.isolation="isolate";const I=ib(e.current);I&&(I.style.zIndex="1"),A.forEach((b,j)=>{const p=h[j];if(!p)return;b.style.position="relative",b.style.overflow="hidden";const N=ra(b);N&&N.classList.add(f);const O=ta(b);O&&O.classList.add(m);const R=()=>{l.current=!1,e.current&&(e.current.style.isolation=""),I&&(I.style.zIndex=""),N&&N.classList.remove(f),O&&O.classList.remove(m),b.style.position="",b.style.overflow="",b.contains(p)&&b.removeChild(p)};p.style.pointerEvents="none",p.style.position="absolute",p.style.overflow="hidden",p.setAttribute("aria-hidden","true");const P=ob(p);P&&(P.style.opacity="0");const D=ra(p);D&&(D.classList.add(g?r[sn.caption_before_exit]:r[sn.caption_after_exit]),D.addEventListener("animationend",R));const F=ta(p);F&&F.classList.add(g?r[sn.weeks_before_exit]:r[sn.weeks_after_exit]),b.insertBefore(p,b.firstChild)})}})}function db(e,t,r,n){const s=e[0],a=e[e.length-1],{ISOWeek:i,fixedWeeks:o,broadcastCalendar:l}=r??{},{addDays:u,differenceInCalendarDays:d,differenceInCalendarMonths:g,endOfBroadcastWeek:f,endOfISOWeek:m,endOfMonth:y,endOfWeek:w,isAfter:h,startOfBroadcastWeek:A,startOfISOWeek:I,startOfWeek:b}=n,j=l?A(s,n):i?I(s):b(s),p=l?f(a):i?m(y(a)):w(y(a)),N=d(p,j),O=g(a,s)+1,R=[];for(let F=0;F<=N;F++){const M=u(j,F);if(t&&h(M,t))break;R.push(M)}const D=(l?35:42)*O;if(o&&R.length<D){const F=D-R.length;for(let M=0;M<F;M++){const T=u(R[R.length-1],1);R.push(T)}}return R}function ub(e){const t=[];return e.reduce((r,n)=>{const s=n.weeks.reduce((a,i)=>[...a,...i.days],t);return[...r,...s]},t)}function gb(e,t,r,n){const{numberOfMonths:s=1}=r,a=[];for(let i=0;i<s;i++){const o=n.addMonths(e,i);if(t&&o>t)break;a.push(o)}return a}function zi(e,t){const{month:r,defaultMonth:n,today:s=t.today(),numberOfMonths:a=1,endMonth:i,startMonth:o}=e;let l=r||n||s;const{differenceInCalendarMonths:u,addMonths:d,startOfMonth:g}=t;if(i&&u(i,l)<0){const f=-1*(a-1);l=d(i,f)}return o&&u(l,o)<0&&(l=o),g(l)}function mb(e,t,r,n){const{addDays:s,endOfBroadcastWeek:a,endOfISOWeek:i,endOfMonth:o,endOfWeek:l,getISOWeek:u,getWeek:d,startOfBroadcastWeek:g,startOfISOWeek:f,startOfWeek:m}=n,y=e.reduce((w,h)=>{const A=r.broadcastCalendar?g(h,n):r.ISOWeek?f(h):m(h),I=r.broadcastCalendar?a(h):r.ISOWeek?i(o(h)):l(o(h)),b=t.filter(O=>O>=A&&O<=I),j=r.broadcastCalendar?35:42;if(r.fixedWeeks&&b.length<j){const O=t.filter(R=>{const P=j-b.length;return R>I&&R<=s(I,P)});b.push(...O)}const p=b.reduce((O,R)=>{const P=r.ISOWeek?u(R):d(R),D=O.find(M=>M.weekNumber===P),F=new cu(R,h,n);return D?D.days.push(F):O.push(new ny(P,[F])),O},[]),N=new ey(h,p);return w.push(N),w},[]);return r.reverseMonths?y.reverse():y}function cb(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:s,startOfDay:a,startOfMonth:i,endOfMonth:o,addYears:l,endOfYear:u,newDate:d,today:g}=t,{fromYear:f,toYear:m,fromMonth:y,toMonth:w}=e;!r&&y&&(r=y),!r&&f&&(r=t.newDate(f,0,1)),!n&&w&&(n=w),!n&&m&&(n=d(m,11,31));const h=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return r?r=i(r):f?r=d(f,0,1):!r&&h&&(r=s(l(e.today??g(),-100))),n?n=o(n):m?n=d(m,11,31):!n&&h&&(n=u(e.today??g())),[r&&a(r),n&&a(n)]}function fb(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:s,numberOfMonths:a=1}=r,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=n,u=s?a:1,d=i(e);if(!t)return o(d,u);if(!(l(t,e)<a))return o(d,u)}function kb(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:s,numberOfMonths:a}=r,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=n,u=s?a??1:1,d=i(e);if(!t)return o(d,-u);if(!(l(d,t)<=0))return o(d,-u)}function vb(e){const t=[];return e.reduce((r,n)=>[...r,...n.weeks],t)}function Ms(e,t){const[r,n]=c.useState(e);return[t===void 0?r:t,n]}function pb(e,t){const[r,n]=cb(e,t),{startOfMonth:s,endOfMonth:a}=t,i=zi(e,t),[o,l]=Ms(i,e.month?i:void 0);c.useEffect(()=>{const N=zi(e,t);l(N)},[e.timeZone]);const u=gb(o,n,e,t),d=db(u,e.endMonth?a(e.endMonth):void 0,e,t),g=mb(u,d,e,t),f=vb(g),m=ub(g),y=kb(o,r,e,t),w=fb(o,n,e,t),{disableNavigation:h,onMonthChange:A}=e,I=N=>f.some(O=>O.days.some(R=>R.isEqualTo(N))),b=N=>{if(h)return;let O=s(N);r&&O<s(r)&&(O=s(r)),n&&O>s(n)&&(O=s(n)),l(O),A==null||A(O)};return{months:g,weeks:f,days:m,navStart:r,navEnd:n,previousMonth:y,nextMonth:w,goToMonth:b,goToDay:N=>{I(N)||b(N.date)}}}var jn;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(jn||(jn={}));function Ji(e){return!e[Ee.disabled]&&!e[Ee.hidden]&&!e[Ee.outside]}function yb(e,t,r,n){let s,a=-1;for(const i of e){const o=t(i);Ji(o)&&(o[Ee.focused]&&a<jn.FocusedModifier?(s=i,a=jn.FocusedModifier):n!=null&&n.isEqualTo(i)&&a<jn.LastFocused?(s=i,a=jn.LastFocused):r(i.date)&&a<jn.Selected?(s=i,a=jn.Selected):o[Ee.today]&&a<jn.Today&&(s=i,a=jn.Today))}return s||(s=e.find(i=>Ji(t(i)))),s}function bb(e,t,r,n,s,a,i){const{ISOWeek:o,broadcastCalendar:l}=a,{addDays:u,addMonths:d,addWeeks:g,addYears:f,endOfBroadcastWeek:m,endOfISOWeek:y,endOfWeek:w,max:h,min:A,startOfBroadcastWeek:I,startOfISOWeek:b,startOfWeek:j}=i;let N={day:u,week:g,month:d,year:f,startOfWeek:O=>l?I(O,i):o?b(O):j(O),endOfWeek:O=>l?m(O):o?y(O):w(O)}[e](r,t==="after"?1:-1);return t==="before"&&n?N=h([n,N]):t==="after"&&s&&(N=A([s,N])),N}function ju(e,t,r,n,s,a,i,o=0){if(o>365)return;const l=bb(e,t,r.date,n,s,a,i),u=!!(a.disabled&&mn(l,a.disabled,i)),d=!!(a.hidden&&mn(l,a.hidden,i)),g=l,f=new cu(l,g,i);return!u&&!d?f:ju(e,t,f,n,s,a,i,o+1)}function hb(e,t,r,n,s){const{autoFocus:a}=e,[i,o]=c.useState(),l=yb(t.days,r,n||(()=>!1),i),[u,d]=c.useState(a?l:void 0);return{isFocusTarget:w=>!!(l!=null&&l.isEqualTo(w)),setFocused:d,focused:u,blur:()=>{o(u),d(void 0)},moveFocus:(w,h)=>{if(!u)return;const A=ju(w,h,u,t.navStart,t.navEnd,e,s);A&&(t.goToDay(A),d(A))}}}function Ib(e,t){const{selected:r,required:n,onSelect:s}=e,[a,i]=Ms(r,s?r:void 0),o=s?r:a,{isSameDay:l}=t,u=m=>(o==null?void 0:o.some(y=>l(y,m)))??!1,{min:d,max:g}=e;return{selected:o,select:(m,y,w)=>{let h=[...o??[]];if(u(m)){if((o==null?void 0:o.length)===d||n&&(o==null?void 0:o.length)===1)return;h=o==null?void 0:o.filter(A=>!l(A,m))}else(o==null?void 0:o.length)===g?h=[m]:h=[...h,m];return s||i(h),s==null||s(h,m,y,w),h},isSelected:u}}function wb(e,t,r=0,n=0,s=!1,a=_n){const{from:i,to:o}=t||{},{isSameDay:l,isAfter:u,isBefore:d}=a;let g;if(!i&&!o)g={from:e,to:r>0?void 0:e};else if(i&&!o)l(i,e)?s?g={from:i,to:void 0}:g=void 0:d(e,i)?g={from:e,to:i}:g={from:i,to:e};else if(i&&o)if(l(i,e)&&l(o,e))s?g={from:i,to:o}:g=void 0;else if(l(i,e))g={from:i,to:r>0?void 0:e};else if(l(o,e))g={from:e,to:r>0?void 0:e};else if(d(e,i))g={from:e,to:o};else if(u(e,i))g={from:i,to:e};else if(u(e,o))g={from:i,to:e};else throw new Error("Invalid range");if(g!=null&&g.from&&(g!=null&&g.to)){const f=a.differenceInCalendarDays(g.to,g.from);n>0&&f>n?g={from:e,to:void 0}:r>1&&f<r&&(g={from:e,to:void 0})}return g}function Ab(e,t,r=_n){const n=Array.isArray(t)?t:[t];let s=e.from;const a=r.differenceInCalendarDays(e.to,e.from),i=Math.min(a,6);for(let o=0;o<=i;o++){if(n.includes(s.getDay()))return!0;s=r.addDays(s,1)}return!1}function Xi(e,t,r=_n){return Fn(e,t.from,!1,r)||Fn(e,t.to,!1,r)||Fn(t,e.from,!1,r)||Fn(t,e.to,!1,r)}function jb(e,t,r=_n){const n=Array.isArray(t)?t:[t];if(n.filter(o=>typeof o!="function").some(o=>typeof o=="boolean"?o:r.isDate(o)?Fn(e,o,!1,r):yu(o,r)?o.some(l=>Fn(e,l,!1,r)):za(o)?o.from&&o.to?Xi(e,{from:o.from,to:o.to},r):!1:pu(o)?Ab(e,o.dayOfWeek,r):fu(o)?r.isAfter(o.before,o.after)?Xi(e,{from:r.addDays(o.after,1),to:r.addDays(o.before,-1)},r):mn(e.from,o,r)||mn(e.to,o,r):ku(o)||vu(o)?mn(e.from,o,r)||mn(e.to,o,r):!1))return!0;const i=n.filter(o=>typeof o=="function");if(i.length){let o=e.from;const l=r.differenceInCalendarDays(e.to,e.from);for(let u=0;u<=l;u++){if(i.some(d=>d(o)))return!0;o=r.addDays(o,1)}}return!1}function Eb(e,t){const{disabled:r,excludeDisabled:n,selected:s,required:a,onSelect:i}=e,[o,l]=Ms(s,i?s:void 0),u=i?s:o;return{selected:u,select:(f,m,y)=>{const{min:w,max:h}=e,A=f?wb(f,u,w,h,a,t):void 0;return n&&r&&(A!=null&&A.from)&&A.to&&jb({from:A.from,to:A.to},r,t)&&(A.from=f,A.to=void 0),i||l(A),i==null||i(A,f,m,y),A},isSelected:f=>u&&Fn(u,f,!1,t)}}function Tb(e,t){const{selected:r,required:n,onSelect:s}=e,[a,i]=Ms(r,s?r:void 0),o=s?r:a,{isSameDay:l}=t;return{selected:o,select:(g,f,m)=>{let y=g;return!n&&o&&o&&l(g,o)&&(y=void 0),s||i(y),s==null||s(y,g,f,m),y},isSelected:g=>o?l(o,g):!1}}function Ob(e,t){const r=Tb(e,t),n=Ib(e,t),s=Eb(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return s;default:return}}function Nb(e){var Kr;let t=e;t.timeZone&&(t={...e},t.today&&(t.today=new He(t.today,t.timeZone)),t.month&&(t.month=new He(t.month,t.timeZone)),t.defaultMonth&&(t.defaultMonth=new He(t.defaultMonth,t.timeZone)),t.startMonth&&(t.startMonth=new He(t.startMonth,t.timeZone)),t.endMonth&&(t.endMonth=new He(t.endMonth,t.timeZone)),t.mode==="single"&&t.selected?t.selected=new He(t.selected,t.timeZone):t.mode==="multiple"&&t.selected?t.selected=(Kr=t.selected)==null?void 0:Kr.map(ie=>new He(ie,t.timeZone)):t.mode==="range"&&t.selected&&(t.selected={from:t.selected.from?new He(t.selected.from,t.timeZone):void 0,to:t.selected.to?new He(t.selected.to,t.timeZone):void 0}));const{components:r,formatters:n,labels:s,dateLib:a,locale:i,classNames:o}=c.useMemo(()=>{const ie={...As,...t.locale};return{dateLib:new Un({locale:ie,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib),components:qy(t.components),formatters:Ky(t.formatters),labels:{...sb,...t.labels},locale:ie,classNames:{...My(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]),{captionLayout:l,mode:u,navLayout:d,numberOfMonths:g=1,onDayBlur:f,onDayClick:m,onDayFocus:y,onDayKeyDown:w,onDayMouseEnter:h,onDayMouseLeave:A,onNextClick:I,onPrevClick:b,showWeekNumber:j,styles:p}=t,{formatCaption:N,formatDay:O,formatMonthDropdown:R,formatWeekNumber:P,formatWeekNumberHeader:D,formatWeekdayName:F,formatYearDropdown:M}=n,T=pb(t,a),{days:_,months:x,navStart:B,navEnd:C,previousMonth:L,nextMonth:V,goToMonth:H}=T,X=ry(_,t,a),{isSelected:J,select:ae,selected:Fe}=Ob(t,a)??{},{blur:ee,focused:G,isFocusTarget:ne,moveFocus:re,setFocused:de}=hb(t,T,X,J??(()=>!1),a),{labelDayButton:Le,labelGridcell:Ce,labelGrid:Ke,labelMonthDropdown:Mn,labelNav:ln,labelPrevious:kn,labelNext:er,labelWeekday:nr,labelWeekNumber:kr,labelWeekNumberHeader:Hn,labelYearDropdown:E}=s,q=c.useMemo(()=>Hy(a,t.ISOWeek),[a,t.ISOWeek]),S=u!==void 0||m!==void 0,$=c.useCallback(()=>{L&&(H(L),b==null||b(L))},[L,H,b]),U=c.useCallback(()=>{V&&(H(V),I==null||I(V))},[H,V,I]),K=c.useCallback((ie,je)=>we=>{we.preventDefault(),we.stopPropagation(),de(ie),ae==null||ae(ie.date,je,we),m==null||m(ie.date,je,we)},[ae,m,de]),Q=c.useCallback((ie,je)=>we=>{de(ie),y==null||y(ie.date,je,we)},[y,de]),le=c.useCallback((ie,je)=>we=>{ee(),f==null||f(ie.date,je,we)},[ee,f]),pe=c.useCallback((ie,je)=>we=>{const Yn={ArrowLeft:["day",t.dir==="rtl"?"after":"before"],ArrowRight:["day",t.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[we.shiftKey?"year":"month","before"],PageDown:[we.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Yn[we.key]){we.preventDefault(),we.stopPropagation();const[vn,Et]=Yn[we.key];re(vn,Et)}w==null||w(ie.date,je,we)},[re,w,t.dir]),en=c.useCallback((ie,je)=>we=>{h==null||h(ie.date,je,we)},[h]),vr=c.useCallback((ie,je)=>we=>{A==null||A(ie.date,je,we)},[A]),wn=c.useCallback(ie=>je=>{const we=Number(je.target.value),Yn=a.setMonth(a.startOfMonth(ie),we);H(Yn)},[a,H]),Vs=c.useCallback(ie=>je=>{const we=Number(je.target.value),Yn=a.setYear(a.startOfMonth(ie),we);H(Yn)},[a,H]),{className:Lr,style:Br}=c.useMemo(()=>({className:[o[Z.Root],t.className].filter(Boolean).join(" "),style:{...p==null?void 0:p[Z.Root],...t.style}}),[o,t.className,t.style,p]),Ls=_y(t),Cr=c.useRef(null);lb(Cr,!!t.animate,{classNames:o,months:x,focused:G,dateLib:a});const Bs={dayPickerProps:t,selected:Fe,select:ae,isSelected:J,months:x,nextMonth:V,previousMonth:L,goToMonth:H,getModifiers:X,components:r,classNames:o,styles:p,labels:s,formatters:n};return v.createElement(bu.Provider,{value:Bs},v.createElement(r.Root,{rootRef:t.animate?Cr:void 0,className:Lr,style:Br,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],...Ls},v.createElement(r.Months,{className:o[Z.Months],style:p==null?void 0:p[Z.Months]},!t.hideNavigation&&!d&&v.createElement(r.Nav,{"data-animated-nav":t.animate?"true":void 0,className:o[Z.Nav],style:p==null?void 0:p[Z.Nav],"aria-label":ln(),onPreviousClick:$,onNextClick:U,previousMonth:L,nextMonth:V}),x.map((ie,je)=>{const we=Gy(ie.date,B,C,n,a),Yn=Yy(B,C,n,a);return v.createElement(r.Month,{"data-animated-month":t.animate?"true":void 0,className:o[Z.Month],style:p==null?void 0:p[Z.Month],key:je,displayIndex:je,calendarMonth:ie},d==="around"&&!t.hideNavigation&&je===0&&v.createElement(r.PreviousMonthButton,{type:"button",className:o[Z.PreviousMonthButton],tabIndex:L?void 0:-1,"aria-disabled":L?void 0:!0,"aria-label":kn(L),onClick:$,"data-animated-button":t.animate?"true":void 0},v.createElement(r.Chevron,{disabled:L?void 0:!0,className:o[Z.Chevron],orientation:t.dir==="rtl"?"right":"left"})),v.createElement(r.MonthCaption,{"data-animated-caption":t.animate?"true":void 0,className:o[Z.MonthCaption],style:p==null?void 0:p[Z.MonthCaption],calendarMonth:ie,displayIndex:je},l!=null&&l.startsWith("dropdown")?v.createElement(r.DropdownNav,{className:o[Z.Dropdowns],style:p==null?void 0:p[Z.Dropdowns]},l==="dropdown"||l==="dropdown-months"?v.createElement(r.MonthsDropdown,{className:o[Z.MonthsDropdown],"aria-label":Mn(),classNames:o,components:r,disabled:!!t.disableNavigation,onChange:wn(ie.date),options:we,style:p==null?void 0:p[Z.Dropdown],value:a.getMonth(ie.date)}):v.createElement("span",null,R(ie.date,a)),l==="dropdown"||l==="dropdown-years"?v.createElement(r.YearsDropdown,{className:o[Z.YearsDropdown],"aria-label":E(a.options),classNames:o,components:r,disabled:!!t.disableNavigation,onChange:Vs(ie.date),options:Yn,style:p==null?void 0:p[Z.Dropdown],value:a.getYear(ie.date)}):v.createElement("span",null,M(ie.date,a)),v.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},N(ie.date,a.options,a))):v.createElement(r.CaptionLabel,{className:o[Z.CaptionLabel],role:"status","aria-live":"polite"},N(ie.date,a.options,a))),d==="around"&&!t.hideNavigation&&je===g-1&&v.createElement(r.NextMonthButton,{type:"button",className:o[Z.NextMonthButton],tabIndex:V?void 0:-1,"aria-disabled":V?void 0:!0,"aria-label":er(V),onClick:U,"data-animated-button":t.animate?"true":void 0},v.createElement(r.Chevron,{disabled:V?void 0:!0,className:o[Z.Chevron],orientation:t.dir==="rtl"?"left":"right"})),je===g-1&&d==="after"&&!t.hideNavigation&&v.createElement(r.Nav,{"data-animated-nav":t.animate?"true":void 0,className:o[Z.Nav],style:p==null?void 0:p[Z.Nav],"aria-label":ln(),onPreviousClick:$,onNextClick:U,previousMonth:L,nextMonth:V}),v.createElement(r.MonthGrid,{role:"grid","aria-multiselectable":u==="multiple"||u==="range","aria-label":Ke(ie.date,a.options,a)||void 0,className:o[Z.MonthGrid],style:p==null?void 0:p[Z.MonthGrid]},!t.hideWeekdays&&v.createElement(r.Weekdays,{"data-animated-weekdays":t.animate?"true":void 0,className:o[Z.Weekdays],style:p==null?void 0:p[Z.Weekdays]},j&&v.createElement(r.WeekNumberHeader,{"aria-label":Hn(a.options),className:o[Z.WeekNumberHeader],style:p==null?void 0:p[Z.WeekNumberHeader],scope:"col"},D()),q.map((vn,Et)=>v.createElement(r.Weekday,{"aria-label":nr(vn,a.options,a),className:o[Z.Weekday],key:Et,style:p==null?void 0:p[Z.Weekday],scope:"col"},F(vn,a.options,a)))),v.createElement(r.Weeks,{"data-animated-weeks":t.animate?"true":void 0,className:o[Z.Weeks],style:p==null?void 0:p[Z.Weeks]},ie.weeks.map((vn,Et)=>v.createElement(r.Week,{className:o[Z.Week],key:vn.weekNumber,style:p==null?void 0:p[Z.Week],week:vn},j&&v.createElement(r.WeekNumber,{week:vn,style:p==null?void 0:p[Z.WeekNumber],"aria-label":kr(vn.weekNumber,{locale:i}),className:o[Z.WeekNumber],scope:"row",role:"rowheader"},P(vn.weekNumber,a)),vn.days.map(Ue=>{const{date:An}=Ue,fe=X(Ue);if(fe[Ee.focused]=!fe.hidden&&!!(G!=null&&G.isEqualTo(Ue)),fe[bn.selected]=(J==null?void 0:J(An))||fe.selected,za(Fe)){const{from:Cs,to:Ks}=Fe;fe[bn.range_start]=!!(Cs&&Ks&&a.isSameDay(An,Cs)),fe[bn.range_end]=!!(Cs&&Ks&&a.isSameDay(An,Ks)),fe[bn.range_middle]=Fn(Fe,An,!0,a)}const ig=Uy(fe,p,t.modifiersStyles),og=ty(fe,o,t.modifiersClassNames),lg=!S&&!fe.hidden?Ce(An,fe,a.options,a):void 0;return v.createElement(r.Day,{key:`${a.format(An,"yyyy-MM-dd")}_${a.format(Ue.displayMonth,"yyyy-MM")}`,day:Ue,modifiers:fe,className:og.join(" "),style:ig,role:"gridcell","aria-selected":fe.selected||void 0,"aria-label":lg,"data-day":a.format(An,"yyyy-MM-dd"),"data-month":Ue.outside?a.format(An,"yyyy-MM"):void 0,"data-selected":fe.selected||void 0,"data-disabled":fe.disabled||void 0,"data-hidden":fe.hidden||void 0,"data-outside":Ue.outside||void 0,"data-focused":fe.focused||void 0,"data-today":fe.today||void 0},!fe.hidden&&S?v.createElement(r.DayButton,{className:o[Z.DayButton],style:p==null?void 0:p[Z.DayButton],type:"button",day:Ue,modifiers:fe,disabled:fe.disabled||void 0,tabIndex:ne(Ue)?0:-1,"aria-label":Le(An,fe,a.options,a),onClick:K(Ue,fe),onBlur:le(Ue,fe),onFocus:Q(Ue,fe),onKeyDown:pe(Ue,fe),onMouseEnter:en(Ue,fe),onMouseLeave:vr(Ue,fe)},O(An,a.options,a)):!fe.hidden&&O(Ue.date,a.options,a))}))))))})),t.footer&&v.createElement(r.Footer,{className:o[Z.Footer],style:p==null?void 0:p[Z.Footer],role:"status","aria-live":"polite"},t.footer)))}var Rb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Eu=c.forwardRef((e,t)=>{var{as:r="div",className:n,above:s,below:a,variant:i,asChild:o}=e,l=Rb(e,["as","className","above","below","variant","asChild"]);const{cn:u}=te(),d=i==="show"?s:a,g=i==="show"?a:s,f=o?Mr:r;return v.createElement(f,Object.assign({},l,{ref:t,className:u("navds-responsive",n,{[`navds-responsive__above--${d}`]:d,[`navds-responsive__below--${g}`]:g})}))}),Pb=c.forwardRef((e,t)=>v.createElement(Eu,Object.assign({},e,{ref:t,variant:"hide"}))),Ja=c.forwardRef((e,t)=>v.createElement(Eu,Object.assign({},e,{ref:t,variant:"show"})));function hn(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function qb({day:e,fromDate:t,toDate:r}){const n=r&&zn(e,Kn(r))>0,s=t&&zn(Kn(t),e)>0;return n||s||!1}const Tu="dd.MM.yyyy",_b="MMMM yyyy",Ou=[Tu,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...Ou];const sa=(e,t,r,n,s)=>{let a;const i=Ou;if(s){for(const o of i)if(a=Er(e,o,t,{locale:r}),hn(a)&&!aa(e,t,r,i))return a;for(const o of[...i.map(l=>l.replace("yyyy","yy"))])if(a=Er(e,o,t,{locale:r}),hn(a)&&aa(e,t,r,i)){const l=Mb(e,o,t,r);return hn(new Date(l))?new Date(l):new Date("Invalid date")}return new Date("Invalid date")}for(const o of i)if(a=Er(e,o,t,{locale:r}),hn(a)&&!aa(e,t,r,i))return a;return new Date("Invalid date")};function aa(e,t,r,n){let s;const a=n.map(i=>i.replace("yyyy","yy"));for(const i of a)if(s=Er(e,i,t,{locale:r}),hn(s))return!0;return!1}function Mb(e,t,r,n){const s=Er(Qi(e,"19"),t.replace("yy","yyyy"),r,{locale:n}),a=Er(Qi(e,"20"),t.replace("yy","yyyy"),r,{locale:n});return hn(s)&&hn(a)?yt(s,Gv(new Date,{years:80}))?a:s:new Date("Invalid date")}function Qi(e,t){const r=e.slice(-2);return`${e.slice(0,e.length-2)}${t}${r}`}const Gr=(e,t,r,n)=>gr(e,n??Tu,{locale:t}),Db=({month:e,start:t,end:r})=>{if(!e)return;let n=e;return t&&yt(n,t)&&(n=t),r&&Bd(n,r)&&(n=r),ur(n)};function Sb(e,t,r,n){return Sd({start:pt(e),end:Rs(e)}).map(i=>{const o=gr(i,"LLLL",{locale:n}),l=Ga(i),u=t&&i<ur(t)||r&&i>ur(r)||!1;return{value:l,label:o,disabled:u}})}function xb(e,t,r){if(!e||!t)return;const n=pt(e),s=Rs(t),a=[];let i=n;for(;yt(i,s)||Hd(i,s);)a.push(i),i=Va(i,1);return a.map(o=>{const l=gr(o,"yyyy",{locale:r});return{value:Ua(o),label:l,disabled:!1}})}function Fb({captionLayout:e,startMonth:t,endMonth:r,today:n}){const s=e==="dropdown",a=n??new Date;return t?t=ur(t):!t&&s&&(t=pt(Va(a,-100))),r?r=Dd(r):!r&&s&&(r=Rs(a)),[t&&Kn(t),r&&Kn(r)]}var Vb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Lb=e=>{var{day:t,modifiers:r,locale:n,children:s}=e,a=Vb(e,["day","modifiers","locale","children"]);const{cn:i}=te(),o=c.useRef(null);return c.useEffect(()=>{var l;r.focused&&((l=o.current)===null||l===void 0||l.focus())},[r.focused]),r.hidden?v.createElement(v.Fragment,null):v.createElement("button",Object.assign({},a,{ref:o,"aria-hidden":t.outside,"aria-pressed":!!r.selected,"aria-label":gr(t.date,"cccc d",{locale:n}),"data-pressed":r.selected,"data-today":r.today||void 0,className:i(a.className,{"rdp-day_disabled":r.disabled,"rdp-day_selected":r.selected,"rdp-day_range_start":r.range_start,"rdp-day_range_middle":r.range_middle,"rdp-day_range_end":r.range_end,"rdp-day_today":r.today,"rdp-day_outside":r.outside,"rdp-day__weekend":r.weekend})}),s)};var Bb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ya=c.forwardRef((e,t)=>{const{inputProps:r,errorId:n,showErrorMsg:s,hasError:a,size:i,inputDescriptionId:o,readOnly:l}=Vr(e,"select"),{children:u,label:d,className:g,description:f,htmlSize:m,hideLabel:y=!1,style:w}=e,h=Bb(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:A}=te(),I={onMouseDown:b=>{l&&(b.preventDefault(),b.target.focus())},onKeyDown:b=>{l&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(b.key)&&b.preventDefault()}};return v.createElement("div",{className:A(g,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":l,"navds-select--error":a,"navds-select--readonly":l})},v.createElement(Ae,{htmlFor:r.id,size:i,className:A("navds-form-field__label",{"navds-sr-only":y})},l&&v.createElement(Xd,null),d),!!f&&v.createElement(se,{className:A("navds-form-field__description",{"navds-sr-only":y}),id:o,size:i,as:"div"},f),v.createElement("div",{className:A("navds-select__container"),style:w},v.createElement("select",Object.assign({},Qe(h,["error","errorId","size","readOnly"]),r,I,{ref:t,className:A("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:m}),u),v.createElement(ws,{className:A("navds-select__chevron"),"aria-hidden":!0})),v.createElement("div",{className:A("navds-form-field__error"),id:n,"aria-relevant":"additions removals","aria-live":"polite"},s&&v.createElement(ut,{size:i,showIcon:!0},e.error)))}),Nu=({week:{weekNumber:e,days:t},onWeekNumberClick:r,className:n,style:s,showOnDesktop:a})=>{const i=_s().translate,{cn:o}=te(),{getModifiers:l}=fr(),u=c.useMemo(()=>t.filter(g=>{const f=l(g);return!(f.hidden||f.outside||f.disabled)}).length===0,[t,l]),d=a?Ja:Pb;return!r||u?v.createElement(d,{above:"sm",asChild:!0},v.createElement("td",{className:"rdp-cell"},v.createElement(Nr,{as:"span",textColor:"subtle",className:n,style:s,"aria-label":i("weekNumber",{week:e})},e))):v.createElement(d,{above:"sm",asChild:!0},v.createElement("td",{className:o("rdp-cell",{"navds-date__week-wrapper":!a})},v.createElement(Pe,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:s,className:o("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{r(e,t.map(g=>g.date))},icon:v.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},Cb=({onWeekNumberClick:e,weeks:t})=>{const r=_s().translate,{cn:n}=te(),s=In();return e?v.createElement(Ja,{below:"sm",asChild:!0},v.createElement("table",{className:"rdp-table",role:"grid"},v.createElement("tbody",{className:"rdp-tbody"},v.createElement("tr",{className:n("rdp-row navds-date__week-row")},v.createElement(Nr,{as:"th",weight:"semibold",className:n("rdp-cell navds-date__week-cell")},v.createElement("span",{className:n("navds-date__week-wrapper"),id:s},r("week"))),t==null?void 0:t.map(a=>v.createElement(Nu,{key:a.weekNumber,week:a,onWeekNumberClick:e,showOnDesktop:!1,className:n("navds-date__week-wrapper")})))))):null};var Kb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Gb=e=>{var{children:t,calendarMonth:r,locale:n,onWeekNumberClick:s}=e,a=Kb(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:o,previousMonth:l,nextMonth:u}=fr(),{captionLayout:d}=i,{cn:g}=te(),f=_s().translate,m=c.useCallback((b,j)=>{const p=Number(j.target.value),N=Yd(ur(b),p);o(N)},[o]),y=c.useCallback((b,j)=>{const p=Number(j.target.value),N=$d(ur(b),p);o(N)},[o]),[w,h]=Fb({captionLayout:d==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),A=Sb(r.date,w,h,n),I=xb(w,h,n);return v.createElement("div",Object.assign({},Qe(a,["displayIndex"])),v.createElement("div",{className:g("navds-date__caption")},(d==null?void 0:d.startsWith("dropdown"))&&v.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:g("navds-sr-only")},gr(r.date,"LLLL y",{locale:n})),v.createElement(Pe,{variant:"tertiary-neutral",disabled:!l,onClick:()=>l&&o(l),icon:v.createElement(xg,{title:f("goToPreviousMonth")}),className:g("navds-date__caption-button"),type:"button"}),d!=null&&d.startsWith("dropdown")?v.createElement("div",{className:g("navds-date__caption")},v.createElement(ya,{label:f("month"),hideLabel:!0,className:g("navds-date__caption__month"),onChange:b=>m(r.date,b),value:Ga(r.date)},A==null?void 0:A.map(({value:b,label:j,disabled:p})=>v.createElement("option",{key:b,value:b,disabled:p},j))),v.createElement(ya,{label:f("year"),hideLabel:!0,className:g("navds-date__caption__year"),onChange:b=>y(r.date,b),value:Ua(r.date)},I==null?void 0:I.map(({value:b,label:j,disabled:p})=>v.createElement("option",{key:b,value:b,disabled:p},j)))):v.createElement(se,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:g("navds-date__caption-label")},gr(r.date,"LLLL y",{locale:n})),v.createElement(Pe,{variant:"tertiary-neutral",icon:v.createElement(Vg,{title:f("goToNextMonth")}),onClick:()=>u&&o(u),disabled:!u,className:g("navds-date__caption-button"),type:"button"})),v.createElement(Cb,{weeks:r.weeks,onWeekNumberClick:s}),t)};var Ub=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Hb={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},Ru=e=>{var{className:t,dropdownCaption:r,disabled:n=[],disableWeekends:s=!1,showWeekNumber:a=!1,selected:i,fixedWeeks:o=!1,onWeekNumberClick:l,fromDate:u,toDate:d,month:g,mode:f,handleSelect:m,locale:y}=e,w=Ub(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:h}=te(),A=qd(),I=y?eu(y):A,b=f??"single";return v.createElement(Nb,Object.assign({captionLayout:r?"dropdown":"label",hideNavigation:!0,locale:I,mode:b,onSelect:(j,p)=>{if(b!=="range"||j||!uu(i)){m(j);return}if(!i.to){m({from:p,to:void 0});return}let N;La(i.to,p)?N=void 0:yt(p,i.to)?N={from:p,to:i.to}:N={from:i.to,to:p},m(N)},selected:i,classNames:Hb,components:{MonthCaption:()=>v.createElement(v.Fragment,null),DayButton:c.useCallback(j=>v.createElement(Lb,Object.assign({},j,{locale:I})),[I]),Month:c.useCallback(j=>v.createElement(Gb,Object.assign({},j,{locale:I,onWeekNumberClick:b==="multiple"?l:void 0})),[I,b,l]),Day:c.useCallback(j=>v.createElement("td",Object.assign({},Qe(j,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:c.useCallback(j=>v.createElement(Nu,Object.assign({},j,{showOnDesktop:!0,onWeekNumberClick:b==="multiple"?l:void 0})),[b,l]),WeekNumberHeader:c.useCallback(j=>v.createElement(Ja,{above:"sm",asChild:!0},v.createElement("th",Object.assign({},j))),[]),Weekdays:c.useCallback(j=>v.createElement("thead",Object.assign({},j,{className:"rdp-head","aria-hidden":!0}),v.createElement("tr",{className:"rdp-head_row"},j.children)),[])},className:h("navds-date",t),disabled:j=>s&&us(j)||mn(j,n)||qb({day:j,fromDate:u,toDate:d}),weekStartsOn:1,modifiers:{weekend:j=>s&&us(j)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:a,fixedWeeks:o,showOutsideDays:!0,startMonth:u,endMonth:d,month:Db({month:g,start:u,end:d})},Qe(w,["onSelect","role","id","defaultSelected"])))};var Yb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const $b=c.forwardRef((e,t)=>{var{className:r,locale:n,translations:s,selected:a,defaultSelected:i,onSelect:o,mode:l}=e,u=Yb(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:d}=te(),g=Gn("DatePicker",s,nu(n)),[f,m]=tt({defaultValue:i,value:a,onChange:y=>o==null?void 0:o(y)});return v.createElement(ru,{translate:g},v.createElement("div",{ref:t,className:d("navds-date__standalone-wrapper",r)},v.createElement(Ru,Object.assign({},u,{locale:n,handleSelect:m,selected:f,mode:l}))))});var Wb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const fs=c.forwardRef((e,t)=>{var{children:r,locale:n,translations:s,selected:a,id:i,defaultSelected:o,wrapperClassName:l,open:u,onClose:d,onOpenToggle:g,strategy:f,mode:m}=e,y=Wb(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const w=Gn("DatePicker",s,nu(n)),{cn:h}=te(),A=In(i),[I,b]=tt({defaultValue:!1,value:u}),[j,p]=c.useState(null),N=Dr(p,t),[O,R]=tt({defaultValue:o,value:a,onChange:P=>{var D;let F=!1;m==="single"&&P?F=!0:uu(P)&&P.from&&P.to&&(F=!0,La(P.from,P.to)&&(F=!1)),F&&(d==null||d(),b(!1)),(D=y==null?void 0:y.onSelect)===null||D===void 0||D.call(y,P)}});return v.createElement(ru,{translate:w},v.createElement(Op,{open:I,onOpen:()=>{b(P=>!P),g==null||g()},ariaId:A,defined:!0},v.createElement("div",{ref:N,className:h("navds-date__wrapper",l)},r,v.createElement($p,{open:I,anchor:j,onClose:()=>{d==null||d(),I&&b(!1)},locale:n,translate:w,variant:m??"single",popoverProps:{id:A,strategy:f}},v.createElement(Ru,Object.assign({},y,{locale:n,handleSelect:R,selected:O,mode:m}))))))});fs.Standalone=$b;fs.Input=Np;const zb=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),Jb=(e={})=>{var t;const{locale:r,required:n,defaultSelected:s,today:a=new Date,fromDate:i,toDate:o,disabled:l,disableWeekends:u,onDateChange:d,inputFormat:g,onValidate:f,defaultMonth:m,allowTwoDigitYear:y=!0}=e,[w,h]=c.useState(null),A=qd(),I=r?eu(r):A,[b,j]=c.useState(s),[p,N]=c.useState((t=b??m)!==null&&t!==void 0?t:a),[O,R]=c.useState(b),[P,D]=c.useState(!1),F=b?Gr(b,I,"date",g):"",[M,T]=c.useState(F),_=c.useCallback(ee=>{var G,ne;D(ee),ee&&N((ne=(G=O??b)!==null&&G!==void 0?G:m)!==null&&ne!==void 0?ne:a)},[m,b,O,a]),x=ee=>{d==null||d(ee),R(ee)},B=(ee={})=>f==null?void 0:f(zb(ee));return{datepickerProps:{month:p,onMonthChange:N,onDayClick:(ee,{selected:G})=>{if(!(G&&n)){if(ee&&!G&&(_(!1),w==null||w.focus()),G){x(void 0),T(""),B({isValidDate:!1,isEmpty:!0});return}x(ee),B(),N(ee),T(ee?Gr(ee,I,"date",g):"")}},selected:O??new Date("Invalid date"),locale:r,fromDate:i,toDate:o,today:a,open:P,onClose:()=>{_(!1),w==null||w.focus()},onOpenToggle:()=>_(!P),disabled:l,disableWeekends:u},inputProps:{onChange:ee=>{T(ee.target.value);const G=sa(ee.target.value,a,I,"date",y),ne=i&&G&&zn(i,G)>0,re=o&&G&&zn(G,o)>0;if(!hn(G)||u&&us(G)||l&&mn(G,l)){x(void 0),B({isInvalid:!hn(G),isWeekend:u&&us(G),isDisabled:l&&mn(G,l),isValidDate:!1,isEmpty:!ee.target.value,isBefore:ne??!1,isAfter:re??!1});return}if(ne||re){x(void 0),B({isValidDate:!1,isBefore:ne??!1,isAfter:re??!1});return}x(G),B(),N(m??G)},onFocus:ee=>{if(ee.target.readOnly)return;const G=sa(ee.target.value,a,I,"date",y);if(hn(G)){T(Gr(G,I,"date",g));const ne=i&&G&&zn(i,G)>0,re=o&&G&&zn(G,o)>0;!ne&&!re&&N(G)}},onBlur:ee=>{const G=sa(ee.target.value,a,I,"date",y);hn(G)&&T(Gr(G,I,"date",g))},value:M,setAnchorRef:h},reset:()=>{var ee;x(b),N((ee=b??m)!==null&&ee!==void 0?ee:a),T(F??""),j(s)},selectedDay:O,setSelected:ee=>{var G;x(ee),N((G=ee??m)!==null&&G!==void 0?G:a),T(ee?Gr(ee,I,"date",g):"")}}};function Ge(e,t,r,n){return n?typeof n=="string"?{[`--__${e}c-${t}-${r}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([s,a])=>[`--__${e}c-${t}-${r}-${s}`,a])):{}}const Xb={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Zi=(e,t,r,n,s,a)=>t.split(" ").map((i,o,l)=>{var u;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let d=`var(--${a}-${r}-${i})`;if(n.includes(i))d=i==="px"?"1px":i;else if(i.startsWith("space"))d=`var(--${a}-${i})`;else{const g=`--${a}-spacing-${i}`;d=`var(${(u=Xb[g])!==null&&u!==void 0?u:g})`}return s?i==="0"?"0":`calc(-1 * ${d})`:d}).join(" ");function un(e,t,r,n,s,a=!1,i=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${t}-${r}-xs`]:Zi(r,s,n,i,a,e)};const o={};return Object.entries(s).forEach(([l,u])=>{o[`--__${e}c-${t}-${r}-${l}`]=Zi(r,u,n,i,a,e)}),o}const Qb=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Zb=({children:e,className:t,padding:r,paddingInline:n,paddingBlock:s,margin:a,marginInline:i,marginBlock:o,width:l,minWidth:u,maxWidth:d,height:g,minHeight:f,maxHeight:m,position:y,inset:w,top:h,right:A,left:I,bottom:b,overflow:j,overflowX:p,overflowY:N,flexBasis:O,flexGrow:R,flexShrink:P,gridColumn:D})=>{const F=dt(!1),{cn:M}=te(),T=F?"ax":"a",_=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},un(T,"r","p","spacing",r)),un(T,"r","pi","spacing",n)),un(T,"r","pb","spacing",s)),un(T,"r","m","spacing",a)),un(T,"r","mi","spacing",i)),un(T,"r","mb","spacing",o)),Ge(T,"r","w",l)),Ge(T,"r","minw",u)),Ge(T,"r","maxw",d)),Ge(T,"r","h",g)),Ge(T,"r","minh",f)),Ge(T,"r","maxh",m)),Ge(T,"r","position",y)),un(T,"r","inset","spacing",w)),un(T,"r","top","spacing",h)),un(T,"r","right","spacing",A)),un(T,"r","bottom","spacing",b)),un(T,"r","left","spacing",I)),Ge(T,"r","overflow",j)),Ge(T,"r","overflowx",p)),Ge(T,"r","overflowy",N)),Ge(T,"r","flex-basis",O)),Ge(T,"r","flex-grow",R)),Ge(T,"r","flex-shrink",P)),Ge(T,"r","grid-column",D));return v.createElement(Mr,{className:M({className:t,"navds-r-p":r,"navds-r-pi":n,"navds-r-pb":s,"navds-r-m":a,"navds-r-mi":i,"navds-r-mb":o,"navds-r-w":l,"navds-r-minw":u,"navds-r-maxw":d,"navds-r-h":g,"navds-r-minh":f,"navds-r-maxh":m,"navds-r-position":y,"navds-r-inset":w,"navds-r-top":h,"navds-r-right":A,"navds-r-bottom":b,"navds-r-left":I,"navds-r-overflow":j,"navds-r-overflowx":p,"navds-r-overflowy":N,"navds-r-flex-basis":O,"navds-r-flex-grow":R,"navds-r-flex-shrink":P,"navds-r-grid-column":D}),style:_},e)};var eh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Pu=c.forwardRef((e,t)=>{var{children:r,className:n,as:s="div",align:a,justify:i,wrap:o=!0,gap:l,style:u,direction:d="row",asChild:g}=e,f=eh(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const y=dt(!1)?"ax":"a",{cn:w}=te(),h=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},u),un(y,"stack","gap","spacing",l)),Ge(y,"stack","direction",d)),Ge(y,"stack","align",a)),Ge(y,"stack","justify",i)),A=g?Mr:s;return v.createElement(Zb,Object.assign({},f),v.createElement(A,Object.assign({},Qe(f,Qb),{ref:t,style:h,className:w("navds-stack",n,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":l,"navds-stack-align":a,"navds-stack-justify":i,"navds-stack-direction":d,"navds-stack-wrap":o})}),r))});var nh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const he=c.forwardRef((e,t)=>{var{as:r="div"}=e,n=nh(e,["as"]);return v.createElement(Pu,Object.assign({as:r},n,{ref:t,direction:"row"}))});var rh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const De=c.forwardRef((e,t)=>{var{as:r="div"}=e,n=rh(e,["as"]);return v.createElement(Pu,Object.assign({as:r},n,{ref:t,direction:"column",wrap:!1}))}),Tr=()=>{const{cn:e}=te();return v.createElement("span",{className:e("navds-stack__spacer")})};var th=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Xa=c.forwardRef((e,t)=>{var{as:r="a",className:n,underline:s=!0,variant:a,inlineText:i=!1,"data-color":o}=e,l=th(e,["as","className","underline","variant","inlineText","data-color"]);const u=dt(!1),{cn:d}=te();let g;return u?g=a:g=a??"action",v.createElement(r,Object.assign({"data-color":o??sh(g),"data-variant":g},l,{ref:t,className:d("navds-link",n,{[`navds-link--${g}`]:g,"navds-link--remove-underline":!s,"navds-link--inline-text":i})}))});function sh(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var ah=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ih=c.forwardRef((e,t)=>{var{className:r}=e,n=ah(e,["className"]);const{cn:s}=te();return v.createElement("tbody",Object.assign({},n,{ref:t,className:s("navds-table__body",r)}))});var oh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const qu=c.forwardRef((e,t)=>{var{className:r,children:n,align:s,textSize:a}=e,i=oh(e,["className","children","align","textSize"]);const{cn:o}=te();return v.createElement("th",Object.assign({ref:t,className:o("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":a==="small"})},i),n)}),_u=c.createContext(null);var lh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const dh=c.forwardRef((e,t)=>{var r,n,s,a,{className:i,children:o,sortable:l=!1,sortKey:u}=e,d=lh(e,["className","children","sortable","sortKey"]);const g=c.useContext(_u),{cn:f}=te();return l&&!u&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),v.createElement(qu,Object.assign({scope:"col",ref:t,className:f(i),"aria-sort":l?((r=g==null?void 0:g.sort)===null||r===void 0?void 0:r.orderBy)===u?(n=g==null?void 0:g.sort)===null||n===void 0?void 0:n.direction:"none":void 0},d),l?v.createElement("button",{type:"button",className:f("navds-table__sort-button"),onClick:l&&u?()=>{var m;return(m=g==null?void 0:g.onSortChange)===null||m===void 0?void 0:m.call(g,u)}:void 0},o,((s=g==null?void 0:g.sort)===null||s===void 0?void 0:s.orderBy)===u?((a=g==null?void 0:g.sort)===null||a===void 0?void 0:a.direction)==="descending"?v.createElement(cm,{"aria-hidden":!0}):v.createElement(km,{"aria-hidden":!0}):v.createElement(Bg,{"aria-hidden":!0})):o)});var uh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Mu=c.forwardRef((e,t)=>{var{className:r,children:n="",align:s,textSize:a}=e,i=uh(e,["className","children","align","textSize"]);const{cn:o}=te();return v.createElement(se,Object.assign({as:"td",ref:t,className:o("navds-table__data-cell",r,{[`navds-table__data-cell--align-${s}`]:s}),size:a},i),n)});var gh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const mh=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function ch(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function eo(e){return typeof e=="string"&&e[e.length-1]==="%"&&ch(e.substring(0,e.length-1))}function ia(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="none")}function fh(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="")}const kh=e=>{var{children:t,className:r,innerClassName:n,duration:s=250,easing:a="ease",height:i}=e,o=gh(e,["children","className","innerClassName","duration","easing","height"]);const{cn:l}=te(),u=c.useRef(i),d=c.useRef(null),g=c.useRef(),f=c.useRef(),m=c.useRef(i),y=c.useRef("visible"),w=mh?0:s;typeof m.current=="number"?(typeof i!="string"&&(m.current=i<0?0:i),y.current="hidden"):eo(m.current)&&(m.current=i==="0%"?0:i,y.current="hidden");const[h,A]=c.useState(m.current),[I,b]=c.useState(y.current),[j,p]=c.useState(!1);c.useEffect(()=>{ia(d.current,m.current)},[]),c.useEffect(()=>{if(i!==u.current&&d.current){fh(d.current,u.current),d.current.style.overflow="hidden";const P=d.current.offsetHeight;d.current.style.overflow="";const D=w;let F,M,T="hidden",_;const x=u.current==="auto";typeof i=="number"?(F=i<0?0:i,M=F):eo(i)?(F=i==="0%"?0:i,M=F):(F=P,M="auto",T=void 0),x&&(M=F,F=P),A(F),b("hidden"),p(!x),clearTimeout(f.current),clearTimeout(g.current),x?(_=!0,f.current=setTimeout(()=>{A(M),b(T),p(_)},50),g.current=setTimeout(()=>{p(!1),ia(d.current,M)},D)):f.current=setTimeout(()=>{A(M),b(T),p(!1),i!=="auto"&&ia(d.current,F)},D)}return u.current=i,()=>{clearTimeout(f.current),clearTimeout(g.current)}},[i]);const N={height:h,overflow:I};j&&(N.transition=`height ${w}ms ${a} 0ms`,N.WebkitTransition=N.transition);const R=typeof o["aria-hidden"]<"u"?o["aria-hidden"]:i===0;return v.createElement("div",Object.assign({},o,{className:l(r),style:N}),v.createElement("div",{"aria-hidden":R,className:l(n),ref:d},t))};var vh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Du=c.forwardRef((e,t)=>{var{className:r,selected:n=!1,shadeOnHover:s=!0}=e,a=vh(e,["className","selected","shadeOnHover"]);const{cn:i}=te();return v.createElement("tr",Object.assign({},a,{ref:t,className:i("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":s})}))});var ph=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const yh=c.forwardRef((e,t)=>{var{className:r,children:n,content:s,togglePlacement:a="left",defaultOpen:i=!1,open:o,onOpenChange:l,expansionDisabled:u=!1,expandOnRowClick:d=!1,colSpan:g=999,contentGutter:f,onClick:m}=e,y=ph(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:w}=te(),[h,A]=tt({defaultValue:i,value:o,onChange:l}),I=Gn("global"),b=In(),j=N=>{A(O=>!O),N.stopPropagation()},p=N=>{d&&!u&&!Su(N.target)&&j(N)};return v.createElement(v.Fragment,null,v.createElement(Du,Object.assign({},y,{ref:t,className:w("navds-table__expandable-row",r,{"navds-table__expandable-row--open":h,"navds-table__expandable-row--expansion-disabled":u,"navds-table__expandable-row--clickable":d}),onClick:Ar(m,p)}),a==="right"&&n,v.createElement(Mu,{className:w("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":h}),onClick:u?()=>null:j},!u&&v.createElement("button",{className:w("navds-table__toggle-expand-button"),type:"button","aria-controls":b,"aria-expanded":h,onClick:j},v.createElement(ws,{className:w("navds-table__expandable-icon"),title:I(h?"showLess":"showMore")}))),a==="left"&&n),v.createElement("tr",{"data-state":h?"open":"closed",className:w("navds-table__expanded-row"),"aria-hidden":!h,id:b},v.createElement("td",{colSpan:g,className:w("navds-table__expanded-row-cell")},v.createElement(kh,{className:w("navds-table__expanded-row-collapse"),innerClassName:w(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${f??a}`),height:h?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function Su(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Su(e.parentElement)}var bh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const hh=c.forwardRef((e,t)=>{var{className:r}=e,n=bh(e,["className"]);const{cn:s}=te();return v.createElement("thead",Object.assign({},n,{ref:t,className:s("navds-table__header",r)}))});var Ih=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Te=c.forwardRef((e,t)=>{var{className:r,zebraStripes:n=!1,size:s="medium",onSortChange:a,sort:i,stickyHeader:o=!1}=e,l=Ih(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:u}=te();return v.createElement(_u.Provider,{value:{onSortChange:a,sort:i}},v.createElement("table",Object.assign({},l,{ref:t,className:u("navds-table",`navds-table--${s}`,r,{"navds-table--zebra-stripes":n,"navds-table--sticky-header":o})})))});Te.Header=hh;Te.Body=ih;Te.Row=Du;Te.ColumnHeader=dh;Te.HeaderCell=qu;Te.DataCell=Mu;Te.ExpandableRow=yh;var wh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ah=c.forwardRef((e,t)=>{var{children:r,className:n,variant:s,size:a="medium",icon:i,"data-color":o}=e,l=wh(e,["children","className","variant","size","icon","data-color"]);const{cn:u}=te(),d=(s==null?void 0:s.endsWith("-filled"))&&"strong",g=(s==null?void 0:s.endsWith("-moderate"))&&"moderate";return v.createElement(se,Object.assign({"data-color":o??jh(s),"data-variant":d||g||"outline"},l,{ref:t,as:"span",size:a==="medium"?"medium":"small",className:u("navds-tag",n,`navds-tag--${s}`,`navds-tag--${a}`)}),i&&v.createElement("span",{className:u("navds-tag__icon--left")},i),r)});function jh(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var Eh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const xu=c.forwardRef((e,t)=>{var{children:r,className:n,arrow:s=!0,placement:a="top",open:i,defaultOpen:o=!1,onOpenChange:l,offset:u,content:d,delay:g=150,id:f,keys:m,maxChar:y=80,describesChild:w=!1}=e,h=Eh(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:A}=te(),[I,b]=tt({defaultValue:o,value:i,onChange:l}),j=c.useRef(null),p=gt(!1),N=p?p.ref.current:void 0,{x:O,y:R,strategy:P,context:D,placement:F,middlewareData:{arrow:{x:M,y:T}={},hide:{referenceHidden:_}={}},refs:x}=Jd({placement:a,open:I,onOpenChange:X=>b(X),middleware:[Od(u??(s?8:4)),Nd(),Rd({padding:5,fallbackPlacements:["bottom","top"]}),Pd({element:j,padding:5})],whileElementsMounted:p?(X,J,ae)=>ca(X,J,ae,{animationFrame:!0}):ca,strategy:p?"fixed":void 0}),{getReferenceProps:B,getFloatingProps:C}=Ip([gp(D,{handleClose:jp(),restMs:g}),hp(D),yp(D)]),L=In(f),V=Dr(t,x.setFloating);if(!r||(r==null?void 0:r.type)===v.Fragment||r===v.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(d==null?void 0:d.length)>y&&I&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${d.length}
Tooltip-content: ${d}`);const H=w?I?{"aria-describedby":L}:{title:d}:{"aria-label":d};return v.createElement(v.Fragment,null,v.createElement(Mr,Object.assign({ref:x.setReference},B(),H,{"aria-keyshortcuts":m?m.join("+"):void 0}),r),v.createElement(cf,{rootElement:N,asChild:!0},I&&v.createElement("div",Object.assign({},C(Object.assign(Object.assign({},h),{ref:V,style:{position:P,top:R??0,left:O??0,visibility:_?"hidden":"visible"},role:"tooltip",id:L,className:A("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":F,"data-state":"open"}),d,m&&v.createElement("span",{className:A("navds-tooltip__keys"),"aria-hidden":!0},m.map(X=>v.createElement(Nr,{as:"kbd",key:X,className:A("navds-tooltip__key")},X))),s&&v.createElement("div",{ref:X=>{j.current=X},className:A("navds-tooltip__arrow"),style:{left:M!=null?`${M}px`:"",top:T!=null?`${T}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[F]]:"-3.5px"}}))))}),Th=e=>{const t=Vr(e,"fieldset"),{inputProps:r}=t;return Object.assign(Object.assign({},t),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var Oh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Nh=c.forwardRef((e,t)=>{var r,n,s;const{inputProps:a,errorId:i,showErrorMsg:o,hasError:l,size:u,readOnly:d,inputDescriptionId:g}=Th(e),{cn:f}=te(),m=c.useContext(cs),{children:y,className:w,errorPropagation:h=!0,legend:A,description:I,hideLegend:b,nativeReadOnly:j=!0}=e,p=Oh(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return v.createElement(cs.Provider,{value:{error:h?(r=e.error)!==null&&r!==void 0?r:m==null?void 0:m.error:void 0,errorId:lt({[i]:o,[(n=m==null?void 0:m.errorId)!==null&&n!==void 0?n:""]:!!(m!=null&&m.error)}),size:u,disabled:(s=e.disabled)!==null&&s!==void 0?s:!1,readOnly:d}},v.createElement("fieldset",Object.assign({},Qe(p,["errorId","error","size","readOnly"]),Qe(a,["aria-describedby","aria-invalid"]),{ref:t,className:f(w,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":l,"navds-fieldset--readonly":d})}),v.createElement(Ae,{size:u,as:"legend",className:f("navds-fieldset__legend",{"navds-sr-only":!!b})},d&&(j?v.createElement(qs,null):v.createElement(Xd,null)),A),!!I&&v.createElement(se,{className:f("navds-fieldset__description",{"navds-sr-only":!!b}),id:g,size:u??"medium",as:"div"},e.description),y,v.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:f("navds-fieldset__error")},o&&v.createElement(ut,{size:u,showIcon:!0},e.error))))});var Rh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Fu=v.createContext(null),Ph=c.forwardRef((e,t)=>{var r,n,{children:s,className:a,name:i,defaultValue:o,value:l,onChange:u=()=>{},required:d,readOnly:g}=e,f=Rh(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:m}=te(),y=c.useContext(cs),w=In();return v.createElement(Nh,Object.assign({},f,{readOnly:g,ref:t,className:m(a,"navds-radio-group",`navds-radio-group--${(n=(r=f.size)!==null&&r!==void 0?r:y==null?void 0:y.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),v.createElement(Fu.Provider,{value:{name:i??`radioGroupName-${w}`,defaultValue:o,value:l,onChange:u,required:d}},v.createElement("div",{className:m("navds-radio-buttons")},s)))});var qh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const _h=e=>{const t=c.useContext(Fu),r=Vr(Qe(e,["description"]),"radio"),{inputProps:n,readOnly:s}=r,a=qh(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},a),{readOnly:s,inputProps:Object.assign(Object.assign({},n),{name:t==null?void 0:t.name,defaultChecked:(t==null?void 0:t.defaultValue)===void 0?void 0:(t==null?void 0:t.defaultValue)===e.value,checked:(t==null?void 0:t.value)===void 0?void 0:(t==null?void 0:t.value)===e.value,onChange:i=>{var o,l;s||((o=e.onChange)===null||o===void 0||o.call(e,i),(l=t==null?void 0:t.onChange)===null||l===void 0||l.call(t,e.value))},onClick:i=>{var o;if(s){i.preventDefault();return}(o=e==null?void 0:e.onClick)===null||o===void 0||o.call(e,i)},required:t==null?void 0:t.required,type:"radio"})})},no=c.forwardRef((e,t)=>{const{cn:r}=te(),{inputProps:n,size:s,hasError:a,readOnly:i}=_h(e),o=In(),l=In();return v.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${s}`,{"navds-radio--error":a,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i}),"data-color":a?"danger":e["data-color"]},v.createElement("input",Object.assign({},Qe(e,["children","size","description","readOnly"]),Qe(n,["aria-invalid"]),{"aria-labelledby":lt(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[l]:e.description}),className:r("navds-radio__input"),ref:t})),v.createElement("label",{htmlFor:n.id,className:r("navds-radio__label")},v.createElement("span",{className:r("navds-radio__content")},v.createElement(se,{as:"span",id:o,size:s,"aria-hidden":!0},e.children),e.description&&v.createElement(se,{as:"span",id:l,size:s,className:r("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var Mh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ro=(e,t,r)=>{const{outerHeightStyle:n,overflow:s}=t;return r.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==s)?(r.current+=1,t):e},to=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Pt(e){return parseInt(e,10)||0}const Dh=c.forwardRef((e,t)=>{var r,n,{className:s,onChange:a,maxRows:i,minRows:o=1,autoScrollbar:l,style:u,value:d}=e,g=Mh(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:f}=c.useRef(d!=null),m=c.useRef(null),y=Dr(m,t),w=c.useRef(null),h=c.useRef(0),[A,I]=c.useState({outerHeightStyle:0}),b=v.useCallback(()=>{const O=m.current,P=to(O).getComputedStyle(O);if(P.width==="0px")return{outerHeightStyle:0};const D=w.current;D.style.width=P.width,D.value=O.value||g.placeholder||"x",D.value.slice(-1)===`
`&&(D.value+=" ");const F=P.boxSizing,M=Pt(P.paddingBottom)+Pt(P.paddingTop),T=Pt(P.borderBottomWidth)+Pt(P.borderTopWidth),_=D.scrollHeight-M;D.value="x";const x=D.scrollHeight-M;let B=_;o&&(B=Math.max(Number(o)*x,B)),i&&(B=Math.min(Number(i)*x,B)),B=Math.max(B,x);const C=B+(F==="border-box"?M+T:0),L=Math.abs(B-_)<=1;return{outerHeightStyle:C,overflow:L}},[i,o,g.placeholder]),j=()=>{const O=b();so(O)||I(R=>ro(R,O,h))};Rr(()=>{const O=()=>{const M=b();so(M)||ss.flushSync(()=>{I(T=>ro(T,M,h))})},R=ed(()=>{var M,T,_;if(h.current=0,!((M=m.current)===null||M===void 0)&&M.style.height||!((T=m.current)===null||T===void 0)&&T.style.width){((_=m.current)===null||_===void 0?void 0:_.style.overflow)==="hidden"&&I(x=>Object.assign(Object.assign({},x),{overflow:!1}));return}O()},166,!0),P=m.current,D=to(P);D.addEventListener("resize",R);let F;return typeof ResizeObserver<"u"&&(F=new ResizeObserver(R),F.observe(P)),()=>{R.clear(),D.removeEventListener("resize",R),F&&F.disconnect()}},[b]),Rr(()=>{j()}),c.useEffect(()=>{h.current=0},[d]);const p=O=>{h.current=0,f||j(),a&&a(O)},N=Object.assign({"--__ac-textarea-height":A.outerHeightStyle+"px","--__axc-textarea-height":A.outerHeightStyle+"px",overflow:A.overflow&&!l&&!(!((r=m.current)===null||r===void 0)&&r.style.height)&&!(!((n=m.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},u);return v.createElement(v.Fragment,null,v.createElement("textarea",Object.assign({value:d,onChange:p,ref:y,rows:o,style:N},g,{className:s})),v.createElement("textarea",{"aria-hidden":!0,className:s,readOnly:!0,ref:w,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function so(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Sh=({maxLengthId:e,maxLength:t,currentLength:r,size:n,i18n:s})=>{const{cn:a}=te(),i=Gn("Textarea",{charsLeft:s!=null&&s.counterLeft?`{chars} ${s.counterLeft}`:void 0,charsTooMany:s!=null&&s.counterTooMuch?`{chars} ${s.counterTooMuch}`:void 0}),o=t-r,[l,u]=c.useState(o);return c.useEffect(()=>{const d=ed(()=>{u(o)},2e3);return d(),()=>{d.clear()}},[o]),v.createElement(v.Fragment,null,v.createElement("span",{id:e,className:a("navds-sr-only")},i("maxLength",{maxLength:t})),o<20&&v.createElement("span",{role:"status",className:a("navds-textarea__sr-counter navds-sr-only")},ao(l,i)),v.createElement(se,{className:a("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:n},ao(o,i)))},ao=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var xh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Fh=c.forwardRef((e,t)=>{var r,n,s;const{inputProps:a,errorId:i,showErrorMsg:o,hasError:l,size:u,inputDescriptionId:d}=Vr(e,"textarea"),{label:g,className:f,description:m,maxLength:y,hideLabel:w=!1,resize:h,UNSAFE_autoScrollbar:A,i18n:I,readOnly:b}=e,j=xh(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:p}=te(),N=In(),O=y!==void 0&&y>0,[R,P]=c.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),D=()=>{let M=j!=null&&j.minRows?j==null?void 0:j.minRows:3;return u==="small"&&(M=j!=null&&j.minRows?j==null?void 0:j.minRows:2),M},F=lt(a["aria-describedby"],{[N??""]:O});return v.createElement("div",{className:p(f,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!a.disabled,"navds-form-field--readonly":b,"navds-textarea--readonly":b,"navds-textarea--error":l,"navds-textarea--autoscrollbar":A,[`navds-textarea--resize-${h===!0?"both":h}`]:h})},v.createElement(Ae,{htmlFor:a.id,size:u,className:p("navds-form-field__label",{"navds-sr-only":w})},b&&v.createElement(qs,null),g),!!m&&v.createElement(se,{className:p("navds-form-field__description",{"navds-sr-only":w}),id:d,size:u,as:"div"},m),v.createElement(Dh,Object.assign({},Qe(j,["error","errorId","size"]),a,{onChange:Ar(e.onChange,e.value===void 0?M=>P(M.target.value):void 0),minRows:D(),autoScrollbar:A,ref:t,readOnly:b,className:p("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},F?{"aria-describedby":F}:{})),O&&!b&&!a.disabled&&v.createElement(Sh,{maxLengthId:N,maxLength:y,currentLength:(s=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:R.length,size:u,i18n:I}),v.createElement("div",{className:p("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&v.createElement(ut,{size:u,showIcon:!0},e.error)))});var Vh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Lh=c.forwardRef((e,t)=>{const{cn:r}=te(),{inputProps:n,errorId:s,showErrorMsg:a,hasError:i,size:o,inputDescriptionId:l}=Vr(e,"textField"),{label:u,className:d,description:g,htmlSize:f,hideLabel:m=!1,type:y="text",readOnly:w}=e,h=Vh(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return v.createElement("div",{className:r(d,"navds-form-field",`navds-form-field--${o}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!n.disabled,"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":w,"navds-text-field--readonly":w})},v.createElement(Ae,{htmlFor:n.id,size:o,className:r("navds-form-field__label",{"navds-sr-only":m})},w&&v.createElement(qs,null),u),!!g&&v.createElement(se,{className:r("navds-form-field__description",{"navds-sr-only":m}),id:l,size:o,as:"div"},g),v.createElement("input",Object.assign({},Qe(h,["error","errorId","size"]),n,{ref:t,type:y,readOnly:w,className:r("navds-text-field__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:f})),v.createElement("div",{className:r("navds-form-field__error"),id:s,"aria-relevant":"additions removals","aria-live":"polite"},a&&v.createElement(ut,{size:o,showIcon:!0},e.error)))});var Ve=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Ve||{}),ht=e=>e.type==="checkbox",ar=e=>e instanceof Date,We=e=>e==null;const Vu=e=>typeof e=="object";var Se=e=>!We(e)&&!Array.isArray(e)&&Vu(e)&&!ar(e),Lu=e=>Se(e)&&e.target?ht(e.target)?e.target.checked:e.target.value:e,Bh=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Bu=(e,t)=>e.has(Bh(t)),Ch=e=>{const t=e.constructor&&e.constructor.prototype;return Se(t)&&t.hasOwnProperty("isPrototypeOf")},Qa=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Be(e){let t;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Qa&&(e instanceof Blob||n))&&(r||Se(e)))if(t=r?[]:{},!r&&!Ch(e))t=e;else for(const s in e)e.hasOwnProperty(s)&&(t[s]=Be(e[s]));else return e;return t}var Ds=e=>/^\w*$/.test(e),Re=e=>e===void 0,Za=e=>Array.isArray(e)?e.filter(Boolean):[],ei=e=>Za(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Y=(e,t,r)=>{if(!t||!Se(e))return r;const n=(Ds(t)?[t]:ei(t)).reduce((s,a)=>We(s)?s:s[a],e);return Re(n)||n===e?Re(e[t])?r:e[t]:n},an=e=>typeof e=="boolean",be=(e,t,r)=>{let n=-1;const s=Ds(t)?[t]:ei(t),a=s.length,i=a-1;for(;++n<a;){const o=s[n];let l=r;if(n!==i){const u=e[o];l=Se(u)||Array.isArray(u)?u:isNaN(+s[n+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=l,e=e[o]}};const ks={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},pn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Dn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ni=v.createContext(null);ni.displayName="HookFormContext";const Zn=()=>v.useContext(ni),Kh=e=>{const{children:t,...r}=e;return v.createElement(ni.Provider,{value:r},t)};var Cu=(e,t,r,n=!0)=>{const s={defaultValues:t._defaultValues};for(const a in e)Object.defineProperty(s,a,{get:()=>{const i=a;return t._proxyFormState[i]!==pn.all&&(t._proxyFormState[i]=!n||pn.all),r&&(r[i]=!0),e[i]}});return s};const ri=typeof window<"u"?c.useLayoutEffect:c.useEffect;function Gh(e){const t=Zn(),{control:r=t.control,disabled:n,name:s,exact:a}=e||{},[i,o]=v.useState(r._formState),l=v.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return ri(()=>r._subscribe({name:s,formState:l.current,exact:a,callback:u=>{!n&&o({...r._formState,...u})}}),[s,n,a]),v.useEffect(()=>{l.current.isValid&&r._setValid(!0)},[r]),v.useMemo(()=>Cu(i,r,l.current,!1),[i,r])}var Nn=e=>typeof e=="string",Ku=(e,t,r,n,s)=>Nn(e)?(n&&t.watch.add(e),Y(r,e,s)):Array.isArray(e)?e.map(a=>(n&&t.watch.add(a),Y(r,a))):(n&&(t.watchAll=!0),r);function Uh(e){const t=Zn(),{control:r=t.control,name:n,defaultValue:s,disabled:a,exact:i}=e||{},o=v.useRef(s),[l,u]=v.useState(r._getWatch(n,o.current));return ri(()=>r._subscribe({name:n,formState:{values:!0},exact:i,callback:d=>!a&&u(Ku(n,r._names,d.values||r._formValues,!1,o.current))}),[n,r,a,i]),v.useEffect(()=>r._removeUnmounted()),l}function It(e){const t=Zn(),{name:r,disabled:n,control:s=t.control,shouldUnregister:a}=e,i=Bu(s._names.array,r),o=Uh({control:s,name:r,defaultValue:Y(s._formValues,r,Y(s._defaultValues,r,e.defaultValue)),exact:!0}),l=Gh({control:s,name:r,exact:!0}),u=v.useRef(e),d=v.useRef(s.register(r,{...e.rules,value:o,...an(e.disabled)?{disabled:e.disabled}:{}})),g=v.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!Y(l.errors,r)},isDirty:{enumerable:!0,get:()=>!!Y(l.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!Y(l.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!Y(l.validatingFields,r)},error:{enumerable:!0,get:()=>Y(l.errors,r)}}),[l,r]),f=v.useCallback(h=>d.current.onChange({target:{value:Lu(h),name:r},type:ks.CHANGE}),[r]),m=v.useCallback(()=>d.current.onBlur({target:{value:Y(s._formValues,r),name:r},type:ks.BLUR}),[r,s._formValues]),y=v.useCallback(h=>{const A=Y(s._fields,r);A&&h&&(A._f.ref={focus:()=>h.focus&&h.focus(),select:()=>h.select&&h.select(),setCustomValidity:I=>h.setCustomValidity(I),reportValidity:()=>h.reportValidity()})},[s._fields,r]),w=v.useMemo(()=>({name:r,value:o,...an(n)||l.disabled?{disabled:l.disabled||n}:{},onChange:f,onBlur:m,ref:y}),[r,n,l.disabled,f,m,y,o]);return v.useEffect(()=>{const h=s._options.shouldUnregister||a;s.register(r,{...u.current.rules,...an(u.current.disabled)?{disabled:u.current.disabled}:{}});const A=(I,b)=>{const j=Y(s._fields,I);j&&j._f&&(j._f.mount=b)};if(A(r,!0),h){const I=Be(Y(s._options.defaultValues,r));be(s._defaultValues,r,I),Re(Y(s._formValues,r))&&be(s._formValues,r,I)}return!i&&s.register(r),()=>{(i?h&&!s._state.action:h)?s.unregister(r):A(r,!1)}},[r,s,i,a]),v.useEffect(()=>{s._setDisabledField({disabled:n,name:r})},[n,r,s]),v.useMemo(()=>({field:w,formState:l,fieldState:g}),[w,l,g])}var Hh=(e,t,r,n,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:s||!0}}:{},Qr=e=>Array.isArray(e)?e:[e],io=()=>{let e=[];return{get observers(){return e},next:s=>{for(const a of e)a.next&&a.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(a=>a!==s)}}),unsubscribe:()=>{e=[]}}},ba=e=>We(e)||!Vu(e);function Wn(e,t,r=new WeakSet){if(ba(e)||ba(t))return e===t;if(ar(e)&&ar(t))return e.getTime()===t.getTime();const n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;if(r.has(e)||r.has(t))return!0;r.add(e),r.add(t);for(const a of n){const i=e[a];if(!s.includes(a))return!1;if(a!=="ref"){const o=t[a];if(ar(i)&&ar(o)||Se(i)&&Se(o)||Array.isArray(i)&&Array.isArray(o)?!Wn(i,o,r):i!==o)return!1}}return!0}var nn=e=>Se(e)&&!Object.keys(e).length,ti=e=>e.type==="file",yn=e=>typeof e=="function",vs=e=>{if(!Qa)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Gu=e=>e.type==="select-multiple",si=e=>e.type==="radio",Yh=e=>si(e)||ht(e),oa=e=>vs(e)&&e.isConnected;function $h(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=Re(e)?n++:e[t[n++]];return e}function Wh(e){for(const t in e)if(e.hasOwnProperty(t)&&!Re(e[t]))return!1;return!0}function xe(e,t){const r=Array.isArray(t)?t:Ds(t)?[t]:ei(t),n=r.length===1?e:$h(e,r),s=r.length-1,a=r[s];return n&&delete n[a],s!==0&&(Se(n)&&nn(n)||Array.isArray(n)&&Wh(n))&&xe(e,r.slice(0,-1)),e}var Uu=e=>{for(const t in e)if(yn(e[t]))return!0;return!1};function ps(e,t={}){const r=Array.isArray(e);if(Se(e)||r)for(const n in e)Array.isArray(e[n])||Se(e[n])&&!Uu(e[n])?(t[n]=Array.isArray(e[n])?[]:{},ps(e[n],t[n])):We(e[n])||(t[n]=!0);return t}function Hu(e,t,r){const n=Array.isArray(e);if(Se(e)||n)for(const s in e)Array.isArray(e[s])||Se(e[s])&&!Uu(e[s])?Re(t)||ba(r[s])?r[s]=Array.isArray(e[s])?ps(e[s],[]):{...ps(e[s])}:Hu(e[s],We(t)?{}:t[s],r[s]):r[s]=!Wn(e[s],t[s]);return r}var Ur=(e,t)=>Hu(e,t,ps(t));const oo={value:!1,isValid:!1},lo={value:!0,isValid:!0};var Yu=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Re(e[0].attributes.value)?Re(e[0].value)||e[0].value===""?lo:{value:e[0].value,isValid:!0}:lo:oo}return oo},$u=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>Re(e)?e:t?e===""?NaN:e&&+e:r&&Nn(e)?new Date(e):n?n(e):e;const uo={isValid:!1,value:null};var Wu=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,uo):uo;function go(e){const t=e.ref;return ti(t)?t.files:si(t)?Wu(e.refs).value:Gu(t)?[...t.selectedOptions].map(({value:r})=>r):ht(t)?Yu(e.refs).value:$u(Re(t.value)?e.ref.value:t.value,e)}var zh=(e,t,r,n)=>{const s={};for(const a of e){const i=Y(t,a);i&&be(s,a,i._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:n}},ys=e=>e instanceof RegExp,Hr=e=>Re(e)?e:ys(e)?e.source:Se(e)?ys(e.value)?e.value.source:e.value:e,mo=e=>({isOnSubmit:!e||e===pn.onSubmit,isOnBlur:e===pn.onBlur,isOnChange:e===pn.onChange,isOnAll:e===pn.all,isOnTouch:e===pn.onTouched});const co="AsyncFunction";var Jh=e=>!!e&&!!e.validate&&!!(yn(e.validate)&&e.validate.constructor.name===co||Se(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===co)),Xh=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),fo=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const Zr=(e,t,r,n)=>{for(const s of r||Object.keys(e)){const a=Y(e,s);if(a){const{_f:i,...o}=a;if(i){if(i.refs&&i.refs[0]&&t(i.refs[0],s)&&!n)return!0;if(i.ref&&t(i.ref,i.name)&&!n)return!0;if(Zr(o,t))break}else if(Se(o)&&Zr(o,t))break}}};function ko(e,t,r){const n=Y(e,r);if(n||Ds(r))return{error:n,name:r};const s=r.split(".");for(;s.length;){const a=s.join("."),i=Y(t,a),o=Y(e,a);if(i&&!Array.isArray(i)&&r!==a)return{name:r};if(o&&o.type)return{name:a,error:o};if(o&&o.root&&o.root.type)return{name:`${a}.root`,error:o.root};s.pop()}return{name:r}}var Qh=(e,t,r,n)=>{r(e);const{name:s,...a}=e;return nn(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(i=>t[i]===(!n||pn.all))},Zh=(e,t,r)=>!e||!t||e===t||Qr(e).some(n=>n&&(r?n===t:n.startsWith(t)||t.startsWith(n))),e0=(e,t,r,n,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(t||e):(r?n.isOnBlur:s.isOnBlur)?!e:(r?n.isOnChange:s.isOnChange)?e:!0,n0=(e,t)=>!Za(Y(e,t)).length&&xe(e,t),r0=(e,t,r)=>{const n=Qr(Y(e,r));return be(n,"root",t[r]),be(e,r,n),e},ts=e=>Nn(e);function vo(e,t,r="validate"){if(ts(e)||Array.isArray(e)&&e.every(ts)||an(e)&&!e)return{type:r,message:ts(e)?e:"",ref:t}}var hr=e=>Se(e)&&!ys(e)?e:{value:e,message:""},po=async(e,t,r,n,s,a)=>{const{ref:i,refs:o,required:l,maxLength:u,minLength:d,min:g,max:f,pattern:m,validate:y,name:w,valueAsNumber:h,mount:A}=e._f,I=Y(r,w);if(!A||t.has(w))return{};const b=o?o[0]:i,j=M=>{s&&b.reportValidity&&(b.setCustomValidity(an(M)?"":M||""),b.reportValidity())},p={},N=si(i),O=ht(i),R=N||O,P=(h||ti(i))&&Re(i.value)&&Re(I)||vs(i)&&i.value===""||I===""||Array.isArray(I)&&!I.length,D=Hh.bind(null,w,n,p),F=(M,T,_,x=Dn.maxLength,B=Dn.minLength)=>{const C=M?T:_;p[w]={type:M?x:B,message:C,ref:i,...D(M?x:B,C)}};if(a?!Array.isArray(I)||!I.length:l&&(!R&&(P||We(I))||an(I)&&!I||O&&!Yu(o).isValid||N&&!Wu(o).isValid)){const{value:M,message:T}=ts(l)?{value:!!l,message:l}:hr(l);if(M&&(p[w]={type:Dn.required,message:T,ref:b,...D(Dn.required,T)},!n))return j(T),p}if(!P&&(!We(g)||!We(f))){let M,T;const _=hr(f),x=hr(g);if(!We(I)&&!isNaN(I)){const B=i.valueAsNumber||I&&+I;We(_.value)||(M=B>_.value),We(x.value)||(T=B<x.value)}else{const B=i.valueAsDate||new Date(I),C=H=>new Date(new Date().toDateString()+" "+H),L=i.type=="time",V=i.type=="week";Nn(_.value)&&I&&(M=L?C(I)>C(_.value):V?I>_.value:B>new Date(_.value)),Nn(x.value)&&I&&(T=L?C(I)<C(x.value):V?I<x.value:B<new Date(x.value))}if((M||T)&&(F(!!M,_.message,x.message,Dn.max,Dn.min),!n))return j(p[w].message),p}if((u||d)&&!P&&(Nn(I)||a&&Array.isArray(I))){const M=hr(u),T=hr(d),_=!We(M.value)&&I.length>+M.value,x=!We(T.value)&&I.length<+T.value;if((_||x)&&(F(_,M.message,T.message),!n))return j(p[w].message),p}if(m&&!P&&Nn(I)){const{value:M,message:T}=hr(m);if(ys(M)&&!I.match(M)&&(p[w]={type:Dn.pattern,message:T,ref:i,...D(Dn.pattern,T)},!n))return j(T),p}if(y){if(yn(y)){const M=await y(I,r),T=vo(M,b);if(T&&(p[w]={...T,...D(Dn.validate,T.message)},!n))return j(T.message),p}else if(Se(y)){let M={};for(const T in y){if(!nn(M)&&!n)break;const _=vo(await y[T](I,r),b,T);_&&(M={..._,...D(T,_.message)},j(_.message),n&&(p[w]=M))}if(!nn(M)&&(p[w]={ref:b,...M},!n))return p}}return j(!0),p};const t0={mode:pn.onSubmit,reValidateMode:pn.onChange,shouldFocusError:!0};function s0(e={}){let t={...t0,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:yn(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const n={};let s=Se(t.defaultValues)||Se(t.values)?Be(t.defaultValues||t.values)||{}:{},a=t.shouldUnregister?{}:Be(s),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...d};const f={array:io(),state:io()},m=t.criteriaMode===pn.all,y=E=>q=>{clearTimeout(u),u=setTimeout(E,q)},w=async E=>{if(!t.disabled&&(d.isValid||g.isValid||E)){const q=t.resolver?nn((await O()).errors):await P(n,!0);q!==r.isValid&&f.state.next({isValid:q})}},h=(E,q)=>{!t.disabled&&(d.isValidating||d.validatingFields||g.isValidating||g.validatingFields)&&((E||Array.from(o.mount)).forEach(S=>{S&&(q?be(r.validatingFields,S,q):xe(r.validatingFields,S))}),f.state.next({validatingFields:r.validatingFields,isValidating:!nn(r.validatingFields)}))},A=(E,q=[],S,$,U=!0,K=!0)=>{if($&&S&&!t.disabled){if(i.action=!0,K&&Array.isArray(Y(n,E))){const Q=S(Y(n,E),$.argA,$.argB);U&&be(n,E,Q)}if(K&&Array.isArray(Y(r.errors,E))){const Q=S(Y(r.errors,E),$.argA,$.argB);U&&be(r.errors,E,Q),n0(r.errors,E)}if((d.touchedFields||g.touchedFields)&&K&&Array.isArray(Y(r.touchedFields,E))){const Q=S(Y(r.touchedFields,E),$.argA,$.argB);U&&be(r.touchedFields,E,Q)}(d.dirtyFields||g.dirtyFields)&&(r.dirtyFields=Ur(s,a)),f.state.next({name:E,isDirty:F(E,q),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else be(a,E,q)},I=(E,q)=>{be(r.errors,E,q),f.state.next({errors:r.errors})},b=E=>{r.errors=E,f.state.next({errors:r.errors,isValid:!1})},j=(E,q,S,$)=>{const U=Y(n,E);if(U){const K=Y(a,E,Re(S)?Y(s,E):S);Re(K)||$&&$.defaultChecked||q?be(a,E,q?K:go(U._f)):_(E,K),i.mount&&w()}},p=(E,q,S,$,U)=>{let K=!1,Q=!1;const le={name:E};if(!t.disabled){if(!S||$){(d.isDirty||g.isDirty)&&(Q=r.isDirty,r.isDirty=le.isDirty=F(),K=Q!==le.isDirty);const pe=Wn(Y(s,E),q);Q=!!Y(r.dirtyFields,E),pe?xe(r.dirtyFields,E):be(r.dirtyFields,E,!0),le.dirtyFields=r.dirtyFields,K=K||(d.dirtyFields||g.dirtyFields)&&Q!==!pe}if(S){const pe=Y(r.touchedFields,E);pe||(be(r.touchedFields,E,S),le.touchedFields=r.touchedFields,K=K||(d.touchedFields||g.touchedFields)&&pe!==S)}K&&U&&f.state.next(le)}return K?le:{}},N=(E,q,S,$)=>{const U=Y(r.errors,E),K=(d.isValid||g.isValid)&&an(q)&&r.isValid!==q;if(t.delayError&&S?(l=y(()=>I(E,S)),l(t.delayError)):(clearTimeout(u),l=null,S?be(r.errors,E,S):xe(r.errors,E)),(S?!Wn(U,S):U)||!nn($)||K){const Q={...$,...K&&an(q)?{isValid:q}:{},errors:r.errors,name:E};r={...r,...Q},f.state.next(Q)}},O=async E=>{h(E,!0);const q=await t.resolver(a,t.context,zh(E||o.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return h(E),q},R=async E=>{const{errors:q}=await O(E);if(E)for(const S of E){const $=Y(q,S);$?be(r.errors,S,$):xe(r.errors,S)}else r.errors=q;return q},P=async(E,q,S={valid:!0})=>{for(const $ in E){const U=E[$];if(U){const{_f:K,...Q}=U;if(K){const le=o.array.has(K.name),pe=U._f&&Jh(U._f);pe&&d.validatingFields&&h([$],!0);const en=await po(U,o.disabled,a,m,t.shouldUseNativeValidation&&!q,le);if(pe&&d.validatingFields&&h([$]),en[K.name]&&(S.valid=!1,q))break;!q&&(Y(en,K.name)?le?r0(r.errors,en,K.name):be(r.errors,K.name,en[K.name]):xe(r.errors,K.name))}!nn(Q)&&await P(Q,q,S)}}return S.valid},D=()=>{for(const E of o.unMount){const q=Y(n,E);q&&(q._f.refs?q._f.refs.every(S=>!oa(S)):!oa(q._f.ref))&&ne(E)}o.unMount=new Set},F=(E,q)=>!t.disabled&&(E&&q&&be(a,E,q),!Wn(H(),s)),M=(E,q,S)=>Ku(E,o,{...i.mount?a:Re(q)?s:Nn(E)?{[E]:q}:q},S,q),T=E=>Za(Y(i.mount?a:s,E,t.shouldUnregister?Y(s,E,[]):[])),_=(E,q,S={})=>{const $=Y(n,E);let U=q;if($){const K=$._f;K&&(!K.disabled&&be(a,E,$u(q,K)),U=vs(K.ref)&&We(q)?"":q,Gu(K.ref)?[...K.ref.options].forEach(Q=>Q.selected=U.includes(Q.value)):K.refs?ht(K.ref)?K.refs.forEach(Q=>{(!Q.defaultChecked||!Q.disabled)&&(Array.isArray(U)?Q.checked=!!U.find(le=>le===Q.value):Q.checked=U===Q.value||!!U)}):K.refs.forEach(Q=>Q.checked=Q.value===U):ti(K.ref)?K.ref.value="":(K.ref.value=U,K.ref.type||f.state.next({name:E,values:Be(a)})))}(S.shouldDirty||S.shouldTouch)&&p(E,U,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&V(E)},x=(E,q,S)=>{for(const $ in q){if(!q.hasOwnProperty($))return;const U=q[$],K=E+"."+$,Q=Y(n,K);(o.array.has(E)||Se(U)||Q&&!Q._f)&&!ar(U)?x(K,U,S):_(K,U,S)}},B=(E,q,S={})=>{const $=Y(n,E),U=o.array.has(E),K=Be(q);be(a,E,K),U?(f.array.next({name:E,values:Be(a)}),(d.isDirty||d.dirtyFields||g.isDirty||g.dirtyFields)&&S.shouldDirty&&f.state.next({name:E,dirtyFields:Ur(s,a),isDirty:F(E,K)})):$&&!$._f&&!We(K)?x(E,K,S):_(E,K,S),fo(E,o)&&f.state.next({...r}),f.state.next({name:i.mount?E:void 0,values:Be(a)})},C=async E=>{i.mount=!0;const q=E.target;let S=q.name,$=!0;const U=Y(n,S),K=pe=>{$=Number.isNaN(pe)||ar(pe)&&isNaN(pe.getTime())||Wn(pe,Y(a,S,pe))},Q=mo(t.mode),le=mo(t.reValidateMode);if(U){let pe,en;const vr=q.type?go(U._f):Lu(E),wn=E.type===ks.BLUR||E.type===ks.FOCUS_OUT,Vs=!Xh(U._f)&&!t.resolver&&!Y(r.errors,S)&&!U._f.deps||e0(wn,Y(r.touchedFields,S),r.isSubmitted,le,Q),Lr=fo(S,o,wn);be(a,S,vr),wn?(U._f.onBlur&&U._f.onBlur(E),l&&l(0)):U._f.onChange&&U._f.onChange(E);const Br=p(S,vr,wn),Ls=!nn(Br)||Lr;if(!wn&&f.state.next({name:S,type:E.type,values:Be(a)}),Vs)return(d.isValid||g.isValid)&&(t.mode==="onBlur"?wn&&w():wn||w()),Ls&&f.state.next({name:S,...Lr?{}:Br});if(!wn&&Lr&&f.state.next({...r}),t.resolver){const{errors:Cr}=await O([S]);if(K(vr),$){const Bs=ko(r.errors,n,S),Kr=ko(Cr,n,Bs.name||S);pe=Kr.error,S=Kr.name,en=nn(Cr)}}else h([S],!0),pe=(await po(U,o.disabled,a,m,t.shouldUseNativeValidation))[S],h([S]),K(vr),$&&(pe?en=!1:(d.isValid||g.isValid)&&(en=await P(n,!0)));$&&(U._f.deps&&V(U._f.deps),N(S,en,pe,Br))}},L=(E,q)=>{if(Y(r.errors,q)&&E.focus)return E.focus(),1},V=async(E,q={})=>{let S,$;const U=Qr(E);if(t.resolver){const K=await R(Re(E)?E:U);S=nn(K),$=E?!U.some(Q=>Y(K,Q)):S}else E?($=(await Promise.all(U.map(async K=>{const Q=Y(n,K);return await P(Q&&Q._f?{[K]:Q}:Q)}))).every(Boolean),!(!$&&!r.isValid)&&w()):$=S=await P(n);return f.state.next({...!Nn(E)||(d.isValid||g.isValid)&&S!==r.isValid?{}:{name:E},...t.resolver||!E?{isValid:S}:{},errors:r.errors}),q.shouldFocus&&!$&&Zr(n,L,E?U:o.mount),$},H=E=>{const q={...i.mount?a:s};return Re(E)?q:Nn(E)?Y(q,E):E.map(S=>Y(q,S))},X=(E,q)=>({invalid:!!Y((q||r).errors,E),isDirty:!!Y((q||r).dirtyFields,E),error:Y((q||r).errors,E),isValidating:!!Y(r.validatingFields,E),isTouched:!!Y((q||r).touchedFields,E)}),J=E=>{E&&Qr(E).forEach(q=>xe(r.errors,q)),f.state.next({errors:E?r.errors:{}})},ae=(E,q,S)=>{const $=(Y(n,E,{_f:{}})._f||{}).ref,U=Y(r.errors,E)||{},{ref:K,message:Q,type:le,...pe}=U;be(r.errors,E,{...pe,...q,ref:$}),f.state.next({name:E,errors:r.errors,isValid:!1}),S&&S.shouldFocus&&$&&$.focus&&$.focus()},Fe=(E,q)=>yn(E)?f.state.subscribe({next:S=>E(M(void 0,q),S)}):M(E,q,!0),ee=E=>f.state.subscribe({next:q=>{Zh(E.name,q.name,E.exact)&&Qh(q,E.formState||d,nr,E.reRenderRoot)&&E.callback({values:{...a},...r,...q})}}).unsubscribe,G=E=>(i.mount=!0,g={...g,...E.formState},ee({...E,formState:g})),ne=(E,q={})=>{for(const S of E?Qr(E):o.mount)o.mount.delete(S),o.array.delete(S),q.keepValue||(xe(n,S),xe(a,S)),!q.keepError&&xe(r.errors,S),!q.keepDirty&&xe(r.dirtyFields,S),!q.keepTouched&&xe(r.touchedFields,S),!q.keepIsValidating&&xe(r.validatingFields,S),!t.shouldUnregister&&!q.keepDefaultValue&&xe(s,S);f.state.next({values:Be(a)}),f.state.next({...r,...q.keepDirty?{isDirty:F()}:{}}),!q.keepIsValid&&w()},re=({disabled:E,name:q})=>{(an(E)&&i.mount||E||o.disabled.has(q))&&(E?o.disabled.add(q):o.disabled.delete(q))},de=(E,q={})=>{let S=Y(n,E);const $=an(q.disabled)||an(t.disabled);return be(n,E,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:E}},name:E,mount:!0,...q}}),o.mount.add(E),S?re({disabled:an(q.disabled)?q.disabled:t.disabled,name:E}):j(E,!0,q.value),{...$?{disabled:q.disabled||t.disabled}:{},...t.progressive?{required:!!q.required,min:Hr(q.min),max:Hr(q.max),minLength:Hr(q.minLength),maxLength:Hr(q.maxLength),pattern:Hr(q.pattern)}:{},name:E,onChange:C,onBlur:C,ref:U=>{if(U){de(E,q),S=Y(n,E);const K=Re(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,Q=Yh(K),le=S._f.refs||[];if(Q?le.find(pe=>pe===K):K===S._f.ref)return;be(n,E,{_f:{...S._f,...Q?{refs:[...le.filter(oa),K,...Array.isArray(Y(s,E))?[{}]:[]],ref:{type:K.type,name:E}}:{ref:K}}}),j(E,!1,void 0,K)}else S=Y(n,E,{}),S._f&&(S._f.mount=!1),(t.shouldUnregister||q.shouldUnregister)&&!(Bu(o.array,E)&&i.action)&&o.unMount.add(E)}}},Le=()=>t.shouldFocusError&&Zr(n,L,o.mount),Ce=E=>{an(E)&&(f.state.next({disabled:E}),Zr(n,(q,S)=>{const $=Y(n,S);$&&(q.disabled=$._f.disabled||E,Array.isArray($._f.refs)&&$._f.refs.forEach(U=>{U.disabled=$._f.disabled||E}))},0,!1))},Ke=(E,q)=>async S=>{let $;S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let U=Be(a);if(f.state.next({isSubmitting:!0}),t.resolver){const{errors:K,values:Q}=await O();r.errors=K,U=Be(Q)}else await P(n);if(o.disabled.size)for(const K of o.disabled)xe(U,K);if(xe(r.errors,"root"),nn(r.errors)){f.state.next({errors:{}});try{await E(U,S)}catch(K){$=K}}else q&&await q({...r.errors},S),Le(),setTimeout(Le);if(f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:nn(r.errors)&&!$,submitCount:r.submitCount+1,errors:r.errors}),$)throw $},Mn=(E,q={})=>{Y(n,E)&&(Re(q.defaultValue)?B(E,Be(Y(s,E))):(B(E,q.defaultValue),be(s,E,Be(q.defaultValue))),q.keepTouched||xe(r.touchedFields,E),q.keepDirty||(xe(r.dirtyFields,E),r.isDirty=q.defaultValue?F(E,Be(Y(s,E))):F()),q.keepError||(xe(r.errors,E),d.isValid&&w()),f.state.next({...r}))},ln=(E,q={})=>{const S=E?Be(E):s,$=Be(S),U=nn(E),K=U?s:$;if(q.keepDefaultValues||(s=S),!q.keepValues){if(q.keepDirtyValues){const Q=new Set([...o.mount,...Object.keys(Ur(s,a))]);for(const le of Array.from(Q))Y(r.dirtyFields,le)?be(K,le,Y(a,le)):B(le,Y(K,le))}else{if(Qa&&Re(E))for(const Q of o.mount){const le=Y(n,Q);if(le&&le._f){const pe=Array.isArray(le._f.refs)?le._f.refs[0]:le._f.ref;if(vs(pe)){const en=pe.closest("form");if(en){en.reset();break}}}}for(const Q of o.mount){const le=Y(K,Q,Y(s,Q));Re(le)||(be(K,Q,le),B(Q,Y(K,Q)))}}a=Be(K),f.array.next({values:{...K}}),f.state.next({values:{...K}})}o={mount:q.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!d.isValid||!!q.keepIsValid||!!q.keepDirtyValues,i.watch=!!t.shouldUnregister,f.state.next({submitCount:q.keepSubmitCount?r.submitCount:0,isDirty:U?!1:q.keepDirty?r.isDirty:!!(q.keepDefaultValues&&!Wn(E,s)),isSubmitted:q.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:U?{}:q.keepDirtyValues?q.keepDefaultValues&&a?Ur(s,a):r.dirtyFields:q.keepDefaultValues&&E?Ur(s,E):q.keepDirty?r.dirtyFields:{},touchedFields:q.keepTouched?r.touchedFields:{},errors:q.keepErrors?r.errors:{},isSubmitSuccessful:q.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},kn=(E,q)=>ln(yn(E)?E(a):E,q),er=(E,q={})=>{const S=Y(n,E),$=S&&S._f;if($){const U=$.refs?$.refs[0]:$.ref;U.focus&&(U.focus(),q.shouldSelect&&yn(U.select)&&U.select())}},nr=E=>{r={...r,...E}},Hn={control:{register:de,unregister:ne,getFieldState:X,handleSubmit:Ke,setError:ae,_subscribe:ee,_runSchema:O,_focusError:Le,_getWatch:M,_getDirty:F,_setValid:w,_setFieldArray:A,_setDisabledField:re,_setErrors:b,_getFieldArray:T,_reset:ln,_resetDefaultValues:()=>yn(t.defaultValues)&&t.defaultValues().then(E=>{kn(E,t.resetOptions),f.state.next({isLoading:!1})}),_removeUnmounted:D,_disableForm:Ce,_subjects:f,_proxyFormState:d,get _fields(){return n},get _formValues(){return a},get _state(){return i},set _state(E){i=E},get _defaultValues(){return s},get _names(){return o},set _names(E){o=E},get _formState(){return r},get _options(){return t},set _options(E){t={...t,...E}}},subscribe:G,trigger:V,register:de,handleSubmit:Ke,watch:Fe,setValue:B,getValues:H,reset:kn,resetField:Mn,clearErrors:J,unregister:ne,setError:ae,setFocus:er,getFieldState:X};return{...Hn,formControl:Hn}}function Ss(e={}){const t=v.useRef(void 0),r=v.useRef(void 0),[n,s]=v.useState({isDirty:!1,isValidating:!1,isLoading:yn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:yn(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:n},e.defaultValues&&!yn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...o}=s0(e);t.current={...o,formState:n}}const a=t.current.control;return a._options=e,ri(()=>{const i=a._subscribe({formState:a._proxyFormState,callback:()=>s({...a._formState}),reRenderRoot:!0});return s(o=>({...o,isReady:!0})),a._formState.isReady=!0,i},[a]),v.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),v.useEffect(()=>{e.mode&&(a._options.mode=e.mode),e.reValidateMode&&(a._options.reValidateMode=e.reValidateMode)},[a,e.mode,e.reValidateMode]),v.useEffect(()=>{e.errors&&(a._setErrors(e.errors),a._focusError())},[a,e.errors]),v.useEffect(()=>{e.shouldUnregister&&a._subjects.state.next({values:a._getWatch()})},[a,e.shouldUnregister]),v.useEffect(()=>{if(a._proxyFormState.isDirty){const i=a._getDirty();i!==n.isDirty&&a._subjects.state.next({isDirty:i})}},[a,n.isDirty]),v.useEffect(()=>{e.values&&!Wn(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,s(i=>({...i}))):a._resetDefaultValues()},[a,e.values]),v.useEffect(()=>{a._state.mount||(a._setValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),t.current.formState=Cu(n,a),t.current}function a0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yo={exports:{}},Yr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo;function i0(){if(bo)return Yr;bo=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:a}}return Yr.Fragment=t,Yr.jsx=r,Yr.jsxs=r,Yr}var ho;function o0(){return ho||(ho=1,yo.exports=i0()),yo.exports}var ye=o0();const l0=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:ye.jsx(kt,{variant:"warning",size:"small",children:ye.jsx(De,{gap:"2",children:v.Children.map(e,t=>ye.jsx(se,{size:"small",children:t},cg(t)?t.key:t))})}),wt={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},Io=mr(wt),d0=({onClick:e=()=>{},erOverstyrt:t=!1})=>{const[r,n]=c.useState(t),s=()=>{r||(n(!0),e(!0))};return c.useEffect(()=>{n(t)},[t]),ye.jsx(Pe,{variant:r?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:s,"aria-disabled":t,disabled:t,icon:r?ye.jsx(tm,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:Io.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):ye.jsx(nm,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:Io.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};var wo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ao;function u0(){return Ao||(Ao=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(a=s(a,n.call(this,o)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var o in a)t.call(a,o)&&a[o]&&(i=s(i,this&&this[o]||o));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(wo)),wo.exports}var g0=u0();const ai=a0(g0),m0="_borderbox_1vkvn_1",c0="_error_1vkvn_5",f0="_warning_1vkvn_8",k0={borderbox:m0,error:c0,warning:f0};ai.bind(k0);const v0="_aksjonspunkt_kn1hn_1",p0="_erAksjonspunktApent_kn1hn_4",y0="_erIkkeGodkjentAvBeslutter_kn1hn_8",b0={aksjonspunkt:v0,erAksjonspunktApent:p0,erIkkeGodkjentAvBeslutter:y0};ai.bind(b0);const bs=({dateString:e,year:t,month:r,day:n})=>ye.jsx(ye.Fragment,{children:Yl(e,{year:t,month:r,day:n})}),jo=mr(wt),h0=({text:e,okButtonText:t,showModal:r,cancel:n,submit:s})=>ye.jsxs(Pn,{width:"small",open:r,"aria-label":e,onClose:n,children:[ye.jsx(Pn.Body,{children:ye.jsx(Is,{size:"small",children:e})}),ye.jsxs(Pn.Footer,{children:[ye.jsx(Pe,{variant:"primary",size:"small",onClick:s,autoFocus:!0,type:"button",children:t||jo.formatMessage({id:"OkAvbrytModal.Ok"})}),ye.jsx(Pe,{variant:"secondary",size:"small",onClick:n,type:"button",children:jo.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),et=({dateStringFom:e,dateStringTom:t,showTodayString:r=!1})=>ye.jsx(ye.Fragment,{children:fg(e,t,{showTodayString:r})});mr(wt);const I0="_divider_1t980_1",w0="_dividerParagraf_1t980_8",A0="_leftPanel_1t980_11",j0="_rightPanel_1t980_14",ha={divider:I0,dividerParagraf:w0,leftPanel:A0,rightPanel:j0},E0=ai.bind(ha),Eo=({spaceUnder:e=!1,spaceAbove:t=!1,leftPanel:r=!1,rightPanel:n=!1,dividerParagraf:s=!1,className:a})=>ye.jsxs(ye.Fragment,{children:[t&&ye.jsx("div",{style:{marginBottom:"32px"}}),ye.jsx("div",{className:E0(a,{leftPanel:r,rightPanel:n}),children:ye.jsx("div",{className:s?ha.dividerParagraf:ha.divider})}),e&&ye.jsx("div",{style:{marginBottom:"32px"}})]}),zu=()=>ye.jsx("span",{"data-testid":"editedIcon",children:ye.jsx(im,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});mr(wt);const T0=mr(wt),O0=({tekst:e,children:t})=>{const[r,n]=c.useState(!1);if(!e)return t;const s=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return ye.jsx(xu,{content:T0.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:ye.jsx("span",{"aria-hidden":"true",onClick:s,children:t??e})})},To={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},Ia=({beløp:e,kr:t=!1,rød:r=!1})=>{const n=e==null?void 0:e.toString().replace(/\s/g,"");return ye.jsx(O0,{tekst:n,children:ye.jsxs("span",{className:r?To.rød:To.default,children:[n?kg(n):"-",n&&t&&" kr"]})})};function N0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oo={exports:{}},$r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No;function R0(){if(No)return $r;No=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:a}}return $r.Fragment=t,$r.jsx=r,$r.jsxs=r,$r}var Ro;function P0(){return Ro||(Ro=1,Oo.exports=R0()),Oo.exports}var me=P0();const At=e=>e.reduce((t,r,n)=>({...t,[n]:s=>r(s)||!0}),{}),jt=(e,t)=>{var r;return(r=t.split(".").reduce((n,s)=>n!==void 0?n[s]:n,e))==null?void 0:r.message};var wa={exports:{}},q0=wa.exports,Po;function _0(){return Po||(Po=1,function(e,t){(function(r,n){e.exports=n()})(q0,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,a=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},u=function(h){return(h=+h)+(h>68?1900:2e3)},d=function(h){return function(A){this[h]=+A}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(h){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var I=A.match(/([+-]|\d\d)/g),b=60*I[1]+(+I[2]||0);return b===0?0:I[0]==="+"?-b:b}(h)}],f=function(h){var A=l[h];return A&&(A.indexOf?A:A.s.concat(A.f))},m=function(h,A){var I,b=l.meridiem;if(b){for(var j=1;j<=24;j+=1)if(h.indexOf(b(j,0,A))>-1){I=j>12;break}}else I=h===(A?"pm":"PM");return I},y={A:[o,function(h){this.afternoon=m(h,!1)}],a:[o,function(h){this.afternoon=m(h,!0)}],Q:[s,function(h){this.month=3*(h-1)+1}],S:[s,function(h){this.milliseconds=100*+h}],SS:[a,function(h){this.milliseconds=10*+h}],SSS:[/\d{3}/,function(h){this.milliseconds=+h}],s:[i,d("seconds")],ss:[i,d("seconds")],m:[i,d("minutes")],mm:[i,d("minutes")],H:[i,d("hours")],h:[i,d("hours")],HH:[i,d("hours")],hh:[i,d("hours")],D:[i,d("day")],DD:[a,d("day")],Do:[o,function(h){var A=l.ordinal,I=h.match(/\d+/);if(this.day=I[0],A)for(var b=1;b<=31;b+=1)A(b).replace(/\[|\]/g,"")===h&&(this.day=b)}],w:[i,d("week")],ww:[a,d("week")],M:[i,d("month")],MM:[a,d("month")],MMM:[o,function(h){var A=f("months"),I=(f("monthsShort")||A.map(function(b){return b.slice(0,3)})).indexOf(h)+1;if(I<1)throw new Error;this.month=I%12||I}],MMMM:[o,function(h){var A=f("months").indexOf(h)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,d("year")],YY:[a,function(h){this.year=u(h)}],YYYY:[/\d{4}/,d("year")],Z:g,ZZ:g};function w(h){var A,I;A=h,I=l&&l.formats;for(var b=(h=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(D,F,M){var T=M&&M.toUpperCase();return F||I[M]||r[M]||I[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(_,x,B){return x||B.slice(1)})})).match(n),j=b.length,p=0;p<j;p+=1){var N=b[p],O=y[N],R=O&&O[0],P=O&&O[1];b[p]=P?{regex:R,parser:P}:N.replace(/^\[|\]$/g,"")}return function(D){for(var F={},M=0,T=0;M<j;M+=1){var _=b[M];if(typeof _=="string")T+=_.length;else{var x=_.regex,B=_.parser,C=D.slice(T),L=x.exec(C)[0];B.call(F,L),D=D.replace(L,"")}}return function(V){var H=V.afternoon;if(H!==void 0){var X=V.hours;H?X<12&&(V.hours+=12):X===12&&(V.hours=0),delete V.afternoon}}(F),F}}return function(h,A,I){I.p.customParseFormat=!0,h&&h.parseTwoDigitYear&&(u=h.parseTwoDigitYear);var b=A.prototype,j=b.parse;b.parse=function(p){var N=p.date,O=p.utc,R=p.args;this.$u=O;var P=R[1];if(typeof P=="string"){var D=R[2]===!0,F=R[3]===!0,M=D||F,T=R[2];F&&(T=R[2]),l=this.$locale(),!D&&T&&(l=I.Ls[T]),this.$d=function(C,L,V,H){try{if(["x","X"].indexOf(L)>-1)return new Date((L==="X"?1e3:1)*C);var X=w(L)(C),J=X.year,ae=X.month,Fe=X.day,ee=X.hours,G=X.minutes,ne=X.seconds,re=X.milliseconds,de=X.zone,Le=X.week,Ce=new Date,Ke=Fe||(J||ae?1:Ce.getDate()),Mn=J||Ce.getFullYear(),ln=0;J&&!ae||(ln=ae>0?ae-1:Ce.getMonth());var kn,er=ee||0,nr=G||0,kr=ne||0,Hn=re||0;return de?new Date(Date.UTC(Mn,ln,Ke,er,nr,kr,Hn+60*de.offset*1e3)):V?new Date(Date.UTC(Mn,ln,Ke,er,nr,kr,Hn)):(kn=new Date(Mn,ln,Ke,er,nr,kr,Hn),Le&&(kn=H(kn).week(Le).toDate()),kn)}catch{return new Date("")}}(N,P,O,I),this.init(),T&&T!==!0&&(this.$L=this.locale(T).$L),M&&N!=this.format(P)&&(this.$d=new Date("")),l={}}else if(P instanceof Array)for(var _=P.length,x=1;x<=_;x+=1){R[1]=P[x-1];var B=I.apply(this,R);if(B.isValid()){this.$d=B.$d,this.$L=B.$L,this.init();break}x===_&&(this.$d=new Date(""))}else j.call(this,p)}}})}(wa)),wa.exports}var M0=_0();const D0=N0(M0),S0="_textarea_1snk6_1",x0="_readOnlyField_1snk6_7",qo={textarea:S0,readOnlyField:x0},F0=e=>e!=null&&e!=="",xs=({label:e,value:t,isEdited:r=!1,type:n,hideLabel:s,size:a})=>F0(t)?me.jsxs(De,{gap:"1",children:[e&&!s&&me.jsx(Ae,{size:a,children:e}),me.jsxs(he,{gap:"2",align:"center",wrap:!1,children:[me.jsx(Zl,{className:n==="textarea"?qo.textarea:qo.readOnlyField,size:a,children:t}),r&&me.jsx(zu,{})]})]}):null;ze.extend(D0);const at=({label:e,description:t,validate:r=[],hideLabel:n=!1,isReadOnly:s=!1,onChange:a,disabledDays:i,isEdited:o,defaultMonth:l,fromDate:u,toDate:d,size:g="small",...f})=>{const{name:m,control:y,disabled:w}=f,{formState:{errors:h}}=Zn(),{field:A}=It({name:m,control:y,rules:{validate:c.useMemo(()=>At(r),[r])}}),I=A.value?ze(A.value,Sn,!0).format(Tt):"",[b,j]=c.useState(I),{datepickerProps:p,inputProps:N}=Jb({onDateChange:P=>{if(P!==void 0){const D=ze(P).format(Sn);a&&a(D),A.onChange(D),j(ze(D,Sn,!0).format(Tt))}},defaultSelected:A.value?ze(A.value,Sn,!0).toDate():void 0,defaultMonth:l||(!A.value&&d?d:void 0),disabled:i}),O=c.useCallback(P=>{const D=ze(P.target.value,Tt,!0).format(Sn),F=D!=="Invalid Date";j(P.target.value),a&&a(F?D:P.target.value),A.onChange(F?D:P.target.value)},[j,a,A]);if(s)return me.jsx(xs,{label:e,value:A.value?ze(A.value,Sn,!0).format(Tt):void 0,isEdited:o,hideLabel:n,size:g});const R={...p,fromDate:u,toDate:d,dropdownCaption:u&&d?!0:void 0};return me.jsx(fs,{...R,children:me.jsx(fs.Input,{...N,hideLabel:n,onChange:O,value:b,size:g,label:e,description:t,disabled:w,error:jt(h,m)})})},Aa=({name:e,control:t,label:r,validate:n=[],readOnly:s=!1,type:a,shouldValidateOnBlur:i=!1,onBlur:o,onChange:l,description:u,autoFocus:d,parse:g=p=>p,format:f=p=>p,normalizeOnBlur:m,isEdited:y,maxLength:w,autoComplete:h=!1,disabled:A,className:I,hideLabel:b,...j})=>{const{formState:{errors:p},trigger:N}=Zn(),{field:O}=It({name:e,control:t,rules:{validate:c.useMemo(()=>At(n),[n])}});return s?me.jsx(xs,{label:r,value:O.value,isEdited:y,hideLabel:b,size:j.size}):me.jsx(Lh,{size:"small",hideLabel:b,description:u,label:r,error:jt(p,e),...O,value:O.value?f(O.value):"",autoFocus:d,autoComplete:h?void 0:"off",maxLength:w,disabled:A,type:a,className:I,onChange:R=>{const P=R.currentTarget.value?g(R.currentTarget.value):null;return l&&l(P),O.onChange(P)},onBlur:async R=>{var P,D,F,M;if(O.onBlur(),i){const T=await N();o&&T&&o((P=R==null?void 0:R.target)==null?void 0:P.value)}else o&&o((D=R==null?void 0:R.target)==null?void 0:D.value);m&&O.onChange((F=R==null?void 0:R.target)!=null&&F.value?m(g((M=R==null?void 0:R.target)==null?void 0:M.value)):null)},...j})},V0="_hideRadioLabels_1u3xf_1",L0={hideRadioLabels:V0},Ju=({label:e,description:t,validate:r=[],radios:n,onChange:s,isReadOnly:a=!1,isHorizontal:i=!1,parse:o=y=>y,isTrueOrFalseSelection:l=!1,hideLegend:u=!1,hideRadioLabels:d=!1,isEdited:g=!1,size:f="small",...m})=>{const{name:y,control:w,disabled:h}=m,{formState:{errors:A}}=Zn(),{field:I}=It({name:y,control:w,rules:{validate:c.useMemo(()=>At(r),[r])}}),b=l?p=>p==="true":o,j=me.jsxs(he,{justify:"center",gap:"2",children:[e,a&&g&&me.jsx(zu,{})]});return me.jsxs(Ph,{name:y,value:I.value!==void 0?I.value:null,onChange:p=>{s&&s(p),I.onChange(p)},size:f,legend:j,description:t,error:jt(A,y),className:d?L0.hideRadioLabels:"",hideLegend:u,children:[!i&&n.map(p=>me.jsxs(c.Fragment,{children:[me.jsx(no,{size:f,value:b(p.value),disabled:p.disabled||h||a,children:p.label}),I.value===b(p.value)&&p.element]},p.value)),i&&me.jsxs(me.Fragment,{children:[me.jsx(he,{gap:"4",children:n.map(p=>me.jsx(no,{size:f,value:b(p.value),disabled:p.disabled||h||a,children:p.label},p.value))}),n.filter(p=>I.value===b(p.value)).map(p=>me.jsx(c.Fragment,{children:p.element},p.value))]})]})},B0=({label:e,selectValues:t,validate:r=[],readOnly:n=!1,description:s,hideValueOnDisable:a=!1,onChange:i,className:o,hideLabel:l,isEdited:u,size:d,...g})=>{const{name:f,control:m,disabled:y}=g,{formState:{errors:w}}=Zn(),{field:h}=It({name:f,control:m,rules:{validate:c.useMemo(()=>At(r),[r])}});if(n){const b=t.map(p=>p.props).find(p=>p.value===h.value),j=b?b.children:void 0;return me.jsx(xs,{value:j,label:e,hideLabel:l,isEdited:u,size:d})}const A=h.value||"",I=!t.map(b=>b.props.value).includes(A)&&A!=="";return I&&console.warn(`No corresponding option found for value '${A}'`),me.jsxs(ya,{size:"small",className:o,error:jt(w,f),label:e,description:s,value:a&&y||I?"":h.value,disabled:y,onChange:b=>{i&&i(b),h.onChange(b)},hideLabel:l,children:[me.jsx("option",{style:{display:"none"}}),",",t]})},C0="_textAreaFieldWithBadges_bdz0b_1",K0="_etikettWrapper_bdz0b_4",_o={textAreaFieldWithBadges:C0,etikettWrapper:K0},ii=({name:e,control:t,label:r,readOnly:n,maxLength:s,badges:a,validate:i=[],parse:o=m=>m,className:l,description:u,isEdited:d,size:g="small",...f})=>{const{formState:{errors:m}}=Zn(),{field:y}=It({name:e,control:t,rules:{validate:c.useMemo(()=>At(i),[i])}});return n?me.jsx(xs,{size:g,label:r,value:y.value,type:"textarea",isEdited:d,hideLabel:f.hideLabel}):me.jsxs("div",{className:a?_o.textAreaFieldWithBadges:null,children:[a&&me.jsx("div",{className:_o.etikettWrapper,children:a.map(({type:w,titleText:h})=>me.jsx(Ah,{variant:w,size:"small",children:h},h))}),me.jsx(Fh,{size:g,label:r,description:u,className:l,autoComplete:"off",...y,onChange:w=>y.onChange(w.currentTarget.value!==""?o(w.currentTarget.value):null),value:y.value?y.value:"",error:jt(m,e),maxLength:s,...f})]})},Fs=({formMethods:e,onSubmit:t,children:r,className:n,setDataOnUnmount:s})=>{const{handleSubmit:a,getValues:i}=e;return c.useEffect(()=>()=>{s&&s(i())},[]),me.jsx(Kh,{...e,children:me.jsx("form",{className:n,onSubmit:t?a(o=>t(o)):void 0,children:r})})},Xu=({submitCallback:e,cancelEvent:t,showModal:r,ventearsaker:n,erTilbakekreving:s,frist:a,ventearsak:i,visBrevErBestilt:o=!1,hasManualPaVent:l,defaultVenteårsak:u=null})=>{const d=Qn(),g=Ss({defaultValues:U0(l,a,i??u)}),f=g.watch("frist"),m=g.watch("ventearsak"),y=z0(i,m),w=J0(a,f),h=!(a===f&&!y),A=W0(s,a,f,m);return k.jsx(Fs,{formMethods:g,onSubmit:e,children:k.jsxs(Pn,{width:"small",open:r,onClose:t,header:{heading:d.formatMessage({id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"})},children:[k.jsx(Pn.Body,{children:k.jsxs(De,{gap:"4",children:[(l||f)&&k.jsx(at,{name:"frist",control:g.control,label:k.jsx(W,{id:"SettPaVentModal.Frist"}),validate:[gn,nt,vg]}),k.jsx(B0,{name:"ventearsak",control:g.control,label:k.jsx(W,{id:"SettPaVentModal.Arsak"}),validate:[gn],selectValues:n.filter(I=>!l||(s?$0(I,m):H0.some(b=>b===I.kode))).sort((I,b)=>I.navn.localeCompare(b.navn)).map(I=>k.jsx("option",{value:I.kode,children:I.navn},I.kode)),readOnly:!l}),o&&k.jsx(se,{size:"small",children:k.jsx(W,{id:"SettPaVentModal.BrevBlirBestilt"})}),l&&k.jsx(se,{size:"small",children:k.jsx(W,{id:"SettPaVentModal.EndreFrist"})}),!l&&A&&k.jsxs(k.Fragment,{children:[k.jsx(se,{size:"small",children:k.jsx(W,{id:"SettPaVentModal.UtløptFrist"})}),k.jsx(se,{size:"small",children:k.jsx(W,{id:"SettPaVentModal.HenleggeSaken"})})]})]})}),k.jsxs(Pn.Footer,{children:[k.jsx(Pe,{size:"small",variant:"primary",style:{paddingInline:"36px"},onClick:h?pg:t,disabled:!y&&!w,children:k.jsx(W,{id:"SettPaVentModal.Ok"})}),(!l||h||!o)&&k.jsx(Pe,{size:"small",variant:"secondary",onClick:t,type:"button",children:k.jsx(W,{id:y||w?"SettPaVentModal.Avbryt":"SettPaVentModal.Lukk"})})]})]})})},G0=()=>{const e=ze().toDate();return e.setDate(e.getDate()+28),ze(e).format(Sn)},U0=(e,t,r)=>({ventearsak:r??void 0,frist:t||e===!1?t??void 0:G0()}),H0=[$e.AVV_DOK,$e.AVV_FODSEL,$e.VENT_PÅ_BRUKERTILBAKEMELDING,$e.UTV_FRIST,$e.FOR_TIDLIG_SOKNAD,$e.VENT_OPDT_INNTEKTSMELDING,$e.VENT_UTLAND_TRYGD,$e.UTVIDET_TILSVAR_FRIST,$e.ENDRE_TILKJENT_YTELSE,$e.VENT_PÅ_MULIG_MOTREGNING],Y0=[$e.VENT_PÅ_BRUKERTILBAKEMELDING,$e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG],$0=(e,t)=>Y0.some(r=>r===e.kode)?e.kode===t:!0,W0=(e,t,r,n)=>{const s=e&&(!!r&&ci(r)===null||!!t&&ci(t)===null),a=n===$e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;return e&&s&&a},z0=(e,t)=>!(e===t||!t&&!e),J0=(e,t)=>!(e===t||!t&&!e);Xu.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModal",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  frist?: string;
  ventearsak?: string;
}`,signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!1}}]}},name:"formData"}],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},ventearsaker:{required:!0,tsType:{name:"union",raw:"KodeverkMedNavn<'Venteårsak'>[] | KodeverkMedNavnTilbakekreving<'Venteårsak'>[]",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Venteårsak'>[]"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},frist:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},ventearsak:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},defaultVenteårsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const X0={"SettPaVentModal.ModalDescription":"Behandlingen settes på vent med frist","SettPaVentModal.ModalDescriptionErPaVent":"Behandlingen er satt på vent","SettPaVentModal.PaVent":"På vent","SettPaVentModal.SettesPaVent":"Behandlingen settes på vent","SettPaVentModal.ErSettPaVent":"Behandlingen er satt på vent","SettPaVentModal.Frist":"Frist","SettPaVentModal.Ok":"OK","SettPaVentModal.Avbryt":"Avbryt","SettPaVentModal.Lukk":"Lukk","SettPaVentModal.BrevBlirBestilt":"Brevet blir bestilt","SettPaVentModal.Arsak":"Årsak","SettPaVentModal.EndreFrist":"Du kan endre frist eller årsak før du fortsetter","SettPaVentModal.UtløptFrist":"OBS! Fristen på denne behandlingen er utløpt!","SettPaVentModal.HenleggeSaken":`Kontroller hvorfor Økonomi ikke har dannet et kravgrunnlag.
 Dersom det feilutbetalte beløpet er bortfalt skal saken henlegges.
For mer informasjon, se rutine under tilbakekreving.`},Q0=mr(X0),Qu=({frist:e=null,ventearsak:t=null,hasManualPaVent:r=!1,...n})=>k.jsx($l,{value:Q0,children:k.jsx(Xu,{frist:e,ventearsak:t,hasManualPaVent:r,...n})});Qu.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModalIndex",props:{cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  frist?: string;
  ventearsak?: string;
}`,signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!1}}]}},name:"formData"}],return:{name:"void"}}},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},ventearsaker:{required:!0,tsType:{name:"union",raw:"KodeverkMedNavn<'Venteårsak'>[] | KodeverkMedNavnTilbakekreving<'Venteårsak'>[]",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Venteårsak'>[]"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},frist:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},ventearsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:""},hasManualPaVent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};const oi=c.createContext({isDirty:!1,setDirty:()=>{}}),Zu=({children:e})=>{const[t,r]=c.useState(!1),n=c.useMemo(()=>({isDirty:t,setDirty:r}),[t,r]);return k.jsx(oi.Provider,{value:n,children:e})},li=e=>{const t=c.useContext(oi);c.useEffect(()=>{t.setDirty(e)},[e])},Z0=()=>c.useContext(oi).isDirty;Zu.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const Mo=(e,t)=>({arbeidsgiverIdent:e,arbeidsgiverNavn:t.navn,...t.erPrivatPerson?{erPrivatPerson:!0,arbeidsgiverFødselsdato:t.fødselsdato}:{erPrivatPerson:!1}}),qt=e=>t=>t.arbeidsgiverIdent===e.arbeidsgiverIdent,eI=(e,t)=>{const{fom:r,tom:n,saksbehandlersVurdering:s,stillingsprosent:a,begrunnelse:i}=e;if(e.saksbehandlersVurdering)return e.saksbehandlersVurdering===ce.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===ce.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverNavn:t,fom:r,tom:n,stillingsprosent:a,saksbehandlersVurdering:s??void 0,begrunnelse:i??void 0}:{saksbehandlersVurdering:s??void 0,begrunnelse:i??void 0}},nI=({saksbehandlersVurdering:e,begrunnelse:t})=>e?{saksbehandlersVurdering:e,begrunnelse:t??void 0}:void 0,rI=(e,t)=>e.filter(r=>r.arbeidsgiverIdent===t),tI=(e,t)=>t.map(r=>{const n=e.find(s=>sI(r,s));return{arbeidsforhold:r,inntektsmelding:n}}),sI=(e,t)=>t.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!t.internArbeidsforholdId||t.internArbeidsforholdId===e.internArbeidsforholdId),aI=e=>e.årsak?-1:1,iI=(e,t)=>{const r=e.årsak,n=t.årsak;return r&&!n?-1:n&&!r?1:e.arbeidsgiverNavn.localeCompare(t.arbeidsgiverNavn)},oI=(e,t)=>{const{arbeidsforhold:r,inntektsmeldinger:n,inntekter:s}=e,a=[...r.sort(aI)].reduce((o,l)=>{var w,h;if(o.find(qt(l)))return o;const d=r.filter(qt(l)),g=Mo(l.arbeidsgiverIdent,t[l.arbeidsgiverIdent]),f=rI(n,l.arbeidsgiverIdent),m=((w=s.find(qt(l)))==null?void 0:w.inntekter)??[],y={...g,årsak:l.årsak??((h=f[0])==null?void 0:h.årsak)??void 0,avklaring:eI(l,g.arbeidsgiverNavn),arbeidsforholdForRad:d,inntektsmeldingerForRad:f,inntektsposter:m};return o.concat(y)},[]),i=n.filter(o=>!r.some(l=>o.arbeidsgiverIdent===l.arbeidsgiverIdent)).map(o=>{var d;const l=Mo(o.arbeidsgiverIdent,t[o.arbeidsgiverIdent]),u=((d=s.find(qt(o)))==null?void 0:d.inntekter)??[];return{...l,årsak:o.årsak??void 0,avklaring:nI(o),arbeidsforholdForRad:[],inntektsmeldingerForRad:[o],inntektsposter:u}});return a.concat(i).sort(iI)},Do=e=>{const t=e.findIndex(r=>r.årsak&&!r.avklaring);return t!==-1?[t]:[]};var la={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var So;function lI(){return So||(So=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(a=s(a,n.call(this,o)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var o in a)t.call(a,o)&&a[o]&&(i=s(i,this&&this[o]||o));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(la)),la.exports}var dI=lI();const uI=Ul(dI),eg=({saksnummer:e,journalpostId:t,dokumentId:r,dokumentTittel:n,children:s})=>{const a=`${t}-${r}`,i=jg(e,t,r);return k.jsx(Xa,{href:i,target:a,rel:"noopener noreferrer",onClick:gI(n),children:s??n})},gI=e=>t=>{e&&(t.preventDefault(),Eg(t.currentTarget.href,t.currentTarget.target,e))};eg.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""}}};const mI="_inline_glms2_1",cI="_docIcon_glms2_9",fI="_phoneIcon_glms2_14",da={inline:mI,docIcon:cI,phoneIcon:fI},it=({saksnummer:e,arbeidsforhold:t,inntektsmelding:r,skalViseArbeidsforholdId:n,alleKodeverk:s,ikkeVisInfo:a,radData:i})=>{var o;return k.jsxs(k.Fragment,{children:[k.jsxs(De,{gap:"4",children:[!a&&k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:i.erPrivatPerson?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),k.jsx(se,{size:"small",children:i.erPrivatPerson?k.jsx(bs,{dateString:i.arbeidsgiverFødselsdato}):i.arbeidsgiverIdent})]}),n&&k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),k.jsx(se,{size:"small",children:r.eksternArbeidsforholdId})]}),t&&k.jsxs(k.Fragment,{children:[k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),k.jsx(se,{size:"small",children:`${t.stillingsprosent}%`})]}),t.permisjonOgMangel&&k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:((o=s.PermisjonsbeskrivelseType.find(l=>{var u;return l.kode===((u=t.permisjonOgMangel)==null?void 0:u.type)}))==null?void 0:o.navn)??""}),k.jsx(se,{size:"small",children:k.jsx(et,{dateStringFom:t.permisjonOgMangel.permisjonFom,dateStringTom:t.permisjonOgMangel.permisjonTom})})]})]}),k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),k.jsx(se,{size:"small",children:k.jsx(Ia,{beløp:r.inntektPrMnd})})]}),k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),k.jsx(se,{size:"small",children:k.jsx(W,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),r.refusjonPrMnd!==void 0&&r.refusjonPrMnd!==null&&k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),k.jsx(se,{size:"small",children:k.jsx(Ia,{beløp:r.refusjonPrMnd})})]}),k.jsxs(eg,{saksnummer:e,journalpostId:r.journalpostId,dokumentId:r.dokumentId,children:[k.jsx(se,{size:"small",className:da.inline,children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),k.jsx(Xg,{className:da.docIcon})]})]}),k.jsxs(he,{gap:"4",children:[k.jsx(lm,{className:da.phoneIcon}),k.jsxs(De,{gap:"1",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),k.jsx(Nr,{children:r.kontaktpersonNavn}),k.jsx(Nr,{children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})]})]})};it.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const kI="_inline_10adz_1",vI="_aksjonpunktImage_10adz_5",pI="_arrow_10adz_12",yI="_ikkeMottatt_10adz_18",bI="_skiller_10adz_30",rr={inline:kI,aksjonpunktImage:vI,arrow:pI,ikkeMottatt:yI,skiller:bI},di=({saksnummer:e,alleKodeverk:t,radData:r})=>{var f;const n=Qn(),[s,a]=c.useState({}),{arbeidsforholdForRad:i,inntektsmeldingerForRad:o,arbeidsgiverIdent:l,erPrivatPerson:u}=r,d=i.length===1,g=tI(o,i);return k.jsxs(De,{gap:"4",children:[k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:u?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),k.jsx(se,{size:"small",children:u?k.jsx(bs,{dateString:r.arbeidsgiverFødselsdato}):l})]}),!d&&k.jsxs(k.Fragment,{children:[k.jsx(Eo,{dividerParagraf:!0,className:rr.skiller}),g.map(({arbeidsforhold:m,inntektsmelding:y})=>{var w;return k.jsxs(v.Fragment,{children:[k.jsxs(De,{gap:"2",children:[k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),k.jsxs("div",{children:[(m==null?void 0:m.eksternArbeidsforholdId)&&m.eksternArbeidsforholdId.length<50&&k.jsx("div",{children:k.jsx(se,{size:"small",children:m.eksternArbeidsforholdId})}),(m==null?void 0:m.eksternArbeidsforholdId)&&m.eksternArbeidsforholdId.length>=50&&k.jsx(xu,{content:hI(m.eksternArbeidsforholdId),children:k.jsx(se,{size:"small",children:`${m.eksternArbeidsforholdId.substring(0,50)}...`})}),!m.eksternArbeidsforholdId&&k.jsx(se,{size:"small",children:"-"})]}),y&&k.jsxs(k.Fragment,{children:[k.jsx(Tr,{}),k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!y&&k.jsxs(k.Fragment,{children:[k.jsx(Tr,{}),k.jsxs("div",{children:[k.jsx(Pa,{className:rr.aksjonpunktImage,title:n.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),k.jsx("div",{className:rr.ikkeMottatt,children:k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),k.jsx(se,{size:"small",children:k.jsx(et,{dateStringFom:m.fom,dateStringTom:m.tom})}),y&&k.jsxs(k.Fragment,{children:[k.jsx(Tr,{}),k.jsx(se,{size:"small",children:k.jsx(bs,{dateString:y.motattDato})})]})]}),k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),k.jsx(se,{size:"small",children:`${m.stillingsprosent}%`})]}),m.permisjonOgMangel&&k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:((w=t.PermisjonsbeskrivelseType.find(h=>{var A;return h.kode===((A=m.permisjonOgMangel)==null?void 0:A.type)}))==null?void 0:w.navn)??""}),k.jsx(se,{size:"small",children:k.jsx(et,{dateStringFom:m.permisjonOgMangel.permisjonFom,dateStringTom:m.permisjonOgMangel.permisjonTom})})]}),y&&k.jsxs(k.Fragment,{children:[m.internArbeidsforholdId&&s[m.internArbeidsforholdId]&&k.jsx(it,{saksnummer:e,inntektsmelding:y,skalViseArbeidsforholdId:!1,radData:r,alleKodeverk:t}),k.jsxs(Xa,{onClick:h=>{h.preventDefault(),a(A=>{if(!m.internArbeidsforholdId)return A;const I=A[m.internArbeidsforholdId];return{...A,[m.internArbeidsforholdId]:I===void 0||I===!1}})},href:"",children:[k.jsx("span",{children:k.jsx(se,{size:"small",className:rr.inline,children:k.jsx(W,{id:!m.internArbeidsforholdId||!s[m.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),m.internArbeidsforholdId&&s[m.internArbeidsforholdId]?k.jsx(nd,{className:rr.arrow}):k.jsx(ws,{className:rr.arrow})]})]})]}),k.jsx(Eo,{dividerParagraf:!0,className:rr.skiller})]},`${m.arbeidsgiverIdent}${m.internArbeidsforholdId}`)})]}),d&&g.length>0&&g[0].inntektsmelding&&k.jsx(it,{saksnummer:e,radData:r,arbeidsforhold:i[0],inntektsmelding:g[0].inntektsmelding,skalViseArbeidsforholdId:o.length>1,alleKodeverk:t,ikkeVisInfo:!0}),d&&o.length===0&&k.jsxs(k.Fragment,{children:[k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),k.jsx(se,{size:"small",children:`${i[0].stillingsprosent}%`})]}),i[0].permisjonOgMangel&&k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:((f=t.PermisjonsbeskrivelseType.find(m=>{var y;return m.kode===((y=i[0].permisjonOgMangel)==null?void 0:y.type)}))==null?void 0:f.navn)??""}),k.jsx(se,{size:"small",children:k.jsx(et,{dateStringFom:i[0].permisjonOgMangel.permisjonFom,dateStringTom:i[0].permisjonOgMangel.permisjonTom})})]})]})]})},hI=e=>{const t=Math.ceil(e.length/25);return Array.from({length:t},(n,s)=>e.slice(s*25,s*25+25)).join("-")};di.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const II="_bredde_gb3eb_1",wI="_inline_gb3eb_9",AI="_arrow_gb3eb_13",_t={bredde:II,inline:wI,arrow:AI},ja=({saksnummer:e,skjæringstidspunkt:t,alleKodeverk:r,radData:n})=>{const[s,a]=c.useState(!1),{inntektsposter:i,arbeidsforholdForRad:o}=n,l=jI(t,i),u=o.length===1,d=i.length>0&&i.some(g=>g.beløp>0);return k.jsxs(De,{gap:"8",children:[k.jsx(di,{saksnummer:e,alleKodeverk:r,radData:n}),d&&k.jsxs(De,{gap:"2",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:u?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),k.jsx(De,{gap:"1",children:l.filter((g,f)=>s?!0:f<3).map(g=>k.jsxs(he,{gap:"2",className:_t.bredde,children:[k.jsx(se,{size:"small",children:k.jsx(W,{id:`ArbeidsforholdInformasjonPanel.${ze(g.fom).month()+1}`})}),k.jsx(se,{size:"small",children:ze(g.fom).year()}),k.jsx(Tr,{}),k.jsx(se,{size:"small",children:k.jsx(Ia,{beløp:g.beløp})})]},g.fom))}),k.jsxs(Xa,{onClick:g=>{g.preventDefault(),a(!s)},href:"",children:[k.jsx("span",{children:k.jsx(se,{size:"small",className:_t.inline,children:k.jsx(W,{id:s?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),s?k.jsx(nd,{className:_t.arrow}):k.jsx(ws,{className:_t.arrow})]})]}),!d&&k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})},jI=(e,t)=>{const n=ze(e).subtract(1,"month").startOf("month"),s=n.subtract(12,"month"),a=[];for(let i=n;i.isAfter(s);i=i.subtract(1,"month")){const o=i.format(Sn),l=t.find(u=>ze(u.fom).startOf("month").format(Sn)===o);a.push({beløp:(l==null?void 0:l.beløp)||0,fom:o})}return a};ja.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const EI="_hjelpetekst_tezw4_1",TI="_alertStripe_tezw4_5",OI="_hjelpetekstInnhold_tezw4_9",NI="_svg_tezw4_14",Mt={hjelpetekst:EI,alertStripe:TI,hjelpetekstInnhold:OI,svg:NI},RI=Ta(3),PI=Oa(1500),qI=zl(1),_I=Jl(100),ng=({behandlingUuid:e,behandlingVersjon:t,radData:r,isReadOnly:n,registrerArbeidsforhold:s,lagreVurdering:a,lukkArbeidsforholdRad:i,oppdaterTabell:o})=>{var b,j,p,N,O;const l=Qn(),u={saksbehandlersVurdering:(b=r.avklaring)==null?void 0:b.saksbehandlersVurdering,begrunnelse:(j=r.avklaring)==null?void 0:j.begrunnelse,fom:(p=r.avklaring)==null?void 0:p.fom,tom:(N=r.avklaring)==null?void 0:N.tom,stillingsprosent:(O=r.avklaring)==null?void 0:O.stillingsprosent},d=Ss({defaultValues:u});li(d.formState.isDirty);const g=d.watch("saksbehandlersVurdering"),f=()=>{i(),d.reset(u)},m=r.inntektsmeldingerForRad[0],y=R=>{const P=DI(o,r,m,R);return R.saksbehandlersVurdering===ce.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?s({behandlingUuid:e,behandlingVersjon:t,internArbeidsforholdRef:m.internArbeidsforholdId,arbeidsgiverNavn:r.arbeidsgiverNavn,arbeidsgiverIdent:m.arbeidsgiverIdent,vurdering:ce.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:R.begrunnelse,fom:R.fom,tom:R.tom,stillingsprosent:R.stillingsprosent}).then(P).finally(()=>d.reset(R)):a({behandlingUuid:e,behandlingVersjon:t,vurdering:R.saksbehandlersVurdering,begrunnelse:R.begrunnelse,arbeidsgiverIdent:m.arbeidsgiverIdent,internArbeidsforholdRef:m.internArbeidsforholdId}).then(P).finally(()=>d.reset(R))},w=c.useRef(null),[h,A]=c.useState(!1),I=()=>A(R=>!R);return k.jsxs(De,{gap:"8",children:[k.jsx("div",{className:Mt.alertStripe,children:k.jsx(kt,{variant:"info",children:k.jsx(W,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),k.jsx(Fs,{formMethods:d,onSubmit:y,children:k.jsxs(De,{gap:"4",children:[k.jsx(Ju,{name:"saksbehandlersVurdering",control:d.control,label:k.jsxs(he,{gap:"2",children:[k.jsx(W,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),k.jsx(td,{className:Mt.svg,ref:w,onClick:I,title:l.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),k.jsx(_r,{open:h,onClose:I,anchorEl:w.current,className:Mt.hjelpetekst,children:k.jsx(_r.Content,{className:Mt.hjelpetekstInnhold,children:k.jsx(se,{children:k.jsx(W,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[gn],isReadOnly:n,radios:[{label:l.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:ce.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:l.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:ce.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:l.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:ce.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),g===ce.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&k.jsxs(he,{gap:"4",children:[k.jsx(at,{name:"fom",control:d.control,label:k.jsx(W,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[gn,nt],isReadOnly:n}),k.jsx(at,{name:"tom",control:d.control,label:k.jsx(W,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[nt,MI(d.getValues)],isReadOnly:n}),k.jsx(Aa,{name:"stillingsprosent",control:d.control,label:k.jsx(W,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:R=>{const P=parseInt(R.toString(),10);return Number.isNaN(P)?R:P},validate:[gn,Wl,qI,_I],readOnly:n,maxLength:3})]}),k.jsx(ii,{name:"begrunnelse",control:d.control,label:k.jsx(W,{id:"ManglendeOpplysningerForm.Begrunn"}),validate:[gn,RI,PI,Na],maxLength:1500,readOnly:n}),!n&&k.jsxs(he,{gap:"4",children:[k.jsx(Pe,{size:"small",variant:"secondary",loading:d.formState.isSubmitting,disabled:!d.formState.isDirty||d.formState.isSubmitting,children:k.jsx(W,{id:"ManglendeOpplysningerForm.Lagre"})}),k.jsx(Pe,{size:"small",variant:"tertiary",loading:!1,disabled:d.formState.isSubmitting,onClick:f,type:"button",children:k.jsx(W,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})},MI=e=>t=>{const r=e("fom");return r&&t?Xl(r)(t):null},DI=(e,t,r,n)=>()=>{e(s=>s.map(a=>{if(r.arbeidsgiverIdent===a.arbeidsgiverIdent){const o=n.saksbehandlersVurdering===ce.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:r.arbeidsgiverIdent,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent,begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering}:{begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering};return{...t,avklaring:o}}return a}))};ng.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const SI="_alertStripe_1jozr_1",xI="_hjelpetekst_1jozr_5",FI="_hjelpetekstInnhold_1jozr_9",VI="_svg_1jozr_14",Dt={alertStripe:SI,hjelpetekst:xI,hjelpetekstInnhold:FI,svg:VI},LI=Ta(3),BI=Oa(1500),rg=({behandlingUuid:e,behandlingVersjon:t,radData:r,isReadOnly:n,lagreVurdering:s,lukkArbeidsforholdRad:a,oppdaterTabell:i})=>{var j,p;const o=Qn(),{arbeidsforholdForRad:l,inntektsmeldingerForRad:u}=r,d={saksbehandlersVurdering:(j=r.avklaring)==null?void 0:j.saksbehandlersVurdering,begrunnelse:(p=r.avklaring)==null?void 0:p.begrunnelse},g=Ss({defaultValues:d});li(g.formState.isDirty);const f=l.length===1,m=()=>{a(),g.reset(d)},y=N=>{const O={behandlingUuid:e,behandlingVersjon:t,vurdering:N.saksbehandlersVurdering,arbeidsgiverIdent:r.arbeidsgiverIdent,internArbeidsforholdRef:f?l[0].internArbeidsforholdId:void 0,begrunnelse:N.begrunnelse};return s(O).then(CI(i,r,N)).finally(()=>g.reset(N))},w=c.useRef(null),[h,A]=c.useState(!1),I=()=>A(N=>!N),b=[{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:ce.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:ce.FORTSETT_UTEN_INNTEKTSMELDING}];return r.erPrivatPerson||b.splice(1,0,{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:ce.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),k.jsx(Fs,{formMethods:g,onSubmit:y,children:k.jsxs(De,{gap:"4",children:[!f&&u.length>0&&k.jsx("div",{className:Dt.alertStripe,children:k.jsx(kt,{variant:"info",children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),k.jsx(Ju,{name:"saksbehandlersVurdering",control:g.control,label:k.jsxs(he,{gap:"2",children:[k.jsx(W,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),k.jsx(td,{ref:w,onClick:I,className:Dt.svg,title:o.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),k.jsx(_r,{open:h,onClose:I,anchorEl:w.current,className:Dt.hjelpetekst,children:k.jsx(_r.Content,{className:Dt.hjelpetekstInnhold,children:k.jsxs(De,{gap:"4",children:[k.jsx(se,{children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),k.jsx(se,{children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),k.jsx(se,{children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[gn],isReadOnly:n,radios:b}),k.jsx(ii,{name:"begrunnelse",control:g.control,label:k.jsx(W,{id:f?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),validate:[gn,LI,BI,Na],maxLength:1500,readOnly:n}),!n&&k.jsxs(he,{gap:"4",children:[k.jsx(Pe,{size:"small",variant:"secondary",loading:g.formState.isSubmitting,disabled:!g.formState.isDirty||g.formState.isSubmitting,children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.Lagre"})}),k.jsx(Pe,{size:"small",variant:"tertiary",loading:!1,disabled:g.formState.isSubmitting,onClick:m,type:"button",children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})},CI=(e,t,r)=>()=>{e(n=>n.map(s=>s.arbeidsgiverIdent===t.arbeidsgiverIdent?{...t,avklaring:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}}:s))};rg.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const ot="342352362",KI=Ta(3),GI=Oa(1500),UI=zl(1),HI=Jl(100),ui=({behandlingUuid:e,behandlingVersjon:t,isReadOnly:r,registrerArbeidsforhold:n,radData:s,lukkArbeidsforholdRad:a,erOverstyrt:i,oppdaterTabell:o,erNyttArbeidsforhold:l=!1})=>{var A,I,b,j,p;const u=Qn(),[d,g]=c.useState(!1),f={fom:(A=s==null?void 0:s.avklaring)==null?void 0:A.fom,tom:(I=s==null?void 0:s.avklaring)==null?void 0:I.tom,stillingsprosent:(b=s==null?void 0:s.avklaring)==null?void 0:b.stillingsprosent,begrunnelse:(j=s==null?void 0:s.avklaring)==null?void 0:j.begrunnelse,arbeidsgiverNavn:(p=s==null?void 0:s.avklaring)==null?void 0:p.arbeidsgiverNavn},m=Ss({defaultValues:f});li(m.formState.isDirty);const y=()=>{a(),m.reset(f)},w=N=>{const O=xo(ce.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,e,t,N);return n(O).then(()=>{o($I(N)),m.reset(N),l&&a()})},h=()=>{const N=m.getValues(),O=xo(ce.FJERN_FRA_BEHANDLINGEN,e,t,N);n(O).then(WI(o,a,l))};return k.jsxs(De,{gap:"4",children:[!s&&k.jsx(Is,{size:"small",children:k.jsx(W,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),k.jsx(Fs,{formMethods:m,onSubmit:w,children:k.jsxs(De,{gap:"6",children:[k.jsxs(he,{gap:"4",children:[i&&k.jsxs(k.Fragment,{children:[k.jsx(Aa,{name:"arbeidsgiverNavn",control:m.control,label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[gn],readOnly:r||!i}),k.jsx(at,{name:"fom",control:m.control,label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[gn,nt],isReadOnly:r||!i}),k.jsx(at,{name:"tom",control:m.control,label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[nt,YI(m.getValues)],isReadOnly:r||!i})]}),k.jsx(Aa,{name:"stillingsprosent",control:m.control,label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:N=>{const O=parseInt(N.toString(),10);return Number.isNaN(O)?N:O},validate:[gn,Wl,UI,HI],readOnly:r||!i,maxLength:3})]}),k.jsx(ii,{name:"begrunnelse",control:m.control,label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Begrunn"}),validate:[gn,KI,GI,Na],maxLength:1500,readOnly:r||!i}),i&&k.jsxs(he,{gap:"4",children:[k.jsx(Pe,{size:"small",variant:"secondary",loading:m.formState.isSubmitting,disabled:!m.formState.isDirty||m.formState.isSubmitting,children:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Lagre"})}),k.jsx(Pe,{size:"small",variant:"tertiary",loading:!1,disabled:m.formState.isSubmitting,onClick:y,type:"button",children:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),s&&k.jsxs(k.Fragment,{children:[k.jsx(Tr,{}),k.jsx(Pe,{size:"small",variant:"tertiary",loading:!1,disabled:m.formState.isSubmitting,onClick:()=>g(!0),type:"button",icon:k.jsx(pm,{"aria-hidden":!0}),children:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),d&&k.jsx(h0,{text:u.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:h,cancel:()=>g(!1),showModal:!0})]})},xo=(e,t,r,n)=>({vurdering:e,behandlingUuid:t,behandlingVersjon:r,arbeidsgiverIdent:ot,begrunnelse:n.begrunnelse,arbeidsgiverNavn:n.arbeidsgiverNavn,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent}),YI=e=>t=>{const r=e("fom");return t&&r?Xl(r)(t):null},$I=e=>t=>{const r={erPrivatPerson:!1,arbeidsgiverIdent:ot,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:ce.MANUELT_OPPRETTET_AV_SAKSBEHANDLER},inntektsmeldingerForRad:[],inntektsposter:[],arbeidsforholdForRad:[]},n=t.findIndex(s=>s.arbeidsgiverIdent===ot);return n===-1?t.concat(r):t.map((s,a)=>a===n?r:s)},WI=(e,t,r)=>()=>{e(n=>n.filter(s=>s.arbeidsgiverIdent!==ot)),r&&t()};ui.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},radData:{required:!1,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const zI="_exclamationmarkIcon_1a4yb_1",JI="_checkmarkIcon_1a4yb_8",XI="_panelOpen_1a4yb_15",QI="_panelOpenAp_1a4yb_24",ZI="_row_1a4yb_34",ew="_isOpen_1a4yb_40",nw="_isApOpen_1a4yb_44",zr={exclamationmarkIcon:zI,checkmarkIcon:JI,panelOpen:XI,panelOpenAp:QI,row:ZI,isOpen:ew,isApOpen:nw},rw=uI.bind(zr),tg=({saksnummer:e,behandlingUuid:t,behandlingVersjon:r,radData:n,isReadOnly:s,erOverstyrt:a,oppdaterTabell:i,registrerArbeidsforhold:o,lagreVurdering:l,toggleÅpenRad:u,erRadÅpen:d,alleKodeverk:g,skjæringstidspunkt:f})=>{const m=Qn(),{inntektsmeldingerForRad:y,arbeidsforholdForRad:w,arbeidsgiverNavn:h,avklaring:A,årsak:I}=n,b=(A==null?void 0:A.saksbehandlersVurdering)===ce.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,j=w.length>0&&y.length>0&&!I,p=I===Ve.MANGLENDE_INNTEKTSMELDING,N=I===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,O=!!I&&!(A!=null&&A.saksbehandlersVurdering),R=w.length>0&&y.length===0&&!I&&!b,P=w.length===0&&y.length>0&&!I,D=sw(w,A);return k.jsxs(Te.ExpandableRow,{open:d,onOpenChange:u,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:rw("row",{isOpen:d,isApOpen:O}),content:k.jsxs(De,{gap:"4",className:O?zr.panelOpenAp:zr.panelOpen,children:[b&&k.jsx(ui,{behandlingUuid:t,behandlingVersjon:r,isReadOnly:!1,registrerArbeidsforhold:o,radData:n,lukkArbeidsforholdRad:u,erOverstyrt:a,oppdaterTabell:i}),j&&k.jsx(di,{saksnummer:e,alleKodeverk:g,radData:n}),P&&k.jsx(it,{saksnummer:e,arbeidsforhold:w.length>0?w[0]:void 0,inntektsmelding:y[0],skalViseArbeidsforholdId:!1,alleKodeverk:g,radData:n}),p&&k.jsxs(k.Fragment,{children:[k.jsx(ja,{saksnummer:e,skjæringstidspunkt:f,alleKodeverk:g,radData:n}),k.jsx(rg,{behandlingUuid:t,behandlingVersjon:r,isReadOnly:s,radData:n,lagreVurdering:l,lukkArbeidsforholdRad:u,oppdaterTabell:i})]}),N&&k.jsxs(k.Fragment,{children:[k.jsx(it,{saksnummer:e,inntektsmelding:y[0],skalViseArbeidsforholdId:y.length>1,radData:n,alleKodeverk:g}),k.jsx(ng,{behandlingUuid:t,behandlingVersjon:r,radData:n,isReadOnly:s,registrerArbeidsforhold:o,lagreVurdering:l,lukkArbeidsforholdRad:u,oppdaterTabell:i})]}),R&&k.jsx(ja,{saksnummer:e,skjæringstidspunkt:f,alleKodeverk:g,radData:n})]}),children:[k.jsxs(Te.DataCell,{children:[!O&&k.jsx(Ug,{title:m.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:zr.checkmarkIcon}),O&&k.jsx(Pa,{title:m.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:zr.exclamationmarkIcon})]}),k.jsx(Te.DataCell,{children:k.jsx(se,{children:h})}),k.jsx(Te.DataCell,{children:k.jsx(se,{children:D!=null&&D.fom?k.jsx(et,{dateStringFom:D.fom,dateStringTom:D.tom}):"-"})}),k.jsx(Te.DataCell,{children:k.jsx(se,{children:k.jsx(W,{id:tw(b,w.length>0)})})}),k.jsx(Te.DataCell,{children:k.jsxs(se,{children:[w.length<2&&y.length===1&&k.jsx(bs,{dateString:y[0].motattDato}),!p&&w.length>1&&y.length===w.length&&k.jsx(W,{id:"ArbeidsforholdRad.Mottatt"}),(b||p&&y.length<w.length)&&k.jsx(W,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})},tw=(e,t)=>e?"ArbeidsforholdRad.Saksbehandler":t?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",sw=(e,t)=>{if((t==null?void 0:t.saksbehandlersVurdering)===ce.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||(t==null?void 0:t.saksbehandlersVurdering)===ce.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:t==null?void 0:t.fom,tom:t==null?void 0:t.tom};const r=e.reduce((n,s)=>({fom:n.fom&&ze(n.fom).isBefore(s.fom)?n.fom:s.fom,tom:n.tom&&ze(n.tom).isAfter(s.tom)?n.tom:s.tom}),{fom:void 0,tom:void 0});return r.fom?r:void 0};tg.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},toggleÅpenRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erRadÅpen:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const aw="_alertStripe_mucgx_5",iw={alertStripe:aw},sg=({behandling:e,aksjonspunkt:t,readOnly:r,arbeidOgInntekt:n,registrerArbeidsforhold:s,erOverstyrer:a,tabellData:i,settÅpneRadIndexer:o,setErOverstyrt:l,oppdaterTabell:u})=>{const d=Qn(),{arbeidsforhold:g,inntektsmeldinger:f}=n,[m,y]=c.useState(!1),[w,h]=c.useState(!1),A=()=>{l(!0),y(!0);const p=i.findIndex(N=>{var O;return((O=N.avklaring)==null?void 0:O.saksbehandlersVurdering)===ce.MANUELT_OPPRETTET_AV_SAKSBEHANDLER});p!==-1&&o([p])},I=ow(i,t),b=i.every(p=>p.arbeidsgiverIdent!==ot),j=(t==null?void 0:t.status)===Ye.OPPRETTET;return k.jsxs(De,{gap:"8",children:[k.jsxs(he,{gap:"4",children:[k.jsx(Is,{size:"small",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),a&&j&&!r&&k.jsx(d0,{onClick:A}),k.jsx(Tr,{}),k.jsx(se,{size:"small",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Yl(n.skjæringstidspunkt)}})})]}),k.jsxs(De,{gap:"4",children:[I.length>0&&k.jsx(l0,{children:I.map(p=>d.formatMessage({id:p})).join(" ")}),g.length===0&&f.length===0&&a&&k.jsx("div",{className:iw.alertStripe,children:k.jsx(kt,{variant:"info",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),m&&b&&!w&&k.jsx("div",{children:k.jsx(Pe,{size:"small",variant:"tertiary",icon:k.jsx(um,{"aria-hidden":!0}),onClick:()=>h(!0),children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),w&&k.jsx(ui,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:s,lukkArbeidsforholdRad:()=>h(!1),oppdaterTabell:u,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})},ow=(e,t)=>{const r=e.some(i=>i.årsak===Ve.MANGLENDE_INNTEKTSMELDING),n=e.some(i=>i.årsak===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),s=(t==null?void 0:t.status)===Ye.OPPRETTET,a=[];return s&&r&&a.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),s&&n&&a.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),a};sg.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
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
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},tabellData:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"},description:""},settÅpneRadIndexer:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<number[]>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<number[]>",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"}]}]},description:""},setErOverstyrt:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"intersection",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
} & AGOpplysninger`,elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldingerForRad: Inntektsmelding[];
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsposter: Inntektspost[];
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
    erPrivatPerson: true;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
    arbeidsgiverFødselsdato: string;
  }
| {
    erPrivatPerson: false;
    arbeidsgiverIdent: string;
    arbeidsgiverNavn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const lw="_alertStripe_7z8j7_1",dw="_headerRow_7z8j7_5",Fo={alertStripe:lw,headerRow:dw},ag=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:s,settBehandlingPåVentCallback:a,åpneForNyVurdering:i})=>{const[o,l]=c.useState(!1),[u,d]=c.useState(!1),[g,f]=c.useState(!1),{alleKodeverk:m,submitCallback:y,aksjonspunkterForPanel:w,behandling:h,fagsak:A,isReadOnly:I}=yg(),b=w.length>0?w[0]:void 0,{mellomlagretFormData:j,setMellomlagretFormData:p}=bg(),[N,O]=c.useState(j??oI(e,t)),[R,P]=c.useState(Do(N)),D=Z0();c.useEffect(()=>()=>{p(N)},[N]);const F=G=>{R.some(ne=>ne===G)?P(R.filter(ne=>ne!==G)):P(R.concat(G))},M=c.useRef(null),T=G=>{var ne;O(G),P(Do(G(N))),(ne=M==null?void 0:M.current)==null||ne.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},_=()=>{l(!0),y({kode:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},x=()=>{l(!0),i()},B=G=>{l(!0),d(!1);const{frist:ne,ventearsak:re}=G;re&&a({frist:ne,ventearsak:re})},C=N.some(G=>{var ne,re,de;return((ne=G.avklaring)==null?void 0:ne.saksbehandlersVurdering)===ce.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||((re=G.avklaring)==null?void 0:re.saksbehandlersVurdering)===ce.MELDING_TIL_ARBEIDSGIVER_NAV_NO||((de=G.avklaring)==null?void 0:de.saksbehandlersVurdering)===ce.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}),L=N.every(G=>!G.årsak||G.årsak&&G.avklaring),V=b===void 0,H=(b==null?void 0:b.status)===Ye.UTFORT,X=(b==null?void 0:b.status)===Ye.OPPRETTET,ae=!I&&(H||s&&V),Fe=!I&&X&&L&&!D&&C,ee=!I&&X&&L&&!D&&!C;return k.jsxs(De,{gap:"4",children:[k.jsx(sg,{behandling:h,aksjonspunkt:b,readOnly:I,arbeidOgInntekt:e,registrerArbeidsforhold:r,erOverstyrer:s,tabellData:N,settÅpneRadIndexer:P,setErOverstyrt:f,oppdaterTabell:T}),k.jsxs(Te,{ref:M,children:[k.jsx(Te.Header,{children:k.jsxs(Te.Row,{className:Fo.headerRow,children:[k.jsx(Te.HeaderCell,{scope:"col"}),k.jsx(Te.HeaderCell,{scope:"col",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),k.jsx(Te.HeaderCell,{scope:"col",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),k.jsx(Te.HeaderCell,{scope:"col",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),k.jsx(Te.HeaderCell,{scope:"col",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),k.jsx(Te.HeaderCell,{scope:"col"})]})}),k.jsx(Te.Body,{children:N.map((G,ne)=>k.jsx(tg,{saksnummer:A.saksnummer,behandlingUuid:h.uuid,behandlingVersjon:h.versjon,radData:G,skjæringstidspunkt:e.skjæringstidspunkt,isReadOnly:I||H||V,registrerArbeidsforhold:r,lagreVurdering:n,toggleÅpenRad:()=>F(ne),erOverstyrt:g,oppdaterTabell:T,erRadÅpen:R.includes(ne),alleKodeverk:m},`${G.arbeidsgiverNavn}${G.arbeidsgiverIdent}`))})]}),Fe&&k.jsxs("div",{children:[k.jsx(Pe,{size:"small",variant:"primary",disabled:o,onClick:()=>d(!0),type:"button",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),k.jsx(Qu,{submitCallback:B,cancelEvent:()=>d(!1),defaultVenteårsak:$e.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:m.Venteårsak,erTilbakekreving:!1,showModal:u,frist:null})]}),ee&&k.jsx("div",{children:k.jsx(Pe,{size:"small",variant:"primary",disabled:o,loading:o,onClick:_,type:"button",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),ae&&k.jsxs(De,{gap:"4",children:[k.jsx("div",{className:Fo.alertStripe,children:k.jsx(kt,{variant:"info",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),k.jsx("div",{children:k.jsx(Pe,{size:"small",variant:"secondary",disabled:o,loading:o,onClick:x,type:"button",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};ag.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const uw={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},gw=mr(uw),Ea=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:s,settBehandlingPåVentCallback:a,åpneForNyVurdering:i})=>k.jsx($l,{value:gw,children:k.jsx(Zu,{children:k.jsx(ag,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:s,settBehandlingPåVentCallback:a,åpneForNyVurdering:i})})});Ea.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: PermisjonsbeskrivelseType;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:St}=__STORYBOOK_MODULE_ACTIONS__,Jn="342352362",Ze={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},kw={title:"fakta/fakta-arbeid-og-inntekter",component:Ea,decorators:[hg,Ig],args:{arbeidsgiverOpplysningerPerId:{},lagreVurdering:St("onLagreVurdering"),registrerArbeidsforhold:St("onRegistrerArbeidsforhold"),åpneForNyVurdering:St("onÅpneForNyVurdering"),settBehandlingPåVentCallback:St("onSettBehandlingPåVentCallback"),erOverstyrer:!1},render:e=>k.jsx(Ea,{...e})},xt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Or.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Ft={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Vt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:ce.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,begrunnelse:"Vil innehente inntektsmelding fordi..."}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},Lt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[{...Ze,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Bt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:ce.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},Ct={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:ce.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Kt={args:{aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2"}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Gt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Ut={args:{arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Ht={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{[Jn]:{erPrivatPerson:!1,identifikator:Jn,navn:"Telenor",referanse:Jn}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:Jn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:ce.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Yt={args:{arbeidsgiverOpplysningerPerId:{[Jn]:{erPrivatPerson:!1,identifikator:Jn,navn:"Telenor",referanse:Jn}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:Jn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:ce.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0,isReadOnly:!0}},$t={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Or.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Wt={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2021-12-01",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",stillingsprosent:80,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"41925090",motattDato:"2021-11-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},zt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Ze,arbeidsgiverIdent:"910909092",eksternArbeidsforholdId:void 0,inntektPrMnd:1e4,internArbeidsforholdId:void 0,kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"55599999",motattDato:"2021-12-06",refusjonPrMnd:5e3,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Jt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"9374546382674846453452720241327384837356378478393893847474783",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001sdsfdsdfsdfwer",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8cwds",kontaktpersonNavn:"Espen Solstråle",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"1",motattDato:"2021-12-01",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD},{...Ze,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c8wew",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Xt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:void 0,permisjonOgMangel:{permisjonFom:"2022-10-01",type:Or.PERMITTERING},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d3",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Or.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:void 0}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Qt={args:{erOverstyrer:!0,isReadOnly:!0,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[{...Ze,inntektPrMnd:4e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"947064649",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975324",dokumentId:"549168225",motattDato:"2022-02-15",årsak:void 0,begrunnelse:void 0,saksbehandlersVurdering:void 0}],arbeidsforhold:[],inntekter:[],skjæringstidspunkt:"2022-02-16"}}},Zt={args:{erOverstyrer:!1,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"f98840f3-e74b-4255-ac33-b1cdcdb60311",eksternArbeidsforholdId:"2",fom:"2002-02-16",tom:"9999-12-31",stillingsprosent:20,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[],skjæringstidspunkt:"2022-02-05"}}},es={args:{erOverstyrer:!1,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{342352362:{erPrivatPerson:!1,referanse:"342352362",identifikator:"342352362",navn:"Lagt til av saksbehandler"},947064649:{erPrivatPerson:!1,referanse:"947064649",identifikator:"947064649",navn:"SJOKKERENDE ELEKTRIKER"},972674818:{erPrivatPerson:!1,referanse:"972674818",identifikator:"972674818",navn:"PENGELØS SPAREBANK"}},arbeidOgInntekt:{inntektsmeldinger:[{...Ze,inntektPrMnd:2e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"972674818",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975527",dokumentId:"549168458",motattDato:"2022-02-16",årsak:void 0,begrunnelse:"her vil jeg mase på AG",saksbehandlersVurdering:ce.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING}],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"6e220db0-5cdf-410f-b8a0-a78ac4ff87a1",eksternArbeidsforholdId:"2",fom:"2018-10-01",tom:"9999-12-31",stillingsprosent:50,årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:ce.FORTSETT_UTEN_INNTEKTSMELDING,begrunnelse:"her trenger jeg ikke IM. ja ja"},{arbeidsgiverIdent:"972674818",internArbeidsforholdId:"3aee54db-af17-4b18-8c9c-897be1f4d572",eksternArbeidsforholdId:"1",fom:"2000-05-13",tom:"9999-12-31",stillingsprosent:100,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[{arbeidsgiverIdent:"947064649",inntekter:[{beløp:15e3,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]},{arbeidsgiverIdent:"972674818",inntekter:[{beløp:2e4,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]}],skjæringstidspunkt:"2022-02-15"}}},ns={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Or.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}};var Vo,Lo,Bo;xt.parameters={...xt.parameters,docs:{...(Vo=xt.parameters)==null?void 0:Vo.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          permisjonTom: '2022-12-01',
          type: PermisjonsbeskrivelseType.VELFERDSPERMISJON
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 41000,
          fom: '2021-07-01',
          tom: '2021-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(Bo=(Lo=xt.parameters)==null?void 0:Lo.docs)==null?void 0:Bo.source}}};var Co,Ko,Go;Ft.parameters={...Ft.parameters,docs:{...(Co=Ft.parameters)==null?void 0:Co.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(Go=(Ko=Ft.parameters)==null?void 0:Ko.docs)==null?void 0:Go.source}}};var Uo,Ho,Yo;Vt.parameters={...Vt.parameters,docs:{...(Uo=Vt.parameters)==null?void 0:Uo.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.UTFORT
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        stillingsprosent: 100,
        tom: '9999-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,
        begrunnelse: 'Vil innehente inntektsmelding fordi...'
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    } as ArbeidOgInntektsmelding,
    isReadOnly: true
  }
}`,...(Yo=(Ho=Vt.parameters)==null?void 0:Ho.docs)==null?void 0:Yo.source}}};var $o,Wo,zo;Lt.parameters={...Lt.parameters,docs:{...($o=Lt.parameters)==null?void 0:$o.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 30000,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        journalpostId: '1',
        dokumentId: '2',
        motattDato: '2021-12-06',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(zo=(Wo=Lt.parameters)==null?void 0:Wo.docs)==null?void 0:zo.source}}};var Jo,Xo,Qo;Bt.parameters={...Bt.parameters,docs:{...(Jo=Bt.parameters)==null?void 0:Jo.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.UTFORT
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2021-10-06',
        tom: '2021-12-12',
        stillingsprosent: 100,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
        begrunnelse: 'Jeg opprettet arbeidsforhold fordi...'
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: undefined,
        journalpostId: '1',
        dokumentId: '2',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    isReadOnly: true
  }
}`,...(Qo=(Xo=Bt.parameters)==null?void 0:Xo.docs)==null?void 0:Qo.source}}};var Zo,el,nl;Ct.parameters={...Ct.parameters,docs:{...(Zo=Ct.parameters)==null?void 0:Zo.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.UTFORT
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2021-10-06',
        tom: '2021-12-12',
        stillingsprosent: 100,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
        begrunnelse: 'Jeg opprettet arbeidsforhold fordi...'
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: undefined,
        journalpostId: '1',
        dokumentId: '2',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    isReadOnly: false,
    erOverstyrer: true
  }
}`,...(nl=(el=Ct.parameters)==null?void 0:el.docs)==null?void 0:nl.source}}};var rl,tl,sl;Kt.parameters={...Kt.parameters,docs:{...(rl=Kt.parameters)==null?void 0:rl.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2021-10-06',
        tom: '2021-12-12',
        stillingsprosent: 100,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: undefined,
        journalpostId: '1',
        dokumentId: '2'
      }],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    isReadOnly: false,
    erOverstyrer: true
  }
}`,...(sl=(tl=Kt.parameters)==null?void 0:tl.docs)==null?void 0:sl.source}}};var al,il,ol;Gt.parameters={...Gt.parameters,docs:{...(al=Gt.parameters)==null?void 0:al.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {},
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    erOverstyrer: true
  }
}`,...(ol=(il=Gt.parameters)==null?void 0:il.docs)==null?void 0:ol.source}}};var ll,dl,ul;Ut.parameters={...Ut.parameters,docs:{...(ll=Ut.parameters)==null?void 0:ll.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(ul=(dl=Ut.parameters)==null?void 0:dl.docs)==null?void 0:ul.source}}};var gl,ml,cl;Ht.parameters={...Ht.parameters,docs:{...(gl=Ht.parameters)==null?void 0:gl.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    } as Aksjonspunkt],
    arbeidsgiverOpplysningerPerId: {
      [MANUELT_ORG_NR]: {
        erPrivatPerson: false,
        identifikator: MANUELT_ORG_NR,
        navn: 'Telenor',
        referanse: MANUELT_ORG_NR
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: MANUELT_ORG_NR,
        fom: '2019-12-06',
        stillingsprosent: 100,
        tom: '2022-12-31',
        begrunnelse: 'Dette er en begrunnelse',
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    erOverstyrer: true
  }
}`,...(cl=(ml=Ht.parameters)==null?void 0:ml.docs)==null?void 0:cl.source}}};var fl,kl,vl;Yt.parameters={...Yt.parameters,docs:{...(fl=Yt.parameters)==null?void 0:fl.docs,source:{originalSource:`{
  args: {
    arbeidsgiverOpplysningerPerId: {
      [MANUELT_ORG_NR]: {
        erPrivatPerson: false,
        identifikator: MANUELT_ORG_NR,
        navn: 'Telenor',
        referanse: MANUELT_ORG_NR
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: MANUELT_ORG_NR,
        fom: '2019-12-06',
        stillingsprosent: 100,
        tom: '2022-12-31',
        begrunnelse: 'Dette er en begrunnelse',
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    erOverstyrer: true,
    isReadOnly: true
  }
}`,...(vl=(kl=Yt.parameters)==null?void 0:kl.docs)==null?void 0:vl.source}}};var pl,yl,bl;$t.parameters={...$t.parameters,docs:{...(pl=$t.parameters)==null?void 0:pl.docs,source:{originalSource:`{
  args: {
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        stillingsprosent: 100,
        tom: '9999-12-31',
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          permisjonTom: '2022-12-01',
          type: PermisjonsbeskrivelseType.VELFERDSPERMISJON
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: 20000,
        journalpostId: '1',
        dokumentId: '2'
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-07-01',
          tom: '2020-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(bl=(yl=$t.parameters)==null?void 0:yl.docs)==null?void 0:bl.source}}};var hl,Il,wl;Wt.parameters={...Wt.parameters,docs:{...(hl=Wt.parameters)==null?void 0:hl.docs,source:{originalSource:`{
  args: {
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        stillingsprosent: 100,
        tom: '9999-12-31',
        saksbehandlersVurdering: null,
        begrunnelse: null
      }, {
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-002',
        fom: '2021-12-01',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa85',
        stillingsprosent: 80,
        tom: '9999-12-31',
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: 20000,
        journalpostId: '1',
        dokumentId: '2'
      }, {
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-002',
        inntektPrMnd: 10000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa85',
        kontaktpersonNavn: 'Espen Utvikler',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-11-06',
        journalpostId: '1',
        dokumentId: '2'
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-07-01',
          tom: '2020-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(wl=(Il=Wt.parameters)==null?void 0:Il.docs)==null?void 0:wl.source}}};var Al,jl,El;zt.parameters={...zt.parameters,docs:{...(Al=zt.parameters)==null?void 0:Al.docs,source:{originalSource:`{
  args: {
    erOverstyrer: true,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      },
      910909090: {
        erPrivatPerson: false,
        identifikator: '910909090',
        navn: 'Autoservice AS',
        referanse: '910909090'
      },
      910909092: {
        erPrivatPerson: false,
        identifikator: '910909092',
        navn: 'DNB',
        referanse: '910909092'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        stillingsprosent: 100,
        tom: '9999-12-31',
        saksbehandlersVurdering: null,
        begrunnelse: null
      }, {
        arbeidsgiverIdent: '910909090',
        eksternArbeidsforholdId: 'ARB001-002',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        stillingsprosent: 80,
        tom: '2021-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: 20000,
        journalpostId: '1',
        dokumentId: '2'
      }, {
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909092',
        eksternArbeidsforholdId: undefined,
        inntektPrMnd: 10000,
        internArbeidsforholdId: undefined,
        kontaktpersonNavn: 'Espen Utvikler',
        kontaktpersonNummer: '55599999',
        motattDato: '2021-12-06',
        refusjonPrMnd: 5000,
        journalpostId: '1',
        dokumentId: '2',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-07-01',
          tom: '2020-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }, {
        arbeidsgiverIdent: '910909090',
        inntekter: [{
          beløp: 30000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 31000,
          fom: '2021-07-01',
          tom: '2021-07-31',
          type: 'LØNN'
        }, {
          beløp: 30000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 30000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 30000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(El=(jl=zt.parameters)==null?void 0:jl.docs)==null?void 0:El.source}}};var Tl,Ol,Nl;Jt.parameters={...Jt.parameters,docs:{...(Tl=Jt.parameters)==null?void 0:Tl.docs,source:{originalSource:`{
  args: {
    erOverstyrer: true,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      },
      910909090: {
        erPrivatPerson: false,
        identifikator: '910909090',
        navn: 'Autoservice AS',
        referanse: '910909090'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '9374546382674846453452720241327384837356378478393893847474783',
        fom: '2019-12-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        stillingsprosent: 100,
        tom: '9999-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }, {
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        stillingsprosent: 80,
        tom: '2021-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 30000,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '910909090',
        eksternArbeidsforholdId: 'ARB001-001sdsfdsdfsdfwer',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8cwds',
        kontaktpersonNavn: 'Espen Solstråle',
        kontaktpersonNummer: '41925090',
        journalpostId: '1',
        dokumentId: '1',
        motattDato: '2021-12-01',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }, {
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 30000,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '910909090',
        eksternArbeidsforholdId: 'ARB001-001',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c8wew',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        journalpostId: '1',
        dokumentId: '2',
        motattDato: '2021-12-06',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-07-01',
          tom: '2020-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(Nl=(Ol=Jt.parameters)==null?void 0:Ol.docs)==null?void 0:Nl.source}}};var Rl,Pl,ql;Xt.parameters={...Xt.parameters,docs:{...(Rl=Xt.parameters)==null?void 0:Rl.docs,source:{originalSource:`{
  args: {
    erOverstyrer: true,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088'
      },
      910909090: {
        erPrivatPerson: false,
        identifikator: '910909090',
        navn: 'Autoservice AS',
        referanse: '910909090'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '2433453225',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        stillingsprosent: 80,
        tom: '2021-12-31',
        årsak: undefined,
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          type: PermisjonsbeskrivelseType.PERMITTERING
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }, {
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d3',
        stillingsprosent: 80,
        tom: '2021-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          permisjonTom: '2022-12-01',
          type: PermisjonsbeskrivelseType.VELFERDSPERMISJON
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 30000,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '2433453225',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        journalpostId: '1',
        dokumentId: '2',
        motattDato: '2021-12-06',
        årsak: undefined
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-07-01',
          tom: '2020-07-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-08-01',
          tom: '2020-08-31',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2020-09-01',
          tom: '2020-09-30',
          type: 'LØNN'
        }, {
          beløp: 40000,
          fom: '2021-11-01',
          tom: '2021-11-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(ql=(Pl=Xt.parameters)==null?void 0:Pl.docs)==null?void 0:ql.source}}};var _l,Ml,Dl;Qt.parameters={...Qt.parameters,docs:{...(_l=Qt.parameters)==null?void 0:_l.docs,source:{originalSource:`{
  args: {
    erOverstyrer: true,
    isReadOnly: true,
    aksjonspunkterForPanel: [] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      947064649: {
        erPrivatPerson: false,
        identifikator: '947064649',
        navn: 'BEDRIFT AS',
        referanse: '947064649'
      }
    },
    arbeidOgInntekt: {
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 40000.0,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '947064649',
        eksternArbeidsforholdId: undefined,
        internArbeidsforholdId: undefined,
        kontaktpersonNavn: 'Dolly Dollesen',
        kontaktpersonNummer: '99999999',
        journalpostId: '524975324',
        dokumentId: '549168225',
        motattDato: '2022-02-15',
        årsak: undefined,
        begrunnelse: undefined,
        saksbehandlersVurdering: undefined
      }],
      arbeidsforhold: [],
      inntekter: [],
      skjæringstidspunkt: '2022-02-16'
    }
  }
}`,...(Dl=(Ml=Qt.parameters)==null?void 0:Ml.docs)==null?void 0:Dl.source}}};var Sl,xl,Fl;Zt.parameters={...Zt.parameters,docs:{...(Sl=Zt.parameters)==null?void 0:Sl.docs,source:{originalSource:`{
  args: {
    erOverstyrer: false,
    aksjonspunkterForPanel: [] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      947064649: {
        erPrivatPerson: false,
        identifikator: '947064649',
        navn: 'BEDRIFT AS',
        referanse: '947064649'
      }
    },
    arbeidOgInntekt: {
      inntektsmeldinger: [],
      arbeidsforhold: [{
        arbeidsgiverIdent: '947064649',
        internArbeidsforholdId: 'f98840f3-e74b-4255-ac33-b1cdcdb60311',
        eksternArbeidsforholdId: '2',
        fom: '2002-02-16',
        tom: '9999-12-31',
        stillingsprosent: 20.0,
        årsak: undefined,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntekter: [],
      skjæringstidspunkt: '2022-02-05'
    }
  }
}`,...(Fl=(xl=Zt.parameters)==null?void 0:xl.docs)==null?void 0:Fl.source}}};var Vl,Ll,Bl;es.parameters={...es.parameters,docs:{...(Vl=es.parameters)==null?void 0:Vl.docs,source:{originalSource:`{
  args: {
    erOverstyrer: false,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      342352362: {
        erPrivatPerson: false,
        referanse: '342352362',
        identifikator: '342352362',
        navn: 'Lagt til av saksbehandler'
      },
      947064649: {
        erPrivatPerson: false,
        referanse: '947064649',
        identifikator: '947064649',
        navn: 'SJOKKERENDE ELEKTRIKER'
      },
      972674818: {
        erPrivatPerson: false,
        referanse: '972674818',
        identifikator: '972674818',
        navn: 'PENGELØS SPAREBANK'
      }
    },
    arbeidOgInntekt: {
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 20000.0,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '972674818',
        eksternArbeidsforholdId: undefined,
        internArbeidsforholdId: undefined,
        kontaktpersonNavn: 'Dolly Dollesen',
        kontaktpersonNummer: '99999999',
        journalpostId: '524975527',
        dokumentId: '549168458',
        motattDato: '2022-02-16',
        årsak: undefined,
        begrunnelse: 'her vil jeg mase på AG',
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING
      }],
      arbeidsforhold: [{
        arbeidsgiverIdent: '947064649',
        internArbeidsforholdId: '6e220db0-5cdf-410f-b8a0-a78ac4ff87a1',
        eksternArbeidsforholdId: '2',
        fom: '2018-10-01',
        tom: '9999-12-31',
        stillingsprosent: 50.0,
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING,
        begrunnelse: 'her trenger jeg ikke IM. ja ja'
      }, {
        arbeidsgiverIdent: '972674818',
        internArbeidsforholdId: '3aee54db-af17-4b18-8c9c-897be1f4d572',
        eksternArbeidsforholdId: '1',
        fom: '2000-05-13',
        tom: '9999-12-31',
        stillingsprosent: 100.0,
        årsak: undefined,
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntekter: [{
        arbeidsgiverIdent: '947064649',
        inntekter: [{
          beløp: 15000.0,
          fom: '2021-10-01',
          tom: '2021-02-28',
          type: 'LØNN'
        }]
      }, {
        arbeidsgiverIdent: '972674818',
        inntekter: [{
          beløp: 20000.0,
          fom: '2021-10-01',
          tom: '2021-02-28',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2022-02-15'
    }
  }
}`,...(Bl=(Ll=es.parameters)==null?void 0:Ll.docs)==null?void 0:Bl.source}}};var Cl,Kl,Gl;ns.parameters={...ns.parameters,docs:{...(Cl=ns.parameters)==null?void 0:Cl.docs,source:{originalSource:`{
  args: {
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: true,
        fødselsdato: '2000-01-01',
        identifikator: '910909088',
        navn: 'Bettan',
        referanse: '910909088'
      }
    },
    arbeidOgInntekt: {
      arbeidsforhold: [{
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        stillingsprosent: 100,
        tom: '9999-12-31',
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          permisjonTom: '2022-12-01',
          type: PermisjonsbeskrivelseType.VELFERDSPERMISJON
        },
        saksbehandlersVurdering: null,
        begrunnelse: null
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        inntektPrMnd: 30000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-12-06',
        refusjonPrMnd: 20000,
        journalpostId: '1',
        dokumentId: '2'
      }],
      inntekter: [{
        arbeidsgiverIdent: '910909088',
        inntekter: [{
          beløp: 40000,
          fom: '2020-06-01',
          tom: '2020-06-30',
          type: 'LØNN'
        }]
      }],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(Gl=(Kl=ns.parameters)==null?void 0:Kl.docs)==null?void 0:Gl.source}}};const vw=["InnhentInntektsmelding","InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret","InnhentInntektsmeldingDerBehandlingErAvsluttet","AvklarManglendeArbeidsforhold","AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet","AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig","IngenAksjonspunktMenTilbakehoppMuligForOverstyrer","SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer","SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer","ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet","ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet","ArbeidsforholdErOK","ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet","FlereArbeidsforholdOgInntekstemeldinger","ArbeidsforholdMedSammeOrgNr","ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre","FoerRegisterinnhenting","AutomatiskIgnorertInntektsmelding","EtterAtEtterspurtInntektsmeldingErKommet","SkalViseFødselsnummerForPrivatperson"];export{Yt as ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet,Ht as ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet,$t as ArbeidsforholdErOK,Wt as ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet,Jt as ArbeidsforholdMedSammeOrgNr,Xt as ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre,Zt as AutomatiskIgnorertInntektsmelding,Lt as AvklarManglendeArbeidsforhold,Bt as AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet,Ct as AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig,es as EtterAtEtterspurtInntektsmeldingErKommet,zt as FlereArbeidsforholdOgInntekstemeldinger,Qt as FoerRegisterinnhenting,Kt as IngenAksjonspunktMenTilbakehoppMuligForOverstyrer,xt as InnhentInntektsmelding,Vt as InnhentInntektsmeldingDerBehandlingErAvsluttet,Ft as InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret,Ut as SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer,Gt as SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer,ns as SkalViseFødselsnummerForPrivatperson,vw as __namedExportsOrder,kw as default};
