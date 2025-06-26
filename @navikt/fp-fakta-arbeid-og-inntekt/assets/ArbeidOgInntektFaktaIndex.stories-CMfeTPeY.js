var vg=Object.defineProperty;var pg=(e,t,r)=>t in e?vg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var z=(e,t,r)=>pg(e,typeof t!="symbol"?t+"":t,r);import{g as Xl,r as f,u as Zn,_ as vi,s as pi,c as gt,a as te,R as v,b as ws,d as mt,T as yg,S as xr,m as bg,e as Fr,f as Ql,h as er,q as hg,t as Ig,o as Zl,P as wg,i as Te,j as xn,n as jr,k,l as ed,A as $e,p as Ag,v as jg,w as Eg,x as Og}from"./iframe-DRlhX7la.js";import{r as Tg}from"./index-CwIQODe0.js";var Pa=Tg();const is=Xl(Pa);function Ng(e,t){var r=e.values,n=vi(e,["values"]),s=t.values,a=vi(t,["values"]);return pi(s,r)&&pi(n,a)}function nd(e){var t=Zn(),r=t.formatMessage,n=t.textComponent,s=n===void 0?f.Fragment:n,a=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,g=d===void 0?s:d,c=e.ignoreTag,m={id:a,description:i,defaultMessage:o},y=r(m,l,{ignoreTag:c});return typeof u=="function"?u(Array.isArray(y)?y:[y]):g?f.createElement(g,null,y):f.createElement(f.Fragment,null,y)}nd.displayName="FormattedMessage";var W=f.memo(nd,Ng);W.displayName="MemoizedFormattedMessage";var tn=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(tn||{}),fe=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(fe||{}),We=(e=>(e.AVV_DOK="AVV_DOK",e.AVV_FODSEL="AVV_FODSEL",e.UTV_FRIST="UTV_FRIST",e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG",e.VENT_PÅ_BRUKERTILBAKEMELDING="VENT_PÅ_BRUKERTILBAKEMELDING",e.VENT_UTLAND_TRYGD="VENT_UTLAND_TRYGD",e.UTVIDET_TILSVAR_FRIST="UTV_TIL_FRIST",e.ENDRE_TILKJENT_YTELSE="ENDRE_TILKJENT_YTELSE",e.VENT_PÅ_MULIG_MOTREGNING="VENT_PÅ_MULIG_MOTREGNING",e.AVV_RESPONS_REVURDERING="AVV_RESPONS_REVURDERING",e.FOR_TIDLIG_SOKNAD="FOR_TIDLIG_SOKNAD",e.VENT_PÅ_SISTE_AAP_ELLER_DP_MELDEKORT="VENT_PÅ_SISTE_AAP_MELDEKORT",e.ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER="ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",e.ANKE_OVERSENDT_TIL_TRYGDERETTEN="ANKE_OVERSENDT_TIL_TRYGDERETTEN",e.VENT_PÅ_KORRIGERT_BESTEBEREGNING="VENT_PÅ_KORRIGERT_BESTEBEREGNING",e.VENT_OPDT_INNTEKTSMELDING="VENT_OPDT_INNTEKTSMELDING",e.VENT_OPPTJENING_OPPLYSNINGER="VENT_OPPTJENING_OPPLYSNINGER",e.VENT_INNTEKT_RAPPORTERINGSFRIST="VENT_INNTEKT_RAPPORTERINGSFRIST",e.VENT_MANGLENDE_SYKEMELDING="VENT_MANGLENDE_SYKEMELDING",e.VENT_SØKNAD_SENDT_INFORMASJONSBREV="VENT_SØKNAD_SENDT_INFORMASJONSBREV",e.VENT_ÅPEN_BEHANDLING="VENT_ÅPEN_BEHANDLING",e.VENT_KABAL="VENT_KABAL",e))(We||{}),Pr=(e=>(e.PERMISJON="PERMISJON",e.PERMITTERING="PERMITTERING",e.PERMISJON_VED_MILITÆRTJENESTE="PERMISJON_VED_MILITÆRTJENESTE",e.UTDANNINGSPERMISJON_LOVFESTET="UTDANNINGSPERMISJON_LOVFESTET",e.UTDANNINGSPERMISJON="UTDANNINGSPERMISJON",e.UTDANNINGSPERMISJON_IKKE_LOVFESTET="UTDANNINGSPERMISJON_IKKE_LOVFESTET",e.VELFERDSPERMISJON="VELFERDSPERMISJON",e.ANNEN_PERMISJON_LOVFESTET="ANNEN_PERMISJON_LOVFESTET",e.PERMISJON_MED_FORELDREPENGER="PERMISJON_MED_FORELDREPENGER",e.ANNEN_PERMISJON_IKKE_LOVFESTET="ANNEN_PERMISJON_IKKE_LOVFESTET",e))(Pr||{});const Rg=(e,t,r)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${t}&dokumentId=${r}`,Pg=(e,t,r)=>{const n=window.open(e,t);n&&setTimeout(()=>{n.document.title=r},1e3)},Vr=e=>gt({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var qg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const rd=f.forwardRef((e,t)=>{var{className:r,size:n="medium",as:s="p",spacing:a,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,g=qg(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=te();return v.createElement(s,Object.assign({},g,{ref:t,className:c(r,"navds-body-long",`navds-body-long--${n}`,Vr({spacing:a,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var _g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const se=f.forwardRef((e,t)=>{var{className:r,size:n="medium",as:s="p",spacing:a,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,g=_g(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=te();return v.createElement(s,Object.assign({},g,{ref:t,className:c(r,"navds-body-short",`navds-body-short--${n}`,Vr({spacing:a,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var Mg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const qr=f.forwardRef((e,t)=>{var{className:r,size:n="medium",spacing:s,uppercase:a,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:g}=e,c=Mg(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:m}=te();return v.createElement(i,Object.assign({},c,{ref:t,className:m(r,"navds-detail",Vr({spacing:s,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:g,uppercase:a}),{"navds-detail--small":n==="small"})}))});var Dg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ft=f.forwardRef((e,t)=>{var{children:r,className:n,size:s,spacing:a,as:i="p",showIcon:o=!1}=e,l=Dg(e,["children","className","size","spacing","as","showIcon"]);const{cn:u}=te();return v.createElement(i,Object.assign({},l,{ref:t,className:u("navds-error-message","navds-label",n,Vr({spacing:a}),{"navds-label--small":s==="small","navds-error-message--show-icon":o})}),o&&v.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var Sg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const As=f.forwardRef((e,t)=>{var{level:r="1",size:n,className:s,as:a,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=Sg(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=te(),c=a??`h${r}`;return v.createElement(c,Object.assign({},d,{ref:t,className:g(s,"navds-heading",`navds-heading--${n}`,Vr({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var xg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};f.forwardRef((e,t)=>{var{className:r,spacing:n,as:s="p"}=e,a=xg(e,["className","spacing","as"]);const{cn:i}=te();return v.createElement(s,Object.assign({},a,{ref:t,className:i(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Fg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ae=f.forwardRef((e,t)=>{var{className:r,size:n="medium",as:s="label",spacing:a,visuallyHidden:i,textColor:o}=e,l=Fg(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:u}=te();return v.createElement(s,Object.assign({},l,{ref:t,className:u(r,"navds-label",Vr({spacing:a,visuallyHidden:i,textColor:o}),{"navds-label--small":n==="small"})}))});function td(e,t=166,r=!1){let n;function s(...a){const i=()=>{n=void 0,e.apply(this,a)};!n&&r&&i(),clearTimeout(n),n=setTimeout(i,t)}return s.clear=()=>{clearTimeout(n)},s}function Qe(e,t){const r=Object.entries(e).filter(([n])=>!t.includes(n));return Object.fromEntries(r)}const _r=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{};let yi=0;function Vg(e){const[t,r]=f.useState(e),n=e||t;return f.useEffect(()=>{t==null&&(yi+=1,r(`aksel-id-${yi}`))},[t]),n}const bi=v.useId;function In(e){var t;if(bi!==void 0){const r=bi();return e??r.replace(/(:)/g,"")}return(t=Vg(e))!==null&&t!==void 0?t:""}function st(e,t=[]){const r=f.useRef(e);return f.useEffect(()=>{r.current=e}),f.useCallback((...n)=>{var s;return(s=r.current)===null||s===void 0?void 0:s.call(r,...n)},t)}function at({value:e,defaultValue:t,onChange:r}){const n=st(r),[s,a]=f.useState(t),i=e!==void 0,o=i?e:s,l=st(u=>{const g=typeof u=="function"?u(o):u;i||a(g),n(g)},[i,n,o]);return[o,l]}let hi=0;function Lg(e){const[t,r]=f.useState(e),n=e||t;return f.useEffect(()=>{t==null&&(hi+=1,r(`aksel-icon-${hi}`))},[t]),n}const Ii=v.useId;function Re(e){var t;return Ii!==void 0?Ii().replace(/(:)/g,""):(t=Lg(e))!==null&&t!==void 0?t:""}var Bg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Cg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Bg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var Kg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Gg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Kg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var Ug=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Hg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Ug(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var Yg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const $g=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Yg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Wg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const zg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Wg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var Jg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Xg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Jg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Qg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const js=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Qg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Zg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const sd=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Zg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var em=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const qa=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=em(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var nm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const rm=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=nm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var tm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const sm=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=tm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var am=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const im=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=am(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var om=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const lm=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=om(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var dm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ad=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=dm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var um=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const gm=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=um(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var mm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const fm=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=mm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var cm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const km=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=cm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var vm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const id=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=vm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var pm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ym=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=pm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var bm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const hm=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=bm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var Im=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const wm=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Im(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var Am=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const od=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Am(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var jm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Em=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=jm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Or(e,t,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e==null||e(s),r===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}const[Om,ct]=ws({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),Tm=typeof window<"u"&&window.matchMedia===void 0,Nm=(e,t)=>{const[r,n]=f.useState(t);return f.useEffect(()=>{if(Tm)return;const s=window.matchMedia(e);n(s.matches);const a=i=>{n(i.matches)};return s.addEventListener("change",a),()=>{s.removeEventListener("change",a)}},[e]),r};function fn(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Je(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let s;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=r!=null&&r.width?String(r.width):i;s=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=r!=null&&r.width?String(r.width):e.defaultWidth;s=e.values[o]||e.values[i]}const a=e.argumentCallback?e.argumentCallback(t):t;return s[a]}}function Xe(e){return(t,r={})=>{const n=r.width,s=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],a=t.match(s);if(!a)return null;const i=a[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?Pm(o,g=>g.test(i)):Rm(o,g=>g.test(i));let u;u=e.valueCallback?e.valueCallback(l):l,u=r.valueCallback?r.valueCallback(u):u;const d=t.slice(i.length);return{value:u,rest:d}}}function Rm(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function Pm(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function _a(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const s=n[0],a=t.match(e.parsePattern);if(!a)return null;let i=e.valueCallback?e.valueCallback(a[0]):a[0];i=r.valueCallback?r.valueCallback(i):i;const o=t.slice(s.length);return{value:i,rest:o}}}const ld=6048e5,qm=864e5,_m=6e4,Mm=36e5,Dm=1e3,wi=Symbol.for("constructDateFrom");function ve(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&wi in e?e[wi](t):e instanceof Date?new e.constructor(t):new Date(t)}function Lr(e,...t){const r=ve.bind(null,t.find(n=>typeof n=="object"));return t.map(r)}let Sm={};function kr(){return Sm}function oe(e,t){return ve(t||e,e)}function Cn(e,t){var o,l,u,d;const r=kr(),n=(t==null?void 0:t.weekStartsOn)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,s=oe(e,t==null?void 0:t.in),a=s.getDay(),i=(a<n?7:0)+a-n;return s.setDate(s.getDate()-i),s.setHours(0,0,0,0),s}const xm={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},dd=(e,t,r)=>{let n;const s=xm[e];return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n},Fm={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ud=(e,t,r,n)=>Fm[e],Vm={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Lm={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Bm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Cm={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Km={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Gm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Um=(e,t)=>{const r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},gd={ordinalNumber:Um,era:Je({values:Vm,defaultWidth:"wide"}),quarter:Je({values:Lm,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Je({values:Bm,defaultWidth:"wide"}),day:Je({values:Cm,defaultWidth:"wide"}),dayPeriod:Je({values:Km,defaultWidth:"wide",formattingValues:Gm,defaultFormattingWidth:"wide"})},Hm=/^(\d+)(th|st|nd|rd)?/i,Ym=/\d+/i,$m={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Wm={any:[/^b/i,/^(a|c)/i]},zm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Jm={any:[/1/i,/2/i,/3/i,/4/i]},Xm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Qm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Zm={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ef={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},nf={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},rf={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},md={ordinalNumber:_a({matchPattern:Hm,parsePattern:Ym,valueCallback:e=>parseInt(e,10)}),era:Xe({matchPatterns:$m,defaultMatchWidth:"wide",parsePatterns:Wm,defaultParseWidth:"any"}),quarter:Xe({matchPatterns:zm,defaultMatchWidth:"wide",parsePatterns:Jm,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Xe({matchPatterns:Xm,defaultMatchWidth:"wide",parsePatterns:Qm,defaultParseWidth:"any"}),day:Xe({matchPatterns:Zm,defaultMatchWidth:"wide",parsePatterns:ef,defaultParseWidth:"any"}),dayPeriod:Xe({matchPatterns:nf,defaultMatchWidth:"any",parsePatterns:rf,defaultParseWidth:"any"})},tf={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},sf={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},af={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},of={date:fn({formats:tf,defaultWidth:"full"}),time:fn({formats:sf,defaultWidth:"full"}),dateTime:fn({formats:af,defaultWidth:"full"})},fd={code:"en-GB",formatDistance:dd,formatLong:of,formatRelative:ud,localize:gd,match:md,options:{weekStartsOn:1,firstWeekContainsDate:4}},lf={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},df={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},uf={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},gf={date:fn({formats:lf,defaultWidth:"full"}),time:fn({formats:df,defaultWidth:"full"}),dateTime:fn({formats:uf,defaultWidth:"full"})},Es={code:"en-US",formatDistance:dd,formatLong:gf,formatRelative:ud,localize:gd,match:md,options:{weekStartsOn:0,firstWeekContainsDate:1}},mf={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},ff=(e,t,r)=>{let n;const s=mf[e];return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n},cf={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},kf={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},vf={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},pf={date:fn({formats:cf,defaultWidth:"full"}),time:fn({formats:kf,defaultWidth:"full"}),dateTime:fn({formats:vf,defaultWidth:"full"})},yf={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},bf=(e,t,r,n)=>yf[e],hf={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},If={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},wf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Af={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},jf={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Ef=(e,t)=>Number(e)+".",Of={ordinalNumber:Ef,era:Je({values:hf,defaultWidth:"wide"}),quarter:Je({values:If,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Je({values:wf,defaultWidth:"wide"}),day:Je({values:Af,defaultWidth:"wide"}),dayPeriod:Je({values:jf,defaultWidth:"wide"})},Tf=/^(\d+)\.?/i,Nf=/\d+/i,Rf={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Pf={any:[/^f/i,/^e/i]},qf={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},_f={any:[/1/i,/2/i,/3/i,/4/i]},Mf={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Df={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Sf={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},xf={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ff={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Vf={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Lf={ordinalNumber:_a({matchPattern:Tf,parsePattern:Nf,valueCallback:e=>parseInt(e,10)}),era:Xe({matchPatterns:Rf,defaultMatchWidth:"wide",parsePatterns:Pf,defaultParseWidth:"any"}),quarter:Xe({matchPatterns:qf,defaultMatchWidth:"wide",parsePatterns:_f,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Xe({matchPatterns:Mf,defaultMatchWidth:"wide",parsePatterns:Df,defaultParseWidth:"any"}),day:Xe({matchPatterns:Sf,defaultMatchWidth:"wide",parsePatterns:xf,defaultParseWidth:"any"}),dayPeriod:Xe({matchPatterns:Ff,defaultMatchWidth:"any",parsePatterns:Vf,defaultParseWidth:"any"})},cd={code:"nb",formatDistance:ff,formatLong:pf,formatRelative:bf,localize:Of,match:Lf,options:{weekStartsOn:1,firstWeekContainsDate:4}},Bf={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},Cf=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],Kf=(e,t,r)=>{let n;const s=Bf[e];return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",t<13?Cf[t]:String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" sidan":n},Gf={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Uf={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Hf={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Yf={date:fn({formats:Gf,defaultWidth:"full"}),time:fn({formats:Uf,defaultWidth:"full"}),dateTime:fn({formats:Hf,defaultWidth:"full"})},$f={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Wf=(e,t,r,n)=>$f[e],zf={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Jf={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Xf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Qf={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},Zf={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},ec=(e,t)=>Number(e)+".",nc={ordinalNumber:ec,era:Je({values:zf,defaultWidth:"wide"}),quarter:Je({values:Jf,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Je({values:Xf,defaultWidth:"wide"}),day:Je({values:Qf,defaultWidth:"wide"}),dayPeriod:Je({values:Zf,defaultWidth:"wide"})},rc=/^(\d+)\.?/i,tc=/\d+/i,sc={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},ac={any:[/^f/i,/^e/i]},ic={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},oc={any:[/1/i,/2/i,/3/i,/4/i]},lc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},dc={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},uc={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},gc={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},mc={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},fc={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},cc={ordinalNumber:_a({matchPattern:rc,parsePattern:tc,valueCallback:e=>parseInt(e,10)}),era:Xe({matchPatterns:sc,defaultMatchWidth:"wide",parsePatterns:ac,defaultParseWidth:"any"}),quarter:Xe({matchPatterns:ic,defaultMatchWidth:"wide",parsePatterns:oc,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Xe({matchPatterns:lc,defaultMatchWidth:"wide",parsePatterns:dc,defaultParseWidth:"any"}),day:Xe({matchPatterns:uc,defaultMatchWidth:"wide",parsePatterns:gc,defaultParseWidth:"any"}),dayPeriod:Xe({matchPatterns:mc,defaultMatchWidth:"any",parsePatterns:fc,defaultParseWidth:"any"})},kd={code:"nn",formatDistance:Kf,formatLong:Yf,formatRelative:Wf,localize:nc,match:cc,options:{weekStartsOn:1,firstWeekContainsDate:4}},kc={global:{dateLocale:cd,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},vc=f.createContext({locale:kc}),Os=()=>f.useContext(vc);var pc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const yc=f.forwardRef((e,t)=>{var r,n,s,{rootElement:a,asChild:i}=e,o=pc(e,["rootElement","asChild"]);const l=mt(!1),u=(r=Os())===null||r===void 0?void 0:r.rootElement,d=(n=a??u)!==null&&n!==void 0?n:(s=globalThis==null?void 0:globalThis.document)===null||s===void 0?void 0:s.body,g=i?xr:"div";return l?d?is.createPortal(v.createElement(yg,{theme:l.theme,asChild:!0,hasBackground:!1,"data-color":l.color},v.createElement(g,Object.assign({ref:t,"data-aksel-portal":""},o))),d):null:d?is.createPortal(v.createElement(g,Object.assign({ref:t,"data-aksel-portal":""},o)),d):null});function Ai(e){return e.sort((t,r)=>{const n=t.compareDocumentPosition(r);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const bc=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function ji(e,t,r){let n=e+1;return r&&n>=t&&(n=0),n}function Ei(e,t,r){let n=e-1;return r&&n<0&&(n=t),n}const Hs=e=>e;class hc{constructor(){this.descendants=new Map,this.register=t=>{if(t!=null)return bc(t)?this.registerNode(t):r=>{this.registerNode(r,t)}},this.unregister=t=>{this.descendants.delete(t);const r=Ai(Array.from(this.descendants.keys()));this.assignIndex(r)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=t=>{this.descendants.forEach(r=>{const n=t.indexOf(r.node);r.index=n,r.node.dataset.index=r.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((r,n)=>r.index-n.index),this.enabledValues=()=>this.values().filter(t=>!t.disabled),this.item=t=>{if(this.count()!==0)return this.values()[t]},this.enabledItem=t=>{if(this.enabledCount()!==0)return this.enabledValues()[t]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const t=this.enabledValues().length-1;return this.enabledItem(t)},this.indexOf=t=>{var r,n;return t&&(n=(r=this.descendants.get(t))===null||r===void 0?void 0:r.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=t=>t==null?-1:this.enabledValues().findIndex(r=>r.node.isSameNode(t)),this.next=(t,r=!0)=>{const n=ji(t,this.count(),r);return this.item(n)},this.nextEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const s=this.enabledIndexOf(n.node),a=ji(s,this.enabledCount(),r);return this.enabledItem(a)},this.prev=(t,r=!0)=>{const n=Ei(t,this.count()-1,r);return this.item(n)},this.prevEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const s=this.enabledIndexOf(n.node),a=Ei(s,this.enabledCount()-1,r);return this.enabledItem(a)},this.registerNode=(t,r)=>{if(!t)return;const n=this.descendants.get(t);if(n){this.descendants.set(t,Object.assign({index:n.index,node:t},r));return}const s=Array.from(this.descendants.keys()).concat(t),a=Ai(s);r!=null&&r.disabled&&(r.disabled=!!r.disabled);const i=Object.assign({node:t,index:-1},r);this.descendants.set(t,i),this.assignIndex(a)}}}function Ic(){const[e,t]=ws({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),r=Hs(a=>v.createElement(e,Object.assign({},a.value),a.children));function n(a){const i=t(),[o,l]=f.useState(-1),u=f.useRef(null);_r(()=>()=>{u.current&&i.unregister(u.current)},[]),_r(()=>{if(!u.current)return;const g=Number(u.current.dataset.index);o!==g&&!Number.isNaN(g)&&l(g)});const d=Hs(a?i.register(a):i.register);return{descendants:i,index:o,enabledIndex:i.enabledIndexOf(u.current),register:bg([d,u])}}function s(){return f.useRef(new hc).current}return[r,t,s,n]}function wc(e,t=globalThis==null?void 0:globalThis.document){const r=st(e);f.useEffect(()=>{const n=s=>{s.key==="Escape"&&r(s)};return t.addEventListener("keydown",n,!0),()=>t.removeEventListener("keydown",n,!0)},[r,t])}const vd={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function pd(e,t,r,{discrete:n}={discrete:!1}){if(!t)return;const s=r.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});s.addEventListener(e,t,{once:!0}),n&&s?is.flushSync(()=>s.dispatchEvent(a)):s.dispatchEvent(a)}function Ac(e,t=globalThis==null?void 0:globalThis.document){const r=st(e),n=f.useRef(!1);return f.useEffect(()=>{const s=a=>{if(a.target&&!n.current){const i={originalEvent:a};pd(vd.FOCUS_OUTSIDE,r,i)}};return t.addEventListener("focusin",s),()=>t.removeEventListener("focusin",s)},[t,r]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function jc(e,t=globalThis==null?void 0:globalThis.document){const r=st(e),n=f.useRef(!1),s=f.useRef(()=>{});return f.useEffect(()=>{const a=o=>{function l(){pd(vd.POINTER_DOWN_OUTSIDE,r,{originalEvent:o},{discrete:!0})}o.target&&!n.current?o.pointerType==="touch"?(t.removeEventListener("click",s.current),s.current=l,t.addEventListener("click",s.current,{once:!0})):l():t.removeEventListener("click",s.current),n.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",a),t.removeEventListener("click",s.current)}},[t,r]),{onPointerDownCapture:()=>{n.current=!0}}}var Ec=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const[Oc,Tc,Nc,Rc]=Ic();let br=0,Oi;const Pc=f.forwardRef((e,t)=>Tc(!1)?v.createElement(Ti,Object.assign({ref:t},e)):v.createElement(qc,null,v.createElement(Ti,Object.assign({ref:t},e)))),qc=({children:e})=>{const t=Nc();return v.createElement(Oc,{value:t},e)},Ti=f.forwardRef((e,t)=>{var r,{children:n,asChild:s,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:l,onDismiss:u,safeZone:d,disableOutsidePointerEvents:g=!1,enabled:c=!0}=e,m=Ec(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,y]=f.useState({}),{register:b,index:I,descendants:A}=Rc({disableOutsidePointerEvents:g,disabled:!c,forceUpdate:()=>y({})}),[w,p]=f.useState(null),j=Fr(p,b,t),h=(r=w==null?void 0:w.ownerDocument)!==null&&r!==void 0?r:globalThis==null?void 0:globalThis.document,T=f.useRef(!1),O=f.useRef(!1),R=(()=>{let N=-1;return A.enabledValues().forEach((S,B)=>{S.disableOutsidePointerEvents&&(N=B)}),{isPointerEventsEnabled:I>=N,isBodyPointerEventsDisabled:br>0,pointerStyle:I>=N&&br>0?"auto":void 0}})();function P(N){var _,S;if(!(d!=null&&d.anchor)&&!(d!=null&&d.dismissable)||!c)return;N.defaultPrevented||(T.current=!0,N.detail.originalEvent.type==="pointerdown"&&(O.current=!0));const B=N.target;N.detail.originalEvent.type==="pointerdown"?(!((_=d==null?void 0:d.anchor)===null||_===void 0)&&_.contains(B)||B===(d==null?void 0:d.anchor))&&N.preventDefault():!(B instanceof HTMLElement&&![d==null?void 0:d.anchor,d==null?void 0:d.dismissable].some(L=>L==null?void 0:L.contains(B))&&!B.contains((S=d==null?void 0:d.dismissable)!==null&&S!==void 0?S:null))&&N.preventDefault(),N.detail.originalEvent.type==="focusin"&&O.current&&N.preventDefault(),O.current=!1,T.current=!1}const x=jc(N=>{!R.isPointerEventsEnabled||!c||(i==null||i(N),l==null||l(N),d&&P(N),!N.defaultPrevented&&u&&u())},h),V=Ac(N=>{c&&(o==null||o(N),l==null||l(N),d&&P(N),!N.defaultPrevented&&u&&u())},h);wc(N=>{!c||!(I===A.enabledCount()-1)||(a==null||a(N),!N.defaultPrevented&&u&&(N.preventDefault(),u()))},h),f.useEffect(()=>{if(!(!w||!c||!g))return br===0&&(Oi=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),br++,()=>{br===1&&(h.body.style.pointerEvents=Oi),br--}},[w,h,g,A,c]),f.useEffect(()=>()=>A.values().forEach(N=>N.forceUpdate()),[A,w]);const M=s?xr:"div";return v.createElement(M,Object.assign({ref:j},m,{onFocusCapture:V.onFocusCapture,onBlurCapture:V.onBlurCapture,onPointerDownCapture:x.onPointerDownCapture,style:Object.assign({pointerEvents:R.pointerStyle},m.style)}),n)}),Mr=Math.min,dr=Math.max,os=Math.round,Rt=Math.floor,Pn=e=>({x:e,y:e}),_c={left:"right",right:"left",bottom:"top",top:"bottom"},Mc={start:"end",end:"start"};function ma(e,t,r){return dr(e,Mr(t,r))}function kt(e,t){return typeof e=="function"?e(t):e}function ur(e){return e.split("-")[0]}function vt(e){return e.split("-")[1]}function yd(e){return e==="x"?"y":"x"}function Ma(e){return e==="y"?"height":"width"}function Dr(e){return["top","bottom"].includes(ur(e))?"y":"x"}function Da(e){return yd(Dr(e))}function Dc(e,t,r){r===void 0&&(r=!1);const n=vt(e),s=Da(e),a=Ma(s);let i=s==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(i=ls(i)),[i,ls(i)]}function Sc(e){const t=ls(e);return[fa(e),t,fa(t)]}function fa(e){return e.replace(/start|end/g,t=>Mc[t])}function xc(e,t,r){const n=["left","right"],s=["right","left"],a=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return r?t?s:n:t?n:s;case"left":case"right":return t?a:i;default:return[]}}function Fc(e,t,r,n){const s=vt(e);let a=xc(ur(e),r==="start",n);return s&&(a=a.map(i=>i+"-"+s),t&&(a=a.concat(a.map(fa)))),a}function ls(e){return e.replace(/left|right|bottom|top/g,t=>_c[t])}function Vc(e){return{top:0,right:0,bottom:0,left:0,...e}}function bd(e){return typeof e!="number"?Vc(e):{top:e,right:e,bottom:e,left:e}}function ds(e){const{x:t,y:r,width:n,height:s}=e;return{width:n,height:s,top:r,left:t,right:t+n,bottom:r+s,x:t,y:r}}function Ni(e,t,r){let{reference:n,floating:s}=e;const a=Dr(t),i=Da(t),o=Ma(i),l=ur(t),u=a==="y",d=n.x+n.width/2-s.width/2,g=n.y+n.height/2-s.height/2,c=n[o]/2-s[o]/2;let m;switch(l){case"top":m={x:d,y:n.y-s.height};break;case"bottom":m={x:d,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:g};break;case"left":m={x:n.x-s.width,y:g};break;default:m={x:n.x,y:n.y}}switch(vt(t)){case"start":m[i]-=c*(r&&u?-1:1);break;case"end":m[i]+=c*(r&&u?-1:1);break}return m}const Lc=async(e,t,r)=>{const{placement:n="bottom",strategy:s="absolute",middleware:a=[],platform:i}=r,o=a.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(t));let u=await i.getElementRects({reference:e,floating:t,strategy:s}),{x:d,y:g}=Ni(u,n,l),c=n,m={},y=0;for(let b=0;b<o.length;b++){const{name:I,fn:A}=o[b],{x:w,y:p,data:j,reset:h}=await A({x:d,y:g,initialPlacement:n,placement:c,strategy:s,middlewareData:m,rects:u,platform:i,elements:{reference:e,floating:t}});d=w??d,g=p??g,m={...m,[I]:{...m[I],...j}},h&&y<=50&&(y++,typeof h=="object"&&(h.placement&&(c=h.placement),h.rects&&(u=h.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:s}):h.rects),{x:d,y:g}=Ni(u,c,l)),b=-1)}return{x:d,y:g,placement:c,strategy:s,middlewareData:m}};async function hd(e,t){var r;t===void 0&&(t={});const{x:n,y:s,platform:a,rects:i,elements:o,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:g="floating",altBoundary:c=!1,padding:m=0}=kt(t,e),y=bd(m),I=o[c?g==="floating"?"reference":"floating":g],A=ds(await a.getClippingRect({element:(r=await(a.isElement==null?void 0:a.isElement(I)))==null||r?I:I.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(o.floating)),boundary:u,rootBoundary:d,strategy:l})),w=g==="floating"?{x:n,y:s,width:i.floating.width,height:i.floating.height}:i.reference,p=await(a.getOffsetParent==null?void 0:a.getOffsetParent(o.floating)),j=await(a.isElement==null?void 0:a.isElement(p))?await(a.getScale==null?void 0:a.getScale(p))||{x:1,y:1}:{x:1,y:1},h=ds(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:w,offsetParent:p,strategy:l}):w);return{top:(A.top-h.top+y.top)/j.y,bottom:(h.bottom-A.bottom+y.bottom)/j.y,left:(A.left-h.left+y.left)/j.x,right:(h.right-A.right+y.right)/j.x}}const Bc=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:s,rects:a,platform:i,elements:o,middlewareData:l}=t,{element:u,padding:d=0}=kt(e,t)||{};if(u==null)return{};const g=bd(d),c={x:r,y:n},m=Da(s),y=Ma(m),b=await i.getDimensions(u),I=m==="y",A=I?"top":"left",w=I?"bottom":"right",p=I?"clientHeight":"clientWidth",j=a.reference[y]+a.reference[m]-c[m]-a.floating[y],h=c[m]-a.reference[m],T=await(i.getOffsetParent==null?void 0:i.getOffsetParent(u));let O=T?T[p]:0;(!O||!await(i.isElement==null?void 0:i.isElement(T)))&&(O=o.floating[p]||a.floating[y]);const R=j/2-h/2,P=O/2-b[y]/2-1,x=Mr(g[A],P),V=Mr(g[w],P),M=x,N=O-b[y]-V,_=O/2-b[y]/2+R,S=ma(M,_,N),B=!l.arrow&&vt(s)!=null&&_!==S&&a.reference[y]/2-(_<M?x:V)-b[y]/2<0,C=B?_<M?_-M:_-N:0;return{[m]:c[m]+C,data:{[m]:S,centerOffset:_-S-C,...B&&{alignmentOffset:C}},reset:B}}}),Cc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:s,middlewareData:a,rects:i,initialPlacement:o,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:g=!0,fallbackPlacements:c,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:b=!0,...I}=kt(e,t);if((r=a.arrow)!=null&&r.alignmentOffset)return{};const A=ur(s),w=Dr(o),p=ur(o)===o,j=await(l.isRTL==null?void 0:l.isRTL(u.floating)),h=c||(p||!b?[ls(o)]:Sc(o)),T=y!=="none";!c&&T&&h.push(...Fc(o,b,y,j));const O=[o,...h],R=await hd(t,I),P=[];let x=((n=a.flip)==null?void 0:n.overflows)||[];if(d&&P.push(R[A]),g){const _=Dc(s,i,j);P.push(R[_[0]],R[_[1]])}if(x=[...x,{placement:s,overflows:P}],!P.every(_=>_<=0)){var V,M;const _=(((V=a.flip)==null?void 0:V.index)||0)+1,S=O[_];if(S)return{data:{index:_,overflows:x},reset:{placement:S}};let B=(M=x.filter(C=>C.overflows[0]<=0).sort((C,L)=>C.overflows[1]-L.overflows[1])[0])==null?void 0:M.placement;if(!B)switch(m){case"bestFit":{var N;const C=(N=x.filter(L=>{if(T){const F=Dr(L.placement);return F===w||F==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(F=>F>0).reduce((F,H)=>F+H,0)]).sort((L,F)=>L[1]-F[1])[0])==null?void 0:N[0];C&&(B=C);break}case"initialPlacement":B=o;break}if(s!==B)return{reset:{placement:B}}}return{}}}};async function Kc(e,t){const{placement:r,platform:n,elements:s}=e,a=await(n.isRTL==null?void 0:n.isRTL(s.floating)),i=ur(r),o=vt(r),l=Dr(r)==="y",u=["left","top"].includes(i)?-1:1,d=a&&l?-1:1,g=kt(t,e);let{mainAxis:c,crossAxis:m,alignmentAxis:y}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return o&&typeof y=="number"&&(m=o==="end"?y*-1:y),l?{x:m*d,y:c*u}:{x:c*u,y:m*d}}const Gc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:s,y:a,placement:i,middlewareData:o}=t,l=await Kc(t,e);return i===((r=o.offset)==null?void 0:r.placement)&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:s+l.x,y:a+l.y,data:{...l,placement:i}}}}},Uc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:s}=t,{mainAxis:a=!0,crossAxis:i=!1,limiter:o={fn:I=>{let{x:A,y:w}=I;return{x:A,y:w}}},...l}=kt(e,t),u={x:r,y:n},d=await hd(t,l),g=Dr(ur(s)),c=yd(g);let m=u[c],y=u[g];if(a){const I=c==="y"?"top":"left",A=c==="y"?"bottom":"right",w=m+d[I],p=m-d[A];m=ma(w,m,p)}if(i){const I=g==="y"?"top":"left",A=g==="y"?"bottom":"right",w=y+d[I],p=y-d[A];y=ma(w,y,p)}const b=o.fn({...t,[c]:m,[g]:y});return{...b,data:{x:b.x-r,y:b.y-n,enabled:{[c]:a,[g]:i}}}}}};function Ts(){return typeof window<"u"}function Br(e){return Id(e)?(e.nodeName||"").toLowerCase():"#document"}function rn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function _n(e){var t;return(t=(Id(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Id(e){return Ts()?e instanceof Node||e instanceof rn(e).Node:!1}function Ie(e){return Ts()?e instanceof Element||e instanceof rn(e).Element:!1}function on(e){return Ts()?e instanceof HTMLElement||e instanceof rn(e).HTMLElement:!1}function us(e){return!Ts()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof rn(e).ShadowRoot}function pt(e){const{overflow:t,overflowX:r,overflowY:n,display:s}=cn(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(s)}function Hc(e){return["table","td","th"].includes(Br(e))}function Ns(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Sa(e){const t=Rs(),r=Ie(e)?cn(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function Yc(e){let t=Kn(e);for(;on(t)&&!Ln(t);){if(Sa(t))return t;if(Ns(t))return null;t=Kn(t)}return null}function Rs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ln(e){return["html","body","#document"].includes(Br(e))}function cn(e){return rn(e).getComputedStyle(e)}function Ps(e){return Ie(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Kn(e){if(Br(e)==="html")return e;const t=e.assignedSlot||e.parentNode||us(e)&&e.host||_n(e);return us(t)?t.host:t}function wd(e){const t=Kn(e);return Ln(t)?e.ownerDocument?e.ownerDocument.body:e.body:on(t)&&pt(t)?t:wd(t)}function Qn(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const s=wd(e),a=s===((n=e.ownerDocument)==null?void 0:n.body),i=rn(s);if(a){const o=ca(i);return t.concat(i,i.visualViewport||[],pt(s)?s:[],o&&r?Qn(o):[])}return t.concat(s,Qn(s,[],r))}function ca(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ad(e){const t=cn(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const s=on(e),a=s?e.offsetWidth:r,i=s?e.offsetHeight:n,o=os(r)!==a||os(n)!==i;return o&&(r=a,n=i),{width:r,height:n,$:o}}function xa(e){return Ie(e)?e:e.contextElement}function Tr(e){const t=xa(e);if(!on(t))return Pn(1);const r=t.getBoundingClientRect(),{width:n,height:s,$:a}=Ad(t);let i=(a?os(r.width):r.width)/n,o=(a?os(r.height):r.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!o||!Number.isFinite(o))&&(o=1),{x:i,y:o}}const $c=Pn(0);function jd(e){const t=rn(e);return!Rs()||!t.visualViewport?$c:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Wc(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==rn(e)?!1:t}function gr(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),a=xa(e);let i=Pn(1);t&&(n?Ie(n)&&(i=Tr(n)):i=Tr(e));const o=Wc(a,r,n)?jd(a):Pn(0);let l=(s.left+o.x)/i.x,u=(s.top+o.y)/i.y,d=s.width/i.x,g=s.height/i.y;if(a){const c=rn(a),m=n&&Ie(n)?rn(n):n;let y=c,b=ca(y);for(;b&&n&&m!==y;){const I=Tr(b),A=b.getBoundingClientRect(),w=cn(b),p=A.left+(b.clientLeft+parseFloat(w.paddingLeft))*I.x,j=A.top+(b.clientTop+parseFloat(w.paddingTop))*I.y;l*=I.x,u*=I.y,d*=I.x,g*=I.y,l+=p,u+=j,y=rn(b),b=ca(y)}}return ds({width:d,height:g,x:l,y:u})}function Fa(e,t){const r=Ps(e).scrollLeft;return t?t.left+r:gr(_n(e)).left+r}function Ed(e,t,r){r===void 0&&(r=!1);const n=e.getBoundingClientRect(),s=n.left+t.scrollLeft-(r?0:Fa(e,n)),a=n.top+t.scrollTop;return{x:s,y:a}}function zc(e){let{elements:t,rect:r,offsetParent:n,strategy:s}=e;const a=s==="fixed",i=_n(n),o=t?Ns(t.floating):!1;if(n===i||o&&a)return r;let l={scrollLeft:0,scrollTop:0},u=Pn(1);const d=Pn(0),g=on(n);if((g||!g&&!a)&&((Br(n)!=="body"||pt(i))&&(l=Ps(n)),on(n))){const m=gr(n);u=Tr(n),d.x=m.x+n.clientLeft,d.y=m.y+n.clientTop}const c=i&&!g&&!a?Ed(i,l,!0):Pn(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+d.x+c.x,y:r.y*u.y-l.scrollTop*u.y+d.y+c.y}}function Jc(e){return Array.from(e.getClientRects())}function Xc(e){const t=_n(e),r=Ps(e),n=e.ownerDocument.body,s=dr(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),a=dr(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let i=-r.scrollLeft+Fa(e);const o=-r.scrollTop;return cn(n).direction==="rtl"&&(i+=dr(t.clientWidth,n.clientWidth)-s),{width:s,height:a,x:i,y:o}}function Qc(e,t){const r=rn(e),n=_n(e),s=r.visualViewport;let a=n.clientWidth,i=n.clientHeight,o=0,l=0;if(s){a=s.width,i=s.height;const u=Rs();(!u||u&&t==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:a,height:i,x:o,y:l}}function Zc(e,t){const r=gr(e,!0,t==="fixed"),n=r.top+e.clientTop,s=r.left+e.clientLeft,a=on(e)?Tr(e):Pn(1),i=e.clientWidth*a.x,o=e.clientHeight*a.y,l=s*a.x,u=n*a.y;return{width:i,height:o,x:l,y:u}}function Ri(e,t,r){let n;if(t==="viewport")n=Qc(e,r);else if(t==="document")n=Xc(_n(e));else if(Ie(t))n=Zc(t,r);else{const s=jd(e);n={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return ds(n)}function Od(e,t){const r=Kn(e);return r===t||!Ie(r)||Ln(r)?!1:cn(r).position==="fixed"||Od(r,t)}function ek(e,t){const r=t.get(e);if(r)return r;let n=Qn(e,[],!1).filter(o=>Ie(o)&&Br(o)!=="body"),s=null;const a=cn(e).position==="fixed";let i=a?Kn(e):e;for(;Ie(i)&&!Ln(i);){const o=cn(i),l=Sa(i);!l&&o.position==="fixed"&&(s=null),(a?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||pt(i)&&!l&&Od(e,i))?n=n.filter(d=>d!==i):s=o,i=Kn(i)}return t.set(e,n),n}function nk(e){let{element:t,boundary:r,rootBoundary:n,strategy:s}=e;const i=[...r==="clippingAncestors"?Ns(t)?[]:ek(t,this._c):[].concat(r),n],o=i[0],l=i.reduce((u,d)=>{const g=Ri(t,d,s);return u.top=dr(g.top,u.top),u.right=Mr(g.right,u.right),u.bottom=Mr(g.bottom,u.bottom),u.left=dr(g.left,u.left),u},Ri(t,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function rk(e){const{width:t,height:r}=Ad(e);return{width:t,height:r}}function tk(e,t,r){const n=on(t),s=_n(t),a=r==="fixed",i=gr(e,!0,a,t);let o={scrollLeft:0,scrollTop:0};const l=Pn(0);if(n||!n&&!a)if((Br(t)!=="body"||pt(s))&&(o=Ps(t)),n){const c=gr(t,!0,a,t);l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}else s&&(l.x=Fa(s));const u=s&&!n&&!a?Ed(s,o):Pn(0),d=i.left+o.scrollLeft-l.x-u.x,g=i.top+o.scrollTop-l.y-u.y;return{x:d,y:g,width:i.width,height:i.height}}function Ys(e){return cn(e).position==="static"}function Pi(e,t){if(!on(e)||cn(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return _n(e)===r&&(r=r.ownerDocument.body),r}function Td(e,t){const r=rn(e);if(Ns(e))return r;if(!on(e)){let s=Kn(e);for(;s&&!Ln(s);){if(Ie(s)&&!Ys(s))return s;s=Kn(s)}return r}let n=Pi(e,t);for(;n&&Hc(n)&&Ys(n);)n=Pi(n,t);return n&&Ln(n)&&Ys(n)&&!Sa(n)?r:n||Yc(e)||r}const sk=async function(e){const t=this.getOffsetParent||Td,r=this.getDimensions,n=await r(e.floating);return{reference:tk(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function ak(e){return cn(e).direction==="rtl"}const ik={convertOffsetParentRelativeRectToViewportRelativeRect:zc,getDocumentElement:_n,getClippingRect:nk,getOffsetParent:Td,getElementRects:sk,getClientRects:Jc,getDimensions:rk,getScale:Tr,isElement:Ie,isRTL:ak};function Nd(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ok(e,t){let r=null,n;const s=_n(e);function a(){var o;clearTimeout(n),(o=r)==null||o.disconnect(),r=null}function i(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),a();const u=e.getBoundingClientRect(),{left:d,top:g,width:c,height:m}=u;if(o||t(),!c||!m)return;const y=Rt(g),b=Rt(s.clientWidth-(d+c)),I=Rt(s.clientHeight-(g+m)),A=Rt(d),p={rootMargin:-y+"px "+-b+"px "+-I+"px "+-A+"px",threshold:dr(0,Mr(1,l))||1};let j=!0;function h(T){const O=T[0].intersectionRatio;if(O!==l){if(!j)return i();O?i(!1,O):n=setTimeout(()=>{i(!1,1e-7)},1e3)}O===1&&!Nd(u,e.getBoundingClientRect())&&i(),j=!1}try{r=new IntersectionObserver(h,{...p,root:s.ownerDocument})}catch{r=new IntersectionObserver(h,p)}r.observe(e)}return i(!0),a}function ka(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,u=xa(e),d=s||a?[...u?Qn(u):[],...Qn(t)]:[];d.forEach(A=>{s&&A.addEventListener("scroll",r,{passive:!0}),a&&A.addEventListener("resize",r)});const g=u&&o?ok(u,r):null;let c=-1,m=null;i&&(m=new ResizeObserver(A=>{let[w]=A;w&&w.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(c),c=requestAnimationFrame(()=>{var p;(p=m)==null||p.observe(t)})),r()}),u&&!l&&m.observe(u),m.observe(t));let y,b=l?gr(e):null;l&&I();function I(){const A=gr(e);b&&!Nd(b,A)&&r(),b=A,y=requestAnimationFrame(I)}return r(),()=>{var A;d.forEach(w=>{s&&w.removeEventListener("scroll",r),a&&w.removeEventListener("resize",r)}),g==null||g(),(A=m)==null||A.disconnect(),m=null,l&&cancelAnimationFrame(y)}}const lk=Gc,dk=Uc,uk=Cc,qi=Bc,gk=(e,t,r)=>{const n=new Map,s={platform:ik,...r},a={...s.platform,_c:n};return Lc(e,t,{...s,platform:a})};var ss=typeof document<"u"?f.useLayoutEffect:f.useEffect;function gs(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,s;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!gs(e[n],t[n]))return!1;return!0}if(s=Object.keys(e),r=s.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,s[n]))return!1;for(n=r;n--!==0;){const a=s[n];if(!(a==="_owner"&&e.$$typeof)&&!gs(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function Rd(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function _i(e,t){const r=Rd(e);return Math.round(t*r)/r}function $s(e){const t=f.useRef(e);return ss(()=>{t.current=e}),t}function mk(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:s,elements:{reference:a,floating:i}={},transform:o=!0,whileElementsMounted:l,open:u}=e,[d,g]=f.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[c,m]=f.useState(n);gs(c,n)||m(n);const[y,b]=f.useState(null),[I,A]=f.useState(null),w=f.useCallback(L=>{L!==T.current&&(T.current=L,b(L))},[]),p=f.useCallback(L=>{L!==O.current&&(O.current=L,A(L))},[]),j=a||y,h=i||I,T=f.useRef(null),O=f.useRef(null),R=f.useRef(d),P=l!=null,x=$s(l),V=$s(s),M=$s(u),N=f.useCallback(()=>{if(!T.current||!O.current)return;const L={placement:t,strategy:r,middleware:c};V.current&&(L.platform=V.current),gk(T.current,O.current,L).then(F=>{const H={...F,isPositioned:M.current!==!1};_.current&&!gs(R.current,H)&&(R.current=H,Pa.flushSync(()=>{g(H)}))})},[c,t,r,V,M]);ss(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,g(L=>({...L,isPositioned:!1})))},[u]);const _=f.useRef(!1);ss(()=>(_.current=!0,()=>{_.current=!1}),[]),ss(()=>{if(j&&(T.current=j),h&&(O.current=h),j&&h){if(x.current)return x.current(j,h,N);N()}},[j,h,N,x,P]);const S=f.useMemo(()=>({reference:T,floating:O,setReference:w,setFloating:p}),[w,p]),B=f.useMemo(()=>({reference:j,floating:h}),[j,h]),C=f.useMemo(()=>{const L={position:r,left:0,top:0};if(!B.floating)return L;const F=_i(B.floating,d.x),H=_i(B.floating,d.y);return o?{...L,transform:"translate("+F+"px, "+H+"px)",...Rd(B.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:F,top:H}},[r,o,B.floating,d.x,d.y]);return f.useMemo(()=>({...d,update:N,refs:S,elements:B,floatingStyles:C}),[d,N,S,B,C])}const fk=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:s}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?qi({element:n.current,padding:s}).fn(r):{}:n?qi({element:n,padding:s}).fn(r):{}}}},Pd=(e,t)=>({...lk(e),options:[e,t]}),qd=(e,t)=>({...dk(e),options:[e,t]}),_d=(e,t)=>({...uk(e),options:[e,t]}),Md=(e,t)=>({...fk(e),options:[e,t]}),Mi=/(\w+)/g;function ck(e,t){const r=Array.isArray(e)?e:kk(e);for(const n of t){if(!n)continue;let s=n;for(let a=0;a<r.length;a++){const i=s[r[a]];i!==void 0&&(s=i)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function kk(e){const t=[];let r=Mi.exec(e);for(;r;){const[,n,s]=r;t.push(n||s),r=Mi.exec(e)}return t}const vk=/{[^}]*}/g;function Un(e,...t){const r=Os(),n=r.translations||[],s=[...t,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],r.locale[e]];return(i,o)=>{const l=ck(i,s);return o?l.replace(vk,u=>{const d=u.substring(1,u.length-1);if(o[d]===void 0){const g=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${g}'`)}return o[d]}):l}}function Dd(){const e=Os(),t=e.translations||[],r=Array.isArray(t)?t.map(n=>n.global):[t.global];r.push(e.locale.global);for(const n of r)if(n!=null&&n.dateLocale)return n.dateLocale;throw new Error("dateLocale not found.")}var pk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const yk=f.forwardRef((e,t)=>{var{className:r,size:n="medium",title:s,transparent:a=!1,variant:i="neutral",id:o,"data-color":l}=e,u=pk(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:d}=te(),g=In(),c=Un("Loader");return v.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${g}`,ref:t,className:d("navds-loader",r,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":a}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":l??bk(i)},Qe(u,["children"]),{"data-variant":i}),v.createElement("title",{id:o??`loader-${g}`},s||c("title")),v.createElement("circle",{className:d("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),v.createElement("circle",{className:d("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function bk(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var hk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Pe=f.forwardRef((e,t)=>{var{as:r="button",variant:n="primary",className:s,children:a,size:i="medium",loading:o=!1,disabled:l,icon:u,iconPosition:d="left",onKeyUp:g,"data-color":c}=e,m=hk(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:y}=te(),b=l||o?Qe(m,["href"]):m,I=A=>{A.key===" "&&!l&&!o&&A.currentTarget.click()};return v.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":c??Ik(n),"data-variant":wk(n)},b,{ref:t,onKeyUp:Or(g,I),className:y(s,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!u&&!a,"navds-button--disabled":l??o}),disabled:l??o?!0:void 0}),u&&d==="left"&&v.createElement("span",{className:y("navds-button__icon")},u),o&&v.createElement(yk,{size:i}),a&&v.createElement(Ae,{as:"span",size:i==="medium"?"medium":"small"},a),u&&d==="right"&&v.createElement("span",{className:y("navds-button__icon")},u))});function Ik(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function wk(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var Ak=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const jk={error:Em,warning:qa,info:sm,success:Xg},yt=f.forwardRef((e,t)=>{var{children:r,className:n,variant:s,size:a="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:l=!1,closeButton:u=!1,onClose:d}=e,g=Ak(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:c}=te(),m=Un("Alert"),y=jk[s];return v.createElement("div",Object.assign({},g,{"data-color":Ek(s),"data-variant":s,ref:t,className:c(n,"navds-alert",`navds-alert--${s}`,`navds-alert--${a}`,{"navds-alert--full-width":i,"navds-alert--inline":l,"navds-alert--close-button":u})}),v.createElement(y,{title:m(s),className:c("navds-alert__icon")}),v.createElement(rd,{as:"div",size:a,className:c("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},r),u&&!l&&v.createElement("div",{className:c("navds-alert__button-wrapper")},v.createElement(Pe,{className:c("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:v.createElement(od,{title:["error","warning"].includes(s)?m("closeAlert"):m("closeMessage")})})))});function Ek(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function bt(e,t,r){const n=oe(e,r==null?void 0:r.in);return isNaN(t)?ve((r==null?void 0:r.in)||e,NaN):(t&&n.setDate(n.getDate()+t),n)}function Va(e,t,r){const n=oe(e,r==null?void 0:r.in);if(isNaN(t))return ve(e,NaN);if(!t)return n;const s=n.getDate(),a=ve(e,n.getTime());a.setMonth(n.getMonth()+t+1,0);const i=a.getDate();return s>=i?a:(n.setFullYear(a.getFullYear(),a.getMonth(),s),n)}function ms(e,t){const r=oe(e,t==null?void 0:t.in).getDay();return r===0||r===6}function mr(e,t){return Cn(e,{...t,weekStartsOn:1})}function Sd(e,t){const r=oe(e,t==null?void 0:t.in),n=r.getFullYear(),s=ve(r,0);s.setFullYear(n+1,0,4),s.setHours(0,0,0,0);const a=mr(s),i=ve(r,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const o=mr(i);return r.getTime()>=a.getTime()?n+1:r.getTime()>=o.getTime()?n:n-1}function fs(e){const t=oe(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function Gn(e,t){const r=oe(e,t==null?void 0:t.in);return r.setHours(0,0,0,0),r}function Jn(e,t,r){const[n,s]=Lr(r==null?void 0:r.in,e,t),a=Gn(n),i=Gn(s),o=+a-fs(a),l=+i-fs(i);return Math.round((o-l)/qm)}function Ok(e,t){const r=Sd(e,t),n=ve(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),mr(n)}function Tk(e,t,r){return bt(e,t*7,r)}function La(e,t,r){return Va(e,t*12,r)}function Nk(e,t){let r,n=t==null?void 0:t.in;return e.forEach(s=>{!n&&typeof s=="object"&&(n=ve.bind(null,s));const a=oe(s,n);(!r||r<a||isNaN(+a))&&(r=a)}),ve(n,r||NaN)}function Rk(e,t){let r,n=t==null?void 0:t.in;return e.forEach(s=>{!n&&typeof s=="object"&&(n=ve.bind(null,s));const a=oe(s,n);(!r||r>a||isNaN(+a))&&(r=a)}),ve(n,r||NaN)}function Ba(e,t,r){const[n,s]=Lr(r==null?void 0:r.in,e,t);return+Gn(n)==+Gn(s)}function xd(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Pk(e){return!(!xd(e)&&typeof e!="number"||isNaN(+oe(e)))}function qk(e,t,r){const[n,s]=Lr(r==null?void 0:r.in,e,t),a=n.getFullYear()-s.getFullYear(),i=n.getMonth()-s.getMonth();return a*12+i}function Fd(e,t){const r=oe(e,t==null?void 0:t.in),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function _k(e,t){const[r,n]=Lr(e,t.start,t.end);return{start:r,end:n}}function Vd(e,t){const{start:r,end:n}=_k(t==null?void 0:t.in,e);let s=+r>+n;const a=s?+r:+n,i=s?n:r;i.setHours(0,0,0,0),i.setDate(1);let o=1;const l=[];for(;+i<=a;)l.push(ve(r,i)),i.setMonth(i.getMonth()+o);return s?l.reverse():l}function fr(e,t){const r=oe(e,t==null?void 0:t.in);return r.setDate(1),r.setHours(0,0,0,0),r}function qs(e,t){const r=oe(e,t==null?void 0:t.in),n=r.getFullYear();return r.setFullYear(n+1,0,0),r.setHours(23,59,59,999),r}function ht(e,t){const r=oe(e,t==null?void 0:t.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}function Ld(e,t){var o,l,u,d;const r=kr(),n=(t==null?void 0:t.weekStartsOn)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,s=oe(e,t==null?void 0:t.in),a=s.getDay(),i=(a<n?-7:0)+6-(a-n);return s.setDate(s.getDate()+i),s.setHours(23,59,59,999),s}function Mk(e,t){return Ld(e,{...t,weekStartsOn:1})}function Dk(e,t){const r=oe(e,t==null?void 0:t.in);return Jn(r,ht(r))+1}function Ca(e,t){const r=oe(e,t==null?void 0:t.in),n=+mr(r)-+Ok(r);return Math.round(n/ld)+1}function Ka(e,t){var d,g,c,m;const r=oe(e,t==null?void 0:t.in),n=r.getFullYear(),s=kr(),a=(t==null?void 0:t.firstWeekContainsDate)??((g=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??s.firstWeekContainsDate??((m=(c=s.locale)==null?void 0:c.options)==null?void 0:m.firstWeekContainsDate)??1,i=ve((t==null?void 0:t.in)||e,0);i.setFullYear(n+1,0,a),i.setHours(0,0,0,0);const o=Cn(i,t),l=ve((t==null?void 0:t.in)||e,0);l.setFullYear(n,0,a),l.setHours(0,0,0,0);const u=Cn(l,t);return+r>=+o?n+1:+r>=+u?n:n-1}function Sk(e,t){var o,l,u,d;const r=kr(),n=(t==null?void 0:t.firstWeekContainsDate)??((l=(o=t==null?void 0:t.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??r.firstWeekContainsDate??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,s=Ka(e,t),a=ve((t==null?void 0:t.in)||e,0);return a.setFullYear(s,0,n),a.setHours(0,0,0,0),Cn(a,t)}function Ga(e,t){const r=oe(e,t==null?void 0:t.in),n=+Cn(r,t)-+Sk(r,t);return Math.round(n/ld)+1}function ke(e,t){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}const Wn={y(e,t){const r=e.getFullYear(),n=r>0?r:1-r;return ke(t==="yy"?n%100:n,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):ke(r+1,2)},d(e,t){return ke(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return ke(e.getHours()%12||12,t.length)},H(e,t){return ke(e.getHours(),t.length)},m(e,t){return ke(e.getMinutes(),t.length)},s(e,t){return ke(e.getSeconds(),t.length)},S(e,t){const r=t.length,n=e.getMilliseconds(),s=Math.trunc(n*Math.pow(10,r-3));return ke(s,t.length)}},hr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Di={G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const n=e.getFullYear(),s=n>0?n:1-n;return r.ordinalNumber(s,{unit:"year"})}return Wn.y(e,t)},Y:function(e,t,r,n){const s=Ka(e,n),a=s>0?s:1-s;if(t==="YY"){const i=a%100;return ke(i,2)}return t==="Yo"?r.ordinalNumber(a,{unit:"year"}):ke(a,t.length)},R:function(e,t){const r=Sd(e);return ke(r,t.length)},u:function(e,t){const r=e.getFullYear();return ke(r,t.length)},Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return ke(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return ke(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return Wn.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return ke(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){const s=Ga(e,n);return t==="wo"?r.ordinalNumber(s,{unit:"week"}):ke(s,t.length)},I:function(e,t,r){const n=Ca(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):ke(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):Wn.d(e,t)},D:function(e,t,r){const n=Dk(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):ke(n,t.length)},E:function(e,t,r){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){const s=e.getDay(),a=(s-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return ke(a,2);case"eo":return r.ordinalNumber(a,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){const s=e.getDay(),a=(s-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return ke(a,t.length);case"co":return r.ordinalNumber(a,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,t,r){const n=e.getDay(),s=n===0?7:n;switch(t){case"i":return String(s);case"ii":return ke(s,t.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){const s=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,t,r){const n=e.getHours();let s;switch(n===12?s=hr.noon:n===0?s=hr.midnight:s=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,t,r){const n=e.getHours();let s;switch(n>=17?s=hr.evening:n>=12?s=hr.afternoon:n>=4?s=hr.morning:s=hr.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return Wn.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):Wn.H(e,t)},K:function(e,t,r){const n=e.getHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):ke(n,t.length)},k:function(e,t,r){let n=e.getHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):ke(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):Wn.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):Wn.s(e,t)},S:function(e,t){return Wn.S(e,t)},X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return xi(n);case"XXXX":case"XX":return ir(n);case"XXXXX":case"XXX":default:return ir(n,":")}},x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"x":return xi(n);case"xxxx":case"xx":return ir(n);case"xxxxx":case"xxx":default:return ir(n,":")}},O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Si(n,":");case"OOOO":default:return"GMT"+ir(n,":")}},z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Si(n,":");case"zzzz":default:return"GMT"+ir(n,":")}},t:function(e,t,r){const n=Math.trunc(+e/1e3);return ke(n,t.length)},T:function(e,t,r){return ke(+e,t.length)}};function Si(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),s=Math.trunc(n/60),a=n%60;return a===0?r+String(s):r+String(s)+t+ke(a,2)}function xi(e,t){return e%60===0?(e>0?"-":"+")+ke(Math.abs(e)/60,2):ir(e,t)}function ir(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),s=ke(Math.trunc(n/60),2),a=ke(n%60,2);return r+s+t+a}const Fi=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Bd=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},xk=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],s=r[2];if(!s)return Fi(e,t);let a;switch(n){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",Fi(n,t)).replace("{{time}}",Bd(s,t))},va={p:Bd,P:xk},Fk=/^D+$/,Vk=/^Y+$/,Lk=["D","DD","YY","YYYY"];function Cd(e){return Fk.test(e)}function Kd(e){return Vk.test(e)}function pa(e,t,r){const n=Bk(e,t,r);if(console.warn(n),Lk.includes(e))throw new RangeError(n)}function Bk(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ck=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Kk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Gk=/^'([^]*?)'?$/,Uk=/''/g,Hk=/[a-zA-Z]/;function cr(e,t,r){var d,g,c,m,y,b,I,A;const n=kr(),s=(r==null?void 0:r.locale)??n.locale??Es,a=(r==null?void 0:r.firstWeekContainsDate)??((g=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(c=n.locale)==null?void 0:c.options)==null?void 0:m.firstWeekContainsDate)??1,i=(r==null?void 0:r.weekStartsOn)??((b=(y=r==null?void 0:r.locale)==null?void 0:y.options)==null?void 0:b.weekStartsOn)??n.weekStartsOn??((A=(I=n.locale)==null?void 0:I.options)==null?void 0:A.weekStartsOn)??0,o=oe(e,r==null?void 0:r.in);if(!Pk(o))throw new RangeError("Invalid time value");let l=t.match(Kk).map(w=>{const p=w[0];if(p==="p"||p==="P"){const j=va[p];return j(w,s.formatLong)}return w}).join("").match(Ck).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const p=w[0];if(p==="'")return{isToken:!1,value:Yk(w)};if(Di[p])return{isToken:!0,value:w};if(p.match(Hk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");return{isToken:!1,value:w}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const u={firstWeekContainsDate:a,weekStartsOn:i,locale:s};return l.map(w=>{if(!w.isToken)return w.value;const p=w.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&Kd(p)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&Cd(p))&&pa(p,t,String(e));const j=Di[p[0]];return j(o,p,s.localize,u)}).join("")}function Yk(e){const t=e.match(Gk);return t?t[1].replace(Uk,"'"):e}function $k(e,t){const r=oe(e,t==null?void 0:t.in),n=r.getFullYear(),s=r.getMonth(),a=ve(r,0);return a.setFullYear(n,s+1,0),a.setHours(0,0,0,0),a.getDate()}function Wk(){return Object.assign({},kr())}function zk(e,t){const r=oe(e,t==null?void 0:t.in).getDay();return r===0?7:r}function Ua(e,t){return oe(e,t==null?void 0:t.in).getMonth()}function Ha(e,t){return oe(e,t==null?void 0:t.in).getFullYear()}function Gd(e,t){return+oe(e)>+oe(t)}function It(e,t){return+oe(e)<+oe(t)}function Jk(e,t){const r=Xk(t)?new t(0):ve(t,0);return r.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),r.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),r}function Xk(e){var t;return typeof e=="function"&&((t=e.prototype)==null?void 0:t.constructor)===e}const Qk=10;class Ud{constructor(){z(this,"subPriority",0)}validate(t,r){return!0}}class Zk extends Ud{constructor(t,r,n,s,a){super(),this.value=t,this.validateValue=r,this.setValue=n,this.priority=s,a&&(this.subPriority=a)}validate(t,r){return this.validateValue(t,this.value,r)}set(t,r,n){return this.setValue(t,r,this.value,n)}}class ev extends Ud{constructor(r,n){super();z(this,"priority",Qk);z(this,"subPriority",-1);this.context=r||(s=>ve(n,s))}set(r,n){return n.timestampIsSet?r:ve(r,Jk(r,this.context))}}class ge{run(t,r,n,s){const a=this.parse(t,r,n,s);return a?{setter:new Zk(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}validate(t,r,n){return!0}}class nv extends ge{constructor(){super(...arguments);z(this,"priority",140);z(this,"incompatibleTokens",["R","u","t","T"])}parse(r,n,s){switch(n){case"G":case"GG":case"GGG":return s.era(r,{width:"abbreviated"})||s.era(r,{width:"narrow"});case"GGGGG":return s.era(r,{width:"narrow"});case"GGGG":default:return s.era(r,{width:"wide"})||s.era(r,{width:"abbreviated"})||s.era(r,{width:"narrow"})}}set(r,n,s){return n.era=s,r.setFullYear(s,0,1),r.setHours(0,0,0,0),r}}const Me={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},On={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function De(e,t){return e&&{value:t(e.value),rest:e.rest}}function Ne(e,t){const r=t.match(e);return r?{value:parseInt(r[0],10),rest:t.slice(r[0].length)}:null}function Tn(e,t){const r=t.match(e);if(!r)return null;if(r[0]==="Z")return{value:0,rest:t.slice(1)};const n=r[1]==="+"?1:-1,s=r[2]?parseInt(r[2],10):0,a=r[3]?parseInt(r[3],10):0,i=r[5]?parseInt(r[5],10):0;return{value:n*(s*Mm+a*_m+i*Dm),rest:t.slice(r[0].length)}}function Hd(e){return Ne(Me.anyDigitsSigned,e)}function qe(e,t){switch(e){case 1:return Ne(Me.singleDigit,t);case 2:return Ne(Me.twoDigits,t);case 3:return Ne(Me.threeDigits,t);case 4:return Ne(Me.fourDigits,t);default:return Ne(new RegExp("^\\d{1,"+e+"}"),t)}}function cs(e,t){switch(e){case 1:return Ne(Me.singleDigitSigned,t);case 2:return Ne(Me.twoDigitsSigned,t);case 3:return Ne(Me.threeDigitsSigned,t);case 4:return Ne(Me.fourDigitsSigned,t);default:return Ne(new RegExp("^-?\\d{1,"+e+"}"),t)}}function Ya(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Yd(e,t){const r=t>0,n=r?t:1-t;let s;if(n<=50)s=e||100;else{const a=n+50,i=Math.trunc(a/100)*100,o=e>=a%100;s=e+i-(o?100:0)}return r?s:1-s}function $d(e){return e%400===0||e%4===0&&e%100!==0}class rv extends ge{constructor(){super(...arguments);z(this,"priority",130);z(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(r,n,s){const a=i=>({year:i,isTwoDigitYear:n==="yy"});switch(n){case"y":return De(qe(4,r),a);case"yo":return De(s.ordinalNumber(r,{unit:"year"}),a);default:return De(qe(n.length,r),a)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,s){const a=r.getFullYear();if(s.isTwoDigitYear){const o=Yd(s.year,a);return r.setFullYear(o,0,1),r.setHours(0,0,0,0),r}const i=!("era"in n)||n.era===1?s.year:1-s.year;return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}}class tv extends ge{constructor(){super(...arguments);z(this,"priority",130);z(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(r,n,s){const a=i=>({year:i,isTwoDigitYear:n==="YY"});switch(n){case"Y":return De(qe(4,r),a);case"Yo":return De(s.ordinalNumber(r,{unit:"year"}),a);default:return De(qe(n.length,r),a)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,s,a){const i=Ka(r,a);if(s.isTwoDigitYear){const l=Yd(s.year,i);return r.setFullYear(l,0,a.firstWeekContainsDate),r.setHours(0,0,0,0),Cn(r,a)}const o=!("era"in n)||n.era===1?s.year:1-s.year;return r.setFullYear(o,0,a.firstWeekContainsDate),r.setHours(0,0,0,0),Cn(r,a)}}class sv extends ge{constructor(){super(...arguments);z(this,"priority",130);z(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(r,n){return cs(n==="R"?4:n.length,r)}set(r,n,s){const a=ve(r,0);return a.setFullYear(s,0,4),a.setHours(0,0,0,0),mr(a)}}class av extends ge{constructor(){super(...arguments);z(this,"priority",130);z(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(r,n){return cs(n==="u"?4:n.length,r)}set(r,n,s){return r.setFullYear(s,0,1),r.setHours(0,0,0,0),r}}class iv extends ge{constructor(){super(...arguments);z(this,"priority",120);z(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,s){switch(n){case"Q":case"QQ":return qe(n.length,r);case"Qo":return s.ordinalNumber(r,{unit:"quarter"});case"QQQ":return s.quarter(r,{width:"abbreviated",context:"formatting"})||s.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return s.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return s.quarter(r,{width:"wide",context:"formatting"})||s.quarter(r,{width:"abbreviated",context:"formatting"})||s.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=1&&n<=4}set(r,n,s){return r.setMonth((s-1)*3,1),r.setHours(0,0,0,0),r}}class ov extends ge{constructor(){super(...arguments);z(this,"priority",120);z(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,s){switch(n){case"q":case"qq":return qe(n.length,r);case"qo":return s.ordinalNumber(r,{unit:"quarter"});case"qqq":return s.quarter(r,{width:"abbreviated",context:"standalone"})||s.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return s.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return s.quarter(r,{width:"wide",context:"standalone"})||s.quarter(r,{width:"abbreviated",context:"standalone"})||s.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=1&&n<=4}set(r,n,s){return r.setMonth((s-1)*3,1),r.setHours(0,0,0,0),r}}class lv extends ge{constructor(){super(...arguments);z(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);z(this,"priority",110)}parse(r,n,s){const a=i=>i-1;switch(n){case"M":return De(Ne(Me.month,r),a);case"MM":return De(qe(2,r),a);case"Mo":return De(s.ordinalNumber(r,{unit:"month"}),a);case"MMM":return s.month(r,{width:"abbreviated",context:"formatting"})||s.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return s.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return s.month(r,{width:"wide",context:"formatting"})||s.month(r,{width:"abbreviated",context:"formatting"})||s.month(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=11}set(r,n,s){return r.setMonth(s,1),r.setHours(0,0,0,0),r}}class dv extends ge{constructor(){super(...arguments);z(this,"priority",110);z(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(r,n,s){const a=i=>i-1;switch(n){case"L":return De(Ne(Me.month,r),a);case"LL":return De(qe(2,r),a);case"Lo":return De(s.ordinalNumber(r,{unit:"month"}),a);case"LLL":return s.month(r,{width:"abbreviated",context:"standalone"})||s.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return s.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return s.month(r,{width:"wide",context:"standalone"})||s.month(r,{width:"abbreviated",context:"standalone"})||s.month(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=11}set(r,n,s){return r.setMonth(s,1),r.setHours(0,0,0,0),r}}function uv(e,t,r){const n=oe(e,r==null?void 0:r.in),s=Ga(n,r)-t;return n.setDate(n.getDate()-s*7),oe(n,r==null?void 0:r.in)}class gv extends ge{constructor(){super(...arguments);z(this,"priority",100);z(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(r,n,s){switch(n){case"w":return Ne(Me.week,r);case"wo":return s.ordinalNumber(r,{unit:"week"});default:return qe(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,s,a){return Cn(uv(r,s,a),a)}}function mv(e,t,r){const n=oe(e,r==null?void 0:r.in),s=Ca(n,r)-t;return n.setDate(n.getDate()-s*7),n}class fv extends ge{constructor(){super(...arguments);z(this,"priority",100);z(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(r,n,s){switch(n){case"I":return Ne(Me.week,r);case"Io":return s.ordinalNumber(r,{unit:"week"});default:return qe(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,s){return mr(mv(r,s))}}const cv=[31,28,31,30,31,30,31,31,30,31,30,31],kv=[31,29,31,30,31,30,31,31,30,31,30,31];class vv extends ge{constructor(){super(...arguments);z(this,"priority",90);z(this,"subPriority",1);z(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(r,n,s){switch(n){case"d":return Ne(Me.date,r);case"do":return s.ordinalNumber(r,{unit:"date"});default:return qe(n.length,r)}}validate(r,n){const s=r.getFullYear(),a=$d(s),i=r.getMonth();return a?n>=1&&n<=kv[i]:n>=1&&n<=cv[i]}set(r,n,s){return r.setDate(s),r.setHours(0,0,0,0),r}}class pv extends ge{constructor(){super(...arguments);z(this,"priority",90);z(this,"subpriority",1);z(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(r,n,s){switch(n){case"D":case"DD":return Ne(Me.dayOfYear,r);case"Do":return s.ordinalNumber(r,{unit:"date"});default:return qe(n.length,r)}}validate(r,n){const s=r.getFullYear();return $d(s)?n>=1&&n<=366:n>=1&&n<=365}set(r,n,s){return r.setMonth(0,s),r.setHours(0,0,0,0),r}}function $a(e,t,r){var g,c,m,y;const n=kr(),s=(r==null?void 0:r.weekStartsOn)??((c=(g=r==null?void 0:r.locale)==null?void 0:g.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((y=(m=n.locale)==null?void 0:m.options)==null?void 0:y.weekStartsOn)??0,a=oe(e,r==null?void 0:r.in),i=a.getDay(),l=(t%7+7)%7,u=7-s,d=t<0||t>6?t-(i+u)%7:(l+u)%7-(i+u)%7;return bt(a,d,r)}class yv extends ge{constructor(){super(...arguments);z(this,"priority",90);z(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(r,n,s){switch(n){case"E":case"EE":case"EEE":return s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return s.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return s.day(r,{width:"wide",context:"formatting"})||s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,s,a){return r=$a(r,s,a),r.setHours(0,0,0,0),r}}class bv extends ge{constructor(){super(...arguments);z(this,"priority",90);z(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(r,n,s,a){const i=o=>{const l=Math.floor((o-1)/7)*7;return(o+a.weekStartsOn+6)%7+l};switch(n){case"e":case"ee":return De(qe(n.length,r),i);case"eo":return De(s.ordinalNumber(r,{unit:"day"}),i);case"eee":return s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"});case"eeeee":return s.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return s.day(r,{width:"wide",context:"formatting"})||s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,s,a){return r=$a(r,s,a),r.setHours(0,0,0,0),r}}class hv extends ge{constructor(){super(...arguments);z(this,"priority",90);z(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(r,n,s,a){const i=o=>{const l=Math.floor((o-1)/7)*7;return(o+a.weekStartsOn+6)%7+l};switch(n){case"c":case"cc":return De(qe(n.length,r),i);case"co":return De(s.ordinalNumber(r,{unit:"day"}),i);case"ccc":return s.day(r,{width:"abbreviated",context:"standalone"})||s.day(r,{width:"short",context:"standalone"})||s.day(r,{width:"narrow",context:"standalone"});case"ccccc":return s.day(r,{width:"narrow",context:"standalone"});case"cccccc":return s.day(r,{width:"short",context:"standalone"})||s.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return s.day(r,{width:"wide",context:"standalone"})||s.day(r,{width:"abbreviated",context:"standalone"})||s.day(r,{width:"short",context:"standalone"})||s.day(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=6}set(r,n,s,a){return r=$a(r,s,a),r.setHours(0,0,0,0),r}}function Iv(e,t,r){const n=oe(e,r==null?void 0:r.in),s=zk(n,r),a=t-s;return bt(n,a,r)}class wv extends ge{constructor(){super(...arguments);z(this,"priority",90);z(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(r,n,s){const a=i=>i===0?7:i;switch(n){case"i":case"ii":return qe(n.length,r);case"io":return s.ordinalNumber(r,{unit:"day"});case"iii":return De(s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"}),a);case"iiiii":return De(s.day(r,{width:"narrow",context:"formatting"}),a);case"iiiiii":return De(s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"}),a);case"iiii":default:return De(s.day(r,{width:"wide",context:"formatting"})||s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"}),a)}}validate(r,n){return n>=1&&n<=7}set(r,n,s){return r=Iv(r,s),r.setHours(0,0,0,0),r}}class Av extends ge{constructor(){super(...arguments);z(this,"priority",80);z(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(r,n,s){switch(n){case"a":case"aa":case"aaa":return s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return s.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return s.dayPeriod(r,{width:"wide",context:"formatting"})||s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,s){return r.setHours(Ya(s),0,0,0),r}}class jv extends ge{constructor(){super(...arguments);z(this,"priority",80);z(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(r,n,s){switch(n){case"b":case"bb":case"bbb":return s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return s.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return s.dayPeriod(r,{width:"wide",context:"formatting"})||s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,s){return r.setHours(Ya(s),0,0,0),r}}class Ev extends ge{constructor(){super(...arguments);z(this,"priority",80);z(this,"incompatibleTokens",["a","b","t","T"])}parse(r,n,s){switch(n){case"B":case"BB":case"BBB":return s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return s.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return s.dayPeriod(r,{width:"wide",context:"formatting"})||s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,s){return r.setHours(Ya(s),0,0,0),r}}class Ov extends ge{constructor(){super(...arguments);z(this,"priority",70);z(this,"incompatibleTokens",["H","K","k","t","T"])}parse(r,n,s){switch(n){case"h":return Ne(Me.hour12h,r);case"ho":return s.ordinalNumber(r,{unit:"hour"});default:return qe(n.length,r)}}validate(r,n){return n>=1&&n<=12}set(r,n,s){const a=r.getHours()>=12;return a&&s<12?r.setHours(s+12,0,0,0):!a&&s===12?r.setHours(0,0,0,0):r.setHours(s,0,0,0),r}}class Tv extends ge{constructor(){super(...arguments);z(this,"priority",70);z(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(r,n,s){switch(n){case"H":return Ne(Me.hour23h,r);case"Ho":return s.ordinalNumber(r,{unit:"hour"});default:return qe(n.length,r)}}validate(r,n){return n>=0&&n<=23}set(r,n,s){return r.setHours(s,0,0,0),r}}class Nv extends ge{constructor(){super(...arguments);z(this,"priority",70);z(this,"incompatibleTokens",["h","H","k","t","T"])}parse(r,n,s){switch(n){case"K":return Ne(Me.hour11h,r);case"Ko":return s.ordinalNumber(r,{unit:"hour"});default:return qe(n.length,r)}}validate(r,n){return n>=0&&n<=11}set(r,n,s){return r.getHours()>=12&&s<12?r.setHours(s+12,0,0,0):r.setHours(s,0,0,0),r}}class Rv extends ge{constructor(){super(...arguments);z(this,"priority",70);z(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(r,n,s){switch(n){case"k":return Ne(Me.hour24h,r);case"ko":return s.ordinalNumber(r,{unit:"hour"});default:return qe(n.length,r)}}validate(r,n){return n>=1&&n<=24}set(r,n,s){const a=s<=24?s%24:s;return r.setHours(a,0,0,0),r}}class Pv extends ge{constructor(){super(...arguments);z(this,"priority",60);z(this,"incompatibleTokens",["t","T"])}parse(r,n,s){switch(n){case"m":return Ne(Me.minute,r);case"mo":return s.ordinalNumber(r,{unit:"minute"});default:return qe(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,s){return r.setMinutes(s,0,0),r}}class qv extends ge{constructor(){super(...arguments);z(this,"priority",50);z(this,"incompatibleTokens",["t","T"])}parse(r,n,s){switch(n){case"s":return Ne(Me.second,r);case"so":return s.ordinalNumber(r,{unit:"second"});default:return qe(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,s){return r.setSeconds(s,0),r}}class _v extends ge{constructor(){super(...arguments);z(this,"priority",30);z(this,"incompatibleTokens",["t","T"])}parse(r,n){const s=a=>Math.trunc(a*Math.pow(10,-n.length+3));return De(qe(n.length,r),s)}set(r,n,s){return r.setMilliseconds(s),r}}class Mv extends ge{constructor(){super(...arguments);z(this,"priority",10);z(this,"incompatibleTokens",["t","T","x"])}parse(r,n){switch(n){case"X":return Tn(On.basicOptionalMinutes,r);case"XX":return Tn(On.basic,r);case"XXXX":return Tn(On.basicOptionalSeconds,r);case"XXXXX":return Tn(On.extendedOptionalSeconds,r);case"XXX":default:return Tn(On.extended,r)}}set(r,n,s){return n.timestampIsSet?r:ve(r,r.getTime()-fs(r)-s)}}class Dv extends ge{constructor(){super(...arguments);z(this,"priority",10);z(this,"incompatibleTokens",["t","T","X"])}parse(r,n){switch(n){case"x":return Tn(On.basicOptionalMinutes,r);case"xx":return Tn(On.basic,r);case"xxxx":return Tn(On.basicOptionalSeconds,r);case"xxxxx":return Tn(On.extendedOptionalSeconds,r);case"xxx":default:return Tn(On.extended,r)}}set(r,n,s){return n.timestampIsSet?r:ve(r,r.getTime()-fs(r)-s)}}class Sv extends ge{constructor(){super(...arguments);z(this,"priority",40);z(this,"incompatibleTokens","*")}parse(r){return Hd(r)}set(r,n,s){return[ve(r,s*1e3),{timestampIsSet:!0}]}}class xv extends ge{constructor(){super(...arguments);z(this,"priority",20);z(this,"incompatibleTokens","*")}parse(r){return Hd(r)}set(r,n,s){return[ve(r,s),{timestampIsSet:!0}]}}const Fv={G:new nv,y:new rv,Y:new tv,R:new sv,u:new av,Q:new iv,q:new ov,M:new lv,L:new dv,w:new gv,I:new fv,d:new vv,D:new pv,E:new yv,e:new bv,c:new hv,i:new wv,a:new Av,b:new jv,B:new Ev,h:new Ov,H:new Tv,K:new Nv,k:new Rv,m:new Pv,s:new qv,S:new _v,X:new Mv,x:new Dv,t:new Sv,T:new xv},Vv=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Lv=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Bv=/^'([^]*?)'?$/,Cv=/''/g,Kv=/\S/,Gv=/[a-zA-Z]/;function Nr(e,t,r,n){var I,A,w,p,j,h,T,O;const s=()=>ve((n==null?void 0:n.in)||r,NaN),a=Wk(),i=(n==null?void 0:n.locale)??a.locale??Es,o=(n==null?void 0:n.firstWeekContainsDate)??((A=(I=n==null?void 0:n.locale)==null?void 0:I.options)==null?void 0:A.firstWeekContainsDate)??a.firstWeekContainsDate??((p=(w=a.locale)==null?void 0:w.options)==null?void 0:p.firstWeekContainsDate)??1,l=(n==null?void 0:n.weekStartsOn)??((h=(j=n==null?void 0:n.locale)==null?void 0:j.options)==null?void 0:h.weekStartsOn)??a.weekStartsOn??((O=(T=a.locale)==null?void 0:T.options)==null?void 0:O.weekStartsOn)??0;if(!t)return e?s():oe(r,n==null?void 0:n.in);const u={firstWeekContainsDate:o,weekStartsOn:l,locale:i},d=[new ev(n==null?void 0:n.in,r)],g=t.match(Lv).map(R=>{const P=R[0];if(P in va){const x=va[P];return x(R,i.formatLong)}return R}).join("").match(Vv),c=[];for(let R of g){!(n!=null&&n.useAdditionalWeekYearTokens)&&Kd(R)&&pa(R,t,e),!(n!=null&&n.useAdditionalDayOfYearTokens)&&Cd(R)&&pa(R,t,e);const P=R[0],x=Fv[P];if(x){const{incompatibleTokens:V}=x;if(Array.isArray(V)){const N=c.find(_=>V.includes(_.token)||_.token===P);if(N)throw new RangeError(`The format string mustn't contain \`${N.fullToken}\` and \`${R}\` at the same time`)}else if(x.incompatibleTokens==="*"&&c.length>0)throw new RangeError(`The format string mustn't contain \`${R}\` and any other token at the same time`);c.push({token:P,fullToken:R});const M=x.run(e,R,i.match,u);if(!M)return s();d.push(M.setter),e=M.rest}else{if(P.match(Gv))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");if(R==="''"?R="'":P==="'"&&(R=Uv(R)),e.indexOf(R)===0)e=e.slice(R.length);else return s()}}if(e.length>0&&Kv.test(e))return s();const m=d.map(R=>R.priority).sort((R,P)=>P-R).filter((R,P,x)=>x.indexOf(R)===P).map(R=>d.filter(P=>P.priority===R).sort((P,x)=>x.subPriority-P.subPriority)).map(R=>R[0]);let y=oe(r,n==null?void 0:n.in);if(isNaN(+y))return s();const b={};for(const R of m){if(!R.validate(y,u))return s();const P=R.set(y,b,u);Array.isArray(P)?(y=P[0],Object.assign(b,P[1])):y=P}return y}function Uv(e){return e.match(Bv)[1].replace(Cv,"'")}function Hv(e,t,r){const[n,s]=Lr(r==null?void 0:r.in,e,t);return n.getFullYear()===s.getFullYear()&&n.getMonth()===s.getMonth()}function Wd(e,t,r){const[n,s]=Lr(r==null?void 0:r.in,e,t);return n.getFullYear()===s.getFullYear()}function Yv(e,t,r){return bt(e,-t,r)}function zd(e,t,r){const n=oe(e,r==null?void 0:r.in),s=n.getFullYear(),a=n.getDate(),i=ve(e,0);i.setFullYear(s,t,15),i.setHours(0,0,0,0);const o=$k(i);return n.setMonth(t,Math.min(a,o)),n}function Jd(e,t,r){const n=oe(e,r==null?void 0:r.in);return isNaN(+n)?ve(e,NaN):(n.setFullYear(t),n)}function $v(e,t,r){return Va(e,-t,r)}function Wv(e,t,r){const{years:n=0,months:s=0,weeks:a=0,days:i=0,hours:o=0,minutes:l=0,seconds:u=0}=t,d=$v(e,s+n*12,r),g=Yv(d,i+a*7,r),c=l+o*60,y=(u+c*60)*1e3;return ve(e,+g-y)}function zv(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Jv(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:r,version:n}=t;return r+"/"+n}).join(" "):navigator.userAgent}function Xv(){return/apple/i.test(navigator.vendor)}function Qv(){return zv().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Zv(){return Jv().includes("jsdom/")}const ep="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Vi(e){let t=e.activeElement;for(;((r=t)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;t=t.shadowRoot.activeElement}return t}function it(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&us(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Ar(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Ws(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const r=e;return r.target!=null&&t.contains(r.target)}function np(e){return e.matches("html,body")}function or(e){return(e==null?void 0:e.ownerDocument)||document}function rp(e){return on(e)&&e.matches(ep)}function tp(e){if(!e||Zv())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function zs(e,t,r){r===void 0&&(r=!0);let n=e.filter(a=>{var i;return a.parentId===t&&((i=a.context)==null?void 0:i.open)}),s=n;for(;s.length;)s=r?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(o=>{var l;return a.parentId===o.id&&((l=a.context)==null?void 0:l.open)})}):e,n=n.concat(s);return n}function sp(e){return"nativeEvent"in e}function ya(e,t){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var Bn=typeof document<"u"?f.useLayoutEffect:f.useEffect;const ap={...Ql};function Pt(e){const t=f.useRef(e);return Bn(()=>{t.current=e}),t}const ip=ap.useInsertionEffect,op=ip||(e=>e());function Fn(e){const t=f.useRef(()=>{});return op(()=>{t.current=e}),f.useCallback(function(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return t.current==null?void 0:t.current(...n)},[])}const lp="data-floating-ui-focusable",Li="active",Bi="selected",dp={...Ql};let Ci=!1,up=0;const Ki=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+up++;function gp(){const[e,t]=f.useState(()=>Ci?Ki():void 0);return Bn(()=>{e==null&&t(Ki())},[]),f.useEffect(()=>{Ci=!0},[]),e}const mp=dp.useId,Xd=mp||gp;function fp(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(s=>s(r))},on(t,r){e.has(t)||e.set(t,new Set),e.get(t).add(r)},off(t,r){var n;(n=e.get(t))==null||n.delete(r)}}}const cp=f.createContext(null),kp=f.createContext(null),Qd=()=>{var e;return((e=f.useContext(cp))==null?void 0:e.id)||null},Wa=()=>f.useContext(kp);function _s(e){return"data-floating-ui-"+e}function dn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Gi=_s("safe-polygon");function Js(e,t,r){if(r&&!ya(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n==null?void 0:n[t]}return e==null?void 0:e[t]}function Xs(e){return typeof e=="function"?e():e}function vp(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,dataRef:s,events:a,elements:i}=e,{enabled:o=!0,delay:l=0,handleClose:u=null,mouseOnly:d=!1,restMs:g=0,move:c=!0}=t,m=Wa(),y=Qd(),b=Pt(u),I=Pt(l),A=Pt(r),w=Pt(g),p=f.useRef(),j=f.useRef(-1),h=f.useRef(),T=f.useRef(-1),O=f.useRef(!0),R=f.useRef(!1),P=f.useRef(()=>{}),x=f.useRef(!1),V=f.useCallback(()=>{var C;const L=(C=s.current.openEvent)==null?void 0:C.type;return(L==null?void 0:L.includes("mouse"))&&L!=="mousedown"},[s]);f.useEffect(()=>{if(!o)return;function C(L){let{open:F}=L;F||(dn(j),dn(T),O.current=!0,x.current=!1)}return a.on("openchange",C),()=>{a.off("openchange",C)}},[o,a]),f.useEffect(()=>{if(!o||!b.current||!r)return;function C(F){V()&&n(!1,F,"hover")}const L=or(i.floating).documentElement;return L.addEventListener("mouseleave",C),()=>{L.removeEventListener("mouseleave",C)}},[i.floating,r,n,o,b,V]);const M=f.useCallback(function(C,L,F){L===void 0&&(L=!0),F===void 0&&(F="hover");const H=Js(I.current,"close",p.current);H&&!h.current?(dn(j),j.current=window.setTimeout(()=>n(!1,C,F),H)):L&&(dn(j),n(!1,C,F))},[I,n]),N=Fn(()=>{P.current(),h.current=void 0}),_=Fn(()=>{if(R.current){const C=or(i.floating).body;C.style.pointerEvents="",C.removeAttribute(Gi),R.current=!1}}),S=Fn(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);f.useEffect(()=>{if(!o)return;function C(J){if(dn(j),O.current=!1,d&&!ya(p.current)||Xs(w.current)>0&&!Js(I.current,"open"))return;const ae=Js(I.current,"open",p.current);ae?j.current=window.setTimeout(()=>{A.current||n(!0,J,"hover")},ae):r||n(!0,J,"hover")}function L(J){if(S()){_();return}P.current();const ae=or(i.floating);if(dn(T),x.current=!1,b.current&&s.current.floatingContext){r||dn(j),h.current=b.current({...s.current.floatingContext,tree:m,x:J.clientX,y:J.clientY,onClose(){_(),N(),S()||M(J,!0,"safe-polygon")}});const ee=h.current;ae.addEventListener("mousemove",ee),P.current=()=>{ae.removeEventListener("mousemove",ee)};return}(p.current==="touch"?!it(i.floating,J.relatedTarget):!0)&&M(J)}function F(J){S()||s.current.floatingContext&&(b.current==null||b.current({...s.current.floatingContext,tree:m,x:J.clientX,y:J.clientY,onClose(){_(),N(),S()||M(J)}})(J))}function H(){dn(j)}function X(J){S()||M(J,!1)}if(Ie(i.domReference)){const J=i.domReference,ae=i.floating;return r&&J.addEventListener("mouseleave",F),c&&J.addEventListener("mousemove",C,{once:!0}),J.addEventListener("mouseenter",C),J.addEventListener("mouseleave",L),ae&&(ae.addEventListener("mouseleave",F),ae.addEventListener("mouseenter",H),ae.addEventListener("mouseleave",X)),()=>{r&&J.removeEventListener("mouseleave",F),c&&J.removeEventListener("mousemove",C),J.removeEventListener("mouseenter",C),J.removeEventListener("mouseleave",L),ae&&(ae.removeEventListener("mouseleave",F),ae.removeEventListener("mouseenter",H),ae.removeEventListener("mouseleave",X))}}},[i,o,e,d,c,M,N,_,n,r,A,m,I,b,s,S,w]),Bn(()=>{var C;if(o&&r&&(C=b.current)!=null&&C.__options.blockPointerEvents&&V()){R.current=!0;const F=i.floating;if(Ie(i.domReference)&&F){var L;const H=or(i.floating).body;H.setAttribute(Gi,"");const X=i.domReference,J=m==null||(L=m.nodesRef.current.find(ae=>ae.id===y))==null||(L=L.context)==null?void 0:L.elements.floating;return J&&(J.style.pointerEvents=""),H.style.pointerEvents="none",X.style.pointerEvents="auto",F.style.pointerEvents="auto",()=>{H.style.pointerEvents="",X.style.pointerEvents="",F.style.pointerEvents=""}}}},[o,r,y,i,m,b,V]),Bn(()=>{r||(p.current=void 0,x.current=!1,N(),_())},[r,N,_]),f.useEffect(()=>()=>{N(),dn(j),dn(T),_()},[o,i.domReference,N,_]);const B=f.useMemo(()=>{function C(L){p.current=L.pointerType}return{onPointerDown:C,onPointerEnter:C,onMouseMove(L){const{nativeEvent:F}=L;function H(){!O.current&&!A.current&&n(!0,F,"hover")}d&&!ya(p.current)||r||Xs(w.current)===0||x.current&&L.movementX**2+L.movementY**2<2||(dn(T),p.current==="touch"?H():(x.current=!0,T.current=window.setTimeout(H,Xs(w.current))))}}},[d,n,r,A,w]);return f.useMemo(()=>o?{reference:B}:{},[o,B])}function Qs(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&us(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function pp(e){return"composedPath"in e?e.composedPath()[0]:e.target}const yp=f.createContext(null),Ui=_s("portal");function bp(e){e===void 0&&(e={});const{id:t,root:r}=e,n=Xd(),s=hp(),[a,i]=f.useState(null),o=f.useRef(null);return Bn(()=>()=>{a==null||a.remove(),queueMicrotask(()=>{o.current=null})},[a]),Bn(()=>{if(!n||o.current)return;const l=t?document.getElementById(t):null;if(!l)return;const u=document.createElement("div");u.id=n,u.setAttribute(Ui,""),l.appendChild(u),o.current=u,i(u)},[t,n]),Bn(()=>{if(r===null||!n||o.current)return;let l=r||(s==null?void 0:s.portalNode);l&&!Ie(l)&&(l=l.current),l=l||document.body;let u=null;t&&(u=document.createElement("div"),u.id=t,l.appendChild(u));const d=document.createElement("div");d.id=n,d.setAttribute(Ui,""),l=u||l,l.appendChild(d),o.current=d,i(d)},[t,r,n,s]),a}const hp=()=>f.useContext(yp),Ip={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},wp={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Hi=e=>{var t,r;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(r=e==null?void 0:e.outsidePress)!=null?r:!0}};function Ap(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,elements:s,dataRef:a}=e,{enabled:i=!0,escapeKey:o=!0,outsidePress:l=!0,outsidePressEvent:u="pointerdown",referencePress:d=!1,referencePressEvent:g="pointerdown",ancestorScroll:c=!1,bubbles:m,capture:y}=t,b=Wa(),I=Fn(typeof l=="function"?l:()=>!1),A=typeof l=="function"?I:l,w=f.useRef(!1),p=f.useRef(!1),{escapeKey:j,outsidePress:h}=Hi(m),{escapeKey:T,outsidePress:O}=Hi(y),R=f.useRef(!1),P=Fn(S=>{var B;if(!r||!i||!o||S.key!=="Escape"||R.current)return;const C=(B=a.current.floatingContext)==null?void 0:B.nodeId,L=b?zs(b.nodesRef.current,C):[];if(!j&&(S.stopPropagation(),L.length>0)){let F=!0;if(L.forEach(H=>{var X;if((X=H.context)!=null&&X.open&&!H.context.dataRef.current.__escapeKeyBubbles){F=!1;return}}),!F)return}n(!1,sp(S)?S.nativeEvent:S,"escape-key")}),x=Fn(S=>{var B;const C=()=>{var L;P(S),(L=Ar(S))==null||L.removeEventListener("keydown",C)};(B=Ar(S))==null||B.addEventListener("keydown",C)}),V=Fn(S=>{var B;const C=w.current;w.current=!1;const L=p.current;if(p.current=!1,u==="click"&&L||C||typeof A=="function"&&!A(S))return;const F=Ar(S),H="["+_s("inert")+"]",X=or(s.floating).querySelectorAll(H);let J=Ie(F)?F:null;for(;J&&!Ln(J);){const G=Kn(J);if(Ln(G)||!Ie(G))break;J=G}if(X.length&&Ie(F)&&!np(F)&&!it(F,s.floating)&&Array.from(X).every(G=>!it(J,G)))return;if(on(F)&&_){const G=Ln(F),ne=cn(F),re=/auto|scroll/,le=G||re.test(ne.overflowX),Be=G||re.test(ne.overflowY),Ce=le&&F.clientWidth>0&&F.scrollWidth>F.clientWidth,Ke=Be&&F.clientHeight>0&&F.scrollHeight>F.clientHeight,Dn=ne.direction==="rtl",ln=Ke&&(Dn?S.offsetX<=F.offsetWidth-F.clientWidth:S.offsetX>F.clientWidth),kn=Ce&&S.offsetY>F.clientHeight;if(ln||kn)return}const ae=(B=a.current.floatingContext)==null?void 0:B.nodeId,Fe=b&&zs(b.nodesRef.current,ae).some(G=>{var ne;return Ws(S,(ne=G.context)==null?void 0:ne.elements.floating)});if(Ws(S,s.floating)||Ws(S,s.domReference)||Fe)return;const ee=b?zs(b.nodesRef.current,ae):[];if(ee.length>0){let G=!0;if(ee.forEach(ne=>{var re;if((re=ne.context)!=null&&re.open&&!ne.context.dataRef.current.__outsidePressBubbles){G=!1;return}}),!G)return}n(!1,S,"outside-press")}),M=Fn(S=>{var B;const C=()=>{var L;V(S),(L=Ar(S))==null||L.removeEventListener(u,C)};(B=Ar(S))==null||B.addEventListener(u,C)});f.useEffect(()=>{if(!r||!i)return;a.current.__escapeKeyBubbles=j,a.current.__outsidePressBubbles=h;let S=-1;function B(X){n(!1,X,"ancestor-scroll")}function C(){window.clearTimeout(S),R.current=!0}function L(){S=window.setTimeout(()=>{R.current=!1},Rs()?5:0)}const F=or(s.floating);o&&(F.addEventListener("keydown",T?x:P,T),F.addEventListener("compositionstart",C),F.addEventListener("compositionend",L)),A&&F.addEventListener(u,O?M:V,O);let H=[];return c&&(Ie(s.domReference)&&(H=Qn(s.domReference)),Ie(s.floating)&&(H=H.concat(Qn(s.floating))),!Ie(s.reference)&&s.reference&&s.reference.contextElement&&(H=H.concat(Qn(s.reference.contextElement)))),H=H.filter(X=>{var J;return X!==((J=F.defaultView)==null?void 0:J.visualViewport)}),H.forEach(X=>{X.addEventListener("scroll",B,{passive:!0})}),()=>{o&&(F.removeEventListener("keydown",T?x:P,T),F.removeEventListener("compositionstart",C),F.removeEventListener("compositionend",L)),A&&F.removeEventListener(u,O?M:V,O),H.forEach(X=>{X.removeEventListener("scroll",B)}),window.clearTimeout(S)}},[a,s,o,A,u,r,n,c,i,j,h,P,T,x,V,O,M]),f.useEffect(()=>{w.current=!1},[A,u]);const N=f.useMemo(()=>({onKeyDown:P,...d&&{[Ip[g]]:S=>{n(!1,S.nativeEvent,"reference-press")},...g!=="click"&&{onClick(S){n(!1,S.nativeEvent,"reference-press")}}}}),[P,n,d,g]),_=f.useMemo(()=>({onKeyDown:P,onMouseDown(){p.current=!0},onMouseUp(){p.current=!0},[wp[u]]:()=>{w.current=!0}}),[P,u]);return f.useMemo(()=>i?{reference:N,floating:_}:{},[i,N,_])}function jp(e){const{open:t=!1,onOpenChange:r,elements:n}=e,s=Xd(),a=f.useRef({}),[i]=f.useState(()=>fp()),o=Qd()!=null,[l,u]=f.useState(n.reference),d=Fn((m,y,b)=>{a.current.openEvent=m?y:void 0,i.emit("openchange",{open:m,event:y,reason:b,nested:o}),r==null||r(m,y,b)}),g=f.useMemo(()=>({setPositionReference:u}),[]),c=f.useMemo(()=>({reference:l||n.reference||null,floating:n.floating||null,domReference:n.reference}),[l,n.reference,n.floating]);return f.useMemo(()=>({dataRef:a,open:t,onOpenChange:d,elements:c,events:i,floatingId:s,refs:g}),[t,d,c,i,s,g])}function Zd(e){e===void 0&&(e={});const{nodeId:t}=e,r=jp({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||r,s=n.elements,[a,i]=f.useState(null),[o,l]=f.useState(null),d=(s==null?void 0:s.domReference)||a,g=f.useRef(null),c=Wa();Bn(()=>{d&&(g.current=d)},[d]);const m=mk({...e,elements:{...s,...o&&{reference:o}}}),y=f.useCallback(p=>{const j=Ie(p)?{getBoundingClientRect:()=>p.getBoundingClientRect(),getClientRects:()=>p.getClientRects(),contextElement:p}:p;l(j),m.refs.setReference(j)},[m.refs]),b=f.useCallback(p=>{(Ie(p)||p===null)&&(g.current=p,i(p)),(Ie(m.refs.reference.current)||m.refs.reference.current===null||p!==null&&!Ie(p))&&m.refs.setReference(p)},[m.refs]),I=f.useMemo(()=>({...m.refs,setReference:b,setPositionReference:y,domReference:g}),[m.refs,b,y]),A=f.useMemo(()=>({...m.elements,domReference:d}),[m.elements,d]),w=f.useMemo(()=>({...m,...n,refs:I,elements:A,nodeId:t}),[m,I,A,t,n]);return Bn(()=>{n.dataRef.current.floatingContext=w;const p=c==null?void 0:c.nodesRef.current.find(j=>j.id===t);p&&(p.context=w)}),f.useMemo(()=>({...m,context:w,refs:I,elements:A}),[m,I,A,w])}function Zs(){return Qv()&&Xv()}function Ep(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,events:s,dataRef:a,elements:i}=e,{enabled:o=!0,visibleOnly:l=!0}=t,u=f.useRef(!1),d=f.useRef(-1),g=f.useRef(!0);f.useEffect(()=>{if(!o)return;const m=rn(i.domReference);function y(){!r&&on(i.domReference)&&i.domReference===Vi(or(i.domReference))&&(u.current=!0)}function b(){g.current=!0}function I(){g.current=!1}return m.addEventListener("blur",y),Zs()&&(m.addEventListener("keydown",b,!0),m.addEventListener("pointerdown",I,!0)),()=>{m.removeEventListener("blur",y),Zs()&&(m.removeEventListener("keydown",b,!0),m.removeEventListener("pointerdown",I,!0))}},[i.domReference,r,o]),f.useEffect(()=>{if(!o)return;function m(y){let{reason:b}=y;(b==="reference-press"||b==="escape-key")&&(u.current=!0)}return s.on("openchange",m),()=>{s.off("openchange",m)}},[s,o]),f.useEffect(()=>()=>{dn(d)},[]);const c=f.useMemo(()=>({onMouseLeave(){u.current=!1},onFocus(m){if(u.current)return;const y=Ar(m.nativeEvent);if(l&&Ie(y)){if(Zs()&&!m.relatedTarget){if(!g.current&&!rp(y))return}else if(!tp(y))return}n(!0,m.nativeEvent,"focus")},onBlur(m){u.current=!1;const y=m.relatedTarget,b=m.nativeEvent,I=Ie(y)&&y.hasAttribute(_s("focus-guard"))&&y.getAttribute("data-type")==="outside";d.current=window.setTimeout(()=>{var A;const w=Vi(i.domReference?i.domReference.ownerDocument:document);!y&&w===i.domReference||it((A=a.current.floatingContext)==null?void 0:A.refs.floating.current,w)||it(i.domReference,w)||I||n(!1,b,"focus")})}}),[a,i.domReference,n,l]);return f.useMemo(()=>o?{reference:c}:{},[o,c])}function ea(e,t,r){const n=new Map,s=r==="item";let a=e;if(s&&e){const{[Li]:i,[Bi]:o,...l}=e;a=l}return{...r==="floating"&&{tabIndex:-1,[lp]:""},...a,...t.map(i=>{const o=i?i[r]:null;return typeof o=="function"?e?o(e):null:o}).concat(e).reduce((i,o)=>(o&&Object.entries(o).forEach(l=>{let[u,d]=l;if(!(s&&[Li,Bi].includes(u)))if(u.indexOf("on")===0){if(n.has(u)||n.set(u,[]),typeof d=="function"){var g;(g=n.get(u))==null||g.push(d),i[u]=function(){for(var c,m=arguments.length,y=new Array(m),b=0;b<m;b++)y[b]=arguments[b];return(c=n.get(u))==null?void 0:c.map(I=>I(...y)).find(I=>I!==void 0)}}}else i[u]=d}),i),{})}}function Op(e){e===void 0&&(e=[]);const t=e.map(o=>o==null?void 0:o.reference),r=e.map(o=>o==null?void 0:o.floating),n=e.map(o=>o==null?void 0:o.item),s=f.useCallback(o=>ea(o,e,"reference"),t),a=f.useCallback(o=>ea(o,e,"floating"),r),i=f.useCallback(o=>ea(o,e,"item"),n);return f.useMemo(()=>({getReferenceProps:s,getFloatingProps:a,getItemProps:i}),[s,a,i])}function Tp(e,t,r){r===void 0&&(r=!0);let n=e.filter(a=>{var i;return a.parentId===t&&((i=a.context)==null?void 0:i.open)}),s=n;for(;s.length;)s=r?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(o=>{var l;return a.parentId===o.id&&((l=a.context)==null?void 0:l.open)})}):e,n=n.concat(s);return n}function Yi(e,t){const[r,n]=e;let s=!1;const a=t.length;for(let i=0,o=a-1;i<a;o=i++){const[l,u]=t[i]||[0,0],[d,g]=t[o]||[0,0];u>=n!=g>=n&&r<=(d-l)*(n-u)/(g-u)+l&&(s=!s)}return s}function Np(e,t){return e[0]>=t.x&&e[0]<=t.x+t.width&&e[1]>=t.y&&e[1]<=t.y+t.height}function Rp(e){e===void 0&&(e={});const{buffer:t=.5,blockPointerEvents:r=!1,requireIntent:n=!0}=e;let s,a=!1,i=null,o=null,l=performance.now();function u(g,c){const m=performance.now(),y=m-l;if(i===null||o===null||y===0)return i=g,o=c,l=m,null;const b=g-i,I=c-o,w=Math.sqrt(b*b+I*I)/y;return i=g,o=c,l=m,w}const d=g=>{let{x:c,y:m,placement:y,elements:b,onClose:I,nodeId:A,tree:w}=g;return function(j){function h(){clearTimeout(s),I()}if(clearTimeout(s),!b.domReference||!b.floating||y==null||c==null||m==null)return;const{clientX:T,clientY:O}=j,R=[T,O],P=pp(j),x=j.type==="mouseleave",V=Qs(b.floating,P),M=Qs(b.domReference,P),N=b.domReference.getBoundingClientRect(),_=b.floating.getBoundingClientRect(),S=y.split("-")[0],B=c>_.right-_.width/2,C=m>_.bottom-_.height/2,L=Np(R,N),F=_.width>N.width,H=_.height>N.height,X=(F?N:_).left,J=(F?N:_).right,ae=(H?N:_).top,Fe=(H?N:_).bottom;if(V&&(a=!0,!x))return;if(M&&(a=!1),M&&!x){a=!0;return}if(x&&Ie(j.relatedTarget)&&Qs(b.floating,j.relatedTarget)||w&&Tp(w.nodesRef.current,A).some(ne=>{let{context:re}=ne;return re==null?void 0:re.open}))return;if(S==="top"&&m>=N.bottom-1||S==="bottom"&&m<=N.top+1||S==="left"&&c>=N.right-1||S==="right"&&c<=N.left+1)return h();let ee=[];switch(S){case"top":ee=[[X,N.top+1],[X,_.bottom-1],[J,_.bottom-1],[J,N.top+1]];break;case"bottom":ee=[[X,_.top+1],[X,N.bottom-1],[J,N.bottom-1],[J,_.top+1]];break;case"left":ee=[[_.right-1,Fe],[_.right-1,ae],[N.left+1,ae],[N.left+1,Fe]];break;case"right":ee=[[N.right-1,Fe],[N.right-1,ae],[_.left+1,ae],[_.left+1,Fe]];break}function G(ne){let[re,le]=ne;switch(S){case"top":{const Be=[F?re+t/2:B?re+t*4:re-t*4,le+t+1],Ce=[F?re-t/2:B?re+t*4:re-t*4,le+t+1],Ke=[[_.left,B||F?_.bottom-t:_.top],[_.right,B?F?_.bottom-t:_.top:_.bottom-t]];return[Be,Ce,...Ke]}case"bottom":{const Be=[F?re+t/2:B?re+t*4:re-t*4,le-t],Ce=[F?re-t/2:B?re+t*4:re-t*4,le-t],Ke=[[_.left,B||F?_.top+t:_.bottom],[_.right,B?F?_.top+t:_.bottom:_.top+t]];return[Be,Ce,...Ke]}case"left":{const Be=[re+t+1,H?le+t/2:C?le+t*4:le-t*4],Ce=[re+t+1,H?le-t/2:C?le+t*4:le-t*4];return[...[[C||H?_.right-t:_.left,_.top],[C?H?_.right-t:_.left:_.right-t,_.bottom]],Be,Ce]}case"right":{const Be=[re-t,H?le+t/2:C?le+t*4:le-t*4],Ce=[re-t,H?le-t/2:C?le+t*4:le-t*4],Ke=[[C||H?_.left+t:_.right,_.top],[C?H?_.left+t:_.right:_.left+t,_.bottom]];return[Be,Ce,...Ke]}}}if(!Yi([T,O],ee)){if(a&&!L)return h();if(!x&&n){const ne=u(j.clientX,j.clientY);if(ne!==null&&ne<.1)return h()}Yi([T,O],G([c,m]))?!a&&n&&(s=window.setTimeout(h,40)):h()}}};return d.__options={blockPointerEvents:r},d}const Ms=()=>{const{cn:e}=te();return v.createElement(ad,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},eu=()=>{const{cn:e}=te();return v.createElement(ad,{title:Un("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},ks=f.createContext(null),Cr=(e,t)=>{var r,n,s;const{size:a,error:i,errorId:o}=e,l=f.useContext(ks),u=In(),d=(r=e.id)!==null&&r!==void 0?r:`${t}-${u}`,g=o??`${t}-error-${u}`,c=`${t}-description-${u}`,m=(l==null?void 0:l.disabled)||e.disabled,y=((l==null?void 0:l.readOnly)||e.readOnly)&&!m||void 0,b=!m&&!y&&!!(i||l!=null&&l.error),I=!m&&!y&&!!i&&typeof i!="boolean",A=Object.assign({},b?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:I,hasError:b,errorId:g,inputDescriptionId:c,size:(n=a??(l==null?void 0:l.size))!==null&&n!==void 0?n:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:d},A),{"aria-describedby":gt(e["aria-describedby"],{[c]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[g]:I,[(s=l==null?void 0:l.errorId)!==null&&s!==void 0?s:""]:b&&!!(l!=null&&l.error)})||void 0,disabled:m})}},nu={global:{dateLocale:fd,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},ru={global:{dateLocale:kd,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},tu=(e="nb")=>{switch(e){case"nn":return kd;case"en":return fd;default:return cd}},su=e=>{switch(e){case"nn":return ru.DatePicker;case"en":case"en-GB":return nu.DatePicker;default:return}},Pp=e=>{switch(e){case"nn":return ru.global;case"en":case"en-GB":return nu.global;default:return}},[au,Ds]=ws();var qp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const[_p,za]=ws({errorMessage:"useDateInputContext must be used with DateInputContext"}),iu=f.forwardRef((e,t)=>{const{className:r,hideLabel:n=!1,label:s,description:a,variant:i="datepicker",setAnchorRef:o}=e,l=qp(e,["className","hideLabel","label","description","variant","setAnchorRef"]),u=f.useRef(null),d=Ds().translate,{cn:g}=te(),c=i==="datepicker",m={prefix:c?"datepicker-input":"monthpicker-input",iconTitle:{open:c?"openDatePicker":"openMonthPicker",close:c?"closeDatePicker":"closeMonthPicker"}},y=za(),{inputProps:b,size:I="medium",inputDescriptionId:A,errorId:w,showErrorMsg:p,hasError:j,readOnly:h}=Cr(e,m.prefix);return v.createElement("div",{className:g(r,"navds-form-field",`navds-form-field--${I}`,"navds-date__field",{"navds-text-field--error":j,"navds-date__field--error":j,"navds-form-field--disabled":!!b.disabled,"navds-text-field--disabled":!!b.disabled,"navds-form-field--readonly":h,"navds-text-field--readonly":h,"navds-date__field--readonly":h})},v.createElement(Ae,{htmlFor:b.id,size:I,className:g("navds-form-field__label",{"navds-sr-only":n})},h&&v.createElement(Ms,null),s),!!a&&v.createElement(se,{as:"div",className:g("navds-form-field__description",{"navds-sr-only":n}),id:A,size:I},a),v.createElement("div",{className:g("navds-date__field-wrapper")},v.createElement("input",Object.assign({ref:t},Qe(l,["error","errorId","size"]),b,{autoComplete:"off","aria-controls":y!=null&&y.open?y.ariaId:void 0,readOnly:h,className:g("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${I}`),size:c?11:14})),v.createElement("button",{disabled:b.disabled||h,tabIndex:h||y!=null&&y.open?-1:0,onClick:()=>{y==null||y.onOpen(),o==null||o(u.current)},type:"button",className:g("navds-date__field-button"),ref:u},v.createElement($g,{title:d(m.iconTitle[y!=null&&y.open?"close":"open"])}))),v.createElement("div",{className:g("navds-form-field__error"),id:w,"aria-relevant":"additions removals","aria-live":"polite"},p&&v.createElement(ft,{size:I,showIcon:!0},e.error)))}),Mp=f.forwardRef((e,t)=>v.createElement(iu,Object.assign({},e,{ref:t})));f.forwardRef((e,t)=>v.createElement(iu,Object.assign({},e,{variant:"monthpicker",ref:t})));var Dp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Sp=f.forwardRef((e,t)=>{var{className:r}=e,n=Dp(e,["className"]);const{cn:s}=te();return v.createElement("div",Object.assign({},n,{ref:t,className:s("navds-modal__body",r)}))});var xp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Fp=f.forwardRef((e,t)=>{var{className:r}=e,n=xp(e,["className"]);const{cn:s}=te();return v.createElement("div",Object.assign({},n,{ref:t,className:s("navds-modal__footer",r)}))});var Vp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ou=f.forwardRef((e,t)=>{var{children:r,className:n,closeButton:s=!0}=e,a=Vp(e,["children","className","closeButton"]);const{cn:i}=te(),o=ct(),l=Un("global");return v.createElement("div",Object.assign({},a,{ref:t,className:i("navds-modal__header",n)}),o.closeHandler&&s&&v.createElement(Pe,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:u=>{["Enter"," "].includes(u.key)&&u.repeat&&u.preventDefault()},onClick:o.closeHandler,icon:v.createElement(od,{title:l("close")})}),r)}),$i=({clientX:e,clientY:t},{left:r,top:n,right:s,bottom:a})=>!(e<r||t<n||e>s||t>a);function Lp(e,t,r){if(!(t&&t.closeButton===!1))return r?()=>{var n;return r()!==!1&&((n=e.current)===null||n===void 0?void 0:n.close())}:()=>{var n;return(n=e.current)===null||n===void 0?void 0:n.close()}}const qt="navds-modal__document-body";function Bp(e,t,r){v.useEffect(()=>{if(r||!e.current||!t)return;e.current.open&&document.body.classList.add(qt);const n=new MutationObserver(()=>{var s;!((s=e.current)===null||s===void 0)&&s.open?document.body.classList.add(qt):document.body.classList.remove(qt)});return n.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{n.disconnect(),document.body.classList.remove(qt)}},[e,t,r])}const Er=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function lu(e,t){var r="on"+t.type.toLowerCase();return typeof e[r]=="function"&&e[r](t),e.dispatchEvent(t)}function Zr(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function du(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Cp(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return!0;return!1}function na(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function uu(e){var t=["button","input","keygen","select","textarea"],r=t.map(function(i){return i+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=e.querySelector(r.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var s=e.querySelectorAll("*"),a=0;a<s.length&&!(s[a].tagName&&s[a].shadowRoot&&(n=uu(s[a].shadowRoot),n));a++);return n}function Wi(e){return e.isConnected||document.body.contains(e)}function gu(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var r=de.formSubmitter;if(!r){var n=e.target,s="getRootNode"in n&&n.getRootNode()||document;r=s.activeElement}return!r||r.form!==t?null:r}function Kp(e){if(!e.defaultPrevented){var t=e.target,r=de.imagemapUseValue,n=gu(e);r===null&&n&&(r=n.value);var s=Zr(t);if(s){var a=n&&n.getAttribute("formmethod")||t.getAttribute("method");a==="dialog"&&(e.preventDefault(),r!=null?s.close(r):s.close())}}}function mu(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Kp,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,n=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),s,a=function(i){if(i.target===e){var o="DOMNodeRemoved";r|=i.type.substr(0,o.length)===o,window.clearTimeout(s),s=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,a)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}mu.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Wi(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),de.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=uu(this.dialog_)),du(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Wi(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!de.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,de.needsCentering(this.dialog_)?(de.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});lu(this.dialog_,t)}};var de={};de.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,r=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,r)+"px"};de.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var r=document.styleSheets[t],n=null;try{n=r.cssRules}catch{}if(n)for(var s=0;s<n.length;++s){var a=n[s],i=null;try{i=document.querySelectorAll(a.selectorText)}catch{}if(!(!i||!Cp(i,e))){var o=a.style.getPropertyValue("top"),l=a.style.getPropertyValue("bottom");if(o&&o!=="auto"||l&&l!=="auto")return!0}}}return!1};de.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!de.isInlinePositionSetByStylesheet(e)};de.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new mu(e)};de.registerDialog=function(e){e.showModal||de.forceRegisterDialog(e)};de.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var r=[];t.forEach(function(n){for(var s=0,a;a=n.removedNodes[s];++s)a instanceof Element&&(a.localName==="dialog"&&r.push(a),r=r.concat(a.querySelectorAll("dialog")))}),r.length&&e(r)}))};de.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};de.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};de.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,r;r=this.pendingDialogStack[t];++t)r.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];if(n){var s=n.dialog.parentNode||document.body;s.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};de.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Zr(e);){for(var t=0,r;r=this.pendingDialogStack[t];++t)if(r.dialog===e)return t===0;e=e.parentElement}return!1};de.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),du(t),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],n=r.dialog,s=n.compareDocumentPosition(t);return s&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};de.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&lu(r.dialog,t)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};de.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};de.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};de.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Er&&(de.dm=new de.DialogManager,de.formSubmitter=null,de.imagemapUseValue=null);if(Er){var zi=document.createElement("form");if(zi.setAttribute("method","dialog"),zi.method!=="dialog"){var Ir=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Ir){var Gp=Ir.get;Ir.get=function(){return na(this)?"dialog":Gp.call(this)};var Up=Ir.set;Ir.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Up.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Ir)}}document.addEventListener("click",function(e){if(de.formSubmitter=null,de.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var r=e.composedPath();t=r.shift()||t}if(!(!t||!na(t.form))){var n=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!n){if(!(t.localName==="input"&&t.type==="image"))return;de.imagemapUseValue=e.offsetX+","+e.offsetY}var s=Zr(t);s&&(de.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,r=Zr(t);if(!r){var n=gu(e),s=n&&n.getAttribute("formmethod")||t.getAttribute("method");s==="dialog"&&e.preventDefault()}});var Hp=HTMLFormElement.prototype.submit,Yp=function(){if(!na(this))return Hp.call(this);var e=Zr(this);e&&e.close()};HTMLFormElement.prototype.submit=Yp}var $p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const qn=f.forwardRef((e,t)=>{var r,n,{header:s,children:a,open:i,onBeforeClose:o,onCancel:l,closeOnBackdropClick:u,width:d,placement:g,portal:c,className:m,"aria-labelledby":y,style:b,onClick:I,onMouseDown:A}=e,w=$p(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:p}=te(),j=f.useRef(p("navds-modal--polyfilled")),h=f.useRef(null),T=Fr(h,t),O=In(),R=(r=Os())===null||r===void 0?void 0:r.rootElement,P=bp({root:R}),x=za(!1),V=ct(!1)!==void 0;V&&!x&&console.error("Modals should not be nested"),f.useEffect(()=>{Er&&h.current&&P&&(de.registerDialog(h.current),h.current.classList.add(j.current)),h.current&&P&&(h.current.autofocus=!0)},[P]),f.useEffect(()=>{h.current&&P&&i!==void 0&&(i&&!h.current.open?h.current.showModal():!i&&h.current.open&&h.current.close())},[P,i]),Bp(h,P,V);const M=typeof d=="string"&&["small","medium"].includes(d),N=p("navds-modal",m,{[j.current]:Er,"navds-modal--autowidth":!d,[`navds-modal--${d}`]:M,"navds-modal--top":g==="top"&&!Er}),_=Object.assign(Object.assign({},b),M?{}:{width:d}),S=f.useRef({clientX:0,clientY:0}),B=J=>{S.current=J},C=u&&!Er,L=J=>{if(J.target!==h.current)return;const ae=h.current.getBoundingClientRect();$i(S.current,ae)||$i(J,ae)||o!==void 0&&o()===!1||h.current.close()},F=J=>{o&&o()===!1&&J.preventDefault()},H=!y&&!w["aria-label"]&&s?O:y,X=v.createElement("dialog",Object.assign({},w,{ref:T,className:N,style:_,onCancel:Or(l,F),onClick:C?Or(I,L):I,onMouseDown:C?Or(A,B):A,"aria-labelledby":H}),v.createElement(Om,{closeHandler:Lp(h,s,o),ref:h},s&&v.createElement(ou,null,s.label&&v.createElement(qr,{className:p("navds-modal__label")},s.label),v.createElement(As,{size:(n=s.size)!==null&&n!==void 0?n:"medium",level:"1",id:O},s.icon&&v.createElement("span",{className:p("navds-modal__header-icon")},s.icon),s.heading)),a));return c?P?Pa.createPortal(X,P):null:X});qn.Header=ou;qn.Body=Sp;qn.Footer=Fp;var Wp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const zp=f.forwardRef((e,t)=>{var{className:r}=e,n=Wp(e,["className"]);const{cn:s}=te();return v.createElement("div",Object.assign({},n,{ref:t,className:s("navds-popover__content",r)}))});var Jp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Sr=f.forwardRef((e,t)=>{var{className:r,children:n,anchorEl:s,arrow:a=!0,open:i,onClose:o,placement:l="top",offset:u,strategy:d,flip:g=!0}=e,c=Jp(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:m}=te(),y=f.useRef(null),b=ct(!1)!==void 0,I=za(!1),A=d??(b?"fixed":"absolute"),w=I?!1:g,p=mt(!1),{update:j,refs:h,placement:T,middlewareData:{arrow:{x:O,y:R}={}},floatingStyles:P}=Zd({strategy:A,placement:l,open:i,middleware:[Pd(u??(p?8:a?16:4)),w&&_d({padding:5,fallbackPlacements:["bottom","top"]}),qd({padding:12}),Md({element:y,padding:8})]});_r(()=>{h.setReference(s)},[s]);const x=Fr(h.setFloating,t);_r(()=>{if(!h.reference.current||!h.floating.current||!i)return;const M=ka(h.reference.current,h.floating.current,j);return()=>M()},[h.floating,h.reference,j,i,s]);const V={top:"bottom",right:"left",bottom:"top",left:"right"}[T.split("-")[0]];return v.createElement(Pc,{asChild:!0,safeZone:{anchor:s,dismissable:h.floating.current},onDismiss:()=>i&&(o==null?void 0:o()),enabled:i},v.createElement("div",Object.assign({ref:x},c,{className:m("navds-popover",r,{"navds-popover--hidden":!i||!s}),style:Object.assign(Object.assign({},c.style),P),"data-placement":T,"aria-hidden":!i||!s}),n,a&&!p&&v.createElement("div",{ref:M=>{y.current=M},style:Object.assign(Object.assign(Object.assign({},O!=null?{left:O}:{}),R!=null?{top:R}:{}),V?{[V]:"-0.5rem"}:{}),className:m("navds-popover__arrow")})))});Sr.Content=zp;const Xp={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},Qp=({open:e,children:t,onClose:r,anchor:n,locale:s,translate:a,variant:i,popoverProps:o})=>{const l=Un("global",Pp(s)),{cn:u}=te(),d=f.useRef(null),g=ct(!1)!==void 0;return Nm("screen and (min-width: 768px)",!0)&&!g?v.createElement(Sr,Object.assign({arrow:!1,anchorEl:n,open:e,onClose:r,placement:"bottom-start",role:"dialog",className:u("navds-date__popover",{"navds-date":i==="month"}),flip:!1},o),t):v.createElement(qn,{ref:d,open:e,onClose:m=>{m.stopPropagation(),r()},"aria-label":a(Xp[i]),className:u("navds-date__modal",{"navds-date__nested-modal":g,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},v.createElement("div",{className:u("navds-date__modal-body")},t,v.createElement(Pe,{variant:"tertiary",onClick:()=>{var m;return(m=d==null?void 0:d.current)===null||m===void 0?void 0:m.close()},size:"small",type:"button"},l("close"))))};function fu(e){return!!(e&&typeof e=="object"&&"from"in e)}const ra={},Xr={};function et(e,t){try{const n=(ra[e]||(ra[e]=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format))(t).split("GMT")[1]||"";return n in Xr?Xr[n]:Ji(n,n.split(":"))}catch{if(e in Xr)return Xr[e];const r=e==null?void 0:e.match(Zp);return r?Ji(e,r.slice(1)):NaN}}const Zp=/([+-]\d\d):?(\d\d)?/;function Ji(e,t){const r=+t[0],n=+(t[1]||0);return Xr[e]=r>0?r*60+n:r*60-n}class Nn extends Date{constructor(...t){super(),t.length>1&&typeof t[t.length-1]=="string"&&(this.timeZone=t.pop()),this.internal=new Date,isNaN(et(this.timeZone,this))?this.setTime(NaN):t.length?typeof t[0]=="number"&&(t.length===1||t.length===2&&typeof t[1]!="number")?this.setTime(t[0]):typeof t[0]=="string"?this.setTime(+new Date(t[0])):t[0]instanceof Date?this.setTime(+t[0]):(this.setTime(+new Date(...t)),cu(this),ba(this)):this.setTime(Date.now())}static tz(t,...r){return r.length?new Nn(...r,t):new Nn(Date.now(),t)}withTimeZone(t){return new Nn(+this,t)}getTimezoneOffset(){return-et(this.timeZone,this)}setTime(t){return Date.prototype.setTime.apply(this,arguments),ba(this),+this}[Symbol.for("constructDateFrom")](t){return new Nn(+new Date(t),this.timeZone)}}const Xi=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!Xi.test(e))return;const t=e.replace(Xi,"$1UTC");Nn.prototype[t]&&(e.startsWith("get")?Nn.prototype[e]=function(){return this.internal[t]()}:(Nn.prototype[e]=function(){return Date.prototype[t].apply(this.internal,arguments),ey(this),+this},Nn.prototype[t]=function(){return Date.prototype[t].apply(this,arguments),ba(this),+this}))});function ba(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function ey(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),cu(e)}function cu(e){const t=et(e.timeZone,e),r=new Date(+e);r.setUTCHours(r.getUTCHours()-1);const n=-new Date(+e).getTimezoneOffset(),s=-new Date(+r).getTimezoneOffset(),a=n-s,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();a&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+a);const o=n-t;o&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+o);const l=et(e.timeZone,e),d=-new Date(+e).getTimezoneOffset()-l,g=l!==t,c=d-o;if(g&&c){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+c);const m=et(e.timeZone,e),y=l-m;y&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+y),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+y))}}class Ye extends Nn{static tz(t,...r){return r.length?new Ye(...r,t):new Ye(Date.now(),t)}toISOString(){const[t,r,n]=this.tzComponents(),s=`${t}${r}:${n}`;return this.internal.toISOString().slice(0,-1)+s}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[t,r,n,s]=this.internal.toUTCString().split(" ");return`${t==null?void 0:t.slice(0,-1)} ${n} ${r} ${s}`}toTimeString(){const t=this.internal.toUTCString().split(" ")[4],[r,n,s]=this.tzComponents();return`${t} GMT${r}${n}${s} (${ny(this.timeZone,this)})`}toLocaleString(t,r){return Date.prototype.toLocaleString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleDateString(t,r){return Date.prototype.toLocaleDateString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleTimeString(t,r){return Date.prototype.toLocaleTimeString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}tzComponents(){const t=this.getTimezoneOffset(),r=t>0?"-":"+",n=String(Math.floor(Math.abs(t)/60)).padStart(2,"0"),s=String(Math.abs(t)%60).padStart(2,"0");return[r,n,s]}withTimeZone(t){return new Ye(+this,t)}[Symbol.for("constructDateFrom")](t){return new Ye(+new Date(t),this.timeZone)}}function ny(e,t){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(t).slice(12)}var Z;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(Z||(Z={}));var Ee;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(Ee||(Ee={}));var bn;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(bn||(bn={}));var sn;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(sn||(sn={}));const Qi=5,ry=4;function ty(e,t){const r=t.startOfMonth(e),n=r.getDay()>0?r.getDay():7,s=t.addDays(e,-n+1),a=t.addDays(s,Qi*7-1);return t.getMonth(e)===t.getMonth(a)?Qi:ry}function ku(e,t){const r=t.startOfMonth(e),n=r.getDay();return n===1?r:n===0?t.addDays(r,-1*6):t.addDays(r,-1*(n-1))}function sy(e,t){const r=ku(e,t),n=ty(e,t);return t.addDays(r,n*7-1)}class Hn{constructor(t,r){this.Date=Date,this.today=()=>{var n;return(n=this.overrides)!=null&&n.today?this.overrides.today():this.options.timeZone?Ye.tz(this.options.timeZone):new this.Date},this.newDate=(n,s,a)=>{var i;return(i=this.overrides)!=null&&i.newDate?this.overrides.newDate(n,s,a):this.options.timeZone?new Ye(n,s,a,this.options.timeZone):new Date(n,s,a)},this.addDays=(n,s)=>{var a;return(a=this.overrides)!=null&&a.addDays?this.overrides.addDays(n,s):bt(n,s)},this.addMonths=(n,s)=>{var a;return(a=this.overrides)!=null&&a.addMonths?this.overrides.addMonths(n,s):Va(n,s)},this.addWeeks=(n,s)=>{var a;return(a=this.overrides)!=null&&a.addWeeks?this.overrides.addWeeks(n,s):Tk(n,s)},this.addYears=(n,s)=>{var a;return(a=this.overrides)!=null&&a.addYears?this.overrides.addYears(n,s):La(n,s)},this.differenceInCalendarDays=(n,s)=>{var a;return(a=this.overrides)!=null&&a.differenceInCalendarDays?this.overrides.differenceInCalendarDays(n,s):Jn(n,s)},this.differenceInCalendarMonths=(n,s)=>{var a;return(a=this.overrides)!=null&&a.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(n,s):qk(n,s)},this.eachMonthOfInterval=n=>{var s;return(s=this.overrides)!=null&&s.eachMonthOfInterval?this.overrides.eachMonthOfInterval(n):Vd(n)},this.endOfBroadcastWeek=n=>{var s;return(s=this.overrides)!=null&&s.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(n):sy(n,this)},this.endOfISOWeek=n=>{var s;return(s=this.overrides)!=null&&s.endOfISOWeek?this.overrides.endOfISOWeek(n):Mk(n)},this.endOfMonth=n=>{var s;return(s=this.overrides)!=null&&s.endOfMonth?this.overrides.endOfMonth(n):Fd(n)},this.endOfWeek=(n,s)=>{var a;return(a=this.overrides)!=null&&a.endOfWeek?this.overrides.endOfWeek(n,s):Ld(n,this.options)},this.endOfYear=n=>{var s;return(s=this.overrides)!=null&&s.endOfYear?this.overrides.endOfYear(n):qs(n)},this.format=(n,s,a)=>{var o;const i=(o=this.overrides)!=null&&o.format?this.overrides.format(n,s,this.options):cr(n,s,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=n=>{var s;return(s=this.overrides)!=null&&s.getISOWeek?this.overrides.getISOWeek(n):Ca(n)},this.getMonth=(n,s)=>{var a;return(a=this.overrides)!=null&&a.getMonth?this.overrides.getMonth(n,this.options):Ua(n,this.options)},this.getYear=(n,s)=>{var a;return(a=this.overrides)!=null&&a.getYear?this.overrides.getYear(n,this.options):Ha(n,this.options)},this.getWeek=(n,s)=>{var a;return(a=this.overrides)!=null&&a.getWeek?this.overrides.getWeek(n,this.options):Ga(n,this.options)},this.isAfter=(n,s)=>{var a;return(a=this.overrides)!=null&&a.isAfter?this.overrides.isAfter(n,s):Gd(n,s)},this.isBefore=(n,s)=>{var a;return(a=this.overrides)!=null&&a.isBefore?this.overrides.isBefore(n,s):It(n,s)},this.isDate=n=>{var s;return(s=this.overrides)!=null&&s.isDate?this.overrides.isDate(n):xd(n)},this.isSameDay=(n,s)=>{var a;return(a=this.overrides)!=null&&a.isSameDay?this.overrides.isSameDay(n,s):Ba(n,s)},this.isSameMonth=(n,s)=>{var a;return(a=this.overrides)!=null&&a.isSameMonth?this.overrides.isSameMonth(n,s):Hv(n,s)},this.isSameYear=(n,s)=>{var a;return(a=this.overrides)!=null&&a.isSameYear?this.overrides.isSameYear(n,s):Wd(n,s)},this.max=n=>{var s;return(s=this.overrides)!=null&&s.max?this.overrides.max(n):Nk(n)},this.min=n=>{var s;return(s=this.overrides)!=null&&s.min?this.overrides.min(n):Rk(n)},this.setMonth=(n,s)=>{var a;return(a=this.overrides)!=null&&a.setMonth?this.overrides.setMonth(n,s):zd(n,s)},this.setYear=(n,s)=>{var a;return(a=this.overrides)!=null&&a.setYear?this.overrides.setYear(n,s):Jd(n,s)},this.startOfBroadcastWeek=(n,s)=>{var a;return(a=this.overrides)!=null&&a.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(n,this):ku(n,this)},this.startOfDay=n=>{var s;return(s=this.overrides)!=null&&s.startOfDay?this.overrides.startOfDay(n):Gn(n)},this.startOfISOWeek=n=>{var s;return(s=this.overrides)!=null&&s.startOfISOWeek?this.overrides.startOfISOWeek(n):mr(n)},this.startOfMonth=n=>{var s;return(s=this.overrides)!=null&&s.startOfMonth?this.overrides.startOfMonth(n):fr(n)},this.startOfWeek=(n,s)=>{var a;return(a=this.overrides)!=null&&a.startOfWeek?this.overrides.startOfWeek(n,this.options):Cn(n,this.options)},this.startOfYear=n=>{var s;return(s=this.overrides)!=null&&s.startOfYear?this.overrides.startOfYear(n):ht(n)},this.options={locale:Es,...t},this.overrides=r}getDigitMap(){const{numerals:t="latn"}=this.options,r=new Intl.NumberFormat("en-US",{numberingSystem:t}),n={};for(let s=0;s<10;s++)n[s.toString()]=r.format(s);return n}replaceDigits(t){const r=this.getDigitMap();return t.replace(/\d/g,n=>r[n]||n)}formatNumber(t){return this.replaceDigits(t.toString())}}const Mn=new Hn;class vu{constructor(t,r,n=Mn){this.date=t,this.displayMonth=r,this.outside=!!(r&&!n.isSameMonth(t,r)),this.dateLib=n}isEqualTo(t){return this.dateLib.isSameDay(t.date,this.date)&&this.dateLib.isSameMonth(t.displayMonth,this.displayMonth)}}class ay{constructor(t,r){this.date=t,this.weeks=r}}class iy{constructor(t,r){this.days=r,this.weekNumber=t}}function Vn(e,t,r=!1,n=Mn){let{from:s,to:a}=e;const{differenceInCalendarDays:i,isSameDay:o}=n;return s&&a?(i(a,s)<0&&([s,a]=[a,s]),i(t,s)>=(r?1:0)&&i(a,t)>=(r?1:0)):!r&&a?o(a,t):!r&&s?o(s,t):!1}function pu(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Ja(e){return!!(e&&typeof e=="object"&&"from"in e)}function yu(e){return!!(e&&typeof e=="object"&&"after"in e)}function bu(e){return!!(e&&typeof e=="object"&&"before"in e)}function hu(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function Iu(e,t){return Array.isArray(e)&&e.every(t.isDate)}function gn(e,t,r=Mn){const n=Array.isArray(t)?t:[t],{isSameDay:s,differenceInCalendarDays:a,isAfter:i}=r;return n.some(o=>{if(typeof o=="boolean")return o;if(r.isDate(o))return s(e,o);if(Iu(o,r))return o.includes(e);if(Ja(o))return Vn(o,e,!1,r);if(hu(o))return Array.isArray(o.dayOfWeek)?o.dayOfWeek.includes(e.getDay()):o.dayOfWeek===e.getDay();if(pu(o)){const l=a(o.before,e),u=a(o.after,e),d=l>0,g=u<0;return i(o.before,o.after)?g&&d:d||g}return yu(o)?a(e,o.after)>0:bu(o)?a(o.before,e)>0:typeof o=="function"?o(e):!1})}function oy(e,t,r){const{disabled:n,hidden:s,modifiers:a,showOutsideDays:i,broadcastCalendar:o,today:l}=t,{isSameDay:u,isSameMonth:d,startOfMonth:g,isBefore:c,endOfMonth:m,isAfter:y}=r,b=t.startMonth&&g(t.startMonth),I=t.endMonth&&m(t.endMonth),A={[Ee.focused]:[],[Ee.outside]:[],[Ee.disabled]:[],[Ee.hidden]:[],[Ee.today]:[]},w={};for(const p of e){const{date:j,displayMonth:h}=p,T=!!(h&&!d(j,h)),O=!!(b&&c(j,b)),R=!!(I&&y(j,I)),P=!!(n&&gn(j,n,r)),x=!!(s&&gn(j,s,r))||O||R||!o&&!i&&T||o&&i===!1&&T,V=u(j,l??r.today());T&&A.outside.push(p),P&&A.disabled.push(p),x&&A.hidden.push(p),V&&A.today.push(p),a&&Object.keys(a).forEach(M=>{const N=a==null?void 0:a[M];N&&gn(j,N,r)&&(w[M]?w[M].push(p):w[M]=[p])})}return p=>{const j={[Ee.focused]:!1,[Ee.disabled]:!1,[Ee.hidden]:!1,[Ee.outside]:!1,[Ee.today]:!1},h={};for(const T in A){const O=A[T];j[T]=O.some(R=>R===p)}for(const T in w)h[T]=w[T].some(O=>O===p);return{...j,...h}}}function ly(e,t,r={}){return Object.entries(e).filter(([,s])=>s===!0).reduce((s,[a])=>(r[a]?s.push(r[a]):t[Ee[a]]?s.push(t[Ee[a]]):t[bn[a]]&&s.push(t[bn[a]]),s),[t[Z.Day]])}function dy(e){return v.createElement("button",{...e})}function uy(e){return v.createElement("span",{...e})}function gy(e){const{size:t=24,orientation:r="left",className:n}=e;return v.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&v.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&v.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&v.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&v.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function my(e){const{day:t,modifiers:r,...n}=e;return v.createElement("td",{...n})}function fy(e){const{day:t,modifiers:r,...n}=e,s=v.useRef(null);return v.useEffect(()=>{var a;r.focused&&((a=s.current)==null||a.focus())},[r.focused]),v.createElement("button",{ref:s,...n})}function cy(e){const{options:t,className:r,components:n,classNames:s,...a}=e,i=[s[Z.Dropdown],r].join(" "),o=t==null?void 0:t.find(({value:l})=>l===a.value);return v.createElement("span",{"data-disabled":a.disabled,className:s[Z.DropdownRoot]},v.createElement(n.Select,{className:i,...a},t==null?void 0:t.map(({value:l,label:u,disabled:d})=>v.createElement(n.Option,{key:l,value:l,disabled:d},u))),v.createElement("span",{className:s[Z.CaptionLabel],"aria-hidden":!0},o==null?void 0:o.label,v.createElement(n.Chevron,{orientation:"down",size:18,className:s[Z.Chevron]})))}function ky(e){return v.createElement("div",{...e})}function vy(e){return v.createElement("div",{...e})}function py(e){const{calendarMonth:t,displayIndex:r,...n}=e;return v.createElement("div",{...n},e.children)}function yy(e){const{calendarMonth:t,displayIndex:r,...n}=e;return v.createElement("div",{...n})}function by(e){return v.createElement("table",{...e})}function hy(e){return v.createElement("div",{...e})}const wu=f.createContext(void 0);function vr(){const e=f.useContext(wu);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function Iy(e){const{components:t}=vr();return v.createElement(t.Dropdown,{...e})}function wy(e){const{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:s,...a}=e,{components:i,classNames:o,labels:{labelPrevious:l,labelNext:u}}=vr(),d=f.useCallback(c=>{s&&(r==null||r(c))},[s,r]),g=f.useCallback(c=>{n&&(t==null||t(c))},[n,t]);return v.createElement("nav",{...a},v.createElement(i.PreviousMonthButton,{type:"button",className:o[Z.PreviousMonthButton],tabIndex:n?void 0:-1,"aria-disabled":n?void 0:!0,"aria-label":l(n),onClick:g},v.createElement(i.Chevron,{disabled:n?void 0:!0,className:o[Z.Chevron],orientation:"left"})),v.createElement(i.NextMonthButton,{type:"button",className:o[Z.NextMonthButton],tabIndex:s?void 0:-1,"aria-disabled":s?void 0:!0,"aria-label":u(s),onClick:d},v.createElement(i.Chevron,{disabled:s?void 0:!0,orientation:"right",className:o[Z.Chevron]})))}function Ay(e){const{components:t}=vr();return v.createElement(t.Button,{...e})}function jy(e){return v.createElement("option",{...e})}function Ey(e){const{components:t}=vr();return v.createElement(t.Button,{...e})}function Oy(e){const{rootRef:t,...r}=e;return v.createElement("div",{...r,ref:t})}function Ty(e){return v.createElement("select",{...e})}function Ny(e){const{week:t,...r}=e;return v.createElement("tr",{...r})}function Ry(e){return v.createElement("th",{...e})}function Py(e){return v.createElement("thead",{"aria-hidden":!0},v.createElement("tr",{...e}))}function qy(e){const{week:t,...r}=e;return v.createElement("th",{...r})}function _y(e){return v.createElement("th",{...e})}function My(e){return v.createElement("tbody",{...e})}function Dy(e){const{components:t}=vr();return v.createElement(t.Dropdown,{...e})}const Sy=Object.freeze(Object.defineProperty({__proto__:null,Button:dy,CaptionLabel:uy,Chevron:gy,Day:my,DayButton:fy,Dropdown:cy,DropdownNav:ky,Footer:vy,Month:py,MonthCaption:yy,MonthGrid:by,Months:hy,MonthsDropdown:Iy,Nav:wy,NextMonthButton:Ay,Option:jy,PreviousMonthButton:Ey,Root:Oy,Select:Ty,Week:Ny,WeekNumber:qy,WeekNumberHeader:_y,Weekday:Ry,Weekdays:Py,Weeks:My,YearsDropdown:Dy},Symbol.toStringTag,{value:"Module"}));function xy(e){return{...Sy,...e}}function Fy(e){const t={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([r,n])=>{r.startsWith("data-")&&(t[r]=n)}),t}function Vy(){const e={};for(const t in Z)e[Z[t]]=`rdp-${Z[t]}`;for(const t in Ee)e[Ee[t]]=`rdp-${Ee[t]}`;for(const t in bn)e[bn[t]]=`rdp-${bn[t]}`;for(const t in sn)e[sn[t]]=`rdp-${sn[t]}`;return e}function Au(e,t,r){return(r??new Hn(t)).format(e,"LLLL y")}const Ly=Au;function By(e,t,r){return(r??new Hn(t)).format(e,"d")}function Cy(e,t=Mn){return t.format(e,"LLLL")}function Ky(e,t=Mn){return e<10?t.formatNumber(`0${e.toLocaleString()}`):t.formatNumber(`${e.toLocaleString()}`)}function Gy(){return""}function Uy(e,t,r){return(r??new Hn(t)).format(e,"cccccc")}function ju(e,t=Mn){return t.format(e,"yyyy")}const Hy=ju,Yy=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:Au,formatDay:By,formatMonthCaption:Ly,formatMonthDropdown:Cy,formatWeekNumber:Ky,formatWeekNumberHeader:Gy,formatWeekdayName:Uy,formatYearCaption:Hy,formatYearDropdown:ju},Symbol.toStringTag,{value:"Module"}));function $y(e){return e!=null&&e.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e!=null&&e.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...Yy,...e}}function Wy(e,t,r,n,s){const{startOfMonth:a,startOfYear:i,endOfYear:o,eachMonthOfInterval:l,getMonth:u}=s;return l({start:i(e),end:o(e)}).map(c=>{const m=n.formatMonthDropdown(c,s),y=u(c),b=t&&c<a(t)||r&&c>a(r)||!1;return{value:y,label:m,disabled:b}})}function zy(e,t={},r={}){let n={...t==null?void 0:t[Z.Day]};return Object.entries(e).filter(([,s])=>s===!0).forEach(([s])=>{n={...n,...r==null?void 0:r[s]}}),n}function Jy(e,t,r){const n=e.today(),s=t?e.startOfISOWeek(n):e.startOfWeek(n),a=[];for(let i=0;i<7;i++){const o=e.addDays(s,i);a.push(o)}return a}function Xy(e,t,r,n){if(!e||!t)return;const{startOfYear:s,endOfYear:a,addYears:i,getYear:o,isBefore:l,isSameYear:u}=n,d=s(e),g=a(t),c=[];let m=d;for(;l(m,g)||u(m,g);)c.push(m),m=i(m,1);return c.map(y=>{const b=r.formatYearDropdown(y,n);return{value:o(y),label:b,disabled:!1}})}function Eu(e,t,r){return(r??new Hn(t)).format(e,"LLLL y")}const Qy=Eu;function Zy(e,t,r,n){let s=(n??new Hn(r)).format(e,"PPPP");return t!=null&&t.today&&(s=`Today, ${s}`),s}function Ou(e,t,r,n){let s=(n??new Hn(r)).format(e,"PPPP");return t.today&&(s=`Today, ${s}`),t.selected&&(s=`${s}, selected`),s}const eb=Ou;function nb(){return""}function rb(e){return"Choose the Month"}function tb(e){return"Go to the Next Month"}function sb(e){return"Go to the Previous Month"}function ab(e,t,r){return(r??new Hn(t)).format(e,"cccc")}function ib(e,t){return`Week ${e}`}function ob(e){return"Week Number"}function lb(e){return"Choose the Year"}const db=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:Qy,labelDay:eb,labelDayButton:Ou,labelGrid:Eu,labelGridcell:Zy,labelMonthDropdown:rb,labelNav:nb,labelNext:tb,labelPrevious:sb,labelWeekNumber:ib,labelWeekNumberHeader:ob,labelWeekday:ab,labelYearDropdown:lb},Symbol.toStringTag,{value:"Module"})),wt=e=>e instanceof HTMLElement?e:null,ta=e=>[...e.querySelectorAll("[data-animated-month]")??[]],ub=e=>wt(e.querySelector("[data-animated-month]")),sa=e=>wt(e.querySelector("[data-animated-caption]")),aa=e=>wt(e.querySelector("[data-animated-weeks]")),gb=e=>wt(e.querySelector("[data-animated-nav]")),mb=e=>wt(e.querySelector("[data-animated-weekdays]"));function fb(e,t,{classNames:r,months:n,focused:s,dateLib:a}){const i=f.useRef(null),o=f.useRef(n),l=f.useRef(!1);f.useLayoutEffect(()=>{const u=o.current;if(o.current=n,!t||!e.current||!(e.current instanceof HTMLElement)||n.length===0||u.length===0||n.length!==u.length)return;const d=a.isSameMonth(n[0].date,u[0].date),g=a.isAfter(n[0].date,u[0].date),c=g?r[sn.caption_after_enter]:r[sn.caption_before_enter],m=g?r[sn.weeks_after_enter]:r[sn.weeks_before_enter],y=i.current,b=e.current.cloneNode(!0);if(b instanceof HTMLElement?(ta(b).forEach(p=>{if(!(p instanceof HTMLElement))return;const j=ub(p);j&&p.contains(j)&&p.removeChild(j);const h=sa(p);h&&h.classList.remove(c);const T=aa(p);T&&T.classList.remove(m)}),i.current=b):i.current=null,l.current||d||s)return;const I=y instanceof HTMLElement?ta(y):[],A=ta(e.current);if(A&&A.every(w=>w instanceof HTMLElement)&&I&&I.every(w=>w instanceof HTMLElement)){l.current=!0,e.current.style.isolation="isolate";const w=gb(e.current);w&&(w.style.zIndex="1"),A.forEach((p,j)=>{const h=I[j];if(!h)return;p.style.position="relative",p.style.overflow="hidden";const T=sa(p);T&&T.classList.add(c);const O=aa(p);O&&O.classList.add(m);const R=()=>{l.current=!1,e.current&&(e.current.style.isolation=""),w&&(w.style.zIndex=""),T&&T.classList.remove(c),O&&O.classList.remove(m),p.style.position="",p.style.overflow="",p.contains(h)&&p.removeChild(h)};h.style.pointerEvents="none",h.style.position="absolute",h.style.overflow="hidden",h.setAttribute("aria-hidden","true");const P=mb(h);P&&(P.style.opacity="0");const x=sa(h);x&&(x.classList.add(g?r[sn.caption_before_exit]:r[sn.caption_after_exit]),x.addEventListener("animationend",R));const V=aa(h);V&&V.classList.add(g?r[sn.weeks_before_exit]:r[sn.weeks_after_exit]),p.insertBefore(h,p.firstChild)})}})}function cb(e,t,r,n){const s=e[0],a=e[e.length-1],{ISOWeek:i,fixedWeeks:o,broadcastCalendar:l}=r??{},{addDays:u,differenceInCalendarDays:d,differenceInCalendarMonths:g,endOfBroadcastWeek:c,endOfISOWeek:m,endOfMonth:y,endOfWeek:b,isAfter:I,startOfBroadcastWeek:A,startOfISOWeek:w,startOfWeek:p}=n,j=l?A(s,n):i?w(s):p(s),h=l?c(a):i?m(y(a)):b(y(a)),T=d(h,j),O=g(a,s)+1,R=[];for(let V=0;V<=T;V++){const M=u(j,V);if(t&&I(M,t))break;R.push(M)}const x=(l?35:42)*O;if(o&&R.length<x){const V=x-R.length;for(let M=0;M<V;M++){const N=u(R[R.length-1],1);R.push(N)}}return R}function kb(e){const t=[];return e.reduce((r,n)=>{const s=n.weeks.reduce((a,i)=>[...a,...i.days],t);return[...r,...s]},t)}function vb(e,t,r,n){const{numberOfMonths:s=1}=r,a=[];for(let i=0;i<s;i++){const o=n.addMonths(e,i);if(t&&o>t)break;a.push(o)}return a}function Zi(e,t){const{month:r,defaultMonth:n,today:s=t.today(),numberOfMonths:a=1,endMonth:i,startMonth:o}=e;let l=r||n||s;const{differenceInCalendarMonths:u,addMonths:d,startOfMonth:g}=t;if(i&&u(i,l)<0){const c=-1*(a-1);l=d(i,c)}return o&&u(l,o)<0&&(l=o),g(l)}function pb(e,t,r,n){const{addDays:s,endOfBroadcastWeek:a,endOfISOWeek:i,endOfMonth:o,endOfWeek:l,getISOWeek:u,getWeek:d,startOfBroadcastWeek:g,startOfISOWeek:c,startOfWeek:m}=n,y=e.reduce((b,I)=>{const A=r.broadcastCalendar?g(I,n):r.ISOWeek?c(I):m(I),w=r.broadcastCalendar?a(I):r.ISOWeek?i(o(I)):l(o(I)),p=t.filter(O=>O>=A&&O<=w),j=r.broadcastCalendar?35:42;if(r.fixedWeeks&&p.length<j){const O=t.filter(R=>{const P=j-p.length;return R>w&&R<=s(w,P)});p.push(...O)}const h=p.reduce((O,R)=>{const P=r.ISOWeek?u(R):d(R),x=O.find(M=>M.weekNumber===P),V=new vu(R,I,n);return x?x.days.push(V):O.push(new iy(P,[V])),O},[]),T=new ay(I,h);return b.push(T),b},[]);return r.reverseMonths?y.reverse():y}function yb(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:s,startOfDay:a,startOfMonth:i,endOfMonth:o,addYears:l,endOfYear:u,newDate:d,today:g}=t,{fromYear:c,toYear:m,fromMonth:y,toMonth:b}=e;!r&&y&&(r=y),!r&&c&&(r=t.newDate(c,0,1)),!n&&b&&(n=b),!n&&m&&(n=d(m,11,31));const I=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return r?r=i(r):c?r=d(c,0,1):!r&&I&&(r=s(l(e.today??g(),-100))),n?n=o(n):m?n=d(m,11,31):!n&&I&&(n=u(e.today??g())),[r&&a(r),n&&a(n)]}function bb(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:s,numberOfMonths:a=1}=r,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=n,u=s?a:1,d=i(e);if(!t)return o(d,u);if(!(l(t,e)<a))return o(d,u)}function hb(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:s,numberOfMonths:a}=r,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=n,u=s?a??1:1,d=i(e);if(!t)return o(d,-u);if(!(l(d,t)<=0))return o(d,-u)}function Ib(e){const t=[];return e.reduce((r,n)=>[...r,...n.weeks],t)}function Ss(e,t){const[r,n]=f.useState(e);return[t===void 0?r:t,n]}function wb(e,t){const[r,n]=yb(e,t),{startOfMonth:s,endOfMonth:a}=t,i=Zi(e,t),[o,l]=Ss(i,e.month?i:void 0);f.useEffect(()=>{const T=Zi(e,t);l(T)},[e.timeZone]);const u=vb(o,n,e,t),d=cb(u,e.endMonth?a(e.endMonth):void 0,e,t),g=pb(u,d,e,t),c=Ib(g),m=kb(g),y=hb(o,r,e,t),b=bb(o,n,e,t),{disableNavigation:I,onMonthChange:A}=e,w=T=>c.some(O=>O.days.some(R=>R.isEqualTo(T))),p=T=>{if(I)return;let O=s(T);r&&O<s(r)&&(O=s(r)),n&&O>s(n)&&(O=s(n)),l(O),A==null||A(O)};return{months:g,weeks:c,days:m,navStart:r,navEnd:n,previousMonth:y,nextMonth:b,goToMonth:p,goToDay:T=>{w(T)||p(T.date)}}}var En;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(En||(En={}));function eo(e){return!e[Ee.disabled]&&!e[Ee.hidden]&&!e[Ee.outside]}function Ab(e,t,r,n){let s,a=-1;for(const i of e){const o=t(i);eo(o)&&(o[Ee.focused]&&a<En.FocusedModifier?(s=i,a=En.FocusedModifier):n!=null&&n.isEqualTo(i)&&a<En.LastFocused?(s=i,a=En.LastFocused):r(i.date)&&a<En.Selected?(s=i,a=En.Selected):o[Ee.today]&&a<En.Today&&(s=i,a=En.Today))}return s||(s=e.find(i=>eo(t(i)))),s}function jb(e,t,r,n,s,a,i){const{ISOWeek:o,broadcastCalendar:l}=a,{addDays:u,addMonths:d,addWeeks:g,addYears:c,endOfBroadcastWeek:m,endOfISOWeek:y,endOfWeek:b,max:I,min:A,startOfBroadcastWeek:w,startOfISOWeek:p,startOfWeek:j}=i;let T={day:u,week:g,month:d,year:c,startOfWeek:O=>l?w(O,i):o?p(O):j(O),endOfWeek:O=>l?m(O):o?y(O):b(O)}[e](r,t==="after"?1:-1);return t==="before"&&n?T=I([n,T]):t==="after"&&s&&(T=A([s,T])),T}function Tu(e,t,r,n,s,a,i,o=0){if(o>365)return;const l=jb(e,t,r.date,n,s,a,i),u=!!(a.disabled&&gn(l,a.disabled,i)),d=!!(a.hidden&&gn(l,a.hidden,i)),g=l,c=new vu(l,g,i);return!u&&!d?c:Tu(e,t,c,n,s,a,i,o+1)}function Eb(e,t,r,n,s){const{autoFocus:a}=e,[i,o]=f.useState(),l=Ab(t.days,r,n||(()=>!1),i),[u,d]=f.useState(a?l:void 0);return{isFocusTarget:b=>!!(l!=null&&l.isEqualTo(b)),setFocused:d,focused:u,blur:()=>{o(u),d(void 0)},moveFocus:(b,I)=>{if(!u)return;const A=Tu(b,I,u,t.navStart,t.navEnd,e,s);A&&(t.goToDay(A),d(A))}}}function Ob(e,t){const{selected:r,required:n,onSelect:s}=e,[a,i]=Ss(r,s?r:void 0),o=s?r:a,{isSameDay:l}=t,u=m=>(o==null?void 0:o.some(y=>l(y,m)))??!1,{min:d,max:g}=e;return{selected:o,select:(m,y,b)=>{let I=[...o??[]];if(u(m)){if((o==null?void 0:o.length)===d||n&&(o==null?void 0:o.length)===1)return;I=o==null?void 0:o.filter(A=>!l(A,m))}else(o==null?void 0:o.length)===g?I=[m]:I=[...I,m];return s||i(I),s==null||s(I,m,y,b),I},isSelected:u}}function Tb(e,t,r=0,n=0,s=!1,a=Mn){const{from:i,to:o}=t||{},{isSameDay:l,isAfter:u,isBefore:d}=a;let g;if(!i&&!o)g={from:e,to:r>0?void 0:e};else if(i&&!o)l(i,e)?s?g={from:i,to:void 0}:g=void 0:d(e,i)?g={from:e,to:i}:g={from:i,to:e};else if(i&&o)if(l(i,e)&&l(o,e))s?g={from:i,to:o}:g=void 0;else if(l(i,e))g={from:i,to:r>0?void 0:e};else if(l(o,e))g={from:e,to:r>0?void 0:e};else if(d(e,i))g={from:e,to:o};else if(u(e,i))g={from:i,to:e};else if(u(e,o))g={from:i,to:e};else throw new Error("Invalid range");if(g!=null&&g.from&&(g!=null&&g.to)){const c=a.differenceInCalendarDays(g.to,g.from);n>0&&c>n?g={from:e,to:void 0}:r>1&&c<r&&(g={from:e,to:void 0})}return g}function Nb(e,t,r=Mn){const n=Array.isArray(t)?t:[t];let s=e.from;const a=r.differenceInCalendarDays(e.to,e.from),i=Math.min(a,6);for(let o=0;o<=i;o++){if(n.includes(s.getDay()))return!0;s=r.addDays(s,1)}return!1}function no(e,t,r=Mn){return Vn(e,t.from,!1,r)||Vn(e,t.to,!1,r)||Vn(t,e.from,!1,r)||Vn(t,e.to,!1,r)}function Rb(e,t,r=Mn){const n=Array.isArray(t)?t:[t];if(n.filter(o=>typeof o!="function").some(o=>typeof o=="boolean"?o:r.isDate(o)?Vn(e,o,!1,r):Iu(o,r)?o.some(l=>Vn(e,l,!1,r)):Ja(o)?o.from&&o.to?no(e,{from:o.from,to:o.to},r):!1:hu(o)?Nb(e,o.dayOfWeek,r):pu(o)?r.isAfter(o.before,o.after)?no(e,{from:r.addDays(o.after,1),to:r.addDays(o.before,-1)},r):gn(e.from,o,r)||gn(e.to,o,r):yu(o)||bu(o)?gn(e.from,o,r)||gn(e.to,o,r):!1))return!0;const i=n.filter(o=>typeof o=="function");if(i.length){let o=e.from;const l=r.differenceInCalendarDays(e.to,e.from);for(let u=0;u<=l;u++){if(i.some(d=>d(o)))return!0;o=r.addDays(o,1)}}return!1}function Pb(e,t){const{disabled:r,excludeDisabled:n,selected:s,required:a,onSelect:i}=e,[o,l]=Ss(s,i?s:void 0),u=i?s:o;return{selected:u,select:(c,m,y)=>{const{min:b,max:I}=e,A=c?Tb(c,u,b,I,a,t):void 0;return n&&r&&(A!=null&&A.from)&&A.to&&Rb({from:A.from,to:A.to},r,t)&&(A.from=c,A.to=void 0),i||l(A),i==null||i(A,c,m,y),A},isSelected:c=>u&&Vn(u,c,!1,t)}}function qb(e,t){const{selected:r,required:n,onSelect:s}=e,[a,i]=Ss(r,s?r:void 0),o=s?r:a,{isSameDay:l}=t;return{selected:o,select:(g,c,m)=>{let y=g;return!n&&o&&o&&l(g,o)&&(y=void 0),s||i(y),s==null||s(y,g,c,m),y},isSelected:g=>o?l(o,g):!1}}function _b(e,t){const r=qb(e,t),n=Ob(e,t),s=Pb(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return s;default:return}}function Mb(e){var Hr;let t=e;t.timeZone&&(t={...e},t.today&&(t.today=new Ye(t.today,t.timeZone)),t.month&&(t.month=new Ye(t.month,t.timeZone)),t.defaultMonth&&(t.defaultMonth=new Ye(t.defaultMonth,t.timeZone)),t.startMonth&&(t.startMonth=new Ye(t.startMonth,t.timeZone)),t.endMonth&&(t.endMonth=new Ye(t.endMonth,t.timeZone)),t.mode==="single"&&t.selected?t.selected=new Ye(t.selected,t.timeZone):t.mode==="multiple"&&t.selected?t.selected=(Hr=t.selected)==null?void 0:Hr.map(ie=>new Ye(ie,t.timeZone)):t.mode==="range"&&t.selected&&(t.selected={from:t.selected.from?new Ye(t.selected.from,t.timeZone):void 0,to:t.selected.to?new Ye(t.selected.to,t.timeZone):void 0}));const{components:r,formatters:n,labels:s,dateLib:a,locale:i,classNames:o}=f.useMemo(()=>{const ie={...Es,...t.locale};return{dateLib:new Hn({locale:ie,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib),components:xy(t.components),formatters:$y(t.formatters),labels:{...db,...t.labels},locale:ie,classNames:{...Vy(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]),{captionLayout:l,mode:u,navLayout:d,numberOfMonths:g=1,onDayBlur:c,onDayClick:m,onDayFocus:y,onDayKeyDown:b,onDayMouseEnter:I,onDayMouseLeave:A,onNextClick:w,onPrevClick:p,showWeekNumber:j,styles:h}=t,{formatCaption:T,formatDay:O,formatMonthDropdown:R,formatWeekNumber:P,formatWeekNumberHeader:x,formatWeekdayName:V,formatYearDropdown:M}=n,N=wb(t,a),{days:_,months:S,navStart:B,navEnd:C,previousMonth:L,nextMonth:F,goToMonth:H}=N,X=oy(_,t,a),{isSelected:J,select:ae,selected:Fe}=_b(t,a)??{},{blur:ee,focused:G,isFocusTarget:ne,moveFocus:re,setFocused:le}=Eb(t,N,X,J??(()=>!1),a),{labelDayButton:Be,labelGridcell:Ce,labelGrid:Ke,labelMonthDropdown:Dn,labelNav:ln,labelPrevious:kn,labelNext:tr,labelWeekday:sr,labelWeekNumber:pr,labelWeekNumberHeader:Yn,labelYearDropdown:E}=s,q=f.useMemo(()=>Jy(a,t.ISOWeek),[a,t.ISOWeek]),D=u!==void 0||m!==void 0,Y=f.useCallback(()=>{L&&(H(L),p==null||p(L))},[L,H,p]),U=f.useCallback(()=>{F&&(H(F),w==null||w(F))},[H,F,w]),K=f.useCallback((ie,je)=>we=>{we.preventDefault(),we.stopPropagation(),le(ie),ae==null||ae(ie.date,je,we),m==null||m(ie.date,je,we)},[ae,m,le]),Q=f.useCallback((ie,je)=>we=>{le(ie),y==null||y(ie.date,je,we)},[y,le]),ue=f.useCallback((ie,je)=>we=>{ee(),c==null||c(ie.date,je,we)},[ee,c]),pe=f.useCallback((ie,je)=>we=>{const $n={ArrowLeft:["day",t.dir==="rtl"?"after":"before"],ArrowRight:["day",t.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[we.shiftKey?"year":"month","before"],PageDown:[we.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if($n[we.key]){we.preventDefault(),we.stopPropagation();const[vn,Nt]=$n[we.key];re(vn,Nt)}b==null||b(ie.date,je,we)},[re,b,t.dir]),en=f.useCallback((ie,je)=>we=>{I==null||I(ie.date,je,we)},[I]),yr=f.useCallback((ie,je)=>we=>{A==null||A(ie.date,je,we)},[A]),An=f.useCallback(ie=>je=>{const we=Number(je.target.value),$n=a.setMonth(a.startOfMonth(ie),we);H($n)},[a,H]),Bs=f.useCallback(ie=>je=>{const we=Number(je.target.value),$n=a.setYear(a.startOfMonth(ie),we);H($n)},[a,H]),{className:Kr,style:Gr}=f.useMemo(()=>({className:[o[Z.Root],t.className].filter(Boolean).join(" "),style:{...h==null?void 0:h[Z.Root],...t.style}}),[o,t.className,t.style,h]),Cs=Fy(t),Ur=f.useRef(null);fb(Ur,!!t.animate,{classNames:o,months:S,focused:G,dateLib:a});const Ks={dayPickerProps:t,selected:Fe,select:ae,isSelected:J,months:S,nextMonth:F,previousMonth:L,goToMonth:H,getModifiers:X,components:r,classNames:o,styles:h,labels:s,formatters:n};return v.createElement(wu.Provider,{value:Ks},v.createElement(r.Root,{rootRef:t.animate?Ur:void 0,className:Kr,style:Gr,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],...Cs},v.createElement(r.Months,{className:o[Z.Months],style:h==null?void 0:h[Z.Months]},!t.hideNavigation&&!d&&v.createElement(r.Nav,{"data-animated-nav":t.animate?"true":void 0,className:o[Z.Nav],style:h==null?void 0:h[Z.Nav],"aria-label":ln(),onPreviousClick:Y,onNextClick:U,previousMonth:L,nextMonth:F}),S.map((ie,je)=>{const we=Wy(ie.date,B,C,n,a),$n=Xy(B,C,n,a);return v.createElement(r.Month,{"data-animated-month":t.animate?"true":void 0,className:o[Z.Month],style:h==null?void 0:h[Z.Month],key:je,displayIndex:je,calendarMonth:ie},d==="around"&&!t.hideNavigation&&je===0&&v.createElement(r.PreviousMonthButton,{type:"button",className:o[Z.PreviousMonthButton],tabIndex:L?void 0:-1,"aria-disabled":L?void 0:!0,"aria-label":kn(L),onClick:Y,"data-animated-button":t.animate?"true":void 0},v.createElement(r.Chevron,{disabled:L?void 0:!0,className:o[Z.Chevron],orientation:t.dir==="rtl"?"right":"left"})),v.createElement(r.MonthCaption,{"data-animated-caption":t.animate?"true":void 0,className:o[Z.MonthCaption],style:h==null?void 0:h[Z.MonthCaption],calendarMonth:ie,displayIndex:je},l!=null&&l.startsWith("dropdown")?v.createElement(r.DropdownNav,{className:o[Z.Dropdowns],style:h==null?void 0:h[Z.Dropdowns]},l==="dropdown"||l==="dropdown-months"?v.createElement(r.MonthsDropdown,{className:o[Z.MonthsDropdown],"aria-label":Dn(),classNames:o,components:r,disabled:!!t.disableNavigation,onChange:An(ie.date),options:we,style:h==null?void 0:h[Z.Dropdown],value:a.getMonth(ie.date)}):v.createElement("span",null,R(ie.date,a)),l==="dropdown"||l==="dropdown-years"?v.createElement(r.YearsDropdown,{className:o[Z.YearsDropdown],"aria-label":E(a.options),classNames:o,components:r,disabled:!!t.disableNavigation,onChange:Bs(ie.date),options:$n,style:h==null?void 0:h[Z.Dropdown],value:a.getYear(ie.date)}):v.createElement("span",null,M(ie.date,a)),v.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},T(ie.date,a.options,a))):v.createElement(r.CaptionLabel,{className:o[Z.CaptionLabel],role:"status","aria-live":"polite"},T(ie.date,a.options,a))),d==="around"&&!t.hideNavigation&&je===g-1&&v.createElement(r.NextMonthButton,{type:"button",className:o[Z.NextMonthButton],tabIndex:F?void 0:-1,"aria-disabled":F?void 0:!0,"aria-label":tr(F),onClick:U,"data-animated-button":t.animate?"true":void 0},v.createElement(r.Chevron,{disabled:F?void 0:!0,className:o[Z.Chevron],orientation:t.dir==="rtl"?"left":"right"})),je===g-1&&d==="after"&&!t.hideNavigation&&v.createElement(r.Nav,{"data-animated-nav":t.animate?"true":void 0,className:o[Z.Nav],style:h==null?void 0:h[Z.Nav],"aria-label":ln(),onPreviousClick:Y,onNextClick:U,previousMonth:L,nextMonth:F}),v.createElement(r.MonthGrid,{role:"grid","aria-multiselectable":u==="multiple"||u==="range","aria-label":Ke(ie.date,a.options,a)||void 0,className:o[Z.MonthGrid],style:h==null?void 0:h[Z.MonthGrid]},!t.hideWeekdays&&v.createElement(r.Weekdays,{"data-animated-weekdays":t.animate?"true":void 0,className:o[Z.Weekdays],style:h==null?void 0:h[Z.Weekdays]},j&&v.createElement(r.WeekNumberHeader,{"aria-label":Yn(a.options),className:o[Z.WeekNumberHeader],style:h==null?void 0:h[Z.WeekNumberHeader],scope:"col"},x()),q.map((vn,Nt)=>v.createElement(r.Weekday,{"aria-label":sr(vn,a.options,a),className:o[Z.Weekday],key:Nt,style:h==null?void 0:h[Z.Weekday],scope:"col"},V(vn,a.options,a)))),v.createElement(r.Weeks,{"data-animated-weeks":t.animate?"true":void 0,className:o[Z.Weeks],style:h==null?void 0:h[Z.Weeks]},ie.weeks.map((vn,Nt)=>v.createElement(r.Week,{className:o[Z.Week],key:vn.weekNumber,style:h==null?void 0:h[Z.Week],week:vn},j&&v.createElement(r.WeekNumber,{week:vn,style:h==null?void 0:h[Z.WeekNumber],"aria-label":pr(vn.weekNumber,{locale:i}),className:o[Z.WeekNumber],scope:"row",role:"rowheader"},P(vn.weekNumber,a)),vn.days.map(He=>{const{date:jn}=He,ce=X(He);if(ce[Ee.focused]=!ce.hidden&&!!(G!=null&&G.isEqualTo(He)),ce[bn.selected]=(J==null?void 0:J(jn))||ce.selected,Ja(Fe)){const{from:Gs,to:Us}=Fe;ce[bn.range_start]=!!(Gs&&Us&&a.isSameDay(jn,Gs)),ce[bn.range_end]=!!(Gs&&Us&&a.isSameDay(jn,Us)),ce[bn.range_middle]=Vn(Fe,jn,!0,a)}const fg=zy(ce,h,t.modifiersStyles),cg=ly(ce,o,t.modifiersClassNames),kg=!D&&!ce.hidden?Ce(jn,ce,a.options,a):void 0;return v.createElement(r.Day,{key:`${a.format(jn,"yyyy-MM-dd")}_${a.format(He.displayMonth,"yyyy-MM")}`,day:He,modifiers:ce,className:cg.join(" "),style:fg,role:"gridcell","aria-selected":ce.selected||void 0,"aria-label":kg,"data-day":a.format(jn,"yyyy-MM-dd"),"data-month":He.outside?a.format(jn,"yyyy-MM"):void 0,"data-selected":ce.selected||void 0,"data-disabled":ce.disabled||void 0,"data-hidden":ce.hidden||void 0,"data-outside":He.outside||void 0,"data-focused":ce.focused||void 0,"data-today":ce.today||void 0},!ce.hidden&&D?v.createElement(r.DayButton,{className:o[Z.DayButton],style:h==null?void 0:h[Z.DayButton],type:"button",day:He,modifiers:ce,disabled:ce.disabled||void 0,tabIndex:ne(He)?0:-1,"aria-label":Be(jn,ce,a.options,a),onClick:K(He,ce),onBlur:ue(He,ce),onFocus:Q(He,ce),onKeyDown:pe(He,ce),onMouseEnter:en(He,ce),onMouseLeave:yr(He,ce)},O(jn,a.options,a)):!ce.hidden&&O(He.date,a.options,a))}))))))})),t.footer&&v.createElement(r.Footer,{className:o[Z.Footer],style:h==null?void 0:h[Z.Footer],role:"status","aria-live":"polite"},t.footer)))}var Db=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Nu=f.forwardRef((e,t)=>{var{as:r="div",className:n,above:s,below:a,variant:i,asChild:o}=e,l=Db(e,["as","className","above","below","variant","asChild"]);const{cn:u}=te(),d=i==="show"?s:a,g=i==="show"?a:s,c=o?xr:r;return v.createElement(c,Object.assign({},l,{ref:t,className:u("navds-responsive",n,{[`navds-responsive__above--${d}`]:d,[`navds-responsive__below--${g}`]:g})}))}),Sb=f.forwardRef((e,t)=>v.createElement(Nu,Object.assign({},e,{ref:t,variant:"hide"}))),Xa=f.forwardRef((e,t)=>v.createElement(Nu,Object.assign({},e,{ref:t,variant:"show"})));function hn(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function xb({day:e,fromDate:t,toDate:r}){const n=r&&Jn(e,Gn(r))>0,s=t&&Jn(Gn(t),e)>0;return n||s||!1}const Ru="dd.MM.yyyy",Fb="MMMM yyyy",Pu=[Ru,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...Pu];const ia=(e,t,r,n,s)=>{let a;const i=Pu;if(s){for(const o of i)if(a=Nr(e,o,t,{locale:r}),hn(a)&&!oa(e,t,r,i))return a;for(const o of[...i.map(l=>l.replace("yyyy","yy"))])if(a=Nr(e,o,t,{locale:r}),hn(a)&&oa(e,t,r,i)){const l=Vb(e,o,t,r);return hn(new Date(l))?new Date(l):new Date("Invalid date")}return new Date("Invalid date")}for(const o of i)if(a=Nr(e,o,t,{locale:r}),hn(a)&&!oa(e,t,r,i))return a;return new Date("Invalid date")};function oa(e,t,r,n){let s;const a=n.map(i=>i.replace("yyyy","yy"));for(const i of a)if(s=Nr(e,i,t,{locale:r}),hn(s))return!0;return!1}function Vb(e,t,r,n){const s=Nr(ro(e,"19"),t.replace("yy","yyyy"),r,{locale:n}),a=Nr(ro(e,"20"),t.replace("yy","yyyy"),r,{locale:n});return hn(s)&&hn(a)?It(s,Wv(new Date,{years:80}))?a:s:new Date("Invalid date")}function ro(e,t){const r=e.slice(-2);return`${e.slice(0,e.length-2)}${t}${r}`}const Yr=(e,t,r,n)=>cr(e,n??Ru,{locale:t}),Lb=({month:e,start:t,end:r})=>{if(!e)return;let n=e;return t&&It(n,t)&&(n=t),r&&Gd(n,r)&&(n=r),fr(n)};function Bb(e,t,r,n){return Vd({start:ht(e),end:qs(e)}).map(i=>{const o=cr(i,"LLLL",{locale:n}),l=Ua(i),u=t&&i<fr(t)||r&&i>fr(r)||!1;return{value:l,label:o,disabled:u}})}function Cb(e,t,r){if(!e||!t)return;const n=ht(e),s=qs(t),a=[];let i=n;for(;It(i,s)||Wd(i,s);)a.push(i),i=La(i,1);return a.map(o=>{const l=cr(o,"yyyy",{locale:r});return{value:Ha(o),label:l,disabled:!1}})}function Kb({captionLayout:e,startMonth:t,endMonth:r,today:n}){const s=e==="dropdown",a=n??new Date;return t?t=fr(t):!t&&s&&(t=ht(La(a,-100))),r?r=Fd(r):!r&&s&&(r=qs(a)),[t&&Gn(t),r&&Gn(r)]}var Gb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ub=e=>{var{day:t,modifiers:r,locale:n,children:s}=e,a=Gb(e,["day","modifiers","locale","children"]);const{cn:i}=te(),o=f.useRef(null);return f.useEffect(()=>{var l;r.focused&&((l=o.current)===null||l===void 0||l.focus())},[r.focused]),r.hidden?v.createElement(v.Fragment,null):v.createElement("button",Object.assign({},a,{ref:o,"aria-hidden":t.outside,"aria-pressed":!!r.selected,"aria-label":cr(t.date,"cccc d",{locale:n}),"data-pressed":r.selected,"data-today":r.today||void 0,className:i(a.className,{"rdp-day_disabled":r.disabled,"rdp-day_selected":r.selected,"rdp-day_range_start":r.range_start,"rdp-day_range_middle":r.range_middle,"rdp-day_range_end":r.range_end,"rdp-day_today":r.today,"rdp-day_outside":r.outside,"rdp-day__weekend":r.weekend})}),s)};var Hb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ha=f.forwardRef((e,t)=>{const{inputProps:r,errorId:n,showErrorMsg:s,hasError:a,size:i,inputDescriptionId:o,readOnly:l}=Cr(e,"select"),{children:u,label:d,className:g,description:c,htmlSize:m,hideLabel:y=!1,style:b}=e,I=Hb(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:A}=te(),w={onMouseDown:p=>{l&&(p.preventDefault(),p.target.focus())},onKeyDown:p=>{l&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(p.key)&&p.preventDefault()}};return v.createElement("div",{className:A(g,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":l,"navds-select--error":a,"navds-select--readonly":l})},v.createElement(Ae,{htmlFor:r.id,size:i,className:A("navds-form-field__label",{"navds-sr-only":y})},l&&v.createElement(eu,null),d),!!c&&v.createElement(se,{className:A("navds-form-field__description",{"navds-sr-only":y}),id:o,size:i,as:"div"},c),v.createElement("div",{className:A("navds-select__container"),style:b},v.createElement("select",Object.assign({},Qe(I,["error","errorId","size","readOnly"]),r,w,{ref:t,className:A("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:m}),u),v.createElement(js,{className:A("navds-select__chevron"),"aria-hidden":!0})),v.createElement("div",{className:A("navds-form-field__error"),id:n,"aria-relevant":"additions removals","aria-live":"polite"},s&&v.createElement(ft,{size:i,showIcon:!0},e.error)))}),qu=({week:{weekNumber:e,days:t},onWeekNumberClick:r,className:n,style:s,showOnDesktop:a})=>{const i=Ds().translate,{cn:o}=te(),{getModifiers:l}=vr(),u=f.useMemo(()=>t.filter(g=>{const c=l(g);return!(c.hidden||c.outside||c.disabled)}).length===0,[t,l]),d=a?Xa:Sb;return!r||u?v.createElement(d,{above:"sm",asChild:!0},v.createElement("td",{className:"rdp-cell"},v.createElement(qr,{as:"span",textColor:"subtle",className:n,style:s,"aria-label":i("weekNumber",{week:e})},e))):v.createElement(d,{above:"sm",asChild:!0},v.createElement("td",{className:o("rdp-cell",{"navds-date__week-wrapper":!a})},v.createElement(Pe,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:s,className:o("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{r(e,t.map(g=>g.date))},icon:v.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},Yb=({onWeekNumberClick:e,weeks:t})=>{const r=Ds().translate,{cn:n}=te(),s=In();return e?v.createElement(Xa,{below:"sm",asChild:!0},v.createElement("table",{className:"rdp-table",role:"grid"},v.createElement("tbody",{className:"rdp-tbody"},v.createElement("tr",{className:n("rdp-row navds-date__week-row")},v.createElement(qr,{as:"th",weight:"semibold",className:n("rdp-cell navds-date__week-cell")},v.createElement("span",{className:n("navds-date__week-wrapper"),id:s},r("week"))),t==null?void 0:t.map(a=>v.createElement(qu,{key:a.weekNumber,week:a,onWeekNumberClick:e,showOnDesktop:!1,className:n("navds-date__week-wrapper")})))))):null};var $b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Wb=e=>{var{children:t,calendarMonth:r,locale:n,onWeekNumberClick:s}=e,a=$b(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:o,previousMonth:l,nextMonth:u}=vr(),{captionLayout:d}=i,{cn:g}=te(),c=Ds().translate,m=f.useCallback((p,j)=>{const h=Number(j.target.value),T=zd(fr(p),h);o(T)},[o]),y=f.useCallback((p,j)=>{const h=Number(j.target.value),T=Jd(fr(p),h);o(T)},[o]),[b,I]=Kb({captionLayout:d==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),A=Bb(r.date,b,I,n),w=Cb(b,I,n);return v.createElement("div",Object.assign({},Qe(a,["displayIndex"])),v.createElement("div",{className:g("navds-date__caption")},(d==null?void 0:d.startsWith("dropdown"))&&v.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:g("navds-sr-only")},cr(r.date,"LLLL y",{locale:n})),v.createElement(Pe,{variant:"tertiary-neutral",disabled:!l,onClick:()=>l&&o(l),icon:v.createElement(Cg,{title:c("goToPreviousMonth")}),className:g("navds-date__caption-button"),type:"button"}),d!=null&&d.startsWith("dropdown")?v.createElement("div",{className:g("navds-date__caption")},v.createElement(ha,{label:c("month"),hideLabel:!0,className:g("navds-date__caption__month"),onChange:p=>m(r.date,p),value:Ua(r.date)},A==null?void 0:A.map(({value:p,label:j,disabled:h})=>v.createElement("option",{key:p,value:p,disabled:h},j))),v.createElement(ha,{label:c("year"),hideLabel:!0,className:g("navds-date__caption__year"),onChange:p=>y(r.date,p),value:Ha(r.date)},w==null?void 0:w.map(({value:p,label:j,disabled:h})=>v.createElement("option",{key:p,value:p,disabled:h},j)))):v.createElement(se,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:g("navds-date__caption-label")},cr(r.date,"LLLL y",{locale:n})),v.createElement(Pe,{variant:"tertiary-neutral",icon:v.createElement(Gg,{title:c("goToNextMonth")}),onClick:()=>u&&o(u),disabled:!u,className:g("navds-date__caption-button"),type:"button"})),v.createElement(Yb,{weeks:r.weeks,onWeekNumberClick:s}),t)};var zb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Jb={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},_u=e=>{var{className:t,dropdownCaption:r,disabled:n=[],disableWeekends:s=!1,showWeekNumber:a=!1,selected:i,fixedWeeks:o=!1,onWeekNumberClick:l,fromDate:u,toDate:d,month:g,mode:c,handleSelect:m,locale:y}=e,b=zb(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:I}=te(),A=Dd(),w=y?tu(y):A,p=c??"single";return v.createElement(Mb,Object.assign({captionLayout:r?"dropdown":"label",hideNavigation:!0,locale:w,mode:p,onSelect:(j,h)=>{if(p!=="range"||j||!fu(i)){m(j);return}if(!i.to){m({from:h,to:void 0});return}let T;Ba(i.to,h)?T=void 0:It(h,i.to)?T={from:h,to:i.to}:T={from:i.to,to:h},m(T)},selected:i,classNames:Jb,components:{MonthCaption:()=>v.createElement(v.Fragment,null),DayButton:f.useCallback(j=>v.createElement(Ub,Object.assign({},j,{locale:w})),[w]),Month:f.useCallback(j=>v.createElement(Wb,Object.assign({},j,{locale:w,onWeekNumberClick:p==="multiple"?l:void 0})),[w,p,l]),Day:f.useCallback(j=>v.createElement("td",Object.assign({},Qe(j,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:f.useCallback(j=>v.createElement(qu,Object.assign({},j,{showOnDesktop:!0,onWeekNumberClick:p==="multiple"?l:void 0})),[p,l]),WeekNumberHeader:f.useCallback(j=>v.createElement(Xa,{above:"sm",asChild:!0},v.createElement("th",Object.assign({},j))),[]),Weekdays:f.useCallback(j=>v.createElement("thead",Object.assign({},j,{className:"rdp-head","aria-hidden":!0}),v.createElement("tr",{className:"rdp-head_row"},j.children)),[])},className:I("navds-date",t),disabled:j=>s&&ms(j)||gn(j,n)||xb({day:j,fromDate:u,toDate:d}),weekStartsOn:1,modifiers:{weekend:j=>s&&ms(j)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:a,fixedWeeks:o,showOutsideDays:!0,startMonth:u,endMonth:d,month:Lb({month:g,start:u,end:d})},Qe(b,["onSelect","role","id","defaultSelected"])))};var Xb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Qb=f.forwardRef((e,t)=>{var{className:r,locale:n,translations:s,selected:a,defaultSelected:i,onSelect:o,mode:l}=e,u=Xb(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:d}=te(),g=Un("DatePicker",s,su(n)),[c,m]=at({defaultValue:i,value:a,onChange:y=>o==null?void 0:o(y)});return v.createElement(au,{translate:g},v.createElement("div",{ref:t,className:d("navds-date__standalone-wrapper",r)},v.createElement(_u,Object.assign({},u,{locale:n,handleSelect:m,selected:c,mode:l}))))});var Zb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const vs=f.forwardRef((e,t)=>{var{children:r,locale:n,translations:s,selected:a,id:i,defaultSelected:o,wrapperClassName:l,open:u,onClose:d,onOpenToggle:g,strategy:c,mode:m}=e,y=Zb(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const b=Un("DatePicker",s,su(n)),{cn:I}=te(),A=In(i),[w,p]=at({defaultValue:!1,value:u}),[j,h]=f.useState(null),T=Fr(h,t),[O,R]=at({defaultValue:o,value:a,onChange:P=>{var x;let V=!1;m==="single"&&P?V=!0:fu(P)&&P.from&&P.to&&(V=!0,Ba(P.from,P.to)&&(V=!1)),V&&(d==null||d(),p(!1)),(x=y==null?void 0:y.onSelect)===null||x===void 0||x.call(y,P)}});return v.createElement(au,{translate:b},v.createElement(_p,{open:w,onOpen:()=>{p(P=>!P),g==null||g()},ariaId:A,defined:!0},v.createElement("div",{ref:T,className:I("navds-date__wrapper",l)},r,v.createElement(Qp,{open:w,anchor:j,onClose:()=>{d==null||d(),w&&p(!1)},locale:n,translate:b,variant:m??"single",popoverProps:{id:A,strategy:c}},v.createElement(_u,Object.assign({},y,{locale:n,handleSelect:R,selected:O,mode:m}))))))});vs.Standalone=Qb;vs.Input=Mp;const eh=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),nh=(e={})=>{var t;const{locale:r,required:n,defaultSelected:s,today:a=new Date,fromDate:i,toDate:o,disabled:l,disableWeekends:u,onDateChange:d,inputFormat:g,onValidate:c,defaultMonth:m,allowTwoDigitYear:y=!0}=e,[b,I]=f.useState(null),A=Dd(),w=r?tu(r):A,[p,j]=f.useState(s),[h,T]=f.useState((t=p??m)!==null&&t!==void 0?t:a),[O,R]=f.useState(p),[P,x]=f.useState(!1),V=p?Yr(p,w,"date",g):"",[M,N]=f.useState(V),_=f.useCallback(ee=>{var G,ne;x(ee),ee&&T((ne=(G=O??p)!==null&&G!==void 0?G:m)!==null&&ne!==void 0?ne:a)},[m,p,O,a]),S=ee=>{d==null||d(ee),R(ee)},B=(ee={})=>c==null?void 0:c(eh(ee));return{datepickerProps:{month:h,onMonthChange:T,onDayClick:(ee,{selected:G})=>{if(!(G&&n)){if(ee&&!G&&(_(!1),b==null||b.focus()),G){S(void 0),N(""),B({isValidDate:!1,isEmpty:!0});return}S(ee),B(),T(ee),N(ee?Yr(ee,w,"date",g):"")}},selected:O??new Date("Invalid date"),locale:r,fromDate:i,toDate:o,today:a,open:P,onClose:()=>{_(!1),b==null||b.focus()},onOpenToggle:()=>_(!P),disabled:l,disableWeekends:u},inputProps:{onChange:ee=>{N(ee.target.value);const G=ia(ee.target.value,a,w,"date",y),ne=i&&G&&Jn(i,G)>0,re=o&&G&&Jn(G,o)>0;if(!hn(G)||u&&ms(G)||l&&gn(G,l)){S(void 0),B({isInvalid:!hn(G),isWeekend:u&&ms(G),isDisabled:l&&gn(G,l),isValidDate:!1,isEmpty:!ee.target.value,isBefore:ne??!1,isAfter:re??!1});return}if(ne||re){S(void 0),B({isValidDate:!1,isBefore:ne??!1,isAfter:re??!1});return}S(G),B(),T(m??G)},onFocus:ee=>{if(ee.target.readOnly)return;const G=ia(ee.target.value,a,w,"date",y);if(hn(G)){N(Yr(G,w,"date",g));const ne=i&&G&&Jn(i,G)>0,re=o&&G&&Jn(G,o)>0;!ne&&!re&&T(G)}},onBlur:ee=>{const G=ia(ee.target.value,a,w,"date",y);hn(G)&&N(Yr(G,w,"date",g))},value:M,setAnchorRef:I},reset:()=>{var ee;S(p),T((ee=p??m)!==null&&ee!==void 0?ee:a),N(V??""),j(s)},selectedDay:O,setSelected:ee=>{var G;S(ee),T((G=ee??m)!==null&&G!==void 0?G:a),N(ee?Yr(ee,w,"date",g):"")}}};function Ue(e,t,r,n){return n?typeof n=="string"?{[`--__${e}c-${t}-${r}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([s,a])=>[`--__${e}c-${t}-${r}-${s}`,a])):{}}const rh={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},to=(e,t,r,n,s,a)=>t.split(" ").map((i,o,l)=>{var u;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let d=`var(--${a}-${r}-${i})`;if(n.includes(i))d=i==="px"?"1px":i;else if(i.startsWith("space"))d=`var(--${a}-${i})`;else{const g=`--${a}-spacing-${i}`;d=`var(${(u=rh[g])!==null&&u!==void 0?u:g})`}return s?i==="0"?"0":`calc(-1 * ${d})`:d}).join(" ");function un(e,t,r,n,s,a=!1,i=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${t}-${r}-xs`]:to(r,s,n,i,a,e)};const o={};return Object.entries(s).forEach(([l,u])=>{o[`--__${e}c-${t}-${r}-${l}`]=to(r,u,n,i,a,e)}),o}const th=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],sh=({children:e,className:t,padding:r,paddingInline:n,paddingBlock:s,margin:a,marginInline:i,marginBlock:o,width:l,minWidth:u,maxWidth:d,height:g,minHeight:c,maxHeight:m,position:y,inset:b,top:I,right:A,left:w,bottom:p,overflow:j,overflowX:h,overflowY:T,flexBasis:O,flexGrow:R,flexShrink:P,gridColumn:x})=>{const V=mt(!1),{cn:M}=te(),N=V?"ax":"a",_=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},un(N,"r","p","spacing",r)),un(N,"r","pi","spacing",n)),un(N,"r","pb","spacing",s)),un(N,"r","m","spacing",a)),un(N,"r","mi","spacing",i)),un(N,"r","mb","spacing",o)),Ue(N,"r","w",l)),Ue(N,"r","minw",u)),Ue(N,"r","maxw",d)),Ue(N,"r","h",g)),Ue(N,"r","minh",c)),Ue(N,"r","maxh",m)),Ue(N,"r","position",y)),un(N,"r","inset","spacing",b)),un(N,"r","top","spacing",I)),un(N,"r","right","spacing",A)),un(N,"r","bottom","spacing",p)),un(N,"r","left","spacing",w)),Ue(N,"r","overflow",j)),Ue(N,"r","overflowx",h)),Ue(N,"r","overflowy",T)),Ue(N,"r","flex-basis",O)),Ue(N,"r","flex-grow",R)),Ue(N,"r","flex-shrink",P)),Ue(N,"r","grid-column",x));return v.createElement(xr,{className:M({className:t,"navds-r-p":r,"navds-r-pi":n,"navds-r-pb":s,"navds-r-m":a,"navds-r-mi":i,"navds-r-mb":o,"navds-r-w":l,"navds-r-minw":u,"navds-r-maxw":d,"navds-r-h":g,"navds-r-minh":c,"navds-r-maxh":m,"navds-r-position":y,"navds-r-inset":b,"navds-r-top":I,"navds-r-right":A,"navds-r-bottom":p,"navds-r-left":w,"navds-r-overflow":j,"navds-r-overflowx":h,"navds-r-overflowy":T,"navds-r-flex-basis":O,"navds-r-flex-grow":R,"navds-r-flex-shrink":P,"navds-r-grid-column":x}),style:_},e)};var ah=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Mu=f.forwardRef((e,t)=>{var{children:r,className:n,as:s="div",align:a,justify:i,wrap:o=!0,gap:l,style:u,direction:d="row",asChild:g}=e,c=ah(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const y=mt(!1)?"ax":"a",{cn:b}=te(),I=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},u),un(y,"stack","gap","spacing",l)),Ue(y,"stack","direction",d)),Ue(y,"stack","align",a)),Ue(y,"stack","justify",i)),A=g?xr:s;return v.createElement(sh,Object.assign({},c),v.createElement(A,Object.assign({},Qe(c,th),{ref:t,style:I,className:b("navds-stack",n,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":l,"navds-stack-align":a,"navds-stack-justify":i,"navds-stack-direction":d,"navds-stack-wrap":o})}),r))});var ih=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const he=f.forwardRef((e,t)=>{var{as:r="div"}=e,n=ih(e,["as"]);return v.createElement(Mu,Object.assign({as:r},n,{ref:t,direction:"row"}))});var oh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Se=f.forwardRef((e,t)=>{var{as:r="div"}=e,n=oh(e,["as"]);return v.createElement(Mu,Object.assign({as:r},n,{ref:t,direction:"column",wrap:!1}))}),Rr=()=>{const{cn:e}=te();return v.createElement("span",{className:e("navds-stack__spacer")})};var lh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Qa=f.forwardRef((e,t)=>{var{as:r="a",className:n,underline:s=!0,variant:a,inlineText:i=!1,"data-color":o}=e,l=lh(e,["as","className","underline","variant","inlineText","data-color"]);const u=mt(!1),{cn:d}=te();let g;return u?g=a:g=a??"action",v.createElement(r,Object.assign({"data-color":o??dh(g),"data-variant":g},l,{ref:t,className:d("navds-link",n,{[`navds-link--${g}`]:g,"navds-link--remove-underline":!s,"navds-link--inline-text":i})}))});function dh(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var uh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const gh=f.forwardRef((e,t)=>{var{className:r}=e,n=uh(e,["className"]);const{cn:s}=te();return v.createElement("tbody",Object.assign({},n,{ref:t,className:s("navds-table__body",r)}))});var mh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Du=f.forwardRef((e,t)=>{var{className:r,children:n,align:s,textSize:a}=e,i=mh(e,["className","children","align","textSize"]);const{cn:o}=te();return v.createElement("th",Object.assign({ref:t,className:o("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":a==="small"})},i),n)}),Su=f.createContext(null);var fh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ch=f.forwardRef((e,t)=>{var r,n,s,a,{className:i,children:o,sortable:l=!1,sortKey:u}=e,d=fh(e,["className","children","sortable","sortKey"]);const g=f.useContext(Su),{cn:c}=te();return l&&!u&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),v.createElement(Du,Object.assign({scope:"col",ref:t,className:c(i),"aria-sort":l?((r=g==null?void 0:g.sort)===null||r===void 0?void 0:r.orderBy)===u?(n=g==null?void 0:g.sort)===null||n===void 0?void 0:n.direction:"none":void 0},d),l?v.createElement("button",{type:"button",className:c("navds-table__sort-button"),onClick:l&&u?()=>{var m;return(m=g==null?void 0:g.onSortChange)===null||m===void 0?void 0:m.call(g,u)}:void 0},o,((s=g==null?void 0:g.sort)===null||s===void 0?void 0:s.orderBy)===u?((a=g==null?void 0:g.sort)===null||a===void 0?void 0:a.direction)==="descending"?v.createElement(ym,{"aria-hidden":!0}):v.createElement(hm,{"aria-hidden":!0}):v.createElement(Hg,{"aria-hidden":!0})):o)});var kh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const xu=f.forwardRef((e,t)=>{var{className:r,children:n="",align:s,textSize:a}=e,i=kh(e,["className","children","align","textSize"]);const{cn:o}=te();return v.createElement(se,Object.assign({as:"td",ref:t,className:o("navds-table__data-cell",r,{[`navds-table__data-cell--align-${s}`]:s}),size:a},i),n)});var vh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ph=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function yh(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function so(e){return typeof e=="string"&&e[e.length-1]==="%"&&yh(e.substring(0,e.length-1))}function la(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="none")}function bh(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="")}const hh=e=>{var{children:t,className:r,innerClassName:n,duration:s=250,easing:a="ease",height:i}=e,o=vh(e,["children","className","innerClassName","duration","easing","height"]);const{cn:l}=te(),u=f.useRef(i),d=f.useRef(null),g=f.useRef(),c=f.useRef(),m=f.useRef(i),y=f.useRef("visible"),b=ph?0:s;typeof m.current=="number"?(typeof i!="string"&&(m.current=i<0?0:i),y.current="hidden"):so(m.current)&&(m.current=i==="0%"?0:i,y.current="hidden");const[I,A]=f.useState(m.current),[w,p]=f.useState(y.current),[j,h]=f.useState(!1);f.useEffect(()=>{la(d.current,m.current)},[]),f.useEffect(()=>{if(i!==u.current&&d.current){bh(d.current,u.current),d.current.style.overflow="hidden";const P=d.current.offsetHeight;d.current.style.overflow="";const x=b;let V,M,N="hidden",_;const S=u.current==="auto";typeof i=="number"?(V=i<0?0:i,M=V):so(i)?(V=i==="0%"?0:i,M=V):(V=P,M="auto",N=void 0),S&&(M=V,V=P),A(V),p("hidden"),h(!S),clearTimeout(c.current),clearTimeout(g.current),S?(_=!0,c.current=setTimeout(()=>{A(M),p(N),h(_)},50),g.current=setTimeout(()=>{h(!1),la(d.current,M)},x)):c.current=setTimeout(()=>{A(M),p(N),h(!1),i!=="auto"&&la(d.current,V)},x)}return u.current=i,()=>{clearTimeout(c.current),clearTimeout(g.current)}},[i]);const T={height:I,overflow:w};j&&(T.transition=`height ${b}ms ${a} 0ms`,T.WebkitTransition=T.transition);const R=typeof o["aria-hidden"]<"u"?o["aria-hidden"]:i===0;return v.createElement("div",Object.assign({},o,{className:l(r),style:T}),v.createElement("div",{"aria-hidden":R,className:l(n),ref:d},t))};var Ih=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Fu=f.forwardRef((e,t)=>{var{className:r,selected:n=!1,shadeOnHover:s=!0}=e,a=Ih(e,["className","selected","shadeOnHover"]);const{cn:i}=te();return v.createElement("tr",Object.assign({},a,{ref:t,className:i("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":s})}))});var wh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ah=f.forwardRef((e,t)=>{var{className:r,children:n,content:s,togglePlacement:a="left",defaultOpen:i=!1,open:o,onOpenChange:l,expansionDisabled:u=!1,expandOnRowClick:d=!1,colSpan:g=999,contentGutter:c,onClick:m}=e,y=wh(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:b}=te(),[I,A]=at({defaultValue:i,value:o,onChange:l}),w=Un("global"),p=In(),j=T=>{A(O=>!O),T.stopPropagation()},h=T=>{d&&!u&&!Vu(T.target)&&j(T)};return v.createElement(v.Fragment,null,v.createElement(Fu,Object.assign({},y,{ref:t,className:b("navds-table__expandable-row",r,{"navds-table__expandable-row--open":I,"navds-table__expandable-row--expansion-disabled":u,"navds-table__expandable-row--clickable":d}),onClick:Or(m,h)}),a==="right"&&n,v.createElement(xu,{className:b("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":I}),onClick:u?()=>null:j},!u&&v.createElement("button",{className:b("navds-table__toggle-expand-button"),type:"button","aria-controls":p,"aria-expanded":I,onClick:j},v.createElement(js,{className:b("navds-table__expandable-icon"),title:w(I?"showLess":"showMore")}))),a==="left"&&n),v.createElement("tr",{"data-state":I?"open":"closed",className:b("navds-table__expanded-row"),"aria-hidden":!I,id:p},v.createElement("td",{colSpan:g,className:b("navds-table__expanded-row-cell")},v.createElement(hh,{className:b("navds-table__expanded-row-collapse"),innerClassName:b(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${c??a}`),height:I?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function Vu(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Vu(e.parentElement)}var jh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Eh=f.forwardRef((e,t)=>{var{className:r}=e,n=jh(e,["className"]);const{cn:s}=te();return v.createElement("thead",Object.assign({},n,{ref:t,className:s("navds-table__header",r)}))});var Oh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Oe=f.forwardRef((e,t)=>{var{className:r,zebraStripes:n=!1,size:s="medium",onSortChange:a,sort:i}=e,o=Oh(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:l}=te();return v.createElement(Su.Provider,{value:{onSortChange:a,sort:i}},v.createElement("table",Object.assign({},o,{ref:t,className:l("navds-table",`navds-table--${s}`,r,{"navds-table--zebra-stripes":n})})))});Oe.Header=Eh;Oe.Body=gh;Oe.Row=Fu;Oe.ColumnHeader=ch;Oe.HeaderCell=Du;Oe.DataCell=xu;Oe.ExpandableRow=Ah;var Th=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Nh=f.forwardRef((e,t)=>{var{children:r,className:n,variant:s,size:a="medium",icon:i,"data-color":o}=e,l=Th(e,["children","className","variant","size","icon","data-color"]);const{cn:u}=te(),d=(s==null?void 0:s.endsWith("-filled"))&&"strong",g=(s==null?void 0:s.endsWith("-moderate"))&&"moderate";return v.createElement(se,Object.assign({"data-color":o??Rh(s),"data-variant":d||g||"outline"},l,{ref:t,as:"span",size:a==="medium"?"medium":"small",className:u("navds-tag",n,`navds-tag--${s}`,`navds-tag--${a}`)}),i&&v.createElement("span",{className:u("navds-tag__icon--left")},i),r)});function Rh(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var Ph=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Lu=f.forwardRef((e,t)=>{var{children:r,className:n,arrow:s=!0,placement:a="top",open:i,defaultOpen:o=!1,onOpenChange:l,offset:u,content:d,delay:g=150,id:c,keys:m,maxChar:y=80,describesChild:b=!1}=e,I=Ph(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:A}=te(),[w,p]=at({defaultValue:o,value:i,onChange:l}),j=f.useRef(null),h=ct(!1),T=h?h.ref.current:void 0,{x:O,y:R,strategy:P,context:x,placement:V,middlewareData:{arrow:{x:M,y:N}={},hide:{referenceHidden:_}={}},refs:S}=Zd({placement:a,open:w,onOpenChange:X=>p(X),middleware:[Pd(u??(s?8:4)),qd(),_d({padding:5,fallbackPlacements:["bottom","top"]}),Md({element:j,padding:5})],whileElementsMounted:h?(X,J,ae)=>ka(X,J,ae,{animationFrame:!0}):ka,strategy:h?"fixed":void 0}),{getReferenceProps:B,getFloatingProps:C}=Op([vp(x,{handleClose:Rp(),restMs:g}),Ep(x),Ap(x)]),L=In(c),F=Fr(t,S.setFloating);if(!r||(r==null?void 0:r.type)===v.Fragment||r===v.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(d==null?void 0:d.length)>y&&w&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${d.length}
Tooltip-content: ${d}`);const H=b?w?{"aria-describedby":L}:{title:d}:{"aria-label":d};return v.createElement(v.Fragment,null,v.createElement(xr,Object.assign({ref:S.setReference},B(),H,{"aria-keyshortcuts":m?m.join("+"):void 0}),r),v.createElement(yc,{rootElement:T,asChild:!0},w&&v.createElement("div",Object.assign({},C(Object.assign(Object.assign({},I),{ref:F,style:{position:P,top:R??0,left:O??0,visibility:_?"hidden":"visible"},role:"tooltip",id:L,className:A("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":V,"data-state":"open"}),d,m&&v.createElement("span",{className:A("navds-tooltip__keys"),"aria-hidden":!0},m.map(X=>v.createElement(qr,{as:"kbd",key:X,className:A("navds-tooltip__key")},X))),s&&v.createElement("div",{ref:X=>{j.current=X},className:A("navds-tooltip__arrow"),style:{left:M!=null?`${M}px`:"",top:N!=null?`${N}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[V]]:"-3.5px"}}))))}),qh=e=>{const t=Cr(e,"fieldset"),{inputProps:r}=t;return Object.assign(Object.assign({},t),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var _h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Mh=f.forwardRef((e,t)=>{var r,n,s;const{inputProps:a,errorId:i,showErrorMsg:o,hasError:l,size:u,readOnly:d,inputDescriptionId:g}=qh(e),{cn:c}=te(),m=f.useContext(ks),{children:y,className:b,errorPropagation:I=!0,legend:A,description:w,hideLegend:p,nativeReadOnly:j=!0}=e,h=_h(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return v.createElement(ks.Provider,{value:{error:I?(r=e.error)!==null&&r!==void 0?r:m==null?void 0:m.error:void 0,errorId:gt({[i]:o,[(n=m==null?void 0:m.errorId)!==null&&n!==void 0?n:""]:!!(m!=null&&m.error)}),size:u,disabled:(s=e.disabled)!==null&&s!==void 0?s:!1,readOnly:d}},v.createElement("fieldset",Object.assign({},Qe(h,["errorId","error","size","readOnly"]),Qe(a,["aria-describedby","aria-invalid"]),{ref:t,className:c(b,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":l,"navds-fieldset--readonly":d})}),v.createElement(Ae,{size:u,as:"legend",className:c("navds-fieldset__legend",{"navds-sr-only":!!p})},d&&(j?v.createElement(Ms,null):v.createElement(eu,null)),A),!!w&&v.createElement(se,{className:c("navds-fieldset__description",{"navds-sr-only":!!p}),id:g,size:u??"medium",as:"div"},e.description),y,v.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:c("navds-fieldset__error")},o&&v.createElement(ft,{size:u,showIcon:!0},e.error))))});var Dh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Bu=v.createContext(null),Sh=f.forwardRef((e,t)=>{var r,n,{children:s,className:a,name:i,defaultValue:o,value:l,onChange:u=()=>{},required:d,readOnly:g}=e,c=Dh(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:m}=te(),y=f.useContext(ks),b=In();return v.createElement(Mh,Object.assign({},c,{readOnly:g,ref:t,className:m(a,"navds-radio-group",`navds-radio-group--${(n=(r=c.size)!==null&&r!==void 0?r:y==null?void 0:y.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),v.createElement(Bu.Provider,{value:{name:i??`radioGroupName-${b}`,defaultValue:o,value:l,onChange:u,required:d}},v.createElement("div",{className:m("navds-radio-buttons")},s)))});var xh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Fh=e=>{const t=f.useContext(Bu),r=Cr(Qe(e,["description"]),"radio"),{inputProps:n,readOnly:s}=r,a=xh(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},a),{readOnly:s,inputProps:Object.assign(Object.assign({},n),{name:t==null?void 0:t.name,defaultChecked:(t==null?void 0:t.defaultValue)===void 0?void 0:(t==null?void 0:t.defaultValue)===e.value,checked:(t==null?void 0:t.value)===void 0?void 0:(t==null?void 0:t.value)===e.value,onChange:i=>{var o,l;s||((o=e.onChange)===null||o===void 0||o.call(e,i),(l=t==null?void 0:t.onChange)===null||l===void 0||l.call(t,e.value))},onClick:i=>{var o;if(s){i.preventDefault();return}(o=e==null?void 0:e.onClick)===null||o===void 0||o.call(e,i)},required:t==null?void 0:t.required,type:"radio"})})},ao=f.forwardRef((e,t)=>{const{cn:r}=te(),{inputProps:n,size:s,hasError:a,readOnly:i}=Fh(e),o=In(),l=In();return v.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${s}`,{"navds-radio--error":a,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i}),"data-color":a?"danger":e["data-color"]},v.createElement("input",Object.assign({},Qe(e,["children","size","description","readOnly"]),Qe(n,["aria-invalid"]),{"aria-labelledby":gt(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[l]:e.description}),className:r("navds-radio__input"),ref:t})),v.createElement("label",{htmlFor:n.id,className:r("navds-radio__label")},v.createElement("span",{className:r("navds-radio__content")},v.createElement(se,{as:"span",id:o,size:s,"aria-hidden":!0},e.children),e.description&&v.createElement(se,{as:"span",id:l,size:s,className:r("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var Vh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const io=(e,t,r)=>{const{outerHeightStyle:n,overflow:s}=t;return r.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==s)?(r.current+=1,t):e},oo=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function _t(e){return parseInt(e,10)||0}const Lh=f.forwardRef((e,t)=>{var r,n,{className:s,onChange:a,maxRows:i,minRows:o=1,autoScrollbar:l,style:u,value:d}=e,g=Vh(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:c}=f.useRef(d!=null),m=f.useRef(null),y=Fr(m,t),b=f.useRef(null),I=f.useRef(0),[A,w]=f.useState({outerHeightStyle:0}),p=v.useCallback(()=>{const O=m.current,P=oo(O).getComputedStyle(O);if(P.width==="0px")return{outerHeightStyle:0};const x=b.current;x.style.width=P.width,x.value=O.value||g.placeholder||"x",x.value.slice(-1)===`
`&&(x.value+=" ");const V=P.boxSizing,M=_t(P.paddingBottom)+_t(P.paddingTop),N=_t(P.borderBottomWidth)+_t(P.borderTopWidth),_=x.scrollHeight-M;x.value="x";const S=x.scrollHeight-M;let B=_;o&&(B=Math.max(Number(o)*S,B)),i&&(B=Math.min(Number(i)*S,B)),B=Math.max(B,S);const C=B+(V==="border-box"?M+N:0),L=Math.abs(B-_)<=1;return{outerHeightStyle:C,overflow:L}},[i,o,g.placeholder]),j=()=>{const O=p();lo(O)||w(R=>io(R,O,I))};_r(()=>{const O=()=>{const M=p();lo(M)||is.flushSync(()=>{w(N=>io(N,M,I))})},R=td(()=>{var M,N,_;if(I.current=0,!((M=m.current)===null||M===void 0)&&M.style.height||!((N=m.current)===null||N===void 0)&&N.style.width){((_=m.current)===null||_===void 0?void 0:_.style.overflow)==="hidden"&&w(S=>Object.assign(Object.assign({},S),{overflow:!1}));return}O()},166,!0),P=m.current,x=oo(P);x.addEventListener("resize",R);let V;return typeof ResizeObserver<"u"&&(V=new ResizeObserver(R),V.observe(P)),()=>{R.clear(),x.removeEventListener("resize",R),V&&V.disconnect()}},[p]),_r(()=>{j()}),f.useEffect(()=>{I.current=0},[d]);const h=O=>{I.current=0,c||j(),a&&a(O)},T=Object.assign({"--__ac-textarea-height":A.outerHeightStyle+"px","--__axc-textarea-height":A.outerHeightStyle+"px",overflow:A.overflow&&!l&&!(!((r=m.current)===null||r===void 0)&&r.style.height)&&!(!((n=m.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},u);return v.createElement(v.Fragment,null,v.createElement("textarea",Object.assign({value:d,onChange:h,ref:y,rows:o,style:T},g,{className:s})),v.createElement("textarea",{"aria-hidden":!0,className:s,readOnly:!0,ref:b,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function lo(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Bh=({maxLengthId:e,maxLength:t,currentLength:r,size:n,i18n:s})=>{const{cn:a}=te(),i=Un("Textarea",{charsLeft:s!=null&&s.counterLeft?`{chars} ${s.counterLeft}`:void 0,charsTooMany:s!=null&&s.counterTooMuch?`{chars} ${s.counterTooMuch}`:void 0}),o=t-r,[l,u]=f.useState(o);return f.useEffect(()=>{const d=td(()=>{u(o)},2e3);return d(),()=>{d.clear()}},[o]),v.createElement(v.Fragment,null,v.createElement("span",{id:e,className:a("navds-sr-only")},i("maxLength",{maxLength:t})),o<20&&v.createElement("span",{role:"status",className:a("navds-textarea__sr-counter navds-sr-only")},uo(l,i)),v.createElement(se,{className:a("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:n},uo(o,i)))},uo=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var Ch=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Kh=f.forwardRef((e,t)=>{var r,n,s;const{inputProps:a,errorId:i,showErrorMsg:o,hasError:l,size:u,inputDescriptionId:d}=Cr(e,"textarea"),{label:g,className:c,description:m,maxLength:y,hideLabel:b=!1,resize:I,UNSAFE_autoScrollbar:A,i18n:w,readOnly:p}=e,j=Ch(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:h}=te(),T=In(),O=y!==void 0&&y>0,[R,P]=f.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),x=()=>{let M=j!=null&&j.minRows?j==null?void 0:j.minRows:3;return u==="small"&&(M=j!=null&&j.minRows?j==null?void 0:j.minRows:2),M},V=gt(a["aria-describedby"],{[T??""]:O});return v.createElement("div",{className:h(c,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!a.disabled,"navds-form-field--readonly":p,"navds-textarea--readonly":p,"navds-textarea--error":l,"navds-textarea--autoscrollbar":A,[`navds-textarea--resize-${I===!0?"both":I}`]:I})},v.createElement(Ae,{htmlFor:a.id,size:u,className:h("navds-form-field__label",{"navds-sr-only":b})},p&&v.createElement(Ms,null),g),!!m&&v.createElement(se,{className:h("navds-form-field__description",{"navds-sr-only":b}),id:d,size:u,as:"div"},m),v.createElement(Lh,Object.assign({},Qe(j,["error","errorId","size"]),a,{onChange:Or(e.onChange,e.value===void 0?M=>P(M.target.value):void 0),minRows:x(),autoScrollbar:A,ref:t,readOnly:p,className:h("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},V?{"aria-describedby":V}:{})),O&&!p&&!a.disabled&&v.createElement(Bh,{maxLengthId:T,maxLength:y,currentLength:(s=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:R.length,size:u,i18n:w}),v.createElement("div",{className:h("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&v.createElement(ft,{size:u,showIcon:!0},e.error)))});var Gh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Uh=f.forwardRef((e,t)=>{const{cn:r}=te(),{inputProps:n,errorId:s,showErrorMsg:a,hasError:i,size:o,inputDescriptionId:l}=Cr(e,"textField"),{label:u,className:d,description:g,htmlSize:c,hideLabel:m=!1,type:y="text",readOnly:b}=e,I=Gh(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return v.createElement("div",{className:r(d,"navds-form-field",`navds-form-field--${o}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!n.disabled,"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":b,"navds-text-field--readonly":b})},v.createElement(Ae,{htmlFor:n.id,size:o,className:r("navds-form-field__label",{"navds-sr-only":m})},b&&v.createElement(Ms,null),u),!!g&&v.createElement(se,{className:r("navds-form-field__description",{"navds-sr-only":m}),id:l,size:o,as:"div"},g),v.createElement("input",Object.assign({},Qe(I,["error","errorId","size"]),n,{ref:t,type:y,readOnly:b,className:r("navds-text-field__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:c})),v.createElement("div",{className:r("navds-form-field__error"),id:s,"aria-relevant":"additions removals","aria-live":"polite"},a&&v.createElement(ft,{size:o,showIcon:!0},e.error)))});var Le=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Le||{}),At=e=>e.type==="checkbox",lr=e=>e instanceof Date,ze=e=>e==null;const Cu=e=>typeof e=="object";var xe=e=>!ze(e)&&!Array.isArray(e)&&Cu(e)&&!lr(e),Ku=e=>xe(e)&&e.target?At(e.target)?e.target.checked:e.target.value:e,Hh=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Gu=(e,t)=>e.has(Hh(t)),Yh=e=>{const t=e.constructor&&e.constructor.prototype;return xe(t)&&t.hasOwnProperty("isPrototypeOf")},Za=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ge(e){let t;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Za&&(e instanceof Blob||n))&&(r||xe(e)))if(t=r?[]:{},!r&&!Yh(e))t=e;else for(const s in e)e.hasOwnProperty(s)&&(t[s]=Ge(e[s]));else return e;return t}var xs=e=>/^\w*$/.test(e),_e=e=>e===void 0,ei=e=>Array.isArray(e)?e.filter(Boolean):[],ni=e=>ei(e.replace(/["|']|\]/g,"").split(/\.|\[/)),$=(e,t,r)=>{if(!t||!xe(e))return r;const n=(xs(t)?[t]:ni(t)).reduce((s,a)=>ze(s)?s:s[a],e);return _e(n)||n===e?_e(e[t])?r:e[t]:n},an=e=>typeof e=="boolean",be=(e,t,r)=>{let n=-1;const s=xs(t)?[t]:ni(t),a=s.length,i=a-1;for(;++n<a;){const o=s[n];let l=r;if(n!==i){const u=e[o];l=xe(u)||Array.isArray(u)?u:isNaN(+s[n+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=l,e=e[o]}};const ps={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},pn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Sn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ri=v.createContext(null);ri.displayName="HookFormContext";const nr=()=>v.useContext(ri),$h=e=>{const{children:t,...r}=e;return v.createElement(ri.Provider,{value:r},t)};var Uu=(e,t,r,n=!0)=>{const s={defaultValues:t._defaultValues};for(const a in e)Object.defineProperty(s,a,{get:()=>{const i=a;return t._proxyFormState[i]!==pn.all&&(t._proxyFormState[i]=!n||pn.all),r&&(r[i]=!0),e[i]}});return s};const ti=typeof window<"u"?f.useLayoutEffect:f.useEffect;function Wh(e){const t=nr(),{control:r=t.control,disabled:n,name:s,exact:a}=e||{},[i,o]=v.useState(r._formState),l=v.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return ti(()=>r._subscribe({name:s,formState:l.current,exact:a,callback:u=>{!n&&o({...r._formState,...u})}}),[s,n,a]),v.useEffect(()=>{l.current.isValid&&r._setValid(!0)},[r]),v.useMemo(()=>Uu(i,r,l.current,!1),[i,r])}var Rn=e=>typeof e=="string",Hu=(e,t,r,n,s)=>Rn(e)?(n&&t.watch.add(e),$(r,e,s)):Array.isArray(e)?e.map(a=>(n&&t.watch.add(a),$(r,a))):(n&&(t.watchAll=!0),r);function zh(e){const t=nr(),{control:r=t.control,name:n,defaultValue:s,disabled:a,exact:i}=e||{},o=v.useRef(s),[l,u]=v.useState(r._getWatch(n,o.current));return ti(()=>r._subscribe({name:n,formState:{values:!0},exact:i,callback:d=>!a&&u(Hu(n,r._names,d.values||r._formValues,!1,o.current))}),[n,r,a,i]),v.useEffect(()=>r._removeUnmounted()),l}function jt(e){const t=nr(),{name:r,disabled:n,control:s=t.control,shouldUnregister:a}=e,i=Gu(s._names.array,r),o=zh({control:s,name:r,defaultValue:$(s._formValues,r,$(s._defaultValues,r,e.defaultValue)),exact:!0}),l=Wh({control:s,name:r,exact:!0}),u=v.useRef(e),d=v.useRef(s.register(r,{...e.rules,value:o,...an(e.disabled)?{disabled:e.disabled}:{}})),g=v.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!$(l.errors,r)},isDirty:{enumerable:!0,get:()=>!!$(l.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!$(l.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!$(l.validatingFields,r)},error:{enumerable:!0,get:()=>$(l.errors,r)}}),[l,r]),c=v.useCallback(I=>d.current.onChange({target:{value:Ku(I),name:r},type:ps.CHANGE}),[r]),m=v.useCallback(()=>d.current.onBlur({target:{value:$(s._formValues,r),name:r},type:ps.BLUR}),[r,s._formValues]),y=v.useCallback(I=>{const A=$(s._fields,r);A&&I&&(A._f.ref={focus:()=>I.focus&&I.focus(),select:()=>I.select&&I.select(),setCustomValidity:w=>I.setCustomValidity(w),reportValidity:()=>I.reportValidity()})},[s._fields,r]),b=v.useMemo(()=>({name:r,value:o,...an(n)||l.disabled?{disabled:l.disabled||n}:{},onChange:c,onBlur:m,ref:y}),[r,n,l.disabled,c,m,y,o]);return v.useEffect(()=>{const I=s._options.shouldUnregister||a;s.register(r,{...u.current.rules,...an(u.current.disabled)?{disabled:u.current.disabled}:{}});const A=(w,p)=>{const j=$(s._fields,w);j&&j._f&&(j._f.mount=p)};if(A(r,!0),I){const w=Ge($(s._options.defaultValues,r));be(s._defaultValues,r,w),_e($(s._formValues,r))&&be(s._formValues,r,w)}return!i&&s.register(r),()=>{(i?I&&!s._state.action:I)?s.unregister(r):A(r,!1)}},[r,s,i,a]),v.useEffect(()=>{s._setDisabledField({disabled:n,name:r})},[n,r,s]),v.useMemo(()=>({field:b,formState:l,fieldState:g}),[b,l,g])}var Jh=(e,t,r,n,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:s||!0}}:{},nt=e=>Array.isArray(e)?e:[e],go=()=>{let e=[];return{get observers(){return e},next:s=>{for(const a of e)a.next&&a.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(a=>a!==s)}}),unsubscribe:()=>{e=[]}}},Ia=e=>ze(e)||!Cu(e);function zn(e,t){if(Ia(e)||Ia(t))return e===t;if(lr(e)&&lr(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const s of r){const a=e[s];if(!n.includes(s))return!1;if(s!=="ref"){const i=t[s];if(lr(a)&&lr(i)||xe(a)&&xe(i)||Array.isArray(a)&&Array.isArray(i)?!zn(a,i):a!==i)return!1}}return!0}var nn=e=>xe(e)&&!Object.keys(e).length,si=e=>e.type==="file",yn=e=>typeof e=="function",ys=e=>{if(!Za)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Yu=e=>e.type==="select-multiple",ai=e=>e.type==="radio",Xh=e=>ai(e)||At(e),da=e=>ys(e)&&e.isConnected;function Qh(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=_e(e)?n++:e[t[n++]];return e}function Zh(e){for(const t in e)if(e.hasOwnProperty(t)&&!_e(e[t]))return!1;return!0}function Ve(e,t){const r=Array.isArray(t)?t:xs(t)?[t]:ni(t),n=r.length===1?e:Qh(e,r),s=r.length-1,a=r[s];return n&&delete n[a],s!==0&&(xe(n)&&nn(n)||Array.isArray(n)&&Zh(n))&&Ve(e,r.slice(0,-1)),e}var $u=e=>{for(const t in e)if(yn(e[t]))return!0;return!1};function bs(e,t={}){const r=Array.isArray(e);if(xe(e)||r)for(const n in e)Array.isArray(e[n])||xe(e[n])&&!$u(e[n])?(t[n]=Array.isArray(e[n])?[]:{},bs(e[n],t[n])):ze(e[n])||(t[n]=!0);return t}function Wu(e,t,r){const n=Array.isArray(e);if(xe(e)||n)for(const s in e)Array.isArray(e[s])||xe(e[s])&&!$u(e[s])?_e(t)||Ia(r[s])?r[s]=Array.isArray(e[s])?bs(e[s],[]):{...bs(e[s])}:Wu(e[s],ze(t)?{}:t[s],r[s]):r[s]=!zn(e[s],t[s]);return r}var $r=(e,t)=>Wu(e,t,bs(t));const mo={value:!1,isValid:!1},fo={value:!0,isValid:!0};var zu=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!_e(e[0].attributes.value)?_e(e[0].value)||e[0].value===""?fo:{value:e[0].value,isValid:!0}:fo:mo}return mo},Ju=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>_e(e)?e:t?e===""?NaN:e&&+e:r&&Rn(e)?new Date(e):n?n(e):e;const co={isValid:!1,value:null};var Xu=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,co):co;function ko(e){const t=e.ref;return si(t)?t.files:ai(t)?Xu(e.refs).value:Yu(t)?[...t.selectedOptions].map(({value:r})=>r):At(t)?zu(e.refs).value:Ju(_e(t.value)?e.ref.value:t.value,e)}var e0=(e,t,r,n)=>{const s={};for(const a of e){const i=$(t,a);i&&be(s,a,i._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:n}},hs=e=>e instanceof RegExp,Wr=e=>_e(e)?e:hs(e)?e.source:xe(e)?hs(e.value)?e.value.source:e.value:e,vo=e=>({isOnSubmit:!e||e===pn.onSubmit,isOnBlur:e===pn.onBlur,isOnChange:e===pn.onChange,isOnAll:e===pn.all,isOnTouch:e===pn.onTouched});const po="AsyncFunction";var n0=e=>!!e&&!!e.validate&&!!(yn(e.validate)&&e.validate.constructor.name===po||xe(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===po)),r0=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),yo=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const rt=(e,t,r,n)=>{for(const s of r||Object.keys(e)){const a=$(e,s);if(a){const{_f:i,...o}=a;if(i){if(i.refs&&i.refs[0]&&t(i.refs[0],s)&&!n)return!0;if(i.ref&&t(i.ref,i.name)&&!n)return!0;if(rt(o,t))break}else if(xe(o)&&rt(o,t))break}}};function bo(e,t,r){const n=$(e,r);if(n||xs(r))return{error:n,name:r};const s=r.split(".");for(;s.length;){const a=s.join("."),i=$(t,a),o=$(e,a);if(i&&!Array.isArray(i)&&r!==a)return{name:r};if(o&&o.type)return{name:a,error:o};if(o&&o.root&&o.root.type)return{name:`${a}.root`,error:o.root};s.pop()}return{name:r}}var t0=(e,t,r,n)=>{r(e);const{name:s,...a}=e;return nn(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(i=>t[i]===(!n||pn.all))},s0=(e,t,r)=>!e||!t||e===t||nt(e).some(n=>n&&(r?n===t:n.startsWith(t)||t.startsWith(n))),a0=(e,t,r,n,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(t||e):(r?n.isOnBlur:s.isOnBlur)?!e:(r?n.isOnChange:s.isOnChange)?e:!0,i0=(e,t)=>!ei($(e,t)).length&&Ve(e,t),o0=(e,t,r)=>{const n=nt($(e,r));return be(n,"root",t[r]),be(e,r,n),e},as=e=>Rn(e);function ho(e,t,r="validate"){if(as(e)||Array.isArray(e)&&e.every(as)||an(e)&&!e)return{type:r,message:as(e)?e:"",ref:t}}var wr=e=>xe(e)&&!hs(e)?e:{value:e,message:""},Io=async(e,t,r,n,s,a)=>{const{ref:i,refs:o,required:l,maxLength:u,minLength:d,min:g,max:c,pattern:m,validate:y,name:b,valueAsNumber:I,mount:A}=e._f,w=$(r,b);if(!A||t.has(b))return{};const p=o?o[0]:i,j=M=>{s&&p.reportValidity&&(p.setCustomValidity(an(M)?"":M||""),p.reportValidity())},h={},T=ai(i),O=At(i),R=T||O,P=(I||si(i))&&_e(i.value)&&_e(w)||ys(i)&&i.value===""||w===""||Array.isArray(w)&&!w.length,x=Jh.bind(null,b,n,h),V=(M,N,_,S=Sn.maxLength,B=Sn.minLength)=>{const C=M?N:_;h[b]={type:M?S:B,message:C,ref:i,...x(M?S:B,C)}};if(a?!Array.isArray(w)||!w.length:l&&(!R&&(P||ze(w))||an(w)&&!w||O&&!zu(o).isValid||T&&!Xu(o).isValid)){const{value:M,message:N}=as(l)?{value:!!l,message:l}:wr(l);if(M&&(h[b]={type:Sn.required,message:N,ref:p,...x(Sn.required,N)},!n))return j(N),h}if(!P&&(!ze(g)||!ze(c))){let M,N;const _=wr(c),S=wr(g);if(!ze(w)&&!isNaN(w)){const B=i.valueAsNumber||w&&+w;ze(_.value)||(M=B>_.value),ze(S.value)||(N=B<S.value)}else{const B=i.valueAsDate||new Date(w),C=H=>new Date(new Date().toDateString()+" "+H),L=i.type=="time",F=i.type=="week";Rn(_.value)&&w&&(M=L?C(w)>C(_.value):F?w>_.value:B>new Date(_.value)),Rn(S.value)&&w&&(N=L?C(w)<C(S.value):F?w<S.value:B<new Date(S.value))}if((M||N)&&(V(!!M,_.message,S.message,Sn.max,Sn.min),!n))return j(h[b].message),h}if((u||d)&&!P&&(Rn(w)||a&&Array.isArray(w))){const M=wr(u),N=wr(d),_=!ze(M.value)&&w.length>+M.value,S=!ze(N.value)&&w.length<+N.value;if((_||S)&&(V(_,M.message,N.message),!n))return j(h[b].message),h}if(m&&!P&&Rn(w)){const{value:M,message:N}=wr(m);if(hs(M)&&!w.match(M)&&(h[b]={type:Sn.pattern,message:N,ref:i,...x(Sn.pattern,N)},!n))return j(N),h}if(y){if(yn(y)){const M=await y(w,r),N=ho(M,p);if(N&&(h[b]={...N,...x(Sn.validate,N.message)},!n))return j(N.message),h}else if(xe(y)){let M={};for(const N in y){if(!nn(M)&&!n)break;const _=ho(await y[N](w,r),p,N);_&&(M={..._,...x(N,_.message)},j(_.message),n&&(h[b]=M))}if(!nn(M)&&(h[b]={ref:p,...M},!n))return h}}return j(!0),h};const l0={mode:pn.onSubmit,reValidateMode:pn.onChange,shouldFocusError:!0};function d0(e={}){let t={...l0,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:yn(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const n={};let s=xe(t.defaultValues)||xe(t.values)?Ge(t.defaultValues||t.values)||{}:{},a=t.shouldUnregister?{}:Ge(s),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...d};const c={array:go(),state:go()},m=t.criteriaMode===pn.all,y=E=>q=>{clearTimeout(u),u=setTimeout(E,q)},b=async E=>{if(!t.disabled&&(d.isValid||g.isValid||E)){const q=t.resolver?nn((await O()).errors):await P(n,!0);q!==r.isValid&&c.state.next({isValid:q})}},I=(E,q)=>{!t.disabled&&(d.isValidating||d.validatingFields||g.isValidating||g.validatingFields)&&((E||Array.from(o.mount)).forEach(D=>{D&&(q?be(r.validatingFields,D,q):Ve(r.validatingFields,D))}),c.state.next({validatingFields:r.validatingFields,isValidating:!nn(r.validatingFields)}))},A=(E,q=[],D,Y,U=!0,K=!0)=>{if(Y&&D&&!t.disabled){if(i.action=!0,K&&Array.isArray($(n,E))){const Q=D($(n,E),Y.argA,Y.argB);U&&be(n,E,Q)}if(K&&Array.isArray($(r.errors,E))){const Q=D($(r.errors,E),Y.argA,Y.argB);U&&be(r.errors,E,Q),i0(r.errors,E)}if((d.touchedFields||g.touchedFields)&&K&&Array.isArray($(r.touchedFields,E))){const Q=D($(r.touchedFields,E),Y.argA,Y.argB);U&&be(r.touchedFields,E,Q)}(d.dirtyFields||g.dirtyFields)&&(r.dirtyFields=$r(s,a)),c.state.next({name:E,isDirty:V(E,q),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else be(a,E,q)},w=(E,q)=>{be(r.errors,E,q),c.state.next({errors:r.errors})},p=E=>{r.errors=E,c.state.next({errors:r.errors,isValid:!1})},j=(E,q,D,Y)=>{const U=$(n,E);if(U){const K=$(a,E,_e(D)?$(s,E):D);_e(K)||Y&&Y.defaultChecked||q?be(a,E,q?K:ko(U._f)):_(E,K),i.mount&&b()}},h=(E,q,D,Y,U)=>{let K=!1,Q=!1;const ue={name:E};if(!t.disabled){if(!D||Y){(d.isDirty||g.isDirty)&&(Q=r.isDirty,r.isDirty=ue.isDirty=V(),K=Q!==ue.isDirty);const pe=zn($(s,E),q);Q=!!$(r.dirtyFields,E),pe?Ve(r.dirtyFields,E):be(r.dirtyFields,E,!0),ue.dirtyFields=r.dirtyFields,K=K||(d.dirtyFields||g.dirtyFields)&&Q!==!pe}if(D){const pe=$(r.touchedFields,E);pe||(be(r.touchedFields,E,D),ue.touchedFields=r.touchedFields,K=K||(d.touchedFields||g.touchedFields)&&pe!==D)}K&&U&&c.state.next(ue)}return K?ue:{}},T=(E,q,D,Y)=>{const U=$(r.errors,E),K=(d.isValid||g.isValid)&&an(q)&&r.isValid!==q;if(t.delayError&&D?(l=y(()=>w(E,D)),l(t.delayError)):(clearTimeout(u),l=null,D?be(r.errors,E,D):Ve(r.errors,E)),(D?!zn(U,D):U)||!nn(Y)||K){const Q={...Y,...K&&an(q)?{isValid:q}:{},errors:r.errors,name:E};r={...r,...Q},c.state.next(Q)}},O=async E=>{I(E,!0);const q=await t.resolver(a,t.context,e0(E||o.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return I(E),q},R=async E=>{const{errors:q}=await O(E);if(E)for(const D of E){const Y=$(q,D);Y?be(r.errors,D,Y):Ve(r.errors,D)}else r.errors=q;return q},P=async(E,q,D={valid:!0})=>{for(const Y in E){const U=E[Y];if(U){const{_f:K,...Q}=U;if(K){const ue=o.array.has(K.name),pe=U._f&&n0(U._f);pe&&d.validatingFields&&I([Y],!0);const en=await Io(U,o.disabled,a,m,t.shouldUseNativeValidation&&!q,ue);if(pe&&d.validatingFields&&I([Y]),en[K.name]&&(D.valid=!1,q))break;!q&&($(en,K.name)?ue?o0(r.errors,en,K.name):be(r.errors,K.name,en[K.name]):Ve(r.errors,K.name))}!nn(Q)&&await P(Q,q,D)}}return D.valid},x=()=>{for(const E of o.unMount){const q=$(n,E);q&&(q._f.refs?q._f.refs.every(D=>!da(D)):!da(q._f.ref))&&ne(E)}o.unMount=new Set},V=(E,q)=>!t.disabled&&(E&&q&&be(a,E,q),!zn(H(),s)),M=(E,q,D)=>Hu(E,o,{...i.mount?a:_e(q)?s:Rn(E)?{[E]:q}:q},D,q),N=E=>ei($(i.mount?a:s,E,t.shouldUnregister?$(s,E,[]):[])),_=(E,q,D={})=>{const Y=$(n,E);let U=q;if(Y){const K=Y._f;K&&(!K.disabled&&be(a,E,Ju(q,K)),U=ys(K.ref)&&ze(q)?"":q,Yu(K.ref)?[...K.ref.options].forEach(Q=>Q.selected=U.includes(Q.value)):K.refs?At(K.ref)?K.refs.forEach(Q=>{(!Q.defaultChecked||!Q.disabled)&&(Array.isArray(U)?Q.checked=!!U.find(ue=>ue===Q.value):Q.checked=U===Q.value||!!U)}):K.refs.forEach(Q=>Q.checked=Q.value===U):si(K.ref)?K.ref.value="":(K.ref.value=U,K.ref.type||c.state.next({name:E,values:Ge(a)})))}(D.shouldDirty||D.shouldTouch)&&h(E,U,D.shouldTouch,D.shouldDirty,!0),D.shouldValidate&&F(E)},S=(E,q,D)=>{for(const Y in q){if(!q.hasOwnProperty(Y))return;const U=q[Y],K=E+"."+Y,Q=$(n,K);(o.array.has(E)||xe(U)||Q&&!Q._f)&&!lr(U)?S(K,U,D):_(K,U,D)}},B=(E,q,D={})=>{const Y=$(n,E),U=o.array.has(E),K=Ge(q);be(a,E,K),U?(c.array.next({name:E,values:Ge(a)}),(d.isDirty||d.dirtyFields||g.isDirty||g.dirtyFields)&&D.shouldDirty&&c.state.next({name:E,dirtyFields:$r(s,a),isDirty:V(E,K)})):Y&&!Y._f&&!ze(K)?S(E,K,D):_(E,K,D),yo(E,o)&&c.state.next({...r}),c.state.next({name:i.mount?E:void 0,values:Ge(a)})},C=async E=>{i.mount=!0;const q=E.target;let D=q.name,Y=!0;const U=$(n,D),K=pe=>{Y=Number.isNaN(pe)||lr(pe)&&isNaN(pe.getTime())||zn(pe,$(a,D,pe))},Q=vo(t.mode),ue=vo(t.reValidateMode);if(U){let pe,en;const yr=q.type?ko(U._f):Ku(E),An=E.type===ps.BLUR||E.type===ps.FOCUS_OUT,Bs=!r0(U._f)&&!t.resolver&&!$(r.errors,D)&&!U._f.deps||a0(An,$(r.touchedFields,D),r.isSubmitted,ue,Q),Kr=yo(D,o,An);be(a,D,yr),An?(U._f.onBlur&&U._f.onBlur(E),l&&l(0)):U._f.onChange&&U._f.onChange(E);const Gr=h(D,yr,An),Cs=!nn(Gr)||Kr;if(!An&&c.state.next({name:D,type:E.type,values:Ge(a)}),Bs)return(d.isValid||g.isValid)&&(t.mode==="onBlur"?An&&b():An||b()),Cs&&c.state.next({name:D,...Kr?{}:Gr});if(!An&&Kr&&c.state.next({...r}),t.resolver){const{errors:Ur}=await O([D]);if(K(yr),Y){const Ks=bo(r.errors,n,D),Hr=bo(Ur,n,Ks.name||D);pe=Hr.error,D=Hr.name,en=nn(Ur)}}else I([D],!0),pe=(await Io(U,o.disabled,a,m,t.shouldUseNativeValidation))[D],I([D]),K(yr),Y&&(pe?en=!1:(d.isValid||g.isValid)&&(en=await P(n,!0)));Y&&(U._f.deps&&F(U._f.deps),T(D,en,pe,Gr))}},L=(E,q)=>{if($(r.errors,q)&&E.focus)return E.focus(),1},F=async(E,q={})=>{let D,Y;const U=nt(E);if(t.resolver){const K=await R(_e(E)?E:U);D=nn(K),Y=E?!U.some(Q=>$(K,Q)):D}else E?(Y=(await Promise.all(U.map(async K=>{const Q=$(n,K);return await P(Q&&Q._f?{[K]:Q}:Q)}))).every(Boolean),!(!Y&&!r.isValid)&&b()):Y=D=await P(n);return c.state.next({...!Rn(E)||(d.isValid||g.isValid)&&D!==r.isValid?{}:{name:E},...t.resolver||!E?{isValid:D}:{},errors:r.errors}),q.shouldFocus&&!Y&&rt(n,L,E?U:o.mount),Y},H=E=>{const q={...i.mount?a:s};return _e(E)?q:Rn(E)?$(q,E):E.map(D=>$(q,D))},X=(E,q)=>({invalid:!!$((q||r).errors,E),isDirty:!!$((q||r).dirtyFields,E),error:$((q||r).errors,E),isValidating:!!$(r.validatingFields,E),isTouched:!!$((q||r).touchedFields,E)}),J=E=>{E&&nt(E).forEach(q=>Ve(r.errors,q)),c.state.next({errors:E?r.errors:{}})},ae=(E,q,D)=>{const Y=($(n,E,{_f:{}})._f||{}).ref,U=$(r.errors,E)||{},{ref:K,message:Q,type:ue,...pe}=U;be(r.errors,E,{...pe,...q,ref:Y}),c.state.next({name:E,errors:r.errors,isValid:!1}),D&&D.shouldFocus&&Y&&Y.focus&&Y.focus()},Fe=(E,q)=>yn(E)?c.state.subscribe({next:D=>E(M(void 0,q),D)}):M(E,q,!0),ee=E=>c.state.subscribe({next:q=>{s0(E.name,q.name,E.exact)&&t0(q,E.formState||d,sr,E.reRenderRoot)&&E.callback({values:{...a},...r,...q})}}).unsubscribe,G=E=>(i.mount=!0,g={...g,...E.formState},ee({...E,formState:g})),ne=(E,q={})=>{for(const D of E?nt(E):o.mount)o.mount.delete(D),o.array.delete(D),q.keepValue||(Ve(n,D),Ve(a,D)),!q.keepError&&Ve(r.errors,D),!q.keepDirty&&Ve(r.dirtyFields,D),!q.keepTouched&&Ve(r.touchedFields,D),!q.keepIsValidating&&Ve(r.validatingFields,D),!t.shouldUnregister&&!q.keepDefaultValue&&Ve(s,D);c.state.next({values:Ge(a)}),c.state.next({...r,...q.keepDirty?{isDirty:V()}:{}}),!q.keepIsValid&&b()},re=({disabled:E,name:q})=>{(an(E)&&i.mount||E||o.disabled.has(q))&&(E?o.disabled.add(q):o.disabled.delete(q))},le=(E,q={})=>{let D=$(n,E);const Y=an(q.disabled)||an(t.disabled);return be(n,E,{...D||{},_f:{...D&&D._f?D._f:{ref:{name:E}},name:E,mount:!0,...q}}),o.mount.add(E),D?re({disabled:an(q.disabled)?q.disabled:t.disabled,name:E}):j(E,!0,q.value),{...Y?{disabled:q.disabled||t.disabled}:{},...t.progressive?{required:!!q.required,min:Wr(q.min),max:Wr(q.max),minLength:Wr(q.minLength),maxLength:Wr(q.maxLength),pattern:Wr(q.pattern)}:{},name:E,onChange:C,onBlur:C,ref:U=>{if(U){le(E,q),D=$(n,E);const K=_e(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,Q=Xh(K),ue=D._f.refs||[];if(Q?ue.find(pe=>pe===K):K===D._f.ref)return;be(n,E,{_f:{...D._f,...Q?{refs:[...ue.filter(da),K,...Array.isArray($(s,E))?[{}]:[]],ref:{type:K.type,name:E}}:{ref:K}}}),j(E,!1,void 0,K)}else D=$(n,E,{}),D._f&&(D._f.mount=!1),(t.shouldUnregister||q.shouldUnregister)&&!(Gu(o.array,E)&&i.action)&&o.unMount.add(E)}}},Be=()=>t.shouldFocusError&&rt(n,L,o.mount),Ce=E=>{an(E)&&(c.state.next({disabled:E}),rt(n,(q,D)=>{const Y=$(n,D);Y&&(q.disabled=Y._f.disabled||E,Array.isArray(Y._f.refs)&&Y._f.refs.forEach(U=>{U.disabled=Y._f.disabled||E}))},0,!1))},Ke=(E,q)=>async D=>{let Y;D&&(D.preventDefault&&D.preventDefault(),D.persist&&D.persist());let U=Ge(a);if(c.state.next({isSubmitting:!0}),t.resolver){const{errors:K,values:Q}=await O();r.errors=K,U=Q}else await P(n);if(o.disabled.size)for(const K of o.disabled)be(U,K,void 0);if(Ve(r.errors,"root"),nn(r.errors)){c.state.next({errors:{}});try{await E(U,D)}catch(K){Y=K}}else q&&await q({...r.errors},D),Be(),setTimeout(Be);if(c.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:nn(r.errors)&&!Y,submitCount:r.submitCount+1,errors:r.errors}),Y)throw Y},Dn=(E,q={})=>{$(n,E)&&(_e(q.defaultValue)?B(E,Ge($(s,E))):(B(E,q.defaultValue),be(s,E,Ge(q.defaultValue))),q.keepTouched||Ve(r.touchedFields,E),q.keepDirty||(Ve(r.dirtyFields,E),r.isDirty=q.defaultValue?V(E,Ge($(s,E))):V()),q.keepError||(Ve(r.errors,E),d.isValid&&b()),c.state.next({...r}))},ln=(E,q={})=>{const D=E?Ge(E):s,Y=Ge(D),U=nn(E),K=U?s:Y;if(q.keepDefaultValues||(s=D),!q.keepValues){if(q.keepDirtyValues){const Q=new Set([...o.mount,...Object.keys($r(s,a))]);for(const ue of Array.from(Q))$(r.dirtyFields,ue)?be(K,ue,$(a,ue)):B(ue,$(K,ue))}else{if(Za&&_e(E))for(const Q of o.mount){const ue=$(n,Q);if(ue&&ue._f){const pe=Array.isArray(ue._f.refs)?ue._f.refs[0]:ue._f.ref;if(ys(pe)){const en=pe.closest("form");if(en){en.reset();break}}}}for(const Q of o.mount)B(Q,$(K,Q))}a=Ge(K),c.array.next({values:{...K}}),c.state.next({values:{...K}})}o={mount:q.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!d.isValid||!!q.keepIsValid||!!q.keepDirtyValues,i.watch=!!t.shouldUnregister,c.state.next({submitCount:q.keepSubmitCount?r.submitCount:0,isDirty:U?!1:q.keepDirty?r.isDirty:!!(q.keepDefaultValues&&!zn(E,s)),isSubmitted:q.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:U?{}:q.keepDirtyValues?q.keepDefaultValues&&a?$r(s,a):r.dirtyFields:q.keepDefaultValues&&E?$r(s,E):q.keepDirty?r.dirtyFields:{},touchedFields:q.keepTouched?r.touchedFields:{},errors:q.keepErrors?r.errors:{},isSubmitSuccessful:q.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},kn=(E,q)=>ln(yn(E)?E(a):E,q),tr=(E,q={})=>{const D=$(n,E),Y=D&&D._f;if(Y){const U=Y.refs?Y.refs[0]:Y.ref;U.focus&&(U.focus(),q.shouldSelect&&yn(U.select)&&U.select())}},sr=E=>{r={...r,...E}},Yn={control:{register:le,unregister:ne,getFieldState:X,handleSubmit:Ke,setError:ae,_subscribe:ee,_runSchema:O,_focusError:Be,_getWatch:M,_getDirty:V,_setValid:b,_setFieldArray:A,_setDisabledField:re,_setErrors:p,_getFieldArray:N,_reset:ln,_resetDefaultValues:()=>yn(t.defaultValues)&&t.defaultValues().then(E=>{kn(E,t.resetOptions),c.state.next({isLoading:!1})}),_removeUnmounted:x,_disableForm:Ce,_subjects:c,_proxyFormState:d,get _fields(){return n},get _formValues(){return a},get _state(){return i},set _state(E){i=E},get _defaultValues(){return s},get _names(){return o},set _names(E){o=E},get _formState(){return r},get _options(){return t},set _options(E){t={...t,...E}}},subscribe:G,trigger:F,register:le,handleSubmit:Ke,watch:Fe,setValue:B,getValues:H,reset:kn,resetField:Dn,clearErrors:J,unregister:ne,setError:ae,setFocus:tr,getFieldState:X};return{...Yn,formControl:Yn}}function Fs(e={}){const t=v.useRef(void 0),r=v.useRef(void 0),[n,s]=v.useState({isDirty:!1,isValidating:!1,isLoading:yn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:yn(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:n},e.defaultValues&&!yn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...o}=d0(e);t.current={...o,formState:n}}const a=t.current.control;return a._options=e,ti(()=>{const i=a._subscribe({formState:a._proxyFormState,callback:()=>s({...a._formState}),reRenderRoot:!0});return s(o=>({...o,isReady:!0})),a._formState.isReady=!0,i},[a]),v.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),v.useEffect(()=>{e.mode&&(a._options.mode=e.mode),e.reValidateMode&&(a._options.reValidateMode=e.reValidateMode)},[a,e.mode,e.reValidateMode]),v.useEffect(()=>{e.errors&&(a._setErrors(e.errors),a._focusError())},[a,e.errors]),v.useEffect(()=>{e.shouldUnregister&&a._subjects.state.next({values:a._getWatch()})},[a,e.shouldUnregister]),v.useEffect(()=>{if(a._proxyFormState.isDirty){const i=a._getDirty();i!==n.isDirty&&a._subjects.state.next({isDirty:i})}},[a,n.isDirty]),v.useEffect(()=>{e.values&&!zn(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,s(i=>({...i}))):a._resetDefaultValues()},[a,e.values]),v.useEffect(()=>{a._state.mount||(a._setValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),t.current.formState=Uu(n,a),t.current}function u0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wo={exports:{}},zr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao;function g0(){if(Ao)return zr;Ao=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:a}}return zr.Fragment=t,zr.jsx=r,zr.jsxs=r,zr}var jo;function m0(){return jo||(jo=1,wo.exports=g0()),wo.exports}var ye=m0();const f0=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:ye.jsx(yt,{variant:"warning",size:"small",children:ye.jsx(Se,{gap:"2",children:v.Children.map(e,t=>ye.jsx(se,{size:"small",children:t},hg(t)?t.key:t))})}),Et={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},Eo=er(Et),c0=({onClick:e=()=>{},erOverstyrt:t=!1})=>{const[r,n]=f.useState(t),s=()=>{r||(n(!0),e(!0))};return f.useEffect(()=>{n(t)},[t]),ye.jsx(Pe,{variant:r?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:s,"aria-disabled":t,disabled:t,icon:r?ye.jsx(lm,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:Eo.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):ye.jsx(im,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:Eo.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};var Oo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var To;function k0(){return To||(To=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(a=s(a,n.call(this,o)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var o in a)t.call(a,o)&&a[o]&&(i=s(i,this&&this[o]||o));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Oo)),Oo.exports}var v0=k0();const ii=u0(v0),p0="_borderbox_1vkvn_1",y0="_error_1vkvn_5",b0="_warning_1vkvn_8",h0={borderbox:p0,error:y0,warning:b0};ii.bind(h0);const I0="_aksjonspunkt_kn1hn_1",w0="_erAksjonspunktApent_kn1hn_4",A0="_erIkkeGodkjentAvBeslutter_kn1hn_8",j0={aksjonspunkt:I0,erAksjonspunktApent:w0,erIkkeGodkjentAvBeslutter:A0};ii.bind(j0);const Is=({dateString:e,year:t,month:r,day:n})=>ye.jsx(ye.Fragment,{children:Zl(e,{year:t,month:r,day:n})}),No=er(Et),E0=({text:e,okButtonText:t,showModal:r,cancel:n,submit:s})=>ye.jsxs(qn,{width:"small",open:r,"aria-label":e,onClose:n,children:[ye.jsx(qn.Body,{children:ye.jsx(As,{size:"small",children:e})}),ye.jsxs(qn.Footer,{children:[ye.jsx(Pe,{variant:"primary",size:"small",onClick:s,autoFocus:!0,type:"button",children:t||No.formatMessage({id:"OkAvbrytModal.Ok"})}),ye.jsx(Pe,{variant:"secondary",size:"small",onClick:n,type:"button",children:No.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),tt=({dateStringFom:e,dateStringTom:t,showTodayString:r=!1})=>ye.jsx(ye.Fragment,{children:Ig(e,t,{showTodayString:r})});er(Et);const O0="_divider_1t980_1",T0="_dividerParagraf_1t980_8",N0="_leftPanel_1t980_11",R0="_rightPanel_1t980_14",wa={divider:O0,dividerParagraf:T0,leftPanel:N0,rightPanel:R0},P0=ii.bind(wa),Ro=({spaceUnder:e=!1,spaceAbove:t=!1,leftPanel:r=!1,rightPanel:n=!1,dividerParagraf:s=!1,className:a})=>ye.jsxs(ye.Fragment,{children:[t&&ye.jsx("div",{style:{marginBottom:"32px"}}),ye.jsx("div",{className:P0(a,{leftPanel:r,rightPanel:n}),children:ye.jsx("div",{className:s?wa.dividerParagraf:wa.divider})}),e&&ye.jsx("div",{style:{marginBottom:"32px"}})]}),Qu=()=>ye.jsx("span",{"data-testid":"editedIcon",children:ye.jsx(gm,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});er(Et);const q0=er(Et),_0=({tekst:e,children:t})=>{const[r,n]=f.useState(!1);if(!e)return t;const s=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return ye.jsx(Lu,{content:q0.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:ye.jsx("span",{"aria-hidden":"true",onClick:s,children:t??e})})},Po={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},Aa=({beløp:e,kr:t=!1,rød:r=!1})=>{const n=e==null?void 0:e.toString().replace(/\s/g,"");return ye.jsx(_0,{tekst:n,children:ye.jsxs("span",{className:r?Po.rød:Po.default,children:[n?wg(n):"-",n&&t&&" kr"]})})};function M0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qo={exports:{}},Jr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _o;function D0(){if(_o)return Jr;_o=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:a}}return Jr.Fragment=t,Jr.jsx=r,Jr.jsxs=r,Jr}var Mo;function S0(){return Mo||(Mo=1,qo.exports=D0()),qo.exports}var me=S0();const Ot=e=>e.reduce((t,r,n)=>({...t,[n]:s=>r(s)||!0}),{}),Tt=(e,t)=>{const r=t.split(".").reduce((n,s)=>n!==void 0?n[s]:n,e);return r==null?void 0:r.message};var ja={exports:{}},x0=ja.exports,Do;function F0(){return Do||(Do=1,function(e,t){(function(r,n){e.exports=n()})(x0,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,a=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},u=function(I){return(I=+I)+(I>68?1900:2e3)},d=function(I){return function(A){this[I]=+A}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(I){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var w=A.match(/([+-]|\d\d)/g),p=60*w[1]+(+w[2]||0);return p===0?0:w[0]==="+"?-p:p}(I)}],c=function(I){var A=l[I];return A&&(A.indexOf?A:A.s.concat(A.f))},m=function(I,A){var w,p=l.meridiem;if(p){for(var j=1;j<=24;j+=1)if(I.indexOf(p(j,0,A))>-1){w=j>12;break}}else w=I===(A?"pm":"PM");return w},y={A:[o,function(I){this.afternoon=m(I,!1)}],a:[o,function(I){this.afternoon=m(I,!0)}],Q:[s,function(I){this.month=3*(I-1)+1}],S:[s,function(I){this.milliseconds=100*+I}],SS:[a,function(I){this.milliseconds=10*+I}],SSS:[/\d{3}/,function(I){this.milliseconds=+I}],s:[i,d("seconds")],ss:[i,d("seconds")],m:[i,d("minutes")],mm:[i,d("minutes")],H:[i,d("hours")],h:[i,d("hours")],HH:[i,d("hours")],hh:[i,d("hours")],D:[i,d("day")],DD:[a,d("day")],Do:[o,function(I){var A=l.ordinal,w=I.match(/\d+/);if(this.day=w[0],A)for(var p=1;p<=31;p+=1)A(p).replace(/\[|\]/g,"")===I&&(this.day=p)}],w:[i,d("week")],ww:[a,d("week")],M:[i,d("month")],MM:[a,d("month")],MMM:[o,function(I){var A=c("months"),w=(c("monthsShort")||A.map(function(p){return p.slice(0,3)})).indexOf(I)+1;if(w<1)throw new Error;this.month=w%12||w}],MMMM:[o,function(I){var A=c("months").indexOf(I)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,d("year")],YY:[a,function(I){this.year=u(I)}],YYYY:[/\d{4}/,d("year")],Z:g,ZZ:g};function b(I){var A,w;A=I,w=l&&l.formats;for(var p=(I=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(x,V,M){var N=M&&M.toUpperCase();return V||w[M]||r[M]||w[N].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(_,S,B){return S||B.slice(1)})})).match(n),j=p.length,h=0;h<j;h+=1){var T=p[h],O=y[T],R=O&&O[0],P=O&&O[1];p[h]=P?{regex:R,parser:P}:T.replace(/^\[|\]$/g,"")}return function(x){for(var V={},M=0,N=0;M<j;M+=1){var _=p[M];if(typeof _=="string")N+=_.length;else{var S=_.regex,B=_.parser,C=x.slice(N),L=S.exec(C)[0];B.call(V,L),x=x.replace(L,"")}}return function(F){var H=F.afternoon;if(H!==void 0){var X=F.hours;H?X<12&&(F.hours+=12):X===12&&(F.hours=0),delete F.afternoon}}(V),V}}return function(I,A,w){w.p.customParseFormat=!0,I&&I.parseTwoDigitYear&&(u=I.parseTwoDigitYear);var p=A.prototype,j=p.parse;p.parse=function(h){var T=h.date,O=h.utc,R=h.args;this.$u=O;var P=R[1];if(typeof P=="string"){var x=R[2]===!0,V=R[3]===!0,M=x||V,N=R[2];V&&(N=R[2]),l=this.$locale(),!x&&N&&(l=w.Ls[N]),this.$d=function(C,L,F,H){try{if(["x","X"].indexOf(L)>-1)return new Date((L==="X"?1e3:1)*C);var X=b(L)(C),J=X.year,ae=X.month,Fe=X.day,ee=X.hours,G=X.minutes,ne=X.seconds,re=X.milliseconds,le=X.zone,Be=X.week,Ce=new Date,Ke=Fe||(J||ae?1:Ce.getDate()),Dn=J||Ce.getFullYear(),ln=0;J&&!ae||(ln=ae>0?ae-1:Ce.getMonth());var kn,tr=ee||0,sr=G||0,pr=ne||0,Yn=re||0;return le?new Date(Date.UTC(Dn,ln,Ke,tr,sr,pr,Yn+60*le.offset*1e3)):F?new Date(Date.UTC(Dn,ln,Ke,tr,sr,pr,Yn)):(kn=new Date(Dn,ln,Ke,tr,sr,pr,Yn),Be&&(kn=H(kn).week(Be).toDate()),kn)}catch{return new Date("")}}(T,P,O,w),this.init(),N&&N!==!0&&(this.$L=this.locale(N).$L),M&&T!=this.format(P)&&(this.$d=new Date("")),l={}}else if(P instanceof Array)for(var _=P.length,S=1;S<=_;S+=1){R[1]=P[S-1];var B=w.apply(this,R);if(B.isValid()){this.$d=B.$d,this.$L=B.$L,this.init();break}S===_&&(this.$d=new Date(""))}else j.call(this,h)}}})}(ja)),ja.exports}var V0=F0();const L0=M0(V0),B0="_textarea_1snk6_1",C0="_readOnlyField_1snk6_7",So={textarea:B0,readOnlyField:C0},K0=e=>e!=null&&e!=="",Vs=({label:e,value:t,isEdited:r=!1,type:n,hideLabel:s,size:a})=>K0(t)?me.jsxs(Se,{gap:"1",children:[e&&!s&&me.jsx(Ae,{size:a,children:e}),me.jsxs(he,{gap:"2",align:"center",wrap:!1,children:[me.jsx(rd,{className:n==="textarea"?So.textarea:So.readOnlyField,size:a,children:t}),r&&me.jsx(Qu,{})]})]}):null;Te.extend(L0);const ot=({name:e,label:t,description:r,validate:n=[],hideLabel:s=!1,disabled:a=!1,isReadOnly:i=!1,onChange:o,disabledDays:l,isEdited:u,defaultMonth:d,fromDate:g,toDate:c,size:m="small"})=>{const{formState:{errors:y}}=nr(),{field:b}=jt({name:e,rules:{validate:f.useMemo(()=>Ot(n),[n])}}),I=b.value?Te(b.value,xn,!0).format(jr):"",[A,w]=f.useState(I),{datepickerProps:p,inputProps:j}=nh({onDateChange:O=>{if(O!==void 0){const R=Te(O).format(xn);o&&o(R),b.onChange(R),w(Te(R,xn,!0).format(jr))}},defaultSelected:b.value?Te(b.value,xn,!0).toDate():void 0,defaultMonth:d||(!b.value&&c?c:void 0),disabled:l}),h=f.useCallback(O=>{const R=Te(O.target.value,jr,!0).format(xn),P=R!=="Invalid Date";w(O.target.value),o&&o(P?R:O.target.value),b.onChange(P?R:O.target.value)},[w,o,b]);if(i)return me.jsx(Vs,{label:t,value:b.value?Te(b.value,xn,!0).format(jr):void 0,isEdited:u,hideLabel:s,size:m});const T={...p,fromDate:g,toDate:c,dropdownCaption:g&&c?!0:void 0};return me.jsx(vs,{...T,children:me.jsx(vs.Input,{...j,hideLabel:s,onChange:h,value:A,size:m,label:t,description:r,disabled:a,error:Tt(y,e)})})},Ea=({name:e,label:t,validate:r=[],readOnly:n=!1,type:s,shouldValidateOnBlur:a=!1,onBlur:i,onChange:o,description:l,autoFocus:u,parse:d=j=>j,format:g=j=>j,normalizeOnBlur:c,isEdited:m,maxLength:y,autoComplete:b=!1,disabled:I,className:A,hideLabel:w,...p})=>{const{formState:{errors:j},trigger:h}=nr(),{field:T}=jt({name:e,rules:{validate:f.useMemo(()=>Ot(r),[r])}});return n?me.jsx(Vs,{label:t,value:T.value,isEdited:m,hideLabel:w,size:p.size}):me.jsx(Uh,{size:"small",hideLabel:w,description:l,label:t,error:Tt(j,e),...T,value:T.value?g(T.value):"",autoFocus:u,autoComplete:b?void 0:"off",maxLength:y,disabled:I,type:s,className:A,onChange:O=>{const R=O.currentTarget.value?d(O.currentTarget.value):null;return o&&o(R),T.onChange(R)},onBlur:async O=>{var R,P,x,V;if(T.onBlur(),a){const M=await h();i&&M&&i((R=O==null?void 0:O.target)==null?void 0:R.value)}else i&&i((P=O==null?void 0:O.target)==null?void 0:P.value);c&&T.onChange((x=O==null?void 0:O.target)!=null&&x.value?c(d((V=O==null?void 0:O.target)==null?void 0:V.value)):null)},...p})},G0="_hideRadioLabels_1u3xf_1",U0={hideRadioLabels:G0},Zu=({label:e,description:t,name:r,validate:n=[],radios:s,onChange:a,disabled:i=!1,isReadOnly:o=!1,isHorizontal:l=!1,parse:u=b=>b,isTrueOrFalseSelection:d=!1,hideLegend:g=!1,hideRadioLabels:c=!1,isEdited:m=!1,size:y="small"})=>{const{formState:{errors:b}}=nr(),{field:I}=jt({name:r,rules:{validate:f.useMemo(()=>Ot(n),[n])}}),A=d?p=>p==="true":u,w=me.jsxs(he,{justify:"center",gap:"2",children:[e,o&&m&&me.jsx(Qu,{})]});return me.jsxs(Sh,{name:r,value:I.value!==void 0?I.value:null,onChange:p=>{a&&a(p),I.onChange(p)},size:y,legend:w,description:t,error:Tt(b,r),className:c?U0.hideRadioLabels:"",hideLegend:g,children:[!l&&s.map(p=>me.jsxs(f.Fragment,{children:[me.jsx(ao,{size:y,value:A(p.value),disabled:p.disabled||i||o,children:p.label}),I.value===A(p.value)&&p.element]},p.value)),l&&me.jsxs(me.Fragment,{children:[me.jsx(he,{gap:"4",children:s.map(p=>me.jsx(ao,{size:y,value:A(p.value),disabled:p.disabled||i||o,children:p.label},p.value))}),s.filter(p=>I.value===A(p.value)).map(p=>me.jsx(f.Fragment,{children:p.element},p.value))]})]})},H0=({name:e,label:t,selectValues:r,validate:n=[],readOnly:s=!1,description:a,hideValueOnDisable:i=!1,onChange:o,disabled:l,className:u,hideLabel:d,isEdited:g,size:c})=>{const{formState:{errors:m}}=nr(),{field:y}=jt({name:e,rules:{validate:f.useMemo(()=>Ot(n),[n])}});if(s){const A=r.map(p=>p.props).find(p=>p.value===y.value),w=A?A.children:void 0;return me.jsx(Vs,{value:w,label:t,hideLabel:d,isEdited:g,size:c})}const b=y.value||"",I=!r.map(A=>A.props.value).includes(b)&&b!=="";return I&&console.warn(`No corresponding option found for value '${b}'`),me.jsxs(ha,{size:"small",className:u,error:Tt(m,e),label:t,description:a,value:i&&l||I?"":y.value,disabled:l,onChange:A=>{o&&o(A),y.onChange(A)},hideLabel:d,children:[me.jsx("option",{style:{display:"none"}}),",",r]})},Y0="_textAreaFieldWithBadges_bdz0b_1",$0="_etikettWrapper_bdz0b_4",xo={textAreaFieldWithBadges:Y0,etikettWrapper:$0},oi=({name:e,label:t,readOnly:r,maxLength:n,badges:s,validate:a=[],parse:i=c=>c,className:o,description:l,isEdited:u,size:d="small",...g})=>{const{formState:{errors:c}}=nr(),{field:m}=jt({name:e,rules:{validate:f.useMemo(()=>Ot(a),[a])}});return r?me.jsx(Vs,{size:d,label:t,value:m.value,type:"textarea",isEdited:u,hideLabel:g.hideLabel}):me.jsxs("div",{className:s?xo.textAreaFieldWithBadges:null,children:[s&&me.jsx("div",{className:xo.etikettWrapper,children:s.map(({type:y,titleText:b})=>me.jsx(Nh,{variant:y,size:"small",children:b},b))}),me.jsx(Kh,{size:d,label:t,description:l,className:o,autoComplete:"off",...m,onChange:y=>m.onChange(y.currentTarget.value!==""?i(y.currentTarget.value):null),value:m.value?m.value:"",error:Tt(c,e),maxLength:n,...g})]})},Ls=({formMethods:e,onSubmit:t,children:r,className:n,setDataOnUnmount:s})=>{const{handleSubmit:a,getValues:i}=e;return f.useEffect(()=>()=>{s&&s(i())},[]),me.jsx($h,{...e,children:me.jsx("form",{className:n,onSubmit:t?a(o=>t(o)):void 0,children:r})})};function eg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oa={exports:{}},W0=Oa.exports,Fo;function z0(){return Fo||(Fo=1,function(e,t){(function(r,n){e.exports=n()})(W0,function(){return function(r,n){n.prototype.isSameOrAfter=function(s,a){return this.isSame(s,a)||this.isAfter(s,a)}}})}(Oa)),Oa.exports}var J0=z0();const X0=eg(J0);var Ta={exports:{}},Q0=Ta.exports,Vo;function Z0(){return Vo||(Vo=1,function(e,t){(function(r,n){e.exports=n()})(Q0,function(){return function(r,n){n.prototype.isSameOrBefore=function(s,a){return this.isSame(s,a)||this.isBefore(s,a)}}})}(Ta)),Ta.exports}var eI=Z0();const nI=eg(eI),rI="Dato må være før eller lik {limit}",tI="Dato må være etter eller lik {limit}",sI="Perioder kan ikke overlappe i tid",aI="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",iI="Dato må være lik {value}",oI="Dato må skrives slik: dd.mm.åååå",lI="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",dI="Tallet kan ikke inneholde mer enn to desimaler",uI="Tallet kan ikke ha desimaler",gI="Feltet kan kun inneholde tall",mI="Ugyldig fødselsnummer",fI="Feltet må være et fødselsnummer (11 siffer)",cI="Ugyldig organisasjonsnummer.",kI="Ugyldig organisasjonsnummer eller fødselsnummer",vI="Startdato må være før eller lik sluttdato",pI="Periode er utenfor opptjeningsperioden",yI="Ugyldig saksnummer eller fødselsnummer",bI="Feltet inneholder ugyldige tegn: {text}",hI="Feltet inneholder en ugyldig verdi: {value}",II="Feltet kan ikke inneholde mellomrom",wI="Feltet må fylles ut",AI="Du kan skrive maksimalt {length} tegn",jI="Du må skrive minst {length} tegn",EI="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",OI="Feltet må være mindre eller lik {length}",TI="Feltet må være større eller lik {length}",NI="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",RI={DateNotBeforeOrEqual:rI,DateNotAfterOrEqual:tI,DateRangesOverlapping:sI,DateRangesOverlappingPeriodTypes:aI,DatesNotEqual:iI,InvalidDate:oI,InvalidDatesInPeriod:lI,InvalidDecimal:dI,InvalidInteger:uI,InvalidNumber:gI,InvalidFodselsnr:mI,InvalidFodselsnrFormat:fI,InvalidOrgnr:cI,InvalidOrgnrOrFodselsnr:kI,InvalidPeriod:vI,InvalidPeriodRange:pI,InvalidSaksnrOrFodselsnrFormat:yI,InvalidText:bI,InvalidValue:hI,IllegalWhiteSpace:II,IsRequired:wI,MaxLength:AI,MinLength:jI,MaxLengthOrFodselsnr:EI,MaxValue:OI,MinValue:TI,SammeFodselsnrSomSoker:NI},{formatMessage:wn}=er(RI),PI=e=>wn({id:"DateNotBeforeOrEqual"},{limit:e}),qI=e=>wn({id:"DateNotAfterOrEqual"},{limit:e}),_I=()=>wn({id:"InvalidDate"}),MI=e=>wn({id:"InvalidInteger"},{text:e}),DI=e=>wn({id:"InvalidNumber"},{text:e}),SI=e=>wn({id:"InvalidText"},{text:e}),xI=()=>wn({id:"IsRequired"}),FI=e=>wn({id:"MaxLength"},{length:e}),VI=e=>wn({id:"MinLength"},{length:e}),LI=e=>wn({id:"MaxValue"},{length:e}),BI=e=>wn({id:"MinValue"},{length:e}),CI=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,KI=/^\d+([,.]\d+)?$/,GI=/^\s*\d+\s*$/,UI=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,HI=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,rr=e=>e==null||e.toString().trim().length===0,YI=()=>Te().subtract(1,"days").startOf("day"),$I=()=>Te().startOf("day");Te.extend(X0);Te.extend(nI);const mn=e=>rr(e)?xI():void 0,li=e=>t=>rr(t)||t.toString().trim().length>=e?null:VI(e),di=e=>t=>rr(t)||t.toString().trim().length<=e?null:FI(e),ng=e=>t=>t>=e?null:BI(e),rg=e=>t=>t<=e?null:LI(e),WI=e=>rr(e)||KI.test(e.toString())?null:DI(e.toString()),zI=e=>rr(e)||GI.test(e.toString())?null:MI(e.toString()),tg=e=>WI(e)||zI(e),lt=(e="")=>rr(e)||CI.test(e)?null:_I(),JI=e=>t=>{const r=Te(e).endOf("day");return rr(t)||Te(t).isSameOrBefore(r)?null:PI(r.format(jr))},ui=e=>t=>{const r=Te(e).startOf("day");return rr(t)||Te(t).isSameOrAfter(r)?null:qI(r.format(jr))},Lo=e=>JI(YI())(e),XI=e=>ui($I())(e),gi=e=>{if(!UI.test(e)){const t=e.replace(HI,"");return SI(t.replace(/[\t]/g,"Tabulatortegn"))}return null},QI=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const r=e[0];r.setAttributeNode(t),document.activeElement.blur(),r.focus()}},300)},sg=({submitCallback:e,cancelEvent:t,showModal:r,ventearsaker:n,erTilbakekreving:s,frist:a,ventearsak:i,visBrevErBestilt:o=!1,hasManualPaVent:l,defaultVenteårsak:u=null})=>{const d=Zn(),g=Fs({defaultValues:ew(l,a,i??u)}),c=g.watch("frist"),m=g.watch("ventearsak"),y=aw(i,m),b=iw(a,c),I=!(a===c&&!y),A=sw(s,a,c,m);return k.jsx(Ls,{formMethods:g,onSubmit:e,children:k.jsxs(qn,{width:"small",open:r,onClose:t,header:{heading:d.formatMessage({id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"})},children:[k.jsx(qn.Body,{children:k.jsxs(Se,{gap:"4",children:[(l||c)&&k.jsx(ot,{label:k.jsx(W,{id:"SettPaVentModal.Frist"}),name:"frist",validate:[mn,lt,XI]}),k.jsx(H0,{name:"ventearsak",label:k.jsx(W,{id:"SettPaVentModal.Arsak"}),validate:[mn],selectValues:n.filter(w=>!l||(s?tw(w,m):nw.some(p=>p===w.kode))).sort((w,p)=>w.navn.localeCompare(p.navn)).map(w=>k.jsx("option",{value:w.kode,children:w.navn},w.kode)),readOnly:!l}),o&&k.jsx(se,{size:"small",children:k.jsx(W,{id:"SettPaVentModal.BrevBlirBestilt"})}),l&&k.jsx(se,{size:"small",children:k.jsx(W,{id:"SettPaVentModal.EndreFrist"})}),!l&&A&&k.jsxs(k.Fragment,{children:[k.jsx(se,{size:"small",children:k.jsx(W,{id:"SettPaVentModal.UtløptFrist"})}),k.jsx(se,{size:"small",children:k.jsx(W,{id:"SettPaVentModal.HenleggeSaken"})})]})]})}),k.jsxs(qn.Footer,{children:[k.jsx(Pe,{size:"small",variant:"primary",style:{paddingInline:"36px"},onClick:I?QI:t,disabled:!y&&!b,children:k.jsx(W,{id:"SettPaVentModal.Ok"})}),(!l||I||!o)&&k.jsx(Pe,{size:"small",variant:"secondary",onClick:t,type:"button",children:k.jsx(W,{id:y||b?"SettPaVentModal.Avbryt":"SettPaVentModal.Lukk"})})]})]})})},ZI=()=>{const e=Te().toDate();return e.setDate(e.getDate()+28),Te(e).format(xn)},ew=(e,t,r)=>({ventearsak:r??void 0,frist:t||e===!1?t??void 0:ZI()}),nw=[We.AVV_DOK,We.AVV_FODSEL,We.VENT_PÅ_BRUKERTILBAKEMELDING,We.UTV_FRIST,We.FOR_TIDLIG_SOKNAD,We.VENT_OPDT_INNTEKTSMELDING,We.VENT_UTLAND_TRYGD,We.UTVIDET_TILSVAR_FRIST,We.ENDRE_TILKJENT_YTELSE,We.VENT_PÅ_MULIG_MOTREGNING],rw=[We.VENT_PÅ_BRUKERTILBAKEMELDING,We.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG],tw=(e,t)=>rw.some(r=>r===e.kode)?e.kode===t:!0,sw=(e,t,r,n)=>{const s=e&&(!!r&&Lo(r)===null||!!t&&Lo(t)===null),a=n===We.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;return e&&s&&a},aw=(e,t)=>!(e===t||!t&&!e),iw=(e,t)=>!(e===t||!t&&!e);sg.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModal",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},frist:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},ventearsak:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},defaultVenteårsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const ow={"SettPaVentModal.ModalDescription":"Behandlingen settes på vent med frist","SettPaVentModal.ModalDescriptionErPaVent":"Behandlingen er satt på vent","SettPaVentModal.PaVent":"På vent","SettPaVentModal.SettesPaVent":"Behandlingen settes på vent","SettPaVentModal.ErSettPaVent":"Behandlingen er satt på vent","SettPaVentModal.Frist":"Frist","SettPaVentModal.Ok":"OK","SettPaVentModal.Avbryt":"Avbryt","SettPaVentModal.Lukk":"Lukk","SettPaVentModal.BrevBlirBestilt":"Brevet blir bestilt","SettPaVentModal.Arsak":"Årsak","SettPaVentModal.EndreFrist":"Du kan endre frist eller årsak før du fortsetter","SettPaVentModal.UtløptFrist":"OBS! Fristen på denne behandlingen er utløpt!","SettPaVentModal.HenleggeSaken":`Kontroller hvorfor Økonomi ikke har dannet et kravgrunnlag.
 Dersom det feilutbetalte beløpet er bortfalt skal saken henlegges.
For mer informasjon, se rutine under tilbakekreving.`},lw=er(ow),ag=({frist:e=null,ventearsak:t=null,hasManualPaVent:r=!1,...n})=>k.jsx(ed,{value:lw,children:k.jsx(sg,{frist:e,ventearsak:t,hasManualPaVent:r,...n})});ag.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModalIndex",props:{cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},frist:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},ventearsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:""},hasManualPaVent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};const mi=f.createContext({isDirty:!1,setDirty:()=>{}}),ig=({children:e})=>{const[t,r]=f.useState(!1),n=f.useMemo(()=>({isDirty:t,setDirty:r}),[t,r]);return k.jsx(mi.Provider,{value:n,children:e})},fi=e=>{const t=f.useContext(mi);f.useEffect(()=>{t.setDirty(e)},[e])},dw=()=>f.useContext(mi).isDirty;ig.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const Bo=(e,t)=>({arbeidsgiverIdent:e,arbeidsgiverNavn:t.navn,...t.erPrivatPerson?{erPrivatPerson:!0,arbeidsgiverFødselsdato:t.fødselsdato}:{erPrivatPerson:!1}}),Mt=e=>t=>t.arbeidsgiverIdent===e.arbeidsgiverIdent,uw=(e,t)=>{const{fom:r,tom:n,saksbehandlersVurdering:s,stillingsprosent:a,begrunnelse:i}=e;if(e.saksbehandlersVurdering)return e.saksbehandlersVurdering===fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverNavn:t,fom:r,tom:n,stillingsprosent:a,saksbehandlersVurdering:s??void 0,begrunnelse:i??void 0}:{saksbehandlersVurdering:s??void 0,begrunnelse:i??void 0}},gw=({saksbehandlersVurdering:e,begrunnelse:t})=>e?{saksbehandlersVurdering:e,begrunnelse:t??void 0}:void 0,mw=(e,t)=>e.filter(r=>r.arbeidsgiverIdent===t),fw=(e,t)=>t.map(r=>{const n=e.find(s=>cw(r,s));return{arbeidsforhold:r,inntektsmelding:n}}),cw=(e,t)=>t.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!t.internArbeidsforholdId||t.internArbeidsforholdId===e.internArbeidsforholdId),kw=e=>e.årsak?-1:1,vw=(e,t)=>{const r=e.årsak,n=t.årsak;return r&&!n?-1:n&&!r?1:e.arbeidsgiverNavn.localeCompare(t.arbeidsgiverNavn)},pw=(e,t)=>{const{arbeidsforhold:r,inntektsmeldinger:n,inntekter:s}=e,a=[...r.sort(kw)].reduce((o,l)=>{var b,I;if(o.find(Mt(l)))return o;const d=r.filter(Mt(l)),g=Bo(l.arbeidsgiverIdent,t[l.arbeidsgiverIdent]),c=mw(n,l.arbeidsgiverIdent),m=((b=s.find(Mt(l)))==null?void 0:b.inntekter)??[],y={...g,årsak:l.årsak??((I=c[0])==null?void 0:I.årsak)??void 0,avklaring:uw(l,g.arbeidsgiverNavn),arbeidsforholdForRad:d,inntektsmeldingerForRad:c,inntektsposter:m};return o.concat(y)},[]),i=n.filter(o=>!r.some(l=>o.arbeidsgiverIdent===l.arbeidsgiverIdent)).map(o=>{var d;const l=Bo(o.arbeidsgiverIdent,t[o.arbeidsgiverIdent]),u=((d=s.find(Mt(o)))==null?void 0:d.inntekter)??[];return{...l,årsak:o.årsak??void 0,avklaring:gw(o),arbeidsforholdForRad:[],inntektsmeldingerForRad:[o],inntektsposter:u}});return a.concat(i).sort(vw)},Co=e=>{const t=e.findIndex(r=>r.årsak&&!r.avklaring);return t!==-1?[t]:[]};var ua={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ko;function yw(){return Ko||(Ko=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(a=s(a,n.call(this,o)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var o in a)t.call(a,o)&&a[o]&&(i=s(i,this&&this[o]||o));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(ua)),ua.exports}var bw=yw();const hw=Xl(bw),og=({saksnummer:e,journalpostId:t,dokumentId:r,dokumentTittel:n,children:s})=>{const a=`${t}-${r}`,i=Rg(e,t,r);return k.jsx(Qa,{href:i,target:a,rel:"noopener noreferrer",onClick:Iw(n),children:s??n})},Iw=e=>t=>{e&&(t.preventDefault(),Pg(t.currentTarget.href,t.currentTarget.target,e))};og.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ww="_inline_glms2_1",Aw="_docIcon_glms2_9",jw="_phoneIcon_glms2_14",ga={inline:ww,docIcon:Aw,phoneIcon:jw},dt=({saksnummer:e,arbeidsforhold:t,inntektsmelding:r,skalViseArbeidsforholdId:n,alleKodeverk:s,ikkeVisInfo:a,radData:i})=>{var o;return k.jsxs(k.Fragment,{children:[k.jsxs(Se,{gap:"4",children:[!a&&k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:i.erPrivatPerson?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),k.jsx(se,{size:"small",children:i.erPrivatPerson?k.jsx(Is,{dateString:i.arbeidsgiverFødselsdato}):i.arbeidsgiverIdent})]}),n&&k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),k.jsx(se,{size:"small",children:r.eksternArbeidsforholdId})]}),t&&k.jsxs(k.Fragment,{children:[k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),k.jsx(se,{size:"small",children:`${t.stillingsprosent}%`})]}),t.permisjonOgMangel&&k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:((o=s.PermisjonsbeskrivelseType.find(l=>{var u;return l.kode===((u=t.permisjonOgMangel)==null?void 0:u.type)}))==null?void 0:o.navn)??""}),k.jsx(se,{size:"small",children:k.jsx(tt,{dateStringFom:t.permisjonOgMangel.permisjonFom,dateStringTom:t.permisjonOgMangel.permisjonTom})})]})]}),k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),k.jsx(se,{size:"small",children:k.jsx(Aa,{beløp:r.inntektPrMnd})})]}),k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),k.jsx(se,{size:"small",children:k.jsx(W,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),r.refusjonPrMnd!==void 0&&r.refusjonPrMnd!==null&&k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),k.jsx(se,{size:"small",children:k.jsx(Aa,{beløp:r.refusjonPrMnd})})]}),k.jsxs(og,{saksnummer:e,journalpostId:r.journalpostId,dokumentId:r.dokumentId,children:[k.jsx(se,{size:"small",className:ga.inline,children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),k.jsx(rm,{className:ga.docIcon})]})]}),k.jsxs(he,{gap:"4",children:[k.jsx(fm,{className:ga.phoneIcon}),k.jsxs(Se,{gap:"1",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),k.jsx(qr,{children:r.kontaktpersonNavn}),k.jsx(qr,{children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})]})]})};dt.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const Ew="_inline_10adz_1",Ow="_aksjonpunktImage_10adz_5",Tw="_arrow_10adz_12",Nw="_ikkeMottatt_10adz_18",Rw="_skiller_10adz_30",ar={inline:Ew,aksjonpunktImage:Ow,arrow:Tw,ikkeMottatt:Nw,skiller:Rw},ci=({saksnummer:e,alleKodeverk:t,radData:r})=>{var c;const n=Zn(),[s,a]=f.useState({}),{arbeidsforholdForRad:i,inntektsmeldingerForRad:o,arbeidsgiverIdent:l,erPrivatPerson:u}=r,d=i.length===1,g=fw(o,i);return k.jsxs(Se,{gap:"4",children:[k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:u?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),k.jsx(se,{size:"small",children:u?k.jsx(Is,{dateString:r.arbeidsgiverFødselsdato}):l})]}),!d&&k.jsxs(k.Fragment,{children:[k.jsx(Ro,{dividerParagraf:!0,className:ar.skiller}),g.map(({arbeidsforhold:m,inntektsmelding:y})=>{var b;return k.jsxs(v.Fragment,{children:[k.jsxs(Se,{gap:"2",children:[k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),k.jsxs("div",{children:[(m==null?void 0:m.eksternArbeidsforholdId)&&m.eksternArbeidsforholdId.length<50&&k.jsx("div",{children:k.jsx(se,{size:"small",children:m.eksternArbeidsforholdId})}),(m==null?void 0:m.eksternArbeidsforholdId)&&m.eksternArbeidsforholdId.length>=50&&k.jsx(Lu,{content:Pw(m.eksternArbeidsforholdId),children:k.jsx(se,{size:"small",children:`${m.eksternArbeidsforholdId.substring(0,50)}...`})}),!m.eksternArbeidsforholdId&&k.jsx(se,{size:"small",children:"-"})]}),y&&k.jsxs(k.Fragment,{children:[k.jsx(Rr,{}),k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!y&&k.jsxs(k.Fragment,{children:[k.jsx(Rr,{}),k.jsxs("div",{children:[k.jsx(qa,{className:ar.aksjonpunktImage,title:n.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),k.jsx("div",{className:ar.ikkeMottatt,children:k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),k.jsx(se,{size:"small",children:k.jsx(tt,{dateStringFom:m.fom,dateStringTom:m.tom})}),y&&k.jsxs(k.Fragment,{children:[k.jsx(Rr,{}),k.jsx(se,{size:"small",children:k.jsx(Is,{dateString:y.motattDato})})]})]}),k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),k.jsx(se,{size:"small",children:`${m.stillingsprosent}%`})]}),m.permisjonOgMangel&&k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:((b=t.PermisjonsbeskrivelseType.find(I=>{var A;return I.kode===((A=m.permisjonOgMangel)==null?void 0:A.type)}))==null?void 0:b.navn)??""}),k.jsx(se,{size:"small",children:k.jsx(tt,{dateStringFom:m.permisjonOgMangel.permisjonFom,dateStringTom:m.permisjonOgMangel.permisjonTom})})]}),y&&k.jsxs(k.Fragment,{children:[m.internArbeidsforholdId&&s[m.internArbeidsforholdId]&&k.jsx(dt,{saksnummer:e,inntektsmelding:y,skalViseArbeidsforholdId:!1,radData:r,alleKodeverk:t}),k.jsxs(Qa,{onClick:I=>{I.preventDefault(),a(A=>{if(!m.internArbeidsforholdId)return A;const w=A[m.internArbeidsforholdId];return{...A,[m.internArbeidsforholdId]:w===void 0||w===!1}})},href:"",children:[k.jsx("span",{children:k.jsx(se,{size:"small",className:ar.inline,children:k.jsx(W,{id:!m.internArbeidsforholdId||!s[m.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),m.internArbeidsforholdId&&s[m.internArbeidsforholdId]?k.jsx(sd,{className:ar.arrow}):k.jsx(js,{className:ar.arrow})]})]})]}),k.jsx(Ro,{dividerParagraf:!0,className:ar.skiller})]},`${m.arbeidsgiverIdent}${m.internArbeidsforholdId}`)})]}),d&&g.length>0&&g[0].inntektsmelding&&k.jsx(dt,{saksnummer:e,radData:r,arbeidsforhold:i[0],inntektsmelding:g[0].inntektsmelding,skalViseArbeidsforholdId:o.length>1,alleKodeverk:t,ikkeVisInfo:!0}),d&&o.length===0&&k.jsxs(k.Fragment,{children:[k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),k.jsx(se,{size:"small",children:`${i[0].stillingsprosent}%`})]}),i[0].permisjonOgMangel&&k.jsxs(he,{gap:"4",children:[k.jsx(Ae,{size:"small",children:((c=t.PermisjonsbeskrivelseType.find(m=>{var y;return m.kode===((y=i[0].permisjonOgMangel)==null?void 0:y.type)}))==null?void 0:c.navn)??""}),k.jsx(se,{size:"small",children:k.jsx(tt,{dateStringFom:i[0].permisjonOgMangel.permisjonFom,dateStringTom:i[0].permisjonOgMangel.permisjonTom})})]})]})]})},Pw=e=>{const t=Math.ceil(e.length/25);return Array.from({length:t},(n,s)=>e.slice(s*25,s*25+25)).join("-")};ci.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const qw="_bredde_gb3eb_1",_w="_inline_gb3eb_9",Mw="_arrow_gb3eb_13",Dt={bredde:qw,inline:_w,arrow:Mw},Na=({saksnummer:e,skjæringstidspunkt:t,alleKodeverk:r,radData:n})=>{const[s,a]=f.useState(!1),{inntektsposter:i,arbeidsforholdForRad:o}=n,l=Dw(t,i),u=o.length===1,d=i.length>0&&i.some(g=>g.beløp>0);return k.jsxs(Se,{gap:"8",children:[k.jsx(ci,{saksnummer:e,alleKodeverk:r,radData:n}),d&&k.jsxs(Se,{gap:"2",children:[k.jsx(Ae,{size:"small",children:k.jsx(W,{id:u?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),k.jsx(Se,{gap:"1",children:l.filter((g,c)=>s?!0:c<3).map(g=>k.jsxs(he,{gap:"2",className:Dt.bredde,children:[k.jsx(se,{size:"small",children:k.jsx(W,{id:`ArbeidsforholdInformasjonPanel.${Te(g.fom).month()+1}`})}),k.jsx(se,{size:"small",children:Te(g.fom).year()}),k.jsx(Rr,{}),k.jsx(se,{size:"small",children:k.jsx(Aa,{beløp:g.beløp})})]},g.fom))}),k.jsxs(Qa,{onClick:g=>{g.preventDefault(),a(!s)},href:"",children:[k.jsx("span",{children:k.jsx(se,{size:"small",className:Dt.inline,children:k.jsx(W,{id:s?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),s?k.jsx(sd,{className:Dt.arrow}):k.jsx(js,{className:Dt.arrow})]})]}),!d&&k.jsx(Ae,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})},Dw=(e,t)=>{const n=Te(e).subtract(1,"month").startOf("month"),s=n.subtract(12,"month"),a=[];for(let i=n;i.isAfter(s);i=i.subtract(1,"month")){const o=i.format(xn),l=t.find(u=>Te(u.fom).startOf("month").format(xn)===o);a.push({beløp:(l==null?void 0:l.beløp)||0,fom:o})}return a};Na.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const Sw="_hjelpetekst_tezw4_1",xw="_alertStripe_tezw4_5",Fw="_hjelpetekstInnhold_tezw4_9",Vw="_svg_tezw4_14",St={hjelpetekst:Sw,alertStripe:xw,hjelpetekstInnhold:Fw,svg:Vw},Lw=li(3),Bw=di(1500),Cw=ng(1),Kw=rg(100),lg=({behandlingUuid:e,behandlingVersjon:t,radData:r,isReadOnly:n,registrerArbeidsforhold:s,lagreVurdering:a,lukkArbeidsforholdRad:i,oppdaterTabell:o})=>{var p,j,h,T,O;const l=Zn(),u={saksbehandlersVurdering:(p=r.avklaring)==null?void 0:p.saksbehandlersVurdering,begrunnelse:(j=r.avklaring)==null?void 0:j.begrunnelse,fom:(h=r.avklaring)==null?void 0:h.fom,tom:(T=r.avklaring)==null?void 0:T.tom,stillingsprosent:(O=r.avklaring)==null?void 0:O.stillingsprosent},d=Fs({defaultValues:u});fi(d.formState.isDirty);const g=d.watch("saksbehandlersVurdering"),c=()=>{i(),d.reset(u)},m=r.inntektsmeldingerForRad[0],y=R=>{const P=Uw(o,r,m,R);return R.saksbehandlersVurdering===fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?s({behandlingUuid:e,behandlingVersjon:t,internArbeidsforholdRef:m.internArbeidsforholdId,arbeidsgiverNavn:r.arbeidsgiverNavn,arbeidsgiverIdent:m.arbeidsgiverIdent,vurdering:fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:R.begrunnelse,fom:R.fom,tom:R.tom,stillingsprosent:R.stillingsprosent}).then(P).finally(()=>d.reset(R)):a({behandlingUuid:e,behandlingVersjon:t,vurdering:R.saksbehandlersVurdering,begrunnelse:R.begrunnelse,arbeidsgiverIdent:m.arbeidsgiverIdent,internArbeidsforholdRef:m.internArbeidsforholdId}).then(P).finally(()=>d.reset(R))},b=f.useRef(null),[I,A]=f.useState(!1),w=()=>A(R=>!R);return k.jsxs(Se,{gap:"8",children:[k.jsx("div",{className:St.alertStripe,children:k.jsx(yt,{variant:"info",children:k.jsx(W,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),k.jsx(Ls,{formMethods:d,onSubmit:y,children:k.jsxs(Se,{gap:"4",children:[k.jsx(Zu,{name:"saksbehandlersVurdering",label:k.jsxs(he,{gap:"2",children:[k.jsx(W,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),k.jsx(id,{className:St.svg,ref:b,onClick:w,title:l.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),k.jsx(Sr,{open:I,onClose:w,anchorEl:b.current,className:St.hjelpetekst,children:k.jsx(Sr.Content,{className:St.hjelpetekstInnhold,children:k.jsx(se,{children:k.jsx(W,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[mn],isReadOnly:n,radios:[{label:l.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:fe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:l.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:fe.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:l.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),g===fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&k.jsxs(he,{gap:"4",children:[k.jsx(ot,{name:"fom",label:k.jsx(W,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[mn,lt],isReadOnly:n}),k.jsx(ot,{name:"tom",label:k.jsx(W,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[lt,Gw(d.getValues)],isReadOnly:n}),k.jsx(Ea,{name:"stillingsprosent",label:k.jsx(W,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:R=>{const P=parseInt(R.toString(),10);return Number.isNaN(P)?R:P},validate:[mn,tg,Cw,Kw],readOnly:n,maxLength:3})]}),k.jsx(oi,{label:k.jsx(W,{id:"ManglendeOpplysningerForm.Begrunn"}),name:"begrunnelse",validate:[mn,Lw,Bw,gi],maxLength:1500,readOnly:n}),!n&&k.jsxs(he,{gap:"4",children:[k.jsx(Pe,{size:"small",variant:"secondary",loading:d.formState.isSubmitting,disabled:!d.formState.isDirty||d.formState.isSubmitting,children:k.jsx(W,{id:"ManglendeOpplysningerForm.Lagre"})}),k.jsx(Pe,{size:"small",variant:"tertiary",loading:!1,disabled:d.formState.isSubmitting,onClick:c,type:"button",children:k.jsx(W,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})},Gw=e=>t=>{const r=e("fom");return r&&t?ui(r)(t):null},Uw=(e,t,r,n)=>()=>{e(s=>s.map(a=>{if(r.arbeidsgiverIdent===a.arbeidsgiverIdent){const o=n.saksbehandlersVurdering===fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:r.arbeidsgiverIdent,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent,begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering}:{begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering};return{...t,avklaring:o}}return a}))};lg.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const Hw="_alertStripe_1jozr_1",Yw="_hjelpetekst_1jozr_5",$w="_hjelpetekstInnhold_1jozr_9",Ww="_svg_1jozr_14",xt={alertStripe:Hw,hjelpetekst:Yw,hjelpetekstInnhold:$w,svg:Ww},zw=li(3),Jw=di(1500),dg=({behandlingUuid:e,behandlingVersjon:t,radData:r,isReadOnly:n,lagreVurdering:s,lukkArbeidsforholdRad:a,oppdaterTabell:i})=>{var j,h;const o=Zn(),{arbeidsforholdForRad:l,inntektsmeldingerForRad:u}=r,d={saksbehandlersVurdering:(j=r.avklaring)==null?void 0:j.saksbehandlersVurdering,begrunnelse:(h=r.avklaring)==null?void 0:h.begrunnelse},g=Fs({defaultValues:d});fi(g.formState.isDirty);const c=l.length===1,m=()=>{a(),g.reset(d)},y=T=>{const O={behandlingUuid:e,behandlingVersjon:t,vurdering:T.saksbehandlersVurdering,arbeidsgiverIdent:r.arbeidsgiverIdent,internArbeidsforholdRef:c?l[0].internArbeidsforholdId:void 0,begrunnelse:T.begrunnelse};return s(O).then(Xw(i,r,T)).finally(()=>g.reset(T))},b=f.useRef(null),[I,A]=f.useState(!1),w=()=>A(T=>!T),p=[{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:fe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:fe.FORTSETT_UTEN_INNTEKTSMELDING}];return r.erPrivatPerson||p.splice(1,0,{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:fe.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),k.jsx(Ls,{formMethods:g,onSubmit:y,children:k.jsxs(Se,{gap:"4",children:[!c&&u.length>0&&k.jsx("div",{className:xt.alertStripe,children:k.jsx(yt,{variant:"info",children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),k.jsx(Zu,{name:"saksbehandlersVurdering",label:k.jsxs(he,{gap:"2",children:[k.jsx(W,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),k.jsx(id,{ref:b,onClick:w,className:xt.svg,title:o.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),k.jsx(Sr,{open:I,onClose:w,anchorEl:b.current,className:xt.hjelpetekst,children:k.jsx(Sr.Content,{className:xt.hjelpetekstInnhold,children:k.jsxs(Se,{gap:"4",children:[k.jsx(se,{children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),k.jsx(se,{children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),k.jsx(se,{children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[mn],isReadOnly:n,radios:p}),k.jsx(oi,{label:k.jsx(W,{id:c?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),name:"begrunnelse",validate:[mn,zw,Jw,gi],maxLength:1500,readOnly:n}),!n&&k.jsxs(he,{gap:"4",children:[k.jsx(Pe,{size:"small",variant:"secondary",loading:g.formState.isSubmitting,disabled:!g.formState.isDirty||g.formState.isSubmitting,children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.Lagre"})}),k.jsx(Pe,{size:"small",variant:"tertiary",loading:!1,disabled:g.formState.isSubmitting,onClick:m,type:"button",children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})},Xw=(e,t,r)=>()=>{e(n=>n.map(s=>s.arbeidsgiverIdent===t.arbeidsgiverIdent?{...t,avklaring:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}}:s))};dg.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const ut="342352362",Qw=li(3),Zw=di(1500),eA=ng(1),nA=rg(100),ki=({behandlingUuid:e,behandlingVersjon:t,isReadOnly:r,registrerArbeidsforhold:n,radData:s,lukkArbeidsforholdRad:a,erOverstyrt:i,oppdaterTabell:o,erNyttArbeidsforhold:l=!1})=>{var A,w,p,j,h;const u=Zn(),[d,g]=f.useState(!1),c={fom:(A=s==null?void 0:s.avklaring)==null?void 0:A.fom,tom:(w=s==null?void 0:s.avklaring)==null?void 0:w.tom,stillingsprosent:(p=s==null?void 0:s.avklaring)==null?void 0:p.stillingsprosent,begrunnelse:(j=s==null?void 0:s.avklaring)==null?void 0:j.begrunnelse,arbeidsgiverNavn:(h=s==null?void 0:s.avklaring)==null?void 0:h.arbeidsgiverNavn},m=Fs({defaultValues:c});fi(m.formState.isDirty);const y=()=>{a(),m.reset(c)},b=T=>{const O=Go(fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,e,t,T);return n(O).then(()=>{o(tA(T)),m.reset(T),l&&a()})},I=()=>{const T=m.getValues(),O=Go(fe.FJERN_FRA_BEHANDLINGEN,e,t,T);n(O).then(sA(o,a,l))};return k.jsxs(Se,{gap:"4",children:[!s&&k.jsx(As,{size:"small",children:k.jsx(W,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),k.jsx(Ls,{formMethods:m,onSubmit:b,children:k.jsxs(Se,{gap:"6",children:[k.jsxs(he,{gap:"4",children:[i&&k.jsxs(k.Fragment,{children:[k.jsx(Ea,{name:"arbeidsgiverNavn",label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[mn],readOnly:r||!i}),k.jsx(ot,{name:"fom",label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[mn,lt],isReadOnly:r||!i}),k.jsx(ot,{name:"tom",label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[lt,rA(m.getValues)],isReadOnly:r||!i})]}),k.jsx(Ea,{name:"stillingsprosent",label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:T=>{const O=parseInt(T.toString(),10);return Number.isNaN(O)?T:O},validate:[mn,tg,eA,nA],readOnly:r||!i,maxLength:3})]}),k.jsx(oi,{label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Begrunn"}),name:"begrunnelse",validate:[mn,Qw,Zw,gi],maxLength:1500,readOnly:r||!i}),i&&k.jsxs(he,{gap:"4",children:[k.jsx(Pe,{size:"small",variant:"secondary",loading:m.formState.isSubmitting,disabled:!m.formState.isDirty||m.formState.isSubmitting,children:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Lagre"})}),k.jsx(Pe,{size:"small",variant:"tertiary",loading:!1,disabled:m.formState.isSubmitting,onClick:y,type:"button",children:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),s&&k.jsxs(k.Fragment,{children:[k.jsx(Rr,{}),k.jsx(Pe,{size:"small",variant:"tertiary",loading:!1,disabled:m.formState.isSubmitting,onClick:()=>g(!0),type:"button",icon:k.jsx(wm,{"aria-hidden":!0}),children:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),d&&k.jsx(E0,{text:u.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:I,cancel:()=>g(!1),showModal:!0})]})},Go=(e,t,r,n)=>({vurdering:e,behandlingUuid:t,behandlingVersjon:r,arbeidsgiverIdent:ut,begrunnelse:n.begrunnelse,arbeidsgiverNavn:n.arbeidsgiverNavn,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent}),rA=e=>t=>{const r=e("fom");return t&&r?ui(r)(t):null},tA=e=>t=>{const r={erPrivatPerson:!1,arbeidsgiverIdent:ut,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER},inntektsmeldingerForRad:[],inntektsposter:[],arbeidsforholdForRad:[]},n=t.findIndex(s=>s.arbeidsgiverIdent===ut);return n===-1?t.concat(r):t.map((s,a)=>a===n?r:s)},sA=(e,t,r)=>()=>{e(n=>n.filter(s=>s.arbeidsgiverIdent!==ut)),r&&t()};ki.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const aA="_exclamationmarkIcon_1a4yb_1",iA="_checkmarkIcon_1a4yb_8",oA="_panelOpen_1a4yb_15",lA="_panelOpenAp_1a4yb_24",dA="_row_1a4yb_34",uA="_isOpen_1a4yb_40",gA="_isApOpen_1a4yb_44",Qr={exclamationmarkIcon:aA,checkmarkIcon:iA,panelOpen:oA,panelOpenAp:lA,row:dA,isOpen:uA,isApOpen:gA},mA=hw.bind(Qr),ug=({saksnummer:e,behandlingUuid:t,behandlingVersjon:r,radData:n,isReadOnly:s,erOverstyrt:a,oppdaterTabell:i,registrerArbeidsforhold:o,lagreVurdering:l,toggleÅpenRad:u,erRadÅpen:d,alleKodeverk:g,skjæringstidspunkt:c})=>{const m=Zn(),{inntektsmeldingerForRad:y,arbeidsforholdForRad:b,arbeidsgiverNavn:I,avklaring:A,årsak:w}=n,p=(A==null?void 0:A.saksbehandlersVurdering)===fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,j=b.length>0&&y.length>0&&!w,h=w===Le.MANGLENDE_INNTEKTSMELDING,T=w===Le.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,O=!!w&&!(A!=null&&A.saksbehandlersVurdering),R=b.length>0&&y.length===0&&!w&&!p,P=b.length===0&&y.length>0&&!w,x=cA(b,A);return k.jsxs(Oe.ExpandableRow,{open:d,onOpenChange:u,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:mA("row",{isOpen:d,isApOpen:O}),content:k.jsxs(Se,{gap:"4",className:O?Qr.panelOpenAp:Qr.panelOpen,children:[p&&k.jsx(ki,{behandlingUuid:t,behandlingVersjon:r,isReadOnly:!1,registrerArbeidsforhold:o,radData:n,lukkArbeidsforholdRad:u,erOverstyrt:a,oppdaterTabell:i}),j&&k.jsx(ci,{saksnummer:e,alleKodeverk:g,radData:n}),P&&k.jsx(dt,{saksnummer:e,arbeidsforhold:b.length>0?b[0]:void 0,inntektsmelding:y[0],skalViseArbeidsforholdId:!1,alleKodeverk:g,radData:n}),h&&k.jsxs(k.Fragment,{children:[k.jsx(Na,{saksnummer:e,skjæringstidspunkt:c,alleKodeverk:g,radData:n}),k.jsx(dg,{behandlingUuid:t,behandlingVersjon:r,isReadOnly:s,radData:n,lagreVurdering:l,lukkArbeidsforholdRad:u,oppdaterTabell:i})]}),T&&k.jsxs(k.Fragment,{children:[k.jsx(dt,{saksnummer:e,inntektsmelding:y[0],skalViseArbeidsforholdId:y.length>1,radData:n,alleKodeverk:g}),k.jsx(lg,{behandlingUuid:t,behandlingVersjon:r,radData:n,isReadOnly:s,registrerArbeidsforhold:o,lagreVurdering:l,lukkArbeidsforholdRad:u,oppdaterTabell:i})]}),R&&k.jsx(Na,{saksnummer:e,skjæringstidspunkt:c,alleKodeverk:g,radData:n})]}),children:[k.jsxs(Oe.DataCell,{children:[!O&&k.jsx(zg,{title:m.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:Qr.checkmarkIcon}),O&&k.jsx(qa,{title:m.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:Qr.exclamationmarkIcon})]}),k.jsx(Oe.DataCell,{children:k.jsx(se,{children:I})}),k.jsx(Oe.DataCell,{children:k.jsx(se,{children:x!=null&&x.fom?k.jsx(tt,{dateStringFom:x.fom,dateStringTom:x.tom}):"-"})}),k.jsx(Oe.DataCell,{children:k.jsx(se,{children:k.jsx(W,{id:fA(p,b.length>0)})})}),k.jsx(Oe.DataCell,{children:k.jsxs(se,{children:[b.length<2&&y.length===1&&k.jsx(Is,{dateString:y[0].motattDato}),!h&&b.length>1&&y.length===b.length&&k.jsx(W,{id:"ArbeidsforholdRad.Mottatt"}),(p||h&&y.length<b.length)&&k.jsx(W,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})},fA=(e,t)=>e?"ArbeidsforholdRad.Saksbehandler":t?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",cA=(e,t)=>{if((t==null?void 0:t.saksbehandlersVurdering)===fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||(t==null?void 0:t.saksbehandlersVurdering)===fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:t==null?void 0:t.fom,tom:t==null?void 0:t.tom};const r=e.reduce((n,s)=>({fom:n.fom&&Te(n.fom).isBefore(s.fom)?n.fom:s.fom,tom:n.tom&&Te(n.tom).isAfter(s.tom)?n.tom:s.tom}),{fom:void 0,tom:void 0});return r.fom?r:void 0};ug.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const kA="_alertStripe_mucgx_5",vA={alertStripe:kA},gg=({behandling:e,aksjonspunkt:t,readOnly:r,arbeidOgInntekt:n,registrerArbeidsforhold:s,erOverstyrer:a,tabellData:i,settÅpneRadIndexer:o,setErOverstyrt:l,oppdaterTabell:u})=>{const d=Zn(),{arbeidsforhold:g,inntektsmeldinger:c}=n,[m,y]=f.useState(!1),[b,I]=f.useState(!1),A=()=>{l(!0),y(!0);const h=i.findIndex(T=>{var O;return((O=T.avklaring)==null?void 0:O.saksbehandlersVurdering)===fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER});h!==-1&&o([h])},w=pA(i,t),p=i.every(h=>h.arbeidsgiverIdent!==ut),j=(t==null?void 0:t.status)===$e.OPPRETTET;return k.jsxs(Se,{gap:"8",children:[k.jsxs(he,{gap:"4",children:[k.jsx(As,{size:"small",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),a&&j&&!r&&k.jsx(c0,{onClick:A}),k.jsx(Rr,{}),k.jsx(se,{size:"small",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Zl(n.skjæringstidspunkt)}})})]}),k.jsxs(Se,{gap:"4",children:[w.length>0&&k.jsx(f0,{children:w.map(h=>d.formatMessage({id:h})).join(" ")}),g.length===0&&c.length===0&&a&&k.jsx("div",{className:vA.alertStripe,children:k.jsx(yt,{variant:"info",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),m&&p&&!b&&k.jsx("div",{children:k.jsx(Pe,{size:"small",variant:"tertiary",icon:k.jsx(km,{"aria-hidden":!0}),onClick:()=>I(!0),children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),b&&k.jsx(ki,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:s,lukkArbeidsforholdRad:()=>I(!1),oppdaterTabell:u,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})},pA=(e,t)=>{const r=e.some(i=>i.årsak===Le.MANGLENDE_INNTEKTSMELDING),n=e.some(i=>i.årsak===Le.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),s=(t==null?void 0:t.status)===$e.OPPRETTET,a=[];return s&&r&&a.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),s&&n&&a.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),a};gg.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const yA="_alertStripe_7z8j7_1",bA="_headerRow_7z8j7_5",Uo={alertStripe:yA,headerRow:bA},mg=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:s,settBehandlingPåVentCallback:a,åpneForNyVurdering:i})=>{const[o,l]=f.useState(!1),[u,d]=f.useState(!1),[g,c]=f.useState(!1),{alleKodeverk:m,submitCallback:y,aksjonspunkterForPanel:b,behandling:I,fagsak:A,isReadOnly:w}=Ag(),p=b.length>0?b[0]:void 0,{mellomlagretFormData:j,setMellomlagretFormData:h}=jg(),[T,O]=f.useState(j??pw(e,t)),[R,P]=f.useState(Co(T)),x=dw();f.useEffect(()=>()=>{h(T)},[T]);const V=G=>{R.some(ne=>ne===G)?P(R.filter(ne=>ne!==G)):P(R.concat(G))},M=f.useRef(null),N=G=>{var ne;O(G),P(Co(G(T))),(ne=M==null?void 0:M.current)==null||ne.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},_=()=>{l(!0),y({kode:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},S=()=>{l(!0),i()},B=G=>{l(!0),d(!1);const{frist:ne,ventearsak:re}=G;re&&a({frist:ne,ventearsak:re})},C=T.some(G=>{var ne,re,le;return((ne=G.avklaring)==null?void 0:ne.saksbehandlersVurdering)===fe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||((re=G.avklaring)==null?void 0:re.saksbehandlersVurdering)===fe.MELDING_TIL_ARBEIDSGIVER_NAV_NO||((le=G.avklaring)==null?void 0:le.saksbehandlersVurdering)===fe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}),L=T.every(G=>!G.årsak||G.årsak&&G.avklaring),F=p===void 0,H=(p==null?void 0:p.status)===$e.UTFORT,X=(p==null?void 0:p.status)===$e.OPPRETTET,ae=!w&&(H||s&&F),Fe=!w&&X&&L&&!x&&C,ee=!w&&X&&L&&!x&&!C;return k.jsxs(Se,{gap:"4",children:[k.jsx(gg,{behandling:I,aksjonspunkt:p,readOnly:w,arbeidOgInntekt:e,registrerArbeidsforhold:r,erOverstyrer:s,tabellData:T,settÅpneRadIndexer:P,setErOverstyrt:c,oppdaterTabell:N}),k.jsxs(Oe,{ref:M,children:[k.jsx(Oe.Header,{children:k.jsxs(Oe.Row,{className:Uo.headerRow,children:[k.jsx(Oe.HeaderCell,{scope:"col"}),k.jsx(Oe.HeaderCell,{scope:"col",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),k.jsx(Oe.HeaderCell,{scope:"col",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),k.jsx(Oe.HeaderCell,{scope:"col",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),k.jsx(Oe.HeaderCell,{scope:"col",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),k.jsx(Oe.HeaderCell,{scope:"col"})]})}),k.jsx(Oe.Body,{children:T.map((G,ne)=>k.jsx(ug,{saksnummer:A.saksnummer,behandlingUuid:I.uuid,behandlingVersjon:I.versjon,radData:G,skjæringstidspunkt:e.skjæringstidspunkt,isReadOnly:w||H||F,registrerArbeidsforhold:r,lagreVurdering:n,toggleÅpenRad:()=>V(ne),erOverstyrt:g,oppdaterTabell:N,erRadÅpen:R.includes(ne),alleKodeverk:m},`${G.arbeidsgiverNavn}${G.arbeidsgiverIdent}`))})]}),Fe&&k.jsxs("div",{children:[k.jsx(Pe,{size:"small",variant:"primary",disabled:o,onClick:()=>d(!0),type:"button",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),k.jsx(ag,{submitCallback:B,cancelEvent:()=>d(!1),defaultVenteårsak:We.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:m.Venteårsak,erTilbakekreving:!1,showModal:u,frist:null})]}),ee&&k.jsx("div",{children:k.jsx(Pe,{size:"small",variant:"primary",disabled:o,loading:o,onClick:_,type:"button",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),ae&&k.jsxs(Se,{gap:"4",children:[k.jsx("div",{className:Uo.alertStripe,children:k.jsx(yt,{variant:"info",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),k.jsx("div",{children:k.jsx(Pe,{size:"small",variant:"secondary",disabled:o,loading:o,onClick:S,type:"button",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};mg.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const hA={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},IA=er(hA),Ra=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:s,settBehandlingPåVentCallback:a,åpneForNyVurdering:i})=>k.jsx(ed,{value:IA,children:k.jsx(ig,{children:k.jsx(mg,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:s,settBehandlingPåVentCallback:a,åpneForNyVurdering:i})})});Ra.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:Ft}=__STORYBOOK_MODULE_ACTIONS__,Xn="342352362",Ze={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},EA={title:"fakta/fakta-arbeid-og-inntekter",component:Ra,decorators:[Eg,Og],args:{arbeidsgiverOpplysningerPerId:{},lagreVurdering:Ft("onLagreVurdering"),registrerArbeidsforhold:Ft("onRegistrerArbeidsforhold"),åpneForNyVurdering:Ft("onÅpneForNyVurdering"),settBehandlingPåVentCallback:Ft("onSettBehandlingPåVentCallback"),erOverstyrer:!1},render:e=>k.jsx(Ra,{...e})},Vt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:$e.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Le.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Pr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Lt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:$e.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Le.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Bt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:$e.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Le.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:fe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,begrunnelse:"Vil innehente inntektsmelding fordi..."}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},Ct={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:$e.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[{...Ze,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Le.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Kt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:$e.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:Le.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},Gt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:$e.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:Le.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Ut={args:{aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2"}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Ht={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:$e.OPPRETTET}],arbeidsgiverOpplysningerPerId:{},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Yt={args:{arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},$t={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:$e.OPPRETTET}],arbeidsgiverOpplysningerPerId:{[Xn]:{erPrivatPerson:!1,identifikator:Xn,navn:"Telenor",referanse:Xn}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:Xn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Wt={args:{arbeidsgiverOpplysningerPerId:{[Xn]:{erPrivatPerson:!1,identifikator:Xn,navn:"Telenor",referanse:Xn}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:Xn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0,isReadOnly:!0}},zt={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Pr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Jt={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2021-12-01",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",stillingsprosent:80,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"41925090",motattDato:"2021-11-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Xt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:$e.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Le.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Ze,arbeidsgiverIdent:"910909092",eksternArbeidsforholdId:void 0,inntektPrMnd:1e4,internArbeidsforholdId:void 0,kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"55599999",motattDato:"2021-12-06",refusjonPrMnd:5e3,journalpostId:"1",dokumentId:"2",årsak:Le.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Qt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:$e.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"9374546382674846453452720241327384837356378478393893847474783",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Le.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Le.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001sdsfdsdfsdfwer",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8cwds",kontaktpersonNavn:"Espen Solstråle",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"1",motattDato:"2021-12-01",årsak:Le.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD},{...Ze,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c8wew",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Le.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Zt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:$e.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:void 0,permisjonOgMangel:{permisjonFom:"2022-10-01",type:Pr.PERMITTERING},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d3",stillingsprosent:80,tom:"2021-12-31",årsak:Le.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Pr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:void 0}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},es={args:{erOverstyrer:!0,isReadOnly:!0,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[{...Ze,inntektPrMnd:4e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"947064649",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975324",dokumentId:"549168225",motattDato:"2022-02-15",årsak:void 0,begrunnelse:void 0,saksbehandlersVurdering:void 0}],arbeidsforhold:[],inntekter:[],skjæringstidspunkt:"2022-02-16"}}},ns={args:{erOverstyrer:!1,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"f98840f3-e74b-4255-ac33-b1cdcdb60311",eksternArbeidsforholdId:"2",fom:"2002-02-16",tom:"9999-12-31",stillingsprosent:20,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[],skjæringstidspunkt:"2022-02-05"}}},rs={args:{erOverstyrer:!1,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:$e.OPPRETTET}],arbeidsgiverOpplysningerPerId:{342352362:{erPrivatPerson:!1,referanse:"342352362",identifikator:"342352362",navn:"Lagt til av saksbehandler"},947064649:{erPrivatPerson:!1,referanse:"947064649",identifikator:"947064649",navn:"SJOKKERENDE ELEKTRIKER"},972674818:{erPrivatPerson:!1,referanse:"972674818",identifikator:"972674818",navn:"PENGELØS SPAREBANK"}},arbeidOgInntekt:{inntektsmeldinger:[{...Ze,inntektPrMnd:2e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"972674818",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975527",dokumentId:"549168458",motattDato:"2022-02-16",årsak:void 0,begrunnelse:"her vil jeg mase på AG",saksbehandlersVurdering:fe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING}],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"6e220db0-5cdf-410f-b8a0-a78ac4ff87a1",eksternArbeidsforholdId:"2",fom:"2018-10-01",tom:"9999-12-31",stillingsprosent:50,årsak:Le.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:fe.FORTSETT_UTEN_INNTEKTSMELDING,begrunnelse:"her trenger jeg ikke IM. ja ja"},{arbeidsgiverIdent:"972674818",internArbeidsforholdId:"3aee54db-af17-4b18-8c9c-897be1f4d572",eksternArbeidsforholdId:"1",fom:"2000-05-13",tom:"9999-12-31",stillingsprosent:100,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[{arbeidsgiverIdent:"947064649",inntekter:[{beløp:15e3,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]},{arbeidsgiverIdent:"972674818",inntekter:[{beløp:2e4,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]}],skjæringstidspunkt:"2022-02-15"}}},ts={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Pr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}};var Ho,Yo,$o;Vt.parameters={...Vt.parameters,docs:{...(Ho=Vt.parameters)==null?void 0:Ho.docs,source:{originalSource:`{
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
}`,...($o=(Yo=Vt.parameters)==null?void 0:Yo.docs)==null?void 0:$o.source}}};var Wo,zo,Jo;Lt.parameters={...Lt.parameters,docs:{...(Wo=Lt.parameters)==null?void 0:Wo.docs,source:{originalSource:`{
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
}`,...(Jo=(zo=Lt.parameters)==null?void 0:zo.docs)==null?void 0:Jo.source}}};var Xo,Qo,Zo;Bt.parameters={...Bt.parameters,docs:{...(Xo=Bt.parameters)==null?void 0:Xo.docs,source:{originalSource:`{
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
}`,...(Zo=(Qo=Bt.parameters)==null?void 0:Qo.docs)==null?void 0:Zo.source}}};var el,nl,rl;Ct.parameters={...Ct.parameters,docs:{...(el=Ct.parameters)==null?void 0:el.docs,source:{originalSource:`{
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
}`,...(rl=(nl=Ct.parameters)==null?void 0:nl.docs)==null?void 0:rl.source}}};var tl,sl,al;Kt.parameters={...Kt.parameters,docs:{...(tl=Kt.parameters)==null?void 0:tl.docs,source:{originalSource:`{
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
}`,...(al=(sl=Kt.parameters)==null?void 0:sl.docs)==null?void 0:al.source}}};var il,ol,ll;Gt.parameters={...Gt.parameters,docs:{...(il=Gt.parameters)==null?void 0:il.docs,source:{originalSource:`{
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
}`,...(ll=(ol=Gt.parameters)==null?void 0:ol.docs)==null?void 0:ll.source}}};var dl,ul,gl;Ut.parameters={...Ut.parameters,docs:{...(dl=Ut.parameters)==null?void 0:dl.docs,source:{originalSource:`{
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
}`,...(gl=(ul=Ut.parameters)==null?void 0:ul.docs)==null?void 0:gl.source}}};var ml,fl,cl;Ht.parameters={...Ht.parameters,docs:{...(ml=Ht.parameters)==null?void 0:ml.docs,source:{originalSource:`{
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
}`,...(cl=(fl=Ht.parameters)==null?void 0:fl.docs)==null?void 0:cl.source}}};var kl,vl,pl;Yt.parameters={...Yt.parameters,docs:{...(kl=Yt.parameters)==null?void 0:kl.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(pl=(vl=Yt.parameters)==null?void 0:vl.docs)==null?void 0:pl.source}}};var yl,bl,hl;$t.parameters={...$t.parameters,docs:{...(yl=$t.parameters)==null?void 0:yl.docs,source:{originalSource:`{
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
}`,...(hl=(bl=$t.parameters)==null?void 0:bl.docs)==null?void 0:hl.source}}};var Il,wl,Al;Wt.parameters={...Wt.parameters,docs:{...(Il=Wt.parameters)==null?void 0:Il.docs,source:{originalSource:`{
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
}`,...(Al=(wl=Wt.parameters)==null?void 0:wl.docs)==null?void 0:Al.source}}};var jl,El,Ol;zt.parameters={...zt.parameters,docs:{...(jl=zt.parameters)==null?void 0:jl.docs,source:{originalSource:`{
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
}`,...(Ol=(El=zt.parameters)==null?void 0:El.docs)==null?void 0:Ol.source}}};var Tl,Nl,Rl;Jt.parameters={...Jt.parameters,docs:{...(Tl=Jt.parameters)==null?void 0:Tl.docs,source:{originalSource:`{
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
}`,...(Rl=(Nl=Jt.parameters)==null?void 0:Nl.docs)==null?void 0:Rl.source}}};var Pl,ql,_l;Xt.parameters={...Xt.parameters,docs:{...(Pl=Xt.parameters)==null?void 0:Pl.docs,source:{originalSource:`{
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
}`,...(_l=(ql=Xt.parameters)==null?void 0:ql.docs)==null?void 0:_l.source}}};var Ml,Dl,Sl;Qt.parameters={...Qt.parameters,docs:{...(Ml=Qt.parameters)==null?void 0:Ml.docs,source:{originalSource:`{
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
}`,...(Sl=(Dl=Qt.parameters)==null?void 0:Dl.docs)==null?void 0:Sl.source}}};var xl,Fl,Vl;Zt.parameters={...Zt.parameters,docs:{...(xl=Zt.parameters)==null?void 0:xl.docs,source:{originalSource:`{
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
}`,...(Vl=(Fl=Zt.parameters)==null?void 0:Fl.docs)==null?void 0:Vl.source}}};var Ll,Bl,Cl;es.parameters={...es.parameters,docs:{...(Ll=es.parameters)==null?void 0:Ll.docs,source:{originalSource:`{
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
}`,...(Cl=(Bl=es.parameters)==null?void 0:Bl.docs)==null?void 0:Cl.source}}};var Kl,Gl,Ul;ns.parameters={...ns.parameters,docs:{...(Kl=ns.parameters)==null?void 0:Kl.docs,source:{originalSource:`{
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
}`,...(Ul=(Gl=ns.parameters)==null?void 0:Gl.docs)==null?void 0:Ul.source}}};var Hl,Yl,$l;rs.parameters={...rs.parameters,docs:{...(Hl=rs.parameters)==null?void 0:Hl.docs,source:{originalSource:`{
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
}`,...($l=(Yl=rs.parameters)==null?void 0:Yl.docs)==null?void 0:$l.source}}};var Wl,zl,Jl;ts.parameters={...ts.parameters,docs:{...(Wl=ts.parameters)==null?void 0:Wl.docs,source:{originalSource:`{
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
}`,...(Jl=(zl=ts.parameters)==null?void 0:zl.docs)==null?void 0:Jl.source}}};const OA=["InnhentInntektsmelding","InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret","InnhentInntektsmeldingDerBehandlingErAvsluttet","AvklarManglendeArbeidsforhold","AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet","AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig","IngenAksjonspunktMenTilbakehoppMuligForOverstyrer","SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer","SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer","ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet","ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet","ArbeidsforholdErOK","ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet","FlereArbeidsforholdOgInntekstemeldinger","ArbeidsforholdMedSammeOrgNr","ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre","FoerRegisterinnhenting","AutomatiskIgnorertInntektsmelding","EtterAtEtterspurtInntektsmeldingErKommet","SkalViseFødselsnummerForPrivatperson"];export{Wt as ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet,$t as ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet,zt as ArbeidsforholdErOK,Jt as ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet,Qt as ArbeidsforholdMedSammeOrgNr,Zt as ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre,ns as AutomatiskIgnorertInntektsmelding,Ct as AvklarManglendeArbeidsforhold,Kt as AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet,Gt as AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig,rs as EtterAtEtterspurtInntektsmeldingErKommet,Xt as FlereArbeidsforholdOgInntekstemeldinger,es as FoerRegisterinnhenting,Ut as IngenAksjonspunktMenTilbakehoppMuligForOverstyrer,Vt as InnhentInntektsmelding,Bt as InnhentInntektsmeldingDerBehandlingErAvsluttet,Lt as InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret,Yt as SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer,Ht as SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer,ts as SkalViseFødselsnummerForPrivatperson,OA as __namedExportsOrder,EA as default};
