var sg=Object.defineProperty;var ag=(e,t,r)=>t in e?sg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var z=(e,t,r)=>ag(e,typeof t!="symbol"?t+"":t,r);import{g as Fo,r as f,u as Qn,_ as ti,s as si,c as lt,a as re,R as p,b as ks,d as vs,T as ig,S as xr,m as lg,e as Fr,f as Vo,h as Zn,q as og,t as dg,o as Lo,P as ug,i as Oe,j as Dn,n as jr,k as c,l as Bo,A as Ye,p as gg,v as mg,w as fg,x as cg}from"./iframe-BHRAFov_.js";import{r as kg}from"./index-Ce-NbUxq.js";var ba=kg();const Zt=Fo(ba);function vg(e,t){var r=e.values,n=ti(e,["values"]),s=t.values,a=ti(t,["values"]);return si(s,r)&&si(n,a)}function Co(e){var t=Qn(),r=t.formatMessage,n=t.textComponent,s=n===void 0?f.Fragment:n,a=e.id,i=e.description,l=e.defaultMessage,o=e.values,u=e.children,d=e.tagName,g=d===void 0?s:d,k=e.ignoreTag,m={id:a,description:i,defaultMessage:l},y=r(m,o,{ignoreTag:k});return typeof u=="function"?u(Array.isArray(y)?y:[y]):g?f.createElement(g,null,y):f.createElement(f.Fragment,null,y)}Co.displayName="FormattedMessage";var Y=f.memo(Co,vg);Y.displayName="MemoizedFormattedMessage";var rn=(e=>(e.TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FODSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(rn||{}),fe=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(fe||{}),$e=(e=>(e.AVV_DOK="AVV_DOK",e.AVV_FODSEL="AVV_FODSEL",e.UTV_FRIST="UTV_FRIST",e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG",e.VENT_PÅ_BRUKERTILBAKEMELDING="VENT_PÅ_BRUKERTILBAKEMELDING",e.VENT_UTLAND_TRYGD="VENT_UTLAND_TRYGD",e.UTVIDET_TILSVAR_FRIST="UTV_TIL_FRIST",e.ENDRE_TILKJENT_YTELSE="ENDRE_TILKJENT_YTELSE",e.VENT_PÅ_MULIG_MOTREGNING="VENT_PÅ_MULIG_MOTREGNING",e.AVV_RESPONS_REVURDERING="AVV_RESPONS_REVURDERING",e.FOR_TIDLIG_SOKNAD="FOR_TIDLIG_SOKNAD",e.VENT_PÅ_SISTE_AAP_ELLER_DP_MELDEKORT="VENT_PÅ_SISTE_AAP_MELDEKORT",e.ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER="ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",e.ANKE_OVERSENDT_TIL_TRYGDERETTEN="ANKE_OVERSENDT_TIL_TRYGDERETTEN",e.VENT_PÅ_KORRIGERT_BESTEBEREGNING="VENT_PÅ_KORRIGERT_BESTEBEREGNING",e.VENT_OPDT_INNTEKTSMELDING="VENT_OPDT_INNTEKTSMELDING",e.VENT_OPPTJENING_OPPLYSNINGER="VENT_OPPTJENING_OPPLYSNINGER",e.VENT_INNTEKT_RAPPORTERINGSFRIST="VENT_INNTEKT_RAPPORTERINGSFRIST",e.VENT_MANGLENDE_SYKEMELDING="VENT_MANGLENDE_SYKEMELDING",e.VENT_SØKNAD_SENDT_INFORMASJONSBREV="VENT_SØKNAD_SENDT_INFORMASJONSBREV",e.VENT_ÅPEN_BEHANDLING="VENT_ÅPEN_BEHANDLING",e.VENT_KABAL="VENT_KABAL",e))($e||{}),Pr=(e=>(e.PERMISJON="PERMISJON",e.PERMITTERING="PERMITTERING",e.PERMISJON_VED_MILITÆRTJENESTE="PERMISJON_VED_MILITÆRTJENESTE",e.UTDANNINGSPERMISJON_LOVFESTET="UTDANNINGSPERMISJON_LOVFESTET",e.UTDANNINGSPERMISJON="UTDANNINGSPERMISJON",e.UTDANNINGSPERMISJON_IKKE_LOVFESTET="UTDANNINGSPERMISJON_IKKE_LOVFESTET",e.VELFERDSPERMISJON="VELFERDSPERMISJON",e.ANNEN_PERMISJON_LOVFESTET="ANNEN_PERMISJON_LOVFESTET",e.PERMISJON_MED_FORELDREPENGER="PERMISJON_MED_FORELDREPENGER",e.ANNEN_PERMISJON_IKKE_LOVFESTET="ANNEN_PERMISJON_IKKE_LOVFESTET",e))(Pr||{});const pg=(e,t,r)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${t}&dokumentId=${r}`,yg=(e,t,r)=>{const n=window.open(e,t);n&&setTimeout(()=>{n.document.title=r},1e3)},Vr=e=>lt({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var bg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ko=f.forwardRef((e,t)=>{var{className:r,size:n="medium",as:s="p",spacing:a,truncate:i,weight:l="regular",align:o,visuallyHidden:u,textColor:d}=e,g=bg(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=re();return p.createElement(s,Object.assign({},g,{ref:t,className:k(r,"navds-body-long",`navds-body-long--${n}`,Vr({spacing:a,truncate:i,weight:l,align:o,visuallyHidden:u,textColor:d}))}))});var hg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const se=f.forwardRef((e,t)=>{var{className:r,size:n="medium",as:s="p",spacing:a,truncate:i,weight:l="regular",align:o,visuallyHidden:u,textColor:d}=e,g=hg(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=re();return p.createElement(s,Object.assign({},g,{ref:t,className:k(r,"navds-body-short",`navds-body-short--${n}`,Vr({spacing:a,truncate:i,weight:l,align:o,visuallyHidden:u,textColor:d}))}))});var Ig=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const qr=f.forwardRef((e,t)=>{var{className:r,size:n="medium",spacing:s,uppercase:a,as:i="p",truncate:l,weight:o="regular",align:u,visuallyHidden:d,textColor:g}=e,k=Ig(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:m}=re();return p.createElement(i,Object.assign({},k,{ref:t,className:m(r,"navds-detail",Vr({spacing:s,truncate:l,weight:o,align:u,visuallyHidden:d,textColor:g,uppercase:a}),{"navds-detail--small":n==="small"})}))});var wg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ot=f.forwardRef((e,t)=>{var{children:r,className:n,size:s,spacing:a,as:i="p",showIcon:l=!1}=e,o=wg(e,["children","className","size","spacing","as","showIcon"]);const{cn:u}=re();return p.createElement(i,Object.assign({},o,{ref:t,className:u("navds-error-message","navds-label",n,Vr({spacing:a}),{"navds-label--small":s==="small","navds-error-message--show-icon":l})}),l&&p.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var Ag=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ps=f.forwardRef((e,t)=>{var{level:r="1",size:n,className:s,as:a,spacing:i,align:l,visuallyHidden:o,textColor:u}=e,d=Ag(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=re(),k=a??`h${r}`;return p.createElement(k,Object.assign({},d,{ref:t,className:g(s,"navds-heading",`navds-heading--${n}`,Vr({spacing:i,align:l,visuallyHidden:o,textColor:u}))}))});var jg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};f.forwardRef((e,t)=>{var{className:r,spacing:n,as:s="p"}=e,a=jg(e,["className","spacing","as"]);const{cn:i}=re();return p.createElement(s,Object.assign({},a,{ref:t,className:i(r,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Eg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const je=f.forwardRef((e,t)=>{var{className:r,size:n="medium",as:s="label",spacing:a,visuallyHidden:i,textColor:l}=e,o=Eg(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:u}=re();return p.createElement(s,Object.assign({},o,{ref:t,className:u(r,"navds-label",Vr({spacing:a,visuallyHidden:i,textColor:l}),{"navds-label--small":n==="small"})}))});function Go(e,t=166,r=!1){let n;function s(...a){const i=()=>{n=void 0,e.apply(this,a)};!n&&r&&i(),clearTimeout(n),n=setTimeout(i,t)}return s.clear=()=>{clearTimeout(n)},s}function Xe(e,t){const r=Object.entries(e).filter(([n])=>!t.includes(n));return Object.fromEntries(r)}const _r=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{};let ai=0;function Tg(e){const[t,r]=f.useState(e),n=e||t;return f.useEffect(()=>{t==null&&(ai+=1,r(`aksel-id-${ai}`))},[t]),n}const ii=p.useId;function wn(e){var t;if(ii!==void 0){const r=ii();return e??r.replace(/(:)/g,"")}return(t=Tg(e))!==null&&t!==void 0?t:""}function et(e,t=[]){const r=f.useRef(e);return f.useEffect(()=>{r.current=e}),f.useCallback((...n)=>{var s;return(s=r.current)===null||s===void 0?void 0:s.call(r,...n)},t)}function nt({value:e,defaultValue:t,onChange:r}){const n=et(r),[s,a]=f.useState(t),i=e!==void 0,l=i?e:s,o=et(u=>{const g=typeof u=="function"?u(l):u;i||a(g),n(g)},[i,n,l]);return[l,o]}let li=0;function Og(e){const[t,r]=f.useState(e),n=e||t;return f.useEffect(()=>{t==null&&(li+=1,r(`aksel-icon-${li}`))},[t]),n}const oi=p.useId;function Re(e){var t;return oi!==void 0?oi().replace(/(:)/g,""):(t=Og(e))!==null&&t!==void 0?t:""}var Ng=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Rg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Ng(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var Pg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const qg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Pg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var _g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Mg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=_g(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var Dg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Sg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Dg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var xg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Fg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=xg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var Vg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Lg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Vg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Bg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ys=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Bg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Cg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Uo=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Cg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var Kg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ha=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Kg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Gg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ug=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Gg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var Hg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Yg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Hg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var $g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Wg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=$g(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var zg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Jg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=zg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var Xg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ho=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Xg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Qg=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Zg=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=Qg(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var em=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const nm=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=em(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var rm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const tm=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=rm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var sm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Yo=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=sm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var am=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const im=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=am(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var lm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const om=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=lm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var dm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const um=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=dm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var gm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const $o=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=gm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var mm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const fm=f.forwardRef((e,t)=>{var{title:r,titleId:n}=e,s=mm(e,["title","titleId"]);let a=Re();return a=r?n||"title-"+a:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":a},s),r?f.createElement("title",{id:a},r):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Tr(e,t,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e==null||e(s),r===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}const[cm,dt]=ks({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),km=typeof window<"u"&&window.matchMedia===void 0,vm=(e,t)=>{const[r,n]=f.useState(t);return f.useEffect(()=>{if(km)return;const s=window.matchMedia(e);n(s.matches);const a=i=>{n(i.matches)};return s.addEventListener("change",a),()=>{s.removeEventListener("change",a)}},[e]),r};function mn(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function ze(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let s;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,l=r!=null&&r.width?String(r.width):i;s=e.formattingValues[l]||e.formattingValues[i]}else{const i=e.defaultWidth,l=r!=null&&r.width?String(r.width):e.defaultWidth;s=e.values[l]||e.values[i]}const a=e.argumentCallback?e.argumentCallback(t):t;return s[a]}}function Je(e){return(t,r={})=>{const n=r.width,s=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],a=t.match(s);if(!a)return null;const i=a[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(l)?ym(l,g=>g.test(i)):pm(l,g=>g.test(i));let u;u=e.valueCallback?e.valueCallback(o):o,u=r.valueCallback?r.valueCallback(u):u;const d=t.slice(i.length);return{value:u,rest:d}}}function pm(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function ym(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function Ia(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const s=n[0],a=t.match(e.parsePattern);if(!a)return null;let i=e.valueCallback?e.valueCallback(a[0]):a[0];i=r.valueCallback?r.valueCallback(i):i;const l=t.slice(s.length);return{value:i,rest:l}}}const Wo=6048e5,bm=864e5,hm=6e4,Im=36e5,wm=1e3,di=Symbol.for("constructDateFrom");function ve(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&di in e?e[di](t):e instanceof Date?new e.constructor(t):new Date(t)}function Lr(e,...t){const r=ve.bind(null,t.find(n=>typeof n=="object"));return t.map(r)}let Am={};function kr(){return Am}function le(e,t){return ve(t||e,e)}function Ln(e,t){var l,o,u,d;const r=kr(),n=(t==null?void 0:t.weekStartsOn)??((o=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:o.weekStartsOn)??r.weekStartsOn??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,s=le(e,t==null?void 0:t.in),a=s.getDay(),i=(a<n?7:0)+a-n;return s.setDate(s.getDate()-i),s.setHours(0,0,0,0),s}const jm={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},zo=(e,t,r)=>{let n;const s=jm[e];return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n},Em={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Jo=(e,t,r,n)=>Em[e],Tm={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Om={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Nm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Rm={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Pm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},_m=(e,t)=>{const r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Xo={ordinalNumber:_m,era:ze({values:Tm,defaultWidth:"wide"}),quarter:ze({values:Om,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ze({values:Nm,defaultWidth:"wide"}),day:ze({values:Rm,defaultWidth:"wide"}),dayPeriod:ze({values:Pm,defaultWidth:"wide",formattingValues:qm,defaultFormattingWidth:"wide"})},Mm=/^(\d+)(th|st|nd|rd)?/i,Dm=/\d+/i,Sm={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},xm={any:[/^b/i,/^(a|c)/i]},Fm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Vm={any:[/1/i,/2/i,/3/i,/4/i]},Lm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Bm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Cm={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Km={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Gm={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Um={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Qo={ordinalNumber:Ia({matchPattern:Mm,parsePattern:Dm,valueCallback:e=>parseInt(e,10)}),era:Je({matchPatterns:Sm,defaultMatchWidth:"wide",parsePatterns:xm,defaultParseWidth:"any"}),quarter:Je({matchPatterns:Fm,defaultMatchWidth:"wide",parsePatterns:Vm,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Je({matchPatterns:Lm,defaultMatchWidth:"wide",parsePatterns:Bm,defaultParseWidth:"any"}),day:Je({matchPatterns:Cm,defaultMatchWidth:"wide",parsePatterns:Km,defaultParseWidth:"any"}),dayPeriod:Je({matchPatterns:Gm,defaultMatchWidth:"any",parsePatterns:Um,defaultParseWidth:"any"})},Hm={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},Ym={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},$m={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Wm={date:mn({formats:Hm,defaultWidth:"full"}),time:mn({formats:Ym,defaultWidth:"full"}),dateTime:mn({formats:$m,defaultWidth:"full"})},Zo={code:"en-GB",formatDistance:zo,formatLong:Wm,formatRelative:Jo,localize:Xo,match:Qo,options:{weekStartsOn:1,firstWeekContainsDate:4}},zm={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Jm={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Xm={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Qm={date:mn({formats:zm,defaultWidth:"full"}),time:mn({formats:Jm,defaultWidth:"full"}),dateTime:mn({formats:Xm,defaultWidth:"full"})},bs={code:"en-US",formatDistance:zo,formatLong:Qm,formatRelative:Jo,localize:Xo,match:Qo,options:{weekStartsOn:0,firstWeekContainsDate:1}},Zm={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},ef=(e,t,r)=>{let n;const s=Zm[e];return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" siden":n},nf={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},rf={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},tf={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},sf={date:mn({formats:nf,defaultWidth:"full"}),time:mn({formats:rf,defaultWidth:"full"}),dateTime:mn({formats:tf,defaultWidth:"full"})},af={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},lf=(e,t,r,n)=>af[e],of={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},df={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},uf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},gf={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},mf={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},ff=(e,t)=>Number(e)+".",cf={ordinalNumber:ff,era:ze({values:of,defaultWidth:"wide"}),quarter:ze({values:df,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ze({values:uf,defaultWidth:"wide"}),day:ze({values:gf,defaultWidth:"wide"}),dayPeriod:ze({values:mf,defaultWidth:"wide"})},kf=/^(\d+)\.?/i,vf=/\d+/i,pf={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},yf={any:[/^f/i,/^e/i]},bf={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},hf={any:[/1/i,/2/i,/3/i,/4/i]},If={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},wf={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Af={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},jf={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ef={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Tf={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Of={ordinalNumber:Ia({matchPattern:kf,parsePattern:vf,valueCallback:e=>parseInt(e,10)}),era:Je({matchPatterns:pf,defaultMatchWidth:"wide",parsePatterns:yf,defaultParseWidth:"any"}),quarter:Je({matchPatterns:bf,defaultMatchWidth:"wide",parsePatterns:hf,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Je({matchPatterns:If,defaultMatchWidth:"wide",parsePatterns:wf,defaultParseWidth:"any"}),day:Je({matchPatterns:Af,defaultMatchWidth:"wide",parsePatterns:jf,defaultParseWidth:"any"}),dayPeriod:Je({matchPatterns:Ef,defaultMatchWidth:"any",parsePatterns:Tf,defaultParseWidth:"any"})},ed={code:"nb",formatDistance:ef,formatLong:sf,formatRelative:lf,localize:cf,match:Of,options:{weekStartsOn:1,firstWeekContainsDate:4}},Nf={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},Rf=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],Pf=(e,t,r)=>{let n;const s=Nf[e];return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",t<13?Rf[t]:String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+n:n+" sidan":n},qf={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},_f={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Mf={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Df={date:mn({formats:qf,defaultWidth:"full"}),time:mn({formats:_f,defaultWidth:"full"}),dateTime:mn({formats:Mf,defaultWidth:"full"})},Sf={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},xf=(e,t,r,n)=>Sf[e],Ff={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Vf={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Lf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Bf={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},Cf={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},Kf=(e,t)=>Number(e)+".",Gf={ordinalNumber:Kf,era:ze({values:Ff,defaultWidth:"wide"}),quarter:ze({values:Vf,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ze({values:Lf,defaultWidth:"wide"}),day:ze({values:Bf,defaultWidth:"wide"}),dayPeriod:ze({values:Cf,defaultWidth:"wide"})},Uf=/^(\d+)\.?/i,Hf=/\d+/i,Yf={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},$f={any:[/^f/i,/^e/i]},Wf={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},zf={any:[/1/i,/2/i,/3/i,/4/i]},Jf={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Xf={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Qf={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},Zf={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},ec={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},nc={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},rc={ordinalNumber:Ia({matchPattern:Uf,parsePattern:Hf,valueCallback:e=>parseInt(e,10)}),era:Je({matchPatterns:Yf,defaultMatchWidth:"wide",parsePatterns:$f,defaultParseWidth:"any"}),quarter:Je({matchPatterns:Wf,defaultMatchWidth:"wide",parsePatterns:zf,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Je({matchPatterns:Jf,defaultMatchWidth:"wide",parsePatterns:Xf,defaultParseWidth:"any"}),day:Je({matchPatterns:Qf,defaultMatchWidth:"wide",parsePatterns:Zf,defaultParseWidth:"any"}),dayPeriod:Je({matchPatterns:ec,defaultMatchWidth:"any",parsePatterns:nc,defaultParseWidth:"any"})},nd={code:"nn",formatDistance:Pf,formatLong:Df,formatRelative:xf,localize:Gf,match:rc,options:{weekStartsOn:1,firstWeekContainsDate:4}},tc={global:{dateLocale:ed,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},sc=f.createContext({locale:tc}),hs=()=>f.useContext(sc);var ac=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ic=f.forwardRef((e,t)=>{var r,n,s,{rootElement:a,asChild:i}=e,l=ac(e,["rootElement","asChild"]);const o=vs(!1),u=(r=hs())===null||r===void 0?void 0:r.rootElement,d=(n=a??u)!==null&&n!==void 0?n:(s=globalThis==null?void 0:globalThis.document)===null||s===void 0?void 0:s.body,g=i?xr:"div";return o?d?Zt.createPortal(p.createElement(ig,{theme:o.theme,asChild:!0,hasBackground:!1},p.createElement(g,Object.assign({ref:t,"data-aksel-portal":""},l))),d):null:d?Zt.createPortal(p.createElement(g,Object.assign({ref:t,"data-aksel-portal":""},l)),d):null});function ui(e){return e.sort((t,r)=>{const n=t.compareDocumentPosition(r);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const lc=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function gi(e,t,r){let n=e+1;return r&&n>=t&&(n=0),n}function mi(e,t,r){let n=e-1;return r&&n<0&&(n=t),n}const Fs=e=>e;class oc{constructor(){this.descendants=new Map,this.register=t=>{if(t!=null)return lc(t)?this.registerNode(t):r=>{this.registerNode(r,t)}},this.unregister=t=>{this.descendants.delete(t);const r=ui(Array.from(this.descendants.keys()));this.assignIndex(r)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=t=>{this.descendants.forEach(r=>{const n=t.indexOf(r.node);r.index=n,r.node.dataset.index=r.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((r,n)=>r.index-n.index),this.enabledValues=()=>this.values().filter(t=>!t.disabled),this.item=t=>{if(this.count()!==0)return this.values()[t]},this.enabledItem=t=>{if(this.enabledCount()!==0)return this.enabledValues()[t]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const t=this.enabledValues().length-1;return this.enabledItem(t)},this.indexOf=t=>{var r,n;return t&&(n=(r=this.descendants.get(t))===null||r===void 0?void 0:r.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=t=>t==null?-1:this.enabledValues().findIndex(r=>r.node.isSameNode(t)),this.next=(t,r=!0)=>{const n=gi(t,this.count(),r);return this.item(n)},this.nextEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const s=this.enabledIndexOf(n.node),a=gi(s,this.enabledCount(),r);return this.enabledItem(a)},this.prev=(t,r=!0)=>{const n=mi(t,this.count()-1,r);return this.item(n)},this.prevEnabled=(t,r=!0)=>{const n=this.item(t);if(!n)return;const s=this.enabledIndexOf(n.node),a=mi(s,this.enabledCount()-1,r);return this.enabledItem(a)},this.registerNode=(t,r)=>{if(!t)return;const n=this.descendants.get(t);if(n){this.descendants.set(t,Object.assign({index:n.index,node:t},r));return}const s=Array.from(this.descendants.keys()).concat(t),a=ui(s);r!=null&&r.disabled&&(r.disabled=!!r.disabled);const i=Object.assign({node:t,index:-1},r);this.descendants.set(t,i),this.assignIndex(a)}}}function dc(){const[e,t]=ks({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),r=Fs(a=>p.createElement(e,Object.assign({},a.value),a.children));function n(a){const i=t(),[l,o]=f.useState(-1),u=f.useRef(null);_r(()=>()=>{u.current&&i.unregister(u.current)},[]),_r(()=>{if(!u.current)return;const g=Number(u.current.dataset.index);l!==g&&!Number.isNaN(g)&&o(g)});const d=Fs(a?i.register(a):i.register);return{descendants:i,index:l,enabledIndex:i.enabledIndexOf(u.current),register:lg([d,u])}}function s(){return f.useRef(new oc).current}return[r,t,s,n]}function uc(e,t=globalThis==null?void 0:globalThis.document){const r=et(e);f.useEffect(()=>{const n=s=>{s.key==="Escape"&&r(s)};return t.addEventListener("keydown",n,!0),()=>t.removeEventListener("keydown",n,!0)},[r,t])}const rd={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function td(e,t,r,{discrete:n}={discrete:!1}){if(!t)return;const s=r.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});s.addEventListener(e,t,{once:!0}),n&&s?Zt.flushSync(()=>s.dispatchEvent(a)):s.dispatchEvent(a)}function gc(e,t=globalThis==null?void 0:globalThis.document){const r=et(e),n=f.useRef(!1);return f.useEffect(()=>{const s=a=>{if(a.target&&!n.current){const i={originalEvent:a};td(rd.FOCUS_OUTSIDE,r,i)}};return t.addEventListener("focusin",s),()=>t.removeEventListener("focusin",s)},[t,r]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function mc(e,t=globalThis==null?void 0:globalThis.document){const r=et(e),n=f.useRef(!1),s=f.useRef(()=>{});return f.useEffect(()=>{const a=l=>{function o(){td(rd.POINTER_DOWN_OUTSIDE,r,{originalEvent:l},{discrete:!0})}l.target&&!n.current?l.pointerType==="touch"?(t.removeEventListener("click",s.current),s.current=o,t.addEventListener("click",s.current,{once:!0})):o():t.removeEventListener("click",s.current),n.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",a),t.removeEventListener("click",s.current)}},[t,r]),{onPointerDownCapture:()=>{n.current=!0}}}var fc=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const[cc,kc,vc,pc]=dc();let br=0,fi;const yc=f.forwardRef((e,t)=>kc(!1)?p.createElement(ci,Object.assign({ref:t},e)):p.createElement(bc,null,p.createElement(ci,Object.assign({ref:t},e)))),bc=({children:e})=>{const t=vc();return p.createElement(cc,{value:t},e)},ci=f.forwardRef((e,t)=>{var r,{children:n,asChild:s,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:l,onInteractOutside:o,onDismiss:u,safeZone:d,disableOutsidePointerEvents:g=!1,enabled:k=!0}=e,m=fc(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,y]=f.useState({}),{register:h,index:b,descendants:w}=pc({disableOutsidePointerEvents:g,disabled:!k,forceUpdate:()=>y({})}),[v,I]=f.useState(null),E=Fr(I,h,t),j=(r=v==null?void 0:v.ownerDocument)!==null&&r!==void 0?r:globalThis==null?void 0:globalThis.document,N=f.useRef(!1),T=f.useRef(!1),R=(()=>{let O=-1;return w.enabledValues().forEach((S,L)=>{S.disableOutsidePointerEvents&&(O=L)}),{isPointerEventsEnabled:b>=O,isBodyPointerEventsDisabled:br>0,pointerStyle:b>=O&&br>0?"auto":void 0}})();function P(O){var q,S;if(!(d!=null&&d.anchor)&&!(d!=null&&d.dismissable)||!k)return;O.defaultPrevented||(N.current=!0,O.detail.originalEvent.type==="pointerdown"&&(T.current=!0));const L=O.target;O.detail.originalEvent.type==="pointerdown"?(!((q=d==null?void 0:d.anchor)===null||q===void 0)&&q.contains(L)||L===(d==null?void 0:d.anchor))&&O.preventDefault():!(L instanceof HTMLElement&&![d==null?void 0:d.anchor,d==null?void 0:d.dismissable].some(C=>C==null?void 0:C.contains(L))&&!L.contains((S=d==null?void 0:d.dismissable)!==null&&S!==void 0?S:null))&&O.preventDefault(),O.detail.originalEvent.type==="focusin"&&T.current&&O.preventDefault(),T.current=!1,N.current=!1}const x=mc(O=>{!R.isPointerEventsEnabled||!k||(i==null||i(O),o==null||o(O),d&&P(O),!O.defaultPrevented&&u&&u())},j),F=gc(O=>{k&&(l==null||l(O),o==null||o(O),d&&P(O),!O.defaultPrevented&&u&&u())},j);uc(O=>{!k||!(b===w.enabledCount()-1)||(a==null||a(O),!O.defaultPrevented&&u&&(O.preventDefault(),u()))},j),f.useEffect(()=>{if(!(!v||!k||!g))return br===0&&(fi=j.body.style.pointerEvents,j.body.style.pointerEvents="none"),br++,()=>{br===1&&(j.body.style.pointerEvents=fi),br--}},[v,j,g,w,k]),f.useEffect(()=>()=>w.values().forEach(O=>O.forceUpdate()),[w,v]);const M=s?xr:"div";return p.createElement(M,Object.assign({ref:E},m,{onFocusCapture:F.onFocusCapture,onBlurCapture:F.onBlurCapture,onPointerDownCapture:x.onPointerDownCapture,style:Object.assign({pointerEvents:R.pointerStyle},m.style)}),n)}),Mr=Math.min,dr=Math.max,es=Math.round,wt=Math.floor,Rn=e=>({x:e,y:e}),hc={left:"right",right:"left",bottom:"top",top:"bottom"},Ic={start:"end",end:"start"};function na(e,t,r){return dr(e,Mr(t,r))}function ut(e,t){return typeof e=="function"?e(t):e}function ur(e){return e.split("-")[0]}function gt(e){return e.split("-")[1]}function sd(e){return e==="x"?"y":"x"}function wa(e){return e==="y"?"height":"width"}function Dr(e){return["top","bottom"].includes(ur(e))?"y":"x"}function Aa(e){return sd(Dr(e))}function wc(e,t,r){r===void 0&&(r=!1);const n=gt(e),s=Aa(e),a=wa(s);let i=s==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(i=ns(i)),[i,ns(i)]}function Ac(e){const t=ns(e);return[ra(e),t,ra(t)]}function ra(e){return e.replace(/start|end/g,t=>Ic[t])}function jc(e,t,r){const n=["left","right"],s=["right","left"],a=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return r?t?s:n:t?n:s;case"left":case"right":return t?a:i;default:return[]}}function Ec(e,t,r,n){const s=gt(e);let a=jc(ur(e),r==="start",n);return s&&(a=a.map(i=>i+"-"+s),t&&(a=a.concat(a.map(ra)))),a}function ns(e){return e.replace(/left|right|bottom|top/g,t=>hc[t])}function Tc(e){return{top:0,right:0,bottom:0,left:0,...e}}function ad(e){return typeof e!="number"?Tc(e):{top:e,right:e,bottom:e,left:e}}function rs(e){const{x:t,y:r,width:n,height:s}=e;return{width:n,height:s,top:r,left:t,right:t+n,bottom:r+s,x:t,y:r}}function ki(e,t,r){let{reference:n,floating:s}=e;const a=Dr(t),i=Aa(t),l=wa(i),o=ur(t),u=a==="y",d=n.x+n.width/2-s.width/2,g=n.y+n.height/2-s.height/2,k=n[l]/2-s[l]/2;let m;switch(o){case"top":m={x:d,y:n.y-s.height};break;case"bottom":m={x:d,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:g};break;case"left":m={x:n.x-s.width,y:g};break;default:m={x:n.x,y:n.y}}switch(gt(t)){case"start":m[i]-=k*(r&&u?-1:1);break;case"end":m[i]+=k*(r&&u?-1:1);break}return m}const Oc=async(e,t,r)=>{const{placement:n="bottom",strategy:s="absolute",middleware:a=[],platform:i}=r,l=a.filter(Boolean),o=await(i.isRTL==null?void 0:i.isRTL(t));let u=await i.getElementRects({reference:e,floating:t,strategy:s}),{x:d,y:g}=ki(u,n,o),k=n,m={},y=0;for(let h=0;h<l.length;h++){const{name:b,fn:w}=l[h],{x:v,y:I,data:E,reset:j}=await w({x:d,y:g,initialPlacement:n,placement:k,strategy:s,middlewareData:m,rects:u,platform:i,elements:{reference:e,floating:t}});d=v??d,g=I??g,m={...m,[b]:{...m[b],...E}},j&&y<=50&&(y++,typeof j=="object"&&(j.placement&&(k=j.placement),j.rects&&(u=j.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:s}):j.rects),{x:d,y:g}=ki(u,k,o)),h=-1)}return{x:d,y:g,placement:k,strategy:s,middlewareData:m}};async function id(e,t){var r;t===void 0&&(t={});const{x:n,y:s,platform:a,rects:i,elements:l,strategy:o}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:g="floating",altBoundary:k=!1,padding:m=0}=ut(t,e),y=ad(m),b=l[k?g==="floating"?"reference":"floating":g],w=rs(await a.getClippingRect({element:(r=await(a.isElement==null?void 0:a.isElement(b)))==null||r?b:b.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:o})),v=g==="floating"?{x:n,y:s,width:i.floating.width,height:i.floating.height}:i.reference,I=await(a.getOffsetParent==null?void 0:a.getOffsetParent(l.floating)),E=await(a.isElement==null?void 0:a.isElement(I))?await(a.getScale==null?void 0:a.getScale(I))||{x:1,y:1}:{x:1,y:1},j=rs(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:I,strategy:o}):v);return{top:(w.top-j.top+y.top)/E.y,bottom:(j.bottom-w.bottom+y.bottom)/E.y,left:(w.left-j.left+y.left)/E.x,right:(j.right-w.right+y.right)/E.x}}const Nc=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:s,rects:a,platform:i,elements:l,middlewareData:o}=t,{element:u,padding:d=0}=ut(e,t)||{};if(u==null)return{};const g=ad(d),k={x:r,y:n},m=Aa(s),y=wa(m),h=await i.getDimensions(u),b=m==="y",w=b?"top":"left",v=b?"bottom":"right",I=b?"clientHeight":"clientWidth",E=a.reference[y]+a.reference[m]-k[m]-a.floating[y],j=k[m]-a.reference[m],N=await(i.getOffsetParent==null?void 0:i.getOffsetParent(u));let T=N?N[I]:0;(!T||!await(i.isElement==null?void 0:i.isElement(N)))&&(T=l.floating[I]||a.floating[y]);const R=E/2-j/2,P=T/2-h[y]/2-1,x=Mr(g[w],P),F=Mr(g[v],P),M=x,O=T-h[y]-F,q=T/2-h[y]/2+R,S=na(M,q,O),L=!o.arrow&&gt(s)!=null&&q!==S&&a.reference[y]/2-(q<M?x:F)-h[y]/2<0,B=L?q<M?q-M:q-O:0;return{[m]:k[m]+B,data:{[m]:S,centerOffset:q-S-B,...L&&{alignmentOffset:B}},reset:L}}}),Rc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:s,middlewareData:a,rects:i,initialPlacement:l,platform:o,elements:u}=t,{mainAxis:d=!0,crossAxis:g=!0,fallbackPlacements:k,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:h=!0,...b}=ut(e,t);if((r=a.arrow)!=null&&r.alignmentOffset)return{};const w=ur(s),v=Dr(l),I=ur(l)===l,E=await(o.isRTL==null?void 0:o.isRTL(u.floating)),j=k||(I||!h?[ns(l)]:Ac(l)),N=y!=="none";!k&&N&&j.push(...Ec(l,h,y,E));const T=[l,...j],R=await id(t,b),P=[];let x=((n=a.flip)==null?void 0:n.overflows)||[];if(d&&P.push(R[w]),g){const q=wc(s,i,E);P.push(R[q[0]],R[q[1]])}if(x=[...x,{placement:s,overflows:P}],!P.every(q=>q<=0)){var F,M;const q=(((F=a.flip)==null?void 0:F.index)||0)+1,S=T[q];if(S)return{data:{index:q,overflows:x},reset:{placement:S}};let L=(M=x.filter(B=>B.overflows[0]<=0).sort((B,C)=>B.overflows[1]-C.overflows[1])[0])==null?void 0:M.placement;if(!L)switch(m){case"bestFit":{var O;const B=(O=x.filter(C=>{if(N){const V=Dr(C.placement);return V===v||V==="y"}return!0}).map(C=>[C.placement,C.overflows.filter(V=>V>0).reduce((V,$)=>V+$,0)]).sort((C,V)=>C[1]-V[1])[0])==null?void 0:O[0];B&&(L=B);break}case"initialPlacement":L=l;break}if(s!==L)return{reset:{placement:L}}}return{}}}};async function Pc(e,t){const{placement:r,platform:n,elements:s}=e,a=await(n.isRTL==null?void 0:n.isRTL(s.floating)),i=ur(r),l=gt(r),o=Dr(r)==="y",u=["left","top"].includes(i)?-1:1,d=a&&o?-1:1,g=ut(t,e);let{mainAxis:k,crossAxis:m,alignmentAxis:y}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return l&&typeof y=="number"&&(m=l==="end"?y*-1:y),o?{x:m*d,y:k*u}:{x:k*u,y:m*d}}const qc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:s,y:a,placement:i,middlewareData:l}=t,o=await Pc(t,e);return i===((r=l.offset)==null?void 0:r.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:s+o.x,y:a+o.y,data:{...o,placement:i}}}}},_c=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:s}=t,{mainAxis:a=!0,crossAxis:i=!1,limiter:l={fn:b=>{let{x:w,y:v}=b;return{x:w,y:v}}},...o}=ut(e,t),u={x:r,y:n},d=await id(t,o),g=Dr(ur(s)),k=sd(g);let m=u[k],y=u[g];if(a){const b=k==="y"?"top":"left",w=k==="y"?"bottom":"right",v=m+d[b],I=m-d[w];m=na(v,m,I)}if(i){const b=g==="y"?"top":"left",w=g==="y"?"bottom":"right",v=y+d[b],I=y-d[w];y=na(v,y,I)}const h=l.fn({...t,[k]:m,[g]:y});return{...h,data:{x:h.x-r,y:h.y-n,enabled:{[k]:a,[g]:i}}}}}};function Is(){return typeof window<"u"}function Br(e){return ld(e)?(e.nodeName||"").toLowerCase():"#document"}function nn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function qn(e){var t;return(t=(ld(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ld(e){return Is()?e instanceof Node||e instanceof nn(e).Node:!1}function we(e){return Is()?e instanceof Element||e instanceof nn(e).Element:!1}function ln(e){return Is()?e instanceof HTMLElement||e instanceof nn(e).HTMLElement:!1}function ts(e){return!Is()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof nn(e).ShadowRoot}function mt(e){const{overflow:t,overflowX:r,overflowY:n,display:s}=fn(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(s)}function Mc(e){return["table","td","th"].includes(Br(e))}function ws(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function ja(e){const t=As(),r=we(e)?fn(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function Dc(e){let t=Bn(e);for(;ln(t)&&!Fn(t);){if(ja(t))return t;if(ws(t))return null;t=Bn(t)}return null}function As(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Fn(e){return["html","body","#document"].includes(Br(e))}function fn(e){return nn(e).getComputedStyle(e)}function js(e){return we(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Bn(e){if(Br(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ts(e)&&e.host||qn(e);return ts(t)?t.host:t}function od(e){const t=Bn(e);return Fn(t)?e.ownerDocument?e.ownerDocument.body:e.body:ln(t)&&mt(t)?t:od(t)}function Xn(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const s=od(e),a=s===((n=e.ownerDocument)==null?void 0:n.body),i=nn(s);if(a){const l=ta(i);return t.concat(i,i.visualViewport||[],mt(s)?s:[],l&&r?Xn(l):[])}return t.concat(s,Xn(s,[],r))}function ta(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function dd(e){const t=fn(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const s=ln(e),a=s?e.offsetWidth:r,i=s?e.offsetHeight:n,l=es(r)!==a||es(n)!==i;return l&&(r=a,n=i),{width:r,height:n,$:l}}function Ea(e){return we(e)?e:e.contextElement}function Or(e){const t=Ea(e);if(!ln(t))return Rn(1);const r=t.getBoundingClientRect(),{width:n,height:s,$:a}=dd(t);let i=(a?es(r.width):r.width)/n,l=(a?es(r.height):r.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!l||!Number.isFinite(l))&&(l=1),{x:i,y:l}}const Sc=Rn(0);function ud(e){const t=nn(e);return!As()||!t.visualViewport?Sc:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function xc(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==nn(e)?!1:t}function gr(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),a=Ea(e);let i=Rn(1);t&&(n?we(n)&&(i=Or(n)):i=Or(e));const l=xc(a,r,n)?ud(a):Rn(0);let o=(s.left+l.x)/i.x,u=(s.top+l.y)/i.y,d=s.width/i.x,g=s.height/i.y;if(a){const k=nn(a),m=n&&we(n)?nn(n):n;let y=k,h=ta(y);for(;h&&n&&m!==y;){const b=Or(h),w=h.getBoundingClientRect(),v=fn(h),I=w.left+(h.clientLeft+parseFloat(v.paddingLeft))*b.x,E=w.top+(h.clientTop+parseFloat(v.paddingTop))*b.y;o*=b.x,u*=b.y,d*=b.x,g*=b.y,o+=I,u+=E,y=nn(h),h=ta(y)}}return rs({width:d,height:g,x:o,y:u})}function Ta(e,t){const r=js(e).scrollLeft;return t?t.left+r:gr(qn(e)).left+r}function gd(e,t,r){r===void 0&&(r=!1);const n=e.getBoundingClientRect(),s=n.left+t.scrollLeft-(r?0:Ta(e,n)),a=n.top+t.scrollTop;return{x:s,y:a}}function Fc(e){let{elements:t,rect:r,offsetParent:n,strategy:s}=e;const a=s==="fixed",i=qn(n),l=t?ws(t.floating):!1;if(n===i||l&&a)return r;let o={scrollLeft:0,scrollTop:0},u=Rn(1);const d=Rn(0),g=ln(n);if((g||!g&&!a)&&((Br(n)!=="body"||mt(i))&&(o=js(n)),ln(n))){const m=gr(n);u=Or(n),d.x=m.x+n.clientLeft,d.y=m.y+n.clientTop}const k=i&&!g&&!a?gd(i,o,!0):Rn(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-o.scrollLeft*u.x+d.x+k.x,y:r.y*u.y-o.scrollTop*u.y+d.y+k.y}}function Vc(e){return Array.from(e.getClientRects())}function Lc(e){const t=qn(e),r=js(e),n=e.ownerDocument.body,s=dr(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),a=dr(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let i=-r.scrollLeft+Ta(e);const l=-r.scrollTop;return fn(n).direction==="rtl"&&(i+=dr(t.clientWidth,n.clientWidth)-s),{width:s,height:a,x:i,y:l}}function Bc(e,t){const r=nn(e),n=qn(e),s=r.visualViewport;let a=n.clientWidth,i=n.clientHeight,l=0,o=0;if(s){a=s.width,i=s.height;const u=As();(!u||u&&t==="fixed")&&(l=s.offsetLeft,o=s.offsetTop)}return{width:a,height:i,x:l,y:o}}function Cc(e,t){const r=gr(e,!0,t==="fixed"),n=r.top+e.clientTop,s=r.left+e.clientLeft,a=ln(e)?Or(e):Rn(1),i=e.clientWidth*a.x,l=e.clientHeight*a.y,o=s*a.x,u=n*a.y;return{width:i,height:l,x:o,y:u}}function vi(e,t,r){let n;if(t==="viewport")n=Bc(e,r);else if(t==="document")n=Lc(qn(e));else if(we(t))n=Cc(t,r);else{const s=ud(e);n={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return rs(n)}function md(e,t){const r=Bn(e);return r===t||!we(r)||Fn(r)?!1:fn(r).position==="fixed"||md(r,t)}function Kc(e,t){const r=t.get(e);if(r)return r;let n=Xn(e,[],!1).filter(l=>we(l)&&Br(l)!=="body"),s=null;const a=fn(e).position==="fixed";let i=a?Bn(e):e;for(;we(i)&&!Fn(i);){const l=fn(i),o=ja(i);!o&&l.position==="fixed"&&(s=null),(a?!o&&!s:!o&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||mt(i)&&!o&&md(e,i))?n=n.filter(d=>d!==i):s=l,i=Bn(i)}return t.set(e,n),n}function Gc(e){let{element:t,boundary:r,rootBoundary:n,strategy:s}=e;const i=[...r==="clippingAncestors"?ws(t)?[]:Kc(t,this._c):[].concat(r),n],l=i[0],o=i.reduce((u,d)=>{const g=vi(t,d,s);return u.top=dr(g.top,u.top),u.right=Mr(g.right,u.right),u.bottom=Mr(g.bottom,u.bottom),u.left=dr(g.left,u.left),u},vi(t,l,s));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}}function Uc(e){const{width:t,height:r}=dd(e);return{width:t,height:r}}function Hc(e,t,r){const n=ln(t),s=qn(t),a=r==="fixed",i=gr(e,!0,a,t);let l={scrollLeft:0,scrollTop:0};const o=Rn(0);if(n||!n&&!a)if((Br(t)!=="body"||mt(s))&&(l=js(t)),n){const k=gr(t,!0,a,t);o.x=k.x+t.clientLeft,o.y=k.y+t.clientTop}else s&&(o.x=Ta(s));const u=s&&!n&&!a?gd(s,l):Rn(0),d=i.left+l.scrollLeft-o.x-u.x,g=i.top+l.scrollTop-o.y-u.y;return{x:d,y:g,width:i.width,height:i.height}}function Vs(e){return fn(e).position==="static"}function pi(e,t){if(!ln(e)||fn(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return qn(e)===r&&(r=r.ownerDocument.body),r}function fd(e,t){const r=nn(e);if(ws(e))return r;if(!ln(e)){let s=Bn(e);for(;s&&!Fn(s);){if(we(s)&&!Vs(s))return s;s=Bn(s)}return r}let n=pi(e,t);for(;n&&Mc(n)&&Vs(n);)n=pi(n,t);return n&&Fn(n)&&Vs(n)&&!ja(n)?r:n||Dc(e)||r}const Yc=async function(e){const t=this.getOffsetParent||fd,r=this.getDimensions,n=await r(e.floating);return{reference:Hc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function $c(e){return fn(e).direction==="rtl"}const Wc={convertOffsetParentRelativeRectToViewportRelativeRect:Fc,getDocumentElement:qn,getClippingRect:Gc,getOffsetParent:fd,getElementRects:Yc,getClientRects:Vc,getDimensions:Uc,getScale:Or,isElement:we,isRTL:$c};function cd(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function zc(e,t){let r=null,n;const s=qn(e);function a(){var l;clearTimeout(n),(l=r)==null||l.disconnect(),r=null}function i(l,o){l===void 0&&(l=!1),o===void 0&&(o=1),a();const u=e.getBoundingClientRect(),{left:d,top:g,width:k,height:m}=u;if(l||t(),!k||!m)return;const y=wt(g),h=wt(s.clientWidth-(d+k)),b=wt(s.clientHeight-(g+m)),w=wt(d),I={rootMargin:-y+"px "+-h+"px "+-b+"px "+-w+"px",threshold:dr(0,Mr(1,o))||1};let E=!0;function j(N){const T=N[0].intersectionRatio;if(T!==o){if(!E)return i();T?i(!1,T):n=setTimeout(()=>{i(!1,1e-7)},1e3)}T===1&&!cd(u,e.getBoundingClientRect())&&i(),E=!1}try{r=new IntersectionObserver(j,{...I,root:s.ownerDocument})}catch{r=new IntersectionObserver(j,I)}r.observe(e)}return i(!0),a}function sa(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:o=!1}=n,u=Ea(e),d=s||a?[...u?Xn(u):[],...Xn(t)]:[];d.forEach(w=>{s&&w.addEventListener("scroll",r,{passive:!0}),a&&w.addEventListener("resize",r)});const g=u&&l?zc(u,r):null;let k=-1,m=null;i&&(m=new ResizeObserver(w=>{let[v]=w;v&&v.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var I;(I=m)==null||I.observe(t)})),r()}),u&&!o&&m.observe(u),m.observe(t));let y,h=o?gr(e):null;o&&b();function b(){const w=gr(e);h&&!cd(h,w)&&r(),h=w,y=requestAnimationFrame(b)}return r(),()=>{var w;d.forEach(v=>{s&&v.removeEventListener("scroll",r),a&&v.removeEventListener("resize",r)}),g==null||g(),(w=m)==null||w.disconnect(),m=null,o&&cancelAnimationFrame(y)}}const Jc=qc,Xc=_c,Qc=Rc,yi=Nc,Zc=(e,t,r)=>{const n=new Map,s={platform:Wc,...r},a={...s.platform,_c:n};return Oc(e,t,{...s,platform:a})};var Xt=typeof document<"u"?f.useLayoutEffect:f.useEffect;function ss(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,s;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!ss(e[n],t[n]))return!1;return!0}if(s=Object.keys(e),r=s.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,s[n]))return!1;for(n=r;n--!==0;){const a=s[n];if(!(a==="_owner"&&e.$$typeof)&&!ss(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function kd(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function bi(e,t){const r=kd(e);return Math.round(t*r)/r}function Ls(e){const t=f.useRef(e);return Xt(()=>{t.current=e}),t}function ek(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:s,elements:{reference:a,floating:i}={},transform:l=!0,whileElementsMounted:o,open:u}=e,[d,g]=f.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[k,m]=f.useState(n);ss(k,n)||m(n);const[y,h]=f.useState(null),[b,w]=f.useState(null),v=f.useCallback(C=>{C!==N.current&&(N.current=C,h(C))},[]),I=f.useCallback(C=>{C!==T.current&&(T.current=C,w(C))},[]),E=a||y,j=i||b,N=f.useRef(null),T=f.useRef(null),R=f.useRef(d),P=o!=null,x=Ls(o),F=Ls(s),M=Ls(u),O=f.useCallback(()=>{if(!N.current||!T.current)return;const C={placement:t,strategy:r,middleware:k};F.current&&(C.platform=F.current),Zc(N.current,T.current,C).then(V=>{const $={...V,isPositioned:M.current!==!1};q.current&&!ss(R.current,$)&&(R.current=$,ba.flushSync(()=>{g($)}))})},[k,t,r,F,M]);Xt(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,g(C=>({...C,isPositioned:!1})))},[u]);const q=f.useRef(!1);Xt(()=>(q.current=!0,()=>{q.current=!1}),[]),Xt(()=>{if(E&&(N.current=E),j&&(T.current=j),E&&j){if(x.current)return x.current(E,j,O);O()}},[E,j,O,x,P]);const S=f.useMemo(()=>({reference:N,floating:T,setReference:v,setFloating:I}),[v,I]),L=f.useMemo(()=>({reference:E,floating:j}),[E,j]),B=f.useMemo(()=>{const C={position:r,left:0,top:0};if(!L.floating)return C;const V=bi(L.floating,d.x),$=bi(L.floating,d.y);return l?{...C,transform:"translate("+V+"px, "+$+"px)",...kd(L.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:V,top:$}},[r,l,L.floating,d.x,d.y]);return f.useMemo(()=>({...d,update:O,refs:S,elements:L,floatingStyles:B}),[d,O,S,L,B])}const nk=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:s}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?yi({element:n.current,padding:s}).fn(r):{}:n?yi({element:n,padding:s}).fn(r):{}}}},vd=(e,t)=>({...Jc(e),options:[e,t]}),pd=(e,t)=>({...Xc(e),options:[e,t]}),yd=(e,t)=>({...Qc(e),options:[e,t]}),bd=(e,t)=>({...nk(e),options:[e,t]}),hi=/(\w+)/g;function rk(e,t){const r=Array.isArray(e)?e:tk(e);for(const n of t){if(!n)continue;let s=n;for(let a=0;a<r.length;a++){const i=s[r[a]];i!==void 0&&(s=i)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function tk(e){const t=[];let r=hi.exec(e);for(;r;){const[,n,s]=r;t.push(n||s),r=hi.exec(e)}return t}const sk=/{[^}]*}/g;function Kn(e,...t){const r=hs(),n=r.translations||[],s=[...t,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],r.locale[e]];return(i,l)=>{const o=rk(i,s);return l?o.replace(sk,u=>{const d=u.substring(1,u.length-1);if(l[d]===void 0){const g=JSON.stringify(l);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${g}'`)}return l[d]}):o}}function hd(){const e=hs(),t=e.translations||[],r=Array.isArray(t)?t.map(n=>n.global):[t.global];r.push(e.locale.global);for(const n of r)if(n!=null&&n.dateLocale)return n.dateLocale;throw new Error("dateLocale not found.")}var ak=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ik=f.forwardRef((e,t)=>{var{className:r,size:n="medium",title:s,transparent:a=!1,variant:i="neutral",id:l}=e,o=ak(e,["className","size","title","transparent","variant","id"]);const{cn:u}=re(),d=wn(),g=Kn("Loader");return p.createElement("svg",Object.assign({"aria-labelledby":l??`loader-${d}`,ref:t,className:u("navds-loader",r,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":a}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},Xe(o,["children"])),p.createElement("title",{id:l??`loader-${d}`},s||g("title")),p.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),p.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var lk=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Pe=f.forwardRef((e,t)=>{var{as:r="button",variant:n="primary",className:s,children:a,size:i="medium",loading:l=!1,disabled:o,icon:u,iconPosition:d="left",onKeyUp:g}=e,k=lk(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const{cn:m}=re(),y=o||l?Xe(k,["href"]):k,h=b=>{b.key===" "&&!o&&!l&&b.currentTarget.click()};return p.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},y,{ref:t,onKeyUp:Tr(g,h),className:m(s,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":l,"navds-button--icon-only":!!u&&!a,"navds-button--disabled":o??l}),disabled:o??l?!0:void 0}),u&&d==="left"&&p.createElement("span",{className:m("navds-button__icon")},u),l&&p.createElement(ik,{size:i}),a&&p.createElement(je,{as:"span",size:i==="medium"?"medium":"small"},a),u&&d==="right"&&p.createElement("span",{className:m("navds-button__icon")},u))});var ok=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const dk={error:fm,warning:ha,info:Yg,success:Lg},ft=f.forwardRef((e,t)=>{var{children:r,className:n,variant:s,size:a="medium",fullWidth:i=!1,contentMaxWidth:l=!0,inline:o=!1,closeButton:u=!1,onClose:d}=e,g=ok(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:k}=re(),m=Kn("Alert"),y=dk[s];return p.createElement("div",Object.assign({},g,{ref:t,className:k(n,"navds-alert",`navds-alert--${s}`,`navds-alert--${a}`,{"navds-alert--full-width":i,"navds-alert--inline":o,"navds-alert--close-button":u})}),p.createElement(y,{title:m(s),className:k("navds-alert__icon")}),p.createElement(Ko,{as:"div",size:a,className:k("navds-alert__wrapper",l&&"navds-alert__wrapper--maxwidth")},r),u&&!o&&p.createElement("div",{className:k("navds-alert__button-wrapper")},p.createElement(Pe,{className:k("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:p.createElement($o,{title:["error","warning"].includes(s)?m("closeAlert"):m("closeMessage")})})))});function ct(e,t,r){const n=le(e,r==null?void 0:r.in);return isNaN(t)?ve((r==null?void 0:r.in)||e,NaN):(t&&n.setDate(n.getDate()+t),n)}function Oa(e,t,r){const n=le(e,r==null?void 0:r.in);if(isNaN(t))return ve(e,NaN);if(!t)return n;const s=n.getDate(),a=ve(e,n.getTime());a.setMonth(n.getMonth()+t+1,0);const i=a.getDate();return s>=i?a:(n.setFullYear(a.getFullYear(),a.getMonth(),s),n)}function as(e,t){const r=le(e,t==null?void 0:t.in).getDay();return r===0||r===6}function mr(e,t){return Ln(e,{...t,weekStartsOn:1})}function Id(e,t){const r=le(e,t==null?void 0:t.in),n=r.getFullYear(),s=ve(r,0);s.setFullYear(n+1,0,4),s.setHours(0,0,0,0);const a=mr(s),i=ve(r,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const l=mr(i);return r.getTime()>=a.getTime()?n+1:r.getTime()>=l.getTime()?n:n-1}function is(e){const t=le(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function Cn(e,t){const r=le(e,t==null?void 0:t.in);return r.setHours(0,0,0,0),r}function zn(e,t,r){const[n,s]=Lr(r==null?void 0:r.in,e,t),a=Cn(n),i=Cn(s),l=+a-is(a),o=+i-is(i);return Math.round((l-o)/bm)}function uk(e,t){const r=Id(e,t),n=ve(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),mr(n)}function gk(e,t,r){return ct(e,t*7,r)}function Na(e,t,r){return Oa(e,t*12,r)}function mk(e,t){let r,n=t==null?void 0:t.in;return e.forEach(s=>{!n&&typeof s=="object"&&(n=ve.bind(null,s));const a=le(s,n);(!r||r<a||isNaN(+a))&&(r=a)}),ve(n,r||NaN)}function fk(e,t){let r,n=t==null?void 0:t.in;return e.forEach(s=>{!n&&typeof s=="object"&&(n=ve.bind(null,s));const a=le(s,n);(!r||r>a||isNaN(+a))&&(r=a)}),ve(n,r||NaN)}function Ra(e,t,r){const[n,s]=Lr(r==null?void 0:r.in,e,t);return+Cn(n)==+Cn(s)}function wd(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ck(e){return!(!wd(e)&&typeof e!="number"||isNaN(+le(e)))}function kk(e,t,r){const[n,s]=Lr(r==null?void 0:r.in,e,t),a=n.getFullYear()-s.getFullYear(),i=n.getMonth()-s.getMonth();return a*12+i}function Ad(e,t){const r=le(e,t==null?void 0:t.in),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function vk(e,t){const[r,n]=Lr(e,t.start,t.end);return{start:r,end:n}}function jd(e,t){const{start:r,end:n}=vk(t==null?void 0:t.in,e);let s=+r>+n;const a=s?+r:+n,i=s?n:r;i.setHours(0,0,0,0),i.setDate(1);let l=1;const o=[];for(;+i<=a;)o.push(ve(r,i)),i.setMonth(i.getMonth()+l);return s?o.reverse():o}function fr(e,t){const r=le(e,t==null?void 0:t.in);return r.setDate(1),r.setHours(0,0,0,0),r}function Es(e,t){const r=le(e,t==null?void 0:t.in),n=r.getFullYear();return r.setFullYear(n+1,0,0),r.setHours(23,59,59,999),r}function kt(e,t){const r=le(e,t==null?void 0:t.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}function Ed(e,t){var l,o,u,d;const r=kr(),n=(t==null?void 0:t.weekStartsOn)??((o=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:o.weekStartsOn)??r.weekStartsOn??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,s=le(e,t==null?void 0:t.in),a=s.getDay(),i=(a<n?-7:0)+6-(a-n);return s.setDate(s.getDate()+i),s.setHours(23,59,59,999),s}function pk(e,t){return Ed(e,{...t,weekStartsOn:1})}function yk(e,t){const r=le(e,t==null?void 0:t.in);return zn(r,kt(r))+1}function Pa(e,t){const r=le(e,t==null?void 0:t.in),n=+mr(r)-+uk(r);return Math.round(n/Wo)+1}function qa(e,t){var d,g,k,m;const r=le(e,t==null?void 0:t.in),n=r.getFullYear(),s=kr(),a=(t==null?void 0:t.firstWeekContainsDate)??((g=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??s.firstWeekContainsDate??((m=(k=s.locale)==null?void 0:k.options)==null?void 0:m.firstWeekContainsDate)??1,i=ve((t==null?void 0:t.in)||e,0);i.setFullYear(n+1,0,a),i.setHours(0,0,0,0);const l=Ln(i,t),o=ve((t==null?void 0:t.in)||e,0);o.setFullYear(n,0,a),o.setHours(0,0,0,0);const u=Ln(o,t);return+r>=+l?n+1:+r>=+u?n:n-1}function bk(e,t){var l,o,u,d;const r=kr(),n=(t==null?void 0:t.firstWeekContainsDate)??((o=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:o.firstWeekContainsDate)??r.firstWeekContainsDate??((d=(u=r.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,s=qa(e,t),a=ve((t==null?void 0:t.in)||e,0);return a.setFullYear(s,0,n),a.setHours(0,0,0,0),Ln(a,t)}function _a(e,t){const r=le(e,t==null?void 0:t.in),n=+Ln(r,t)-+bk(r,t);return Math.round(n/Wo)+1}function ke(e,t){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}const $n={y(e,t){const r=e.getFullYear(),n=r>0?r:1-r;return ke(t==="yy"?n%100:n,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):ke(r+1,2)},d(e,t){return ke(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return ke(e.getHours()%12||12,t.length)},H(e,t){return ke(e.getHours(),t.length)},m(e,t){return ke(e.getMinutes(),t.length)},s(e,t){return ke(e.getSeconds(),t.length)},S(e,t){const r=t.length,n=e.getMilliseconds(),s=Math.trunc(n*Math.pow(10,r-3));return ke(s,t.length)}},hr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ii={G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const n=e.getFullYear(),s=n>0?n:1-n;return r.ordinalNumber(s,{unit:"year"})}return $n.y(e,t)},Y:function(e,t,r,n){const s=qa(e,n),a=s>0?s:1-s;if(t==="YY"){const i=a%100;return ke(i,2)}return t==="Yo"?r.ordinalNumber(a,{unit:"year"}):ke(a,t.length)},R:function(e,t){const r=Id(e);return ke(r,t.length)},u:function(e,t){const r=e.getFullYear();return ke(r,t.length)},Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return ke(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return ke(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return $n.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return ke(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){const s=_a(e,n);return t==="wo"?r.ordinalNumber(s,{unit:"week"}):ke(s,t.length)},I:function(e,t,r){const n=Pa(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):ke(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):$n.d(e,t)},D:function(e,t,r){const n=yk(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):ke(n,t.length)},E:function(e,t,r){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){const s=e.getDay(),a=(s-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return ke(a,2);case"eo":return r.ordinalNumber(a,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){const s=e.getDay(),a=(s-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return ke(a,t.length);case"co":return r.ordinalNumber(a,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,t,r){const n=e.getDay(),s=n===0?7:n;switch(t){case"i":return String(s);case"ii":return ke(s,t.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){const s=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,t,r){const n=e.getHours();let s;switch(n===12?s=hr.noon:n===0?s=hr.midnight:s=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,t,r){const n=e.getHours();let s;switch(n>=17?s=hr.evening:n>=12?s=hr.afternoon:n>=4?s=hr.morning:s=hr.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return $n.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):$n.H(e,t)},K:function(e,t,r){const n=e.getHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):ke(n,t.length)},k:function(e,t,r){let n=e.getHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):ke(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):$n.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):$n.s(e,t)},S:function(e,t){return $n.S(e,t)},X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return Ai(n);case"XXXX":case"XX":return ar(n);case"XXXXX":case"XXX":default:return ar(n,":")}},x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"x":return Ai(n);case"xxxx":case"xx":return ar(n);case"xxxxx":case"xxx":default:return ar(n,":")}},O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+wi(n,":");case"OOOO":default:return"GMT"+ar(n,":")}},z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+wi(n,":");case"zzzz":default:return"GMT"+ar(n,":")}},t:function(e,t,r){const n=Math.trunc(+e/1e3);return ke(n,t.length)},T:function(e,t,r){return ke(+e,t.length)}};function wi(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),s=Math.trunc(n/60),a=n%60;return a===0?r+String(s):r+String(s)+t+ke(a,2)}function Ai(e,t){return e%60===0?(e>0?"-":"+")+ke(Math.abs(e)/60,2):ar(e,t)}function ar(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),s=ke(Math.trunc(n/60),2),a=ke(n%60,2);return r+s+t+a}const ji=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Td=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},hk=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],s=r[2];if(!s)return ji(e,t);let a;switch(n){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",ji(n,t)).replace("{{time}}",Td(s,t))},aa={p:Td,P:hk},Ik=/^D+$/,wk=/^Y+$/,Ak=["D","DD","YY","YYYY"];function Od(e){return Ik.test(e)}function Nd(e){return wk.test(e)}function ia(e,t,r){const n=jk(e,t,r);if(console.warn(n),Ak.includes(e))throw new RangeError(n)}function jk(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ek=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Tk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ok=/^'([^]*?)'?$/,Nk=/''/g,Rk=/[a-zA-Z]/;function cr(e,t,r){var d,g,k,m,y,h,b,w;const n=kr(),s=(r==null?void 0:r.locale)??n.locale??bs,a=(r==null?void 0:r.firstWeekContainsDate)??((g=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(k=n.locale)==null?void 0:k.options)==null?void 0:m.firstWeekContainsDate)??1,i=(r==null?void 0:r.weekStartsOn)??((h=(y=r==null?void 0:r.locale)==null?void 0:y.options)==null?void 0:h.weekStartsOn)??n.weekStartsOn??((w=(b=n.locale)==null?void 0:b.options)==null?void 0:w.weekStartsOn)??0,l=le(e,r==null?void 0:r.in);if(!ck(l))throw new RangeError("Invalid time value");let o=t.match(Tk).map(v=>{const I=v[0];if(I==="p"||I==="P"){const E=aa[I];return E(v,s.formatLong)}return v}).join("").match(Ek).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const I=v[0];if(I==="'")return{isToken:!1,value:Pk(v)};if(Ii[I])return{isToken:!0,value:v};if(I.match(Rk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:v}});s.localize.preprocessor&&(o=s.localize.preprocessor(l,o));const u={firstWeekContainsDate:a,weekStartsOn:i,locale:s};return o.map(v=>{if(!v.isToken)return v.value;const I=v.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&Nd(I)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&Od(I))&&ia(I,t,String(e));const E=Ii[I[0]];return E(l,I,s.localize,u)}).join("")}function Pk(e){const t=e.match(Ok);return t?t[1].replace(Nk,"'"):e}function qk(e,t){const r=le(e,t==null?void 0:t.in),n=r.getFullYear(),s=r.getMonth(),a=ve(r,0);return a.setFullYear(n,s+1,0),a.setHours(0,0,0,0),a.getDate()}function _k(){return Object.assign({},kr())}function Mk(e,t){const r=le(e,t==null?void 0:t.in).getDay();return r===0?7:r}function Ma(e,t){return le(e,t==null?void 0:t.in).getMonth()}function Da(e,t){return le(e,t==null?void 0:t.in).getFullYear()}function Rd(e,t){return+le(e)>+le(t)}function vt(e,t){return+le(e)<+le(t)}function Dk(e,t){const r=Sk(t)?new t(0):ve(t,0);return r.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),r.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),r}function Sk(e){var t;return typeof e=="function"&&((t=e.prototype)==null?void 0:t.constructor)===e}const xk=10;class Pd{constructor(){z(this,"subPriority",0)}validate(t,r){return!0}}class Fk extends Pd{constructor(t,r,n,s,a){super(),this.value=t,this.validateValue=r,this.setValue=n,this.priority=s,a&&(this.subPriority=a)}validate(t,r){return this.validateValue(t,this.value,r)}set(t,r,n){return this.setValue(t,r,this.value,n)}}class Vk extends Pd{constructor(r,n){super();z(this,"priority",xk);z(this,"subPriority",-1);this.context=r||(s=>ve(n,s))}set(r,n){return n.timestampIsSet?r:ve(r,Dk(r,this.context))}}class ue{run(t,r,n,s){const a=this.parse(t,r,n,s);return a?{setter:new Fk(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}validate(t,r,n){return!0}}class Lk extends ue{constructor(){super(...arguments);z(this,"priority",140);z(this,"incompatibleTokens",["R","u","t","T"])}parse(r,n,s){switch(n){case"G":case"GG":case"GGG":return s.era(r,{width:"abbreviated"})||s.era(r,{width:"narrow"});case"GGGGG":return s.era(r,{width:"narrow"});case"GGGG":default:return s.era(r,{width:"wide"})||s.era(r,{width:"abbreviated"})||s.era(r,{width:"narrow"})}}set(r,n,s){return n.era=s,r.setFullYear(s,0,1),r.setHours(0,0,0,0),r}}const Me={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},En={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function De(e,t){return e&&{value:t(e.value),rest:e.rest}}function Ne(e,t){const r=t.match(e);return r?{value:parseInt(r[0],10),rest:t.slice(r[0].length)}:null}function Tn(e,t){const r=t.match(e);if(!r)return null;if(r[0]==="Z")return{value:0,rest:t.slice(1)};const n=r[1]==="+"?1:-1,s=r[2]?parseInt(r[2],10):0,a=r[3]?parseInt(r[3],10):0,i=r[5]?parseInt(r[5],10):0;return{value:n*(s*Im+a*hm+i*wm),rest:t.slice(r[0].length)}}function qd(e){return Ne(Me.anyDigitsSigned,e)}function qe(e,t){switch(e){case 1:return Ne(Me.singleDigit,t);case 2:return Ne(Me.twoDigits,t);case 3:return Ne(Me.threeDigits,t);case 4:return Ne(Me.fourDigits,t);default:return Ne(new RegExp("^\\d{1,"+e+"}"),t)}}function ls(e,t){switch(e){case 1:return Ne(Me.singleDigitSigned,t);case 2:return Ne(Me.twoDigitsSigned,t);case 3:return Ne(Me.threeDigitsSigned,t);case 4:return Ne(Me.fourDigitsSigned,t);default:return Ne(new RegExp("^-?\\d{1,"+e+"}"),t)}}function Sa(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function _d(e,t){const r=t>0,n=r?t:1-t;let s;if(n<=50)s=e||100;else{const a=n+50,i=Math.trunc(a/100)*100,l=e>=a%100;s=e+i-(l?100:0)}return r?s:1-s}function Md(e){return e%400===0||e%4===0&&e%100!==0}class Bk extends ue{constructor(){super(...arguments);z(this,"priority",130);z(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(r,n,s){const a=i=>({year:i,isTwoDigitYear:n==="yy"});switch(n){case"y":return De(qe(4,r),a);case"yo":return De(s.ordinalNumber(r,{unit:"year"}),a);default:return De(qe(n.length,r),a)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,s){const a=r.getFullYear();if(s.isTwoDigitYear){const l=_d(s.year,a);return r.setFullYear(l,0,1),r.setHours(0,0,0,0),r}const i=!("era"in n)||n.era===1?s.year:1-s.year;return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}}class Ck extends ue{constructor(){super(...arguments);z(this,"priority",130);z(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(r,n,s){const a=i=>({year:i,isTwoDigitYear:n==="YY"});switch(n){case"Y":return De(qe(4,r),a);case"Yo":return De(s.ordinalNumber(r,{unit:"year"}),a);default:return De(qe(n.length,r),a)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,s,a){const i=qa(r,a);if(s.isTwoDigitYear){const o=_d(s.year,i);return r.setFullYear(o,0,a.firstWeekContainsDate),r.setHours(0,0,0,0),Ln(r,a)}const l=!("era"in n)||n.era===1?s.year:1-s.year;return r.setFullYear(l,0,a.firstWeekContainsDate),r.setHours(0,0,0,0),Ln(r,a)}}class Kk extends ue{constructor(){super(...arguments);z(this,"priority",130);z(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(r,n){return ls(n==="R"?4:n.length,r)}set(r,n,s){const a=ve(r,0);return a.setFullYear(s,0,4),a.setHours(0,0,0,0),mr(a)}}class Gk extends ue{constructor(){super(...arguments);z(this,"priority",130);z(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(r,n){return ls(n==="u"?4:n.length,r)}set(r,n,s){return r.setFullYear(s,0,1),r.setHours(0,0,0,0),r}}class Uk extends ue{constructor(){super(...arguments);z(this,"priority",120);z(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,s){switch(n){case"Q":case"QQ":return qe(n.length,r);case"Qo":return s.ordinalNumber(r,{unit:"quarter"});case"QQQ":return s.quarter(r,{width:"abbreviated",context:"formatting"})||s.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return s.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return s.quarter(r,{width:"wide",context:"formatting"})||s.quarter(r,{width:"abbreviated",context:"formatting"})||s.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=1&&n<=4}set(r,n,s){return r.setMonth((s-1)*3,1),r.setHours(0,0,0,0),r}}class Hk extends ue{constructor(){super(...arguments);z(this,"priority",120);z(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,s){switch(n){case"q":case"qq":return qe(n.length,r);case"qo":return s.ordinalNumber(r,{unit:"quarter"});case"qqq":return s.quarter(r,{width:"abbreviated",context:"standalone"})||s.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return s.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return s.quarter(r,{width:"wide",context:"standalone"})||s.quarter(r,{width:"abbreviated",context:"standalone"})||s.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=1&&n<=4}set(r,n,s){return r.setMonth((s-1)*3,1),r.setHours(0,0,0,0),r}}class Yk extends ue{constructor(){super(...arguments);z(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);z(this,"priority",110)}parse(r,n,s){const a=i=>i-1;switch(n){case"M":return De(Ne(Me.month,r),a);case"MM":return De(qe(2,r),a);case"Mo":return De(s.ordinalNumber(r,{unit:"month"}),a);case"MMM":return s.month(r,{width:"abbreviated",context:"formatting"})||s.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return s.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return s.month(r,{width:"wide",context:"formatting"})||s.month(r,{width:"abbreviated",context:"formatting"})||s.month(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=11}set(r,n,s){return r.setMonth(s,1),r.setHours(0,0,0,0),r}}class $k extends ue{constructor(){super(...arguments);z(this,"priority",110);z(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(r,n,s){const a=i=>i-1;switch(n){case"L":return De(Ne(Me.month,r),a);case"LL":return De(qe(2,r),a);case"Lo":return De(s.ordinalNumber(r,{unit:"month"}),a);case"LLL":return s.month(r,{width:"abbreviated",context:"standalone"})||s.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return s.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return s.month(r,{width:"wide",context:"standalone"})||s.month(r,{width:"abbreviated",context:"standalone"})||s.month(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=11}set(r,n,s){return r.setMonth(s,1),r.setHours(0,0,0,0),r}}function Wk(e,t,r){const n=le(e,r==null?void 0:r.in),s=_a(n,r)-t;return n.setDate(n.getDate()-s*7),le(n,r==null?void 0:r.in)}class zk extends ue{constructor(){super(...arguments);z(this,"priority",100);z(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(r,n,s){switch(n){case"w":return Ne(Me.week,r);case"wo":return s.ordinalNumber(r,{unit:"week"});default:return qe(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,s,a){return Ln(Wk(r,s,a),a)}}function Jk(e,t,r){const n=le(e,r==null?void 0:r.in),s=Pa(n,r)-t;return n.setDate(n.getDate()-s*7),n}class Xk extends ue{constructor(){super(...arguments);z(this,"priority",100);z(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(r,n,s){switch(n){case"I":return Ne(Me.week,r);case"Io":return s.ordinalNumber(r,{unit:"week"});default:return qe(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,s){return mr(Jk(r,s))}}const Qk=[31,28,31,30,31,30,31,31,30,31,30,31],Zk=[31,29,31,30,31,30,31,31,30,31,30,31];class ev extends ue{constructor(){super(...arguments);z(this,"priority",90);z(this,"subPriority",1);z(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(r,n,s){switch(n){case"d":return Ne(Me.date,r);case"do":return s.ordinalNumber(r,{unit:"date"});default:return qe(n.length,r)}}validate(r,n){const s=r.getFullYear(),a=Md(s),i=r.getMonth();return a?n>=1&&n<=Zk[i]:n>=1&&n<=Qk[i]}set(r,n,s){return r.setDate(s),r.setHours(0,0,0,0),r}}class nv extends ue{constructor(){super(...arguments);z(this,"priority",90);z(this,"subpriority",1);z(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(r,n,s){switch(n){case"D":case"DD":return Ne(Me.dayOfYear,r);case"Do":return s.ordinalNumber(r,{unit:"date"});default:return qe(n.length,r)}}validate(r,n){const s=r.getFullYear();return Md(s)?n>=1&&n<=366:n>=1&&n<=365}set(r,n,s){return r.setMonth(0,s),r.setHours(0,0,0,0),r}}function xa(e,t,r){var g,k,m,y;const n=kr(),s=(r==null?void 0:r.weekStartsOn)??((k=(g=r==null?void 0:r.locale)==null?void 0:g.options)==null?void 0:k.weekStartsOn)??n.weekStartsOn??((y=(m=n.locale)==null?void 0:m.options)==null?void 0:y.weekStartsOn)??0,a=le(e,r==null?void 0:r.in),i=a.getDay(),o=(t%7+7)%7,u=7-s,d=t<0||t>6?t-(i+u)%7:(o+u)%7-(i+u)%7;return ct(a,d,r)}class rv extends ue{constructor(){super(...arguments);z(this,"priority",90);z(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(r,n,s){switch(n){case"E":case"EE":case"EEE":return s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return s.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return s.day(r,{width:"wide",context:"formatting"})||s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,s,a){return r=xa(r,s,a),r.setHours(0,0,0,0),r}}class tv extends ue{constructor(){super(...arguments);z(this,"priority",90);z(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(r,n,s,a){const i=l=>{const o=Math.floor((l-1)/7)*7;return(l+a.weekStartsOn+6)%7+o};switch(n){case"e":case"ee":return De(qe(n.length,r),i);case"eo":return De(s.ordinalNumber(r,{unit:"day"}),i);case"eee":return s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"});case"eeeee":return s.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return s.day(r,{width:"wide",context:"formatting"})||s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,s,a){return r=xa(r,s,a),r.setHours(0,0,0,0),r}}class sv extends ue{constructor(){super(...arguments);z(this,"priority",90);z(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(r,n,s,a){const i=l=>{const o=Math.floor((l-1)/7)*7;return(l+a.weekStartsOn+6)%7+o};switch(n){case"c":case"cc":return De(qe(n.length,r),i);case"co":return De(s.ordinalNumber(r,{unit:"day"}),i);case"ccc":return s.day(r,{width:"abbreviated",context:"standalone"})||s.day(r,{width:"short",context:"standalone"})||s.day(r,{width:"narrow",context:"standalone"});case"ccccc":return s.day(r,{width:"narrow",context:"standalone"});case"cccccc":return s.day(r,{width:"short",context:"standalone"})||s.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return s.day(r,{width:"wide",context:"standalone"})||s.day(r,{width:"abbreviated",context:"standalone"})||s.day(r,{width:"short",context:"standalone"})||s.day(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=6}set(r,n,s,a){return r=xa(r,s,a),r.setHours(0,0,0,0),r}}function av(e,t,r){const n=le(e,r==null?void 0:r.in),s=Mk(n,r),a=t-s;return ct(n,a,r)}class iv extends ue{constructor(){super(...arguments);z(this,"priority",90);z(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(r,n,s){const a=i=>i===0?7:i;switch(n){case"i":case"ii":return qe(n.length,r);case"io":return s.ordinalNumber(r,{unit:"day"});case"iii":return De(s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"}),a);case"iiiii":return De(s.day(r,{width:"narrow",context:"formatting"}),a);case"iiiiii":return De(s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"}),a);case"iiii":default:return De(s.day(r,{width:"wide",context:"formatting"})||s.day(r,{width:"abbreviated",context:"formatting"})||s.day(r,{width:"short",context:"formatting"})||s.day(r,{width:"narrow",context:"formatting"}),a)}}validate(r,n){return n>=1&&n<=7}set(r,n,s){return r=av(r,s),r.setHours(0,0,0,0),r}}class lv extends ue{constructor(){super(...arguments);z(this,"priority",80);z(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(r,n,s){switch(n){case"a":case"aa":case"aaa":return s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return s.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return s.dayPeriod(r,{width:"wide",context:"formatting"})||s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,s){return r.setHours(Sa(s),0,0,0),r}}class ov extends ue{constructor(){super(...arguments);z(this,"priority",80);z(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(r,n,s){switch(n){case"b":case"bb":case"bbb":return s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return s.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return s.dayPeriod(r,{width:"wide",context:"formatting"})||s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,s){return r.setHours(Sa(s),0,0,0),r}}class dv extends ue{constructor(){super(...arguments);z(this,"priority",80);z(this,"incompatibleTokens",["a","b","t","T"])}parse(r,n,s){switch(n){case"B":case"BB":case"BBB":return s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return s.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return s.dayPeriod(r,{width:"wide",context:"formatting"})||s.dayPeriod(r,{width:"abbreviated",context:"formatting"})||s.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,s){return r.setHours(Sa(s),0,0,0),r}}class uv extends ue{constructor(){super(...arguments);z(this,"priority",70);z(this,"incompatibleTokens",["H","K","k","t","T"])}parse(r,n,s){switch(n){case"h":return Ne(Me.hour12h,r);case"ho":return s.ordinalNumber(r,{unit:"hour"});default:return qe(n.length,r)}}validate(r,n){return n>=1&&n<=12}set(r,n,s){const a=r.getHours()>=12;return a&&s<12?r.setHours(s+12,0,0,0):!a&&s===12?r.setHours(0,0,0,0):r.setHours(s,0,0,0),r}}class gv extends ue{constructor(){super(...arguments);z(this,"priority",70);z(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(r,n,s){switch(n){case"H":return Ne(Me.hour23h,r);case"Ho":return s.ordinalNumber(r,{unit:"hour"});default:return qe(n.length,r)}}validate(r,n){return n>=0&&n<=23}set(r,n,s){return r.setHours(s,0,0,0),r}}class mv extends ue{constructor(){super(...arguments);z(this,"priority",70);z(this,"incompatibleTokens",["h","H","k","t","T"])}parse(r,n,s){switch(n){case"K":return Ne(Me.hour11h,r);case"Ko":return s.ordinalNumber(r,{unit:"hour"});default:return qe(n.length,r)}}validate(r,n){return n>=0&&n<=11}set(r,n,s){return r.getHours()>=12&&s<12?r.setHours(s+12,0,0,0):r.setHours(s,0,0,0),r}}class fv extends ue{constructor(){super(...arguments);z(this,"priority",70);z(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(r,n,s){switch(n){case"k":return Ne(Me.hour24h,r);case"ko":return s.ordinalNumber(r,{unit:"hour"});default:return qe(n.length,r)}}validate(r,n){return n>=1&&n<=24}set(r,n,s){const a=s<=24?s%24:s;return r.setHours(a,0,0,0),r}}class cv extends ue{constructor(){super(...arguments);z(this,"priority",60);z(this,"incompatibleTokens",["t","T"])}parse(r,n,s){switch(n){case"m":return Ne(Me.minute,r);case"mo":return s.ordinalNumber(r,{unit:"minute"});default:return qe(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,s){return r.setMinutes(s,0,0),r}}class kv extends ue{constructor(){super(...arguments);z(this,"priority",50);z(this,"incompatibleTokens",["t","T"])}parse(r,n,s){switch(n){case"s":return Ne(Me.second,r);case"so":return s.ordinalNumber(r,{unit:"second"});default:return qe(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,s){return r.setSeconds(s,0),r}}class vv extends ue{constructor(){super(...arguments);z(this,"priority",30);z(this,"incompatibleTokens",["t","T"])}parse(r,n){const s=a=>Math.trunc(a*Math.pow(10,-n.length+3));return De(qe(n.length,r),s)}set(r,n,s){return r.setMilliseconds(s),r}}class pv extends ue{constructor(){super(...arguments);z(this,"priority",10);z(this,"incompatibleTokens",["t","T","x"])}parse(r,n){switch(n){case"X":return Tn(En.basicOptionalMinutes,r);case"XX":return Tn(En.basic,r);case"XXXX":return Tn(En.basicOptionalSeconds,r);case"XXXXX":return Tn(En.extendedOptionalSeconds,r);case"XXX":default:return Tn(En.extended,r)}}set(r,n,s){return n.timestampIsSet?r:ve(r,r.getTime()-is(r)-s)}}class yv extends ue{constructor(){super(...arguments);z(this,"priority",10);z(this,"incompatibleTokens",["t","T","X"])}parse(r,n){switch(n){case"x":return Tn(En.basicOptionalMinutes,r);case"xx":return Tn(En.basic,r);case"xxxx":return Tn(En.basicOptionalSeconds,r);case"xxxxx":return Tn(En.extendedOptionalSeconds,r);case"xxx":default:return Tn(En.extended,r)}}set(r,n,s){return n.timestampIsSet?r:ve(r,r.getTime()-is(r)-s)}}class bv extends ue{constructor(){super(...arguments);z(this,"priority",40);z(this,"incompatibleTokens","*")}parse(r){return qd(r)}set(r,n,s){return[ve(r,s*1e3),{timestampIsSet:!0}]}}class hv extends ue{constructor(){super(...arguments);z(this,"priority",20);z(this,"incompatibleTokens","*")}parse(r){return qd(r)}set(r,n,s){return[ve(r,s),{timestampIsSet:!0}]}}const Iv={G:new Lk,y:new Bk,Y:new Ck,R:new Kk,u:new Gk,Q:new Uk,q:new Hk,M:new Yk,L:new $k,w:new zk,I:new Xk,d:new ev,D:new nv,E:new rv,e:new tv,c:new sv,i:new iv,a:new lv,b:new ov,B:new dv,h:new uv,H:new gv,K:new mv,k:new fv,m:new cv,s:new kv,S:new vv,X:new pv,x:new yv,t:new bv,T:new hv},wv=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Av=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,jv=/^'([^]*?)'?$/,Ev=/''/g,Tv=/\S/,Ov=/[a-zA-Z]/;function Nr(e,t,r,n){var b,w,v,I,E,j,N,T;const s=()=>ve((n==null?void 0:n.in)||r,NaN),a=_k(),i=(n==null?void 0:n.locale)??a.locale??bs,l=(n==null?void 0:n.firstWeekContainsDate)??((w=(b=n==null?void 0:n.locale)==null?void 0:b.options)==null?void 0:w.firstWeekContainsDate)??a.firstWeekContainsDate??((I=(v=a.locale)==null?void 0:v.options)==null?void 0:I.firstWeekContainsDate)??1,o=(n==null?void 0:n.weekStartsOn)??((j=(E=n==null?void 0:n.locale)==null?void 0:E.options)==null?void 0:j.weekStartsOn)??a.weekStartsOn??((T=(N=a.locale)==null?void 0:N.options)==null?void 0:T.weekStartsOn)??0;if(!t)return e?s():le(r,n==null?void 0:n.in);const u={firstWeekContainsDate:l,weekStartsOn:o,locale:i},d=[new Vk(n==null?void 0:n.in,r)],g=t.match(Av).map(R=>{const P=R[0];if(P in aa){const x=aa[P];return x(R,i.formatLong)}return R}).join("").match(wv),k=[];for(let R of g){!(n!=null&&n.useAdditionalWeekYearTokens)&&Nd(R)&&ia(R,t,e),!(n!=null&&n.useAdditionalDayOfYearTokens)&&Od(R)&&ia(R,t,e);const P=R[0],x=Iv[P];if(x){const{incompatibleTokens:F}=x;if(Array.isArray(F)){const O=k.find(q=>F.includes(q.token)||q.token===P);if(O)throw new RangeError(`The format string mustn't contain \`${O.fullToken}\` and \`${R}\` at the same time`)}else if(x.incompatibleTokens==="*"&&k.length>0)throw new RangeError(`The format string mustn't contain \`${R}\` and any other token at the same time`);k.push({token:P,fullToken:R});const M=x.run(e,R,i.match,u);if(!M)return s();d.push(M.setter),e=M.rest}else{if(P.match(Ov))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");if(R==="''"?R="'":P==="'"&&(R=Nv(R)),e.indexOf(R)===0)e=e.slice(R.length);else return s()}}if(e.length>0&&Tv.test(e))return s();const m=d.map(R=>R.priority).sort((R,P)=>P-R).filter((R,P,x)=>x.indexOf(R)===P).map(R=>d.filter(P=>P.priority===R).sort((P,x)=>x.subPriority-P.subPriority)).map(R=>R[0]);let y=le(r,n==null?void 0:n.in);if(isNaN(+y))return s();const h={};for(const R of m){if(!R.validate(y,u))return s();const P=R.set(y,h,u);Array.isArray(P)?(y=P[0],Object.assign(h,P[1])):y=P}return y}function Nv(e){return e.match(jv)[1].replace(Ev,"'")}function Rv(e,t,r){const[n,s]=Lr(r==null?void 0:r.in,e,t);return n.getFullYear()===s.getFullYear()&&n.getMonth()===s.getMonth()}function Dd(e,t,r){const[n,s]=Lr(r==null?void 0:r.in,e,t);return n.getFullYear()===s.getFullYear()}function Pv(e,t,r){return ct(e,-t,r)}function Sd(e,t,r){const n=le(e,r==null?void 0:r.in),s=n.getFullYear(),a=n.getDate(),i=ve(e,0);i.setFullYear(s,t,15),i.setHours(0,0,0,0);const l=qk(i);return n.setMonth(t,Math.min(a,l)),n}function xd(e,t,r){const n=le(e,r==null?void 0:r.in);return isNaN(+n)?ve(e,NaN):(n.setFullYear(t),n)}function qv(e,t,r){return Oa(e,-t,r)}function _v(e,t,r){const{years:n=0,months:s=0,weeks:a=0,days:i=0,hours:l=0,minutes:o=0,seconds:u=0}=t,d=qv(e,s+n*12,r),g=Pv(d,i+a*7,r),k=o+l*60,y=(u+k*60)*1e3;return ve(e,+g-y)}function Mv(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Dv(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:r,version:n}=t;return r+"/"+n}).join(" "):navigator.userAgent}function Sv(){return/apple/i.test(navigator.vendor)}function xv(){return Mv().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Fv(){return Dv().includes("jsdom/")}const Vv="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Ei(e){let t=e.activeElement;for(;((r=t)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;t=t.shadowRoot.activeElement}return t}function rt(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&ts(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Ar(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Bs(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const r=e;return r.target!=null&&t.contains(r.target)}function Lv(e){return e.matches("html,body")}function ir(e){return(e==null?void 0:e.ownerDocument)||document}function Bv(e){return ln(e)&&e.matches(Vv)}function Cv(e){if(!e||Fv())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Cs(e,t,r){r===void 0&&(r=!0);let n=e.filter(a=>{var i;return a.parentId===t&&((i=a.context)==null?void 0:i.open)}),s=n;for(;s.length;)s=r?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(l=>{var o;return a.parentId===l.id&&((o=a.context)==null?void 0:o.open)})}):e,n=n.concat(s);return n}function Kv(e){return"nativeEvent"in e}function la(e,t){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var Vn=typeof document<"u"?f.useLayoutEffect:f.useEffect;const Gv={...Vo};function At(e){const t=f.useRef(e);return Vn(()=>{t.current=e}),t}const Uv=Gv.useInsertionEffect,Hv=Uv||(e=>e());function Sn(e){const t=f.useRef(()=>{});return Hv(()=>{t.current=e}),f.useCallback(function(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return t.current==null?void 0:t.current(...n)},[])}const Yv="data-floating-ui-focusable",Ti="active",Oi="selected",$v={...Vo};let Ni=!1,Wv=0;const Ri=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Wv++;function zv(){const[e,t]=f.useState(()=>Ni?Ri():void 0);return Vn(()=>{e==null&&t(Ri())},[]),f.useEffect(()=>{Ni=!0},[]),e}const Jv=$v.useId,Fd=Jv||zv;function Xv(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(s=>s(r))},on(t,r){e.has(t)||e.set(t,new Set),e.get(t).add(r)},off(t,r){var n;(n=e.get(t))==null||n.delete(r)}}}const Qv=f.createContext(null),Zv=f.createContext(null),Vd=()=>{var e;return((e=f.useContext(Qv))==null?void 0:e.id)||null},Fa=()=>f.useContext(Zv);function Ts(e){return"data-floating-ui-"+e}function on(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Pi=Ts("safe-polygon");function Ks(e,t,r){if(r&&!la(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n==null?void 0:n[t]}return e==null?void 0:e[t]}function Gs(e){return typeof e=="function"?e():e}function ep(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,dataRef:s,events:a,elements:i}=e,{enabled:l=!0,delay:o=0,handleClose:u=null,mouseOnly:d=!1,restMs:g=0,move:k=!0}=t,m=Fa(),y=Vd(),h=At(u),b=At(o),w=At(r),v=At(g),I=f.useRef(),E=f.useRef(-1),j=f.useRef(),N=f.useRef(-1),T=f.useRef(!0),R=f.useRef(!1),P=f.useRef(()=>{}),x=f.useRef(!1),F=f.useCallback(()=>{var B;const C=(B=s.current.openEvent)==null?void 0:B.type;return(C==null?void 0:C.includes("mouse"))&&C!=="mousedown"},[s]);f.useEffect(()=>{if(!l)return;function B(C){let{open:V}=C;V||(on(E),on(N),T.current=!0,x.current=!1)}return a.on("openchange",B),()=>{a.off("openchange",B)}},[l,a]),f.useEffect(()=>{if(!l||!h.current||!r)return;function B(V){F()&&n(!1,V,"hover")}const C=ir(i.floating).documentElement;return C.addEventListener("mouseleave",B),()=>{C.removeEventListener("mouseleave",B)}},[i.floating,r,n,l,h,F]);const M=f.useCallback(function(B,C,V){C===void 0&&(C=!0),V===void 0&&(V="hover");const $=Ks(b.current,"close",I.current);$&&!j.current?(on(E),E.current=window.setTimeout(()=>n(!1,B,V),$)):C&&(on(E),n(!1,B,V))},[b,n]),O=Sn(()=>{P.current(),j.current=void 0}),q=Sn(()=>{if(R.current){const B=ir(i.floating).body;B.style.pointerEvents="",B.removeAttribute(Pi),R.current=!1}}),S=Sn(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);f.useEffect(()=>{if(!l)return;function B(X){if(on(E),T.current=!1,d&&!la(I.current)||Gs(v.current)>0&&!Ks(b.current,"open"))return;const ae=Ks(b.current,"open",I.current);ae?E.current=window.setTimeout(()=>{w.current||n(!0,X,"hover")},ae):r||n(!0,X,"hover")}function C(X){if(S()){q();return}P.current();const ae=ir(i.floating);if(on(N),x.current=!1,h.current&&s.current.floatingContext){r||on(E),j.current=h.current({...s.current.floatingContext,tree:m,x:X.clientX,y:X.clientY,onClose(){q(),O(),S()||M(X,!0,"safe-polygon")}});const Z=j.current;ae.addEventListener("mousemove",Z),P.current=()=>{ae.removeEventListener("mousemove",Z)};return}(I.current==="touch"?!rt(i.floating,X.relatedTarget):!0)&&M(X)}function V(X){S()||s.current.floatingContext&&(h.current==null||h.current({...s.current.floatingContext,tree:m,x:X.clientX,y:X.clientY,onClose(){q(),O(),S()||M(X)}})(X))}function $(){on(E)}function J(X){S()||M(X,!1)}if(we(i.domReference)){const X=i.domReference,ae=i.floating;return r&&X.addEventListener("mouseleave",V),k&&X.addEventListener("mousemove",B,{once:!0}),X.addEventListener("mouseenter",B),X.addEventListener("mouseleave",C),ae&&(ae.addEventListener("mouseleave",V),ae.addEventListener("mouseenter",$),ae.addEventListener("mouseleave",J)),()=>{r&&X.removeEventListener("mouseleave",V),k&&X.removeEventListener("mousemove",B),X.removeEventListener("mouseenter",B),X.removeEventListener("mouseleave",C),ae&&(ae.removeEventListener("mouseleave",V),ae.removeEventListener("mouseenter",$),ae.removeEventListener("mouseleave",J))}}},[i,l,e,d,k,M,O,q,n,r,w,m,b,h,s,S,v]),Vn(()=>{var B;if(l&&r&&(B=h.current)!=null&&B.__options.blockPointerEvents&&F()){R.current=!0;const V=i.floating;if(we(i.domReference)&&V){var C;const $=ir(i.floating).body;$.setAttribute(Pi,"");const J=i.domReference,X=m==null||(C=m.nodesRef.current.find(ae=>ae.id===y))==null||(C=C.context)==null?void 0:C.elements.floating;return X&&(X.style.pointerEvents=""),$.style.pointerEvents="none",J.style.pointerEvents="auto",V.style.pointerEvents="auto",()=>{$.style.pointerEvents="",J.style.pointerEvents="",V.style.pointerEvents=""}}}},[l,r,y,i,m,h,F]),Vn(()=>{r||(I.current=void 0,x.current=!1,O(),q())},[r,O,q]),f.useEffect(()=>()=>{O(),on(E),on(N),q()},[l,i.domReference,O,q]);const L=f.useMemo(()=>{function B(C){I.current=C.pointerType}return{onPointerDown:B,onPointerEnter:B,onMouseMove(C){const{nativeEvent:V}=C;function $(){!T.current&&!w.current&&n(!0,V,"hover")}d&&!la(I.current)||r||Gs(v.current)===0||x.current&&C.movementX**2+C.movementY**2<2||(on(N),I.current==="touch"?$():(x.current=!0,N.current=window.setTimeout($,Gs(v.current))))}}},[d,n,r,w,v]);return f.useMemo(()=>l?{reference:L}:{},[l,L])}function Us(e,t){if(!e||!t)return!1;const r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&ts(r)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function np(e){return"composedPath"in e?e.composedPath()[0]:e.target}const rp=f.createContext(null),qi=Ts("portal");function tp(e){e===void 0&&(e={});const{id:t,root:r}=e,n=Fd(),s=sp(),[a,i]=f.useState(null),l=f.useRef(null);return Vn(()=>()=>{a==null||a.remove(),queueMicrotask(()=>{l.current=null})},[a]),Vn(()=>{if(!n||l.current)return;const o=t?document.getElementById(t):null;if(!o)return;const u=document.createElement("div");u.id=n,u.setAttribute(qi,""),o.appendChild(u),l.current=u,i(u)},[t,n]),Vn(()=>{if(r===null||!n||l.current)return;let o=r||(s==null?void 0:s.portalNode);o&&!we(o)&&(o=o.current),o=o||document.body;let u=null;t&&(u=document.createElement("div"),u.id=t,o.appendChild(u));const d=document.createElement("div");d.id=n,d.setAttribute(qi,""),o=u||o,o.appendChild(d),l.current=d,i(d)},[t,r,n,s]),a}const sp=()=>f.useContext(rp),ap={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},ip={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},_i=e=>{var t,r;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(r=e==null?void 0:e.outsidePress)!=null?r:!0}};function lp(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,elements:s,dataRef:a}=e,{enabled:i=!0,escapeKey:l=!0,outsidePress:o=!0,outsidePressEvent:u="pointerdown",referencePress:d=!1,referencePressEvent:g="pointerdown",ancestorScroll:k=!1,bubbles:m,capture:y}=t,h=Fa(),b=Sn(typeof o=="function"?o:()=>!1),w=typeof o=="function"?b:o,v=f.useRef(!1),I=f.useRef(!1),{escapeKey:E,outsidePress:j}=_i(m),{escapeKey:N,outsidePress:T}=_i(y),R=f.useRef(!1),P=Sn(S=>{var L;if(!r||!i||!l||S.key!=="Escape"||R.current)return;const B=(L=a.current.floatingContext)==null?void 0:L.nodeId,C=h?Cs(h.nodesRef.current,B):[];if(!E&&(S.stopPropagation(),C.length>0)){let V=!0;if(C.forEach($=>{var J;if((J=$.context)!=null&&J.open&&!$.context.dataRef.current.__escapeKeyBubbles){V=!1;return}}),!V)return}n(!1,Kv(S)?S.nativeEvent:S,"escape-key")}),x=Sn(S=>{var L;const B=()=>{var C;P(S),(C=Ar(S))==null||C.removeEventListener("keydown",B)};(L=Ar(S))==null||L.addEventListener("keydown",B)}),F=Sn(S=>{var L;const B=v.current;v.current=!1;const C=I.current;if(I.current=!1,u==="click"&&C||B||typeof w=="function"&&!w(S))return;const V=Ar(S),$="["+Ts("inert")+"]",J=ir(s.floating).querySelectorAll($);let X=we(V)?V:null;for(;X&&!Fn(X);){const G=Bn(X);if(Fn(G)||!we(G))break;X=G}if(J.length&&we(V)&&!Lv(V)&&!rt(V,s.floating)&&Array.from(J).every(G=>!rt(X,G)))return;if(ln(V)&&q){const G=Fn(V),ee=fn(V),te=/auto|scroll/,ge=G||te.test(ee.overflowX),Le=G||te.test(ee.overflowY),Be=ge&&V.clientWidth>0&&V.scrollWidth>V.clientWidth,Ce=Le&&V.clientHeight>0&&V.scrollHeight>V.clientHeight,_n=ee.direction==="rtl",cn=Ce&&(_n?S.offsetX<=V.offsetWidth-V.clientWidth:S.offsetX>V.clientWidth),kn=Be&&S.offsetY>V.clientHeight;if(cn||kn)return}const ae=(L=a.current.floatingContext)==null?void 0:L.nodeId,Ue=h&&Cs(h.nodesRef.current,ae).some(G=>{var ee;return Bs(S,(ee=G.context)==null?void 0:ee.elements.floating)});if(Bs(S,s.floating)||Bs(S,s.domReference)||Ue)return;const Z=h?Cs(h.nodesRef.current,ae):[];if(Z.length>0){let G=!0;if(Z.forEach(ee=>{var te;if((te=ee.context)!=null&&te.open&&!ee.context.dataRef.current.__outsidePressBubbles){G=!1;return}}),!G)return}n(!1,S,"outside-press")}),M=Sn(S=>{var L;const B=()=>{var C;F(S),(C=Ar(S))==null||C.removeEventListener(u,B)};(L=Ar(S))==null||L.addEventListener(u,B)});f.useEffect(()=>{if(!r||!i)return;a.current.__escapeKeyBubbles=E,a.current.__outsidePressBubbles=j;let S=-1;function L(J){n(!1,J,"ancestor-scroll")}function B(){window.clearTimeout(S),R.current=!0}function C(){S=window.setTimeout(()=>{R.current=!1},As()?5:0)}const V=ir(s.floating);l&&(V.addEventListener("keydown",N?x:P,N),V.addEventListener("compositionstart",B),V.addEventListener("compositionend",C)),w&&V.addEventListener(u,T?M:F,T);let $=[];return k&&(we(s.domReference)&&($=Xn(s.domReference)),we(s.floating)&&($=$.concat(Xn(s.floating))),!we(s.reference)&&s.reference&&s.reference.contextElement&&($=$.concat(Xn(s.reference.contextElement)))),$=$.filter(J=>{var X;return J!==((X=V.defaultView)==null?void 0:X.visualViewport)}),$.forEach(J=>{J.addEventListener("scroll",L,{passive:!0})}),()=>{l&&(V.removeEventListener("keydown",N?x:P,N),V.removeEventListener("compositionstart",B),V.removeEventListener("compositionend",C)),w&&V.removeEventListener(u,T?M:F,T),$.forEach(J=>{J.removeEventListener("scroll",L)}),window.clearTimeout(S)}},[a,s,l,w,u,r,n,k,i,E,j,P,N,x,F,T,M]),f.useEffect(()=>{v.current=!1},[w,u]);const O=f.useMemo(()=>({onKeyDown:P,...d&&{[ap[g]]:S=>{n(!1,S.nativeEvent,"reference-press")},...g!=="click"&&{onClick(S){n(!1,S.nativeEvent,"reference-press")}}}}),[P,n,d,g]),q=f.useMemo(()=>({onKeyDown:P,onMouseDown(){I.current=!0},onMouseUp(){I.current=!0},[ip[u]]:()=>{v.current=!0}}),[P,u]);return f.useMemo(()=>i?{reference:O,floating:q}:{},[i,O,q])}function op(e){const{open:t=!1,onOpenChange:r,elements:n}=e,s=Fd(),a=f.useRef({}),[i]=f.useState(()=>Xv()),l=Vd()!=null,[o,u]=f.useState(n.reference),d=Sn((m,y,h)=>{a.current.openEvent=m?y:void 0,i.emit("openchange",{open:m,event:y,reason:h,nested:l}),r==null||r(m,y,h)}),g=f.useMemo(()=>({setPositionReference:u}),[]),k=f.useMemo(()=>({reference:o||n.reference||null,floating:n.floating||null,domReference:n.reference}),[o,n.reference,n.floating]);return f.useMemo(()=>({dataRef:a,open:t,onOpenChange:d,elements:k,events:i,floatingId:s,refs:g}),[t,d,k,i,s,g])}function Ld(e){e===void 0&&(e={});const{nodeId:t}=e,r=op({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||r,s=n.elements,[a,i]=f.useState(null),[l,o]=f.useState(null),d=(s==null?void 0:s.domReference)||a,g=f.useRef(null),k=Fa();Vn(()=>{d&&(g.current=d)},[d]);const m=ek({...e,elements:{...s,...l&&{reference:l}}}),y=f.useCallback(I=>{const E=we(I)?{getBoundingClientRect:()=>I.getBoundingClientRect(),getClientRects:()=>I.getClientRects(),contextElement:I}:I;o(E),m.refs.setReference(E)},[m.refs]),h=f.useCallback(I=>{(we(I)||I===null)&&(g.current=I,i(I)),(we(m.refs.reference.current)||m.refs.reference.current===null||I!==null&&!we(I))&&m.refs.setReference(I)},[m.refs]),b=f.useMemo(()=>({...m.refs,setReference:h,setPositionReference:y,domReference:g}),[m.refs,h,y]),w=f.useMemo(()=>({...m.elements,domReference:d}),[m.elements,d]),v=f.useMemo(()=>({...m,...n,refs:b,elements:w,nodeId:t}),[m,b,w,t,n]);return Vn(()=>{n.dataRef.current.floatingContext=v;const I=k==null?void 0:k.nodesRef.current.find(E=>E.id===t);I&&(I.context=v)}),f.useMemo(()=>({...m,context:v,refs:b,elements:w}),[m,b,w,v])}function Hs(){return xv()&&Sv()}function dp(e,t){t===void 0&&(t={});const{open:r,onOpenChange:n,events:s,dataRef:a,elements:i}=e,{enabled:l=!0,visibleOnly:o=!0}=t,u=f.useRef(!1),d=f.useRef(-1),g=f.useRef(!0);f.useEffect(()=>{if(!l)return;const m=nn(i.domReference);function y(){!r&&ln(i.domReference)&&i.domReference===Ei(ir(i.domReference))&&(u.current=!0)}function h(){g.current=!0}function b(){g.current=!1}return m.addEventListener("blur",y),Hs()&&(m.addEventListener("keydown",h,!0),m.addEventListener("pointerdown",b,!0)),()=>{m.removeEventListener("blur",y),Hs()&&(m.removeEventListener("keydown",h,!0),m.removeEventListener("pointerdown",b,!0))}},[i.domReference,r,l]),f.useEffect(()=>{if(!l)return;function m(y){let{reason:h}=y;(h==="reference-press"||h==="escape-key")&&(u.current=!0)}return s.on("openchange",m),()=>{s.off("openchange",m)}},[s,l]),f.useEffect(()=>()=>{on(d)},[]);const k=f.useMemo(()=>({onMouseLeave(){u.current=!1},onFocus(m){if(u.current)return;const y=Ar(m.nativeEvent);if(o&&we(y)){if(Hs()&&!m.relatedTarget){if(!g.current&&!Bv(y))return}else if(!Cv(y))return}n(!0,m.nativeEvent,"focus")},onBlur(m){u.current=!1;const y=m.relatedTarget,h=m.nativeEvent,b=we(y)&&y.hasAttribute(Ts("focus-guard"))&&y.getAttribute("data-type")==="outside";d.current=window.setTimeout(()=>{var w;const v=Ei(i.domReference?i.domReference.ownerDocument:document);!y&&v===i.domReference||rt((w=a.current.floatingContext)==null?void 0:w.refs.floating.current,v)||rt(i.domReference,v)||b||n(!1,h,"focus")})}}),[a,i.domReference,n,o]);return f.useMemo(()=>l?{reference:k}:{},[l,k])}function Ys(e,t,r){const n=new Map,s=r==="item";let a=e;if(s&&e){const{[Ti]:i,[Oi]:l,...o}=e;a=o}return{...r==="floating"&&{tabIndex:-1,[Yv]:""},...a,...t.map(i=>{const l=i?i[r]:null;return typeof l=="function"?e?l(e):null:l}).concat(e).reduce((i,l)=>(l&&Object.entries(l).forEach(o=>{let[u,d]=o;if(!(s&&[Ti,Oi].includes(u)))if(u.indexOf("on")===0){if(n.has(u)||n.set(u,[]),typeof d=="function"){var g;(g=n.get(u))==null||g.push(d),i[u]=function(){for(var k,m=arguments.length,y=new Array(m),h=0;h<m;h++)y[h]=arguments[h];return(k=n.get(u))==null?void 0:k.map(b=>b(...y)).find(b=>b!==void 0)}}}else i[u]=d}),i),{})}}function up(e){e===void 0&&(e=[]);const t=e.map(l=>l==null?void 0:l.reference),r=e.map(l=>l==null?void 0:l.floating),n=e.map(l=>l==null?void 0:l.item),s=f.useCallback(l=>Ys(l,e,"reference"),t),a=f.useCallback(l=>Ys(l,e,"floating"),r),i=f.useCallback(l=>Ys(l,e,"item"),n);return f.useMemo(()=>({getReferenceProps:s,getFloatingProps:a,getItemProps:i}),[s,a,i])}function gp(e,t,r){r===void 0&&(r=!0);let n=e.filter(a=>{var i;return a.parentId===t&&((i=a.context)==null?void 0:i.open)}),s=n;for(;s.length;)s=r?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(l=>{var o;return a.parentId===l.id&&((o=a.context)==null?void 0:o.open)})}):e,n=n.concat(s);return n}function Mi(e,t){const[r,n]=e;let s=!1;const a=t.length;for(let i=0,l=a-1;i<a;l=i++){const[o,u]=t[i]||[0,0],[d,g]=t[l]||[0,0];u>=n!=g>=n&&r<=(d-o)*(n-u)/(g-u)+o&&(s=!s)}return s}function mp(e,t){return e[0]>=t.x&&e[0]<=t.x+t.width&&e[1]>=t.y&&e[1]<=t.y+t.height}function fp(e){e===void 0&&(e={});const{buffer:t=.5,blockPointerEvents:r=!1,requireIntent:n=!0}=e;let s,a=!1,i=null,l=null,o=performance.now();function u(g,k){const m=performance.now(),y=m-o;if(i===null||l===null||y===0)return i=g,l=k,o=m,null;const h=g-i,b=k-l,v=Math.sqrt(h*h+b*b)/y;return i=g,l=k,o=m,v}const d=g=>{let{x:k,y:m,placement:y,elements:h,onClose:b,nodeId:w,tree:v}=g;return function(E){function j(){clearTimeout(s),b()}if(clearTimeout(s),!h.domReference||!h.floating||y==null||k==null||m==null)return;const{clientX:N,clientY:T}=E,R=[N,T],P=np(E),x=E.type==="mouseleave",F=Us(h.floating,P),M=Us(h.domReference,P),O=h.domReference.getBoundingClientRect(),q=h.floating.getBoundingClientRect(),S=y.split("-")[0],L=k>q.right-q.width/2,B=m>q.bottom-q.height/2,C=mp(R,O),V=q.width>O.width,$=q.height>O.height,J=(V?O:q).left,X=(V?O:q).right,ae=($?O:q).top,Ue=($?O:q).bottom;if(F&&(a=!0,!x))return;if(M&&(a=!1),M&&!x){a=!0;return}if(x&&we(E.relatedTarget)&&Us(h.floating,E.relatedTarget)||v&&gp(v.nodesRef.current,w).some(ee=>{let{context:te}=ee;return te==null?void 0:te.open}))return;if(S==="top"&&m>=O.bottom-1||S==="bottom"&&m<=O.top+1||S==="left"&&k>=O.right-1||S==="right"&&k<=O.left+1)return j();let Z=[];switch(S){case"top":Z=[[J,O.top+1],[J,q.bottom-1],[X,q.bottom-1],[X,O.top+1]];break;case"bottom":Z=[[J,q.top+1],[J,O.bottom-1],[X,O.bottom-1],[X,q.top+1]];break;case"left":Z=[[q.right-1,Ue],[q.right-1,ae],[O.left+1,ae],[O.left+1,Ue]];break;case"right":Z=[[O.right-1,Ue],[O.right-1,ae],[q.left+1,ae],[q.left+1,Ue]];break}function G(ee){let[te,ge]=ee;switch(S){case"top":{const Le=[V?te+t/2:L?te+t*4:te-t*4,ge+t+1],Be=[V?te-t/2:L?te+t*4:te-t*4,ge+t+1],Ce=[[q.left,L||V?q.bottom-t:q.top],[q.right,L?V?q.bottom-t:q.top:q.bottom-t]];return[Le,Be,...Ce]}case"bottom":{const Le=[V?te+t/2:L?te+t*4:te-t*4,ge-t],Be=[V?te-t/2:L?te+t*4:te-t*4,ge-t],Ce=[[q.left,L||V?q.top+t:q.bottom],[q.right,L?V?q.top+t:q.bottom:q.top+t]];return[Le,Be,...Ce]}case"left":{const Le=[te+t+1,$?ge+t/2:B?ge+t*4:ge-t*4],Be=[te+t+1,$?ge-t/2:B?ge+t*4:ge-t*4];return[...[[B||$?q.right-t:q.left,q.top],[B?$?q.right-t:q.left:q.right-t,q.bottom]],Le,Be]}case"right":{const Le=[te-t,$?ge+t/2:B?ge+t*4:ge-t*4],Be=[te-t,$?ge-t/2:B?ge+t*4:ge-t*4],Ce=[[B||$?q.left+t:q.right,q.top],[B?$?q.left+t:q.right:q.left+t,q.bottom]];return[Le,Be,...Ce]}}}if(!Mi([N,T],Z)){if(a&&!C)return j();if(!x&&n){const ee=u(E.clientX,E.clientY);if(ee!==null&&ee<.1)return j()}Mi([N,T],G([k,m]))?!a&&n&&(s=window.setTimeout(j,40)):j()}}};return d.__options={blockPointerEvents:r},d}const Os=()=>{const{cn:e}=re();return p.createElement(Ho,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Bd=()=>{const{cn:e}=re();return p.createElement(Ho,{title:Kn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},os=f.createContext(null),Cr=(e,t)=>{var r,n,s;const{size:a,error:i,errorId:l}=e,o=f.useContext(os),u=wn(),d=(r=e.id)!==null&&r!==void 0?r:`${t}-${u}`,g=l??`${t}-error-${u}`,k=`${t}-description-${u}`,m=(o==null?void 0:o.disabled)||e.disabled,y=((o==null?void 0:o.readOnly)||e.readOnly)&&!m||void 0,h=!m&&!y&&!!(i||o!=null&&o.error),b=!m&&!y&&!!i&&typeof i!="boolean",w=Object.assign({},h?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:b,hasError:h,errorId:g,inputDescriptionId:k,size:(n=a??(o==null?void 0:o.size))!==null&&n!==void 0?n:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:d},w),{"aria-describedby":lt(e["aria-describedby"],{[k]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[g]:b,[(s=o==null?void 0:o.errorId)!==null&&s!==void 0?s:""]:h&&!!(o!=null&&o.error)})||void 0,disabled:m})}},Cd={global:{dateLocale:Zo,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},Kd={global:{dateLocale:nd,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},Gd=(e="nb")=>{switch(e){case"nn":return nd;case"en":return Zo;default:return ed}},Ud=e=>{switch(e){case"nn":return Kd.DatePicker;case"en":case"en-GB":return Cd.DatePicker;default:return}},cp=e=>{switch(e){case"nn":return Kd.global;case"en":case"en-GB":return Cd.global;default:return}},[Hd,Ns]=ks();var kp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const[vp,Va]=ks({errorMessage:"useDateInputContext must be used with DateInputContext"}),Yd=f.forwardRef((e,t)=>{const{className:r,hideLabel:n=!1,label:s,description:a,variant:i="datepicker",setAnchorRef:l}=e,o=kp(e,["className","hideLabel","label","description","variant","setAnchorRef"]),u=f.useRef(null),d=Ns().translate,{cn:g}=re(),k=i==="datepicker",m={prefix:k?"datepicker-input":"monthpicker-input",iconTitle:{open:k?"openDatePicker":"openMonthPicker",close:k?"closeDatePicker":"closeMonthPicker"}},y=Va(),{inputProps:h,size:b="medium",inputDescriptionId:w,errorId:v,showErrorMsg:I,hasError:E,readOnly:j}=Cr(e,m.prefix);return p.createElement("div",{className:g(r,"navds-form-field",`navds-form-field--${b}`,"navds-date__field",{"navds-text-field--error":E,"navds-date__field--error":E,"navds-form-field--disabled":!!h.disabled,"navds-text-field--disabled":!!h.disabled,"navds-form-field--readonly":j,"navds-text-field--readonly":j,"navds-date__field--readonly":j})},p.createElement(je,{htmlFor:h.id,size:b,className:g("navds-form-field__label",{"navds-sr-only":n})},j&&p.createElement(Os,null),s),!!a&&p.createElement(se,{as:"div",className:g("navds-form-field__description",{"navds-sr-only":n}),id:w,size:b},a),p.createElement("div",{className:g("navds-date__field-wrapper")},p.createElement("input",Object.assign({ref:t},Xe(o,["error","errorId","size"]),h,{autoComplete:"off","aria-controls":y!=null&&y.open?y.ariaId:void 0,readOnly:j,className:g("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${b}`),size:k?11:14})),p.createElement("button",{disabled:h.disabled||j,tabIndex:j||y!=null&&y.open?-1:0,onClick:()=>{y==null||y.onOpen(),l==null||l(u.current)},type:"button",className:g("navds-date__field-button"),ref:u},p.createElement(Sg,{title:d(m.iconTitle[y!=null&&y.open?"close":"open"])}))),p.createElement("div",{className:g("navds-form-field__error"),id:v,"aria-relevant":"additions removals","aria-live":"polite"},I&&p.createElement(ot,{size:b,showIcon:!0},e.error)))}),pp=f.forwardRef((e,t)=>p.createElement(Yd,Object.assign({},e,{ref:t})));f.forwardRef((e,t)=>p.createElement(Yd,Object.assign({},e,{variant:"monthpicker",ref:t})));var yp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const bp=f.forwardRef((e,t)=>{var{className:r}=e,n=yp(e,["className"]);const{cn:s}=re();return p.createElement("div",Object.assign({},n,{ref:t,className:s("navds-modal__body",r)}))});var hp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ip=f.forwardRef((e,t)=>{var{className:r}=e,n=hp(e,["className"]);const{cn:s}=re();return p.createElement("div",Object.assign({},n,{ref:t,className:s("navds-modal__footer",r)}))});var wp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const $d=f.forwardRef((e,t)=>{var{children:r,className:n,closeButton:s=!0}=e,a=wp(e,["children","className","closeButton"]);const{cn:i}=re(),l=dt(),o=Kn("global");return p.createElement("div",Object.assign({},a,{ref:t,className:i("navds-modal__header",n)}),l.closeHandler&&s&&p.createElement(Pe,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:u=>{["Enter"," "].includes(u.key)&&u.repeat&&u.preventDefault()},onClick:l.closeHandler,icon:p.createElement($o,{title:o("close")})}),r)}),Di=({clientX:e,clientY:t},{left:r,top:n,right:s,bottom:a})=>!(e<r||t<n||e>s||t>a);function Ap(e,t,r){if(!(t&&t.closeButton===!1))return r?()=>{var n;return r()!==!1&&((n=e.current)===null||n===void 0?void 0:n.close())}:()=>{var n;return(n=e.current)===null||n===void 0?void 0:n.close()}}const jt="navds-modal__document-body";function jp(e,t,r){p.useEffect(()=>{if(r||!e.current||!t)return;e.current.open&&document.body.classList.add(jt);const n=new MutationObserver(()=>{var s;!((s=e.current)===null||s===void 0)&&s.open?document.body.classList.add(jt):document.body.classList.remove(jt)});return n.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{n.disconnect(),document.body.classList.remove(jt)}},[e,t,r])}const Er=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Wd(e,t){var r="on"+t.type.toLowerCase();return typeof e[r]=="function"&&e[r](t),e.dispatchEvent(t)}function zr(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function zd(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Ep(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return!0;return!1}function $s(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Jd(e){var t=["button","input","keygen","select","textarea"],r=t.map(function(i){return i+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=e.querySelector(r.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var s=e.querySelectorAll("*"),a=0;a<s.length&&!(s[a].tagName&&s[a].shadowRoot&&(n=Jd(s[a].shadowRoot),n));a++);return n}function Si(e){return e.isConnected||document.body.contains(e)}function Xd(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var r=oe.formSubmitter;if(!r){var n=e.target,s="getRootNode"in n&&n.getRootNode()||document;r=s.activeElement}return!r||r.form!==t?null:r}function Tp(e){if(!e.defaultPrevented){var t=e.target,r=oe.imagemapUseValue,n=Xd(e);r===null&&n&&(r=n.value);var s=zr(t);if(s){var a=n&&n.getAttribute("formmethod")||t.getAttribute("method");a==="dialog"&&(e.preventDefault(),r!=null?s.close(r):s.close())}}}function Qd(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Tp,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,n=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),s,a=function(i){if(i.target===e){var l="DOMNodeRemoved";r|=i.type.substr(0,l.length)===l,window.clearTimeout(s),s=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,a)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Qd.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Si(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),oe.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Jd(this.dialog_)),zd(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Si(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!oe.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,oe.needsCentering(this.dialog_)?(oe.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Wd(this.dialog_,t)}};var oe={};oe.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,r=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,r)+"px"};oe.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var r=document.styleSheets[t],n=null;try{n=r.cssRules}catch{}if(n)for(var s=0;s<n.length;++s){var a=n[s],i=null;try{i=document.querySelectorAll(a.selectorText)}catch{}if(!(!i||!Ep(i,e))){var l=a.style.getPropertyValue("top"),o=a.style.getPropertyValue("bottom");if(l&&l!=="auto"||o&&o!=="auto")return!0}}}return!1};oe.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!oe.isInlinePositionSetByStylesheet(e)};oe.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Qd(e)};oe.registerDialog=function(e){e.showModal||oe.forceRegisterDialog(e)};oe.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var r=[];t.forEach(function(n){for(var s=0,a;a=n.removedNodes[s];++s)a instanceof Element&&(a.localName==="dialog"&&r.push(a),r=r.concat(a.querySelectorAll("dialog")))}),r.length&&e(r)}))};oe.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};oe.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};oe.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,r;r=this.pendingDialogStack[t];++t)r.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];if(n){var s=n.dialog.parentNode||document.body;s.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};oe.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=zr(e);){for(var t=0,r;r=this.pendingDialogStack[t];++t)if(r.dialog===e)return t===0;e=e.parentElement}return!1};oe.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),zd(t),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],n=r.dialog,s=n.compareDocumentPosition(t);return s&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};oe.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&Wd(r.dialog,t)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};oe.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};oe.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};oe.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Er&&(oe.dm=new oe.DialogManager,oe.formSubmitter=null,oe.imagemapUseValue=null);if(Er){var xi=document.createElement("form");if(xi.setAttribute("method","dialog"),xi.method!=="dialog"){var Ir=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Ir){var Op=Ir.get;Ir.get=function(){return $s(this)?"dialog":Op.call(this)};var Np=Ir.set;Ir.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Np.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Ir)}}document.addEventListener("click",function(e){if(oe.formSubmitter=null,oe.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var r=e.composedPath();t=r.shift()||t}if(!(!t||!$s(t.form))){var n=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!n){if(!(t.localName==="input"&&t.type==="image"))return;oe.imagemapUseValue=e.offsetX+","+e.offsetY}var s=zr(t);s&&(oe.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,r=zr(t);if(!r){var n=Xd(e),s=n&&n.getAttribute("formmethod")||t.getAttribute("method");s==="dialog"&&e.preventDefault()}});var Rp=HTMLFormElement.prototype.submit,Pp=function(){if(!$s(this))return Rp.call(this);var e=zr(this);e&&e.close()};HTMLFormElement.prototype.submit=Pp}var qp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Pn=f.forwardRef((e,t)=>{var r,n,{header:s,children:a,open:i,onBeforeClose:l,onCancel:o,closeOnBackdropClick:u,width:d,placement:g,portal:k,className:m,"aria-labelledby":y,style:h,onClick:b,onMouseDown:w}=e,v=qp(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:I}=re(),E=f.useRef(I("navds-modal--polyfilled")),j=f.useRef(null),N=Fr(j,t),T=wn(),R=(r=hs())===null||r===void 0?void 0:r.rootElement,P=tp({root:R}),x=Va(!1),F=dt(!1)!==void 0;F&&!x&&console.error("Modals should not be nested"),f.useEffect(()=>{Er&&j.current&&P&&(oe.registerDialog(j.current),j.current.classList.add(E.current)),j.current&&P&&(j.current.autofocus=!0)},[P]),f.useEffect(()=>{j.current&&P&&i!==void 0&&(i&&!j.current.open?j.current.showModal():!i&&j.current.open&&j.current.close())},[P,i]),jp(j,P,F);const M=typeof d=="string"&&["small","medium"].includes(d),O=I("navds-modal",m,{[E.current]:Er,"navds-modal--autowidth":!d,[`navds-modal--${d}`]:M,"navds-modal--top":g==="top"&&!Er}),q=Object.assign(Object.assign({},h),M?{}:{width:d}),S=f.useRef({clientX:0,clientY:0}),L=X=>{S.current=X},B=u&&!Er,C=X=>{if(X.target!==j.current)return;const ae=j.current.getBoundingClientRect();Di(S.current,ae)||Di(X,ae)||l!==void 0&&l()===!1||j.current.close()},V=X=>{l&&l()===!1&&X.preventDefault()},$=!y&&!v["aria-label"]&&s?T:y,J=p.createElement("dialog",Object.assign({},v,{ref:N,className:O,style:q,onCancel:Tr(o,V),onClick:B?Tr(b,C):b,onMouseDown:B?Tr(w,L):w,"aria-labelledby":$}),p.createElement(cm,{closeHandler:Ap(j,s,l),ref:j},s&&p.createElement($d,null,s.label&&p.createElement(qr,{className:I("navds-modal__label")},s.label),p.createElement(ps,{size:(n=s.size)!==null&&n!==void 0?n:"medium",level:"1",id:T},s.icon&&p.createElement("span",{className:I("navds-modal__header-icon")},s.icon),s.heading)),a));return k?P?ba.createPortal(J,P):null:J});Pn.Header=$d;Pn.Body=bp;Pn.Footer=Ip;var _p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Mp=f.forwardRef((e,t)=>{var{className:r}=e,n=_p(e,["className"]);const{cn:s}=re();return p.createElement("div",Object.assign({},n,{ref:t,className:s("navds-popover__content",r)}))});var Dp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Sr=f.forwardRef((e,t)=>{var{className:r,children:n,anchorEl:s,arrow:a=!0,open:i,onClose:l,placement:o="top",offset:u,strategy:d,flip:g=!0}=e,k=Dp(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:m}=re(),y=f.useRef(null),h=dt(!1)!==void 0,b=Va(!1),w=d??(h?"fixed":"absolute"),v=b?!1:g,I=vs(!1),{update:E,refs:j,placement:N,middlewareData:{arrow:{x:T,y:R}={}},floatingStyles:P}=Ld({strategy:w,placement:o,open:i,middleware:[vd(u??(I?8:a?16:4)),v&&yd({padding:5,fallbackPlacements:["bottom","top"]}),pd({padding:12}),bd({element:y,padding:8})]});_r(()=>{j.setReference(s)},[s]);const x=Fr(j.setFloating,t);_r(()=>{if(!j.reference.current||!j.floating.current||!i)return;const M=sa(j.reference.current,j.floating.current,E);return()=>M()},[j.floating,j.reference,E,i,s]);const F={top:"bottom",right:"left",bottom:"top",left:"right"}[N.split("-")[0]];return p.createElement(yc,{asChild:!0,safeZone:{anchor:s,dismissable:j.floating.current},onDismiss:()=>i&&(l==null?void 0:l()),enabled:i},p.createElement("div",Object.assign({ref:x},k,{className:m("navds-popover",r,{"navds-popover--hidden":!i||!s}),style:Object.assign(Object.assign({},k.style),P),"data-placement":N,"aria-hidden":!i||!s}),n,a&&!I&&p.createElement("div",{ref:M=>{y.current=M},style:Object.assign(Object.assign(Object.assign({},T!=null?{left:T}:{}),R!=null?{top:R}:{}),F?{[F]:"-0.5rem"}:{}),className:m("navds-popover__arrow")})))});Sr.Content=Mp;const Sp={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},xp=({open:e,children:t,onClose:r,anchor:n,locale:s,translate:a,variant:i,popoverProps:l})=>{const o=Kn("global",cp(s)),{cn:u}=re(),d=f.useRef(null),g=dt(!1)!==void 0;return vm("screen and (min-width: 768px)",!0)&&!g?p.createElement(Sr,Object.assign({arrow:!1,anchorEl:n,open:e,onClose:r,placement:"bottom-start",role:"dialog",className:u("navds-date__popover",{"navds-date":i==="month"}),flip:!1},l),t):p.createElement(Pn,{ref:d,open:e,onClose:m=>{m.stopPropagation(),r()},"aria-label":a(Sp[i]),className:u("navds-date__modal",{"navds-date__nested-modal":g,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},p.createElement("div",{className:u("navds-date__modal-body")},t,p.createElement(Pe,{variant:"tertiary",onClick:()=>{var m;return(m=d==null?void 0:d.current)===null||m===void 0?void 0:m.close()},size:"small",type:"button"},o("close"))))};function Zd(e){return!!(e&&typeof e=="object"&&"from"in e)}var ne;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(ne||(ne={}));var Ae;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(Ae||(Ae={}));var hn;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(hn||(hn={}));var sn;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(sn||(sn={}));const Ws={},$r={};function Jr(e,t){try{const n=(Ws[e]||(Ws[e]=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format))(t).split("GMT")[1]||"";return n in $r?$r[n]:Fi(n,n.split(":"))}catch{if(e in $r)return $r[e];const r=e==null?void 0:e.match(Fp);return r?Fi(e,r.slice(1)):NaN}}const Fp=/([+-]\d\d):?(\d\d)?/;function Fi(e,t){const r=+t[0],n=+(t[1]||0);return $r[e]=r>0?r*60+n:r*60-n}class On extends Date{constructor(...t){super(),t.length>1&&typeof t[t.length-1]=="string"&&(this.timeZone=t.pop()),this.internal=new Date,isNaN(Jr(this.timeZone,this))?this.setTime(NaN):t.length?typeof t[0]=="number"&&(t.length===1||t.length===2&&typeof t[1]!="number")?this.setTime(t[0]):typeof t[0]=="string"?this.setTime(+new Date(t[0])):t[0]instanceof Date?this.setTime(+t[0]):(this.setTime(+new Date(...t)),eu(this),oa(this)):this.setTime(Date.now())}static tz(t,...r){return r.length?new On(...r,t):new On(Date.now(),t)}withTimeZone(t){return new On(+this,t)}getTimezoneOffset(){return-Jr(this.timeZone,this)}setTime(t){return Date.prototype.setTime.apply(this,arguments),oa(this),+this}[Symbol.for("constructDateFrom")](t){return new On(+new Date(t),this.timeZone)}}const Vi=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!Vi.test(e))return;const t=e.replace(Vi,"$1UTC");On.prototype[t]&&(e.startsWith("get")?On.prototype[e]=function(){return this.internal[t]()}:(On.prototype[e]=function(){return Date.prototype[t].apply(this.internal,arguments),Vp(this),+this},On.prototype[t]=function(){return Date.prototype[t].apply(this,arguments),oa(this),+this}))});function oa(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function Vp(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),eu(e)}function eu(e){const t=Jr(e.timeZone,e),r=new Date(+e);r.setUTCHours(r.getUTCHours()-1);const n=-new Date(+e).getTimezoneOffset(),s=-new Date(+r).getTimezoneOffset(),a=n-s,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();a&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+a);const l=n-t;l&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+l);const o=Jr(e.timeZone,e),d=-new Date(+e).getTimezoneOffset()-o,g=o!==t,k=d-l;if(g&&k){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+k);const m=Jr(e.timeZone,e),y=o-m;y&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+y),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+y))}}class lr extends On{static tz(t,...r){return r.length?new lr(...r,t):new lr(Date.now(),t)}toISOString(){const[t,r,n]=this.tzComponents(),s=`${t}${r}:${n}`;return this.internal.toISOString().slice(0,-1)+s}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[t,r,n,s]=this.internal.toUTCString().split(" ");return`${t==null?void 0:t.slice(0,-1)} ${n} ${r} ${s}`}toTimeString(){const t=this.internal.toUTCString().split(" ")[4],[r,n,s]=this.tzComponents();return`${t} GMT${r}${n}${s} (${Lp(this.timeZone,this)})`}toLocaleString(t,r){return Date.prototype.toLocaleString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleDateString(t,r){return Date.prototype.toLocaleDateString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleTimeString(t,r){return Date.prototype.toLocaleTimeString.call(this,t,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}tzComponents(){const t=this.getTimezoneOffset(),r=t>0?"-":"+",n=String(Math.floor(Math.abs(t)/60)).padStart(2,"0"),s=String(Math.abs(t)%60).padStart(2,"0");return[r,n,s]}withTimeZone(t){return new lr(+this,t)}[Symbol.for("constructDateFrom")](t){return new lr(+new Date(t),this.timeZone)}}function Lp(e,t){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(t).slice(12)}const Li=5,Bp=4;function Cp(e,t){const r=t.startOfMonth(e),n=r.getDay()>0?r.getDay():7,s=t.addDays(e,-n+1),a=t.addDays(s,Li*7-1);return t.getMonth(e)===t.getMonth(a)?Li:Bp}function nu(e,t){const r=t.startOfMonth(e),n=r.getDay();return n===1?r:n===0?t.addDays(r,-1*6):t.addDays(r,-1*(n-1))}function Kp(e,t){const r=nu(e,t),n=Cp(e,t);return t.addDays(r,n*7-1)}class Gn{constructor(t,r){this.Date=Date,this.today=()=>{var n;return(n=this.overrides)!=null&&n.today?this.overrides.today():this.options.timeZone?lr.tz(this.options.timeZone):new this.Date},this.newDate=(n,s,a)=>{var i;return(i=this.overrides)!=null&&i.newDate?this.overrides.newDate(n,s,a):this.options.timeZone?new lr(n,s,a,this.options.timeZone):new Date(n,s,a)},this.addDays=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.addDays)==null?void 0:i.call(a,n,s))??ct(n,s)},this.addMonths=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.addMonths)==null?void 0:i.call(a,n,s))??Oa(n,s)},this.addWeeks=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.addWeeks)==null?void 0:i.call(a,n,s))??gk(n,s)},this.addYears=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.addYears)==null?void 0:i.call(a,n,s))??Na(n,s)},this.differenceInCalendarDays=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.differenceInCalendarDays)==null?void 0:i.call(a,n,s))??zn(n,s)},this.differenceInCalendarMonths=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.differenceInCalendarMonths)==null?void 0:i.call(a,n,s))??kk(n,s)},this.eachMonthOfInterval=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.eachMonthOfInterval)==null?void 0:a.call(s,n))??jd(n)},this.endOfBroadcastWeek=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.endOfBroadcastWeek)==null?void 0:i.call(a,n,s))??Kp(n,this)},this.endOfISOWeek=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.endOfISOWeek)==null?void 0:a.call(s,n))??pk(n)},this.endOfMonth=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.endOfMonth)==null?void 0:a.call(s,n))??Ad(n)},this.endOfWeek=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.endOfWeek)==null?void 0:i.call(a,n,s??this.options))??Ed(n,s??this.options)},this.endOfYear=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.endOfYear)==null?void 0:a.call(s,n))??Es(n)},this.format=(n,s,a)=>{var l,o;const i=((o=(l=this.overrides)==null?void 0:l.format)==null?void 0:o.call(l,n,s,a??this.options))??cr(n,s,a??this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.getISOWeek)==null?void 0:a.call(s,n))??Pa(n)},this.getMonth=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.getMonth)==null?void 0:a.call(s,n))??Ma(n)},this.getYear=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.getYear)==null?void 0:a.call(s,n))??Da(n)},this.getWeek=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.getWeek)==null?void 0:i.call(a,n,s??this.options))??_a(n,s??this.options)},this.isAfter=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.isAfter)==null?void 0:i.call(a,n,s))??Rd(n,s)},this.isBefore=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.isBefore)==null?void 0:i.call(a,n,s))??vt(n,s)},this.isDate=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.isDate)==null?void 0:a.call(s,n))??wd(n)},this.isSameDay=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.isSameDay)==null?void 0:i.call(a,n,s))??Ra(n,s)},this.isSameMonth=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.isSameMonth)==null?void 0:i.call(a,n,s))??Rv(n,s)},this.isSameYear=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.isSameYear)==null?void 0:i.call(a,n,s))??Dd(n,s)},this.max=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.max)==null?void 0:a.call(s,n))??mk(n)},this.min=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.min)==null?void 0:a.call(s,n))??fk(n)},this.setMonth=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.setMonth)==null?void 0:i.call(a,n,s))??Sd(n,s)},this.setYear=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.setYear)==null?void 0:i.call(a,n,s))??xd(n,s)},this.startOfBroadcastWeek=(n,s)=>{var a,i;return((i=(a=this.overrides)==null?void 0:a.startOfBroadcastWeek)==null?void 0:i.call(a,n,s??this))??nu(n,s??this)},this.startOfDay=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.startOfDay)==null?void 0:a.call(s,n))??Cn(n)},this.startOfISOWeek=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.startOfISOWeek)==null?void 0:a.call(s,n))??mr(n)},this.startOfMonth=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.startOfMonth)==null?void 0:a.call(s,n))??fr(n)},this.startOfWeek=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.startOfWeek)==null?void 0:a.call(s,n))??Ln(n,this.options)},this.startOfYear=n=>{var s,a;return((a=(s=this.overrides)==null?void 0:s.startOfYear)==null?void 0:a.call(s,n))??kt(n)},this.options={locale:bs,...t},this.overrides=r}getDigitMap(){const{numerals:t="latn"}=this.options,r=new Intl.NumberFormat("en-US",{numberingSystem:t}),n={};for(let s=0;s<10;s++)n[s.toString()]=r.format(s);return n}replaceDigits(t){const r=this.getDigitMap();return t.replace(/\d/g,n=>r[n]||n)}formatNumber(t){return this.replaceDigits(t.toString())}}const Un=new Gn;function Gp(e,t,r={}){return Object.entries(e).filter(([,s])=>s===!0).reduce((s,[a])=>(r[a]?s.push(r[a]):t[Ae[a]]?s.push(t[Ae[a]]):t[hn[a]]&&s.push(t[hn[a]]),s),[t[ne.Day]])}function Up(e){return p.createElement("button",{...e})}function Hp(e){return p.createElement("span",{...e})}function Yp(e){const{size:t=24,orientation:r="left",className:n}=e;return p.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&p.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&p.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&p.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&p.createElement("polygon",{points:"8 18.612 14.1888889 12.5 8 6.37733333 9.91111111 4.5 18 12.5 9.91111111 20.5"}))}function $p(e){const{day:t,modifiers:r,...n}=e;return p.createElement("td",{...n})}function Wp(e){const{day:t,modifiers:r,...n}=e,s=p.useRef(null);return p.useEffect(()=>{var a;r.focused&&((a=s.current)==null||a.focus())},[r.focused]),p.createElement("button",{ref:s,...n})}function zp(e){const{options:t,className:r,components:n,classNames:s,...a}=e,i=[s[ne.Dropdown],r].join(" "),l=t==null?void 0:t.find(({value:o})=>o===a.value);return p.createElement("span",{"data-disabled":a.disabled,className:s[ne.DropdownRoot]},p.createElement(n.Select,{className:i,...a},t==null?void 0:t.map(({value:o,label:u,disabled:d})=>p.createElement(n.Option,{key:o,value:o,disabled:d},u))),p.createElement("span",{className:s[ne.CaptionLabel],"aria-hidden":!0},l==null?void 0:l.label,p.createElement(n.Chevron,{orientation:"down",size:18,className:s[ne.Chevron]})))}function Jp(e){return p.createElement("div",{...e})}function Xp(e){return p.createElement("div",{...e})}function Qp(e){const{calendarMonth:t,displayIndex:r,...n}=e;return p.createElement("div",{...n},e.children)}function Zp(e){const{calendarMonth:t,displayIndex:r,...n}=e;return p.createElement("div",{...n})}function ey(e){return p.createElement("table",{...e})}function ny(e){return p.createElement("div",{...e})}const ru=f.createContext(void 0);function vr(){const e=f.useContext(ru);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function ry(e){const{components:t}=vr();return p.createElement(t.Dropdown,{...e})}function ty(e){const{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:s,...a}=e,{components:i,classNames:l,labels:{labelPrevious:o,labelNext:u}}=vr(),d=f.useCallback(k=>{s&&(r==null||r(k))},[s,r]),g=f.useCallback(k=>{n&&(t==null||t(k))},[n,t]);return p.createElement("nav",{...a},p.createElement(i.PreviousMonthButton,{type:"button",className:l[ne.PreviousMonthButton],tabIndex:n?void 0:-1,"aria-disabled":n?void 0:!0,"aria-label":o(n),onClick:g},p.createElement(i.Chevron,{disabled:n?void 0:!0,className:l[ne.Chevron],orientation:"left"})),p.createElement(i.NextMonthButton,{type:"button",className:l[ne.NextMonthButton],tabIndex:s?void 0:-1,"aria-disabled":s?void 0:!0,"aria-label":u(s),onClick:d},p.createElement(i.Chevron,{disabled:s?void 0:!0,orientation:"right",className:l[ne.Chevron]})))}function sy(e){const{components:t}=vr();return p.createElement(t.Button,{...e})}function ay(e){return p.createElement("option",{...e})}function iy(e){const{components:t}=vr();return p.createElement(t.Button,{...e})}function ly(e){const{rootRef:t,...r}=e;return p.createElement("div",{...r,ref:t})}function oy(e){return p.createElement("select",{...e})}function dy(e){const{week:t,...r}=e;return p.createElement("tr",{...r})}function uy(e){return p.createElement("th",{...e})}function gy(e){return p.createElement("thead",{"aria-hidden":!0},p.createElement("tr",{...e}))}function my(e){const{week:t,...r}=e;return p.createElement("th",{...r})}function fy(e){return p.createElement("th",{...e})}function cy(e){return p.createElement("tbody",{...e})}function ky(e){const{components:t}=vr();return p.createElement(t.Dropdown,{...e})}const vy=Object.freeze(Object.defineProperty({__proto__:null,Button:Up,CaptionLabel:Hp,Chevron:Yp,Day:$p,DayButton:Wp,Dropdown:zp,DropdownNav:Jp,Footer:Xp,Month:Qp,MonthCaption:Zp,MonthGrid:ey,Months:ny,MonthsDropdown:ry,Nav:ty,NextMonthButton:sy,Option:ay,PreviousMonthButton:iy,Root:ly,Select:oy,Week:dy,WeekNumber:my,WeekNumberHeader:fy,Weekday:uy,Weekdays:gy,Weeks:cy,YearsDropdown:ky},Symbol.toStringTag,{value:"Module"}));function py(e){return{...vy,...e}}function yy(e){const t={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0};return Object.entries(e).forEach(([r,n])=>{r.startsWith("data-")&&(t[r]=n)}),t}function by(){const e={};for(const t in ne)e[ne[t]]=`rdp-${ne[t]}`;for(const t in Ae)e[Ae[t]]=`rdp-${Ae[t]}`;for(const t in hn)e[hn[t]]=`rdp-${hn[t]}`;for(const t in sn)e[sn[t]]=`rdp-${sn[t]}`;return e}function tu(e,t,r){return(r??new Gn(t)).format(e,"LLLL y")}const hy=tu;function Iy(e,t,r){return(r??new Gn(t)).format(e,"d")}function wy(e,t=Un){return t.format(e,"LLLL")}function Ay(e){return e<10?`0${e.toLocaleString()}`:`${e.toLocaleString()}`}function jy(){return""}function Ey(e,t,r){return(r??new Gn(t)).format(e,"cccccc")}function su(e,t=Un){return t.format(e,"yyyy")}const Ty=su,Oy=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:tu,formatDay:Iy,formatMonthCaption:hy,formatMonthDropdown:wy,formatWeekNumber:Ay,formatWeekNumberHeader:jy,formatWeekdayName:Ey,formatYearCaption:Ty,formatYearDropdown:su},Symbol.toStringTag,{value:"Module"}));function Ny(e){return e!=null&&e.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e!=null&&e.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...Oy,...e}}function Ry(e,t,r,n,s){const{startOfMonth:a,startOfYear:i,endOfYear:l,eachMonthOfInterval:o,getMonth:u}=s;return o({start:i(e),end:l(e)}).map(k=>{const m=n.formatMonthDropdown(k,s),y=u(k),h=t&&k<a(t)||r&&k>a(r)||!1;return{value:y,label:m,disabled:h}})}function Py(e,t={},r={}){let n={...t==null?void 0:t[ne.Day]};return Object.entries(e).filter(([,s])=>s===!0).forEach(([s])=>{n={...n,...r==null?void 0:r[s]}}),n}function qy(e,t,r){const n=e.today(),s=t?e.startOfISOWeek(n):e.startOfWeek(n),a=[];for(let i=0;i<7;i++){const l=e.addDays(s,i);a.push(l)}return a}function _y(e,t,r,n){if(!e||!t)return;const{startOfYear:s,endOfYear:a,addYears:i,getYear:l,isBefore:o,isSameYear:u}=n,d=s(e),g=a(t),k=[];let m=d;for(;o(m,g)||u(m,g);)k.push(m),m=i(m,1);return k.map(y=>{const h=r.formatYearDropdown(y,n);return{value:l(y),label:h,disabled:!1}})}function au(e,t,r){return(r??new Gn(t)).format(e,"LLLL y")}const My=au;function Dy(e,t,r,n){let s=(n??new Gn(r)).format(e,"PPPP");return t!=null&&t.today&&(s=`Today, ${s}`),s}function iu(e,t,r,n){let s=(n??new Gn(r)).format(e,"PPPP");return t.today&&(s=`Today, ${s}`),t.selected&&(s=`${s}, selected`),s}const Sy=iu;function xy(){return""}function Fy(e){return"Choose the Month"}function Vy(e){return"Go to the Next Month"}function Ly(e){return"Go to the Previous Month"}function By(e,t,r){return(r??new Gn(t)).format(e,"cccc")}function Cy(e,t){return`Week ${e}`}function Ky(e){return"Week Number"}function Gy(e){return"Choose the Year"}const Uy=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:My,labelDay:Sy,labelDayButton:iu,labelGrid:au,labelGridcell:Dy,labelMonthDropdown:Fy,labelNav:xy,labelNext:Vy,labelPrevious:Ly,labelWeekNumber:Cy,labelWeekNumberHeader:Ky,labelWeekday:By,labelYearDropdown:Gy},Symbol.toStringTag,{value:"Module"}));function Hy(e,t,{classNames:r,months:n,focused:s,dateLib:a}){const i=f.useRef(null),l=f.useRef(n),o=f.useRef(!1);f.useLayoutEffect(()=>{const u=l.current;if(l.current=n,!t||!e.current||!(e.current instanceof HTMLElement))return;const d=i.current,g=e.current.cloneNode(!0);if(g instanceof HTMLElement?([...g.querySelectorAll("[data-animated-month]")??[]].forEach(b=>{const w=b.querySelector("[data-animated-month]");w&&b.contains(w)&&b.removeChild(w)}),i.current=g):i.current=null,n.length===0||u.length===0||n.length!==u.length||s||o.current||a.isSameMonth(n[0].date,u[0].date))return;const m=[...(d==null?void 0:d.querySelectorAll("[data-animated-month]"))??[]],y=[...e.current.querySelectorAll("[data-animated-month]")??[]];if(y&&y.every(h=>h instanceof HTMLElement)&&m&&m.every(h=>h instanceof HTMLElement)){o.current=!0;const h=a.isAfter(n[0].date,u[0].date);y.forEach((b,w)=>{const v=m[w];if(!v)return;const I=h?r[sn.caption_after_enter]:r[sn.caption_before_enter],E=h?r[sn.weeks_after_enter]:r[sn.weeks_before_enter];b.style.position="relative",b.style.overflow="hidden";const j=b.querySelector("[data-animated-caption]");j&&j instanceof HTMLElement&&j.classList.add(I);const N=b.querySelector("[data-animated-weeks]");N&&N instanceof HTMLElement&&N.classList.add(E);const T=()=>{o.current=!1,j&&j instanceof HTMLElement&&j.classList.remove(I),N&&N instanceof HTMLElement&&N.classList.remove(E),b.style.position="",b.style.overflow="",b.contains(v)&&b.removeChild(v)};v.style.pointerEvents="none",v.style.position="absolute",v.style.overflow="hidden",v.setAttribute("aria-hidden","true");const R=v.querySelector("[data-animated-weekdays]");R&&R instanceof HTMLElement&&(R.style.opacity="0");const P=v.querySelector("[data-animated-caption]");P&&P instanceof HTMLElement&&(P.classList.add(h?r[sn.caption_before_exit]:r[sn.caption_after_exit]),P.addEventListener("animationend",T));const x=v.querySelector("[data-animated-weeks]");x&&x instanceof HTMLElement&&x.classList.add(h?r[sn.weeks_before_exit]:r[sn.weeks_after_exit]),b.insertBefore(v,b.firstChild)})}})}function Yy(e,t,r,n){const s=e[0],a=e[e.length-1],{ISOWeek:i,fixedWeeks:l,broadcastCalendar:o}=r??{},{addDays:u,differenceInCalendarDays:d,differenceInCalendarMonths:g,endOfBroadcastWeek:k,endOfISOWeek:m,endOfMonth:y,endOfWeek:h,isAfter:b,startOfBroadcastWeek:w,startOfISOWeek:v,startOfWeek:I}=n,E=o?w(s,n):i?v(s):I(s),j=o?k(a,n):i?m(y(a)):h(y(a)),N=d(j,E),T=g(a,s)+1,R=[];for(let F=0;F<=N;F++){const M=u(E,F);if(t&&b(M,t))break;R.push(M)}const x=(o?35:42)*T;if(l&&R.length<x){const F=x-R.length;for(let M=0;M<F;M++){const O=u(R[R.length-1],1);R.push(O)}}return R}function $y(e){const t=[];return e.reduce((r,n)=>{const s=[],a=n.weeks.reduce((i,l)=>[...i,...l.days],s);return[...r,...a]},t)}function Wy(e,t,r,n){const{numberOfMonths:s=1}=r,a=[];for(let i=0;i<s;i++){const l=n.addMonths(e,i);if(t&&l>t)break;a.push(l)}return a}function Bi(e,t){const{month:r,defaultMonth:n,today:s=t.today(),numberOfMonths:a=1,endMonth:i,startMonth:l}=e;let o=r||n||s;const{differenceInCalendarMonths:u,addMonths:d,startOfMonth:g}=t;if(i&&u(i,o)<0){const k=-1*(a-1);o=d(i,k)}return l&&u(o,l)<0&&(o=l),g(o)}class lu{constructor(t,r,n=Un){this.date=t,this.displayMonth=r,this.outside=!!(r&&!n.isSameMonth(t,r)),this.dateLib=n}isEqualTo(t){return this.dateLib.isSameDay(t.date,this.date)&&this.dateLib.isSameMonth(t.displayMonth,this.displayMonth)}}class zy{constructor(t,r){this.date=t,this.weeks=r}}class Jy{constructor(t,r){this.days=r,this.weekNumber=t}}function Xy(e,t,r,n){const{addDays:s,endOfBroadcastWeek:a,endOfISOWeek:i,endOfMonth:l,endOfWeek:o,getISOWeek:u,getWeek:d,startOfBroadcastWeek:g,startOfISOWeek:k,startOfWeek:m}=n,y=e.reduce((h,b)=>{const w=r.broadcastCalendar?g(b,n):r.ISOWeek?k(b):m(b),v=r.broadcastCalendar?a(b,n):r.ISOWeek?i(l(b)):o(l(b)),I=t.filter(T=>T>=w&&T<=v),E=r.broadcastCalendar?35:42;if(r.fixedWeeks&&I.length<E){const T=t.filter(R=>{const P=E-I.length;return R>v&&R<=s(v,P)});I.push(...T)}const j=I.reduce((T,R)=>{const P=r.ISOWeek?u(R):d(R),x=T.find(M=>M.weekNumber===P),F=new lu(R,b,n);return x?x.days.push(F):T.push(new Jy(P,[F])),T},[]),N=new zy(b,j);return h.push(N),h},[]);return r.reverseMonths?y.reverse():y}function Qy(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:s,startOfDay:a,startOfMonth:i,endOfMonth:l,addYears:o,endOfYear:u,newDate:d,today:g}=t,{fromYear:k,toYear:m,fromMonth:y,toMonth:h}=e;!r&&y&&(r=y),!r&&k&&(r=t.newDate(k,0,1)),!n&&h&&(n=h),!n&&m&&(n=d(m,11,31));const b=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return r?r=i(r):k?r=d(k,0,1):!r&&b&&(r=s(o(e.today??g(),-100))),n?n=l(n):m?n=d(m,11,31):!n&&b&&(n=u(e.today??g())),[r&&a(r),n&&a(n)]}function Zy(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:s,numberOfMonths:a=1}=r,{startOfMonth:i,addMonths:l,differenceInCalendarMonths:o}=n,u=s?a:1,d=i(e);if(!t)return l(d,u);if(!(o(t,e)<a))return l(d,u)}function eb(e,t,r,n){if(r.disableNavigation)return;const{pagedNavigation:s,numberOfMonths:a}=r,{startOfMonth:i,addMonths:l,differenceInCalendarMonths:o}=n,u=s?a??1:1,d=i(e);if(!t)return l(d,-u);if(!(o(d,t)<=0))return l(d,-u)}function nb(e){const t=[];return e.reduce((r,n)=>[...r,...n.weeks],t)}function Rs(e,t){const[r,n]=f.useState(e);return[t===void 0?r:t,n]}function rb(e,t){const[r,n]=Qy(e,t),{startOfMonth:s,endOfMonth:a}=t,i=Bi(e,t),[l,o]=Rs(i,e.month?i:void 0);f.useEffect(()=>{const N=Bi(e,t);o(N)},[e.timeZone]);const u=Wy(l,n,e,t),d=Yy(u,e.endMonth?a(e.endMonth):void 0,e,t),g=Xy(u,d,e,t),k=nb(g),m=$y(g),y=eb(l,r,e,t),h=Zy(l,n,e,t),{disableNavigation:b,onMonthChange:w}=e,v=N=>k.some(T=>T.days.some(R=>R.isEqualTo(N))),I=N=>{if(b)return;let T=s(N);r&&T<s(r)&&(T=s(r)),n&&T>s(n)&&(T=s(n)),o(T),w==null||w(T)};return{months:g,weeks:k,days:m,navStart:r,navEnd:n,previousMonth:y,nextMonth:h,goToMonth:I,goToDay:N=>{v(N)||I(N.date)}}}function tb(e,t,r,n){let s,a=0,i=!1;for(;a<e.length&&!i;){const l=e[a],o=t(l);!o[Ae.disabled]&&!o[Ae.hidden]&&!o[Ae.outside]&&(o[Ae.focused]||n!=null&&n.isEqualTo(l)||r(l.date)||o[Ae.today])&&(s=l,i=!0),a++}return s||(s=e.find(l=>{const o=t(l);return!o[Ae.disabled]&&!o[Ae.hidden]&&!o[Ae.outside]})),s}function xn(e,t,r=!1,n=Un){let{from:s,to:a}=e;const{differenceInCalendarDays:i,isSameDay:l}=n;return s&&a?(i(a,s)<0&&([s,a]=[a,s]),i(t,s)>=(r?1:0)&&i(a,t)>=(r?1:0)):!r&&a?l(a,t):!r&&s?l(s,t):!1}function ou(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function La(e){return!!(e&&typeof e=="object"&&"from"in e)}function du(e){return!!(e&&typeof e=="object"&&"after"in e)}function uu(e){return!!(e&&typeof e=="object"&&"before"in e)}function gu(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function mu(e,t){return Array.isArray(e)&&e.every(t.isDate)}function un(e,t,r=Un){const n=Array.isArray(t)?t:[t],{isSameDay:s,differenceInCalendarDays:a,isAfter:i}=r;return n.some(l=>{if(typeof l=="boolean")return l;if(r.isDate(l))return s(e,l);if(mu(l,r))return l.includes(e);if(La(l))return xn(l,e,!1,r);if(gu(l))return Array.isArray(l.dayOfWeek)?l.dayOfWeek.includes(e.getDay()):l.dayOfWeek===e.getDay();if(ou(l)){const o=a(l.before,e),u=a(l.after,e),d=o>0,g=u<0;return i(l.before,l.after)?g&&d:d||g}return du(l)?a(e,l.after)>0:uu(l)?a(l.before,e)>0:typeof l=="function"?l(e):!1})}function sb(e,t,r,n,s,a,i){const{ISOWeek:l,broadcastCalendar:o}=a,{addDays:u,addMonths:d,addWeeks:g,addYears:k,endOfBroadcastWeek:m,endOfISOWeek:y,endOfWeek:h,max:b,min:w,startOfBroadcastWeek:v,startOfISOWeek:I,startOfWeek:E}=i;let N={day:u,week:g,month:d,year:k,startOfWeek:T=>o?v(T,i):l?I(T):E(T),endOfWeek:T=>o?m(T,i):l?y(T):h(T)}[e](r,t==="after"?1:-1);return t==="before"&&n?N=b([n,N]):t==="after"&&s&&(N=w([s,N])),N}function fu(e,t,r,n,s,a,i,l=0){if(l>365)return;const o=sb(e,t,r.date,n,s,a,i),u=!!(a.disabled&&un(o,a.disabled,i)),d=!!(a.hidden&&un(o,a.hidden,i)),g=o,k=new lu(o,g,i);return!u&&!d?k:fu(e,t,k,n,s,a,i,l+1)}function ab(e,t,r,n,s){const{autoFocus:a}=e,[i,l]=f.useState(),o=tb(t.days,r,n||(()=>!1),i),[u,d]=f.useState(a?o:void 0);return{isFocusTarget:h=>!!(o!=null&&o.isEqualTo(h)),setFocused:d,focused:u,blur:()=>{l(u),d(void 0)},moveFocus:(h,b)=>{if(!u)return;const w=fu(h,b,u,t.navStart,t.navEnd,e,s);w&&(t.goToDay(w),d(w))}}}function ib(e,t,r){const{disabled:n,hidden:s,modifiers:a,showOutsideDays:i,broadcastCalendar:l,today:o}=t,{isSameDay:u,isSameMonth:d,startOfMonth:g,isBefore:k,endOfMonth:m,isAfter:y}=r,h=t.startMonth&&g(t.startMonth),b=t.endMonth&&m(t.endMonth),w={[Ae.focused]:[],[Ae.outside]:[],[Ae.disabled]:[],[Ae.hidden]:[],[Ae.today]:[]},v={};for(const I of e){const{date:E,displayMonth:j}=I,N=!!(j&&!d(E,j)),T=!!(h&&k(E,h)),R=!!(b&&y(E,b)),P=!!(n&&un(E,n,r)),x=!!(s&&un(E,s,r))||T||R||!l&&!i&&N||l&&i===!1&&N,F=u(E,o??r.today());N&&w.outside.push(I),P&&w.disabled.push(I),x&&w.hidden.push(I),F&&w.today.push(I),a&&Object.keys(a).forEach(M=>{const O=a==null?void 0:a[M];O&&un(E,O,r)&&(v[M]?v[M].push(I):v[M]=[I])})}return I=>{const E={[Ae.focused]:!1,[Ae.disabled]:!1,[Ae.hidden]:!1,[Ae.outside]:!1,[Ae.today]:!1},j={};for(const N in w){const T=w[N];E[N]=T.some(R=>R===I)}for(const N in v)j[N]=v[N].some(T=>T===I);return{...E,...j}}}function lb(e,t){const{selected:r,required:n,onSelect:s}=e,[a,i]=Rs(r,s?r:void 0),l=s?r:a,{isSameDay:o}=t,u=m=>(l==null?void 0:l.some(y=>o(y,m)))??!1,{min:d,max:g}=e;return{selected:l,select:(m,y,h)=>{let b=[...l??[]];if(u(m)){if((l==null?void 0:l.length)===d||n&&(l==null?void 0:l.length)===1)return;b=l==null?void 0:l.filter(w=>!o(w,m))}else(l==null?void 0:l.length)===g?b=[m]:b=[...b,m];return s||i(b),s==null||s(b,m,y,h),b},isSelected:u}}function ob(e,t,r=0,n=0,s=!1,a=Un){const{from:i,to:l}=t||{},{isSameDay:o,isAfter:u,isBefore:d}=a;let g;if(!i&&!l)g={from:e,to:r>0?void 0:e};else if(i&&!l)o(i,e)?s?g={from:i,to:void 0}:g=void 0:d(e,i)?g={from:e,to:i}:g={from:i,to:e};else if(i&&l)if(o(i,e)&&o(l,e))s?g={from:i,to:l}:g=void 0;else if(o(i,e))g={from:i,to:r>0?void 0:e};else if(o(l,e))g={from:e,to:r>0?void 0:e};else if(d(e,i))g={from:e,to:l};else if(u(e,i))g={from:i,to:e};else if(u(e,l))g={from:i,to:e};else throw new Error("Invalid range");if(g!=null&&g.from&&(g!=null&&g.to)){const k=a.differenceInCalendarDays(g.to,g.from);n>0&&k>n?g={from:e,to:void 0}:r>1&&k<r&&(g={from:e,to:void 0})}return g}function db(e,t,r=Un){const n=Array.isArray(t)?t:[t];let s=e.from;const a=r.differenceInCalendarDays(e.to,e.from),i=Math.min(a,6);for(let l=0;l<=i;l++){if(n.includes(s.getDay()))return!0;s=r.addDays(s,1)}return!1}function Ci(e,t,r=Un){return xn(e,t.from,!1,r)||xn(e,t.to,!1,r)||xn(t,e.from,!1,r)||xn(t,e.to,!1,r)}function ub(e,t,r=Un){const n=Array.isArray(t)?t:[t];if(n.filter(l=>typeof l!="function").some(l=>typeof l=="boolean"?l:r.isDate(l)?xn(e,l,!1,r):mu(l,r)?l.some(o=>xn(e,o,!1,r)):La(l)?l.from&&l.to?Ci(e,{from:l.from,to:l.to},r):!1:gu(l)?db(e,l.dayOfWeek,r):ou(l)?r.isAfter(l.before,l.after)?Ci(e,{from:r.addDays(l.after,1),to:r.addDays(l.before,-1)},r):un(e.from,l,r)||un(e.to,l,r):du(l)||uu(l)?un(e.from,l,r)||un(e.to,l,r):!1))return!0;const i=n.filter(l=>typeof l=="function");if(i.length){let l=e.from;const o=r.differenceInCalendarDays(e.to,e.from);for(let u=0;u<=o;u++){if(i.some(d=>d(l)))return!0;l=r.addDays(l,1)}}return!1}function gb(e,t){const{disabled:r,excludeDisabled:n,selected:s,required:a,onSelect:i}=e,[l,o]=Rs(s,i?s:void 0),u=i?s:l;return{selected:u,select:(k,m,y)=>{const{min:h,max:b}=e,w=k?ob(k,u,h,b,a,t):void 0;return n&&r&&(w!=null&&w.from)&&w.to&&ub({from:w.from,to:w.to},r,t)&&(w.from=k,w.to=void 0),i||o(w),i==null||i(w,k,m,y),w},isSelected:k=>u&&xn(u,k,!1,t)}}function mb(e,t){const{selected:r,required:n,onSelect:s}=e,[a,i]=Rs(r,s?r:void 0),l=s?r:a,{isSameDay:o}=t;return{selected:l,select:(g,k,m)=>{let y=g;return!n&&l&&l&&o(g,l)&&(y=void 0),s||i(y),s==null||s(y,g,k,m),y},isSelected:g=>l?o(l,g):!1}}function fb(e,t){const r=mb(e,t),n=lb(e,t),s=gb(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return s;default:return}}function cb(e){const{components:t,formatters:r,labels:n,dateLib:s,locale:a,classNames:i}=f.useMemo(()=>{const ie={...bs,...e.locale};return{dateLib:new Gn({locale:ie,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:py(e.components),formatters:Ny(e.formatters),labels:{...Uy,...e.labels},locale:ie,classNames:{...by(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:l,mode:o,onDayBlur:u,onDayClick:d,onDayFocus:g,onDayKeyDown:k,onDayMouseEnter:m,onDayMouseLeave:y,onNextClick:h,onPrevClick:b,showWeekNumber:w,styles:v}=e,{formatCaption:I,formatDay:E,formatMonthDropdown:j,formatWeekNumber:N,formatWeekNumberHeader:T,formatWeekdayName:R,formatYearDropdown:P}=r,x=rb(e,s),{days:F,months:M,navStart:O,navEnd:q,previousMonth:S,nextMonth:L,goToMonth:B}=x,C=ib(F,e,s),{isSelected:V,select:$,selected:J}=fb(e,s)??{},{blur:X,focused:ae,isFocusTarget:Ue,moveFocus:Z,setFocused:G}=ab(e,x,C,V??(()=>!1),s),{labelDayButton:ee,labelGridcell:te,labelGrid:ge,labelMonthDropdown:Le,labelNav:Be,labelWeekday:Ce,labelWeekNumber:_n,labelWeekNumberHeader:cn,labelYearDropdown:kn}=n,rr=f.useMemo(()=>qy(s,e.ISOWeek),[s,e.ISOWeek]),Hn=o!==void 0||d!==void 0,pr=f.useCallback(()=>{S&&(B(S),b==null||b(S))},[S,B,b]),Yn=f.useCallback(()=>{L&&(B(L),h==null||h(L))},[B,L,h]),A=f.useCallback((ie,Ee)=>ye=>{ye.preventDefault(),ye.stopPropagation(),G(ie),$==null||$(ie.date,Ee,ye),d==null||d(ie.date,Ee,ye)},[$,d,G]),_=f.useCallback((ie,Ee)=>ye=>{G(ie),g==null||g(ie.date,Ee,ye)},[g,G]),D=f.useCallback((ie,Ee)=>ye=>{X(),u==null||u(ie.date,Ee,ye)},[X,u]),W=f.useCallback((ie,Ee)=>ye=>{const pn={ArrowLeft:["day",e.dir==="rtl"?"after":"before"],ArrowRight:["day",e.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[ye.shiftKey?"year":"month","before"],PageDown:[ye.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(pn[ye.key]){ye.preventDefault(),ye.stopPropagation();const[tn,tr]=pn[ye.key];Z(tn,tr)}k==null||k(ie.date,Ee,ye)},[Z,k,e.dir]),U=f.useCallback((ie,Ee)=>ye=>{m==null||m(ie.date,Ee,ye)},[m]),K=f.useCallback((ie,Ee)=>ye=>{y==null||y(ie.date,Ee,ye)},[y]),Q=f.useCallback(ie=>Ee=>{const ye=Number(Ee.target.value),pn=s.setMonth(s.startOfMonth(ie),ye);B(pn)},[s,B]),de=f.useCallback(ie=>Ee=>{const ye=Number(Ee.target.value),pn=s.setYear(s.startOfMonth(ie),ye);B(pn)},[s,B]),{className:pe,style:Ze}=f.useMemo(()=>({className:[i[ne.Root],e.className].filter(Boolean).join(" "),style:{...v==null?void 0:v[ne.Root],...e.style}}),[i,e.className,e.style,v]),yr=yy(e),vn=f.useRef(null);Hy(vn,!!e.animate,{classNames:i,months:M,focused:ae,dateLib:s});const Ds={dayPickerProps:e,selected:J,select:$,isSelected:V,months:M,nextMonth:L,previousMonth:S,goToMonth:B,getModifiers:C,components:t,classNames:i,styles:v,labels:n,formatters:r};return p.createElement(ru.Provider,{value:Ds},p.createElement(t.Root,{rootRef:e.animate?vn:void 0,className:pe,style:Ze,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...yr},p.createElement(t.Months,{className:i[ne.Months],style:v==null?void 0:v[ne.Months]},!e.hideNavigation&&p.createElement(t.Nav,{className:i[ne.Nav],style:v==null?void 0:v[ne.Nav],"aria-label":Be(),onPreviousClick:pr,onNextClick:Yn,previousMonth:S,nextMonth:L}),M.map((ie,Ee)=>{const ye=Ry(ie.date,O,q,r,s),pn=_y(O,q,r,s);return p.createElement(t.Month,{"data-animated-month":e.animate?"true":void 0,className:i[ne.Month],style:v==null?void 0:v[ne.Month],key:Ee,displayIndex:Ee,calendarMonth:ie},p.createElement(t.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:i[ne.MonthCaption],style:v==null?void 0:v[ne.MonthCaption],calendarMonth:ie,displayIndex:Ee},l!=null&&l.startsWith("dropdown")?p.createElement(t.DropdownNav,{className:i[ne.Dropdowns],style:v==null?void 0:v[ne.Dropdowns]},l==="dropdown"||l==="dropdown-months"?p.createElement(t.MonthsDropdown,{className:i[ne.MonthsDropdown],"aria-label":Le(),classNames:i,components:t,disabled:!!e.disableNavigation,onChange:Q(ie.date),options:ye,style:v==null?void 0:v[ne.Dropdown],value:s.getMonth(ie.date)}):p.createElement("span",{role:"status","aria-live":"polite"},j(ie.date,s)),l==="dropdown"||l==="dropdown-years"?p.createElement(t.YearsDropdown,{className:i[ne.YearsDropdown],"aria-label":kn(s.options),classNames:i,components:t,disabled:!!e.disableNavigation,onChange:de(ie.date),options:pn,style:v==null?void 0:v[ne.Dropdown],value:s.getYear(ie.date)}):p.createElement("span",{role:"status","aria-live":"polite"},P(ie.date,s))):p.createElement(t.CaptionLabel,{className:i[ne.CaptionLabel],role:"status","aria-live":"polite"},I(ie.date,s.options,s))),p.createElement(t.MonthGrid,{role:"grid","aria-multiselectable":o==="multiple"||o==="range","aria-label":ge(ie.date,s.options,s)||void 0,className:i[ne.MonthGrid],style:v==null?void 0:v[ne.MonthGrid]},!e.hideWeekdays&&p.createElement(t.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:i[ne.Weekdays],style:v==null?void 0:v[ne.Weekdays]},w&&p.createElement(t.WeekNumberHeader,{"aria-label":cn(s.options),className:i[ne.WeekNumberHeader],style:v==null?void 0:v[ne.WeekNumberHeader],scope:"col"},T()),rr.map((tn,tr)=>p.createElement(t.Weekday,{"aria-label":Ce(tn,s.options,s),className:i[ne.Weekday],key:tr,style:v==null?void 0:v[ne.Weekday],scope:"col"},R(tn,s.options,s)))),p.createElement(t.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:i[ne.Weeks],style:v==null?void 0:v[ne.Weeks]},ie.weeks.map((tn,tr)=>p.createElement(t.Week,{className:i[ne.Week],key:tn.weekNumber,style:v==null?void 0:v[ne.Week],week:tn},w&&p.createElement(t.WeekNumber,{week:tn,style:v==null?void 0:v[ne.WeekNumber],"aria-label":_n(tn.weekNumber,{locale:a}),className:i[ne.WeekNumber],scope:"row",role:"rowheader"},N(tn.weekNumber)),tn.days.map(He=>{const{date:jn}=He,ce=C(He);if(ce[Ae.focused]=!ce.hidden&&!!(ae!=null&&ae.isEqualTo(He)),ce[hn.selected]=(V==null?void 0:V(jn))||ce.selected,La(J)){const{from:Ss,to:xs}=J;ce[hn.range_start]=!!(Ss&&xs&&s.isSameDay(jn,Ss)),ce[hn.range_end]=!!(Ss&&xs&&s.isSameDay(jn,xs)),ce[hn.range_middle]=xn(J,jn,!0,s)}const ng=Py(ce,v,e.modifiersStyles),rg=Gp(ce,i,e.modifiersClassNames),tg=!Hn&&!ce.hidden?te(jn,ce,s.options,s):void 0;return p.createElement(t.Day,{key:`${s.format(jn,"yyyy-MM-dd")}_${s.format(He.displayMonth,"yyyy-MM")}`,day:He,modifiers:ce,className:rg.join(" "),style:ng,role:"gridcell","aria-selected":ce.selected||void 0,"aria-label":tg,"data-day":s.format(jn,"yyyy-MM-dd"),"data-month":He.outside?s.format(jn,"yyyy-MM"):void 0,"data-selected":ce.selected||void 0,"data-disabled":ce.disabled||void 0,"data-hidden":ce.hidden||void 0,"data-outside":He.outside||void 0,"data-focused":ce.focused||void 0,"data-today":ce.today||void 0},!ce.hidden&&Hn?p.createElement(t.DayButton,{className:i[ne.DayButton],style:v==null?void 0:v[ne.DayButton],type:"button",day:He,modifiers:ce,disabled:ce.disabled||void 0,tabIndex:Ue(He)?0:-1,"aria-label":ee(jn,ce,s.options,s),onClick:A(He,ce),onBlur:D(He,ce),onFocus:_(He,ce),onKeyDown:W(He,ce),onMouseEnter:U(He,ce),onMouseLeave:K(He,ce)},E(jn,s.options,s)):!ce.hidden&&E(He.date,s.options,s))}))))))})),e.footer&&p.createElement(t.Footer,{className:i[ne.Footer],style:v==null?void 0:v[ne.Footer],role:"status","aria-live":"polite"},e.footer)))}var kb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const cu=f.forwardRef((e,t)=>{var{as:r="div",className:n,above:s,below:a,variant:i,asChild:l}=e,o=kb(e,["as","className","above","below","variant","asChild"]);const{cn:u}=re(),d=i==="show"?s:a,g=i==="show"?a:s,k=l?xr:r;return p.createElement(k,Object.assign({},o,{ref:t,className:u("navds-responsive",n,{[`navds-responsive__above--${d}`]:d,[`navds-responsive__below--${g}`]:g})}))}),vb=f.forwardRef((e,t)=>p.createElement(cu,Object.assign({},e,{ref:t,variant:"hide"}))),Ba=f.forwardRef((e,t)=>p.createElement(cu,Object.assign({},e,{ref:t,variant:"show"})));function In(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function pb({day:e,fromDate:t,toDate:r}){const n=r&&zn(e,Cn(r))>0,s=t&&zn(Cn(t),e)>0;return n||s||!1}const ku="dd.MM.yyyy",yb="MMMM yyyy",vu=[ku,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...vu];const zs=(e,t,r,n,s)=>{let a;const i=vu;if(s){for(const l of i)if(a=Nr(e,l,t,{locale:r}),In(a)&&!Js(e,t,r,i))return a;for(const l of[...i.map(o=>o.replace("yyyy","yy"))])if(a=Nr(e,l,t,{locale:r}),In(a)&&Js(e,t,r,i)){const o=bb(e,l,t,r);return In(new Date(o))?new Date(o):new Date("Invalid date")}return new Date("Invalid date")}for(const l of i)if(a=Nr(e,l,t,{locale:r}),In(a)&&!Js(e,t,r,i))return a;return new Date("Invalid date")};function Js(e,t,r,n){let s;const a=n.map(i=>i.replace("yyyy","yy"));for(const i of a)if(s=Nr(e,i,t,{locale:r}),In(s))return!0;return!1}function bb(e,t,r,n){const s=Nr(Ki(e,"19"),t.replace("yy","yyyy"),r,{locale:n}),a=Nr(Ki(e,"20"),t.replace("yy","yyyy"),r,{locale:n});return In(s)&&In(a)?vt(s,_v(new Date,{years:80}))?a:s:new Date("Invalid date")}function Ki(e,t){const r=e.slice(-2);return`${e.slice(0,e.length-2)}${t}${r}`}const Kr=(e,t,r,n)=>cr(e,n??ku,{locale:t}),hb=({month:e,start:t,end:r})=>{if(!e)return;let n=e;return t&&vt(n,t)&&(n=t),r&&Rd(n,r)&&(n=r),fr(n)};function Ib(e,t,r,n){return jd({start:kt(e),end:Es(e)}).map(i=>{const l=cr(i,"LLLL",{locale:n}),o=Ma(i),u=t&&i<fr(t)||r&&i>fr(r)||!1;return{value:o,label:l,disabled:u}})}function wb(e,t,r){if(!e||!t)return;const n=kt(e),s=Es(t),a=[];let i=n;for(;vt(i,s)||Dd(i,s);)a.push(i),i=Na(i,1);return a.map(l=>{const o=cr(l,"yyyy",{locale:r});return{value:Da(l),label:o,disabled:!1}})}function Ab({captionLayout:e,startMonth:t,endMonth:r,today:n}){const s=e==="dropdown",a=n??new Date;return t?t=fr(t):!t&&s&&(t=kt(Na(a,-100))),r?r=Ad(r):!r&&s&&(r=Es(a)),[t&&Cn(t),r&&Cn(r)]}var jb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Eb=e=>{var{day:t,modifiers:r,locale:n,children:s}=e,a=jb(e,["day","modifiers","locale","children"]);const{cn:i}=re(),l=f.useRef(null);return f.useEffect(()=>{var o;r.focused&&((o=l.current)===null||o===void 0||o.focus())},[r.focused]),r.hidden?p.createElement(p.Fragment,null):p.createElement("button",Object.assign({},a,{ref:l,"aria-hidden":t.outside,"aria-pressed":!!r.selected,"aria-label":cr(t.date,"cccc d",{locale:n}),"data-pressed":r.selected,"data-today":r.today||void 0,className:i(a.className,{"rdp-day_disabled":r.disabled,"rdp-day_selected":r.selected,"rdp-day_range_start":r.range_start,"rdp-day_range_middle":r.range_middle,"rdp-day_range_end":r.range_end,"rdp-day_today":r.today,"rdp-day_outside":r.outside,"rdp-day__weekend":r.weekend})}),s)};var Tb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const da=f.forwardRef((e,t)=>{const{inputProps:r,errorId:n,showErrorMsg:s,hasError:a,size:i,inputDescriptionId:l,readOnly:o}=Cr(e,"select"),{children:u,label:d,className:g,description:k,htmlSize:m,hideLabel:y=!1,style:h}=e,b=Tb(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:w}=re(),v={onMouseDown:I=>{o&&(I.preventDefault(),I.target.focus())},onKeyDown:I=>{o&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(I.key)&&I.preventDefault()}};return p.createElement("div",{className:w(g,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":o,"navds-select--error":a,"navds-select--readonly":o})},p.createElement(je,{htmlFor:r.id,size:i,className:w("navds-form-field__label",{"navds-sr-only":y})},o&&p.createElement(Bd,null),d),!!k&&p.createElement(se,{className:w("navds-form-field__description",{"navds-sr-only":y}),id:l,size:i,as:"div"},k),p.createElement("div",{className:w("navds-select__container"),style:h},p.createElement("select",Object.assign({},Xe(b,["error","errorId","size","readOnly"]),r,v,{ref:t,className:w("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:m}),u),p.createElement(ys,{className:w("navds-select__chevron"),"aria-hidden":!0})),p.createElement("div",{className:w("navds-form-field__error"),id:n,"aria-relevant":"additions removals","aria-live":"polite"},s&&p.createElement(ot,{size:i,showIcon:!0},e.error)))}),pu=({week:{weekNumber:e,days:t},onWeekNumberClick:r,className:n,style:s,showOnDesktop:a})=>{const i=Ns().translate,{cn:l}=re(),{getModifiers:o}=vr(),u=f.useMemo(()=>t.filter(g=>{const k=o(g);return!(k.hidden||k.outside||k.disabled)}).length===0,[t,o]),d=a?Ba:vb;return!r||u?p.createElement(d,{above:"sm",asChild:!0},p.createElement("td",{className:"rdp-cell"},p.createElement(qr,{as:"span",textColor:"subtle",className:n,style:s,"aria-label":i("weekNumber",{week:e})},e))):p.createElement(d,{above:"sm",asChild:!0},p.createElement("td",{className:l("rdp-cell",{"navds-date__week-wrapper":!a})},p.createElement(Pe,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:s,className:l("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{r(e,t.map(g=>g.date))},icon:p.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},Ob=({onWeekNumberClick:e,weeks:t})=>{const r=Ns().translate,{cn:n}=re(),s=wn();return e?p.createElement(Ba,{below:"sm",asChild:!0},p.createElement("table",{className:"rdp-table",role:"grid"},p.createElement("tbody",{className:"rdp-tbody"},p.createElement("tr",{className:n("rdp-row navds-date__week-row")},p.createElement(qr,{as:"th",weight:"semibold",className:n("rdp-cell navds-date__week-cell")},p.createElement("span",{className:n("navds-date__week-wrapper"),id:s},r("week"))),t==null?void 0:t.map(a=>p.createElement(pu,{key:a.weekNumber,week:a,onWeekNumberClick:e,showOnDesktop:!1,className:n("navds-date__week-wrapper")})))))):null};var Nb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Rb=e=>{var{children:t,calendarMonth:r,locale:n,onWeekNumberClick:s}=e,a=Nb(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:l,previousMonth:o,nextMonth:u}=vr(),{captionLayout:d}=i,{cn:g}=re(),k=Ns().translate,m=f.useCallback((I,E)=>{const j=Number(E.target.value),N=Sd(fr(I),j);l(N)},[l]),y=f.useCallback((I,E)=>{const j=Number(E.target.value),N=xd(fr(I),j);l(N)},[l]),[h,b]=Ab({captionLayout:d==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),w=Ib(r.date,h,b,n),v=wb(h,b,n);return p.createElement("div",Object.assign({},Xe(a,["displayIndex"])),p.createElement("div",{className:g("navds-date__caption")},(d==null?void 0:d.startsWith("dropdown"))&&p.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:g("navds-sr-only")},cr(r.date,"LLLL y",{locale:n})),p.createElement(Pe,{variant:"tertiary-neutral",disabled:!o,onClick:()=>o&&l(o),icon:p.createElement(Rg,{title:k("goToPreviousMonth")}),className:g("navds-date__caption-button"),type:"button"}),d!=null&&d.startsWith("dropdown")?p.createElement("div",{className:g("navds-date__caption")},p.createElement(da,{label:k("month"),hideLabel:!0,className:g("navds-date__caption__month"),onChange:I=>m(r.date,I),value:Ma(r.date)},w==null?void 0:w.map(({value:I,label:E,disabled:j})=>p.createElement("option",{key:I,value:I,disabled:j},E))),p.createElement(da,{label:k("year"),hideLabel:!0,className:g("navds-date__caption__year"),onChange:I=>y(r.date,I),value:Da(r.date)},v==null?void 0:v.map(({value:I,label:E,disabled:j})=>p.createElement("option",{key:I,value:I,disabled:j},E)))):p.createElement(se,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:g("navds-date__caption-label")},cr(r.date,"LLLL y",{locale:n})),p.createElement(Pe,{variant:"tertiary-neutral",icon:p.createElement(qg,{title:k("goToNextMonth")}),onClick:()=>u&&l(u),disabled:!u,className:g("navds-date__caption-button"),type:"button"})),p.createElement(Ob,{weeks:r.weeks,onWeekNumberClick:s}),t)};var Pb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const qb={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},yu=e=>{var{className:t,dropdownCaption:r,disabled:n=[],disableWeekends:s=!1,showWeekNumber:a=!1,selected:i,fixedWeeks:l=!1,onWeekNumberClick:o,fromDate:u,toDate:d,month:g,mode:k,handleSelect:m,locale:y}=e,h=Pb(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:b}=re(),w=hd(),v=y?Gd(y):w,I=k??"single";return p.createElement(cb,Object.assign({captionLayout:r?"dropdown":"label",hideNavigation:!0,locale:v,mode:I,onSelect:(E,j)=>{if(I!=="range"||E||!Zd(i)){m(E);return}if(!i.to){m({from:j,to:void 0});return}let N;Ra(i.to,j)?N=void 0:vt(j,i.to)?N={from:j,to:i.to}:N={from:i.to,to:j},m(N)},selected:i,classNames:qb,components:{MonthCaption:()=>p.createElement(p.Fragment,null),DayButton:f.useCallback(E=>p.createElement(Eb,Object.assign({},E,{locale:v})),[v]),Month:f.useCallback(E=>p.createElement(Rb,Object.assign({},E,{locale:v,onWeekNumberClick:I==="multiple"?o:void 0})),[v,I,o]),Day:f.useCallback(E=>p.createElement("td",Object.assign({},Xe(E,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:f.useCallback(E=>p.createElement(pu,Object.assign({},E,{showOnDesktop:!0,onWeekNumberClick:I==="multiple"?o:void 0})),[I,o]),WeekNumberHeader:f.useCallback(E=>p.createElement(Ba,{above:"sm",asChild:!0},p.createElement("th",Object.assign({},E))),[]),Weekdays:f.useCallback(E=>p.createElement("thead",Object.assign({},E,{className:"rdp-head","aria-hidden":!0}),p.createElement("tr",{className:"rdp-head_row"},E.children)),[])},className:b("navds-date",t),disabled:E=>s&&as(E)||un(E,n)||pb({day:E,fromDate:u,toDate:d}),weekStartsOn:1,modifiers:{weekend:E=>s&&as(E)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:a,fixedWeeks:l,showOutsideDays:!0,startMonth:u,endMonth:d,month:hb({month:g,start:u,end:d})},Xe(h,["onSelect","role","id","defaultSelected"])))};var _b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Mb=f.forwardRef((e,t)=>{var{className:r,locale:n,translations:s,selected:a,defaultSelected:i,onSelect:l,mode:o}=e,u=_b(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:d}=re(),g=Kn("DatePicker",s,Ud(n)),[k,m]=nt({defaultValue:i,value:a,onChange:y=>l==null?void 0:l(y)});return p.createElement(Hd,{translate:g},p.createElement("div",{ref:t,className:d("navds-date__standalone-wrapper",r)},p.createElement(yu,Object.assign({},u,{locale:n,handleSelect:m,selected:k,mode:o}))))});var Db=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ds=f.forwardRef((e,t)=>{var{children:r,locale:n,translations:s,selected:a,id:i,defaultSelected:l,wrapperClassName:o,open:u,onClose:d,onOpenToggle:g,strategy:k,mode:m}=e,y=Db(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const h=Kn("DatePicker",s,Ud(n)),{cn:b}=re(),w=wn(i),[v,I]=nt({defaultValue:!1,value:u}),[E,j]=f.useState(null),N=Fr(j,t),[T,R]=nt({defaultValue:l,value:a,onChange:P=>{var x;let F=!1;m==="single"&&P?F=!0:Zd(P)&&P.from&&P.to&&(F=!0,Ra(P.from,P.to)&&(F=!1)),F&&(d==null||d(),I(!1)),(x=y==null?void 0:y.onSelect)===null||x===void 0||x.call(y,P)}});return p.createElement(Hd,{translate:h},p.createElement(vp,{open:v,onOpen:()=>{I(P=>!P),g==null||g()},ariaId:w,defined:!0},p.createElement("div",{ref:N,className:b("navds-date__wrapper",o)},r,p.createElement(xp,{open:v,anchor:E,onClose:()=>{d==null||d(),v&&I(!1)},locale:n,translate:h,variant:m??"single",popoverProps:{id:w,strategy:k}},p.createElement(yu,Object.assign({},y,{locale:n,handleSelect:R,selected:T,mode:m}))))))});ds.Standalone=Mb;ds.Input=pp;const Sb=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),xb=(e={})=>{var t;const{locale:r,required:n,defaultSelected:s,today:a=new Date,fromDate:i,toDate:l,disabled:o,disableWeekends:u,onDateChange:d,inputFormat:g,onValidate:k,defaultMonth:m,allowTwoDigitYear:y=!0}=e,[h,b]=f.useState(null),w=hd(),v=r?Gd(r):w,[I,E]=f.useState(s),[j,N]=f.useState((t=I??m)!==null&&t!==void 0?t:a),[T,R]=f.useState(I),[P,x]=f.useState(!1),F=I?Kr(I,v,"date",g):"",[M,O]=f.useState(F),q=f.useCallback(Z=>{var G,ee;x(Z),Z&&N((ee=(G=T??I)!==null&&G!==void 0?G:m)!==null&&ee!==void 0?ee:a)},[m,I,T,a]),S=Z=>{d==null||d(Z),R(Z)},L=(Z={})=>k==null?void 0:k(Sb(Z));return{datepickerProps:{month:j,onMonthChange:N,onDayClick:(Z,{selected:G})=>{if(!(G&&n)){if(Z&&!G&&(q(!1),h==null||h.focus()),G){S(void 0),O(""),L({isValidDate:!1,isEmpty:!0});return}S(Z),L(),N(Z),O(Z?Kr(Z,v,"date",g):"")}},selected:T??new Date("Invalid date"),locale:r,fromDate:i,toDate:l,today:a,open:P,onClose:()=>{q(!1),h==null||h.focus()},onOpenToggle:()=>q(!P),disabled:o,disableWeekends:u},inputProps:{onChange:Z=>{O(Z.target.value);const G=zs(Z.target.value,a,v,"date",y),ee=i&&G&&zn(i,G)>0,te=l&&G&&zn(G,l)>0;if(!In(G)||u&&as(G)||o&&un(G,o)){S(void 0),L({isInvalid:!In(G),isWeekend:u&&as(G),isDisabled:o&&un(G,o),isValidDate:!1,isEmpty:!Z.target.value,isBefore:ee??!1,isAfter:te??!1});return}if(ee||te){S(void 0),L({isValidDate:!1,isBefore:ee??!1,isAfter:te??!1});return}S(G),L(),N(m??G)},onFocus:Z=>{if(Z.target.readOnly)return;const G=zs(Z.target.value,a,v,"date",y);if(In(G)){O(Kr(G,v,"date",g));const ee=i&&G&&zn(i,G)>0,te=l&&G&&zn(G,l)>0;!ee&&!te&&N(G)}},onBlur:Z=>{const G=zs(Z.target.value,a,v,"date",y);In(G)&&O(Kr(G,v,"date",g))},value:M,setAnchorRef:b},reset:()=>{var Z;S(I),N((Z=I??m)!==null&&Z!==void 0?Z:a),O(F??""),E(s)},selectedDay:T,setSelected:Z=>{var G;S(Z),N((G=Z??m)!==null&&G!==void 0?G:a),O(Z?Kr(Z,v,"date",g):"")}}};function Ge(e,t,r,n){return n?typeof n=="string"?{[`--__${e}c-${t}-${r}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([s,a])=>[`--__${e}c-${t}-${r}-${s}`,a])):{}}const Fb={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Gi=(e,t,r,n,s,a)=>t.split(" ").map((i,l,o)=>{var u;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let d=`var(--${a}-${r}-${i})`;if(n.includes(i))d=i==="px"?"1px":i;else if(i.startsWith("space"))d=`var(--${a}-${i})`;else{const g=`--${a}-spacing-${i}`;d=`var(${(u=Fb[g])!==null&&u!==void 0?u:g})`}return s?i==="0"?"0":`calc(-1 * ${d})`:d}).join(" ");function dn(e,t,r,n,s,a=!1,i=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${t}-${r}-xs`]:Gi(r,s,n,i,a,e)};const l={};return Object.entries(s).forEach(([o,u])=>{l[`--__${e}c-${t}-${r}-${o}`]=Gi(r,u,n,i,a,e)}),l}const Vb=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Lb=({children:e,className:t,padding:r,paddingInline:n,paddingBlock:s,margin:a,marginInline:i,marginBlock:l,width:o,minWidth:u,maxWidth:d,height:g,minHeight:k,maxHeight:m,position:y,inset:h,top:b,right:w,left:v,bottom:I,overflow:E,overflowX:j,overflowY:N,flexBasis:T,flexGrow:R,flexShrink:P,gridColumn:x})=>{const F=vs(!1),{cn:M}=re(),O=F?"ax":"a",q=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},dn(O,"r","p","spacing",r)),dn(O,"r","pi","spacing",n)),dn(O,"r","pb","spacing",s)),dn(O,"r","m","spacing",a)),dn(O,"r","mi","spacing",i)),dn(O,"r","mb","spacing",l)),Ge(O,"r","w",o)),Ge(O,"r","minw",u)),Ge(O,"r","maxw",d)),Ge(O,"r","h",g)),Ge(O,"r","minh",k)),Ge(O,"r","maxh",m)),Ge(O,"r","position",y)),dn(O,"r","inset","spacing",h)),dn(O,"r","top","spacing",b)),dn(O,"r","right","spacing",w)),dn(O,"r","bottom","spacing",I)),dn(O,"r","left","spacing",v)),Ge(O,"r","overflow",E)),Ge(O,"r","overflowx",j)),Ge(O,"r","overflowy",N)),Ge(O,"r","flex-basis",T)),Ge(O,"r","flex-grow",R)),Ge(O,"r","flex-shrink",P)),Ge(O,"r","grid-column",x));return p.createElement(xr,{className:M({className:t,"navds-r-p":r,"navds-r-pi":n,"navds-r-pb":s,"navds-r-m":a,"navds-r-mi":i,"navds-r-mb":l,"navds-r-w":o,"navds-r-minw":u,"navds-r-maxw":d,"navds-r-h":g,"navds-r-minh":k,"navds-r-maxh":m,"navds-r-position":y,"navds-r-inset":h,"navds-r-top":b,"navds-r-right":w,"navds-r-bottom":I,"navds-r-left":v,"navds-r-overflow":E,"navds-r-overflowx":j,"navds-r-overflowy":N,"navds-r-flex-basis":T,"navds-r-flex-grow":R,"navds-r-flex-shrink":P,"navds-r-grid-column":x}),style:q},e)};var Bb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const bu=f.forwardRef((e,t)=>{var{children:r,className:n,as:s="div",align:a,justify:i,wrap:l=!0,gap:o,style:u,direction:d="row",asChild:g}=e,k=Bb(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const y=vs(!1)?"ax":"a",{cn:h}=re(),b=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},u),dn(y,"stack","gap","spacing",o)),Ge(y,"stack","direction",d)),Ge(y,"stack","align",a)),Ge(y,"stack","justify",i)),w=g?xr:s;return p.createElement(Lb,Object.assign({},k),p.createElement(w,Object.assign({},Xe(k,Vb),{ref:t,style:b,className:h("navds-stack",n,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":o,"navds-stack-align":a,"navds-stack-justify":i,"navds-stack-direction":d,"navds-stack-wrap":l})}),r))});var Cb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ie=f.forwardRef((e,t)=>{var{as:r="div"}=e,n=Cb(e,["as"]);return p.createElement(bu,Object.assign({as:r},n,{ref:t,direction:"row"}))});var Kb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Se=f.forwardRef((e,t)=>{var{as:r="div"}=e,n=Kb(e,["as"]);return p.createElement(bu,Object.assign({as:r},n,{ref:t,direction:"column",wrap:!1}))}),Rr=()=>{const{cn:e}=re();return p.createElement("span",{className:e("navds-stack__spacer")})};var Gb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ca=f.forwardRef((e,t)=>{var{as:r="a",className:n,underline:s=!0,variant:a="action",inlineText:i=!1}=e,l=Gb(e,["as","className","underline","variant","inlineText"]);const{cn:o}=re();return p.createElement(r,Object.assign({},l,{ref:t,className:o("navds-link",n,`navds-link--${a}`,{"navds-link--remove-underline":!s,"navds-link--inline-text":i})}))});var Ub=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Hb=f.forwardRef((e,t)=>{var{className:r}=e,n=Ub(e,["className"]);const{cn:s}=re();return p.createElement("tbody",Object.assign({},n,{ref:t,className:s("navds-table__body",r)}))});var Yb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const hu=f.forwardRef((e,t)=>{var{className:r,children:n,align:s,textSize:a}=e,i=Yb(e,["className","children","align","textSize"]);const{cn:l}=re();return p.createElement("th",Object.assign({ref:t,className:l("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":a==="small"})},i),n)}),Iu=f.createContext(null);var $b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Wb=f.forwardRef((e,t)=>{var r,n,s,a,{className:i,children:l,sortable:o=!1,sortKey:u}=e,d=$b(e,["className","children","sortable","sortKey"]);const g=f.useContext(Iu),{cn:k}=re();return o&&!u&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),p.createElement(hu,Object.assign({scope:"col",ref:t,className:k(i),"aria-sort":o?((r=g==null?void 0:g.sort)===null||r===void 0?void 0:r.orderBy)===u?(n=g==null?void 0:g.sort)===null||n===void 0?void 0:n.direction:"none":void 0},d),o?p.createElement("button",{type:"button",className:k("navds-table__sort-button"),onClick:o&&u?()=>{var m;return(m=g==null?void 0:g.onSortChange)===null||m===void 0?void 0:m.call(g,u)}:void 0},l,((s=g==null?void 0:g.sort)===null||s===void 0?void 0:s.orderBy)===u?((a=g==null?void 0:g.sort)===null||a===void 0?void 0:a.direction)==="descending"?p.createElement(im,{"aria-hidden":!0}):p.createElement(om,{"aria-hidden":!0}):p.createElement(Mg,{"aria-hidden":!0})):l)});var zb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const wu=f.forwardRef((e,t)=>{var{className:r,children:n="",align:s,textSize:a}=e,i=zb(e,["className","children","align","textSize"]);const{cn:l}=re();return p.createElement(se,Object.assign({as:"td",ref:t,className:l("navds-table__data-cell",r,{[`navds-table__data-cell--align-${s}`]:s}),size:a},i),n)});var Jb=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Xb=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Qb(e){const t=parseFloat(e);return!Number.isNaN(t)&&Number.isFinite(t)}function Ui(e){return typeof e=="string"&&e[e.length-1]==="%"&&Qb(e.substring(0,e.length-1))}function Xs(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="none")}function Zb(e,t){t===0&&(e!=null&&e.style)&&(e.style.display="")}const eh=e=>{var{children:t,className:r,innerClassName:n,duration:s=250,easing:a="ease",height:i}=e,l=Jb(e,["children","className","innerClassName","duration","easing","height"]);const{cn:o}=re(),u=f.useRef(i),d=f.useRef(null),g=f.useRef(),k=f.useRef(),m=f.useRef(i),y=f.useRef("visible"),h=Xb?0:s;typeof m.current=="number"?(typeof i!="string"&&(m.current=i<0?0:i),y.current="hidden"):Ui(m.current)&&(m.current=i==="0%"?0:i,y.current="hidden");const[b,w]=f.useState(m.current),[v,I]=f.useState(y.current),[E,j]=f.useState(!1);f.useEffect(()=>{Xs(d.current,m.current)},[]),f.useEffect(()=>{if(i!==u.current&&d.current){Zb(d.current,u.current),d.current.style.overflow="hidden";const P=d.current.offsetHeight;d.current.style.overflow="";const x=h;let F,M,O="hidden",q;const S=u.current==="auto";typeof i=="number"?(F=i<0?0:i,M=F):Ui(i)?(F=i==="0%"?0:i,M=F):(F=P,M="auto",O=void 0),S&&(M=F,F=P),w(F),I("hidden"),j(!S),clearTimeout(k.current),clearTimeout(g.current),S?(q=!0,k.current=setTimeout(()=>{w(M),I(O),j(q)},50),g.current=setTimeout(()=>{j(!1),Xs(d.current,M)},x)):k.current=setTimeout(()=>{w(M),I(O),j(!1),i!=="auto"&&Xs(d.current,F)},x)}return u.current=i,()=>{clearTimeout(k.current),clearTimeout(g.current)}},[i]);const N={height:b,overflow:v};E&&(N.transition=`height ${h}ms ${a} 0ms`,N.WebkitTransition=N.transition);const R=typeof l["aria-hidden"]<"u"?l["aria-hidden"]:i===0;return p.createElement("div",Object.assign({},l,{className:o(r),style:N}),p.createElement("div",{"aria-hidden":R,className:o(n),ref:d},t))};var nh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Au=f.forwardRef((e,t)=>{var{className:r,selected:n=!1,shadeOnHover:s=!0}=e,a=nh(e,["className","selected","shadeOnHover"]);const{cn:i}=re();return p.createElement("tr",Object.assign({},a,{ref:t,className:i("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":s})}))});var rh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const th=f.forwardRef((e,t)=>{var{className:r,children:n,content:s,togglePlacement:a="left",defaultOpen:i=!1,open:l,onOpenChange:o,expansionDisabled:u=!1,expandOnRowClick:d=!1,colSpan:g=999,contentGutter:k,onClick:m}=e,y=rh(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:h}=re(),[b,w]=nt({defaultValue:i,value:l,onChange:o}),v=Kn("global"),I=wn(),E=N=>{w(T=>!T),N.stopPropagation()},j=N=>{d&&!u&&!ju(N.target)&&E(N)};return p.createElement(p.Fragment,null,p.createElement(Au,Object.assign({},y,{ref:t,className:h("navds-table__expandable-row",r,{"navds-table__expandable-row--open":b,"navds-table__expandable-row--expansion-disabled":u,"navds-table__expandable-row--clickable":d}),onClick:Tr(m,j)}),a==="right"&&n,p.createElement(wu,{className:h("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":b}),onClick:u?()=>null:E},!u&&p.createElement("button",{className:h("navds-table__toggle-expand-button"),type:"button","aria-controls":I,"aria-expanded":b,onClick:E},p.createElement(ys,{className:h("navds-table__expandable-icon"),title:v(b?"showLess":"showMore")}))),a==="left"&&n),p.createElement("tr",{"data-state":b?"open":"closed",className:h("navds-table__expanded-row"),"aria-hidden":!b,id:I},p.createElement("td",{colSpan:g,className:h("navds-table__expanded-row-cell")},p.createElement(eh,{className:h("navds-table__expanded-row-collapse"),innerClassName:h(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${k??a}`),height:b?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function ju(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:ju(e.parentElement)}var sh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const ah=f.forwardRef((e,t)=>{var{className:r}=e,n=sh(e,["className"]);const{cn:s}=re();return p.createElement("thead",Object.assign({},n,{ref:t,className:s("navds-table__header",r)}))});var ih=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Te=f.forwardRef((e,t)=>{var{className:r,zebraStripes:n=!1,size:s="medium",onSortChange:a,sort:i}=e,l=ih(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:o}=re();return p.createElement(Iu.Provider,{value:{onSortChange:a,sort:i}},p.createElement("table",Object.assign({},l,{ref:t,className:o("navds-table",`navds-table--${s}`,r,{"navds-table--zebra-stripes":n})})))});Te.Header=ah;Te.Body=Hb;Te.Row=Au;Te.ColumnHeader=Wb;Te.HeaderCell=hu;Te.DataCell=wu;Te.ExpandableRow=th;var lh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const oh=f.forwardRef((e,t)=>{var{children:r,className:n,variant:s,size:a="medium",icon:i}=e,l=lh(e,["children","className","variant","size","icon"]);const{cn:o}=re(),u=(s==null?void 0:s.endsWith("-filled"))&&"strong",d=(s==null?void 0:s.endsWith("-moderate"))&&"moderate",g=s==null?void 0:s.replace("-filled","").replace("-moderate","");return p.createElement(se,Object.assign({},l,{ref:t,as:"span",size:a==="medium"?"medium":"small",className:o("navds-tag",n,`navds-tag--${s}`,`navds-tag--${a}`,`navds-tag--${u||d||"outline"}`,`navds-tag--${g}`)}),i&&p.createElement("span",{className:o("navds-tag__icon--left")},i),r)});var dh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Eu=f.forwardRef((e,t)=>{var{children:r,className:n,arrow:s=!0,placement:a="top",open:i,defaultOpen:l=!1,onOpenChange:o,offset:u,content:d,delay:g=150,id:k,keys:m,maxChar:y=80,describesChild:h=!1}=e,b=dh(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:w}=re(),[v,I]=nt({defaultValue:l,value:i,onChange:o}),E=f.useRef(null),j=dt(!1),N=j?j.ref.current:void 0,{x:T,y:R,strategy:P,context:x,placement:F,middlewareData:{arrow:{x:M,y:O}={},hide:{referenceHidden:q}={}},refs:S}=Ld({placement:a,open:v,onOpenChange:J=>I(J),middleware:[vd(u??(s?8:4)),pd(),yd({padding:5,fallbackPlacements:["bottom","top"]}),bd({element:E,padding:5})],whileElementsMounted:j?(J,X,ae)=>sa(J,X,ae,{animationFrame:!0}):sa,strategy:j?"fixed":void 0}),{getReferenceProps:L,getFloatingProps:B}=up([ep(x,{handleClose:fp(),restMs:g}),dp(x),lp(x)]),C=wn(k),V=Fr(t,S.setFloating);if(!r||(r==null?void 0:r.type)===p.Fragment||r===p.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(d==null?void 0:d.length)>y&&v&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${d.length}
Tooltip-content: ${d}`);const $=h?v?{"aria-describedby":C}:{title:d}:{"aria-label":d};return p.createElement(p.Fragment,null,p.createElement(xr,Object.assign({ref:S.setReference},L(),$,{"aria-keyshortcuts":m?m.join("+"):void 0}),r),p.createElement(ic,{rootElement:N,asChild:!0},v&&p.createElement("div",Object.assign({},B(Object.assign(Object.assign({},b),{ref:V,style:{position:P,top:R??0,left:T??0,visibility:q?"hidden":"visible"},role:"tooltip",id:C,className:w("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":F,"data-state":"open"}),d,m&&p.createElement("span",{className:w("navds-tooltip__keys"),"aria-hidden":!0},m.map(J=>p.createElement(qr,{as:"kbd",key:J,className:w("navds-tooltip__key")},J))),s&&p.createElement("div",{ref:J=>{E.current=J},className:w("navds-tooltip__arrow"),style:{left:M!=null?`${M}px`:"",top:O!=null?`${O}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[F]]:"-3.5px"}}))))}),uh=e=>{const t=Cr(e,"fieldset"),{inputProps:r}=t;return Object.assign(Object.assign({},t),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var gh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const mh=f.forwardRef((e,t)=>{var r,n,s;const{inputProps:a,errorId:i,showErrorMsg:l,hasError:o,size:u,readOnly:d,inputDescriptionId:g}=uh(e),{cn:k}=re(),m=f.useContext(os),{children:y,className:h,errorPropagation:b=!0,legend:w,description:v,hideLegend:I,nativeReadOnly:E=!0}=e,j=gh(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return p.createElement(os.Provider,{value:{error:b?(r=e.error)!==null&&r!==void 0?r:m==null?void 0:m.error:void 0,errorId:lt({[i]:l,[(n=m==null?void 0:m.errorId)!==null&&n!==void 0?n:""]:!!(m!=null&&m.error)}),size:u,disabled:(s=e.disabled)!==null&&s!==void 0?s:!1,readOnly:d}},p.createElement("fieldset",Object.assign({},Xe(j,["errorId","error","size","readOnly"]),Xe(a,["aria-describedby","aria-invalid"]),{ref:t,className:k(h,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":o,"navds-fieldset--readonly":d})}),p.createElement(je,{size:u,as:"legend",className:k("navds-fieldset__legend",{"navds-sr-only":!!I})},d&&(E?p.createElement(Os,null):p.createElement(Bd,null)),w),!!v&&p.createElement(se,{className:k("navds-fieldset__description",{"navds-sr-only":!!I}),id:g,size:u??"medium",as:"div"},e.description),y,p.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:k("navds-fieldset__error")},l&&p.createElement(ot,{size:u,showIcon:!0},e.error))))});var fh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Tu=p.createContext(null),ch=f.forwardRef((e,t)=>{var r,n,{children:s,className:a,name:i,defaultValue:l,value:o,onChange:u=()=>{},required:d,readOnly:g}=e,k=fh(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:m}=re(),y=f.useContext(os),h=wn();return p.createElement(mh,Object.assign({},k,{readOnly:g,ref:t,className:m(a,"navds-radio-group",`navds-radio-group--${(n=(r=k.size)!==null&&r!==void 0?r:y==null?void 0:y.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),p.createElement(Tu.Provider,{value:{name:i??`radioGroupName-${h}`,defaultValue:l,value:o,onChange:u,required:d}},p.createElement("div",{className:m("navds-radio-buttons")},s)))});var kh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const vh=e=>{const t=f.useContext(Tu),r=Cr(Xe(e,["description"]),"radio"),{inputProps:n,readOnly:s}=r,a=kh(r,["inputProps","readOnly"]);return t||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},a),{readOnly:s,inputProps:Object.assign(Object.assign({},n),{name:t==null?void 0:t.name,defaultChecked:(t==null?void 0:t.defaultValue)===void 0?void 0:(t==null?void 0:t.defaultValue)===e.value,checked:(t==null?void 0:t.value)===void 0?void 0:(t==null?void 0:t.value)===e.value,onChange:i=>{var l,o;s||((l=e.onChange)===null||l===void 0||l.call(e,i),(o=t==null?void 0:t.onChange)===null||o===void 0||o.call(t,e.value))},onClick:i=>{var l;if(s){i.preventDefault();return}(l=e==null?void 0:e.onClick)===null||l===void 0||l.call(e,i)},required:t==null?void 0:t.required,type:"radio"})})},Hi=f.forwardRef((e,t)=>{const{cn:r}=re(),{inputProps:n,size:s,hasError:a,readOnly:i}=vh(e),l=wn(),o=wn();return p.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${s}`,{"navds-radio--error":a,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i})},p.createElement("input",Object.assign({},Xe(e,["children","size","description","readOnly"]),Xe(n,["aria-invalid"]),{"aria-labelledby":lt(l,!!e["aria-labelledby"]&&e["aria-labelledby"],{[o]:e.description}),className:r("navds-radio__input"),ref:t})),p.createElement("label",{htmlFor:n.id,className:r("navds-radio__label")},p.createElement("span",{className:r("navds-radio__content")},p.createElement(se,{as:"span",id:l,size:s,"aria-hidden":!0},e.children),e.description&&p.createElement(se,{as:"span",id:o,size:s,className:r("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var ph=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Yi=(e,t,r)=>{const{outerHeightStyle:n,overflow:s}=t;return r.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==s)?(r.current+=1,t):e},$i=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Et(e){return parseInt(e,10)||0}const yh=f.forwardRef((e,t)=>{var r,n,{className:s,onChange:a,maxRows:i,minRows:l=1,autoScrollbar:o,style:u,value:d}=e,g=ph(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:k}=f.useRef(d!=null),m=f.useRef(null),y=Fr(m,t),h=f.useRef(null),b=f.useRef(0),[w,v]=f.useState({outerHeightStyle:0}),I=p.useCallback(()=>{const T=m.current,P=$i(T).getComputedStyle(T);if(P.width==="0px")return{outerHeightStyle:0};const x=h.current;x.style.width=P.width,x.value=T.value||g.placeholder||"x",x.value.slice(-1)===`
`&&(x.value+=" ");const F=P.boxSizing,M=Et(P.paddingBottom)+Et(P.paddingTop),O=Et(P.borderBottomWidth)+Et(P.borderTopWidth),q=x.scrollHeight-M;x.value="x";const S=x.scrollHeight-M;let L=q;l&&(L=Math.max(Number(l)*S,L)),i&&(L=Math.min(Number(i)*S,L)),L=Math.max(L,S);const B=L+(F==="border-box"?M+O:0),C=Math.abs(L-q)<=1;return{outerHeightStyle:B,overflow:C}},[i,l,g.placeholder]),E=()=>{const T=I();Wi(T)||v(R=>Yi(R,T,b))};_r(()=>{const T=()=>{const M=I();Wi(M)||Zt.flushSync(()=>{v(O=>Yi(O,M,b))})},R=Go(()=>{var M,O,q;if(b.current=0,!((M=m.current)===null||M===void 0)&&M.style.height||!((O=m.current)===null||O===void 0)&&O.style.width){((q=m.current)===null||q===void 0?void 0:q.style.overflow)==="hidden"&&v(S=>Object.assign(Object.assign({},S),{overflow:!1}));return}T()},166,!0),P=m.current,x=$i(P);x.addEventListener("resize",R);let F;return typeof ResizeObserver<"u"&&(F=new ResizeObserver(R),F.observe(P)),()=>{R.clear(),x.removeEventListener("resize",R),F&&F.disconnect()}},[I]),_r(()=>{E()}),f.useEffect(()=>{b.current=0},[d]);const j=T=>{b.current=0,k||E(),a&&a(T)},N=Object.assign({"--__ac-textarea-height":w.outerHeightStyle+"px","--__axc-textarea-height":w.outerHeightStyle+"px",overflow:w.overflow&&!o&&!(!((r=m.current)===null||r===void 0)&&r.style.height)&&!(!((n=m.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},u);return p.createElement(p.Fragment,null,p.createElement("textarea",Object.assign({value:d,onChange:j,ref:y,rows:l,style:N},g,{className:s})),p.createElement("textarea",{"aria-hidden":!0,className:s,readOnly:!0,ref:h,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function Wi(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const bh=({maxLengthId:e,maxLength:t,currentLength:r,size:n,i18n:s})=>{const{cn:a}=re(),i=Kn("Textarea",{charsLeft:s!=null&&s.counterLeft?`{chars} ${s.counterLeft}`:void 0,charsTooMany:s!=null&&s.counterTooMuch?`{chars} ${s.counterTooMuch}`:void 0}),l=t-r,[o,u]=f.useState(l);return f.useEffect(()=>{const d=Go(()=>{u(l)},2e3);return d(),()=>{d.clear()}},[l]),p.createElement(p.Fragment,null,p.createElement("span",{id:e,className:a("navds-sr-only")},i("maxLength",{maxLength:t})),l<20&&p.createElement("span",{role:"status",className:a("navds-textarea__sr-counter navds-sr-only")},zi(o,i)),p.createElement(se,{className:a("navds-textarea__counter",{"navds-textarea__counter--error":l<0}),size:n},zi(l,i)))},zi=(e,t)=>e<0?t("charsTooMany",{chars:Math.abs(e)}):t("charsLeft",{chars:e});var hh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ih=f.forwardRef((e,t)=>{var r,n,s;const{inputProps:a,errorId:i,showErrorMsg:l,hasError:o,size:u,inputDescriptionId:d}=Cr(e,"textarea"),{label:g,className:k,description:m,maxLength:y,hideLabel:h=!1,resize:b,UNSAFE_autoScrollbar:w,i18n:v,readOnly:I}=e,E=hh(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:j}=re(),N=wn(),T=y!==void 0&&y>0,[R,P]=f.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),x=()=>{let M=E!=null&&E.minRows?E==null?void 0:E.minRows:3;return u==="small"&&(M=E!=null&&E.minRows?E==null?void 0:E.minRows:2),M},F=lt(a["aria-describedby"],{[N??""]:T});return p.createElement("div",{className:j(k,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!a.disabled,"navds-form-field--readonly":I,"navds-textarea--readonly":I,"navds-textarea--error":o,"navds-textarea--autoscrollbar":w,[`navds-textarea--resize-${b===!0?"both":b}`]:b})},p.createElement(je,{htmlFor:a.id,size:u,className:j("navds-form-field__label",{"navds-sr-only":h})},I&&p.createElement(Os,null),g),!!m&&p.createElement(se,{className:j("navds-form-field__description",{"navds-sr-only":h}),id:d,size:u,as:"div"},m),p.createElement(yh,Object.assign({},Xe(E,["error","errorId","size"]),a,{onChange:Tr(e.onChange,e.value===void 0?M=>P(M.target.value):void 0),minRows:x(),autoScrollbar:w,ref:t,readOnly:I,className:j("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},F?{"aria-describedby":F}:{})),T&&!I&&!a.disabled&&p.createElement(bh,{maxLengthId:N,maxLength:y,currentLength:(s=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:R.length,size:u,i18n:v}),p.createElement("div",{className:j("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},l&&p.createElement(ot,{size:u,showIcon:!0},e.error)))});var wh=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const Ah=f.forwardRef((e,t)=>{const{cn:r}=re(),{inputProps:n,errorId:s,showErrorMsg:a,hasError:i,size:l,inputDescriptionId:o}=Cr(e,"textField"),{label:u,className:d,description:g,htmlSize:k,hideLabel:m=!1,type:y="text",readOnly:h}=e,b=wh(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return p.createElement("div",{className:r(d,"navds-form-field",`navds-form-field--${l}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!n.disabled,"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":h,"navds-text-field--readonly":h})},p.createElement(je,{htmlFor:n.id,size:l,className:r("navds-form-field__label",{"navds-sr-only":m})},h&&p.createElement(Os,null),u),!!g&&p.createElement(se,{className:r("navds-form-field__description",{"navds-sr-only":m}),id:o,size:l,as:"div"},g),p.createElement("input",Object.assign({},Xe(b,["error","errorId","size"]),n,{ref:t,type:y,readOnly:h,className:r("navds-text-field__input","navds-body-short",`navds-body-short--${l??"medium"}`),size:k})),p.createElement("div",{className:r("navds-form-field__error"),id:s,"aria-relevant":"additions removals","aria-live":"polite"},a&&p.createElement(ot,{size:l,showIcon:!0},e.error)))});var Ve=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Ve||{}),pt=e=>e.type==="checkbox",or=e=>e instanceof Date,We=e=>e==null;const Ou=e=>typeof e=="object";var xe=e=>!We(e)&&!Array.isArray(e)&&Ou(e)&&!or(e),Nu=e=>xe(e)&&e.target?pt(e.target)?e.target.checked:e.target.value:e,jh=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ru=(e,t)=>e.has(jh(t)),Eh=e=>{const t=e.constructor&&e.constructor.prototype;return xe(t)&&t.hasOwnProperty("isPrototypeOf")},Ka=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ke(e){let t;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Ka&&(e instanceof Blob||n))&&(r||xe(e)))if(t=r?[]:{},!r&&!Eh(e))t=e;else for(const s in e)e.hasOwnProperty(s)&&(t[s]=Ke(e[s]));else return e;return t}var Ps=e=>Array.isArray(e)?e.filter(Boolean):[],_e=e=>e===void 0,H=(e,t,r)=>{if(!t||!xe(e))return r;const n=Ps(t.split(/[,[\].]+?/)).reduce((s,a)=>We(s)?s:s[a],e);return _e(n)||n===e?_e(e[t])?r:e[t]:n},an=e=>typeof e=="boolean",Ga=e=>/^\w*$/.test(e),Pu=e=>Ps(e.replace(/["|']|\]/g,"").split(/\.|\[/)),he=(e,t,r)=>{let n=-1;const s=Ga(t)?[t]:Pu(t),a=s.length,i=a-1;for(;++n<a;){const l=s[n];let o=r;if(n!==i){const u=e[l];o=xe(u)||Array.isArray(u)?u:isNaN(+s[n+1])?{}:[]}if(l==="__proto__"||l==="constructor"||l==="prototype")return;e[l]=o,e=e[l]}};const us={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},yn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Mn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},qu=p.createContext(null),er=()=>p.useContext(qu),Th=e=>{const{children:t,...r}=e;return p.createElement(qu.Provider,{value:r},t)};var _u=(e,t,r,n=!0)=>{const s={defaultValues:t._defaultValues};for(const a in e)Object.defineProperty(s,a,{get:()=>{const i=a;return t._proxyFormState[i]!==yn.all&&(t._proxyFormState[i]=!n||yn.all),r&&(r[i]=!0),e[i]}});return s};const Ua=typeof window<"u"?f.useLayoutEffect:f.useEffect;function Oh(e){const t=er(),{control:r=t.control,disabled:n,name:s,exact:a}=e||{},[i,l]=p.useState(r._formState),o=p.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Ua(()=>r._subscribe({name:s,formState:o.current,exact:a,callback:u=>{!n&&l({...r._formState,...u})}}),[s,n,a]),p.useEffect(()=>{o.current.isValid&&r._setValid(!0)},[r]),p.useMemo(()=>_u(i,r,o.current,!1),[i,r])}var Nn=e=>typeof e=="string",Mu=(e,t,r,n,s)=>Nn(e)?(n&&t.watch.add(e),H(r,e,s)):Array.isArray(e)?e.map(a=>(n&&t.watch.add(a),H(r,a))):(n&&(t.watchAll=!0),r);function Nh(e){const t=er(),{control:r=t.control,name:n,defaultValue:s,disabled:a,exact:i}=e||{},l=p.useRef(s),[o,u]=p.useState(r._getWatch(n,l.current));return Ua(()=>r._subscribe({name:n,formState:{values:!0},exact:i,callback:d=>!a&&u(Mu(n,r._names,d.values||r._formValues,!1,l.current))}),[n,r,a,i]),p.useEffect(()=>r._removeUnmounted()),o}function yt(e){const t=er(),{name:r,disabled:n,control:s=t.control,shouldUnregister:a}=e,i=Ru(s._names.array,r),l=Nh({control:s,name:r,defaultValue:H(s._formValues,r,H(s._defaultValues,r,e.defaultValue)),exact:!0}),o=Oh({control:s,name:r,exact:!0}),u=p.useRef(e),d=p.useRef(s.register(r,{...e.rules,value:l,...an(e.disabled)?{disabled:e.disabled}:{}})),g=p.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!H(o.errors,r)},isDirty:{enumerable:!0,get:()=>!!H(o.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!H(o.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!H(o.validatingFields,r)},error:{enumerable:!0,get:()=>H(o.errors,r)}}),[o,r]),k=p.useCallback(b=>d.current.onChange({target:{value:Nu(b),name:r},type:us.CHANGE}),[r]),m=p.useCallback(()=>d.current.onBlur({target:{value:H(s._formValues,r),name:r},type:us.BLUR}),[r,s._formValues]),y=p.useCallback(b=>{const w=H(s._fields,r);w&&b&&(w._f.ref={focus:()=>b.focus&&b.focus(),select:()=>b.select&&b.select(),setCustomValidity:v=>b.setCustomValidity(v),reportValidity:()=>b.reportValidity()})},[s._fields,r]),h=p.useMemo(()=>({name:r,value:l,...an(n)||o.disabled?{disabled:o.disabled||n}:{},onChange:k,onBlur:m,ref:y}),[r,n,o.disabled,k,m,y,l]);return p.useEffect(()=>{const b=s._options.shouldUnregister||a;s.register(r,{...u.current.rules,...an(u.current.disabled)?{disabled:u.current.disabled}:{}});const w=(v,I)=>{const E=H(s._fields,v);E&&E._f&&(E._f.mount=I)};if(w(r,!0),b){const v=Ke(H(s._options.defaultValues,r));he(s._defaultValues,r,v),_e(H(s._formValues,r))&&he(s._formValues,r,v)}return!i&&s.register(r),()=>{(i?b&&!s._state.action:b)?s.unregister(r):w(r,!1)}},[r,s,i,a]),p.useEffect(()=>{s._setDisabledField({disabled:n,name:r})},[n,r,s]),p.useMemo(()=>({field:h,formState:o,fieldState:g}),[h,o,g])}var Rh=(e,t,r,n,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:s||!0}}:{},Xr=e=>Array.isArray(e)?e:[e],Ji=()=>{let e=[];return{get observers(){return e},next:s=>{for(const a of e)a.next&&a.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(a=>a!==s)}}),unsubscribe:()=>{e=[]}}},ua=e=>We(e)||!Ou(e);function Wn(e,t){if(ua(e)||ua(t))return e===t;if(or(e)&&or(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const s of r){const a=e[s];if(!n.includes(s))return!1;if(s!=="ref"){const i=t[s];if(or(a)&&or(i)||xe(a)&&xe(i)||Array.isArray(a)&&Array.isArray(i)?!Wn(a,i):a!==i)return!1}}return!0}var en=e=>xe(e)&&!Object.keys(e).length,Ha=e=>e.type==="file",bn=e=>typeof e=="function",gs=e=>{if(!Ka)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Du=e=>e.type==="select-multiple",Ya=e=>e.type==="radio",Ph=e=>Ya(e)||pt(e),Qs=e=>gs(e)&&e.isConnected;function qh(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=_e(e)?n++:e[t[n++]];return e}function _h(e){for(const t in e)if(e.hasOwnProperty(t)&&!_e(e[t]))return!1;return!0}function Fe(e,t){const r=Array.isArray(t)?t:Ga(t)?[t]:Pu(t),n=r.length===1?e:qh(e,r),s=r.length-1,a=r[s];return n&&delete n[a],s!==0&&(xe(n)&&en(n)||Array.isArray(n)&&_h(n))&&Fe(e,r.slice(0,-1)),e}var Su=e=>{for(const t in e)if(bn(e[t]))return!0;return!1};function ms(e,t={}){const r=Array.isArray(e);if(xe(e)||r)for(const n in e)Array.isArray(e[n])||xe(e[n])&&!Su(e[n])?(t[n]=Array.isArray(e[n])?[]:{},ms(e[n],t[n])):We(e[n])||(t[n]=!0);return t}function xu(e,t,r){const n=Array.isArray(e);if(xe(e)||n)for(const s in e)Array.isArray(e[s])||xe(e[s])&&!Su(e[s])?_e(t)||ua(r[s])?r[s]=Array.isArray(e[s])?ms(e[s],[]):{...ms(e[s])}:xu(e[s],We(t)?{}:t[s],r[s]):r[s]=!Wn(e[s],t[s]);return r}var Gr=(e,t)=>xu(e,t,ms(t));const Xi={value:!1,isValid:!1},Qi={value:!0,isValid:!0};var Fu=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!_e(e[0].attributes.value)?_e(e[0].value)||e[0].value===""?Qi:{value:e[0].value,isValid:!0}:Qi:Xi}return Xi},Vu=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>_e(e)?e:t?e===""?NaN:e&&+e:r&&Nn(e)?new Date(e):n?n(e):e;const Zi={isValid:!1,value:null};var Lu=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,Zi):Zi;function el(e){const t=e.ref;return Ha(t)?t.files:Ya(t)?Lu(e.refs).value:Du(t)?[...t.selectedOptions].map(({value:r})=>r):pt(t)?Fu(e.refs).value:Vu(_e(t.value)?e.ref.value:t.value,e)}var Mh=(e,t,r,n)=>{const s={};for(const a of e){const i=H(t,a);i&&he(s,a,i._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:n}},fs=e=>e instanceof RegExp,Ur=e=>_e(e)?e:fs(e)?e.source:xe(e)?fs(e.value)?e.value.source:e.value:e,nl=e=>({isOnSubmit:!e||e===yn.onSubmit,isOnBlur:e===yn.onBlur,isOnChange:e===yn.onChange,isOnAll:e===yn.all,isOnTouch:e===yn.onTouched});const rl="AsyncFunction";var Dh=e=>!!e&&!!e.validate&&!!(bn(e.validate)&&e.validate.constructor.name===rl||xe(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===rl)),Sh=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),tl=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const Qr=(e,t,r,n)=>{for(const s of r||Object.keys(e)){const a=H(e,s);if(a){const{_f:i,...l}=a;if(i){if(i.refs&&i.refs[0]&&t(i.refs[0],s)&&!n)return!0;if(i.ref&&t(i.ref,i.name)&&!n)return!0;if(Qr(l,t))break}else if(xe(l)&&Qr(l,t))break}}};function sl(e,t,r){const n=H(e,r);if(n||Ga(r))return{error:n,name:r};const s=r.split(".");for(;s.length;){const a=s.join("."),i=H(t,a),l=H(e,a);if(i&&!Array.isArray(i)&&r!==a)return{name:r};if(l&&l.type)return{name:a,error:l};if(l&&l.root&&l.root.type)return{name:`${a}.root`,error:l.root};s.pop()}return{name:r}}var xh=(e,t,r,n)=>{r(e);const{name:s,...a}=e;return en(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(i=>t[i]===(!n||yn.all))},Fh=(e,t,r)=>!e||!t||e===t||Xr(e).some(n=>n&&(r?n===t:n.startsWith(t)||t.startsWith(n))),Vh=(e,t,r,n,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(t||e):(r?n.isOnBlur:s.isOnBlur)?!e:(r?n.isOnChange:s.isOnChange)?e:!0,Lh=(e,t)=>!Ps(H(e,t)).length&&Fe(e,t),Bh=(e,t,r)=>{const n=Xr(H(e,r));return he(n,"root",t[r]),he(e,r,n),e},Qt=e=>Nn(e);function al(e,t,r="validate"){if(Qt(e)||Array.isArray(e)&&e.every(Qt)||an(e)&&!e)return{type:r,message:Qt(e)?e:"",ref:t}}var wr=e=>xe(e)&&!fs(e)?e:{value:e,message:""},il=async(e,t,r,n,s,a)=>{const{ref:i,refs:l,required:o,maxLength:u,minLength:d,min:g,max:k,pattern:m,validate:y,name:h,valueAsNumber:b,mount:w}=e._f,v=H(r,h);if(!w||t.has(h))return{};const I=l?l[0]:i,E=M=>{s&&I.reportValidity&&(I.setCustomValidity(an(M)?"":M||""),I.reportValidity())},j={},N=Ya(i),T=pt(i),R=N||T,P=(b||Ha(i))&&_e(i.value)&&_e(v)||gs(i)&&i.value===""||v===""||Array.isArray(v)&&!v.length,x=Rh.bind(null,h,n,j),F=(M,O,q,S=Mn.maxLength,L=Mn.minLength)=>{const B=M?O:q;j[h]={type:M?S:L,message:B,ref:i,...x(M?S:L,B)}};if(a?!Array.isArray(v)||!v.length:o&&(!R&&(P||We(v))||an(v)&&!v||T&&!Fu(l).isValid||N&&!Lu(l).isValid)){const{value:M,message:O}=Qt(o)?{value:!!o,message:o}:wr(o);if(M&&(j[h]={type:Mn.required,message:O,ref:I,...x(Mn.required,O)},!n))return E(O),j}if(!P&&(!We(g)||!We(k))){let M,O;const q=wr(k),S=wr(g);if(!We(v)&&!isNaN(v)){const L=i.valueAsNumber||v&&+v;We(q.value)||(M=L>q.value),We(S.value)||(O=L<S.value)}else{const L=i.valueAsDate||new Date(v),B=$=>new Date(new Date().toDateString()+" "+$),C=i.type=="time",V=i.type=="week";Nn(q.value)&&v&&(M=C?B(v)>B(q.value):V?v>q.value:L>new Date(q.value)),Nn(S.value)&&v&&(O=C?B(v)<B(S.value):V?v<S.value:L<new Date(S.value))}if((M||O)&&(F(!!M,q.message,S.message,Mn.max,Mn.min),!n))return E(j[h].message),j}if((u||d)&&!P&&(Nn(v)||a&&Array.isArray(v))){const M=wr(u),O=wr(d),q=!We(M.value)&&v.length>+M.value,S=!We(O.value)&&v.length<+O.value;if((q||S)&&(F(q,M.message,O.message),!n))return E(j[h].message),j}if(m&&!P&&Nn(v)){const{value:M,message:O}=wr(m);if(fs(M)&&!v.match(M)&&(j[h]={type:Mn.pattern,message:O,ref:i,...x(Mn.pattern,O)},!n))return E(O),j}if(y){if(bn(y)){const M=await y(v,r),O=al(M,I);if(O&&(j[h]={...O,...x(Mn.validate,O.message)},!n))return E(O.message),j}else if(xe(y)){let M={};for(const O in y){if(!en(M)&&!n)break;const q=al(await y[O](v,r),I,O);q&&(M={...q,...x(O,q.message)},E(q.message),n&&(j[h]=M))}if(!en(M)&&(j[h]={ref:I,...M},!n))return j}}return E(!0),j};const Ch={mode:yn.onSubmit,reValidateMode:yn.onChange,shouldFocusError:!0};function Kh(e={}){let t={...Ch,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:bn(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const n={};let s=xe(t.defaultValues)||xe(t.values)?Ke(t.defaultValues||t.values)||{}:{},a=t.shouldUnregister?{}:Ke(s),i={action:!1,mount:!1,watch:!1},l={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},o,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...d};const k={array:Ji(),state:Ji()},m=t.criteriaMode===yn.all,y=A=>_=>{clearTimeout(u),u=setTimeout(A,_)},h=async A=>{if(!t.disabled&&(d.isValid||g.isValid||A)){const _=t.resolver?en((await T()).errors):await P(n,!0);_!==r.isValid&&k.state.next({isValid:_})}},b=(A,_)=>{!t.disabled&&(d.isValidating||d.validatingFields||g.isValidating||g.validatingFields)&&((A||Array.from(l.mount)).forEach(D=>{D&&(_?he(r.validatingFields,D,_):Fe(r.validatingFields,D))}),k.state.next({validatingFields:r.validatingFields,isValidating:!en(r.validatingFields)}))},w=(A,_=[],D,W,U=!0,K=!0)=>{if(W&&D&&!t.disabled){if(i.action=!0,K&&Array.isArray(H(n,A))){const Q=D(H(n,A),W.argA,W.argB);U&&he(n,A,Q)}if(K&&Array.isArray(H(r.errors,A))){const Q=D(H(r.errors,A),W.argA,W.argB);U&&he(r.errors,A,Q),Lh(r.errors,A)}if((d.touchedFields||g.touchedFields)&&K&&Array.isArray(H(r.touchedFields,A))){const Q=D(H(r.touchedFields,A),W.argA,W.argB);U&&he(r.touchedFields,A,Q)}(d.dirtyFields||g.dirtyFields)&&(r.dirtyFields=Gr(s,a)),k.state.next({name:A,isDirty:F(A,_),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else he(a,A,_)},v=(A,_)=>{he(r.errors,A,_),k.state.next({errors:r.errors})},I=A=>{r.errors=A,k.state.next({errors:r.errors,isValid:!1})},E=(A,_,D,W)=>{const U=H(n,A);if(U){const K=H(a,A,_e(D)?H(s,A):D);_e(K)||W&&W.defaultChecked||_?he(a,A,_?K:el(U._f)):q(A,K),i.mount&&h()}},j=(A,_,D,W,U)=>{let K=!1,Q=!1;const de={name:A};if(!t.disabled){if(!D||W){(d.isDirty||g.isDirty)&&(Q=r.isDirty,r.isDirty=de.isDirty=F(),K=Q!==de.isDirty);const pe=Wn(H(s,A),_);Q=!!H(r.dirtyFields,A),pe?Fe(r.dirtyFields,A):he(r.dirtyFields,A,!0),de.dirtyFields=r.dirtyFields,K=K||(d.dirtyFields||g.dirtyFields)&&Q!==!pe}if(D){const pe=H(r.touchedFields,A);pe||(he(r.touchedFields,A,D),de.touchedFields=r.touchedFields,K=K||(d.touchedFields||g.touchedFields)&&pe!==D)}K&&U&&k.state.next(de)}return K?de:{}},N=(A,_,D,W)=>{const U=H(r.errors,A),K=(d.isValid||g.isValid)&&an(_)&&r.isValid!==_;if(t.delayError&&D?(o=y(()=>v(A,D)),o(t.delayError)):(clearTimeout(u),o=null,D?he(r.errors,A,D):Fe(r.errors,A)),(D?!Wn(U,D):U)||!en(W)||K){const Q={...W,...K&&an(_)?{isValid:_}:{},errors:r.errors,name:A};r={...r,...Q},k.state.next(Q)}},T=async A=>{b(A,!0);const _=await t.resolver(a,t.context,Mh(A||l.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return b(A),_},R=async A=>{const{errors:_}=await T(A);if(A)for(const D of A){const W=H(_,D);W?he(r.errors,D,W):Fe(r.errors,D)}else r.errors=_;return _},P=async(A,_,D={valid:!0})=>{for(const W in A){const U=A[W];if(U){const{_f:K,...Q}=U;if(K){const de=l.array.has(K.name),pe=U._f&&Dh(U._f);pe&&d.validatingFields&&b([W],!0);const Ze=await il(U,l.disabled,a,m,t.shouldUseNativeValidation&&!_,de);if(pe&&d.validatingFields&&b([W]),Ze[K.name]&&(D.valid=!1,_))break;!_&&(H(Ze,K.name)?de?Bh(r.errors,Ze,K.name):he(r.errors,K.name,Ze[K.name]):Fe(r.errors,K.name))}!en(Q)&&await P(Q,_,D)}}return D.valid},x=()=>{for(const A of l.unMount){const _=H(n,A);_&&(_._f.refs?_._f.refs.every(D=>!Qs(D)):!Qs(_._f.ref))&&ee(A)}l.unMount=new Set},F=(A,_)=>!t.disabled&&(A&&_&&he(a,A,_),!Wn($(),s)),M=(A,_,D)=>Mu(A,l,{...i.mount?a:_e(_)?s:Nn(A)?{[A]:_}:_},D,_),O=A=>Ps(H(i.mount?a:s,A,t.shouldUnregister?H(s,A,[]):[])),q=(A,_,D={})=>{const W=H(n,A);let U=_;if(W){const K=W._f;K&&(!K.disabled&&he(a,A,Vu(_,K)),U=gs(K.ref)&&We(_)?"":_,Du(K.ref)?[...K.ref.options].forEach(Q=>Q.selected=U.includes(Q.value)):K.refs?pt(K.ref)?K.refs.forEach(Q=>{(!Q.defaultChecked||!Q.disabled)&&(Array.isArray(U)?Q.checked=!!U.find(de=>de===Q.value):Q.checked=U===Q.value||!!U)}):K.refs.forEach(Q=>Q.checked=Q.value===U):Ha(K.ref)?K.ref.value="":(K.ref.value=U,K.ref.type||k.state.next({name:A,values:Ke(a)})))}(D.shouldDirty||D.shouldTouch)&&j(A,U,D.shouldTouch,D.shouldDirty,!0),D.shouldValidate&&V(A)},S=(A,_,D)=>{for(const W in _){if(!_.hasOwnProperty(W))return;const U=_[W],K=A+"."+W,Q=H(n,K);(l.array.has(A)||xe(U)||Q&&!Q._f)&&!or(U)?S(K,U,D):q(K,U,D)}},L=(A,_,D={})=>{const W=H(n,A),U=l.array.has(A),K=Ke(_);he(a,A,K),U?(k.array.next({name:A,values:Ke(a)}),(d.isDirty||d.dirtyFields||g.isDirty||g.dirtyFields)&&D.shouldDirty&&k.state.next({name:A,dirtyFields:Gr(s,a),isDirty:F(A,K)})):W&&!W._f&&!We(K)?S(A,K,D):q(A,K,D),tl(A,l)&&k.state.next({...r}),k.state.next({name:i.mount?A:void 0,values:Ke(a)})},B=async A=>{i.mount=!0;const _=A.target;let D=_.name,W=!0;const U=H(n,D),K=pe=>{W=Number.isNaN(pe)||or(pe)&&isNaN(pe.getTime())||Wn(pe,H(a,D,pe))},Q=nl(t.mode),de=nl(t.reValidateMode);if(U){let pe,Ze;const yr=_.type?el(U._f):Nu(A),vn=A.type===us.BLUR||A.type===us.FOCUS_OUT,Ds=!Sh(U._f)&&!t.resolver&&!H(r.errors,D)&&!U._f.deps||Vh(vn,H(r.touchedFields,D),r.isSubmitted,de,Q),ie=tl(D,l,vn);he(a,D,yr),vn?(U._f.onBlur&&U._f.onBlur(A),o&&o(0)):U._f.onChange&&U._f.onChange(A);const Ee=j(D,yr,vn),ye=!en(Ee)||ie;if(!vn&&k.state.next({name:D,type:A.type,values:Ke(a)}),Ds)return(d.isValid||g.isValid)&&(t.mode==="onBlur"?vn&&h():vn||h()),ye&&k.state.next({name:D,...ie?{}:Ee});if(!vn&&ie&&k.state.next({...r}),t.resolver){const{errors:pn}=await T([D]);if(K(yr),W){const tn=sl(r.errors,n,D),tr=sl(pn,n,tn.name||D);pe=tr.error,D=tr.name,Ze=en(pn)}}else b([D],!0),pe=(await il(U,l.disabled,a,m,t.shouldUseNativeValidation))[D],b([D]),K(yr),W&&(pe?Ze=!1:(d.isValid||g.isValid)&&(Ze=await P(n,!0)));W&&(U._f.deps&&V(U._f.deps),N(D,Ze,pe,Ee))}},C=(A,_)=>{if(H(r.errors,_)&&A.focus)return A.focus(),1},V=async(A,_={})=>{let D,W;const U=Xr(A);if(t.resolver){const K=await R(_e(A)?A:U);D=en(K),W=A?!U.some(Q=>H(K,Q)):D}else A?(W=(await Promise.all(U.map(async K=>{const Q=H(n,K);return await P(Q&&Q._f?{[K]:Q}:Q)}))).every(Boolean),!(!W&&!r.isValid)&&h()):W=D=await P(n);return k.state.next({...!Nn(A)||(d.isValid||g.isValid)&&D!==r.isValid?{}:{name:A},...t.resolver||!A?{isValid:D}:{},errors:r.errors}),_.shouldFocus&&!W&&Qr(n,C,A?U:l.mount),W},$=A=>{const _={...i.mount?a:s};return _e(A)?_:Nn(A)?H(_,A):A.map(D=>H(_,D))},J=(A,_)=>({invalid:!!H((_||r).errors,A),isDirty:!!H((_||r).dirtyFields,A),error:H((_||r).errors,A),isValidating:!!H(r.validatingFields,A),isTouched:!!H((_||r).touchedFields,A)}),X=A=>{A&&Xr(A).forEach(_=>Fe(r.errors,_)),k.state.next({errors:A?r.errors:{}})},ae=(A,_,D)=>{const W=(H(n,A,{_f:{}})._f||{}).ref,U=H(r.errors,A)||{},{ref:K,message:Q,type:de,...pe}=U;he(r.errors,A,{...pe,..._,ref:W}),k.state.next({name:A,errors:r.errors,isValid:!1}),D&&D.shouldFocus&&W&&W.focus&&W.focus()},Ue=(A,_)=>bn(A)?k.state.subscribe({next:D=>A(M(void 0,_),D)}):M(A,_,!0),Z=A=>k.state.subscribe({next:_=>{Fh(A.name,_.name,A.exact)&&xh(_,A.formState||d,Hn,A.reRenderRoot)&&A.callback({values:{...a},...r,..._})}}).unsubscribe,G=A=>(i.mount=!0,g={...g,...A.formState},Z({...A,formState:g})),ee=(A,_={})=>{for(const D of A?Xr(A):l.mount)l.mount.delete(D),l.array.delete(D),_.keepValue||(Fe(n,D),Fe(a,D)),!_.keepError&&Fe(r.errors,D),!_.keepDirty&&Fe(r.dirtyFields,D),!_.keepTouched&&Fe(r.touchedFields,D),!_.keepIsValidating&&Fe(r.validatingFields,D),!t.shouldUnregister&&!_.keepDefaultValue&&Fe(s,D);k.state.next({values:Ke(a)}),k.state.next({...r,..._.keepDirty?{isDirty:F()}:{}}),!_.keepIsValid&&h()},te=({disabled:A,name:_})=>{(an(A)&&i.mount||A||l.disabled.has(_))&&(A?l.disabled.add(_):l.disabled.delete(_))},ge=(A,_={})=>{let D=H(n,A);const W=an(_.disabled)||an(t.disabled);return he(n,A,{...D||{},_f:{...D&&D._f?D._f:{ref:{name:A}},name:A,mount:!0,..._}}),l.mount.add(A),D?te({disabled:an(_.disabled)?_.disabled:t.disabled,name:A}):E(A,!0,_.value),{...W?{disabled:_.disabled||t.disabled}:{},...t.progressive?{required:!!_.required,min:Ur(_.min),max:Ur(_.max),minLength:Ur(_.minLength),maxLength:Ur(_.maxLength),pattern:Ur(_.pattern)}:{},name:A,onChange:B,onBlur:B,ref:U=>{if(U){ge(A,_),D=H(n,A);const K=_e(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,Q=Ph(K),de=D._f.refs||[];if(Q?de.find(pe=>pe===K):K===D._f.ref)return;he(n,A,{_f:{...D._f,...Q?{refs:[...de.filter(Qs),K,...Array.isArray(H(s,A))?[{}]:[]],ref:{type:K.type,name:A}}:{ref:K}}}),E(A,!1,void 0,K)}else D=H(n,A,{}),D._f&&(D._f.mount=!1),(t.shouldUnregister||_.shouldUnregister)&&!(Ru(l.array,A)&&i.action)&&l.unMount.add(A)}}},Le=()=>t.shouldFocusError&&Qr(n,C,l.mount),Be=A=>{an(A)&&(k.state.next({disabled:A}),Qr(n,(_,D)=>{const W=H(n,D);W&&(_.disabled=W._f.disabled||A,Array.isArray(W._f.refs)&&W._f.refs.forEach(U=>{U.disabled=W._f.disabled||A}))},0,!1))},Ce=(A,_)=>async D=>{let W;D&&(D.preventDefault&&D.preventDefault(),D.persist&&D.persist());let U=Ke(a);if(k.state.next({isSubmitting:!0}),t.resolver){const{errors:K,values:Q}=await T();r.errors=K,U=Q}else await P(n);if(l.disabled.size)for(const K of l.disabled)he(U,K,void 0);if(Fe(r.errors,"root"),en(r.errors)){k.state.next({errors:{}});try{await A(U,D)}catch(K){W=K}}else _&&await _({...r.errors},D),Le(),setTimeout(Le);if(k.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:en(r.errors)&&!W,submitCount:r.submitCount+1,errors:r.errors}),W)throw W},_n=(A,_={})=>{H(n,A)&&(_e(_.defaultValue)?L(A,Ke(H(s,A))):(L(A,_.defaultValue),he(s,A,Ke(_.defaultValue))),_.keepTouched||Fe(r.touchedFields,A),_.keepDirty||(Fe(r.dirtyFields,A),r.isDirty=_.defaultValue?F(A,Ke(H(s,A))):F()),_.keepError||(Fe(r.errors,A),d.isValid&&h()),k.state.next({...r}))},cn=(A,_={})=>{const D=A?Ke(A):s,W=Ke(D),U=en(A),K=U?s:W;if(_.keepDefaultValues||(s=D),!_.keepValues){if(_.keepDirtyValues){const Q=new Set([...l.mount,...Object.keys(Gr(s,a))]);for(const de of Array.from(Q))H(r.dirtyFields,de)?he(K,de,H(a,de)):L(de,H(K,de))}else{if(Ka&&_e(A))for(const Q of l.mount){const de=H(n,Q);if(de&&de._f){const pe=Array.isArray(de._f.refs)?de._f.refs[0]:de._f.ref;if(gs(pe)){const Ze=pe.closest("form");if(Ze){Ze.reset();break}}}}for(const Q of l.mount)L(Q,H(K,Q))}a=Ke(K),k.array.next({values:{...K}}),k.state.next({values:{...K}})}l={mount:_.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!d.isValid||!!_.keepIsValid||!!_.keepDirtyValues,i.watch=!!t.shouldUnregister,k.state.next({submitCount:_.keepSubmitCount?r.submitCount:0,isDirty:U?!1:_.keepDirty?r.isDirty:!!(_.keepDefaultValues&&!Wn(A,s)),isSubmitted:_.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:U?{}:_.keepDirtyValues?_.keepDefaultValues&&a?Gr(s,a):r.dirtyFields:_.keepDefaultValues&&A?Gr(s,A):_.keepDirty?r.dirtyFields:{},touchedFields:_.keepTouched?r.touchedFields:{},errors:_.keepErrors?r.errors:{},isSubmitSuccessful:_.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},kn=(A,_)=>cn(bn(A)?A(a):A,_),rr=(A,_={})=>{const D=H(n,A),W=D&&D._f;if(W){const U=W.refs?W.refs[0]:W.ref;U.focus&&(U.focus(),_.shouldSelect&&bn(U.select)&&U.select())}},Hn=A=>{r={...r,...A}},Yn={control:{register:ge,unregister:ee,getFieldState:J,handleSubmit:Ce,setError:ae,_subscribe:Z,_runSchema:T,_focusError:Le,_getWatch:M,_getDirty:F,_setValid:h,_setFieldArray:w,_setDisabledField:te,_setErrors:I,_getFieldArray:O,_reset:cn,_resetDefaultValues:()=>bn(t.defaultValues)&&t.defaultValues().then(A=>{kn(A,t.resetOptions),k.state.next({isLoading:!1})}),_removeUnmounted:x,_disableForm:Be,_subjects:k,_proxyFormState:d,get _fields(){return n},get _formValues(){return a},get _state(){return i},set _state(A){i=A},get _defaultValues(){return s},get _names(){return l},set _names(A){l=A},get _formState(){return r},get _options(){return t},set _options(A){t={...t,...A}}},subscribe:G,trigger:V,register:ge,handleSubmit:Ce,watch:Ue,setValue:L,getValues:$,reset:kn,resetField:_n,clearErrors:X,unregister:ee,setError:ae,setFocus:rr,getFieldState:J};return{...Yn,formControl:Yn}}function qs(e={}){const t=p.useRef(void 0),r=p.useRef(void 0),[n,s]=p.useState({isDirty:!1,isValidating:!1,isLoading:bn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:bn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:Kh(e),formState:n},e.formControl&&e.defaultValues&&!bn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const a=t.current.control;return a._options=e,Ua(()=>{const i=a._subscribe({formState:a._proxyFormState,callback:()=>s({...a._formState}),reRenderRoot:!0});return s(l=>({...l,isReady:!0})),a._formState.isReady=!0,i},[a]),p.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),p.useEffect(()=>{e.mode&&(a._options.mode=e.mode),e.reValidateMode&&(a._options.reValidateMode=e.reValidateMode)},[a,e.mode,e.reValidateMode]),p.useEffect(()=>{e.errors&&(a._setErrors(e.errors),a._focusError())},[a,e.errors]),p.useEffect(()=>{e.shouldUnregister&&a._subjects.state.next({values:a._getWatch()})},[a,e.shouldUnregister]),p.useEffect(()=>{if(a._proxyFormState.isDirty){const i=a._getDirty();i!==n.isDirty&&a._subjects.state.next({isDirty:i})}},[a,n.isDirty]),p.useEffect(()=>{e.values&&!Wn(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,s(i=>({...i}))):a._resetDefaultValues()},[a,e.values]),p.useEffect(()=>{a._state.mount||(a._setValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),t.current.formState=_u(n,a),t.current}function Gh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ll={exports:{}},Hr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ol;function Uh(){if(ol)return Hr;ol=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var l in s)l!=="key"&&(a[l]=s[l])}else a=s;return s=a.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:a}}return Hr.Fragment=t,Hr.jsx=r,Hr.jsxs=r,Hr}var dl;function Hh(){return dl||(dl=1,ll.exports=Uh()),ll.exports}var be=Hh();const Yh=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:be.jsx(ft,{variant:"warning",size:"small",children:be.jsx(Se,{gap:"2",children:p.Children.map(e,t=>be.jsx(se,{size:"small",children:t},og(t)?t.key:t))})}),bt={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},ul=Zn(bt),$h=({onClick:e=()=>{},erOverstyrt:t=!1})=>{const[r,n]=f.useState(t),s=()=>{r||(n(!0),e(!0))};return f.useEffect(()=>{n(t)},[t]),be.jsx(Pe,{variant:r?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:s,"aria-disabled":t,disabled:t,icon:r?be.jsx(Jg,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:ul.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):be.jsx(Wg,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:ul.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};var gl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ml;function Wh(){return ml||(ml=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(a=s(a,n.call(this,l)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var l in a)t.call(a,l)&&a[l]&&(i=s(i,this&&this[l]||l));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(gl)),gl.exports}var zh=Wh();const $a=Gh(zh),Jh="_borderbox_1vkvn_1",Xh="_error_1vkvn_5",Qh="_warning_1vkvn_8",Zh={borderbox:Jh,error:Xh,warning:Qh};$a.bind(Zh);const e0="_aksjonspunkt_kn1hn_1",n0="_erAksjonspunktApent_kn1hn_4",r0="_erIkkeGodkjentAvBeslutter_kn1hn_8",t0={aksjonspunkt:e0,erAksjonspunktApent:n0,erIkkeGodkjentAvBeslutter:r0};$a.bind(t0);const cs=({dateString:e,year:t,month:r,day:n})=>be.jsx(be.Fragment,{children:Lo(e,{year:t,month:r,day:n})}),fl=Zn(bt),s0=({text:e,okButtonText:t,showModal:r,cancel:n,submit:s})=>be.jsxs(Pn,{width:"small",open:r,"aria-label":e,onClose:n,children:[be.jsx(Pn.Body,{children:be.jsx(ps,{size:"small",children:e})}),be.jsxs(Pn.Footer,{children:[be.jsx(Pe,{variant:"primary",size:"small",onClick:s,autoFocus:!0,type:"button",children:t||fl.formatMessage({id:"OkAvbrytModal.Ok"})}),be.jsx(Pe,{variant:"secondary",size:"small",onClick:n,type:"button",children:fl.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),Zr=({dateStringFom:e,dateStringTom:t,showTodayString:r=!1})=>be.jsx(be.Fragment,{children:dg(e,t,{showTodayString:r})});Zn(bt);const a0="_divider_1t980_1",i0="_dividerParagraf_1t980_8",l0="_leftPanel_1t980_11",o0="_rightPanel_1t980_14",ga={divider:a0,dividerParagraf:i0,leftPanel:l0,rightPanel:o0},d0=$a.bind(ga),cl=({spaceUnder:e=!1,spaceAbove:t=!1,leftPanel:r=!1,rightPanel:n=!1,dividerParagraf:s=!1,className:a})=>be.jsxs(be.Fragment,{children:[t&&be.jsx("div",{style:{marginBottom:"32px"}}),be.jsx("div",{className:d0(a,{leftPanel:r,rightPanel:n}),children:be.jsx("div",{className:s?ga.dividerParagraf:ga.divider})}),e&&be.jsx("div",{style:{marginBottom:"32px"}})]}),Bu=()=>be.jsx("span",{"data-testid":"editedIcon",children:be.jsx(Zg,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});Zn(bt);const u0=Zn(bt),g0=({tekst:e,children:t})=>{const[r,n]=f.useState(!1);if(!e)return t;const s=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return be.jsx(Eu,{content:u0.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:be.jsx("span",{"aria-hidden":"true",onClick:s,children:t??e})})},kl={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},ma=({beløp:e,kr:t=!1,rød:r=!1})=>{const n=e==null?void 0:e.toString().replace(/\s/g,"");return be.jsx(g0,{tekst:n,children:be.jsxs("span",{className:r?kl.rød:kl.default,children:[n?ug(n):"-",n&&t&&" kr"]})})};function m0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vl={exports:{}},Yr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pl;function f0(){if(pl)return Yr;pl=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var l in s)l!=="key"&&(a[l]=s[l])}else a=s;return s=a.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:a}}return Yr.Fragment=t,Yr.jsx=r,Yr.jsxs=r,Yr}var yl;function c0(){return yl||(yl=1,vl.exports=f0()),vl.exports}var me=c0();const ht=e=>e.reduce((t,r,n)=>({...t,[n]:s=>r(s)||!0}),{}),It=(e,t)=>{const r=t.split(".").reduce((n,s)=>n!==void 0?n[s]:n,e);return r==null?void 0:r.message};var fa={exports:{}},k0=fa.exports,bl;function v0(){return bl||(bl=1,function(e,t){(function(r,n){e.exports=n()})(k0,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,a=/\d\d/,i=/\d\d?/,l=/\d*[^-_:/,()\s\d]+/,o={},u=function(b){return(b=+b)+(b>68?1900:2e3)},d=function(b){return function(w){this[b]=+w}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var v=w.match(/([+-]|\d\d)/g),I=60*v[1]+(+v[2]||0);return I===0?0:v[0]==="+"?-I:I}(b)}],k=function(b){var w=o[b];return w&&(w.indexOf?w:w.s.concat(w.f))},m=function(b,w){var v,I=o.meridiem;if(I){for(var E=1;E<=24;E+=1)if(b.indexOf(I(E,0,w))>-1){v=E>12;break}}else v=b===(w?"pm":"PM");return v},y={A:[l,function(b){this.afternoon=m(b,!1)}],a:[l,function(b){this.afternoon=m(b,!0)}],Q:[s,function(b){this.month=3*(b-1)+1}],S:[s,function(b){this.milliseconds=100*+b}],SS:[a,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[i,d("seconds")],ss:[i,d("seconds")],m:[i,d("minutes")],mm:[i,d("minutes")],H:[i,d("hours")],h:[i,d("hours")],HH:[i,d("hours")],hh:[i,d("hours")],D:[i,d("day")],DD:[a,d("day")],Do:[l,function(b){var w=o.ordinal,v=b.match(/\d+/);if(this.day=v[0],w)for(var I=1;I<=31;I+=1)w(I).replace(/\[|\]/g,"")===b&&(this.day=I)}],w:[i,d("week")],ww:[a,d("week")],M:[i,d("month")],MM:[a,d("month")],MMM:[l,function(b){var w=k("months"),v=(k("monthsShort")||w.map(function(I){return I.slice(0,3)})).indexOf(b)+1;if(v<1)throw new Error;this.month=v%12||v}],MMMM:[l,function(b){var w=k("months").indexOf(b)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,d("year")],YY:[a,function(b){this.year=u(b)}],YYYY:[/\d{4}/,d("year")],Z:g,ZZ:g};function h(b){var w,v;w=b,v=o&&o.formats;for(var I=(b=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(x,F,M){var O=M&&M.toUpperCase();return F||v[M]||r[M]||v[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(q,S,L){return S||L.slice(1)})})).match(n),E=I.length,j=0;j<E;j+=1){var N=I[j],T=y[N],R=T&&T[0],P=T&&T[1];I[j]=P?{regex:R,parser:P}:N.replace(/^\[|\]$/g,"")}return function(x){for(var F={},M=0,O=0;M<E;M+=1){var q=I[M];if(typeof q=="string")O+=q.length;else{var S=q.regex,L=q.parser,B=x.slice(O),C=S.exec(B)[0];L.call(F,C),x=x.replace(C,"")}}return function(V){var $=V.afternoon;if($!==void 0){var J=V.hours;$?J<12&&(V.hours+=12):J===12&&(V.hours=0),delete V.afternoon}}(F),F}}return function(b,w,v){v.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(u=b.parseTwoDigitYear);var I=w.prototype,E=I.parse;I.parse=function(j){var N=j.date,T=j.utc,R=j.args;this.$u=T;var P=R[1];if(typeof P=="string"){var x=R[2]===!0,F=R[3]===!0,M=x||F,O=R[2];F&&(O=R[2]),o=this.$locale(),!x&&O&&(o=v.Ls[O]),this.$d=function(B,C,V,$){try{if(["x","X"].indexOf(C)>-1)return new Date((C==="X"?1e3:1)*B);var J=h(C)(B),X=J.year,ae=J.month,Ue=J.day,Z=J.hours,G=J.minutes,ee=J.seconds,te=J.milliseconds,ge=J.zone,Le=J.week,Be=new Date,Ce=Ue||(X||ae?1:Be.getDate()),_n=X||Be.getFullYear(),cn=0;X&&!ae||(cn=ae>0?ae-1:Be.getMonth());var kn,rr=Z||0,Hn=G||0,pr=ee||0,Yn=te||0;return ge?new Date(Date.UTC(_n,cn,Ce,rr,Hn,pr,Yn+60*ge.offset*1e3)):V?new Date(Date.UTC(_n,cn,Ce,rr,Hn,pr,Yn)):(kn=new Date(_n,cn,Ce,rr,Hn,pr,Yn),Le&&(kn=$(kn).week(Le).toDate()),kn)}catch{return new Date("")}}(N,P,T,v),this.init(),O&&O!==!0&&(this.$L=this.locale(O).$L),M&&N!=this.format(P)&&(this.$d=new Date("")),o={}}else if(P instanceof Array)for(var q=P.length,S=1;S<=q;S+=1){R[1]=P[S-1];var L=v.apply(this,R);if(L.isValid()){this.$d=L.$d,this.$L=L.$L,this.init();break}S===q&&(this.$d=new Date(""))}else E.call(this,j)}}})}(fa)),fa.exports}var p0=v0();const y0=m0(p0),b0="_textarea_1snk6_1",h0="_readOnlyField_1snk6_7",hl={textarea:b0,readOnlyField:h0},I0=e=>e!=null&&e!=="",_s=({label:e,value:t,isEdited:r=!1,type:n,hideLabel:s,size:a})=>I0(t)?me.jsxs(Se,{gap:"1",children:[e&&!s&&me.jsx(je,{size:a,children:e}),me.jsxs(Ie,{gap:"2",align:"center",wrap:!1,children:[me.jsx(Ko,{className:n==="textarea"?hl.textarea:hl.readOnlyField,size:a,children:t}),r&&me.jsx(Bu,{})]})]}):null;Oe.extend(y0);const tt=({name:e,label:t,description:r,validate:n=[],hideLabel:s=!1,disabled:a=!1,isReadOnly:i=!1,onChange:l,disabledDays:o,isEdited:u,defaultMonth:d,fromDate:g,toDate:k,size:m="small"})=>{const{formState:{errors:y}}=er(),{field:h}=yt({name:e,rules:{validate:f.useMemo(()=>ht(n),[n])}}),b=h.value?Oe(h.value,Dn,!0).format(jr):"",[w,v]=f.useState(b),{datepickerProps:I,inputProps:E}=xb({onDateChange:T=>{if(T!==void 0){const R=Oe(T).format(Dn);l&&l(R),h.onChange(R),v(Oe(R,Dn,!0).format(jr))}},defaultSelected:h.value?Oe(h.value,Dn,!0).toDate():void 0,defaultMonth:d||(!h.value&&k?k:void 0),disabled:o}),j=f.useCallback(T=>{const R=Oe(T.target.value,jr,!0).format(Dn),P=R!=="Invalid Date";v(T.target.value),l&&l(P?R:T.target.value),h.onChange(P?R:T.target.value)},[v,l,h]);if(i)return me.jsx(_s,{label:t,value:h.value?Oe(h.value,Dn,!0).format(jr):void 0,isEdited:u,hideLabel:s,size:m});const N={...I,fromDate:g,toDate:k,dropdownCaption:g&&k?!0:void 0};return me.jsx(ds,{...N,children:me.jsx(ds.Input,{...E,hideLabel:s,onChange:j,value:w,size:m,label:t,description:r,disabled:a,error:It(y,e)})})},ca=({name:e,label:t,validate:r=[],readOnly:n=!1,type:s,shouldValidateOnBlur:a=!1,onBlur:i,onChange:l,description:o,autoFocus:u,parse:d=E=>E,format:g=E=>E,normalizeOnBlur:k,isEdited:m,maxLength:y,autoComplete:h=!1,disabled:b,className:w,hideLabel:v,...I})=>{const{formState:{errors:E},trigger:j}=er(),{field:N}=yt({name:e,rules:{validate:f.useMemo(()=>ht(r),[r])}});return n?me.jsx(_s,{label:t,value:N.value,isEdited:m,hideLabel:v,size:I.size}):me.jsx(Ah,{size:"small",hideLabel:v,description:o,label:t,error:It(E,e),...N,value:N.value?g(N.value):"",autoFocus:u,autoComplete:h?void 0:"off",maxLength:y,disabled:b,type:s,className:w,onChange:T=>{const R=T.currentTarget.value?d(T.currentTarget.value):null;return l&&l(R),N.onChange(R)},onBlur:async T=>{var R,P,x,F;if(N.onBlur(),a){const M=await j();i&&M&&i((R=T==null?void 0:T.target)==null?void 0:R.value)}else i&&i((P=T==null?void 0:T.target)==null?void 0:P.value);k&&N.onChange((x=T==null?void 0:T.target)!=null&&x.value?k(d((F=T==null?void 0:T.target)==null?void 0:F.value)):null)},...I})},w0="_hideRadioLabels_1u3xf_1",A0={hideRadioLabels:w0},Cu=({label:e,description:t,name:r,validate:n=[],radios:s,onChange:a,disabled:i=!1,isReadOnly:l=!1,isHorizontal:o=!1,parse:u=h=>h,isTrueOrFalseSelection:d=!1,hideLegend:g=!1,hideRadioLabels:k=!1,isEdited:m=!1,size:y="small"})=>{const{formState:{errors:h}}=er(),{field:b}=yt({name:r,rules:{validate:f.useMemo(()=>ht(n),[n])}}),w=d?I=>I==="true":u,v=me.jsxs(Ie,{justify:"center",gap:"2",children:[e,l&&m&&me.jsx(Bu,{})]});return me.jsxs(ch,{name:r,value:b.value!==void 0?b.value:null,onChange:I=>{a&&a(I),b.onChange(I)},size:y,legend:v,description:t,error:It(h,r),className:k?A0.hideRadioLabels:"",hideLegend:g,children:[!o&&s.map(I=>me.jsxs(f.Fragment,{children:[me.jsx(Hi,{size:y,value:w(I.value),disabled:I.disabled||i||l,children:I.label}),b.value===w(I.value)&&I.element]},I.value)),o&&me.jsxs(me.Fragment,{children:[me.jsx(Ie,{gap:"4",children:s.map(I=>me.jsx(Hi,{size:y,value:w(I.value),disabled:I.disabled||i||l,children:I.label},I.value))}),s.filter(I=>b.value===w(I.value)).map(I=>me.jsx(f.Fragment,{children:I.element},I.value))]})]})},j0=({name:e,label:t,selectValues:r,validate:n=[],readOnly:s=!1,description:a,hideValueOnDisable:i=!1,onChange:l,disabled:o,className:u,hideLabel:d,isEdited:g,size:k})=>{const{formState:{errors:m}}=er(),{field:y}=yt({name:e,rules:{validate:f.useMemo(()=>ht(n),[n])}});if(s){const w=r.map(I=>I.props).find(I=>I.value===y.value),v=w?w.children:void 0;return me.jsx(_s,{value:v,label:t,hideLabel:d,isEdited:g,size:k})}const h=y.value||"",b=!r.map(w=>w.props.value).includes(h)&&h!=="";return b&&console.warn(`No corresponding option found for value '${h}'`),me.jsxs(da,{size:"small",className:u,error:It(m,e),label:t,description:a,value:i&&o||b?"":y.value,disabled:o,onChange:w=>{l&&l(w),y.onChange(w)},hideLabel:d,children:[me.jsx("option",{style:{display:"none"}}),",",r]})},E0="_textAreaFieldWithBadges_bdz0b_1",T0="_etikettWrapper_bdz0b_4",Il={textAreaFieldWithBadges:E0,etikettWrapper:T0},Wa=({name:e,label:t,readOnly:r,maxLength:n,badges:s,validate:a=[],parse:i=k=>k,className:l,description:o,isEdited:u,size:d="small",...g})=>{const{formState:{errors:k}}=er(),{field:m}=yt({name:e,rules:{validate:f.useMemo(()=>ht(a),[a])}});return r?me.jsx(_s,{size:d,label:t,value:m.value,type:"textarea",isEdited:u,hideLabel:g.hideLabel}):me.jsxs("div",{className:s?Il.textAreaFieldWithBadges:null,children:[s&&me.jsx("div",{className:Il.etikettWrapper,children:s.map(({type:y,titleText:h})=>me.jsx(oh,{variant:y,size:"small",children:h},h))}),me.jsx(Ih,{size:d,label:t,description:o,className:l,autoComplete:"off",...m,onChange:y=>m.onChange(y.currentTarget.value!==""?i(y.currentTarget.value):null),value:m.value?m.value:"",error:It(k,e),maxLength:n,...g})]})},Ms=({formMethods:e,onSubmit:t,children:r,className:n,setDataOnUnmount:s})=>{const{handleSubmit:a,getValues:i}=e;return f.useEffect(()=>()=>{s&&s(i())},[]),me.jsx(Th,{...e,children:me.jsx("form",{className:n,onSubmit:t?a(l=>t(l)):void 0,children:r})})};function Ku(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ka={exports:{}},O0=ka.exports,wl;function N0(){return wl||(wl=1,function(e,t){(function(r,n){e.exports=n()})(O0,function(){return function(r,n){n.prototype.isSameOrAfter=function(s,a){return this.isSame(s,a)||this.isAfter(s,a)}}})}(ka)),ka.exports}var R0=N0();const P0=Ku(R0);var va={exports:{}},q0=va.exports,Al;function _0(){return Al||(Al=1,function(e,t){(function(r,n){e.exports=n()})(q0,function(){return function(r,n){n.prototype.isSameOrBefore=function(s,a){return this.isSame(s,a)||this.isBefore(s,a)}}})}(va)),va.exports}var M0=_0();const D0=Ku(M0),S0="Dato må være før eller lik {limit}",x0="Dato må være etter eller lik {limit}",F0="Perioder kan ikke overlappe i tid",V0="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",L0="Dato må være lik {value}",B0="Dato må skrives slik: dd.mm.åååå",C0="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",K0="Tallet kan ikke inneholde mer enn to desimaler",G0="Tallet kan ikke ha desimaler",U0="Feltet kan kun inneholde tall",H0="Ugyldig fødselsnummer",Y0="Feltet må være et fødselsnummer (11 siffer)",$0="Ugyldig organisasjonsnummer.",W0="Ugyldig organisasjonsnummer eller fødselsnummer",z0="Startdato må være før eller lik sluttdato",J0="Periode er utenfor opptjeningsperioden",X0="Ugyldig saksnummer eller fødselsnummer",Q0="Feltet inneholder ugyldige tegn: {text}",Z0="Feltet inneholder en ugyldig verdi: {value}",eI="Feltet kan ikke inneholde mellomrom",nI="Feltet må fylles ut",rI="Du kan skrive maksimalt {length} tegn",tI="Du må skrive minst {length} tegn",sI="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",aI="Feltet må være mindre eller lik {length}",iI="Feltet må være større eller lik {length}",lI="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",oI={DateNotBeforeOrEqual:S0,DateNotAfterOrEqual:x0,DateRangesOverlapping:F0,DateRangesOverlappingPeriodTypes:V0,DatesNotEqual:L0,InvalidDate:B0,InvalidDatesInPeriod:C0,InvalidDecimal:K0,InvalidInteger:G0,InvalidNumber:U0,InvalidFodselsnr:H0,InvalidFodselsnrFormat:Y0,InvalidOrgnr:$0,InvalidOrgnrOrFodselsnr:W0,InvalidPeriod:z0,InvalidPeriodRange:J0,InvalidSaksnrOrFodselsnrFormat:X0,InvalidText:Q0,InvalidValue:Z0,IllegalWhiteSpace:eI,IsRequired:nI,MaxLength:rI,MinLength:tI,MaxLengthOrFodselsnr:sI,MaxValue:aI,MinValue:iI,SammeFodselsnrSomSoker:lI},{formatMessage:An}=Zn(oI),dI=e=>An({id:"DateNotBeforeOrEqual"},{limit:e}),uI=e=>An({id:"DateNotAfterOrEqual"},{limit:e}),gI=()=>An({id:"InvalidDate"}),mI=e=>An({id:"InvalidInteger"},{text:e}),fI=e=>An({id:"InvalidNumber"},{text:e}),cI=e=>An({id:"InvalidText"},{text:e}),kI=()=>An({id:"IsRequired"}),vI=e=>An({id:"MaxLength"},{length:e}),pI=e=>An({id:"MinLength"},{length:e}),yI=e=>An({id:"MaxValue"},{length:e}),bI=e=>An({id:"MinValue"},{length:e}),hI=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,II=/^\d+([,.]\d+)?$/,wI=/^\s*\d+\s*$/,AI=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,jI=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,nr=e=>e==null||e.toString().trim().length===0,EI=()=>Oe().subtract(1,"days").startOf("day"),TI=()=>Oe().startOf("day");Oe.extend(P0);Oe.extend(D0);const gn=e=>nr(e)?kI():void 0,za=e=>t=>nr(t)||t.toString().trim().length>=e?null:pI(e),Ja=e=>t=>nr(t)||t.toString().trim().length<=e?null:vI(e),Gu=e=>t=>t>=e?null:bI(e),Uu=e=>t=>t<=e?null:yI(e),OI=e=>nr(e)||II.test(e.toString())?null:fI(e.toString()),NI=e=>nr(e)||wI.test(e.toString())?null:mI(e.toString()),Hu=e=>OI(e)||NI(e),st=(e="")=>nr(e)||hI.test(e)?null:gI(),RI=e=>t=>{const r=Oe(e).endOf("day");return nr(t)||Oe(t).isSameOrBefore(r)?null:dI(r.format(jr))},Xa=e=>t=>{const r=Oe(e).startOf("day");return nr(t)||Oe(t).isSameOrAfter(r)?null:uI(r.format(jr))},jl=e=>RI(EI())(e),PI=e=>Xa(TI())(e),Qa=e=>{if(!AI.test(e)){const t=e.replace(jI,"");return cI(t.replace(/[\t]/g,"Tabulatortegn"))}return null},qI=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const t=document.createAttribute("tabindex");t.value="-1";const r=e[0];r.setAttributeNode(t),document.activeElement.blur(),r.focus()}},300)},Yu=({submitCallback:e,cancelEvent:t,showModal:r,ventearsaker:n,erTilbakekreving:s,frist:a,ventearsak:i,visBrevErBestilt:l=!1,hasManualPaVent:o,defaultVenteårsak:u=null})=>{const d=Qn(),g=qs({defaultValues:MI(o,a,i??u)}),k=g.watch("frist"),m=g.watch("ventearsak"),y=VI(i,m),h=LI(a,k),b=!(a===k&&!y),w=FI(s,a,k,m);return c.jsx(Ms,{formMethods:g,onSubmit:e,children:c.jsxs(Pn,{width:"small",open:r,onClose:t,header:{heading:d.formatMessage({id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"})},children:[c.jsx(Pn.Body,{children:c.jsxs(Se,{gap:"4",children:[(o||k)&&c.jsx(tt,{label:c.jsx(Y,{id:"SettPaVentModal.Frist"}),name:"frist",validate:[gn,st,PI]}),c.jsx(j0,{name:"ventearsak",label:c.jsx(Y,{id:"SettPaVentModal.Arsak"}),validate:[gn],selectValues:n.filter(v=>!o||(s?xI(v,m):DI.some(I=>I===v.kode))).sort((v,I)=>v.navn.localeCompare(I.navn)).map(v=>c.jsx("option",{value:v.kode,children:v.navn},v.kode)),readOnly:!o}),l&&c.jsx(se,{size:"small",children:c.jsx(Y,{id:"SettPaVentModal.BrevBlirBestilt"})}),o&&c.jsx(se,{size:"small",children:c.jsx(Y,{id:"SettPaVentModal.EndreFrist"})}),!o&&w&&c.jsxs(c.Fragment,{children:[c.jsx(se,{size:"small",children:c.jsx(Y,{id:"SettPaVentModal.UtløptFrist"})}),c.jsx(se,{size:"small",children:c.jsx(Y,{id:"SettPaVentModal.HenleggeSaken"})})]})]})}),c.jsxs(Pn.Footer,{children:[c.jsx(Pe,{size:"small",variant:"primary",style:{paddingInline:"36px"},onClick:b?qI:t,disabled:!y&&!h,children:c.jsx(Y,{id:"SettPaVentModal.Ok"})}),(!o||b||!l)&&c.jsx(Pe,{size:"small",variant:"secondary",onClick:t,type:"button",children:c.jsx(Y,{id:y||h?"SettPaVentModal.Avbryt":"SettPaVentModal.Lukk"})})]})]})})},_I=()=>{const e=Oe().toDate();return e.setDate(e.getDate()+28),Oe(e).format(Dn)},MI=(e,t,r)=>({ventearsak:r??void 0,frist:t||e===!1?t??void 0:_I()}),DI=[$e.AVV_DOK,$e.AVV_FODSEL,$e.VENT_PÅ_BRUKERTILBAKEMELDING,$e.UTV_FRIST,$e.FOR_TIDLIG_SOKNAD,$e.VENT_OPDT_INNTEKTSMELDING,$e.VENT_UTLAND_TRYGD,$e.UTVIDET_TILSVAR_FRIST,$e.ENDRE_TILKJENT_YTELSE,$e.VENT_PÅ_MULIG_MOTREGNING],SI=[$e.VENT_PÅ_BRUKERTILBAKEMELDING,$e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG],xI=(e,t)=>SI.some(r=>r===e.kode)?e.kode===t:!0,FI=(e,t,r,n)=>{const s=e&&(!!r&&jl(r)===null||!!t&&jl(t)===null),a=n===$e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;return e&&s&&a},VI=(e,t)=>!(e===t||!t&&!e),LI=(e,t)=>!(e===t||!t&&!e);Yu.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModal",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},frist:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},ventearsak:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},defaultVenteårsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const BI={"SettPaVentModal.ModalDescription":"Behandlingen settes på vent med frist","SettPaVentModal.ModalDescriptionErPaVent":"Behandlingen er satt på vent","SettPaVentModal.PaVent":"På vent","SettPaVentModal.SettesPaVent":"Behandlingen settes på vent","SettPaVentModal.ErSettPaVent":"Behandlingen er satt på vent","SettPaVentModal.Frist":"Frist","SettPaVentModal.Ok":"OK","SettPaVentModal.Avbryt":"Avbryt","SettPaVentModal.Lukk":"Lukk","SettPaVentModal.BrevBlirBestilt":"Brevet blir bestilt","SettPaVentModal.Arsak":"Årsak","SettPaVentModal.EndreFrist":"Du kan endre frist eller årsak før du fortsetter","SettPaVentModal.UtløptFrist":"OBS! Fristen på denne behandlingen er utløpt!","SettPaVentModal.HenleggeSaken":`Kontroller hvorfor Økonomi ikke har dannet et kravgrunnlag.
 Dersom det feilutbetalte beløpet er bortfalt skal saken henlegges.
For mer informasjon, se rutine under tilbakekreving.`},CI=Zn(BI),$u=({frist:e=null,ventearsak:t=null,hasManualPaVent:r=!1,...n})=>c.jsx(Bo,{value:CI,children:c.jsx(Yu,{frist:e,ventearsak:t,hasManualPaVent:r,...n})});$u.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModalIndex",props:{cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},frist:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},ventearsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:""},hasManualPaVent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};const Za=f.createContext({isDirty:!1,setDirty:()=>{}}),Wu=({children:e})=>{const[t,r]=f.useState(!1),n=f.useMemo(()=>({isDirty:t,setDirty:r}),[t,r]);return c.jsx(Za.Provider,{value:n,children:e})},ei=e=>{const t=f.useContext(Za);f.useEffect(()=>{t.setDirty(e)},[e])},KI=()=>f.useContext(Za).isDirty;Wu.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const El=(e,t)=>({arbeidsgiverIdent:e,arbeidsgiverNavn:t.navn,...t.erPrivatPerson?{erPrivatPerson:!0,arbeidsgiverFødselsdato:t.fødselsdato}:{erPrivatPerson:!1}}),Tt=e=>t=>t.arbeidsgiverIdent===e.arbeidsgiverIdent,GI=(e,t)=>{const{fom:r,tom:n,saksbehandlersVurdering:s,stillingsprosent:a,begrunnelse:i}=e;if(e.saksbehandlersVurdering)return e.saksbehandlersVurdering===fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverNavn:t,fom:r,tom:n,stillingsprosent:a,saksbehandlersVurdering:s??void 0,begrunnelse:i??void 0}:{saksbehandlersVurdering:s??void 0,begrunnelse:i??void 0}},UI=({saksbehandlersVurdering:e,begrunnelse:t})=>e?{saksbehandlersVurdering:e,begrunnelse:t??void 0}:void 0,HI=(e,t)=>e.filter(r=>r.arbeidsgiverIdent===t),YI=(e,t)=>t.map(r=>{const n=e.find(s=>$I(r,s));return{arbeidsforhold:r,inntektsmelding:n}}),$I=(e,t)=>t.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!t.internArbeidsforholdId||t.internArbeidsforholdId===e.internArbeidsforholdId),WI=e=>e.årsak?-1:1,zI=(e,t)=>{const r=e.årsak,n=t.årsak;return r&&!n?-1:n&&!r?1:e.arbeidsgiverNavn.localeCompare(t.arbeidsgiverNavn)},JI=(e,t)=>{const{arbeidsforhold:r,inntektsmeldinger:n,inntekter:s}=e,a=[...r.sort(WI)].reduce((l,o)=>{var h,b;if(l.find(Tt(o)))return l;const d=r.filter(Tt(o)),g=El(o.arbeidsgiverIdent,t[o.arbeidsgiverIdent]),k=HI(n,o.arbeidsgiverIdent),m=((h=s.find(Tt(o)))==null?void 0:h.inntekter)??[],y={...g,årsak:o.årsak??((b=k[0])==null?void 0:b.årsak)??void 0,avklaring:GI(o,g.arbeidsgiverNavn),arbeidsforholdForRad:d,inntektsmeldingerForRad:k,inntektsposter:m};return l.concat(y)},[]),i=n.filter(l=>!r.some(o=>l.arbeidsgiverIdent===o.arbeidsgiverIdent)).map(l=>{var d;const o=El(l.arbeidsgiverIdent,t[l.arbeidsgiverIdent]),u=((d=s.find(Tt(l)))==null?void 0:d.inntekter)??[];return{...o,årsak:l.årsak??void 0,avklaring:UI(l),arbeidsforholdForRad:[],inntektsmeldingerForRad:[l],inntektsposter:u}});return a.concat(i).sort(zI)},Tl=e=>{const t=e.findIndex(r=>r.årsak&&!r.avklaring);return t!==-1?[t]:[]};var Zs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ol;function XI(){return Ol||(Ol=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(a=s(a,n.call(this,l)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var l in a)t.call(a,l)&&a[l]&&(i=s(i,this&&this[l]||l));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Zs)),Zs.exports}var QI=XI();const ZI=Fo(QI),zu=({saksnummer:e,journalpostId:t,dokumentId:r,dokumentTittel:n,children:s})=>{const a=`${t}-${r}`,i=pg(e,t,r);return c.jsx(Ca,{href:i,target:a,rel:"noopener noreferrer",onClick:ew(n),children:s??n})},ew=e=>t=>{e&&(t.preventDefault(),yg(t.currentTarget.href,t.currentTarget.target,e))};zu.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const nw="_inline_glms2_1",rw="_docIcon_glms2_9",tw="_phoneIcon_glms2_14",ea={inline:nw,docIcon:rw,phoneIcon:tw},at=({saksnummer:e,arbeidsforhold:t,inntektsmelding:r,skalViseArbeidsforholdId:n,alleKodeverk:s,ikkeVisInfo:a,radData:i})=>{var l;return c.jsxs(c.Fragment,{children:[c.jsxs(Se,{gap:"4",children:[!a&&c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:i.erPrivatPerson?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),c.jsx(se,{size:"small",children:i.erPrivatPerson?c.jsx(cs,{dateString:i.arbeidsgiverFødselsdato}):i.arbeidsgiverIdent})]}),n&&c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),c.jsx(se,{size:"small",children:r.eksternArbeidsforholdId})]}),t&&c.jsxs(c.Fragment,{children:[c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),c.jsx(se,{size:"small",children:`${t.stillingsprosent}%`})]}),t.permisjonOgMangel&&c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:((l=s.PermisjonsbeskrivelseType.find(o=>{var u;return o.kode===((u=t.permisjonOgMangel)==null?void 0:u.type)}))==null?void 0:l.navn)??""}),c.jsx(se,{size:"small",children:c.jsx(Zr,{dateStringFom:t.permisjonOgMangel.permisjonFom,dateStringTom:t.permisjonOgMangel.permisjonTom})})]})]}),c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),c.jsx(se,{size:"small",children:c.jsx(ma,{beløp:r.inntektPrMnd})})]}),c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),c.jsx(se,{size:"small",children:c.jsx(Y,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),r.refusjonPrMnd!==void 0&&r.refusjonPrMnd!==null&&c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),c.jsx(se,{size:"small",children:c.jsx(ma,{beløp:r.refusjonPrMnd})})]}),c.jsxs(zu,{saksnummer:e,journalpostId:r.journalpostId,dokumentId:r.dokumentId,children:[c.jsx(se,{size:"small",className:ea.inline,children:c.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),c.jsx(Ug,{className:ea.docIcon})]})]}),c.jsxs(Ie,{gap:"4",children:[c.jsx(nm,{className:ea.phoneIcon}),c.jsxs(Se,{gap:"1",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),c.jsx(qr,{children:r.kontaktpersonNavn}),c.jsx(qr,{children:c.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})]})]})};at.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const sw="_inline_10adz_1",aw="_aksjonpunktImage_10adz_5",iw="_arrow_10adz_12",lw="_ikkeMottatt_10adz_18",ow="_skiller_10adz_30",sr={inline:sw,aksjonpunktImage:aw,arrow:iw,ikkeMottatt:lw,skiller:ow},ni=({saksnummer:e,alleKodeverk:t,radData:r})=>{var k;const n=Qn(),[s,a]=f.useState({}),{arbeidsforholdForRad:i,inntektsmeldingerForRad:l,arbeidsgiverIdent:o,erPrivatPerson:u}=r,d=i.length===1,g=YI(l,i);return c.jsxs(Se,{gap:"4",children:[c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:u?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),c.jsx(se,{size:"small",children:u?c.jsx(cs,{dateString:r.arbeidsgiverFødselsdato}):o})]}),!d&&c.jsxs(c.Fragment,{children:[c.jsx(cl,{dividerParagraf:!0,className:sr.skiller}),g.map(({arbeidsforhold:m,inntektsmelding:y})=>{var h;return c.jsxs(p.Fragment,{children:[c.jsxs(Se,{gap:"2",children:[c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),c.jsxs("div",{children:[(m==null?void 0:m.eksternArbeidsforholdId)&&m.eksternArbeidsforholdId.length<50&&c.jsx("div",{children:c.jsx(se,{size:"small",children:m.eksternArbeidsforholdId})}),(m==null?void 0:m.eksternArbeidsforholdId)&&m.eksternArbeidsforholdId.length>=50&&c.jsx(Eu,{content:dw(m.eksternArbeidsforholdId),children:c.jsx(se,{size:"small",children:`${m.eksternArbeidsforholdId.substring(0,50)}...`})}),!m.eksternArbeidsforholdId&&c.jsx(se,{size:"small",children:"-"})]}),y&&c.jsxs(c.Fragment,{children:[c.jsx(Rr,{}),c.jsx(je,{size:"small",children:c.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!y&&c.jsxs(c.Fragment,{children:[c.jsx(Rr,{}),c.jsxs("div",{children:[c.jsx(ha,{className:sr.aksjonpunktImage,title:n.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),c.jsx("div",{className:sr.ikkeMottatt,children:c.jsx(je,{size:"small",children:c.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),c.jsx(se,{size:"small",children:c.jsx(Zr,{dateStringFom:m.fom,dateStringTom:m.tom})}),y&&c.jsxs(c.Fragment,{children:[c.jsx(Rr,{}),c.jsx(se,{size:"small",children:c.jsx(cs,{dateString:y.motattDato})})]})]}),c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),c.jsx(se,{size:"small",children:`${m.stillingsprosent}%`})]}),m.permisjonOgMangel&&c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:((h=t.PermisjonsbeskrivelseType.find(b=>{var w;return b.kode===((w=m.permisjonOgMangel)==null?void 0:w.type)}))==null?void 0:h.navn)??""}),c.jsx(se,{size:"small",children:c.jsx(Zr,{dateStringFom:m.permisjonOgMangel.permisjonFom,dateStringTom:m.permisjonOgMangel.permisjonTom})})]}),y&&c.jsxs(c.Fragment,{children:[m.internArbeidsforholdId&&s[m.internArbeidsforholdId]&&c.jsx(at,{saksnummer:e,inntektsmelding:y,skalViseArbeidsforholdId:!1,radData:r,alleKodeverk:t}),c.jsxs(Ca,{onClick:b=>{b.preventDefault(),a(w=>{if(!m.internArbeidsforholdId)return w;const v=w[m.internArbeidsforholdId];return{...w,[m.internArbeidsforholdId]:v===void 0||v===!1}})},href:"",children:[c.jsx("span",{children:c.jsx(se,{size:"small",className:sr.inline,children:c.jsx(Y,{id:!m.internArbeidsforholdId||!s[m.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),m.internArbeidsforholdId&&s[m.internArbeidsforholdId]?c.jsx(Uo,{className:sr.arrow}):c.jsx(ys,{className:sr.arrow})]})]})]}),c.jsx(cl,{dividerParagraf:!0,className:sr.skiller})]},`${m.arbeidsgiverIdent}${m.internArbeidsforholdId}`)})]}),d&&g.length>0&&g[0].inntektsmelding&&c.jsx(at,{saksnummer:e,radData:r,arbeidsforhold:i[0],inntektsmelding:g[0].inntektsmelding,skalViseArbeidsforholdId:l.length>1,alleKodeverk:t,ikkeVisInfo:!0}),d&&l.length===0&&c.jsxs(c.Fragment,{children:[c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),c.jsx(se,{size:"small",children:`${i[0].stillingsprosent}%`})]}),i[0].permisjonOgMangel&&c.jsxs(Ie,{gap:"4",children:[c.jsx(je,{size:"small",children:((k=t.PermisjonsbeskrivelseType.find(m=>{var y;return m.kode===((y=i[0].permisjonOgMangel)==null?void 0:y.type)}))==null?void 0:k.navn)??""}),c.jsx(se,{size:"small",children:c.jsx(Zr,{dateStringFom:i[0].permisjonOgMangel.permisjonFom,dateStringTom:i[0].permisjonOgMangel.permisjonTom})})]})]})]})},dw=e=>{const t=Math.ceil(e.length/25);return Array.from({length:t},(n,s)=>e.slice(s*25,s*25+25)).join("-")};ni.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const uw="_bredde_gb3eb_1",gw="_inline_gb3eb_9",mw="_arrow_gb3eb_13",Ot={bredde:uw,inline:gw,arrow:mw},pa=({saksnummer:e,skjæringstidspunkt:t,alleKodeverk:r,radData:n})=>{const[s,a]=f.useState(!1),{inntektsposter:i,arbeidsforholdForRad:l}=n,o=fw(t,i),u=l.length===1,d=i.length>0&&i.some(g=>g.beløp>0);return c.jsxs(Se,{gap:"8",children:[c.jsx(ni,{saksnummer:e,alleKodeverk:r,radData:n}),d&&c.jsxs(Se,{gap:"2",children:[c.jsx(je,{size:"small",children:c.jsx(Y,{id:u?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),c.jsx(Se,{gap:"1",children:o.filter((g,k)=>s?!0:k<3).map(g=>c.jsxs(Ie,{gap:"2",className:Ot.bredde,children:[c.jsx(se,{size:"small",children:c.jsx(Y,{id:`ArbeidsforholdInformasjonPanel.${Oe(g.fom).month()+1}`})}),c.jsx(se,{size:"small",children:Oe(g.fom).year()}),c.jsx(Rr,{}),c.jsx(se,{size:"small",children:c.jsx(ma,{beløp:g.beløp})})]},g.fom))}),c.jsxs(Ca,{onClick:g=>{g.preventDefault(),a(!s)},href:"",children:[c.jsx("span",{children:c.jsx(se,{size:"small",className:Ot.inline,children:c.jsx(Y,{id:s?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),s?c.jsx(Uo,{className:Ot.arrow}):c.jsx(ys,{className:Ot.arrow})]})]}),!d&&c.jsx(je,{size:"small",children:c.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})},fw=(e,t)=>{const n=Oe(e).subtract(1,"month").startOf("month"),s=n.subtract(12,"month"),a=[];for(let i=n;i.isAfter(s);i=i.subtract(1,"month")){const l=i.format(Dn),o=t.find(u=>Oe(u.fom).startOf("month").format(Dn)===l);a.push({beløp:(o==null?void 0:o.beløp)||0,fom:l})}return a};pa.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const cw="_hjelpetekst_tezw4_1",kw="_alertStripe_tezw4_5",vw="_hjelpetekstInnhold_tezw4_9",pw="_svg_tezw4_14",Nt={hjelpetekst:cw,alertStripe:kw,hjelpetekstInnhold:vw,svg:pw},yw=za(3),bw=Ja(1500),hw=Gu(1),Iw=Uu(100),Ju=({behandlingUuid:e,behandlingVersjon:t,radData:r,isReadOnly:n,registrerArbeidsforhold:s,lagreVurdering:a,lukkArbeidsforholdRad:i,oppdaterTabell:l})=>{var I,E,j,N,T;const o=Qn(),u={saksbehandlersVurdering:(I=r.avklaring)==null?void 0:I.saksbehandlersVurdering,begrunnelse:(E=r.avklaring)==null?void 0:E.begrunnelse,fom:(j=r.avklaring)==null?void 0:j.fom,tom:(N=r.avklaring)==null?void 0:N.tom,stillingsprosent:(T=r.avklaring)==null?void 0:T.stillingsprosent},d=qs({defaultValues:u});ei(d.formState.isDirty);const g=d.watch("saksbehandlersVurdering"),k=()=>{i(),d.reset(u)},m=r.inntektsmeldingerForRad[0],y=R=>{const P=Aw(l,r,m,R);return R.saksbehandlersVurdering===fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?s({behandlingUuid:e,behandlingVersjon:t,internArbeidsforholdRef:m.internArbeidsforholdId,arbeidsgiverNavn:r.arbeidsgiverNavn,arbeidsgiverIdent:m.arbeidsgiverIdent,vurdering:fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:R.begrunnelse,fom:R.fom,tom:R.tom,stillingsprosent:R.stillingsprosent}).then(P).finally(()=>d.reset(R)):a({behandlingUuid:e,behandlingVersjon:t,vurdering:R.saksbehandlersVurdering,begrunnelse:R.begrunnelse,arbeidsgiverIdent:m.arbeidsgiverIdent,internArbeidsforholdRef:m.internArbeidsforholdId}).then(P).finally(()=>d.reset(R))},h=f.useRef(null),[b,w]=f.useState(!1),v=()=>w(R=>!R);return c.jsxs(Se,{gap:"8",children:[c.jsx("div",{className:Nt.alertStripe,children:c.jsx(ft,{variant:"info",children:c.jsx(Y,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),c.jsx(Ms,{formMethods:d,onSubmit:y,children:c.jsxs(Se,{gap:"4",children:[c.jsx(Cu,{name:"saksbehandlersVurdering",label:c.jsxs(Ie,{gap:"2",children:[c.jsx(Y,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),c.jsx(Yo,{className:Nt.svg,ref:h,onClick:v,title:o.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),c.jsx(Sr,{open:b,onClose:v,anchorEl:h.current,className:Nt.hjelpetekst,children:c.jsx(Sr.Content,{className:Nt.hjelpetekstInnhold,children:c.jsx(se,{children:c.jsx(Y,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[gn],isReadOnly:n,radios:[{label:o.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:fe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:o.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:fe.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:o.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),g===fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&c.jsxs(Ie,{gap:"4",children:[c.jsx(tt,{name:"fom",label:c.jsx(Y,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[gn,st],isReadOnly:n}),c.jsx(tt,{name:"tom",label:c.jsx(Y,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[st,ww(d.getValues)],isReadOnly:n}),c.jsx(ca,{name:"stillingsprosent",label:c.jsx(Y,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:R=>{const P=parseInt(R.toString(),10);return Number.isNaN(P)?R:P},validate:[gn,Hu,hw,Iw],readOnly:n,maxLength:3})]}),c.jsx(Wa,{label:c.jsx(Y,{id:"ManglendeOpplysningerForm.Begrunn"}),name:"begrunnelse",validate:[gn,yw,bw,Qa],maxLength:1500,readOnly:n}),!n&&c.jsxs(Ie,{gap:"4",children:[c.jsx(Pe,{size:"small",variant:"secondary",loading:d.formState.isSubmitting,disabled:!d.formState.isDirty||d.formState.isSubmitting,children:c.jsx(Y,{id:"ManglendeOpplysningerForm.Lagre"})}),c.jsx(Pe,{size:"small",variant:"tertiary",loading:!1,disabled:d.formState.isSubmitting,onClick:k,type:"button",children:c.jsx(Y,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})},ww=e=>t=>{const r=e("fom");return r&&t?Xa(r)(t):null},Aw=(e,t,r,n)=>()=>{e(s=>s.map(a=>{if(r.arbeidsgiverIdent===a.arbeidsgiverIdent){const l=n.saksbehandlersVurdering===fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:r.arbeidsgiverIdent,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent,begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering}:{begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering};return{...t,avklaring:l}}return a}))};Ju.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const jw="_alertStripe_1jozr_1",Ew="_hjelpetekst_1jozr_5",Tw="_hjelpetekstInnhold_1jozr_9",Ow="_svg_1jozr_14",Rt={alertStripe:jw,hjelpetekst:Ew,hjelpetekstInnhold:Tw,svg:Ow},Nw=za(3),Rw=Ja(1500),Xu=({behandlingUuid:e,behandlingVersjon:t,radData:r,isReadOnly:n,lagreVurdering:s,lukkArbeidsforholdRad:a,oppdaterTabell:i})=>{var E,j;const l=Qn(),{arbeidsforholdForRad:o,inntektsmeldingerForRad:u}=r,d={saksbehandlersVurdering:(E=r.avklaring)==null?void 0:E.saksbehandlersVurdering,begrunnelse:(j=r.avklaring)==null?void 0:j.begrunnelse},g=qs({defaultValues:d});ei(g.formState.isDirty);const k=o.length===1,m=()=>{a(),g.reset(d)},y=N=>{const T={behandlingUuid:e,behandlingVersjon:t,vurdering:N.saksbehandlersVurdering,arbeidsgiverIdent:r.arbeidsgiverIdent,internArbeidsforholdRef:k?o[0].internArbeidsforholdId:void 0,begrunnelse:N.begrunnelse};return s(T).then(Pw(i,r,N)).finally(()=>g.reset(N))},h=f.useRef(null),[b,w]=f.useState(!1),v=()=>w(N=>!N),I=[{label:l.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:fe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:l.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:fe.FORTSETT_UTEN_INNTEKTSMELDING}];return r.erPrivatPerson||I.splice(1,0,{label:l.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:fe.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),c.jsx(Ms,{formMethods:g,onSubmit:y,children:c.jsxs(Se,{gap:"4",children:[!k&&u.length>0&&c.jsx("div",{className:Rt.alertStripe,children:c.jsx(ft,{variant:"info",children:c.jsx(Y,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),c.jsx(Cu,{name:"saksbehandlersVurdering",label:c.jsxs(Ie,{gap:"2",children:[c.jsx(Y,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),c.jsx(Yo,{ref:h,onClick:v,className:Rt.svg,title:l.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),c.jsx(Sr,{open:b,onClose:v,anchorEl:h.current,className:Rt.hjelpetekst,children:c.jsx(Sr.Content,{className:Rt.hjelpetekstInnhold,children:c.jsxs(Se,{gap:"4",children:[c.jsx(se,{children:c.jsx(Y,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),c.jsx(se,{children:c.jsx(Y,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),c.jsx(se,{children:c.jsx(Y,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[gn],isReadOnly:n,radios:I}),c.jsx(Wa,{label:c.jsx(Y,{id:k?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),name:"begrunnelse",validate:[gn,Nw,Rw,Qa],maxLength:1500,readOnly:n}),!n&&c.jsxs(Ie,{gap:"4",children:[c.jsx(Pe,{size:"small",variant:"secondary",loading:g.formState.isSubmitting,disabled:!g.formState.isDirty||g.formState.isSubmitting,children:c.jsx(Y,{id:"InntektsmeldingInnhentesForm.Lagre"})}),c.jsx(Pe,{size:"small",variant:"tertiary",loading:!1,disabled:g.formState.isSubmitting,onClick:m,type:"button",children:c.jsx(Y,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})},Pw=(e,t,r)=>()=>{e(n=>n.map(s=>s.arbeidsgiverIdent===t.arbeidsgiverIdent?{...t,avklaring:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}}:s))};Xu.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const it="342352362",qw=za(3),_w=Ja(1500),Mw=Gu(1),Dw=Uu(100),ri=({behandlingUuid:e,behandlingVersjon:t,isReadOnly:r,registrerArbeidsforhold:n,radData:s,lukkArbeidsforholdRad:a,erOverstyrt:i,oppdaterTabell:l,erNyttArbeidsforhold:o=!1})=>{var w,v,I,E,j;const u=Qn(),[d,g]=f.useState(!1),k={fom:(w=s==null?void 0:s.avklaring)==null?void 0:w.fom,tom:(v=s==null?void 0:s.avklaring)==null?void 0:v.tom,stillingsprosent:(I=s==null?void 0:s.avklaring)==null?void 0:I.stillingsprosent,begrunnelse:(E=s==null?void 0:s.avklaring)==null?void 0:E.begrunnelse,arbeidsgiverNavn:(j=s==null?void 0:s.avklaring)==null?void 0:j.arbeidsgiverNavn},m=qs({defaultValues:k});ei(m.formState.isDirty);const y=()=>{a(),m.reset(k)},h=N=>{const T=Nl(fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,e,t,N);return n(T).then(()=>{l(xw(N)),m.reset(N),o&&a()})},b=()=>{const N=m.getValues(),T=Nl(fe.FJERN_FRA_BEHANDLINGEN,e,t,N);n(T).then(Fw(l,a,o))};return c.jsxs(Se,{gap:"4",children:[!s&&c.jsx(ps,{size:"small",children:c.jsx(Y,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),c.jsx(Ms,{formMethods:m,onSubmit:h,children:c.jsxs(Se,{gap:"6",children:[c.jsxs(Ie,{gap:"4",children:[i&&c.jsxs(c.Fragment,{children:[c.jsx(ca,{name:"arbeidsgiverNavn",label:c.jsx(Y,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[gn],readOnly:r||!i}),c.jsx(tt,{name:"fom",label:c.jsx(Y,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[gn,st],isReadOnly:r||!i}),c.jsx(tt,{name:"tom",label:c.jsx(Y,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[st,Sw(m.getValues)],isReadOnly:r||!i})]}),c.jsx(ca,{name:"stillingsprosent",label:c.jsx(Y,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:N=>{const T=parseInt(N.toString(),10);return Number.isNaN(T)?N:T},validate:[gn,Hu,Mw,Dw],readOnly:r||!i,maxLength:3})]}),c.jsx(Wa,{label:c.jsx(Y,{id:"LeggTilArbeidsforholdForm.Begrunn"}),name:"begrunnelse",validate:[gn,qw,_w,Qa],maxLength:1500,readOnly:r||!i}),i&&c.jsxs(Ie,{gap:"4",children:[c.jsx(Pe,{size:"small",variant:"secondary",loading:m.formState.isSubmitting,disabled:!m.formState.isDirty||m.formState.isSubmitting,children:c.jsx(Y,{id:"LeggTilArbeidsforholdForm.Lagre"})}),c.jsx(Pe,{size:"small",variant:"tertiary",loading:!1,disabled:m.formState.isSubmitting,onClick:y,type:"button",children:c.jsx(Y,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),s&&c.jsxs(c.Fragment,{children:[c.jsx(Rr,{}),c.jsx(Pe,{size:"small",variant:"tertiary",loading:!1,disabled:m.formState.isSubmitting,onClick:()=>g(!0),type:"button",icon:c.jsx(um,{"aria-hidden":!0}),children:c.jsx(Y,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),d&&c.jsx(s0,{text:u.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:b,cancel:()=>g(!1),showModal:!0})]})},Nl=(e,t,r,n)=>({vurdering:e,behandlingUuid:t,behandlingVersjon:r,arbeidsgiverIdent:it,begrunnelse:n.begrunnelse,arbeidsgiverNavn:n.arbeidsgiverNavn,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent}),Sw=e=>t=>{const r=e("fom");return t&&r?Xa(r)(t):null},xw=e=>t=>{const r={erPrivatPerson:!1,arbeidsgiverIdent:it,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER},inntektsmeldingerForRad:[],inntektsposter:[],arbeidsforholdForRad:[]},n=t.findIndex(s=>s.arbeidsgiverIdent===it);return n===-1?t.concat(r):t.map((s,a)=>a===n?r:s)},Fw=(e,t,r)=>()=>{e(n=>n.filter(s=>s.arbeidsgiverIdent!==it)),r&&t()};ri.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Vw="_exclamationmarkIcon_1a4yb_1",Lw="_checkmarkIcon_1a4yb_8",Bw="_panelOpen_1a4yb_15",Cw="_panelOpenAp_1a4yb_24",Kw="_row_1a4yb_34",Gw="_isOpen_1a4yb_40",Uw="_isApOpen_1a4yb_44",Wr={exclamationmarkIcon:Vw,checkmarkIcon:Lw,panelOpen:Bw,panelOpenAp:Cw,row:Kw,isOpen:Gw,isApOpen:Uw},Hw=ZI.bind(Wr),Qu=({saksnummer:e,behandlingUuid:t,behandlingVersjon:r,radData:n,isReadOnly:s,erOverstyrt:a,oppdaterTabell:i,registrerArbeidsforhold:l,lagreVurdering:o,toggleÅpenRad:u,erRadÅpen:d,alleKodeverk:g,skjæringstidspunkt:k})=>{const m=Qn(),{inntektsmeldingerForRad:y,arbeidsforholdForRad:h,arbeidsgiverNavn:b,avklaring:w,årsak:v}=n,I=(w==null?void 0:w.saksbehandlersVurdering)===fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,E=h.length>0&&y.length>0&&!v,j=v===Ve.MANGLENDE_INNTEKTSMELDING,N=v===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,T=!!v&&!(w!=null&&w.saksbehandlersVurdering),R=h.length>0&&y.length===0&&!v&&!I,P=h.length===0&&y.length>0&&!v,x=$w(h,w);return c.jsxs(Te.ExpandableRow,{open:d,onOpenChange:u,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:Hw("row",{isOpen:d,isApOpen:T}),content:c.jsxs(Se,{gap:"4",className:T?Wr.panelOpenAp:Wr.panelOpen,children:[I&&c.jsx(ri,{behandlingUuid:t,behandlingVersjon:r,isReadOnly:!1,registrerArbeidsforhold:l,radData:n,lukkArbeidsforholdRad:u,erOverstyrt:a,oppdaterTabell:i}),E&&c.jsx(ni,{saksnummer:e,alleKodeverk:g,radData:n}),P&&c.jsx(at,{saksnummer:e,arbeidsforhold:h.length>0?h[0]:void 0,inntektsmelding:y[0],skalViseArbeidsforholdId:!1,alleKodeverk:g,radData:n}),j&&c.jsxs(c.Fragment,{children:[c.jsx(pa,{saksnummer:e,skjæringstidspunkt:k,alleKodeverk:g,radData:n}),c.jsx(Xu,{behandlingUuid:t,behandlingVersjon:r,isReadOnly:s,radData:n,lagreVurdering:o,lukkArbeidsforholdRad:u,oppdaterTabell:i})]}),N&&c.jsxs(c.Fragment,{children:[c.jsx(at,{saksnummer:e,inntektsmelding:y[0],skalViseArbeidsforholdId:y.length>1,radData:n,alleKodeverk:g}),c.jsx(Ju,{behandlingUuid:t,behandlingVersjon:r,radData:n,isReadOnly:s,registrerArbeidsforhold:l,lagreVurdering:o,lukkArbeidsforholdRad:u,oppdaterTabell:i})]}),R&&c.jsx(pa,{saksnummer:e,skjæringstidspunkt:k,alleKodeverk:g,radData:n})]}),children:[c.jsxs(Te.DataCell,{children:[!T&&c.jsx(Fg,{title:m.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:Wr.checkmarkIcon}),T&&c.jsx(ha,{title:m.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:Wr.exclamationmarkIcon})]}),c.jsx(Te.DataCell,{children:c.jsx(se,{children:b})}),c.jsx(Te.DataCell,{children:c.jsx(se,{children:x!=null&&x.fom?c.jsx(Zr,{dateStringFom:x.fom,dateStringTom:x.tom}):"-"})}),c.jsx(Te.DataCell,{children:c.jsx(se,{children:c.jsx(Y,{id:Yw(I,h.length>0)})})}),c.jsx(Te.DataCell,{children:c.jsxs(se,{children:[h.length<2&&y.length===1&&c.jsx(cs,{dateString:y[0].motattDato}),!j&&h.length>1&&y.length===h.length&&c.jsx(Y,{id:"ArbeidsforholdRad.Mottatt"}),(I||j&&y.length<h.length)&&c.jsx(Y,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})},Yw=(e,t)=>e?"ArbeidsforholdRad.Saksbehandler":t?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",$w=(e,t)=>{if((t==null?void 0:t.saksbehandlersVurdering)===fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||(t==null?void 0:t.saksbehandlersVurdering)===fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:t==null?void 0:t.fom,tom:t==null?void 0:t.tom};const r=e.reduce((n,s)=>({fom:n.fom&&Oe(n.fom).isBefore(s.fom)?n.fom:s.fom,tom:n.tom&&Oe(n.tom).isAfter(s.tom)?n.tom:s.tom}),{fom:void 0,tom:void 0});return r.fom?r:void 0};Qu.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const Ww="_alertStripe_mucgx_5",zw={alertStripe:Ww},Zu=({behandling:e,aksjonspunkt:t,readOnly:r,arbeidOgInntekt:n,registrerArbeidsforhold:s,erOverstyrer:a,tabellData:i,settÅpneRadIndexer:l,setErOverstyrt:o,oppdaterTabell:u})=>{const d=Qn(),{arbeidsforhold:g,inntektsmeldinger:k}=n,[m,y]=f.useState(!1),[h,b]=f.useState(!1),w=()=>{o(!0),y(!0);const j=i.findIndex(N=>{var T;return((T=N.avklaring)==null?void 0:T.saksbehandlersVurdering)===fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER});j!==-1&&l([j])},v=Jw(i,t),I=i.every(j=>j.arbeidsgiverIdent!==it),E=(t==null?void 0:t.status)===Ye.OPPRETTET;return c.jsxs(Se,{gap:"8",children:[c.jsxs(Ie,{gap:"4",children:[c.jsx(ps,{size:"small",children:c.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),a&&E&&!r&&c.jsx($h,{onClick:w}),c.jsx(Rr,{}),c.jsx(se,{size:"small",children:c.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Lo(n.skjæringstidspunkt)}})})]}),c.jsxs(Se,{gap:"4",children:[v.length>0&&c.jsx(Yh,{children:v.map(j=>d.formatMessage({id:j})).join(" ")}),g.length===0&&k.length===0&&a&&c.jsx("div",{className:zw.alertStripe,children:c.jsx(ft,{variant:"info",children:c.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),m&&I&&!h&&c.jsx("div",{children:c.jsx(Pe,{size:"small",variant:"tertiary",icon:c.jsx(tm,{"aria-hidden":!0}),onClick:()=>b(!0),children:c.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),h&&c.jsx(ri,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:s,lukkArbeidsforholdRad:()=>b(!1),oppdaterTabell:u,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})},Jw=(e,t)=>{const r=e.some(i=>i.årsak===Ve.MANGLENDE_INNTEKTSMELDING),n=e.some(i=>i.årsak===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),s=(t==null?void 0:t.status)===Ye.OPPRETTET,a=[];return s&&r&&a.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),s&&n&&a.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),a};Zu.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const Xw="_alertStripe_7z8j7_1",Qw="_headerRow_7z8j7_5",Rl={alertStripe:Xw,headerRow:Qw},eg=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:s,settBehandlingPåVentCallback:a,åpneForNyVurdering:i})=>{const[l,o]=f.useState(!1),[u,d]=f.useState(!1),[g,k]=f.useState(!1),{alleKodeverk:m,submitCallback:y,aksjonspunkterForPanel:h,behandling:b,fagsak:w,isReadOnly:v}=gg(),I=h.length>0?h[0]:void 0,{mellomlagretFormData:E,setMellomlagretFormData:j}=mg(),[N,T]=f.useState(E??JI(e,t)),[R,P]=f.useState(Tl(N)),x=KI();f.useEffect(()=>()=>{j(N)},[N]);const F=G=>{R.some(ee=>ee===G)?P(R.filter(ee=>ee!==G)):P(R.concat(G))},M=f.useRef(null),O=G=>{var ee;T(G),P(Tl(G(N))),(ee=M==null?void 0:M.current)==null||ee.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},q=()=>{o(!0),y({kode:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},S=()=>{o(!0),i()},L=G=>{o(!0),d(!1);const{frist:ee,ventearsak:te}=G;te&&a({frist:ee,ventearsak:te})},B=N.some(G=>{var ee,te,ge;return((ee=G.avklaring)==null?void 0:ee.saksbehandlersVurdering)===fe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||((te=G.avklaring)==null?void 0:te.saksbehandlersVurdering)===fe.MELDING_TIL_ARBEIDSGIVER_NAV_NO||((ge=G.avklaring)==null?void 0:ge.saksbehandlersVurdering)===fe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}),C=N.every(G=>!G.årsak||G.årsak&&G.avklaring),V=I===void 0,$=(I==null?void 0:I.status)===Ye.UTFORT,J=(I==null?void 0:I.status)===Ye.OPPRETTET,ae=!v&&($||s&&V),Ue=!v&&J&&C&&!x&&B,Z=!v&&J&&C&&!x&&!B;return c.jsxs(Se,{gap:"4",children:[c.jsx(Zu,{behandling:b,aksjonspunkt:I,readOnly:v,arbeidOgInntekt:e,registrerArbeidsforhold:r,erOverstyrer:s,tabellData:N,settÅpneRadIndexer:P,setErOverstyrt:k,oppdaterTabell:O}),c.jsxs(Te,{ref:M,children:[c.jsx(Te.Header,{children:c.jsxs(Te.Row,{className:Rl.headerRow,children:[c.jsx(Te.HeaderCell,{scope:"col"}),c.jsx(Te.HeaderCell,{scope:"col",children:c.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),c.jsx(Te.HeaderCell,{scope:"col",children:c.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),c.jsx(Te.HeaderCell,{scope:"col",children:c.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),c.jsx(Te.HeaderCell,{scope:"col",children:c.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),c.jsx(Te.HeaderCell,{scope:"col"})]})}),c.jsx(Te.Body,{children:N.map((G,ee)=>c.jsx(Qu,{saksnummer:w.saksnummer,behandlingUuid:b.uuid,behandlingVersjon:b.versjon,radData:G,skjæringstidspunkt:e.skjæringstidspunkt,isReadOnly:v||$||V,registrerArbeidsforhold:r,lagreVurdering:n,toggleÅpenRad:()=>F(ee),erOverstyrt:g,oppdaterTabell:O,erRadÅpen:R.includes(ee),alleKodeverk:m},`${G.arbeidsgiverNavn}${G.arbeidsgiverIdent}`))})]}),Ue&&c.jsxs("div",{children:[c.jsx(Pe,{size:"small",variant:"primary",disabled:l,onClick:()=>d(!0),type:"button",children:c.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),c.jsx($u,{submitCallback:L,cancelEvent:()=>d(!1),defaultVenteårsak:$e.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:m.Venteårsak,erTilbakekreving:!1,showModal:u,frist:null})]}),Z&&c.jsx("div",{children:c.jsx(Pe,{size:"small",variant:"primary",disabled:l,loading:l,onClick:q,type:"button",children:c.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),ae&&c.jsxs(Se,{gap:"4",children:[c.jsx("div",{className:Rl.alertStripe,children:c.jsx(ft,{variant:"info",children:c.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),c.jsx("div",{children:c.jsx(Pe,{size:"small",variant:"secondary",disabled:l,loading:l,onClick:S,type:"button",children:c.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};eg.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Zw={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},eA=Zn(Zw),ya=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:s,settBehandlingPåVentCallback:a,åpneForNyVurdering:i})=>c.jsx(Bo,{value:eA,children:c.jsx(Wu,{children:c.jsx(eg,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:t,registrerArbeidsforhold:r,lagreVurdering:n,erOverstyrer:s,settBehandlingPåVentCallback:a,åpneForNyVurdering:i})})});ya.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:Pt}=__STORYBOOK_MODULE_ACTIONS__,Jn="342352362",Qe={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},sA={title:"fakta/fakta-arbeid-og-inntekter",component:ya,decorators:[fg,cg],args:{arbeidsgiverOpplysningerPerId:{},lagreVurdering:Pt("onLagreVurdering"),registrerArbeidsforhold:Pt("onRegistrerArbeidsforhold"),åpneForNyVurdering:Pt("onÅpneForNyVurdering"),settBehandlingPåVentCallback:Pt("onSettBehandlingPåVentCallback"),erOverstyrer:!1},render:e=>c.jsx(ya,{...e})},qt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Pr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},_t={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Mt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:fe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,begrunnelse:"Vil innehente inntektsmelding fordi..."}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},Dt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[{...Qe,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},St={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},xt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:fe.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Ft={args:{aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2"}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Vt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Lt={args:{arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Bt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{[Jn]:{erPrivatPerson:!1,identifikator:Jn,navn:"Telenor",referanse:Jn}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:Jn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Ct={args:{arbeidsgiverOpplysningerPerId:{[Jn]:{erPrivatPerson:!1,identifikator:Jn,navn:"Telenor",referanse:Jn}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:Jn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:fe.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0,isReadOnly:!0}},Kt={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Pr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Gt={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2021-12-01",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",stillingsprosent:80,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"41925090",motattDato:"2021-11-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Ut={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Qe,arbeidsgiverIdent:"910909092",eksternArbeidsforholdId:void 0,inntektPrMnd:1e4,internArbeidsforholdId:void 0,kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"55599999",motattDato:"2021-12-06",refusjonPrMnd:5e3,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Ht={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"9374546382674846453452720241327384837356378478393893847474783",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001sdsfdsdfsdfwer",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8cwds",kontaktpersonNavn:"Espen Solstråle",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"1",motattDato:"2021-12-01",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD},{...Qe,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c8wew",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Yt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:void 0,permisjonOgMangel:{permisjonFom:"2022-10-01",type:Pr.PERMITTERING},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d3",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Pr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:void 0}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},$t={args:{erOverstyrer:!0,isReadOnly:!0,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[{...Qe,inntektPrMnd:4e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"947064649",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975324",dokumentId:"549168225",motattDato:"2022-02-15",årsak:void 0,begrunnelse:void 0,saksbehandlersVurdering:void 0}],arbeidsforhold:[],inntekter:[],skjæringstidspunkt:"2022-02-16"}}},Wt={args:{erOverstyrer:!1,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"f98840f3-e74b-4255-ac33-b1cdcdb60311",eksternArbeidsforholdId:"2",fom:"2002-02-16",tom:"9999-12-31",stillingsprosent:20,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[],skjæringstidspunkt:"2022-02-05"}}},zt={args:{erOverstyrer:!1,aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{342352362:{erPrivatPerson:!1,referanse:"342352362",identifikator:"342352362",navn:"Lagt til av saksbehandler"},947064649:{erPrivatPerson:!1,referanse:"947064649",identifikator:"947064649",navn:"SJOKKERENDE ELEKTRIKER"},972674818:{erPrivatPerson:!1,referanse:"972674818",identifikator:"972674818",navn:"PENGELØS SPAREBANK"}},arbeidOgInntekt:{inntektsmeldinger:[{...Qe,inntektPrMnd:2e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"972674818",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975527",dokumentId:"549168458",motattDato:"2022-02-16",årsak:void 0,begrunnelse:"her vil jeg mase på AG",saksbehandlersVurdering:fe.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING}],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"6e220db0-5cdf-410f-b8a0-a78ac4ff87a1",eksternArbeidsforholdId:"2",fom:"2018-10-01",tom:"9999-12-31",stillingsprosent:50,årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:fe.FORTSETT_UTEN_INNTEKTSMELDING,begrunnelse:"her trenger jeg ikke IM. ja ja"},{arbeidsgiverIdent:"972674818",internArbeidsforholdId:"3aee54db-af17-4b18-8c9c-897be1f4d572",eksternArbeidsforholdId:"1",fom:"2000-05-13",tom:"9999-12-31",stillingsprosent:100,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[{arbeidsgiverIdent:"947064649",inntekter:[{beløp:15e3,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]},{arbeidsgiverIdent:"972674818",inntekter:[{beløp:2e4,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]}],skjæringstidspunkt:"2022-02-15"}}},Jt={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Pr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}};var Pl,ql,_l;qt.parameters={...qt.parameters,docs:{...(Pl=qt.parameters)==null?void 0:Pl.docs,source:{originalSource:`{
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
}`,...(_l=(ql=qt.parameters)==null?void 0:ql.docs)==null?void 0:_l.source}}};var Ml,Dl,Sl;_t.parameters={..._t.parameters,docs:{...(Ml=_t.parameters)==null?void 0:Ml.docs,source:{originalSource:`{
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
}`,...(Sl=(Dl=_t.parameters)==null?void 0:Dl.docs)==null?void 0:Sl.source}}};var xl,Fl,Vl;Mt.parameters={...Mt.parameters,docs:{...(xl=Mt.parameters)==null?void 0:xl.docs,source:{originalSource:`{
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
}`,...(Vl=(Fl=Mt.parameters)==null?void 0:Fl.docs)==null?void 0:Vl.source}}};var Ll,Bl,Cl;Dt.parameters={...Dt.parameters,docs:{...(Ll=Dt.parameters)==null?void 0:Ll.docs,source:{originalSource:`{
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
}`,...(Cl=(Bl=Dt.parameters)==null?void 0:Bl.docs)==null?void 0:Cl.source}}};var Kl,Gl,Ul;St.parameters={...St.parameters,docs:{...(Kl=St.parameters)==null?void 0:Kl.docs,source:{originalSource:`{
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
}`,...(Ul=(Gl=St.parameters)==null?void 0:Gl.docs)==null?void 0:Ul.source}}};var Hl,Yl,$l;xt.parameters={...xt.parameters,docs:{...(Hl=xt.parameters)==null?void 0:Hl.docs,source:{originalSource:`{
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
}`,...($l=(Yl=xt.parameters)==null?void 0:Yl.docs)==null?void 0:$l.source}}};var Wl,zl,Jl;Ft.parameters={...Ft.parameters,docs:{...(Wl=Ft.parameters)==null?void 0:Wl.docs,source:{originalSource:`{
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
}`,...(Jl=(zl=Ft.parameters)==null?void 0:zl.docs)==null?void 0:Jl.source}}};var Xl,Ql,Zl;Vt.parameters={...Vt.parameters,docs:{...(Xl=Vt.parameters)==null?void 0:Xl.docs,source:{originalSource:`{
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
}`,...(Zl=(Ql=Vt.parameters)==null?void 0:Ql.docs)==null?void 0:Zl.source}}};var eo,no,ro;Lt.parameters={...Lt.parameters,docs:{...(eo=Lt.parameters)==null?void 0:eo.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...(ro=(no=Lt.parameters)==null?void 0:no.docs)==null?void 0:ro.source}}};var to,so,ao;Bt.parameters={...Bt.parameters,docs:{...(to=Bt.parameters)==null?void 0:to.docs,source:{originalSource:`{
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
}`,...(ao=(so=Bt.parameters)==null?void 0:so.docs)==null?void 0:ao.source}}};var io,lo,oo;Ct.parameters={...Ct.parameters,docs:{...(io=Ct.parameters)==null?void 0:io.docs,source:{originalSource:`{
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
}`,...(oo=(lo=Ct.parameters)==null?void 0:lo.docs)==null?void 0:oo.source}}};var uo,go,mo;Kt.parameters={...Kt.parameters,docs:{...(uo=Kt.parameters)==null?void 0:uo.docs,source:{originalSource:`{
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
}`,...(mo=(go=Kt.parameters)==null?void 0:go.docs)==null?void 0:mo.source}}};var fo,co,ko;Gt.parameters={...Gt.parameters,docs:{...(fo=Gt.parameters)==null?void 0:fo.docs,source:{originalSource:`{
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
}`,...(ko=(co=Gt.parameters)==null?void 0:co.docs)==null?void 0:ko.source}}};var vo,po,yo;Ut.parameters={...Ut.parameters,docs:{...(vo=Ut.parameters)==null?void 0:vo.docs,source:{originalSource:`{
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
}`,...(yo=(po=Ut.parameters)==null?void 0:po.docs)==null?void 0:yo.source}}};var bo,ho,Io;Ht.parameters={...Ht.parameters,docs:{...(bo=Ht.parameters)==null?void 0:bo.docs,source:{originalSource:`{
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
}`,...(Io=(ho=Ht.parameters)==null?void 0:ho.docs)==null?void 0:Io.source}}};var wo,Ao,jo;Yt.parameters={...Yt.parameters,docs:{...(wo=Yt.parameters)==null?void 0:wo.docs,source:{originalSource:`{
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
}`,...(jo=(Ao=Yt.parameters)==null?void 0:Ao.docs)==null?void 0:jo.source}}};var Eo,To,Oo;$t.parameters={...$t.parameters,docs:{...(Eo=$t.parameters)==null?void 0:Eo.docs,source:{originalSource:`{
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
}`,...(Oo=(To=$t.parameters)==null?void 0:To.docs)==null?void 0:Oo.source}}};var No,Ro,Po;Wt.parameters={...Wt.parameters,docs:{...(No=Wt.parameters)==null?void 0:No.docs,source:{originalSource:`{
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
}`,...(Po=(Ro=Wt.parameters)==null?void 0:Ro.docs)==null?void 0:Po.source}}};var qo,_o,Mo;zt.parameters={...zt.parameters,docs:{...(qo=zt.parameters)==null?void 0:qo.docs,source:{originalSource:`{
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
}`,...(Mo=(_o=zt.parameters)==null?void 0:_o.docs)==null?void 0:Mo.source}}};var Do,So,xo;Jt.parameters={...Jt.parameters,docs:{...(Do=Jt.parameters)==null?void 0:Do.docs,source:{originalSource:`{
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
}`,...(xo=(So=Jt.parameters)==null?void 0:So.docs)==null?void 0:xo.source}}};const aA=["InnhentInntektsmelding","InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret","InnhentInntektsmeldingDerBehandlingErAvsluttet","AvklarManglendeArbeidsforhold","AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet","AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig","IngenAksjonspunktMenTilbakehoppMuligForOverstyrer","SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer","SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer","ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet","ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet","ArbeidsforholdErOK","ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet","FlereArbeidsforholdOgInntekstemeldinger","ArbeidsforholdMedSammeOrgNr","ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre","FoerRegisterinnhenting","AutomatiskIgnorertInntektsmelding","EtterAtEtterspurtInntektsmeldingErKommet","SkalViseFødselsnummerForPrivatperson"];export{Ct as ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet,Bt as ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet,Kt as ArbeidsforholdErOK,Gt as ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet,Ht as ArbeidsforholdMedSammeOrgNr,Yt as ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre,Wt as AutomatiskIgnorertInntektsmelding,Dt as AvklarManglendeArbeidsforhold,St as AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet,xt as AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig,zt as EtterAtEtterspurtInntektsmeldingErKommet,Ut as FlereArbeidsforholdOgInntekstemeldinger,$t as FoerRegisterinnhenting,Ft as IngenAksjonspunktMenTilbakehoppMuligForOverstyrer,qt as InnhentInntektsmelding,Mt as InnhentInntektsmeldingDerBehandlingErAvsluttet,_t as InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret,Lt as SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer,Vt as SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer,Jt as SkalViseFødselsnummerForPrivatperson,aA as __namedExportsOrder,sA as default};
